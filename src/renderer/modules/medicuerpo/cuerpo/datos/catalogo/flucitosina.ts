import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'flucitosina',
    nombre: 'Flucitosina',
    clase: 'Antifúngico análogo de pirimidina',
    sinonimos: [ 'flucytosine', 'Ancobon' ],
    formula: 'C4H4FN3O',
    masaMolar: 129.09,
    smiles: 'C1=NC(=O)NC(=C1F)N',
    inchikey: 'XRECTZIEBJDKEO-UHFFFAOYSA-N',
    cid: 3366,
    iupac: '6-amino-5-fluoro-1H-pyrimidin-2-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'flucitosina-oral',
      producto: 'Flucytosine · cápsula',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '250 mg o 500 mg por cápsula, según la etiqueta',
      excipientes: [
        'starch, corn',
        'talc',
        'fd&c blue no. 1',
        'fd&c yellow no. 6',
        'd&c yellow no. 10',
        'titanium dioxide',
        'gelatin, unspecified',
        'lactose monohydrate',
        'ferrosoferric oxide',
        'propylene glycol',
        'potassium hydroxide',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento solo de infecciones graves por cepas sensibles de Candida o Cryptococcus.',
        ref: {
          f: 'dailymed-flucitosina',
          sec: '1 · Indicaciones',
          cita: 'Flucytosine capsules are indicated only in the treatment of serious infections caused by susceptible strains of Candida and/or Cryptococcus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-flucitosina',
      advertencias: [
        {
          titulo: 'Uso en la insuficiencia renal',
          texto: 'Usar con extrema precaución si la función renal está alterada; vigilar la situación hematológica, renal y hepática.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-flucitosina',
            sec: 'Advertencia destacada',
            cita: 'Use with extreme caution in patients with impaired renal function',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Depresión de la médula ósea',
          texto: 'Usar con extrema precaución en pacientes con depresión de la médula ósea.',
          organos: [ 'medula-osea' ],
          ref: {
            f: 'dailymed-flucitosina',
            sec: 'Advertencias',
            cita: 'Flucytosine capsules must be given with extreme caution to patients with bone marrow depression',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones se agrupan por órgano: cardiovasculares (parada cardíaca, toxicidad miocárdica), respiratorias, cutáneas y digestivas, entre otras.',
          '34084-4',
          'The adverse reactions which have occurred during treatment with Flucytosine capsules are grouped according to organ system affected'
        ],
        [
          'Digestivas: náuseas, vómitos, dolor abdominal, diarrea, anorexia, boca seca y úlcera duodenal.',
          '34084-4',
          'Gastrointestinal: Nausea, emesis, abdominal pain, diarrhea, anorexia, dry mouth, duodenal ulcer'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 250 mg o 500 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento solo de infecciones graves por cepas sensibles de Candida o Cryptococcus.',
    actua: 'Entra en el hongo por la citosina permeasa y la citosina desaminasa lo convierte en fluorouracilo, cuyos metabolitos se incorporan al ARN fúngico o interfieren en la síntesis del ADN.',
    recorrido: 'Se absorbe con rapidez y casi por completo (78 a 89 % frente a la vía intravenosa); con 2 g el pico sérico llega en 2 horas. Se excreta por el riñón por filtración glomerular, sin reabsorción tubular significativa; más del 90 % de la radiactividad oral se recuperó intacta en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '11 · Descripción',
            cita: 'Flucytosine capsules USP, an antifungal agent, is available as 250 mg and 500 mg capsules for oral administration',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y casi por completo (78 a 89 % frente a la vía intravenosa); con 2 g el pico sérico llega en 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y casi por completo (78 a 89 % frente a la vía intravenosa); con 2 g el pico sérico llega en 2 horas.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'Flucytosine is rapidly and virtually completely absorbed following oral administration',
            codigo: '34090-1'
          }
        },
        {
          t: 'La biodisponibilidad comparada con la intravenosa fue del 78 % al 89 %.',
          ref: { f: 'dailymed-flucitosina', sec: '12 · Farmacología clínica', cita: 'showed 78% to 89% absorption of the oral dose', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une solo en un 2,9 a 4 % a las proteínas y atraviesa con facilidad la barrera hematoencefálica, con concentraciones clínicamente significativas en el líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une solo en un 2,9 a 4 % a las proteínas y atraviesa con facilidad la barrera hematoencefálica, con concentraciones clínicamente significativas en el líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'Flucytosine readily penetrates the blood-brain barrier, achieving clinically significant concentrations in cerebrospinal fluid',
            codigo: '34090-1'
          }
        },
        {
          t: 'In vitro se une entre un 2,9 % y un 4 % a las proteínas.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'In vitro studies have shown that 2.9% to 4% of flucytosine is protein-bound over the range of therapeutic concentrations found in the blood',
            codigo: '34090-1'
          },
          poblacion: 'sangre'
        }
      ],
      accion: {
        diana: 'Citosina desaminasa fúngica',
        efecto: 'Entra en el hongo por la citosina permeasa y la citosina desaminasa lo convierte en fluorouracilo, cuyos metabolitos se incorporan al ARN fúngico o interfieren en la síntesis del ADN.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Entra en el hongo por la citosina permeasa y la citosina desaminasa lo convierte en fluorouracilo, cuyos metabolitos se incorporan al ARN fúngico o interfieren en la síntesis del ADN.',
            ref: {
              f: 'dailymed-flucitosina',
              sec: '12.4 · Microbiología',
              cita: 'Flucytosine is taken up by fungal organisms via the enzyme cytosine permease. Inside the fungal cell, flucytosine is rapidly converted to fluorouracil by the enzyme cytosine deaminase',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Por vía oral no se metaboliza de forma significativa; las bacterias intestinales probablemente desaminan una pequeña parte a 5-fluorouracilo.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Por vía oral no se metaboliza de forma significativa; las bacterias intestinales probablemente desaminan una pequeña parte a 5-fluorouracilo.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'Flucytosine capsules are not metabolized significantly when given orally to man',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-Fluorouracilo',
          actividad: 'activo',
          nota: 'Su AUC es el 4 % de la de la flucitosina.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'Flucytosine is deaminated (probably by gut bacteria) to 5-fluorouracil',
            codigo: '34090-1'
          }
        }
      ],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta por el riñón por filtración glomerular, sin reabsorción tubular significativa; más del 90 % de la radiactividad oral se recuperó intacta en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta por el riñón por filtración glomerular, sin reabsorción tubular significativa; más del 90 % de la radiactividad oral se recuperó intacta en la orina.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'Flucytosine is excreted via the kidneys by means of glomerular filtration without significant tubular reabsorption',
            codigo: '34090-1'
          }
        },
        {
          t: 'Más del 90 % se recuperó en la orina como fármaco intacto.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'More than 90% of the total radioactivity after oral administration was recovered in the urine as intact drug',
            codigo: '34090-1'
          },
          poblacion: 'orina'
        },
        {
          t: 'La semivida en la mayoría de los sujetos sanos fue de 2,4 a 4,8 horas.',
          ref: {
            f: 'dailymed-flucitosina',
            sec: '12 · Farmacología clínica',
            cita: 'The half-life in the majority of healthy subjects ranged between 2.4 and 4.8 hours',
            codigo: '34090-1'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida frente a la vía intravenosa',
      valor: '78-89',
      unidad: '%',
      analito: 'flucitosina',
      ref: { f: 'dailymed-flucitosina', sec: '12 · Farmacología clínica', cita: 'showed 78% to 89% absorption of the oral dose', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico tras 2 g',
      valor: '≤ 2',
      unidad: 'h',
      analito: 'flucitosina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral de 2 g',
      ref: {
        f: 'dailymed-flucitosina',
        sec: '12 · Farmacología clínica',
        cita: 'Peak serum concentrations of 30 to 40 mcg/mL were reached within 2 hours of administration of a 2 g oral dose to normal subjects',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '2,9-4',
      unidad: '%',
      analito: 'flucitosina',
      ref: { f: 'dailymed-flucitosina', sec: '12 · Farmacología clínica', cita: '2.9% to 4% of flucytosine is protein-bound', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '2,4-4,8',
      unidad: 'h',
      analito: 'flucitosina',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-flucitosina',
        sec: '12 · Farmacología clínica',
        cita: 'The half-life in the majority of healthy subjects ranged between 2.4 and 4.8 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada intacta en la orina',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'flucitosina inalterada',
      ref: {
        f: 'dailymed-flucitosina',
        sec: '12 · Farmacología clínica',
        cita: 'More than 90% of the total radioactivity after oral administration was recovered in the urine as intact drug',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-flucitosina', 'f4c63d98-f03f-43f5-8c1f-e9ac6087312b', 'FLUCYTOSINE CAPSULE', 'Flucytosine', '2', '2025-11-17', '2026-11-19'),
    rengPubchem(3366, 'flucytosine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
