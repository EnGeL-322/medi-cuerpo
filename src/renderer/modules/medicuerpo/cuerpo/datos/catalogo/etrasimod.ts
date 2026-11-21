import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'etrasimod',
    nombre: 'Etrasimod',
    clase: 'Modulador de los receptores de esfingosina-1-fosfato 1, 4 y 5',
    sinonimos: [ 'etrasimod', 'Velsipity' ],
    formula: 'C26H26F3NO3',
    masaMolar: 457.5,
    smiles: 'C1CCC(C1)C2=C(C=C(C=C2)COC3=CC4=C(C=C3)NC5=C4CC[C@@H]5CC(=O)O)C(F)(F)F',
    inchikey: 'MVGWUTBTXDYMND-QGZVFWFLSA-N',
    cid: 44623998,
    iupac: '2-[(3R)-7-[[4-cyclopentyl-3-(trifluoromethyl)phenyl]methoxy]-1,2,3,4-tetrahydrocyclopenta[b]indol-3-yl]acetic acid',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'etrasimod-oral',
      producto: 'Velsipity · comprimido recubierto con película',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Etrasimod arginine', ref: { f: 'dailymed-etrasimod', sec: '11 · Descripción', cita: 'etrasimod arginine', codigo: '34089-3' } },
      excipientes: [
        'magnesium stearate',
        'mannitol',
        'microcrystalline cellulose',
        'sodium starch glycolate type a',
        'fd&c blue no. 1 aluminum lake',
        'fd&c blue no. 2 aluminum lake',
        'fd&c yellow no. 5 aluminum lake',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la colitis ulcerosa activa moderada o grave en adultos.',
        ref: {
          f: 'dailymed-etrasimod',
          sec: '1 · Indicaciones',
          cita: 'VELSIPITY is indicated for the treatment of moderately to severely active ulcerative colitis (UC) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-etrasimod',
      advertencias: [
        {
          titulo: 'Infecciones',
          texto: 'Puede aumentar el riesgo de infecciones; hacer un hemograma antes de empezar y vigilar durante el tratamiento y 5 semanas después.',
          organos: [],
          ref: {
            f: 'dailymed-etrasimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'Infections : May increase the risk of infections. Obtain a complete blood count (CBC) before initiation of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradiarritmia y retrasos de la conducción auriculoventricular',
          texto: 'Puede reducir de forma transitoria la frecuencia cardíaca y retrasar la conducción; requiere un electrocardiograma previo.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-etrasimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'May result in a transient decrease in heart rate and AV conduction delays',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): cefalea, elevación de las pruebas hepáticas y mareo.',
          '34084-4',
          'Most common adverse reactions (incidence ≥5%) are: headache, elevated liver tests, and dizziness'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran el edema macular, el aumento de la presión arterial y el riesgo fetal.',
          '34084-4',
          'Macular Edema [see Warnings and Precautions (5.4) ] • Increased Blood Pressure [see Warnings and Precautions (5.5) ] • Fetal Risk'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2 mg por comprimido, según la etiqueta; el activo va como etrasimod arginine. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la colitis ulcerosa activa moderada o grave en adultos.',
    actua: 'Se une con alta afinidad a los receptores S1P1, S1P4 y S1P5 y bloquea de forma parcial y reversible la salida de linfocitos de los órganos linfoides, lo que reduce los linfocitos de la sangre periférica.',
    recorrido: 'La mediana del tiempo hasta la Cmax es de unas 4 horas (2 a 8); una comida rica en grasas no produjo diferencias clínicamente significativas. Alrededor del 82 % de la dosis radiactiva se recuperó en las heces y el 5 % en la orina en 336 horas; el 11 % salió como etrasimod sin cambios en las heces.'
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
            f: 'dailymed-etrasimod',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 2 mg of etrasimod as a round, green, film-coated tablet',
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
      ocurre: 'La mediana del tiempo hasta la Cmax es de unas 4 horas (2 a 8); una comida rica en grasas no produjo diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la Cmax es de unas 4 horas (2 a 8); una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) time to reach etrasimod C max (T max ) is approximately 4 hours (range 2 to 8 hours) after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas no hubo diferencias clínicamente significativas en su farmacocinética.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in the pharmacokinetics of etrasimod were observed following administration of VELSIPITY with a high-fat meal',
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
      ocurre: 'El volumen de distribución aparente medio es de 66 L y la unión a las proteínas del plasma del 97,9 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente medio es de 66 L y la unión a las proteínas del plasma del 97,9 %.',
          ref: { f: 'dailymed-etrasimod', sec: '12.3 · Farmacocinética', cita: 'Etrasimod plasma protein binding is 97.9%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente medio de 66 L.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of etrasimod is 66 (24) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de esfingosina-1-fosfato S1P1, S1P4 y S1P5',
        efecto: 'Se une con alta afinidad a los receptores S1P1, S1P4 y S1P5 y bloquea de forma parcial y reversible la salida de linfocitos de los órganos linfoides, lo que reduce los linfocitos de la sangre periférica.',
        lugar: [ 'sangre' ],
        datos: [
          {
            t: 'Se une con alta afinidad a los receptores S1P1, S1P4 y S1P5 y bloquea de forma parcial y reversible la salida de linfocitos de los órganos linfoides, lo que reduce los linfocitos de la sangre periférica.',
            ref: {
              f: 'dailymed-etrasimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Etrasimod partially and reversibly blocks the capacity of lymphocytes to egress from lymphoid organs, reducing the number of lymphocytes in peripheral blood',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su mecanismo en la colitis ulcerosa se desconoce, pero podría consistir en reducir la migración de linfocitos a los intestinos.',
            ref: {
              f: 'dailymed-etrasimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'may involve the reduction of lymphocyte migration into the intestines',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por oxidación y deshidrogenación, sobre todo mediante CYP2C8, CYP2C9 y CYP3A4, y por conjugación, sobre todo con UGT; el etrasimod sin cambios es el componente principal en el plasma.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por oxidación y deshidrogenación, sobre todo mediante CYP2C8, CYP2C9 y CYP3A4, y por conjugación, sobre todo con UGT; el etrasimod sin cambios es el componente principal en el plasma.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Etrasimod is metabolized by oxidation and dehydrogenation mediated primarily by CYP2C8, CYP2C9, and CYP3A4, with a minor contribution by CYP2C19 and CYP2J2',
            codigo: '43682-4'
          }
        },
        {
          t: 'También se conjuga, sobre todo mediante UGT, con una contribución menor de sulfotransferasas.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Etrasimod also undergoes conjugation primarily mediated by UGTs, with a minor contribution by sulfotransferases',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 82 % de la dosis radiactiva se recuperó en las heces y el 5 % en la orina en 336 horas; el 11 % salió como etrasimod sin cambios en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 82 % de la dosis radiactiva se recuperó en las heces y el 5 % en la orina en 336 horas; el 11 % salió como etrasimod sin cambios en las heces.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 82% of total radioactive etrasimod dose was recovered in the feces and 5% in the urine within 336 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación plasmática media es de unas 30 horas y el aclaramiento oral aparente de alrededor de 1 L/h.',
          ref: {
            f: 'dailymed-etrasimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma elimination half-life (t 1/2 ) of etrasimod is approximately 30 hours with an apparent steady-state oral clearance of approximately 1 L/h after oral administration',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la Cmax',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'etrasimod',
      ref: {
        f: 'dailymed-etrasimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) time to reach etrasimod C max (T max ) is approximately 4 hours (range 2 to 8 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '66',
      unidad: 'L',
      analito: 'etrasimod',
      ref: {
        f: 'dailymed-etrasimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of etrasimod is 66 (24) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,9',
      unidad: '%',
      analito: 'etrasimod',
      ref: { f: 'dailymed-etrasimod', sec: '12.3 · Farmacocinética', cita: 'Etrasimod plasma protein binding is 97.9%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '30 (aprox.)',
      unidad: 'h',
      analito: 'etrasimod',
      ref: {
        f: 'dailymed-etrasimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma elimination half-life (t 1/2 ) of etrasimod is approximately 30 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente en estado estacionario',
      valor: '1 (aprox.)',
      unidad: 'L/h',
      analito: 'etrasimod',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-etrasimod',
        sec: '12.3 · Farmacocinética',
        cita: 'with an apparent steady-state oral clearance of approximately 1 L/h after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis radiactiva recuperada en las heces',
      valor: '82 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-etrasimod',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 82% of total radioactive etrasimod dose was recovered in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-etrasimod', '65171e4a-d136-4abc-b08c-c40c1b486ff6', 'VELSIPITY (ETRASIMOD) TABLET, FILM COATED', 'Velsipity', '4', '2025-08-21', '2026-11-19'),
    rengPubchem(44623998, 'etrasimod', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
