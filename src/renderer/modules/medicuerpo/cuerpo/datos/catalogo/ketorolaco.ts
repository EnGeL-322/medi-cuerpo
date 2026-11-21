import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ketorolaco',
    nombre: 'Ketorolaco',
    clase: 'Antiinflamatorio no esteroideo',
    sinonimos: [ 'ketorolaco', 'ketorolac' ],
    formula: 'C15H13NO3',
    masaMolar: 255.27,
    smiles: 'C1CN2C(=CC=C2C(=O)C3=CC=CC=C3)C1C(=O)O',
    inchikey: 'OZWKMVRBQXNZKK-UHFFFAOYSA-N',
    cid: 3826,
    iupac: '5-benzoyl-2,3-dihydro-1H-pyrrolizine-1-carboxylic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'ketorolaco-oral',
      producto: 'ketorolac tromethamine · comprimido recubierto con película',
      titular: 'ZYDUS LIFESCIENCES LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Trometamol de ketorolaco',
        ref: { f: 'dailymed-ketorolaco', sec: '11 · Descripción', cita: 'Ketorolac tromethamine', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'polyethylene glycol 8000'
      ],
      usos: {
        t: 'La presentación oral está indicada para continuar el tratamiento breve del dolor agudo moderadamente intenso tras la administración intravenosa o intramuscular.',
        ref: { f: 'dailymed-ketorolaco', sec: '1 · Indicaciones', cita: 'used only as continuation treatment, if necessary', codigo: '34067-9' }
      },
      fuente: 'dailymed-ketorolaco',
      reacciones: [
        [ 'Dolor abdominal y dispepsia.', '34084-4', 'abdominal pain Incidence greater than 10% constipation/diarrhea dyspepsia' ],
        [ 'Estreñimiento o diarrea.', '34084-4', 'constipation/diarrhea dyspepsia flatulence' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg por comprimido, según la etiqueta; el activo va como trometamol de ketorolaco. Los excipientes no son el principio activo.',
    usos: 'La presentación oral está indicada para continuar el tratamiento breve del dolor agudo moderadamente intenso tras la administración intravenosa o intramuscular.',
    actua: 'Inhibe la síntesis de prostaglandinas. La actividad analgésica del racemato se atribuye al enantiómero S según la ficha.',
    recorrido: 'Se absorbe por vía oral. Una comida con alto contenido de grasa retrasó el pico aproximadamente una hora y redujo su altura. La vía de eliminación principal es renal. En orina se detectan metabolitos y ketorolaco sin transformar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral de ketorolaco trometamol.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral de ketorolaco trometamol.',
          ref: { f: 'dailymed-ketorolaco', sec: '11 · Descripción', cita: 'Ketorolac tromethamine tablets, USP are a member', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por vía oral. Una comida con alto contenido de grasa retrasó el pico aproximadamente una hora y redujo su altura.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por vía oral. Una comida con alto contenido de grasa retrasó el pico aproximadamente una hora y redujo su altura.',
          ref: {
            f: 'dailymed-ketorolaco',
            sec: '12.3 · Farmacocinética',
            cita: 'decreased peak and delayed time-to-peak concentrations',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La mezcla de enantiómeros presenta unión a proteínas cercana al 99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La mezcla de enantiómeros presenta unión a proteínas cercana al 99 %.',
          ref: { f: 'dailymed-ketorolaco', sec: '12.3 · Farmacocinética', cita: 'has been shown to be highly protein bound (99%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Síntesis de prostaglandinas',
        efecto: 'Inhibe la síntesis de prostaglandinas. La actividad analgésica del racemato se atribuye al enantiómero S según la ficha.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Inhibe la síntesis de prostaglandinas. La actividad analgésica del racemato se atribuye al enantiómero S según la ficha.',
            ref: { f: 'dailymed-ketorolaco', sec: '12.2 · Farmacodinámica', cita: 'related to prostaglandin synthetase inhibition', codigo: '43681-6' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma principalmente en el hígado en derivados hidroxilados y conjugados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente en el hígado en derivados hidroxilados y conjugados.',
          ref: { f: 'dailymed-ketorolaco', sec: '12.3 · Farmacocinética', cita: 'largely metabolized in the liver', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía de eliminación principal es renal. En orina se detectan metabolitos y ketorolaco sin transformar.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía de eliminación principal es renal. En orina se detectan metabolitos y ketorolaco sin transformar.',
          ref: {
            f: 'dailymed-ketorolaco',
            sec: '12.3 · Farmacocinética',
            cita: 'principal route of elimination of ketorolac and its metabolites is renal',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'orina',
      nombre: 'Recuperación urinaria total',
      valor: '≈92',
      unidad: '% de la dosis',
      analito: 'ketorolaco y metabolitos',
      ref: { f: 'dailymed-ketorolaco', sec: '12.3 · Farmacocinética', cita: 'About 92% of a given dose is found in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ketorolaco', '5a4192e8-d9e5-4f09-99f6-da5a648b1aac', 'KETOROLAC TROMETHAMINE TABLET, FILM COATED', 'ketorolac tromethamine', '5', '2026-11-04', '2026-11-12'),
    rengPubchem(3826, 'ketorolaco', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
