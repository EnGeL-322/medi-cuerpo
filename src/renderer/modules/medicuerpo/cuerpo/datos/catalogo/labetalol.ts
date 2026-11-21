import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'labetalol',
    nombre: 'Labetalol',
    clase: 'Bloqueante alfa-1 y beta adrenérgico',
    sinonimos: [ 'labetalol', 'Trandate' ],
    formula: 'C19H24N2O3',
    masaMolar: 328.4,
    smiles: 'CC(CCC1=CC=CC=C1)NCC(C2=CC(=C(C=C2)O)C(=O)N)O',
    inchikey: 'SGUAFYQXFOLMHL-UHFFFAOYSA-N',
    cid: 3869,
    iupac: '2-hydroxy-5-[1-hydroxy-2-(4-phenylbutan-2-ylamino)ethyl]benzamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'labetalol-oral',
      producto: 'Labetalol Hydrochloride · comprimido',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 200 mg, 300 mg o 400 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de labetalol',
        ref: { f: 'dailymed-labetalol', sec: '11 · Descripción', cita: 'Labetalol hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'hypromellose, unspecified',
        'magnesium stearate',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'd&c yellow no. 10 aluminum lake',
        'polysorbate 80',
        'fd&c yellow no. 6 aluminum lake'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o con otros antihipertensivos.',
        ref: { f: 'dailymed-labetalol', sec: '1 · Indicaciones', cita: 'indicated in the management of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-labetalol',
      advertencias: [
        {
          titulo: 'Lesión hepática',
          texto: 'Rara vez causa una lesión hepatocelular grave, habitualmente reversible, aunque se han descrito necrosis y muerte.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-labetalol',
            sec: 'Advertencias',
            cita: 'Severe hepatocellular injury, confirmed by rechallenge in at least one case, occurs rarely with labetalol therapy',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Si se cuentan todas las notificaciones: mareo (20 %), náuseas (14 %) y cansancio (11 %).',
          '34084-4',
          'dizziness, 20%; nausea, 14%; fatigue, 11%'
        ],
        [
          'Datos de ensayos controlados frente a placebo, metoprolol y propranolol de 3 a 4 meses.',
          '34084-4',
          'comparing labetalol hydrochloride, placebo, metoprolol, and propranolol over treatment periods of 3 and 4 months'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg, 200 mg, 300 mg o 400 mg por comprimido, según la etiqueta; el activo va como clorhidrato de labetalol. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o con otros antihipertensivos.',
    actua: 'Bloquea a la vez los receptores alfa-1 (de forma selectiva) y los beta (sin selectividad): baja la presión arterial sin taquicardia refleja.',
    recorrido: 'Se absorbe por completo, con pico en 1 a 2 horas, pero un primer paso hepático amplio deja una biodisponibilidad absoluta del 25 %. Del 55 % al 60 % de la dosis aparece en la orina como conjugados o sin cambios en las primeras 24 horas; el resto sale por la bilis a las heces. Su semivida es de 6 a 8 horas.'
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
            f: 'dailymed-labetalol',
            sec: '11 · Descripción',
            cita: 'Labetalol hydrochloride tablets, USP are an adrenergic receptor blocking agent',
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
      ocurre: 'Se absorbe por completo, con pico en 1 a 2 horas, pero un primer paso hepático amplio deja una biodisponibilidad absoluta del 25 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo, con pico en 1 a 2 horas, pero un primer paso hepático amplio deja una biodisponibilidad absoluta del 25 %.',
          ref: {
            f: 'dailymed-labetalol',
            sec: '12 · Farmacología clínica',
            cita: 'Labetalol hydrochloride is completely absorbed from the gastrointestinal tract with peak plasma levels occurring 1 to 2 hours after oral administration',
            codigo: '34090-1'
          }
        },
        {
          t: 'Biodisponibilidad absoluta del 25 % por el primer paso.',
          ref: { f: 'dailymed-labetalol', sec: '12 · Farmacología clínica', cita: 'when compared to an intravenous infusion is 25%', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Atraviesa la placenta; en animales, solo cantidades despreciables atravesaron la barrera hematoencefálica. El efecto máximo de una dosis oral llega en 2 a 4 horas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Atraviesa la placenta; en animales, solo cantidades despreciables atravesaron la barrera hematoencefálica. El efecto máximo de una dosis oral llega en 2 a 4 horas.',
          ref: {
            f: 'dailymed-labetalol',
            sec: '12 · Farmacología clínica',
            cita: 'Labetalol has been shown to cross the placental barrier in humans',
            codigo: '34090-1'
          }
        },
        {
          t: 'En animales, solo cantidades despreciables atravesaron la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-labetalol',
            sec: '12 · Farmacología clínica',
            cita: 'Only negligible amounts of the drug crossed the blood-brain barrier in animal studies',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores alfa-1 y beta adrenérgicos',
        efecto: 'Bloquea a la vez los receptores alfa-1 (de forma selectiva) y los beta (sin selectividad): baja la presión arterial sin taquicardia refleja.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Bloquea a la vez los receptores alfa-1 (de forma selectiva) y los beta (sin selectividad): baja la presión arterial sin taquicardia refleja.',
            ref: {
              f: 'dailymed-labetalol',
              sec: '12 · Farmacología clínica',
              cita: 'combines both selective, competitive, alpha 1 -adrenergic blocking and nonselective, competitive, beta-adrenergic blocking activity',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un primer paso hepático amplio y se elimina sobre todo como conjugados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un primer paso hepático amplio y se elimina sobre todo como conjugados.',
          ref: { f: 'dailymed-labetalol', sec: '12 · Farmacología clínica', cita: 'this is due to extensive "first-pass" metabolism', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Del 55 % al 60 % de la dosis aparece en la orina como conjugados o sin cambios en las primeras 24 horas; el resto sale por la bilis a las heces. Su semivida es de 6 a 8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Del 55 % al 60 % de la dosis aparece en la orina como conjugados o sin cambios en las primeras 24 horas; el resto sale por la bilis a las heces. Su semivida es de 6 a 8 horas.',
          ref: {
            f: 'dailymed-labetalol',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 55% to 60% of a dose appears in the urine as conjugates or unchanged labetalol within the first 24 hours',
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
      valor: '1-2',
      unidad: 'h',
      analito: 'labetalol',
      ref: {
        f: 'dailymed-labetalol',
        sec: '12 · Farmacología clínica',
        cita: 'with peak plasma levels occurring 1 to 2 hours after oral administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '25',
      unidad: '%',
      analito: 'labetalol',
      ref: { f: 'dailymed-labetalol', sec: '12 · Farmacología clínica', cita: 'when compared to an intravenous infusion is 25%', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '6-8',
      unidad: 'h',
      analito: 'labetalol',
      ref: {
        f: 'dailymed-labetalol',
        sec: '12 · Farmacología clínica',
        cita: 'half-life of labetalol following oral administration is about 6 to 8 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'En la orina en 24 h (conjugados o sin cambios)',
      valor: '55-60',
      unidad: '% de la dosis',
      analito: 'labetalol y conjugados',
      ref: { f: 'dailymed-labetalol', sec: '12 · Farmacología clínica', cita: 'Approximately 55% to 60% of a dose appears in the urine', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-labetalol', 'bf84ebae-3c91-4448-b1db-8e5ed3053866', 'LABETALOL HYDROCHLORIDE TABLET', 'Labetalol Hydrochloride', '6', '2026-05-20', '2026-11-12'),
    rengPubchem(3869, 'labetalol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
