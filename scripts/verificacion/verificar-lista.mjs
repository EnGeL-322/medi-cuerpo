import fs, { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { RENG_PROYECTO, rengAbrirApp, rengEspera, rengPerfilScratch } from './cdp.mjs'

const rengEtiqueta = process.argv.find((rengA) => rengA.startsWith('--etiqueta='))?.split('=')[1] ?? 'lista'
const rengCapturas = process.argv.find((rengA) => rengA.startsWith('--capturas='))?.split('=')[1] ?? resolve(RENG_PROYECTO, 'docs/ampliacion-2000/capturas')
const rengIndice = JSON.parse(fs.readFileSync(resolve(RENG_PROYECTO, 'src/renderer/modules/medicuerpo/cuerpo/datos/indice.json'), 'utf8'))
const rengTotalA = rengIndice.activos.length
const rengPres = rengIndice.activos.flatMap((rengA) => rengA.presentaciones)
const rengTotalP = rengPres.length
const rengEs = rengPres.filter((rengP) => rengP.mercado === 'España (UE)').length
const rengOral = rengPres.filter((rengP) => rengP.vias.includes('oral')).length
const rengResultados = []
const rengComprobar = (rengNombre, rengOk, rengDetalle = '') => {
  rengResultados.push({ nombre: rengNombre, ok: !!rengOk, detalle: String(rengDetalle) })
  console.log(`${rengOk ? 'OK ' : 'MAL'} ${rengNombre}${rengDetalle ? ` · ${rengDetalle}` : ''}`)
}

const rengApp = await rengAbrirApp(rengPerfilScratch(`lista-${rengEtiqueta}`), 9390)
const rengEscribir = (rengSel, rengValor) =>
  rengApp.ev(`const el = document.querySelector(${JSON.stringify(rengSel)}); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengValor)}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
const rengElegir = (rengSel, rengValor) =>
  rengApp.ev(`const el = document.querySelector(${JSON.stringify(rengSel)}); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(el, ${JSON.stringify(rengValor)}); el.dispatchEvent(new Event('change', { bubbles: true }))`)
const rengTecla = (rengKey) => rengApp.ev(`document.querySelector('.cm-lista-med').dispatchEvent(new KeyboardEvent('keydown', { key: ${JSON.stringify(rengKey)}, bubbles: true }))`)
const rengContador = () => rengApp.ev(`return document.querySelector('[data-campo=contador]').textContent`)
const rengSeleccionVisible = (rengPos) => `const sel = document.querySelector('.cm-lista-med li.sel'); const ul = document.querySelector('.cm-lista-med'); return !!sel && sel.getAttribute('aria-posinset') === '${rengPos}' && sel.getBoundingClientRect().top >= ul.getBoundingClientRect().top - 1 && sel.getBoundingClientRect().bottom <= ul.getBoundingClientRect().bottom + 1`
const rengFilasPintadas = () => rengApp.ev(`return document.querySelectorAll('.cm-lista-med li[data-id]').length`)

try {
  await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
  await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
  await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)

  const rengTotal0 = await rengApp.ev(`return Number(document.querySelector('.cm-lista-med li[data-id]').getAttribute('aria-setsize'))`)
  const rengPintadas = await rengFilasPintadas()
  rengComprobar('lista virtualizada: solo se pintan unas pocas filas', rengPintadas > 0 && rengPintadas <= 40, `${rengPintadas} filas pintadas de ${rengTotal0}`)
  const rengC0 = await rengContador()
  rengComprobar('contador inicial honesto', new RegExp(`${rengTotalA} de ${rengTotalA} principios activos · ${rengTotalP} de ${rengTotalP} presentaciones`).test(rengC0), rengC0)
  await rengApp.captura(`${rengCapturas}/01-lista-inicial.png`)

  await rengEscribir('#cm-buscar-med', 'zoloft')
  await rengEspera(150)
  rengComprobar('buscar «zoloft» da 1 activo', new RegExp(`^1 de ${rengTotalA} principios activos`).test(await rengContador()), await rengContador())
  rengComprobar('la fila es sertralina', (await rengApp.ev(`return [...document.querySelectorAll('.cm-lista-med li[data-id]')].map((li) => li.dataset.id).join(',')`)) === 'sertralina')
  await rengEscribir('#cm-buscar-med', 'xyzxyz')
  await rengEspera(150)
  rengComprobar('sin resultados: mensaje explicativo', /Nada coincide con la búsqueda/.test(await rengApp.ev(`return document.querySelector('[data-campo=sin-resultados]')?.textContent ?? ''`)))
  await rengEscribir('#cm-buscar-med', '')

  await rengApp.ev(`document.querySelector('.cm-filtros summary').click()`)
  await rengEspera(100)
  const rengOpcionesVia = await rengApp.ev(`const sels = [...document.querySelectorAll('.cm-faceta select')]; const via = sels[2]; return [...via.options].map((o) => o.textContent + (o.disabled ? ' [off]' : ''))`)
  rengComprobar('filtro de vía: opciones con su contador (Oral y las parenterales del piloto)', rengOpcionesVia.some((rengO) => rengO.startsWith(`Oral (${rengOral})`)) && rengOpcionesVia.length >= 3, rengOpcionesVia.join(' | '))
  await rengElegir('.cm-faceta:nth-of-type(4) select', 'España (UE)')
  await rengEspera(150)
  const rengC1 = await rengContador()
  rengComprobar(`mercado España: ${rengEs} presentaciones`, new RegExp(`${rengEs} de ${rengTotalP} presentaciones`).test(rengC1), rengC1)
  const rengSubtitulo = await rengApp.ev(`return document.querySelector('.cm-lista-med li small:last-child')?.textContent ?? ''`)
  rengComprobar('cada fila dice cuántas de sus presentaciones coinciden', /de \d+ presentaciones/.test(rengSubtitulo), rengSubtitulo)
  await rengApp.captura(`${rengCapturas}/02-filtro-mercado.png`)

  await rengApp.ev(`const c = document.querySelector('.cm-filtros input[type=checkbox]'); c.click()`)
  await rengEspera(150)
  rengComprobar('mercado España + con curva publicada: nada, y lo explica', /Quitar el mercado o «con curva publicada»/.test(await rengApp.ev(`return document.querySelector('[data-campo=sin-resultados]')?.textContent ?? ''`)))
  await rengElegir('.cm-faceta:nth-of-type(4) select', '')
  await rengEspera(150)
  rengComprobar('solo con curva publicada: 1 activo', new RegExp(`^1 de ${rengTotalA} principios activos · 1 de ${rengTotalP} presentaciones`).test(await rengContador()), await rengContador())
  await rengApp.ev(`document.querySelector('.cm-lista-med li[data-id=ticagrelor]').click()`)
  await rengApp.esperar(`return document.querySelector('.cm-med-nombre')?.textContent === 'Ticagrelor'`, 10000, 20)
  rengComprobar('al abrirlo se elige la presentación que cumple el filtro', (await rengApp.ev(`return document.querySelector('section[aria-label="Presentación"]').innerText`)).includes('BRILINTA'))
  await rengApp.captura(`${rengCapturas}/03-con-curva.png`)

  await rengApp.ev(`[...document.querySelectorAll('button')].find((b) => b.textContent.startsWith('Quitar filtros')).click()`)
  await rengEspera(150)
  rengComprobar('quitar filtros devuelve el catálogo entero', new RegExp(`^${rengTotalA} de ${rengTotalA}`).test(await rengContador()))

  await rengApp.ev(`document.querySelector('.cm-lista-med').focus()`)
  await rengTecla('End')
  await rengApp.esperar(rengSeleccionVisible(rengTotalA), 3000, 50).catch(() => false)
  const rengUltima = await rengApp.ev(`const sel = document.querySelector('.cm-lista-med li.sel'); const ul = document.querySelector('.cm-lista-med'); return { id: sel?.dataset.id, pos: sel?.getAttribute('aria-posinset'), visible: !!sel && sel.getBoundingClientRect().top >= ul.getBoundingClientRect().top - 1 && sel.getBoundingClientRect().bottom <= ul.getBoundingClientRect().bottom + 1, pintadas: document.querySelectorAll('.cm-lista-med li[data-id]').length }`)
  rengComprobar('tecla Fin: selecciona la última fila y la deja a la vista', rengUltima.pos === String(rengTotalA) && rengUltima.visible && rengUltima.pintadas <= 40, JSON.stringify(rengUltima))
  await rengTecla('Home')
  await rengApp.esperar(rengSeleccionVisible(1), 3000, 50).catch(() => false)
  const rengPrimera = await rengApp.ev(`const sel = document.querySelector('.cm-lista-med li.sel'); return { pos: sel?.getAttribute('aria-posinset'), top: document.querySelector('.cm-lista-med').scrollTop }`)
  rengComprobar('tecla Inicio: vuelve a la primera fila y arriba del todo', rengPrimera.pos === '1' && rengPrimera.top === 0, JSON.stringify(rengPrimera))
  for (let rengI = 0; rengI < 20; rengI++) await rengTecla('ArrowDown')
  await rengApp.esperar(rengSeleccionVisible(21), 3000, 50).catch(() => false)
  const rengMedio = await rengApp.ev(`const sel = document.querySelector('.cm-lista-med li.sel'); const ul = document.querySelector('.cm-lista-med'); return { pos: sel?.getAttribute('aria-posinset'), visible: !!sel && sel.getBoundingClientRect().top >= ul.getBoundingClientRect().top - 1 && sel.getBoundingClientRect().bottom <= ul.getBoundingClientRect().bottom + 1, activo: ul.getAttribute('aria-activedescendant') === sel?.id }`)
  rengComprobar('20 veces ↓: fila 21 visible y aria-activedescendant correcto', rengMedio.pos === '21' && rengMedio.visible && rengMedio.activo, JSON.stringify(rengMedio))
  const rengFicha = await rengApp.ev(`return document.querySelector('.cm-med-nombre')?.textContent ?? ''`)
  rengComprobar('la ficha seguida con el teclado se abre', rengFicha.length > 0, rengFicha)
  await rengApp.captura(`${rengCapturas}/04-teclado.png`)

  await rengApp.ev(`[...document.querySelectorAll('.cm-nav [role=tab]')].find((t) => t.textContent.includes('Modelo general')).click()`)
  await rengApp.esperar(`return !!document.querySelector('.abs-niveles')`, 10000, 20)
  const rengNiveles = await rengApp.ev(`return [...document.querySelectorAll('.abs-niveles button')].map((b) => b.textContent.trim() + ':' + b.getAttribute('aria-pressed'))`)
  rengComprobar('niveles Básico / Normal / Avanzado presentes', rengNiveles.length === 3 && /Básico/.test(rengNiveles[0]) && /Normal/.test(rengNiveles[1]) && /Avanzado/.test(rengNiveles[2]), rengNiveles.join(' | '))
  const rengCambios = []
  for (const [rengI, rengN] of ['Avanzado', 'Normal', 'Básico'].entries()) {
    await rengApp.ev(`[...document.querySelectorAll('.abs-niveles button')].find((b) => b.textContent.includes(${JSON.stringify(rengN)})).click()`)
    await rengEspera(120)
    rengCambios.push(await rengApp.ev(`return [...document.querySelectorAll('.abs-niveles button')].filter((b) => b.getAttribute('aria-pressed') === 'true').map((b) => b.textContent.trim()).join('')`))
  }
  rengComprobar('cada nivel se puede activar', rengCambios.join('|') === 'Avanzado|Normal|Básico', rengCambios.join('|'))
  await rengApp.captura(`${rengCapturas}/05-niveles.png`)
} finally {
  const rengConsola = [...rengApp.consola]
  await rengApp.cerrar()
  rengComprobar('sin errores ni avisos en la consola del renderer', rengConsola.length === 0, rengConsola.slice(0, 3).join(' || '))
  writeFileSync(rengPerfilScratch(`informe-lista-${rengEtiqueta}.json`), JSON.stringify(rengResultados, null, 1))
  console.log(`\n${rengResultados.filter((rengR) => rengR.ok).length}/${rengResultados.length} comprobaciones correctas`)
}
