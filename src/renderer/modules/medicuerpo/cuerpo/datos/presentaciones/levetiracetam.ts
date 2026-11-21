import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'levetiracetam',
  presentaciones: [
    {
  id: 'levetiracetam-solucion',
  producto: 'Keppra · solución oral',
  titular: 'UCB, INC.',
  mercado: 'EE. UU.',
  forma: 'Solución oral',
  formaFuente: 'SOLUTION',
  liberacion: 'no declarada',
  concentraciones: '100 mg/mL de levetiracetam, según la etiqueta',
  excipientes: [
    'ammonium glycyrrhizate',
    'citric acid monohydrate',
    'glycerin',
    'maltitol',
    'methylparaben',
    'propylparaben',
    'water',
    'trisodium citrate dihydrate',
    'acesulfame potassium'
  ],
  usos: {
    t: 'Crisis de inicio parcial a partir de 1 mes de edad y, como tratamiento añadido, crisis mioclónicas y tónico-clónicas generalizadas primarias, según la edad.',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '1 · Indicaciones',
      cita: 'KEPPRA is indicated for the treatment of partial-onset seizures in patients 1 month of age and older',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-levetiracetam-solucion',
  advertencias: [
    {
      titulo: 'Somnolencia y fatiga',
      texto: 'Puede causar somnolencia y fatiga.',
      organos: [ 'encefalo' ],
      ref: {
        f: 'dailymed-levetiracetam-solucion',
        sec: '5 · Advertencias y precauciones',
        cita: 'KEPPRA may cause somnolence and fatigue',
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Anafilaxia y angioedema',
      texto: 'Puede causar anafilaxia o angioedema tras la primera dosis o en cualquier momento del tratamiento.',
      organos: [ 'vias-respiratorias' ],
      ref: {
        f: 'dailymed-levetiracetam-solucion',
        sec: '5 · Advertencias y precauciones',
        cita: 'KEPPRA can cause anaphylaxis or angioedema after the first dose or at any time during treatment',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes (≥ 5 % más que placebo): en adultos, somnolencia, astenia, infección y mareo; en niños, fatiga, agresividad, congestión nasal, menor apetito e irritabilidad.',
      '34084-4',
      'Most common adverse reactions (incidence ≥ 5% more than placebo) include: Adult patients: somnolence, asthenia, infection and dizziness'
    ],
    [
      'La etiqueta describe además anomalías del comportamiento, conducta suicida, somnolencia y fatiga, anafilaxia y reacciones dermatológicas graves.',
      '34084-4',
      'The following adverse reactions are discussed in more details in other sections of labeling'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  recorridoPropio: {
    resumen: 'La absorción es rápida, con picos plasmáticos en torno a una hora en ayunas; los comprimidos y la solución oral son bioequivalentes en velocidad y extensión. Se elimina por vía renal como fármaco sin cambios, el 66 % de la dosis; la semivida plasmática en adultos es de 7 ± 1 horas.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Solución oral: líquido incoloro y transparente, con sabor a uva; el principio activo ya está disuelto.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Solución oral: líquido incoloro y transparente, con sabor a uva; el principio activo ya está disuelto.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '3 · Formas y concentraciones',
              cita: 'KEPPRA Oral Solution 100 mg/mL: a clear, colorless, grape-flavored liquid',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'La absorción es rápida, con picos plasmáticos en torno a una hora en ayunas; los comprimidos y la solución oral son bioequivalentes en velocidad y extensión.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'La absorción es rápida, con picos plasmáticos en torno a una hora en ayunas; los comprimidos y la solución oral son bioequivalentes en velocidad y extensión.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Absorption of levetiracetam is rapid, with peak plasma concentrations occurring in about an hour following oral administration in fasted subjects',
              codigo: '43682-4'
            }
          },
          {
            t: 'Los comprimidos y la solución oral son bioequivalentes en velocidad y extensión de absorción.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'the tablets and oral solution are bioequivalent in rate and extent of absorption',
              codigo: '43682-4'
            }
          },
          {
            t: 'La comida no cambia la extensión de la absorción, pero baja la Cmax un 20 % y retrasa el Tmax 1,5 horas.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Food does not affect the extent of absorption of levetiracetam but it decreases C max by 20% and delays T max by 1.5 hours',
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
        ocurre: 'El levetiracetam y su metabolito principal se unen menos del 10 % a proteínas del plasma, por lo que las interacciones por competencia de unión son poco probables.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El levetiracetam y su metabolito principal se unen menos del 10 % a proteínas del plasma, por lo que las interacciones por competencia de unión son poco probables.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Levetiracetam and its major metabolite are less than 10% bound to plasma proteins',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Proteína de vesículas sinápticas SV2A (mecanismo no establecido)',
          efecto: 'Se desconoce el mecanismo exacto; los datos indican que se une a la proteína de vesículas sinápticas SV2A, que participaría en la regulación de la exocitosis.',
          lugar: [ 'encefalo' ],
          datos: [
            {
              t: 'Se desconoce el mecanismo exacto; los datos indican que se une a la proteína de vesículas sinápticas SV2A, que participaría en la regulación de la exocitosis.',
              ref: {
                f: 'dailymed-levetiracetam-solucion',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Experimental data indicate that this binding site is the synaptic vesicle protein SV2A, thought to be involved in the regulation of vesicle exocytosis',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'sangre' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'No se metaboliza de forma extensa; la vía principal es la hidrólisis enzimática del grupo acetamida, que da un metabolito ácido carboxílico (24 % de la dosis) y no depende de las isoenzimas del citocromo P450 hepático.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'No se metaboliza de forma extensa; la vía principal es la hidrólisis enzimática del grupo acetamida, que da un metabolito ácido carboxílico (24 % de la dosis) y no depende de las isoenzimas del citocromo P450 hepático.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Levetiracetam is not extensively metabolized in humans',
              codigo: '43682-4'
            }
          },
          {
            t: 'La vía principal es la hidrólisis enzimática del grupo acetamida.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The major metabolic pathway is the enzymatic hydrolysis of the acetamide group, which produces the carboxylic acid metabolite, ucb L057 (24% of dose)',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'ucb L057 (metabolito ácido carboxílico)',
            actividad: 'inactivo',
            nota: 'Inactivo en modelos animales de crisis.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The major metabolite is inactive in animal seizure models',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Se elimina por vía renal como fármaco sin cambios, el 66 % de la dosis; la semivida plasmática en adultos es de 7 ± 1 horas.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Se elimina por vía renal como fármaco sin cambios, el 66 % de la dosis; la semivida plasmática en adultos es de 7 ± 1 horas.',
            ref: {
              f: 'dailymed-levetiracetam-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Levetiracetam is eliminated from the systemic circulation by renal excretion as unchanged drug which represents 66% of administered dose',
              codigo: '43682-4'
            }
          }
        ],
        formas: [ 'disuelto' ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-levetiracetam-solucion', '3ca9df05-a506-4ec8-a4fe-320f1219ab21', 'KEPPRA (LEVETIRACETAM) TABLET, FILM COATED KEPPRA (LEVETIRACETAM) SOLUTION', 'Keppra', '36', '2026-01-29', '2026-11-10')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico plasmático',
    valor: '1 (aprox.)',
    unidad: 'h',
    analito: 'levetiracetam',
    poblacion: 'sujetos en ayunas',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Absorption of levetiracetam is rapid, with peak plasma concentrations occurring in about an hour following oral administration in fasted subjects',
      codigo: '43682-4'
    },
    presentacion: 'Keppra · solución oral'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad oral de los comprimidos',
    valor: '100',
    unidad: '%',
    analito: 'levetiracetam',
    origen: 'otra-presentacion',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'The oral bioavailability of levetiracetam tablets is 100%',
      codigo: '43682-4'
    },
    presentacion: 'Keppra · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma',
    valor: '< 10',
    unidad: '%',
    analito: 'levetiracetam y su metabolito principal',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Levetiracetam and its major metabolite are less than 10% bound to plasma proteins',
      codigo: '43682-4'
    },
    presentacion: 'Keppra · solución oral'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida plasmática en adultos',
    valor: '7 ± 1',
    unidad: 'h',
    analito: 'levetiracetam',
    poblacion: 'adultos',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Levetiracetam plasma half-life in adults is 7 ± 1 hour',
      codigo: '43682-4'
    },
    presentacion: 'Keppra · solución oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Fármaco sin cambios eliminado por vía renal',
    valor: '66',
    unidad: '% de la dosis',
    analito: 'levetiracetam',
    ref: {
      f: 'dailymed-levetiracetam-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Levetiracetam is eliminated from the systemic circulation by renal excretion as unchanged drug which represents 66% of administered dose',
      codigo: '43682-4'
    },
    presentacion: 'Keppra · solución oral'
  }
]
} satisfies RengExtensionFicha
