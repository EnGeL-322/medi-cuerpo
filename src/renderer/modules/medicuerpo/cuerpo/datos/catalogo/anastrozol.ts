import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'anastrozol',
    nombre: 'Anastrozol',
    clase: 'Inhibidor de la aromatasa',
    sinonimos: [ 'anastrozole' ],
    formula: 'C17H19N5',
    masaMolar: 293.4,
    smiles: 'CC(C)(C#N)C1=CC(=CC(=C1)CN2C=NC=N2)C(C)(C)C#N',
    inchikey: 'YBBLVLTVTVSKRW-UHFFFAOYSA-N',
    cid: 2187,
    iupac: '2-[3-(2-cyanopropan-2-yl)-5-(1,2,4-triazol-1-ylmethyl)phenyl]-2-methylpropanenitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'anastrozol-oral',
      producto: 'ARIMIDEX · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1 mg',
      excipientes: [
        'lactose monohydrate',
        'magnesium stearate',
        'hypromellose, unspecified',
        'polyethylene glycol 300',
        'povidone, unspecified',
        'sodium starch glycolate type a potato',
        'titanium dioxide'
      ],
      usos: {
        t: 'Determinados cánceres de mama hormonodependientes en mujeres posmenopáusicas.',
        ref: { f: 'dailymed-anastrozol', sec: '1 · Indicaciones', cita: 'hormone receptor-positive early breast cancer', codigo: '34067-9' }
      },
      fuente: 'dailymed-anastrozol'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con anastrozol como ingrediente activo.',
    usos: 'Determinados cánceres de mama hormonodependientes en mujeres posmenopáusicas.',
    actua: 'Al inhibir la aromatasa, disminuye la producción de estrógenos a partir de andrógenos.',
    recorrido: 'Se absorbe rápidamente. En ayunas suele alcanzar el máximo plasmático en unas dos horas. La semivida media de eliminación es de 50 horas. El metabolismo hepático contribuye más al aclaramiento que la eliminación renal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'ARIMIDEX se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'ARIMIDEX se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-anastrozol',
            sec: '3 · Forma farmacéutica',
            cita: 'STRENGTHS The tablets are white, biconvex, film-coated',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Se absorbe rápidamente. En ayunas suele alcanzar el máximo plasmático en unas dos horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Se absorbe rápidamente. En ayunas suele alcanzar el máximo plasmático en unas dos horas.',
          ref: { f: 'dailymed-anastrozol', sec: '12.3 · Farmacocinética', cita: 'within 2 hours of dosing', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 40 % se une a proteínas plasmáticas en el intervalo terapéutico.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 40 % se une a proteínas plasmáticas en el intervalo terapéutico.',
          ref: { f: 'dailymed-anastrozol', sec: '12.3 · Farmacocinética', cita: '40% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Aromatasa',
        efecto: 'Al inhibir la aromatasa, disminuye la producción de estrógenos a partir de andrógenos.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Al inhibir la aromatasa, disminuye la producción de estrógenos a partir de andrógenos.',
            ref: {
              f: 'dailymed-anastrozol',
              sec: '12.1 · Mecanismo',
              cita: 'aromatase enzyme, which converts adrenal androgens',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Sufre desalquilación, hidroxilación y glucuronidación. El triazol, su principal metabolito circulante, carece de actividad farmacológica.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Sufre desalquilación, hidroxilación y glucuronidación. El triazol, su principal metabolito circulante, carece de actividad farmacológica.',
          ref: { f: 'dailymed-anastrozol', sec: '12.3 · Farmacocinética', cita: 'triazole, lacks pharmacologic activity', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Triazol',
          actividad: 'inactivo',
          ref: { f: 'dailymed-anastrozol', sec: '12.3 · Farmacocinética', cita: 'triazole, lacks pharmacologic activity', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La semivida media de eliminación es de 50 horas. El metabolismo hepático contribuye más al aclaramiento que la eliminación renal.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La semivida media de eliminación es de 50 horas. El metabolismo hepático contribuye más al aclaramiento que la eliminación renal.',
          ref: {
            f: 'dailymed-anastrozol',
            sec: '12.3 · Farmacocinética',
            cita: 'elimination half-life of anastrozole is 50 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-anastrozol', 'acbfaaa9-503c-4691-9828-76a7146ed6de', 'ARIMIDEX (ANASTROZOLE) TABLET', 'ARIMIDEX', '12', '2026-03-05', '2026-11-10'),
    rengPubchem(2187, 'anastrozole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
