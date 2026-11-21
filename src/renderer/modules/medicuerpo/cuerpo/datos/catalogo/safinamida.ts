import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'safinamida',
    nombre: 'Safinamida',
    clase: 'Inhibidor reversible de la monoaminooxidasa B (antiparkinsoniano)',
    sinonimos: [ 'safinamide' ],
    formula: 'C17H19FN2O2',
    masaMolar: 302.34,
    smiles: 'C[C@@H](C(=O)N)NCC1=CC=C(C=C1)OCC2=CC(=CC=C2)F',
    inchikey: 'NEMGRZFTLSKBAP-LBPRGKRZSA-N',
    cid: 131682,
    iupac: '(2S)-2-[[4-[(3-fluorophenyl)methoxy]phenyl]methylamino]propanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'safinamida-oral',
      producto: 'SAFINAMIDA VIVANTA 50 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG',
      titular: 'Vivanta Generics S.R.O.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '50 mg de safinamida (como mesilato) por comprimido (hay también de 100 mg), según la ficha técnica',
      sal: {
        nombre: 'Mesilato de safinamida',
        ref: {
          f: 'cima-90441',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'safinamida mesilato equivalente a 50 mg de safinamida',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Celulosa microcristalina',
        'Crospovidona tipo A',
        'Sílice coloidal anhidra',
        'Estearato de magnesio',
        'Hipromelosa (E464)',
        'Macrogol 6000 (E1521)',
        'Mica (E555)',
        'Dióxido de titanio (E171)',
        'Óxido de hierro rojo (E172)'
      ],
      usos: {
        t: 'Tratamiento de adultos con enfermedad de Parkinson idiopática como complemento de una dosis estable de levodopa, sola o con otros medicamentos antiparkinsonianos.',
        ref: {
          f: 'cima-90441',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Safinamida está indicada para el tratamiento de pacientes adultos con enfermedad de Parkinson (EP) idiopática como tratamiento complementario',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-90441',
      advertencias: [
        {
          titulo: 'Uso con fluoxetina o fluvoxamina',
          texto: 'Se debe evitar el uso concomitante con fluoxetina o fluvoxamina.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-90441',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En concreto, se debe evitar el uso concomitante de safinamida con fluoxetina o fluvoxamina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La más frecuente fue la discinesia en pacientes que recibían safinamida con levodopa sola o con otros tratamientos antiparkinsonianos.',
          'FT 4.8',
          'La discinesia fue la reacción adversa más frecuente notificada en los pacientes que recibieron tratamiento con safinamida junto con L-dopa sola o en combinación con otros tratamientos antiparkinsonianos'
        ],
        [
          'Con el uso concomitante de ISRS, IRSN, antidepresivos tricíclicos o tetracíclicos e inhibidores de la MAO se producen reacciones adversas graves.',
          'FT 4.8',
          'Se sabe que con el uso concomitante de ISRSs, IRSNs, antidepresivos tricíclicos/tetracíclicos e inhibidores de la MAO se producen reacciones adversas graves'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg de safinamida (como mesilato) por comprimido (hay también de 100 mg), según la ficha técnica; el activo va como mesilato de safinamida. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con enfermedad de Parkinson idiopática como complemento de una dosis estable de levodopa, sola o con otros medicamentos antiparkinsonianos.',
    actua: 'Actúa por un mecanismo dopaminérgico y no dopaminérgico; es un inhibidor reversible y altamente selectivo de la MAO de tipo B, que aumenta los niveles extracelulares de dopamina.',
    recorrido: 'La absorción es rápida tras una dosis oral individual y múltiple; el Tmax es de 1,8-2,8 horas tras la dosis en ayunas. La eliminación urinaria de safinamida sin modificar fue inferior al 10 %; el aclaramiento total es de 4,6 L/h (bajo).'
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
          ref: { f: 'cima-90441', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es rápida tras una dosis oral individual y múltiple; el Tmax es de 1,8-2,8 horas tras la dosis en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es rápida tras una dosis oral individual y múltiple; el Tmax es de 1,8-2,8 horas tras la dosis en ayunas.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción de safinamida es rápida tras una dosis oral individual y múltiple. Alcanza la Tmáx en el intervalo de 1,8-2,8 h tras la dosis en ayunas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es elevada (95 %): se absorbe casi por completo y el metabolismo de primer paso es insignificante.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es elevada (95 %), lo que indica que safinamida se absorbe casi por completo tras la administración oral',
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
      ocurre: 'El volumen de distribución (Vss) es de aproximadamente 165 litros, 2,5 veces el volumen corporal, lo que indica una amplia distribución extravascular; la fijación a proteínas del plasma es del 88-90 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución (Vss) es de aproximadamente 165 litros, 2,5 veces el volumen corporal, lo que indica una amplia distribución extravascular; la fijación a proteínas del plasma es del 88-90 %.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución (Vss) es de aproximadamente 165 l, es decir, 2,5 veces el volumen corporal, lo que indica una amplia distribución extravascular de safinamida',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La fijación a las proteínas plasmáticas es del 88-90 %.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fijación a las proteínas plasmáticas de safinamida es del 88-90 %',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Monoaminooxidasa B (MAO-B)',
        efecto: 'Actúa por un mecanismo dopaminérgico y no dopaminérgico; es un inhibidor reversible y altamente selectivo de la MAO de tipo B, que aumenta los niveles extracelulares de dopamina.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Actúa por un mecanismo dopaminérgico y no dopaminérgico; es un inhibidor reversible y altamente selectivo de la MAO de tipo B, que aumenta los niveles extracelulares de dopamina.',
            ref: {
              f: 'cima-90441',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Safinamida es un inhibidor reversible y altamente selectivo de la MAO tipo B',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina casi exclusivamente por metabolismo, mediado sobre todo por amidasas de alta capacidad aún no caracterizadas; la eliminación urinaria del fármaco sin modificar fue inferior al 10 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina casi exclusivamente por metabolismo, mediado sobre todo por amidasas de alta capacidad aún no caracterizadas; la eliminación urinaria del fármaco sin modificar fue inferior al 10 %.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En los humanos, safinamida se elimina casi exclusivamente a través del metabolismo (la eliminación urinaria de safinamida sin modificar fue <10 %), mediada principalmente por amidasas de alta capacidad',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido de safinamida (NW-1153) y demás metabolitos',
          actividad: 'inactivo',
          nota: 'Ninguno está activo a nivel farmacológico.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Ninguno de estos metabolitos está activo a nivel farmacológico',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación urinaria de safinamida sin modificar fue inferior al 10 %; el aclaramiento total es de 4,6 L/h (bajo).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación urinaria de safinamida sin modificar fue inferior al 10 %; el aclaramiento total es de 4,6 L/h (bajo).',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la eliminación urinaria de safinamida sin modificar fue <10 %',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El aclaramiento total era de 4,6 L/h, por lo que se clasifica como una sustancia de bajo aclaramiento.',
          ref: {
            f: 'cima-90441',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se determinó que el aclaramiento total era de 4,6 l/h',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Tmax (en ayunas)',
      valor: '1,8-2,8',
      unidad: 'h',
      analito: 'safinamida',
      condiciones: 'en ayunas',
      ref: {
        f: 'cima-90441',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Alcanza la Tmáx en el intervalo de 1,8-2,8 h tras la dosis en ayunas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '95',
      unidad: '%',
      analito: 'safinamida',
      ref: { f: 'cima-90441', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es elevada (95 %)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución (Vss)',
      valor: '165 (aprox.)',
      unidad: 'L',
      analito: 'safinamida',
      ref: {
        f: 'cima-90441',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución (Vss) es de aproximadamente 165 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '88-90',
      unidad: '%',
      analito: 'safinamida',
      ref: {
        f: 'cima-90441',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La fijación a las proteínas plasmáticas de safinamida es del 88-90 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '4,6',
      unidad: 'L/h',
      analito: 'safinamida',
      ref: { f: 'cima-90441', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Se determinó que el aclaramiento total era de 4,6 l/h', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado inalterado por la orina',
      valor: '< 10',
      unidad: '% de la dosis',
      analito: 'safinamida',
      ref: {
        f: 'cima-90441',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la eliminación urinaria de safinamida sin modificar fue <10 %',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-90441', '90441', 'SAFINAMIDA VIVANTA 50 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG (Vivanta Generics S.R.O.)', '2025-07-08', '2026-11-15'),
    rengPubchem(131682, 'safinamide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
