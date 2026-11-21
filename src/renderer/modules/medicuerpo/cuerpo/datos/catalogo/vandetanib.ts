import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vandetanib',
    nombre: 'Vandetanib',
    clase: 'Inhibidor multicinasa (RET, VEGFR, EGFR)',
    sinonimos: [ 'vandetanib', 'Caprelsa' ],
    formula: 'C22H24BrFN4O2',
    masaMolar: 475.4,
    smiles: 'CN1CCC(CC1)COC2=C(C=C3C(=C2)N=CN=C3NC4=C(C=C(C=C4)Br)F)OC',
    inchikey: 'UHTHHESEBZOYNR-UHFFFAOYSA-N',
    cid: 3081361,
    iupac: 'N-(4-bromo-2-fluorophenyl)-6-methoxy-7-[(1-methylpiperidin-4-yl)methoxy]quinazolin-4-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vandetanib-oral',
      producto: 'CAPRELSA · comprimido recubierto con película',
      titular: 'GENZYME CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 300 mg por comprimido, según la etiqueta',
      excipientes: [
        'dibasic calcium phosphate dihydrate',
        'microcrystalline cellulose',
        'crospovidone (120 .mu.m)',
        'povidone, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol 300'
      ],
      usos: {
        t: 'Tratamiento del cáncer medular de tiroides sintomático o progresivo, irresecable, localmente avanzado o metastásico.',
        ref: {
          f: 'dailymed-vandetanib',
          sec: '1 · Indicaciones',
          cita: 'CAPRELSA is a kinase inhibitor indicated for the treatment of symptomatic or progressive medullary thyroid cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vandetanib',
      advertencias: [
        {
          titulo: 'Prolongación del QT, torsades de pointes y muerte súbita',
          texto: 'Puede prolongar el QT; se han producido torsades de pointes y muerte súbita.',
          organos: [],
          ref: {
            f: 'dailymed-vandetanib',
            sec: 'Advertencia destacada',
            cita: 'Torsades de pointes and sudden death have occurred in patients receiving CAPRELSA',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Incluyen necrólisis epidérmica tóxica y síndrome de Stevens-Johnson, algunas mortales.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-vandetanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe skin reactions, including toxic epidermal necrolysis and Stevens-Johnson syndrome, some fatal',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial',
          texto: 'Incluye casos mortales; investigar los síntomas respiratorios inexplicados.',
          organos: [],
          ref: {
            f: 'dailymed-vandetanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interstitial lung disease (ILD), including fatalities: investigate unexplained non-specific respiratory signs and symptoms',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 20 % y 5 % más que con placebo): diarrea o colitis, exantema, dermatitis acneiforme, hipertensión, náuseas, cefalea, infecciones respiratorias altas y disminución del apetito.',
          '34084-4',
          'The most common adverse drug reactions (>20%) seen with CAPRELSA and with a between-arm difference of ≥5 % have been diarrhea/colitis, rash, acneiform dermatitis, hypertension, nausea, headache'
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
    contiene: 'Comprimido recubierto con película: 100 mg o 300 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer medular de tiroides sintomático o progresivo, irresecable, localmente avanzado o metastásico.',
    actua: 'Inhibe la actividad tirosina cinasa de las familias EGFR y VEGFR, RET, BRK, TIE2 y miembros de las familias EPH y Src; su metabolito N-desmetilado tiene una actividad similar.',
    recorrido: 'Se absorbe despacio: el pico aparece a una mediana de 6 horas y los alimentos no afectan la exposición. En 21 días se recuperó alrededor del 69 % de una dosis marcada: el 44 % en las heces y el 25 % en la orina; la excreción es lenta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; la absorción es lenta.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; la absorción es lenta.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of CAPRELSA, absorption is slow',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe despacio: el pico aparece a una mediana de 6 horas y los alimentos no afectan la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe despacio: el pico aparece a una mediana de 6 horas y los alimentos no afectan la exposición.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'absorption is slow with peak plasma concentrations typically achieved at a median of 6 hours, range 4 to 10 hours, after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'La exposición no se ve afectada por los alimentos.',
          ref: { f: 'dailymed-vandetanib', sec: '12.3 · Farmacocinética', cita: 'Exposure to vandetanib is unaffected by food', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une a la albúmina sérica y a la alfa-1-glucoproteína ácida (alrededor del 90 % in vitro); el volumen de distribución medio es de unos 7 450 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a la albúmina sérica y a la alfa-1-glucoproteína ácida (alrededor del 90 % in vitro); el volumen de distribución medio es de unos 7 450 L.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vandetanib binds to human serum albumin and α1-acid-glycoprotein with in vitro protein binding being approximately 90%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio de unos 7 450 L y semivida plasmática mediana de 19 días.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'a mean volume of distribution of approximately 7450 L, and a median plasma half-life of 19 days',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer medular de tiroides'
        }
      ],
      accion: {
        diana: 'RET, VEGFR y EGFR',
        efecto: 'Inhibe la actividad tirosina cinasa de las familias EGFR y VEGFR, RET, BRK, TIE2 y miembros de las familias EPH y Src; su metabolito N-desmetilado tiene una actividad similar.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la actividad tirosina cinasa de las familias EGFR y VEGFR, RET, BRK, TIE2 y miembros de las familias EPH y Src; su metabolito N-desmetilado tiene una actividad similar.',
            ref: {
              f: 'dailymed-vandetanib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'vandetanib inhibits the tyrosine kinase activity of the EGFR and VEGFR families, RET, BRK, TIE2, and members of the EPH receptor and Src kinase families',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP3A4 produce N-desmetil-vandetanib y las FMO1 y FMO3 producen el N-óxido.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP3A4 produce N-desmetil-vandetanib y las FMO1 y FMO3 producen el N-óxido.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'N-desmethyl-vandetanib is primarily produced by CYP3A4 and vandetanib-N-oxide by flavin-containing monooxygenase enzymes FMO1 and FMO3',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetil-vandetanib',
          actividad: 'activo',
          nota: 'Metabolito con actividad inhibidora similar sobre VEGFR y EGFR.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12 · Farmacología clínica',
            cita: 'the N-desmethyl metabolite of the drug, representing 7 to 17.1% of vandetanib exposure, has similar inhibitory activity to the parent compound',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 21 días se recuperó alrededor del 69 % de una dosis marcada: el 44 % en las heces y el 25 % en la orina; la excreción es lenta.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 21 días se recuperó alrededor del 69 % de una dosis marcada: el 44 % en las heces y el 25 % en la orina; la excreción es lenta.',
          ref: {
            f: 'dailymed-vandetanib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 69% was recovered with 44% in feces and 25% in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '6',
      unidad: 'h',
      analito: 'vandetanib',
      ref: {
        f: 'dailymed-vandetanib',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations typically achieved at a median of 6 hours, range 4 to 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'vandetanib',
      ref: { f: 'dailymed-vandetanib', sec: '12.3 · Farmacocinética', cita: 'in vitro protein binding being approximately 90%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '7450 (aprox.)',
      unidad: 'L',
      analito: 'vandetanib',
      poblacion: 'pacientes con cáncer medular de tiroides',
      ref: { f: 'dailymed-vandetanib', sec: '12.3 · Farmacocinética', cita: 'a mean volume of distribution of approximately 7450 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática mediana',
      valor: '19',
      unidad: 'd',
      analito: 'vandetanib',
      poblacion: 'pacientes con cáncer medular de tiroides',
      ref: { f: 'dailymed-vandetanib', sec: '12.3 · Farmacocinética', cita: 'a median plasma half-life of 19 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento medio',
      valor: '13,2 (aprox.)',
      unidad: 'L/h',
      analito: 'vandetanib',
      poblacion: 'pacientes con cáncer medular de tiroides',
      ref: { f: 'dailymed-vandetanib', sec: '12.3 · Farmacocinética', cita: 'a mean clearance of approximately 13.2 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces en 21 días',
      valor: '44',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-vandetanib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 69% was recovered with 44% in feces and 25% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vandetanib', 'e5721cb8-4185-47b9-bbb3-1c587e558a03', 'CAPRELSA (VANDETANIB) TABLET, FILM COATED', 'CAPRELSA', '15', '2026-11-04', '2026-11-19'),
    rengPubchem(3081361, 'vandetanib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
