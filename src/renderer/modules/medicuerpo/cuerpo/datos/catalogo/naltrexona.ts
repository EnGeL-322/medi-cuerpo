import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'naltrexona',
    nombre: 'Naltrexona',
    clase: 'Antagonista opioide',
    sinonimos: [ 'naltrexone', 'Revia' ],
    formula: 'C20H23NO4',
    masaMolar: 341.4,
    smiles: 'C1CC1CN2CC[C@]34[C@@H]5C(=O)CC[C@]3([C@H]2CC6=C4C(=C(C=C6)O)O5)O',
    inchikey: 'DQCKKXVULJGBQN-XFWGSAIBSA-N',
    cid: 5360515,
    iupac: '(4R,4aS,7aR,12bS)-3-(cyclopropylmethyl)-4a,9-dihydroxy-2,4,5,6,7a,13-hexahydro-1H-4,12-methanobenzofuro[3,2-e]isoquinolin-7-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'naltrexona-oral',
      producto: 'Naltrexone Hydrochloride · comprimido recubierto con película',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de naltrexona',
        ref: { f: 'dailymed-naltrexona', sec: '11 · Descripción', cita: 'Naltrexone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'silicon dioxide',
        'hydroxypropyl cellulose, unspecified',
        'ferric oxide yellow',
        'lactose monohydrate',
        'hypromellose, unspecified',
        'magnesium stearate',
        'ferric oxide red'
      ],
      usos: {
        t: 'Dependencia del alcohol y bloqueo de los efectos de los opioides administrados.',
        ref: {
          f: 'dailymed-naltrexona',
          sec: '1 · Indicaciones',
          cita: 'indicated in the treatment of alcohol dependence and for the blockade of the effects of exogenously administered opioids',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-naltrexona',
      advertencias: [
        {
          titulo: 'Sobredosis de opioides',
          texto: 'Tras la desintoxicación, la tolerancia a los opioides baja: al pasar el bloqueo, dosis menores pueden causar una sobredosis.',
          organos: [ 'encefalo', 'pulmones' ],
          ref: {
            f: 'dailymed-naltrexona',
            sec: 'Advertencias',
            cita: 'After opioid detoxification, patients are likely to have reduced tolerance to opioids',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Más del 10 %: dificultad para dormir, ansiedad, nerviosismo, dolor o retortijones abdominales, náuseas o vómitos, poca energía, dolor articular y muscular y dolor de cabeza.',
          '34084-4',
          'Difficulty sleeping, anxiety, nervousness, abdominal pain/cramps, nausea and/or vomiting'
        ],
        [
          'Menos del 10 %: falta de apetito, diarrea, estreñimiento, sed, irritabilidad, mareo y erupción.',
          '34084-4',
          'Loss of appetite, diarrhea, constipation'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg por comprimido, según la etiqueta; el activo va como clorhidrato de naltrexona. Los excipientes no son el principio activo.',
    usos: 'Dependencia del alcohol y bloqueo de los efectos de los opioides administrados.',
    actua: 'Es un antagonista opioide puro: se une de forma competitiva a los receptores opioides y bloquea, de forma reversible, los efectos de los opioides.',
    recorrido: 'Se absorbe rápido y casi por completo (96 %), pero un primer paso importante deja una biodisponibilidad oral del 5 % al 40 %; el pico de naltrexona y 6-beta-naltrexol llega en una hora. Él y sus metabolitos salen sobre todo por el riñón (53-79 % de la dosis), con menos del 2 % sin cambios; las heces son una vía menor. Semivida de 4 horas (13 la del 6-beta-naltrexol).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-naltrexona', sec: '11 · Descripción', cita: 'Naltrexone hydrochloride tablets, USP an opioid antagonist', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y casi por completo (96 %), pero un primer paso importante deja una biodisponibilidad oral del 5 % al 40 %; el pico de naltrexona y 6-beta-naltrexol llega en una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y casi por completo (96 %), pero un primer paso importante deja una biodisponibilidad oral del 5 % al 40 %; el pico de naltrexona y 6-beta-naltrexol llega en una hora.',
          ref: {
            f: 'dailymed-naltrexona',
            sec: '12 · Farmacología clínica',
            cita: 'naltrexone undergoes rapid and nearly complete absorption with approximately 96% of the dose absorbed',
            codigo: '34090-1'
          }
        },
        {
          t: 'Biodisponibilidad oral estimada entre el 5 % y el 40 %.',
          ref: {
            f: 'dailymed-naltrexona',
            sec: '12 · Farmacología clínica',
            cita: 'oral bioavailability estimates ranging from 5 to 40%',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución estimado de 1350 L tras la vía intravenosa; el 21 % se une a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución estimado de 1350 L tras la vía intravenosa; el 21 % se une a proteínas.',
          ref: { f: 'dailymed-naltrexona', sec: '12 · Farmacología clínica', cita: 'naltrexone to be 21% bound to plasma proteins', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Receptores opioides',
        efecto: 'Es un antagonista opioide puro: se une de forma competitiva a los receptores opioides y bloquea, de forma reversible, los efectos de los opioides.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un antagonista opioide puro: se une de forma competitiva a los receptores opioides y bloquea, de forma reversible, los efectos de los opioides.',
            ref: {
              f: 'dailymed-naltrexona',
              sec: '12 · Farmacología clínica',
              cita: 'Naltrexone hydrochloride blocks the effects of opioids by competitive binding',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho (más del 98 %); su actividad se debe a la naltrexona y a su metabolito 6-beta-naltrexol.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho (más del 98 %); su actividad se debe a la naltrexona y a su metabolito 6-beta-naltrexol.',
          ref: {
            f: 'dailymed-naltrexona',
            sec: '12 · Farmacología clínica',
            cita: 'The activity of naltrexone is believed to be due to both parent and the 6-ß-naltrexol metabolite',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '6-beta-naltrexol',
          actividad: 'activo',
          nota: 'Semivida de unas 13 horas.',
          ref: {
            f: 'dailymed-naltrexona',
            sec: '12 · Farmacología clínica',
            cita: 'The activity of naltrexone is believed to be due to both parent and the 6-ß-naltrexol metabolite',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Él y sus metabolitos salen sobre todo por el riñón (53-79 % de la dosis), con menos del 2 % sin cambios; las heces son una vía menor. Semivida de 4 horas (13 la del 6-beta-naltrexol).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Él y sus metabolitos salen sobre todo por el riñón (53-79 % de la dosis), con menos del 2 % sin cambios; las heces son una vía menor. Semivida de 4 horas (13 la del 6-beta-naltrexol).',
          ref: {
            f: 'dailymed-naltrexona',
            sec: '12 · Farmacología clínica',
            cita: 'Both parent drug and metabolites are excreted primarily by the kidney (53% to 79% of the dose)',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '5-40',
      unidad: '%',
      analito: 'naltrexona',
      ref: { f: 'dailymed-naltrexona', sec: '12 · Farmacología clínica', cita: 'oral bioavailability estimates ranging from 5 to 40%', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 1',
      unidad: 'h',
      analito: 'naltrexona y 6-beta-naltrexol',
      ref: {
        f: 'dailymed-naltrexona',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma levels of both naltrexone and 6-ß-naltrexol occur within one hour of dosing',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '4',
      unidad: 'h',
      analito: 'naltrexona',
      ref: {
        f: 'dailymed-naltrexona',
        sec: '12 · Farmacología clínica',
        cita: 'The mean elimination half-life (T-1/2) values for naltrexone and 6-ß-naltrexol are 4 hours and 13 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '13',
      unidad: 'h',
      analito: '6-beta-naltrexol (metabolito activo)',
      ref: {
        f: 'dailymed-naltrexona',
        sec: '12 · Farmacología clínica',
        cita: 'The mean elimination half-life (T-1/2) values for naltrexone and 6-ß-naltrexol are 4 hours and 13 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '21',
      unidad: '%',
      analito: 'naltrexona',
      ref: { f: 'dailymed-naltrexona', sec: '12 · Farmacología clínica', cita: 'naltrexone to be 21% bound to plasma proteins', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-naltrexona', 'adb7c4dc-221a-4d91-9687-0d78913a92ad', 'NALTREXONE HYDROCHLORIDE TABLET, FILM COATED', 'Naltrexone Hydrochloride', '5', '2026-06-22', '2026-11-12'),
    rengPubchem(5360515, 'naltrexone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
