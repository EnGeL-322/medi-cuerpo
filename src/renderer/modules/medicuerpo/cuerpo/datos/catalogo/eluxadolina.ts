import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eluxadolina',
    nombre: 'Eluxadolina',
    clase: 'Agonista de los receptores opioides mu y kappa y antagonista delta',
    sinonimos: [ 'eluxadoline', 'Viberzi' ],
    formula: 'C32H35N5O5',
    masaMolar: 569.6,
    smiles: 'CC1=CC(=CC(=C1C[C@@H](C(=O)N(CC2=CC(=C(C=C2)OC)C(=O)O)[C@@H](C)C3=NC=C(N3)C4=CC=CC=C4)N)C)C(=O)N',
    inchikey: 'QFNHIDANIVGXPE-FNZWTVRRSA-N',
    cid: 11250029,
    iupac: '5-[[[(2S)-2-amino-3-(4-carbamoyl-2,6-dimethylphenyl)propanoyl]-[(1S)-1-(5-phenyl-1H-imidazol-2-yl)ethyl]amino]methyl]-2-methoxybenzoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'eluxadolina-oral',
      producto: 'Viberzi · comprimido recubierto con película',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '75 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'silicon dioxide',
        'crospovidone, unspecified',
        'mannitol',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento del síndrome del intestino irritable con diarrea en adultos.',
        ref: {
          f: 'dailymed-eluxadolina',
          sec: '1 · Indicaciones',
          cita: 'VIBERZI is indicated in adults for the treatment of irritable bowel syndrome with diarrhea (IBS-D)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-eluxadolina',
      advertencias: [
        {
          titulo: 'Pancreatitis y espasmo del esfínter de Oddi',
          texto: 'Vigilar dolor abdominal nuevo o que empeora, o dolor biliar con elevación de enzimas hepáticas o pancreáticas; suspender de inmediato si aparecen.',
          organos: [ 'pancreas' ],
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening abdominal pain, with or without nausea and vomiting, or acute biliary pain with liver or pancreatic enzyme elevations',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Estreñimiento',
          texto: 'Suspender y avisar al médico si aparece estreñimiento grave.',
          organos: [],
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Instruct patients to stop VIBERZI and immediately contact their healthcare provider if they develop severe constipation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 5 %) son estreñimiento, náuseas y dolor abdominal.',
          '34084-4',
          'Most common adverse reactions (>5%) are constipation, nausea and abdominal pain'
        ],
        [
          'Más de 1 700 pacientes con SII-D han recibido 75 o 100 mg en los ensayos.',
          '34084-4',
          'Over 1700 patients with IBS-D have been treated with 75 or 1'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 75 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del síndrome del intestino irritable con diarrea en adultos.',
    actua: 'Agonista del receptor opioide mu, antagonista del delta y agonista del kappa; en animales actúa sobre los receptores opioides del intestino.',
    recorrido: 'No se ha determinado la biodisponibilidad absoluta; la mediana del tmax fue de 1,5 horas con alimentos y de 2 horas en ayunas, y una comida grasa redujo la Cmax un 50 % y el AUC un 60 %. Tras una dosis marcada, el 82,2 % de la radiactividad se recuperó en las heces en 336 horas y menos del 1 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '3 · Formas y concentraciones',
            cita: 'capsule-shaped tablets are coated in pale-yellow to light tan color',
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
      ocurre: 'No se ha determinado la biodisponibilidad absoluta; la mediana del tmax fue de 1,5 horas con alimentos y de 2 horas en ayunas, y una comida grasa redujo la Cmax un 50 % y el AUC un 60 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'No se ha determinado la biodisponibilidad absoluta; la mediana del tmax fue de 1,5 horas con alimentos y de 2 horas en ayunas, y una comida grasa redujo la Cmax un 50 % y el AUC un 60 %.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '12.3 · Farmacocinética',
            cita: 'Absolute bioavailability of eluxadoline has not been determined',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 50 % y el AUC un 60 %.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '12.3 · Farmacocinética',
            cita: 'decreased the C max of eluxadoline by 50% and AUC by 60%',
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
      ocurre: 'La unión a proteínas plasmáticas es del 81 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es del 81 %.',
          ref: { f: 'dailymed-eluxadolina', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of eluxadoline was 81%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores opioides mu, delta y kappa',
        efecto: 'Agonista del receptor opioide mu, antagonista del delta y agonista del kappa; en animales actúa sobre los receptores opioides del intestino.',
        lugar: [],
        datos: [
          {
            t: 'Agonista del receptor opioide mu, antagonista del delta y agonista del kappa; en animales actúa sobre los receptores opioides del intestino.',
            ref: {
              f: 'dailymed-eluxadolina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Eluxadoline is a mu-opioid receptor agonist; eluxadoline is also a delta opioid receptor antagonist and a kappa opioid receptor agonist',
              codigo: '43679-0'
            }
          },
          {
            t: 'En animales, la eluxadolina interactúa con los receptores opioides del intestino.',
            ref: {
              f: 'dailymed-eluxadolina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In animals, eluxadoline interacts with opioid receptors in the gut',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las vías CYP y UGT participan muy poco en su metabolismo, sin impacto clínico probable sobre la exposición.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las vías CYP y UGT participan muy poco en su metabolismo, sin impacto clínico probable sobre la exposición.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 (CYP) and UGT pathways have minimal involvement in the metabolism of eluxadoline',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 82,2 % de la radiactividad se recuperó en las heces en 336 horas y menos del 1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 82,2 % de la radiactividad se recuperó en las heces en 336 horas y menos del 1 % en la orina.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '12.3 · Farmacocinética',
            cita: '82.2% of the total radioactivity was recovered in feces within 336 hours and less than 1% was recovered in urine within 192 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación plasmática media fue de 3,7 a 6 horas.',
          ref: {
            f: 'dailymed-eluxadolina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma elimination half-life of eluxadoline ranged from 3.7 hours to 6 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax con alimentos',
      valor: '1,5',
      unidad: 'h',
      analito: 'eluxadolina',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-eluxadolina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max value was 1.5 hours (range: 1 to 8 hours) under fed conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '81',
      unidad: '%',
      analito: 'eluxadolina',
      ref: { f: 'dailymed-eluxadolina', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of eluxadoline was 81%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '3,7-6',
      unidad: 'h',
      analito: 'eluxadolina',
      ref: {
        f: 'dailymed-eluxadolina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma elimination half-life of eluxadoline ranged from 3.7 hours to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '82,2',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral única marcada de 300 mg',
      ref: {
        f: 'dailymed-eluxadolina',
        sec: '12.3 · Farmacocinética',
        cita: '82.2% of the total radioactivity was recovered in feces within 336 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-eluxadolina', '7821bd40-4c84-4984-951b-6436ae20421a', 'VIBERZI (ELUXADOLINE) TABLET, FILM COATED', 'Viberzi', '28', '2026-06-26', '2026-11-19'),
    rengPubchem(11250029, 'eluxadoline', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
