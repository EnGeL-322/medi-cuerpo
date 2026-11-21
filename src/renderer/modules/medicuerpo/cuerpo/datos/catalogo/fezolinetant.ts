import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fezolinetant',
    nombre: 'Fezolinetant',
    clase: 'Antagonista del receptor de neurocinina 3 (NK3)',
    sinonimos: [ 'fezolinetant', 'Veozah' ],
    formula: 'C16H15FN6OS',
    masaMolar: 358.4,
    smiles: 'C[C@@H]1C2=NN=C(N2CCN1C(=O)C3=CC=C(C=C3)F)C4=NC(=NS4)C',
    inchikey: 'PPSNFPASKFYPMN-SECBINFHSA-N',
    cid: 117604931,
    iupac: '(4-fluorophenyl)-[(8R)-8-methyl-3-(3-methyl-1,2,4-thiadiazol-5-yl)-6,8-dihydro-5H-[1,2,4]triazolo[4,3-a]pyrazin-7-yl]methanone',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'fezolinetant-oral',
      producto: 'VEOZAH · comprimido recubierto con película',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '45 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'hydroxypropyl cellulose, unspecified',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'microcrystalline cellulose',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'talc',
        'polyethylene glycol 8000',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de los síntomas vasomotores moderados o graves de la menopausia.',
        ref: {
          f: 'dailymed-fezolinetant',
          sec: '1 · Indicaciones',
          cita: 'VEOZAH ® is indicated for the treatment of moderate to severe vasomotor symptoms due to menopause',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fezolinetant',
      advertencias: [
        {
          titulo: 'Riesgo de hepatotoxicidad',
          texto: 'Se ha producido hepatotoxicidad tras la comercialización; hay que hacer pruebas hepáticas antes de empezar y no iniciarlo si las aminotransferasas o la bilirrubina están elevadas.',
          organos: [],
          ref: {
            f: 'dailymed-fezolinetant',
            sec: 'Advertencia destacada',
            cita: 'Hepatotoxicity has occurred with the use of VEOZAH in the postmarketing setting',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad e ictericia',
          texto: 'Se han notificado casos de hepatotoxicidad e ictericia; hay que vigilar las pruebas hepáticas durante los primeros meses.',
          organos: [],
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of hepatotoxicity and jaundice have been reported in the postmarketing setting',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos 2 % y más que con placebo): dolor abdominal, diarrea, insomnio, dolor de espalda, sofocos y elevación de transaminasas hepáticas.',
          '34084-4',
          'most common adverse reactions with VEOZAH [at least 2% in VEOZAH 45 mg and greater than placebo] are: abdominal pain, diarrhea, insomnia, back pain, hot flush, and hepatic transaminase elevation'
        ],
        [ 'La seguridad se evaluó en tres ensayos de 52 semanas.', '34084-4', 'The safety of VEOZAH was evaluated in three 52-week c' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 45 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de los síntomas vasomotores moderados o graves de la menopausia.',
    actua: 'Antagonista del receptor NK3 que bloquea la unión de la neurocinina B en la neurona KNDy para modular la actividad neuronal del centro termorregulador.',
    recorrido: 'La mediana del tiempo hasta la Cmax es de 1,5 horas en mujeres sanas; una comida rica en grasas no produce diferencias clínicamente significativas. El 76,9 % de la dosis se excretó en la orina (1,1 % sin cambios) y el 14,7 % en las heces (0,1 % sin cambios).'
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
            f: 'dailymed-fezolinetant',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 45 mg, round, light red, film-coated tablets',
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
      ocurre: 'La mediana del tiempo hasta la Cmax es de 1,5 horas en mujeres sanas; una comida rica en grasas no produce diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la Cmax es de 1,5 horas en mujeres sanas; una comida rica en grasas no produce diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) time to reach fezolinetant C max is 1.5 (1 to 4) hours in healthy women',
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
      ocurre: 'El volumen de distribución aparente medio es de 189 L y la unión a proteínas plasmáticas del 51 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente medio es de 189 L y la unión a proteínas plasmáticas del 51 %.',
          ref: { f: 'dailymed-fezolinetant', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of fezolinetant is 51%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente medio de 189 L.',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution (V z /F) of fezolinetant is 189 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de neurocinina 3 (NK3)',
        efecto: 'Antagonista del receptor NK3 que bloquea la unión de la neurocinina B en la neurona KNDy para modular la actividad neuronal del centro termorregulador.',
        lugar: [],
        datos: [
          {
            t: 'Antagonista del receptor NK3 que bloquea la unión de la neurocinina B en la neurona KNDy para modular la actividad neuronal del centro termorregulador.',
            ref: {
              f: 'dailymed-fezolinetant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'VEOZAH is a neurokinin 3 (NK3) receptor antagonist that blocks neurokinin B (NKB) binding on the kisspeptin/neurokinin B/dynorphin (KNDy) neuron to modulate neuronal activity in the thermoregulatory center',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP1A2 y en menor medida por la CYP2C9 y la CYP2C19; su metabolito principal, ES259564, es unas 20 veces menos potente.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP1A2 y en menor medida por la CYP2C9 y la CYP2C19; su metabolito principal, ES259564, es unas 20 veces menos potente.',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: 'Fezolinetant is primarily metabolized by CYP1A2 and to a lesser extent by CYP2C9 and CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'ES259564',
          actividad: 'activo',
          nota: 'Metabolito principal en plasma, unas 20 veces menos potente que el fármaco original.',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: 'ES259564 is approximately 20-fold less potent than the parent',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'rinones', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 76,9 % de la dosis se excretó en la orina (1,1 % sin cambios) y el 14,7 % en las heces (0,1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 76,9 % de la dosis se excretó en la orina (1,1 % sin cambios) y el 14,7 % en las heces (0,1 % sin cambios).',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: '76.9% of the dose was excreted in urine (1.1% unchanged) and 14.7% in feces (0.1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de 9,6 horas en mujeres con síntomas vasomotores.',
          ref: {
            f: 'dailymed-fezolinetant',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life (t 1/2 ) of fezolinetant is 9.6 hours in women with vasomotor symptoms',
            codigo: '43682-4'
          },
          poblacion: 'mujeres con síntomas vasomotores'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la Cmax',
      valor: '1,5',
      unidad: 'h',
      analito: 'fezolinetant',
      poblacion: 'mujeres sanas',
      ref: {
        f: 'dailymed-fezolinetant',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) time to reach fezolinetant C max is 1.5 (1 to 4) hours in healthy women',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '189',
      unidad: 'L',
      analito: 'fezolinetant',
      ref: {
        f: 'dailymed-fezolinetant',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution (V z /F) of fezolinetant is 189 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '51',
      unidad: '%',
      analito: 'fezolinetant',
      ref: { f: 'dailymed-fezolinetant', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of fezolinetant is 51%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '9,6',
      unidad: 'h',
      analito: 'fezolinetant',
      poblacion: 'mujeres con síntomas vasomotores',
      ref: {
        f: 'dailymed-fezolinetant',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life (t 1/2 ) of fezolinetant is 9.6 hours in women with vasomotor symptoms',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '10,8',
      unidad: 'L/h',
      analito: 'fezolinetant',
      ref: {
        f: 'dailymed-fezolinetant',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent clearance at steady-state of fezolinetant is 10.8 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '76,9',
      unidad: '% de la dosis',
      analito: 'fezolinetant y metabolitos',
      ref: {
        f: 'dailymed-fezolinetant',
        sec: '12.3 · Farmacocinética',
        cita: '76.9% of the dose was excreted in urine (1.1% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fezolinetant', 'cae9f798-24f9-4580-a4fc-e6c710cbda3c', 'VEOZAH (FEZOLINETANT) TABLET, FILM COATED', 'VEOZAH', '8', '2026-03-06', '2026-11-19'),
    rengPubchem(117604931, 'fezolinetant', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
