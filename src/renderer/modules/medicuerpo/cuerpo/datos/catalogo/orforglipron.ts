import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'orforglipron',
    nombre: 'Orforglipron',
    clase: 'Agonista no peptídico del receptor de GLP-1',
    sinonimos: [ 'orforglipron', 'Foundayo' ],
    formula: 'C48H48F2N10O5',
    masaMolar: 883,
    smiles: 'C[C@H]1C[C@]1(C2=NOC(=O)N2)N3C4=C(C=C(C=C4)[C@H]5CCOC(C5)(C)C)C=C3C(=O)N6CCC7=NN(C(=C7[C@@H]6C)N8C=CN(C8=O)C9=C(C1=C(C=C9)N(N=C1)C)F)C1=CC(=C(C(=C1)C)F)C',
    inchikey: 'USUWIEBBBWHKNI-KHIFEHGGSA-N',
    cid: 137319706,
    iupac: '3-[(1S,2S)-1-[5-[(4S)-2,2-dimethyloxan-4-yl]-2-[(4S)-2-(4-fluoro-3,5-dimethylphenyl)-3-[3-(4-fluoro-1-methylindazol-5-yl)-2-oxoimidazol-1-yl]-4-methyl-6,7-dihydro-4H-pyrazolo[4,3-c]pyridine-5-carbonyl]indol-1-yl]-2-methylcyclopropyl]-4H-1,2,4-oxadiazol-5-one',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'orforglipron-oral',
      producto: 'FOUNDAYO · comprimido recubierto con película',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.8 mg, 2.5 mg, 5.5 mg, 9 mg, 14.5 mg o 17.2 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Orforglipron cálcico', ref: { f: 'dailymed-orforglipron', sec: '11 · Descripción', cita: 'orforglipron calcium', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'sodium carbonate',
        'magnesium stearate',
        'copovidone k25-31',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 4000',
        'talc',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Reducción y mantenimiento del peso, con dieta hipocalórica y más actividad física, en adultos con obesidad o con sobrepeso y alguna comorbilidad.',
        ref: {
          f: 'dailymed-orforglipron',
          sec: '1 · Indicaciones',
          cita: 'in combination with a reduced-calorie diet and increased physical activity to reduce excess body weight and maintain weight reduction long term in adults with obesity',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-orforglipron',
      advertencias: [
        {
          titulo: 'Riesgo de tumores de células C de tiroides',
          texto: 'En roedores, los productos con actividad agonista de GLP-1 causaron tumores de células C de tiroides; su relevancia en humanos no se ha establecido.',
          organos: [ 'tiroides' ],
          ref: {
            f: 'dailymed-orforglipron',
            sec: 'Advertencia destacada',
            cita: 'rodent thyroid C-cell tumors (adenomas and carcinomas) have been observed at clinically relevant exposures',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Pancreatitis aguda',
          texto: 'Suspenderlo si se sospecha pancreatitis.',
          organos: [ 'pancreas' ],
          ref: { f: 'dailymed-orforglipron', sec: '5 · Advertencias y precauciones', cita: 'Discontinue if pancreatitis is suspected', codigo: '43685-7' }
        },
        {
          titulo: 'Reacciones gastrointestinales graves',
          texto: 'Se ha asociado a reacciones gastrointestinales, a veces graves.',
          organos: [],
          ref: {
            f: 'dailymed-orforglipron',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use of FOUNDAYO has been associated with gastrointestinal adverse reactions, sometimes severe',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Complicaciones de la retinopatía diabética',
          texto: 'Vigilar la progresión en quienes tienen antecedentes de retinopatía diabética.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-orforglipron',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients with a history of diabetic retinopathy for progression',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): náuseas, estreñimiento, diarrea, vómitos, dispepsia, dolor abdominal, cefalea, distensión abdominal y fatiga, entre otras.',
          '34084-4',
          'Most common adverse reactions, reported in ≥5% of patients treated with FOUNDAYO, are nausea, constipation, diarrhea, vomiting, dyspepsia, abdominal pain, headache, abdominal distension, fatigue'
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
    contiene: 'Comprimido recubierto con película: 0.8 mg, 2.5 mg, 5.5 mg, 9 mg, 14.5 mg o 17.2 mg por comprimido, según la etiqueta; el activo va como orforglipron cálcico. Los excipientes no son el principio activo.',
    usos: 'Reducción y mantenimiento del peso, con dieta hipocalórica y más actividad física, en adultos con obesidad o con sobrepeso y alguna comorbilidad.',
    actua: 'Se une al receptor humano de GLP-1 y lo activa; el GLP-1 regula el apetito y la ingesta, y sus receptores están en regiones cerebrales que regulan el apetito.',
    recorrido: 'La biodisponibilidad absoluta es del 77 % con 0,8 mg y no hay un efecto relevante de la comida. Tras 2,5 mg, el 87 % de la dosis se recuperó en las heces, todo como metabolitos, y menos del 1 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-orforglipron', sec: '3 · Formas y concentraciones', cita: 'pink round tablet debossed with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es del 77 % con 0,8 mg y no hay un efecto relevante de la comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 77 % con 0,8 mg y no hay un efecto relevante de la comida.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean absolute bioavailability of orforglipron was 77% after a 0.8 mg dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se observó un efecto clínicamente relevante de la comida.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically relevant food effect on orforglipron exposure was observed',
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
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución en estado estacionario tras una dosis intravenosa es de unos 285 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución en estado estacionario tras una dosis intravenosa es de unos 285 L.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'Orforglipron plasma protein binding is greater than 99%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de unos 285 L tras una dosis intravenosa.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean steady-state volume of distribution of orforglipron is approximately 285 L, following intravenous dosing in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'vía intravenosa'
        }
      ],
      accion: {
        diana: 'Receptor de GLP-1',
        efecto: 'Se une al receptor humano de GLP-1 y lo activa; el GLP-1 regula el apetito y la ingesta, y sus receptores están en regiones cerebrales que regulan el apetito.',
        lugar: [],
        datos: [
          {
            t: 'Se une al receptor humano de GLP-1 y lo activa; el GLP-1 regula el apetito y la ingesta, y sus receptores están en regiones cerebrales que regulan el apetito.',
            ref: {
              f: 'dailymed-orforglipron',
              sec: '12.1 · Mecanismo de acción',
              cita: 'FOUNDAYO is a GLP-1 receptor agonist that binds to and activates the human GLP-1 receptor',
              codigo: '43679-0'
            }
          },
          {
            t: 'Hay receptores de GLP-1 en las regiones del cerebro que regulan el apetito.',
            ref: {
              f: 'dailymed-orforglipron',
              sec: '12.1 · Mecanismo de acción',
              cita: 'GLP-1 receptors are present in brain regions that regulate appetite',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 hepática a varios metabolitos oxidativos, que se excretan a la luz intestinal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 hepática a varios metabolitos oxidativos, que se excretan a la luz intestinal.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'Orforglipron is metabolized primarily via hepatic CYP3A4 to several oxidative metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'Estos metabolitos oxidativos se excretan a la luz intestinal.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'These oxidative metabolites are excreted into the intestinal lumen',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 2,5 mg, el 87 % de la dosis se recuperó en las heces, todo como metabolitos, y menos del 1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 2,5 mg, el 87 % de la dosis se recuperó en las heces, todo como metabolitos, y menos del 1 % en la orina.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: '87% of the dose was recovered in feces (all metabolites) and less than 1% of the dose was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 29 a 49 horas tras una dosis oral.',
          ref: {
            f: 'dailymed-orforglipron',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life is approximately 29 to 49 hours after an oral dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (0,8 mg)',
      valor: '77',
      unidad: '%',
      analito: 'orforglipron',
      ref: {
        f: 'dailymed-orforglipron',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean absolute bioavailability of orforglipron was 77% after a 0.8 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'orforglipron',
      ref: { f: 'dailymed-orforglipron', sec: '12.3 · Farmacocinética', cita: 'Orforglipron plasma protein binding is greater than 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario (vía intravenosa)',
      valor: '285 (aprox.)',
      unidad: 'L',
      analito: 'orforglipron',
      poblacion: 'sujetos sanos',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-orforglipron',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean steady-state volume of distribution of orforglipron is approximately 285 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '29-49 (aprox.)',
      unidad: 'h',
      analito: 'orforglipron',
      ref: {
        f: 'dailymed-orforglipron',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life is approximately 29 to 49 hours after an oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico medio',
      valor: '7,15',
      unidad: 'L/h',
      analito: 'orforglipron',
      ref: {
        f: 'dailymed-orforglipron',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean systemic clearance of orforglipron is 7.15 L/hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '87',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      condiciones: 'dosis oral única de 2,5 mg',
      ref: {
        f: 'dailymed-orforglipron',
        sec: '12.3 · Farmacocinética',
        cita: '87% of the dose was recovered in feces (all metabolites)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-orforglipron', '8ac446c5-feba-474f-a103-23facb9b5c62', 'FOUNDAYO (ORFORGLIPRON) TABLET, FILM COATED', 'FOUNDAYO', '10', '2026-08-13', '2026-11-19'),
    rengPubchem(137319706, 'orforglipron', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
