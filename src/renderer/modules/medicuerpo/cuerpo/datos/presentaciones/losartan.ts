import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'losartan',
  presentaciones: [
    {
  id: 'losartan-cima',
  producto: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Organon Salud S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '12,5, 50 o 100 mg de losartán potásico por comprimido, según la ficha técnica',
  excipientes: [
    'Celulosa microcristalina (E-460)',
    'Lactosa monohidrato',
    'Almidón de maíz pregelatinizado',
    'Estearato de magnesio (E-572)',
    'Hidroxipropilcelulosa (E-463)',
    'Hipromelosa (E-464)',
    'Cera de carnauba (E-903)',
    'Dióxido de titanio (E-171)'
  ],
  usos: {
    t: 'Tratamiento de la hipertensión esencial en adultos y en niños y adolescentes de 6 a 18 años.',
    ref: {
      f: 'cima-60913',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Tratamiento de la hipertensión esencial en adultos y niños y adolescentes de 6 a 18 años',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-60913',
  advertencias: [
    {
      titulo: 'Angioedema intestinal',
      texto: 'Se han notificado casos con los antagonistas de los receptores de la angiotensina II, incluido el losartán.',
      organos: [ 'intestino-delgado' ],
      ref: {
        f: 'cima-60913',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se han notificado casos de angioedema intestinal en pacientes tratados con antagonistas de los receptores de la angiotensina II, incluyendo losartán',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Antecedentes de angioedema',
      texto: 'Se debe vigilar estrechamente a los pacientes con antecedentes de angioedema.',
      organos: [ 'vasos' ],
      ref: {
        f: 'cima-60913',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se deben controlar estrechamente aquellos pacientes con antecedentes de angioedema',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'En los ensayos clínicos, la reacción adversa más frecuente fue el mareo.',
      'FT 4.8',
      'En estos ensayos clínicos, la reacción adversa más frecuente fue mareo'
    ],
    [
      'Se evaluó en un ensayo controlado de más de 3.000 pacientes adultos con hipertensión esencial.',
      'FT 4.8',
      'En un ensayo clínico controlado de > 3.000 pacientes adultos, de 18 años y mayores, con hipertensión esencial'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe bien y sufre un metabolismo de primer paso que forma un metabolito activo, el ácido carboxílico, y otros metabolitos inactivos. Tanto la excreción biliar como la urinaria contribuyen a la eliminación del losartán y de sus metabolitos: tras una dosis oral marcada, alrededor del 35 % de la radiactividad se recupera en la orina y el 58 % en las heces.',
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
            ref: { f: 'cima-60913', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película (comprimidos)', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe bien y sufre un metabolismo de primer paso que forma un metabolito activo, el ácido carboxílico, y otros metabolitos inactivos.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe bien y sufre un metabolismo de primer paso que forma un metabolito activo, el ácido carboxílico, y otros metabolitos inactivos.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tras la administración oral, losartán se absorbe bien y sufre un metabolismo de primer paso, formando un metabolito activo, el ácido carboxílico, y otros metabolitos inactivos',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad sistémica de los comprimidos es de aproximadamente el 33 %.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad sistémica de los comprimidos de losartán es de aproximadamente el 33%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Las concentraciones máximas de losartán y de su metabolito activo se alcanzan al cabo de 1 hora y de 3-4 horas, respectivamente.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Las concentraciones máximas medias de losartán y de su metabolito activo se alcanzan al cabo de 1 hora y de 3-4 horas, respectivamente',
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
        ocurre: 'Tanto el losartán como su metabolito activo se unen a las proteínas del plasma, sobre todo a la albúmina, en un 99 % o más; el volumen de distribución del losartán es de 34 litros.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Tanto el losartán como su metabolito activo se unen a las proteínas del plasma, sobre todo a la albúmina, en un 99 % o más; el volumen de distribución del losartán es de 34 litros.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tanto losartán como su metabolito activo se unen a las proteínas plasmáticas, principalmente a la albúmina, en ≥99%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen de distribución del losartán es de 34 litros.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución de losartán es de 34 litros',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptor AT1 de la angiotensina II',
          efecto: 'Es un antagonista oral sintético del receptor de la angiotensina II (tipo AT1).',
          lugar: [ 'vasos', 'corazon', 'rinones' ],
          datos: [
            {
              t: 'Es un antagonista oral sintético del receptor de la angiotensina II (tipo AT1).',
              ref: {
                f: 'cima-60913',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Losartán es un antagonista oral sintético del receptor de la angiotensina II (tipo AT 1 )',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Alrededor del 14 % de una dosis oral o intravenosa se transforma en su metabolito activo.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Alrededor del 14 % de una dosis oral o intravenosa se transforma en su metabolito activo.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Alrededor del 14% de una dosis de losartán administrada por vía oral o intravenosa se transforma en su metabolito activo',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Ácido carboxílico de losartán',
            actividad: 'activo',
            nota: 'Metabolito activo del losartán.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'formando un metabolito activo, el ácido carboxílico',
              codigo: 'FT 5.2'
            }
          },
          {
            nombre: 'Otros metabolitos',
            actividad: 'inactivo',
            nota: 'Inactivos.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Además del metabolito activo, se forman metabolitos inactivos',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'bilis', 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Tanto la excreción biliar como la urinaria contribuyen a la eliminación del losartán y de sus metabolitos: tras una dosis oral marcada, alrededor del 35 % de la radiactividad se recupera en la orina y el 58 % en las heces.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Tanto la excreción biliar como la urinaria contribuyen a la eliminación del losartán y de sus metabolitos: tras una dosis oral marcada, alrededor del 35 % de la radiactividad se recupera en la orina y el 58 % en las heces.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tanto la excreción biliar como la urinaria contribuyen a la eliminación de losartán y de sus metabolitos',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Tras una dosis oral, el 4 % se elimina inalterado en la orina y el 6 % como metabolito activo.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'alrededor del 4% de la dosis se elimina inalterado en la orina, y aproximadamente el 6% de la dosis se excreta en la orina en forma de metabolito activo',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida terminal es de unas 2 horas para el losartán y de 6-9 horas para su metabolito activo.',
            ref: {
              f: 'cima-60913',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'con una semivida terminal de unas 2 horas y de 6-9 horas, respectivamente',
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
    rengFichaCIMA('cima-60913', '60913', 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Organon Salud S.L.)', '2025-03-13', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad sistémica',
    valor: '33 (aprox.)',
    unidad: '%',
    analito: 'losartán',
    ref: {
      f: 'cima-60913',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad sistémica de los comprimidos de losartán es de aproximadamente el 33%',
      codigo: 'FT 5.2'
    },
    presentacion: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico del losartán',
    valor: '1',
    unidad: 'h',
    analito: 'losartán',
    ref: {
      f: 'cima-60913',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'se alcanzan al cabo de 1 hora y de 3-4 horas, respectivamente',
      codigo: 'FT 5.2'
    },
    presentacion: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '≥ 99',
    unidad: '%',
    analito: 'losartán y metabolito activo',
    ref: {
      f: 'cima-60913',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'se unen a las proteínas plasmáticas, principalmente a la albúmina, en ≥99%',
      codigo: 'FT 5.2'
    },
    presentacion: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '34',
    unidad: 'L',
    analito: 'losartán',
    ref: { f: 'cima-60913', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución de losartán es de 34 litros', codigo: 'FT 5.2' },
    presentacion: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal del losartán',
    valor: '2 (aprox.)',
    unidad: 'h',
    analito: 'losartán',
    ref: {
      f: 'cima-60913',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'con una semivida terminal de unas 2 horas y de 6-9 horas, respectivamente',
      codigo: 'FT 5.2'
    },
    presentacion: 'COZAAR 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
