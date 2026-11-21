import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'treprostinil',
    nombre: 'Treprostinil',
    clase: 'Análogo de la prostaciclina (vasodilatador pulmonar)',
    sinonimos: [ 'treprostinil', 'Orenitram' ],
    formula: 'C23H34O5',
    masaMolar: 390.5,
    smiles: 'CCCCC[C@@H](CC[C@H]1[C@@H](C[C@H]2[C@@H]1CC3=C(C2)C(=CC=C3)OCC(=O)O)O)O',
    inchikey: 'PAJMKGZZBBTTOY-ZFORQUDYSA-N',
    cid: 6918140,
    iupac: '2-[[(1R,2R,3aS,9aS)-2-hydroxy-1-[(3S)-3-hydroxyoctyl]-2,3,3a,4,9,9a-hexahydro-1H-cyclopenta[g]naphthalen-5-yl]oxy]acetic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'treprostinil-oral',
      producto: 'Orenitram · comprimido de liberación prolongada',
      titular: 'UNITED THERAPEUTICS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '0.125 mg, 0.25 mg, 1 mg, 2.5 mg o 5 mg por comprimido, según la etiqueta',
      excipientes: [
        'xylitol',
        'maltodextrin',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'cellulose acetate',
        'triethyl citrate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'shellac',
        'ferrosoferric oxide',
        'butyl alcohol',
        'alcohol',
        'isopropyl alcohol',
        'propylene glycol'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial pulmonar (grupo 1 de la OMS) para retrasar la progresión y mejorar la capacidad de ejercicio.',
        ref: {
          f: 'dailymed-treprostinil',
          sec: '1 · Indicaciones',
          cita: 'Orenitram is a prostacyclin mimetic indicated for the treatment of pulmonary arterial hypertension (PAH) (WHO Group 1): To delay disease progression and to improve exercise capacity',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-treprostinil',
      advertencias: [
        {
          titulo: 'Empeoramiento al suspenderlo',
          texto: 'No suspender la dosis de forma brusca.',
          organos: [],
          ref: { f: 'dailymed-treprostinil', sec: '5 · Advertencias y precauciones', cita: 'Do not abruptly discontinue dosing', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 %): cefalea, diarrea, náuseas, vómitos, dolor de mandíbula y rubor.',
          '34084-4',
          'Most common adverse reactions (incidence >10%) reported in clinical studies in patients treated with Orenitram compared with placebo are headache, diarrhea, nausea, vomiting, jaw pain, and flushing'
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
    contiene: 'Comprimido de liberación prolongada: 0.125 mg, 0.25 mg, 1 mg, 2.5 mg o 5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial pulmonar (grupo 1 de la OMS) para retrasar la progresión y mejorar la capacidad de ejercicio.',
    actua: 'Dilata directamente los lechos arteriales pulmonar y sistémico, inhibe la agregación de las plaquetas y frena la proliferación del músculo liso.',
    recorrido: 'La biodisponibilidad oral absoluta es de alrededor del 17 %; la comida aumenta la absorción, por lo que se toma con alimentos. Solo el 1,13 % y el 0,19 % se eliminan sin cambios por las heces y la orina; el resto sale como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: libera el treprostinil poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: libera el treprostinil poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '3 · Formas y concentraciones',
            cita: 'Orenitram (treprostinil) extended-release tablets are available in the following five strengths',
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
      ocurre: 'La biodisponibilidad oral absoluta es de alrededor del 17 %; la comida aumenta la absorción, por lo que se toma con alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es de alrededor del 17 %; la comida aumenta la absorción, por lo que se toma con alimentos.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of Orenitram is approximately 17%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó un 49 % y la Cmax un 13 %.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'The AUC inf of treprostinil was increased by 49% and the C max was increased by an average of 13% when Orenitram was administered following a high-fat, high-calorie meal',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 96 % a las proteínas del plasma humano.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 96 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'The treprostinil component of Orenitram is highly bound to human plasma proteins, approximately 96%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Mimético de la prostaciclina',
        efecto: 'Dilata directamente los lechos arteriales pulmonar y sistémico, inhibe la agregación de las plaquetas y frena la proliferación del músculo liso.',
        lugar: [ 'pulmones', 'vasos', 'plaquetas' ],
        datos: [
          {
            t: 'Dilata directamente los lechos arteriales pulmonar y sistémico, inhibe la agregación de las plaquetas y frena la proliferación del músculo liso.',
            ref: {
              f: 'dailymed-treprostinil',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The major pharmacologic actions of treprostinil are direct vasodilation of pulmonary and systemic arterial vascular beds, inhibition of platelet aggregation, and inhibition of smooth muscle cell proliferation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en su cadena lateral, sobre todo por la CYP2C8 y, en menor medida, por la CYP2C9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en su cadena lateral, sobre todo por la CYP2C8 y, en menor medida, por la CYP2C9.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'Treprostinil is primarily metabolized by CYP2C8 and to a lesser extent by CYP2C9',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se transforma por oxidación, rotura oxidativa, deshidratación y conjugación con ácido glucurónico.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'treprostinil was extensively metabolized on the side chain of the molecule via oxidation, oxidative cleavage, dehydration, and glucuronic acid conjugation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Solo el 1,13 % y el 0,19 % se eliminan sin cambios por las heces y la orina; el resto sale como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Solo el 1,13 % y el 0,19 % se eliminan sin cambios por las heces y la orina; el resto sale como metabolitos.',
          ref: {
            f: 'dailymed-treprostinil',
            sec: '12.3 · Farmacocinética',
            cita: 'Only 1.13% and 0.19% is excreted as unchanged parent drug in the feces and urine, respectively',
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
      valor: '17 (aprox.)',
      unidad: '%',
      analito: 'treprostinil',
      ref: {
        f: 'dailymed-treprostinil',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of Orenitram is approximately 17%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96 (aprox.)',
      unidad: '%',
      analito: 'treprostinil',
      ref: {
        f: 'dailymed-treprostinil',
        sec: '12.3 · Farmacocinética',
        cita: 'highly bound to human plasma proteins, approximately 96%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excreción fecal sin cambios',
      valor: '1,13',
      unidad: '% de la dosis',
      analito: 'treprostinil inalterado',
      ref: {
        f: 'dailymed-treprostinil',
        sec: '12.3 · Farmacocinética',
        cita: 'Only 1.13% and 0.19% is excreted as unchanged parent drug in the feces and urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-treprostinil', '8ed2003a-c801-411e-831e-d06079bb0d7c', 'ORENITRAM (TREPROSTINIL) TABLET, EXTENDED RELEASE ORENITRAM (TREPROSTINIL) KIT', 'Orenitram', '24', '2024-12-06', '2026-11-19'),
    rengPubchem(6918140, 'treprostinil', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
