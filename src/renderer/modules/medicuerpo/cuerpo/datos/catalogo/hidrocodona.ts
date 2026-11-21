import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidrocodona',
    nombre: 'Hidrocodona',
    clase: 'Agonista opioide completo (receptor mu), liberación prolongada',
    sinonimos: [ 'hydrocodone bitartrate', 'Hysingla ER' ],
    formula: 'C18H21NO3',
    masaMolar: 299.4,
    smiles: 'CN1CC[C@]23[C@@H]4[C@H]1CC5=C2C(=C(C=C5)OC)O[C@H]3C(=O)CC4',
    inchikey: 'LLPOLZWFYMWNKH-CMKMFDCUSA-N',
    cid: 5284569,
    iupac: '(4R,4aR,7aR,12bS)-9-methoxy-3-methyl-1,2,4,4a,5,6,7a,13-octahydro-4,12-methanobenzofuro[3,2-e]isoquinolin-7-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'hidrocodona-oral',
      producto: 'Hysingla ER · comprimido de liberación prolongada',
      titular: 'KNOA PHARMA LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '20 mg, 30 mg, 40 mg, 60 mg, 80 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Bitartrato de hidrocodona',
        ref: { f: 'dailymed-hidrocodona', sec: '11 · Descripción', cita: 'hydrocodone bitartrate', codigo: '34089-3' }
      },
      excipientes: [
        'polyethylene glycol 3350',
        'microcrystalline cellulose',
        'polysorbate 80',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow',
        'magnesium stearate',
        'butylated hydroxytoluene',
        'hydroxypropyl cellulose (1600000 wamw)',
        'polyethylene glycol, unspecified'
      ],
      usos: {
        t: 'Dolor intenso y persistente que requiere un opioide y no se controla adecuadamente con otras opciones, incluidos los opioides de liberación inmediata.',
        ref: {
          f: 'dailymed-hidrocodona',
          sec: '1 · Indicaciones',
          cita: 'HYSINGLA ER is indicated for the management of severe and persistent pain that requires an opioid analgesic and that cannot be adequately treated with alternative options',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-hidrocodona',
      advertencias: [
        {
          titulo: 'Depresión respiratoria potencialmente mortal',
          texto: 'Puede causar depresión respiratoria grave o mortal, sobre todo al empezar o al subir la dosis.',
          organos: [],
          ref: {
            f: 'dailymed-hidrocodona',
            sec: 'Advertencia destacada',
            cita: 'Serious, life-threatening, or fatal respiratory depression may occur with use of HYSINGLA ER, especially during initiation or following a dosage increase',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Adicción, abuso y uso indebido',
          texto: 'Valorar el riesgo de adicción antes de prescribirla y reevaluarlo periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '5 · Advertencias y precauciones',
            cita: "Assess each patient's risk for opioid addiction, abuse, or misuse prior to prescribing HYSINGLA ER",
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión grave',
          texto: 'Evitarla en el shock circulatorio.',
          organos: [],
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use of HYSINGLA ER in patients with circulatory shock',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): estreñimiento, náuseas, vómitos, fatiga, infección respiratoria alta, mareo, cefalea y somnolencia.',
          '34084-4',
          'Most common treatment-emergent adverse events (incidence ≥ 5%) are constipation, nausea, vomiting, fatigue, upper respiratory tract infection, dizziness, headache, and somnolence'
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
    contiene: 'Comprimido de liberación prolongada: 20 mg, 30 mg, 40 mg, 60 mg, 80 mg o 100 mg por comprimido, según la etiqueta; el activo va como bitartrato de hidrocodona. Los excipientes no son el principio activo.',
    usos: 'Dolor intenso y persistente que requiere un opioide y no se controla adecuadamente con otras opciones, incluidos los opioides de liberación inmediata.',
    actua: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia, sin efecto techo.',
    recorrido: 'Por su liberación prolongada, la concentración sube poco a poco y la mediana del tiempo hasta el pico es de 14 a 16 horas; una comida rica en grasas aumenta la Cmax un 54 %. La hidrocodona y sus metabolitos se eliminan sobre todo por excreción renal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto de liberación prolongada: libera la hidrocodona poco a poco a lo largo del tubo digestivo; se traga entero.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido recubierto de liberación prolongada: libera la hidrocodona poco a poco a lo largo del tubo digestivo; se traga entero.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '3 · Formas y concentraciones',
            cita: '20 mg film-coated extended-release tablets (round, green-colored, bi-convex tablets printed with',
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
      ocurre: 'Por su liberación prolongada, la concentración sube poco a poco y la mediana del tiempo hasta el pico es de 14 a 16 horas; una comida rica en grasas aumenta la Cmax un 54 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Por su liberación prolongada, la concentración sube poco a poco y la mediana del tiempo hasta el pico es de 14 a 16 horas; una comida rica en grasas aumenta la Cmax un 54 %.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'HYSINGLA ER is a single-entity extended-release formulation of hydrocodone that yields a gradual increase in plasma hydrocodone concentrations with a median T max of 14 – 16 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax fue un 54 % mayor y el AUC solo un 20 % mayor.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'C max was higher (54%) under high fat conditions relative to fasting conditions; however, AUC of HYSINGLA ER 120 mg tablets was only 20% higher when co-administered with a high fat meal',
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
      ocurre: 'Apenas se une a las proteínas plasmáticas (36 %); su volumen de distribución aparente de 402 L indica una amplia distribución por los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Apenas se une a las proteínas plasmáticas (36 %); su volumen de distribución aparente de 402 L indica una amplia distribución por los tejidos.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'The extent of in vivo binding of hydrocodone to human plasma proteins was minimal with a mean % bound at 36%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 402 L, que indica una amplia distribución tisular.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'the typical (70 kg adult) value of apparent volume of distribution (V/F) is 402 L, suggesting extensive tissue distribution',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia, sin efecto techo.',
        lugar: [],
        datos: [
          {
            t: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia, sin efecto techo.',
            ref: {
              f: 'dailymed-hidrocodona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Hydrocodone is a full opioid agonist with relative selectivity for the mu-opioid receptor, although it can interact with other opioid receptors at higher doses',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su acción terapéutica principal es la analgesia.',
            ref: {
              f: 'dailymed-hidrocodona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The principal therapeutic action of hydrocodone is analgesia',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su vía principal es la N-desmetilación por la CYP3A4 a norhidrocodona inactiva, con menor contribución de la CYP2B6 y la CYP2C19.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su vía principal es la N-desmetilación por la CYP3A4 a norhidrocodona inactiva, con menor contribución de la CYP2B6 y la CYP2C19.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 mediated N -demethylation to inactive norhydrocodone is the primary metabolic pathway of hydrocodone with a lower contribution from CYP2B6 and CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Norhidrocodona',
          actividad: 'inactivo',
          nota: 'Metabolito principal, inactivo.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 mediated N -demethylation to inactive norhydrocodone is the primary metabolic pathway of hydrocodone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La hidrocodona y sus metabolitos se eliminan sobre todo por excreción renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La hidrocodona y sus metabolitos se eliminan sobre todo por excreción renal.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydrocodone and its metabolites are cleared primarily by renal excretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media en estado estacionario es de 7 horas.',
          ref: {
            f: 'dailymed-hidrocodona',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal half-life (t 1/2 ) at steady state was 7 hours',
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
      valor: '14-16',
      unidad: 'h',
      analito: 'hidrocodona',
      ref: {
        f: 'dailymed-hidrocodona',
        sec: '12.3 · Farmacocinética',
        cita: 'with a median T max of 14 – 16 hours noted for different dose strengths',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '36',
      unidad: '%',
      analito: 'hidrocodona',
      ref: {
        f: 'dailymed-hidrocodona',
        sec: '12.3 · Farmacocinética',
        cita: 'The extent of in vivo binding of hydrocodone to human plasma proteins was minimal with a mean % bound at 36%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (adulto de 70 kg)',
      valor: '402',
      unidad: 'L',
      analito: 'hidrocodona',
      ref: {
        f: 'dailymed-hidrocodona',
        sec: '12.3 · Farmacocinética',
        cita: 'the typical (70 kg adult) value of apparent volume of distribution (V/F) is 402 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en estado estacionario',
      valor: '7',
      unidad: 'h',
      analito: 'hidrocodona',
      ref: {
        f: 'dailymed-hidrocodona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life (t 1/2 ) at steady state was 7 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-hidrocodona', 'b7d23ac2-e776-9f62-3290-c64c2d6eb353', 'HYSINGLA ER (HYDROCODONE BITARTRATE) TABLET, EXTENDED RELEASE', 'Hysingla ER', '17', '2026-06-18', '2026-11-19'),
    rengPubchem(5284569, 'hydrocodone bitartrate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
