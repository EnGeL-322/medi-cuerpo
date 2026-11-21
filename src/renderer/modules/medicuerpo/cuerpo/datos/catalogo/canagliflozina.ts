import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'canagliflozina',
    nombre: 'Canagliflozina',
    clase: 'Inhibidor de SGLT2',
    sinonimos: [ 'canagliflozin' ],
    formula: 'C24H25FO5S',
    masaMolar: 444.5,
    smiles: 'CC1=C(C=C(C=C1)[C@H]2[C@@H]([C@H]([C@@H]([C@H](O2)CO)O)O)O)CC3=CC=C(S3)C4=CC=C(C=C4)F',
    inchikey: 'XTNGUQKDFGDXSJ-ZXGKGEBGSA-N',
    cid: 24812758,
    iupac: '(2S,3R,4R,5S,6R)-2-[3-[[5-(4-fluorophenyl)thiophen-2-yl]methyl]-4-methylphenyl]-6-(hydroxymethyl)oxane-3,4,5-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'canagliflozina-oral',
      producto: 'INVOKANA · comprimido recubierto',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (1600000 wamw)',
        'croscarmellose sodium',
        'magnesium stearate',
        'water',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Control de la glucemia en diabetes tipo 2 y reducción de ciertos riesgos cardiovasculares y renales en las poblaciones descritas.',
        ref: { f: 'dailymed-canagliflozina', sec: '1 · Indicaciones', cita: 'to improve glycemic control', codigo: '34067-9' }
      },
      fuente: 'dailymed-canagliflozina',
      sal: {
        nombre: 'Canagliflozina hemihidratada',
        ref: { f: 'dailymed-canagliflozina', sec: '11 · Descripción', cita: 'D-glucitol hemihydrate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con Canagliflozina hemihidratada como ingrediente activo.',
    usos: 'Control de la glucemia en diabetes tipo 2 y reducción de ciertos riesgos cardiovasculares y renales en las poblaciones descritas.',
    actua: 'Bloquea SGLT2 en el túbulo renal proximal. Esto reduce la reabsorción de glucosa y aumenta su salida en la orina.',
    recorrido: 'La biodisponibilidad oral absoluta media ronda el 65 %. En un estudio oral radiomarcado, cerca del 33 % se recuperó en orina, mayormente como glucurónidos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'INVOKANA se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'INVOKANA se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-canagliflozina',
            sec: '3 · Forma farmacéutica',
            cita: '100 mg tablets are yellow, capsule-shaped, tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad oral absoluta media ronda el 65 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta media ronda el 65 %.',
          ref: {
            f: 'dailymed-canagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'mean absolute oral bioavailability of canagliflozin is approximately 65%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une a proteínas plasmáticas en aproximadamente un 99 %, principalmente a albúmina.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une a proteínas plasmáticas en aproximadamente un 99 %, principalmente a albúmina.',
          ref: { f: 'dailymed-canagliflozina', sec: '12.3 · Farmacocinética', cita: 'bound to proteins in plasma (99%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Cotransportador sodio-glucosa SGLT2',
        efecto: 'Bloquea SGLT2 en el túbulo renal proximal. Esto reduce la reabsorción de glucosa y aumenta su salida en la orina.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Bloquea SGLT2 en el túbulo renal proximal. Esto reduce la reabsorción de glucosa y aumenta su salida en la orina.',
            ref: { f: 'dailymed-canagliflozina', sec: '12.1 · Mecanismo', cita: 'reduces reabsorption of filtered glucose', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'La vía principal es la glucuronidación, que genera dos glucurónidos inactivos.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'La vía principal es la glucuronidación, que genera dos glucurónidos inactivos.',
          ref: {
            f: 'dailymed-canagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'to two inactive O -glucuronide metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado, cerca del 33 % se recuperó en orina, mayormente como glucurónidos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado, cerca del 33 % se recuperó en orina, mayormente como glucurónidos.',
          ref: {
            f: 'dailymed-canagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'was excreted in urine, mainly as O -glucuronide metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-canagliflozina', 'b9057d3b-b104-4f09-8a61-c61ef9d4a3f3', 'INVOKANA (CANAGLIFLOZIN) TABLET, FILM COATED', 'INVOKANA', '32', '2026-06-15', '2026-11-10'),
    rengPubchem(24812758, 'canagliflozin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
