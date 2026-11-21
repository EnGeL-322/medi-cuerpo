import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'talazoparib',
    nombre: 'Talazoparib',
    clase: 'Inhibidor de la poli (ADP-ribosa) polimerasa (PARP)',
    sinonimos: [ 'talazoparib tosylate', 'Talzenna' ],
    formula: 'C19H14F2N6O',
    masaMolar: 380.4,
    smiles: 'CN1C(=NC=N1)[C@@H]2[C@H](NC3=CC(=CC4=C3C2=NNC4=O)F)C5=CC=C(C=C5)F',
    inchikey: 'HWGQMRYQVZSGDQ-HZPDHXFCSA-N',
    cid: 135565082,
    iupac: '(11S,12R)-7-fluoro-11-(4-fluorophenyl)-12-(2-methyl-1,2,4-triazol-3-yl)-2,3,10-triazatricyclo[7.3.1.05,13]trideca-1,5(13),6,8-tetraen-4-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'talazoparib-oral',
      producto: 'Talzenna · cápsula blanda',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '0.1 mg, 0.25 mg, 0.35 mg, 0.5 mg, 0.75 mg o 1.0 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tosilato de talazoparib',
        ref: { f: 'dailymed-talazoparib', sec: '11 · Descripción', cita: 'TALZENNA contains talazoparib tosylate', codigo: '34089-3' }
      },
      excipientes: [
        'polyethylene glycol 400',
        'glycerin',
        '.alpha.-tocopherol',
        'gelatin type a porcine (195 bloom)',
        'sorbitol',
        'ferric oxide red',
        'titanium dioxide',
        'water'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama HER2-negativo avanzado con mutación germinal de BRCA y, con enzalutamida, del cáncer de próstata metastásico resistente a la castración, según la etiqueta.',
        ref: {
          f: 'dailymed-talazoparib',
          sec: '1 · Indicaciones',
          cita: 'As a single agent, for the treatment of adult patients with deleterious or suspected deleterious germline BRCA -mutated',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-talazoparib',
      advertencias: [
        {
          titulo: 'Síndrome mielodisplásico y leucemia mieloide aguda',
          texto: 'Han aparecido, algunos mortales; vigilar la toxicidad hematológica.',
          organos: [],
          ref: {
            f: 'dailymed-talazoparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'MDS/AML occurred in patients exposed to TALZENNA, and some cases were fatal',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mielosupresión',
          texto: 'Puede afectar la hematopoyesis y causar anemia, leucopenia o neutropenia y trombocitopenia.',
          organos: [],
          ref: {
            f: 'dailymed-talazoparib',
            sec: '5 · Advertencias y precauciones',
            cita: 'TALZENNA may affect hematopoiesis and can cause anemia, leukopenia/neutropenia, and/or thrombocytopenia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia, las más frecuentes (20 % o más, con laboratorio): descensos de hemoglobina, neutrófilos, linfocitos y plaquetas, fatiga, aumento de glucosa, de AST y de fosfatasa alcalina, entre otras.',
          '34084-4',
          'Most common adverse reactions (≥20%) as a single agent, including laboratory abnormalities, are: • Decreased hemoglobin, decreased neutrophils, decreased lymphocytes, decreased platelets, fatigue'
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
    contiene: 'Cápsula blanda: 0.1 mg, 0.25 mg, 0.35 mg, 0.5 mg, 0.75 mg o 1.0 mg por cápsula, según la etiqueta; el activo va como tosilato de talazoparib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama HER2-negativo avanzado con mutación germinal de BRCA y, con enzalutamida, del cáncer de próstata metastásico resistente a la castración, según la etiqueta.',
    actua: 'Inhibe las enzimas PARP1 y PARP2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, menor proliferación y apoptosis.',
    recorrido: 'La mediana del tmax es de alrededor de 1 hora; con una comida grasa la Cmax baja un 42 % y el tmax se retrasa a 4 horas, sin cambio del AUC. La excreción urinaria es la vía principal: el 69 % de la dosis marcada se recuperó en la orina (55 % sin cambios) y el 20 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of a TALZENNA 1 mg dose soft gelatin capsule with high-fat, high-calorie food',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de alrededor de 1 hora; con una comida grasa la Cmax baja un 42 % y el tmax se retrasa a 4 horas, sin cambio del AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de alrededor de 1 hora; con una comida grasa la Cmax baja un 42 % y el tmax se retrasa a 4 horas, sin cambio del AUC.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to C max (T max ) was approximately 1 hour (range: 0.4 to 4 hours) after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 42 %, el tmax pasó de 1 a 4 horas y el AUC no cambió.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean steady-state C max was decreased by 42%, the median T max was delayed from 1 to 4 hours, and AUC was not affected',
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
      ocurre: 'In vitro se une en un 74 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente medio es de 420 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 74 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente medio es de 420 L.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro , protein binding of talazoparib is 74% and is independent of talazoparib concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de 420 L.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of talazoparib is 420 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PARP1 y PARP2',
        efecto: 'Inhibe las enzimas PARP1 y PARP2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, menor proliferación y apoptosis.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las enzimas PARP1 y PARP2, que intervienen en la reparación del ADN; aumenta los complejos PARP-ADN, con daño del ADN, menor proliferación y apoptosis.',
            ref: {
              f: 'dailymed-talazoparib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Talazoparib is an inhibitor of PARP enzymes, including PARP1 and PARP2, which play a role in DNA repair',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un metabolismo hepático mínimo (monooxidación, deshidrogenación, conjugación con cisteína y glucuronidación).',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un metabolismo hepático mínimo (monooxidación, deshidrogenación, conjugación con cisteína y glucuronidación).',
          ref: { f: 'dailymed-talazoparib', sec: '12.3 · Farmacocinética', cita: 'Talazoparib undergoes minimal hepatic metabolism', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción urinaria es la vía principal: el 69 % de la dosis marcada se recuperó en la orina (55 % sin cambios) y el 20 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción urinaria es la vía principal: el 69 % de la dosis marcada se recuperó en la orina (55 % sin cambios) y el 20 % en las heces.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 69% (55% unchanged) of the total administered radiolabeled dose of talazoparib was recovered in urine, and 20% (14% unchanged) was recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática terminal media es de 90 horas.',
          ref: {
            f: 'dailymed-talazoparib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal plasma half-life (±standard deviation) is 90 (±58) hours',
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
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'talazoparib',
      ref: {
        f: 'dailymed-talazoparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to C max (T max ) was approximately 1 hour (range: 0.4 to 4 hours) after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '74',
      unidad: '%',
      analito: 'talazoparib',
      ref: { f: 'dailymed-talazoparib', sec: '12.3 · Farmacocinética', cita: 'In vitro , protein binding of talazoparib is 74%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '420',
      unidad: 'L',
      analito: 'talazoparib',
      ref: {
        f: 'dailymed-talazoparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of talazoparib is 420 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática terminal media',
      valor: '90',
      unidad: 'h',
      analito: 'talazoparib',
      ref: {
        f: 'dailymed-talazoparib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal plasma half-life (±standard deviation) is 90 (±58) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente medio',
      valor: '6,5',
      unidad: 'L/h',
      analito: 'talazoparib',
      ref: {
        f: 'dailymed-talazoparib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean apparent oral clearance (inter-subject variability) is 6.5 L/h (31%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '69 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-talazoparib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 69% (55% unchanged) of the total administered radiolabeled dose of talazoparib was recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-talazoparib', 'c6fd147f-a77e-4a0b-9280-e82ecc41b4be', 'TALZENNA (TALAZOPARIB) CAPSULE, LIQUID FILLED', 'Talzenna', '5', '2026-10-30', '2026-11-19'),
    rengPubchem(135565082, 'talazoparib tosylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
