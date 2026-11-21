import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'flecainida',
    nombre: 'Flecainida',
    clase: 'Antiarrítmico de clase IC',
    sinonimos: [ 'flecainide', 'Tambocor' ],
    formula: 'C17H20F6N2O3',
    masaMolar: 414.34,
    smiles: 'C1CCNC(C1)CNC(=O)C2=C(C=CC(=C2)OCC(F)(F)F)OCC(F)(F)F',
    inchikey: 'DJBNUMBKLMJRSA-UHFFFAOYSA-N',
    cid: 3356,
    iupac: 'N-(piperidin-2-ylmethyl)-2,5-bis(2,2,2-trifluoroethoxy)benzamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'flecainida-oral',
      producto: 'Flecainide Acetate · comprimido',
      titular: 'AMNEAL PHARMACEUTICALS OF NEW YORK LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg o 150 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Acetato de flecainida', ref: { f: 'dailymed-flecainida', sec: '11 · Descripción', cita: 'Flecainide acetate', codigo: '34089-3' } },
      excipientes: [ 'Croscarmelosa sódica', 'celulosa microcristalina', 'estearato de magnesio' ],
      usos: {
        t: 'En personas sin cardiopatía estructural, prevención de taquicardias supraventriculares paroxísticas y de la fibrilación o el aleteo auricular paroxísticos con síntomas incapacitantes, entre otros usos.',
        ref: {
          f: 'dailymed-flecainida',
          sec: '1 · Indicaciones',
          cita: 'In patients without structural heart disease, flecainide is indicated for the prevention of',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-flecainida',
      advertencias: [
        {
          titulo: 'Mortalidad tras un infarto',
          texto: 'En el ensayo CAST, en pacientes con arritmias ventriculares no graves tras un infarto, hubo más muertes o paradas cardiacas no mortales.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-flecainida',
            sec: 'Advertencias',
            cita: 'An excessive mortality or non-fatal cardiac arrest rate was seen',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Insuficiencia cardiaca nueva o peor en el 6,3 % de 1046 pacientes con extrasístoles o taquicardia ventricular.',
          '34084-4',
          'New or worsened CHF occurred in 6.3% of 1046 patients'
        ],
        [
          'Arritmias ventriculares nuevas o más graves, sobre todo al empezar con dosis altas.',
          '34084-4',
          'incidence of new or exacerbated ventricular arrhythmias'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg, 100 mg o 150 mg por comprimido, según la etiqueta; el activo va como acetato de flecainida. Los excipientes no son el principio activo.',
    usos: 'En personas sin cardiopatía estructural, prevención de taquicardias supraventriculares paroxísticas y de la fibrilación o el aleteo auricular paroxísticos con síntomas incapacitantes, entre otros usos.',
    actua: 'Es un antiarrítmico de clase IC con actividad anestésica local: enlentece la conducción eléctrica en todo el corazón, sobre todo en el sistema de His-Purkinje.',
    recorrido: 'Se absorbe casi por completo y sin primer paso relevante; el pico llega hacia las 3 horas (de 1 a 6). La comida y los antiácidos no afectan a la absorción. En personas sanas, alrededor del 30 % de una dosis oral (10-50 %) sale sin cambios por la orina; la mayor parte del resto, como esos metabolitos. La semivida media es de unas 20 horas (12 a 27).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: {
            f: 'dailymed-flecainida',
            sec: '11 · Descripción',
            cita: 'available in tablets of 50, 100, or 150 mg for oral administration',
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
      ocurre: 'Se absorbe casi por completo y sin primer paso relevante; el pico llega hacia las 3 horas (de 1 a 6). La comida y los antiácidos no afectan a la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe casi por completo y sin primer paso relevante; el pico llega hacia las 3 horas (de 1 a 6). La comida y los antiácidos no afectan a la absorción.',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'Following oral administration, the absorption of flecainide is nearly complete',
            codigo: '34090-1'
          }
        },
        {
          t: 'Pico plasmático hacia las 3 horas.',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'Peak plasma levels are attained at about three hours in most individuals (range, 1 to 6 hours)',
            codigo: '34090-1'
          }
        },
        {
          t: 'Sin biotransformación presistémica relevante.',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'Flecainide does not undergo any consequential presystemic biotransformation',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 40 % se une a proteínas del plasma; el efecto máximo se asocia a concentraciones de 0,2 a 1 mcg/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 40 % se une a proteínas del plasma; el efecto máximo se asocia a concentraciones de 0,2 a 1 mcg/mL.',
          ref: { f: 'dailymed-flecainida', sec: '12 · Farmacología clínica', cita: 'plasma proteins is about 40%', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Canales de sodio del corazón',
        efecto: 'Es un antiarrítmico de clase IC con actividad anestésica local: enlentece la conducción eléctrica en todo el corazón, sobre todo en el sistema de His-Purkinje.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Es un antiarrítmico de clase IC con actividad anestésica local: enlentece la conducción eléctrica en todo el corazón, sobre todo en el sistema de His-Purkinje.',
            ref: {
              f: 'dailymed-flecainida',
              sec: '12 · Farmacología clínica',
              cita: 'produces a dose-related decrease in intracardiac conduction in all parts of the heart with the greatest effect on the His-Purkinje system',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma en dos metabolitos principales: el meta-O-desalquilado (activo, con una quinta parte de la potencia) y su lactama (inactiva), sobre todo conjugados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma en dos metabolitos principales: el meta-O-desalquilado (activo, con una quinta parte de la potencia) y su lactama (inactiva), sobre todo conjugados.',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'The two major urinary metabolites are meta-0-dealkylated flecainide',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Flecainida meta-O-desalquilada',
          actividad: 'activo',
          nota: 'Alrededor de la quinta parte de la potencia de la flecainida.',
          ref: { f: 'dailymed-flecainida', sec: '12 · Farmacología clínica', cita: 'active, but about one-fifth as potent', codigo: '34090-1' }
        },
        {
          nombre: 'Lactama meta-O-desalquilada',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'the meta-0-dealkylated lactam of flecainide (non-active metabolite)',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En personas sanas, alrededor del 30 % de una dosis oral (10-50 %) sale sin cambios por la orina; la mayor parte del resto, como esos metabolitos. La semivida media es de unas 20 horas (12 a 27).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En personas sanas, alrededor del 30 % de una dosis oral (10-50 %) sale sin cambios por la orina; la mayor parte del resto, como esos metabolitos. La semivida media es de unas 20 horas (12 a 27).',
          ref: {
            f: 'dailymed-flecainida',
            sec: '12 · Farmacología clínica',
            cita: 'about 30% of a single oral dose (range, 10% to 50%) is excreted in urine as unchanged drug',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3 (1-6)',
      unidad: 'h',
      analito: 'flecainida',
      ref: {
        f: 'dailymed-flecainida',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma levels are attained at about three hours in most individuals (range, 1 to 6 hours)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática aparente media',
      valor: '20 (12-27)',
      unidad: 'h',
      analito: 'flecainida',
      poblacion: 'pacientes con extrasístoles ventriculares',
      condiciones: 'dosis orales múltiples',
      ref: {
        f: 'dailymed-flecainida',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent plasma half-life averages about 20 hours and is quite variable (range, 12 to 27 hours)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'flecainida',
      ref: { f: 'dailymed-flecainida', sec: '12 · Farmacología clínica', cita: 'plasma proteins is about 40%', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '30 (10-50)',
      unidad: '% de la dosis',
      analito: 'flecainida',
      poblacion: 'personas sanas',
      condiciones: 'dosis oral única',
      ref: {
        f: 'dailymed-flecainida',
        sec: '12 · Farmacología clínica',
        cita: 'about 30% of a single oral dose (range, 10% to 50%) is excreted in urine as unchanged drug',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Concentraciones para el efecto máximo',
      valor: '0,2-1',
      unidad: 'mcg/mL',
      analito: 'flecainida',
      ref: {
        f: 'dailymed-flecainida',
        sec: '12 · Farmacología clínica',
        cita: 'plasma levels of 0.2 to 1 mcg/mL may be needed to obtain the maximal therapeutic effect',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-flecainida', 'ee9595d5-08a1-4529-9215-ddc3c7f929c4', 'FLECAINIDE ACETATE TABLET', 'Flecainide Acetate', '11', '2026-08-17', '2026-11-12'),
    rengPubchem(3356, 'flecainide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
