import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'paricalcitol',
    nombre: 'Paricalcitol',
    clase: 'Análogo sintético de la vitamina D (activador del receptor de vitamina D)',
    sinonimos: [ 'paricalcitol', 'Zemplar' ],
    formula: 'C27H44O3',
    masaMolar: 416.6,
    smiles: 'C[C@H](/C=C/[C@H](C)C(C)(C)O)[C@H]1CC[C@@H]\\2[C@@]1(CCC/C2=C\\C=C3C[C@H](C[C@@H](C3)O)O)C',
    inchikey: 'BPKAHTKRCLCHEA-UBFJEZKGSA-N',
    cid: 5281104,
    iupac: 'trans-(1R,3R)-5-[(2E)-2-[(1R,3aS,7aR)-1-[(E,2R,5S)-6-hydroxy-5,6-dimethylhept-3-en-2-yl]-7a-methyl-2,3,3a,5,6,7-hexahydro-1H-inden-4-ylidene]ethylidene]cyclohexane-1,3-diol',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'paricalcitol-oral',
      producto: 'Zemplar · cápsula blanda',
      titular: 'ABBVIE INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '1 o 2 microgramos (mcg) por cápsula, según la etiqueta',
      excipientes: [
        'glycerin',
        'titanium dioxide',
        'water',
        'ferric oxide red',
        'ferric oxide yellow',
        'alcohol',
        'butylated hydroxytoluene',
        'medium-chain triglycerides',
        'gelatin, unspecified'
      ],
      usos: {
        t: 'Prevención y tratamiento del hiperparatiroidismo secundario de la enfermedad renal crónica en adultos y desde los 10 años.',
        ref: {
          f: 'dailymed-paricalcitol',
          sec: '1 · Indicaciones',
          cita: 'indicated in adults and pediatric patients 10 years and older for the prevention and treatment of secondary hyperparathyroidism',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-paricalcitol',
      advertencias: [
        {
          titulo: 'Hipercalcemia',
          texto: 'El exceso de compuestos de vitamina D puede suprimir en exceso la PTH y causar hipercalcemia, hipercalciuria, hiperfosfatemia y enfermedad ósea adinámica.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Excessive administration of vitamin D compounds, including ZEMPLAR capsules, can cause over suppression of PTH, hypercalcemia, hypercalciuria, hyperphosphatemia, and adynamic bone disease',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad digitálica',
          texto: 'Usar con precaución junto con digitálicos.',
          organos: [],
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use caution when ZEMPLAR capsules are prescribed concomitantly with digitalis compounds',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pruebas de laboratorio',
          texto: 'Medir el calcio, el fósforo y la PTH al empezar y tras cada ajuste de dosis.',
          organos: [],
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor serum calcium, serum phosphorus, and serum or plasma iPTH during initial dosing or following any dose adjustment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 5 % y más que con placebo): diarrea, nasofaringitis, mareo, vómitos, hipertensión, hipersensibilidad, náuseas y edema.',
          '34084-4',
          'The most common adverse reactions (> 5% and more frequent than placebo) include diarrhea, nasopharyngitis, dizziness, vomiting, hypertension, hypersensitivity, nausea, and edema'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical studies are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula blanda: 1 o 2 microgramos (mcg) por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Prevención y tratamiento del hiperparatiroidismo secundario de la enfermedad renal crónica en adultos y desde los 10 años.',
    actua: 'Se une al receptor de la vitamina D y activa de forma selectiva sus vías; reduce la hormona paratiroidea al inhibir su síntesis y su secreción.',
    recorrido: 'La biodisponibilidad absoluta media va del 72 % al 86 %; una comida rica en grasas no cambia la Cmax ni el AUC, aunque retrasa el pico unas 2 horas. Se elimina sobre todo por vía hepatobiliar: alrededor del 70 % de la dosis marcada se recupera en las heces y el 18 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-paricalcitol', sec: '3 · Formas y concentraciones', cita: '1 mcg: oval, gray capsule imprinted with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta media va del 72 % al 86 %; una comida rica en grasas no cambia la Cmax ni el AUC, aunque retrasa el pico unas 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media va del 72 % al 86 %; una comida rica en grasas no cambia la Cmax ni el AUC, aunque retrasa el pico unas 2 horas.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of ZEMPLAR capsules under low-fat fed condition ranged from 72% to 86%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax y el AUC no cambiaron.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'were unchanged when paricalcitol was administered with a high fat meal compared to fasting',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasas'
        },
        {
          t: 'La comida retrasó el pico unas 2 horas.',
          ref: { f: 'dailymed-paricalcitol', sec: '12.3 · Farmacocinética', cita: 'Food delayed T max by about 2 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99,8 % o más a las proteínas plasmáticas; el volumen de distribución aparente en voluntarios sanos es de 34 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,8 % o más a las proteínas plasmáticas; el volumen de distribución aparente en voluntarios sanos es de 34 L.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Paricalcitol is extensively bound to plasma proteins (≥ 99.8%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 34 L en voluntarios sanos.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution following a 0.24 mcg/kg dose of paricalcitol in healthy adult volunteers was 34 L',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        }
      ],
      accion: {
        diana: 'Receptor de la vitamina D',
        efecto: 'Se une al receptor de la vitamina D y activa de forma selectiva sus vías; reduce la hormona paratiroidea al inhibir su síntesis y su secreción.',
        lugar: [],
        datos: [
          {
            t: 'Se une al receptor de la vitamina D y activa de forma selectiva sus vías; reduce la hormona paratiroidea al inhibir su síntesis y su secreción.',
            ref: {
              f: 'dailymed-paricalcitol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vitamin D and paricalcitol have been shown to reduce parathyroid hormone levels by inhibiting PTH synthesis and secretion',
              codigo: '43679-0'
            }
          },
          {
            t: 'Sus acciones se deben a su unión al receptor de la vitamina D, que activa de forma selectiva las vías que responden a la vitamina D.',
            ref: {
              f: 'dailymed-paricalcitol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'biological actions are mediated through binding of the VDR, which results in the selective activation of vitamin D responsive pathways',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro lo metabolizan varias enzimas hepáticas y extrahepáticas, como la CYP24 mitocondrial, la CYP3A4 y la UGT1A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro lo metabolizan varias enzimas hepáticas y extrahepáticas, como la CYP24 mitocondrial, la CYP3A4 y la UGT1A4.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro data suggest that paricalcitol is metabolized by multiple hepatic and non-hepatic enzymes, including mitochondrial CYP24, as well as CYP3A4 and UGT1A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por vía hepatobiliar: alrededor del 70 % de la dosis marcada se recupera en las heces y el 18 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por vía hepatobiliar: alrededor del 70 % de la dosis marcada se recupera en las heces y el 18 % en la orina.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Paricalcitol is eliminated primarily via hepatobiliary excretion; approximately 70% of the radiolabeled dose is recovered in the feces and 18% is recovered in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de 4 a 6 horas en voluntarios sanos.',
          ref: {
            f: 'dailymed-paricalcitol',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean elimination half-life of paricalcitol is 4 to 6 hours in healthy adult volunteers',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '72-86',
      unidad: '%',
      analito: 'paricalcitol',
      condiciones: 'con una comida pobre en grasas',
      ref: {
        f: 'dailymed-paricalcitol',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of ZEMPLAR capsules under low-fat fed condition ranged from 72% to 86%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 99,8',
      unidad: '%',
      analito: 'paricalcitol',
      ref: {
        f: 'dailymed-paricalcitol',
        sec: '12.3 · Farmacocinética',
        cita: 'Paricalcitol is extensively bound to plasma proteins (≥ 99.8%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '34',
      unidad: 'L',
      analito: 'paricalcitol',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-paricalcitol',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution following a 0.24 mcg/kg dose of paricalcitol in healthy adult volunteers was 34 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '4-6',
      unidad: 'h',
      analito: 'paricalcitol',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-paricalcitol',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean elimination half-life of paricalcitol is 4 to 6 hours in healthy adult volunteers',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-paricalcitol',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 70% of the radiolabeled dose is recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-paricalcitol', '1b27c026-2d60-47b4-2a9c-ded1818f21b5', 'ZEMPLAR (PARICALCITOL) CAPSULE, LIQUID FILLED', 'Zemplar', '1502', '2026-07-27', '2026-11-19'),
    rengPubchem(5281104, 'paricalcitol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
