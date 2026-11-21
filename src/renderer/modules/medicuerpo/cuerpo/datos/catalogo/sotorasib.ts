import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sotorasib',
    nombre: 'Sotorasib',
    clase: 'Inhibidor covalente de KRAS G12C',
    sinonimos: [ 'sotorasib', 'Lumakras' ],
    formula: 'C30H30F2N6O3',
    masaMolar: 560.6,
    smiles: 'C[C@H]1CN(CCN1C2=NC(=O)N(C3=NC(=C(C=C32)F)C4=C(C=CC=C4F)O)C5=C(C=CN=C5C(C)C)C)C(=O)C=C',
    inchikey: 'NXQKSXLFSAEQCZ-SFHVURJKSA-N',
    cid: 137278711,
    iupac: '6-fluoro-7-(2-fluoro-6-hydroxyphenyl)-1-(4-methyl-2-propan-2-yl-3-pyridinyl)-4-[(2S)-2-methyl-4-prop-2-enoylpiperazin-1-yl]pyrido[2,3-d]pyrimidin-2-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'sotorasib-oral',
      producto: 'LUMAKRAS · comprimido recubierto',
      titular: 'AMGEN, INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '120 mg, 320 mg o 240 mg por comprimido, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'lactose monohydrate', 'croscarmellose sodium', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico y del cáncer colorrectal con mutación KRAS G12C, según la etiqueta.',
        ref: {
          f: 'dailymed-sotorasib',
          sec: '1 · Indicaciones',
          cita: 'KRAS G12C-mutated Locally Advanced or Metastatic Non-Small Cell Lung Cancer (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sotorasib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas cada 3 semanas los 3 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-sotorasib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests every 3 weeks for the first 3 months of treatment then once monthly as clinically indicated',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar síntomas pulmonares nuevos o que empeoran e interrumpir de inmediato si se sospecha.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-sotorasib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interstitial Lung Disease (ILD)/Pneumonitis: Monitor for new or worsening pulmonary symptoms',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, dolor musculoesquelético, náuseas, fatiga, hepatotoxicidad y tos.',
          '34084-4',
          'most common adverse reactions (≥ 20%) were diarrhea, musculoskeletal pain, nausea, fatigue, hepatotoxicity, and cough'
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
    contiene: 'Comprimido recubierto: 120 mg, 320 mg o 240 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico y del cáncer colorrectal con mutación KRAS G12C, según la etiqueta.',
    actua: 'Inhibe KRAS G12C, forma mutada y oncogénica exclusiva del tumor: se une de forma covalente e irreversible a su cisteína y la bloquea en estado inactivo, sin afectar a KRAS normal.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1 hora; una comida grasa aumentó el AUC un 25 %. Tras una dosis marcada, el 74 % se recuperó en las heces (53 % sin cambios) y el 6 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo; puede dispersarse en agua.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo; puede dispersarse en agua.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 320 mg, beige, oval-shaped, immediate release, film-coated',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 1 hora; una comida grasa aumentó el AUC un 25 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1 hora; una comida grasa aumentó el AUC un 25 %.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to sotorasib peak plasma concentration is 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó un 25 % frente al ayuno.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: 'sotorasib AUC 0-24h increased by 25% compared to administration under fasted conditions',
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
      ocurre: 'In vitro se une en un 89 % a las proteínas plasmáticas; el volumen de distribución medio en estado estacionario es de 211 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 89 % a las proteínas plasmáticas; el volumen de distribución medio en estado estacionario es de 211 L.',
          ref: { f: 'dailymed-sotorasib', sec: '12.3 · Farmacocinética', cita: 'In vitro , sotorasib plasma protein binding is 89%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución medio en estado estacionario de 211 L.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The sotorasib mean volume of distribution (V d ) at steady state is 211 L (CV: 135%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'KRAS G12C',
        efecto: 'Inhibe KRAS G12C, forma mutada y oncogénica exclusiva del tumor: se une de forma covalente e irreversible a su cisteína y la bloquea en estado inactivo, sin afectar a KRAS normal.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe KRAS G12C, forma mutada y oncogénica exclusiva del tumor: se une de forma covalente e irreversible a su cisteína y la bloquea en estado inactivo, sin afectar a KRAS normal.',
            ref: {
              f: 'dailymed-sotorasib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sotorasib forms an irreversible, covalent bond with the unique cysteine of KRAS G12C, locking the protein in an inactive state that prevents downstream signaling without affecting wild-type KRAS',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sus vías principales son la conjugación no enzimática y el metabolismo oxidativo por las CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sus vías principales son la conjugación no enzimática y el metabolismo oxidativo por las CYP3A.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main metabolic pathways of sotorasib are non-enzymatic conjugation and oxidative metabolism with CYP3As',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 74 % se recuperó en las heces (53 % sin cambios) y el 6 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 74 % se recuperó en las heces (53 % sin cambios) y el 6 % en la orina.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: '74% of the dose was recovered in feces (53% unchanged) and 6% (1% unchanged) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 5 horas.',
          ref: {
            f: 'dailymed-sotorasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The sotorasib mean terminal elimination half-life is 5 hours (standard deviation (SD): 2)',
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
      valor: '1',
      unidad: 'h',
      analito: 'sotorasib',
      ref: {
        f: 'dailymed-sotorasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to sotorasib peak plasma concentration is 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '89',
      unidad: '%',
      analito: 'sotorasib',
      ref: { f: 'dailymed-sotorasib', sec: '12.3 · Farmacocinética', cita: 'In vitro , sotorasib plasma protein binding is 89%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '211',
      unidad: 'L',
      analito: 'sotorasib',
      ref: {
        f: 'dailymed-sotorasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The sotorasib mean volume of distribution (V d ) at steady state is 211 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '5',
      unidad: 'h',
      analito: 'sotorasib',
      ref: {
        f: 'dailymed-sotorasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The sotorasib mean terminal elimination half-life is 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '26,2',
      unidad: 'L/h',
      analito: 'sotorasib',
      condiciones: '960 mg al día',
      ref: {
        f: 'dailymed-sotorasib',
        sec: '12.3 · Farmacocinética',
        cita: 'the sotorasib steady state apparent clearance is 26.2 L/hr (CV: 76%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '74',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-sotorasib', sec: '12.3 · Farmacocinética', cita: '74% of the dose was recovered in feces (53% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sotorasib', 'c80a362c-7ac3-4894-a076-0691e68ef8c1', 'LUMAKRAS (SOTORASIB) TABLET, COATED', 'LUMAKRAS', '20', '2026-11-09', '2026-11-19'),
    rengPubchem(137278711, 'sotorasib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
