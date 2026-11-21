import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'morfina',
    nombre: 'Morfina',
    clase: 'Analgésico opioide (agonista mu)',
    sinonimos: [ 'morphine', 'MS Contin' ],
    formula: 'C17H19NO3',
    masaMolar: 285.34,
    smiles: 'CN1CC[C@]23[C@@H]4[C@H]1CC5=C2C(=C(C=C5)O)O[C@H]3[C@H](C=C4)O',
    inchikey: 'BQJCRHHNABKAKU-KBQPJGBKSA-N',
    cid: 5288826,
    iupac: '(4R,4aR,7S,7aR,12bS)-3-methyl-2,4,4a,7,7a,13-hexahydro-1H-4,12-methanobenzofuro[3,2-e]isoquinoline-7,9-diol',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'morfina-oral',
      producto: 'MS Contin · comprimido recubierto de liberación prolongada',
      titular: 'RHODES PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '15 mg, 30 mg o 60 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Sulfato de morfina', ref: { f: 'dailymed-morfina', sec: '11 · Descripción', cita: 'morphine sulfate', codigo: '34089-3' } },
      excipientes: [
        'cetostearyl alcohol',
        'hydroxyethyl cellulose (140 mpa.s at 5%)',
        'hypromellose, unspecified',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'talc',
        'titanium dioxide',
        'fd&c blue no. 2',
        'lactose, unspecified form',
        'polysorbate 80'
      ],
      usos: {
        t: 'Dolor intenso y persistente que necesita un opioide y no se trata bien con otras opciones, incluidos los opioides de liberación inmediata.',
        ref: {
          f: 'dailymed-morfina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of severe and persistent pain that requires an opioid analgesic',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-morfina',
      advertencias: [
        {
          titulo: 'Adicción, abuso y mal uso',
          texto: 'Expone a riesgos de adicción, abuso y mal uso, que pueden llevar a sobredosis y muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-morfina',
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
            f: 'dailymed-morfina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious, life-threatening, or fatal respiratory depression has been reported with the use of opioids',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 10 %): estreñimiento, náuseas y sedación.',
          '34084-4',
          'Most common adverse reactions (>10%): constipation, nausea, and sedation'
        ],
        [
          'Puede aumentar el riesgo de reacciones graves como las de otros opioides, incluida la depresión respiratoria.',
          '34084-4',
          'MS CONTIN may increase the risk of serious adverse reactions such as those observed with other opioid analgesics'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 15 mg, 30 mg o 60 mg por comprimido, según la etiqueta; el activo va como sulfato de morfina. Los excipientes no son el principio activo.',
    usos: 'Dolor intenso y persistente que necesita un opioide y no se trata bien con otras opciones, incluidos los opioides de liberación inmediata.',
    actua: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia, sin techo de efecto.',
    recorrido: 'La cantidad absorbida es la misma que con las formas inmediatas, pero el metabolismo en la pared intestinal y el hígado hace que solo llegue alrededor del 40 %; la biodisponibilidad oral es del 20 % al 40 %. Se elimina sobre todo por el riñón como M3G; alrededor del 10 % sale sin cambios por la orina y una pequeña parte del glucurónido, por la bilis. Su semivida efectiva tras la vía intravenosa es de 2 a 4 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: libera la morfina algo más despacio que las formas de liberación inmediata.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: libera la morfina algo más despacio que las formas de liberación inmediata.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'Morphine is released from MS CONTIN somewhat more slowly than from immediate-release oral preparations',
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
      ocurre: 'La cantidad absorbida es la misma que con las formas inmediatas, pero el metabolismo en la pared intestinal y el hígado hace que solo llegue alrededor del 40 %; la biodisponibilidad oral es del 20 % al 40 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La cantidad absorbida es la misma que con las formas inmediatas, pero el metabolismo en la pared intestinal y el hígado hace que solo llegue alrededor del 40 %; la biodisponibilidad oral es del 20 % al 40 %.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'only about 40% of the administered dose reaches the central compartment',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad oral de la morfina del 20 % al 40 %.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral bioavailability of morphine is approximately 20 to 40%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'musculos', 'encefalo', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte al músculo, el riñón, el hígado, el intestino, el pulmón, el bazo y el cerebro; volumen de distribución de 3 a 4 L/kg y unión a proteínas del 30-35 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte al músculo, el riñón, el hígado, el intestino, el pulmón, el bazo y el cerebro; volumen de distribución de 3 a 4 L/kg y unión a proteínas del 30-35 %.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'Once absorbed, morphine is distributed to skeletal muscle, kidneys, liver, intestinal tract, lungs, spleen, and brain',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia, sin techo de efecto.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción principal es la analgesia, sin techo de efecto.',
            ref: {
              f: 'dailymed-morfina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Morphine is a full opioid agonist and is relatively selective for the mu-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se glucuronida en el hígado a morfina-3-glucurónido (M3G, alrededor del 50 %) y morfina-6-glucurónido (M6G, 5-15 %), y se sulfata.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se glucuronida en el hígado a morfina-3-glucurónido (M3G, alrededor del 50 %) y morfina-6-glucurónido (M6G, 5-15 %), y se sulfata.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'glucuronidation to produce metabolites including morphine-3-glucuronide, M3G (about 50%) and morphine-6-glucuronide, M6G (about 5 to 15%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Morfina-3-glucurónido (M3G)',
          actividad: 'desconocida',
          ref: { f: 'dailymed-morfina', sec: '12.3 · Farmacocinética', cita: 'morphine-3-glucuronide, M3G (about 50%)', codigo: '43682-4' }
        },
        {
          nombre: 'Morfina-6-glucurónido (M6G)',
          actividad: 'desconocida',
          ref: { f: 'dailymed-morfina', sec: '12.3 · Farmacocinética', cita: 'morphine-6-glucuronide, M6G (about 5 to 15%)', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por el riñón como M3G; alrededor del 10 % sale sin cambios por la orina y una pequeña parte del glucurónido, por la bilis. Su semivida efectiva tras la vía intravenosa es de 2 a 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por el riñón como M3G; alrededor del 10 % sale sin cambios por la orina y una pequeña parte del glucurónido, por la bilis. Su semivida efectiva tras la vía intravenosa es de 2 a 4 horas.',
          ref: {
            f: 'dailymed-morfina',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination of morphine occurs primarily as renal excretion of M3G',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '20-40',
      unidad: '%',
      analito: 'morfina',
      ref: {
        f: 'dailymed-morfina',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral bioavailability of morphine is approximately 20 to 40%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '3-4',
      unidad: 'L/kg',
      analito: 'morfina',
      ref: {
        f: 'dailymed-morfina',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution (Vd) for morphine is approximately 3 to 4 liters per kilogram',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '30-35',
      unidad: '%',
      analito: 'morfina',
      ref: { f: 'dailymed-morfina', sec: '12.3 · Farmacocinética', cita: 'morphine is 30 to 35% reversibly bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '2-4',
      unidad: 'h',
      analito: 'morfina',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-morfina',
        sec: '12.3 · Farmacocinética',
        cita: 'its effective half-life after intravenous administration is normally 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretada sin cambios en la orina',
      valor: '10 (aprox.)',
      unidad: '% de la dosis',
      analito: 'morfina',
      ref: { f: 'dailymed-morfina', sec: '12.3 · Farmacocinética', cita: 'Approximately 10% of the dose is excreted unchanged in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-morfina', 'c354b3bf-86c0-4bb8-8b1f-be2164942698', 'MS CONTIN (MORPHINE SULFATE) TABLET, FILM COATED, EXTENDED RELEASE', 'MS Contin', '18', '2026-08-19', '2026-11-12'),
    rengPubchem(5288826, 'morphine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
