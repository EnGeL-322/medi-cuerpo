import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'metformina',
  presentaciones: [
    {
  id: 'metformina-glumetza',
  producto: 'Glumetza · comprimido recubierto de liberación prolongada',
  titular: 'SANTARUS, INC.',
  mercado: 'EE. UU.',
  forma: 'Comprimido recubierto de liberación prolongada',
  formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
  liberacion: 'prolongada',
  concentraciones: '500 mg o 1000 mg por comprimido, según la etiqueta',
  sal: {
    nombre: 'Clorhidrato de metformina',
    ref: { f: 'dailymed-metformina-glumetza', sec: '11 · Descripción', cita: 'metformin hydrochloride', codigo: '34089-3' }
  },
  excipientes: [ 'hypromellose, unspecified', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol, unspecified' ],
  usos: {
    t: 'Mejorar el control de la glucosa en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
    ref: {
      f: 'dailymed-metformina-glumetza',
      sec: '1 · Indicaciones',
      cita: 'GLUMETZA is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-metformina-glumetza',
  advertencias: [
    {
      titulo: 'Acidosis láctica',
      texto: 'Se han producido casos de acidosis láctica asociada a la metformina con muerte, hipotermia, hipotensión y arritmias resistentes.',
      organos: [ 'sangre', 'rinones' ],
      ref: {
        f: 'dailymed-metformina-glumetza',
        sec: 'Advertencia destacada',
        cita: 'Postmarketing cases of metformin-associated lactic acidosis have resulted in death, hypothermia, hypotension, and resistant bradyarrhythmias',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'Reacciones en más del 5 % de los ensayos: hipoglucemia, diarrea y náuseas.',
      '34084-4',
      'Adverse reactions occurring >5% in GLUMETZA clinical trials: hypoglycemia, diarrhea, and nausea'
    ],
    [
      'La etiqueta describe además la acidosis láctica y el déficit de vitamina B12.',
      '34084-4',
      'The following adverse reactions are discussed in more detail in other sections of the labeling'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Con una dosis oral única de 1.000 mg después de una comida, el pico plasmático de metformina llega a las 7-8 horas aproximadamente. Alrededor del 90 % del fármaco absorbido se elimina por vía renal en las primeras 24 horas, con una semivida de eliminación plasmática de unas 6,2 horas.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido recubierto de liberación prolongada: libera la metformina poco a poco a lo largo del tubo digestivo.',
        sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
        datos: [
          {
            t: 'Comprimido recubierto de liberación prolongada: libera la metformina poco a poco a lo largo del tubo digestivo.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '3 · Formas y concentraciones',
              cita: 'Extended-release tablets: 500 mg white, film-coated, oval-shaped tablets with “M500” on one side',
              codigo: '43678-2'
            }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Con una dosis oral única de 1.000 mg después de una comida, el pico plasmático de metformina llega a las 7-8 horas aproximadamente.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Con una dosis oral única de 1.000 mg después de una comida, el pico plasmático de metformina llega a las 7-8 horas aproximadamente.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'the time to reach maximum plasma metformin concentration (Tmax) is achieved at approximately 7-8 hours',
              codigo: '43682-4'
            }
          },
          {
            t: 'Las comidas pobres y ricas en grasa aumentaron la exposición (AUC) alrededor de un 38 % y un 73 % frente al ayuno.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'Low-fat and high-fat meals increased the systemic exposure (as measured by AUC) from GLUMETZA tablets by about 38% and 73%, respectively, relative to fasting',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'El volumen de distribución aparente de la metformina tras dosis orales únicas fue en promedio de 654 ± 358 L y casi no se une a proteínas del plasma.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen de distribución aparente de la metformina tras dosis orales únicas fue en promedio de 654 ± 358 L y casi no se une a proteínas del plasma.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'Metformin is negligibly bound to plasma proteins',
              codigo: '43682-4'
            }
          },
          {
            t: 'El volumen de distribución aparente (V/F) fue en promedio de 654 ± 358 L.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'The apparent volume of distribution (V/F) of metformin following single oral doses of 850 mg metformin HCl averaged 654±358 L',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: null,
          efecto: 'Reduce la producción hepática de glucosa, disminuye la absorción intestinal de glucosa y mejora la sensibilidad a la insulina al aumentar la captación y el uso periféricos de glucosa.',
          lugar: [ 'higado', 'intestino-delgado', 'musculos' ],
          datos: [
            {
              t: 'Reduce la producción hepática de glucosa, disminuye la absorción intestinal de glucosa y mejora la sensibilidad a la insulina al aumentar la captación y el uso periféricos de glucosa.',
              ref: {
                f: 'dailymed-metformina-glumetza',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Metformin decreases hepatic glucose production, decreases intestinal absorption of glucose, and improves insulin sensitivity by increasing peripheral glucose uptake and utilization',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'No se metaboliza en el hígado: se excreta sin cambios por la orina, no se han identificado metabolitos en humanos y no hay excreción biliar.',
        sigue: 'Sin transformarse, sigue hacia la eliminación.',
        datos: [
          {
            t: 'No se metaboliza en el hígado: se excreta sin cambios por la orina, no se han identificado metabolitos en humanos y no hay excreción biliar.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'metformin is excreted unchanged in the urine and does not undergo hepatic metabolism (no metabolites have been identified in humans), nor biliary excretion',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [],
        formas: [ 'disuelto' ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 90 % del fármaco absorbido se elimina por vía renal en las primeras 24 horas, con una semivida de eliminación plasmática de unas 6,2 horas.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 90 % del fármaco absorbido se elimina por vía renal en las primeras 24 horas, con una semivida de eliminación plasmática de unas 6,2 horas.',
            ref: {
              f: 'dailymed-metformina-glumetza',
              sec: '12.3 · Farmacocinética',
              cita: 'approximately 90% of the absorbed drug is eliminated via the renal route within the first 24 hours, with a plasma elimination half-life of approximately 6.2 hours',
              codigo: '43682-4'
            }
          }
        ],
        formas: [ 'disuelto' ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metformina-glumetza', 'fb832474-88d9-4e29-95cd-fbc446944cc4', 'GLUMETZA (METFORMIN HYDROCHLORIDE) TABLET, FILM COATED, EXTENDED RELEASE', 'Glumetza', '32', '2026-09-21', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico plasmático',
    valor: '7-8 (aprox.)',
    unidad: 'h',
    analito: 'metformina',
    poblacion: 'sujetos sanos',
    condiciones: 'dosis única de 1.000 mg tras una comida',
    ref: {
      f: 'dailymed-metformina-glumetza',
      sec: '12.3 · Farmacocinética',
      cita: 'the time to reach maximum plasma metformin concentration (Tmax) is achieved at approximately 7-8 hours',
      codigo: '43682-4'
    },
    presentacion: 'Glumetza · comprimido recubierto de liberación prolongada'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación plasmática',
    valor: '6,2 (aprox.)',
    unidad: 'h',
    analito: 'metformina',
    ref: {
      f: 'dailymed-metformina-glumetza',
      sec: '12.3 · Farmacocinética',
      cita: 'with a plasma elimination half-life of approximately 6.2 hours',
      codigo: '43682-4'
    },
    presentacion: 'Glumetza · comprimido recubierto de liberación prolongada'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución aparente',
    valor: '654 ± 358',
    unidad: 'L',
    analito: 'metformina',
    condiciones: 'dosis orales únicas de metformina de liberación inmediata',
    ref: {
      f: 'dailymed-metformina-glumetza',
      sec: '12.3 · Farmacocinética',
      cita: 'The apparent volume of distribution (V/F) of metformin following single oral doses of 850 mg metformin HCl averaged 654±358 L',
      codigo: '43682-4'
    },
    presentacion: 'Glumetza · comprimido recubierto de liberación prolongada'
  },
  {
    magnitud: 'orina',
    nombre: 'Fármaco absorbido eliminado por vía renal en 24 h',
    valor: '90 (aprox.)',
    unidad: '%',
    analito: 'metformina',
    ref: {
      f: 'dailymed-metformina-glumetza',
      sec: '12.3 · Farmacocinética',
      cita: 'approximately 90% of the absorbed drug is eliminated via the renal route within the first 24 hours',
      codigo: '43682-4'
    },
    presentacion: 'Glumetza · comprimido recubierto de liberación prolongada'
  }
]
} satisfies RengExtensionFicha
