import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dacomitinib',
    nombre: 'Dacomitinib',
    clase: 'Inhibidor irreversible de la familia del EGFR (EGFR/HER1, HER2 y HER4)',
    sinonimos: [ 'dacomitinib', 'Vizimpro' ],
    formula: 'C24H25ClFN5O2',
    masaMolar: 469.9,
    smiles: 'COC1=C(C=C2C(=C1)N=CN=C2NC3=CC(=C(C=C3)F)Cl)NC(=O)/C=C/CN4CCCCC4',
    inchikey: 'LVXJQMNHJWSHET-AATRIKPKSA-N',
    cid: 11511120,
    iupac: '(E)-N-[4-(3-chloro-4-fluoroanilino)-7-methoxyquinazolin-6-yl]-4-piperidin-1-ylbut-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'dacomitinib-oral',
      producto: 'Vizimpro · comprimido recubierto con película',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '15 mg, 30 mg o 45 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con deleción del exón 19 o sustitución L858R del exón 21 del EGFR.',
        ref: {
          f: 'dailymed-dacomitinib',
          sec: '1 · Indicaciones',
          cita: 'VIZIMPRO is indicated for the first-line treatment of patients with metastatic non-small cell lung cancer (NSCLC) with epidermal growth factor receptor (EGFR) exon 19 deletion or exon 21 L858R substitution mutations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dacomitinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar los síntomas pulmonares que sugieran neumonitis.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea',
          texto: 'Se han producido diarreas graves y mortales; interrumpirlo ante una diarrea de grado 2 o mayor.',
          organos: [],
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe and fatal diarrhea occurred in patients treated with VIZIMPRO',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones dermatológicas',
          texto: 'Interrumpirlo ante reacciones dermatológicas persistentes de grado 2 o de grado 3 o 4 hasta su mejoría.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Withhold VIZIMPRO for persistent Grade 2 or any Grade 3 or 4 dermatologic adverse reaction until recovery',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 20 %): diarrea, exantema, paroniquia, estomatitis, disminución del apetito, piel seca, pérdida de peso, alopecia, tos y prurito.',
          '34084-4',
          'Most common adverse reactions (incidence >20%) are diarrhea, rash, paronychia, stomatitis, decreased appetite, dry skin, decreased weight, alopecia, cough, and pruritus'
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
    contiene: 'Comprimido recubierto con película: 15 mg, 30 mg o 45 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de primera línea del cáncer de pulmón no microcítico metastásico con deleción del exón 19 o sustitución L858R del exón 21 del EGFR.',
    actua: 'Inhibe de forma irreversible la actividad cinasa de la familia del EGFR (EGFR/HER1, HER2 y HER4) y de ciertas mutaciones activadoras del EGFR.',
    recorrido: 'La biodisponibilidad absoluta media es del 80 % y el pico aparece hacia las 6 horas; una comida rica en grasas no tiene un efecto relevante. Tras 45 mg marcados, el 79 % de la radiactividad se recuperó en las heces (20 % como dacomitinib) y el 3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'blue film-coated, immediate release, round biconvex tablet',
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
      ocurre: 'La biodisponibilidad absoluta media es del 80 % y el pico aparece hacia las 6 horas; una comida rica en grasas no tiene un efecto relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 80 % y el pico aparece hacia las 6 horas; una comida rica en grasas no tiene un efecto relevante.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of dacomitinib is 80% after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de unas 6 horas tras 45 mg en pacientes con cáncer.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median dacomitinib time to reach maximum concentration (T max ) occurred at approximately 6.0 hours (range 2.0 to 24 hours)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        },
        {
          t: 'Una comida rica en grasas no tuvo un efecto clínicamente relevante sobre su farmacocinética.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'had no clinically meaningful effect on dacomitinib pharmacokinetics',
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
      ocurre: 'In vitro se une en alrededor del 98 % a las proteínas plasmáticas; el volumen de distribución es de 1889 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en alrededor del 98 % a las proteínas plasmáticas; el volumen de distribución es de 1889 L.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro binding of dacomitinib to human plasma proteins is approximately 98%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 1889 L.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) volume of distribution of dacomitinib (V ss ) was 1889 L (18%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'EGFR, HER2 y HER4',
        efecto: 'Inhibe de forma irreversible la actividad cinasa de la familia del EGFR (EGFR/HER1, HER2 y HER4) y de ciertas mutaciones activadoras del EGFR.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma irreversible la actividad cinasa de la familia del EGFR (EGFR/HER1, HER2 y HER4) y de ciertas mutaciones activadoras del EGFR.',
            ref: {
              f: 'dailymed-dacomitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Dacomitinib is an irreversible inhibitor of the kinase activity of the human EGFR family (EGFR/HER1, HER2, and HER4) and certain EGFR activating mutations',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolismo hepático es su principal vía de aclaramiento, sobre todo por oxidación y conjugación con glutatión.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo hepático es su principal vía de aclaramiento, sobre todo por oxidación y conjugación con glutatión.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Hepatic metabolism is the main route of clearance of dacomitinib, with oxidation and glutathione conjugation as the major pathways',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-desmetil dacomitinib',
          actividad: 'activo',
          nota: 'Metabolito circulante más abundante, con actividad in vitro similar.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the most abundant circulating metabolite was O-desmethyl dacomitinib, which had similar in vitro pharmacologic activity as dacomitinib',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 45 mg marcados, el 79 % de la radiactividad se recuperó en las heces (20 % como dacomitinib) y el 3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 45 mg marcados, el 79 % de la radiactividad se recuperó en las heces (20 % como dacomitinib) y el 3 % en la orina.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: '79% of the radioactivity was recovered in feces (20% as dacomitinib) and 3% in urine (<1% as dacomitinib)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media es de 70 horas y el aclaramiento aparente, de 24,9 L/h.',
          ref: {
            f: 'dailymed-dacomitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean (CV%) plasma half-life of dacomitinib was 70 hours (21%), and the geometric mean (CV%) apparent plasma clearance of dacomitinib was 24.9 L/h (36%)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '80',
      unidad: '%',
      analito: 'dacomitinib',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of dacomitinib is 80% after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'dacomitinib',
      poblacion: 'pacientes con cáncer',
      condiciones: 'dosis única de 45 mg',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median dacomitinib time to reach maximum concentration (T max ) occurred at approximately 6.0 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'dacomitinib',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro binding of dacomitinib to human plasma proteins is approximately 98%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '1889',
      unidad: 'L',
      analito: 'dacomitinib',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean (CV%) volume of distribution of dacomitinib (V ss ) was 1889 L (18%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '70',
      unidad: 'h',
      analito: 'dacomitinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (CV%) plasma half-life of dacomitinib was 70 hours (21%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático aparente',
      valor: '24,9',
      unidad: 'L/h',
      analito: 'dacomitinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the geometric mean (CV%) apparent plasma clearance of dacomitinib was 24.9 L/h (36%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '79',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 45 mg',
      ref: {
        f: 'dailymed-dacomitinib',
        sec: '12.3 · Farmacocinética',
        cita: '79% of the radioactivity was recovered in feces (20% as dacomitinib)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dacomitinib', '4ab27d2f-e385-4e9c-b324-fa69c10b855a', 'VIZIMPRO (DACOMITINIB) TABLET, FILM COATED', 'Vizimpro', '9', '2026-06-25', '2026-11-19'),
    rengPubchem(11511120, 'dacomitinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
