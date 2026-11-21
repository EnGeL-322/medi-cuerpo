import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ranolazina',
    nombre: 'Ranolazina',
    clase: 'Antianginoso (inhibidor de la corriente tardía de sodio)',
    sinonimos: [ 'ranolazine', 'Ranexa' ],
    formula: 'C24H33N3O4',
    masaMolar: 427.5,
    smiles: 'CC1=C(C(=CC=C1)C)NC(=O)CN2CCN(CC2)CC(COC3=CC=CC=C3OC)O',
    inchikey: 'XKLMZUWKNUAPSZ-UHFFFAOYSA-N',
    cid: 56959,
    iupac: 'N-(2,6-dimethylphenyl)-2-[4-[2-hydroxy-3-(2-methoxyphenoxy)propyl]piperazin-1-yl]acetamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'ranolazina-oral',
      producto: 'Ranexa · comprimido recubierto de liberación prolongada',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '500 mg o 1000 mg por comprimido, según la etiqueta',
      excipientes: [
        'carnauba wax',
        'hypromellose 2910 (5 cps)',
        'magnesium stearate',
        'methacrylic acid - ethyl acrylate copolymer (1:1) type a',
        'cellulose, microcrystalline',
        'sodium hydroxide',
        'polyethylene glycol 400',
        'titanium dioxide',
        'polysorbate 80',
        'fd&c yellow no. 6',
        'aluminum oxide',
        'hypromellose 2910 (3 cps)',
        'hypromellose 2910 (6 cps)'
      ],
      usos: {
        t: 'Tratamiento de la angina crónica, junto con otros tratamientos cardiovasculares.',
        ref: { f: 'dailymed-ranolazina', sec: '1 · Indicaciones', cita: 'Ranexa is indicated for the treatment of chronic angina', codigo: '34067-9' }
      },
      fuente: 'dailymed-ranolazina',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Bloquea la corriente IKr y alarga el intervalo QTc según la dosis.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ranolazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Ranolazine blocks I Kr and prolongs the QTc interval in a dose-related manner',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 4 % y más que con placebo): mareo, dolor de cabeza, estreñimiento y náuseas.',
          '34084-4',
          'are dizziness, headache, constipation, nausea'
        ],
        [
          'Datos de 2018 pacientes con angina crónica tratados en ensayos controlados.',
          '34084-4',
          'A total of 2,018 patients with chronic angina were treated with ranolazine'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 500 mg o 1000 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la angina crónica, junto con otros tratamientos cardiovasculares.',
    actua: 'Su mecanismo antianginoso no está determinado: tiene efectos antiisquémicos sin bajar la frecuencia ni la presión, y a dosis terapéuticas inhibe la corriente tardía de sodio del corazón.',
    recorrido: 'Su absorción es muy variable; el pico llega entre 2 y 5 horas y la biodisponibilidad del comprimido frente a una solución es del 76 %. La comida no influye de forma importante. Tras una dosis en solución, alrededor del 75 % salió por la orina y el 25 % por las heces; menos del 5 % sin cambios. Su semivida terminal aparente es de 7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: va liberando la ranolazina a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: va liberando la ranolazina a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '3 · Formas y concentraciones',
            cita: 'film-coated, oblong-shaped, extended-release tablets',
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
      ocurre: 'Su absorción es muy variable; el pico llega entre 2 y 5 horas y la biodisponibilidad del comprimido frente a una solución es del 76 %. La comida no influye de forma importante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Su absorción es muy variable; el pico llega entre 2 y 5 horas y la biodisponibilidad del comprimido frente a una solución es del 76 %. La comida no influye de forma importante.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations of ranolazine are reached between 2 and 5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad del comprimido del 76 % respecto de una solución.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '12.3 · Farmacocinética',
            cita: 'The bioavailability of ranolazine from Ranexa tablets relative to that from a solution of ranolazine is 76%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 62 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 62 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '12.3 · Farmacocinética',
            cita: 'ranolazine is approximately 62% bound to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Corriente tardía de sodio del corazón',
        efecto: 'Su mecanismo antianginoso no está determinado: tiene efectos antiisquémicos sin bajar la frecuencia ni la presión, y a dosis terapéuticas inhibe la corriente tardía de sodio del corazón.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Su mecanismo antianginoso no está determinado: tiene efectos antiisquémicos sin bajar la frecuencia ni la presión, y a dosis terapéuticas inhibe la corriente tardía de sodio del corazón.',
            ref: {
              f: 'dailymed-ranolazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ranolazine at therapeutic levels can inhibit the cardiac late sodium current',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza rápida y ampliamente en el intestino y el hígado, sobre todo por CYP3A y en menor medida por CYP2D6; la actividad de sus metabolitos no está bien caracterizada.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza rápida y ampliamente en el intestino y el hígado, sobre todo por CYP3A y en menor medida por CYP2D6; la actividad de sus metabolitos no está bien caracterizada.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ranolazine is metabolized mainly by CYP3A and, to a lesser extent, by CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis en solución, alrededor del 75 % salió por la orina y el 25 % por las heces; menos del 5 % sin cambios. Su semivida terminal aparente es de 7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis en solución, alrededor del 75 % salió por la orina y el 25 % por las heces; menos del 5 % sin cambios. Su semivida terminal aparente es de 7 horas.',
          ref: {
            f: 'dailymed-ranolazina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% of the dose is excreted in urine and 25% in feces',
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
      valor: '2-5',
      unidad: 'h',
      analito: 'ranolazina',
      ref: {
        f: 'dailymed-ranolazina',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations of ranolazine are reached between 2 and 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media en estado estacionario',
      valor: '2600 (IC 95 %: 400-6100)',
      unidad: 'ng/mL',
      analito: 'ranolazina',
      condiciones: '1000 mg dos veces al día',
      ref: { f: 'dailymed-ranolazina', sec: '12.3 · Farmacocinética', cita: 'the mean steady-state C max was 2600 ng/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '7',
      unidad: 'h',
      analito: 'ranolazina',
      ref: { f: 'dailymed-ranolazina', sec: '12.3 · Farmacocinética', cita: 'The apparent terminal half-life of ranolazine is 7 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '62 (aprox.)',
      unidad: '%',
      analito: 'ranolazina',
      ref: {
        f: 'dailymed-ranolazina',
        sec: '12.3 · Farmacocinética',
        cita: 'ranolazine is approximately 62% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad frente a una solución',
      valor: '76',
      unidad: '%',
      analito: 'ranolazina',
      ref: { f: 'dailymed-ranolazina', sec: '12.3 · Farmacocinética', cita: 'relative to that from a solution of ranolazine is 76%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ranolazina', '8d442b8c-97a8-40a9-8603-f9cd0542cedc', 'RANEXA (RANOLAZINE) TABLET, FILM COATED, EXTENDED RELEASE', 'Ranexa', '2', '2010-04-29', '2026-11-12'),
    rengPubchem(56959, 'ranolazine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
