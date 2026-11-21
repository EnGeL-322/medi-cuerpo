import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'inavolisib',
    nombre: 'Inavolisib',
    clase: 'Inhibidor de la fosfatidilinositol 3-cinasa alfa (PI3Kα)',
    sinonimos: [ 'inavolisib', 'Itovebi' ],
    formula: 'C18H19F2N5O4',
    masaMolar: 407.4,
    smiles: 'C[C@@H](C(=O)N)NC1=CC2=C(C=C1)C3=NC(=CN3CCO2)N4[C@@H](COC4=O)C(F)F',
    inchikey: 'SGEUNORSOZVTOL-CABZTGNLSA-N',
    cid: 124173720,
    iupac: '(2S)-2-[[2-[(4S)-4-(difluoromethyl)-2-oxo-1,3-oxazolidin-3-yl]-5,6-dihydroimidazo[1,2-d][1,4]benzoxazepin-9-yl]amino]propanamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'inavolisib-oral',
      producto: 'Itovebi · comprimido recubierto con película',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '9 mg o 3 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'sodium starch glycolate type a',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'ferric oxide yellow',
        'talc',
        'ferric oxide red',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento, con palbociclib y fulvestrant, del cáncer de mama avanzado resistente a la hormonoterapia, con mutación de PIK3CA, receptores hormonales positivos y HER2 negativo.',
        ref: {
          f: 'dailymed-inavolisib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adults with endocrine-resistant, PIK3CA -mutated, hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative, locally advanced or metastatic breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-inavolisib',
      advertencias: [
        {
          titulo: 'Hiperglucemia',
          texto: 'Puede causar hiperglucemia grave o mortal, incluida la cetoacidosis.',
          organos: [],
          ref: {
            f: 'dailymed-inavolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe or fatal hyperglycemia, including ketoacidosis, can occur in patients treated with ITOVEBI',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Estomatitis',
          texto: 'Vigilar los signos y síntomas de estomatitis.',
          organos: [],
          ref: {
            f: 'dailymed-inavolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for signs and symptoms of stomatitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea',
          texto: 'Vigilar los signos y síntomas de diarrea.',
          organos: [],
          ref: {
            f: 'dailymed-inavolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for signs and symptoms of diarrhea',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con laboratorio): descenso de neutrófilos y hemoglobina, aumento de la glucosa en ayunas, descenso de plaquetas y linfocitos, estomatitis y diarrea, entre otras.',
          '34084-4',
          'The most common (≥ 20%) adverse reactions, including laboratory abnormalities, were decreased neutrophils, decreased hemoglobin, increased fasting glucose, decreased platelets, decreased lymphocytes, stomatitis, diarrhea'
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
    contiene: 'Comprimido recubierto con película: 9 mg o 3 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con palbociclib y fulvestrant, del cáncer de mama avanzado resistente a la hormonoterapia, con mutación de PIK3CA, receptores hormonales positivos y HER2 negativo.',
    actua: 'Inhibe la PI3K, sobre todo la isoforma alfa, y degrada la subunidad p110α mutada; así bloquea la vía de AKT en células tumorales con PIK3CA mutado.',
    recorrido: 'La biodisponibilidad oral absoluta es del 76 % y la mediana del tiempo hasta el pico, de 3 horas; la comida no cambia de forma relevante la exposición. Tras una dosis marcada, el 49 % se recuperó en la orina (40 % sin cambios) y el 48 % en las heces (11 % sin cambios).'
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
          ref: { f: 'dailymed-inavolisib', sec: '3 · Formas y concentraciones', cita: 'red and round convex-shaped with an', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral absoluta es del 76 % y la mediana del tiempo hasta el pico, de 3 horas; la comida no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 76 % y la mediana del tiempo hasta el pico, de 3 horas; la comida no cambia de forma relevante la exposición.',
          ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'Inavolisib absolute oral bioavailability is 76%', codigo: '43682-4' }
        },
        {
          t: 'La mediana del tiempo hasta el pico en estado estacionario es de 3 horas.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Inavolisib steady-state median (min, max) time to maximum plasma concentration (T max ) is 3 hours (0.5, 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in inavolisib pharmacokinetics were observed following administration of inavolisib with a high-fat meal',
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
      ocurre: 'In vitro se une solo en un 37 % a las proteínas plasmáticas; el volumen de distribución aparente es de 155 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une solo en un 37 % a las proteínas plasmáticas; el volumen de distribución aparente es de 155 L.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Inavolisib plasma protein binding is 37% and is not concentration-dependent in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 155 L.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Inavolisib apparent (oral) volume of distribution is 155 L (26%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PI3Kα',
        efecto: 'Inhibe la PI3K, sobre todo la isoforma alfa, y degrada la subunidad p110α mutada; así bloquea la vía de AKT en células tumorales con PIK3CA mutado.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la PI3K, sobre todo la isoforma alfa, y degrada la subunidad p110α mutada; así bloquea la vía de AKT en células tumorales con PIK3CA mutado.',
            ref: {
              f: 'dailymed-inavolisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inavolisib is an inhibitor of phosphatidylinositol 3-kinase (PI3K) with inhibitory activity predominantly against PI3Kα',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro indujo la degradación de la subunidad catalítica alfa mutada de la PI3K.',
            ref: {
              f: 'dailymed-inavolisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inavolisib induced the degradation of mutated PI3K catalytic alpha subunit p110α',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por hidrólisis; in vitro la CYP3A lo metaboliza muy poco.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por hidrólisis; in vitro la CYP3A lo metaboliza muy poco.',
          ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'Inavolisib is primarily metabolized by hydrolysis', codigo: '43682-4' }
        },
        {
          t: 'In vitro la CYP3A lo metaboliza de forma mínima.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro, inavolisib was minimally metabolized by CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 49 % se recuperó en la orina (40 % sin cambios) y el 48 % en las heces (11 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 49 % se recuperó en la orina (40 % sin cambios) y el 48 % en las heces (11 % sin cambios).',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: '49% of the administered dose was recovered in urine (40% unchanged) and 48% in feces (11% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 15 horas y el aclaramiento total, de 8,8 L/h.',
          ref: {
            f: 'dailymed-inavolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Inavolisib elimination half-life is 15 hours (24%) with a total clearance of 8.8 L/hr (29%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '76',
      unidad: '%',
      analito: 'inavolisib',
      ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'Inavolisib absolute oral bioavailability is 76%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en estado estacionario',
      valor: '3',
      unidad: 'h',
      analito: 'inavolisib',
      ref: {
        f: 'dailymed-inavolisib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentration (T max ) is 3 hours (0.5, 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '37',
      unidad: '%',
      analito: 'inavolisib',
      ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'Inavolisib plasma protein binding is 37%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '155',
      unidad: 'L',
      analito: 'inavolisib',
      ref: {
        f: 'dailymed-inavolisib',
        sec: '12.3 · Farmacocinética',
        cita: 'Inavolisib apparent (oral) volume of distribution is 155 L (26%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '15',
      unidad: 'h',
      analito: 'inavolisib',
      ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'Inavolisib elimination half-life is 15 hours (24%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '8,8',
      unidad: 'L/h',
      analito: 'inavolisib',
      ref: { f: 'dailymed-inavolisib', sec: '12.3 · Farmacocinética', cita: 'with a total clearance of 8.8 L/hr (29%)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '49',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-inavolisib',
        sec: '12.3 · Farmacocinética',
        cita: '49% of the administered dose was recovered in urine (40% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-inavolisib', '5de59f5b-e5db-410f-b692-658686ef4107', 'ITOVEBI (INAVOLISIB) TABLET, FILM COATED', 'Itovebi', '10', '2026-04-28', '2026-11-19'),
    rengPubchem(124173720, 'inavolisib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
