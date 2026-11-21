import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amiodarona',
    nombre: 'Amiodarona',
    clase: 'Antiarrítmico (clase III)',
    sinonimos: [ 'amiodarone', 'Pacerone', 'Cordarone' ],
    formula: 'C25H29I2NO3',
    masaMolar: 645.3,
    smiles: 'CCCCC1=C(C2=CC=CC=C2O1)C(=O)C3=CC(=C(C(=C3)I)OCCN(CC)CC)I',
    inchikey: 'IYIKLHRQXLHMJQ-UHFFFAOYSA-N',
    cid: 2157,
    iupac: '(2-butyl-1-benzofuran-3-yl)-[4-[2-(diethylamino)ethoxy]-3,5-diiodophenyl]methanone',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'amiodarona-oral',
      producto: 'Amiodarone Hydrochloride · comprimido',
      titular: "DR. REDDY'S LABRATORIES INC.",
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 200 mg o 400 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de amiodarona',
        ref: { f: 'dailymed-amiodarona', sec: '11 · Descripción', cita: 'Amiodarone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'microcrystalline cellulose',
        'sodium starch glycolate type a potato',
        'povidone k30',
        'silicon dioxide',
        'magnesium stearate'
      ],
      usos: {
        t: 'Fibrilación ventricular recurrente y taquicardia ventricular inestable que amenazan la vida, cuando otros antiarrítmicos no funcionan o no se toleran.',
        ref: {
          f: 'dailymed-amiodarona',
          sec: '1 · Indicaciones',
          cita: 'life-threatening recurrent ventricular fibrillation and life-threatening recurrent hemodynamically unstable tachycardia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-amiodarona',
      advertencias: [
        {
          titulo: 'Toxicidad pulmonar, hepática y cardiaca',
          texto: 'Puede causar toxicidad pulmonar, lesión hepática y empeorar arritmias; se reserva para arritmias que amenazan la vida.',
          organos: [ 'pulmones', 'higado', 'corazon' ],
          ref: {
            f: 'dailymed-amiodarona',
            sec: 'Advertencia destacada',
            cita: 'is intended for use only in patients with the indicated life-threatening arrhythmias because its use is accompanied by substantial toxicity',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Motivos más comunes de abandono (> 1 %): toxicidad pulmonar, taquicardia ventricular paroxística, insuficiencia cardiaca y subida de las enzimas hepáticas.',
          '34084-4',
          'include pulmonary toxicity, paroxysmal ventricular tachycardia, congestive heart failure, and elevation of liver enzymes'
        ],
        [
          'Muy frecuentes: náuseas y vómitos; frecuentes: estreñimiento, falta de apetito y dolor abdominal.',
          '34084-4',
          'Gastrointestinal Very common: Nausea, vomiting'
        ],
        [
          'También alteraciones de la visión, fotosensibilidad, coloración azulada de la piel e hipo o hipertiroidismo.',
          '34084-4',
          'visual disturbances, photosensitivity, blue skin discoloration, hyperthyroidism, and hypothyroidism'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg, 200 mg o 400 mg por comprimido, según la etiqueta; el activo va como clorhidrato de amiodarona. Los excipientes no son el principio activo.',
    usos: 'Fibrilación ventricular recurrente y taquicardia ventricular inestable que amenazan la vida, cuando otros antiarrítmicos no funcionan o no se toleran.',
    actua: 'Se considera de clase III, pero tiene efectos de las cuatro clases: bloquea canales de sodio, tiene acción antisimpática, alarga el potencial de acción del corazón y frena el nodo.',
    recorrido: 'Se absorbe despacio y de forma variable; su biodisponibilidad ronda el 50 %. Con una comida rica en grasa, el AUC aumentó 2,3 veces y la Cmax 3,8 veces. Se elimina sobre todo por metabolismo hepático y excreción biliar; casi nada sale por la orina. Tras una dosis única, su semivida terminal media fue de 58 días.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-amiodarona', sec: '3 · Formas y concentraciones', cita: 'round, flat-faced, beveled-edge white tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe despacio y de forma variable; su biodisponibilidad ronda el 50 %. Con una comida rica en grasa, el AUC aumentó 2,3 veces y la Cmax 3,8 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe despacio y de forma variable; su biodisponibilidad ronda el 50 %. Con una comida rica en grasa, el AUC aumentó 2,3 veces y la Cmax 3,8 veces.',
          ref: { f: 'dailymed-amiodarona', sec: '12.3 · Farmacocinética', cita: 'is slowly and variably absorbed', codigo: '43682-4' }
        },
        {
          t: 'Biodisponibilidad de alrededor del 50 %.',
          ref: {
            f: 'dailymed-amiodarona',
            sec: '12.3 · Farmacocinética',
            cita: 'The bioavailability of amiodarone hydrochloride tablets is approximately 50%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejido-adiposo', 'higado', 'pulmones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une mucho a proteínas (96 %) y tiene un volumen de distribución enorme (unos 60 L/kg), porque se acumula en la grasa y en órganos muy irrigados como el hígado, el pulmón y el bazo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a proteínas (96 %) y tiene un volumen de distribución enorme (unos 60 L/kg), porque se acumula en la grasa y en órganos muy irrigados como el hígado, el pulmón y el bazo.',
          ref: {
            f: 'dailymed-amiodarona',
            sec: '12.3 · Farmacocinética',
            cita: 'because of extensive accumulation in various sites, especially adipose tissue and highly perfused organs, such as the liver, lung, and spleen',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 96 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-amiodarona', sec: '12.3 · Farmacocinética', cita: 'are highly protein-bound (approximately 96%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canales iónicos y receptores del corazón',
        efecto: 'Se considera de clase III, pero tiene efectos de las cuatro clases: bloquea canales de sodio, tiene acción antisimpática, alarga el potencial de acción del corazón y frena el nodo.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Se considera de clase III, pero tiene efectos de las cuatro clases: bloquea canales de sodio, tiene acción antisimpática, alarga el potencial de acción del corazón y frena el nodo.',
            ref: {
              f: 'dailymed-amiodarona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'One of its main effects, with prolonged administration, is to lengthen the cardiac action potential, a class III effect',
              codigo: '43679-0'
            }
          },
          {
            t: 'Tiene características de las cuatro clases de Vaughan Williams.',
            ref: {
              f: 'dailymed-amiodarona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'possesses electrophysiologic characteristics of all four Vaughan Williams classes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las enzimas CYP3A y CYP2C8 la transforman en desetilamiodarona (DEA), que se acumula aún más en los tejidos y en animales tiene efectos antiarrítmicos parecidos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las enzimas CYP3A y CYP2C8 la transforman en desetilamiodarona (DEA), que se acumula aún más en los tejidos y en animales tiene efectos antiarrítmicos parecidos.',
          ref: {
            f: 'dailymed-amiodarona',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized to DEA by the cytochrome P450 (CYP) enzyme group, specifically CYP3A and CYP2C8',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desetilamiodarona (DEA)',
          actividad: 'activo',
          nota: 'En animales tiene efectos antiarrítmicos parecidos; no hay datos de su actividad en humanos.',
          ref: {
            f: 'dailymed-amiodarona',
            sec: '12.3 · Farmacocinética',
            cita: 'One major metabolite of amiodarone hydrochloride tablets, DEA, has been identified in man',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo hepático y excreción biliar; casi nada sale por la orina. Tras una dosis única, su semivida terminal media fue de 58 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo hepático y excreción biliar; casi nada sale por la orina. Tras una dosis única, su semivida terminal media fue de 58 días.',
          ref: {
            f: 'dailymed-amiodarona',
            sec: '12.3 · Farmacocinética',
            cita: 'Amiodarone is eliminated primarily by hepatic metabolism and biliary excretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'amiodarona',
      ref: {
        f: 'dailymed-amiodarona',
        sec: '12.3 · Farmacocinética',
        cita: 'The bioavailability of amiodarone hydrochloride tablets is approximately 50%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96 (aprox.)',
      unidad: '%',
      analito: 'amiodarona',
      ref: { f: 'dailymed-amiodarona', sec: '12.3 · Farmacocinética', cita: 'are highly protein-bound (approximately 96%)', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '60 (aprox.)',
      unidad: 'L/kg',
      analito: 'amiodarona',
      ref: { f: 'dailymed-amiodarona', sec: '12.3 · Farmacocinética', cita: 'averaging about 60 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente media',
      valor: '58 (15-142)',
      unidad: 'días',
      analito: 'amiodarona',
      poblacion: '12 voluntarios sanos',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-amiodarona',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean apparent plasma terminal elimination half-life of 58 days (range 15 to 142 days) for amiodarone',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento del AUC con comida rica en grasa',
      valor: '2,3 (1,7-3,6)',
      unidad: 'veces',
      analito: 'amiodarona',
      poblacion: '30 voluntarios sanos',
      condiciones: '600 mg tras una comida rica en grasa frente a ayunas',
      ref: {
        f: 'dailymed-amiodarona',
        sec: '12.3 · Farmacocinética',
        cita: 'increased by 2.3 (range 1.7 to 3.6) and 3.8 (range 2.7 to 4.4) times',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-amiodarona', '95cef33b-c0e6-b17c-7cbb-f5c066872705', 'AMIODARONE HYDROCHLORIDE TABLET', 'Amiodarone Hydrochloride', '2', '2026-04-27', '2026-11-12'),
    rengPubchem(2157, 'amiodarone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
