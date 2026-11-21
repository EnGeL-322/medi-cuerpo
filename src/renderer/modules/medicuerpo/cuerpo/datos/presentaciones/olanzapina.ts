import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'olanzapina',
  presentaciones: [
    {
  id: 'olanzapina-cima',
  producto: 'ZOLAFREN 5 mg COMPRIMIDOS EFG',
  titular: 'Adamed Laboratorios S.L.U.',
  mercado: 'España (UE)',
  forma: 'Comprimido',
  formaFuente: 'COMPRIMIDO',
  liberacion: 'no declarada',
  concentraciones: '5 y 10 mg de olanzapina por comprimido, según la ficha técnica',
  excipientes: [ 'Celulosa microcristalina', 'Lactosa monohidrato', 'Carboximetilalmidón sódico de patata sin gluten (tipo A)', 'Estearato de magnesio' ],
  usos: {
    t: 'Tratamiento de la esquizofrenia en adultos.',
    ref: {
      f: 'cima-70350',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'La olanzapina está indicada en el tratamiento de la esquizofrenia',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-70350',
  advertencias: [
    {
      titulo: 'Demencia',
      texto: 'No está recomendada en pacientes con psicosis o trastornos del comportamiento asociados a demencia, por un aumento de la mortalidad y del riesgo de accidente cerebrovascular.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'cima-70350',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La olanzapina no está recomendada para su uso en pacientes con psicosis y/o trastornos del comportamiento',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (1 % o más): somnolencia, aumento de peso, eosinofilia y aumento de prolactina, colesterol, glucosa y triglicéridos, entre otras.',
      'FT 4.8',
      'Las reacciones notificadas más frecuentemente (observadas en ≥ 1% de los pacientes) asociadas al uso de olanzapina en ensayos clínicos fueron somnolencia, aumento de peso, eosinofilia, aumento de los niveles de prolactina'
    ],
    [
      'También figuran discinesia, hipotensión ortostática y efectos anticolinérgicos.',
      'FT 4.8',
      'discinesia, hipotensión ortostática, efectos anticolinérgicos'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe bien tras la administración oral y la concentración plasmática máxima se alcanza en un plazo de 5 a 8 horas. En sujetos sanos de edad avanzada la vida media de eliminación media estaba prolongada (51,8 frente a 33,8 horas) y el aclaramiento reducido (17,5 frente a 18,2 L/h) respecto a sujetos más jóvenes.',
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
              f: 'cima-70350',
              sec: '3 · Forma farmacéutica',
              cita: 'Zolafren 5 mg: c omprimido redondo, biconvexo y de color amarillo',
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
        ocurre: 'Se absorbe bien tras la administración oral y la concentración plasmática máxima se alcanza en un plazo de 5 a 8 horas.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe bien tras la administración oral y la concentración plasmática máxima se alcanza en un plazo de 5 a 8 horas.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La olanzapina se absorbe bien después de su administración oral; la concentración plasmática máxima se alcanza en un plazo de 5 a 8 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Su absorción no se modifica con la ingesta.',
            ref: { f: 'cima-70350', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su absorción no se modifica con la ingesta', codigo: 'FT 5.2' }
          },
          {
            t: 'No se ha determinado la biodisponibilidad oral absoluta respecto a la administración intravenosa.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'No se ha determinado la biodisponibilidad oral absoluta relacionada con la administración intravenosa',
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
        ocurre: 'La unión a proteínas del plasma es de aproximadamente el 93 % entre 7 y 1.000 ng/mL; se une preferentemente a la albúmina y a la glucoproteína ácida alfa-1.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'La unión a proteínas del plasma es de aproximadamente el 93 % entre 7 y 1.000 ng/mL; se une preferentemente a la albúmina y a la glucoproteína ácida alfa-1.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión de la olanzapina a las proteínas plasmáticas representa aproximadamente un 93%, dentro del intervalo de concentración de 7 hasta aproximadamente 1.000 ng/ml',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Se une preferentemente a la albúmina y a la glucoproteína ácida alfa-1.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Olanzapina se une preferentemente a la albúmina y a la α1-glucoproteína ácida',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptores de neurotransmisión (perfil amplio)',
          efecto: 'Es un agente antipsicótico, antimaníaco y estabilizador del ánimo con un amplio perfil farmacológico a través de varios sistemas de receptores.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es un agente antipsicótico, antimaníaco y estabilizador del ánimo con un amplio perfil farmacológico a través de varios sistemas de receptores.',
              ref: {
                f: 'cima-70350',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'La olanzapina es un agente antipsicótico, antimaníaco y estabilizador del ánimo que ha demostrado un amplio perfil farmacológico a través de un número de sistemas receptores',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza en el hígado por reacciones de conjugación y oxidación; el principal metabolito circulante es el 10-N-glucurónido, que no atraviesa la barrera hematoencefálica.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza en el hígado por reacciones de conjugación y oxidación; el principal metabolito circulante es el 10-N-glucurónido, que no atraviesa la barrera hematoencefálica.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La olanzapina se metaboliza en el hígado a través de reacciones de conjugación y oxidación',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: '10-N-glucurónido',
            actividad: 'desconocida',
            nota: 'Principal metabolito circulante; no atraviesa la barrera hematoencefálica.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El principal metabolito circulante es el 10-N-glucurónido',
              codigo: 'FT 5.2'
            }
          },
          {
            nombre: 'Metabolitos N-desmetilo y 2-hidroximetilo',
            actividad: 'activo',
            nota: 'Actividad farmacológica significativamente menor que la olanzapina en animales; la actividad predominante es del fármaco original.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'mostraron una actividad farmacológica in vivo significativamente menor que olanzapina en estudios en animales',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'En sujetos sanos de edad avanzada la vida media de eliminación media estaba prolongada (51,8 frente a 33,8 horas) y el aclaramiento reducido (17,5 frente a 18,2 L/h) respecto a sujetos más jóvenes.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'En sujetos sanos de edad avanzada la vida media de eliminación media estaba prolongada (51,8 frente a 33,8 horas) y el aclaramiento reducido (17,5 frente a 18,2 L/h) respecto a sujetos más jóvenes.',
            ref: {
              f: 'cima-70350',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'En sujetos sanos de edad avanzada (65 o más años) en comparación con sujetos más jóvenes la vida media de eliminación media estaba prolongada (51,8 frente a 33,8 horas)',
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
    rengFichaCIMA('cima-70350', '70350', 'ZOLAFREN 5 mg COMPRIMIDOS EFG (Adamed Laboratorios S.L.U.)', '2024-04-09', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta la concentración plasmática máxima',
    valor: '5-8',
    unidad: 'h',
    analito: 'olanzapina',
    ref: {
      f: 'cima-70350',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'la concentración plasmática máxima se alcanza en un plazo de 5 a 8 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'ZOLAFREN 5 mg COMPRIMIDOS EFG'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '93 (aprox.)',
    unidad: '%',
    analito: 'olanzapina',
    ref: {
      f: 'cima-70350',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión de la olanzapina a las proteínas plasmáticas representa aproximadamente un 93%',
      codigo: 'FT 5.2'
    },
    presentacion: 'ZOLAFREN 5 mg COMPRIMIDOS EFG'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media de eliminación media en sujetos jóvenes',
    valor: '33,8',
    unidad: 'h',
    analito: 'olanzapina',
    poblacion: 'sujetos sanos más jóvenes',
    ref: {
      f: 'cima-70350',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'la vida media de eliminación media estaba prolongada (51,8 frente a 33,8 horas)',
      codigo: 'FT 5.2'
    },
    presentacion: 'ZOLAFREN 5 mg COMPRIMIDOS EFG'
  }
]
} satisfies RengExtensionFicha
