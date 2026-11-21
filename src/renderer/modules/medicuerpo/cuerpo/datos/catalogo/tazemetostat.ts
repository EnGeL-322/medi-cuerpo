import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tazemetostat',
    nombre: 'Tazemetostat',
    clase: 'Inhibidor de la metiltransferasa EZH2',
    sinonimos: [ 'tazemetostat hydrobromide', 'Tazverik' ],
    formula: 'C34H44N4O4',
    masaMolar: 572.7,
    smiles: 'CCN(C1CCOCC1)C2=CC(=CC(=C2C)C(=O)NCC3=C(C=C(NC3=O)C)C)C4=CC=C(C=C4)CN5CCOCC5',
    inchikey: 'NSQSAUGJQHDYNO-UHFFFAOYSA-N',
    cid: 66558664,
    iupac: 'N-[(4,6-dimethyl-2-oxo-1H-pyridin-3-yl)methyl]-3-[ethyl(oxan-4-yl)amino]-2-methyl-5-[4-(morpholin-4-ylmethyl)phenyl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tazemetostat-oral',
      producto: 'TAZVERIK · comprimido recubierto con película',
      titular: 'EPIZYME, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Bromhidrato de tazemetostat',
        ref: { f: 'dailymed-tazemetostat', sec: '11 · Descripción', cita: 'Tazemetostat hydrobromide', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'hydroxypropyl cellulose, unspecified',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'hypromellose, unspecified',
        'talc',
        'polyethylene glycol 8000',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento del sarcoma epitelioide avanzado no resecable desde los 16 años y del linfoma folicular recidivante o refractario, según la etiqueta.',
        ref: {
          f: 'dailymed-tazemetostat',
          sec: '1 · Indicaciones',
          cita: 'Adults and pediatric patients aged 16 years and older with metastatic or locally advanced epithelioid sarcoma not eligible for complete resection',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tazemetostat',
      advertencias: [
        {
          titulo: 'Neoplasias malignas secundarias',
          texto: 'Vigilar a largo plazo la aparición de neoplasias malignas secundarias.',
          organos: [],
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients long-term for the development of secondary malignancies',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir a las embarazadas del riesgo para el feto.',
          organos: [],
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women of the potential risk to a fetus',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el sarcoma epitelioide, las más frecuentes (20 % o más): dolor, fatiga, náuseas, disminución del apetito, vómitos y estreñimiento.',
          '34084-4',
          'The most common (≥20%) adverse reactions in patients with epithelioid sarcoma are pain, fatigue, nausea, decreased appetite, vomiting, and constipation'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg por comprimido, según la etiqueta; el activo va como bromhidrato de tazemetostat. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del sarcoma epitelioide avanzado no resecable desde los 16 años y del linfoma folicular recidivante o refractario, según la etiqueta.',
    actua: 'Inhibe la metiltransferasa EZH2 y algunas de sus mutaciones de ganancia de función.',
    recorrido: 'La biodisponibilidad oral absoluta media es de alrededor del 33 % y el pico aparece en 1 a 2 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras una dosis marcada se recuperó el 94 % de la radiactividad en 12 días: el 15 % en la orina y el 79 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '3 · Formas y concentraciones',
            cita: '200 mg film-coated, red, round, biconvex shape and debossed with',
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
      ocurre: 'La biodisponibilidad oral absoluta media es de alrededor del 33 % y el pico aparece en 1 a 2 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta media es de alrededor del 33 % y el pico aparece en 1 a 2 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute oral bioavailability of tazemetostat is approximately 33%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 1 a 2 horas.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to reach the peak plasma concentration of tazemetostat is 1 to 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no tiene un efecto significativo sobre la exposición.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat, high-calorie (approximately 800 to 1000 calories) meal does not have a significant effect on tazemetostat exposure',
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
      ocurre: 'In vitro se une en un 88 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 1230 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 88 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 1230 L.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Tazemetostat is 88% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 1230 L.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) apparent volume of distribution at steady-state (V ss /F) is 1230 L (46%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'EZH2',
        efecto: 'Inhibe la metiltransferasa EZH2 y algunas de sus mutaciones de ganancia de función.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la metiltransferasa EZH2 y algunas de sus mutaciones de ganancia de función.',
            ref: {
              f: 'dailymed-tazemetostat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tazemetostat is an inhibitor of the methyltransferase, EZH2, and some EZH2 gain-of-function mutations including Y646X, A682G, and A692V',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro la CYP3A lo transforma en sus metabolitos principales inactivos M5 y M3; M5 se sigue metabolizando por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro la CYP3A lo transforma en sus metabolitos principales inactivos M5 y M3; M5 se sigue metabolizando por la CYP3A.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro, tazemetostat is metabolized by CYP3A to form the inactive major metabolites M5 (EPZ-6930) and M3 (EPZ006931)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M5 (EPZ-6930)',
          actividad: 'inactivo',
          nota: 'Metabolito principal inactivo.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'tazemetostat is metabolized by CYP3A to form the inactive major metabolites M5 (EPZ-6930) and M3 (EPZ006931)',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'M3 (EPZ006931)',
          actividad: 'inactivo',
          nota: 'Metabolito principal inactivo.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'tazemetostat is metabolized by CYP3A to form the inactive major metabolites M5 (EPZ-6930) and M3 (EPZ006931)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada se recuperó el 94 % de la radiactividad en 12 días: el 15 % en la orina y el 79 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada se recuperó el 94 % de la radiactividad en 12 días: el 15 % en la orina y el 79 % en las heces.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: '94% of the total radioactivity was recovered over 12 days, with 15% excreted into urine and 79% into feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'En estado estacionario la semivida terminal es de 3,1 horas y el aclaramiento aparente, de 274 L/h.',
          ref: {
            f: 'dailymed-tazemetostat',
            sec: '12.3 · Farmacocinética',
            cita: 'the estimated mean (CV%) terminal elimination half-life of tazemetostat is 3.1 hours (14%) and the apparent total clearance (CL ss /F) is 274 L/h (49%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta media',
      valor: '33 (aprox.)',
      unidad: '%',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute oral bioavailability of tazemetostat is approximately 33%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1-2',
      unidad: 'h',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to reach the peak plasma concentration of tazemetostat is 1 to 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '88',
      unidad: '%',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'Tazemetostat is 88% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '1230',
      unidad: 'L',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution at steady-state (V ss /F) is 1230 L (46%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en estado estacionario',
      valor: '3,1',
      unidad: 'h',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal elimination half-life of tazemetostat is 3.1 hours (14%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente',
      valor: '274',
      unidad: 'L/h',
      analito: 'tazemetostat',
      ref: {
        f: 'dailymed-tazemetostat',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent total clearance (CL ss /F) is 274 L/h (49%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '79',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-tazemetostat', sec: '12.3 · Farmacocinética', cita: 'with 15% excreted into urine and 79% into feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tazemetostat', '7db07b5f-4e22-467c-9c0a-f830b08dbb1d', 'TAZVERIK (TAZEMETOSTAT) TABLET, FILM COATED', 'TAZVERIK', '9', '2026-05-04', '2026-11-19'),
    rengPubchem(66558664, 'tazemetostat hydrobromide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
