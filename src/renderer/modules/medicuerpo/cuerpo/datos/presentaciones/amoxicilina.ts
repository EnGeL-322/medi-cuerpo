import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'amoxicilina',
  presentaciones: [
    {
  id: 'amoxicilina-suspension',
  producto: 'Amoxicillin · polvo para suspensión oral',
  titular: 'TEVA PHARMACEUTICALS USA, INC.',
  mercado: 'EE. UU.',
  forma: 'Polvo para suspensión oral',
  formaFuente: 'POWDER, FOR SUSPENSION',
  liberacion: 'no declarada',
  concentraciones: '200 mg/5 mL o 250 mg/5 mL de amoxicilina, según la etiqueta',
  excipientes: [ 'silicon dioxide', 'fd&c red no. 40', 'sodium benzoate', 'sodium citrate', 'sucrose', 'xanthan gum' ],
  usos: {
    t: 'Infecciones de vías respiratorias altas, de oído, nariz y garganta, y otras que enumera la etiqueta, causadas por cepas sensibles.',
    ref: {
      f: 'dailymed-amoxicilina-suspension',
      sec: '1 · Indicaciones',
      cita: 'indicated in the treatment of infections due to susceptible (ONLY β-lactamase-negative) isolates',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-amoxicilina-suspension',
  advertencias: [
    {
      titulo: 'Reacciones anafilácticas',
      texto: 'Se han descrito reacciones de hipersensibilidad graves y a veces mortales con las penicilinas, incluida la amoxicilina.',
      organos: [ 'piel' ],
      ref: {
        f: 'dailymed-amoxicilina-suspension',
        sec: '5 · Advertencias y precauciones',
        cita: 'Serious and occasionally fatal hypersensitivity (anaphylactic) reactions have been reported in patients on penicillin therapy including amoxicillin',
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Diarrea por Clostridioides difficile',
      texto: 'Se ha descrito con casi todos los antibacterianos, también con la amoxicilina, y su gravedad va de diarrea leve a colitis mortal.',
      organos: [ 'intestino-grueso' ],
      ref: {
        f: 'dailymed-amoxicilina-suspension',
        sec: '5 · Advertencias y precauciones',
        cita: 'Clostridioides difficile -associated diarrhea (CDAD) has been reported with use of nearly all antibacterial agents, including amoxicillin',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (más del 1 %): diarrea, erupción, vómitos y náuseas.',
      '34084-4',
      'The most common adverse reactions (greater than 1%) observed in clinical trials of amoxicillin capsules, amoxicillin tablets or for oral suspension were diarrhea, rash, vomiting, and nausea'
    ],
    [
      'La etiqueta describe además reacciones anafilácticas, reacciones cutáneas graves y diarrea por Clostridioides difficile.',
      '34084-4',
      'The following are discussed in more detail in other sections of the labeling'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'suspension-oral',
  recorridoPropio: {
    resumen: 'Es estable en presencia del ácido gástrico y se absorbe con rapidez tras la administración oral. Alrededor del 60 % de una dosis oral se excreta por la orina en 6 a 8 horas; la semivida de la amoxicilina es de 61,3 minutos.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Polvo para suspensión oral: se toma ya en forma de suspensión líquida; la etiqueta ha estudiado de forma parcial el efecto de la comida en los comprimidos y la suspensión.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Polvo para suspensión oral: se toma ya en forma de suspensión líquida; la etiqueta ha estudiado de forma parcial el efecto de la comida en los comprimidos y la suspensión.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'The effect of food on the absorption of amoxicillin from the tablets and suspension of amoxicillin has been partially investigated',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Es estable en presencia del ácido gástrico y se absorbe con rapidez tras la administración oral.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Es estable en presencia del ácido gástrico y se absorbe con rapidez tras la administración oral.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Amoxicillin is stable in the presence of gastric acid and is rapidly absorbed after oral administration',
              codigo: '43682-4'
            }
          },
          {
            t: 'Con la suspensión de 125 mg/5 mL y de 250 mg/5 mL, los niveles sanguíneos máximos medios llegan a la 1-2 horas y están entre 1,5 y 3,0 mcg/mL y entre 3,5 y 5,0 mcg/mL, respectivamente.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Orally administered doses of amoxicillin suspension, 125 mg/5 mL and 250 mg/5 mL, result in average peak blood levels 1 to 2 hours after administration in the range of 1.5 mcg/mL to 3.0 mcg/mL and 3.5 mcg/mL to 5.0 mcg/mL, respectively',
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
        ocurre: 'Difunde con facilidad a la mayoría de los tejidos y líquidos corporales, salvo al cerebro y al líquido cefalorraquídeo si las meninges no están inflamadas; en el suero está unida a proteínas en alrededor del 20 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Difunde con facilidad a la mayoría de los tejidos y líquidos corporales, salvo al cerebro y al líquido cefalorraquídeo si las meninges no están inflamadas; en el suero está unida a proteínas en alrededor del 20 %.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Amoxicillin diffuses readily into most body tissues and fluids, with the exception of brain and spinal fluid, except when meninges are inflamed',
              codigo: '43682-4'
            }
          },
          {
            t: 'En el suero, la amoxicilina está unida a proteínas en alrededor del 20 %.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'In blood serum, amoxicillin is approximately 20% protein-bound',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: null,
          efecto: 'Es un antibacteriano de la familia de las penicilinas; la etiqueta remite a su sección de microbiología para el detalle del mecanismo.',
          lugar: [ 'sitio-infeccion' ],
          datos: [
            {
              t: 'Es un antibacteriano de la familia de las penicilinas; la etiqueta remite a su sección de microbiología para el detalle del mecanismo.',
              ref: {
                f: 'dailymed-amoxicilina-suspension',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Amoxicillin is an antibacterial drug',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La etiqueta indica que la mayor parte de la amoxicilina se excreta sin cambios por la orina.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'La etiqueta indica que la mayor parte de la amoxicilina se excreta sin cambios por la orina.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Since most of the amoxicillin is excreted unchanged in the urine',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: []
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 60 % de una dosis oral se excreta por la orina en 6 a 8 horas; la semivida de la amoxicilina es de 61,3 minutos.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 60 % de una dosis oral se excreta por la orina en 6 a 8 horas; la semivida de la amoxicilina es de 61,3 minutos.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'Approximately 60% of an orally administered dose of amoxicillin is excreted in the urine within 6 to 8 hours',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida de la amoxicilina es de 61,3 minutos.',
            ref: {
              f: 'dailymed-amoxicilina-suspension',
              sec: '12.3 · Farmacocinética',
              cita: 'The half-life of amoxicillin is 61.3 minutes',
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
    rengEtiquetaFDA('dailymed-amoxicilina-suspension', '4c0f348a-a65d-409c-8668-207c82a5e3cb', 'AMOXICILLIN TABLET, FILM COATED AMOXICILLIN POWDER, FOR SUSPENSION AMOXICILLIN TABLET, CHEWABLE AMOXICILLIN CAPSULE', 'Amoxicillin', '37', '2025-11-17', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta los niveles sanguíneos máximos con la suspensión',
    valor: '1 a 2',
    unidad: 'h',
    analito: 'amoxicilina',
    ref: {
      f: 'dailymed-amoxicilina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'result in average peak blood levels 1 to 2 hours after administration',
      codigo: '43682-4'
    },
    presentacion: 'Amoxicillin · polvo para suspensión oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del suero',
    valor: '20 (aprox.)',
    unidad: '%',
    analito: 'amoxicilina',
    ref: {
      f: 'dailymed-amoxicilina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'In blood serum, amoxicillin is approximately 20% protein-bound',
      codigo: '43682-4'
    },
    presentacion: 'Amoxicillin · polvo para suspensión oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de la amoxicilina',
    valor: '61,3',
    unidad: 'min',
    analito: 'amoxicilina',
    ref: { f: 'dailymed-amoxicilina-suspension', sec: '12.3 · Farmacocinética', cita: 'The half-life of amoxicillin is 61.3 minutes', codigo: '43682-4' },
    presentacion: 'Amoxicillin · polvo para suspensión oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada por la orina en 6 a 8 horas',
    valor: '60 (aprox.)',
    unidad: '% de la dosis',
    analito: 'amoxicilina',
    ref: {
      f: 'dailymed-amoxicilina-suspension',
      sec: '12.3 · Farmacocinética',
      cita: 'Approximately 60% of an orally administered dose of amoxicillin is excreted in the urine within 6 to 8 hours',
      codigo: '43682-4'
    },
    presentacion: 'Amoxicillin · polvo para suspensión oral'
  }
]
} satisfies RengExtensionFicha
