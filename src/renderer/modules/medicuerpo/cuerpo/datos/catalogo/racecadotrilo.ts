import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'racecadotrilo',
    nombre: 'Racecadotrilo',
    clase: 'Antidiarreico (inhibidor de la encefalinasa)',
    sinonimos: [ 'racecadotril', 'Tiorfan' ],
    formula: 'C21H23NO4S',
    masaMolar: 385.5,
    smiles: 'CC(=O)SCC(CC1=CC=CC=C1)C(=O)NCC(=O)OCC2=CC=CC=C2',
    inchikey: 'ODUOJXZPIYUATO-UHFFFAOYSA-N',
    cid: 107751,
    iupac: 'benzyl 2-[[2-(acetylsulfanylmethyl)-3-phenylpropanoyl]amino]acetate',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'racecadotrilo-oral',
      producto: 'TIORFAN 100 mg CAPSULAS DURAS',
      titular: 'Bioprojet Ferrer',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '100 mg de racecadotrilo por cápsula, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz pregelatinizado',
        'Estearato de magnesio',
        'Sílice coloidal anhidra',
        'Óxido de hierro amarillo (E172)',
        'Dióxido de titanio (E171)',
        'Gelatina'
      ],
      usos: {
        t: 'Tratamiento sintomático de la diarrea aguda en el adulto cuando no es posible el tratamiento causal.',
        ref: {
          f: 'cima-63286',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tiorfan está indicado para el tratamiento sintomático de la diarrea aguda en el adulto cuando no es posible el tratamiento causal',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-63286',
      advertencias: [
        {
          titulo: 'Diarrea crónica',
          texto: 'No se ha estudiado lo suficiente en la diarrea crónica.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'cima-63286',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Este producto no ha sido suficientemente estudiado en la diarrea crónica',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Deposiciones con sangre o pus',
          texto: 'Las deposiciones con sangre o pus y la fiebre pueden indicar bacterias invasivas u otra enfermedad grave.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'cima-63286',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La presencia de deposiciones con sangre o pus y fiebre puede indicar la presencia de bacterias invasivas causantes de la diarrea',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Hay datos de ensayos con 2.193 pacientes adultos con diarrea aguda tratados con racecadotrilo y 282 con placebo.',
          'FT 4.8',
          'Se dispone de datos de estudios clínicos en 2.193 pacientes adultos con diarrea aguda tratados con racecadotrilo y 282 tratados con placebo'
        ],
        [
          'Se han notificado reacciones cutáneas graves, incluida la reacción a fármaco con eosinofilia y síntomas sistémicos (DRESS).',
          'FT 4.8',
          'Se han notificado reacciones cutáneas adversas graves (SCAR) incluyendo reacción a fármaco con eosinofilia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 100 mg de racecadotrilo por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la diarrea aguda en el adulto cuando no es posible el tratamiento causal.',
    actua: 'Es un profármaco que se hidroliza a su metabolito activo, el tiorfán, inhibidor de la encefalinasa, una peptidasa de la membrana celular situada sobre todo en el epitelio del intestino delgado.',
    recorrido: 'Por vía oral se absorbe rápidamente. Se detectan metabolitos menores en orina y heces; la vida media, valorada como inhibición de la encefalinasa plasmática, es de aproximadamente 3 horas.'
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
          ref: { f: 'cima-63286', sec: '3 · Forma farmacéutica', cita: 'Cápsulas de color marfil', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Por vía oral se absorbe rápidamente.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Por vía oral se absorbe rápidamente.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Por vía oral, el racecadotrilo se absorbe rápidamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad no se modifica por la alimentación, pero el pico de la actividad se retrasa aproximadamente una hora y media.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad del racecadotrilo no se modifica por la alimentación pero el pico de la actividad se retrasa aproximadamente una hora y media',
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
      ocurre: 'El 90 % del metabolito activo se une a las proteínas del plasma, principalmente a la albúmina; el fármaco no se une de forma significativa a las células de la sangre.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 90 % del metabolito activo se une a las proteínas del plasma, principalmente a la albúmina; el fármaco no se une de forma significativa a las células de la sangre.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se une a las proteínas plasmáticas, principalmente a la albúmina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El fármaco no se unió a las células de la sangre en una medida significativa.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el fármaco no se unió a células de la sangre en una medida significativa',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Encefalinasa',
        efecto: 'Es un profármaco que se hidroliza a su metabolito activo, el tiorfán, inhibidor de la encefalinasa, una peptidasa de la membrana celular situada sobre todo en el epitelio del intestino delgado.',
        lugar: [ 'intestino-delgado' ],
        datos: [
          {
            t: 'Es un profármaco que se hidroliza a su metabolito activo, el tiorfán, inhibidor de la encefalinasa, una peptidasa de la membrana celular situada sobre todo en el epitelio del intestino delgado.',
            ref: {
              f: 'cima-63286',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Racecadotrilo es un pro-fármaco que necesita hidrolizarse a su metabolito activo tiorfan, el cual es un inhibidor de la encefalinasa, peptidasa de la membrana celular situada en varios tejidos, de forma notable en el epitelio del intestino delgado',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se hidroliza rápidamente al metabolito activo, que a su vez se transforma en metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se hidroliza rápidamente al metabolito activo, que a su vez se transforma en metabolitos inactivos.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El racecadotrilo se hidroliza rápidamente a (RS)-N-(1-oxo-2-(mercaptometil)-3-fenilpropil)glicina, el metabolito activo, que a su vez se transforma en metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo (tiorfán)',
          actividad: 'activo',
          nota: 'Metabolito activo; se transforma después en metabolitos inactivos.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el metabolito activo, que a su vez se transforma en metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Cuatro metabolitos inactivos principales',
          actividad: 'inactivo',
          nota: 'Inactivos.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se transforma en metabolitos inactivos identificados como sulfóxido de S-metil tiorfano, S-metil tiorfano, ácido 2-metanosulfonilometil propiónico y ácido 2-metilsulfonilometil propiónico',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se detectan metabolitos menores en orina y heces; la vida media, valorada como inhibición de la encefalinasa plasmática, es de aproximadamente 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se detectan metabolitos menores en orina y heces; la vida media, valorada como inhibición de la encefalinasa plasmática, es de aproximadamente 3 horas.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Otros metabolitos menores también fueron detectados y cuantificados en orina y heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media, valorada como inhibición de la encefalinasa plasmática, es de aproximadamente 3 horas.',
          ref: {
            f: 'cima-63286',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vida media del racecadotrilo, valorada como inhibición de la encefalinasa plasmática, es de aproximadamente 3 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión del metabolito activo a proteínas plasmáticas',
      valor: '90',
      unidad: '%',
      analito: 'metabolito activo del racecadotrilo',
      ref: {
        f: 'cima-63286',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se une a las proteínas plasmáticas, principalmente a la albúmina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media (como inhibición de la encefalinasa plasmática)',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'racecadotrilo',
      ref: { f: 'cima-63286', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente 3 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-63286', '63286', 'TIORFAN 100 mg CAPSULAS DURAS (Bioprojet Ferrer)', '2025-05-07', '2026-11-15'),
    rengPubchem(107751, 'racecadotril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
