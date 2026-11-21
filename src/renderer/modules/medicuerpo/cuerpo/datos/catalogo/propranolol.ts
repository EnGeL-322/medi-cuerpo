import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'propranolol',
    nombre: 'Propranolol',
    clase: 'Betabloqueante no selectivo',
    sinonimos: [ 'propranolol', 'Inderal LA' ],
    formula: 'C16H21NO2',
    masaMolar: 259.34,
    smiles: 'CC(C)NCC(COC1=CC=CC2=CC=CC=C21)O',
    inchikey: 'AQHHHDLHHXJYJD-UHFFFAOYSA-N',
    cid: 4946,
    iupac: '1-naphthalen-1-yloxy-3-(propan-2-ylamino)propan-2-ol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'propranolol-oral',
      producto: 'Propranolol Hydrochloride ER · cápsula de liberación prolongada',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación prolongada',
      formaFuente: 'CAPSULE, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '60 mg, 80 mg, 120 mg o 160 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de propranolol',
        ref: { f: 'dailymed-propranolol', sec: '11 · Descripción', cita: 'Propranolol hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'hypromellose phthalate (31% phthalate, 40 cst)',
        'ethylcellulose (10 mpa.s)',
        'gelatin, unspecified',
        'hypromellose, unspecified',
        'titanium dioxide',
        'd&c red no. 28',
        'fd&c blue no. 1',
        'povidone k30',
        'polyethylene glycol 400',
        'sucrose',
        'starch, corn',
        'diethyl phthalate',
        'polyethylene glycol, unspecified'
      ],
      usos: {
        t: 'Hipertensión arterial, angina de pecho por aterosclerosis coronaria y prevención de la migraña, entre otros usos de la etiqueta.',
        ref: { f: 'dailymed-propranolol', sec: '1 · Indicaciones', cita: 'indicated in the management of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-propranolol',
      advertencias: [
        {
          titulo: 'Suspensión brusca',
          texto: 'Se han descrito empeoramiento de la angina e infarto de miocardio tras suspender bruscamente el propranolol.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-propranolol',
            sec: 'Advertencias',
            cita: 'There have been reports of exacerbation of angina and, in some cases, myocardial infarction, following abrupt discontinuance of propranolol therapy',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Cardiovasculares: bradicardia, insuficiencia cardiaca congestiva, bloqueo auriculoventricular más intenso e hipotensión.',
          '34084-4',
          'Bradycardia; congestive heart failure; intensification of AV block; hypotension'
        ],
        [
          'Sistema nervioso: mareo, depresión con insomnio, cansancio y debilidad.',
          '34084-4',
          'Light-headedness; mental depression manifested by insomnia, lassitude, weakness, fatigue'
        ],
        [
          'Digestivas: náuseas, vómitos, molestias epigástricas, calambres abdominales, diarrea y estreñimiento.',
          '34084-4',
          'Nausea, vomiting, epigastric distress, abdominal cramping, diarrhea, constipation'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación prolongada: 60 mg, 80 mg, 120 mg o 160 mg por cápsula, según la etiqueta; el activo va como clorhidrato de propranolol. Los excipientes no son el principio activo.',
    usos: 'Hipertensión arterial, angina de pecho por aterosclerosis coronaria y prevención de la migraña, entre otros usos de la etiqueta.',
    actua: 'Bloquea los receptores beta-adrenérgicos sin selectividad. El mecanismo de su efecto sobre la presión arterial no está establecido (menor gasto cardiaco, menos renina y menos estímulo simpático desde el cerebro). En la angina reduce la necesidad de oxígeno del corazón.',
    recorrido: 'Se absorbe casi por completo, pero el hígado elimina mucho en el primer paso: solo alrededor del 25 % llega a la circulación general. Con esta cápsula, el máximo en sangre llega hacia las 6 horas. La mayoría de sus metabolitos salen por la orina. La semivida plasmática aparente con estas cápsulas es de unas 10 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'La cápsula de liberación prolongada libera el propranolol a una velocidad controlada y predecible.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'La cápsula de liberación prolongada libera el propranolol a una velocidad controlada y predecible.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'release propranolol HCl at a controlled and predictable rate',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe casi por completo, pero el hígado elimina mucho en el primer paso: solo alrededor del 25 % llega a la circulación general. Con esta cápsula, el máximo en sangre llega hacia las 6 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe casi por completo, pero el hígado elimina mucho en el primer paso: solo alrededor del 25 % llega a la circulación general. Con esta cápsula, el máximo en sangre llega hacia las 6 horas.',
          ref: { f: 'dailymed-propranolol', sec: '12.3 · Farmacocinética', cita: 'almost completely absorbed after oral administration', codigo: '43682-4' }
        },
        {
          t: 'Por el metabolismo de primer paso hepático, solo un 25 % de media llega a la circulación general.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'only about 25% of propranolol reaches the systemic circulation',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico en sangre llega hacia las 6 horas con estas cápsulas.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak blood levels following dosing with propranolol hydrochloride extended-release capsules occur at about 6 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Cerca del 90 % circula unido a proteínas (albúmina y alfa-1-glucoproteína ácida). Se reparte ampliamente (unos 4 L/kg) y atraviesa la barrera hematoencefálica y la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Cerca del 90 % circula unido a proteínas (albúmina y alfa-1-glucoproteína ácida). Se reparte ampliamente (unos 4 L/kg) y atraviesa la barrera hematoencefálica y la placenta.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 90% of circulating propranolol is bound to plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Atraviesa la barrera hematoencefálica y la placenta y pasa a la leche materna.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Propranolol crosses the blood-brain barrier and the placenta',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores beta-adrenérgicos',
        efecto: 'Bloquea los receptores beta-adrenérgicos sin selectividad. El mecanismo de su efecto sobre la presión arterial no está establecido (menor gasto cardiaco, menos renina y menos estímulo simpático desde el cerebro). En la angina reduce la necesidad de oxígeno del corazón.',
        lugar: [ 'corazon', 'rinones', 'encefalo' ],
        datos: [
          {
            t: 'Bloquea los receptores beta-adrenérgicos sin selectividad. El mecanismo de su efecto sobre la presión arterial no está establecido (menor gasto cardiaco, menos renina y menos estímulo simpático desde el cerebro). En la angina reduce la necesidad de oxígeno del corazón.',
            ref: {
              f: 'dailymed-propranolol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of the antihypertensive effect of propranolol has not been established',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un bloqueante no selectivo de los receptores beta-adrenérgicos.',
            ref: {
              f: 'dailymed-propranolol',
              sec: '12 · Farmacología clínica',
              cita: 'Propranolol is a nonselective, beta-adrenergic receptor-blocking agent',
              codigo: '34090-1'
            }
          },
          {
            t: 'En la angina, reduce la necesidad de oxígeno del corazón al bloquear el aumento de frecuencia, presión y contracción que provocan las catecolaminas.',
            ref: {
              f: 'dailymed-propranolol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'reduces the oxygen requirement of the heart at any given level of effort by blocking the catecholamine-induced increases',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente por tres vías: hidroxilación aromática (sobre todo por CYP2D6), N-desalquilación con oxidación de la cadena lateral (CYP1A2 y CYP2D6) y glucuronidación directa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente por tres vías: hidroxilación aromática (sobre todo por CYP2D6), N-desalquilación con oxidación de la cadena lateral (CYP1A2 y CYP2D6) y glucuronidación directa.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Propranolol is metabolized through three primary routes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de propranolol',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The four major metabolites are propranolol glucuronide',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Conjugados con sulfato del 4-hidroxipropranolol',
          actividad: 'desconocida',
          ref: { f: 'dailymed-propranolol', sec: '12.3 · Farmacocinética', cita: 'sulfate conjugates of 4-hydroxy propranolol', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayoría de sus metabolitos salen por la orina. La semivida plasmática aparente con estas cápsulas es de unas 10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayoría de sus metabolitos salen por la orina. La semivida plasmática aparente con estas cápsulas es de unas 10 horas.',
          ref: {
            f: 'dailymed-propranolol',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized with most metabolites appearing in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en sangre',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'propranolol',
      condiciones: 'cápsulas de liberación prolongada',
      ref: { f: 'dailymed-propranolol', sec: '12.3 · Farmacocinética', cita: 'occur at about 6 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción que llega a la circulación general',
      valor: '25 (aprox., media)',
      unidad: '%',
      analito: 'propranolol',
      ref: {
        f: 'dailymed-propranolol',
        sec: '12.3 · Farmacocinética',
        cita: 'only about 25% of propranolol reaches the systemic circulation',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'propranolol',
      ref: {
        f: 'dailymed-propranolol',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 90% of circulating propranolol is bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '4 (aprox.)',
      unidad: 'L/kg',
      analito: 'propranolol',
      ref: {
        f: 'dailymed-propranolol',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of propranolol is approximately 4 liters/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática aparente',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'propranolol',
      condiciones: 'cápsulas de liberación prolongada',
      ref: { f: 'dailymed-propranolol', sec: '12.3 · Farmacocinética', cita: 'The apparent plasma half-life is about 10 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-propranolol', '5415904b-90da-48e8-9f9e-f86749aa129c', 'PROPRANOLOL HYDROCHLORIDE ER (PROPRANOLOL HYDROCHLORIDE) CAPSULE, EXTENDED RELEASE', 'Propranolol Hydrochloride ER', '10', '2026-08-31', '2026-11-12'),
    rengPubchem(4946, 'propranolol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
