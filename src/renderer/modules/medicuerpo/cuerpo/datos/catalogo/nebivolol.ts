import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nebivolol',
    nombre: 'Nebivolol',
    clase: 'Betabloqueante',
    sinonimos: [ 'nebivolol' ],
    formula: 'C22H25F2NO4',
    masaMolar: 405.4,
    smiles: 'C1CC2=C(C=CC(=C2)F)OC1C(CNCC(C3CCC4=C(O3)C=CC(=C4)F)O)O',
    inchikey: 'KOHIRBRYDXPAMZ-UHFFFAOYSA-N',
    cid: 71301,
    iupac: '1-(6-fluoro-3,4-dihydro-2H-chromen-2-yl)-2-[[2-(6-fluoro-3,4-dihydro-2H-chromen-2-yl)-2-hydroxyethyl]amino]ethanol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nebivolol-oral',
      producto: 'Bystolic · comprimido',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'd&c red no. 27',
        'fd&c blue no. 2',
        'fd&c yellow no. 6',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'starch, corn',
        'polysorbate 80',
        'sodium lauryl sulfate'
      ],
      usos: {
        t: 'Hipertensión arterial según la etiqueta.',
        ref: { f: 'dailymed-nebivolol', sec: '1 · Indicaciones', cita: 'indicated for the treatment of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-nebivolol',
      sal: {
        nombre: 'clorhidrato de nebivolol',
        ref: { f: 'dailymed-nebivolol', sec: '3 · Forma farmacéutica', cita: 'nebivolol hydrochloride', codigo: '43678-2' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con clorhidrato de nebivolol como ingrediente activo.',
    usos: 'Hipertensión arterial según la etiqueta.',
    actua: 'La etiqueta describe bloqueo beta y propone que contribuyen la reducción de la frecuencia cardíaca y la vasodilatación.',
    recorrido: 'El pico plasmático medio llega entre 1,5 y 4 horas. La biodisponibilidad absoluta no se determinó. El estudio oral radiomarcado recuperó metabolitos en orina y heces. El reparto varió según la capacidad de metabolizarlo.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Bystolic se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Bystolic se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-nebivolol',
            sec: '3 · Forma farmacéutica',
            cita: 'available as tablets for oral administration containing',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El pico plasmático medio llega entre 1,5 y 4 horas. La biodisponibilidad absoluta no se determinó.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El pico plasmático medio llega entre 1,5 y 4 horas. La biodisponibilidad absoluta no se determinó.',
          ref: { f: 'dailymed-nebivolol', sec: '12.3 · Farmacocinética', cita: 'approximately 1.5 to 4 hours post-dosing', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En plasma humano in vitro se une en torno al 98 % a proteínas, sobre todo a albúmina.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En plasma humano in vitro se une en torno al 98 % a proteínas, sobre todo a albúmina.',
          ref: { f: 'dailymed-nebivolol', sec: '12.3 · Farmacocinética', cita: 'approximately 98%, mostly to albumin', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'La etiqueta describe bloqueo beta y propone que contribuyen la reducción de la frecuencia cardíaca y la vasodilatación.',
        lugar: [ 'corazon', 'vasos' ],
        datos: [
          {
            t: 'La etiqueta describe bloqueo beta y propone que contribuyen la reducción de la frecuencia cardíaca y la vasodilatación.',
            ref: { f: 'dailymed-nebivolol', sec: '12.1 · Mecanismo', cita: 'decreased peripheral vascular resistance', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Sufre glucuronidación y oxidación. Las variantes de CYP2D6 cambian la exposición al isómero activo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Sufre glucuronidación y oxidación. Las variantes de CYP2D6 cambian la exposición al isómero activo.',
          ref: {
            f: 'dailymed-nebivolol',
            sec: '12.3 · Farmacocinética',
            cita: 'including glucuronidation and hydroxylation by CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El estudio oral radiomarcado recuperó metabolitos en orina y heces. El reparto varió según la capacidad de metabolizarlo.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El estudio oral radiomarcado recuperó metabolitos en orina y heces. El reparto varió según la capacidad de metabolizarlo.',
          ref: {
            f: 'dailymed-nebivolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Essentially all nebivolol was excreted as multiple oxidative metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-nebivolol', '8b8ad213-1dc8-454e-a524-075685c0e1a8', 'BYSTOLIC (NEBIVOLOL HYDROCHLORIDE) TABLET', 'Bystolic', '31', '2025-12-31', '2026-11-10'),
    rengPubchem(71301, 'nebivolol', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
