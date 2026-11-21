#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { RENG_CATEGORIAS_APROBADAS, RENG_TIPOS_EXCLUIDOS, rengFamiliaCima, rengFamiliaNdc, rengFormaNdc, rengLiberacionCima, rengLiberacionNdc, rengNormalizar, rengSinSal } from './comun.mjs'

const [rengNdc, rengCima, rengCatalogo, rengSalida] = process.argv.slice(2)
if (!rengNdc || !rengCima || !rengCatalogo || !rengSalida) {
  console.error('Uso: node candidatos.mjs <ndc.json> <cima.json> <carpeta-catalogo> <salida.json>')
  process.exit(1)
}

const rengIndiceCatalogo = new Map()
for (const rengF of readdirSync(rengCatalogo).filter((rengX) => rengX.endsWith('.ts'))) {
  const rengT = readFileSync(join(rengCatalogo, rengF), 'utf8')
  const rengId = /\bid: '([^']+)'/.exec(rengT)?.[1]
  const rengNombre = /nombre: '([^']+)'/.exec(rengT)?.[1]
  const rengSin = (/sinonimos: \[([^\]]*)\]/.exec(rengT)?.[1] ?? '').match(/'[^']+'/g)?.map((rengS) => rengS.slice(1, -1)) ?? []
  if (!rengId || !rengNombre) continue
  for (const rengN of [rengNombre, ...rengSin, rengId]) {
    rengIndiceCatalogo.set(rengNormalizar(rengN), rengId)
    rengIndiceCatalogo.set(rengSinSal(rengN), rengId)
  }
}

const rengFichaDe = (rengNombre) => rengIndiceCatalogo.get(rengSinSal(rengNombre)) ?? rengIndiceCatalogo.get(rengNormalizar(rengNombre)) ?? null

const rengNdcDatos = JSON.parse(readFileSync(rengNdc, 'utf8'))
const rengUs = new Map()
for (const rengX of rengNdcDatos) {
  if (RENG_TIPOS_EXCLUIDOS.has(rengX.type) || !RENG_CATEGORIAS_APROBADAS.has(rengX.cat)) continue
  const rengFamilia = rengFamiliaNdc(rengX)
  if (rengFamilia === 'otra') continue
  const rengActivos = [...new Set(rengX.ai.map(rengSinSal))].filter(Boolean).sort()
  if (!rengActivos.length) continue
  const rengVia = rengX.route.includes('ORAL') ? 'ORAL' : rengX.route[0]
  const rengForma = rengFormaNdc(rengX.df)
  const rengLiberacion = rengLiberacionNdc(rengX.df)
  const rengClave = [rengActivos.join(' + '), rengForma, rengVia, rengLiberacion].join('|')
  let rengE = rengUs.get(rengClave)
  if (!rengE) {
    rengE = { mercado: 'EE. UU.', familia: rengFamilia, activos: rengActivos, forma: rengForma, via: rengVia, liberacion: rengLiberacion, categoria: rengX.cat, biologico: rengX.cat === 'BLA', combinacion: rengActivos.length > 1, ficha: rengActivos.length === 1 ? rengFichaDe(rengActivos[0]) : null, conjuntos: new Set(), productos: new Set() }
    rengUs.set(rengClave, rengE)
  }
  if (rengX.set) rengE.conjuntos.add(rengX.set)
  rengE.productos.add(rengX.brand || rengX.gen)
}

const rengTipoVtm = (rengVtm) => (/vacuna|inmunoglobulina|multicomponente|toxina|al[eé]rgeno|antiveneno|hemoderivado|factor de coagulaci|plasma|albumina|albúmina/i.test(rengVtm) ? 'biologico' : /\s\+\s|,\s| y /.test(rengVtm) ? 'combinacion' : 'simple')
const rengCimaDatos = JSON.parse(readFileSync(rengCima, 'utf8'))
const rengEs = new Map()
for (const rengX of rengCimaDatos) {
  const rengFamilia = rengFamiliaCima(rengX)
  if (rengFamilia === 'otra' || !rengX.vtm) continue
  const rengClave = [rengNormalizar(rengX.vtm), rengX.ffs, rengX.vias.join('+'), rengLiberacionCima(rengX.ffs)].join('|')
  let rengE = rengEs.get(rengClave)
  if (!rengE) {
    const rengTipo = rengTipoVtm(rengX.vtm)
    rengE = { mercado: 'España (UE)', familia: rengFamilia, activos: [rengNormalizar(rengX.vtm)], forma: rengX.ffs, via: rengX.vias.join('+'), liberacion: rengLiberacionCima(rengX.ffs), biologico: rengTipo === 'biologico', combinacion: rengTipo === 'combinacion', tipoVtm: rengTipo, ficha: rengTipo === 'simple' ? rengFichaDe(rengX.vtm) : null, registros: [], unicos: 0, total: 0 }
    rengEs.set(rengClave, rengE)
  }
  rengE.total++
  if (rengX.unico) rengE.unicos++
  if (rengE.registros.length < 8) rengE.registros.push({ nreg: rengX.nreg, nombre: rengX.nombre, unico: rengX.unico, ft: rengX.ft })
}
for (const rengE of rengEs.values()) rengE.noUnicos = rengE.total - rengE.unicos

const rengLista = [...[...rengUs.values()].map((rengE) => ({ ...rengE, conjuntos: [...rengE.conjuntos].slice(0, 8), productos: [...rengE.productos].slice(0, 8) })), ...rengEs.values()]
writeFileSync(rengSalida, JSON.stringify(rengLista))

const rengFilas = []
for (const rengMercado of ['EE. UU.', 'España (UE)'])
  for (const rengFamilia of ['solido-oral', 'liquido-oral', 'inyectable']) {
    const rengC = rengLista.filter((rengE) => rengE.mercado === rengMercado && rengE.familia === rengFamilia)
    rengFilas.push({
      mercado: rengMercado,
      familia: rengFamilia,
      candidatos: rengC.length,
      monofarmaco: rengC.filter((rengE) => !rengE.combinacion).length,
      conFichaExistente: rengC.filter((rengE) => rengE.ficha).length,
      biologicos: rengC.filter((rengE) => rengE.biologico).length,
      ...(rengMercado === 'España (UE)' ? { simples: rengC.filter((rengE) => rengE.tipoVtm === 'simple').length, combinaciones: rengC.filter((rengE) => rengE.tipoVtm === 'combinacion').length, biologicosVtm: rengC.filter((rengE) => rengE.tipoVtm === 'biologico').length, simplesConNpactivMayorQue1: rengC.filter((rengE) => rengE.tipoVtm === 'simple' && rengE.noUnicos > 0).length } : {})
    })
  }
console.table(rengFilas)
