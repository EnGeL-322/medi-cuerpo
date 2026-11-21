import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'resmetirom',
    nombre: 'Resmetirom',
    clase: 'Agonista parcial del receptor beta de la hormona tiroidea (THR-β)',
    sinonimos: [ 'resmetirom', 'Rezdiffra' ],
    formula: 'C17H12Cl2N6O4',
    masaMolar: 435.2,
    smiles: 'CC(C)C1=CC(=NNC1=O)OC2=C(C=C(C=C2Cl)N3C(=O)NC(=O)C(=N3)C#N)Cl',
    inchikey: 'FDBYIYFVSAHJLY-UHFFFAOYSA-N',
    cid: 15981237,
    iupac: '2-[3,5-dichloro-4-[(6-oxo-5-propan-2-yl-1H-pyridazin-3-yl)oxy]phenyl]-3,5-dioxo-1,2,4-triazine-6-carbonitrile',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'resmetirom-oral',
      producto: 'REZDIFFRA · comprimido recubierto',
      titular: 'MADRIGAL PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '80 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'Dióxido de silicio coloidal',
        'Croscarmelosa sódica',
        'Estearato de magnesio',
        'Manitol',
        'Celulosa microcristalina',
        'Cubierta Opadry: polietilenglicol, alcohol polivinílico, talco, dióxido de titanio y óxidos de hierro rojo y amarillo según la dosis'
      ],
      usos: {
        t: 'Junto con dieta y ejercicio, tratamiento de adultos con esteatohepatitis asociada a disfunción metabólica (MASH) no cirrótica con fibrosis hepática moderada o avanzada (F2 a F3).',
        ref: {
          f: 'dailymed-resmetirom',
          sec: '1 · Indicaciones',
          cita: 'REZDIFFRA ® is indicated in conjunction with diet and exercise for the treatment of adults with noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-resmetirom',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar las pruebas hepáticas y las reacciones hepáticas; suspender si se sospecha hepatotoxicidad.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-resmetirom',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients during treatment with REZDIFFRA for elevations in liver tests and for the development of liver-related adverse reactions',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones de la vesícula biliar',
          texto: 'La colelitiasis y la colecistitis fueron más frecuentes con resmetirom.',
          organos: [],
          ref: {
            f: 'dailymed-resmetirom',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cholelithiasis and cholecystitis were observed more often in REZDIFFRA-treated patients',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos 5 % y más que con placebo): diarrea, náuseas, prurito, vómitos, estreñimiento, dolor abdominal y mareo.',
          '34084-4',
          'most common adverse reactions with REZDIFFRA (reported in at least 5% of patients and higher compared to placebo) are: diarrhea, nausea, pruritus, vomiting, constipation, abdominal pain, and dizziness'
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
    contiene: 'Comprimido recubierto: 80 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Junto con dieta y ejercicio, tratamiento de adultos con esteatohepatitis asociada a disfunción metabólica (MASH) no cirrótica con fibrosis hepática moderada o avanzada (F2 a F3).',
    actua: 'Agonista parcial del receptor beta de la hormona tiroidea, la forma principal en el hígado, cuya estimulación reduce los triglicéridos intrahepáticos.',
    recorrido: 'La mediana del tmax es de unas 4 horas con dosis diarias repetidas; los alimentos bajan la Cmax un 33 % y el AUC un 11 %, sin diferencias clínicamente significativas. Tras una dosis marcada de 100 mg, alrededor del 67 % de la radiactividad se recuperó en las heces, sobre todo como metabolitos, y el 24 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-resmetirom', sec: '3 · Formas y concentraciones', cita: '60 mg: white oval-shaped film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de unas 4 horas con dosis diarias repetidas; los alimentos bajan la Cmax un 33 % y el AUC un 11 %, sin diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de unas 4 horas con dosis diarias repetidas; los alimentos bajan la Cmax un 33 % y el AUC un 11 %, sin diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'The resmetirom median time to maximum plasma concentration (T max ) is approximately 4 hours following multiple daily doses of resmetirom 80 mg or 100 mg',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con alimentos la Cmax bajó un 33 %, el AUC un 11 % y el tmax se retrasó unas 2 horas.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'Concomitant food administration resulted in a 33% decrease in C max , an 11% decrease in AUC, and a delay in median T max by about 2 hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 99 % a las proteínas; el volumen de distribución aparente en estado estacionario es de 68 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas; el volumen de distribución aparente en estado estacionario es de 68 L.',
          ref: { f: 'dailymed-resmetirom', sec: '12 · Farmacología clínica', cita: 'Resmetirom is greater than 99% protein-bound', codigo: '34090-1' }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 68 L.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'Resmetirom apparent volume of distribution (Vd/F) at steady-state is 68 (227%) L',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor beta de la hormona tiroidea (THR-β)',
        efecto: 'Agonista parcial del receptor beta de la hormona tiroidea, la forma principal en el hígado, cuya estimulación reduce los triglicéridos intrahepáticos.',
        lugar: [],
        datos: [
          {
            t: 'Agonista parcial del receptor beta de la hormona tiroidea, la forma principal en el hígado, cuya estimulación reduce los triglicéridos intrahepáticos.',
            ref: {
              f: 'dailymed-resmetirom',
              sec: '12 · Farmacología clínica',
              cita: 'Resmetirom is a partial agonist of the thyroid hormone receptor-beta (THR-β)',
              codigo: '34090-1'
            }
          },
          {
            t: 'El THR-β es la forma principal en el hígado y su estimulación reduce los triglicéridos intrahepáticos.',
            ref: {
              f: 'dailymed-resmetirom',
              sec: '12 · Farmacología clínica',
              cita: 'THR-β is the major form of THR in the liver, and stimulation of THR-β in the liver reduces intrahepatic triglycerides',
              codigo: '34090-1'
            },
            poblacion: 'higado'
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por la CYP2C8 y no por otras enzimas CYP in vitro; MGL-3623 es un metabolito principal 28 veces menos potente sobre el THR-β.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por la CYP2C8 y no por otras enzimas CYP in vitro; MGL-3623 es un metabolito principal 28 veces menos potente sobre el THR-β.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'Resmetirom is metabolized by CYP2C8 and is not metabolized by other CYP enzymes in vitro',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'MGL-3623',
          actividad: 'activo',
          nota: 'Metabolito principal, 28 veces menos potente; supone del 33 % al 51 % del AUC del resmetirom.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'MGL-3623 is a major metabolite with a 28-times lower potency for THR-β than resmetirom',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada de 100 mg, alrededor del 67 % de la radiactividad se recuperó en las heces, sobre todo como metabolitos, y el 24 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada de 100 mg, alrededor del 67 % de la radiactividad se recuperó en las heces, sobre todo como metabolitos, y el 24 % en la orina.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 67% of the total radioactive dose was recovered in the feces, mostly as metabolites and 24% of the total radioactive dose was recovered in the urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'La mediana de la semivida plasmática terminal es de 4,5 horas y el aclaramiento aparente de 17,5 L/h.',
          ref: {
            f: 'dailymed-resmetirom',
            sec: '12 · Farmacología clínica',
            cita: 'Resmetirom median terminal plasma half-life (t½) is 4.5 hours and the steady state apparent clearance (CL/F) is 17.5 (56.3%) L/h',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'resmetirom',
      condiciones: 'dosis diarias repetidas',
      ref: {
        f: 'dailymed-resmetirom',
        sec: '12 · Farmacología clínica',
        cita: 'The resmetirom median time to maximum plasma concentration (T max ) is approximately 4 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99',
      unidad: '%',
      analito: 'resmetirom',
      ref: { f: 'dailymed-resmetirom', sec: '12 · Farmacología clínica', cita: 'Resmetirom is greater than 99% protein-bound', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '68',
      unidad: 'L',
      analito: 'resmetirom',
      ref: {
        f: 'dailymed-resmetirom',
        sec: '12 · Farmacología clínica',
        cita: 'Resmetirom apparent volume of distribution (Vd/F) at steady-state is 68 (227%) L',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida plasmática terminal',
      valor: '4,5',
      unidad: 'h',
      analito: 'resmetirom',
      ref: {
        f: 'dailymed-resmetirom',
        sec: '12 · Farmacología clínica',
        cita: 'Resmetirom median terminal plasma half-life (t½) is 4.5 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '17,5',
      unidad: 'L/h',
      analito: 'resmetirom',
      ref: {
        f: 'dailymed-resmetirom',
        sec: '12 · Farmacología clínica',
        cita: 'the steady state apparent clearance (CL/F) is 17.5 (56.3%) L/h',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '67 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: {
        f: 'dailymed-resmetirom',
        sec: '12 · Farmacología clínica',
        cita: 'approximately 67% of the total radioactive dose was recovered in the feces',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-resmetirom', 'e67ea09f-a840-439c-86c8-f98585f978b2', 'REZDIFFRA (RESMETIROM) TABLET, COATED REZDIFFRA (RESMETIROM) TABLET, COATED REZDIFFRA (RESMETIROM) TABLET, COATED', 'REZDIFFRA', '4', '2026-08-05', '2026-11-19'),
    rengPubchem(15981237, 'resmetirom', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
