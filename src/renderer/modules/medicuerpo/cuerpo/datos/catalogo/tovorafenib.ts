import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tovorafenib',
    nombre: 'Tovorafenib',
    clase: 'Inhibidor de RAF de tipo II (BRAF y CRAF)',
    sinonimos: [ 'tovorafenib', 'Ojemda' ],
    formula: 'C17H12Cl2F3N7O2S',
    masaMolar: 506.3,
    smiles: 'C[C@H](C1=NC=C(S1)C(=O)NC2=NC=C(C(=C2)C(F)(F)F)Cl)NC(=O)C3=C(C(=NC=N3)N)Cl',
    inchikey: 'VWMJHAFYPMOMGF-ZCFIWIBFSA-N',
    cid: 25161177,
    iupac: '2-[(1R)-1-[(6-amino-5-chloropyrimidine-4-carbonyl)amino]ethyl]-N-[5-chloro-4-(trifluoromethyl)-2-pyridinyl]-1,3-thiazole-5-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tovorafenib-oral',
      producto: 'OJEMDA · comprimido recubierto con película',
      titular: 'DAY ONE BIOPHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [ 'croscarmellose sodium', 'copovidone k25-31', 'magnesium stearate', 'silicon dioxide', 'microcrystalline cellulose' ],
      usos: {
        t: 'Tratamiento del glioma pediátrico de bajo grado recidivante o refractario con fusión o reordenación de BRAF o mutación BRAF V600, desde los 6 meses.',
        ref: {
          f: 'dailymed-tovorafenib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of patients 6 months of age and older with relapsed or refractory pediatric low-grade glioma (LGG) harboring a BRAF fusion or rearrangement, or BRAF V600 mutation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tovorafenib',
      advertencias: [
        {
          titulo: 'Hemorragia',
          texto: 'Vigilar los signos y síntomas de hemorragia.',
          organos: [],
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for signs and symptoms of hemorrhage and evaluate as clinically indicated',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad cutánea y fotosensibilidad',
          texto: 'Vigilar las reacciones cutáneas nuevas o que empeoran y protegerse de la luz ultravioleta.',
          organos: [ 'piel' ],
          ref: { f: 'dailymed-tovorafenib', sec: '5 · Advertencias y precauciones', cita: 'monitor for new or worsening skin reactions', codigo: '43685-7' }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar, al mes y después cada 3 meses.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests, including ALT, AST and bilirubin, before initiation of OJEMDA, one month after initiation and then every three months thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (30 % o más): exantema, cambios de color del pelo, fatiga, infección vírica, vómitos, cefalea, hemorragia, fiebre, piel seca, estreñimiento, náuseas y dermatitis acneiforme, entre otras.',
          '34084-4',
          'The most common adverse reactions (≥30%) were rash, hair color changes, fatigue, viral infection, vomiting, headache, hemorrhage, pyrexia, dry skin, constipation, nausea, dermatitis acneiform'
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
    contiene: 'Comprimido recubierto con película: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del glioma pediátrico de bajo grado recidivante o refractario con fusión o reordenación de BRAF o mutación BRAF V600, desde los 6 meses.',
    actua: 'Inhibe las cinasas BRAF V600E, BRAF natural y CRAF natural (inhibidor de RAF de tipo II).',
    recorrido: 'La mediana del tiempo hasta el pico es de 3 horas; con una comida rica en grasas no cambian la Cmax ni el AUC, aunque el pico se retrasa. Tras una dosis marcada, el 65 % se recuperó en las heces (8,6 % sin cambios) y el 27 % en la orina (0,2 % sin cambios).'
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
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '3 · Formas y concentraciones',
            cita: 'orange, film-coated, oval tablets debossed with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 3 horas; con una comida rica en grasas no cambian la Cmax ni el AUC, aunque el pico se retrasa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 3 horas; con una comida rica en grasas no cambian la Cmax ni el AUC, aunque el pico se retrasa.',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tovorafenib median (minimum, maximum) time to achieve peak plasma concentration (T max ) is 3 hours (1.5, 4 hours), following a single dose with tablets or oral suspension',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas no hubo diferencias clínicamente relevantes de la Cmax ni del AUC.',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in tovorafenib C max and AUC were observed following administration of tablets with a high-fat meal',
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
      ocurre: 'In vitro se une en un 97,5 % a las proteínas plasmáticas; el volumen de distribución aparente es de 60 L/m².',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 97,5 % a las proteínas plasmáticas; el volumen de distribución aparente es de 60 L/m².',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tovorafenib is 97.5% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 60 L/m².',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tovorafenib apparent volume of distribution is 60 L/m 2 (23%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'BRAF y CRAF',
        efecto: 'Inhibe las cinasas BRAF V600E, BRAF natural y CRAF natural (inhibidor de RAF de tipo II).',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas BRAF V600E, BRAF natural y CRAF natural (inhibidor de RAF de tipo II).',
            ref: {
              f: 'dailymed-tovorafenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tovorafenib is a Type II RAF kinase inhibitor of mutant BRAF V600E , wild-type BRAF , and wild-type CRAF kinases',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la aldehído oxidasa y la CYP2C8; la CYP3A, la CYP2C9 y la CYP2C19 contribuyen poco.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la aldehído oxidasa y la CYP2C8; la CYP3A, la CYP2C9 y la CYP2C19 contribuyen poco.',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tovorafenib is primarily metabolized by aldehyde oxidase and CYP2C8 in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'La CYP3A, la CYP2C9 y la CYP2C19 lo metabolizan en menor medida.',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A, CYP2C9, and CYP2C19 metabolize tovorafenib to a minor extent',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 65 % se recuperó en las heces (8,6 % sin cambios) y el 27 % en la orina (0,2 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 65 % se recuperó en las heces (8,6 % sin cambios) y el 27 % en la orina (0,2 % sin cambios).',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: '65% of the total radiolabeled dose was recovered in the feces (8.6% unchanged) and 27% of the dose was recovered in the urine (0.2% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 56 horas.',
          ref: {
            f: 'dailymed-tovorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tovorafenib terminal half-life is approximately 56 hours (33%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '3',
      unidad: 'h',
      analito: 'tovorafenib',
      ref: {
        f: 'dailymed-tovorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to achieve peak plasma concentration (T max ) is 3 hours (1.5, 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '97,5',
      unidad: '%',
      analito: 'tovorafenib',
      ref: {
        f: 'dailymed-tovorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Tovorafenib is 97.5% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '56 (aprox.)',
      unidad: 'h',
      analito: 'tovorafenib',
      ref: {
        f: 'dailymed-tovorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Tovorafenib terminal half-life is approximately 56 hours (33%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '65',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-tovorafenib',
        sec: '12.3 · Farmacocinética',
        cita: '65% of the total radiolabeled dose was recovered in the feces (8.6% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tovorafenib', 'ea3a9631-3a66-6a7c-e053-2995a90ae2ad', 'OJEMDA (TOVORAFENIB) KIT OJEMDA (TOVORAFENIB) TABLET, FILM COATED', 'OJEMDA', '9', '2025-09-08', '2026-11-19'),
    rengPubchem(25161177, 'tovorafenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
