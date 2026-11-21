import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'etodolaco',
    nombre: 'Etodolaco',
    clase: 'Antiinflamatorio no esteroideo',
    sinonimos: [ 'etodolaco', 'etodolac' ],
    formula: 'C17H21NO3',
    masaMolar: 287.35,
    smiles: 'CCC1=C2C(=CC=C1)C3=C(N2)C(OCC3)(CC)CC(=O)O',
    inchikey: 'NNYBQONXHNTVIJ-UHFFFAOYSA-N',
    cid: 3308,
    iupac: '2-(1,8-diethyl-4,9-dihydro-3H-pyrano[3,4-b]indol-1-yl)acetic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'etodolaco-oral',
      producto: 'Etodolac · comprimido recubierto con película',
      titular: 'APOTEX CORP.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400 mg o 500 mg por comprimido, según la etiqueta',
      excipientes: [
        'crospovidone (120 .mu.m)',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose 2208 (100 mpa.s)',
        'magnesium stearate',
        'methylcellulose (100 mpa.s)',
        'polyethylene glycol 1600',
        'titanium dioxide'
      ],
      usos: {
        t: 'Alivio de los signos y síntomas de artrosis y artritis reumatoide, además del dolor agudo según la etiqueta.',
        ref: {
          f: 'dailymed-etodolaco',
          sec: '1 · Indicaciones',
          cita: 'in the management of signs and symptoms of the following: Osteoarthritis Rheumatoid arthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-etodolaco',
      reacciones: [
        [ 'Dolor abdominal y dispepsia.', '34084-4', 'abdominal pain, constipation, diarrhea, dyspepsia' ],
        [
          'Náuseas y vómitos, entre los eventos gastrointestinales descritos.',
          '34084-4',
          'heartburn, nausea, GI ulcers (gastric/duodenal), vomiting'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 400 mg o 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio de los signos y síntomas de artrosis y artritis reumatoide, además del dolor agudo según la etiqueta.',
    actua: 'Su efecto se asocia con la inhibición de la síntesis de prostaglandinas. La ficha indica que el mecanismo completo no se conoce.',
    recorrido: 'Se absorbe tras tomarlo. En los estudios descritos el pico ocurrió a los 80 ± 30 minutos. La comida puede retrasarlo. La ficha informa que alrededor del 72 % se recupera por orina, principalmente como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral recubierto con película de etodolaco.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral recubierto con película de etodolaco.',
          ref: { f: 'dailymed-etodolaco', sec: '11 · Descripción', cita: 'each tablet contains the following inactive ingredients', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe tras tomarlo. En los estudios descritos el pico ocurrió a los 80 ± 30 minutos. La comida puede retrasarlo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe tras tomarlo. En los estudios descritos el pico ocurrió a los 80 ± 30 minutos. La comida puede retrasarlo.',
          ref: { f: 'dailymed-etodolaco', sec: '12.3 · Farmacocinética', cita: 'are reached in 80 ± 30 minutes', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Circula unido principalmente a proteínas plasmáticas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Circula unido principalmente a proteínas plasmáticas.',
          ref: { f: 'dailymed-etodolaco', sec: '12.3 · Farmacocinética', cita: 'bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Síntesis de prostaglandinas',
        efecto: 'Su efecto se asocia con la inhibición de la síntesis de prostaglandinas. La ficha indica que el mecanismo completo no se conoce.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Su efecto se asocia con la inhibición de la síntesis de prostaglandinas. La ficha indica que el mecanismo completo no se conoce.',
            ref: {
              f: 'dailymed-etodolaco',
              sec: '12.2 · Farmacodinámica',
              cita: 'may be related to prostaglandin synthetase inhibition',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se forman derivados hidroxilados y glucurónidos de etodolaco.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se forman derivados hidroxilados y glucurónidos de etodolaco.',
          ref: {
            f: 'dailymed-etodolaco',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolites include 6-, 7-, and 8-hydroxylated-etodolac and etodolac glucuronide',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La ficha informa que alrededor del 72 % se recupera por orina, principalmente como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La ficha informa que alrededor del 72 % se recupera por orina, principalmente como metabolitos.',
          ref: {
            f: 'dailymed-etodolaco',
            sec: '12.3 · Farmacocinética',
            cita: '72% of the dose excreted into urine as parent drug plus metabolite',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico, media y desviación estándar',
      valor: '80 ± 30',
      unidad: 'min',
      analito: 'etodolaco',
      condiciones: 'dosis orales únicas de 200–600 mg estudiadas',
      ref: { f: 'dailymed-etodolaco', sec: '12.3 · Farmacocinética', cita: 'are reached in 80 ± 30 minutes', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-etodolaco', '4d682f98-1e8a-4c2b-6df3-169d2ed10dc1', 'ETODOLAC TABLET, FILM COATED', 'Etodolac', '17', '2026-10-15', '2026-11-12'),
    rengPubchem(3308, 'etodolaco', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
