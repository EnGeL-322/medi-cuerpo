import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'captopril',
    nombre: 'Captopril',
    clase: 'Inhibidor de la enzima convertidora de angiotensina (IECA)',
    sinonimos: [ 'captopril', 'Capoten' ],
    formula: 'C9H15NO3S',
    masaMolar: 217.29,
    smiles: 'C[C@H](CS)C(=O)N1CCC[C@H]1C(=O)O',
    inchikey: 'FAKRSMQSSFJEIM-RQJHMYQMSA-N',
    cid: 44093,
    iupac: '(2S)-1-[(2S)-2-methyl-3-sulfanylpropanoyl]pyrrolidine-2-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'captopril-oral',
      producto: 'Captopril · comprimido',
      titular: 'SOLCO HEALTHCARE US, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'microcrystalline cellulose', 'starch, corn', 'stearic acid' ],
      usos: {
        t: 'Tratamiento de la hipertensión, entre otros usos de la etiqueta.',
        ref: {
          f: 'dailymed-captopril',
          sec: '1 · Indicaciones',
          cita: 'Captopril tablets, USP are indicated for the treatment of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-captopril',
      advertencias: [
        {
          titulo: 'Toxicidad fetal',
          texto: 'Los fármacos que actúan sobre el sistema renina-angiotensina pueden dañar al feto; hay que suspenderlo en cuanto se detecta el embarazo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-captopril',
            sec: 'Advertencia destacada',
            cita: 'Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Angioedema',
          texto: 'Puede aparecer angioedema de la cara, las extremidades, los labios o la lengua.',
          organos: [ 'piel', 'vias-respiratorias' ],
          ref: { f: 'dailymed-captopril', sec: 'Advertencias', cita: 'Angioedema involving the extremities, face', codigo: '34071-1' }
        }
      ],
      reacciones: [
        [ 'Proteinuria en alrededor de 1 de cada 100 pacientes.', '34084-4', 'About one of 100 patients developed proteinuria' ],
        [ 'Neutropenia o agranulocitosis; también anemia, trombocitopenia y pancitopenia.', '34084-4', 'Neutropenia/agranulocytosis has occurred' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 12.5 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, entre otros usos de la etiqueta.',
    actua: 'Inhibe de forma competitiva la enzima convertidora de angiotensina: se forma menos angiotensina II y se frena el sistema renina-angiotensina-aldosterona.',
    recorrido: 'Se absorbe rápido, con el pico en la sangre hacia la hora; la comida reduce la absorción un 30-40 %. Según el marcado con carbono 14, se absorbe como mínimo alrededor del 75 %. En 24 horas, más del 95 % de la dosis absorbida sale por la orina, del 40 % al 50 % sin cambios. La semivida de la radiactividad total es probablemente inferior a 3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-captopril', sec: '11 · Descripción', cita: 'Captopril tablets, USP, are a specific competitive inhibitor', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido, con el pico en la sangre hacia la hora; la comida reduce la absorción un 30-40 %. Según el marcado con carbono 14, se absorbe como mínimo alrededor del 75 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido, con el pico en la sangre hacia la hora; la comida reduce la absorción un 30-40 %. Según el marcado con carbono 14, se absorbe como mínimo alrededor del 75 %.',
          ref: {
            f: 'dailymed-captopril',
            sec: '12.3 · Farmacocinética',
            cita: 'rapid absorption occurs with peak blood levels at about one hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida reduce la absorción un 30 % a 40 %.',
          ref: {
            f: 'dailymed-captopril',
            sec: '12.3 · Farmacocinética',
            cita: 'The presence of food in the gastrointestinal tract reduces absorption by about 30% to 40%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Del 25 % al 30 % del fármaco circulante va unido a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Del 25 % al 30 % del fármaco circulante va unido a proteínas del plasma.',
          ref: {
            f: 'dailymed-captopril',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 25% to 30% of the circulating drug is bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzima convertidora de angiotensina (ECA)',
        efecto: 'Inhibe de forma competitiva la enzima convertidora de angiotensina: se forma menos angiotensina II y se frena el sistema renina-angiotensina-aldosterona.',
        lugar: [ 'vasos', 'rinones' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva la enzima convertidora de angiotensina: se forma menos angiotensina II y se frena el sistema renina-angiotensina-aldosterona.',
            ref: {
              f: 'dailymed-captopril',
              sec: '12.1 · Mecanismo de acción',
              cita: 'appear to result primarily from suppression of the renin-angiotensin-aldosterone system',
              codigo: '43679-0'
            }
          },
          {
            t: 'La ECA convierte la angiotensina I en angiotensina II.',
            ref: {
              f: 'dailymed-captopril',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Angiotensin I is then converted by angiotensin converting enzyme (ACE)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una parte forma el dímero disulfuro del captopril y el disulfuro captopril-cisteína.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una parte forma el dímero disulfuro del captopril y el disulfuro captopril-cisteína.',
          ref: {
            f: 'dailymed-captopril',
            sec: '12.3 · Farmacocinética',
            cita: 'most of the remainder is the disulfide dimer of captopril and captopril-cysteine disulfide',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Dímero disulfuro del captopril',
          actividad: 'desconocida',
          ref: { f: 'dailymed-captopril', sec: '12.3 · Farmacocinética', cita: 'the disulfide dimer of captopril', codigo: '43682-4' }
        },
        {
          nombre: 'Disulfuro captopril-cisteína',
          actividad: 'desconocida',
          ref: { f: 'dailymed-captopril', sec: '12.3 · Farmacocinética', cita: 'captopril-cysteine disulfide', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 24 horas, más del 95 % de la dosis absorbida sale por la orina, del 40 % al 50 % sin cambios. La semivida de la radiactividad total es probablemente inferior a 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 24 horas, más del 95 % de la dosis absorbida sale por la orina, del 40 % al 50 % sin cambios. La semivida de la radiactividad total es probablemente inferior a 3 horas.',
          ref: {
            f: 'dailymed-captopril',
            sec: '12.3 · Farmacocinética',
            cita: 'In a 24-hour period, over 95% of the absorbed dose is eliminated in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en la sangre',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'captopril',
      ref: { f: 'dailymed-captopril', sec: '12.3 · Farmacocinética', cita: 'peak blood levels at about one hour', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Absorción mínima media',
      valor: '75 (aprox.)',
      unidad: '%',
      analito: 'captopril',
      condiciones: 'marcado con carbono 14',
      ref: { f: 'dailymed-captopril', sec: '12.3 · Farmacocinética', cita: 'average minimal absorption is approximately 75%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '25-30',
      unidad: '%',
      analito: 'captopril',
      ref: {
        f: 'dailymed-captopril',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 25% to 30% of the circulating drug is bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida aparente de la radiactividad total',
      valor: '< 3 (probable)',
      unidad: 'h',
      analito: 'captopril y metabolitos (radiactividad total)',
      ref: {
        f: 'dailymed-captopril',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent elimination half-life for total radioactivity in blood is probably less than 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado en la orina en 24 h',
      valor: '> 95',
      unidad: '% de la dosis',
      analito: 'captopril y metabolitos',
      condiciones: 'de la dosis absorbida',
      ref: { f: 'dailymed-captopril', sec: '12.3 · Farmacocinética', cita: 'over 95% of the absorbed dose is eliminated in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-captopril', '2d3779b0-83d9-4b6f-a043-f7768cd7fce6', 'CAPTOPRIL TABLET', 'Captopril', '2', '2026-04-03', '2026-11-12'),
    rengPubchem(44093, 'captopril', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
