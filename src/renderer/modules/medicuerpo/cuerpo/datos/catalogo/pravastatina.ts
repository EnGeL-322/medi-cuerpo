import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pravastatina',
    nombre: 'Pravastatina',
    clase: 'Estatina (inhibidor de la HMG-CoA reductasa)',
    sinonimos: [ 'pravastatin', 'Pravachol' ],
    formula: 'C23H36O7',
    masaMolar: 424.5,
    smiles: 'CC[C@H](C)C(=O)O[C@H]1C[C@@H](C=C2[C@H]1[C@H]([C@H](C=C2)C)CC[C@H](C[C@H](CC(=O)O)O)O)O',
    inchikey: 'TUZYXOIXSAXUGO-PZAWKZKUSA-N',
    cid: 54687,
    iupac: '(3R,5R)-7-[(1S,2S,6S,8S,8aR)-6-hydroxy-2-methyl-8-[(2S)-2-methylbutanoyl]oxy-1,2,6,7,8,8a-hexahydronaphthalen-1-yl]-3,5-dihydroxyheptanoic acid',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'pravastatina-oral',
      producto: 'Pravastatin Sodium · comprimido',
      titular: 'TEVA PHARMACEUTICALS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg o 40 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Sal sódica de pravastatina',
        ref: { f: 'dailymed-pravastatina', sec: '11 · Descripción', cita: 'Pravastatin sodium', codigo: '34089-3' }
      },
      excipientes: [
        'anhydrous dibasic calcium phosphate',
        'crospovidone (15 mpa.s at 5%)',
        'anhydrous lactose',
        'cellulose, microcrystalline',
        'povidone k30',
        'croscarmellose sodium',
        'ferric oxide red',
        'sodium stearyl fumarate'
      ],
      usos: {
        t: 'Reducir el riesgo de infarto de miocardio, de procedimientos de revascularización y de muerte cardiovascular en adultos con colesterol LDL elevado.',
        ref: {
          f: 'dailymed-pravastatina',
          sec: '1 · Indicaciones',
          cita: 'To reduce the risk of myocardial infarction, myocardial revascularization procedures, and cardiovascular mortality in adults with elevated low-density lipoprotein cholesterol',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pravastatina',
      advertencias: [
        {
          titulo: 'Miopatía y rabdomiólisis',
          texto: 'Puede causar miopatía y rabdomiólisis; se han descrito insuficiencia renal aguda por mioglobinuria y muertes raras.',
          organos: [ 'musculos' ],
          ref: {
            f: 'dailymed-pravastatina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pravastatin may cause myopathy and rhabdomyolysis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Miopatía necrosante inmunomediada',
          texto: 'Se han descrito casos raros de esta miopatía autoinmune asociada al uso de estatinas.',
          organos: [ 'musculos' ],
          ref: {
            f: 'dailymed-pravastatina',
            sec: '5 · Advertencias y precauciones',
            cita: 'There have been rare reports of immune-mediated necrotizing myopathy (IMNM), an autoimmune myopathy, associated with statin use',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Disfunción hepática',
          texto: 'Se han descrito aumentos de las transaminasas en suero con la pravastatina.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-pravastatina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Increases in serum transaminases have been reported with use of pravastatin',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en ensayos de corta duración (≥ 2 % y más que con placebo): dolor musculoesquelético, náuseas y vómitos, infección respiratoria alta, diarrea y dolor de cabeza.',
          '34084-4',
          'the most commonly reported adverse reactions (≥2% and greater than placebo) were: musculoskeletal pain, nausea/vomiting, upper respiratory infection, diarrhea, and headache'
        ],
        [
          'Entre las reacciones importantes que describe la etiqueta figuran la miopatía y la rabdomiólisis, la miopatía necrosante inmunomediada y la disfunción hepática.',
          '34084-4',
          'The following important adverse reactions are described below and elsewhere in the labeling'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 20 mg o 40 mg por comprimido, según la etiqueta; el activo va como sal sódica de pravastatina. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de infarto de miocardio, de procedimientos de revascularización y de muerte cardiovascular en adultos con colesterol LDL elevado.',
    actua: 'Es un inhibidor reversible de la HMG-CoA reductasa, la enzima que limita la velocidad de formación de mevalonato, precursor del colesterol.',
    recorrido: 'El pico de concentración plasmática se produjo entre 1 y 1,5 horas después de la toma; la absorción oral media es del 34 % y la biodisponibilidad absoluta, del 17 %. Alrededor del 20 % de una dosis oral marcada sale por la orina y el 70 % por las heces; tras una dosis intravenosa, el 47 % del aclaramiento total fue renal y el 53 %, no renal (biliar y biotransformación).'
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
            f: 'dailymed-pravastatina',
            sec: '3 · Formas y concentraciones',
            cita: 'Pravastatin sodium tablets, USP are supplied as',
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
      ocurre: 'El pico de concentración plasmática se produjo entre 1 y 1,5 horas después de la toma; la absorción oral media es del 34 % y la biodisponibilidad absoluta, del 17 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico de concentración plasmática se produjo entre 1 y 1,5 horas después de la toma; la absorción oral media es del 34 % y la biodisponibilidad absoluta, del 17 %.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma pravastatin concentrations occurred 1 to 1.5 hours upon oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida reduce el AUC un 31 % y la Cmax un 49 %, aunque el efecto reductor del colesterol es similar con o sin comida.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'the presence of food in the gastrointestinal tract reduces area under the concentration-time curve (AUC) and C max by 31% and 49%, respectively',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Aproximadamente el 50 % del fármaco circulante va unido a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 50 % del fármaco circulante va unido a proteínas del plasma.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 50% of the circulating drug is bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'HMG-CoA reductasa',
        efecto: 'Es un inhibidor reversible de la HMG-CoA reductasa, la enzima que limita la velocidad de formación de mevalonato, precursor del colesterol.',
        lugar: [ 'higado' ],
        datos: [
          {
            t: 'Es un inhibidor reversible de la HMG-CoA reductasa, la enzima que limita la velocidad de formación de mevalonato, precursor del colesterol.',
            ref: {
              f: 'dailymed-pravastatina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pravastatin is a reversible inhibitor of HMG-CoA reductase, the rate-limiting enzyme that converts HMG-CoA to mevalonate, a precursor of cholesterol',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre una extracción de primer paso muy alta en el hígado (cociente de extracción 0,66); el metabolito 3α-hidroxi tiene entre 1/10 y 1/40 de la actividad inhibidora del compuesto original.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre una extracción de primer paso muy alta en el hígado (cociente de extracción 0,66); el metabolito 3α-hidroxi tiene entre 1/10 y 1/40 de la actividad inhibidora del compuesto original.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pravastatin undergoes extensive first-pass extraction in the liver (extraction ratio 0.66)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito isomérico 3α-hidroxi (SQ 31,906)',
          actividad: 'activo',
          nota: 'Entre 1/10 y 1/40 de la actividad del compuesto original.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: '3α-hydroxy isomeric metabolite (SQ 31,906) has 1/10 to 1/40 the HMG-CoA reductase inhibitory activity of the parent compound',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 20 % de una dosis oral marcada sale por la orina y el 70 % por las heces; tras una dosis intravenosa, el 47 % del aclaramiento total fue renal y el 53 %, no renal (biliar y biotransformación).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 20 % de una dosis oral marcada sale por la orina y el 70 % por las heces; tras una dosis intravenosa, el 47 % del aclaramiento total fue renal y el 53 %, no renal (biliar y biotransformación).',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 20% of a radiolabeled oral dose is excreted in urine and 70% in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación de la radiactividad del pravastatina fue de 1,8 horas y la del total de radiactividad, de 77 horas.',
          ref: {
            f: 'dailymed-pravastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'the radioactive elimination t ½ for pravastatin is 1.8 hours in humans',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1 a 1,5',
      unidad: 'h',
      analito: 'pravastatina',
      condiciones: 'dosis oral',
      ref: {
        f: 'dailymed-pravastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma pravastatin concentrations occurred 1 to 1.5 hours upon oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '17',
      unidad: '%',
      analito: 'pravastatina',
      ref: {
        f: 'dailymed-pravastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'the average oral absorption of pravastatin is 34% and absolute bioavailability is 17%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'pravastatina',
      ref: {
        f: 'dailymed-pravastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 50% of the circulating drug is bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado por la orina',
      valor: '20 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-pravastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 20% of a radiolabeled oral dose is excreted in urine and 70% in the feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado por las heces',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-pravastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 20% of a radiolabeled oral dose is excreted in urine and 70% in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pravastatina', '99e0e848-f8f3-4b42-b880-8fbc42633948', 'PRAVASTATIN SODIUM TABLET', 'Pravastatin Sodium', '27', '2025-05-07', '2026-11-15'),
    rengPubchem(54687, 'pravastatin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
