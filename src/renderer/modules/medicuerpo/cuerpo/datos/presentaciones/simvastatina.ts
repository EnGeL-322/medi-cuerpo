import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'simvastatina',
  presentaciones: [
    {
  id: 'simvastatina-cima',
  producto: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Organon Salud S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '10 y 20 mg de simvastatina por comprimido, según la ficha técnica',
  excipientes: [
    'Butilhidroxianisol (E-320)',
    'Ácido ascórbico (E-300)',
    'Ácido cítrico monohidrato (E-330)',
    'Celulosa microcristalina (E-460)',
    'Almidón pregelatinizado',
    'Estearato de magnesio (E-572)',
    'Lactosa monohidrato',
    'Hipromelosa (E-464)',
    'Hidroxipropilcelulosa (E-463)',
    'Dióxido de titanio (E-171)',
    'Talco (E-553b)',
    'Óxido de hierro amarillo y rojo (E-172) (comprimidos de 10 y 20 mg)'
  ],
  usos: {
    t: 'Tratamiento de la hipercolesterolemia primaria o de la dislipidemia mixta, como complemento de la dieta.',
    ref: {
      f: 'cima-58845',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Tratamiento de la hipercolesterolemia primaria o dislipidemia mixta, como tratamiento complementario a la dieta',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-58845',
  advertencias: [
    {
      titulo: 'Miopatía y rabdomiólisis',
      texto: 'Como otros inhibidores de la HMG-CoA reductasa, causa ocasionalmente miopatía.',
      organos: [ 'musculos' ],
      ref: {
        f: 'cima-58845',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Simvastatina, como otros inhibidores de la HMG-CoA reductasa, causa ocasionalmente miopatía',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Niveles plasmáticos elevados',
      texto: 'El riesgo de miopatía aumenta con niveles altos en el plasma de actividad inhibidora de la HMG-CoA reductasa.',
      organos: [ 'musculos', 'sangre' ],
      ref: {
        f: 'cima-58845',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'El riesgo de miopatía aumenta con niveles altos en plasma de actividad inhibidora de la HMG-CoA reductasa',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'La ficha clasifica las frecuencias según los índices de incidencia de ensayos a largo plazo controlados con placebo.',
      'FT 4.8',
      'son clasificadas en base a una evaluación de sus índices de incidencia en ensayos clínicos a largo plazo, controlados con placebo'
    ],
    [
      'En el estudio HPS solo se registraron los acontecimientos adversos graves, como mialgia y aumentos de las transaminasas séricas y de la CK.',
      'FT 4.8',
      'sólo se registraron acontecimientos adversos graves, como mialgia, aumentos en las transaminasas séricas y CK'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe bien y sufre una extensa extracción hepática de primer paso. Tras una dosis oral radiactiva, el 13 % de la radiactividad salió por la orina y el 60 % por las heces en 96 horas; en las heces hay fármaco absorbido excretado por la bilis y fármaco no absorbido.',
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
            ref: {
              f: 'cima-58845',
              sec: '3 · Forma farmacéutica',
              cita: 'Comprimido de 10 mg de simvastatina: comprimido recubierto con película de color',
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
        ocurre: 'Se absorbe bien y sufre una extensa extracción hepática de primer paso.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe bien y sufre una extensa extracción hepática de primer paso.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'En el hombre, simvastatina se absorbe bien y sufre una extensa extracción hepática de primer paso',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad del beta-hidroxiácido para la circulación sistémica tras una dosis oral fue inferior al 5 % de la dosis.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'la biodisponibilidad del beta-hidroxiácido para la circulación sistémica después de una dosis oral de simvastatina era inferior al 5 % de la dosis',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La concentración plasmática máxima de los inhibidores activos se alcanzó 1-2 horas después de la administración.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La concentración plasmática máxima de los inhibidores activos se alcanzó 1 - 2 horas después de la administración de simvastatina',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El consumo concomitante de alimentos no afecta a la absorción.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El consumo concomitante de alimentos no afecta a la absorción',
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
        ocurre: 'La unión a proteínas de la simvastatina y de su metabolito activo es superior al 95 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'La unión a proteínas de la simvastatina y de su metabolito activo es superior al 95 %.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión a proteínas de simvastatina y su metabolito activo es >95 %',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'HMG-CoA reductasa',
          efecto: 'Es una lactona inactiva que se hidroliza en el hígado a la forma activa beta-hidroxiácido, un potente inhibidor de la HMG-CoA reductasa.',
          lugar: [ 'higado' ],
          datos: [
            {
              t: 'Es una lactona inactiva que se hidroliza en el hígado a la forma activa beta-hidroxiácido, un potente inhibidor de la HMG-CoA reductasa.',
              ref: {
                f: 'cima-58845',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'una lactona inactiva, se hidroliza en el hígado a la correspondiente forma activa',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Es una lactona inactiva que se hidroliza rápidamente in vivo al beta-hidroxiácido correspondiente, un potente inhibidor de la HMG-CoA reductasa; es sustrato de la CYP3A4.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Es una lactona inactiva que se hidroliza rápidamente in vivo al beta-hidroxiácido correspondiente, un potente inhibidor de la HMG-CoA reductasa; es sustrato de la CYP3A4.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Simvastatina es una lactona inactiva que se hidroliza rápidamente in vivo al beta-hidroxiácido correspondiente, un inhibidor potente de la HMG-CoA reductasa',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Es sustrato de la CYP3A4.',
            ref: { f: 'cima-58845', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Simvastatina es un sustrato de la CYP3A4', codigo: 'FT 5.2' }
          }
        ],
        metabolitos: [
          {
            nombre: 'Beta-hidroxiácido y cuatro metabolitos activos adicionales',
            actividad: 'activo',
            nota: 'Metabolitos principales del plasma, activos.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Los metabolitos principales de simvastatina presentes en el plasma humano son el beta-hidroxiácido y los cuatro metabolitos activos adicionales',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Tras una dosis oral radiactiva, el 13 % de la radiactividad salió por la orina y el 60 % por las heces en 96 horas; en las heces hay fármaco absorbido excretado por la bilis y fármaco no absorbido.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Tras una dosis oral radiactiva, el 13 % de la radiactividad salió por la orina y el 60 % por las heces en 96 horas; en las heces hay fármaco absorbido excretado por la bilis y fármaco no absorbido.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Después de una dosis oral de simvastatina radioactiva en el hombre, el 13 % de la radioactividad se excretó en la orina y el 60 % en las heces a lo largo de 96 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Tras una inyección intravenosa del metabolito beta-hidroxiácido, su semivida es de un promedio de 1,9 horas.',
            ref: {
              f: 'cima-58845',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Después de una inyección intravenosa del metabolito beta-hidroxiácido, su semivida es de un promedio de 1,9 horas',
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
    rengFichaCIMA('cima-58845', '58845', 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Organon Salud S.L.)', '2026-06-29', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad del beta-hidroxiácido',
    valor: '< 5',
    unidad: '% de la dosis',
    analito: 'beta-hidroxiácido',
    ref: { f: 'cima-58845', sec: '5.2 · Propiedades farmacocinéticas', cita: 'era inferior al 5 % de la dosis', codigo: 'FT 5.2' },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico de los inhibidores activos',
    valor: '1-2',
    unidad: 'h',
    analito: 'inhibidores activos',
    ref: {
      f: 'cima-58845',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La concentración plasmática máxima de los inhibidores activos se alcanzó 1 - 2 horas después de la administración de simvastatina',
      codigo: 'FT 5.2'
    },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '> 95',
    unidad: '%',
    analito: 'simvastatina y metabolito activo',
    ref: {
      f: 'cima-58845',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión a proteínas de simvastatina y su metabolito activo es >95 %',
      codigo: 'FT 5.2'
    },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida del beta-hidroxiácido',
    valor: '1,9 (promedio)',
    unidad: 'h',
    analito: 'beta-hidroxiácido',
    condiciones: 'inyección intravenosa del metabolito',
    origen: 'otra-via',
    ref: { f: 'cima-58845', sec: '5.2 · Propiedades farmacocinéticas', cita: 'su semivida es de un promedio de 1,9 horas', codigo: 'FT 5.2' },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'orina',
    nombre: 'Radiactividad excretada por la orina en 96 horas',
    valor: '13',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    condiciones: 'dosis oral de simvastatina radiactiva',
    ref: { f: 'cima-58845', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 13 % de la radioactividad se excretó en la orina', codigo: 'FT 5.2' },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'heces',
    nombre: 'Radiactividad excretada por las heces en 96 horas',
    valor: '60',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    condiciones: 'dosis oral de simvastatina radiactiva',
    ref: { f: 'cima-58845', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 60 % en las heces a lo largo de 96 horas', codigo: 'FT 5.2' },
    presentacion: 'ZOCOR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
