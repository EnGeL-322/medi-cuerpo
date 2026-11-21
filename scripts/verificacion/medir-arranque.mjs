import { writeFileSync } from 'node:fs'
import { rengAbrirApp, rengEspera, rengMediana, rengMemoriaProcesos, rengPerfilScratch } from './cdp.mjs'

const rengEtiqueta = process.argv[2] ?? 'medida'
const rengRepeticiones = Number(process.argv[3] ?? 5)
const rengFicha = process.argv[4] ?? 'ibuprofeno'
const rengFilas = []

for (let rengI = 0; rengI < rengRepeticiones; rengI++) {
  const rengApp = await rengAbrirApp(rengPerfilScratch(`arranque-${rengEtiqueta}`), 9360 + rengI)
  try {
    await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
    const rengTVentana = performance.now() - rengApp.t0
    const rengTHash = performance.now()
    await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
    await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)
    const rengTLista = performance.now() - rengTHash
    const rengItems = await rengApp.ev(`return document.querySelectorAll('.cm-lista-med li[data-id]').length`)
    await rengApp.ev(`const el = document.querySelector('#cm-buscar-med'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengFicha)}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
    await rengApp.esperar(`return !!document.querySelector('.cm-lista-med li[data-id="${rengFicha}"]')`, 10000, 10)
    const rengTClic = performance.now()
    await rengApp.ev(`document.querySelector('.cm-lista-med li[data-id="${rengFicha}"]').click()`)
    await rengApp.esperar(`return document.querySelector('.cm-med-nombre')?.textContent?.length > 0`, 20000, 10)
    const rengTFicha = performance.now() - rengTClic
    await rengEspera(3000)
    const rengHeap = await rengApp.cmd('Runtime.getHeapUsage')
    const rengMem = rengMemoriaProcesos(rengApp.proc.pid)
    rengFilas.push({ ventanaMs: rengTVentana, listaMs: rengTLista, fichaMs: rengTFicha, items: rengItems, heapUsadoMB: rengHeap.usedSize / 1048576, heapTotalMB: rengHeap.totalSize / 1048576, ...rengMem, consola: rengApp.consola.length })
    if (rengApp.consola.length) console.log('consola:', rengApp.consola.slice(0, 3))
  } finally {
    await rengApp.cerrar()
  }
}

const rengResumen = {}
for (const rengK of ['ventanaMs', 'listaMs', 'fichaMs', 'heapUsadoMB', 'heapTotalMB', 'privadoMB', 'residenteMB', 'procesos']) {
  const rengXs = rengFilas.map((rengF) => rengF[rengK])
  rengResumen[rengK] = { mediana: Number(rengMediana(rengXs).toFixed(1)), min: Number(Math.min(...rengXs).toFixed(1)), max: Number(Math.max(...rengXs).toFixed(1)) }
}
const rengSalida = { etiqueta: rengEtiqueta, repeticiones: rengRepeticiones, ficha: rengFicha, items: rengFilas[0]?.items, resumen: rengResumen, filas: rengFilas }
writeFileSync(rengPerfilScratch(`medida-${rengEtiqueta}.json`), JSON.stringify(rengSalida, null, 1))
console.log(JSON.stringify({ etiqueta: rengEtiqueta, items: rengSalida.items, resumen: rengResumen }, null, 1))
