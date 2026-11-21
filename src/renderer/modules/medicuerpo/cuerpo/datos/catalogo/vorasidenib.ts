import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vorasidenib',
    nombre: 'Vorasidenib',
    clase: 'Inhibidor de las isocitrato deshidrogenasas 1 y 2 (IDH1 e IDH2)',
    sinonimos: [ 'vorasidenib', 'Voranigo' ],
    formula: 'C14H13ClF6N6',
    masaMolar: 414.74,
    smiles: 'C[C@H](C(F)(F)F)NC1=NC(=NC(=N1)C2=NC(=CC=C2)Cl)N[C@H](C)C(F)(F)F',
    inchikey: 'QCZAWDGAVJMPTA-RNFRBKRXSA-N',
    cid: 117817422,
    iupac: '6-(6-chloro-2-pyridinyl)-2-N,4-N-bis[(2R)-1,1,1-trifluoropropan-2-yl]-1,3,5-triazine-2,4-diamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vorasidenib-oral',
      producto: 'VORANIGO · comprimido recubierto con película',
      titular: 'SERVIER PHARMACEUTICALS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 40 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'silicon dioxide',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'propylene glycol'
      ],
      usos: {
        t: 'Tratamiento del astrocitoma u oligodendroglioma de grado 2 con mutación sensible de IDH1 o IDH2 tras la cirugía, desde los 12 años.',
        ref: {
          f: 'dailymed-vorasidenib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult and pediatric patients 12 years and older with Grade 2 astrocytoma or oligodendroglioma with a susceptible isocitrate dehydrogenase-1 (IDH1) or isocitrate dehydrogenase-2 (IDH2) mutation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vorasidenib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas cada 2 semanas los 2 primeros meses y después cada mes durante 2 años.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests every 2 weeks during the first 2 months of treatment, then monthly for the first 2 years of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir del riesgo para el feto a las embarazadas y a las mujeres en edad fértil.',
          organos: [],
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women and females of reproductive potential of the potential risk to a fetus',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (15 % o más): fatiga, cefalea, COVID-19, dolor musculoesquelético, diarrea, náuseas y convulsiones.',
          '34084-4',
          'The most common (≥15%) adverse reactions include fatigue, headache, COVID-19, musculoskeletal pain, diarrhea, nausea, and seizure'
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
    contiene: 'Comprimido recubierto con película: 10 mg o 40 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del astrocitoma u oligodendroglioma de grado 2 con mutación sensible de IDH1 o IDH2 tras la cirugía, desde los 12 años.',
    actua: 'Inhibe las enzimas IDH1 e IDH2, naturales y mutadas; en modelos tumorales con IDH mutada reduce el 2-hidroxiglutarato.',
    recorrido: 'La biodisponibilidad absoluta media es del 34 % y el pico aparece hacia las 2 horas; la comida aumenta la exposición. Tras una dosis marcada, el 85 % se recuperó en las heces (56 % sin cambios) y el 4,5 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '3 · Formas y concentraciones',
            cita: 'White to off-white, round film-coated tablet imprinted with',
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
      ocurre: 'La biodisponibilidad absoluta media es del 34 % y el pico aparece hacia las 2 horas; la comida aumenta la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 34 % y el pico aparece hacia las 2 horas; la comida aumenta la exposición.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of vorasidenib is 34%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico en estado estacionario es de 2 horas.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (minimum, maximum) time to maximum plasma concentrations (t max ) at steady state is 2 hours (0.5 to 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas multiplicó la Cmax por 3,1 y el AUC por 1,4.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'meal increased vorasidenib C max 3.1-fold and AUC 1.4-fold, compared to the fasting conditions',
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
      ocurre: 'In vitro se une en un 97 % a las proteínas del plasma humano; el volumen de distribución en estado estacionario es de 3930 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 97 % a las proteínas del plasma humano; el volumen de distribución en estado estacionario es de 3930 L.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The protein binding is 97% in human plasma independent of vorasidenib concentrations in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 3930 L.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) volume of distribution at steady state of vorasidenib is 3,930 L (40%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'IDH1 e IDH2',
        efecto: 'Inhibe las enzimas IDH1 e IDH2, naturales y mutadas; en modelos tumorales con IDH mutada reduce el 2-hidroxiglutarato.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las enzimas IDH1 e IDH2, naturales y mutadas; en modelos tumorales con IDH mutada reduce el 2-hidroxiglutarato.',
            ref: {
              f: 'dailymed-vorasidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vorasidenib is a small molecule inhibitor that targets isocitrate dehydrogenase-1 and 2 (IDH1 and IDH2) enzymes',
              codigo: '43679-0'
            }
          },
          {
            t: 'En modelos tumorales con IDH1 o IDH2 mutadas redujo la producción de 2-hidroxiglutarato.',
            ref: {
              f: 'dailymed-vorasidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'vorasidenib decreased production of 2-hydroxyglutarate (2-HG)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP1A2, con contribuciones menores de otras CYP; las vías no CYP pueden aportar hasta un 30 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP1A2, con contribuciones menores de otras CYP; las vías no CYP pueden aportar hasta un 30 %.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorasidenib is primarily metabolized by CYP1A2 with minor contributions from CYP2B6, CYP2C8, CYP2C9, CYP2C19, CYP2D6 and CYP3A',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las vías no dependientes del CYP pueden aportar hasta un 30 % de su metabolismo.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Non-CYP pathways may contribute up to 30% of its metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 85 % se recuperó en las heces (56 % sin cambios) y el 4,5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 85 % se recuperó en las heces (56 % sin cambios) y el 4,5 % en la orina.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: '85% of the dose was recovered in feces (56% unchanged) and 4.5% was recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal en estado estacionario es de 10 días y el aclaramiento oral, de 14 L/h.',
          ref: {
            f: 'dailymed-vorasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) steady state terminal half-life is 10 days (57%) and oral clearance is 14 L/h (56%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '34',
      unidad: '%',
      analito: 'vorasidenib',
      ref: { f: 'dailymed-vorasidenib', sec: '12.3 · Farmacocinética', cita: 'The mean absolute bioavailability of vorasidenib is 34%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en estado estacionario',
      valor: '2',
      unidad: 'h',
      analito: 'vorasidenib',
      ref: {
        f: 'dailymed-vorasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum plasma concentrations (t max ) at steady state is 2 hours (0.5 to 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '97',
      unidad: '%',
      analito: 'vorasidenib',
      ref: { f: 'dailymed-vorasidenib', sec: '12.3 · Farmacocinética', cita: 'The protein binding is 97% in human plasma', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '3930',
      unidad: 'L',
      analito: 'vorasidenib',
      ref: {
        f: 'dailymed-vorasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'volume of distribution at steady state of vorasidenib is 3,930 L (40%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal en estado estacionario',
      valor: '10',
      unidad: 'días',
      analito: 'vorasidenib',
      ref: {
        f: 'dailymed-vorasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) steady state terminal half-life is 10 days (57%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral',
      valor: '14',
      unidad: 'L/h',
      analito: 'vorasidenib',
      ref: { f: 'dailymed-vorasidenib', sec: '12.3 · Farmacocinética', cita: 'oral clearance is 14 L/h (56%)', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '85',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-vorasidenib', sec: '12.3 · Farmacocinética', cita: '85% of the dose was recovered in feces (56% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vorasidenib', '31405fee-55b7-4857-987e-2724ee76be84', 'VORANIGO (VORASIDENIB) TABLET, FILM COATED', 'VORANIGO', '9', '2026-09-17', '2026-11-19'),
    rengPubchem(117817422, 'vorasidenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
