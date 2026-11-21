import fs, { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { RENG_PROYECTO, rengAbrirApp, rengEspera, rengPerfilScratch } from './cdp.mjs'

const rengIndice = JSON.parse(fs.readFileSync(resolve(RENG_PROYECTO, 'src/renderer/modules/medicuerpo/cuerpo/datos/indice.json'), 'utf8'))
const rengNombreDe = (rengId) => rengIndice.activos.find((rengA) => rengA.id === rengId)?.nombre ?? rengId

const rengArgs = process.argv.slice(2)
const rengEtiqueta = rengArgs.find((rengA) => rengA.startsWith('--etiqueta='))?.split('=')[1] ?? 'recorrido'
const rengAzar = Number(rengArgs.find((rengA) => rengA.startsWith('--azar='))?.split('=')[1] ?? 0)
const rengCapturas = rengArgs.find((rengA) => rengA.startsWith('--capturas='))?.split('=')[1]
let rengIds = rengArgs.filter((rengA) => !rengA.startsWith('--'))

const rengApp = await rengAbrirApp(rengPerfilScratch(`recorrido-${rengEtiqueta}`), 9380)
const rengInformes = []
try {
  await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
  await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
  await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)
  if (rengAzar > 0) {
    const rengTodos = await rengApp.ev(`return [...document.querySelectorAll('.cm-lista-med li[data-id]')].map((li) => li.dataset.id)`)
    let rengSemilla = 20261115
    const rengRnd = () => (rengSemilla = (rengSemilla * 1664525 + 1013904223) % 4294967296) / 4294967296
    const rengElegidos = new Set()
    while (rengElegidos.size < Math.min(rengAzar, rengTodos.length)) rengElegidos.add(rengTodos[Math.floor(rengRnd() * rengTodos.length)])
    rengIds = [...rengElegidos]
  }
  const rengClicLista = (rengId) => `const li = document.querySelector('.cm-lista-med li[data-id="${rengId}"]'); if (!li) return false; li.scrollIntoView({ block: 'center' }); li.click(); return true`
  for (const rengId of rengIds) {
    const rengInf = { id: rengId, presentaciones: [], errores: [] }
    try {
      await rengApp.ev(`const el = document.querySelector('#cm-buscar-med'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengNombreDe(rengId))}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
      await rengEspera(120)
      if (!(await rengApp.ev(rengClicLista(rengId)))) {
        rengInf.errores.push('no está en la lista')
        rengInformes.push(rengInf)
        continue
      }
      await rengApp.esperar(`return document.querySelector('.cm-med-nombre')?.textContent?.length > 0 && !(document.querySelector('.cm-med-ficha')?.innerText ?? '').includes('Cargando la ficha')`, 20000, 10)
      rengInf.nombre = await rengApp.ev(`return document.querySelector('.cm-med-nombre').textContent`)
      const rengPres = await rengApp.ev(`const s = document.querySelector('select#cm-presentacion'); return s ? [...s.options].map((o) => o.value) : [null]`)
      for (const rengP of rengPres) {
        if (rengP) {
          await rengApp.ev(`const s = document.querySelector('select#cm-presentacion'); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(s, '${rengP}'); s.dispatchEvent(new Event('change', { bubbles: true }))`)
          await rengEspera(60)
        }
        const rengFicha = await rengApp.ev(`const c = document.querySelector('section[aria-label="Presentación"]'); return c ? c.innerText : ''`)
        await rengApp.ev(`[...document.querySelectorAll('.cm-med-ficha button')].find((b) => b.textContent.includes('Iniciar recorrido')).click()`)
        await rengApp.esperar(`return !!document.querySelector('ol.cm-etapas')`, 15000, 20)
        const rengEtapas = []
        for (let rengI = 0; rengI < 5; rengI++) {
          await rengApp.ev(`document.querySelectorAll('ol.cm-etapas button')[${rengI}].click()`)
          await rengEspera(50)
          const rengT = await rengApp.ev(`const s = document.querySelector('section[aria-label^="Etapa:"]'); return { aria: s?.getAttribute('aria-label'), texto: s?.innerText ?? '' }`)
          rengEtapas.push({ etapa: rengT.aria, caracteres: rengT.texto.length, indefinido: /undefined|\[object|NaN/.test(rengT.texto) })
        }
        if (rengCapturas && rengInformes.length === 0 && rengP === rengPres[0]) await rengApp.captura(`${rengCapturas}/${rengId}-recorrido.png`)
        rengInf.presentaciones.push({ id: rengP, ficha: rengFicha.slice(0, 200), etapas: rengEtapas })
        await rengApp.ev(`document.querySelector('.cm-migas button').click()`)
        await rengApp.esperar(`return !!document.querySelector('.cm-med-nombre')`, 10000, 20)
      }
    } catch (rengE) {
      rengInf.errores.push(String(rengE.message).slice(0, 200))
    }
    rengInformes.push(rengInf)
  }
} finally {
  const rengConsola = [...rengApp.consola]
  await rengApp.cerrar()
  const rengMalas = rengInformes.filter((rengI) => rengI.errores.length || rengI.presentaciones.some((rengP) => rengP.etapas.some((rengE) => rengE.caracteres < 40 || rengE.indefinido)))
  const rengResumen = { fichas: rengInformes.length, presentaciones: rengInformes.reduce((rengN, rengI) => rengN + rengI.presentaciones.length, 0), conProblemas: rengMalas.map((rengI) => rengI.id), consola: rengConsola.slice(0, 5) }
  writeFileSync(rengPerfilScratch(`informe-recorrido-${rengEtiqueta}.json`), JSON.stringify({ resumen: rengResumen, informes: rengInformes }, null, 1))
  console.log(JSON.stringify(rengResumen))
}
