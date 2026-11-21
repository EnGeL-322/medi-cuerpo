import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'calcitriol',
    nombre: 'Calcitriol',
    clase: 'Forma activa de la vitamina D3',
    sinonimos: [ 'calcitriol', 'Rocaltrol' ],
    formula: 'C27H44O3',
    masaMolar: 416.6,
    smiles: 'C[C@H](CCCC(C)(C)O)[C@H]1CC[C@@H]\\2[C@@]1(CCC/C2=C\\C=C/3\\C[C@H](C[C@@H](C3=C)O)O)C',
    inchikey: 'GMRQFYUYWCNGIN-NKMMMXOESA-N',
    cid: 5280453,
    iupac: 'trans-(1R,3S,5Z)-5-[(2E)-2-[(1R,3aS,7aR)-1-[(2R)-6-hydroxy-6-methylheptan-2-yl]-7a-methyl-2,3,3a,5,6,7-hexahydro-1H-inden-4-ylidene]ethylidene]-4-methylidenecyclohexane-1,3-diol',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'calcitriol-oral',
      producto: 'Rocaltrol · cápsula',
      titular: 'VALIDUS PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '0.25 o 0.5 microgramos (mcg) por cápsula, según la etiqueta',
      excipientes: [ 'butylated hydroxyanisole', 'butylated hydroxytoluene', 'coconut oil', 'glycerin', 'sorbitol', 'fd&c yellow no. 6', 'titanium dioxide' ],
      usos: {
        t: 'Hiperparatiroidismo secundario y enfermedad ósea metabólica en la insuficiencia renal crónica moderada o grave antes de la diálisis, y otras indicaciones según la etiqueta.',
        ref: {
          f: 'dailymed-calcitriol',
          sec: '1 · Indicaciones',
          cita: 'Rocaltrol is indicated in the management of secondary hyperparathyroidism and resultant metabolic bone disease in patients with moderate to severe chronic renal failure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-calcitriol',
      advertencias: [
        {
          titulo: 'Sobredosis de vitamina D',
          texto: 'La sobredosis de cualquier forma de vitamina D es peligrosa.',
          organos: [],
          ref: { f: 'dailymed-calcitriol', sec: 'Advertencias', cita: 'Overdosage of any form of vitamin D is dangerous', codigo: '34071-1' }
        },
        {
          titulo: 'Hipercalcemia',
          texto: 'Dar más de lo necesario puede causar hipercalcemia, hipercalciuria e hiperfosfatemia; suspender otros preparados de vitamina D.',
          organos: [],
          ref: {
            f: 'dailymed-calcitriol',
            sec: 'Advertencias',
            cita: 'The administration of Rocaltrol to patients in excess of their daily requirements can cause hypercalcemia, hypercalciuria, and hyperphosphatemia',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Calcificaciones',
          texto: 'La hipercalcemia crónica puede causar calcificación vascular generalizada, nefrocalcinosis y calcificación de otros tejidos blandos.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-calcitriol',
            sec: 'Advertencias',
            cita: 'Chronic hypercalcemia can lead to generalized vascular calcification, nephrocalcinosis and other soft-tissue calcification',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Sus efectos adversos son, en general, los del exceso de vitamina D, con hipercalcemia o intoxicación por calcio.',
          '34084-4',
          'adverse effects are, in general, similar to those encountered with excessive vitamin D intake'
        ],
        [
          'Signos precoces de intoxicación: debilidad, cefalea, somnolencia, náuseas, vómitos, boca seca, estreñimiento, dolor muscular y óseo, sabor metálico y anorexia.',
          '34084-4',
          'Early: weakness, headache, somnolence, nausea, vomiting, dry mouth, constipation, muscle pain, bone pain, metallic taste, and anorexia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.25 o 0.5 microgramos (mcg) por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hiperparatiroidismo secundario y enfermedad ósea metabólica en la insuficiencia renal crónica moderada o grave antes de la diálisis, y otras indicaciones según la etiqueta.',
    actua: 'Es la forma más activa conocida de la vitamina D3 para estimular el transporte intestinal de calcio; actúa sobre todo en el intestino y el hueso.',
    recorrido: 'Se absorbe con rapidez en el intestino; el pico sérico aparece entre 3 y 6 horas tras la dosis. Sus metabolitos se excretan sobre todo por las heces; hay recirculación enterohepática y excreción biliar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '11 · Descripción',
            cita: 'Rocaltrol is available as capsules containing 0.25 mcg or 0.5 mcg calcitriol',
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
      ocurre: 'Se absorbe con rapidez en el intestino; el pico sérico aparece entre 3 y 6 horas tras la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez en el intestino; el pico sérico aparece entre 3 y 6 horas tras la dosis.',
          ref: { f: 'dailymed-calcitriol', sec: '12.3 · Farmacocinética', cita: 'Calcitriol is rapidly absorbed from the intestine', codigo: '43682-4' }
        },
        {
          t: 'El pico sérico se alcanza entre 3 y 6 horas tras dosis únicas de 0,25 a 1,0 mcg.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak serum concentrations (above basal values) were reached within 3 to 6 hours following oral administration of single doses of 0.25 to 1.0 mcg of Rocaltrol',
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
      ocurre: 'Circula unido en alrededor del 99,9 % en la sangre, transportado por una alfa-globulina que fija la vitamina D.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Circula unido en alrededor del 99,9 % en la sangre, transportado por una alfa-globulina que fija la vitamina D.',
          ref: { f: 'dailymed-calcitriol', sec: '12.3 · Farmacocinética', cita: 'Calcitriol is approximately 99.9% bound in blood', codigo: '43682-4' }
        },
        {
          t: 'Viaja en la sangre unido a una alfa-globulina transportadora de vitamina D.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'Calcitriol and other vitamin D metabolites are transported in blood, by an alpha-globulin vitamin D binding protein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de la vitamina D',
        efecto: 'Es la forma más activa conocida de la vitamina D3 para estimular el transporte intestinal de calcio; actúa sobre todo en el intestino y el hueso.',
        lugar: [ 'intestino-delgado' ],
        datos: [
          {
            t: 'Es la forma más activa conocida de la vitamina D3 para estimular el transporte intestinal de calcio; actúa sobre todo en el intestino y el hueso.',
            ref: {
              f: 'dailymed-calcitriol',
              sec: '12.2 · Farmacodinámica',
              cita: 'Calcitriol is the most active known form of vitamin D 3 in stimulating intestinal calcium transport',
              codigo: '43681-6'
            }
          },
          {
            t: 'Sus dos lugares de acción conocidos son el intestino y el hueso.',
            ref: {
              f: 'dailymed-calcitriol',
              sec: '12.2 · Farmacodinámica',
              cita: 'The two known sites of action of calcitriol are intestine and bone',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'rinones', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una de sus vías empieza por la 24-hidroxilasa, presente en el riñón y en tejidos diana como el intestino; termina en ácido calcitroico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una de sus vías empieza por la 24-hidroxilasa, presente en el riñón y en tejidos diana como el intestino; termina en ácido calcitroico.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'There is definite evidence of 24-hydroxylase activity in the kidney; this enzyme is also present in many target tissues which possess the vitamin D receptor such as the intestine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La primera vía comienza con la 24-hidroxilasa como primer paso del catabolismo.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'The first pathway involves the 24-hydroxylase as the first step in catabolism of calcitriol',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido calcitroico',
          actividad: 'desconocida',
          nota: 'Producto final de la vía de la 24-hidroxilasa.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'The end product of this pathway is a side chain shortened metabolite, calcitroic acid',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Lactona 26,23 del calcitriol',
          actividad: 'desconocida',
          nota: 'Parece ser el metabolito circulante principal.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'The lactone appears to be the major metabolite circulating in humans',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sus metabolitos se excretan sobre todo por las heces; hay recirculación enterohepática y excreción biliar.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sus metabolitos se excretan sobre todo por las heces; hay recirculación enterohepática y excreción biliar.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolites of calcitriol are excreted primarily in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Hay recirculación enterohepática y excreción biliar del calcitriol.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'Enterohepatic recycling and biliary excretion of calcitriol occur',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras 1 mcg oral marcado, alrededor del 10 % de la radiactividad apareció en la orina en 24 horas.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'When a 1-mcg oral dose of radiolabeled calcitriol was administered to normal subjects, approximately 10% of the total radioactivity appeared in urine within 24 hours',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        },
        {
          t: 'La semivida en suero tras dosis orales únicas es de unas 5 a 8 horas.',
          ref: {
            f: 'dailymed-calcitriol',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of calcitriol in serum after single oral doses is about 5 to 8 hours in normal subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico',
      valor: '3-6',
      unidad: 'h',
      analito: 'calcitriol',
      condiciones: 'dosis únicas de 0,25 a 1,0 mcg',
      ref: {
        f: 'dailymed-calcitriol',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak serum concentrations (above basal values) were reached within 3 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión en la sangre',
      valor: '99,9 (aprox.)',
      unidad: '%',
      analito: 'calcitriol',
      ref: { f: 'dailymed-calcitriol', sec: '12.3 · Farmacocinética', cita: 'Calcitriol is approximately 99.9% bound in blood', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida en suero',
      valor: '5-8 (aprox.)',
      unidad: 'h',
      analito: 'calcitriol',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-calcitriol',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of calcitriol in serum after single oral doses is about 5 to 8 hours in normal subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad en la orina en 24 horas',
      valor: '10 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral marcada de 1 mcg',
      ref: {
        f: 'dailymed-calcitriol',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 10% of the total radioactivity appeared in urine within 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-calcitriol', 'd1013494-bf62-4e68-9f0c-e6571137f20f', 'ROCALTROL (CALCITRIOL) CAPSULE, GELATIN COATED ROCALTROL (CALCITRIOL) SOLUTION', 'Rocaltrol', '6', '2023-12-15', '2026-11-19'),
    rengPubchem(5280453, 'calcitriol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
