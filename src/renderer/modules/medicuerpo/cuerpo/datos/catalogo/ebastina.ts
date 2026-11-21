import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ebastina',
    nombre: 'Ebastina',
    clase: 'Antihistamínico H1 no sedante',
    sinonimos: [ 'ebastine', 'Bactil' ],
    formula: 'C32H39NO2',
    masaMolar: 469.7,
    smiles: 'CC(C)(C)C1=CC=C(C=C1)C(=O)CCCN2CCC(CC2)OC(C3=CC=CC=C3)C4=CC=CC=C4',
    inchikey: 'MJJALKDDGIKVBE-UHFFFAOYSA-N',
    cid: 3191,
    iupac: '4-(4-benzhydryloxypiperidin-1-yl)-1-(4-tert-butylphenyl)butan-1-one',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'ebastina-oral',
      producto: 'BACTIL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Laboratorios Almirall S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '10 mg de ebastina por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina (E-460i)',
        'Almidón de maíz pregelatinizado',
        'Lactosa monohidrato',
        'Croscarmelosa sódica (E-468)',
        'Estearato de magnesio (E-572)',
        'Hipromelosa (E-464)',
        'Macrogol 6.000',
        'Dióxido de titanio (E-171)'
      ],
      usos: {
        t: 'Alivio sintomático de la rinoconjuntivitis alérgica y de la urticaria con síntomas leves, en adultos y adolescentes desde 12 años.',
        ref: {
          f: 'cima-59034',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'alivio sintomático de la rinoconjuntivitis alérgica y urticaria que cursen con síntomas leves',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-59034',
      advertencias: [
        {
          titulo: 'Riesgo cardíaco conocido',
          texto: 'Debe evaluarse el beneficio y el riesgo en pacientes con prolongación del intervalo QT, hipocaliemia o fármacos que alarguen el QT o inhiban la CYP3A4.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-59034',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se debe evaluar la relación beneficio/riesgo de la administración del medicamento en pacientes con riesgo cardíaco conocido',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Insuficiencia hepática grave',
          texto: 'Debe evaluarse la relación beneficio/riesgo en pacientes con insuficiencia hepática grave.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-59034',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Debe evaluarse la relación beneficio/riesgo en pacientes con insuficiencia hepática grave',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: dolor de cabeza, boca seca y somnolencia.',
          'FT 4.8',
          'las reacciones adversas notificadas con mayor frecuencia fueron dolor de cabeza, boca seca y somnolencia'
        ],
        [
          'El análisis conjunto incluyó ensayos controlados con placebo en 5.708 pacientes tratados con ebastina.',
          'FT 4.8',
          'En un análisis conjunto de ensayos clínicos controlados con placebo realizados en 5.708 pacientes tratados con ebastina'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg de ebastina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Alivio sintomático de la rinoconjuntivitis alérgica y de la urticaria con síntomas leves, en adultos y adolescentes desde 12 años.',
    actua: 'Produce una inhibición rápida y prolongada de los efectos de la histamina y se une con fuerte afinidad a los receptores H1.',
    recorrido: 'Se absorbe rápidamente y sufre un importante metabolismo de primer paso en el hígado, que da lugar a su metabolito ácido activo, la carebastina. Un 66 % del fármaco se excreta por la orina, principalmente como metabolitos conjugados.'
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
            f: 'cima-59034',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimidos circulares, de color blanco y con una cara marcada con E10',
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
      ocurre: 'Se absorbe rápidamente y sufre un importante metabolismo de primer paso en el hígado, que da lugar a su metabolito ácido activo, la carebastina.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente y sufre un importante metabolismo de primer paso en el hígado, que da lugar a su metabolito ácido activo, la carebastina.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'ebastina se absorbe rápidamente, sufriendo un importante efecto de metabolismo de primer paso hepático',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras una dosis oral única de 10 mg, los niveles plasmáticos máximos del metabolito se obtienen entre las 2,6 y las 4 horas.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'los niveles plasmáticos máximos del metabolito se obtienen entre las 2,6 y las 4 horas',
            codigo: 'FT 5.2'
          },
          poblacion: 'voluntarios',
          condiciones: 'dosis oral única de 10 mg'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Tanto la ebastina como la carebastina se unen a proteínas del plasma en más del 97 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tanto la ebastina como la carebastina se unen a proteínas del plasma en más del 97 %.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tanto ebastina como carebastina muestran una elevada unión a proteínas, >97%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina',
        efecto: 'Produce una inhibición rápida y prolongada de los efectos de la histamina y se une con fuerte afinidad a los receptores H1.',
        lugar: [ 'vasos', 'piel' ],
        datos: [
          {
            t: 'Produce una inhibición rápida y prolongada de los efectos de la histamina y se une con fuerte afinidad a los receptores H1.',
            ref: {
              f: 'cima-59034',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Ebastina produce una inhibición rápida y prolongada de los efectos inducidos por histamina',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Estudios in vitro con microsomas hepáticos humanos muestran que la ebastina se metaboliza a carebastina mediante la enzima CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Estudios in vitro con microsomas hepáticos humanos muestran que la ebastina se metaboliza a carebastina mediante la enzima CYP3A4.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'ebastina es metabolizada a carebastina mediante el enzima CYP3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Carebastina (metabolito ácido)',
          actividad: 'activo',
          nota: 'Metabolito ácido activo, formado en el primer paso hepático.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'da lugar a la aparición de su metabolito ácido activo, carebastina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Un 66 % del fármaco se excreta por la orina, principalmente como metabolitos conjugados.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Un 66 % del fármaco se excreta por la orina, principalmente como metabolitos conjugados.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'siendo un 66% del fármaco excretado en orina, principalmente en forma de metabolitos conjugados',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media del metabolito ácido está entre 15 y 19 horas.',
          ref: {
            f: 'cima-59034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vida media del metabolito ácido se sitúa entre 15 y 19 h',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del metabolito',
      valor: '2,6-4',
      unidad: 'h',
      analito: 'carebastina',
      condiciones: 'dosis oral única de 10 mg',
      ref: {
        f: 'cima-59034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'los niveles plasmáticos máximos del metabolito se obtienen entre las 2,6 y las 4 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 97',
      unidad: '%',
      analito: 'ebastina y carebastina',
      ref: {
        f: 'cima-59034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Tanto ebastina como carebastina muestran una elevada unión a proteínas, >97%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media del metabolito ácido',
      valor: '15-19',
      unidad: 'h',
      analito: 'carebastina',
      ref: {
        f: 'cima-59034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media del metabolito ácido se sitúa entre 15 y 19 h',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Fármaco excretado por la orina',
      valor: '66',
      unidad: '% de la dosis',
      analito: 'ebastina y metabolitos',
      ref: { f: 'cima-59034', sec: '5.2 · Propiedades farmacocinéticas', cita: 'siendo un 66% del fármaco excretado en orina', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-59034', '59034', 'BACTIL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Laboratorios Almirall S.L.)', '2024-03-20', '2026-11-15'),
    rengPubchem(3191, 'ebastine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
