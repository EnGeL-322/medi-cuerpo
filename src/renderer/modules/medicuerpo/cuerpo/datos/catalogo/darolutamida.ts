import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'darolutamida',
    nombre: 'Darolutamida',
    clase: 'Inhibidor del receptor de andrógenos',
    sinonimos: [ 'darolutamide', 'Nubeqa' ],
    formula: 'C19H19ClN6O2',
    masaMolar: 398.8,
    smiles: 'C[C@@H](CN1C=CC(=N1)C2=CC(=C(C=C2)C#N)Cl)NC(=O)C3=NNC(=C3)C(C)O',
    inchikey: 'BLIJXOOIHRSQRB-PXYINDEMSA-N',
    cid: 67171867,
    iupac: 'N-[(2S)-1-[3-(3-chloro-4-cyanophenyl)pyrazol-1-yl]propan-2-yl]-5-(1-hydroxyethyl)-1H-pyrazole-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'darolutamida-oral',
      producto: 'NUBEQA · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '300 mg por comprimido, según la etiqueta',
      excipientes: [
        'anhydrous dibasic calcium phosphate',
        'croscarmellose sodium',
        'lactose monohydrate',
        'magnesium stearate',
        'povidone k30',
        'polyethylene glycol 3350',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento del cáncer de próstata no metastásico resistente a la castración y del metastásico sensible a hormonas, según la etiqueta.',
        ref: {
          f: 'dailymed-darolutamida',
          sec: '1 · Indicaciones',
          cita: 'NUBEQA is an androgen receptor inhibitor indicated for the treatment of adult patients with',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-darolutamida',
      advertencias: [
        {
          titulo: 'Cardiopatía isquémica',
          texto: 'Optimizar los factores de riesgo y vigilar los signos de enfermedad coronaria.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-darolutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Ischemic heart disease, including fatal cases, occurred in patients receiving NUBEQA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Convulsiones',
          texto: 'Valorar suspenderlo si aparece una convulsión.',
          organos: [],
          ref: {
            f: 'dailymed-darolutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Consider discontinuation of NUBEQA in patients who develop a seizure during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal y pérdida del embarazo; los varones con pareja en edad fértil deben usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-darolutamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'NUBEQA can cause fetal harm and loss of pregnancy',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 % y 2 % más que con placebo, con laboratorio): aumento de AST, descenso de neutrófilos, aumento de bilirrubina, fatiga y aumento de ALT.',
          '34084-4',
          'most common adverse reactions (>10% with a ≥2% increase over placebo), including laboratory test abnormalities, are increased AST, decreased neutrophil count, increased bilirubin, fatigue, and increased ALT'
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
    contiene: 'Comprimido recubierto con película: 300 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de próstata no metastásico resistente a la castración y del metastásico sensible a hormonas, según la etiqueta.',
    actua: 'Inhibe de forma competitiva la unión de los andrógenos, el paso del receptor al núcleo y la transcripción; su metabolito principal, la cetodarolutamida, tiene una actividad similar.',
    recorrido: 'La Cmax se alcanza a unas 4 horas y la biodisponibilidad absoluta en ayunas es de alrededor del 30 %; con alimentos aumenta 2,0 a 2,5 veces. Tras una dosis marcada en solución oral, el 63,4 % se excretó en la orina y el 32,4 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets (300 mg): white to off-white oval film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'en ayunas',
      ocurre: 'La Cmax se alcanza a unas 4 horas y la biodisponibilidad absoluta en ayunas es de alrededor del 30 %; con alimentos aumenta 2,0 a 2,5 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La Cmax se alcanza a unas 4 horas y la biodisponibilidad absoluta en ayunas es de alrededor del 30 %; con alimentos aumenta 2,0 a 2,5 veces.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability is approximately 30% following oral administration of a NUBEQA tablet containing 300 mg darolutamide under fasted conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos la biodisponibilidad aumentó entre 2,0 y 2,5 veces.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Bioavailability of darolutamide increased by 2.0- to 2.5‑fold when administered with food',
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
      ocurre: 'Se une en un 92 % a las proteínas (99,8 % la cetodarolutamida), sobre todo a la albúmina; el volumen de distribución tras la vía intravenosa es de 119 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 92 % a las proteínas (99,8 % la cetodarolutamida), sobre todo a la albúmina; el volumen de distribución tras la vía intravenosa es de 119 L.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding is 92% for darolutamide and 99.8% for the active metabolite, ketodarolutamide',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Inhibe de forma competitiva la unión de los andrógenos, el paso del receptor al núcleo y la transcripción; su metabolito principal, la cetodarolutamida, tiene una actividad similar.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma competitiva la unión de los andrógenos, el paso del receptor al núcleo y la transcripción; su metabolito principal, la cetodarolutamida, tiene una actividad similar.',
            ref: {
              f: 'dailymed-darolutamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Darolutamide competitively inhibits androgen binding, AR nuclear translocation, and AR-mediated transcription',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y también por la UGT1A9 y la UGT1A1; la exposición a cetodarolutamida es 1,7 veces la del fármaco.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y también por la UGT1A9 y la UGT1A1; la exposición a cetodarolutamida es 1,7 veces la del fármaco.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Darolutamide is primarily metabolized by CYP3A4, as well as by UGT1A9 and UGT1A1',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Cetodarolutamida',
          actividad: 'activo',
          nota: 'Metabolito activo principal con actividad in vitro similar.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12 · Farmacología clínica',
            cita: 'A major metabolite, ketodarolutamide, exhibited similar in vitro activity to darolutamide',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada en solución oral, el 63,4 % se excretó en la orina y el 32,4 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada en solución oral, el 63,4 % se excretó en la orina y el 32,4 % en las heces.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'a total of 63.4% of darolutamide‑related material is excreted in the urine (approximately 7% unchanged) and 32.4% (approximately 30% unchanged) in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva de la darolutamida y de la cetodarolutamida es de unas 20 horas.',
          ref: {
            f: 'dailymed-darolutamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life of darolutamide and ketodarolutamide is approximately 20 hours in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta en ayunas',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'darolutamida',
      condiciones: 'en ayunas',
      ref: { f: 'dailymed-darolutamida', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability is approximately 30%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'darolutamida',
      ref: {
        f: 'dailymed-darolutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Darolutamide C max is reached approximately 4 hours after administration of a single 600 mg oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '92',
      unidad: '%',
      analito: 'darolutamida',
      ref: { f: 'dailymed-darolutamida', sec: '12.3 · Farmacocinética', cita: 'Protein binding is 92% for darolutamide', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución (vía intravenosa)',
      valor: '119',
      unidad: 'L',
      analito: 'darolutamida',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-darolutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of darolutamide after intravenous administration is 119 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '20 (aprox.)',
      unidad: 'h',
      analito: 'darolutamida',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-darolutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life of darolutamide and ketodarolutamide is approximately 20 hours in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Material excretado en la orina',
      valor: '63,4',
      unidad: '% de la dosis',
      analito: 'darolutamida y metabolitos',
      condiciones: 'solución oral marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-darolutamida',
        sec: '12.3 · Farmacocinética',
        cita: 'a total of 63.4% of darolutamide‑related material is excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-darolutamida', '1a7cb212-56e4-4b9d-a73d-bfee7fe4735e', 'NUBEQA (DAROLUTAMIDE) TABLET, FILM COATED', 'NUBEQA', '24', '2026-10-06', '2026-11-19'),
    rengPubchem(67171867, 'darolutamide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
