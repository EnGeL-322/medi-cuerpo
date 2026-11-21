import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'crizotinib',
    nombre: 'Crizotinib',
    clase: 'Inhibidor de tirosina cinasas ALK, ROS1 y MET',
    sinonimos: [ 'crizotinib', 'Xalkori' ],
    formula: 'C21H22Cl2FN5O',
    masaMolar: 450.3,
    smiles: 'C[C@H](C1=C(C=CC(=C1Cl)F)Cl)OC2=C(N=CC(=C2)C3=CN(N=C3)C4CCNCC4)N',
    inchikey: 'KTEIFNKAUNYNJU-GFCCVEGCSA-N',
    cid: 11626560,
    iupac: '3-[(1R)-1-(2,6-dichloro-3-fluorophenyl)ethoxy]-5-(1-piperidin-4-ylpyrazol-4-yl)pyridin-2-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'crizotinib-oral',
      producto: 'Xalkori · cápsula',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '250 mg o 200 mg por cápsula, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'microcrystalline cellulose',
        'anhydrous dibasic calcium phosphate',
        'magnesium stearate',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferric oxide red',
        'shellac',
        'propylene glycol',
        'ammonia',
        'potassium hydroxide',
        'ferrosoferric oxide',
        'sodium starch glycolate type a'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico ALK o ROS1 positivo y de otros tumores ALK positivos, según la etiqueta.',
        ref: {
          f: 'dailymed-crizotinib',
          sec: '1 · Indicaciones',
          cita: 'adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors are anaplastic lymphoma kinase (ALK) or ROS1-positive as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-crizotinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas periódicas.',
          organos: [ 'higado' ],
          ref: { f: 'dailymed-crizotinib', sec: '5 · Advertencias y precauciones', cita: 'Monitor with periodic liver testing', codigo: '43685-7' }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares que sugieran neumonitis.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-crizotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pérdida grave de visión',
          texto: 'Puede causar cambios visuales, incluida una pérdida grave de visión; vigilar la toxicidad ocular.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-crizotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Visual Loss: XALKORI can cause visual changes including severe visual loss',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el cáncer de pulmón, las más frecuentes (25 % o más): alteraciones visuales, náuseas, diarrea, vómitos, edema, estreñimiento, aumento de transaminasas, fatiga y neuropatía, entre otras.',
          '34084-4',
          'The most common adverse reactions (≥25%) in adult patients with NSCLC are vision disorders, nausea, diarrhea, vomiting, edema, constipation, elevated transaminases, fatigue'
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
    contiene: 'Cápsula: 250 mg o 200 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico ALK o ROS1 positivo y de otros tumores ALK positivos, según la etiqueta.',
    actua: 'Inhibe receptores de tirosina cinasas como ALK, el receptor del factor de crecimiento de hepatocitos (c-Met), ROS1 y RON.',
    recorrido: 'La mediana del tiempo hasta el pico es de 4 a 6 horas y la biodisponibilidad absoluta media, del 43 %. Tras 250 mg marcados, el 63 % de la dosis se recuperó en las heces (53 % sin cambios) y el 22 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '3 · Formas y concentraciones',
            cita: 'hard gelatin capsule, size 1, white opaque body and pink opaque cap',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 4 a 6 horas y la biodisponibilidad absoluta media, del 43 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 4 a 6 horas y la biodisponibilidad absoluta media, del 43 %.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A single crizotinib capsule dose was absorbed with median time to achieve peak concentration (T max ) of 4 to 6 hours, and the mean absolute bioavailability of 43%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo el AUC y la Cmax de la cápsula un 14 %.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal, reduced AUC 0-INF and maximum plasma concentration (C max ) of crizotinib each by 14% for the capsule formulation',
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
      ocurre: 'Se une en un 91 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución tras una dosis intravenosa es de 1772 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 91 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución tras una dosis intravenosa es de 1772 L.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of crizotinib is 91% and is independent of drug concentration in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 1772 L tras una dosis intravenosa.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean volume of distribution (V ss ) of crizotinib was 1772 L following a single intravenous dose',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ALK, ROS1 y MET',
        efecto: 'Inhibe receptores de tirosina cinasas como ALK, el receptor del factor de crecimiento de hepatocitos (c-Met), ROS1 y RON.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe receptores de tirosina cinasas como ALK, el receptor del factor de crecimiento de hepatocitos (c-Met), ROS1 y RON.',
            ref: {
              f: 'dailymed-crizotinib',
              sec: '12.1 · Mecanismo de acción',
              cita: "Crizotinib is an inhibitor of receptor tyrosine kinases including ALK, Hepatocyte Growth Factor Receptor (HGFR, c-Met), ROS1 (c-ros), and Recepteur d'Origine Nantais (RON)",
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
          ref: { f: 'dailymed-crizotinib', sec: '12.3 · Farmacocinética', cita: 'Crizotinib is predominantly metabolized by CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 250 mg marcados, el 63 % de la dosis se recuperó en las heces (53 % sin cambios) y el 22 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 250 mg marcados, el 63 % de la dosis se recuperó en las heces (53 % sin cambios) y el 22 % en la orina.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: '63% (53% as unchanged) of the administered dose was recovered in feces and 22% (2.3% as unchanged) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática terminal aparente media es de 42 horas.',
          ref: {
            f: 'dailymed-crizotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent plasma terminal half-life of crizotinib was 42 hours following single doses of crizotinib in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '4-6',
      unidad: 'h',
      analito: 'crizotinib',
      ref: {
        f: 'dailymed-crizotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'median time to achieve peak concentration (T max ) of 4 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '43',
      unidad: '%',
      analito: 'crizotinib',
      ref: { f: 'dailymed-crizotinib', sec: '12.3 · Farmacocinética', cita: 'the mean absolute bioavailability of 43%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '91',
      unidad: '%',
      analito: 'crizotinib',
      ref: { f: 'dailymed-crizotinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of crizotinib is 91%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario (vía intravenosa)',
      valor: '1772',
      unidad: 'L',
      analito: 'crizotinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-crizotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean volume of distribution (V ss ) of crizotinib was 1772 L following a single intravenous dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática terminal aparente',
      valor: '42',
      unidad: 'h',
      analito: 'crizotinib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-crizotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent plasma terminal half-life of crizotinib was 42 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '63',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 250 mg',
      ref: {
        f: 'dailymed-crizotinib',
        sec: '12.3 · Farmacocinética',
        cita: '63% (53% as unchanged) of the administered dose was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-crizotinib', '2a51b0de-47d6-455e-a94c-d2c737b04ff7', 'XALKORI (CRIZOTINIB) CAPSULE XALKORI (CRIZOTINIB) CAPSULE, COATED PELLETS', 'Xalkori', '47', '2026-11-02', '2026-11-19'),
    rengPubchem(11626560, 'crizotinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
