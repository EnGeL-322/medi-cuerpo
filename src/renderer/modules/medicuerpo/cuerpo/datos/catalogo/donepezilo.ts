import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'donepezilo',
    nombre: 'Donepezilo',
    clase: 'Inhibidor de la acetilcolinesterasa',
    sinonimos: [ 'donepezil' ],
    formula: 'C24H29NO3',
    masaMolar: 379.5,
    smiles: 'COC1=C(C=C2C(=C1)CC(C2=O)CC3CCN(CC3)CC4=CC=CC=C4)OC',
    inchikey: 'ADEBPBSSDYVVLD-UHFFFAOYSA-N',
    cid: 3152,
    iupac: '2-[(1-benzylpiperidin-4-yl)methyl]-5,6-dimethoxy-2,3-dihydroinden-1-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'donepezilo-oral',
      producto: 'Aricept · comprimido recubierto',
      titular: 'EISAI INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      sal: {
        nombre: 'clorhidrato de donepezilo',
        ref: { f: 'dailymed-donepezilo', sec: '3 · Forma farmacéutica', cita: 'donepezil hydrochloride' }
      },
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'cellulose, microcrystalline',
        'magnesium stearate',
        'talc',
        'polyethylene glycol 8000',
        'hypromelloses',
        'titanium dioxide',
        'hydroxypropyl cellulose (90000 wamw)'
      ],
      usos: {
        t: 'Tratamiento de la demencia de tipo Alzheimer según la etiqueta.',
        ref: { f: 'dailymed-donepezilo', sec: '1 · Indicaciones', cita: 'treatment of dementia of the Alzheimer’s type' }
      },
      fuente: 'dailymed-donepezilo'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de clorhidrato de donepezilo para administración oral.',
    usos: 'Tratamiento de la demencia de tipo Alzheimer según la etiqueta.',
    actua: 'Inhibe reversiblemente la acetilcolinesterasa y aumenta la disponibilidad de acetilcolina. La etiqueta no documenta que cambie el curso de la enfermedad.',
    recorrido: 'La comida no modificó la velocidad ni la extensión de la absorción del comprimido. El momento del pico difiere entre las presentaciones de 10 y 23 mg. Parte se elimina intacta en orina y otra parte se transforma antes de salir.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Aricept por vía oral.',
      ocurre: 'Se documenta ARICEPT en comprimido recubierto, que la etiqueta distingue de su presentación bucodispersable.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Se documenta ARICEPT en comprimido recubierto, que la etiqueta distingue de su presentación bucodispersable.',
          ref: { f: 'dailymed-donepezilo', sec: '3 · Forma farmacéutica', cita: 'supplied as film-coated, round tablets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La comida no modificó la velocidad ni la extensión de la absorción del comprimido. El momento del pico difiere entre las presentaciones de 10 y 23 mg.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La comida no modificó la velocidad ni la extensión de la absorción del comprimido. El momento del pico difiere entre las presentaciones de 10 y 23 mg.',
          ref: { f: 'dailymed-donepezilo', sec: '12 · Farmacología clínica', cita: 'ARICEPT tablets are not influenced by food' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El donepezilo se une aproximadamente en un 96 % a proteínas plasmáticas, en especial albúmina y glucoproteína ácida alfa-1.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El donepezilo se une aproximadamente en un 96 % a proteínas plasmáticas, en especial albúmina y glucoproteína ácida alfa-1.',
          ref: { f: 'dailymed-donepezilo', sec: '12 · Farmacología clínica', cita: 'approximately 96% bound to human plasma proteins' }
        }
      ],
      accion: {
        diana: 'Acetilcolinesterasa',
        efecto: 'Inhibe reversiblemente la acetilcolinesterasa y aumenta la disponibilidad de acetilcolina. La etiqueta no documenta que cambie el curso de la enfermedad.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Inhibe reversiblemente la acetilcolinesterasa y aumenta la disponibilidad de acetilcolina. La etiqueta no documenta que cambie el curso de la enfermedad.',
            ref: {
              f: 'dailymed-donepezilo',
              sec: '12 · Farmacología clínica',
              cita: 'reversible inhibition of its hydrolysis by acetylcholinesterase'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'CYP2D6 y CYP3A4 intervienen en su transformación, y también experimenta glucuronidación. Dos de sus metabolitos principales se describen como activos.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'CYP2D6 y CYP3A4 intervienen en su transformación, y también experimenta glucuronidación. Dos de sus metabolitos principales se describen como activos.',
          ref: { f: 'dailymed-donepezilo', sec: '12 · Farmacología clínica', cita: 'two of which are known to be active' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Parte se elimina intacta en orina y otra parte se transforma antes de salir.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Parte se elimina intacta en orina y otra parte se transforma antes de salir.',
          ref: { f: 'dailymed-donepezilo', sec: '12 · Farmacología clínica', cita: 'excreted in the urine intact' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '≈ 70',
      unidad: 'h',
      ref: { f: 'dailymed-donepezilo', sec: '12 · Farmacología clínica', cita: 'elimination half life of donepezil is about 70 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-donepezilo', '98e451e1-e4d7-4439-a675-c5457ba20975', 'ARICEPT (DONEPEZIL HYDROCHLORIDE) TABLET, FILM COATED ARICEPT ODT (DONEPEZIL HYDROCHLORIDE) TABLET, ORALLY DISINTEGRATING', 'Aricept', '33', '2026-06-30', '2026-11-10'),
    rengPubchem(3152, 'donepezil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
