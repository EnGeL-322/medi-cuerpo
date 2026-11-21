import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dicloxacilina',
    nombre: 'Dicloxacilina',
    clase: 'Penicilina resistente a penicilinasas',
    sinonimos: [ 'dicloxacillin' ],
    formula: 'C19H17Cl2N3O5S',
    masaMolar: 470.3,
    smiles: 'CC1=C(C(=NO1)C2=C(C=CC=C2Cl)Cl)C(=O)N[C@H]3[C@@H]4N(C3=O)[C@H](C(S4)(C)C)C(=O)O',
    inchikey: 'YFAGHNZHGGCZAX-JKIFEVAISA-N',
    cid: 18381,
    iupac: '(2S,5R,6R)-6-[[3-(2,6-dichlorophenyl)-5-methyl-1,2-oxazole-4-carbonyl]amino]-3,3-dimethyl-7-oxo-4-thia-1-azabicyclo[3.2.0]heptane-2-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'dicloxacilina-oral',
      producto: 'DICLOXACILLIN SODIUM · cápsula',
      titular: 'AUROBINDO PHARMA LIMITED',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '250 mg o 500 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Dicloxacilina sódica',
        ref: {
          f: 'dailymed-dicloxacilina',
          sec: '11 · Descripción',
          cita: 'Dicloxacillin sodium, USP is an antibacterial agent of the isoxazolyl penicillin series',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'magnesium stearate',
        'fd&c blue no. 1',
        'gelatin, unspecified',
        'sodium lauryl sulfate',
        'titanium dioxide',
        'ferrosoferric oxide',
        'potassium hydroxide',
        'shellac'
      ],
      usos: {
        t: 'Infecciones por bacterias sensibles, sobre todo estafilococos productores de penicilinasa, demostradas o muy probables.',
        ref: {
          f: 'dailymed-dicloxacilina',
          sec: '1 · Indicaciones',
          cita: 'dicloxacillin sodium capsules should be used only to treat or prevent infections that are proven or strongly suspected to be caused by susceptible bacteria',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dicloxacilina',
      advertencias: [
        {
          titulo: 'Anafilaxia',
          texto: 'Se han producido reacciones de hipersensibilidad graves y a veces mortales; el choque anafiláctico ocurre en el 0,015-0,04 % de los tratados.',
          organos: [ 'vias-respiratorias', 'vasos' ],
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: 'Advertencias',
            cita: 'The incidence of anaphylactic shock in all penicillin-treated patients is between 0.015% and 0.04%',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones alérgicas a la penicilina aparecen en el 0,7 % al 10 %.',
          '34084-4',
          'incidence of allergic reactions to penicillin ranges from 0.7% to 10%'
        ],
        [
          'Las reacciones inmediatas, en los primeros 20 minutos, van de urticaria y picor a edema, broncoespasmo e hipotensión.',
          '34084-4',
          'Immediate reactions usually occur within 20 minutes of administration'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 250 mg o 500 mg por cápsula, según la etiqueta; el activo va como dicloxacilina sódica. Los excipientes no son el principio activo.',
    usos: 'Infecciones por bacterias sensibles, sobre todo estafilococos productores de penicilinasa, demostradas o muy probables.',
    actua: 'Como todas las penicilinas, inhibe la síntesis de la pared celular bacteriana y mata a las bacterias sensibles mientras se multiplican; resiste la penicilinasa.',
    recorrido: 'Se absorbe rápido pero de forma incompleta; el pico llega en 1-1,5 horas (10-17 mcg/mL con 500 mg). Tomarla tras las comidas retrasa la absorción. Se elimina rápido, sobre todo sin cambios por la orina (filtración glomerular y secreción tubular); su semivida es de unos 0,7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula; la dicloxacilina resiste el ácido del estómago.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula; la dicloxacilina resiste el ácido del estómago.',
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: '11 · Descripción',
            cita: 'It is a penicillinase resistant, acid resistant semisynthetic penicillin suitable for oral administration',
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
      ocurre: 'Se absorbe rápido pero de forma incompleta; el pico llega en 1-1,5 horas (10-17 mcg/mL con 500 mg). Tomarla tras las comidas retrasa la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido pero de forma incompleta; el pico llega en 1-1,5 horas (10-17 mcg/mL con 500 mg). Tomarla tras las comidas retrasa la absorción.',
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: '12 · Farmacología clínica',
            cita: 'Absorption of dicloxacillin sodium after oral administration is rapid but incomplete',
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
      ocurre: 'Una vez absorbida, el 97,9 % se une a proteínas del suero, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Una vez absorbida, el 97,9 % se une a proteínas del suero, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: '12 · Farmacología clínica',
            cita: 'Once absorbed, dicloxacillin sodium is 97.9 ± 0.6 percent bound to serum protein',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de la pared bacteriana',
        efecto: 'Como todas las penicilinas, inhibe la síntesis de la pared celular bacteriana y mata a las bacterias sensibles mientras se multiplican; resiste la penicilinasa.',
        lugar: [ 'sitio-infeccion', 'piel' ],
        datos: [
          {
            t: 'Como todas las penicilinas, inhibe la síntesis de la pared celular bacteriana y mata a las bacterias sensibles mientras se multiplican; resiste la penicilinasa.',
            ref: {
              f: 'dailymed-dicloxacilina',
              sec: '12 · Farmacología clínica',
              cita: 'All penicillins inhibit the biosynthesis of the bacterial cell wall',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una parte se inactiva en el hígado y se elimina por la bilis.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una parte se inactiva en el hígado y se elimina por la bilis.',
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: '12 · Farmacología clínica',
            cita: 'Nonrenal elimination includes hepatic inactivation and excretion in bile',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina rápido, sobre todo sin cambios por la orina (filtración glomerular y secreción tubular); su semivida es de unos 0,7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina rápido, sobre todo sin cambios por la orina (filtración glomerular y secreción tubular); su semivida es de unos 0,7 horas.',
          ref: {
            f: 'dailymed-dicloxacilina',
            sec: '12 · Farmacología clínica',
            cita: 'Dicloxacillin sodium is rapidly excreted, primarily as unchanged drug in the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-1,5',
      unidad: 'h',
      analito: 'dicloxacilina',
      ref: { f: 'dailymed-dicloxacilina', sec: '12 · Farmacología clínica', cita: 'peak blood levels are achieved in 1 to 1.5 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Pico sérico',
      valor: '10-17',
      unidad: 'mcg/mL',
      analito: 'dicloxacilina',
      condiciones: 'dosis única de 500 mg',
      ref: {
        f: 'dailymed-dicloxacilina',
        sec: '12 · Farmacología clínica',
        cita: 'peak serum concentrations range from 10 to 17 mcg/mL for dicloxacillin',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '97,9 (± 0,6)',
      unidad: '%',
      analito: 'dicloxacilina',
      ref: { f: 'dailymed-dicloxacilina', sec: '12 · Farmacología clínica', cita: 'is 97.9 ± 0.6 percent bound to serum protein', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '0,7 (aprox.)',
      unidad: 'h',
      analito: 'dicloxacilina',
      ref: {
        f: 'dailymed-dicloxacilina',
        sec: '12 · Farmacología clínica',
        cita: 'The elimination half-life for dicloxacillin is about 0.7 hour',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dicloxacilina', '9074b5a6-850c-4144-9097-bb21073ee54d', 'DICLOXACILLIN SODIUM CAPSULE', 'DICLOXACILLIN SODIUM', '2', '2023-12-29', '2026-11-12'),
    rengPubchem(18381, 'dicloxacillin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
