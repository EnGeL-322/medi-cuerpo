import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'escitalopram',
  presentaciones: [
    {
  id: 'escitalopram-cima',
  producto: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Almirall S.A.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '10, 15 o 20 mg de escitalopram (como oxalato) por comprimido, según la ficha técnica',
  excipientes: [
    'Celulosa microcristalina silificada',
    'Talco',
    'Croscarmelosa de sodio',
    'Estearato de magnesio',
    'Hipromelosa',
    'Macrogol 400',
    'Dióxido de titanio (E-171)'
  ],
  usos: {
    t: 'Tratamiento de episodios depresivos mayores y de otros trastornos, como el de angustia y el de ansiedad social.',
    ref: { f: 'cima-65184', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de episodios depresivos mayores', codigo: 'FT 4.1' }
  },
  fuente: 'cima-65184',
  advertencias: [
    {
      titulo: 'Población pediátrica',
      texto: 'No debe utilizarse en el tratamiento de población pediátrica.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'cima-65184',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Esertia no deberá utilizarse en el tratamiento de población pediátrica',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Comportamientos suicidas y hostilidad',
      texto: 'Se constataron con más frecuencia en ensayos con población pediátrica tratada con antidepresivos que con placebo.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'cima-65184',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Los comportamientos suicidas (intentos de suicidio e ideas de suicidio), y la hostilidad',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Son más frecuentes durante la primera o segunda semana y suelen disminuir con el tratamiento continuado.',
      'FT 4.8',
      'Las reacciones adversas son más frecuentes durante la primera o segunda semana del tratamiento y habitualmente disminuyen en intensidad y frecuencia con el tratamiento continuado'
    ],
    [
      'La ficha incluye las reacciones conocidas de los ISRS comunicadas también para escitalopram.',
      'FT 4.8',
      'Las reacciones adversas conocidas de los ISRSs y también comunicadas para escitalopram en estudios clínicos controlados con placebo'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'La absorción es casi completa e independiente de la ingestión de alimentos. La mayor parte de la dosis se excreta como metabolitos por la orina; se supone que escitalopram y sus metabolitos principales se eliminan por vía hepática y renal.',
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
            ref: { f: 'cima-65184', sec: '3 · Forma farmacéutica', cita: 'Esertia 10 mg: comprimido oval, blanco, ranurado', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'La absorción es casi completa e independiente de la ingestión de alimentos.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'La absorción es casi completa e independiente de la ingestión de alimentos.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La absorción es casi completa e independiente de la ingestión de alimentos',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El tiempo medio hasta la concentración máxima es de 4 horas tras dosis múltiples.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El tiempo medio para alcanzar la concentración máxima (T max media) es de 4 horas tras dosis múltiples',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Como con el citalopram racémico, se espera una biodisponibilidad absoluta de aproximadamente el 80 %.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'la biodisponibilidad absoluta de escitalopram se espera que sea del 80% aproximadamente',
              codigo: 'FT 5.2'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'El volumen aparente de distribución tras la administración oral es de unos 12 a 26 L/kg y la unión a proteínas del plasma es inferior al 80 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen aparente de distribución tras la administración oral es de unos 12 a 26 L/kg y la unión a proteínas del plasma es inferior al 80 %.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión del escitalopram y de sus metabolitos principales a las proteínas plasmáticas es inferior al 80%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen aparente de distribución tras la administración oral es de unos 12 a 26 L/kg.',
            ref: { f: 'cima-65184', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de 12 a 26 l/kg aproximadamente', codigo: 'FT 5.2' }
          }
        ],
        accion: {
          diana: 'Transportador de serotonina',
          efecto: 'Es un inhibidor selectivo de la recaptación de serotonina (5-HT), con alta afinidad por el sitio primario de unión del transportador.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es un inhibidor selectivo de la recaptación de serotonina (5-HT), con alta afinidad por el sitio primario de unión del transportador.',
              ref: {
                f: 'cima-65184',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Escitalopram es un inhibidor selectivo de la recaptación de la serotonina (5-HT), con una alta afinidad por el sitio primario de unión',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza en el hígado a los metabolitos desmetilado y didesmetilado; la CYP2C19 media sobre todo la formación del desmetilado, con posible contribución de la CYP3A4 y la CYP2D6.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza en el hígado a los metabolitos desmetilado y didesmetilado; la CYP2C19 media sobre todo la formación del desmetilado, con posible contribución de la CYP3A4 y la CYP2D6.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Escitalopram se metaboliza en el hígado a los metabolitos desmetilado y didesmetilado',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos desmetilado y didesmetilado',
            actividad: 'activo',
            nota: 'Farmacológicamente activos.',
            ref: { f: 'cima-65184', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Ambos metabolitos son farmacológicamente activos', codigo: 'FT 5.2' }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La mayor parte de la dosis se excreta como metabolitos por la orina; se supone que escitalopram y sus metabolitos principales se eliminan por vía hepática y renal.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La mayor parte de la dosis se excreta como metabolitos por la orina; se supone que escitalopram y sus metabolitos principales se eliminan por vía hepática y renal.',
            ref: {
              f: 'cima-65184',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La mayor parte de la dosis se excreta en forma de metabolitos por la orina',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Tras dosis múltiples, la vida media de eliminación es de 30 horas.',
            ref: { f: 'cima-65184', sec: '5.2 · Propiedades farmacocinéticas', cita: 'tras dosis múltiples es de 30 horas', codigo: 'FT 5.2' }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-65184', '65184', 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Almirall S.A.)', '2026-03-20', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo medio hasta la concentración máxima',
    valor: '4',
    unidad: 'h',
    analito: 'escitalopram',
    condiciones: 'dosis múltiples',
    ref: {
      f: 'cima-65184',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El tiempo medio para alcanzar la concentración máxima (T max media) es de 4 horas tras dosis múltiples',
      codigo: 'FT 5.2'
    },
    presentacion: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta esperada',
    valor: '80 (aprox.)',
    unidad: '%',
    analito: 'escitalopram',
    ref: {
      f: 'cima-65184',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'la biodisponibilidad absoluta de escitalopram se espera que sea del 80% aproximadamente',
      codigo: 'FT 5.2'
    },
    presentacion: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '< 80',
    unidad: '%',
    analito: 'escitalopram y metabolitos principales',
    ref: {
      f: 'cima-65184',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión del escitalopram y de sus metabolitos principales a las proteínas plasmáticas es inferior al 80%',
      codigo: 'FT 5.2'
    },
    presentacion: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen aparente de distribución',
    valor: '12-26 (aprox.)',
    unidad: 'L/kg',
    analito: 'escitalopram',
    ref: { f: 'cima-65184', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de 12 a 26 l/kg aproximadamente', codigo: 'FT 5.2' },
    presentacion: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media de eliminación',
    valor: '30',
    unidad: 'h',
    analito: 'escitalopram',
    condiciones: 'dosis múltiples',
    ref: { f: 'cima-65184', sec: '5.2 · Propiedades farmacocinéticas', cita: 'tras dosis múltiples es de 30 horas', codigo: 'FT 5.2' },
    presentacion: 'ESERTIA 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
