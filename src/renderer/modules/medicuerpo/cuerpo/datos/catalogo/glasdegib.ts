import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'glasdegib',
    nombre: 'Glasdegib',
    clase: 'Inhibidor de la vía Hedgehog (antagonista de Smoothened)',
    sinonimos: [ 'glasdegib', 'Daurismo' ],
    formula: 'C21H22N6O',
    masaMolar: 374.4,
    smiles: 'CN1CC[C@H](C[C@@H]1C2=NC3=CC=CC=C3N2)NC(=O)NC4=CC=C(C=C4)C#N',
    inchikey: 'SFNSLLSYNZWZQG-VQIMIIECSA-N',
    cid: 25166913,
    iupac: '1-[(2R,4R)-2-(1H-benzimidazol-2-yl)-1-methylpiperidin-4-yl]-3-(4-cyanophenyl)urea',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'glasdegib-oral',
      producto: 'Daurismo · comprimido recubierto con película',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'anhydrous dibasic calcium phosphate',
        'sodium starch glycolate type a corn',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'lactose monohydrate',
        'polyethylene glycol, unspecified',
        'triacetin',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento, con citarabina a dosis bajas, de la leucemia mieloide aguda de nuevo diagnóstico en adultos de 75 años o más o que no pueden recibir quimioterapia intensiva.',
        ref: {
          f: 'dailymed-glasdegib',
          sec: '1 · Indicaciones',
          cita: 'in combination with low-dose cytarabine, for the treatment of newly-diagnosed acute myeloid leukemia (AML) in adult patients who are ≥75 years old',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-glasdegib',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar la muerte embriofetal o defectos congénitos graves si se toma en el embarazo.',
          organos: [],
          ref: {
            f: 'dailymed-glasdegib',
            sec: 'Advertencia destacada',
            cita: 'DAURISMO can cause embryo-fetal death or severe birth defects when administered to a pregnant woman',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Vigilar el electrocardiograma y los electrolitos.',
          organos: [],
          ref: {
            f: 'dailymed-glasdegib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor electrocardiograms (ECGs) and electrolytes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Donación de sangre',
          texto: 'No donar sangre ni hemoderivados durante el tratamiento ni hasta 30 días después de la última dosis.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-glasdegib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise patients not to donate blood or blood products while taking DAURISMO and for at least 30 days after the last dose of DAURISMO',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): anemia, fatiga, hemorragia, neutropenia febril, dolor musculoesquelético, náuseas, edema, trombocitopenia, disnea y disminución del apetito, entre otras.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%) are anemia, fatigue, hemorrhage, febrile neutropenia, musculoskeletal pain, nausea, edema, thrombocytopenia, dyspnea, decreased appetite'
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
    contiene: 'Comprimido recubierto con película: 25 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con citarabina a dosis bajas, de la leucemia mieloide aguda de nuevo diagnóstico en adultos de 75 años o más o que no pueden recibir quimioterapia intensiva.',
    actua: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
    recorrido: 'La biodisponibilidad absoluta media es del 77 % y el pico en estado estacionario aparece entre 1,3 y 1,8 horas. Tras 100 mg marcados, el 49 % de la dosis se eliminó en la orina (17 % sin cambios) y el 42 % en las heces (20 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '3 · Formas y concentraciones',
            cita: 'round, pale orange film-coated tablet debossed with',
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
      ocurre: 'La biodisponibilidad absoluta media es del 77 % y el pico en estado estacionario aparece entre 1,3 y 1,8 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 77 % y el pico en estado estacionario aparece entre 1,3 y 1,8 horas.',
          ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'The mean absolute bioavailability of DAURISMO is 77%', codigo: '43682-4' }
        },
        {
          t: 'La mediana del tiempo hasta el pico en estado estacionario va de 1,3 a 1,8 horas.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'glasdegib median time to peak concentrations (T max ) at steady state ranged from 1.3 hours to 1.8 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo el AUC un 16 % y la Cmax un 31 %.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'reduced area under the curve over time to infinity (AUC 0-INF ) by 16% and C max by 31%',
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
      ocurre: 'In vitro se une en un 91 % a las proteínas plasmáticas; el volumen de distribución aparente es de 188 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 91 % a las proteínas plasmáticas; el volumen de distribución aparente es de 188 L.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Glasdegib is 91% bound to human plasma proteins in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 188 L en pacientes con neoplasias hematológicas.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (%CV) apparent volume of distribution (V z /F) was 188 L (20%) in patients with hematologic malignancies',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con neoplasias hematológicas'
        }
      ],
      accion: {
        diana: 'Smoothened (vía Hedgehog)',
        efecto: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
        lugar: [],
        datos: [
          {
            t: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
            ref: {
              f: 'dailymed-glasdegib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Glasdegib binds to and inhibits Smoothened, a transmembrane protein involved in hedgehog signal transduction',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4, con contribuciones menores de la CYP2C8 y la UGT1A9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4, con contribuciones menores de la CYP2C8 y la UGT1A9.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Glasdegib is primarily metabolized by the CYP3A4 pathway, with minor contributions by CYP2C8 and UGT1A9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 49 % de la dosis se eliminó en la orina (17 % sin cambios) y el 42 % en las heces (20 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 49 % de la dosis se eliminó en la orina (17 % sin cambios) y el 42 % en las heces (20 % sin cambios).',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: '49% (17% unchanged) of the administered dose was eliminated in the urine and 42% (20% unchanged) of the administered dose was eliminated in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de 17,4 horas y el aclaramiento aparente, de 6,45 L/h.',
          ref: {
            f: 'dailymed-glasdegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Glasdegib has a mean (± SD) half-life of 17.4 h (3.7) and geometric mean (%CV) apparent clearance of 6.45 L/h (25%)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con neoplasias hematológicas'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '77',
      unidad: '%',
      analito: 'glasdegib',
      ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'The mean absolute bioavailability of DAURISMO is 77%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en estado estacionario',
      valor: '1,3-1,8',
      unidad: 'h',
      analito: 'glasdegib',
      condiciones: '100 mg una vez al día',
      ref: {
        f: 'dailymed-glasdegib',
        sec: '12.3 · Farmacocinética',
        cita: 'glasdegib median time to peak concentrations (T max ) at steady state ranged from 1.3 hours to 1.8 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '91',
      unidad: '%',
      analito: 'glasdegib',
      ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'Glasdegib is 91% bound to human plasma proteins in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '188',
      unidad: 'L',
      analito: 'glasdegib',
      poblacion: 'pacientes con neoplasias hematológicas',
      ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'apparent volume of distribution (V z /F) was 188 L (20%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '17,4',
      unidad: 'h',
      analito: 'glasdegib',
      poblacion: 'pacientes con neoplasias hematológicas',
      ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'Glasdegib has a mean (± SD) half-life of 17.4 h (3.7)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '6,45',
      unidad: 'L/h',
      analito: 'glasdegib',
      poblacion: 'pacientes con neoplasias hematológicas',
      ref: { f: 'dailymed-glasdegib', sec: '12.3 · Farmacocinética', cita: 'geometric mean (%CV) apparent clearance of 6.45 L/h (25%)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada en la orina',
      valor: '49',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: {
        f: 'dailymed-glasdegib',
        sec: '12.3 · Farmacocinética',
        cita: '49% (17% unchanged) of the administered dose was eliminated in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-glasdegib', '204a6f7e-c9a4-472b-abd2-9527bda64d17', 'DAURISMO (GLASDEGIB) TABLET, FILM COATED', 'Daurismo', '11', '2025-12-12', '2026-11-19'),
    rengPubchem(25166913, 'glasdegib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
