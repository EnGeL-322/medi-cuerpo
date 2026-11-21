import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cabergolina',
    nombre: 'Cabergolina',
    clase: 'Agonista dopaminérgico D2 derivado del ergot',
    sinonimos: [ 'cabergoline', 'Dostinex' ],
    formula: 'C26H37N5O2',
    masaMolar: 451.6,
    smiles: 'CCNC(=O)N(CCCN(C)C)C(=O)[C@@H]1C[C@H]2[C@@H](CC3=CNC4=CC=CC2=C34)N(C1)CC=C',
    inchikey: 'KORNTPPJEAJQIU-KJXAQDMKSA-N',
    cid: 54746,
    iupac: '(6aR,9R,10aR)-N-[3-(dimethylamino)propyl]-N-(ethylcarbamoyl)-7-prop-2-enyl-6,6a,8,9,10,10a-hexahydro-4H-indolo[4,3-fg]quinoline-9-carboxamide',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'cabergolina-oral',
      producto: 'Cabergoline · comprimido',
      titular: 'MYLAN PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg por comprimido, según la etiqueta',
      excipientes: [ 'leucine', 'lactose, unspecified form' ],
      usos: {
        t: 'Trastornos de hiperprolactinemia, idiopáticos o por adenomas de hipófisis, en adultos.',
        ref: {
          f: 'dailymed-cabergolina',
          sec: '1 · Indicaciones',
          cita: 'treatment of hyperprolactinemic disorders, either idiopathic or due to pituitary adenomas in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cabergolina',
      advertencias: [
        {
          titulo: 'Valvulopatía cardiaca y fibrosis pericárdica',
          texto: 'Antes de empezar hay que hacer una evaluación cardiovascular con ecocardiograma; está contraindicado si hay valvulopatía o fibrosis pericárdica.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-cabergolina',
            sec: '5 · Advertencias y precauciones',
            cita: 'perform a cardiovascular evaluation, including with an echocardiogram, to evaluate for valvular disease',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fibrosis pleural, pulmonar y retroperitoneal',
          texto: 'Está contraindicado si hay antecedentes de estas fibrosis.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-cabergolina',
            sec: '5 · Advertencias y precauciones',
            cita: 'CABERGOLINE is contraindicated in patients with a history of pleural, pulmonary, or retroperitoneal fibrosis',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 10 %): náuseas, dolor de cabeza y mareo.',
          '34084-4',
          'most common adverse reactions (incidence >10%) are nausea, headache, and dizziness'
        ],
        [
          'La seguridad se evaluó en más de 900 pacientes con hiperprolactinemia.',
          '34084-4',
          'The safety of CABERGOLINE has been evaluated in more than 900 patients with hyperprolactinemic disorders'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Trastornos de hiperprolactinemia, idiopáticos o por adenomas de hipófisis, en adultos.',
    actua: 'Es un agonista dopaminérgico con gran afinidad por los receptores D2; inhibe de forma directa la secreción de prolactina de las células lactotropas de la hipófisis.',
    recorrido: 'El máximo llega a las 2-3 horas tras una dosis única; la biodisponibilidad absoluta se desconoce y una parte importante sufre primer paso. Una comida rica en grasa no altera la farmacocinética. En 20 días sale alrededor del 22 % de la dosis por la orina y el 60 % por las heces; menos del 4 % sale sin cambios por la orina. La semivida estimada es de 63-69 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco ranurado de 0,5 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco ranurado de 0,5 mg.',
          ref: { f: 'dailymed-cabergolina', sec: '3 · Formas y concentraciones', cita: '0.5 mg, white, with functional score', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega a las 2-3 horas tras una dosis única; la biodisponibilidad absoluta se desconoce y una parte importante sufre primer paso. Una comida rica en grasa no altera la farmacocinética.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega a las 2-3 horas tras una dosis única; la biodisponibilidad absoluta se desconoce y una parte importante sufre primer paso. Una comida rica en grasa no altera la farmacocinética.',
          ref: {
            f: 'dailymed-cabergolina',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to reach maximum cabergoline plasma concentration was 2 to 3 hours after single oral doses of 0.5 mg to 1.5 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una fracción significativa de la dosis sufre efecto de primer paso.',
          ref: {
            f: 'dailymed-cabergolina',
            sec: '12.3 · Farmacocinética',
            cita: 'A significant fraction of the administered dose undergoes a first-pass effect',
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
      ocurre: 'La unión a proteínas del plasma fue del 40-42 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma fue del 40-42 %.',
          ref: { f: 'dailymed-cabergolina', sec: '12.3 · Farmacocinética', cita: 'Protein binding of cabergoline was 40% to 42%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor dopaminérgico D2 de las células lactotropas',
        efecto: 'Es un agonista dopaminérgico con gran afinidad por los receptores D2; inhibe de forma directa la secreción de prolactina de las células lactotropas de la hipófisis.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un agonista dopaminérgico con gran afinidad por los receptores D2; inhibe de forma directa la secreción de prolactina de las células lactotropas de la hipófisis.',
            ref: {
              f: 'dailymed-cabergolina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cabergoline is an ergot derivative and dopamine receptor agonist with a high affinity for D2 receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho, sobre todo por hidrólisis del enlace acilurea o del grupo urea; esa hidrólisis anula el efecto sobre la prolactina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho, sobre todo por hidrólisis del enlace acilurea o del grupo urea; esa hidrólisis anula el efecto sobre la prolactina.',
          ref: {
            f: 'dailymed-cabergolina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cabergoline is extensively metabolized, predominately via hydrolysis of the acylurea bond or the urea moiety',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Productos de hidrólisis de la acilurea o la urea',
          actividad: 'inactivo',
          nota: 'Los metabolitos principales identificados no contribuyen al efecto terapéutico.',
          ref: {
            f: 'dailymed-cabergolina',
            sec: '12.3 · Farmacocinética',
            cita: 'Hydrolysis of the acylurea or urea moiety abolishes the prolactin-lowering effect of cabergoline',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 20 días sale alrededor del 22 % de la dosis por la orina y el 60 % por las heces; menos del 4 % sale sin cambios por la orina. La semivida estimada es de 63-69 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 20 días sale alrededor del 22 % de la dosis por la orina y el 60 % por las heces; menos del 4 % sale sin cambios por la orina. La semivida estimada es de 63-69 horas.',
          ref: {
            f: 'dailymed-cabergolina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 22% and 60% of the dose was excreted within 20 days in the urine and feces, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '2-3',
      unidad: 'h',
      analito: 'cabergolina',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis únicas de 0,5 mg a 1,5 mg',
      ref: {
        f: 'dailymed-cabergolina',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to reach maximum cabergoline plasma concentration was 2 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '40-42',
      unidad: '%',
      analito: 'cabergolina',
      ref: { f: 'dailymed-cabergolina', sec: '12.3 · Farmacocinética', cita: 'Protein binding of cabergoline was 40% to 42%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación (a partir de datos urinarios)',
      valor: '63-69',
      unidad: 'h',
      analito: 'cabergolina',
      poblacion: '12 sujetos sanos',
      ref: {
        f: 'dailymed-cabergolina',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of cabergoline estimated from urinary data of 12 healthy subjects ranged between 63 to 69 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 20 días',
      valor: '22 (aprox.)',
      unidad: '% de la dosis',
      analito: 'cabergolina y metabolitos',
      poblacion: '5 voluntarios sanos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-cabergolina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 22% and 60% of the dose was excreted within 20 days in the urine and feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces en 20 días',
      valor: '60 (aprox.)',
      unidad: '% de la dosis',
      analito: 'cabergolina y metabolitos',
      poblacion: '5 voluntarios sanos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-cabergolina',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 22% and 60% of the dose was excreted within 20 days in the urine and feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '< 4',
      unidad: '% de la dosis',
      analito: 'cabergolina',
      ref: {
        f: 'dailymed-cabergolina',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 4% of the dose was excreted unchanged in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cabergolina', 'e497366b-a124-4d7f-bd45-a883c392d4bb', 'CABERGOLINE TABLET', 'Cabergoline', '12', '2026-07-01', '2026-11-12'),
    rengPubchem(54746, 'cabergoline', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
