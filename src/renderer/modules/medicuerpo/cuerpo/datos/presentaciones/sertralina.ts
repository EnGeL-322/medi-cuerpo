import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'sertralina',
  presentaciones: [
    {
  id: 'sertralina-concentrado',
  producto: 'Zoloft · solución oral',
  titular: 'VIATRIS SPECIALTY LLC',
  mercado: 'EE. UU.',
  forma: 'Solución oral',
  formaFuente: 'SOLUTION, CONCENTRATE',
  liberacion: 'no declarada',
  concentraciones: '20 mg/mL de sertralina (como clorhidrato), con alcohol al 12 %, según la etiqueta',
  sal: {
    nombre: 'Clorhidrato de sertralina',
    ref: { f: 'dailymed-sertralina-concentrado', sec: '11 · Descripción', cita: 'SERTRALINE HYDROCHLORIDE', codigo: '34089-3' }
  },
  excipientes: [ 'glycerin', 'alcohol', 'menthol, unspecified form', 'butylated hydroxytoluene' ],
  usos: {
    t: 'Trastorno depresivo mayor, trastorno obsesivo-compulsivo, trastorno de pánico, trastorno de estrés postraumático, trastorno de ansiedad social y trastorno disfórico premenstrual.',
    ref: {
      f: 'dailymed-sertralina-concentrado',
      sec: '1 · Indicaciones',
      cita: 'ZOLOFT is a selective serotonin reuptake inhibitor (SSRI) indicated for the treatment of',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-sertralina-concentrado',
  advertencias: [
    {
      titulo: 'Pensamientos y conductas suicidas',
      texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en pacientes pediátricos y adultos jóvenes en estudios de corta duración.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-sertralina-concentrado',
        sec: 'Advertencia destacada',
        cita: 'Antidepressants increased the risk of suicidal thoughts and behavior in pediatric and young adult patients in short-term studies',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'La etiqueta destaca la reacción disulfiram-alcohol cuando la solución oral se toma con disulfiram.',
      '34084-4',
      'Disulfiram-alcohol reaction when ZOLOFT oral solution is taken with disulfiram'
    ],
    [
      'Entre las reacciones descritas figuran la prolongación del QTc y las arritmias ventriculares con pimozida.',
      '34084-4',
      'QTc prolongation and ventricular arrhythmias when taken with pimozide'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  excipientesRiesgo: [
    {
      nombre: 'Etanol',
      motivo: 'La solución oral contiene alcohol (12 %) y la etiqueta describe una reacción disulfiram-alcohol si se toma con disulfiram.',
      vias: [ 'oral' ],
      ref: {
        f: 'dailymed-sertralina-concentrado',
        sec: '6 · Reacciones adversas',
        cita: 'Disulfiram-alcohol reaction when ZOLOFT oral solution is taken with disulfiram',
        codigo: '34084-4'
      }
    }
  ],
  recorridoPropio: {
    resumen: 'El pico plasmático de sertralina llega entre las 4,5 y las 8,4 horas tras la toma; la biodisponibilidad de los comprimidos es aproximadamente igual a la de una dosis equivalente de la solución oral. En un estudio con sertralina marcada, alrededor del 40-45 % de la radiactividad se recuperó en la orina en 9 días y otro 40-45 % en las heces, con un 12-14 % de sertralina sin cambios; no se detectó sertralina sin cambios en la orina.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Concentrado oral: líquido que ya contiene el principio activo disuelto, con glicerina y alcohol.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Concentrado oral: líquido que ya contiene el principio activo disuelto, con glicerina y alcohol.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '3 · Formas y concentraciones',
              cita: 'hydrochloride equivalent to 20 mg of sertraline per mL and 12% alcohol',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'El pico plasmático de sertralina llega entre las 4,5 y las 8,4 horas tras la toma; la biodisponibilidad de los comprimidos es aproximadamente igual a la de una dosis equivalente de la solución oral.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'El pico plasmático de sertralina llega entre las 4,5 y las 8,4 horas tras la toma; la biodisponibilidad de los comprimidos es aproximadamente igual a la de una dosis equivalente de la solución oral.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'mean peak plasma concentrations (C max ) of sertraline occurred between 4.5 to 8.4 hours post-dosing',
              codigo: '43682-4'
            }
          },
          {
            t: 'La biodisponibilidad de los comprimidos es aproximadamente igual a la de una dosis equivalente de la solución oral.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'The single dose bioavailability of ZOLOFT tablets is approximately equal to an equivalent dose of ZOLOFT oral solution',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'encefalo' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'Se une en un 98 % a proteínas del suero en el intervalo de 20 a 500 ng/mL.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'Se une en un 98 % a proteínas del suero en el intervalo de 20 a 500 ng/mL.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'sertraline is highly bound to serum proteins (98%) in the range of 20 to 500 ng/mL',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Transportador de serotonina (recaptación)',
          efecto: 'Potencia la actividad serotoninérgica en el sistema nervioso central al inhibir la recaptación neuronal de serotonina (5-HT).',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Potencia la actividad serotoninérgica en el sistema nervioso central al inhibir la recaptación neuronal de serotonina (5-HT).',
              ref: {
                f: 'dailymed-sertralina-concentrado',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Sertraline potentiates serotonergic activity in the central nervous system through inhibition of neuronal reuptake of serotonin (5-HT)',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Sufre un metabolismo de primer paso extenso; la vía inicial principal es la N-desmetilación.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Sufre un metabolismo de primer paso extenso; la vía inicial principal es la N-desmetilación.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'Sertraline undergoes extensive first pass metabolism',
              codigo: '43682-4'
            }
          },
          {
            t: 'La vía inicial principal del metabolismo es la N-desmetilación.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'The principal initial pathway of metabolism for sertraline is N-demethylation',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'N-desmetilsertralina',
            actividad: 'activo',
            nota: 'Sustancialmente menos activa que la sertralina; semivida de 62 a 104 horas.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'N-desmethylsertraline to be substantially less active than sertraline',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'En un estudio con sertralina marcada, alrededor del 40-45 % de la radiactividad se recuperó en la orina en 9 días y otro 40-45 % en las heces, con un 12-14 % de sertralina sin cambios; no se detectó sertralina sin cambios en la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'En un estudio con sertralina marcada, alrededor del 40-45 % de la radiactividad se recuperó en la orina en 9 días y otro 40-45 % en las heces, con un 12-14 % de sertralina sin cambios; no se detectó sertralina sin cambios en la orina.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'About 40-45% of the administered radioactivity was recovered in urine in 9 days',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida terminal de eliminación media de la sertralina en el plasma es de unas 26 horas.',
            ref: {
              f: 'dailymed-sertralina-concentrado',
              sec: '12.3 · Farmacocinética',
              cita: 'The average terminal elimination half-life of plasma sertraline is about 26 hours',
              codigo: '43682-4'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sertralina-concentrado', 'fda754f6-d0f3-4dce-a17a-927d64f912f7', 'ZOLOFT (SERTRALINE HYDROCHLORIDE) TABLET, FILM COATED ZOLOFT (SERTRALINE HYDROCHLORIDE) SOLUTION, CONCENTRATE', 'Zoloft', '7', '2025-07-24', '2026-11-10')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico plasmático',
    valor: '4,5 a 8,4',
    unidad: 'h',
    analito: 'sertralina',
    condiciones: 'dosis diarias de 50 a 200 mg durante 14 días',
    ref: {
      f: 'dailymed-sertralina-concentrado',
      sec: '12.3 · Farmacocinética',
      cita: 'mean peak plasma concentrations (C max ) of sertraline occurred between 4.5 to 8.4 hours post-dosing',
      codigo: '43682-4'
    },
    presentacion: 'Zoloft · solución oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal de eliminación',
    valor: '26 (aprox.)',
    unidad: 'h',
    analito: 'sertralina',
    ref: {
      f: 'dailymed-sertralina-concentrado',
      sec: '12.3 · Farmacocinética',
      cita: 'The average terminal elimination half-life of plasma sertraline is about 26 hours',
      codigo: '43682-4'
    },
    presentacion: 'Zoloft · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del suero',
    valor: '98',
    unidad: '%',
    analito: 'sertralina',
    ref: {
      f: 'dailymed-sertralina-concentrado',
      sec: '12.3 · Farmacocinética',
      cita: 'sertraline is highly bound to serum proteins (98%) in the range of 20 to 500 ng/mL',
      codigo: '43682-4'
    },
    presentacion: 'Zoloft · solución oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Radiactividad recuperada en la orina en 9 días',
    valor: '40-45',
    unidad: '% de la dosis',
    analito: 'radiactividad total',
    poblacion: '2 varones sanos',
    ref: {
      f: 'dailymed-sertralina-concentrado',
      sec: '12.3 · Farmacocinética',
      cita: 'About 40-45% of the administered radioactivity was recovered in urine in 9 days',
      codigo: '43682-4'
    },
    presentacion: 'Zoloft · solución oral'
  }
]
} satisfies RengExtensionFicha
