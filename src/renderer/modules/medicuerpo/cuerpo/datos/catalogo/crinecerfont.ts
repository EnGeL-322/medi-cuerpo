import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'crinecerfont',
    nombre: 'Crinecerfont',
    clase: 'Antagonista del receptor 1 del factor liberador de corticotropina (CRF1)',
    sinonimos: [ 'crinecerfont', 'Crenessity' ],
    formula: 'C27H28ClFN2OS',
    masaMolar: 483,
    smiles: 'CC1=C(C=C(C=C1)[C@H](CC2CC2)N(CC#C)C3=NC(=C(S3)C)C4=C(C=C(C(=C4)C)OC)Cl)F',
    inchikey: 'IEAKXXNRGSLYTQ-DEOSSOPVSA-N',
    cid: 5282340,
    iupac: '4-(2-chloro-4-methoxy-5-methylphenyl)-N-[(1S)-2-cyclopropyl-1-(3-fluoro-4-methylphenyl)ethyl]-5-methyl-N-prop-2-ynyl-1,3-thiazol-2-amine',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'crinecerfont-oral',
      producto: 'Crenessity · cápsula',
      titular: 'NEUROCRINE BIOSCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg, 50 mg o 100 mg por cápsula, según la etiqueta',
      excipientes: [
        'lauroyl peg-32 glycerides',
        'propylene glycol dicaprylate/dicaprate',
        'medium-chain triglycerides',
        'vitamin e polyethylene glycol succinate',
        'gelatin',
        'sorbitol',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'glycerin',
        'water'
      ],
      usos: {
        t: 'Tratamiento complementario de la sustitución con glucocorticoides para controlar los andrógenos en la hiperplasia suprarrenal congénita clásica, desde los 4 años.',
        ref: {
          f: 'dailymed-crinecerfont',
          sec: '1 · Indicaciones',
          cita: 'indicated as adjunctive treatment to glucocorticoid replacement to control androgens in adults and pediatric patients 4 years of age and older with classic congenital adrenal hyperplasia (CAH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-crinecerfont',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Incluyen opresión de garganta, angioedema y exantema generalizado; si son importantes, suspenderlo.',
          organos: [],
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity Reactions: Include throat tightness, angioedema, and generalized rash',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Riesgo de insuficiencia suprarrenal aguda o crisis suprarrenal',
          texto: 'Mantener los glucocorticoides y no bajar la dosis por debajo de la necesaria para sustituir el cortisol.',
          organos: [],
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not reduce the glucocorticoid dose below the dose required for cortisol replacement',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes (al menos el 4 % y más que con placebo): fatiga, cefalea, mareo, artralgia, dolor de espalda, disminución del apetito y mialgia.',
          '34084-4',
          'Most common adverse reactions (at least 4% for CRENESSITY and greater than placebo) are fatigue, headache, dizziness, arthralgia, back pain, decreased appetite, and myalgia'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg, 50 mg o 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de la sustitución con glucocorticoides para controlar los andrógenos en la hiperplasia suprarrenal congénita clásica, desde los 4 años.',
    actua: 'Bloquea la unión del CRF a sus receptores de tipo 1 en la hipófisis; así reduce la secreción de ACTH y la producción de andrógenos suprarrenales que depende de ella.',
    recorrido: 'La mediana del tiempo hasta el pico es de 4 horas; con una comida rica en grasas la Cmax aumenta 4,9 veces y el AUC 3,3 veces. Tras 100 mg marcados, alrededor del 47,3 % de la dosis se recuperó en las heces (2,7 % sin cambios) y el 2 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '3 · Formas y concentraciones',
            cita: 'oval, orange soft gelatin capsule printed with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 4 horas; con una comida rica en grasas la Cmax aumenta 4,9 veces y el AUC 3,3 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 4 horas; con una comida rica en grasas la Cmax aumenta 4,9 veces y el AUC 3,3 veces.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'Crinecerfont median time to reach C max (T max ) is 4 hours following oral administration of CRENESSITY',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con las cápsulas, una comida rica en grasas multiplicó la Cmax por 4,9 y el AUC por 3,3.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of CRENESSITY capsule, crinecerfont C max increased 4.9-fold and AUC increased 3.3-fold with a high-fat meal',
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
      ocurre: 'Se une en un 99,9 % o más a las proteínas plasmáticas; el volumen de distribución aparente en adultos con la enfermedad es de 852 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,9 % o más a las proteínas plasmáticas; el volumen de distribución aparente en adultos con la enfermedad es de 852 L.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'Crinecerfont plasma protein binding is greater than or equal to 99.9%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 852 L en adultos con hiperplasia suprarrenal congénita.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean apparent volume of distribution (CV%) of crinecerfont in adults with CAH is 852 L (31%)',
            codigo: '43682-4'
          },
          poblacion: 'adultos con hiperplasia suprarrenal congénita'
        }
      ],
      accion: {
        diana: 'Receptor CRF1',
        efecto: 'Bloquea la unión del CRF a sus receptores de tipo 1 en la hipófisis; así reduce la secreción de ACTH y la producción de andrógenos suprarrenales que depende de ella.',
        lugar: [],
        datos: [
          {
            t: 'Bloquea la unión del CRF a sus receptores de tipo 1 en la hipófisis; así reduce la secreción de ACTH y la producción de andrógenos suprarrenales que depende de ella.',
            ref: {
              f: 'dailymed-crinecerfont',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Crinecerfont binding to CRF type 1 receptors inhibits adrenocorticotropic hormone (ACTH) secretion from the pituitary, thereby reducing ACTH-mediated adrenal androgen production',
              codigo: '43679-0'
            }
          },
          {
            t: 'Bloquea la unión del CRF a los receptores de tipo 1 de la hipófisis, pero no a los de tipo 2.',
            ref: {
              f: 'dailymed-crinecerfont',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Crinecerfont blocks the binding of CRF to CRF type 1 receptors in the pituitary but not CRF type 2 receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2B6.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2B6.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'Crinecerfont is metabolized primarily by CYP3A4 and to a lesser extent by CYP2B6 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, alrededor del 47,3 % de la dosis se recuperó en las heces (2,7 % sin cambios) y el 2 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, alrededor del 47,3 % de la dosis se recuperó en las heces (2,7 % sin cambios) y el 2 % en la orina.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 47.3% (2.7% as unchanged) of the dose was recovered in feces and 2% (amount as unchanged is undetectable) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 14 horas y el aclaramiento aparente, de 3,5 L/h.',
          ref: {
            f: 'dailymed-crinecerfont',
            sec: '12.3 · Farmacocinética',
            cita: 'effective half-life is approximately 14 hours with a mean (CV%) apparent clearance of 3.5 L/h (37%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '4',
      unidad: 'h',
      analito: 'crinecerfont',
      ref: {
        f: 'dailymed-crinecerfont',
        sec: '12.3 · Farmacocinética',
        cita: 'Crinecerfont median time to reach C max (T max ) is 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 99,9',
      unidad: '%',
      analito: 'crinecerfont',
      ref: {
        f: 'dailymed-crinecerfont',
        sec: '12.3 · Farmacocinética',
        cita: 'Crinecerfont plasma protein binding is greater than or equal to 99.9%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '852',
      unidad: 'L',
      analito: 'crinecerfont',
      poblacion: 'adultos con hiperplasia suprarrenal congénita',
      ref: {
        f: 'dailymed-crinecerfont',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean apparent volume of distribution (CV%) of crinecerfont in adults with CAH is 852 L (31%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '14 (aprox.)',
      unidad: 'h',
      analito: 'crinecerfont',
      ref: { f: 'dailymed-crinecerfont', sec: '12.3 · Farmacocinética', cita: 'effective half-life is approximately 14 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '3,5',
      unidad: 'L/h',
      analito: 'crinecerfont',
      ref: { f: 'dailymed-crinecerfont', sec: '12.3 · Farmacocinética', cita: 'apparent clearance of 3.5 L/h (37%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '47,3 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: {
        f: 'dailymed-crinecerfont',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 47.3% (2.7% as unchanged) of the dose was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-crinecerfont', 'fd3a6fbd-9137-428a-ba46-df6606f07d28', 'CRENESSITY (CRINECERFONT) CAPSULE CRENESSITY (CRINECERFONT) SOLUTION', 'Crenessity', '9', '2026-09-23', '2026-11-19'),
    rengPubchem(5282340, 'crinecerfont', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
