import { describe, expect, it } from 'vitest'
import { rengCurvas, RengErrorModelo, rengFracciones, RENG_LIMITES_MODELO, rengTiempoMaximoCentral } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/modeloAbsorcion'

function rengRk4(rengKa: number, rengKe: number, rengT: number, rengPasos = 20000): [number, number, number] {
  let rengY = [1, 0, 0]
  const rengH = rengT / rengPasos
  const rengF = (rengS: number[]): number[] => [-rengKa * rengS[0]!, rengKa * rengS[0]! - rengKe * rengS[1]!, rengKe * rengS[1]!]
  for (let rengI = 0; rengI < rengPasos; rengI++) {
    const rengK1 = rengF(rengY)
    const rengK2 = rengF(rengY.map((rengV, rengJ) => rengV + (rengH / 2) * rengK1[rengJ]!))
    const rengK3 = rengF(rengY.map((rengV, rengJ) => rengV + (rengH / 2) * rengK2[rengJ]!))
    const rengK4 = rengF(rengY.map((rengV, rengJ) => rengV + rengH * rengK3[rengJ]!))
    rengY = rengY.map((rengV, rengJ) => rengV + (rengH / 6) * (rengK1[rengJ]! + 2 * rengK2[rengJ]! + 2 * rengK3[rengJ]! + rengK4[rengJ]!))
  }
  return rengY as [number, number, number]
}

const RENG_PARES: Array<[number, number]> = [
  [1.5, 0.2],
  [0.2, 1.5],
  [1, 1],
  [0.7, 0.7000001],
  [3, 0],
  [0, 0.5],
  [0, 0],
  [10, 10],
  [10, 0.01]
]

describe('modelo de absorción y eliminación', () => {
  it('las tres fracciones suman 1 y son finitas y no negativas en toda la curva (también con constantes extremas)', () => {
    for (const [rengKa, rengKe] of RENG_PARES)
      for (const rengP of rengCurvas({ ka: rengKa, ke: rengKe }, RENG_LIMITES_MODELO.tMax, 500)) {
        for (const rengV of [rengP.pendiente, rengP.central, rengP.retirada]) {
          expect(Number.isFinite(rengV), `${rengKa},${rengKe},t=${rengP.t}`).toBe(true)
          expect(rengV, `${rengKa},${rengKe},t=${rengP.t}`).toBeGreaterThanOrEqual(0)
          expect(rengV).toBeLessThanOrEqual(1)
        }
        expect(Math.abs(rengP.pendiente + rengP.central + rengP.retirada - 1), `${rengKa},${rengKe},t=${rengP.t}`).toBeLessThan(1e-12)
      }
  })
  it('coincide con la integración numérica RK4 de las mismas ecuaciones', () => {
    for (const [rengKa, rengKe] of RENG_PARES)
      for (const rengT of [0.3, 2, 7.5]) {
        const [RENG_P, RENG_C, RENG_R] = rengRk4(rengKa, rengKe, rengT)
        const rengF = rengFracciones({ ka: rengKa, ke: rengKe }, rengT)
        expect(rengF.pendiente, `${rengKa},${rengKe},${rengT}`).toBeCloseTo(RENG_P, 9)
        expect(rengF.central, `${rengKa},${rengKe},${rengT}`).toBeCloseTo(RENG_C, 9)
        expect(rengF.retirada, `${rengKa},${rengKe},${rengT}`).toBeCloseTo(RENG_R, 9)
      }
  })
  it('con ka = ke usa el límite k·t·e^(−k·t) y es continuo con ka ≈ ke', () => {
    for (const rengK of [0.05, 1, 4]) {
      for (const rengT of [0.1, 1, 5]) {
        const rengIgual = rengFracciones({ ka: rengK, ke: rengK }, rengT).central
        expect(rengIgual).toBeCloseTo(rengK * rengT * Math.exp(-rengK * rengT), 14)
        expect(rengFracciones({ ka: rengK * (1 + 1e-9), ke: rengK }, rengT).central).toBeCloseTo(rengIgual, 8)
        expect(rengFracciones({ ka: rengK, ke: rengK * (1 + 1e-9) }, rengT).central).toBeCloseTo(rengIgual, 8)
      }
    }
    expect(rengTiempoMaximoCentral({ ka: 2, ke: 2 })).toBeCloseTo(0.5, 14)
  })
  it('el máximo de la fracción central está en ln(ka/ke)/(ka − ke)', () => {
    const rengP = { ka: 1.2, ke: 0.3 }
    const rengTm = rengTiempoMaximoCentral(rengP)!
    const rengC = (rengT: number): number => rengFracciones(rengP, rengT).central
    expect(rengC(rengTm)).toBeGreaterThan(rengC(rengTm - 0.01))
    expect(rengC(rengTm)).toBeGreaterThan(rengC(rengTm + 0.01))
    expect(rengTiempoMaximoCentral({ ka: 1, ke: 0 })).toBeNull()
  })
  it('cambiar las velocidades cambia las curvas (más absorción: el pico llega antes y es más alto)', () => {
    const rengLenta = rengCurvas({ ka: 0.5, ke: 0.2 }, 20, 100)
    const rengRapida = rengCurvas({ ka: 2, ke: 0.2 }, 20, 100)
    const rengPico = (rengC: typeof rengLenta) => rengC.reduce((rengM, rengP) => (rengP.central > rengM.central ? rengP : rengM))
    expect(rengPico(rengRapida).t).toBeLessThan(rengPico(rengLenta).t)
    expect(rengPico(rengRapida).central).toBeGreaterThan(rengPico(rengLenta).central)
    expect(rengCurvas({ ka: 2, ke: 1 }, 20, 100).map((rengP) => rengP.retirada)).not.toEqual(rengRapida.map((rengP) => rengP.retirada))
  })
  it('casos límite: sin absorción nada pasa a la sangre; sin eliminación nada se retira', () => {
    expect(rengFracciones({ ka: 0, ke: 1 }, 10)).toEqual({ t: 10, pendiente: 1, central: 0, retirada: 0 })
    const rengSinEliminar = rengFracciones({ ka: 1, ke: 0 }, 10)
    expect(rengSinEliminar.retirada).toBeCloseTo(0, 12)
    expect(rengSinEliminar.central).toBeCloseTo(1 - Math.exp(-10), 12)
  })
  it('rechaza constantes o tiempos no válidos', () => {
    for (const rengP of [{ ka: -1, ke: 1 }, { ka: 1, ke: Number.NaN }, { ka: Infinity, ke: 1 }]) expect(() => rengFracciones(rengP, 1)).toThrow(RengErrorModelo)
    expect(() => rengFracciones({ ka: 1, ke: 1 }, -1)).toThrow(RengErrorModelo)
    expect(() => rengCurvas({ ka: 1, ke: 1 }, 0)).toThrow(RengErrorModelo)
  })
})
