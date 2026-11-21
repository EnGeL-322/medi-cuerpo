import { rengDesdeSmiles, type RengMoleculaGrafo } from '../../nucleo/molecula'
import { RENG_INDICE } from '../datos/catalogoDemanda'
import type { RengActivo } from '../datos/modelo'

export type RengTipoComprobacion = 'coincide' | 'coincide-enantiomero' | 'conectividad' | 'enlaces-distintos' | 'distinta' | 'valencia' | 'vacia'

export interface RengComprobacion {
  tipo: RengTipoComprobacion
  titulo: string
  explicacion: string
  formula?: string
  reconocido?: string
}

const rengLeer = (rengSmiles: string): { g: RengMoleculaGrafo } | { error: string } => {
  try {
    return { g: rengDesdeSmiles(rengSmiles) }
  } catch (rengE) {
    return { error: rengE instanceof Error ? rengE.message : String(rengE) }
  }
}

export type RengActivoReconocido = Pick<RengActivo, 'id' | 'nombre' | 'smiles'>

export function rengReconocerActivo(rengSmiles: string): RengActivoReconocido | null {
  const rengR = rengLeer(rengSmiles)
  if ('error' in rengR) return null
  return RENG_INDICE.activos.find((rengA) => rengA.smiles !== '' && rengDesdeSmiles(rengA.smiles).idSinEstereo === rengR.g.idSinEstereo) ?? null
}

export function rengComprobarEstructura(rengSmiles: string | null, rengRef: RengActivo, rengCompleto = true): RengComprobacion {
  if (!rengSmiles) return { tipo: 'vacia', titulo: 'No hay nada que comprobar', explicacion: 'Construye la molécula en la mesa (o pon la de referencia) y selecciónala.' }
  const rengR = rengLeer(rengSmiles)
  if ('error' in rengR) {
    return /Valencia imposible/.test(rengR.error)
      ? { tipo: 'valencia', titulo: 'Valencia inválida', explicacion: `${rengR.error} Revisa los enlaces que acabas de cambiar.` }
      : { tipo: 'valencia', titulo: 'La estructura no se puede leer', explicacion: rengR.error }
  }
  const rengG = rengR.g
  const rengReconocido = rengReconocerActivo(rengSmiles)?.id
  if (!rengCompleto)
    return { tipo: 'valencia', titulo: 'Estructura incompleta', explicacion: 'Algún átomo tiene valencias libres: faltan enlaces o hidrógenos. Usa «Completar con H» o revisa los enlaces.', formula: rengG.formula, reconocido: rengReconocido }
  const rengBase = rengDesdeSmiles(rengRef.smiles)
  const rengNombre = rengRef.nombre.toLowerCase()
  if (rengG.formula !== rengBase.formula)
    return { tipo: 'distinta', titulo: 'Es otra sustancia', explicacion: `Tu estructura es ${rengG.formula}; ${rengNombre} es ${rengBase.formula}. Faltan o sobran átomos.`, formula: rengG.formula, reconocido: rengReconocido }
  if (rengG.idSinEstereo !== rengBase.idSinEstereo)
    return {
      tipo: 'enlaces-distintos',
      titulo: 'Enlaces distintos',
      explicacion: `Tiene la misma fórmula (${rengG.formula}) pero los átomos están unidos de otra manera: es un isómero, no ${rengNombre}. La fórmula no basta para identificar una molécula.`,
      formula: rengG.formula,
      reconocido: rengReconocido
    }
  if (rengBase.estereo === 'no-aplica')
    return { tipo: 'coincide', titulo: `Coincide: es ${rengNombre}`, explicacion: 'Misma conectividad, mismas cargas y sin estereoquímica que comprobar: es la molécula del principio activo.', formula: rengG.formula, reconocido: rengReconocido }
  const rengEnantiomero = rengRef.estereo?.enantiomeros?.find((rengE) => rengDesdeSmiles(rengE.smiles).id === rengG.id)
  if (rengEnantiomero)
    return {
      tipo: 'coincide-enantiomero',
      titulo: `Identificación estereoquímica completa: ${rengEnantiomero.nombre}`,
      explicacion: `Tu molécula tiene definida la configuración del estereocentro: es el ${rengEnantiomero.nombre} (PubChem CID ${rengEnantiomero.cid}). El activo de la presentación es la mezcla racémica de los dos enantiómeros, así que una sola molécula es uno de sus dos componentes.`,
      formula: rengG.formula,
      reconocido: rengReconocido
    }
  if (!rengRef.estereo?.enantiomeros?.length && rengG.id === rengBase.id)
    return { tipo: 'coincide', titulo: `Coincide: es ${rengNombre}`, explicacion: 'Misma conectividad, mismas cargas y la misma estereoquímica que la estructura de referencia (PubChem).', formula: rengG.formula, reconocido: rengReconocido }
  return {
    tipo: 'conectividad',
    titulo: 'Coincide la conectividad; estereoquímica pendiente',
    explicacion: `Los átomos están unidos como en ${rengNombre}, pero la configuración de sus estereocentros no coincide o no está definida. Eso basta para reconocer la molécula, no para identificarla en tres dimensiones.`,
    formula: rengG.formula,
    reconocido: rengReconocido
  }
}

export interface RengFragmentoComprobable {
  smiles: string | null
  completa: boolean
  formula: string
  estado: string
  ids: readonly number[]
}

export function rengComprobarFragmento(rengF: RengFragmentoComprobable | null, rengRef: RengActivo): RengComprobacion {
  if (!rengF) return rengComprobarEstructura(null, rengRef)
  if (rengF.smiles) return rengComprobarEstructura(rengF.smiles, rengRef, rengF.completa || rengF.ids.length === 1)
  if (!rengF.completa && rengF.ids.length > 1)
    return {
      tipo: 'valencia',
      titulo: 'Estructura incompleta',
      explicacion: `${rengF.estado} Algún átomo tiene valencias libres: revisa los enlaces que has cambiado o usa «Completar con H».`,
      formula: rengF.formula
    }
  const rengBase = rengDesdeSmiles(rengRef.smiles)
  return { tipo: 'distinta', titulo: 'Es otra sustancia', explicacion: `Tu estructura es ${rengF.formula}; ${rengRef.nombre.toLowerCase()} es ${rengBase.formula}. Faltan o sobran átomos.`, formula: rengF.formula }
}
