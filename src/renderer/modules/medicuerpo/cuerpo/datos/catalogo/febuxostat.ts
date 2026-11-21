import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'febuxostat',
    nombre: 'Febuxostat',
    clase: 'Inhibidor de la xantina oxidasa',
    sinonimos: [ 'febuxostat' ],
    formula: 'C16H16N2O3S',
    masaMolar: 316.4,
    smiles: 'CC1=C(SC(=N1)C2=CC(=C(C=C2)OCC(C)C)C#N)C(=O)O',
    inchikey: 'BQSJTQLCZDPROO-UHFFFAOYSA-N',
    cid: 134018,
    iupac: '2-[3-cyano-4-(2-methylpropoxy)phenyl]-4-methyl-1,3-thiazole-5-carboxylic acid',
    area: 'Inflamación'
  },
  presentaciones: [
    {
      id: 'febuxostat-oral',
      producto: 'ULORIC · comprimido',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (70000 wamw)',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'talc',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Control de la hiperuricemia crónica en determinados adultos con gota, con las condiciones descritas en la etiqueta.',
        ref: { f: 'dailymed-febuxostat', sec: '1 · Indicaciones', cita: 'chronic management of hyperuricemia', codigo: '34067-9' }
      },
      fuente: 'dailymed-febuxostat'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con febuxostat como ingrediente activo.',
    usos: 'Control de la hiperuricemia crónica en determinados adultos con gota, con las condiciones descritas en la etiqueta.',
    actua: 'Inhibe la xantina oxidasa y reduce la formación de ácido úrico, por lo que baja su concentración en sangre.',
    recorrido: 'En los estudios orales el máximo plasmático llegó entre una y una hora y media. La biodisponibilidad absoluta no se midió. La eliminación combina vías hepática y renal. En el estudio oral radiomarcado se recuperó cerca del 49 % de la dosis en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'ULORIC se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'ULORIC se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-febuxostat', sec: '11 · Descripción', cita: '208°C. ULORIC tablets for oral use contain', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En los estudios orales el máximo plasmático llegó entre una y una hora y media. La biodisponibilidad absoluta no se midió.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En los estudios orales el máximo plasmático llegó entre una y una hora y media. La biodisponibilidad absoluta no se midió.',
          ref: { f: 'dailymed-febuxostat', sec: '12.3 · Farmacocinética', cita: 'between 1 and 1.5 hours postdose', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une a proteínas plasmáticas en aproximadamente el 99,2 %, principalmente a albúmina.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une a proteínas plasmáticas en aproximadamente el 99,2 %, principalmente a albúmina.',
          ref: {
            f: 'dailymed-febuxostat',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 99.2% (primarily to albumin)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Xantina oxidasa',
        efecto: 'Inhibe la xantina oxidasa y reduce la formación de ácido úrico, por lo que baja su concentración en sangre.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la xantina oxidasa y reduce la formación de ácido úrico, por lo que baja su concentración en sangre.',
            ref: { f: 'dailymed-febuxostat', sec: '12.1 · Mecanismo', cita: 'by decreasing serum uric acid', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Experimenta glucuronidación y oxidación. Varios metabolitos hidroxilados tienen actividad y circulan en concentraciones mucho menores.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Experimenta glucuronidación y oxidación. Varios metabolitos hidroxilados tienen actividad y circulan en concentraciones mucho menores.',
          ref: {
            f: 'dailymed-febuxostat',
            sec: '12.3 · Farmacocinética',
            cita: 'four pharmacologically active hydroxy metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La eliminación combina vías hepática y renal. En el estudio oral radiomarcado se recuperó cerca del 49 % de la dosis en la orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La eliminación combina vías hepática y renal. En el estudio oral radiomarcado se recuperó cerca del 49 % de la dosis en la orina.',
          ref: {
            f: 'dailymed-febuxostat',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 49% of the dose was recovered',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-febuxostat', '54de10ef-fe5f-4930-b91d-6bbb04c664bd', 'ULORIC (FEBUXOSTAT) TABLET', 'ULORIC', '17', '2025-12-25', '2026-11-10'),
    rengPubchem(134018, 'febuxostat', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
