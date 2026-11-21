import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'levonorgestrel',
    nombre: 'Levonorgestrel',
    clase: 'Progestágeno (anticonceptivo de emergencia)',
    sinonimos: [ 'levonorgestrel', 'Kallya' ],
    formula: 'C21H28O2',
    masaMolar: 312.4,
    smiles: 'CC[C@]12CC[C@H]3[C@H]([C@@H]1CC[C@]2(C#C)O)CCC4=CC(=O)CC[C@H]34',
    inchikey: 'WWYNJERNGUHSAO-XUDSTZEESA-N',
    cid: 13109,
    iupac: '(8R,9S,10R,13S,14S,17R)-13-ethyl-17-ethynyl-17-hydroxy-1,2,6,7,8,9,10,11,12,14,15,16-dodecahydrocyclopenta[a]phenanthren-3-one',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'levonorgestrel-oral',
      producto: 'KALLYA 1,5 MG COMPRIMIDO',
      titular: 'Apotheke Laboratorios S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '1,5 mg de levonorgestrel por comprimido, según la ficha técnica',
      excipientes: [ 'Celulosa microcristalina', 'Lactosa monohidrato', 'Poloxámero 188', 'Croscarmelosa sódica', 'Estearato de magnesio (E470b)' ],
      usos: {
        t: 'Anticoncepción de emergencia dentro de las 72 horas siguientes a relaciones sexuales sin protección o al fallo de otro método anticonceptivo.',
        ref: {
          f: 'cima-89381',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Kallya está indicado como anticonceptivo de emergencia dentro de las 72 horas siguientes a haber mantenido relaciones sexuales sin protección',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-89381',
      advertencias: [
        {
          titulo: 'Uso ocasional',
          texto: 'Es un método de uso ocasional y en ningún caso debe sustituir a un método anticonceptivo convencional.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-89381',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En ningún caso debe sustituir a un método anticonceptivo convencional',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'No evita el embarazo en todos los casos',
          texto: 'No siempre evita el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-89381',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La anticoncepción de emergencia no evita el embarazo en todos los casos',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa notificada con más frecuencia fueron las náuseas.',
          'FT 4.8',
          'La reacción adversa más comúnmente notificada fueron las náuseas'
        ],
        [ 'Entre los trastornos del sistema nervioso figuran la cefalea y el mareo.', 'FT 4.8', 'Trastornos del sistema nervioso Cefalea Mareo' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 1,5 mg de levonorgestrel por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Anticoncepción de emergencia dentro de las 72 horas siguientes a relaciones sexuales sin protección o al fallo de otro método anticonceptivo.',
    actua: 'Se piensa que actúa sobre todo evitando la ovulación y la fecundación si la relación ha tenido lugar en la fase preovulatoria.',
    recorrido: 'Administrado por vía oral se absorbe rápidamente y casi por completo; la biodisponibilidad absoluta es casi del 100 % de la dosis. No se excreta de forma inalterada, sino como metabolitos, que salen en proporciones aproximadamente iguales por la orina y por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-89381', sec: '3 · Forma farmacéutica', cita: 'Comprimido redondo, blanco, plano, con aproximadamente unos 6 mm', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Administrado por vía oral se absorbe rápidamente y casi por completo; la biodisponibilidad absoluta es casi del 100 % de la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Administrado por vía oral se absorbe rápidamente y casi por completo; la biodisponibilidad absoluta es casi del 100 % de la dosis.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El levonorgestrel administrado por vía oral se absorbe rápidamente y casi por completo',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es casi del 100 % de la dosis administrada.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta del levonorgestrel es casi del 100% de la dosis administrada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras un comprimido de 1,5 mg en mujeres sanas, se alcanzaron niveles séricos máximos de 18,5 ng/mL al cabo de 2 horas.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se alcanzaron niveles séricos máximos de levonorgestrel de 18,5 ng/ml al cabo de 2 horas',
            codigo: 'FT 5.2'
          },
          poblacion: 'mujeres sanas',
          condiciones: 'un comprimido de 1,5 mg'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Solo alrededor del 1,5 % de los niveles séricos totales está en forma de esteroide libre; el 65 % se une de forma específica a la globulina fijadora de hormonas sexuales (SHBG) y el resto, a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Solo alrededor del 1,5 % de los niveles séricos totales está en forma de esteroide libre; el 65 % se une de forma específica a la globulina fijadora de hormonas sexuales (SHBG) y el resto, a la albúmina.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sólo alrededor de un 1,5% de los niveles séricos totales está presente en forma de esteroide libre, estando un 65% unido de forma específica a la SHBG',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Alrededor del 0,1 % de la dosis puede pasar al lactante a través de la leche materna.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Alrededor de un 0,1% de la dosis puede pasar al lactante a través de la leche de la madre',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Se piensa que actúa sobre todo evitando la ovulación y la fecundación si la relación ha tenido lugar en la fase preovulatoria.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Se piensa que actúa sobre todo evitando la ovulación y la fecundación si la relación ha tenido lugar en la fase preovulatoria.',
            ref: {
              f: 'cima-89381',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'se piensa que el levonorgestrel actúa principalmente evitando la ovulación y la fecundación si la relación sexual ha tenido lugar en la fase preovulatoria',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sigue las rutas conocidas del metabolismo de los esteroides: se hidroxila por las enzimas hepáticas, sobre todo la CYP3A4, y sus metabolitos se excretan tras glucuronidación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sigue las rutas conocidas del metabolismo de los esteroides: se hidroxila por las enzimas hepáticas, sobre todo la CYP3A4, y sus metabolitos se excretan tras glucuronidación.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'levonorgestrel es hidroxilado por las enzimas hepáticas principalmente CYP3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del levonorgestrel',
          actividad: 'inactivo',
          nota: 'No se conocen metabolitos con actividad farmacológica.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'No se conocen metabolitos con actividad farmacológica',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'No se excreta de forma inalterada, sino como metabolitos, que salen en proporciones aproximadamente iguales por la orina y por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'No se excreta de forma inalterada, sino como metabolitos, que salen en proporciones aproximadamente iguales por la orina y por las heces.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos de levonogestrel se excretan en proporciones aproximadamente iguales en orina y en heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración disminuye con una semivida de eliminación media de aproximadamente 26 horas.',
          ref: {
            f: 'cima-89381',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la concentración de levonorgestrel disminuye con una semivida de eliminación media de aproximadamente 26 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '≈ 100',
      unidad: '%',
      analito: 'levonorgestrel',
      ref: {
        f: 'cima-89381',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta del levonorgestrel es casi del 100% de la dosis administrada',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta los niveles séricos máximos',
      valor: '2',
      unidad: 'h',
      analito: 'levonorgestrel',
      poblacion: 'mujeres sanas',
      condiciones: 'un comprimido de 1,5 mg',
      ref: {
        f: 'cima-89381',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzaron niveles séricos máximos de levonorgestrel de 18,5 ng/ml al cabo de 2 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción unida de forma específica a la SHBG',
      valor: '65',
      unidad: '%',
      analito: 'levonorgestrel',
      ref: { f: 'cima-89381', sec: '5.2 · Propiedades farmacocinéticas', cita: 'estando un 65% unido de forma específica a la SHBG', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '26 (aprox.)',
      unidad: 'h',
      analito: 'levonorgestrel',
      ref: {
        f: 'cima-89381',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con una semivida de eliminación media de aproximadamente 26 horas',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-89381', '89381', 'KALLYA 1,5 MG COMPRIMIDO (Apotheke Laboratorios S.L.)', '2024-02-21', '2026-11-15'),
    rengPubchem(13109, 'levonorgestrel', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
