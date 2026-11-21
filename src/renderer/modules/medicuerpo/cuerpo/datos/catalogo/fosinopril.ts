import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fosinopril',
    nombre: 'Fosinopril',
    clase: 'Inhibidor de la enzima conversora de la angiotensina (IECA)',
    sinonimos: [ 'fosinopril' ],
    formula: 'C30H46NO7P',
    masaMolar: 563.7,
    smiles: 'CCC(=O)O[C@H](C(C)C)O[P@](=O)(CCCCC1=CC=CC=C1)CC(=O)N2C[C@@H](C[C@H]2C(=O)O)C3CCCCC3',
    inchikey: 'BIDNLKIUORFRQP-XYGFDPSESA-N',
    cid: 9601226,
    iupac: '(2S,4S)-4-cyclohexyl-1-[2-[[(1S)-2-methyl-1-propanoyloxypropoxy]-(4-phenylbutyl)phosphoryl]acetyl]pyrrolidine-2-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'fosinopril-oral',
      producto: 'Fosinopril Sodium · comprimido',
      titular: 'AUROBINDO PHARMA LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg o 40 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Sal sódica de fosinopril', ref: { f: 'dailymed-fosinopril', sec: '11 · Descripción', cita: 'Fosinopril sodium', codigo: '34089-3' } },
      excipientes: [ 'anhydrous lactose', 'crospovidone (120 .mu.m)', 'microcrystalline cellulose', 'povidone k30', 'sodium stearyl fumarate' ],
      usos: {
        t: 'Tratamiento de la hipertensión, sola o con diuréticos tiazídicos, y de la insuficiencia cardíaca como tratamiento complementario.',
        ref: {
          f: 'dailymed-fosinopril',
          sec: '1 · Indicaciones',
          cita: 'Fosinopril sodium tablets are indicated for the treatment of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fosinopril',
      advertencias: [
        {
          titulo: 'Toxicidad fetal',
          texto: 'Los fármacos que actúan directamente sobre el sistema renina-angiotensina pueden causar lesiones y muerte al feto en desarrollo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-fosinopril',
            sec: 'Advertencia destacada',
            cita: 'Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Reacciones anafilactoides',
          texto: 'Los pacientes que reciben inhibidores de la ECA, incluido el fosinopril, pueden presentar diversas reacciones adversas.',
          organos: [ 'vasos', 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-fosinopril',
            sec: 'Advertencias',
            cita: 'patients receiving ACE inhibitors (including fosinopril sodium) may be subject to a variety of adverse reactions',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Los motivos más frecuentes de suspensión (0,4 % a 0,9 %) fueron cefalea, aumento de transaminasas, fatiga y tos.',
          '34084-4',
          'The most frequent reasons (0.4 to 0.9%) were headache, elevated transaminases, fatigue, cough'
        ],
        [
          'En los ensayos, la incidencia de acontecimientos adversos en mayores de 65 años fue similar a la de los más jóvenes.',
          '34084-4',
          'During clinical trials with any fosinopril sodium regimen, the incidence of adverse events in the elderly (≥65 years old) was similar to that seen in younger patient'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 20 mg o 40 mg por comprimido, según la etiqueta; el activo va como sal sódica de fosinopril. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, sola o con diuréticos tiazídicos, y de la insuficiencia cardíaca como tratamiento complementario.',
    actua: 'Las esterasas hidrolizan el fosinopril a la forma activa, el fosinoprilat, un inhibidor competitivo y específico de la enzima conversora de la angiotensina (ECA).',
    recorrido: 'Tras la administración oral se absorbe lentamente; la absorción absoluta del fosinopril fue en promedio del 36 % de una dosis oral. Tras la administración oral del fosinopril marcado, aproximadamente la mitad de la dosis absorbida se excreta por la orina y el resto por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada; es un profármaco.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada; es un profármaco.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '11 · Descripción',
            cita: 'Fosinopril sodium tablets, USP are the sodium salt of fosinopril, the ester prodrug of an angiotensin-converting enzyme (ACE) inhibitor, fosinoprilat',
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
      ocurre: 'Tras la administración oral se absorbe lentamente; la absorción absoluta del fosinopril fue en promedio del 36 % de una dosis oral.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe lentamente; la absorción absoluta del fosinopril fue en promedio del 36 % de una dosis oral.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'Following oral administration, fosinopril (the prodrug) is absorbed slowly. The absolute absorption of fosinopril averaged 36% of an oral dose',
            codigo: '34090-1'
          }
        },
        {
          t: 'El lugar principal de absorción es el intestino delgado proximal (duodeno y yeyuno).',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'The primary site of absorption is the proximal small intestine (duodenum/jejunum)',
            codigo: '34090-1'
          }
        },
        {
          t: 'La presencia de alimento puede retrasar la velocidad de absorción, pero casi no cambia su extensión.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'While the rate of absorption may be slowed by the presence of food in the gastrointestinal tract, the extent of absorption of fosinopril is essentially unaffected',
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
      ocurre: 'El fosinoprilat se une mucho a las proteínas (aproximadamente el 99,4 %), tiene un volumen de distribución relativamente pequeño y su unión a componentes celulares de la sangre es insignificante.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El fosinoprilat se une mucho a las proteínas (aproximadamente el 99,4 %), tiene un volumen de distribución relativamente pequeño y su unión a componentes celulares de la sangre es insignificante.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'Fosinoprilat is highly protein-bound (approximately 99.4%), has a relatively small volume of distribution, and has negligible binding to cellular components in blood',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Enzima conversora de la angiotensina (ECA)',
        efecto: 'Las esterasas hidrolizan el fosinopril a la forma activa, el fosinoprilat, un inhibidor competitivo y específico de la enzima conversora de la angiotensina (ECA).',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'Las esterasas hidrolizan el fosinopril a la forma activa, el fosinoprilat, un inhibidor competitivo y específico de la enzima conversora de la angiotensina (ECA).',
            ref: {
              f: 'dailymed-fosinopril',
              sec: '12 · Farmacología clínica',
              cita: 'In animals and humans, fosinopril sodium is hydrolyzed by esterases to the pharmacologically active form, fosinoprilat, a specific competitive inhibitor angiotensin-converting enzyme (ACE)',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras una dosis oral marcada, el 75 % de la radiactividad del plasma era fosinoprilat activo, del 20 % al 30 % un conjugado glucurónido y del 1 % al 5 % un metabolito p-hidroxi.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 75 % de la radiactividad del plasma era fosinoprilat activo, del 20 % al 30 % un conjugado glucurónido y del 1 % al 5 % un metabolito p-hidroxi.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'After an oral dose of radiolabeled fosinopril, 75% of radioactivity in plasma was present as active fosinoprilat, 20 to 30% as a glucuronide conjugate of fosinoprilat, and 1 to 5% as a p -hydroxy metabolite of fosinoprilat',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Fosinoprilat',
          actividad: 'activo',
          nota: 'Forma activa del fosinopril.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: '75% of radioactivity in plasma was present as active fosinoprilat',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Conjugado glucurónido del fosinoprilat',
          actividad: 'inactivo',
          nota: 'Sin actividad inhibidora de la ECA (en ratas).',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'the glucuronide conjugate is devoid of ACE inhibitory activity',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la administración oral del fosinopril marcado, aproximadamente la mitad de la dosis absorbida se excreta por la orina y el resto por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la administración oral del fosinopril marcado, aproximadamente la mitad de la dosis absorbida se excreta por la orina y el resto por las heces.',
          ref: {
            f: 'dailymed-fosinopril',
            sec: '12 · Farmacología clínica',
            cita: 'After oral administration of radiolabeled fosinopril, approximately half of the absorbed dose is excreted in the urine and the remainder is excreted in the feces',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'otra',
      nombre: 'Absorción absoluta del fosinopril',
      valor: '36',
      unidad: '%',
      analito: 'fosinopril',
      ref: {
        f: 'dailymed-fosinopril',
        sec: '12 · Farmacología clínica',
        cita: 'The absolute absorption of fosinopril averaged 36% of an oral dose',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'fosinoprilat',
      ref: {
        f: 'dailymed-fosinopril',
        sec: '12 · Farmacología clínica',
        cita: 'Times to peak concentrations are independent of dose and are achieved in approximately 3 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión del fosinoprilat a proteínas',
      valor: '99,4 (aprox.)',
      unidad: '%',
      analito: 'fosinoprilat',
      ref: {
        f: 'dailymed-fosinopril',
        sec: '12 · Farmacología clínica',
        cita: 'Fosinoprilat is highly protein-bound (approximately 99.4%)',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fosinopril', 'aee04f17-8ee9-42f5-861f-b6ba17220ca4', 'FOSINOPRIL SODIUM TABLET', 'Fosinopril Sodium', '9', '2026-10-16', '2026-11-15'),
    rengPubchem(9601226, 'fosinopril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
