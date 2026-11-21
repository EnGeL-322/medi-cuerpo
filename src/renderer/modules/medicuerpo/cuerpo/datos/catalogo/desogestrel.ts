import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'desogestrel',
    nombre: 'Desogestrel',
    clase: 'Progestágeno (anticonceptivo oral de solo progestágeno)',
    sinonimos: [ 'desogestrel', 'Cerazet' ],
    formula: 'C22H30O',
    masaMolar: 310.5,
    smiles: 'CC[C@]12CC(=C)[C@H]3[C@H]([C@@H]1CC[C@]2(C#C)O)CCC4=CCCC[C@H]34',
    inchikey: 'RPLCPCMSCLEKRS-BPIQYHPVSA-N',
    cid: 40973,
    iupac: '(8S,9S,10R,13S,14S,17R)-13-ethyl-17-ethynyl-11-methylidene-1,2,3,6,7,8,9,10,12,14,15,16-dodecahydrocyclopenta[a]phenanthren-17-ol',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'desogestrel-oral',
      producto: 'CERAZET 75 microgramos COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Organon Salud S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '75 microgramos de desogestrel por comprimido, según la ficha técnica',
      excipientes: [
        'Sílice coloidal anhidra',
        'Todo-rac-alfa-tocoferol',
        'Lactosa monohidrato',
        'Almidón de maíz',
        'Povidona',
        'Ácido esteárico',
        'Hipromelosa',
        'Macrogol 400',
        'Talco',
        'Dióxido de titanio (E 171)'
      ],
      usos: { t: 'Anticoncepción.', ref: { f: 'cima-62285', sec: '4.1 · Indicaciones terapéuticas', cita: 'Anticoncepción', codigo: 'FT 4.1' } },
      fuente: 'cima-62285',
      advertencias: [
        {
          titulo: 'Cáncer de mama',
          texto: 'El riesgo de cáncer de mama aumenta en general con la edad; con los anticonceptivos orales combinados se incrementa ligeramente el riesgo de diagnóstico de cáncer de mama.',
          organos: [ 'mama' ],
          ref: {
            f: 'cima-62285',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El riesgo de cáncer de mama aumenta en general con la edad',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Factores de riesgo nuevos o que empeoran',
          texto: 'Si se agrava una circunstancia o factor de riesgo, o aparece por primera vez, la mujer debe comunicárselo a su médico.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-62285',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la mujer debe comunicárselo a su médico',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa notificada con más frecuencia en los ensayos es el sangrado irregular.',
          'FT 4.8',
          'La reacción adversa que se ha comunicado más frecuentemente en los ensayos clínicos es sangrado irregular'
        ],
        [
          'Se ha citado algún tipo de sangrado irregular hasta en un 50 % de las mujeres que lo utilizan.',
          'FT 4.8',
          'Se ha citado algún tipo de sangrado irregular hasta en un 50% de las mujeres que utilizan Cerazet'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 75 microgramos de desogestrel por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Anticoncepción.',
    actua: 'Es un comprimido con progestágeno solo (desogestrel) que puede usarse en mujeres que no pueden o no quieren utilizar estrógenos.',
    recorrido: 'El desogestrel (DSG) se absorbe rápidamente y se convierte en etonogestrel (ENG); en el estado estacionario, los niveles séricos máximos se alcanzan 1,8 horas después de la toma. El etonogestrel y sus metabolitos, libres o conjugados, se excretan por la orina y las heces (cociente 1,5:1).'
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
          ref: { f: 'cima-62285', sec: '3 · Forma farmacéutica', cita: 'El comprimido es blanco, redondo y biconvexo', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El desogestrel (DSG) se absorbe rápidamente y se convierte en etonogestrel (ENG); en el estado estacionario, los niveles séricos máximos se alcanzan 1,8 horas después de la toma.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El desogestrel (DSG) se absorbe rápidamente y se convierte en etonogestrel (ENG); en el estado estacionario, los niveles séricos máximos se alcanzan 1,8 horas después de la toma.',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral de Cerazet el desogestrel (DSG) se absorbe rápidamente y se convierte en etonogestrel (ENG)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En estado estacionario los niveles séricos máximos se alcanzan 1,8 horas después de ingerir el comprimido y la biodisponibilidad absoluta del etonogestrel es de aproximadamente el 70 %.',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'los niveles séricos máximos se alcanzan 1,8 horas después de haber ingerido los comprimidos y la biodisponibilidad absoluta del ENG es aproximadamente 70%',
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
      ocurre: 'El etonogestrel se une a las proteínas del plasma en un 95,5-99 %, sobre todo a la albúmina y, en menor grado, a la globulina fijadora de hormonas sexuales (SHBG).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El etonogestrel se une a las proteínas del plasma en un 95,5-99 %, sobre todo a la albúmina y, en menor grado, a la globulina fijadora de hormonas sexuales (SHBG).',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'ENG se une a las proteínas plasmáticas en un 95,5-99%, principalmente a la albúmina y en un menor grado a la SHBG',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Es un comprimido con progestágeno solo (desogestrel) que puede usarse en mujeres que no pueden o no quieren utilizar estrógenos.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Es un comprimido con progestágeno solo (desogestrel) que puede usarse en mujeres que no pueden o no quieren utilizar estrógenos.',
            ref: {
              f: 'cima-62285',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Cerazet es un comprimido con progestágeno solo, que contiene el progestágeno desogestrel',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El desogestrel se metaboliza por hidroxilación y deshidrogenación al metabolito activo etonogestrel, que se metaboliza sobre todo por la CYP3A y después se conjuga con sulfato y glucurónido.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El desogestrel se metaboliza por hidroxilación y deshidrogenación al metabolito activo etonogestrel, que se metaboliza sobre todo por la CYP3A y después se conjuga con sulfato y glucurónido.',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El DSG se metaboliza por hidroxilación y deshidrogenación al metabolito activo ENG',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Etonogestrel (ENG)',
          actividad: 'activo',
          nota: 'Metabolito activo; después se conjuga con sulfato y glucurónido.',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El DSG se metaboliza por hidroxilación y deshidrogenación al metabolito activo ENG',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El etonogestrel y sus metabolitos, libres o conjugados, se excretan por la orina y las heces (cociente 1,5:1).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El etonogestrel y sus metabolitos, libres o conjugados, se excretan por la orina y las heces (cociente 1,5:1).',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción de ENG y sus metabolitos tanto como esteroides libres o como conjugados se realiza en orina y heces (cociente 1,5:1)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida promedio del etonogestrel es de aproximadamente 30 horas.',
          ref: {
            f: 'cima-62285',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El ENG se elimina con una semivida promedio de aproximadamente 30 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico del etonogestrel',
      valor: '1,8',
      unidad: 'h',
      analito: 'etonogestrel',
      condiciones: 'estado estacionario',
      ref: {
        f: 'cima-62285',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'los niveles séricos máximos se alcanzan 1,8 horas después de haber ingerido los comprimidos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del etonogestrel',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'etonogestrel',
      ref: {
        f: 'cima-62285',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la biodisponibilidad absoluta del ENG es aproximadamente 70%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95,5-99',
      unidad: '%',
      analito: 'etonogestrel',
      ref: { f: 'cima-62285', sec: '5.2 · Propiedades farmacocinéticas', cita: 'ENG se une a las proteínas plasmáticas en un 95,5-99%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida promedio',
      valor: '30 (aprox.)',
      unidad: 'h',
      analito: 'etonogestrel',
      ref: {
        f: 'cima-62285',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El ENG se elimina con una semivida promedio de aproximadamente 30 horas',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-62285', '62285', 'CERAZET 75 microgramos COMPRIMIDOS RECUBIERTOS CON PELICULA (Organon Salud S.L.)', '2021-03-25', '2026-11-15'),
    rengPubchem(40973, 'desogestrel', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
