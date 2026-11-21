import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fesoterodina',
    nombre: 'Fesoterodina',
    clase: 'Antimuscarínico, profármaco',
    sinonimos: [ 'fesoterodina', 'fesoterodine', 'Toviaz' ],
    formula: 'C26H37NO3',
    masaMolar: 411.6,
    smiles: 'CC(C)C(=O)OC1=C(C=C(C=C1)CO)[C@H](CCN(C(C)C)C(C)C)C2=CC=CC=C2',
    inchikey: 'DCCSDBARQIPTGU-HSZRJFAPSA-N',
    cid: 6918558,
    iupac: '[2-[(1R)-3-[di(propan-2-yl)amino]-1-phenylpropyl]-4-(hydroxymethyl)phenyl] 2-methylpropanoate',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'fesoterodina-oral',
      producto: 'Toviaz · comprimido recubierto de liberación prolongada',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '4 mg o 8 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fumarato de fesoterodina',
        ref: { f: 'dailymed-fesoterodina', sec: '11 · Descripción', cita: 'fesoterodine fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'glyceryl dibehenate',
        'hypromellose, unspecified',
        'indigotindisulfonate sodium',
        'aluminum oxide',
        'lactose monohydrate',
        'soybean lecithin',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'xylitol'
      ],
      usos: {
        t: 'Entre sus indicaciones está la vejiga hiperactiva en adultos con urgencia, frecuencia e incontinencia de urgencia.',
        ref: {
          f: 'dailymed-fesoterodina',
          sec: '1 · Indicaciones',
          cita: 'Overactive bladder (OAB) in adults with symptoms of urge urinary incontinence',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fesoterodina',
      reacciones: [
        [ 'Boca seca en los ensayos de adultos con vejiga hiperactiva.', '34084-4', 'were: dry mouth (placebo, 7%' ],
        [ 'Estreñimiento en esos mismos ensayos.', '34084-4', 'and constipation (placebo, 2%' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 4 mg o 8 mg por comprimido, según la etiqueta; el activo va como fumarato de fesoterodina. Los excipientes no son el principio activo.',
    usos: 'Entre sus indicaciones está la vejiga hiperactiva en adultos con urgencia, frecuencia e incontinencia de urgencia.',
    actua: 'La hidrólisis genera 5-hidroximetil tolterodina, que media el bloqueo de receptores muscarínicos.',
    recorrido: 'La fesoterodina se absorbe y se hidroliza rápidamente. La biodisponibilidad informada corresponde a su metabolito activo, con un 52 %. La transformación hepática y la excreción renal contribuyen a retirar el metabolito activo.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto de liberación prolongada de Toviaz.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido recubierto de liberación prolongada de Toviaz.',
          ref: { f: 'dailymed-fesoterodina', sec: '3 · Formas y concentraciones', cita: 'Extended-release tablets: • 4 mg', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La fesoterodina se absorbe y se hidroliza rápidamente. La biodisponibilidad informada corresponde a su metabolito activo, con un 52 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La fesoterodina se absorbe y se hidroliza rápidamente. La biodisponibilidad informada corresponde a su metabolito activo, con un 52 %.',
          ref: { f: 'dailymed-fesoterodina', sec: '12.3 · Farmacocinética', cita: 'Bioavailability of the active metabolite is 52%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor de la mitad del metabolito activo circula unido a proteínas, principalmente albúmina y glucoproteína ácida alfa-1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor de la mitad del metabolito activo circula unido a proteínas, principalmente albúmina y glucoproteína ácida alfa-1.',
          ref: {
            f: 'dailymed-fesoterodina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of the active metabolite is low (approximately 50%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores muscarínicos',
        efecto: 'La hidrólisis genera 5-hidroximetil tolterodina, que media el bloqueo de receptores muscarínicos.',
        lugar: [ 'vejiga', 'musculos' ],
        datos: [
          {
            t: 'La hidrólisis genera 5-hidroximetil tolterodina, que media el bloqueo de receptores muscarínicos.',
            ref: {
              f: 'dailymed-fesoterodina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'nonspecific esterases to its active metabolite, 5-hydroxymethyl tolterodine',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Esterasas generan el metabolito activo. CYP2D6 y CYP3A4 participan en la formación de otros metabolitos de actividad antimuscarínica poco significativa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Esterasas generan el metabolito activo. CYP2D6 y CYP3A4 participan en la formación de otros metabolitos de actividad antimuscarínica poco significativa.',
          ref: { f: 'dailymed-fesoterodina', sec: '12.3 · Farmacocinética', cita: 'major pathways involving CYP2D6 and CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'higado', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La transformación hepática y la excreción renal contribuyen a retirar el metabolito activo.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La transformación hepática y la excreción renal contribuyen a retirar el metabolito activo.',
          ref: {
            f: 'dailymed-fesoterodina',
            sec: '12.3 · Farmacocinética',
            cita: 'Hepatic metabolism and renal excretion contribute significantly to the elimination',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad del metabolito activo',
      valor: '52',
      unidad: '%',
      analito: '5-hidroximetil tolterodina',
      ref: { f: 'dailymed-fesoterodina', sec: '12.3 · Farmacocinética', cita: 'Bioavailability of the active metabolite is 52%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fesoterodina', '5be745f0-8ae7-4c3c-9962-37d6263326f1', 'TOVIAZ (FESOTERODINE FUMARATE) TABLET, FILM COATED, EXTENDED RELEASE', 'Toviaz', '33', '2026-04-09', '2026-11-12'),
    rengPubchem(6918558, 'fesoterodina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
