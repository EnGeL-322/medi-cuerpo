import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'afatinib',
    nombre: 'Afatinib',
    clase: 'Inhibidor irreversible de cinasas de la familia ErbB (EGFR, HER2, HER4)',
    sinonimos: [ 'afatinib dimaleate', 'Gilotrif' ],
    formula: 'C24H25ClFN5O3',
    masaMolar: 485.9,
    smiles: 'CN(C)C/C=C/C(=O)NC1=C(C=C2C(=C1)C(=NC=N2)NC3=CC(=C(C=C3)F)Cl)O[C@H]4CCOC4',
    inchikey: 'ULXXDDBFHOBEHA-CWDCEQMOSA-N',
    cid: 10184653,
    iupac: '(E)-N-[4-(3-chloro-4-fluoroanilino)-7-[(3S)-oxolan-3-yl]oxyquinazolin-6-yl]-4-(dimethylamino)but-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'afatinib-oral',
      producto: 'Gilotrif · comprimido recubierto con película',
      titular: 'BOEHRINGER INGELHEIM PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 30 mg o 40 mg por comprimido, según la etiqueta',
      excipientes: [
        'Núcleo: lactosa monohidrato, celulosa microcristalina, crospovidona, dióxido de silicio coloidal y estearato de magnesio',
        'Cubierta: hipromelosa, polietilenglicol, dióxido de titanio, talco, polisorbato 80 y laca azul FD&C n.º 2 (comprimidos de 40 y 30 mg)'
      ],
      usos: {
        t: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con mutaciones no resistentes del EGFR, y del carcinoma escamoso de pulmón que progresa tras platino.',
        ref: {
          f: 'dailymed-afatinib',
          sec: '1 · Indicaciones',
          cita: 'First-line treatment of patients with metastatic non-small cell lung cancer (NSCLC) whose tumors have non-resistant epidermal growth factor receptor (EGFR) mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-afatinib',
      advertencias: [
        {
          titulo: 'Diarrea',
          texto: 'Puede causar deshidratación e insuficiencia renal; interrumpir si es grave y prolongada.',
          organos: [],
          ref: {
            f: 'dailymed-afatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Diarrhea may result in dehydration and renal failure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial',
          texto: 'Aparece en el 1,6 %; interrumpir si los síntomas pulmonares empeoran y suspender si se diagnostica.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-afatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Withhold GILOTRIF for acute onset or worsening of pulmonary symptoms',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad hepática',
          texto: 'La insuficiencia hepática mortal aparece en el 0,2 %; vigilar las pruebas hepáticas.',
          organos: [ 'higado' ],
          ref: { f: 'dailymed-afatinib', sec: '5 · Advertencias y precauciones', cita: 'Monitor with periodic liver testing', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, exantema o dermatitis acneiforme, estomatitis, paroniquia, piel seca, disminución del apetito, náuseas, vómitos y prurito.',
          '34084-4',
          'Most common adverse reactions (≥20%) were diarrhea, rash/acneiform dermatitis, stomatitis, paronychia, dry skin, decreased appetite, nausea, vomiting, pruritus'
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
    contiene: 'Comprimido recubierto con película: 20 mg, 30 mg o 40 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con mutaciones no resistentes del EGFR, y del carcinoma escamoso de pulmón que progresa tras platino.',
    actua: 'Se une de forma covalente a los dominios cinasa de EGFR, HER2 y HER4 e inhibe de manera irreversible su autofosforilación, lo que reduce la señalización ErbB.',
    recorrido: 'El tmax es de 2 a 5 horas; la biodisponibilidad relativa del comprimido frente a una solución oral es del 92 %, y una comida grasa reduce la Cmax un 50 % y el AUC un 39 %. Se excreta sobre todo por las heces (85 %) y el 4 % en la orina; el compuesto original es el 88 % de lo recuperado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '3 · Formas y concentraciones',
            cita: '40 mg tablets: light blue, film-coated, round, biconvex, bevel-edged tablets',
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
      ocurre: 'El tmax es de 2 a 5 horas; la biodisponibilidad relativa del comprimido frente a una solución oral es del 92 %, y una comida grasa reduce la Cmax un 50 % y el AUC un 39 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax es de 2 a 5 horas; la biodisponibilidad relativa del comprimido frente a una solución oral es del 92 %, y una comida grasa reduce la Cmax un 50 % y el AUC un 39 %.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of GILOTRIF tablets, time to peak afatinib plasma concentrations (T max ) is 2 to 5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo la Cmax un 50 % y el AUC un 39 % frente al ayuno.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal decreased C max by 50% and AUC 0-INF by 39% relative to the fasted condition',
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
      ocurre: 'In vitro se une en alrededor del 95 % a las proteínas del plasma humano.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en alrededor del 95 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro binding of afatinib to human plasma proteins is approximately 95%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'EGFR, HER2 y HER4',
        efecto: 'Se une de forma covalente a los dominios cinasa de EGFR, HER2 y HER4 e inhibe de manera irreversible su autofosforilación, lo que reduce la señalización ErbB.',
        lugar: [],
        datos: [
          {
            t: 'Se une de forma covalente a los dominios cinasa de EGFR, HER2 y HER4 e inhibe de manera irreversible su autofosforilación, lo que reduce la señalización ErbB.',
            ref: {
              f: 'dailymed-afatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Afatinib covalently binds to the kinase domains of EGFR (ErbB1), HER2 (ErbB2), and HER4 (ErbB4) and irreversibly inhibits tyrosine kinase autophosphorylation, resulting in downregulation of ErbB signaling',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolismo enzimático es mínimo; los metabolitos circulantes principales son aductos covalentes con proteínas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolismo enzimático es mínimo; los metabolitos circulantes principales son aductos covalentes con proteínas.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Covalent adducts to proteins are the major circulating metabolites of afatinib and enzymatic metabolism of afatinib is minimal',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sobre todo por las heces (85 %) y el 4 % en la orina; el compuesto original es el 88 % de lo recuperado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sobre todo por las heces (85 %) y el 4 % en la orina; el compuesto original es el 88 % de lo recuperado.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In humans, excretion of afatinib is primarily via the feces (85%) with 4% recovered in the urine following a single oral dose of [ 14 C]-labeled afatinib solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 37 horas con dosis repetidas en pacientes con cáncer.',
          ref: {
            f: 'dailymed-afatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of afatinib is 37 hours after repeat dosing in cancer patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-5',
      unidad: 'h',
      analito: 'afatinib',
      ref: {
        f: 'dailymed-afatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to peak afatinib plasma concentrations (T max ) is 2 to 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a solución oral',
      valor: '92',
      unidad: '%',
      analito: 'afatinib',
      ref: {
        f: 'dailymed-afatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean relative bioavailability of 20 mg GILOTRIF tablets was 92% as compared to an oral solution',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'afatinib',
      ref: {
        f: 'dailymed-afatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro binding of afatinib to human plasma proteins is approximately 95%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación con dosis repetidas',
      valor: '37',
      unidad: 'h',
      analito: 'afatinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-afatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of afatinib is 37 hours after repeat dosing in cancer patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '85',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'solución oral marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-afatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'excretion of afatinib is primarily via the feces (85%) with 4% recovered in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-afatinib', 'fd638e5e-8032-e7ca-0179-95e96ab5d387', 'GILOTRIF (AFATINIB) TABLET, FILM COATED', 'Gilotrif', '20', '2025-11-19', '2026-11-19'),
    rengPubchem(10184653, 'afatinib dimaleate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
