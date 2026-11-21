import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'minoxidil',
    nombre: 'Minoxidil',
    clase: 'Vasodilatador arterial directo',
    sinonimos: [ 'minoxidil', 'Loniten' ],
    formula: 'C9H15N5O',
    masaMolar: 209.25,
    smiles: 'C1CCN(CC1)C2=NC(=N)N(C(=C2)N)O',
    inchikey: 'ZIMGGGWCDYVHOY-UHFFFAOYSA-N',
    cid: 4201,
    iupac: '3-hydroxy-2-imino-6-piperidin-1-ylpyrimidin-4-amine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'minoxidil-oral',
      producto: 'MINOXIDIL · comprimido',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg o 10 mg por comprimido, según la etiqueta',
      excipientes: [ 'Lactosa anhidra', 'dióxido de silicio coloidal', 'estearato de magnesio', 'celulosa microcristalina', 'glicolato sódico de almidón' ],
      usos: {
        t: 'Solo para la hipertensión con síntomas o daño de órganos que no se controla con un diurético y otros dos antihipertensivos a dosis máximas.',
        ref: {
          f: 'dailymed-minoxidil',
          sec: '1 · Indicaciones',
          cita: 'indicated only in the treatment of hypertension that is symptomatic or associated with target organ damage',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-minoxidil',
      advertencias: [
        {
          titulo: 'Derrame pericárdico y angina',
          texto: 'Puede causar derrame pericárdico, que a veces progresa a taponamiento, y empeorar la angina.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-minoxidil',
            sec: 'Advertencia destacada',
            cita: 'It can cause pericardial effusion, occasionally progressing to tamponade',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Retención de sal y agua',
          texto: 'Suele tener que darse con un diurético para evitar la retención de líquidos y la insuficiencia cardiaca.',
          organos: [ 'corazon', 'rinones' ],
          ref: {
            f: 'dailymed-minoxidil',
            sec: 'Advertencias',
            cita: 'must usually be administered concomitantly with a diuretic adequate to prevent fluid retention',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Cambios en las ondas T del electrocardiograma en alrededor del 60 % de los pacientes.',
          '34084-4',
          'Changes in direction and magnitude of the ECG T-waves occur in approximately 60% of patients'
        ],
        [ 'Sensibilidad mamaria en menos del 1 %.', '34084-4', 'Breast tenderness — This developed in less than 1 % of patients' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg o 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Solo para la hipertensión con síntomas o daño de órganos que no se controla con un diurético y otros dos antihipertensivos a dosis máximas.',
    actua: 'Dilata directamente las arteriolas periféricas y baja la presión al reducir la resistencia vascular; provoca respuestas reflejas (taquicardia y retención de sal y agua).',
    recorrido: 'Se absorbe al menos en un 90 % en el tubo digestivo. Sus metabolitos salen principalmente por la orina; su semivida plasmática es de 4,2 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: {
            f: 'dailymed-minoxidil',
            sec: '11 · Descripción',
            cita: 'Minoxidil tablets contain minoxidil, an antihypertensive peripheral vasodilator',
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
      ocurre: 'Se absorbe al menos en un 90 % en el tubo digestivo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe al menos en un 90 % en el tubo digestivo.',
          ref: {
            f: 'dailymed-minoxidil',
            sec: '12 · Farmacología clínica',
            cita: 'Minoxidil is at least 90% absorbed from the Gl tract in experimental animals and man',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'En animales de experimentación no entra en cantidades importantes en el sistema nervioso central y no afecta a su función en humanos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En animales de experimentación no entra en cantidades importantes en el sistema nervioso central y no afecta a su función en humanos.',
          ref: {
            f: 'dailymed-minoxidil',
            sec: '12 · Farmacología clínica',
            cita: 'The drug does not enter the central nervous system in experimental animals in significant amounts',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Músculo liso arteriolar',
        efecto: 'Dilata directamente las arteriolas periféricas y baja la presión al reducir la resistencia vascular; provoca respuestas reflejas (taquicardia y retención de sal y agua).',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Dilata directamente las arteriolas periféricas y baja la presión al reducir la resistencia vascular; provoca respuestas reflejas (taquicardia y retención de sal y agua).',
            ref: {
              f: 'dailymed-minoxidil',
              sec: '12 · Farmacología clínica',
              cita: 'Minoxidil is an orally effective direct acting peripheral vasodilator',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor del 90 % se metaboliza, sobre todo por conjugación con ácido glucurónico; sus metabolitos son mucho menos activos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor del 90 % se metaboliza, sobre todo por conjugación con ácido glucurónico; sus metabolitos son mucho menos activos.',
          ref: {
            f: 'dailymed-minoxidil',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 90% of the administered drug is metabolized, predominantly by conjugation with glucuronic acid',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de minoxidil',
          actividad: 'desconocida',
          nota: 'Mucho menos activos que el minoxidil.',
          ref: {
            f: 'dailymed-minoxidil',
            sec: '12 · Farmacología clínica',
            cita: 'Known metabolites exert much less pharmacologic effect than minoxidil itself',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sus metabolitos salen principalmente por la orina; su semivida plasmática es de 4,2 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sus metabolitos salen principalmente por la orina; su semivida plasmática es de 4,2 horas.',
          ref: { f: 'dailymed-minoxidil', sec: '12 · Farmacología clínica', cita: 'all are excreted principally in the urine', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '4,2',
      unidad: 'h',
      analito: 'minoxidil',
      ref: { f: 'dailymed-minoxidil', sec: '12 · Farmacología clínica', cita: 'The average plasma half-life in man is 4.2 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '≥ 90',
      unidad: '%',
      analito: 'minoxidil',
      ref: { f: 'dailymed-minoxidil', sec: '12 · Farmacología clínica', cita: 'Minoxidil is at least 90% absorbed', codigo: '34090-1' }
    },
    {
      magnitud: 'otra',
      nombre: 'Duración total del efecto',
      valor: '75 (aprox.)',
      unidad: 'h',
      analito: 'minoxidil',
      ref: { f: 'dailymed-minoxidil', sec: '12 · Farmacología clínica', cita: 'The total duration of effect is approximately 75 hours', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-minoxidil', '0354a7f5-5917-44dc-9963-411104008cb5', 'MINOXIDIL TABLET', 'MINOXIDIL', '5', '2026-02-10', '2026-11-12'),
    rengPubchem(4201, 'minoxidil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
