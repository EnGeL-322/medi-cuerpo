import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'futibatinib',
    nombre: 'Futibatinib',
    clase: 'Inhibidor covalente de FGFR1, 2, 3 y 4',
    sinonimos: [ 'futibatinib', 'Lytgobi' ],
    formula: 'C22H22N6O3',
    masaMolar: 418.4,
    smiles: 'COC1=CC(=CC(=C1)C#CC2=NN(C3=NC=NC(=C23)N)[C@H]4CCN(C4)C(=O)C=C)OC',
    inchikey: 'KEIPNCCJPRMIAX-HNNXBMFYSA-N',
    cid: 71621331,
    iupac: '1-[(3S)-3-[4-amino-3-[2-(3,5-dimethoxyphenyl)ethynyl]pyrazolo[3,4-d]pyrimidin-1-yl]pyrrolidin-1-yl]prop-2-en-1-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'futibatinib-oral',
      producto: 'LYTGOBI · comprimido',
      titular: 'TAIHO PHARMACEUTICAL CO., LTD.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '4 mg o 16 mg por comprimido, según la etiqueta',
      excipientes: [
        'starch, corn',
        'crospovidone, unspecified',
        'hydroxypropyl cellulose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'mannitol',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'hypromellose, unspecified',
        'polyethylene glycol, unspecified',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con colangiocarcinoma intrahepático avanzado ya tratado con fusiones u otras reordenaciones del gen FGFR2.',
        ref: {
          f: 'dailymed-futibatinib',
          sec: '1 · Indicaciones',
          cita: 'unresectable, locally advanced or metastatic intrahepatic cholangiocarcinoma harboring fibroblast growth factor receptor 2 (FGFR2) gene fusions or other rearrangements',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-futibatinib',
      advertencias: [
        {
          titulo: 'Desprendimiento seroso de retina',
          texto: 'Hacer una exploración oftalmológica completa con tomografía de coherencia óptica antes de empezar y periódicamente.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-futibatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Perform a comprehensive ophthalmological examination including optical coherence tomography (OCT) prior to initiation of therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperfosfatemia',
          texto: 'Vigilar el fósforo durante todo el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-futibatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for hyperphosphatemia throughout treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): toxicidad ungueal, dolor musculoesquelético, estreñimiento, diarrea, fatiga, boca seca, alopecia, estomatitis, dolor abdominal y piel seca, entre otras.',
          '34084-4',
          'Most common (≥20%) adverse reactions were nail toxicity, musculoskeletal pain, constipation, diarrhea, fatigue, dry mouth, alopecia, stomatitis, abdominal pain, dry skin'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 4 mg o 16 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con colangiocarcinoma intrahepático avanzado ya tratado con fusiones u otras reordenaciones del gen FGFR2.',
    actua: 'Inhibe las cinasas FGFR1, 2, 3 y 4 uniéndose a ellas de forma covalente, y bloquea su señalización en células tumorales con alteraciones de FGFR.',
    recorrido: 'La mediana del tiempo hasta el pico es de 2 horas; con una comida rica en grasas la Cmax bajó un 42 % sin cambios relevantes del AUC. Tras 20 mg marcados, alrededor del 91 % de la dosis se recuperó en las heces y el 9 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '3 · Formas y concentraciones',
            cita: 'round, white, film-coated tablets debossed with',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de 2 horas; con una comida rica en grasas la Cmax bajó un 42 % sin cambios relevantes del AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 2 horas; con una comida rica en grasas la Cmax bajó un 42 % sin cambios relevantes del AUC.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Futibatinib median (min, max) time to maximum plasma concentration (T max ) is 2 hours (1.2, 23 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 42 % sin diferencias relevantes del AUC.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Futibatinib C max decreased by 42% with no clinically significant differences in AUC in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 95 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución aparente es de 66 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 95 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución aparente es de 66 L.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Futibatinib plasma protein binding is 95%, primarily to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 66 L.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent (oral) volume of distribution is 66 L (18%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'FGFR1-4',
        efecto: 'Inhibe las cinasas FGFR1, 2, 3 y 4 uniéndose a ellas de forma covalente, y bloquea su señalización en células tumorales con alteraciones de FGFR.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas FGFR1, 2, 3 y 4 uniéndose a ellas de forma covalente, y bloquea su señalización en células tumorales con alteraciones de FGFR.',
            ref: {
              f: 'dailymed-futibatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Futibatinib is a small molecule kinase inhibitor of FGFR 1, 2, 3, and 4 with IC 50 values of less than 4 nM',
              codigo: '43679-0'
            }
          },
          {
            t: 'Se une de forma covalente al FGFR.',
            ref: { f: 'dailymed-futibatinib', sec: '12.1 · Mecanismo de acción', cita: 'Futibatinib covalently binds FGFR', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A y, en menor medida, por la CYP2C9 y la CYP2D6.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A y, en menor medida, por la CYP2C9 y la CYP2D6.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Futibatinib is primarily metabolized by CYP3A and to a lesser extent by CYP2C9 and CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 20 mg marcados, alrededor del 91 % de la dosis se recuperó en las heces y el 9 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 20 mg marcados, alrededor del 91 % de la dosis se recuperó en las heces y el 9 % en la orina.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 91% of the dose was recovered in feces and 9% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 2,9 horas y el aclaramiento aparente, de 20 L/h.',
          ref: {
            f: 'dailymed-futibatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Futibatinib elimination half-life is 2.9 hours (27%) with an apparent (oral) clearance of 20 L/hr (23%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '2',
      unidad: 'h',
      analito: 'futibatinib',
      ref: {
        f: 'dailymed-futibatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Futibatinib median (min, max) time to maximum plasma concentration (T max ) is 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95',
      unidad: '%',
      analito: 'futibatinib',
      ref: { f: 'dailymed-futibatinib', sec: '12.3 · Farmacocinética', cita: 'Futibatinib plasma protein binding is 95%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '66',
      unidad: 'L',
      analito: 'futibatinib',
      ref: { f: 'dailymed-futibatinib', sec: '12.3 · Farmacocinética', cita: 'The apparent (oral) volume of distribution is 66 L (18%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2,9',
      unidad: 'h',
      analito: 'futibatinib',
      ref: { f: 'dailymed-futibatinib', sec: '12.3 · Farmacocinética', cita: 'Futibatinib elimination half-life is 2.9 hours (27%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '20',
      unidad: 'L/h',
      analito: 'futibatinib',
      ref: { f: 'dailymed-futibatinib', sec: '12.3 · Farmacocinética', cita: 'with an apparent (oral) clearance of 20 L/hr (23%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '91 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 20 mg',
      ref: { f: 'dailymed-futibatinib', sec: '12.3 · Farmacocinética', cita: 'approximately 91% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-futibatinib', '0b1332a1-0581-4707-9bf6-1eccfa39bef4', 'LYTGOBI (FUTIBATINIB) TABLET LYTGOBI KIT', 'LYTGOBI', '9', '2026-11-09', '2026-11-19'),
    rengPubchem(71621331, 'futibatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
