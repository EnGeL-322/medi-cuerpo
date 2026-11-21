import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'deferiprona',
    nombre: 'Deferiprona',
    clase: 'Quelante del hierro',
    sinonimos: [ 'deferiprone', 'Ferriprox' ],
    formula: 'C7H9NO2',
    masaMolar: 139.15,
    smiles: 'CC1=C(C(=O)C=CN1C)O',
    inchikey: 'TZXKOCQBRNJULO-UHFFFAOYSA-N',
    cid: 2972,
    iupac: '3-hydroxy-1,2-dimethylpyridin-4-one',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'deferiprona-oral',
      producto: 'FERRIPROX · comprimido recubierto con película',
      titular: 'CHIESI USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '1000 mg o 500 mg por comprimido, según la etiqueta',
      excipientes: [
        'magnesium stearate',
        'titanium dioxide',
        'hypromellose 2910 (5 mpa.s)',
        'methylcellulose (15 mpa.s)',
        'crospovidone (120 .mu.m)',
        'polyethylene glycol 8000',
        'hydroxypropyl cellulose (1600000 wamw)'
      ],
      usos: {
        t: 'Tratamiento de la sobrecarga de hierro transfusional en adultos y niños desde 8 años con talasemia, drepanocitosis u otras anemias.',
        ref: {
          f: 'dailymed-deferiprona',
          sec: '1 · Indicaciones',
          cita: 'FERRIPROX Tablets are indicated for the treatment of transfusional iron overload in adult and pediatric patients 8 years of age and older with thalassemia syndromes, sickle cell disease or other anemias',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-deferiprona',
      advertencias: [
        {
          titulo: 'Agranulocitosis y neutropenia',
          texto: 'Puede causar agranulocitosis con infecciones graves y muerte; hay que medir los neutrófilos antes de empezar y vigilarlos con regularidad.',
          organos: [],
          ref: {
            f: 'dailymed-deferiprona',
            sec: 'Advertencia destacada',
            cita: 'FERRIPROX can cause agranulocytosis that can lead to serious infections and death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Elevación de enzimas hepáticas',
          texto: 'Vigilarlas cada mes y suspender si se mantienen elevadas.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-deferiprona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Liver Enzyme Elevations: Monitor monthly and discontinue for persistent elevations',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Déficit de cinc',
          texto: 'Vigilar el cinc durante el tratamiento y suplementarlo si falta.',
          organos: [],
          ref: {
            f: 'dailymed-deferiprona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Zinc Deficiency: Monitor during therapy and supplement for deficiency',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la talasemia, las más frecuentes (6 % o más): náuseas, vómitos, dolor abdominal, artralgia, aumento de la ALT y neutropenia.',
          '34084-4',
          'most common adverse reactions in patients with thalassemia (incidence ≥ 6%) are nausea, vomiting, abdominal pain, arthralgia, ALT increased and neutropenia'
        ],
        [
          'La cromaturia (orina rojiza o marrón) se debe a la excreción de hierro en la orina.',
          '34084-4',
          'Chromaturia (reddish/brown discoloration of the urine) is a result of the excretion of iron in the urine'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 1000 mg o 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la sobrecarga de hierro transfusional en adultos y niños desde 8 años con talasemia, drepanocitosis u otras anemias.',
    actua: 'Es un quelante con afinidad por el ion férrico (hierro III): forma complejos neutros 3:1 estables a pH fisiológico.',
    recorrido: 'El pico sérico aparece a unas 2 horas de una dosis única en ayunas; una comida rica en grasas no cambió la Cmax ni el AUC. Entre el 75 % y el 90 % de la dosis se recuperó en la orina en las primeras 24 horas, sobre todo como metabolito; la semivida es de unas 2 horas.'
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
          ref: {
            f: 'dailymed-deferiprona',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets (twice a day): 1,000 mg, capsule-shaped, white to off-white tablets with functional scoring',
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
      ocurre: 'El pico sérico aparece a unas 2 horas de una dosis única en ayunas; una comida rica en grasas no cambió la Cmax ni el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico sérico aparece a unas 2 horas de una dosis única en ayunas; una comida rica en grasas no cambió la Cmax ni el AUC.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak serum concentrations of deferiprone occur approximately 2 hours after a single dose of FERRIPROX Tablets (twice a day) in fasted healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una comida rica en grasas, la Cmax y el AUC no cambiaron.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'the C max and the AUC of deferiprone remain unchanged after a high-fat meal',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente medio fue de 97 ± 28 L tras 1000 mg con alimentos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente medio fue de 97 ± 28 L tras 1000 mg con alimentos.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent mean ± SD volume of distribution (V/F) of deferiprone was 97 ± 28 L following oral administration of a 1,000 mg dose of FERRIPROX Tablets (twice a day) with food',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Ion férrico (hierro III)',
        efecto: 'Es un quelante con afinidad por el ion férrico (hierro III): forma complejos neutros 3:1 estables a pH fisiológico.',
        lugar: [],
        datos: [
          {
            t: 'Es un quelante con afinidad por el ion férrico (hierro III): forma complejos neutros 3:1 estables a pH fisiológico.',
            ref: {
              f: 'dailymed-deferiprona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Deferiprone is a chelating agent with an affinity for ferric ions (iron III). Deferiprone binds with ferric ions to form neutral 3:1 (deferiprone:iron) complexes that are stable at physiological pH',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la UGT1A6; su metabolito principal, el 3-O-glucurónido, no puede unirse al hierro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la UGT1A6; su metabolito principal, el 3-O-glucurónido, no puede unirse al hierro.',
          ref: { f: 'dailymed-deferiprona', sec: '12.3 · Farmacocinética', cita: 'Deferiprone is metabolized primarily by UGT1A6', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: '3-O-glucurónido de deferiprona',
          actividad: 'inactivo',
          nota: 'Metabolito principal, sin capacidad de unirse al hierro.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'The major metabolite of deferiprone is the 3- O -glucuronide, which lacks iron- binding capability',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 75 % y el 90 % de la dosis se recuperó en la orina en las primeras 24 horas, sobre todo como metabolito; la semivida es de unas 2 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 75 % y el 90 % de la dosis se recuperó en la orina en las primeras 24 horas, sobre todo como metabolito; la semivida es de unas 2 horas.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, 75% to 90% of the administered dose was recovered in urine (primarily as metabolite) in the first 24 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unas 2 horas.',
          ref: {
            f: 'dailymed-deferiprona',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of deferiprone is approximately 2 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico sérico en ayunas',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'deferiprona',
      poblacion: 'sujetos sanos',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-deferiprona',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak serum concentrations of deferiprone occur approximately 2 hours after a single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '97 ± 28',
      unidad: 'L',
      analito: 'deferiprona',
      condiciones: '1000 mg con alimentos',
      ref: {
        f: 'dailymed-deferiprona',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent mean ± SD volume of distribution (V/F) of deferiprone was 97 ± 28 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'deferiprona',
      ref: {
        f: 'dailymed-deferiprona',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of deferiprone is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina en 24 horas',
      valor: '75-90',
      unidad: '% de la dosis',
      analito: 'deferiprona y metabolito',
      ref: {
        f: 'dailymed-deferiprona',
        sec: '12.3 · Farmacocinética',
        cita: '75% to 90% of the administered dose was recovered in urine (primarily as metabolite) in the first 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-deferiprona', '946718ff-df43-1baa-74d1-e5bcfbe8ad86', 'FERRIPROX (DEFERIPRONE) TABLET FERRIPROX (DEFERIPRONE) TABLET, FILM COATED', 'FERRIPROX', '15', '2026-01-30', '2026-11-19'),
    rengPubchem(2972, 'deferiprone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
