import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'brigatinib',
    nombre: 'Brigatinib',
    clase: 'Inhibidor de tirosina cinasas (ALK, ROS1, IGF-1R)',
    sinonimos: [ 'brigatinib', 'Alunbrig' ],
    formula: 'C29H39ClN7O2P',
    masaMolar: 584.1,
    smiles: 'CN1CCN(CC1)C2CCN(CC2)C3=CC(=C(C=C3)NC4=NC=C(C(=N4)NC5=CC=CC=C5P(=O)(C)C)Cl)OC',
    inchikey: 'AILRADAXUVEEIR-UHFFFAOYSA-N',
    cid: 68165256,
    iupac: '5-chloro-4-N-(2-dimethylphosphorylphenyl)-2-N-[2-methoxy-4-[4-(4-methylpiperazin-1-yl)piperidin-1-yl]phenyl]pyrimidine-2,4-diamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'brigatinib-oral',
      producto: 'Alunbrig · comprimido recubierto con película',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '30 mg, 90 mg o 180 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'microcrystalline cellulose', 'sodium starch glycolate type a potato', 'silicon dioxide', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico metastásico ALK positivo.',
        ref: {
          f: 'dailymed-brigatinib',
          sec: '1 · Indicaciones',
          cita: 'ALUNBRIG is a kinase inhibitor indicated for the treatment of adult patients with anaplastic lymphoma kinase (ALK)-positive metastatic non-small cell lung cancer (NSCLC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-brigatinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar síntomas respiratorios nuevos o que empeoran, sobre todo la primera semana.',
          organos: [],
          ref: {
            f: 'dailymed-brigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for new or worsening respiratory symptoms, particularly during the first week of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Vigilar la presión arterial a las 2 semanas y después al menos cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-brigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure after 2 weeks and then at least monthly during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradicardia',
          texto: 'Vigilar con regularidad la frecuencia cardíaca y la presión arterial.',
          organos: [],
          ref: {
            f: 'dailymed-brigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor heart rate and blood pressure regularly during treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (25 % o más): diarrea, fatiga, náuseas, exantema, tos, mialgia, cefalea, hipertensión, vómitos y disnea.',
          '34084-4',
          'most common adverse reactions (≥25%) with ALUNBRIG were diarrhea, fatigue, nausea, rash, cough, myalgia, headache, hypertension, vomiting, and dyspnea'
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
    contiene: 'Comprimido recubierto con película: 30 mg, 90 mg o 180 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico metastásico ALK positivo.',
    actua: 'Inhibidor de tirosina cinasas activo frente a ALK, ROS1, IGF-1R, FLT-3 y formas mutadas de EGFR; inhibe la autofosforilación de ALK y la señalización STAT3, AKT, ERK1/2 y S6.',
    recorrido: 'La mediana del tmax es de 1 a 4 horas; una comida grasa baja la Cmax un 13 % sin cambiar el AUC. Tras 180 mg marcados, el 65 % de la dosis se recuperó en las heces y el 25 % en la orina.'
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
            f: 'dailymed-brigatinib',
            sec: '11 · Descripción',
            cita: 'The tablet coating consists of talc, polyethylene glycol, polyvinyl alcohol, and titanium dioxide',
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
      ocurre: 'La mediana del tmax es de 1 a 4 horas; una comida grasa baja la Cmax un 13 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 1 a 4 horas; una comida grasa baja la Cmax un 13 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the median time to peak concentration (T max ) ranged from 1 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo la Cmax un 13 % sin efecto sobre el AUC.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Brigatinib C max was reduced by 13% with no effect on AUC in healthy subjects administered ALUNBRIG after a high fat meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 91 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 307 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 91 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 307 L.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Brigatinib is 91% bound to human plasma proteins and the binding is not concentration-dependent',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio en estado estacionario de 307 L.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean apparent volume of distribution (V z/ F) of brigatinib at steady-state was 307 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ALK, ROS1 e IGF-1R',
        efecto: 'Inhibidor de tirosina cinasas activo frente a ALK, ROS1, IGF-1R, FLT-3 y formas mutadas de EGFR; inhibe la autofosforilación de ALK y la señalización STAT3, AKT, ERK1/2 y S6.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de tirosina cinasas activo frente a ALK, ROS1, IGF-1R, FLT-3 y formas mutadas de EGFR; inhibe la autofosforilación de ALK y la señalización STAT3, AKT, ERK1/2 y S6.',
            ref: {
              f: 'dailymed-brigatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Brigatinib is a tyrosine kinase inhibitor (TKI) with in vitro activity at clinically achievable concentrations against multiple kinases including ALK, ROS1, insulin-like growth factor-1 receptor (IGF-1R), and FLT-3',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP2C8 y la CYP3A4; las vías principales son la N-desmetilación y la conjugación con cisteína.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP2C8 y la CYP3A4; las vías principales son la N-desmetilación y la conjugación con cisteína.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Brigatinib is primarily metabolized by CYP2C8 and CYP3A4 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 180 mg marcados, el 65 % de la dosis se recuperó en las heces y el 25 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 180 mg marcados, el 65 % de la dosis se recuperó en las heces y el 25 % en la orina.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: '65% of the administered dose was recovered in feces and 25% of the administered dose was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media es de 25 horas y el aclaramiento oral aparente de 8,9 L/h.',
          ref: {
            f: 'dailymed-brigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean apparent oral clearance (CL/F) of brigatinib at steady-state is 8.9 L/h and the mean plasma elimination half-life is 25 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1-4',
      unidad: 'h',
      analito: 'brigatinib',
      ref: {
        f: 'dailymed-brigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to peak concentration (T max ) ranged from 1 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '91',
      unidad: '%',
      analito: 'brigatinib',
      ref: { f: 'dailymed-brigatinib', sec: '12.3 · Farmacocinética', cita: 'Brigatinib is 91% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '307',
      unidad: 'L',
      analito: 'brigatinib',
      ref: {
        f: 'dailymed-brigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean apparent volume of distribution (V z/ F) of brigatinib at steady-state was 307 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '25',
      unidad: 'h',
      analito: 'brigatinib',
      ref: { f: 'dailymed-brigatinib', sec: '12.3 · Farmacocinética', cita: 'the mean plasma elimination half-life is 25 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '8,9',
      unidad: 'L/h',
      analito: 'brigatinib',
      ref: {
        f: 'dailymed-brigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean apparent oral clearance (CL/F) of brigatinib at steady-state is 8.9 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '65',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 180 mg',
      ref: { f: 'dailymed-brigatinib', sec: '12.3 · Farmacocinética', cita: '65% of the administered dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-brigatinib', '0fe9ff20-d402-41f3-bc1e-7002ea7007db', 'ALUNBRIG (BRIGATINIB) TABLET, FILM COATED ALUNBRIG (BRIGATINIB) KIT', 'Alunbrig', '17', '2026-01-19', '2026-11-19'),
    rengPubchem(68165256, 'brigatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
