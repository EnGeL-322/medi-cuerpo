import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cetirizina',
    nombre: 'Cetirizina',
    clase: 'Antihistamínico H1',
    sinonimos: [ 'cetirizine' ],
    formula: 'C21H25ClN2O3',
    masaMolar: 388.9,
    smiles: 'C1CN(CCN1CCOCC(=O)O)C(C2=CC=CC=C2)C3=CC=C(C=C3)Cl',
    inchikey: 'ZKLPARSLTMPFCP-UHFFFAOYSA-N',
    cid: 2678,
    iupac: '2-[2-[4-[(4-chlorophenyl)-phenylmethyl]piperazin-1-yl]ethoxy]acetic acid',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'cetirizina-oral',
      producto: 'CETIRIZINA NORMON 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Laboratorios Normon S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '10 mg de cetirizina dihidrocloruro por comprimido',
      sal: {
        nombre: 'Cetirizina dihidrocloruro',
        ref: { f: 'cima-67862', sec: '2 · Composición cualitativa y cuantitativa', cita: '10 mg de cetirizina dihidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Celulosa microcristalina',
        'almidón pregelatinizado',
        'estearato de magnesio',
        'hipromelosa',
        'dióxido de titanio (E-171)',
        'talco',
        'macrogol 6000'
      ],
      usos: {
        t: 'Alivio de los síntomas nasales y oculares de la rinitis alérgica estacional y perenne, y de la urticaria crónica idiopática, en adultos y niños desde 6 años.',
        ref: {
          f: 'cima-67862',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'alivio de los síntomas nasales y oculares de la rinitis alérgica estacional y perenne',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-67862',
      advertencias: [
        {
          titulo: 'Retención urinaria',
          texto: 'Precaución si hay factores que predisponen a la retención de orina, como una lesión medular o una hiperplasia de próstata.',
          organos: [ 'vejiga', 'prostata' ],
          ref: {
            f: 'cima-67862',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la cetirizina puede aumentar el riesgo de retención urinaria',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Alcohol',
          texto: 'A dosis terapéuticas no se ha visto una interacción relevante con el alcohol, pero se recomienda precaución si se toman juntos.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-67862',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se recomienda precaución si se toma concomitantemente alcohol',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Somnolencia, cansancio, mareo y dolor de cabeza: efectos menores sobre el sistema nervioso central.',
          'FT 4.8',
          'incluyendo somnolencia, fatiga, mareo y dolor de cabeza'
        ],
        [
          'Casos aislados de dificultad para orinar, alteraciones de la acomodación visual y sequedad de boca.',
          'FT 4.8',
          'casos aislados de dificultad para la micción, trastornos de la acomodación ocular y sequedad de boca'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg de cetirizina dihidrocloruro por comprimido. Los excipientes no son el principio activo.',
    usos: 'Alivio de los síntomas nasales y oculares de la rinitis alérgica estacional y perenne, y de la urticaria crónica idiopática, en adultos y niños desde 6 años.',
    actua: 'Bloquea de forma potente y selectiva los receptores H1 periféricos de la histamina; además frena la llegada de eosinófilos en la fase tardía de la reacción alérgica.',
    recorrido: 'La comida no reduce la cantidad absorbida, aunque la hace más lenta; la biodisponibilidad es parecida en solución, cápsula o comprimido. Dos tercios de la dosis salen sin cambios por la orina; la semivida terminal es de unas 10 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película, ranurado; se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película, ranurado; se disgrega en el tubo digestivo.',
          ref: { f: 'cima-67862', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La comida no reduce la cantidad absorbida, aunque la hace más lenta; la biodisponibilidad es parecida en solución, cápsula o comprimido.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La comida no reduce la cantidad absorbida, aunque la hace más lenta; la biodisponibilidad es parecida en solución, cápsula o comprimido.',
          ref: {
            f: 'cima-67862',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El grado de absorción de la cetirizina no se reduce con la comida, aunque la velocidad de absorción disminuye',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad es similar en solución, cápsula o comprimido.',
          ref: {
            f: 'cima-67862',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El grado de biodisponibilidad es similar cuando la cetirizina se administra como solución, cápsula o comprimido',
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
      ocurre: 'Volumen aparente de distribución de 0,50 L/kg; el 93 % circula unida a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de distribución de 0,50 L/kg; el 93 % circula unida a proteínas del plasma.',
          ref: { f: 'cima-67862', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen aparente de distribución es 0,50 l/kg', codigo: 'FT 5.2' }
        },
        {
          t: 'Unión a proteínas plasmáticas del 93 %.',
          ref: {
            f: 'cima-67862',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas de cetirizina es del 93',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina',
        efecto: 'Bloquea de forma potente y selectiva los receptores H1 periféricos de la histamina; además frena la llegada de eosinófilos en la fase tardía de la reacción alérgica.',
        lugar: [ 'piel', 'vias-respiratorias', 'ojos' ],
        datos: [
          {
            t: 'Bloquea de forma potente y selectiva los receptores H1 periféricos de la histamina; además frena la llegada de eosinófilos en la fase tardía de la reacción alérgica.',
            ref: {
              f: 'cima-67862',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'es un potente y selectivo inhibidor de los receptores periféricos H 1',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En su mayor parte no sufre efecto de primer paso; la ficha técnica no describe metabolitos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En su mayor parte no sufre efecto de primer paso; la ficha técnica no describe metabolitos.',
          ref: {
            f: 'cima-67862',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La cetirizina no sufre mayoritariamente efecto primer paso',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Dos tercios de la dosis salen sin cambios por la orina; la semivida terminal es de unas 10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Dos tercios de la dosis salen sin cambios por la orina; la semivida terminal es de unas 10 horas.',
          ref: {
            f: 'cima-67862',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Dos terceras partes de la dosis se excreta sin modificación por la orina',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática en el estado de equilibrio',
      valor: '300 (aprox.)',
      unidad: 'ng/mL',
      analito: 'cetirizina',
      ref: {
        f: 'cima-67862',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática en el estado de equilibrio es aproximadamente de 300 ng/ml',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'cetirizina',
      ref: { f: 'cima-67862', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida terminal es aproximadamente de 10 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '0,50',
      unidad: 'L/kg',
      analito: 'cetirizina',
      ref: { f: 'cima-67862', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen aparente de distribución es 0,50 l/kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93 (± 0,3)',
      unidad: '%',
      analito: 'cetirizina',
      ref: {
        f: 'cima-67862',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas plasmáticas de cetirizina es del 93',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretada sin cambios en la orina',
      valor: '67 (dos tercios)',
      unidad: '% de la dosis',
      analito: 'cetirizina',
      ref: {
        f: 'cima-67862',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Dos terceras partes de la dosis se excreta sin modificación por la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '6',
      unidad: 'h',
      analito: 'cetirizina',
      poblacion: 'niños de 6 a 12 años',
      ref: {
        f: 'cima-67862',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de la cetirizina fue de 6 horas en niños de 6-12 años',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-67862', '67862', 'CETIRIZINA NORMON 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Laboratorios Normon S.A.)', '2023-01-25', '2026-11-12'),
    rengPubchem(2678, 'cetirizine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
