import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pacritinib',
    nombre: 'Pacritinib',
    clase: 'Inhibidor de cinasas (JAK2, FLT3, IRAK1, ACVR1)',
    sinonimos: [ 'pacritinib citrate', 'Vonjo' ],
    formula: 'C28H32N4O3',
    masaMolar: 472.6,
    smiles: 'C1CCN(C1)CCOC2=C3COC/C=C/COCC4=CC(=CC=C4)C5=NC(=NC=C5)NC(=C3)C=C2',
    inchikey: 'HWXVIOGONBBTBY-ONEGZZNKSA-N',
    cid: 46216796,
    iupac: '(16E)-11-(2-pyrrolidin-1-ylethoxy)-14,19-dioxa-5,7,27-triazatetracyclo[19.3.1.12,6.18,12]heptacosa-1(24),2(27),3,5,8(26),9,11,16,21(25),22-decaene',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pacritinib-oral',
      producto: 'Vonjo · cápsula',
      titular: 'SOBI, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'polyethylene glycol 8000', 'magnesium stearate', 'gelatin, unspecified' ],
      usos: {
        t: 'Tratamiento de adultos con mielofibrosis de riesgo intermedio o alto y plaquetas por debajo de 50 × 10⁹/L.',
        ref: {
          f: 'dailymed-pacritinib',
          sec: '1 · Indicaciones',
          cita: 'VONJO is indicated for the treatment of adults with intermediate or high-risk primary or secondary (post-polycythemia vera or post-essential thrombocythemia) myelofibrosis (MF) with a platelet count below 50 × 10 9 /L',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pacritinib',
      advertencias: [
        {
          titulo: 'Hemorragia',
          texto: 'Evitar si hay sangrado activo y suspender antes de una cirugía programada.',
          organos: [],
          ref: {
            f: 'dailymed-pacritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with active bleeding and hold VONJO prior to any planned surgical procedures',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del intervalo QT',
          texto: 'Evitar con QTc basal mayor de 480 ms y corregir la hipopotasemia.',
          organos: [],
          ref: {
            f: 'dailymed-pacritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with baseline QTc >480 msec',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Trombosis',
          texto: 'Pueden aparecer trombosis venosa profunda, embolia pulmonar y trombosis arterial.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-pacritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Including deep venous thrombosis, pulmonary embolism, and arterial thrombosis may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más) fueron diarrea, trombocitopenia, náuseas, anemia y edema periférico.',
          '34084-4',
          'most common adverse reactions in ≥20% of patients (N=106) were diarrhea, thrombocytopenia, nausea, anemia, and peripheral edema'
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
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con mielofibrosis de riesgo intermedio o alto y plaquetas por debajo de 50 × 10⁹/L.',
    actua: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada (V617F), FLT3 e IRAK1, y también frente a ACVR1/ALK2; no inhibe JAK1 a concentraciones clínicas.',
    recorrido: 'Alcanza la Cmax en unas 4 a 5 horas; una comida grasa no tiene efecto significativo. Tras 400 mg marcados en adultos sanos, el 87 % de la radiactividad se recuperó en las heces y el 6 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-pacritinib', sec: '11 · Descripción', cita: 'The gelatin capsule is bovine derived', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Alcanza la Cmax en unas 4 a 5 horas; una comida grasa no tiene efecto significativo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Alcanza la Cmax en unas 4 a 5 horas; una comida grasa no tiene efecto significativo.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Pacritinib achieves C max within approximately 4 to 5 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas no hubo efecto significativo sobre la farmacocinética.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'There was no significant effect of food on the pharmacokinetics of pacritinib following oral administration of VONJO 200 mg with a high-fat meal',
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
      ocurre: 'Se une en alrededor del 98,8 % a las proteínas plasmáticas; la mediana del volumen de distribución aparente es de 229 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 98,8 % a las proteínas plasmáticas; la mediana del volumen de distribución aparente es de 229 L.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of pacritinib is approximately 98.8%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Mediana del volumen de distribución aparente en estado estacionario de 229 L en mielofibrosis.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) apparent volume of distribution of pacritinib at steady state is 229 L (156 to 591 L) in patients with MF',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con mielofibrosis'
        }
      ],
      accion: {
        diana: 'JAK2, FLT3 e IRAK1',
        efecto: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada (V617F), FLT3 e IRAK1, y también frente a ACVR1/ALK2; no inhibe JAK1 a concentraciones clínicas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor oral de cinasas activo frente a JAK2 natural y mutada (V617F), FLT3 e IRAK1, y también frente a ACVR1/ALK2; no inhibe JAK1 a concentraciones clínicas.',
            ref: {
              f: 'dailymed-pacritinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pacritinib is an oral kinase inhibitor with activity against wild type Janus associated kinase 2 (JAK2), mutant JAK2V617F, FMS-like tyrosine kinase 3 (FLT3), and interleukin 1 receptor associated kinase-1 (IRAK1)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4; el fármaco original es el principal componente circulante y sus metabolitos M1 y M2 suponen alrededor del 10 % de la exposición cada uno.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4; el fármaco original es el principal componente circulante y sus metabolitos M1 y M2 suponen alrededor del 10 % de la exposición cada uno.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Pacritinib is predominantly metabolized by the CYP3A4 isozyme',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados en adultos sanos, el 87 % de la radiactividad se recuperó en las heces y el 6 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados en adultos sanos, el 87 % de la radiactividad se recuperó en las heces y el 6 % en la orina.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: '87% of the radioactivity was recovered in feces, and 6% was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de 27,7 horas y el aclaramiento aparente de 2,09 L/h.',
          ref: {
            f: 'dailymed-pacritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent clearance at steady-state (CV%) of pacritinib is 2.09 L/h (33.1%), and mean effective half-life (CV%) is 27.7 hours (17.0%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '4-5 (aprox.)',
      unidad: 'h',
      analito: 'pacritinib',
      ref: {
        f: 'dailymed-pacritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Pacritinib achieves C max within approximately 4 to 5 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98,8 (aprox.)',
      unidad: '%',
      analito: 'pacritinib',
      ref: {
        f: 'dailymed-pacritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of pacritinib is approximately 98.8%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Mediana del volumen de distribución aparente',
      valor: '229',
      unidad: 'L',
      analito: 'pacritinib',
      poblacion: 'pacientes con mielofibrosis',
      ref: {
        f: 'dailymed-pacritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) apparent volume of distribution of pacritinib at steady state is 229 L (156 to 591 L) in patients with MF',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media',
      valor: '27,7',
      unidad: 'h',
      analito: 'pacritinib',
      ref: { f: 'dailymed-pacritinib', sec: '12.3 · Farmacocinética', cita: 'mean effective half-life (CV%) is 27.7 hours (17.0%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '2,09',
      unidad: 'L/h',
      analito: 'pacritinib',
      ref: {
        f: 'dailymed-pacritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent clearance at steady-state (CV%) of pacritinib is 2.09 L/h (33.1%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '87',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis oral única marcada de 400 mg',
      ref: {
        f: 'dailymed-pacritinib',
        sec: '12.3 · Farmacocinética',
        cita: '87% of the radioactivity was recovered in feces, and 6% was recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pacritinib', '4b5ab444-0e1a-4984-99db-76ad11a298ee', 'VONJO (PACRITINIB) CAPSULE', 'Vonjo', '11', '2026-08-03', '2026-11-19'),
    rengPubchem(46216796, 'pacritinib citrate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
