import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'capecitabina',
    nombre: 'Capecitabina',
    clase: 'Antimetabolito fluoropirimidínico (profármaco)',
    sinonimos: [ 'capecitabine' ],
    formula: 'C15H22FN3O6',
    masaMolar: 359.35,
    smiles: 'CCCCCOC(=O)NC1=NC(=O)N(C=C1F)[C@H]2[C@@H]([C@@H]([C@H](O2)C)O)O',
    inchikey: 'GAGWJHPBXLXJQN-UORFTKCHSA-N',
    cid: 60953,
    iupac: 'pentyl N-[1-[(2R,3R,4S,5R)-3,4-dihydroxy-5-methyloxolan-2-yl]-5-fluoro-2-oxopyrimidin-4-yl]carbamate',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'capecitabina-oral',
      producto: 'XELODA · comprimido recubierto',
      titular: 'H2-PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg',
      excipientes: [
        'croscarmellose sodium',
        'anhydrous lactose',
        'hypromellose 2910 (6 mpa.s)',
        'hypromellose 2208 (3 mpa.s)',
        'microcrystalline cellulose',
        'magnesium stearate',
        'talc',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Determinados cánceres, entre ellos algunos cánceres colorrectales, según la indicación y el esquema de la etiqueta.',
        ref: {
          f: 'dailymed-capecitabina',
          sec: '1 · Indicaciones',
          cita: 'adjuvant treatment of patients with Stage III colon cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-capecitabina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con capecitabina como ingrediente activo.',
    usos: 'Determinados cánceres, entre ellos algunos cánceres colorrectales, según la indicación y el esquema de la etiqueta.',
    actua: 'Se convierte en fluorouracilo. Sus derivados alteran la síntesis de ADN o se incorporan al ARN, lo que lesiona células.',
    recorrido: 'En el estudio oral citado, el pico mediano llegó a 1,5 horas para capecitabina y a dos horas para fluorouracilo. En el estudio radiomarcado se recuperó el 96 % en orina. Solo el 3 % correspondió a capecitabina intacta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'XELODA se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'XELODA se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-capecitabina', sec: '11 · Descripción', cita: 'oblong film-coated tablets for oral use. Each', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral citado, el pico mediano llegó a 1,5 horas para capecitabina y a dos horas para fluorouracilo.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio oral citado, el pico mediano llegó a 1,5 horas para capecitabina y a dos horas para fluorouracilo.',
          ref: {
            f: 'dailymed-capecitabina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 1.5 hours and 2 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Menos del 60 % de la capecitabina y sus metabolitos se une a proteínas plasmáticas. La capecitabina se une sobre todo a albúmina.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Menos del 60 % de la capecitabina y sus metabolitos se une a proteínas plasmáticas. La capecitabina se une sobre todo a albúmina.',
          ref: {
            f: 'dailymed-capecitabina',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of capecitabine and its metabolites is less than 60%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Timidilato sintasa y síntesis de ARN',
        efecto: 'Se convierte en fluorouracilo. Sus derivados alteran la síntesis de ADN o se incorporan al ARN, lo que lesiona células.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Se convierte en fluorouracilo. Sus derivados alteran la síntesis de ADN o se incorporan al ARN, lo que lesiona células.',
            ref: {
              f: 'dailymed-capecitabina',
              sec: '12.1 · Mecanismo',
              cita: 'These metabolites cause cell injury by two different mechanisms',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Varias enzimas convierten la capecitabina en fluorouracilo activo, que también se transforma después.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Varias enzimas convierten la capecitabina en fluorouracilo activo, que también se transforma después.',
          ref: { f: 'dailymed-capecitabina', sec: '12.3 · Farmacocinética', cita: 'active metabolite fluorouracil', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Fluorouracilo',
          actividad: 'activo',
          ref: { f: 'dailymed-capecitabina', sec: '12.3 · Farmacocinética', cita: 'active metabolite fluorouracil', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio radiomarcado se recuperó el 96 % en orina. Solo el 3 % correspondió a capecitabina intacta.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio radiomarcado se recuperó el 96 % en orina. Solo el 3 % correspondió a capecitabina intacta.',
          ref: {
            f: 'dailymed-capecitabina',
            sec: '12.3 · Farmacocinética',
            cita: 'capecitabine dose was recovered in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-capecitabina', 'e702d84d-7162-4751-bf37-d724cc7e45a5', 'XELODA (CAPECITABINE) TABLET, FILM COATED', 'XELODA', '32', '2026-02-06', '2026-11-10'),
    rengPubchem(60953, 'capecitabine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
