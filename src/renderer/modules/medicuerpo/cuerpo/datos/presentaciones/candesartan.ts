import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'candesartan',
  presentaciones: [
    {
  id: 'candesartan-cima',
  producto: 'ATACAND 4 mg COMPRIMIDOS',
  titular: 'Cheplapharm Arzneimittel Gmbh',
  mercado: 'España (UE)',
  forma: 'Comprimido',
  formaFuente: 'COMPRIMIDO',
  liberacion: 'no declarada',
  concentraciones: '4, 8, 16 y 32 mg de candesartán cilexetilo por comprimido, según la ficha técnica',
  sal: {
    nombre: 'Candesartán cilexetilo',
    ref: { f: 'cima-61892', sec: '2 · Composición cualitativa y cuantitativa', cita: '4 mg de candesartán cilexetilo', codigo: 'FT 2' }
  },
  excipientes: [
    'Carmelosa de calcio',
    'Hidroxipropilcelulosa',
    'Óxido de hierro CI 77491 (E172) (solo en los comprimidos de 8, 16 y 32 mg)',
    'Lactosa monohidrato',
    'Estearato de magnesio',
    'Almidón de maíz',
    'Macrogol'
  ],
  usos: {
    t: 'Tratamiento de la hipertensión primaria en adultos, y de otras indicaciones como la hipertensión en niños de 6 a 18 años.',
    ref: { f: 'cima-61892', sec: '4.1 · Indicaciones terapéuticas', cita: 'El tratamiento de la hipertensión primaria en adultos', codigo: 'FT 4.1' }
  },
  fuente: 'cima-61892',
  advertencias: [
    {
      titulo: 'Bloqueo dual del sistema renina-angiotensina-aldosterona',
      texto: 'Combinar inhibidores de la ECA, antagonistas de los receptores de la angiotensina II o aliskirén aumenta el riesgo de hipotensión, hiperpotasemia y disminución de la función renal.',
      organos: [ 'vasos', 'rinones' ],
      ref: {
        f: 'cima-61892',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'aumenta el riesgo de hipotensión, hiperpotasemia y disminución de la función renal (incluyendo insuficiencia renal aguda)',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las reacciones adversas de los ensayos controlados fueron leves y transitorias.',
      'FT 4.8',
      'Las reacciones adversas ocurridas durante los ensayos clínicos controlados fueron leves y transitorias'
    ],
    [
      'Los abandonos por acontecimientos adversos fueron similares con candesartán cilexetilo (3,1 %) y con placebo (3,2 %).',
      'FT 4.8',
      'Los abandonos durante el tratamiento debidos a acontecimientos adversos fueron similares con candesartán cilexetilo (3,1%) y placebo (3,2%)'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Tras la administración oral, el candesartán cilexetilo se convierte en el principio activo candesartán; la biodisponibilidad absoluta es de aproximadamente el 40 % con una solución oral. Tras una dosis oral marcada, alrededor del 56 % se recupera en las heces como candesartán y un 10 % como metabolito inactivo; en la orina, el 26 % como candesartán y el 7 % como metabolito inactivo.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
        sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
        datos: [
          {
            t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
            ref: {
              f: 'cima-61892',
              sec: '3 · Forma farmacéutica',
              cita: 'Atacand 4 mg son comprimidos redondos (7 mm de diámetro), de color blanco',
              codigo: 'FT 3'
            }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Tras la administración oral, el candesartán cilexetilo se convierte en el principio activo candesartán; la biodisponibilidad absoluta es de aproximadamente el 40 % con una solución oral.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Tras la administración oral, el candesartán cilexetilo se convierte en el principio activo candesartán; la biodisponibilidad absoluta es de aproximadamente el 40 % con una solución oral.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tras la administración oral, el candesartán cilexetilo se convierte en el principio activo candesartán',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad absoluta estimada del comprimido es del 14 %.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad absoluta estimada del comprimido es, por lo tanto, del 14%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad no se ve afectada por los alimentos.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad del candesartán no se ve afectada por los alimentos',
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
        ocurre: 'Se une en gran proporción a las proteínas del plasma (más del 99 %) y su volumen de distribución aparente es de 0,1 L/kg.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Se une en gran proporción a las proteínas del plasma (más del 99 %) y su volumen de distribución aparente es de 0,1 L/kg.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El candesartán se une en gran proporción a las proteínas plasmáticas (más de un 99%)',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen de distribución aparente es de 0,1 L/kg.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución aparente del candesartán es de 0,1 l/kg',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptores de la angiotensina II',
          efecto: 'Pertenece al grupo de los antagonistas de la angiotensina II; la angiotensina II es la principal hormona vasoactiva del sistema renina-angiotensina-aldosterona.',
          lugar: [ 'vasos', 'corazon', 'rinones' ],
          datos: [
            {
              t: 'Pertenece al grupo de los antagonistas de la angiotensina II; la angiotensina II es la principal hormona vasoactiva del sistema renina-angiotensina-aldosterona.',
              ref: {
                f: 'cima-61892',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Antagonistas de la angiotensina II, código ATC C09C A06',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se elimina inalterado sobre todo por la orina y la bilis; solo una pequeña proporción se metaboliza en el hígado (CYP2C9).',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se elimina inalterado sobre todo por la orina y la bilis; solo una pequeña proporción se metaboliza en el hígado (CYP2C9).',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El candesartán se elimina inalterado principalmente en la orina y bilis y en una pequeña proporción se elimina por metabolismo hepático (CYP2C9)',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolito inactivo del candesartán',
            actividad: 'inactivo',
            nota: 'Metabolito inactivo.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'aproximadamente un 26% de la dosis se excreta en orina como candesartán y un 7% como un metabolito inactivo',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Tras una dosis oral marcada, alrededor del 56 % se recupera en las heces como candesartán y un 10 % como metabolito inactivo; en la orina, el 26 % como candesartán y el 7 % como metabolito inactivo.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Tras una dosis oral marcada, alrededor del 56 % se recupera en las heces como candesartán y un 10 % como metabolito inactivo; en la orina, el 26 % como candesartán y el 7 % como metabolito inactivo.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'aproximadamente el 56% de la dosis se recupera en las heces como candesartán y un 10% como metabolito inactivo',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La vida media terminal es de aproximadamente 9 horas.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La vida media terminal del candesartán es de aproximadamente 9 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La eliminación renal se produce por filtración glomerular y secreción tubular activa.',
            ref: {
              f: 'cima-61892',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La eliminación renal de candesartán se produce por filtración glomerular y por secreción tubular activa',
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
    rengFichaCIMA('cima-61892', '61892', 'ATACAND 4 mg COMPRIMIDOS (Cheplapharm Arzneimittel Gmbh)', '2025-02-26', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta estimada del comprimido',
    valor: '14',
    unidad: '%',
    analito: 'candesartán',
    ref: {
      f: 'cima-61892',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad absoluta estimada del comprimido es, por lo tanto, del 14%',
      codigo: 'FT 5.2'
    },
    presentacion: 'ATACAND 4 mg COMPRIMIDOS'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '> 99',
    unidad: '%',
    analito: 'candesartán',
    ref: {
      f: 'cima-61892',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'se une en gran proporción a las proteínas plasmáticas (más de un 99%)',
      codigo: 'FT 5.2'
    },
    presentacion: 'ATACAND 4 mg COMPRIMIDOS'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución aparente',
    valor: '0,1',
    unidad: 'L/kg',
    analito: 'candesartán',
    ref: {
      f: 'cima-61892',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El volumen de distribución aparente del candesartán es de 0,1 l/kg',
      codigo: 'FT 5.2'
    },
    presentacion: 'ATACAND 4 mg COMPRIMIDOS'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media terminal',
    valor: '9 (aprox.)',
    unidad: 'h',
    analito: 'candesartán',
    ref: {
      f: 'cima-61892',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La vida media terminal del candesartán es de aproximadamente 9 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'ATACAND 4 mg COMPRIMIDOS'
  },
  {
    magnitud: 'heces',
    nombre: 'Dosis recuperada en las heces como candesartán',
    valor: '56 (aprox.)',
    unidad: '% de la dosis',
    analito: 'candesartán',
    condiciones: 'dosis oral marcada',
    ref: {
      f: 'cima-61892',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'aproximadamente el 56% de la dosis se recupera en las heces como candesartán',
      codigo: 'FT 5.2'
    },
    presentacion: 'ATACAND 4 mg COMPRIMIDOS'
  }
]
} satisfies RengExtensionFicha
