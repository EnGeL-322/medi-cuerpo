import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'liotironina',
    nombre: 'Liotironina',
    clase: 'Hormona tiroidea T₃',
    sinonimos: [ 'liotironina', 'liothyronine', 'Cytomel' ],
    formula: 'C15H12I3NO4',
    masaMolar: 650.97,
    smiles: 'C1=CC(=C(C=C1OC2=C(C=C(C=C2I)C[C@@H](C(=O)O)N)I)I)O',
    inchikey: 'AUYYCJSJGJYCDS-LBPRGKRZSA-N',
    cid: 5920,
    iupac: '(2S)-2-amino-3-[4-(4-hydroxy-3-iodophenoxy)-3,5-diiodophenyl]propanoic acid',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'liotironina-oral',
      producto: 'Cytomel · comprimido',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 ug, 25 ug o 50 ug por comprimido, según la etiqueta',
      sal: {
        nombre: 'Sal sódica de liotironina',
        ref: { f: 'dailymed-liotironina', sec: '11 · Descripción', cita: 'liothyronine sodium', codigo: '34089-3' }
      },
      excipientes: [ 'sulfato de calcio', 'almidón de maíz', 'gelatina', 'ácido esteárico', 'sacarosa', 'talco' ],
      usos: {
        t: 'Entre sus indicaciones está la sustitución hormonal en formas primarias, secundarias y terciarias de hipotiroidismo.',
        ref: {
          f: 'dailymed-liotironina',
          sec: '1 · Indicaciones',
          cita: 'As replacement in primary (thyroidal), secondary (pituitary), and tertiary',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-liotironina',
      advertencias: [
        {
          titulo: 'Uso para adelgazar',
          texto: 'La ficha advierte contra el uso para tratar la obesidad o perder peso.',
          organos: [],
          ref: { f: 'dailymed-liotironina', sec: 'Advertencia destacada', cita: 'NOT FOR TREATMENT OF OBESITY OR FOR WEIGHT LOSS', codigo: '34066-1' }
        }
      ],
      reacciones: [
        [
          'Arritmias y dificultad respiratoria, descritas en el contexto de exceso terapéutico.',
          '34084-4',
          'arrhythmias, myocardial infarction, dyspnea'
        ],
        [ 'Temblor e insomnio, descritos en el mismo contexto.', '34084-4', 'irritability, insomnia, tremors, muscle weakness' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 ug, 25 ug o 50 ug por comprimido, según la etiqueta; el activo va como sal sódica de liotironina. Los excipientes no son el principio activo.',
    usos: 'Entre sus indicaciones está la sustitución hormonal en formas primarias, secundarias y terciarias de hipotiroidismo.',
    actua: 'La T₃ entra en el núcleo celular y actúa sobre receptores que regulan la transcripción y la síntesis de proteínas.',
    recorrido: 'Se absorbe casi por completo. La ficha indica que se absorbe el 95 % en 4 h. La eliminación es principalmente renal. Parte de la hormona conjugada llega al colon y sale en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral de Cytomel.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral de Cytomel.',
          ref: {
            f: 'dailymed-liotironina',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets (round, white to off-white) available as follows',
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
      ocurre: 'Se absorbe casi por completo. La ficha indica que se absorbe el 95 % en 4 h.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe casi por completo. La ficha indica que se absorbe el 95 % en 4 h.',
          ref: { f: 'dailymed-liotironina', sec: '12.3 · Farmacocinética', cita: 'T3 is almost totally absorbed, 95 percent in 4 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La T₃ tiene menor afinidad que la T₄ por varias proteínas transportadoras del suero. La fracción libre ejerce la actividad metabólica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La T₃ tiene menor afinidad que la T₄ por varias proteínas transportadoras del suero. La fracción libre ejerce la actividad metabólica.',
          ref: {
            f: 'dailymed-liotironina',
            sec: '12.3 · Farmacocinética',
            cita: 'Liothyronine sodium (T3) is not firmly bound to serum protein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores nucleares de hormona tiroidea',
        efecto: 'La T₃ entra en el núcleo celular y actúa sobre receptores que regulan la transcripción y la síntesis de proteínas.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'La T₃ entra en el núcleo celular y actúa sobre receptores que regulan la transcripción y la síntesis de proteínas.',
            ref: {
              f: 'dailymed-liotironina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Thyroid hormones exert their physiologic actions through control of DNA transcription and protein synthesis',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La transformación principal de las hormonas tiroideas es la desyodación sucesiva. También se forman glucurónidos y sulfatos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La transformación principal de las hormonas tiroideas es la desyodación sucesiva. También se forman glucurónidos y sulfatos.',
          ref: {
            f: 'dailymed-liotironina',
            sec: '12.3 · Farmacocinética',
            cita: 'major pathway of thyroid hormone metabolism is through sequential deiodination',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es principalmente renal. Parte de la hormona conjugada llega al colon y sale en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es principalmente renal. Parte de la hormona conjugada llega al colon y sale en las heces.',
          ref: {
            f: 'dailymed-liotironina',
            sec: '12.3 · Farmacocinética',
            cita: 'Thyroid hormones are primarily eliminated by the kidneys',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida biológica',
      valor: '≈2,5',
      unidad: 'días',
      analito: 'liotironina',
      ref: { f: 'dailymed-liotironina', sec: '12.3 · Farmacocinética', cita: 'The biological half-life is about 2-1/2 days', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-liotironina', '51452b31-ff68-4e0c-b982-c15502ebf1d3', 'CYTOMEL (LIOTHYRONINE SODIUM) TABLET', 'Cytomel', '15', '2026-05-21', '2026-11-12'),
    rengPubchem(5920, 'liotironina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
