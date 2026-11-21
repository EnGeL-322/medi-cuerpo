import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nilotinib',
    nombre: 'Nilotinib',
    clase: 'Inhibidor de la tirosina quinasa BCR-ABL',
    sinonimos: [ 'nilotinib' ],
    formula: 'C28H22F3N7O',
    masaMolar: 529.5,
    smiles: 'CC1=C(C=C(C=C1)C(=O)NC2=CC(=CC(=C2)C(F)(F)F)N3C=C(N=C3)C)NC4=NC=CC(=N4)C5=CN=CC=C5',
    inchikey: 'HHZIURLSWUIHRB-UHFFFAOYSA-N',
    cid: 644241,
    iupac: '4-methyl-N-[3-(4-methylimidazol-1-yl)-5-(trifluoromethyl)phenyl]-3-[(4-pyridin-3-ylpyrimidin-2-yl)amino]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'nilotinib-oral',
      producto: 'NILOTINIB TEVA 150 MG CAPSULAS DURAS EFG',
      titular: 'Teva Gmbh',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '150 mg de nilotinib (como hidrocloruro dihidrato) por cápsula, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de nilotinib dihidrato',
        ref: {
          f: 'cima-89745',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: '150 mg de nilotinib (como hidrocloruro dihidrato)',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Crospovidona tipo A (E1202)',
        'Sílice coloidal anhidra (E551)',
        'Estearato de magnesio (E470b)',
        'Hipromelosa (E464)',
        'Carragenano (E407)',
        'Cloruro de potasio (E508)',
        'Eritrosina (E127)',
        'Óxido de hierro amarillo (E172)',
        'Óxido de hierro rojo (E172)',
        'Dióxido de titanio (E171)',
        'Agua purificada',
        'Tinta de impresión negra'
      ],
      usos: {
        t: 'Tratamiento de adultos y niños con leucemia mieloide crónica (LMC) con cromosoma Filadelfia positivo de nuevo diagnóstico, y de otras situaciones de LMC con resistencia o intolerancia previas.',
        ref: {
          f: 'cima-89745',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'pacientes adultos y pediátricos con leucemia mieloide crónica (LMC) cromosoma Filadelfia positivo, de nuevo diagnóstico',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-89745',
      advertencias: [
        {
          titulo: 'Mielosupresión',
          texto: 'El tratamiento se ha asociado a trombocitopenia, neutropenia y anemia.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'cima-89745',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El tratamiento con nilotinib se ha asociado a trombocitopenia, neutropenia y anemia',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Se ha observado que prolonga la repolarización cardíaca ventricular.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-89745',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se ha observado que nilotinib prolonga la repolarización cardiaca ventricular',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'El perfil de seguridad se basa en datos agrupados de 3.422 pacientes tratados con nilotinib en 13 estudios clínicos.',
          'FT 4.8',
          'El perfil de seguridad se basa en datos agrupados de 3.422 pacientes tratados con nilotinib en 13 estudios clínicos'
        ],
        [
          'Incluye a 2.414 pacientes adultos y pediátricos con LMC de nuevo diagnóstico en fase crónica.',
          'FT 4.8',
          'pacientes adultos y pediátricos con leucemia mieloide crónica (LMC) con cromosoma Filadelfia positivo de nuevo diagnóstico en fase crónica (5 estudios clínicos con 2.414 pacientes)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 150 mg de nilotinib (como hidrocloruro dihidrato) por cápsula, según la ficha técnica; el activo va como hidrocloruro de nilotinib dihidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos y niños con leucemia mieloide crónica (LMC) con cromosoma Filadelfia positivo de nuevo diagnóstico, y de otras situaciones de LMC con resistencia o intolerancia previas.',
    actua: 'Es un inhibidor potente de la actividad de la tirosina quinasa ABL de la oncoproteína BCR-ABL, tanto en líneas celulares como en células leucémicas primarias con cromosoma Filadelfia positivo.',
    recorrido: 'Se alcanzaron concentraciones pico 3 horas después de la administración oral; la absorción fue de aproximadamente el 30 %. Tras una dosis única marcada en voluntarios sanos, más del 90 % se eliminó en 7 días, sobre todo por las heces (94 % de la dosis); el nilotinib inalterado supuso el 69 %.'
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
          ref: { f: 'cima-89745', sec: '3 · Forma farmacéutica', cita: 'Cápsula dura (cápsula)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se alcanzaron concentraciones pico 3 horas después de la administración oral; la absorción fue de aproximadamente el 30 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se alcanzaron concentraciones pico 3 horas después de la administración oral; la absorción fue de aproximadamente el 30 %.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se alcanzaron concentraciones pico de nilotinib 3 horas después de la administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La absorción tras la administración oral fue de aproximadamente el 30 %; no se ha determinado la biodisponibilidad absoluta.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción de nilotinib después de la administración oral fue de aproximadamente el 30 %',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con la comida aumentaron la Cmax un 112 % y el AUC un 82 % respecto al ayuno en voluntarios sanos.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'cuando nilotinib se administró junto con la comida aumentaron la Cmax y el area bajo la curva de concentración plasmática-tiempo (AUC) de nilotinib en un 112 % y un 82 %, respectivamente',
            codigo: 'FT 5.2'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con la comida'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es de aproximadamente el 98 % según experimentos in vitro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es de aproximadamente el 98 % según experimentos in vitro.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas es de aproximadamente el 98 % en base a los experimentos in vitro',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Tirosina quinasa BCR-ABL',
        efecto: 'Es un inhibidor potente de la actividad de la tirosina quinasa ABL de la oncoproteína BCR-ABL, tanto en líneas celulares como en células leucémicas primarias con cromosoma Filadelfia positivo.',
        lugar: [ 'medula-osea', 'sangre' ],
        datos: [
          {
            t: 'Es un inhibidor potente de la actividad de la tirosina quinasa ABL de la oncoproteína BCR-ABL, tanto en líneas celulares como en células leucémicas primarias con cromosoma Filadelfia positivo.',
            ref: {
              f: 'cima-89745',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Nilotinib es un inhibidor potente de la actividad de la tirosina quinasa ABL de la oncoproteína BCR-ABL',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las principales vías metabólicas en voluntarios sanos son la oxidación y la hidroxilación; se metaboliza sobre todo por la CYP3A4, con posible contribución menor de la CYP2C8.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las principales vías metabólicas en voluntarios sanos son la oxidación y la hidroxilación; se metaboliza sobre todo por la CYP3A4, con posible contribución menor de la CYP2C8.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las principales vías metabólicas identificadas en voluntarios sanos son la oxidación y la hidroxilación',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Se metaboliza principalmente por la CYP3A4, con una posible contribución menor de la CYP2C8.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Nilotinib se metaboliza principalmente por CYP3A4, con una posible contribución menor de CYP2C8',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos de nilotinib',
          actividad: 'inactivo',
          nota: 'No contribuyen de forma significativa a la actividad; el nilotinib es el principal componente circulante.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Ninguno de los metabolitos contribuye significativamente a la actividad farmacológica de nilotinib',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única marcada en voluntarios sanos, más del 90 % se eliminó en 7 días, sobre todo por las heces (94 % de la dosis); el nilotinib inalterado supuso el 69 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única marcada en voluntarios sanos, más del 90 % se eliminó en 7 días, sobre todo por las heces (94 % de la dosis); el nilotinib inalterado supuso el 69 %.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'más del 90 % de la dosis se eliminó dentro de los siguientes 7 días, principalmente por las heces (94 % de la dosis)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación aparente con dosis múltiples fue de aproximadamente 17 horas.',
          ref: {
            f: 'cima-89745',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación aparente estimada a partir de la farmacocinética a dosis múltiples con dosis diarias fue de aproximadamente 17 horas',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones pico',
      valor: '3',
      unidad: 'h',
      analito: 'nilotinib',
      ref: {
        f: 'cima-89745',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Se alcanzaron concentraciones pico de nilotinib 3 horas después de la administración oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Absorción tras la administración oral',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'nilotinib',
      ref: {
        f: 'cima-89745',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La absorción de nilotinib después de la administración oral fue de aproximadamente el 30 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'nilotinib',
      condiciones: 'in vitro',
      ref: {
        f: 'cima-89745',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas plasmáticas es de aproximadamente el 98 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente',
      valor: '17 (aprox.)',
      unidad: 'h',
      analito: 'nilotinib',
      condiciones: 'dosis múltiples',
      ref: { f: 'cima-89745', sec: '5.2 · Propiedades farmacocinéticas', cita: 'fue de aproximadamente 17 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada por las heces',
      valor: '94',
      unidad: '% de la dosis',
      analito: 'nilotinib y metabolitos',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de nilotinib marcado',
      ref: { f: 'cima-89745', sec: '5.2 · Propiedades farmacocinéticas', cita: 'principalmente por las heces (94 % de la dosis)', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-89745', '89745', 'NILOTINIB TEVA 150 MG CAPSULAS DURAS EFG (Teva Gmbh)', '2026-03-25', '2026-11-15'),
    rengPubchem(644241, 'nilotinib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
