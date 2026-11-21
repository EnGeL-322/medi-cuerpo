import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'ketorolaco',
  presentaciones: [
    {
  id: 'ketorolaco-inyectable',
  producto: 'Ketorolac Tromethamine · solución inyectable',
  titular: 'HOSPIRA, INC.',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION, SOLUTION',
  liberacion: 'no declarada',
  concentraciones: 'Solución inyectable de trometamol de ketorolaco con alcohol al 10 % (p/v), con varias concentraciones, según la etiqueta',
  excipientes: [ 'alcohol', 'water', 'sodium chloride', 'sodium hydroxide', 'hydrochloric acid' ],
  usos: {
    t: 'Tratamiento de corta duración (hasta 5 días) del dolor agudo moderadamente intenso que requiere analgesia de nivel opioide, en adultos.',
    ref: { f: 'dailymed-ketorolaco-inyectable', sec: '1 · Indicaciones', cita: 'is indicated for the short-term (≤5 days)', codigo: '34067-9' }
  },
  fuente: 'dailymed-ketorolaco-inyectable',
  advertencias: [
    {
      titulo: 'Riesgo gastrointestinal',
      texto: 'Puede causar úlceras pépticas, hemorragia o perforación del estómago o del intestino, que pueden ser mortales.',
      organos: [ 'estomago', 'intestino-delgado' ],
      ref: {
        f: 'dailymed-ketorolaco-inyectable',
        sec: 'Advertencia destacada',
        cita: 'Ketorolac tromethamine can cause peptic ulcers, gastrointestinal bleeding and/or perforation of the stomach or intestines, which can be fatal',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Eventos cardiovasculares trombóticos',
      texto: 'Los AINE aumentan el riesgo de eventos trombóticos cardiovasculares graves, como infarto de miocardio e ictus.',
      organos: [ 'corazon', 'encefalo' ],
      ref: {
        f: 'dailymed-ketorolaco-inyectable',
        sec: 'Advertencia destacada',
        cita: 'cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'La etiqueta pide vigilar las complicaciones graves: úlcera, hemorragia y perforación gastrointestinales, hemorragia posoperatoria, insuficiencia renal aguda, reacciones anafilácticas e insuficiencia hepática.',
      '34084-4',
      'Practitioners should be alert for the severe complications of treatment with ketorolac tromethamine, such as G.I. ulceration, bleeding and perforation'
    ],
    [
      'La frecuencia de las reacciones adversas aumenta con las dosis más altas.',
      '34084-4',
      'Adverse reaction rates increase with higher doses of ketorolac tromethamine'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intramuscular', 'intravenosa' ],
  formaNormalizada: 'solucion-inyectable',
  excipientesRiesgo: [
    {
      nombre: 'Etanol',
      motivo: 'La solución contiene alcohol (10 % p/v) y, por ese contenido, la etiqueta contraindica el ketorolaco por vía intratecal o epidural.',
      vias: [ 'intramuscular', 'intravenosa' ],
      ref: {
        f: 'dailymed-ketorolaco-inyectable',
        sec: 'Advertencia destacada',
        cita: 'is CONTRAINDICATED for intrathecal or epidural administration due to its alcohol content',
        codigo: '34066-1'
      }
    }
  ],
  recorridoPropio: {
    resumen: 'En adultos, la extensión de la biodisponibilidad con las formas oral e intramuscular fue igual a la de un bolo intravenoso. La vía principal de eliminación del ketorolaco y sus metabolitos es la renal; el 91 % de la dosis se excreta por la orina y el 6 % por las heces.',
    etapas: {
      liberacion: {
        organos: [ 'sangre', 'musculos' ],
        llega: 'La solución llega al músculo o a la sangre, según la vía.',
        ocurre: 'Solución inyectable con alcohol: ya está disuelta y se inyecta en un músculo o en una vena.',
        sigue: 'Desde el músculo el fármaco pasa a la sangre; por la vena entra directamente.',
        datos: [
          {
            t: 'Solución inyectable con alcohol: ya está disuelta y se inyecta en un músculo o en una vena.',
            ref: { f: 'dailymed-ketorolaco-inyectable', sec: '11 · Descripción', cita: 'The solutions contain 10% (w/v) alcohol, USP', codigo: '34089-3' }
          }
        ]
      },
      absorcion: {
        organos: [ 'musculos', 'sangre' ],
        organosGenerales: [],
        llega: 'Desde el músculo el fármaco pasa a la sangre.',
        ocurre: 'En adultos, la extensión de la biodisponibilidad con las formas oral e intramuscular fue igual a la de un bolo intravenoso.',
        sigue: 'Con la vía intravenosa entra directamente en la sangre; después circula hacia los tejidos.',
        datos: [
          {
            t: 'En adultos, la extensión de la biodisponibilidad con las formas oral e intramuscular fue igual a la de un bolo intravenoso.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'In adults, the extent of bioavailability following administration of the oral and intramuscular forms of ketorolac tromethamine was equal to that following an intravenous bolus',
              codigo: '34090-1'
            }
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'El fármaco circula en la sangre unido a proteínas.',
        ocurre: 'El racemato se une en un 99 % a proteínas y el volumen aparente tras una distribución completa fue de unos 13 litros.',
        sigue: 'Llega al hígado, donde se metaboliza, y se elimina sobre todo por la orina.',
        datos: [
          {
            t: 'El racemato se une en un 99 % a proteínas y el volumen aparente tras una distribución completa fue de unos 13 litros.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'The ketorolac tromethamine racemate has been shown to be highly protein bound (99%)',
              codigo: '34090-1'
            }
          },
          {
            t: 'El volumen aparente medio tras una distribución completa fue de unos 13 litros.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'The mean apparent volume (V β ) of ketorolac tromethamine following complete distribution was approximately 13 liters',
              codigo: '34090-1'
            }
          }
        ],
        accion: {
          diana: 'Prostaglandina sintetasa (mecanismo no conocido por completo)',
          efecto: 'El mecanismo de acción, como el de otros AINE, no se conoce por completo y podría estar relacionado con la inhibición de la prostaglandina sintetasa; la actividad biológica se asocia a la forma S.',
          lugar: [ 'tejidos' ],
          datos: [
            {
              t: 'El mecanismo de acción, como el de otros AINE, no se conoce por completo y podría estar relacionado con la inhibición de la prostaglandina sintetasa; la actividad biológica se asocia a la forma S.',
              ref: {
                f: 'dailymed-ketorolaco-inyectable',
                sec: '12 · Farmacología clínica',
                cita: 'mechanism of action of ketorolac, like that of other NSAIDs, is not completely understood but may be related to prostaglandin synthetase inhibition',
                codigo: '34090-1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza en gran parte en el hígado; los productos son formas hidroxiladas y conjugadas del fármaco original.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza en gran parte en el hígado; los productos son formas hidroxiladas y conjugadas del fármaco original.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'Ketorolac tromethamine is largely metabolized in the liver',
              codigo: '34090-1'
            }
          },
          {
            t: 'Los productos del metabolismo son formas hidroxiladas y conjugadas del fármaco original.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'The metabolic products are hydroxylated and conjugated forms of the parent drug',
              codigo: '34090-1'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Formas hidroxiladas y conjugadas',
            actividad: 'desconocida',
            nota: 'La etiqueta no indica su actividad.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'The metabolic products are hydroxylated and conjugated forms of the parent drug',
              codigo: '34090-1'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La vía principal de eliminación del ketorolaco y sus metabolitos es la renal; el 91 % de la dosis se excreta por la orina y el 6 % por las heces.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La vía principal de eliminación del ketorolaco y sus metabolitos es la renal; el 91 % de la dosis se excreta por la orina y el 6 % por las heces.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'The principal route of elimination of ketorolac and its metabolites is renal',
              codigo: '34090-1'
            }
          },
          {
            t: 'La semivida del racemato se ha descrito entre 5 y 6 horas.',
            ref: {
              f: 'dailymed-ketorolaco-inyectable',
              sec: '12 · Farmacología clínica',
              cita: 'the half-life for the racemate has been reported to lie within the range of 5 to 6 hours',
              codigo: '34090-1'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ketorolaco-inyectable', '8accbb78-fc64-45d5-69b0-35c23a1d2a2e', 'KETOROLAC TROMETHAMINE INJECTION, SOLUTION', 'Ketorolac Tromethamine', '36', '2026-07-21', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'vd',
    nombre: 'Volumen aparente tras una distribución completa',
    valor: '13 (aprox.)',
    unidad: 'L',
    analito: 'ketorolaco',
    ref: {
      f: 'dailymed-ketorolaco-inyectable',
      sec: '12 · Farmacología clínica',
      cita: 'The mean apparent volume (V β ) of ketorolac tromethamine following complete distribution was approximately 13 liters',
      codigo: '34090-1'
    },
    presentacion: 'Ketorolac Tromethamine · solución inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas',
    valor: '99',
    unidad: '%',
    analito: 'ketorolaco',
    ref: {
      f: 'dailymed-ketorolaco-inyectable',
      sec: '12 · Farmacología clínica',
      cita: 'The ketorolac tromethamine racemate has been shown to be highly protein bound (99%)',
      codigo: '34090-1'
    },
    presentacion: 'Ketorolac Tromethamine · solución inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida del racemato',
    valor: '5-6',
    unidad: 'h',
    analito: 'ketorolaco',
    ref: {
      f: 'dailymed-ketorolaco-inyectable',
      sec: '12 · Farmacología clínica',
      cita: 'the half-life for the racemate has been reported to lie within the range of 5 to 6 hours',
      codigo: '34090-1'
    },
    presentacion: 'Ketorolac Tromethamine · solución inyectable'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada por la orina',
    valor: '91',
    unidad: '% de la dosis',
    analito: 'ketorolaco',
    ref: { f: 'dailymed-ketorolaco-inyectable', sec: '12 · Farmacología clínica', cita: '% Dose excreted in urine = 91', codigo: '34090-1' },
    presentacion: 'Ketorolac Tromethamine · solución inyectable'
  },
  {
    magnitud: 'heces',
    nombre: 'Dosis excretada por las heces',
    valor: '6',
    unidad: '% de la dosis',
    analito: 'ketorolaco',
    ref: { f: 'dailymed-ketorolaco-inyectable', sec: '12 · Farmacología clínica', cita: '% Dose excreted in feces = 6', codigo: '34090-1' },
    presentacion: 'Ketorolac Tromethamine · solución inyectable'
  }
]
} satisfies RengExtensionFicha
