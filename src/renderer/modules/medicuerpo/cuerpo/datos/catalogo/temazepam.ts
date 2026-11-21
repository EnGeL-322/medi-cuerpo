import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'temazepam',
    nombre: 'Temazepam',
    clase: 'Hipnótico (benzodiazepina)',
    sinonimos: [ 'temazepam', 'Restoril' ],
    formula: 'C16H13ClN2O2',
    masaMolar: 300.74,
    smiles: 'CN1C2=C(C=C(C=C2)Cl)C(=NC(C1=O)O)C3=CC=CC=C3',
    inchikey: 'SEQDDYPDSLOBDC-UHFFFAOYSA-N',
    cid: 5391,
    iupac: '7-chloro-3-hydroxy-1-methyl-5-phenyl-3H-1,4-benzodiazepin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'temazepam-oral',
      producto: 'RESTORIL · cápsula',
      titular: 'SPECGX LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '7.5 mg, 15 mg, 22.5 mg o 30 mg por cápsula, según la etiqueta',
      excipientes: [
        'alcohol',
        'butyl alcohol',
        'ethyl acetate',
        'ferric oxide red',
        'fd&c blue no. 1',
        'fd&c red no. 3',
        'gelatin, unspecified',
        'lactose, unspecified form',
        'magnesium stearate',
        'shellac',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento a corto plazo del insomnio (generalmente 7 a 10 días).',
        ref: {
          f: 'dailymed-temazepam',
          sec: '1 · Indicaciones',
          cita: 'is indicated for the short-term treatment of insomnia (generally 7 to 10 days)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-temazepam',
      advertencias: [
        {
          titulo: 'Uso con opioides',
          texto: 'Tomarlo junto con opioides puede causar sedación profunda, depresión respiratoria, coma y muerte.',
          organos: [ 'encefalo', 'pulmones' ],
          ref: {
            f: 'dailymed-temazepam',
            sec: 'Advertencia destacada',
            cita: 'Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [ 'Somnolencia (9,1 % frente a 5,6 % con placebo), dolor de cabeza y cansancio, entre los más frecuentes.', '34084-4', 'Drowsiness 9.1 5.6' ],
        [ 'Mareo (4,5 %) y letargo (4,5 %).', '34084-4', 'Lethargy 4.5 3.4 Dizziness 4.5 3.3' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 7.5 mg, 15 mg, 22.5 mg o 30 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento a corto plazo del insomnio (generalmente 7 a 10 días).',
    actua: 'Es una benzodiazepina hipnótica; la etiqueta explica que el tipo y la duración de su efecto hipnótico dependen de su semivida, sin detallar el mecanismo.',
    recorrido: 'Se absorbe bien y con un primer paso mínimo (8 %); con 30 mg, aparece en el plasma a los 10-20 minutos y el pico (865 ng/mL de media) llega hacia 1,5 horas. Del 80 % al 90 % de la dosis aparece en la orina como conjugados; la semivida terminal va de 3,5 a 18,4 horas (media de 8,8).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca.',
          ref: { f: 'dailymed-temazepam', sec: '11 · Descripción', cita: 'Restoril ® (temazepam) is a benzodiazepine hypnotic agent', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien y con un primer paso mínimo (8 %); con 30 mg, aparece en el plasma a los 10-20 minutos y el pico (865 ng/mL de media) llega hacia 1,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y con un primer paso mínimo (8 %); con 30 mg, aparece en el plasma a los 10-20 minutos y el pico (865 ng/mL de media) llega hacia 1,5 horas.',
          ref: {
            f: 'dailymed-temazepam',
            sec: '12 · Farmacología clínica',
            cita: 'Restoril was well absorbed and found to have minimal (8%) first pass metabolism',
            codigo: '34090-1'
          }
        },
        {
          t: 'Pico medio de 865 ng/mL hacia 1,5 horas con 30 mg.',
          ref: {
            f: 'dailymed-temazepam',
            sec: '12 · Farmacología clínica',
            cita: 'peak plasma levels ranging from 666 to 982 ng/mL (mean 865 ng/mL)',
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
      ocurre: 'El fármaco sin cambios se une en un 96 % a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El fármaco sin cambios se une en un 96 % a proteínas del plasma.',
          ref: { f: 'dailymed-temazepam', sec: '12 · Farmacología clínica', cita: 'The unchanged drug was 96% bound to plasma proteins', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Receptores de benzodiazepinas (complejo GABA-A)',
        efecto: 'Es una benzodiazepina hipnótica; la etiqueta explica que el tipo y la duración de su efecto hipnótico dependen de su semivida, sin detallar el mecanismo.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es una benzodiazepina hipnótica; la etiqueta explica que el tipo y la duración de su efecto hipnótico dependen de su semivida, sin detallar el mecanismo.',
            ref: {
              f: 'dailymed-temazepam',
              sec: '12 · Farmacología clínica',
              cita: 'The type and duration of hypnotic effects and the profile of unwanted effects during administration of benzodiazepine hypnotics',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por completo por conjugación antes de eliminarse; no forma metabolitos activos y su metabolito principal es el O-conjugado (90 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por completo por conjugación antes de eliminarse; no forma metabolitos activos y su metabolito principal es el O-conjugado (90 %).',
          ref: {
            f: 'dailymed-temazepam',
            sec: '12 · Farmacología clínica',
            cita: 'Temazepam was completely metabolized through conjugation prior to excretion',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-conjugado de temazepam',
          actividad: 'inactivo',
          nota: 'Metabolito principal (90 %).',
          ref: {
            f: 'dailymed-temazepam',
            sec: '12 · Farmacología clínica',
            cita: 'There were no active metabolites formed and the only significant metabolite present in blood was the O-conjugate',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'O-conjugado de N-desmetil temazepam',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-temazepam',
            sec: '12 · Farmacología clínica',
            cita: 'the O-conjugate of N-desmethyl temazepam was a minor metabolite (7%)',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Del 80 % al 90 % de la dosis aparece en la orina como conjugados; la semivida terminal va de 3,5 a 18,4 horas (media de 8,8).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Del 80 % al 90 % de la dosis aparece en la orina como conjugados; la semivida terminal va de 3,5 a 18,4 horas (media de 8,8).',
          ref: { f: 'dailymed-temazepam', sec: '12 · Farmacología clínica', cita: '80% to 90% of the dose appeared in the urine', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,5 (1,2-1,6)',
      unidad: 'h',
      analito: 'temazepam',
      condiciones: 'cápsula de 30 mg',
      ref: {
        f: 'dailymed-temazepam',
        sec: '12 · Farmacología clínica',
        cita: 'occurring approximately 1.2 to 1.6 hours (mean 1.5 hours) after dosing',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '865 (666-982)',
      unidad: 'ng/mL',
      analito: 'temazepam',
      condiciones: 'cápsula de 30 mg',
      ref: {
        f: 'dailymed-temazepam',
        sec: '12 · Farmacología clínica',
        cita: 'peak plasma levels ranging from 666 to 982 ng/mL (mean 865 ng/mL)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '3,5-18,4 (media 8,8)',
      unidad: 'h',
      analito: 'temazepam',
      ref: {
        f: 'dailymed-temazepam',
        sec: '12 · Farmacología clínica',
        cita: 'the terminal half-life from 3.5 to 18.4 hours (mean 8.8 hours)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96',
      unidad: '%',
      analito: 'temazepam',
      ref: { f: 'dailymed-temazepam', sec: '12 · Farmacología clínica', cita: 'The unchanged drug was 96% bound to plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '80-90',
      unidad: '% de la dosis',
      analito: 'metabolitos conjugados',
      ref: { f: 'dailymed-temazepam', sec: '12 · Farmacología clínica', cita: '80% to 90% of the dose appeared in the urine', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-temazepam', 'bc56f7fd-1aaf-48ff-8aa7-d467e59e1015', 'RESTORIL (TEMAZEPAM) CAPSULE', 'RESTORIL', '25', '2026-06-15', '2026-11-12'),
    rengPubchem(5391, 'temazepam', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
