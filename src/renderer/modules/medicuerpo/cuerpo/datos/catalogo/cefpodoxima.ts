import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cefpodoxima',
    nombre: 'Cefpodoxima proxetilo',
    clase: 'Cefalosporina oral (profármaco)',
    sinonimos: [ 'cefpodoxime proxetil' ],
    formula: 'C21H27N5O9S2',
    masaMolar: 557.6,
    smiles: 'CC(C)OC(=O)OC(C)OC(=O)C1=C(CS[C@H]2N1C(=O)[C@H]2NC(=O)/C(=N\\OC)/C3=CSC(=N3)N)COC',
    inchikey: 'LTINZAODLRIQIX-FBXRGJNPSA-N',
    cid: 6526396,
    iupac: '1-propan-2-yloxycarbonyloxyethyl (6R,7R)-7-[[(2Z)-2-(2-amino-1,3-thiazol-4-yl)-2-methoxyiminoacetyl]amino]-3-(methoxymethyl)-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cefpodoxima-oral',
      producto: 'Cefpodoxime Proxetil · comprimido recubierto',
      titular: 'ASCEND LABORATORIES, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg',
      excipientes: [
        'carboxymethylcellulose calcium',
        'silicon dioxide',
        'crospovidone, unspecified',
        'fd&c yellow no. 6',
        'hydroxypropyl cellulose, unspecified',
        'hypromelloses',
        'ferric oxide red',
        'lactose monohydrate',
        'polyethylene glycol, unspecified',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'titanium dioxide'
      ],
      usos: {
        t: 'Infecciones leves o moderadas por bacterias susceptibles en las localizaciones descritas por la etiqueta.',
        ref: {
          f: 'dailymed-cefpodoxima',
          sec: '1 · Indicaciones',
          cita: 'mild to moderate infections caused by susceptible strains',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cefpodoxima'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con cefpodoxima proxetilo como ingrediente activo.',
    usos: 'Infecciones leves o moderadas por bacterias susceptibles en las localizaciones descritas por la etiqueta.',
    actua: 'La cefpodoxima formada a partir del profármaco inhibe la síntesis de la pared celular bacteriana.',
    recorrido: 'El comprimido recubierto produjo mayor exposición y un pico más alto con alimentos que en ayunas. Entre el 29 % y el 33 % se recuperó como cefpodoxima intacta en la orina durante las primeras 12 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Cefpodoxime Proxetil se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Cefpodoxime Proxetil se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-cefpodoxima',
            sec: '11 · Descripción',
            cita: 'Each film-coated tablet contains the following inactive',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El comprimido recubierto produjo mayor exposición y un pico más alto con alimentos que en ayunas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El comprimido recubierto produjo mayor exposición y un pico más alto con alimentos que en ayunas.',
          ref: {
            f: 'dailymed-cefpodoxima',
            sec: '12 · Farmacología clínica',
            cita: 'increased when film coated tablets were administered with food',
            codigo: '34090-1'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En el estudio de tejido amigdalino, se alcanzó el equilibrio con el plasma en cuatro horas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En el estudio de tejido amigdalino, se alcanzó el equilibrio con el plasma en cuatro horas.',
          ref: {
            f: 'dailymed-cefpodoxima',
            sec: '12 · Farmacología clínica',
            cita: 'Equilibrium was achieved between plasma and tonsil tissue',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de pared celular bacteriana',
        efecto: 'La cefpodoxima formada a partir del profármaco inhibe la síntesis de la pared celular bacteriana.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'La cefpodoxima formada a partir del profármaco inhibe la síntesis de la pared celular bacteriana.',
            ref: {
              f: 'dailymed-cefpodoxima',
              sec: '12 · Farmacología clínica',
              cita: 'inhibition of bacterial cell wall synthesis',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'La forma proxetilo se desesterifica a cefpodoxima activa durante la incorporación al organismo. La cefpodoxima se transforma poco después.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'La forma proxetilo se desesterifica a cefpodoxima activa durante la incorporación al organismo. La cefpodoxima se transforma poco después.',
          ref: {
            f: 'dailymed-cefpodoxima',
            sec: '12 · Farmacología clínica',
            cita: 'de-esterified to its active metabolite',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Entre el 29 % y el 33 % se recuperó como cefpodoxima intacta en la orina durante las primeras 12 horas.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Entre el 29 % y el 33 % se recuperó como cefpodoxima intacta en la orina durante las primeras 12 horas.',
          ref: {
            f: 'dailymed-cefpodoxima',
            sec: '12 · Farmacología clínica',
            cita: 'excreted unchanged in the urine in 12 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-cefpodoxima', 'ce5646cb-a450-4c2c-8499-6ecf71b12b0e', 'CEFPODOXIME PROXETIL TABLET, FILM COATED', 'Cefpodoxime Proxetil', '3', '2026-10-26', '2026-11-10'),
    rengPubchem(6526396, 'cefpodoxime proxetil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
