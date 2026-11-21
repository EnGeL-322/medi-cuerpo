import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { RENG_PROYECTO, rengAbrirApp, rengEspera, rengPerfilScratch } from './cdp.mjs'

const rengDir = resolve(RENG_PROYECTO, 'docs/ampliacion-2000/capturas')
mkdirSync(rengDir, { recursive: true })
const rengApp = await rengAbrirApp(rengPerfilScratch('capturas-piloto'), 9395)
const rengEscribir = (rengValor) => rengApp.ev(`const el = document.querySelector('#cm-buscar-med'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengValor)}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
const rengAbrir = async (rengNombre, rengId) => {
  await rengEscribir(rengNombre)
  await rengEspera(150)
  await rengApp.ev(`document.querySelector('.cm-lista-med li[data-id="${rengId}"]').click()`)
  await rengApp.esperar(`return document.querySelector('.cm-med-nombre')?.textContent?.length > 0 && !(document.querySelector('.cm-med-ficha')?.innerText ?? '').includes('Cargando la ficha')`, 15000, 20)
}
const rengElegirPres = async (rengSufijo) => {
  await rengApp.ev(`const s = document.querySelector('select#cm-presentacion'); const o = [...s.options].find((x) => x.value.endsWith('${rengSufijo}')); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(s, o.value); s.dispatchEvent(new Event('change', { bubbles: true }))`)
  await rengEspera(150)
}
const rengRecorrido = async (rengEtapa) => {
  await rengApp.ev(`[...document.querySelectorAll('.cm-med-ficha button')].find((b) => b.textContent.includes('Iniciar recorrido')).click()`)
  await rengApp.esperar(`return !!document.querySelector('ol.cm-etapas')`, 15000, 20)
  await rengApp.ev(`document.querySelectorAll('ol.cm-etapas button')[${rengEtapa}].click()`)
  await rengEspera(1500)
}
const rengVolver = async () => {
  await rengApp.ev(`document.querySelector('.cm-migas button').click()`)
  await rengApp.esperar(`return !!document.querySelector('.cm-med-nombre')`, 10000, 20)
}
try {
  await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
  await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
  await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)

  await rengAbrir('Vancomicina', 'vancomicina')
  await rengElegirPres('-iv')
  await rengApp.captura(`${rengDir}/06-vancomicina-iv-ficha.png`)
  await rengRecorrido(1)
  await rengApp.captura(`${rengDir}/07-vancomicina-iv-absorcion-no-aplica.png`)
  await rengVolver()

  await rengAbrir('Medroxiprogesterona', 'medroxiprogesterona')
  await rengElegirPres('-subq')
  await rengRecorrido(0)
  await rengApp.captura(`${rengDir}/08-medroxiprogesterona-deposito.png`)
  await rengVolver()

  await rengAbrir('Levetiracetam', 'levetiracetam')
  await rengElegirPres('-solucion')
  await rengRecorrido(0)
  await rengApp.captura(`${rengDir}/09-levetiracetam-solucion-liberacion.png`)
  await rengVolver()

  await rengAbrir('Amlodipino + benazepril', 'amlodipino-benazepril')
  await rengApp.captura(`${rengDir}/10-combinacion-ficha.png`)

  await rengAbrir('Sertralina', 'sertralina')
  await rengElegirPres('-concentrado')
  await rengApp.ev(`[...document.querySelectorAll('details.panel-seccion')].find((d) => d.textContent.startsWith('Composición')).open = true`)
  await rengEspera(300)
  await rengApp.captura(`${rengDir}/11-sertralina-concentrado-excipientes-riesgo.png`)

  await rengApp.ev(`document.querySelector('.cm-filtros summary').click()`)
  await rengApp.ev(`const sels = [...document.querySelectorAll('.cm-faceta select')]; const via = sels[2]; Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(via, 'intravenosa'); via.dispatchEvent(new Event('change', { bubbles: true }))`)
  await rengEspera(300)
  await rengApp.captura(`${rengDir}/12-filtro-via-intravenosa.png`)
  console.log('capturas hechas; consola:', rengApp.consola.length)
} finally {
  await rengApp.cerrar()
}
