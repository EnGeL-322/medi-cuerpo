import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RENG_AQUI = dirname(fileURLToPath(import.meta.url))
const RENG_RAIZ = resolve(RENG_AQUI, '../..')
const RENG_DESTINO = join(RENG_RAIZ, 'src/renderer/modules/medicuerpo/cuerpo/modelo')
const { RENG_ESTRUCTURAS } = await import(join(RENG_RAIZ, 'src/renderer/modules/medicuerpo/cuerpo/datos/anatomia.ts').replace(/^([A-Z]):/, 'file:///$1:').replace(/\\/g, '/'))

const RENG_ORIGEN = process.argv[2]
if (!RENG_ORIGEN || !existsSync(RENG_ORIGEN)) {
  console.error('Uso: node scripts/anatomia/convertir-bp3d.mjs <carpeta con partof/, isa/ y los *_element_parts.txt>')
  process.exit(1)
}
const RENG_CELDA_MM = { esqueleto: 4, musculos: 5, organos: 3 }
const RENG_DIR = { partof: join(RENG_ORIGEN, 'partof/partof_BP3D_4.0_obj_99'), isa: join(RENG_ORIGEN, 'isa/isa_BP3D_4.0_obj_99') }

const rengTabla = (rengF) =>
  readFileSync(join(RENG_ORIGEN, rengF), 'utf8')
    .replace(/\r/g, '')
    .split('\n')
    .slice(1)
    .filter(Boolean)
    .map((rengL) => rengL.split('\t'))
const RENG_ELEMENTOS = { partof: rengTabla('partof_element_parts.txt'), isa: rengTabla('isa_element_parts.txt') }

function rengLeerObj(rengArbol, rengFj) {
  const rengRuta = join(RENG_DIR[rengArbol], `${rengFj}.obj`)
  const rengT = readFileSync(rengRuta, 'utf8')
  const rengNombre = /English name : (.*)/.exec(rengT)?.[1].trim() ?? rengFj
  const rengV = []
  const rengF = []
  for (const rengL of rengT.split('\n')) {
    if (rengL.startsWith('v ')) {
      const [, rengX, rengY, rengZ] = rengL.trim().split(/\s+/)
      rengV.push(Number(rengX), Number(rengY), Number(rengZ))
    } else if (rengL.startsWith('f ')) {
      const rengIdx = rengL.trim().split(/\s+/).slice(1).map((rengS) => Number(rengS.split('/')[0]) - 1)
      for (let rengK = 1; rengK + 1 < rengIdx.length; rengK++) rengF.push(rengIdx[0], rengIdx[rengK], rengIdx[rengK + 1])
    }
  }
  return { fj: rengFj, nombre: rengNombre, v: rengV, f: rengF }
}

function rengPiezas(rengE) {
  const rengM = rengE.bp3d
  const rengFjs = [...new Set(RENG_ELEMENTOS[rengM.arbol].filter((rengR) => rengM.conceptos.includes(rengR[0])).map((rengR) => rengR[2]))]
  const rengOut = []
  for (const rengFj of rengFjs) {
    const rengP = rengLeerObj(rengM.arbol, rengFj)
    if (rengM.incluir && !new RegExp(rengM.incluir, 'i').test(rengP.nombre)) continue
    if (rengM.excluir && new RegExp(rengM.excluir, 'i').test(rengP.nombre)) continue
    if (rengM.lado && !new RegExp(`\\b${rengM.lado}\\b`, 'i').test(rengP.nombre)) continue
    rengOut.push(rengP)
  }
  if (rengOut.length === 0) throw new Error(`${rengE.id}: ninguna pieza tras los filtros`)
  return rengOut
}

function rengReducir(rengPs, rengCelda) {
  const rengCeldas = new Map()
  const rengSuma = []
  const rengCuenta = []
  const rengTri = new Set()
  const rengIndices = []
  let rengOriginal = 0
  for (const rengP of rengPs) {
    rengOriginal += rengP.f.length / 3
    const rengId = new Int32Array(rengP.v.length / 3)
    for (let rengI = 0; rengI < rengId.length; rengI++) {
      const rengX = rengP.v[3 * rengI]
      const rengY = rengP.v[3 * rengI + 1]
      const rengZ = rengP.v[3 * rengI + 2]
      const rengK = `${Math.floor(rengX / rengCelda)},${Math.floor(rengY / rengCelda)},${Math.floor(rengZ / rengCelda)}`
      let rengC = rengCeldas.get(rengK)
      if (rengC === undefined) {
        rengC = rengCuenta.length
        rengCeldas.set(rengK, rengC)
        rengSuma.push(0, 0, 0)
        rengCuenta.push(0)
      }
      rengSuma[3 * rengC] += rengX
      rengSuma[3 * rengC + 1] += rengY
      rengSuma[3 * rengC + 2] += rengZ
      rengCuenta[rengC]++
      rengId[rengI] = rengC
    }
    for (let rengT = 0; rengT < rengP.f.length; rengT += 3) {
      const rengA = rengId[rengP.f[rengT]]
      const rengB = rengId[rengP.f[rengT + 1]]
      const rengD = rengId[rengP.f[rengT + 2]]
      if (rengA === rengB || rengB === rengD || rengA === rengD) continue
      const rengClave = [rengA, rengB, rengD].sort((rengU, rengW) => rengU - rengW).join(',')
      if (rengTri.has(rengClave)) continue
      rengTri.add(rengClave)
      rengIndices.push(rengA, rengB, rengD)
    }
  }
  const rengUsados = new Map()
  const rengPos = []
  const rengIdx = rengIndices.map((rengC) => {
    let rengN = rengUsados.get(rengC)
    if (rengN === undefined) {
      rengN = rengUsados.size
      rengUsados.set(rengC, rengN)
      const RENG_X = rengSuma[3 * rengC] / rengCuenta[rengC]
      const RENG_Y = rengSuma[3 * rengC + 1] / rengCuenta[rengC]
      const RENG_Z = rengSuma[3 * rengC + 2] / rengCuenta[rengC]
      rengPos.push(RENG_X / 1000, RENG_Z / 1000, -RENG_Y / 1000)
    }
    return rengN
  })
  return { pos: Float32Array.from(rengPos), idx: rengIdx, original: rengOriginal }
}

function rengGlb(rengMallas) {
  const rengPartes = []
  let rengLargo = 0
  const rengVistas = []
  const rengAccesores = []
  const rengMeshes = []
  const rengNodos = []
  const rengAnadir = (rengBuf, rengTarget) => {
    const rengRelleno = (4 - (rengLargo % 4)) % 4
    if (rengRelleno) {
      rengPartes.push(Buffer.alloc(rengRelleno))
      rengLargo += rengRelleno
    }
    rengVistas.push({ buffer: 0, byteOffset: rengLargo, byteLength: rengBuf.byteLength, target: rengTarget })
    rengPartes.push(Buffer.from(rengBuf.buffer, rengBuf.byteOffset, rengBuf.byteLength))
    rengLargo += rengBuf.byteLength
    return rengVistas.length - 1
  }
  for (const rengM of rengMallas) {
    const rengMin = [Infinity, Infinity, Infinity]
    const rengMax = [-Infinity, -Infinity, -Infinity]
    for (let rengI = 0; rengI < rengM.pos.length; rengI += 3)
      for (let rengK = 0; rengK < 3; rengK++) {
        rengMin[rengK] = Math.min(rengMin[rengK], rengM.pos[rengI + rengK])
        rengMax[rengK] = Math.max(rengMax[rengK], rengM.pos[rengI + rengK])
      }
    const rengVp = rengAnadir(rengM.pos, 34962)
    rengAccesores.push({ bufferView: rengVp, componentType: 5126, count: rengM.pos.length / 3, type: 'VEC3', min: rengMin, max: rengMax })
    const rengCorto = rengM.pos.length / 3 <= 65535
    const rengIb = rengCorto ? Uint16Array.from(rengM.idx) : Uint32Array.from(rengM.idx)
    const rengVi = rengAnadir(rengIb, 34963)
    rengAccesores.push({ bufferView: rengVi, componentType: rengCorto ? 5123 : 5125, count: rengM.idx.length, type: 'SCALAR' })
    rengMeshes.push({ name: rengM.id, primitives: [{ attributes: { POSITION: rengAccesores.length - 2 }, indices: rengAccesores.length - 1, mode: 4 }] })
    rengNodos.push({ name: rengM.id, mesh: rengMeshes.length - 1 })
  }
  const rengBin = Buffer.concat(rengPartes)
  const rengBinPad = Buffer.concat([rengBin, Buffer.alloc((4 - (rengBin.length % 4)) % 4)])
  const rengJson = {
    asset: { version: '2.0', generator: 'MediCuerpo · scripts/anatomia/convertir-bp3d.mjs', copyright: 'BodyParts3D, © The Database Center for Life Science, CC BY-SA 2.1 JP; malla reducida (ver CREDITOS.md)' },
    scene: 0,
    scenes: [{ nodes: rengNodos.map((_, rengI) => rengI) }],
    nodes: rengNodos,
    meshes: rengMeshes,
    accessors: rengAccesores,
    bufferViews: rengVistas,
    buffers: [{ byteLength: rengBinPad.length }]
  }
  let rengJs = Buffer.from(JSON.stringify(rengJson), 'utf8')
  rengJs = Buffer.concat([rengJs, Buffer.alloc((4 - (rengJs.length % 4)) % 4, 0x20)])
  const rengCab = Buffer.alloc(12)
  rengCab.writeUInt32LE(0x46546c67, 0)
  rengCab.writeUInt32LE(2, 4)
  rengCab.writeUInt32LE(12 + 8 + rengJs.length + 8 + rengBinPad.length, 8)
  const rengC1 = Buffer.alloc(8)
  rengC1.writeUInt32LE(rengJs.length, 0)
  rengC1.writeUInt32LE(0x4e4f534a, 4)
  const rengC2 = Buffer.alloc(8)
  rengC2.writeUInt32LE(rengBinPad.length, 0)
  rengC2.writeUInt32LE(0x004e4942, 4)
  return Buffer.concat([rengCab, rengC1, rengJs, rengC2, rengBinPad])
}

mkdirSync(RENG_DESTINO, { recursive: true })
const rengIndice = { estructuras: {}, capas: {} }
for (const rengCapa of ['esqueleto', 'musculos', 'organos']) {
  const rengMallas = []
  for (const rengE of RENG_ESTRUCTURAS.filter((rengX) => rengX.capa === rengCapa)) {
    const rengPs = rengPiezas(rengE)
    const rengR = rengReducir(rengPs, RENG_CELDA_MM[rengCapa])
    const rengMin = [Infinity, Infinity, Infinity]
    const rengMax = [-Infinity, -Infinity, -Infinity]
    const rengCentro = [0, 0, 0]
    for (let rengI = 0; rengI < rengR.pos.length; rengI += 3)
      for (let rengK = 0; rengK < 3; rengK++) {
        rengMin[rengK] = Math.min(rengMin[rengK], rengR.pos[rengI + rengK])
        rengMax[rengK] = Math.max(rengMax[rengK], rengR.pos[rengI + rengK])
        rengCentro[rengK] += rengR.pos[rengI + rengK] / (rengR.pos.length / 3)
      }
    const rengRed = (rengA) => rengA.map((rengX) => Number(rengX.toFixed(4)))
    rengIndice.estructuras[rengE.id] = {
      capa: rengCapa,
      arbol: rengE.bp3d.arbol,
      conceptos: rengE.bp3d.conceptos,
      piezas: rengPs.map((rengP) => ({ fj: rengP.fj, nombre: rengP.nombre })),
      triangulosOrigen: rengR.original,
      triangulos: rengR.idx.length / 3,
      centro: rengRed(rengCentro),
      min: rengRed(rengMin),
      max: rengRed(rengMax)
    }
    rengMallas.push({ id: rengE.id, pos: rengR.pos, idx: rengR.idx })
    console.log(`${rengCapa.padEnd(10)} ${rengE.id.padEnd(30)} ${String(rengPs.length).padStart(4)} piezas ${String(rengR.original).padStart(7)} → ${String(rengR.idx.length / 3).padStart(6)} triángulos`)
  }
  const rengArchivo = `${rengCapa}.glb`
  const rengDatos = rengGlb(rengMallas)
  writeFileSync(join(RENG_DESTINO, rengArchivo), rengDatos)
  rengIndice.capas[rengCapa] = { archivo: rengArchivo, bytes: rengDatos.length, celdaMm: RENG_CELDA_MM[rengCapa], triangulos: rengMallas.reduce((rengS, rengM) => rengS + rengM.idx.length / 3, 0), sha256: createHash('sha256').update(rengDatos).digest('hex') }
}

const rengSha = (rengF) => (existsSync(join(RENG_ORIGEN, rengF)) ? createHash('sha256').update(readFileSync(join(RENG_ORIGEN, rengF))).digest('hex') : null)
rengIndice.fuente = {
  nombre: 'BodyParts3D',
  version: '4.0 (archivo «LATEST»: README y licencia actualizados el 2025-02-27; datos actualizados en 2013-05)',
  modelo: 'Modelo tridimensional de cuerpo completo de un varón humano adulto',
  doi: '10.18908/lsdba.nbdc00837-000',
  descargas: { 'partof_BP3D_4.0_obj_99.zip': rengSha('partof_BP3D_4.0_obj_99.zip'), 'isa_BP3D_4.0_obj_99.zip': rengSha('isa_BP3D_4.0_obj_99.zip') },
  url: 'https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html',
  consultado: '2026-11-08'
}
rengIndice.transformacion = 'mm → m (×0,001); rotación (x, y, z) → (x, z, −y): Y vertical, cara anterior hacia +z; lado derecho del cuerpo en x < 0 (sin espejo)'
writeFileSync(join(RENG_DESTINO, 'indice.json'), JSON.stringify(rengIndice, null, 1))
console.log('\nCapas:', Object.entries(rengIndice.capas).map(([rengC, rengV]) => `${rengC} ${(rengV.bytes / 1024).toFixed(0)} KB, ${rengV.triangulos} triángulos`).join(' · '))
