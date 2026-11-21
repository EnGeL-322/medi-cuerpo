import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'indometacina',
    nombre: 'Indometacina',
    clase: 'Antiinflamatorio no esteroideo',
    sinonimos: [ 'indometacina', 'indomethacin' ],
    formula: 'C19H16ClNO4',
    masaMolar: 357.8,
    smiles: 'CC1=C(C2=C(N1C(=O)C3=CC=C(C=C3)Cl)C=CC(=C2)OC)CC(=O)O',
    inchikey: 'CGIGDMFJXJATDK-UHFFFAOYSA-N',
    cid: 3715,
    iupac: '2-[1-(4-chlorobenzoyl)-5-methoxy-2-methylindol-3-yl]acetic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'indometacina-oral',
      producto: 'Indomethacin · cápsula',
      titular: 'GLENMARK PHARMACEUTICALS INC., USA',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 50 mg por cápsula, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'fd&c blue no. 1',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'ferrosoferric oxide',
        'butyl alcohol',
        'alcohol',
        'isopropyl alcohol',
        'potassium hydroxide',
        'propylene glycol',
        'shellac',
        'ammonia',
        'titanium dioxide',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'd&c yellow no. 10',
        'hypromellose, unspecified',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Entre sus indicaciones figuran la artritis reumatoide y la espondilitis anquilosante moderadas o graves.',
        ref: {
          f: 'dailymed-indometacina',
          sec: '1 · Indicaciones',
          cita: 'Moderate to severe rheumatoid arthritis including acute flares of chronic disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-indometacina',
      reacciones: [
        [ 'Cefalea y mareo entre las reacciones comunes.', '34084-4', 'are headache, dizziness, dyspepsia and nausea' ],
        [ 'Dispepsia y náuseas.', '34084-4', 'are headache, dizziness, dyspepsia and nausea' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 50 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Entre sus indicaciones figuran la artritis reumatoide y la espondilitis anquilosante moderadas o graves.',
    actua: 'Su acción incluye inhibición de COX-1 y COX-2. La ficha describe que el mecanismo completo sigue sin conocerse.',
    recorrido: 'Las cápsulas presentan biodisponibilidad cercana al 100 % y el pico plasmático se alcanza alrededor de las 2 h. Se recupera aproximadamente un 60 % de la dosis oral en orina y un 33 % en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula oral de gelatina de indometacina.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula oral de gelatina de indometacina.',
          ref: { f: 'dailymed-indometacina', sec: '3 · Formas y concentraciones', cita: 'opaque green hard gelatin capsule', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Las cápsulas presentan biodisponibilidad cercana al 100 % y el pico plasmático se alcanza alrededor de las 2 h.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Las cápsulas presentan biodisponibilidad cercana al 100 % y el pico plasmático se alcanza alrededor de las 2 h.',
          ref: {
            f: 'dailymed-indometacina',
            sec: '12.3 · Farmacocinética',
            cita: 'respectively, at about 2 hours. Orally administered indomethacin capsules are virtually 100% bioavailable',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas plasmáticas es cercana al 99 % en el intervalo terapéutico esperado.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas es cercana al 99 % en el intervalo terapéutico esperado.',
          ref: {
            f: 'dailymed-indometacina',
            sec: '12.3 · Farmacocinética',
            cita: 'Indomethacin is highly bound to protein in plasma (about 99%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'COX-1 y COX-2',
        efecto: 'Su acción incluye inhibición de COX-1 y COX-2. La ficha describe que el mecanismo completo sigue sin conocerse.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Su acción incluye inhibición de COX-1 y COX-2. La ficha describe que el mecanismo completo sigue sin conocerse.',
            ref: {
              f: 'dailymed-indometacina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibition of cyclooxygenase (COX-1 and COX-2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En plasma circulan el fármaco y varios derivados desmetilados o desbenzoilados. También se forman glucurónidos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En plasma circulan el fármaco y varios derivados desmetilados o desbenzoilados. También se forman glucurónidos.',
          ref: {
            f: 'dailymed-indometacina',
            sec: '12.3 · Farmacocinética',
            cita: 'its desmethyl, desbenzoyl, and desmethyldesbenzoyl metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se recupera aproximadamente un 60 % de la dosis oral en orina y un 33 % en heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se recupera aproximadamente un 60 % de la dosis oral en orina y un 33 % en heces.',
          ref: {
            f: 'dailymed-indometacina',
            sec: '12.3 · Farmacocinética',
            cita: 'About 60% of an oral dose is recovered in urine as drug and metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida media estimada',
      valor: '≈4,5',
      unidad: 'h',
      analito: 'indometacina',
      ref: {
        f: 'dailymed-indometacina',
        sec: '12.3 · Farmacocinética',
        cita: 'mean half-life of indomethacin is estimated to be about 4.5 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-indometacina', 'f7ed39e2-5431-4e47-935c-c7441d058f94', 'INDOMETHACIN CAPSULE', 'Indomethacin', '13', '2025-12-22', '2026-11-12'),
    rengPubchem(3715, 'indometacina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
