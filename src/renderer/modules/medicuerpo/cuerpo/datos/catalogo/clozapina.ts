import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clozapina',
    nombre: 'Clozapina',
    clase: 'Antipsicótico atípico',
    sinonimos: [ 'clozapine', 'Clozaril' ],
    formula: 'C18H19ClN4',
    masaMolar: 326.8,
    smiles: 'CN1CCN(CC1)C2=NC3=C(C=CC(=C3)Cl)NC4=CC=CC=C42',
    inchikey: 'QZUDBNBUXVUHMW-UHFFFAOYSA-N',
    cid: 135398737,
    iupac: '3-chloro-6-(4-methylpiperazin-1-yl)-11H-benzo[b][1,4]benzodiazepine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'clozapina-oral',
      producto: 'Clozaril · comprimido',
      titular: 'HLS THERAPEUTICS (USA), INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [ 'silicon dioxide', 'lactose, unspecified form', 'magnesium stearate', 'povidone, unspecified', 'starch, corn', 'talc' ],
      usos: {
        t: 'Esquizofrenia grave que no responde a otros antipsicóticos y reducción del riesgo de conducta suicida recurrente en la esquizofrenia o el trastorno esquizoafectivo.',
        ref: {
          f: 'dailymed-clozapina',
          sec: '1 · Indicaciones',
          cita: 'Treatment of severely ill patients with schizophrenia who fail to respond adequately to standard antipsychotic treatment',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-clozapina',
      advertencias: [
        {
          titulo: 'Neutropenia grave',
          texto: 'Ha causado neutropenia grave, con riesgo de infecciones graves y mortales.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: { f: 'dailymed-clozapina', sec: 'Advertencia destacada', cita: 'CLOZARIL has caused severe neutropenia', codigo: '34066-1' }
        },
        {
          titulo: 'Hipomotilidad intestinal',
          texto: 'Se han producido reacciones digestivas graves; si hay estreñimiento, conviene vigilarlo y tratarlo pronto.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-clozapina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe gastrointestinal adverse reactions have occurred with the use of CLOZARIL',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 %): sedación, mareo, dolor de cabeza y temblor; taquicardia, hipotensión y síncope; exceso de saliva, sudor, boca seca y alteraciones visuales; estreñimiento, náuseas y fiebre.',
          '34084-4',
          'CNS reactions (sedation, dizziness/vertigo, headache, and tremor)'
        ],
        [
          'Reacciones cardiovasculares: taquicardia, hipotensión y síncope.',
          '34084-4',
          'cardiovascular reactions (tachycardia, hypotension, and syncope)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 25 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia grave que no responde a otros antipsicóticos y reducción del riesgo de conducta suicida recurrente en la esquizofrenia o el trastorno esquizoafectivo.',
    actua: 'Su mecanismo se desconoce; se ha propuesto que actúa bloqueando los receptores de dopamina D2 y de serotonina 5-HT2A, y también bloquea receptores adrenérgicos, colinérgicos e histaminérgicos.',
    recorrido: 'Con 100 mg dos veces al día, el pico en estado estacionario (319 ng/mL de media) llega hacia las 2,5 horas; la comida no cambia su biodisponibilidad. Alrededor del 50 % de la dosis sale por la orina y el 30 % por las heces, como metabolitos. Su semivida media es de 8 horas tras una dosis única y de 12 horas en estado estacionario.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado, de igual biodisponibilidad que una solución de clozapina.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado, de igual biodisponibilidad que una solución de clozapina.',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'CLOZARIL tablets (25 mg and 100 mg) are equally bioavailable relative to a CLOZARIL solution',
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
      ocurre: 'Con 100 mg dos veces al día, el pico en estado estacionario (319 ng/mL de media) llega hacia las 2,5 horas; la comida no cambia su biodisponibilidad.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con 100 mg dos veces al día, el pico en estado estacionario (319 ng/mL de media) llega hacia las 2,5 horas; la comida no cambia su biodisponibilidad.',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'occurring at the average of 2.5 hours (range: 1 to 6 hours) after dosing',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 97 % se une a proteínas del suero.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 97 % se une a proteínas del suero.',
          ref: { f: 'dailymed-clozapina', sec: '12.3 · Farmacocinética', cita: 'Clozapine is approximately 97% bound to serum proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores D2 y 5-HT2A (entre otros)',
        efecto: 'Su mecanismo se desconoce; se ha propuesto que actúa bloqueando los receptores de dopamina D2 y de serotonina 5-HT2A, y también bloquea receptores adrenérgicos, colinérgicos e histaminérgicos.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo se desconoce; se ha propuesto que actúa bloqueando los receptores de dopamina D2 y de serotonina 5-HT2A, y también bloquea receptores adrenérgicos, colinérgicos e histaminérgicos.',
            ref: {
              f: 'dailymed-clozapina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'it has been proposed that the therapeutic efficacy of clozapine in schizophrenia is mediated through antagonism of the dopamine type 2 (D 2 ) and the serotonin type 2A (5-HT 2A ) receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza casi por completo antes de eliminarse, por varias enzimas CYP (sobre todo CYP1A2, CYP2D6 y CYP3A4). La norclozapina tiene una actividad limitada; los derivados hidroxilados y N-óxido son inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza casi por completo antes de eliminarse, por varias enzimas CYP (sobre todo CYP1A2, CYP2D6 y CYP3A4). La norclozapina tiene una actividad limitada; los derivados hidroxilados y N-óxido son inactivos.',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Clozapine is almost completely metabolized prior to excretion',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Norclozapina (desmetilclozapina)',
          actividad: 'activo',
          nota: 'Actividad limitada.',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pharmacological testing has shown the desmethyl metabolite (norclozapine) to have only limited activity',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Derivados hidroxilados y N-óxido',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'while the hydroxylated and N- oxide derivatives were inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 50 % de la dosis sale por la orina y el 30 % por las heces, como metabolitos. Su semivida media es de 8 horas tras una dosis única y de 12 horas en estado estacionario.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 50 % de la dosis sale por la orina y el 30 % por las heces, como metabolitos. Su semivida media es de 8 horas tras una dosis única y de 12 horas en estado estacionario.',
          ref: {
            f: 'dailymed-clozapina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 50% of the administered dose is excreted in the urine and 30% in the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Pico plasmático medio en estado estacionario',
      valor: '319 (102-771)',
      unidad: 'ng/mL',
      analito: 'clozapina',
      condiciones: '100 mg dos veces al día',
      ref: {
        f: 'dailymed-clozapina',
        sec: '12.3 · Farmacocinética',
        cita: 'the average steady-state peak plasma concentration was 319 ng/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2,5 (1-6)',
      unidad: 'h',
      analito: 'clozapina',
      condiciones: '100 mg dos veces al día',
      ref: {
        f: 'dailymed-clozapina',
        sec: '12.3 · Farmacocinética',
        cita: 'occurring at the average of 2.5 hours (range: 1 to 6 hours) after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '97 (aprox.)',
      unidad: '%',
      analito: 'clozapina',
      ref: { f: 'dailymed-clozapina', sec: '12.3 · Farmacocinética', cita: 'Clozapine is approximately 97% bound to serum proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '8 (4-12)',
      unidad: 'h',
      analito: 'clozapina',
      condiciones: 'dosis única de 75 mg',
      ref: {
        f: 'dailymed-clozapina',
        sec: '12.3 · Farmacocinética',
        cita: 'half-life of clozapine after a single 75 mg dose was 8 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '12 (4-66)',
      unidad: 'h',
      analito: 'clozapina',
      condiciones: 'estado estacionario con 100 mg dos veces al día',
      ref: {
        f: 'dailymed-clozapina',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean elimination half-life of 12 hours (range: 4 to 66 hours)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-clozapina', '90876802-0e3a-44c9-9ff7-1754dfbe736a', 'CLOZARIL (CLOZAPINE) TABLET', 'Clozaril', '21', '2025-06-30', '2026-11-12'),
    rengPubchem(135398737, 'clozapine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
