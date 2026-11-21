import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'pantoprazol',
  presentaciones: [
    {
  id: 'pantoprazol-cima',
  producto: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES',
  titular: 'Takeda Gmbh',
  mercado: 'España (UE)',
  forma: 'Comprimido gastrorresistente',
  formaFuente: 'COMPRIMIDO GASTRORRESISTENTE',
  liberacion: 'retardada',
  concentraciones: '20 mg de pantoprazol (como sodio sesquihidratado) por comprimido gastrorresistente, según la ficha técnica',
  sal: {
    nombre: 'Pantoprazol sódico sesquihidrato',
    ref: {
      f: 'cima-62580',
      sec: '2 · Composición cualitativa y cuantitativa',
      cita: '20 mg de pantoprazol (en forma de sodio sesquihidratado)',
      codigo: 'FT 2'
    }
  },
  excipientes: [
    'Carbonato de sodio anhidro',
    'Manitol (E421)',
    'Crospovidona',
    'Povidona K90',
    'Estearato de calcio',
    'Hipromelosa',
    'Povidona K25',
    'Dióxido de titanio (E171)',
    'Óxido de hierro amarillo (E172)',
    'Propilenglicol (E1520)',
    'Copolímero etilacrilato-ácido metacrílico (1:1)',
    'Polisorbato 80',
    'Laurilsulfato sódico',
    'Trietilcitrato',
    'Tinta de impresión (goma laca, óxidos de hierro y disolución de amoniaco concentrada)'
  ],
  usos: {
    t: 'Tratamiento de la enfermedad por reflujo gastroesofágico sintomática y de otras indicaciones, en adultos y adolescentes desde 12 años.',
    ref: { f: 'cima-62580', sec: '4.1 · Indicaciones terapéuticas', cita: 'Enfermedad por reflujo gastro-esofágico sintomática', codigo: 'FT 4.1' }
  },
  fuente: 'cima-62580',
  advertencias: [
    {
      titulo: 'Insuficiencia hepática grave',
      texto: 'En pacientes con insuficiencia hepática grave deben monitorizarse regularmente las enzimas hepáticas, sobre todo en el uso a largo plazo.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-62580',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'En pacientes con insuficiencia hepática grave, durante el período de tratamiento con pantoprazol, deberán monitorizarse regularmente las enzimas hepáticas especialmente en el uso a largo plazo',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Puede esperarse que alrededor del 5 % de los pacientes presenten reacciones adversas.',
      'FT 4.8',
      'Puede esperarse que aproximadamente un 5% de los pacientes presenten reacciones adversas a medicamentos (RAMs)'
    ],
    [
      'La ficha agrupa las reacciones adversas notificadas con pantoprazol por categorías de frecuencia.',
      'FT 4.8',
      'las reacciones adversas notificadas con pantoprazol se agrupan según la siguiente clasificación de frecuencias'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe rápidamente, con concentraciones elevadas en plasma incluso tras una dosis oral única de 20 mg. La eliminación renal es la principal vía de excreción (alrededor del 80 %) para los metabolitos; el resto se excreta con las heces.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido gastrorresistente tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido gastrorresistente: la cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
        sigue: 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
        datos: [
          {
            t: 'Comprimido gastrorresistente: la cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
            ref: { f: 'cima-62580', sec: '3 · Forma farmacéutica', cita: 'Comprimido amarillo, oval, biconvexo', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe rápidamente, con concentraciones elevadas en plasma incluso tras una dosis oral única de 20 mg.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe rápidamente, con concentraciones elevadas en plasma incluso tras una dosis oral única de 20 mg.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Pantoprazol se absorbe rápidamente, obteniéndose concentraciones elevadas en plasma incluso después de una única dosis oral de 20 mg',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Las concentraciones séricas máximas se alcanzan en una media de aproximadamente 2,0-2,5 horas después de la administración.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'en una media de aproximadamente 2,0-2,5 h después de la administración',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad absoluta de los comprimidos fue de alrededor del 77 %.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad absoluta de los comprimidos fue de alrededor del 77%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La ingesta concomitante de alimento no influye en el AUC, en la concentración sérica máxima ni en la biodisponibilidad.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La ingesta concomitante de alimento no influye sobre el AUC, la concentración sérica máxima y, por lo tanto, sobre la biodisponibilidad',
              codigo: 'FT 5.2'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'La unión a proteínas séricas es de alrededor del 98 % y el volumen de distribución, de unos 0,15 L/kg.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'La unión a proteínas séricas es de alrededor del 98 % y el volumen de distribución, de unos 0,15 L/kg.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión de pantoprazol a proteínas séricas es de alrededor del 98%. El volumen de distribución es de unos 0,15 l/kg',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Bomba de protones (H+/K+-ATPasa) de la célula parietal',
          efecto: 'Es un benzimidazol sustituido que inhibe la secreción de ácido clorhídrico en el estómago mediante un bloqueo específico de la bomba de protones de las células parietales.',
          lugar: [ 'estomago' ],
          datos: [
            {
              t: 'Es un benzimidazol sustituido que inhibe la secreción de ácido clorhídrico en el estómago mediante un bloqueo específico de la bomba de protones de las células parietales.',
              ref: {
                f: 'cima-62580',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Pantoprazol es un benzimidazol sustituido que inhibe la secreción de ácido clorhídrico en el estómago mediante un bloqueo específico de la bomba de protones de las células parietales',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza casi exclusivamente en el hígado; la ruta principal es la desmetilación por la CYP2C19 con posterior conjugación con sulfato, y otra ruta es la oxidación por la CYP3A4.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza casi exclusivamente en el hígado; la ruta principal es la desmetilación por la CYP2C19 con posterior conjugación con sulfato, y otra ruta es la oxidación por la CYP3A4.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La sustancia se metaboliza casi exclusivamente en el hígado. La principal ruta metabólica es la desmetilación mediante la enzima CYP2C19 con la posterior conjugación de sulfato',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Desmetilpantoprazol conjugado con sulfato',
            actividad: 'desconocida',
            nota: 'Principal metabolito en suero y orina; su semivida (alrededor de 1,5 horas) no es mucho más larga que la del pantoprazol.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El principal metabolito en suero y orina es desmetilpantoprazol que está conjugado con sulfato',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La eliminación renal es la principal vía de excreción (alrededor del 80 %) para los metabolitos; el resto se excreta con las heces.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La eliminación renal es la principal vía de excreción (alrededor del 80 %) para los metabolitos; el resto se excreta con las heces.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La eliminación renal representa la principal vía de excreción (alrededor de un 80%) para los metabolitos de pantoprazol, el resto se excreta con las heces',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida terminal es de aproximadamente 1 hora y el aclaramiento, de unos 0,1 L/h/kg.',
            ref: {
              f: 'cima-62580',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida terminal es de aproximadamente 1 h y el aclaramiento de unos 0,1 l/h/kg',
              codigo: 'FT 5.2'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-62580', '62580', 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES (Takeda Gmbh)', '2023-09-12', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones séricas máximas',
    valor: '2,0-2,5 (aprox.)',
    unidad: 'h',
    analito: 'pantoprazol',
    ref: {
      f: 'cima-62580',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'en una media de aproximadamente 2,0-2,5 h después de la administración',
      codigo: 'FT 5.2'
    },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta',
    valor: '77 (aprox.)',
    unidad: '%',
    analito: 'pantoprazol',
    ref: {
      f: 'cima-62580',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad absoluta de los comprimidos fue de alrededor del 77%',
      codigo: 'FT 5.2'
    },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas séricas',
    valor: '98 (aprox.)',
    unidad: '%',
    analito: 'pantoprazol',
    ref: {
      f: 'cima-62580',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión de pantoprazol a proteínas séricas es de alrededor del 98%',
      codigo: 'FT 5.2'
    },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '0,15 (aprox.)',
    unidad: 'L/kg',
    analito: 'pantoprazol',
    ref: { f: 'cima-62580', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de unos 0,15 l/kg', codigo: 'FT 5.2' },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal',
    valor: '1 (aprox.)',
    unidad: 'h',
    analito: 'pantoprazol',
    ref: { f: 'cima-62580', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida terminal es de aproximadamente 1 h', codigo: 'FT 5.2' },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  },
  {
    magnitud: 'orina',
    nombre: 'Excreción renal de metabolitos',
    valor: '80 (aprox.)',
    unidad: '% de la dosis',
    analito: 'pantoprazol y metabolitos',
    ref: {
      f: 'cima-62580',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La eliminación renal representa la principal vía de excreción (alrededor de un 80%)',
      codigo: 'FT 5.2'
    },
    presentacion: 'PANTECTA 20 mg COMPRIMIDOS GASTRORRESISTENTES'
  }
]
} satisfies RengExtensionFicha
