import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pitavastatina',
    nombre: 'Pitavastatina',
    clase: 'Estatina (inhibidor de la HMG-CoA reductasa)',
    sinonimos: [ 'pitavastatin', 'Livalo' ],
    formula: 'C25H24FNO4',
    masaMolar: 421.5,
    smiles: 'C1CC1C2=NC3=CC=CC=C3C(=C2/C=C/[C@H](C[C@H](CC(=O)O)O)O)C4=CC=C(C=C4)F',
    inchikey: 'VGYFMXBACGZSIL-MCBHFWOFSA-N',
    cid: 5282452,
    iupac: '(E,3R,5S)-7-[2-cyclopropyl-4-(4-fluorophenyl)quinolin-3-yl]-3,5-dihydroxyhept-6-enoic acid',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'pitavastatina-oral',
      producto: 'Livalo · comprimido recubierto con película',
      titular: 'KOWA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 2 mg o 4 mg de pitavastatina por comprimido (como sal cálcica)',
      sal: {
        nombre: 'Pitavastatina cálcica',
        ref: { f: 'dailymed-pitavastatina', sec: '11 · Descripción', cita: 'pitavastatin calcium', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'hypromellose, unspecified',
        'magnesium aluminometasilicate type ib',
        'magnesium stearate',
        'titanium dioxide',
        'triethyl citrate',
        'silicon dioxide'
      ],
      usos: {
        t: 'Junto con la dieta, bajar el colesterol LDL en adultos con hiperlipidemia primaria y en hipercolesterolemia familiar heterocigota desde los 8 años.',
        ref: {
          f: 'dailymed-pitavastatina',
          sec: '1 · Indicaciones',
          cita: 'LIVALO is indicated as an adjunct to diet to reduce low-density lipoprotein cholesterol (LDL-C)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pitavastatina',
      advertencias: [
        {
          titulo: 'Miopatía y rabdomiólisis',
          texto: 'Puede causar miopatía y rabdomiólisis, con posible lesión renal aguda.',
          organos: [ 'musculos', 'rinones' ],
          ref: { f: 'dailymed-pitavastatina', sec: '5 · Advertencias y precauciones', cita: 'LIVALO may cause myopathy', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): dolor muscular, estreñimiento, diarrea, dolor de espalda y dolor en las extremidades.',
          '34084-4',
          'were myalgia, constipation'
        ],
        [ 'Diarrea, dolor de espalda y dolor en las extremidades (≥ 2 %).', '34084-4', 'diarrhea, back pain, and pain in extremity' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 1 mg, 2 mg o 4 mg de pitavastatina por comprimido (como sal cálcica); el activo va como pitavastatina cálcica. Los excipientes no son el principio activo.',
    usos: 'Junto con la dieta, bajar el colesterol LDL en adultos con hiperlipidemia primaria y en hipercolesterolemia familiar heterocigota desde los 8 años.',
    actua: 'Inhibe la HMG-CoA reductasa, paso limitante de la síntesis del colesterol: el hígado expresa más receptores de LDL y capta más LDL de la sangre.',
    recorrido: 'Se absorbe en el intestino delgado (muy poco en el colon) y el pico llega hacia la hora; la biodisponibilidad absoluta de la solución oral es del 51 %. Con una dosis marcada, el 15 % salió por la orina y el 79 % por las heces en 7 días. Su semivida plasmática es de unas 12 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-pitavastatina', sec: '3 · Formas y concentraciones', cita: 'Round white tablet, debossed "KC"', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe en el intestino delgado (muy poco en el colon) y el pico llega hacia la hora; la biodisponibilidad absoluta de la solución oral es del 51 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe en el intestino delgado (muy poco en el colon) y el pico llega hacia la hora; la biodisponibilidad absoluta de la solución oral es del 51 %.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pitavastatin was absorbed in the small intestine but very little in the colon',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico plasmático hacia la hora.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pitavastatin peak plasma concentrations are achieved about 1 hour after oral administration',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Más del 99 % se une a proteínas del plasma; volumen de distribución medio de unos 148 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99 % se une a proteínas del plasma; volumen de distribución medio de unos 148 L.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pitavastatin is more than 99% protein bound in human plasma',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'HMG-CoA reductasa',
        efecto: 'Inhibe la HMG-CoA reductasa, paso limitante de la síntesis del colesterol: el hígado expresa más receptores de LDL y capta más LDL de la sangre.',
        lugar: [ 'higado' ],
        datos: [
          {
            t: 'Inhibe la HMG-CoA reductasa, paso limitante de la síntesis del colesterol: el hígado expresa más receptores de LDL y capta más LDL de la sangre.',
            ref: {
              f: 'dailymed-pitavastatina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the expression of LDL-receptors followed by the uptake of LDL from blood to liver is accelerated',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por glucuronidación (UGT) y forma pitavastatina lactona; el sistema CYP apenas interviene.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por glucuronidación (UGT) y forma pitavastatina lactona; el sistema CYP apenas interviene.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'The principal route of pitavastatin metabolism is glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Pitavastatina lactona',
          actividad: 'desconocida',
          nota: 'Metabolito principal en el plasma.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major metabolite in human plasma is the lactone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con una dosis marcada, el 15 % salió por la orina y el 79 % por las heces en 7 días. Su semivida plasmática es de unas 12 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con una dosis marcada, el 15 % salió por la orina y el 79 % por las heces en 7 días. Su semivida plasmática es de unas 12 horas.',
          ref: {
            f: 'dailymed-pitavastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'whereas a mean of 79% of the dose was excreted in feces within 7 days',
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
      analito: 'pitavastatina',
      ref: { f: 'dailymed-pitavastatina', sec: '12.3 · Farmacocinética', cita: 'achieved about 1 hour after oral administration', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (solución oral)',
      valor: '51',
      unidad: '%',
      analito: 'pitavastatina',
      condiciones: 'solución oral',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-pitavastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of pitavastatin oral solution is 51%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'pitavastatina',
      ref: { f: 'dailymed-pitavastatina', sec: '12.3 · Farmacocinética', cita: 'is more than 99% protein bound in human plasma', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '148 (aprox.)',
      unidad: 'L',
      analito: 'pitavastatina',
      ref: { f: 'dailymed-pitavastatina', sec: '12.3 · Farmacocinética', cita: 'the mean volume of distribution is approximately 148 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'pitavastatina',
      ref: {
        f: 'dailymed-pitavastatina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma elimination half-life is approximately 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa',
      valor: '43',
      unidad: '%',
      analito: 'pitavastatina',
      ref: { f: 'dailymed-pitavastatina', sec: '12.3 · Farmacocinética', cita: 'decreases pitavastatin C max by 43%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pitavastatina', '44dcbf97-99ec-427c-ba50-207e0069d6d2', 'LIVALO (PITAVASTATIN CALCIUM) TABLET, FILM COATED', 'Livalo', '12', '2026-06-17', '2026-11-12'),
    rengPubchem(5282452, 'pitavastatin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
