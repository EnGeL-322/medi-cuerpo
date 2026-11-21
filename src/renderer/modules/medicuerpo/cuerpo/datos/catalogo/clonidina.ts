import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clonidina',
    nombre: 'Clonidina',
    clase: 'Agonista alfa-2 adrenérgico de acción central',
    sinonimos: [ 'clonidine', 'Catapres' ],
    formula: 'C9H9Cl2N3',
    masaMolar: 230.09,
    smiles: 'C1CN=C(N1)NC2=C(C=CC=C2Cl)Cl',
    inchikey: 'GJSURZIOUXUGAL-UHFFFAOYSA-N',
    cid: 2803,
    iupac: 'N-(2,6-dichlorophenyl)-4,5-dihydro-1H-imidazol-2-amine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'clonidina-oral',
      producto: 'clonidine hydrochloride · comprimido',
      titular: 'ALEMBIC PHARMACEUTICALS LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.1 mg, 0.2 mg o 0.3 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de clonidina',
        ref: { f: 'dailymed-clonidina', sec: '11 · Descripción', cita: 'Clonidine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'fd&c yellow no. 6',
        'fd&c red no. 40',
        'fd&c blue no. 1',
        'aluminum oxide'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, sola o con otros antihipertensivos.',
        ref: {
          f: 'dailymed-clonidina',
          sec: '1 · Indicaciones',
          cita: 'Clonidine hydrochloride is indicated in the treatment of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-clonidina',
      advertencias: [
        {
          titulo: 'Suspensión brusca',
          texto: 'Dejarla de golpe puede causar nerviosismo, agitación, dolor de cabeza y temblor, seguidos de una subida rápida de la presión arterial.',
          organos: [ 'vasos', 'encefalo' ],
          ref: {
            f: 'dailymed-clonidina',
            sec: 'Advertencias',
            cita: 'Sudden cessation of clonidine treatment has, in some cases, resulted in symptoms such as nervousness, agitation, headache, and tremor',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes, relacionadas con la dosis: boca seca (unos 40 de cada 100), somnolencia (33), mareo (16), estreñimiento y sedación (10).',
          '34084-4',
          'dry mouth, occurring in about 40 of 100 patients; drowsiness, about 33 in 100'
        ],
        [ 'Mareo en unos 16 de cada 100 pacientes.', '34084-4', 'dizziness, about 16 in 100' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.1 mg, 0.2 mg o 0.3 mg por comprimido, según la etiqueta; el activo va como clorhidrato de clonidina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, sola o con otros antihipertensivos.',
    actua: 'Estimula receptores alfa-adrenérgicos del tronco cerebral: disminuye la salida de estímulos simpáticos del sistema nervioso central y bajan la resistencia periférica, la frecuencia cardiaca y la presión arterial.',
    recorrido: 'Su biodisponibilidad absoluta es del 70 % al 80 % y el pico plasmático llega en 1 a 3 horas; la comida no influye en su farmacocinética. Del 40 % al 60 % de la dosis absorbida sale sin cambios por la orina en 24 horas; su semivida de eliminación es de 12 a 16 horas (hasta 41 con insuficiencia renal grave).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca; la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '11 · Descripción',
            cita: 'available as tablets for oral administration in three dosage strengths',
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
      ocurre: 'Su biodisponibilidad absoluta es del 70 % al 80 % y el pico plasmático llega en 1 a 3 horas; la comida no influye en su farmacocinética.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Su biodisponibilidad absoluta es del 70 % al 80 % y el pico plasmático llega en 1 a 3 horas; la comida no influye en su farmacocinética.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'The absolute bioavailability of clonidine on oral administration is 70% to 80%',
            codigo: '34090-1'
          }
        },
        {
          t: 'Pico plasmático en 1 a 3 horas.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'Peak plasma clonidine levels are attained in approximately 1 to 3 hours',
            codigo: '34090-1'
          }
        },
        {
          t: 'Ni la comida ni la raza influyen en su farmacocinética.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'Neither food nor the race of the patient influences the pharmacokinetics of clonidine',
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
      ocurre: 'Tras la vía intravenosa se reparte en dos fases, con una semivida de distribución de unos 20 minutos; el efecto antihipertensivo aparece con concentraciones de 0,2 a 2,0 ng/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras la vía intravenosa se reparte en dos fases, con una semivida de distribución de unos 20 minutos; el efecto antihipertensivo aparece con concentraciones de 0,2 a 2,0 ng/mL.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'clonidine displays biphasic disposition with a distribution half-life of about 20 minutes',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores alfa-adrenérgicos del tronco cerebral',
        efecto: 'Estimula receptores alfa-adrenérgicos del tronco cerebral: disminuye la salida de estímulos simpáticos del sistema nervioso central y bajan la resistencia periférica, la frecuencia cardiaca y la presión arterial.',
        lugar: [ 'encefalo', 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Estimula receptores alfa-adrenérgicos del tronco cerebral: disminuye la salida de estímulos simpáticos del sistema nervioso central y bajan la resistencia periférica, la frecuencia cardiaca y la presión arterial.',
            ref: {
              f: 'dailymed-clonidina',
              sec: '12 · Farmacología clínica',
              cita: 'Clonidine stimulates alpha-adrenoreceptors in the brain stem',
              codigo: '34090-1'
            }
          },
          {
            t: 'Disminuye la salida simpática del sistema nervioso central.',
            ref: {
              f: 'dailymed-clonidina',
              sec: '12 · Farmacología clínica',
              cita: 'This action results in reduced sympathetic outflow from the central nervous system',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor del 50 % de la dosis absorbida se metaboliza en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor del 50 % de la dosis absorbida se metaboliza en el hígado.',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'About 50% of the absorbed dose is metabolized in the liver',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Del 40 % al 60 % de la dosis absorbida sale sin cambios por la orina en 24 horas; su semivida de eliminación es de 12 a 16 horas (hasta 41 con insuficiencia renal grave).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Del 40 % al 60 % de la dosis absorbida sale sin cambios por la orina en 24 horas; su semivida de eliminación es de 12 a 16 horas (hasta 41 con insuficiencia renal grave).',
          ref: {
            f: 'dailymed-clonidina',
            sec: '12 · Farmacología clínica',
            cita: 'about 40% to 60% of the absorbed dose is recovered in the urine as unchanged drug in 24 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '70-80',
      unidad: '%',
      analito: 'clonidina',
      ref: {
        f: 'dailymed-clonidina',
        sec: '12 · Farmacología clínica',
        cita: 'The absolute bioavailability of clonidine on oral administration is 70% to 80%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-3',
      unidad: 'h',
      analito: 'clonidina',
      ref: {
        f: 'dailymed-clonidina',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma clonidine levels are attained in approximately 1 to 3 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '12-16',
      unidad: 'h',
      analito: 'clonidina',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: { f: 'dailymed-clonidina', sec: '12 · Farmacología clínica', cita: 'an elimination half-life ranging from 12 to 16 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina en 24 h',
      valor: '40-60',
      unidad: '% de la dosis',
      analito: 'clonidina',
      condiciones: 'de la dosis absorbida',
      ref: {
        f: 'dailymed-clonidina',
        sec: '12 · Farmacología clínica',
        cita: 'about 40% to 60% of the absorbed dose is recovered in the urine as unchanged drug',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Concentraciones con efecto antihipertensivo',
      valor: '0,2-2,0',
      unidad: 'ng/mL',
      analito: 'clonidina',
      poblacion: 'pacientes con función excretora normal',
      ref: {
        f: 'dailymed-clonidina',
        sec: '12 · Farmacología clínica',
        cita: 'The antihypertensive effect is reached at plasma concentrations between about 0.2 and 2.0 ng/mL',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-clonidina', '88a8db46-0fc9-48cd-b7cc-ac9c9cdea100', 'CLONIDINE HYDROCHLORIDE TABLET', 'clonidine hydrochloride', '5', '2026-10-01', '2026-11-12'),
    rengPubchem(2803, 'clonidine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
