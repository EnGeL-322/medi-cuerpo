import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zonisamida',
    nombre: 'Zonisamida',
    clase: 'Antiepiléptico (sulfonamida)',
    sinonimos: [ 'zonisamide', 'Zonegran' ],
    formula: 'C8H8N2O3S',
    masaMolar: 212.23,
    smiles: 'C1=CC=C2C(=C1)C(=NO2)CS(=O)(=O)N',
    inchikey: 'UBQNRHZMVUUOMG-UHFFFAOYSA-N',
    cid: 5734,
    iupac: '1,2-benzoxazol-3-ylmethanesulfonamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'zonisamida-oral',
      producto: 'Zonegran · cápsula',
      titular: 'ADVANZ PHARMA (US) CORP.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por cápsula, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'hydrogenated soybean oil', 'sodium lauryl sulfate', 'gelatin, unspecified', 'titanium dioxide' ],
      usos: {
        t: 'Tratamiento complementario de las crisis parciales en adultos con epilepsia.',
        ref: {
          f: 'dailymed-zonisamida',
          sec: '1 · Indicaciones',
          cita: 'indicated as adjunctive therapy in the treatment of partial seizures in adults with epilepsy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zonisamida',
      advertencias: [
        {
          titulo: 'Reacciones graves a las sulfonamidas',
          texto: 'Rara vez se han producido muertes por reacciones graves a las sulfonamidas, como Stevens-Johnson, necrosis hepática fulminante o agranulocitosis.',
          organos: [ 'piel', 'higado', 'medula-osea' ],
          ref: {
            f: 'dailymed-zonisamida',
            sec: 'Advertencias',
            cita: 'Fatalities have occurred, although rarely, as a result of severe reactions to sulfonamides',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos un 4 % más que con placebo): somnolencia, falta de apetito, mareo, ataxia, agitación o irritabilidad y dificultad de memoria o concentración.',
          '34084-4',
          'were somnolence, anorexia, dizziness, ataxia, agitation/irritability'
        ],
        [
          'El 12 % dejó el tratamiento por un efecto adverso, frente al 6 % con placebo.',
          '34084-4',
          '12% of patients receiving ZONEGRAN as adjunctive therapy discontinued due to an adverse reaction'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de las crisis parciales en adultos con epilepsia.',
    actua: 'Su mecanismo exacto se desconoce; podría actuar sobre canales de sodio y de calcio. Además inhibe la anhidrasa carbónica.',
    recorrido: 'Con 200-400 mg, el pico (2-5 µg/mL) llega en 2 a 6 horas; la comida retrasa el pico a 4-6 horas sin cambiar la biodisponibilidad. El 62 % de una dosis marcada se recuperó en la orina y el 3 % en las heces en 10 días: un 35 % como zonisamida, un 15 % como N-acetil zonisamida y un 50 % como glucurónido de SMAP. Su semivida plasmática ronda las 63 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '11 · Descripción',
            cita: 'ZONEGRAN ® (zonisamide) is an antiseizure drug chemically classified as a sulfonamide',
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
      ocurre: 'Con 200-400 mg, el pico (2-5 µg/mL) llega en 2 a 6 horas; la comida retrasa el pico a 4-6 horas sin cambiar la biodisponibilidad.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 200-400 mg, el pico (2-5 µg/mL) llega en 2 a 6 horas; la comida retrasa el pico a 4-6 horas sin cambiar la biodisponibilidad.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '12 · Farmacología clínica',
            cita: 'peak plasma concentrations (range: 2-5 µg/mL) in normal volunteers occur within 2-6 hours',
            codigo: '34090-1'
          }
        },
        {
          t: 'La comida retrasa el pico, pero no cambia la biodisponibilidad.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '12 · Farmacología clínica',
            cita: 'food has no effect on the bioavailability of zonisamide',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen aparente de distribución de 1,45 L/kg; alrededor del 40 % se une a proteínas del plasma y se une también a los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de distribución de 1,45 L/kg; alrededor del 40 % se une a proteínas del plasma y se une también a los glóbulos rojos.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '12 · Farmacología clínica',
            cita: 'is approximately 40% bound to human plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio y calcio (mecanismo no conocido del todo)',
        efecto: 'Su mecanismo exacto se desconoce; podría actuar sobre canales de sodio y de calcio. Además inhibe la anhidrasa carbónica.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; podría actuar sobre canales de sodio y de calcio. Además inhibe la anhidrasa carbónica.',
            ref: {
              f: 'dailymed-zonisamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Zonisamide may produce these effects through action at sodium and calcium channels',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se acetila (N-acetiltransferasas) a N-acetil zonisamida y se reduce, por CYP3A4, al metabolito de anillo abierto SMAP, que se glucuronida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se acetila (N-acetiltransferasas) a N-acetil zonisamida y se reduce, por CYP3A4, al metabolito de anillo abierto SMAP, que se glucuronida.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '12 · Farmacología clínica',
            cita: 'Zonisamide undergoes acetylation by N-acetyl-transferases to form N-acetyl zonisamide',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-acetil zonisamida',
          actividad: 'desconocida',
          ref: { f: 'dailymed-zonisamida', sec: '12 · Farmacología clínica', cita: '15% as N-acetyl zonisamide', codigo: '34090-1' }
        },
        {
          nombre: 'Glucurónido de SMAP (2-sulfamoilacetilfenol)',
          actividad: 'desconocida',
          ref: { f: 'dailymed-zonisamida', sec: '12 · Farmacología clínica', cita: '50% as the glucuronide of SMAP', codigo: '34090-1' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 62 % de una dosis marcada se recuperó en la orina y el 3 % en las heces en 10 días: un 35 % como zonisamida, un 15 % como N-acetil zonisamida y un 50 % como glucurónido de SMAP. Su semivida plasmática ronda las 63 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 62 % de una dosis marcada se recuperó en la orina y el 3 % en las heces en 10 días: un 35 % como zonisamida, un 15 % como N-acetil zonisamida y un 50 % como glucurónido de SMAP. Su semivida plasmática ronda las 63 horas.',
          ref: {
            f: 'dailymed-zonisamida',
            sec: '12 · Farmacología clínica',
            cita: '62% of the radiolabeled dose was recovered in the urine, with 3% in the feces by day 10',
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
      valor: '2-6',
      unidad: 'h',
      analito: 'zonisamida',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis de 200-400 mg',
      ref: { f: 'dailymed-zonisamida', sec: '12 · Farmacología clínica', cita: 'occur within 2-6 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '2-5',
      unidad: 'µg/mL',
      analito: 'zonisamida',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis de 200-400 mg',
      ref: { f: 'dailymed-zonisamida', sec: '12 · Farmacología clínica', cita: 'peak plasma concentrations (range: 2-5 µg/mL)', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '1,45 (aprox.)',
      unidad: 'L/kg',
      analito: 'zonisamida',
      condiciones: 'dosis oral de 400 mg',
      ref: {
        f: 'dailymed-zonisamida',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent volume of distribution (V/F) of zonisamide is about 1.45 L/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'zonisamida',
      ref: { f: 'dailymed-zonisamida', sec: '12 · Farmacología clínica', cita: 'is approximately 40% bound to human plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación en el plasma',
      valor: '63 (aprox.)',
      unidad: 'h',
      analito: 'zonisamida',
      ref: {
        f: 'dailymed-zonisamida',
        sec: '12 · Farmacología clínica',
        cita: 'elimination half-life of zonisamide in plasma is approximately 63 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida en los glóbulos rojos',
      valor: '105 (aprox.)',
      unidad: 'h',
      analito: 'zonisamida',
      ref: {
        f: 'dailymed-zonisamida',
        sec: '12 · Farmacología clínica',
        cita: 'The elimination half-life of zonisamide in red blood cells is approximately 105 hours',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zonisamida', 'd12de43e-3ac3-4335-bc85-70d7366a91eb', 'ZONEGRAN (ZONISAMIDE) CAPSULE', 'Zonegran', '13', '2026-09-24', '2026-11-12'),
    rengPubchem(5734, 'zonisamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
