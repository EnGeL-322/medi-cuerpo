#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { rengEspera, rengPedir } from './comun.mjs'

const [rengCandidatos, rengMercado, rengFamilia, rengN = '45', rengSemilla = '12345', rengSalida] = process.argv.slice(2)
if (!rengCandidatos || !rengMercado || !rengFamilia) {
  console.error('Uso: node muestrear-farmacocinetica.mjs <candidatos.json> <EE. UU.|España (UE)> <solido-oral|liquido-oral|inyectable> [n] [semilla] [salida.json]')
  process.exit(1)
}

let rengEstado = Number(rengSemilla)
const rengAzar = () => (rengEstado = (rengEstado * 1664525 + 1013904223) % 4294967296) / 4294967296
const rengElegibles = JSON.parse(readFileSync(rengCandidatos, 'utf8')).filter((rengE) => rengE.mercado === rengMercado && rengE.familia === rengFamilia && !rengE.combinacion && !rengE.biologico)
const rengElegidos = new Set()
while (rengElegidos.size < Math.min(Number(rengN), rengElegibles.length)) rengElegidos.add(Math.floor(rengAzar() * rengElegibles.length))

const RENG_TEMAS = {
  absorcion: /absor|bioavail|peak|t ?max|c ?max|biodisponib|concentraci/i,
  distribucion: /distribut|bound|binding|volume of distribution|distribuci|uni[oó]n a prote|volumen/i,
  metabolismo: /metabol|biotransform/i,
  eliminacion: /elimin|excret|half-life|half life|semivida|orina|urine/i
}

function rengTemas(rengTexto) {
  return Object.fromEntries(Object.entries(RENG_TEMAS).map(([rengK, rengRe]) => [rengK, rengRe.test(rengTexto)]))
}

const rengFilas = []
for (const rengI of rengElegidos) {
  const rengE = rengElegibles[rengI]
  let rengTexto = ''
  let rengDoc = ''
  if (rengMercado === 'EE. UU.') {
    for (const rengSet of rengE.conjuntos) {
      const rengXml = await rengPedir(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${rengSet}.xml`, 'texto')
      if (!rengXml) continue
      const rengSeccion = (rengCodigo) => new RegExp(String.raw`<section[^>]*>\s*<id[^>]*/>\s*<code code="${rengCodigo}"[\s\S]*?</section>`).exec(rengXml)?.[0] ?? ''
      rengTexto = (rengSeccion('43682-4') || rengSeccion('34090-1')).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
      rengDoc = rengSet
      break
    }
  } else {
    const rengR = rengE.registros[0]
    const rengCuerpo = await rengPedir(`https://cima.aemps.es/cima/rest/docSegmentado/contenido/1?nregistro=${rengR.nreg}&seccion=5.2`, 'texto')
    rengTexto = (rengCuerpo ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
    rengDoc = rengR.nreg
  }
  const rengT = rengTemas(rengTexto)
  rengFilas.push({ activos: rengE.activos.join(' + '), forma: rengE.forma, via: rengE.via, documento: rengDoc, caracteres: rengTexto.length, ...rengT, cuatroTemas: Object.values(rengT).every(Boolean) })
  await rengEspera(250)
}

const rengLeidos = rengFilas.filter((rengF) => rengF.documento)
const rengResumen = { mercado: rengMercado, familia: rengFamilia, muestra: rengFilas.length, leidos: rengLeidos.length, seccionConTexto: rengLeidos.filter((rengF) => rengF.caracteres > 400).length, cuatroTemas: rengLeidos.filter((rengF) => rengF.cuatroTemas && rengF.caracteres > 400).length }
console.log(JSON.stringify(rengResumen))
if (rengSalida) writeFileSync(rengSalida, JSON.stringify({ resumen: rengResumen, filas: rengFilas }, null, 1))
