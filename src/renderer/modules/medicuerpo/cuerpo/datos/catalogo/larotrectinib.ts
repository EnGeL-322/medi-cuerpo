import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'larotrectinib',
    nombre: 'Larotrectinib',
    clase: 'Inhibidor de las cinasas TRK (TRKA, TRKB, TRKC)',
    sinonimos: [ 'larotrectinib sulfate', 'Vitrakvi' ],
    formula: 'C21H22F2N6O2',
    masaMolar: 428.4,
    smiles: 'C1C[C@@H](N(C1)C2=NC3=C(C=NN3C=C2)NC(=O)N4CC[C@@H](C4)O)C5=C(C=CC(=C5)F)F',
    inchikey: 'NYNZQNWKBKUAII-KBXCAEBGSA-N',
    cid: 46188928,
    iupac: '(3S)-N-[5-[(2R)-2-(2,5-difluorophenyl)pyrrolidin-1-yl]pyrazolo[1,5-a]pyrimidin-3-yl]-3-hydroxypyrrolidine-1-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'larotrectinib-oral',
      producto: 'VITRAKVI · cápsula',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por cápsula, según la etiqueta',
      excipientes: [ 'gelatin, unspecified', 'titanium dioxide' ],
      usos: {
        t: 'Tratamiento de adultos y niños con tumores sólidos con fusión del gen NTRK sin mutación de resistencia conocida, metastásicos o irresecables.',
        ref: {
          f: 'dailymed-larotrectinib',
          sec: '1 · Indicaciones',
          cita: 'VITRAKVI is indicated for the treatment of adult and pediatric patients with solid tumors that: have a neurotrophic receptor tyrosine kinase ( NTRK ) gene fusion',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-larotrectinib',
      advertencias: [
        {
          titulo: 'Efectos sobre el sistema nervioso central',
          texto: 'Mareo, alteración cognitiva, trastornos del ánimo y del sueño; no conducir si hay neurotoxicidad.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise patients and caretakers of the risk of CNS adverse reactions including dizziness, cognitive impairment, mood disorders, and sleep disturbances',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fracturas óseas',
          texto: 'Valorar con rapidez los signos o síntomas de fractura.',
          organos: [],
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Skeletal Fractures: Promptly evaluate patients with signs or symptoms of fractures',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar, cada 2 semanas los 2 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Obtain liver function tests (ALT, AST, ALP and bilirubin) before initiation of VITRAKVI',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con laboratorio): aumento de AST y ALT, anemia, hipoalbuminemia, dolor musculoesquelético, aumento de fosfatasa alcalina, leucopenia, linfopenia, neutropenia, hipocalcemia y fatiga, entre otras.',
          '34084-4',
          'most common (≥ 20%) adverse reactions, including laboratory abnormalities, with VITRAKVI were increased AST, increased ALT, anemia, hypoalbuminemia, musculoskeletal pain'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos y niños con tumores sólidos con fusión del gen NTRK sin mutación de resistencia conocida, metastásicos o irresecables.',
    actua: 'Inhibe las cinasas de receptores de tropomiosina TRKA, TRKB y TRKC, cuyas fusiones génicas actúan como impulsoras oncogénicas.',
    recorrido: 'La biodisponibilidad absoluta media de las cápsulas es del 34 % y el pico aparece en alrededor de 1 hora; una comida grasa baja la Cmax un 35 % sin cambiar el AUC. Tras 100 mg marcados, el 58 % se recuperó en las heces (5 % sin cambios) y el 39 % en la orina (20 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules 25 mg: white opaque hard gelatin capsule',
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
      ocurre: 'La biodisponibilidad absoluta media de las cápsulas es del 34 % y el pico aparece en alrededor de 1 hora; una comida grasa baja la Cmax un 35 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media de las cápsulas es del 34 % y el pico aparece en alrededor de 1 hora; una comida grasa baja la Cmax un 35 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of VITRAKVI capsules was 34% (range: 32% to 37%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC fue similar y la Cmax bajó un 35 %.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The AUC of larotrectinib was similar and the C max was reduced by 35%',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 70 % a las proteínas del plasma humano; el volumen de distribución tras la vía intravenosa es de 48 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 70 % a las proteínas del plasma humano; el volumen de distribución tras la vía intravenosa es de 48 L.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Larotrectinib is 70% bound to human plasma proteins in vitro and binding is independent of drug concentrations',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'TRKA, TRKB y TRKC',
        efecto: 'Inhibe las cinasas de receptores de tropomiosina TRKA, TRKB y TRKC, cuyas fusiones génicas actúan como impulsoras oncogénicas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas de receptores de tropomiosina TRKA, TRKB y TRKC, cuyas fusiones génicas actúan como impulsoras oncogénicas.',
            ref: {
              f: 'dailymed-larotrectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Larotrectinib is an inhibitor of the tropomyosin receptor kinases (TRK), TRKA, TRKB, and TRKC',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4; en plasma, el fármaco inalterado supone el 19 % y un O-glucurónido el 26 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4; en plasma, el fármaco inalterado supone el 19 % y un O-glucurónido el 26 %.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Larotrectinib is metabolized predominantly by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-glucurónido de larotrectinib',
          actividad: 'desconocida',
          nota: 'Componente circulante principal; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'unchanged larotrectinib constituted 19% and an O-linked glucuronide constituted 26% of the major circulating radioactive drug components in plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 58 % se recuperó en las heces (5 % sin cambios) y el 39 % en la orina (20 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 58 % se recuperó en las heces (5 % sin cambios) y el 39 % en la orina (20 % sin cambios).',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: '58% (5% unchanged) of the administered radioactivity was recovered in feces and 39% (20% unchanged) was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 2,9 horas y el aclaramiento aparente de 98 L/h en sujetos sanos.',
          ref: {
            f: 'dailymed-larotrectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) clearance (CL/F) of larotrectinib is 98 (44%) L/h and the half-life is 2.9 hours',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media de las cápsulas',
      valor: '34',
      unidad: '%',
      analito: 'larotrectinib',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of VITRAKVI capsules was 34%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'larotrectinib',
      poblacion: 'pacientes adultos',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels (C max ) of larotrectinib were achieved at approximately 1 hour after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '70',
      unidad: '%',
      analito: 'larotrectinib',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Larotrectinib is 70% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario (vía intravenosa)',
      valor: '48',
      unidad: 'L',
      analito: 'larotrectinib',
      poblacion: 'sujetos sanos',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) volume of distribution (V ss ) of larotrectinib is 48 (38%) L following intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '2,9',
      unidad: 'h',
      analito: 'larotrectinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the half-life is 2.9 hours following oral administration of VITRAKVI in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '98',
      unidad: 'L/h',
      analito: 'larotrectinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) clearance (CL/F) of larotrectinib is 98 (44%) L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '58',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 100 mg',
      ref: {
        f: 'dailymed-larotrectinib',
        sec: '12.3 · Farmacocinética',
        cita: '58% (5% unchanged) of the administered radioactivity was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-larotrectinib', '0c8ca614-58b2-4aa4-83d3-0387a8f782fd', 'VITRAKVI (LAROTRECTINIB) CAPSULE VITRAKVI (LAROTRECTINIB) SOLUTION, CONCENTRATE', 'VITRAKVI', '21', '2026-05-25', '2026-11-19'),
    rengPubchem(46188928, 'larotrectinib sulfate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
