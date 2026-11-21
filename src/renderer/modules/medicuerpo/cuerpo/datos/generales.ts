import type { RengDato, RengFuente } from './modelo'

const RENG_MSD = 'Manual MSD, versión para profesionales'
const RENG_URL = 'https://www.msdmanuals.com/professional/clinical-pharmacology/pharmacokinetics/'
const rengConsultado = '2026-11-09'

export const RENG_FUENTES_GENERALES: RengFuente[] = [
  { id: 'msd-absorcion', tipo: 'manual', titulo: 'Drug Absorption (absorción de los fármacos)', organismo: RENG_MSD, url: `${RENG_URL}drug-absorption`, fecha: '2026-08', consultado: rengConsultado },
  { id: 'msd-biodisponibilidad', tipo: 'manual', titulo: 'Drug Bioavailability (biodisponibilidad)', organismo: RENG_MSD, url: `${RENG_URL}drug-bioavailability`, fecha: '2026-08', consultado: rengConsultado },
  { id: 'msd-metabolismo', tipo: 'manual', titulo: 'Drug Metabolism (metabolismo de los fármacos)', organismo: RENG_MSD, url: `${RENG_URL}drug-metabolism`, fecha: '2026-08', consultado: rengConsultado },
  { id: 'msd-excrecion', tipo: 'manual', titulo: 'Drug Excretion (excreción de los fármacos)', organismo: RENG_MSD, url: `${RENG_URL}drug-excretion`, fecha: '2026-08', consultado: rengConsultado }
]

export const RENG_GENERAL = {
  disgregar: {
    t: 'Para absorberse, un fármaco tiene que estar disuelto: las formas sólidas, como los comprimidos, deben disgregarse primero.',
    ref: { f: 'msd-absorcion', sec: 'Drug Absorption', cita: 'drugs must be in solution to be absorbed. Thus, solid forms (eg, tablets) must be able to disintegrate and deaggregate' },
    alcance: 'general'
  },
  intestino: {
    t: 'Sea el fármaco ácido o básico, la mayor parte de la absorción ocurre en el intestino delgado, por su gran superficie y sus membranas más permeables.',
    ref: { f: 'msd-absorcion', sec: 'Drug Absorption', cita: 'most absorption occurs in the small intestine because the surface area is larger and membranes are more permeable' },
    alcance: 'general'
  },
  portal: {
    t: 'Lo que se toma por boca atraviesa la pared intestinal y luego la circulación portal hasta el hígado antes de llegar a la circulación general; ambos son lugares frecuentes de metabolismo de primer paso.',
    ref: { f: 'msd-biodisponibilidad', sec: 'Causes of low bioavailability', cita: 'Orally administered drugs must pass through the intestinal wall and then the portal circulation to the liver; both are common sites of first-pass metabolism' },
    alcance: 'general'
  },
  higado: {
    t: 'El hígado es el lugar principal del metabolismo de los fármacos.',
    ref: { f: 'msd-metabolismo', sec: 'Drug Metabolism', cita: 'The liver is the principal site of drug metabolism' },
    alcance: 'general'
  },
  rinon: {
    t: 'Los riñones son los órganos principales para eliminar las sustancias solubles en agua; la vía biliar también contribuye.',
    ref: { f: 'msd-excrecion', sec: 'Drug Excretion', cita: 'The kidneys are the principal organs for excreting water-soluble substances. The biliary system also contributes to drug excretion' },
    alcance: 'general'
  }
} satisfies Record<string, RengDato>
