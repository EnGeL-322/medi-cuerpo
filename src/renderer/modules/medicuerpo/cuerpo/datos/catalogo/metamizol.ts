import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metamizol',
    nombre: 'Metamizol',
    clase: 'Analgésico y antipirético (pirazolona)',
    sinonimos: [ 'metamizole', 'dipirona', 'Nolotil' ],
    formula: 'C13H17N3O4S',
    masaMolar: 311.36,
    smiles: 'CC1=C(C(=O)N(N1C)C2=CC=CC=C2)N(C)CS(=O)(=O)O',
    inchikey: 'LVWZTYCIRDMTEY-UHFFFAOYSA-N',
    cid: 3111,
    iupac: '[(1,5-dimethyl-3-oxo-2-phenylpyrazol-4-yl)-methylamino]methanesulfonic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'metamizol-oral',
      producto: 'NOLOTIL 575 mg CAPSULAS DURAS',
      titular: 'Boehringer Ingelheim Espana S.A.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '575 mg de metamizol magnésico por cápsula',
      sal: {
        nombre: 'Metamizol magnésico',
        ref: { f: 'cima-47633', sec: '2 · Composición cualitativa y cuantitativa', cita: 'Metamizol magnésico 575 mg', codigo: 'FT 2' }
      },
      excipientes: [ 'Estearato de magnesio', 'cápsula: indigotina (E132)', 'eritrosina (E127)', 'dióxido de titanio (E171)', 'gelatina' ],
      usos: {
        t: 'Dolor agudo moderado o intenso tras una operación o un traumatismo, de tipo cólico o de origen tumoral, y fiebre alta que no responde a otras medidas.',
        ref: {
          f: 'cima-47633',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Dolor agudo moderado o intenso post-operatorio o post-traumático',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-47633',
      advertencias: [
        {
          titulo: 'Agranulocitosis',
          texto: 'El metamizol puede causar agranulocitosis, que puede ser mortal y aparecer en cualquier momento, incluso si se había usado antes sin problemas.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'cima-47633',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El tratamiento con metamizol puede causar agranulocitosis, que puede ser mortal',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Alteraciones de la sangre: leucopenia (rara) y agranulocitosis (muy rara, a veces mortal).',
          'FT 4.8',
          'raras leucopenia muy raras agranulocitosis (incluyendo casos mortales)'
        ],
        [
          'La agranulocitosis se manifiesta con fiebre, escalofríos, dolor de garganta, dificultad para tragar y llagas en la boca.',
          'FT 4.8',
          'La agranulocitosis se manifiesta en forma de fiebre, escalofríos, dolor orofaríngeo, disfagia, estomatitis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 575 mg de metamizol magnésico por cápsula. Los excipientes no son el principio activo.',
    usos: 'Dolor agudo moderado o intenso tras una operación o un traumatismo, de tipo cólico o de origen tumoral, y fiebre alta que no responde a otras medidas.',
    actua: 'Su mecanismo no se conoce del todo: el metamizol y su metabolito principal (4-metilaminoantipirina) parecen actuar a la vez en el sistema nervioso central y en los tejidos. Es analgésico, antipirético y espasmolítico.',
    recorrido: 'Casi toda la dosis llega a absorberse, en forma de 4-MAA, que se absorbe con facilidad. La comida no cambia de forma relevante su farmacocinética. En voluntarios sanos, más del 90 % de la dosis sale por la orina en 7 días. La semivida de la 4-MAA tras una dosis oral es de 2,7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'estomago' ],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'La cápsula de gelatina dura libera el metamizol, que en el jugo gástrico se transforma rápidamente en su metabolito principal, la 4-metilaminoantipirina (4-MAA).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'La cápsula de gelatina dura libera el metamizol, que en el jugo gástrico se transforma rápidamente en su metabolito principal, la 4-metilaminoantipirina (4-MAA).',
          ref: { f: 'cima-47633', sec: '3 · Forma farmacéutica', cita: 'Cápsulas de gelatina dura oblongas', codigo: 'FT 3' }
        },
        {
          t: 'En el jugo gástrico se hidroliza rápidamente a 4-MAA.',
          ref: {
            f: 'cima-47633',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'metamizol se hidroliza rápidamente en el jugo gástrico a su principal metabolito',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Casi toda la dosis llega a absorberse, en forma de 4-MAA, que se absorbe con facilidad. La comida no cambia de forma relevante su farmacocinética.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Casi toda la dosis llega a absorberse, en forma de 4-MAA, que se absorbe con facilidad. La comida no cambia de forma relevante su farmacocinética.',
          ref: {
            f: 'cima-47633',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Metamizol administrado por vía oral se absorbe casi de forma completa',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La 4-MAA se absorbe con facilidad.',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la cual es fácilmente absorbida', codigo: 'FT 5.2' }
        },
        {
          t: 'La comida no tiene un efecto relevante.',
          ref: {
            f: 'cima-47633',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta concomitante de alimentos no tiene un efecto relevante en la farmacocinética',
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
      ocurre: 'La 4-MAA viaja unida a proteínas del plasma en un 58 %. Puede atravesar la placenta y sus metabolitos pasan a la leche materna.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La 4-MAA viaja unida a proteínas del plasma en un 58 %. Puede atravesar la placenta y sus metabolitos pasan a la leche materna.',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: '4- MAA se une a las proteínas plasmáticas en un 58%', codigo: 'FT 5.2' }
        },
        {
          t: 'Puede atravesar la barrera placentaria.',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Metamizol puede atravesar la barrera placentaria', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Mecanismo no comprendido del todo',
        efecto: 'Su mecanismo no se conoce del todo: el metamizol y su metabolito principal (4-metilaminoantipirina) parecen actuar a la vez en el sistema nervioso central y en los tejidos. Es analgésico, antipirético y espasmolítico.',
        lugar: [ 'encefalo', 'tejidos' ],
        datos: [
          {
            t: 'Su mecanismo no se conoce del todo: el metamizol y su metabolito principal (4-metilaminoantipirina) parecen actuar a la vez en el sistema nervioso central y en los tejidos. Es analgésico, antipirético y espasmolítico.',
            ref: {
              f: 'cima-47633',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'pueden tener un modo de acción combinado central y periférico',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En el hígado, la 4-MAA se transforma por oxidación y por desmetilación seguida de acetilación en 4-aminoantipirina (4-AA), 4-formilaminoantipirina (4-FAA) y 4-acetilaminoantipirina (4-AcAA). Los efectos se atribuyen a la 4-MAA y a la 4-AA.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En el hígado, la 4-MAA se transforma por oxidación y por desmetilación seguida de acetilación en 4-aminoantipirina (4-AA), 4-formilaminoantipirina (4-FAA) y 4-acetilaminoantipirina (4-AcAA). Los efectos se atribuyen a la 4-MAA y a la 4-AA.',
          ref: {
            f: 'cima-47633',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se metaboliza posteriormente en el hígado por oxidación y por desmetilación seguido de una acetilación',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4-metilaminoantipirina (4-MAA)',
          actividad: 'activo',
          nota: 'Metabolito principal; se forma ya en el jugo gástrico.',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se pueden atribuir a los metabolitos 4- MAA y 4-AA', codigo: 'FT 5.2' }
        },
        {
          nombre: '4-aminoantipirina (4-AA)',
          actividad: 'activo',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se pueden atribuir a los metabolitos 4- MAA y 4-AA', codigo: 'FT 5.2' }
        },
        {
          nombre: '4-formilaminoantipirina (4-FAA)',
          actividad: 'desconocida',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: '4-formilaminoantipirina (4-FAA)', codigo: 'FT 5.2' }
        },
        {
          nombre: '4-acetilaminoantipirina (4-AcAA)',
          actividad: 'desconocida',
          ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: '4-acetilaminoantipirina (4-AcAA)', codigo: 'FT 5.2' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En voluntarios sanos, más del 90 % de la dosis sale por la orina en 7 días. La semivida de la 4-MAA tras una dosis oral es de 2,7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En voluntarios sanos, más del 90 % de la dosis sale por la orina en 7 días. La semivida de la 4-MAA tras una dosis oral es de 2,7 horas.',
          ref: {
            f: 'cima-47633',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se excreta más del 90 % de la dosis en la orina al cabo de 7 días',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2,7',
      unidad: 'h',
      analito: '4-MAA (metabolito principal)',
      condiciones: 'dosis única oral',
      ref: {
        f: 'cima-47633',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la vida media de eliminación después de una dosis única por vía oral es de 2,7 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación de los demás metabolitos principales',
      valor: '3,7-11,2',
      unidad: 'h',
      analito: '4-AA, 4-FAA y 4-AcAA',
      ref: {
        f: 'cima-47633',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'para los demás metabolitos principales la vida media de eliminación es de 3,7 a 11,2 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación del metamizol radiomarcado',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'marca radiactiva (metamizol y metabolitos)',
      ref: {
        f: 'cima-47633',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación de metamizol radiomarcado es de unas 10 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '58',
      unidad: '%',
      analito: '4-MAA (metabolito principal)',
      ref: { f: 'cima-47633', sec: '5.2 · Propiedades farmacocinéticas', cita: '4- MAA se une a las proteínas plasmáticas en un 58%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 7 días',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'metamizol y metabolitos',
      poblacion: 'voluntarios sanos',
      condiciones: 'tras administración oral e intravenosa',
      ref: {
        f: 'cima-47633',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se excreta más del 90 % de la dosis en la orina al cabo de 7 días',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-47633', '47633', 'NOLOTIL 575 mg CAPSULAS DURAS (Boehringer Ingelheim Espana S.A.)', '2024-12-18', '2026-11-12'),
    rengPubchem(3111, 'metamizole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
