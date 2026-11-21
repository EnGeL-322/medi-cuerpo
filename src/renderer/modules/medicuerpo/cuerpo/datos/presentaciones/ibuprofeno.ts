import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'ibuprofeno',
  presentaciones: [
    {
  id: 'ibuprofeno-cinfa-suspension',
  producto: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG',
  titular: 'Laboratorios Cinfa S.A.',
  mercado: 'España (UE)',
  forma: 'Suspensión oral',
  formaFuente: 'SUSPENSIÓN ORAL',
  liberacion: 'no declarada',
  concentraciones: '20 mg/mL de ibuprofeno, según la ficha técnica',
  excipientes: [
    'Glicerol (E-422)',
    'Maltitol líquido (E-965)',
    'Celulosa microcristalina',
    'Goma xantana',
    'Ácido cítrico anhidro',
    'Citrato sódico',
    'Benzoato de sodio (E-211)',
    'Polisorbato 80',
    'Sacarina sódica',
    'Aroma de naranja (contiene etanol y propilenglicol (E-1520))',
    'Agua purificada'
  ],
  usos: {
    t: 'Alivio sintomático de los dolores ocasionales leves o moderados y de los estados febriles en niños desde los 3 meses hasta los 12 años.',
    ref: {
      f: 'cima-66020',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Alivio sintomático de los dolores ocasionales leves o moderados. Estados febriles',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-66020',
  advertencias: [
    {
      titulo: 'Enmascaramiento de infecciones',
      texto: 'Puede enmascarar los síntomas de una infección y retrasar el inicio del tratamiento adecuado.',
      organos: [ 'sitio-infeccion' ],
      ref: {
        f: 'cima-66020',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Ibuprofeno puede enmascarar los síntomas de una infección, lo que puede retrasar el inicio del tratamiento adecuado',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las que se observan con mayor frecuencia son de naturaleza gastrointestinal.',
      'FT 4.8',
      'Las reacciones adversas que se observan con mayor frecuencia son de naturaleza gastrointestinal'
    ],
    [
      'Pueden producirse úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, sobre todo en personas de edad avanzada.',
      'FT 4.8',
      'Pueden producirse úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, especialmente en los pacientes de edad avanzada'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'suspension-oral',
  excipientesRiesgo: [
    {
      nombre: 'Maltitol',
      motivo: 'La ficha advierte de que contiene maltitol líquido: no deben tomarlo pacientes con intolerancia hereditaria a la fructosa y puede producir un efecto laxante leve.',
      vias: [ 'oral' ],
      ref: {
        f: 'cima-66020',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Los pacientes con intolerancia hereditaria a la fructosa (IHF) no deben tomar este medicamento',
        codigo: 'FT 4.4'
      }
    },
    {
      nombre: 'Benzoato de sodio',
      motivo: 'La ficha advierte de que el benzoato de sodio puede aumentar el riesgo de ictericia en recién nacidos.',
      vias: [ 'oral' ],
      ref: {
        f: 'cima-66020',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'El benzoato de sodio puede aumentar el riesgo de ictericia en los recién nacidos (hasta de 4 semanas de edad)',
        codigo: 'FT 4.4'
      }
    },
    {
      nombre: 'Propilenglicol',
      motivo: 'La ficha advierte de que la administración conjunta con un sustrato de la alcohol deshidrogenasa, como el etanol, puede causar reacciones adversas graves en recién nacidos.',
      vias: [ 'oral' ],
      ref: {
        f: 'cima-66020',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La administración conjunta con cualquier sustrato para el alcohol deshidrogenasa tal como el etanol puede provocar reacciones adversas graves en recién nacidos',
        codigo: 'FT 4.4'
      }
    }
  ],
  recorridoPropio: {
    resumen: 'Se absorbe rápido y de forma completa por vía oral; la biodisponibilidad es de un 80 %. La eliminación es sobre todo renal y se considera total al cabo de 24 horas; alrededor del 10 % sale sin cambios y el 90 % como metabolitos inactivos, sobre todo glucurónidos.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Suspensión oral: el principio activo ya está en suspensión líquida, de color blanco, homogénea tras agitación.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Suspensión oral: el principio activo ya está en suspensión líquida, de color blanco, homogénea tras agitación.',
            ref: { f: 'cima-66020', sec: '3 · Forma farmacéutica', cita: 'Suspensión de color blanco o prácticamente blanco y homogénea', codigo: 'FT 3' }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe rápido y de forma completa por vía oral; la biodisponibilidad es de un 80 %.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe rápido y de forma completa por vía oral; la biodisponibilidad es de un 80 %.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Ibuprofeno por vía oral se absorbe rápido y de forma completa. Su biodisponibilidad es de un 80%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'En adultos, el tmax de la suspensión fue de 1,2 horas (como figura en la ficha, «1, 2 h») y el AUC fue de 112,0 microgramos/ml·h.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'el tmax fue de 1, 2 h y el AUC fue de 112,0 microgramos/ml.h',
              codigo: 'FT 5.2'
            },
            poblacion: 'adultos',
            condiciones: 'suspensión oral'
          },
          {
            t: 'Con la comida, el pico de concentración plasmática baja un 30-50 % y se retrasa 30-60 minutos.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Cuando el medicamento es administrado durante la comida el pico de concentraciones plasmáticas se reduce en un 30-50% y el tiempo invertido para alcanzar el pico de concentraciones plasmáticas se retrasa en 30-60 minutos',
              codigo: 'FT 5.2'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'articulaciones' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'El grado de unión a proteínas plasmáticas es del 90-99 %; difunde bien, pasa al líquido sinovial, atraviesa la barrera placentaria y alcanza concentraciones muy bajas en la leche materna.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El grado de unión a proteínas plasmáticas es del 90-99 %; difunde bien, pasa al líquido sinovial, atraviesa la barrera placentaria y alcanza concentraciones muy bajas en la leche materna.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El grado de unión a proteínas plasmáticas es del 90-99%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Difunde bien y pasa a líquido sinovial, atraviesa la barrera placentaria y alcanza concentraciones muy bajas en la leche materna.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Difunde bien y pasa a líquido sinovial, atraviesa la barrera placentaria y alcanza concentraciones muy bajas en la leche materna',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Síntesis de prostaglandinas',
          efecto: 'Es un antiinflamatorio no esteroideo con marcadas propiedades antiinflamatorias, analgésicas y antipiréticas; su mecanismo se basa en inhibir la síntesis de prostaglandinas.',
          lugar: [ 'tejidos' ],
          datos: [
            {
              t: 'Es un antiinflamatorio no esteroideo con marcadas propiedades antiinflamatorias, analgésicas y antipiréticas; su mecanismo se basa en inhibir la síntesis de prostaglandinas.',
              ref: {
                f: 'cima-66020',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Ibuprofeno es un antiinflamatorio no esteroideo con marcadas propiedades antiinflamatorias, analgésicas, y antipiréticas',
                codigo: 'FT 5.1'
              }
            },
            {
              t: 'Las prostaglandinas desempeñan un papel esencial en la aparición de la fiebre, del dolor y de la inflamación.',
              ref: {
                f: 'cima-66020',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Su mecanismo de acción se basa en la inhibición de la síntesis de prostaglandinas',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Ibuprofeno y sus metabolitos se metabolizan ampliamente en el hígado por hidroxilación y carboxilación del grupo isobutilo, y los metabolitos carecen de actividad farmacológica.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Ibuprofeno y sus metabolitos se metabolizan ampliamente en el hígado por hidroxilación y carboxilación del grupo isobutilo, y los metabolitos carecen de actividad farmacológica.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Ibuprofeno y sus metabolitos son ampliamente metabolizados en el hígado por hidroxilación y carboxilación del grupo isobutilo y sus metabolitos carecen de actividad farmacológica',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos hidroxilados y carboxilados',
            actividad: 'inactivo',
            nota: 'Sin actividad farmacológica.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'sus metabolitos carecen de actividad farmacológica',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La eliminación es sobre todo renal y se considera total al cabo de 24 horas; alrededor del 10 % sale sin cambios y el 90 % como metabolitos inactivos, sobre todo glucurónidos.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La eliminación es sobre todo renal y se considera total al cabo de 24 horas; alrededor del 10 % sale sin cambios y el 90 % como metabolitos inactivos, sobre todo glucurónidos.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Un 10% aproximadamente se elimina de forma inalterada y un 90% se elimina en forma de metabolitos inactivos, principalmente como glucurónidos',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La eliminación tiene lugar principalmente a nivel renal y se considera total al cabo de 24 horas.',
            ref: {
              f: 'cima-66020',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La eliminación de ibuprofeno tiene lugar principalmente a nivel renal y se considera total al cabo de 24 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida plasmática es de unas 2 horas.',
            ref: { f: 'cima-66020', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su semivida plasmática es de unas 2 horas', codigo: 'FT 5.2' }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-66020', '66020', 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG (Laboratorios Cinfa S.A.)', '2024-11-15', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral',
    valor: '80',
    unidad: '%',
    analito: 'ibuprofeno',
    ref: { f: 'cima-66020', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su biodisponibilidad es de un 80%', codigo: 'FT 5.2' },
    presentacion: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG'
  },
  {
    magnitud: 'auc',
    nombre: 'AUC de la suspensión',
    valor: '112,0',
    unidad: 'µg·h/mL',
    analito: 'ibuprofeno',
    poblacion: 'adultos',
    condiciones: 'suspensión oral',
    ref: {
      f: 'cima-66020',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'el tmax fue de 1, 2 h y el AUC fue de 112,0 microgramos/ml.h',
      codigo: 'FT 5.2'
    },
    presentacion: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '90-99',
    unidad: '%',
    analito: 'ibuprofeno',
    ref: { f: 'cima-66020', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El grado de unión a proteínas plasmáticas es del 90-99%', codigo: 'FT 5.2' },
    presentacion: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida plasmática',
    valor: '2 (aprox.)',
    unidad: 'h',
    analito: 'ibuprofeno',
    ref: { f: 'cima-66020', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su semivida plasmática es de unas 2 horas', codigo: 'FT 5.2' },
    presentacion: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG'
  },
  {
    magnitud: 'orina',
    nombre: 'Eliminado sin cambios',
    valor: '10 (aprox.)',
    unidad: '% de la dosis',
    analito: 'ibuprofeno',
    ref: { f: 'cima-66020', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Un 10% aproximadamente se elimina de forma inalterada', codigo: 'FT 5.2' },
    presentacion: 'IBUPROFENO CINFA 20 MG/ML SUSPENSIÓN ORAL EFG'
  }
]
} satisfies RengExtensionFicha
