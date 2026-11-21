#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { inspect } from 'node:util'

const [rengEspec, rengEtiquetas, rengCatalogo, rengRegistro] = process.argv.slice(2)
if (!rengEspec || !rengEtiquetas || !rengCatalogo || !rengRegistro) {
  console.error('Uso: node redactar.mjs <especificacion.txt> <carpeta-etiquetas> <carpeta-catalogo> <registro.json>')
  process.exit(1)
}

const RENG_AREAS = { CV: 'Cardiovascular', SN: 'Sistema nervioso', SM: 'Salud mental', IN: 'Infecciones', AD: 'Aparato digestivo', MD: 'Metabolismo y diabetes', ON: 'Oncología', UR: 'Urología', DF: 'Dolor y fiebre', SC: 'Sangre y coagulación', RA: 'Respiratorio y alergia', HE: 'Hormonas y endocrino', HU: 'Huesos y articulaciones', II: 'Inflamación e inmunidad', CL: 'Colesterol y lípidos', PI: 'Piel' }
const RENG_DESTINOS = new Set(['boca', 'esofago', 'estomago', 'duodeno', 'intestino-delgado', 'intestino-grueso', 'heces', 'luz-intestinal', 'higado', 'bilis', 'pancreas', 'vena-porta', 'sangre', 'corazon', 'vasos', 'plaquetas', 'medula-osea', 'pulmones', 'vias-respiratorias', 'encefalo', 'nervios', 'rinones', 'vias-urinarias', 'orina', 'vejiga', 'prostata', 'huesos', 'articulaciones', 'musculos', 'piel', 'unas', 'tiroides', 'tejidos', 'tejido-adiposo', 'mama', 'organos-reproductores', 'ojos', 'sistema-inmunitario', 'sitio-infeccion'])
const RENG_MAGNITUDES = new Set(['tmax', 'semivida', 'union', 'biodisponibilidad', 'vd', 'orina', 'heces', 'comida', 'aclaramiento', 'cmax', 'auc', 'otra'])
const RENG_ACTIVIDADES = new Set(['activo', 'inactivo', 'tóxico', 'desconocida'])
const RENG_SEC_FDA = { '34067-9': '1 · Indicaciones', '43678-2': '3 · Formas y concentraciones', '34089-3': '11 · Descripción', '34090-1': '12 · Farmacología clínica', '43679-0': '12.1 · Mecanismo de acción', '43681-6': '12.2 · Farmacodinámica', '43682-4': '12.3 · Farmacocinética', '49489-8': '12.4 · Microbiología', '34084-4': '6 · Reacciones adversas', '43685-7': '5 · Advertencias y precauciones', '34066-1': 'Advertencia destacada', '34071-1': 'Advertencias' }
const RENG_SEC_FT = { 'FT 2': '2 · Composición cualitativa y cuantitativa', 'FT 3': '3 · Forma farmacéutica', 'FT 4.1': '4.1 · Indicaciones terapéuticas', 'FT 4.4': '4.4 · Advertencias y precauciones especiales de empleo', 'FT 4.8': '4.8 · Reacciones adversas', 'FT 5.1': '5.1 · Propiedades farmacodinámicas', 'FT 5.2': '5.2 · Propiedades farmacocinéticas', 'FT 6.1': '6.1 · Lista de excipientes' }
const RENG_BUSQUEDA = {
  fda: { U: ['34067-9'], A: ['43679-0', '49489-8', '43681-6', '34090-1', '42229-5'], PK: ['43682-4', '34090-1', '42229-5'], L: ['43678-2', '34089-3', '43682-4', '34090-1'], R: ['34084-4'], W: ['34066-1', '43685-7', '34071-1'], S: ['34089-3', '43678-2'], G: ['43685-7', '34071-1', '34066-1', '34089-3', '34084-4'], Z: ['43682-4', '34090-1', '34089-3', '43678-2', '34067-9'] },
  ft: { U: ['FT 4.1'], A: ['FT 5.1'], PK: ['FT 5.2'], L: ['FT 3', 'FT 2', 'FT 5.2'], R: ['FT 4.8'], W: ['FT 4.4'], S: ['FT 2'], G: ['FT 4.4', 'FT 2', 'FT 6.1', 'FT 4.8'], Z: ['FT 5.2', 'FT 3', 'FT 4.1'] }
}
const RENG_FORMAS = [
  [/^INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION$/, 'Polvo liofilizado para solución inyectable', 'no declarada'],
  [/^INJECTION, POWDER, FOR SOLUTION$/, 'Polvo para solución inyectable', 'no declarada'],
  [/^INJECTION, SUSPENSION, EXTENDED RELEASE$/, 'Suspensión inyectable de liberación prolongada', 'prolongada'],
  [/^INJECTION, SUSPENSION/, 'Suspensión inyectable', 'no declarada'],
  [/^INJECTION, EMULSION/, 'Emulsión inyectable', 'no declarada'],
  [/^INJECTION, SOLUTION, CONCENTRATE$/, 'Concentrado para solución inyectable', 'no declarada'],
  [/^INJECTION, SOLUTION$/, 'Solución inyectable', 'no declarada'],
  [/^INJECTION$/, 'Solución inyectable', 'no declarada'],
  [/^POWDER, FOR SUSPENSION/, 'Polvo para suspensión oral', 'no declarada'],
  [/^TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE$/, 'Comprimido bucodispersable de liberación retardada', 'retardada'],
  [/^TABLET, FILM COATED, EXTENDED RELEASE$/, 'Comprimido recubierto de liberación prolongada', 'prolongada'],
  [/^TABLET, EXTENDED RELEASE$/, 'Comprimido de liberación prolongada', 'prolongada'],
  [/^TABLET, DELAYED RELEASE$/, 'Comprimido de liberación retardada', 'retardada'],
  [/^CAPSULE, EXTENDED RELEASE$/, 'Cápsula de liberación prolongada', 'prolongada'],
  [/^CAPSULE, DELAYED RELEASE/, 'Cápsula de liberación retardada', 'retardada'],
  [/^TABLET, FILM COATED$/, 'Comprimido recubierto con película', 'no declarada'],
  [/^TABLET, COATED$/, 'Comprimido recubierto', 'no declarada'],
  [/^TABLET, CHEWABLE$/, 'Comprimido masticable', 'no declarada'],
  [/^TABLET, ORALLY DISINTEGRATING/, 'Comprimido bucodispersable', 'no declarada'],
  [/^TABLET, SUGAR COATED$/, 'Gragea', 'no declarada'],
  [/^TABLET/, 'Comprimido', 'no declarada'],
  [/^CAPSULE, LIQUID FILLED$/, 'Cápsula blanda', 'no declarada'],
  [/^CAPSULE/, 'Cápsula', 'no declarada'],
  [/^SOLUTION/, 'Solución oral', 'no declarada'],
  [/^SUSPENSION/, 'Suspensión oral', 'no declarada'],
  [/^POWDER, FOR SOLUTION/, 'Polvo para solución oral', 'no declarada'],
  [/^GRANULE/, 'Granulado', 'no declarada']
]
const RENG_SALES = { HYDROCHLORIDE: 'clorhidrato', DIHYDROCHLORIDE: 'diclorhidrato', HYDROBROMIDE: 'bromhidrato', MALEATE: 'maleato', FUMARATE: 'fumarato', SUCCINATE: 'succinato', TARTRATE: 'tartrato', MESYLATE: 'mesilato', BESYLATE: 'besilato', TOSYLATE: 'tosilato', CITRATE: 'citrato', PHOSPHATE: 'fosfato', SULFATE: 'sulfato', ACETATE: 'acetato', SODIUM: 'sal sódica', POTASSIUM: 'sal potásica', CALCIUM: 'sal cálcica', MAGNESIUM: 'sal magnésica', HYCLATE: 'hiclato', MONOHYDRATE: 'monohidrato', DIHYDRATE: 'dihidrato', BROMIDE: 'bromuro', CHLORIDE: 'cloruro', MALATE: 'malato', LACTATE: 'lactato', BENZOATE: 'benzoato', NITRATE: 'nitrato', TROMETHAMINE: 'trometamol', MEGLUMINE: 'meglumina' }
const RENG_MESES = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' }

const RENG_VIA_FDA = { ORAL: 'oral', SUBLINGUAL: 'sublingual', BUCCAL: 'bucal', INTRAVENOUS: 'intravenosa', INTRAMUSCULAR: 'intramuscular', SUBCUTANEOUS: 'subcutanea', INTRADERMAL: 'intradermica', INTRATHECAL: 'intratecal', EPIDURAL: 'epidural', 'INTRA-ARTICULAR': 'intraarticular', 'INTRA-ARTERIAL': 'intraarterial' }
const RENG_FAMILIAS = new Set(['solido-oral', 'liquido-oral', 'inyectable'])
const RENG_FORMAS_N = new Set(['comprimido', 'capsula', 'comprimido-masticable', 'comprimido-bucodispersable', 'comprimido-efervescente', 'comprimido-sublingual', 'polvo-oral', 'solucion-oral', 'suspension-oral', 'jarabe', 'gotas-orales', 'emulsion-oral', 'solucion-inyectable', 'suspension-inyectable', 'polvo-inyectable', 'emulsion-inyectable', 'jeringa-precargada', 'pluma'])

const rengNorm = (rengS) => rengS.replace(/\s+/g, ' ').trim()
const rengMin = (rengS) => rengNorm(rengS).toLowerCase().replace(/[‘’´`]/g, "'").replace(/[“”]/g, '"').replace(/[‐‑‒–—−]/g, '-')
const rengLista = (rengS) => (rengS ?? '').split(',').map((rengX) => rengX.trim()).filter(Boolean)
const rengPrimeraMayus = (rengS) => rengS.charAt(0).toUpperCase() + rengS.slice(1)

function rengBloques(rengTexto) {
  return rengTexto
    .split(/\r?\n\s*\r?\n/)
    .map((rengB) => rengB.trim())
    .filter((rengB) => rengB.startsWith('@'))
    .map((rengB) => rengB.split(/\r?\n/).map((rengL) => rengL.split('|').map((rengX) => rengX.trim())))
}

function rengDocumento(rengId) {
  const rengD = JSON.parse(readFileSync(join(rengEtiquetas, `${rengId}.json`), 'utf8'))
  const rengTipo = rengD.cima ? 'ft' : 'fda'
  return { d: rengD, tipo: rengTipo }
}

function rengBuscador(rengDoc, rengFuente) {
  return (rengClase, rengCita, rengCodigos) => {
    const rengAguja = rengMin(rengCita)
    if (rengAguja.length < 12) throw new Error(`cita demasiado corta: «${rengCita}»`)
    if (rengCita.length > 260) throw new Error(`cita demasiado larga: «${rengCita.slice(0, 40)}…»`)
    for (const rengCodigo of rengCodigos ?? RENG_BUSQUEDA[rengDoc.tipo][rengClase]) {
      for (const rengS of rengDoc.d.secciones.filter((rengX) => rengX.codigo === rengCodigo)) {
        const rengTexto = rengNorm(rengS.texto)
        const rengI = rengMin(rengTexto).indexOf(rengAguja)
        if (rengI < 0) continue
        const rengLiteral = rengMin(rengTexto) === rengTexto.toLowerCase() ? rengTexto.slice(rengI, rengI + rengCita.replace(/\s+/g, ' ').trim().length) : rengNorm(rengCita)
        const rengSec = rengDoc.tipo === 'ft' ? RENG_SEC_FT[rengCodigo] : RENG_SEC_FDA[rengCodigo] ?? (rengNorm(rengS.titulo) || 'Información de la etiqueta')
        return { f: rengFuente, sec: rengSec, cita: rengLiteral, codigo: rengCodigo }
      }
    }
    throw new Error(`cita no encontrada (${rengClase}): «${rengCita}»`)
  }
}

function rengFechaIso(rengD) {
  const rengM = /^(\w{3}) (\d{1,2}), (\d{4})$/.exec(rengD)
  return rengM ? `${rengM[3]}-${RENG_MESES[rengM[1]]}-${rengM[2].padStart(2, '0')}` : rengD
}

function rengOrganos(rengS, rengDonde) {
  const rengL = rengLista(rengS)
  for (const rengO of rengL) if (!RENG_DESTINOS.has(rengO)) throw new Error(`${rengDonde}: destino desconocido «${rengO}»`)
  return rengL
}

function rengCompilar(rengLineas) {
  const [rengCab, ...rengResto] = rengLineas
  const [rengArroba, rengNombre, rengAreaK, rengClase, rengSinonimos, rengOpciones = ''] = rengCab
  const rengId = rengArroba.slice(1)
  const rengArea = RENG_AREAS[rengAreaK]
  if (!rengArea) throw new Error(`área desconocida «${rengAreaK}»`)
  const rengOpc = Object.fromEntries(rengOpciones.split(';').filter(Boolean).map((rengX) => rengX.split('=').map((rengY) => rengY.trim())))
  const rengDoc = rengDocumento(rengOpc.doc ?? rengId)
  const { d: rengD } = rengDoc
  const rengExtension = rengOpc.anadir === '1'
  const rengComb = rengOpc.comb ? rengOpc.comb.split(',').map((rengX) => rengX.trim()).filter(Boolean) : null
  const rengFamilia = rengOpc.familia ?? 'solido-oral'
  if (!RENG_FAMILIAS.has(rengFamilia)) throw new Error(`familia desconocida «${rengFamilia}»`)
  const rengOralF = rengFamilia !== 'inyectable'
  const rengDigestiva = rengOralF && !/sublingual|bucal/.test(rengOpc.vias ?? '')
  const rengPc = rengD.pubchem ?? (rengExtension || rengComb ? { CID: 0, MolecularFormula: '', MolecularWeight: '0', SMILES: '', InChIKey: '', IUPACName: '' } : null)
  if (!rengPc) throw new Error('sin identidad de PubChem')
  if (rengExtension && !rengOpc.sufijo) throw new Error('una extensión necesita sufijo=...')
  if (rengExtension && !rengOpc.recorrido) throw new Error('una extensión necesita recorrido=propio o recorrido=de')
  const rengFaltaExplicito = (rengQue) => {
    throw new Error(`en ${rengFamilia} hay que escribir explícitamente ${rengQue}`)
  }
  const rengPor = (rengK) => rengResto.filter((rengL) => rengL[0] === rengK)
  const rengUna = (rengK, rengObligatoria = true) => {
    const rengL = rengPor(rengK)
    if (rengObligatoria && rengL.length !== 1) throw new Error(`hace falta exactamente una línea ${rengK}`)
    return rengL[0]
  }

  let rengFuenteId, rengFuenteCodigo, rengProducto, rengTitular, rengMercado, rengFormaFuente, rengForma, rengLiberacion, rengConc, rengExcip, rengSalAuto
  if (rengDoc.tipo === 'fda') {
    rengFuenteId = `dailymed-${rengId}${rengExtension ? `-${rengOpc.sufijo}` : ''}`
    const rengRutaSpl = rengOpc.ruta ?? 'ORAL'
    const rengProds = rengD.productos.filter((rengP) => rengP.ruta === rengRutaSpl && (!rengOpc.forma || rengP.forma === rengOpc.forma))
    if (!rengProds.length) throw new Error(`sin producto de ruta ${rengRutaSpl} que coincida`)
    const rengP = rengProds[0]
    const rengMismos = rengProds.filter((rengX) => rengX.forma === rengP.forma && rengX.nombre === rengP.nombre)
    const rengNoInactivos = rengP.ingredientes.filter((rengI) => rengI.clase !== 'IACT')
    const rengConCantidad = rengNoInactivos.filter((rengI) => rengI.cantidad !== null)
    const rengActivos = rengNoInactivos.length > 1 && rengConCantidad.length >= 1 && !rengComb ? rengConCantidad : rengNoInactivos
    if (!rengComb && rengActivos.length !== 1) throw new Error(`el producto tiene ${rengActivos.length} activos`)
    if (rengComb && rengActivos.length !== rengComb.length) throw new Error(`la combinación declara ${rengComb.length} componentes y el producto tiene ${rengActivos.length} activos`)
    const rengA = rengActivos[0]
    const rengDosis = [...new Set(rengMismos.map((rengX) => rengX.ingredientes.find((rengI) => rengI.clase !== 'IACT')?.cantidad).filter(Boolean))]
    const rengFormaRegla = RENG_FORMAS.find(([rengRe]) => rengRe.test(rengP.forma))
    if (!rengFormaRegla) throw new Error(`forma sin traducir: ${rengP.forma}`)
    rengFormaFuente = rengP.forma
    rengForma = rengFormaRegla[1]
    rengLiberacion = rengFormaRegla[2]
    rengProducto = `${rengP.nombre} · ${rengForma.toLowerCase()}`
    rengTitular = (/\[([^[\]]+)\]\s*$/.exec(rengD.meta.title)?.[1] ?? '').trim()
    rengMercado = 'EE. UU.'
    const rengBase = rengA.sustancia.replace(/,? USP$/i, '')
    const rengResto = rengA.resto ? rengA.resto.toLowerCase() : rengBase.toLowerCase()
    const rengUnidad = /^Cápsula/.test(rengForma) ? 'cápsula' : /^Comprimido|^Gragea/.test(rengForma) ? 'comprimido' : 'unidad'
    rengConc = rengDosis.length ? (rengOralF && rengFamilia === 'solido-oral' ? `${rengDosis.join(', ').replace(/, ([^,]*)$/, ' o $1')} por ${rengUnidad}, según la etiqueta` : '') : ''
    rengExcip = [...new Set(rengP.ingredientes.filter((rengI) => rengI.clase === 'IACT').map((rengI) => rengI.sustancia.toLowerCase()))]
    if (!rengComb && rengA.resto && rengBase.toLowerCase() !== rengResto) {
      const rengUltima = rengBase.split(' ').at(-1).toUpperCase()
      rengSalAuto = { nombre: RENG_SALES[rengUltima] ? `${rengPrimeraMayus(RENG_SALES[rengUltima])} de ${rengNombre.toLowerCase()}` : rengPrimeraMayus(rengBase.toLowerCase()), cita: rengBase }
    }
    const rengTitulo = /^(.*) \[[^[\]]+\]\s*$/.exec(rengD.meta.title)?.[1] ?? rengD.meta.title
    rengFuenteCodigo = `rengEtiquetaFDA(${[rengFuenteId, rengD.setid, rengTitulo, rengP.nombre, String(rengD.meta.spl_version), rengFechaIso(rengD.meta.published_date), rengD.consultado].map((rengX) => inspect(rengX)).join(', ')})`
  } else {
    rengFuenteId = `cima-${rengD.cima}`
    rengProducto = rengD.meta.title
    rengTitular = rengD.meta.titular
    rengMercado = 'España (UE)'
    rengFormaFuente = rengD.meta.forma
    rengForma = rengPrimeraMayus(rengD.meta.forma.toLowerCase())
    rengLiberacion = /GASTRORRESISTENTE|LIBERACI[ÓO]N RETARDADA/i.test(rengD.meta.forma + ' ' + rengD.meta.title) ? 'retardada' : /LIBERACI[ÓO]N PROLONGADA|LIBERACI[ÓO]N MODIFICADA/i.test(rengD.meta.forma + ' ' + rengD.meta.title) ? 'prolongada' : 'no declarada'
    const rengA = rengD.meta.activos[0]
    rengConc = `${rengA.cantidad} ${rengA.unidad} de ${rengA.nombre.toLowerCase()}`
    rengDoc.activoCima = rengA
    rengExcip = []
    if (!rengComb && rengA.nombre.toLowerCase().replace(/\s+/g, ' ') !== rengNombre.toLowerCase()) rengSalAuto = { nombre: rengPrimeraMayus(rengA.nombre.toLowerCase()), cita: rengA.nombre }
    rengFuenteCodigo = `rengFichaCIMA(${[rengFuenteId, String(rengD.cima), `${rengD.meta.title} (${rengD.meta.titular})`, rengD.meta.fecha, rengD.consultado].map((rengX) => inspect(rengX)).join(', ')})`
  }
  const rengRef = rengBuscador(rengDoc, rengFuenteId)
  const rengK = rengUna('K', false)
  if (rengK) rengConc = rengK[1]
  if (!rengConc) throw new Error('falta la concentración (línea K)')
  const rengX = rengUna('X', false)
  if (rengX) rengExcip = rengX[1].split(';').map((rengY) => rengY.trim()).filter(Boolean)
  if (!rengExcip.length) throw new Error('faltan los excipientes (línea X)')
  const rengS = rengUna('S', false)
  const rengSal = rengS ? (rengS[1] === '-' ? undefined : { nombre: rengS[1], ref: rengRef('S', rengS[2]) }) : rengSalAuto ? { nombre: rengSalAuto.nombre, ref: rengRef('S', rengSalAuto.cita) } : undefined
  if (!rengK && rengDoc.activoCima && rengFamilia !== 'solido-oral') rengFaltaExplicito('la concentración (línea K)')
  if (!rengK && rengDoc.activoCima) rengConc = `${rengDoc.activoCima.cantidad} ${rengDoc.activoCima.unidad} de ${(rengSal?.nombre ?? rengNombre).toLowerCase()} por ${/^Cápsula/.test(rengForma) ? 'cápsula' : /^Comprimido/.test(rengForma) ? 'comprimido' : 'unidad'}`

  const [, rengUsosT, rengUsosC] = rengUna('U')
  const rengUsos = { t: rengUsosT, ref: rengRef('U', rengUsosC) }
  const [, rengActuaT, rengActuaC, rengLugar, rengDiana] = rengUna('A')
  const rengExtras = (rengEtapa) => rengPor('+').filter((rengL) => rengL[1] === rengEtapa).map((rengL) => ({ t: rengL[2], ref: rengRef(rengEtapa === 'A' ? 'A' : rengEtapa === 'L' ? 'L' : 'PK', rengL[3]), ...(rengL[4] ? { poblacion: rengL[4] } : {}), ...(rengL[5] ? { condiciones: rengL[5] } : {}) }))

  const rengLib = rengUna('L')
  const rengEsLocal = rengOpc.local === '1'
  const rengLlegaL = rengLib[4] || (rengFamilia === 'solido-oral' ? `${rengForma} tragado: baja por el esófago hasta el estómago.` : rengFamilia === 'liquido-oral' ? 'El líquido tragado baja por el esófago hasta el estómago.' : rengFaltaExplicito('qué llega en la liberación (línea L, columna 4)'))
  const rengSigueL = rengLib[5] || (rengFamilia === 'liquido-oral' ? 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.' : rengFamilia === 'inyectable' ? rengFaltaExplicito('qué sigue en la liberación (línea L, columna 5)') : rengLiberacion === 'prolongada' ? 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.' : rengLiberacion === 'retardada' ? 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.' : 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.')
  const rengEtapa = (rengClave, rengDefecto) => {
    const rengL = rengUna(rengClave)
    const [, rengOcurre, rengCita, rengOrg, rengExtra, rengLlega, rengSigue] = rengL
    if (!rengDefecto && (!rengLlega || !rengSigue)) rengFaltaExplicito(`qué llega y qué sigue en la etapa ${rengClave}`)
    return { ocurre: rengOcurre, cita: rengCita, organos: rengOrganos(rengOrg, rengClave), extra: rengExtra ?? '', llega: rengLlega || rengDefecto.llega, sigue: rengSigue || rengDefecto.sigue }
  }
  const rengZ = rengPor('Z').find((rengL) => rengL[1] === 'absorcion')
  const rengB = rengZ ? null : rengEtapa('B', rengFamilia === 'inyectable' ? null : { llega: 'Llega el principio activo liberado.', sigue: rengEsLocal ? 'Casi todo sigue dentro del tubo digestivo, donde actúa.' : 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.' })
  const rengDd = rengEtapa('D', rengFamilia === 'inyectable' ? null : { llega: rengEsLocal ? 'El fármaco sigue en el tubo digestivo; solo una parte pequeña llega a la sangre.' : 'Llega a la circulación general la fracción absorbida.', sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.' })
  const rengM = rengEtapa('M', { llega: 'El fármaco llega a los lugares donde se transforma.', sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.' })
  const rengE = rengEtapa('E', { llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.', sigue: 'Fin del recorrido.' })
  const rengGenerales = rengB?.extra ? rengOrganos(rengB.extra, 'B generales') : rengEsLocal || !rengDigestiva ? [] : ['intestino-delgado', 'vena-porta']
  const rengMetabolitos = rengPor('T').map(([, rengNom, rengAct, rengCita, rengNota]) => {
    if (!RENG_ACTIVIDADES.has(rengAct)) throw new Error(`actividad no válida «${rengAct}»`)
    return { nombre: rengNom, actividad: rengAct, ...(rengNota ? { nota: rengNota } : {}), ref: rengRef('PK', rengCita) }
  })
  const rengCifras = rengPor('C').map(([, rengMag, rengNom, rengValor, rengUnidad, rengCita, rengAnalito, rengPob, rengCond, rengOrigen]) => {
    if (!RENG_MAGNITUDES.has(rengMag)) throw new Error(`magnitud no válida «${rengMag}»`)
    if (rengOrigen && !['otra-presentacion', 'otra-via'].includes(rengOrigen)) throw new Error(`origen no válido «${rengOrigen}»`)
    return { magnitud: rengMag, nombre: rengNom, valor: rengValor, unidad: rengUnidad, ...(rengAnalito ? { analito: rengAnalito } : {}), ...(rengPob ? { poblacion: rengPob } : {}), ...(rengCond ? { condiciones: rengCond } : {}), ...(rengOrigen ? { origen: rengOrigen } : {}), ref: rengRef('PK', rengCita) }
  })
  const rengReacciones = rengPor('R').map(([, rengT, rengCita]) => {
    const rengR = rengRef('R', rengCita)
    return [rengT, rengR.codigo, rengR.cita]
  })
  if (rengReacciones.length < 2) throw new Error('hacen falta al menos dos efectos adversos (líneas R)')
  const rengAdvertencias = rengPor('W').map(([, rengTit, rengT, rengOrg, rengCita, rengCodigo]) => ({ titulo: rengTit, texto: rengT, organos: rengOrganos(rengOrg, 'W'), ref: rengRef('W', rengCita, rengCodigo ? [rengCodigo] : undefined) }))
  const rengNota = rengUna('N', false)

  const rengLibCita = rengLib[2] ? rengRef('L', rengLib[2]) : null
  if (!rengLibCita) throw new Error('la liberación necesita una cita (línea L)')
  const rengViasDeclaradas = rengOpc.vias ? rengOpc.vias.split(',').map((rengX) => rengX.trim()).filter(Boolean) : rengDoc.tipo === 'fda' ? [RENG_VIA_FDA[rengOpc.ruta ?? 'ORAL']] : ['oral']
  if (!rengViasDeclaradas.length || rengViasDeclaradas.some((rengV) => !rengV || !Object.values(RENG_VIA_FDA).includes(rengV))) throw new Error(`vías no válidas «${rengViasDeclaradas.join(',')}»`)
  if (rengFamilia !== 'inyectable' && rengViasDeclaradas.some((rengV) => !['oral', 'sublingual', 'bucal'].includes(rengV))) throw new Error('una forma oral solo admite vías oral, sublingual o bucal')
  const rengFormaN = rengOpc.formaN ?? (rengFamilia === 'solido-oral' ? (/^Cápsula/.test(rengForma) ? 'capsula' : /masticable/i.test(rengForma) ? 'comprimido-masticable' : /bucodispersable/i.test(rengForma) ? 'comprimido-bucodispersable' : /sublingual/i.test(rengForma) || rengViasDeclaradas[0] === 'sublingual' ? 'comprimido-sublingual' : 'comprimido') : rengFaltaExplicito('la forma normalizada (opción formaN=...)'))
  if (!RENG_FORMAS_N.has(rengFormaN)) throw new Error(`forma normalizada desconocida «${rengFormaN}»`)
  const rengExcipRiesgo = rengPor('G').map(([, rengNom, rengMotivo, rengVs, rengCita]) => {
    const rengVsLista = rengLista(rengVs)
    if (!rengVsLista.length || rengVsLista.some((rengV) => !rengViasDeclaradas.includes(rengV))) throw new Error(`G: las vías de «${rengNom}» deben estar entre ${rengViasDeclaradas.join(', ')}`)
    return { nombre: rengNom, motivo: rengMotivo, vias: rengVsLista, ref: rengRef('G', rengCita) }
  })
  const rengAbsorcion = rengZ
    ? { organos: rengOrganos(rengZ[4], 'Z'), llega: rengZ[5], ocurre: rengZ[6], sigue: rengZ[7], datos: [], noAplica: { motivo: rengZ[2], ref: rengRef('Z', rengZ[3]) } }
    : { organos: rengB.organos, organosGenerales: rengGenerales.filter((rengO) => !rengB.organos.includes(rengO)), llega: rengB.llega, ocurre: rengB.ocurre, sigue: rengB.sigue, datos: [{ t: rengB.ocurre, ref: rengRef('PK', rengB.cita) }, ...rengExtras('B'), ...(rengEsLocal || !rengDigestiva ? [] : ['RENG_GENERAL.intestino', 'RENG_GENERAL.portal'])] }
  if (rengZ && rengFamilia !== 'inyectable') throw new Error('«no aplica» (línea Z) solo se admite en inyectables')
  const rengFicha = {
    activo: { id: rengId, nombre: rengNombre, clase: rengClase, sinonimos: rengSinonimos.split(';').map((rengY) => rengY.trim()).filter(Boolean), formula: rengPc.MolecularFormula.replace(/[+-]\d*$/, ''), masaMolar: Number(rengPc.MolecularWeight), smiles: rengPc.SMILES, inchikey: rengPc.InChIKey, cid: rengPc.CID, iupac: rengPc.IUPACName, area: rengArea },
    presentaciones: [
      {
        id: `${rengId}-${rengOpc.sufijo ?? (rengFamilia === 'inyectable' ? 'inyectable' : rengFamilia === 'liquido-oral' ? 'solucion' : 'oral')}`,
        producto: rengProducto,
        titular: rengTitular,
        mercado: rengMercado,
        forma: rengForma,
        formaFuente: rengFormaFuente,
        liberacion: rengLiberacion,
        concentraciones: rengConc,
        ...(rengSal ? { sal: rengSal } : {}),
        excipientes: rengExcip,
        usos: rengUsos,
        fuente: rengFuenteId,
        ...(rengNota ? { nota: rengNota[1] } : {}),
        ...(rengAdvertencias.length ? { advertencias: rengAdvertencias } : {}),
        reacciones: rengReacciones,
        familia: rengFamilia,
        vias: rengViasDeclaradas,
        formaNormalizada: rengFormaN,
        ...(rengExcipRiesgo.length ? { excipientesRiesgo: rengExcipRiesgo } : {})
      }
    ],
    resumen: {
      contiene: `${rengForma}: ${rengConc}${rengSal && !rengConc.toLowerCase().includes(rengSal.nombre.toLowerCase()) ? `; el activo va como ${rengSal.nombre.charAt(0).toLowerCase()}${rengSal.nombre.slice(1)}` : ''}. Los excipientes no son el principio activo.`,
      usos: rengUsosT,
      actua: rengActuaT,
      recorrido: rengUna('Q', false)?.[1] ?? `${rengB ? rengB.ocurre : rengZ[6]} ${rengE.ocurre}`
    },
    recorrido: {
      liberacion: { organos: rengOrganos(rengLib[3], 'L'), ...(rengDigestiva ? { organosGenerales: ['boca', 'esofago', 'estomago'].filter((rengO) => !rengLista(rengLib[3]).includes(rengO)) } : {}), llega: rengLlegaL, ocurre: rengLib[1], sigue: rengSigueL, datos: [{ t: rengLib[1], ref: rengLibCita }, ...rengExtras('L'), ...(rengFamilia === 'solido-oral' ? ['RENG_GENERAL.disgregar'] : [])] },
      absorcion: rengAbsorcion,
      distribucion: {
        organos: rengDd.organos,
        llega: rengDd.llega,
        ocurre: rengDd.ocurre,
        sigue: rengDd.sigue,
        datos: [{ t: rengDd.ocurre, ref: rengRef('PK', rengDd.cita) }, ...rengExtras('D')],
        accion: { diana: rengDiana || null, efecto: rengActuaT, lugar: rengOrganos(rengLugar, 'A'), datos: [{ t: rengActuaT, ref: rengRef('A', rengActuaC) }, ...rengExtras('A')] }
      },
      metabolismo: { organos: rengM.organos, llega: rengM.llega, ocurre: rengM.ocurre, sigue: rengM.extra === 'sin' ? 'Sin transformarse, sigue hacia la eliminación.' : rengM.sigue, datos: [{ t: rengM.ocurre, ref: rengRef('PK', rengM.cita) }, ...rengExtras('M')], metabolitos: rengMetabolitos, ...(rengM.extra === 'sin' ? { formas: ['disuelto'] } : {}) },
      excrecion: { organos: rengE.organos, llega: rengE.llega, ocurre: rengE.ocurre, sigue: rengE.sigue, datos: [{ t: rengE.ocurre, ref: rengRef('PK', rengE.cita) }, ...rengExtras('E')], ...(rengE.extra === 'original' ? { formas: ['disuelto'] } : {}) }
    },
    cifras: rengCifras,
    fuentes: 'RENG_FUENTES',
    estado: 'completa'
  }
  const rengFuentes = rengComb || rengExtension ? `[\n    ${rengFuenteCodigo}\n  ]` : `[\n    ${rengFuenteCodigo},\n    rengPubchem(${rengPc.CID}, ${inspect(rengSinonimos.split(';')[0].trim() || rengNombre)}, ${inspect(rengD.consultado)})\n  ]`
  const rengFormatear = (rengX) => inspect(rengX, { depth: Infinity, compact: 3, breakLength: 160, maxArrayLength: Infinity, maxStringLength: Infinity }).replace(/'RENG_GENERAL\.(\w+)'/g, 'RENG_GENERAL.$1')
  if (rengExtension) {
    if (rengOpc.recorrido !== 'propio' && rengOpc.recorrido !== 'de') throw new Error('recorrido debe ser propio o de')
    if (rengOpc.recorrido === 'de' && !rengOpc.principal) throw new Error('recorrido=de necesita principal=<id de la presentación>')
    const rengPres = { ...rengFicha.presentaciones[0], ...(rengOpc.recorrido === 'propio' ? { recorridoPropio: { resumen: rengFicha.resumen.recorrido, etapas: rengFicha.recorrido } } : { recorridoDe: rengOpc.principal }) }
    return { id: rengId, extension: true, presentacion: rengFormatear(rengPres), fuenteCodigo: rengFuenteCodigo, cifras: rengFicha.cifras.map((rengC) => ({ ...rengC, presentacion: rengProducto })), fuente: rengDoc.tipo === 'fda' ? { setid: rengD.setid } : { cima: rengD.cima }, cid: 0 }
  }
  if (rengComb) rengFicha.combinacion = { componentes: rengComb.map((rengX) => ({ activoId: rengX })) }
  const rengCuerpo = inspect(rengFicha, { depth: Infinity, compact: 3, breakLength: 160, maxArrayLength: Infinity, maxStringLength: Infinity })
    .replace(/'RENG_GENERAL\.(\w+)'/g, 'RENG_GENERAL.$1')
    .replace("'RENG_FUENTES'", rengFuentes)
  const rengImporta = rengDoc.tipo === 'fda' ? (rengComb ? 'rengEtiquetaFDA' : 'rengEtiquetaFDA, rengPubchem') : rengComb ? 'rengFichaCIMA' : 'rengFichaCIMA, rengPubchem'
  return { id: rengId, texto: `import { RENG_GENERAL } from '../generales'\nimport { ${rengImporta}, type RengFichaFarmaco } from '../modelo'\n\nexport default ${rengCuerpo} satisfies RengFichaFarmaco\n`, fuente: rengDoc.tipo === 'fda' ? { setid: rengD.setid } : { cima: rengD.cima }, cid: rengPc.CID }
}

const rengReg = existsSync(rengRegistro) ? JSON.parse(readFileSync(rengRegistro, 'utf8')) : { generadas: {} }
let rengErrores = 0
const rengExtensiones = new Map()
for (const rengB of rengBloques(readFileSync(rengEspec, 'utf8'))) {
  const rengId = rengB[0][0].slice(1)
  try {
    const rengR = rengCompilar(rengB)
    if (rengR.extension) {
      if (!existsSync(join(rengCatalogo, `${rengR.id}.ts`))) throw new Error('una extensión necesita que la ficha del activo ya exista')
      const rengGrupo = rengExtensiones.get(rengR.id) ?? { presentaciones: [], fuentes: [], cifras: [], origen: [] }
      rengGrupo.presentaciones.push(rengR.presentacion)
      if (!rengGrupo.fuentes.includes(rengR.fuenteCodigo)) rengGrupo.fuentes.push(rengR.fuenteCodigo)
      rengGrupo.cifras.push(...rengR.cifras)
      rengGrupo.origen.push(rengR.fuente)
      rengExtensiones.set(rengR.id, rengGrupo)
      console.log(`ok ${rengR.id} (extensión)`)
      continue
    }
    const rengRuta = join(rengCatalogo, `${rengR.id}.ts`)
    if (existsSync(rengRuta) && !rengReg.generadas[rengR.id]) throw new Error('ya existe una ficha que no generó esta herramienta')
    writeFileSync(rengRuta, rengR.texto)
    rengReg.generadas[rengR.id] = { ...rengR.fuente, cid: rengR.cid, lote: process.env.LOTE ?? '', fecha: new Date().toISOString().slice(0, 10) }
    console.log(`ok ${rengR.id}`)
  } catch (rengE) {
    rengErrores++
    console.log(`ERROR ${rengId}: ${rengE.message}`)
  }
}
for (const [rengId, rengGrupo] of rengExtensiones) {
  const rengDirExt = join(rengCatalogo, '..', 'presentaciones')
  mkdirSync(rengDirExt, { recursive: true })
  const rengImportes = ['rengEtiquetaFDA', 'rengFichaCIMA'].filter((rengN) => rengGrupo.fuentes.some((rengF) => rengF.startsWith(`${rengN}(`)))
  const rengCifras = rengGrupo.cifras.length ? `,\n  cifras: ${inspect(rengGrupo.cifras, { depth: Infinity, compact: 3, breakLength: 160, maxArrayLength: Infinity, maxStringLength: Infinity })}` : ''
  const rengTexto = `import { RENG_GENERAL } from '../generales'\nimport { ${rengImportes.join(', ')}, type RengExtensionFicha } from '../modelo'\n\nexport default {\n  activoId: ${inspect(rengId)},\n  presentaciones: [\n    ${rengGrupo.presentaciones.join(',\n    ')}\n  ],\n  fuentes: [\n    ${rengGrupo.fuentes.join(',\n    ')}\n  ]${rengCifras}\n} satisfies RengExtensionFicha\n`
  writeFileSync(join(rengDirExt, `${rengId}.ts`), rengTexto)
  rengReg.generadas[`ext:${rengId}`] = { origen: rengGrupo.origen, lote: process.env.LOTE ?? '', fecha: new Date().toISOString().slice(0, 10) }
}
mkdirSync(dirname(rengRegistro), { recursive: true })
writeFileSync(rengRegistro, JSON.stringify(rengReg, null, 1))
if (rengErrores) process.exitCode = 1
