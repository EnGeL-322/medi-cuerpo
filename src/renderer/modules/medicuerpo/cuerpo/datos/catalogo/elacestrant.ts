import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'elacestrant',
    nombre: 'Elacestrant',
    clase: 'Antagonista y degradador del receptor de estrógenos alfa',
    sinonimos: [ 'elacestrant dihydrochloride', 'Orserdu' ],
    formula: 'C30H38N2O2',
    masaMolar: 458.6,
    smiles: 'CCNCCC1=CC=C(C=C1)CN(CC)C2=C(C=CC(=C2)OC)[C@@H]3CCC4=C(C3)C=CC(=C4)O',
    inchikey: 'SIFNOOUKXBRGGB-AREMUKBSSA-N',
    cid: 23642301,
    iupac: '(6R)-6-[2-[ethyl-[[4-[2-(ethylamino)ethyl]phenyl]methyl]amino]-4-methoxyphenyl]-5,6,7,8-tetrahydronaphthalen-2-ol',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'elacestrant-oral',
      producto: 'ORSERDU · comprimido recubierto con película',
      titular: 'STEMLINE THERAPEUTICS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '86 mg o 345 mg por comprimido, según la etiqueta',
      excipientes: [
        'Dióxido de silicio coloidal',
        'Crospovidona',
        'Estearato de magnesio (no bovino)',
        'Celulosa microcristalina',
        'Celulosa microcristalina silicificada',
        'Cubierta Opadry II azul: alcohol polivinílico, dióxido de titanio, polietilenglicol, laca azul FD&C n.º 1 y talco'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama avanzado o metastásico RE+, HER2− con mutación de ESR1 en mujeres posmenopáusicas o varones adultos tras hormonoterapia.',
        ref: {
          f: 'dailymed-elacestrant',
          sec: '1 · Indicaciones',
          cita: 'ORSERDU is indicated for the treatment of postmenopausal women or adult men with estrogen receptor (ER)-positive, human epidermal growth factor receptor 2 (HER2)‑negative, ESR1 -mutated advanced or metastatic breast cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-elacestrant',
      advertencias: [
        {
          titulo: 'Dislipidemia',
          texto: 'Puede causar hipercolesterolemia e hipertrigliceridemia; vigilar el perfil lipídico.',
          organos: [],
          ref: {
            f: 'dailymed-elacestrant',
            sec: '5 · Advertencias y precauciones',
            cita: 'ORSERDU may cause hypercholesterolemia and hypertriglyceridemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; usar anticoncepción eficaz.',
          organos: [],
          ref: {
            f: 'dailymed-elacestrant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Embryo-Fetal Toxicity : ORSERDU can cause fetal harm',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 10 %, con laboratorio): dolor musculoesquelético, náuseas, aumento de colesterol, AST y triglicéridos, fatiga, descenso de hemoglobina, vómitos y aumento de ALT, entre otras.',
          '34084-4',
          'most common (>10%) adverse reactions, including laboratory abnormalities, of ORSERDU were musculoskeletal pain, nausea, increased cholesterol, increased AST, increased triglycerides, fatigue'
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
    contiene: 'Comprimido recubierto con película: 86 mg o 345 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama avanzado o metastásico RE+, HER2− con mutación de ESR1 en mujeres posmenopáusicas o varones adultos tras hormonoterapia.',
    actua: 'Antagonista del receptor de estrógenos que se une al REα; en células de cáncer de mama RE+ inhibe la proliferación inducida por estradiol a concentraciones que degradan el REα por la vía del proteasoma.',
    recorrido: 'El tmax está entre 1 y 4 horas y la biodisponibilidad oral es de alrededor del 10 %; una comida grasa aumenta la Cmax un 42 % y el AUC un 22 %. Tras 345 mg marcados, el 82 % se recuperó en las heces (34 % sin cambios) y el 7,5 % en la orina.'
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
          ref: { f: 'dailymed-elacestrant', sec: '11 · Descripción', cita: 'The tablets also contain Opadry II Blue', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El tmax está entre 1 y 4 horas y la biodisponibilidad oral es de alrededor del 10 %; una comida grasa aumenta la Cmax un 42 % y el AUC un 22 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax está entre 1 y 4 horas y la biodisponibilidad oral es de alrededor del 10 %; una comida grasa aumenta la Cmax un 42 % y el AUC un 22 %.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to achieve peak plasma concentration (t max ) ranges from 1 to 4 hours. The elacestrant oral bioavailability is approximately 10%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax subió un 42 % y el AUC un 22 %.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'increased Cmax by 42% and AUC by 22% compared to fasted administration',
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
      ocurre: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente estimado es de 5 800 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente estimado es de 5 800 L.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of elacestrant is >99% and independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 5 800 L.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent volume of distribution is 5,800 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de estrógenos alfa (REα)',
        efecto: 'Antagonista del receptor de estrógenos que se une al REα; en células de cáncer de mama RE+ inhibe la proliferación inducida por estradiol a concentraciones que degradan el REα por la vía del proteasoma.',
        lugar: [],
        datos: [
          {
            t: 'Antagonista del receptor de estrógenos que se une al REα; en células de cáncer de mama RE+ inhibe la proliferación inducida por estradiol a concentraciones que degradan el REα por la vía del proteasoma.',
            ref: {
              f: 'dailymed-elacestrant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Elacestrant is an estrogen receptor antagonist that binds to estrogen receptor-alpha (ERα)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2A6 y la CYP2C9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2A6 y la CYP2C9.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'Elacestrant is primarily metabolized by CYP3A4 and to a lesser extent by CYP2A6 and CYP2C9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 345 mg marcados, el 82 % se recuperó en las heces (34 % sin cambios) y el 7,5 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 345 mg marcados, el 82 % se recuperó en las heces (34 % sin cambios) y el 7,5 % en la orina.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: '82% was recovered in feces (34% unchanged) and 7.5% was recovered in urine (< 1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 30 a 50 horas; el aclaramiento renal es de 0,14 L/h o menos.',
          ref: {
            f: 'dailymed-elacestrant',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of elacestrant is 30 to 50 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '10 (aprox.)',
      unidad: '%',
      analito: 'elacestrant',
      ref: {
        f: 'dailymed-elacestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'The elacestrant oral bioavailability is approximately 10%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-4',
      unidad: 'h',
      analito: 'elacestrant',
      ref: {
        f: 'dailymed-elacestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to achieve peak plasma concentration (t max ) ranges from 1 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'elacestrant',
      ref: { f: 'dailymed-elacestrant', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of elacestrant is >99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente estimado',
      valor: '5800',
      unidad: 'L',
      analito: 'elacestrant',
      ref: { f: 'dailymed-elacestrant', sec: '12.3 · Farmacocinética', cita: 'The estimated apparent volume of distribution is 5,800 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '30-50',
      unidad: 'h',
      analito: 'elacestrant',
      ref: {
        f: 'dailymed-elacestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of elacestrant is 30 to 50 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento medio estimado',
      valor: '186',
      unidad: 'L/h',
      analito: 'elacestrant',
      ref: {
        f: 'dailymed-elacestrant',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated mean (% CV) clearance of elacestrant is 186 L/hr (44%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '82',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 345 mg',
      ref: { f: 'dailymed-elacestrant', sec: '12.3 · Farmacocinética', cita: '82% was recovered in feces (34% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-elacestrant', 'aa66ae5c-2bd2-4444-8178-b55651e054ef', 'ORSERDU (ELACESTRANT) TABLET, FILM COATED', 'ORSERDU', '9', '2026-07-13', '2026-11-19'),
    rengPubchem(23642301, 'elacestrant dihydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
