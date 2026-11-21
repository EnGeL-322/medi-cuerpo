import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amilorida',
    nombre: 'Amilorida',
    clase: 'Diurético ahorrador de potasio',
    sinonimos: [ 'amiloride', 'Midamor' ],
    formula: 'C6H8ClN7O',
    masaMolar: 229.63,
    smiles: 'C1(=C(N=C(C(=N1)Cl)N)N)C(=O)N=C(N)N',
    inchikey: 'XSDQTOBWRPYKKA-UHFFFAOYSA-N',
    cid: 16231,
    iupac: '3,5-diamino-6-chloro-N-(diaminomethylidene)pyrazine-2-carboxamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'amilorida-oral',
      producto: 'amiloride hydrochloride · comprimido',
      titular: 'KESIN PHARMA CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de amilorida',
        ref: { f: 'dailymed-amilorida', sec: '11 · Descripción', cita: 'Amiloride HCl, an antikaliuretic-diuretic agent', codigo: '34089-3' }
      },
      excipientes: [ 'anhydrous dibasic calcium phosphate', 'lactose monohydrate', 'magnesium stearate', 'starch, corn' ],
      usos: {
        t: 'Junto con diuréticos tiazídicos u otros que eliminan potasio, en la insuficiencia cardiaca o la hipertensión, para recuperar o mantener el potasio en sangre.',
        ref: {
          f: 'dailymed-amilorida',
          sec: '1 · Indicaciones',
          cita: 'help restore normal serum potassium levels in patients who develop hypokalemia on the kaliuretic diuretic',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-amilorida',
      advertencias: [
        {
          titulo: 'Hiperpotasemia',
          texto: 'Puede causar hiperpotasemia potencialmente mortal; es frecuente (alrededor del 10 %) si se usa sin un diurético que elimine potasio.',
          organos: [ 'sangre', 'corazon' ],
          ref: {
            f: 'dailymed-amilorida',
            sec: 'Advertencia destacada',
            cita: 'Hyperkalemia occurs commonly (about 10%) when amiloride is used without a kaliuretic diuretic',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Dolor de cabeza, debilidad y cansancio entre los efectos con incidencia superior al 1 %.',
          '34084-4',
          'Body as a Whole Headache* Weakness Fatigability'
        ],
        [ 'Datos de 837 pacientes tratados en estudios clínicos en EE. UU.', '34084-4', '837 patients treated with amiloride HCl' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg por comprimido, según la etiqueta; el activo va como clorhidrato de amilorida. Los excipientes no son el principio activo.',
    usos: 'Junto con diuréticos tiazídicos u otros que eliminan potasio, en la insuficiencia cardiaca o la hipertensión, para recuperar o mantener el potasio en sangre.',
    actua: 'Inhibe la reabsorción de sodio en el túbulo contorneado distal y los conductos colectores; así se eliminan menos potasio e hidrógeno. No es un antagonista de la aldosterona.',
    recorrido: 'El pico plasmático llega en 3 a 4 horas. Sale sin cambios por los riñones: con 20 mg, alrededor del 50 % salió por la orina y el 40 % por las heces en 72 horas. Su semivida plasmática es de 6 a 9 horas.'
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
          ref: { f: 'dailymed-amilorida', sec: '11 · Descripción', cita: 'Amiloride HCl, an antikaliuretic-diuretic agent', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El pico plasmático llega en 3 a 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico plasmático llega en 3 a 4 horas.',
          ref: { f: 'dailymed-amilorida', sec: '12 · Farmacología clínica', cita: 'Peak plasma levels are obtained in 3 to 4 hours', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'rinones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Llega a la sangre (pico a las 3-4 horas); su efecto sobre los electrolitos es máximo entre las 6 y 10 horas y dura unas 24 horas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Llega a la sangre (pico a las 3-4 horas); su efecto sobre los electrolitos es máximo entre las 6 y 10 horas y dura unas 24 horas.',
          ref: {
            f: 'dailymed-amilorida',
            sec: '12 · Farmacología clínica',
            cita: 'Its effect on electrolyte excretion reaches a peak between 6 and 10 hours and lasts about 24 hours',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Reabsorción de sodio en el túbulo distal y el conducto colector',
        efecto: 'Inhibe la reabsorción de sodio en el túbulo contorneado distal y los conductos colectores; así se eliminan menos potasio e hidrógeno. No es un antagonista de la aldosterona.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Inhibe la reabsorción de sodio en el túbulo contorneado distal y los conductos colectores; así se eliminan menos potasio e hidrógeno. No es un antagonista de la aldosterona.',
            ref: {
              f: 'dailymed-amilorida',
              sec: '12 · Farmacología clínica',
              cita: 'exerts its potassium sparing effect through the inhibition of sodium reabsorption at the distal convoluted tubule, cortical collecting tubule and collecting duct',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado no lo metaboliza.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'El hígado no lo metaboliza.',
          ref: { f: 'dailymed-amilorida', sec: '12 · Farmacología clínica', cita: 'Amiloride HCl is not metabolized by the liver', codigo: '34090-1' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sin cambios por los riñones: con 20 mg, alrededor del 50 % salió por la orina y el 40 % por las heces en 72 horas. Su semivida plasmática es de 6 a 9 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sin cambios por los riñones: con 20 mg, alrededor del 50 % salió por la orina y el 40 % por las heces en 72 horas. Su semivida plasmática es de 6 a 9 horas.',
          ref: {
            f: 'dailymed-amilorida',
            sec: '12 · Farmacología clínica',
            cita: 'About 50 percent of a 20 mg dose of amiloride HCl is excreted in the urine and 40 percent in the stool within 72 hours',
            codigo: '34090-1'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3-4',
      unidad: 'h',
      analito: 'amilorida',
      ref: { f: 'dailymed-amilorida', sec: '12 · Farmacología clínica', cita: 'Peak plasma levels are obtained in 3 to 4 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '6-9',
      unidad: 'h',
      analito: 'amilorida',
      ref: { f: 'dailymed-amilorida', sec: '12 · Farmacología clínica', cita: 'the plasma half-life varies from 6 to 9 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 72 h',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'amilorida',
      condiciones: 'dosis de 20 mg',
      ref: {
        f: 'dailymed-amilorida',
        sec: '12 · Farmacología clínica',
        cita: 'About 50 percent of a 20 mg dose of amiloride HCl is excreted in the urine',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces en 72 h',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'amilorida',
      condiciones: 'dosis de 20 mg',
      ref: { f: 'dailymed-amilorida', sec: '12 · Farmacología clínica', cita: '40 percent in the stool within 72 hours', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-amilorida', '5eedadbd-9be9-b920-e063-6394a90afa68', 'AMILORIDE HYDROCHLORIDE TABLET', 'amiloride hydrochloride', '1', '2026-11-06', '2026-11-12'),
    rengPubchem(16231, 'amiloride', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
