import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zongertinib',
    nombre: 'Zongertinib',
    clase: 'Inhibidor de la cinasa HER2',
    sinonimos: [ 'zongertinib', 'Hernexeos' ],
    formula: 'C29H29N9O2',
    masaMolar: 535.6,
    smiles: 'CC1=C(C=CC(=C1)NC2=NC=NC3=CN=C(N=C32)N4CCC(CC4)NC(=O)C=C)OC5=CC6=C(C=C5)N(C=N6)C',
    inchikey: 'YSGNGFPNTLERCR-UHFFFAOYSA-N',
    cid: 160283094,
    iupac: 'N-[1-[4-[3-methyl-4-(1-methylbenzimidazol-5-yl)oxyanilino]pyrimido[5,4-d]pyrimidin-6-yl]piperidin-4-yl]prop-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'zongertinib-oral',
      producto: 'HERNEXEOS · comprimido recubierto con película',
      titular: 'BOEHRINGER INGELHEIM PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '60 mg por comprimido, según la etiqueta',
      excipientes: [
        'Dióxido de silicio coloidal',
        'Croscarmelosa sódica',
        'Acetato succinato de hipromelosa',
        'Manitol',
        'Celulosa microcristalina',
        'Estearil fumarato de sodio',
        'Óxido de hierro amarillo',
        'Mono y dicaprilocaprato de glicerol',
        'Alcohol polivinílico',
        'Laurilsulfato de sodio',
        'Talco',
        'Dióxido de titanio'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico no escamoso avanzado con mutaciones activadoras del dominio cinasa de HER2.',
        ref: {
          f: 'dailymed-zongertinib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult patients with unresectable or metastatic non-squamous non-small cell lung cancer (NSCLC) whose tumors have HER2 (ERBB2) tyrosine kinase domain activating mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zongertinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas al inicio, cada 2 semanas las 12 primeras semanas y después cada mes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-zongertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests including ALT, AST, and total bilirubin at baseline prior to administration of HERNEXEOS, every 2 weeks during the first 12 weeks',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Disfunción ventricular izquierda',
          texto: 'Medir la fracción de eyección al inicio y a intervalos regulares.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-zongertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Left Ventricular Dysfunction : Monitor LVEF at baseline prior to administration and at regular intervals during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas nuevos o que empeoran, como disnea, tos o fiebre.',
          organos: [],
          ref: {
            f: 'dailymed-zongertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening symptoms indicative of ILD/pneumonitis (e.g., dyspnea, cough, fever)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, exantema, hepatotoxicidad, fatiga, náuseas, dolor musculoesquelético e infección respiratoria alta.',
          '34084-4',
          'Most common adverse reactions (≥ 20%) are diarrhea, rash, hepatotoxicity, fatigue, nausea, musculoskeletal pain, and upper respiratory tract infection'
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
    contiene: 'Comprimido recubierto con película: 60 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico no escamoso avanzado con mutaciones activadoras del dominio cinasa de HER2.',
    actua: 'Inhibe la cinasa HER2: in vitro bloqueó su fosforilación, su señalización y la proliferación de células de cáncer de pulmón con mutaciones activadoras de HER2.',
    recorrido: 'La biodisponibilidad oral absoluta es del 76 % y el pico aparece hacia las 2 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras 60 mg marcados en participantes sanos, alrededor del 93 % se recuperó en las heces (31 % sin cambios) y el 1,3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '3 · Formas y concentraciones',
            cita: 'yellow, oval, biconvex, film-coated tablets, debossed with',
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
      ocurre: 'La biodisponibilidad oral absoluta es del 76 % y el pico aparece hacia las 2 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 76 % y el pico aparece hacia las 2 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'Zongertinib absolute oral bioavailability is 76%', codigo: '43682-4' }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de unas 2 horas.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Zongertinib median (min, max) time to maximum plasma concentration (T max ) is approximately 2 hours (min, max: 2, 6 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes de la Cmax ni del AUC.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in zongertinib C max and AUC were observed following administration of a single 240 mg dose',
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
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 118 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 118 L.',
          ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'Zongertinib plasma protein binding is > 99%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 118 L.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent (oral) volume of distribution is 118 L (29%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'HER2',
        efecto: 'Inhibe la cinasa HER2: in vitro bloqueó su fosforilación, su señalización y la proliferación de células de cáncer de pulmón con mutaciones activadoras de HER2.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la cinasa HER2: in vitro bloqueó su fosforilación, su señalización y la proliferación de células de cáncer de pulmón con mutaciones activadoras de HER2.',
            ref: {
              f: 'dailymed-zongertinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Zongertinib is a kinase inhibitor of human epidermal growth factor receptor 2 (HER2)',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro inhibió la fosforilación de HER2, su señalización y la proliferación de células con mutaciones activadoras de HER2.',
            ref: {
              f: 'dailymed-zongertinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'zongertinib inhibited phosphorylation of HER2, downstream signaling of HER2 (phosphorylation of ERK), and proliferation of lung cancer cells harboring HER2 tyrosine kinase domain activating mutations',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro, la oxidación por el CYP (sobre todo CYP3A4 y CYP3A5) supone el 48-62 % de su metabolismo hepático, la glucuronidación el 13-25 % y la conjugación con glutatión el 13-26 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro, la oxidación por el CYP (sobre todo CYP3A4 y CYP3A5) supone el 48-62 % de su metabolismo hepático, la glucuronidación el 13-25 % y la conjugación con glutatión el 13-26 %.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Based on in vitro metabolite profiling, CYP-mediated oxidation pathways represent 48% to 62% (mainly CYP3A4 and CYP3A5), glucuronidation 13% to 25% (mainly UGT1A4)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 60 mg marcados en participantes sanos, alrededor del 93 % se recuperó en las heces (31 % sin cambios) y el 1,3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 60 mg marcados en participantes sanos, alrededor del 93 % se recuperó en las heces (31 % sin cambios) y el 1,3 % en la orina.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 93% of the dose was recovered in feces (31% unchanged) and 1.3% in urine (0.2% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de 12 horas y el aclaramiento oral aparente, de 115 mL/min.',
          ref: {
            f: 'dailymed-zongertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Zongertinib effective half-life is 12 hours (21%) with an apparent (oral) clearance of 115 mL/min (31%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '76',
      unidad: '%',
      analito: 'zongertinib',
      ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'Zongertinib absolute oral bioavailability is 76%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'zongertinib',
      ref: {
        f: 'dailymed-zongertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentration (T max ) is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'zongertinib',
      ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'Zongertinib plasma protein binding is > 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '118',
      unidad: 'L',
      analito: 'zongertinib',
      ref: {
        f: 'dailymed-zongertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent (oral) volume of distribution is 118 L (29%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '12',
      unidad: 'h',
      analito: 'zongertinib',
      ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'Zongertinib effective half-life is 12 hours (21%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '115',
      unidad: 'mL/min',
      analito: 'zongertinib',
      ref: { f: 'dailymed-zongertinib', sec: '12.3 · Farmacocinética', cita: 'with an apparent (oral) clearance of 115 mL/min (31%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '93 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'participantes sanos',
      condiciones: 'dosis oral única marcada de 60 mg',
      ref: {
        f: 'dailymed-zongertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 93% of the dose was recovered in feces (31% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zongertinib', 'd3fabf12-354e-4e5c-b5de-20fdb579b783', 'HERNEXEOS (ZONGERTINIB) TABLET, FILM COATED', 'HERNEXEOS', '7', '2026-08-17', '2026-11-19'),
    rengPubchem(160283094, 'zongertinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
