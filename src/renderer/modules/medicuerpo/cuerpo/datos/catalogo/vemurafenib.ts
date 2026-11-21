import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vemurafenib',
    nombre: 'Vemurafenib',
    clase: 'Inhibidor de formas mutadas de la cinasa BRAF (V600E)',
    sinonimos: [ 'vemurafenib', 'Zelboraf' ],
    formula: 'C23H18ClF2N3O3S',
    masaMolar: 489.9,
    smiles: 'CCCS(=O)(=O)NC1=C(C(=C(C=C1)F)C(=O)C2=CNC3=C2C=C(C=N3)C4=CC=C(C=C4)Cl)F',
    inchikey: 'GPXBXXGIAQBQNI-UHFFFAOYSA-N',
    cid: 42611257,
    iupac: 'N-[3-[5-(4-chlorophenyl)-1H-pyrrolo[2,3-b]pyridine-3-carbonyl]-2,4-difluorophenyl]propane-1-sulfonamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vemurafenib-oral',
      producto: 'ZELBORAF · comprimido recubierto con película',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '240 mg por comprimido, según la etiqueta',
      excipientes: [
        'hypromellose acetate succinate 16070722 (3 mpa.s)',
        'croscarmellose sodium',
        'hydroxypropyl cellulose (90000 wamw)',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento del melanoma con mutación BRAF V600E y de la enfermedad de Erdheim-Chester con mutación BRAF V600, según la etiqueta.',
        ref: {
          f: 'dailymed-vemurafenib',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of patients with unresectable or metastatic melanoma with BRAF V600E mutation as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vemurafenib',
      advertencias: [
        {
          titulo: 'Reacciones dermatológicas graves',
          texto: 'Suspenderlo ante reacciones dermatológicas graves, como el síndrome de Stevens-Johnson o la necrólisis epidérmica tóxica.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Dermatologic Reactions, including Stevens-Johnson Syndrome and Toxic Epidermal Necrolysis: Discontinue ZELBORAF for severe dermatologic reactions',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Interrumpirlo si el QTc llega a 500 ms o más.',
          organos: [],
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Withhold ZELBORAF for QTc of 500 ms or greater',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones oftalmológicas graves',
          texto: 'Vigilar los signos y síntomas de uveítis.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious Ophthalmologic Reactions: Monitor for signs and symptoms of uveitis',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el melanoma, las más frecuentes (30 % o más): artralgia, exantema, alopecia, fatiga, fotosensibilidad, náuseas, prurito y papiloma cutáneo.',
          '34084-4',
          'Most common adverse reactions (≥ 30%) are arthralgia, rash, alopecia, fatigue, photosensitivity reaction, nausea, pruritus, and skin papilloma'
        ],
        [
          'En la enfermedad de Erdheim-Chester, las más frecuentes (más del 50 %): artralgia, exantema maculopapular, alopecia, fatiga, prolongación del QT y papiloma cutáneo.',
          '34084-4',
          'Erdheim-Chester Disease: Most common adverse reactions (>50%) are arthralgia, rash maculo-papular, alopecia, fatigue, electrocardiogram QT interval prolonged, and skin papilloma'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 240 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del melanoma con mutación BRAF V600E y de la enfermedad de Erdheim-Chester con mutación BRAF V600, según la etiqueta.',
    actua: 'Inhibe algunas formas mutadas de la cinasa BRAF, como BRAF V600E, que activan de forma constante la proliferación celular; in vitro también inhibe otras cinasas.',
    recorrido: 'La biodisponibilidad media en estado estacionario es del 64 % y la mediana del tiempo hasta el pico, de 3 horas. Tras 960 mg marcados, alrededor del 94 % de la dosis se recuperó en las heces y el 1 % en la orina.'
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
          ref: { f: 'dailymed-vemurafenib', sec: '3 · Formas y concentraciones', cita: 'Tablet: 240 mg', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad media en estado estacionario es del 64 % y la mediana del tiempo hasta el pico, de 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad media en estado estacionario es del 64 % y la mediana del tiempo hasta el pico, de 3 horas.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean bioavailability of vemurafenib at steady state was 64% (56% CV)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 3 horas con dosis repetidas.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to reach maximum plasma vemurafenib concentration (T max ) was 3 hours following multiple doses',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC aumentó unas 5 veces y la Cmax 2,5 veces.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'a single dose of vemurafenib administered with a high-fat meal increased AUC by approximately 5-fold, increased C max by 2.5-fold',
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
      ocurre: 'Se une en más del 99 % a la albúmina y a la alfa-1 glucoproteína ácida del plasma; el volumen de distribución aparente se estima en 106 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a la albúmina y a la alfa-1 glucoproteína ácida del plasma; el volumen de distribución aparente se estima en 106 L.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Vemurafenib is highly bound (> 99%) to human albumin and alpha-1 acid glycoprotein plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente poblacional estimado de 106 L.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The population apparent volume of distribution is estimated to be 106 L (with 66% inter-patient variability)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'BRAF V600E',
        efecto: 'Inhibe algunas formas mutadas de la cinasa BRAF, como BRAF V600E, que activan de forma constante la proliferación celular; in vitro también inhibe otras cinasas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe algunas formas mutadas de la cinasa BRAF, como BRAF V600E, que activan de forma constante la proliferación celular; in vitro también inhibe otras cinasas.',
            ref: {
              f: 'dailymed-vemurafenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vemurafenib is a low molecular weight, orally available inhibitor of some mutated forms of BRAF serine- threonine kinase, including BRAF V600E',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras una dosis marcada, el vemurafenib inalterado supuso el 95 % de los componentes del plasma y sus metabolitos el 5 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras una dosis marcada, el vemurafenib inalterado supuso el 95 % de los componentes del plasma y sus metabolitos el 5 %.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'vemurafenib and its metabolites represented 95% and 5% of the components in plasma over 48 hours, respectively',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 960 mg marcados, alrededor del 94 % de la dosis se recuperó en las heces y el 1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 960 mg marcados, alrededor del 94 % de la dosis se recuperó en las heces y el 1 % en la orina.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 94% of the radioactive dose was recovered in feces and approximately 1% was recovered in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana de la semivida de eliminación es de 57 horas.',
          ref: {
            f: 'dailymed-vemurafenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median elimination half-life estimate for vemurafenib is 57 hours (the 5th and 95th percentile range is 30 to 120 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad media en estado estacionario',
      valor: '64',
      unidad: '%',
      analito: 'vemurafenib',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean bioavailability of vemurafenib at steady state was 64% (56% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '3',
      unidad: 'h',
      analito: 'vemurafenib',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to reach maximum plasma vemurafenib concentration (T max ) was 3 hours following multiple doses',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'vemurafenib',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'Vemurafenib is highly bound (> 99%) to human albumin and alpha-1 acid glycoprotein plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente poblacional',
      valor: '106',
      unidad: 'L',
      analito: 'vemurafenib',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The population apparent volume of distribution is estimated to be 106 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida de eliminación',
      valor: '57',
      unidad: 'h',
      analito: 'vemurafenib',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median elimination half-life estimate for vemurafenib is 57 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '94 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada de 960 mg',
      ref: {
        f: 'dailymed-vemurafenib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 94% of the radioactive dose was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vemurafenib', '38eea320-7e0c-485a-bc30-98c3c45e2763', 'ZELBORAF (VEMURAFENIB) TABLET, FILM COATED', 'ZELBORAF', '29', '2026-09-04', '2026-11-19'),
    rengPubchem(42611257, 'vemurafenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
