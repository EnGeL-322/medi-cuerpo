import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'torasemida',
    nombre: 'Torasemida',
    clase: 'Diurético de asa',
    sinonimos: [ 'torsemide' ],
    formula: 'C16H20N4O3S',
    masaMolar: 348.4,
    smiles: 'CC1=CC(=CC=C1)NC2=C(C=NC=C2)S(=O)(=O)NC(=O)NC(C)C',
    inchikey: 'NGBFQHCMQULJNZ-UHFFFAOYSA-N',
    cid: 41781,
    iupac: '1-[[4-(3-methylanilino)-3-pyridinyl]sulfonyl]-3-propan-2-ylurea',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'torasemida-oral',
      producto: 'Torsemide · comprimido',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [ 'silicon dioxide', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'crospovidone, unspecified' ],
      usos: {
        t: 'Edema asociado a insuficiencia cardíaca y a ciertas enfermedades renales o hepáticas, e hipertensión.',
        ref: { f: 'dailymed-torasemida', sec: '1 · Indicaciones', cita: 'edema associated with heart failure', codigo: '34067-9' }
      },
      fuente: 'dailymed-torasemida'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con torasemida como ingrediente activo.',
    usos: 'Edema asociado a insuficiencia cardíaca y a ciertas enfermedades renales o hepáticas, e hipertensión.',
    actua: 'Actúa en la rama ascendente gruesa del asa de Henle y aumenta la excreción de sodio, cloruro y agua.',
    recorrido: 'El comprimido tiene una biodisponibilidad cercana al 80 %. El pico sérico llega aproximadamente en una hora. El riñón elimina parte mediante secreción tubular activa. En orina se recuperaron tanto torasemida como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Torsemide se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Torsemide se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-torasemida',
            sec: '11 · Descripción',
            cita: 'powder. The tablet for oral administration contains',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El comprimido tiene una biodisponibilidad cercana al 80 %. El pico sérico llega aproximadamente en una hora.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El comprimido tiene una biodisponibilidad cercana al 80 %. El pico sérico llega aproximadamente en una hora.',
          ref: {
            f: 'dailymed-torasemida',
            sec: '12 · Farmacología clínica',
            cita: 'bioavailability of torsemide tablets is approximately 80%',
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
            f: 'dailymed-torasemida',
            sec: '12 · Farmacología clínica',
            cita: 'bound to plasma protein (greater than 99%)',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Transporte de sal en el asa de Henle',
        efecto: 'Actúa en la rama ascendente gruesa del asa de Henle y aumenta la excreción de sodio, cloruro y agua.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Actúa en la rama ascendente gruesa del asa de Henle y aumenta la excreción de sodio, cloruro y agua.',
            ref: {
              f: 'dailymed-torasemida',
              sec: '12 · Farmacología clínica',
              cita: 'increases the urinary excretion of sodium, chloride, and water',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma principalmente en el hígado mediante CYP2C9.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente en el hígado mediante CYP2C9.',
          ref: {
            f: 'dailymed-torasemida',
            sec: '12 · Farmacología clínica',
            cita: 'metabolized by the hepatic cytochrome CYP2C9',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El riñón elimina parte mediante secreción tubular activa. En orina se recuperaron tanto torasemida como metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El riñón elimina parte mediante secreción tubular activa. En orina se recuperaron tanto torasemida como metabolitos.',
          ref: {
            f: 'dailymed-torasemida',
            sec: '12 · Farmacología clínica',
            cita: 'active secretion of the drug by the proximal tubules',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-torasemida', 'a3d68763-95e0-4ad6-89c2-c4b1c0b43948', 'TORSEMIDE TABLET', 'Torsemide', '2', '2025-12-12', '2026-11-10'),
    rengPubchem(41781, 'torsemide', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
