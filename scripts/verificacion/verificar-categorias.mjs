import fs, { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { RENG_PROYECTO, rengAbrirApp, rengEspera, rengPerfilScratch } from './cdp.mjs'

const rengIndice = JSON.parse(fs.readFileSync(resolve(RENG_PROYECTO, 'src/renderer/modules/medicuerpo/cuerpo/datos/indice.json'), 'utf8'))
const rengEsperado = (rengFamilia, rengVia) => {
  let rengPres = 0
  const rengActivos = new Set()
  for (const rengA of rengIndice.activos) for (const rengP of rengA.presentaciones) if (rengP.familia === rengFamilia && (!rengVia || rengP.vias.includes(rengVia))) { rengPres++; rengActivos.add(rengA.id) }
  return { presentaciones: rengPres, activos: rengActivos.size }
}
const rengDir = resolve(RENG_PROYECTO, 'docs/ampliacion-2000/capturas')
const rengApp = await rengAbrirApp(rengPerfilScratch('categorias'), 9400)
const rengResultados = []
const rengAnotar = (rengNombre, rengOk, rengDetalle) => {
  rengResultados.push({ rengNombre, rengOk, rengDetalle })
  console.log(`${rengOk ? 'OK ' : 'FALLA'} ${rengNombre} · ${rengDetalle}`)
}
const rengFijarFaceta = (rengEtiqueta, rengValor) =>
  rengApp.ev(`const lab = [...document.querySelectorAll('.cm-faceta')].find((l) => l.textContent.trim().startsWith(${JSON.stringify(rengEtiqueta)})); const s = lab.querySelector('select'); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(s, ${JSON.stringify(rengValor)}); s.dispatchEvent(new Event('change', { bubbles: true }))`)
const rengContador = () => rengApp.ev(`return document.querySelector('.cm-contador, [role=status].cm-contador, .cm-med-lista [aria-live]')?.innerText ?? ''`)
const rengEjemplos = [
  { familia: 'solido-oral', activo: 'Ramipril', id: 'ramipril' },
  { familia: 'liquido-oral', activo: 'Levetiracetam', id: 'levetiracetam', pres: 'levetiracetam-solucion' },
  { familia: 'inyectable', activo: 'Midazolam', id: 'midazolam' }
]
try {
  await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
  await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
  await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)
  await rengApp.ev(`document.querySelector('.cm-filtros summary').click()`)
  await rengEspera(200)
  const rengOpcionesTipo = await rengApp.ev(`const lab = [...document.querySelectorAll('.cm-faceta')].find((l) => l.textContent.trim().startsWith('Tipo')); return [...lab.querySelectorAll('option')].map((o) => o.value + '=' + o.textContent)`)
  rengAnotar('el selector «Tipo» ofrece las tres categorías con su contador', rengOpcionesTipo.length === 4, rengOpcionesTipo.join(' | '))

  for (const rengE of rengEjemplos) {
    await rengFijarFaceta('Tipo', rengE.familia)
    await rengEspera(300)
    const rengTexto = await rengApp.ev(`return document.querySelector('.cm-med-lista').innerText`)
    const rengEsp = rengEsperado(rengE.familia, null)
    const rengFilas = await rengApp.ev(`return document.querySelectorAll('.cm-lista-med li[data-id]').length`)
    rengAnotar(`tipo ${rengE.familia}: el contador coincide con el índice`, rengTexto.includes(`${rengEsp.activos} de ${rengIndice.activos.length} principios activos`) && rengTexto.includes(`${rengEsp.presentaciones} de ${rengIndice.activos.reduce((rengN, rengA) => rengN + rengA.presentaciones.length, 0)} presentaciones`), `esperado ${rengEsp.activos} activos · ${rengEsp.presentaciones} presentaciones; filas pintadas ${rengFilas}`)
    await rengApp.ev(`const el = document.querySelector('#cm-buscar-med'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengE.activo)}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
    await rengEspera(250)
    const rengHay = await rengApp.ev(`return !!document.querySelector('.cm-lista-med li[data-id="${rengE.id}"]')`)
    rengAnotar(`tipo ${rengE.familia}: buscar «${rengE.activo}» lo encuentra`, rengHay, rengHay ? 'fila presente' : 'sin fila')
    await rengApp.ev(`document.querySelector('.cm-lista-med li[data-id="${rengE.id}"]').click()`)
    await rengApp.esperar(`return document.querySelector('.cm-med-nombre')?.textContent?.length > 0 && !(document.querySelector('.cm-med-ficha')?.innerText ?? '').includes('Cargando la ficha')`, 20000, 20)
    const rengSel = await rengApp.ev(`return document.querySelector('select#cm-presentacion')?.value ?? null`)
    if (rengE.pres) {
      await rengApp.ev(`const s = document.querySelector('select#cm-presentacion'); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(s, '${rengE.pres}'); s.dispatchEvent(new Event('change', { bubbles: true }))`)
      await rengEspera(150)
    }
    const rengPresActual = await rengApp.ev(`return document.querySelector('select#cm-presentacion')?.selectedOptions[0]?.textContent ?? document.querySelector('section[aria-label="Presentación"]')?.innerText.slice(0, 80)`)
    await rengApp.ev(`[...document.querySelectorAll('.cm-med-ficha button')].find((b) => b.textContent.includes('Iniciar recorrido')).click()`)
    await rengApp.esperar(`return !!document.querySelector('ol.cm-etapas')`, 15000, 20)
    const rengEtapas = []
    for (let rengI = 0; rengI < 5; rengI++) {
      await rengApp.ev(`document.querySelectorAll('ol.cm-etapas button')[${rengI}].click()`)
      await rengEspera(120)
      rengEtapas.push(await rengApp.ev(`const s = document.querySelector('section[aria-label^="Etapa:"]'); return { aria: s?.getAttribute('aria-label') ?? '', n: (s?.innerText ?? '').length }`))
    }
    await rengApp.captura(`${rengDir}/14-recorrido-${rengE.familia}-${rengE.id}.png`)
    rengAnotar(`tipo ${rengE.familia}: ${rengE.id} recorre las cinco etapas`, rengEtapas.length === 5 && rengEtapas.every((rengX) => rengX.n >= 40), `${rengPresActual} · ${rengEtapas.map((rengX) => rengX.aria.replace('Etapa: ', '') + ' ' + rengX.n).join(' | ')}`)
    await rengApp.ev(`document.querySelector('.cm-migas button').click()`)
    await rengApp.esperar(`return !!document.querySelector('.cm-med-nombre')`, 10000, 20)
    await rengApp.ev(`const el = document.querySelector('#cm-buscar-med'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ''); el.dispatchEvent(new Event('input', { bubbles: true }))`)
  }

  await rengFijarFaceta('Tipo', 'inyectable')
  await rengFijarFaceta('Vía', 'intravenosa')
  await rengEspera(300)
  const rengCombinado = await rengApp.ev(`return document.querySelector('.cm-med-lista').innerText`)
  const rengEspIv = rengEsperado('inyectable', 'intravenosa')
  rengAnotar('tipo inyectable + vía intravenosa', rengCombinado.includes(`${rengEspIv.presentaciones} de ${rengIndice.activos.reduce((rengN, rengA) => rengN + rengA.presentaciones.length, 0)} presentaciones`), `esperado ${rengEspIv.activos} activos · ${rengEspIv.presentaciones} presentaciones`)
  await rengApp.captura(`${rengDir}/15-filtro-inyectable-intravenosa.png`)
  console.log('consola del renderer:', rengApp.consola.length === 0 ? 'sin errores ni avisos' : rengApp.consola.slice(0, 5))
} finally {
  const rengConsola = [...rengApp.consola]
  await rengApp.cerrar()
  writeFileSync(rengPerfilScratch('informe-categorias.json'), JSON.stringify({ rengResultados, rengConsola }, null, 1))
  const rengMalas = rengResultados.filter((rengR) => !rengR.rengOk).length
  console.log(`${rengResultados.length - rengMalas}/${rengResultados.length} comprobaciones correctas`)
}
