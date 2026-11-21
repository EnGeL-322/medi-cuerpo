import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'budesonida',
    nombre: 'Budesonida',
    clase: 'Glucocorticoide de acción tópica intestinal (liberación en el colon)',
    sinonimos: [ 'budesonide', 'Uceris' ],
    formula: 'C25H34O6',
    masaMolar: 430.5,
    smiles: 'CCCC1O[C@@H]2C[C@H]3[C@@H]4CCC5=CC(=O)C=C[C@@]5([C@H]4[C@H](C[C@@]3([C@@]2(O1)C(=O)CO)C)O)C',
    inchikey: 'VOVIALXJUBGFJZ-KWVAZRHASA-N',
    cid: 5281004,
    iupac: '(1S,2S,4R,8S,9S,11S,12S,13R)-11-hydroxy-8-(2-hydroxyacetyl)-9,13-dimethyl-6-propyl-5,7-dioxapentacyclo[10.8.0.02,9.04,8.013,18]icosa-14,17-dien-16-one',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'budesonida-oral',
      producto: 'Uceris · comprimido de liberación prolongada',
      titular: 'SANTARUS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '9 mg por comprimido, según la etiqueta',
      excipientes: [
        'stearic acid',
        'soybean lecithin',
        'lactose, unspecified form',
        'silicon dioxide',
        'magnesium stearate',
        'methacrylic acid and ethyl acrylate copolymer',
        'talc',
        'triethyl citrate',
        'titanium dioxide',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose, unspecified'
      ],
      usos: {
        t: 'Inducción de la remisión de la colitis ulcerosa activa leve o moderada.',
        ref: {
          f: 'dailymed-budesonida',
          sec: '1 · Indicaciones',
          cita: 'extended-release tablets are indicated for the induction of remission in patients with active, mild to moderate ulcerative colitis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-budesonida',
      advertencias: [
        {
          titulo: 'Hipercortisolismo y supresión suprarrenal',
          texto: 'Pueden aparecer; vigilar sus signos y síntomas.',
          organos: [],
          ref: {
            f: 'dailymed-budesonida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypercorticism and adrenal suppression : May occur with treatment; monitor for signs and symptoms',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Inmunosupresión e infecciones',
          texto: 'Vigilar las infecciones nuevas o que empeoran y valorar suspenderla.',
          organos: [],
          ref: {
            f: 'dailymed-budesonida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for new or worsening infection and consider drug discontinuation',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Paso desde corticoides sistémicos',
          texto: 'Retirar despacio los corticoides sistémicos al cambiar a budesonida.',
          organos: [],
          ref: {
            f: 'dailymed-budesonida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Taper patients slowly from systemic corticosteroids if transferring to UCERIS',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más): cefalea, náuseas, descenso del cortisol, dolor abdominal alto, fatiga, flatulencia, distensión abdominal, acné, infección urinaria, artralgia y estreñimiento.',
          '34084-4',
          'Most common adverse reactions (incidence ≥2%) are headache, nausea, decreased blood cortisol, upper abdominal pain, fatigue, flatulence, abdominal distension, acne, urinary tract infection, arthralgia, and constipation'
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
    contiene: 'Comprimido de liberación prolongada: 9 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Inducción de la remisión de la colitis ulcerosa activa leve o moderada.',
    actua: 'Glucocorticoide con gran actividad tópica y una eliminación de primer paso importante, de modo que actúa sobre todo en la mucosa intestinal.',
    recorrido: 'La absorción es lenta: el pico aparece de media a las 13,3 horas, con mucha variabilidad; una comida rica en grasas reduce la Cmax un 27 %. Se excreta por la orina y las heces en forma de metabolitos; no se detecta budesonida inalterada en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'estomago', 'intestino-delgado' ],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada con cubierta entérica: resiste el jugo gástrico y empieza a liberar la budesonida cuando el pH llega a 7 en el intestino.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada con cubierta entérica: resiste el jugo gástrico y empieza a liberar la budesonida cuando el pH llega a 7 en el intestino.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12 · Farmacología clínica',
            cita: 'The tablet core is enteric coated to protect dissolution in gastric juice which delays budesonide release until exposure to a pH ≥7 in the small intestine',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es lenta: el pico aparece de media a las 13,3 horas, con mucha variabilidad; una comida rica en grasas reduce la Cmax un 27 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es lenta: el pico aparece de media a las 13,3 horas, con mucha variabilidad; una comida rica en grasas reduce la Cmax un 27 %.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'the time to peak concentration (T max ) on average was 13.3 ± 5.9 hours, although it varied across different individual patients',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 27 % sin un descenso significativo del AUC.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'indicated that the C max was decreased by 27% while there was no significant decrease in AUC',
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
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 85-90 % a las proteínas plasmáticas; el volumen de distribución va de 2,2 a 3,9 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 85-90 % a las proteínas plasmáticas; el volumen de distribución va de 2,2 a 3,9 L/kg.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding is estimated to be 85 to 90% in the concentration range 1 to 230 nmol/L, independent of gender',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de 2,2 a 3,9 L/kg.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution (V SS ) of budesonide varies between 2.2 and 3.9 L/kg in healthy subjects and in patients',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de glucocorticoides',
        efecto: 'Glucocorticoide con gran actividad tópica y una eliminación de primer paso importante, de modo que actúa sobre todo en la mucosa intestinal.',
        lugar: [],
        datos: [
          {
            t: 'Glucocorticoide con gran actividad tópica y una eliminación de primer paso importante, de modo que actúa sobre todo en la mucosa intestinal.',
            ref: {
              f: 'dailymed-budesonida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Budesonide has a high topical glucocorticosteroid (GCS) activity and substantial first-pass elimination',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Tras absorberse sufre un metabolismo de primer paso intenso (80-90 %), sobre todo por la CYP3A4, a metabolitos casi sin actividad glucocorticoide.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Tras absorberse sufre un metabolismo de primer paso intenso (80-90 %), sobre todo por la CYP3A4, a metabolitos casi sin actividad glucocorticoide.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'Following absorption, budesonide is subject to high first-pass metabolism (80-90%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'En microsomas hepáticos se transforma rápida y ampliamente, sobre todo por la CYP3A4, en sus dos metabolitos principales.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro experiments in human liver microsomes demonstrate that budesonide is rapidly and extensively biotransformed, mainly by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '6β-hidroxibudesonida y 16α-hidroxiprednisolona',
          actividad: 'inactivo',
          nota: 'Actividad glucocorticoide menor de 1/100 de la del fármaco.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'The glucocorticoid activity of these metabolites is negligible (<1/100) in relation to that of the parent compound',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta por la orina y las heces en forma de metabolitos; no se detecta budesonida inalterada en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta por la orina y las heces en forma de metabolitos; no se detecta budesonida inalterada en la orina.',
          ref: {
            f: 'dailymed-budesonida',
            sec: '12.3 · Farmacocinética',
            cita: 'Budesonide is excreted in urine and feces in the form of metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se detecta budesonida inalterada en la orina.',
          ref: { f: 'dailymed-budesonida', sec: '12.3 · Farmacocinética', cita: 'No unchanged budesonide is detected in urine', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio hasta el pico',
      valor: '13,3',
      unidad: 'h',
      analito: 'budesonida',
      poblacion: 'sujetos sanos',
      condiciones: '9 mg',
      ref: {
        f: 'dailymed-budesonida',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to peak concentration (T max ) on average was 13.3 ± 5.9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '85-90',
      unidad: '%',
      analito: 'budesonida',
      ref: { f: 'dailymed-budesonida', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is estimated to be 85 to 90%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2,2-3,9',
      unidad: 'L/kg',
      analito: 'budesonida',
      ref: {
        f: 'dailymed-budesonida',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution (V SS ) of budesonide varies between 2.2 and 3.9 L/kg',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-budesonida', '92cbb190-8851-46ed-bfe0-166ca62ef2e9', 'UCERIS (BUDESONIDE) TABLET, EXTENDED RELEASE', 'Uceris', '20', '2024-10-23', '2026-11-19'),
    rengPubchem(5281004, 'budesonide', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
