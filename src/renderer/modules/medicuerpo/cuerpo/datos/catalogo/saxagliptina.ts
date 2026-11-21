import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'saxagliptina',
    nombre: 'Saxagliptina',
    clase: 'Inhibidor de la DPP-4 (antidiabético oral)',
    sinonimos: [ 'saxagliptin', 'Onglyza' ],
    formula: 'C18H25N3O2',
    masaMolar: 315.4,
    smiles: 'C1[C@@H]2C[C@@H]2N([C@@H]1C#N)C(=O)[C@H](C34CC5CC(C3)CC(C5)(C4)O)N',
    inchikey: 'QGJUIPDUBHWZPV-SGTAVMJGSA-N',
    cid: 11243969,
    iupac: '(1S,3S,5S)-2-[(2S)-2-amino-2-(3-hydroxy-1-adamantyl)acetyl]-2-azabicyclo[3.1.0]hexane-3-carbonitrile',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'saxagliptina-oral',
      producto: 'Saxagliptin · comprimido recubierto con película',
      titular: 'MYLAN PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg o 5 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Dihidrato de saxagliptina',
        ref: { f: 'dailymed-saxagliptina', sec: '11 · Descripción', cita: 'Saxagliptin hydrochloride dihydrate', codigo: '34089-3' }
      },
      excipientes: [
        'croscarmellose sodium',
        'hydrochloric acid',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose 200',
        'polyethylene glycol 3350',
        'polyethylene glycol 4000',
        'polyvinyl alcohol, unspecified',
        'sodium hydroxide',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow',
        'ammonia',
        'ferrosoferric oxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Mejorar el control de la glucosa en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
        ref: {
          f: 'dailymed-saxagliptina',
          sec: '1 · Indicaciones',
          cita: 'indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-saxagliptina',
      advertencias: [
        {
          titulo: 'Pancreatitis',
          texto: 'Se han notificado casos de pancreatitis aguda tras la comercialización.',
          organos: [ 'pancreas' ],
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '5 · Advertencias y precauciones',
            cita: 'There have been postmarketing reports of acute pancreatitis in patients taking saxagliptin tablets',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'En un ensayo de resultados cardiovasculares, más pacientes tratados con saxagliptina que con placebo ingresaron por insuficiencia cardíaca.',
          organos: [ 'corazon' ],
          ref: { f: 'dailymed-saxagliptina', sec: '5 · Advertencias y precauciones', cita: 'more patients randomized to saxagliptin', codigo: '43685-7' }
        },
        {
          titulo: 'Hipoglucemia con insulina o secretagogos',
          texto: 'Con insulina o con un fármaco que estimula la insulina, aumentó la hipoglucemia confirmada respecto al placebo.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '5 · Advertencias y precauciones',
            cita: 'the incidence of confirmed hypoglycemia was increased over that of placebo',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y más que con placebo): infección respiratoria alta, infección urinaria y dolor de cabeza.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 5% and more often than placebo) are upper respiratory tract infection, urinary tract infection, and headache'
        ],
        [
          'El edema periférico fue más frecuente al combinarla con una tiazolidindiona.',
          '34084-4',
          'Peripheral edema was reported more commonly in patients treated with the combination of saxagliptin tablets and a thiazolidinedione (TZD)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2.5 mg o 5 mg por comprimido, según la etiqueta; el activo va como dihidrato de saxagliptina. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucosa en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
    actua: 'Es un inhibidor competitivo de la enzima DPP-4: frena la inactivación de las hormonas incretinas, sube su concentración en la sangre y baja la glucosa en ayunas y después de comer, según la glucosa.',
    recorrido: 'Con una dosis oral de 5 mg, la mediana del tiempo hasta el pico fue de 2 horas para la saxagliptina y de 4 horas para su metabolito activo. Se elimina por vía renal y hepática: tras una dosis de saxagliptina marcada, el 24 % salió por la orina como saxagliptina, el 36 % como metabolito activo y el 75 % como radiactividad total; el 22 % de la radiactividad apareció en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '3 · Formas y concentraciones',
            cita: 'Saxagliptin Tablets are available containing 3.075 mg or 6.149 mg of saxagliptin hydrochloride dihydrate',
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
      ocurre: 'Con una dosis oral de 5 mg, la mediana del tiempo hasta el pico fue de 2 horas para la saxagliptina y de 4 horas para su metabolito activo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con una dosis oral de 5 mg, la mediana del tiempo hasta el pico fue de 2 horas para la saxagliptina y de 4 horas para su metabolito activo.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to maximum concentration (T max ) following the 5 mg once daily dose was 2 hours for saxagliptin and 4 hours for its active metabolite',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasa retrasa el pico unos 20 minutos y aumenta el AUC de la saxagliptina un 27 %.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'There was a 27% increase in the AUC of saxagliptin when given with a meal as compared to fasted conditions',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión de la saxagliptina y de su metabolito activo a las proteínas del suero humano es insignificante in vitro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión de la saxagliptina y de su metabolito activo a las proteínas del suero humano es insignificante in vitro.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'The in vitro protein binding of saxagliptin and its active metabolite in human serum is negligible',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzima DPP-4',
        efecto: 'Es un inhibidor competitivo de la enzima DPP-4: frena la inactivación de las hormonas incretinas, sube su concentración en la sangre y baja la glucosa en ayunas y después de comer, según la glucosa.',
        lugar: [ 'sangre', 'pancreas' ],
        datos: [
          {
            t: 'Es un inhibidor competitivo de la enzima DPP-4: frena la inactivación de las hormonas incretinas, sube su concentración en la sangre y baja la glucosa en ayunas y después de comer, según la glucosa.',
            ref: {
              f: 'dailymed-saxagliptina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Saxagliptin is a competitive DPP-4 inhibitor that slows the inactivation of the incretin hormones',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La metabolizan sobre todo las enzimas CYP3A4/5; el metabolito principal también inhibe la DPP-4, con la mitad de potencia.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La metabolizan sobre todo las enzimas CYP3A4/5; el metabolito principal también inhibe la DPP-4, con la mitad de potencia.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of saxagliptin is primarily mediated by cytochrome P450 3A4/5 (CYP3A4/5)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-hidroxisaxagliptina',
          actividad: 'activo',
          nota: 'Inhibidor de la DPP-4 con la mitad de potencia que la saxagliptina.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major metabolite of saxagliptin is also a DPP-4 inhibitor, which is one-half as potent as saxagliptin',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por vía renal y hepática: tras una dosis de saxagliptina marcada, el 24 % salió por la orina como saxagliptina, el 36 % como metabolito activo y el 75 % como radiactividad total; el 22 % de la radiactividad apareció en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por vía renal y hepática: tras una dosis de saxagliptina marcada, el 24 % salió por la orina como saxagliptina, el 36 % como metabolito activo y el 75 % como radiactividad total; el 22 % de la radiactividad apareció en las heces.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'Saxagliptin is eliminated by both renal and hepatic pathways',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática terminal fue de 2,5 horas para la saxagliptina y de 3,1 horas para su metabolito activo.',
          ref: {
            f: 'dailymed-saxagliptina',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean plasma terminal half-life (t 1/2 ) for saxagliptin and its active metabolite was 2.5 and 3.1 hours, respectively',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de la saxagliptina',
      valor: '2 (mediana)',
      unidad: 'h',
      analito: 'saxagliptina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral de 5 mg',
      ref: {
        f: 'dailymed-saxagliptina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to maximum concentration (T max ) following the 5 mg once daily dose was 2 hours for saxagliptin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática terminal de la saxagliptina',
      valor: '2,5',
      unidad: 'h',
      analito: 'saxagliptina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de 5 mg',
      ref: {
        f: 'dailymed-saxagliptina',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean plasma terminal half-life (t 1/2 ) for saxagliptin and its active metabolite was 2.5 and 3.1 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado por la orina como saxagliptina',
      valor: '24',
      unidad: '% de la dosis',
      analito: 'saxagliptina',
      condiciones: 'dosis única de 14C-saxagliptina',
      ref: {
        f: 'dailymed-saxagliptina',
        sec: '12.3 · Farmacocinética',
        cita: '24%, 36%, and 75% of the dose was excreted in the urine as saxagliptin, its active metabolite, and total radioactivity, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '22',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única de 14C-saxagliptina',
      ref: {
        f: 'dailymed-saxagliptina',
        sec: '12.3 · Farmacocinética',
        cita: 'A total of 22% of the administered radioactivity was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-saxagliptina', '6e8d8c4f-96eb-4b64-9c8c-4a5448a23a78', 'SAXAGLIPTIN TABLET, FILM COATED', 'Saxagliptin', '4', '2025-03-24', '2026-11-15'),
    rengPubchem(11243969, 'saxagliptin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
