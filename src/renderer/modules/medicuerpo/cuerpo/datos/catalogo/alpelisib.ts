import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alpelisib',
    nombre: 'Alpelisib',
    clase: 'Inhibidor de la fosfatidilinositol 3-cinasa alfa (PI3Kα)',
    sinonimos: [ 'alpelisib', 'Piqray' ],
    formula: 'C19H22F3N5O2S',
    masaMolar: 441.5,
    smiles: 'CC1=C(SC(=N1)NC(=O)N2CCC[C@H]2C(=O)N)C3=CC(=NC=C3)C(C)(C)C(F)(F)F',
    inchikey: 'STUWGJZDJHPWGZ-LBPRGKRZSA-N',
    cid: 56649450,
    iupac: '(2S)-1-N-[4-methyl-5-[2-(1,1,1-trifluoro-2-methylpropan-2-yl)-4-pyridinyl]-1,3-thiazol-2-yl]pyrrolidine-1,2-dicarboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'alpelisib-oral',
      producto: 'PIQRAY · comprimido',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'mannitol',
        'sodium starch glycolate type a potato',
        'hypromellose, unspecified',
        'magnesium stearate',
        'talc',
        'polyethylene glycol 4000',
        'titanium dioxide',
        'ferric oxide red',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento, con fulvestrant, del cáncer de mama avanzado con receptores hormonales positivos, HER2 negativo y mutación de PIK3CA, según la etiqueta.',
        ref: {
          f: 'dailymed-alpelisib',
          sec: '1 · Indicaciones',
          cita: 'in combination with fulvestrant for the treatment of adults with hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative, PIK3CA-mutated, advanced or metastatic breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-alpelisib',
      advertencias: [
        {
          titulo: 'Reacciones adversas cutáneas graves',
          texto: 'Puede causar reacciones cutáneas graves, como el síndrome de Stevens-Johnson o la necrólisis epidérmica tóxica.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-alpelisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Cutaneous Adverse Reactions (SCARs) : PIQRAY can cause SCARs, including Stevens-Johnson syndrome (SJS)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperglucemia',
          texto: 'Valorar la premedicación con metformina según los factores de riesgo de hiperglucemia.',
          organos: [],
          ref: {
            f: 'dailymed-alpelisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Consider premedication with metformin prior to the initiation of PIQRAY based on patient risk factors for hyperglycemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea o colitis',
          texto: 'Vigilar la diarrea y otros síntomas de colitis, como dolor abdominal o moco o sangre en las heces.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-alpelisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for diarrhea and additional symptoms of colitis, including abdominal pain and mucus or blood in stool',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con laboratorio): aumento de la glucosa y de la creatinina, diarrea, exantema y descenso de linfocitos, entre otras.',
          '34084-4',
          'Most common adverse reactions, including laboratory abnormalities (all Grades, incidence ≥ 20%) were increased glucose, increased creatinine, diarrhea, rash, decreased lymphocyte count'
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
    contiene: 'Comprimido: 150 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con fulvestrant, del cáncer de mama avanzado con receptores hormonales positivos, HER2 negativo y mutación de PIK3CA, según la etiqueta.',
    actua: 'Inhibe la fosfatidilinositol 3-cinasa, sobre todo la isoforma alfa, cuya activación por mutaciones de PIK3CA impulsa la transformación celular y los tumores.',
    recorrido: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; la comida aumenta la exposición, por lo que se toma con alimentos. Tras 400 mg marcados en ayunas, el 81 % de la dosis se recuperó en las heces (36 % sin cambios) y el 14 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '3 · Formas y concentraciones',
            cita: 'Light pink, unscored, round and curved with beveled edges film-coated tablet',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; la comida aumenta la exposición, por lo que se toma con alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 2 a 4 horas; la comida aumenta la exposición, por lo que se toma con alimentos.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to maximum plasma concentration (T max ) ranges between 2 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó 1,7 veces y la Cmax 1,8 veces.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alpelisib AUC increased 1.7-fold and C max 1.8-fold following administration of a high-fat meal (985 calories with 58.1 g of fat)',
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
      ocurre: 'Se une en un 89 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente previsto es de 114 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 89 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente previsto es de 114 L.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of alpelisib is 89% and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente previsto de 114 L.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alpelisib mean apparent volume of distribution is predicted to be 114 L (49%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PI3Kα',
        efecto: 'Inhibe la fosfatidilinositol 3-cinasa, sobre todo la isoforma alfa, cuya activación por mutaciones de PIK3CA impulsa la transformación celular y los tumores.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la fosfatidilinositol 3-cinasa, sobre todo la isoforma alfa, cuya activación por mutaciones de PIK3CA impulsa la transformación celular y los tumores.',
            ref: {
              f: 'dailymed-alpelisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Alpelisib is an inhibitor of phosphatidylinositol-3-kinase (PI3K) with inhibitory activity predominantly against PI3Kα',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por hidrólisis química y enzimática a su metabolito BZG791, seguida de hidroxilación mediada por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por hidrólisis química y enzimática a su metabolito BZG791, seguida de hidroxilación mediada por la CYP3A.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alpelisib is primarily metabolized by chemical and enzymatic hydrolysis to form its metabolite BZG791 and followed by CYP3A mediated hydroxylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados en ayunas, el 81 % de la dosis se recuperó en las heces (36 % sin cambios) y el 14 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados en ayunas, el 81 % de la dosis se recuperó en las heces (36 % sin cambios) y el 14 % en la orina.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: '81% of the administered dose was recovered in feces (36% unchanged, 32% BZG791) and 14% (2% unchanged, 7.1% BZG791) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida prevista es de 8 a 9 horas y el aclaramiento, de 9,2 L/h con alimentos.',
          ref: {
            f: 'dailymed-alpelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alpelisib half-life is predicted to be 8 to 9 hours with clearance predicted to be 9.2 L/hr (21%) under fed conditions',
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
      valor: '2-4',
      unidad: 'h',
      analito: 'alpelisib',
      ref: {
        f: 'dailymed-alpelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to maximum plasma concentration (T max ) ranges between 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '89',
      unidad: '%',
      analito: 'alpelisib',
      ref: { f: 'dailymed-alpelisib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of alpelisib is 89%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente previsto',
      valor: '114',
      unidad: 'L',
      analito: 'alpelisib',
      ref: {
        f: 'dailymed-alpelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'Alpelisib mean apparent volume of distribution is predicted to be 114 L (49%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida prevista',
      valor: '8-9',
      unidad: 'h',
      analito: 'alpelisib',
      ref: { f: 'dailymed-alpelisib', sec: '12.3 · Farmacocinética', cita: 'Alpelisib half-life is predicted to be 8 to 9 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento previsto',
      valor: '9,2',
      unidad: 'L/h',
      analito: 'alpelisib',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-alpelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'clearance predicted to be 9.2 L/hr (21%) under fed conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '81',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 400 mg en ayunas',
      ref: {
        f: 'dailymed-alpelisib',
        sec: '12.3 · Farmacocinética',
        cita: '81% of the administered dose was recovered in feces (36% unchanged, 32% BZG791)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-alpelisib', 'b20b4e18-7a4b-4500-a08f-06c6dab0ee5b', 'PIQRAY (ALPELISIB) TABLET PIQRAY (ALPELISIB) KIT', 'PIQRAY', '14', '2026-11-05', '2026-11-19'),
    rengPubchem(56649450, 'alpelisib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
