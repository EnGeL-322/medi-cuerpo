import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'medroxiprogesterona',
  presentaciones: [
    {
  id: 'medroxiprogesterona-subq',
  producto: 'Depo-SubQ Provera · suspensión inyectable',
  titular: 'PHARMACIA & UPJOHN COMPANY LLC',
  mercado: 'EE. UU.',
  forma: 'Suspensión inyectable',
  formaFuente: 'INJECTION, SUSPENSION',
  liberacion: 'no declarada',
  concentraciones: '104 mg/0,65 mL de acetato de medroxiprogesterona en suspensión inyectable, según la etiqueta',
  sal: {
    nombre: 'Acetato de medroxiprogesterona',
    ref: { f: 'dailymed-medroxiprogesterona-subq', sec: '11 · Descripción', cita: 'medroxyprogesterone acetate', codigo: '34089-3' }
  },
  excipientes: [
    'methylparaben',
    'propylparaben',
    'sodium chloride',
    'polyethylene glycol, unspecified',
    'polysorbate 80',
    'sodium phosphate, monobasic, anhydrous',
    'sodium phosphate, dibasic, anhydrous',
    'methionine',
    'povidone, unspecified',
    'water',
    'sodium hydroxide',
    'hydrochloric acid'
  ],
  usos: {
    t: 'Prevención del embarazo y tratamiento del dolor asociado a la endometriosis en mujeres en edad reproductiva.',
    ref: {
      f: 'dailymed-medroxiprogesterona-subq',
      sec: '1 · Indicaciones',
      cita: 'Depo-subQ provera 104 is indicated in females of reproductive age for',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-medroxiprogesterona-subq',
  advertencias: [
    {
      titulo: 'Pérdida de densidad mineral ósea',
      texto: 'Las mujeres que usan este medicamento pueden perder una densidad mineral ósea importante.',
      organos: [ 'huesos' ],
      ref: {
        f: 'dailymed-medroxiprogesterona-subq',
        sec: 'Advertencia destacada',
        cita: 'Women who use depo-subQ provera 104 may lose significant bone mineral density',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Anafilaxia',
      texto: 'Se han notificado reacciones anafilácticas graves en mujeres que usan este medicamento.',
      organos: [ 'sistema-inmunitario' ],
      ref: {
        f: 'dailymed-medroxiprogesterona-subq',
        sec: '5 · Advertencias y precauciones',
        cita: 'Serious anaphylactic reactions have been reported in women using depo-subQ provera 104',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (incidencia > 5 %): sangrado uterino disfuncional, dolor de cabeza, aumento de peso, amenorrea y reacciones en el lugar de la inyección.',
      '34084-4',
      'Most common adverse reactions (incidence >5%) are dysfunctional uterine bleeding, headache, increased weight, amenorrhea, and injection site reactions'
    ],
    [
      'El motivo más frecuente de suspensión fue el sangrado uterino disfuncional (3 %).',
      '34084-4',
      'the most common reason for discontinuation was dysfunctional uterine bleeding (3%)'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'subcutanea' ],
  formaNormalizada: 'jeringa-precargada',
  recorridoPropio: {
    resumen: 'Tras una inyección subcutánea única en mujeres sanas, las concentraciones séricas de MPA alcanzaron al menos 0,2 ng/mL en 24 horas. Casi todos los metabolitos se excretaron por la orina como conjugados de glucurónido, con solo pequeñas cantidades como sulfatos; la semivida terminal aparente es de unos 40 días tras la vía subcutánea.',
    etapas: {
      liberacion: {
        organos: [ 'piel', 'tejido-adiposo' ],
        llega: 'La suspensión queda depositada bajo la piel, en el tejido subcutáneo.',
        ocurre: 'Suspensión inyectable subcutánea en jeringa precargada: queda como depósito bajo la piel y desde allí el fármaco pasa a la sangre.',
        sigue: 'El fármaco pasa poco a poco del depósito a la sangre.',
        datos: [
          {
            t: 'Suspensión inyectable subcutánea en jeringa precargada: queda como depósito bajo la piel y desde allí el fármaco pasa a la sangre.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '3 · Formas y concentraciones',
              cita: 'Injectable suspension (104 mg/0.65 mL) in a single-dose pre-filled syringe',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'piel', 'sangre' ],
        organosGenerales: [],
        llega: 'El fármaco pasa del depósito subcutáneo a la sangre.',
        ocurre: 'Tras una inyección subcutánea única en mujeres sanas, las concentraciones séricas de MPA alcanzaron al menos 0,2 ng/mL en 24 horas.',
        sigue: 'Circula con la sangre, unido sobre todo a la albúmina.',
        datos: [
          {
            t: 'Tras una inyección subcutánea única en mujeres sanas, las concentraciones séricas de MPA alcanzaron al menos 0,2 ng/mL en 24 horas.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'serum MPA concentrations reached ≥0.2 ng/mL within 24 hours',
              codigo: '43682-4'
            }
          },
          {
            t: 'El Tmax medio se alcanzó aproximadamente 1 semana después de la inyección.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'The mean T max was attained approximately 1 week after injection',
              codigo: '43682-4'
            },
            poblacion: 'mujeres sanas',
            condiciones: 'inyección subcutánea única'
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'La unión del MPA a proteínas del plasma es del 86 % de media y se produce sobre todo con la albúmina sérica; no se une a la globulina fijadora de hormonas sexuales.',
        sigue: 'Llega al hígado, donde se metaboliza, y se elimina sobre todo por la orina.',
        datos: [
          {
            t: 'La unión del MPA a proteínas del plasma es del 86 % de media y se produce sobre todo con la albúmina sérica; no se une a la globulina fijadora de hormonas sexuales.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'Plasma protein binding of MPA averages 86%. MPA binding occurs primarily to serum albumin',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Secreción de gonadotropinas',
          efecto: 'Inhibe la secreción de gonadotropinas, lo que impide sobre todo la maduración folicular y la ovulación y espesa el moco cervical.',
          lugar: [ 'organos-reproductores', 'encefalo' ],
          datos: [
            {
              t: 'Inhibe la secreción de gonadotropinas, lo que impide sobre todo la maduración folicular y la ovulación y espesa el moco cervical.',
              ref: {
                f: 'dailymed-medroxiprogesterona-subq',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Depo-subQ provera 104 inhibits the secretion of gonadotropins, which primarily prevents follicular maturation and ovulation and causes thickening of cervical mucus',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza ampliamente en el hígado por enzimas P450, con más de 10 metabolitos.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza ampliamente en el hígado por enzimas P450, con más de 10 metabolitos.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'MPA is extensively metabolized in the liver by P450 enzymes',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: []
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Casi todos los metabolitos se excretaron por la orina como conjugados de glucurónido, con solo pequeñas cantidades como sulfatos; la semivida terminal aparente es de unos 40 días tras la vía subcutánea.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Casi todos los metabolitos se excretaron por la orina como conjugados de glucurónido, con solo pequeñas cantidades como sulfatos; la semivida terminal aparente es de unos 40 días tras la vía subcutánea.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'Most MPA metabolites were excreted in the urine as glucuronide conjugates',
              codigo: '43682-4'
            }
          },
          {
            t: 'Las concentraciones residuales al final del primer intervalo fueron en general inferiores a 0,5 ng/mL, coherentes con una semivida terminal aparente de unos 40 días.',
            ref: {
              f: 'dailymed-medroxiprogesterona-subq',
              sec: '12.3 · Farmacocinética',
              cita: 'consistent with its apparent terminal half-life of ~40 days after subcutaneous administration',
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
    rengEtiquetaFDA('dailymed-medroxiprogesterona-subq', '390087a6-f3c3-4f0b-a930-79acf412f153', 'DEPO-SUBQ PROVERA (MEDROXYPROGESTERONE ACETATE) INJECTION, SUSPENSION', 'Depo-SubQ Provera', '21', '2025-12-19', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo medio hasta el pico sérico',
    valor: '1 (aprox.)',
    unidad: 'semanas',
    analito: 'MPA',
    poblacion: 'mujeres sanas',
    condiciones: 'inyección subcutánea única',
    ref: {
      f: 'dailymed-medroxiprogesterona-subq',
      sec: '12.3 · Farmacocinética',
      cita: 'The mean T max was attained approximately 1 week after injection',
      codigo: '43682-4'
    },
    presentacion: 'Depo-SubQ Provera · suspensión inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma',
    valor: '86 (media)',
    unidad: '%',
    analito: 'MPA',
    ref: { f: 'dailymed-medroxiprogesterona-subq', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of MPA averages 86%', codigo: '43682-4' },
    presentacion: 'Depo-SubQ Provera · suspensión inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal aparente',
    valor: '40 (aprox.)',
    unidad: 'd',
    analito: 'MPA',
    ref: {
      f: 'dailymed-medroxiprogesterona-subq',
      sec: '12.3 · Farmacocinética',
      cita: 'consistent with its apparent terminal half-life of ~40 days after subcutaneous administration',
      codigo: '43682-4'
    },
    presentacion: 'Depo-SubQ Provera · suspensión inyectable'
  }
]
} satisfies RengExtensionFicha
