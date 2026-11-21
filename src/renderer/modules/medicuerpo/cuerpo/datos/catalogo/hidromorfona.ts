import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidromorfona',
    nombre: 'Hidromorfona',
    clase: 'Opioide agonista de los receptores mu (analgésico)',
    sinonimos: [ 'hydromorphone', 'Dilaudid' ],
    formula: 'C17H19NO3',
    masaMolar: 285.34,
    smiles: 'CN1CC[C@]23[C@@H]4[C@H]1CC5=C2C(=C(C=C5)O)O[C@H]3C(=O)CC4',
    inchikey: 'WVLOADHCBXTIJK-YNHQPCIGSA-N',
    cid: 5284570,
    iupac: '(4R,4aR,7aR,12bS)-9-hydroxy-3-methyl-1,2,4,4a,5,6,7a,13-octahydro-4,12-methanobenzofuro[3,2-e]isoquinolin-7-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'hidromorfona-oral',
      producto: 'Dilaudid · comprimido',
      titular: 'RHODES PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2 mg, 4 mg o 8 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de hidromorfona',
        ref: { f: 'dailymed-hidromorfona', sec: '11 · Descripción', cita: 'hydromorphone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'd&c red no. 30', 'd&c yellow no. 10', 'anhydrous lactose', 'magnesium stearate', 'sodium metabisulfite' ],
      usos: {
        t: 'Tratamiento del dolor lo bastante intenso como para requerir un analgésico opioide y para el que los tratamientos alternativos son inadecuados.',
        ref: {
          f: 'dailymed-hidromorfona',
          sec: '1 · Indicaciones',
          cita: 'DILAUDID Oral Solution and DILAUDID Tablets are indicated for the management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-hidromorfona',
      advertencias: [
        {
          titulo: 'Depresión respiratoria potencialmente mortal',
          texto: 'Hay que evaluar con regularidad a los pacientes, sobre todo al iniciar y ajustar el tratamiento, en especial si tienen enfermedad pulmonar crónica o son ancianos o debilitados.',
          organos: [ 'pulmones', 'encefalo' ],
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Life-Threatening Respiratory Depression in Patients with Chronic Pulmonary Disease or in Elderly, Cachectic, or Debilitated Patients: Regularly evaluate patients, particularly during initiation and titration',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Adicción, abuso y uso indebido',
          texto: 'Contiene hidromorfona, una sustancia controlada de la lista II.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '5 · Advertencias y precauciones',
            cita: 'contain hydromorphone, a Schedule II controlled substance',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: aturdimiento, mareo, sedación, náuseas, vómitos, sudoración, rubor, disforia, euforia, boca seca y prurito.',
          '34084-4',
          'Most common adverse reactions are lightheadedness, dizziness, sedation, nausea, vomiting, sweating, flushing, dysphoria, euphoria, dry mouth, and pruritus'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la depresión respiratoria potencialmente mortal.',
          '34084-4',
          'Life-Threatening Respiratory Depression [see Warnings and Precautions (5.3) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2 mg, 4 mg o 8 mg por comprimido, según la etiqueta; el activo va como clorhidrato de hidromorfona. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del dolor lo bastante intenso como para requerir un analgésico opioide y para el que los tratamientos alternativos son inadecuados.',
    actua: 'Es un agonista opioide completo, relativamente selectivo por el receptor mu; su acción terapéutica principal es la analgesia.',
    recorrido: 'Se absorbe con rapidez en el tubo digestivo tras la administración oral y sufre un importante metabolismo de primer paso. Solo una pequeña cantidad de la dosis se excreta inalterada por la orina; la mayor parte sale como hidromorfona-3-glucurónido.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '11 · Descripción',
            cita: 'DILAUDID Tablets are supplied in 2 mg, 4 mg, and 8 mg tablets for oral administration',
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
      ocurre: 'Se absorbe con rapidez en el tubo digestivo tras la administración oral y sufre un importante metabolismo de primer paso.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez en el tubo digestivo tras la administración oral y sufre un importante metabolismo de primer paso.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydromorphone is rapidly absorbed from the gastrointestinal tract after oral administration and undergoes extensive first-pass metabolism',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad tras una dosis única del comprimido de 8 mg es de aproximadamente el 24 %.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'In vivo bioavailability following single-dose administration of the 8 mg tablet is approximately 24%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan generalmente entre ½ y 1 hora después de la dosis.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma hydromorphone concentrations are generally attained within ½ to 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimento, la Cmax bajó un 25 %, el Tmax se prolongó 0,8 horas y el AUC aumentó un 35 %; puede no ser clínicamente relevante.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'food lowered C max by 25%, prolonged T max by 0.8 hour, and increased AUC by 35%',
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
      ocurre: 'A concentraciones plasmáticas terapéuticas, la hidromorfona se une a las proteínas del plasma en un 8 % a 19 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A concentraciones plasmáticas terapéuticas, la hidromorfona se une a las proteínas del plasma en un 8 % a 19 %.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'At therapeutic plasma levels, hydromorphone is approximately 8 to 19% bound to plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras un bolo intravenoso, el volumen de distribución en el equilibrio es de 302,9 litros.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'After an intravenous bolus dose, the steady state of volume distribution [mean (% cv)] is 302.9 (32%) liters',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Es un agonista opioide completo, relativamente selectivo por el receptor mu; su acción terapéutica principal es la analgesia.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Es un agonista opioide completo, relativamente selectivo por el receptor mu; su acción terapéutica principal es la analgesia.',
            ref: {
              f: 'dailymed-hidromorfona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Hydromorphone is a full opioid agonist and is relatively selective for the mu-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por glucuronidación en el hígado: más del 95 % de la dosis pasa a hidromorfona-3-glucurónido, con pequeñas cantidades de metabolitos de reducción 6-hidroxi.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por glucuronidación en el hígado: más del 95 % de la dosis pasa a hidromorfona-3-glucurónido, con pequeñas cantidades de metabolitos de reducción 6-hidroxi.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydromorphone is extensively metabolized via glucuronidation in the liver, with greater than 95% of the dose metabolized to hydromorphone-3-glucuronide',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidromorfona-3-glucurónido',
          actividad: 'desconocida',
          nota: 'Metabolito mayoritario; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'greater than 95% of the dose metabolized to hydromorphone-3-glucuronide along with minor amounts of 6-hydroxy reduction metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Solo una pequeña cantidad de la dosis se excreta inalterada por la orina; la mayor parte sale como hidromorfona-3-glucurónido.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Solo una pequeña cantidad de la dosis se excreta inalterada por la orina; la mayor parte sale como hidromorfona-3-glucurónido.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Only a small amount of the hydromorphone dose is excreted unchanged in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal tras una dosis intravenosa es de unas 2,3 horas.',
          ref: {
            f: 'dailymed-hidromorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of hydromorphone after an intravenous dose is about 2.3 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad tras una dosis única (comprimido de 8 mg)',
      valor: '24 (aprox.)',
      unidad: '%',
      analito: 'hidromorfona',
      ref: {
        f: 'dailymed-hidromorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'In vivo bioavailability following single-dose administration of the 8 mg tablet is approximately 24%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '0,5-1',
      unidad: 'h',
      analito: 'hidromorfona',
      ref: {
        f: 'dailymed-hidromorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma hydromorphone concentrations are generally attained within ½ to 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '8-19',
      unidad: '%',
      analito: 'hidromorfona',
      ref: {
        f: 'dailymed-hidromorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'hydromorphone is approximately 8 to 19% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en el equilibrio',
      valor: '302,9',
      unidad: 'L',
      analito: 'hidromorfona',
      condiciones: 'bolo intravenoso',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-hidromorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'the steady state of volume distribution [mean (% cv)] is 302.9 (32%) liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '2,3 (aprox.)',
      unidad: 'h',
      analito: 'hidromorfona',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-hidromorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of hydromorphone after an intravenous dose is about 2.3 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-hidromorfona', 'd6b40e39-a57e-402c-b4f6-7041e832f837', 'DILAUDID (HYDROMORPHONE HYDROCHLORIDE) TABLET DILAUDID (HYDROMORPHONE HYDROCHLORIDE) SOLUTION', 'Dilaudid', '12', '2026-05-20', '2026-11-15'),
    rengPubchem(5284570, 'hydromorphone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
