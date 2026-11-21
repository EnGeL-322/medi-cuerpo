import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'buspirona',
    nombre: 'Buspirona',
    clase: 'Ansiolítico (azapirona)',
    sinonimos: [ 'buspirone', 'Buspar' ],
    formula: 'C21H31N5O2',
    masaMolar: 385.5,
    smiles: 'C1CCC2(C1)CC(=O)N(C(=O)C2)CCCCN3CCN(CC3)C4=NC=CC=N4',
    inchikey: 'QWCRAEMEVRGPNT-UHFFFAOYSA-N',
    cid: 2477,
    iupac: '8-[4-(4-pyrimidin-2-ylpiperazin-1-yl)butyl]-8-azaspiro[4.5]decane-7,9-dione',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'buspirona-oral',
      producto: 'Buspirone Hydrochloride · comprimido',
      titular: 'ACCORD HEALTHCARE INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '15 mg, 30 mg, 5 mg, 7.5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de buspirona',
        ref: { f: 'dailymed-buspirona', sec: '11 · Descripción', cita: 'Buspirone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'sodium starch glycolate type a potato', 'silicon dioxide', 'lactose monohydrate', 'magnesium stearate', 'cellulose, microcrystalline' ],
      usos: {
        t: 'Trastornos de ansiedad y alivio a corto plazo de los síntomas de ansiedad.',
        ref: {
          f: 'dailymed-buspirona',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of anxiety disorders or the short-term relief of the symptoms of anxiety',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-buspirona',
      advertencias: [
        {
          titulo: 'Uso con inhibidores de la MAO',
          texto: 'Se ha descrito subida de la presión arterial al añadirla a un inhibidor de la monoaminooxidasa; no se recomienda usarlos juntos.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-buspirona',
            sec: 'Advertencias',
            cita: 'There have been reports of the occurrence of elevated blood pressure when buspirone hydrochloride tablets have been added to a regimen including an MAOI',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Más frecuentes que con placebo: mareo, náuseas, dolor de cabeza, nerviosismo, aturdimiento y excitación.',
          '34084-4',
          'include dizziness, nausea, headache, nervousness, lightheadedness, and excitement'
        ],
        [
          'Alrededor del 10 % de 2200 pacientes de los ensayos dejó el tratamiento por un efecto adverso.',
          '34084-4',
          'Approximately 10% of the 2200 anxious patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 15 mg, 30 mg, 5 mg, 7.5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de buspirona. Los excipientes no son el principio activo.',
    usos: 'Trastornos de ansiedad y alivio a corto plazo de los síntomas de ansiedad.',
    actua: 'Su mecanismo se desconoce. A diferencia de las benzodiazepinas, no es anticonvulsivante ni relajante muscular; en estudios preclínicos muestra gran afinidad por los receptores de serotonina 5-HT1A.',
    recorrido: 'Se absorbe rápido pero sufre un primer paso amplio: la buspirona sin cambios es solo alrededor del 1 % de la radiactividad del plasma. Con 20 mg, el pico (1 a 6 ng/mL) llega a los 40-90 minutos; la comida reduce ese primer paso. Con buspirona marcada, del 29 % al 63 % de la dosis salió por la orina en 24 horas, sobre todo como metabolitos, y del 18 % al 38 % por las heces. La semivida de la buspirona sin cambios es de 2 a 3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido; la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-buspirona',
            sec: '11 · Descripción',
            cita: 'Buspirone hydrochloride tablets, USP are an antianxiety agent',
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
      ocurre: 'Se absorbe rápido pero sufre un primer paso amplio: la buspirona sin cambios es solo alrededor del 1 % de la radiactividad del plasma. Con 20 mg, el pico (1 a 6 ng/mL) llega a los 40-90 minutos; la comida reduce ese primer paso.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido pero sufre un primer paso amplio: la buspirona sin cambios es solo alrededor del 1 % de la radiactividad del plasma. Con 20 mg, el pico (1 a 6 ng/mL) llega a los 40-90 minutos; la comida reduce ese primer paso.',
          ref: {
            f: 'dailymed-buspirona',
            sec: '12 · Farmacología clínica',
            cita: 'rapidly absorbed in man and undergoes extensive first-pass metabolism',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con comida aumentaron el AUC (84 %) y la Cmax (116 %) de la buspirona sin cambios.',
          ref: { f: 'dailymed-buspirona', sec: '12 · Farmacología clínica', cita: 'increased by 84% and 116%, respectively', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'En un estudio in vitro, alrededor del 86 % se unió a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En un estudio in vitro, alrededor del 86 % se unió a proteínas del plasma.',
          ref: {
            f: 'dailymed-buspirona',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 86% of buspirone is bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores de serotonina 5-HT1A (mecanismo desconocido)',
        efecto: 'Su mecanismo se desconoce. A diferencia de las benzodiazepinas, no es anticonvulsivante ni relajante muscular; en estudios preclínicos muestra gran afinidad por los receptores de serotonina 5-HT1A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo se desconoce. A diferencia de las benzodiazepinas, no es anticonvulsivante ni relajante muscular; en estudios preclínicos muestra gran afinidad por los receptores de serotonina 5-HT1A.',
            ref: {
              f: 'dailymed-buspirona',
              sec: '12 · Farmacología clínica',
              cita: 'In vitro preclinical studies have shown that buspirone has a high affinity for serotonin (5-HT 1A ) receptors',
              codigo: '34090-1'
            }
          },
          {
            t: 'La etiqueta indica que su mecanismo de acción se desconoce.',
            ref: { f: 'dailymed-buspirona', sec: '12 · Farmacología clínica', cita: 'The mechanism of action of buspirone is unknown', codigo: '34090-1' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por oxidación mediante CYP3A4 y da derivados hidroxilados y un metabolito activo, la 1-pirimidinilpiperazina (1-PP).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por oxidación mediante CYP3A4 y da derivados hidroxilados y un metabolito activo, la 1-pirimidinilpiperazina (1-PP).',
          ref: { f: 'dailymed-buspirona', sec: '12 · Farmacología clínica', cita: 'Buspirone is metabolized primarily by oxidation', codigo: '34090-1' }
        }
      ],
      metabolitos: [
        {
          nombre: '1-pirimidinilpiperazina (1-PP)',
          actividad: 'activo',
          nota: 'Metabolito farmacológicamente activo.',
          ref: {
            f: 'dailymed-buspirona',
            sec: '12 · Farmacología clínica',
            cita: 'a pharmacologically active metabolite, 1-pyrimidinylpiperazine',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con buspirona marcada, del 29 % al 63 % de la dosis salió por la orina en 24 horas, sobre todo como metabolitos, y del 18 % al 38 % por las heces. La semivida de la buspirona sin cambios es de 2 a 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con buspirona marcada, del 29 % al 63 % de la dosis salió por la orina en 24 horas, sobre todo como metabolitos, y del 18 % al 38 % por las heces. La semivida de la buspirona sin cambios es de 2 a 3 horas.',
          ref: {
            f: 'dailymed-buspirona',
            sec: '12 · Farmacología clínica',
            cita: '29% to 63% of the dose was excreted in the urine within 24 hours, primarily as metabolites',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima',
      valor: '1-6',
      unidad: 'ng/mL',
      analito: 'buspirona sin cambios',
      condiciones: 'dosis única de 20 mg',
      ref: {
        f: 'dailymed-buspirona',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma levels of 1 ng/mL to 6 ng/mL have been observed 40 to 90 minutes after single oral doses of 20 mg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '40-90',
      unidad: 'min',
      analito: 'buspirona sin cambios',
      condiciones: 'dosis única de 20 mg',
      ref: {
        f: 'dailymed-buspirona',
        sec: '12 · Farmacología clínica',
        cita: 'have been observed 40 to 90 minutes after single oral doses of 20 mg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (in vitro)',
      valor: '86 (aprox.)',
      unidad: '%',
      analito: 'buspirona',
      ref: {
        f: 'dailymed-buspirona',
        sec: '12 · Farmacología clínica',
        cita: 'approximately 86% of buspirone is bound to plasma proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2-3',
      unidad: 'h',
      analito: 'buspirona sin cambios',
      ref: {
        f: 'dailymed-buspirona',
        sec: '12 · Farmacología clínica',
        cita: 'The average elimination half-life of unchanged buspirone after single doses of 10 mg to 40 mg is about 2 to 3 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 24 h',
      valor: '29-63',
      unidad: '% de la dosis',
      analito: 'buspirona y metabolitos',
      condiciones: 'dosis única marcada con carbono 14',
      ref: {
        f: 'dailymed-buspirona',
        sec: '12 · Farmacología clínica',
        cita: '29% to 63% of the dose was excreted in the urine within 24 hours',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-buspirona', '3da22999-f5fb-49fd-acde-c3006598e985', 'BUSPIRONE HYDROCHLORIDE TABLET', 'Buspirone Hydrochloride', '14', '2026-11-09', '2026-11-12'),
    rengPubchem(2477, 'buspirone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
