import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'avacopan',
    nombre: 'Avacopan',
    clase: 'Antagonista del receptor del complemento C5a (C5aR)',
    sinonimos: [ 'avacopan', 'Tavneos' ],
    formula: 'C33H35F4N3O2',
    masaMolar: 581.6,
    smiles: 'CC1=C(C(=CC=C1)F)C(=O)N2CCC[C@@H]([C@@H]2C3=CC=C(C=C3)NC4CCCC4)C(=O)NC5=CC(=C(C=C5)C)C(F)(F)F',
    inchikey: 'PUKBOVABABRILL-YZNIXAGQSA-N',
    cid: 49841217,
    iupac: '(2R,3S)-2-[4-(cyclopentylamino)phenyl]-1-(2-fluoro-6-methylbenzoyl)-N-[4-methyl-3-(trifluoromethyl)phenyl]piperidine-3-carboxamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'avacopan-oral',
      producto: 'TAVNEOS · cápsula',
      titular: 'CHEMOCENTRYX, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10 mg por cápsula, según la etiqueta',
      excipientes: [
        'polyoxyl 40 hydrogenated castor oil',
        'polyethylene glycol 4000',
        'ferric oxide red',
        'ferric oxide yellow',
        'titanium dioxide',
        'gelatin, unspecified',
        'ferrosoferric oxide',
        'polysorbate 80'
      ],
      usos: {
        t: 'Tratamiento complementario de adultos con vasculitis asociada a ANCA grave y activa (granulomatosis con poliangitis y poliangitis microscópica), junto con el tratamiento estándar con glucocorticoides.',
        ref: {
          f: 'dailymed-avacopan',
          sec: '1 · Indicaciones',
          cita: 'TAVNEOS is indicated as an adjunctive treatment of adult patients with severe active anti-neutrophil cytoplasmic autoantibody (ANCA)-associated vasculitis (granulomatosis with polyangiitis [GPA] and microscopic polyangiitis [MPA])',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-avacopan',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se han observado casos graves de lesión hepática, incluido el síndrome de desaparición de conductos biliares, a veces mortal.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-avacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious cases of hepatic injury have been observed in patients taking TAVNEOS',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones de hipersensibilidad graves',
          texto: 'En un ensayo hubo casos de angioedema; vigilar sus signos y tratarlos.',
          organos: [],
          ref: {
            f: 'dailymed-avacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious Hypersensitivity Reactions: Cases of angioedema occurred in a clinical trial',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reactivación del virus de la hepatitis B',
          texto: 'En un ensayo hubo reactivaciones; hay que suspender el avacopan e iniciar tratamiento antiinfeccioso.',
          organos: [],
          ref: {
            f: 'dailymed-avacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hepatitis B Virus (HBV) Reactivation: Cases of HBV reactivation occurred in a clinical trial',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Infecciones graves',
          texto: 'Evitarlo en pacientes con infecciones graves activas, incluidas las localizadas.',
          organos: [],
          ref: {
            f: 'dailymed-avacopan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious Infections: Avoid use of TAVNEOS in patients with active, serious infection, including localized infections',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): náuseas, cefalea, hipertensión, diarrea, vómitos, erupción, fatiga, dolor abdominal alto, mareo, aumento de la creatinina en sangre y parestesias.',
          '34084-4',
          'The most common adverse reactions (≥ 5%) are: nausea, headache, hypertension, diarrhea, vomiting, rash, fatigue, upper abdominal pain, dizziness, blood creatinine increased, and paresthesia'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la hepatotoxicidad, la hipersensibilidad, la reactivación del virus de la hepatitis B y las infecciones graves.',
          '34084-4',
          'Hepatotoxicity [see Warnings and Precautions (5.1) ] Hypersensitivity Reactions [see Warnings and Precautions (5.2) ] Hepatitis B Virus (HBV) Reactivation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 10 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de adultos con vasculitis asociada a ANCA grave y activa (granulomatosis con poliangitis y poliangitis microscópica), junto con el tratamiento estándar con glucocorticoides.',
    actua: 'Antagonista del receptor del complemento 5a: impide la interacción del receptor con la anafilatoxina C5a y bloquea la activación y la migración de los neutrófilos mediadas por C5a.',
    recorrido: 'Con una comida rica en grasas y calorías, el AUC y la Cmax aumentan alrededor de un 72 % y un 8 % y el tmax se retrasa unas 4 horas (de 2,0 a 6,0 horas). Se elimina sobre todo por metabolismo seguido de excreción biliar de los metabolitos a las heces: alrededor del 77 % de la radiactividad se recuperó en las heces y el 10 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 10 mg, opaque, yellow and light orange with CCX168 printed in black',
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
      ocurre: 'Con una comida rica en grasas y calorías, el AUC y la Cmax aumentan alrededor de un 72 % y un 8 % y el tmax se retrasa unas 4 horas (de 2,0 a 6,0 horas).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con una comida rica en grasas y calorías, el AUC y la Cmax aumentan alrededor de un 72 % y un 8 % y el tmax se retrasa unas 4 horas (de 2,0 a 6,0 horas).',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'Co-administration of 30 mg in capsule formulation with a high-fat, high-calorie meal increases AUC and C max of avacopan by approximately 72% and 8%, respectively, and delays t max by approximately 4 hours (from 2.0 hours to 6.0 hours)',
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
      ocurre: 'El avacopan y su metabolito M1 se unen en más del 99,9 % a las proteínas del plasma; el volumen de distribución aparente estimado es de 345 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El avacopan y su metabolito M1 se unen en más del 99,9 % a las proteínas del plasma; el volumen de distribución aparente estimado es de 345 L.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding (e.g., to albumin and α1-acid glycoprotein) of avacopan and metabolite M1 is greater than 99.9%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 345 L.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of avacopan is estimated to be 345 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor del complemento 5a (C5aR)',
        efecto: 'Antagonista del receptor del complemento 5a: impide la interacción del receptor con la anafilatoxina C5a y bloquea la activación y la migración de los neutrófilos mediadas por C5a.',
        lugar: [],
        datos: [
          {
            t: 'Antagonista del receptor del complemento 5a: impide la interacción del receptor con la anafilatoxina C5a y bloquea la activación y la migración de los neutrófilos mediadas por C5a.',
            ref: {
              f: 'dailymed-avacopan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Avacopan is a complement 5a receptor (C5aR) antagonist that inhibits the interaction between C5aR and the anaphylatoxin C5a. Avacopan blocks C5a-mediated neutrophil activation and migration',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP3A4 es la enzima principal de su aclaramiento y de la formación y el aclaramiento de su metabolito circulante principal, M1 (monohidroxilado).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP3A4 es la enzima principal de su aclaramiento y de la formación y el aclaramiento de su metabolito circulante principal, M1 (monohidroxilado).',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 is the major enzyme responsible for the clearance of avacopan and for the formation and clearance of the major circulating metabolite M1, a mono-hydroxylated product of avacopan',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 (monohidroxilado)',
          actividad: 'activo',
          nota: 'Supone alrededor del 12 % del material relacionado con el fármaco en el plasma y tiene una actividad parecida a la del avacopan.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'M1 was present at ~12% of the total drug-related materials in plasma and has approximately the same activity as avacopan on the C5aR',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo seguido de excreción biliar de los metabolitos a las heces: alrededor del 77 % de la radiactividad se recuperó en las heces y el 10 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo seguido de excreción biliar de los metabolitos a las heces: alrededor del 77 % de la radiactividad se recuperó en las heces y el 10 % en la orina.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'The main route of clearance of avacopan is metabolism followed by biliary excretion of the metabolites into feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis marcada, alrededor del 77 % y el 10 % de la radiactividad se recuperaron en las heces y en la orina.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'about 77% and 10% of the radioactivity was recovered in feces and urine, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis única de 30 mg con alimentos, las semividas medias del avacopan y de M1 son de 97,6 y 55,6 horas en sujetos sanos.',
          ref: {
            f: 'dailymed-avacopan',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean elimination half-lives of avacopan and M1 are 97.6 hours and 55.6 hours, respectively, in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis única de 30 mg con alimentos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima en ayunas',
      valor: '2,0',
      unidad: 'h',
      analito: 'avacopan',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'delays t max by approximately 4 hours (from 2.0 hours to 6.0 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'Aumento del AUC con comida rica en grasas',
      valor: '72 (aprox.)',
      unidad: '%',
      analito: 'avacopan',
      condiciones: 'con una comida rica en grasas y calorías',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'increases AUC and C max of avacopan by approximately 72% and 8%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99,9',
      unidad: '%',
      analito: 'avacopan y M1',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding (e.g., to albumin and α1-acid glycoprotein) of avacopan and metabolite M1 is greater than 99.9%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '345',
      unidad: 'L',
      analito: 'avacopan',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of avacopan is estimated to be 345 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '97,6',
      unidad: 'h',
      analito: 'avacopan',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 30 mg con alimentos',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean elimination half-lives of avacopan and M1 are 97.6 hours and 55.6 hours, respectively, in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal aparente total (CL/F)',
      valor: '16,3',
      unidad: 'L/h',
      analito: 'avacopan',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'the estimated total apparent body clearance (CL/F) of avacopan is 16.3 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '77 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-avacopan',
        sec: '12.3 · Farmacocinética',
        cita: 'about 77% and 10% of the radioactivity was recovered in feces and urine, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-avacopan', 'c93cbc0b-29a3-46a5-9c85-41815ea5cf4a', 'TAVNEOS (AVACOPAN) CAPSULE', 'TAVNEOS', '16', '2026-06-12', '2026-11-19'),
    rengPubchem(49841217, 'avacopan', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
