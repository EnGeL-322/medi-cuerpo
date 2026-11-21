import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'benznidazol',
    nombre: 'Benznidazol',
    clase: 'Antiparasitario nitroimidazólico (tripanocida)',
    sinonimos: [ 'benznidazole' ],
    formula: 'C12H12N4O3',
    masaMolar: 260.25,
    smiles: 'C1=CC=C(C=C1)CNC(=O)CN2C=CN=C2[N+](=O)[O-]',
    inchikey: 'CULUWZNBISUWAS-UHFFFAOYSA-N',
    cid: 31593,
    iupac: 'N-benzyl-2-(2-nitroimidazol-1-yl)acetamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'benznidazol-oral',
      producto: 'Benznidazole · comprimido',
      titular: 'EXELTIS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [ 'magnesium stearate', 'microcrystalline cellulose', 'lactose monohydrate', 'starch, corn', 'croscarmellose sodium' ],
      usos: {
        t: 'Tratamiento de la enfermedad de Chagas causada por Trypanosoma cruzi en niños de 2 a 12 años.',
        ref: {
          f: 'dailymed-benznidazol',
          sec: '1 · Indicaciones',
          cita: 'Benznidazole Tablets are indicated in pediatric patients 2 to 12 years of age for the treatment of Chagas disease (American trypanosomiasis) caused by Trypanosoma cruzi',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-benznidazol',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; se recomienda una prueba de embarazo en mujeres en edad fértil.',
          organos: [],
          ref: { f: 'dailymed-benznidazol', sec: '5 · Advertencias y precauciones', cita: 'Embryo-Fetal Toxicity: Can cause fetal harm', codigo: '43685-7' }
        },
        {
          titulo: 'Reacciones cutáneas de hipersensibilidad',
          texto: 'Si la reacción cutánea se acompaña de síntomas sistémicos, se recomienda suspenderlo.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-benznidazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity skin reactions have been reported with benznidazole',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión de la médula ósea',
          texto: 'Se han observado neutropenia, trombocitopenia, anemia y leucopenia.',
          organos: [ 'medula-osea' ],
          ref: {
            f: 'dailymed-benznidazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'There have been hematological manifestations of bone marrow depression, such as neutropenia, thrombocytopenia, anemia, and leukopenia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: dolor abdominal, exantema, pérdida de peso, cefalea, náuseas, vómitos, neutropenia, urticaria, prurito, eosinofilia y disminución del apetito.',
          '34084-4',
          'Most common adverse reactions observed were abdominal pain, rash, decreased weight, headache, nausea, vomiting, neutropenia, urticaria, pruritus, eosinophilia, decreased appetite'
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
    contiene: 'Comprimido: 12.5 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la enfermedad de Chagas causada por Trypanosoma cruzi en niños de 2 a 12 años.',
    actua: 'Inhibe la síntesis de ADN, ARN y proteínas dentro de T. cruzi; una nitrorreductasa del parásito lo reduce a intermediarios de vida corta que pueden dañar el ADN y otras macromoléculas.',
    recorrido: 'En ayunas la mediana del tmax es de 2 horas; una comida grasa no cambia la Cmax ni el AUC, aunque retrasa el pico a unas 3,2 horas. Tras 100 mg marcados, alrededor del 68 % de la radiactividad se recuperó en la orina (6 % sin cambios) y el 21 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo; puede prepararse en suspensión con agua.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo; puede prepararse en suspensión con agua.',
          ref: { f: 'dailymed-benznidazol', sec: '12.3 · Farmacocinética', cita: 'Slurry prepared with one Benznidazole 100 mg Tablet', codigo: '43682-4' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con una comida rica en grasas',
      ocurre: 'En ayunas la mediana del tmax es de 2 horas; una comida grasa no cambia la Cmax ni el AUC, aunque retrasa el pico a unas 3,2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas la mediana del tmax es de 2 horas; una comida grasa no cambia la Cmax ni el AUC, aunque retrasa el pico a unas 3,2 horas.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Benznidazole Cmax and AUC were not affected by the administration of Benznidazole 100 mg tablet with a high-fat, high-caloric meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas es de alrededor del 44 al 60 % y no se reparte preferentemente en los glóbulos rojos; el volumen de distribución aparente es de unos 45 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas es de alrededor del 44 al 60 % y no se reparte preferentemente en los glóbulos rojos; el volumen de distribución aparente es de unos 45 L.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding is reported to be approximately 44 to 60 %',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 45 L.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of benznidazole is approximately 45 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Nitrorreductasa de tipo I de T. cruzi',
        efecto: 'Inhibe la síntesis de ADN, ARN y proteínas dentro de T. cruzi; una nitrorreductasa del parásito lo reduce a intermediarios de vida corta que pueden dañar el ADN y otras macromoléculas.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la síntesis de ADN, ARN y proteínas dentro de T. cruzi; una nitrorreductasa del parásito lo reduce a intermediarios de vida corta que pueden dañar el ADN y otras macromoléculas.',
            ref: {
              f: 'dailymed-benznidazol',
              sec: '12.4 · Microbiología',
              cita: 'Benznidazole inhibits the synthesis of DNA, RNA, and proteins within the T. cruzi parasite',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía metabólica principal parece ser la nitrorreducción seguida de glucuronidación; el fármaco original es el 80 % de la exposición plasmática.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía metabólica principal parece ser la nitrorreducción seguida de glucuronidación; el fármaco original es el 80 % de la exposición plasmática.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary benznidazole metabolism pathway is indicated to be nitro reduction followed by glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, alrededor del 68 % de la radiactividad se recuperó en la orina (6 % sin cambios) y el 21 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, alrededor del 68 % de la radiactividad se recuperó en la orina (6 % sin cambios) y el 21 % en las heces.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'about 68% and 21% of the radioactivity is recovered in urine (6% of total dose as unchanged parent drug) and feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 13 horas en voluntarios sanos.',
          ref: {
            f: 'dailymed-benznidazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of benznidazole is approximately 13 hours in healthy volunteers following single dose',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Pico tras comida rica en grasas',
      valor: '3,2',
      unidad: 'h',
      analito: 'benznidazol',
      poblacion: 'adultos sanos',
      condiciones: 'con una comida rica en grasas',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'Serum concentrations of benznidazole reached peak levels at 3.2 hours (1-10 hours) after administration of Benznidazole Tablets 100 mg tablet after a high-fat, high-caloric meal',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '44-60 (aprox.)',
      unidad: '%',
      analito: 'benznidazol',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein binding is reported to be approximately 44 to 60 %',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '45 (aprox.)',
      unidad: 'L',
      analito: 'benznidazol',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of benznidazole is approximately 45 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '13 (aprox.)',
      unidad: 'h',
      analito: 'benznidazol',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of benznidazole is approximately 13 hours in healthy volunteers following single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente',
      valor: '2,3 (aprox.)',
      unidad: 'L/h',
      analito: 'benznidazol',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent total clearance of benznidazole is about 2.3 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '68 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada de 100 mg',
      ref: {
        f: 'dailymed-benznidazol',
        sec: '12.3 · Farmacocinética',
        cita: 'about 68% and 21% of the radioactivity is recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-benznidazol', '8983d6a0-f63f-4f8e-bba4-38223f39e29b', 'BENZNIDAZOLE TABLET', 'Benznidazole', '14', '2026-08-31', '2026-11-19'),
    rengPubchem(31593, 'benznidazole', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
