import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oximorfona',
    nombre: 'Oximorfona',
    clase: 'Agonista opioide completo (receptor mu)',
    sinonimos: [ 'oxymorphone hydrochloride', 'Opana' ],
    formula: 'C17H19NO4',
    masaMolar: 301.34,
    smiles: 'CN1CC[C@]23[C@@H]4C(=O)CC[C@]2([C@H]1CC5=C3C(=C(C=C5)O)O4)O',
    inchikey: 'UQCNKQCJZOAFTQ-ISWURRPUSA-N',
    cid: 5284604,
    iupac: '(4R,4aS,7aR,12bS)-4a,9-dihydroxy-3-methyl-2,4,5,6,7a,13-hexahydro-1H-4,12-methanobenzofuro[3,2-e]isoquinolin-7-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'oximorfona-oral',
      producto: 'Oxymorphone Hydrochloride · comprimido',
      titular: 'AUROLIFE PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de oximorfona',
        ref: { f: 'dailymed-oximorfona', sec: '11 · Descripción', cita: 'Oxymorphone Hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'cellulose, microcrystalline', 'lactose monohydrate', 'magnesium stearate', 'starch, corn', 'fd&c blue no. 2' ],
      usos: {
        t: 'Dolor agudo lo bastante intenso como para requerir un opioide cuando otras opciones son insuficientes.',
        ref: {
          f: 'dailymed-oximorfona',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of acute pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oximorfona',
      advertencias: [
        {
          titulo: 'Depresión respiratoria potencialmente mortal',
          texto: 'Puede causar depresión respiratoria grave o mortal, sobre todo al empezar o al subir la dosis.',
          organos: [],
          ref: {
            f: 'dailymed-oximorfona',
            sec: 'Advertencia destacada',
            cita: 'Serious, life-threatening, or fatal respiratory depression may occur with use of oxymorphone hydrochloride tablets, especially during initiation or following a dose increase',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Uso con benzodiacepinas u otros depresores del SNC',
          texto: 'Advertir del riesgo de depresión respiratoria y sedación al combinarla con benzodiacepinas u otros depresores del sistema nervioso central.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-oximorfona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise both patients and caregivers about the risks of respiratory depression and sedation when oxymorphone hydrochloride tablets is used with benzodiazepines or other CNS depressants',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome de abstinencia neonatal',
          texto: 'Su uso prolongado en el embarazo puede causar abstinencia en el recién nacido.',
          organos: [],
          ref: {
            f: 'dailymed-oximorfona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use of oxymorphone hydrochloride tablets for an extended period of time during pregnancy can result in withdrawal in the neonate',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más): náuseas, fiebre, somnolencia, vómitos, prurito, cefalea, mareo, estreñimiento y confusión.',
          '34084-4',
          'Adverse reactions (≥ 2% of patients): Nausea, pyrexia, somnolence, vomiting, pruritus, headache, dizziness, constipation, and confusion'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de oximorfona. Los excipientes no son el principio activo.',
    usos: 'Dolor agudo lo bastante intenso como para requerir un opioide cuando otras opciones son insuficientes.',
    actua: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia.',
    recorrido: 'La biodisponibilidad oral absoluta es de alrededor del 10 % por el aclaramiento presistémico hepático; con comida, la Cmax y el AUC suben un 38 %. Por término medio, del 33 al 38 % de la dosis se excreta en la orina como oximorfona-3-glucurónido; menos del 1 % sale sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '3 · Formas y concentraciones',
            cita: 'light blue to blue colored, mottled, round, uncoated tablets',
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
      ocurre: 'La biodisponibilidad oral absoluta es de alrededor del 10 % por el aclaramiento presistémico hepático; con comida, la Cmax y el AUC suben un 38 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es de alrededor del 10 % por el aclaramiento presistémico hepático; con comida, la Cmax y el AUC suben un 38 %.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of oxymorphone is approximately 10%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida la Cmax y el AUC aumentaron alrededor de un 38 %.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'the Cmax and AUC were increased by approximately 38% in fed subjects relative to fasted subjects',
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
      ocurre: 'Se une poco a las proteínas plasmáticas, entre el 10 % y el 12 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une poco a las proteínas plasmáticas, entre el 10 % y el 12 %.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxymorphone is not extensively bound to human plasma proteins; binding is in the range of 10% to 12%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia.',
        lugar: [],
        datos: [
          {
            t: 'Agonista opioide completo, relativamente selectivo del receptor mu; su acción terapéutica principal es la analgesia.',
            ref: {
              f: 'dailymed-oximorfona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Oxymorphone is a full opioid agonist and is relatively selective for the mu-opioid receptor, although it can bind to other opioid receptors at higher doses',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho, sobre todo en el hígado, por reducción o conjugación con ácido glucurónico, a productos activos e inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho, sobre todo en el hígado, por reducción o conjugación con ácido glucurónico, a productos activos e inactivos.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxymorphone is highly metabolized, principally in the liver, and undergoes reduction or conjugation with glucuronic acid to form both active and inactive products',
            codigo: '43682-4'
          }
        },
        {
          t: 'El hígado tiene un papel importante en su aclaramiento presistémico.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'The liver plays an important role in the pre-systemic clearance of orally administered oxymorphone',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Oximorfona-3-glucurónido',
          actividad: 'desconocida',
          nota: 'Metabolito principal; su actividad no se ha evaluado.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'The pharmacologic activity of the glucuronide metabolite has not been evaluated',
            codigo: '43682-4'
          }
        },
        {
          nombre: '6-OH-oximorfona',
          actividad: 'activo',
          nota: 'Actividad analgésica en estudios con animales.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: '6-OH-oxymorphone has been shown in animal studies to have analgesic bioactivity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Por término medio, del 33 al 38 % de la dosis se excreta en la orina como oximorfona-3-glucurónido; menos del 1 % sale sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Por término medio, del 33 al 38 % de la dosis se excreta en la orina como oximorfona-3-glucurónido; menos del 1 % sale sin cambios.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'On average, 33% to 38% of the administered dose is excreted in the urine as oxymorphone-3-glucuronide',
            codigo: '43682-4'
          }
        },
        {
          t: 'Menos del 1 % de la dosis se excreta sin cambios en la orina.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Because oxymorphone is extensively metabolized, <1% of the administered dose is excreted unchanged in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de unas 9 a 11 horas tras una dosis oral única.',
          ref: {
            f: 'dailymed-oximorfona',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxymorphone hydrochloride tablets half-life ranges from approximately 9-11 hours after a single oral dose (5-40 mg)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '10 (aprox.)',
      unidad: '%',
      analito: 'oximorfona',
      ref: {
        f: 'dailymed-oximorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of oxymorphone is approximately 10%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '10-12',
      unidad: '%',
      analito: 'oximorfona',
      ref: { f: 'dailymed-oximorfona', sec: '12.3 · Farmacocinética', cita: 'binding is in the range of 10% to 12%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida tras una dosis única',
      valor: '9-11 (aprox.)',
      unidad: 'h',
      analito: 'oximorfona',
      ref: {
        f: 'dailymed-oximorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'half-life ranges from approximately 9-11 hours after a single oral dose (5-40 mg)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina como glucurónido',
      valor: '33-38',
      unidad: '% de la dosis',
      analito: 'oximorfona-3-glucurónido',
      ref: {
        f: 'dailymed-oximorfona',
        sec: '12.3 · Farmacocinética',
        cita: 'On average, 33% to 38% of the administered dose is excreted in the urine as oxymorphone-3-glucuronide',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oximorfona', '22c7652a-aa16-4fa8-89d9-517e69059068', 'OXYMORPHONE HYDROCHLORIDE TABLET', 'Oxymorphone Hydrochloride', '16', '2026-06-30', '2026-11-19'),
    rengPubchem(5284604, 'oxymorphone hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
