import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fenoprofeno',
    nombre: 'Fenoprofeno',
    clase: 'Antiinflamatorio no esteroideo (inhibidor de COX-1 y COX-2)',
    sinonimos: [ 'fenoprofen', 'Nalfon' ],
    formula: 'C15H14O3',
    masaMolar: 242.27,
    smiles: 'CC(C1=CC(=CC=C1)OC2=CC=CC=C2)C(=O)O',
    inchikey: 'RDJGLLICXDHJDY-UHFFFAOYSA-N',
    cid: 3342,
    iupac: '2-(3-phenoxyphenyl)propanoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'fenoprofeno-oral',
      producto: 'FENOPROFEN CALCIUM · cápsula',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '400 mg, 200 mg o 300 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Sal cálcica de fenoprofeno',
        ref: { f: 'dailymed-fenoprofeno', sec: '11 · Descripción', cita: 'FENOPROFEN CALCIUM', codigo: '34089-3' }
      },
      excipientes: [
        'crospovidone, unspecified',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'talc',
        'gelatin, unspecified',
        'ferric oxide yellow',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'fd&c yellow no. 6',
        'titanium dioxide',
        'potassium hydroxide',
        'propylene glycol',
        'shellac',
        'ammonia'
      ],
      usos: {
        t: 'Alivio del dolor leve a moderado en adultos y de los signos y síntomas de la artritis reumatoide y la artrosis.',
        ref: {
          f: 'dailymed-fenoprofeno',
          sec: '1 · Indicaciones',
          cita: 'Relief of mild to moderate pain in adults. ( 1 ) Relief of the signs and symptoms of rheumatoid arthritis. ( 1 ) Relief of the signs and symptoms of osteoarthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fenoprofeno',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: 'Advertencia destacada',
            cita: 'Non-Steroidal Anti-Inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia, úlcera y perforación digestivas',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación graves del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hay que suspenderlo si las pruebas hepáticas siguen alteradas o empeoran o aparecen signos de enfermedad hepática.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue if abnormal liver tests persist or worsen or if clinical signs and symptoms of liver disease develop',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): dispepsia, cefalea, somnolencia, náuseas, mareo, estreñimiento, nerviosismo, astenia y edema periférico.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 5%) are Dyspepsia, headache, somnolence, nausea, dizziness, constipation, nervousness, asthenia, and peripheral edema'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran los acontecimientos trombóticos cardiovasculares y la hemorragia, úlcera y perforación digestivas.',
          '34084-4',
          'Cardiovascular Thrombotic Events [ see Warnings and Precautions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 400 mg, 200 mg o 300 mg por cápsula, según la etiqueta; el activo va como sal cálcica de fenoprofeno. Los excipientes no son el principio activo.',
    usos: 'Alivio del dolor leve a moderado en adultos y de los signos y síntomas de la artritis reumatoide y la artrosis.',
    actua: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
    recorrido: 'En ayunas se absorbe con rapidez y alcanza el pico plasmático en 2 horas tras 600 mg; con alimentos el pico se retrasa y disminuye, sin cambiar la cantidad absorbida. Alrededor del 90 % de una dosis oral única se elimina en 24 horas como glucurónidos por la orina; la semivida plasmática es de unas 3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '3 · Formas y concentraciones',
            cita: 'The 200 mg capsule is hard gelatin capsule with orange opaque cap and white opaque body',
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
      ocurre: 'En ayunas se absorbe con rapidez y alcanza el pico plasmático en 2 horas tras 600 mg; con alimentos el pico se retrasa y disminuye, sin cambiar la cantidad absorbida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas se absorbe con rapidez y alcanza el pico plasmático en 2 horas tras 600 mg; con alimentos el pico se retrasa y disminuye, sin cambiar la cantidad absorbida.',
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Under fasting conditions, fenoprofen is rapidly absorbed, and peak plasma levels of 50 mcg/L are achieved within 2 hours after oral administration of 600 mg doses',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos la cantidad total absorbida no cambia, pero el pico se retrasa y es menor.',
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '2.1 General Dosing Instructions',
            cita: 'Although the total amount absorbed is not affected, peak blood levels are delayed and diminished',
            codigo: '42229-5'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une mucho (99 %) a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho (99 %) a la albúmina.',
          ref: { f: 'dailymed-fenoprofeno', sec: '12.3 · Farmacocinética', cita: 'Fenoprofen is highly bound (99%) to albumin', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa (COX-1 y COX-2)',
        efecto: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
            ref: {
              f: 'dailymed-fenoprofeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its mode of action may be due to a decrease of prostaglandins in peripheral tissues',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su mecanismo incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2).',
            ref: {
              f: 'dailymed-fenoprofeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of fenoprofen calcium, like that of other NSAIDs, is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "Se transforma en glucurónido de fenoprofeno y glucurónido de 4'-hidroxifenoprofeno, los metabolitos urinarios principales.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "Se transforma en glucurónido de fenoprofeno y glucurónido de 4'-hidroxifenoprofeno, los metabolitos urinarios principales.",
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '12.3 · Farmacocinética',
            cita: "as fenoprofen glucuronide and 4'-hydroxyfenoprofen glucuronide, the major urinary metabolites of fenoprofen",
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "Glucurónidos de fenoprofeno y de 4'-hidroxifenoprofeno",
          actividad: 'desconocida',
          nota: 'Metabolitos urinarios principales; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '12.3 · Farmacocinética',
            cita: "as fenoprofen glucuronide and 4'-hydroxyfenoprofen glucuronide, the major urinary metabolites of fenoprofen",
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 90 % de una dosis oral única se elimina en 24 horas como glucurónidos por la orina; la semivida plasmática es de unas 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 90 % de una dosis oral única se elimina en 24 horas como glucurónidos por la orina; la semivida plasmática es de unas 3 horas.',
          ref: {
            f: 'dailymed-fenoprofeno',
            sec: '12.3 · Farmacocinética',
            cita: "About 90% of a single oral dose is eliminated within 24 hours as fenoprofen glucuronide and 4'-hydroxyfenoprofen glucuronide, the major urinary metabolites of fenoprofen",
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática es de unas 3 horas.',
          ref: { f: 'dailymed-fenoprofeno', sec: '12.3 · Farmacocinética', cita: 'The plasma half-life is approximately 3 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas (600 mg)',
      valor: '≤ 2',
      unidad: 'h',
      analito: 'fenoprofeno',
      condiciones: 'en ayunas, 600 mg',
      ref: {
        f: 'dailymed-fenoprofeno',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels of 50 mcg/L are achieved within 2 hours after oral administration of 600 mg doses',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la albúmina',
      valor: '99',
      unidad: '%',
      analito: 'fenoprofeno',
      ref: { f: 'dailymed-fenoprofeno', sec: '12.3 · Farmacocinética', cita: 'Fenoprofen is highly bound (99%) to albumin', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'fenoprofeno',
      ref: { f: 'dailymed-fenoprofeno', sec: '12.3 · Farmacocinética', cita: 'The plasma half-life is approximately 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'otra',
      nombre: 'Dosis eliminada en 24 horas como glucurónidos',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'fenoprofeno y metabolitos',
      ref: {
        f: 'dailymed-fenoprofeno',
        sec: '12.3 · Farmacocinética',
        cita: 'About 90% of a single oral dose is eliminated within 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fenoprofeno', '4aa38cca-9f8f-4ab6-8103-4f1f48801a43', 'FENOPROFEN CALCIUM CAPSULE', 'FENOPROFEN CALCIUM', '8', '2025-12-09', '2026-11-19'),
    rengPubchem(3342, 'fenoprofen', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
