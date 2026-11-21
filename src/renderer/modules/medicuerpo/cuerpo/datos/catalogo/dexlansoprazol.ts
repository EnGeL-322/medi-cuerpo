import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dexlansoprazol',
    nombre: 'Dexlansoprazol',
    clase: 'Inhibidor de la bomba de protones',
    sinonimos: [ 'dexlansoprazole' ],
    formula: 'C16H14F3N3O2S',
    masaMolar: 369.4,
    smiles: 'CC1=C(C=CN=C1C[S@@](=O)C2=NC3=CC=CC=C3N2)OCC(F)(F)F',
    inchikey: 'MJIHNNLFOKEZEW-RUZDIDTESA-N',
    cid: 9578005,
    iupac: '2-[(R)-[3-methyl-4-(2,2,2-trifluoroethoxy)-2-pyridinyl]methylsulfinyl]-1H-benzimidazole',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'dexlansoprazol-oral',
      producto: 'Dexilant · cápsula de liberación retardada',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación retardada',
      formaFuente: 'CAPSULE, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '30 mg',
      excipientes: [
        'methacrylic acid - methyl methacrylate copolymer (1:1)',
        'methacrylic acid - methyl methacrylate copolymer (1:2)',
        'methacrylic acid and ethyl acrylate copolymer',
        'magnesium carbonate',
        'sucrose',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'titanium dioxide',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose 2910 (6 mpa.s)',
        'talc',
        'polyethylene glycol 8000',
        'triethyl citrate',
        'polysorbate 80',
        'silicon dioxide',
        'carrageenan',
        'potassium chloride',
        'ferric oxide red',
        'fd&c blue no. 2',
        'starch, corn'
      ],
      usos: {
        t: 'Esofagitis erosiva, mantenimiento tras su curación y determinados síntomas de reflujo según la etiqueta.',
        ref: { f: 'dailymed-dexlansoprazol', sec: '1 · Indicaciones', cita: 'Healing of all grades of erosive esophagitis', codigo: '34067-9' }
      },
      fuente: 'dailymed-dexlansoprazol'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación retardada oral con dexlansoprazol como ingrediente activo.',
    usos: 'Esofagitis erosiva, mantenimiento tras su curación y determinados síntomas de reflujo según la etiqueta.',
    actua: 'Inhibe la bomba de protones de las células parietales gástricas, reduciendo la secreción ácida.',
    recorrido: 'La formulación de liberación retardada dual produce dos máximos de concentración en plasma. El balance radiomarcado recuperó la radiactividad en orina y heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'La cápsula contiene dos tipos de gránulos con perfiles de disolución dependientes del pH.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'La cápsula contiene dos tipos de gránulos con perfiles de disolución dependientes del pH.',
          ref: {
            f: 'dailymed-dexlansoprazol',
            sec: '11 · Descripción',
            cita: 'granules with different pH-dependent dissolution profiles',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La formulación de liberación retardada dual produce dos máximos de concentración en plasma.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La formulación de liberación retardada dual produce dos máximos de concentración en plasma.',
          ref: { f: 'dailymed-dexlansoprazol', sec: '12.3 · Farmacocinética', cita: 'with two distinct peaks', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En voluntarios sanos, se unió a proteínas plasmáticas en un 96–99 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En voluntarios sanos, se unió a proteínas plasmáticas en un 96–99 %.',
          ref: {
            f: 'dailymed-dexlansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'ranged from 96 to 99% in healthy subjects',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'H⁺/K⁺-ATPasa gástrica',
        efecto: 'Inhibe la bomba de protones de las células parietales gástricas, reduciendo la secreción ácida.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Inhibe la bomba de protones de las células parietales gástricas, reduciendo la secreción ácida.',
            ref: {
              f: 'dailymed-dexlansoprazol',
              sec: '12.1 · Mecanismo',
              cita: 'at the secretory surface of the gastric parietal cell',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El hígado lo transforma extensamente. CYP2C19 y CYP3A4 participan en la oxidación.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El hígado lo transforma extensamente. CYP2C19 y CYP3A4 participan en la oxidación.',
          ref: {
            f: 'dailymed-dexlansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized in the liver by oxidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El balance radiomarcado recuperó la radiactividad en orina y heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El balance radiomarcado recuperó la radiactividad en orina y heces.',
          ref: { f: 'dailymed-dexlansoprazol', sec: '12.3 · Farmacocinética', cita: '47.6% (SD: 7.3%) in the feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-dexlansoprazol', '9819f033-3bbe-442e-8e92-45fec77b237d', 'DEXILANT (DEXLANSOPRAZOLE) CAPSULE, DELAYED RELEASE', 'Dexilant', '40', '2025-02-24', '2026-11-10'),
    rengPubchem(9578005, 'dexlansoprazole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
