import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'manidipino',
    nombre: 'Manidipino',
    clase: 'Bloqueante de canales de calcio (dihidropiridina)',
    sinonimos: [ 'manidipine', 'Artedil' ],
    formula: 'C35H38N4O6',
    masaMolar: 610.7,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OCCN2CCN(CC2)C(C3=CC=CC=C3)C4=CC=CC=C4)C5=CC(=CC=C5)[N+](=O)[O-])C(=O)OC',
    inchikey: 'ANEBWFXPVPTEET-UHFFFAOYSA-N',
    cid: 4008,
    iupac: '5-O-[2-(4-benzhydrylpiperazin-1-yl)ethyl] 3-O-methyl 2,6-dimethyl-4-(3-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'manidipino-oral',
      producto: 'ARTEDIL 10 mg COMPRIMIDOS',
      titular: 'Chiesi España S.A.U.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '10 mg de hidrocloruro de manidipino por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de manidipino',
        ref: { f: 'cima-64634', sec: '2 · Composición cualitativa y cuantitativa', cita: 'Manidipino hidrocloruro, 10 mg', codigo: 'FT 2' }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz',
        'Hidroxipropilcelulosa poco sustituida (L-HPC-31)',
        'Hidroxipropilcelulosa (HPC-L)',
        'Estearato de magnesio',
        'Riboflavina (E-101)'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial esencial leve a moderada.',
        ref: { f: 'cima-64634', sec: '4.1 · Indicaciones terapéuticas', cita: 'Hipertensión arterial esencial leve a moderada', codigo: 'FT 4.1' }
      },
      fuente: 'cima-64634',
      advertencias: [
        {
          titulo: 'Disfunción hepática moderada',
          texto: 'Se administrará con precaución, ya que puede incrementarse el efecto antihipertensivo.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-64634',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En pacientes con disfunción hepática moderada, se administrará con precaución, ya que puede incrementarse el efecto antihipertensivo',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Disfunción ventricular izquierda',
          texto: 'Debe administrarse con precaución en pacientes con disfunción ventricular izquierda.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-64634',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'debe administrarse con precaución en pacientes con disfunción ventricular izquierda',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: palpitaciones, sofocos, edema, cefalea, vértigo y mareos.',
          'FT 4.8',
          'son: palpitaciones, sofocos, edema, cefalea, vértigo y mareos'
        ],
        [
          'Se atribuyen a sus propiedades vasodilatadoras.',
          'FT 4.8',
          'Estas reacciones se atribuyen a las propiedades vasodilatadoras de manidipino'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg de hidrocloruro de manidipino por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial esencial leve a moderada.',
    actua: 'Es una dihidropiridina bloqueadora del canal de calcio con actividad antihipertensiva y con efectos farmacodinámicos beneficiosos sobre la función renal.',
    recorrido: 'Tras la administración oral, las concentraciones plasmáticas máximas se alcanzan entre las 2 y las 3,5 horas; sufre efecto de primer paso. La eliminación se realiza principalmente por las heces (63 %) y, en menor proporción, por la orina (31 %).'
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
            f: 'cima-64634',
            sec: '3 · Forma farmacéutica',
            cita: 'Artedil 10 mg comprimidos: comprimidos ranurados redondos de color',
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
      ocurre: 'Tras la administración oral, las concentraciones plasmáticas máximas se alcanzan entre las 2 y las 3,5 horas; sufre efecto de primer paso.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, las concentraciones plasmáticas máximas se alcanzan entre las 2 y las 3,5 horas; sufre efecto de primer paso.',
          ref: {
            f: 'cima-64634',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración oral de manidipino, las concentraciones plasmáticas máximas se alcanzan entre las 2 y las 3,5 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La absorción aumenta en presencia de comida en el tracto gastrointestinal.',
          ref: {
            f: 'cima-64634',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción de manidipino aumenta en presencia de comida en el tracto gastrointestinal',
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
      ocurre: 'La unión a proteínas del plasma es del 99 % y el producto se distribuye ampliamente por los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 99 % y el producto se distribuye ampliamente por los tejidos.',
          ref: { f: 'cima-64634', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a proteínas plasmáticas es del 99%', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Canales de calcio',
        efecto: 'Es una dihidropiridina bloqueadora del canal de calcio con actividad antihipertensiva y con efectos farmacodinámicos beneficiosos sobre la función renal.',
        lugar: [ 'vasos', 'rinones' ],
        datos: [
          {
            t: 'Es una dihidropiridina bloqueadora del canal de calcio con actividad antihipertensiva y con efectos farmacodinámicos beneficiosos sobre la función renal.',
            ref: {
              f: 'cima-64634',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Manidipino es una dihidropiridina bloqueadora del canal de calcio con actividad antihipertensiva',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza extensamente, principalmente a nivel hepático.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza extensamente, principalmente a nivel hepático.',
          ref: {
            f: 'cima-64634',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se metaboliza extensamente, principalmente a nivel hepático',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación se realiza principalmente por las heces (63 %) y, en menor proporción, por la orina (31 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación se realiza principalmente por las heces (63 %) y, en menor proporción, por la orina (31 %).',
          ref: {
            f: 'cima-64634',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación se realiza principalmente a través de las heces (63%) y, en menor proporción, de la orina (31%)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras administraciones repetidas no se produce acumulación.',
          ref: {
            f: 'cima-64634',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de administraciones repetidas, no se produce acumulación',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-3,5',
      unidad: 'h',
      analito: 'manidipino',
      ref: {
        f: 'cima-64634',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'las concentraciones plasmáticas máximas se alcanzan entre las 2 y las 3,5 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99',
      unidad: '%',
      analito: 'manidipino',
      ref: { f: 'cima-64634', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a proteínas plasmáticas es del 99%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminado por las heces',
      valor: '63',
      unidad: '% de la dosis',
      analito: 'manidipino y metabolitos',
      ref: { f: 'cima-64634', sec: '5.2 · Propiedades farmacocinéticas', cita: 'principalmente a través de las heces (63%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado por la orina',
      valor: '31',
      unidad: '% de la dosis',
      analito: 'manidipino y metabolitos',
      ref: { f: 'cima-64634', sec: '5.2 · Propiedades farmacocinéticas', cita: 'de la orina (31%)', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-64634', '64634', 'ARTEDIL 10 mg COMPRIMIDOS (Chiesi España S.A.U.)', '2024-10-16', '2026-11-15'),
    rengPubchem(4008, 'manidipine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
