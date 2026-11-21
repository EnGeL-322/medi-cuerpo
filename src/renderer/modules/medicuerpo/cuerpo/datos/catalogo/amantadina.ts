import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amantadina',
    nombre: 'Amantadina',
    clase: 'Antiviral y antiparkinsoniano',
    sinonimos: [ 'amantadine', 'Symmetrel' ],
    formula: 'C10H17N',
    masaMolar: 151.25,
    smiles: 'C1C2CC3CC1CC(C2)(C3)N',
    inchikey: 'DKNWSYNQZKUICI-UHFFFAOYSA-N',
    cid: 2130,
    iupac: 'adamantan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'amantadina-oral',
      producto: 'Amantadine Hydrochloride · cápsula',
      titular: 'STRIDES PHARMA INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de amantadina',
        ref: { f: 'dailymed-amantadina', sec: '11 · Descripción', cita: 'Amantadine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',
        'croscarmellose sodium',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'gelatin',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'sodium lauryl sulfate',
        'titanium dioxide',
        'ethylcellulose (7 mpa.s)',
        'potassium hydroxide',
        'propylene glycol',
        'shellac',
        'ammonia'
      ],
      usos: {
        t: 'Prevención y tratamiento de la gripe A, enfermedad de Parkinson y reacciones extrapiramidales por fármacos.',
        ref: {
          f: 'dailymed-amantadina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the prophylaxis and treatment of signs and symptoms of infection caused by various strains of influenza A virus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-amantadina',
      advertencias: [
        {
          titulo: 'Sobredosis',
          texto: 'Se han descrito muertes por sobredosis; la toxicidad aguda puede deberse a sus efectos anticolinérgicos.',
          organos: [ 'corazon', 'encefalo' ],
          ref: { f: 'dailymed-amantadina', sec: 'Advertencias', cita: 'Deaths have been reported from overdose with amantadine', codigo: '34071-1' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes a la dosis recomendada (5-10 %): náuseas, mareo e insomnio.',
          '34084-4',
          'are: nausea, dizziness (lightheadedness), and insomnia'
        ],
        [
          'Menos frecuentes (1-5 %): depresión, ansiedad, alucinaciones, confusión, boca seca, estreñimiento, livedo reticular y edema periférico.',
          '34084-4',
          'depression, anxiety and irritability, hallucinations, confusion'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta; el activo va como clorhidrato de amantadina. Los excipientes no son el principio activo.',
    usos: 'Prevención y tratamiento de la gripe A, enfermedad de Parkinson y reacciones extrapiramidales por fármacos.',
    actua: 'Contra la gripe A, impide sobre todo que el material genético del virus entre en la célula al interferir con la proteína M2 del virus; en el Parkinson, estudios en animales sugieren efectos sobre las neuronas de dopamina.',
    recorrido: 'Se absorbe bien por vía oral; el pico llega hacia 3,3 horas (de 1,5 a 8). Sale sobre todo sin cambios por la orina, por filtración glomerular y secreción tubular; su semivida es de 17 horas de media.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca.',
          ref: {
            f: 'dailymed-amantadina',
            sec: '11 · Descripción',
            cita: 'Amantadine hydrochloride USP is designated chemically as 1-adamantanamine hydrochloride',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien por vía oral; el pico llega hacia 3,3 horas (de 1,5 a 8).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien por vía oral; el pico llega hacia 3,3 horas (de 1,5 a 8).',
          ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'Amantadine is well absorbed orally', codigo: '34090-1' }
        },
        {
          t: 'Tiempo hasta el pico de 3,3 horas de media.',
          ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'The time to peak concentration was 3.3 ± 1.5 hours', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución de 3 a 8 L/kg tras la vía intravenosa, lo que sugiere unión a los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución de 3 a 8 L/kg tras la vía intravenosa, lo que sugiere unión a los tejidos.',
          ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'was 3 to 8 L/kg, suggesting tissue binding', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Proteína M2 del virus de la gripe A',
        efecto: 'Contra la gripe A, impide sobre todo que el material genético del virus entre en la célula al interferir con la proteína M2 del virus; en el Parkinson, estudios en animales sugieren efectos sobre las neuronas de dopamina.',
        lugar: [ 'sitio-infeccion', 'encefalo' ],
        datos: [
          {
            t: 'Contra la gripe A, impide sobre todo que el material genético del virus entre en la célula al interferir con la proteína M2 del virus; en el Parkinson, estudios en animales sugieren efectos sobre las neuronas de dopamina.',
            ref: {
              f: 'dailymed-amantadina',
              sec: '12 · Farmacología clínica',
              cita: 'by interfering with the function of the transmembrane domain of the viral M2 protein',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se han identificado ocho metabolitos en la orina; el N-acetilado supone del 5 % al 15 % de la dosis y no se conoce su papel.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se han identificado ocho metabolitos en la orina; el N-acetilado supone del 5 % al 15 % de la dosis y no se conoce su papel.',
          ref: {
            f: 'dailymed-amantadina',
            sec: '12 · Farmacología clínica',
            cita: 'One metabolite, an N-acetylated compound, was quantified in human urine and accounted for 5 to 15% of the administered dose',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Amantadina N-acetilada',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-amantadina',
            sec: '12 · Farmacología clínica',
            cita: 'The contribution of this metabolite to efficacy or toxicity is not known',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo sin cambios por la orina, por filtración glomerular y secreción tubular; su semivida es de 17 horas de media.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo sin cambios por la orina, por filtración glomerular y secreción tubular; su semivida es de 17 horas de media.',
          ref: {
            f: 'dailymed-amantadina',
            sec: '12 · Farmacología clínica',
            cita: 'It is primarily excreted unchanged in the urine by glomerular filtration and tubular secretion',
            codigo: '34090-1'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '3,3 (± 1,5)',
      unidad: 'h',
      analito: 'amantadina',
      ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'The time to peak concentration was 3.3 ± 1.5 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '17 (± 4)',
      unidad: 'h',
      analito: 'amantadina',
      ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'The half-life was 17 ± 4 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '0,51 (± 0,14)',
      unidad: 'mcg/mL',
      analito: 'amantadina',
      poblacion: '6 personas sanas',
      condiciones: '200 mg en comprimidos, dosis única',
      origen: 'otra-presentacion',
      ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'resulted in a C max of 0.51 ± 0.14 mcg/mL', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '3-8',
      unidad: 'L/kg',
      analito: 'amantadina',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: { f: 'dailymed-amantadina', sec: '12 · Farmacología clínica', cita: 'was 3 to 8 L/kg, suggesting tissue binding', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-amantadina', 'e4d8f36f-d668-4728-8dca-b1c22bd9aedb', 'AMANTADINE HYDROCHLORIDE CAPSULE', 'Amantadine Hydrochloride', '10', '2026-02-02', '2026-11-12'),
    rengPubchem(2130, 'amantadine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
