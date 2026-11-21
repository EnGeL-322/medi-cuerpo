import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'selpercatinib',
    nombre: 'Selpercatinib',
    clase: 'Inhibidor selectivo de la cinasa RET',
    sinonimos: [ 'selpercatinib', 'Retevmo' ],
    formula: 'C29H31N7O3',
    masaMolar: 525.6,
    smiles: 'CC(C)(COC1=CN2C(=C(C=N2)C#N)C(=C1)C3=CN=C(C=C3)N4CC5CC(C4)N5CC6=CN=C(C=C6)OC)O',
    inchikey: 'XIIOFHFUYBLOLW-UHFFFAOYSA-N',
    cid: 134436906,
    iupac: '6-(2-hydroxy-2-methylpropoxy)-4-[6-[6-[(6-methoxy-3-pyridinyl)methyl]-3,6-diazabicyclo[3.1.1]heptan-3-yl]-3-pyridinyl]pyrazolo[1,5-a]pyridine-3-carbonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'selpercatinib-oral',
      producto: 'RETEVMO · cápsula',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '40 mg o 80 mg por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'silicon dioxide',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'shellac',
        'alcohol',
        'isopropyl alcohol',
        'butyl alcohol',
        'propylene glycol',
        'water',
        'ammonia',
        'potassium hydroxide'
      ],
      usos: {
        t: 'Tratamiento de tumores con fusión o mutación de RET: cáncer de pulmón no microcítico, cáncer de tiroides y otros tumores sólidos, según la etiqueta.',
        ref: {
          f: 'dailymed-selpercatinib',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with locally advanced or metastatic non-small cell lung cancer (NSCLC) with a rearranged during transfection (RET) gene fusion',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-selpercatinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar ALT y AST antes de empezar, cada 2 semanas los 3 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor ALT and AST prior to initiating RETEVMO, every 2 weeks during the first 3 months, then monthly thereafter',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar síntomas pulmonares nuevos o que empeoran.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interstitial Lung Disease (ILD)/Pneumonitis: Monitor for new or worsening pulmonary symptoms',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión',
          texto: 'No iniciarlo con hipertensión no controlada; optimizar la presión antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not initiate RETEVMO in patients with uncontrolled hypertension',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos con tumores sólidos, las más frecuentes (25 % o más): dolor musculoesquelético, edema, diarrea, fatiga, boca seca, hipertensión, dolor abdominal, exantema, náuseas y estreñimiento, entre otras.',
          '34084-4',
          'Adult patients with solid tumors: musculoskeletal pain, edema, diarrhea, fatigue, dry mouth, hypertension, abdominal pain, rash, nausea, constipation'
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
    contiene: 'Cápsula: 40 mg o 80 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de tumores con fusión o mutación de RET: cáncer de pulmón no microcítico, cáncer de tiroides y otros tumores sólidos, según la etiqueta.',
    actua: 'Inhibidor de cinasas que inhibe RET natural y varias isoformas mutadas, además de VEGFR1 y VEGFR3; actúa sobre RET a concentraciones unas 60 veces menores que sobre FGFR1 y 2.',
    recorrido: 'La mediana del tmax es de 2 horas y la biodisponibilidad absoluta media de las cápsulas del 73 %; una comida grasa no produce diferencias significativas. Tras 160 mg marcados, el 69 % se recuperó en las heces (14 % sin cambios) y el 24 % en la orina (12 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; las cápsulas y los comprimidos son bioequivalentes.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; las cápsulas y los comprimidos son bioequivalentes.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The capsule and tablet dosage forms of selpercatinib are bioequivalent',
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
      ocurre: 'La mediana del tmax es de 2 horas y la biodisponibilidad absoluta media de las cápsulas del 73 %; una comida grasa no produce diferencias significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 2 horas y la biodisponibilidad absoluta media de las cápsulas del 73 %; una comida grasa no produce diferencias significativas.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability of RETEVMO capsules is 73% (60% to 82%) in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax es de 2 horas.',
          ref: { f: 'dailymed-selpercatinib', sec: '12.3 · Farmacocinética', cita: 'The median t max of selpercatinib is 2 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 96 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 203 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 96 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 203 L.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of selpercatinib is 96% in vitro and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 203 L.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (V ss /F) of selpercatinib is 203 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa RET',
        efecto: 'Inhibidor de cinasas que inhibe RET natural y varias isoformas mutadas, además de VEGFR1 y VEGFR3; actúa sobre RET a concentraciones unas 60 veces menores que sobre FGFR1 y 2.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas que inhibe RET natural y varias isoformas mutadas, además de VEGFR1 y VEGFR3; actúa sobre RET a concentraciones unas 60 veces menores que sobre FGFR1 y 2.',
            ref: {
              f: 'dailymed-selpercatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Selpercatinib inhibited wild-type RET and multiple mutated RET isoforms as well as VEGFR1 and VEGFR3 with IC 50 values ranging from 0.92 nM to 67.8 nM',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4; el selpercatinib inalterado es el 86 % del material plasmático.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4; el selpercatinib inalterado es el 86 % del material plasmático.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Selpercatinib is metabolized predominantly by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 160 mg marcados, el 69 % se recuperó en las heces (14 % sin cambios) y el 24 % en la orina (12 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 160 mg marcados, el 69 % se recuperó en las heces (14 % sin cambios) y el 24 % en la orina (12 % sin cambios).',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: '69% of the administered dose was recovered in feces (14% unchanged) and 24% in urine (12% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 32 horas en sujetos sanos y el aclaramiento aparente de 6 L/h en pacientes.',
          ref: {
            f: 'dailymed-selpercatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent clearance (CL/F) of selpercatinib is 6 L/h in patients and the half-life is 32 hours following oral administration of RETEVMO in healthy subjects',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media de las cápsulas',
      valor: '73',
      unidad: '%',
      analito: 'selpercatinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-selpercatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability of RETEVMO capsules is 73% (60% to 82%) in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2',
      unidad: 'h',
      analito: 'selpercatinib',
      ref: { f: 'dailymed-selpercatinib', sec: '12.3 · Farmacocinética', cita: 'The median t max of selpercatinib is 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '96',
      unidad: '%',
      analito: 'selpercatinib',
      ref: { f: 'dailymed-selpercatinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of selpercatinib is 96% in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '203',
      unidad: 'L',
      analito: 'selpercatinib',
      ref: {
        f: 'dailymed-selpercatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V ss /F) of selpercatinib is 203 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '32',
      unidad: 'h',
      analito: 'selpercatinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-selpercatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the half-life is 32 hours following oral administration of RETEVMO in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '6',
      unidad: 'L/h',
      analito: 'selpercatinib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-selpercatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent clearance (CL/F) of selpercatinib is 6 L/h in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '69',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 160 mg',
      ref: {
        f: 'dailymed-selpercatinib',
        sec: '12.3 · Farmacocinética',
        cita: '69% of the administered dose was recovered in feces (14% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-selpercatinib', '7fa848ba-a59c-4144-9f52-64d090f4d828', 'RETEVMO (SELPERCATINIB) CAPSULE RETEVMO (SELPERCATINIB) TABLET, COATED', 'RETEVMO', '25', '2026-09-14', '2026-11-19'),
    rengPubchem(134436906, 'selpercatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
