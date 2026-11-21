import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lorazepam',
    nombre: 'Lorazepam',
    clase: 'Ansiolítico (benzodiazepina)',
    sinonimos: [ 'lorazepam', 'Ativan' ],
    formula: 'C15H10Cl2N2O2',
    masaMolar: 321.2,
    smiles: 'C1=CC=C(C(=C1)C2=NC(C(=O)NC3=C2C=C(C=C3)Cl)O)Cl',
    inchikey: 'DIWRORZWFLOCLC-UHFFFAOYSA-N',
    cid: 3958,
    iupac: '7-chloro-5-(2-chlorophenyl)-3-hydroxy-1,3-dihydro-1,4-benzodiazepin-2-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'lorazepam-oral',
      producto: 'Ativan · comprimido',
      titular: 'BAUSCH HEALTH US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg, 1 mg o 2 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'magnesium stearate', 'polacrilin potassium', 'microcrystalline cellulose' ],
      usos: {
        t: 'Trastornos de ansiedad y alivio a corto plazo de los síntomas de ansiedad, también cuando se asocian a síntomas depresivos.',
        ref: {
          f: 'dailymed-lorazepam',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of anxiety disorders or for the short-term relief of the symptoms of anxiety',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lorazepam',
      advertencias: [
        {
          titulo: 'Uso con opioides',
          texto: 'Tomarlo junto con opioides puede causar sedación profunda, depresión respiratoria, coma y muerte.',
          organos: [ 'encefalo', 'pulmones' ],
          ref: {
            f: 'dailymed-lorazepam',
            sec: 'Advertencia destacada',
            cita: 'Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Sedación (15,9 %), la más frecuente, seguida de mareo (6,9 %), debilidad (4,2 %) y inestabilidad (3,4 %).',
          '34084-4',
          'was sedation (15.9%), followed by dizziness (6.9%), weakness (4.2%), and unsteadiness (3.4%)'
        ],
        [ 'La sedación y la inestabilidad aumentan con la edad.', '34084-4', 'The incidence of sedation and unsteadiness increased with age' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.5 mg, 1 mg o 2 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Trastornos de ansiedad y alivio a corto plazo de los síntomas de ansiedad, también cuando se asocian a síntomas depresivos.',
    actua: 'En voluntarios sanos, a dosis únicas altas, tiene una acción tranquilizante sobre el sistema nervioso central sin efecto apreciable sobre la respiración ni el sistema cardiovascular.',
    recorrido: 'Se absorbe con facilidad, con una biodisponibilidad absoluta del 90 %; el pico en el plasma llega hacia las 2 horas. El glucurónido sale por la orina. La semivida del lorazepam no conjugado es de unas 12 horas y la del glucurónido, de unas 18.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido; se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido; se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-lorazepam', sec: '11 · Descripción', cita: 'Each Ativan (lorazepam) tablet', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con facilidad, con una biodisponibilidad absoluta del 90 %; el pico en el plasma llega hacia las 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con facilidad, con una biodisponibilidad absoluta del 90 %; el pico en el plasma llega hacia las 2 horas.',
          ref: {
            f: 'dailymed-lorazepam',
            sec: '12 · Farmacología clínica',
            cita: 'readily absorbed with an absolute bioavailability of 90%',
            codigo: '34090-1'
          }
        },
        {
          t: 'El pico plasmático llega hacia las 2 horas.',
          ref: {
            f: 'dailymed-lorazepam',
            sec: '12 · Farmacología clínica',
            cita: 'Peak concentrations in plasma occur approximately 2 hours following administration',
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
      ocurre: 'Con 2 mg, el pico en el plasma ronda los 20 ng/mL; a concentraciones clínicas, alrededor del 85 % circula unido a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Con 2 mg, el pico en el plasma ronda los 20 ng/mL; a concentraciones clínicas, alrededor del 85 % circula unido a proteínas.',
          ref: {
            f: 'dailymed-lorazepam',
            sec: '12 · Farmacología clínica',
            cita: 'lorazepam is approximately 85% bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Sistema nervioso central',
        efecto: 'En voluntarios sanos, a dosis únicas altas, tiene una acción tranquilizante sobre el sistema nervioso central sin efecto apreciable sobre la respiración ni el sistema cardiovascular.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'En voluntarios sanos, a dosis únicas altas, tiene una acción tranquilizante sobre el sistema nervioso central sin efecto apreciable sobre la respiración ni el sistema cardiovascular.',
            ref: {
              f: 'dailymed-lorazepam',
              sec: '12 · Farmacología clínica',
              cita: 'has a tranquilizing action on the central nervous system with no appreciable effect on the respiratory or cardiovascular systems',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se conjuga rápidamente en su grupo 3-hidroxilo y forma glucurónido de lorazepam, sin actividad demostrable en el sistema nervioso central en animales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se conjuga rápidamente en su grupo 3-hidroxilo y forma glucurónido de lorazepam, sin actividad demostrable en el sistema nervioso central en animales.',
          ref: {
            f: 'dailymed-lorazepam',
            sec: '12 · Farmacología clínica',
            cita: 'rapidly conjugated at its 3-hydroxy group into lorazepam glucuronide',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de lorazepam',
          actividad: 'inactivo',
          nota: 'Sin actividad demostrable en el sistema nervioso central en animales.',
          ref: {
            f: 'dailymed-lorazepam',
            sec: '12 · Farmacología clínica',
            cita: 'Lorazepam glucuronide has no demonstrable central nervous system (CNS) activity in animals',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El glucurónido sale por la orina. La semivida del lorazepam no conjugado es de unas 12 horas y la del glucurónido, de unas 18.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El glucurónido sale por la orina. La semivida del lorazepam no conjugado es de unas 12 horas y la del glucurónido, de unas 18.',
          ref: { f: 'dailymed-lorazepam', sec: '12 · Farmacología clínica', cita: 'which is then excreted in the urine', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '90',
      unidad: '%',
      analito: 'lorazepam',
      ref: {
        f: 'dailymed-lorazepam',
        sec: '12 · Farmacología clínica',
        cita: 'readily absorbed with an absolute bioavailability of 90%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'lorazepam',
      ref: {
        f: 'dailymed-lorazepam',
        sec: '12 · Farmacología clínica',
        cita: 'Peak concentrations in plasma occur approximately 2 hours following administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima',
      valor: '20 (aprox.)',
      unidad: 'ng/mL',
      analito: 'lorazepam',
      condiciones: 'dosis de 2 mg',
      ref: {
        f: 'dailymed-lorazepam',
        sec: '12 · Farmacología clínica',
        cita: 'The peak plasma level of lorazepam from a 2 mg dose is approximately 20 ng/mL',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'lorazepam no conjugado',
      ref: {
        f: 'dailymed-lorazepam',
        sec: '12 · Farmacología clínica',
        cita: 'The mean half-life of unconjugated lorazepam in human plasma is about 12 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '18 (aprox.)',
      unidad: 'h',
      analito: 'glucurónido de lorazepam (metabolito principal)',
      ref: {
        f: 'dailymed-lorazepam',
        sec: '12 · Farmacología clínica',
        cita: 'for its major metabolite, lorazepam glucuronide, about 18 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '85 (aprox.)',
      unidad: '%',
      analito: 'lorazepam',
      ref: { f: 'dailymed-lorazepam', sec: '12 · Farmacología clínica', cita: 'lorazepam is approximately 85% bound to plasma proteins', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lorazepam', '89057c93-8155-4040-acec-64e877bd2b4c', 'ATIVAN (LORAZEPAM) TABLET', 'Ativan', '24', '2025-11-26', '2026-11-12'),
    rengPubchem(3958, 'lorazepam', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
