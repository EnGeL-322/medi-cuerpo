import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mexiletina',
    nombre: 'Mexiletina',
    clase: 'Antiarrítmico de clase IB (bloqueante de canales de sodio)',
    sinonimos: [ 'mexiletine' ],
    formula: 'C11H17NO',
    masaMolar: 179.26,
    smiles: 'CC1=C(C(=CC=C1)C)OCC(C)N',
    inchikey: 'VLPIATFUUWWMKC-UHFFFAOYSA-N',
    cid: 4178,
    iupac: '1-(2,6-dimethylphenoxy)propan-2-amine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'mexiletina-oral',
      producto: 'Mexiletine Hydrochloride · cápsula',
      titular: 'MACLEODS PHARMACEUTICALS LIMITED',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg, 200 mg o 250 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de mexiletina',
        ref: { f: 'dailymed-mexiletina', sec: '11 · Descripción', cita: 'Mexiletine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'magnesium stearate',
        'starch, corn',
        'fd&c yellow no. 6',
        'gelatin',
        'titanium dioxide',
        'sodium lauryl sulfate',
        'd&c red no. 28',
        'fd&c blue no. 1',
        'butyl alcohol',
        'ferrosoferric oxide',
        'alcohol',
        'isopropyl alcohol',
        'potassium hydroxide',
        'ammonia',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de arritmias ventriculares documentadas, como la taquicardia ventricular sostenida, que el médico considere potencialmente mortales.',
        ref: {
          f: 'dailymed-mexiletina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of documented ventricular arrhythmias, such as sustained ventricular tachycardia, that, in the judgment of the physician, are life-threatening',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mexiletina',
      advertencias: [
        {
          titulo: 'Mortalidad en el estudio CAST',
          texto: 'Con otros antiarrítmicos (encainida o flecainida) se observó un exceso de mortalidad o de paro cardíaco no mortal frente al placebo en pacientes tras un infarto de miocardio.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-mexiletina',
            sec: 'Advertencias',
            cita: 'an excessive mortality or non-fatal cardiac arrest rate (7.7%) was seen in patients treated with encainide or flecainide',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en los ensayos de tres meses: molestias digestivas altas (41 %), aturdimiento (10,5 %), temblor (12,6 %) y dificultades de coordinación (10,2 %).',
          '34084-4',
          'the most frequent adverse reactions were upper gastrointestinal distress (41%), lightheadedness (10.5%), tremor (12.6%) and coordination difficulties (10.2%)'
        ],
        [
          'Aunque no suelen ser graves, dependen de la dosis y son reversibles al reducir la dosis, tomar el fármaco con comida o antiácido, o suspenderlo.',
          '34084-4',
          'Although these reactions were generally not serious, and were dose-related and reversible with a reduction in dosage, by taking the drug with food or antacid or by therapy discontinu'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 150 mg, 200 mg o 250 mg por cápsula, según la etiqueta; el activo va como clorhidrato de mexiletina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de arritmias ventriculares documentadas, como la taquicardia ventricular sostenida, que el médico considere potencialmente mortales.',
    actua: 'Es un anestésico local y antiarrítmico de estructura parecida a la lidocaína pero activo por vía oral; como ella, inhibe la corriente de entrada de sodio y reduce la velocidad de ascenso de la fase 0 del potencial de acción.',
    recorrido: 'Se absorbe bien (~90 %) en el tubo digestivo y, a diferencia de la lidocaína, su metabolismo de primer paso es bajo. Aproximadamente el 10 % se excreta inalterado por el riñón; la semivida de eliminación plasmática es de unas 10 a 12 horas.'
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
            f: 'dailymed-mexiletina',
            sec: '11 · Descripción',
            cita: 'Mexiletine hydrochloride, USP is an orally active antiarrhythmic agent',
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
      ocurre: 'Se absorbe bien (~90 %) en el tubo digestivo y, a diferencia de la lidocaína, su metabolismo de primer paso es bajo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien (~90 %) en el tubo digestivo y, a diferencia de la lidocaína, su metabolismo de primer paso es bajo.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'Mexiletine is well absorbed (~90%) from the gastrointestinal tract',
            codigo: '34090-1'
          }
        },
        {
          t: 'Las concentraciones máximas en sangre se alcanzan en dos o tres horas.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'Peak blood levels are reached in two to three hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 50 % a 60 % a las proteínas del plasma y tiene un volumen de distribución de 5 a 7 litros/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 50 % a 60 % a las proteínas del plasma y tiene un volumen de distribución de 5 a 7 litros/kg.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'It is 50 to 60% bound to plasma protein, with a volume of distribution of 5 to 7 liters/kg',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Canal de sodio (corriente de entrada de sodio)',
        efecto: 'Es un anestésico local y antiarrítmico de estructura parecida a la lidocaína pero activo por vía oral; como ella, inhibe la corriente de entrada de sodio y reduce la velocidad de ascenso de la fase 0 del potencial de acción.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Es un anestésico local y antiarrítmico de estructura parecida a la lidocaína pero activo por vía oral; como ella, inhibe la corriente de entrada de sodio y reduce la velocidad de ascenso de la fase 0 del potencial de acción.',
            ref: {
              f: 'dailymed-mexiletina',
              sec: '12 · Farmacología clínica',
              cita: 'Mexiletine, like lidocaine, inhibits the inward sodium current, thus reducing the rate of rise of the action potential, Phase 0',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado; la vía principal es la CYP2D6 y también es sustrato de la CYP1A2, por lo que puede haber fenotipos de metabolizadores lentos o rápidos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado; la vía principal es la CYP2D6 y también es sustrato de la CYP1A2, por lo que puede haber fenotipos de metabolizadores lentos o rápidos.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'Mexiletine is mainly metabolized in the liver, the primary pathway being CYP2D6 metabolism, although it is also a substrate for CYP1A2',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos hepáticos de la mexiletina',
          actividad: 'inactivo',
          nota: 'Cerca del 90 % se transforma en el hígado en metabolitos inactivos.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 90% of mexiletine hydrochloride is metabolized in the liver into inactive metabolites',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Aproximadamente el 10 % se excreta inalterado por el riñón; la semivida de eliminación plasmática es de unas 10 a 12 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Aproximadamente el 10 % se excreta inalterado por el riñón; la semivida de eliminación plasmática es de unas 10 a 12 horas.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 10% is excreted unchanged by the kidney',
            codigo: '34090-1'
          }
        },
        {
          t: 'En sujetos normales, la semivida de eliminación plasmática es de aproximadamente 10 a 12 horas.',
          ref: {
            f: 'dailymed-mexiletina',
            sec: '12 · Farmacología clínica',
            cita: 'the plasma elimination half-life of mexiletine is approximately 10 to 12 hours',
            codigo: '34090-1'
          },
          poblacion: 'sujetos normales'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'otra',
      nombre: 'Fracción absorbida',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'mexiletina',
      ref: {
        f: 'dailymed-mexiletina',
        sec: '12 · Farmacología clínica',
        cita: 'Mexiletine is well absorbed (~90%) from the gastrointestinal tract',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en sangre',
      valor: '2-3',
      unidad: 'h',
      analito: 'mexiletina',
      ref: { f: 'dailymed-mexiletina', sec: '12 · Farmacología clínica', cita: 'Peak blood levels are reached in two to three hours', codigo: '34090-1' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '50-60',
      unidad: '%',
      analito: 'mexiletina',
      ref: { f: 'dailymed-mexiletina', sec: '12 · Farmacología clínica', cita: 'It is 50 to 60% bound to plasma protein', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '5-7',
      unidad: 'L/kg',
      analito: 'mexiletina',
      ref: { f: 'dailymed-mexiletina', sec: '12 · Farmacología clínica', cita: 'with a volume of distribution of 5 to 7 liters/kg', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '10-12 (aprox.)',
      unidad: 'h',
      analito: 'mexiletina',
      poblacion: 'sujetos normales',
      ref: {
        f: 'dailymed-mexiletina',
        sec: '12 · Farmacología clínica',
        cita: 'the plasma elimination half-life of mexiletine is approximately 10 to 12 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado inalterado por el riñón',
      valor: '10 (aprox.)',
      unidad: '% de la dosis',
      analito: 'mexiletina',
      ref: { f: 'dailymed-mexiletina', sec: '12 · Farmacología clínica', cita: 'Approximately 10% is excreted unchanged by the kidney', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mexiletina', 'a61a07f6-0b48-4dcd-ad42-5d90f6e69ab1', 'MEXILETINE HYDROCHLORIDE CAPSULE', 'Mexiletine Hydrochloride', '2', '2026-06-26', '2026-11-15'),
    rengPubchem(4178, 'mexiletine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
