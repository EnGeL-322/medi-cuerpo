import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sonidegib',
    nombre: 'Sonidegib',
    clase: 'Inhibidor de la vía Hedgehog (antagonista de Smoothened)',
    sinonimos: [ 'sonidegib phosphate', 'Odomzo' ],
    formula: 'C26H26F3N3O3',
    masaMolar: 485.5,
    smiles: 'C[C@@H]1CN(C[C@@H](O1)C)C2=NC=C(C=C2)NC(=O)C3=CC=CC(=C3C)C4=CC=C(C=C4)OC(F)(F)F',
    inchikey: 'VZZJRYRQSPEMTK-CALCHBBNSA-N',
    cid: 24775005,
    iupac: 'N-[6-[(2R,6S)-2,6-dimethylmorpholin-4-yl]-3-pyridinyl]-2-methyl-3-[4-(trifluoromethoxy)phenyl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'sonidegib-oral',
      producto: 'Odomzo · cápsula',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Difosfato de sonidegib',
        ref: { f: 'dailymed-sonidegib', sec: '11 · Descripción', cita: 'diphosphate salt of sonidegib', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'lactose monohydrate',
        'magnesium stearate',
        'poloxamer 188',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'ferric oxide red',
        'titanium dioxide',
        'ammonia',
        'ferrosoferric oxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de adultos con carcinoma basocelular localmente avanzado recidivado tras cirugía o radioterapia o que no son candidatos a ellas.',
        ref: {
          f: 'dailymed-sonidegib',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of adult patients with locally advanced basal cell carcinoma (BCC) that has recurred following surgery or radiation therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sonidegib',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar la muerte embriofetal o defectos congénitos graves si se toma en el embarazo.',
          organos: [],
          ref: {
            f: 'dailymed-sonidegib',
            sec: 'Advertencia destacada',
            cita: 'ODOMZO can cause embryo-fetal death or severe birth defects when administered to a pregnant woman',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prueba de embarazo',
          texto: 'Comprobar que no hay embarazo antes de empezar en mujeres en edad fértil.',
          organos: [],
          ref: {
            f: 'dailymed-sonidegib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Verify pregnancy status of females of reproductive potential prior to initiating ODOMZO treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más): espasmos musculares, alopecia, disgeusia, fatiga, náuseas, dolor musculoesquelético, diarrea, pérdida de peso, disminución del apetito y mialgia, entre otras.',
          '34084-4',
          'The most common adverse reactions occurring in ≥10% of patients are muscle spasms, alopecia, dysgeusia, fatigue, nausea, musculoskeletal pain, diarrhea, decreased weight, decreased appetite, myalgia'
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
    contiene: 'Cápsula: 200 mg por cápsula, según la etiqueta; el activo va como difosfato de sonidegib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con carcinoma basocelular localmente avanzado recidivado tras cirugía o radioterapia o que no son candidatos a ellas.',
    actua: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
    recorrido: 'La mediana del tiempo hasta el pico es de 2 a 4 horas en ayunas; una comida rica en grasas multiplica la exposición por 7,4 a 7,8. De la dosis absorbida, alrededor del 70 % se eliminó en las heces y el 30 % en la orina; sin sonidegib inalterado en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con el estómago vacío.',
          ref: { f: 'dailymed-sonidegib', sec: '3 · Formas y concentraciones', cita: 'opaque pink colored with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de 2 a 4 horas en ayunas; una comida rica en grasas multiplica la exposición por 7,4 a 7,8.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 2 a 4 horas en ayunas; una comida rica en grasas multiplica la exposición por 7,4 a 7,8.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'the median time-to-peak concentration (T max ) was 2 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó la exposición (AUC y Cmax) de 7,4 a 7,8 veces.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'increased exposure to sonidegib (geometric mean AUC inf and C max ) by 7.4- to 7.8-fold',
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
      ocurre: 'In vitro se une en más del 97 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 9166 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en más del 97 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario es de 9166 L.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sonidegib was greater than 97% bound to human plasma proteins in vitro and the binding was concentration independent',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 9166 L.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent steady-state volume of distribution (V ss /F) was 9,166 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Smoothened (vía Hedgehog)',
        efecto: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
        lugar: [],
        datos: [
          {
            t: 'Se une a Smoothened, una proteína transmembrana de la vía Hedgehog, y la inhibe.',
            ref: {
              f: 'dailymed-sonidegib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sonidegib binds to and inhibits Smoothened, a transmembrane protein involved in Hh signal transduction',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A.',
          ref: { f: 'dailymed-sonidegib', sec: '12.3 · Farmacocinética', cita: 'Sonidegib is primarily metabolized by CYP3A', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'De la dosis absorbida, alrededor del 70 % se eliminó en las heces y el 30 % en la orina; sin sonidegib inalterado en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'De la dosis absorbida, alrededor del 70 % se eliminó en las heces y el 30 % en la orina; sin sonidegib inalterado en la orina.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Of the absorbed dose, approximately 70% was eliminated in the feces and 30% was eliminated in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se elimina sobre todo por vía hepática.',
          ref: {
            f: 'dailymed-sonidegib',
            sec: '12.3 · Farmacocinética',
            cita: 'Sonidegib and its metabolites are eliminated primarily by the hepatic route',
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
      valor: '2-4',
      unidad: 'h',
      analito: 'sonidegib',
      poblacion: 'pacientes con cáncer',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-sonidegib',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time-to-peak concentration (T max ) was 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '> 97',
      unidad: '%',
      analito: 'sonidegib',
      ref: {
        f: 'dailymed-sonidegib',
        sec: '12.3 · Farmacocinética',
        cita: 'Sonidegib was greater than 97% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '9166',
      unidad: 'L',
      analito: 'sonidegib',
      ref: {
        f: 'dailymed-sonidegib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent steady-state volume of distribution (V ss /F) was 9,166 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación estimada',
      valor: '28 (aprox.)',
      unidad: 'días',
      analito: 'sonidegib',
      ref: {
        f: 'dailymed-sonidegib',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life (t 1/2 ) of sonidegib estimated from population pharmacokinetic (PK) modeling was approximately 28 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminación en las heces (sobre la dosis absorbida)',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'sonidegib y metabolitos',
      ref: {
        f: 'dailymed-sonidegib',
        sec: '12.3 · Farmacocinética',
        cita: 'Of the absorbed dose, approximately 70% was eliminated in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sonidegib', '028312dc-d155-4fd5-8abd-6bb9f011d3cc', 'ODOMZO (SONIDEGIB) CAPSULE', 'Odomzo', '14', '2025-01-03', '2026-11-19'),
    rengPubchem(24775005, 'sonidegib phosphate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
