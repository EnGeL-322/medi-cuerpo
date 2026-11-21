import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'avanafilo',
    nombre: 'Avanafilo',
    clase: 'Inhibidor de la fosfodiesterasa 5',
    sinonimos: [ 'avanafilo', 'avanafil', 'Stendra' ],
    formula: 'C23H26ClN7O3',
    masaMolar: 483.9,
    smiles: 'COC1=C(C=C(C=C1)CNC2=NC(=NC=C2C(=O)NCC3=NC=CC=N3)N4CCC[C@H]4CO)Cl',
    inchikey: 'WEAJZXNPAWBCOA-INIZCTEOSA-N',
    cid: 9869929,
    iupac: '4-[(3-chloro-4-methoxyphenyl)methylamino]-2-[(2S)-2-(hydroxymethyl)pyrrolidin-1-yl]-N-(pyrimidin-2-ylmethyl)pyrimidine-5-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'avanafilo-oral',
      producto: 'Stendra · comprimido',
      titular: 'METUCHEN PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'fumaric acid',
        'hydroxypropyl cellulose, unspecified',
        'low-substituted hydroxypropyl cellulose (11% hydroxypropyl; 130000 mw)',
        'calcium carbonate',
        'magnesium stearate',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Disfunción eréctil en varones adultos.',
        ref: { f: 'dailymed-avanafilo', sec: '1 · Indicaciones', cita: 'treatment of erectile dysfunction in adult males', codigo: '34067-9' }
      },
      fuente: 'dailymed-avanafilo',
      reacciones: [
        [ 'Cefalea y rubor entre las reacciones frecuentes.', '34084-4', 'include headache, flushing, nasal congestion' ],
        [ 'Congestión nasal, nasofaringitis y dolor de espalda.', '34084-4', 'nasal congestion, nasopharyngitis, and back pain' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg, 100 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Disfunción eréctil en varones adultos.',
    actua: 'Inhibe la PDE5, que degrada GMPc en el cuerpo cavernoso. El mecanismo local depende de la estimulación sexual.',
    recorrido: 'En ayunas, la mediana del tiempo al pico es de 30–45 min. En el ensayo con comida grasa el pico se retrasó. Se elimina como metabolitos, principalmente por heces, con cerca del 62 % de la dosis oral. La orina aporta alrededor del 21 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral de Stendra.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral de Stendra.',
          ref: { f: 'dailymed-avanafilo', sec: '3 · Formas y concentraciones', cita: 'is supplied as oval, pale yellow tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En ayunas, la mediana del tiempo al pico es de 30–45 min. En el ensayo con comida grasa el pico se retrasó.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas, la mediana del tiempo al pico es de 30–45 min. En el ensayo con comida grasa el pico se retrasó.',
          ref: { f: 'dailymed-avanafilo', sec: '12.3 · Farmacocinética', cita: 'median T max of 30 to 45 minutes in the fasted state', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Aproximadamente el 99 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 99 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-avanafilo', sec: '12.3 · Farmacocinética', cita: 'Avanafil is approximately 99% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa 5 (PDE5)',
        efecto: 'Inhibe la PDE5, que degrada GMPc en el cuerpo cavernoso. El mecanismo local depende de la estimulación sexual.',
        lugar: [ 'organos-reproductores', 'vasos' ],
        datos: [
          {
            t: 'Inhibe la PDE5, que degrada GMPc en el cuerpo cavernoso. El mecanismo local depende de la estimulación sexual.',
            ref: { f: 'dailymed-avanafilo', sec: '12.1 · Mecanismo de acción', cita: 'degradation of cGMP in the corpus cavernosum', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado lo transforma principalmente por CYP3A4. M4 presenta actividad in vitro frente a PDE5 y M16 es inactivo frente a esa enzima.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado lo transforma principalmente por CYP3A4. M4 presenta actividad in vitro frente a PDE5 y M16 es inactivo frente a esa enzima.',
          ref: {
            f: 'dailymed-avanafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'cleared predominantly by hepatic metabolism, mainly by the CYP3A4 enzyme',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina como metabolitos, principalmente por heces, con cerca del 62 % de la dosis oral. La orina aporta alrededor del 21 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina como metabolitos, principalmente por heces, con cerca del 62 % de la dosis oral. La orina aporta alrededor del 21 %.',
          ref: {
            f: 'dailymed-avanafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'excreted as metabolites predominantly in the feces (approximately 62%',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico, mediana',
      valor: '30–45',
      unidad: 'min',
      analito: 'avanafilo',
      condiciones: 'en ayunas',
      ref: { f: 'dailymed-avanafilo', sec: '12.3 · Farmacocinética', cita: 'median T max of 30 to 45 minutes in the fasted state', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '≈5',
      unidad: 'h',
      analito: 'avanafilo',
      ref: { f: 'dailymed-avanafilo', sec: '12.3 · Farmacocinética', cita: 'terminal elimination half-life of approximately 5 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-avanafilo', 'fa7d93e3-b69b-4e02-8146-89760cd8e9d6', 'STENDRA (AVANAFIL) TABLET', 'Stendra', '7', '2024-07-24', '2026-11-12'),
    rengPubchem(9869929, 'avanafilo', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
