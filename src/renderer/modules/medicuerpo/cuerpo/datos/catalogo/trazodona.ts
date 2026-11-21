import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'trazodona',
    nombre: 'Trazodona',
    clase: 'Antidepresivo serotoninérgico',
    sinonimos: [ 'trazodone' ],
    formula: 'C19H22ClN5O',
    masaMolar: 371.9,
    smiles: 'C1CN(CCN1CCCN2C(=O)N3C=CC=CC3=N2)C4=CC(=CC=C4)Cl',
    inchikey: 'PHLBKPHSAVXXEF-UHFFFAOYSA-N',
    cid: 5533,
    iupac: '2-[3-[4-(3-chlorophenyl)piperazin-1-yl]propyl]-[1,2,4]triazolo[4,3-a]pyridin-3-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'trazodona-oral',
      producto: 'Trazodone Hydrochloride · comprimido',
      titular: 'GRANULES PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg',
      sal: {
        nombre: 'clorhidrato de trazodona',
        ref: { f: 'dailymed-trazodona', sec: '3 · Forma farmacéutica', cita: 'Trazodone hydrochloride' }
      },
      excipientes: [
        'magnesium stearate',
        'cellulose, microcrystalline',
        'silicon dioxide',
        'starch, corn',
        'sodium lauryl sulfate',
        'sodium starch glycolate type a'
      ],
      usos: {
        t: 'Trastorno depresivo mayor en adultos según la etiqueta.',
        ref: { f: 'dailymed-trazodona', sec: '1 · Indicaciones', cita: 'major depressive disorder' }
      },
      fuente: 'dailymed-trazodona'
    }
  ],
  resumen: {
    contiene: 'Comprimido de clorhidrato de trazodona para administración oral.',
    usos: 'Trastorno depresivo mayor en adultos según la etiqueta.',
    actua: 'La etiqueta describe inhibición de la recaptación de serotonina y antagonismo de receptores 5-HT₂. Su contribución al efecto antidepresivo exacto sigue sin aclararse.',
    recorrido: 'Con alimentos, el pico puede ser menor y alcanzarse más tarde. La absorción total puede aumentar. Menos del 1 % de la dosis oral se excreta por la orina como trazodona sin cambios. La etiqueta no cuantifica aquí la recuperación total.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Trazodone Hydrochloride por vía oral.',
      ocurre: 'La ficha se refiere a los comprimidos orales de clorhidrato de trazodona.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha se refiere a los comprimidos orales de clorhidrato de trazodona.',
          ref: { f: 'dailymed-trazodona', sec: '3 · Forma farmacéutica', cita: 'DOSAGE FORMS AND STRENGTHS' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Con alimentos, el pico puede ser menor y alcanzarse más tarde. La absorción total puede aumentar.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Con alimentos, el pico puede ser menor y alcanzarse más tarde. La absorción total puede aumentar.',
          ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: 'decrease in maximum concentration' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La trazodona se une a proteínas plasmáticas en un 89–95 % según los ensayos de la etiqueta.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La trazodona se une a proteínas plasmáticas en un 89–95 % según los ensayos de la etiqueta.',
          ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: '89 to 95% protein bound' },
          condiciones: 'Ensayo in vitro'
        }
      ],
      accion: {
        diana: 'Transportador de serotonina y receptores 5-HT₂',
        efecto: 'La etiqueta describe inhibición de la recaptación de serotonina y antagonismo de receptores 5-HT₂. Su contribución al efecto antidepresivo exacto sigue sin aclararse.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'La etiqueta describe inhibición de la recaptación de serotonina y antagonismo de receptores 5-HT₂. Su contribución al efecto antidepresivo exacto sigue sin aclararse.',
            ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: '5HT2 receptor antagonist' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'En microsomas hepáticos humanos, CYP3A4 la convierte por escisión oxidativa en m-clorofenilpiperazina, un metabolito activo.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'En microsomas hepáticos humanos, CYP3A4 la convierte por escisión oxidativa en m-clorofenilpiperazina, un metabolito activo.',
          ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: 'an active metabolite, m-chlorophenylpiperazine' },
          condiciones: 'Ensayo in vitro con microsomas hepáticos humanos'
        }
      ],
      metabolitos: [
        {
          nombre: 'm-clorofenilpiperazina (mCPP)',
          actividad: 'activo',
          ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: 'an active metabolite, m-chlorophenylpiperazine' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Menos del 1 % de la dosis oral se excreta por la orina como trazodona sin cambios. La etiqueta no cuantifica aquí la recuperación total.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Menos del 1 % de la dosis oral se excreta por la orina como trazodona sin cambios. La etiqueta no cuantifica aquí la recuperación total.',
          ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: 'excreted unchanged in the urine' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '89–95',
      unidad: '%',
      condiciones: 'In vitro',
      ref: { f: 'dailymed-trazodona', sec: '12 · Farmacología clínica', cita: '89 to 95% protein bound' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-trazodona', '5bc5f266-6c0e-4b9a-b6e0-ea694928b948', 'TRAZODONE HYDROCHLORIDE TABLET', 'Trazodone Hydrochloride', '6', '2026-07-13', '2026-11-10'),
    rengPubchem(5533, 'trazodone', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
