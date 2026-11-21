import { rengRecorridoDe } from '../datos/fichas'
import type { RengCifra, RengCurvaEstudio, RengFichaFarmaco, RengMagnitud, RengModeloPublicado, RengPresentacion, RengSerieEstudio } from '../datos/modelo'

export type RengNivelEvidencia = 'serie' | 'modelo' | 'puntuales' | 'insuficiente'

export const RENG_MAGNITUDES_PUNTUALES: readonly RengMagnitud[] = ['tmax', 'cmax', 'semivida', 'biodisponibilidad', 'auc']

export interface RengEvidenciaAbsorcion {
  nivel: RengNivelEvidencia
  curva: RengCurvaEstudio | null
  puntuales: RengCifra[]
  otras: RengCifra[]
  presentacionDatos: RengPresentacion
  deOtraPresentacion: boolean
  resumen: string
}

export const RENG_TITULO_EVIDENCIA: Record<RengNivelEvidencia, string> = {
  serie: 'Serie observada en un estudio',
  modelo: 'Simulación de un modelo publicado',
  puntuales: 'Resultados puntuales de la fuente',
  insuficiente: 'Sin datos cuantitativos suficientes'
}

export function rengEvidenciaAbsorcion(rengF: RengFichaFarmaco, rengP: RengPresentacion, rengCurvas: readonly RengCurvaEstudio[]): RengEvidenciaAbsorcion {
  const rengDatos = rengP.recorridoDe ? (rengF.presentaciones.find((rengX) => rengX.id === rengP.recorridoDe) ?? rengP) : rengP
  const rengPropias = rengCurvas.filter((rengC) => rengC.activoId === rengF.activo.id && rengC.presentaciones.includes(rengP.id))
  const rengCurva = rengPropias.find((rengC) => rengC.tipo === 'serie') ?? rengPropias.find((rengC) => rengC.tipo === 'modelo' && !!rengC.modelo) ?? null
  const rengPuntuales = rengF.cifras.filter((rengC) => RENG_MAGNITUDES_PUNTUALES.includes(rengC.magnitud))
  const rengOtras = rengF.cifras.filter((rengC) => !RENG_MAGNITUDES_PUNTUALES.includes(rengC.magnitud))
  const rengNivel: RengNivelEvidencia = rengCurva ? rengCurva.tipo : rengPuntuales.length ? 'puntuales' : 'insuficiente'
  return {
    nivel: rengNivel,
    curva: rengCurva,
    puntuales: rengPuntuales,
    otras: rengOtras,
    presentacionDatos: rengDatos,
    deOtraPresentacion: rengDatos.id !== rengP.id,
    resumen: rengRecorridoDe(rengF, rengP).absorcion.ocurre
  }
}

export function rengComparacion(rengC: RengCurvaEstudio, rengA: string, rengB: string): { ok: true; motivo: string } | { ok: false; motivo: string } {
  const rengX = rengC.series.find((rengS) => rengS.id === rengA)
  const rengY = rengC.series.find((rengS) => rengS.id === rengB)
  if (!rengX || !rengY) return { ok: false, motivo: 'Una de las series no existe en este estudio.' }
  if (rengX.analito !== rengY.analito) return { ok: false, motivo: 'Miden sustancias distintas (fármaco original y metabolito): no se comparan en la misma gráfica.' }
  const rengDeclarada = rengC.comparables.find((rengK) => (rengK.a === rengA && rengK.b === rengB) || (rengK.a === rengB && rengK.b === rengA))
  if (!rengDeclarada) return { ok: false, motivo: 'El estudio no permite una comparación interpretable entre estas series.' }
  return { ok: true, motivo: rengDeclarada.motivo }
}

export function rengComparablesCon(rengC: RengCurvaEstudio, rengSerieId: string): RengSerieEstudio[] {
  return rengC.series.filter((rengS) => rengS.id !== rengSerieId && rengComparacion(rengC, rengSerieId, rengS.id).ok)
}

export function rengSeriesPorAnalito(rengC: RengCurvaEstudio): Array<{ analito: string; rol: RengSerieEstudio['rol']; series: RengSerieEstudio[] }> {
  const rengOut: Array<{ analito: string; rol: RengSerieEstudio['rol']; series: RengSerieEstudio[] }> = []
  for (const rengS of rengC.series) {
    const rengG = rengOut.find((rengX) => rengX.analito === rengS.analito)
    if (rengG) rengG.series.push(rengS)
    else rengOut.push({ analito: rengS.analito, rol: rengS.rol, series: [rengS] })
  }
  return rengOut
}

export function rengMaximoObservado(rengS: RengSerieEstudio): { t: number; c: number } | null {
  if (!rengS.puntos.length) return null
  return rengS.puntos.reduce((rengM, rengX) => (rengX.c > rengM.c ? rengX : rengM))
}

export function rengConcentracionModelo(rengM: RengModeloPublicado, rengT: number): number {
  const { ka: rengKa, cl: rengCl, v: rengV, f: rengFb = 1, tlag: rengLag = 0 } = rengM.parametros
  if (![rengKa, rengCl, rengV, rengFb, rengLag, rengT].every(Number.isFinite) || rengKa <= 0 || rengCl <= 0 || rengV <= 0 || rengT < 0) return Number.NaN
  const rengTe = rengT - rengLag
  if (rengTe <= 0) return 0
  const rengKe = rengCl / rengV
  const rengD = rengFb * rengM.dosis.valor
  if (Math.abs(rengKa - rengKe) < 1e-12) return (rengD / rengV) * rengKa * rengTe * Math.exp(-rengKa * rengTe)
  return ((rengD * rengKa) / (rengV * (rengKa - rengKe))) * (Math.exp(-rengKe * rengTe) - Math.exp(-rengKa * rengTe))
}

export function rengCurvaModelo(rengM: RengModeloPublicado, rengTMax: number, rengN = 200): Array<[number, number]> {
  if (!(rengTMax > 0) || !Number.isInteger(rengN) || rengN < 1) return []
  return Array.from({ length: rengN + 1 }, (_, rengI) => {
    const rengT = (rengTMax * rengI) / rengN
    return [rengT, rengConcentracionModelo(rengM, rengT)] as [number, number]
  })
}
