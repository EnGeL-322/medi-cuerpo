import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'risperidona',
  presentaciones: [
    {
  id: 'risperidona-cima',
  producto: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Janssen Cilag S.A.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '1 mg, y otras concentraciones, de risperidona por comprimido, según la ficha técnica',
  excipientes: [
    'Lactosa monohidrato',
    'Almidón de maíz',
    'Celulosa microcristalina (E460)',
    'Hipromelosa (E464)',
    'Estearato de magnesio',
    'Sílice coloidal anhidra',
    'Laurilsulfato de sodio',
    'Propilenglicol (E490)'
  ],
  usos: {
    t: 'Tratamiento de la esquizofrenia y de episodios maníacos asociados a trastornos bipolares.',
    ref: {
      f: 'cima-60336',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'RISPERDAL está indicado en el tratamiento de la esquizofrenia',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-60336',
  advertencias: [
    {
      titulo: 'Demencia en personas de edad avanzada',
      texto: 'En un metaanálisis, los pacientes de edad avanzada con demencia tratados con antipsicóticos atípicos tuvieron más mortalidad que los que recibieron placebo.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'cima-60336',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'los pacientes de edad avanzada con demencia tratados con antipsicóticos atípicos, presentaron un aumento de la mortalidad',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (10 % o más): parkinsonismo, sedación o somnolencia, cefalea e insomnio.',
      'FT 4.8',
      'Las reacciones adversas (RAs) notificadas con más frecuencia (incidencia ≥ 10 %) son: Parkinsonismo, sedación/ somnolencia, cefalea e insomnio'
    ],
    [
      'Las potencialmente dependientes de la dosis incluyen parkinsonismo y acatisia.',
      'FT 4.8',
      'Las reacciones adversas (RAs) potencialmente dosis-dependientes incluyen parkinsonismo y acatisia'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe completamente por vía oral y alcanza concentraciones plasmáticas máximas entre 1 y 2 horas. Tras una semana de administración, el 70 % de la dosis se excreta por la orina y el 14 % por las heces.',
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
            ref: { f: 'cima-60336', sec: '3 · Forma farmacéutica', cita: '1 mg de risperidona en comprimidos biconvexos', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe completamente por vía oral y alcanza concentraciones plasmáticas máximas entre 1 y 2 horas.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe completamente por vía oral y alcanza concentraciones plasmáticas máximas entre 1 y 2 horas.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Risperidona se absorbe completamente tras su administración por vía oral, alcanzando concentraciones plasmáticas máximas entre 1 y 2 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad oral absoluta es del 70 %.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad oral absoluta de risperidona es del 70 % (CV=25 %)',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Los alimentos no afectan a su absorción.',
            ref: { f: 'cima-60336', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Los alimentos no afectan a su absorción', codigo: 'FT 5.2' }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'Se distribuye rápidamente: el volumen de distribución es de 1-2 L/kg y la unión a proteínas del plasma es del 90 % para la risperidona y del 77 % para la 9-hidroxi-risperidona.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Se distribuye rápidamente: el volumen de distribución es de 1-2 L/kg y la unión a proteínas del plasma es del 90 % para la risperidona y del 77 % para la 9-hidroxi-risperidona.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Risperidona se distribuye rápidamente. El volumen de distribución es de 1-2 litros/kg',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La unión a proteínas del plasma es del 90 % para la risperidona y del 77 % para la 9-hidroxi-risperidona.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión de risperidona a proteínas plasmáticas es del 90 % y de la 9-hidroxi-risperidona del 77 %',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptores 5-HT2 y D2',
          efecto: 'Es un antagonista monoaminérgico selectivo con alta afinidad por los receptores serotoninérgicos 5-HT2 y dopaminérgicos D2.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es un antagonista monoaminérgico selectivo con alta afinidad por los receptores serotoninérgicos 5-HT2 y dopaminérgicos D2.',
              ref: {
                f: 'cima-60336',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Risperidona es un antagonista monoaminérgico selectivo con propiedades únicas. Posee una alta afinidad por los receptores 5-HT 2 serotoninergicos y D 2 dopaminérgicos',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La CYP2D6 metaboliza la risperidona a 9-hidroxi-risperidona, de actividad farmacológica similar; otra vía es la N-desalquilación.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'La CYP2D6 metaboliza la risperidona a 9-hidroxi-risperidona, de actividad farmacológica similar; otra vía es la N-desalquilación.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La CYP2D6 metaboliza la risperidona a 9-hidroxi-risperidona, que tiene actividad farmacológica similar a la de risperidona',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Otra vía metabólica es la N-desalquilación.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Otra vía metabólica de risperidona es la N-desalquilación',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: '9-hidroxi-risperidona',
            actividad: 'activo',
            nota: 'Actividad farmacológica similar a la de la risperidona; ambas forman la fracción antipsicótica activa.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Risperidona se metaboliza a 9-hidroxi-risperidona; éste tiene una actividad farmacológica similar a la de risperidona',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Tras una semana de administración, el 70 % de la dosis se excreta por la orina y el 14 % por las heces.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Tras una semana de administración, el 70 % de la dosis se excreta por la orina y el 14 % por las heces.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tras una semana de administración el 70 % de la dosis se excreta con la orina y el 14 % con las heces',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'En pacientes psicóticos, la risperidona se elimina con una semivida de unas 3 horas.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'risperidona se elimina con una semivida de 3 horas aproximadamente',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de eliminación de la 9-hidroxi-risperidona y de la fracción antipsicótica activa es de 24 horas.',
            ref: {
              f: 'cima-60336',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida de eliminación de 9-hidroxi-risperidona y de la fracción antipsicótica activa es de 24 horas',
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
    rengFichaCIMA('cima-60336', '60336', 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Janssen Cilag S.A.)', '2025-05-28', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones máximas',
    valor: '1-2',
    unidad: 'h',
    analito: 'risperidona',
    ref: {
      f: 'cima-60336',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'alcanzando concentraciones plasmáticas máximas entre 1 y 2 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral absoluta',
    valor: '70',
    unidad: '%',
    analito: 'risperidona',
    ref: {
      f: 'cima-60336',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad oral absoluta de risperidona es del 70 %',
      codigo: 'FT 5.2'
    },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '1-2',
    unidad: 'L/kg',
    analito: 'risperidona',
    ref: { f: 'cima-60336', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de 1-2 litros/kg', codigo: 'FT 5.2' },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '90',
    unidad: '%',
    analito: 'risperidona',
    ref: {
      f: 'cima-60336',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión de risperidona a proteínas plasmáticas es del 90 %',
      codigo: 'FT 5.2'
    },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación de la risperidona',
    valor: '3 (aprox.)',
    unidad: 'h',
    analito: 'risperidona',
    poblacion: 'pacientes psicóticos',
    ref: {
      f: 'cima-60336',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'risperidona se elimina con una semivida de 3 horas aproximadamente',
      codigo: 'FT 5.2'
    },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada por la orina en una semana',
    valor: '70',
    unidad: '% de la dosis',
    analito: 'risperidona y metabolitos',
    ref: { f: 'cima-60336', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 70 % de la dosis se excreta con la orina', codigo: 'FT 5.2' },
    presentacion: 'RISPERDAL 1 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
