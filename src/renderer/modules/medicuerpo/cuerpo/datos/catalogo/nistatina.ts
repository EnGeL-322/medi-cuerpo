import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nistatina',
    nombre: 'Nistatina',
    clase: 'Antifúngico poliénico de acción local',
    sinonimos: [ 'nystatin', 'Mycostatin' ],
    formula: 'C47H75NO17',
    masaMolar: 926.1,
    smiles: 'C[C@H]1/C=C/C=C/CC/C=C/C=C/C=C/C=C/C(CC2C(C(C[C@](O2)(CC(C(CCC(CC(CC(CC(=O)O[C@H]([C@@H]([C@@H]1O)C)C)O)O)O)O)O)O)O)C(=O)O)O[C@@H]3[C@H]([C@H]([C@@H]([C@H](O3)C)O)N)O',
    inchikey: 'VQOXZBDYSJBXMA-RKEBNKJGSA-N',
    cid: 6433272,
    iupac: '(1S,15S,16R,17R,18S,19E,21E,25E,27E,29E,31E)-33-[(2S,3S,4S,5S,6R)-4-amino-3,5-dihydroxy-6-methyloxan-2-yl]oxy-1,3,4,7,9,11,17,37-octahydroxy-15,16,18-trimethyl-13-oxo-14,39-dioxabicyclo[33.3.1]nonatriaconta-19,21,25,27,29,31-hexaene-36-carboxylic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'nistatina-oral',
      producto: 'MYCOSTATIN 100.000 UI/ml SUSPENSION ORAL',
      titular: 'Substipharm',
      mercado: 'España (UE)',
      forma: 'Suspensión oral',
      formaFuente: 'SUSPENSIÓN ORAL',
      liberacion: 'no declarada',
      concentraciones: '100.000 UI de nistatina por mL de suspensión oral',
      excipientes: [
        'Sacarosa',
        'etanol al 96 %',
        'carmelosa sódica (E-466)',
        'aldehído cinámico',
        'esencia de menta',
        'aroma de cerezas',
        'hidrogenofosfato de disodio anhidro',
        'glicerol (E-422)',
        'parahidroxibenzoato de metilo (E-218)',
        'parahidroxibenzoato de propilo (E-216)',
        'hidróxido de sodio',
        'ácido clorhídrico',
        'agua purificada'
      ],
      usos: {
        t: 'Candidiasis de la boca y del intestino.',
        ref: { f: 'cima-28262', sec: '4.1 · Indicaciones terapéuticas', cita: 'Candidiasis oral Candidiasis intestinal', codigo: 'FT 4.1' }
      },
      fuente: 'cima-28262',
      advertencias: [
        {
          titulo: 'No sirve para infecciones generalizadas',
          texto: 'No debe usarse para tratar infecciones por hongos que afectan a todo el organismo.',
          organos: [ 'sitio-infeccion' ],
          ref: {
            f: 'cima-28262',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'no se debe utilizar en el tratamiento de las infecciones fúngicas sistémicas',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Contiene sacarosa',
          texto: 'Cada mL lleva 500 mg de sacarosa, algo a tener en cuenta en personas con diabetes.',
          organos: [],
          ref: {
            f: 'cima-28262',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Este medicamento contiene 500 mg de sacarosa por ml',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Náuseas, vómitos, malestar digestivo y diarrea (poco frecuentes), sobre todo con dosis altas.',
          'FT 4.8',
          'Poco frecuentes : náuseas, vómitos'
        ],
        [
          'Erupción en la piel, incluida urticaria; muy rara vez, síndrome de Stevens-Johnson.',
          'FT 4.8',
          'se ha comunicado la aparición de rash, incluyendo urticaria'
        ],
        [ 'Hipersensibilidad y angioedema, incluido edema de la cara.', 'FT 4.8', 'casos de hipersensibilidad y angioedema, incluyendo edema facial' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Suspensión oral: 100.000 UI de nistatina por mL de suspensión oral. Los excipientes no son el principio activo.',
    usos: 'Candidiasis de la boca y del intestino.',
    actua: 'Se une a los esteroles de la membrana de los hongos sensibles (Candida) y forma canales iónicos: la membrana deja escapar el contenido de la célula. No actúa contra bacterias, protozoos ni virus.',
    recorrido: 'Apenas se absorbe en el tubo digestivo: por eso su acción es esencialmente local. La mayor parte de la dosis tomada por boca sale sin cambios con las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'La suspensión se toma por la boca, donde ya puede actuar sobre los hongos.',
      ocurre: 'La suspensión ya va dispersa en el líquido: no hay comprimido que disgregar y entra en contacto con la boca al tomarla.',
      sigue: 'La suspensión sigue por el esófago y el estómago hasta el intestino.',
      datos: [
        {
          t: 'La suspensión ya va dispersa en el líquido: no hay comprimido que disgregar y entra en contacto con la boca al tomarla.',
          ref: { f: 'cima-28262', sec: '3 · Forma farmacéutica', cita: 'Suspensión oral amarillenta, opaca y homogénea', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'luz-intestinal' ],
      organosGenerales: [],
      llega: 'La suspensión recorre el estómago y el intestino.',
      ocurre: 'Apenas se absorbe en el tubo digestivo: por eso su acción es esencialmente local.',
      sigue: 'Casi todo sigue dentro del tubo digestivo, donde actúa.',
      datos: [
        {
          t: 'Apenas se absorbe en el tubo digestivo: por eso su acción es esencialmente local.',
          ref: {
            f: 'cima-28262',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción gastrointestinal de nistatina es mínima, por eso su acción es esencialmente local',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'boca', 'luz-intestinal' ],
      llega: 'La nistatina sigue en el tubo digestivo.',
      ocurre: 'Como casi no pasa a la sangre, actúa donde están los hongos: en la boca y en el interior del intestino.',
      sigue: 'Avanza por el intestino hacia su salida con las heces.',
      datos: [
        {
          t: 'Como casi no pasa a la sangre, actúa donde están los hongos: en la boca y en el interior del intestino.',
          ref: { f: 'cima-28262', sec: '5.2 · Propiedades farmacocinéticas', cita: 'por eso su acción es esencialmente local', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Esteroles de la membrana de los hongos',
        efecto: 'Se une a los esteroles de la membrana de los hongos sensibles (Candida) y forma canales iónicos: la membrana deja escapar el contenido de la célula. No actúa contra bacterias, protozoos ni virus.',
        lugar: [ 'boca', 'luz-intestinal' ],
        datos: [
          {
            t: 'Se une a los esteroles de la membrana de los hongos sensibles (Candida) y forma canales iónicos: la membrana deja escapar el contenido de la célula. No actúa contra bacterias, protozoos ni virus.',
            ref: {
              f: 'cima-28262',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Actúa uniéndose a los esteroles de la membrana celular de las especies sensibles de Candida',
              codigo: 'FT 5.1'
            }
          },
          {
            t: 'No tiene actividad contra bacterias, protozoos ni virus.',
            ref: {
              f: 'cima-28262',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Nistatina no posee actividad contra bacterias, protozoos o virus',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'luz-intestinal' ],
      llega: 'La nistatina recorre el intestino.',
      ocurre: 'La ficha técnica no describe que se transforme: la mayor parte de la dosis sale sin cambios.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'La ficha técnica no describe que se transforme: la mayor parte de la dosis sale sin cambios.',
          ref: { f: 'cima-28262', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se elimina inalterada por las heces', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega al final del intestino la nistatina no absorbida.',
      ocurre: 'La mayor parte de la dosis tomada por boca sale sin cambios con las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte de la dosis tomada por boca sale sin cambios con las heces.',
          ref: {
            f: 'cima-28262',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La mayor parte de la dosis de nistatina administrada por vía oral se elimina inalterada por las heces',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [],
  fuentes: [
    rengFichaCIMA('cima-28262', '28262', 'MYCOSTATIN 100.000 UI/ml SUSPENSION ORAL (Substipharm)', '2025-07-24', '2026-11-12'),
    rengPubchem(6433272, 'nystatin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
