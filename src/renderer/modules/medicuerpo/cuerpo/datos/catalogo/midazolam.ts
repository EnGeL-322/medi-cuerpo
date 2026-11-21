import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'midazolam',
    nombre: 'Midazolam',
    clase: 'Benzodiazepina de acción corta (sedante y ansiolítico)',
    sinonimos: [ 'midazolam', 'midazolam hydrochloride' ],
    formula: 'C18H13ClFN3',
    masaMolar: 325.8,
    smiles: 'CC1=NC=C2N1C3=C(C=C(C=C3)Cl)C(=NC2)C4=CC=CC=C4F',
    inchikey: 'DDLIGBOFAVUZHB-UHFFFAOYSA-N',
    cid: 4192,
    iupac: '8-chloro-6-(2-fluorophenyl)-1-methyl-4H-imidazo[1,5-a][1,4]benzodiazepine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'midazolam-inyectable',
      producto: 'Midazolam · solución inyectable',
      titular: 'HOSPIRA, INC.',
      mercado: 'EE. UU.',
      forma: 'Solución inyectable',
      formaFuente: 'INJECTION, SOLUTION',
      liberacion: 'no declarada',
      concentraciones: '1 mg/mL de midazolam (como clorhidrato) en solución inyectable, según la etiqueta',
      excipientes: [ 'sodium chloride', 'hydrochloric acid', 'sodium hydroxide' ],
      usos: {
        t: 'Sedación, ansiolisis y amnesia antes de procedimientos (por vía intramuscular o intravenosa) y durante procedimientos diagnósticos, terapéuticos o endoscópicos (por vía intravenosa).',
        ref: {
          f: 'dailymed-midazolam',
          sec: '1 · Indicaciones',
          cita: 'Midazolam injection is indicated: • intramuscularly or intravenously for preoperative sedation/anxiolysis/amnesia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-midazolam',
      advertencias: [
        {
          titulo: 'Depresión y paro respiratorios',
          texto: 'El midazolam intravenoso se ha asociado a depresión respiratoria y paro respiratorio, sobre todo en la sedación fuera de cuidados críticos.',
          organos: [ 'pulmones', 'encefalo' ],
          ref: {
            f: 'dailymed-midazolam',
            sec: 'Advertencia destacada',
            cita: 'Intravenous midazolam has been associated with respiratory depression and respiratory arrest, especially when used for sedation in noncritical care settings',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Lo más frecuente tras la administración parenteral en adultos fueron las fluctuaciones de los signos vitales.',
          '34084-4',
          'Fluctuations in vital signs were the most frequently seen findings following parenteral administration of midazolam in adults'
        ],
        [
          'Descenso del volumen corriente o de la frecuencia respiratoria: 23,3 % de los pacientes por vía intravenosa y 10,8 % por vía intramuscular.',
          '34084-4',
          'decreased tidal volume and/or respiratory rate decrease (23.3% of patients following intravenous and 10.8% of patients following intramuscular administration)'
        ]
      ],
      familia: 'inyectable',
      vias: [ 'intramuscular', 'intravenosa' ],
      formaNormalizada: 'solucion-inyectable'
    }
  ],
  resumen: {
    contiene: 'Solución inyectable: 1 mg/mL de midazolam (como clorhidrato) en solución inyectable, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Sedación, ansiolisis y amnesia antes de procedimientos (por vía intramuscular o intravenosa) y durante procedimientos diagnósticos, terapéuticos o endoscópicos (por vía intravenosa).',
    actua: 'Es una benzodiazepina de acción corta que deprime el sistema nervioso central; sus efectos dependen de la dosis, de la vía y de otros medicamentos.',
    recorrido: 'La biodisponibilidad absoluta de la vía intramuscular fue superior al 90 %. La eliminación del fármaco original se produce por metabolismo hepático a metabolitos hidroxilados que se conjugan y se excretan por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'sangre', 'musculos' ],
      llega: 'La solución llega al músculo o a la sangre, según la vía.',
      ocurre: 'Solución inyectable ya disuelta: se inyecta en un músculo o en una vena.',
      sigue: 'Desde el músculo pasa a la sangre; por la vena entra directamente.',
      datos: [
        {
          t: 'Solución inyectable ya disuelta: se inyecta en un músculo o en una vena.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of the intramuscular route was greater than 90%',
            codigo: '43682-4'
          }
        }
      ]
    },
    absorcion: {
      organos: [ 'musculos', 'sangre' ],
      organosGenerales: [],
      llega: 'El fármaco pasa del músculo a la sangre.',
      ocurre: 'La biodisponibilidad absoluta de la vía intramuscular fue superior al 90 %.',
      sigue: 'Circula con la sangre hacia los tejidos y el hígado.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta de la vía intramuscular fue superior al 90 %.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of the intramuscular route was greater than 90%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras la dosis intramuscular, la concentración máxima media fue de 90 ng/mL y el tiempo hasta el pico, de 0,5 horas.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean peak concentration (C max ) and time to peak (T max ) following the intramuscular dose was 90 ng/mL (20% CV) and 0.5 hour (50% CV)',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'vía intramuscular'
        },
        {
          t: 'Con la vía intramuscular, la Cmax del midazolam y de su metabolito 1-hidroxi fue aproximadamente la mitad de la alcanzada por vía intravenosa.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'Following intramuscular administration, C max for midazolam and its 1-hydroxy metabolite were approximately one-half of those achieved after intravenous injection',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'El fármaco circula en la sangre unido a la albúmina.',
      ocurre: 'En adultos y niños mayores de 1 año, el midazolam se une en un 97 % a proteínas del plasma, sobre todo a la albúmina; el volumen de distribución en adultos sanos osciló entre 1,0 y 3,1 L/kg.',
      sigue: 'Se reparte por los tejidos, incluido el sistema nervioso central, y llega al hígado.',
      datos: [
        {
          t: 'En adultos y niños mayores de 1 año, el midazolam se une en un 97 % a proteínas del plasma, sobre todo a la albúmina; el volumen de distribución en adultos sanos osciló entre 1,0 y 3,1 L/kg.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'In adults and pediatric patients older than 1 year, midazolam is approximately 97% bound to plasma protein, principally albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución en adultos sanos osciló entre 1,0 y 3,1 L/kg.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution (Vd) determined from six single-dose pharmacokinetic studies involving healthy adults ranged from 1.0 to 3.1 L/kg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Atraviesa la placenta y pasa a la circulación fetal, y se ha detectado en la leche humana y en el líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'midazolam has been shown to cross the placenta and enter into fetal circulation and has been detected in human milk and CSF',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de benzodiazepinas',
        efecto: 'Es una benzodiazepina de acción corta que deprime el sistema nervioso central; sus efectos dependen de la dosis, de la vía y de otros medicamentos.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es una benzodiazepina de acción corta que deprime el sistema nervioso central; sus efectos dependen de la dosis, de la vía y de otros medicamentos.',
            ref: {
              f: 'dailymed-midazolam',
              sec: '12 · Farmacología clínica',
              cita: 'Midazolam is a short-acting benzodiazepine central nervous system (CNS) depressant',
              codigo: '34090-1'
            }
          },
          {
            t: 'Los metabolitos hidroxilados tienen afinidad por el receptor de benzodiazepinas: alrededor del 20 % (1-hidroxi) y del 7 % (4-hidroxi) respecto al midazolam.',
            ref: {
              f: 'dailymed-midazolam',
              sec: '12 · Farmacología clínica',
              cita: 'the affinities of 1- and 4-hydroxy-midazolam for the benzodiazepine receptor are approximately 20% and 7%, respectively, relative to midazolam',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La biotransformación está mediada por el citocromo P450-3A4, presente en el hígado y en la mucosa gastrointestinal; del 60 al 70 % de los productos es 1-hidroxi-midazolam.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La biotransformación está mediada por el citocromo P450-3A4, presente en el hígado y en la mucosa gastrointestinal; del 60 al 70 % de los productos es 1-hidroxi-midazolam.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'the biotransformation of midazolam is mediated by cytochrome P450-3A4',
            codigo: '43682-4'
          }
        },
        {
          t: 'Del 60 al 70 % de los productos de biotransformación es 1-hidroxi-midazolam.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'Sixty to seventy percent of the biotransformation products is 1-hydroxy-midazolam',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '1-hidroxi-midazolam',
          actividad: 'activo',
          nota: 'Al menos tan potente como el fármaco original; puede contribuir a la actividad farmacológica neta.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: '1-hydroxy-midazolam is at least as potent as the parent compound and may contribute to the net pharmacologic activity of midazolam',
            codigo: '43682-4'
          }
        },
        {
          nombre: '4-hidroxi-midazolam',
          actividad: 'desconocida',
          nota: 'Constituye el 5 % o menos de los productos; la etiqueta da solo su afinidad por el receptor (alrededor del 7 %).',
          ref: { f: 'dailymed-midazolam', sec: '12.3 · Farmacocinética', cita: '4-hydroxy-midazolam constitutes 5% or less', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación del fármaco original se produce por metabolismo hepático a metabolitos hidroxilados que se conjugan y se excretan por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación del fármaco original se produce por metabolismo hepático a metabolitos hidroxilados que se conjugan y se excretan por la orina.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'Elimination of the parent drug takes place via hepatic metabolism of midazolam to hydroxylated metabolites that are conjugated and excreted in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación osciló entre 1,8 y 6,4 horas (media de unas 3 horas).',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'elimination half-life, 1.8 to 6.4 hours (mean approximately 3 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los principales productos de excreción urinaria son conjugados glucurónidos de los derivados hidroxilados.',
          ref: {
            f: 'dailymed-midazolam',
            sec: '12.3 · Farmacocinética',
            cita: 'The principal urinary excretion products are glucuronide conjugates of the hydroxylated derivatives',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta por vía intramuscular',
      valor: '> 90',
      unidad: '%',
      analito: 'midazolam',
      poblacion: 'sujetos sanos',
      condiciones: 'vía intramuscular',
      ref: {
        f: 'dailymed-midazolam',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of the intramuscular route was greater than 90%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico tras la dosis intramuscular',
      valor: '0,5',
      unidad: 'h',
      analito: 'midazolam',
      poblacion: 'sujetos sanos',
      condiciones: 'vía intramuscular',
      ref: {
        f: 'dailymed-midazolam',
        sec: '12.3 · Farmacocinética',
        cita: 'time to peak (T max ) following the intramuscular dose was 90 ng/mL (20% CV) and 0.5 hour (50% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media tras la dosis intramuscular',
      valor: '90',
      unidad: 'ng/mL',
      analito: 'midazolam',
      poblacion: 'sujetos sanos',
      condiciones: 'vía intramuscular',
      ref: {
        f: 'dailymed-midazolam',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean peak concentration (C max ) and time to peak (T max ) following the intramuscular dose was 90 ng/mL (20% CV) and 0.5 hour (50% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '97 (aprox.)',
      unidad: '%',
      analito: 'midazolam',
      poblacion: 'adultos y niños mayores de 1 año',
      ref: {
        f: 'dailymed-midazolam',
        sec: '12.3 · Farmacocinética',
        cita: 'midazolam is approximately 97% bound to plasma protein, principally albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1,0 a 3,1',
      unidad: 'L/kg',
      analito: 'midazolam',
      poblacion: 'adultos sanos',
      ref: { f: 'dailymed-midazolam', sec: '12.3 · Farmacocinética', cita: 'ranged from 1.0 to 3.1 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1,8 a 6,4',
      unidad: 'h',
      analito: 'midazolam',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-midazolam',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-life, 1.8 to 6.4 hours (mean approximately 3 hours)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-midazolam', '1abda8b8-48a8-4995-af86-39220d1aa240', 'MIDAZOLAM (MIDAZOLAM HYDROCHLORIDE) INJECTION, SOLUTION', 'Midazolam', '35', '2026-08-13', '2026-11-15'),
    rengPubchem(4192, 'midazolam', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
