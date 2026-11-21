import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vadadustat',
    nombre: 'Vadadustat',
    clase: 'Inhibidor de la prolil hidroxilasa del factor inducible por hipoxia (HIF-PH)',
    sinonimos: [ 'vadadustat', 'Vafseo' ],
    formula: 'C14H11ClN2O4',
    masaMolar: 306.7,
    smiles: 'C1=CC(=CC(=C1)Cl)C2=CC(=C(N=C2)C(=O)NCC(=O)O)O',
    inchikey: 'JGRXMPYUTJLTKT-UHFFFAOYSA-N',
    cid: 23634441,
    iupac: '2-[[5-(3-chlorophenyl)-3-hydroxypyridine-2-carbonyl]amino]acetic acid',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'vadadustat-oral',
      producto: 'VAFSEO · comprimido recubierto con película',
      titular: 'AKEBIA THERAPEUTICS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg, 300 mg o 450 mg por comprimido, según la etiqueta',
      excipientes: [
        'Dióxido de silicio coloidal',
        'Hidroxipropilmetilcelulosa',
        'Estearato de magnesio',
        'Celulosa microcristalina',
        'Glicolato sódico de almidón',
        'Cubierta pelicular: alcohol polivinílico, polietilenglicol y talco',
        'Colorantes según la dosis: dióxido de titanio y óxidos de hierro'
      ],
      usos: {
        t: 'Tratamiento de la anemia por enfermedad renal crónica en adultos que llevan al menos tres meses en diálisis.',
        ref: {
          f: 'dailymed-vadadustat',
          sec: '1 · Indicaciones',
          cita: 'VAFSEO is indicated for the treatment of anemia due to chronic kidney disease (CKD) in adults who have been receiving dialysis for at least three months',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vadadustat',
      advertencias: [
        {
          titulo: 'Mayor riesgo de muerte, infarto, ictus y trombosis',
          texto: 'Aumenta el riesgo de acontecimientos vasculares trombóticos, incluidos los cardiovasculares mayores.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-vadadustat',
            sec: 'Advertencia destacada',
            cita: 'VAFSEO increases the risk of thrombotic vascular events, including major adverse cardiovascular events (MACE)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se ha notificado hepatotoxicidad; medir ALT, AST y bilirrubina antes de empezar y cada mes los primeros 6 meses.',
          organos: [],
          ref: {
            f: 'dailymed-vadadustat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hepatotoxicity: Has been reported in patients taking VAFSEO',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Puede empeorar la hipertensión, incluida una crisis hipertensiva; vigilar la presión arterial.',
          organos: [],
          ref: {
            f: 'dailymed-vadadustat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypertension: Worsening hypertension, including hypertensive crisis may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más) fueron hipertensión y diarrea.',
          '34084-4',
          'most common adverse reactions (occurring at ≥ 10%) were hypertension and diarrhea'
        ],
        [
          'Los ensayos clínicos se hicieron en condiciones muy variadas, por lo que sus tasas no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'adverse reaction rates observed in the clinical trials of a drug cannot be directly compared'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 150 mg, 300 mg o 450 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la anemia por enfermedad renal crónica en adultos que llevan al menos tres meses en diálisis.',
    actua: 'Inhibe de forma reversible las prolil-4-hidroxilasas del HIF (PH1, PH2 y PH3), lo que estabiliza los factores HIF-1α y HIF-2α y aumenta la producción de eritropoyetina.',
    recorrido: 'El tiempo hasta el pico es de unas 2 a 3 horas; una comida rica en grasas no produjo diferencias clínicamente significativas. Tras una dosis oral marcada en adultos sanos se recuperó el 85,9 %: el 58,9 % en la orina (menos del 1 % sin cambios) y el 26,9 % en las heces (9 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '3 · Formas y concentraciones',
            cita: 'VAFSEO is available as a film-coated, immediate-release tablet',
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
      ocurre: 'El tiempo hasta el pico es de unas 2 a 3 horas; una comida rica en grasas no produjo diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tiempo hasta el pico es de unas 2 a 3 horas; una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to peak plasma concentration (T max ) of vadadustat is approximately 2 to 3 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in vadadustat pharmacokinetics were observed following administration of a high-fat meal',
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
      ocurre: 'Se une en un 99,5 % o más a las proteínas del plasma humano y no se reparte en los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,5 % o más a las proteínas del plasma humano y no se reparte en los glóbulos rojos.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of vadadustat is ≥99.5% in human plasma. Vadadustat does not distribute into red blood cells',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Prolil-4-hidroxilasas del HIF',
        efecto: 'Inhibe de forma reversible las prolil-4-hidroxilasas del HIF (PH1, PH2 y PH3), lo que estabiliza los factores HIF-1α y HIF-2α y aumenta la producción de eritropoyetina.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma reversible las prolil-4-hidroxilasas del HIF (PH1, PH2 y PH3), lo que estabiliza los factores HIF-1α y HIF-2α y aumenta la producción de eritropoyetina.',
            ref: {
              f: 'dailymed-vadadustat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vadadustat is a reversible inhibitor of HIF-prolyl-4-hydroxylases (PH)1, PH2, and PH3 (IC 50 in the nM range)',
              codigo: '43679-0'
            }
          },
          {
            t: 'Esto estabiliza y acumula en el núcleo HIF-1α y HIF-2α y aumenta la producción de eritropoyetina.',
            ref: {
              f: 'dailymed-vadadustat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'This activity results in the stabilization and nuclear accumulation of HIF-1α and HIF-2α transcription factors, and increased production of erythropoietin (EPO)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por glucuronidación mediante enzimas UGT.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por glucuronidación mediante enzimas UGT.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: 'Vadadustat is primarily metabolized via glucuronidation by UDP-glucuronosyltransferase (UGT) enzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en adultos sanos se recuperó el 85,9 %: el 58,9 % en la orina (menos del 1 % sin cambios) y el 26,9 % en las heces (9 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en adultos sanos se recuperó el 85,9 %: el 58,9 % en la orina (menos del 1 % sin cambios) y el 26,9 % en las heces (9 % sin cambios).',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: '85.9% of the total dose was recovered; 58.9% in urine (<1% of total dose unchanged); and 26.9% in feces (9% of total dose unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media en pacientes en hemodiálisis crónica fue de 13,9 horas.',
          ref: {
            f: 'dailymed-vadadustat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean half-life of vadadustat in patients on chronic hemodialysis was 13.9 hours',
            codigo: '43682-4'
          },
          poblacion: 'pacientes en hemodiálisis crónica'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-3 (aprox.)',
      unidad: 'h',
      analito: 'vadadustat',
      ref: {
        f: 'dailymed-vadadustat',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to peak plasma concentration (T max ) of vadadustat is approximately 2 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≥ 99,5',
      unidad: '%',
      analito: 'vadadustat',
      ref: { f: 'dailymed-vadadustat', sec: '12.3 · Farmacocinética', cita: 'Protein binding of vadadustat is ≥99.5% in human plasma', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '13,9',
      unidad: 'h',
      analito: 'vadadustat',
      poblacion: 'pacientes en hemodiálisis crónica',
      ref: {
        f: 'dailymed-vadadustat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean half-life of vadadustat in patients on chronic hemodialysis was 13.9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '58,9',
      unidad: '% de la dosis',
      analito: 'vadadustat y metabolitos',
      poblacion: 'adultos sanos',
      condiciones: 'dosis oral única marcada',
      ref: { f: 'dailymed-vadadustat', sec: '12.3 · Farmacocinética', cita: '58.9% in urine (<1% of total dose unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vadadustat', 'ac9da724-5a62-4ab6-a89c-376a25f6195b', 'VAFSEO (VADADUSTAT) TABLET, FILM COATED', 'VAFSEO', '4', '2026-04-15', '2026-11-19'),
    rengPubchem(23634441, 'vadadustat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
