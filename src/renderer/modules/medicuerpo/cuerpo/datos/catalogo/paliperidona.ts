import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'paliperidona',
    nombre: 'Paliperidona',
    clase: 'Antipsicótico atípico (metabolito activo de la risperidona)',
    sinonimos: [ 'paliperidone', 'Invega' ],
    formula: 'C23H27FN4O3',
    masaMolar: 426.5,
    smiles: 'CC1=C(C(=O)N2CCCC(C2=N1)O)CCN3CCC(CC3)C4=NOC5=C4C=CC(=C5)F',
    inchikey: 'PMXMIIMHBWHSKN-UHFFFAOYSA-N',
    cid: 115237,
    iupac: '3-[2-[4-(6-fluoro-1,2-benzoxazol-3-yl)piperidin-1-yl]ethyl]-9-hydroxy-2-methyl-6,7,8,9-tetrahydropyrido[1,2-a]pyrimidin-4-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'paliperidona-oral',
      producto: 'INVEGA · comprimido de liberación prolongada',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '3 mg, 6 mg, 9 mg o 1.5 mg por comprimido, según la etiqueta',
      excipientes: [
        'carnauba wax',
        'cellulose acetate',
        'polyethylene glycol, unspecified',
        'propylene glycol',
        'povidone, unspecified',
        'sodium chloride',
        'stearic acid',
        'butylated hydroxytoluene',
        'hypromellose, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'triacetin',
        'lactose monohydrate'
      ],
      usos: {
        t: 'Esquizofrenia en adultos y adolescentes de 12 a 17 años y trastorno esquizoafectivo.',
        ref: { f: 'dailymed-paliperidona', sec: '1 · Indicaciones', cita: 'Treatment of schizophrenia', codigo: '34067-9' }
      },
      fuente: 'dailymed-paliperidona',
      advertencias: [
        {
          titulo: 'Mortalidad en personas mayores con demencia',
          texto: 'Las personas mayores con psicosis por demencia tratadas con antipsicóticos tienen un mayor riesgo de muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-paliperidona',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Alarga de forma moderada el intervalo QTc; debe evitarse con otros fármacos que lo prolongan.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-paliperidona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Paliperidone causes a modest increase in the corrected QT (QTc) interval',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En adultos con esquizofrenia: síntomas extrapiramidales, taquicardia y acatisia (≥ 5 % y el doble que con placebo).',
          '34084-4',
          'Adults with schizophrenia: extrapyramidal symptoms, tachycardia, and akathisia'
        ],
        [
          'En adolescentes: somnolencia, acatisia, temblor, distonía, rigidez, ansiedad, aumento de peso y taquicardia.',
          '34084-4',
          'Adolescents with schizophrenia: somnolence, akathisia, tremor, dystonia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 3 mg, 6 mg, 9 mg o 1.5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia en adultos y adolescentes de 12 a 17 años y trastorno esquizoafectivo.',
    actua: 'Es el principal metabolito activo de la risperidona; su efecto podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A.',
    recorrido: 'Tras una dosis, la concentración sube despacio hasta el máximo hacia las 24 horas; su biodisponibilidad oral absoluta es del 28 %. Con una comida rica en grasa, la Cmax y el AUC subieron un 60 % y un 54 %. Una semana después de 1 mg marcado, el 59 % de la dosis había salido sin cambios por la orina y el 32 % como metabolitos; alrededor del 80 % de la radiactividad salió por la orina y el 11 % por las heces. Su semivida terminal es de unas 23 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: la concentración sube poco a poco hasta un pico hacia las 24 horas.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: la concentración sube poco a poco hasta un pico hacia las 24 horas.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '3 · Formas y concentraciones',
            cita: 'INVEGA Extended-Release Tablets are available in the following strengths',
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
      ocurre: 'Tras una dosis, la concentración sube despacio hasta el máximo hacia las 24 horas; su biodisponibilidad oral absoluta es del 28 %. Con una comida rica en grasa, la Cmax y el AUC subieron un 60 % y un 54 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis, la concentración sube despacio hasta el máximo hacia las 24 horas; su biodisponibilidad oral absoluta es del 28 %. Con una comida rica en grasa, la Cmax y el AUC subieron un 60 % y un 54 %.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '12.3 · Farmacocinética',
            cita: 'the plasma concentrations of paliperidone gradually rise to reach peak plasma concentration (C max ) approximately 24 hours after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad oral absoluta del 28 %.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of paliperidone following INVEGA administration is 28%',
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
      ocurre: 'Volumen aparente de distribución de unos 487 L; el 74 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de distribución de unos 487 L; el 74 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of racemic paliperidone is 74%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores D2 y 5-HT2A',
        efecto: 'Es el principal metabolito activo de la risperidona; su efecto podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es el principal metabolito activo de la risperidona; su efecto podría deberse a que bloquea a la vez los receptores de dopamina D2 y de serotonina 5-HT2A.',
            ref: {
              f: 'dailymed-paliperidona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'could be mediated through a combination of central dopamine Type 2 (D 2 ) and serotonin Type 2 (5HT 2A ) receptor antagonism',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es el principal metabolito activo de la risperidona.',
            ref: {
              f: 'dailymed-paliperidona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Paliperidone is the major active metabolite of risperidone',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se han identificado cuatro vías metabólicas (desalquilación, hidroxilación, deshidrogenación y escisión del benzisoxazol), ninguna con más del 10 % de la dosis; CYP2D6 y CYP3A4 tienen un papel limitado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se han identificado cuatro vías metabólicas (desalquilación, hidroxilación, deshidrogenación y escisión del benzisoxazol), ninguna con más del 10 % de la dosis; CYP2D6 y CYP3A4 tienen un papel limitado.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '12.3 · Farmacocinética',
            cita: 'Four primary metabolic pathways have been identified in vivo , none of which could be shown to account for more than 10% of the dose',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Una semana después de 1 mg marcado, el 59 % de la dosis había salido sin cambios por la orina y el 32 % como metabolitos; alrededor del 80 % de la radiactividad salió por la orina y el 11 % por las heces. Su semivida terminal es de unas 23 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Una semana después de 1 mg marcado, el 59 % de la dosis había salido sin cambios por la orina y el 32 % como metabolitos; alrededor del 80 % de la radiactividad salió por la orina y el 11 % por las heces. Su semivida terminal es de unas 23 horas.',
          ref: {
            f: 'dailymed-paliperidona',
            sec: '12.3 · Farmacocinética',
            cita: '59% (range 51% – 67%) of the dose was excreted unchanged into urine',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '24 (aprox.)',
      unidad: 'h',
      analito: 'paliperidona',
      condiciones: 'comprimido de liberación prolongada, dosis única',
      ref: { f: 'dailymed-paliperidona', sec: '12.3 · Farmacocinética', cita: 'approximately 24 hours after dosing', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '28',
      unidad: '%',
      analito: 'paliperidona',
      ref: {
        f: 'dailymed-paliperidona',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of paliperidone following INVEGA administration is 28%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '23 (aprox.)',
      unidad: 'h',
      analito: 'paliperidona',
      ref: {
        f: 'dailymed-paliperidona',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life of paliperidone is approximately 23 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '74',
      unidad: '%',
      analito: 'paliperidona racémica',
      ref: {
        f: 'dailymed-paliperidona',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of racemic paliperidone is 74%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '487',
      unidad: 'L',
      analito: 'paliperidona',
      ref: {
        f: 'dailymed-paliperidona',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent volume of distribution of paliperidone is 487 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina en una semana',
      valor: '59 (51-67)',
      unidad: '% de la dosis',
      analito: 'paliperidona',
      poblacion: '5 voluntarios sanos',
      condiciones: '1 mg de liberación inmediata marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-paliperidona',
        sec: '12.3 · Farmacocinética',
        cita: '59% (range 51% – 67%) of the dose was excreted unchanged into urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-paliperidona', '7b8e5b26-b9e4-4704-921b-3c3c0d159916', 'INVEGA (PALIPERIDONE) TABLET, EXTENDED RELEASE', 'INVEGA', '43', '2026-03-20', '2026-11-12'),
    rengPubchem(115237, 'paliperidone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
