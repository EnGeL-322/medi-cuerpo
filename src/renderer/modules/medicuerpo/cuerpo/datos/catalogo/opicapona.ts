import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'opicapona',
    nombre: 'Opicapona',
    clase: 'Inhibidor periférico, selectivo y reversible de la COMT',
    sinonimos: [ 'opicapone', 'Ongentys' ],
    formula: 'C15H10Cl2N4O6',
    masaMolar: 413.2,
    smiles: 'CC1=C(C(=[N+](C(=C1Cl)C)[O-])Cl)C2=NOC(=N2)C3=CC(=C(C(=C3)O)O)[N+](=O)[O-]',
    inchikey: 'ASOADIZOVZTJSR-UHFFFAOYSA-N',
    cid: 135565903,
    iupac: '5-[3-(2,5-dichloro-4,6-dimethyl-1-oxidopyridin-1-ium-3-yl)-1,2,4-oxadiazol-5-yl]-3-nitrobenzene-1,2-diol',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'opicapona-oral',
      producto: 'ONGENTYS · cápsula',
      titular: 'AMNEAL PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 50 mg por cápsula, según la etiqueta',
      excipientes: [
        'starch, corn',
        'lactose, unspecified form',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'gelatin',
        'titanium dioxide',
        'fd&c red no. 3',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Tratamiento complementario de levodopa/carbidopa en pacientes con enfermedad de Parkinson que presentan episodios «off».',
        ref: {
          f: 'dailymed-opicapona',
          sec: '1 · Indicaciones',
          cita: 'ONGENTYS is indicated as adjunctive treatment to levodopa/carbidopa in patients with Parkinson’s disease (PD) experiencing “off” episodes',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-opicapona',
      advertencias: [
        {
          titulo: 'Efectos cardiovasculares con fármacos metabolizados por la COMT',
          texto: 'Junto con fármacos que metaboliza la COMT puede causar arritmias, aumento de la frecuencia cardíaca y cambios excesivos de la presión arterial.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-opicapona',
            sec: '5 · Advertencias y precauciones',
            cita: 'May cause arrhythmias, increased heart rate, and excessive changes in blood pressure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Quedarse dormido en actividades diarias',
          texto: 'Hay que advertir al paciente antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-opicapona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Falling Asleep During Activities of Daily Living: Advise patients prior to treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión o síncope',
          texto: 'Si aparecen, valorar suspender la opicapona o ajustar otros fármacos que bajan la presión arterial.',
          organos: [],
          ref: {
            f: 'dailymed-opicapona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypotension/Syncope: If occurs, consider discontinuing ONGENTYS or adjusting dosage of other medications that can lower blood pressure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alucinaciones y psicosis',
          texto: 'Si aparecen, valorar suspender el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-opicapona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hallucinations and Psychosis: Consider stopping ONGENTYS if occurs',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (4 % o más y más que con placebo): discinesia, estreñimiento, aumento de la creatina cinasa en sangre, hipotensión o síncope y pérdida de peso.',
          '34084-4',
          'Most common adverse reactions (≥4% and > placebo): dyskinesia, constipation, blood creatine kinase increased, hypotension/syncope, and weight decreased'
        ],
        [
          'Entre las reacciones clínicamente significativas figuran quedarse dormido en actividades diarias, alucinaciones y psicosis, y trastornos del control de impulsos.',
          '34084-4',
          'Falling Asleep During Activities of Daily Living and Somnolence [see Warnings and Precautions ( 5.2 )] Hypotension/Syncope'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 50 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de levodopa/carbidopa en pacientes con enfermedad de Parkinson que presentan episodios «off».',
    actua: 'Inhibe de forma selectiva y reversible la catecol-O-metiltransferasa (COMT); cuando la carbidopa impide la descarboxilación de la levodopa, la COMT pasa a ser la enzima principal que la metaboliza.',
    recorrido: 'Tras una dosis única de 50 mg, la mediana del Tmax plasmático fue de 2,0 horas (1,0-4,0). Tras una dosis única marcada de 100 mg, alrededor del 70 % se recuperó en las heces (22 % inalterado), el 20 % en el aire espirado y el 5 % en la orina (menos del 1 % inalterado).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '3 · Formas y concentraciones',
            cita: 'ONGENTYS capsules are available in the following strengths',
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
      ocurre: 'Tras una dosis única de 50 mg, la mediana del Tmax plasmático fue de 2,0 horas (1,0-4,0).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única de 50 mg, la mediana del Tmax plasmático fue de 2,0 horas (1,0-4,0).',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'After single-dose administration of ONGENTYS 50 mg, the median (range) plasma T max value was 2.0 (1.0-4.0) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida moderada en grasas y calorías, la Cmax bajó un 62 %, el AUC un 31 % y el Tmax se retrasó 4 horas.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a moderate fat/moderate calorie meal, the mean peak plasma concentration (C max ) for opicapone decreased 62%, the mean overall plasma exposure (AUC) decreased 31%, and the T max was delayed by 4 hours',
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
      ocurre: 'Se une mucho a las proteínas del plasma (más del 99 %), sin depender de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a las proteínas del plasma (más del 99 %), sin depender de la concentración.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Opicapone is highly bound to plasma proteins (>99%), which is independent of concentration',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Catecol-O-metiltransferasa (COMT)',
        efecto: 'Inhibe de forma selectiva y reversible la catecol-O-metiltransferasa (COMT); cuando la carbidopa impide la descarboxilación de la levodopa, la COMT pasa a ser la enzima principal que la metaboliza.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma selectiva y reversible la catecol-O-metiltransferasa (COMT); cuando la carbidopa impide la descarboxilación de la levodopa, la COMT pasa a ser la enzima principal que la metaboliza.',
            ref: {
              f: 'dailymed-opicapona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Opicapone is a selective and reversible inhibitor of catechol-O-methyltransferase (COMT)',
              codigo: '43679-0'
            }
          },
          {
            t: 'Cuando la carbidopa impide la descarboxilación de la levodopa, la COMT se convierte en la principal enzima que la metaboliza, a 3-O-metildopa.',
            ref: {
              f: 'dailymed-opicapona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'When decarboxylation of levodopa is prevented by carbidopa, COMT becomes the major metabolizing enzyme for levodopa',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La sulfatación es la vía metabólica principal; otras son la glucuronidación, la metilación por la COMT, la reducción y la conjugación con glutatión.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La sulfatación es la vía metabólica principal; otras son la glucuronidación, la metilación por la COMT, la reducción y la conjugación con glutatión.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Sulphation is the primary metabolic pathway of opicapone, based on clinical studies and in vitro assessments',
            codigo: '43682-4'
          }
        },
        {
          t: 'Otras vías son la glucuronidación, la metilación (por la COMT), la reducción y la conjugación con glutatión.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'Other metabolic pathways include glucuronidation, methylation (by COMT), reduction, and glutathione conjugation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única marcada de 100 mg, alrededor del 70 % se recuperó en las heces (22 % inalterado), el 20 % en el aire espirado y el 5 % en la orina (menos del 1 % inalterado).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única marcada de 100 mg, alrededor del 70 % se recuperó en las heces (22 % inalterado), el 20 % en el aire espirado y el 5 % en la orina (menos del 1 % inalterado).',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 70% of the dose was recovered in feces (22% as unchanged), 20% in expired air, and 5% in urine (<1% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media es de 1 a 2 horas.',
          ref: {
            f: 'dailymed-opicapona',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-life of opicapone is 1 to 2 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax tras 50 mg',
      valor: '2,0',
      unidad: 'h',
      analito: 'opicapona',
      condiciones: 'dosis única de 50 mg',
      ref: {
        f: 'dailymed-opicapona',
        sec: '12.3 · Farmacocinética',
        cita: 'After single-dose administration of ONGENTYS 50 mg, the median (range) plasma T max value was 2.0 (1.0-4.0) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'opicapona',
      ref: { f: 'dailymed-opicapona', sec: '12.3 · Farmacocinética', cita: 'Opicapone is highly bound to plasma proteins (>99%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '1-2',
      unidad: 'h',
      analito: 'opicapona',
      ref: {
        f: 'dailymed-opicapona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of opicapone is 1 to 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'opicapona y metabolitos',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 100 mg',
      ref: {
        f: 'dailymed-opicapona',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 70% of the dose was recovered in feces (22% as unchanged)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Descenso de la Cmax con comida',
      valor: '62',
      unidad: '%',
      analito: 'opicapona',
      condiciones: 'con una comida moderada en grasas y calorías',
      ref: {
        f: 'dailymed-opicapona',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean peak plasma concentration (C max ) for opicapone decreased 62%',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-opicapona', 'a511a531-112e-43f8-a43f-5334b0efe979', 'ONGENTYS (OPICAPONE) CAPSULE', 'ONGENTYS', '12', '2026-10-30', '2026-11-19'),
    rengPubchem(135565903, 'opicapone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
