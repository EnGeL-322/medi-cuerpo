import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alogliptina',
    nombre: 'Alogliptina',
    clase: 'Inhibidor de DPP-4',
    sinonimos: [ 'alogliptin' ],
    formula: 'C18H21N5O2',
    masaMolar: 339.4,
    smiles: 'CN1C(=O)C=C(N(C1=O)CC2=CC=CC=C2C#N)N3CCC[C@H](C3)N',
    inchikey: 'ZSBOMTDTBDDKMP-OAHLLOKOSA-N',
    cid: 11450633,
    iupac: '2-[[6-[(3R)-3-aminopiperidin-1-yl]-3-methyl-2,4-dioxopyrimidin-1-yl]methyl]benzonitrile',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'alogliptina-oral',
      producto: 'Nesina · comprimido recubierto',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '6.25 mg',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (90000 wamw)',
        'croscarmellose sodium',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'ferric oxide red',
        'polyethylene glycol 8000',
        'shellac',
        'ferrosoferric oxide',
        'butyl alcohol',
        'alcohol'
      ],
      usos: {
        t: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
        ref: { f: 'dailymed-alogliptina', sec: '1 · Indicaciones', cita: 'adults with type 2 diabetes mellitus', codigo: '34067-9' }
      },
      fuente: 'dailymed-alogliptina',
      sal: {
        nombre: 'benzoato de alogliptina',
        ref: { f: 'dailymed-alogliptina', sec: '11 · Descripción', cita: 'Alogliptin benzoate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con benzoato de alogliptina como ingrediente activo.',
    usos: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
    actua: 'Inhibe DPP-4 y prolonga la señal de las incretinas, que favorecen la liberación de insulina en función de la glucosa.',
    recorrido: 'La biodisponibilidad absoluta del comprimido es cercana al 100 %. Entre el 60 % y el 71 % de la dosis sale por la orina como alogliptina intacta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Nesina se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Nesina se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-alogliptina', sec: '3 · Forma farmacéutica', cita: '25 mg tablets are light red, oval,', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'La biodisponibilidad absoluta del comprimido es cercana al 100 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta del comprimido es cercana al 100 %.',
          ref: {
            f: 'dailymed-alogliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'absolute bioavailability of NESINA is approximately 100%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Cerca del 20 % se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Cerca del 20 % se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-alogliptina', sec: '12.3 · Farmacocinética', cita: '20% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Dipeptidil peptidasa 4',
        efecto: 'Inhibe DPP-4 y prolonga la señal de las incretinas, que favorecen la liberación de insulina en función de la glucosa.',
        lugar: [ 'pancreas' ],
        datos: [
          {
            t: 'Inhibe DPP-4 y prolonga la señal de las incretinas, que favorecen la liberación de insulina en función de la glucosa.',
            ref: {
              f: 'dailymed-alogliptina',
              sec: '12.1 · Mecanismo',
              cita: 'inactivated by the DPP-4 enzyme within minutes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se transforma poco. Se detectaron dos metabolitos minoritarios y uno conserva actividad contra DPP-4.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma poco. Se detectaron dos metabolitos minoritarios y uno conserva actividad contra DPP-4.',
          ref: { f: 'dailymed-alogliptina', sec: '12.3 · Farmacocinética', cita: 'M-I is an active metabolite', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Entre el 60 % y el 71 % de la dosis sale por la orina como alogliptina intacta.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Entre el 60 % y el 71 % de la dosis sale por la orina como alogliptina intacta.',
          ref: { f: 'dailymed-alogliptina', sec: '12.3 · Farmacocinética', cita: 'excreted as unchanged drug in the urine', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-alogliptina', 'a3768c7e-aa4c-44d3-bc53-43bb7346c0b0', 'NESINA (ALOGLIPTIN) TABLET, FILM COATED', 'Nesina', '22', '2025-03-24', '2026-11-10'),
    rengPubchem(11450633, 'alogliptin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
