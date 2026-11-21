import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acamprosato',
    nombre: 'Acamprosato',
    clase: 'Modulador glutamatérgico para mantener la abstinencia alcohólica (liberación retardada)',
    sinonimos: [ 'acamprosate calcium', 'Campral' ],
    formula: 'C5H11NO4S',
    masaMolar: 181.21,
    smiles: 'CC(=O)NCCCS(=O)(=O)O',
    inchikey: 'AFCGFAGUEYAMAO-UHFFFAOYSA-N',
    cid: 71158,
    iupac: '3-acetamidopropane-1-sulfonic acid',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'acamprosato-oral',
      producto: 'Acamprosate Calcium · comprimido de liberación retardada',
      titular: 'GLENMARK PHARMACEUTICALS INC., USA',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación retardada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '333 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Sal cálcica de acamprosato',
        ref: { f: 'dailymed-acamprosato', sec: '11 · Descripción', cita: 'Acamprosate calcium', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'crospovidone, unspecified',
        'methacrylic acid and ethyl acrylate copolymer',
        'magnesium stearate',
        'microcrystalline cellulose',
        'propylene glycol',
        'sodium starch glycolate type a potato',
        'talc',
        'magnesium silicate',
        'povidone, unspecified'
      ],
      usos: {
        t: 'Mantenimiento de la abstinencia de alcohol en pacientes con dependencia del alcohol que están abstinentes al iniciar el tratamiento, como parte de un programa con apoyo psicosocial.',
        ref: {
          f: 'dailymed-acamprosato',
          sec: '1 · Indicaciones',
          cita: 'Acamprosate calcium delayed-release tablets are indicated for the maintenance of abstinence from alcohol in patients with alcohol dependence who are abstinent at treatment initiation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acamprosato',
      advertencias: [
        {
          titulo: 'Insuficiencia renal',
          texto: 'En la insuficiencia renal moderada hay que reducir la dosis y en la grave está contraindicado.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-acamprosato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Treatment with acamprosate calcium in patients with moderate renal impairment (creatinine clearance of 30 to 50 mL/min) requires a dose reduction',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión e ideas suicidas',
          texto: 'Hay que vigilar la depresión o las ideas suicidas y pedir que se comuniquen.',
          organos: [],
          ref: {
            f: 'dailymed-acamprosato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for depression or suicidal ideation and prompt patients, families, and caregivers to report such symptoms to the health care provider',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos adversos frecuentes (3 % o más y más que con placebo) incluyen lesión accidental, astenia, dolor, anorexia, diarrea, flatulencia, náuseas, ansiedad, depresión, mareo, sequedad de boca, insomnio y parestesias.',
          '34084-4',
          'Common adverse events that occurred in any acamprosate calcium treatment group at a rate of 3% or greater and greater than the placebo group in controlled clinical trials with spontaneously reported adverse events are: accidental injury, asthenia, pain'
        ],
        [
          'En ensayos controlados de 6 meses o menos, el 8 % de los pacientes con acamprosato dejó el tratamiento por un acontecimiento adverso, frente al 6 % con placebo.',
          '34084-4',
          '8% of acamprosate calcium-treated patients discontinued treatment due to an adverse event, as compared to 6% of patients treated with placebo'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación retardada: 333 mg por comprimido, según la etiqueta; el activo va como sal cálcica de acamprosato. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento de la abstinencia de alcohol en pacientes con dependencia del alcohol que están abstinentes al iniciar el tratamiento, como parte de un programa con apoyo psicosocial.',
    actua: 'Su mecanismo no se conoce del todo; estudios en animales sugieren que interactúa con los sistemas centrales del glutamato y del GABA y restablecería el equilibrio entre excitación e inhibición neuronal alterado por el alcohol.',
    recorrido: 'La biodisponibilidad absoluta tras la toma oral es de alrededor del 11 %; en estado estacionario el pico aparece a las 3-8 horas. La vía principal de excreción es el riñón, como acamprosato sin cambios; la semivida terminal va de unas 20 a 33 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación retardada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido gastrorresistente (con cubierta entérica): libera el principio activo pasado el estómago.',
      sigue: 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
      datos: [
        {
          t: 'Comprimido gastrorresistente (con cubierta entérica): libera el principio activo pasado el estómago.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '3 · Formas y concentraciones',
            cita: 'Acamprosate calcium delayed-release tablets, 333 mg are white to off-white, round, biconvex, enteric-coated tablets',
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
      ocurre: 'La biodisponibilidad absoluta tras la toma oral es de alrededor del 11 %; en estado estacionario el pico aparece a las 3-8 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras la toma oral es de alrededor del 11 %; en estado estacionario el pico aparece a las 3-8 horas.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of acamprosate calcium after oral administration is about 11%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos, la Cmax y el AUC bajan alrededor de un 42 % y un 23 %, sin relevancia clínica.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '12.3 · Farmacocinética',
            cita: 'Coadministration of acamprosate calcium with food decreases bioavailability as measured by C max and AUC, by approximately 42% and 23%, respectively',
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
      ocurre: 'El volumen de distribución tras la vía intravenosa se estima en 72 a 109 litros (alrededor de 1 L/kg) y la unión a las proteínas del plasma es despreciable.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución tras la vía intravenosa se estima en 72 a 109 litros (alrededor de 1 L/kg) y la unión a las proteínas del plasma es despreciable.',
          ref: { f: 'dailymed-acamprosato', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of acamprosate is negligible', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución tras la vía intravenosa de 72 a 109 litros.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution for acamprosate following intravenous administration is estimated to be 72 to 109 liters (approximately 1 L/kg)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Sistemas de glutamato y GABA (hipótesis)',
        efecto: 'Su mecanismo no se conoce del todo; estudios en animales sugieren que interactúa con los sistemas centrales del glutamato y del GABA y restablecería el equilibrio entre excitación e inhibición neuronal alterado por el alcohol.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no se conoce del todo; estudios en animales sugieren que interactúa con los sistemas centrales del glutamato y del GABA y restablecería el equilibrio entre excitación e inhibición neuronal alterado por el alcohol.',
            ref: {
              f: 'dailymed-acamprosato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'acamprosate may interact with glutamate and GABA neurotransmitter systems centrally, and has led to the hypothesis that acamprosate restores this balance',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza.',
          ref: { f: 'dailymed-acamprosato', sec: '12.3 · Farmacocinética', cita: 'Acamprosate does not undergo metabolism', codigo: '43682-4' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de excreción es el riñón, como acamprosato sin cambios; la semivida terminal va de unas 20 a 33 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de excreción es el riñón, como acamprosato sin cambios; la semivida terminal va de unas 20 a 33 horas.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of acamprosate calcium, the major route of excretion is via the kidneys as acamprosate',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras 2 comprimidos de 333 mg, la semivida terminal va de unas 20 a 33 horas.',
          ref: {
            f: 'dailymed-acamprosato',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral dosing of 2 x 333 mg of acamprosate calcium, the terminal half-life ranges from approximately 20 to 33 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '11 (aprox.)',
      unidad: '%',
      analito: 'acamprosato',
      ref: {
        f: 'dailymed-acamprosato',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of acamprosate calcium after oral administration is about 11%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en estado estacionario',
      valor: '3-8',
      unidad: 'h',
      analito: 'acamprosato',
      condiciones: 'estado estacionario',
      ref: { f: 'dailymed-acamprosato', sec: '12.3 · Farmacocinética', cita: 'average 350 ng/mL and occur at 3 to 8 hours post-dose', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras la vía intravenosa',
      valor: '72-109',
      unidad: 'L',
      analito: 'acamprosato',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-acamprosato',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution for acamprosate following intravenous administration is estimated to be 72 to 109 liters',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '20-33 (aprox.)',
      unidad: 'h',
      analito: 'acamprosato',
      ref: {
        f: 'dailymed-acamprosato',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal half-life ranges from approximately 20 to 33 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Descenso de la Cmax con alimentos',
      valor: '42 (aprox.)',
      unidad: '%',
      analito: 'acamprosato',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-acamprosato',
        sec: '12.3 · Farmacocinética',
        cita: 'decreases bioavailability as measured by C max and AUC, by approximately 42% and 23%, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acamprosato', '43e9ef60-2d85-4394-906b-93042fea099a', 'ACAMPROSATE CALCIUM TABLET, DELAYED RELEASE', 'Acamprosate Calcium', '12', '2026-01-26', '2026-11-19'),
    rengPubchem(71158, 'acamprosate calcium', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
