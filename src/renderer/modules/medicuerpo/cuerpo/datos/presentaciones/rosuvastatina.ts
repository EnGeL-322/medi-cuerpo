import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'rosuvastatina',
  presentaciones: [
    {
  id: 'rosuvastatina-cima',
  producto: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Ferrer Internacional S.A.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '15 mg de rosuvastatina (como rosuvastatina cálcica) por comprimido (Alzil 15 mg), según la ficha técnica',
  sal: {
    nombre: 'Rosuvastatina cálcica',
    ref: { f: 'cima-88744', sec: '2 · Composición cualitativa y cuantitativa', cita: '15 mg de rosuvastatina (como rosuvastatina cálcica)', codigo: 'FT 2' }
  },
  excipientes: [
    'Lactosa monohidrato',
    'Celulosa microcristalina',
    'Crospovidona',
    'Hidrogenocarbonato de sodio',
    'Sílice coloidal anhidra',
    'Estearato de magnesio',
    'Hipromelosa',
    'Dióxido de titanio (E171)',
    'Macrogol',
    'Talco'
  ],
  usos: {
    t: 'Tratamiento de la hipercolesterolemia en adultos, adolescentes y niños desde 6 años.',
    ref: { f: 'cima-88744', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipercolesterolemia', codigo: 'FT 4.1' }
  },
  fuente: 'cima-88744',
  advertencias: [
    {
      titulo: 'Reacciones adversas cutáneas graves',
      texto: 'Se han notificado reacciones cutáneas graves, incluidos el síndrome de Stevens-Johnson y la reacción a fármaco con eosinofilia y síntomas sistémicos (DRESS), potencialmente mortales.',
      organos: [ 'piel' ],
      ref: {
        f: 'cima-88744',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se han notificado reacciones adversas cutáneas graves con rosuvastatina, incluido síndrome de Stevens- Johnson (SSJ) y reacción a fármaco con eosinofilia y síntomas sistémicos (DRESS)',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las reacciones adversas son generalmente de carácter leve y transitorio.',
      'FT 4.8',
      'Las reacciones adversas observadas con rosuvastatina son generalmente de carácter leve y transitorio'
    ],
    [
      'En los ensayos controlados, menos del 4 % de los pacientes abandonaron el estudio por reacciones adversas.',
      'FT 4.8',
      'En ensayos clínicos controlados menos del 4% de los pacientes tratados con rosuvastatina abandonaron el estudio debido a las reacciones adversas'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente 5 horas después de la administración oral; la biodisponibilidad absoluta es de aproximadamente el 20 %. Alrededor del 90 % se excreta inalterado en las heces (fármaco absorbido y no absorbido) y el resto, en la orina; aproximadamente el 5 % sale inalterado por la orina.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
        sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
        datos: [
          {
            t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
            ref: { f: 'cima-88744', sec: '3 · Forma farmacéutica', cita: '15 mg: Comprimidos recubiertos con película', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente 5 horas después de la administración oral; la biodisponibilidad absoluta es de aproximadamente el 20 %.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente 5 horas después de la administración oral; la biodisponibilidad absoluta es de aproximadamente el 20 %.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Las concentraciones plasmáticas máximas de rosuvastatina se alcanzan aproximadamente 5 horas después de la administración oral',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad absoluta es de aproximadamente un 20 %.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad absoluta es de aproximadamente un 20%',
              codigo: 'FT 5.2'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'higado' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'Es extensamente captada por el hígado, principal lugar de síntesis del colesterol; el volumen de distribución es de unos 134 litros y la unión a proteínas del plasma, de aproximadamente el 90 %, sobre todo a la albúmina.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Es extensamente captada por el hígado, principal lugar de síntesis del colesterol; el volumen de distribución es de unos 134 litros y la unión a proteínas del plasma, de aproximadamente el 90 %, sobre todo a la albúmina.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La rosuvastatina es extensamente absorbida por el hígado, principal lugar de síntesis del colesterol y de aclaramiento del C-LDL',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen de distribución es de aproximadamente 134 litros.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución de la rosuvastatina es de aproximadamente 134 l',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Se une a proteínas del plasma aproximadamente en un 90 %, principalmente a la albúmina.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La rosuvastatina se une a proteínas plasmáticas aproximadamente en un 90%, principalmente a la albúmina',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'HMG-CoA reductasa',
          efecto: 'Es un inhibidor competitivo y selectivo de la HMG-CoA reductasa, la enzima limitante que convierte la HMG-CoA en mevalonato, precursor del colesterol.',
          lugar: [ 'higado' ],
          datos: [
            {
              t: 'Es un inhibidor competitivo y selectivo de la HMG-CoA reductasa, la enzima limitante que convierte la HMG-CoA en mevalonato, precursor del colesterol.',
              ref: {
                f: 'cima-88744',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'La rosuvastatina es un inhibidor competitivo y selectivo de la HMG-CoA reductasa, la enzima limitante que convierte la 3-hidroxi-3-metilglutaril coenzima A en mevalonato, un precursor del colesterol',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza de forma limitada (aproximadamente un 10 %); la isoenzima principal es la CYP2C9 y, en menor medida, la 2C19, la 3A4 y la 2D6.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza de forma limitada (aproximadamente un 10 %); la isoenzima principal es la CYP2C9 y, en menor medida, la 2C19, la 3A4 y la 2D6.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La rosuvastatina se metaboliza de forma limitada (aproximadamente un 10%)',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolito N-desmetilado',
            actividad: 'activo',
            nota: 'Aproximadamente un 50 % menos activo que la rosuvastatina.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El metabolito N-desmetilado es aproximadamente un 50% menos activo que la rosuvastatina',
              codigo: 'FT 5.2'
            }
          },
          {
            nombre: 'Metabolito lactónico',
            actividad: 'inactivo',
            nota: 'Clínicamente inactivo.',
            ref: { f: 'cima-88744', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el lactónico se considera clínicamente inactivo', codigo: 'FT 5.2' }
          }
        ]
      },
      excrecion: {
        organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 90 % se excreta inalterado en las heces (fármaco absorbido y no absorbido) y el resto, en la orina; aproximadamente el 5 % sale inalterado por la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 90 % se excreta inalterado en las heces (fármaco absorbido y no absorbido) y el resto, en la orina; aproximadamente el 5 % sale inalterado por la orina.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Aproximadamente un 90% de la rosuvastatina se excreta inalterada en las heces (incluyendo el principio activo absorbido y no absorbido) y el resto se excreta en orina',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de eliminación plasmática es de aproximadamente 19 horas.',
            ref: {
              f: 'cima-88744',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida de eliminación plasmática es de aproximadamente 19 horas',
              codigo: 'FT 5.2'
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
    rengFichaCIMA('cima-88744', '88744', 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA (Ferrer Internacional S.A.)', '2023-11-17', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones máximas',
    valor: '5 (aprox.)',
    unidad: 'h',
    analito: 'rosuvastatina',
    ref: {
      f: 'cima-88744',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'se alcanzan aproximadamente 5 horas después de la administración oral',
      codigo: 'FT 5.2'
    },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta',
    valor: '20 (aprox.)',
    unidad: '%',
    analito: 'rosuvastatina',
    ref: {
      f: 'cima-88744',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad absoluta es de aproximadamente un 20%',
      codigo: 'FT 5.2'
    },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '134 (aprox.)',
    unidad: 'L',
    analito: 'rosuvastatina',
    ref: {
      f: 'cima-88744',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El volumen de distribución de la rosuvastatina es de aproximadamente 134 l',
      codigo: 'FT 5.2'
    },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '90 (aprox.)',
    unidad: '%',
    analito: 'rosuvastatina',
    ref: { f: 'cima-88744', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se une a proteínas plasmáticas aproximadamente en un 90%', codigo: 'FT 5.2' },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación plasmática',
    valor: '19 (aprox.)',
    unidad: 'h',
    analito: 'rosuvastatina',
    ref: {
      f: 'cima-88744',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La semivida de eliminación plasmática es de aproximadamente 19 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'heces',
    nombre: 'Dosis excretada inalterada por las heces',
    valor: '90 (aprox.)',
    unidad: '% de la dosis',
    analito: 'rosuvastatina',
    ref: {
      f: 'cima-88744',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Aproximadamente un 90% de la rosuvastatina se excreta inalterada en las heces',
      codigo: 'FT 5.2'
    },
    presentacion: 'ALZIL 15 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
