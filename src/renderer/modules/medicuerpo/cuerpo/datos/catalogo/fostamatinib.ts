import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fostamatinib',
    nombre: 'Fostamatinib',
    clase: 'Inhibidor de la tirosina cinasa del bazo (SYK), profármaco',
    sinonimos: [ 'fostamatinib', 'Tavalisse' ],
    formula: 'C23H26FN6O9P',
    masaMolar: 580.5,
    smiles: 'CC1(C(=O)N(C2=C(O1)C=CC(=N2)NC3=NC(=NC=C3F)NC4=CC(=C(C(=C4)OC)OC)OC)COP(=O)(O)O)C',
    inchikey: 'GKDRMWXFWHEQQT-UHFFFAOYSA-N',
    cid: 11671467,
    iupac: '[6-[[5-fluoro-2-(3,4,5-trimethoxyanilino)pyrimidin-4-yl]amino]-2,2-dimethyl-3-oxopyrido[3,2-b][1,4]oxazin-4-yl]methyl dihydrogen phosphate',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'fostamatinib-oral',
      producto: 'TAVALISSE · comprimido',
      titular: 'RIGEL PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 150 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'sodium bicarbonate',
        'sodium starch glycolate type a potato',
        'povidone, unspecified',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de la trombocitopenia en adultos con trombocitopenia inmunitaria crónica con respuesta insuficiente a un tratamiento previo.',
        ref: {
          f: 'dailymed-fostamatinib',
          sec: '1 · Indicaciones',
          cita: 'TAVALISSE is indicated for the treatment of thrombocytopenia in adult patients with chronic immune thrombocytopenia (ITP) who have had an insufficient response to a previous treatment',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fostamatinib',
      advertencias: [
        {
          titulo: 'Hipertensión',
          texto: 'Hay que medir la presión arterial cada 2 semanas hasta estabilizarla y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypertension: Monitor blood pressure every 2 weeks until stable, then monthly',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hay que vigilar las pruebas hepáticas cada mes y, si suben, interrumpir, reducir o suspender.',
          organos: [],
          ref: { f: 'dailymed-fostamatinib', sec: '5 · Advertencias y precauciones', cita: 'Hepatotoxicity: Monitor LFTs monthly', codigo: '43685-7' }
        },
        {
          titulo: 'Diarrea',
          texto: 'Tratar con medidas de soporte; si es grave, interrumpir, reducir o suspender.',
          organos: [],
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Diarrhea: Manage diarrhea with supportive measures',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): diarrea, hipertensión, náuseas, infección respiratoria, mareo, aumento de ALT/AST, erupción, dolor abdominal, fatiga, dolor torácico y neutropenia.',
          '34084-4',
          'most common adverse reactions (≥5% and more than placebo) are diarrhea, hypertension, nausea, respiratory infection, dizziness, ALT/AST increased, rash, abdominal pain, fatigue, chest pain and neutropenia'
        ],
        [
          'Se estudió en dos ensayos aleatorizados y controlados con placebo de diseño idéntico, con 102 pacientes con trombocitopenia inmunitaria crónica.',
          '34084-4',
          'TAVALISSE was studied in two randomized, double-blind, placebo-controlled trials that were identical in design'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg o 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la trombocitopenia en adultos con trombocitopenia inmunitaria crónica con respuesta insuficiente a un tratamiento previo.',
    actua: 'Inhibe la tirosina cinasa del bazo (SYK); su metabolito R406 inhibe la transducción de señales de los receptores Fc y del receptor de linfocitos B y reduce la destrucción de plaquetas mediada por anticuerpos.',
    recorrido: 'Tras la toma, la biodisponibilidad absoluta del R406 fue del 55 % y su mediana de tmax de unas 1,5 horas; puede tomarse con o sin alimentos. Alrededor del 80 % del metabolito R406 se excreta en las heces y el 20 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película (profármaco): se disgrega en el tubo digestivo y en el intestino se convierte en R406.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película (profármaco): se disgrega en el tubo digestivo y en el intestino se convierte en R406.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'TAVALISSE is a prodrug that is converted in the gut to',
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
      ocurre: 'Tras la toma, la biodisponibilidad absoluta del R406 fue del 55 % y su mediana de tmax de unas 1,5 horas; puede tomarse con o sin alimentos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma, la biodisponibilidad absoluta del R406 fue del 55 % y su mediana de tmax de unas 1,5 horas; puede tomarse con o sin alimentos.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration of TAVALISSE, the absolute bioavailability of R406 was 55%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax del R406 es de unas 1,5 horas (1 a 4).',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median t max of R406 is approximately 1.5 hours (range: 1 to 4 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y calorías, el AUC del R406 aumentó un 23 % y la Cmax un 15 %.',
          ref: { f: 'dailymed-fostamatinib', sec: '12.3 · Farmacocinética', cita: 'increased R406 AUC by 23% and C max by 15%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro, el R406 se une en un 98,3 % a las proteínas del plasma humano; su volumen de distribución medio en estado estacionario es de 256 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, el R406 se une en un 98,3 % a las proteínas del plasma humano; su volumen de distribución medio en estado estacionario es de 256 L.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In in vitro studies, the R406 is 98.3% protein bound in human plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio del R406 en estado estacionario de 256 L.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (± SD) volume of distribution at steady-state of R406 is 256 (± 92) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa del bazo (SYK)',
        efecto: 'Inhibe la tirosina cinasa del bazo (SYK); su metabolito R406 inhibe la transducción de señales de los receptores Fc y del receptor de linfocitos B y reduce la destrucción de plaquetas mediada por anticuerpos.',
        lugar: [ 'plaquetas' ],
        datos: [
          {
            t: 'Inhibe la tirosina cinasa del bazo (SYK); su metabolito R406 inhibe la transducción de señales de los receptores Fc y del receptor de linfocitos B y reduce la destrucción de plaquetas mediada por anticuerpos.',
            ref: {
              f: 'dailymed-fostamatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The fostamatinib metabolite R406 reduces antibody-mediated destruction of platelets',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un inhibidor de tirosina cinasa con actividad demostrada frente a la SYK.',
            ref: {
              f: 'dailymed-fostamatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Fostamatinib is a tyrosine kinase inhibitor with demonstrated activity against spleen tyrosine kinase (SYK)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La fosfatasa alcalina del intestino lo convierte en el metabolito activo principal, R406, que es la forma predominante en la circulación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La fosfatasa alcalina del intestino lo convierte en el metabolito activo principal, R406, que es la forma predominante en la circulación.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'TAVALISSE is metabolized in the gut by alkaline phosphatase to the major active metabolite, R406',
            codigo: '43682-4'
          }
        },
        {
          t: 'El R406 es la forma predominante en la circulación, con exposición mínima a sus metabolitos.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'R406 is the predominant moiety in the systemic circulation, and there was minimal exposure to any R406 metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'R406',
          actividad: 'activo',
          nota: 'Metabolito activo principal, responsable de la acción.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12 · Farmacología clínica',
            cita: 'The major metabolite of fostamatinib, R406, inhibits signal transduction of Fc-activating receptors and B-cell receptor',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 80 % del metabolito R406 se excreta en las heces y el 20 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 80 % del metabolito R406 se excreta en las heces y el 20 % en la orina.',
          ref: {
            f: 'dailymed-fostamatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 80% of the R406 metabolite is excreted in feces with approximately 20% excreted in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del R406',
      valor: '55',
      unidad: '%',
      analito: 'R406',
      ref: {
        f: 'dailymed-fostamatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'After oral administration of TAVALISSE, the absolute bioavailability of R406 was 55%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax del R406',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'R406',
      ref: {
        f: 'dailymed-fostamatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median t max of R406 is approximately 1.5 hours (range: 1 to 4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas del R406',
      valor: '98,3',
      unidad: '%',
      analito: 'R406',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-fostamatinib', sec: '12.3 · Farmacocinética', cita: 'the R406 is 98.3% protein bound in human plasma', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución del R406 en estado estacionario',
      valor: '256',
      unidad: 'L',
      analito: 'R406',
      ref: {
        f: 'dailymed-fostamatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (± SD) volume of distribution at steady-state of R406 is 256 (± 92) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'R406 excretado en las heces',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'R406',
      ref: {
        f: 'dailymed-fostamatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 80% of the R406 metabolite is excreted in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fostamatinib', '21149cc3-049b-43e2-b141-c9499160556c', 'TAVALISSE (FOSTAMATINIB) TABLET', 'TAVALISSE', '11', '2025-11-17', '2026-11-19'),
    rengPubchem(11671467, 'fostamatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
