import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'isotretinoina',
    nombre: 'Isotretinoína',
    clase: 'Retinoide sistémico',
    sinonimos: [ 'isotretinoína', 'isotretinoin', 'Absorica' ],
    formula: 'C20H28O2',
    masaMolar: 300.4,
    smiles: 'CC1=C(C(CCC1)(C)C)/C=C/C(=C/C=C/C(=C\\C(=O)O)/C)/C',
    inchikey: 'SHGAZHPCJJPHSC-XFYACQKRSA-N',
    cid: 5282379,
    iupac: '(2Z,4E,6E,8E)-3,7-dimethyl-9-(2,6,6-trimethylcyclohexen-1-yl)nona-2,4,6,8-tetraenoic acid',
    area: 'Piel'
  },
  presentaciones: [
    {
      id: 'isotretinoina-oral',
      producto: 'Absorica · cápsula',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg, 30 mg, 40 mg, 25 mg o 35 mg por cápsula, según la etiqueta',
      excipientes: [
        'soybean oil',
        'sorbitan monooleate',
        'propyl gallate',
        'titanium dioxide',
        'ferric oxide yellow',
        'potassium hydroxide',
        'propylene glycol',
        'shellac',
        'peg-32 hydrogenated palm glycerides',
        'gelatin, unspecified'
      ],
      usos: {
        t: 'Acné nodular grave resistente en pacientes no embarazadas o no embarazados desde los 12 años, según los criterios de la etiqueta.',
        ref: {
          f: 'dailymed-isotretinoina',
          sec: '1 · Indicaciones',
          cita: 'treatment of severe recalcitrant nodular acne in non-pregnant patients 12 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-isotretinoina',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'La isotretinoína está contraindicada en el embarazo por el riesgo de defectos congénitos graves.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-isotretinoina',
            sec: 'Advertencia destacada',
            cita: 'can cause life-threatening birth defects and is contraindicated in pregnancy',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [ 'Sequedad de labios, piel y ojos.', '34084-4', 'dry lips, dry skin, back pain, dry eye' ],
        [ 'Dolor de espalda y dolor articular.', '34084-4', 'back pain, dry eye, arthralgia' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 10 mg, 20 mg, 30 mg, 40 mg, 25 mg o 35 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Acné nodular grave resistente en pacientes no embarazadas o no embarazados desde los 12 años, según los criterios de la etiqueta.',
    actua: 'Se asocia con menor producción de sebo y cambios en las glándulas sebáceas. El mecanismo exacto de su efecto en el acné nodular sigue sin definirse.',
    recorrido: 'En un estudio con Absorica, el tiempo medio al pico fue de 2,9 h en ayunas y 6,4 h con comida. Se recuperaron metabolitos en proporciones similares en heces y orina. En el estudio de Absorica la semivida media del fármaco fue de 18 h.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula oral de Absorica, con una formulación distinta de Absorica LD.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula oral de Absorica, con una formulación distinta de Absorica LD.',
          ref: {
            f: 'dailymed-isotretinoina',
            sec: '3 · Formas y concentraciones',
            cita: 'Although ABSORICA and ABSORICA LD have a 20 mg strength',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En un estudio con Absorica, el tiempo medio al pico fue de 2,9 h en ayunas y 6,4 h con comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En un estudio con Absorica, el tiempo medio al pico fue de 2,9 h en ayunas y 6,4 h con comida.',
          ref: {
            f: 'dailymed-isotretinoina',
            sec: '12.3 · Farmacocinética',
            cita: 'The ABSORICA mean T max was 6.4 hours under fed conditions and 2.9 hours under fasting conditions',
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
      ocurre: 'Más del 99,9 % se une a proteínas plasmáticas, principalmente a albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99,9 % se une a proteínas plasmáticas, principalmente a albúmina.',
          ref: {
            f: 'dailymed-isotretinoina',
            sec: '12.3 · Farmacocinética',
            cita: 'more than 99.9% bound to plasma proteins, primarily albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Glándulas sebáceas',
        efecto: 'Se asocia con menor producción de sebo y cambios en las glándulas sebáceas. El mecanismo exacto de su efecto en el acné nodular sigue sin definirse.',
        lugar: [ 'piel' ],
        datos: [
          {
            t: 'Se asocia con menor producción de sebo y cambios en las glándulas sebáceas. El mecanismo exacto de su efecto en el acné nodular sigue sin definirse.',
            ref: {
              f: 'dailymed-isotretinoina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibits sebaceous gland function and keratinization',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se forman varios metabolitos y conjugados. CYP2C8, CYP2C9, CYP3A4 y CYP2B6 intervinieron en estudios in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se forman varios metabolitos y conjugados. CYP2C8, CYP2C9, CYP3A4 y CYP2B6 intervinieron en estudios in vitro.',
          ref: {
            f: 'dailymed-isotretinoina',
            sec: '12.3 · Farmacocinética',
            cita: 'Isotretinoin is primarily metabolized by CYP2C8, 2C9, 3A4, and 2B6 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se recuperaron metabolitos en proporciones similares en heces y orina. En el estudio de Absorica la semivida media del fármaco fue de 18 h.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se recuperaron metabolitos en proporciones similares en heces y orina. En el estudio de Absorica la semivida media del fármaco fue de 18 h.',
          ref: { f: 'dailymed-isotretinoina', sec: '12.3 · Farmacocinética', cita: 'in feces and urine in relatively equal amounts', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio al pico en ayunas',
      valor: '2,9',
      unidad: 'h',
      analito: 'isotretinoína',
      condiciones: 'dosis única de 40 mg de Absorica en el estudio',
      ref: {
        f: 'dailymed-isotretinoina',
        sec: '12.3 · Farmacocinética',
        cita: '2.9 hours under fasting conditions following administration of a single 40 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '18',
      unidad: 'h',
      analito: 'isotretinoína',
      condiciones: 'dosis única de 40 mg de Absorica',
      ref: {
        f: 'dailymed-isotretinoina',
        sec: '12.3 · Farmacocinética',
        cita: '18 hours and 38 hours, respectively, after a single oral ABSORICA 40 mg dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-isotretinoina', '3ef0cff8-19c1-4441-b780-fca6c7ee1615', 'ABSORICA (ISOTRETINOIN) CAPSULE ABSORICA LD (ISOTRETINOIN) CAPSULE', 'Absorica', '21', '2026-08-21', '2026-11-12'),
    rengPubchem(5282379, 'isotretinoína', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
