import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sirolimus',
    nombre: 'Sirolimus',
    clase: 'Inmunosupresor inhibidor de mTOR',
    sinonimos: [ 'sirolimus', 'Rapamune' ],
    formula: 'C51H79NO13',
    masaMolar: 914.2,
    smiles: 'C[C@@H]1CC[C@H]2C[C@@H](/C(=C/C=C/C=C/[C@H](C[C@H](C(=O)[C@@H]([C@@H](/C(=C/[C@H](C(=O)C[C@H](OC(=O)[C@@H]3CCCCN3C(=O)C(=O)[C@@]1(O2)O)[C@H](C)C[C@@H]4CC[C@H]([C@@H](C4)OC)O)C)/C)O)OC)C)C)/C)OC',
    inchikey: 'QFJCIRLUMZQUOT-HPLJOQBZSA-N',
    cid: 5284616,
    iupac: '(1R,9S,12S,15R,16E,18R,19R,21R,23S,24E,26E,28E,30S,32S,35R)-1,18-dihydroxy-12-[(2R)-1-[(1S,3R,4R)-4-hydroxy-3-methoxycyclohexyl]propan-2-yl]-19,30-dimethoxy-15,17,21,23,29,35-hexamethyl-11,36-dioxa-4-azatricyclo[30.3.1.04,9]hexatriaconta-16,24,26,28-tetraene-2,3,10,14,20-pentone',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'sirolimus-oral',
      producto: 'sirolimus · comprimido recubierto con película',
      titular: 'GLENMARK PHARMACEUTICALS INC., USA',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg, 1 mg o 2 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'edetate disodium',
        'glyceryl dibehenate',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'microcrystalline cellulose',
        'poloxamer 188',
        'polyethylene glycol, unspecified',
        'sucrose',
        'titanium dioxide',
        '.alpha.-tocopherol, dl-',
        'ferrosoferric oxide',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Profilaxis del rechazo en el trasplante renal desde los 13 años y tratamiento de la linfangioleiomiomatosis, según la etiqueta.',
        ref: {
          f: 'dailymed-sirolimus',
          sec: '1 · Indicaciones',
          cita: 'indicated for the prophylaxis of organ rejection in patients aged ≥13 years receiving renal transplants',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sirolimus',
      advertencias: [
        {
          titulo: 'Inmunosupresión',
          texto: 'La inmunosupresión aumenta el riesgo de infecciones y de linfoma y otras neoplasias.',
          organos: [],
          ref: {
            f: 'dailymed-sirolimus',
            sec: 'Advertencia destacada',
            cita: 'Increased susceptibility to infection and the possible development of lymphoma and other malignancies may result from immunosuppression',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hiperlipidemia',
          texto: 'Con sirolimus fueron más frecuentes los aumentos de colesterol y triglicéridos que requirieron tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-sirolimus',
            sec: '5 · Advertencias y precauciones',
            cita: 'Increased serum cholesterol and triglycerides requiring treatment occurred more frequently in patients treated with sirolimus',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis no infecciosa',
          texto: 'Se han descrito casos, algunos mortales, sin causa infecciosa.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-sirolimus',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of interstitial lung disease [ILD] (including pneumonitis, bronchiolitis obliterans organizing pneumonia [BOOP], and pulmonary fibrosis), some fatal',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el trasplante renal, las más frecuentes (30 % o más): edema periférico, hipertrigliceridemia, hipertensión, hipercolesterolemia y aumento de creatinina, entre otras.',
          '34084-4',
          'Most common adverse reactions (incidence ≥30%) are peripheral edema, hypertriglyceridemia, hypertension, hypercholesterolemia, creatinine increased'
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
    contiene: 'Comprimido recubierto con película: 0.5 mg, 1 mg o 2 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Profilaxis del rechazo en el trasplante renal desde los 13 años y tratamiento de la linfangioleiomiomatosis, según la etiqueta.',
    actua: 'Inhibe la activación y la proliferación de los linfocitos T en respuesta a antígenos y citocinas por un mecanismo distinto del de otros inmunosupresores: se une a FKBP-12 y el complejo inhibe mTOR.',
    recorrido: 'La biodisponibilidad de los comprimidos es un 27 % mayor que la de la solución oral; una comida rica en grasas aumenta el AUC un 23-35 %. Tras una dosis marcada de solución oral, el 91 % de la radiactividad se recuperó en las heces y solo el 2,2 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma siempre igual respecto a la comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma siempre igual respecto a la comida.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '3 · Formas y concentraciones',
            cita: '0.5 mg, grey to greenish grey colored film-coated, round shaped beveled edge standard convex tablets',
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
      ocurre: 'La biodisponibilidad de los comprimidos es un 27 % mayor que la de la solución oral; una comida rica en grasas aumenta el AUC un 23-35 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad de los comprimidos es un 27 % mayor que la de la solución oral; una comida rica en grasas aumenta el AUC un 23-35 %.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'In healthy subjects, the mean bioavailability of sirolimus after administration of the tablet is approximately 27% higher relative to the solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó un 23-35 % frente al ayuno.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'In healthy subjects, a high-fat meal (861.8 kcal, 54.9% kcal from fat) increased the mean total exposure (AUC) of sirolimus by 23 to 35%, compared with fasting',
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
      ocurre: 'Se une en alrededor del 92 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución aparente es de 12 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 92 % a las proteínas plasmáticas, sobre todo a la albúmina; el volumen de distribución aparente es de 12 L/kg.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'Sirolimus is extensively bound (approximately 92%) to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 12 ± 8 L/kg.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution (Vss/F) of sirolimus is 12 ± 8 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'mTOR (a través de FKBP-12)',
        efecto: 'Inhibe la activación y la proliferación de los linfocitos T en respuesta a antígenos y citocinas por un mecanismo distinto del de otros inmunosupresores: se une a FKBP-12 y el complejo inhibe mTOR.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la activación y la proliferación de los linfocitos T en respuesta a antígenos y citocinas por un mecanismo distinto del de otros inmunosupresores: se une a FKBP-12 y el complejo inhibe mTOR.',
            ref: {
              f: 'dailymed-sirolimus',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sirolimus inhibits T-lymphocyte activation and proliferation that occurs in response to antigenic and cytokine (Interleukin [IL]-2, IL-4, and IL-15) stimulation',
              codigo: '43679-0'
            }
          },
          {
            t: 'En las células se une a la inmunofilina FKBP-12 y forma un complejo inmunosupresor.',
            ref: {
              f: 'dailymed-sirolimus',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In cells, sirolimus binds to the immunophilin, FK Binding Protein-12 (FKBP-12), to generate an immunosuppressive complex',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en la pared intestinal y el hígado, y los enterocitos lo devuelven a la luz intestinal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en la pared intestinal y el hígado, y los enterocitos lo devuelven a la luz intestinal.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'Sirolimus is extensively metabolized in the intestinal wall and liver and undergoes counter-transport from enterocytes of the small intestine into the gut lumen',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se metaboliza sobre todo por O-desmetilación e hidroxilación.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'Sirolimus is extensively metabolized by O-demethylation and/or hydroxylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada de solución oral, el 91 % de la radiactividad se recuperó en las heces y solo el 2,2 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada de solución oral, el 91 % de la radiactividad se recuperó en las heces y solo el 2,2 % en la orina.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'the majority (91%) of radioactivity was recovered from the feces, and only a minor amount (2.2%) was excreted in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal con dosis repetidas en trasplantados renales estables es de unas 62 horas.',
          ref: {
            f: 'dailymed-sirolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean ± SD terminal elimination half-life (t ½ ) of sirolimus after multiple dosing in stable renal transplant patients was estimated to be about 62 ± 16 hours',
            codigo: '43682-4'
          },
          poblacion: 'trasplantados renales estables'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '92 (aprox.)',
      unidad: '%',
      analito: 'sirolimus',
      ref: {
        f: 'dailymed-sirolimus',
        sec: '12.3 · Farmacocinética',
        cita: 'Sirolimus is extensively bound (approximately 92%) to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '12',
      unidad: 'L/kg',
      analito: 'sirolimus',
      ref: {
        f: 'dailymed-sirolimus',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution (Vss/F) of sirolimus is 12 ± 8 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal con dosis repetidas',
      valor: '62 (aprox.)',
      unidad: 'h',
      analito: 'sirolimus',
      poblacion: 'trasplantados renales estables',
      ref: {
        f: 'dailymed-sirolimus',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal elimination half-life (t ½ ) of sirolimus after multiple dosing in stable renal transplant patients was estimated to be about 62 ± 16 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '91',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      condiciones: 'solución oral marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-sirolimus',
        sec: '12.3 · Farmacocinética',
        cita: 'the majority (91%) of radioactivity was recovered from the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sirolimus', '57fb4d90-3ccb-4a69-af1e-53be83f7a504', 'SIROLIMUS TABLET, FILM COATED', 'sirolimus', '4', '2026-01-29', '2026-11-19'),
    rengPubchem(5284616, 'sirolimus', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
