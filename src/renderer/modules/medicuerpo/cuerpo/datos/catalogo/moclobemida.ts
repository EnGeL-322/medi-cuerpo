import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'moclobemida',
    nombre: 'Moclobemida',
    clase: 'Antidepresivo inhibidor reversible de la monoaminooxidasa A (IRMA)',
    sinonimos: [ 'moclobemide', 'Manerix' ],
    formula: 'C13H17ClN2O2',
    masaMolar: 268.74,
    smiles: 'C1COCCN1CCNC(=O)C2=CC=C(C=C2)Cl',
    inchikey: 'YHXISWVBGDMDLQ-UHFFFAOYSA-N',
    cid: 4235,
    iupac: '4-chloro-N-(2-morpholin-4-ylethyl)benzamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'moclobemida-oral',
      producto: 'MANERIX 300 COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Viatris Healthcare Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '150 o 300 mg de moclobemida por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz',
        'Povidona',
        'Carboximetilalmidón sódico (de patata)',
        'Estearato de magnesio',
        'Hipromelosa',
        'Etilcelulosa',
        'Macrogol 6000',
        'Talco',
        'Dióxido de titanio (E 171)'
      ],
      usos: {
        t: 'Tratamiento de la depresión mayor.',
        ref: { f: 'cima-60824', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la depresión mayor', codigo: 'FT 4.1' }
      },
      fuente: 'cima-60824',
      advertencias: [
        {
          titulo: 'Inquietud y agitación',
          texto: 'En los pacientes con depresión pueden aparecer signos de inquietud y agitación.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-60824',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En los pacientes con depresión pueden aparecer signos de inquietud y agitación',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Síntomas de esquizofrenia',
          texto: 'Puede exacerbar los síntomas de esquizofrenia en pacientes depresivos con psicosis esquizofrénicas o esquizoafectivas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-60824',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'el tratamiento con moclobemida puede exacerbar los síntomas de esquizofrenia de pacientes depresivos con psicosis esquizofrénicas o esquizoafectivas',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Muy frecuentes: trastornos del sueño.', 'FT 4.8', 'Muy frecuentes trastornos del sueño' ],
        [ 'Muy frecuentes: mareos y cefaleas.', 'FT 4.8', 'Mareos, cefaleas' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 150 o 300 mg de moclobemida por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la depresión mayor.',
    actua: 'Es un antidepresivo que actúa sobre el sistema neurotransmisor monoaminérgico del cerebro mediante una inhibición reversible de la monoaminooxidasa, sobre todo del subtipo A.',
    recorrido: 'Tras la administración oral se absorbe por completo desde el tubo digestivo hacia la circulación portal; las concentraciones máximas se alcanzan en una hora. Se elimina rápidamente: menos del 1 % de la dosis sale inalterado por vía renal y los metabolitos también se excretan por el riñón.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-60824', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral se absorbe por completo desde el tubo digestivo hacia la circulación portal; las concentraciones máximas se alcanzan en una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe por completo desde el tubo digestivo hacia la circulación portal; las concentraciones máximas se alcanzan en una hora.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras su administración oral, la moclobemida se absorbe por completo desde el tracto gastrointestinal a la circulación portal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones máximas del fármaco se alcanzan en un plazo de una hora tras la administración.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones máximas del fármaco se alcanzan en un plazo de una hora tras la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Por la saturación del primer paso metabólico durante la primera semana, la biodisponibilidad oral aumenta del 60 % al 80 %.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'resulta en una biodisponibilidad oral que aumenta del 60 al 80% a partir de ese momento',
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
      ocurre: 'Es lipofílica; el volumen de distribución es de unos 1,2 L/kg y la fijación a las proteínas del plasma, sobre todo a la albúmina, es baja (50 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Es lipofílica; el volumen de distribución es de unos 1,2 L/kg y la fijación a las proteínas del plasma, sobre todo a la albúmina, es baja (50 %).',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fijación del fármaco a las proteínas plasmáticas, especialmente a la albúmina, es baja (50%)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de unos 1,2 L/kg.',
          ref: { f: 'cima-60824', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de unos 1,2 L/Kg', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Monoaminooxidasa A (MAO-A)',
        efecto: 'Es un antidepresivo que actúa sobre el sistema neurotransmisor monoaminérgico del cerebro mediante una inhibición reversible de la monoaminooxidasa, sobre todo del subtipo A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un antidepresivo que actúa sobre el sistema neurotransmisor monoaminérgico del cerebro mediante una inhibición reversible de la monoaminooxidasa, sobre todo del subtipo A.',
            ref: {
              f: 'cima-60824',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La moclobemida es un antidepresivo que actúa sobre el sistema neurotransmisor cerebral monoaminérgico mediante una inhibición reversible de la monoaminooxidasa, fundamentalmente del subtipo A (IRMA)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza casi por completo antes de eliminarse, sobre todo por reacciones oxidativas sobre el grupo morfolínico de la molécula.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza casi por completo antes de eliminarse, sobre todo por reacciones oxidativas sobre el grupo morfolínico de la molécula.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolismo se produce fundamentalmente mediante reacciones oxidativas sobre el grupo morfolínico de la molécula',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos activos observados in vitro y en animales',
          actividad: 'activo',
          nota: 'Activos in vitro o en animales, pero con concentraciones plasmáticas muy pequeñas en el ser humano.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos activos observados en los experimentos in vitro o con animales, alcanzan sólo concentraciones plasmáticas muy pequeñas en el ser humano',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina rápidamente: menos del 1 % de la dosis sale inalterado por vía renal y los metabolitos también se excretan por el riñón.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina rápidamente: menos del 1 % de la dosis sale inalterado por vía renal y los metabolitos también se excretan por el riñón.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Menos del 1% de la dosis se elimina inalterada por vía renal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación con dosis múltiples es de aproximadamente 3 horas, entre 2 y 4 horas en la mayoría de los pacientes.',
          ref: {
            f: 'cima-60824',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la semivida de eliminación durante dosis múltiples (300 mg dos veces al día) es aproximadamente de 3 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'moclobemida',
      ref: {
        f: 'cima-60824',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Las concentraciones máximas del fármaco se alcanzan en un plazo de una hora tras la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral tras la primera semana',
      valor: '60-80',
      unidad: '%',
      analito: 'moclobemida',
      ref: {
        f: 'cima-60824',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'resulta en una biodisponibilidad oral que aumenta del 60 al 80% a partir de ese momento',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '50',
      unidad: '%',
      analito: 'moclobemida',
      ref: { f: 'cima-60824', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es baja (50%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1,2 (aprox.)',
      unidad: 'L/kg',
      analito: 'moclobemida',
      ref: { f: 'cima-60824', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de unos 1,2 L/Kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación con dosis múltiples',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'moclobemida',
      ref: {
        f: 'cima-60824',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la semivida de eliminación durante dosis múltiples (300 mg dos veces al día) es aproximadamente de 3 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '20-50 (aprox.)',
      unidad: 'L/h',
      analito: 'moclobemida',
      ref: { f: 'cima-60824', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El aclaramiento total es de aproximadamente 20-50 L/h', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-60824', '60824', 'MANERIX 300 COMPRIMIDOS RECUBIERTOS CON PELICULA (Viatris Healthcare Limited)', '2025-06-12', '2026-11-15'),
    rengPubchem(4235, 'moclobemide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
