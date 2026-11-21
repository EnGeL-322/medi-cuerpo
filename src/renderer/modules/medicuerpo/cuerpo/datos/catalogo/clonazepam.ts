import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clonazepam',
    nombre: 'Clonazepam',
    clase: 'Benzodiazepina',
    sinonimos: [ 'clonazepam' ],
    formula: 'C15H10ClN3O3',
    masaMolar: 315.71,
    smiles: 'C1C(=O)NC2=C(C=C(C=C2)[N+](=O)[O-])C(=N1)C3=CC=CC=C3Cl',
    inchikey: 'DGBIGWXXNGSACT-UHFFFAOYSA-N',
    cid: 2802,
    iupac: '5-(2-chlorophenyl)-7-nitro-1,3-dihydro-1,4-benzodiazepin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'clonazepam-oral',
      producto: 'Klonopin · comprimido',
      titular: 'H2-PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [ 'lactose, unspecified form', 'magnesium stearate', 'microcrystalline cellulose', 'starch, corn', 'fd&c yellow no. 6' ],
      usos: {
        t: 'Determinados trastornos convulsivos y trastorno de pánico según la etiqueta.',
        ref: { f: 'dailymed-clonazepam', sec: '1 · Indicaciones', cita: 'treatment of the Lennox-Gastaut syndrome', codigo: '34067-9' }
      },
      fuente: 'dailymed-clonazepam'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con clonazepam como ingrediente activo.',
    usos: 'Determinados trastornos convulsivos y trastorno de pánico según la etiqueta.',
    actua: 'El mecanismo clínico exacto es desconocido. La etiqueta lo relaciona con el aumento de la actividad del neurotransmisor inhibidor GABA.',
    recorrido: 'Se absorbe rápidamente y la biodisponibilidad absoluta es cercana al 90 %. El pico llega entre una y cuatro horas. Menos del 2 % se recupera en orina como clonazepam intacto. La semivida de eliminación suele situarse entre 30 y 40 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Klonopin se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Klonopin se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-clonazepam', sec: '11 · Descripción', cita: 'as scored tablets with a K-shaped perforation', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Se absorbe rápidamente y la biodisponibilidad absoluta es cercana al 90 %. El pico llega entre una y cuatro horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Se absorbe rápidamente y la biodisponibilidad absoluta es cercana al 90 %. El pico llega entre una y cuatro horas.',
          ref: {
            f: 'dailymed-clonazepam',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of clonazepam is about 90%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Aproximadamente el 85 % se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Aproximadamente el 85 % se une a proteínas plasmáticas.',
          ref: {
            f: 'dailymed-clonazepam',
            sec: '12.3 · Farmacocinética',
            cita: 'Clonazepam is approximately 85% bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'El mecanismo clínico exacto es desconocido. La etiqueta lo relaciona con el aumento de la actividad del neurotransmisor inhibidor GABA.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'El mecanismo clínico exacto es desconocido. La etiqueta lo relaciona con el aumento de la actividad del neurotransmisor inhibidor GABA.',
            ref: {
              f: 'dailymed-clonazepam',
              sec: '12.2 · Farmacodinámica',
              cita: 'enhance the activity of gamma aminobutyric acid',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente. Predomina la reducción de su grupo nitro, seguida de otras reacciones.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente. Predomina la reducción de su grupo nitro, seguida de otras reacciones.',
          ref: { f: 'dailymed-clonazepam', sec: '12.3 · Farmacocinética', cita: 'reduction of the 7-nitro group', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Menos del 2 % se recupera en orina como clonazepam intacto. La semivida de eliminación suele situarse entre 30 y 40 horas.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Menos del 2 % se recupera en orina como clonazepam intacto. La semivida de eliminación suele situarse entre 30 y 40 horas.',
          ref: {
            f: 'dailymed-clonazepam',
            sec: '12.3 · Farmacocinética',
            cita: 'less than 2% unchanged clonazepam being excreted',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-clonazepam', 'cfa0d79a-843c-4b88-95a1-e9511d649ca1', 'KLONOPIN (CLONAZEPAM) TABLET', 'Klonopin', '6', '2025-12-02', '2026-11-10'),
    rengPubchem(2802, 'clonazepam', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
