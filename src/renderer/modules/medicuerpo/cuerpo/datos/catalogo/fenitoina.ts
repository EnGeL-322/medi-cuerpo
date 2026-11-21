import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fenitoina',
    nombre: 'Fenitoína',
    clase: 'Antiepiléptico de la familia de las hidantoínas',
    sinonimos: [ 'phenytoin' ],
    formula: 'C15H12N2O2',
    masaMolar: 252.27,
    smiles: 'C1=CC=C(C=C1)C2(C(=O)NC(=O)N2)C3=CC=CC=C3',
    inchikey: 'CXOFVDLJLONNDW-UHFFFAOYSA-N',
    cid: 1775,
    iupac: '5,5-diphenylimidazolidine-2,4-dione',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'fenitoina-oral',
      producto: 'DILANTIN · cápsula de liberación prolongada',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '30 mg',
      excipientes: [
        'sucrose',
        'lactose monohydrate',
        'magnesium stearate',
        'talc',
        'd&c yellow no. 10',
        'fd&c red no. 3',
        'gelatin, unspecified',
        'titanium dioxide'
      ],
      usos: {
        t: 'Determinadas crisis convulsivas y crisis asociadas a neurocirugía según la etiqueta de las cápsulas.',
        ref: { f: 'dailymed-fenitoina', sec: '1 · Indicaciones', cita: 'treatment of tonic-clonic (grand mal)', codigo: '34067-9' }
      },
      fuente: 'dailymed-fenitoina',
      sal: {
        nombre: 'sal sódica de fenitoína',
        ref: { f: 'dailymed-fenitoina', sec: '3 · Forma farmacéutica', cita: 'phenytoin sodium', codigo: '43678-2' }
      }
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada oral con sal sódica de fenitoína como ingrediente activo.',
    usos: 'Determinadas crisis convulsivas y crisis asociadas a neurocirugía según la etiqueta de las cápsulas.',
    actua: 'Se cree que bloquea canales de sodio dependientes del voltaje y reduce las descargas neuronales sostenidas.',
    recorrido: 'Con las cápsulas de liberación prolongada, los niveles séricos máximos se observan entre 4 y 12 horas. Los metabolitos inactivos salen por bilis. La etiqueta describe reabsorción intestinal y eliminación posterior en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'DILANTIN se presenta como cápsula de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'DILANTIN se presenta como cápsula de liberación prolongada para administración oral.',
          ref: {
            f: 'dailymed-fenitoina',
            sec: '3 · Forma farmacéutica',
            cita: 'phenytoin sodium capsules are available as: •',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Con las cápsulas de liberación prolongada, los niveles séricos máximos se observan entre 4 y 12 horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Con las cápsulas de liberación prolongada, los niveles séricos máximos se observan entre 4 y 12 horas.',
          ref: { f: 'dailymed-fenitoina', sec: '12.3 · Farmacocinética', cita: 'peak serum levels occur 4 to 12 hours', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une extensamente a proteínas séricas. La fracción libre cambia cuando la unión a proteínas es distinta.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une extensamente a proteínas séricas. La fracción libre cambia cuando la unión a proteínas es distinta.',
          ref: {
            f: 'dailymed-fenitoina',
            sec: '12.3 · Farmacocinética',
            cita: 'Phenytoin is extensively bound to serum plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio dependientes del voltaje',
        efecto: 'Se cree que bloquea canales de sodio dependientes del voltaje y reduce las descargas neuronales sostenidas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que bloquea canales de sodio dependientes del voltaje y reduce las descargas neuronales sostenidas.',
            ref: {
              f: 'dailymed-fenitoina',
              sec: '12.1 · Mecanismo',
              cita: 'voltage-dependent blockade of membrane sodium channels',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma principalmente en el hígado por CYP2C9 y, en menor medida, por CYP2C19.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente en el hígado por CYP2C9 y, en menor medida, por CYP2C19.',
          ref: {
            f: 'dailymed-fenitoina',
            sec: '12.3 · Farmacocinética',
            cita: 'primarily metabolized by the hepatic cytochrome P450 enzyme CYP2C9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'intestino-delgado', 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Los metabolitos inactivos salen por bilis. La etiqueta describe reabsorción intestinal y eliminación posterior en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Los metabolitos inactivos salen por bilis. La etiqueta describe reabsorción intestinal y eliminación posterior en orina.',
          ref: {
            f: 'dailymed-fenitoina',
            sec: '12.3 · Farmacocinética',
            cita: 'reabsorbed from the intestinal tract and excreted in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-fenitoina', '86dd27d1-9cee-48ae-b55d-e2d2f7dbc593', 'DILANTIN (EXTENDED PHENYTOIN SODIUM) CAPSULE, EXTENDED RELEASE', 'DILANTIN', '3', '2025-04-10', '2026-11-10'),
    rengPubchem(1775, 'phenytoin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
