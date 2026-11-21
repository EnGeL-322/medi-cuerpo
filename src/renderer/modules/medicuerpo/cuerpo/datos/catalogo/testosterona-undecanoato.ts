import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'testosterona-undecanoato',
    nombre: 'Undecanoato de testosterona',
    clase: 'Andrógeno oral (éster de testosterona)',
    sinonimos: [ 'testosterone undecanoate', 'Jatenzo' ],
    formula: 'C30H48O3',
    masaMolar: 456.7,
    smiles: 'CCCCCCCCCCC(=O)O[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CCC4=CC(=O)CC[C@]34C)C',
    inchikey: 'UDSFVOAUHKGBEK-CNQKSJKFSA-N',
    cid: 65157,
    iupac: '[(8R,9S,10R,13S,14S,17S)-10,13-dimethyl-3-oxo-1,2,6,7,8,9,11,12,14,15,16,17-dodecahydrocyclopenta[a]phenanthren-17-yl] undecanoate',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'testosterona-undecanoato-oral',
      producto: 'Jatenzo · cápsula blanda',
      titular: 'TOLMAR INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula blanda',
      formaFuente: 'CAPSULE, LIQUID FILLED',
      liberacion: 'no declarada',
      concentraciones: '158 mg, 198 mg o 237 mg por cápsula, según la etiqueta',
      excipientes: [
        'oleic acid',
        'polyoxyl 40 hydrogenated castor oil',
        'borage oil',
        'peppermint oil',
        'butylated hydroxytoluene',
        'gelatin',
        'sorbitol',
        'glycerin',
        'water',
        'ferric oxide red',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'Terapia sustitutiva con testosterona en varones adultos con déficit o ausencia de testosterona endógena (hipogonadismo primario o hipogonadotrópico).',
        ref: {
          f: 'dailymed-testosterona-undecanoato',
          sec: '1 · Indicaciones',
          cita: 'indicated for testosterone replacement therapy in adult males for conditions associated with a deficiency or absence of endogenous testosterone',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-testosterona-undecanoato',
      advertencias: [
        {
          titulo: 'Policitemia',
          texto: 'Medir el hematocrito aproximadamente cada 3 meses.',
          organos: [],
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Evaluate hematocrit approximately every 3 months while the patient is on JATENZO',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la presión arterial',
          texto: 'Medir la presión arterial periódicamente, sobre todo en hipertensos.',
          organos: [],
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure periodically in men using JATENZO, especially men with hypertension',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperplasia benigna de próstata y riesgo de cáncer de próstata',
          texto: 'Valorar el cáncer de próstata antes de empezar y durante el tratamiento.',
          organos: [ 'prostata' ],
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Evaluate patients for prostate cancer prior to initiating and during treatment with androgens',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 2 %): policitemia, diarrea, dispepsia, eructos, edema periférico, náuseas, aumento del hematocrito, cefalea, aumento de la próstata e hipertensión.',
          '34084-4',
          'Most common adverse reactions (incidence > 2%): polycythemia, diarrhea, dyspepsia, eructation, peripheral edema, nausea, increased hematocrit, headache, prostatomegaly, and hypertension'
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
    contiene: 'Cápsula blanda: 158 mg, 198 mg o 237 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Terapia sustitutiva con testosterona en varones adultos con déficit o ausencia de testosterona endógena (hipogonadismo primario o hipogonadotrópico).',
    actua: 'Los andrógenos endógenos, testosterona y dihidrotestosterona, son responsables del desarrollo de los órganos sexuales masculinos y del mantenimiento de los caracteres sexuales secundarios.',
    recorrido: 'Se toma con comida: la biodisponibilidad fue comparable con desayunos de 30 g o 45 g de grasa o muy grasos, pero hubo efecto de la comida con 15 g de grasa. Con testosterona intramuscular, alrededor del 90 % de la dosis se excreta en la orina como conjugados glucurónidos y sulfatos, y un 6 % por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula blanda tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula blanda: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '3 · Formas y concentraciones',
            cita: 'The 158 mg testosterone undecanoate capsules are opaque red and imprinted with',
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
      ocurre: 'Se toma con comida: la biodisponibilidad fue comparable con desayunos de 30 g o 45 g de grasa o muy grasos, pero hubo efecto de la comida con 15 g de grasa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se toma con comida: la biodisponibilidad fue comparable con desayunos de 30 g o 45 g de grasa o muy grasos, pero hubo efecto de la comida con 15 g de grasa.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'the bioavailability with the 30 g fat, 45 g fat, and high-calorie high-fat breakfasts was comparable',
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
      ocurre: 'La testosterona circulante se une sobre todo a la globulina transportadora de hormonas sexuales y a la albúmina; solo el 2 % queda libre.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La testosterona circulante se une sobre todo a la globulina transportadora de hormonas sexuales y a la albúmina; solo el 2 % queda libre.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'Circulating testosterone is primarily bound in serum to sex hormone-binding globulin (SHBG) and albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 40 % de la testosterona del plasma se une a la SHBG, el 2 % queda libre y el resto se une débilmente a la albúmina y otras proteínas.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 40% of testosterone in plasma is bound to SHBG, 2% remains unbound (free) and the rest is loosely bound to albumin and other proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Los andrógenos endógenos, testosterona y dihidrotestosterona, son responsables del desarrollo de los órganos sexuales masculinos y del mantenimiento de los caracteres sexuales secundarios.',
        lugar: [],
        datos: [
          {
            t: 'Los andrógenos endógenos, testosterona y dihidrotestosterona, son responsables del desarrollo de los órganos sexuales masculinos y del mantenimiento de los caracteres sexuales secundarios.',
            ref: {
              f: 'dailymed-testosterona-undecanoato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Endogenous androgens, including testosterone and dihydrotestosterone (DHT), are responsible for the normal growth and development of the male sex organs',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La testosterona se metaboliza a varios 17-cetoesteroides por dos vías; el ácido undecanoico se oxida como cualquier ácido graso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La testosterona se metaboliza a varios 17-cetoesteroides por dos vías; el ácido undecanoico se oxida como cualquier ácido graso.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'Testosterone is metabolized to various 17-keto steroids through two different pathways',
            codigo: '43682-4'
          }
        },
        {
          t: 'El ácido undecanoico se metaboliza por beta-oxidación, como los demás ácidos grasos.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'Undecanoic acid is metabolized like all fatty acids via the beta-oxidation pathway',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Dihidrotestosterona y estradiol',
          actividad: 'activo',
          nota: 'Metabolitos activos principales de la testosterona.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'The major active metabolites of testosterone are dihydrotestosterone (DHT) and estradiol',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con testosterona intramuscular, alrededor del 90 % de la dosis se excreta en la orina como conjugados glucurónidos y sulfatos, y un 6 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con testosterona intramuscular, alrededor del 90 % de la dosis se excreta en la orina como conjugados glucurónidos y sulfatos, y un 6 % por las heces.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'About 90% of a dose of testosterone given intramuscularly is excreted in the urine as glucuronic and sulfuric acid conjugates of testosterone and its metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 6 % de la dosis se excreta en las heces, sobre todo sin conjugar.',
          ref: {
            f: 'dailymed-testosterona-undecanoato',
            sec: '12.3 · Farmacocinética',
            cita: 'About 6% of a dose is excreted in the feces, mostly in the unconjugated form',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Testosterona unida a la SHBG',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'testosterona',
      ref: {
        f: 'dailymed-testosterona-undecanoato',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 40% of testosterone in plasma is bound to SHBG',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina (testosterona intramuscular)',
      valor: '90 (aprox.)',
      unidad: '% de la dosis',
      analito: 'testosterona y metabolitos',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-testosterona-undecanoato',
        sec: '12.3 · Farmacocinética',
        cita: 'About 90% of a dose of testosterone given intramuscularly is excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-testosterona-undecanoato', 'ed7b5d41-7475-4c10-99b9-b62b3434ae60', 'JATENZO (TESTOSTERONE UNDECANOATE) CAPSULE, LIQUID FILLED', 'Jatenzo', '16', '2026-10-15', '2026-11-19'),
    rengPubchem(65157, 'testosterone undecanoate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
