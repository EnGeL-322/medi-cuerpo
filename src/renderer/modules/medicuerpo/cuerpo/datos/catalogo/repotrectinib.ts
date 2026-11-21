import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'repotrectinib',
    nombre: 'Repotrectinib',
    clase: 'Inhibidor de tirosina cinasas ROS1 y TRK',
    sinonimos: [ 'repotrectinib', 'Augtyro' ],
    formula: 'C18H18FN5O2',
    masaMolar: 355.4,
    smiles: 'C[C@H]1CNC(=O)C2=C3N=C(C=CN3N=C2)N[C@@H](C4=C(O1)C=CC(=C4)F)C',
    inchikey: 'FIKPXCOQUIZNHB-WDEREUQCSA-N',
    cid: 135565923,
    iupac: '(3R,11S)-6-fluoro-3,11-dimethyl-10-oxa-2,13,17,18,21-pentazatetracyclo[13.5.2.04,9.018,22]docosa-1(21),4(9),5,7,15(22),16,19-heptaen-14-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'repotrectinib-oral',
      producto: 'Augtyro · cápsula',
      titular: 'E.R. SQUIBB & SONS, L.L.C.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '40 mg o 160 mg por cápsula, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'sodium lauryl sulfate', 'croscarmellose sodium', 'silicon dioxide' ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico ROS1 positivo y de tumores sólidos con fusión de NTRK, según la etiqueta.',
        ref: {
          f: 'dailymed-repotrectinib',
          sec: '1 · Indicaciones',
          cita: 'adult patients with locally advanced or metastatic ROS1- positive non-small cell lung cancer (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-repotrectinib',
      advertencias: [
        {
          titulo: 'Reacciones adversas del sistema nervioso central',
          texto: 'Advertir del riesgo de reacciones del sistema nervioso central; no conducir si aparecen.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise patients and caregivers of the risk of CNS adverse reactions with AUGTYRO',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares nuevos o que empeoran.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas cada 2 semanas el primer mes y después cada mes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests, including ALT, AST and bilirubin, every 2 weeks during the first month of treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): mareo, disgeusia, neuropatía periférica, estreñimiento, disnea, fatiga, ataxia, alteración cognitiva, debilidad muscular y náuseas.',
          '34084-4',
          'The most common adverse reactions (≥20%) were dizziness, dysgeusia, peripheral neuropathy, constipation, dyspnea, fatigue, ataxia, cognitive impairment, muscular weakness, and nausea'
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
    contiene: 'Cápsula: 40 mg o 160 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico ROS1 positivo y de tumores sólidos con fusión de NTRK, según la etiqueta.',
    actua: 'Inhibe la cinasa ROS1 y las cinasas TRKA, TRKB y TRKC, cuyas proteínas de fusión impulsan el crecimiento tumoral.',
    recorrido: 'La biodisponibilidad absoluta es del 45,7 % y el pico aparece a las 2-3 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras 160 mg marcados, el 88,8 % se recuperó en las heces (50,6 % sin cambios) y el 4,84 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 40 mg, white, opaque, immediate release, Size 0, hard shell capsule',
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
      ocurre: 'La biodisponibilidad absoluta es del 45,7 % y el pico aparece a las 2-3 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 45,7 % y el pico aparece a las 2-3 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) absolute bioavailability of repotrectinib is 45.7% (19.6%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico aparece hacia las 2-3 horas tras una dosis única en ayunas.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak repotrectinib concentration occurred at approximately 2 to 3 hours post a single oral dose of 40 mg to 240 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in repotrectinib pharmacokinetics were observed in patients with cancer following administration of a high-fat meal',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 95,4 % a las proteínas plasmáticas; el volumen de distribución aparente es de 432 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 95,4 % a las proteínas plasmáticas; el volumen de distribución aparente es de 432 L.',
          ref: { f: 'dailymed-repotrectinib', sec: '12.3 · Farmacocinética', cita: 'AUGTYRO binding to plasma protein was 95.4%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 432 L tras 160 mg en pacientes con cáncer.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) apparent volume of distribution (Vz/F) was 432 L (55.9 %) in patients with cancer',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ],
      accion: {
        diana: 'ROS1, TRKA, TRKB y TRKC',
        efecto: 'Inhibe la cinasa ROS1 y las cinasas TRKA, TRKB y TRKC, cuyas proteínas de fusión impulsan el crecimiento tumoral.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la cinasa ROS1 y las cinasas TRKA, TRKB y TRKC, cuyas proteínas de fusión impulsan el crecimiento tumoral.',
            ref: {
              f: 'dailymed-repotrectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Repotrectinib is an inhibitor of proto-oncogene tyrosine-protein kinase ROS1 (ROS1) and of the tropomyosin receptor tyrosine kinases (TRKs) TRKA, TRKB, and TRKC',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4, seguida de glucuronidación; induce su propio metabolismo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4, seguida de glucuronidación; induce su propio metabolismo.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Repotrectinib is primarily metabolized by CYP3A4 followed by secondary glucuronidation',
            codigo: '43682-4'
          }
        },
        {
          t: 'La farmacocinética en estado estacionario depende del tiempo por autoinducción de la CYP3A4.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Steady state PK was time-dependent with an autoinduction of CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 160 mg marcados, el 88,8 % se recuperó en las heces (50,6 % sin cambios) y el 4,84 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 160 mg marcados, el 88,8 % se recuperó en las heces (50,6 % sin cambios) y el 4,84 % en la orina.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: '4.84% (0.56% as unchanged) was recovered in urine and 88.8% (50.6% unchanged) in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media tras una dosis es de unas 60,7 horas en pacientes con cáncer.',
          ref: {
            f: 'dailymed-repotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The repotrectinib mean terminal half-life is approximately 60.7 h for patients with cancer following a single dose',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '45,7',
      unidad: '%',
      analito: 'repotrectinib',
      ref: {
        f: 'dailymed-repotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean (CV%) absolute bioavailability of repotrectinib is 45.7% (19.6%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-3 (aprox.)',
      unidad: 'h',
      analito: 'repotrectinib',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-repotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak repotrectinib concentration occurred at approximately 2 to 3 hours post a single oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95,4',
      unidad: '%',
      analito: 'repotrectinib',
      ref: { f: 'dailymed-repotrectinib', sec: '12.3 · Farmacocinética', cita: 'AUGTYRO binding to plasma protein was 95.4%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '432',
      unidad: 'L',
      analito: 'repotrectinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-repotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution (Vz/F) was 432 L (55.9 %) in patients with cancer',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media (dosis única)',
      valor: '60,7 (aprox.)',
      unidad: 'h',
      analito: 'repotrectinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-repotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The repotrectinib mean terminal half-life is approximately 60.7 h for patients with cancer following a single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '15,9',
      unidad: 'L/h',
      analito: 'repotrectinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-repotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean (CV%) apparent oral clearance (CL/F) was 15.9 L/h (45.5%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '88,8',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 160 mg',
      ref: { f: 'dailymed-repotrectinib', sec: '12.3 · Farmacocinética', cita: '88.8% (50.6% unchanged) in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-repotrectinib', 'fb526827-40ba-4462-94cf-179ae3b0cb8a', 'AUGTYRO (REPOTRECTINIB) CAPSULE', 'Augtyro', '6', '2026-08-11', '2026-11-19'),
    rengPubchem(135565923, 'repotrectinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
