import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rengRaiz = join(dirname(fileURLToPath(import.meta.url)), '..')
const rengLeerJson = (rengRuta) => JSON.parse(readFileSync(rengRuta, 'utf8'))
const rengPaquete = rengLeerJson(join(rengRaiz, 'package.json'))
const rengBloqueo = rengLeerJson(join(rengRaiz, 'package-lock.json'))

function rengTextoLicencia(rengCarpeta) {
  const rengArchivo = readdirSync(rengCarpeta).find((rengF) => /^(licen[sc]e|copying)(\.(md|txt))?$/i.test(rengF))
  if (!rengArchivo) throw new Error(`Sin archivo de licencia en ${rengCarpeta}`)
  return readFileSync(join(rengCarpeta, rengArchivo), 'utf8').replace(/\r\n/g, '\n').trim()
}

const rengProduccion = Object.entries(rengBloqueo.packages)
  .filter(([rengRuta, rengDatos]) => rengRuta.startsWith('node_modules/') && !rengDatos.dev && !rengDatos.devOptional)
  .map(([rengRuta, rengDatos]) => ({ nombre: rengRuta.slice(rengRuta.lastIndexOf('node_modules/') + 13), version: rengDatos.version, licencia: rengDatos.license, carpeta: join(rengRaiz, rengRuta) }))
  .sort((rengA, rengB) => rengA.nombre.localeCompare(rengB.nombre))

const RENG_ORIGEN_ADICIONAL = {
  openchemlib: 'Port a JavaScript de OpenChemLib (Java). OpenChemLib: Copyright (c) 1997 - 2016 Actelion Pharmaceuticals Ltd., licencia BSD de tres cláusulas (https://github.com/Actelion/openchemlib). Los datos de longitudes de enlace de dist/resources.json provienen de la Crystallography Open Database (COD), según la ruta interna «resources/cod».'
}

const rengSeparador = '='.repeat(78)
const rengPartes = [
  `${rengPaquete.build.productName} ${rengPaquete.version}`,
  `Avisos de software de terceros incluido en la aplicación distribuida.`,
  `El código propio de la aplicación es © ${rengPaquete.author}. Los componentes siguientes conservan a sus autores, titulares y licencias.`,
  `Archivo generado con «npm run avisos» a partir de package-lock.json y de los archivos de licencia de cada paquete.`,
  ''
]

const rengElectron = join(rengRaiz, 'node_modules/electron')
if (existsSync(rengElectron)) {
  const rengVersion = rengLeerJson(join(rengElectron, 'package.json')).version
  rengPartes.push(
    rengSeparador,
    `Electron ${rengVersion} — licencia MIT`,
    'Entorno de ejecución de la aplicación. Incluye Chromium, V8 y Node.js; sus avisos completos se instalan junto al ejecutable en LICENSES.chromium.html y el de Electron en LICENSE.electron.txt.',
    rengSeparador,
    rengTextoLicencia(rengElectron),
    ''
  )
}

for (const rengP of rengProduccion) {
  rengPartes.push(rengSeparador, `${rengP.nombre} ${rengP.version} — licencia ${rengP.licencia}`)
  if (RENG_ORIGEN_ADICIONAL[rengP.nombre]) rengPartes.push(RENG_ORIGEN_ADICIONAL[rengP.nombre])
  rengPartes.push(rengSeparador, rengTextoLicencia(rengP.carpeta), '')
}

const rengVite = join(rengRaiz, 'node_modules/vite')
if (existsSync(rengVite)) {
  const rengVersion = rengLeerJson(join(rengVite, 'package.json')).version
  rengPartes.push(rengSeparador, `Vite ${rengVersion} — licencia MIT`, 'Herramienta de compilación. El paquete distribuido contiene pequeños fragmentos de código de arranque que genera Vite.', rengSeparador, rengTextoLicencia(rengVite).split('# Licenses of bundled dependencies')[0].trim(), '')
}

writeFileSync(join(rengRaiz, 'licencias/AVISOS-TERCEROS.txt'), rengPartes.join('\n'))
console.log(`licencias/AVISOS-TERCEROS.txt: ${rengProduccion.map((rengP) => `${rengP.nombre}@${rengP.version}`).join(', ')}`)
