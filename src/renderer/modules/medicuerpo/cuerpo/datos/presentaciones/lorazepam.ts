import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'lorazepam',
  presentaciones: [
    {
  id: 'lorazepam-cima',
  producto: 'ORFIDAL 1 mg COMPRIMIDOS',
  titular: 'Pfizer S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido',
  formaFuente: 'COMPRIMIDO',
  liberacion: 'no declarada',
  concentraciones: '1 mg de lorazepam por comprimido, según la ficha técnica',
  excipientes: [ 'Lactosa', 'Celulosa microcristalina', 'Amberlita', 'Estearato de magnesio' ],
  usos: {
    t: 'Tratamiento a corto plazo de los estados de ansiedad y tensión, entre otras indicaciones.',
    ref: {
      f: 'cima-49796',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Tratamiento a corto plazo de todos los estados de ansiedad y tensión',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-49796',
  advertencias: [
    {
      titulo: 'Uso con opioides',
      texto: 'El uso concomitante con opioides puede producir sedación profunda, depresión respiratoria, coma y muerte.',
      organos: [ 'encefalo', 'pulmones' ],
      ref: {
        f: 'cima-49796',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'El uso concomitante de Orfidal 1 mg comprimidos y opioides puede producir sedación profunda, depresión respiratoria, coma y muerte',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [ 'Entre los trastornos del sistema nervioso figuran la sedación y la somnolencia.', 'FT 4.8', 'Sedación, somnolencia' ],
    [ 'También se describen ataxia y mareos.', 'FT 4.8', 'Ataxia, mareos' ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Administrado por vía oral, se absorbe con facilidad y casi por completo. El 77 % de la dosis se excreta como glucurónido por la orina.',
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
            ref: { f: 'cima-49796', sec: '3 · Forma farmacéutica', cita: 'Cada comprimido está ranurado en una de sus caras', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Administrado por vía oral, se absorbe con facilidad y casi por completo.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Administrado por vía oral, se absorbe con facilidad y casi por completo.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Cuando ORFIDAL se administra oralmente se absorbe con facilidad y casi completamente',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Las concentraciones plasmáticas máximas se alcanzan a las dos horas de la administración.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Las concentraciones máximas en plasma se alcanzan a las dos horas de su administración',
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
        ocurre: 'A concentraciones clínicamente relevantes, el lorazepam se une en un 90 % a las proteínas del plasma.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'A concentraciones clínicamente relevantes, el lorazepam se une en un 90 % a las proteínas del plasma.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'A concentraciones clínicamente relevantes, el lorazepam se une en un 90% a las proteínas plasmáticas',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptores específicos de las benzodiazepinas del sistema nervioso central',
          efecto: 'Es una benzodiazepina con propiedades ansiolíticas, sedantes e hipnóticas; el mecanismo exacto no está dilucidado, pero se supone que actúa por su unión a receptores específicos del sistema nervioso central.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es una benzodiazepina con propiedades ansiolíticas, sedantes e hipnóticas; el mecanismo exacto no está dilucidado, pero se supone que actúa por su unión a receptores específicos del sistema nervioso central.',
              ref: {
                f: 'cima-49796',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'ORFIDAL (lorazepam) es una benzodiazepina con propiedades ansiolíticas, sedantes e hipnóticas',
                codigo: 'FT 5.1'
              }
            },
            {
              t: 'Presumiblemente las benzodiazepinas ejercen sus efectos por su unión a receptores específicos en varios lugares del sistema nervioso central.',
              ref: {
                f: 'cima-49796',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Presumiblemente las benzodiazepinas ejercen sus efectos mediante su unión a receptores específicos en varios lugares',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La principal ruta metabólica es la conjugación con ácido glucurónico, que forma el glucurónido inactivo; no se hidroxila de forma significativa ni es sustrato de las enzimas N-dealquilantes del citocromo P450.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'La principal ruta metabólica es la conjugación con ácido glucurónico, que forma el glucurónido inactivo; no se hidroxila de forma significativa ni es sustrato de las enzimas N-dealquilantes del citocromo P450.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La conjugación con el ácido glucurónico para formar el glucurónico inactivo es la principal ruta metabólica del lorazepam',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Glucurónido de lorazepam',
            actividad: 'inactivo',
            nota: 'Inactivo; el lorazepam no tiene metabolitos activos.',
            ref: { f: 'cima-49796', sec: '5.2 · Propiedades farmacocinéticas', cita: 'No tiene metabolitos activos', codigo: 'FT 5.2' }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'El 77 % de la dosis se excreta como glucurónido por la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'El 77 % de la dosis se excreta como glucurónido por la orina.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El 77% de la dosis se excreta como glucurónido en la orina',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de eliminación del lorazepam no conjugado en plasma humano es de aproximadamente 12-16 horas.',
            ref: {
              f: 'cima-49796',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida de eliminación del lorazepam no conjugado en plasma humano es de aproximadamente 12-16 horas',
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
    rengFichaCIMA('cima-49796', '49796', 'ORFIDAL 1 mg COMPRIMIDOS (Pfizer S.L.)', '2023-05-04', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones máximas',
    valor: '2',
    unidad: 'h',
    analito: 'lorazepam',
    ref: {
      f: 'cima-49796',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Las concentraciones máximas en plasma se alcanzan a las dos horas de su administración',
      codigo: 'FT 5.2'
    },
    presentacion: 'ORFIDAL 1 mg COMPRIMIDOS'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '90',
    unidad: '%',
    analito: 'lorazepam',
    ref: { f: 'cima-49796', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el lorazepam se une en un 90% a las proteínas plasmáticas', codigo: 'FT 5.2' },
    presentacion: 'ORFIDAL 1 mg COMPRIMIDOS'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación del lorazepam no conjugado',
    valor: '12-16 (aprox.)',
    unidad: 'h',
    analito: 'lorazepam',
    ref: {
      f: 'cima-49796',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La semivida de eliminación del lorazepam no conjugado en plasma humano es de aproximadamente 12-16 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'ORFIDAL 1 mg COMPRIMIDOS'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada como glucurónido por la orina',
    valor: '77',
    unidad: '% de la dosis',
    analito: 'lorazepam',
    ref: {
      f: 'cima-49796',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El 77% de la dosis se excreta como glucurónido en la orina',
      codigo: 'FT 5.2'
    },
    presentacion: 'ORFIDAL 1 mg COMPRIMIDOS'
  }
]
} satisfies RengExtensionFicha
