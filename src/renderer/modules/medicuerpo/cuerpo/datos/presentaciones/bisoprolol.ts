import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'bisoprolol',
  presentaciones: [
    {
  id: 'bisoprolol-cima',
  producto: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Merck S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '5 mg de fumarato de bisoprolol por comprimido (también hay otras concentraciones), según la ficha técnica',
  sal: {
    nombre: 'Fumarato de bisoprolol',
    ref: { f: 'cima-57654', sec: '2 · Composición cualitativa y cuantitativa', cita: '5 mg de fumarato de bisoprolol', codigo: 'FT 2' }
  },
  excipientes: [
    'Sílice coloidal anhidra',
    'Estearato de magnesio',
    'Crospovidona',
    'Celulosa microcristalina',
    'Almidón de maíz',
    'Hidrógeno fosfato de calcio anhidro',
    'Dióxido de titanio (E 171)',
    'Macrogol 400',
    'Dimeticona',
    'Óxido de hierro amarillo (E 172)',
    'Hipromelosa'
  ],
  usos: {
    t: 'Tratamiento de la hipertensión arterial y de la angina de pecho crónica estable.',
    ref: { f: 'cima-57654', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión arterial', codigo: 'FT 4.1' }
  },
  fuente: 'cima-57654',
  advertencias: [
    {
      titulo: 'Interrupción brusca',
      texto: 'El tratamiento no debe interrumpirse bruscamente salvo indicación clara, sobre todo en la cardiopatía isquémica.',
      organos: [ 'corazon' ],
      ref: {
        f: 'cima-57654',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La interrupción del tratamiento con bisoprolol no debe hacerse bruscamente a menos que esté claramente indicado',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Diabetes con fluctuaciones de la glucemia',
      texto: 'Los síntomas de hipoglucemia pueden enmascararse.',
      organos: [ 'sangre' ],
      ref: {
        f: 'cima-57654',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Los síntomas de hipoglucemia (ej. taquicardia, palpitaciones o sudoración) pueden enmascararse',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [ 'Frecuentes: mareo y cefalea.', 'FT 4.8', 'Frecuentes: mareo*, cefalea*' ],
    [
      'Poco frecuentes: alteraciones de la conducción auriculoventricular, empeoramiento de la insuficiencia cardíaca y bradicardia.',
      'FT 4.8',
      'Poco frecuentes: alteraciones de la conducción AV, empeoramiento de la insuficiencia cardiaca, bradicardia'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe en el tubo digestivo casi en su totalidad (más del 90 %). El otro 50 % se elimina por los riñones de forma inalterada.',
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
            ref: { f: 'cima-57654', sec: '3 · Forma farmacéutica', cita: 'Emconcor 5 mg comprimidos recubiertos con película', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe en el tubo digestivo casi en su totalidad (más del 90 %).',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe en el tubo digestivo casi en su totalidad (más del 90 %).',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Bisoprolol se absorbe en el tracto gastrointestinal casi en su totalidad (>90%)',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Por el escaso efecto de primer paso en el hígado (menos del 10 %), la biodisponibilidad tras la administración oral es de casi el 90 %.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Dado el escaso efecto de primer paso en el hígado (<10%) alcanza una biodisponibilidad de casi el 90% tras la administración oral',
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
        ocurre: 'El volumen de distribución es de 3,5 L/kg y la unión a proteínas del plasma es de aproximadamente el 30 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen de distribución es de 3,5 L/kg y la unión a proteínas del plasma es de aproximadamente el 30 %.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución es de 3,5 l/kg. La unión a proteínas plasmáticas es de aproximadamente el 30%',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptor beta-1 adrenérgico',
          efecto: 'Es un bloqueante de los receptores beta-1 adrenérgicos altamente selectivo, sin actividad estimuladora ni efecto estabilizador de membrana relevante.',
          lugar: [ 'corazon', 'vasos' ],
          datos: [
            {
              t: 'Es un bloqueante de los receptores beta-1 adrenérgicos altamente selectivo, sin actividad estimuladora ni efecto estabilizador de membrana relevante.',
              ref: {
                f: 'cima-57654',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Bisoprolol es un bloqueante de los receptores beta 1 adrenérgicos altamente selectivo, desprovisto de actividad estimuladora y de efecto estabilizador de membrana relevante',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'El 50 % se transforma en el hígado en metabolitos inactivos, que se eliminan por los riñones.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'El 50 % se transforma en el hígado en metabolitos inactivos, que se eliminan por los riñones.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El 50% se transforma en el hígado dando lugar a metabolitos inactivos que serán eliminados por los riñones',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos hepáticos',
            actividad: 'inactivo',
            nota: 'Inactivos; se eliminan por los riñones.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'dando lugar a metabolitos inactivos que serán eliminados por los riñones',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'El otro 50 % se elimina por los riñones de forma inalterada.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'El otro 50 % se elimina por los riñones de forma inalterada.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El otro 50% se elimina por los riñones de forma inalterada',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La vida media plasmática es de 10-12 horas, lo que da un efecto de 24 horas tras una dosis diaria.',
            ref: { f: 'cima-57654', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media plasmática es de 10-12 horas', codigo: 'FT 5.2' }
          },
          {
            t: 'El aclaramiento total es de aproximadamente 15 L/h.',
            ref: {
              f: 'cima-57654',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El aclaramiento total es de aproximadamente 15 l/h',
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
    rengFichaCIMA('cima-57654', '57654', 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Merck S.L.)', '2020-11-19', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral',
    valor: '90 (aprox.)',
    unidad: '%',
    analito: 'bisoprolol',
    ref: {
      f: 'cima-57654',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'alcanza una biodisponibilidad de casi el 90% tras la administración oral',
      codigo: 'FT 5.2'
    },
    presentacion: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '30 (aprox.)',
    unidad: '%',
    analito: 'bisoprolol',
    ref: {
      f: 'cima-57654',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La unión a proteínas plasmáticas es de aproximadamente el 30%',
      codigo: 'FT 5.2'
    },
    presentacion: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '3,5',
    unidad: 'L/kg',
    analito: 'bisoprolol',
    ref: { f: 'cima-57654', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de 3,5 l/kg', codigo: 'FT 5.2' },
    presentacion: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media plasmática',
    valor: '10-12',
    unidad: 'h',
    analito: 'bisoprolol',
    ref: { f: 'cima-57654', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media plasmática es de 10-12 horas', codigo: 'FT 5.2' },
    presentacion: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'aclaramiento',
    nombre: 'Aclaramiento total',
    valor: '15 (aprox.)',
    unidad: 'L/h',
    analito: 'bisoprolol',
    ref: { f: 'cima-57654', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El aclaramiento total es de aproximadamente 15 l/h', codigo: 'FT 5.2' },
    presentacion: 'EMCONCOR 5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
