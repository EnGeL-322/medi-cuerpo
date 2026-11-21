import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ulipristal',
    nombre: 'Ulipristal',
    clase: 'Modulador selectivo de los receptores de la progesterona (anticonceptivo de urgencia)',
    sinonimos: [ 'ulipristal', 'ulipristal acetate' ],
    formula: 'C30H37NO4',
    masaMolar: 475.6,
    smiles: 'CC(=O)[C@]1(CC[C@@H]2[C@@]1(C[C@@H](C3=C4CCC(=O)C=C4CC[C@@H]23)C5=CC=C(C=C5)N(C)C)C)OC(=O)C',
    inchikey: 'OOLLAFOLCSJHRE-ZHAKMVSLSA-N',
    cid: 130904,
    iupac: '[(8S,11R,13S,14S,17R)-17-acetyl-11-[4-(dimethylamino)phenyl]-13-methyl-3-oxo-1,2,6,7,8,11,12,14,15,16-decahydrocyclopenta[a]phenanthren-17-yl] acetate',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'ulipristal-oral',
      producto: 'ULIPRISTAL STADA 30 MG COMPRIMIDO RECUBIERTO CON PELICULA EFG',
      titular: 'Laboratorio Stada S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '30 mg de acetato de ulipristal por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Acetato de ulipristal',
        ref: { f: 'cima-84013', sec: '2 · Composición cualitativa y cuantitativa', cita: '30 mg de acetato de ulipristal', codigo: 'FT 2' }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz pregelatinizado',
        'Carboximetilalmidón sódico (tipo A) (de patata)',
        'Estearato de magnesio',
        'Hipromelosa (E464)',
        'Hidroxipropilcelulosa (E463)',
        'Ácido esteárico (E570)',
        'Talco (E553b)',
        'Dióxido de titanio (E171)'
      ],
      usos: {
        t: 'Anticoncepción de urgencia en las 120 horas (5 días) siguientes a relaciones sexuales sin protección o a un fallo del anticonceptivo.',
        ref: {
          f: 'cima-84013',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Anticoncepción de urgencia dentro de las 120 horas (5 días) siguientes a haber mantenido relaciones sexuales sin protección',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-84013',
      advertencias: [
        {
          titulo: 'Uso ocasional',
          texto: 'Es solo para uso ocasional y en ningún caso debe sustituir a un método anticonceptivo convencional.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-84013',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En ningún caso debe sustituir a un método anticonceptivo convencional',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'No evita el embarazo en todos los casos',
          texto: 'No siempre evita el embarazo; ante retraso menstrual o síntomas sugestivos debe hacerse una prueba de embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-84013',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El acetato de ulipristal no evita el embarazo en todos los casos',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: cefalea, náuseas, dolor abdominal y dismenorrea.',
          'FT 4.8',
          'Las reacciones adversas notificadas de manera más frecuente fueron cefalea, náuseas, dolor abdominal y dismenorrea'
        ],
        [
          'Su seguridad se evaluó en 4.718 mujeres durante el desarrollo clínico.',
          'FT 4.8',
          'La seguridad del acetato de ulipristal se ha evaluado en 4.718 mujeres durante el programa de desarrollo clínico'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 30 mg de acetato de ulipristal por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Anticoncepción de urgencia en las 120 horas (5 días) siguientes a relaciones sexuales sin protección o a un fallo del anticonceptivo.',
    actua: 'Es un modulador sintético selectivo de los receptores de la progesterona, activo por vía oral, que se une con gran afinidad a los receptores de la progesterona humana.',
    recorrido: 'Tras una dosis oral única de 30 mg se absorbe rápidamente y alcanza su concentración plasmática máxima aproximadamente 1 hora (0,5-2,0 h) después. Tras una dosis única de 30 mg, la semivida terminal en el plasma se estima en 32,4 ± 6,3 horas, con un aclaramiento medio (CL/F) de 76,8 ± 64,0 L/h por vía oral.'
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
          ref: { f: 'cima-84013', sec: '3 · Forma farmacéutica', cita: 'Comprimido redondo, biconvexo de 9,0 – 9,2 mm', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras una dosis oral única de 30 mg se absorbe rápidamente y alcanza su concentración plasmática máxima aproximadamente 1 hora (0,5-2,0 h) después.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis oral única de 30 mg se absorbe rápidamente y alcanza su concentración plasmática máxima aproximadamente 1 hora (0,5-2,0 h) después.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral de una dosis única de 30 mg, el acetato de ulipristal se absorbe rápidamente, alcanzando una concentración plasmática máxima de 176 ± 89 ng/ml aproximadamente 1 hora (0,5-2,0 h) después de la ingestión',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con un desayuno rico en grasas, la Cmax media bajó casi un 45 %, el Tmax se retrasó (de una mediana de 0,75 a 3 horas) y el AUC fue un 25 % mayor.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración de acetato de ulipristal con un desayuno rico en grasas dio lugar a una disminución de la C máx media de casi un 45%',
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
      ocurre: 'Se une en un alto porcentaje (más del 98 %) a las proteínas del plasma, como la albúmina, la glucoproteína ácida alfa-1 y las lipoproteínas de alta densidad.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un alto porcentaje (más del 98 %) a las proteínas del plasma, como la albúmina, la glucoproteína ácida alfa-1 y las lipoproteínas de alta densidad.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El acetato de ulipristal se une en un alto porcentaje (>98%) a las proteínas plasmáticas como la albúmina, la glucoproteína ácida alfa-1 y las lipoproteínas de alta densidad',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Es un compuesto lipófilo que se distribuye en la leche materna.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El acetato de ulipristal es un compuesto lipófilo que se distribuye en la leche materna',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor de la progesterona',
        efecto: 'Es un modulador sintético selectivo de los receptores de la progesterona, activo por vía oral, que se une con gran afinidad a los receptores de la progesterona humana.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Es un modulador sintético selectivo de los receptores de la progesterona, activo por vía oral, que se une con gran afinidad a los receptores de la progesterona humana.',
            ref: {
              f: 'cima-84013',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El acetato de ulipristal es un modulador sintético selectivo y activo por vía oral de los receptores de la progesterona, que actúa uniéndose con gran afinidad a los receptores de la progesterona humana',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en su mayor parte a derivados monodesmetilados, didesmetilados e hidroxilados; la CYP3A4 media sobre todo su metabolización.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en su mayor parte a derivados monodesmetilados, didesmetilados e hidroxilados; la CYP3A4 media sobre todo su metabolización.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'es meta bolizado en su mayor parte a derivados monodesmetilados, didesmetilados e hidroxilados',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Según datos in vitro, su metabolización está mediada principalmente por la CYP3A4 y, en menor medida, por la CYP1A2 y la CYP2A6.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los datos in vitro indican que su metabolización está mediada principalmente por la CYP3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito monodesmetilado',
          actividad: 'activo',
          nota: 'Metabolito farmacológicamente activo.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito monodesmetilado es farmacológicamente activo',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única de 30 mg, la semivida terminal en el plasma se estima en 32,4 ± 6,3 horas, con un aclaramiento medio (CL/F) de 76,8 ± 64,0 L/h por vía oral.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única de 30 mg, la semivida terminal en el plasma se estima en 32,4 ± 6,3 horas, con un aclaramiento medio (CL/F) de 76,8 ± 64,0 L/h por vía oral.',
          ref: {
            f: 'cima-84013',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se estima que la semivida terminal del acetato de ulipristal en el plasma tras la administración de una dosis única de 30 mg es de 32,4 ± 6,3 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración plasmática máxima',
      valor: '1 (0,5-2,0)',
      unidad: 'h',
      analito: 'acetato de ulipristal',
      condiciones: 'dosis única de 30 mg',
      ref: {
        f: 'cima-84013',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente 1 hora (0,5-2,0 h) después de la ingestión',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 98',
      unidad: '%',
      analito: 'acetato de ulipristal',
      ref: {
        f: 'cima-84013',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El acetato de ulipristal se une en un alto porcentaje (>98%) a las proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en plasma',
      valor: '32,4 ± 6,3',
      unidad: 'h',
      analito: 'acetato de ulipristal',
      condiciones: 'dosis única de 30 mg',
      ref: {
        f: 'cima-84013',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la semivida terminal del acetato de ulipristal en el plasma tras la administración de una dosis única de 30 mg es de 32,4 ± 6,3 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento medio oral (CL/F)',
      valor: '76,8 ± 64,0',
      unidad: 'L/h',
      analito: 'acetato de ulipristal',
      ref: {
        f: 'cima-84013',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con un aclaramiento medio (CL/F) de 76,8 ± 64,0 l/h tras la administración oral',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-84013', '84013', 'ULIPRISTAL STADA 30 MG COMPRIMIDO RECUBIERTO CON PELICULA EFG (Laboratorio Stada S.L.)', '2023-02-11', '2026-11-15'),
    rengPubchem(130904, 'ulipristal', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
