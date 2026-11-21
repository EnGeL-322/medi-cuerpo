import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'miglustat',
    nombre: 'Miglustat',
    clase: 'Inhibidor de la glucosilceramida sintasa (enfermedad de Gaucher)',
    sinonimos: [ 'miglustat', 'Zavesca' ],
    formula: 'C10H21NO4',
    masaMolar: 219.28,
    smiles: 'CCCCN1C[C@@H]([C@H]([C@@H]([C@H]1CO)O)O)O',
    inchikey: 'UQRORFVVSGFNRO-UTINFBMNSA-N',
    cid: 51634,
    iupac: '(2R,3R,4R,5S)-1-butyl-2-(hydroxymethyl)piperidine-3,4,5-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'miglustat-oral',
      producto: 'Zavesca · cápsula',
      titular: 'ACTELION PHARMACEUTICALS US, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      excipientes: [
        'sodium starch glycolate type a potato',
        'povidone k30',
        'magnesium stearate',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'shellac'
      ],
      usos: {
        t: 'Monoterapia en adultos con enfermedad de Gaucher tipo 1 leve o moderada para quienes la enzimoterapia no es una opción.',
        ref: {
          f: 'dailymed-miglustat',
          sec: '1 · Indicaciones',
          cita: 'ZAVESCA is indicated as monotherapy for the treatment of adult patients with mild to moderate type 1 Gaucher disease for whom enzyme replacement therapy is not a therapeutic option',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-miglustat',
      advertencias: [
        {
          titulo: 'Neuropatía periférica',
          texto: 'Hay que hacer evaluaciones neurológicas basales y cada 6 meses.',
          organos: [],
          ref: {
            f: 'dailymed-miglustat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Peripheral neuropathy : Perform baseline and follow-up neurological evaluations at 6-month intervals in all patients',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Temblor',
          texto: 'Reducir la dosis o suspender si el temblor no cede en pocos días.',
          organos: [],
          ref: {
            f: 'dailymed-miglustat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Tremor : Reduce dose to ameliorate tremor or discontinue treatment if tremor does not resolve within days of dose reduction',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Descenso de las plaquetas',
          texto: 'Se observaron descensos leves de las plaquetas sin hemorragia; se recomienda vigilar su recuento.',
          organos: [ 'plaquetas' ],
          ref: {
            f: 'dailymed-miglustat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Reductions in Platelet Count : Mild reductions in platelet counts without association with bleeding were observed in some patients',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): diarrea, pérdida de peso, dolor de estómago, gases, náuseas y vómitos, cefalea, temblor, calambres en las piernas, mareo y debilidad, entre otras.',
          '34084-4',
          'most common adverse reactions (incidence ≥5%) are: diarrhea, weight loss, stomach pain, gas, nausea and vomiting headache including migraine, tremor, leg cramps, dizziness, weakness'
        ],
        [
          'También figuran problemas de visión, trombocitopenia, calambres musculares, dolor de espalda, estreñimiento y sequedad de boca.',
          '34084-4',
          'vision problems, thrombocytopenia, muscle cramps, back pain, constipation, dry mouth'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Monoterapia en adultos con enfermedad de Gaucher tipo 1 leve o moderada para quienes la enzimoterapia no es una opción.',
    actua: 'Inhibe de forma competitiva y reversible la glucosilceramida sintasa, primera enzima de la síntesis de la mayoría de los glucoesfingolípidos, y reduce su producción para que la glucocerebrosidasa residual sea más eficaz.',
    recorrido: 'Tras 100 mg el tmax fue de 2 a 2,5 horas; la biodisponibilidad oral media frente a una solución en ayunas es de alrededor del 97 %, y los alimentos reducen la velocidad pero no la magnitud de la absorción. La vía principal de excreción es el riñón: tras una dosis marcada, el 83 % de la radiactividad se recuperó en la orina y el 12 % en las heces; el 67 % salió sin cambios por la orina en 72 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 100 mg of miglustat, white opaque hard gelatin capsules',
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
      ocurre: 'Tras 100 mg el tmax fue de 2 a 2,5 horas; la biodisponibilidad oral media frente a una solución en ayunas es de alrededor del 97 %, y los alimentos reducen la velocidad pero no la magnitud de la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras 100 mg el tmax fue de 2 a 2,5 horas; la biodisponibilidad oral media frente a una solución en ayunas es de alrededor del 97 %, y los alimentos reducen la velocidad pero no la magnitud de la absorción.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'After a 100 mg oral dose, the time to maximum observed plasma concentration of miglustat (t max ) ranged from 2 to 2.5 hours in Gaucher patients',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad oral media de la cápsula es de alrededor del 97 % frente a una solución oral en ayunas.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral bioavailability of a 100-mg miglustat capsule is about 97% relative to an oral solution administered under fasting conditions',
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
      ocurre: 'No se une a las proteínas del plasma; el volumen de distribución aparente es de 83 a 105 litros y atraviesa la barrera hematoencefálica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se une a las proteínas del plasma; el volumen de distribución aparente es de 83 a 105 litros y atraviesa la barrera hematoencefálica.',
          ref: { f: 'dailymed-miglustat', sec: '12.3 · Farmacocinética', cita: 'Miglustat does not bind to plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'En el líquido cefalorraquídeo alcanzó entre el 31,4 % y el 67,2 % de la concentración plasmática, lo que indica que atraviesa la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'indicating that miglustat crosses the blood brain barrier',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio es de 83 a 105 litros en pacientes con Gaucher.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean apparent volume of distribution of miglustat is 83–105 liters in Gaucher patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con Gaucher'
        }
      ],
      accion: {
        diana: 'Glucosilceramida sintasa',
        efecto: 'Inhibe de forma competitiva y reversible la glucosilceramida sintasa, primera enzima de la síntesis de la mayoría de los glucoesfingolípidos, y reduce su producción para que la glucocerebrosidasa residual sea más eficaz.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma competitiva y reversible la glucosilceramida sintasa, primera enzima de la síntesis de la mayoría de los glucoesfingolípidos, y reduce su producción para que la glucocerebrosidasa residual sea más eficaz.',
            ref: {
              f: 'dailymed-miglustat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Miglustat functions as a competitive and reversible inhibitor of the enzyme glucosylceramide synthase, the initial enzyme in a series of reactions which results in the synthesis of most glycosphingolipids',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolito más abundante en la orina es el glucurónido de miglustat (5 % de la dosis); la mayor parte se excreta sin cambios.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolito más abundante en la orina es el glucurónido de miglustat (5 % de la dosis); la mayor parte se excreta sin cambios.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The most abundant metabolite in urine was miglustat glucuronide accounting for 5% of the dose',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de miglustat',
          actividad: 'desconocida',
          nota: 'Metabolito urinario más abundante; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The most abundant metabolite in urine was miglustat glucuronide accounting for 5% of the dose',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de excreción es el riñón: tras una dosis marcada, el 83 % de la radiactividad se recuperó en la orina y el 12 % en las heces; el 67 % salió sin cambios por la orina en 72 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de excreción es el riñón: tras una dosis marcada, el 83 % de la radiactividad se recuperó en la orina y el 12 % en las heces; el 67 % salió sin cambios por la orina en 72 horas.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of a single dose of 100 mg 14 C-miglustat to healthy volunteers, 83% of the radioactivity was recovered in urine and 12% in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 6 a 7 horas.',
          ref: {
            f: 'dailymed-miglustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life of miglustat is approximately 6 to 7 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '2-2,5',
      unidad: 'h',
      analito: 'miglustat',
      poblacion: 'pacientes con Gaucher',
      ref: {
        f: 'dailymed-miglustat',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to maximum observed plasma concentration of miglustat (t max ) ranged from 2 to 2.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral relativa a solución',
      valor: '97 (aprox.)',
      unidad: '%',
      analito: 'miglustat',
      ref: {
        f: 'dailymed-miglustat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean oral bioavailability of a 100-mg miglustat capsule is about 97% relative to an oral solution',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '83-105',
      unidad: 'L',
      analito: 'miglustat',
      poblacion: 'pacientes con Gaucher',
      ref: {
        f: 'dailymed-miglustat',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean apparent volume of distribution of miglustat is 83–105 liters in Gaucher patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '6-7 (aprox.)',
      unidad: 'h',
      analito: 'miglustat',
      ref: {
        f: 'dailymed-miglustat',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life of miglustat is approximately 6 to 7 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina en 72 h',
      valor: '67',
      unidad: '% de la dosis',
      analito: 'miglustat inalterado',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-miglustat',
        sec: '12.3 · Farmacocinética',
        cita: 'In healthy subjects, 67% of the administered dose was excreted unchanged in urine over 72 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-miglustat', '817892d1-ee12-4632-85fc-57ccdf16d7b8', 'ZAVESCA (MIGLUSTAT) CAPSULE', 'Zavesca', '19', '2023-04-21', '2026-11-19'),
    rengPubchem(51634, 'miglustat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
