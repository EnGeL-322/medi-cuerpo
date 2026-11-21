import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'voclosporina',
    nombre: 'Voclosporina',
    clase: 'Inmunosupresor inhibidor de la calcineurina',
    sinonimos: [ 'voclosporin', 'Lupkynis' ],
    formula: 'C63H111N11O12',
    masaMolar: 1214.6,
    smiles: 'CC[C@H]1C(=O)N(CC(=O)N([C@H](C(=O)N[C@H](C(=O)N([C@H](C(=O)N[C@H](C(=O)N[C@@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N1)[C@@H]([C@H](C)C/C=C/C=C)O)C)C(C)C)C)CC(C)C)C)CC(C)C)C)C)C)CC(C)C)C)C(C)C)CC(C)C)C)C',
    inchikey: 'BICRTLVBTLFLRD-PTWUADNWSA-N',
    cid: 6918486,
    iupac: '(3S,6S,9S,12R,15S,18S,21S,24S,30S,33S)-30-ethyl-33-[(1R,2R,4E)-1-hydroxy-2-methylhepta-4,6-dienyl]-1,4,7,10,12,15,19,25,28-nonamethyl-6,9,18,24-tetrakis(2-methylpropyl)-3,21-di(propan-2-yl)-1,4,7,10,13,16,19,22,25,28,31-undecazacyclotritriacontane-2,5,8,11,14,17,20,23,26,29,32-undecone',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'voclosporina-oral',
      producto: 'LUPKYNIS · cápsula',
      titular: 'AURINIA PHARMA U.S., INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '7.9 mg por cápsula, según la etiqueta',
      excipientes: [ 'alcohol', 'polysorbate 40', 'medium-chain triglycerides', 'tocophersolan' ],
      usos: {
        t: 'Tratamiento de adultos con nefritis lúpica activa, junto con un régimen inmunosupresor de base.',
        ref: {
          f: 'dailymed-voclosporina',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult patients with active lupus nephritis (LN)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-voclosporina',
      advertencias: [
        {
          titulo: 'Neoplasias e infecciones graves',
          texto: 'Mayor riesgo de neoplasias malignas e infecciones graves, que pueden llevar a hospitalización o muerte.',
          organos: [],
          ref: {
            f: 'dailymed-voclosporina',
            sec: 'Advertencia destacada',
            cita: 'Increased risk for developing malignancies and serious infections with LUPKYNIS or other immunosuppressants that may lead to hospitalization or death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Nefrotoxicidad',
          texto: 'Puede aparecer nefrotoxicidad aguda o crónica; hay que vigilar la función renal.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-voclosporina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Nephrotoxicity (acute and/or chronic): May occur due to LUPKYNIS or concomitant nephrotoxic drugs. Monitor renal function',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Neurotoxicidad',
          texto: 'Incluye el riesgo de síndrome de encefalopatía posterior reversible; vigilar las alteraciones neurológicas.',
          organos: [],
          ref: {
            f: 'dailymed-voclosporina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neurotoxicity: Including risk of posterior reversible encephalopathy syndrome (PRES)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (3 % o más): descenso del filtrado glomerular, hipertensión, diarrea, cefalea, anemia, tos, infección urinaria, dolor abdominal, dispepsia, alopecia y deterioro renal, entre otras.',
          '34084-4',
          'most commonly reported adverse reactions (≥3%) were: glomerular filtration rate decreased, hypertension, diarrhea, headache, anemia, cough, urinary tract infection, abdominal pain upper, dyspepsia, alopecia, renal impairment'
        ],
        [
          'El descenso del filtrado glomerular llevó a suspender definitivamente el tratamiento en 10 de 70 pacientes (14 %).',
          '34084-4',
          'Decreases in glomerular filtration rate resulted in permanent discontinuation of LUPKYNIS in 10/70 (14%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 7.9 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con nefritis lúpica activa, junto con un régimen inmunosupresor de base.',
    actua: 'Inmunosupresor inhibidor de la calcineurina; su efecto inhibe la proliferación de linfocitos, la producción de citocinas de linfocitos T y la expresión de antígenos de activación.',
    recorrido: 'En ayunas, la mediana del Tmax es de 1,5 horas (1 a 4); los alimentos reducen la velocidad y la magnitud de la absorción. Tras 70 mg marcados, el 92,7 % de la radiactividad se recuperó en las heces (5 % sin cambios) y el 2,1 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 7.9 mg (voclosporin) oval, pink/orange in color',
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
      ocurre: 'En ayunas, la mediana del Tmax es de 1,5 horas (1 a 4); los alimentos reducen la velocidad y la magnitud de la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas, la mediana del Tmax es de 1,5 horas (1 a 4); los alimentos reducen la velocidad y la magnitud de la absorción.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of voclosporin is 1.5 hours (1 to 4 hours) when administered on an empty stomach',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comidas pobres o ricas en grasas, la Cmax y el AUC bajaron entre un 29 % y un 53 % y entre un 15 % y un 25 %.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'with either low- or high-fat meals, C max and AUC of voclosporin were reduced by 29% to 53% and 15% to 25%, respectively',
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
      ocurre: 'El volumen de distribución aparente es de 2154 L y la unión a proteínas del 97 %; pasa en gran medida a los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente es de 2154 L y la unión a proteínas del 97 %; pasa en gran medida a los glóbulos rojos.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'Voclosporin partitions extensively into red blood cells and distribution between whole blood and plasma is concentration- and temperature-dependent',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas es del 97 % y el volumen de distribución aparente de 2154 L.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (V ss /F) of voclosporin is 2,154 L. Protein binding of voclosporin is 97%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Calcineurina',
        efecto: 'Inmunosupresor inhibidor de la calcineurina; su efecto inhibe la proliferación de linfocitos, la producción de citocinas de linfocitos T y la expresión de antígenos de activación.',
        lugar: [],
        datos: [
          {
            t: 'Inmunosupresor inhibidor de la calcineurina; su efecto inhibe la proliferación de linfocitos, la producción de citocinas de linfocitos T y la expresión de antígenos de activación.',
            ref: {
              f: 'dailymed-voclosporina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The immunosuppressant activity results in inhibition of lymphocyte proliferation, T-cell cytokine production, and expression of T-cell activation surface antigens',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un inmunosupresor inhibidor de la calcineurina, aunque el mecanismo exacto de la supresión no se ha establecido del todo.',
            ref: {
              f: 'dailymed-voclosporina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'LUPKYNIS is a calcineurin-inhibitor immunosuppressant. The mechanism of voclosporin suppression of calcineurin has not been fully established',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4; la voclosporina es el componente circulante principal y responsable de la actividad.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4; la voclosporina es el componente circulante principal y responsable de la actividad.',
          ref: { f: 'dailymed-voclosporina', sec: '12.3 · Farmacocinética', cita: 'Voclosporin is predominantly metabolized by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito principal en sangre',
          actividad: 'activo',
          nota: 'Supone el 16,7 % de la exposición total y es unas 8 veces menos potente que la voclosporina.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'A major metabolite in human whole blood represented 16.7% of total exposure and is about 8-fold less potent than the parent molecule',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 70 mg marcados, el 92,7 % de la radiactividad se recuperó en las heces (5 % sin cambios) y el 2,1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 70 mg marcados, el 92,7 % de la radiactividad se recuperó en las heces (5 % sin cambios) y el 2,1 % en la orina.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: '92.7% of the radioactivity was recovered in feces (including 5% as unchanged voclosporin), and 2.1% was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento aparente medio en estado estacionario es de 63,6 L/h y la semivida terminal de unas 30 horas.',
          ref: {
            f: 'dailymed-voclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent clearance at steady-state (CL ss /F) of voclosporin is 63.6 L/h, and mean terminal half-life (t 1/2 ) is approximately 30 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax en ayunas',
      valor: '1,5',
      unidad: 'h',
      analito: 'voclosporina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-voclosporina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of voclosporin is 1.5 hours (1 to 4 hours) when administered on an empty stomach',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '2154',
      unidad: 'L',
      analito: 'voclosporina',
      ref: {
        f: 'dailymed-voclosporina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V ss /F) of voclosporin is 2,154 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '97',
      unidad: '%',
      analito: 'voclosporina',
      ref: { f: 'dailymed-voclosporina', sec: '12.3 · Farmacocinética', cita: 'Protein binding of voclosporin is 97%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '30 (aprox.)',
      unidad: 'h',
      analito: 'voclosporina',
      ref: {
        f: 'dailymed-voclosporina',
        sec: '12.3 · Farmacocinética',
        cita: 'mean terminal half-life (t 1/2 ) is approximately 30 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '63,6',
      unidad: 'L/h',
      analito: 'voclosporina',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-voclosporina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent clearance at steady-state (CL ss /F) of voclosporin is 63.6 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '92,7',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 70 mg',
      ref: { f: 'dailymed-voclosporina', sec: '12.3 · Farmacocinética', cita: '92.7% of the radioactivity was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-voclosporina', '9f489295-1156-52c7-5fd0-5c4c52f9b813', 'LUPKYNIS (VOCLOSPORIN) CAPSULE', 'LUPKYNIS', '13', '2026-11-16', '2026-11-19'),
    rengPubchem(6918486, 'voclosporin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
