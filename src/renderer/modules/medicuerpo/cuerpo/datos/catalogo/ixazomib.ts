import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ixazomib',
    nombre: 'Ixazomib',
    clase: 'Inhibidor reversible del proteasoma',
    sinonimos: [ 'ixazomib citrate', 'Ninlaro' ],
    formula: 'C14H19BCl2N2O4',
    masaMolar: 361,
    smiles: 'B([C@H](CC(C)C)NC(=O)CNC(=O)C1=C(C=CC(=C1)Cl)Cl)(O)O',
    inchikey: 'MXAYKZJJDUDWDS-LBPRGKRZSA-N',
    cid: 25183872,
    iupac: '[(1R)-1-[[2-[(2,5-dichlorobenzoyl)amino]acetyl]amino]-3-methylbutyl]boronic acid',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ixazomib-oral',
      producto: 'NINLARO · cápsula',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '4 mg, 3 mg o 2.3 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Citrato de ixazomib', ref: { f: 'dailymed-ixazomib', sec: '11 · Descripción', cita: 'Ixazomib citrate', codigo: '34089-3' } },
      excipientes: [ 'microcrystalline cellulose', 'talc', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento, con lenalidomida y dexametasona, del mieloma múltiple que ha recibido al menos un tratamiento previo.',
        ref: {
          f: 'dailymed-ixazomib',
          sec: '1 · Indicaciones',
          cita: 'in combination with lenalidomide and dexamethasone for the treatment of patients with multiple myeloma who have received at least one prior therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ixazomib',
      advertencias: [
        {
          titulo: 'Trombocitopenia',
          texto: 'Contar las plaquetas al menos una vez al mes.',
          organos: [ 'plaquetas' ],
          ref: {
            f: 'dailymed-ixazomib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor platelet counts at least monthly during treatment with NINLARO',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Microangiopatía trombótica',
          texto: 'Vigilar los signos y síntomas de púrpura trombótica trombocitopénica o síndrome hemolítico urémico.',
          organos: [],
          ref: { f: 'dailymed-ixazomib', sec: '5 · Advertencias y precauciones', cita: 'Monitor for signs and symptoms of TTP/HUS', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): trombocitopenia, neutropenia, diarrea, estreñimiento, neuropatía periférica, náuseas, edema periférico, exantema, vómitos y bronquitis.',
          '34084-4',
          'The most common adverse reactions (≥20%) are thrombocytopenia, neutropenia, diarrhea, constipation, peripheral neuropathy, nausea, peripheral edema, rash, vomiting, and bronchitis'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 4 mg, 3 mg o 2.3 mg por cápsula, según la etiqueta; el activo va como citrato de ixazomib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con lenalidomida y dexametasona, del mieloma múltiple que ha recibido al menos un tratamiento previo.',
    actua: 'Inhibe de forma reversible el proteasoma: se une sobre todo a la subunidad beta 5 del proteasoma 20S y bloquea su actividad de tipo quimotripsina.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1 hora y la biodisponibilidad oral absoluta media, del 58 %. Tras una dosis marcada en 5 pacientes, el 62 % de la radiactividad se excretó en la orina y el 22 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma al menos una hora antes o dos después de comer.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma al menos una hora antes o dos después de comer.',
          ref: { f: 'dailymed-ixazomib', sec: '3 · Formas y concentraciones', cita: 'Light orange gelatin capsule imprinted with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de 1 hora y la biodisponibilidad oral absoluta media, del 58 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1 hora y la biodisponibilidad oral absoluta media, del 58 %.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, the median time to achieve peak ixazomib plasma concentrations was one hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad oral absoluta media del 58 %, según un análisis poblacional.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute oral bioavailability was 58%, based on population PK analysis',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo el AUC un 28 % y la Cmax un 69 %.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat meal decreased ixazomib AUC by 28% and C max by 69%',
            codigo: '43682-4'
          },
          poblacion: 'pacientes',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99 % a las proteínas plasmáticas y pasa a los glóbulos rojos (cociente sangre/plasma de 10); el volumen de distribución en estado estacionario es de 543 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99 % a las proteínas plasmáticas y pasa a los glóbulos rojos (cociente sangre/plasma de 10); el volumen de distribución en estado estacionario es de 543 L.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ixazomib is 99% bound to plasma proteins and distributes into red blood cells with a blood-to-plasma ratio of 10',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 543 L.',
          ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: 'The steady-state volume of distribution is 543 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Subunidad beta 5 del proteasoma 20S',
        efecto: 'Inhibe de forma reversible el proteasoma: se une sobre todo a la subunidad beta 5 del proteasoma 20S y bloquea su actividad de tipo quimotripsina.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma reversible el proteasoma: se une sobre todo a la subunidad beta 5 del proteasoma 20S y bloquea su actividad de tipo quimotripsina.',
            ref: {
              f: 'dailymed-ixazomib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ixazomib preferentially binds and inhibits the chymotrypsin-like activity of the beta 5 subunit of the 20S proteasome',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se espera que su principal vía de aclaramiento sea el metabolismo por varias enzimas CYP y proteínas no CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se espera que su principal vía de aclaramiento sea el metabolismo por varias enzimas CYP y proteínas no CYP.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism by multiple CYP enzymes and non-CYP proteins is expected to be the major clearance mechanism for ixazomib',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada en 5 pacientes, el 62 % de la radiactividad se excretó en la orina y el 22 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada en 5 pacientes, el 62 % de la radiactividad se excretó en la orina y el 22 % en las heces.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: '62% of the administered radioactivity was excreted in urine and 22% in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de 9,5 días.',
          ref: {
            f: 'dailymed-ixazomib',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life (t 1/2 ) of ixazomib was 9.5 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1',
      unidad: 'h',
      analito: 'ixazomib',
      ref: {
        f: 'dailymed-ixazomib',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to achieve peak ixazomib plasma concentrations was one hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta media',
      valor: '58',
      unidad: '%',
      analito: 'ixazomib',
      ref: {
        f: 'dailymed-ixazomib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute oral bioavailability was 58%, based on population PK analysis',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99',
      unidad: '%',
      analito: 'ixazomib',
      ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: 'Ixazomib is 99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '543',
      unidad: 'L',
      analito: 'ixazomib',
      ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: 'The steady-state volume of distribution is 543 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '9,5',
      unidad: 'días',
      analito: 'ixazomib',
      ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: 'The terminal half-life (t 1/2 ) of ixazomib was 9.5 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico',
      valor: '1,9 (aprox.)',
      unidad: 'L/h',
      analito: 'ixazomib',
      ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: 'systemic clearance was approximately 1.9 L/hr', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '62',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'pacientes con cáncer avanzado',
      ref: { f: 'dailymed-ixazomib', sec: '12.3 · Farmacocinética', cita: '62% of the administered radioactivity was excreted in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ixazomib', '038f2461-834b-4488-9ebd-863c83eef5a7', 'NINLARO (IXAZOMIB) CAPSULE', 'NINLARO', '18', '2026-08-17', '2026-11-19'),
    rengPubchem(25183872, 'ixazomib citrate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
