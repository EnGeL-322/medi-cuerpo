import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tucatinib',
    nombre: 'Tucatinib',
    clase: 'Inhibidor de la tirosina cinasa HER2',
    sinonimos: [ 'tucatinib', 'Tukysa' ],
    formula: 'C26H24N8O2',
    masaMolar: 480.5,
    smiles: 'CC1=C(C=CC(=C1)NC2=NC=NC3=C2C=C(C=C3)NC4=NC(CO4)(C)C)OC5=CC6=NC=NN6C=C5',
    inchikey: 'SDEAXTCZPQIFQM-UHFFFAOYSA-N',
    cid: 51039094,
    iupac: '6-N-(4,4-dimethyl-5H-1,3-oxazol-2-yl)-4-N-[3-methyl-4-([1,2,4]triazolo[1,5-a]pyridin-7-yloxy)phenyl]quinazoline-4,6-diamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tucatinib-oral',
      producto: 'TUKYSA · comprimido',
      titular: 'SEAGEN INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 150 mg por comprimido, según la etiqueta',
      excipientes: [
        'copovidone k25-31',
        'crospovidone (120 .mu.m)',
        'sodium chloride',
        'potassium chloride',
        'sodium bicarbonate',
        'silicon dioxide',
        'magnesium stearate',
        'microcrystalline cellulose 102',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama HER2-positivo irresecable o metastásico y del cáncer colorrectal RAS natural HER2-positivo, en combinación según la etiqueta.',
        ref: {
          f: 'dailymed-tucatinib',
          sec: '1 · Indicaciones',
          cita: 'in combination with trastuzumab and pertuzumab for the maintenance treatment of adult patients with unresectable locally advanced or metastatic HER2-positive breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tucatinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Puede causar hepatotoxicidad grave y mortal, sobre todo al reintroducirlo; hacer pruebas hepáticas antes y durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-tucatinib',
            sec: 'Advertencia destacada',
            cita: 'TUKYSA can cause severe and fatal hepatotoxicity, particularly after rechallenge',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Diarrea',
          texto: 'Puede causar diarrea grave con deshidratación, hipotensión, lesión renal aguda y muerte.',
          organos: [],
          ref: {
            f: 'dailymed-tucatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'TUKYSA can cause severe diarrhea, including dehydration, hypotension, acute kidney injury, and death',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la creatinina sérica sin afectar la función renal',
          texto: 'Puede subir la creatinina; usar otras medidas para valorar la función renal.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-tucatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use alternative measures that are not based on serum creatinine to assess renal function',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más) con trastuzumab y pertuzumab: diarrea, dolor musculoesquelético, hepatotoxicidad, náuseas, fatiga, exantema y vómitos.',
          '34084-4',
          'are diarrhea, musculoskeletal pain, hepatotoxicity, nausea, fatigue, rash, and vomiting'
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
    contiene: 'Comprimido: 50 mg o 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama HER2-positivo irresecable o metastásico y del cáncer colorrectal RAS natural HER2-positivo, en combinación según la etiqueta.',
    actua: 'Inhibidor de la tirosina cinasa de HER2: in vitro inhibe la fosforilación de HER2 y HER3 y las vías MAPK y AKT, y frena la proliferación celular.',
    recorrido: 'La mediana del tiempo hasta el pico es de unas 2 horas; una comida grasa aumentó el AUC 1,5 veces sin cambiar la Cmax, sin relevancia clínica. Tras 300 mg marcados, alrededor del 86 % se recuperó en las heces (16 % sin cambios) y el 4,1 % en la orina.'
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
          ref: { f: 'dailymed-tucatinib', sec: '3 · Formas y concentraciones', cita: '50 mg: round, yellow, film-coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de unas 2 horas; una comida grasa aumentó el AUC 1,5 veces sin cambiar la Cmax, sin relevancia clínica.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de unas 2 horas; una comida grasa aumentó el AUC 1,5 veces sin cambiar la Cmax, sin relevancia clínica.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak plasma concentration of tucatinib was approximately 2 hours (range 1 to 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó 1,5 veces y el tmax pasó de 1,5 a 4 horas; la Cmax no cambió.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean AUC 0-INF increased by 1.5-fold, the T max shifted from 1.5 hours to 4 hours, and C max was unaltered',
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
      ocurre: 'La unión a proteínas plasmáticas es del 97,1 %; en estado estacionario las concentraciones en el líquido cefalorraquídeo son comparables a las plasmáticas libres.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es del 97,1 %; en estado estacionario las concentraciones en el líquido cefalorraquídeo son comparables a las plasmáticas libres.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding was 97.1% at clinically relevant concentrations',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 903 L en cáncer de mama metastásico.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) apparent volume of distribution of tucatinib at steady-state were 903 (42) L and 829 (21) L in patients with mBC and mCRC',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ],
      accion: {
        diana: 'Tirosina cinasa HER2',
        efecto: 'Inhibidor de la tirosina cinasa de HER2: in vitro inhibe la fosforilación de HER2 y HER3 y las vías MAPK y AKT, y frena la proliferación celular.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de la tirosina cinasa de HER2: in vitro inhibe la fosforilación de HER2 y HER3 y las vías MAPK y AKT, y frena la proliferación celular.',
            ref: { f: 'dailymed-tucatinib', sec: '12.1 · Mecanismo de acción', cita: 'Tucatinib is a tyrosine kinase inhibitor of HER2', codigo: '43679-0' }
          },
          {
            t: 'In vitro inhibe la fosforilación de HER2 y HER3 y la señalización MAPK y AKT posterior.',
            ref: {
              f: 'dailymed-tucatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'tucatinib inhibits phosphorylation of HER2 and HER3, resulting in inhibition of downstream MAPK and AKT signaling and cell proliferation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP2C8 y, en menor medida, por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP2C8 y, en menor medida, por la CYP3A.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tucatinib is metabolized primarily by CYP2C8 and to a lesser extent via CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 300 mg marcados, alrededor del 86 % se recuperó en las heces (16 % sin cambios) y el 4,1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 300 mg marcados, alrededor del 86 % se recuperó en las heces (16 % sin cambios) y el 4,1 % en la orina.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 86% of the total radiolabeled dose was recovered in feces (16% of the administered dose as unchanged tucatinib) and 4.1% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'En estado estacionario la semivida efectiva es de unas 11,9 horas en cáncer de mama metastásico.',
          ref: {
            f: 'dailymed-tucatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'At steady-state, tucatinib effective half-life was approximately 11.9 hours and geometric mean (CV%) apparent clearance was 53 (43) L/h in patients with mBC',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer de mama'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'tucatinib',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak plasma concentration of tucatinib was approximately 2 hours (range 1 to 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,1',
      unidad: '%',
      analito: 'tucatinib',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding was 97.1% at clinically relevant concentrations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '903',
      unidad: 'L',
      analito: 'tucatinib',
      poblacion: 'pacientes con cáncer de mama metastásico',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution of tucatinib at steady-state were 903 (42) L and 829 (21) L in patients with mBC and mCRC',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva en estado estacionario',
      valor: '11,9 (aprox.)',
      unidad: 'h',
      analito: 'tucatinib',
      poblacion: 'pacientes con cáncer de mama metastásico',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'At steady-state, tucatinib effective half-life was approximately 11.9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '53',
      unidad: 'L/h',
      analito: 'tucatinib',
      poblacion: 'pacientes con cáncer de mama metastásico',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'geometric mean (CV%) apparent clearance was 53 (43) L/h in patients with mBC',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '86 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 300 mg',
      ref: {
        f: 'dailymed-tucatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 86% of the total radiolabeled dose was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tucatinib', 'f27eb1b9-b7fc-424e-988f-84dd7bb195a3', 'TUKYSA (TUCATINIB) TABLET', 'TUKYSA', '10', '2026-10-19', '2026-11-19'),
    rengPubchem(51039094, 'tucatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
