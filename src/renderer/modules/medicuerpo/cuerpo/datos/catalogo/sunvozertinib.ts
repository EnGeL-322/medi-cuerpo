import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sunvozertinib',
    nombre: 'Sunvozertinib',
    clase: 'Inhibidor del EGFR con inserciones del exón 20',
    sinonimos: [ 'sunvozertinib', 'Zegfrovy' ],
    formula: 'C29H35ClFN7O3',
    masaMolar: 584.1,
    smiles: 'CC(C)(C1=CC(=C(C=C1NC2=NC(=NC=C2)NC3=C(C=C(C(=C3)NC(=O)C=C)N4CC[C@H](C4)N(C)C)OC)Cl)F)O',
    inchikey: 'BTMKEDDEMKKSEF-QGZVFWFLSA-N',
    cid: 139377809,
    iupac: 'N-[5-[[4-[5-chloro-4-fluoro-2-(2-hydroxypropan-2-yl)anilino]pyrimidin-2-yl]amino]-2-[(3R)-3-(dimethylamino)pyrrolidin-1-yl]-4-methoxyphenyl]prop-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'sunvozertinib-oral',
      producto: 'ZEGFROVY · comprimido recubierto con película',
      titular: 'DIZAL PHARMACEUTICAL CO., LTD.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'silicon dioxide',
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico avanzado con inserciones del exón 20 del EGFR que ha progresado tras quimioterapia con platino.',
        ref: {
          f: 'dailymed-sunvozertinib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult patients with locally advanced or metastatic non-small cell lung cancer (NSCLC) with epidermal growth factor receptor (EGFR) exon 20 insertion mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sunvozertinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares nuevos o que empeoran.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening pulmonary symptoms indicative of ILD/pneumonitis (e.g., dyspnea, cough, and fever)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones gastrointestinales',
          texto: 'Vigilar náuseas, vómitos y diarrea y dar tratamiento de soporte.',
          organos: [],
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for nausea, vomiting and diarrhea and provide supportive care',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad ocular',
          texto: 'Dejar las lentes de contacto hasta valorar los síntomas oculares.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise discontinuation of contact lenses until ocular symptoms are evaluated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, exantema, disminución del apetito, estomatitis, fatiga, náuseas, paroniquia, vómitos, estreñimiento y dolor musculoesquelético, entre otras.',
          '34084-4',
          'The most common (≥20%) adverse reactions were: diarrhea, rash, decreased appetite, stomatitis, fatigue, nausea, paronychia, vomiting, constipation, musculoskeletal pain'
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
    contiene: 'Comprimido recubierto con película: 150 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico avanzado con inserciones del exón 20 del EGFR que ha progresado tras quimioterapia con platino.',
    actua: 'Inhibe el EGFR con inserciones del exón 20 a concentraciones similares a las del EGFR normal.',
    recorrido: 'La mediana del tiempo hasta el pico es de unas 6 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras una dosis marcada, el 79 % se recuperó en las heces (7,3 % sin cambios) y el 10 % en la orina (5,6 % sin cambios).'
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
            f: 'dailymed-sunvozertinib',
            sec: '3 · Formas y concentraciones',
            cita: '150 mg: yellow, biconvex film-coated tablets, debossed with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de unas 6 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de unas 6 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sunvozertinib median (minimum, maximum) time to maximum plasma concentration (t max ) is approximately 6 hours (3, 10 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes del AUC ni de la Cmax.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in sunvozertinib AUC and C max were observed following administration of sunvozertinib with a high-fat meal',
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
      ocurre: 'In vitro se une en un 89-94 % a las proteínas plasmáticas; el volumen de distribución aparente es de 2116 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 89-94 % a las proteínas plasmáticas; el volumen de distribución aparente es de 2116 L.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sunvozertinib plasma protein binding ranges from approximately 89% to 94% in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 2116 L.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent (oral) volume of distribution is 2,116 L (81%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'EGFR con inserciones del exón 20',
        efecto: 'Inhibe el EGFR con inserciones del exón 20 a concentraciones similares a las del EGFR normal.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe el EGFR con inserciones del exón 20 a concentraciones similares a las del EGFR normal.',
            ref: {
              f: 'dailymed-sunvozertinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sunvozertinib is a kinase inhibitor of the epidermal growth factor receptor (EGFR) that binds to and inhibits EGFR exon 20 insertion mutations at similar concentrations as wild-type EGFR',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A y forma un metabolito desmetilado activo, DZ0753.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A y forma un metabolito desmetilado activo, DZ0753.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sunvozertinib is primarily metabolized by CYP3A and forms the active demethylated metabolite, DZ0753',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'DZ0753',
          actividad: 'activo',
          nota: 'Metabolito desmetilado activo.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sunvozertinib is primarily metabolized by CYP3A and forms the active demethylated metabolite, DZ0753',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 79 % se recuperó en las heces (7,3 % sin cambios) y el 10 % en la orina (5,6 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 79 % se recuperó en las heces (7,3 % sin cambios) y el 10 % en la orina (5,6 % sin cambios).',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: '79% of the dose was recovered in feces (7.3% unchanged) and 10% in urine (5.6% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 50 horas y el aclaramiento oral aparente, de 29 L/h.',
          ref: {
            f: 'dailymed-sunvozertinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sunvozertinib elimination half-life is 50 hours (27%) with an apparent (oral) clearance of 29 L/h (54%)',
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
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'sunvozertinib',
      ref: {
        f: 'dailymed-sunvozertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentration (t max ) is approximately 6 hours (3, 10 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '89-94',
      unidad: '%',
      analito: 'sunvozertinib',
      ref: {
        f: 'dailymed-sunvozertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Sunvozertinib plasma protein binding ranges from approximately 89% to 94% in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '2116',
      unidad: 'L',
      analito: 'sunvozertinib',
      ref: {
        f: 'dailymed-sunvozertinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent (oral) volume of distribution is 2,116 L (81%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '50',
      unidad: 'h',
      analito: 'sunvozertinib',
      ref: { f: 'dailymed-sunvozertinib', sec: '12.3 · Farmacocinética', cita: 'Sunvozertinib elimination half-life is 50 hours (27%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '29',
      unidad: 'L/h',
      analito: 'sunvozertinib',
      ref: { f: 'dailymed-sunvozertinib', sec: '12.3 · Farmacocinética', cita: 'with an apparent (oral) clearance of 29 L/h (54%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '79',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-sunvozertinib',
        sec: '12.3 · Farmacocinética',
        cita: '79% of the dose was recovered in feces (7.3% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sunvozertinib', '349fa84e-1fdb-4976-b1bb-689b80eac8ad', 'ZEGFROVY (SUNVOZERTINIB) TABLET, FILM COATED', 'ZEGFROVY', '1', '2026-10-23', '2026-11-19'),
    rengPubchem(139377809, 'sunvozertinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
