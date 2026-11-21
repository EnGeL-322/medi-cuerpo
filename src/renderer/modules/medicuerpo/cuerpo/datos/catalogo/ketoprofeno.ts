import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ketoprofeno',
    nombre: 'Ketoprofeno',
    clase: 'Antiinflamatorio no esteroideo (derivado del ácido propiónico)',
    sinonimos: [ 'ketoprofen', 'Fastum' ],
    formula: 'C16H14O3',
    masaMolar: 254.28,
    smiles: 'CC(C1=CC(=CC=C1)C(=O)C2=CC=CC=C2)C(=O)O',
    inchikey: 'DKYWVDODHFEZIM-UHFFFAOYSA-N',
    cid: 3825,
    iupac: '2-(3-benzoylphenyl)propanoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'ketoprofeno-oral',
      producto: 'FASTUM 50 MG CÁPSULAS DURAS',
      titular: 'Laboratorios Menarini S.A.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '50 mg de ketoprofeno por cápsula, según la ficha técnica',
      excipientes: [
        'Almidón de maíz',
        'Celulosa microcristalina',
        'Talco',
        'Estearato de magnesio',
        'Gelatina',
        'Agua',
        'Dióxido de titanio (E-171)',
        'Tinta de impresión (shellac, alcohol deshidratado, alcohol isopropílico, alcohol butílico, propilenglicol, agua purificada, solución concentrada de amonio, hidróxido de potasio y óxido de hierro negro)'
      ],
      usos: {
        t: 'Tratamiento sintomático de la artritis reumatoide, la artrosis, la espondilitis anquilosante y los episodios agudos de gota, entre otras indicaciones.',
        ref: {
          f: 'cima-54445',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Artritis reumatoide, artrosis, espondilitis anquilosante, episodios agudos de gota',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-54445',
      advertencias: [
        {
          titulo: 'Uso con otros AINE',
          texto: 'Debe evitarse su administración con otros antiinflamatorios no esteroideos, incluidos los inhibidores selectivos de la ciclooxigenasa-2.',
          organos: [ 'estomago' ],
          ref: {
            f: 'cima-54445',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se debe evitar la administración concomitante de Fastum con otros AINE, incluyendo los inhibidores selectivos de la ciclooxigenasa-2',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Seguridad gastrointestinal',
          texto: 'Con los AINE, incluido el ketoprofeno, se han notificado hemorragias gastrointestinales, úlceras o perforaciones que pueden ser mortales, con o sin síntomas previos de alerta.',
          organos: [ 'estomago', 'intestino-delgado' ],
          ref: {
            f: 'cima-54445',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se han notificado hemorragias gastrointestinales, úlceras o perforaciones, que pueden ser mortales, en cualquier momento del mismo',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes son de naturaleza gastrointestinal.',
          'FT 4.8',
          'Las reacciones adversas que se observan con mayor frecuencia son de naturaleza gastrointestinal'
        ],
        [
          'Pueden aparecer úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, sobre todo en personas de edad avanzada.',
          'FT 4.8',
          'Pueden aparecer úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, especialmente en personas de edad avanzada'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 50 mg de ketoprofeno por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la artritis reumatoide, la artrosis, la espondilitis anquilosante y los episodios agudos de gota, entre otras indicaciones.',
    actua: 'Es un inhibidor de la ciclooxigenasa en los tejidos del cuerpo y, por tanto, frena la síntesis de precursores de las prostaglandinas.',
    recorrido: 'Tras la administración oral presenta una biodisponibilidad absoluta cercana al 100 %, con el pico de concentración plasmática a los 45 minutos de la toma. Se excreta principalmente por la orina: a los 5 días, el 75-90 % de la dosis se ha excretado por vía renal y solo el 1-8 % por las heces.'
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
          ref: { f: 'cima-54445', sec: '3 · Forma farmacéutica', cita: 'Cápsulas de gelatina dura, de color blanco', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral presenta una biodisponibilidad absoluta cercana al 100 %, con el pico de concentración plasmática a los 45 minutos de la toma.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral presenta una biodisponibilidad absoluta cercana al 100 %, con el pico de concentración plasmática a los 45 minutos de la toma.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras su administración oral, el ketoprofeno presenta una biodisponibilidad absoluta cercana al 100%, con una concentración plasmática que se alcanza a los 45 minutos de su toma oral',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'articulaciones', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Presenta una fijación a proteínas plasmáticas próxima al 99 %, difunde al líquido sinovial y atraviesa las barreras hematoencefálica y placentaria.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Presenta una fijación a proteínas plasmáticas próxima al 99 %, difunde al líquido sinovial y atraviesa las barreras hematoencefálica y placentaria.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'presenta una fijación a proteínas plasmáticas próxima al 99%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Atraviesa las barreras hematoencefálica y placentaria.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'atraviesa las barreras hematoencefálica y placentaria',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa',
        efecto: 'Es un inhibidor de la ciclooxigenasa en los tejidos del cuerpo y, por tanto, frena la síntesis de precursores de las prostaglandinas.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Es un inhibidor de la ciclooxigenasa en los tejidos del cuerpo y, por tanto, frena la síntesis de precursores de las prostaglandinas.',
            ref: {
              f: 'cima-54445',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El ketoprofeno es un inhibidor de la ciclooxigenasa en tejidos corporales y, por consiguiente, frena la síntesis de precursores de prostaglandinas',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza principalmente por conjugación con el ácido glucurónico y, en menor medida, por hidroxilación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza principalmente por conjugación con el ácido glucurónico y, en menor medida, por hidroxilación.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el ketoprofeno se metaboliza principalmente mediante conjugación con el ácido glucurónico y, en menor medida, mediante hidroxilación',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucuronoconjugado de ketoprofeno',
          actividad: 'desconocida',
          nota: 'Representa entre el 65 % y el 75 % de la dosis eliminada por la orina.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el producto glucuronoconjugado representa entre el 65 y el 75% de la misma',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta principalmente por la orina: a los 5 días, el 75-90 % de la dosis se ha excretado por vía renal y solo el 1-8 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta principalmente por la orina: a los 5 días, el 75-90 % de la dosis se ha excretado por vía renal y solo el 1-8 % por las heces.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El ketoprofeno se excreta principalmente por vía urinaria',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación oscila entre 1,5 y 2 horas.',
          ref: {
            f: 'cima-54445',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación oscila entre 1.5 a 2 horas',
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
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'ketoprofeno',
      ref: { f: 'cima-54445', sec: '5.2 · Propiedades farmacocinéticas', cita: 'presenta una biodisponibilidad absoluta cercana al 100%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '45',
      unidad: 'min',
      analito: 'ketoprofeno',
      ref: {
        f: 'cima-54445',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con una concentración plasmática que se alcanza a los 45 minutos de su toma oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'ketoprofeno',
      ref: {
        f: 'cima-54445',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'presenta una fijación a proteínas plasmáticas próxima al 99%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1,5-2',
      unidad: 'h',
      analito: 'ketoprofeno',
      ref: { f: 'cima-54445', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación oscila entre 1.5 a 2 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-54445', '54445', 'FASTUM 50 MG CÁPSULAS DURAS (Laboratorios Menarini S.A.)', '2023-12-19', '2026-11-15'),
    rengPubchem(3825, 'ketoprofen', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
