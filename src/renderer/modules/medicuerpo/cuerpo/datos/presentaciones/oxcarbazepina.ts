import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'oxcarbazepina',
  presentaciones: [
    {
  id: 'oxcarbazepina-suspension',
  producto: 'Trileptal · suspensión oral',
  titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
  mercado: 'EE. UU.',
  forma: 'Suspensión oral',
  formaFuente: 'SUSPENSION',
  liberacion: 'no declarada',
  concentraciones: '300 mg/5 mL (60 mg/mL) de oxcarbazepina, según la etiqueta',
  excipientes: [
    'polyethylene glycol 400',
    'saccharin sodium',
    'ascorbic acid',
    'cellulose, microcrystalline',
    'carboxymethylcellulose',
    'sorbitol',
    'propylene glycol',
    'methylparaben',
    'propylparaben',
    'sorbic acid',
    'plum',
    'lemon',
    'water',
    'nitrogen'
  ],
  usos: {
    t: 'Crisis epilépticas de inicio parcial en adultos (sola o con otros antiepilépticos) y en niños, según la edad.',
    ref: {
      f: 'dailymed-oxcarbazepina-suspension',
      sec: '1 · Indicaciones',
      cita: 'TRILEPTAL is indicated for use as monotherapy or adjunctive therapy in the treatment of partial-onset seizures in adults',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-oxcarbazepina-suspension',
  advertencias: [
    {
      titulo: 'Hiponatremia',
      texto: 'Puede aparecer hiponatremia clínicamente significativa (sodio por debajo de 125 mmol/L).',
      organos: [ 'sangre' ],
      ref: {
        f: 'dailymed-oxcarbazepina-suspension',
        sec: '5 · Advertencias y precauciones',
        cita: 'Clinically significant hyponatremia (sodium < 125 mmol/L) can develop during TRILEPTAL use',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes en adultos y niños: mareo, somnolencia, visión doble, fatiga, náuseas, vómitos, ataxia, visión anormal, dolor de cabeza, nistagmo, temblor y marcha anormal.',
      '34084-4',
      'adverse reactions in adults and pediatrics were: dizziness, somnolence, diplopia, fatigue, nausea, vomiting, ataxia, abnormal vision, headache, nystagmus, tremor, and abnormal gait'
    ],
    [
      'Las que más a menudo llevaron a suspender el tratamiento: mareo, visión doble, ataxia, vómitos y náuseas.',
      '34084-4',
      'The adverse reactions most commonly associated with discontinuation were: dizziness (6.4%), diplopia (5.9%), ataxia (5.2%), vomiting (5.1%), nausea (4.9%)'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'suspension-oral',
  recorridoPropio: {
    resumen: 'Con las suspensiones de oxcarbazepina, la biodisponibilidad del MHD es similar a la de los comprimidos; la mediana del tiempo hasta el pico fue de 6 horas en voluntarios varones sanos en ayunas. Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Suspensión oral: el principio activo ya está en suspensión líquida; se traga y no necesita disgregarse.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Suspensión oral: el principio activo ya está en suspensión líquida; se traga y no necesita disgregarse.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '3 · Formas y concentraciones',
              cita: 'Oral Suspension: 300 mg/5 mL (60 mg/mL): off-white to slightly brown or slightly red suspension',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Con las suspensiones de oxcarbazepina, la biodisponibilidad del MHD es similar a la de los comprimidos; la mediana del tiempo hasta el pico fue de 6 horas en voluntarios varones sanos en ayunas.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Con las suspensiones de oxcarbazepina, la biodisponibilidad del MHD es similar a la de los comprimidos; la mediana del tiempo hasta el pico fue de 6 horas en voluntarios varones sanos en ayunas.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Based on MHD concentrations, TRILEPTAL tablets and suspension were shown to have similar bioavailability',
              codigo: '43682-4'
            }
          },
          {
            t: 'En voluntarios varones sanos en ayunas, la mediana del tiempo hasta el pico con la suspensión oral fue de 6 horas.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'After single-dose administration of TRILEPTAL oral suspension to healthy male volunteers under fasted conditions, the median t max was 6 hours',
              codigo: '43682-4'
            },
            poblacion: 'varones sanos',
            condiciones: 'en ayunas'
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'encefalo' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'El volumen de distribución aparente del MHD es de 49 L y alrededor del 40 % del MHD circula unido a proteínas del suero, sobre todo a la albúmina.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen de distribución aparente del MHD es de 49 L y alrededor del 40 % del MHD circula unido a proteínas del suero, sobre todo a la albúmina.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'The apparent volume of distribution of MHD is 49 L. Approximately 40% of MHD is bound to serum proteins, predominantly to albumin',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Canales de sodio dependientes del voltaje (mecanismo no establecido del todo)',
          efecto: 'Su actividad se debe sobre todo al metabolito 10-monohidroxi (MHD); los estudios in vitro indican que bloquean los canales de sodio dependientes del voltaje.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Su actividad se debe sobre todo al metabolito 10-monohidroxi (MHD); los estudios in vitro indican que bloquean los canales de sodio dependientes del voltaje.',
              ref: {
                f: 'dailymed-oxcarbazepina-suspension',
                sec: '12.1 · Mecanismo de acción',
                cita: 'The pharmacological activity of TRILEPTAL is primarily exerted through the 10-monohydroxy metabolite (MHD) of oxcarbazepine',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Las enzimas del citosol del hígado la reducen con rapidez al metabolito MHD, que explica casi todo el efecto; el MHD se conjuga después con ácido glucurónico.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Las enzimas del citosol del hígado la reducen con rapidez al metabolito MHD, que explica casi todo el efecto; el MHD se conjuga después con ácido glucurónico.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Oxcarbazepine is rapidly reduced by cytosolic enzymes in the liver to its 10-monohydroxy metabolite, MHD',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: '10-monohidroxi (MHD)',
            actividad: 'activo',
            nota: 'Responsable de la mayor parte de la actividad antiepiléptica.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'extensively metabolized to its pharmacologically active 10-monohydroxy metabolite (MHD)',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.',
            ref: {
              f: 'dailymed-oxcarbazepina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'More than 95% of the dose appears in the urine, with less than 1% as unchanged oxcarbazepine',
              codigo: '43682-4'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oxcarbazepina-suspension', '4c5c86c8-ab7f-4fcf-bc1b-5a0b1fd0691b', 'TRILEPTAL (OXCARBAZEPINE) TABLET, FILM COATED TRILEPTAL (OXCARBAZEPINE) SUSPENSION', 'Trileptal', '40', '2026-10-30', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico (MHD) con la suspensión oral',
    valor: '6 (mediana)',
    unidad: 'h',
    analito: 'MHD',
    poblacion: 'varones sanos',
    condiciones: 'dosis única en ayunas',
    ref: {
      f: 'dailymed-oxcarbazepina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'After single-dose administration of TRILEPTAL oral suspension to healthy male volunteers under fasted conditions, the median t max was 6 hours',
      codigo: '43682-4'
    },
    presentacion: 'Trileptal · suspensión oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis que aparece en la orina',
    valor: '> 95',
    unidad: '% de la dosis',
    analito: 'todas las formas',
    ref: {
      f: 'dailymed-oxcarbazepina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'More than 95% of the dose appears in the urine, with less than 1% as unchanged oxcarbazepine',
      codigo: '43682-4'
    },
    presentacion: 'Trileptal · suspensión oral'
  }
]
} satisfies RengExtensionFicha
