import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'morfina',
  presentaciones: [
    {
  id: 'morfina-duramorph',
  producto: 'Duramorph · solución inyectable',
  titular: 'HIKMA PHARMACEUTICALS USA INC.',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION',
  liberacion: 'no declarada',
  concentraciones: '0,5 mg/mL o 1 mg/mL de sulfato de morfina en ampollas sin conservantes, según la etiqueta',
  excipientes: [ 'Cloruro de sodio', 'Agua' ],
  usos: {
    t: 'Control del dolor intenso que requiere un analgésico opioide por vía intravenosa y, por vía epidural o intratecal, control del dolor sin pérdida de la función motora, sensitiva o simpática.',
    ref: {
      f: 'dailymed-morfina-duramorph',
      sec: '1 · Indicaciones',
      cita: 'the epidural or intrathecal management of pain without attendant loss of motor, sensory, or sympathetic function',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-morfina-duramorph',
  advertencias: [
    {
      titulo: 'Riesgos de la vía neuraxial',
      texto: 'La administración neuraxial de una dosis única puede causar depresión respiratoria aguda o tardía durante hasta 24 horas.',
      organos: [ 'pulmones', 'encefalo' ],
      ref: {
        f: 'dailymed-morfina-duramorph',
        sec: 'Advertencia destacada',
        cita: 'Single-dose neuraxial administration may result in acute or delayed respiratory depression up to 24 hours',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Adicción, abuso y mal uso',
      texto: 'El uso expone a pacientes y a otras personas a riesgos de adicción, abuso y mal uso, que pueden llevar a sobredosis y muerte.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-morfina-duramorph',
        sec: 'Advertencia destacada',
        cita: 'Because the use of DURAMORPH exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Uso con benzodiazepinas u otros depresores del sistema nervioso central',
      texto: 'El uso conjunto con benzodiazepinas u otros depresores del sistema nervioso central, incluido el alcohol, puede causar sedación profunda, depresión respiratoria, coma y muerte.',
      organos: [ 'encefalo', 'pulmones' ],
      ref: {
        f: 'dailymed-morfina-duramorph',
        sec: 'Advertencia destacada',
        cita: 'Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'Las reacciones adversas más graves fueron la depresión respiratoria y la parada respiratoria.',
      '34084-4',
      'The most serious adverse reactions encountered during administration of DURAMORPH were respiratory depression and/or respiratory arrest'
    ],
    [
      'La administración epidural o intratecal de una dosis única se acompaña de una alta incidencia de prurito generalizado dependiente de la dosis.',
      '34084-4',
      'Single-dose epidural or intrathecal administration is accompanied by a high incidence of dose-related generalized pruritus'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intravenosa', 'epidural', 'intratecal' ],
  formaNormalizada: 'solucion-inyectable',
  recorridoPropio: {
    resumen: 'Por vía epidural la morfina se absorbe tan deprisa a la circulación general que su perfil de concentraciones en plasma se parece al de las vías intravenosa e intramuscular. El conjugado se excreta sobre todo por los riñones, con cerca del 10 % en las heces; entre el 2 y el 12 % de la morfina se excreta sin cambios por la orina.',
    etapas: {
      liberacion: {
        organos: [ 'nervios', 'sangre' ],
        llega: 'La solución llega al espacio epidural o intratecal, junto a la médula espinal, o directamente a la sangre por vía intravenosa.',
        ocurre: 'Solución estéril isobárica sin antioxidantes, conservantes ni otros aditivos potencialmente neurotóxicos, para uso intravenoso, epidural o intratecal; el fármaco ya está disuelto.',
        sigue: 'Desde esos espacios el fármaco pasa a la circulación general; por la vena entra directamente.',
        datos: [
          {
            t: 'Solución estéril isobárica sin antioxidantes, conservantes ni otros aditivos potencialmente neurotóxicos, para uso intravenoso, epidural o intratecal; el fármaco ya está disuelto.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '11 · Descripción',
              cita: 'free of antioxidants, preservatives or other potentially neurotoxic additives, and is intended for intravenous, epidural, or intrathecal administration',
              codigo: '34089-3'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'nervios', 'sangre' ],
        organosGenerales: [],
        llega: 'Del espacio epidural pasa a la sangre.',
        ocurre: 'Por vía epidural la morfina se absorbe tan deprisa a la circulación general que su perfil de concentraciones en plasma se parece al de las vías intravenosa e intramuscular.',
        sigue: 'Circula con la sangre hacia los tejidos y el hígado.',
        datos: [
          {
            t: 'Por vía epidural la morfina se absorbe tan deprisa a la circulación general que su perfil de concentraciones en plasma se parece al de las vías intravenosa e intramuscular.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'Absorption is so rapid that the plasma concentration-time profiles closely resemble those obtained after intravenous or intramuscular administration',
              codigo: '43682-4'
            }
          },
          {
            t: 'Por vía intratecal sale despacio a la circulación sistémica, lo que explica la larga duración de la acción por esta vía.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'it diffuses out into the systemic circulation slowly, accounting for the long duration of action of morphine administered by this route',
              codigo: '43682-4'
            }
          },
          {
            t: 'El tiempo hasta el pico en plasma es parecido (5-10 minutos) tras un bolo epidural o intratecal.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'Time-to-peak plasma concentrations, however, are similar (5-10 min) after either epidural or intrathecal bolus administration of morphine',
              codigo: '43682-4'
            }
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'encefalo', 'nervios' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'Tras la vía intravenosa, el volumen aparente de distribución va de 1,0 a 4,7 L/kg; la unión a proteínas es baja (36 %). Por vía epidural, cerca del 4 % de la dosis llega al líquido cefalorraquídeo.',
        sigue: 'Se reparte por los tejidos y llega al hígado, donde se metaboliza.',
        datos: [
          {
            t: 'Tras la vía intravenosa, el volumen aparente de distribución va de 1,0 a 4,7 L/kg; la unión a proteínas es baja (36 %). Por vía epidural, cerca del 4 % de la dosis llega al líquido cefalorraquídeo.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'Morphine has an apparent volume of distribution ranging from 1.0 to 4.7 L/kg after intravenous dosage',
              codigo: '43682-4'
            }
          },
          {
            t: 'Hay una barrera hematoencefálica: tras la vía intravenosa, las concentraciones en plasma son más altas que las del líquido cefalorraquídeo.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'plasma concentrations of morphine remain higher than the corresponding CSF morphine levels',
              codigo: '43682-4'
            }
          },
          {
            t: 'Aproximadamente el 4 % de la dosis inyectada por vía epidural llega al líquido cefalorraquídeo.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'Approximately 4% of the dose injected epidurally reaches the CSF',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Receptor opioide mu',
          efecto: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia, y el mecanismo preciso de la analgesia no se conoce.',
          lugar: [ 'encefalo', 'nervios' ],
          datos: [
            {
              t: 'Es un agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia, y el mecanismo preciso de la analgesia no se conoce.',
              ref: {
                f: 'dailymed-morfina-duramorph',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Morphine is a full opioid agonist and is relatively selective for the mu-opioid receptor',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'La vía principal de aclaramiento es la glucuronidación hepática a morfina-3-glucurónido, farmacológicamente inactivo.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'La vía principal de aclaramiento es la glucuronidación hepática a morfina-3-glucurónido, farmacológicamente inactivo.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'The major pathway of clearance is hepatic glucuronidation to morphine',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Morfina-3-glucurónido',
            actividad: 'inactivo',
            nota: 'Principal producto de la glucuronidación hepática.',
            ref: { f: 'dailymed-morfina-duramorph', sec: '12.3 · Farmacocinética', cita: 'which is pharmacologically inactive', codigo: '43682-4' }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'El conjugado se excreta sobre todo por los riñones, con cerca del 10 % en las heces; entre el 2 y el 12 % de la morfina se excreta sin cambios por la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'El conjugado se excreta sobre todo por los riñones, con cerca del 10 % en las heces; entre el 2 y el 12 % de la morfina se excreta sin cambios por la orina.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'Morphine is also eliminated by the kidneys, 2 to 12% being excreted unchanged in the urine',
              codigo: '43682-4'
            }
          },
          {
            t: 'La semivida de eliminación aceptada en sujetos normales es de 1,5 a 2 horas.',
            ref: {
              f: 'dailymed-morfina-duramorph',
              sec: '12.3 · Farmacocinética',
              cita: 'The accepted elimination half-life in normal subjects is 1.5 to 2 hours',
              codigo: '43682-4'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-morfina-duramorph', 'ebb18761-e5c4-4238-bb84-f9549f500210', 'DURAMORPH (MORPHINE SULFATE) INJECTION', 'Duramorph', '11', '2026-01-30', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico en plasma tras un bolo epidural o intratecal',
    valor: '5-10',
    unidad: 'min',
    analito: 'morfina',
    condiciones: 'bolo epidural o intratecal',
    ref: {
      f: 'dailymed-morfina-duramorph',
      sec: '12.3 · Farmacocinética',
      cita: 'Time-to-peak plasma concentrations, however, are similar (5-10 min) after either epidural or intrathecal bolus administration of morphine',
      codigo: '43682-4'
    },
    presentacion: 'Duramorph · solución inyectable'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen aparente de distribución',
    valor: '1,0-4,7',
    unidad: 'L/kg',
    analito: 'morfina',
    condiciones: 'vía intravenosa',
    ref: {
      f: 'dailymed-morfina-duramorph',
      sec: '12.3 · Farmacocinética',
      cita: 'Morphine has an apparent volume of distribution ranging from 1.0 to 4.7 L/kg after intravenous dosage',
      codigo: '43682-4'
    },
    presentacion: 'Duramorph · solución inyectable'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas',
    valor: '36 (aprox.)',
    unidad: '%',
    analito: 'morfina',
    ref: { f: 'dailymed-morfina-duramorph', sec: '12.3 · Farmacocinética', cita: 'Protein binding is low, about 36%', codigo: '43682-4' },
    presentacion: 'Duramorph · solución inyectable'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación aceptada',
    valor: '1,5-2',
    unidad: 'h',
    analito: 'morfina',
    poblacion: 'sujetos normales',
    ref: {
      f: 'dailymed-morfina-duramorph',
      sec: '12.3 · Farmacocinética',
      cita: 'The accepted elimination half-life in normal subjects is 1.5 to 2 hours',
      codigo: '43682-4'
    },
    presentacion: 'Duramorph · solución inyectable'
  },
  {
    magnitud: 'orina',
    nombre: 'Excretado sin cambios por la orina',
    valor: '2-12',
    unidad: '% de la dosis',
    analito: 'morfina',
    ref: { f: 'dailymed-morfina-duramorph', sec: '12.3 · Farmacocinética', cita: '2 to 12% being excreted unchanged in the urine', codigo: '43682-4' },
    presentacion: 'Duramorph · solución inyectable'
  }
]
} satisfies RengExtensionFicha
