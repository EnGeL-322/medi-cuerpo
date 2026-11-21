import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fingolimod',
    nombre: 'Fingolimod',
    clase: 'Modulador de los receptores de esfingosina 1-fosfato',
    sinonimos: [ 'fingolimod', 'Gilenya' ],
    formula: 'C19H33NO2',
    masaMolar: 307.5,
    smiles: 'CCCCCCCCC1=CC=C(C=C1)CCC(CO)(CO)N',
    inchikey: 'KKGQTZUTZRNORY-UHFFFAOYSA-N',
    cid: 107970,
    iupac: '2-amino-2-[2-(4-octylphenyl)ethyl]propane-1,3-diol',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'fingolimod-oral',
      producto: 'Gilenya · cápsula',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg o 0.25 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de fingolimod',
        ref: { f: 'dailymed-fingolimod', sec: '11 · Descripción', cita: 'Fingolimod hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'gelatin', 'magnesium stearate', 'mannitol', 'titanium dioxide', 'ferric oxide yellow' ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple (síndrome clínicamente aislado, enfermedad recurrente-remitente y secundaria progresiva activa) en pacientes desde 10 años.',
        ref: {
          f: 'dailymed-fingolimod',
          sec: '1 · Indicaciones',
          cita: 'GILENYA is indicated for the treatment of relapsing forms of multiple sclerosis (MS), to include clinically isolated syndrome, relapsing-remitting disease, and active secondary progressive disease, in patients 10 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fingolimod',
      advertencias: [
        {
          titulo: 'Bradiarritmia y bloqueos auriculoventriculares',
          texto: 'Por el riesgo de bradiarritmia y de bloqueos AV, hay que vigilar a los pacientes al empezar el tratamiento.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-fingolimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'Because of a risk for bradyarrhythmia and AV blocks, patients should be monitored during GILENYA treatment initiation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más y más que con placebo): cefalea, aumento de transaminasas hepáticas, diarrea, tos, gripe, sinusitis, dolor de espalda, dolor abdominal y dolor en las extremidades.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 10% and greater than placebo): Headache, liver transaminase elevation, diarrhea, cough, influenza, sinusitis, back pain, abdominal pain, and pain in extremity'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figuran las reacciones de hipersensibilidad.',
          '34084-4',
          'Hypersensitivity Reactions [see Warnings and Precautions (5.14)]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.5 mg o 0.25 mg por cápsula, según la etiqueta; el activo va como clorhidrato de fingolimod. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple (síndrome clínicamente aislado, enfermedad recurrente-remitente y secundaria progresiva activa) en pacientes desde 10 años.',
    actua: 'Su metabolito activo, el fosfato de fingolimod, se une a los receptores de esfingosina 1-fosfato y bloquea la salida de los linfocitos de los ganglios linfáticos, lo que reduce su número en la sangre periférica.',
    recorrido: 'El Tmax es de 12 a 16 horas y la biodisponibilidad oral absoluta aparente es del 93 %. Tras la administración oral, alrededor del 81 % de la dosis se excreta lentamente por la orina como metabolitos inactivos.'
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
            f: 'dailymed-fingolimod',
            sec: '3 · Formas y concentraciones',
            cita: 'GILENYA is available as: 0.25 mg hard capsules with an ivory opaque body and cap',
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
      ocurre: 'El Tmax es de 12 a 16 horas y la biodisponibilidad oral absoluta aparente es del 93 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El Tmax es de 12 a 16 horas y la biodisponibilidad oral absoluta aparente es del 93 %.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The T max of fingolimod is 12 to 16 hours. The apparent absolute oral bioavailability is 93%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no alteran la Cmax ni el AUC del fingolimod ni del fosfato de fingolimod.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Food intake does not alter C max or (AUC) of fingolimod or fingolimod-phosphate',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye en gran medida (86 %) en los glóbulos rojos; el fingolimod y el fosfato de fingolimod se unen en más del 99,7 % a las proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye en gran medida (86 %) en los glóbulos rojos; el fingolimod y el fosfato de fingolimod se unen en más del 99,7 % a las proteínas.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Fingolimod highly (86%) distributes in red blood cells',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se distribuye ampliamente a los tejidos, con un volumen de distribución de unos 1200 ± 260 L.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Fingolimod is extensively distributed to body tissues with a volume of distribution of about 1200 ± 260 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'El fingolimod y el fosfato de fingolimod se unen en más del 99,7 % a las proteínas.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Fingolimod and fingolimod-phosphate are > 99.7% protein bound',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de esfingosina 1-fosfato (1, 3, 4 y 5)',
        efecto: 'Su metabolito activo, el fosfato de fingolimod, se une a los receptores de esfingosina 1-fosfato y bloquea la salida de los linfocitos de los ganglios linfáticos, lo que reduce su número en la sangre periférica.',
        lugar: [ 'sistema-inmunitario', 'sangre' ],
        datos: [
          {
            t: 'Su metabolito activo, el fosfato de fingolimod, se une a los receptores de esfingosina 1-fosfato y bloquea la salida de los linfocitos de los ganglios linfáticos, lo que reduce su número en la sangre periférica.',
            ref: {
              f: 'dailymed-fingolimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Fingolimod-phosphate blocks the capacity of lymphocytes to egress from lymph nodes, reducing the number of lymphocytes in peripheral blood',
              codigo: '43679-0'
            }
          },
          {
            t: 'La esfingosina cinasa metaboliza el fingolimod al metabolito activo, el fosfato de fingolimod.',
            ref: {
              f: 'dailymed-fingolimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Fingolimod is metabolized by sphingosine kinase to the active metabolite, fingolimod-phosphate',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La biotransformación en humanos sigue tres vías principales: fosforilación estereoselectiva reversible al fosfato de fingolimod activo, oxidación catalizada sobre todo por la CYP4F2 con degradación posterior a metabolitos inactivos, y formación de análogos de ceramida inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La biotransformación en humanos sigue tres vías principales: fosforilación estereoselectiva reversible al fosfato de fingolimod activo, oxidación catalizada sobre todo por la CYP4F2 con degradación posterior a metabolitos inactivos, y formación de análogos de ceramida inactivos.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The biotransformation of fingolimod in humans occurs by 3 main pathways',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una vía es la fosforilación estereoselectiva reversible al enantiómero (S) del fosfato de fingolimod, farmacológicamente activo.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'by reversible stereoselective phosphorylation to the pharmacologically active ( S )-enantiomer of fingolimod-phosphate',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Fosfato de fingolimod',
          actividad: 'activo',
          nota: 'Metabolito farmacológicamente activo.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'by reversible stereoselective phosphorylation to the pharmacologically active ( S )-enantiomer of fingolimod-phosphate',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Ácido carboxílico M3 y metabolitos de ceramida M29 y M30',
          actividad: 'inactivo',
          nota: 'Metabolitos inactivos de la sangre.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'inactive metabolites [M3 carboxylic acid metabolite (8.3%), M29 ceramide metabolite (8.9%), and M30 ceramide metabolite (7.3%)]',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la administración oral, alrededor del 81 % de la dosis se excreta lentamente por la orina como metabolitos inactivos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la administración oral, alrededor del 81 % de la dosis se excreta lentamente por la orina como metabolitos inactivos.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, about 81% of the dose is slowly excreted in the urine as inactive metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento sanguíneo es de 6,3 ± 2,3 L/h y la semivida terminal aparente media es de 6 a 9 días.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Fingolimod blood clearance is 6.3 ± 2.3 L/h, and the average apparent terminal half-life (t 1/2 ) is 6 to 9 days',
            codigo: '43682-4'
          }
        },
        {
          t: 'El fingolimod y el fosfato de fingolimod no se excretan intactos por la orina, pero son los componentes principales de las heces, con menos del 2,5 % de la dosis cada uno.',
          ref: {
            f: 'dailymed-fingolimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Fingolimod and fingolimod-phosphate are not excreted intact in urine but are the major components in the feces with amounts of each representing less than 2.5% of the dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '12-16',
      unidad: 'h',
      analito: 'fingolimod',
      ref: { f: 'dailymed-fingolimod', sec: '12.3 · Farmacocinética', cita: 'The T max of fingolimod is 12 to 16 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta aparente',
      valor: '93',
      unidad: '%',
      analito: 'fingolimod',
      ref: { f: 'dailymed-fingolimod', sec: '12.3 · Farmacocinética', cita: 'The apparent absolute oral bioavailability is 93%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99,7',
      unidad: '%',
      analito: 'fingolimod y fosfato de fingolimod',
      ref: {
        f: 'dailymed-fingolimod',
        sec: '12.3 · Farmacocinética',
        cita: 'Fingolimod and fingolimod-phosphate are > 99.7% protein bound',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1.200 ± 260',
      unidad: 'L',
      analito: 'fingolimod',
      ref: { f: 'dailymed-fingolimod', sec: '12.3 · Farmacocinética', cita: 'with a volume of distribution of about 1200 ± 260 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente media',
      valor: '6-9',
      unidad: 'd',
      analito: 'fingolimod',
      ref: {
        f: 'dailymed-fingolimod',
        sec: '12.3 · Farmacocinética',
        cita: 'the average apparent terminal half-life (t 1/2 ) is 6 to 9 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina como metabolitos inactivos',
      valor: '81 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos inactivos',
      ref: {
        f: 'dailymed-fingolimod',
        sec: '12.3 · Farmacocinética',
        cita: 'about 81% of the dose is slowly excreted in the urine as inactive metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fingolimod', 'cc9e1c8c-0e2b-44e2-878b-27057f786be9', 'GILENYA (FINGOLIMOD HCL) CAPSULE', 'Gilenya', '40', '2026-07-24', '2026-11-15'),
    rengPubchem(107970, 'fingolimod', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
