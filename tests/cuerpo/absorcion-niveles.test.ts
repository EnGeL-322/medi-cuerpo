import { describe, expect, it } from 'vitest'
import { rengBuscarFichas, RENG_CATALOGO, RENG_CURVAS, rengFicha, rengProblemasCurva } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import type { RengFichaFarmaco, RengModeloPublicado } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/modelo'
import {
  rengAbsorcionMasLenta,
  rengAbsorcionMasRapida,
  rengAjustar,
  rengAlternarFraccion,
  rengCompararVisible,
  rengConModo,
  rengConNivel,
  rengEstadoInicial,
  rengFraccionesVisibles,
  rengFrasePico,
  rengGuardarNivelAbsorcion,
  rengLeerNivelAbsorcion,
  rengNombreEjemplo,
  rengPicoEjemplo,
  rengPuedeAcelerar,
  rengPuedeFrenar,
  rengTablaValores,
  rengUsarEjemplo,
  RENG_EJEMPLO_LENTO,
  RENG_EJEMPLO_RAPIDO,
  RENG_PASOS_KA,
  type RengEstadoAbsorcion
} from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/estadoAbsorcion'
import { rengComparablesCon, rengComparacion, rengConcentracionModelo, rengCurvaModelo, rengEvidenciaAbsorcion } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/evidenciaAbsorcion'

const rengAplicar = (rengE: RengEstadoAbsorcion, ...rengFs: Array<(rengX: RengEstadoAbsorcion) => RengEstadoAbsorcion>): RengEstadoAbsorcion => rengFs.reduce((rengA, rengF) => rengF(rengA), rengE)

describe('niveles del modelo de absorción', () => {
  it('abre en Básico la primera vez y recuerda un nivel válido', () => {
    expect(rengLeerNivelAbsorcion(null)).toBe('basico')
    expect(rengLeerNivelAbsorcion({ getItem: () => null })).toBe('basico')
    expect(rengLeerNivelAbsorcion({ getItem: () => 'experto' })).toBe('basico')
    expect(
      rengLeerNivelAbsorcion({
        getItem: () => {
          throw new Error('bloqueado')
        }
      })
    ).toBe('basico')
    const rengMapa = new Map<string, string>()
    const rengAlmacen = { getItem: (rengK: string) => rengMapa.get(rengK) ?? null, setItem: (rengK: string, rengV: string) => void rengMapa.set(rengK, rengV) }
    rengGuardarNivelAbsorcion(rengAlmacen, 'normal')
    expect(rengLeerNivelAbsorcion(rengAlmacen)).toBe('normal')
    expect(rengEstadoInicial().nivel).toBe('basico')
    expect(rengEstadoInicial().modo).toBe('inicio')
  })

  it('cambiar de nivel conserva el modo, los ajustes válidos del ejemplo y la comparación', () => {
    const rengE = rengAplicar(
      rengEstadoInicial('avanzado'),
      (rengX) => rengConModo(rengX, 'ejemplo'),
      (rengX) => rengAjustar(rengX, { ka: 2.2, ke: 0.7, horizonte: 20 }),
      (rengX) => ({ ...rengX, comparar: true }),
      (rengX) => rengAlternarFraccion(rengX, 'retirada')
    )
    for (const rengN of ['basico', 'normal', 'avanzado'] as const) {
      const rengS = rengConNivel(rengE, rengN)
      expect(rengS.nivel).toBe(rengN)
      expect(rengS.modo).toBe('ejemplo')
      expect(rengS.ejemplo).toEqual({ ka: 2.2, ke: 0.7, horizonte: 20 })
      expect(rengS.comparar).toBe(true)
      expect([...rengS.fracciones].sort()).toEqual(['central', 'retirada'])
    }
    expect(rengConNivel(rengConNivel(rengE, 'basico'), 'avanzado')).toEqual(rengE)
  })

  it('Básico muestra una sola curva; Normal permite la comparación; Avanzado añade fracciones a petición', () => {
    const rengE = rengAplicar(rengEstadoInicial('basico'), (rengX) => ({ ...rengX, comparar: true }), (rengX) => rengAlternarFraccion(rengX, 'pendiente'))
    expect(rengFraccionesVisibles(rengE)).toEqual(['central'])
    expect(rengCompararVisible(rengE)).toBe(false)
    expect(rengCompararVisible(rengConNivel(rengE, 'normal'))).toBe(true)
    expect(rengFraccionesVisibles(rengConNivel(rengE, 'normal'))).toEqual(['central'])
    expect(rengFraccionesVisibles(rengConNivel(rengE, 'avanzado'))).toEqual(['pendiente', 'central'])
    expect(rengAlternarFraccion(rengE, 'central')).toBe(rengE)
  })

  it('rechaza ajustes no válidos y conserva los anteriores', () => {
    const rengE = rengEstadoInicial()
    for (const rengMalo of [{ ka: -1 }, { ka: Number.NaN }, { ke: 11 }, { ke: Infinity }, { horizonte: 0 }, { horizonte: 51 }, { horizonte: Number.NaN }]) expect(rengAjustar(rengE, rengMalo)).toBe(rengE)
    expect(rengAjustar(rengE, { ka: 0, ke: 10, horizonte: 50 }).ejemplo).toEqual({ ka: 0, ke: 10, horizonte: 50 })
  })

  it('«absorción más rápida» y «más lenta» recorren pasos ordenados y se detienen en los extremos', () => {
    let rengE = rengEstadoInicial()
    const rengVistos = [rengE.ejemplo.ka]
    while (rengPuedeAcelerar(rengE.ejemplo.ka)) {
      rengE = rengAbsorcionMasRapida(rengE)
      rengVistos.push(rengE.ejemplo.ka)
    }
    expect(rengE.ejemplo.ka).toBe(RENG_PASOS_KA.at(-1))
    expect(rengAbsorcionMasRapida(rengE)).toBe(rengE)
    expect([...rengVistos].sort((rengA, rengB) => rengA - rengB)).toEqual(rengVistos)
    while (rengPuedeFrenar(rengE.ejemplo.ka)) rengE = rengAbsorcionMasLenta(rengE)
    expect(rengE.ejemplo.ka).toBe(RENG_PASOS_KA[0])
    expect(rengAbsorcionMasLenta(rengE)).toBe(rengE)
    expect(rengAbsorcionMasRapida(rengAjustar(rengEstadoInicial(), { ka: 1.2 })).ejemplo.ka).toBe(1.5)
    expect(rengAbsorcionMasLenta(rengAjustar(rengEstadoInicial(), { ka: 1.2 })).ejemplo.ka).toBe(1)
  })

  it('el ejemplo normalizado: las tres fracciones suman 1, también con kₐ = kₑ y en los extremos', () => {
    for (const [rengKa, rengKe] of [
      [1.5, 0.3],
      [0.5, 0.3],
      [0.8, 0.8],
      [0, 0.4],
      [2, 0],
      [10, 10],
      [0.05, 10]
    ] as const)
      for (const rengF of rengTablaValores({ ka: rengKa, ke: rengKe }, 50, 25)) {
        expect(Math.abs(rengF.pendiente + rengF.central + rengF.retirada - 1), `${rengKa},${rengKe},${rengF.t}`).toBeLessThan(1e-12)
        for (const rengV of [rengF.pendiente, rengF.central, rengF.retirada]) expect(rengV).toBeGreaterThanOrEqual(0)
      }
    const rengPico = rengPicoEjemplo({ ka: 0.8, ke: 0.8 }, 12)
    expect(rengPico.analitico).toBeCloseTo(1 / 0.8, 12)
    expect(rengPico.fraccion).toBeCloseTo(Math.exp(-1), 3)
    expect(rengFrasePico({ ka: 0.8, ke: 0.8 }, 12)).toContain('t ≈ 1,3')
  })

  it('la frase del pico cubre los casos sin pico y el pico fuera de la gráfica', () => {
    expect(rengFrasePico({ ka: 0, ke: 1 }, 12)).toMatch(/no hay pico/)
    expect(rengFrasePico({ ka: 1, ke: 0 }, 12)).toMatch(/no hay pico/)
    expect(rengFrasePico({ ka: 0.1, ke: 0.05 }, 2)).toMatch(/fuera/)
    expect(rengFrasePico(RENG_EJEMPLO_RAPIDO, 12)).toMatch(/entra tanto como sale/)
  })

  it('los ejemplos con nombre y el cambio entre ellos', () => {
    expect(rengNombreEjemplo(RENG_EJEMPLO_RAPIDO)).toBe('Ejemplo de absorción rápida')
    expect(rengNombreEjemplo(RENG_EJEMPLO_LENTO)).toBe('Ejemplo de absorción lenta')
    expect(rengNombreEjemplo({ ka: 3, ke: 0.1 })).toBe('Ejemplo con absorción muy rápida y eliminación muy lenta')
    const rengE = rengUsarEjemplo(rengAjustar(rengEstadoInicial(), { horizonte: 30 }), RENG_EJEMPLO_LENTO)
    expect(rengE.modo).toBe('ejemplo')
    expect(rengE.ejemplo).toEqual({ ...RENG_EJEMPLO_LENTO, horizonte: 30 })
  })
})

describe('evidencia de absorción por presentación', () => {
  it('ticagrelor tiene una serie observada con fármaco original y metabolito por separado', () => {
    const rengF = rengFicha('ticagrelor')!
    const rengEv = rengEvidenciaAbsorcion(rengF, rengF.presentaciones[0]!, RENG_CURVAS)
    expect(rengEv.nivel).toBe('serie')
    const rengC = rengEv.curva!
    expect(rengC.unidades).toEqual({ tiempo: 'h', concentracion: 'ng/mL' })
    expect(new Set(rengC.series.map((rengS) => rengS.rol))).toEqual(new Set(['original', 'metabolito']))
    expect(rengComparacion(rengC, 'ticagrelor-entero', 'ticagrelor-triturado').ok).toBe(true)
    expect(rengComparacion(rengC, 'ticagrelor-entero', 'metabolito-entero')).toEqual({ ok: false, motivo: expect.stringMatching(/sustancias distintas/) })
    expect(rengComparacion(rengC, 'ticagrelor-entero', 'no-existe').ok).toBe(false)
    expect(rengComparablesCon(rengC, 'ticagrelor-entero').map((rengS) => rengS.id)).toEqual(['ticagrelor-triturado'])
    expect(rengC.resultados.filter((rengX) => /metabolito/.test(rengX.analito ?? '')).length).toBeGreaterThan(0)
  })

  it('cada curva de estudio es coherente (presentación, fuente, puntos, comparaciones y límites)', () => {
    expect(RENG_CURVAS.length).toBeGreaterThan(0)
    for (const rengC of RENG_CURVAS) expect(rengProblemasCurva(rengC), rengC.id).toEqual([])
  })

  it('con solo valores puntuales no hay curva; sin cifras de absorción la evidencia es insuficiente', () => {
    const rengPara = rengFicha('paracetamol')!
    const rengEv = rengEvidenciaAbsorcion(rengPara, rengPara.presentaciones[0]!, RENG_CURVAS)
    expect(rengEv.nivel).toBe('puntuales')
    expect(rengEv.curva).toBeNull()
    expect(rengEv.puntuales.map((rengC) => rengC.magnitud)).toEqual(expect.arrayContaining(['tmax', 'semivida']))
    const rengSinCifras: RengFichaFarmaco = { ...rengPara, cifras: rengPara.cifras.filter((rengC) => rengC.magnitud === 'union' && !rengC.presentacion).slice(0, 1) }
    const rengEv2 = rengEvidenciaAbsorcion(rengSinCifras, rengSinCifras.presentaciones[0]!, RENG_CURVAS)
    expect(rengEv2.nivel).toBe('insuficiente')
    expect(rengEv2.otras.length).toBe(1)
    expect(rengEv2.resumen).toBe(rengPara.recorrido.absorcion.ocurre)
  })

  it('al cambiar de presentación cambian juntos los datos y su procedencia', () => {
    const rengPara = rengFicha('paracetamol')!
    const [rengNormon, rengTylenol] = rengPara.presentaciones
    const rengA = rengEvidenciaAbsorcion(rengPara, rengNormon!, RENG_CURVAS)
    const rengB = rengEvidenciaAbsorcion(rengPara, rengTylenol!, RENG_CURVAS)
    expect(rengA.deOtraPresentacion).toBe(false)
    expect(rengB.deOtraPresentacion).toBe(true)
    expect(rengB.presentacionDatos.id).toBe(rengNormon!.id)
    const rengTica = rengFicha('ticagrelor')!
    const rengFalsa = { ...rengTica.presentaciones[0]!, id: 'ticagrelor-otra' }
    expect(rengEvidenciaAbsorcion({ ...rengTica, presentaciones: [...rengTica.presentaciones, rengFalsa] }, rengFalsa, RENG_CURVAS).nivel).not.toBe('serie')
  })

  it('la simulación de un modelo publicado reproduce la ecuación de un compartimento', () => {
    const rengM: RengModeloPublicado = { estructura: 'un-compartimento-primer-orden', analito: 'X', dosis: { valor: 100, unidad: 'mg' }, parametros: { ka: 1.2, cl: 5, v: 50, f: 0.8 }, unidadesParametros: { ka: '1/h', cl: 'L/h', v: 'L' }, sujeto: 'adulto típico', ref: { f: 'x', sec: 'x', cita: 'xxxxxxxxxxxxxx' } }
    const rengKe = 5 / 50
    for (const rengT of [0.5, 2, 10]) expect(rengConcentracionModelo(rengM, rengT)).toBeCloseTo(((0.8 * 100 * 1.2) / (50 * (1.2 - rengKe))) * (Math.exp(-rengKe * rengT) - Math.exp(-1.2 * rengT)), 12)
    const rengIgual = { ...rengM, parametros: { ka: 0.1, cl: 5, v: 50 } }
    expect(rengConcentracionModelo(rengIgual, 3)).toBeCloseTo((100 / 50) * 0.1 * 3 * Math.exp(-0.3), 12)
    expect(rengConcentracionModelo({ ...rengIgual, parametros: { ka: 0.1 * (1 + 1e-7), cl: 5, v: 50 } }, 3)).toBeCloseTo(rengConcentracionModelo(rengIgual, 3), 6)
    expect(rengConcentracionModelo({ ...rengM, parametros: { ...rengM.parametros, tlag: 0.5 } }, 0.4)).toBe(0)
    expect(rengConcentracionModelo({ ...rengM, parametros: { ...rengM.parametros, v: 0 } }, 1)).toBeNaN()
    expect(rengCurvaModelo(rengM, 24, 48)).toHaveLength(49)
    expect(rengCurvaModelo(rengM, 0)).toEqual([])
  })
})

describe('buscador del catálogo en el modelo de absorción', () => {
  const rengIds = (rengQ: string): string[] => rengBuscarFichas(rengQ).map((rengF) => rengF.activo.id)
  it('encuentra por principio activo, sinónimo o marca, con o sin tildes y mayúsculas', () => {
    expect(rengIds('Ticagrelor')).toContain('ticagrelor')
    expect(rengIds('brilinta')).toContain('ticagrelor')
    expect(rengIds('acetaminofen')).toContain('paracetamol')
    expect(rengIds('ACETAMINOFÉN')).toContain('paracetamol')
    expect(rengIds('tylenol')).toContain('paracetamol')
    expect(rengIds('losartán')).toContain('losartan')
    expect(rengIds('losartan')).toContain('losartan')
    expect(rengIds('cozaar')).toContain('losartan')
    expect(rengIds('zzzz-no-existe')).toEqual([])
    expect(rengIds('').length).toBe(RENG_CATALOGO.length)
  })
})
