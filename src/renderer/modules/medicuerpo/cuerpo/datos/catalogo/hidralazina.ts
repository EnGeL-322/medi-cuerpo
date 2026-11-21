import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidralazina',
    nombre: 'Hidralazina',
    clase: 'Vasodilatador arterial directo',
    sinonimos: [ 'hydralazine', 'Apresoline' ],
    formula: 'C8H8N4',
    masaMolar: 160.18,
    smiles: 'C1=CC=C2C(=C1)C=NN=C2NN',
    inchikey: 'RPTUSVTUFVMDQK-UHFFFAOYSA-N',
    cid: 3637,
    iupac: 'phthalazin-1-ylhydrazine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'hidralazina-oral',
      producto: 'Hydralazine Hydrochloride · comprimido',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de hidralazina',
        ref: { f: 'dailymed-hidralazina', sec: '11 · Descripción', cita: 'HydrALAZINE hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose 102',
        'microcrystalline cellulose 105',
        'sodium starch glycolate type a potato',
        'silicon dioxide',
        'magnesium stearate',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'Hipertensión esencial, sola o junto con otros fármacos.',
        ref: { f: 'dailymed-hidralazina', sec: '1 · Indicaciones', cita: 'Essential hypertension, alone or as an adjunct', codigo: '34067-9' }
      },
      fuente: 'dailymed-hidralazina',
      advertencias: [
        {
          titulo: 'Cuadro parecido al lupus',
          texto: 'En algunos pacientes puede producir un cuadro que simula un lupus eritematoso sistémico, incluida glomerulonefritis.',
          organos: [ 'articulaciones', 'rinones' ],
          ref: {
            f: 'dailymed-hidralazina',
            sec: 'Advertencias',
            cita: 'may produce a clinical picture simulating systemic lupus erythematosus including glomerulonephritis',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Frecuentes: dolor de cabeza, falta de apetito, náuseas, vómitos, diarrea, palpitaciones, taquicardia y angina de pecho.',
          '34084-4',
          'Headache, anorexia, nausea, vomiting, diarrhea, palpitations, tachycardia, angina pectoris'
        ],
        [
          'Las reacciones suelen ser reversibles al reducir la dosis.',
          '34084-4',
          'Adverse reactions with hydrALAZINE are usually reversible when dosage is reduced'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta; el activo va como clorhidrato de hidralazina. Los excipientes no son el principio activo.',
    usos: 'Hipertensión esencial, sola o junto con otros fármacos.',
    actua: 'Baja la presión arterial relajando directamente el músculo liso de las arterias: altera el movimiento del calcio en sus células. Aumenta la frecuencia cardiaca y el gasto cardiaco y suele elevar la renina.',
    recorrido: 'Se absorbe rápido tras la toma oral y el pico plasmático llega en 1 a 2 horas. Sale sobre todo como metabolitos por la orina; sus concentraciones bajan con una semivida de 3 a 7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: {
            f: 'dailymed-hidralazina',
            sec: '11 · Descripción',
            cita: 'HydrALAZINE hydrochloride, USP, is an antihypertensive, for oral administration',
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
      ocurre: 'Se absorbe rápido tras la toma oral y el pico plasmático llega en 1 a 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido tras la toma oral y el pico plasmático llega en 1 a 2 horas.',
          ref: {
            f: 'dailymed-hidralazina',
            sec: '12 · Farmacología clínica',
            cita: 'is rapidly absorbed after oral administration, and peak plasma levels are reached at 1 to 2 hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El 87 % circula unido a proteínas del plasma; mantiene o aumenta el flujo de sangre al riñón y al cerebro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 87 % circula unido a proteínas del plasma; mantiene o aumenta el flujo de sangre al riñón y al cerebro.',
          ref: { f: 'dailymed-hidralazina', sec: '12 · Farmacología clínica', cita: 'Binding to human plasma protein is 87%', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Músculo liso vascular (movimiento del calcio)',
        efecto: 'Baja la presión arterial relajando directamente el músculo liso de las arterias: altera el movimiento del calcio en sus células. Aumenta la frecuencia cardiaca y el gasto cardiaco y suele elevar la renina.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Baja la presión arterial relajando directamente el músculo liso de las arterias: altera el movimiento del calcio en sus células. Aumenta la frecuencia cardiaca y el gasto cardiaco y suele elevar la renina.',
            ref: {
              f: 'dailymed-hidralazina',
              sec: '12 · Farmacología clínica',
              cita: 'lowers blood pressure by exerting a peripheral vasodilating effect through a direct relaxation of vascular smooth muscle',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado.',
          ref: { f: 'dailymed-hidralazina', sec: '12 · Farmacología clínica', cita: 'undergoes extensive hepatic metabolism', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo como metabolitos por la orina; sus concentraciones bajan con una semivida de 3 a 7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo como metabolitos por la orina; sus concentraciones bajan con una semivida de 3 a 7 horas.',
          ref: {
            f: 'dailymed-hidralazina',
            sec: '12 · Farmacología clínica',
            cita: 'it is excreted mainly in the form of metabolites in the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-2',
      unidad: 'h',
      analito: 'hidralazina',
      ref: { f: 'dailymed-hidralazina', sec: '12 · Farmacología clínica', cita: 'peak plasma levels are reached at 1 to 2 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '3-7',
      unidad: 'h',
      analito: 'hidralazina aparente',
      ref: { f: 'dailymed-hidralazina', sec: '12 · Farmacología clínica', cita: 'decline with a half-life of 3 to 7 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '87',
      unidad: '%',
      analito: 'hidralazina',
      ref: { f: 'dailymed-hidralazina', sec: '12 · Farmacología clínica', cita: 'Binding to human plasma protein is 87%', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-hidralazina', '669532c9-ba15-4f4b-95a8-13782deb3521', 'HYDRALAZINE HYDROCHLORIDE TABLET', 'Hydralazine Hydrochloride', '3', '2026-04-06', '2026-11-12'),
    rengPubchem(3637, 'hydralazine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
