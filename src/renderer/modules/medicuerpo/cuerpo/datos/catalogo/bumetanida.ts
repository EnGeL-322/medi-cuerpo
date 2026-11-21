import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bumetanida',
    nombre: 'Bumetanida',
    clase: 'Diurético de asa',
    sinonimos: [ 'bumetanide' ],
    formula: 'C17H20N2O5S',
    masaMolar: 364.4,
    smiles: 'CCCCNC1=C(C(=CC(=C1)C(=O)O)S(=O)(=O)N)OC2=CC=CC=C2',
    inchikey: 'MAEIEVLCKWDQJH-UHFFFAOYSA-N',
    cid: 2471,
    iupac: '3-(butylamino)-4-phenoxy-5-sulfamoylbenzoic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'bumetanida-oral',
      producto: 'Bumetanide · comprimido',
      titular: 'SANDOZ INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'magnesium stearate',
        'starch, corn',
        'talc'
      ],
      usos: {
        t: 'Edema asociado a insuficiencia cardíaca y a determinadas enfermedades hepáticas o renales.',
        ref: {
          f: 'dailymed-bumetanida',
          sec: '1 · Indicaciones',
          cita: 'treatment of edema associated with congestive heart failure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bumetanida'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con bumetanida como ingrediente activo.',
    usos: 'Edema asociado a insuficiencia cardíaca y a determinadas enfermedades hepáticas o renales.',
    actua: 'Inhibe la reabsorción de sodio en la rama ascendente del asa de Henle y aumenta la diuresis.',
    recorrido: 'En el estudio oral, la diuresis comenzó a los 30–60 minutos. Ese dato mide el efecto, no el tiempo de absorción. En un estudio oral radiomarcado, el 81 % de la radiactividad se recuperó en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Bumetanide se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Bumetanide se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-bumetanida',
            sec: '11 · Descripción',
            cita: 'available as tablets for oral administration contains',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral, la diuresis comenzó a los 30–60 minutos. Ese dato mide el efecto, no el tiempo de absorción.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio oral, la diuresis comenzó a los 30–60 minutos. Ese dato mide el efecto, no el tiempo de absorción.',
          ref: {
            f: 'dailymed-bumetanida',
            sec: '12 · Farmacología clínica',
            cita: 'onset of diuresis occurs in 30 to 60 minutes',
            codigo: '34090-1'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Su unión a proteínas plasmáticas se sitúa entre el 94 % y el 96 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Su unión a proteínas plasmáticas se sitúa entre el 94 % y el 96 %.',
          ref: {
            f: 'dailymed-bumetanida',
            sec: '12 · Farmacología clínica',
            cita: 'Plasma protein-binding is in the range of 94%',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Reabsorción de sodio en el asa de Henle',
        efecto: 'Inhibe la reabsorción de sodio en la rama ascendente del asa de Henle y aumenta la diuresis.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Inhibe la reabsorción de sodio en la rama ascendente del asa de Henle y aumenta la diuresis.',
            ref: {
              f: 'dailymed-bumetanida',
              sec: '12 · Farmacología clínica',
              cita: 'inhibits sodium reabsorption in the ascending limb',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se identificaron metabolitos formados por oxidación de la cadena N-butilo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se identificaron metabolitos formados por oxidación de la cadena N-butilo.',
          ref: { f: 'dailymed-bumetanida', sec: '12 · Farmacología clínica', cita: 'oxidation of the N-butyl side chain', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado, el 81 % de la radiactividad se recuperó en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado, el 81 % de la radiactividad se recuperó en orina.',
          ref: {
            f: 'dailymed-bumetanida',
            sec: '12 · Farmacología clínica',
            cita: '81% of the administered radioactivity was excreted',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-bumetanida', '8914d8bf-61b7-4cd2-a8ef-7e1c5df37828', 'BUMETANIDE TABLET', 'Bumetanide', '2', '2026-11-09', '2026-11-10'),
    rengPubchem(2471, 'bumetanide', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
