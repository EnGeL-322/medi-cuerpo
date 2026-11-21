import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'atogepant',
    nombre: 'Atogepant',
    clase: 'Antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP)',
    sinonimos: [ 'atogepant', 'Qulipta' ],
    formula: 'C29H23F6N5O3',
    masaMolar: 603.5,
    smiles: 'C[C@@H]1[C@@H](C[C@@H](C(=O)N1CC(F)(F)F)NC(=O)C2=CC3=C(C[C@@]4(C3)C5=C(NC4=O)N=CC=C5)N=C2)C6=C(C=CC(=C6F)F)F',
    inchikey: 'QIVUCLWGARAQIO-OLIXTKCUSA-N',
    cid: 72163100,
    iupac: "(3S)-N-[(3S,5S,6R)-6-methyl-2-oxo-1-(2,2,2-trifluoroethyl)-5-(2,3,6-trifluorophenyl)piperidin-3-yl]-2-oxospiro[1H-pyrrolo[2,3-b]pyridine-3,6'-5,7-dihydrocyclopenta[b]pyridine]-3'-carboxamide",
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'atogepant-oral',
      producto: 'Qulipta · comprimido',
      titular: 'ABBVIE INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 30 mg o 60 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'mannitol',
        'microcrystalline cellulose',
        'copovidone k25-31',
        'sodium chloride',
        'sodium stearyl fumarate',
        'vitamin e polyethylene glycol succinate'
      ],
      usos: {
        t: 'Tratamiento preventivo de la migraña en adultos.',
        ref: {
          f: 'dailymed-atogepant',
          sec: '1 · Indicaciones',
          cita: 'QULIPTA is indicated for the preventive treatment of migraine in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-atogepant',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Si aparecen, hay que suspenderlo; las graves han incluido anafilaxia y disnea y pueden aparecer días después de la toma.',
          organos: [],
          ref: {
            f: 'dailymed-atogepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'If a hypersensitivity reaction occurs, discontinue QULIPTA and initiate appropriate therapy. Severe hypersensitivity reactions have included anaphylaxis and dyspnea',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Puede aparecer hipertensión o empeorar una previa.',
          organos: [],
          ref: {
            f: 'dailymed-atogepant',
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
            f: 'dailymed-atogepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Raynaud’s phenomenon: New-onset or worsening of pre-existing Raynaud’s phenomenon may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos el 4 % y más que con placebo): náuseas, estreñimiento y fatiga o somnolencia.',
          '34084-4',
          'The most common adverse reactions (at least 4% and greater than placebo) are nausea, constipation, and fatigue/somnolence'
        ],
        [
          'Las reacciones que más llevaron a dejar el tratamiento fueron náuseas (0,6 %), estreñimiento (0,5 %) y fatiga o somnolencia (0,2 %).',
          '34084-4',
          'The adverse reactions that most commonly led to discontinuation of QULIPTA in these studies were nausea (0.6%), constipation (0.5%), and fatigue/somnolence (0.2%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 30 mg o 60 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento preventivo de la migraña en adultos.',
    actua: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
    recorrido: 'Tras la toma oral se absorbe y alcanza el pico plasmático en 1 a 2 horas. Tras una dosis oral única de 50 mg marcada, el 42 % y el 5 % de la dosis se recuperaron como atogepant inalterado en las heces y la orina; la vía renal tiene un papel menor.'
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
            f: 'dailymed-atogepant',
            sec: '11 · Descripción',
            cita: 'QULIPTA is available as tablets for oral administration containing 10 mg, 30 mg, or 60 mg atogepant',
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
      ocurre: 'Tras la toma oral se absorbe y alcanza el pico plasmático en 1 a 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma oral se absorbe y alcanza el pico plasmático en 1 a 2 horas.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of QULIPTA, atogepant is absorbed with peak plasma concentrations at approximately 1 to 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el efecto no fue significativo: el AUC y la Cmax bajaron un 18 % y un 22 %, sin cambio en la mediana del tmax.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'When QULIPTA was administered with a high-fat meal, the food effect was not significant (AUC and C max were reduced by approximately 18% and 22%, respectively',
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
      ocurre: 'La fracción libre en el plasma humano es de alrededor del 4,7 %, y la unión no depende de la concentración entre 0,1 y 10 µM; el volumen de distribución aparente medio es de unos 292 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La fracción libre en el plasma humano es de alrededor del 4,7 %, y la unión no depende de la concentración entre 0,1 y 10 µM; el volumen de distribución aparente medio es de unos 292 L.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'the unbound fraction of atogepant was approximately 4.7% in human plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio tras la toma oral de unos 292 L.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of atogepant (Vz/F) after oral administration is approximately 292 L',
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
              f: 'dailymed-atogepant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Atogepant is a calcitonin gene-related peptide (CGRP) receptor antagonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo, principalmente por la CYP3A4; el fármaco y un glucurónido (M23) son los componentes circulantes más abundantes.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo, principalmente por la CYP3A4; el fármaco y un glucurónido (M23) son los componentes circulantes más abundantes.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Atogepant is eliminated mainly through metabolism, primarily by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido M23',
          actividad: 'desconocida',
          nota: 'Uno de los componentes circulantes más abundantes; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The parent compound (atogepant), and a glucuronide conjugate metabolite (M23) were the most prevalent circulating components in human plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única de 50 mg marcada, el 42 % y el 5 % de la dosis se recuperaron como atogepant inalterado en las heces y la orina; la vía renal tiene un papel menor.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única de 50 mg marcada, el 42 % y el 5 % de la dosis se recuperaron como atogepant inalterado en las heces y la orina; la vía renal tiene un papel menor.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: '42% and 5% of the dose was recovered as unchanged atogepant in feces and urine, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 11 horas y el aclaramiento oral aparente medio de unos 19 L/h.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of atogepant is approximately 11 hours. The mean apparent oral clearance (CL/F) of atogepant is approximately 19 L/hr',
            codigo: '43682-4'
          }
        },
        {
          t: 'La vía renal tiene un papel menor en el aclaramiento.',
          ref: {
            f: 'dailymed-atogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The renal route of elimination plays a minor role in the clearance of atogepant',
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
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'atogepant',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'atogepant is absorbed with peak plasma concentrations at approximately 1 to 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción libre en el plasma',
      valor: '4,7 (aprox.)',
      unidad: '%',
      analito: 'atogepant',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'the unbound fraction of atogepant was approximately 4.7% in human plasma',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio (Vz/F)',
      valor: '292 (aprox.)',
      unidad: 'L',
      analito: 'atogepant',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of atogepant (Vz/F) after oral administration is approximately 292 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '11 (aprox.)',
      unidad: 'h',
      analito: 'atogepant',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of atogepant is approximately 11 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente medio (CL/F)',
      valor: '19 (aprox.)',
      unidad: 'L/h',
      analito: 'atogepant',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent oral clearance (CL/F) of atogepant is approximately 19 L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada inalterada en las heces',
      valor: '42',
      unidad: '% de la dosis',
      analito: 'atogepant inalterado',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral única de 50 mg marcada',
      ref: {
        f: 'dailymed-atogepant',
        sec: '12.3 · Farmacocinética',
        cita: '42% and 5% of the dose was recovered as unchanged atogepant in feces and urine, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-atogepant', '8c8ab8f4-32bd-497a-befa-70c8a51d8d52', 'QULIPTA (ATOGEPANT) TABLET', 'Qulipta', '19', '2026-02-10', '2026-11-18'),
    rengPubchem(72163100, 'atogepant', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
