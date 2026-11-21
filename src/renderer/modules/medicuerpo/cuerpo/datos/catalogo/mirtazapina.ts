import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mirtazapina',
    nombre: 'Mirtazapina',
    clase: 'Antidepresivo noradrenérgico y serotoninérgico',
    sinonimos: [ 'mirtazapine' ],
    formula: 'C17H19N3',
    masaMolar: 265.35,
    smiles: 'CN1CCN2C(C1)C3=CC=CC=C3CC4=C2N=CC=C4',
    inchikey: 'RONZAEMNMFQXRA-UHFFFAOYSA-N',
    cid: 4205,
    iupac: '5-methyl-2,5,19-triazatetracyclo[13.4.0.02,7.08,13]nonadeca-1(15),8,10,12,16,18-hexaene',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'mirtazapina-oral',
      producto: 'REMERON · comprimido recubierto',
      titular: 'ORGANON LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '15 mg',
      excipientes: [
        'starch, corn',
        'hydroxypropyl cellulose (1600000 wamw)',
        'magnesium stearate',
        'silicon dioxide',
        'lactose, unspecified form',
        'hypromellose, unspecified',
        'polyethylene glycol 8000',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Trastorno depresivo mayor en adultos según la etiqueta.',
        ref: { f: 'dailymed-mirtazapina', sec: '1 · Indicaciones', cita: 'major depressive disorder (MDD) in adults' }
      },
      fuente: 'dailymed-mirtazapina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de mirtazapina para administración oral.',
    usos: 'Trastorno depresivo mayor en adultos según la etiqueta.',
    actua: 'La etiqueta propone un antagonismo de receptores α₂ presinápticos que favorece la señal noradrenérgica y serotoninérgica. El mecanismo clínico no está establecido por completo.',
    recorrido: 'La biodisponibilidad oral absoluta ronda el 50 %. Las concentraciones plasmáticas alcanzan su máximo aproximadamente a las dos horas. La mirtazapina y sus metabolitos salen principalmente por orina (75 %), con una parte por heces (15 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere REMERON por vía oral.',
      ocurre: 'La presentación elegida es el comprimido recubierto REMERON. La etiqueta incluye también una presentación bucodispersable diferente.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación elegida es el comprimido recubierto REMERON. La etiqueta incluye también una presentación bucodispersable diferente.',
          ref: { f: 'dailymed-mirtazapina', sec: 'Información complementaria', cita: 'REMERON/REMERONSolTab' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La biodisponibilidad oral absoluta ronda el 50 %. Las concentraciones plasmáticas alcanzan su máximo aproximadamente a las dos horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta ronda el 50 %. Las concentraciones plasmáticas alcanzan su máximo aproximadamente a las dos horas.',
          ref: { f: 'dailymed-mirtazapina', sec: '12 · Farmacología clínica', cita: 'absolute bioavailability of about 50%' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se une a proteínas plasmáticas en torno al 85 % en el intervalo de concentraciones estudiado.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se une a proteínas plasmáticas en torno al 85 % en el intervalo de concentraciones estudiado.',
          ref: { f: 'dailymed-mirtazapina', sec: '12 · Farmacología clínica', cita: 'approximately 85% bound to plasma proteins' }
        }
      ],
      accion: {
        diana: 'Receptores α₂-adrenérgicos presinápticos (mecanismo propuesto)',
        efecto: 'La etiqueta propone un antagonismo de receptores α₂ presinápticos que favorece la señal noradrenérgica y serotoninérgica. El mecanismo clínico no está establecido por completo.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'La etiqueta propone un antagonismo de receptores α₂ presinápticos que favorece la señal noradrenérgica y serotoninérgica. El mecanismo clínico no está establecido por completo.',
            ref: {
              f: 'dailymed-mirtazapina',
              sec: '12 · Farmacología clínica',
              cita: 'adrenergic inhibitory autoreceptors and heteroreceptors'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma por desmetilación e hidroxilación, seguidas de conjugación. Los estudios con microsomas hepáticos identifican varias enzimas CYP.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma por desmetilación e hidroxilación, seguidas de conjugación. Los estudios con microsomas hepáticos identifican varias enzimas CYP.',
          ref: {
            f: 'dailymed-mirtazapina',
            sec: '12 · Farmacología clínica',
            cita: 'demethylation and hydroxylation followed by glucuronide conjugation'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La mirtazapina y sus metabolitos salen principalmente por orina (75 %), con una parte por heces (15 %).',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La mirtazapina y sus metabolitos salen principalmente por orina (75 %), con una parte por heces (15 %).',
          ref: { f: 'dailymed-mirtazapina', sec: '12 · Farmacología clínica', cita: 'via urine with 15% in feces' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de mirtazapina',
      valor: '20–40',
      unidad: 'h',
      ref: { f: 'dailymed-mirtazapina', sec: '12 · Farmacología clínica', cita: 'half-life of about 20 to 40 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mirtazapina', '98ad1917-a094-44f5-a28f-a64a8cfcd887', 'REMERON (MIRTAZAPINE) TABLET, FILM COATED REMERONSOLTAB (MIRTAZAPINE) TABLET, ORALLY DISINTEGRATING', 'REMERON', '8', '2025-08-08', '2026-11-10'),
    rengPubchem(4205, 'mirtazapine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
