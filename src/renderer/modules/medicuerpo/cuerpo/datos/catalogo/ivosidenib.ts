import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ivosidenib',
    nombre: 'Ivosidenib',
    clase: 'Inhibidor de la isocitrato deshidrogenasa 1 mutada (IDH1)',
    sinonimos: [ 'ivosidenib', 'Tibsovo' ],
    formula: 'C28H22ClF3N6O3',
    masaMolar: 583,
    smiles: 'C1CC(=O)N([C@@H]1C(=O)N(C2=CC(=CN=C2)F)[C@@H](C3=CC=CC=C3Cl)C(=O)NC4CC(C4)(F)F)C5=NC=CC(=C5)C#N',
    inchikey: 'WIJZXSAJMHAVGX-DHLKQENFSA-N',
    cid: 71657455,
    iupac: '(2S)-N-[(1S)-1-(2-chlorophenyl)-2-[(3,3-difluorocyclobutyl)amino]-2-oxoethyl]-1-(4-cyano-2-pyridinyl)-N-(5-fluoro-3-pyridinyl)-5-oxopyrrolidine-2-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ivosidenib-oral',
      producto: 'TIBSOVO · comprimido recubierto con película',
      titular: 'SERVIER PHARMACEUTICAL LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromellose acetate succinate 06081224 (3 mpa.s)',
        'magnesium stearate',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'fd&c blue no. 2',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Tratamiento de pacientes con una mutación sensible de IDH1: leucemia mieloide aguda, síndromes mielodisplásicos y colangiocarcinoma, según la etiqueta.',
        ref: {
          f: 'dailymed-ivosidenib',
          sec: '1 · Indicaciones',
          cita: 'TIBSOVO is an isocitrate dehydrogenase-1 (IDH1) inhibitor indicated for patients with a susceptible IDH1 mutation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ivosidenib',
      advertencias: [
        {
          titulo: 'Síndrome de diferenciación en LMA y SMD',
          texto: 'Puede ser mortal; si se sospecha, iniciar corticoides y vigilancia hemodinámica.',
          organos: [],
          ref: {
            f: 'dailymed-ivosidenib',
            sec: 'Advertencia destacada',
            cita: 'Patients treated with TIBSOVO have experienced symptoms of differentiation syndrome, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QTc',
          texto: 'Vigilar ECG y electrolitos; reducir o interrumpir la dosis si se prolonga el QTc.',
          organos: [],
          ref: {
            f: 'dailymed-ivosidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'QTc Interval Prolongation : Monitor electrocardiograms and electrolytes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome de Guillain-Barré',
          texto: 'Vigilar signos motores o sensitivos nuevos y suspender de forma definitiva si se diagnostica.',
          organos: [],
          ref: {
            f: 'dailymed-ivosidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for signs and symptoms of new motor and/or sensory findings',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la LMA, las más frecuentes (25 % o más, con laboratorio): descenso de leucocitos, diarrea, descenso de hemoglobina y plaquetas, aumento de glucosa, fatiga, aumento de fosfatasa alcalina, edema y descenso de potasio, entre otras.',
          '34084-4',
          'most common adverse reactions including laboratory abnormalities (≥ 25%) in patients with AML are leukocytes decreased, diarrhea, hemoglobin decreased, platelets decreased, glucose increased, fatigue'
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
    contiene: 'Comprimido recubierto con película: 250 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de pacientes con una mutación sensible de IDH1: leucemia mieloide aguda, síndromes mielodisplásicos y colangiocarcinoma, según la etiqueta.',
    actua: 'Inhibidor de molécula pequeña dirigido a la enzima IDH1 mutada, cuyas mutaciones sensibles aumentan el 2-hidroxiglutarato en las células leucémicas.',
    recorrido: 'La mediana del tmax es de 2 a 3 horas; una comida grasa multiplica la Cmax por 1,98 y el AUC por 1,24. Tras una dosis marcada, el 77 % se recuperó en las heces (67 % sin cambios) y el 17 % en la orina (10 % sin cambios).'
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
            f: 'dailymed-ivosidenib',
            sec: '11 · Descripción',
            cita: 'The tablet coating includes FD&C blue #2, hypromellose, lactose monohydrate, titanium dioxide, and triacetin',
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
      ocurre: 'La mediana del tmax es de 2 a 3 horas; una comida grasa multiplica la Cmax por 1,98 y el AUC por 1,24.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 2 a 3 horas; una comida grasa multiplica la Cmax por 1,98 y el AUC por 1,24.',
          ref: { f: 'dailymed-ivosidenib', sec: '12.3 · Farmacocinética', cita: 'Median T max (hr) 2 3 3 2', codigo: '43682-4' }
        },
        {
          t: 'Con una comida rica en grasas la Cmax aumentó 1,98 veces y el AUC 1,24 veces.',
          ref: {
            f: 'dailymed-ivosidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'C max 1.98-fold (90% CI: 1.79, 2.19) AUC 1.24-fold (90% CI: 1.16, 1.33)',
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
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une entre un 92 % y un 96 % a las proteínas; el volumen de distribución aparente en estado estacionario es de unos 400 a 700 L según la enfermedad.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une entre un 92 % y un 96 % a las proteínas; el volumen de distribución aparente en estado estacionario es de unos 400 a 700 L según la enfermedad.',
          ref: { f: 'dailymed-ivosidenib', sec: '12.3 · Farmacocinética', cita: 'In vitro protein binding 92 to 96%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'IDH1 mutada',
        efecto: 'Inhibidor de molécula pequeña dirigido a la enzima IDH1 mutada, cuyas mutaciones sensibles aumentan el 2-hidroxiglutarato en las células leucémicas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de molécula pequeña dirigido a la enzima IDH1 mutada, cuyas mutaciones sensibles aumentan el 2-hidroxiglutarato en las células leucémicas.',
            ref: {
              f: 'dailymed-ivosidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ivosidenib is a small molecule inhibitor that targets the mutant isocitrate dehydrogenase 1 (IDH1) enzyme',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4, con vías menores de N-desalquilación e hidrólisis; más del 92 % de la radiactividad plasmática es ivosidenib.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4, con vías menores de N-desalquilación e hidrólisis; más del 92 % de la radiactividad plasmática es ivosidenib.',
          ref: {
            f: 'dailymed-ivosidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolic pathways Major CYP3A4 Minor N-dealkylation and hydrolytic pathways',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 77 % se recuperó en las heces (67 % sin cambios) y el 17 % en la orina (10 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 77 % se recuperó en las heces (67 % sin cambios) y el 17 % en la orina (10 % sin cambios).',
          ref: {
            f: 'dailymed-ivosidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Urine 17% (10% as unchanged ivosidenib) Feces 77% (67% as unchanged ivosidenib)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en LMA en recaída',
      valor: '3',
      unidad: 'h',
      analito: 'ivosidenib',
      poblacion: 'pacientes con LMA en recaída o refractaria',
      ref: { f: 'dailymed-ivosidenib', sec: '12.3 · Farmacocinética', cita: 'Median T max (hr) 2 3 3 2', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '92-96',
      unidad: '%',
      analito: 'ivosidenib',
      ref: { f: 'dailymed-ivosidenib', sec: '12.3 · Farmacocinética', cita: 'In vitro protein binding 92 to 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario (LMA en recaída)',
      valor: '403',
      unidad: 'L',
      analito: 'ivosidenib',
      poblacion: 'pacientes con LMA en recaída o refractaria',
      ref: {
        f: 'dailymed-ivosidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Apparent volume of distribution at steady state (L) 504 (22%) 403 (35%) 552 (26%) 706 (45%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en estado estacionario (LMA en recaída)',
      valor: '58',
      unidad: 'h',
      analito: 'ivosidenib',
      poblacion: 'pacientes con LMA en recaída o refractaria',
      ref: {
        f: 'dailymed-ivosidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Terminal half-life at steady state (hr) 98 (42%) 58 (42%) 96 (43%) 129 (102%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario (LMA en recaída)',
      valor: '5,6',
      unidad: 'L/h',
      analito: 'ivosidenib',
      poblacion: 'pacientes con LMA en recaída o refractaria',
      ref: {
        f: 'dailymed-ivosidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Apparent clearance at steady state (L/hr) 4.6 (35%) 5.6 (35%) 5.1 (35%) 6.1 (31%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '77',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-ivosidenib', sec: '12.3 · Farmacocinética', cita: 'Feces 77% (67% as unchanged ivosidenib)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ivosidenib', '65d254c0-67ad-42c4-b972-ad463b755b2d', 'TIBSOVO (IVOSIDENIB) TABLET, FILM COATED', 'TIBSOVO', '11', '2025-12-22', '2026-11-19'),
    rengPubchem(71657455, 'ivosidenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
