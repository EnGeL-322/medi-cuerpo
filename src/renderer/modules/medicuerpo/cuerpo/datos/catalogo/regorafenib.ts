import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'regorafenib',
    nombre: 'Regorafenib',
    clase: 'Inhibidor multicinasa (VEGFR, TIE2, KIT, RET, RAF)',
    sinonimos: [ 'regorafenib', 'Stivarga' ],
    formula: 'C21H15ClF4N4O3',
    masaMolar: 482.8,
    smiles: 'CNC(=O)C1=NC=CC(=C1)OC2=CC(=C(C=C2)NC(=O)NC3=CC(=C(C=C3)Cl)C(F)(F)F)F',
    inchikey: 'FNHKPVJBJVTLMP-UHFFFAOYSA-N',
    cid: 11167602,
    iupac: '4-[4-[[4-chloro-3-(trifluoromethyl)phenyl]carbamoylamino]-3-fluorophenoxy]-N-methylpyridine-2-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'regorafenib-oral',
      producto: 'Stivarga · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '40 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'silicon dioxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'soybean lecithin',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'povidone, unspecified'
      ],
      usos: {
        t: 'Tratamiento del cáncer colorrectal metastásico, del tumor del estroma gastrointestinal y del carcinoma hepatocelular previamente tratados.',
        ref: {
          f: 'dailymed-regorafenib',
          sec: '1 · Indicaciones',
          cita: 'STIVARGA is a kinase inhibitor indicated for the treatment of adult patients with: • Metastatic colorectal cancer (CRC) who have been previously treated',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-regorafenib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se ha producido hepatotoxicidad grave y a veces mortal; vigilar la función hepática antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-regorafenib',
            sec: 'Advertencia destacada',
            cita: 'Monitor hepatic function prior to and during treatment',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Suspender de forma definitiva ante una hemorragia grave o potencialmente mortal.',
          organos: [],
          ref: {
            f: 'dailymed-regorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Permanently discontinue STIVARGA for severe or life-threatening hemorrhage',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Isquemia e infarto cardíacos',
          texto: 'Interrumpir ante una isquemia o un infarto cardíaco nuevo o agudo.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-regorafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Withhold STIVARGA for new or acute cardiac ischemia/infarction',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): dolor, síndrome mano-pie, astenia o fatiga, diarrea, disminución del apetito, hipertensión, infección, disfonía, hiperbilirrubinemia, fiebre, mucositis, pérdida de peso, exantema y náuseas.',
          '34084-4',
          'most common adverse reactions (≥20%) are pain (including gastrointestinal and abdominal pain), HFSR, asthenia/fatigue, diarrhea, decreased appetite/food intake, hypertension, infection, dysphonia'
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
    contiene: 'Comprimido recubierto con película: 40 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer colorrectal metastásico, del tumor del estroma gastrointestinal y del carcinoma hepatocelular previamente tratados.',
    actua: 'Inhibe múltiples cinasas de membrana e intracelulares implicadas en la oncogénesis, la angiogénesis tumoral, la metástasis y la inmunidad tumoral; también lo hacen sus metabolitos activos M-2 y M-5.',
    recorrido: 'Tras 160 mg alcanza el pico a una mediana de 4 horas; la biodisponibilidad relativa frente a solución oral es del 69 al 83 % y una comida grasa aumenta el AUC un 48 %. Alrededor del 71 % de una dosis marcada se excretó en las heces y el 19 % en la orina (17 % como glucurónidos) en 12 días.'
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
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean relative bioavailability of tablets compared to an oral solution is 69% to 83%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras 160 mg alcanza el pico a una mediana de 4 horas; la biodisponibilidad relativa frente a solución oral es del 69 al 83 % y una comida grasa aumenta el AUC un 48 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras 160 mg alcanza el pico a una mediana de 4 horas; la biodisponibilidad relativa frente a solución oral es del 69 al 83 % y una comida grasa aumenta el AUC un 48 %.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'regorafenib reaches a geometric mean peak plasma level (C max ) of 2.5 µg/mL at a median time of 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó el AUC medio un 48 %.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal (945 calories and 54.6 g fat) increased the mean AUC of regorafenib by 48%',
            codigo: '43682-4'
          },
          poblacion: 'varones sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99,5 % a las proteínas del plasma humano y sufre circulación enterohepática, con varios picos plasmáticos en 24 horas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,5 % a las proteínas del plasma humano y sufre circulación enterohepática, con varios picos plasmáticos en 24 horas.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Regorafenib is highly bound (99.5%) to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Sufre circulación enterohepática, con varios picos de concentración a lo largo del intervalo de 24 horas.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Regorafenib undergoes enterohepatic circulation with multiple plasma concentration peaks observed across the 24-hour dosing interval',
            codigo: '43682-4'
          },
          poblacion: 'higado'
        }
      ],
      accion: {
        diana: 'VEGFR, TIE2, KIT, RET, RAF',
        efecto: 'Inhibe múltiples cinasas de membrana e intracelulares implicadas en la oncogénesis, la angiogénesis tumoral, la metástasis y la inmunidad tumoral; también lo hacen sus metabolitos activos M-2 y M-5.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe múltiples cinasas de membrana e intracelulares implicadas en la oncogénesis, la angiogénesis tumoral, la metástasis y la inmunidad tumoral; también lo hacen sus metabolitos activos M-2 y M-5.',
            ref: {
              f: 'dailymed-regorafenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Regorafenib is a small molecule inhibitor of multiple membrane-bound and intracellular kinases involved in normal cellular functions and in pathologic processes such as oncogenesis, tumor angiogenesis, metastasis and tumor immunity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por la CYP3A4 y la UGT1A9; M-2 y M-5 son metabolitos activos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por la CYP3A4 y la UGT1A9; M-2 y M-5 son metabolitos activos.',
          ref: { f: 'dailymed-regorafenib', sec: '12.3 · Farmacocinética', cita: 'Regorafenib is metabolized by CYP3A4 and UGT1A9', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'M-2 y M-5',
          actividad: 'activo',
          nota: 'Metabolitos activos principales; la semivida de M-5 es de unas 51 horas.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12 · Farmacología clínica',
            cita: 'regorafenib or its major human active metabolites M-2 and M-5 inhibited the activity of RET, VEGFR1, VEGFR2, VEGFR3, KIT',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 71 % de una dosis marcada se excretó en las heces y el 19 % en la orina (17 % como glucurónidos) en 12 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 71 % de una dosis marcada se excretó en las heces y el 19 % en la orina (17 % como glucurónidos) en 12 días.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 71% of a radiolabeled dose was excreted in feces (47% as parent compound, 24% as metabolites) and 19% of the dose was excreted in urine (17% as glucuronides)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación del regorafenib es de 28 horas.',
          ref: {
            f: 'dailymed-regorafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'the geometric mean (minimum to maximum) elimination half-lives for regorafenib and the M-2 metabolite in plasma are 28 hours (14 to 58 hours) and 25 hours (14 to 32 hours)',
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
      valor: '4',
      unidad: 'h',
      analito: 'regorafenib',
      poblacion: 'pacientes con tumores sólidos',
      ref: {
        f: 'dailymed-regorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'regorafenib reaches a geometric mean peak plasma level (C max ) of 2.5 µg/mL at a median time of 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad relativa frente a solución oral',
      valor: '69-83',
      unidad: '%',
      analito: 'regorafenib',
      ref: {
        f: 'dailymed-regorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean relative bioavailability of tablets compared to an oral solution is 69% to 83%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,5',
      unidad: '%',
      analito: 'regorafenib',
      ref: {
        f: 'dailymed-regorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Regorafenib is highly bound (99.5%) to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '28',
      unidad: 'h',
      analito: 'regorafenib',
      ref: {
        f: 'dailymed-regorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-lives for regorafenib and the M-2 metabolite in plasma are 28 hours (14 to 58 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '71 (aprox.)',
      unidad: '% de la dosis',
      analito: 'regorafenib y metabolitos',
      condiciones: 'solución oral marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-regorafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 71% of a radiolabeled dose was excreted in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-regorafenib', '824f19c9-0546-4a8a-8d8f-c4055c04f7c7', 'STIVARGA (REGORAFENIB) TABLET, FILM COATED', 'Stivarga', '36', '2026-02-18', '2026-11-19'),
    rengPubchem(11167602, 'regorafenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
