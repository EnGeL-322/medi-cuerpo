import { RENG_LIMITES_MODELO, rengCurvas, rengTiempoMaximoCentral, type RengParametrosModelo } from './modeloAbsorcion'

export type RengNivelAbsorcion = 'basico' | 'normal' | 'avanzado'
export type RengModoAbsorcion = 'inicio' | 'medicamento' | 'ejemplo'
export type RengFraccionVisible = 'pendiente' | 'central' | 'retirada'

export const RENG_NIVELES_ABSORCION: ReadonlyArray<{ id: RengNivelAbsorcion; nombre: string; detalle: string }> = [
  { id: 'basico', nombre: 'Básico', detalle: 'Lo esencial y una sola gráfica' },
  { id: 'normal', nombre: 'Normal', detalle: 'Datos con unidades, fuente y comparación' },
  { id: 'avanzado', nombre: 'Avanzado', detalle: 'Parámetros, ecuaciones, tablas y métodos' }
]

export interface RengAjustesEjemplo extends RengParametrosModelo {
  horizonte: number
}

export const RENG_EJEMPLO_RAPIDO: RengParametrosModelo = { ka: 1.5, ke: 0.3 }
export const RENG_EJEMPLO_LENTO: RengParametrosModelo = { ka: 0.5, ke: 0.3 }
export const RENG_HORIZONTE_INICIAL = 12
export const RENG_HORIZONTE = { min: 2, max: RENG_LIMITES_MODELO.tMax } as const
export const RENG_PASOS_KA: readonly number[] = [0.1, 0.2, 0.35, 0.5, 0.75, 1, 1.5, 2, 3, 5]
export const RENG_K_DESLIZADOR = { min: 0.05, max: 5, paso: 0.05 } as const

export interface RengEstadoAbsorcion {
  nivel: RengNivelAbsorcion
  modo: RengModoAbsorcion
  ejemplo: RengAjustesEjemplo
  comparar: boolean
  serieComparada: string | null
  fracciones: ReadonlySet<RengFraccionVisible>
}

export const rengEstadoInicial = (rengNivel: RengNivelAbsorcion = 'basico', rengHayMedicamento = false): RengEstadoAbsorcion => ({
  nivel: rengNivel,
  modo: rengHayMedicamento ? 'medicamento' : 'inicio',
  ejemplo: { ...RENG_EJEMPLO_RAPIDO, horizonte: RENG_HORIZONTE_INICIAL },
  comparar: false,
  serieComparada: null,
  fracciones: new Set<RengFraccionVisible>(['central'])
})

export const rengEsNivel = (rengX: unknown): rengX is RengNivelAbsorcion => rengX === 'basico' || rengX === 'normal' || rengX === 'avanzado'

export const rengConNivel = (rengE: RengEstadoAbsorcion, rengNivel: RengNivelAbsorcion): RengEstadoAbsorcion => (rengE.nivel === rengNivel ? rengE : { ...rengE, nivel: rengNivel })

export const rengConModo = (rengE: RengEstadoAbsorcion, rengModo: RengModoAbsorcion): RengEstadoAbsorcion => (rengE.modo === rengModo ? rengE : { ...rengE, modo: rengModo, serieComparada: null })

export const rengKValida = (rengK: number): boolean => Number.isFinite(rengK) && rengK >= RENG_LIMITES_MODELO.kMin && rengK <= RENG_LIMITES_MODELO.kMax
export const rengHorizonteValido = (rengT: number): boolean => Number.isFinite(rengT) && rengT >= RENG_HORIZONTE.min && rengT <= RENG_HORIZONTE.max

export function rengAjustar(rengE: RengEstadoAbsorcion, rengCambios: Partial<RengAjustesEjemplo>): RengEstadoAbsorcion {
  const rengSig = { ...rengE.ejemplo }
  if (rengCambios.ka !== undefined && rengKValida(rengCambios.ka)) rengSig.ka = rengCambios.ka
  if (rengCambios.ke !== undefined && rengKValida(rengCambios.ke)) rengSig.ke = rengCambios.ke
  if (rengCambios.horizonte !== undefined && rengHorizonteValido(rengCambios.horizonte)) rengSig.horizonte = rengCambios.horizonte
  if (rengSig.ka === rengE.ejemplo.ka && rengSig.ke === rengE.ejemplo.ke && rengSig.horizonte === rengE.ejemplo.horizonte) return rengE
  return { ...rengE, ejemplo: rengSig }
}

export function rengPasoAbsorcion(rengKa: number, rengSentido: 1 | -1): number {
  if (rengSentido > 0) return RENG_PASOS_KA.find((rengX) => rengX > rengKa + 1e-9) ?? rengKa
  return [...RENG_PASOS_KA].reverse().find((rengX) => rengX < rengKa - 1e-9) ?? rengKa
}

export const rengAbsorcionMasRapida = (rengE: RengEstadoAbsorcion): RengEstadoAbsorcion => rengAjustar(rengE, { ka: rengPasoAbsorcion(rengE.ejemplo.ka, 1) })
export const rengAbsorcionMasLenta = (rengE: RengEstadoAbsorcion): RengEstadoAbsorcion => rengAjustar(rengE, { ka: rengPasoAbsorcion(rengE.ejemplo.ka, -1) })
export const rengPuedeAcelerar = (rengKa: number): boolean => rengPasoAbsorcion(rengKa, 1) !== rengKa
export const rengPuedeFrenar = (rengKa: number): boolean => rengPasoAbsorcion(rengKa, -1) !== rengKa

export function rengUsarEjemplo(rengE: RengEstadoAbsorcion, rengP: RengParametrosModelo): RengEstadoAbsorcion {
  return { ...rengE, modo: 'ejemplo', ejemplo: { ...rengE.ejemplo, ka: rengP.ka, ke: rengP.ke } }
}

export function rengAlternarFraccion(rengE: RengEstadoAbsorcion, rengF: RengFraccionVisible): RengEstadoAbsorcion {
  if (rengF === 'central') return rengE
  const rengSig = new Set(rengE.fracciones)
  if (rengSig.has(rengF)) rengSig.delete(rengF)
  else rengSig.add(rengF)
  return { ...rengE, fracciones: rengSig }
}

export function rengFraccionesVisibles(rengE: RengEstadoAbsorcion): RengFraccionVisible[] {
  if (rengE.nivel !== 'avanzado') return ['central']
  return (['pendiente', 'central', 'retirada'] as const).filter((rengF) => rengE.fracciones.has(rengF))
}

export const rengCompararVisible = (rengE: RengEstadoAbsorcion): boolean => rengE.nivel !== 'basico' && rengE.comparar

export function rengDescribirVelocidad(rengK: number): string {
  if (!(rengK > 0)) return 'nula'
  if (rengK < 0.25) return 'muy lenta'
  if (rengK < 0.6) return 'lenta'
  if (rengK < 1.2) return 'moderada'
  if (rengK < 2.5) return 'rápida'
  return 'muy rápida'
}

export function rengNombreEjemplo(rengP: RengParametrosModelo): string {
  if (rengP.ka === RENG_EJEMPLO_RAPIDO.ka && rengP.ke === RENG_EJEMPLO_RAPIDO.ke) return 'Ejemplo de absorción rápida'
  if (rengP.ka === RENG_EJEMPLO_LENTO.ka && rengP.ke === RENG_EJEMPLO_LENTO.ke) return 'Ejemplo de absorción lenta'
  return `Ejemplo con absorción ${rengDescribirVelocidad(rengP.ka)} y eliminación ${rengDescribirVelocidad(rengP.ke)}`
}

export function rengEjemploDeComparacion(rengP: RengParametrosModelo): { nombre: string; parametros: RengParametrosModelo } {
  const rengEsLento = rengP.ka === RENG_EJEMPLO_LENTO.ka && rengP.ke === RENG_EJEMPLO_LENTO.ke
  return rengEsLento ? { nombre: 'Ejemplo de absorción rápida', parametros: RENG_EJEMPLO_RAPIDO } : { nombre: 'Ejemplo de absorción lenta', parametros: RENG_EJEMPLO_LENTO }
}

export interface RengPico {
  t: number
  fraccion: number
  analitico: number | null
  dentro: boolean
}

export function rengPicoEjemplo(rengP: RengParametrosModelo, rengHorizonte: number, rengN = 400): RengPico {
  const rengC = rengCurvas(rengP, rengHorizonte, rengN)
  const rengM = rengC.reduce((rengA, rengB) => (rengB.central > rengA.central ? rengB : rengA))
  const rengT = rengTiempoMaximoCentral(rengP)
  return { t: rengM.t, fraccion: rengM.central, analitico: rengT, dentro: rengT !== null && rengT <= rengHorizonte }
}

const rengFmt = (rengX: number): string => String(Number(rengX.toPrecision(2))).replace('.', ',')

export function rengFrasePico(rengP: RengParametrosModelo, rengHorizonte: number): string {
  const rengPico = rengPicoEjemplo(rengP, rengHorizonte)
  if (!(rengP.ka > 0)) return 'Sin absorción, nada llega a la circulación: no hay pico.'
  if (!(rengP.ke > 0)) return 'Sin eliminación, la cantidad en circulación solo sube hasta quedarse estable: no hay pico.'
  if (!rengPico.dentro) return 'El pico queda fuera del tiempo que muestra la gráfica: amplía el horizonte para verlo.'
  return `El pico es el momento en que entra tanto como sale: aquí llega en t ≈ ${rengFmt(rengPico.analitico ?? rengPico.t)}, con un ${Math.round(rengPico.fraccion * 100)} % de la dosis en circulación.`
}

export function rengTablaValores(rengP: RengParametrosModelo, rengHorizonte: number, rengFilas = 12): Array<{ t: number; pendiente: number; central: number; retirada: number }> {
  return rengCurvas(rengP, rengHorizonte, rengFilas)
}

const RENG_CLAVE_NIVEL = 'medicuerpo.absorcion.nivel'

export function rengLeerNivelAbsorcion(rengAlmacen: Pick<Storage, 'getItem'> | null): RengNivelAbsorcion {
  try {
    const rengV = rengAlmacen?.getItem(RENG_CLAVE_NIVEL)
    return rengEsNivel(rengV) ? rengV : 'basico'
  } catch {
    return 'basico'
  }
}

export function rengGuardarNivelAbsorcion(rengAlmacen: Pick<Storage, 'setItem'> | null, rengN: RengNivelAbsorcion): void {
  try {
    rengAlmacen?.setItem(RENG_CLAVE_NIVEL, rengN)
  } catch {
    return
  }
}
