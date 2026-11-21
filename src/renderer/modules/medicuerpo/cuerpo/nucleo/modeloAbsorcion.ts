export interface RengParametrosModelo {
  ka: number
  ke: number
}

export interface RengFracciones {
  t: number
  pendiente: number
  central: number
  retirada: number
}

export const RENG_LIMITES_MODELO = { kMin: 0, kMax: 10, tMax: 50 } as const

export class RengErrorModelo extends Error {}

function rengValidar({ ka: rengKa, ke: rengKe }: RengParametrosModelo, rengT: number): void {
  if (!Number.isFinite(rengKa) || rengKa < 0) throw new RengErrorModelo('La constante de absorción debe ser un número ≥ 0.')
  if (!Number.isFinite(rengKe) || rengKe < 0) throw new RengErrorModelo('La constante de eliminación debe ser un número ≥ 0.')
  if (!Number.isFinite(rengT) || rengT < 0) throw new RengErrorModelo('El tiempo debe ser un número ≥ 0.')
}

export function rengFracciones(rengP: RengParametrosModelo, rengT: number): RengFracciones {
  rengValidar(rengP, rengT)
  const { ka: rengKa, ke: rengKe } = rengP
  const rengPendiente = Math.exp(-rengKa * rengT)
  const rengA = Math.min(rengKa, rengKe)
  const rengB = Math.max(rengKa, rengKe)
  const rengD = rengB - rengA
  const rengFactor = rengD === 0 ? rengT : -Math.expm1(-rengD * rengT) / rengD
  const rengCentral = Math.min(1, Math.max(0, rengKa * Math.exp(-rengA * rengT) * rengFactor))
  const rengRetirada = Math.max(0, 1 - rengPendiente - rengCentral)
  return { t: rengT, pendiente: rengPendiente, central: rengCentral, retirada: rengRetirada }
}

export function rengCurvas(rengP: RengParametrosModelo, rengTMax: number, rengN = 200): RengFracciones[] {
  if (!Number.isFinite(rengTMax) || rengTMax <= 0) throw new RengErrorModelo('La duración debe ser un número > 0.')
  if (!Number.isInteger(rengN) || rengN < 1) throw new RengErrorModelo('Hacen falta al menos dos puntos.')
  return Array.from({ length: rengN + 1 }, (_, rengI) => rengFracciones(rengP, (rengTMax * rengI) / rengN))
}

export function rengTiempoMaximoCentral({ ka: rengKa, ke: rengKe }: RengParametrosModelo): number | null {
  if (!(rengKa > 0) || !(rengKe > 0)) return null
  return rengKa === rengKe ? 1 / rengKa : Math.log(rengKa / rengKe) / (rengKa - rengKe)
}
