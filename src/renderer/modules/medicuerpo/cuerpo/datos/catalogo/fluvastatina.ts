import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fluvastatina',
    nombre: 'Fluvastatina',
    clase: 'Estatina (inhibidor de la HMG-CoA reductasa)',
    sinonimos: [ 'fluvastatin' ],
    formula: 'C24H26FNO4',
    masaMolar: 411.5,
    smiles: 'CC(C)N1C2=CC=CC=C2C(=C1/C=C/[C@@H](C[C@@H](CC(=O)O)O)O)C3=CC=C(C=C3)F',
    inchikey: 'FJLGEFLZQAZZCD-JUFISIKESA-N',
    cid: 1548972,
    iupac: '(E,3S,5R)-7-[3-(4-fluorophenyl)-1-propan-2-ylindol-2-yl]-3,5-dihydroxyhept-6-enoic acid',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'fluvastatina-oral',
      producto: 'FLUVASTATINA TEVA 20 mg CAPSULAS DURAS EFG',
      titular: 'Teva Gmbh',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '20 o 40 mg de fluvastatina (como fluvastatina sódica) por cápsula, según la ficha técnica',
      sal: {
        nombre: 'Fluvastatina sódica',
        ref: {
          f: 'cima-69981',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: '20 mg de fluvastatina (como fluvastatina sódica)',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Sílice coloidal anhidra',
        'Crospovidona',
        'Estearato de magnesio',
        'Óxido de hierro rojo (E172)',
        'Óxido de hierro amarillo (E172)',
        'Dióxido de titanio (E171)',
        'Gelatina',
        'Tinta (shellac, propilenglicol, óxido de hierro negro E172)'
      ],
      usos: {
        t: 'Tratamiento de adultos con hipercolesterolemia primaria o dislipemia mixta, como complemento de la dieta.',
        ref: {
          f: 'cima-69981',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de adultos con hipercolesterolemia primaria o dislipemia mixta, como tratamiento adjunto a la dieta',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-69981',
      advertencias: [
        {
          titulo: 'Función hepática',
          texto: 'Se han notificado fallos hepáticos mortales y no mortales con algunas estatinas, incluida la fluvastatina, tras la comercialización.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-69981',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos posteriores a la comercialización de fallos hepáticos mortales y no mortales con algunas estatinas, incluida la fluvastatina',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Pruebas de función hepática',
          texto: 'Se recomienda hacer pruebas de la función hepática antes de iniciar el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-69981',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se recomienda realizar pruebas de la función hepática en todos los pacientes antes de iniciar el tratamiento con fluvastatina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones adversas notificadas con mayor frecuencia son síntomas gastrointestinales leves, insomnio y cefalea.',
          'FT 4.8',
          'Las reacciones adversas notificadas con mayor frecuencia son síntomas gastrointestinales leves, insomnio y cefalea'
        ],
        [
          'Dentro de cada sistema de órganos, la ficha las clasifica por frecuencia, con las más frecuentes en primer lugar.',
          'FT 4.8',
          'las reacciones adversas a los medicamentos se clasifican por frecuencia, con las más frecuentes en primer lugar'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 20 o 40 mg de fluvastatina (como fluvastatina sódica) por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con hipercolesterolemia primaria o dislipemia mixta, como complemento de la dieta.',
    actua: 'Es un inhibidor competitivo de la HMG-CoA reductasa, la enzima que convierte la HMG-CoA en mevalonato, precursor de los esteroles, incluido el colesterol.',
    recorrido: 'Tras la administración oral de una solución a voluntarios en ayunas, se absorbe rápida y completamente (98 %). Tras una dosis marcada, alrededor del 6 % de la radiactividad se recuperó en la orina y el 93 % en las heces; menos del 2 % del total correspondía a fluvastatina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-69981', sec: '3 · Forma farmacéutica', cita: 'Las cápsulas de 20 mg tienen el cuerpo de color marfil opaco', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral de una solución a voluntarios en ayunas, se absorbe rápida y completamente (98 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral de una solución a voluntarios en ayunas, se absorbe rápida y completamente (98 %).',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fluvastatina se absorbe rápida y completamente (98%) tras la administración oral de una solución en voluntarios en ayunas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta, determinada a partir de las concentraciones en sangre sistémica, es del 24 %.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta, determinada a partir de las concentraciones en sangre sistémica, es del 24%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Si se administra después de la ingesta de alimentos, la absorción es más lenta.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Si se administra después de la ingesta de alimentos, la absorción es más lenta',
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
      ocurre: 'Más del 98 % del fármaco circulante se une a las proteínas del plasma; actúa principalmente en el hígado, que es el órgano principal de su metabolismo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 98 % del fármaco circulante se une a las proteínas del plasma; actúa principalmente en el hígado, que es el órgano principal de su metabolismo.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Más de un 98% del fármaco circulante se une a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución aparente (Vz/f) es de 330 litros.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución aparente (Vz/f) del fármaco es de 330 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'HMG-CoA reductasa',
        efecto: 'Es un inhibidor competitivo de la HMG-CoA reductasa, la enzima que convierte la HMG-CoA en mevalonato, precursor de los esteroles, incluido el colesterol.',
        lugar: [ 'higado' ],
        datos: [
          {
            t: 'Es un inhibidor competitivo de la HMG-CoA reductasa, la enzima que convierte la HMG-CoA en mevalonato, precursor de los esteroles, incluido el colesterol.',
            ref: {
              f: 'cima-69981',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La fluvastatina, agente hipocolesterolemiante obtenido por síntesis, es un inhibidor competitivo de la HMG-CoA reductasa, enzima responsable de la conversión del HMG-CoA a mevalonato',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza principalmente en el hígado, por múltiples vías alternativas del citocromo P450, por lo que su metabolismo es relativamente insensible a la inhibición de una sola isoenzima.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza principalmente en el hígado, por múltiples vías alternativas del citocromo P450, por lo que su metabolismo es relativamente insensible a la inhibición de una sola isoenzima.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fluvastatina se metaboliza principalmente en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido N-desisopropilpropiónico',
          actividad: 'inactivo',
          nota: 'Metabolito circulante, farmacológicamente inactivo.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el metabolito farmacológicamente inactivo, ácido N-desisopropilpropiónico',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Metabolitos hidroxilados',
          actividad: 'activo',
          nota: 'Activos, pero no circulan en la sangre.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos hidroxilados son activos, pero no circulan sistémicamente',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 6 % de la radiactividad se recuperó en la orina y el 93 % en las heces; menos del 2 % del total correspondía a fluvastatina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 6 % de la radiactividad se recuperó en la orina y el 93 % en las heces; menos del 2 % del total correspondía a fluvastatina.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aprox. un 6% de la radioactividad se recuperó en orina y un 93% en heces, correspondiendo a fluvastatina menos de un 2% del total',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras 40 mg por vía oral, la vida media de eliminación terminal fue de 2,3 ± 0,9 horas.',
          ref: {
            f: 'cima-69981',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral de 40 mg de fluvastatina, la vida media de eliminación terminal fue 2,3 ± 0,9 horas',
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
      valor: '24',
      unidad: '%',
      analito: 'fluvastatina',
      ref: {
        f: 'cima-69981',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta, determinada a partir de las concentraciones en sangre sistémica, es del 24%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 98',
      unidad: '%',
      analito: 'fluvastatina',
      ref: {
        f: 'cima-69981',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Más de un 98% del fármaco circulante se une a proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (Vz/f)',
      valor: '330',
      unidad: 'L',
      analito: 'fluvastatina',
      ref: {
        f: 'cima-69981',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución aparente (Vz/f) del fármaco es de 330 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación terminal',
      valor: '2,3 ± 0,9',
      unidad: 'h',
      analito: 'fluvastatina',
      condiciones: 'dosis oral de 40 mg',
      ref: {
        f: 'cima-69981',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la vida media de eliminación terminal fue 2,3 ± 0,9 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '93',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis de 3H-fluvastatina sódica',
      ref: { f: 'cima-69981', sec: '5.2 · Propiedades farmacocinéticas', cita: 'un 93% en heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-69981', '69981', 'FLUVASTATINA TEVA 20 mg CAPSULAS DURAS EFG (Teva Gmbh)', '2026-09-28', '2026-11-15'),
    rengPubchem(1548972, 'fluvastatin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
