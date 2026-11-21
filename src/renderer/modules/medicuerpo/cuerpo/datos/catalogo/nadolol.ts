import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nadolol',
    nombre: 'Nadolol',
    clase: 'Betabloqueante no selectivo',
    sinonimos: [ 'nadolol', 'Corgard' ],
    formula: 'C17H27NO4',
    masaMolar: 309.4,
    smiles: 'CC(C)(C)NCC(COC1=CC=CC2=C1C[C@@H]([C@@H](C2)O)O)O',
    inchikey: 'VWPOSFSPZNDTMJ-UCWKZMIHSA-N',
    cid: 39147,
    iupac: '(2R,3S)-5-[3-(tert-butylamino)-2-hydroxypropoxy]-1,2,3,4-tetrahydronaphthalene-2,3-diol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nadolol-oral',
      producto: 'Nadolol · comprimido',
      titular: 'AMNEAL PHARMACEUTICALS NY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 40 mg o 80 mg por comprimido, según la etiqueta',
      excipientes: [ 'cellulose, microcrystalline', 'magnesium stearate', 'povidone', 'starch, corn' ],
      usos: {
        t: 'Tratamiento prolongado de la angina de pecho y de la hipertensión arterial.',
        ref: {
          f: 'dailymed-nadolol',
          sec: '1 · Indicaciones',
          cita: 'Nadolol tablets are indicated for the long-term management of patients with angina pectoris',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nadolol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'El bloqueo beta puede precipitar una insuficiencia más grave en la insuficiencia cardíaca congestiva.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-nadolol',
            sec: 'Advertencias',
            cita: 'Sympathetic stimulation may be a vital component supporting circulatory function in patients with congestive heart failure, and its inhibition by beta-blockade may precipitate more severe failure',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Exacerbación de la cardiopatía isquémica al suspenderlo bruscamente',
          texto: 'Tras una retirada brusca ha empeorado la angina y se han producido infartos de miocardio.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-nadolol',
            sec: 'Advertencias',
            cita: 'exacerbation of angina and, in some cases, myocardial infarction have occurred after abrupt discontinuation of such therapy',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'La mayoría de los efectos adversos son leves y pasajeros y rara vez obligan a suspenderlo.',
          '34084-4',
          'Most adverse effects have been mild and transient and have rarely required withdrawal of therapy'
        ],
        [
          'Es frecuente la bradicardia por debajo de 60 latidos por minuto; la bradicardia sintomática o menor de 40 aparece en unos 2 de cada 100 pacientes.',
          '34084-4',
          'Bradycardia with heart rates of less than 60 beats per minute occurs commonly, and heart rates below 40 beats per minute and/or symptomatic bradycardia were seen in about 2 of 100 patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20 mg, 40 mg o 80 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento prolongado de la angina de pecho y de la hipertensión arterial.',
    actua: 'Compite con los agonistas por los receptores beta: bloquea los beta-1, sobre todo del músculo cardíaco, y los beta-2 de la musculatura bronquial y vascular, sin actividad simpaticomimética intrínseca.',
    recorrido: 'La absorción oral es variable, de alrededor del 30 % de media; el pico aparece a las 3-4 horas y la comida no la modifica. Se excreta sin cambios, sobre todo por los riñones; por eso su semivida aumenta en la insuficiencia renal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '11 · Descripción',
            cita: 'Nadolol tablets, USP are a synthetic nonselective beta-adrenergic receptor blocking agent',
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
      ocurre: 'La absorción oral es variable, de alrededor del 30 % de media; el pico aparece a las 3-4 horas y la comida no la modifica.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción oral es variable, de alrededor del 30 % de media; el pico aparece a las 3-4 horas y la comida no la modifica.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'Absorption of nadolol after oral dosing is variable, averaging about 30 percent',
            codigo: '34090-1'
          }
        },
        {
          t: 'El pico sérico aparece a las 3-4 horas y la comida no altera la velocidad ni el grado de absorción.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'Peak serum concentrations of nadolol usually occur in three to four hours after oral administration and the presence of food in the gastrointestinal tract does not affect the rate or extent of nadolol absorption',
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
      ocurre: 'Alrededor del 30 % del nadolol del suero se une de forma reversible a las proteínas plasmáticas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 30 % del nadolol del suero se une de forma reversible a las proteínas plasmáticas.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 30 percent of the nadolol present in serum is reversibly bound to plasma protein',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores beta-1 y beta-2 adrenérgicos',
        efecto: 'Compite con los agonistas por los receptores beta: bloquea los beta-1, sobre todo del músculo cardíaco, y los beta-2 de la musculatura bronquial y vascular, sin actividad simpaticomimética intrínseca.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Compite con los agonistas por los receptores beta: bloquea los beta-1, sobre todo del músculo cardíaco, y los beta-2 de la musculatura bronquial y vascular, sin actividad simpaticomimética intrínseca.',
            ref: {
              f: 'dailymed-nadolol',
              sec: '12 · Farmacología clínica',
              cita: 'Nadolol specifically competes with beta-adrenergic receptor agonists for available beta receptor sites; it inhibits both the beta 1 receptors located chiefly in cardiac muscle',
              codigo: '34090-1'
            }
          },
          {
            t: 'También inhibe los receptores beta-2, situados sobre todo en la musculatura bronquial y vascular.',
            ref: {
              f: 'dailymed-nadolol',
              sec: '12 · Farmacología clínica',
              cita: 'the beta 2 receptors located chiefly in the bronchial and vascular musculature',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'A diferencia de muchos betabloqueantes, no se metaboliza en el hígado: se excreta sin cambios.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'A diferencia de muchos betabloqueantes, no se metaboliza en el hígado: se excreta sin cambios.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'Unlike many other beta-adrenergic blocking agents, nadolol is not metabolized by the liver and is excreted unchanged, principally by the kidneys',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sin cambios, sobre todo por los riñones; por eso su semivida aumenta en la insuficiencia renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sin cambios, sobre todo por los riñones; por eso su semivida aumenta en la insuficiencia renal.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'Because nadolol is excreted predominantly in the urine, its half-life increases in renal failure',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida con dosis terapéuticas es de unas 20 a 24 horas, lo que permite una toma al día.',
          ref: {
            f: 'dailymed-nadolol',
            sec: '12 · Farmacología clínica',
            cita: 'The half-life of therapeutic doses of nadolol is about 20 to 24 hours, permitting once-daily dosage',
            codigo: '34090-1'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'otra',
      nombre: 'Absorción oral media',
      valor: '30 (aprox.)',
      unidad: '% de la dosis',
      analito: 'nadolol',
      ref: {
        f: 'dailymed-nadolol',
        sec: '12 · Farmacología clínica',
        cita: 'Absorption of nadolol after oral dosing is variable, averaging about 30 percent',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '3-4',
      unidad: 'h',
      analito: 'nadolol',
      ref: {
        f: 'dailymed-nadolol',
        sec: '12 · Farmacología clínica',
        cita: 'Peak serum concentrations of nadolol usually occur in three to four hours after oral administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'nadolol',
      ref: {
        f: 'dailymed-nadolol',
        sec: '12 · Farmacología clínica',
        cita: 'Approximately 30 percent of the nadolol present in serum is reversibly bound to plasma protein',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida con dosis terapéuticas',
      valor: '20-24',
      unidad: 'h',
      analito: 'nadolol',
      ref: {
        f: 'dailymed-nadolol',
        sec: '12 · Farmacología clínica',
        cita: 'The half-life of therapeutic doses of nadolol is about 20 to 24 hours',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nadolol', 'e2e24b14-0169-4028-828a-894ad3c2ba55', 'NADOLOL TABLET', 'Nadolol', '11', '2026-06-30', '2026-11-19'),
    rengPubchem(39147, 'nadolol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
