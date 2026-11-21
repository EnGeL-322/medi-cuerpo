import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rabeprazol',
    nombre: 'Rabeprazol',
    clase: 'Inhibidor de la bomba de protones',
    sinonimos: [ 'rabeprazole' ],
    formula: 'C18H21N3O3S',
    masaMolar: 359.4,
    smiles: 'CC1=C(C=CN=C1CS(=O)C2=NC3=CC=CC=C3N2)OCCCOC',
    inchikey: 'YREYEVIYCVEVJK-UHFFFAOYSA-N',
    cid: 5029,
    iupac: '2-[[4-(3-methoxypropoxy)-3-methyl-2-pyridinyl]methylsulfinyl]-1H-benzimidazole',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'rabeprazol-oral',
      producto: 'Aciphex · comprimido de liberación retardada',
      titular: 'WAYLIS THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación retardada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '20 mg',
      excipientes: [
        'carnauba wax',
        'crospovidone, unspecified',
        'diacetylated monoglycerides',
        'ethylcellulose, unspecified',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hydroxypropyl cellulose (90000 wamw)',
        'hypromellose phthalate (24% phthalate, 55 cst)',
        'magnesium stearate',
        'mannitol',
        'sodium hydroxide',
        'sodium stearyl fumarate',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'La etiqueta incluye reflujo gastroesofágico erosivo o ulcerativo y otras afecciones dependientes de la acidez.',
        ref: {
          f: 'dailymed-rabeprazol',
          sec: '1 · Indicaciones',
          cita: 'Healing of Erosive or Ulcerative Gastroesophageal Reflux Disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rabeprazol',
      sal: {
        nombre: 'sal sódica de rabeprazol',
        ref: { f: 'dailymed-rabeprazol', sec: '11 · Descripción', cita: 'rabeprazole sodium', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación retardada oral con sal sódica de rabeprazol como ingrediente activo.',
    usos: 'La etiqueta incluye reflujo gastroesofágico erosivo o ulcerativo y otras afecciones dependientes de la acidez.',
    actua: 'Inhibe la bomba de protones de la célula parietal y reduce la secreción de ácido del estómago.',
    recorrido: 'La biodisponibilidad absoluta del comprimido oral estudiado fue de alrededor del 52 %. El estudio oral radiomarcado recuperó aproximadamente el 90 % en orina. No encontró rabeprazol intacto en orina ni heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Aciphex se presenta como comprimido de liberación retardada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Aciphex se presenta como comprimido de liberación retardada para administración oral.',
          ref: {
            f: 'dailymed-rabeprazol',
            sec: '3 · Forma farmacéutica',
            cita: 'ACIPHEX delayed-release tablets are provided in one',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta del comprimido oral estudiado fue de alrededor del 52 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta del comprimido oral estudiado fue de alrededor del 52 %.',
          ref: { f: 'dailymed-rabeprazol', sec: '12.3 · Farmacocinética', cita: 'is approximately 52%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El 96,3 % se une a proteínas plasmáticas humanas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El 96,3 % se une a proteínas plasmáticas humanas.',
          ref: { f: 'dailymed-rabeprazol', sec: '12.3 · Farmacocinética', cita: 'Rabeprazole is 96.3% bound', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'H⁺/K⁺-ATPasa gástrica',
        efecto: 'Inhibe la bomba de protones de la célula parietal y reduce la secreción de ácido del estómago.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Inhibe la bomba de protones de la célula parietal y reduce la secreción de ácido del estómago.',
            ref: {
              f: 'dailymed-rabeprazol',
              sec: '12.1 · Mecanismo',
              cita: 'at the secretory surface of the gastric parietal cell',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma por reducción no enzimática y también por vías del citocromo P450 hepático.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma por reducción no enzimática y también por vías del citocromo P450 hepático.',
          ref: {
            f: 'dailymed-rabeprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'systemic nonenzymatic reduction to a thioether compound',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El estudio oral radiomarcado recuperó aproximadamente el 90 % en orina. No encontró rabeprazol intacto en orina ni heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El estudio oral radiomarcado recuperó aproximadamente el 90 % en orina. No encontró rabeprazol intacto en orina ni heces.',
          ref: {
            f: 'dailymed-rabeprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'No unchanged rabeprazole was recovered in the urine or feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-rabeprazol', '1eb38279-0237-4967-be7a-c53a826c1138', 'ACIPHEX (RABEPRAZOLE SODIUM) TABLET, DELAYED RELEASE', 'Aciphex', '3', '2026-01-30', '2026-11-10'),
    rengPubchem(5029, 'rabeprazole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
