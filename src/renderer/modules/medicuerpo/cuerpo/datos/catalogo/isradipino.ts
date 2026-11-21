import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'isradipino',
    nombre: 'Isradipino',
    clase: 'Antagonista del calcio dihidropiridínico',
    sinonimos: [ 'isradipine', 'DynaCirc' ],
    formula: 'C19H21N3O5',
    masaMolar: 371.4,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OC(C)C)C2=CC=CC3=NON=C32)C(=O)OC',
    inchikey: 'HMJIYCCIJYRONP-UHFFFAOYSA-N',
    cid: 3784,
    iupac: '3-O-methyl 5-O-propan-2-yl 4-(2,1,3-benzoxadiazol-4-yl)-2,6-dimethyl-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'isradipino-oral',
      producto: 'Isradipine · cápsula',
      titular: 'TEVA PHARMACEUTICALS USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg o 5 mg por cápsula, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'gelatin',
        'anhydrous lactose',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'starch, corn',
        'titanium dioxide',
        'ferrosoferric oxide',
        'shellac',
        'potassium hydroxide'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o junto con diuréticos tiacídicos.',
        ref: { f: 'dailymed-isradipino', sec: '1 · Indicaciones', cita: 'Isradipine is indicated in the management of hypertension', codigo: '34067-9' }
      },
      fuente: 'dailymed-isradipino',
      reacciones: [
        [
          'Se presentan las reacciones más frecuentes, al menos posiblemente relacionadas con el fármaco, notificadas por el 1 % o más de los pacientes con cualquier dosis.',
          '34084-4',
          'considered by the investigator to be at least possibly drug related'
        ],
        [
          'Los resultados de los pacientes tratados se presentan con todas las dosis agrupadas.',
          '34084-4',
          'The results for the isradipine treated patients are presented for all doses pooled together'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 2.5 mg o 5 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o junto con diuréticos tiacídicos.',
    actua: 'Es un antagonista del calcio dihidropiridínico: se une con alta afinidad y especificidad a los canales de calcio e inhibe la entrada de calcio en el músculo cardíaco y el liso.',
    recorrido: 'Se absorbe entre un 90 % y un 95 %, pero un primer paso extenso deja una biodisponibilidad del 15 % al 24 %; el pico aparece a las 1,5 horas y los alimentos lo retrasan alrededor de una hora sin cambiar la biodisponibilidad total. Entre el 60 % y el 65 % de la dosis se excreta en la orina y entre el 25 % y el 30 % en las heces, sin fármaco inalterado en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Isradipine is 90% to 95% absorbed and is subject to extensive first-pass metabolism',
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
      ocurre: 'Se absorbe entre un 90 % y un 95 %, pero un primer paso extenso deja una biodisponibilidad del 15 % al 24 %; el pico aparece a las 1,5 horas y los alimentos lo retrasan alrededor de una hora sin cambiar la biodisponibilidad total.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe entre un 90 % y un 95 %, pero un primer paso extenso deja una biodisponibilidad del 15 % al 24 %; el pico aparece a las 1,5 horas y los alimentos lo retrasan alrededor de una hora sin cambiar la biodisponibilidad total.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Isradipine is 90% to 95% absorbed and is subject to extensive first-pass metabolism, resulting in a bioavailability of about 15% to 24%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico de concentración aparece a las 1,5 horas de la dosis.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'peak concentrations of approximately 1 ng/mL/mg dosed occur about 1.5 hours after drug administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos el pico se retrasa alrededor de una hora, sin efecto en la biodisponibilidad total.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of isradipine with food significantly increases the time to peak by about an hour, but has no effect on the total bioavailability (area under the curve) of the drug',
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
      ocurre: 'Se une en un 95 % a las proteínas del plasma y su volumen de distribución aparente es de 3 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 95 % a las proteínas del plasma y su volumen de distribución aparente es de 3 L/kg.',
          ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'Isradipine is 95% bound to plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'El aclaramiento corporal total es de 1,4 L/min y el volumen de distribución aparente de 3 L/kg.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The total body clearance of isradipine is 1.4 L/min and the apparent volume of distribution is 3 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canal de calcio (dihidropiridínico)',
        efecto: 'Es un antagonista del calcio dihidropiridínico: se une con alta afinidad y especificidad a los canales de calcio e inhibe la entrada de calcio en el músculo cardíaco y el liso.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Es un antagonista del calcio dihidropiridínico: se une con alta afinidad y especificidad a los canales de calcio e inhibe la entrada de calcio en el músculo cardíaco y el liso.',
            ref: {
              f: 'dailymed-isradipino',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It binds to calcium channels with high affinity and specificity and inhibits calcium flux into cardiac and smooth muscle',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un primer paso extenso y se metaboliza por completo antes de excretarse; se han caracterizado seis metabolitos en sangre y orina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un primer paso extenso y se metaboliza por completo antes de excretarse; se han caracterizado seis metabolitos en sangre y orina.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Isradipine is completely metabolized prior to excretion, and no unchanged drug is detected in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Sufre un metabolismo de primer paso extenso.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'is subject to extensive first-pass metabolism, resulting in a bioavailability of about 15% to 24%',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Monoácidos del derivado piridínico y lactona cíclica',
          actividad: 'desconocida',
          nota: 'Suponen más del 75 % del material identificado; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Six metabolites have been characterized in blood and urine, with the mono acids of the pyridine derivative and a cyclic lactone product accounting for >75% of the material identified',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 60 % y el 65 % de la dosis se excreta en la orina y entre el 25 % y el 30 % en las heces, sin fármaco inalterado en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 60 % y el 65 % de la dosis se excreta en la orina y entre el 25 % y el 30 % en las heces, sin fármaco inalterado en la orina.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 60% to 65% of an administered dose is excreted in the urine and 25% to 30% in the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La eliminación es bifásica, con una semivida inicial de 1,5 a 2 horas y una terminal de unas 8 horas.',
          ref: {
            f: 'dailymed-isradipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination of isradipine is biphasic with an early half-life of 1 1/2; to 2 hours, and a terminal half-life of about 8 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '15-24 (aprox.)',
      unidad: '%',
      analito: 'isradipino',
      ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'resulting in a bioavailability of about 15% to 24%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1,5 (aprox.)',
      unidad: 'h',
      analito: 'isradipino',
      ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'occur about 1.5 hours after drug administration', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95',
      unidad: '%',
      analito: 'isradipino',
      ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'Isradipine is 95% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '3',
      unidad: 'L/kg',
      analito: 'isradipino',
      ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'the apparent volume of distribution is 3 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'isradipino',
      ref: { f: 'dailymed-isradipino', sec: '12.3 · Farmacocinética', cita: 'and a terminal half-life of about 8 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '60-65 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      ref: {
        f: 'dailymed-isradipino',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 60% to 65% of an administered dose is excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-isradipino', 'bf3425e0-428d-4bdb-ac9a-3b9d483df83a', 'ISRADIPINE CAPSULE', 'Isradipine', '11', '2026-06-17', '2026-11-19'),
    rengPubchem(3784, 'isradipine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
