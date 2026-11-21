import { RENG_FUENTES_GENERALES } from './generales'
import { RENG_CURVAS, RENG_FUENTES_CURVAS } from './curvas'
import { rengCoincideBusqueda, rengFusionarExtension, rengReferenciasCurva, rengUnidadReconocida } from './fichas'
import type { RengCurvaEstudio, RengExtensionFicha, RengFichaFarmaco, RengFuente, RengPresentacion } from './modelo'

export { RENG_CURVAS, rengCurvasDePresentacion } from './curvas'
export { rengDibujoEtapa, rengEtapasDe, rengMallasDeDestinos, rengProblemasFicha, rengReaccionesDe, rengReferencias, rengReferenciasCurva } from './fichas'

const rengModulos = import.meta.glob<{ default: RengFichaFarmaco }>('./catalogo/*.ts', { eager: true })

const rengExtensiones = import.meta.glob<{ default: RengExtensionFicha }>('./presentaciones/*.ts', { eager: true })
export const RENG_EXTENSIONES: RengExtensionFicha[] = Object.values(rengExtensiones).map((rengM) => rengM.default)

export const RENG_CATALOGO: RengFichaFarmaco[] = Object.values(rengModulos)
  .map((rengM) => rengFusionarExtension(rengM.default, RENG_EXTENSIONES.find((rengX) => rengX.activoId === rengM.default.activo.id)))
  .sort((rengA, rengB) => rengA.activo.nombre.localeCompare(rengB.activo.nombre, 'es'))

export const rengFicha = (rengActivoId: string): RengFichaFarmaco | undefined => RENG_CATALOGO.find((rengF) => rengF.activo.id === rengActivoId)

export function rengFichaDePresentacion(rengPresentacionId: string): { ficha: RengFichaFarmaco; presentacion: RengPresentacion } | undefined {
  for (const rengF of RENG_CATALOGO) {
    const rengP = rengF.presentaciones.find((rengX) => rengX.id === rengPresentacionId)
    if (rengP) return { ficha: rengF, presentacion: rengP }
  }
  return undefined
}

export function rengTodasLasFuentes(): RengFuente[] {
  const rengM = new Map<string, RengFuente>()
  for (const rengF of [...RENG_CATALOGO.flatMap((rengX) => rengX.fuentes), ...RENG_FUENTES_GENERALES, ...RENG_FUENTES_CURVAS]) if (!rengM.has(rengF.id)) rengM.set(rengF.id, rengF)
  return [...rengM.values()]
}
const RENG_INDICE_FUENTES = new Map(rengTodasLasFuentes().map((rengF) => [rengF.id, rengF]))
export const rengFuente = (rengId: string): RengFuente | undefined => RENG_INDICE_FUENTES.get(rengId)

export const rengAreas = (): string[] => [...new Set(RENG_CATALOGO.map((rengF) => rengF.activo.area))].sort((rengA, rengB) => rengA.localeCompare(rengB, 'es'))

export function rengBuscarFichas(rengQ: string, rengArea: string | null = null): RengFichaFarmaco[] {
  return RENG_CATALOGO.filter((rengF) => {
    if (rengArea && rengF.activo.area !== rengArea) return false
    return rengCoincideBusqueda([rengF.activo.nombre, ...rengF.activo.sinonimos, rengF.activo.clase, rengF.activo.area, ...rengF.presentaciones.flatMap((rengP) => [rengP.producto, rengP.titular])], rengQ)
  })
}

export function rengProblemasCurva(rengC: RengCurvaEstudio): string[] {
  const rengP: string[] = []
  const rengF = rengFicha(rengC.activoId)
  if (!rengF) return [`${rengC.id}: activo desconocido ${rengC.activoId}`]
  for (const rengId of rengC.presentaciones) if (!rengF.presentaciones.some((rengX) => rengX.id === rengId)) rengP.push(`${rengC.id}: presentación desconocida ${rengId}`)
  if (!rengC.presentaciones.length) rengP.push(`${rengC.id}: sin presentación`)
  if (!RENG_FUENTES_CURVAS.some((rengX) => rengX.id === rengC.fuente && rengX.tipo === 'estudio')) rengP.push(`${rengC.id}: la fuente ${rengC.fuente} no es un estudio declarado`)
  for (const { donde: rengDonde, ref: rengRef } of rengReferenciasCurva(rengC)) {
    if (rengRef.f !== rengC.fuente) rengP.push(`${rengDonde}: cita de otra fuente (${rengRef.f})`)
    if (rengRef.cita.trim().length < 12 || rengRef.cita.length > 260) rengP.push(`${rengDonde}: longitud de cita no válida`)
    if (!rengRef.sec.trim()) rengP.push(`${rengDonde}: falta la sección`)
  }
  if (rengC.tipo === 'serie') {
    if (!rengC.series.some((rengS) => rengS.id === rengC.principal)) rengP.push(`${rengC.id}: la serie principal no existe`)
    for (const rengS of rengC.series) {
      if (rengS.puntos.length < 2) rengP.push(`${rengS.id}: una serie observada necesita al menos dos tiempos`)
      rengS.puntos.forEach((rengX, rengI) => {
        if (!(Number.isFinite(rengX.t) && rengX.t >= 0 && Number.isFinite(rengX.c) && rengX.c >= 0)) rengP.push(`${rengS.id}[${rengI}]: punto no válido`)
        if (rengI > 0 && rengX.t <= rengS.puntos[rengI - 1]!.t) rengP.push(`${rengS.id}[${rengI}]: tiempos no crecientes`)
        if (rengX.intervalo && !(rengX.intervalo[0] <= rengX.c && rengX.c <= rengX.intervalo[1])) rengP.push(`${rengS.id}[${rengI}]: el valor no está dentro de su intervalo`)
      })
    }
  }
  if (rengC.tipo === 'modelo' && !rengC.modelo) rengP.push(`${rengC.id}: un modelo publicado necesita estructura y parámetros`)
  for (const rengX of rengC.comparables) {
    const rengA = rengC.series.find((rengS) => rengS.id === rengX.a)
    const rengB = rengC.series.find((rengS) => rengS.id === rengX.b)
    if (!rengA || !rengB) rengP.push(`${rengC.id}: comparación con una serie desconocida`)
    else if (rengA.analito !== rengB.analito) rengP.push(`${rengC.id}: compara analitos distintos (${rengA.analito} / ${rengB.analito})`)
  }
  for (const rengX of rengC.resultados) if (!rengUnidadReconocida(rengX.unidad)) rengP.push(`${rengC.id}: unidad no reconocida «${rengX.unidad}»`)
  if (!rengC.limites.length) rengP.push(`${rengC.id}: faltan los límites de aplicación`)
  return rengP
}
