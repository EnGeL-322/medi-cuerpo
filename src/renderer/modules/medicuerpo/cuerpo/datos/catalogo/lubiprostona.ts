import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lubiprostona',
    nombre: 'Lubiprostona',
    clase: 'Activador de canales de cloruro intestinales',
    sinonimos: [ 'lubiprostone' ],
    formula: 'C20H32F2O5',
    masaMolar: 390.5,
    smiles: 'CCCCC([C@]1(CC[C@H]2[C@H](O1)CC(=O)[C@@H]2CCCCCCC(=O)O)O)(F)F',
    inchikey: 'WGFOBBZOWHGYQH-MXHNKVEKSA-N',
    cid: 157920,
    iupac: '7-[(2R,4aR,5R,7aR)-2-(1,1-difluoropentyl)-2-hydroxy-6-oxo-3,4,4a,5,7,7a-hexahydrocyclopenta[b]pyran-5-yl]heptanoic acid',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'lubiprostona-oral',
      producto: 'Amitiza · cápsula',
      titular: 'SPECGX LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '8 ug',
      excipientes: [ 'medium-chain triglycerides', 'gelatin, unspecified', 'sorbitol', 'ferric oxide red', 'titanium dioxide', 'water' ],
      usos: {
        t: 'Determinados cuadros de estreñimiento crónico en adultos, según la etiqueta.',
        ref: { f: 'dailymed-lubiprostona', sec: '1 · Indicaciones', cita: 'chronic idiopathic constipation (CIC) in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-lubiprostona'
    }
  ],
  resumen: {
    contiene: 'Cápsula oral con lubiprostona como ingrediente activo.',
    usos: 'Determinados cuadros de estreñimiento crónico en adultos, según la etiqueta.',
    actua: 'Activa el canal ClC-2 y aumenta la secreción de líquido rico en cloruro en el intestino.',
    recorrido: 'Después de la toma, el original queda por debajo del límite de cuantificación en plasma. Sí se pudo medir su metabolito M3. La etiqueta cuantifica la semivida de M3 en 0,9 a 1,4 horas. El original no pudo detectarse en plasma en ese análisis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Amitiza se presenta como cápsula para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Amitiza se presenta como cápsula para administración oral.',
          ref: {
            f: 'dailymed-lubiprostona',
            sec: '3 · Forma farmacéutica',
            cita: 'oval, gelatin capsule containing 8 mcg or',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Después de la toma, el original queda por debajo del límite de cuantificación en plasma. Sí se pudo medir su metabolito M3.',
      sigue: 'La acción principal sigue en el intestino.',
      datos: [
        {
          t: 'Después de la toma, el original queda por debajo del límite de cuantificación en plasma. Sí se pudo medir su metabolito M3.',
          ref: { f: 'dailymed-lubiprostona', sec: '12.3 · Farmacocinética', cita: 'below the level of quantitation', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [],
      llega: 'La acción del original sigue siendo local.',
      ocurre: 'En un ensayo in vitro, la unión de lubiprostona a proteínas plasmáticas fue cercana al 94 %. Eso no implica una exposición alta tras tomar la cápsula.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En un ensayo in vitro, la unión de lubiprostona a proteínas plasmáticas fue cercana al 94 %. Eso no implica una exposición alta tras tomar la cápsula.',
          ref: { f: 'dailymed-lubiprostona', sec: '12.3 · Farmacocinética', cita: 'lubiprostone is approximately 94% bound', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canal de cloruro ClC-2',
        efecto: 'Activa el canal ClC-2 y aumenta la secreción de líquido rico en cloruro en el intestino.',
        lugar: [ 'luz-intestinal' ],
        datos: [
          {
            t: 'Activa el canal ClC-2 y aumenta la secreción de líquido rico en cloruro en el intestino.',
            ref: { f: 'dailymed-lubiprostona', sec: '12.1 · Mecanismo', cita: 'specifically activating ClC-2', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma rápidamente por reducción y oxidación. M3 es el metabolito activo que se pudo medir.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma rápidamente por reducción y oxidación. M3 es el metabolito activo que se pudo medir.',
          ref: { f: 'dailymed-lubiprostona', sec: '12.3 · Farmacocinética', cita: 'only measurable active metabolite', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'M3',
          actividad: 'activo',
          ref: { f: 'dailymed-lubiprostona', sec: '12.3 · Farmacocinética', cita: 'only measurable active metabolite', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La etiqueta cuantifica la semivida de M3 en 0,9 a 1,4 horas. El original no pudo detectarse en plasma en ese análisis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La etiqueta cuantifica la semivida de M3 en 0,9 a 1,4 horas. El original no pudo detectarse en plasma en ese análisis.',
          ref: { f: 'dailymed-lubiprostona', sec: '12.3 · Farmacocinética', cita: 'ranging from 0.9 to 1.4 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-lubiprostona', '164a2b47-0a52-4bb4-9e71-5342c2e951f4', 'AMITIZA (LUBIPROSTONE) CAPSULE, GELATIN COATED', 'Amitiza', '4', '2026-07-24', '2026-11-10'),
    rengPubchem(157920, 'lubiprostone', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
