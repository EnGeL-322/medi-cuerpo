import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'paroxetina',
    nombre: 'Paroxetina',
    clase: 'Antidepresivo ISRS',
    sinonimos: [ 'paroxetine' ],
    formula: 'C19H20FNO3',
    masaMolar: 329.4,
    smiles: 'C1CNC[C@H]([C@@H]1C2=CC=C(C=C2)F)COC3=CC4=C(C=C3)OCO4',
    inchikey: 'AHOUBRCZNHFOSL-YOEHRIQHSA-N',
    cid: 43815,
    iupac: '(3S,4R)-3-(1,3-benzodioxol-5-yloxymethyl)-4-(4-fluorophenyl)piperidine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'paroxetina-oral',
      producto: 'PAXIL · comprimido recubierto',
      titular: 'APOTEX CORP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg',
      sal: {
        nombre: 'clorhidrato de paroxetina',
        ref: { f: 'dailymed-paroxetina', sec: '11 · Descripción', cita: 'paroxetine hydrochloride' }
      },
      excipientes: [
        'dibasic calcium phosphate dihydrate',
        'sodium starch glycolate type b potato',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'd&c yellow no. 10',
        'polysorbate 80',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'En adultos, la etiqueta incluye depresión mayor, trastorno obsesivo compulsivo, pánico, ansiedad social o generalizada y estrés postraumático.',
        ref: { f: 'dailymed-paroxetina', sec: '1 · Indicaciones', cita: 'PAXIL is indicated in adults' }
      },
      fuente: 'dailymed-paroxetina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de clorhidrato de paroxetina para administración oral.',
    usos: 'En adultos, la etiqueta incluye depresión mayor, trastorno obsesivo compulsivo, pánico, ansiedad social o generalizada y estrés postraumático.',
    actua: 'Se cree que su efecto se relaciona con la inhibición de la recaptación neuronal de serotonina en el sistema nervioso central.',
    recorrido: 'La comida cambió poco la exposición total en el estudio, pero aumentó el pico plasmático un 29 %. En el estudio con solución oral, se recuperó un 64 % en orina y aproximadamente un 36 % en heces durante diez días, sobre todo como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere PAXIL por vía oral.',
      ocurre: 'La ficha corresponde al comprimido oral de PAXIL. La etiqueta distingue esta presentación de la suspensión oral.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha corresponde al comprimido oral de PAXIL. La etiqueta distingue esta presentación de la suspensión oral.',
          ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'the tablets and oral suspension' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La comida cambió poco la exposición total en el estudio, pero aumentó el pico plasmático un 29 %.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La comida cambió poco la exposición total en el estudio, pero aumentó el pico plasmático un 29 %.',
          ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'the C max was 29% greater' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La paroxetina se distribuye por el cuerpo, incluido el sistema nervioso central. En las concentraciones estudiadas, una gran fracción se une a proteínas plasmáticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La paroxetina se distribuye por el cuerpo, incluido el sistema nervioso central. En las concentraciones estudiadas, una gran fracción se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'throughout the body, including the CNS' }
        }
      ],
      accion: {
        diana: 'Recaptación neuronal de serotonina',
        efecto: 'Se cree que su efecto se relaciona con la inhibición de la recaptación neuronal de serotonina en el sistema nervioso central.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que su efecto se relaciona con la inhibición de la recaptación neuronal de serotonina en el sistema nervioso central.',
            ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'inhibition of neuronal reuptake of serotonin' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se metaboliza extensamente. CYP2D6 participa en la transformación y predominan los conjugados de glucurónido y sulfato.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se metaboliza extensamente. CYP2D6 participa en la transformación y predominan los conjugados de glucurónido y sulfato.',
          ref: {
            f: 'dailymed-paroxetina',
            sec: '12 · Farmacología clínica',
            cita: 'Conjugates with glucuronic acid and sulfate predominate'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio con solución oral, se recuperó un 64 % en orina y aproximadamente un 36 % en heces durante diez días, sobre todo como metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio con solución oral, se recuperó un 64 % en orina y aproximadamente un 36 % en heces durante diez días, sobre todo como metabolitos.',
          ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'was excreted in the urine with 2%' },
          alcance: 'otra-presentacion',
          condiciones: 'Estudio con solución oral, no con este comprimido'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida media en equilibrio con comprimidos',
      valor: '21',
      unidad: 'h',
      condiciones: 'Tras 30 días en el estudio de comprimidos',
      ref: { f: 'dailymed-paroxetina', sec: '12 · Farmacología clínica', cita: 'approximately 21 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-paroxetina', 'ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e', 'PAXIL (PAROXETINE HYDROCHLORIDE) TABLET, FILM COATED', 'PAXIL', '13', '2026-10-01', '2026-11-10'),
    rengPubchem(43815, 'paroxetine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
