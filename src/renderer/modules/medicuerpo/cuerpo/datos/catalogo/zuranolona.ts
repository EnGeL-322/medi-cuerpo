import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zuranolona',
    nombre: 'Zuranolona',
    clase: 'Esteroide neuroactivo, modulador positivo del receptor GABA-A',
    sinonimos: [ 'zuranolone', 'Zurzuvae' ],
    formula: 'C25H35N3O2',
    masaMolar: 409.6,
    smiles: 'C[C@]1(CC[C@H]2[C@@H](C1)CC[C@@H]3[C@@H]2CC[C@]4([C@H]3CC[C@@H]4C(=O)CN5C=C(C=N5)C#N)C)O',
    inchikey: 'HARRKNSQXBRBGZ-GVKWWOCJSA-N',
    cid: 86294073,
    iupac: '1-[2-[(3R,5R,8R,9R,10S,13S,14S,17S)-3-hydroxy-3,13-dimethyl-2,4,5,6,7,8,9,10,11,12,14,15,16,17-tetradecahydro-1H-cyclopenta[a]phenanthren-17-yl]-2-oxoethyl]pyrazole-4-carbonitrile',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'zuranolona-oral',
      producto: 'ZURZUVAE · cápsula',
      titular: 'BIOGEN MA INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '30 mg, 25 mg o 20 mg por cápsula, según la etiqueta',
      excipientes: [
        'silicified microcrystalline cellulose (125 .micro.m, high-density)',
        'mannitol',
        'croscarmellose sodium',
        'silicon dioxide',
        'sodium stearyl fumarate'
      ],
      usos: {
        t: 'Tratamiento de la depresión posparto en adultos.',
        ref: {
          f: 'dailymed-zuranolona',
          sec: '1 · Indicaciones',
          cita: 'ZURZUVAE is indicated for the treatment of postpartum depression (PPD) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zuranolona',
      advertencias: [
        {
          titulo: 'Alteración de la capacidad de conducir',
          texto: 'Causa alteración de la conducción por sus efectos depresores del sistema nervioso central; no conducir hasta al menos 12 horas después de cada dosis.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-zuranolona',
            sec: 'Advertencia destacada',
            cita: 'ZURZUVAE causes driving impairment due to central nervous system (CNS) depressant effects',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Efectos depresores del sistema nervioso central',
          texto: 'Puede causar somnolencia y confusión; valorar reducir la dosis o suspender.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-zuranolona',
            sec: '5 · Advertencias y precauciones',
            cita: 'CNS Depressant Effects: ZURZUVAE can cause CNS depressant effects such as somnolence and confusion',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede dañar al feto; las mujeres con capacidad de gestar deben usar anticoncepción eficaz durante el tratamiento y una semana después.',
          organos: [],
          ref: { f: 'dailymed-zuranolona', sec: '5 · Advertencias y precauciones', cita: 'Embryo-fetal Toxicity: May cause fetal harm', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): somnolencia, mareo, diarrea, fatiga, nasofaringitis e infección urinaria.',
          '34084-4',
          'Most common adverse reactions (incidence ≥5% and greater than placebo) were somnolence, dizziness, diarrhea, fatigue, nasopharyngitis, and urinary tract infection'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la alteración de la capacidad de conducir, los efectos depresores del sistema nervioso central y los pensamientos suicidas.',
          '34084-4',
          'Impaired Ability to Drive or Engage in Other Potentially Hazardous Activities [see Warnings and Precautions ( 5.1 )] Central Nervous System Depressant Effects'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 30 mg, 25 mg o 20 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la depresión posparto en adultos.',
    actua: 'Su mecanismo en la depresión posparto no se conoce del todo; se cree que se debe a la modulación alostérica positiva de los receptores GABA-A.',
    recorrido: 'Tras la toma oral, el pico aparece a las 5-6 horas; la biodisponibilidad absoluta no se ha evaluado. Tras una dosis oral marcada, el 45 % de la dosis se recuperó en la orina como metabolitos y el 41 % en las heces, también como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 20 mg: light-orange cap, ivory to light-yellow body',
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
      ocurre: 'Tras la toma oral, el pico aparece a las 5-6 horas; la biodisponibilidad absoluta no se ha evaluado.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma oral, el pico aparece a las 5-6 horas; la biodisponibilidad absoluta no se ha evaluado.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, peak zuranolone concentrations occur at 5 to 6 hours (T max ). The absolute bioavailability of ZURZUVAE was not evaluated',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax aumentó unas 4,3 veces y el AUC unas 2 veces respecto al ayuno; el Tmax no cambió.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max increased by approximately 4.3-fold and the AUC last increased by approximately 2-fold with a high-fat meal (800 to 1,000 calories, 50% fat) compared to fasted conditions',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución tras la toma oral es mayor de 500 L y la unión a las proteínas del plasma supera el 99,5 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución tras la toma oral es mayor de 500 L y la unión a las proteínas del plasma supera el 99,5 %.',
          ref: { f: 'dailymed-zuranolona', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is greater than 99.5%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución tras la toma oral mayor de 500 L.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution of zuranolone following oral administration is greater than 500 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor GABA-A',
        efecto: 'Su mecanismo en la depresión posparto no se conoce del todo; se cree que se debe a la modulación alostérica positiva de los receptores GABA-A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo en la depresión posparto no se conoce del todo; se cree que se debe a la modulación alostérica positiva de los receptores GABA-A.',
            ref: {
              f: 'dailymed-zuranolona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'is thought to be related to its positive allosteric modulation of GABA A receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa y la CYP3A4 es una de las enzimas principales; ningún metabolito circulante supera el 10 % ni contribuye al efecto terapéutico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa y la CYP3A4 es una de las enzimas principales; ningún metabolito circulante supera el 10 % ni contribuye al efecto terapéutico.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'Zuranolone undergoes extensive metabolism, with CYP3A4 identified as a primary enzyme involved',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos circulantes',
          actividad: 'inactivo',
          nota: 'Ninguno supera el 10 % ni se considera que contribuya al efecto terapéutico.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'There were no circulating human metabolites greater than 10% of total drug-related materials and none are considered to contribute to the therapeutic effects of zuranolone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 45 % de la dosis se recuperó en la orina como metabolitos y el 41 % en las heces, también como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 45 % de la dosis se recuperó en la orina como metabolitos y el 41 % en las heces, también como metabolitos.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: '45% of the dose was recovered in urine as metabolites with negligible unchanged zuranolone and 41% in feces as metabolites with less than 2% as unchanged zuranolone',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 19,7 a 24,6 horas en adultos y el aclaramiento aparente medio de 33 L/h.',
          ref: {
            f: 'dailymed-zuranolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of zuranolone is approximately 19.7 to 24.6 hours in an adult population',
            codigo: '43682-4'
          },
          poblacion: 'adultos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '5-6',
      unidad: 'h',
      analito: 'zuranolona',
      ref: {
        f: 'dailymed-zuranolona',
        sec: '12.3 · Farmacocinética',
        cita: 'peak zuranolone concentrations occur at 5 to 6 hours (T max )',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,5',
      unidad: '%',
      analito: 'zuranolona',
      ref: { f: 'dailymed-zuranolona', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is greater than 99.5%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras la toma oral',
      valor: '> 500',
      unidad: 'L',
      analito: 'zuranolona',
      ref: {
        f: 'dailymed-zuranolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of zuranolone following oral administration is greater than 500 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '19,7-24,6 (aprox.)',
      unidad: 'h',
      analito: 'zuranolona',
      poblacion: 'adultos',
      ref: {
        f: 'dailymed-zuranolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of zuranolone is approximately 19.7 to 24.6 hours in an adult population',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente medio (CL/F)',
      valor: '33',
      unidad: 'L/h',
      analito: 'zuranolona',
      ref: {
        f: 'dailymed-zuranolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent clearance (CL/F) of zuranolone is 33 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '45',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      condiciones: 'dosis oral marcada',
      ref: { f: 'dailymed-zuranolona', sec: '12.3 · Farmacocinética', cita: '45% of the dose was recovered in urine as metabolites', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zuranolona', 'f18e53b0-d0bb-422d-8de7-ab64b7292b29', 'ZURZUVAE (ZURANOLONE) CAPSULE', 'ZURZUVAE', '18', '2026-06-17', '2026-11-19'),
    rengPubchem(86294073, 'zuranolone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
