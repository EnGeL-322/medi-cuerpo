import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sulindaco',
    nombre: 'Sulindaco',
    clase: 'Antiinflamatorio no esteroideo (derivado del indeno; su actividad reside en el metabolito sulfuro)',
    sinonimos: [ 'sulindac' ],
    formula: 'C20H17FO3S',
    masaMolar: 356.4,
    smiles: 'CC\\1=C(C2=C(/C1=C\\C3=CC=C(C=C3)S(=O)C)C=CC(=C2)F)CC(=O)O',
    inchikey: 'MLKXDPUZXIRXEP-MFOYZWKCSA-N',
    cid: 1548887,
    iupac: '2-[(3Z)-6-fluoro-2-methyl-3-[(4-methylsulfinylphenyl)methylidene]inden-1-yl]acetic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'sulindaco-oral',
      producto: 'SULINDAC · comprimido',
      titular: 'EPIC PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [ 'sodium starch glycolate type a potato', 'magnesium stearate', 'microcrystalline cellulose', 'povidone k30' ],
      usos: {
        t: 'Alivio, en uso agudo o prolongado, de los signos y síntomas de artrosis, artritis reumatoide, espondilitis anquilosante, hombro doloroso agudo (bursitis subacromial o tendinitis del supraespinoso) y artritis gotosa aguda.',
        ref: {
          f: 'dailymed-sulindaco',
          sec: '1 · Indicaciones',
          cita: 'relief of signs and symptoms of the following: 1. Osteoarthritis 2. Rheumatoid arthritis** 3. Ankylosing spondylitis 4. Acute painful shoulder (Acute subacromial bursitis/supraspinatus tendinitis) 5. Acute gouty arthritis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sulindaco',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-sulindaco',
            sec: 'Advertencia destacada',
            cita: 'Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Riesgo gastrointestinal',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-sulindaco',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Cirugía de derivación coronaria',
          texto: 'Está contraindicado en el contexto de la cirugía de derivación arterial coronaria (CABG).',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-sulindaco',
            sec: 'Advertencia destacada',
            cita: 'Sulindac tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones más frecuentes son digestivas: dolor gastrointestinal (10 %), dispepsia, náuseas con o sin vómitos, diarrea, estreñimiento, flatulencia, anorexia y calambres gastrointestinales.',
          '34084-4',
          'these include gastrointestinal pain (10%), dyspepsia***, nausea*** with or without vomiting, diarrhea***, constipation***, flatulence, anorexia and gastrointestinal cramps'
        ],
        [
          'Con una frecuencia inferior al 1 % se han notificado úlcera péptica y hemorragia digestiva.',
          '34084-4',
          'Peptic ulcer and gastrointestinal bleeding have been reported'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 150 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio, en uso agudo o prolongado, de los signos y síntomas de artrosis, artritis reumatoide, espondilitis anquilosante, hombro doloroso agudo (bursitis subacromial o tendinitis del supraespinoso) y artritis gotosa aguda.',
    actua: 'Como en otros AINE, su mecanismo no se conoce del todo, pero puede estar relacionado con la inhibición de la prostaglandina sintetasa.',
    recorrido: 'La absorción con los comprimidos es de una magnitud parecida a la de una solución de sulindaco. Alrededor del 50 % de la dosis se excreta en la orina, sobre todo como conjugado de la sulfona, y alrededor del 25 % aparece en las heces, sobre todo como sulfona y sulfuro.'
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
            f: 'dailymed-sulindaco',
            sec: '11 · Descripción',
            cita: 'Sulindac is available in 150 and 200 mg tablets for oral administration',
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
      ocurre: 'La absorción con los comprimidos es de una magnitud parecida a la de una solución de sulindaco.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción con los comprimidos es de una magnitud parecida a la de una solución de sulindaco.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'The extent of sulindac absorption from Sulindac Tablets USP is similar as compared to sulindac solution',
            codigo: '43682-4'
          }
        },
        {
          t: 'No hay información sobre el efecto de los alimentos en la absorción.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'There is no information regarding food effect on sulindac absorption',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El sulindaco y sus metabolitos sulfona y sulfuro se unen en un 93,1 %, 95,4 % y 97,9 % a las proteínas del plasma, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El sulindaco y sus metabolitos sulfona y sulfuro se unen en un 93,1 %, 95,4 % y 97,9 % a las proteínas del plasma, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Sulindac, and its sulfone and sulfide metabolites, are 93.1, 95.4, and 97.9% bound to plasma proteins, predominantly to albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Atraviesa las barreras hematoencefálica y placentaria; en el cerebro las concentraciones no superaron el 4 % de las del plasma.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Sulindac penetrates the blood-brain and placental barriers. Concentrations in brain did not exceed 4% of those in plasma',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Prostaglandina sintetasa',
        efecto: 'Como en otros AINE, su mecanismo no se conoce del todo, pero puede estar relacionado con la inhibición de la prostaglandina sintetasa.',
        lugar: [],
        datos: [
          {
            t: 'Como en otros AINE, su mecanismo no se conoce del todo, pero puede estar relacionado con la inhibición de la prostaglandina sintetasa.',
            ref: {
              f: 'dailymed-sulindaco',
              sec: '12.2 · Farmacodinámica',
              cita: 'The mechanism of action, like that of other NSAIDs, is not completely understood but may be related to prostaglandin synthetase inhibition',
              codigo: '43681-6'
            }
          },
          {
            t: 'Las pruebas bioquímicas y farmacológicas indican que su actividad reside en el metabolito sulfuro.',
            ref: {
              f: 'dailymed-sulindaco',
              sec: '12 · Farmacología clínica',
              cita: 'Biochemical as well as pharmacological evidence indicates that the activity of sulindac resides in its sulfide metabolite',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su grupo sulfóxido sufre dos biotransformaciones principales: oxidación a la sulfona inactiva y reducción, reversible, al sulfuro farmacológicamente activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su grupo sulfóxido sufre dos biotransformaciones principales: oxidación a la sulfona inactiva y reducción, reversible, al sulfuro farmacológicamente activo.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Sulindac undergoes two major biotransformations of its sulfoxide moiety: oxidation to the inactive sulfone and reduction to the pharmacologically active sulfide',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los metabolitos circulan sin conjugar en el plasma y aparecen sobre todo como conjugados glucurónidos en la orina y la bilis humanas.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'These metabolites are present as unchanged compounds in plasma and principally as glucuronide conjugates in human urine and bile',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolismo hepático es una vía de eliminación importante.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'since hepatic metabolism is an important elimination pathway',
            codigo: '43682-4'
          }
        },
        {
          t: 'En el ser humano, el sulindaco y su sulfona recirculan por vía enterohepática más que el sulfuro activo.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Studies in man have also demonstrated that recirculation of the parent drug sulindac and its sulfone metabolite is more extensive than that of the active sulfide metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Sulfuro de sulindaco',
          actividad: 'activo',
          nota: 'Metabolito activo, formado por reducción reversible; su semivida efectiva media es de 16,4 horas.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Biochemical as well as pharmacological evidence indicates that the activity of sulindac resides in its sulfide metabolite',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Sulfona de sulindaco',
          actividad: 'inactivo',
          nota: 'Metabolito inactivo; su conjugado es lo principal que sale por la orina.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'oxidation to the inactive sulfone and reduction to the pharmacologically active sulfide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 50 % de la dosis se excreta en la orina, sobre todo como conjugado de la sulfona, y alrededor del 25 % aparece en las heces, sobre todo como sulfona y sulfuro.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 50 % de la dosis se excreta en la orina, sobre todo como conjugado de la sulfona, y alrededor del 25 % aparece en las heces, sobre todo como sulfona y sulfuro.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 50% of the administered dose of sulindac is excreted in the urine with the conjugated sulfone metabolite accounting for the major portion',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 25 % se encuentra en las heces, sobre todo como metabolitos sulfona y sulfuro.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 25% is found in the feces, primarily as the sulfone and sulfide metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de 7,8 horas para el sulindaco y de 16,4 horas para su sulfuro activo.',
          ref: {
            f: 'dailymed-sulindaco',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean effective half life (T 1/2 ) is 7.8 and 16.4 hours, respectively, for sulindac and its active sulfide metabolite',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93,1',
      unidad: '%',
      analito: 'sulindaco',
      ref: {
        f: 'dailymed-sulindaco',
        sec: '12.3 · Farmacocinética',
        cita: 'Sulindac, and its sulfone and sulfide metabolites, are 93.1, 95.4, and 97.9% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media del sulindaco',
      valor: '7,8',
      unidad: 'h',
      analito: 'sulindaco',
      ref: {
        f: 'dailymed-sulindaco',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean effective half life (T 1/2 ) is 7.8 and 16.4 hours, respectively, for sulindac and its active sulfide metabolite',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media del sulfuro activo',
      valor: '16,4',
      unidad: 'h',
      analito: 'sulfuro de sulindaco',
      ref: {
        f: 'dailymed-sulindaco',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean effective half life (T 1/2 ) is 7.8 and 16.4 hours, respectively, for sulindac and its active sulfide metabolite',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'sulindaco y metabolitos',
      ref: {
        f: 'dailymed-sulindaco',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 50% of the administered dose of sulindac is excreted in the urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis encontrada en las heces',
      valor: '25 (aprox.)',
      unidad: '% de la dosis',
      analito: 'sulindaco y metabolitos',
      ref: { f: 'dailymed-sulindaco', sec: '12.3 · Farmacocinética', cita: 'Approximately 25% is found in the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sulindaco', '96c73bd2-4577-487d-a642-bd8f91e94c3a', 'SULINDAC TABLET', 'SULINDAC', '19', '2024-12-23', '2026-11-18'),
    rengPubchem(1548887, 'sulindac', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
