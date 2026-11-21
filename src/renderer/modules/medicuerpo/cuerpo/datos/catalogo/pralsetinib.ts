import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pralsetinib',
    nombre: 'Pralsetinib',
    clase: 'Inhibidor selectivo de la cinasa RET',
    sinonimos: [ 'pralsetinib', 'Gavreto' ],
    formula: 'C27H32FN9O2',
    masaMolar: 533.6,
    smiles: 'CC1=CC(=NN1)NC2=NC(=NC(=C2)C)C3CCC(CC3)(C(=O)N[C@@H](C)C4=CN=C(C=C4)N5C=C(C=N5)F)OC',
    inchikey: 'GBLBJPZSROAGMF-SIYOEGHHSA-N',
    cid: 129073603,
    iupac: 'N-[(1S)-1-[6-(4-fluoropyrazol-1-yl)-3-pyridinyl]ethyl]-1-methoxy-4-[4-methyl-6-[(5-methyl-1H-pyrazol-3-yl)amino]pyrimidin-2-yl]cyclohexane-1-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pralsetinib-oral',
      producto: 'Gavreto · cápsula',
      titular: 'RIGEL PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      excipientes: [ 'hydroxypropyl cellulose, unspecified', 'sodium bicarbonate', 'anhydrous citric acid', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico metastásico con fusión de RET y del cáncer de tiroides con fusión de RET, según la etiqueta.',
        ref: {
          f: 'dailymed-pralsetinib',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with metastatic rearranged during transfection (RET ) fusion-positive non-small cell lung cancer as detected by an FDA approved test (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pralsetinib',
      advertencias: [
        {
          titulo: 'Infecciones graves, incluidas las oportunistas',
          texto: 'Puede aumentar el riesgo de infecciones bacterianas, fúngicas, víricas y oportunistas graves, que pueden ser mortales.',
          organos: [],
          ref: {
            f: 'dailymed-pralsetinib',
            sec: 'Advertencia destacada',
            cita: 'GAVRETO may increase the risk for serious infections, including bacterial, fungal, viral and opportunistic infections, which can lead to hospitalization or death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares que sugieran neumonitis.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'No iniciarlo con hipertensión no controlada.',
          organos: [],
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not initiate GAVRETO in patients with uncontrolled hypertension',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Medir AST y ALT antes de empezar, cada 2 semanas los 3 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor AST and ALT prior to initiating GAVRETO, every 2 weeks during the first 3 months, then monthly thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (25 % o más): dolor musculoesquelético, estreñimiento, hipertensión, diarrea, fatiga, edema, fiebre y tos.',
          '34084-4',
          'The most common adverse reactions (≥ 25%) were musculoskeletal pain, constipation, hypertension, diarrhea, fatigue, edema, pyrexia and cough'
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
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico metastásico con fusión de RET y del cáncer de tiroides con fusión de RET, según la etiqueta.',
    actua: 'Inhibe la cinasa RET natural y sus fusiones y mutaciones oncogénicas a concentraciones muy bajas.',
    recorrido: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; una comida rica en grasas duplica la Cmax y el AUC. Tras una dosis marcada, alrededor del 73 % se recuperó en las heces (66 % sin cambios) y el 6 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de hipromelosa: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de hipromelosa: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '3 · Formas y concentraciones',
            cita: 'light blue, opaque, hard hydroxypropyl methylcellulose (HPMC) capsule printed with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; una comida rica en grasas duplica la Cmax y el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; una comida rica en grasas duplica la Cmax y el AUC.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak concentration (T max ) ranged from 2 to 4 hours following single doses of pralsetinib 60 mg to 600 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax aumentó 2,0 veces y el AUC 2,2 veces.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean C max of pralsetinib was increased by 2.0-fold, the mean AUC 0-INF was increased by 2.2-fold',
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
      ocurre: 'Se une en un 97 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 303 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 303 L.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of pralsetinib is 97% and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 303 L.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) apparent volume of distribution (Vd/F) of pralsetinib is 303 L (68%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa RET',
        efecto: 'Inhibe la cinasa RET natural y sus fusiones y mutaciones oncogénicas a concentraciones muy bajas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la cinasa RET natural y sus fusiones y mutaciones oncogénicas a concentraciones muy bajas.',
            ref: {
              f: 'dailymed-pralsetinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pralsetinib is a kinase inhibitor of wild-type RET and oncogenic RET fusions',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2D6 y la CYP1A2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2D6 y la CYP1A2.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Pralsetinib is primarily metabolized by CYP3A4 and to a lesser extent by CYP2D6 and CYP1A2, in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 73 % se recuperó en las heces (66 % sin cambios) y el 6 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 73 % se recuperó en las heces (66 % sin cambios) y el 6 % en la orina.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'pralsetinib was recovered in feces and 6% (4.8% as unchanged) was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática es de 16 horas tras una dosis y de 20 horas con dosis repetidas.',
          ref: {
            f: 'dailymed-pralsetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma elimination half-life (T ½ ) of pralsetinib is 16 hours (10) following single doses and 20 hours (12) following multiple doses of pralsetinib',
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
      valor: '2-4',
      unidad: 'h',
      analito: 'pralsetinib',
      ref: {
        f: 'dailymed-pralsetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentration (T max ) ranged from 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '97',
      unidad: '%',
      analito: 'pralsetinib',
      ref: { f: 'dailymed-pralsetinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of pralsetinib is 97%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '303',
      unidad: 'L',
      analito: 'pralsetinib',
      ref: {
        f: 'dailymed-pralsetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution (Vd/F) of pralsetinib is 303 L (68%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática (dosis repetidas)',
      valor: '20',
      unidad: 'h',
      analito: 'pralsetinib',
      condiciones: 'dosis repetidas',
      ref: { f: 'dailymed-pralsetinib', sec: '12.3 · Farmacocinética', cita: '20 hours (12) following multiple doses of pralsetinib', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente en estado estacionario',
      valor: '11',
      unidad: 'L/h',
      analito: 'pralsetinib',
      ref: {
        f: 'dailymed-pralsetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) apparent oral clearance (CL/F) of pralsetinib is 11 L/h (66%) at steady state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '73 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 310 mg',
      ref: {
        f: 'dailymed-pralsetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 73% (66% as unchanged) of the total administered radioactive dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pralsetinib', '16edd46e-28b8-f06d-e063-6394a90ae31b', 'GAVRETO (PRALSETINIB) CAPSULE', 'Gavreto', '8', '2026-01-28', '2026-11-19'),
    rengPubchem(129073603, 'pralsetinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
