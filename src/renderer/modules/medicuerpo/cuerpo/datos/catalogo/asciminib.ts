import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'asciminib',
    nombre: 'Asciminib',
    clase: 'Inhibidor de la tirosina cinasa ABL/BCR-ABL1 que se une al bolsillo miristoilo',
    sinonimos: [ 'asciminib hydrochloride', 'Scemblix' ],
    formula: 'C20H18ClF2N5O3',
    masaMolar: 449.8,
    smiles: 'C1CN(C[C@@H]1O)C2=C(C=C(C=N2)C(=O)NC3=CC=C(C=C3)OC(F)(F)Cl)C4=CC=NN4',
    inchikey: 'VOVZXURTCKPRDQ-CQSZACIVSA-N',
    cid: 72165228,
    iupac: 'N-[4-[chloro(difluoro)methoxy]phenyl]-6-[(3R)-3-hydroxypyrrolidin-1-yl]-5-(1H-pyrazol-5-yl)pyridine-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'asciminib-oral',
      producto: 'SCEMBLIX · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg, 40 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de asciminib',
        ref: { f: 'dailymed-asciminib', sec: '11 · Descripción', cita: 'Asciminib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'lactose monohydrate',
        'lecithin, soybean',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'xanthan gum',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia mieloide crónica Ph+ en fase crónica, de nuevo diagnóstico o tratada previamente, según la etiqueta.',
        ref: {
          f: 'dailymed-asciminib',
          sec: '1 · Indicaciones',
          cita: 'Newly diagnosed Philadelphia chromosome-positive chronic myeloid leukemia (Ph+ CML) in chronic phase (CP)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-asciminib',
      advertencias: [
        {
          titulo: 'Mielosupresión',
          texto: 'Pueden aparecer trombocitopenia y neutropenia graves; vigilar el hemograma.',
          organos: [],
          ref: {
            f: 'dailymed-asciminib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe thrombocytopenia and neutropenia events may occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad pancreática',
          texto: 'Vigilar lipasa y amilasa; valorar una pancreatitis si la lipasa sube con síntomas abdominales.',
          organos: [],
          ref: { f: 'dailymed-asciminib', sec: '5 · Advertencias y precauciones', cita: 'Monitor serum lipase and amylase', codigo: '43685-7' }
        },
        {
          titulo: 'Hipertensión',
          texto: 'Vigilar la presión arterial y tratar la hipertensión.',
          organos: [],
          ref: {
            f: 'dailymed-asciminib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure and manage hypertension as clinically indicated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): dolor musculoesquelético, exantema, fatiga, infección respiratoria alta, cefalea, dolor abdominal, artralgia y diarrea.',
          '34084-4',
          'Most common adverse reactions (≥ 20%) are musculoskeletal pain, rash, fatigue, upper respiratory tract infection, headache, abdominal pain, arthralgia, and diarrhea'
        ],
        [
          'Las alteraciones de laboratorio más frecuentes incluyen descensos de linfocitos, leucocitos, plaquetas y neutrófilos.',
          '34084-4',
          'Most common select laboratory abnormalities (≥ 20%) are lymphocyte count decreased, leukocyte count decreased, platelet count decreased, neutrophil count decreased'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg, 40 mg o 100 mg por comprimido, según la etiqueta; el activo va como clorhidrato de asciminib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia mieloide crónica Ph+ en fase crónica, de nuevo diagnóstico o tratada previamente, según la etiqueta.',
    actua: 'Inhibe la actividad cinasa ABL1 de la proteína de fusión BCR::ABL1 uniéndose al bolsillo miristoilo de ABL; es activo frente a la forma natural y varias mutantes, incluida la T315I.',
    recorrido: 'La mediana del tmax es de 2,5 horas; las comidas reducen mucho la exposición (una comida grasa bajó el AUC un 62 % y la Cmax un 68 %). Tras 80 mg marcados, el 80 % de la dosis se recuperó en las heces (57 % sin cambios) y el 11 % en la orina; se elimina por secreción biliar mediante la BCRP.'
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
          ref: { f: 'dailymed-asciminib', sec: '3 · Formas y concentraciones', cita: '20 mg asciminib film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de 2,5 horas; las comidas reducen mucho la exposición (una comida grasa bajó el AUC un 62 % y la Cmax un 68 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 2,5 horas; las comidas reducen mucho la exposición (una comida grasa bajó el AUC un 62 % y la Cmax un 68 %).',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) T max of asciminib is 2.5 hours (2 to 3 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC bajó un 62 % y la Cmax un 68 %.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'The AUC and C max of asciminib decreased by 62% and 68%, respectively, with a high-fat meal',
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
      ocurre: 'Se une en un 97 % a las proteínas plasmáticas humanas in vitro; el volumen de distribución aparente en estado estacionario es de 151 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 % a las proteínas plasmáticas humanas in vitro; el volumen de distribución aparente en estado estacionario es de 151 L.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'Asciminib is 97% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 151 L.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of asciminib at steady state is 151 L (135%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Bolsillo miristoilo de BCR::ABL1',
        efecto: 'Inhibe la actividad cinasa ABL1 de la proteína de fusión BCR::ABL1 uniéndose al bolsillo miristoilo de ABL; es activo frente a la forma natural y varias mutantes, incluida la T315I.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la actividad cinasa ABL1 de la proteína de fusión BCR::ABL1 uniéndose al bolsillo miristoilo de ABL; es activo frente a la forma natural y varias mutantes, incluida la T315I.',
            ref: {
              f: 'dailymed-asciminib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Asciminib inhibits the ABL1 kinase activity of the BCR::ABL1 fusion protein, by binding to the ABL myristoyl pocket',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por oxidación mediante la CYP3A4 y por glucuronidación mediante UGT2B7 y UGT2B17.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por oxidación mediante la CYP3A4 y por glucuronidación mediante UGT2B7 y UGT2B17.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'Asciminib is metabolized by CYP3A4-mediated oxidation, UGT2B7- and UGT2B17-mediated glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 80 mg marcados, el 80 % de la dosis se recuperó en las heces (57 % sin cambios) y el 11 % en la orina; se elimina por secreción biliar mediante la BCRP.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 80 mg marcados, el 80 % de la dosis se recuperó en las heces (57 % sin cambios) y el 11 % en la orina; se elimina por secreción biliar mediante la BCRP.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'Asciminib is eliminated by biliary secretion via breast cancer-resistant protein (BCRP)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El 80 % se recuperó en las heces y el 11 % en la orina.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'Eighty percent (57% as unchanged) and 11% (2.5% as unchanged) of the asciminib dose were recovered in the feces and in the urine',
            codigo: '43682-4'
          },
          poblacion: 'heces,orina'
        },
        {
          t: 'La semivida terminal es de 5,5 horas con 40 mg dos veces al día u 80 mg una vez al día.',
          ref: {
            f: 'dailymed-asciminib',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of asciminib is 5.5 hours (38%) at 40 mg twice daily and 80 mg once daily',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2,5',
      unidad: 'h',
      analito: 'asciminib',
      ref: {
        f: 'dailymed-asciminib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) T max of asciminib is 2.5 hours (2 to 3 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '97',
      unidad: '%',
      analito: 'asciminib',
      ref: { f: 'dailymed-asciminib', sec: '12.3 · Farmacocinética', cita: 'Asciminib is 97% bound to human plasma proteins in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '151',
      unidad: 'L',
      analito: 'asciminib',
      ref: {
        f: 'dailymed-asciminib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of asciminib at steady state is 151 L (135%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '5,5',
      unidad: 'h',
      analito: 'asciminib',
      ref: {
        f: 'dailymed-asciminib',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of asciminib is 5.5 hours (38%) at 40 mg twice daily and 80 mg once daily',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente',
      valor: '6,7',
      unidad: 'L/h',
      analito: 'asciminib',
      ref: {
        f: 'dailymed-asciminib',
        sec: '12.3 · Farmacocinética',
        cita: 'The total apparent clearance of asciminib is 6.7 L/hour (48%) at 40 mg twice daily and 80 mg once daily',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 80 mg',
      ref: {
        f: 'dailymed-asciminib',
        sec: '12.3 · Farmacocinética',
        cita: 'Eighty percent (57% as unchanged) and 11% (2.5% as unchanged) of the asciminib dose were recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-asciminib', 'e33001e7-3650-42b1-ae56-cddb5c43aa2b', 'SCEMBLIX (ASCIMINIB) TABLET, FILM COATED', 'SCEMBLIX', '13', '2026-09-29', '2026-11-19'),
    rengPubchem(72165228, 'asciminib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
