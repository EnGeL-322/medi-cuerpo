import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'diazepam',
    nombre: 'Diazepam',
    clase: 'Benzodiazepina',
    sinonimos: [ 'diazepam' ],
    formula: 'C16H13ClN2O',
    masaMolar: 284.74,
    smiles: 'CN1C(=O)CN=C(C2=C1C=CC(=C2)Cl)C3=CC=CC=C3',
    inchikey: 'AAOVKJBEBIDNHE-UHFFFAOYSA-N',
    cid: 3016,
    iupac: '7-chloro-1-methyl-5-phenyl-3H-1,4-benzodiazepin-2-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'diazepam-oral',
      producto: 'Valium · comprimido',
      titular: 'WAYLIS THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2 mg',
      excipientes: [ 'anhydrous lactose', 'starch, corn', 'calcium stearate' ],
      usos: {
        t: 'La etiqueta incluye trastornos de ansiedad y algunos usos como complemento para espasmos y crisis convulsivas.',
        ref: { f: 'dailymed-diazepam', sec: '1 · Indicaciones', cita: 'Treatment of anxiety disorders' }
      },
      fuente: 'dailymed-diazepam'
    }
  ],
  resumen: {
    contiene: 'Comprimido de diazepam para administración oral.',
    usos: 'La etiqueta incluye trastornos de ansiedad y algunos usos como complemento para espasmos y crisis convulsivas.',
    actua: 'Se une al sitio benzodiazepínico del receptor GABA-A. Se cree que potencia la señal inhibidora que produce el neurotransmisor GABA.',
    recorrido: 'En ayunas, el pico medio llegó a unas 1,25 horas. Con una comida de contenido graso moderado, el pico llegó alrededor de 2,5 horas. El diazepam y sus metabolitos se eliminan principalmente por orina, sobre todo como conjugados con ácido glucurónico.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Valium por vía oral.',
      ocurre: 'La ficha se refiere a VALIUM en comprimidos para administración oral.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha se refiere a VALIUM en comprimidos para administración oral.',
          ref: { f: 'dailymed-diazepam', sec: '3 · Forma farmacéutica', cita: 'DOSAGE FORMS AND STRENGTHS' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En ayunas, el pico medio llegó a unas 1,25 horas. Con una comida de contenido graso moderado, el pico llegó alrededor de 2,5 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En ayunas, el pico medio llegó a unas 1,25 horas. Con una comida de contenido graso moderado, el pico llegó alrededor de 2,5 horas.',
          ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'Absorption is delayed and decreased' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El 98 % del diazepam se une a proteínas plasmáticas. El original y sus metabolitos cruzan la barrera hematoencefálica.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El 98 % del diazepam se une a proteínas plasmáticas. El original y sus metabolitos cruzan la barrera hematoencefálica.',
          ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'cross the blood-brain and placental barriers' }
        }
      ],
      accion: {
        diana: 'Sitio benzodiazepínico del receptor GABA-A',
        efecto: 'Se une al sitio benzodiazepínico del receptor GABA-A. Se cree que potencia la señal inhibidora que produce el neurotransmisor GABA.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se une al sitio benzodiazepínico del receptor GABA-A. Se cree que potencia la señal inhibidora que produce el neurotransmisor GABA.',
            ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'binding at the benzodiazepine site' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'CYP2C19 y CYP3A intervienen en la oxidación. El N-desmetildiazepam es activo y puede permanecer más tiempo que el fármaco original.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'CYP2C19 y CYP3A intervienen en la oxidación. El N-desmetildiazepam es activo y puede permanecer más tiempo que el fármaco original.',
          ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'formation of desmethyl-diazepam mainly by CYP2C19' }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetildiazepam',
          actividad: 'activo',
          ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'active metabolite N-desmethyldiazepam' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El diazepam y sus metabolitos se eliminan principalmente por orina, sobre todo como conjugados con ácido glucurónico.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El diazepam y sus metabolitos se eliminan principalmente por orina, sobre todo como conjugados con ácido glucurónico.',
          ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'predominantly as their glucuronide conjugates' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del N-desmetildiazepam',
      valor: 'Hasta 100',
      unidad: 'h',
      ref: { f: 'dailymed-diazepam', sec: '12 · Farmacología clínica', cita: 'is up to 100 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-diazepam', '260e2041-2bb3-482f-850e-b5d47a7bdbe6', 'VALIUM (DIAZEPAM) TABLET', 'Valium', '12', '2026-10-09', '2026-11-10'),
    rengPubchem(3016, 'diazepam', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
