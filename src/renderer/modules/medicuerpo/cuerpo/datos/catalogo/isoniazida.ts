import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'isoniazida',
    nombre: 'Isoniazida',
    clase: 'Antituberculoso',
    sinonimos: [ 'isoniazid' ],
    formula: 'C6H7N3O',
    masaMolar: 137.14,
    smiles: 'C1=CN=CC=C1C(=O)NN',
    inchikey: 'QRXWMOHMRWLFEY-UHFFFAOYSA-N',
    cid: 3767,
    iupac: 'pyridine-4-carbohydrazide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'isoniazida-oral',
      producto: 'Isoniazid · solución oral',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Solución oral',
      formaFuente: 'SOLUTION',
      liberacion: 'no declarada',
      concentraciones: '50 mg / 5 mL',
      excipientes: [ 'propylparaben', 'glycerin', 'methylparaben' ],
      usos: {
        t: 'Tuberculosis por microorganismos susceptibles. En la enfermedad activa, la etiqueta describe su uso como parte de un tratamiento combinado.',
        ref: { f: 'dailymed-isoniazida', sec: '1 · Indicaciones', cita: 'all forms of tuberculosis in which organisms are susceptible' }
      },
      fuente: 'dailymed-isoniazida'
    }
  ],
  resumen: {
    contiene: 'Solución oral de isoniazida para administración oral.',
    usos: 'Tuberculosis por microorganismos susceptibles. En la enfermedad activa, la etiqueta describe su uso como parte de un tratamiento combinado.',
    actua: 'En micobacterias susceptibles inhibe la síntesis de ácidos micólicos, componentes de su pared celular.',
    recorrido: 'Tras la administración oral, alcanza el pico en sangre en 1 a 2 horas. Entre el 50 % y el 70 % de la dosis se excreta en la orina en 24 horas. La etiqueta no desglosa aquí la fracción sin modificar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere la solución.',
      ocurre: 'El principio activo está disuelto en la solución oral. Esta presentación contiene 50 mg por cada 5 mL.',
      sigue: 'La isoniazida ya está disuelta al llegar al tubo digestivo.',
      datos: [
        {
          t: 'El principio activo está disuelto en la solución oral. Esta presentación contiene 50 mg por cada 5 mL.',
          ref: { f: 'dailymed-isoniazida', sec: '11 · Descripción', cita: 'available as a clear solution' }
        }
      ],
      formas: [ 'disuelto' ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Tras la administración oral, alcanza el pico en sangre en 1 a 2 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Tras la administración oral, alcanza el pico en sangre en 1 a 2 horas.',
          ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'Within 1 to 2 hours after oral administration' }
        }
      ]
    },
    distribucion: {
      organos: [ 'tejidos' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se distribuye a tejidos y líquidos corporales, incluidos el cefalorraquídeo y el pleural.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se distribuye a tejidos y líquidos corporales, incluidos el cefalorraquídeo y el pleural.',
          ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'cerebrospinal, pleural and ascitic fluids' }
        }
      ],
      accion: {
        diana: 'Síntesis de ácidos micólicos de la micobacteria',
        efecto: 'En micobacterias susceptibles inhibe la síntesis de ácidos micólicos, componentes de su pared celular.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'En micobacterias susceptibles inhibe la síntesis de ácidos micólicos, componentes de su pared celular.',
            ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'inhibits the synthesis of mycoloic acids' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma principalmente por acetilación y deshidrazinación. La velocidad de acetilación depende de factores genéticos.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente por acetilación y deshidrazinación. La velocidad de acetilación depende de factores genéticos.',
          ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'primarily by acetylation and dehydrazination' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Entre el 50 % y el 70 % de la dosis se excreta en la orina en 24 horas. La etiqueta no desglosa aquí la fracción sin modificar.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Entre el 50 % y el 70 % de la dosis se excreta en la orina en 24 horas. La etiqueta no desglosa aquí la fracción sin modificar.',
          ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'excreted in the urine in 24 hours' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sanguíneo',
      valor: '1–2',
      unidad: 'h',
      ref: { f: 'dailymed-isoniazida', sec: '12 · Farmacología clínica', cita: 'Within 1 to 2 hours after oral administration' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-isoniazida', '8a6fa0b2-48e3-4c06-97c5-9ec3d6475a7c', 'ISONIAZID SOLUTION', 'Isoniazid', '2', '2025-12-04', '2026-11-10'),
    rengPubchem(3767, 'isoniazid', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
