import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'paliperidona',
  presentaciones: [
    {
  id: 'paliperidona-sustenna',
  producto: 'INVEGA SUSTENNA · solución inyectable',
  titular: 'JANSSEN PHARMACEUTICALS, INC.',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION',
  liberacion: 'no declarada',
  concentraciones: 'Suspensión inyectable de liberación prolongada de palmitato de paliperidona en jeringas precargadas monodosis, con cinco concentraciones, según la etiqueta',
  excipientes: [
    'Polisorbato 20',
    'Macrogol 4000',
    'Ácido cítrico monohidrato',
    'Fosfato disódico anhidro',
    'Fosfato monosódico monohidrato',
    'Hidróxido de sodio',
    'Agua para inyección'
  ],
  usos: {
    t: 'Esquizofrenia en adultos y trastorno esquizoafectivo en adultos, solo o como complemento de estabilizadores del ánimo o antidepresivos.',
    ref: {
      f: 'dailymed-paliperidona-sustenna',
      sec: '1 · Indicaciones',
      cita: 'INVEGA SUSTENNA (paliperidone palmitate) is indicated for the treatment of',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-paliperidona-sustenna',
  advertencias: [
    {
      titulo: 'Mortalidad en personas mayores con demencia',
      texto: 'Las personas mayores con psicosis por demencia tratadas con antipsicóticos tienen un mayor riesgo de muerte; el medicamento no está aprobado en esos pacientes.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-paliperidona-sustenna',
        sec: 'Advertencia destacada',
        cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Prolongación del intervalo QT',
      texto: 'La etiqueta advierte de evitar su uso con medicamentos que también alargan el intervalo QT y en pacientes con factores de riesgo de QT prolongado.',
      organos: [ 'corazon' ],
      ref: {
        f: 'dailymed-paliperidona-sustenna',
        sec: '5 · Advertencias y precauciones',
        cita: 'QT Prolongation: Avoid use with drugs that also increase QT interval and in patients with risk factors for prolonged QT interval',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes: reacciones en el lugar de la inyección, somnolencia o sedación, mareo, acatisia y trastorno extrapiramidal.',
      '34084-4',
      'The most common adverse reactions (incidence ≥ 5% and occurring at least twice as often as placebo) were injection site reactions, somnolence/sedation, dizziness, akathisia, and extrapyramidal disorder'
    ],
    [
      'Entre las reacciones graves tratadas con más detalle figuran la mortalidad en ancianos con demencia, las reacciones cerebrovasculares, el síndrome neuroléptico maligno, la prolongación del QT y la discinesia tardía.',
      '34084-4',
      'Neuroleptic malignant syndrome'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intramuscular' ],
  formaNormalizada: 'suspension-inyectable',
  recorridoPropio: {
    resumen: 'Por su solubilidad en agua extremadamente baja, el palmitato de paliperidona se disuelve lentamente tras la inyección intramuscular, se hidroliza a paliperidona y se absorbe a la circulación sistémica. En el estudio con paliperidona oral marcada, cerca del 80 % de la radiactividad se recuperó en la orina y el 11 % en las heces; la semivida aparente mediana tras una dosis única de la inyección fue de 25 a 49 días.',
    etapas: {
      liberacion: {
        organos: [ 'musculos' ],
        llega: 'La suspensión queda depositada en el músculo, en el lugar de la inyección.',
        ocurre: 'Suspensión acuosa inyectable de liberación prolongada, en jeringa precargada: queda como depósito en el músculo, donde se disuelve muy despacio.',
        sigue: 'El fármaco se disuelve despacio en el depósito y pasa poco a poco a la sangre.',
        datos: [
          {
            t: 'Suspensión acuosa inyectable de liberación prolongada, en jeringa precargada: queda como depósito en el músculo, donde se disuelve muy despacio.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '3 · Formas y concentraciones',
              cita: 'white to off-white aqueous extended-release injectable suspension for intramuscular injection',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'musculos', 'sangre' ],
        organosGenerales: [],
        llega: 'El fármaco pasa lentamente del depósito muscular a la sangre.',
        ocurre: 'Por su solubilidad en agua extremadamente baja, el palmitato de paliperidona se disuelve lentamente tras la inyección intramuscular, se hidroliza a paliperidona y se absorbe a la circulación sistémica.',
        sigue: 'Circula con la sangre hacia los tejidos.',
        datos: [
          {
            t: 'Por su solubilidad en agua extremadamente baja, el palmitato de paliperidona se disuelve lentamente tras la inyección intramuscular, se hidroliza a paliperidona y se absorbe a la circulación sistémica.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'dissolves slowly after intramuscular injection before being hydrolyzed to paliperidone and absorbed into the systemic circulation',
              codigo: '43682-4'
            }
          },
          {
            t: 'La liberación del fármaco empieza desde el día 1 y puede durar hasta 126 días.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'The release of the drug starts as early as day 1 and lasts for as long as 126 days',
              codigo: '43682-4'
            }
          },
          {
            t: 'El tiempo mediano hasta la concentración plasmática máxima es de 13 días.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'maximum plasma concentrations at a median T max of 13 days',
              codigo: '43682-4'
            }
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'El volumen aparente de distribución de la paliperidona es de 391 L y su unión a proteínas del plasma, del 74 %.',
        sigue: 'Llega al hígado y a los riñones, por donde se elimina.',
        datos: [
          {
            t: 'El volumen aparente de distribución de la paliperidona es de 391 L y su unión a proteínas del plasma, del 74 %.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'the apparent volume of distribution of paliperidone is 391 L',
              codigo: '43682-4'
            }
          },
          {
            t: 'La unión a proteínas plasmáticas de la paliperidona racémica es del 74 %.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'The plasma protein binding of racemic paliperidone is 74%',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Receptores D2 y 5HT2A (mecanismo no claro)',
          efecto: 'El mecanismo de acción de la paliperidona no está claro; el efecto terapéutico podría estar mediado por el antagonismo de los receptores centrales de dopamina D2 y de serotonina 5HT2A.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'El mecanismo de acción de la paliperidona no está claro; el efecto terapéutico podría estar mediado por el antagonismo de los receptores centrales de dopamina D2 y de serotonina 5HT2A.',
              ref: {
                f: 'dailymed-paliperidona-sustenna',
                sec: '12.1 · Mecanismo de acción',
                cita: 'The mechanism of action of paliperidone is unclear',
                codigo: '43679-0'
              }
            },
            {
              t: 'El palmitato de paliperidona se hidroliza a paliperidona, que es el principal metabolito activo de la risperidona.',
              ref: {
                f: 'dailymed-paliperidona-sustenna',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Paliperidone palmitate is hydrolyzed to paliperidone',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'En un estudio con paliperidona oral de liberación inmediata marcada, el 59 % de la dosis se excretó sin cambios por la orina, lo que indica que no se metaboliza mucho en el hígado.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'En un estudio con paliperidona oral de liberación inmediata marcada, el 59 % de la dosis se excretó sin cambios por la orina, lo que indica que no se metaboliza mucho en el hígado.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'paliperidone is not extensively metabolized in the liver',
              codigo: '43682-4'
            }
          },
          {
            t: 'Se han identificado cuatro vías metabólicas, ninguna con más del 10 % de la dosis: desalquilación, hidroxilación, deshidrogenación y escisión del benzisoxazol.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'none of which accounted for more than 10% of the dose: dealkylation, hydroxylation, dehydrogenation, and benzisoxazole scission',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Productos de cuatro vías metabólicas menores',
            actividad: 'desconocida',
            nota: 'Desalquilación, hidroxilación, deshidrogenación y escisión del benzisoxazol; la etiqueta no indica su actividad.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'none of which accounted for more than 10% of the dose: dealkylation, hydroxylation, dehydrogenation, and benzisoxazole scission',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'En el estudio con paliperidona oral marcada, cerca del 80 % de la radiactividad se recuperó en la orina y el 11 % en las heces; la semivida aparente mediana tras una dosis única de la inyección fue de 25 a 49 días.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'En el estudio con paliperidona oral marcada, cerca del 80 % de la radiactividad se recuperó en la orina y el 11 % en las heces; la semivida aparente mediana tras una dosis única de la inyección fue de 25 a 49 días.',
            ref: {
              f: 'dailymed-paliperidona-sustenna',
              sec: '12.3 · Farmacocinética',
              cita: 'Approximately 80% of the administered radioactivity was recovered in urine and 11% in the feces',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida aparente mediana de la paliperidona tras una dosis única de la inyección osciló entre 25 y 49 días.',
            ref: { f: 'dailymed-paliperidona-sustenna', sec: '12.3 · Farmacocinética', cita: 'ranged from 25 days – 49 days', codigo: '43682-4' }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-paliperidona-sustenna', '1af14e42-951d-414d-8564-5d5fce138554', 'INVEGA SUSTENNA (PALIPERIDONE PALMITATE) INJECTION', 'INVEGA SUSTENNA', '41', '2025-02-17', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo mediano hasta la concentración plasmática máxima',
    valor: '13',
    unidad: 'días',
    analito: 'paliperidona',
    ref: {
      f: 'dailymed-paliperidona-sustenna',
      sec: '12.3 · Farmacocinética',
      cita: 'maximum plasma concentrations at a median T max of 13 days',
      codigo: '43682-4'
    },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen aparente de distribución',
    valor: '391',
    unidad: 'L',
    analito: 'paliperidona',
    poblacion: 'análisis poblacional',
    ref: {
      f: 'dailymed-paliperidona-sustenna',
      sec: '12.3 · Farmacocinética',
      cita: 'the apparent volume of distribution of paliperidone is 391 L',
      codigo: '43682-4'
    },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma (paliperidona racémica)',
    valor: '74',
    unidad: '%',
    analito: 'paliperidona',
    ref: {
      f: 'dailymed-paliperidona-sustenna',
      sec: '12.3 · Farmacocinética',
      cita: 'The plasma protein binding of racemic paliperidone is 74%',
      codigo: '43682-4'
    },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida aparente mediana tras una dosis única',
    valor: '25-49',
    unidad: 'días',
    analito: 'paliperidona',
    ref: { f: 'dailymed-paliperidona-sustenna', sec: '12.3 · Farmacocinética', cita: 'ranged from 25 days – 49 days', codigo: '43682-4' },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada sin cambios por la orina (paliperidona oral marcada)',
    valor: '59',
    unidad: '% de la dosis',
    analito: 'paliperidona',
    origen: 'otra-presentacion',
    ref: {
      f: 'dailymed-paliperidona-sustenna',
      sec: '12.3 · Farmacocinética',
      cita: '59% of the dose was excreted unchanged into urine',
      codigo: '43682-4'
    },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  },
  {
    magnitud: 'heces',
    nombre: 'Radiactividad recuperada en las heces (paliperidona oral marcada)',
    valor: '11',
    unidad: '%',
    analito: 'paliperidona',
    origen: 'otra-presentacion',
    ref: { f: 'dailymed-paliperidona-sustenna', sec: '12.3 · Farmacocinética', cita: '11% in the feces', codigo: '43682-4' },
    presentacion: 'INVEGA SUSTENNA · solución inyectable'
  }
]
} satisfies RengExtensionFicha
