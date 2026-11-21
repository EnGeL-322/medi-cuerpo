import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acido-mefenamico',
    nombre: 'Ácido mefenámico',
    clase: 'Antiinflamatorio no esteroideo (fenamato)',
    sinonimos: [ 'mefenamic acid', 'Ponstel' ],
    formula: 'C15H15NO2',
    masaMolar: 241.28,
    smiles: 'CC1=C(C(=CC=C1)NC2=CC=CC=C2C(=O)O)C',
    inchikey: 'HYYBABOKPJLUIN-UHFFFAOYSA-N',
    cid: 4044,
    iupac: '2-(2,3-dimethylanilino)benzoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'acido-mefenamico-oral',
      producto: 'Mefenamic Acid · cápsula',
      titular: 'LUPIN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '250 mg por cápsula, según la etiqueta',
      excipientes: [
        'd&c yellow no. 10',
        'fd&c red no. 3',
        'fd&c yellow no. 6',
        'ferrosoferric oxide',
        'gelatin',
        'lactose monohydrate',
        'magnesium stearate',
        'potassium hydroxide',
        'propylene glycol',
        'shellac',
        'sodium lauryl sulfate',
        'titanium dioxide'
      ],
      usos: {
        t: 'Dolor leve a moderado desde 14 años, en tratamientos de no más de una semana, y dismenorrea primaria.',
        ref: {
          f: 'dailymed-acido-mefenamico',
          sec: '1 · Indicaciones',
          cita: 'For management of mild to moderate pain in patient 14 years of age and older, when therapy will not exceed one week (7 days). ( 1.1 ) For treatment of primary dysmenorrhea',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acido-mefenamico',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: 'Advertencia destacada',
            cita: 'cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia, úlcera y perforación digestivas',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación graves del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (alrededor del 1 % al 10 %) son digestivas: dolor abdominal, estreñimiento, diarrea, dispepsia, flatulencia, hemorragia o perforación, pirosis, náuseas, úlceras y vómitos.',
          '34084-4',
          'Gastrointestinal - Abdominal pain, constipation, diarrhea, dyspepsia, flatulence, gross bleeding/perforation, heartburn, nausea, GI ulcers (gastric/duodenal), vomiting'
        ],
        [
          'También se describen acúfenos, alteración de la función renal y elevación de las enzimas hepáticas.',
          '34084-4',
          'Auditory System - Tinnitus Genitourinary System - Abnormal renal function Hepatic System - Elevated liver enzymes'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 250 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Dolor leve a moderado desde 14 años, en tratamientos de no más de una semana, y dismenorrea primaria.',
    actua: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
    recorrido: 'Se absorbe con rapidez tras la toma oral y alcanza el pico plasmático en 2 a 4 horas; no se ha estudiado el efecto de los alimentos. Alrededor del 52 % de la dosis se excreta en la orina, sobre todo como glucurónidos del fármaco y de sus metabolitos; la semivida de eliminación es de unas 2 horas.'
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
          ref: { f: 'dailymed-acido-mefenamico', sec: '3 · Formas y concentraciones', cita: 'Capsule: 250 mg of mefenamic acid', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez tras la toma oral y alcanza el pico plasmático en 2 a 4 horas; no se ha estudiado el efecto de los alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez tras la toma oral y alcanza el pico plasmático en 2 a 4 horas; no se ha estudiado el efecto de los alimentos.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Mefenamic acid is rapidly absorbed after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan en 2 a 4 horas.',
          ref: { f: 'dailymed-acido-mefenamico', sec: '12.3 · Farmacocinética', cita: 'Peak plasma levels are attained in 2 to 4 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 90 % a la albúmina; el volumen de distribución aparente tras 500 mg fue de 1,06 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 90 % a la albúmina; el volumen de distribución aparente tras 500 mg fue de 1,06 L/kg.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Mefenamic acid has been reported as being greater than 90 % bound to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 1,06 L/kg tras una dosis oral de 500 mg.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (Vz ss /F) estimated following a 500-mg oral dose of mefenamic acid was 1.06 L/kg',
            codigo: '43682-4'
          }
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
              f: 'dailymed-acido-mefenamico',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Because mefenamic acid is an inhibitor of prostaglandin synthesis, its mode of action may be due to a decrease of prostaglandins in peripheral tissues',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su mecanismo incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2).',
            ref: {
              f: 'dailymed-acido-mefenamico',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of mefenamic acid, like that of other NSAIDs, is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP2C9 lo metaboliza a ácido 3-hidroximetil mefenámico (metabolito I), que puede oxidarse a ácido 3-carboximefenámico (metabolito II).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP2C9 lo metaboliza a ácido 3-hidroximetil mefenámico (metabolito I), que puede oxidarse a ácido 3-carboximefenámico (metabolito II).',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Mefenamic acid is metabolized by cytochrome P450 enzyme CYP2C9 to 3-hydroxymethyl mefenamic acid (Metabolite I)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Puede seguir oxidándose a ácido 3-carboximefenámico (metabolito II).',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Further oxidation to a 3-carboxymefenamic acid (Metabolite II) may occur',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos I y II',
          actividad: 'desconocida',
          nota: 'Ácidos 3-hidroximetil y 3-carboximefenámico; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Mefenamic acid is metabolized by cytochrome P450 enzyme CYP2C9 to 3-hydroxymethyl mefenamic acid (Metabolite I)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 52 % de la dosis se excreta en la orina, sobre todo como glucurónidos del fármaco y de sus metabolitos; la semivida de eliminación es de unas 2 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 52 % de la dosis se excreta en la orina, sobre todo como glucurónidos del fármaco y de sus metabolitos; la semivida de eliminación es de unas 2 horas.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately fifty-two percent of a mefenamic acid dose is excreted into the urine primarily as glucuronides of mefenamic acid (6 %), 3-hydroxymefenamic acid (25 %) and 3-carboxymefenamic acid (21 %)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 2 horas.',
          ref: {
            f: 'dailymed-acido-mefenamico',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of mefenamic acid is approximately two hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-4',
      unidad: 'h',
      analito: 'ácido mefenámico',
      ref: { f: 'dailymed-acido-mefenamico', sec: '12.3 · Farmacocinética', cita: 'Peak plasma levels are attained in 2 to 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la albúmina',
      valor: '> 90',
      unidad: '%',
      analito: 'ácido mefenámico',
      ref: {
        f: 'dailymed-acido-mefenamico',
        sec: '12.3 · Farmacocinética',
        cita: 'Mefenamic acid has been reported as being greater than 90 % bound to albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '1,06',
      unidad: 'L/kg',
      analito: 'ácido mefenámico',
      condiciones: 'dosis oral de 500 mg',
      ref: {
        f: 'dailymed-acido-mefenamico',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (Vz ss /F) estimated following a 500-mg oral dose of mefenamic acid was 1.06 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'ácido mefenámico',
      ref: {
        f: 'dailymed-acido-mefenamico',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of mefenamic acid is approximately two hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '52 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ácido mefenámico y metabolitos',
      ref: {
        f: 'dailymed-acido-mefenamico',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately fifty-two percent of a mefenamic acid dose is excreted into the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acido-mefenamico', 'd15733a9-d5fd-4d5f-86ce-e7ed8c706c7f', 'MEFENAMIC ACID CAPSULE', 'Mefenamic Acid', '13', '2026-04-23', '2026-11-19'),
    rengPubchem(4044, 'mefenamic acid', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
