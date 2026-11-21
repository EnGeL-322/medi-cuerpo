import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'azilsartan',
    nombre: 'Azilsartán',
    clase: 'Antagonista de los receptores de la angiotensina II (profármaco)',
    sinonimos: [ 'azilsartan', 'azilsartan medoxomil', 'Edarbi' ],
    formula: 'C30H24N4O8',
    masaMolar: 568.5,
    smiles: 'CCOC1=NC2=CC=CC(=C2N1CC3=CC=C(C=C3)C4=CC=CC=C4C5=NOC(=O)N5)C(=O)OCC6=C(OC(=O)O6)C',
    inchikey: 'QJFSABGVXDWMIW-UHFFFAOYSA-N',
    cid: 135409642,
    iupac: '(5-methyl-2-oxo-1,3-dioxol-4-yl)methyl 2-ethoxy-3-[[4-[2-(5-oxo-4H-1,2,4-oxadiazol-3-yl)phenyl]phenyl]methyl]benzimidazole-4-carboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'azilsartan-oral',
      producto: 'Edarbi · comprimido',
      titular: 'AZURITY PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40 mg o 80 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Azilsartán medoxomilo',
        ref: { f: 'dailymed-azilsartan', sec: '11 · Descripción', cita: 'Edarbi (azilsartan medoxomil), a prodrug', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'fumaric acid',
        'sodium hydroxide',
        'hydroxypropyl cellulose (1600000 wamw)',
        'croscarmellose sodium',
        'microcrystalline cellulose',
        'magnesium stearate'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión en adultos, para reducir la presión arterial.',
        ref: {
          f: 'dailymed-azilsartan',
          sec: '1 · Indicaciones',
          cita: 'Edarbi is indicated for the treatment of hypertension in adults, to lower blood pressure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-azilsartan',
      advertencias: [
        {
          titulo: 'Toxicidad fetal',
          texto: 'Puede dañar al feto si se administra a una mujer embarazada; al detectar el embarazo debe suspenderse.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-azilsartan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Edarbi can cause fetal harm when administered to a pregnant woman',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión por depleción de volumen o de sal',
          texto: 'Hay que corregir la depleción de volumen o de sal antes de administrarlo.',
          organos: [ 'vasos', 'rinones' ],
          ref: {
            f: 'dailymed-azilsartan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Correct volume or salt depletion prior to administration of Edarbi',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'La reacción adversa más frecuente en adultos fue la diarrea (2 %).',
          '34084-4',
          'The most common adverse reaction in adults was diarrhea (2%)'
        ],
        [
          'El tratamiento fue bien tolerado, con una incidencia global de reacciones adversas similar a la del placebo.',
          '34084-4',
          'Treatment with Edarbi was well-tolerated with an overall incidence of adverse reactions similar to placebo'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 40 mg o 80 mg por comprimido, según la etiqueta; el activo va como azilsartán medoxomilo. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión en adultos, para reducir la presión arterial.',
    actua: 'El azilsartán medoxomilo es un profármaco que las esterasas convierten con rapidez, durante la absorción, en el principio activo azilsartán, un antagonista de los receptores de la angiotensina II.',
    recorrido: 'El azilsartán medoxomilo se hidroliza a azilsartán, el metabolito activo, en el tubo digestivo durante la absorción; no se detecta en el plasma. Tras una dosis oral marcada, alrededor del 55 % de la radiactividad se recuperó en las heces y el 42 % en la orina; el 15 % de la dosis salió por la orina como azilsartán.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '3 · Formas y concentraciones',
            cita: 'Edarbi is supplied as white to nearly white round tablets in the following dosage strengths',
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
      ocurre: 'El azilsartán medoxomilo se hidroliza a azilsartán, el metabolito activo, en el tubo digestivo durante la absorción; no se detecta en el plasma.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El azilsartán medoxomilo se hidroliza a azilsartán, el metabolito activo, en el tubo digestivo durante la absorción; no se detecta en el plasma.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'Azilsartan medoxomil is hydrolyzed to azilsartan, the active metabolite, in the gastrointestinal tract during absorption',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta estimada del azilsartán es de aproximadamente el 60 %.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated absolute bioavailability of azilsartan following administration of azilsartan medoxomil is approximately 60%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas de azilsartán se alcanzan entre 1,5 y 3 horas después de la dosis oral; los alimentos no afectan a su biodisponibilidad.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations (C max ) of azilsartan are reached within 1.5 to 3 hours',
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
      ocurre: 'El azilsartán se une en más del 99 % a las proteínas del plasma humano, sobre todo a la albúmina; su volumen de distribución es de unos 16 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El azilsartán se une en más del 99 % a las proteínas del plasma humano, sobre todo a la albúmina; su volumen de distribución es de unos 16 L.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'Azilsartan is highly bound to human plasma proteins (>99%), mainly serum albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'En ratas, una cantidad mínima de radiactividad asociada al azilsartán cruzó la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'In rats, minimal azilsartan-associated radioactivity crossed the blood-brain barrier',
            codigo: '43682-4'
          },
          poblacion: 'ratas'
        }
      ],
      accion: {
        diana: 'Receptores de la angiotensina II',
        efecto: 'El azilsartán medoxomilo es un profármaco que las esterasas convierten con rapidez, durante la absorción, en el principio activo azilsartán, un antagonista de los receptores de la angiotensina II.',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'El azilsartán medoxomilo es un profármaco que las esterasas convierten con rapidez, durante la absorción, en el principio activo azilsartán, un antagonista de los receptores de la angiotensina II.',
            ref: {
              f: 'dailymed-azilsartan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Azilsartan medoxomil is an orally administered prodrug that is rapidly converted by esterases during absorption to the active moiety, azilsartan',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza a dos metabolitos principales: el mayoritario (M-II) se forma por O-desalquilación y el minoritario (M-I), por descarboxilación; la enzima principal es la CYP2C9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza a dos metabolitos principales: el mayoritario (M-II) se forma por O-desalquilación y el minoritario (M-I), por descarboxilación; la enzima principal es la CYP2C9.',
          ref: { f: 'dailymed-azilsartan', sec: '12.3 · Farmacocinética', cita: 'Azilsartan is metabolized to two primary metabolites', codigo: '43682-4' }
        },
        {
          t: 'La enzima principal del metabolismo del azilsartán es la CYP2C9.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'The major enzyme responsible for azilsartan metabolism is CYP2C9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos M-I y M-II',
          actividad: 'inactivo',
          nota: 'No contribuyen a la actividad farmacológica; la exposición a M-II es de alrededor del 50 % de la del azilsartán.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'M-I and M-II do not contribute to the pharmacologic activity of Edarbi',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 55 % de la radiactividad se recuperó en las heces y el 42 % en la orina; el 15 % de la dosis salió por la orina como azilsartán.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 55 % de la radiactividad se recuperó en las heces y el 42 % en la orina; el 15 % de la dosis salió por la orina como azilsartán.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 55% of radioactivity was recovered in feces and approximately 42% in urine, with 15% of the dose excreted in urine as azilsartan',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación del azilsartán es de unas 11 horas.',
          ref: {
            f: 'dailymed-azilsartan',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of azilsartan is approximately 11 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta estimada',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'azilsartán',
      ref: {
        f: 'dailymed-azilsartan',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated absolute bioavailability of azilsartan following administration of azilsartan medoxomil is approximately 60%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,5-3',
      unidad: 'h',
      analito: 'azilsartán',
      ref: {
        f: 'dailymed-azilsartan',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations (C max ) of azilsartan are reached within 1.5 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'azilsartán',
      ref: {
        f: 'dailymed-azilsartan',
        sec: '12.3 · Farmacocinética',
        cita: 'Azilsartan is highly bound to human plasma proteins (>99%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '16 (aprox.)',
      unidad: 'L',
      analito: 'azilsartán',
      ref: {
        f: 'dailymed-azilsartan',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of azilsartan is approximately 16 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '11 (aprox.)',
      unidad: 'h',
      analito: 'azilsartán',
      ref: {
        f: 'dailymed-azilsartan',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of azilsartan is approximately 11 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '55 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de azilsartán medoxomilo marcado',
      ref: { f: 'dailymed-azilsartan', sec: '12.3 · Farmacocinética', cita: 'approximately 55% of radioactivity was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-azilsartan', '52b27c75-9f5a-4816-bafd-dace9d7d2063', 'EDARBI (AZILSARTAN KAMEDOXOMIL) TABLET', 'Edarbi', '17', '2024-01-31', '2026-11-15'),
    rengPubchem(135409642, 'azilsartan', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
