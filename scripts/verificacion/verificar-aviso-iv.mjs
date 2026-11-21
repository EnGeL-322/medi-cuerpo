import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { RENG_PROYECTO, rengAbrirApp, rengEspera, rengPerfilScratch } from './cdp.mjs'

const rengDir = resolve(RENG_PROYECTO, 'docs/ampliacion-2000/capturas')
mkdirSync(rengDir, { recursive: true })
const rengCasos = [
  { activo: 'Vancomicina', id: 'vancomicina', pres: 'vancomicina-iv', esperado: true },
  { activo: 'Paracetamol', id: 'paracetamol', pres: 'paracetamol-kabi-perfusion', esperado: true },
  { activo: 'Ondansetrón', id: 'ondansetron', pres: 'ondansetron-cima-inyectable', esperado: true },
  { activo: 'Ceftriaxona', id: 'ceftriaxona', pres: null, esperado: false },
  { activo: 'Medroxiprogesterona', id: 'medroxiprogesterona', pres: 'medroxiprogesterona-subq', esperado: false },
  { activo: 'Metformina', id: 'metformina', pres: null, esperado: false }
]
const rengApp = await rengAbrirApp(rengPerfilScratch('aviso-iv'), 9396)
const rengInformes = []
try {
  await rengApp.esperar(`return document.querySelector('#root')?.children.length > 0`, 20000)
  await rengApp.ev(`location.hash = '#/medicuerpo/medicamentos'`)
  await rengApp.esperar(`return document.querySelectorAll('.cm-lista-med li[data-id]').length > 0`, 60000, 10)
  for (const rengC of rengCasos) {
    const rengInf = { ...rengC }
    await rengApp.ev(`[...document.querySelectorAll('.cm-nav [role=tab]')].find((t) => t.textContent.includes('Modelo general')).click()`)
    await rengEspera(300)
    await rengApp.ev(`const el = document.querySelector('#abs-buscar'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, ${JSON.stringify(rengC.activo)}); el.dispatchEvent(new Event('input', { bubbles: true }))`)
    await rengEspera(250)
    await rengApp.ev(`const o = [...document.querySelectorAll('[role=listbox] [role=option]')].find((x) => x.textContent.toLowerCase().includes(${JSON.stringify(rengC.activo.toLowerCase())})); o.click()`)
    await rengApp.esperar(`return !!document.querySelector('.abs-med-nombre')`, 15000, 20)
    if (rengC.pres) {
      await rengApp.ev(`const s = document.querySelector('select#abs-presentacion'); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(s, '${rengC.pres}'); s.dispatchEvent(new Event('change', { bubbles: true }))`)
      await rengEspera(300)
    }
    await rengEspera(300)
    const rengLeido = await rengApp.ev(`const n = document.querySelector('[data-campo="sin-absorcion"]'); return { aviso: n ? n.innerText : null, presentacion: document.querySelector('select#abs-presentacion')?.value ?? null, titulo: document.querySelector('.abs-med-nombre')?.innerText ?? null }`)
    rengInf.avisoPresente = rengLeido.aviso !== null
    rengInf.aviso = rengLeido.aviso
    rengInf.correcto = rengInf.avisoPresente === rengC.esperado
    if (rengC.esperado && rengInformes.filter((rengX) => rengX.esperado).length === 0) await rengApp.captura(`${rengDir}/13-aviso-sin-absorcion-iv.png`)
    rengInformes.push(rengInf)
  }
} finally {
  const rengConsola = [...rengApp.consola]
  await rengApp.cerrar()
  writeFileSync(rengPerfilScratch('informe-aviso-iv.json'), JSON.stringify({ informes: rengInformes, consola: rengConsola.slice(0, 5) }, null, 1))
  console.log(JSON.stringify({ informes: rengInformes.map((rengI) => ({ id: rengI.id, pres: rengI.pres, esperado: rengI.esperado, presente: rengI.avisoPresente, correcto: rengI.correcto, aviso: rengI.aviso?.slice(0, 140) })), consola: rengConsola.slice(0, 5) }, null, 1))
}
