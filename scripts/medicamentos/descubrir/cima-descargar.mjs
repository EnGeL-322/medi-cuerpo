#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { rengEspera, rengPedir } from './comun.mjs'

const [rengSalida] = process.argv.slice(2)
if (!rengSalida) {
  console.error('Uso: node cima-descargar.mjs <salida.json>')
  process.exit(1)
}

async function rengPaginas(rengFiltros) {
  const rengOut = []
  for (let rengP = 1; rengP <= 60; rengP++) {
    const rengJ = await rengPedir(`https://cima.aemps.es/cima/rest/medicamentos?${rengFiltros}&pagesize=400&pagina=${rengP}`)
    if (!rengJ || !rengJ.resultados.length) break
    rengOut.push(...rengJ.resultados)
    await rengEspera(300)
  }
  return rengOut
}

const rengTodos = await rengPaginas('comerc=1')
const rengUnicos = new Set((await rengPaginas('comerc=1&npactiv=1')).map((rengX) => rengX.nregistro))
const rengSalidaDatos = rengTodos.map((rengX) => ({
  nreg: rengX.nregistro,
  nombre: rengX.nombre,
  lab: rengX.labtitular,
  rx: rengX.receta,
  gen: rengX.generico,
  bio: rengX.biosimilar,
  vtm: rengX.vtm?.nombre ?? '',
  vias: (rengX.viasAdministracion ?? []).map((rengV) => rengV.nombre),
  ff: rengX.formaFarmaceutica?.nombre ?? '',
  ffs: rengX.formaFarmaceuticaSimplificada?.nombre ?? '',
  dosis: rengX.dosis,
  unico: rengUnicos.has(rengX.nregistro),
  ft: rengX.docs?.find((rengD) => rengD.tipo === 1)?.fecha,
  secc: rengX.docs?.find((rengD) => rengD.tipo === 1)?.secc
}))
writeFileSync(rengSalida, JSON.stringify(rengSalidaDatos))
console.log(`medicamentos ${rengSalidaDatos.length}, de un solo principio activo ${rengSalidaDatos.filter((rengX) => rengX.unico).length}`)
