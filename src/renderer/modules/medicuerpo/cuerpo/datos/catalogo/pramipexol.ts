import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pramipexol',
    nombre: 'Pramipexol',
    clase: 'Agonista dopaminérgico (antiparkinsoniano)',
    sinonimos: [ 'pramipexole' ],
    formula: 'C10H17N3S',
    masaMolar: 211.33,
    smiles: 'CCCN[C@H]1CCC2=C(C1)SC(=N2)N',
    inchikey: 'FASDKYOPVNHBLU-ZETCQYMHSA-N',
    cid: 119570,
    iupac: '(6S)-6-N-propyl-4,5,6,7-tetrahydro-1,3-benzothiazole-2,6-diamine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'pramipexol-oral',
      producto: 'PRAMIPEXOL CINFA 0,7 mg COMPRIMIDOS EFG',
      titular: 'Laboratorios Cinfa S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '0,18 mg de pramipexol base (como dihidrocloruro de pramipexol monohidrato) por comprimido, y otras concentraciones, según la ficha técnica',
      sal: {
        nombre: 'Dihidrocloruro de pramipexol monohidrato',
        ref: { f: 'cima-72270', sec: '2 · Composición cualitativa y cuantitativa', cita: '0.25 mg de dihidrocloruro de pramipexol', codigo: 'FT 2' }
      },
      excipientes: [ 'Manitol (E-421)', 'Almidón de maíz', 'Sílice coloidal anhidra', 'Povidona (E-1201)', 'Estearato de magnesio (E-470b)' ],
      usos: {
        t: 'Tratamiento de los signos y síntomas de la enfermedad de Parkinson idiopática en adultos, sola o con levodopa.',
        ref: {
          f: 'cima-72270',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'tratamiento de los signos y síntomas de la enfermedad de Parkinson idiopática, solo (sin levodopa) o en combinación con levodopa',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-72270',
      advertencias: [
        {
          titulo: 'Alucinaciones',
          texto: 'Son una reacción adversa conocida del tratamiento con agonistas dopaminérgicos y levodopa.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-72270',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Las alucinaciones constituyen una reacción adversa conocida en el tratamiento con agonistas dopaminérgicos y levodopa',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Discinesia',
          texto: 'Con levodopa, en la enfermedad de Parkinson avanzada, pueden aparecer discinesias durante el ajuste inicial de pramipexol.',
          organos: [ 'encefalo', 'musculos' ],
          ref: {
            f: 'cima-72270',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'pueden producirse discinesias durante la titulación inicial de la dosis de pramipexol',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Presentaron al menos una reacción adversa el 63 % de los tratados con pramipexol y el 52 % de los tratados con placebo.',
          'FT 4.8',
          'El 63% de los pacientes con pramipexol y el 52% de los pacientes con placebo presentaron como mínimo una reacción adversa'
        ],
        [
          'La mayoría de las reacciones adversas comienzan al inicio de la terapia y tienden a desaparecer en el transcurso del tratamiento.',
          'FT 4.8',
          'La mayoría de las reacciones adversas normalmente comienzan al inicio de la terapia y tienden a desaparecer en el transcurso del tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0,18 mg de pramipexol base (como dihidrocloruro de pramipexol monohidrato) por comprimido, y otras concentraciones, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de los signos y síntomas de la enfermedad de Parkinson idiopática en adultos, sola o con levodopa.',
    actua: 'Es un agonista dopaminérgico con actividad intrínseca completa que se une con alta selectividad a los receptores de la subfamilia D2 (con afinidad preferente por los D3) y atenúa el déficit motor al estimular los receptores del cuerpo estriado.',
    recorrido: 'La absorción es rápida y completa: la biodisponibilidad absoluta supera el 90 % y las concentraciones máximas en plasma se alcanzan entre 1 y 3 horas. La excreción renal del pramipexol inalterado es la vía principal de eliminación: alrededor del 90 % de una dosis marcada sale por el riñón y menos del 2 % por las heces.'
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
          ref: { f: 'cima-72270', sec: '3 · Forma farmacéutica', cita: 'Los comprimidos son blancos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es rápida y completa: la biodisponibilidad absoluta supera el 90 % y las concentraciones máximas en plasma se alcanzan entre 1 y 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es rápida y completa: la biodisponibilidad absoluta supera el 90 % y las concentraciones máximas en plasma se alcanzan entre 1 y 3 horas.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la absorción de pramipexol es rápida y completa. La biodisponibilidad absoluta es superior al 90% y las concentraciones máximas en plasma se alcanzan entre 1 y 3 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos no se redujo la magnitud de la absorción, pero sí su velocidad.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración conjunta con alimentos no redujo la magnitud pero sí la velocidad de absorción',
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
      ocurre: 'En el ser humano la unión a proteínas es muy baja (menos del 20 %) y el volumen de distribución es grande (400 litros).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En el ser humano la unión a proteínas es muy baja (menos del 20 %) y el volumen de distribución es grande (400 litros).',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la unión a proteínas de pramipexol es muy baja (< 20%) y el volumen de distribución es grande (400 l)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En la rata se observaron concentraciones elevadas en el tejido cerebral, unas 8 veces superiores a las del plasma.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En la rata, se observaron elevadas concentraciones en tejido cerebral',
            codigo: 'FT 5.2'
          },
          poblacion: 'rata'
        }
      ],
      accion: {
        diana: 'Receptores dopaminérgicos D2 y D3',
        efecto: 'Es un agonista dopaminérgico con actividad intrínseca completa que se une con alta selectividad a los receptores de la subfamilia D2 (con afinidad preferente por los D3) y atenúa el déficit motor al estimular los receptores del cuerpo estriado.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un agonista dopaminérgico con actividad intrínseca completa que se une con alta selectividad a los receptores de la subfamilia D2 (con afinidad preferente por los D3) y atenúa el déficit motor al estimular los receptores del cuerpo estriado.',
            ref: {
              f: 'cima-72270',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Pramipexol es un agonista dopaminérgico con actividad intrínseca completa que se une con alta selectividad y especificidad a los receptores dopaminérgicos de la subfamilia D2',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en el hombre solo en una pequeña proporción.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en el hombre solo en una pequeña proporción.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Pramipexol se metaboliza en el hombre sólo en pequeña proporción',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción renal del pramipexol inalterado es la vía principal de eliminación: alrededor del 90 % de una dosis marcada sale por el riñón y menos del 2 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción renal del pramipexol inalterado es la vía principal de eliminación: alrededor del 90 % de una dosis marcada sale por el riñón y menos del 2 % por las heces.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción renal de pramipexol inalterado constituye la vía principal de eliminación',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación va de 8 horas en jóvenes a 12 horas en pacientes de edad avanzada.',
          ref: {
            f: 'cima-72270',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación (t½) oscila entre 8 horas en las personas jóvenes y 12 horas en pacientes de edad avanzada',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '> 90',
      unidad: '%',
      analito: 'pramipexol',
      ref: { f: 'cima-72270', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es superior al 90%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-3',
      unidad: 'h',
      analito: 'pramipexol',
      ref: {
        f: 'cima-72270',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'las concentraciones máximas en plasma se alcanzan entre 1 y 3 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '< 20',
      unidad: '%',
      analito: 'pramipexol',
      ref: { f: 'cima-72270', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la unión a proteínas de pramipexol es muy baja (< 20%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '400',
      unidad: 'L',
      analito: 'pramipexol',
      ref: { f: 'cima-72270', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el volumen de distribución es grande (400 l)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '8-12',
      unidad: 'h',
      analito: 'pramipexol',
      ref: {
        f: 'cima-72270',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación (t½) oscila entre 8 horas en las personas jóvenes y 12 horas en pacientes de edad avanzada',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada por el riñón',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'pramipexol y metabolitos',
      condiciones: 'dosis marcada con 14C',
      ref: {
        f: 'cima-72270',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 90% de la dosis marcada con C 14 se elimina a través del riñón',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-72270', '72270', 'PRAMIPEXOL CINFA 0,7 mg COMPRIMIDOS EFG (Laboratorios Cinfa S.A.)', '2024-02-20', '2026-11-15'),
    rengPubchem(119570, 'pramipexole', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
