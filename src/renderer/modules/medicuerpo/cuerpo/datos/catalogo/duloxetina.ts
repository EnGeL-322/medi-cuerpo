import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'duloxetina',
    nombre: 'Duloxetina',
    clase: 'Antidepresivo IRSN',
    sinonimos: [ 'duloxetine' ],
    formula: 'C18H19NOS',
    masaMolar: 297.4,
    smiles: 'CNCC[C@@H](C1=CC=CS1)OC2=CC=CC3=CC=CC=C32',
    inchikey: 'ZEUITGRIYCTCEM-KRWDZBQOSA-N',
    cid: 60835,
    iupac: '(3S)-N-methyl-3-naphthalen-1-yloxy-3-thiophen-2-ylpropan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'duloxetina-oral',
      producto: 'Cymbalta · cápsula gastrorresistente',
      titular: 'CARILION MATERIALS MANAGEMENT',
      mercado: 'EE. UU.',
      forma: 'Cápsula gastrorresistente',
      formaFuente: 'CAPSULE, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '20 mg',
      sal: {
        nombre: 'clorhidrato de duloxetina',
        ref: { f: 'dailymed-duloxetina', sec: '11 · Descripción', cita: 'Duloxetine hydrochloride' }
      },
      excipientes: [
        'gelatin',
        'hypromelloses',
        'hypromellose acetate succinate 16070722 (3 mm2/s)',
        'sodium lauryl sulfate',
        'sucrose',
        'talc',
        'titanium dioxide',
        'triethyl citrate',
        'fd&c blue no. 2',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'La etiqueta incluye depresión mayor, ansiedad generalizada y ciertos cuadros de dolor neuropático y crónico.',
        ref: { f: 'dailymed-duloxetina', sec: '1 · Indicaciones', cita: 'Major Depressive Disorder' }
      },
      fuente: 'dailymed-duloxetina'
    }
  ],
  resumen: {
    contiene: 'Cápsula gastrorresistente de clorhidrato de duloxetina para administración oral.',
    usos: 'La etiqueta incluye depresión mayor, ansiedad generalizada y ciertos cuadros de dolor neuropático y crónico.',
    actua: 'Se cree que potencia la señal de serotonina y noradrenalina en el sistema nervioso central. La etiqueta indica que los mecanismos clínicos exactos son desconocidos.',
    recorrido: 'La absorción comienza con un retraso mediano de 2 horas y el pico plasmático llega cerca de las 6 horas. Alrededor del 70 % de la dosis aparece en la orina como metabolitos. Menos del 1 % aparece como duloxetina sin cambios. Cerca del 20 % se excreta en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Cymbalta por vía oral.',
      ocurre: 'La cápsula contiene gránulos con recubrimiento entérico. La forma farmacéutica retrasa la liberación.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La cápsula contiene gránulos con recubrimiento entérico. La forma farmacéutica retrasa la liberación.',
          ref: { f: 'dailymed-duloxetina', sec: '11 · Descripción', cita: 'enteric-coated pellets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La absorción comienza con un retraso mediano de 2 horas y el pico plasmático llega cerca de las 6 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La absorción comienza con un retraso mediano de 2 horas y el pico plasmático llega cerca de las 6 horas.',
          ref: { f: 'dailymed-duloxetina', sec: '12 · Farmacología clínica', cita: 'median 2 hour lag until absorption begins' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Más del 90 % se une a proteínas plasmáticas, principalmente a la albúmina y la glucoproteína ácida alfa-1.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Más del 90 % se une a proteínas plasmáticas, principalmente a la albúmina y la glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-duloxetina', sec: '12 · Farmacología clínica', cita: 'bound (>90%) to proteins in human plasma' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Se cree que potencia la señal de serotonina y noradrenalina en el sistema nervioso central. La etiqueta indica que los mecanismos clínicos exactos son desconocidos.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que potencia la señal de serotonina y noradrenalina en el sistema nervioso central. La etiqueta indica que los mecanismos clínicos exactos son desconocidos.',
            ref: {
              f: 'dailymed-duloxetina',
              sec: '12 · Farmacología clínica',
              cita: 'potentiation of serotonergic and noradrenergic activity'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma extensamente, sobre todo por oxidación y conjugación. El metabolismo hepático es la vía principal de eliminación del fármaco original.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente, sobre todo por oxidación y conjugación. El metabolismo hepático es la vía principal de eliminación del fármaco original.',
          ref: { f: 'dailymed-duloxetina', sec: '12 · Farmacología clínica', cita: 'mainly through hepatic metabolism' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Alrededor del 70 % de la dosis aparece en la orina como metabolitos. Menos del 1 % aparece como duloxetina sin cambios. Cerca del 20 % se excreta en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Alrededor del 70 % de la dosis aparece en la orina como metabolitos. Menos del 1 % aparece como duloxetina sin cambios. Cerca del 20 % se excreta en heces.',
          ref: { f: 'dailymed-duloxetina', sec: '12 · Farmacología clínica', cita: 'appears in the urine as metabolites' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '12',
      unidad: 'h',
      ref: { f: 'dailymed-duloxetina', sec: '12 · Farmacología clínica', cita: 'elimination half-life of about 12 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-duloxetina', '00acd9e9-b26a-4626-949e-112ecd2f27e6', 'CYMBALTA (DULOXETINE HYDROCHLORIDE) CAPSULE, DELAYED RELEASE', 'Cymbalta', '3', '2016-08-08', '2026-11-10'),
    rengPubchem(60835, 'duloxetine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
