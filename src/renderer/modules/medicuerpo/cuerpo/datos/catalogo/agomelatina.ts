import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'agomelatina',
    nombre: 'Agomelatina',
    clase: 'Antidepresivo agonista melatoninérgico y antagonista de 5-HT2C',
    sinonimos: [ 'agomelatine' ],
    formula: 'C15H17NO2',
    masaMolar: 243.3,
    smiles: 'CC(=O)NCCC1=CC=CC2=C1C=C(C=C2)OC',
    inchikey: 'YJYPHIXNFHFHND-UHFFFAOYSA-N',
    cid: 82148,
    iupac: 'N-[2-(7-methoxynaphthalen-1-yl)ethyl]acetamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'agomelatina-oral',
      producto: 'AGOMELATINA STADA 25 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Laboratorio Stada S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '25 mg de agomelatina (como agomelatina-ácido cítrico) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Agomelatina-ácido cítrico (cocristal)',
        ref: {
          f: 'cima-83546',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'agomelatina-ácido cítrico equivalente 25 mg de agomelatina',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Dióxido de silicio coloidal',
        'Celulosa microcristalina',
        'Manitol',
        'Povidona K 30',
        'Sílice coloidal anhidra',
        'Crospovidona',
        'Estearil fumarato de sodio',
        'Estearato de magnesio',
        'Ácido esteárico',
        'Hipromelosa',
        'Macrogol',
        'Dióxido de titanio (E 171)',
        'Talco',
        'Óxido de hierro amarillo (E 172)'
      ],
      usos: {
        t: 'Tratamiento de los episodios de depresión mayor en adultos.',
        ref: {
          f: 'cima-83546',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Agomelatina está indicado para el tratamiento de episodios de depresión mayor en adultos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-83546',
      advertencias: [
        {
          titulo: 'Control de la función hepática',
          texto: 'Se han notificado casos de daño hepático, incluida la insuficiencia hepática, con casos excepcionales mortales o con trasplante de hígado.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-83546',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos de daño hepático, incluyendo insuficiencia hepática',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Las más frecuentes: cefalea, náuseas y mareo.', 'FT 4.8', 'Las reacciones adversas más frecuentes fueron cefalea, náuseas y mareo' ],
        [
          'Fueron normalmente de leves a moderadas y aparecieron en las dos primeras semanas de tratamiento.',
          'FT 4.8',
          'Las reacciones adversas fueron normalmente de leve a moderadas y aparecieron en las dos primeras semanas de tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg de agomelatina (como agomelatina-ácido cítrico) por comprimido, según la ficha técnica; el activo va como agomelatina-ácido cítrico (cocristal). Los excipientes no son el principio activo.',
    usos: 'Tratamiento de los episodios de depresión mayor en adultos.',
    actua: 'Es un agonista melatoninérgico (receptores MT1 y MT2) y un antagonista de los receptores 5-HT2C; no tiene efectos sobre la captación de monoaminas.',
    recorrido: 'Se absorbe bien y de forma rápida (80 % o más) tras la administración oral; la concentración plasmática máxima se alcanza entre 1 y 2 horas. La excreción es fundamentalmente urinaria (80 %), en forma de metabolitos; la excreción urinaria del compuesto inalterado es inapreciable.'
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
            f: 'cima-83546',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimido recubierto con película, de color amarillo, oblongo, biconvexo',
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
      ocurre: 'Se absorbe bien y de forma rápida (80 % o más) tras la administración oral; la concentración plasmática máxima se alcanza entre 1 y 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y de forma rápida (80 % o más) tras la administración oral; la concentración plasmática máxima se alcanza entre 1 y 2 horas.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Agomelatina se absorbe bien y de forma rápida (≥80%) después de su administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es baja (menos del 5 % con la dosis terapéutica) y la variabilidad interindividual es importante.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es baja (<5% para la dosis terapéutica por vía oral) y la variabilidad interindividual es importante',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración plasmática máxima se alcanza entre 1 y 2 horas tras la administración.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración plasmática máxima se alcanza entre 1 a 2 horas tras la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La comida normal o rica en grasas no modifica la biodisponibilidad ni la velocidad de absorción.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimentos (comida normal o rica en grasas) no modifica la biodisponibilidad ni la velocidad de absorción',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución en el equilibrio es de unos 35 litros y la unión a proteínas del plasma es del 95 %, independiente de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en el equilibrio es de unos 35 litros y la unión a proteínas del plasma es del 95 %, independiente de la concentración.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución en equilibrio es de aproximadamente 35 l y la unión a las proteínas plasmáticas es del 95%, independientemente de la concentración',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores MT1 y MT2 de melatonina y receptor 5-HT2C',
        efecto: 'Es un agonista melatoninérgico (receptores MT1 y MT2) y un antagonista de los receptores 5-HT2C; no tiene efectos sobre la captación de monoaminas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un agonista melatoninérgico (receptores MT1 y MT2) y un antagonista de los receptores 5-HT2C; no tiene efectos sobre la captación de monoaminas.',
            ref: {
              f: 'cima-83546',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Agomelatina es un agonista melatoninérgico (receptores MT 1 y MT 2 ) y un antagonista de 5-HT 2C',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza rápidamente por vía oral, sobre todo por la isoenzima hepática CYP1A2, con menor contribución de la CYP2C9 y la CYP2C19.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza rápidamente por vía oral, sobre todo por la isoenzima hepática CYP1A2, con menor contribución de la CYP2C9 y la CYP2C19.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Agomelatina se metaboliza rápidamente, después de su administración oral, principalmente mediante la isoenzima hepática CYP 1A2',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Agomelatina hidroxilada y desmetilada',
          actividad: 'inactivo',
          nota: 'Sin actividad; se conjugan y se eliminan por la orina.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los principales metabolitos, agomelatina hidroxilada y desmetilada, carecen de actividad, se conjugan enseguida y se eliminan por la orina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción es fundamentalmente urinaria (80 %), en forma de metabolitos; la excreción urinaria del compuesto inalterado es inapreciable.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción es fundamentalmente urinaria (80 %), en forma de metabolitos; la excreción urinaria del compuesto inalterado es inapreciable.',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción es fundamentalmente urinaria (80%) en forma de metabolitos, mientras la excreción en orina del compuesto inalterado es inapreciable',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida media plasmática varía entre 1 y 2 horas y el aclaramiento es alto (aproximadamente 1.100 mL/min).',
          ref: {
            f: 'cima-83546',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la semivida media plasmática varía entre 1 y 2 horas y el aclaramiento es alto (aprox. 1 100 ml/min)',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'otra',
      nombre: 'Absorción tras la dosis oral',
      valor: '≥ 80',
      unidad: '%',
      analito: 'agomelatina',
      ref: {
        f: 'cima-83546',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Agomelatina se absorbe bien y de forma rápida (≥80%) después de su administración oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (dosis terapéutica)',
      valor: '< 5',
      unidad: '%',
      analito: 'agomelatina',
      ref: {
        f: 'cima-83546',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta es baja (<5% para la dosis terapéutica por vía oral)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración plasmática máxima',
      valor: '1-2',
      unidad: 'h',
      analito: 'agomelatina',
      ref: {
        f: 'cima-83546',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática máxima se alcanza entre 1 a 2 horas tras la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en equilibrio',
      valor: '35 (aprox.)',
      unidad: 'L',
      analito: 'agomelatina',
      ref: {
        f: 'cima-83546',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución en equilibrio es de aproximadamente 35 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95',
      unidad: '%',
      analito: 'agomelatina',
      ref: { f: 'cima-83546', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la unión a las proteínas plasmáticas es del 95%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media plasmática',
      valor: '1-2',
      unidad: 'h',
      analito: 'agomelatina',
      ref: { f: 'cima-83546', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la semivida media plasmática varía entre 1 y 2 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción urinaria (como metabolitos)',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'agomelatina',
      ref: {
        f: 'cima-83546',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La excreción es fundamentalmente urinaria (80%) en forma de metabolitos',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-83546', '83546', 'AGOMELATINA STADA 25 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Laboratorio Stada S.L.)', '2025-11-04', '2026-11-15'),
    rengPubchem(82148, 'agomelatine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
