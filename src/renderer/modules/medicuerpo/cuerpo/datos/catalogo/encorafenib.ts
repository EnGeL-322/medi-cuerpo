import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'encorafenib',
    nombre: 'Encorafenib',
    clase: 'Inhibidor de cinasas BRAF (V600E)',
    sinonimos: [ 'encorafenib', 'Braftovi' ],
    formula: 'C22H27ClFN7O4S',
    masaMolar: 540,
    smiles: 'C[C@@H](CNC1=NC=CC(=N1)C2=CN(N=C2C3=C(C(=CC(=C3)Cl)NS(=O)(=O)C)F)C(C)C)NC(=O)OC',
    inchikey: 'CMJCXYNUCSMDBY-ZDUSSCGKSA-N',
    cid: 50922675,
    iupac: 'methyl N-[(2S)-1-[[4-[3-[5-chloro-2-fluoro-3-(methanesulfonamido)phenyl]-1-propan-2-ylpyrazol-4-yl]pyrimidin-2-yl]amino]propan-2-yl]carbamate',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'encorafenib-oral',
      producto: 'BRAFTOVI · cápsula',
      titular: 'ARRAY BIOPHARMA INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '75 mg por cápsula, según la etiqueta',
      excipientes: [
        'copovidone k25-31',
        'poloxamer 188',
        'microcrystalline cellulose',
        'succinic acid',
        'crospovidone, unspecified',
        'silicon dioxide',
        'magnesium stearate',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'ferrosoferric oxide',
        'shellac',
        'propylene glycol'
      ],
      usos: {
        t: 'Tratamiento del melanoma, del cáncer colorrectal y del cáncer de pulmón no microcítico con mutación BRAF V600E o V600K, en combinación, según la etiqueta.',
        ref: { f: 'dailymed-encorafenib', sec: '1 · Indicaciones', cita: 'BRAFTOVI is a kinase inhibitor indicated', codigo: '34067-9' }
      },
      fuente: 'dailymed-encorafenib',
      advertencias: [
        {
          titulo: 'Nuevas neoplasias primarias',
          texto: 'Pueden aparecer cánceres cutáneos y no cutáneos; hacer evaluaciones dermatológicas antes, durante y después.',
          organos: [],
          ref: {
            f: 'dailymed-encorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for malignancies and perform dermatologic evaluations prior to, while on therapy, and following discontinuation of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Miocardiopatía',
          texto: 'Valorar la fracción de eyección antes de empezar, al mes y después cada 2 a 3 meses.',
          organos: [],
          ref: {
            f: 'dailymed-encorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess left ventricular ejection fraction (LVEF) before initiating treatment with BRAFTOVI and binimetinib',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Pueden producirse hemorragias graves.',
          organos: [],
          ref: {
            f: 'dailymed-encorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Major hemorrhagic events can occur in patients receiving BRAFTOVI and binimetinib',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con binimetinib en el melanoma, las más frecuentes (25 % o más): fatiga, náuseas, vómitos, dolor abdominal y artralgia.',
          '34084-4',
          'Most common adverse reactions (≥25%) for BRAFTOVI, in combination with binimetinib, are fatigue, nausea, vomiting, abdominal pain, and arthralgia'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 75 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del melanoma, del cáncer colorrectal y del cáncer de pulmón no microcítico con mutación BRAF V600E o V600K, en combinación, según la etiqueta.',
    actua: 'Inhibidor de cinasas dirigido a BRAF V600E y también a BRAF y CRAF naturales; las mutaciones de BRAF activan de forma continua la cinasa y estimulan el crecimiento tumoral.',
    recorrido: 'Se absorbe al menos el 86 % de la dosis y la mediana del tmax es de 2 horas; una comida grasa baja la Cmax un 36 % sin cambiar el AUC. Tras 100 mg marcados, el 47 % se recuperó en las heces (5 % sin cambios) y otro 47 % en la orina (2 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-encorafenib', sec: '3 · Formas y concentraciones', cita: 'Capsules: 75 mg, hard gelatin', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe al menos el 86 % de la dosis y la mediana del tmax es de 2 horas; una comida grasa baja la Cmax un 36 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe al menos el 86 % de la dosis y la mediana del tmax es de 2 horas; una comida grasa baja la Cmax un 36 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of encorafenib is 2 hours. At least 86% of the dose is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo la Cmax media un 36 % sin efecto sobre el AUC.',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean maximum encorafenib concentration (C max ) decreased by 36% and there was no effect on AUC',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 86 % a las proteínas; el volumen de distribución aparente es de 164 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 86 % a las proteínas; el volumen de distribución aparente es de 164 L.',
          ref: { f: 'dailymed-encorafenib', sec: '12.3 · Farmacocinética', cita: 'The protein binding of encorafenib is 86% in vitro', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 164 L.',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) of apparent volume of distribution is 164 L (70%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'BRAF V600E',
        efecto: 'Inhibidor de cinasas dirigido a BRAF V600E y también a BRAF y CRAF naturales; las mutaciones de BRAF activan de forma continua la cinasa y estimulan el crecimiento tumoral.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas dirigido a BRAF V600E y también a BRAF y CRAF naturales; las mutaciones de BRAF activan de forma continua la cinasa y estimulan el crecimiento tumoral.',
            ref: {
              f: 'dailymed-encorafenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Encorafenib is a kinase inhibitor that targets BRAF V600E, as well as wild-type BRAF and CRAF in in vitro cell-free assays',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 (83 %) y, en menor medida, por la CYP2C19 (16 %) y la CYP2D6 (1 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 (83 %) y, en menor medida, por la CYP2C19 (16 %) y la CYP2D6 (1 %).',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Encorafenib is primarily metabolized by CYP3A4 (83%) and to a lesser extent by CYP2C19 (16%) and CYP2D6 (1%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 47 % se recuperó en las heces (5 % sin cambios) y otro 47 % en la orina (2 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 47 % se recuperó en las heces (5 % sin cambios) y otro 47 % en la orina (2 % sin cambios).',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: '47% (5% unchanged) of the administered dose was recovered in feces and 47% (2% unchanged) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 3,5 horas; el aclaramiento aparente sube de 14 a 32 L/h en estado estacionario.',
          ref: {
            f: 'dailymed-encorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) terminal half-life (t 1/2 ) of encorafenib is 3.5 hours (17%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2',
      unidad: 'h',
      analito: 'encorafenib',
      ref: { f: 'dailymed-encorafenib', sec: '12.3 · Farmacocinética', cita: 'The median T max of encorafenib is 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '≥ 86',
      unidad: '%',
      analito: 'encorafenib',
      ref: { f: 'dailymed-encorafenib', sec: '12.3 · Farmacocinética', cita: 'At least 86% of the dose is absorbed', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '86',
      unidad: '%',
      analito: 'encorafenib',
      ref: { f: 'dailymed-encorafenib', sec: '12.3 · Farmacocinética', cita: 'The protein binding of encorafenib is 86% in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '164',
      unidad: 'L',
      analito: 'encorafenib',
      ref: {
        f: 'dailymed-encorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean (CV%) of apparent volume of distribution is 164 L (70%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '3,5',
      unidad: 'h',
      analito: 'encorafenib',
      ref: {
        f: 'dailymed-encorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal half-life (t 1/2 ) of encorafenib is 3.5 hours (17%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '47',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 100 mg',
      ref: { f: 'dailymed-encorafenib', sec: '12.3 · Farmacocinética', cita: '47% (2% unchanged) in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-encorafenib', '235dfc38-0f0b-4037-b501-7a9f4294740c', 'BRAFTOVI (ENCORAFENIB) CAPSULE', 'BRAFTOVI', '23', '2026-03-02', '2026-11-19'),
    rengPubchem(50922675, 'encorafenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
