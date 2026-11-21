import { rengNormalizarNombre } from '../../nucleo/nomenclatura'
import { rengFamiliaDe, rengFormasPorDefecto, rengRelacionDe, rengViasDe, RENG_FORMAS_NORMALIZADAS, RENG_VIAS } from '../nucleo/presentaciones'
import { RENG_ESTRUCTURAS } from './anatomia'
import { RENG_FUENTES_GENERALES } from './generales'
import { RENG_ETAPAS, RENG_FORMAS_POR_DEFECTO, type RengExtensionFicha, type RengCurvaEstudio, type RengDato, type RengEtapa, type RengFichaFarmaco, type RengForma, type RengIdEtapa, type RengPresentacion, type RengRecorrido, type RengRef } from './modelo'
import { RENG_DESTINOS, rengDestino, rengMallasDe } from './organos'
import { RENG_REACCIONES, RENG_SECCIONES_REACCIONES } from './reaccionesAdversas'

export function rengReaccionesDe(rengP: { id: string; fuente: string; reacciones?: ReadonlyArray<readonly [texto: string, codigo: string, cita: string]> }): RengDato[] {
  return [...(RENG_REACCIONES[rengP.id] ?? []), ...(rengP.reacciones ?? [])].map(([rengT, rengCodigo, rengCita]) => ({
    t: rengT,
    ref: { f: rengP.fuente, sec: RENG_SECCIONES_REACCIONES[rengCodigo as keyof typeof RENG_SECCIONES_REACCIONES] ?? rengCodigo, cita: rengCita, codigo: rengCodigo }
  }))
}

export function rengFusionarExtension(rengF: RengFichaFarmaco, rengX: RengExtensionFicha | undefined): RengFichaFarmaco {
  if (!rengX) return rengF
  const rengIdsFuentes = new Set(rengF.fuentes.map((rengY) => rengY.id))
  return {
    ...rengF,
    presentaciones: [...rengF.presentaciones, ...rengX.presentaciones],
    fuentes: [...rengF.fuentes, ...rengX.fuentes.filter((rengY) => !rengIdsFuentes.has(rengY.id))],
    cifras: [...rengF.cifras, ...(rengX.cifras ?? [])]
  }
}

export const rengEtapasDe = (rengR: RengRecorrido): Array<RengEtapa & { id: RengIdEtapa }> => RENG_ETAPAS.map((rengE) => ({ ...rengR[rengE.id], id: rengE.id }))

export function rengCoincideBusqueda(rengTextos: readonly string[], rengConsulta: string): boolean {
  const rengT = rengNormalizarNombre(rengConsulta.trim())
  if (!rengT) return true
  return rengTextos.some((rengX) => rengNormalizarNombre(rengX).includes(rengT))
}

export function rengDibujoEtapa(rengId: RengIdEtapa, rengE: RengEtapa, rengPresentacion?: Pick<RengPresentacion, 'familia' | 'vias' | 'forma'>): { resaltadas: string[]; sistema: string[]; generales: string[]; ruta: string[]; formas: RengForma[] } {
  const { propias: rengPropias, sistema: rengSistema } = rengMallasDe(rengE.organos)
  const rengGenerales = rengMallasDe(rengE.organosGenerales ?? []).propias.filter((rengM) => !rengPropias.includes(rengM))
  const rengRuta = rengE.ruta ?? [...rengPropias, ...rengGenerales]
  return { resaltadas: rengPropias, sistema: rengSistema, generales: rengGenerales, ruta: rengRuta.length ? rengRuta : rengSistema, formas: rengE.formas ?? (rengPresentacion ? rengFormasPorDefecto(rengId, rengPresentacion) : RENG_FORMAS_POR_DEFECTO[rengId]) }
}

const RENG_UNIDADES = /^(h|min|d|días?|semanas?|años?|%|% de la dosis|% del total|L|L\/kg|l\/kg|mL\/min|L\/h|ng\/mL|pg\/mL|nmol\/L|mcg\/mL|µg\/mL|mg\/L|mg\/kg|ng·h\/mL|µg·h\/mL|veces|mL\/min\/1,73 m²|—)$/

export function rengReferencias(rengF: RengFichaFarmaco): Array<{ donde: string; ref: RengRef }> {
  const rengOut: Array<{ donde: string; ref: RengRef }> = []
  const rengDatos = (rengDonde: string, rengDs: readonly RengDato[]): void => rengDs.forEach((rengD, rengI) => rengOut.push({ donde: `${rengDonde}[${rengI}]`, ref: rengD.ref }))
  for (const rengP of rengF.presentaciones) {
    rengOut.push({ donde: `${rengP.id}.usos`, ref: rengP.usos.ref })
    if (rengP.sal) rengOut.push({ donde: `${rengP.id}.sal`, ref: rengP.sal.ref })
    rengDatos(`${rengP.id}.reacciones`, rengReaccionesDe(rengP))
    rengP.advertencias?.forEach((rengA, rengI) => rengOut.push({ donde: `${rengP.id}.advertencias[${rengI}]`, ref: rengA.ref }))
    rengP.excipientesRiesgo?.forEach((rengX, rengI) => rengOut.push({ donde: `${rengP.id}.excipientesRiesgo[${rengI}]`, ref: rengX.ref }))
  }
  const rengDeRecorrido = (rengPrefijo: string, rengR: RengRecorrido): void => {
    for (const rengE of rengEtapasDe(rengR)) {
      rengDatos(`${rengPrefijo}${rengE.id}`, rengE.datos)
      if (rengE.noAplica) rengOut.push({ donde: `${rengPrefijo}${rengE.id}.noAplica`, ref: rengE.noAplica.ref })
    }
    rengDatos(`${rengPrefijo}accion`, rengR.distribucion.accion.datos)
    rengR.metabolismo.metabolitos.forEach((rengM, rengI) => rengOut.push({ donde: `${rengPrefijo}metabolitos[${rengI}]`, ref: rengM.ref }))
  }
  rengDeRecorrido('', rengF.recorrido)
  for (const rengP of rengF.presentaciones) if (rengP.recorridoPropio) rengDeRecorrido(`${rengP.id}.recorrido.`, rengP.recorridoPropio.etapas)
  rengF.cifras.forEach((rengC, rengI) => rengOut.push({ donde: `cifras[${rengI}]`, ref: rengC.ref }))
  return rengOut
}

export function rengProblemasPresentacion(rengP: RengPresentacion): string[] {
  const rengOut: string[] = []
  const rengVias = rengViasDe(rengP)
  if (rengP.vias && !rengP.vias.length) rengOut.push(`${rengP.id}: vías vacías`)
  for (const rengV of rengVias) if (!(rengV in RENG_VIAS)) rengOut.push(`${rengP.id}: vía desconocida ${rengV}`)
  if (new Set(rengVias).size !== rengVias.length) rengOut.push(`${rengP.id}: vías repetidas`)
  const rengFam = rengFamiliaDe(rengP)
  const rengParenterales = rengVias.filter((rengV) => RENG_VIAS[rengV]?.parenteral).length
  if (rengP.familia === 'inyectable' && rengParenterales !== rengVias.length) rengOut.push(`${rengP.id}: un inyectable solo puede tener vías parenterales`)
  if ((rengP.familia === 'solido-oral' || rengP.familia === 'liquido-oral') && rengParenterales > 0) rengOut.push(`${rengP.id}: una forma oral no puede tener vías parenterales`)
  if (rengP.formaNormalizada) {
    const rengN = RENG_FORMAS_NORMALIZADAS[rengP.formaNormalizada]
    if (!rengN) rengOut.push(`${rengP.id}: forma normalizada desconocida ${rengP.formaNormalizada}`)
    else if (rengN.familia !== rengFam) rengOut.push(`${rengP.id}: la forma normalizada ${rengP.formaNormalizada} es ${rengN.familia} y la presentación es ${rengFam}`)
  }
  rengP.excipientesRiesgo?.forEach((rengX, rengI) => {
    if (!rengX.nombre.trim()) rengOut.push(`${rengP.id}.excipientesRiesgo[${rengI}]: sin nombre`)
    if (rengX.motivo.trim().length < 12) rengOut.push(`${rengP.id}.excipientesRiesgo[${rengI}]: motivo demasiado corto (debe decir lo que advierte la etiqueta)`)
    if (!rengX.vias.length || rengX.vias.some((rengV) => !rengVias.includes(rengV))) rengOut.push(`${rengP.id}.excipientesRiesgo[${rengI}]: sus vías deben estar entre las de la presentación`)
  })
  return rengOut
}

export function rengProblemasRecorrido(rengId: string, rengPrefijo: string, rengR: RengRecorrido, rengP: RengPresentacion): string[] {
  const rengOut: string[] = []
  const rengRelacion = rengRelacionDe(rengP)
  const rengFamilia = rengFamiliaDe(rengP)
  for (const rengE of rengEtapasDe(rengR)) {
    const rengEt = `${rengId} ${rengPrefijo}${rengE.id}`
    const rengPropios = rengE.datos.filter((rengD) => rengD.alcance !== 'general')
    if (rengE.noAplica) {
      if (rengE.id !== 'liberacion' && rengE.id !== 'absorcion') rengOut.push(`${rengEt}: solo la liberación y la absorción pueden «no aplicar»`)
      if (rengE.noAplica.motivo.trim().length < 12) rengOut.push(`${rengEt}: el motivo de «no aplica» es demasiado corto`)
      if (rengE.id === 'absorcion' && rengRelacion !== 'directa' && rengRelacion !== 'mixta') rengOut.push(`${rengEt}: «no aplica» solo se admite en vías de administración directa`)
    } else if (!rengPropios.length) rengOut.push(`${rengEt}: ningún dato del medicamento respalda la etapa`)
    if (rengE.formas?.includes('tableta') && rengFamilia !== 'solido-oral') rengOut.push(`${rengEt}: una presentación no sólida no puede mostrar una tableta`)
    if (rengE.formas?.includes('deposito') && rengRelacion !== 'deposito' && rengRelacion !== 'mixta') rengOut.push(`${rengEt}: el depósito solo corresponde a las vías intramuscular, subcutánea o intradérmica`)
    for (const rengO of [...rengE.organos, ...(rengE.organosGenerales ?? [])]) if (!rengDestino(rengO)) rengOut.push(`${rengEt}: destino desconocido ${rengO}`)
    for (const rengO of rengE.ruta ?? []) if (!RENG_ESTRUCTURAS.some((rengS) => rengS.id === rengO)) rengOut.push(`${rengEt}: ruta con una malla desconocida ${rengO}`)
    if (!rengE.llega.trim() || !rengE.ocurre.trim() || !rengE.sigue.trim()) rengOut.push(`${rengEt}: falta qué llega, qué ocurre o qué sigue`)
  }
  for (const rengO of rengR.distribucion.accion.lugar) if (!rengDestino(rengO)) rengOut.push(`${rengId} ${rengPrefijo}acción: destino desconocido ${rengO}`)
  return rengOut
}

export function rengRecorridoDe(rengF: RengFichaFarmaco, rengP?: RengPresentacion): RengRecorrido {
  let rengActual = rengP ?? rengF.presentaciones[0]
  for (let rengSalto = 0; rengActual && rengSalto < 4; rengSalto++) {
    if (rengActual.recorridoPropio) return rengActual.recorridoPropio.etapas
    const rengDe = rengActual.recorridoDe
    const rengSig = rengDe ? rengF.presentaciones.find((rengX) => rengX.id === rengDe) : undefined
    if (!rengSig || rengSig.id === rengActual.id) break
    rengActual = rengSig
  }
  return rengF.recorrido
}

export function rengResumenRecorridoDe(rengF: RengFichaFarmaco, rengP?: RengPresentacion): string {
  let rengActual = rengP ?? rengF.presentaciones[0]
  for (let rengSalto = 0; rengActual && rengSalto < 4; rengSalto++) {
    if (rengActual.recorridoPropio) return rengActual.recorridoPropio.resumen
    const rengDe = rengActual.recorridoDe
    const rengSig = rengDe ? rengF.presentaciones.find((rengX) => rengX.id === rengDe) : undefined
    if (!rengSig || rengSig.id === rengActual.id) break
    rengActual = rengSig
  }
  return rengF.resumen.recorrido
}

export function rengProblemasFicha(rengF: RengFichaFarmaco, rengExisteActivo?: (rengId: string) => boolean): string[] {
  const rengP: string[] = []
  const rengId = rengF.activo.id
  const rengFuentes = new Set([...rengF.fuentes.map((rengX) => rengX.id), ...RENG_FUENTES_GENERALES.map((rengX) => rengX.id)])
  if (!/^[a-z0-9-]+$/.test(rengId)) rengP.push(`${rengId}: id no válido`)
  if (!rengF.presentaciones.length) rengP.push(`${rengId}: sin presentaciones`)
  const rengPrincipal = rengF.presentaciones[0]?.id
  for (const rengPr of rengF.presentaciones) {
    rengP.push(...rengProblemasPresentacion(rengPr))
    if (!rengPr.id.startsWith(`${rengId}-`)) rengP.push(`${rengPr.id}: el id de la presentación debe empezar por el del activo`)
    if (!rengFuentes.has(rengPr.fuente)) rengP.push(`${rengPr.id}: fuente ${rengPr.fuente} no declarada`)
    if (rengPr.recorridoDe && !rengF.presentaciones.some((rengX) => rengX.id === rengPr.recorridoDe)) rengP.push(`${rengPr.id}: recorridoDe apunta a otra ficha`)
    if (rengPr.recorridoDe && rengPr.recorridoPropio) rengP.push(`${rengPr.id}: no puede tener a la vez recorridoDe y recorrido propio`)
    if (rengPr.recorridoPropio && rengPr.recorridoPropio.resumen.trim().length < 12) rengP.push(`${rengPr.id}: el recorrido propio necesita su resumen`)
    if (rengPr.id !== rengPrincipal && !rengPr.recorridoDe && !rengPr.recorridoPropio) rengP.push(`${rengPr.id}: una presentación secundaria debe decir de cuál es su recorrido`)
  }
  for (const { donde: rengDonde, ref: rengRef } of rengReferencias(rengF)) {
    if (!rengFuentes.has(rengRef.f)) rengP.push(`${rengId} ${rengDonde}: fuente ${rengRef.f} no declarada`)
    if (!rengRef.sec.trim()) rengP.push(`${rengId} ${rengDonde}: falta la sección`)
    if (rengRef.cita.trim().length < 12) rengP.push(`${rengId} ${rengDonde}: cita demasiado corta`)
    if (rengRef.cita.length > 260) rengP.push(`${rengId} ${rengDonde}: cita demasiado larga (las citas son breves)`)
  }
  if (rengF.presentaciones[0]) rengP.push(...rengProblemasRecorrido(rengId, '', rengF.recorrido, rengF.presentaciones[0]))
  for (const rengPr of rengF.presentaciones) if (rengPr.recorridoPropio) rengP.push(...rengProblemasRecorrido(rengId, `${rengPr.id}.`, rengPr.recorridoPropio.etapas, rengPr))
  for (const rengC of rengF.cifras) if (!RENG_UNIDADES.test(rengC.unidad)) rengP.push(`${rengId} cifra «${rengC.nombre}»: unidad no reconocida «${rengC.unidad}»`)
  if (rengF.combinacion) {
    const rengComp = rengF.combinacion.componentes
    if (rengComp.length < 2) rengP.push(`${rengId}: una combinación necesita al menos dos componentes`)
    if (new Set(rengComp.map((rengC) => rengC.activoId)).size !== rengComp.length) rengP.push(`${rengId}: componentes repetidos`)
    for (const rengC of rengComp) {
      if (rengC.activoId === rengId) rengP.push(`${rengId}: una combinación no puede ser componente de sí misma`)
      else if (rengExisteActivo && !rengExisteActivo(rengC.activoId)) rengP.push(`${rengId}: el componente ${rengC.activoId} no tiene ficha`)
    }
  }
  if (rengF.estado === 'parcial' && !rengF.pendientes?.length) rengP.push(`${rengId}: una ficha parcial debe decir qué falta`)
  return rengP
}

export function rengReferenciasCurva(rengC: RengCurvaEstudio): Array<{ donde: string; ref: RengRef }> {
  return [
    { donde: `${rengC.id}.ref`, ref: rengC.ref },
    ...rengC.series.map((rengS) => ({ donde: `${rengC.id}.series.${rengS.id}`, ref: rengS.ref })),
    ...rengC.resultados.map((rengX, rengI) => ({ donde: `${rengC.id}.resultados[${rengI}]`, ref: rengX.ref })),
    ...rengC.apoyos.map((rengX) => ({ donde: `${rengC.id}.apoyos.${rengX.que}`, ref: rengX.ref })),
    ...(rengC.modelo ? [{ donde: `${rengC.id}.modelo`, ref: rengC.modelo.ref }] : [])
  ]
}

export const rengUnidadReconocida = (rengU: string): boolean => RENG_UNIDADES.test(rengU)

export const rengMallasDeDestinos = (): string[] => RENG_DESTINOS.flatMap((rengD) => [...rengD.malla, ...(rengD.sistemaMalla ?? [])])
