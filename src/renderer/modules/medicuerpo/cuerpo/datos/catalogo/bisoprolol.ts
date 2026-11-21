import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bisoprolol',
    nombre: 'Bisoprolol',
    clase: 'Betabloqueante con preferencia por beta-1',
    sinonimos: [ 'bisoprolol' ],
    formula: 'C18H31NO4',
    masaMolar: 325.4,
    smiles: 'CC(C)NCC(COC1=CC=C(C=C1)COCCOC(C)C)O',
    inchikey: 'VHYCDWMUTMEGQY-UHFFFAOYSA-N',
    cid: 2405,
    iupac: '1-(propan-2-ylamino)-3-[4-(2-propan-2-yloxyethoxymethyl)phenoxy]propan-2-ol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'bisoprolol-oral',
      producto: 'BISOPROLOL FUMARATE · comprimido recubierto',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'cellulose, microcrystalline',
        'butylated hydroxyanisole',
        'calcium phosphate, dibasic, anhydrous',
        'crospovidone',
        'silicon dioxide',
        'magnesium stearate',
        'hypromelloses',
        'hydroxypropyl cellulose',
        'titanium dioxide',
        'fd&c red no. 40',
        'fd&c blue no. 2',
        'talc'
      ],
      usos: {
        t: 'Control de la hipertensión según la etiqueta.',
        ref: { f: 'dailymed-bisoprolol', sec: '1 · Indicaciones', cita: 'indicated in the management of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-bisoprolol',
      sal: {
        nombre: 'fumarato de bisoprolol',
        ref: { f: 'dailymed-bisoprolol', sec: '11 · Descripción', cita: 'Bisoprolol fumarate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con fumarato de bisoprolol como ingrediente activo.',
    usos: 'Control de la hipertensión según la etiqueta.',
    actua: 'Bloquea preferentemente receptores beta-1 adrenérgicos del corazón. La selectividad no es absoluta.',
    recorrido: 'En el estudio del comprimido oral la biodisponibilidad absoluta fue de alrededor del 80 %. Alrededor de la mitad sale intacta por la orina. La fracción restante se elimina como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'BISOPROLOL FUMARATE se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'BISOPROLOL FUMARATE se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-bisoprolol', sec: '11 · Descripción', cita: '10 mg tablets for oral administration. Inactive', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio del comprimido oral la biodisponibilidad absoluta fue de alrededor del 80 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio del comprimido oral la biodisponibilidad absoluta fue de alrededor del 80 %.',
          ref: {
            f: 'dailymed-bisoprolol',
            sec: '12 · Farmacología clínica',
            cita: 'oral dose of bisoprolol fumarate is about 80%',
            codigo: '34090-1'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une en torno al 30 % a proteínas séricas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une en torno al 30 % a proteínas séricas.',
          ref: {
            f: 'dailymed-bisoprolol',
            sec: '12 · Farmacología clínica',
            cita: 'Binding to serum proteins is approximately 30%',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico beta-1',
        efecto: 'Bloquea preferentemente receptores beta-1 adrenérgicos del corazón. La selectividad no es absoluta.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Bloquea preferentemente receptores beta-1 adrenérgicos del corazón. La selectividad no es absoluta.',
            ref: {
              f: 'dailymed-bisoprolol',
              sec: '12 · Farmacología clínica',
              cita: '-selective (cardioselective) adrenoceptor blocking agent',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El primer paso metaboliza cerca del 20 %. La etiqueta describe metabolitos inactivos.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El primer paso metaboliza cerca del 20 %. La etiqueta describe metabolitos inactivos.',
          ref: {
            f: 'dailymed-bisoprolol',
            sec: '12 · Farmacología clínica',
            cita: 'The first pass metabolism of bisoprolol fumarate',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Alrededor de la mitad sale intacta por la orina. La fracción restante se elimina como metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Alrededor de la mitad sale intacta por la orina. La fracción restante se elimina como metabolitos.',
          ref: {
            f: 'dailymed-bisoprolol',
            sec: '12 · Farmacología clínica',
            cita: '50% of the dose appearing unchanged in the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-bisoprolol', '7556f457-c4d3-49d6-b383-0ade6d489091', 'BISOPROLOL FUMARATE TABLET, FILM COATED', 'BISOPROLOL FUMARATE', '4', '2026-10-19', '2026-11-10'),
    rengPubchem(2405, 'bisoprolol', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
