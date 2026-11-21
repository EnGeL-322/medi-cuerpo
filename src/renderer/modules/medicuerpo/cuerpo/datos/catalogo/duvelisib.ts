import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'duvelisib',
    nombre: 'Duvelisib',
    clase: 'Inhibidor de PI3K-δ y PI3K-γ',
    sinonimos: [ 'duvelisib', 'Copiktra' ],
    formula: 'C22H17ClN6O',
    masaMolar: 416.9,
    smiles: 'C[C@@H](C1=CC2=C(C(=CC=C2)Cl)C(=O)N1C3=CC=CC=C3)NC4=NC=NC5=C4NC=N5',
    inchikey: 'SJVQHLPISAIATJ-ZDUSSCGKSA-N',
    cid: 50905713,
    iupac: '8-chloro-2-phenyl-3-[(1S)-1-(7H-purin-6-ylamino)ethyl]isoquinolin-1-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'duvelisib-oral',
      producto: 'COPIKTRA · cápsula',
      titular: 'SECURA BIO, INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 15 mg por cápsula, según la etiqueta',
      excipientes: [ 'silicon dioxide', 'crospovidone', 'magnesium stearate', 'cellulose, microcrystalline' ],
      usos: {
        t: 'Tratamiento de adultos con leucemia linfocítica crónica o linfoma linfocítico de células pequeñas en recaída o refractarios tras al menos dos líneas.',
        ref: {
          f: 'dailymed-duvelisib',
          sec: '1 · Indicaciones',
          cita: 'COPIKTRA is indicated for the treatment of adult patients with relapsed or refractory chronic lymphocytic leukemia (CLL) or small lymphocytic lymphoma (SLL) after at least two prior lines of systemic therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-duvelisib',
      advertencias: [
        {
          titulo: 'Mortalidad relacionada con el tratamiento',
          texto: 'La mortalidad relacionada con el tratamiento fue del 15 %.',
          organos: [],
          ref: {
            f: 'dailymed-duvelisib',
            sec: 'Advertencia destacada',
            cita: 'Treatment-related mortality occurred in 15% of COPIKTRA-treated patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Infecciones graves o mortales',
          texto: 'Aparecieron en el 31 %; vigilar los signos de infección.',
          organos: [],
          ref: {
            f: 'dailymed-duvelisib',
            sec: 'Advertencia destacada',
            cita: 'Fatal and/or serious infections occurred in 31% of COPIKTRA-treated patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Diarrea o colitis',
          texto: 'Apareció en el 18 %; vigilar la diarrea grave o la colitis.',
          organos: [],
          ref: {
            f: 'dailymed-duvelisib',
            sec: 'Advertencia destacada',
            cita: 'Fatal and/or serious diarrhea or colitis occurred in 18% of COPIKTRA-treated patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar la función hepática.',
          organos: [ 'higado' ],
          ref: { f: 'dailymed-duvelisib', sec: '5 · Advertencias y precauciones', cita: 'Hepatotoxicity: Monitor hepatic function', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 20 %): diarrea o colitis, neutropenia, exantema, fatiga, fiebre, tos, náuseas, infección respiratoria alta, neumonía, dolor musculoesquelético y anemia.',
          '34084-4',
          'most common adverse reactions ( > 20%) are diarrhea or colitis, neutropenia, rash, fatigue, pyrexia, cough, nausea, upper respiratory infection, pneumonia, musculoskeletal pain, and anemia'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la mortalidad relacionada con el tratamiento y las infecciones.',
          '34084-4',
          'Treatment-related Mortality [see Warnings and Precautions ( 5.1 )] Infections [see Warnings and Precautions ( 5.2 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 25 mg o 15 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia linfocítica crónica o linfoma linfocítico de células pequeñas en recaída o refractarios tras al menos dos líneas.',
    actua: 'Inhibe la PI3K, sobre todo las isoformas δ y γ de los linfocitos B normales y malignos, y bloquea la señalización del receptor B y la quimiotaxis mediada por CXCL12.',
    recorrido: 'La biodisponibilidad absoluta de 25 mg es del 42 % y la mediana del tmax de 1 a 2 horas; puede tomarse con o sin alimentos. Tras 25 mg marcados, el 79 % de la radiactividad se excretó en las heces (11 % sin cambios) y el 14 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '11 · Descripción',
            cita: 'Capsule shells contain gelatin, titanium dioxide, black ink, and red iron oxide',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta de 25 mg es del 42 % y la mediana del tmax de 1 a 2 horas; puede tomarse con o sin alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta de 25 mg es del 42 % y la mediana del tmax de 1 a 2 horas; puede tomarse con o sin alimentos.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of 25 mg duvelisib after a single oral dose in healthy volunteers was 42%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo la Cmax un 37 % y el AUC un 6 %.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'decreased C max by approximately 37% and decreased the AUC by approximately 6%, relative to fasting conditions',
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
      ocurre: 'Se une en más del 98 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente en estado estacionario es de 28,5 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 98 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente en estado estacionario es de 28,5 L.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of duvelisib is greater than 98% with no concentration dependence',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 28,5 L.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) apparent volume of distribution at steady state (V ss /F) is 28.5 L (62%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'PI3K-δ y PI3K-γ',
        efecto: 'Inhibe la PI3K, sobre todo las isoformas δ y γ de los linfocitos B normales y malignos, y bloquea la señalización del receptor B y la quimiotaxis mediada por CXCL12.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la PI3K, sobre todo las isoformas δ y γ de los linfocitos B normales y malignos, y bloquea la señalización del receptor B y la quimiotaxis mediada por CXCL12.',
            ref: {
              f: 'dailymed-duvelisib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Duvelisib is an inhibitor of PI3K with inhibitory activity predominantly against PI3K-δ and PI3K-γ isoforms expressed in normal and malignant B-cells',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'Duvelisib is primarily metabolized by cytochrome P450 CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 25 mg marcados, el 79 % de la radiactividad se excretó en las heces (11 % sin cambios) y el 14 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 25 mg marcados, el 79 % de la radiactividad se excretó en las heces (11 % sin cambios) y el 14 % en la orina.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: '79% of the radioactivity was excreted in feces (11% unchanged) and 14% was excreted in the urine (< 1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de 4,7 horas.',
          ref: {
            f: 'dailymed-duvelisib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) terminal elimination half-life of duvelisib is 4.7 hours (57%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '42',
      unidad: '%',
      analito: 'duvelisib',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of 25 mg duvelisib after a single oral dose in healthy volunteers was 42%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1-2',
      unidad: 'h',
      analito: 'duvelisib',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentration (T max ) was observed at 1 to 2 hours in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 98',
      unidad: '%',
      analito: 'duvelisib',
      ref: { f: 'dailymed-duvelisib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of duvelisib is greater than 98%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '28,5',
      unidad: 'L',
      analito: 'duvelisib',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution at steady state (V ss /F) is 28.5 L (62%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '4,7',
      unidad: 'h',
      analito: 'duvelisib',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal elimination half-life of duvelisib is 4.7 hours (57%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico aparente',
      valor: '4,2',
      unidad: 'L/h',
      analito: 'duvelisib',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean (CV%) apparent systemic clearance at steady-state is 4.2 L/hr (56%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '79',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 25 mg',
      ref: {
        f: 'dailymed-duvelisib',
        sec: '12.3 · Farmacocinética',
        cita: '79% of the radioactivity was excreted in feces (11% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-duvelisib', 'e3c5ac56-e1f6-473a-bc73-687836534780', 'COPIKTRA (DUVELISIB) CAPSULE', 'COPIKTRA', '4', '2025-12-23', '2026-11-19'),
    rengPubchem(50905713, 'duvelisib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
