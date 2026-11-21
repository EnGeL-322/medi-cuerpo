import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alprazolam',
    nombre: 'Alprazolam',
    clase: 'Benzodiazepina',
    sinonimos: [ 'alprazolam' ],
    formula: 'C17H13ClN4',
    masaMolar: 308.8,
    smiles: 'CC1=NN=C2N1C3=C(C=C(C=C3)Cl)C(=NC2)C4=CC=CC=C4',
    inchikey: 'VREFGVBLTWBCJP-UHFFFAOYSA-N',
    cid: 2118,
    iupac: '8-chloro-1-methyl-6-phenyl-4H-[1,2,4]triazolo[4,3-a][1,4]benzodiazepine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'alprazolam-oral',
      producto: 'Xanax · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.25 mg',
      excipientes: [
        'powdered cellulose',
        'starch, corn',
        'docusate sodium',
        'lactose, unspecified form',
        'magnesium stearate',
        'silicon dioxide',
        'sodium benzoate'
      ],
      usos: {
        t: 'Tratamiento agudo de la ansiedad generalizada y tratamiento del trastorno de pánico en adultos, según la etiqueta.',
        ref: { f: 'dailymed-alprazolam', sec: '1 · Indicaciones', cita: 'XANAX is indicated for the' }
      },
      fuente: 'dailymed-alprazolam'
    }
  ],
  resumen: {
    contiene: 'Comprimido de alprazolam para administración oral.',
    usos: 'Tratamiento agudo de la ansiedad generalizada y tratamiento del trastorno de pánico en adultos, según la etiqueta.',
    actua: 'Se une al sitio benzodiazepínico de receptores GABA-A en el encéfalo y refuerza la inhibición de las señales neuronales mediada por GABA.',
    recorrido: 'El alprazolam alcanza su pico plasmático entre una y dos horas tras la administración oral. El alprazolam y sus productos de transformación se eliminan principalmente por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Xanax por vía oral.',
      ocurre: 'La ficha se refiere a los comprimidos orales XANAX en las concentraciones descritas por la etiqueta.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha se refiere a los comprimidos orales XANAX en las concentraciones descritas por la etiqueta.',
          ref: { f: 'dailymed-alprazolam', sec: '3 · Forma farmacéutica', cita: 'XANAX tablets are available as' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'El alprazolam alcanza su pico plasmático entre una y dos horas tras la administración oral.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'El alprazolam alcanza su pico plasmático entre una y dos horas tras la administración oral.',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'occurs in 1 to 2 hours post dose' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Aproximadamente el 80 % se une a proteínas del suero humano, sobre todo a la albúmina.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Aproximadamente el 80 % se une a proteínas del suero humano, sobre todo a la albúmina.',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: '80% bound to human serum protein' }
        }
      ],
      accion: {
        diana: 'Sitio benzodiazepínico del receptor GABA-A',
        efecto: 'Se une al sitio benzodiazepínico de receptores GABA-A en el encéfalo y refuerza la inhibición de las señales neuronales mediada por GABA.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se une al sitio benzodiazepínico de receptores GABA-A en el encéfalo y refuerza la inhibición de las señales neuronales mediada por GABA.',
            ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'enhances GABA-mediated synaptic inhibition' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'CYP3A4 forma dos metabolitos activos, 4-hidroxialprazolam y α-hidroxialprazolam. En plasma sus niveles son bajos respecto al original.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'CYP3A4 forma dos metabolitos activos, 4-hidroxialprazolam y α-hidroxialprazolam. En plasma sus niveles son bajos respecto al original.',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'to 2 major active metabolites in the plasma' }
        }
      ],
      metabolitos: [
        {
          nombre: '4-hidroxialprazolam',
          actividad: 'activo',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'to 2 major active metabolites in the plasma' }
        },
        {
          nombre: 'α-hidroxialprazolam',
          actividad: 'activo',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'to 2 major active metabolites in the plasma' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El alprazolam y sus productos de transformación se eliminan principalmente por la orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El alprazolam y sus productos de transformación se eliminan principalmente por la orina.',
          ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'excreted primarily in the urine' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1–2',
      unidad: 'h',
      ref: { f: 'dailymed-alprazolam', sec: '12 · Farmacología clínica', cita: 'occurs in 1 to 2 hours post dose' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-alprazolam', 'bb5cf72e-3a41-41a8-9a38-80f974eca33f', 'XANAX (ALPRAZOLAM) TABLET', 'Xanax', '5', '2026-10-12', '2026-11-10'),
    rengPubchem(2118, 'alprazolam', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
