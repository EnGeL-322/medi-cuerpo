import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'enalapril',
  presentaciones: [
    {
  id: 'enalapril-cima',
  producto: 'DABONAL 5 mg COMPRIMIDOS',
  titular: 'Dari Pharma S.L.',
  mercado: 'España (UE)',
  forma: 'Comprimido',
  formaFuente: 'COMPRIMIDO',
  liberacion: 'no declarada',
  concentraciones: '5 y 20 mg de maleato de enalapril por comprimido, según la ficha técnica',
  excipientes: [
    'Hidrogenocarbonato de sodio (E500)',
    'Lactosa monohidrato',
    'Almidón de maíz',
    'Estearato de magnesio (E470b)',
    'Óxido férrico rojo (E172, solo en la concentración de 20 mg)'
  ],
  usos: {
    t: 'Tratamiento de la hipertensión, de la insuficiencia cardíaca sintomática y prevención de la insuficiencia cardíaca en pacientes con disfunción ventricular izquierda.',
    ref: { f: 'cima-57787', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento de la hipertensión', codigo: 'FT 4.1' }
  },
  fuente: 'cima-57787',
  advertencias: [
    {
      titulo: 'Hipotensión ortostática',
      texto: 'Raramente se observa hipotensión ortostática en pacientes hipertensos no complicados.',
      organos: [ 'vasos', 'corazon' ],
      ref: {
        f: 'cima-57787',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Raramente se observa hipotensión ortostática en pacientes hipertensos no complicados',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Depleción de volumen',
      texto: 'La hipotensión es más probable si el paciente tiene disminuido el volumen circulante.',
      organos: [ 'vasos', 'rinones' ],
      ref: {
        f: 'cima-57787',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La hipotensión es más probable que ocurra si el paciente hipertenso que recibe Dabonal tiene disminuido el volumen circulante',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [ 'Se registran, entre otras, hipoglucemia como reacción poco frecuente.', 'FT 4.8', 'Poco frecuentes: hipoglucemia' ],
    [
      'Con frecuencia no conocida se ha descrito el síndrome de secreción inadecuada de hormona antidiurética (SIADH).',
      'FT 4.8',
      'Frecuencia no conocida: síndrome de secreción inadecuada de hormona antidiurética (SIADH)'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe rápidamente y alcanza concentraciones séricas máximas en el término de una hora; se absorbe aproximadamente el 60 % de la dosis. La excreción del enalaprilato es principalmente renal: en la orina, alrededor del 40 % de la dosis es enalaprilato y alrededor del 20 % es enalapril intacto.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
        sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
        datos: [
          {
            t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
            ref: {
              f: 'cima-57787',
              sec: '3 · Forma farmacéutica',
              cita: 'Los comprimidos de Dabonal 5 mg son redondos, caras planas biseladas',
              codigo: 'FT 3'
            }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe rápidamente y alcanza concentraciones séricas máximas en el término de una hora; se absorbe aproximadamente el 60 % de la dosis.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe rápidamente y alcanza concentraciones séricas máximas en el término de una hora; se absorbe aproximadamente el 60 % de la dosis.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Enalapril administrado por vía oral se absorbe rápidamente y alcanza concentraciones séricas máximas en el término de una hora',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Según su recuperación en la orina, se absorbe aproximadamente el 60 % del enalapril del comprimido.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'la fracción de enalapril que se absorbe del comprimido de enalapril administrado por vía oral es del 60 % aproximadamente',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La presencia de alimentos en el tubo digestivo no influye en la absorción oral.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La presencia de alimentos en el tubo digestivo no influye en la absorción oral de Dabonal',
              codigo: 'FT 5.2'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'En concentraciones terapéuticamente apropiadas, la unión del enalaprilato a las proteínas del plasma humano no supera el 60 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'En concentraciones terapéuticamente apropiadas, la unión del enalaprilato a las proteínas del plasma humano no supera el 60 %.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'la unión de enalaprilato a proteínas plasmáticas humanas no supera el 60 %',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Enzima conversora de la angiotensina (ECA)',
          efecto: 'Es un inhibidor de la enzima de conversión de angiotensina (ECA), una peptidil dipeptidasa que cataliza la conversión de la angiotensina I.',
          lugar: [ 'vasos', 'corazon', 'rinones' ],
          datos: [
            {
              t: 'Es un inhibidor de la enzima de conversión de angiotensina (ECA), una peptidil dipeptidasa que cataliza la conversión de la angiotensina I.',
              ref: {
                f: 'cima-57787',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'La enzima de conversión de angiotensina (ECA) es una peptidil dipeptidasa que cataliza la conversión de la angiotensina I',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Tras la absorción, el enalapril se hidroliza rápida y extensamente a enalaprilato, un potente inhibidor de la ECA; salvo esta conversión, no hay indicios de un metabolismo significativo.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Tras la absorción, el enalapril se hidroliza rápida y extensamente a enalaprilato, un potente inhibidor de la ECA; salvo esta conversión, no hay indicios de un metabolismo significativo.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Tras la absorción, el enalapril oral se hidroliza rápida y extensamente en enalaprilato, un potente inhibidor de la enzima de conversión de angiotensina',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Enalaprilato',
            actividad: 'activo',
            nota: 'Metabolito activo; la semivida eficaz de acumulación es de 11 horas.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'enalaprilato, un potente inhibidor de la enzima de conversión de angiotensina',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La excreción del enalaprilato es principalmente renal: en la orina, alrededor del 40 % de la dosis es enalaprilato y alrededor del 20 % es enalapril intacto.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La excreción del enalaprilato es principalmente renal: en la orina, alrededor del 40 % de la dosis es enalaprilato y alrededor del 20 % es enalapril intacto.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La excreción de enalaprilato es principalmente renal',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida eficaz de acumulación del enalaprilato tras varias dosis es de 11 horas.',
            ref: {
              f: 'cima-57787',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida eficaz para la acumulación de enalaprilato después de varias dosis de enalapril oral es de 11 horas',
              codigo: 'FT 5.2'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-57787', '57787', 'DABONAL 5 mg COMPRIMIDOS (Dari Pharma S.L.)', '2021-03-26', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones séricas máximas',
    valor: '< 1',
    unidad: 'h',
    analito: 'enalapril',
    ref: {
      f: 'cima-57787',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'alcanza concentraciones séricas máximas en el término de una hora',
      codigo: 'FT 5.2'
    },
    presentacion: 'DABONAL 5 mg COMPRIMIDOS'
  },
  {
    magnitud: 'otra',
    nombre: 'Fracción absorbida (según la orina)',
    valor: '60 (aprox.)',
    unidad: '%',
    analito: 'enalapril',
    ref: { f: 'cima-57787', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es del 60 % aproximadamente', codigo: 'FT 5.2' },
    presentacion: 'DABONAL 5 mg COMPRIMIDOS'
  },
  {
    magnitud: 'union',
    nombre: 'Unión del enalaprilato a proteínas plasmáticas',
    valor: '≤ 60',
    unidad: '%',
    analito: 'enalaprilato',
    ref: {
      f: 'cima-57787',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'la unión de enalaprilato a proteínas plasmáticas humanas no supera el 60 %',
      codigo: 'FT 5.2'
    },
    presentacion: 'DABONAL 5 mg COMPRIMIDOS'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida eficaz de acumulación',
    valor: '11',
    unidad: 'h',
    analito: 'enalaprilato',
    ref: {
      f: 'cima-57787',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La semivida eficaz para la acumulación de enalaprilato después de varias dosis de enalapril oral es de 11 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'DABONAL 5 mg COMPRIMIDOS'
  }
]
} satisfies RengExtensionFicha
