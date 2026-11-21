import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nifurtimox',
    nombre: 'Nifurtimox',
    clase: 'Antiprotozoario nitrofurano (tripanocida)',
    sinonimos: [ 'nifurtimox', 'Lampit' ],
    formula: 'C10H13N3O5S',
    masaMolar: 287.29,
    smiles: 'CC1CS(=O)(=O)CCN1/N=C/C2=CC=C(O2)[N+](=O)[O-]',
    inchikey: 'ARFHIAQFJWUCFH-IZZDOVSWSA-N',
    cid: 6842999,
    iupac: '(E)-N-(3-methyl-1,1-dioxo-1,4-thiazinan-4-yl)-1-(5-nitrofuran-2-yl)methanimine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'nifurtimox-oral',
      producto: 'LAMPIT · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '30 mg o 120 mg por comprimido, según la etiqueta',
      excipientes: [ 'dibasic calcium phosphate dihydrate', 'magnesium stearate', 'starch, corn', 'silicon dioxide', 'sodium lauryl sulfate' ],
      usos: {
        t: 'Tratamiento de la enfermedad de Chagas por Trypanosoma cruzi en menores de 18 años de al menos 2,5 kg.',
        ref: {
          f: 'dailymed-nifurtimox',
          sec: '1 · Indicaciones',
          cita: 'LAMPIT is indicated in pediatric patients (birth to less than 18 years of age and weighing at least 2.5 kg) for the treatment of Chagas disease (American Trypanosomiasis) caused by Trypanosoma cruzi',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nifurtimox',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; se recomienda prueba de embarazo y anticoncepción eficaz.',
          organos: [],
          ref: { f: 'dailymed-nifurtimox', sec: '5 · Advertencias y precauciones', cita: 'Embryo-Fetal Toxicity: May cause fetal harm', codigo: '43685-7' }
        },
        {
          titulo: 'Empeoramiento neurológico y psiquiátrico',
          texto: 'Con antecedentes de lesión cerebral, convulsiones o enfermedad psiquiátrica pueden empeorar; usar bajo estrecha supervisión.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '5 · Advertencias y precauciones',
            cita: 'Patients with a history of brain injury, seizures, psychiatric disease, serious behavioral alterations may experience worsening of their conditions when receiving LAMPIT',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipersensibilidad',
          texto: 'Se han notificado hipotensión, angioedema, disnea, prurito, exantema u otras reacciones cutáneas graves.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions including hypotension, angioedema, dyspnea, pruritus, rash or other severe skin reactions have been reported with the use of nifurtimox',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): vómitos, dolor abdominal, cefalea, disminución del apetito, náuseas, fiebre y exantema.',
          '34084-4',
          'The most frequently reported adverse reactions (≥5%) are vomiting, abdominal pain, headache, decreased appetite, nausea, pyrexia, and rash'
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
    contiene: 'Comprimido recubierto con película: 30 mg o 120 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la enfermedad de Chagas por Trypanosoma cruzi en menores de 18 años de al menos 2,5 kg.',
    actua: 'No se conoce del todo: nitrorreductasas lo activan a intermediarios tóxicos o especies reactivas de oxígeno que dañan el ADN y matan las formas intra y extracelulares de T. cruzi.',
    recorrido: 'Con alimentos la mediana del tmax es de 4 horas; una comida grasa aumenta la Cmax un 68 % y el AUC un 71 %. Con alimentos o en ayunas, alrededor del 44 % y el 27 % de la dosis se recuperó en la orina, sobre todo como metabolitos; la eliminación biliar y fecal no se ha estudiado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado: se disgrega en el tubo digestivo; puede tomarse entero o disuelto.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado: se disgrega en el tubo digestivo; puede tomarse entero o disuelto.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '3 · Formas y concentraciones',
            cita: '30 mg, yellow, round, biconvex tablets, functionally scored',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con alimentos',
      ocurre: 'Con alimentos la mediana del tmax es de 4 horas; una comida grasa aumenta la Cmax un 68 % y el AUC un 71 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con alimentos la mediana del tmax es de 4 horas; una comida grasa aumenta la Cmax un 68 % y el AUC un 71 %.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to reach maximum concentration (T max ) of nifurtimox under fed conditions was 4 hours (range: 2 to 8 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó la Cmax un 68 % y el AUC un 71 % frente al ayuno.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'nifurtimox C max increased 68%, AUC increased 71%, and T max increased by 1 hour with a high-fat meal',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con Chagas',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Atraviesa la barrera hematoencefálica y la placentaria; la unión a proteínas plasmáticas es del 42 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Atraviesa la barrera hematoencefálica y la placentaria; la unión a proteínas plasmáticas es del 42 %.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'Nifurtimox passes the blood brain barrier as well as the placental barrier',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas plasmáticas es del 42 %.',
          ref: { f: 'dailymed-nifurtimox', sec: '12.3 · Farmacocinética', cita: 'The plasma proteins binding of nifurtimox is 42%', codigo: '43682-4' },
          poblacion: 'sangre'
        }
      ],
      accion: {
        diana: 'Nitrorreductasas de T. cruzi',
        efecto: 'No se conoce del todo: nitrorreductasas lo activan a intermediarios tóxicos o especies reactivas de oxígeno que dañan el ADN y matan las formas intra y extracelulares de T. cruzi.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'No se conoce del todo: nitrorreductasas lo activan a intermediarios tóxicos o especies reactivas de oxígeno que dañan el ADN y matan las formas intra y extracelulares de T. cruzi.',
            ref: {
              f: 'dailymed-nifurtimox',
              sec: '12.1 · Mecanismo de acción',
              cita: 'nifurtimox is metabolized/activated, by Type I (oxygen insensitive) and Type II (oxygen sensitive) nitoreductases (NTR) leading to production of toxic intermediate metabolites and/or reactive oxygen species',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por nitrorreductasas; sus dos metabolitos principales (M-4 y M-6) son inactivos y no es sustrato de las CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por nitrorreductasas; sus dos metabolitos principales (M-4 y M-6) son inactivos y no es sustrato de las CYP.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism of nifurtimox is primarily mediated via nitroreductases',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M-4 y M-6',
          actividad: 'inactivo',
          nota: 'Metabolitos principales inactivos; semividas de unas 28 y 10 horas.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'Exploratory investigations identified two major pharmacologically inactive metabolites (M-4, M-6)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con alimentos o en ayunas, alrededor del 44 % y el 27 % de la dosis se recuperó en la orina, sobre todo como metabolitos; la eliminación biliar y fecal no se ha estudiado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con alimentos o en ayunas, alrededor del 44 % y el 27 % de la dosis se recuperó en la orina, sobre todo como metabolitos; la eliminación biliar y fecal no se ha estudiado.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 44% and 27% of the dose was recovered in urine mainly as metabolites, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación osciló entre 2,4 y 3,6 horas.',
          ref: {
            f: 'dailymed-nifurtimox',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (%CV) estimates for elimination half-life of nifurtimox ranged between 2.4–3.6 hours (12–37%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax con alimentos',
      valor: '4',
      unidad: 'h',
      analito: 'nifurtimox',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-nifurtimox',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to reach maximum concentration (T max ) of nifurtimox under fed conditions was 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '42',
      unidad: '%',
      analito: 'nifurtimox',
      ref: { f: 'dailymed-nifurtimox', sec: '12.3 · Farmacocinética', cita: 'The plasma proteins binding of nifurtimox is 42%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2,4-3,6',
      unidad: 'h',
      analito: 'nifurtimox',
      ref: {
        f: 'dailymed-nifurtimox',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-life of nifurtimox ranged between 2.4–3.6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina con alimentos',
      valor: '44 (aprox.)',
      unidad: '% de la dosis',
      analito: 'nifurtimox y metabolitos',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-nifurtimox',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 44% and 27% of the dose was recovered in urine mainly as metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nifurtimox', '90d09714-a8b1-4696-8ada-f99dc54d0721', 'LAMPIT (NIFURTIMOX) TABLET, FILM COATED', 'LAMPIT', '9', '2026-03-05', '2026-11-19'),
    rengPubchem(6842999, 'nifurtimox', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
