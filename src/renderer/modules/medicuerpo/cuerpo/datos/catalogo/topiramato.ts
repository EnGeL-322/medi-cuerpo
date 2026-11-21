import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'topiramato',
    nombre: 'Topiramato',
    clase: 'Antiepiléptico',
    sinonimos: [ 'topiramate' ],
    formula: 'C12H21NO8S',
    masaMolar: 339.36,
    smiles: 'CC1(O[C@@H]2CO[C@@]3([C@H]([C@@H]2O1)OC(O3)(C)C)COS(=O)(=O)N)C',
    inchikey: 'KJADKKWYZYXHBB-XBWDGYHZSA-N',
    cid: 5284627,
    iupac: '[(1R,2S,6S,9R)-4,4,11,11-tetramethyl-3,5,7,10,12-pentaoxatricyclo[7.3.0.02,6]dodecan-6-yl]methyl sulfamate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'topiramato-oral',
      producto: 'Topamax · comprimido recubierto',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'water',
        'carnauba wax',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'polysorbate 80'
      ],
      usos: {
        t: 'Determinadas crisis epilépticas y prevención de la migraña según las poblaciones descritas en la etiqueta.',
        ref: { f: 'dailymed-topiramato', sec: '1 · Indicaciones', cita: 'TOPAMAX is indicated for' }
      },
      fuente: 'dailymed-topiramato'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de topiramato para administración oral.',
    usos: 'Determinadas crisis epilépticas y prevención de la migraña según las poblaciones descritas en la etiqueta.',
    actua: 'El mecanismo exacto es desconocido. En estudios preclínicos modula, entre otros, canales de sodio y la señal mediada por GABA.',
    recorrido: 'Se absorbe con rapidez. La biodisponibilidad del comprimido es de cerca del 80 % respecto a una solución. El riñón elimina principalmente topiramato sin cambios, aproximadamente el 70 % de la dosis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Topamax por vía oral.',
      ocurre: 'El recorrido usa TOPAMAX en comprimido recubierto. La etiqueta distingue esta forma de las cápsulas con gránulos.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'El recorrido usa TOPAMAX en comprimido recubierto. La etiqueta distingue esta forma de las cápsulas con gránulos.',
          ref: { f: 'dailymed-topiramato', sec: '3 · Forma farmacéutica', cita: 'TOPAMAX Tablets are available as debossed' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe con rapidez. La biodisponibilidad del comprimido es de cerca del 80 % respecto a una solución.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe con rapidez. La biodisponibilidad del comprimido es de cerca del 80 % respecto a una solución.',
          ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: 'tablet formulation is about 80% compared to a solution' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Entre el 15 % y el 41 % se une a proteínas plasmáticas en el intervalo medido. La proporción unida disminuye a concentraciones más altas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Entre el 15 % y el 41 % se une a proteínas plasmáticas en el intervalo medido. La proporción unida disminuye a concentraciones más altas.',
          ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: '15% to 41% bound to human plasma proteins' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'El mecanismo exacto es desconocido. En estudios preclínicos modula, entre otros, canales de sodio y la señal mediada por GABA.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'El mecanismo exacto es desconocido. En estudios preclínicos modula, entre otros, canales de sodio y la señal mediada por GABA.',
            ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: 'blocks voltage-dependent sodium channels' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se metaboliza poco. Se han identificado productos de hidroxilación, hidrólisis y glucuronidación, ninguno superior al 5 % de la dosis.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se metaboliza poco. Se han identificado productos de hidroxilación, hidrólisis y glucuronidación, ninguno superior al 5 % de la dosis.',
          ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: 'Six metabolites have been identified in humans' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El riñón elimina principalmente topiramato sin cambios, aproximadamente el 70 % de la dosis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El riñón elimina principalmente topiramato sin cambios, aproximadamente el 70 % de la dosis.',
          ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: 'primarily eliminated unchanged in the urine' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '21',
      unidad: 'h',
      ref: { f: 'dailymed-topiramato', sec: '12 · Farmacología clínica', cita: 'mean plasma elimination half-life is 21 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-topiramato', '21628112-0c47-11df-95b3-498d55d89593', 'TOPAMAX (TOPIRAMATE) TABLET, COATED TOPAMAX (TOPIRAMATE) CAPSULE, COATED PELLETS', 'Topamax', '31', '2026-10-06', '2026-11-10'),
    rengPubchem(5284627, 'topiramate', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
