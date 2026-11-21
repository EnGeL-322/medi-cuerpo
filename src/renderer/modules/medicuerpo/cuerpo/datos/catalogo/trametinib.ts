import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'trametinib',
    nombre: 'Trametinib',
    clase: 'Inhibidor reversible de MEK1 y MEK2',
    sinonimos: [ 'trametinib', 'Mekinist' ],
    formula: 'C26H23FIN5O4',
    masaMolar: 615.4,
    smiles: 'CC1=C2C(=C(N(C1=O)C)NC3=C(C=C(C=C3)I)F)C(=O)N(C(=O)N2C4=CC=CC(=C4)NC(=O)C)C5CC5',
    inchikey: 'LIRYPHYGHXZJBZ-UHFFFAOYSA-N',
    cid: 11707110,
    iupac: 'N-[3-[3-cyclopropyl-5-(2-fluoro-4-iodoanilino)-6,8-dimethyl-2,4,7-trioxopyrido[4,3-d]pyrimidin-1-yl]phenyl]acetamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'trametinib-oral',
      producto: 'Mekinist · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg o 2 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Trametinib dimetilsulfóxido',
        ref: { f: 'dailymed-trametinib', sec: '11 · Descripción', cita: 'trametinib dimethyl sulfoxide', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromelloses',
        'magnesium stearate',
        'mannitol',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'ferric oxide yellow',
        'polyethylene glycol',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento del melanoma con mutación BRAF V600E o V600K y, combinado con dabrafenib, de otros tumores con BRAF V600E, según la etiqueta.',
        ref: {
          f: 'dailymed-trametinib',
          sec: '1 · Indicaciones',
          cita: 'unresectable or metastatic melanoma with BRAF V600E or V600K mutations as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-trametinib',
      advertencias: [
        {
          titulo: 'Nuevas neoplasias malignas',
          texto: 'Vigilar la aparición de nuevos tumores antes del tratamiento, durante él y después de suspenderlo.',
          organos: [],
          ref: {
            f: 'dailymed-trametinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new malignancies prior to, or while on therapy, and following discontinuation of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragias',
          texto: 'Vigilar los signos y síntomas de sangrado.',
          organos: [],
          ref: { f: 'dailymed-trametinib', sec: '5 · Advertencias y precauciones', cita: 'Monitor for signs and symptoms of bleeding', codigo: '43685-7' }
        },
        {
          titulo: 'Colitis y perforación gastrointestinal',
          texto: 'Vigilar de cerca la colitis y las perforaciones gastrointestinales.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-trametinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients closely for colitis and gastrointestinal perforations',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia, las más frecuentes (20 % o más): exantema, diarrea y linfedema.',
          '34084-4',
          'Most common adverse reactions (≥ 20%) for MEKINIST as a single agent include rash, diarrhea, and lymphedema'
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
    contiene: 'Comprimido recubierto con película: 0.5 mg o 2 mg por comprimido, según la etiqueta; el activo va como trametinib dimetilsulfóxido. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del melanoma con mutación BRAF V600E o V600K y, combinado con dabrafenib, de otros tumores con BRAF V600E, según la etiqueta.',
    actua: 'Inhibe de forma reversible la activación y la actividad cinasa de MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1,5 horas y la biodisponibilidad absoluta media de los comprimidos, del 72 %. Tras una dosis marcada, más del 80 % de la radiactividad excretada se recuperó en las heces y menos del 20 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Yellow, ovaloid, biconvex, unscored film-coated tablets with beveled edges',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 1,5 horas y la biodisponibilidad absoluta media de los comprimidos, del 72 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1,5 horas y la biodisponibilidad absoluta media de los comprimidos, del 72 %.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to achieve peak plasma concentrations (T max ) is 1.5 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta media de los comprimidos del 72 %.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of MEKINIST tablets is 72%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo el AUC un 24 % y la Cmax un 70 % y retrasó el pico unas 4 horas.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat, high-calorie meal (approximately 1000 calories) decreased trametinib AUC by 24%, C max by 70%, and delayed T max by approximately 4 hours',
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
      ocurre: 'Se une en un 97,4 % a las proteínas plasmáticas; el volumen de distribución aparente es de 214 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97,4 % a las proteínas plasmáticas; el volumen de distribución aparente es de 214 L.',
          ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'Trametinib is 97.4% bound to human plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 214 L.',
          ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution (V c /F) is 214 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'MEK1 y MEK2',
        efecto: 'Inhibe de forma reversible la activación y la actividad cinasa de MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma reversible la activación y la actividad cinasa de MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
            ref: {
              f: 'dailymed-trametinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Trametinib is a reversible inhibitor of mitogen-activated extracellular signal-regulated kinase 1 (MEK1) and MEK2 activation and of MEK1 and MEK2 kinase activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por desacetilación, sola o con monooxigenación o glucuronidación, según estudios in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por desacetilación, sola o con monooxigenación o glucuronidación, según estudios in vitro.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Trametinib is metabolized predominantly via deacetylation alone or with mono-oxygenation or in combination with glucuronidation biotransformation pathways in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, más del 80 % de la radiactividad excretada se recuperó en las heces y menos del 20 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, más del 80 % de la radiactividad excretada se recuperó en las heces y menos del 20 % en la orina.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'greater than 80% of excreted radioactivity was recovered in the feces while less than 20% of excreted radioactivity was recovered in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación estimada es de 3,9 a 4,8 días.',
          ref: {
            f: 'dailymed-trametinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated elimination half-life is 3.9 to 4.8 days',
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
      valor: '1,5',
      unidad: 'h',
      analito: 'trametinib',
      ref: {
        f: 'dailymed-trametinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to achieve peak plasma concentrations (T max ) is 1.5 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media de los comprimidos',
      valor: '72',
      unidad: '%',
      analito: 'trametinib',
      ref: {
        f: 'dailymed-trametinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of MEKINIST tablets is 72%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,4',
      unidad: '%',
      analito: 'trametinib',
      ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'Trametinib is 97.4% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '214',
      unidad: 'L',
      analito: 'trametinib',
      ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution (V c /F) is 214 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación estimada',
      valor: '3,9-4,8',
      unidad: 'días',
      analito: 'trametinib',
      ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'The estimated elimination half-life is 3.9 to 4.8 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '4,9',
      unidad: 'L/h',
      analito: 'trametinib',
      ref: { f: 'dailymed-trametinib', sec: '12.3 · Farmacocinética', cita: 'The apparent clearance is 4.9 L/h', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-trametinib', '0002ad27-779d-42ab-83b5-bc65453412a1', 'MEKINIST (TRAMETINIB) TABLET, FILM COATED MEKINIST (TRAMETINIB) POWDER, FOR SOLUTION', 'Mekinist', '35', '2026-05-20', '2026-11-19'),
    rengPubchem(11707110, 'trametinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
