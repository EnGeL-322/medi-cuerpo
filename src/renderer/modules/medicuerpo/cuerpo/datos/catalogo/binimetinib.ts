import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'binimetinib',
    nombre: 'Binimetinib',
    clase: 'Inhibidor reversible de MEK1 y MEK2',
    sinonimos: [ 'binimetinib', 'Mektovi' ],
    formula: 'C17H15BrF2N4O3',
    masaMolar: 441.2,
    smiles: 'CN1C=NC2=C1C=C(C(=C2F)NC3=C(C=C(C=C3)Br)F)C(=O)NOCCO',
    inchikey: 'ACWZRVQXLIRSDF-UHFFFAOYSA-N',
    cid: 10288191,
    iupac: '6-(4-bromo-2-fluoroanilino)-7-fluoro-N-(2-hydroxyethoxy)-3-methylbenzimidazole-5-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'binimetinib-oral',
      producto: 'MEKTOVI · comprimido recubierto con película',
      titular: 'ARRAY BIOPHARMA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '15 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'silicon dioxide',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol 3350',
        'titanium dioxide',
        'talc',
        'ferric oxide yellow',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento, con encorafenib, del melanoma y del cáncer de pulmón no microcítico con mutación BRAF V600E o V600K.',
        ref: { f: 'dailymed-binimetinib', sec: '1 · Indicaciones', cita: 'MEKTOVI is a kinase inhibitor indicated', codigo: '34067-9' }
      },
      fuente: 'dailymed-binimetinib',
      advertencias: [
        {
          titulo: 'Miocardiopatía',
          texto: 'Valorar la fracción de eyección antes de empezar, al mes y después cada 2 a 3 meses.',
          organos: [],
          ref: {
            f: 'dailymed-binimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess left ventricular ejection fraction (LVEF) before initiating treatment, after one month of treatment, then every 2 to 3 months thereafter',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Tromboembolia venosa',
          texto: 'Pueden aparecer trombosis venosa profunda y embolia pulmonar.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-binimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Deep vein thrombosis and pulmonary embolism can occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad ocular',
          texto: 'Se han producido retinopatía serosa, oclusión de la vena retiniana y uveítis; hacer evaluaciones oftalmológicas periódicas.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-binimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serous retinopathy, retinal vein occlusion (RVO) and uveitis have occurred',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial',
          texto: 'Valorar los síntomas pulmonares nuevos o progresivos sin explicación.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-binimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess new or progressive unexplained pulmonary symptoms or findings for possible ILD',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con encorafenib en el melanoma, las más frecuentes (25 % o más): fatiga, náuseas, diarrea, vómitos y dolor abdominal.',
          '34084-4',
          'Most common adverse reactions (≥25%) for MEKTOVI, in combination with encorafenib, are fatigue, nausea, diarrhea, vomiting, and abdominal pain'
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
    contiene: 'Comprimido recubierto con película: 15 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con encorafenib, del melanoma y del cáncer de pulmón no microcítico con mutación BRAF V600E o V600K.',
    actua: 'Inhibe de forma reversible la actividad de MEK1 y MEK2, reguladores de la vía ERK; con el encorafenib actúa sobre dos cinasas distintas de la vía RAS/RAF/MEK/ERK.',
    recorrido: 'Se absorbe al menos el 50 % de la dosis, con una mediana del tmax de 1,6 horas; una comida grasa no cambia la exposición. Tras 45 mg marcados, el 62 % se recuperó en las heces (32 % sin cambios) y el 31 % en la orina (6,5 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 15 mg, yellow/dark yellow, unscored biconvex oval film-coated tablets',
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
      ocurre: 'Se absorbe al menos el 50 % de la dosis, con una mediana del tmax de 1,6 horas; una comida grasa no cambia la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe al menos el 50 % de la dosis, con una mediana del tmax de 1,6 horas; una comida grasa no cambia la exposición.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'at least 50% of the binimetinib dose was absorbed with a median time to maximum concentration (T max ) of 1.6 hours',
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
      ocurre: 'Se une en un 97 % a las proteínas del plasma humano; el volumen de distribución aparente es de 92 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 % a las proteínas del plasma humano; el volumen de distribución aparente es de 92 L.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Binimetinib is 97% bound to human plasma proteins and the blood-to-plasma ratio is 0.72',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 92 L.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) of apparent volume of distribution of binimetinib is 92 L (45%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'MEK1 y MEK2',
        efecto: 'Inhibe de forma reversible la actividad de MEK1 y MEK2, reguladores de la vía ERK; con el encorafenib actúa sobre dos cinasas distintas de la vía RAS/RAF/MEK/ERK.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma reversible la actividad de MEK1 y MEK2, reguladores de la vía ERK; con el encorafenib actúa sobre dos cinasas distintas de la vía RAS/RAF/MEK/ERK.',
            ref: {
              f: 'dailymed-binimetinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Binimetinib is a reversible inhibitor of mitogen-activated extracellular signal regulated kinase 1 (MEK1) and MEK2 activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su vía principal es la glucuronidación, con la UGT1A1 hasta en un 61 %; el metabolito activo M3 se forma por CYP1A2 y CYP2C19.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su vía principal es la glucuronidación, con la UGT1A1 hasta en un 61 %; el metabolito activo M3 se forma por CYP1A2 y CYP2C19.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary metabolic pathway is glucuronidation with UGT1A1 contributing up to 61% of the binimetinib metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M3',
          actividad: 'activo',
          nota: 'Metabolito activo; el 8,6 % de la exposición al binimetinib.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The active metabolite M3 produced by CYP1A2 and CYP2C19 represents 8.6% of the binimetinib exposure',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 45 mg marcados, el 62 % se recuperó en las heces (32 % sin cambios) y el 31 % en la orina (6,5 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 45 mg marcados, el 62 % se recuperó en las heces (32 % sin cambios) y el 31 % en la orina (6,5 % sin cambios).',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: '62% (32% unchanged) of the administered dose was recovered in the feces while 31% (6.5% unchanged) was recovered in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 3,5 horas y el aclaramiento aparente de 20,2 L/h.',
          ref: {
            f: 'dailymed-binimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) terminal half-life (t 1/2 ) of binimetinib is 3.5 hours (28.5%) and apparent clearance (CL/F) is 20.2 L/h (24%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '≥ 50',
      unidad: '%',
      analito: 'binimetinib',
      ref: { f: 'dailymed-binimetinib', sec: '12.3 · Farmacocinética', cita: 'at least 50% of the binimetinib dose was absorbed', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1,6',
      unidad: 'h',
      analito: 'binimetinib',
      ref: {
        f: 'dailymed-binimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'with a median time to maximum concentration (T max ) of 1.6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97',
      unidad: '%',
      analito: 'binimetinib',
      ref: { f: 'dailymed-binimetinib', sec: '12.3 · Farmacocinética', cita: 'Binimetinib is 97% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '92',
      unidad: 'L',
      analito: 'binimetinib',
      ref: {
        f: 'dailymed-binimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution of binimetinib is 92 L (45%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '3,5',
      unidad: 'h',
      analito: 'binimetinib',
      ref: {
        f: 'dailymed-binimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal half-life (t 1/2 ) of binimetinib is 3.5 hours (28.5%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '20,2',
      unidad: 'L/h',
      analito: 'binimetinib',
      ref: { f: 'dailymed-binimetinib', sec: '12.3 · Farmacocinética', cita: 'apparent clearance (CL/F) is 20.2 L/h (24%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '62',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 45 mg',
      ref: {
        f: 'dailymed-binimetinib',
        sec: '12.3 · Farmacocinética',
        cita: '62% (32% unchanged) of the administered dose was recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-binimetinib', '6c3408ac-d401-4925-8a03-26591afbc240', 'MEKTOVI (BINIMETINIB) TABLET, FILM COATED', 'MEKTOVI', '12', '2025-03-24', '2026-11-19'),
    rengPubchem(10288191, 'binimetinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
