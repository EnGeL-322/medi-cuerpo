import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'momelotinib',
    nombre: 'Momelotinib',
    clase: 'Inhibidor de JAK1/JAK2 y de ACVR1',
    sinonimos: [ 'momelotinib dihydrochloride', 'Ojjaara' ],
    formula: 'C23H22N6O2',
    masaMolar: 414.5,
    smiles: 'C1COCCN1C2=CC=C(C=C2)NC3=NC=CC(=N3)C4=CC=C(C=C4)C(=O)NCC#N',
    inchikey: 'ZVHNDZWQTBEVRY-UHFFFAOYSA-N',
    cid: 25062766,
    iupac: 'N-(cyanomethyl)-4-[2-(4-morpholin-4-ylanilino)pyrimidin-4-yl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'momelotinib-oral',
      producto: 'Ojjaara · comprimido',
      titular: 'GLAXOSMITHKLINE LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 150 mg o 200 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Diclorhidrato de momelotinib monohidrato',
        ref: { f: 'dailymed-momelotinib', sec: '11 · Descripción', cita: 'momelotinib dihydrochloride monohydrate', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'sodium starch glycolate type a corn',
        'silicon dioxide',
        'magnesium stearate',
        'propyl gallate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la mielofibrosis de riesgo intermedio o alto en adultos con anemia.',
        ref: {
          f: 'dailymed-momelotinib',
          sec: '1 · Indicaciones',
          cita: 'OJJAARA is indicated for the treatment of intermediate or high‑risk myelofibrosis (MF), including primary MF or secondary MF',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-momelotinib',
      advertencias: [
        {
          titulo: 'Riesgo de infecciones',
          texto: 'No iniciarlo con una infección activa; vigilar los signos de infección, incluida la reactivación de la hepatitis B.',
          organos: [],
          ref: {
            f: 'dailymed-momelotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not initiate OJJAARA in patients with an active infection',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-momelotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Obtain liver tests before initiation of and periodically throughout treatment with OJJAARA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Trombocitopenia y neutropenia',
          texto: 'Tratarlas reduciendo o interrumpiendo la dosis.',
          organos: [],
          ref: {
            f: 'dailymed-momelotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Thrombocytopenia and Neutropenia: Manage by dose reduction or interruption',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más en algún estudio): trombocitopenia, hemorragia, infección bacteriana, fatiga, mareo, diarrea y náuseas.',
          '34084-4',
          'most common adverse reactions (≥20% in either study) are thrombocytopenia, hemorrhage, bacterial infection, fatigue, dizziness, diarrhea, and nausea'
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
    contiene: 'Comprimido: 100 mg, 150 mg o 200 mg por comprimido, según la etiqueta; el activo va como diclorhidrato de momelotinib monohidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la mielofibrosis de riesgo intermedio o alto en adultos con anemia.',
    actua: 'Inhibe JAK1, JAK2 y la mutante JAK2 V617F; con su metabolito M21 inhibe además ACVR1, lo que reduce la hepcidina hepática y aumenta el hierro disponible para la eritropoyesis.',
    recorrido: 'La mediana del tmax en estado estacionario es de 2 horas; las comidas no producen diferencias clínicamente significativas. Tras una dosis marcada, el 69 % de la radiactividad se excretó en las heces (13 % sin cambios) y el 28 % en la orina (menos del 1 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '11 · Descripción',
            cita: 'The film coating of each tablet contains the following inactive ingredients',
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
      ocurre: 'La mediana del tmax en estado estacionario es de 2 horas; las comidas no producen diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax en estado estacionario es de 2 horas; las comidas no producen diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Median time to momelotinib C max (T max ) at steady state is 2 hours (Q1: 1 hour; Q3: 3 hours) post dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comidas ricas o pobres en grasas no hubo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in momelotinib pharmacokinetics were observed following administration of either a high‑fat meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con alimentos'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 91 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 984 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 91 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 984 L.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Momelotinib plasma protein binding is approximately 91% in healthy volunteers',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 984 L.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Momelotinib steady state apparent volume of distribution is 984 L (118%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'JAK1, JAK2 y ACVR1',
        efecto: 'Inhibe JAK1, JAK2 y la mutante JAK2 V617F; con su metabolito M21 inhibe además ACVR1, lo que reduce la hepcidina hepática y aumenta el hierro disponible para la eritropoyesis.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe JAK1, JAK2 y la mutante JAK2 V617F; con su metabolito M21 inhibe además ACVR1, lo que reduce la hepcidina hepática y aumenta el hierro disponible para la eritropoyesis.',
            ref: {
              f: 'dailymed-momelotinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Momelotinib is an inhibitor of wild type Janus Kinase 1 and 2 (JAK1/JAK2) and mutant JAK2 V617F',
              codigo: '43679-0'
            }
          },
          {
            t: 'La inhibición de ACVR1 reduce la expresión de hepcidina en el hígado y aumenta la disponibilidad de hierro.',
            ref: {
              f: 'dailymed-momelotinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'which produces subsequent inhibition of liver hepcidin expression and increased iron availability',
              codigo: '43679-0'
            },
            poblacion: 'higado'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan varias CYP (CYP3A4 36 %, CYP2C8 19 %, CYP2C9 17 %, CYP2C19 19 % y CYP1A2 9 %); el M21 se forma por CYP y aldehído oxidasa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan varias CYP (CYP3A4 36 %, CYP2C8 19 %, CYP2C9 17 %, CYP2C19 19 % y CYP1A2 9 %); el M21 se forma por CYP y aldehído oxidasa.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Momelotinib is metabolized by multiple cytochrome P450 (CYP) enzymes including CYP3A4 (36%), CYP2C8 (19%), CYP2C9 (17%), CYP2C19 (19%), and CYP1A2 (9%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M21',
          actividad: 'activo',
          nota: 'Metabolito activo con alrededor del 40 % de la actividad del momelotinib.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'M21 is an active human metabolite that has approximately 40% of the pharmacological activity of the parent',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 69 % de la radiactividad se excretó en las heces (13 % sin cambios) y el 28 % en la orina (menos del 1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 69 % de la radiactividad se excretó en las heces (13 % sin cambios) y el 28 % en la orina (menos del 1 % sin cambios).',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: '69% (13% unchanged) of radioactivity was excreted in feces and 28% (<1% unchanged) in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación del momelotinib y del M21 es de 4 a 8 horas.',
          ref: {
            f: 'dailymed-momelotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half‑life of momelotinib and the M21 metabolite is 4 to 8 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en estado estacionario',
      valor: '2',
      unidad: 'h',
      analito: 'momelotinib',
      poblacion: 'pacientes con mielofibrosis',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-momelotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Median time to momelotinib C max (T max ) at steady state is 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '91 (aprox.)',
      unidad: '%',
      analito: 'momelotinib',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-momelotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Momelotinib plasma protein binding is approximately 91% in healthy volunteers',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '984',
      unidad: 'L',
      analito: 'momelotinib',
      ref: {
        f: 'dailymed-momelotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Momelotinib steady state apparent volume of distribution is 984 L (118%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '4-8',
      unidad: 'h',
      analito: 'momelotinib',
      ref: {
        f: 'dailymed-momelotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half‑life of momelotinib and the M21 metabolite is 4 to 8 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento',
      valor: '103',
      unidad: 'L/h',
      analito: 'momelotinib',
      ref: { f: 'dailymed-momelotinib', sec: '12.3 · Farmacocinética', cita: 'Momelotinib clearance is 103 L/h (87%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '69',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-momelotinib',
        sec: '12.3 · Farmacocinética',
        cita: '69% (13% unchanged) of radioactivity was excreted in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-momelotinib', '4a672fd1-eb7b-4aa9-9b23-845e4b5dc400', 'OJJAARA (MOMELOTINIB) TABLET', 'Ojjaara', '9', '2026-07-31', '2026-11-19'),
    rengPubchem(25062766, 'momelotinib dihydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
