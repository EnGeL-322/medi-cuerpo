import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tivozanib',
    nombre: 'Tivozanib',
    clase: 'Inhibidor de los receptores del VEGF (VEGFR-1, -2 y -3)',
    sinonimos: [ 'tivozanib hydrochloride', 'Fotivda' ],
    formula: 'C22H19ClN4O5',
    masaMolar: 454.9,
    smiles: 'CC1=CC(=NO1)NC(=O)NC2=C(C=C(C=C2)OC3=C4C=C(C(=CC4=NC=C3)OC)OC)Cl',
    inchikey: 'SPMVMDHWKHCIDT-UHFFFAOYSA-N',
    cid: 9911830,
    iupac: '1-[2-chloro-4-(6,7-dimethoxyquinolin-4-yl)oxyphenyl]-3-(5-methyl-1,2-oxazol-3-yl)urea',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tivozanib-oral',
      producto: 'FOTIVDA · cápsula',
      titular: 'AVEO PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '0.89 mg o 1.34 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de tivozanib',
        ref: { f: 'dailymed-tivozanib', sec: '11 · Descripción', cita: 'Tivozanib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'mannitol', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento de adultos con carcinoma de células renales avanzado recidivante o refractario tras dos o más tratamientos sistémicos.',
        ref: {
          f: 'dailymed-tivozanib',
          sec: '1 · Indicaciones',
          cita: 'FOTIVDA is indicated for the treatment of adult patients with relapsed or refractory advanced renal cell carcinoma (RCC) following two or more prior systemic therapies',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tivozanib',
      advertencias: [
        {
          titulo: 'Hipertensión',
          texto: 'Medir la presión arterial a las 2 semanas y después al menos una vez al mes.',
          organos: [],
          ref: {
            f: 'dailymed-tivozanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood pressure after 2 weeks and at least monthly thereafter during treatment with FOTIVDA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Suspenderlo ante una perforación gastrointestinal grave o potencialmente mortal.',
          organos: [],
          ref: {
            f: 'dailymed-tivozanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue FOTIVDA for severe or life-threatening gastrointestinal perforation',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteración de la cicatrización',
          texto: 'No administrarlo hasta 2 semanas después de una cirugía mayor y la cicatrización adecuada de la herida.',
          organos: [],
          ref: {
            f: 'dailymed-tivozanib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Do not administer for at least 2 weeks following major surgery and adequate wound healing',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): fatiga, hipertensión, diarrea, disminución del apetito, náuseas, disfonía, hipotiroidismo, tos y estomatitis.',
          '34084-4',
          'The most common (≥20%) adverse reactions were fatigue, hypertension, diarrhea, decreased appetite, nausea, dysphonia, hypothyroidism, cough, and stomatitis'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical studies are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.89 mg o 1.34 mg por cápsula, según la etiqueta; el activo va como clorhidrato de tivozanib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con carcinoma de células renales avanzado recidivante o refractario tras dos o más tratamientos sistémicos.',
    actua: 'Inhibe la fosforilación de los receptores 1, 2 y 3 del factor de crecimiento del endotelio vascular y, en modelos animales, la angiogénesis y el crecimiento tumoral.',
    recorrido: 'La mediana del tiempo hasta el pico es de 10 horas; una comida rica en grasas no cambia de forma relevante la exposición. Tras 1,34 mg marcados, el 79 % de la dosis se recuperó en las heces (26 % sin cambios) y el 12 % en la orina, sin tivozanib inalterado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: { f: 'dailymed-tivozanib', sec: '3 · Formas y concentraciones', cita: 'bright yellow opaque cap imprinted with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tiempo hasta el pico es de 10 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 10 horas; una comida rica en grasas no cambia de forma relevante la exposición.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of tivozanib is 10 hours with a range of 3 to 24 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente relevantes del AUC ni de la Cmax.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in tivozanib AUC or C max were observed following administration of a high fat meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 99 % o más a las proteínas, sobre todo a la albúmina; el volumen de distribución aparente es de 123 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 99 % o más a las proteínas, sobre todo a la albúmina; el volumen de distribución aparente es de 123 L.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of tivozanib is ≥ 99%, primarily to albumin in vitro and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 123 L.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (V/F) of tivozanib is 123 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'VEGFR-1, -2 y -3',
        efecto: 'Inhibe la fosforilación de los receptores 1, 2 y 3 del factor de crecimiento del endotelio vascular y, en modelos animales, la angiogénesis y el crecimiento tumoral.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la fosforilación de los receptores 1, 2 y 3 del factor de crecimiento del endotelio vascular y, en modelos animales, la angiogénesis y el crecimiento tumoral.',
            ref: {
              f: 'dailymed-tivozanib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'tivozanib inhibits phosphorylation of vascular endothelial growth factor receptor (VEGFR)-1, VEGFR-2 and VEGFR-3',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4.',
          ref: { f: 'dailymed-tivozanib', sec: '12.3 · Farmacocinética', cita: 'Tivozanib is metabolized predominantly by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 1,34 mg marcados, el 79 % de la dosis se recuperó en las heces (26 % sin cambios) y el 12 % en la orina, sin tivozanib inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 1,34 mg marcados, el 79 % de la dosis se recuperó en las heces (26 % sin cambios) y el 12 % en la orina, sin tivozanib inalterado.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: '79% of the administered dose was recovered in feces (26% unchanged) and 12% in urine (unchanged tivozanib not detected)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento aparente es de 0,75 L/h y la semivida, de 111 horas.',
          ref: {
            f: 'dailymed-tivozanib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent clearance (CL/F) of tivozanib is 0.75 L/h and the half-life is 111 hours',
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
      valor: '10',
      unidad: 'h',
      analito: 'tivozanib',
      ref: {
        f: 'dailymed-tivozanib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of tivozanib is 10 hours with a range of 3 to 24 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '≥ 99',
      unidad: '%',
      analito: 'tivozanib',
      ref: { f: 'dailymed-tivozanib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of tivozanib is ≥ 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '123',
      unidad: 'L',
      analito: 'tivozanib',
      ref: {
        f: 'dailymed-tivozanib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V/F) of tivozanib is 123 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '111',
      unidad: 'h',
      analito: 'tivozanib',
      ref: { f: 'dailymed-tivozanib', sec: '12.3 · Farmacocinética', cita: 'the half-life is 111 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '0,75',
      unidad: 'L/h',
      analito: 'tivozanib',
      ref: { f: 'dailymed-tivozanib', sec: '12.3 · Farmacocinética', cita: 'The apparent clearance (CL/F) of tivozanib is 0.75 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '79',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 1,34 mg',
      ref: {
        f: 'dailymed-tivozanib',
        sec: '12.3 · Farmacocinética',
        cita: '79% of the administered dose was recovered in feces (26% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tivozanib', 'de77155c-ecf2-4f15-9758-21d271449d83', 'FOTIVDA (TIVOZANIB) CAPSULE', 'FOTIVDA', '16', '2026-11-16', '2026-11-19'),
    rengPubchem(9911830, 'tivozanib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
