import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oxicodona',
    nombre: 'Oxicodona',
    clase: 'Analgésico opioide (agonista mu)',
    sinonimos: [ 'oxycodone', 'Roxicodone' ],
    formula: 'C18H21NO4',
    masaMolar: 315.4,
    smiles: 'CN1CC[C@]23[C@@H]4C(=O)CC[C@]2([C@H]1CC5=C3C(=C(C=C5)OC)O4)O',
    inchikey: 'BRUQQQPBMZOVGD-XFKAJCMBSA-N',
    cid: 5284603,
    iupac: '(4R,4aS,7aR,12bS)-4a-hydroxy-9-methoxy-3-methyl-2,4,5,6,7a,13-hexahydro-1H-4,12-methanobenzofuro[3,2-e]isoquinolin-7-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'oxicodona-oral',
      producto: 'Roxicodone · comprimido',
      titular: 'SPECGX LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '15 mg o 30 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de oxicodona',
        ref: { f: 'dailymed-oxicodona', sec: '11 · Descripción', cita: 'oxycodone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'stearic acid',
        'd&c yellow no. 10',
        'fd&c blue no. 2',
        'sodium starch glycolate type a potato',
        'starch, corn',
        'lactose monohydrate',
        'water'
      ],
      usos: {
        t: 'Dolor lo bastante intenso como para necesitar un opioide y sin alternativas adecuadas.',
        ref: {
          f: 'dailymed-oxicodona',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of pain severe enough to require an opioid analgesic',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oxicodona',
      advertencias: [
        {
          titulo: 'Adicción, abuso y mal uso',
          texto: 'Expone a riesgos de adicción, abuso y mal uso, que pueden llevar a sobredosis y muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-oxicodona',
            sec: 'Advertencia destacada',
            cita: 'exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Depresión respiratoria',
          texto: 'Se han descrito depresiones respiratorias graves, potencialmente mortales o mortales con los opioides, incluso usados como se recomienda.',
          organos: [ 'pulmones', 'encefalo' ],
          ref: {
            f: 'dailymed-oxicodona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious, life-threatening, or fatal respiratory depression has been reported with the use of opioids',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 3 %): náuseas, estreñimiento, vómitos, dolor de cabeza, picor, insomnio, mareo, debilidad y somnolencia.',
          '34084-4',
          'were nausea, constipation, vomiting, headache, pruritus, insomnia, dizziness'
        ],
        [
          'Puede causar reacciones graves como las de otros opioides, incluida la depresión respiratoria.',
          '34084-4',
          'ROXICODONE tablets have been evaluated in open label clinical trials'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 15 mg o 30 mg por comprimido, según la etiqueta; el activo va como clorhidrato de oxicodona. Los excipientes no son el principio activo.',
    usos: 'Dolor lo bastante intenso como para necesitar un opioide y sin alternativas adecuadas.',
    actua: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia y no tiene techo de efecto. Se cree que actúa sobre receptores opioides del sistema nervioso central.',
    recorrido: 'Entre el 60 % y el 87 % de una dosis oral llega a la circulación general, por un primer paso relativamente bajo; una comida rica en grasa aumenta la cantidad absorbida un 27 %. La oxicodona y sus metabolitos salen sobre todo por el riñón (oxicodona libre hasta el 19 % y conjugada hasta el 50 %); su semivida es de 3,5 a 4 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación inmediata.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de liberación inmediata.',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'ROXICODONE tablets are designed to provide immediate release of oxycodone',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Entre el 60 % y el 87 % de una dosis oral llega a la circulación general, por un primer paso relativamente bajo; una comida rica en grasa aumenta la cantidad absorbida un 27 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Entre el 60 % y el 87 % de una dosis oral llega a la circulación general, por un primer paso relativamente bajo; una comida rica en grasa aumenta la cantidad absorbida un 27 %.',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'About 60% to 87% of an oral dose of oxycodone reaches the systemic circulation',
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
      ocurre: 'Tras la vía intravenosa, su volumen de distribución es de 2,6 L/kg; alrededor del 45 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras la vía intravenosa, su volumen de distribución es de 2,6 L/kg; alrededor del 45 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of oxycodone at 37°C and a pH of 7.4 was about 45%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia y no tiene techo de efecto. Se cree que actúa sobre receptores opioides del sistema nervioso central.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia y no tiene techo de efecto. Se cree que actúa sobre receptores opioides del sistema nervioso central.',
            ref: {
              f: 'dailymed-oxicodona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Oxycodone is a full opioid agonist and is relatively selective for the mu-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una gran parte se N-desalquila a noroxicodona en el primer paso (CYP3A4); por O-desmetilación (CYP2D6) se forma oximorfona.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una gran parte se N-desalquila a noroxicodona en el primer paso (CYP3A4); por O-desmetilación (CYP2D6) se forma oximorfona.',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'A high portion of oxycodone is N-dealkylated to noroxycodone during first-pass metabolism, and is catalyzed by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Noroxicodona',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'N-dealkylated to noroxycodone during first-pass metabolism',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Oximorfona',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxymorphone is formed by the O-demethylation of oxycodone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La oxicodona y sus metabolitos salen sobre todo por el riñón (oxicodona libre hasta el 19 % y conjugada hasta el 50 %); su semivida es de 3,5 a 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La oxicodona y sus metabolitos salen sobre todo por el riñón (oxicodona libre hasta el 19 % y conjugada hasta el 50 %); su semivida es de 3,5 a 4 horas.',
          ref: {
            f: 'dailymed-oxicodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxycodone and its metabolites are excreted primarily via the kidney',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción que llega a la circulación general',
      valor: '60-87',
      unidad: '%',
      analito: 'oxicodona',
      ref: {
        f: 'dailymed-oxicodona',
        sec: '12.3 · Farmacocinética',
        cita: 'About 60% to 87% of an oral dose of oxycodone reaches the systemic circulation',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '22,2 (± 7,6)',
      unidad: 'ng/mL',
      analito: 'oxicodona',
      condiciones: 'comprimido de 15 mg, dosis única',
      ref: { f: 'dailymed-oxicodona', sec: '12.3 · Farmacocinética', cita: 'ROXICODONE 15 mg tab 128.2±35.1 22.2±7.6 1.4±0.7', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,4 (± 0,7)',
      unidad: 'h',
      analito: 'oxicodona',
      condiciones: 'comprimido de 15 mg, dosis única',
      ref: { f: 'dailymed-oxicodona', sec: '12.3 · Farmacocinética', cita: 'ROXICODONE 15 mg tab 128.2±35.1 22.2±7.6 1.4±0.7', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '3,5-4',
      unidad: 'h',
      analito: 'oxicodona',
      ref: {
        f: 'dailymed-oxicodona',
        sec: '12.3 · Farmacocinética',
        cita: 'half-life of oxycodone following the administration of ROXICODONE was 3.5 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '45 (aprox.)',
      unidad: '%',
      analito: 'oxicodona',
      ref: {
        f: 'dailymed-oxicodona',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of oxycodone at 37°C and a pH of 7.4 was about 45%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2,6',
      unidad: 'L/kg',
      analito: 'oxicodona',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-oxicodona',
        sec: '12.3 · Farmacocinética',
        cita: 'the volume of distribution (V ss ) for oxycodone was 2.6 L/kg',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oxicodona', '5a8157d3-ba20-4abf-b0d4-6ad141b31d63', 'ROXICODONE (OXYCODONE HYDROCHLORIDE) TABLET', 'Roxicodone', '30', '2026-04-30', '2026-11-12'),
    rengPubchem(5284603, 'oxycodone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
