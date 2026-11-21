import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'abrocitinib',
    nombre: 'Abrocitinib',
    clase: 'Inhibidor de la cinasa Janus 1 (JAK1)',
    sinonimos: [ 'abrocitinib', 'Cibinqo' ],
    formula: 'C14H21N5O2S',
    masaMolar: 323.42,
    smiles: 'CCCS(=O)(=O)NC1CC(C1)N(C)C2=NC=NC3=C2C=CN3',
    inchikey: 'IUEWXNHSKRWHDY-UHFFFAOYSA-N',
    cid: 78323835,
    iupac: 'N-[3-[methyl(7H-pyrrolo[2,3-d]pyrimidin-4-yl)amino]cyclobutyl]propane-1-sulfonamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'abrocitinib-oral',
      producto: 'CIBINQO · comprimido recubierto con película',
      titular: 'U.S. PHARMACEUTICALS',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'anhydrous dibasic calcium phosphate',
        'sodium starch glycolate type a',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'lactose monohydrate',
        'polyethylene glycol, unspecified',
        'triacetin',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la dermatitis atópica refractaria moderada o grave en adultos y desde 12 años, cuando no se controla con otros fármacos sistémicos o estos no son aconsejables.',
        ref: {
          f: 'dailymed-abrocitinib',
          sec: '1 · Indicaciones',
          cita: 'CIBINQO is indicated for the treatment of adults and pediatric patients 12 years of age and older with refractory, moderate-to-severe atopic dermatitis whose disease is not adequately controlled with other systemic drug products',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-abrocitinib',
      advertencias: [
        {
          titulo: 'Infecciones graves',
          texto: 'Mayor riesgo de infecciones bacterianas, fúngicas, víricas y oportunistas graves, incluida la tuberculosis; suspender si aparece una infección grave.',
          organos: [],
          ref: {
            f: 'dailymed-abrocitinib',
            sec: 'Advertencia destacada',
            cita: 'Increased risk of serious bacterial, fungal, viral and opportunistic infections leading to hospitalization or death, including tuberculosis (TB)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Mortalidad, neoplasias, acontecimientos cardiovasculares y trombosis',
          texto: 'La advertencia de los inhibidores de JAK incluye mayor mortalidad, neoplasias malignas, acontecimientos cardiovasculares mayores y trombosis.',
          organos: [],
          ref: {
            f: 'dailymed-abrocitinib',
            sec: 'Advertencia destacada',
            cita: 'SERIOUS INFECTIONS, MORTALITY, MALIGNANCY, MAJOR ADVERSE CARDIOVASCULAR EVENTS (MACE), and THROMBOSIS',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Anomalías de laboratorio',
          texto: 'Se recomienda vigilar las plaquetas, los linfocitos y los lípidos.',
          organos: [ 'plaquetas' ],
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Laboratory monitoring is recommended due to potential changes in platelets, lymphocytes, and lipids',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos más frecuentes (1 % o más con 100 mg) incluyen nasofaringitis, náuseas, cefalea, herpes simple, aumento de la creatina fosfocinasa, mareo e infección urinaria.',
          '34084-4',
          'Most common adverse events (≥1% with CIBINQO 100 mg) are nasopharyngitis, nausea, headache, herpes simplex, increased blood creatine phosphokinase, dizziness, urinary tract infection'
        ],
        [
          'También figuran fatiga, acné, vómitos, impétigo, dolor orofaríngeo, hipertensión, gripe, gastroenteritis y dermatitis de contacto.',
          '34084-4',
          'fatigue, acne, vomiting, impetigo, oropharyngeal pain, hypertension, influenza, gastroenteritis, and dermatitis contact'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg, 100 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la dermatitis atópica refractaria moderada o grave en adultos y desde 12 años, cuando no se controla con otros fármacos sistémicos o estos no son aconsejables.',
    actua: 'Inhibidor de las cinasas Janus: inhibe de forma reversible la JAK1 bloqueando el sitio de unión del ATP, con selectividad frente a JAK2, JAK3 y TYK2.',
    recorrido: 'Se absorbe en más del 91 % y su biodisponibilidad oral absoluta es de alrededor del 60 %; el pico se alcanza en 1 hora. Menos del 1 % de la dosis se excreta sin cambios en la orina; los metabolitos M1 y M2 se excretan sobre todo por la orina.'
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
            f: 'dailymed-abrocitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Pink, oval, film-coated tablet debossed with "PFE" on one side and "ABR 50" on the other',
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
      ocurre: 'Se absorbe en más del 91 % y su biodisponibilidad oral absoluta es de alrededor del 60 %; el pico se alcanza en 1 hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe en más del 91 % y su biodisponibilidad oral absoluta es de alrededor del 60 %; el pico se alcanza en 1 hora.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Abrocitinib is absorbed with over 91% extent of oral absorption and absolute oral bioavailability of approximately 60%. The peak plasma concentrations of abrocitinib are reached within 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas y calorías no tuvo efecto clínicamente relevante (AUC y Cmax unos 26 % y 29 % mayores; Tmax 2 horas más tarde).',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Coadministration of CIBINQO with a high-fat, high-calorie meal (total 916 calories, with approximate distribution of 55% fat, 29% carbohydrates, and 16% protein) had no clinically relevant effect on abrocitinib exposures',
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
      ocurre: 'Alrededor del 64 % del abrocitinib circulante y el 37 % y el 29 % de sus metabolitos M1 y M2 se unen a las proteínas del plasma; se reparten por igual entre los glóbulos rojos y el plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 64 % del abrocitinib circulante y el 37 % y el 29 % de sus metabolitos M1 y M2 se unen a las proteínas del plasma; se reparten por igual entre los glóbulos rojos y el plasma.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 64%, 37% and 29% of circulating abrocitinib and its active metabolites M1 and M2, respectively, are bound to plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras la vía intravenosa, el volumen de distribución es de unos 100 L.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'After intravenous administration, the volume of distribution of abrocitinib is approximately 100 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa Janus 1 (JAK1)',
        efecto: 'Inhibidor de las cinasas Janus: inhibe de forma reversible la JAK1 bloqueando el sitio de unión del ATP, con selectividad frente a JAK2, JAK3 y TYK2.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de las cinasas Janus: inhibe de forma reversible la JAK1 bloqueando el sitio de unión del ATP, con selectividad frente a JAK2, JAK3 y TYK2.',
            ref: {
              f: 'dailymed-abrocitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Abrocitinib reversibly inhibits JAK1 by blocking the adenosine triphosphate (ATP) binding site',
              codigo: '43679-0'
            }
          },
          {
            t: 'El fármaco y sus metabolitos activos inhiben la JAK1 in vitro con una selectividad parecida.',
            ref: {
              f: 'dailymed-abrocitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Both the parent compound and the active metabolites inhibit JAK1 activity in vitro with similar levels of selectivity',
              codigo: '43679-0'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan varias CYP: CYP2C19 (alrededor del 53 %), CYP2C9 (30 %), CYP3A4 (11 %) y CYP2B6 (6 %); forma los metabolitos activos M1 y M2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan varias CYP: CYP2C19 (alrededor del 53 %), CYP2C9 (30 %), CYP3A4 (11 %) y CYP2B6 (6 %); forma los metabolitos activos M1 y M2.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of abrocitinib is mediated by multiple CYP enzymes, CYP2C19 (~53%), CYP2C9 (~30%), CYP3A4 (~11%) and CYP2B6 (~6%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 (3-hidroxipropilo) y M2 (2-hidroxipropilo)',
          actividad: 'activo',
          nota: 'M1 es menos activo que el abrocitinib y M2 tan activo como él.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolite M1 is less active than abrocitinib while metabolite M2 is as active as the parent',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Menos del 1 % de la dosis se excreta sin cambios en la orina; los metabolitos M1 y M2 se excretan sobre todo por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Menos del 1 % de la dosis se excreta sin cambios en la orina; los metabolitos M1 y M2 se excretan sobre todo por la orina.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolites of abrocitinib, M1 and M2 are excreted predominantly in urine, and are substrates of OAT3 transporter',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis marcada, menos del 1 % se excretó como fármaco sin cambios en la orina.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'After a single radiolabeled abrocitinib dose, less than 1% of the dose was excreted in urine as unchanged drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas medias del abrocitinib y de sus metabolitos activos van de 3 a 5 horas.',
          ref: {
            f: 'dailymed-abrocitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-lives of abrocitinib and its two active metabolites, M1 and M2, range 3 to 5 hours',
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
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'abrocitinib',
      ref: { f: 'dailymed-abrocitinib', sec: '12.3 · Farmacocinética', cita: 'absolute oral bioavailability of approximately 60%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 1',
      unidad: 'h',
      analito: 'abrocitinib',
      ref: {
        f: 'dailymed-abrocitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The peak plasma concentrations of abrocitinib are reached within 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras la vía intravenosa',
      valor: '100 (aprox.)',
      unidad: 'L',
      analito: 'abrocitinib',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-abrocitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'After intravenous administration, the volume of distribution of abrocitinib is approximately 100 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '64 (aprox.)',
      unidad: '%',
      analito: 'abrocitinib',
      ref: {
        f: 'dailymed-abrocitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 64%, 37% and 29% of circulating abrocitinib and its active metabolites M1 and M2, respectively, are bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '3-5',
      unidad: 'h',
      analito: 'abrocitinib, M1 y M2',
      ref: {
        f: 'dailymed-abrocitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-lives of abrocitinib and its two active metabolites, M1 and M2, range 3 to 5 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-abrocitinib', '16c12a56-4550-414b-ac9d-b785b41fea6b', 'CIBINQO (ABROCITINIB) TABLET, FILM COATED', 'CIBINQO', '7', '2026-10-26', '2026-11-19'),
    rengPubchem(78323835, 'abrocitinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
