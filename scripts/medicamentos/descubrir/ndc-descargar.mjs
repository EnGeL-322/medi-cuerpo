#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { rengEspera } from './comun.mjs'

const [rengSalida] = process.argv.slice(2)
if (!rengSalida) {
  console.error('Uso: node ndc-descargar.mjs <salida.json>')
  process.exit(1)
}

let rengUrl = 'https://api.fda.gov/drug/ndc.json?search=finished:true&sort=product_ndc:asc&limit=1000'
const rengRegistros = []
let rengPaginas = 0
while (rengUrl) {
  let rengR = null
  for (let rengI = 0; rengI < 4 && !rengR; rengI++) {
    const rengResp = await fetch(rengUrl, { headers: { 'User-Agent': 'medicuerpo-datos/1.0' } })
    if (rengResp.ok) rengR = rengResp
    else await rengEspera(3000 * (rengI + 1))
  }
  if (!rengR) throw new Error(`fallo al pedir ${rengUrl}`)
  const rengJson = await rengR.json()
  for (const rengX of rengJson.results) {
    rengRegistros.push({
      ndc: rengX.product_ndc,
      gen: rengX.generic_name,
      brand: rengX.brand_name,
      lab: rengX.labeler_name,
      ai: (rengX.active_ingredients ?? []).map((rengA) => rengA.name),
      df: rengX.dosage_form,
      route: rengX.route,
      cat: rengX.marketing_category,
      type: rengX.product_type,
      set: rengX.openfda?.spl_set_id?.[0],
      rxcui: rengX.openfda?.rxcui
    })
  }
  const rengEnlace = rengR.headers.get('link')
  rengUrl = rengEnlace ? (/<([^>]+)>;\s*rel="next"/.exec(rengEnlace)?.[1] ?? null) : null
  rengPaginas++
  if (rengPaginas % 20 === 0) console.error(`${rengPaginas} páginas, ${rengRegistros.length} registros`)
  await rengEspera(350)
}
writeFileSync(rengSalida, JSON.stringify(rengRegistros))
console.log(`registros ${rengRegistros.length}`)
