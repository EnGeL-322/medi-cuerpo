import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eslicarbazepina',
    nombre: 'Eslicarbazepina',
    clase: 'Antiepiléptico (bloqueante de canales de sodio)',
    sinonimos: [ 'eslicarbazepine', 'acetato de eslicarbazepina', 'Escarpilo' ],
    formula: 'C17H16N2O3',
    masaMolar: 296.32,
    smiles: 'CC(=O)O[C@H]1CC2=CC=CC=C2N(C3=CC=CC=C13)C(=O)N',
    inchikey: 'QIALRBLEEWJACW-INIZCTEOSA-N',
    cid: 179344,
    iupac: '[(5S)-11-carbamoyl-5,6-dihydrobenzo[b][1]benzazepin-5-yl] acetate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'eslicarbazepina-oral',
      producto: 'ESCARPILO 1200 MG COMPRIMIDOS',
      titular: 'Neuraxpharm Spain S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '400 mg y 1200 mg de acetato de eslicarbazepina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Acetato de eslicarbazepina',
        ref: { f: 'cima-88210', sec: '2 · Composición cualitativa y cuantitativa', cita: '400 mg de acetato de eslicarbazepina', codigo: 'FT 2' }
      },
      excipientes: [ 'Croscarmelosa sódica', 'Povidona K30', 'Estearato de magnesio' ],
      usos: {
        t: 'Monoterapia de las crisis de inicio parcial, con o sin generalización secundaria, en adultos con epilepsia recién diagnosticada; también terapia adyuvante en adultos, adolescentes y niños mayores de 6 años.',
        ref: {
          f: 'cima-88210',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'monoterapia para el tratamiento de crisis de inicio parcial, con o sin generalización secundaria, en adultos con epilepsia recién diagnosticada',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-88210',
      advertencias: [
        {
          titulo: 'Ideación suicida',
          texto: 'Se han notificado conductas e ideación suicidas en pacientes tratados con antiepilépticos en diversas indicaciones.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-88210',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado conductas e ideación suicidas en pacientes tratados con principios activos antiepilépticos en diversas indicaciones',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En los ensayos, el 51 % de los pacientes tratados tuvo reacciones adversas.',
          'FT 4.8',
          'el 51% de los pacientes experimentaron reacciones adversas'
        ],
        [
          'Fueron por lo general de intensidad leve a moderada y aparecieron sobre todo en las primeras semanas de tratamiento.',
          'FT 4.8',
          'Las reacciones adversas fueron por lo general de intensidad leve a moderada, y se produjeron predominantemente durante las primeras semanas del tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 400 mg y 1200 mg de acetato de eslicarbazepina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Monoterapia de las crisis de inicio parcial, con o sin generalización secundaria, en adultos con epilepsia recién diagnosticada; también terapia adyuvante en adultos, adolescentes y niños mayores de 6 años.',
    actua: 'Se desconoce el mecanismo preciso; in vitro, el acetato de eslicarbazepina y sus metabolitos estabilizan el estado inactivado de los canales de sodio activados por voltaje y evitan el disparo neuronal repetitivo.',
    recorrido: 'El acetato de eslicarbazepina se convierte ampliamente en eslicarbazepina; sus niveles plasmáticos suelen estar por debajo del límite de cuantificación. Los metabolitos se eliminan de la circulación sistémica principalmente por excreción renal, como fármaco inalterado y como conjugado glucurónido.'
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
          ref: { f: 'cima-88210', sec: '3 · Forma farmacéutica', cita: 'Comprimidos de color blanco a blanquecino, oblongos, biconvexos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El acetato de eslicarbazepina se convierte ampliamente en eslicarbazepina; sus niveles plasmáticos suelen estar por debajo del límite de cuantificación.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El acetato de eslicarbazepina se convierte ampliamente en eslicarbazepina; sus niveles plasmáticos suelen estar por debajo del límite de cuantificación.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El acetato de eslicarbazepina es convertido ampliamente en eslicarbazepina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La Cmax de la eslicarbazepina se alcanza entre 2 y 3 horas después de la dosis.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La C max de la eslicarbazepina se alcanza entre 2 a 3 horas después de la dosis',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Puede asumirse que la biodisponibilidad es elevada, porque los metabolitos recuperados en la orina fueron más del 90 % de una dosis.',
          ref: { f: 'cima-88210', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Puede asumirse que la biodisponibilidad es elevada', codigo: 'FT 5.2' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión de la eslicarbazepina a las proteínas del plasma es relativamente baja (menos del 40 %) e independiente de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión de la eslicarbazepina a las proteínas del plasma es relativamente baja (menos del 40 %) e independiente de la concentración.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión de la eslicarbazepina a proteínas plasmáticas es relativamente baja (<40%), y es independiente de la concentración',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio activados por voltaje',
        efecto: 'Se desconoce el mecanismo preciso; in vitro, el acetato de eslicarbazepina y sus metabolitos estabilizan el estado inactivado de los canales de sodio activados por voltaje y evitan el disparo neuronal repetitivo.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se desconoce el mecanismo preciso; in vitro, el acetato de eslicarbazepina y sus metabolitos estabilizan el estado inactivado de los canales de sodio activados por voltaje y evitan el disparo neuronal repetitivo.',
            ref: {
              f: 'cima-88210',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'los estudios electrofisiológicos in vitro indican que tanto el acetato de eslicarbazepina como sus metabolitos estabilizan el estado inactivado de los canales de sodio activados por voltaje',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El acetato de eslicarbazepina se biotransforma rápida y ampliamente en su metabolito activo principal, la eslicarbazepina, por metabolismo hidrolítico de primer paso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El acetato de eslicarbazepina se biotransforma rápida y ampliamente en su metabolito activo principal, la eslicarbazepina, por metabolismo hidrolítico de primer paso.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El acetato de eslicarbazepina se biotransforma rápida y ampliamente en su principal metabolito activo eslicarbazepina por metabolismo hidrolítico de primer paso',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Eslicarbazepina',
          actividad: 'activo',
          nota: 'Metabolito activo principal.',
          ref: { f: 'cima-88210', sec: '5.2 · Propiedades farmacocinéticas', cita: 'principal metabolito activo eslicarbazepina', codigo: 'FT 5.2' }
        },
        {
          nombre: 'R-licarbazepina y oxcarbazepina',
          actividad: 'activo',
          nota: 'Metabolitos menores del plasma, también activos.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos menores en plasma son R-licarbazepina y oxcarbazepina, que demostraron ser activos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Los metabolitos se eliminan de la circulación sistémica principalmente por excreción renal, como fármaco inalterado y como conjugado glucurónido.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Los metabolitos se eliminan de la circulación sistémica principalmente por excreción renal, como fármaco inalterado y como conjugado glucurónido.',
          ref: {
            f: 'cima-88210',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos del acetato de eslicarbazepina se eliminan de la circulación sistémica principalmente por excreción renal, en forma de fármaco inalterado y conjugado glucurónido',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida aparente de la eslicarbazepina fue de 10-20 horas en sujetos sanos y de 13-20 horas en pacientes epilépticos adultos.',
          ref: { f: 'cima-88210', sec: '5.2 · Propiedades farmacocinéticas', cita: '10-20 horas y 13-20 horas, respectivamente', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de eslicarbazepina',
      valor: '2-3',
      unidad: 'h',
      analito: 'eslicarbazepina',
      ref: {
        f: 'cima-88210',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La C max de la eslicarbazepina se alcanza entre 2 a 3 horas después de la dosis',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 40',
      unidad: '%',
      analito: 'eslicarbazepina',
      ref: {
        f: 'cima-88210',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión de la eslicarbazepina a proteínas plasmáticas es relativamente baja (<40%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida aparente de la eslicarbazepina',
      valor: '13-20',
      unidad: 'h',
      analito: 'eslicarbazepina',
      poblacion: 'pacientes epilépticos adultos',
      ref: {
        f: 'cima-88210',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la semivida aparente de la eslicarbazepina fue de 10-20 horas y 13-20 horas, respectivamente',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-88210', '88210', 'ESCARPILO 1200 MG COMPRIMIDOS (Neuraxpharm Spain S.L.)', '2024-05-28', '2026-11-15'),
    rengPubchem(179344, 'eslicarbazepine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
