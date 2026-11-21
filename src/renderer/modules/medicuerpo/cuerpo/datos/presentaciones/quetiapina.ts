import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'quetiapina',
  presentaciones: [
    {
  id: 'quetiapina-cima',
  producto: 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Adamed Laboratorios S.L.U.',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '50 mg de quetiapina (como fumarato de quetiapina) por comprimido (y otras concentraciones), según la ficha técnica',
  sal: {
    nombre: 'Fumarato de quetiapina',
    ref: { f: 'cima-88405', sec: '2 · Composición cualitativa y cuantitativa', cita: '50 mg de quetiapina (como fumarato de quetiapina)', codigo: 'FT 2' }
  },
  excipientes: [
    'Hipromelosa',
    'Hidrógeno fosfato cálcico dihidrato',
    'Lactosa monohidrato',
    'Almidón de maíz',
    'Carboximetilalmidón sódico tipo A de patata',
    'Estearato de magnesio',
    'Celulosa microcristalina',
    'Talco',
    'Sílice coloidal anhidra',
    'Hidroxipropilcelulosa',
    'Dióxido de titanio (E171)'
  ],
  usos: {
    t: 'Tratamiento de la esquizofrenia y del trastorno bipolar.',
    ref: { f: 'cima-88405', sec: '4.1 · Indicaciones terapéuticas', cita: 'el tratamiento de la esquizofrenia', codigo: 'FT 4.1' }
  },
  fuente: 'cima-88405',
  advertencias: [
    {
      titulo: 'Población pediátrica',
      texto: 'No está recomendada en niños y adolescentes menores de 18 años por falta de datos que avalen su uso en ese grupo de edad.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'cima-88405',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Quetiapina no está recomendada para el uso en niños y adolescentes menores de 18 años de edad, debido a la falta de datos para avalar su uso en este grupo de edad',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (10 % o más): somnolencia, mareo, sequedad de boca, dolor de cabeza y síntomas de retirada.',
      'FT 4.8',
      'son somnolencia, mareo, sequedad de boca, dolor de cabeza, síntomas de retirada (interrupción)'
    ],
    [
      'También son muy frecuentes la elevación de triglicéridos y de colesterol total, la disminución del colesterol HDL y el aumento de peso.',
      'FT 4.8',
      'elevación de los niveles de triglicéridos séricos, elevación del colesterol total (predominantemente de colesterol LDL), disminución del colesterol HDL, aumento de peso'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Administrada por vía oral, se absorbe adecuadamente y se metaboliza extensamente. Alrededor del 73 % de la radiactividad se excreta por la orina y el 21 % por las heces.',
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
            ref: { f: 'cima-88405', sec: '3 · Forma farmacéutica', cita: 'Los comprimidos de Qudix 50 mg son de color blanco, redondos', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Administrada por vía oral, se absorbe adecuadamente y se metaboliza extensamente.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Administrada por vía oral, se absorbe adecuadamente y se metaboliza extensamente.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Quetiapina, administrada oralmente, es adecuadamente absorbida y se metaboliza extensamente',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad no está afectada de forma significativa por la administración con alimentos.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad de quetiapina no está significativamente afectada por la administración con alimentos',
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
        ocurre: 'Se une en un 83 % aproximadamente a las proteínas del plasma.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Se une en un 83 % aproximadamente a las proteínas del plasma.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Quetiapina se une en un 83% aproximadamente a las proteínas plasmáticas',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Receptores de neurotransmisión (rango amplio)',
          efecto: 'Es un antipsicótico atípico: la quetiapina y su metabolito activo, la norquetiapina, interaccionan con un amplio rango de receptores de neurotransmisión.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es un antipsicótico atípico: la quetiapina y su metabolito activo, la norquetiapina, interaccionan con un amplio rango de receptores de neurotransmisión.',
              ref: {
                f: 'cima-88405',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Quetiapina es un agente antipsicótico atípico. Quetiapina y el metabolito plasmático humano activo, norquetiapina, interaccionan con un amplio rango de receptores de neurotransmisión',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza extensamente en el hígado: el compuesto original supone menos del 5 % del material relacionado con el fármaco sin alterar en orina o heces; la enzima principal es la CYP3A4.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza extensamente en el hígado: el compuesto original supone menos del 5 % del material relacionado con el fármaco sin alterar en orina o heces; la enzima principal es la CYP3A4.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Quetiapina se metaboliza extensamente en el hígado',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'In vitro, la CYP3A4 es la enzima principal del metabolismo mediado por el citocromo P450; la norquetiapina también se forma y elimina sobre todo por la CYP3A4.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'CYP3A4 es el enzima principal responsable del metabolismo de quetiapina mediado por el citrocromo P450',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Norquetiapina',
            actividad: 'activo',
            nota: 'Metabolito activo; en el equilibrio sus concentraciones molares máximas son el 35 % de las de la quetiapina.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Las concentraciones molares máximas en estado de equilibrio del metabolito activo nor quetiapina son el 35% de las observadas para quetiapina',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 73 % de la radiactividad se excreta por la orina y el 21 % por las heces.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 73 % de la radiactividad se excreta por la orina y el 21 % por las heces.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Aproximadamente el 73% de la radiactividad se excreta en orina y el 21% en heces',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Las vidas medias de eliminación de la quetiapina y de la norquetiapina son de unas 7 y 12 horas.',
            ref: {
              f: 'cima-88405',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Las vidas medias de eliminación de quetiapina y nor quetiapina son de aproximadamente 7 y 12 horas, respectivamente',
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
    rengFichaCIMA('cima-88405', '88405', 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA (Adamed Laboratorios S.L.U.)', '2024-07-19', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '83 (aprox.)',
    unidad: '%',
    analito: 'quetiapina',
    ref: {
      f: 'cima-88405',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Quetiapina se une en un 83% aproximadamente a las proteínas plasmáticas',
      codigo: 'FT 5.2'
    },
    presentacion: 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media de eliminación de la quetiapina',
    valor: '7 (aprox.)',
    unidad: 'h',
    analito: 'quetiapina',
    ref: {
      f: 'cima-88405',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Las vidas medias de eliminación de quetiapina y nor quetiapina son de aproximadamente 7 y 12 horas, respectivamente',
      codigo: 'FT 5.2'
    },
    presentacion: 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'orina',
    nombre: 'Radiactividad excretada por la orina',
    valor: '73 (aprox.)',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    condiciones: 'quetiapina radiomarcada',
    ref: {
      f: 'cima-88405',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Aproximadamente el 73% de la radiactividad se excreta en orina',
      codigo: 'FT 5.2'
    },
    presentacion: 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'heces',
    nombre: 'Radiactividad excretada por las heces',
    valor: '21 (aprox.)',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    condiciones: 'quetiapina radiomarcada',
    ref: { f: 'cima-88405', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 21% en heces', codigo: 'FT 5.2' },
    presentacion: 'QUDIX 50 MG COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
