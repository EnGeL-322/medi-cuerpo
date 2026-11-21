import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pretomanid',
    nombre: 'Pretomanid',
    clase: 'Antimicobacteriano nitroimidazooxazina',
    sinonimos: [ 'pretomanid' ],
    formula: 'C14H12F3N3O5',
    masaMolar: 359.26,
    smiles: 'C1[C@@H](COC2=NC(=CN21)[N+](=O)[O-])OCC3=CC=C(C=C3)OC(F)(F)F',
    inchikey: 'ZLHZLMOSPGACSZ-NSHDSACASA-N',
    cid: 456199,
    iupac: '(6S)-2-nitro-6-[[4-(trifluoromethoxy)phenyl]methoxy]-6,7-dihydro-5H-imidazo[2,1-b][1,3]oxazine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'pretomanid-oral',
      producto: 'Pretomanid · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'sodium lauryl sulfate',
        'sodium starch glycolate type a'
      ],
      usos: {
        t: 'Población limitada: en combinación con bedaquilina y linezolid para adultos con tuberculosis pulmonar resistente a isoniazida, rifamicinas, una fluoroquinolona y un inyectable de segunda línea, o con intolerancia o falta de respuesta.',
        ref: {
          f: 'dailymed-pretomanid',
          sec: '1 · Indicaciones',
          cita: 'Pretomanid Tablet is indicated, as part of a combination regimen with bedaquiline and linezolid for the treatment of adults with pulmonary tuberculosis (TB) resistant to isoniazid, rifamycins, a fluoroquinolone',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pretomanid',
      advertencias: [
        {
          titulo: 'Reacciones hepáticas',
          texto: 'Con la pauta combinada se notificaron reacciones hepáticas; vigilar las pruebas hepáticas e interrumpir toda la pauta si hay lesión hepática.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-pretomanid',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interrupt treatment with the entire regimen if evidence of liver injury occurs',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mielosupresión',
          texto: 'Con la pauta combinada se notificó mielosupresión; vigilar el hemograma.',
          organos: [],
          ref: {
            f: 'dailymed-pretomanid',
            sec: '5 · Advertencias y precauciones',
            cita: 'Myelosuppression was reported with the use of the combination regimen of Pretomanid Tablets, bedaquiline, and linezolid',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Neuropatía periférica y óptica',
          texto: 'Con la pauta combinada se notificaron; vigilar la función visual.',
          organos: [],
          ref: {
            f: 'dailymed-pretomanid',
            sec: '5 · Advertencias y precauciones',
            cita: 'Peripheral and optic neuropathy were reported with the use of the combination regimen of Pretomanid Tablets, bedaquiline, and linezolid',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): neuropatía periférica, anemia, náuseas, acné, vómitos, aumento de transaminasas, cefalea, dolor musculoesquelético, dispepsia, exantema y prurito, entre otras.',
          '34084-4',
          'Most common adverse reactions (≥ 10%) are peripheral neuropathy, anemia, nausea, acne, vomiting, increased transaminases, headache, musculoskeletal pain, dyspepsia, rash, pruritus'
        ],
        [
          'Entre las reacciones graves descritas en otras secciones figuran la neuropatía periférica y la óptica.',
          '34084-4',
          'Peripheral and Optic Neuropathy [see Warnings and Precautions (5.4) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Población limitada: en combinación con bedaquilina y linezolid para adultos con tuberculosis pulmonar resistente a isoniazida, rifamicinas, una fluoroquinolona y un inyectable de segunda línea, o con intolerancia o falta de respuesta.',
    actua: 'Mata a M. tuberculosis en replicación activa al inhibir la síntesis de ácidos micólicos y bloquear la producción de la pared celular; en anaerobiosis actúa como tóxico respiratorio al liberar óxido nítrico.',
    recorrido: 'Una comida rica en grasas aumentó la Cmax media un 76 % y el AUC un 88 % frente al ayuno; la mediana del tmax en ayunas fue de 4 horas. Tras 1 100 mg marcados, el 53 % de la radiactividad se excretó en la orina y el 38 % en las heces, sobre todo como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 200 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 200 mg: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-pretomanid',
            sec: '3 · Formas y concentraciones',
            cita: 'Pretomanid Tablets, 200 mg, are white to off-white, oval tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con una comida rica en grasas',
      ocurre: 'Una comida rica en grasas aumentó la Cmax media un 76 % y el AUC un 88 % frente al ayuno; la mediana del tmax en ayunas fue de 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Una comida rica en grasas aumentó la Cmax media un 76 % y el AUC un 88 % frente al ayuno; la mediana del tmax en ayunas fue de 4 horas.',
          ref: {
            f: 'dailymed-pretomanid',
            sec: '12.3 · Farmacocinética',
            cita: 'increased mean C max by 76% and mean AUC inf by 88% as compared with the fasted state',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas plasmáticas es de alrededor del 86,4 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es de alrededor del 86,4 %.',
          ref: {
            f: 'dailymed-pretomanid',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of pretomanid is approximately 86.4%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de ácidos micólicos micobacterianos',
        efecto: 'Mata a M. tuberculosis en replicación activa al inhibir la síntesis de ácidos micólicos y bloquear la producción de la pared celular; en anaerobiosis actúa como tóxico respiratorio al liberar óxido nítrico.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Mata a M. tuberculosis en replicación activa al inhibir la síntesis de ácidos micólicos y bloquear la producción de la pared celular; en anaerobiosis actúa como tóxico respiratorio al liberar óxido nítrico.',
            ref: {
              f: 'dailymed-pretomanid',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pretomanid kills actively replicating M. tuberculosis by inhibiting mycolic acid biosynthesis, thereby blocking cell wall production',
              codigo: '43679-0'
            }
          },
          {
            t: 'Frente a bacterias que no se replican, en anaerobiosis, actúa como tóxico respiratorio tras liberar óxido nítrico.',
            ref: {
              f: 'dailymed-pretomanid',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Under anaerobic conditions, against non-replicating bacteria, pretomanid acts as a respiratory poison following nitric oxide release',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por múltiples vías reductoras y oxidativas, sin una vía principal; la CYP3A4 participa en parte.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por múltiples vías reductoras y oxidativas, sin una vía principal; la CYP3A4 participa en parte.',
          ref: {
            f: 'dailymed-pretomanid',
            sec: '12.3 · Farmacocinética',
            cita: 'Pretomanid is metabolized by multiple reductive and oxidative pathways, with no single pathway considered as major',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 1 100 mg marcados, el 53 % de la radiactividad se excretó en la orina y el 38 % en las heces, sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 1 100 mg marcados, el 53 % de la radiactividad se excretó en la orina y el 38 % en las heces, sobre todo como metabolitos.',
          ref: {
            f: 'dailymed-pretomanid',
            sec: '12.3 · Farmacocinética',
            cita: 'a mean (SD) of 53% (3.4%) of a radioactive dose was excreted in urine and 38% (2.7%) in feces, primarily as metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en ayunas',
      valor: '4,0',
      unidad: 'h',
      analito: 'pretomanid',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única de 200 mg en ayunas',
      ref: { f: 'dailymed-pretomanid', sec: '12.3 · Farmacocinética', cita: 'Median (minimum, maximum) T max (hr) 4.0 (2.0, 6.0)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '86,4 (aprox.)',
      unidad: '%',
      analito: 'pretomanid',
      ref: {
        f: 'dailymed-pretomanid',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of pretomanid is approximately 86.4%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '16,9',
      unidad: 'h',
      analito: 'pretomanid',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única de 200 mg en ayunas',
      ref: { f: 'dailymed-pretomanid', sec: '12.3 · Farmacocinética', cita: 't ½ (hr) 16.9 (3.1)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '53',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones adultos sanos',
      condiciones: 'dosis oral marcada de 1 100 mg',
      ref: {
        f: 'dailymed-pretomanid',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean (SD) of 53% (3.4%) of a radioactive dose was excreted in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pretomanid', 'f1906fc9-cb3c-4e13-8a4a-da76100c1bf3', 'PRETOMANID TABLET', 'Pretomanid', '13', '2025-04-10', '2026-11-19'),
    rengPubchem(456199, 'pretomanid', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
