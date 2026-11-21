import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'litio',
    nombre: 'Carbonato de litio',
    clase: 'Estabilizador del ánimo',
    sinonimos: [ 'lithium carbonate', 'litio' ],
    formula: 'CLi2O3',
    masaMolar: 73.9,
    smiles: '[Li+].[Li+].C(=O)([O-])[O-]',
    inchikey: 'XGZVUEUWXADBQD-UHFFFAOYSA-L',
    cid: 11125,
    iupac: 'dilithium;carbonate',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'litio-oral',
      producto: 'Lithium Carbonate · comprimido',
      titular: 'HIKMA PHARMACEUTICALS USA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '300 mg de carbonato de litio por comprimido',
      excipientes: [ 'calcium stearate', 'microcrystalline cellulose', 'povidone k30', 'sodium lauryl sulfate', 'sodium starch glycolate type a potato', 'water' ],
      usos: {
        t: 'Trastorno bipolar I: episodios maníacos y mixtos agudos y tratamiento de mantenimiento, a partir de los 7 años.',
        ref: { f: 'dailymed-litio', sec: '1 · Indicaciones', cita: 'indicated as monotherapy for the treatment of bipolar I disorder', codigo: '34067-9' }
      },
      fuente: 'dailymed-litio',
      advertencias: [
        {
          titulo: 'Toxicidad por litio',
          texto: 'La toxicidad se relaciona estrechamente con la concentración de litio en el suero y puede aparecer con dosis cercanas a las terapéuticas.',
          organos: [ 'encefalo', 'rinones' ],
          ref: {
            f: 'dailymed-litio',
            sec: 'Advertencia destacada',
            cita: 'Lithium toxicity is closely related to serum lithium concentrations, and can occur at doses close to therapeutic concentrations',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Poliuria',
          texto: 'El tratamiento crónico puede reducir la capacidad del riñón para concentrar la orina (diabetes insípida nefrogénica), con poliuria y sed.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-litio',
            sec: '5 · Advertencias y precauciones',
            cita: 'Chronic lithium treatment may be associated with diminution of renal concentrating ability',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Náuseas o vómitos, orinar mucho, alteraciones tiroideas, temblor, sed, mareo, erupción, alteración de la marcha, menos apetito y visión borrosa (≥ 5 % y al menos el doble que con placebo).',
          '34084-4',
          'nausea/vomiting, polyuria, thyroid abnormalities, tremor, thirst/polydipsia, dizziness'
        ],
        [
          'En el ensayo pediátrico de 8 semanas: náuseas o vómitos en el 57 % con litio frente al 29 % con placebo.',
          '34084-4',
          'Gastrointestinal Disorders Nausea/vomiting 29 57'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 300 mg de carbonato de litio por comprimido. Los excipientes no son el principio activo.',
    usos: 'Trastorno bipolar I: episodios maníacos y mixtos agudos y tratamiento de mantenimiento, a partir de los 7 años.',
    actua: 'Estabiliza el estado de ánimo; la etiqueta indica que su mecanismo de acción se desconoce.',
    recorrido: 'Se absorbe por completo en la parte alta del tubo digestivo; con preparados de liberación inmediata la concentración máxima llega entre 0,25 y 3 horas. Sale sobre todo por la orina, en proporción a su concentración en el suero; el riñón lo filtra y reabsorbe el 80 % en el túbulo proximal. Su semivida es de 18 a 36 horas y por las heces sale una cantidad insignificante.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'El comprimido de 300 mg se disgrega y libera el carbonato de litio en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'El comprimido de 300 mg se disgrega y libera el carbonato de litio en el tubo digestivo.',
          ref: {
            f: 'dailymed-litio',
            sec: '3 · Formas y concentraciones',
            cita: 'Each 300 mg tablet for oral administration contains: lithium carbonate',
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
      ocurre: 'Se absorbe por completo en la parte alta del tubo digestivo; con preparados de liberación inmediata la concentración máxima llega entre 0,25 y 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo en la parte alta del tubo digestivo; con preparados de liberación inmediata la concentración máxima llega entre 0,25 y 3 horas.',
          ref: {
            f: 'dailymed-litio',
            sec: '12.3 · Farmacocinética',
            cita: 'lithium is reported to be completely absorbed in the upper gastrointestinal tract',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico sérico entre 0,25 y 3 horas con preparados de liberación inmediata.',
          ref: {
            f: 'dailymed-litio',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak serum concentrations (T max ) occur 0.25 to 3 hours after oral administration of immediate release preparations',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte por el agua de todo el cuerpo (volumen aparente de 0,7 a 1 L/kg) y casi no se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte por el agua de todo el cuerpo (volumen aparente de 0,7 a 1 L/kg) y casi no se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-litio',
            sec: '12.3 · Farmacocinética',
            cita: 'The distribution space of lithium approximates that of total body water',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Estabiliza el estado de ánimo; la etiqueta indica que su mecanismo de acción se desconoce.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Estabiliza el estado de ánimo; la etiqueta indica que su mecanismo de acción se desconoce.',
            ref: {
              f: 'dailymed-litio',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of lithium as a mood stabilizing agent is unknown',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza: el litio sigue sin cambios hasta su eliminación.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza: el litio sigue sin cambios hasta su eliminación.',
          ref: { f: 'dailymed-litio', sec: '12.3 · Farmacocinética', cita: 'Lithium is not metabolized', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la orina, en proporción a su concentración en el suero; el riñón lo filtra y reabsorbe el 80 % en el túbulo proximal. Su semivida es de 18 a 36 horas y por las heces sale una cantidad insignificante.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la orina, en proporción a su concentración en el suero; el riñón lo filtra y reabsorbe el 80 % en el túbulo proximal. Su semivida es de 18 a 36 horas y por las heces sale una cantidad insignificante.',
          ref: {
            f: 'dailymed-litio',
            sec: '12.3 · Farmacocinética',
            cita: 'Lithium is primarily excreted in urine, proportionally to its serum concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se filtra en el glomérulo y el 80 % se reabsorbe en el túbulo proximal.',
          ref: {
            f: 'dailymed-litio',
            sec: '12.3 · Farmacocinética',
            cita: 'Lithium is filtered by the glomerulus, and 80% is reabsorbed by passive diffusion in the proximal tubule',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración sérica máxima',
      valor: '0,25-3',
      unidad: 'h',
      analito: 'litio',
      condiciones: 'preparados de liberación inmediata',
      ref: {
        f: 'dailymed-litio',
        sec: '12.3 · Farmacocinética',
        cita: 'occur 0.25 to 3 hours after oral administration of immediate release preparations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración sérica máxima',
      valor: '2-6',
      unidad: 'h',
      analito: 'litio',
      condiciones: 'preparados de liberación sostenida',
      origen: 'otra-presentacion',
      ref: { f: 'dailymed-litio', sec: '12.3 · Farmacocinética', cita: '2 to 6 hours after sustained-release preparations', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '18-36 (aprox.)',
      unidad: 'h',
      analito: 'litio',
      ref: {
        f: 'dailymed-litio',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of lithium is approximately 18 to 36 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '0,7-1',
      unidad: 'L/kg',
      analito: 'litio',
      ref: { f: 'dailymed-litio', sec: '12.3 · Farmacocinética', cita: 'the apparent volume of distribution is 0.7 to 1 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático estimado',
      valor: '0,59; 0,79 y 1,17',
      unidad: 'L/h',
      analito: 'litio',
      poblacion: 'niños de 20, 30 y 50 kg',
      ref: {
        f: 'dailymed-litio',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated plasma clearance was 0.59 L/h, 0.79 L/h and 1.17 L/h',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-litio', 'b839ff4b-f62d-41ab-a823-550a756d58ec', 'LITHIUM CARBONATE TABLET LITHIUM CARBONATE CAPSULE, GELATIN COATED', 'Lithium Carbonate', '3', '2026-09-10', '2026-11-12'),
    rengPubchem(11125, 'lithium carbonate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
