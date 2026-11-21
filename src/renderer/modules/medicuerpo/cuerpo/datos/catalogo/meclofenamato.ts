import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'meclofenamato',
    nombre: 'Meclofenamato',
    clase: 'Antiinflamatorio no esteroideo (fenamato)',
    sinonimos: [ 'meclofenamate sodium', 'Meclomen' ],
    formula: 'C14H11Cl2NO2',
    masaMolar: 296.1,
    smiles: 'CC1=C(C(=C(C=C1)Cl)NC2=CC=CC=C2C(=O)O)Cl',
    inchikey: 'SBDNJUWAMKYJOX-UHFFFAOYSA-N',
    cid: 4037,
    iupac: '2-(2,6-dichloro-3-methylanilino)benzoic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'meclofenamato-oral',
      producto: 'Meclofenamate Sodium · cápsula',
      titular: 'MYLAN PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Sal sódica de meclofenamato',
        ref: { f: 'dailymed-meclofenamato', sec: '11 · Descripción', cita: 'Meclofenamate sodium', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'fd&c red no. 3',
        'gelatin, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'starch, corn',
        'sodium lauryl sulfate',
        'titanium dioxide',
        'ferrosoferric oxide',
        'fd&c blue no. 2',
        'fd&c red no. 40',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Indicado, entre otros usos, para reducir la fiebre en adultos y aliviar el dolor y los signos y síntomas de la artritis reumatoide y la artrosis.',
        ref: {
          f: 'dailymed-meclofenamato',
          sec: '1 · Indicaciones',
          cita: 'Meclofenamate sodium capsules are indicated: • For reduction of fever in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-meclofenamato',
      advertencias: [
        {
          titulo: 'Acontecimientos trombóticos cardiovasculares',
          texto: 'Los AINE aumentan el riesgo de acontecimientos trombóticos cardiovasculares graves, como infarto de miocardio e ictus, que pueden ser mortales.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-meclofenamato',
            sec: 'Advertencia destacada',
            cita: 'cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hemorragia, úlcera y perforación digestivas',
          texto: 'Los AINE aumentan el riesgo de hemorragia, úlcera y perforación graves del estómago o del intestino, que pueden ser mortales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-meclofenamato',
            sec: 'Advertencia destacada',
            cita: 'NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones más frecuentes son digestivas: diarrea (10 %-33 %), náuseas con o sin vómitos (11 %) y otros trastornos digestivos.',
          '34084-4',
          'these disturbances occurred in the following decreasing order of frequency with the approximate incidences in parentheses: diarrhea (10% to 33%), nausea with or without vomiting (11%)'
        ],
        [
          'Las reacciones adversas notificadas con más frecuencia afectan al aparato digestivo.',
          '34084-4',
          'most frequently reported adverse reactions associated with meclofenamate sodium involve the gastrointestinal system'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 50 mg o 100 mg por cápsula, según la etiqueta; el activo va como sal sódica de meclofenamato. Los excipientes no son el principio activo.',
    usos: 'Indicado, entre otros usos, para reducir la fiebre en adultos y aliviar el dolor y los signos y síntomas de la artritis reumatoide y la artrosis.',
    actua: 'Su modo de acción, como el de otros AINE, no se conoce; en animales inhibe la síntesis de prostaglandinas y compite por la unión al receptor de prostaglandinas.',
    recorrido: 'Se absorbe con rapidez, con el pico plasmático entre 0,5 y 2 horas, y es completamente biodisponible frente a una suspensión de ácido meclofenámico. Alrededor del 70 % de la dosis se excreta por el riñón, entre el 8 % y el 35 % como especies conjugadas del ácido meclofenámico y del metabolito I.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-meclofenamato', sec: '11 · Descripción', cita: 'Meclofenamate sodium capsules, USP contain', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez, con el pico plasmático entre 0,5 y 2 horas, y es completamente biodisponible frente a una suspensión de ácido meclofenámico.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez, con el pico plasmático entre 0,5 y 2 horas, y es completamente biodisponible frente a una suspensión de ácido meclofenámico.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Meclofenamate sodium is rapidly absorbed in man following single and multiple oral doses with peak plasma concentrations occurring in 0.5 to 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tomado media hora después de una comida, la biodisponibilidad media bajó un 26 %, la Cmax se redujo 4 veces y el Tmax se retrasó 3 horas.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'following the administration of meclofenamate sodium capsules one-half hour after a meal, the average extent of bioavailability decreased by 26%, the average peak concentration (C max ) decreased 4-fold and the time to C max was delayed by 3 hours',
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
      ocurre: 'El ácido meclofenámico se une en más del 99 % a las proteínas del plasma en un amplio intervalo de concentraciones.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El ácido meclofenámico se une en más del 99 % a las proteínas del plasma en un amplio intervalo de concentraciones.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Meclofenamic acid is greater than 99% bound to plasma proteins over a wide drug concentration range',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Síntesis y receptor de prostaglandinas',
        efecto: 'Su modo de acción, como el de otros AINE, no se conoce; en animales inhibe la síntesis de prostaglandinas y compite por la unión al receptor de prostaglandinas.',
        lugar: [],
        datos: [
          {
            t: 'Su modo de acción, como el de otros AINE, no se conoce; en animales inhibe la síntesis de prostaglandinas y compite por la unión al receptor de prostaglandinas.',
            ref: {
              f: 'dailymed-meclofenamato',
              sec: '12.2 · Farmacodinámica',
              cita: 'In animal studies, meclofenamate sodium was found to inhibit prostaglandin synthesis and to compete for binding at the prostaglandin receptor site',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolito I (3-hidroximetilo) es el único que inhibe in vitro la ciclooxigenasa, con alrededor de una quinta parte de la actividad; se acumula con dosis múltiples, probablemente sin relevancia clínica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolito I (3-hidroximetilo) es el único que inhibe in vitro la ciclooxigenasa, con alrededor de una quinta parte de la actividad; se acumula con dosis múltiples, probablemente sin relevancia clínica.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Only this Metabolite I has been shown in vitro to inhibit cyclooxygenase activity with approximately one fifth the activity of meclofenamate sodium',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito I (3-hidroximetilo)',
          actividad: 'activo',
          nota: 'Alrededor de una quinta parte de la actividad del fármaco in vitro; semivida media de unas 15 horas.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolite I (3-hydroxymethyl metabolite of meclofenamic acid) with a mean half-life of approximately 15 hours did accumulate following multiple dosing',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 70 % de la dosis se excreta por el riñón, entre el 8 % y el 35 % como especies conjugadas del ácido meclofenámico y del metabolito I.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 70 % de la dosis se excreta por el riñón, entre el 8 % y el 35 % como especies conjugadas del ácido meclofenámico y del metabolito I.',
          ref: {
            f: 'dailymed-meclofenamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 70% of the administered dose is excreted by the kidneys with 8% to 35% excreted as predominantly conjugated species of meclofenamic acid and Metabolite I',
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
      valor: '0,5-2',
      unidad: 'h',
      analito: 'meclofenamato',
      ref: {
        f: 'dailymed-meclofenamato',
        sec: '12.3 · Farmacocinética',
        cita: 'with peak plasma concentrations occurring in 0.5 to 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'ácido meclofenámico',
      ref: {
        f: 'dailymed-meclofenamato',
        sec: '12.3 · Farmacocinética',
        cita: 'Meclofenamic acid is greater than 99% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Dosis excretada por el riñón',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'meclofenamato y metabolitos',
      ref: {
        f: 'dailymed-meclofenamato',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 70% of the administered dose is excreted by the kidneys',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media del metabolito I',
      valor: '15 (aprox.)',
      unidad: 'h',
      analito: 'metabolito I',
      ref: {
        f: 'dailymed-meclofenamato',
        sec: '12.3 · Farmacocinética',
        cita: 'with a mean half-life of approximately 15 hours did accumulate following multiple dosing',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-meclofenamato', '96f19af4-de8f-4fd7-90d8-55fe6ebdd81d', 'MECLOFENAMATE SODIUM CAPSULE', 'Meclofenamate Sodium', '20', '2026-05-29', '2026-11-19'),
    rengPubchem(4037, 'meclofenamate sodium', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
