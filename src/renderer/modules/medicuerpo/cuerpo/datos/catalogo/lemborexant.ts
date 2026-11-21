import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lemborexant',
    nombre: 'Lemborexant',
    clase: 'Antagonista de los receptores de orexina (hipnótico)',
    sinonimos: [ 'lemborexant', 'Dayvigo' ],
    formula: 'C22H20F2N4O2',
    masaMolar: 410.4,
    smiles: 'CC1=NC(=NC=C1OC[C@]2(C[C@H]2C(=O)NC3=NC=C(C=C3)F)C4=CC(=CC=C4)F)C',
    inchikey: 'MUGXRYIUWFITCP-PGRDOPGGSA-N',
    cid: 56944144,
    iupac: 'cis-(1R,2S)-2-[(2,4-dimethylpyrimidin-5-yl)oxymethyl]-2-(3-fluorophenyl)-N-(5-fluoro-2-pyridinyl)cyclopropane-1-carboxamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'lemborexant-oral',
      producto: 'DAYVIGO · comprimido recubierto con película',
      titular: 'EISAI INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      excipientes: [
        'hydroxypropyl cellulose (45000 wamw)',
        'lactose monohydrate',
        'low-substituted hydroxypropyl cellulose (11% hydroxypropyl; 120000 mw)',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'polyethylene glycol 8000',
        'talc',
        'titanium dioxide',
        'water',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento del insomnio en adultos, con dificultad para conciliar o mantener el sueño.',
        ref: {
          f: 'dailymed-lemborexant',
          sec: '1 · Indicaciones',
          cita: 'DAYVIGO is indicated for the treatment of adult patients with insomnia, characterized by difficulties with sleep onset and/or sleep maintenance',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lemborexant',
      advertencias: [
        {
          titulo: 'Efectos depresores del sistema nervioso central y alteración diurna',
          texto: 'Afecta al estado de alerta y a la coordinación motora, también por la mañana; el riesgo aumenta con la dosis y con otros depresores del sistema nervioso central.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lemborexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'CNS Depressant Effects and Daytime Impairment: Impairs alertness and motor coordination including morning impairment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Conductas complejas durante el sueño',
          texto: 'Pueden aparecer sonambulismo, conducir dormido y otras actividades sin estar totalmente despierto; hay que suspenderlo de inmediato si ocurren.',
          organos: [],
          ref: {
            f: 'dailymed-lemborexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Complex Sleep Behaviors: Behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Empeoramiento de la depresión e ideas suicidas',
          texto: 'Pueden empeorar la depresión o aparecer pensamientos suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-lemborexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Worsening of depression or suicidal thinking may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa más frecuente (5 % o más y al menos el doble que con placebo) fue la somnolencia.',
          '34084-4',
          'The most common adverse reaction (reported in ≥5% of patients treated with DAYVIGO and at least twice the rate of placebo) was somnolence'
        ],
        [
          'Las reacciones que más llevaron a dejar el tratamiento fueron somnolencia y pesadillas.',
          '34084-4',
          'The most common adverse reactions leading to discontinuation of DAYVIGO were somnolence (1.0% for 10 mg, 0.7% for 5 mg, and 0.4% for placebo) and nightmares'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg o 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del insomnio en adultos, con dificultad para conciliar o mantener el sueño.',
    actua: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, neuropéptidos que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
    recorrido: 'El tiempo hasta la concentración máxima es de 1 a 3 horas. Tras una dosis oral, el 57,4 % se recuperó en las heces y el 29,1 % en la orina (menos del 1 % sin cambios).'
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
            f: 'dailymed-lemborexant',
            sec: '11 · Descripción',
            cita: 'Each film coated tablet contains 5 mg or 10 mg of lemborexant',
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
      ocurre: 'El tiempo hasta la concentración máxima es de 1 a 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tiempo hasta la concentración máxima es de 1 a 3 horas.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to peak concentration (t max ) of lemborexant is approximately 1 to 3 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y calorías, la Cmax bajó un 23 %, el AUC subió un 18 % y el tmax se retrasó 2 horas.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Lemborexant C max decreased by 23%, AUC 0-inf increased by 18%, and t max was delayed by 2 hours following administration of a high-fat and high-calorie meal',
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
      ocurre: 'El volumen de distribución es de 1970 L; la unión a proteínas del plasma es de alrededor del 88 % in vitro y del 94 % en muestras clínicas, y el cociente sangre/plasma es de 0,65.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución es de 1970 L; la unión a proteínas del plasma es de alrededor del 88 % in vitro y del 94 % en muestras clínicas, y el cociente sangre/plasma es de 0,65.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of lemborexant is approximately 88% in vitro and 94% in clinical samples',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de 1970 L.',
          ref: { f: 'dailymed-lemborexant', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution of lemborexant is 1970 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores de orexina OX1R y OX2R',
        efecto: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, neuropéptidos que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
        lugar: [],
        datos: [
          {
            t: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, neuropéptidos que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
            ref: {
              f: 'dailymed-lemborexant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Blocking the binding of wake-promoting neuropeptides orexin A and orexin B to receptors OX1R and OX2R is thought to suppress wake drive',
              codigo: '43679-0'
            }
          },
          {
            t: 'Se une a los receptores OX1R y OX2R como antagonista competitivo; su metabolito principal M10 se une con una afinidad comparable.',
            ref: {
              f: 'dailymed-lemborexant',
              sec: '12.2 · Farmacodinámica',
              cita: 'Lemborexant binds to orexin receptors OX1R and OX2R and acts as a competitive antagonist',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP3A5; el metabolito circulante principal es el M10.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP3A5; el metabolito circulante principal es el M10.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Lemborexant is primarily metabolized by CYP3A4, and to a lesser extent by CYP3A5. The major circulating metabolite is M10',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M10',
          actividad: 'activo',
          nota: 'Metabolito circulante principal; se une a los receptores de orexina con una afinidad parecida a la del lemborexant.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12 · Farmacología clínica',
            cita: 'A major metabolite of lemborexant, M10, binds with comparable affinity as the parent drug to orexin receptors OX1R and OX2R',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral, el 57,4 % se recuperó en las heces y el 29,1 % en la orina (menos del 1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral, el 57,4 % se recuperó en las heces y el 29,1 % en la orina (menos del 1 % sin cambios).',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of an oral dose, 57.4% of the dose was recovered in the feces and 29.1% in the urine (<1% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de 17 horas con 5 mg y de 19 horas con 10 mg.',
          ref: {
            f: 'dailymed-lemborexant',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life for lemborexant 5 mg and 10 mg is 17 and 19 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1-3 (aprox.)',
      unidad: 'h',
      analito: 'lemborexant',
      ref: {
        f: 'dailymed-lemborexant',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to peak concentration (t max ) of lemborexant is approximately 1 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1970',
      unidad: 'L',
      analito: 'lemborexant',
      ref: { f: 'dailymed-lemborexant', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution of lemborexant is 1970 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (muestras clínicas)',
      valor: '94',
      unidad: '%',
      analito: 'lemborexant',
      ref: {
        f: 'dailymed-lemborexant',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of lemborexant is approximately 88% in vitro and 94% in clinical samples',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva (10 mg)',
      valor: '19',
      unidad: 'h',
      analito: 'lemborexant',
      condiciones: '10 mg',
      ref: {
        f: 'dailymed-lemborexant',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life for lemborexant 5 mg and 10 mg is 17 and 19 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '57,4',
      unidad: '% de la dosis',
      analito: 'lemborexant y metabolitos',
      ref: {
        f: 'dailymed-lemborexant',
        sec: '12.3 · Farmacocinética',
        cita: '57.4% of the dose was recovered in the feces and 29.1% in the urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '29,1',
      unidad: '% de la dosis',
      analito: 'lemborexant y metabolitos',
      ref: {
        f: 'dailymed-lemborexant',
        sec: '12.3 · Farmacocinética',
        cita: '57.4% of the dose was recovered in the feces and 29.1% in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lemborexant', '7074cb65-77b3-45d2-8e8d-da8dc0f70bfd', 'DAYVIGO (LEMBOREXANT) TABLET, FILM COATED', 'DAYVIGO', '39', '2025-03-03', '2026-11-18'),
    rengPubchem(56944144, 'lemborexant', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
