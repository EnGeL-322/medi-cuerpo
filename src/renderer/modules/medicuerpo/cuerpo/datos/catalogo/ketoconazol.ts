import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ketoconazol',
    nombre: 'Ketoconazol',
    clase: 'Antifúngico azólico',
    sinonimos: [ 'ketoconazole' ],
    formula: 'C26H28Cl2N4O4',
    masaMolar: 531.4,
    smiles: 'CC(=O)N1CCN(CC1)C2=CC=C(C=C2)OC[C@@H]3CO[C@@](O3)(CN4C=CN=C4)C5=C(C=C(C=C5)Cl)Cl',
    inchikey: 'XMAYWYJOQHXEEK-ZEQKJWHPSA-N',
    cid: 47576,
    iupac: '1-[4-[4-[[(2S,4R)-2-(2,4-dichlorophenyl)-2-(imidazol-1-ylmethyl)-1,3-dioxolan-4-yl]methoxy]phenyl]piperazin-1-yl]ethanone',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'ketoconazol-oral',
      producto: 'KETOCONAZOLE · comprimido',
      titular: 'STRIDES PHARMA SCIENCE LIMITED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg por comprimido, según la etiqueta',
      excipientes: [ 'starch, corn', 'lactose monohydrate', 'magnesium stearate', 'cellulose, microcrystalline', 'povidone k30', 'silicon dioxide' ],
      usos: {
        t: 'Tratamiento de infecciones fúngicas sistémicas (blastomicosis, coccidioidomicosis, histoplasmosis, cromomicosis y paracoccidioidomicosis) en pacientes que han fracasado con otros tratamientos o no los toleran.',
        ref: {
          f: 'dailymed-ketoconazol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of the following systemic fungal infections in patients who have failed or who are intolerant to other therapies',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ketoconazol',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Ha ocurrido hepatotoxicidad grave, con casos mortales o que requirieron trasplante de hígado, con el uso del ketoconazol oral.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ketoconazol',
            sec: 'Advertencias',
            cita: 'Serious hepatotoxicity, including cases with a fatal outcome or requiring liver transplantation, has occurred with the use of oral ketoconazole',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Uso restringido',
          texto: 'Solo debe usarse cuando no hay otro tratamiento antifúngico eficaz disponible o tolerado y los beneficios superan los riesgos.',
          organos: [ 'higado', 'sitio-infeccion' ],
          ref: {
            f: 'dailymed-ketoconazol',
            sec: 'Advertencia destacada',
            cita: 'Ketoconazole tablets should be used only when other effective antifungal therapy is not available or tolerated',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Entre los trastornos del sistema nervioso registrados en los ensayos figuran cefalea, mareo, parestesia y somnolencia.',
          '34084-4',
          'Nervous System Disorders: headache, dizziness, paresthesia, somnolence'
        ],
        [
          'Entre los trastornos del sistema inmunitario se registró la reacción anafilactoide.',
          '34084-4',
          'Immune System Disorders: anaphylactoid reaction'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de infecciones fúngicas sistémicas (blastomicosis, coccidioidomicosis, histoplasmosis, cromomicosis y paracoccidioidomicosis) en pacientes que han fracasado con otros tratamientos o no los toleran.',
    actua: 'Bloquea la síntesis de ergosterol, componente clave de la membrana de la célula fúngica, al inhibir la enzima dependiente del citocromo P-450 lanosterol 14α-desmetilasa.',
    recorrido: 'Es una base dibásica débil, por lo que necesita acidez para disolverse y absorberse. Alrededor del 13 % de la dosis sale por la orina (2 % a 4 % como fármaco inalterado); la vía principal es la bilis hacia el intestino, con cerca del 57 % excretado en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '11 · Descripción',
            cita: 'Each tablet, for oral administration, contains 200 mg ketoconazole, USP base',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Es una base dibásica débil, por lo que necesita acidez para disolverse y absorberse.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Es una base dibásica débil, por lo que necesita acidez para disolverse y absorberse.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Ketoconazole is a weak dibasic agent and thus requires acidity for dissolution and absorption',
            codigo: '34090-1'
          }
        },
        {
          t: 'Tras una dosis única de 200 mg con una comida, las concentraciones plasmáticas máximas medias, de unos 3,5 mcg/mL, se alcanzan entre 1 y 2 horas.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Mean peak plasma concentrations of approximately 3.5 mcg/mL are reached within 1 to 2 hours, following oral administration of a single 200 mg dose taken with a meal',
            codigo: '34090-1'
          }
        },
        {
          t: 'La biodisponibilidad oral es máxima si los comprimidos se toman con una comida.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Oral bioavailability is maximal when the tablets are taken with a meal',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro, la unión a proteínas del plasma es de alrededor del 99 %, sobre todo a la albúmina; se distribuye ampliamente por los tejidos, pero solo una proporción insignificante llega al líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la unión a proteínas del plasma es de alrededor del 99 %, sobre todo a la albúmina; se distribuye ampliamente por los tejidos, pero solo una proporción insignificante llega al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'In vitro , the plasma protein binding is about 99% mainly to the albumin fraction',
            codigo: '34090-1'
          }
        },
        {
          t: 'Se distribuye ampliamente por los tejidos, pero solo una proporción insignificante llega al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Ketoconazole is widely distributed into tissues; however, only a negligible proportion reaches the cerebrospinal fluid',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Lanosterol 14α-desmetilasa (enzima fúngica)',
        efecto: 'Bloquea la síntesis de ergosterol, componente clave de la membrana de la célula fúngica, al inhibir la enzima dependiente del citocromo P-450 lanosterol 14α-desmetilasa.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Bloquea la síntesis de ergosterol, componente clave de la membrana de la célula fúngica, al inhibir la enzima dependiente del citocromo P-450 lanosterol 14α-desmetilasa.',
            ref: {
              f: 'dailymed-ketoconazol',
              sec: '12 · Farmacología clínica',
              cita: 'Ketoconazole blocks the synthesis of ergosterol, a key component of the fungal cell membrane, through the inhibition of cytochrome P-450 dependent enzyme lanosterol 14α-demethylase',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras la absorción en el tubo digestivo, los comprimidos se convierten en varios metabolitos inactivos; la CYP3A4 es la enzima principal del metabolismo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras la absorción en el tubo digestivo, los comprimidos se convierten en varios metabolitos inactivos; la CYP3A4 es la enzima principal del metabolismo.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'CYP3A4 is the major enzyme involved in the metabolism of ketoconazole',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Varios metabolitos',
          actividad: 'inactivo',
          nota: 'Metabolitos inactivos, por oxidación y degradación de los anillos de imidazol y piperazina.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'ketoconazole tablets are converted into several inactive metabolites',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 13 % de la dosis sale por la orina (2 % a 4 % como fármaco inalterado); la vía principal es la bilis hacia el intestino, con cerca del 57 % excretado en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 13 % de la dosis sale por la orina (2 % a 4 % como fármaco inalterado); la vía principal es la bilis hacia el intestino, con cerca del 57 % excretado en las heces.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 13% of the dose is excreted in the urine, of which 2 to 4% is unchanged drug. The major route of excretion is through the bile into the intestinal tract with about 57% being excreted in the feces',
            codigo: '34090-1'
          }
        },
        {
          t: 'La eliminación del plasma es bifásica, con una semivida de 2 horas durante las primeras 10 horas y de 8 horas después.',
          ref: {
            f: 'dailymed-ketoconazol',
            sec: '12 · Farmacología clínica',
            cita: 'Elimination from plasma is biphasic with a half-life of 2 hours during the first 10 hours and 8 hours thereafter',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-2',
      unidad: 'h',
      analito: 'ketoconazol',
      condiciones: 'dosis única de 200 mg con una comida',
      ref: {
        f: 'dailymed-ketoconazol',
        sec: '12 · Farmacología clínica',
        cita: 'Mean peak plasma concentrations of approximately 3.5 mcg/mL are reached within 1 to 2 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'ketoconazol',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-ketoconazol',
        sec: '12 · Farmacología clínica',
        cita: 'the plasma protein binding is about 99% mainly to the albumin fraction',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación tras las primeras 10 horas',
      valor: '8',
      unidad: 'h',
      analito: 'ketoconazol',
      ref: {
        f: 'dailymed-ketoconazol',
        sec: '12 · Farmacología clínica',
        cita: 'Elimination from plasma is biphasic with a half-life of 2 hours during the first 10 hours and 8 hours thereafter',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '13 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ketoconazol y metabolitos',
      ref: {
        f: 'dailymed-ketoconazol',
        sec: '12 · Farmacología clínica',
        cita: 'Approximately 13% of the dose is excreted in the urine',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces',
      valor: '57 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ketoconazol y metabolitos',
      ref: { f: 'dailymed-ketoconazol', sec: '12 · Farmacología clínica', cita: 'about 57% being excreted in the feces', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ketoconazol', '6d4be760-c723-4f54-a854-12c61cf91703', 'KETOCONAZOLE TABLET', 'KETOCONAZOLE', '8', '2026-02-09', '2026-11-15'),
    rengPubchem(47576, 'ketoconazole', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
