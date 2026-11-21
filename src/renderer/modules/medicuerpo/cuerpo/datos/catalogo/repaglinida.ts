import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'repaglinida',
    nombre: 'Repaglinida',
    clase: 'Secretagogo de insulina',
    sinonimos: [ 'repaglinide' ],
    formula: 'C27H36N2O4',
    masaMolar: 452.6,
    smiles: 'CCOC1=C(C=CC(=C1)CC(=O)N[C@@H](CC(C)C)C2=CC=CC=C2N3CCCCC3)C(=O)O',
    inchikey: 'FAEKWTJYAYMJKF-QHCPKHFHSA-N',
    cid: 65981,
    iupac: '2-ethoxy-4-[2-[[(1S)-3-methyl-1-(2-piperidin-1-ylphenyl)butyl]amino]-2-oxoethyl]benzoic acid',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'repaglinida-oral',
      producto: 'Repaglinide · comprimido',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg',
      excipientes: [
        'starch, corn',
        'dibasic calcium phosphate dihydrate',
        'glycerin',
        'magnesium stearate',
        'meglumine',
        'microcrystalline cellulose',
        'poloxamer 188',
        'povidone, unspecified',
        'polacrilin potassium',
        'talc'
      ],
      usos: {
        t: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
        ref: { f: 'dailymed-repaglinida', sec: '1 · Indicaciones', cita: 'improve glycemic control in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-repaglinida'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con repaglinida como ingrediente activo.',
    usos: 'Control de la glucemia en adultos con diabetes tipo 2 según la etiqueta.',
    actua: 'Cierra canales de potasio sensibles a ATP en células beta pancreáticas, lo que favorece la liberación de insulina.',
    recorrido: 'Se absorbe en el tubo digestivo, con pico plasmático dentro de una hora. La biodisponibilidad absoluta media es del 56 %. En un estudio oral radiomarcado se recuperó alrededor del 90 % en heces y el 8 % en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Repaglinide se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Repaglinide se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-repaglinida',
            sec: '3 · Forma farmacéutica',
            cita: 'colored, round tablet debossed with ‘CE’ on',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Se absorbe en el tubo digestivo, con pico plasmático dentro de una hora. La biodisponibilidad absoluta media es del 56 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Se absorbe en el tubo digestivo, con pico plasmático dentro de una hora. La biodisponibilidad absoluta media es del 56 %.',
          ref: { f: 'dailymed-repaglinida', sec: '12 · Farmacología clínica', cita: 'mean absolute bioavailability is 56%', codigo: '34090-1' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'La unión a proteínas séricas supera el 98 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'La unión a proteínas séricas supera el 98 %.',
          ref: { f: 'dailymed-repaglinida', sec: '12 · Farmacología clínica', cita: 'albumin was greater than 98%', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Canal de potasio sensible a ATP de la célula beta',
        efecto: 'Cierra canales de potasio sensibles a ATP en células beta pancreáticas, lo que favorece la liberación de insulina.',
        lugar: [ 'pancreas' ],
        datos: [
          {
            t: 'Cierra canales de potasio sensibles a ATP en células beta pancreáticas, lo que favorece la liberación de insulina.',
            ref: {
              f: 'dailymed-repaglinida',
              sec: '12 · Farmacología clínica',
              cita: 'closes ATP-dependent potassium channels',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se metaboliza por oxidación y conjugación. Los metabolitos descritos no contribuyen al efecto sobre la glucosa.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por oxidación y conjugación. Los metabolitos descritos no contribuyen al efecto sobre la glucosa.',
          ref: {
            f: 'dailymed-repaglinida',
            sec: '12 · Farmacología clínica',
            cita: 'Metabolites do not contribute to the glucose-lowering effect',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado se recuperó alrededor del 90 % en heces y el 8 % en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado se recuperó alrededor del 90 % en heces y el 8 % en orina.',
          ref: { f: 'dailymed-repaglinida', sec: '12 · Farmacología clínica', cita: 'radiolabel was recovered in the feces', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-repaglinida', 'cb995e92-295e-4638-a064-978211f5afe1', 'REPAGLINIDE TABLET', 'Repaglinide', '1', '2025-05-05', '2026-11-10'),
    rengPubchem(65981, 'repaglinide', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
