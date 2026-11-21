import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'midostaurina',
    nombre: 'Midostaurina',
    clase: 'Inhibidor de múltiples tirosina cinasas (FLT3, KIT)',
    sinonimos: [ 'midostaurin', 'Rydapt' ],
    formula: 'C35H30N4O4',
    masaMolar: 570.6,
    smiles: 'C[C@@]12[C@@H]([C@@H](C[C@@H](O1)N3C4=CC=CC=C4C5=C6C(=C7C8=CC=CC=C8N2C7=C53)CNC6=O)N(C)C(=O)C9=CC=CC=C9)OC',
    inchikey: 'BMGQWWVMWDBQGC-IIFHNQTCSA-N',
    cid: 9829523,
    iupac: 'N-[(2S,3R,4R,6R)-3-methoxy-2-methyl-16-oxo-29-oxa-1,7,17-triazaoctacyclo[12.12.2.12,6.07,28.08,13.015,19.020,27.021,26]nonacosa-8,10,12,14,19,21,23,25,27-nonaen-4-yl]-N-methylbenzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'midostaurina-oral',
      producto: 'RYDAPT · cápsula blanda',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '25 mg por cápsula, según la etiqueta',
      excipientes: [
        'polyoxyl 40 hydrogenated castor oil',
        'gelatin, unspecified',
        'polyethylene glycol 400',
        'glycerin',
        'alcohol',
        'corn oil',
        'titanium dioxide',
        '.alpha.-tocopherol',
        'ferric oxide yellow',
        'ferric oxide red',
        'carminic acid',
        'hypromellose 2910 (10000 mpa.s)',
        'propylene glycol',
        'water'
      ],
      usos: {
        t: 'Tratamiento de la leucemia mieloide aguda de nuevo diagnóstico con mutación de FLT3, con quimioterapia estándar, y de la mastocitosis sistémica avanzada, según la etiqueta.',
        ref: {
          f: 'dailymed-midostaurina',
          sec: '1 · Indicaciones',
          cita: 'Newly diagnosed acute myeloid leukemia (AML) that is FLT3 mutation-positive as detected by an FDA-approved test, in combination with standard cytarabine and daunorubicin induction',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-midostaurina',
      advertencias: [
        {
          titulo: 'Toxicidad pulmonar',
          texto: 'Suspenderla si hay signos o síntomas de toxicidad pulmonar; ha habido casos mortales.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-midostaurina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue RYDAPT in patients with signs or symptoms of pulmonary toxicity',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir a las embarazadas del riesgo para el feto.',
          organos: [],
          ref: {
            f: 'dailymed-midostaurina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women of the potential risk to the fetus',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la leucemia mieloide aguda, las más frecuentes (20 % o más): neutropenia febril, náuseas, mucositis, vómitos, cefalea, petequias, dolor musculoesquelético y epistaxis, entre otras.',
          '34084-4',
          'The most common adverse reactions (≥ 20%) were febrile neutropenia, nausea, mucositis, vomiting, headache, petechiae, musculoskeletal pain, epistaxis'
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
    contiene: 'Cápsula blanda: 25 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la leucemia mieloide aguda de nuevo diagnóstico con mutación de FLT3, con quimioterapia estándar, y de la mastocitosis sistémica avanzada, según la etiqueta.',
    actua: 'Inhibe varias tirosina cinasas, entre ellas FLT3 natural y mutada y KIT; sus metabolitos activos principales, CGP62221 y CGP52421, también las inhiben.',
    recorrido: 'El pico aparece entre 1 y 3 horas en ayunas; la comida reduce algo la Cmax y retrasa el pico. La excreción fecal supuso el 95 % de la dosis recuperada, casi todo como metabolitos; solo el 5 % se encontró en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con alimentos.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con alimentos.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '3 · Formas y concentraciones',
            cita: 'pale orange oblong soft capsule with red ink imprint',
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
      ocurre: 'El pico aparece entre 1 y 3 horas en ayunas; la comida reduce algo la Cmax y retrasa el pico.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico aparece entre 1 y 3 horas en ayunas; la comida reduce algo la Cmax y retrasa el pico.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to maximal concentrations (T max ) occurred between 1 to 3 hours post dose in the fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'La Cmax bajó un 20 % con una comida estándar y un 27 % con una comida rica en grasas.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'Midostaurin maximum concentrations (C max ) were reduced by 20% with a standard meal and by 27% with a high-fat meal compared to a fasted state',
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
      ocurre: 'La midostaurina y sus dos metabolitos activos se unen en más del 99,8 % a las proteínas plasmáticas in vitro, sobre todo a la alfa-1 glucoproteína ácida; el volumen de distribución es de 95,2 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La midostaurina y sus dos metabolitos activos se unen en más del 99,8 % a las proteínas plasmáticas in vitro, sobre todo a la alfa-1 glucoproteína ácida; el volumen de distribución es de 95,2 L.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'Midostaurin, CGP62221, and CGP52421 are greater than 99.8% bound to plasma protein in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución estimado de 95,2 L.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'Midostaurin has an estimated geometric mean volume of distribution (% coefficient of variation) of 95.2 L (31%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'FLT3 y KIT',
        efecto: 'Inhibe varias tirosina cinasas, entre ellas FLT3 natural y mutada y KIT; sus metabolitos activos principales, CGP62221 y CGP52421, también las inhiben.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe varias tirosina cinasas, entre ellas FLT3 natural y mutada y KIT; sus metabolitos activos principales, CGP62221 y CGP52421, también las inhiben.',
            ref: {
              f: 'dailymed-midostaurina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'midostaurin or its major human active metabolites CGP62221 and CGP52421 inhibit the activity of wild type FLT3, FLT3 mutant kinases (ITD and TKD), KIT (wild type and D816V mutant)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4.',
          ref: { f: 'dailymed-midostaurina', sec: '12.3 · Farmacocinética', cita: 'Midostaurin is primarily metabolized by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'CGP62221',
          actividad: 'activo',
          nota: 'Metabolito activo principal; semivida de unas 32 horas.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12 · Farmacología clínica',
            cita: 'midostaurin or its major human active metabolites CGP62221 and CGP52421',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'CGP52421',
          actividad: 'activo',
          nota: 'Metabolito activo principal; semivida muy larga, de unas 482 horas.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12 · Farmacología clínica',
            cita: 'midostaurin or its major human active metabolites CGP62221 and CGP52421',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción fecal supuso el 95 % de la dosis recuperada, casi todo como metabolitos; solo el 5 % se encontró en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción fecal supuso el 95 % de la dosis recuperada, casi todo como metabolitos; solo el 5 % se encontró en la orina.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'Fecal excretion accounted for 95% of the recovered dose with 91% of the recovered dose excreted as metabolites and 4% of the recovered dose as unchanged midostaurin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Solo el 5 % de la dosis recuperada se encontró en la orina.',
          ref: { f: 'dailymed-midostaurina', sec: '12.3 · Farmacocinética', cita: 'Only 5% of the recovered dose was found in urine', codigo: '43682-4' }
        },
        {
          t: 'La semivida terminal es de 19 horas para la midostaurina, 32 horas para CGP62221 y 482 horas para CGP52421.',
          ref: {
            f: 'dailymed-midostaurina',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean terminal half-life (% coefficient of variation) is 19 hours (39%) for midostaurin, 32 hours (31%) for CGP62221 and 482 hours (25%) for CGP52421',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas',
      valor: '1-3',
      unidad: 'h',
      analito: 'midostaurina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-midostaurina',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to maximal concentrations (T max ) occurred between 1 to 3 hours post dose in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '> 99,8',
      unidad: '%',
      analito: 'midostaurina y metabolitos activos',
      ref: {
        f: 'dailymed-midostaurina',
        sec: '12.3 · Farmacocinética',
        cita: 'Midostaurin, CGP62221, and CGP52421 are greater than 99.8% bound to plasma protein in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución estimado',
      valor: '95,2',
      unidad: 'L',
      analito: 'midostaurina',
      ref: {
        f: 'dailymed-midostaurina',
        sec: '12.3 · Farmacocinética',
        cita: 'Midostaurin has an estimated geometric mean volume of distribution (% coefficient of variation) of 95.2 L (31%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '19',
      unidad: 'h',
      analito: 'midostaurina',
      ref: {
        f: 'dailymed-midostaurina',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean terminal half-life (% coefficient of variation) is 19 hours (39%) for midostaurin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excreción fecal (sobre la dosis recuperada)',
      valor: '95',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-midostaurina', sec: '12.3 · Farmacocinética', cita: 'Fecal excretion accounted for 95% of the recovered dose', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-midostaurina', '11fa3fc9-6776-49a6-b1c1-653f627c3e58', 'RYDAPT CAPSULE, LIQUID FILLED', 'RYDAPT', '15', '2026-06-10', '2026-11-19'),
    rengPubchem(9829523, 'midostaurin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
