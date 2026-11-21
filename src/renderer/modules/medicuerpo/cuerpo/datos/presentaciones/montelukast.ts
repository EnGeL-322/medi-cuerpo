import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'montelukast',
  presentaciones: [
    {
  id: 'montelukast-cima',
  producto: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Organon Salud S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '10 mg de montelukast (como montelukast sódico) por comprimido, según la ficha técnica',
  sal: {
    nombre: 'Montelukast sódico',
    ref: {
      f: 'cima-61980',
      sec: '2 · Composición cualitativa y cuantitativa',
      cita: 'montelukast sódico, equivalente a 10 mg de montelukast',
      codigo: 'FT 2'
    }
  },
  excipientes: [
    'Celulosa microcristalina',
    'Lactosa monohidrato',
    'Croscarmelosa sódica',
    'Hiprolosa (E-463)',
    'Estearato de magnesio',
    'Hipromelosa',
    'Dióxido de titanio (E-171)',
    'Óxido de hierro rojo y amarillo (E-172)',
    'Cera de carnauba'
  ],
  usos: {
    t: 'Tratamiento del asma como terapia adicional en pacientes con asma persistente de leve a moderado no controlada de forma adecuada con otros fármacos.',
    ref: {
      f: 'cima-61980',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Singulair está indicado en el tratamiento del asma como terapia adicional en los pacientes con asma persistente de leve a moderado',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-61980',
  advertencias: [
    {
      titulo: 'No es para las crisis agudas de asma',
      texto: 'No debe usarse montelukast oral para tratar las crisis agudas de asma; hay que tener a mano la medicación de rescate habitual.',
      organos: [ 'pulmones' ],
      ref: {
        f: 'cima-61980',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Debe indicarse a los pacientes que no utilicen nunca montelukast oral para tratar las crisis agudas de asma',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'La ficha describe los ensayos con comprimidos de 10 mg en aproximadamente 4.000 pacientes adultos y adolescentes asmáticos de 15 años o más.',
      'FT 4.8',
      'Los comprimidos recubiertos con película de 10 mg en aproximadamente 4.000 pacientes adultos y adolescentes asmáticos de 15 años de edad y mayores'
    ],
    [
      'Las reacciones relacionadas con el tratamiento se notifican de forma frecuente (entre 1/100 y 1/10) con una incidencia mayor que con placebo.',
      'FT 4.8',
      'las siguientes reacciones adversas relacionadas con el tratamiento fueron notificadas de forma frecuente'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe de forma rápida tras la administración oral; con el comprimido de 10 mg, la concentración plasmática máxima se obtiene en 3 horas en adultos en ayunas. Montelukast y sus metabolitos se excretan casi exclusivamente por vía biliar: tras una dosis marcada, el 86 % de la radiactividad se recuperó en las heces en 5 días y menos del 0,2 % en la orina.',
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
            ref: { f: 'cima-61980', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe de forma rápida tras la administración oral; con el comprimido de 10 mg, la concentración plasmática máxima se obtiene en 3 horas en adultos en ayunas.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe de forma rápida tras la administración oral; con el comprimido de 10 mg, la concentración plasmática máxima se obtiene en 3 horas en adultos en ayunas.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Montelukast se absorbe de forma rápida tras su administración oral',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad oral media es del 64 %.',
            ref: { f: 'cima-61980', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad oral media es del 64 %', codigo: 'FT 5.2' }
          },
          {
            t: 'La biodisponibilidad oral y la Cmax no se ven afectadas por una comida estándar.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad oral y la C max no se ven afectadas por una comida estándar',
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
        ocurre: 'Se une en más de un 99 % a las proteínas del plasma; en ratas, su distribución a través de la barrera hematoencefálica es mínima.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Se une en más de un 99 % a las proteínas del plasma; en ratas, su distribución a través de la barrera hematoencefálica es mínima.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Montelukast se une en más de un 99 % a las proteínas plasmáticas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'En estudios con ratas, la distribución a través de la barrera hematoencefálica es mínima.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Los estudios en ratas con montelukast radiomarcado indican una distribución mínima a través de la barrera hematoencefálica',
              codigo: 'FT 5.2'
            },
            poblacion: 'ratas'
          }
        ],
        accion: {
          diana: 'Receptores de los leucotrienos cisteinílicos (CysLT)',
          efecto: 'Es un antagonista de los receptores de los leucotrienos cisteinílicos, potentes mediadores proasmáticos liberados por mastocitos y eosinófilos.',
          lugar: [ 'pulmones', 'vias-respiratorias' ],
          datos: [
            {
              t: 'Es un antagonista de los receptores de los leucotrienos cisteinílicos, potentes mediadores proasmáticos liberados por mastocitos y eosinófilos.',
              ref: {
                f: 'cima-61980',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Estos importantes mediadores proasmáticos se unen a los receptores de los leucotrienos cisteinílicos (CysLT)',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza ampliamente; la CYP2C8 es la enzima más importante, con una contribución menor de la CYP3A4 y la CYP2C9.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza ampliamente; la CYP2C8 es la enzima más importante, con una contribución menor de la CYP3A4 y la CYP2C9.',
            ref: { f: 'cima-61980', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Montelukast se metaboliza ampliamente', codigo: 'FT 5.2' }
          },
          {
            t: 'La enzima más importante en su metabolismo es la CYP2C8.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Citocromo P450 2C8 es la enzima más importante en el metabolismo de montelukast',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos de montelukast',
            actividad: 'desconocida',
            nota: 'Aportación mínima al efecto terapéutico; sus concentraciones plasmáticas son indetectables en el equilibrio.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La aportación de los metabolitos al efecto terapéutico de montelukast es mínima',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'bilis', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Montelukast y sus metabolitos se excretan casi exclusivamente por vía biliar: tras una dosis marcada, el 86 % de la radiactividad se recuperó en las heces en 5 días y menos del 0,2 % en la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Montelukast y sus metabolitos se excretan casi exclusivamente por vía biliar: tras una dosis marcada, el 86 % de la radiactividad se recuperó en las heces en 5 días y menos del 0,2 % en la orina.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'montelukast y sus metabolitos se excretan casi exclusivamente por vía biliar',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El aclaramiento plasmático promedio es de 45 mL/min en adultos sanos.',
            ref: {
              f: 'cima-61980',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El aclaramiento plasmático promedio de montelukast es de 45 ml/min en adultos sanos',
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
    rengFichaCIMA('cima-61980', '61980', 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Organon Salud S.L.)', '2025-11-25', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral media',
    valor: '64',
    unidad: '%',
    analito: 'montelukast',
    ref: { f: 'cima-61980', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad oral media es del 64 %', codigo: 'FT 5.2' },
    presentacion: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta la concentración máxima',
    valor: '3',
    unidad: 'h',
    analito: 'montelukast',
    poblacion: 'adultos en ayunas',
    ref: {
      f: 'cima-61980',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'la concentración plasmática máxima media (C max ) se obtiene en 3 horas (T max ) tras la administración a adultos en ayunas',
      codigo: 'FT 5.2'
    },
    presentacion: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '> 99',
    unidad: '%',
    analito: 'montelukast',
    ref: {
      f: 'cima-61980',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Montelukast se une en más de un 99 % a las proteínas plasmáticas',
      codigo: 'FT 5.2'
    },
    presentacion: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'aclaramiento',
    nombre: 'Aclaramiento plasmático promedio',
    valor: '45',
    unidad: 'mL/min',
    analito: 'montelukast',
    poblacion: 'adultos sanos',
    ref: {
      f: 'cima-61980',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El aclaramiento plasmático promedio de montelukast es de 45 ml/min en adultos sanos',
      codigo: 'FT 5.2'
    },
    presentacion: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'heces',
    nombre: 'Radiactividad recuperada en las heces en 5 días',
    valor: '86',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    condiciones: 'dosis oral de montelukast radiomarcado',
    ref: {
      f: 'cima-61980',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'el 86 % de la radiactividad se recuperó en recogidas fecales de 5 días',
      codigo: 'FT 5.2'
    },
    presentacion: 'SINGULAIR 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
