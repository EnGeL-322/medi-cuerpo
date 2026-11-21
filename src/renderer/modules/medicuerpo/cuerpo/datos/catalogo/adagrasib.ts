import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'adagrasib',
    nombre: 'Adagrasib',
    clase: 'Inhibidor covalente irreversible de KRAS G12C',
    sinonimos: [ 'adagrasib', 'Krazati' ],
    formula: 'C32H35ClFN7O2',
    masaMolar: 604.1,
    smiles: 'CN1CCC[C@H]1COC2=NC3=C(CCN(C3)C4=CC=CC5=C4C(=CC=C5)Cl)C(=N2)N6CCN([C@H](C6)CC#N)C(=O)C(=C)F',
    inchikey: 'PEMUGDMSUDYLHU-ZEQRLZLVSA-N',
    cid: 138611145,
    iupac: '2-[(2S)-4-[7-(8-chloronaphthalen-1-yl)-2-[[(2S)-1-methylpyrrolidin-2-yl]methoxy]-6,8-dihydro-5H-pyrido[3,4-d]pyrimidin-4-yl]-1-(2-fluoroprop-2-enoyl)piperazin-2-yl]acetonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'adagrasib-oral',
      producto: 'KRAZATI · comprimido recubierto',
      titular: 'MIRATI THERAPEUTICS, INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [
        'crospovidone, unspecified',
        'hypromellose 2910 (15 mpa.s)',
        'magnesium stearate',
        'maltodextrin',
        'mannitol',
        'medium-chain triglycerides',
        'microcrystalline cellulose',
        'polydextrose',
        'silicon dioxide',
        'talc'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico con mutación KRAS G12C y, en combinación, del cáncer colorrectal, según la etiqueta.',
        ref: {
          f: 'dailymed-adagrasib',
          sec: '1 · Indicaciones',
          cita: 'KRAZATI, as a single-agent, is indicated for the treatment of adult patients with KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-adagrasib',
      advertencias: [
        {
          titulo: 'Reacciones gastrointestinales',
          texto: 'Vigilar diarrea, náuseas y vómitos y dar tratamiento de soporte.',
          organos: [],
          ref: {
            f: 'dailymed-adagrasib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for diarrhea, nausea and vomiting and provide supportive care as needed',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Evitar otros fármacos que prolongan el QTc y vigilar ECG y electrolitos en pacientes de riesgo.',
          organos: [],
          ref: {
            f: 'dailymed-adagrasib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid concomitant use of KRAZATI with other products with a known potential to prolong the QTc interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar las pruebas hepáticas antes de empezar y cada mes durante 3 meses.',
          organos: [],
          ref: {
            f: 'dailymed-adagrasib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver laboratory tests prior to the start of KRAZATI and monthly for 3 months after',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (25 % o más): náuseas, diarrea, vómitos, fatiga, dolor musculoesquelético, hepatotoxicidad, alteración renal, edema, disnea y disminución del apetito.',
          '34084-4',
          'most common adverse reactions (≥ 25%) were nausea, diarrhea, vomiting, fatigue, musculoskeletal pain, hepatotoxicity, renal impairment, edema, dyspnea, and decreased appetite'
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
    contiene: 'Comprimido recubierto: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico con mutación KRAS G12C y, en combinación, del cáncer colorrectal, según la etiqueta.',
    actua: 'Inhibidor irreversible de KRAS G12C que se une de forma covalente a la cisteína mutante y la bloquea en estado inactivo, sin afectar a KRAS normal.',
    recorrido: 'La mediana del tmax es de unas 6 horas; una comida grasa no produce diferencias clínicamente significativas. Tras una dosis marcada, alrededor del 75 % se recuperó en las heces (14 % sin cambios) y el 4,5 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 200 mg, oval shaped, white to off-white, immediate release film coated tablets',
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
      ocurre: 'La mediana del tmax es de unas 6 horas; una comida grasa no produce diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de unas 6 horas; una comida grasa no produce diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (min, max) T max of adagrasib is approximately 6 (6, 12) hours',
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
      ocurre: 'In vitro se une en alrededor del 98 % a las proteínas plasmáticas humanas; el volumen de distribución aparente es de 942 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en alrededor del 98 % a las proteínas plasmáticas humanas; el volumen de distribución aparente es de 942 L.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of adagrasib is approximately 98% in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 942 L.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of adagrasib is 942 L (57%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'KRAS G12C',
        efecto: 'Inhibidor irreversible de KRAS G12C que se une de forma covalente a la cisteína mutante y la bloquea en estado inactivo, sin afectar a KRAS normal.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor irreversible de KRAS G12C que se une de forma covalente a la cisteína mutante y la bloquea en estado inactivo, sin afectar a KRAS normal.',
            ref: {
              f: 'dailymed-adagrasib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Adagrasib is an irreversible inhibitor of KRAS G12C that covalently binds to the mutant cysteine in KRAS G12C and locks the mutant KRAS protein in its inactive state',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras una dosis se metaboliza sobre todo por la CYP3A4; con dosis repetidas inhibe su propio metabolismo y contribuyen otras CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras una dosis se metaboliza sobre todo por la CYP3A4; con dosis repetidas inhibe su propio metabolismo y contribuyen otras CYP.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'Adagrasib is metabolized primarily by CYP3A4 following single dose administration',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 75 % se recuperó en las heces (14 % sin cambios) y el 4,5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 75 % se recuperó en las heces (14 % sin cambios) y el 4,5 % en la orina.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% of the dose was recovered in feces (14% as unchanged) and 4.5% recovered in urine (2% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de 23 horas y el aclaramiento oral aparente de 37 L/h en pacientes.',
          ref: {
            f: 'dailymed-adagrasib',
            sec: '12.3 · Farmacocinética',
            cita: 'The adagrasib terminal elimination half-life is 23 hours (16%) and the apparent oral clearance (CL/F) is 37 L/h (54%) in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'adagrasib',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (min, max) T max of adagrasib is approximately 6 (6, 12) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'adagrasib',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'Human plasma protein binding of adagrasib is approximately 98% in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '942',
      unidad: 'L',
      analito: 'adagrasib',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of adagrasib is 942 L (57%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '23',
      unidad: 'h',
      analito: 'adagrasib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'The adagrasib terminal elimination half-life is 23 hours (16%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '37',
      unidad: 'L/h',
      analito: 'adagrasib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent oral clearance (CL/F) is 37 L/h (54%) in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '75 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-adagrasib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 75% of the dose was recovered in feces (14% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-adagrasib', '0b8bf078-34c2-4f45-9012-38a8ac082b01', 'KRAZATI (ADAGRASIB) TABLET, COATED', 'KRAZATI', '14', '2026-10-23', '2026-11-19'),
    rengPubchem(138611145, 'adagrasib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
