import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oxaprozina',
    nombre: 'Oxaprozina',
    clase: 'Antiinflamatorio no esteroideo (inhibidor de COX-1 y COX-2)',
    sinonimos: [ 'oxaprozin', 'Daypro' ],
    formula: 'C18H15NO3',
    masaMolar: 293.3,
    smiles: 'C1=CC=C(C=C1)C2=C(OC(=N2)CCC(=O)O)C3=CC=CC=C3',
    inchikey: 'OFPXSFXSNFPTHF-UHFFFAOYSA-N',
    cid: 4614,
    iupac: '3-(4,5-diphenyl-1,3-oxazol-2-yl)propanoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'oxaprozina-oral',
      producto: 'Oxaprozin · comprimido recubierto con película',
      titular: "DR. REDDY'S LABORATORIES LIMITED",
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '600 mg por comprimido, según la etiqueta',
      excipientes: [
        'starch, corn',
        'd&c yellow no. 10',
        'fd&c yellow no. 6',
        'hypromelloses',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polydextrose',
        'polyethylene glycol, unspecified',
        'sodium starch glycolate type a potato',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Alivio de los signos y síntomas de la artrosis, la artritis reumatoide y la artritis reumatoide juvenil.',
        ref: {
          f: 'dailymed-oxaprozina',
          sec: '1 · Indicaciones',
          cita: 'Relief of signs and symptoms of Osteoarthritis (OA) (1) Relief of signs and symptoms of Rheumatoid Arthritis (RA) (1) Relief of signs and symptoms of Juvenile Rheumatoid Arthritis (JRA)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oxaprozina',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-oxaprozina',
            sec: 'Advertencia destacada',
            cita: 'Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Cirugía de derivación coronaria',
          texto: 'Está contraindicada en el contexto de la cirugía de derivación arterial coronaria (CABG).',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-oxaprozina',
            sec: 'Advertencia destacada',
            cita: 'Oxaprozin is contraindicated in the setting of coronary artery bypass graft (CABG) surgery',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hay que suspenderla si las pruebas hepáticas siguen alteradas o empeoran, o si aparecen signos de enfermedad hepática.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue if abnormal liver tests persist or worsen or if clinical signs and symptoms of liver disease develop',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad renal',
          texto: 'Vigilar la función renal en la insuficiencia renal o hepática, la insuficiencia cardíaca, la deshidratación o la hipovolemia.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Renal Toxicity: Monitor renal function in patients with renal or hepatic impairment, heart failure, dehydration, or hypovolemia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 3 %): estreñimiento, diarrea, dispepsia, náuseas y erupción.',
          '34084-4',
          'Most common adverse reactions (>3 %) are: constipation, diarrhea, dyspepsia, nausea, rash'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran los acontecimientos trombóticos cardiovasculares, la hemorragia, úlcera y perforación digestivas y la hepatotoxicidad.',
          '34084-4',
          'Cardiovascular Thrombotic Events [ see Warnings and Precautions (5.1) ] GI Bleeding, Ulceration and Perforation [ see Warnings and Precautions (5.2) ] Hepatotoxicity'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 600 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio de los signos y síntomas de la artrosis, la artritis reumatoide y la artritis reumatoide juvenil.',
    actua: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
    recorrido: 'Se absorbe en un 95 % tras la toma oral; los alimentos pueden reducir la velocidad de absorción, pero no su magnitud. Alrededor del 5 % de la dosis se excreta sin cambios en la orina; el 65 % sale por la orina y el 35 % por las heces como metabolitos.'
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
            f: 'dailymed-oxaprozina',
            sec: '3 · Formas y concentraciones',
            cita: 'Oxaprozin tablets USP, 600 mg are yellow, oval shaped, scored, film-coated tablets',
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
      ocurre: 'Se absorbe en un 95 % tras la toma oral; los alimentos pueden reducir la velocidad de absorción, pero no su magnitud.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe en un 95 % tras la toma oral; los alimentos pueden reducir la velocidad de absorción, pero no su magnitud.',
          ref: { f: 'dailymed-oxaprozina', sec: '12.3 · Farmacocinética', cita: 'Oxaprozin is 95% absorbed after oral administration', codigo: '43682-4' }
        },
        {
          t: 'Los alimentos pueden reducir la velocidad de absorción, pero no su magnitud.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Food may reduce the rate of absorption of oxaprozin, but the extent of absorption is unchanged',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'articulaciones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99 % a las proteínas del plasma, sobre todo a la albúmina, con una unión saturable; penetra en el tejido sinovial de la artritis reumatoide con concentraciones 2 y 3 veces mayores que en el plasma y el líquido sinovial.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99 % a las proteínas del plasma, sobre todo a la albúmina, con una unión saturable; penetra en el tejido sinovial de la artritis reumatoide con concentraciones 2 y 3 veces mayores que en el plasma y el líquido sinovial.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxaprozin is 99% bound to plasma proteins, primarily to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'En la artritis reumatoide penetra en los tejidos sinoviales, con concentraciones 2 y 3 veces mayores que en el plasma y el líquido sinovial.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxaprozin penetrates into synovial tissues of rheumatoid arthritis patients with oxaprozin concentrations 2-fold and 3-fold greater than in plasma and synovial fluid, respectively',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con artritis reumatoide'
        },
        {
          t: 'El volumen de distribución aparente del total de oxaprozina es de unos 11 a 17 L/70 kg.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (Vd/F) of total oxaprozin is approximately 11 to 17 L/70 kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa (COX-1 y COX-2)',
        efecto: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
        lugar: [ 'tejidos' ],
        datos: [
          {
            t: 'Como en otros AINE, su mecanismo no se conoce del todo, pero incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2); su efecto podría deberse a la disminución de prostaglandinas en los tejidos periféricos.',
            ref: {
              f: 'dailymed-oxaprozina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its mode of action may be due to a decrease of prostaglandins in peripheral tissues',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su mecanismo incluye la inhibición de la ciclooxigenasa (COX-1 y COX-2).',
            ref: {
              f: 'dailymed-oxaprozina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of oxaprozin, like that of other NSAIDs, is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado, por oxidación microsomal (65 %) y conjugación con ácido glucurónico (35 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado, por oxidación microsomal (65 %) y conjugación con ácido glucurónico (35 %).',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxaprozin is primarily metabolized in the liver, by both microsomal oxidation (65%) and glucuronic acid conjugation (35%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónidos éster y éter',
          actividad: 'inactivo',
          nota: 'Metabolitos conjugados principales, sin actividad.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major ester and ether glucuronide conjugated metabolites have been evaluated along with oxaprozin in receptor binding studies and in vivo animal models and have demonstrated no activity',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Metabolitos fenólicos activos',
          actividad: 'activo',
          nota: 'Se forman en pequeña cantidad (menos del 5 %) y su contribución a la actividad es limitada.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'A small amount (<5%) of active phenolic metabolites are produced, but the contribution to overall activity is limited',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 5 % de la dosis se excreta sin cambios en la orina; el 65 % sale por la orina y el 35 % por las heces como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 5 % de la dosis se excreta sin cambios en la orina; el 65 % sale por la orina y el 35 % por las heces como metabolitos.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Sixty-five percent (65%) of the dose is excreted in the urine and 35% in the feces as metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 5 % de la dosis se excreta sin cambios en la orina.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 5% of the oxaprozin dose is excreted unchanged in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con dosis repetidas, la semivida de acumulación es de unas 22 horas y la de eliminación alrededor del doble.',
          ref: {
            f: 'dailymed-oxaprozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Upon chronic dosing, the accumulation half-life is approximately 22 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '95',
      unidad: '%',
      analito: 'oxaprozina',
      ref: { f: 'dailymed-oxaprozina', sec: '12.3 · Farmacocinética', cita: 'Oxaprozin is 95% absorbed after oral administration', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99',
      unidad: '%',
      analito: 'oxaprozina',
      ref: { f: 'dailymed-oxaprozina', sec: '12.3 · Farmacocinética', cita: 'Oxaprozin is 99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (oxaprozina total)',
      valor: '11-17 (aprox.)',
      unidad: 'L',
      analito: 'oxaprozina total',
      condiciones: '70 kg de peso',
      ref: {
        f: 'dailymed-oxaprozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (Vd/F) of total oxaprozin is approximately 11 to 17 L/70 kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de acumulación con dosis repetidas',
      valor: '22 (aprox.)',
      unidad: 'h',
      analito: 'oxaprozina',
      condiciones: 'dosis repetidas',
      ref: {
        f: 'dailymed-oxaprozina',
        sec: '12.3 · Farmacocinética',
        cita: 'Upon chronic dosing, the accumulation half-life is approximately 22 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina como metabolitos',
      valor: '65',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      ref: {
        f: 'dailymed-oxaprozina',
        sec: '12.3 · Farmacocinética',
        cita: 'Sixty-five percent (65%) of the dose is excreted in the urine and 35% in the feces as metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oxaprozina', 'da457b34-ca08-60df-045b-1ae80d2f7e71', 'OXAPROZIN TABLET, FILM COATED', 'Oxaprozin', '11', '2026-03-27', '2026-11-19'),
    rengPubchem(4614, 'oxaprozin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
