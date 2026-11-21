import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'azatioprina',
    nombre: 'Azatioprina',
    clase: 'Inmunosupresor antimetabolito',
    sinonimos: [ 'azatioprina', 'azathioprine', 'Imuran' ],
    formula: 'C9H7N7O2S',
    masaMolar: 277.27,
    smiles: 'CN1C=NC(=C1SC2=NC=NC3=C2NC=N3)[N+](=O)[O-]',
    inchikey: 'LMEKQMALGUDUQG-UHFFFAOYSA-N',
    cid: 2265,
    iupac: '6-(3-methyl-5-nitroimidazol-4-yl)sulfanyl-7H-purine',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'azatioprina-oral',
      producto: 'IMURAN · comprimido',
      titular: 'LEGACY PHARMA USA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      excipientes: [ 'magnesium stearate', 'lactose', 'starch, potato', 'povidone', 'stearic acid' ],
      usos: {
        t: 'La etiqueta contempla su uso como parte de la prevención del rechazo de trasplante renal y para tratar la artritis reumatoide activa.',
        ref: { f: 'dailymed-azatioprina', sec: '1 · Indicaciones', cita: 'for the prevention of rejection in renal homotransplantation', codigo: '34067-9' }
      },
      fuente: 'dailymed-azatioprina',
      reacciones: [
        [ 'Leucopenia y supresión de la médula ósea.', '34084-4', 'bone marrow suppression or leukopenia' ],
        [ 'Infecciones descritas entre los receptores de trasplante renal.', '34084-4', 'the incidence of infection in renal homotransplantation' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'La etiqueta contempla su uso como parte de la prevención del rechazo de trasplante renal y para tratar la artritis reumatoide activa.',
    actua: 'Da lugar a nucleótidos de tioguanina a partir de 6-mercaptopurina. La ficha vincula la magnitud y duración del efecto a los niveles de esos nucleótidos en tejidos.',
    recorrido: 'Se absorbe por vía oral. En el estudio con marcador, la radiactividad sérica total alcanzó su máximo a 1–2 h. La ficha documenta la desaparición rápida de los compuestos de la sangre y que después de 8 h no se detectaron azatioprina ni mercaptopurina en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral ranurado de azatioprina.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral ranurado de azatioprina.',
          ref: { f: 'dailymed-azatioprina', sec: '11 · Descripción', cita: 'is available in tablet form for oral administration', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por vía oral. En el estudio con marcador, la radiactividad sérica total alcanzó su máximo a 1–2 h.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por vía oral. En el estudio con marcador, la radiactividad sérica total alcanzó su máximo a 1–2 h.',
          ref: {
            f: 'dailymed-azatioprina',
            sec: '12 · Farmacología clínica',
            cita: 'Maximum serum radioactivity occurs at 1 to 2 hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La azatioprina y la 6-mercaptopurina presentan una unión a proteínas séricas de alrededor del 30 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La azatioprina y la 6-mercaptopurina presentan una unión a proteínas séricas de alrededor del 30 %.',
          ref: { f: 'dailymed-azatioprina', sec: '12 · Farmacología clínica', cita: 'moderately bound to serum proteins (30%)', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Nucleótidos de tioguanina',
        efecto: 'Da lugar a nucleótidos de tioguanina a partir de 6-mercaptopurina. La ficha vincula la magnitud y duración del efecto a los niveles de esos nucleótidos en tejidos.',
        lugar: [ 'sistema-inmunitario', 'tejidos' ],
        datos: [
          {
            t: 'Da lugar a nucleótidos de tioguanina a partir de 6-mercaptopurina. La ficha vincula la magnitud y duración del efecto a los niveles de esos nucleótidos en tejidos.',
            ref: {
              f: 'dailymed-azatioprina',
              sec: '12 · Farmacología clínica',
              cita: 'clinical effects correlate with thiopurine nucleotide levels in tissues',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se convierte en 6-mercaptopurina. A partir de ella se forman nucleótidos de tioguanina y otros productos, como el metabolito inactivo metil-6-MP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se convierte en 6-mercaptopurina. A partir de ella se forman nucleótidos de tioguanina y otros productos, como el metabolito inactivo metil-6-MP.',
          ref: { f: 'dailymed-azatioprina', sec: '12 · Farmacología clínica', cita: 'Azathioprine is metabolized to 6-mercaptopurine', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La ficha documenta la desaparición rápida de los compuestos de la sangre y que después de 8 h no se detectaron azatioprina ni mercaptopurina en orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La ficha documenta la desaparición rápida de los compuestos de la sangre y que después de 8 h no se detectaron azatioprina ni mercaptopurina en orina.',
          ref: {
            f: 'dailymed-azatioprina',
            sec: '12 · Farmacología clínica',
            cita: 'no azathioprine or mercaptopurine is detectable in urine after 8 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Pico de la radiactividad sérica total',
      valor: '1–2',
      unidad: 'h',
      analito: 'marcador total',
      condiciones: 'estudio con azatioprina marcada con azufre-35',
      ref: { f: 'dailymed-azatioprina', sec: '12 · Farmacología clínica', cita: 'Maximum serum radioactivity occurs at 1 to 2 hours', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-azatioprina', '4d62b6e4-a9d4-4818-e063-6394a90aa208', 'IMURAN (AZATHIOPRINE) TABLET', 'IMURAN', '1', '2026-09-14', '2026-11-12'),
    rengPubchem(2265, 'azatioprina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
