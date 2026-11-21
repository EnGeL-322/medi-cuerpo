import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pazopanib',
    nombre: 'Pazopanib',
    clase: 'Inhibidor de tirosina quinasas (VEGFR, PDGFR y otros)',
    sinonimos: [ 'pazopanib' ],
    formula: 'C21H23N7O2S',
    masaMolar: 437.5,
    smiles: 'CC1=C(C=C(C=C1)NC2=NC=CC(=N2)N(C)C3=CC4=NN(C(=C4C=C3)C)C)S(=O)(=O)N',
    inchikey: 'CUIHSIWYWATEQL-UHFFFAOYSA-N',
    cid: 10113978,
    iupac: '5-[[4-[(2,3-dimethylindazol-6-yl)-methylamino]pyrimidin-2-yl]amino]-2-methylbenzenesulfonamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pazopanib-oral',
      producto: 'PAZOPANIB STADA 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Laboratorio Stada S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '200 mg de pazopanib (como hidrocloruro) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de pazopanib',
        ref: {
          f: 'cima-86571',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'pazopanib hidrocloruro equivalente a 200 mg de pazopanib',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Celulosa microcristalina (E460)',
        'Carboximetilalmidón sódico (tipo A)',
        'Povidona K30 (E1201)',
        'Estearato de magnesio (E470b)',
        'Hipromelosa (E464)',
        'Dióxido de titanio (E171)',
        'Macrogol 400 (E1521)',
        'Óxido de hierro rojo (E172, solo para 200 mg)',
        'Polisorbato 80 (E433)'
      ],
      usos: {
        t: 'Tratamiento de primera línea del carcinoma de células renales avanzado en adultos, y de otros tumores.',
        ref: {
          f: 'cima-86571',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Pazopanib está indicado para el tratamiento de primera línea del carcinoma de células renales avanzado (CCR) en adultos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-86571',
      advertencias: [
        {
          titulo: 'Efectos hepáticos',
          texto: 'Se han notificado casos de insuficiencia hepática, algunos mortales, durante el uso de pazopanib.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-86571',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos de insuficiencia hepática (incluyendo víctimas mortales) durante el uso de pazopanib',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La ficha detalla las reacciones adversas graves más importantes identificadas en los estudios de carcinoma renal y de sarcoma de tejidos blandos.',
          'FT 4.8',
          'La reacciones adversas graves más importantes identificadas en los estudios de CCR y STB fueron'
        ],
        [
          'La evaluación de seguridad del carcinoma renal incluyó a 1.149 pacientes.',
          'FT 4.8',
          'fueron analizados en la evaluación global de seguridad y tolerabilidad de pazopanib (total n=1.149) en pacientes con CCR'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg de pazopanib (como hidrocloruro) por comprimido, según la ficha técnica; el activo va como hidrocloruro de pazopanib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de primera línea del carcinoma de células renales avanzado en adultos, y de otros tumores.',
    actua: 'Es un potente inhibidor de tirosina quinasas que inhibe varios receptores del factor de crecimiento endotelial vascular (VEGFR-1, -2 y -3) y de otros factores de crecimiento.',
    recorrido: 'Tras una dosis única de 800 mg en pacientes con tumores sólidos, la concentración plasmática máxima fue de unos 19 ± 13 µg/mL tras una mediana de 3,5 horas. Se elimina lentamente, con una semivida media de 30,9 horas; la eliminación se produce sobre todo por las heces y la renal es inferior al 4 % de la dosis.'
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
          ref: { f: 'cima-86571', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película (comprimido)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras una dosis única de 800 mg en pacientes con tumores sólidos, la concentración plasmática máxima fue de unos 19 ± 13 µg/mL tras una mediana de 3,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única de 800 mg en pacientes con tumores sólidos, la concentración plasmática máxima fue de unos 19 ± 13 µg/mL tras una mediana de 3,5 horas.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se obtuvo la concentración plasmática máxima (Cmax) de aproximadamente 19 ± 13 µg/ml tras una mediana de 3,5 horas (intervalo 1,0-11,9 horas)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos de alto o bajo contenido en grasa, el AUC y la Cmax aumentaron aproximadamente al doble.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración de pazopanib con alimentos con alto o bajo contenido en grasas produjo un incremento en el AUC y la Cmax de aproximadamente dos veces',
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
      ocurre: 'La unión a proteínas del plasma humano in vivo fue superior al 99 %, independiente de la concentración entre 10 y 100 µg/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma humano in vivo fue superior al 99 %, independiente de la concentración entre 10 y 100 µg/mL.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión de pazopanib a proteínas plasmáticas humanas in vivo fue mayor del 99 %, independientemente de la concentración, en el intervalo de 10-100 µg/ml',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores VEGFR-1, -2 y -3 y PDGFR',
        efecto: 'Es un potente inhibidor de tirosina quinasas que inhibe varios receptores del factor de crecimiento endotelial vascular (VEGFR-1, -2 y -3) y de otros factores de crecimiento.',
        lugar: [ 'rinones', 'vasos' ],
        datos: [
          {
            t: 'Es un potente inhibidor de tirosina quinasas que inhibe varios receptores del factor de crecimiento endotelial vascular (VEGFR-1, -2 y -3) y de otros factores de crecimiento.',
            ref: {
              f: 'cima-86571',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Pazopanib administrado por vía oral, es un potente inhibidor de tirosin kinasa (ITK) que inhibe múltiples receptores del factor de crecimiento endotelial vascular (VEGFR) -1, -2 y -3',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolismo está mediado sobre todo por la CYP3A4, con menor contribución de la CYP1A2 y la CYP2C8.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolismo está mediado sobre todo por la CYP3A4, con menor contribución de la CYP1A2 y la CYP2C8.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el metabolismo de pazopanib está mediado principalmente por CYP3A4, con menor contribución de CYP1A2 y CYP2C8',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Cuatro metabolitos principales',
          actividad: 'activo',
          nota: 'Representan el 6 % de la exposición plasmática; uno tiene una potencia similar a la del pazopanib y el resto, de 10 a 20 veces menos.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los cuatro metabolitos principales de pazopanib representaban sólo el 6% de la exposición en plasma',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina lentamente, con una semivida media de 30,9 horas; la eliminación se produce sobre todo por las heces y la renal es inferior al 4 % de la dosis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina lentamente, con una semivida media de 30,9 horas; la eliminación se produce sobre todo por las heces y la renal es inferior al 4 % de la dosis.',
          ref: {
            f: 'cima-86571',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Pazopanib se elimina lentamente, con una semivida media de 30,9 horas tras la administración de la dosis recomendada de 800 mg',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '3,5 (1,0-11,9)',
      unidad: 'h',
      analito: 'pazopanib',
      poblacion: 'pacientes con tumores sólidos',
      condiciones: 'dosis única de 800 mg',
      ref: {
        f: 'cima-86571',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'tras una mediana de 3,5 horas (intervalo 1,0-11,9 horas)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'pazopanib',
      ref: {
        f: 'cima-86571',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión de pazopanib a proteínas plasmáticas humanas in vivo fue mayor del 99 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '30,9',
      unidad: 'h',
      analito: 'pazopanib',
      condiciones: 'dosis de 800 mg',
      ref: { f: 'cima-86571', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una semivida media de 30,9 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminación renal',
      valor: '< 4',
      unidad: '% de la dosis',
      analito: 'pazopanib',
      ref: {
        f: 'cima-86571',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la eliminación renal representa <4 % de la dosis administrada',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-86571', '86571', 'PAZOPANIB STADA 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Laboratorio Stada S.L.)', '2025-06-16', '2026-11-15'),
    rengPubchem(10113978, 'pazopanib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
