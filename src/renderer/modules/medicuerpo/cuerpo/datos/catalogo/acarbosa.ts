import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acarbosa',
    nombre: 'Acarbosa',
    clase: 'Inhibidor intestinal de alfa-glucosidasas',
    sinonimos: [ 'acarbose' ],
    formula: 'C25H43NO18',
    masaMolar: 645.6,
    smiles: 'C[C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O[C@@H]2[C@H](O[C@@H]([C@@H]([C@H]2O)O)O[C@H]([C@@H](CO)O)[C@@H]([C@H](C=O)O)O)CO)O)O)N[C@H]3C=C([C@H]([C@@H]([C@H]3O)O)O)CO',
    inchikey: 'CEMXHAPUFJOOSV-XGWNLRGSSA-N',
    cid: 9811704,
    iupac: '(2R,3R,4R,5R)-4-[(2R,3R,4R,5S,6R)-5-[(2R,3R,4S,5S,6R)-3,4-dihydroxy-6-methyl-5-[[(1S,4R,5S,6S)-4,5,6-trihydroxy-3-(hydroxymethyl)cyclohex-2-en-1-yl]amino]oxan-2-yl]oxy-3,4-dihydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-2,3,5,6-tetrahydroxyhexanal',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'acarbosa-oral',
      producto: 'Acarbose · comprimido',
      titular: 'STRIDES PHARMA SCIENCE LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [ 'starch, corn', 'cellulose, microcrystalline', 'magnesium stearate', 'silicon dioxide' ],
      usos: {
        t: 'Ayuda a controlar la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
        ref: { f: 'dailymed-acarbosa', sec: '1 · Indicaciones', cita: 'improve glycemic control in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-acarbosa'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con acarbosa como ingrediente activo.',
    usos: 'Ayuda a controlar la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
    actua: 'Inhibe enzimas que digieren carbohidratos en el intestino y atenúa la subida de glucosa tras la comida.',
    recorrido: 'En el estudio oral se absorbió menos del 2 % de la dosis como acarbosa activa. Parte del material no absorbido sale por las heces. El riñón elimina la pequeña fracción absorbida como acarbosa intacta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Acarbose se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Acarbose se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-acarbosa',
            sec: '11 · Descripción',
            cita: 'DESCRIPTION Acarbose Tablets are an oral alpha-glucosidase',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral se absorbió menos del 2 % de la dosis como acarbosa activa.',
      sigue: 'La mayor parte permanece en la luz intestinal.',
      datos: [
        {
          t: 'En el estudio oral se absorbió menos del 2 % de la dosis como acarbosa activa.',
          ref: { f: 'dailymed-acarbosa', sec: '12.3 · Farmacocinética', cita: 'less than 2% of an oral dose of acarbose', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'luz-intestinal' ],
      llega: 'La mayor parte sigue en el tubo digestivo.',
      ocurre: 'El efecto se concentra en el tubo digestivo. La baja disponibilidad en sangre concuerda con esa acción local.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El efecto se concentra en el tubo digestivo. La baja disponibilidad en sangre concuerda con esa acción local.',
          ref: {
            f: 'dailymed-acarbosa',
            sec: '12.3 · Farmacocinética',
            cita: 'acarbose acts locally within the gastrointestinal tract',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Alfa-amilasa y alfa-glucosidasas intestinales',
        efecto: 'Inhibe enzimas que digieren carbohidratos en el intestino y atenúa la subida de glucosa tras la comida.',
        lugar: [ 'intestino-delgado' ],
        datos: [
          {
            t: 'Inhibe enzimas que digieren carbohidratos en el intestino y atenúa la subida de glucosa tras la comida.',
            ref: {
              f: 'dailymed-acarbosa',
              sec: '12.1 · Mecanismo',
              cita: 'reversible inhibition of pancreatic alpha-amylase',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'luz-intestinal' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Las bacterias intestinales y las enzimas digestivas forman metabolitos en el tubo digestivo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Las bacterias intestinales y las enzimas digestivas forman metabolitos en el tubo digestivo.',
          ref: { f: 'dailymed-acarbosa', sec: '12.3 · Farmacocinética', cita: 'principally by intestinal bacteria', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Parte del material no absorbido sale por las heces. El riñón elimina la pequeña fracción absorbida como acarbosa intacta.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Parte del material no absorbido sale por las heces. El riñón elimina la pequeña fracción absorbida como acarbosa intacta.',
          ref: { f: 'dailymed-acarbosa', sec: '12.3 · Farmacocinética', cita: 'almost completely excreted by the kidneys', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-acarbosa', '656769ee-e292-4950-83df-a38e6b1a9d6e', 'ACARBOSE TABLET', 'Acarbose', '10', '2026-07-16', '2026-11-10'),
    rengPubchem(9811704, 'acarbose', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
