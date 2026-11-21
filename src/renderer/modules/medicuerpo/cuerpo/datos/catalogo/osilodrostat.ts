import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'osilodrostat',
    nombre: 'Osilodrostat',
    clase: 'Inhibidor de la síntesis de cortisol (inhibidor de la 11β-hidroxilasa)',
    sinonimos: [ 'osilodrostat', 'Isturisa' ],
    formula: 'C13H10FN3',
    masaMolar: 227.24,
    smiles: 'C1CC2=CN=CN2[C@H]1C3=C(C=C(C=C3)C#N)F',
    inchikey: 'USUZGMWDZDXMDG-CYBMUJFWSA-N',
    cid: 44139752,
    iupac: '4-[(5R)-6,7-dihydro-5H-pyrrolo[1,2-c]imidazol-5-yl]-3-fluorobenzonitrile',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'osilodrostat-oral',
      producto: 'Isturisa · comprimido recubierto',
      titular: 'RECORDATI RARE DISEASES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fosfato de osilodrostat',
        ref: { f: 'dailymed-osilodrostat', sec: '11 · Descripción', cita: 'osilodrostat phosphate', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'mannitol',
        'microcrystalline cellulose',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red',
        'polyethylene glycol 4000',
        'talc'
      ],
      usos: {
        t: 'Tratamiento de la hipercortisolemia endógena en adultos con síndrome de Cushing en quienes la cirugía no es posible o no ha sido curativa.',
        ref: {
          f: 'dailymed-osilodrostat',
          sec: '1 · Indicaciones',
          cita: "ISTURISA is indicated for the treatment of endogenous hypercortisolemia in adults with Cushing's syndrome for whom surgery is not an option or has not been curative",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-osilodrostat',
      advertencias: [
        {
          titulo: 'Hipocortisolismo',
          texto: 'Reduce el cortisol y puede causar hipocortisolismo y, a veces, una insuficiencia suprarrenal potencialmente mortal.',
          organos: [],
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'ISTURISA lowers cortisol levels and can lead to hypocortisolism and sometimes life-threatening adrenal insufficiency',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Se asocia a una prolongación del intervalo QT dependiente de la dosis, que puede causar arritmias cardíacas.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'ISTURISA is associated with a dose-dependent QT interval prolongation (maximum mean estimated QTcF increase of up to 5.3 ms at 30 mg), which may cause cardiac arrhythmias',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de precursores suprarrenales y andrógenos',
          texto: 'Puede aumentar los precursores del cortisol y la aldosterona y los andrógenos; el exceso de 11-desoxicorticosterona puede causar hipopotasemia, edema e hipertensión.',
          organos: [],
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Elevated 11-deoxycorticosterone levels may activate mineralocorticoid receptors and cause hypokalemia, edema and hypertension',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 20 %): insuficiencia suprarrenal, fatiga, náuseas, cefalea, edema, disminución del apetito, artralgia, mialgia y diarrea.',
          '34084-4',
          'Most common adverse reactions (incidence > 20%) are adrenal insufficiency, fatigue, nausea, headache, edema, decreased appetite, arthralgia, myalgia, and diarrhea'
        ],
        [
          'Entre las reacciones clínicamente significativas descritas en otras secciones figuran el hipocortisolismo, la prolongación del QT y la elevación de precursores hormonales suprarrenales y andrógenos.',
          '34084-4',
          'Hypocortisolism [see Warnings and Precautions (5.1) ] QT Prolongation [see Warnings and Precautions (5.2) ] Elevations in Adrenal Hormone Precursors and Androgens'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 1 mg, 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como fosfato de osilodrostat. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipercortisolemia endógena en adultos con síndrome de Cushing en quienes la cirugía no es posible o no ha sido curativa.',
    actua: 'Inhibe la 11β-hidroxilasa (CYP11B1), la enzima del último paso de la síntesis de cortisol en la glándula suprarrenal.',
    recorrido: 'Se absorbe con un tiempo hasta la concentración máxima de alrededor de 1 hora. La mayor parte de la dosis radiactiva se elimina en la orina (90,6 % de media) y solo una pequeña parte en las heces (1,58 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '11 · Descripción',
            cita: 'ISTURISA tablets for oral administration contains 1 mg or 5 mg of osilodrostat',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con un tiempo hasta la concentración máxima de alrededor de 1 hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con un tiempo hasta la concentración máxima de alrededor de 1 hora.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Osilodrostat is absorbed with a time of maximum observed concentration (T max ) of approximately 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, el AUC bajó un 11 % y la Cmax un 21 %, y la mediana del Tmax se retrasó de 1 a 2,5 horas; no se consideran cambios clínicamente significativos.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'subjects administered with a single, 30 mg oral dose of ISTURISA film-coated tablets with a high-fat meal resulted in reduction of AUC by 11% and C max by 21%, respectively',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas es baja (36,4 %); el volumen de distribución aparente mediano es de unos 100 L y el cociente sangre/plasma es de 0,85.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas es baja (36,4 %); el volumen de distribución aparente mediano es de unos 100 L y el cociente sangre/plasma es de 0,85.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The median apparent volume of distribution of osilodrostat is approximately 100 L. Protein binding is low (36.4%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El cociente de concentraciones sangre/plasma es de 0,85.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The osilodrostat blood-to-plasma concentration ratio is 0.85',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: '11β-hidroxilasa (CYP11B1)',
        efecto: 'Inhibe la 11β-hidroxilasa (CYP11B1), la enzima del último paso de la síntesis de cortisol en la glándula suprarrenal.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la 11β-hidroxilasa (CYP11B1), la enzima del último paso de la síntesis de cortisol en la glándula suprarrenal.',
            ref: {
              f: 'dailymed-osilodrostat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It inhibits 11beta-hydroxylase (CYP11B1), the enzyme responsible for the final step of cortisol biosynthesis in the adrenal gland',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Varias enzimas CYP (CYP3A4, CYP2B6 y CYP2D6) y UDP-glucuronosiltransferasas contribuyen a su metabolismo, y ninguna aporta más del 25 % del aclaramiento total.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Varias enzimas CYP (CYP3A4, CYP2B6 y CYP2D6) y UDP-glucuronosiltransferasas contribuyen a su metabolismo, y ninguna aporta más del 25 % del aclaramiento total.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Multiple CYP enzymes (i.e., CYP3A4, CYP2B6, and CYP2D6) and UDP-glucuronosyltransferases contribute to osilodrostat metabolism and no single enzyme contributes greater than 25% to the total clearance',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del osilodrostat',
          actividad: 'inactivo',
          nota: 'No se espera que contribuyan al efecto farmacológico.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolites are not expected to contribute to the pharmacological effect of osilodrostat',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayor parte de la dosis radiactiva se elimina en la orina (90,6 % de media) y solo una pequeña parte en las heces (1,58 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte de la dosis radiactiva se elimina en la orina (90,6 % de media) y solo una pequeña parte en las heces (1,58 %).',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'the majority of the radioactivity dose of osilodrostat is eliminated in the urine (mean: 90.6% of administered dose) with only a minor amount eliminated in the feces (1.58% of dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Solo el 5,2 % de la dosis sale por la orina sin cambios, lo que indica que el metabolismo es la vía principal de aclaramiento.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The low percentage of the dose eliminated in the urine as unchanged osilodrostat (5.2%) indicates that metabolism is the major clearance pathway in humans',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 4 horas.',
          ref: {
            f: 'dailymed-osilodrostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of osilodrostat is approximately 4 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'osilodrostat',
      ref: {
        f: 'dailymed-osilodrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'Osilodrostat is absorbed with a time of maximum observed concentration (T max ) of approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente mediano',
      valor: '100 (aprox.)',
      unidad: 'L',
      analito: 'osilodrostat',
      ref: {
        f: 'dailymed-osilodrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The median apparent volume of distribution of osilodrostat is approximately 100 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '36,4',
      unidad: '%',
      analito: 'osilodrostat',
      ref: { f: 'dailymed-osilodrostat', sec: '12.3 · Farmacocinética', cita: 'Protein binding is low (36.4%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'osilodrostat',
      ref: {
        f: 'dailymed-osilodrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of osilodrostat is approximately 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad eliminada en la orina',
      valor: '90,6',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-osilodrostat',
        sec: '12.3 · Farmacocinética',
        cita: 'the majority of the radioactivity dose of osilodrostat is eliminated in the urine (mean: 90.6% of administered dose)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-osilodrostat', 'f3a5ec24-63c3-4d83-b1c0-6c550fbe7ae2', 'ISTURISA (OSILODROSTAT) TABLET, COATED ISTURISA (OSILODROSTAT) TABLET, COATED ISTURISA (OSILODROSTAT) TABLET, COATED', 'Isturisa', '10', '2025-11-19', '2026-11-18'),
    rengPubchem(44139752, 'osilodrostat', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
