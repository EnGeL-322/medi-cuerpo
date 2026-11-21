import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'letermovir',
    nombre: 'Letermovir',
    clase: 'Inhibidor del complejo terminasa del ADN del citomegalovirus (CMV)',
    sinonimos: [ 'letermovir', 'Prevymis' ],
    formula: 'C29H28F4N4O4',
    masaMolar: 572.5,
    smiles: 'COC1=C(C=C(C=C1)C(F)(F)F)N2[C@H](C3=C(C(=CC=C3)F)N=C2N4CCN(CC4)C5=CC(=CC=C5)OC)CC(=O)O',
    inchikey: 'FWYSMLBETOMXAG-QHCPKHFHSA-N',
    cid: 45138674,
    iupac: '2-[(4S)-8-fluoro-2-[4-(3-methoxyphenyl)piperazin-1-yl]-3-[2-methoxy-5-(trifluoromethyl)phenyl]-4H-quinazolin-4-yl]acetic acid',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'letermovir-oral',
      producto: 'PREVYMIS · comprimido recubierto con película',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '240 mg o 480 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'povidone k25',
        'silicon dioxide',
        'magnesium stearate',
        'lactose monohydrate',
        'hypromellose 2910 (6 mpa.s)',
        'hypromellose 2910 (15 mpa.s)',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow',
        'carnauba wax'
      ],
      usos: {
        t: 'Profilaxis de la infección y la enfermedad por CMV en receptores seropositivos de un trasplante alogénico de progenitores hematopoyéticos y de la enfermedad por CMV en receptores de trasplante renal de alto riesgo.',
        ref: {
          f: 'dailymed-letermovir',
          sec: '1 · Indicaciones',
          cita: 'Prophylaxis of cytomegalovirus (CMV) infection and disease in adult and pediatric patients 6 months of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-letermovir',
      advertencias: [
        {
          titulo: 'Interacciones farmacológicas',
          texto: 'El uso con ciertos fármacos puede causar interacciones importantes, con reacciones adversas o menor efecto terapéutico.',
          organos: [],
          ref: {
            f: 'dailymed-letermovir',
            sec: '5 · Advertencias y precauciones',
            cita: 'The concomitant use of PREVYMIS with certain drugs may result in potentially significant drug interactions',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en trasplante hematopoyético (al menos 10 % y 2 % más que con placebo): náuseas, diarrea, vómitos, edema periférico, tos, cefalea, fatiga y dolor abdominal.',
          '34084-4',
          'Most common adverse events (occurring in at least 10% of subjects in the PREVYMIS group and at a frequency at least 2% greater than placebo) are nausea, diarrhea, vomiting, peripheral edema, cough, headache, fatigue, and abdominal pain'
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
    contiene: 'Comprimido recubierto con película: 240 mg o 480 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Profilaxis de la infección y la enfermedad por CMV en receptores seropositivos de un trasplante alogénico de progenitores hematopoyéticos y de la enfermedad por CMV en receptores de trasplante renal de alto riesgo.',
    actua: 'Inhibe el complejo terminasa del ADN del CMV (pUL51, pUL56 y pUL89), necesario para procesar y empaquetar el ADN vírico, y altera la maduración del virión.',
    recorrido: 'En sujetos sanos sin ciclosporina la biodisponibilidad es del 94 % y la mediana del tmax de 1,5 a 3,0 horas; en receptores de trasplante es menor (35 % sin ciclosporina). Se elimina por captación hepática (OATP1B1/3); en el balance de masas el 93 % de la dosis se excretó en las heces (70 % sin cambios) y menos del 2 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-letermovir',
            sec: '12.3 · Farmacocinética',
            cita: 'AUC and Cmax values were comparable when comparing PREVYMIS tablet (240 mg) and PREVYMIS oral pellets (2 X 120 mg)',
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
      ocurre: 'En sujetos sanos sin ciclosporina la biodisponibilidad es del 94 % y la mediana del tmax de 1,5 a 3,0 horas; en receptores de trasplante es menor (35 % sin ciclosporina).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En sujetos sanos sin ciclosporina la biodisponibilidad es del 94 % y la mediana del tmax de 1,5 a 3,0 horas; en receptores de trasplante es menor (35 % sin ciclosporina).',
          ref: {
            f: 'dailymed-letermovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Healthy adult subjects administered PREVYMIS without cyclosporine: 94% at an oral dose range of 240 mg to 480 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'En receptores adultos de trasplante hematopoyético sin ciclosporina la biodisponibilidad fue del 35 %.',
          ref: {
            f: 'dailymed-letermovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Adult HSCT recipients administered PREVYMIS without cyclosporine: 35% with 480 mg oral once daily',
            codigo: '43682-4'
          },
          poblacion: 'receptores de trasplante hematopoyético'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 99 % a las proteínas del plasma humano; el volumen de distribución en estado estacionario es de 45,5 L tras administración intravenosa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 99 % a las proteínas del plasma humano; el volumen de distribución en estado estacionario es de 45,5 L tras administración intravenosa.',
          ref: {
            f: 'dailymed-letermovir',
            sec: '12.3 · Farmacocinética',
            cita: '% In vitro bound to human plasma proteins 99% across the concentration range of 0.2 to 50 mg/L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Complejo terminasa del ADN del CMV',
        efecto: 'Inhibe el complejo terminasa del ADN del CMV (pUL51, pUL56 y pUL89), necesario para procesar y empaquetar el ADN vírico, y altera la maduración del virión.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe el complejo terminasa del ADN del CMV (pUL51, pUL56 y pUL89), necesario para procesar y empaquetar el ADN vírico, y altera la maduración del virión.',
            ref: {
              f: 'dailymed-letermovir',
              sec: '12.4 · Microbiología',
              cita: 'Letermovir inhibits the CMV DNA terminase complex (pUL51, pUL56, and pUL89) which is required for viral DNA processing and packaging',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En plasma el 97 % del material relacionado es fármaco inalterado, sin metabolitos principales; in vitro participan de forma menor UGT1A1 y UGT1A3.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En plasma el 97 % del material relacionado es fármaco inalterado, sin metabolitos principales; in vitro participan de forma menor UGT1A1 y UGT1A3.',
          ref: {
            f: 'dailymed-letermovir',
            sec: '12.3 · Farmacocinética',
            cita: 'Drug-related component in plasma 97% unchanged parent No major metabolites detected in plasma',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'higado' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por captación hepática (OATP1B1/3); en el balance de masas el 93 % de la dosis se excretó en las heces (70 % sin cambios) y menos del 2 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por captación hepática (OATP1B1/3); en el balance de masas el 93 % de la dosis se excretó en las heces (70 % sin cambios) y menos del 2 % en la orina.',
          ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: 'Route of elimination Hepatic uptake (OATP1B1/3)', codigo: '43682-4' }
        },
        {
          t: 'El 70 % de la dosis se excretó sin cambios en las heces.',
          ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: '% of unchanged drug excreted in feces 70%', codigo: '43682-4' },
          poblacion: 'heces'
        },
        {
          t: 'Menos del 2 % de la dosis se excretó en la orina.',
          ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: '% of dose excreted in urine <2%', codigo: '43682-4' },
          poblacion: 'orina'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad sin ciclosporina',
      valor: '94',
      unidad: '%',
      analito: 'letermovir',
      poblacion: 'adultos sanos',
      ref: {
        f: 'dailymed-letermovir',
        sec: '12.3 · Farmacocinética',
        cita: 'Healthy adult subjects administered PREVYMIS without cyclosporine: 94% at an oral dose range of 240 mg to 480 mg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1,5-3,0',
      unidad: 'h',
      analito: 'letermovir',
      ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: 'Median Tmax (hr) 1.5 to 3.0 hr', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '99',
      unidad: '%',
      analito: 'letermovir',
      ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: '% In vitro bound to human plasma proteins 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '45,5',
      unidad: 'L',
      analito: 'letermovir',
      poblacion: 'receptores de trasplante hematopoyético',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-letermovir',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean steady-state volume of distribution 45.5 L following IV administration in adult HSCT recipients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '12',
      unidad: 'h',
      analito: 'letermovir',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-letermovir',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean terminal t 1/2 (hr) 12 hrs after dosing of PREVYMIS 480 mg IV once daily',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Fármaco inalterado excretado en las heces',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'letermovir inalterado',
      ref: { f: 'dailymed-letermovir', sec: '12.3 · Farmacocinética', cita: '% of unchanged drug excreted in feces 70%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-letermovir', '1b49df80-be4f-47e0-a0b7-123f3e69395b', 'PREVYMIS (LETERMOVIR) TABLET, FILM COATED PREVYMIS (LETERMOVIR) INJECTION, SOLUTION PREVYMIS (LETERMOVIR) PELLET', 'PREVYMIS', '28', '2026-01-23', '2026-11-19'),
    rengPubchem(45138674, 'letermovir', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
