import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ensartinib',
    nombre: 'Ensartinib',
    clase: 'Inhibidor de la tirosina cinasa ALK',
    sinonimos: [ 'ensartinib hydrochloride', 'Ensacove' ],
    formula: 'C26H27Cl2FN6O3',
    masaMolar: 561.4,
    smiles: 'C[C@@H]1CN(C[C@@H](N1)C)C(=O)C2=CC=C(C=C2)NC(=O)C3=NN=C(C(=C3)O[C@H](C)C4=C(C=CC(=C4Cl)F)Cl)N',
    inchikey: 'GLYMPHUVMRFTFV-QLFBSQMISA-N',
    cid: 56960363,
    iupac: '6-amino-5-[(1R)-1-(2,6-dichloro-3-fluorophenyl)ethoxy]-N-[4-[(3R,5S)-3,5-dimethylpiperazine-1-carbonyl]phenyl]pyridazine-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ensartinib-oral',
      producto: 'ENSACOVE · cápsula',
      titular: 'XCOVERY HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de ensartinib',
        ref: { f: 'dailymed-ensartinib', sec: '11 · Descripción', cita: 'ensartinib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'hypromellose, unspecified',
        'titanium dioxide',
        'microcrystalline cellulose',
        'stearic acid',
        'shellac',
        'isopropyl alcohol',
        'dehydrated alcohol',
        'butyl alcohol',
        'propylene glycol',
        'fd&c blue no. 2',
        'ammonia'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico avanzado ALK positivo no tratados antes con un inhibidor de ALK.',
        ref: {
          f: 'dailymed-ensartinib',
          sec: '1 · Indicaciones',
          cita: 'anaplastic lymphoma kinase (ALK)-positive locally advanced or metastatic non-small cell lung cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ensartinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas nuevos o que empeoran, como disnea, tos o fiebre.',
          organos: [],
          ref: {
            f: 'dailymed-ensartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening symptoms indicative of ILD/pneumonitis (e.g., dyspnea, cough, and fever) during treatment with ENSACOVE',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas al inicio, cada 2 semanas durante el primer ciclo y después cada mes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ensartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests including ALT, AST, and total bilirubin at baseline and every 2 weeks during the first cycle of treatment with ENSACOVE',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradicardia',
          texto: 'Vigilar la frecuencia cardíaca con regularidad.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ensartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor heart rate regularly during treatment with ENSACOVE',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteraciones visuales',
          texto: 'Hacer una valoración oftalmológica ante síntomas visuales nuevos o que empeoran.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-ensartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Obtain an ophthalmologic evaluation in patients with new or worsening visual symptoms during treatment with ENSACOVE',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): exantema, dolor musculoesquelético, estreñimiento, prurito, tos, náuseas, edema, vómitos, fatiga y fiebre.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%) were rash, musculoskeletal pain, constipation, pruritus, cough, nausea, edema, vomiting, fatigue, and pyrexia'
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
    contiene: 'Cápsula: 25 mg o 100 mg por cápsula, según la etiqueta; el activo va como clorhidrato de ensartinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico avanzado ALK positivo no tratados antes con un inhibidor de ALK.',
    actua: 'Inhibe la cinasa ALK y también MET y ROS1; bloquea la señal de ALK y la proliferación de células con fusiones de ALK.',
    recorrido: 'La mediana del tiempo hasta el pico en estado estacionario es de 3 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras 200 mg marcados, el 91 % de la radiactividad se recuperó en las heces (38 % sin cambios) y el 10 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-ensartinib', sec: '3 · Formas y concentraciones', cita: 'size 2 capsule, white opaque cap and body', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico en estado estacionario es de 3 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico en estado estacionario es de 3 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-ensartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ensartinib median (minimum, maximum) time to reach Cmax (Tmax) at steady state is 3 hours (2, 8 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes frente al ayuno.',
          ref: {
            f: 'dailymed-ensartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in ensartinib pharmacokinetics were observed following administration of ENSACOVE with a high-fat meal',
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
      ocurre: 'Se une en un 91,6 % a las proteínas plasmáticas; el volumen de distribución aparente es de 1720 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 91,6 % a las proteínas plasmáticas; el volumen de distribución aparente es de 1720 L.',
          ref: { f: 'dailymed-ensartinib', sec: '12.3 · Farmacocinética', cita: 'Ensartinib is 91.6% bound to human plasma protein', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 1720 L.',
          ref: {
            f: 'dailymed-ensartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ensartinib mean (CV%) apparent volume of distribution is 1,720 L (42%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ALK',
        efecto: 'Inhibe la cinasa ALK y también MET y ROS1; bloquea la señal de ALK y la proliferación de células con fusiones de ALK.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la cinasa ALK y también MET y ROS1; bloquea la señal de ALK y la proliferación de células con fusiones de ALK.',
            ref: {
              f: 'dailymed-ensartinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ensartinib is a kinase inhibitor of anaplastic lymphoma kinase (ALK) and inhibits other kinases including MET and ROS1',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A.',
          ref: { f: 'dailymed-ensartinib', sec: '12.3 · Farmacocinética', cita: 'Ensartinib is predominantly metabolized by CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 200 mg marcados, el 91 % de la radiactividad se recuperó en las heces (38 % sin cambios) y el 10 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 200 mg marcados, el 91 % de la radiactividad se recuperó en las heces (38 % sin cambios) y el 10 % en la orina.',
          ref: {
            f: 'dailymed-ensartinib',
            sec: '12.3 · Farmacocinética',
            cita: '91% of the radioactivity was recovered in feces (38% as unchanged) and 10% in urine (4.4% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida en estado estacionario es de 30 horas.',
          ref: {
            f: 'dailymed-ensartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ensartinib mean (standard deviation [SD]) steady-state half-life (t1/2) is 30 (20) hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en estado estacionario',
      valor: '3',
      unidad: 'h',
      analito: 'ensartinib',
      ref: {
        f: 'dailymed-ensartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to reach Cmax (Tmax) at steady state is 3 hours (2, 8 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '91,6',
      unidad: '%',
      analito: 'ensartinib',
      ref: { f: 'dailymed-ensartinib', sec: '12.3 · Farmacocinética', cita: 'Ensartinib is 91.6% bound to human plasma protein', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '1720',
      unidad: 'L',
      analito: 'ensartinib',
      ref: {
        f: 'dailymed-ensartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Ensartinib mean (CV%) apparent volume of distribution is 1,720 L (42%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida en estado estacionario',
      valor: '30',
      unidad: 'h',
      analito: 'ensartinib',
      ref: { f: 'dailymed-ensartinib', sec: '12.3 · Farmacocinética', cita: 'steady-state half-life (t1/2) is 30 (20) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '91',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 200 mg',
      ref: {
        f: 'dailymed-ensartinib',
        sec: '12.3 · Farmacocinética',
        cita: '91% of the radioactivity was recovered in feces (38% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ensartinib', '1e1b2f79-678a-472a-b924-66909c8a4b2e', 'ENSACOVE (ENSARTINIB) CAPSULE', 'ENSACOVE', '5', '2026-02-26', '2026-11-19'),
    rengPubchem(56960363, 'ensartinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
