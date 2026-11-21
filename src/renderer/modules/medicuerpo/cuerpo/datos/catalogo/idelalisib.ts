import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'idelalisib',
    nombre: 'Idelalisib',
    clase: 'Inhibidor de la fosfatidilinositol 3-cinasa delta (PI3Kδ)',
    sinonimos: [ 'idelalisib', 'Zydelig' ],
    formula: 'C22H18FN7O',
    masaMolar: 415.4,
    smiles: 'CC[C@@H](C1=NC2=C(C(=CC=C2)F)C(=O)N1C3=CC=CC=C3)NC4=NC=NC5=C4NC=N5',
    inchikey: 'IFSDAJWBUCMOAH-HNNXBMFYSA-N',
    cid: 11625818,
    iupac: '5-fluoro-3-phenyl-2-[(1S)-1-(7H-purin-6-ylamino)propyl]quinazolin-4-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'idelalisib-oral',
      producto: 'Zydelig · comprimido recubierto con película',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 150 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (1600000 wamw)',
        'sodium starch glycolate type a potato',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'fd&c yellow no. 6',
        'aluminum oxide'
      ],
      usos: {
        t: 'Tratamiento de la leucemia linfocítica crónica en recaída, en combinación con rituximab.',
        ref: {
          f: 'dailymed-idelalisib',
          sec: '1 · Indicaciones',
          cita: 'Zydelig is indicated, in combination with rituximab, for the treatment of patients with relapsed chronic lymphocytic leukemia (CLL)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-idelalisib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad grave o mortal',
          texto: 'Apareció en el 16 % de los pacientes; vigilar la función hepática antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-idelalisib',
            sec: 'Advertencia destacada',
            cita: 'Fatal and/or serious hepatotoxicity occurred in 16% of Zydelig-treated patients. Monitor hepatic function prior to and during treatment',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Diarrea grave o colitis',
          texto: 'Apareció en el 20 % de los pacientes; vigilar su aparición.',
          organos: [],
          ref: {
            f: 'dailymed-idelalisib',
            sec: 'Advertencia destacada',
            cita: 'Fatal and/or serious and severe diarrhea or colitis occurred in 20% of Zydelig-treated patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Vigilarlas y suspender de forma definitiva si se confirman.',
          organos: [],
          ref: {
            f: 'dailymed-idelalisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Cutaneous Reactions : Monitor patients for the development of severe cutaneous reactions',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Neutropenia',
          texto: 'Vigilar el hemograma e interrumpir hasta su resolución.',
          organos: [],
          ref: { f: 'dailymed-idelalisib', sec: '5 · Advertencias y precauciones', cita: 'Neutropenia : Monitor blood counts', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (30 % o más) en combinación: diarrea, neumonía, fiebre, fatiga, exantema, tos y náuseas.',
          '34084-4',
          'most common adverse reactions (incidence ≥30%) in patients treated with Zydelig in combination trials are diarrhea, pneumonia, pyrexia, fatigue, rash, cough, and nausea'
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
    contiene: 'Comprimido recubierto con película: 100 mg o 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la leucemia linfocítica crónica en recaída, en combinación con rituximab.',
    actua: 'Inhibe la PI3Kδ, expresada en linfocitos B normales y malignos; induce apoptosis, frena la proliferación y bloquea las vías del receptor B y de CXCR4/CXCR5 que llevan los linfocitos B a los ganglios y a la médula ósea.',
    recorrido: 'La mediana del tmax es de 1,5 horas; una comida grasa aumenta el AUC 1,4 veces. Tras 150 mg marcados, el 78 % de la radiactividad se excretó en las heces y el 14 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '11 · Descripción',
            cita: 'The tablet coating consists of polyethylene glycol, talc, polyvinyl alcohol, and titanium dioxide',
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
      ocurre: 'La mediana del tmax es de 1,5 horas; una comida grasa aumenta el AUC 1,4 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 1,5 horas; una comida grasa aumenta el AUC 1,4 veces.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak concentration (T max ) was observed at 1.5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó el AUC 1,4 veces frente al ayuno.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'increased idelalisib AUC 1.4-fold relative to fasting conditions',
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
      ocurre: 'Se une en un 84 % o más a las proteínas, sin depender de la concentración; el volumen central aparente en estado estacionario es de 23 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 84 % o más a las proteínas, sin depender de la concentración; el volumen central aparente en estado estacionario es de 23 L.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of idelalisib is ≥ 84% with no concentration dependence',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución central aparente en estado estacionario de 23 L.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent central volume of distribution at steady state is 23 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PI3Kδ',
        efecto: 'Inhibe la PI3Kδ, expresada en linfocitos B normales y malignos; induce apoptosis, frena la proliferación y bloquea las vías del receptor B y de CXCR4/CXCR5 que llevan los linfocitos B a los ganglios y a la médula ósea.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la PI3Kδ, expresada en linfocitos B normales y malignos; induce apoptosis, frena la proliferación y bloquea las vías del receptor B y de CXCR4/CXCR5 que llevan los linfocitos B a los ganglios y a la médula ósea.',
            ref: {
              f: 'dailymed-idelalisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Idelalisib is an inhibitor of phosphatidylinositol 3-kinase, PI3Kδ, which is expressed in normal and malignant B-cells',
              codigo: '43679-0'
            }
          },
          {
            t: 'Inhibe vías que dirigen los linfocitos B a los ganglios linfáticos y a la médula ósea.',
            ref: {
              f: 'dailymed-idelalisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'which are involved in trafficking and homing of B-cells to the lymph nodes and bone marrow',
              codigo: '43679-0'
            },
            poblacion: 'medula-osea'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por la aldehído oxidasa y la CYP3A, con una pequeña parte por la UGT1A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por la aldehído oxidasa y la CYP3A, con una pequeña parte por la UGT1A4.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Idelalisib is metabolized via aldehyde oxidase and CYP3A with additional minor metabolism by UGT1A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 150 mg marcados, el 78 % de la radiactividad se excretó en las heces y el 14 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 150 mg marcados, el 78 % de la radiactividad se excretó en las heces y el 14 % en la orina.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single 150 mg dose of radiolabeled idelalisib, 78% of the radioactivity was excreted in feces and 14% was excreted in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal poblacional es de 8,2 horas.',
          ref: {
            f: 'dailymed-idelalisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The population terminal elimination half-life of idelalisib is 8.2 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1,5',
      unidad: 'h',
      analito: 'idelalisib',
      ref: {
        f: 'dailymed-idelalisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentration (T max ) was observed at 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '≥ 84',
      unidad: '%',
      analito: 'idelalisib',
      ref: { f: 'dailymed-idelalisib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of idelalisib is ≥ 84%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución central aparente',
      valor: '23',
      unidad: 'L',
      analito: 'idelalisib',
      ref: {
        f: 'dailymed-idelalisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent central volume of distribution at steady state is 23 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal poblacional',
      valor: '8,2',
      unidad: 'h',
      analito: 'idelalisib',
      ref: {
        f: 'dailymed-idelalisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The population terminal elimination half-life of idelalisib is 8.2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico aparente',
      valor: '14,9',
      unidad: 'L/h',
      analito: 'idelalisib',
      ref: {
        f: 'dailymed-idelalisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The population apparent systemic clearance at steady-state is 14.9 L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '78',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 150 mg',
      ref: { f: 'dailymed-idelalisib', sec: '12.3 · Farmacocinética', cita: '78% of the radioactivity was excreted in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-idelalisib', 'efbdafa9-d18c-4e85-b4a2-1e620fc74e50', 'ZYDELIG (IDELALISIB) TABLET, FILM COATED', 'Zydelig', '13', '2026-09-21', '2026-11-19'),
    rengPubchem(11625818, 'idelalisib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
