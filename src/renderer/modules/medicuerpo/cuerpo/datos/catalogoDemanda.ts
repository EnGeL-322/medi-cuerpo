import { RENG_FUENTES_CURVAS } from './curvas'
import { RENG_FUENTES_GENERALES } from './generales'
import indiceGenerado from './indice.json'
import type { RengIndiceCatalogo } from './indice'
import { rengFusionarExtension } from './fichas'
import type { RengExtensionFicha, RengFichaFarmaco, RengFuente } from './modelo'

export { RENG_CURVAS, rengCurvasDePresentacion } from './curvas'

export const RENG_INDICE = indiceGenerado as unknown as RengIndiceCatalogo
export const RENG_MAX_FICHAS_EN_MEMORIA = 40

const rengCargadores = import.meta.glob<{ default: RengFichaFarmaco }>('./catalogo/*.ts')
const rengCargadoresExtension = import.meta.glob<{ default: RengExtensionFicha }>('./presentaciones/*.ts')
const rengCache = new Map<string, RengFichaFarmaco>()
const rengPendientes = new Map<string, Promise<RengFichaFarmaco | undefined>>()

const rengTocar = (rengId: string, rengF: RengFichaFarmaco): void => {
  rengCache.delete(rengId)
  rengCache.set(rengId, rengF)
  while (rengCache.size > RENG_MAX_FICHAS_EN_MEMORIA) rengCache.delete(rengCache.keys().next().value!)
}

export const rengExisteFicha = (rengId: string): boolean => `./catalogo/${rengId}.ts` in rengCargadores

export function rengFichaCargada(rengId: string): RengFichaFarmaco | undefined {
  const rengF = rengCache.get(rengId)
  if (rengF) rengTocar(rengId, rengF)
  return rengF
}

export function rengCargarFicha(rengId: string): Promise<RengFichaFarmaco | undefined> {
  const rengYa = rengFichaCargada(rengId)
  if (rengYa) return Promise.resolve(rengYa)
  const rengPendiente = rengPendientes.get(rengId)
  if (rengPendiente) return rengPendiente
  const rengCargador = rengCargadores[`./catalogo/${rengId}.ts`]
  if (!rengCargador) return Promise.resolve(undefined)
  const rengCargadorExt = rengCargadoresExtension[`./presentaciones/${rengId}.ts`]
  const rengP = Promise.all([rengCargador(), rengCargadorExt ? rengCargadorExt() : Promise.resolve(undefined)])
    .then(([rengM, rengX]) => {
      const rengFicha = rengFusionarExtension(rengM.default, rengX?.default)
      rengTocar(rengId, rengFicha)
      return rengFicha
    })
    .finally(() => rengPendientes.delete(rengId))
  rengPendientes.set(rengId, rengP)
  return rengP
}

export function rengFuente(rengId: string): RengFuente | undefined {
  for (const rengF of rengCache.values()) {
    const rengX = rengF.fuentes.find((rengY) => rengY.id === rengId)
    if (rengX) return rengX
  }
  return RENG_FUENTES_GENERALES.find((rengX) => rengX.id === rengId) ?? RENG_FUENTES_CURVAS.find((rengX) => rengX.id === rengId)
}

export const rengFichasEnMemoria = (): number => rengCache.size
