import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dutasterida',
    nombre: 'Dutasterida',
    clase: 'Inhibidor de la 5 alfa-reductasa',
    sinonimos: [ 'dutasteride' ],
    formula: 'C27H30F6N2O2',
    masaMolar: 528.5,
    smiles: 'C[C@]12CC[C@H]3[C@H]([C@@H]1CC[C@@H]2C(=O)NC4=C(C=CC(=C4)C(F)(F)F)C(F)(F)F)CC[C@@H]5[C@@]3(C=CC(=O)N5)C',
    inchikey: 'JWJOTENAMICLJG-QWBYCMEYSA-N',
    cid: 6918296,
    iupac: '(1S,3aS,3bS,5aR,9aR,9bS,11aS)-N-[2,5-bis(trifluoromethyl)phenyl]-9a,11a-dimethyl-7-oxo-1,2,3,3a,3b,4,5,5a,6,9b,10,11-dodecahydroindeno[5,4-f]quinoline-1-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'dutasterida-oral',
      producto: 'AVODART · cápsula',
      titular: 'WAYLIS THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [ 'butylated hydroxytoluene', 'ferric oxide yellow', 'gelatin, unspecified', 'glycerin', 'glyceryl mono- and dicaprylocaprate' ],
      usos: {
        t: 'Hiperplasia prostática benigna sintomática con próstata aumentada, según la etiqueta.',
        ref: { f: 'dailymed-dutasterida', sec: '1 · Indicaciones', cita: 'symptomatic benign prostatic hyperplasia', codigo: '34067-9' }
      },
      fuente: 'dailymed-dutasterida'
    }
  ],
  resumen: {
    contiene: 'Cápsula oral con dutasterida como ingrediente activo.',
    usos: 'Hiperplasia prostática benigna sintomática con próstata aumentada, según la etiqueta.',
    actua: 'Inhibe la conversión de testosterona a dihidrotestosterona al bloquear las dos isoformas de 5 alfa-reductasa.',
    recorrido: 'La biodisponibilidad absoluta en cinco voluntarios sanos fue aproximadamente del 60 %. El original y los metabolitos salen principalmente por heces. En la orina se encontraron trazas del original.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'AVODART se presenta como cápsula para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'AVODART se presenta como cápsula para administración oral.',
          ref: {
            f: 'dailymed-dutasterida',
            sec: '3 · Forma farmacéutica',
            cita: 'yellow, gelatin capsules imprinted with “GX CE2”',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta en cinco voluntarios sanos fue aproximadamente del 60 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta en cinco voluntarios sanos fue aproximadamente del 60 %.',
          ref: { f: 'dailymed-dutasterida', sec: '12.3 · Farmacocinética', cita: 'healthy subjects is approximately 60%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une ampliamente a la albúmina y a la glucoproteína ácida alfa-1.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une ampliamente a la albúmina y a la glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-dutasterida', sec: '12.3 · Farmacocinética', cita: 'bound to plasma albumin (99.0%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: '5 alfa-reductasa tipos 1 y 2',
        efecto: 'Inhibe la conversión de testosterona a dihidrotestosterona al bloquear las dos isoformas de 5 alfa-reductasa.',
        lugar: [ 'prostata' ],
        datos: [
          {
            t: 'Inhibe la conversión de testosterona a dihidrotestosterona al bloquear las dos isoformas de 5 alfa-reductasa.',
            ref: {
              f: 'dailymed-dutasterida',
              sec: '12.1 · Mecanismo',
              cita: 'inhibits the conversion of testosterone to DHT',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente. En ensayos in vitro intervinieron CYP3A4 y CYP3A5.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente. En ensayos in vitro intervinieron CYP3A4 y CYP3A5.',
          ref: {
            f: 'dailymed-dutasterida',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized by the CYP3A4 and CYP3A5 isoenzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El original y los metabolitos salen principalmente por heces. En la orina se encontraron trazas del original.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El original y los metabolitos salen principalmente por heces. En la orina se encontraron trazas del original.',
          ref: {
            f: 'dailymed-dutasterida',
            sec: '12.3 · Farmacocinética',
            cita: 'Dutasteride and its metabolites were excreted mainly in feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-dutasterida', '960797b3-09b1-4d6a-8ece-8b5d918e93e4', 'AVODART (DUTASTERIDE) CAPSULE, LIQUID FILLED', 'AVODART', '5', '2026-11-02', '2026-11-10'),
    rengPubchem(6918296, 'dutasteride', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
