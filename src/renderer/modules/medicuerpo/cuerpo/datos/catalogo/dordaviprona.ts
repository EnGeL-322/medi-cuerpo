import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dordaviprona',
    nombre: 'Dordaviprona',
    clase: 'Activador de la proteasa mitocondrial ClpP y antagonista del receptor D2',
    sinonimos: [ 'dordaviprone', 'Modeyso' ],
    formula: 'C24H26N4O',
    masaMolar: 386.5,
    smiles: 'CC1=CC=CC=C1CN2C(=O)C3=C(CCN(C3)CC4=CC=CC=C4)N5C2=NCC5',
    inchikey: 'VLULRUCCHYVXOH-UHFFFAOYSA-N',
    cid: 73777259,
    iupac: '11-benzyl-7-[(2-methylphenyl)methyl]-2,5,7,11-tetrazatricyclo[7.4.0.02,6]trideca-1(9),5-dien-8-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'dordaviprona-oral',
      producto: 'MODEYSO · cápsula',
      titular: 'JAZZ PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '125 mg por cápsula, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose 112', 'sodium starch glycolate type a potato', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del glioma difuso de línea media con mutación H3 K27M en progresión tras un tratamiento previo, desde 1 año de edad.',
        ref: {
          f: 'dailymed-dordaviprona',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult and pediatric patients 1 year of age and older with diffuse midline glioma harboring an H3 K27M mutation with progressive disease following prior therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dordaviprona',
      advertencias: [
        {
          titulo: 'Hipersensibilidad',
          texto: 'Ante una hipersensibilidad o anafilaxia relevante, suspenderla de inmediato y tratar.',
          organos: [],
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '5 · Advertencias y precauciones',
            cita: 'If clinically significant hypersensitivity or anaphylaxis occur, immediately discontinue MODEYSO and initiate appropriate medical treatment and supportive care',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Vigilar el electrocardiograma y los electrolitos antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor ECGs and electrolytes prior to starting MODEYSO and then periodically during treatment as clinically indicated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): fatiga, cefalea, vómitos, náuseas y dolor musculoesquelético.',
          '34084-4',
          'The most common (≥20%) adverse reactions are fatigue, headache, vomiting, nausea, and musculoskeletal pain'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 125 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del glioma difuso de línea media con mutación H3 K27M en progresión tras un tratamiento previo, desde 1 año de edad.',
    actua: 'Activa la proteasa mitocondrial ClpP e inhibe el receptor de dopamina D2; in vitro activa la respuesta integrada al estrés y la apoptosis de las células tumorales.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1,4 horas; con una comida rica en grasas la Cmax baja un 40 % sin cambiar el AUC. Tras una dosis marcada, el 70 % se recuperó en la orina y el 20 % en las heces, sin dordaviprona inalterada relevante.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 125 mg, white, opaque, hard capsules printed with',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de 1,4 horas; con una comida rica en grasas la Cmax baja un 40 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1,4 horas; con una comida rica en grasas la Cmax baja un 40 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone median (min, max) time to maximum plasma concentration (T max ) is 1.4 hours (0.5, 5.6 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 40 % sin cambios del AUC.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone C max decreased by 40% with no change on AUC following administration with a high-fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 95-97 % a las proteínas plasmáticas; el volumen de distribución aparente es de 450 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 95-97 % a las proteínas plasmáticas; el volumen de distribución aparente es de 450 L.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone plasma protein binding is 95% to 97% and independent of concentrations in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 450 L.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone apparent (oral) volume of distribution is 450 L (40%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ClpP y receptor D2',
        efecto: 'Activa la proteasa mitocondrial ClpP e inhibe el receptor de dopamina D2; in vitro activa la respuesta integrada al estrés y la apoptosis de las células tumorales.',
        lugar: [],
        datos: [
          {
            t: 'Activa la proteasa mitocondrial ClpP e inhibe el receptor de dopamina D2; in vitro activa la respuesta integrada al estrés y la apoptosis de las células tumorales.',
            ref: {
              f: 'dailymed-dordaviprona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dordaviprone is a protease activator of the mitochondrial caseinolytic protease P (ClpP)',
              codigo: '43679-0'
            }
          },
          {
            t: 'También inhibe el receptor de dopamina D2.',
            ref: {
              f: 'dailymed-dordaviprona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dordaviprone also inhibits the dopamine D2 receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4, con contribuciones menores de otras CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4, con contribuciones menores de otras CYP.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone is primarily metabolized by CYP3A4 with minor contribution from CYP2B6, CYP2C8, CYP2C9, CYP2D6, and CYP3A5',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 70 % se recuperó en la orina y el 20 % en las heces, sin dordaviprona inalterada relevante.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 70 % se recuperó en la orina y el 20 % en las heces, sin dordaviprona inalterada relevante.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: '70% of the dose was recovered in urine and 20% in feces with no notable unchanged dordaviprone in urine or feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 11 horas y el aclaramiento aparente, de unos 27 L/h.',
          ref: {
            f: 'dailymed-dordaviprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Dordaviprone mean terminal half-life is 11 hours (30%), and the apparent clearance is approximately 27 L/hr (48%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1,4',
      unidad: 'h',
      analito: 'dordaviprona',
      ref: {
        f: 'dailymed-dordaviprona',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentration (T max ) is 1.4 hours (0.5, 5.6 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '95-97',
      unidad: '%',
      analito: 'dordaviprona',
      ref: { f: 'dailymed-dordaviprona', sec: '12.3 · Farmacocinética', cita: 'Dordaviprone plasma protein binding is 95% to 97%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '450',
      unidad: 'L',
      analito: 'dordaviprona',
      ref: {
        f: 'dailymed-dordaviprona',
        sec: '12.3 · Farmacocinética',
        cita: 'Dordaviprone apparent (oral) volume of distribution is 450 L (40%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '11',
      unidad: 'h',
      analito: 'dordaviprona',
      ref: { f: 'dailymed-dordaviprona', sec: '12.3 · Farmacocinética', cita: 'Dordaviprone mean terminal half-life is 11 hours (30%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '27 (aprox.)',
      unidad: 'L/h',
      analito: 'dordaviprona',
      ref: { f: 'dailymed-dordaviprona', sec: '12.3 · Farmacocinética', cita: 'the apparent clearance is approximately 27 L/hr (48%)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-dordaviprona', sec: '12.3 · Farmacocinética', cita: '70% of the dose was recovered in urine and 20% in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dordaviprona', 'ad45b43e-fdef-47ad-9c34-055b41bdc576', 'MODEYSO (DORDAVIPRONE) CAPSULE', 'MODEYSO', '2', '2026-01-12', '2026-11-19'),
    rengPubchem(73777259, 'dordaviprone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
