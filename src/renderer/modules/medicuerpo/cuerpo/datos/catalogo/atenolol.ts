import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'atenolol',
    nombre: 'Atenolol',
    clase: 'Betabloqueante con preferencia por β₁',
    sinonimos: [ 'atenolol' ],
    formula: 'C14H22N2O3',
    masaMolar: 266.34,
    smiles: 'CC(C)NCC(COC1=CC=C(C=C1)CC(=O)N)O',
    inchikey: 'METKIMKYRPQLGS-UHFFFAOYSA-N',
    cid: 2249,
    iupac: '2-[4-[2-hydroxy-3-(propan-2-ylamino)propoxy]phenyl]acetamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'atenolol-oral',
      producto: 'TENORMIN · comprimido',
      titular: 'UPSHER-SMITH LABORATORIES, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25 mg',
      excipientes: [ 'magnesium stearate', 'microcrystalline cellulose', 'sodium starch glycolate type a potato', 'povidone, unspecified' ],
      usos: {
        t: 'La etiqueta incluye hipertensión, angina de pecho y determinadas situaciones de infarto agudo de miocardio.',
        ref: { f: 'dailymed-atenolol', sec: '1 · Indicaciones', cita: 'indicated for the treatment of hypertension' }
      },
      fuente: 'dailymed-atenolol'
    }
  ],
  resumen: {
    contiene: 'Comprimido de atenolol para administración oral.',
    usos: 'La etiqueta incluye hipertensión, angina de pecho y determinadas situaciones de infarto agudo de miocardio.',
    actua: 'Bloquea preferentemente receptores β₁-adrenérgicos. En el corazón esto reduce la frecuencia y la respuesta a la estimulación simpática.',
    recorrido: 'Se absorbe alrededor de la mitad de la cantidad ingerida. Los niveles en sangre alcanzan su máximo entre dos y cuatro horas. La fracción absorbida sale principalmente por el riñón. La parte que no se absorbe se elimina sin cambios en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere TENORMIN por vía oral.',
      ocurre: 'TENORMIN es un comprimido oral de atenolol con los excipientes declarados para esa presentación.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'TENORMIN es un comprimido oral de atenolol con los excipientes declarados para esa presentación.',
          ref: { f: 'dailymed-atenolol', sec: '11 · Descripción', cita: 'Magnesium stearate, microcrystalline cellulose, povidone' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe alrededor de la mitad de la cantidad ingerida. Los niveles en sangre alcanzan su máximo entre dos y cuatro horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe alrededor de la mitad de la cantidad ingerida. Los niveles en sangre alcanzan su máximo entre dos y cuatro horas.',
          ref: { f: 'dailymed-atenolol', sec: '12 · Farmacología clínica', cita: '50% of an oral dose is absorbed' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El atenolol absorbido circula en sangre. La ficha documenta que puede atravesar la barrera placentaria y aparecer en sangre de cordón.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El atenolol absorbido circula en sangre. La ficha documenta que puede atravesar la barrera placentaria y aparecer en sangre de cordón.',
          ref: { f: 'dailymed-atenolol', sec: 'Información complementaria', cita: 'appears in cord blood' }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico β₁',
        efecto: 'Bloquea preferentemente receptores β₁-adrenérgicos. En el corazón esto reduce la frecuencia y la respuesta a la estimulación simpática.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Bloquea preferentemente receptores β₁-adrenérgicos. En el corazón esto reduce la frecuencia y la respuesta a la estimulación simpática.',
            ref: { f: 'dailymed-atenolol', sec: '12 · Farmacología clínica', cita: 'beta-adrenergic receptor blocking agent' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El atenolol absorbido sigue en circulación.',
      ocurre: 'La etiqueta describe poco o ningún metabolismo por el hígado. Una parte importante del atenolol absorbido se elimina sin requerir transformación previa.',
      sigue: 'La fracción absorbida pasa principalmente a la vía renal.',
      datos: [
        {
          t: 'La etiqueta describe poco o ningún metabolismo por el hígado. Una parte importante del atenolol absorbido se elimina sin requerir transformación previa.',
          ref: { f: 'dailymed-atenolol', sec: '12 · Farmacología clínica', cita: 'undergoes little or no metabolism by the liver' }
        }
      ],
      formas: [ 'disuelto' ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La fracción absorbida sale principalmente por el riñón. La parte que no se absorbe se elimina sin cambios en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La fracción absorbida sale principalmente por el riñón. La parte que no se absorbe se elimina sin cambios en heces.',
          ref: {
            f: 'dailymed-atenolol',
            sec: '12 · Farmacología clínica',
            cita: 'absorbed portion is eliminated primarily by renal excretion'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida aproximada tras administración oral',
      valor: '6–7',
      unidad: 'h',
      ref: { f: 'dailymed-atenolol', sec: '12 · Farmacología clínica', cita: 'approximately 6 to 7 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-atenolol', '6e850b1e-28a4-4ff8-8ed7-bb0b29faa28a', 'TENORMIN (ATENOLOL) TABLET', 'TENORMIN', '2', '2026-05-01', '2026-11-10'),
    rengPubchem(2249, 'atenolol', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
