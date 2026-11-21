import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nicardipino',
    nombre: 'Nicardipino',
    clase: 'Antagonista del calcio dihidropiridínico',
    sinonimos: [ 'nicardipine', 'Cardene' ],
    formula: 'C26H29N3O6',
    masaMolar: 479.5,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OCCN(C)CC2=CC=CC=C2)C3=CC(=CC=C3)[N+](=O)[O-])C(=O)OC',
    inchikey: 'ZBBHBTPTTSWHBA-UHFFFAOYSA-N',
    cid: 4474,
    iupac: '5-O-[2-[benzyl(methyl)amino]ethyl] 3-O-methyl 2,6-dimethyl-4-(3-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nicardipino-oral',
      producto: 'Nicardipine Hydrochloride · cápsula',
      titular: 'GLENMARK PHARMACEUTICALS INC., USA',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '20 mg o 30 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de nicardipino',
        ref: { f: 'dailymed-nicardipino', sec: '11 · Descripción', cita: 'NICARDIPINE HYDROCHLORIDE', codigo: '34089-3' }
      },
      excipientes: [
        'magnesium stearate',
        'starch, corn',
        'titanium dioxide',
        'gelatin, unspecified',
        'fd&c blue no. 1',
        'ferrosoferric oxide',
        'potassium hydroxide',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de la angina estable crónica (de esfuerzo), sola o con betabloqueantes, y de la hipertensión.',
        ref: {
          f: 'dailymed-nicardipino',
          sec: '1 · Indicaciones',
          cita: 'Nicardipine hydrochloride capsules are indicated for the management of patients with chronic stable angina (effort-associated angina)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nicardipino',
      advertencias: [
        {
          titulo: 'Aumento de la angina',
          texto: 'Alrededor del 7 % de los pacientes de los ensayos de angina tuvo angina más frecuente, larga o intensa al empezar o subir la dosis, frente al 4 % con placebo.',
          organos: [],
          ref: {
            f: 'dailymed-nicardipino',
            sec: 'Advertencias',
            cita: 'About 7% of patients in short-term, placebo-controlled angina trials have developed increased frequency, duration or severity of angina on starting nicardipine hydrochloride or at the time of dosage increases',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'En los estudios controlados a corto plazo, 1910 pacientes recibieron nicardipino; los acontecimientos adversos no solían ser graves.',
          '34084-4',
          'adverse experiences were generally not serious'
        ],
        [
          'Los acontecimientos adversos se notificaron de forma espontánea en estudios de hasta 3 meses.',
          '34084-4',
          'In these studies adverse events were reported spontaneously'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 20 mg o 30 mg por cápsula, según la etiqueta; el activo va como clorhidrato de nicardipino. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la angina estable crónica (de esfuerzo), sola o con betabloqueantes, y de la hipertensión.',
    actua: 'Bloquea la entrada de calcio: inhibe el paso transmembrana de iones de calcio al músculo cardíaco y al músculo liso sin cambiar la calcemia.',
    recorrido: 'Se absorbe por completo, pero su primer paso saturable deja una biodisponibilidad sistémica de alrededor del 35 % tras 30 mg en estado estacionario. Tras una dosis oral marcada en solución, el 60 % de la radiactividad se recuperó en la orina y el 35 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'Nicardipine hydrochloride is completely absorbed following oral doses administered as capsules',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por completo, pero su primer paso saturable deja una biodisponibilidad sistémica de alrededor del 35 % tras 30 mg en estado estacionario.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo, pero su primer paso saturable deja una biodisponibilidad sistémica de alrededor del 35 % tras 30 mg en estado estacionario.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'While nicardipine hydrochloride is completely absorbed, it is subject to saturable first pass metabolism and the systemic bioavailability is about 35% following a 30-mg oral dose at steady-state',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une mucho (más del 95 %) a las proteínas del plasma humano en un amplio intervalo de concentraciones.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho (más del 95 %) a las proteínas del plasma humano en un amplio intervalo de concentraciones.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'Nicardipine hydrochloride is highly protein bound (>95%) in human plasma over a wide concentration range',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Canal de calcio lento',
        efecto: 'Bloquea la entrada de calcio: inhibe el paso transmembrana de iones de calcio al músculo cardíaco y al músculo liso sin cambiar la calcemia.',
        lugar: [ 'corazon', 'vasos' ],
        datos: [
          {
            t: 'Bloquea la entrada de calcio: inhibe el paso transmembrana de iones de calcio al músculo cardíaco y al músculo liso sin cambiar la calcemia.',
            ref: {
              f: 'dailymed-nicardipino',
              sec: '12 · Farmacología clínica',
              cita: 'Nicardipine hydrochloride is a calcium entry blocker (slow channel blocker or calcium ion antagonist) that inhibits the transmembrane influx of calcium ions into cardiac muscle and smooth muscle without changing serum calcium concentrations',
              codigo: '34090-1'
            }
          },
          {
            t: 'La contracción del músculo cardíaco y del músculo liso vascular depende de la entrada de calcio extracelular.',
            ref: {
              f: 'dailymed-nicardipino',
              sec: '12 · Farmacología clínica',
              cita: 'The contractile processes of cardiac muscle and vascular smooth muscle',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por las enzimas hepáticas del citocromo P450 CYP2C8, 2D6 y 3A4; su farmacocinética no es lineal por el primer paso hepático saturable.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por las enzimas hepáticas del citocromo P450 CYP2C8, 2D6 y 3A4; su farmacocinética no es lineal por el primer paso hepático saturable.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'Nicardipine hydrochloride is metabolized extensively by the hepatic cytochrome P450 enzymes, CYP2C8, 2D6, and 3A4; less than 1% of intact drug is detected in the urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'La farmacocinética no es lineal por el metabolismo hepático de primer paso saturable.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'The pharmacokinetics of nicardipine hydrochloride are nonlinear due to saturable hepatic first pass metabolism',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en solución, el 60 % de la radiactividad se recuperó en la orina y el 35 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en solución, el 60 % de la radiactividad se recuperó en la orina y el 35 % en las heces.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'Following a radioactive oral dose in solution, 60% of the radioactivity was recovered in the urine and 35% in feces',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida terminal media fue de 8,6 horas en estado estacionario; en las primeras 8 horas la semivida es de 2 a 4 horas.',
          ref: {
            f: 'dailymed-nicardipino',
            sec: '12 · Farmacología clínica',
            cita: 'there is a reproducible terminal plasma half-life that averaged 8.6 hours following 30- and 40-mg doses at steady-state (tid)',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad sistémica (30 mg, estado estacionario)',
      valor: '35 (aprox.)',
      unidad: '%',
      analito: 'nicardipino',
      condiciones: '30 mg, estado estacionario',
      ref: {
        f: 'dailymed-nicardipino',
        sec: '12 · Farmacología clínica',
        cita: 'the systemic bioavailability is about 35% following a 30-mg oral dose at steady-state',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 95',
      unidad: '%',
      analito: 'nicardipino',
      ref: {
        f: 'dailymed-nicardipino',
        sec: '12 · Farmacología clínica',
        cita: 'Nicardipine hydrochloride is highly protein bound (>95%) in human plasma',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '8,6',
      unidad: 'h',
      analito: 'nicardipino',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-nicardipino',
        sec: '12 · Farmacología clínica',
        cita: 'a reproducible terminal plasma half-life that averaged 8.6 hours following 30- and 40-mg doses at steady-state',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '60',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada en solución',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-nicardipino',
        sec: '12 · Farmacología clínica',
        cita: '60% of the radioactivity was recovered in the urine and 35% in feces',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nicardipino', '3955d43d-a87f-4d2c-b90e-3ecf0d6aa148', 'NICARDIPINE HYDROCHLORIDE CAPSULE', 'Nicardipine Hydrochloride', '3', '2026-01-30', '2026-11-19'),
    rengPubchem(4474, 'nicardipine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
