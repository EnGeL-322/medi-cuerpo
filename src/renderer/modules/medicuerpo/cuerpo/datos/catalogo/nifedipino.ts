import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nifedipino',
    nombre: 'Nifedipino',
    clase: 'Bloqueador de canales de calcio dihidropiridínico',
    sinonimos: [ 'nifedipine' ],
    formula: 'C17H18N2O6',
    masaMolar: 346.3,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OC)C2=CC=CC=C2[N+](=O)[O-])C(=O)OC',
    inchikey: 'HYIMSNHJOBLJNT-UHFFFAOYSA-N',
    cid: 4485,
    iupac: 'dimethyl 2,6-dimethyl-4-(2-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nifedipino-oral',
      producto: 'Procardia XL · comprimido de liberación prolongada',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '30 mg',
      excipientes: [
        'cellulose acetate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose, unspecified',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'ferric oxide red',
        'sodium chloride',
        'titanium dioxide'
      ],
      usos: {
        t: 'La etiqueta del comprimido de liberación prolongada incluye determinados tipos de angina e hipertensión.',
        ref: { f: 'dailymed-nifedipino', sec: '1 · Indicaciones', cita: 'management of vasospastic angina', codigo: '34067-9' }
      },
      fuente: 'dailymed-nifedipino'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada oral con nifedipino como ingrediente activo.',
    usos: 'La etiqueta del comprimido de liberación prolongada incluye determinados tipos de angina e hipertensión.',
    actua: 'Reduce la entrada de calcio y dilata las arterias coronarias. El mecanismo completo del alivio de la angina no está establecido.',
    recorrido: 'El comprimido XL tuvo el 86 % de la biodisponibilidad de la cápsula comparada en equilibrio. Entre el 60 % y el 80 % sale por orina como metabolitos. En orina apenas se detecta fármaco sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Procardia XL se presenta como comprimido de liberación prolongada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Procardia XL se presenta como comprimido de liberación prolongada para administración oral.',
          ref: { f: 'dailymed-nifedipino', sec: '11 · Descripción', cita: 'Therapeutic System) Tablet is formulated as a', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El comprimido XL tuvo el 86 % de la biodisponibilidad de la cápsula comparada en equilibrio.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El comprimido XL tuvo el 86 % de la biodisponibilidad de la cápsula comparada en equilibrio.',
          ref: { f: 'dailymed-nifedipino', sec: '12.3 · Farmacocinética', cita: '86% relative to PROCARDIA capsules', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'La unión a proteínas séricas es alta, entre el 92 % y el 98 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'La unión a proteínas séricas es alta, entre el 92 % y el 98 %.',
          ref: {
            f: 'dailymed-nifedipino',
            sec: '12.3 · Farmacocinética',
            cita: 'serum protein binding of nifedipine is high',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio',
        efecto: 'Reduce la entrada de calcio y dilata las arterias coronarias. El mecanismo completo del alivio de la angina no está establecido.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Reduce la entrada de calcio y dilata las arterias coronarias. El mecanismo completo del alivio de la angina no está establecido.',
            ref: { f: 'dailymed-nifedipino', sec: '12.1 · Mecanismo', cita: 'Nifedipine dilates the main coronary arteries', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma extensamente en metabolitos inactivos y solubles en agua.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente en metabolitos inactivos y solubles en agua.',
          ref: {
            f: 'dailymed-nifedipino',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized to highly water-soluble, inactive metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Entre el 60 % y el 80 % sale por orina como metabolitos. En orina apenas se detecta fármaco sin cambios.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Entre el 60 % y el 80 % sale por orina como metabolitos. En orina apenas se detecta fármaco sin cambios.',
          ref: {
            f: 'dailymed-nifedipino',
            sec: '12.3 · Farmacocinética',
            cita: '60 to 80% of the dose excreted in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-nifedipino', '8ebcb33c-f43b-4b36-9f94-9774b2a59e06', 'PROCARDIA XL (NIFEDIPINE) TABLET, FILM COATED, EXTENDED RELEASE', 'Procardia XL', '20', '2026-09-24', '2026-11-10'),
    rengPubchem(4485, 'nifedipine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
