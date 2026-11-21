import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vareniclina',
    nombre: 'Vareniclina',
    clase: 'Agonista parcial del receptor nicotínico α4β2 (para dejar de fumar)',
    sinonimos: [ 'varenicline', 'Byteqi' ],
    formula: 'C13H13N3',
    masaMolar: 211.26,
    smiles: 'C1[C@@H]2CNC[C@H]1C3=CC4=NC=CN=C4C=C23',
    inchikey: 'JQSHBVHOMNKWFT-DTORHVGOSA-N',
    cid: 5310966,
    iupac: '(1S,12R)-5,8,14-triazatetracyclo[10.3.1.02,11.04,9]hexadeca-2,4,6,8,10-pentaene',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'vareniclina-oral',
      producto: 'BYTEQI 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Neuraxpharm Spain S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '1 mg de vareniclina (como citrato) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Citrato de vareniclina',
        ref: {
          f: 'cima-89535',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'vareniclina citrato equivalente a 1 mg de vareniclina',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Celulosa microcristalina',
        'Almidón de maíz pregelatinizado',
        'Estearato de magnesio (E470b)',
        'Galato de propilo (E310)',
        'Ácido cítrico',
        'Hipromelosa (E464)',
        'Dióxido de titanio (E171)',
        'Laca de aluminio índigo carmín (E132)'
      ],
      usos: {
        t: 'Ayudar a dejar de fumar en adultos.',
        ref: { f: 'cima-89535', sec: '4.1 · Indicaciones terapéuticas', cita: 'Vareniclina está indicado en adultos para dejar de fumar', codigo: 'FT 4.1' }
      },
      fuente: 'cima-89535',
      advertencias: [
        {
          titulo: 'Síntomas neuropsiquiátricos',
          texto: 'Tras la comercialización se han notificado alteraciones del comportamiento, ansiedad, psicosis, cambios de humor, agresividad, depresión, ideación y comportamiento suicida.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-89535',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se han notificado casos de alteraciones del comportamiento o de la forma de pensar, ansiedad, psicosis, cambios de humor, comportamiento agresivo, depresión, ideación y comportamiento suicida',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Efecto de dejar de fumar sobre otros medicamentos',
          texto: 'Dejar de fumar, con o sin vareniclina, puede alterar la farmacocinética o la farmacodinamia de algunos medicamentos.',
          organos: [ 'higado', 'sangre' ],
          ref: {
            f: 'cima-89535',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'pueden alterar la farmacocinética o la farmacodinamia de algunos medicamentos',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En los estudios no se distinguió entre las reacciones asociadas al fármaco y las posiblemente asociadas a la retirada de la nicotina.',
          'FT 4.8',
          'diferenciar entre las reacciones adversas asociadas al tratamiento con el fármaco en estudio y las que están posiblemente asociadas a la retirada de nicotina'
        ],
        [
          'Dejar de fumar, con o sin tratamiento, se asocia con disforia o depresión, insomnio, irritabilidad, frustración o ira y ansiedad.',
          'FT 4.8',
          'se han descrito disforia o depresión; insomnio, irritabilidad, frustración o ira; ansiedad'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 1 mg de vareniclina (como citrato) por comprimido, según la ficha técnica; el activo va como citrato de vareniclina. Los excipientes no son el principio activo.',
    usos: 'Ayudar a dejar de fumar en adultos.',
    actua: 'Se une con alta afinidad y selectividad a los receptores neuronales de acetilcolina de tipo nicotínico α4β2.',
    recorrido: 'La absorción es prácticamente completa tras la administración oral y la disponibilidad sistémica es alta; las concentraciones máximas ocurren generalmente a las 3-4 horas. La eliminación renal se produce principalmente por filtración glomerular junto con secreción tubular activa a través del transportador catiónico orgánico OCT2.'
  },
  recorrido: {
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
            f: 'cima-89535',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimido recubierto con película (10 mm x 5 mm), de forma capsular',
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
      ocurre: 'La absorción es prácticamente completa tras la administración oral y la disponibilidad sistémica es alta; las concentraciones máximas ocurren generalmente a las 3-4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es prácticamente completa tras la administración oral y la disponibilidad sistémica es alta; las concentraciones máximas ocurren generalmente a las 3-4 horas.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción es prácticamente completa después de la administración oral y la disponibilidad sistémica es alta',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad oral no se ve afectada por los alimentos ni por la hora de administración.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad oral de vareniclina no se ve afectada por los alimentos ni por la hora de administración de la dosis',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye en los tejidos, incluido el cerebro; la unión a proteínas del plasma es baja (menos del 20 %) e independiente de la edad y de la función renal.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye en los tejidos, incluido el cerebro; la unión a proteínas del plasma es baja (menos del 20 %) e independiente de la edad y de la función renal.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión de vareniclina a proteína plasmática es baja ( < 20%) e independiente tanto de la edad como de la función renal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución llega a 415 litros en estado estacionario.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución llega a los 415 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor nicotínico α4β2',
        efecto: 'Se une con alta afinidad y selectividad a los receptores neuronales de acetilcolina de tipo nicotínico α4β2.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se une con alta afinidad y selectividad a los receptores neuronales de acetilcolina de tipo nicotínico α4β2.',
            ref: {
              f: 'cima-89535',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Vareniclina, se une con una afinidad y selectividad alta a los receptores neuronales para acetilcolina de tipo nicotínico α4β2',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Experimenta un metabolismo mínimo: el 92 % se excreta sin alteraciones en la orina y menos del 10 % como metabolitos.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Experimenta un metabolismo mínimo: el 92 % se excreta sin alteraciones en la orina y menos del 10 % como metabolitos.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Vareniclina experimenta un metabolismo mínimo, el 92% es excretado sin alteraciones en la orina y menos del 10% se excreta como metabolitos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-carbamoilglucurónido de vareniclina e hidroxivareniclina',
          actividad: 'desconocida',
          nota: 'Metabolitos menores de la orina.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos menores en orina incluyen N-carbamoilglucuronido de vareniclina e hidroxivareniclina',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación renal se produce principalmente por filtración glomerular junto con secreción tubular activa a través del transportador catiónico orgánico OCT2.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación renal se produce principalmente por filtración glomerular junto con secreción tubular activa a través del transportador catiónico orgánico OCT2.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación renal de vareniclina se produce principalmente por la filtración glomerular junto con secreción tubular activa',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación es de aproximadamente 24 horas.',
          ref: {
            f: 'cima-89535',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación de vareniclina es de aproximadamente 24 horas',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3-4',
      unidad: 'h',
      analito: 'vareniclina',
      ref: {
        f: 'cima-89535',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Las concentraciones máximas de vareniclina ocurren generalmente a las 3-4 horas después de la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 20',
      unidad: '%',
      analito: 'vareniclina',
      ref: {
        f: 'cima-89535',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión de vareniclina a proteína plasmática es baja ( < 20%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '415',
      unidad: 'L',
      analito: 'vareniclina',
      condiciones: 'estado estacionario',
      ref: {
        f: 'cima-89535',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución llega a los 415 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '24 (aprox.)',
      unidad: 'h',
      analito: 'vareniclina',
      ref: {
        f: 'cima-89535',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación de vareniclina es de aproximadamente 24 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin alteraciones por la orina',
      valor: '92',
      unidad: '% de la dosis',
      analito: 'vareniclina',
      ref: { f: 'cima-89535', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 92% es excretado sin alteraciones en la orina', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-89535', '89535', 'BYTEQI 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Neuraxpharm Spain S.L.)', '2026-05-27', '2026-11-15'),
    rengPubchem(5310966, 'varenicline', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
