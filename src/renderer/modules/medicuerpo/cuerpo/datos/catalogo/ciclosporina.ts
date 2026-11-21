import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ciclosporina',
    nombre: 'Ciclosporina',
    clase: 'Inmunosupresor inhibidor de calcineurina',
    sinonimos: [ 'ciclosporina', 'cyclosporine', 'Neoral' ],
    formula: 'C62H111N11O12',
    masaMolar: 1202.6,
    smiles: 'CC[C@H]1C(=O)N(CC(=O)N([C@H](C(=O)N[C@H](C(=O)N([C@H](C(=O)N[C@H](C(=O)N[C@@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N([C@H](C(=O)N1)[C@@H]([C@H](C)C/C=C/C)O)C)C(C)C)C)CC(C)C)C)CC(C)C)C)C)C)CC(C)C)C)C(C)C)CC(C)C)C)C',
    inchikey: 'PMATZTZNYRCHOR-CGLBZJNRSA-N',
    cid: 5284373,
    iupac: '(3S,6S,9S,12R,15S,18S,21S,24S,30S,33S)-30-ethyl-33-[(E,1R,2R)-1-hydroxy-2-methylhex-4-enyl]-1,4,7,10,12,15,19,25,28-nonamethyl-6,9,18,24-tetrakis(2-methylpropyl)-3,21-di(propan-2-yl)-1,4,7,10,13,16,19,22,25,28,31-undecazacyclotritriacontane-2,5,8,11,14,17,20,23,26,29,32-undecone',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'ciclosporina-oral',
      producto: 'Neoral · cápsula blanda',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por cápsula, según la etiqueta',
      excipientes: [
        'corn oil',
        'polyoxyl 40 hydrogenated castor oil',
        'tocopherol',
        'gelatin',
        'glycerin',
        'ferrosoferric oxide',
        'propylene glycol',
        'titanium dioxide',
        'cochineal'
      ],
      usos: {
        t: 'Entre los usos de Neoral está la prevención del rechazo en trasplantes renales, hepáticos y cardíacos.',
        ref: {
          f: 'dailymed-ciclosporina',
          sec: '1 · Indicaciones',
          cita: 'prophylaxis of organ rejection in kidney, liver, and heart allogeneic transplants',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ciclosporina',
      reacciones: [
        [ 'Disfunción renal y temblor.', '34084-4', 'renal dysfunction, tremor, hirsutism, hypertension' ],
        [ 'Hipertensión y agrandamiento de las encías.', '34084-4', 'hypertension, and gum hyperplasia' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula blanda: 25 mg o 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Entre los usos de Neoral está la prevención del rechazo en trasplantes renales, hepáticos y cardíacos.',
    actua: 'Reduce la activación de la respuesta inmunitaria al inhibir de forma reversible a los linfocitos. La ficha destaca el efecto en linfocitos T.',
    recorrido: 'La absorción oral es incompleta y depende de la formulación y de la población estudiada. La eliminación es principalmente biliar. Alrededor del 6 % de la dosis se excreta por orina como fármaco y metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda con una formulación que forma una microemulsión en contacto con el agua.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda con una formulación que forma una microemulsión en contacto con el agua.',
          ref: {
            f: 'dailymed-ciclosporina',
            sec: '11 · Descripción',
            cita: 'immediately forms a microemulsion in an aqueous environment',
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
      ocurre: 'La absorción oral es incompleta y depende de la formulación y de la población estudiada.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción oral es incompleta y depende de la formulación y de la población estudiada.',
          ref: { f: 'dailymed-ciclosporina', sec: '12.3 · Farmacocinética', cita: 'absorption of cyclosporine is incomplete', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte entre plasma y células sanguíneas. En el plasma, aproximadamente el 90 % se une a proteínas, principalmente lipoproteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte entre plasma y células sanguíneas. En el plasma, aproximadamente el 90 % se une a proteínas, principalmente lipoproteínas.',
          ref: {
            f: 'dailymed-ciclosporina',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 90% is bound to proteins, primarily lipoproteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Linfocitos T',
        efecto: 'Reduce la activación de la respuesta inmunitaria al inhibir de forma reversible a los linfocitos. La ficha destaca el efecto en linfocitos T.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Reduce la activación de la respuesta inmunitaria al inhibir de forma reversible a los linfocitos. La ficha destaca el efecto en linfocitos T.',
            ref: {
              f: 'dailymed-ciclosporina',
              sec: '12 · Farmacología clínica',
              cita: 'reversible inhibition of immunocompetent lymphocytes',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma principalmente por enzimas CYP3A en el hígado y en menor grado en el tubo digestivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente por enzimas CYP3A en el hígado y en menor grado en el tubo digestivo.',
          ref: {
            f: 'dailymed-ciclosporina',
            sec: '12 · Farmacología clínica',
            cita: 'extensively metabolized by the cytochrome P-450 3A enzyme system in the liver',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es principalmente biliar. Alrededor del 6 % de la dosis se excreta por orina como fármaco y metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es principalmente biliar. Alrededor del 6 % de la dosis se excreta por orina como fármaco y metabolitos.',
          ref: {
            f: 'dailymed-ciclosporina',
            sec: '12.3 · Farmacocinética',
            cita: 'only 6% of the dose (parent drug and metabolites) excreted in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '≈8,4',
      unidad: 'h',
      analito: 'ciclosporina',
      condiciones: 'intervalo descrito de 5–18 h',
      ref: { f: 'dailymed-ciclosporina', sec: '12.3 · Farmacocinética', cita: 'terminal half-life of approximately 8.4 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ciclosporina', '94461af3-11f1-4670-95d4-2965b9538ae3', 'NEORAL (CYCLOSPORINE) CAPSULE, LIQUID FILLED NEORAL (CYCLOSPORINE) SOLUTION', 'Neoral', '30', '2026-08-11', '2026-11-12'),
    rengPubchem(5284373, 'ciclosporina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
