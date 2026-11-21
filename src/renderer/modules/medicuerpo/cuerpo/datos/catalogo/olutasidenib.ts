import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'olutasidenib',
    nombre: 'Olutasidenib',
    clase: 'Inhibidor de la isocitrato deshidrogenasa 1 mutada (IDH1)',
    sinonimos: [ 'olutasidenib', 'Rezlidhia' ],
    formula: 'C18H15ClN4O2',
    masaMolar: 354.8,
    smiles: 'C[C@@H](C1=CC2=C(C=CC(=C2)Cl)NC1=O)NC3=CC=C(N(C3=O)C)C#N',
    inchikey: 'NEQYWYXGTJDAKR-JTQLQIEISA-N',
    cid: 118955396,
    iupac: '5-[[(1S)-1-(6-chloro-2-oxo-1H-quinolin-3-yl)ethyl]amino]-1-methyl-6-oxopyridine-2-carbonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'olutasidenib-oral',
      producto: 'REZLIDHIA · cápsula',
      titular: 'RIGEL PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg por cápsula, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'magnesium stearate',
        'microcrystalline cellulose',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia mieloide aguda recidivante o refractaria con una mutación sensible de IDH1.',
        ref: {
          f: 'dailymed-olutasidenib',
          sec: '1 · Indicaciones',
          cita: 'REZLIDHIA is indicated for the treatment of adult patients with relapsed or refractory acute myeloid leukemia (AML) with a susceptible isocitrate dehydrogenase-1 (IDH1) mutation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-olutasidenib',
      advertencias: [
        {
          titulo: 'Síndrome de diferenciación',
          texto: 'Puede ser mortal; ante la sospecha, interrumpirlo e iniciar corticoides y vigilancia hemodinámica.',
          organos: [],
          ref: {
            f: 'dailymed-olutasidenib',
            sec: 'Advertencia destacada',
            cita: 'Differentiation syndrome, which can be fatal, can occur with REZLIDHIA treatment',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar con frecuencia los síntomas de disfunción hepática, como fatiga, anorexia, molestias en el hipocondrio derecho, orina oscura o ictericia.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients frequently for clinical symptoms of hepatic dysfunction such as fatigue, anorexia, right upper abdominal discomfort, dark urine, or jaundice',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más, con laboratorio): aumento de AST y ALT, descenso de potasio y sodio, aumento de fosfatasa alcalina y náuseas, entre otras.',
          '34084-4',
          'The most common (≥20%) adverse reactions, including laboratory abnormalities, are aspartate aminotransferase increased, alanine aminotransferase increased, potassium decreased, sodium decreased'
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
    contiene: 'Cápsula: 150 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia mieloide aguda recidivante o refractaria con una mutación sensible de IDH1.',
    actua: 'Inhibe la isocitrato deshidrogenasa 1 mutada, que eleva el 2-hidroxiglutarato en las células leucémicas.',
    recorrido: 'La mediana del tiempo hasta el pico es de unas 4 horas tras 150 mg; una comida rica en grasas aumenta la Cmax un 191 % y el AUC un 83 %. Tras 150 mg marcados en sujetos sanos, alrededor del 75 % se recuperó en las heces (35 % sin cambios) y el 17 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: { f: 'dailymed-olutasidenib', sec: '3 · Formas y concentraciones', cita: '150 mg opaque white capsules imprinted with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de unas 4 horas tras 150 mg; una comida rica en grasas aumenta la Cmax un 191 % y el AUC un 83 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de unas 4 horas tras 150 mg; una comida rica en grasas aumenta la Cmax un 191 % y el AUC un 83 %.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (min, max) time to maximum concentration (t max ) of olutasidenib is approximately 4 (1, 8) hours following a single oral dose of 150 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax aumentó un 191 % y el AUC un 83 %.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'olutasidenib C max increased by 191% (20.6%) and AUC inf increased by 83% (18.3%) following administration of a single 150 mg dose of olutasidenib with a high-fat meal',
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
      ocurre: 'Se une en alrededor del 93 % a las proteínas plasmáticas; el volumen de distribución aparente es de 319 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 93 % a las proteínas plasmáticas; el volumen de distribución aparente es de 319 L.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of olutasidenib is approximately 93%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 319 L.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) apparent volume of distribution of olutasidenib is 319 (28.1%) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'IDH1 mutada',
        efecto: 'Inhibe la isocitrato deshidrogenasa 1 mutada, que eleva el 2-hidroxiglutarato en las células leucémicas.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la isocitrato deshidrogenasa 1 mutada, que eleva el 2-hidroxiglutarato en las células leucémicas.',
            ref: {
              f: 'dailymed-olutasidenib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Olutasidenib is a small-molecule inhibitor of mutated isocitrate dehydrogenase-1 (IDH1)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo (90 %) por la CYP3A4, con contribuciones menores de otras CYP.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo (90 %) por la CYP3A4, con contribuciones menores de otras CYP.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'Olutasidenib is primarily (90%) metabolized by cytochrome P450(CYP)3A4, with minor contributions from CYP2C8, CYP2C9, CYP1A2, and CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 150 mg marcados en sujetos sanos, alrededor del 75 % se recuperó en las heces (35 % sin cambios) y el 17 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 150 mg marcados en sujetos sanos, alrededor del 75 % se recuperó en las heces (35 % sin cambios) y el 17 % en la orina.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% of olutasidenib was recovered in feces (35% unchanged) and 17% in the urine (1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de unas 67 horas y el aclaramiento oral aparente, de 4 L/h.',
          ref: {
            f: 'dailymed-olutasidenib',
            sec: '12.3 · Farmacocinética',
            cita: 'of olutasidenib is approximately 67 (51.2%) hours and the mean (CV%) apparent oral clearance (CL/F) of olutasidenib is 4 (60.5%) L/h',
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
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'olutasidenib',
      condiciones: 'dosis única de 150 mg',
      ref: {
        f: 'dailymed-olutasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (min, max) time to maximum concentration (t max ) of olutasidenib is approximately 4 (1, 8) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93 (aprox.)',
      unidad: '%',
      analito: 'olutasidenib',
      ref: {
        f: 'dailymed-olutasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of olutasidenib is approximately 93%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '319',
      unidad: 'L',
      analito: 'olutasidenib',
      ref: {
        f: 'dailymed-olutasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) apparent volume of distribution of olutasidenib is 319 (28.1%) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '67 (aprox.)',
      unidad: 'h',
      analito: 'olutasidenib',
      ref: { f: 'dailymed-olutasidenib', sec: '12.3 · Farmacocinética', cita: 'of olutasidenib is approximately 67 (51.2%) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '4',
      unidad: 'L/h',
      analito: 'olutasidenib',
      ref: {
        f: 'dailymed-olutasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent oral clearance (CL/F) of olutasidenib is 4 (60.5%) L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '75 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 150 mg',
      ref: {
        f: 'dailymed-olutasidenib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 75% of olutasidenib was recovered in feces (35% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-olutasidenib', '4a0c7c8b-b95f-455d-9600-b7351e4397fe', 'REZLIDHIA (OLUTASIDENIB) CAPSULE', 'REZLIDHIA', '5', '2025-11-17', '2026-11-19'),
    rengPubchem(118955396, 'olutasidenib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
