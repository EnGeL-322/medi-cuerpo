import { rengFamiliaDe, rengFormaNormalizadaDe, rengViasDe } from '../nucleo/presentaciones'
import { rengCoincideBusqueda } from './fichas'
import type { RengCurvaEstudio, RengFamilia, RengFichaFarmaco, RengPresentacion, RengVia } from './modelo'

export interface RengIndicePresentacion {
  id: string
  producto: string
  titular: string
  mercado: RengPresentacion['mercado']
  forma: string
  liberacion: RengPresentacion['liberacion']
  familia: RengFamilia
  vias: RengVia[]
  formaNormalizada: string
  curva?: true
}

export interface RengIndiceActivo {
  id: string
  nombre: string
  clase: string
  area: string
  sinonimos: string[]
  estado: RengFichaFarmaco['estado']
  smiles: string
  componentes?: string[]
  presentaciones: RengIndicePresentacion[]
}

export interface RengIndiceCatalogo {
  version: 1
  activos: RengIndiceActivo[]
}

export function rengConstruirIndice(rengFichas: readonly RengFichaFarmaco[], rengCurvas: readonly RengCurvaEstudio[]): RengIndiceCatalogo {
  const rengConCurva = new Set(rengCurvas.flatMap((rengC) => rengC.presentaciones))
  const rengActivos = [...rengFichas]
    .sort((rengA, rengB) => rengA.activo.nombre.localeCompare(rengB.activo.nombre, 'es'))
    .map<RengIndiceActivo>((rengF) => ({
      id: rengF.activo.id,
      nombre: rengF.activo.nombre,
      clase: rengF.activo.clase,
      area: rengF.activo.area,
      sinonimos: rengF.activo.sinonimos,
      estado: rengF.estado,
      smiles: rengF.activo.smiles,
      ...(rengF.combinacion ? { componentes: rengF.combinacion.componentes.map((rengC) => rengC.activoId) } : {}),
      presentaciones: rengF.presentaciones.map<RengIndicePresentacion>((rengP) => ({
        id: rengP.id,
        producto: rengP.producto,
        titular: rengP.titular,
        mercado: rengP.mercado,
        forma: rengP.forma,
        liberacion: rengP.liberacion,
        familia: rengFamiliaDe(rengP),
        vias: rengViasDe(rengP),
        formaNormalizada: rengFormaNormalizadaDe(rengP),
        ...(rengConCurva.has(rengP.id) ? { curva: true as const } : {})
      }))
    }))
  return { version: 1, activos: rengActivos }
}

export const rengSerializarIndice = (rengI: RengIndiceCatalogo): string => `{"version":${rengI.version},"activos":[\n${rengI.activos.map((rengA) => JSON.stringify(rengA)).join(',\n')}\n]}\n`

export const rengAreasDeIndice = (rengI: RengIndiceCatalogo): string[] => [...new Set(rengI.activos.map((rengA) => rengA.area))].sort((rengA, rengB) => rengA.localeCompare(rengB, 'es'))

export function rengBuscarEnIndice(rengI: RengIndiceCatalogo, rengQ: string, rengArea: string | null = null): RengIndiceActivo[] {
  return rengI.activos.filter((rengA) => {
    if (rengArea && rengA.area !== rengArea) return false
    return rengCoincideBusqueda([rengA.nombre, ...rengA.sinonimos, rengA.clase, rengA.area, ...rengA.presentaciones.flatMap((rengP) => [rengP.producto, rengP.titular])], rengQ)
  })
}

export const rengActivoDeIndice = (rengI: RengIndiceCatalogo, rengId: string): RengIndiceActivo | undefined => rengI.activos.find((rengA) => rengA.id === rengId)
