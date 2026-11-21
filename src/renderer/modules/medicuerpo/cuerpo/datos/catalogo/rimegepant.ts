import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rimegepant',
    nombre: 'Rimegepant',
    clase: 'Antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP)',
    sinonimos: [ 'rimegepant', 'Nurtec ODT' ],
    formula: 'C28H28F2N6O3',
    masaMolar: 534.6,
    smiles: 'C1C[C@H](C2=C(C=CC=N2)[C@H]([C@@H]1C3=C(C(=CC=C3)F)F)N)OC(=O)N4CCC(CC4)N5C6=C(NC5=O)N=CC=C6',
    inchikey: 'KRNAOFGYEFKHPB-ANJVHQHFSA-N',
    cid: 51049968,
    iupac: '[(5S,6S,9R)-5-amino-6-(2,3-difluorophenyl)-6,7,8,9-tetrahydro-5H-cyclohepta[b]pyridin-9-yl] 4-(2-oxo-3H-imidazo[4,5-b]pyridin-1-yl)piperidine-1-carboxylate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'rimegepant-oral',
      producto: 'NURTEC ODT · comprimido bucodispersable',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido bucodispersable',
      formaFuente: 'TABLET, ORALLY DISINTEGRATING',
      liberacion: 'no declarada',
      concentraciones: '75 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Sulfato de rimegepant', ref: { f: 'dailymed-rimegepant', sec: '11 · Descripción', cita: 'rimegepant sulfate', codigo: '34089-3' } },
      excipientes: [
        'sucralose',
        'eucalyptol',
        'marine non-gelling gelatin, high mw',
        'limonene, (+)-',
        'benzyl alcohol',
        'menthyl acetate, (+/-)-',
        'vanillin',
        'menthol, unspecified form',
        'menthone, (+)-',
        'mannitol'
      ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura y tratamiento preventivo de la migraña episódica en adultos.',
        ref: {
          f: 'dailymed-rimegepant',
          sec: '1 · Indicaciones',
          cita: 'acute treatment of migraine with or without aura in adults ( 1.1 ) • preventive treatment of episodic migraine in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rimegepant',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Se han producido reacciones graves, como anafilaxia, disnea y erupción, a veces días después de la toma; si aparecen, hay que suspenderlo.',
          organos: [],
          ref: {
            f: 'dailymed-rimegepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious hypersensitivity reactions, including anaphylaxis, dyspnea , and rash, have occurred in patients treated with NURTEC ODT',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Puede aparecer hipertensión o empeorar una previa.',
          organos: [],
          ref: {
            f: 'dailymed-rimegepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypertension: New-onset or worsening of pre-existing hypertension may occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fenómeno de Raynaud',
          texto: 'Puede aparecer un fenómeno de Raynaud o empeorar uno previo.',
          organos: [],
          ref: {
            f: 'dailymed-rimegepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Raynaud’s Phenomenon: New-onset or worsening of pre-existing Raynaud’s phenomenon may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el tratamiento agudo, la reacción adversa en el 1 % o más fue la náusea.',
          '34084-4',
          'Acute treatment of migraine: the adverse reaction reported in ≥1% of patients treated with NURTEC ODT is nausea'
        ],
        [
          'En la prevención, las reacciones en el 2 % o más y al menos 1 punto por encima del placebo fueron náuseas y dolor abdominal o dispepsia.',
          '34084-4',
          'Preventive treatment of episodic migraine: adverse reactions reported in ≥2% for rimegepant and ≥1% higher than placebo are nausea and abdominal pain/dyspepsia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido-bucodispersable'
    }
  ],
  resumen: {
    contiene: 'Comprimido bucodispersable: 75 mg por comprimido, según la etiqueta; el activo va como sulfato de rimegepant. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura y tratamiento preventivo de la migraña episódica en adultos.',
    actua: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
    recorrido: 'Tras la toma oral alcanza la concentración máxima a las 1,5 horas; la biodisponibilidad oral absoluta es de alrededor del 64 %. Tras una dosis oral marcada en varones sanos, el 78 % de la radiactividad se recuperó en las heces y el 24 % en la orina; el rimegepant inalterado fue el componente principal en ambas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'Comprimido bucodispersable en la boca: se disgrega con la saliva.',
      ocurre: 'Comprimido bucodispersable: se disgrega en la boca y se traga; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado, se traga y queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido bucodispersable: se disgrega en la boca y se traga; la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '3 · Formas y concentraciones',
            cita: 'Orally disintegrating tablets: white to off-white, circular',
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
      ocurre: 'Tras la toma oral alcanza la concentración máxima a las 1,5 horas; la biodisponibilidad oral absoluta es de alrededor del 64 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma oral alcanza la concentración máxima a las 1,5 horas; la biodisponibilidad oral absoluta es de alrededor del 64 %.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of NURTEC ODT, rimegepant is absorbed with the maximum concentration at 1.5 hours. The absolute oral bioavailability of rimegepant is approximately 64%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica o pobre en grasas, el Tmax se retrasó 1 a 1,5 horas; una comida rica en grasas redujo la Cmax un 41 %-53 % y el AUC un 32 %-38 %.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal reduced C max by 41 to 53% and AUC by 32 to 38%',
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
      ocurre: 'El volumen de distribución en estado estacionario es de 120 L y la unión a las proteínas del plasma de alrededor del 96 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en estado estacionario es de 120 L y la unión a las proteínas del plasma de alrededor del 96 %.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of rimegepant is approximately 96%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 120 L.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The steady state volume of distribution of rimegepant is 120 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor del CGRP',
        efecto: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
        lugar: [],
        datos: [
          {
            t: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
            ref: {
              f: 'dailymed-rimegepant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Rimegepant is a calcitonin gene-related peptide receptor antagonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2C9; en el plasma predomina el rimegepant (alrededor del 77 %) sin metabolitos principales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2C9; en el plasma predomina el rimegepant (alrededor del 77 %) sin metabolitos principales.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Rimegepant is primarily metabolized by CYP3A4 and to a lesser extent by CYP2C9',
            codigo: '43682-4'
          }
        },
        {
          t: 'El rimegepant es la forma principal en el plasma (alrededor del 77 %), sin metabolitos mayores (más del 10 %).',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Rimegepant is the primary form (~77%) with no major metabolites (i.e., >10%) detected in plasma',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en varones sanos, el 78 % de la radiactividad se recuperó en las heces y el 24 % en la orina; el rimegepant inalterado fue el componente principal en ambas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en varones sanos, el 78 % de la radiactividad se recuperó en las heces y el 24 % en la orina; el rimegepant inalterado fue el componente principal en ambas.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: '78% of the total radioactivity was recovered in feces and 24% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El rimegepant inalterado es el componente principal excretado en las heces (42 %) y en la orina (51 %).',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Unchanged rimegepant is the major single component in excreted feces (42%) and urine (51%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 11 horas en sujetos sanos.',
          ref: {
            f: 'dailymed-rimegepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of rimegepant is approximately 11 hours in healthy subjects',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1,5',
      unidad: 'h',
      analito: 'rimegepant',
      ref: {
        f: 'dailymed-rimegepant',
        sec: '12.3 · Farmacocinética',
        cita: 'rimegepant is absorbed with the maximum concentration at 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '64 (aprox.)',
      unidad: '%',
      analito: 'rimegepant',
      ref: {
        f: 'dailymed-rimegepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of rimegepant is approximately 64%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '120',
      unidad: 'L',
      analito: 'rimegepant',
      ref: {
        f: 'dailymed-rimegepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady state volume of distribution of rimegepant is 120 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96 (aprox.)',
      unidad: '%',
      analito: 'rimegepant',
      ref: { f: 'dailymed-rimegepant', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of rimegepant is approximately 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '11 (aprox.)',
      unidad: 'h',
      analito: 'rimegepant',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-rimegepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of rimegepant is approximately 11 hours in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '78',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-rimegepant',
        sec: '12.3 · Farmacocinética',
        cita: '78% of the total radioactivity was recovered in feces and 24% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rimegepant', '9ef08e09-1098-35cc-e053-2a95a90a3e1d', 'NURTEC ODT (RIMEGEPANT SULFATE) TABLET, ORALLY DISINTEGRATING', 'NURTEC ODT', '32', '2026-06-08', '2026-11-19'),
    rengPubchem(51049968, 'rimegepant', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
