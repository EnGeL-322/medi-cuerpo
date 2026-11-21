import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'metoclopramida',
  presentaciones: [
    {
  id: 'metoclopramida-solucion',
  producto: 'Metoclopramide · solución oral',
  titular: 'ANI PHARMACEUTICALS, INC.',
  mercado: 'EE. UU.',
  forma: 'Solución oral',
  formaFuente: 'SOLUTION',
  liberacion: 'no declarada',
  concentraciones: '5 mg/5 mL de metoclopramida (como clorhidrato), según la etiqueta',
  excipientes: [ 'anhydrous citric acid', 'fd&c yellow no. 5', 'fd&c red no. 40', 'glycerin', 'methylparaben', 'propylparaben', 'water', 'sorbitol' ],
  usos: {
    t: 'Tratamiento de corta duración (4 a 12 semanas) del reflujo gastroesofágico sintomático documentado en adultos que no responden al tratamiento convencional.',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '1 · Indicaciones',
      cita: 'Metoclopramide Oral Solution is indicated as short-term (4 to 12 weeks) therapy for adults with symptomatic, documented gastroesophageal reflux who fail to respond to conventional therapy',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-metoclopramida-solucion',
  advertencias: [
    {
      titulo: 'Discinesia tardía',
      texto: 'El tratamiento con metoclopramida puede causar discinesia tardía, un trastorno grave del movimiento que a menudo es irreversible.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-metoclopramida-solucion',
        sec: 'Advertencia destacada',
        cita: 'Treatment with metoclopramide can cause tardive dyskinesia, a serious movement disorder that is often irreversible',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'Inquietud, somnolencia, fatiga y laxitud aparecen en alrededor del 10 % de los pacientes.',
      '34084-4',
      'Restlessness, drowsiness, fatigue, and lassitude occur in approximately 10% of patients'
    ],
    [
      'La incidencia de reacciones adversas se correlaciona con la dosis y la duración del tratamiento.',
      '34084-4',
      'In general, the incidence of adverse reactions correlates with the dose and duration of metoclopramide administration'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  recorridoPropio: {
    resumen: 'Se absorbe con rapidez y bien; la biodisponibilidad oral absoluta, frente a una dosis intravenosa, es del 80 % ± 15,5 %. Alrededor del 85 % de la radiactividad de una dosis oral aparece en la orina en 72 horas; la semivida de eliminación media con función renal normal es de 5 a 6 horas.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Solución oral: líquido que ya contiene el principio activo disuelto.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Solución oral: líquido que ya contiene el principio activo disuelto.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Metoclopramide is rapidly and well absorbed',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe con rapidez y bien; la biodisponibilidad oral absoluta, frente a una dosis intravenosa, es del 80 % ± 15,5 %.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe con rapidez y bien; la biodisponibilidad oral absoluta, frente a una dosis intravenosa, es del 80 % ± 15,5 %.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'the absolute oral bioavailability of metoclopramide is 80% ±15.5%',
              codigo: '43682-4'
            }
          },
          {
            t: 'El pico plasmático se produce a la 1-2 horas de una dosis oral única.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Peak plasma concentrations occur at about 1 to 2 hours after a single oral dose',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'No se une de forma extensa a proteínas del plasma (alrededor del 30 %) y su volumen de distribución es alto (unos 3,5 L/kg), lo que indica una amplia distribución a los tejidos.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'No se une de forma extensa a proteínas del plasma (alrededor del 30 %) y su volumen de distribución es alto (unos 3,5 L/kg), lo que indica una amplia distribución a los tejidos.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The drug is not extensively bound to plasma proteins (about 30%)',
              codigo: '43682-4'
            }
          },
          {
            t: 'El volumen de distribución corporal total es alto (unos 3,5 L/kg).',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The whole body volume of distribution is high (about 3.5 L/kg) which suggests extensive distribution of drug to the tissues',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Receptores de dopamina (efecto antiemético)',
          efecto: 'Estimula la motilidad del tubo digestivo superior sin estimular las secreciones gástricas, biliares ni pancreáticas; su modo de acción no está claro.',
          lugar: [ 'estomago', 'duodeno', 'encefalo' ],
          datos: [
            {
              t: 'Estimula la motilidad del tubo digestivo superior sin estimular las secreciones gástricas, biliares ni pancreáticas; su modo de acción no está claro.',
              ref: {
                f: 'dailymed-metoclopramida-solucion',
                sec: '12 · Farmacología clínica',
                cita: 'Metoclopramide stimulates motility of the upper gastrointestinal tract without stimulating gastric, biliary or pancreatic secretions',
                codigo: '34090-1'
              }
            },
            {
              t: 'Sus propiedades antieméticas parecen deberse a su antagonismo de los receptores de dopamina centrales y periféricos.',
              ref: {
                f: 'dailymed-metoclopramida-solucion',
                sec: '12 · Farmacología clínica',
                cita: 'properties of metoclopramide appear to be a result of its antagonism of central and peripheral dopamine receptors',
                codigo: '34090-1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'rinones' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'De la fracción eliminada por la orina, alrededor de la mitad es metoclopramida libre o conjugada.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'De la fracción eliminada por la orina, alrededor de la mitad es metoclopramida libre o conjugada.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Of the 85% eliminated in the urine, about half is present as free or conjugated metoclopramide',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: []
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 85 % de la radiactividad de una dosis oral aparece en la orina en 72 horas; la semivida de eliminación media con función renal normal es de 5 a 6 horas.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 85 % de la radiactividad de una dosis oral aparece en la orina en 72 horas; la semivida de eliminación media con función renal normal es de 5 a 6 horas.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Approximately 85% of the radioactivity of an orally administered dose appears in the urine within 72 hours',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida de eliminación media con función renal normal es de 5 a 6 horas.',
            ref: {
              f: 'dailymed-metoclopramida-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The average elimination half-life in individuals with normal renal function is 5 to 6 hours',
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
    rengEtiquetaFDA('dailymed-metoclopramida-solucion', '4e12e98a-06fe-4b3c-bb64-f2701e195c74', 'METOCLOPRAMIDE SOLUTION', 'Metoclopramide', '5', '2025-06-25', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral absoluta',
    valor: '80 ± 15,5',
    unidad: '%',
    analito: 'metoclopramida',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'the absolute oral bioavailability of metoclopramide is 80% ±15.5%',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico plasmático',
    valor: '1 a 2',
    unidad: 'h',
    analito: 'metoclopramida',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Peak plasma concentrations occur at about 1 to 2 hours after a single oral dose',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma',
    valor: '30 (aprox.)',
    unidad: '%',
    analito: 'metoclopramida',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'The drug is not extensively bound to plasma proteins (about 30%)',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución corporal total',
    valor: '3,5 (aprox.)',
    unidad: 'L/kg',
    analito: 'metoclopramida',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'The whole body volume of distribution is high (about 3.5 L/kg)',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación media',
    valor: '5 a 6',
    unidad: 'h',
    analito: 'metoclopramida',
    poblacion: 'personas con función renal normal',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'The average elimination half-life in individuals with normal renal function is 5 to 6 hours',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Radiactividad de una dosis oral en la orina en 72 h',
    valor: '85 (aprox.)',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    ref: {
      f: 'dailymed-metoclopramida-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Approximately 85% of the radioactivity of an orally administered dose appears in the urine within 72 hours',
      codigo: '43682-4'
    },
    presentacion: 'Metoclopramide · solución oral'
  }
]
} satisfies RengExtensionFicha
