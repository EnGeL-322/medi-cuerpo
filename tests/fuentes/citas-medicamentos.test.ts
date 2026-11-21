import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { RENG_CATALOGO, RENG_CURVAS, rengFuente, rengReferencias, rengReferenciasCurva } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { rengDesdeSmiles } from '../../src/renderer/modules/medicuerpo/nucleo/molecula'

const RENG_DIR = process.env['ETIQUETAS_DIR'] ?? ''
const rengNorm = (rengS: string): string =>
  rengS
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[‘’´`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—−]/g, '-')
    .replace(/\s+/g, '')

interface RengDoc {
  texto: string
  secciones: Map<string, string[]>
  version?: string
  fecha?: string
  pubchem?: { CID: number; MolecularFormula: string; MolecularWeight: string; SMILES: string; InChIKey: string } | null
}
const RENG_MESES: Record<string, string> = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' }
const rengIsoDe = (rengD: string): string => {
  const rengM = /^(\w{3}) (\d{1,2}), (\d{4})$/.exec(rengD)
  return rengM ? `${rengM[3]}-${RENG_MESES[rengM[1]!]}-${rengM[2]!.padStart(2, '0')}` : rengD
}

interface RengArticulo {
  texto: string
  tablas: Array<{ titulo: string; texto: string }>
}
const rengSinEtiquetas = (rengX: string): string =>
  rengX
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
function rengArticulo(rengXml: string): RengArticulo {
  const rengTablas = [...rengXml.matchAll(/<table-wrap\b[\s\S]*?<\/table-wrap>/g)].map((rengM) => ({ titulo: rengNorm(rengSinEtiquetas(/<caption>([\s\S]*?)<\/caption>/.exec(rengM[0])?.[1] ?? '')), texto: rengSinEtiquetas(rengM[0]).replace(/\s+/g, ' ') }))
  return { texto: rengNorm(rengSinEtiquetas(rengXml)), tablas: rengTablas }
}

function rengCargar(): { porSetid: Map<string, RengDoc>; porCima: Map<string, RengDoc>; porId: Map<string, RengDoc>; msd: Map<string, string>; articulos: Map<string, RengArticulo> } {
  const rengPorSetid = new Map<string, RengDoc>()
  const rengPorCima = new Map<string, RengDoc>()
  const rengPorId = new Map<string, RengDoc>()
  const rengMsd = new Map<string, string>()
  const rengArticulos = new Map<string, RengArticulo>()
  for (const rengF of readdirSync(RENG_DIR)) {
    const rengP = join(RENG_DIR, rengF)
    if (rengF.endsWith('.json')) {
      const rengD = JSON.parse(readFileSync(rengP, 'utf8'))
      const rengTexto = [
        ...(rengD.secciones ?? []).map((rengS: { texto: string }) => rengS.texto),
        ...(rengD.productos ?? []).flatMap((rengX: { nombre: string; forma: string; ingredientes: Array<{ sustancia: string }> }) => [rengX.nombre, rengX.forma, ...rengX.ingredientes.map((rengI) => rengI.sustancia)])
      ].join('\n')
      const rengSecciones = new Map<string, string[]>()
      for (const rengS of rengD.secciones ?? []) {
        const rengTextos = rengSecciones.get(rengS.codigo) ?? []
        rengTextos.push(rengNorm(rengS.texto))
        rengSecciones.set(rengS.codigo, rengTextos)
      }
      const rengDoc: RengDoc = { texto: rengNorm(rengTexto), secciones: rengSecciones, pubchem: rengD.pubchem, version: rengD.meta?.spl_version !== undefined ? String(rengD.meta.spl_version) : undefined, fecha: rengD.meta?.published_date ? rengIsoDe(rengD.meta.published_date) : rengD.meta?.fecha }
      if (rengD.setid) rengPorSetid.set(rengD.setid, rengDoc)
      if (rengD.cima) rengPorCima.set(String(rengD.cima), rengDoc)
      rengPorId.set(rengD.id, rengDoc)
    } else if (rengF.startsWith('estudio-') && rengF.endsWith('.xml')) {
      rengArticulos.set(rengF.replace(/^estudio-|\.xml$/g, ''), rengArticulo(readFileSync(rengP, 'utf8')))
    } else if (rengF.startsWith('msd-') && rengF.endsWith('.html')) {
      const rengT = readFileSync(rengP, 'utf8')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&#39;|&rsquo;/g, "'")
      rengMsd.set(rengF.replace(/\.html$/, ''), rengNorm(rengT))
    }
  }
  return { porSetid: rengPorSetid, porCima: rengPorCima, porId: rengPorId, msd: rengMsd, articulos: rengArticulos }
}

const RENG_MSD: Record<string, string> = { 'msd-absorcion': 'msd-drug-absorption', 'msd-biodisponibilidad': 'msd-drug-bioavailability', 'msd-metabolismo': 'msd-drug-metabolism', 'msd-excrecion': 'msd-drug-excretion' }

describe.skipIf(!RENG_DIR || !existsSync(RENG_DIR))('fichas de medicamentos frente a sus documentos', () => {
  const rengC = rengCargar()
  const rengDocDe = (rengId: string): { doc?: RengDoc; msd?: string } => {
    const rengF = rengFuente(rengId)
    if (!rengF) return {}
    if (rengF.tipo === 'manual') return { msd: rengC.msd.get(RENG_MSD[rengId] ?? '') }
    const rengSetid = /setid=([0-9a-f-]+)/.exec(rengF.url)?.[1]
    if (rengSetid) return { doc: rengC.porSetid.get(rengSetid) }
    const rengNreg = /\/ft\/(\d+)\//.exec(rengF.url)?.[1]
    if (rengNreg) return { doc: rengC.porCima.get(rengNreg) }
    return {}
  }

  it('metabolitos y enantiómeros con CID: su estructura coincide con PubChem (pubchem-compuestos.json)', () => {
    const rengP = join(RENG_DIR, 'pubchem-compuestos.json')
    const rengProps: Array<{ CID: number; SMILES: string }> = existsSync(rengP) ? JSON.parse(readFileSync(rengP, 'utf8')).PropertyTable.Properties : []
    const rengUsados = RENG_CATALOGO.flatMap((rengF) => [
      ...rengF.recorrido.metabolismo.metabolitos.filter((rengM) => rengM.cid && rengM.smiles).map((rengM) => ({ cid: rengM.cid!, smiles: rengM.smiles!, donde: `${rengF.activo.id}: ${rengM.nombre}` })),
      ...(rengF.activo.estereo?.enantiomeros ?? []).map((rengE) => ({ cid: rengE.cid, smiles: rengE.smiles, donde: `${rengF.activo.id}: ${rengE.nombre}` }))
    ])
    const rengFallos: string[] = []
    for (const rengU of rengUsados) {
      const rengPc = rengProps.find((rengX) => rengX.CID === rengU.cid)
      if (!rengPc) rengFallos.push(`${rengU.donde}: falta el CID ${rengU.cid} en pubchem-compuestos.json`)
      else if (rengDesdeSmiles(rengPc.SMILES).id !== rengDesdeSmiles(rengU.smiles).id) rengFallos.push(`${rengU.donde}: el SMILES no es el de PubChem CID ${rengU.cid}`)
    }
    expect(rengFallos, rengFallos.join(' | ')).toEqual([])
  })

  for (const rengCurva of RENG_CURVAS) {
    it(`${rengCurva.id}: cada cita y cada valor de la serie están en el artículo`, () => {
      const rengF = rengFuente(rengCurva.fuente)
      const rengPmc = /articles\/(PMC\d+)/.exec(rengF?.url ?? '')?.[1] ?? ''
      const rengA = rengC.articulos.get(rengPmc)
      expect(rengA, `falta estudio-${rengPmc}.xml en ETIQUETAS_DIR`).toBeDefined()
      const rengFallos: string[] = []
      for (const { donde: rengDonde, ref: rengRef } of rengReferenciasCurva(rengCurva)) if (!rengA!.texto.includes(rengNorm(rengRef.cita))) rengFallos.push(`${rengDonde}: «${rengRef.cita}»`)
      const rengNumeros = (rengT: string): Set<string> => new Set([...rengT.matchAll(/\d+(?:\.\d+)?/g)].map((rengM) => rengM[0]))
      for (const rengS of rengCurva.series) {
        const rengTabla = rengA!.tablas.find((rengT) => rengT.titulo.includes(rengNorm(rengS.ref.cita)))
        if (!rengTabla) {
          rengFallos.push(`${rengS.id}: no se encontró la tabla «${rengS.ref.cita}»`)
          continue
        }
        const rengEnTabla = rengNumeros(rengTabla.texto)
        for (const rengP of rengS.puntos) {
          for (const rengV of [rengP.c, ...(rengP.intervalo ?? [])]) if (![String(rengV), rengV.toFixed(1)].some((rengX) => rengEnTabla.has(rengX))) rengFallos.push(`${rengS.id} t=${rengP.t}: ${rengV} no está en la tabla`)
          if (!rengEnTabla.has(String(rengP.t)) && !rengEnTabla.has(rengP.t.toFixed(1))) rengFallos.push(`${rengS.id}: el tiempo ${rengP.t} no está en la tabla`)
        }
      }
      expect(rengFallos, rengFallos.join('\n')).toEqual([])
    })
  }

  for (const rengFicha of RENG_CATALOGO) {
    it(`${rengFicha.activo.id}: cada cita está en su documento`, () => {
      const rengFallos: string[] = []
      for (const { donde: rengDonde, ref: rengRef } of rengReferencias(rengFicha)) {
        const { doc: rengDoc, msd: rengMsd } = rengDocDe(rengRef.f)
        const rengTexto = rengMsd ?? rengDoc?.texto
        if (!rengTexto) {
          rengFallos.push(`${rengDonde}: no hay documento descargado para ${rengRef.f}`)
          continue
        }
        const rengBloques = rengRef.codigo ? (rengDoc?.secciones.get(rengRef.codigo) ?? []) : [rengTexto]
        if (!rengBloques.some((rengS) => rengS.includes(rengNorm(rengRef.cita)))) rengFallos.push(`${rengDonde} (${rengRef.f} · ${rengRef.sec}): «${rengRef.cita}»`)
      }
      expect(rengFallos, rengFallos.join('\n')).toEqual([])
    })
    it(`${rengFicha.activo.id}: versión y fecha de cada etiqueta e identidad química (PubChem)`, () => {
      for (const rengF of rengFicha.fuentes) {
        if (rengF.tipo === 'pubchem' || rengF.tipo === 'manual') continue
        const { doc: rengDoc } = rengDocDe(rengF.id)
        expect(rengDoc, rengF.id).toBeDefined()
        if (rengF.version) expect(rengF.version, rengF.id).toBe(rengDoc!.version)
        if (rengF.fecha) expect(rengF.fecha, rengF.id).toBe(rengDoc!.fecha)
      }
      if (rengFicha.combinacion) return
      const rengPc = rengC.porId.get(rengFicha.activo.id)?.pubchem
      expect(rengPc, `${rengFicha.activo.id}: sin PubChem descargado`).toBeTruthy()
      const rengA = rengFicha.activo
      expect(rengA.cid).toBe(rengPc!.CID)
      expect(rengA.formula).toBe(rengPc!.MolecularFormula.replace(/[+-]\d*$/, ''))
      expect(rengA.inchikey).toBe(rengPc!.InChIKey)
      expect(Math.abs(rengA.masaMolar - Number(rengPc!.MolecularWeight))).toBeLessThan(0.02)
      expect(rengDesdeSmiles(rengA.smiles).id).toBe(rengDesdeSmiles(rengPc!.SMILES).id)
    })
  }
})
