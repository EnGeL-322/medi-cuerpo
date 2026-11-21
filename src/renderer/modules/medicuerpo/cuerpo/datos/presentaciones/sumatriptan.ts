import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'sumatriptan',
  presentaciones: [
    {
  id: 'sumatriptan-inyectable',
  producto: 'IMITREX · solución inyectable',
  titular: 'GLAXOSMITHKLINE LLC',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION',
  liberacion: 'no declarada',
  concentraciones: '4 mg/0,5 mL de sumatriptán (como succinato) en inyección subcutánea, según la etiqueta',
  excipientes: [ 'sodium chloride', 'water' ],
  usos: {
    t: 'Tratamiento agudo de la migraña, con o sin aura, y de la cefalea en racimos, en adultos.',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '1 · Indicaciones',
      cita: 'IMITREX injection is indicated in adults for (1) the acute treatment of migraine, with or without aura, and (2) the acute treatment of cluster headache',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-sumatriptan-inyectable',
  advertencias: [
    {
      titulo: 'Isquemia e infarto de miocardio',
      texto: 'La etiqueta pide una evaluación cardiaca en pacientes con varios factores de riesgo cardiovascular.',
      organos: [ 'corazon' ],
      ref: {
        f: 'dailymed-sumatriptan-inyectable',
        sec: '5 · Advertencias y precauciones',
        cita: "Myocardial ischemia/infarction and Prinzmetal's angina: Perform cardiac evaluation in patients with multiple cardiovascular risk factors",
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Hemorragia cerebral y ictus',
      texto: 'Puede haber hemorragia cerebral, hemorragia subaracnoidea e ictus.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-sumatriptan-inyectable',
        sec: '5 · Advertencias y precauciones',
        cita: 'Cerebral hemorrhage, subarachnoid hemorrhage, and stroke: Discontinue IMITREX if occurs',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'La etiqueta describe como reacciones graves la isquemia miocárdica, el infarto de miocardio y la angina de Prinzmetal.',
      '34084-4',
      'The following serious adverse reactions are described below and elsewhere in the labeling'
    ],
    [
      'También describe arritmias, dolor u opresión en el pecho, garganta, cuello o mandíbula y eventos cerebrovasculares.',
      '34084-4',
      "Myocardial ischemia, myocardial infarction, and Prinzmetal's angina"
    ]
  ],
  familia: 'inyectable',
  vias: [ 'subcutanea' ],
  formaNormalizada: 'jeringa-precargada',
  recorridoPropio: {
    resumen: 'En 18 varones sanos, la biodisponibilidad por inyección subcutánea fue del 97 % ± 16 % de la obtenida por vía intravenosa. Tras una dosis subcutánea única, el 22 % ± 4 % se excretó por la orina como sumatriptán sin cambios y el 38 % ± 7 % como metabolito IAA.',
    etapas: {
      liberacion: {
        organos: [ 'piel', 'tejido-adiposo' ],
        llega: 'La solución queda depositada bajo la piel, en el tejido subcutáneo.',
        ocurre: 'Inyección subcutánea de solución ya disuelta: el fármaco queda bajo la piel y pasa a la sangre.',
        sigue: 'El fármaco pasa del tejido subcutáneo a la sangre.',
        datos: [
          {
            t: 'Inyección subcutánea de solución ya disuelta: el fármaco queda bajo la piel y pasa a la sangre.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'The bioavailability of sumatriptan via subcutaneous site injection to 18 healthy male subjects was 97% ± 16% of that obtained following intravenous injection',
              codigo: '43682-4'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'piel', 'sangre' ],
        organosGenerales: [],
        llega: 'El fármaco pasa del tejido subcutáneo a la sangre.',
        ocurre: 'En 18 varones sanos, la biodisponibilidad por inyección subcutánea fue del 97 % ± 16 % de la obtenida por vía intravenosa.',
        sigue: 'Circula con la sangre hacia los tejidos y el hígado.',
        datos: [
          {
            t: 'En 18 varones sanos, la biodisponibilidad por inyección subcutánea fue del 97 % ± 16 % de la obtenida por vía intravenosa.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'The bioavailability of sumatriptan via subcutaneous site injection to 18 healthy male subjects was 97% ± 16% of that obtained following intravenous injection',
              codigo: '43682-4'
            }
          },
          {
            t: 'La concentración sérica máxima media fue de 74 ± 15 ng/mL y el tiempo hasta el pico, de 12 minutos (intervalo de 5 a 20 minutos).',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'the maximum serum concentration (C max ) of sumatriptan was (mean ± standard deviation) 74 ± 15 ng/mL and the time to peak concentration (T max ) was 12 minutes after injection (range: 5 to 20 minutes)',
              codigo: '43682-4'
            },
            poblacion: 'varones sanos',
            condiciones: 'inyección subcutánea única en el deltoides'
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'La unión a proteínas es baja, de alrededor del 14 % al 21 %; el volumen de distribución del compartimento central fue de 50 ± 8 litros.',
        sigue: 'Se reparte por los tejidos y llega al hígado, donde se metaboliza.',
        datos: [
          {
            t: 'La unión a proteínas es baja, de alrededor del 14 % al 21 %; el volumen de distribución del compartimento central fue de 50 ± 8 litros.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'Protein binding, determined by equilibrium dialysis over the concentration range of 10 to 1,000 ng/mL is low, approximately 14% to 21%',
              codigo: '43682-4'
            }
          },
          {
            t: 'El volumen de distribución del compartimento central fue de 50 ± 8 litros y la semivida de distribución, de 15 ± 2 minutos.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'the volume of distribution central compartment of sumatriptan was 50 ± 8 liters and the distribution half-life was 15 ± 2 minutes',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Receptores 5-HT1B/1D',
          efecto: 'Se une con alta afinidad a los receptores humanos 5-HT1B/1D; se presume que actúa como agonista en los vasos sanguíneos intracraneales y en los nervios sensitivos del sistema trigeminal, con constricción de los vasos craneales e inhibición de la liberación de neuropéptidos proinflamatorios.',
          lugar: [ 'encefalo', 'vasos' ],
          datos: [
            {
              t: 'Se une con alta afinidad a los receptores humanos 5-HT1B/1D; se presume que actúa como agonista en los vasos sanguíneos intracraneales y en los nervios sensitivos del sistema trigeminal, con constricción de los vasos craneales e inhibición de la liberación de neuropéptidos proinflamatorios.',
              ref: {
                f: 'dailymed-sumatriptan-inyectable',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Sumatriptan binds with high affinity to human cloned 5-HT 1B / 1D receptors',
                codigo: '43679-0'
              }
            },
            {
              t: 'Se presume que actúa mediante efectos agonistas en los receptores 5-HT1B/1D de los vasos intracraneales y de los nervios sensitivos del sistema trigeminal.',
              ref: {
                f: 'dailymed-sumatriptan-inyectable',
                sec: '12.1 · Mecanismo de acción',
                cita: 'agonist effects at the 5-HT 1B / 1D receptors on intracranial blood vessels and sensory nerves of the trigeminal system',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Los estudios in vitro con microsomas humanos sugieren que lo metaboliza la MAO, sobre todo la isoenzima A.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Los estudios in vitro con microsomas humanos sugieren que lo metaboliza la MAO, sobre todo la isoenzima A.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'In vitro studies with human microsomes suggest that sumatriptan is metabolized by MAO, predominantly the A isoenzyme',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Ácido indolacético (IAA) y su glucurónido',
            actividad: 'inactivo',
            nota: 'Principal metabolito en la orina; inactivo.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'the major metabolite indole acetic acid (IAA) or the IAA glucuronide, both of which are inactive',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Tras una dosis subcutánea única, el 22 % ± 4 % se excretó por la orina como sumatriptán sin cambios y el 38 % ± 7 % como metabolito IAA.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Tras una dosis subcutánea única, el 22 % ± 4 % se excretó por la orina como sumatriptán sin cambios y el 38 % ± 7 % como metabolito IAA.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'After a single 6-mg subcutaneous dose, 22% ± 4% was excreted in the urine as unchanged sumatriptan and 38% ± 7% as the IAA metabolite',
              codigo: '43682-4'
            }
          },
          {
            t: 'El aclaramiento sistémico fue de 1.194 ± 149 mL/min y la semivida terminal, de 115 ± 19 minutos.',
            ref: {
              f: 'dailymed-sumatriptan-inyectable',
              sec: '12.3 · Farmacocinética',
              cita: 'the systemic clearance of sumatriptan was 1,194 ± 149 mL/min and the terminal half-life was 115 ± 19 minutes',
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
    rengEtiquetaFDA('dailymed-sumatriptan-inyectable', 'fee7d073-0b99-48f2-7985-0d8cf970894b', 'IMITREX (SUMATRIPTAN) INJECTION', 'IMITREX', '30', '2026-08-12', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad por inyección subcutánea frente a la intravenosa',
    valor: '97 ± 16',
    unidad: '%',
    analito: 'sumatriptán',
    poblacion: '18 varones sanos',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: 'The bioavailability of sumatriptan via subcutaneous site injection to 18 healthy male subjects was 97% ± 16% of that obtained following intravenous injection',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico de concentración',
    valor: '12 (intervalo 5 a 20)',
    unidad: 'min',
    analito: 'sumatriptán',
    poblacion: '18 varones sanos',
    condiciones: 'inyección subcutánea única',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: 'the time to peak concentration (T max ) was 12 minutes after injection (range: 5 to 20 minutes)',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'cmax',
    nombre: 'Concentración sérica máxima media',
    valor: '74 ± 15',
    unidad: 'ng/mL',
    analito: 'sumatriptán',
    poblacion: '18 varones sanos',
    condiciones: 'inyección subcutánea única en el deltoides',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: 'the maximum serum concentration (C max ) of sumatriptan was (mean ± standard deviation) 74 ± 15 ng/mL',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas',
    valor: '14-21',
    unidad: '%',
    analito: 'sumatriptán',
    ref: { f: 'dailymed-sumatriptan-inyectable', sec: '12.3 · Farmacocinética', cita: 'is low, approximately 14% to 21%', codigo: '43682-4' },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución del compartimento central',
    valor: '50 ± 8',
    unidad: 'L',
    analito: 'sumatriptán',
    poblacion: '9 varones',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: 'the volume of distribution central compartment of sumatriptan was 50 ± 8 liters',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal',
    valor: '115 ± 19',
    unidad: 'min',
    analito: 'sumatriptán',
    ref: { f: 'dailymed-sumatriptan-inyectable', sec: '12.3 · Farmacocinética', cita: 'the terminal half-life was 115 ± 19 minutes', codigo: '43682-4' },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'aclaramiento',
    nombre: 'Aclaramiento sistémico',
    valor: '1.194 ± 149',
    unidad: 'mL/min',
    analito: 'sumatriptán',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: 'the systemic clearance of sumatriptan was 1,194 ± 149 mL/min',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  },
  {
    magnitud: 'orina',
    nombre: 'Excretado sin cambios por la orina',
    valor: '22 ± 4',
    unidad: '% de la dosis',
    analito: 'sumatriptán',
    ref: {
      f: 'dailymed-sumatriptan-inyectable',
      sec: '12.3 · Farmacocinética',
      cita: '22% ± 4% was excreted in the urine as unchanged sumatriptan',
      codigo: '43682-4'
    },
    presentacion: 'IMITREX · solución inyectable'
  }
]
} satisfies RengExtensionFicha
