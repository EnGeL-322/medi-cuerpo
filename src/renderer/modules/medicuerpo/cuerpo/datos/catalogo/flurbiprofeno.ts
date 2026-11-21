import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'flurbiprofeno',
    nombre: 'Flurbiprofeno',
    clase: 'Antiinflamatorio no esteroideo (derivado arilpropiónico)',
    sinonimos: [ 'flurbiprofen', 'Ansaid' ],
    formula: 'C15H13FO2',
    masaMolar: 244.26,
    smiles: 'CC(C1=CC(=C(C=C1)C2=CC=CC=C2)F)C(=O)O',
    inchikey: 'SYTBZMRGLBWNTM-UHFFFAOYSA-N',
    cid: 3394,
    iupac: '2-(3-fluoro-4-phenylphenyl)propanoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'flurbiprofeno-oral',
      producto: 'LURBIRO · comprimido',
      titular: 'IPG PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromellose 2910 (3 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol 400',
        'polyethylene glycol 8000',
        'polysorbate 80',
        'titanium dioxide',
        'fd&c blue no. 1 aluminum lake'
      ],
      usos: {
        t: 'Alivio de los signos y síntomas de la artritis reumatoide y de la artrosis.',
        ref: {
          f: 'dailymed-flurbiprofeno',
          sec: '1 · Indicaciones',
          cita: 'For relief of the signs and symptoms of rheumatoid arthritis. For relief of the signs and symptoms of osteoarthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-flurbiprofeno',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: 'Advertencia destacada',
            cita: 'Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia, úlcera y perforación digestivas',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación graves del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hay que suspenderlo si las pruebas hepáticas siguen alteradas o empeoran o aparecen signos de enfermedad hepática.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue if abnormal liver tests persist or worsen or if clinical signs and symptoms of liver disease develop',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 3 % en los ensayos): dolor abdominal, dispepsia, náuseas, diarrea, estreñimiento, cefalea, edema y signos de infección urinaria.',
          '34084-4',
          'Most common adverse reactions (incidence > 3% from clinical trials) are: abdominal pain, dyspepsia, nausea, diarrhea, constipation, headache, edema, signs and symptoms suggesting urinary tract infection'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran los acontecimientos trombóticos cardiovasculares y la hemorragia, úlcera y perforación digestivas.',
          '34084-4',
          'Cardiovascular Thrombotic Events [ see Warnings and Precautions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio de los signos y síntomas de la artritis reumatoide y de la artrosis.',
    actua: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
    recorrido: 'Se absorbe con rapidez y sin estereoselectividad, con el pico plasmático a unas 2 horas; los alimentos y los antiácidos pueden cambiar la velocidad pero no la magnitud de la absorción. Sus metabolitos se eliminan sobre todo por el riñón; el aclaramiento renal es una vía menor para el flurbiprofeno sin cambios (3 % o menos del aclaramiento total).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '3 · Formas y concentraciones',
            cita: '100 mg round, convex, blue, film-coated tablets debossed "NH" and "100"',
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
      ocurre: 'Se absorbe con rapidez y sin estereoselectividad, con el pico plasmático a unas 2 horas; los alimentos y los antiácidos pueden cambiar la velocidad pero no la magnitud de la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y sin estereoselectividad, con el pico plasmático a unas 2 horas; los alimentos y los antiácidos pueden cambiar la velocidad pero no la magnitud de la absorción.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Flurbiprofen is rapidly and non-stereoselectively absorbed from flurbiprofen, with peak plasma concentrations occurring at approximately 2 hours',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con alimentos o antiácidos puede cambiar la velocidad pero no la magnitud de la absorción.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Administration of flurbiprofen with either food or antacids may alter the rate but not the extent of flurbiprofen absorption',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Los dos enantiómeros se unen en más del 99 % a las proteínas del plasma, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Los dos enantiómeros se unen en más del 99 % a las proteínas del plasma, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Both flurbiprofen enantiomers are more than 99% bound to plasma proteins, primarily albumin',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa (COX-1 y COX-2)',
        efecto: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
        lugar: [],
        datos: [
          {
            t: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
            ref: {
              f: 'dailymed-flurbiprofeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of flurbiprofen, like that of other NSAIDs, is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "In vitro, la CYP2C9 tiene un papel importante en su paso al metabolito principal, el 4'-hidroxi-flurbiprofeno; el metabolismo hepático puede suponer más del 90 % de su eliminación.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "In vitro, la CYP2C9 tiene un papel importante en su paso al metabolito principal, el 4'-hidroxi-flurbiprofeno; el metabolismo hepático puede suponer más del 90 % de su eliminación.",
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Hepatic metabolism may account for > 90% of flurbiprofen elimination',
            codigo: '34090-1'
          }
        },
        {
          t: "In vitro, la CYP2C9 interviene de forma importante en su paso a 4'-hidroxi-flurbiprofeno.",
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: "In vitro studies have demonstrated that cytochrome CYP2C9 plays an important role in the metabolism of flurbiprofen to its major metabolite 4'-hydroxy-flurbiprofen",
            codigo: '34090-1'
          }
        },
        {
          t: 'A diferencia de otros derivados arilpropiónicos como el ibuprofeno, el paso de R- a S-flurbiprofeno es mínimo.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Unlike other arylpropionic acid derivatives (e.g., ibuprofen), metabolism of R-flurbiprofen to S-flurbiprofen is minimal',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "4'-hidroxi-flurbiprofeno",
          actividad: 'inactivo',
          nota: 'Metabolito principal, con poca actividad antiinflamatoria en modelos animales.',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: "The 4'-hydroxy-flurbiprofen metabolite showed little anti-inflammatory activity in animal models of inflammation",
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sus metabolitos se eliminan sobre todo por el riñón; el aclaramiento renal es una vía menor para el flurbiprofeno sin cambios (3 % o menos del aclaramiento total).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sus metabolitos se eliminan sobre todo por el riñón; el aclaramiento renal es una vía menor para el flurbiprofeno sin cambios (3 % o menos del aclaramiento total).',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '5.6 Renal Toxicity and Hyperkalemia',
            cita: 'Flurbiprofen metabolites are eliminated primarily by the kidneys',
            codigo: '42229-5'
          }
        },
        {
          t: 'El aclaramiento renal es una vía importante para los metabolitos pero menor para el flurbiprofeno inalterado (3 % o menos del total).',
          ref: {
            f: 'dailymed-flurbiprofeno',
            sec: '12 · Farmacología clínica',
            cita: 'Renal clearance is an important route of elimination for flurbiprofen metabolites, but a minor route of elimination for unchanged flurbiprofen (≤ 3% of total clearance)',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'flurbiprofeno',
      ref: {
        f: 'dailymed-flurbiprofeno',
        sec: '12 · Farmacología clínica',
        cita: 'with peak plasma concentrations occurring at approximately 2 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'flurbiprofeno',
      ref: {
        f: 'dailymed-flurbiprofeno',
        sec: '12 · Farmacología clínica',
        cita: 'Both flurbiprofen enantiomers are more than 99% bound to plasma proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Eliminación por metabolismo hepático',
      valor: '> 90',
      unidad: '%',
      analito: 'flurbiprofeno',
      ref: {
        f: 'dailymed-flurbiprofeno',
        sec: '12 · Farmacología clínica',
        cita: 'Hepatic metabolism may account for > 90% of flurbiprofen elimination',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento renal del flurbiprofeno inalterado',
      valor: '≤ 3',
      unidad: '%',
      analito: 'flurbiprofeno inalterado',
      ref: {
        f: 'dailymed-flurbiprofeno',
        sec: '12 · Farmacología clínica',
        cita: 'a minor route of elimination for unchanged flurbiprofen (≤ 3% of total clearance)',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-flurbiprofeno', '7ebf7427-eaae-4035-a6b2-0ea6381e8763', 'LURBIRO (FLURBIPROFEN) TABLET', 'LURBIRO', '2', '2026-10-08', '2026-11-19'),
    rengPubchem(3394, 'flurbiprofen', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
