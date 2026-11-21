import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fedratinib',
    nombre: 'Fedratinib',
    clase: 'Inhibidor selectivo de JAK2 y FLT3',
    sinonimos: [ 'fedratinib hydrochloride', 'Inrebic' ],
    formula: 'C27H36N6O3S',
    masaMolar: 524.7,
    smiles: 'CC1=CN=C(N=C1NC2=CC(=CC=C2)S(=O)(=O)NC(C)(C)C)NC3=CC=C(C=C3)OCCN4CCCC4',
    inchikey: 'JOOXLOJCABQBSG-UHFFFAOYSA-N',
    cid: 16722836,
    iupac: 'N-tert-butyl-3-[[5-methyl-2-[4-(2-pyrrolidin-1-ylethoxy)anilino]pyrimidin-4-yl]amino]benzenesulfonamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'fedratinib-oral',
      producto: 'Inrebic · cápsula',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Diclorhidrato de fedratinib monohidrato',
        ref: { f: 'dailymed-fedratinib', sec: '11 · Descripción', cita: 'benzenesulfonamide dihydrochloride monohydrate', codigo: '34089-3' }
      },
      excipientes: [ 'silicon dioxide', 'microcrystalline cellulose', 'sodium stearyl fumarate', 'gelatin, unspecified', 'ferric oxide red', 'titanium dioxide' ],
      usos: {
        t: 'Tratamiento de adultos con mielofibrosis primaria o secundaria de riesgo intermedio-2 o alto.',
        ref: {
          f: 'dailymed-fedratinib',
          sec: '1 · Indicaciones',
          cita: 'INREBIC ® is indicated for the treatment of adult patients with intermediate-2 or high-risk primary or secondary (post-polycythemia vera or post-essential thrombocythemia) myelofibrosis (MF)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fedratinib',
      advertencias: [
        {
          titulo: 'Encefalopatía, incluida la de Wernicke',
          texto: 'Se han producido encefalopatías graves y mortales; medir la tiamina antes de empezar y dar tiamina oral profiláctica.',
          organos: [],
          ref: {
            f: 'dailymed-fedratinib',
            sec: 'Advertencia destacada',
            cita: "Serious and fatal encephalopathy, including Wernicke's, has occurred in patients treated with INREBIC",
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Anemia y trombocitopenia',
          texto: 'Tratarlas reduciendo o interrumpiendo la dosis o con transfusión.',
          organos: [],
          ref: {
            f: 'dailymed-fedratinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Anemia and Thrombocytopenia: Manage by dose reduction, interruption, or transfusion',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Uveítis',
          texto: 'Vigilar los síntomas y derivar a valoración oftalmológica.',
          organos: [],
          ref: {
            f: 'dailymed-fedratinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Uveitis: Monitor for symptoms and refer for ophthalmological evaluation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más) son diarrea, náuseas, anemia y vómitos.',
          '34084-4',
          'most common adverse reactions (≥20%) are diarrhea, nausea, anemia, and vomiting'
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
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta; el activo va como diclorhidrato de fedratinib monohidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con mielofibrosis primaria o secundaria de riesgo intermedio-2 o alto.',
    actua: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada y frente a FLT3, con mayor actividad sobre JAK2 que sobre JAK1, JAK3 y TYK2; reduce la fosforilación de STAT3/5.',
    recorrido: 'Con 400 mg diarios la mediana del tmax en estado estacionario es de 3 horas; las comidas aumentan poco el AUC (hasta un 24 %). Tras una dosis marcada, el 77 % se excretó en las heces (23 % sin cambios) y el 5 % en la orina (3 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '11 · Descripción',
            cita: 'The capsule shell contains gelatin, red iron oxide, titanium dioxide and white ink',
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
      ocurre: 'Con 400 mg diarios la mediana del tmax en estado estacionario es de 3 horas; las comidas aumentan poco el AUC (hasta un 24 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 400 mg diarios la mediana del tmax en estado estacionario es de 3 horas; las comidas aumentan poco el AUC (hasta un 24 %).',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following 400 mg once daily, fedratinib median time to peak concentrations (T max ) at steady-state is 3 hours (range: 2 to 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las comidas aumentaron el AUC hasta un 24 % y la Cmax hasta un 14 %.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'meal increased area under the curve over time to infinity (AUC inf ) up to 24% and C max up to 14%',
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
      ocurre: 'Se une en un 92 % o más a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 1 770 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 92 % o más a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 1 770 L.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Fedratinib is 92% or greater bound to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 1 770 L en mielofibrosis.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of fedratinib at steady-state is 1770 L in patients with myelofibrosis',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con mielofibrosis'
        }
      ],
      accion: {
        diana: 'JAK2 y FLT3',
        efecto: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada y frente a FLT3, con mayor actividad sobre JAK2 que sobre JAK1, JAK3 y TYK2; reduce la fosforilación de STAT3/5.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada y frente a FLT3, con mayor actividad sobre JAK2 que sobre JAK1, JAK3 y TYK2; reduce la fosforilación de STAT3/5.',
            ref: {
              f: 'dailymed-fedratinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Fedratinib is an oral kinase inhibitor with activity against wild type and mutationally activated Janus Associated Kinase 2 (JAK2) and FMS-like tyrosine kinase 3 (FLT3)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por la CYP3A4, la CYP2C19 y la FMO3; el fármaco original supone alrededor del 80 % del material circulante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por la CYP3A4, la CYP2C19 y la FMO3; el fármaco original supone alrededor del 80 % del material circulante.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Fedratinib is metabolized by CYP3A4, CYP2C19, and flavin-containing monooxygenase 3 (FMO3)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 77 % se excretó en las heces (23 % sin cambios) y el 5 % en la orina (3 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 77 % se excretó en las heces (23 % sin cambios) y el 5 % en la orina (3 % sin cambios).',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: '77% (23% unchanged) of the administered dose was excreted in feces and 5% (3% unchanged) was eliminated in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La disposición es bifásica, con una semivida efectiva de 41 horas y una terminal de unas 114 horas.',
          ref: {
            f: 'dailymed-fedratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'an effective half-life of 41 hours, a terminal half-life of approximately 114 hours',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con mielofibrosis'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en estado estacionario',
      valor: '3',
      unidad: 'h',
      analito: 'fedratinib',
      poblacion: 'pacientes con mielofibrosis',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-fedratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'fedratinib median time to peak concentrations (T max ) at steady-state is 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 92',
      unidad: '%',
      analito: 'fedratinib',
      ref: {
        f: 'dailymed-fedratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Fedratinib is 92% or greater bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '1770',
      unidad: 'L',
      analito: 'fedratinib',
      poblacion: 'pacientes con mielofibrosis',
      ref: {
        f: 'dailymed-fedratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of fedratinib at steady-state is 1770 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '41',
      unidad: 'h',
      analito: 'fedratinib',
      poblacion: 'pacientes con mielofibrosis',
      ref: { f: 'dailymed-fedratinib', sec: '12.3 · Farmacocinética', cita: 'an effective half-life of 41 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '13',
      unidad: 'L/h',
      analito: 'fedratinib',
      poblacion: 'pacientes con mielofibrosis',
      ref: {
        f: 'dailymed-fedratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent clearance (CL/F) (%CV) of 13 L/hr (51%) in patients with myelofibrosis',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '77',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-fedratinib',
        sec: '12.3 · Farmacocinética',
        cita: '77% (23% unchanged) of the administered dose was excreted in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fedratinib', 'f0f55a2a-4e0c-4cba-8571-03e1424486d7', 'INREBIC (FEDRATINIB HYDROCHLORIDE) CAPSULE', 'Inrebic', '12', '2026-08-03', '2026-11-19'),
    rengPubchem(16722836, 'fedratinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
