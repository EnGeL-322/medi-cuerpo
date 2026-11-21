import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'doxazosina',
    nombre: 'Doxazosina',
    clase: 'Antagonista adrenérgico alfa-1',
    sinonimos: [ 'doxazosin' ],
    formula: 'C23H25N5O5',
    masaMolar: 451.5,
    smiles: 'COC1=C(C=C2C(=C1)C(=NC(=N2)N3CCN(CC3)C(=O)C4COC5=CC=CC=C5O4)N)OC',
    inchikey: 'RUZYUOTYCVRMRZ-UHFFFAOYSA-N',
    cid: 3157,
    iupac: '[4-(4-amino-6,7-dimethoxyquinazolin-2-yl)piperazin-1-yl]-(2,3-dihydro-1,4-benzodioxin-3-yl)methanone',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'doxazosina-oral',
      producto: 'Cardura · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1 mg',
      excipientes: [
        'microcrystalline cellulose',
        'lactose, unspecified form',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'sodium lauryl sulfate'
      ],
      usos: {
        t: 'Síntomas de hiperplasia prostática benigna e hipertensión según la etiqueta.',
        ref: {
          f: 'dailymed-doxazosina',
          sec: '1 · Indicaciones',
          cita: 'Signs and symptoms of Benign Prostatic Hyperplasia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-doxazosina',
      sal: {
        nombre: 'mesilato de doxazosina',
        ref: { f: 'dailymed-doxazosina', sec: '3 · Forma farmacéutica', cita: 'doxazosin mesylate', codigo: '43678-2' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con mesilato de doxazosina como ingrediente activo.',
    usos: 'Síntomas de hiperplasia prostática benigna e hipertensión según la etiqueta.',
    actua: 'Bloquea receptores alfa-1. En la vía urinaria, reduce la resistencia al paso de la orina.',
    recorrido: 'El pico plasmático del comprimido llega aproximadamente a las 2–3 horas. El primer paso reduce su biodisponibilidad. La semivida terminal es de unas 22 horas. Solo una pequeña fracción se recuperó intacta en heces en el estudio citado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Cardura se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Cardura se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-doxazosina',
            sec: '3 · Forma farmacéutica',
            cita: '(white). Each tablet contains doxazosin mesylate equivalent',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El pico plasmático del comprimido llega aproximadamente a las 2–3 horas. El primer paso reduce su biodisponibilidad.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El pico plasmático del comprimido llega aproximadamente a las 2–3 horas. El primer paso reduce su biodisponibilidad.',
          ref: {
            f: 'dailymed-doxazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma levels of CARDURA occur at about 2-3 hours',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 98 % de la doxazosina circulante se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 98 % de la doxazosina circulante se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-doxazosina', sec: '12.3 · Farmacocinética', cita: '98% of the circulating drug is bound', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico alfa-1',
        efecto: 'Bloquea receptores alfa-1. En la vía urinaria, reduce la resistencia al paso de la orina.',
        lugar: [ 'prostata', 'vias-urinarias' ],
        datos: [
          {
            t: 'Bloquea receptores alfa-1. En la vía urinaria, reduce la resistencia al paso de la orina.',
            ref: { f: 'dailymed-doxazosina', sec: '12.1 · Mecanismo', cita: 'decreases urethral resistance', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente en el hígado mediante desmetilación e hidroxilación, entre otras vías.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente en el hígado mediante desmetilación e hidroxilación, entre otras vías.',
          ref: {
            f: 'dailymed-doxazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'CARDURA is extensively metabolized in the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La semivida terminal es de unas 22 horas. Solo una pequeña fracción se recuperó intacta en heces en el estudio citado.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La semivida terminal es de unas 22 horas. Solo una pequeña fracción se recuperó intacta en heces en el estudio citado.',
          ref: {
            f: 'dailymed-doxazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'terminal elimination half-life of about 22 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-doxazosina', '5e1f5e49-2da1-43ab-9795-228a8bcc5a82', 'CARDURA (DOXAZOSIN) TABLET', 'Cardura', '3', '2026-07-16', '2026-11-10'),
    rengPubchem(3157, 'doxazosin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
