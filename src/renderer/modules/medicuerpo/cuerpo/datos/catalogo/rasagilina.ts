import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rasagilina',
    nombre: 'Rasagilina',
    clase: 'Inhibidor irreversible de la MAO-B (antiparkinsoniano)',
    sinonimos: [ 'rasagiline', 'Azilect' ],
    formula: 'C12H13N',
    masaMolar: 171.24,
    smiles: 'C#CCN[C@@H]1CCC2=CC=CC=C12',
    inchikey: 'RUOKEQAAGRXIBM-GFCCVEGCSA-N',
    cid: 3052776,
    iupac: '(1R)-N-prop-2-ynyl-2,3-dihydro-1H-inden-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'rasagilina-oral',
      producto: 'Azilect · comprimido',
      titular: 'TEVA NEUROSCIENCE, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1 mg o 0.5 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Mesilato de rasagilina', ref: { f: 'dailymed-rasagilina', sec: '11 · Descripción', cita: 'rasagiline mesylate', codigo: '34089-3' } },
      excipientes: [ 'mannitol', 'starch, corn', 'silicon dioxide', 'stearic acid', 'talc' ],
      usos: {
        t: 'Tratamiento de la enfermedad de Parkinson.',
        ref: { f: 'dailymed-rasagilina', sec: '1 · Indicaciones', cita: 'indicated for the treatment of Parkinson’s disease (PD)', codigo: '34067-9' }
      },
      fuente: 'dailymed-rasagilina',
      advertencias: [
        {
          titulo: 'Hipertensión',
          texto: 'Puede empeorar la hipertensión durante el tratamiento.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-rasagilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Exacerbation of hypertension may occur during treatment with AZILECT',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'Se ha descrito síndrome serotoninérgico al usarla con antidepresivos.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-rasagilina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serotonin syndrome has been reported with concomitant use of an antidepressant',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia (≥ 3 % más que con placebo): síndrome gripal, dolor articular, depresión y dispepsia.',
          '34084-4',
          'AZILECT monotherapy: flu syndrome, arthralgia, depression, dyspepsia'
        ],
        [
          'Junto con levodopa: discinesias, lesiones accidentales, pérdida de peso, hipotensión postural y vómitos, entre otras.',
          '34084-4',
          'AZILECT used as adjunct to levodopa: dyskinesia, accidental injury, weight loss, postural hypotension, vomiting'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 1 mg o 0.5 mg por comprimido, según la etiqueta; el activo va como mesilato de rasagilina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la enfermedad de Parkinson.',
    actua: 'Inhibe de forma selectiva e irreversible la monoaminooxidasa B (MAO-B), enzima que degrada la dopamina en el cerebro.',
    recorrido: 'Se absorbe rápido y el pico llega hacia la hora; su biodisponibilidad absoluta ronda el 36 %. Con una comida rica en grasa, la Cmax baja un 60 % y el AUC un 20 %. Sale sobre todo por la orina (62 %) y en menor medida por las heces (7 %) en 7 días; menos del 1 % sin cambios. Su semivida en estado estacionario es de 3 horas, sin relación con su efecto, que es irreversible.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo y plano.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo y plano.',
          ref: { f: 'dailymed-rasagilina', sec: '3 · Formas y concentraciones', cita: 'round, flat, beveled tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y el pico llega hacia la hora; su biodisponibilidad absoluta ronda el 36 %. Con una comida rica en grasa, la Cmax baja un 60 % y el AUC un 20 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y el pico llega hacia la hora; su biodisponibilidad absoluta ronda el 36 %. Con una comida rica en grasa, la Cmax baja un 60 % y el AUC un 20 %.',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Rasagiline is rapidly absorbed, reaching peak plasma concentration (Cmax) in approximately 1 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta de alrededor del 36 %.',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of rasagiline is about 36%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución en estado estacionario de 87 L, mayor que su unión a proteínas (88-94 %), lo que indica unión a los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución en estado estacionario de 87 L, mayor que su unión a proteínas (88-94 %), lo que indica unión a los tejidos.',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: 'indicating that the tissue binding of rasagiline is in excess of plasma protein binding',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Monoaminooxidasa B (MAO-B)',
        efecto: 'Inhibe de forma selectiva e irreversible la monoaminooxidasa B (MAO-B), enzima que degrada la dopamina en el cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Inhibe de forma selectiva e irreversible la monoaminooxidasa B (MAO-B), enzima que degrada la dopamina en el cerebro.',
            ref: {
              f: 'dailymed-rasagilina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'AZILECT is a selective, irreversible MAO-B inhibitor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma casi por completo en el hígado, sobre todo por CYP1A2, en 1-aminoindano y derivados hidroxilados, que luego se conjugan con ácido glucurónico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma casi por completo en el hígado, sobre todo por CYP1A2, en 1-aminoindano y derivados hidroxilados, que luego se conjugan con ácido glucurónico.',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: 'Rasagiline undergoes almost complete biotransformation in the liver prior to excretion',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '1-aminoindano (AI)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: 'to yield 1-aminoindan (AI), 3-hydroxy-N-propargyl-1 aminoindan (3-OH-PAI) and 3-hydroxy-1-aminoindan (3-OH-AI)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la orina (62 %) y en menor medida por las heces (7 %) en 7 días; menos del 1 % sin cambios. Su semivida en estado estacionario es de 3 horas, sin relación con su efecto, que es irreversible.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la orina (62 %) y en menor medida por las heces (7 %) en 7 días; menos del 1 % sin cambios. Su semivida en estado estacionario es de 3 horas, sin relación con su efecto, que es irreversible.',
          ref: {
            f: 'dailymed-rasagilina',
            sec: '12.3 · Farmacocinética',
            cita: '62% of total dose in urine and 7% of total dose in feces over 7 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'rasagilina',
      ref: {
        f: 'dailymed-rasagilina',
        sec: '12.3 · Farmacocinética',
        cita: 'reaching peak plasma concentration (Cmax) in approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '36 (aprox.)',
      unidad: '%',
      analito: 'rasagilina',
      ref: { f: 'dailymed-rasagilina', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of rasagiline is about 36%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media en estado estacionario',
      valor: '3',
      unidad: 'h',
      analito: 'rasagilina',
      ref: { f: 'dailymed-rasagilina', sec: '12.3 · Farmacocinética', cita: 'Rasagiline mean steady-state half life is 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '87',
      unidad: 'L',
      analito: 'rasagilina',
      ref: { f: 'dailymed-rasagilina', sec: '12.3 · Farmacocinética', cita: 'The mean volume of distribution at steady-state is 87 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '88-94',
      unidad: '%',
      analito: 'rasagilina',
      ref: { f: 'dailymed-rasagilina', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding ranges from 88-94%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rasagilina', 'a40d0e73-3f9f-4b01-979d-402c9cdaeb60', 'AZILECT (RASAGILINE MESYLATE) TABLET', 'Azilect', '26', '2026-09-02', '2026-11-12'),
    rengPubchem(3052776, 'rasagiline', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
