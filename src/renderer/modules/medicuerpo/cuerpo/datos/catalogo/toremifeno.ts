import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'toremifeno',
    nombre: 'Toremifeno',
    clase: 'Agonista/antagonista de los receptores de estrógenos',
    sinonimos: [ 'toremifene citrate', 'Fareston' ],
    formula: 'C26H28ClNO',
    masaMolar: 406,
    smiles: 'CN(C)CCOC1=CC=C(C=C1)/C(=C(/CCCl)\\C2=CC=CC=C2)/C3=CC=CC=C3',
    inchikey: 'XFCLJVABOIYOMF-QPLCGJKRSA-N',
    cid: 3005573,
    iupac: '2-[4-[(Z)-4-chloro-1,2-diphenylbut-1-enyl]phenoxy]-N,N-dimethylethanamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'toremifeno-oral',
      producto: 'Fareston · comprimido',
      titular: 'KYOWA KIRIN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '60 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Citrato de toremifeno', ref: { f: 'dailymed-toremifeno', sec: '11 · Descripción', cita: 'toremifene citrate', codigo: '34089-3' } },
      excipientes: [
        'silicon dioxide',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'sodium starch glycolate type a',
        'starch, corn',
        'water'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama metastásico en mujeres posmenopáusicas con tumores con receptores de estrógenos positivos o desconocidos.',
        ref: {
          f: 'dailymed-toremifeno',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of metastatic breast cancer in postmenopausal women with estrogen-receptor positive or unknown tumors',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-toremifeno',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Prolonga el QTc según la dosis y la concentración; puede causar torsade de pointes.',
          organos: [],
          ref: {
            f: 'dailymed-toremifeno',
            sec: 'Advertencia destacada',
            cita: 'FARESTON has been shown to prolong the QTc interval in a dose- and concentration-related manner',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se han descrito aumentos graves de transaminasas e hiperbilirrubinemia, con ictericia, hepatitis o hígado graso no alcohólico.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-toremifeno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hepatotoxicity, both increases in the serum concentration for grade 3 and 4 transaminitis and hyperbilirubinemia, including jaundice, hepatitis, and non-alcoholic fatty liver disease',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Embarazo',
          texto: 'Puede dañar al feto; evitar el embarazo durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-toremifeno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Fetal harm may occur when administered to a pregnant woman',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: sofocos, sudoración, náuseas y flujo vaginal.',
          '34084-4',
          'Most common adverse reactions are hot flashes, sweating, nausea and vaginal discharge'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 60 mg por comprimido, según la etiqueta; el activo va como citrato de toremifeno. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama metastásico en mujeres posmenopáusicas con tumores con receptores de estrógenos positivos o desconocidos.',
    actua: 'Se une a los receptores de estrógenos y puede ejercer efectos estrogénicos, antiestrogénicos o ambos; en humanos predomina la acción antiestrogénica de este tipo de derivados.',
    recorrido: 'Se absorbe bien por vía oral, sin influencia de la comida, y el pico aparece en las 3 primeras horas. Se elimina como metabolitos sobre todo por las heces; alrededor del 10 % sale por la orina en una semana.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablet is 60 mg, round, convex, unscored, uncoated, and white, or almost white',
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
      ocurre: 'Se absorbe bien por vía oral, sin influencia de la comida, y el pico aparece en las 3 primeras horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien por vía oral, sin influencia de la comida, y el pico aparece en las 3 primeras horas.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Toremifene is well absorbed after oral administration and absorption is not influenced by food',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico plasmático se alcanza en un plazo de 3 horas.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations are obtained within 3 hours',
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
      ocurre: 'Tiene un volumen de distribución aparente de 580 L y se une en más del 99,5 % a las proteínas del suero, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tiene un volumen de distribución aparente de 580 L y se une en más del 99,5 % a las proteínas del suero, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Toremifene has an apparent volume of distribution of 580 L and binds extensively (>99.5%) to serum proteins, mainly albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de estrógenos',
        efecto: 'Se une a los receptores de estrógenos y puede ejercer efectos estrogénicos, antiestrogénicos o ambos; en humanos predomina la acción antiestrogénica de este tipo de derivados.',
        lugar: [],
        datos: [
          {
            t: 'Se une a los receptores de estrógenos y puede ejercer efectos estrogénicos, antiestrogénicos o ambos; en humanos predomina la acción antiestrogénica de este tipo de derivados.',
            ref: {
              f: 'dailymed-toremifeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Toremifene binds to estrogen receptors and may exert estrogenic, antiestrogenic, or both activities',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente, sobre todo por la CYP3A4, a N-desmetiltoremifeno, también antiestrogénico pero con poca potencia antitumoral in vivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente, sobre todo por la CYP3A4, a N-desmetiltoremifeno, también antiestrogénico pero con poca potencia antitumoral in vivo.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Toremifene is extensively metabolized, principally by CYP3A4 to N-demethyltoremifene which is also antiestrogenic but with weak in vivo antitumor potency',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetiltoremifeno',
          actividad: 'activo',
          nota: 'Antiestrogénico, con poca potencia antitumoral in vivo.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'principally by CYP3A4 to N-demethyltoremifene which is also antiestrogenic but with weak in vivo antitumor potency',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina como metabolitos sobre todo por las heces; alrededor del 10 % sale por la orina en una semana.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina como metabolitos sobre todo por las heces; alrededor del 10 % sale por la orina en una semana.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Toremifene is eliminated as metabolites primarily in the feces, with about 10% excreted in the urine during a 1-week period',
            codigo: '43682-4'
          }
        },
        {
          t: 'La eliminación es lenta, en parte por la circulación enterohepática.',
          ref: {
            f: 'dailymed-toremifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Elimination of toremifene is slow, in part because of enterohepatic circulation',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de unos 5 días.',
          ref: { f: 'dailymed-toremifeno', sec: '12.3 · Farmacocinética', cita: 'an elimination half-life of about 5 days', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 3',
      unidad: 'h',
      analito: 'toremifeno',
      ref: { f: 'dailymed-toremifeno', sec: '12.3 · Farmacocinética', cita: 'Peak plasma concentrations are obtained within 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '580',
      unidad: 'L',
      analito: 'toremifeno',
      ref: {
        f: 'dailymed-toremifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'Toremifene has an apparent volume of distribution of 580 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas séricas',
      valor: '> 99,5',
      unidad: '%',
      analito: 'toremifeno',
      ref: {
        f: 'dailymed-toremifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'binds extensively (>99.5%) to serum proteins, mainly albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '5 (aprox.)',
      unidad: 'días',
      analito: 'toremifeno',
      ref: { f: 'dailymed-toremifeno', sec: '12.3 · Farmacocinética', cita: 'an elimination half-life of about 5 days', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total medio',
      valor: '5 (aprox.)',
      unidad: 'L/h',
      analito: 'toremifeno',
      ref: {
        f: 'dailymed-toremifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean total clearance of toremifene was approximately 5 L/h',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-toremifeno', '2cab8dd1-3a10-48e6-86ce-0e5275ed49e5', 'FARESTON (TOREMIFENE CITRATE) TABLET', 'Fareston', '11', '2024-11-15', '2026-11-19'),
    rengPubchem(3005573, 'toremifene citrate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
