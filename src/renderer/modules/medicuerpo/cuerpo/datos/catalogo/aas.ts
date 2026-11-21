import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'aas',
    nombre: 'Ácido acetilsalicílico',
    clase: 'Analgésico, antipirético y antiinflamatorio (salicilato)',
    sinonimos: [ 'aspirin', 'aspirina', 'acetylsalicylic acid' ],
    formula: 'C9H8O4',
    masaMolar: 180.16,
    smiles: 'CC(=O)OC1=CC=CC=C1C(=O)O',
    inchikey: 'BSYNRYMUTXBXSQ-UHFFFAOYSA-N',
    cid: 2244,
    iupac: '2-acetyloxybenzoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'aas-oral',
      producto: 'ASPIRINA 500 mg COMPRIMIDOS',
      titular: 'Bayer Hispania S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '500 mg de ácido acetilsalicílico por comprimido',
      excipientes: [ 'Celulosa en polvo', 'almidón de maíz' ],
      usos: {
        t: 'Alivio de dolores ocasionales leves o moderados (de cabeza, dentales, menstruales, musculares o de espalda) y de la fiebre en adultos y mayores de 16 años.',
        ref: {
          f: 'cima-2011',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'alivio sintomático de los dolores ocasionales leves o moderados',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-2011',
      advertencias: [
        {
          titulo: 'Alcohol',
          texto: 'No debe tomarse alcohol: aumenta los efectos gastrointestinales y, en bebedores habituales, puede provocar hemorragia gástrica.',
          organos: [ 'estomago' ],
          ref: {
            f: 'cima-2011',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'No debe ingerirse alcohol ya que incrementa los efectos adversos gastrointestinales del ácido acetilsalicílico',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En general poco frecuentes pero a veces importantes; afectan sobre todo al aparato digestivo. Entre el 5 % y el 7 % de los pacientes tiene algún efecto adverso.',
          'FT 4.8',
          'El 5-7% de los pacientes experimenta algún tipo de efecto adverso'
        ],
        [
          'Frecuentes: más riesgo de hemorragia, hematomas, sangrado nasal, de encías y urogenital.',
          'FT 4.8',
          'aumento del riesgo de hemorragia, hemorragias asociadas al procedimiento, hematomas, epistaxis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 500 mg de ácido acetilsalicílico por comprimido. Los excipientes no son el principio activo.',
    usos: 'Alivio de dolores ocasionales leves o moderados (de cabeza, dentales, menstruales, musculares o de espalda) y de la fiebre en adultos y mayores de 16 años.',
    actua: 'Inhibe la ciclooxigenasa, enzima de la síntesis de prostaglandinas: se estimulan menos los receptores del dolor en los tejidos; en el alivio del dolor y de la fiebre también intervienen efectos sobre el hipotálamo.',
    recorrido: 'Se absorbe rápida y completamente y, durante y después de la absorción, se convierte en ácido salicílico. Con comprimidos, el pico del ácido acetilsalicílico llega hacia los 30 minutos y el del salicílico hacia las 2 horas. El ácido salicílico y sus metabolitos salen sobre todo por la orina; la semivida del salicílico va de 2-3 horas con dosis bajas a unas 15 horas con dosis altas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo, sin cubierta especial.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo, sin cubierta especial.',
          ref: { f: 'cima-2011', sec: '3 · Forma farmacéutica', cita: 'Comprimidos redondos de color blanco', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y completamente y, durante y después de la absorción, se convierte en ácido salicílico. Con comprimidos, el pico del ácido acetilsalicílico llega hacia los 30 minutos y el del salicílico hacia las 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente y, durante y después de la absorción, se convierte en ácido salicílico. Con comprimidos, el pico del ácido acetilsalicílico llega hacia los 30 minutos y el del salicílico hacia las 2 horas.',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción del ácido acetilsalicílico en el tracto gastrointestinal tras su administración oral es rápida y completa',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Durante y después de la absorción se convierte en ácido salicílico.',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Durante y después de la absorción el ácido acetilsalicílico se convierte en su principal metabolito, ácido salicílico',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El ácido acetilsalicílico y el salicílico se unen en un 80-90 % a las proteínas del plasma, sobre todo a la albúmina; el salicílico atraviesa la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El ácido acetilsalicílico y el salicílico se unen en un 80-90 % a las proteínas del plasma, sobre todo a la albúmina; el salicílico atraviesa la placenta.',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se unen del 80 % al 90% a las proteínas plasmáticas, especialmente a albúmina',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa (COX)',
        efecto: 'Inhibe la ciclooxigenasa, enzima de la síntesis de prostaglandinas: se estimulan menos los receptores del dolor en los tejidos; en el alivio del dolor y de la fiebre también intervienen efectos sobre el hipotálamo.',
        lugar: [ 'tejidos', 'encefalo' ],
        datos: [
          {
            t: 'Inhibe la ciclooxigenasa, enzima de la síntesis de prostaglandinas: se estimulan menos los receptores del dolor en los tejidos; en el alivio del dolor y de la fiebre también intervienen efectos sobre el hipotálamo.',
            ref: {
              f: 'cima-2011',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Su mecanismo de acción se basa en su efecto inhibitorio sobre la enzima ciclooxigenasa',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma rápido en ácido salicílico, su metabolito activo, por hidrólisis que empieza en la mucosa intestinal y ocurre sobre todo en el hígado; después se forman ácido salicilúrico, glucurónidos y ácido gentísico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma rápido en ácido salicílico, su metabolito activo, por hidrólisis que empieza en la mucosa intestinal y ocurre sobre todo en el hígado; después se forman ácido salicilúrico, glucurónidos y ácido gentísico.',
          ref: { f: 'cima-2011', sec: '5.2 · Propiedades farmacocinéticas', cita: 'este proceso tiene lugar principalmente en el hígado', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido salicílico',
          actividad: 'activo',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se convierte rápidamente en su principal metabolito activo, el ácido salicílico',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Ácido salicilúrico y glucurónidos',
          actividad: 'desconocida',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sus metabolitos son ácido salicilúrico, glucurónido salicil-fenólico',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El ácido salicílico y sus metabolitos salen sobre todo por la orina; la semivida del salicílico va de 2-3 horas con dosis bajas a unas 15 horas con dosis altas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El ácido salicílico y sus metabolitos salen sobre todo por la orina; la semivida del salicílico va de 2-3 horas con dosis bajas a unas 15 horas con dosis altas.',
          ref: {
            f: 'cima-2011',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El ácido salicílico y sus metabolitos se excretan principalmente por vía renal',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '5,4',
      unidad: 'µg/mL',
      analito: 'ácido acetilsalicílico',
      condiciones: 'comprimidos',
      ref: {
        f: 'cima-2011',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la concentración plasmática máxima media (Cmax) del ácido acetilsalicílico es de 5,4 µg/ml',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima (mediana)',
      valor: '30',
      unidad: 'min',
      analito: 'ácido acetilsalicílico',
      condiciones: 'comprimidos',
      ref: {
        f: 'cima-2011',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la mediana del tiempo en alcanzar esta concentración (tmax) es de 30 minutos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'Exposición total media (AUC)',
      valor: '6,2',
      unidad: 'µg·h/mL',
      analito: 'ácido acetilsalicílico',
      condiciones: 'comprimidos',
      ref: {
        f: 'cima-2011',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La exposición total media del ácido acetilsalicílico (AUC) es de 6,2',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '25,4',
      unidad: 'µg/mL',
      analito: 'ácido salicílico (metabolito activo)',
      condiciones: 'comprimidos',
      ref: { f: 'cima-2011', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Para el ácido salicílico, la Cmax media es de 25,4 µg/ml', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima (mediana)',
      valor: '2',
      unidad: 'h',
      analito: 'ácido salicílico (metabolito activo)',
      condiciones: 'comprimidos',
      ref: { f: 'cima-2011', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la mediana de la tmax es de 2 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2-3 (dosis bajas) a 15 (dosis altas)',
      unidad: 'h',
      analito: 'ácido salicílico (metabolito activo)',
      ref: {
        f: 'cima-2011',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación del ácido salicílico oscila entre 2 y 3 horas tras dosis bajas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '80-90',
      unidad: '%',
      analito: 'ácido acetilsalicílico y ácido salicílico',
      ref: { f: 'cima-2011', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se unen del 80 % al 90% a las proteínas plasmáticas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-2011', '2011', 'ASPIRINA 500 mg COMPRIMIDOS (Bayer Hispania S.L.)', '2026-06-18', '2026-11-12'),
    rengPubchem(2244, 'aspirin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
