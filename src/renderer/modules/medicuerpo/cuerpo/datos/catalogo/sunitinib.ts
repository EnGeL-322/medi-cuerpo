import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sunitinib',
    nombre: 'Sunitinib',
    clase: 'Inhibidor de tirosina quinasas (antineoplásico)',
    sinonimos: [ 'sunitinib' ],
    formula: 'C22H27FN4O2',
    masaMolar: 398.5,
    smiles: 'CCN(CC)CCNC(=O)C1=C(NC(=C1C)/C=C\\2/C3=C(C=CC(=C3)F)NC2=O)C',
    inchikey: 'WINHZLLDWRZWRT-ATVHPVEESA-N',
    cid: 5329102,
    iupac: 'N-[2-(diethylamino)ethyl]-5-[(Z)-(5-fluoro-2-oxo-1H-indol-3-ylidene)methyl]-2,4-dimethyl-1H-pyrrole-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'sunitinib-oral',
      producto: 'SUNITINIB TEVA 25 MG CAPSULAS DURAS EFG',
      titular: 'Teva B.V.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '12,5, 25 o 50 mg de sunitinib por cápsula, según la ficha técnica',
      excipientes: [
        'Manitol',
        'Povidona K-25',
        'Croscarmelosa sódica',
        'Estearato de magnesio',
        'Gelatina',
        'Dióxido de titanio (E171)',
        'Óxido de hierro amarillo (E172)',
        'Óxido de hierro rojo (E172)',
        'Goma laca',
        'Óxido de hierro negro (E172)',
        'Propilenglicol',
        'Solución concentrada de amoniaco',
        'Hidróxido de potasio'
      ],
      usos: {
        t: 'Tratamiento de tumores malignos no resecables o metastásicos del estroma gastrointestinal (GIST) en adultos tras el fracaso del tratamiento con imatinib por resistencia o intolerancia.',
        ref: {
          f: 'cima-83278',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'para el tratamiento de tumores malignos no resecables y/o metastásicos del estroma gastrointestinal (GIST) en adultos después del fracaso al tratamiento con imatinib',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-83278',
      advertencias: [
        {
          titulo: 'Trastornos de la piel',
          texto: 'Puede aparecer despigmentación del pelo o de la piel durante el tratamiento.',
          organos: [ 'piel' ],
          ref: {
            f: 'cima-83278',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la despigmentación del pelo o la piel también puede ocurrir durante el tratamiento con sunitinib',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Inductores potentes de la CYP3A4',
          texto: 'Su administración concomitante debe evitarse porque puede reducir la concentración plasmática de sunitinib.',
          organos: [ 'higado', 'sangre' ],
          ref: {
            f: 'cima-83278',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La administración concomitante de inductores potentes del CYP3A4 debe evitarse, ya que puede reducir la concentración plasmática de sunitinib',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más graves, algunas mortales: insuficiencia renal, insuficiencia cardíaca, embolismo pulmonar, perforación gastrointestinal y hemorragias.',
          'FT 4.8',
          'Las reacciones adversas más graves asociadas a sunitinib, algunas de ellas con desenlace mortal, son insuficiencia renal, insuficiencia cardiaca, embolismo pulmonar, perforación gastrointestinal y hemorragias'
        ],
        [
          'Entre las más frecuentes de cualquier grado: disminución del apetito, alteración del gusto, hipertensión y fatiga.',
          'FT 4.8',
          'incluyeron: disminución del apetito, alteración del gusto, hipertensión, fatiga'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 12,5, 25 o 50 mg de sunitinib por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de tumores malignos no resecables o metastásicos del estroma gastrointestinal (GIST) en adultos tras el fracaso del tratamiento con imatinib por resistencia o intolerancia.',
    actua: 'Inhibe varios receptores tirosina quinasa implicados en el crecimiento tumoral, la formación de nuevos vasos del tumor y la progresión metastásica del cáncer.',
    recorrido: 'Tras la administración oral, el pico de concentración se alcanza entre 6 y 12 horas después. Se excreta principalmente por las heces (61 %); la eliminación renal del fármaco sin metabolizar y de sus metabolitos es del 16 % de la dosis.'
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
          ref: { f: 'cima-83278', sec: '3 · Forma farmacéutica', cita: 'Cápsulas de gelatina dura con la tapa opaca de color anaranjado', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral, el pico de concentración se alcanza entre 6 y 12 horas después.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral, el pico de concentración se alcanza entre 6 y 12 horas después.',
          ref: {
            f: 'cima-83278',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la concentración máxima entre 6 a 12 horas (T max ) tras la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los alimentos no tienen efecto sobre la biodisponibilidad.',
          ref: {
            f: 'cima-83278',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los alimentos no tienen efecto sobre la biodisponibilidad de sunitinib',
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
      ocurre: 'La unión a proteínas del plasma humano in vitro es del 95 % para sunitinib y del 90 % para su metabolito activo principal.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma humano in vitro es del 95 % para sunitinib y del 90 % para su metabolito activo principal.',
          ref: {
            f: 'cima-83278',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la unión de sunitinib y su metabolito activo principal a proteínas plasmáticas humanas en los ensayos in vitro fue del 95% y del 90%, respectivamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución es elevado (2230 L), lo que indica que se distribuye a los tejidos.',
          ref: {
            f: 'cima-83278',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución (V d ) para sunitinib fue elevado (2230 L)',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores tirosina quinasa (entre ellos PDGFR)',
        efecto: 'Inhibe varios receptores tirosina quinasa implicados en el crecimiento tumoral, la formación de nuevos vasos del tumor y la progresión metastásica del cáncer.',
        lugar: [ 'tejidos', 'vasos' ],
        datos: [
          {
            t: 'Inhibe varios receptores tirosina quinasa implicados en el crecimiento tumoral, la formación de nuevos vasos del tumor y la progresión metastásica del cáncer.',
            ref: {
              f: 'cima-83278',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Sunitinib inhibe múltiples receptores tirosina kinasa (RTKs) que están implicados en el crecimiento tumoral, la neoangiogénesis y la progresión metastásica del cáncer',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza principalmente por la CYP3A4, que origina su metabolito activo principal, el desetil sunitinib, también metabolizado por la misma enzima.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza principalmente por la CYP3A4, que origina su metabolito activo principal, el desetil sunitinib, también metabolizado por la misma enzima.',
          ref: { f: 'cima-83278', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Sunitinib se metaboliza principalmente por CYP3A4', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desetil sunitinib',
          actividad: 'activo',
          nota: 'Metabolito activo principal; supone del 23 % al 37 % de la exposición total.',
          ref: { f: 'cima-83278', sec: '5.2 · Propiedades farmacocinéticas', cita: 'su metabolito activo principal, desetil sunitinib', codigo: 'FT 5.2' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta principalmente por las heces (61 %); la eliminación renal del fármaco sin metabolizar y de sus metabolitos es del 16 % de la dosis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta principalmente por las heces (61 %); la eliminación renal del fármaco sin metabolizar y de sus metabolitos es del 16 % de la dosis.',
          ref: {
            f: 'cima-83278',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se excreta principalmente a través de las heces (61%), siendo la eliminación renal del principio activo sin metabolizar y de sus metabolitos del 16% de la dosis administrada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación de sunitinib es de aproximadamente 40-60 horas.',
          ref: { f: 'cima-83278', sec: '5.2 · Propiedades farmacocinéticas', cita: 'son de aproximadamente 40-60 horas', codigo: 'FT 5.2' },
          poblacion: 'voluntarios sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de concentración',
      valor: '6-12',
      unidad: 'h',
      analito: 'sunitinib',
      ref: {
        f: 'cima-83278',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la concentración máxima entre 6 a 12 horas (T max ) tras la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95',
      unidad: '%',
      analito: 'sunitinib',
      condiciones: 'in vitro',
      ref: {
        f: 'cima-83278',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la unión de sunitinib y su metabolito activo principal a proteínas plasmáticas humanas en los ensayos in vitro fue del 95% y del 90%, respectivamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '2.230',
      unidad: 'L',
      analito: 'sunitinib',
      ref: {
        f: 'cima-83278',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen aparente de distribución (V d ) para sunitinib fue elevado (2230 L)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '40-60 (aprox.)',
      unidad: 'h',
      analito: 'sunitinib',
      poblacion: 'voluntarios sanos',
      ref: { f: 'cima-83278', sec: '5.2 · Propiedades farmacocinéticas', cita: 'son de aproximadamente 40-60 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado por las heces',
      valor: '61',
      unidad: '% de la dosis',
      analito: 'sunitinib y metabolitos',
      ref: { f: 'cima-83278', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Se excreta principalmente a través de las heces (61%)', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-83278', '83278', 'SUNITINIB TEVA 25 MG CAPSULAS DURAS EFG (Teva B.V.)', '2025-10-10', '2026-11-15'),
    rengPubchem(5329102, 'sunitinib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
