import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'quinidina',
    nombre: 'Quinidina',
    clase: 'Antiarrítmico de clase IA',
    sinonimos: [ 'quinidine sulfate', 'Quinidine' ],
    formula: 'C20H24N2O2',
    masaMolar: 324.4,
    smiles: 'COC1=CC2=C(C=CN=C2C=C1)[C@@H]([C@H]3C[C@@H]4CCN3C[C@@H]4C=C)O',
    inchikey: 'LOUPRKONTZGTKE-LHHVKLHASA-N',
    cid: 441074,
    iupac: '(S)-[(2R,4S,5R)-5-ethenyl-1-azabicyclo[2.2.2]octan-2-yl]-(6-methoxyquinolin-4-yl)methanol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'quinidina-oral',
      producto: 'QUINIDINE SULFATE · comprimido',
      titular: 'EPIC PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg o 300 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Sulfato de quinidina', ref: { f: 'dailymed-quinidina', sec: '11 · Descripción', cita: 'QUINIDINE SULFATE', codigo: '34089-3' } },
      excipientes: [ 'sucrose', 'starch, corn', 'microcrystalline cellulose', 'zinc stearate' ],
      usos: {
        t: 'Conversión de la fibrilación o el aleteo auricular sintomáticos a ritmo sinusal cuando el control de la frecuencia no basta, entre otras indicaciones.',
        ref: {
          f: 'dailymed-quinidina',
          sec: '1 · Indicaciones',
          cita: 'In patients with symptomatic atrial fibrillation/flutter whose symptoms are not adequately controlled by measures that reduce the rate of ventricular response, quinidine sulfate is indicated as a means of restoring normal sinus rhythm',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-quinidina',
      advertencias: [
        {
          titulo: 'Mortalidad',
          texto: 'En muchos ensayos de antiarrítmicos para arritmias no mortales, el tratamiento activo aumentó la mortalidad, sobre todo con cardiopatía estructural.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-quinidina',
            sec: 'Advertencias',
            cita: 'In many trials of antiarrhythmic therapy for non-life-threatening arrhythmias, active antiarrhythmic therapy has resulted in increased mortality; the risk of active therapy is probably greatest in patients with structural heart disease',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones notificadas con más frecuencia han sido siempre digestivas: diarrea, náuseas, vómitos y pirosis o esofagitis.',
          '34084-4',
          'most frequently reported have consistently been gastrointestinal, including diarrhea, nausea, vomiting, and heartburn/esophagitis'
        ],
        [
          'En un estudio de 245 pacientes ambulatorios tratados para suprimir extrasístoles ventriculares se recogen las incidencias en una tabla.',
          '34084-4',
          'In one study of 245 adult outpatients who received quinidine to suppress premature ventricular contractions, the incidences of reported adverse experiences were as shown in the table'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 200 mg o 300 mg por comprimido, según la etiqueta; el activo va como sulfato de quinidina. Los excipientes no son el principio activo.',
    usos: 'Conversión de la fibrilación o el aleteo auricular sintomáticos a ritmo sinusal cuando el control de la frecuencia no basta, entre otras indicaciones.',
    actua: 'En el músculo cardíaco y las fibras de Purkinje deprime la corriente rápida de sodio de entrada, lo que enlentece la despolarización de fase 0 y reduce la amplitud del potencial de acción; pertenece a la clase 1A.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 70 % (45 % a 100 %), incompleta por el primer paso hepático; el pico sérico aparece a unas 2 horas y los alimentos enlentecen la absorción sin cambiar su magnitud. Con orina de pH menor de 7, alrededor del 20 % sale sin cambios por la orina, fracción que baja hasta el 5 % con orina más alcalina; la semivida es de 6 a 8 horas en adultos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The absolute bioavailability of quinidine from quinidine sulfate tablets is about 70%',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 70 % (45 % a 100 %), incompleta por el primer paso hepático; el pico sérico aparece a unas 2 horas y los alimentos enlentecen la absorción sin cambiar su magnitud.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 70 % (45 % a 100 %), incompleta por el primer paso hepático; el pico sérico aparece a unas 2 horas y los alimentos enlentecen la absorción sin cambiar su magnitud.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The absolute bioavailability of quinidine from quinidine sulfate tablets is about 70%, but this varies widely (45 to 100%) between patients',
            codigo: '34090-1'
          }
        },
        {
          t: 'La biodisponibilidad incompleta se debe al metabolismo de primer paso en el hígado.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The less-than-complete bioavailability is the result of first-pass metabolism in the liver',
            codigo: '34090-1'
          }
        },
        {
          t: 'El pico sérico aparece unas 2 horas después de la dosis; con alimentos la absorción es algo más lenta, pero igual de completa.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'Peak serum levels generally appear about 2 hours after dosing; the rate of absorption is somewhat slowed when the drug is taken with food, but the extent of absorption is not changed',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'A concentraciones de 2 a 5 mg/L se une entre un 80 % y un 88 % a las proteínas del plasma (sobre todo glicoproteína ácida α1 y albúmina); el volumen de distribución es de 2 a 3 L/kg en adultos jóvenes sanos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A concentraciones de 2 a 5 mg/L se une entre un 80 % y un 88 % a las proteínas del plasma (sobre todo glicoproteína ácida α1 y albúmina); el volumen de distribución es de 2 a 3 L/kg en adultos jóvenes sanos.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'the fraction of quinidine bound to plasma proteins (mainly to α 1 -acid glycoprotein and to albumin) is 80 to 88% in adults and older children',
            codigo: '34090-1'
          }
        },
        {
          t: 'El volumen de distribución es de 2 a 3 L/kg en adultos jóvenes sanos.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The volume of distribution of quinidine is 2 to 3 L/kg in healthy young adults',
            codigo: '34090-1'
          },
          poblacion: 'adultos jóvenes sanos'
        }
      ],
      accion: {
        diana: 'Canal de sodio rápido del miocardio',
        efecto: 'En el músculo cardíaco y las fibras de Purkinje deprime la corriente rápida de sodio de entrada, lo que enlentece la despolarización de fase 0 y reduce la amplitud del potencial de acción; pertenece a la clase 1A.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'En el músculo cardíaco y las fibras de Purkinje deprime la corriente rápida de sodio de entrada, lo que enlentece la despolarización de fase 0 y reduce la amplitud del potencial de acción; pertenece a la clase 1A.',
            ref: {
              f: 'dailymed-quinidina',
              sec: '12 · Farmacología clínica',
              cita: 'In cardiac muscle and in Purkinje fibers, quinidine depresses the rapid inward depolarizing sodium current, thereby slowing phase-0 depolarization and reducing the amplitude of the action potential',
              codigo: '34090-1'
            }
          },
          {
            t: 'Sus acciones corresponden a la clase 1A de la clasificación de Vaughan-Williams.',
            ref: {
              f: 'dailymed-quinidina',
              sec: '12 · Farmacología clínica',
              cita: 'Quinidine’s actions fall into class 1A in the Vaughan-Williams classification',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La mayor parte se elimina por el hígado mediante la CYP3A4, que forma varios metabolitos hidroxilados, algunos con actividad antiarrítmica; el más importante es la 3-hidroxiquinidina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La mayor parte se elimina por el hígado mediante la CYP3A4, que forma varios metabolitos hidroxilados, algunos con actividad antiarrítmica; el más importante es la 3-hidroxiquinidina.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'Most quinidine is eliminated hepatically via the action of cytochrome P450 IIIA4 ; there are several different hydroxylated metabolites, and some of these have antiarrhythmic activity',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3-hidroxiquinidina (3HQ)',
          actividad: 'activo',
          nota: 'Metabolito más importante, con actividad antiarrítmica; su semivida es de unas 12 horas.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The most important of quinidine’s metabolites is 3-hydroxyquinidine (3HQ), serum levels of which can exceed those of quinidine in patients receiving conventional doses of quinidine sulfate',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con orina de pH menor de 7, alrededor del 20 % sale sin cambios por la orina, fracción que baja hasta el 5 % con orina más alcalina; la semivida es de 6 a 8 horas en adultos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con orina de pH menor de 7, alrededor del 20 % sale sin cambios por la orina, fracción que baja hasta el 5 % con orina más alcalina; la semivida es de 6 a 8 horas en adultos.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'When the urine pH is less than 7, about 20% of administered quinidine appears unchanged in the urine, but this fraction drops to as little as 5% when the urine is more alkaline',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida de eliminación es de 6 a 8 horas en adultos y de 3 a 4 horas en niños.',
          ref: {
            f: 'dailymed-quinidina',
            sec: '12 · Farmacología clínica',
            cita: 'The elimination half-life is 6 to 8 hours in adults and 3 to 4 hours in children',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'quinidina',
      ref: {
        f: 'dailymed-quinidina',
        sec: '12 · Farmacología clínica',
        cita: 'The absolute bioavailability of quinidine from quinidine sulfate tablets is about 70%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'quinidina',
      ref: {
        f: 'dailymed-quinidina',
        sec: '12 · Farmacología clínica',
        cita: 'Peak serum levels generally appear about 2 hours after dosing',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '80-88',
      unidad: '%',
      analito: 'quinidina',
      poblacion: 'adultos y niños mayores',
      condiciones: '2 a 5 mg/L',
      ref: { f: 'dailymed-quinidina', sec: '12 · Farmacología clínica', cita: 'is 80 to 88% in adults and older children', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2-3',
      unidad: 'L/kg',
      analito: 'quinidina',
      poblacion: 'adultos jóvenes sanos',
      ref: {
        f: 'dailymed-quinidina',
        sec: '12 · Farmacología clínica',
        cita: 'The volume of distribution of quinidine is 2 to 3 L/kg in healthy young adults',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación en adultos',
      valor: '6-8',
      unidad: 'h',
      analito: 'quinidina',
      poblacion: 'adultos',
      ref: { f: 'dailymed-quinidina', sec: '12 · Farmacología clínica', cita: 'The elimination half-life is 6 to 8 hours in adults', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Fracción excretada sin cambios (orina ácida)',
      valor: '20 (aprox.)',
      unidad: '% de la dosis',
      analito: 'quinidina inalterada',
      condiciones: 'pH urinario menor de 7',
      ref: {
        f: 'dailymed-quinidina',
        sec: '12 · Farmacología clínica',
        cita: 'about 20% of administered quinidine appears unchanged in the urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-quinidina', 'b0d6341b-d880-4f0b-8844-bc788c03004a', 'QUINIDINE SULFATE (QUINIDINE SULFATE TABLET) TABLET', 'QUINIDINE SULFATE', '2', '2023-12-21', '2026-11-19'),
    rengPubchem(441074, 'quinidine sulfate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
