import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acido-bempedoico',
    nombre: 'Ácido bempedoico',
    clase: 'Inhibidor de la ATP-citrato liasa (ACL), hipolipemiante',
    sinonimos: [ 'bempedoic acid', 'Nexletol' ],
    formula: 'C19H36O5',
    masaMolar: 344.5,
    smiles: 'CC(C)(CCCCCC(CCCCCC(C)(C)C(=O)O)O)C(=O)O',
    inchikey: 'HYHMLYSLQUKXKP-UHFFFAOYSA-N',
    cid: 10472693,
    iupac: '8-hydroxy-2,2,14,14-tetramethylpentadecanedioic acid',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'acido-bempedoico-oral',
      producto: 'Nexletol · comprimido recubierto con película',
      titular: 'ESPERION THERAPEUTICS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '180 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose 101',
        'lactose monohydrate',
        'hydroxypropyl cellulose, unspecified',
        'silicon dioxide',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc'
      ],
      usos: {
        t: 'Reducir el riesgo de acontecimientos cardiovasculares mayores (muerte cardiovascular, infarto de miocardio, ictus o revascularización coronaria) en adultos con riesgo elevado que no pueden tomar el tratamiento con estatinas recomendado.',
        ref: {
          f: 'dailymed-acido-bempedoico',
          sec: '1 · Indicaciones',
          cita: 'to reduce the risk of major adverse cardiovascular events (cardiovascular death, myocardial infarction, stroke, or coronary revascularization) in adults at increased risk for these events who are unable to take recommended statin therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acido-bempedoico',
      advertencias: [
        {
          titulo: 'Hiperuricemia',
          texto: 'Inhibe el transportador OAT2 de los túbulos renales y puede elevar el ácido úrico en la sangre; puede favorecer la gota.',
          organos: [ 'rinones', 'sangre' ],
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '5 · Advertencias y precauciones',
            cita: 'NEXLETOL inhibits renal tubular OAT2 and may increase blood uric acid levels',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Rotura de tendones',
          texto: 'Se han producido roturas de tendones; hay que suspenderlo al primer signo y evitarlo si hay antecedentes de trastornos o rotura de tendones.',
          organos: [],
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '5 · Advertencias y precauciones',
            cita: 'Tendon rupture has occurred. Discontinue NEXLETOL at the first sign of tendon rupture',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En los ensayos de hipercolesterolemia primaria (2 % o más y más que con placebo): infección respiratoria alta, espasmos musculares, hiperuricemia, dolor de espalda, dolor o molestias abdominales, bronquitis, dolor en las extremidades, anemia y elevación de enzimas hepáticas.',
          '34084-4',
          'Primary hypercholesterolemia trials (incidence ≥ 2% and more frequent than placebo) were upper respiratory tract infection, muscle spasms, hyperuricemia, back pain, abdominal pain or discomfort, bronchitis, pain in extremity, anemia, and elevated liver enzymes'
        ],
        [
          'En el ensayo de resultados cardiovasculares (2 % o más y 0,5 puntos por encima del placebo): hiperuricemia, deterioro renal, anemia, elevación de enzimas hepáticas, espasmos musculares, gota y colelitiasis.',
          '34084-4',
          'Cardiovascular outcomes trial (incidence ≥ 2% and 0.5% greater than placebo) were hyperuricemia, renal impairment, anemia, elevated liver enzymes, muscle spasms, gout, and cholelithiasis'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 180 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de acontecimientos cardiovasculares mayores (muerte cardiovascular, infarto de miocardio, ictus o revascularización coronaria) en adultos con riesgo elevado que no pueden tomar el tratamiento con estatinas recomendado.',
    actua: 'Inhibe la ATP-citrato liasa, una enzima situada antes de la HMG-CoA reductasa en la síntesis del colesterol; así reduce la síntesis de colesterol en el hígado y baja el colesterol LDL.',
    recorrido: 'Se absorbe con una mediana de tiempo hasta la concentración máxima de 3,5 horas con los comprimidos de 180 mg. Tras una dosis oral única de 240 mg, alrededor del 70 % de la dosis total (fármaco y metabolitos) se recuperó en la orina, sobre todo como glucurónido acilo, y alrededor del 30 % en las heces.'
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
            f: 'dailymed-acido-bempedoico',
            sec: '11 · Descripción',
            cita: 'Each film-coated tablet of NEXLETOL contains 180 mg of bempedoic acid',
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
      ocurre: 'Se absorbe con una mediana de tiempo hasta la concentración máxima de 3,5 horas con los comprimidos de 180 mg.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con una mediana de tiempo hasta la concentración máxima de 3,5 horas con los comprimidos de 180 mg.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'bempedoic acid is absorbed with a median time to maximum concentration of 3.5 hours when administered as NEXLETOL 180 mg tablets',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tomarlo con alimentos no modificó su biodisponibilidad oral.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Concomitant food administration had no effect on the oral bioavailability of bempedoic acid',
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
      ocurre: 'La unión a las proteínas del plasma es del 99,3 % para el ácido bempedoico, del 98,8 % para su glucurónido y del 99,2 % para el metabolito activo ESP15228; el volumen de distribución aparente es de 18 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es del 99,3 % para el ácido bempedoico, del 98,8 % para su glucurónido y del 99,2 % para el metabolito activo ESP15228; el volumen de distribución aparente es de 18 L.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of bempedoic acid, its glucuronide and its active metabolite, ESP15228, were 99.3%, 98.8% and 99.2%, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se reparte en las células de la sangre.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Bempedoic acid does not partition into blood cells',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ATP-citrato liasa (ACL)',
        efecto: 'Inhibe la ATP-citrato liasa, una enzima situada antes de la HMG-CoA reductasa en la síntesis del colesterol; así reduce la síntesis de colesterol en el hígado y baja el colesterol LDL.',
        lugar: [ 'higado', 'sangre' ],
        datos: [
          {
            t: 'Inhibe la ATP-citrato liasa, una enzima situada antes de la HMG-CoA reductasa en la síntesis del colesterol; así reduce la síntesis de colesterol en el hígado y baja el colesterol LDL.',
            ref: {
              f: 'dailymed-acido-bempedoico',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Bempedoic acid is an adenosine triphosphate-citrate lyase (ACL) inhibitor that lowers LDL-C by inhibition of cholesterol synthesis in the liver',
              codigo: '43679-0'
            }
          },
          {
            t: 'La inhibición de la enzima reduce la síntesis hepática de colesterol y baja el colesterol LDL de la sangre al aumentar los receptores de LDL.',
            ref: {
              f: 'dailymed-acido-bempedoico',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibition of ACL by ETC-1002-CoA results in decreased cholesterol synthesis in the liver and lowers LDL-C in blood via upregulation of low-density lipoprotein receptors',
              codigo: '43679-0'
            }
          },
          {
            t: 'Necesita activarse con coenzima A mediante la ACSVL1, una enzima que se expresa sobre todo en el hígado.',
            ref: {
              f: 'dailymed-acido-bempedoico',
              sec: '12.1 · Mecanismo de acción',
              cita: 'ACSVL1 is expressed primarily in the liver',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La vía principal de eliminación es el metabolismo a glucurónido acilo; además se convierte de forma reversible en el metabolito activo ESP15228, según la actividad aldo-ceto reductasa observada in vitro en hígado humano.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La vía principal de eliminación es el metabolismo a glucurónido acilo; además se convierte de forma reversible en el metabolito activo ESP15228, según la actividad aldo-ceto reductasa observada in vitro en hígado humano.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Bempedoic acid is also reversibly converted to an active metabolite (ESP15228) based on aldo-keto reductase activity observed in vitro from human liver',
            codigo: '43682-4'
          }
        },
        {
          t: 'El fármaco y el ESP15228 se convierten in vitro en conjugados glucurónidos inactivos por la UGT2B7.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Both compounds are converted to inactive glucuronide conjugates in vitro by UGT2B7',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'ESP15228',
          actividad: 'activo',
          nota: 'Metabolito activo; por su exposición, su potencia relativa y su farmacocinética, probablemente contribuye poco a la actividad clínica.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'ESP15228 likely made a minor contribution to the overall clinical activity of bempedoic acid',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Conjugados glucurónidos',
          actividad: 'inactivo',
          nota: 'Glucurónidos inactivos del fármaco y del ESP15228; el glucurónido acilo es la forma principal en la orina.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Both compounds are converted to inactive glucuronide conjugates in vitro by UGT2B7',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única de 240 mg, alrededor del 70 % de la dosis total (fármaco y metabolitos) se recuperó en la orina, sobre todo como glucurónido acilo, y alrededor del 30 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única de 240 mg, alrededor del 70 % de la dosis total (fármaco y metabolitos) se recuperó en la orina, sobre todo como glucurónido acilo, y alrededor del 30 % en las heces.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 70% of the total dose (bempedoic acid and its metabolites) was recovered in urine, primarily as the acyl glucuronide conjugate of bempedoic acid, and approximately 30% was recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Menos del 5 % de la dosis se excretó como ácido bempedoico inalterado en las heces y la orina juntas.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 5% of the administered dose was excreted as unchanged bempedoic acid in feces and urine combined',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media en estado estacionario fue de 21 ± 11 horas.',
          ref: {
            f: 'dailymed-acido-bempedoico',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean ± SD half-life for bempedoic acid in humans was 21 ± 11 hours at steady-state',
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
      valor: '3,5',
      unidad: 'h',
      analito: 'ácido bempedoico',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'bempedoic acid is absorbed with a median time to maximum concentration of 3.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (V/F)',
      valor: '18',
      unidad: 'L',
      analito: 'ácido bempedoico',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'The bempedoic acid apparent volume of distribution (V/F) was 18 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,3',
      unidad: '%',
      analito: 'ácido bempedoico',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of bempedoic acid, its glucuronide and its active metabolite, ESP15228, were 99.3%, 98.8% and 99.2%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '21 ± 11',
      unidad: 'h',
      analito: 'ácido bempedoico',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean ± SD half-life for bempedoic acid in humans was 21 ± 11 hours at steady-state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente (CL/F)',
      valor: '11,2',
      unidad: 'mL/min',
      analito: 'ácido bempedoico',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady-state clearance (CL/F) of bempedoic acid was 11.2 mL/min after once-daily dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis total recuperada en la orina',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ácido bempedoico y metabolitos',
      condiciones: 'dosis oral única de 240 mg',
      ref: {
        f: 'dailymed-acido-bempedoico',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 70% of the total dose (bempedoic acid and its metabolites) was recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acido-bempedoico', '88d06d89-a3da-40b4-b273-8f4f7d56c4c9', 'NEXLETOL (BEMPEDOIC ACID) TABLET, FILM COATED', 'Nexletol', '20', '2026-07-20', '2026-11-18'),
    rengPubchem(10472693, 'bempedoic acid', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
