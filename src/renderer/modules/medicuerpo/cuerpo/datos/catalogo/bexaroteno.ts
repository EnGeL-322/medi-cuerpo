import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bexaroteno',
    nombre: 'Bexaroteno',
    clase: 'Retinoide selectivo de los receptores X de retinoides (RXR)',
    sinonimos: [ 'bexarotene', 'Targretin' ],
    formula: 'C24H28O2',
    masaMolar: 348.5,
    smiles: 'CC1=CC2=C(C=C1C(=C)C3=CC=C(C=C3)C(=O)O)C(CCC2(C)C)(C)C',
    inchikey: 'NAVMQTYZDKMPEU-UHFFFAOYSA-N',
    cid: 82146,
    iupac: '4-[1-(3,5,5,8,8-pentamethyl-6,7-dihydronaphthalen-2-yl)ethenyl]benzoic acid',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'bexaroteno-oral',
      producto: 'Targretin · cápsula blanda',
      titular: 'BAUSCH HEALTH US, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '75 mg por cápsula, según la etiqueta',
      excipientes: [
        'polyethylene glycol 400',
        'polysorbate 20',
        'butylated hydroxyanisole',
        'glycerin',
        'sorbitol',
        '1,4-sorbitan',
        'mannitol',
        'water',
        'titanium dioxide',
        'gelatin, unspecified',
        'crospovidone, unspecified'
      ],
      usos: {
        t: 'Tratamiento de las manifestaciones cutáneas del linfoma cutáneo de células T refractario al menos a un tratamiento sistémico previo.',
        ref: {
          f: 'dailymed-bexaroteno',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of cutaneous manifestations of cutaneous T-cell lymphoma in patients who are refractory to at least one prior systemic therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bexaroteno',
      advertencias: [
        {
          titulo: 'Defectos congénitos',
          texto: 'Pertenece a la clase de los retinoides, asociada a defectos congénitos en humanos; no debe darse en el embarazo.',
          organos: [],
          ref: {
            f: 'dailymed-bexaroteno',
            sec: 'Advertencia destacada',
            cita: 'TARGRETIN is a member of the retinoid class of drugs that is associated with birth defects in humans',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hiperlipidemia',
          texto: 'Vigilar los cambios de los lípidos y tratar las alteraciones.',
          organos: [],
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor lipid changes and treat abnormalities during therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pancreatitis',
          texto: 'Interrumpirlo y valorar si se sospecha pancreatitis.',
          organos: [ 'pancreas' ],
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interrupt TARGRETIN and evaluate if pancreatitis is suspected',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotiroidismo',
          texto: 'Vigilar la función tiroidea y sustituir la hormona si hace falta.',
          organos: [ 'tiroides' ],
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor and replace thyroid hormone if needed',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 %): hiperlipidemia, hipercolesterolemia, cefalea, hipotiroidismo, astenia, leucopenia, exantema, náuseas, infección, edema periférico, dolor abdominal y piel seca.',
          '34084-4',
          'The most common adverse reactions (greater than 10%) include: hyperlipidemia, hypercholesteremia, headache, hypothyroidism, asthenia, leukopenia, rash, nausea, infection, peripheral edema, abdominal pain, and dry skin'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula blanda: 75 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las manifestaciones cutáneas del linfoma cutáneo de células T refractario al menos a un tratamiento sistémico previo.',
    actua: 'Se une a los receptores X de retinoides (RXRα, β y γ) y los activa; estos receptores actúan como factores de transcripción que regulan la diferenciación y la proliferación celular.',
    recorrido: 'Se absorbe con un pico hacia las 2 horas; una comida con grasa aumenta el AUC un 35 % y la Cmax un 48 %. La eliminación urinaria del bexaroteno y sus metabolitos es una vía menor (menos del 1 % de la dosis); la etiqueta no detalla la vía principal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '3 · Formas y concentraciones',
            cita: '75 mg, off-white, oblong soft gelatin capsules, imprinted with black ink',
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
      ocurre: 'Se absorbe con un pico hacia las 2 horas; una comida con grasa aumenta el AUC un 35 % y la Cmax un 48 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con un pico hacia las 2 horas; una comida con grasa aumenta el AUC un 35 % y la Cmax un 48 %.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration of TARGRETIN, bexarotene is absorbed with a T max of about 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una comida con grasa, el AUC fue un 35 % y la Cmax un 48 % más altos que con una solución de glucosa.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma bexarotene AUC and C max values resulting from a 75 to 300 mg dose were 35% and 48% higher, respectively, after a fat-containing meal than after a glucose solution',
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
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas.',
          ref: { f: 'dailymed-bexaroteno', sec: '12.3 · Farmacocinética', cita: 'Bexarotene is highly bound (>99%) to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores X de retinoides (RXR)',
        efecto: 'Se une a los receptores X de retinoides (RXRα, β y γ) y los activa; estos receptores actúan como factores de transcripción que regulan la diferenciación y la proliferación celular.',
        lugar: [],
        datos: [
          {
            t: 'Se une a los receptores X de retinoides (RXRα, β y γ) y los activa; estos receptores actúan como factores de transcripción que regulan la diferenciación y la proliferación celular.',
            ref: {
              f: 'dailymed-bexaroteno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Bexarotene selectively binds and activates retinoid X receptor subtypes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro, la CYP3A4 es la principal enzima del citocromo P450 que forma sus metabolitos oxidativos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro, la CYP3A4 es la principal enzima del citocromo P450 que forma sus metabolitos oxidativos.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies suggest that cytochrome P450 3A4 is the major cytochrome P450 responsible for formation of the oxidative metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '6- y 7-hidroxi y 6- y 7-oxo-bexaroteno',
          actividad: 'activo',
          nota: 'Activos in vitro sobre los receptores de retinoides; su contribución al efecto no se conoce.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'The oxidative metabolites are active in in vitro assays of retinoid receptor activation',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación urinaria del bexaroteno y sus metabolitos es una vía menor (menos del 1 % de la dosis); la etiqueta no detalla la vía principal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación urinaria del bexaroteno y sus metabolitos es una vía menor (menos del 1 % de la dosis); la etiqueta no detalla la vía principal.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'Urinary elimination of bexarotene and its known metabolites is a minor excretory pathway (<1% of administered dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 7 horas.',
          ref: {
            f: 'dailymed-bexaroteno',
            sec: '12.3 · Farmacocinética',
            cita: 'Terminal half-life of bexarotene is approximately 7 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'bexaroteno',
      ref: { f: 'dailymed-bexaroteno', sec: '12.3 · Farmacocinética', cita: 'bexarotene is absorbed with a T max of about 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'bexaroteno',
      ref: { f: 'dailymed-bexaroteno', sec: '12.3 · Farmacocinética', cita: 'Bexarotene is highly bound (>99%) to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '7 (aprox.)',
      unidad: 'h',
      analito: 'bexaroteno',
      ref: { f: 'dailymed-bexaroteno', sec: '12.3 · Farmacocinética', cita: 'Terminal half-life of bexarotene is approximately 7 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bexaroteno', '1d056725-0576-4338-8089-6336e768ccdc', 'TARGRETIN (BEXAROTENE) CAPSULE, LIQUID FILLED', 'Targretin', '16', '2026-07-20', '2026-11-19'),
    rengPubchem(82146, 'bexarotene', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
