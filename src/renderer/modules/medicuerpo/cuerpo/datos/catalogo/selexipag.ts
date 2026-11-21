import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'selexipag',
    nombre: 'Selexipag',
    clase: 'Agonista del receptor de la prostaciclina (receptor IP)',
    sinonimos: [ 'selexipag', 'Uptravi' ],
    formula: 'C26H32N4O4S',
    masaMolar: 496.6,
    smiles: 'CC(C)N(CCCCOCC(=O)NS(=O)(=O)C)C1=CN=C(C(=N1)C2=CC=CC=C2)C3=CC=CC=C3',
    inchikey: 'QXWZQTURMXZVHJ-UHFFFAOYSA-N',
    cid: 9913767,
    iupac: '2-[4-[(5,6-diphenylpyrazin-2-yl)-propan-2-ylamino]butoxy]-N-methylsulfonylacetamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'selexipag-oral',
      producto: 'UPTRAVI · comprimido recubierto',
      titular: 'ACTELION PHARMACEUTICALS US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '200, 400, 600, 800, 1.000, 1.200, 1.400 o 1.600 microgramos de selexipag por comprimido recubierto con película, según la etiqueta',
      excipientes: [
        'mannitol',
        'starch, corn',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'hydroxypropyl cellulose (1200000 wamw)',
        'propylene glycol',
        'titanium dioxide',
        'ferric oxide yellow',
        'carnauba wax'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial pulmonar (grupo I de la OMS) en adultos, para retrasar la progresión de la enfermedad y reducir el riesgo de hospitalización.',
        ref: {
          f: 'dailymed-selexipag',
          sec: '1 · Indicaciones',
          cita: 'UPTRAVI is indicated for the treatment of pulmonary arterial hypertension in adults (PAH, WHO Group I) to delay disease progression and reduce the risk of hospitalization for PAH',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-selexipag',
      advertencias: [
        {
          titulo: 'Edema pulmonar con enfermedad venooclusiva pulmonar',
          texto: 'Si aparecen signos de edema pulmonar, hay que considerar una enfermedad venooclusiva pulmonar asociada y, si se confirma, suspender el tratamiento.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-selexipag',
            sec: '5 · Advertencias y precauciones',
            cita: 'Should signs of pulmonary edema occur, consider the possibility of associated pulmonary veno-occlusive disease',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos y niños (5 % o más y más que con placebo): cefalea, diarrea, dolor mandibular, náuseas, mialgia, vómitos, dolor en las extremidades y rubefacción.',
          '34084-4',
          'Adverse reactions in adult and pediatric patients occurring more frequently (≥5%) on UPTRAVI compared to placebo are headache, diarrhea, jaw pain, nausea, myalgia, vomiting, pain in extremity, and flushing'
        ],
        [
          'Se observó hipertiroidismo en el 1 % de los pacientes con los comprimidos y en ninguno con placebo.',
          '34084-4',
          'Hyperthyroidism was observed in 1% (n=8) of patients on UPTRAVI tablets and in none of the patients on placebo'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 200, 400, 600, 800, 1.000, 1.200, 1.400 o 1.600 microgramos de selexipag por comprimido recubierto con película, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial pulmonar (grupo I de la OMS) en adultos, para retrasar la progresión de la enfermedad y reducir el riesgo de hospitalización.',
    actua: 'Agonista del receptor IP de la prostaciclina, con una estructura distinta de la prostaciclina; la carboxilesterasa 1 lo hidroliza a un metabolito activo unas 37 veces más potente, y ambos son selectivos del receptor IP.',
    recorrido: 'La biodisponibilidad absoluta por vía oral es de alrededor del 49 %. Se elimina sobre todo por metabolismo; con selexipag marcado, alrededor del 93 % del material radiactivo se eliminó en las heces y solo el 12 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '11 · Descripción',
            cita: 'each round film-coated tablet for oral administration contains 100, 150, 200, 400, 600, 800, 1,000, 1,200, 1,400, or 1,600 mcg of selexipag',
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
      ocurre: 'La biodisponibilidad absoluta por vía oral es de alrededor del 49 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta por vía oral es de alrededor del 49 %.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of orally administered selexipag is approximately 49%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones máximas del selexipag y de su metabolito activo se alcanzan en unas 1-3 horas y 3-4 horas, respectivamente.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'maximum observed plasma concentrations of selexipag and its active metabolite are reached within about 1–3 hours and 3–4 hours, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos la absorción se prolonga, el pico se retrasa y la Cmax es alrededor de un 30 % menor; el AUC no cambia de forma significativa.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'In the presence of food, the absorption of selexipag was prolonged resulting in a delayed time to peak concentration',
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
      ocurre: 'El selexipag y su metabolito activo se unen mucho a las proteínas del plasma (alrededor del 99 % en total, por igual a la albúmina y a la glicoproteína ácida α1); el volumen de distribución en estado estacionario es de 11,7 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El selexipag y su metabolito activo se unen mucho a las proteínas del plasma (alrededor del 99 % en total, por igual a la albúmina y a la glicoproteína ácida α1); el volumen de distribución en estado estacionario es de 11,7 L.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'Selexipag and its active metabolite are highly bound to plasma proteins (approximately 99% in total and to the same extent to albumin and alpha1-acid glycoprotein)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 11,7 L.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution of selexipag at steady-state is 11.7 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor IP de la prostaciclina',
        efecto: 'Agonista del receptor IP de la prostaciclina, con una estructura distinta de la prostaciclina; la carboxilesterasa 1 lo hidroliza a un metabolito activo unas 37 veces más potente, y ambos son selectivos del receptor IP.',
        lugar: [ 'pulmones', 'vasos' ],
        datos: [
          {
            t: 'Agonista del receptor IP de la prostaciclina, con una estructura distinta de la prostaciclina; la carboxilesterasa 1 lo hidroliza a un metabolito activo unas 37 veces más potente, y ambos son selectivos del receptor IP.',
            ref: {
              f: 'dailymed-selexipag',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Selexipag is a prostacyclin receptor (IP receptor) agonist that is structurally distinct from prostacyclin',
              codigo: '43679-0'
            }
          },
          {
            t: 'En un estudio de fase 2 en adultos con hipertensión arterial pulmonar redujo la resistencia vascular pulmonar un 30,3 % de media frente al placebo.',
            ref: {
              f: 'dailymed-selexipag',
              sec: '12.2 · Farmacodinámica',
              cita: 'achieved a statistically-significant mean reduction in pulmonary vascular resistance of 30.3%',
              codigo: '43681-6'
            },
            poblacion: 'adultos con hipertensión arterial pulmonar'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las carboxilesterasas del hígado y del intestino lo hidrolizan a su metabolito activo, un ácido carboxílico libre.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las carboxilesterasas del hígado y del intestino lo hidrolizan a su metabolito activo, un ácido carboxílico libre.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'Selexipag is hydrolyzed to its active metabolite, (free carboxylic acid) in the liver and intestine by carboxylesterases',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolismo oxidativo, sobre todo por la CYP2C8 y en menor medida por la CYP3A4, forma productos hidroxilados y desalquilados.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxidative metabolism, catalyzed mainly by CYP2C8 and to a smaller extent by CYP3A4, leads to the formation of hydroxylated and dealkylated products',
            codigo: '43682-4'
          }
        },
        {
          t: 'La UGT1A3 y la UGT2B7 participan en la glucuronidación del metabolito activo.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'UGT1A3 and UGT2B7 are involved in the glucuronidation of the active metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito activo (ácido carboxílico libre)',
          actividad: 'activo',
          nota: 'Tras la toma oral, su exposición en estado estacionario es unas 3 a 4 veces la del selexipag.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'after oral administration, exposure at steady-state to the active metabolite is approximately 3- to 4-fold that of selexipag',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo; con selexipag marcado, alrededor del 93 % del material radiactivo se eliminó en las heces y solo el 12 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo; con selexipag marcado, alrededor del 93 % del material radiactivo se eliminó en las heces y solo el 12 % en la orina.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 93% of radioactive drug material was eliminated in feces and only 12% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Ni el selexipag ni su metabolito activo se encontraron en la orina.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'Neither selexipag nor its active metabolite were found in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media del selexipag es de 0,8 a 2,5 horas y la del metabolito activo de 6,2 a 13,5 horas.',
          ref: {
            f: 'dailymed-selexipag',
            sec: '12.3 · Farmacocinética',
            cita: 'Elimination of selexipag is predominately via metabolism with a mean terminal half-life of 0.8–2.5 hours. The terminal half-life of the active metabolite is 6.2–13.5 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '49 (aprox.)',
      unidad: '%',
      analito: 'selexipag',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of orally administered selexipag is approximately 49%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1-3 (aprox.)',
      unidad: 'h',
      analito: 'selexipag',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'maximum observed plasma concentrations of selexipag and its active metabolite are reached within about 1–3 hours and 3–4 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '11,7',
      unidad: 'L',
      analito: 'selexipag',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of selexipag at steady-state is 11.7 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas (total)',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'selexipag y metabolito activo',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'highly bound to plasma proteins (approximately 99% in total',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del metabolito activo',
      valor: '6,2-13,5',
      unidad: 'h',
      analito: 'metabolito activo',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of the active metabolite is 6.2–13.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total',
      valor: '17,9',
      unidad: 'L/h',
      analito: 'selexipag',
      ref: { f: 'dailymed-selexipag', sec: '12.3 · Farmacocinética', cita: 'The total body clearance of selexipag is 17.9 L/hour', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Material radiactivo eliminado en las heces',
      valor: '93 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-selexipag',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 93% of radioactive drug material was eliminated in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-selexipag', 'a7a23b87-f892-4e2c-8e2e-ebf841220f90', 'UPTRAVI (SELEXIPAG) TABLET, COATED UPTRAVI TITRATION PACK (SELEXIPAG) KIT UPTRAVI (SELEXIPAG) INJECTION, POWDER, FOR SOLUTION UPTRAVI (SELEXIPAG) TABLET, FILM COATED', 'UPTRAVI', '26', '2026-06-01', '2026-11-18'),
    rengPubchem(9913767, 'selexipag', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
