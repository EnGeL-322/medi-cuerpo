import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cabozantinib',
    nombre: 'Cabozantinib',
    clase: 'Inhibidor multicinasa (MET, VEGFR, AXL, RET)',
    sinonimos: [ 'cabozantinib s-malate', 'Cabometyx' ],
    formula: 'C28H24FN3O5',
    masaMolar: 501.5,
    smiles: 'COC1=CC2=C(C=CN=C2C=C1OC)OC3=CC=C(C=C3)NC(=O)C4(CC4)C(=O)NC5=CC=C(C=C5)F',
    inchikey: 'ONIQOQHATWINJY-UHFFFAOYSA-N',
    cid: 25102847,
    iupac: "1-N-[4-(6,7-dimethoxyquinolin-4-yl)oxyphenyl]-1-N'-(4-fluorophenyl)cyclopropane-1,1-dicarboxamide",
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'cabozantinib-oral',
      producto: 'CABOMETYX · comprimido',
      titular: 'EXELIXIS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '60 mg, 40 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: '(S)-Malato de cabozantinib',
        ref: { f: 'dailymed-cabozantinib', sec: '11 · Descripción', cita: 'CABOMETYX is the ( S )-malate salt of cabozantinib', codigo: '34089-3' }
      },
      excipientes: [
        'cellulose, microcrystalline',
        'anhydrous lactose',
        'hydroxypropyl cellulose (1600000 wamw)',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'hypromelloses',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento del carcinoma de células renales avanzado y de otros tumores sólidos que recoge la etiqueta.',
        ref: {
          f: 'dailymed-cabozantinib',
          sec: '1 · Indicaciones',
          cita: 'CABOMETYX is a kinase inhibitor indicated for the treatment of patients with advanced renal cell carcinoma (RCC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cabozantinib',
      advertencias: [
        {
          titulo: 'Hemorragia',
          texto: 'No administrarlo si hay antecedentes recientes de hemorragia.',
          organos: [],
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hemorrhage: Do not administer CABOMETYX if recent history of hemorrhage',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Perforaciones y fístulas',
          texto: 'Vigilar los síntomas; suspender ante una fístula o perforación de grado 4.',
          organos: [],
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue CABOMETYX for Grade 4 fistula or perforation',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión y crisis hipertensiva',
          texto: 'Vigilar la presión arterial con regularidad; suspender en una crisis hipertensiva.',
          organos: [],
          ref: { f: 'dailymed-cabozantinib', sec: '5 · Advertencias y precauciones', cita: 'Monitor blood pressure regularly', codigo: '43685-7' }
        },
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'Vigilar los signos y síntomas de insuficiencia cardíaca durante el tratamiento.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiac Failure: Monitor patients for signs and symptoms of cardiac failure throughout treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con nivolumab, las más frecuentes (20 % o más): diarrea, fatiga, hepatotoxicidad, eritrodisestesia palmoplantar, estomatitis, exantema, hipertensión, hipotiroidismo y dolor musculoesquelético, entre otras.',
          '34084-4',
          'most common adverse reactions reported in ≥20% of patients treated with CABOMETYX and nivolumab were diarrhea, fatigue, hepatotoxicity, PPE, stomatitis, rash, hypertension, hypothyroidism, musculoskeletal pain'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 60 mg, 40 mg o 20 mg por comprimido, según la etiqueta; el activo va como (S)-Malato de cabozantinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del carcinoma de células renales avanzado y de otros tumores sólidos que recoge la etiqueta.',
    actua: 'Inhibe la actividad tirosina cinasa de MET, VEGFR-1, -2 y -3, AXL, RET, ROS1, TYRO3, MER, KIT, TRKB, FLT-3 y TIE-2, implicados en la oncogénesis, la metástasis y la angiogénesis tumoral.',
    recorrido: 'La mediana del tmax es de 3 a 4 horas; con una cápsula, una comida grasa aumentó la Cmax un 41 % y el AUC un 57 %. Tras una dosis marcada se recuperó el 81 % en 48 días: el 54 % en las heces y el 27 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '3 · Formas y concentraciones',
            cita: '60 mg: yellow film-coated, oval shaped with no score',
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
      ocurre: 'La mediana del tmax es de 3 a 4 horas; con una cápsula, una comida grasa aumentó la Cmax un 41 % y el AUC un 57 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 3 a 4 horas; con una cápsula, una comida grasa aumentó la Cmax un 41 % y el AUC un 57 %.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Median time to peak cabozantinib concentrations (T max ) ranged from 3 to 4 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una formulación en cápsula, una comida rica en grasas aumentó la Cmax un 41 % y el AUC un 57 %.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Cabozantinib C max and AUC increased by 41% and 57%, respectively, following a high-fat meal relative to fasted conditions',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99,7 % o más a las proteínas del plasma humano; el volumen de distribución oral es de unos 319 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,7 % o más a las proteínas del plasma humano; el volumen de distribución oral es de unos 319 L.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Cabozantinib is highly protein bound in human plasma (≥99.7%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución oral de unos 319 L.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral volume of distribution (V z /F) of cabozantinib is approximately 319 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'MET, VEGFR, AXL, RET',
        efecto: 'Inhibe la actividad tirosina cinasa de MET, VEGFR-1, -2 y -3, AXL, RET, ROS1, TYRO3, MER, KIT, TRKB, FLT-3 y TIE-2, implicados en la oncogénesis, la metástasis y la angiogénesis tumoral.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la actividad tirosina cinasa de MET, VEGFR-1, -2 y -3, AXL, RET, ROS1, TYRO3, MER, KIT, TRKB, FLT-3 y TIE-2, implicados en la oncogénesis, la metástasis y la angiogénesis tumoral.',
            ref: {
              f: 'dailymed-cabozantinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'cabozantinib inhibits the tyrosine kinase activity of MET, VEGFR-1, -2 and -3, AXL, RET, ROS1, TYRO3, MER, KIT, TRKB, FLT-3, and TIE-2',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Es sustrato de la CYP3A4 in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Es sustrato de la CYP3A4 in vitro.',
          ref: { f: 'dailymed-cabozantinib', sec: '12.3 · Farmacocinética', cita: 'Cabozantinib is a substrate of CYP3A4 in vitro', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada se recuperó el 81 % en 48 días: el 54 % en las heces y el 27 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada se recuperó el 81 % en 48 días: el 54 % en las heces y el 27 % en la orina.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 54% was recovered in feces and 27% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal prevista es de unas 99 horas y el aclaramiento de 2,2 L/h.',
          ref: {
            f: 'dailymed-cabozantinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The predicted terminal half-life is approximately 99 hours and the clearance (CL/F) at steady-state is estimated to be 2.2 L/hr',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '3-4',
      unidad: 'h',
      analito: 'cabozantinib',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Median time to peak cabozantinib concentrations (T max ) ranged from 3 to 4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 99,7',
      unidad: '%',
      analito: 'cabozantinib',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Cabozantinib is highly protein bound in human plasma (≥99.7%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución oral',
      valor: '319 (aprox.)',
      unidad: 'L',
      analito: 'cabozantinib',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral volume of distribution (V z /F) of cabozantinib is approximately 319 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal prevista',
      valor: '99 (aprox.)',
      unidad: 'h',
      analito: 'cabozantinib',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The predicted terminal half-life is approximately 99 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento en estado estacionario',
      valor: '2,2',
      unidad: 'L/h',
      analito: 'cabozantinib',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the clearance (CL/F) at steady-state is estimated to be 2.2 L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '54 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-cabozantinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 54% was recovered in feces and 27% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cabozantinib', '3850cce2-6137-42e5-a792-d318c4a4b3b5', 'CABOMETYX (CABOZANTINIB) TABLET', 'CABOMETYX', '18', '2025-11-17', '2026-11-19'),
    rengPubchem(25102847, 'cabozantinib s-malate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
