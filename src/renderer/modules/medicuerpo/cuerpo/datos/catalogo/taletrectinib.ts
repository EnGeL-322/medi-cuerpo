import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'taletrectinib',
    nombre: 'Taletrectinib',
    clase: 'Inhibidor de la tirosina cinasa ROS1',
    sinonimos: [ 'taletrectinib adipate', 'Ibtrozi' ],
    formula: 'C23H24FN5O',
    masaMolar: 405.5,
    smiles: 'C[C@H](COC1=CC=C(C=C1)C2=CN=C3N2N=C(C=C3)N[C@H](C)C4=CC(=CC=C4)F)N',
    inchikey: 'HEVHTYMYEMEBPX-HZPDHXFCSA-N',
    cid: 72202474,
    iupac: '3-[4-[(2R)-2-aminopropoxy]phenyl]-N-[(1R)-1-(3-fluorophenyl)ethyl]imidazo[1,2-b]pyridazin-6-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'taletrectinib-oral',
      producto: 'IBTROZI · cápsula',
      titular: 'NUVATION BIO INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg de taletrectinib (272 mg de adipato) por cápsula, según la etiqueta',
      sal: {
        nombre: 'Adipato de taletrectinib',
        ref: {
          f: 'dailymed-taletrectinib',
          sec: '3 · Formas y concentraciones',
          cita: '272 mg of taletrectinib adipate equivalent to 200 mg of taletrectinib',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'mannitol',
        'starch, corn',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'silicon dioxide',
        'sodium stearyl fumarate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'shellac',
        'alcohol',
        'isopropyl alcohol',
        'butyl alcohol',
        'propylene glycol',
        'ammonia',
        'fd&c blue no. 1 aluminum lake'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico avanzado ROS1 positivo.',
        ref: {
          f: 'dailymed-taletrectinib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult patients with locally advanced or metastatic ROS1 -positive non-small cell lung cancer (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-taletrectinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Ha habido acontecimientos hepáticos mortales; hacer pruebas hepáticas antes de empezar y periódicamente.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Fatal liver events occurred in 2 (0.6%) patients',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares nuevos o que empeoran.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Vigilar el electrocardiograma y los electrolitos antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor ECGs and electrolytes prior to administration of IBTROZI, and then periodically thereafter as clinically indicated during treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, náuseas, vómitos, mareo, exantema, estreñimiento y fatiga.',
          '34084-4',
          'the most common (≥20%) adverse reactions were diarrhea, nausea, vomiting, dizziness, rash, constipation, and fatigue'
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
    contiene: 'Cápsula: 200 mg de taletrectinib (272 mg de adipato) por cápsula, según la etiqueta; el activo va como adipato de taletrectinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico avanzado ROS1 positivo.',
    actua: 'Inhibe la tirosina cinasa ROS1, también con mutaciones de resistencia, y las cinasas TRKA, TRKB y TRKC.',
    recorrido: 'El pico aparece entre 2 y 6 horas; con comida rica en grasas el AUC y la Cmax aumentan 1,5 veces. Tras 200 mg marcados, el 75 % de la dosis se recuperó en las heces (15 % sin cambios) y el 11 % en la orina (2,9 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de liberación inmediata: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de liberación inmediata: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 200 mg, immediate release, white, opaque, size 0, hard capsules',
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
      ocurre: 'El pico aparece entre 2 y 6 horas; con comida rica en grasas el AUC y la Cmax aumentan 1,5 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico aparece entre 2 y 6 horas; con comida rica en grasas el AUC y la Cmax aumentan 1,5 veces.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Taletrectinib time to maximum plasma concentration (Tmax) is 2 to 6 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida rica en grasas el AUC y la Cmax aumentaron 1,5 veces.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Both taletrectinib AUC and Cmax increased by 1.5-fold following administration with high-fat food',
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
      ocurre: 'In vitro se une en un 93-96 % a las proteínas plasmáticas, menos a concentraciones altas; el volumen de distribución aparente estimado es de 9820 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 93-96 % a las proteínas plasmáticas, menos a concentraciones altas; el volumen de distribución aparente estimado es de 9820 L.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Taletrectinib in vitro plasma protein binding is concentration-dependent and decreases with increasing taletrectinib concentrations',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 9820 L.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent (oral) volume of distribution is 9,820 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ROS1',
        efecto: 'Inhibe la tirosina cinasa ROS1, también con mutaciones de resistencia, y las cinasas TRKA, TRKB y TRKC.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la tirosina cinasa ROS1, también con mutaciones de resistencia, y las cinasas TRKA, TRKB y TRKC.',
            ref: {
              f: 'dailymed-taletrectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Taletrectinib is an inhibitor of tyrosine kinase ROS1, including ROS1 resistance mutations',
              codigo: '43679-0'
            }
          },
          {
            t: 'También inhibe las cinasas TRKA, TRKB y TRKC.',
            ref: {
              f: 'dailymed-taletrectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Taletrectinib also showed inhibitory effects on tropomyosin receptor kinases (TRKs) TRKA, TRKB, and TRKC',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina por metabolismo CYP (sobre todo CYP3A, y en menor medida CYP2C8 y CYP2C9) y no CYP (sulfatación y acetilación).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina por metabolismo CYP (sobre todo CYP3A, y en menor medida CYP2C8 y CYP2C9) y no CYP (sulfatación y acetilación).',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A and, to a lesser extent, CYP2C8 and CYP2C9 are the CYP450 enzymes involved in taletrectinib metabolism',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se elimina por metabolismo CYP450 y no CYP450 (sulfatación y acetilación).',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Taletrectinib is eliminated by CYP450 and non-CYP450 (i.e., sulfation and acetylation) metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 200 mg marcados, el 75 % de la dosis se recuperó en las heces (15 % sin cambios) y el 11 % en la orina (2,9 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 200 mg marcados, el 75 % de la dosis se recuperó en las heces (15 % sin cambios) y el 11 % en la orina (2,9 % sin cambios).',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: '75% of the dose was recovered in feces (15% as unchanged) and 11% in urine (2.9% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 66 horas y el aclaramiento oral aparente, de 63 L/h.',
          ref: {
            f: 'dailymed-taletrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Taletrectinib effective half-life is approximately 66 hours with an apparent (oral) clearance of 63 L/h (36%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-6',
      unidad: 'h',
      analito: 'taletrectinib',
      ref: {
        f: 'dailymed-taletrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Taletrectinib time to maximum plasma concentration (Tmax) is 2 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '93-96',
      unidad: '%',
      analito: 'taletrectinib',
      ref: { f: 'dailymed-taletrectinib', sec: '12.3 · Farmacocinética', cita: 'from 96% at 100 ng/mL to 93% at 10,000 ng/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente estimado',
      valor: '9820',
      unidad: 'L',
      analito: 'taletrectinib',
      ref: {
        f: 'dailymed-taletrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent (oral) volume of distribution is 9,820 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '66 (aprox.)',
      unidad: 'h',
      analito: 'taletrectinib',
      ref: {
        f: 'dailymed-taletrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Taletrectinib effective half-life is approximately 66 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '63',
      unidad: 'L/h',
      analito: 'taletrectinib',
      ref: { f: 'dailymed-taletrectinib', sec: '12.3 · Farmacocinética', cita: 'apparent (oral) clearance of 63 L/h (36%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '75',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 200 mg',
      ref: {
        f: 'dailymed-taletrectinib',
        sec: '12.3 · Farmacocinética',
        cita: '75% of the dose was recovered in feces (15% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-taletrectinib', '51ac8e52-3269-4102-8dc8-dba22d82128c', 'IBTROZI (TALETRECTINIB) CAPSULE', 'IBTROZI', '5', '2026-09-24', '2026-11-19'),
    rengPubchem(72202474, 'taletrectinib adipate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
