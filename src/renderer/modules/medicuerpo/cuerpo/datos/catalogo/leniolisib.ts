import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'leniolisib',
    nombre: 'Leniolisib',
    clase: 'Inhibidor de la fosfoinositida 3-cinasa delta (PI3Kδ)',
    sinonimos: [ 'leniolisib', 'Joenja' ],
    formula: 'C21H25F3N6O2',
    masaMolar: 450.5,
    smiles: 'CCC(=O)N1CC[C@@H](C1)NC2=NC=NC3=C2CN(CC3)C4=CC(=C(N=C4)OC)C(F)(F)F',
    inchikey: 'MWKYMZXCGYXLPL-ZDUSSCGKSA-N',
    cid: 57495353,
    iupac: '1-[(3S)-3-[[6-[6-methoxy-5-(trifluoromethyl)-3-pyridinyl]-7,8-dihydro-5H-pyrido[4,3-d]pyrimidin-4-yl]amino]pyrrolidin-1-yl]propan-1-one',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'leniolisib-oral',
      producto: 'Joenja · comprimido recubierto con película',
      titular: 'PHARMING HEALTHCARE INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '70 mg, 50 mg o 40 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Fosfato de leniolisib', ref: { f: 'dailymed-leniolisib', sec: '11 · Descripción', cita: 'leniolisib phosphate', codigo: '34089-3' } },
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'hypromellose, unspecified',
        'sodium starch glycolate type a',
        'magnesium stearate',
        'silicon dioxide',
        'hypromellose 2910 (15000 mpa.s)',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red',
        'talc',
        'polyethylene glycol, unspecified'
      ],
      usos: {
        t: 'Tratamiento del síndrome de PI3Kδ activada (APDS) en adultos y niños desde 4 años con 27 kg o más.',
        ref: {
          f: 'dailymed-leniolisib',
          sec: '1 · Indicaciones',
          cita: 'JOENJA is indicated for the treatment of activated phosphoinositide 3-kinase delta (PI3Kδ) syndrome (APDS) in adult and pediatric patients 4 years of age and older who weigh 27 kg or greater',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-leniolisib',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede dañar al feto; hay que informar del riesgo y usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-leniolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Embryo-Fetal Toxicity: JOENJA may cause fetal harm',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Vacunas',
          texto: 'Las vacunas atenuadas vivas pueden ser menos eficaces durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-leniolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Vaccinations: Live, attenuated vaccinations may be less effective if administered during JOENJA treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Se han notificado reacciones de hipersensibilidad, incluida anafilaxia; si aparecen, suspenderlo.',
          organos: [],
          ref: {
            f: 'dailymed-leniolisib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions, including anaphylaxis have been reported in the postmarketing setting',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En pacientes desde 12 años, las más frecuentes (más del 10 %): cefalea, sinusitis y dermatitis atópica.',
          '34084-4',
          'Adult and Pediatric Patients 12 Years of Age and Older: headache, sinusitis, and atopic dermatitis'
        ],
        [
          'En niños de 4 a menos de 12 años con 27 kg o más: dolor abdominal, tos e infección respiratoria.',
          '34084-4',
          'Pediatric Patients 4 Years to < 12 Years of Age Who Weigh 27 kg or Greater: abdominal pain, cough, and respiratory tract infection'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 70 mg, 50 mg o 40 mg por comprimido, según la etiqueta; el activo va como fosfato de leniolisib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del síndrome de PI3Kδ activada (APDS) en adultos y niños desde 4 años con 27 kg o más.',
    actua: 'Inhibe la PI3K-delta bloqueando su sitio de unión activo, con selectividad frente a otras isoformas; en células reduce la vía pAkt y la proliferación y activación de linfocitos B y T.',
    recorrido: 'La mediana del tiempo hasta la concentración máxima fue de alrededor de 1 hora; es poco probable que los alimentos tengan un efecto clínicamente relevante. Tras 70 mg marcados en varones adultos, se recuperó el 92,5 % de la radiactividad: el 67,0 % en las heces y el 25,5 % en la orina.'
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
            f: 'dailymed-leniolisib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 40 mg: Pink, round, biconvex, beveled edge tablet',
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
      ocurre: 'La mediana del tiempo hasta la concentración máxima fue de alrededor de 1 hora; es poco probable que los alimentos tengan un efecto clínicamente relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la concentración máxima fue de alrededor de 1 hora; es poco probable que los alimentos tengan un efecto clínicamente relevante.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'leniolisib median time to maximum plasma concentration (T max ) occurred at about 1 hour postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Es poco probable que los alimentos tengan un efecto clínicamente relevante en la exposición.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Food is unlikely to have a clinically meaningful effect on the systemic exposure of leniolisib during JOENJA treatment',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'tejidos', 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La caída biexponencial de la concentración indica un paso diferido a los tejidos periféricos; el volumen de distribución estimado es de 28,5 L y se une en un 94,5 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La caída biexponencial de la concentración indica un paso diferido a los tejidos periféricos; el volumen de distribución estimado es de 28,5 L y se une en un 94,5 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The systemic decay in leniolisib plasma concentration over time is bi-exponential, indicating a distribution delay towards peripheral tissues',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se une mucho (94,5 %) a las proteínas del plasma y su volumen de distribución estimado es de 28,5 L en pacientes con APDS.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Leniolisib was highly bound (94.5%) to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Fosfoinositida 3-cinasa delta (PI3Kδ)',
        efecto: 'Inhibe la PI3K-delta bloqueando su sitio de unión activo, con selectividad frente a otras isoformas; en células reduce la vía pAkt y la proliferación y activación de linfocitos B y T.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la PI3K-delta bloqueando su sitio de unión activo, con selectividad frente a otras isoformas; en células reduce la vía pAkt y la proliferación y activación de linfocitos B y T.',
            ref: {
              f: 'dailymed-leniolisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Leniolisib inhibits PI3K-delta by blocking the active binding site of PI3K-delta',
              codigo: '43679-0'
            }
          },
          {
            t: 'En ensayos celulares redujo la actividad de la vía pAkt e inhibió la proliferación y la activación de subgrupos de linfocitos B y T.',
            ref: {
              f: 'dailymed-leniolisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In cell-based assays, leniolisib reduced pAkt pathway activity and inhibited proliferation and activation of B and T cell subsets',
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
      ocurre: 'El hígado metaboliza el 60 %, con la CYP3A4 como enzima predominante (95,4 %) del metabolismo oxidativo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado metaboliza el 60 %, con la CYP3A4 como enzima predominante (95,4 %) del metabolismo oxidativo.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Leniolisib was 60% metabolized by the liver, with CYP3A4 being the most predominant enzyme involved (95.4%) in the primary oxidative metabolism of leniolisib',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 70 mg marcados en varones adultos, se recuperó el 92,5 % de la radiactividad: el 67,0 % en las heces y el 25,5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 70 mg marcados en varones adultos, se recuperó el 92,5 % de la radiactividad: el 67,0 % en las heces y el 25,5 % en la orina.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean recovery of total 14C-radioactivity following a single oral dose of 70 mg 14C-leniolisib in adult males was 92.5% (67.0% and 25.5% recovered via feces and urine, respectively) 168 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente es de unas 10 horas.',
          ref: {
            f: 'dailymed-leniolisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal elimination t 1/2 is approximately 10 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'leniolisib',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-leniolisib',
        sec: '12.3 · Farmacocinética',
        cita: 'leniolisib median time to maximum plasma concentration (T max ) occurred at about 1 hour postdose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución estimado',
      valor: '28,5',
      unidad: 'L',
      analito: 'leniolisib',
      poblacion: 'pacientes con APDS',
      ref: {
        f: 'dailymed-leniolisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of leniolisib is estimated to be 28.5 L in patients with APDS',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '94,5',
      unidad: '%',
      analito: 'leniolisib',
      ref: { f: 'dailymed-leniolisib', sec: '12.3 · Farmacocinética', cita: 'Leniolisib was highly bound (94.5%) to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'leniolisib',
      ref: {
        f: 'dailymed-leniolisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal elimination t 1/2 is approximately 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '67,0',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones adultos',
      condiciones: 'dosis oral única marcada de 70 mg',
      ref: {
        f: 'dailymed-leniolisib',
        sec: '12.3 · Farmacocinética',
        cita: '(67.0% and 25.5% recovered via feces and urine, respectively)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-leniolisib', 'eefbcef8-2130-4654-8f29-b58077e08212', 'JOENJA (LENIOLISIB) TABLET, FILM COATED', 'Joenja', '8', '2026-10-05', '2026-11-19'),
    rengPubchem(57495353, 'leniolisib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
