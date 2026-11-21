import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'felodipino',
    nombre: 'Felodipino',
    clase: 'Bloqueador de canales de calcio dihidropiridínico',
    sinonimos: [ 'felodipine' ],
    formula: 'C18H19Cl2NO4',
    masaMolar: 384.2,
    smiles: 'CCOC(=O)C1=C(NC(=C(C1C2=C(C(=CC=C2)Cl)Cl)C(=O)OC)C)C',
    inchikey: 'RZTAMFZIAATZDJ-UHFFFAOYSA-N',
    cid: 3333,
    iupac: '5-O-ethyl 3-O-methyl 4-(2,3-dichlorophenyl)-2,6-dimethyl-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'felodipino-oral',
      producto: 'FELODIPINE · comprimido de liberación prolongada',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '2.5 mg',
      excipientes: [
        'polyoxyl 40 hydrogenated castor oil',
        'magnesium aluminum silicate',
        'hypromellose 2208 (15000 mpa.s)',
        'lactose monohydrate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'sodium stearyl fumarate',
        'hypromellose 2910 (5 mpa.s)',
        'titanium dioxide',
        'polyethylene glycol 400',
        'ferric oxide yellow',
        'd&c yellow no. 10'
      ],
      usos: {
        t: 'Hipertensión arterial según la etiqueta de los comprimidos de liberación prolongada.',
        ref: { f: 'dailymed-felodipino', sec: '1 · Indicaciones', cita: 'indicated for the treatment of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-felodipino'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada oral con felodipino como ingrediente activo.',
    usos: 'Hipertensión arterial según la etiqueta de los comprimidos de liberación prolongada.',
    actua: 'Bloquea corrientes de calcio dependientes del voltaje en músculo liso vascular, favoreciendo la vasodilatación.',
    recorrido: 'Se absorbe casi por completo, pero la biodisponibilidad sistémica ronda el 20 % por el primer paso. En los estudios oral e intravenoso con radiomarcador, se recuperó cerca del 70 % en orina y el 10 % en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'FELODIPINE se presenta como comprimido de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'FELODIPINE se presenta como comprimido de liberación prolongada para administración oral.',
          ref: { f: 'dailymed-felodipino', sec: '11 · Descripción', cita: 'available as tablets containing 2.5 mg, 5', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Se absorbe casi por completo, pero la biodisponibilidad sistémica ronda el 20 % por el primer paso.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Se absorbe casi por completo, pero la biodisponibilidad sistémica ronda el 20 % por el primer paso.',
          ref: {
            f: 'dailymed-felodipino',
            sec: '12 · Farmacología clínica',
            cita: 'systemic bioavailability of felodipine is approximately 20%',
            codigo: '34090-1'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Más del 99 % se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Más del 99 % se une a proteínas plasmáticas.',
          ref: {
            f: 'dailymed-felodipino',
            sec: '12 · Farmacología clínica',
            cita: 'greater than 99% bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio del músculo liso vascular',
        efecto: 'Bloquea corrientes de calcio dependientes del voltaje en músculo liso vascular, favoreciendo la vasodilatación.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Bloquea corrientes de calcio dependientes del voltaje en músculo liso vascular, favoreciendo la vasodilatación.',
            ref: {
              f: 'dailymed-felodipino',
              sec: '12 · Farmacología clínica',
              cita: 'blocks voltage-dependent Ca++ currents in vascular smooth muscle',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Experimenta un metabolismo extenso antes de llegar a la circulación general.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Experimenta un metabolismo extenso antes de llegar a la circulación general.',
          ref: {
            f: 'dailymed-felodipino',
            sec: '12 · Farmacología clínica',
            cita: 'undergoes extensive first-pass metabolism',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'rinones', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En los estudios oral e intravenoso con radiomarcador, se recuperó cerca del 70 % en orina y el 10 % en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En los estudios oral e intravenoso con radiomarcador, se recuperó cerca del 70 % en orina y el 10 % en heces.',
          ref: {
            f: 'dailymed-felodipino',
            sec: '12 · Farmacología clínica',
            cita: 'about 70% of the dose of radioactivity was recovered',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-felodipino', '0bef7cf2-012b-4804-ac93-0a8b333035db', 'FELODIPINE TABLET, EXTENDED RELEASE', 'FELODIPINE', '8', '2026-08-17', '2026-11-10'),
    rengPubchem(3333, 'felodipine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
