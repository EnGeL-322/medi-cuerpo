import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'asenapina',
    nombre: 'Asenapina',
    clase: 'Antipsicótico atípico (antagonista D2 y 5-HT2A), comprimido sublingual',
    sinonimos: [ 'asenapine', 'Saphris' ],
    formula: 'C17H16ClNO',
    masaMolar: 285.8,
    smiles: 'CN1C[C@H]2[C@H](C1)C3=C(C=CC(=C3)Cl)OC4=CC=CC=C24',
    inchikey: 'VSWBSWWIRNCQIJ-HUUCEWRRSA-N',
    cid: 163091,
    iupac: '(2S,6S)-9-chloro-4-methyl-13-oxa-4-azatetracyclo[12.4.0.02,6.07,12]octadeca-1(18),7(12),8,10,14,16-hexaene',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'asenapina-oral',
      producto: 'SAPHRIS · comprimido',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Maleato de asenapina', ref: { f: 'dailymed-asenapina', sec: '11 · Descripción', cita: 'asenapine maleate', codigo: '34089-3' } },
      excipientes: [ 'gelatin, unspecified', 'mannitol', 'sucralose' ],
      usos: {
        t: 'Esquizofrenia en adultos y trastorno bipolar I: episodios maníacos o mixtos en monoterapia (adultos y de 10 a 17 años), complemento de litio o valproato y mantenimiento en adultos.',
        ref: {
          f: 'dailymed-asenapina',
          sec: '1 · Indicaciones',
          cita: 'Schizophrenia in adults [see Clinical Studies ( 14.1 )] Bipolar I disorder [see Clinical Studies ( 14.2 )] • Acute monotherapy of manic or mixed episodes, in adults and pediatric patients 10 to 17 years of age',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-asenapina',
      advertencias: [
        {
          titulo: 'Mayor mortalidad en ancianos con psicosis asociada a demencia',
          texto: 'Los ancianos con psicosis asociada a demencia tratados con antipsicóticos tienen mayor riesgo de muerte; no está aprobada en esta situación.',
          organos: [],
          ref: {
            f: 'dailymed-asenapina',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Aumenta el intervalo QT; evitarla con otros fármacos que lo alarguen y con factores de riesgo de QT prolongado.',
          organos: [],
          ref: {
            f: 'dailymed-asenapina',
            sec: '5 · Advertencias y precauciones',
            cita: 'QT Prolongation: Increases in QT interval; avoid use with drugs that also increase the QT interval and in patients with risk factors for prolonged QT interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Hay que suspenderla de inmediato y vigilar de cerca.',
          organos: [],
          ref: {
            f: 'dailymed-asenapina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neuroleptic Malignant Syndrome: Manage with immediate discontinuation and close monitoring',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones descritas en otras secciones figuran el síndrome neuroléptico maligno, la discinesia tardía, los cambios metabólicos y las reacciones de hipersensibilidad.',
          '34084-4',
          'Neuroleptic Malignant Syndrome [see Warnings and Precautions ( 5.3 )] Tardive Dyskinesia [see Warnings and Precautions ( 5.4 )] Metabolic Changes'
        ],
        [
          'También figuran la hipotensión ortostática y el síncope, las caídas, la leucopenia y la prolongación del intervalo QT.',
          '34084-4',
          'Orthostatic Hypotension, Syncope, and other Hemodynamic Effects [see Warnings and Precautions ( 5.7 )] Falls'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'sublingual' ],
      formaNormalizada: 'comprimido-sublingual'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como maleato de asenapina. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia en adultos y trastorno bipolar I: episodios maníacos o mixtos en monoterapia (adultos y de 10 a 17 años), complemento de litio o valproato y mantenimiento en adultos.',
    actua: 'Su mecanismo se desconoce; se ha propuesto que su eficacia en la esquizofrenia se debe a la combinación de antagonismo en los receptores D2 y 5-HT2A.',
    recorrido: 'Tras la administración sublingual se absorbe con rapidez, con el pico entre 0,5 y 1,5 horas; la biodisponibilidad absoluta sublingual con 5 mg es del 35 %. Tras una dosis única marcada se recuperó alrededor del 90 % de la dosis: alrededor del 50 % en la orina y el 40 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      llega: 'El comprimido se coloca bajo la lengua, en la mucosa de la boca.',
      ocurre: 'Comprimido sublingual: se disuelve bajo la lengua y no debe tragarse; tragado, su biodisponibilidad es muy baja.',
      sigue: 'El principio activo se absorbe por la mucosa de la boca y llega a la sangre.',
      datos: [
        {
          t: 'Comprimido sublingual: se disuelve bajo la lengua y no debe tragarse; tragado, su biodisponibilidad es muy baja.',
          ref: { f: 'dailymed-asenapina', sec: '3 · Formas y concentraciones', cita: 'are round, white to off-white sublingual tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'boca' ],
      organosGenerales: [],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración sublingual se absorbe con rapidez, con el pico entre 0,5 y 1,5 horas; la biodisponibilidad absoluta sublingual con 5 mg es del 35 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración sublingual se absorbe con rapidez, con el pico entre 0,5 y 1,5 horas; la biodisponibilidad absoluta sublingual con 5 mg es del 35 %.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following sublingual administration, asenapine is rapidly absorbed with peak plasma concentrations occurring within 0.5 to 1.5 hours. The absolute bioavailability of sublingual asenapine at 5 mg is 35%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tragada, la biodisponibilidad absoluta es baja (menos del 2 % con un comprimido oral).',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of asenapine when swallowed is low (<2% with an oral tablet formulation)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Beber agua a los 2 o 5 minutos de la toma redujo la exposición; por eso hay que evitar comer y beber durante 10 minutos.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'The intake of water several (2 or 5) minutes after asenapine administration resulted in decreased asenapine exposure',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye con rapidez y tiene un volumen de distribución grande (unos 20-25 L/kg), con amplia distribución extravascular; se une en un 95 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye con rapidez y tiene un volumen de distribución grande (unos 20-25 L/kg), con amplia distribución extravascular; se une en un 95 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Asenapine is highly bound (95%) to plasma proteins, including albumin and α 1 -acid glycoprotein',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de unos 20-25 L/kg, lo que indica una amplia distribución extravascular.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Asenapine is rapidly distributed and has a large volume of distribution (approximately 20 - 25 L/kg), indicating extensive extravascular distribution',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores D2 y 5-HT2A (antagonista)',
        efecto: 'Su mecanismo se desconoce; se ha propuesto que su eficacia en la esquizofrenia se debe a la combinación de antagonismo en los receptores D2 y 5-HT2A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce; se ha propuesto que su eficacia en la esquizofrenia se debe a la combinación de antagonismo en los receptores D2 y 5-HT2A.',
            ref: {
              f: 'dailymed-asenapina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It has been suggested that the efficacy of asenapine in schizophrenia could be mediated through a combination of antagonist activity at D 2 and 5-HT 2A receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las vías principales son la glucuronidación directa por la UGT1A4 y el metabolismo oxidativo por isoenzimas del citocromo P450 (sobre todo CYP1A2); su aclaramiento hepático depende sobre todo del flujo sanguíneo del hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las vías principales son la glucuronidación directa por la UGT1A4 y el metabolismo oxidativo por isoenzimas del citocromo P450 (sobre todo CYP1A2); su aclaramiento hepático depende sobre todo del flujo sanguíneo del hígado.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'In this circumstance, hepatic clearance is influenced primarily by changes in liver blood flow rather than by changes in the intrinsic clearance',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las vías metabólicas principales son la glucuronidación directa por la UGT1A4 y la oxidación por isoenzimas del citocromo P450, sobre todo CYP1A2.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Direct glucuronidation by UGT1A4 and oxidative metabolism by cytochrome P450 isoenzymes (predominantly CYP1A2) are the primary metabolic pathways for asenapine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N+-glucurónido de asenapina',
          actividad: 'desconocida',
          nota: 'Especie circulante predominante; la actividad del fármaco se debe sobre todo a la asenapina original.',
          ref: { f: 'dailymed-asenapina', sec: '12.3 · Farmacocinética', cita: 'The predominant species was asenapine N + -glucuronide', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única marcada se recuperó alrededor del 90 % de la dosis: alrededor del 50 % en la orina y el 40 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única marcada se recuperó alrededor del 90 % de la dosis: alrededor del 50 % en la orina y el 40 % en las heces.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 50% was recovered in urine, and 40% recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una fase de distribución inicial más rápida, la semivida terminal es de unas 24 horas.',
          ref: {
            f: 'dailymed-asenapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following an initial more rapid distribution phase, the terminal half-life of asenapine is approximately 24 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (sublingual)',
      valor: '0,5-1,5',
      unidad: 'h',
      analito: 'asenapina',
      condiciones: 'sublingual',
      ref: {
        f: 'dailymed-asenapina',
        sec: '12.3 · Farmacocinética',
        cita: 'asenapine is rapidly absorbed with peak plasma concentrations occurring within 0.5 to 1.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta sublingual (5 mg)',
      valor: '35',
      unidad: '%',
      analito: 'asenapina',
      condiciones: 'sublingual, 5 mg',
      ref: {
        f: 'dailymed-asenapina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of sublingual asenapine at 5 mg is 35%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta si se traga',
      valor: '< 2',
      unidad: '%',
      analito: 'asenapina',
      condiciones: 'tragada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-asenapina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of asenapine when swallowed is low (<2% with an oral tablet formulation)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '20-25 (aprox.)',
      unidad: 'L/kg',
      analito: 'asenapina',
      ref: {
        f: 'dailymed-asenapina',
        sec: '12.3 · Farmacocinética',
        cita: 'has a large volume of distribution (approximately 20 - 25 L/kg)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95',
      unidad: '%',
      analito: 'asenapina',
      ref: { f: 'dailymed-asenapina', sec: '12.3 · Farmacocinética', cita: 'Asenapine is highly bound (95%) to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '24 (aprox.)',
      unidad: 'h',
      analito: 'asenapina',
      ref: {
        f: 'dailymed-asenapina',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal half-life of asenapine is approximately 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-asenapina', '5429f134-839f-4ffc-9944-55f51238def8', 'SAPHRIS (ASENAPINE MALEATE) TABLET', 'SAPHRIS', '22', '2025-12-12', '2026-11-19'),
    rengPubchem(163091, 'asenapine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
