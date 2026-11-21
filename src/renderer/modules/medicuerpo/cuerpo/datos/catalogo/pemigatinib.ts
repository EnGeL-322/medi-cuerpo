import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pemigatinib',
    nombre: 'Pemigatinib',
    clase: 'Inhibidor de los receptores del factor de crecimiento de fibroblastos FGFR1, 2 y 3',
    sinonimos: [ 'pemigatinib', 'Pemazyre' ],
    formula: 'C24H27F2N5O4',
    masaMolar: 487.5,
    smiles: 'CCN1C2=C3C=C(NC3=NC=C2CN(C1=O)C4=C(C(=CC(=C4F)OC)OC)F)CN5CCOCC5',
    inchikey: 'HCDMJFOHIXMBOV-UHFFFAOYSA-N',
    cid: 86705695,
    iupac: '11-(2,6-difluoro-3,5-dimethoxyphenyl)-13-ethyl-4-(morpholin-4-ylmethyl)-5,7,11,13-tetrazatricyclo[7.4.0.02,6]trideca-1,3,6,8-tetraen-12-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pemigatinib-oral',
      producto: 'PEMAZYRE · comprimido',
      titular: 'INCYTE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '4.5 mg, 9 mg o 13.5 mg por comprimido, según la etiqueta',
      excipientes: [ 'cellulose, microcrystalline', 'sodium starch glycolate type a potato', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento del colangiocarcinoma avanzado ya tratado con fusión u otra reordenación de FGFR2 y de neoplasias mieloides o linfoides con reordenación de FGFR1, según la etiqueta.',
        ref: {
          f: 'dailymed-pemigatinib',
          sec: '1 · Indicaciones',
          cita: 'unresectable locally advanced or metastatic cholangiocarcinoma with a fibroblast growth factor receptor 2 (FGFR2) fusion or other rearrangement as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pemigatinib',
      advertencias: [
        {
          titulo: 'Desprendimiento de retina',
          texto: 'Hacer una exploración oftalmológica con tomografía de coherencia óptica antes de empezar y periódicamente.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Perform ophthalmological examination including optical coherence tomography (OCT) prior to initiation of therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperfosfatemia',
          texto: 'Vigilar el fósforo e iniciar una dieta pobre en fosfato si supera 5,5 mg/dL.',
          organos: [],
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for hyperphosphatemia and initiate a low phosphate diet when serum phosphate level is > 5.5 mg/dL',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Advertir a las embarazadas del riesgo para el feto.',
          organos: [],
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women of the potential risk to the fetus',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el colangiocarcinoma, las más frecuentes (20 % o más): hiperfosfatemia, alopecia, diarrea, toxicidad ungueal, fatiga, disgeusia, náuseas, estreñimiento, estomatitis y ojo seco, entre otras.',
          '34084-4',
          'The most common adverse reactions (incidence ≥ 20%) are hyperphosphatemia, alopecia, diarrhea, nail toxicity, fatigue, dysgeusia, nausea, constipation, stomatitis, dry eye'
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
    contiene: 'Comprimido: 4.5 mg, 9 mg o 13.5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del colangiocarcinoma avanzado ya tratado con fusión u otra reordenación de FGFR2 y de neoplasias mieloides o linfoides con reordenación de FGFR1, según la etiqueta.',
    actua: 'Inhibe las cinasas FGFR1, 2 y 3 y bloquea su señalización en células tumorales con amplificaciones o fusiones activadoras de FGFR.',
    recorrido: 'La mediana del tiempo hasta el pico es de 1,13 horas; una comida rica en grasas no tiene un efecto clínicamente relevante. Tras 11 mg marcados, el 82,4 % de la dosis se recuperó en las heces (1,4 % sin cambios) y el 12,6 % en la orina (1 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '3 · Formas y concentraciones',
            cita: 'round, white to off-white tablet debossed on one side with',
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
      ocurre: 'La mediana del tiempo hasta el pico es de 1,13 horas; una comida rica en grasas no tiene un efecto clínicamente relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta el pico es de 1,13 horas; una comida rica en grasas no tiene un efecto clínicamente relevante.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to achieve peak pemigatinib plasma concentration (T max ) was 1.13 (0.50-6.00) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no tuvo un efecto clínicamente relevante sobre su farmacocinética.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'had no clinically significant effect on pemigatinib pharmacokinetics',
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
      ocurre: 'In vitro se une en un 90,6 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 235 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 90,6 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 235 L.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of pemigatinib was 90.6% and was independent of concentration in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 235 L tras 13,5 mg.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent volume of distribution was 235 L (60.8%) following a 13.5 mg oral dose',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'FGFR1, FGFR2 y FGFR3',
        efecto: 'Inhibe las cinasas FGFR1, 2 y 3 y bloquea su señalización en células tumorales con amplificaciones o fusiones activadoras de FGFR.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las cinasas FGFR1, 2 y 3 y bloquea su señalización en células tumorales con amplificaciones o fusiones activadoras de FGFR.',
            ref: {
              f: 'dailymed-pemigatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pemigatinib is a small molecule kinase inhibitor that targets FGFR1, 2 and 3 with IC 50 values of less than 2 nM',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 in vitro.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Pemigatinib is predominantly metabolized by CYP3A4 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 11 mg marcados, el 82,4 % de la dosis se recuperó en las heces (1,4 % sin cambios) y el 12,6 % en la orina (1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 11 mg marcados, el 82,4 % de la dosis se recuperó en las heces (1,4 % sin cambios) y el 12,6 % en la orina (1 % sin cambios).',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: '82.4% of the dose was recovered in feces (1.4% as unchanged) and 12.6% in urine (1% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 15,4 horas.',
          ref: {
            f: 'dailymed-pemigatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (%CV) elimination half-life (t ½ ) of pemigatinib was 15.4 (51.6%) hours',
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
      valor: '1,13',
      unidad: 'h',
      analito: 'pemigatinib',
      ref: {
        f: 'dailymed-pemigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to achieve peak pemigatinib plasma concentration (T max ) was 1.13 (0.50-6.00) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '90,6',
      unidad: '%',
      analito: 'pemigatinib',
      ref: { f: 'dailymed-pemigatinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of pemigatinib was 90.6%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '235',
      unidad: 'L',
      analito: 'pemigatinib',
      ref: {
        f: 'dailymed-pemigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent volume of distribution was 235 L (60.8%) following a 13.5 mg oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '15,4',
      unidad: 'h',
      analito: 'pemigatinib',
      ref: {
        f: 'dailymed-pemigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'elimination half-life (t ½ ) of pemigatinib was 15.4 (51.6%) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '10,6',
      unidad: 'L/h',
      analito: 'pemigatinib',
      ref: {
        f: 'dailymed-pemigatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the geometric mean apparent clearance (CL/F) was 10.6 L/h (54%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '82,4',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 11 mg',
      ref: {
        f: 'dailymed-pemigatinib',
        sec: '12.3 · Farmacocinética',
        cita: '82.4% of the dose was recovered in feces (1.4% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pemigatinib', '9e1f2222-1d89-4e63-989c-ccebe2ab1eb4', 'PEMAZYRE (PEMIGATINIB) TABLET', 'PEMAZYRE', '17', '2026-06-15', '2026-11-19'),
    rengPubchem(86705695, 'pemigatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
