import { rengNormalizarNombre } from '../../nucleo/nomenclatura'
import { rengCoincideBusqueda } from '../datos/fichas'
import type { RengIndiceActivo, RengIndiceCatalogo, RengIndicePresentacion } from '../datos/indice'
import type { RengFamilia, RengPresentacion, RengVia } from '../datos/modelo'

export type RengMercado = RengPresentacion['mercado']

export interface RengFiltros {
  q: string
  area: string | null
  clase: string
  familia: RengFamilia | null
  forma: string | null
  via: RengVia | null
  mercado: RengMercado | null
  conCurva: boolean
}

export const RENG_FILTROS_VACIOS: RengFiltros = { q: '', area: null, clase: '', familia: null, forma: null, via: null, mercado: null, conCurva: false }

export type RengFaceta = 'familia' | 'forma' | 'via' | 'mercado' | 'conCurva'

export interface RengResultadoActivo {
  activo: RengIndiceActivo
  coincidentes: RengIndicePresentacion[]
}

export interface RengResultado {
  activos: RengResultadoActivo[]
  totalActivos: number
  totalPresentaciones: number
  presentacionesCoincidentes: number
  completas: number
}

const rengTextosActivo = (rengA: RengIndiceActivo): string[] => [rengA.nombre, ...rengA.sinonimos, rengA.clase, rengA.area, ...rengA.presentaciones.flatMap((rengP) => [rengP.producto, rengP.titular])]

function rengCumplePresentacion(rengP: RengIndicePresentacion, rengF: RengFiltros, rengSaltar?: RengFaceta): boolean {
  if (rengSaltar !== 'familia' && rengF.familia && rengP.familia !== rengF.familia) return false
  if (rengSaltar !== 'forma' && rengF.forma && rengP.formaNormalizada !== rengF.forma) return false
  if (rengSaltar !== 'via' && rengF.via && !rengP.vias.includes(rengF.via)) return false
  if (rengSaltar !== 'mercado' && rengF.mercado && rengP.mercado !== rengF.mercado) return false
  if (rengSaltar !== 'conCurva' && rengF.conCurva && !rengP.curva) return false
  return true
}

function rengCumpleActivo(rengA: RengIndiceActivo, rengF: RengFiltros): boolean {
  if (rengF.area && rengA.area !== rengF.area) return false
  if (rengF.clase.trim() && !rengNormalizarNombre(rengA.clase).includes(rengNormalizarNombre(rengF.clase.trim()))) return false
  return rengCoincideBusqueda(rengTextosActivo(rengA), rengF.q)
}

export function rengFiltrarIndice(rengI: RengIndiceCatalogo, rengF: RengFiltros): RengResultado {
  const rengActivos: RengResultadoActivo[] = []
  for (const rengA of rengI.activos) {
    if (!rengCumpleActivo(rengA, rengF)) continue
    const rengCoincidentes = rengA.presentaciones.filter((rengP) => rengCumplePresentacion(rengP, rengF))
    if (rengCoincidentes.length) rengActivos.push({ activo: rengA, coincidentes: rengCoincidentes })
  }
  return {
    activos: rengActivos,
    totalActivos: rengI.activos.length,
    totalPresentaciones: rengI.activos.reduce((rengN, rengA) => rengN + rengA.presentaciones.length, 0),
    presentacionesCoincidentes: rengActivos.reduce((rengN, rengR) => rengN + rengR.coincidentes.length, 0),
    completas: rengActivos.filter((rengR) => rengR.activo.estado === 'completa').length
  }
}

export function rengConteoFaceta(rengI: RengIndiceCatalogo, rengF: RengFiltros, rengFaceta: Exclude<RengFaceta, 'conCurva'>): Map<string, number> {
  const rengCuenta = new Map<string, number>()
  for (const rengA of rengI.activos) {
    if (!rengCumpleActivo(rengA, rengF)) continue
    for (const rengP of rengA.presentaciones) {
      if (!rengCumplePresentacion(rengP, rengF, rengFaceta)) continue
      const rengClaves = rengFaceta === 'familia' ? [rengP.familia] : rengFaceta === 'forma' ? [rengP.formaNormalizada] : rengFaceta === 'via' ? rengP.vias : [rengP.mercado]
      for (const rengK of rengClaves) rengCuenta.set(rengK, (rengCuenta.get(rengK) ?? 0) + 1)
    }
  }
  return rengCuenta
}

export function rengOpcionesGlobales(rengI: RengIndiceCatalogo): { areas: string[]; clases: string[]; familias: RengFamilia[]; formas: string[]; vias: RengVia[]; mercados: RengMercado[]; hayCurvas: boolean } {
  const rengPres = rengI.activos.flatMap((rengA) => rengA.presentaciones)
  const rengUnicos = <T extends string>(rengXs: T[]): T[] => [...new Set(rengXs)].sort((rengA, rengB) => rengA.localeCompare(rengB, 'es'))
  return {
    areas: rengUnicos(rengI.activos.map((rengA) => rengA.area)),
    clases: rengUnicos(rengI.activos.map((rengA) => rengA.clase)),
    familias: rengUnicos(rengPres.map((rengP) => rengP.familia)),
    formas: rengUnicos(rengPres.map((rengP) => rengP.formaNormalizada)),
    vias: rengUnicos(rengPres.flatMap((rengP) => rengP.vias)),
    mercados: rengUnicos(rengPres.map((rengP) => rengP.mercado)),
    hayCurvas: rengPres.some((rengP) => rengP.curva)
  }
}

const RENG_NOMBRE_FILTRO: Record<keyof RengFiltros, string> = { q: 'la búsqueda', area: 'el área', clase: 'la clase', familia: 'el tipo', forma: 'la forma', via: 'la vía', mercado: 'el mercado', conCurva: '«con curva publicada»' }

export function rengFiltrosActivos(rengF: RengFiltros): Array<keyof RengFiltros> {
  return (Object.keys(RENG_FILTROS_VACIOS) as Array<keyof RengFiltros>).filter((rengK) => (rengK === 'q' || rengK === 'clase' ? rengF[rengK].trim() !== '' : rengF[rengK] !== RENG_FILTROS_VACIOS[rengK]))
}

export function rengExplicarSinResultados(rengI: RengIndiceCatalogo, rengF: RengFiltros): string {
  const rengActivos = rengFiltrosActivos(rengF)
  if (!rengActivos.length) return 'El catálogo está vacío.'
  const rengLiberan = rengActivos.filter((rengK) => rengFiltrarIndice(rengI, { ...rengF, [rengK]: RENG_FILTROS_VACIOS[rengK] }).activos.length > 0)
  if (rengActivos.length === 1) return `Nada coincide con ${RENG_NOMBRE_FILTRO[rengActivos[0]!]}.`
  if (rengLiberan.length) return `Ninguna presentación cumple todos los filtros a la vez. Quitar ${rengLiberan.map((rengK) => RENG_NOMBRE_FILTRO[rengK]).join(' o ')} devuelve resultados.`
  return 'Ninguna presentación cumple todos los filtros a la vez, ni siquiera quitando uno solo.'
}
