import type * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { RengCapa } from '../datos/anatomia'
import rengIndice from '../modelo/indice.json'

const RENG_IMPORTAR: Record<RengCapa, () => Promise<{ default: string }>> = {
  esqueleto: () => import('../modelo/esqueleto.glb?inline'),
  musculos: () => import('../modelo/musculos.glb?inline'),
  organos: () => import('../modelo/organos.glb?inline')
}

const RENG_BYTES = new Map<RengCapa, Promise<ArrayBuffer>>()

function rengDecodificar(rengDataUrl: string): ArrayBuffer {
  const rengB64 = rengDataUrl.slice(rengDataUrl.indexOf(',') + 1)
  const rengBin = atob(rengB64)
  const rengOut = new Uint8Array(rengBin.length)
  for (let rengI = 0; rengI < rengBin.length; rengI++) rengOut[rengI] = rengBin.charCodeAt(rengI)
  return rengOut.buffer
}

export async function rengCargarCapa(rengCapa: RengCapa): Promise<THREE.Group> {
  let rengBytes = RENG_BYTES.get(rengCapa)
  if (!rengBytes) {
    rengBytes = RENG_IMPORTAR[rengCapa]().then((rengM) => rengDecodificar(rengM.default))
    RENG_BYTES.set(rengCapa, rengBytes)
    rengBytes.catch(() => RENG_BYTES.delete(rengCapa))
  }
  const rengGltf = await new GLTFLoader().parseAsync((await rengBytes).slice(0), '')
  return rengGltf.scene
}

export interface RengInfoEstructura {
  centro: [number, number, number]
  min: [number, number, number]
  max: [number, number, number]
  triangulos: number
  triangulosOrigen: number
  conceptos: string[]
  piezas: Array<{ fj: string; nombre: string }>
}

export const RENG_INDICE = rengIndice.estructuras as unknown as Record<string, RengInfoEstructura>
export const RENG_FUENTE_MODELO = rengIndice.fuente
