import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mifepristona',
    nombre: 'Mifepristona',
    clase: 'Antagonista de los receptores de glucocorticoides y de progesterona',
    sinonimos: [ 'mifepristone', 'Korlym' ],
    formula: 'C29H35NO2',
    masaMolar: 429.6,
    smiles: 'CC#C[C@@]1(CC[C@@H]2[C@@]1(C[C@@H](C3=C4CCC(=O)C=C4CC[C@@H]23)C5=CC=C(C=C5)N(C)C)C)O',
    inchikey: 'VKHAHZOOUSRJNA-GCNJZUOMSA-N',
    cid: 55245,
    iupac: '(8S,11R,13S,14S,17S)-11-[4-(dimethylamino)phenyl]-17-hydroxy-13-methyl-17-prop-1-ynyl-1,2,6,7,8,11,12,14,15,16-decahydrocyclopenta[a]phenanthren-3-one',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'mifepristona-oral',
      producto: 'Korlym · comprimido',
      titular: 'CORCEPT THERAPEUTICS INCORPORATED',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '300 mg por comprimido, según la etiqueta',
      excipientes: [
        'sodium starch glycolate type a potato',
        'hydroxypropyl cellulose (1600000 wamw)',
        'microcrystalline cellulose',
        'silicon dioxide',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'hypromellose, unspecified',
        'triacetin',
        'titanium dioxide',
        'polysorbate 80',
        'd&c yellow no. 10',
        'aluminum oxide',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'Control de la hiperglucemia secundaria a hipercortisolismo en adultos con síndrome de Cushing endógeno que tienen diabetes tipo 2 o intolerancia a la glucosa y en quienes la cirugía ha fracasado o no es posible.',
        ref: {
          f: 'dailymed-mifepristona',
          sec: '1 · Indicaciones',
          cita: "KORLYM (mifepristone) is a cortisol receptor blocker indicated to control hyperglycemia secondary to hypercortisolism in adult patients with endogenous Cushing's syndrome",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mifepristona',
      advertencias: [
        {
          titulo: 'Terminación del embarazo',
          texto: 'Sus efectos antiprogestágenos provocan la terminación del embarazo; debe descartarse antes de empezar el tratamiento.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-mifepristona',
            sec: 'Advertencia destacada',
            cita: 'The antiprogestational effects will result in the termination of pregnancy',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Insuficiencia suprarrenal',
          texto: 'Los pacientes que reciben mifepristona pueden presentar insuficiencia suprarrenal.',
          organos: [ 'tejidos' ],
          ref: {
            f: 'dailymed-mifepristona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Patients receiving mifepristone may experience adrenal insufficiency',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en el síndrome de Cushing (20 % o más): náuseas, fatiga, cefalea, descenso del potasio en sangre, artralgia, vómitos, edema periférico, hipertensión, mareo, disminución del apetito e hipertrofia endometrial.',
          '34084-4',
          "Most common adverse reactions in Cushing's syndrome (≥ 20%): nausea, fatigue, headache, decreased blood potassium, arthralgia, vomiting, peripheral edema, hypertension, dizziness, decreased appetite, endometrial hypertrophy"
        ],
        [
          'La sección de reacciones adversas recoge las notificadas por el 20 % o más de los pacientes, con independencia de su relación con el fármaco.',
          '34084-4',
          'The most frequently reported adverse reactions (reported in ≥20% of patients, regardless of relationship to KORLYM)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 300 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Control de la hiperglucemia secundaria a hipercortisolismo en adultos con síndrome de Cushing endógeno que tienen diabetes tipo 2 o intolerancia a la glucosa y en quienes la cirugía ha fracasado o no es posible.',
    actua: 'Es un antagonista selectivo del receptor de progesterona a dosis bajas y bloquea el receptor de glucocorticoides (GR-II) a dosis más altas.',
    recorrido: 'Tras una dosis única, las concentraciones plasmáticas máximas se alcanzaron entre 1 y 2 horas, y tras dosis múltiples, entre 1 y 4 horas, en voluntarios sanos. La excreción es principalmente (alrededor del 90 %) por vía fecal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-mifepristona', sec: '3 · Formas y concentraciones', cita: 'Oval shaped, light yellow to yellow tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras una dosis única, las concentraciones plasmáticas máximas se alcanzaron entre 1 y 2 horas, y tras dosis múltiples, entre 1 y 4 horas, en voluntarios sanos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única, las concentraciones plasmáticas máximas se alcanzaron entre 1 y 2 horas, y tras dosis múltiples, entre 1 y 4 horas, en voluntarios sanos.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'time to peak plasma concentrations of mifepristone occurred between 1 and 2 hours following single dose, and between 1 and 4 hours following multiple doses of 600 mg of KORLYM in healthy volunteers',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimento aumentan de forma significativa los niveles plasmáticos de mifepristona.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Studies evaluating the effects of food on the pharmacokinetics of KORLYM demonstrate a significant increase in plasma levels of mifepristone when dosed with food',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma humano fue de aproximadamente el 99,2 % para la mifepristona y del 96,1 % al 98,9 % para sus tres metabolitos activos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma humano fue de aproximadamente el 99,2 % para la mifepristona y del 96,1 % al 98,9 % para sus tres metabolitos activos.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding was approximately 99.2% for mifepristone, and ranged from 96.1 to 98.9% for the three active metabolites at clinically relevant concentrations',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se une mucho a la glucoproteína ácida alfa-1 y se acerca a la saturación con dosis de 100 mg o más.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Mifepristone is highly bound to alpha-1-acid glycoprotein (AAG) and approaches saturation at doses of 100 mg (2.5 μM) or more',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con sus metabolitos se une también a la albúmina y se distribuye a otros tejidos, incluido el sistema nervioso central.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Mifepristone and its metabolites also bind to albumin and are distributed to other tissues, including the central nervous system (CNS)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de glucocorticoides (GR-II) y de progesterona',
        efecto: 'Es un antagonista selectivo del receptor de progesterona a dosis bajas y bloquea el receptor de glucocorticoides (GR-II) a dosis más altas.',
        lugar: [ 'tejidos', 'organos-reproductores' ],
        datos: [
          {
            t: 'Es un antagonista selectivo del receptor de progesterona a dosis bajas y bloquea el receptor de glucocorticoides (GR-II) a dosis más altas.',
            ref: {
              f: 'dailymed-mifepristona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Mifepristone is a selective antagonist of the progesterone receptor at low doses and blocks the glucocorticoid receptor (GR-II) at higher doses',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP3A4 interviene en su metabolismo en microsomas hepáticos humanos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP3A4 interviene en su metabolismo en microsomas hepáticos humanos.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 3A4 (CYP3A4) has been shown to be involved in mifepristone metabolism in human liver microsomes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Tres metabolitos activos (monodesmetilado, didesmetilado y monohidroxilado)',
          actividad: 'activo',
          nota: 'Metabolitos activos; sus concentraciones combinadas superan las de la mifepristona original.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Two of the known active metabolites are the product of demethylation (one monodemethylated and one di-demethylated), while a third active metabolite results from hydroxylation (monohydroxylated)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción es principalmente (alrededor del 90 %) por vía fecal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción es principalmente (alrededor del 90 %) por vía fecal.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'Excretion is primarily (approximately 90%) via the fecal route',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media de la mifepristona original fue de 85 horas tras dosis múltiples de 600 mg al día.',
          ref: {
            f: 'dailymed-mifepristona',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean (SD) half-life of the parent mifepristone was 85 (61) hours following multiple doses of 600 mg/day of KORLYM',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático (dosis única)',
      valor: '1-2',
      unidad: 'h',
      analito: 'mifepristona',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-mifepristona',
        sec: '12.3 · Farmacocinética',
        cita: 'time to peak plasma concentrations of mifepristone occurred between 1 and 2 hours following single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,2 (aprox.)',
      unidad: '%',
      analito: 'mifepristona',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-mifepristona', sec: '12.3 · Farmacocinética', cita: 'Binding was approximately 99.2% for mifepristone', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la mifepristona original',
      valor: '85 ± 61',
      unidad: 'h',
      analito: 'mifepristona',
      condiciones: 'dosis múltiples de 600 mg al día',
      ref: {
        f: 'dailymed-mifepristona',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (SD) half-life of the parent mifepristone was 85 (61) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excreción por vía fecal',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'mifepristona y metabolitos',
      ref: {
        f: 'dailymed-mifepristona',
        sec: '12.3 · Farmacocinética',
        cita: 'Excretion is primarily (approximately 90%) via the fecal route',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mifepristona', '542f3fae-8bc8-4f00-9228-e4b66c9ad6a9', 'KORLYM (MIFEPRISTONE) TABLET', 'Korlym', '26', '2025-10-06', '2026-11-15'),
    rengPubchem(55245, 'mifepristone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
