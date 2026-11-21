import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sulpirida',
    nombre: 'Sulpirida',
    clase: 'Antipsicótico (benzamida)',
    sinonimos: [ 'sulpiride', 'Psicocen' ],
    formula: 'C15H23N3O4S',
    masaMolar: 341.4,
    smiles: 'CCN1CCCC1CNC(=O)C2=C(C=CC(=C2)S(=O)(=O)N)OC',
    inchikey: 'BGRJTUBHPOOWDU-UHFFFAOYSA-N',
    cid: 5355,
    iupac: 'N-[(1-ethylpyrrolidin-2-yl)methyl]-2-methoxy-5-sulfamoylbenzamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'sulpirida-oral',
      producto: 'PSICOCEN 50 mg CAPSULAS',
      titular: 'Especialidades Farmaceuticas Centrum S.A.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '50 mg de sulpirida por cápsula, según la ficha técnica',
      excipientes: [ 'Lactosa', 'Estearato magnésico' ],
      usos: {
        t: 'Entre otras indicaciones, tratamiento de los trastornos depresivos con síntomas psicóticos, en combinación con antidepresivos.',
        ref: {
          f: 'cima-51836',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de los trastornos depresivos con síntomas psicóticos en combinación con antidepresivos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-51836',
      advertencias: [
        {
          titulo: 'Prolongación del intervalo QT',
          texto: 'Puede inducir la prolongación del intervalo QT, que puede potenciar el riesgo de arritmias ventriculares graves como las torsades de pointes.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-51836',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Sulpirida puede inducir la prolongación del intervalo QT',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Frecuente: hiperprolactinemia.', 'FT 4.8', 'Frecuentes: hiperprolactinemia' ],
        [ 'Poco frecuente: leucopenia.', 'FT 4.8', 'Poco frecuentes: leucopenia' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 50 mg de sulpirida por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Entre otras indicaciones, tratamiento de los trastornos depresivos con síntomas psicóticos, en combinación con antidepresivos.',
    actua: 'Antagoniza de forma específica los receptores dopaminérgicos D2 y D3.',
    recorrido: 'Por vía oral se absorbe dentro de las 4,5 horas posteriores a la administración; la biodisponibilidad de las formas orales oscila entre el 25 % y el 35 %, con amplias variaciones individuales. Se excreta principalmente por el riñón, por filtrado glomerular; el aclaramiento renal es normalmente igual al total.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-51836', sec: '3 · Forma farmacéutica', cita: 'Cápsulas de color naranja opaco y blanco opaco', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Por vía oral se absorbe dentro de las 4,5 horas posteriores a la administración; la biodisponibilidad de las formas orales oscila entre el 25 % y el 35 %, con amplias variaciones individuales.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Por vía oral se absorbe dentro de las 4,5 horas posteriores a la administración; la biodisponibilidad de las formas orales oscila entre el 25 % y el 35 %, con amplias variaciones individuales.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Por vía oral, sulpirida se absorbe dentro de las 4,5 horas posteriores a la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad de las formas orales oscila entre el 25 % y el 35 %, con amplias variaciones interindividuales.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad de las formas orales oscila entre 25% y el 35%, con amplias variaciones interindividuales',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado', 'rinones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Menos del 40 % del fármaco está ligado a proteínas del plasma; difunde rápidamente por los tejidos, sobre todo por el hígado y el riñón, y poco al cerebro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Menos del 40 % del fármaco está ligado a proteínas del plasma; difunde rápidamente por los tejidos, sobre todo por el hígado y el riñón, y poco al cerebro.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Menos de un 40% del fármaco se encuentra ligado a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Difunde rápidamente por los tejidos corporales, en especial por el hígado y el riñón; hay poca difusión en el cerebro.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sulpirida difunde rápidamente por los tejidos corporales, en especial por hígado y riñón',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores dopaminérgicos D2 y D3',
        efecto: 'Antagoniza de forma específica los receptores dopaminérgicos D2 y D3.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Antagoniza de forma específica los receptores dopaminérgicos D2 y D3.',
            ref: {
              f: 'cima-51836',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Sulpirida antagoniza de forma específica los receptores dopaminérgicos D2 y D3',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza de forma activa en humanos.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza de forma activa en humanos.',
          ref: { f: 'cima-51836', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Sulpirida no se metaboliza activamente en humanos', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta principalmente por el riñón, por filtrado glomerular; el aclaramiento renal es normalmente igual al total.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta principalmente por el riñón, por filtrado glomerular; el aclaramiento renal es normalmente igual al total.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sulpirida se excreta principalmente por el riñón, por filtrado glomerular',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El 92 % de la dosis intramuscular se excreta por la orina de forma inalterada.',
          ref: {
            f: 'cima-51836',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El 92% de la dosis intramuscular se excreta por orina de forma inalterada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación plasmática es de 7 horas.',
          ref: { f: 'cima-51836', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación plasmática es de 7 horas', codigo: 'FT 5.2' }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad de las formas orales',
      valor: '25-35',
      unidad: '%',
      analito: 'sulpirida',
      ref: {
        f: 'cima-51836',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad de las formas orales oscila entre 25% y el 35%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 40',
      unidad: '%',
      analito: 'sulpirida',
      ref: {
        f: 'cima-51836',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Menos de un 40% del fármaco se encuentra ligado a proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en el equilibrio',
      valor: '0,94',
      unidad: 'L/kg',
      analito: 'sulpirida',
      ref: {
        f: 'cima-51836',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución en el estado de equilibrio es de 0,94 L/Kg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '7',
      unidad: 'h',
      analito: 'sulpirida',
      ref: { f: 'cima-51836', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación plasmática es de 7 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis intramuscular excretada inalterada por la orina',
      valor: '92',
      unidad: '% de la dosis',
      analito: 'sulpirida',
      condiciones: 'dosis intramuscular',
      origen: 'otra-via',
      ref: {
        f: 'cima-51836',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El 92% de la dosis intramuscular se excreta por orina de forma inalterada',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-51836', '51836', 'PSICOCEN 50 mg CAPSULAS (Especialidades Farmaceuticas Centrum S.A.)', '2015-10-08', '2026-11-15'),
    rengPubchem(5355, 'sulpiride', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
