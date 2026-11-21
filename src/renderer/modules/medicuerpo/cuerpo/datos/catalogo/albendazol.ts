import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'albendazol',
    nombre: 'Albendazol',
    clase: 'Antihelmíntico benzimidazólico',
    sinonimos: [ 'albendazole' ],
    formula: 'C12H15N3O2S',
    masaMolar: 265.33,
    smiles: 'CCCSC1=CC2=C(C=C1)N=C(N2)NC(=O)OC',
    inchikey: 'HXHWSAZORRCQMX-UHFFFAOYSA-N',
    cid: 2082,
    iupac: 'methyl N-(6-propylsulfanyl-1H-benzimidazol-2-yl)carbamate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'albendazol-oral',
      producto: 'ALBENZA · comprimido recubierto',
      titular: 'AMNEAL PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg',
      excipientes: [
        'carnauba wax',
        'hypromelloses',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'povidone',
        'sodium lauryl sulfate',
        'saccharin sodium monohydrate',
        'sodium starch glycolate type a potato',
        'starch, corn'
      ],
      usos: {
        t: 'Neurocisticercosis parenquimatosa e hidatidosis quística de hígado, pulmón y peritoneo según las indicaciones de la etiqueta.',
        ref: { f: 'dailymed-albendazol', sec: '1 · Indicaciones', cita: 'Treatment of parenchymal neurocysticercosis' }
      },
      fuente: 'dailymed-albendazol'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de albendazol para administración oral.',
    usos: 'Neurocisticercosis parenquimatosa e hidatidosis quística de hígado, pulmón y peritoneo según las indicaciones de la etiqueta.',
    actua: 'El efecto antihelmíntico sistémico se atribuye al sulfóxido de albendazol, formado antes de llegar a la circulación.',
    recorrido: 'Se absorbe poco. Una comida grasa aumentó la exposición plasmática al sulfóxido frente al ayuno en los estudios de la etiqueta. Menos del 1 % de la dosis se recuperó en orina como sulfóxido. Los datos de concentración en bilis sugieren que la vía biliar también contribuye.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere ALBENZA por vía oral.',
      ocurre: 'Esta presentación es un comprimido de 200 mg. La baja solubilidad acuosa del albendazol limita la cantidad disponible para absorberse.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Esta presentación es un comprimido de 200 mg. La baja solubilidad acuosa del albendazol limita la cantidad disponible para absorberse.',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'due to its low aqueous solubility' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe poco. Una comida grasa aumentó la exposición plasmática al sulfóxido frente al ayuno en los estudios de la etiqueta.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe poco. Una comida grasa aumentó la exposición plasmática al sulfóxido frente al ayuno en los estudios de la etiqueta.',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'coadministered with a fatty meal' }
        }
      ]
    },
    distribucion: {
      organos: [ 'higado' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El sulfóxido se distribuye ampliamente. Se detectó, entre otros lugares, en el líquido cefalorraquídeo, la pared de los quistes y el hígado.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El sulfóxido se distribuye ampliamente. Se detectó, entre otros lugares, en el líquido cefalorraquídeo, la pared de los quistes y el hígado.',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'cyst wall, cyst fluid, and cerebrospinal fluid' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'El efecto antihelmíntico sistémico se atribuye al sulfóxido de albendazol, formado antes de llegar a la circulación.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'El efecto antihelmíntico sistémico se atribuye al sulfóxido de albendazol, formado antes de llegar a la circulación.',
            ref: {
              f: 'dailymed-albendazol',
              sec: '12 · Farmacología clínica',
              cita: 'activity has been attributed to the primary metabolite'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'El hígado convierte rápidamente el albendazol en sulfóxido, que después se oxida a sulfona y otros productos.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'El hígado convierte rápidamente el albendazol en sulfóxido, que después se oxida a sulfona y otros productos.',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'rapidly converted in the liver' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Sulfóxido de albendazol',
          actividad: 'activo',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'activity has been attributed to the primary metabolite' }
        },
        {
          nombre: 'Sulfona de albendazol',
          actividad: 'desconocida',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'further metabolized to albendazole sulfone' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Menos del 1 % de la dosis se recuperó en orina como sulfóxido. Los datos de concentración en bilis sugieren que la vía biliar también contribuye.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Menos del 1 % de la dosis se recuperó en orina como sulfóxido. Los datos de concentración en bilis sugieren que la vía biliar también contribuye.',
          ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'less than 1% of the dose recovered' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente del sulfóxido',
      valor: '8–12',
      unidad: 'h',
      poblacion: 'Personas sanas y pacientes con hidatidosis o neurocisticercosis del estudio',
      ref: { f: 'dailymed-albendazol', sec: '12 · Farmacología clínica', cita: 'ranged from 8 hours to 12 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-albendazol', '1977a867-0ee1-44c0-8da3-fe59c48699f5', 'ALBENZA (ALBENDAZOLE) TABLET, FILM COATED', 'ALBENZA', '14', '2024-10-25', '2026-11-10'),
    rengPubchem(2082, 'albendazole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
