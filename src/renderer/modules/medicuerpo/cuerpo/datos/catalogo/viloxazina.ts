import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'viloxazina',
    nombre: 'Viloxazina',
    clase: 'Inhibidor selectivo de la recaptación de noradrenalina (TDAH, liberación prolongada)',
    sinonimos: [ 'viloxazine', 'Qelbree' ],
    formula: 'C13H19NO3',
    masaMolar: 237.29,
    smiles: 'CCOC1=CC=CC=C1OCC2CNCCO2',
    inchikey: 'YWPHCCPCQOJSGZ-UHFFFAOYSA-N',
    cid: 5666,
    iupac: '2-[(2-ethoxyphenoxy)methyl]morpholine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'viloxazina-oral',
      producto: 'QELBREE · cápsula de liberación prolongada',
      titular: 'SUPERNUS PHARMACEUTICALS, INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '150 mg, 200 mg o 100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de viloxazina',
        ref: { f: 'dailymed-viloxazina', sec: '11 · Descripción', cita: 'viloxazine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',                'hypromellose 2910 (5 mpa.s)',
        'triacetin',                   'polyethylene glycol 3350',
        'lactose monohydrate',         'titanium dioxide',
        'ethylcellulose, unspecified', 'water',
        'ammonia',                     'medium-chain triglycerides',
        'oleic acid',                  'talc',
        'fd&c blue no. 1',             'd&c red no. 28',
        'gelatin, unspecified',        'shellac',
        'alcohol',                     'isopropyl alcohol',
        'butyl alcohol',               'propylene glycol',
        'ferrosoferric oxide',         'potassium hydroxide',
        'sucrose'
      ],
      usos: {
        t: 'Tratamiento del trastorno por déficit de atención con hiperactividad (TDAH) en adultos y pacientes desde 6 años.',
        ref: {
          f: 'dailymed-viloxazina',
          sec: '1 · Indicaciones',
          cita: 'Qelbree is indicated for the treatment of Attention-Deficit Hyperactivity Disorder (ADHD) in adults and pediatric patients 6 years and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-viloxazina',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'En los ensayos hubo más pensamientos y conductas suicidas con viloxazina que con placebo; hay que vigilar de cerca.',
          organos: [],
          ref: {
            f: 'dailymed-viloxazina',
            sec: 'Advertencia destacada',
            cita: 'In clinical studies, higher rates of suicidal thoughts and behavior were reported in patients with ADHD treated with Qelbree than in patients treated with placebo',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Aumento de la presión arterial y de la frecuencia cardíaca',
          texto: 'Hay que medirlas antes de empezar, tras subir la dosis y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-viloxazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Blood Pressure and Heart Rate Increases: Assess heart rate and blood pressure prior to initiating treatment, following increases in dosage, and periodically while on therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Activación de manía o hipomanía',
          texto: 'Hay que descartar un trastorno bipolar antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-viloxazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Activation of Mania or Hypomania: Screen patients for bipolar disorder',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En pacientes de 6 a 17 años, las más frecuentes (5 % o más y al menos el doble que con placebo): somnolencia, disminución del apetito, fatiga, náuseas, vómitos, insomnio e irritabilidad.',
          '34084-4',
          'Pediatric patients 6 to 17 years of age : somnolence, decreased appetite, fatigue, nausea, vomiting, insomnia, and irritability'
        ],
        [
          'En adultos: insomnio, cefalea, somnolencia, fatiga, náuseas, disminución del apetito, sequedad de boca y estreñimiento.',
          '34084-4',
          'Adult patients : insomnia, headache, somnolence, fatigue, nausea, decreased appetite, dry mouth and constipation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada: 150 mg, 200 mg o 100 mg por cápsula, según la etiqueta; el activo va como clorhidrato de viloxazina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno por déficit de atención con hiperactividad (TDAH) en adultos y pacientes desde 6 años.',
    actua: 'Su mecanismo en el TDAH no está claro; se cree que actúa inhibiendo la recaptación de noradrenalina.',
    recorrido: 'La biodisponibilidad relativa de la liberación prolongada frente a una de liberación inmediata fue de alrededor del 88 %; la mediana del Tmax fue de unas 5 horas (3 a 9) tras 200 mg. La excreción renal es la vía principal: tras una dosis marcada, el 90 % se recuperó en la orina en las primeras 24 horas y menos del 1 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Cápsula de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '3 · Formas y concentraciones',
            cita: 'Qelbree (viloxazine extended-release capsules) are available as',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad relativa de la liberación prolongada frente a una de liberación inmediata fue de alrededor del 88 %; la mediana del Tmax fue de unas 5 horas (3 a 9) tras 200 mg.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad relativa de la liberación prolongada frente a una de liberación inmediata fue de alrededor del 88 %; la mediana del Tmax fue de unas 5 horas (3 a 9) tras 200 mg.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The relative bioavailability of viloxazine extended-release relative to an immediate-release formulation was about 88%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico fue de unas 5 horas, entre 3 y 9, tras una dosis única de 200 mg.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) time to peak plasma concentration of viloxazine (T max ) was approximately 5 hours, with a range of 3 to 9 hours, following a single 200 mg dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax y el AUC bajaron alrededor de un 9 % y un 8 % y el Tmax subió unas 2 horas.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of 200 mg viloxazine extended-release with a high-fat meal (800 to 1000 calories) decreased viloxazine C max and AUC by about 9% and 8%, respectively',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 76 %-82 % a las proteínas del plasma humano.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 76 %-82 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Viloxazine is 76-82% bound to human plasma proteins over the blood concentration range of 0.5 mcg/mL to 10 mcg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transportador de noradrenalina',
        efecto: 'Su mecanismo en el TDAH no está claro; se cree que actúa inhibiendo la recaptación de noradrenalina.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo en el TDAH no está claro; se cree que actúa inhibiendo la recaptación de noradrenalina.',
            ref: {
              f: 'dailymed-viloxazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of viloxazine in the treatment of ADHD is unclear; however, it is thought to be through inhibiting the reuptake of norepinephrine',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por CYP2D6, UGT1A9 y UGT2B15; el metabolito principal en el plasma es el glucurónido de 5-hidroxi-viloxazina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por CYP2D6, UGT1A9 y UGT2B15; el metabolito principal en el plasma es el glucurónido de 5-hidroxi-viloxazina.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Viloxazine is primarily metabolized by CYP2D6, UGT1A9, and UGT2B15',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de 5-hidroxi-viloxazina',
          actividad: 'desconocida',
          nota: 'Metabolito principal en el plasma; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major metabolite detected in plasma is 5-hydroxy-viloxazine glucuronide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción renal es la vía principal: tras una dosis marcada, el 90 % se recuperó en la orina en las primeras 24 horas y menos del 1 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción renal es la vía principal: tras una dosis marcada, el 90 % se recuperó en la orina en las primeras 24 horas y menos del 1 % en las heces.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'After administration of radiolabeled viloxazine, 90% of the dose was recovered in urine within the first 24 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La excreción renal es la vía principal de excreción.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal excretion is the primary route of excretion of viloxazine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de 7,02 ± 4,74 horas.',
          ref: {
            f: 'dailymed-viloxazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (± SD) half-life of viloxazine was 7.02 ± (4.74 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a liberación inmediata',
      valor: '88 (aprox.)',
      unidad: '%',
      analito: 'viloxazina',
      ref: {
        f: 'dailymed-viloxazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The relative bioavailability of viloxazine extended-release relative to an immediate-release formulation was about 88%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'viloxazina',
      condiciones: 'dosis única de 200 mg',
      ref: {
        f: 'dailymed-viloxazina',
        sec: '12.3 · Farmacocinética',
        cita: 'time to peak plasma concentration of viloxazine (T max ) was approximately 5 hours, with a range of 3 to 9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '76-82',
      unidad: '%',
      analito: 'viloxazina',
      ref: { f: 'dailymed-viloxazina', sec: '12.3 · Farmacocinética', cita: 'Viloxazine is 76-82% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '7,02 ± 4,74',
      unidad: 'h',
      analito: 'viloxazina',
      ref: {
        f: 'dailymed-viloxazina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (± SD) half-life of viloxazine was 7.02 ± (4.74 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina en 24 horas',
      valor: '90',
      unidad: '% de la dosis',
      analito: 'viloxazina y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-viloxazina',
        sec: '12.3 · Farmacocinética',
        cita: '90% of the dose was recovered in urine within the first 24 hours post-dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-viloxazina', 'aedf408d-0f84-418d-9416-7c39ddb0d29a', 'QELBREE (VILOXAZINE HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE', 'QELBREE', '16', '2026-10-08', '2026-11-19'),
    rengPubchem(5666, 'viloxazine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
