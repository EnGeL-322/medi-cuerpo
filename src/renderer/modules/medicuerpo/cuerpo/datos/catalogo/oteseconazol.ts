import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oteseconazol',
    nombre: 'Oteseconazol',
    clase: 'Antifúngico azólico inhibidor de la CYP51',
    sinonimos: [ 'oteseconazole', 'Vivjoa' ],
    formula: 'C23H16F7N5O2',
    masaMolar: 527.4,
    smiles: 'C1=CC(=CC=C1C2=CN=C(C=C2)C([C@](CN3C=NN=N3)(C4=C(C=C(C=C4)F)F)O)(F)F)OCC(F)(F)F',
    inchikey: 'IDUYJRXRDSPPRC-NRFANRHFSA-N',
    cid: 77050711,
    iupac: '(2R)-2-(2,4-difluorophenyl)-1,1-difluoro-3-(tetrazol-1-yl)-1-[5-[4-(2,2,2-trifluoroethoxy)phenyl]-2-pyridinyl]propan-2-ol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'oteseconazol-oral',
      producto: 'VIVJOA · cápsula',
      titular: 'MYCOVIA PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'silicon dioxide',
        'lactose monohydrate',
        'croscarmellose sodium',
        'hydroxypropyl cellulose (90000 wamw)',
        'sodium lauryl sulfate',
        'magnesium stearate'
      ],
      usos: {
        t: 'Reducción de la candidiasis vulvovaginal recurrente en mujeres con antecedentes que no tienen potencial reproductivo.',
        ref: {
          f: 'dailymed-oteseconazol',
          sec: '1 · Indicaciones',
          cita: 'VIVJOA™ is an azole antifungal indicated to reduce the incidence of recurrent vulvovaginal candidiasis (RVVC) in females with a history of RVVC who are NOT of reproductive potential',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oteseconazol',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Según estudios animales puede causar daño fetal; la ventana de exposición de unos 690 días impide mitigar el riesgo, por lo que está contraindicado en mujeres con potencial reproductivo.',
          organos: [],
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'The drug exposure window of approximately 690 days (based on 5 times the half-life of oteseconazole) precludes adequate mitigation of the embryo-fetal toxicity risks',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 2 %) fueron cefalea y náuseas.',
          '34084-4',
          'The most frequently reported adverse reactions (incidence > 2%) were headache and nausea'
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
    contiene: 'Cápsula: 150 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducción de la candidiasis vulvovaginal recurrente en mujeres con antecedentes que no tienen potencial reproductivo.',
    actua: 'Inhibe la 14α-desmetilasa fúngica (CYP51), una enzima temprana de la síntesis de ergosterol, necesaria para la membrana del hongo; se acumulan esteroles 14-metilados.',
    recorrido: 'El pico plasmático aparece en unas 5 a 10 horas; una comida grasa aumenta la Cmax un 45 % y el AUC un 36 %. Tras una dosis marcada, alrededor del 56 % se recuperó en las heces, sobre todo por excreción biliar, y el 26 % en la orina.'
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
            f: 'dailymed-oteseconazol',
            sec: '3 · Formas y concentraciones',
            cita: 'VIVJOA Capsules: 150 mg of oteseconazole in lavender hard gelatin capsules',
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
      ocurre: 'El pico plasmático aparece en unas 5 a 10 horas; una comida grasa aumenta la Cmax un 45 % y el AUC un 36 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico plasmático aparece en unas 5 a 10 horas; una comida grasa aumenta la Cmax un 45 % y el AUC un 36 %.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to peak plasma concentrations of oteseconazole was approximately 5 to 10 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax subió un 45 % y el AUC un 36 %.',
          ref: { f: 'dailymed-oteseconazol', sec: '12.3 · Farmacocinética', cita: 'increased C max and AUC 0-72h by 45% and 36%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99,5 a 99,7 % a las proteínas plasmáticas; el volumen central es de unos 423 L y, en animales, la exposición vaginal es comparable a la plasmática.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99,5 a 99,7 % a las proteínas plasmáticas; el volumen central es de unos 423 L y, en animales, la exposición vaginal es comparable a la plasmática.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Oteseconazole is 99.5-99.7% bound to plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución central de unos 423 L.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The central volume of distribution of oteseconazole is approximately 423 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: '14α-desmetilasa fúngica (CYP51)',
        efecto: 'Inhibe la 14α-desmetilasa fúngica (CYP51), una enzima temprana de la síntesis de ergosterol, necesaria para la membrana del hongo; se acumulan esteroles 14-metilados.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la 14α-desmetilasa fúngica (CYP51), una enzima temprana de la síntesis de ergosterol, necesaria para la membrana del hongo; se acumulan esteroles 14-metilados.',
            ref: {
              f: 'dailymed-oteseconazol',
              sec: '12.4 · Microbiología',
              cita: 'Oteseconazole is an azole metalloenzyme inhibitor targeting the fungal sterol, 14α demethylase (CYP51)',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No sufre un metabolismo significativo.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No sufre un metabolismo significativo.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Oteseconazole does not undergo significant metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 56 % se recuperó en las heces, sobre todo por excreción biliar, y el 26 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 56 % se recuperó en las heces, sobre todo por excreción biliar, y el 26 % en la orina.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 56% of the radiolabeled dose was recovered in feces primarily through biliary excretion and 26% was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana de la semivida terminal es de unos 138 días.',
          ref: {
            f: 'dailymed-oteseconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The median terminal half-life of oteseconazole is approximately 138 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '5-10 (aprox.)',
      unidad: 'h',
      analito: 'oteseconazol',
      ref: {
        f: 'dailymed-oteseconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to peak plasma concentrations of oteseconazole was approximately 5 to 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,5-99,7',
      unidad: '%',
      analito: 'oteseconazol',
      ref: { f: 'dailymed-oteseconazol', sec: '12.3 · Farmacocinética', cita: 'Oteseconazole is 99.5-99.7% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución central',
      valor: '423 (aprox.)',
      unidad: 'L',
      analito: 'oteseconazol',
      ref: {
        f: 'dailymed-oteseconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The central volume of distribution of oteseconazole is approximately 423 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida terminal',
      valor: '138 (aprox.)',
      unidad: 'd',
      analito: 'oteseconazol',
      ref: {
        f: 'dailymed-oteseconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The median terminal half-life of oteseconazole is approximately 138 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '56 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-oteseconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 56% of the radiolabeled dose was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oteseconazol', 'e21d5008-800e-4417-927f-14340341865f', 'VIVJOA (OTESECONAZOLE) CAPSULE', 'VIVJOA', '5', '2026-01-09', '2026-11-19'),
    rengPubchem(77050711, 'oteseconazole', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
