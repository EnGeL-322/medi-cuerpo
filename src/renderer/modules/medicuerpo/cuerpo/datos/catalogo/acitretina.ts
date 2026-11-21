import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acitretina',
    nombre: 'Acitretina',
    clase: 'Retinoide sistémico',
    sinonimos: [ 'acitretin', 'Soriatane' ],
    formula: 'C21H26O3',
    masaMolar: 326.4,
    smiles: 'CC1=CC(=C(C(=C1/C=C/C(=C/C=C/C(=C/C(=O)O)/C)/C)C)C)OC',
    inchikey: 'IHUNBGSDBOWDMA-AQFIFDHZSA-N',
    cid: 5284513,
    iupac: '(2E,4E,6E,8E)-9-(4-methoxy-2,3,6-trimethylphenyl)-3,7-dimethylnona-2,4,6,8-tetraenoic acid',
    area: 'Piel'
  },
  presentaciones: [
    {
      id: 'acitretina-oral',
      producto: 'Acitretin · cápsula',
      titular: 'TEVA PHARMACEUTICALS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 17.5 mg o 25 mg por cápsula, según la etiqueta',
      excipientes: [
        'crospovidone (15 mpa.s at 5%)',
        'microcrystalline cellulose',
        'poloxamer 188',
        'povidone k90',
        'sodium ascorbate',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'titanium dioxide',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'ferrosoferric oxide',
        'd&c yellow no. 10 aluminum lake',
        'fd&c blue no. 1 aluminum lake',
        'fd&c blue no. 2--aluminum lake',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de la psoriasis grave en adultos.',
        ref: {
          f: 'dailymed-acitretina',
          sec: '1 · Indicaciones',
          cita: 'Acitretin Capsules are indicated for the treatment of severe psoriasis in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acitretina',
      advertencias: [
        {
          titulo: 'Embarazo',
          texto: 'No debe usarse en el embarazo ni si se planea un embarazo durante el tratamiento o en los 3 años siguientes.',
          organos: [],
          ref: {
            f: 'dailymed-acitretina',
            sec: 'Advertencia destacada',
            cita: 'Acitretin must not be used by females who are pregnant, or who intend to become pregnant during therapy or at any time for at least 3 years following discontinuation of therapy',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'En ensayos europeos hubo casos de hepatitis tóxica confirmada por biopsia.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-acitretina',
            sec: 'Advertencias',
            cita: 'Two of the 1,289 subjects treated in European clinical trials developed biopsy-confirmed toxic hepatitis',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Síndrome de fuga capilar',
          texto: 'Suspenderla si aparece.',
          organos: [],
          ref: {
            f: 'dailymed-acitretina',
            sec: 'Advertencias',
            cita: 'Discontinue acitretin if capillary leak syndrome develops during therapy',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Muchas de sus reacciones adversas se parecen a las del síndrome de hipervitaminosis A.',
          '34084-4',
          'Many of the clinical adverse reactions reported to date with administration of acitretin resemble those of the hypervitaminosis A syndrome'
        ],
        [
          'La hipervitaminosis A da signos sobre todo mucocutáneos, musculoesqueléticos, hepáticos, neuropsiquiátricos y del sistema nervioso central.',
          '34084-4',
          'Hypervitaminosis A produces a wide spectrum of signs and symptoms primarily of the mucocutaneous, musculoskeletal, hepatic, neuropsychiatric, and central nervous systems'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 10 mg, 17.5 mg o 25 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la psoriasis grave en adultos.',
    actua: 'Su mecanismo de acción se desconoce; es un retinoide emparentado con el ácido retinoico y el retinol (vitamina A).',
    recorrido: 'Se absorbe mejor con comida: alrededor del 72 % de una dosis de 50 mg se absorbe y el pico aparece a las 2-5 horas. Sus metabolitos y conjugados se excretan finalmente por las heces (34-54 %) y la orina (16-53 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '11 · Descripción',
            cita: 'is available in 10 mg, 17.5 mg, and 25 mg gelatin capsules for oral administration',
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
      ocurre: 'Se absorbe mejor con comida: alrededor del 72 % de una dosis de 50 mg se absorbe y el pico aparece a las 2-5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe mejor con comida: alrededor del 72 % de una dosis de 50 mg se absorbe y el pico aparece a las 2-5 horas.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oral absorption of acitretin is optimal when given with food',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se absorbió alrededor del 72 % de una dosis única de 50 mg.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 72% (range: 47% to 109%) of the administered dose was absorbed after a single 50-mg dose of acitretin was given to 12 healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con comida'
        },
        {
          t: 'El pico plasmático se alcanzó entre 2 y 5 horas (media de 2,7 horas).',
          ref: { f: 'dailymed-acitretina', sec: '12.3 · Farmacocinética', cita: 'were achieved in 2 to 5 hours (mean: 2.7 hours)', codigo: '43682-4' },
          poblacion: 'sujetos sanos',
          condiciones: 'con comida'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 99,9 % a las proteínas plasmáticas, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99,9 % a las proteínas plasmáticas, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'Acitretin is more than 99.9% bound to plasma proteins, primarily albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Su mecanismo de acción se desconoce; es un retinoide emparentado con el ácido retinoico y el retinol (vitamina A).',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo de acción se desconoce; es un retinoide emparentado con el ácido retinoico y el retinol (vitamina A).',
            ref: { f: 'dailymed-acitretina', sec: '12 · Farmacología clínica', cita: 'The mechanism of action of acitretin is unknown', codigo: '34090-1' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras absorberse se metaboliza ampliamente y se interconvierte por isomerización en su forma 13-cis (cis-acitretina); con alcohol puede formarse etretinato, de semivida mucho más larga.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras absorberse se metaboliza ampliamente y se interconvierte por isomerización en su forma 13-cis (cis-acitretina); con alcohol puede formarse etretinato, de semivida mucho más larga.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral absorption, acitretin undergoes extensive metabolism and interconversion by simple isomerization to its 13-cis form (cis-acitretin)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Si se toma con etanol puede formarse etretinato, un retinoide de semivida mucho más larga.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'etretinate (a retinoid with a much longer half-life, see below) can be formed with concurrent ingestion of acitretin and ethanol',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'cis-acitretina',
          actividad: 'desconocida',
          nota: 'Isómero 13-cis; se sigue metabolizando.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'acitretin undergoes extensive metabolism and interconversion by simple isomerization to its 13-cis form (cis-acitretin)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sus metabolitos y conjugados se excretan finalmente por las heces (34-54 %) y la orina (16-53 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sus metabolitos y conjugados se excretan finalmente por las heces (34-54 %) y la orina (16-53 %).',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'The chain-shortened metabolites and conjugates of acitretin and cis-acitretin are ultimately excreted in the feces (34% to 54%) and urine (16% to 53%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal con dosis repetidas es de 49 horas.',
          ref: {
            f: 'dailymed-acitretina',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of acitretin following multiple-dose administration is 49 hours (range: 33 to 96 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio hasta el pico',
      valor: '2,7',
      unidad: 'h',
      analito: 'acitretina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 50 mg con comida',
      ref: { f: 'dailymed-acitretina', sec: '12.3 · Farmacocinética', cita: 'were achieved in 2 to 5 hours (mean: 2.7 hours)', codigo: '43682-4' }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción absorbida',
      valor: '72 (aprox.)',
      unidad: '% de la dosis',
      analito: 'acitretina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 50 mg',
      ref: {
        f: 'dailymed-acitretina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 72% (range: 47% to 109%) of the administered dose was absorbed',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,9',
      unidad: '%',
      analito: 'acitretina',
      ref: { f: 'dailymed-acitretina', sec: '12.3 · Farmacocinética', cita: 'Acitretin is more than 99.9% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal con dosis repetidas',
      valor: '49',
      unidad: 'h',
      analito: 'acitretina',
      ref: {
        f: 'dailymed-acitretina',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of acitretin following multiple-dose administration is 49 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acitretina', '993a5325-cd10-4450-b5ea-1c0a90510df6', 'ACITRETIN CAPSULE', 'Acitretin', '15', '2025-09-29', '2026-11-19'),
    rengPubchem(5284513, 'acitretin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
