import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ubrogepant',
    nombre: 'Ubrogepant',
    clase: 'Antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP)',
    sinonimos: [ 'ubrogepant', 'Ubrelvy' ],
    formula: 'C29H26F3N5O3',
    masaMolar: 549.5,
    smiles: 'C[C@@H]1[C@@H](C[C@@H](C(=O)N1CC(F)(F)F)NC(=O)C2=CC3=C(C[C@@]4(C3)C5=C(NC4=O)N=CC=C5)N=C2)C6=CC=CC=C6',
    inchikey: 'DDOOFTLHJSMHLN-ZQHRPCGSSA-N',
    cid: 68748835,
    iupac: "(3S)-N-[(3S,5S,6R)-6-methyl-2-oxo-5-phenyl-1-(2,2,2-trifluoroethyl)piperidin-3-yl]-2-oxospiro[1H-pyrrolo[2,3-b]pyridine-3,6'-5,7-dihydrocyclopenta[b]pyridine]-3'-carboxamide",
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ubrogepant-oral',
      producto: 'UBRELVY · comprimido',
      titular: 'SPORTPHARM LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'vitamin e polyethylene glycol succinate',
        'mannitol',
        'microcrystalline cellulose',
        'sodium chloride',
        'croscarmellose sodium',
        'sodium stearyl fumarate',
        'silicon dioxide',
        'copovidone k25-31'
      ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura en adultos; no está indicado para su prevención.',
        ref: {
          f: 'dailymed-ubrogepant',
          sec: '1 · Indicaciones',
          cita: 'UBRELVY is indicated for the acute treatment of migraine with or without aura in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ubrogepant',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Se han notificado anafilaxia, disnea, edema facial o de garganta, erupción, urticaria y prurito, que pueden aparecer minutos, horas o días después de la administración.',
          organos: [ 'sistema-inmunitario', 'piel' ],
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions, including anaphylaxis, dyspnea, facial or throat edema, rash, urticaria, and pruritus, have been reported with use of UBRELVY',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Puede aparecer hipertensión de nueva aparición o el empeoramiento de una hipertensión previa.',
          organos: [ 'vasos', 'corazon' ],
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypertension: New-onset or worsening of pre-existing hypertension may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos el 2 % y más que con placebo): náuseas y somnolencia.',
          '34084-4',
          'The most common adverse reactions (at least 2% and greater than placebo) were nausea and somnolence'
        ],
        [
          'Entre las reacciones clínicamente importantes figuran las de hipersensibilidad.',
          '34084-4',
          'Hypersensitivity Reactions [see Warnings and Precautions ( 5.1 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura en adultos; no está indicado para su prevención.',
    actua: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
    recorrido: 'Se absorbe con picos de concentración plasmática a las 1,5 horas aproximadamente. Se excreta sobre todo por vía biliar y fecal; la vía renal es secundaria.'
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
            f: 'dailymed-ubrogepant',
            sec: '3 · Formas y concentraciones',
            cita: 'UBRELVY 50 mg is supplied as white to off-white, capsule-shaped, biconvex tablets',
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
      ocurre: 'Se absorbe con picos de concentración plasmática a las 1,5 horas aproximadamente.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con picos de concentración plasmática a las 1,5 horas aproximadamente.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'ubrogepant is absorbed with peak plasma concentrations at approximately 1.5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa, el tiempo hasta la concentración máxima se retrasó 2 horas y la Cmax bajó un 22 %, sin cambios en el AUC.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'When UBRELVY was administered with a high-fat meal, the time to maximum ubrogepant plasma concentration was delayed by 2 hours and resulted in a 22% reduction in C max with no change in AUC',
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
      ocurre: 'La unión del ubrogepant a las proteínas del plasma es del 87 % in vitro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión del ubrogepant a las proteínas del plasma es del 87 % in vitro.',
          ref: { f: 'dailymed-ubrogepant', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of ubrogepant is 87% in vitro', codigo: '43682-4' }
        },
        {
          t: 'El volumen de distribución central aparente tras una dosis oral única es de unos 350 L.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent central volume of distribution of ubrogepant (V/F) after single dose oral administration is approximately 350 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor del péptido relacionado con el gen de la calcitonina (CGRP)',
        efecto: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
        lugar: [ 'encefalo', 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista del receptor del péptido relacionado con el gen de la calcitonina (CGRP).',
            ref: {
              f: 'dailymed-ubrogepant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ubrogepant is a calcitonin gene-related peptide receptor antagonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo, principalmente por la CYP3A4; el compuesto original y dos conjugados glucurónidos fueron los componentes circulantes más abundantes.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo, principalmente por la CYP3A4; el compuesto original y dos conjugados glucurónidos fueron los componentes circulantes más abundantes.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Ubrogepant is eliminated mainly through metabolism, primarily by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Dos conjugados glucurónidos',
          actividad: 'inactivo',
          nota: 'Se espera que no contribuyan a la actividad (unas 6000 veces menos potentes en la unión al receptor).',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The glucuronide metabolites are not expected to contribute to the pharmacological activity of ubrogepant',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sobre todo por vía biliar y fecal; la vía renal es secundaria.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sobre todo por vía biliar y fecal; la vía renal es secundaria.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'Ubrogepant is excreted mostly via the biliary/fecal route, while the renal route is a minor route of elimination',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de aproximadamente 5 a 7 horas.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of ubrogepant is approximately 5-7 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis oral marcada, el 42 % y el 6 % de la dosis se recuperaron como ubrogepant inalterado en las heces y en la orina.',
          ref: {
            f: 'dailymed-ubrogepant',
            sec: '12.3 · Farmacocinética',
            cita: '42% and 6% of the dose was recovered as unchanged ubrogepant in feces and urine, respectively',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios varones sanos',
          condiciones: 'dosis oral única de ubrogepant marcado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'ubrogepant',
      ref: {
        f: 'dailymed-ubrogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'ubrogepant is absorbed with peak plasma concentrations at approximately 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '87',
      unidad: '%',
      analito: 'ubrogepant',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-ubrogepant', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of ubrogepant is 87% in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución central aparente (V/F)',
      valor: '350 (aprox.)',
      unidad: 'L',
      analito: 'ubrogepant',
      ref: {
        f: 'dailymed-ubrogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent central volume of distribution of ubrogepant (V/F) after single dose oral administration is approximately 350 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '5-7 (aprox.)',
      unidad: 'h',
      analito: 'ubrogepant',
      ref: {
        f: 'dailymed-ubrogepant',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of ubrogepant is approximately 5-7 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada como fármaco inalterado en las heces',
      valor: '42',
      unidad: '% de la dosis',
      analito: 'ubrogepant',
      poblacion: 'voluntarios varones sanos',
      condiciones: 'dosis oral única de ubrogepant marcado',
      ref: {
        f: 'dailymed-ubrogepant',
        sec: '12.3 · Farmacocinética',
        cita: '42% and 6% of the dose was recovered as unchanged ubrogepant in feces and urine, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ubrogepant', '36106b14-d410-4faf-a361-2871de8198c3', 'UBRELVY (UBROGEPANT) TABLET', 'UBRELVY', '1', '2026-10-01', '2026-11-15'),
    rengPubchem(68748835, 'ubrogepant', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
