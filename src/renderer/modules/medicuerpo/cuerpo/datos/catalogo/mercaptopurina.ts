import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mercaptopurina',
    nombre: 'Mercaptopurina',
    clase: 'Antimetabolito análogo de purina',
    sinonimos: [ 'mercaptopurina', 'mercaptopurine', '6-MP' ],
    formula: 'C5H4N4S',
    masaMolar: 152.18,
    smiles: 'C1=NC2=C(N1)C(=S)N=CN2',
    inchikey: 'GLVAUDGFNGKCSF-UHFFFAOYSA-N',
    cid: 667490,
    iupac: '3,7-dihydropurine-6-thione',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'mercaptopurina-oral',
      producto: 'Mercaptopurine · comprimido',
      titular: 'HIKMA PHARMACEUTICALS USA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Mercaptopurine', ref: { f: 'dailymed-mercaptopurina', sec: '11 · Descripción', cita: 'Mercaptopurine', codigo: '34089-3' } },
      excipientes: [
        'starch, corn',
        'hypromellose, unspecified',
        'anhydrous lactose',
        'lactose monohydrate',
        'magnesium stearate',
        'starch, potato',
        'sodium starch glycolate type a potato',
        'stearic acid',
        'water'
      ],
      usos: {
        t: 'Tratamiento de mantenimiento de la leucemia linfoblástica aguda en adultos y niños como parte de quimioterapia combinada.',
        ref: {
          f: 'dailymed-mercaptopurina',
          sec: '1 · Indicaciones',
          cita: 'patients with acute lymphoblastic leukemia (ALL) as part of a combination chemother',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mercaptopurina',
      reacciones: [
        [
          'Mielosupresión con anemia, leucopenia o trombocitopenia.',
          '34084-4',
          'myelosuppression, including anemia, leukopenia and thrombocytopenia'
        ],
        [ 'Pérdida de apetito, náuseas, vómitos y diarrea.', '34084-4', 'include anorexia, nausea, vomiting, diarrhea' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg por comprimido, según la etiqueta; el activo va como mercaptopurine. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de mantenimiento de la leucemia linfoblástica aguda en adultos y niños como parte de quimioterapia combinada.',
    actua: 'Se activa dentro de las células en nucleótidos de tioguanina que pueden incorporarse al ADN o al ARN.',
    recorrido: 'La etiqueta presenta concentraciones medidas tras dosis oral en ayunas. En estudios con comida disminuyó la exposición. En el estudio con dosis oral marcada se recuperó un 46 % en orina en las primeras 24 h, como fármaco y metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral ranurado de mercaptopurina.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral ranurado de mercaptopurina.',
          ref: { f: 'dailymed-mercaptopurina', sec: '3 · Formas y concentraciones', cita: 'pale yellow, biconvex tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La etiqueta presenta concentraciones medidas tras dosis oral en ayunas. En estudios con comida disminuyó la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La etiqueta presenta concentraciones medidas tras dosis oral en ayunas. En estudios con comida disminuyó la exposición.',
          ref: {
            f: 'dailymed-mercaptopurina',
            sec: '12.3 · Farmacocinética',
            cita: 'Food has been shown to decrease the exposure of mercaptopurine',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución solía superar el del agua corporal total y la entrada al líquido cefalorraquídeo fue insignificante.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución solía superar el del agua corporal total y la entrada al líquido cefalorraquídeo fue insignificante.',
          ref: {
            f: 'dailymed-mercaptopurina',
            sec: '12.3 · Farmacocinética',
            cita: 'negligible entry of mercaptopurine into cerebrospinal fluid',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Nucleótidos de tioguanina',
        efecto: 'Se activa dentro de las células en nucleótidos de tioguanina que pueden incorporarse al ADN o al ARN.',
        lugar: [ 'sangre', 'medula-osea' ],
        datos: [
          {
            t: 'Se activa dentro de las células en nucleótidos de tioguanina que pueden incorporarse al ADN o al ARN.',
            ref: { f: 'dailymed-mercaptopurina', sec: '12.1 · Mecanismo de acción', cita: 'Incorporation of TGNs into DNA or RNA', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La metilación por TPMT y la oxidación generan productos inactivos distintos, incluida la formación de ácido 6-tioúrico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La metilación por TPMT y la oxidación generan productos inactivos distintos, incluida la formación de ácido 6-tioúrico.',
          ref: {
            f: 'dailymed-mercaptopurina',
            sec: '12.3 · Farmacocinética',
            cita: 'The product of oxidation is the inactive metabolite 6-thiouric acid',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el estudio con dosis oral marcada se recuperó un 46 % en orina en las primeras 24 h, como fármaco y metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el estudio con dosis oral marcada se recuperó un 46 % en orina en las primeras 24 h, como fármaco y metabolitos.',
          ref: {
            f: 'dailymed-mercaptopurina',
            sec: '12.3 · Farmacocinética',
            cita: '46% of the dose was recovered in the urine (as parent drug and metabolites)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '<2',
      unidad: 'h',
      analito: 'mercaptopurina',
      condiciones: 'dosis oral única',
      ref: {
        f: 'dailymed-mercaptopurina',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-life is less than 2 hours following a single oral dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mercaptopurina', 'c3b5b8b0-bc5c-4ce9-bbdc-febba60c2658', 'MERCAPTOPURINE TABLET', 'Mercaptopurine', '14', '2025-03-17', '2026-11-12'),
    rengPubchem(667490, 'mercaptopurina', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
