import { describe, expect, it } from 'vitest'
import { RENG_CASOS, RENG_CATEGORIAS_CASOS, RENG_FUENTES, type RengCategoria } from '../../src/renderer/modules/medicuerpo/datos/casos'
import { rengAnalizarFormula } from '../../src/renderer/modules/medicuerpo/nucleo/formula'
import { rengFragmentoDe } from '../../src/renderer/modules/medicuerpo/nucleo/fragmentoSustancia'
import { rengInterpretarSustancia } from '../../src/renderer/modules/medicuerpo/nucleo/sustancia'

const rengClaveComposicion = (rengFormula: string): string =>
  [...rengAnalizarFormula(rengFormula.replace(/^\[|\]$/g, '')).atomos.entries()]
    .sort(([rengA], [rengB]) => rengA.localeCompare(rengB))
    .map(([rengEl, rengN]) => `${rengEl}:${rengN}`)
    .join(',')

function rengBalance(rengLado: Array<{ coef: number; formula: string }>): { atomos: Map<string, number>; carga: number } {
  const rengAtomos = new Map<string, number>()
  let rengCarga = 0
  for (const rengX of rengLado) {
    const rengF = rengAnalizarFormula(rengX.formula)
    for (const [rengEl, rengN] of rengF.atomos) rengAtomos.set(rengEl, (rengAtomos.get(rengEl) ?? 0) + rengN * rengX.coef)
    rengCarga += rengF.carga * rengX.coef
  }
  return { atomos: rengAtomos, carga: rengCarga }
}

const rengMcd = (rengA: number, rengB: number): number => (rengB === 0 ? rengA : rengMcd(rengB, rengA % rengB))

describe('datos de los casos del cuerpo', () => {
  it('solo hay casos del cuerpo, con id único', () => {
    const rengIds = RENG_CASOS.map((rengC) => rengC.id)
    expect(new Set(rengIds).size).toBe(rengIds.length)
    for (const rengCat of Object.keys(RENG_CATEGORIAS_CASOS) as RengCategoria[]) expect(RENG_CASOS.filter((rengC) => rengC.categoria === rengCat).length, rengCat).toBeGreaterThanOrEqual(2)
    expect(RENG_CASOS.every((rengC) => rengC.categoria === 'cuerpo')).toBe(true)
    expect(RENG_CASOS.length).toBe(5)
  })
  it('cada caso tiene a lo sumo 3 ideas, límites declarados y fuentes que existen', () => {
    const rengIds = new Set(RENG_FUENTES.map((rengF) => rengF.id))
    for (const rengC of RENG_CASOS) {
      expect(rengC.ideas.length, rengC.id).toBeGreaterThan(0)
      expect(rengC.ideas.length, rengC.id).toBeLessThanOrEqual(3)
      expect(rengC.limites.length, rengC.id).toBeGreaterThan(0)
      const rengUsadas = [...rengC.ideas, ...rengC.detalles, ...rengC.ecuaciones, ...(rengC.cronologia ?? []), ...(rengC.datos ?? [])].map((rengX) => rengX.fuente)
      for (const rengF of rengUsadas) if (rengF) expect(rengIds.has(rengF), `${rengC.id}: ${rengF}`).toBe(true)
    }
    for (const rengF of RENG_FUENTES) {
      expect(['abierta', 'resumen']).toContain(rengF.acceso)
      expect(rengF.url, rengF.id).toMatch(/^https:\/\//)
      expect(rengF.consultada, rengF.id).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
  it('cada fuente del registro se usa en algún caso', () => {
    const rengUsadas = new Set(RENG_CASOS.flatMap((rengC) => [...rengC.ideas, ...rengC.detalles, ...rengC.ecuaciones, ...(rengC.cronologia ?? []), ...(rengC.datos ?? [])].map((rengX) => rengX.fuente)))
    for (const rengF of RENG_FUENTES) expect(rengUsadas.has(rengF.id), rengF.id).toBe(true)
  })
})

describe('las sustancias de los casos', () => {
  const rengTodas = RENG_CASOS.flatMap((rengC) => rengC.componentes.map((rengK) => ({ caso: rengC.id, ...rengK })))
  it.each(rengTodas.filter((rengK) => rengK.entrada))('«%s»: se interpreta y su composición es la declarada', (rengK) => {
    const rengR = rengInterpretarSustancia(rengK.entrada!)
    expect(rengR.tipo, `${rengK.caso}/${rengK.nombre}`).toBe('ok')
    if (rengR.tipo !== 'ok') return
    expect(rengClaveComposicion(rengR.sustancia.formula), `${rengK.caso}/${rengK.nombre}: ${rengR.sustancia.formula} ≠ ${rengK.formula}`).toBe(rengClaveComposicion(rengK.formula))
  })
  it.each(rengTodas.filter((rengK) => rengK.entrada))('«%s»: se puede poner en la mesa', (rengK) => {
    const rengR = rengInterpretarSustancia(rengK.entrada!)
    if (rengR.tipo !== 'ok') throw new Error('no interpretable')
    const rengF = rengFragmentoDe(rengR.sustancia)
    expect(rengF.ok, `${rengK.caso}/${rengK.nombre}: ${'motivo' in rengF ? rengF.motivo : ''}`).toBe(true)
  })
})

describe('ecuaciones de los casos del cuerpo', () => {
  const rengEqs = RENG_CASOS.flatMap((rengC) => rengC.ecuaciones.map((rengE) => ({ caso: rengC.id, ...rengE })))
  it('hay ecuaciones que comprobar', () => {
    expect(rengEqs.length).toBeGreaterThan(0)
  })
  it.each(rengEqs)('«$nombre» conserva átomos y carga con coeficientes mínimos', (rengE) => {
    const rengR = rengBalance(rengE.reactivos)
    const rengP = rengBalance(rengE.productos)
    expect([...rengR.atomos.entries()].sort()).toEqual([...rengP.atomos.entries()].sort())
    expect(rengR.carga).toBe(rengP.carga)
    const rengCoefs = [...rengE.reactivos, ...rengE.productos].map((rengX) => rengX.coef)
    expect(rengCoefs.reduce(rengMcd)).toBe(1)
  })
})
