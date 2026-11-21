import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nabumetona',
    nombre: 'Nabumetona',
    clase: 'Antiinflamatorio no esteroideo, profármaco',
    sinonimos: [ 'nabumetona', 'nabumetone' ],
    formula: 'C15H16O2',
    masaMolar: 228.29,
    smiles: 'CC(=O)CCC1=CC2=C(C=C1)C=C(C=C2)OC',
    inchikey: 'BLXXJMDCKKHMKV-UHFFFAOYSA-N',
    cid: 4409,
    iupac: '4-(6-methoxynaphthalen-2-yl)butan-2-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'nabumetona-oral',
      producto: 'Nabumetone · comprimido recubierto con película',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '500 mg o 750 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'sodium starch glycolate type a potato',
        'hypromellose, unspecified',
        'sodium lauryl sulfate',
        'silicon dioxide',
        'magnesium stearate',
        'titanium dioxide',
        'polyethylene glycol 400'
      ],
      usos: {
        t: 'Alivio de signos y síntomas de artrosis y artritis reumatoide.',
        ref: { f: 'dailymed-nabumetona', sec: '1 · Indicaciones', cita: 'osteoarthritis and rheumatoid arthritis', codigo: '34067-9' }
      },
      fuente: 'dailymed-nabumetona',
      reacciones: [
        [ 'Diarrea y dispepsia entre las reacciones más frecuentes.', '34084-4', 'included diarrhea, dyspepsia, and abdominal pain' ],
        [ 'Dolor abdominal entre las reacciones más frecuentes.', '34084-4', 'included diarrhea, dyspepsia, and abdominal pain' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 500 mg o 750 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio de signos y síntomas de artrosis y artritis reumatoide.',
    actua: 'Su metabolito activo 6-MNA inhibe la síntesis de prostaglandinas. La ficha lo relaciona con el efecto antiinflamatorio.',
    recorrido: 'La recuperación urinaria del marcador indica una absorción digestiva importante. El fármaco se transforma pronto en 6-MNA. Tras la administración oral marcada se recuperó alrededor del 80 % de la dosis en orina. La etiqueta describe la eliminación urinaria de metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral recubierto con película de nabumetona.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral recubierto con película de nabumetona.',
          ref: { f: 'dailymed-nabumetona', sec: '11 · Descripción', cita: 'each tablet contains the following inactive ingredients', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La recuperación urinaria del marcador indica una absorción digestiva importante. El fármaco se transforma pronto en 6-MNA.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La recuperación urinaria del marcador indica una absorción digestiva importante. El fármaco se transforma pronto en 6-MNA.',
          ref: {
            f: 'dailymed-nabumetona',
            sec: '12 · Farmacología clínica',
            cita: 'indicating that nabumetone is well absorbed from the gastrointestinal tract',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El 6-MNA circula unido a proteínas plasmáticas en más del 99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 6-MNA circula unido a proteínas plasmáticas en más del 99 %.',
          ref: { f: 'dailymed-nabumetona', sec: '12 · Farmacología clínica', cita: '6MNA is more than 99% bound to plasma proteins', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Síntesis de prostaglandinas',
        efecto: 'Su metabolito activo 6-MNA inhibe la síntesis de prostaglandinas. La ficha lo relaciona con el efecto antiinflamatorio.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Su metabolito activo 6-MNA inhibe la síntesis de prostaglandinas. La ficha lo relaciona con el efecto antiinflamatorio.',
            ref: { f: 'dailymed-nabumetona', sec: '12 · Farmacología clínica', cita: 'a potent inhibitor of prostaglandin synthesis', codigo: '34090-1' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado convierte el profármaco en ácido 6-metoxi-2-naftilacético, su principal metabolito activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado convierte el profármaco en ácido 6-metoxi-2-naftilacético, su principal metabolito activo.',
          ref: { f: 'dailymed-nabumetona', sec: '12 · Farmacología clínica', cita: 'hepatic biotransformation to the active component', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la administración oral marcada se recuperó alrededor del 80 % de la dosis en orina. La etiqueta describe la eliminación urinaria de metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la administración oral marcada se recuperó alrededor del 80 % de la dosis en orina. La etiqueta describe la eliminación urinaria de metabolitos.',
          ref: {
            f: 'dailymed-nabumetona',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 80% of a radiolabeled dose of nabumetone is found in the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del metabolito activo',
      valor: '>99',
      unidad: '%',
      analito: '6-MNA',
      ref: { f: 'dailymed-nabumetona', sec: '12 · Farmacología clínica', cita: '6MNA is more than 99% bound to plasma proteins', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nabumetona', 'e87289f4-d4f9-4510-aaa5-51f8f8167658', 'NABUMETONE TABLET, FILM COATED', 'Nabumetone', '3', '2026-07-13', '2026-11-12'),
    rengPubchem(4409, 'nabumetona', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
