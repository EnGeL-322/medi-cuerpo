import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'entrectinib',
    nombre: 'Entrectinib',
    clase: 'Inhibidor de cinasas TRK, ROS1 y ALK',
    sinonimos: [ 'entrectinib', 'Rozlytrek' ],
    formula: 'C31H34F2N6O2',
    masaMolar: 560.6,
    smiles: 'CN1CCN(CC1)C2=CC(=C(C=C2)C(=O)NC3=NNC4=C3C=C(C=C4)CC5=CC(=CC(=C5)F)F)NC6CCOCC6',
    inchikey: 'HAYYBYPASCDWEQ-UHFFFAOYSA-N',
    cid: 25141092,
    iupac: 'N-[5-[(3,5-difluorophenyl)methyl]-1H-indazol-3-yl]-4-(4-methylpiperazin-1-yl)-2-(oxan-4-ylamino)benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'entrectinib-oral',
      producto: 'Rozlytrek · cápsula',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 200 mg por cápsula, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'tartaric acid',
        'hypromellose, unspecified',
        'crospovidone, unspecified',
        'magnesium stearate',
        'silicon dioxide',
        'titanium dioxide',
        'ferric oxide yellow',
        'shellac',
        'propylene glycol'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico ROS1 positivo y de tumores sólidos con fusión de NTRK, según la etiqueta.',
        ref: {
          f: 'dailymed-entrectinib',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with ROS1- positive metastatic non-small cell lung cancer (NSCLC) as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-entrectinib',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca congestiva',
          texto: 'Valorar la fracción de eyección antes de empezar y vigilar los signos de insuficiencia cardíaca.',
          organos: [],
          ref: {
            f: 'dailymed-entrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess left ventricular ejection fraction (LVEF) prior to initiation of ROZLYTREK',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Arritmias ventriculares',
          texto: 'Vigilar a quienes tienen o pueden tener prolongación del QRS o del QTc.',
          organos: [],
          ref: {
            f: 'dailymed-entrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients who have or who are at risk for QRS or QTc interval prolongation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): fatiga, estreñimiento, disgeusia, edema, mareo, diarrea, náuseas, disestesia, disnea, mialgia y alteración cognitiva, entre otras.',
          '34084-4',
          'most common adverse reactions (≥ 20%) were fatigue, constipation, dysgeusia, edema, dizziness, diarrhea, nausea, dysesthesia, dyspnea, myalgia, cognitive impairment'
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
    contiene: 'Cápsula: 100 mg o 200 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico ROS1 positivo y de tumores sólidos con fusión de NTRK, según la etiqueta.',
    actua: 'Inhibe las cinasas TRKA, TRKB y TRKC, ROS1 y ALK; su metabolito activo principal, M5, tiene una actividad in vitro similar.',
    recorrido: 'La concentración máxima se alcanza 4 a 6 horas tras 600 mg; una comida grasa no tiene efecto significativo. Tras una dosis marcada, el 83 % se excretó en las heces (36 % como entrectinib y 22 % como M5) y solo el 3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; también puede darse como suspensión en agua o leche.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; también puede darse como suspensión en agua o leche.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 100 mg: Size 2 yellow opaque body and cap',
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
      ocurre: 'La concentración máxima se alcanza 4 a 6 horas tras 600 mg; una comida grasa no tiene efecto significativo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La concentración máxima se alcanza 4 a 6 horas tras 600 mg; una comida grasa no tiene efecto significativo.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The maximum entrectinib plasma concentration was reached 4 – 6 hours after oral administration of a 600 mg dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no tuvo un efecto significativo sobre la exposición.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'meal did not have a significant effect on entrectinib exposure of ROZLYTREK capsules',
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
      ocurre: 'El entrectinib y el M5 se unen en más del 99 % a las proteínas plasmáticas in vitro; el volumen de distribución aparente es de 551 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El entrectinib y el M5 se unen en más del 99 % a las proteínas plasmáticas in vitro; el volumen de distribución aparente es de 551 L.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Entrectinib and its active major metabolite M5 are both > 99% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 551 L.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent volume of distribution (V/F) was 551 L and 81 L for entrectinib and M5, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'TRK, ROS1 y ALK',
        efecto: 'Inhibe las cinasas TRKA, TRKB y TRKC, ROS1 y ALK; su metabolito activo principal, M5, tiene una actividad in vitro similar.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas TRKA, TRKB y TRKC, ROS1 y ALK; su metabolito activo principal, M5, tiene una actividad in vitro similar.',
            ref: {
              f: 'dailymed-entrectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Entrectinib is an inhibitor of the tropomyosin receptor tyrosine kinases (TRK) TRKA, TRKB, and TRKC',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 (alrededor del 76 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 (alrededor del 76 %).',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Entrectinib is metabolized primarily by CYP3A4 (~76%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M5',
          actividad: 'activo',
          nota: 'Metabolito activo principal con actividad in vitro similar.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12 · Farmacología clínica',
            cita: 'The major active metabolite of entrectinib, M5, showed similar in vitro activity against TRK, ROS1, and ALK',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 83 % se excretó en las heces (36 % como entrectinib y 22 % como M5) y solo el 3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 83 % se excretó en las heces (36 % como entrectinib y 22 % como M5) y solo el 3 % en la orina.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: '83% of radioactivity was excreted in feces (36% of the dose as unchanged entrectinib and 22% as M5) with minimal excretion in urine (3%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento aparente estimado es de 19,6 L/h.',
          ref: {
            f: 'dailymed-entrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent clearance (CL/F) was 19.6 L/h and 52.4 L/h for entrectinib and M5',
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
      valor: '4-6',
      unidad: 'h',
      analito: 'entrectinib',
      ref: {
        f: 'dailymed-entrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The maximum entrectinib plasma concentration was reached 4 – 6 hours after oral administration of a 600 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '> 99',
      unidad: '%',
      analito: 'entrectinib y M5',
      ref: {
        f: 'dailymed-entrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Entrectinib and its active major metabolite M5 are both > 99% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '551',
      unidad: 'L',
      analito: 'entrectinib',
      ref: {
        f: 'dailymed-entrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent volume of distribution (V/F) was 551 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '19,6',
      unidad: 'L/h',
      analito: 'entrectinib',
      ref: { f: 'dailymed-entrectinib', sec: '12.3 · Farmacocinética', cita: 'The estimated apparent clearance (CL/F) was 19.6 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '83',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-entrectinib', sec: '12.3 · Farmacocinética', cita: '83% of radioactivity was excreted in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-entrectinib', 'c7c71b0c-2549-4495-86b6-c2807fa54908', 'ROZLYTREK (ENTRECTINIB) CAPSULE ROZLYTREK (ENTRECTINIB) PELLET', 'Rozlytrek', '19', '2026-10-16', '2026-11-19'),
    rengPubchem(25141092, 'entrectinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
