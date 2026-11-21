import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vimseltinib',
    nombre: 'Vimseltinib',
    clase: 'Inhibidor del receptor 1 del factor estimulante de colonias (CSF1R)',
    sinonimos: [ 'vimseltinib', 'Romvimza' ],
    formula: 'C23H25N7O2',
    masaMolar: 431.5,
    smiles: 'CC1=C(C=CC(=N1)C2=CN=C(N(C2=O)C)NC(C)C)OC3=CC(=NC=C3)C4=CN(N=C4)C',
    inchikey: 'TVGAHWWPABTBCX-UHFFFAOYSA-N',
    cid: 86267612,
    iupac: '3-methyl-5-[6-methyl-5-[[2-(1-methylpyrazol-4-yl)-4-pyridinyl]oxy]-2-pyridinyl]-2-(propan-2-ylamino)pyrimidin-4-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vimseltinib-oral',
      producto: 'ROMVIMZA · cápsula',
      titular: 'DECIPHERA PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '14 mg, 20 mg o 30 mg por cápsula, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'crospovidone', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del tumor tenosinovial de células gigantes sintomático en adultos cuando la cirugía empeoraría la función o causaría morbilidad grave.',
        ref: {
          f: 'dailymed-vimseltinib',
          sec: '1 · Indicaciones',
          cita: 'indicated for treatment of adult patients with symptomatic tenosynovial giant cell tumor (TGCT) for which surgical resection will potentially cause worsening functional limitation or severe morbidity',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vimseltinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Evitarlo con transaminasas o bilirrubina elevadas o con enfermedad hepática o biliar activa; hacer pruebas hepáticas antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid ROMVIMZA in patients with pre-existing increased serum transaminases; total bilirubin or direct bilirubin (>ULN); or active liver or biliary tract disease, including ALP',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la creatinina sin afectar a la función renal',
          texto: 'Valorar la función renal con medidas que no se basen en la creatinina sérica.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use alternative measures that are not based on serum creatinine to assess renal function',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con laboratorio): aumento de AST, edema periorbitario, fatiga, exantema, aumento del colesterol, edema periférico y facial, entre otras.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%), including laboratory abnormalities are increased AST, periorbital edema, fatigue, rash, increased cholesterol, peripheral edema, face edema'
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
    contiene: 'Cápsula: 14 mg, 20 mg o 30 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del tumor tenosinovial de células gigantes sintomático en adultos cuando la cirugía empeoraría la función o causaría morbilidad grave.',
    actua: 'Inhibe el receptor del factor estimulante de colonias 1 (CSF1R): bloquea su autofosforilación, su señal y la proliferación de las células que lo expresan.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición. Tras una dosis marcada, alrededor del 43 % se recuperó en las heces (9,1 % sin cambios) y el 38 % en la orina (5,1 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Orange cap, white body size 4 capsule imprinted with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1 hora; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vimseltinib median time to C max (T max ) is 1 hour (0.5 to 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes frente al ayuno.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in vimseltinib pharmacokinetics were observed following administration of a high-fat meal',
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
      ocurre: 'Se une en un 96,5 % a las proteínas plasmáticas; el volumen de distribución aparente es de 90 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96,5 % a las proteínas plasmáticas; el volumen de distribución aparente es de 90 L.',
          ref: { f: 'dailymed-vimseltinib', sec: '12.3 · Farmacocinética', cita: 'Vimseltinib is 96.5% bound to human plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de 90 L.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vimseltinib volume of distribution (V/F) is 90 L (16%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'CSF1R',
        efecto: 'Inhibe el receptor del factor estimulante de colonias 1 (CSF1R): bloquea su autofosforilación, su señal y la proliferación de las células que lo expresan.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe el receptor del factor estimulante de colonias 1 (CSF1R): bloquea su autofosforilación, su señal y la proliferación de las células que lo expresan.',
            ref: {
              f: 'dailymed-vimseltinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vimseltinib is a kinase inhibitor that inhibits colony-stimulating factor 1 receptor (CSF1R)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por oxidación, N-desmetilación y N-desalquilación; no se espera que las enzimas CYP450 tengan un papel importante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por oxidación, N-desmetilación y N-desalquilación; no se espera que las enzimas CYP450 tengan un papel importante.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vimseltinib is primarily metabolized by oxidation, N -demethylation, and N -dealkylation',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se espera que las enzimas CYP450 tengan un papel importante en su metabolismo.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP450 enzymes are not anticipated to play a major role in the metabolism of vimseltinib',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 43 % se recuperó en las heces (9,1 % sin cambios) y el 38 % en la orina (5,1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 43 % se recuperó en las heces (9,1 % sin cambios) y el 38 % en la orina (5,1 % sin cambios).',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 43% of the dose was recovered in feces (9.1% unchanged) and 38% in urine (5.1% unchanged) after a single radiolabeled dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unos 6 días y el aclaramiento, de 0,5 L/h.',
          ref: {
            f: 'dailymed-vimseltinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vimseltinib elimination half-life (t 1/2 ) is approximately 6 days (32%) with a clearance (CL/F) of 0.5 L/h (23%)',
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
      valor: '1',
      unidad: 'h',
      analito: 'vimseltinib',
      ref: {
        f: 'dailymed-vimseltinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Vimseltinib median time to C max (T max ) is 1 hour (0.5 to 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96,5',
      unidad: '%',
      analito: 'vimseltinib',
      ref: { f: 'dailymed-vimseltinib', sec: '12.3 · Farmacocinética', cita: 'Vimseltinib is 96.5% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '90',
      unidad: 'L',
      analito: 'vimseltinib',
      ref: { f: 'dailymed-vimseltinib', sec: '12.3 · Farmacocinética', cita: 'Vimseltinib volume of distribution (V/F) is 90 L (16%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '6 (aprox.)',
      unidad: 'días',
      analito: 'vimseltinib',
      ref: {
        f: 'dailymed-vimseltinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Vimseltinib elimination half-life (t 1/2 ) is approximately 6 days (32%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '0,5',
      unidad: 'L/h',
      analito: 'vimseltinib',
      ref: { f: 'dailymed-vimseltinib', sec: '12.3 · Farmacocinética', cita: 'with a clearance (CL/F) of 0.5 L/h (23%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '43 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-vimseltinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 43% of the dose was recovered in feces (9.1% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vimseltinib', 'f73c7a62-9601-4df0-810f-100f515d79ea', 'ROMVIMZA (VIMSELTINIB) CAPSULE', 'ROMVIMZA', '3', '2026-07-01', '2026-11-19'),
    rengPubchem(86267612, 'vimseltinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
