import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lenvatinib',
    nombre: 'Lenvatinib',
    clase: 'Inhibidor multicinasa (VEGFR1-3, FGFR1-4, PDGFRα, KIT, RET)',
    sinonimos: [ 'lenvatinib mesylate', 'Lenvima' ],
    formula: 'C21H19ClN4O4',
    masaMolar: 426.9,
    smiles: 'COC1=CC2=NC=CC(=C2C=C1C(=O)N)OC3=CC(=C(C=C3)NC(=O)NC4CC4)Cl',
    inchikey: 'WOSKHXYHFSIKNG-UHFFFAOYSA-N',
    cid: 9823820,
    iupac: '4-[3-chloro-4-(cyclopropylcarbamoylamino)phenoxy]-7-methoxyquinoline-6-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'lenvatinib-oral',
      producto: 'Lenvima · cápsula',
      titular: 'EISAI INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '4 mg o 10 mg por cápsula, según la etiqueta',
      excipientes: [
        'calcium carbonate',
        'hydroxypropyl cellulose (90000 wamw)',
        'hydroxypropyl cellulose, low substituted',
        'mannitol',
        'cellulose, microcrystalline',
        'talc',
        'ferric oxide red',
        'ferric oxide yellow',
        'hypromelloses',
        'titanium dioxide',
        'ferrosoferric oxide',
        'potassium hydroxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento del cáncer diferenciado de tiroides refractario al yodo radiactivo y de otros tumores que recoge la etiqueta (renal, hepatocelular, endometrial).',
        ref: {
          f: 'dailymed-lenvatinib',
          sec: '1 · Indicaciones',
          cita: 'For the treatment of adult patients with locally recurrent or metastatic, progressive, radioactive iodine-refractory differentiated thyroid cancer (DTC)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lenvatinib',
      advertencias: [
        {
          titulo: 'Hipertensión',
          texto: 'Controlar la presión antes de empezar y vigilarla durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Control blood pressure prior to treatment and monitor during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Disfunción cardíaca',
          texto: 'Valorar la fracción de eyección basal y vigilar los signos de insuficiencia cardíaca.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for symptoms or signs of heart failure and, if present, assess LVEF',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar la función hepática antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function prior to treatment and periodically during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Insuficiencia o alteración renal',
          texto: 'Interrumpir o suspender ante una insuficiencia renal de grado 3 o 4.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Withhold or discontinue for Grade 3 or 4 renal failure or impairment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia para cáncer de tiroides (30 % o más): hipertensión, fatiga, diarrea, artralgia o mialgia, disminución del apetito y del peso, náuseas, estomatitis y cefalea, entre otras.',
          '34084-4',
          'LENVIMA as single agent DTC (incidence ≥30%) hypertension, fatigue, diarrhea, arthralgia/myalgia, decreased appetite, decreased weight, nausea, stomatitis, headache'
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
    contiene: 'Cápsula: 4 mg o 10 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer diferenciado de tiroides refractario al yodo radiactivo y de otros tumores que recoge la etiqueta (renal, hepatocelular, endometrial).',
    actua: 'Inhibe las cinasas de los receptores del VEGF (VEGFR1, VEGFR2 y VEGFR3) y otras implicadas en la angiogénesis y el crecimiento tumoral, como FGFR1-4, PDGFRα, KIT y RET.',
    recorrido: 'El tmax suele estar entre 1 y 4 horas; una comida grasa no cambia la magnitud de la absorción, pero retrasa el tmax de 2 a 4 horas. Diez días después de una dosis marcada se había eliminado alrededor del 64 % en las heces y el 25 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 4 mg: yellowish-red body and yellowish-red cap',
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
      ocurre: 'El tmax suele estar entre 1 y 4 horas; una comida grasa no cambia la magnitud de la absorción, pero retrasa el tmax de 2 a 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax suele estar entre 1 y 4 horas; una comida grasa no cambia la magnitud de la absorción, pero retrasa el tmax de 2 a 4 horas.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to peak plasma concentration (T max ) typically occurred from 1 to 4 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no cambió la magnitud de la absorción, pero retrasó la mediana del tmax de 2 a 4 horas.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'did not affect the extent of absorption, but decreased the rate of absorption and delayed the median T max from 2 hours to 4 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 97 a 99 % a las proteínas, sin depender de la concentración; el volumen de distribución en estado estacionario es de 97 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 a 99 % a las proteínas, sin depender de la concentración; el volumen de distribución en estado estacionario es de 97 L.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of lenvatinib is 97% to 99%, which is independent of concentration, and is not impacted by hepatic or renal function',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario predicho por el modelo de 97 L.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Model-predicted geometric mean steady state volume of distribution is 97 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'VEGFR1-3 y FGFR1-4',
        efecto: 'Inhibe las cinasas de los receptores del VEGF (VEGFR1, VEGFR2 y VEGFR3) y otras implicadas en la angiogénesis y el crecimiento tumoral, como FGFR1-4, PDGFRα, KIT y RET.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas de los receptores del VEGF (VEGFR1, VEGFR2 y VEGFR3) y otras implicadas en la angiogénesis y el crecimiento tumoral, como FGFR1-4, PDGFRα, KIT y RET.',
            ref: {
              f: 'dailymed-lenvatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lenvatinib is a kinase inhibitor that inhibits the kinase activities of vascular endothelial growth factor (VEGF) receptors VEGFR1 (FLT1), VEGFR2 (KDR), and VEGFR3 (FLT4)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sus vías metabólicas principales son enzimáticas (CYP3A y aldehído oxidasa) y no enzimáticas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sus vías metabólicas principales son enzimáticas (CYP3A y aldehído oxidasa) y no enzimáticas.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main metabolic pathways for lenvatinib in humans were identified as enzymatic (CYP3A and aldehyde oxidase) and non-enzymatic processes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Diez días después de una dosis marcada se había eliminado alrededor del 64 % en las heces y el 25 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Diez días después de una dosis marcada se había eliminado alrededor del 64 % en las heces y el 25 % en la orina.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ten days after a single administration of radiolabeled lenvatinib, approximately 64% and 25% of the radiolabel were eliminated in the feces and urine, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de unas 28 horas.',
          ref: {
            f: 'dailymed-lenvatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life of lenvatinib was approximately 28 hours',
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
      valor: '1-4',
      unidad: 'h',
      analito: 'lenvatinib',
      ref: {
        f: 'dailymed-lenvatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to peak plasma concentration (T max ) typically occurred from 1 to 4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '97-99',
      unidad: '%',
      analito: 'lenvatinib',
      ref: { f: 'dailymed-lenvatinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of lenvatinib is 97% to 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '97',
      unidad: 'L',
      analito: 'lenvatinib',
      ref: {
        f: 'dailymed-lenvatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Model-predicted geometric mean steady state volume of distribution is 97 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '28 (aprox.)',
      unidad: 'h',
      analito: 'lenvatinib',
      ref: {
        f: 'dailymed-lenvatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of lenvatinib was approximately 28 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad eliminada en las heces en 10 días',
      valor: '64 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-lenvatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 64% and 25% of the radiolabel were eliminated in the feces and urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lenvatinib', 'f4bedd21-efde-44c6-9d9c-b48b78d7ed1e', 'LENVIMA (LENVATINIB) CAPSULE LENVIMA (LENVATINIB) KIT', 'Lenvima', '82', '2026-10-22', '2026-11-19'),
    rengPubchem(9823820, 'lenvatinib mesylate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
