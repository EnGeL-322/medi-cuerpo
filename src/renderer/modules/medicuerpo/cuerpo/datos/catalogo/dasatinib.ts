import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dasatinib',
    nombre: 'Dasatinib',
    clase: 'Inhibidor de múltiples tirosina cinasas (BCR-ABL y SRC)',
    sinonimos: [ 'dasatinib', 'Sprycel' ],
    formula: 'C22H26ClN7O2S',
    masaMolar: 488,
    smiles: 'CC1=C(C(=CC=C1)Cl)NC(=O)C2=CN=C(S2)NC3=CC(=NC(=N3)C)N4CCN(CC4)CCO',
    inchikey: 'ZBNZXTGUTAYRHI-UHFFFAOYSA-N',
    cid: 3062316,
    iupac: 'N-(2-chloro-6-methylphenyl)-2-[[6-[4-(2-hydroxyethyl)piperazin-1-yl]-2-methylpyrimidin-4-yl]amino]-1,3-thiazole-5-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'dasatinib-oral',
      producto: 'SPRYCEL · comprimido',
      titular: 'E.R. SQUIBB & SONS, L.L.C.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 50 mg, 70 mg, 80 mg, 100 mg o 140 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hydroxypropyl cellulose (1600000 wamw)',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified'
      ],
      usos: {
        t: 'Leucemia mieloide crónica con cromosoma Filadelfia positivo, de diagnóstico reciente en fase crónica o con resistencia o intolerancia a otros tratamientos, y leucemia linfoblástica aguda Ph+.',
        ref: {
          f: 'dailymed-dasatinib',
          sec: '1 · Indicaciones',
          cita: 'newly diagnosed Philadelphia chromosome-positive (Ph+) chronic myeloid leukemia (CML) in chronic phase',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dasatinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Puede elevar la bilirrubina, la AST, la ALT y la fosfatasa alcalina.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-dasatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'SPRYCEL may cause hepatotoxicity as measured by elevations in bilirubin',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia (≥ 15 %): mielosupresión, retención de líquidos, diarrea, dolor de cabeza, erupción, hemorragia, disnea, cansancio, náuseas y dolor musculoesquelético.',
          '34084-4',
          'Most common adverse reactions (≥15%) in patients receiving SPRYCEL as single-agent therapy included myelosuppression, fluid retention events, diarrhea, headache, skin rash, hemorrhage, dyspnea, fatigue, nausea, and musculoskeletal pain'
        ],
        [
          'En niños con quimioterapia (≥ 30 %): mucositis, neutropenia febril, fiebre, diarrea, náuseas y vómitos, entre otros.',
          '34084-4',
          'Most common adverse reactions (≥30%) in pediatric patients receiving SPRYCEL in combination with chemotherapy included mucositis, febrile neutropenia, pyrexia, diarrhea, nausea, vomiting'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20 mg, 50 mg, 70 mg, 80 mg, 100 mg o 140 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Leucemia mieloide crónica con cromosoma Filadelfia positivo, de diagnóstico reciente en fase crónica o con resistencia o intolerancia a otros tratamientos, y leucemia linfoblástica aguda Ph+.',
    actua: 'A concentraciones nanomolares inhibe varias cinasas, entre ellas BCR-ABL, la familia SRC, c-KIT, EPHA2 y PDGFRβ, y frena el crecimiento de las células leucémicas.',
    recorrido: 'El máximo llega entre 0,5 y 6 horas después de tomarlo; una comida rica en grasa aumentó el AUC un 14 %. La eliminación es sobre todo por las heces: en 10 días se recuperó el 85 % de la radiactividad en las heces y el 4 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos blancos, biconvexos y recubiertos, de 20 a 140 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos blancos, biconvexos y recubiertos, de 20 a 140 mg.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '3 · Formas y concentraciones',
            cita: 'SPRYCEL (dasatinib) Tablets are available as 20-mg, 50-mg, 70-mg, 80-mg, 100-mg, and 140-mg white to off-white, biconvex, film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega entre 0,5 y 6 horas después de tomarlo; una comida rica en grasa aumentó el AUC un 14 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega entre 0,5 y 6 horas después de tomarlo; una comida rica en grasa aumentó el AUC un 14 %.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The maximum plasma concentrations (C max ) of dasatinib are observed between 0.5 hours and 6 hours (T max ) following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasa aumentó el AUC medio un 14 % tras una dosis de 100 mg.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal increased the mean AUC of dasatinib following a single dose of 100 mg by 14%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro, se une en un 96 % a proteínas del plasma (su metabolito activo, en un 93 %). El volumen aparente de distribución es de 2505 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, se une en un 96 % a proteínas del plasma (su metabolito activo, en un 93 %). El volumen aparente de distribución es de 2505 L.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding of dasatinib to human plasma proteins in vitro was approximately 96%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas BCR-ABL y de la familia SRC',
        efecto: 'A concentraciones nanomolares inhibe varias cinasas, entre ellas BCR-ABL, la familia SRC, c-KIT, EPHA2 y PDGFRβ, y frena el crecimiento de las células leucémicas.',
        lugar: [ 'medula-osea', 'sangre' ],
        datos: [
          {
            t: 'A concentraciones nanomolares inhibe varias cinasas, entre ellas BCR-ABL, la familia SRC, c-KIT, EPHA2 y PDGFRβ, y frena el crecimiento de las células leucémicas.',
            ref: {
              f: 'dailymed-dasatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dasatinib, at nanomolar concentrations, inhibits the following kinases: BCR-ABL, SRC family (SRC, LCK, YES, FYN), c-KIT, EPHA2, and PDGFRβ',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por el CYP3A4, que forma el metabolito activo; también intervienen FMO-3 y UGT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por el CYP3A4, que forma el metabolito activo; también intervienen FMO-3 y UGT.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Dasatinib is metabolized in humans, primarily by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo',
          actividad: 'activo',
          nota: 'Es poco probable que tenga un papel importante en la farmacología.',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The exposure of the active metabolite, which is equipotent to dasatinib, represents approximately 5% of the AUC of dasatinib',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Otros metabolitos oxidativos',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-dasatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Dasatinib also has several other inactive oxidative metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es sobre todo por las heces: en 10 días se recuperó el 85 % de la radiactividad en las heces y el 4 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es sobre todo por las heces: en 10 días se recuperó el 85 % de la radiactividad en las heces y el 4 % en la orina.',
          ref: { f: 'dailymed-dasatinib', sec: '12.3 · Farmacocinética', cita: 'Elimination is primarily via the feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '0,5-6',
      unidad: 'h',
      analito: 'dasatinib',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'are observed between 0.5 hours and 6 hours (T max ) following oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax en estado estacionario con 100 mg al día',
      valor: '82,2 (CV 69 %)',
      unidad: 'ng/mL',
      analito: 'dasatinib',
      condiciones: '100 mg una vez al día',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'maximum concentration at steady state (C max ) is 82.2 ng/mL (CV% 69%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC con 100 mg al día',
      valor: '397 (CV 55 %)',
      unidad: 'ng·h/mL',
      analito: 'dasatinib',
      condiciones: '100 mg una vez al día',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'area under the plasma drug concentration time curve (AUC) is 397 ng/mL*hr (CV% 55%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (in vitro)',
      valor: '96 (aprox.)',
      unidad: '%',
      analito: 'dasatinib',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Binding of dasatinib to human plasma proteins in vitro was approximately 96%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '2505 (CV 93 %)',
      unidad: 'L',
      analito: 'dasatinib',
      ref: { f: 'dailymed-dasatinib', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 2505 L (CV% 93%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '3-5',
      unidad: 'h',
      analito: 'dasatinib',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life of dasatinib is 3 hours to 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente medio',
      valor: '363,8 (CV 81,3 %)',
      unidad: 'L/h',
      analito: 'dasatinib',
      ref: { f: 'dailymed-dasatinib', sec: '12.3 · Farmacocinética', cita: 'The mean apparent oral clearance is 363.8 L/hr (CV% 81.3%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces (10 días)',
      valor: '85',
      unidad: '%',
      analito: 'dasatinib y metabolitos',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: '4% of the administered radioactivity was recovered in the urine and 85% in the feces within 10 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina (10 días)',
      valor: '4',
      unidad: '%',
      analito: 'dasatinib y metabolitos',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-dasatinib',
        sec: '12.3 · Farmacocinética',
        cita: '4% of the administered radioactivity was recovered in the urine and 85% in the feces within 10 days',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dasatinib', '4764f37b-c9e6-4ede-bcc2-8a03b7c521df', 'SPRYCEL (DASATINIB) TABLET', 'SPRYCEL', '50', '2026-11-02', '2026-11-12'),
    rengPubchem(3062316, 'dasatinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
