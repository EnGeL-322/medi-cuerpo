import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'omaveloxolona',
    nombre: 'Omaveloxolona',
    clase: 'Activador de la vía Nrf2 (ataxia de Friedreich)',
    sinonimos: [ 'omaveloxolone', 'Skyclarys' ],
    formula: 'C33H44F2N2O3',
    masaMolar: 554.7,
    smiles: 'C[C@@]12CC[C@]3(CCC(C[C@H]3[C@H]1C(=O)C=C4[C@]2(CC[C@@H]5[C@@]4(C=C(C(=O)C5(C)C)C#N)C)C)(C)C)NC(=O)C(C)(F)F',
    inchikey: 'RJCWBNBKOKFWNY-IDPLTSGASA-N',
    cid: 71811910,
    iupac: 'N-[(4aS,6aR,6bS,8aR,12aS,14aR,14bS)-11-cyano-2,2,6a,6b,9,9,12a-heptamethyl-10,14-dioxo-1,3,4,5,6,7,8,8a,14a,14b-decahydropicen-4a-yl]-2,2-difluoropropanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'omaveloxolona-oral',
      producto: 'SKYCLARYS · cápsula',
      titular: 'BIOGEN',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50 mg por cápsula, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'magnesium stearate',
        'starch, corn',
        'microcrystalline cellulose',
        'fd&c blue no. 1',
        'ferric oxide yellow',
        'hypromellose, unspecified',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la ataxia de Friedreich en adultos y adolescentes desde 16 años.',
        ref: {
          f: 'dailymed-omaveloxolona',
          sec: '1 · Indicaciones',
          cita: "SKYCLARYS is indicated for the treatment of Friedreich's ataxia in adults and adolescents aged 16 years and older",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-omaveloxolona',
      advertencias: [
        {
          titulo: 'Elevación de las aminotransferasas',
          texto: 'Puede elevar las transaminasas hepáticas; vigilar ALT, AST y bilirrubina antes de empezar, cada mes los 3 primeros meses y después periódicamente.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Treatment with SKYCLARYS can cause an elevation in hepatic transaminases (ALT and AST)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Elevación del péptido natriurético tipo B',
          texto: 'Hay que informar de los signos de sobrecarga de líquidos.',
          organos: [],
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Elevation of B-type Natriuretic Peptide (BNP): Advise patients of signs and symptoms of fluid overload',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteraciones lipídicas',
          texto: 'Vigilar el colesterol periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Lipid Abnormalities: Monitor cholesterol periodically during treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más y más que con placebo): elevación de enzimas hepáticas (AST/ALT), cefalea, náuseas, dolor abdominal, fatiga, diarrea y dolor musculoesquelético.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20% and greater than placebo) are elevated liver enzymes (AST/ALT), headache, nausea, abdominal pain, fatigue, diarrhea, and musculoskeletal pain'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la elevación de las aminotransferasas y del péptido natriurético tipo B.',
          '34084-4',
          'Elevation of aminotransferases [see Warnings and Precautions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 50 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la ataxia de Friedreich en adultos y adolescentes desde 16 años.',
    actua: 'Su mecanismo exacto se desconoce; activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
    recorrido: 'La mediana del Tmax fue de 7 a 14 horas (1 a 24); una comida rica en grasas aumentó la Cmax alrededor de un 350 % y el AUC un 15 %. Tras una dosis oral única marcada de 150 mg, alrededor del 92 % se recuperó en las heces (91 % en 96 horas) y el 0,1 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '3 · Formas y concentraciones',
            cita: 'SKYCLARYS capsules contain 50 mg of omaveloxolone, and are supplied as opaque hard capsules',
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
      ocurre: 'La mediana del Tmax fue de 7 a 14 horas (1 a 24); una comida rica en grasas aumentó la Cmax alrededor de un 350 % y el AUC un 15 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del Tmax fue de 7 a 14 horas (1 a 24); una comida rica en grasas aumentó la Cmax alrededor de un 350 % y el AUC un 15 %.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) time to achieve peak plasma concentration (T max ) was 7 to 14 (1 to 24) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la Cmax y el AUC aumentaron alrededor de un 350 % y un 15 % respecto al ayuno.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'Omaveloxolone C max and AUC 0-inf increased by approximately 350% and 15%, respectively, with a high-fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente medio es de 7361 L (105 L/kg para 70 kg) y la unión a proteínas del 97 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente medio es de 7361 L (105 L/kg para 70 kg) y la unión a proteínas del 97 %.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of omaveloxolone is 7361 L (105 L/kg for a 70 kg person). Protein binding of omaveloxolone is 97%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Vía Nrf2',
        efecto: 'Su mecanismo exacto se desconoce; activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
            ref: {
              f: 'dailymed-omaveloxolona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Omaveloxolone has been shown to activate the Nuclear factor (erythroid-derived 2)-like 2 (Nrf2) pathway in vitro and in vivo in animals and humans',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A, con metabolismo menor por CYP2C8 y CYP2J2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A, con metabolismo menor por CYP2C8 y CYP2J2.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'Omaveloxolone is primarily metabolized by CYP3A with minor metabolism by CYP2C8 and CYP2J2',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única marcada de 150 mg, alrededor del 92 % se recuperó en las heces (91 % en 96 horas) y el 0,1 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única marcada de 150 mg, alrededor del 92 % se recuperó en las heces (91 % en 96 horas) y el 0,1 % en la orina.',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 92% of the dose was recovered in feces (approximately 91% within 96 hours after administration) and 0.1% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 57 horas (32 a 90).',
          ref: {
            f: 'dailymed-omaveloxolona',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (range) terminal half-life of omaveloxolone is 57 hours (32 to 90 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax',
      valor: '7-14',
      unidad: 'h',
      analito: 'omaveloxolona',
      ref: {
        f: 'dailymed-omaveloxolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) time to achieve peak plasma concentration (T max ) was 7 to 14 (1 to 24) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '7361',
      unidad: 'L',
      analito: 'omaveloxolona',
      ref: {
        f: 'dailymed-omaveloxolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of omaveloxolone is 7361 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '97',
      unidad: '%',
      analito: 'omaveloxolona',
      ref: { f: 'dailymed-omaveloxolona', sec: '12.3 · Farmacocinética', cita: 'Protein binding of omaveloxolone is 97%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '57',
      unidad: 'h',
      analito: 'omaveloxolona',
      ref: {
        f: 'dailymed-omaveloxolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (range) terminal half-life of omaveloxolone is 57 hours (32 to 90 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático aparente medio',
      valor: '109',
      unidad: 'L/h',
      analito: 'omaveloxolona',
      ref: {
        f: 'dailymed-omaveloxolona',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent plasma clearance of omaveloxolone is 109 L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '92 (aprox.)',
      unidad: '% de la dosis',
      analito: 'omaveloxolona y metabolitos',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única marcada de 150 mg',
      ref: { f: 'dailymed-omaveloxolona', sec: '12.3 · Farmacocinética', cita: 'approximately 92% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-omaveloxolona', '2709e870-df3d-f30f-e063-6394a90aeda1', 'SKYCLARYS (OMAVELOXOLONE) CAPSULE', 'SKYCLARYS', '9', '2026-04-17', '2026-11-19'),
    rengPubchem(71811910, 'omaveloxolone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
