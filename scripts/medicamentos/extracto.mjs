#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [rengDir, rengSalida, ...rengIds] = process.argv.slice(2)
if (!rengDir || !rengSalida || !rengIds.length) {
  console.error('Uso: node extracto.mjs <carpeta-etiquetas> <archivo-salida> <id> [id ...]')
  process.exit(1)
}

const RENG_CLAVES_FC = /absor|bioavail|peak|t ?max|c ?max|food|meal|fast|distribut|bound|binding|volume|metabol|cyp|ugt|glucuron|excret|eliminat|half-life|half life|urine|urinary|fec|faec|renal|clearance|release|enteric|delayed|extended|prodrug|hydroly|active metabolite|unchanged/i
const rengFrases = (rengT) => rengT.replace(/\s+/g, ' ').split(/(?<=[.;])\s+(?=[A-Z(])/)
const rengRecorte = (rengT, rengN) => (rengT.length > rengN ? rengT.slice(0, rengN) + ' […]' : rengT)

function rengDailyMed(rengD) {
  const rengSec = (rengC) => rengD.secciones.filter((rengS) => rengS.codigo === rengC)
  const rengUna = (rengC) => rengSec(rengC)[0]?.texto ?? ''
  const rengOut = []
  rengOut.push(`### ${rengD.id} · ${rengD.meta.title} · setid ${rengD.setid} · v${rengD.meta.spl_version} · ${rengD.meta.published_date}`)
  const rengPc = rengD.pubchem
  rengOut.push(rengPc ? `PubChem ${rengPc.CID} · ${rengPc.MolecularFormula} · ${rengPc.MolecularWeight} · ${rengPc.InChIKey} · ${rengPc.IUPACName}` : 'PubChem: SIN DATOS')
  const rengVistos = new Set()
  for (const rengP of rengD.productos) {
    const rengAct = rengP.ingredientes.filter((rengI) => rengI.clase !== 'IACT').map((rengI) => `${rengI.sustancia} [${rengI.clase}${rengI.resto ? ` → ${rengI.resto}` : ''}] ${rengI.cantidad ?? ''}`).join(' + ')
    const rengK = `${rengP.forma}|${rengP.ruta}|${rengAct}`
    if (rengVistos.has(rengK)) continue
    rengVistos.add(rengK)
    rengOut.push(`PRODUCTO ${rengP.nombre} · ${rengP.forma} · ${rengP.ruta} · ${rengAct}`)
  }
  const rengInact = rengD.productos[0]?.ingredientes.filter((rengI) => rengI.clase === 'IACT').map((rengI) => rengI.sustancia.toLowerCase()) ?? []
  rengOut.push(`INACTIVOS: ${rengInact.length}`)
  if (!rengInact.length) rengOut.push(`[X 34089-3] ${rengRecorte((/[^.]*inactive ingredients?[^.]*\./i.exec(rengUna('34089-3').replace(/\s+/g, ' '))?.[0] ?? 'sin frase de excipientes').trim(), 500)}`)
  rengOut.push(`[U 34067-9] ${rengRecorte(rengUna('34067-9').replace(/\s+/g, ' '), 450)}`)
  rengOut.push(`[F 43678-2] ${rengRecorte(rengUna('43678-2').replace(/\s+/g, ' '), 260) || rengRecorte(rengUna('34089-3').replace(/\s+/g, ' '), 260)}`)
  rengOut.push(`[A 43679-0] ${rengRecorte(rengUna('43679-0').replace(/\s+/g, ' '), 600)}`)
  const rengMicro = rengUna('49489-8')
  if (rengMicro) rengOut.push(`[A 49489-8] ${rengRecorte(rengMicro.replace(/\s+/g, ' '), 500)}`)
  if (!rengUna('43679-0') && !rengMicro) rengOut.push(`[A 34090-1] ${rengRecorte(rengUna('34090-1').replace(/\s+/g, ' '), 600)}`)
  const rengFc = rengUna('43682-4') || rengUna('34090-1')
  const rengCodFc = rengUna('43682-4') ? '43682-4' : '34090-1'
  const rengCorteFc = rengFc.replace(/\s+/g, ' ').search(/(Specific Populations|Special Populations?|Drug Interactions?|Drug-Drug Interactions?|Impact of Other Drugs|Effects? of Other Drugs|Pharmacogenomics)/)
  const rengFcUtil = rengCorteFc > 600 ? rengFc.replace(/\s+/g, ' ').slice(0, rengCorteFc) : rengFc
  const rengSel = rengFrases(rengFcUtil).filter((rengF) => RENG_CLAVES_FC.test(rengF))
  rengOut.push(`[PK ${rengCodFc}] ${rengRecorte(rengSel.join(' '), 2300)}`)
  const rengArTexto = rengUna('34084-4').replace(/\s+/g, ' ')
  const rengIniAr = Math.max(0, rengArTexto.search(/most common|most frequent|commonly reported|incidence/i))
  rengOut.push(`[R 34084-4] ${rengRecorte(rengArTexto.slice(rengIniAr), 650)}`)
  const rengBw = rengUna('34066-1')
  if (rengBw) rengOut.push(`[BW 34066-1] ${rengRecorte(rengBw.replace(/\s+/g, ' '), 330)}`)
  const rengWp = rengD.secciones.filter((rengS) => rengS.codigo === '42229-5' && /^5\.\d/.test(rengS.titulo)).slice(0, 4).map((rengS) => `${rengS.titulo}: ${rengRecorte(rengS.texto.replace(/\s+/g, ' ').replace(rengS.titulo, '').trim(), 170)}`)
  if (rengWp.length) rengOut.push(`[WP 43685-7] ${rengWp.join(' ‖ ')}`)
  else if (rengUna('34071-1')) rengOut.push(`[W 34071-1] ${rengRecorte(rengUna('34071-1').replace(/\s+/g, ' '), 400)}`)
  else if (rengUna('43685-7')) rengOut.push(`[W 43685-7] ${rengRecorte(rengUna('43685-7').replace(/\s+/g, ' '), 400)}`)
  return rengOut.join('\n')
}

function rengCima(rengD) {
  const rengUna = (rengC) => rengD.secciones.find((rengS) => rengS.codigo === rengC)?.texto.replace(/\s+/g, ' ') ?? ''
  const rengOut = []
  rengOut.push(`### ${rengD.id} · ${rengD.meta.title} [${rengD.meta.titular}] · CIMA ${rengD.cima} · ${rengD.meta.fecha} · ${rengD.meta.forma} · ${rengD.meta.via}`)
  const rengPc = rengD.pubchem
  rengOut.push(rengPc ? `PubChem ${rengPc.CID} · ${rengPc.MolecularFormula} · ${rengPc.MolecularWeight} · ${rengPc.InChIKey} · ${rengPc.IUPACName}` : 'PubChem: SIN DATOS')
  rengOut.push(`ACTIVOS ${JSON.stringify(rengD.meta.activos)}`)
  for (const [rengC, rengN] of [['FT 2', 300], ['FT 3', 200], ['FT 4.1', 450], ['FT 5.1', 650], ['FT 5.2', 2300], ['FT 4.8', 700], ['FT 4.4', 450], ['FT 6.1', 400]]) rengOut.push(`[${rengC}] ${rengRecorte(rengUna(rengC), rengN)}`)
  return rengOut.join('\n')
}

const rengBloques = []
for (const rengId of rengIds) {
  try {
    const rengD = JSON.parse(readFileSync(join(rengDir, `${rengId}.json`), 'utf8'))
    rengBloques.push(rengD.cima ? rengCima(rengD) : rengDailyMed(rengD))
  } catch (rengE) {
    rengBloques.push(`### ${rengId} · ERROR ${rengE.message}`)
  }
}
writeFileSync(rengSalida, rengBloques.join('\n\n') + '\n')
console.log(`extracto de ${rengIds.length} etiquetas en ${rengSalida}`)
