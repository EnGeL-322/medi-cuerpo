import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ritlecitinib',
    nombre: 'Ritlecitinib',
    clase: 'Inhibidor irreversible de JAK3 y de la familia de cinasas TEC',
    sinonimos: [ 'ritlecitinib', 'Litfulo' ],
    formula: 'C15H19N5O',
    masaMolar: 285.34,
    smiles: 'C[C@H]1CC[C@H](CN1C(=O)C=C)NC2=NC=NC3=C2C=CN3',
    inchikey: 'CBRJPFGIXUFMTM-WDEREUQCSA-N',
    cid: 118115473,
    iupac: '1-[(2S,5R)-2-methyl-5-(7H-pyrrolo[2,3-d]pyrimidin-4-ylamino)piperidin-1-yl]prop-2-en-1-one',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'ritlecitinib-oral',
      producto: 'Litfulo · cápsula',
      titular: 'U.S. PHARMACEUTICALS',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tosilato de ritlecitinib',
        ref: { f: 'dailymed-ritlecitinib', sec: '11 · Descripción', cita: 'RITLECITINIB TOSYLATE', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'crospovidone, unspecified',
        'glyceryl dibehenate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'ferric oxide yellow',
        'fd&c blue no. 1'
      ],
      usos: {
        t: 'Tratamiento de la alopecia areata grave en adultos y adolescentes desde 12 años.',
        ref: {
          f: 'dailymed-ritlecitinib',
          sec: '1 · Indicaciones',
          cita: 'LITFULO is a kinase inhibitor indicated for the treatment of severe alopecia areata in adults and adolescents 12 years and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ritlecitinib',
      advertencias: [
        {
          titulo: 'Infecciones graves',
          texto: 'Mayor riesgo de infecciones bacterianas, fúngicas, víricas y oportunistas graves, incluida la tuberculosis; interrumpir si aparece una infección grave.',
          organos: [],
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: 'Advertencia destacada',
            cita: 'Increased risk of serious bacterial, fungal, viral, and opportunistic infections that may lead to hospitalization or death, including tuberculosis (TB)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Mortalidad, neoplasias, acontecimientos cardiovasculares y trombosis',
          texto: 'La advertencia de los inhibidores de JAK incluye mayor mortalidad, neoplasias malignas, acontecimientos cardiovasculares mayores y trombosis.',
          organos: [],
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: 'Advertencia destacada',
            cita: 'SERIOUS INFECTIONS, MORTALITY, MALIGNANCY, MAJOR ADVERSE CARDIOVASCULAR EVENTS (MACE), and THROMBOSIS',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Anomalías de laboratorio',
          texto: 'Hay que medir los linfocitos y las plaquetas antes de empezar.',
          organos: [ 'plaquetas' ],
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Perform ALC and platelet counts prior to LITFULO initiation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (1 % o más): cefalea, diarrea, acné, erupción, urticaria, foliculitis, fiebre, dermatitis atópica, mareo, aumento de la creatina fosfocinasa, herpes zóster, descenso de los hematíes y estomatitis.',
          '34084-4',
          'Most common adverse reactions (incidence ≥1%) are headache, diarrhea, acne, rash, urticaria, folliculitis, pyrexia, atopic dermatitis, dizziness, blood creatine phosphokinase increased, herpes zoster, red blood cell count decreased, and stomatitis'
        ],
        [
          'La tabla de reacciones recoge las aparecidas en el 1 % o más y con más frecuencia que con placebo durante hasta 24 semanas.',
          '34084-4',
          'Reported in ≥1% of subjects and at a higher rate than placebo for up to 24 weeks'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 50 mg por cápsula, según la etiqueta; el activo va como tosilato de ritlecitinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la alopecia areata grave en adultos y adolescentes desde 12 años.',
    actua: 'Inhibe de forma irreversible la JAK3 y la familia de cinasas TEC bloqueando el sitio de unión del ATP.',
    recorrido: 'La biodisponibilidad oral absoluta es de alrededor del 64 % y el pico se alcanza en 1 hora; los alimentos no tienen un impacto clínicamente significativo. Alrededor del 66 % de una dosis marcada se excreta en la orina y el 20 % en las heces; un 4 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 50 mg of ritlecitinib, size 3, opaque capsules',
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
      ocurre: 'La biodisponibilidad oral absoluta es de alrededor del 64 % y el pico se alcanza en 1 hora; los alimentos no tienen un impacto clínicamente significativo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es de alrededor del 64 % y el pico se alcanza en 1 hora; los alimentos no tienen un impacto clínicamente significativo.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The ritlecitinib absolute oral bioavailability is approximately 64%. Ritlecitinib peak plasma concentrations were reached within 1 hour following an oral dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax bajó alrededor de un 32 % y el AUC subió un 11 %.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The coadministration of a 100 mg ritlecitinib capsule with a high-fat meal reduced the ritlecitinib C max by ~32% and AUC inf was increased by 11%',
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
      ocurre: 'Alrededor del 14 % del ritlecitinib circulante se une a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 14 % del ritlecitinib circulante se une a las proteínas del plasma.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 14% of circulating ritlecitinib is bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'JAK3 y cinasas de la familia TEC',
        efecto: 'Inhibe de forma irreversible la JAK3 y la familia de cinasas TEC bloqueando el sitio de unión del ATP.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma irreversible la JAK3 y la familia de cinasas TEC bloqueando el sitio de unión del ATP.',
            ref: {
              f: 'dailymed-ritlecitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ritlecitinib irreversibly inhibits Janus kinase 3 (JAK3) and the tyrosine kinase expressed in hepatocellular carcinoma (TEC) kinase family by blocking the adenosine triphosphate (ATP) binding site',
              codigo: '43679-0'
            }
          },
          {
            t: 'En células inhibe la fosforilación de STAT inducida por citocinas a través de receptores dependientes de JAK3.',
            ref: {
              f: 'dailymed-ritlecitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In cellular settings, ritlecitinib inhibits cytokine induced STAT phosphorylation mediated by JAK3-dependent receptors',
              codigo: '43679-0'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por varias vías, ninguna con más del 25 % del total: glutatión S-transferasas y enzimas CYP (CYP3A, CYP2C8, CYP1A2 y CYP2C9).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por varias vías, ninguna con más del 25 % del total: glutatión S-transferasas y enzimas CYP (CYP3A, CYP2C8, CYP1A2 y CYP2C9).',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of ritlecitinib is mediated by multiple pathways with no single route contributing to more than 25% of the total metabolism',
            codigo: '43682-4'
          }
        },
        {
          t: 'Entre las vías figuran las enzimas CYP (CYP3A, CYP2C8, CYP1A2 y CYP2C9).',
          ref: { f: 'dailymed-ritlecitinib', sec: '12.3 · Farmacocinética', cita: 'CYP enzymes (CYP3A, CYP2C8, CYP1A2, and CYP2C9)', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 66 % de una dosis marcada se excreta en la orina y el 20 % en las heces; un 4 % sale sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 66 % de una dosis marcada se excreta en la orina y el 20 % en las heces; un 4 % sale sin cambios por la orina.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 66% of radiolabeled ritlecitinib dose is excreted in the urine and 20% in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media va de 1,3 a 2,3 horas.',
          ref: {
            f: 'dailymed-ritlecitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The ritlecitinib mean terminal half-life ranges from 1.3 to 2.3 hours',
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
      valor: '64 (aprox.)',
      unidad: '%',
      analito: 'ritlecitinib',
      ref: {
        f: 'dailymed-ritlecitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The ritlecitinib absolute oral bioavailability is approximately 64%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 1',
      unidad: 'h',
      analito: 'ritlecitinib',
      ref: {
        f: 'dailymed-ritlecitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Ritlecitinib peak plasma concentrations were reached within 1 hour following an oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '14 (aprox.)',
      unidad: '%',
      analito: 'ritlecitinib',
      ref: {
        f: 'dailymed-ritlecitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 14% of circulating ritlecitinib is bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '1,3-2,3',
      unidad: 'h',
      analito: 'ritlecitinib',
      ref: {
        f: 'dailymed-ritlecitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The ritlecitinib mean terminal half-life ranges from 1.3 to 2.3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis marcada excretada en la orina',
      valor: '66 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-ritlecitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 66% of radiolabeled ritlecitinib dose is excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ritlecitinib', '1882f799-61b0-4813-965a-4910c4ae419c', 'LITFULO (RITLECITINIB) CAPSULE', 'Litfulo', '3', '2026-06-22', '2026-11-19'),
    rengPubchem(118115473, 'ritlecitinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
