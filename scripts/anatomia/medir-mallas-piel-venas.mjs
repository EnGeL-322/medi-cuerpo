import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const RENG_AQUI = dirname(fileURLToPath(import.meta.url))
const [rengOrigen, rengSalida, rengCeldaPiel = '6', rengCeldaVena = '2'] = process.argv.slice(2)
if (!rengOrigen || !rengSalida) {
  console.error('Uso: node scripts/anatomia/medir-mallas-piel-venas.mjs <carpeta con partof/ y partof_element_parts.txt> <carpeta de salida> [celda piel mm] [celda venas mm]')
  process.exit(1)
}
const rengConcepto = (rengId, rengFma, rengCelda) => ({ id: rengId, capa: 'organos', bp3d: { arbol: 'partof', conceptos: [rengFma] }, celda: Number(rengCelda) })
const rengLista = [
  rengConcepto('piel', 'FMA7163', rengCeldaPiel),
  rengConcepto('vena-cefalica-derecha', 'FMA13325', rengCeldaVena),
  rengConcepto('vena-cefalica-izquierda', 'FMA13326', rengCeldaVena),
  rengConcepto('vena-basilica-derecha', 'FMA22909', rengCeldaVena),
  rengConcepto('vena-basilica-izquierda', 'FMA22910', rengCeldaVena)
]
const rengFuente = readFileSync(join(RENG_AQUI, 'convertir-bp3d.mjs'), 'utf8')
  .replace(/const RENG_DESTINO = .*\n/, `const RENG_DESTINO = ${JSON.stringify(resolve(rengSalida))}\n`)
  .replace(/const \{ RENG_ESTRUCTURAS \} = await import\(.*\n/, `const RENG_ESTRUCTURAS = ${JSON.stringify(rengLista)}\n`)
  .replace(/const RENG_CELDA_MM = .*\n/, 'const RENG_CELDA_MM = { organos: 3 }\n')
  .replace("isa: rengTabla('isa_element_parts.txt')", 'isa: []')
  .replace(/for \(const rengCapa of \['esqueleto', 'musculos', 'organos'\]\)/, "for (const rengCapa of ['organos'])")
  .replace('rengReducir(rengPs, RENG_CELDA_MM[rengCapa])', 'rengReducir(rengPs, rengE.celda)')
  .replace(/import\.meta\.url/g, JSON.stringify(new URL(`file:///${join(RENG_AQUI, 'convertir-bp3d.mjs').replace(/\\/g, '/')}`).href))
mkdirSync(resolve(rengSalida), { recursive: true })
const rengTemporal = join(resolve(rengSalida), 'convertir-medicion.mjs')
writeFileSync(rengTemporal, rengFuente)
const rengR = spawnSync(process.execPath, [rengTemporal, resolve(rengOrigen)], { stdio: 'inherit' })
process.exit(rengR.status ?? 1)
