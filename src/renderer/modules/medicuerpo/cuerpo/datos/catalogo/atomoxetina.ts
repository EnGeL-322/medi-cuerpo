import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'atomoxetina',
    nombre: 'Atomoxetina',
    clase: 'Inhibidor selectivo de la recaptación de noradrenalina',
    sinonimos: [ 'atomoxetine', 'Strattera' ],
    formula: 'C17H21NO',
    masaMolar: 255.35,
    smiles: 'CC1=CC=CC=C1O[C@H](CCNC)C2=CC=CC=C2',
    inchikey: 'VHGCDTVCOLNTBX-QGZVFWFLSA-N',
    cid: 54841,
    iupac: '(3R)-N-methyl-3-(2-methylphenoxy)-3-phenylpropan-1-amine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'atomoxetina-oral',
      producto: 'Strattera · cápsula',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 18 mg, 25 mg, 40 mg, 60 mg, 80 mg o 100 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de atomoxetina',
        ref: { f: 'dailymed-atomoxetina', sec: '11 · Descripción', cita: 'Atomoxetine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'starch, corn', 'dimethicone, unspecified', 'gelatin, unspecified', 'sodium lauryl sulfate', 'titanium dioxide' ],
      usos: {
        t: 'Trastorno por déficit de atención e hiperactividad (TDAH) en adultos y niños desde 6 años.',
        ref: {
          f: 'dailymed-atomoxetina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of attention-deficit/hyperactivity disorder (ADHD) in adults and pediatric patients 6 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-atomoxetina',
      advertencias: [
        {
          titulo: 'Pensamientos suicidas en niños',
          texto: 'Hay que vigilar de cerca en niños desde 6 años la aparición de pensamientos y conductas suicidas, sobre todo los primeros meses.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-atomoxetina',
            sec: 'Advertencia destacada',
            cita: 'should be monitored and observed closely for suicidal thoughts and behavior',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Lesión hepática grave',
          texto: 'Debe suspenderse si aparece ictericia o datos de lesión del hígado.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '5 · Advertencias y precauciones',
            cita: 'STRATTERA should be discontinued and not restarted in patients with jaundice or laboratory evidence of liver injury',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En niños (≥ 5 % y el doble que con placebo): náuseas, vómitos, cansancio, menos apetito, dolor abdominal y somnolencia.',
          '34084-4',
          'Nausea, vomiting, fatigue, decreased appetite, abdominal pain, and somnolence'
        ],
        [
          'En adultos: estreñimiento, boca seca, náuseas, menos apetito, mareo, disfunción eréctil y dificultad para empezar a orinar.',
          '34084-4',
          'Constipation, dry mouth, nausea, decreased appetite, dizziness, erectile dysfunction, and urinary hesitation'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 10 mg, 18 mg, 25 mg, 40 mg, 60 mg, 80 mg o 100 mg por cápsula, según la etiqueta; el activo va como clorhidrato de atomoxetina. Los excipientes no son el principio activo.',
    usos: 'Trastorno por déficit de atención e hiperactividad (TDAH) en adultos y niños desde 6 años.',
    actua: 'Su mecanismo exacto se desconoce; se atribuye a la inhibición selectiva del transportador presináptico de noradrenalina.',
    recorrido: 'Su biodisponibilidad absoluta es del 63 % en metabolizadores CYP2D6 habituales y del 94 % en los lentos; el pico llega a una mediana de 1 y 2,5 horas. Más del 80 % de la dosis sale por la orina como glucurónido de 4-hidroxiatomoxetina (menos del 3 % sin cambios) y menos del 17 % por las heces. La semivida es de 5,2 horas en metabolizadores habituales y de 21,6 en los lentos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula para tomar por boca.',
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '3 · Formas y concentraciones',
            cita: '10 mg of atomoxetine (opaque white, opaque white)',
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
      ocurre: 'Su biodisponibilidad absoluta es del 63 % en metabolizadores CYP2D6 habituales y del 94 % en los lentos; el pico llega a una mediana de 1 y 2,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Su biodisponibilidad absoluta es del 63 % en metabolizadores CYP2D6 habituales y del 94 % en los lentos; el pico llega a una mediana de 1 y 2,5 horas.',
          ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability 63% 94%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 98 % a proteínas del plasma; volumen de distribución de 0,85 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 98 % a proteínas del plasma; volumen de distribución de 0,85 L/kg.',
          ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Protein Binding 98% Volume of distribution 0.85 L/kg', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Transportador de noradrenalina',
        efecto: 'Su mecanismo exacto se desconoce; se atribuye a la inhibición selectiva del transportador presináptico de noradrenalina.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; se atribuye a la inhibición selectiva del transportador presináptico de noradrenalina.',
            ref: {
              f: 'dailymed-atomoxetina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'thought to be related to selective inhibition of the pre-synaptic norepinephrine transporter',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por CYP2D6 a 4-hidroxiatomoxetina, tan potente como la atomoxetina, que después se glucuronida; la N-desmetilatomoxetina es 20 veces menos activa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por CYP2D6 a 4-hidroxiatomoxetina, tan potente como la atomoxetina, que después se glucuronida; la N-desmetilatomoxetina es 20 veces menos activa.',
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '12.3 · Farmacocinética',
            cita: '4-Hydroxyatomoxetine is equipotent to atomoxetine as an inhibitor of the norepinephrine transporter',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4-hidroxiatomoxetina',
          actividad: 'activo',
          nota: 'Se glucuronida enseguida.',
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '12.3 · Farmacocinética',
            cita: '4-Hydroxyatomoxetine is equipotent to atomoxetine as an inhibitor of the norepinephrine transporter',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'N-desmetilatomoxetina',
          actividad: 'activo',
          nota: '20 veces menos activa.',
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'has substantially (20-fold) less pharmacological activity compared with atomoxetine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 80 % de la dosis sale por la orina como glucurónido de 4-hidroxiatomoxetina (menos del 3 % sin cambios) y menos del 17 % por las heces. La semivida es de 5,2 horas en metabolizadores habituales y de 21,6 en los lentos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 80 % de la dosis sale por la orina como glucurónido de 4-hidroxiatomoxetina (menos del 3 % sin cambios) y menos del 17 % por las heces. La semivida es de 5,2 horas en metabolizadores habituales y de 21,6 en los lentos.',
          ref: {
            f: 'dailymed-atomoxetina',
            sec: '12.3 · Farmacocinética',
            cita: 'Greater than 80% of the administered dose excreted as 4-hydroxyatomoxetine-O-glucuronide',
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
      valor: '63 (habituales) y 94 (lentos)',
      unidad: '%',
      analito: 'atomoxetina',
      poblacion: 'metabolizadores CYP2D6 habituales y lentos',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability 63% 94%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (mediana)',
      valor: '1 (habituales) y 2,5 (lentos)',
      unidad: 'h',
      analito: 'atomoxetina',
      poblacion: 'metabolizadores CYP2D6 habituales y lentos',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'T max median 1 hour 2.5 hour', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '5,2 (habituales) y 21,6 (lentos)',
      unidad: 'h',
      analito: 'atomoxetina',
      poblacion: 'metabolizadores CYP2D6 habituales y lentos',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Atomoxetine half-life 5.2 hours 21.6 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '98',
      unidad: '%',
      analito: 'atomoxetina',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Protein Binding 98%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,85',
      unidad: 'L/kg',
      analito: 'atomoxetina',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'Volume of distribution 0.85 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida',
      valor: '37',
      unidad: '%',
      analito: 'atomoxetina',
      ref: { f: 'dailymed-atomoxetina', sec: '12.3 · Farmacocinética', cita: 'C max : Decreased 37%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-atomoxetina', '309de576-c318-404a-bc15-660c2b1876fb', 'STRATTERA (ATOMOXETINE HYDROCHLORIDE) CAPSULE', 'Strattera', '69', '2026-07-23', '2026-11-12'),
    rengPubchem(54841, 'atomoxetine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
