import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bromocriptina',
    nombre: 'Bromocriptina',
    clase: 'Agonista dopaminérgico D2 derivado del ergot',
    sinonimos: [ 'bromocriptine', 'Cycloset' ],
    formula: 'C32H40BrN5O5',
    masaMolar: 654.6,
    smiles: 'CC(C)C[C@H]1C(=O)N2CCC[C@H]2[C@]3(N1C(=O)[C@](O3)(C(C)C)NC(=O)[C@H]4CN([C@@H]5CC6=C(NC7=CC=CC(=C67)C5=C4)Br)C)O',
    inchikey: 'OZVBMTJYIDMWIL-AYFBDAFISA-N',
    cid: 31101,
    iupac: '(6aR,9R)-5-bromo-N-[(1S,2S,4R,7S)-2-hydroxy-7-(2-methylpropyl)-5,8-dioxo-4-propan-2-yl-3-oxa-6,9-diazatricyclo[7.3.0.02,6]dodecan-4-yl]-7-methyl-6,6a,8,9-tetrahydro-4H-indolo[4,3-fg]quinoline-9-carboxamide',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'bromocriptina-oral',
      producto: 'CYCLOSET · comprimido',
      titular: 'AVVISTO THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.8 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Mesilato de bromocriptina',
        ref: { f: 'dailymed-bromocriptina', sec: '11 · Descripción', cita: 'bromocriptine mesylate', codigo: '34089-3' }
      },
      excipientes: [ 'lactose, unspecified form', 'starch, corn', 'magnesium stearate', 'silicon dioxide', 'citric acid monohydrate' ],
      usos: {
        t: 'Mejorar el control de la glucemia en adultos con diabetes tipo 2, junto con dieta y ejercicio; no vale para diabetes tipo 1 ni cetoacidosis.',
        ref: {
          f: 'dailymed-bromocriptina',
          sec: '1 · Indicaciones',
          cita: 'improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bromocriptina',
      advertencias: [
        {
          titulo: 'Hipotensión',
          texto: 'Puede causar hipotensión ortostática y síncope, sobre todo al empezar o al subir la dosis.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-bromocriptina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Can cause orthostatic hypotension and syncope, particularly upon initiation or dose escalation',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Somnolencia',
          texto: 'Puede causar somnolencia.',
          organos: [ 'encefalo' ],
          ref: { f: 'dailymed-bromocriptina', sec: '5 · Advertencias y precauciones', cita: 'CYCLOSET may cause somnolence', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: náuseas, cansancio, vómitos, dolor de cabeza y mareo; duraron una mediana de 14 días y fueron más probables al empezar.',
          '34084-4',
          'most commonly reported adverse reactions (nausea, fatigue, vomiting, headache, dizziness) lasted a median of 14 days'
        ],
        [
          'En el ensayo de 52 semanas vomitó el 11,5 % de las mujeres tratadas frente al 3,6 % con placebo.',
          '34084-4',
          'In the 52-week CYCLOSET safety trial, 11.5% of CYCLOSET-treated women compared to 3.6% of placebo-treated women reported vomiting'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.8 mg por comprimido, según la etiqueta; el activo va como mesilato de bromocriptina. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucemia en adultos con diabetes tipo 2, junto con dieta y ejercicio; no vale para diabetes tipo 1 ni cetoacidosis.',
    actua: 'Es un simpaticolítico y agonista del receptor dopaminérgico D2; tomado por la mañana, se asocia a más sensibilidad a la insulina y menos glucosa en ayunas y tras las comidas, sin subir la insulina.',
    recorrido: 'Se absorbe aproximadamente el 65-95 % de la dosis, pero por el intenso primer paso solo alrededor del 7 % llega a la circulación general. La vía principal es la bilis; por la orina sale aproximadamente el 2-6 % de la dosis. La semivida de eliminación es de unas 6 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco y redondo de 0,8 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco y redondo de 0,8 mg.',
          ref: { f: 'dailymed-bromocriptina', sec: '3 · Formas y concentraciones', cita: '0.8 mg tablets are white and round', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe aproximadamente el 65-95 % de la dosis, pero por el intenso primer paso solo alrededor del 7 % llega a la circulación general.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe aproximadamente el 65-95 % de la dosis, pero por el intenso primer paso solo alrededor del 7 % llega a la circulación general.',
          ref: {
            f: 'dailymed-bromocriptina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 65-95% of the CYCLOSET dose of bromocriptine mesylate is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'En ayunas el máximo llega a los 53 minutos; con una comida rica en grasa, a las 90-120 minutos.',
          ref: {
            f: 'dailymed-bromocriptina',
            sec: '12.3 · Farmacocinética',
            cita: 'Under fasting conditions the time to maximum plasma concentration is 53 minutes',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 90-96 % a proteínas del plasma; el volumen de distribución es de unos 61 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 90-96 % a proteínas del plasma; el volumen de distribución es de unos 61 L.',
          ref: { f: 'dailymed-bromocriptina', sec: '12.3 · Farmacocinética', cita: 'Bromocriptine is 90-96% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor dopaminérgico D2',
        efecto: 'Es un simpaticolítico y agonista del receptor dopaminérgico D2; tomado por la mañana, se asocia a más sensibilidad a la insulina y menos glucosa en ayunas y tras las comidas, sin subir la insulina.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un simpaticolítico y agonista del receptor dopaminérgico D2; tomado por la mañana, se asocia a más sensibilidad a la insulina y menos glucosa en ayunas y tras las comidas, sin subir la insulina.',
            ref: {
              f: 'dailymed-bromocriptina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'a sympatholytic, dopamine D2 receptor agonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho en el tubo digestivo y el hígado; la vía principal es el CYP3A4 y cerca del 93 % de lo absorbido pasa por el primer paso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho en el tubo digestivo y el hígado; la vía principal es el CYP3A4 y cerca del 93 % de lo absorbido pasa por el primer paso.',
          ref: {
            f: 'dailymed-bromocriptina',
            sec: '12.3 · Farmacocinética',
            cita: 'Bromocriptine mesylate is extensively metabolized in the gastrointestinal tract and liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal es la bilis; por la orina sale aproximadamente el 2-6 % de la dosis. La semivida de eliminación es de unas 6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal es la bilis; por la orina sale aproximadamente el 2-6 % de la dosis. La semivida de eliminación es de unas 6 horas.',
          ref: {
            f: 'dailymed-bromocriptina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major route of excretion of bromocriptine is in the bile with the remaining approximately 2-6% of an oral dose excreted via the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción que llega a la circulación general',
      valor: '7 (aprox.)',
      unidad: '%',
      analito: 'bromocriptina',
      ref: {
        f: 'dailymed-bromocriptina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 7% of the dose reaches the systemic circulation',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (en ayunas)',
      valor: '53',
      unidad: 'min',
      analito: 'bromocriptina',
      condiciones: 'en ayunas',
      ref: { f: 'dailymed-bromocriptina', sec: '12.3 · Farmacocinética', cita: 'the time to maximum plasma concentration is 53 minutes', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (comida rica en grasa)',
      valor: '90-120 (aprox.)',
      unidad: 'min',
      analito: 'bromocriptina',
      condiciones: 'tras una comida estándar rica en grasa',
      ref: {
        f: 'dailymed-bromocriptina',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to maximum plasma concentration is increased to approximately 90-120 minutes',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la biodisponibilidad con comida',
      valor: '55-65 (aprox.)',
      unidad: '%',
      analito: 'bromocriptina',
      ref: {
        f: 'dailymed-bromocriptina',
        sec: '12.3 · Farmacocinética',
        cita: 'increased under fed as compared to fasting conditions by an average of approximately 55-65%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '90-96',
      unidad: '%',
      analito: 'bromocriptina',
      ref: { f: 'dailymed-bromocriptina', sec: '12.3 · Farmacocinética', cita: 'Bromocriptine is 90-96% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '61 (aprox.)',
      unidad: 'L',
      analito: 'bromocriptina',
      ref: { f: 'dailymed-bromocriptina', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution is approximately 61 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'bromocriptina',
      ref: { f: 'dailymed-bromocriptina', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life is approximately 6 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado por la orina',
      valor: '2-6 (aprox.)',
      unidad: '% de la dosis',
      analito: 'bromocriptina',
      ref: {
        f: 'dailymed-bromocriptina',
        sec: '12.3 · Farmacocinética',
        cita: 'the remaining approximately 2-6% of an oral dose excreted via the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bromocriptina', 'e42ba916-16b9-4d1c-8d09-9d2fbb1b6c20', 'CYCLOSET (BROMOCRIPTINE MESYLATE) TABLET', 'CYCLOSET', '7', '2026-01-14', '2026-11-12'),
    rengPubchem(31101, 'bromocriptine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
