import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eplerenona',
    nombre: 'Eplerenona',
    clase: 'Antagonista del receptor mineralocorticoide',
    sinonimos: [ 'eplerenone' ],
    formula: 'C24H30O6',
    masaMolar: 414.5,
    smiles: 'C[C@]12CCC(=O)C=C1C[C@H]([C@@H]3[C@]24[C@H](O4)C[C@]5([C@H]3CC[C@@]56CCC(=O)O6)C)C(=O)OC',
    inchikey: 'JUKPWJGBANNWMW-VWBFHTRKSA-N',
    cid: 443872,
    iupac: "methyl (1R,2S,9R,10R,11S,14R,15S,17R)-2,15-dimethyl-5,5'-dioxospiro[18-oxapentacyclo[8.8.0.01,17.02,7.011,15]octadec-6-ene-14,2'-oxolane]-9-carboxylate",
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'eplerenona-oral',
      producto: 'Inspra · comprimido recubierto',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [
        'lactose, unspecified form',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hypromellose, unspecified',
        'sodium lauryl sulfate',
        'talc',
        'magnesium stearate',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'polysorbate 80',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Hipertensión y determinados pacientes con insuficiencia cardíaca tras un infarto, según la etiqueta.',
        ref: {
          f: 'dailymed-eplerenona',
          sec: '1 · Indicaciones',
          cita: 'symptomatic heart failure with reduced ejection fraction',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-eplerenona'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con eplerenona como ingrediente activo.',
    usos: 'Hipertensión y determinados pacientes con insuficiencia cardíaca tras un infarto, según la etiqueta.',
    actua: 'Ocupa el receptor mineralocorticoide y evita que la aldosterona se una a él.',
    recorrido: 'El pico plasmático medio se alcanza alrededor de 1,5 a 2 horas. La comida no modificó la absorción. En un estudio oral radiomarcado se recuperó aproximadamente el 67 % en orina y el 32 % en heces. Menos del 5 % se recuperó como eplerenona intacta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Inspra se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Inspra se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-eplerenona',
            sec: '3 · Forma farmacéutica',
            cita: 'biconvex film-coated tablets debossed with “VLE” on',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El pico plasmático medio se alcanza alrededor de 1,5 a 2 horas. La comida no modificó la absorción.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El pico plasmático medio se alcanza alrededor de 1,5 a 2 horas. La comida no modificó la absorción.',
          ref: {
            f: 'dailymed-eplerenona',
            sec: '12.3 · Farmacocinética',
            cita: '1.5 to 2 hours following oral administration',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Cerca del 50 % se une a proteínas plasmáticas, sobre todo a glucoproteína ácida alfa-1.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Cerca del 50 % se une a proteínas plasmáticas, sobre todo a glucoproteína ácida alfa-1.',
          ref: {
            f: 'dailymed-eplerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma protein binding of eplerenone is about 50%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor mineralocorticoide',
        efecto: 'Ocupa el receptor mineralocorticoide y evita que la aldosterona se una a él.',
        lugar: [],
        datos: [
          {
            t: 'Ocupa el receptor mineralocorticoide y evita que la aldosterona se una a él.',
            ref: { f: 'dailymed-eplerenona', sec: '12.1 · Mecanismo', cita: 'blocks the binding of aldosterone', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma principalmente a través de CYP3A4. La etiqueta no identifica metabolitos activos en plasma humano.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente a través de CYP3A4. La etiqueta no identifica metabolitos activos en plasma humano.',
          ref: { f: 'dailymed-eplerenona', sec: '12.3 · Farmacocinética', cita: 'No active metabolites of eplerenone', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado se recuperó aproximadamente el 67 % en orina y el 32 % en heces. Menos del 5 % se recuperó como eplerenona intacta.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado se recuperó aproximadamente el 67 % en orina y el 32 % en heces. Menos del 5 % se recuperó como eplerenona intacta.',
          ref: {
            f: 'dailymed-eplerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 67% was excreted in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-eplerenona', '1a52bedc-8e2c-4116-a296-a87770676b4a', 'INSPRA (EPLERENONE) TABLET, FILM COATED', 'Inspra', '6', '2026-02-06', '2026-11-10'),
    rengPubchem(443872, 'eplerenone', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
