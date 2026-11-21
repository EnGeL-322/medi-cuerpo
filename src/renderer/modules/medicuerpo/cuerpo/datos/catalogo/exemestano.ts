import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'exemestano',
    nombre: 'Exemestano',
    clase: 'Inactivador esteroideo de la aromatasa',
    sinonimos: [ 'exemestane' ],
    formula: 'C20H24O2',
    masaMolar: 296.4,
    smiles: 'C[C@]12CC[C@H]3[C@H]([C@@H]1CCC2=O)CC(=C)C4=CC(=O)C=C[C@]34C',
    inchikey: 'BFYIZQONLCFLEV-DAELLWKTSA-N',
    cid: 60198,
    iupac: '(8R,9S,10R,13S,14S)-10,13-dimethyl-6-methylidene-7,8,9,11,12,14,15,16-octahydrocyclopenta[a]phenanthrene-3,17-dione',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'exemestano-oral',
      producto: 'Aromasin · comprimido',
      titular: 'PHARMACIA & UPJOHN COMPANY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [
        'mannitol',
        'crospovidone (120 .mu.m)',
        'polysorbate 80',
        'hypromellose, unspecified',
        'silicon dioxide',
        'microcrystalline cellulose',
        'magnesium stearate',
        'polyethylene glycol 6000',
        'sucrose',
        'magnesium carbonate',
        'titanium dioxide',
        'methylparaben',
        'polyvinyl alcohol, unspecified',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Determinados cánceres de mama en mujeres posmenopáusicas en los contextos definidos por la etiqueta.',
        ref: {
          f: 'dailymed-exemestano',
          sec: '1 · Indicaciones',
          cita: 'postmenopausal women with estrogen-receptor positive early breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-exemestano'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con exemestano como ingrediente activo.',
    usos: 'Determinados cánceres de mama en mujeres posmenopáusicas en los contextos definidos por la etiqueta.',
    actua: 'Inactiva de manera irreversible la aromatasa y disminuye la formación de estrógenos a partir de andrógenos.',
    recorrido: 'En los estudios orales de la etiqueta, la absorción pareció más rápida en mujeres con cáncer de mama que en voluntarias sanas. En voluntarias posmenopáusicas, se recuperaron cantidades similares de radiactividad en orina y heces durante una semana.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Aromasin se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Aromasin se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-exemestano',
            sec: '3 · Forma farmacéutica',
            cita: 'STRENGTHS AROMASIN Tablets are round, biconvex, and',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En los estudios orales de la etiqueta, la absorción pareció más rápida en mujeres con cáncer de mama que en voluntarias sanas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En los estudios orales de la etiqueta, la absorción pareció más rápida en mujeres con cáncer de mama que en voluntarias sanas.',
          ref: {
            f: 'dailymed-exemestano',
            sec: '12.3 · Farmacocinética',
            cita: 'absorbed more rapidly in women with breast cancer',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El 90 % se une a proteínas plasmáticas. El paso a células sanguíneas se describe como insignificante.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El 90 % se une a proteínas plasmáticas. El paso a células sanguíneas se describe como insignificante.',
          ref: {
            f: 'dailymed-exemestano',
            sec: '12.3 · Farmacocinética',
            cita: 'Exemestane is 90% bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Aromatasa',
        efecto: 'Inactiva de manera irreversible la aromatasa y disminuye la formación de estrógenos a partir de andrógenos.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Inactiva de manera irreversible la aromatasa y disminuye la formación de estrógenos a partir de andrógenos.',
            ref: {
              f: 'dailymed-exemestano',
              sec: '12.1 · Mecanismo',
              cita: 'an irreversible, steroidal aromatase inactivator',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente, con oxidación y reducción. Los metabolitos descritos son inactivos o menos potentes contra la aromatasa.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente, con oxidación y reducción. Los metabolitos descritos son inactivos o menos potentes contra la aromatasa.',
          ref: {
            f: 'dailymed-exemestano',
            sec: '12.3 · Farmacocinética',
            cita: 'inactive or inhibit aromatase with decreased potency',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En voluntarias posmenopáusicas, se recuperaron cantidades similares de radiactividad en orina y heces durante una semana.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En voluntarias posmenopáusicas, se recuperaron cantidades similares de radiactividad en orina y heces durante una semana.',
          ref: {
            f: 'dailymed-exemestano',
            sec: '12.3 · Farmacocinética',
            cita: 'amounts of radioactivity excreted in urine and feces were similar',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-exemestano', 'cf066b7a-032a-416c-8d40-15ba581423e3', 'AROMASIN (EXEMESTANE) TABLET', 'Aromasin', '24', '2025-12-25', '2026-11-10'),
    rengPubchem(60198, 'exemestane', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
