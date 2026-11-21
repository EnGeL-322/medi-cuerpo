import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ribavirina',
    nombre: 'Ribavirina',
    clase: 'Antivírico análogo de nucleósido',
    sinonimos: [ 'ribavirin' ],
    formula: 'C8H12N4O5',
    masaMolar: 244.2,
    smiles: 'C1=NC(=NN1[C@H]2[C@@H]([C@@H]([C@H](O2)CO)O)O)C(=O)N',
    inchikey: 'IWUCXVSUMQZMFG-AFCXAGJDSA-N',
    cid: 37542,
    iupac: '1-[(2R,3R,4S,5R)-3,4-dihydroxy-5-(hydroxymethyl)oxolan-2-yl]-1,2,4-triazole-3-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'ribavirina-oral',
      producto: 'Ribavirin · cápsula',
      titular: 'AUROBINDO PHARMA LIMITED',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'povidone k30',
        'magnesium stearate',
        'titanium dioxide',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de la hepatitis C crónica con enfermedad hepática compensada, en combinación con interferón alfa-2b, desde los 3 años.',
        ref: {
          f: 'dailymed-ribavirina',
          sec: '1 · Indicaciones',
          cita: 'Ribavirin capsules are a nucleoside analogue indicated in combination with interferon alfa-2b (pegylated and nonpegylated) for the treatment of Chronic Hepatitis C (CHC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ribavirina',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Tiene efectos teratógenos y embriocidas en todas las especies animales; contraindicada en el embarazo y en la pareja masculina de una embarazada.',
          organos: [],
          ref: {
            f: 'dailymed-ribavirina',
            sec: 'Advertencia destacada',
            cita: 'Significant teratogenic and embryocidal effects have been demonstrated in all animal species exposed to ribavirin',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Anemia hemolítica',
          texto: 'Puede producirse una anemia hemolítica con una caída inicial importante de la hemoglobina.',
          organos: [],
          ref: {
            f: 'dailymed-ribavirina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hemolytic anemia may occur with a significant initial drop in hemoglobin',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Infiltrados o alteración de la función pulmonar',
          texto: 'Vigilar de cerca; puede requerir reducir la dosis o suspender.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-ribavirina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pulmonary infiltrates or pulmonary function impairment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos con ribavirina e interferón, las más frecuentes (40 % o más): reacción en el lugar de inyección, fatiga o astenia, cefalea, escalofríos, fiebre, náuseas, mialgia y ansiedad o irritabilidad.',
          '34084-4',
          'Most common adverse reactions (40% or greater) in adult patients receiving ribavirin/PegIntron or INTRON A combination therapy are injection site reaction, fatigue/asthenia, headache, rigors, fevers, nausea, myalgia'
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
    contiene: 'Cápsula: 200 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hepatitis C crónica con enfermedad hepática compensada, en combinación con interferón alfa-2b, desde los 3 años.',
    actua: 'No se conoce del todo su contribución clínica: tiene actividad antivírica directa frente a muchos virus ARN, aumenta su frecuencia de mutación y su trifosfato inhibe la polimerasa del VHC.',
    recorrido: 'Se absorbe rápido y ampliamente, pero por el primer paso la biodisponibilidad absoluta media es del 64 %. La ribavirina y sus metabolitos se excretan por vía renal: tras 600 mg marcados, el 61 % se eliminó en la orina y el 12 % en las heces en 336 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '3 · Formas y concentraciones',
            cita: 'Ribavirin Capsules USP, 200 mg are white/white, size ‘1’ hard gelatin capsule',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'higado' ],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y ampliamente, pero por el primer paso la biodisponibilidad absoluta media es del 64 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y ampliamente, pero por el primer paso la biodisponibilidad absoluta media es del 64 %.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ribavirin was rapidly and extensively absorbed following oral administration. However, due to first-pass metabolism, the absolute bioavailability averaged 64% (44%)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'No se une a las proteínas plasmáticas; entra en compartimentos no plasmáticos, sobre todo los glóbulos rojos, mediante un transportador de nucleósidos, lo que explica su gran volumen de distribución.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se une a las proteínas plasmáticas; entra en compartimentos no plasmáticos, sobre todo los glóbulos rojos, mediante un transportador de nucleósidos, lo que explica su gran volumen de distribución.',
          ref: { f: 'dailymed-ribavirina', sec: '12.3 · Farmacocinética', cita: 'Ribavirin does not bind to plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Su transporte a compartimentos no plasmáticos se ha estudiado sobre todo en los glóbulos rojos.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ribavirin transport into nonplasma compartments has been most extensively studied in red blood cells',
            codigo: '43682-4'
          },
          poblacion: 'sangre'
        }
      ],
      accion: {
        diana: 'Polimerasa del VHC',
        efecto: 'No se conoce del todo su contribución clínica: tiene actividad antivírica directa frente a muchos virus ARN, aumenta su frecuencia de mutación y su trifosfato inhibe la polimerasa del VHC.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'No se conoce del todo su contribución clínica: tiene actividad antivírica directa frente a muchos virus ARN, aumenta su frecuencia de mutación y su trifosfato inhibe la polimerasa del VHC.',
            ref: {
              f: 'dailymed-ribavirina',
              sec: '12 · Farmacología clínica',
              cita: 'Ribavirin increases the mutation frequency in the genomes of several RNA viruses and ribavirin triphosphate inhibits HCV polymerase in a biochemical reaction',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tiene dos vías: una fosforilación reversible en células nucleadas y una vía degradativa por desribosilación e hidrólisis de amida a un ácido triazol carboxílico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tiene dos vías: una fosforilación reversible en células nucleadas y una vía degradativa por desribosilación e hidrólisis de amida a un ácido triazol carboxílico.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ribavirin has two pathways of metabolism: (i) a reversible phosphorylation pathway in nucleated cells',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La ribavirina y sus metabolitos se excretan por vía renal: tras 600 mg marcados, el 61 % se eliminó en la orina y el 12 % en las heces en 336 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La ribavirina y sus metabolitos se excretan por vía renal: tras 600 mg marcados, el 61 % se eliminó en la orina y el 12 % en las heces en 336 horas.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 61% and 12% of the radioactivity was eliminated in the urine and feces, respectively, in 336 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras suspenderla, la semivida media fue de 298 horas, probablemente por su lenta salida de compartimentos no plasmáticos.',
          ref: {
            f: 'dailymed-ribavirina',
            sec: '12.3 · Farmacocinética',
            cita: 'Upon discontinuation of dosing, the mean half-life was 298 (30%) hours, which probably reflects slow elimination from nonplasma compartments',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '64',
      unidad: '%',
      analito: 'ribavirina',
      ref: { f: 'dailymed-ribavirina', sec: '12.3 · Farmacocinética', cita: 'the absolute bioavailability averaged 64% (44%)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '0',
      unidad: '%',
      analito: 'ribavirina',
      ref: { f: 'dailymed-ribavirina', sec: '12.3 · Farmacocinética', cita: 'Ribavirin does not bind to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media tras dosis múltiples',
      valor: '298',
      unidad: 'h',
      analito: 'ribavirina',
      condiciones: 'dosis múltiples',
      ref: {
        f: 'dailymed-ribavirina',
        sec: '12.3 · Farmacocinética',
        cita: 'Upon discontinuation of dosing, the mean half-life was 298 (30%) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad eliminada en la orina en 336 h',
      valor: '61 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada de 600 mg',
      ref: {
        f: 'dailymed-ribavirina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 61% and 12% of the radioactivity was eliminated in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ribavirina', '35f99f76-f2ef-4a81-91ff-285419664be3', 'RIBAVIRIN CAPSULE', 'Ribavirin', '21', '2024-02-07', '2026-11-19'),
    rengPubchem(37542, 'ribavirin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
