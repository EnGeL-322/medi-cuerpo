import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'selumetinib',
    nombre: 'Selumetinib',
    clase: 'Inhibidor de MEK1 y MEK2',
    sinonimos: [ 'selumetinib', 'Koselugo' ],
    formula: 'C17H15BrClFN4O3',
    masaMolar: 457.7,
    smiles: 'CN1C=NC2=C1C=C(C(=C2F)NC3=C(C=C(C=C3)Br)Cl)C(=O)NOCCO',
    inchikey: 'CYOHGALHFOKKQC-UHFFFAOYSA-N',
    cid: 10127622,
    iupac: '6-(4-bromo-2-chloroanilino)-7-fluoro-N-(2-hydroxyethoxy)-3-methylbenzimidazole-5-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'selumetinib-oral',
      producto: 'KOSELUGO · cápsula',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 25 mg por cápsula, según la etiqueta',
      excipientes: [
        'vitamin e polyethylene glycol succinate',
        'hypromellose, unspecified',
        'carrageenan',
        'potassium chloride',
        'titanium dioxide',
        'shellac',
        'isopropyl alcohol',
        'ferrosoferric oxide',
        'butyl alcohol',
        'propylene glycol',
        'ammonia',
        'water'
      ],
      usos: {
        t: 'Tratamiento de la neurofibromatosis de tipo 1 con neurofibromas plexiformes sintomáticos inoperables, desde 1 año de edad.',
        ref: {
          f: 'dailymed-selumetinib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult and pediatric patients 1 year of age and older with neurofibromatosis type 1 (NF1) who have symptomatic, inoperable plexiform neurofibromas (PN)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-selumetinib',
      advertencias: [
        {
          titulo: 'Disfunción ventricular izquierda',
          texto: 'Valorar la fracción de eyección por ecocardiograma antes de empezar, cada 3 meses el primer año y después cada 6 meses.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-selumetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess ejection fraction by echocardiogram prior to initiating treatment, every 3 months during the first year of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad ocular',
          texto: 'Hacer exploraciones oftalmológicas completas antes de empezar, periódicamente y ante cambios visuales.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-selumetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Conduct comprehensive ophthalmic assessments prior to initiating KOSELUGO, at regular intervals during treatment, and for new or worsening visual changes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la creatina fosfocinasa',
          texto: 'Medir la CPK sérica antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-selumetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Obtain serum CPK prior to initiating KOSELUGO, periodically during treatment, and as clinically indicated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes (40 % o más): exantema, dermatitis acneiforme y diarrea.',
          '34084-4',
          'Most common adverse reactions in adult patients (≥ 40%) are rash (all), dermatitis acneiform, and diarrhea'
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
    contiene: 'Cápsula: 10 mg o 25 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la neurofibromatosis de tipo 1 con neurofibromas plexiformes sintomáticos inoperables, desde 1 año de edad.',
    actua: 'Inhibe MEK1 y MEK2, reguladores de la vía ERK, que a menudo está activada en los tumores.',
    recorrido: 'La biodisponibilidad oral absoluta es del 62 % y la mediana del tiempo hasta el pico, de 1,5 horas; la comida no cambia de forma relevante la exposición. Tras 75 mg marcados en adultos sanos, el 59 % de la dosis se recuperó en las heces (19 % sin cambios) y el 33 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '3 · Formas y concentraciones',
            cita: 'white to off-white, opaque, hard capsule sealed with a clear band',
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
      ocurre: 'La biodisponibilidad oral absoluta es del 62 % y la mediana del tiempo hasta el pico, de 1,5 horas; la comida no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 62 % y la mediana del tiempo hasta el pico, de 1,5 horas; la comida no cambia de forma relevante la exposición.',
          ref: { f: 'dailymed-selumetinib', sec: '12.3 · Farmacocinética', cita: 'Selumetinib absolute oral bioavailability is 62%', codigo: '43682-4' }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 1,5 horas.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Selumetinib median (min, max) time to maximum plasma concentrations (Tmax) is 1.5 (0.22, 6.0) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida pobre o rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in selumetinib pharmacokinetics were observed following administration of low fat (400-500 calories) or high-fat (800-1000 calories) meal',
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
      ocurre: 'Se une en un 98,4 % a las proteínas plasmáticas, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 98,4 % a las proteínas plasmáticas, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding is 98.4% (primarily albumin)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente va de 40 a 3710 L en el intervalo de dosis estudiado.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Selumetinib apparent volume of distribution across a dose range of 20 mg/m 2 to 30 mg/m 2 (0.8 to 1.2 times the recommended dosage) ranges from 40 L-3710 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'MEK1 y MEK2',
        efecto: 'Inhibe MEK1 y MEK2, reguladores de la vía ERK, que a menudo está activada en los tumores.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe MEK1 y MEK2, reguladores de la vía ERK, que a menudo está activada en los tumores.',
            ref: {
              f: 'dailymed-selumetinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Selumetinib is an inhibitor of mitogen-activated protein kinase kinases 1 and 2 (MEK1/2)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por otras CYP; también se glucuronida por la UGT1A1 y la UGT1A3.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por otras CYP; también se glucuronida por la UGT1A1 y la UGT1A3.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Selumetinib is primarily metabolized by CYP3A4 and to a lesser extent by CYP2C19, CYP1A2, CYP2C9, CYP2E1, and CYP3A5',
            codigo: '43682-4'
          }
        },
        {
          t: 'También se glucuronida por la UGT1A1 y la UGT1A3.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Selumetinib also undergoes glucuronidation by UGT1A1 and UGT1A3',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetil selumetinib',
          actividad: 'activo',
          nota: 'Metabolito activo, formado por la CYP2C19 y la CYP1A2.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The active metabolite, N desmethyl selumetinib, is generated by CYP2C19 and CYP1A2',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 75 mg marcados en adultos sanos, el 59 % de la dosis se recuperó en las heces (19 % sin cambios) y el 33 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 75 mg marcados en adultos sanos, el 59 % de la dosis se recuperó en las heces (19 % sin cambios) y el 33 % en la orina.',
          ref: {
            f: 'dailymed-selumetinib',
            sec: '12.3 · Farmacocinética',
            cita: '59% of the dose was recovered in feces (19% as unchanged) and 33% in urine (< 1% as parent)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 9 horas.',
          ref: { f: 'dailymed-selumetinib', sec: '12.3 · Farmacocinética', cita: 'Selumetinib elimination half-life is 9 (28) hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '62',
      unidad: '%',
      analito: 'selumetinib',
      ref: { f: 'dailymed-selumetinib', sec: '12.3 · Farmacocinética', cita: 'Selumetinib absolute oral bioavailability is 62%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1,5',
      unidad: 'h',
      analito: 'selumetinib',
      ref: {
        f: 'dailymed-selumetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Selumetinib median (min, max) time to maximum plasma concentrations (Tmax) is 1.5 (0.22, 6.0) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98,4',
      unidad: '%',
      analito: 'selumetinib',
      ref: { f: 'dailymed-selumetinib', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding is 98.4% (primarily albumin)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '9',
      unidad: 'h',
      analito: 'selumetinib',
      ref: { f: 'dailymed-selumetinib', sec: '12.3 · Farmacocinética', cita: 'Selumetinib elimination half-life is 9 (28) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '59',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis única marcada de 75 mg',
      ref: {
        f: 'dailymed-selumetinib',
        sec: '12.3 · Farmacocinética',
        cita: '59% of the dose was recovered in feces (19% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-selumetinib', '7d042c61-f28f-4ab5-ab10-d7558c0d49ff', 'KOSELUGO (SELUMETINIB) CAPSULE KOSELUGO (SELUMETINIB) GRANULE', 'KOSELUGO', '17', '2026-06-01', '2026-11-19'),
    rengPubchem(10127622, 'selumetinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
