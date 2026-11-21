import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'entecavir',
    nombre: 'Entecavir',
    clase: 'Antiviral análogo de guanosina',
    sinonimos: [ 'entecavir' ],
    formula: 'C12H15N5O3',
    masaMolar: 277.28,
    smiles: 'C=C1[C@H](C[C@@H]([C@H]1CO)O)N2C=NC3=C2N=C(NC3=O)N',
    inchikey: 'QDGZDCVAUDNJFG-FXQIFTODSA-N',
    cid: 135398508,
    iupac: '2-amino-9-[(1S,3R,4S)-4-hydroxy-3-(hydroxymethyl)-2-methylidenecyclopentyl]-1H-purin-6-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'entecavir-oral',
      producto: 'BARACLUDE · comprimido recubierto',
      titular: 'E.R. SQUIBB & SONS, L.L.C.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'magnesium stearate',
        'titanium dioxide',
        'hypromellose, unspecified',
        'polyethylene glycol 400',
        'polysorbate 80',
        'crospovidone (120 .mu.m)'
      ],
      usos: {
        t: 'Infección crónica por hepatitis B en los pacientes que cumplen los criterios de la etiqueta.',
        ref: { f: 'dailymed-entecavir', sec: '1 · Indicaciones', cita: 'chronic hepatitis B virus infection', codigo: '34067-9' }
      },
      fuente: 'dailymed-entecavir',
      sal: {
        nombre: 'Entecavir monohidratado',
        ref: { f: 'dailymed-entecavir', sec: '11 · Descripción', cita: 'purin-6-one, monohydrate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con Entecavir monohidratado como ingrediente activo.',
    usos: 'Infección crónica por hepatitis B en los pacientes que cumplen los criterios de la etiqueta.',
    actua: 'Su trifosfato inhibe la polimerasa del virus de la hepatitis B e interfiere en la copia de su material genético.',
    recorrido: 'En personas sanas se observó un máximo plasmático en 0,5 a 1,5 horas. El comprimido tuvo una biodisponibilidad similar a la solución. La eliminación es principalmente renal. En equilibrio se recuperó intacto en orina el 62–73 % de la dosis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'BARACLUDE se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'BARACLUDE se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-entecavir',
            sec: '3 · Forma farmacéutica',
            cita: 'mg film-coated tablets are white to off-white,',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En personas sanas se observó un máximo plasmático en 0,5 a 1,5 horas. El comprimido tuvo una biodisponibilidad similar a la solución.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En personas sanas se observó un máximo plasmático en 0,5 a 1,5 horas. El comprimido tuvo una biodisponibilidad similar a la solución.',
          ref: {
            f: 'dailymed-entecavir',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations occurred between 0.5 and 1.5 hours',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Aproximadamente el 13 % se unió a proteínas séricas humanas en ensayos in vitro.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Aproximadamente el 13 % se unió a proteínas séricas humanas en ensayos in vitro.',
          ref: {
            f: 'dailymed-entecavir',
            sec: '12.3 · Farmacocinética',
            cita: 'human serum proteins in vitro was approximately 13%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Polimerasa del virus de la hepatitis B',
        efecto: 'Su trifosfato inhibe la polimerasa del virus de la hepatitis B e interfiere en la copia de su material genético.',
        lugar: [ 'higado' ],
        datos: [
          {
            t: 'Su trifosfato inhibe la polimerasa del virus de la hepatitis B e interfiere en la copia de su material genético.',
            ref: { f: 'dailymed-entecavir', sec: '12.1 · Mecanismo', cita: 'activities of the HBV reverse transcriptase', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se encontraron pequeñas cantidades de conjugados glucurónido y sulfato. No se detectaron metabolitos oxidativos ni acetilados.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se encontraron pequeñas cantidades de conjugados glucurónido y sulfato. No se detectaron metabolitos oxidativos ni acetilados.',
          ref: {
            f: 'dailymed-entecavir',
            sec: '12.3 · Farmacocinética',
            cita: 'no oxidative or acetylated metabolites were observed',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La eliminación es principalmente renal. En equilibrio se recuperó intacto en orina el 62–73 % de la dosis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La eliminación es principalmente renal. En equilibrio se recuperó intacto en orina el 62–73 % de la dosis.',
          ref: {
            f: 'dailymed-entecavir',
            sec: '12.3 · Farmacocinética',
            cita: 'urinary recovery of unchanged drug at steady state',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-entecavir', '046e61c9-9298-4b2e-b76e-b26b81fecd20', 'BARACLUDE (ENTECAVIR) TABLET, FILM COATED BARACLUDE (ENTECAVIR) SOLUTION', 'BARACLUDE', '42', '2025-12-22', '2026-11-10'),
    rengPubchem(135398508, 'entecavir', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
