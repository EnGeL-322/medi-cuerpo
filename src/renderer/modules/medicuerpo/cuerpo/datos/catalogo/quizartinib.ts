import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'quizartinib',
    nombre: 'Quizartinib',
    clase: 'Inhibidor de la tirosina cinasa FLT3',
    sinonimos: [ 'quizartinib dihydrochloride', 'Vanflyta' ],
    formula: 'C29H32N6O4S',
    masaMolar: 560.7,
    smiles: 'CC(C)(C)C1=CC(=NO1)NC(=O)NC2=CC=C(C=C2)C3=CN4C5=C(C=C(C=C5)OCCN6CCOCC6)SC4=N3',
    inchikey: 'CVWXJKQAOSCOAB-UHFFFAOYSA-N',
    cid: 24889392,
    iupac: '1-(5-tert-butyl-1,2-oxazol-3-yl)-3-[4-[6-(2-morpholin-4-ylethoxy)imidazo[2,1-b][1,3]benzothiazol-2-yl]phenyl]urea',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'quizartinib-oral',
      producto: 'VANFLYTA · comprimido recubierto con película',
      titular: 'DAIICHI SANKYO INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '17.7 mg o 26.5 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Diclorhidrato de quizartinib',
        ref: { f: 'dailymed-quizartinib', sec: '11 · Descripción', cita: 'quizartinib dihydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'hydroxypropyl betadex',
        'microcrystalline cellulose',
        'hypromellose, unspecified',
        'magnesium stearate',
        'talc',
        'triacetin',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia mieloide aguda de nuevo diagnóstico con duplicación interna en tándem de FLT3, con quimioterapia y luego en mantenimiento.',
        ref: {
          f: 'dailymed-quizartinib',
          sec: '1 · Indicaciones',
          cita: 'for the treatment of adult patients with newly diagnosed acute myeloid leukemia (AML) that is FLT3 internal tandem duplication (ITD)-positive',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-quizartinib',
      advertencias: [
        {
          titulo: 'Prolongación del QT, torsades de pointes y parada cardíaca',
          texto: 'Prolonga el QT según la dosis y la concentración; corregir el potasio y el magnesio y hacer electrocardiogramas antes y durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-quizartinib',
            sec: 'Advertencia destacada',
            cita: 'VANFLYTA prolongs the QT interval in a dose- and concentration-related manner',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Inicio del tratamiento',
          texto: 'No iniciarlo si el QTcF es mayor de 450 ms.',
          organos: [],
          ref: {
            f: 'dailymed-quizartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not initiate treatment with VANFLYTA if the QTcF interval is greater than 450 ms',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir del riesgo para el feto y usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-quizartinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise females of reproductive potential and males with female partners of reproductive potential of potential risk to a fetus and to use effective contraception',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 20 %, con laboratorio): descenso de linfocitos, potasio, albúmina y fósforo y aumento de la fosfatasa alcalina, entre otras.',
          '34084-4',
          'The most common (>20%) adverse reactions, including laboratory abnormalities, are lymphocytes decreased, potassium decreased, albumin decreased, phosphorus decreased, alkaline phosphatase increased'
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
    contiene: 'Comprimido recubierto con película: 17.7 mg o 26.5 mg por comprimido, según la etiqueta; el activo va como diclorhidrato de quizartinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia mieloide aguda de nuevo diagnóstico con duplicación interna en tándem de FLT3, con quimioterapia y luego en mantenimiento.',
    actua: 'Inhibe la tirosina cinasa FLT3; él y su metabolito activo AC886 se unen al dominio de unión del ATP de FLT3 y bloquean su autofosforilación.',
    recorrido: 'La biodisponibilidad absoluta media de los comprimidos es del 71 % y el pico aparece hacia las 4 horas; la comida no cambia de forma relevante la exposición. Tras 53 mg marcados, el 76,3 % de la radiactividad se recuperó en las heces (4 % sin cambios) y el 1,64 % en la orina.'
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
            f: 'dailymed-quizartinib',
            sec: '3 · Formas y concentraciones',
            cita: '17.7 mg quizartinib, white, round, film-coated, debossed with',
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
      ocurre: 'La biodisponibilidad absoluta media de los comprimidos es del 71 % y el pico aparece hacia las 4 horas; la comida no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media de los comprimidos es del 71 % y el pico aparece hacia las 4 horas; la comida no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (SD) absolute bioavailability of quizartinib from the tablet formulation was 71% (±7%) in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de unas 4 horas para el quizartinib y de 5 a 6 horas para AC886.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'time to peak concentration (median T max ) of quizartinib and AC886 measured post dose was approximately 4 hours (range 2 to 8 hours)',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'en ayunas'
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in the pharmacokinetics of quizartinib were observed when administered with a high-fat, high-calorie meal',
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
      ocurre: 'El quizartinib y AC886 se unen en un 99 % o más a las proteínas plasmáticas in vitro; el volumen de distribución en estado estacionario es de 275 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El quizartinib y AC886 se unen en un 99 % o más a las proteínas plasmáticas in vitro; el volumen de distribución en estado estacionario es de 275 L.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro plasma protein binding of quizartinib and AC886 is 99% or greater',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario estimado de 275 L en sujetos sanos.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Volume of distribution at steady state in healthy subjects was estimated to be 275 L (17%)',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'FLT3',
        efecto: 'Inhibe la tirosina cinasa FLT3; él y su metabolito activo AC886 se unen al dominio de unión del ATP de FLT3 y bloquean su autofosforilación.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la tirosina cinasa FLT3; él y su metabolito activo AC886 se unen al dominio de unión del ATP de FLT3 y bloquean su autofosforilación.',
            ref: {
              f: 'dailymed-quizartinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Quizartinib is a small molecule inhibitor of the receptor tyrosine kinase FLT3',
              codigo: '43679-0'
            }
          },
          {
            t: 'El quizartinib y su metabolito activo AC886 se unen con afinidad similar al dominio de unión del ATP de FLT3.',
            ref: {
              f: 'dailymed-quizartinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Quizartinib and its major active metabolite AC886 bind to the adenosine triphosphate (ATP) binding domain of FLT3 with comparable affinity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por oxidación por la CYP3A4/5, que también forma y metaboliza AC886.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por oxidación por la CYP3A4/5, que también forma y metaboliza AC886.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro quizartinib is primarily metabolized via oxidation by CYP3A4/5 and AC886 is formed and metabolized by CYP3A4/5',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'AC886',
          actividad: 'activo',
          nota: 'Metabolito activo principal, con afinidad por FLT3 similar a la del fármaco.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12 · Farmacología clínica',
            cita: 'Quizartinib and its major active metabolite AC886 bind to the adenosine triphosphate (ATP) binding domain of FLT3',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 53 mg marcados, el 76,3 % de la radiactividad se recuperó en las heces (4 % sin cambios) y el 1,64 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 53 mg marcados, el 76,3 % de la radiactividad se recuperó en las heces (4 % sin cambios) y el 1,64 % en la orina.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: '76.3% of the total radioactivity was recovered in feces (4% unchanged) and 1.64% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento corporal total en sujetos sanos se estima en 2,23 L/h.',
          ref: {
            f: 'dailymed-quizartinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Total body clearance of quizartinib in healthy subjects was estimated to be 2.23 L/hour (29%)',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta de los comprimidos',
      valor: '71',
      unidad: '%',
      analito: 'quizartinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (SD) absolute bioavailability of quizartinib from the tablet formulation was 71% (±7%) in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'quizartinib',
      poblacion: 'sujetos sanos',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'median T max ) of quizartinib and AC886 measured post dose was approximately 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '≥ 99',
      unidad: '%',
      analito: 'quizartinib y AC886',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vitro plasma protein binding of quizartinib and AC886 is 99% or greater',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '275',
      unidad: 'L',
      analito: 'quizartinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Volume of distribution at steady state in healthy subjects was estimated to be 275 L (17%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total',
      valor: '2,23',
      unidad: 'L/h',
      analito: 'quizartinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Total body clearance of quizartinib in healthy subjects was estimated to be 2.23 L/hour (29%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '76,3',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 53 mg',
      ref: {
        f: 'dailymed-quizartinib',
        sec: '12.3 · Farmacocinética',
        cita: '76.3% of the total radioactivity was recovered in feces (4% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-quizartinib', '29cdbcfe-497d-4e78-bb7b-2d4acafe8e86', 'VANFLYTA (QUIZARTINIB) TABLET, FILM COATED', 'VANFLYTA', '11', '2026-04-22', '2026-11-19'),
    rengPubchem(24889392, 'quizartinib dihydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
