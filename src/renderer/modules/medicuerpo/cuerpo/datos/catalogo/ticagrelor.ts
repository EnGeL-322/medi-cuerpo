import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ticagrelor',
    nombre: 'Ticagrelor',
    clase: 'Antiagregante plaquetario',
    sinonimos: [ 'ticagrelor' ],
    formula: 'C23H28F2N6O4S',
    masaMolar: 522.6,
    smiles: 'CCCSC1=NC(=C2C(=N1)N(N=N2)[C@@H]3C[C@@H]([C@H]([C@H]3O)O)OCCO)N[C@@H]4C[C@H]4C5=CC(=C(C=C5)F)F',
    inchikey: 'OEKWJQXRCDYSHL-FNOIDJSQSA-N',
    cid: 9871419,
    iupac: '(1S,2S,3R,5S)-3-[7-[[(1R,2S)-2-(3,4-difluorophenyl)cyclopropyl]amino]-5-propylsulfanyltriazolo[4,5-d]pyrimidin-3-yl]-5-(2-hydroxyethoxy)cyclopentane-1,2-diol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'ticagrelor-oral',
      producto: 'BRILINTA · comprimido',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '90 mg',
      excipientes: [
        'mannitol',
        'dibasic calcium phosphate dihydrate',
        'sodium starch glycolate type a potato',
        'hydroxypropyl cellulose (1600000 wamw)',
        'magnesium stearate',
        'water',
        'hypromellose, unspecified',
        'titanium dioxide',
        'talc',
        'polyethylene glycol 400',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Reduce el riesgo de determinados eventos trombóticos en las poblaciones cardiovasculares descritas en la etiqueta.',
        ref: { f: 'dailymed-ticagrelor', sec: '1 · Indicaciones', cita: 'to reduce the risk of cardiovascular', codigo: '34067-9' }
      },
      fuente: 'dailymed-ticagrelor'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con ticagrelor como ingrediente activo.',
    usos: 'Reduce el riesgo de determinados eventos trombóticos en las poblaciones cardiovasculares descritas en la etiqueta.',
    actua: 'El ticagrelor y su metabolito activo bloquean de manera reversible la señal del receptor P2Y12 de las plaquetas.',
    recorrido: 'El pico del ticagrelor llega a una mediana de 1,5 horas. Su biodisponibilidad absoluta media es cercana al 36 %. La transformación hepática es la vía principal de eliminación del original. La etiqueta considera probable que el metabolito salga por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'BRILINTA se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'BRILINTA se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-ticagrelor',
            sec: '3 · Forma farmacéutica',
            cita: 'yellow, film-coated tablet marked with a “90”',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El pico del ticagrelor llega a una mediana de 1,5 horas. Su biodisponibilidad absoluta media es cercana al 36 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El pico del ticagrelor llega a una mediana de 1,5 horas. Su biodisponibilidad absoluta media es cercana al 36 %.',
          ref: {
            f: 'dailymed-ticagrelor',
            sec: '12.3 · Farmacocinética',
            cita: 'mean absolute bioavailability of ticagrelor is about 36%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El ticagrelor y su metabolito activo se unen extensamente a proteínas plasmáticas, en más del 99 %.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El ticagrelor y su metabolito activo se unen extensamente a proteínas plasmáticas, en más del 99 %.',
          ref: {
            f: 'dailymed-ticagrelor',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively bound to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor P2Y12 de las plaquetas',
        efecto: 'El ticagrelor y su metabolito activo bloquean de manera reversible la señal del receptor P2Y12 de las plaquetas.',
        lugar: [ 'plaquetas' ],
        datos: [
          {
            t: 'El ticagrelor y su metabolito activo bloquean de manera reversible la señal del receptor P2Y12 de las plaquetas.',
            ref: {
              f: 'dailymed-ticagrelor',
              sec: '12.1 · Mecanismo',
              cita: 'to prevent signal transduction and platelet activation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'CYP3A4 es la enzima principal en su transformación y en la formación de AR-C124910XX, su metabolito activo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'CYP3A4 es la enzima principal en su transformación y en la formación de AR-C124910XX, su metabolito activo.',
          ref: { f: 'dailymed-ticagrelor', sec: '12.3 · Farmacocinética', cita: 'formation of its major active metabolite', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'AR-C124910XX',
          actividad: 'activo',
          ref: { f: 'dailymed-ticagrelor', sec: '12.3 · Farmacocinética', cita: 'AR-C124910XX (active)', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La transformación hepática es la vía principal de eliminación del original. La etiqueta considera probable que el metabolito salga por la bilis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La transformación hepática es la vía principal de eliminación del original. La etiqueta considera probable que el metabolito salga por la bilis.',
          ref: { f: 'dailymed-ticagrelor', sec: '12.3 · Farmacocinética', cita: 'most likely to be biliary secretion', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-ticagrelor', 'f7b3f443-e83d-4bf2-0e96-023448fed9a8', 'BRILINTA (TICAGRELOR) TABLET', 'BRILINTA', '56', '2026-08-07', '2026-11-10'),
    rengPubchem(9871419, 'ticagrelor', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
