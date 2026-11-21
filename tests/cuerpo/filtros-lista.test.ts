import { describe, expect, it } from 'vitest'
import { RENG_CATALOGO, rengBuscarFichas, rengFicha } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { RENG_INDICE } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogoDemanda'
import { rengBuscarEnIndice, rengConstruirIndice } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice'
import type { RengFichaFarmaco } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/modelo'
import { rengConteoFaceta, rengExplicarSinResultados, rengFiltrarIndice, rengFiltrosActivos, rengOpcionesGlobales, RENG_FILTROS_VACIOS, type RengFiltros } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/filtros'
import { rengFormaNormalizadaDe, RENG_FORMAS_NORMALIZADAS } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/presentaciones'
import { rengDesplazamientoParaVer, rengVentana } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/ventana'

const rengFiltros = (rengC: Partial<RengFiltros>): RengFiltros => ({ ...RENG_FILTROS_VACIOS, ...rengC })
const rengTodasPresentaciones = RENG_CATALOGO.flatMap((rengF) => rengF.presentaciones)

function rengConInyectables(): { indice: ReturnType<typeof rengConstruirIndice>; fichas: RengFichaFarmaco[] } {
  const rengBase = rengFicha('paracetamol')!
  const rengHacer = (rengId: string, rengVias: Array<'intravenosa' | 'intramuscular' | 'subcutanea'>, rengForma: string): RengFichaFarmaco => {
    const rengF = structuredClone(rengBase)
    rengF.activo.id = rengId
    rengF.activo.nombre = `Sintético ${rengId}`
    rengF.activo.clase = 'Clase sintética'
    rengF.presentaciones = [{ ...rengF.presentaciones[0]!, id: `${rengId}-inyectable`, vias: rengVias, familia: 'inyectable', forma: rengForma }]
    return rengF
  }
  const rengFichas = [rengHacer('sint-iv', ['intravenosa'], 'Solución inyectable'), rengHacer('sint-im', ['intramuscular'], 'Suspensión inyectable'), rengHacer('sint-mixto', ['intravenosa', 'intramuscular'], 'Solución inyectable')]
  return { indice: rengConstruirIndice(rengFichas, []), fichas: rengFichas }
}

describe('lista virtualizada: ventana de filas', () => {
  it('con muchas filas solo se pintan las visibles más un margen', () => {
    const rengV = rengVentana(46 * 1000, 300, 46, 100_000)
    expect(rengV.inicio).toBe(1000 - 6)
    expect(rengV.fin - rengV.inicio).toBeLessThanOrEqual(Math.ceil(300 / 46) + 1 + 12)
    expect(rengVentana(0, 300, 46, 100_000).inicio).toBe(0)
  })
  it('no sale de los límites, admite listas vacías o más cortas que la ventana y desplazamientos negativos', () => {
    expect(rengVentana(0, 300, 46, 0)).toEqual({ inicio: 0, fin: 0 })
    expect(rengVentana(0, 300, 46, 3)).toEqual({ inicio: 0, fin: 3 })
    expect(rengVentana(-50, 300, 46, 10).inicio).toBe(0)
    const rengFin = rengVentana(46 * 99_999, 300, 46, 100_000)
    expect(rengFin.fin).toBe(100_000)
    expect(rengFin.inicio).toBeGreaterThanOrEqual(0)
    expect(rengVentana(0, 300, 0, 10)).toEqual({ inicio: 0, fin: 0 })
  })
  it('toda fila visible está dentro de la ventana para cualquier desplazamiento', () => {
    for (let rengTop = 0; rengTop < 46 * 500; rengTop += 37) {
      const rengV = rengVentana(rengTop, 300, 46, 500)
      for (let rengI = Math.floor(rengTop / 46); rengI < Math.min(500, Math.ceil((rengTop + 300) / 46)); rengI++) expect(rengI >= rengV.inicio && rengI < rengV.fin, `${rengTop}/${rengI}`).toBe(true)
    }
  })
  it('para ver una fila con el teclado solo se desplaza lo necesario', () => {
    expect(rengDesplazamientoParaVer(10, 0, 300, 46)).toBe(10 * 46 + 46 - 300)
    expect(rengDesplazamientoParaVer(2, 0, 300, 46)).toBeNull()
    expect(rengDesplazamientoParaVer(2, 500, 300, 46)).toBe(92)
    expect(rengDesplazamientoParaVer(0, 0, 300, 46)).toBeNull()
    expect(rengDesplazamientoParaVer(10, 0, 300, 46, 4)).toBe(10 * 46 + 4 + 46 + 4 - 300)
    expect(rengDesplazamientoParaVer(0, 80, 300, 46, 4)).toBe(0)
    expect(rengDesplazamientoParaVer(0, 0, 300, 46, 4)).toBeNull()
  })
})

describe('filtros del catálogo sobre el índice', () => {
  it('sin filtros se cuentan todos los activos y todas las presentaciones, sin sumar ni perder', () => {
    const rengR = rengFiltrarIndice(RENG_INDICE, RENG_FILTROS_VACIOS)
    expect(rengR.activos.length).toBe(RENG_CATALOGO.length)
    expect(rengR.totalActivos).toBe(RENG_CATALOGO.length)
    expect(rengR.totalPresentaciones).toBe(rengTodasPresentaciones.length)
    expect(rengR.presentacionesCoincidentes).toBe(rengTodasPresentaciones.length)
    expect(rengR.completas).toBe(RENG_CATALOGO.filter((rengF) => rengF.estado === 'completa').length)
    expect(rengFiltrosActivos(RENG_FILTROS_VACIOS)).toEqual([])
  })
  it('búsqueda y área dan lo mismo que la búsqueda de siempre', () => {
    for (const [rengQ, rengArea] of [['zoloft', null], ['estatina', null], ['', 'Infecciones'], ['acetaminofen', 'Dolor y fiebre']] as const)
      expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ q: rengQ, area: rengArea })).activos.map((rengX) => rengX.activo.id)).toEqual(rengBuscarFichas(rengQ, rengArea).map((rengF) => rengF.activo.id))
  })
  it('mercado, tipo, vía, forma y curva cuentan presentaciones reales del catálogo', () => {
    const rengEs = rengTodasPresentaciones.filter((rengP) => rengP.mercado === 'España (UE)').length
    expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ mercado: 'España (UE)' })).presentacionesCoincidentes).toBe(rengEs)
    expect(rengEs).toBeGreaterThan(0)
    expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ familia: 'liquido-oral' })).presentacionesCoincidentes).toBe(rengTodasPresentaciones.filter((rengP) => /oral/i.test(rengP.forma) && /soluci[oó]n|suspensi[oó]n|concentrado/i.test(rengP.forma) && !/gr[aá]nulo|c[aá]psula|comprimido/i.test(rengP.forma)).length)
    expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ via: 'oral' })).presentacionesCoincidentes).toBe(rengTodasPresentaciones.filter((rengP) => (rengP.vias ?? ['oral']).includes('oral')).length)
    expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ via: 'intraarticular' })).activos).toEqual([])
    expect(rengFiltrarIndice(RENG_INDICE, rengFiltros({ forma: 'capsula' })).presentacionesCoincidentes).toBe(rengTodasPresentaciones.filter((rengP) => /c[aá]psula/i.test(rengP.forma)).length)
    const rengCurva = rengFiltrarIndice(RENG_INDICE, rengFiltros({ conCurva: true }))
    expect(rengCurva.activos.map((rengX) => rengX.activo.id)).toEqual(['ticagrelor'])
    expect(rengCurva.activos[0]!.coincidentes.map((rengP) => rengP.id)).toEqual(['ticagrelor-oral'])
  })
  it('un activo solo aparece si una misma presentación cumple a la vez todos los filtros de presentación', () => {
    const { indice } = rengConInyectables()
    const rengIv = rengFiltrarIndice(indice, rengFiltros({ via: 'intravenosa' }))
    expect(rengIv.activos.map((rengX) => rengX.activo.id)).toEqual(['sint-iv', 'sint-mixto'])
    expect(rengFiltrarIndice(indice, rengFiltros({ via: 'intravenosa', familia: 'liquido-oral' })).activos).toEqual([])
    expect(rengFiltrarIndice(indice, rengFiltros({ via: 'intramuscular', forma: 'suspension-inyectable' })).activos.map((rengX) => rengX.activo.id)).toEqual(['sint-im'])
    expect(rengFiltrarIndice(indice, rengFiltros({ familia: 'inyectable' })).presentacionesCoincidentes).toBe(3)
    const rengMixto = rengFiltrarIndice(indice, rengFiltros({ via: 'intramuscular' })).activos.find((rengX) => rengX.activo.id === 'sint-mixto')!
    expect(rengMixto.coincidentes).toHaveLength(1)
    expect(rengMixto.activo.presentaciones).toHaveLength(1)
  })
  it('los contadores por opción no cuentan su propio filtro y suman lo que dicen', () => {
    const { indice } = rengConInyectables()
    const rengSin = rengConteoFaceta(indice, RENG_FILTROS_VACIOS, 'mercado')
    const rengConUno = rengConteoFaceta(indice, rengFiltros({ mercado: 'España (UE)' }), 'mercado')
    expect([...rengConUno]).toEqual([...rengSin])
    const rengVias = rengConteoFaceta(indice, rengFiltros({ familia: 'inyectable' }), 'via')
    expect(rengVias.get('intravenosa')).toBe(2)
    expect(rengVias.get('intramuscular')).toBe(2)
    expect(rengVias.has('oral')).toBe(false)
    const rengFamilias = rengConteoFaceta(indice, RENG_FILTROS_VACIOS, 'familia')
    expect([...rengFamilias.values()].reduce((rengN, rengV) => rengN + rengV, 0)).toBe(indice.activos.reduce((rengN, rengA) => rengN + rengA.presentaciones.length, 0))
    const rengOpc = rengOpcionesGlobales(RENG_INDICE)
    expect(rengOpc.hayCurvas).toBe(true)
    expect(rengOpc.vias).toContain('oral')
    expect(rengOpc.mercados).toEqual(['EE. UU.', 'España (UE)'])
  })
  it('si nada coincide, el mensaje dice qué filtro lo causa', () => {
    expect(rengExplicarSinResultados(RENG_INDICE, rengFiltros({ q: 'xyzxyz' }))).toBe('Nada coincide con la búsqueda.')
    const rengMsg = rengExplicarSinResultados(RENG_INDICE, rengFiltros({ mercado: 'España (UE)', conCurva: true }))
    expect(rengMsg).toMatch(/Ninguna presentación cumple todos los filtros a la vez/)
    expect(rengMsg).toMatch(/Quitar el mercado o «con curva publicada» devuelve resultados/)
    expect(rengExplicarSinResultados(RENG_INDICE, rengFiltros({ q: 'xyzxyz', via: 'intraarticular' }))).toMatch(/ni siquiera quitando uno solo/)
  })
  it('la clase se filtra sin tildes ni mayúsculas', () => {
    const rengR = rengFiltrarIndice(RENG_INDICE, rengFiltros({ clase: 'ESTATINA' }))
    expect(rengR.activos.map((rengX) => rengX.activo.id)).toContain('atorvastatina')
    expect(rengR.activos.every((rengX) => /estatina/i.test(rengX.activo.clase))).toBe(true)
  })
})

describe('forma normalizada de las presentaciones existentes', () => {
  it('todas las formas actuales se clasifican en una forma conocida', () => {
    for (const rengP of rengTodasPresentaciones) {
      const rengN = rengFormaNormalizadaDe(rengP)
      expect(RENG_FORMAS_NORMALIZADAS[rengN], `${rengP.id}: ${rengP.forma} → ${rengN}`).toBeDefined()
    }
  })
  it('una cápsula con gránulos sigue siendo cápsula y un sobre de gránulos es polvo oral', () => {
    expect(rengFormaNormalizadaDe({ forma: 'Cápsula dura con gránulos', vias: undefined, familia: undefined })).toBe('capsula')
    expect(rengFormaNormalizadaDe({ forma: 'Gránulos gastrorresistentes para suspensión oral (en sobres)', vias: undefined, familia: undefined })).toBe('polvo-oral')
    expect(rengFormaNormalizadaDe({ forma: 'Comprimido masticable', vias: undefined, familia: undefined })).toBe('comprimido-masticable')
  })
  it('la búsqueda en el índice sigue igual que antes', () => {
    expect(rengBuscarEnIndice(RENG_INDICE, 'zoloft').map((rengA) => rengA.id)).toEqual(['sertralina'])
  })
})
