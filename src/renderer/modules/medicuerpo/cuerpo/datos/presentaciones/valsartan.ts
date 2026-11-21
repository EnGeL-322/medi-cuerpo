import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'valsartan',
  presentaciones: [
    {
  id: 'valsartan-cima',
  producto: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Esteve Pharmaceuticals S.A.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '80, 160 y 320 mg de valsartán por comprimido, según la ficha técnica',
  excipientes: [
    'Celulosa microcristalina',
    'Crospovidona tipo A',
    'Sílice coloidal anhidra',
    'Estearato de magnesio',
    'Hipromelosa',
    'Dióxido de titanio (E171)',
    'Macrogol 8000',
    'Óxidos de hierro rojo, amarillo y negro (E172), según la concentración'
  ],
  usos: {
    t: 'Tratamiento de la hipertensión arterial esencial en adultos.',
    ref: { f: 'cima-64495', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión arterial esencial en adultos', codigo: 'FT 4.1' }
  },
  fuente: 'cima-64495',
  advertencias: [
    {
      titulo: 'Hiperpotasemia',
      texto: 'No se recomienda el uso concomitante de suplementos de potasio, diuréticos ahorradores de potasio ni sustitutos de la sal con potasio.',
      organos: [ 'rinones', 'sangre' ],
      ref: {
        f: 'cima-64495',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'No se recomienda el uso concomitante de suplementos de potasio, diuréticos ahorradores de potasio, sustitutos de la sal que contengan potasio',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'En pacientes adultos con hipertensión, la incidencia total de reacciones adversas fue comparable a la del placebo y acorde con la farmacología del valsartán.',
      'FT 4.8',
      'la incidencia total de reacciones adversas al medicamento (RAMs) fue comparable a la del placebo y acorde con la farmacología de valsartán'
    ],
    [
      'La incidencia no pareció relacionada con la dosis ni con la duración del tratamiento.',
      'FT 4.8',
      'La incidencia de RAs no pareció estar relacionada con la dosis ni con la duración del tratamiento'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Tras la administración oral se alcanzan concentraciones plasmáticas máximas en 2–4 horas con los comprimidos. Se elimina sobre todo por excreción biliar en las heces (alrededor del 83 % de la dosis) y por vía renal (alrededor del 13 %), en su mayor parte como compuesto inalterado.',
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
            ref: { f: 'cima-64495', sec: '3 · Forma farmacéutica', cita: '80 mg: Comprimido recubierto con película de color rojo', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Tras la administración oral se alcanzan concentraciones plasmáticas máximas en 2–4 horas con los comprimidos.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Tras la administración oral se alcanzan concentraciones plasmáticas máximas en 2–4 horas con los comprimidos.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'se alcanzan concentraciones plasmáticas máximas de valsartán en 2–4 horas con los comprimidos',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad absoluta media es del 23 %.',
            ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta media es del 23%', codigo: 'FT 5.2' }
          },
          {
            t: 'La comida reduce el AUC un 40 % y la Cmax un 50 % aproximadamente, sin un descenso clínicamente significativo del efecto terapéutico.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La comida reduce la exposición (medida por el AUC) de valsartán en un 40% aproximadamente y la concentración plasmática máxima (C máx ) en un 50% aproximadamente',
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
        ocurre: 'Presenta una elevada fijación a las proteínas séricas (94-97 %), sobre todo a la albúmina; el volumen de distribución en estado estacionario tras la vía intravenosa es de unos 17 litros, por lo que no se distribuye mucho a los tejidos.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Presenta una elevada fijación a las proteínas séricas (94-97 %), sobre todo a la albúmina; el volumen de distribución en estado estacionario tras la vía intravenosa es de unos 17 litros, por lo que no se distribuye mucho a los tejidos.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Valsartán presenta una elevada fijación a las proteínas séricas (94–97%), principalmente a la albúmina sérica',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen de distribución en estado estacionario tras la administración intravenosa es de unos 17 litros.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución de valsartán en estado estacionario tras su administración intravenosa es de unos 17 litros',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptor AT1 de la angiotensina II',
          efecto: 'Es un antagonista potente y específico de los receptores de la angiotensina II con actividad por vía oral; actúa de forma selectiva sobre el receptor subtipo AT1.',
          lugar: [ 'vasos', 'corazon', 'rinones' ],
          datos: [
            {
              t: 'Es un antagonista potente y específico de los receptores de la angiotensina II con actividad por vía oral; actúa de forma selectiva sobre el receptor subtipo AT1.',
              ref: {
                f: 'cima-64495',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Valsartán es un antagonista de los receptores de la angiotensina II (Ang II) potente y específico con actividad por vía oral. Actúa selectivamente sobre el receptor subtipo AT 1',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'No se biotransforma mucho: solo se recupera alrededor del 20 % de la dosis en forma de metabolitos.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'No se biotransforma mucho: solo se recupera alrededor del 20 % de la dosis en forma de metabolitos.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Valsartán no se biotransforma mucho, puesto que sólo se recupera aproximadamente el 20% de la dosis en forma de metabolitos',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolito hidroxi',
            actividad: 'inactivo',
            nota: 'Farmacológicamente inactivo; en plasma está por debajo del 10 % del AUC de valsartán.',
            ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Este metabolito es farmacológicamente inactivo', codigo: 'FT 5.2' }
          }
        ]
      },
      excrecion: {
        organos: [ 'bilis', 'heces', 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Se elimina sobre todo por excreción biliar en las heces (alrededor del 83 % de la dosis) y por vía renal (alrededor del 13 %), en su mayor parte como compuesto inalterado.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Se elimina sobre todo por excreción biliar en las heces (alrededor del 83 % de la dosis) y por vía renal (alrededor del 13 %), en su mayor parte como compuesto inalterado.',
            ref: {
              f: 'cima-64495',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Valsartán se elimina principalmente por excreción biliar en las heces (aproximadamente el 83% de la dosis) y por vía renal en la orina (aproximadamente el 13 % de la dosis), en su mayor parte como compuesto inalterado',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de valsartán es de 6 horas.',
            ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de valsartán es de 6 horas', codigo: 'FT 5.2' }
          }
        ],
        formas: [ 'disuelto' ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-64495', '64495', 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Esteve Pharmaceuticals S.A.)', '2024-12-20', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones máximas',
    valor: '2-4',
    unidad: 'h',
    analito: 'valsartán',
    ref: {
      f: 'cima-64495',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'se alcanzan concentraciones plasmáticas máximas de valsartán en 2–4 horas con los comprimidos',
      codigo: 'FT 5.2'
    },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta media',
    valor: '23',
    unidad: '%',
    analito: 'valsartán',
    ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta media es del 23%', codigo: 'FT 5.2' },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas séricas',
    valor: '94-97',
    unidad: '%',
    analito: 'valsartán',
    ref: {
      f: 'cima-64495',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Valsartán presenta una elevada fijación a las proteínas séricas (94–97%)',
      codigo: 'FT 5.2'
    },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución en estado estacionario',
    valor: '17 (aprox.)',
    unidad: 'L',
    analito: 'valsartán',
    condiciones: 'dosis intravenosa',
    origen: 'otra-via',
    ref: {
      f: 'cima-64495',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El volumen de distribución de valsartán en estado estacionario tras su administración intravenosa es de unos 17 litros',
      codigo: 'FT 5.2'
    },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de valsartán',
    valor: '6',
    unidad: 'h',
    analito: 'valsartán',
    ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de valsartán es de 6 horas', codigo: 'FT 5.2' },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'heces',
    nombre: 'Dosis excretada por las heces',
    valor: '83 (aprox.)',
    unidad: '% de la dosis',
    analito: 'valsartán',
    ref: { f: 'cima-64495', sec: '5.2 · Propiedades farmacocinéticas', cita: 'aproximadamente el 83% de la dosis', codigo: 'FT 5.2' },
    presentacion: 'VALS 80 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
