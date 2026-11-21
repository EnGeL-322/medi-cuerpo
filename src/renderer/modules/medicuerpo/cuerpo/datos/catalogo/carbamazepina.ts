import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'carbamazepina',
    nombre: 'Carbamazepina',
    clase: 'Antiepiléptico y analgésico en neuralgia del trigémino',
    sinonimos: [ 'carbamazepine' ],
    formula: 'C15H12N2O',
    masaMolar: 236.27,
    smiles: 'C1=CC=C2C(=C1)C=CC3=CC=CC=C3N2C(=O)N',
    inchikey: 'FFGPTBGBLSHEPO-UHFFFAOYSA-N',
    cid: 2554,
    iupac: 'benzo[b][1]benzazepine-11-carboxamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'carbamazepina-oral',
      producto: 'Tegretol · comprimido convencional',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido convencional',
      formaFuente: 'TABLET',
      liberacion: 'inmediata',
      concentraciones: '200 mg',
      excipientes: [ 'silicon dioxide', 'fd&c red no. 40', 'gelatin', 'glycerin', 'magnesium stearate', 'stearic acid' ],
      usos: {
        t: 'La etiqueta contempla determinados tipos de crisis epilépticas y dolor por neuralgia del trigémino.',
        ref: { f: 'dailymed-carbamazepina', sec: '1 · Indicaciones', cita: 'Trigeminal Neuralgia' }
      },
      fuente: 'dailymed-carbamazepina'
    }
  ],
  resumen: {
    contiene: 'Comprimido convencional de carbamazepina para administración oral.',
    usos: 'La etiqueta contempla determinados tipos de crisis epilépticas y dolor por neuralgia del trigémino.',
    actua: 'El mecanismo exacto se desconoce. En modelos animales, la carbamazepina reduce respuestas neuronales polisinápticas y la potenciación posterior a una estimulación repetida.',
    recorrido: 'En el estudio con administración repetida, el comprimido convencional alcanzó el pico plasmático en unas 4 a 5 horas. En un estudio oral radiomarcado, se recuperó el 72 % en orina y el 28 % en heces. En orina predominaban los metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Tegretol por vía oral.',
      ocurre: 'Se seleccionó el comprimido convencional de 200 mg. La misma etiqueta incluye una suspensión y comprimidos de liberación prolongada con cinética diferente.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Se seleccionó el comprimido convencional de 200 mg. La misma etiqueta incluye una suspensión y comprimidos de liberación prolongada con cinética diferente.',
          ref: { f: 'dailymed-carbamazepina', sec: '11 · Descripción', cita: 'as tablets of 200 mg' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En el estudio con administración repetida, el comprimido convencional alcanzó el pico plasmático en unas 4 a 5 horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En el estudio con administración repetida, el comprimido convencional alcanzó el pico plasmático en unas 4 a 5 horas.',
          ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: '4 to 5 hours after administration of conventional' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Aproximadamente el 76 % se une a proteínas plasmáticas. La etiqueta da una relación entre líquido cefalorraquídeo y suero de 0,22.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Aproximadamente el 76 % se une a proteínas plasmáticas. La etiqueta da una relación entre líquido cefalorraquídeo y suero de 0,22.',
          ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: '76% bound to plasma proteins' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'El mecanismo exacto se desconoce. En modelos animales, la carbamazepina reduce respuestas neuronales polisinápticas y la potenciación posterior a una estimulación repetida.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'El mecanismo exacto se desconoce. En modelos animales, la carbamazepina reduce respuestas neuronales polisinápticas y la potenciación posterior a una estimulación repetida.',
            ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: 'reducing polysynaptic responses' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'En el hígado, CYP3A4 forma el epóxido 10,11. La carbamazepina induce su propio metabolismo, de modo que su semivida cambia con la exposición repetida.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'En el hígado, CYP3A4 forma el epóxido 10,11. La carbamazepina induce su propio metabolismo, de modo que su semivida cambia con la exposición repetida.',
          ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: 'Tegretol is metabolized in the liver' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Epóxido 10,11 de carbamazepina',
          actividad: 'activo',
          ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: 'carbamazepine-10,11-epoxide from Tegretol' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado, se recuperó el 72 % en orina y el 28 % en heces. En orina predominaban los metabolitos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado, se recuperó el 72 % en orina y el 28 % en heces. En orina predominaban los metabolitos.',
          ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: 'found in the urine and 28% in the feces' },
          condiciones: 'Estudio con carbamazepina radiomarcada'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico con comprimidos convencionales',
      valor: '4–5',
      unidad: 'h',
      condiciones: 'Administración oral repetida',
      ref: { f: 'dailymed-carbamazepina', sec: '12 · Farmacología clínica', cita: '4 to 5 hours after administration of conventional' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-carbamazepina', '8d409411-aa9f-4f3a-a52c-fbcb0c3ec053', 'TEGRETOL (CARBAMAZEPINE) SUSPENSION TEGRETOL (CARBAMAZEPINE) TABLET TEGRETOL XR (CARBAMAZEPINE) TABLET, EXTENDED RELEASE', 'Tegretol', '39', '2026-08-21', '2026-11-10'),
    rengPubchem(2554, 'carbamazepine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
