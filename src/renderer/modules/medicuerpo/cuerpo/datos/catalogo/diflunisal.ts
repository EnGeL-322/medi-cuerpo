import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'diflunisal',
    nombre: 'Diflunisal',
    clase: 'Antiinflamatorio no esteroideo (derivado difluorofenílico del ácido salicílico)',
    sinonimos: [ 'diflunisal' ],
    formula: 'C13H8F2O3',
    masaMolar: 250.2,
    smiles: 'C1=CC(=C(C=C1C2=C(C=C(C=C2)F)F)C(=O)O)O',
    inchikey: 'HUPFGZXOMWLGNK-UHFFFAOYSA-N',
    cid: 3059,
    iupac: '5-(2,4-difluorophenyl)-2-hydroxybenzoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'diflunisal-oral',
      producto: 'diflunisal · comprimido recubierto con película',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '500 mg, 250 mg o 375 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'croscarmellose sodium',
        'starch, corn',
        'sodium stearyl fumarate',
        'hypromelloses',
        'titanium dioxide',
        'propylene glycol',
        'fd&c blue no. 2 aluminum lake'
      ],
      usos: {
        t: 'Tratamiento sintomático, agudo o prolongado, del dolor leve a moderado, la artrosis y la artritis reumatoide.',
        ref: {
          f: 'dailymed-diflunisal',
          sec: '1 · Indicaciones',
          cita: 'Diflunisal tablets are indicated for acute or long-term use for symptomatic treatment of the following: Mild to moderate pain Osteoarthritis Rheumatoid arthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-diflunisal',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-diflunisal',
            sec: 'Advertencia destacada',
            cita: 'Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Cirugía de derivación coronaria',
          texto: 'Está contraindicado en el contexto de la cirugía de derivación arterial coronaria (CABG).',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-diflunisal',
            sec: 'Advertencia destacada',
            cita: 'Diflunisal tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Riesgo gastrointestinal',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación graves del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-diflunisal',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones más frecuentes son digestivas: náuseas, vómitos, dispepsia, dolor gastrointestinal, diarrea, estreñimiento y flatulencia.',
          '34084-4',
          'The most frequent types of adverse reactions occurring with diflunisal are gastrointestinal: these include nausea*, vomiting, dyspepsia*, gastrointestinal pain*, diarrhea*, constipation, and flatulence'
        ],
        [
          'Con una frecuencia mayor del 1 % también se describen somnolencia, insomnio y mareo.',
          '34084-4',
          'Psychiatric Somnolence, insomnia. Central Nervous System Dizziness'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 500 mg, 250 mg o 375 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático, agudo o prolongado, del dolor leve a moderado, la artrosis y la artritis reumatoide.',
    actua: 'Su mecanismo exacto se desconoce; es un inhibidor de la prostaglandina sintetasa y su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
    recorrido: 'Se absorbe con rapidez y por completo tras la toma oral, con el pico plasmático entre 2 y 3 horas. Se excreta en la orina como dos conjugados glucurónidos solubles, alrededor del 90 % de la dosis; poco o nada sale por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'Diflunisal is rapidly and completely absorbed following oral administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y por completo tras la toma oral, con el pico plasmático entre 2 y 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y por completo tras la toma oral, con el pico plasmático entre 2 y 3 horas.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'Diflunisal is rapidly and completely absorbed following oral administration with peak plasma concentrations occurring between 2 to 3 hours',
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
      ocurre: 'Más del 99 % del diflunisal del plasma está unido a proteínas; en babuinos solo pequeñas cantidades pasan al líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99 % del diflunisal del plasma está unido a proteínas; en babuinos solo pequeñas cantidades pasan al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'More than 99% of diflunisal in plasma is bound to proteins',
            codigo: '34090-1'
          }
        },
        {
          t: 'En estudios en babuinos sobre el paso de la barrera hematoencefálica, solo pequeñas cantidades llegaron al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'Studies in baboons to determine passage across the blood-brain barrier have shown that only small quantities of diflunisal, under normal or acidotic conditions are transported into the cerebrospinal fluid (CSF)',
            codigo: '34090-1'
          },
          poblacion: 'babuinos'
        }
      ],
      accion: {
        diana: 'Prostaglandina sintetasa',
        efecto: 'Su mecanismo exacto se desconoce; es un inhibidor de la prostaglandina sintetasa y su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; es un inhibidor de la prostaglandina sintetasa y su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
            ref: {
              f: 'dailymed-diflunisal',
              sec: '12 · Farmacología clínica',
              cita: 'the mode of action of diflunisal may be due to a decrease of prostaglandins in peripheral tissues',
              codigo: '34090-1'
            }
          },
          {
            t: 'Es un inhibidor de la prostaglandina sintetasa.',
            ref: {
              f: 'dailymed-diflunisal',
              sec: '12 · Farmacología clínica',
              cita: 'Diflunisal is a prostaglandin synthetase inhibitor',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza a ácido salicílico y los átomos de flúor no se desprenden del anillo; se excreta en la orina como dos conjugados glucurónidos solubles.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza a ácido salicílico y los átomos de flúor no se desprenden del anillo; se excreta en la orina como dos conjugados glucurónidos solubles.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'Diflunisal is not metabolized to salicylic acid, and the fluorine atoms are not displaced from the difluorophenyl ring structure',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugados glucurónidos de diflunisal',
          actividad: 'desconocida',
          nota: 'Dos conjugados solubles que suponen alrededor del 90 % de la dosis en la orina; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'The drug is excreted in the urine as two soluble glucuronide conjugates accounting for about 90% of the administered dose',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta en la orina como dos conjugados glucurónidos solubles, alrededor del 90 % de la dosis; poco o nada sale por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta en la orina como dos conjugados glucurónidos solubles, alrededor del 90 % de la dosis; poco o nada sale por las heces.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'The drug is excreted in the urine as two soluble glucuronide conjugates accounting for about 90% of the administered dose',
            codigo: '34090-1'
          }
        },
        {
          t: 'Poco o nada de diflunisal se excreta en las heces.',
          ref: { f: 'dailymed-diflunisal', sec: '12 · Farmacología clínica', cita: 'Little or no diflunisal is excreted in the feces', codigo: '34090-1' }
        },
        {
          t: 'La semivida plasmática es de 8 a 12 horas, 3 a 4 veces más larga que la del ácido salicílico.',
          ref: {
            f: 'dailymed-diflunisal',
            sec: '12 · Farmacología clínica',
            cita: 'the plasma half-life of diflunisal is 3 to 4 times longer (8 to 12 hours)',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-3',
      unidad: 'h',
      analito: 'diflunisal',
      ref: {
        f: 'dailymed-diflunisal',
        sec: '12 · Farmacología clínica',
        cita: 'peak plasma concentrations occurring between 2 to 3 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'diflunisal',
      ref: {
        f: 'dailymed-diflunisal',
        sec: '12 · Farmacología clínica',
        cita: 'More than 99% of diflunisal in plasma is bound to proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '8-12',
      unidad: 'h',
      analito: 'diflunisal',
      ref: {
        f: 'dailymed-diflunisal',
        sec: '12 · Farmacología clínica',
        cita: 'the plasma half-life of diflunisal is 3 to 4 times longer (8 to 12 hours)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina como glucurónidos',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'conjugados glucurónidos',
      ref: {
        f: 'dailymed-diflunisal',
        sec: '12 · Farmacología clínica',
        cita: 'excreted in the urine as two soluble glucuronide conjugates accounting for about 90% of the administered dose',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-diflunisal', '666f89b4-fd81-420a-a390-eb1cd4014f61', 'DIFLUNISAL TABLET, FILM COATED', 'diflunisal', '14', '2026-08-07', '2026-11-19'),
    rengPubchem(3059, 'diflunisal', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
