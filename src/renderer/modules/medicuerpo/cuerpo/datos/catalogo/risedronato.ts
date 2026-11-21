import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'risedronato',
    nombre: 'Risedronato',
    clase: 'Bisfosfonato antirresortivo',
    sinonimos: [ 'risedronic acid' ],
    formula: 'C7H11NO7P2',
    masaMolar: 283.11,
    smiles: 'C1=CC(=CN=C1)CC(O)(P(=O)(O)O)P(=O)(O)O',
    inchikey: 'IIDJRNMFWXDHID-UHFFFAOYSA-N',
    cid: 5245,
    iupac: '(1-hydroxy-1-phosphono-2-pyridin-3-ylethyl)phosphonic acid',
    area: 'Huesos'
  },
  presentaciones: [
    {
      id: 'risedronato-oral',
      producto: 'Actonel · comprimido recubierto',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg equivalentes de risedronato sódico anhidro por comprimido',
      excipientes: [
        'crospovidone',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromelloses',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'silicon dioxide',
        'titanium dioxide',
        'ferric oxide yellow',
        'lactose monohydrate'
      ],
      usos: {
        t: 'Determinados tipos de osteoporosis y otras indicaciones óseas según la etiqueta.',
        ref: {
          f: 'dailymed-risedronato',
          sec: '1 · Indicaciones',
          cita: 'Treatment and prevention of postmenopausal osteoporosis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-risedronato',
      sal: {
        nombre: 'Risedronato sódico hemipentahidratado con una fracción monohidratada',
        ref: {
          f: 'dailymed-risedronato',
          sec: '11 · Descripción',
          cita: 'hemi-pentahydrate with small amounts of monohydrate',
          codigo: '34089-3'
        }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con 5 mg equivalentes de risedronato sódico anhidro por comprimido.',
    usos: 'Determinados tipos de osteoporosis y otras indicaciones óseas según la etiqueta.',
    actua: 'Se une a la hidroxiapatita del hueso e inhibe la resorción que realizan los osteoclastos.',
    recorrido: 'La biodisponibilidad oral fue inferior al 1 % en el estudio del comprimido. La presencia de comida redujo la absorción. Parte de la fracción absorbida sale por la orina. El fármaco no absorbido se elimina intacto por heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Actonel se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Actonel se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-risedronato', sec: '3 · Forma farmacéutica', cita: 'oval, yellow tablet with RSN on 1', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad oral fue inferior al 1 % en el estudio del comprimido. La presencia de comida redujo la absorción.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad oral fue inferior al 1 % en el estudio del comprimido. La presencia de comida redujo la absorción.',
          ref: {
            f: 'dailymed-risedronato',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean absolute oral bioavailability of the 30 mg tablet is 0.63%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Alrededor del 24 % se une a proteínas plasmáticas humanas. La etiqueta describe afinidad por el mineral óseo.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Alrededor del 24 % se une a proteínas plasmáticas humanas. La etiqueta describe afinidad por el mineral óseo.',
          ref: {
            f: 'dailymed-risedronato',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of drug is about 24%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Resorción ósea mediada por osteoclastos',
        efecto: 'Se une a la hidroxiapatita del hueso e inhibe la resorción que realizan los osteoclastos.',
        lugar: [ 'huesos' ],
        datos: [
          {
            t: 'Se une a la hidroxiapatita del hueso e inhibe la resorción que realizan los osteoclastos.',
            ref: { f: 'dailymed-risedronato', sec: '12.1 · Mecanismo', cita: 'affinity for hydroxyapatite crystals in bone', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La fracción absorbida sigue disponible como risedronato.',
      ocurre: 'La etiqueta no encuentra evidencia de metabolismo sistémico del risedronato.',
      sigue: 'El risedronato intacto pasa hacia la eliminación.',
      datos: [
        {
          t: 'La etiqueta no encuentra evidencia de metabolismo sistémico del risedronato.',
          ref: {
            f: 'dailymed-risedronato',
            sec: '12.3 · Farmacocinética',
            cita: 'no evidence of systemic metabolism of risedronate',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Parte de la fracción absorbida sale por la orina. El fármaco no absorbido se elimina intacto por heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Parte de la fracción absorbida sale por la orina. El fármaco no absorbido se elimina intacto por heces.',
          ref: {
            f: 'dailymed-risedronato',
            sec: '12.3 · Farmacocinética',
            cita: 'Unabsorbed drug is eliminated unchanged in feces',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-risedronato', '24ed00e0-25e2-49a8-97fc-66c1b417dc0b', 'ACTONEL (RISEDRONATE SODIUM) TABLET, FILM COATED', 'Actonel', '31', '2026-05-11', '2026-11-10'),
    rengPubchem(5245, 'risedronic acid', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
