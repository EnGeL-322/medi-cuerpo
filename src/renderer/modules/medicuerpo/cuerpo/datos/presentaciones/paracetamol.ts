import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'paracetamol',
  presentaciones: [
    {
  id: 'paracetamol-kern-solucion',
  producto: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG',
  titular: 'Kern Pharma S.L.',
  mercado: 'España (UE)',
  forma: 'Solución oral',
  formaFuente: 'SOLUCIÓN ORAL',
  liberacion: 'no declarada',
  concentraciones: '100 mg/mL de paracetamol, según la ficha técnica',
  excipientes: [
    'Macrogol 600',
    'Glicerol (E-422)',
    'Sucralosa (E-955)',
    'Enmascarador del sabor (contiene propilenglicol E-1520)',
    'Aroma de fresa (contiene propilenglicol E-1520)',
    'Rojo carmín (E-120) (contiene glucosa)',
    'Agua purificada'
  ],
  usos: {
    t: 'Tratamiento sintomático de la fiebre y del dolor leve o moderado.',
    ref: {
      f: 'cima-69429',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'está indicado en el tratamiento sintomático de la fiebre y dolor leve o moderado',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-69429',
  advertencias: [
    {
      titulo: 'Precaución en anemia y afecciones cardíacas, pulmonares o renales',
      texto: 'Debe usarse con precaución, evitando tratamientos prolongados, en pacientes con anemia, afecciones cardíacas o pulmonares y disfunción renal grave.',
      organos: [ 'sangre', 'corazon', 'pulmones', 'rinones' ],
      ref: {
        f: 'cima-69429',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'El paracetamol debe usarse con precaución, evitando tratamientos prolongados en caso de: pacientes con anemia, afecciones cardíacas afecciones pulmonares, disfunción renal grave',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Acidosis metabólica con desequilibrio aniónico alto',
      texto: 'Se han notificado casos por acidosis piroglutámica en pacientes con enfermedad grave o con deficiencia de glutatión.',
      organos: [ 'sangre' ],
      ref: {
        f: 'cima-69429',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se han notificado casos de acidosis metabólica con desequilibrio aniónico alto (AMDAA) debido a acidosis piroglutámico',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Las reacciones adversas del paracetamol son, por lo general, raras o muy raras.',
      'FT 4.8',
      'Las reacciones adversas del paracetamol son, por lo general, raras o muy raras'
    ],
    [ 'Muy raras: reacciones de hipersensibilidad y hepatotoxicidad (ictericia).', 'FT 4.8', 'Muy raras: Hepatotoxicidad (ictericia)' ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  excipientesRiesgo: [
    {
      nombre: 'Propilenglicol',
      motivo: 'La ficha advierte de que la administración conjunta con un sustrato de la alcohol deshidrogenasa, como el etanol, puede causar reacciones adversas graves en recién nacidos.',
      vias: [ 'oral' ],
      ref: {
        f: 'cima-69429',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'La administración conjunta con cualquier sustrato para el alcohol deshidrogenasa tal como el etanol puede provocar reacciones adversas graves en recién nacidos',
        codigo: 'FT 4.4'
      }
    }
  ],
  recorridoPropio: {
    resumen: 'Por vía oral su biodisponibilidad es del 75-85 % y se absorbe amplia y rápidamente. Se elimina sobre todo por la orina como conjugado con ácido glucurónico y, en menor proporción, con ácido sulfúrico y cisteína; menos del 5 % se excreta sin cambios.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Solución oral: líquido transparente de color rojo y olor a fresa; el principio activo ya está disuelto.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Solución oral: líquido transparente de color rojo y olor a fresa; el principio activo ya está disuelto.',
            ref: {
              f: 'cima-69429',
              sec: '3 · Forma farmacéutica',
              cita: 'Solución transparente, de color rojo y con olor característico a fresa',
              codigo: 'FT 3'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Por vía oral su biodisponibilidad es del 75-85 % y se absorbe amplia y rápidamente.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Por vía oral su biodisponibilidad es del 75-85 % y se absorbe amplia y rápidamente.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Por vía oral su biodisponibilidad es del 75-85%. Es absorbido amplia y rápidamente',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El tiempo hasta la concentración máxima es de 0,5-2 horas, según la forma farmacéutica.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'con un tiempo hasta la concentración máxima de 0,5-2 horas',
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
        ocurre: 'El grado de unión a proteínas plasmáticas es de alrededor del 10 %.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El grado de unión a proteínas plasmáticas es de alrededor del 10 %.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El grado de unión a proteínas plasmáticas es de un 10%',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Síntesis de prostaglandinas (mecanismo no totalmente determinado)',
          efecto: 'Es un analgésico con propiedades antipiréticas; el mecanismo de la acción analgésica no está totalmente determinado y puede actuar sobre todo inhibiendo la síntesis de prostaglandinas en el sistema nervioso central.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Es un analgésico con propiedades antipiréticas; el mecanismo de la acción analgésica no está totalmente determinado y puede actuar sobre todo inhibiendo la síntesis de prostaglandinas en el sistema nervioso central.',
              ref: {
                f: 'cima-69429',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'El paracetamol es un fármaco analgésico que también posee propiedades antipiréticas',
                codigo: 'FT 5.1'
              }
            },
            {
              t: 'Puede actuar predominantemente inhibiendo la síntesis de prostaglandinas a nivel del sistema nervioso central.',
              ref: {
                f: 'cima-69429',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'El paracetamol puede actuar predominantemente inhibiendo la síntesis de prostaglandinas a nivel del sistema nervioso central',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza fundamentalmente en el hígado (90-95 %), con un efecto de primer paso hepático.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza fundamentalmente en el hígado (90-95 %), con un efecto de primer paso hepático.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El paracetamol se metaboliza fundamentalmente en el hígado (90-95%)',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Su metabolismo experimenta un efecto de primer paso hepático.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El metabolismo del paracetamol experimenta un efecto de primer paso hepático',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: []
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Se elimina sobre todo por la orina como conjugado con ácido glucurónico y, en menor proporción, con ácido sulfúrico y cisteína; menos del 5 % se excreta sin cambios.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Se elimina sobre todo por la orina como conjugado con ácido glucurónico y, en menor proporción, con ácido sulfúrico y cisteína; menos del 5 % se excreta sin cambios.',
            ref: {
              f: 'cima-69429',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El paracetamol se elimina mayoritariamente en la orina como un conjugado con el ácido glucurónico, y en menor proporción con el ácido sulfúrico y la cisteína; menos del 5% se excreta en forma inalterada',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de eliminación es de 1,5-3 horas.',
            ref: { f: 'cima-69429', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su semivida de eliminación es de 1,5-3 horas', codigo: 'FT 5.2' }
          }
        ]
      }
    }
  }
},
    {
  id: 'paracetamol-kabi-perfusion',
  producto: 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG',
  titular: 'Fresenius Kabi España, S.A.U.',
  mercado: 'España (UE)',
  forma: 'Solución para perfusión',
  formaFuente: 'SOLUCIÓN PARA PERFUSIÓN',
  liberacion: 'no declarada',
  concentraciones: '10 mg/mL de paracetamol en solución para perfusión, según la ficha técnica',
  excipientes: [ 'Cisteína', 'Manitol (E421)', 'Agua para preparaciones inyectables' ],
  usos: {
    t: 'Tratamiento a corto plazo del dolor moderado, sobre todo después de cirugía, y de la fiebre, cuando la vía intravenosa está justificada clínicamente.',
    ref: {
      f: 'cima-74477',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'el tratamiento a corto plazo del dolor moderado, especialmente después de cirugía, el tratamiento a corto plazo de la fiebre',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-74477',
  advertencias: [
    {
      titulo: 'Riesgo de errores de medicación',
      texto: 'La ficha advierte de evitar la confusión entre miligramos y mililitros, que puede causar sobredosificación accidental y la muerte.',
      organos: [ 'sangre' ],
      ref: {
        f: 'cima-74477',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Tenga cuidado en evitar errores de medicación debido a la confusión entre miligramos (mg) y mililitros (ml), lo que puede resultar en una sobredosificación accidental y la muerte',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Lesión hepática',
      texto: 'Dosis mayores de las recomendadas conllevan un riesgo de lesión hepática muy grave.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-74477',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Dosis mayores de las recomendadas conllevan un riesgo de lesión hepática muy grave',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Como todos los medicamentos que contienen paracetamol, las reacciones adversas son raras o muy raras.',
      'FT 4.8',
      'Como todos los medicamentos que contienen paracetamol, las reacciones adversas son raras o muy raras'
    ],
    [
      'La tabla de la ficha incluye trombocitopenia, leucopenia, neutropenia y agranulocitosis.',
      'FT 4.8',
      'Trombocitopenia, leucopenia, neutropenia, agranulocitosis'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intravenosa' ],
  formaNormalizada: 'solucion-inyectable',
  recorridoPropio: {
    resumen: 'Entra directamente en la circulación general. Los metabolitos se excretan sobre todo por la orina: el 90 % de la dosis se excreta en 24 horas; la vida media en plasma es de 2,7 horas.',
    etapas: {
      liberacion: {
        organos: [ 'sangre' ],
        llega: 'La solución llega a la sangre por una vena.',
        ocurre: 'Solución para perfusión ya lista, isoosmótica: el paracetamol ya está disuelto y se administra directamente en una vena.',
        sigue: 'El fármaco, ya disuelto, circula con la sangre.',
        datos: [
          {
            t: 'Solución para perfusión ya lista, isoosmótica: el paracetamol ya está disuelto y se administra directamente en una vena.',
            ref: { f: 'cima-74477', sec: '3 · Forma farmacéutica', cita: 'La solución es isoosmótica y su pH está entre 5,0 y 7,0', codigo: 'FT 3' }
          }
        ]
      },
      absorcion: {
        organos: [ 'sangre' ],
        llega: 'El fármaco ya está en la sangre.',
        ocurre: 'Entra directamente en la circulación general.',
        sigue: 'Sigue hacia los tejidos y el hígado.',
        datos: [],
        noAplica: {
          motivo: 'En la vía intravenosa no hay absorción: el paracetamol se perfunde directamente en la sangre y la ficha da ya la concentración máxima en plasma tras la perfusión.',
          ref: {
            f: 'cima-74477',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración máxima en plasma (Cmax) de paracetamol observada después de la perfusión',
            codigo: 'FT 5.2'
          }
        }
      },
      distribucion: {
        organos: [ 'sangre', 'encefalo' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'El volumen de distribución es de aproximadamente 1 L/kg; se observaron concentraciones significativas (aprox. 1,5 μg/ml) en el líquido cefalorraquídeo tras 20 minutos de perfusión.',
        sigue: 'Se reparte por los tejidos, incluido el sistema nervioso central, y llega al hígado.',
        datos: [
          {
            t: 'El volumen de distribución es de aproximadamente 1 L/kg; se observaron concentraciones significativas (aprox. 1,5 μg/ml) en el líquido cefalorraquídeo tras 20 minutos de perfusión.',
            ref: {
              f: 'cima-74477',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen de distribución de paracetamol es de aproximadamente de1 l/kg',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'Se observaron concentraciones significativas de paracetamol en el líquido cefalorraquídeo.',
            ref: {
              f: 'cima-74477',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'se observaron concentraciones significativas de paracetamol (aproximadamente 1,5 μg/ml) en el líquido cefalorraquídeo',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'Mecanismo no establecido',
          efecto: 'El mecanismo exacto de sus propiedades analgésicas y antipiréticas no se ha establecido; podría implicar acciones centrales y periféricas.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'El mecanismo exacto de sus propiedades analgésicas y antipiréticas no se ha establecido; podría implicar acciones centrales y periféricas.',
              ref: {
                f: 'cima-74477',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Aún no se ha establecido el mecanismo exacto de las propiedades analgésicas y antipiréticas del paracetamol',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza principalmente en el hígado por conjugación con ácido glucurónico y con ácido sulfúrico; una fracción menor del 4 % pasa por el citocromo P450 y forma un intermedio reactivo.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza principalmente en el hígado por conjugación con ácido glucurónico y con ácido sulfúrico; una fracción menor del 4 % pasa por el citocromo P450 y forma un intermedio reactivo.',
            ref: {
              f: 'cima-74477',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El paracetamol se metaboliza principalmente en el hígado siguiendo dos rutas hepáticas principales: conjugación con ácido glucurónico y conjugación con ácido sulfúrico',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'N-acetil benzoquinona imina',
            actividad: 'tóxico',
            nota: 'Intermedio reactivo que a dosis normales se detoxifica con glutatión reducido.',
            ref: {
              f: 'cima-74477',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Una pequeña fracción (menor del 4%) se metaboliza por el citocromo P450 dando lugar a un intermedio reactivo',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Los metabolitos se excretan sobre todo por la orina: el 90 % de la dosis se excreta en 24 horas; la vida media en plasma es de 2,7 horas.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Los metabolitos se excretan sobre todo por la orina: el 90 % de la dosis se excreta en 24 horas; la vida media en plasma es de 2,7 horas.',
            ref: {
              f: 'cima-74477',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Los metabolitos de paracetamol se excretan principalmente por la orina. El 90% de la dosis administrada se excreta en 24 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La vida media en plasma es de 2,7 horas.',
            ref: { f: 'cima-74477', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media en plasma es de 2,7 horas', codigo: 'FT 5.2' }
          },
          {
            t: 'Menos del 5 % se elimina de forma inalterada.',
            ref: { f: 'cima-74477', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Menos de un 5% se elimina de forma inalterada', codigo: 'FT 5.2' }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-69429', '69429', 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG (Kern Pharma S.L.)', '2026-07-03', '2026-11-15'),
    rengFichaCIMA('cima-74477', '74477', 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG (Fresenius Kabi España, S.A.U.)', '2025-02-26', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral',
    valor: '75-85',
    unidad: '%',
    analito: 'paracetamol',
    ref: { f: 'cima-69429', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Por vía oral su biodisponibilidad es del 75-85%', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta la concentración máxima',
    valor: '0,5-2',
    unidad: 'h',
    analito: 'paracetamol',
    ref: {
      f: 'cima-69429',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'con un tiempo hasta la concentración máxima de 0,5-2 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '10 (aprox.)',
    unidad: '%',
    analito: 'paracetamol',
    ref: { f: 'cima-69429', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El grado de unión a proteínas plasmáticas es de un 10%', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación',
    valor: '1,5-3',
    unidad: 'h',
    analito: 'paracetamol',
    ref: { f: 'cima-69429', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Su semivida de eliminación es de 1,5-3 horas', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG'
  },
  {
    magnitud: 'orina',
    nombre: 'Excretado sin cambios',
    valor: '< 5',
    unidad: '% de la dosis',
    analito: 'paracetamol',
    ref: { f: 'cima-69429', sec: '5.2 · Propiedades farmacocinéticas', cita: 'menos del 5% se excreta en forma inalterada', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KERN PHARMA 100 mg/ml SOLUCION ORAL EFG'
  },
  {
    magnitud: 'cmax',
    nombre: 'Concentración máxima en plasma tras la perfusión',
    valor: '15 (con 500 mg) y 30 (con 1 g)',
    unidad: 'µg/mL',
    analito: 'paracetamol',
    poblacion: 'adultos',
    condiciones: 'perfusión de 15 minutos',
    ref: { f: 'cima-74477', sec: '5.2 · Propiedades farmacocinéticas', cita: 'de aproximadamente 15 μg/ ml y 30 μg/ml, respectivamente', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución',
    valor: '1 (aprox.)',
    unidad: 'L/kg',
    analito: 'paracetamol',
    ref: {
      f: 'cima-74477',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El volumen de distribución de paracetamol es de aproximadamente de1 l/kg',
      codigo: 'FT 5.2'
    },
    presentacion: 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG'
  },
  {
    magnitud: 'semivida',
    nombre: 'Vida media en plasma',
    valor: '2,7',
    unidad: 'h',
    analito: 'paracetamol',
    poblacion: 'adultos',
    ref: { f: 'cima-74477', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media en plasma es de 2,7 horas', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG'
  },
  {
    magnitud: 'orina',
    nombre: 'Dosis excretada en 24 horas',
    valor: '90',
    unidad: '% de la dosis',
    analito: 'paracetamol y metabolitos',
    ref: { f: 'cima-74477', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El 90% de la dosis administrada se excreta en 24 horas', codigo: 'FT 5.2' },
    presentacion: 'PARACETAMOL KABI 10 mg/ml SOLUCION PARA PERFUSION EFG'
  }
]
} satisfies RengExtensionFicha
