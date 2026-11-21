import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'paltusotida',
    nombre: 'Paltusotida',
    clase: 'Agonista selectivo no peptídico del receptor de somatostatina 2 (SSTR2)',
    sinonimos: [ 'paltusotine', 'Palsonify' ],
    formula: 'C27H22F2N4O',
    masaMolar: 456.5,
    smiles: 'C1CN(CCC1N)C2=C3C=C(C=CC3=NC=C2C4=CC(=CC(=C4)F)F)C5=CC=CC(=C5O)C#N',
    inchikey: 'GHILNKWBALQPDP-UHFFFAOYSA-N',
    cid: 134168328,
    iupac: '3-[4-(4-aminopiperidin-1-yl)-3-(3,5-difluorophenyl)quinolin-6-yl]-2-hydroxybenzonitrile',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'paltusotida-oral',
      producto: 'PALSONIFY · comprimido recubierto con película',
      titular: 'CRINETICS PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg o 30 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de paltusotida',
        ref: { f: 'dailymed-paltusotida', sec: '11 · Descripción', cita: 'paltusotine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'copovidone k25-31',
        'mannitol',
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'silicon dioxide',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de adultos con acromegalia con respuesta insuficiente a la cirugía o en quienes no es una opción.',
        ref: {
          f: 'dailymed-paltusotida',
          sec: '1 · Indicaciones',
          cita: 'PALSONIFY is indicated for the treatment of adults with acromegaly who had an inadequate response to surgery and/or for whom surgery is not an option',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-paltusotida',
      advertencias: [
        {
          titulo: 'Colelitiasis y sus complicaciones',
          texto: 'Vigilar periódicamente; si hay complicaciones de la colelitiasis, suspender y tratar.',
          organos: [],
          ref: {
            f: 'dailymed-paltusotida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cholelithiasis and its Complications: Monitor periodically',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperglucemia e hipoglucemia',
          texto: 'Vigilar la glucosa y ajustar el tratamiento antidiabético si hace falta.',
          organos: [],
          ref: {
            f: 'dailymed-paltusotida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hyperglycemia and Hypoglycemia: Monitor glucose and adjust antidiabetic treatment as needed',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteraciones cardiovasculares',
          texto: 'Puede aparecer bradicardia o trastornos de la conducción.',
          organos: [],
          ref: {
            f: 'dailymed-paltusotida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiovascular Abnormalities: Bradycardia or conduction abnormalities may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más) son diarrea, dolor abdominal, náuseas, disminución del apetito, bradicardia sinusal, hiperglucemia, palpitaciones y gastroenteritis.',
          '34084-4',
          'Most common adverse reactions (≥5%) are diarrhea, abdominal pain, nausea, decreased appetite, sinus bradycardia, hyperglycemia, palpitations, and gastroenteritis'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran los cambios en las cifras de vitamina B12.',
          '34084-4',
          'hanges in Vitamin B 12 Levels'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg o 30 mg por comprimido, según la etiqueta; el activo va como clorhidrato de paltusotida. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con acromegalia con respuesta insuficiente a la cirugía o en quienes no es una opción.',
    actua: 'Como la somatostatina natural, suprime la secreción de hormona del crecimiento y de IGF-1 mediante un agonismo selectivo del receptor de somatostatina 2.',
    recorrido: 'La mediana del tmax es de 1 a 4 horas; las comidas reducen mucho la absorción (una comida grasa bajó el AUC un 85 % y la Cmax un 81 %). La excreción fecal es la vía predominante: el 90 % de la radiactividad se recuperó en las heces y el 3,9 % en la orina; el fármaco sin cambios es un componente importante de las excretas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-paltusotida', sec: '3 · Formas y concentraciones', cita: '20 mg: pink, biconvex oval tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de 1 a 4 horas; las comidas reducen mucho la absorción (una comida grasa bajó el AUC un 85 % y la Cmax un 81 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 1 a 4 horas; las comidas reducen mucho la absorción (una comida grasa bajó el AUC un 85 % y la Cmax un 81 %).',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'the median time to maximum plasma concentration (t max ) is 1 to 4 hours regardless of post dose fasting duration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo el AUC un 85 % y la Cmax un 81 % frente al ayuno.',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'administration of paltusotine with a high-fat meal (800 to 1000 calories, 50% to 60% fat) reduced the AUC by 85% and the C max by 81%',
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
      ocurre: 'El volumen de distribución es de 220 L y la unión a proteínas plasmáticas del 99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución es de 220 L y la unión a proteínas plasmáticas del 99 %.',
          ref: { f: 'dailymed-paltusotida', sec: '12.3 · Farmacocinética', cita: 'Paltusotine is highly plasma protein bound (99%)', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución de 220 L.',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution (V z ) of paltusotine is 220 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de somatostatina 2 (SSTR2)',
        efecto: 'Como la somatostatina natural, suprime la secreción de hormona del crecimiento y de IGF-1 mediante un agonismo selectivo del receptor de somatostatina 2.',
        lugar: [],
        datos: [
          {
            t: 'Como la somatostatina natural, suprime la secreción de hormona del crecimiento y de IGF-1 mediante un agonismo selectivo del receptor de somatostatina 2.',
            ref: {
              f: 'dailymed-paltusotida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Paltusotine exerts its pharmacological activity via selective agonism (>4000-fold) at somatostatin receptor 2 (SSTR2) and exhibits little or no affinity for other SST receptor subtypes',
              codigo: '43679-0'
            }
          },
          {
            t: 'Suprime la secreción de hormona del crecimiento (GH) y de IGF-1.',
            ref: {
              f: 'dailymed-paltusotida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Similar to the natural hormone somatostatin, paltusotine suppresses growth hormone (GH) and insulin-like growth factor-1 (IGF-1) secretion',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado por glucuronidación (UGT1A1 y UGT1A9) y, de forma secundaria, por oxidación mediante la CYP3A4/5.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado por glucuronidación (UGT1A1 y UGT1A9) y, de forma secundaria, por oxidación mediante la CYP3A4/5.',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'Paltusotine is metabolized primarily in the liver via glucuronidation and oxidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción fecal es la vía predominante: el 90 % de la radiactividad se recuperó en las heces y el 3,9 % en la orina; el fármaco sin cambios es un componente importante de las excretas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción fecal es la vía predominante: el 90 % de la radiactividad se recuperó en las heces y el 3,9 % en la orina; el fármaco sin cambios es un componente importante de las excretas.',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'fecal excretion was the predominant route of elimination with observed mean recovery of total administered radioactivity being 90% in feces and 3.9% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente es de 28 horas.',
          ref: {
            f: 'dailymed-paltusotida',
            sec: '12.3 · Farmacocinética',
            cita: 'paltusotine concentration declined with apparent terminal half-life (t ½ ) of 28 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '1-4',
      unidad: 'h',
      analito: 'paltusotida',
      ref: {
        f: 'dailymed-paltusotida',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to maximum plasma concentration (t max ) is 1 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '220',
      unidad: 'L',
      analito: 'paltusotida',
      ref: {
        f: 'dailymed-paltusotida',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution (V z ) of paltusotine is 220 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99',
      unidad: '%',
      analito: 'paltusotida',
      ref: { f: 'dailymed-paltusotida', sec: '12.3 · Farmacocinética', cita: 'Paltusotine is highly plasma protein bound (99%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '28',
      unidad: 'h',
      analito: 'paltusotida',
      ref: { f: 'dailymed-paltusotida', sec: '12.3 · Farmacocinética', cita: 'apparent terminal half-life (t ½ ) of 28 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '90',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-paltusotida',
        sec: '12.3 · Farmacocinética',
        cita: 'total administered radioactivity being 90% in feces and 3.9% in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-paltusotida', '8a6d2ce0-a621-4ee7-983c-977cd948ff4d', 'PALSONIFY (PALTUSOTINE) TABLET, FILM COATED', 'PALSONIFY', '3', '2025-10-03', '2026-11-19'),
    rengPubchem(134168328, 'paltusotine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
