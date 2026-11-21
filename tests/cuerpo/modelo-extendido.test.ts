import { describe, expect, it } from 'vitest'
import { RENG_CATALOGO, RENG_EXTENSIONES, rengDibujoEtapa, rengFicha, rengReferencias } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/catalogo'
import { rengConstruirIndice } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/indice'
import { rengFusionarExtension, rengProblemasFicha, rengProblemasPresentacion, rengRecorridoDe, rengResumenRecorridoDe } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/fichas'
import { RENG_ETAPAS, RENG_FORMAS_POR_DEFECTO, type RengFichaFarmaco, type RengIdEtapa, type RengPresentacion } from '../../src/renderer/modules/medicuerpo/cuerpo/datos/modelo'
import { rengExcipientesPendientes, rengFamiliaDe, rengFormasPorDefecto, rengRelacionDe, rengTituloEtapa, rengViasDe, RENG_FORMAS_NORMALIZADAS } from '../../src/renderer/modules/medicuerpo/cuerpo/nucleo/presentaciones'

const rengCita = (rengF: RengFichaFarmaco) => ({ f: rengF.fuentes[0]!.id, sec: '12.3 · Farmacocinética', cita: 'texto de cita suficientemente largo' })

function rengSintetica(rengCambios: { vias: RengPresentacion['vias']; familia?: RengPresentacion['familia']; forma?: string; formaNormalizada?: string }): RengFichaFarmaco {
  const rengF = structuredClone(rengFicha('paracetamol')!)
  rengF.presentaciones = [{ ...rengF.presentaciones[0]!, ...rengCambios, forma: rengCambios.forma ?? rengF.presentaciones[0]!.forma }]
  return rengF
}

const rengIntravenosa = (): RengFichaFarmaco => {
  const rengF = rengSintetica({ vias: ['intravenosa'], familia: 'inyectable', forma: 'Solución inyectable', formaNormalizada: 'solucion-inyectable' })
  rengF.recorrido.liberacion.formas = ['disuelto']
  rengF.recorrido.absorcion = { ...rengF.recorrido.absorcion, datos: [], noAplica: { motivo: 'La vía intravenosa introduce el medicamento directamente en la sangre.', ref: rengCita(rengF) } }
  return rengF
}

describe('familias, vías y títulos de etapa', () => {
  it('las presentaciones anteriores a la ampliación se clasifican sin cambiar su comportamiento: vía oral, familia por su forma', () => {
    const rengFamilias = new Map<string, number>()
    for (const rengF of RENG_CATALOGO)
      for (const rengP of rengF.presentaciones.filter((rengX) => !rengX.familia)) {
        expect(rengViasDe(rengP)).toEqual(['oral'])
        expect(rengRelacionDe(rengP)).toBe('digestiva')
        rengFamilias.set(rengFamiliaDe(rengP), (rengFamilias.get(rengFamiliaDe(rengP)) ?? 0) + 1)
      }
    expect(rengFamilias.get('inyectable') ?? 0).toBe(0)
    expect(rengFamilias.get('otra') ?? 0).toBe(0)
    expect(rengFamilias.get('liquido-oral')).toBe(4)
  })
  it('para los sólidos orales los títulos y las formas son los de siempre', () => {
    const rengP = rengFicha('ibuprofeno')!.presentaciones[0]!
    for (const rengE of RENG_ETAPAS) {
      expect(rengTituloEtapa(rengE.id, rengP)).toEqual({ titulo: rengE.titulo, corto: rengE.corto })
      expect(rengFormasPorDefecto(rengE.id, rengP), rengE.id).toEqual(RENG_FORMAS_POR_DEFECTO[rengE.id])
    }
  })
  it('un líquido oral no dibuja tableta; la intravenosa es directa; intramuscular y subcutánea dejan un depósito', () => {
    const rengLiquido: Pick<RengPresentacion, 'forma' | 'vias'> = { forma: 'Solución oral', vias: ['oral'] }
    expect(rengFamiliaDe(rengLiquido)).toBe('liquido-oral')
    expect(rengFormasPorDefecto('liberacion', rengLiquido)).toEqual(['disuelto'])
    expect(rengTituloEtapa('liberacion', rengLiquido).titulo).toBe('1. Liberación (ya en forma líquida)')
    const rengIv = { forma: 'Solución inyectable', vias: ['intravenosa' as const] }
    expect(rengFamiliaDe(rengIv)).toBe('inyectable')
    expect(rengRelacionDe(rengIv)).toBe('directa')
    expect(rengTituloEtapa('liberacion', rengIv).titulo).toBe('1. Administración directa a la sangre')
    expect(rengTituloEtapa('absorcion', rengIv).titulo).toBe('2. Absorción (no hay: entra directo)')
    expect(rengFormasPorDefecto('liberacion', rengIv)).toEqual(['disuelto'])
    for (const rengVia of ['intramuscular', 'subcutanea'] as const) {
      const rengP = { forma: 'Suspensión inyectable', vias: [rengVia] }
      expect(rengRelacionDe(rengP)).toBe('deposito')
      expect(rengTituloEtapa('liberacion', rengP).titulo).toBe('1. Depósito en el lugar de inyección')
      expect(rengFormasPorDefecto('liberacion', rengP)).toEqual(['deposito', 'disuelto'])
      expect(rengTituloEtapa('absorcion', rengP).titulo).toBe(RENG_ETAPAS[1]!.titulo)
    }
    expect(rengRelacionDe({ vias: ['intravenosa', 'intramuscular'] })).toBe('mixta')
    expect(rengFormasPorDefecto('liberacion', { forma: 'Solución inyectable', vias: ['intravenosa', 'intramuscular'] })).toEqual(['deposito', 'disuelto'])
    expect(rengRelacionDe({ vias: ['intratecal'] })).toBe('local')
  })
  it('el dibujo de la etapa usa la presentación solo cuando se la dan', () => {
    const rengF = rengIntravenosa()
    const rengIm = { forma: 'Suspensión inyectable', vias: ['intramuscular' as const] }
    const rengE = rengF.recorrido.liberacion
    const rengSinFormas = { ...rengE, formas: undefined }
    expect(rengDibujoEtapa('liberacion', rengSinFormas).formas).toEqual(['tableta', 'disuelto'])
    expect(rengDibujoEtapa('liberacion', rengSinFormas, rengIm).formas).toEqual(['deposito', 'disuelto'])
  })
  it('las formas normalizadas pertenecen a una familia y cada vía parenteral tiene su relación', () => {
    for (const [rengId, rengX] of Object.entries(RENG_FORMAS_NORMALIZADAS)) expect(rengX.nombre.length, rengId).toBeGreaterThan(3)
    expect(new Set(Object.values(RENG_FORMAS_NORMALIZADAS).map((rengX) => rengX.familia))).toEqual(new Set(['solido-oral', 'liquido-oral', 'inyectable']))
  })
})

describe('validación del modelo extendido', () => {
  it('una intravenosa con «no aplica» documentado en la absorción es válida y su cita entra en la comprobación de fuentes', () => {
    const rengF = rengIntravenosa()
    expect(rengProblemasFicha(rengF)).toEqual([])
    expect(rengReferencias(rengF).some((rengR) => rengR.donde === 'absorcion.noAplica')).toBe(true)
  })
  it('sin «no aplica» ni datos propios, la etapa de absorción de una intravenosa se rechaza', () => {
    const rengF = rengIntravenosa()
    delete rengF.recorrido.absorcion.noAplica
    expect(rengProblemasFicha(rengF).join('|')).toMatch(/absorcion: ningún dato del medicamento respalda la etapa/)
  })
  it('«no aplica» solo vale para liberación y absorción, con motivo y solo en vías de administración directa', () => {
    const rengMet = rengIntravenosa()
    rengMet.recorrido.metabolismo.noAplica = { motivo: 'No hay metabolismo en este medicamento.', ref: rengCita(rengMet) }
    expect(rengProblemasFicha(rengMet).join('|')).toMatch(/metabolismo: solo la liberación y la absorción pueden «no aplicar»/)
    const rengCorto = rengIntravenosa()
    rengCorto.recorrido.absorcion.noAplica!.motivo = 'corto'
    expect(rengProblemasFicha(rengCorto).join('|')).toMatch(/motivo de «no aplica» es demasiado corto/)
    const rengOral = structuredClone(rengFicha('paracetamol')!)
    rengOral.recorrido.absorcion.noAplica = { motivo: 'La absorción no aplica a esta presentación.', ref: rengCita(rengOral) }
    expect(rengProblemasFicha(rengOral).join('|')).toMatch(/solo se admite en vías de administración directa/)
  })
  it('una presentación no sólida no puede mostrar una tableta; el depósito solo es intramuscular, subcutáneo o intradérmico', () => {
    const rengF = rengIntravenosa()
    rengF.recorrido.liberacion.formas = ['tableta', 'disuelto']
    expect(rengProblemasFicha(rengF).join('|')).toMatch(/liberacion: una presentación no sólida no puede mostrar una tableta/)
    rengF.recorrido.liberacion.formas = ['deposito', 'disuelto']
    expect(rengProblemasFicha(rengF).join('|')).toMatch(/liberacion: el depósito solo corresponde/)
    const rengIm = rengSintetica({ vias: ['intramuscular'], familia: 'inyectable', forma: 'Suspensión inyectable' })
    rengIm.recorrido.liberacion.formas = ['deposito', 'disuelto']
    expect(rengProblemasFicha(rengIm)).toEqual([])
    const rengLiquido = rengSintetica({ vias: ['oral'], forma: 'Solución oral', formaNormalizada: 'solucion-oral' })
    rengLiquido.recorrido.liberacion.formas = ['disuelto']
    expect(rengProblemasFicha(rengLiquido)).toEqual([])
    rengLiquido.recorrido.liberacion.formas = ['tableta', 'disuelto']
    expect(rengProblemasFicha(rengLiquido).join('|')).toMatch(/no puede mostrar una tableta/)
  })
  it('vías, familia y forma normalizada deben ser coherentes entre sí', () => {
    const rengBase = rengFicha('paracetamol')!.presentaciones[0]!
    const rengProblemas = (rengC: Partial<RengPresentacion>): string => rengProblemasPresentacion({ ...rengBase, ...rengC }).join('|')
    expect(rengProblemas({})).toBe('')
    expect(rengProblemas({ vias: [] })).toMatch(/vías vacías/)
    expect(rengProblemas({ vias: ['rectal' as never] })).toMatch(/vía desconocida rectal/)
    expect(rengProblemas({ vias: ['oral', 'oral'] })).toMatch(/vías repetidas/)
    expect(rengProblemas({ familia: 'inyectable', vias: ['oral'] })).toMatch(/un inyectable solo puede tener vías parenterales/)
    expect(rengProblemas({ familia: 'liquido-oral', vias: ['intravenosa'] })).toMatch(/una forma oral no puede tener vías parenterales/)
    expect(rengProblemas({ formaNormalizada: 'inventada' })).toMatch(/forma normalizada desconocida/)
    expect(rengProblemas({ formaNormalizada: 'solucion-oral' })).toMatch(/la forma normalizada solucion-oral es liquido-oral y la presentación es solido-oral/)
    expect(rengProblemas({ formaNormalizada: 'comprimido' })).toBe('')
  })
  it('los excipientes de riesgo llevan motivo, vías de la presentación y una cita comprobable', () => {
    const rengF = rengSintetica({ vias: ['oral'], forma: 'Solución oral', formaNormalizada: 'solucion-oral' })
    const rengP = rengF.presentaciones[0]!
    rengP.excipientes = ['Sorbitol 70 %', 'agua purificada']
    expect(rengExcipientesPendientes(rengP)).toEqual(['Sorbitol'])
    rengP.excipientesRiesgo = [{ nombre: 'Sorbitol', motivo: 'La etiqueta advierte de su efecto laxante.', vias: ['oral'], ref: rengCita(rengF) }]
    expect(rengExcipientesPendientes(rengP)).toEqual([])
    expect(rengProblemasFicha(rengF)).toEqual([])
    expect(rengReferencias(rengF).some((rengR) => rengR.donde.endsWith('excipientesRiesgo[0]'))).toBe(true)
    rengP.excipientesRiesgo[0]!.vias = ['intravenosa']
    expect(rengProblemasFicha(rengF).join('|')).toMatch(/sus vías deben estar entre las de la presentación/)
    rengP.excipientesRiesgo[0]!.vias = ['oral']
    rengP.excipientesRiesgo[0]!.motivo = 'corto'
    expect(rengProblemasFicha(rengF).join('|')).toMatch(/motivo demasiado corto/)
  })
  it('la detección de excipientes de riesgo depende de la familia: la lactosa de un comprimido no es una advertencia', () => {
    const rengComprimido = { ...rengFicha('paracetamol')!.presentaciones[0]!, excipientes: ['Lactosa monohidrato', 'sacarosa'] }
    expect(rengExcipientesPendientes(rengComprimido)).toEqual([])
    const rengInyectable = { forma: 'Solución inyectable', vias: ['intramuscular' as const], excipientes: ['Alcohol bencílico', 'Metabisulfito sódico', 'Parabenos'] }
    expect(rengExcipientesPendientes(rengInyectable)).toEqual(['Alcohol bencílico', 'Sulfitos', 'Conservantes'])
    expect(rengExcipientesPendientes({ forma: 'Jarabe', vias: ['oral'], excipientes: ['sacarosa', 'etanol 96 %', 'Sorbitol'] })).toEqual(['Sorbitol', 'Azúcares', 'Etanol'])
  })
  it('una combinación necesita dos componentes distintos, ninguno ella misma, y con ficha cuando se comprueba', () => {
    const rengF = structuredClone(rengFicha('paracetamol')!)
    const rengExiste = (rengId: string): boolean => RENG_CATALOGO.some((rengX) => rengX.activo.id === rengId)
    rengF.combinacion = { componentes: [{ activoId: 'amlodipino' }, { activoId: 'benazepril' }] }
    expect(rengProblemasFicha(rengF, rengExiste)).toEqual([])
    rengF.combinacion = { componentes: [{ activoId: 'amlodipino' }] }
    expect(rengProblemasFicha(rengF, rengExiste).join('|')).toMatch(/al menos dos componentes/)
    rengF.combinacion = { componentes: [{ activoId: 'amlodipino' }, { activoId: 'amlodipino' }] }
    expect(rengProblemasFicha(rengF, rengExiste).join('|')).toMatch(/componentes repetidos/)
    rengF.combinacion = { componentes: [{ activoId: 'paracetamol' }, { activoId: 'benazepril' }] }
    expect(rengProblemasFicha(rengF, rengExiste).join('|')).toMatch(/no puede ser componente de sí misma/)
    rengF.combinacion = { componentes: [{ activoId: 'amlodipino' }, { activoId: 'inventado' }] }
    expect(rengProblemasFicha(rengF, rengExiste).join('|')).toMatch(/el componente inventado no tiene ficha/)
    expect(rengProblemasFicha(rengF).join('|')).not.toMatch(/no tiene ficha/)
  })
  it('el índice recoge familia, vías y componentes de las presentaciones nuevas', () => {
    const rengF = rengIntravenosa()
    rengF.combinacion = { componentes: [{ activoId: 'amlodipino' }, { activoId: 'benazepril' }] }
    const rengI = rengConstruirIndice([rengF], [])
    const rengP = rengI.activos[0]!.presentaciones[0]!
    expect(rengP.familia).toBe('inyectable')
    expect(rengP.vias).toEqual(['intravenosa'])
    expect(rengP.formaNormalizada).toBe('solucion-inyectable')
    expect(rengI.activos[0]!.componentes).toEqual(['amlodipino', 'benazepril'])
  })
  it('las etapas siguen en el mismo orden para cualquier familia', () => {
    const rengIds: RengIdEtapa[] = RENG_ETAPAS.map((rengE) => rengE.id)
    expect(rengIds).toEqual(['liberacion', 'absorcion', 'distribucion', 'metabolismo', 'excrecion'])
  })
})

describe('recorrido propio por presentación', () => {
  const rengConIntravenosaPropia = (): RengFichaFarmaco => {
    const rengF = structuredClone(rengFicha('paracetamol')!)
    const rengIv = rengIntravenosa()
    const rengPres = { ...rengF.presentaciones[0]!, id: 'paracetamol-iv', producto: 'Solución para perfusión', vias: ['intravenosa' as const], familia: 'inyectable' as const, forma: 'Solución inyectable', formaNormalizada: 'solucion-inyectable', recorridoPropio: { resumen: 'Entra directamente en la sangre y sigue el mismo reparto y eliminación.', etapas: rengIv.recorrido } }
    delete (rengPres as Partial<RengPresentacion>).recorridoDe
    rengF.presentaciones = [rengF.presentaciones[0]!, rengPres]
    return rengF
  }
  it('una ficha puede tener una presentación oral y otra intravenosa con etapas distintas', () => {
    const rengF = rengConIntravenosaPropia()
    expect(rengProblemasFicha(rengF)).toEqual([])
    const rengIv = rengF.presentaciones[1]!
    expect(rengRecorridoDe(rengF, rengIv).absorcion.noAplica).toBeDefined()
    expect(rengRecorridoDe(rengF, rengF.presentaciones[0]!).absorcion.noAplica).toBeUndefined()
    expect(rengRecorridoDe(rengF)).toBe(rengF.recorrido)
    expect(rengResumenRecorridoDe(rengF, rengIv)).toMatch(/directamente en la sangre/)
    expect(rengResumenRecorridoDe(rengF, rengF.presentaciones[0]!)).toBe(rengF.resumen.recorrido)
  })
  it('las citas del recorrido propio entran en la comprobación de fuentes con su propio prefijo', () => {
    const rengDonde = rengReferencias(rengConIntravenosaPropia()).map((rengR) => rengR.donde)
    expect(rengDonde).toContain('paracetamol-iv.recorrido.absorcion.noAplica')
    expect(rengDonde).toContain('paracetamol-iv.recorrido.distribucion[0]')
  })
  it('recorridoDe sigue la cadena entre presentaciones y no se queda en bucle', () => {
    const rengF = rengConIntravenosaPropia()
    const rengTercera: RengPresentacion = { ...rengF.presentaciones[0]!, id: 'paracetamol-terc', recorridoDe: 'paracetamol-iv' }
    rengF.presentaciones.push(rengTercera)
    expect(rengRecorridoDe(rengF, rengTercera)).toBe(rengF.presentaciones[1]!.recorridoPropio!.etapas)
    rengF.presentaciones[0]!.recorridoDe = 'paracetamol-terc'
    rengTercera.recorridoDe = rengF.presentaciones[0]!.id
    expect(rengRecorridoDe(rengF, rengTercera)).toBe(rengF.recorrido)
  })
  it('se rechazan: recorridoDe y propio a la vez, propio sin resumen y etapas propias inválidas con su prefijo', () => {
    const rengA = rengConIntravenosaPropia()
    rengA.presentaciones[1]!.recorridoDe = 'paracetamol-oral'
    expect(rengProblemasFicha(rengA).join('|')).toMatch(/no puede tener a la vez recorridoDe y recorrido propio/)
    const rengB = rengConIntravenosaPropia()
    rengB.presentaciones[1]!.recorridoPropio!.resumen = 'corto'
    expect(rengProblemasFicha(rengB).join('|')).toMatch(/el recorrido propio necesita su resumen/)
    const rengC = rengConIntravenosaPropia()
    delete rengC.presentaciones[1]!.recorridoPropio!.etapas.absorcion.noAplica
    expect(rengProblemasFicha(rengC).join('|')).toMatch(/paracetamol paracetamol-iv\.absorcion: ningún dato del medicamento respalda la etapa/)
    const rengD = rengConIntravenosaPropia()
    rengD.presentaciones[1]!.recorridoPropio!.etapas.liberacion.formas = ['tableta', 'disuelto']
    expect(rengProblemasFicha(rengD).join('|')).toMatch(/paracetamol-iv\.liberacion: una presentación no sólida no puede mostrar una tableta/)
    const rengE = rengConIntravenosaPropia()
    delete rengE.presentaciones[1]!.recorridoPropio
    expect(rengProblemasFicha(rengE).join('|')).toMatch(/una presentación secundaria debe decir de cuál es su recorrido/)
  })
})

describe('extensiones: presentaciones añadidas a una ficha existente', () => {
  it('se fusionan al final, sin repetir fuentes, y no cambian la ficha original', () => {
    const rengBase = rengFicha('paracetamol')!
    const rengNueva: RengPresentacion = { ...structuredClone(rengBase.presentaciones[0]!), id: 'paracetamol-ext', recorridoDe: rengBase.presentaciones[0]!.id }
    const rengFusion = rengFusionarExtension(rengBase, { activoId: 'paracetamol', presentaciones: [rengNueva], fuentes: [rengBase.fuentes[0]!, { ...rengBase.fuentes[0]!, id: 'fuente-nueva' }] })
    expect(rengFusion.presentaciones.map((rengP) => rengP.id)).toEqual([...rengBase.presentaciones.map((rengP) => rengP.id), 'paracetamol-ext'])
    expect(rengFusion.fuentes.map((rengF) => rengF.id)).toEqual([...rengBase.fuentes.map((rengF) => rengF.id), 'fuente-nueva'])
    expect(rengFusion.cifras).toEqual(rengBase.cifras)
    expect(rengFusionarExtension(rengBase, undefined)).toBe(rengBase)
    expect(rengProblemasFicha(rengFusion)).toEqual([])
  })
  it('cada extensión del catálogo pertenece a una ficha que existe y sus presentaciones llevan el id del activo', () => {
    const rengIds = new Set(RENG_CATALOGO.map((rengF) => rengF.activo.id))
    for (const rengX of RENG_EXTENSIONES) {
      expect(rengIds.has(rengX.activoId), rengX.activoId).toBe(true)
      for (const rengP of rengX.presentaciones) expect(rengP.id.startsWith(`${rengX.activoId}-`), rengP.id).toBe(true)
    }
    expect(new Set(RENG_EXTENSIONES.map((rengX) => rengX.activoId)).size).toBe(RENG_EXTENSIONES.length)
  })
})
