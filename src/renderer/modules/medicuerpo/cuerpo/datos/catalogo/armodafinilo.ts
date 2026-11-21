import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'armodafinilo',
    nombre: 'Armodafinilo',
    clase: 'Promotor de la vigilia (R-enantiómero del modafinilo)',
    sinonimos: [ 'armodafinil', 'Nuvigil' ],
    formula: 'C15H15NO2S',
    masaMolar: 273.4,
    smiles: 'C1=CC=C(C=C1)C(C2=CC=CC=C2)[S@](=O)CC(=O)N',
    inchikey: 'YFGHCGITMMYXAQ-LJQANCHMSA-N',
    cid: 9690109,
    iupac: '2-[(R)-benzhydrylsulfinyl]acetamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'armodafinilo-oral',
      producto: 'Nuvigil · comprimido',
      titular: 'APOTEX CORP.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 150 mg, 200 mg o 250 mg por comprimido, según la etiqueta',
      excipientes: [ 'croscarmellose sodium', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'povidone k30', 'starch, corn' ],
      usos: {
        t: 'Mejorar la vigilia en adultos con somnolencia excesiva asociada a apnea obstructiva del sueño, narcolepsia o trastorno del trabajo por turnos.',
        ref: {
          f: 'dailymed-armodafinilo',
          sec: '1 · Indicaciones',
          cita: 'NUVIGIL is indicated to improve wakefulness in adult patients with excessive sleepiness associated with obstructive sleep apnea (OSA), narcolepsy, or shift work disorder (SWD)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-armodafinilo',
      advertencias: [
        {
          titulo: 'Erupción cutánea grave',
          texto: 'Se han notificado erupciones graves que requirieron hospitalización y suspensión del tratamiento, con armodafinilo o modafinilo.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious rash requiring hospitalization and discontinuation of treatment has been reported in association with the use of NUVIGIL (armodafinil) or modafinil',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Somnolencia persistente',
          texto: 'Hay que evaluar con frecuencia el grado de somnolencia de los pacientes.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'Persistent Sleepiness: assess patients frequently for degree of sleepiness',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): cefalea, náuseas, mareo e insomnio.',
          '34084-4',
          'Most common adverse reactions (≥5%): headache, nausea, dizziness, and insomnia'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figuran las reacciones dermatológicas graves.',
          '34084-4',
          'Serious Dermatologic Reactions [see Warnings and Precautions ( 5.1 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg, 150 mg, 200 mg o 250 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mejorar la vigilia en adultos con somnolencia excesiva asociada a apnea obstructiva del sueño, narcolepsia o trastorno del trabajo por turnos.',
    actua: 'El mecanismo con el que promueve la vigilia se desconoce; sus propiedades farmacológicas son similares a las del modafinilo en los estudios en animales y in vitro.',
    recorrido: 'Se absorbe fácilmente tras la administración oral; las concentraciones máximas se alcanzan a las 2 horas aproximadamente en ayunas. Tras el pico, el descenso plasmático es aproximadamente monoexponencial, con una semivida terminal aparente de unas 15 horas.'
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
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '11 · Descripción',
            cita: 'NUVIGIL (armodafinil) is a wakefulness-promoting agent for oral administration',
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
      ocurre: 'Se absorbe fácilmente tras la administración oral; las concentraciones máximas se alcanzan a las 2 horas aproximadamente en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe fácilmente tras la administración oral; las concentraciones máximas se alcanzan a las 2 horas aproximadamente en ayunas.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'NUVIGIL is readily absorbed after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan a las 2 horas aproximadamente en ayunas.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations are attained at approximately 2 hours in the fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se determinó la biodisponibilidad oral absoluta porque la insolubilidad en agua impidió la administración intravenosa.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability was not determined due to the aqueous insolubility of armodafinil',
            codigo: '43682-4'
          }
        },
        {
          t: 'El efecto de la comida sobre la biodisponibilidad global es mínimo, pero el tmax puede retrasarse de 2 a 4 horas.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'time to reach peak concentration (t max ) may be delayed by approximately 2-4 hours in the fed state',
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
      ocurre: 'Tiene un volumen de distribución aparente de unos 42 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tiene un volumen de distribución aparente de unos 42 L.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'NUVIGIL has an apparent volume of distribution of approximately 42 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'No hay datos propios de unión a proteínas; el modafinilo se une de forma moderada (alrededor del 60 %), sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'However, modafinil is moderately bound to plasma protein (approximately 60%), mainly to albumin',
            codigo: '43682-4'
          },
          poblacion: 'datos del modafinilo'
        }
      ],
      accion: {
        diana: null,
        efecto: 'El mecanismo con el que promueve la vigilia se desconoce; sus propiedades farmacológicas son similares a las del modafinilo en los estudios en animales y in vitro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'El mecanismo con el que promueve la vigilia se desconoce; sus propiedades farmacológicas son similares a las del modafinilo en los estudios en animales y in vitro.',
            ref: {
              f: 'dailymed-armodafinilo',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism(s) through which armodafinil promotes wakefulness is unknown',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre desamidación hidrolítica, S-oxidación e hidroxilación del anillo aromático, con conjugación posterior con glucurónido; la hidrólisis de la amida es la vía más importante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre desamidación hidrolítica, S-oxidación e hidroxilación del anillo aromático, con conjugación posterior con glucurónido; la hidrólisis de la amida es la vía más importante.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'armodafinil undergoes hydrolytic deamidation, S-oxidation, and aromatic ring hydroxylation, with subsequent glucuronide conjugation of the hydroxylated products',
            codigo: '43682-4'
          }
        },
        {
          t: 'La formación de sulfona por la CYP3A4/5 es la siguiente vía en importancia.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Amide hydrolysis is the single most prominent metabolic pathway, with sulfone formation by cytochrome P450 (CYP) 3A4/5 being next in importance',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido R-modafinílico y modafinilo sulfona',
          actividad: 'desconocida',
          nota: 'Los dos únicos metabolitos con concentraciones apreciables en plasma.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Only two metabolites reach appreciable concentrations in plasma (i.e., R-modafinil acid and modafinil sulfone)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras el pico, el descenso plasmático es aproximadamente monoexponencial, con una semivida terminal aparente de unas 15 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras el pico, el descenso plasmático es aproximadamente monoexponencial, con una semivida terminal aparente de unas 15 horas.',
          ref: { f: 'dailymed-armodafinilo', sec: '12.3 · Farmacocinética', cita: 'The apparent terminal t ½ is approximately 15 hours', codigo: '43682-4' }
        },
        {
          t: 'La etiqueta no tiene datos propios de excreción; el modafinilo se elimina sobre todo por metabolismo en el hígado, con menos del 10 % del compuesto original en la orina.',
          ref: {
            f: 'dailymed-armodafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'However, modafinil is mainly eliminated via metabolism, predominantly in the liver, with less than 10% of the parent compound excreted in the urine',
            codigo: '43682-4'
          },
          poblacion: 'datos del modafinilo'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'armodafinilo',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-armodafinilo',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations are attained at approximately 2 hours in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '42 (aprox.)',
      unidad: 'L',
      analito: 'armodafinilo',
      ref: {
        f: 'dailymed-armodafinilo',
        sec: '12.3 · Farmacocinética',
        cita: 'NUVIGIL has an apparent volume of distribution of approximately 42 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '15 (aprox.)',
      unidad: 'h',
      analito: 'armodafinilo',
      ref: { f: 'dailymed-armodafinilo', sec: '12.3 · Farmacocinética', cita: 'The apparent terminal t ½ is approximately 15 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral',
      valor: '33 (aprox.)',
      unidad: 'mL/min',
      analito: 'armodafinilo',
      ref: {
        f: 'dailymed-armodafinilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral clearance of NUVIGIL is approximately 33 mL/min',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-armodafinilo', 'a69631d0-1263-769e-b232-4ab9160e0fa3', 'NUVIGIL (ARMODAFINIL) TABLET', 'Nuvigil', '3', '2026-09-15', '2026-11-15'),
    rengPubchem(9690109, 'armodafinil', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
