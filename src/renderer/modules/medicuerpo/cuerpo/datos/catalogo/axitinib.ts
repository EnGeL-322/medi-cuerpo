import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'axitinib',
    nombre: 'Axitinib',
    clase: 'Inhibidor de la tirosina quinasa de los receptores VEGFR',
    sinonimos: [ 'axitinib' ],
    formula: 'C22H18N4OS',
    masaMolar: 386.5,
    smiles: 'CNC(=O)C1=CC=CC=C1SC2=CC3=C(C=C2)C(=NN3)/C=C/C4=CC=CC=N4',
    inchikey: 'RITAVMQDGBJQJZ-FMIVXFBMSA-N',
    cid: 6450551,
    iupac: 'N-methyl-2-[[3-[(E)-2-pyridin-2-ylethenyl]-1H-indazol-6-yl]sulfanyl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'axitinib-oral',
      producto: 'AXITINIB TEVA 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Teva Gmbh',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '1 y 5 mg de axitinib por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina',
        'Lactosa monohidrato',
        'Croscarmelosa de sodio',
        'Estearato de magnesio',
        'Hipromelosa',
        'Dióxido de titanio (E171)',
        'Triacetina (E1518)',
        'Óxido de hierro rojo (E172)'
      ],
      usos: {
        t: 'Tratamiento del carcinoma avanzado de células renales en adultos tras el fracaso de un tratamiento previo con sunitinib o con una citocina.',
        ref: {
          f: 'cima-89674',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Axitinib Teva está indicado en el tratamiento de pacientes adultos con carcinoma avanzado de células renales (CCR) tras fracaso a un tratamiento previo con sunitinib',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-89674',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'Deben vigilarse periódicamente los signos y síntomas de insuficiencia cardíaca durante el tratamiento.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-89674',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se deben monitorizar los signos y síntomas de insuficiencia cardiaca de forma periódica a lo largo del tratamiento con axitinib',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, hipertensión, fatiga, apetito disminuido, náuseas, peso disminuido y disfonía, entre otras.',
          'FT 4.8',
          'fueron diarrea, hipertensión, fatiga, apetito disminuido, náuseas, peso disminuido, disfonía'
        ],
        [
          'La ficha detalla riesgos como la insuficiencia cardíaca, la hipertensión, la alteración tiroidea y los acontecimientos tromboembólicos arteriales.',
          'FT 4.8',
          'acontecimientos de insuficiencia cardiaca, hipertensión, alteración tiroidea, acontecimientos tromboembólicos arteriales'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 1 y 5 mg de axitinib por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del carcinoma avanzado de células renales en adultos tras el fracaso de un tratamiento previo con sunitinib o con una citocina.',
    actua: 'Es un inhibidor potente y selectivo de la tirosina quinasa de los receptores del factor de crecimiento del endotelio vascular (VEGFR-1, VEGFR-2 y VEGFR-3).',
    recorrido: 'Tras la administración oral, la biodisponibilidad absoluta media es del 58 % respecto a la vía intravenosa. Tras una dosis oral radiactiva de 5 mg, se recuperó un 30-60 % de la radiactividad en las heces y un 23 % en la orina; no se detectó axitinib inalterado en la orina.'
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
          ref: { f: 'cima-89674', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral, la biodisponibilidad absoluta media es del 58 % respecto a la vía intravenosa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, la biodisponibilidad absoluta media es del 58 % respecto a la vía intravenosa.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral de los comprimidos de axitinib, la media de la biodisponibilidad absoluta es del 58% en comparación con la administración intravenosa',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan en general dentro de las 4 horas, con una mediana de Tmax de 2,5 a 4,1 horas.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones máximas de axitinib en plasma se alcanzan generalmente dentro de las 4 horas siguientes a la administración oral de axitinib, con una mediana de T max que abarca desde las 2,5 a las 4,1 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con una comida moderada en grasas, la exposición fue un 10 % menor que en ayunas; con una comida rica en grasas y calorías, un 19 % mayor.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración de axitinib con una comida moderada en grasas dio lugar a una exposición un 10% más baja comparada con el ayuno nocturno',
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
      ocurre: 'La unión in vitro a proteínas del plasma humano es superior al 99 %, con preferencia por la albúmina y una unión moderada a la glucoproteína ácida alfa-1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión in vitro a proteínas del plasma humano es superior al 99 %, con preferencia por la albúmina y una unión moderada a la glucoproteína ácida alfa-1.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión in vitro de axitinib a proteínas plasmáticas humanas es > 99% con una preferencia de unión a albúmina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La media geométrica del aclaramiento oral y del volumen aparente de distribución fue de 38 L/h y 160 L.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La media geométrica de aclaramiento oral y volumen aparente de distribución fueron 38 l/h y 160 l, respectivamente',
            codigo: 'FT 5.2'
          },
          poblacion: 'pacientes con carcinoma renal avanzado',
          condiciones: '5 mg dos veces al día con comida'
        }
      ],
      accion: {
        diana: 'Receptores VEGFR-1, VEGFR-2 y VEGFR-3',
        efecto: 'Es un inhibidor potente y selectivo de la tirosina quinasa de los receptores del factor de crecimiento del endotelio vascular (VEGFR-1, VEGFR-2 y VEGFR-3).',
        lugar: [ 'rinones', 'vasos' ],
        datos: [
          {
            t: 'Es un inhibidor potente y selectivo de la tirosina quinasa de los receptores del factor de crecimiento del endotelio vascular (VEGFR-1, VEGFR-2 y VEGFR-3).',
            ref: {
              f: 'cima-89674',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Axitinib es un potente y selectivo inhibidor de la tirosin quinasa de los receptores del factor de crecimiento del endotelio vascular (VEGFR)-1, VEGFR-2 y VEGFR-3',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado por la CYP3A4/5 y, en menor medida, por la CYP1A2, la CYP2C19 y la UGT1A1.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado por la CYP3A4/5 y, en menor medida, por la CYP1A2, la CYP2C19 y la UGT1A1.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Axitinib se metaboliza principalmente en el hígado por CYP3A4/5y en menor medida por CYP1A2, CYP2C19 y UGT1A1',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos sulfóxido y N-glucurónido',
          actividad: 'inactivo',
          nota: 'Entre 400 y 8.000 veces menos potentes que el axitinib frente a VEGFR-2.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos sulfóxido y N-glucurónido muestran menos potencia in vitro, aproximadamente de 400 a 8.000 veces, respectivamente, frente a VEGFR-2 comparado con axitinib',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral radiactiva de 5 mg, se recuperó un 30-60 % de la radiactividad en las heces y un 23 % en la orina; no se detectó axitinib inalterado en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral radiactiva de 5 mg, se recuperó un 30-60 % de la radiactividad en las heces y un 23 % en la orina; no se detectó axitinib inalterado en la orina.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de una administración oral de una dosis de 5 mg de axitinib radioactivo, se recuperó un 30-60% de radioactividad en heces y un 23% en orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida plasmática está entre 2,5 y 6,1 horas.',
          ref: {
            f: 'cima-89674',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida plasmática de axitinib se encuentra en el rango de 2,5 a 6,1 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '58',
      unidad: '%',
      analito: 'axitinib',
      ref: { f: 'cima-89674', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la media de la biodisponibilidad absoluta es del 58%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '2,5-4,1',
      unidad: 'h',
      analito: 'axitinib',
      ref: {
        f: 'cima-89674',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'una mediana de T max que abarca desde las 2,5 a las 4,1 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'axitinib',
      condiciones: 'in vitro',
      ref: { f: 'cima-89674', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es > 99% con una preferencia de unión a albúmina', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '160',
      unidad: 'L',
      analito: 'axitinib',
      poblacion: 'pacientes con carcinoma renal avanzado',
      condiciones: '5 mg dos veces al día con comida',
      ref: {
        f: 'cima-89674',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'volumen aparente de distribución fueron 38 l/h y 160 l, respectivamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '2,5-6,1',
      unidad: 'h',
      analito: 'axitinib',
      ref: { f: 'cima-89674', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se encuentra en el rango de 2,5 a 6,1 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '30-60',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de 5 mg de axitinib radioactivo',
      ref: { f: 'cima-89674', sec: '5.2 · Propiedades farmacocinéticas', cita: 'un 30-60% de radioactividad en heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-89674', '89674', 'AXITINIB TEVA 1 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Teva Gmbh)', '2026-10-01', '2026-11-15'),
    rengPubchem(6450551, 'axitinib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
