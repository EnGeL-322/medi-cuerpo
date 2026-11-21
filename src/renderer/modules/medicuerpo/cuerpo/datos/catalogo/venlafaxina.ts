import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'venlafaxina',
    nombre: 'Venlafaxina',
    clase: 'Antidepresivo IRSN',
    sinonimos: [ 'venlafaxine' ],
    formula: 'C17H27NO2',
    masaMolar: 277.4,
    smiles: 'CN(C)CC(C1=CC=C(C=C1)OC)C2(CCCCC2)O',
    inchikey: 'PNVNVHUZROJLTJ-UHFFFAOYSA-N',
    cid: 5656,
    iupac: '1-[2-(dimethylamino)-1-(4-methoxyphenyl)ethyl]cyclohexan-1-ol',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'venlafaxina-oral',
      producto: 'Effexor XR · cápsula de liberación prolongada',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '37.5 mg',
      sal: {
        nombre: 'clorhidrato de venlafaxina',
        ref: { f: 'dailymed-venlafaxina', sec: '11 · Descripción', cita: 'venlafaxine hydrochloride' }
      },
      excipientes: [
        'powdered cellulose',
        'gelatin, unspecified',
        'ferric oxide red',
        'titanium dioxide',
        'ethylcellulose (100 mpa.s)',
        'hypromellose, unspecified',
        'hypromellose 2910 (6 mpa.s)'
      ],
      usos: {
        t: 'La etiqueta incluye depresión mayor, ansiedad generalizada, ansiedad social y trastorno de pánico.',
        ref: { f: 'dailymed-venlafaxina', sec: '1 · Indicaciones', cita: 'Major Depressive Disorder' }
      },
      fuente: 'dailymed-venlafaxina'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada de clorhidrato de venlafaxina para administración oral.',
    usos: 'La etiqueta incluye depresión mayor, ansiedad generalizada, ansiedad social y trastorno de pánico.',
    actua: 'Su efecto se atribuye a la inhibición de la recaptación de serotonina y noradrenalina, aunque el mecanismo clínico exacto sigue sin aclararse.',
    recorrido: 'Se estimó que se absorbe al menos el 92 % de una dosis oral. Cerca del 45 % llega como venlafaxina a la circulación sistémica. Se recupera aproximadamente el 87 % en orina en 48 horas, como venlafaxina y varios metabolitos. Solo el 5 % corresponde a venlafaxina sin modificar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Effexor XR por vía oral.',
      ocurre: 'EFFEXOR XR libera venlafaxina de forma prolongada. La absorción es más lenta que con los comprimidos de liberación inmediata comparados en la etiqueta.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'EFFEXOR XR libera venlafaxina de forma prolongada. La absorción es más lenta que con los comprimidos de liberación inmediata comparados en la etiqueta.',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'provides a slower rate of absorption' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se estimó que se absorbe al menos el 92 % de una dosis oral. Cerca del 45 % llega como venlafaxina a la circulación sistémica.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se estimó que se absorbe al menos el 92 % de una dosis oral. Cerca del 45 % llega como venlafaxina a la circulación sistémica.',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'at least 92% of a single oral dose' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'En plasma, la unión a proteínas es del 27 % para la venlafaxina y del 30 % para su metabolito ODV.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'En plasma, la unión a proteínas es del 27 % para la venlafaxina y del 30 % para su metabolito ODV.',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'Venlafaxine is 27% and ODV is 30%' }
        }
      ],
      accion: {
        diana: 'Recaptación de serotonina y noradrenalina',
        efecto: 'Su efecto se atribuye a la inhibición de la recaptación de serotonina y noradrenalina, aunque el mecanismo clínico exacto sigue sin aclararse.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su efecto se atribuye a la inhibición de la recaptación de serotonina y noradrenalina, aunque el mecanismo clínico exacto sigue sin aclararse.',
            ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'potentiation of serotonin and norepinephrine' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'El hígado transforma una parte antes de que llegue a la circulación general. CYP2D6 participa en la formación del metabolito activo O-desmetilvenlafaxina.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'El hígado transforma una parte antes de que llegue a la circulación general. CYP2D6 participa en la formación del metabolito activo O-desmetilvenlafaxina.',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'extensive presystemic metabolism in the liver' }
        }
      ],
      simultaneo: 'Parte de esta transformación sucede mientras se incorpora el medicamento a la circulación general.',
      metabolitos: [
        {
          nombre: 'O-desmetilvenlafaxina (ODV)',
          actividad: 'activo',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'its active metabolite, ODV' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se recupera aproximadamente el 87 % en orina en 48 horas, como venlafaxina y varios metabolitos. Solo el 5 % corresponde a venlafaxina sin modificar.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se recupera aproximadamente el 87 % en orina en 48 horas, como venlafaxina y varios metabolitos. Solo el 5 % corresponde a venlafaxina sin modificar.',
          ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: 'recovered in the urine within 48 hours' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente de ODV',
      valor: '11 ± 2',
      unidad: 'h',
      ref: { f: 'dailymed-venlafaxina', sec: '12 · Farmacología clínica', cita: '11 ± 2 hours for ODV' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-venlafaxina', 'c848a5d8-ba94-4c84-80e3-0bf35fb8e32e', 'EFFEXOR XR (VENLAFAXINE HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE', 'Effexor XR', '7', '2025-07-04', '2026-11-10'),
    rengPubchem(5656, 'venlafaxine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
