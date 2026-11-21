import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'terazosina',
    nombre: 'Terazosina',
    clase: 'Bloqueante alfa-1 adrenérgico',
    sinonimos: [ 'terazosin', 'Hytrin' ],
    formula: 'C19H25N5O4',
    masaMolar: 387.4,
    smiles: 'COC1=C(C=C2C(=C1)C(=NC(=N2)N3CCN(CC3)C(=O)C4CCCO4)N)OC',
    inchikey: 'VCKUSRYTPJJLNI-UHFFFAOYSA-N',
    cid: 5401,
    iupac: '[4-(4-amino-6,7-dimethoxyquinazolin-2-yl)piperazin-1-yl]-(oxolan-2-yl)methanone',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'terazosina-oral',
      producto: 'Terazosin · cápsula',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 2 mg, 5 mg o 10 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de terazosina',
        ref: { f: 'dailymed-terazosina', sec: '11 · Descripción', cita: 'Terazosin hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'crospovidone',
        'talc',
        'magnesium stearate',
        'titanium dioxide',
        'gelatin',
        'shellac',
        'ferrosoferric oxide',
        'propylene glycol',
        'fd&c blue no. 2--aluminum lake',
        'fd&c red no. 40',
        'd&c yellow no. 10 aluminum lake',
        'fd&c blue no. 1 aluminum lake'
      ],
      usos: {
        t: 'Hiperplasia benigna de próstata con síntomas, y también hipertensión.',
        ref: {
          f: 'dailymed-terazosina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of symptomatic benign prostatic hyperplasia (BPH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-terazosina',
      advertencias: [
        {
          titulo: 'Síncope y efecto de la primera dosis',
          texto: 'Puede bajar mucho la presión, sobre todo al ponerse de pie, y causar desmayos con la primera dosis o en los primeros días.',
          organos: [ 'vasos', 'encefalo' ],
          ref: {
            f: 'dailymed-terazosina',
            sec: 'Advertencias',
            cita: 'can cause marked lowering of blood pressure, especially postural hypotension, and syncope',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [ 'Debilidad, hipotensión postural y mareo, entre las más frecuentes.', '34084-4', 'Asthenia, postural hypotension, dizzin' ],
        [
          'Datos combinados de seis ensayos controlados con placebo de 1 a 20 mg al día.',
          '34084-4',
          'combined data from six placebo-controlled trials'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 1 mg, 2 mg, 5 mg o 10 mg por cápsula, según la etiqueta; el activo va como clorhidrato de terazosina. Los excipientes no son el principio activo.',
    usos: 'Hiperplasia benigna de próstata con síntomas, y también hipertensión.',
    actua: 'Bloquea de forma selectiva los receptores alfa-1: relaja el músculo liso del cuello de la vejiga y de la próstata, lo que mejora el flujo de orina.',
    recorrido: 'Se absorbe casi por completo, con un primer paso hepático mínimo; el pico llega hacia la hora. Tomarla tras las comidas retrasa el pico unos 40 minutos. Alrededor del 10 % sale sin cambios por la orina y el 20 % por las heces; en total, cerca del 40 % por la orina y el 60 % por las heces. Su semivida es de unas 12 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula.',
          ref: {
            f: 'dailymed-terazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'Terazosin hydrochloride administered as terazosin capsules',
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
      ocurre: 'Se absorbe casi por completo, con un primer paso hepático mínimo; el pico llega hacia la hora. Tomarla tras las comidas retrasa el pico unos 40 minutos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe casi por completo, con un primer paso hepático mínimo; el pico llega hacia la hora. Tomarla tras las comidas retrasa el pico unos 40 minutos.',
          ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'is essentially completely absorbed in man', codigo: '43682-4' }
        },
        {
          t: 'Primer paso hepático mínimo: casi todo lo que circula es el fármaco original.',
          ref: {
            f: 'dailymed-terazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'Terazosin has been shown to undergo minimal hepatic first-pass metabolism',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'prostata' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Del 90 % al 94 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Del 90 % al 94 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'The drug is 90 to 94% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores alfa-1 adrenérgicos',
        efecto: 'Bloquea de forma selectiva los receptores alfa-1: relaja el músculo liso del cuello de la vejiga y de la próstata, lo que mejora el flujo de orina.',
        lugar: [ 'prostata', 'vejiga', 'vasos' ],
        datos: [
          {
            t: 'Bloquea de forma selectiva los receptores alfa-1: relaja el músculo liso del cuello de la vejiga y de la próstata, lo que mejora el flujo de orina.',
            ref: {
              f: 'dailymed-terazosina',
              sec: '12.2 · Farmacodinámica',
              cita: 'Smooth muscle tone is mediated by sympathetic nervous stimulation of alpha-1 adrenoceptors, which are abundant in the prostate',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina en parte como metabolitos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina en parte como metabolitos.',
          ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'The remainder is eliminated as metabolites', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 10 % sale sin cambios por la orina y el 20 % por las heces; en total, cerca del 40 % por la orina y el 60 % por las heces. Su semivida es de unas 12 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 10 % sale sin cambios por la orina y el 20 % por las heces; en total, cerca del 40 % por la orina y el 60 % por las heces. Su semivida es de unas 12 horas.',
          ref: {
            f: 'dailymed-terazosina',
            sec: '12.3 · Farmacocinética',
            cita: 'Overall, approximately 40% of the administered dose is excreted in the urine and approximately 60% in the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'terazosina',
      ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'The plasma levels peak about one hour after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'terazosina',
      ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'decline with a half-life of approximately 12 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '90-94',
      unidad: '%',
      analito: 'terazosina',
      ref: { f: 'dailymed-terazosina', sec: '12.3 · Farmacocinética', cita: 'The drug is 90 to 94% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '10 (aprox.)',
      unidad: '% de la dosis',
      analito: 'terazosina',
      ref: {
        f: 'dailymed-terazosina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 10% of an orally administered dose is excreted as parent drug in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-terazosina', 'da4ca0f8-6888-447e-9948-d37196c5a19a', 'TERAZOSIN CAPSULE', 'Terazosin', '2', '2025-12-12', '2026-11-12'),
    rengPubchem(5401, 'terazosin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
