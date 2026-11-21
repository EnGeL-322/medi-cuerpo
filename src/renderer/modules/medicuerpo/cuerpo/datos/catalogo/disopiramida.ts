import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'disopiramida',
    nombre: 'Disopiramida',
    clase: 'Antiarrítmico de clase I',
    sinonimos: [ 'disopyramide', 'Norpace' ],
    formula: 'C21H29N3O',
    masaMolar: 339.5,
    smiles: 'CC(C)N(CCC(C1=CC=CC=C1)(C2=CC=CC=N2)C(=O)N)C(C)C',
    inchikey: 'UVTNFZQICZKOEM-UHFFFAOYSA-N',
    cid: 3114,
    iupac: '4-[di(propan-2-yl)amino]-2-phenyl-2-pyridin-2-ylbutanamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'disopiramida-oral',
      producto: 'Norpace · cápsula',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 150 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Fosfato de disopiramida',
        ref: { f: 'dailymed-disopiramida', sec: '11 · Descripción', cita: 'disopyramide phosphate', codigo: '34089-3' }
      },
      excipientes: [ 'starch, corn', 'fd&c red no. 3', 'fd&c yellow no. 6', 'gelatin, unspecified', 'lactose, unspecified form', 'talc', 'titanium dioxide' ],
      usos: {
        t: 'Tratamiento de las arritmias ventriculares documentadas que se consideran potencialmente mortales, como la taquicardia ventricular sostenida.',
        ref: {
          f: 'dailymed-disopiramida',
          sec: '1 · Indicaciones',
          cita: 'Norpace and Norpace CR are indicated for the treatment of documented ventricular arrhythmias, such as sustained ventricular tachycardia, that, in the judgment of the physician, are life-threatening',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-disopiramida',
      advertencias: [
        {
          titulo: 'Mortalidad (estudio CAST)',
          texto: 'En el estudio CAST, en pacientes con arritmias ventriculares no mortales tras un infarto, los antiarrítmicos estudiados se asociaron a más mortalidad que el placebo.',
          organos: [],
          ref: {
            f: 'dailymed-disopiramida',
            sec: 'Advertencia destacada',
            cita: "In the National Heart, Lung and Blood Institute's Cardiac Arrhythmia Suppression Trial (CAST)",
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones más frecuentes dependen de la dosis y se asocian a sus propiedades anticolinérgicas; la retención urinaria es el efecto anticolinérgico más grave.',
          '34084-4',
          'most common adverse reactions, which are dose dependent, are associated with the anticholinergic properties of the drug'
        ],
        [ 'La retención urinaria es el efecto anticolinérgico más grave.', '34084-4', 'Urinary retention is the most serious anticholinergic effect' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg o 150 mg por cápsula, según la etiqueta; el activo va como fosfato de disopiramida. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las arritmias ventriculares documentadas que se consideran potencialmente mortales, como la taquicardia ventricular sostenida.',
    actua: 'Antiarrítmico de tipo 1, parecido a la procainamida y la quinidina; en animales reduce la despolarización diastólica en células con automatismo aumentado y la velocidad de ascenso del potencial de acción.',
    recorrido: 'Con la liberación inmediata se absorbe con rapidez y casi por completo, y el pico plasmático suele alcanzarse en 2 horas. En varones sanos, alrededor del 50 % de la dosis se excreta en la orina sin cambios, el 20 % como metabolito mono-N-desalquilado y el 10 % como otros metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de liberación inmediata: se disgrega en el tubo digestivo; existe también una forma de liberación controlada (Norpace CR), que no es esta presentación.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula de liberación inmediata: se disgrega en el tubo digestivo; existe también una forma de liberación controlada (Norpace CR), que no es esta presentación.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of immediate-release Norpace, disopyramide phosphate is rapidly and almost completely absorbed',
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
      ocurre: 'Con la liberación inmediata se absorbe con rapidez y casi por completo, y el pico plasmático suele alcanzarse en 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con la liberación inmediata se absorbe con rapidez y casi por completo, y el pico plasmático suele alcanzarse en 2 horas.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of immediate-release Norpace, disopyramide phosphate is rapidly and almost completely absorbed, and peak plasma levels are usually attained within 2 hours',
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
      ocurre: 'A las concentraciones terapéuticas habituales (2 a 4 mcg/mL), la unión a proteínas varía entre el 50 % y el 65 % y depende de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A las concentraciones terapéuticas habituales (2 a 4 mcg/mL), la unión a proteínas varía entre el 50 % y el 65 % y depende de la concentración.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'The usual therapeutic plasma levels of disopyramide base are 2 to 4 mcg/ml, and at these concentrations protein binding varies from 50% to 65%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio del miocardio (antiarrítmico de clase I)',
        efecto: 'Antiarrítmico de tipo 1, parecido a la procainamida y la quinidina; en animales reduce la despolarización diastólica en células con automatismo aumentado y la velocidad de ascenso del potencial de acción.',
        lugar: [],
        datos: [
          {
            t: 'Antiarrítmico de tipo 1, parecido a la procainamida y la quinidina; en animales reduce la despolarización diastólica en células con automatismo aumentado y la velocidad de ascenso del potencial de acción.',
            ref: {
              f: 'dailymed-disopiramida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Norpace (disopyramide phosphate) is a Type 1 antiarrhythmic drug (i.e., similar to procainamide and quinidine)',
              codigo: '43679-0'
            }
          },
          {
            t: 'En animales disminuye la despolarización diastólica en células con automatismo aumentado.',
            ref: {
              f: 'dailymed-disopiramida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In animal studies Norpace decreases the rate of diastolic depolarization (phase 4) in cells with augmented automaticity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza por la CYP3A4; en varones sanos, alrededor del 20 % de la dosis sale como metabolito mono-N-desalquilado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza por la CYP3A4; en varones sanos, alrededor del 20 % de la dosis sale como metabolito mono-N-desalquilado.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12 · Farmacología clínica',
            cita: 'In vitro metabolic studies indicated that disopyramide is metabolized by cytochrome P450 3A4',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito mono-N-desalquilado',
          actividad: 'desconocida',
          nota: 'Metabolito principal; su concentración plasmática es alrededor de una décima parte de la del fármaco.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma concentration of the major metabolite is approximately one tenth that of disopyramide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En varones sanos, alrededor del 50 % de la dosis se excreta en la orina sin cambios, el 20 % como metabolito mono-N-desalquilado y el 10 % como otros metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En varones sanos, alrededor del 50 % de la dosis se excreta en la orina sin cambios, el 20 % como metabolito mono-N-desalquilado y el 10 % como otros metabolitos.',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'In healthy men, about 50% of a given dose of disopyramide is excreted in the urine as the unchanged drug, about 20% as the mono-N-dealkylated metabolite, and 10% as the other metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media en personas sanas es de 6,7 horas (4 a 10 horas).',
          ref: {
            f: 'dailymed-disopiramida',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma half-life of disopyramide in healthy humans is 6.7 hours (range of 4 to 10 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (liberación inmediata)',
      valor: '≤ 2',
      unidad: 'h',
      analito: 'disopiramida',
      ref: { f: 'dailymed-disopiramida', sec: '12.3 · Farmacocinética', cita: 'peak plasma levels are usually attained within 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (2-4 mcg/mL)',
      valor: '50-65',
      unidad: '%',
      analito: 'disopiramida',
      condiciones: '2 a 4 mcg/mL',
      ref: {
        f: 'dailymed-disopiramida',
        sec: '12.3 · Farmacocinética',
        cita: 'at these concentrations protein binding varies from 50% to 65%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '6,7',
      unidad: 'h',
      analito: 'disopiramida',
      poblacion: 'personas sanas',
      ref: {
        f: 'dailymed-disopiramida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma half-life of disopyramide in healthy humans is 6.7 hours (range of 4 to 10 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'disopiramida inalterada',
      poblacion: 'varones sanos',
      ref: {
        f: 'dailymed-disopiramida',
        sec: '12.3 · Farmacocinética',
        cita: 'about 50% of a given dose of disopyramide is excreted in the urine as the unchanged drug',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-disopiramida', 'e2aa1642-d262-4520-bc6a-9fd3ad795677', 'NORPACE (DISOPYRAMIDE PHOSPHATE) CAPSULE, GELATIN COATED NORPACE CR (DISOPYRAMIDE PHOSPHATE) CAPSULE, EXTENDED RELEASE', 'Norpace', '22', '2026-08-25', '2026-11-19'),
    rengPubchem(3114, 'disopyramide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
