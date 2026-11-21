import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'everolimus',
    nombre: 'Everolimus',
    clase: 'Inmunosupresor, inhibidor de mTOR',
    sinonimos: [ 'everolimus', 'Certican' ],
    formula: 'C53H83NO14',
    masaMolar: 958.2,
    smiles: 'C[C@@H]1CC[C@H]2C[C@@H](/C(=C/C=C/C=C/[C@H](C[C@H](C(=O)[C@@H]([C@@H](/C(=C/[C@H](C(=O)C[C@H](OC(=O)[C@@H]3CCCCN3C(=O)C(=O)[C@@]1(O2)O)[C@H](C)C[C@@H]4CC[C@H]([C@@H](C4)OC)OCCO)C)/C)O)OC)C)C)/C)OC',
    inchikey: 'HKVAMNSJSFKALM-GKUWKFKPSA-N',
    cid: 6442177,
    iupac: '(1R,9S,12S,15R,16E,18R,19R,21R,23S,24E,26E,28E,30S,32S,35R)-1,18-dihydroxy-12-[(2R)-1-[(1S,3R,4R)-4-(2-hydroxyethoxy)-3-methoxycyclohexyl]propan-2-yl]-19,30-dimethoxy-15,17,21,23,29,35-hexamethyl-11,36-dioxa-4-azatricyclo[30.3.1.04,9]hexatriaconta-16,24,26,28-tetraene-2,3,10,14,20-pentone',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'everolimus-oral',
      producto: 'CERTICAN 1 mg COMPRIMIDOS',
      titular: 'Novartis Farmaceutica S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '0,25, 0,5, 0,75 o 1 mg de everolimus por comprimido, según la ficha técnica',
      excipientes: [
        'Butilhidroxitolueno (E321)',
        'Estearato de magnesio (E470 B)',
        'Lactosa monohidrato',
        'Hipromelosa tipo 2910',
        'Crospovidona tipo A',
        'Lactosa anhidra'
      ],
      usos: {
        t: 'Profilaxis del rechazo de órganos en adultos con riesgo inmunológico bajo o moderado que reciben un trasplante renal o cardíaco alogénico.',
        ref: {
          f: 'cima-66008',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Certican está indicado para la profilaxis del rechazo de órganos en pacientes adultos con bajo a moderado riesgo inmunológico',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-66008',
      advertencias: [
        {
          titulo: 'Infecciones graves y oportunistas',
          texto: 'Los pacientes tratados con inmunosupresores tienen mayor riesgo de infecciones oportunistas bacterianas, fúngicas, víricas y protozoarias.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'cima-66008',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Los pacientes tratados con inmunosupresores, incluido Certican, presentan un mayor riesgo para infecciones oportunistas',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Linfomas y otras neoplasias malignas',
          texto: 'Los pacientes inmunosuprimidos tienen mayor riesgo de linfomas y de otras neoplasias malignas, sobre todo de la piel.',
          organos: [ 'sistema-inmunitario', 'piel' ],
          ref: {
            f: 'cima-66008',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'poseen un mayor riesgo de desarrollar linfomas y otras neoplasias malignas',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: infecciones, anemia, hiperlipidemia, diabetes mellitus de nuevo inicio, insomnio, cefalea, hipertensión, tos, estreñimiento, náuseas, edema periférico y alteración de la cicatrización.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes son: infecciones, anemia, hiperlipidemia, diabetes mellitus de nuevo inicio, insomnio, cefalea, hipertensión, tos, estreñimiento, náusea, edema periférico, alteración de la cicatrización'
        ],
        [
          'Las frecuencias derivan de ensayos controlados de 12 meses en receptores adultos de trasplantes, con inhibidores de la calcineurina y corticosteroides.',
          'FT 4.8',
          'Las frecuencias de las reacciones adversas descritas a continuación derivan del análisis de incidencias de efectos notificados durante 12 meses en ensayos controlados'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0,25, 0,5, 0,75 o 1 mg de everolimus por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Profilaxis del rechazo de órganos en adultos con riesgo inmunológico bajo o moderado que reciben un trasplante renal o cardíaco alogénico.',
    actua: 'Inhibe la proliferación y, con ella, la expansión clonal de las células T activadas por antígenos, lo que produce el efecto inmunosupresor que previene el rechazo del injerto.',
    recorrido: 'Tras la administración oral, las concentraciones máximas se alcanzan entre 1 y 2 horas después de la dosis. Tras una dosis marcada, el 80 % de la radiactividad se recuperó en las heces y solo el 5 % en la orina; el fármaco original no se detectó en ninguna de las dos.'
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
          ref: {
            f: 'cima-66008',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimidos redondos, planos, de color blanco a amarillento, veteados y con bordes biselados',
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
      ocurre: 'Tras la administración oral, las concentraciones máximas se alcanzan entre 1 y 2 horas después de la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, las concentraciones máximas se alcanzan entre 1 y 2 horas después de la dosis.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'las concentraciones máximas de everolimus se alcanzan entre 1 y 2 h después de la dosis',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax baja un 60 % y el AUC un 16 %.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La C max y el AUC de everolimus se reducen en un 60% y un 16% cuando la formulación en comprimidos se administra con una comida rica en grasas',
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
      ocurre: 'La unión a las proteínas del plasma es de aproximadamente el 74 % y el volumen de distribución de la fase final en pacientes con trasplante renal es de 342 ± 107 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es de aproximadamente el 74 % y el volumen de distribución de la fase final en pacientes con trasplante renal es de 342 ± 107 litros.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a las proteínas plasmáticas es aproximadamente del 74% en voluntarios sanos',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Diana de la rapamicina en mamíferos (mTOR)',
        efecto: 'Inhibe la proliferación y, con ella, la expansión clonal de las células T activadas por antígenos, lo que produce el efecto inmunosupresor que previene el rechazo del injerto.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Inhibe la proliferación y, con ella, la expansión clonal de las células T activadas por antígenos, lo que produce el efecto inmunosupresor que previene el rechazo del injerto.',
            ref: {
              f: 'cima-66008',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Ejerce su efecto inmunosupresor inhibiendo la proliferación, y por lo tanto, la expansión clonal de las células T activadas por antígenos',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Es sustrato de la CYP3A4 y de la glucoproteína P; tras la administración oral es el principal componente circulante en la sangre humana.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Es sustrato de la CYP3A4 y de la glucoproteína P; tras la administración oral es el principal componente circulante en la sangre humana.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Everolimus es un sustrato de CYP3A4 y glicoproteína P',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Seis metabolitos principales (tres monohidroxilados, dos de anillo abierto y un conjugado de fosfatidilcolina)',
          actividad: 'activo',
          nota: 'Unas 100 veces menos activos que el fármaco original, que aporta la mayor parte de la actividad.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'mostraron aproximadamente 100 veces menos actividad que everolimus por sí mismo',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 80 % de la radiactividad se recuperó en las heces y solo el 5 % en la orina; el fármaco original no se detectó en ninguna de las dos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 80 % de la radiactividad se recuperó en las heces y solo el 5 % en la orina; el fármaco original no se detectó en ninguna de las dos.',
          ref: {
            f: 'cima-66008',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la mayoría (80%) de la radioactividad se recuperó de las heces y sólo una pequeña cantidad (5%) se excretó en orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación es de 28 ± 7 horas.',
          ref: { f: 'cima-66008', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación es de 28 ± 7 h', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en sangre',
      valor: '1-2',
      unidad: 'h',
      analito: 'everolimus',
      ref: {
        f: 'cima-66008',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'las concentraciones máximas de everolimus se alcanzan entre 1 y 2 h después de la dosis',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '74 (aprox.)',
      unidad: '%',
      analito: 'everolimus',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'cima-66008',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a las proteínas plasmáticas es aproximadamente del 74%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución de la fase final (Vz/F)',
      valor: '342 ± 107',
      unidad: 'L',
      analito: 'everolimus',
      poblacion: 'pacientes con trasplante renal',
      ref: {
        f: 'cima-66008',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución asociado con la fase final (Vz/F) en los pacientes con trasplante renal de mantenimiento es de 342 ± 107 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '28 ± 7',
      unidad: 'h',
      analito: 'everolimus',
      poblacion: 'pacientes trasplantados',
      ref: { f: 'cima-66008', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación es de 28 ± 7 h', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'pacientes trasplantados con ciclosporina',
      condiciones: 'dosis única de everolimus marcado',
      ref: {
        f: 'cima-66008',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la mayoría (80%) de la radioactividad se recuperó de las heces',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-66008', '66008', 'CERTICAN 1 mg COMPRIMIDOS (Novartis Farmaceutica S.A.)', '2024-07-16', '2026-11-15'),
    rengPubchem(6442177, 'everolimus', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
