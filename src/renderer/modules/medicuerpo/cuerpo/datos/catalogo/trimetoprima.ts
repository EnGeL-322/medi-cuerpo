import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'trimetoprima',
    nombre: 'Trimetoprima',
    clase: 'Antibacteriano (inhibidor de la dihidrofolato reductasa)',
    sinonimos: [ 'trimethoprim', 'Primsol' ],
    formula: 'C14H18N4O3',
    masaMolar: 290.32,
    smiles: 'COC1=CC(=CC(=C1OC)OC)CC2=CN=C(N=C2N)N',
    inchikey: 'IEDVJHCEMCRBQM-UHFFFAOYSA-N',
    cid: 5578,
    iupac: '5-[(3,4,5-trimethoxyphenyl)methyl]pyrimidine-2,4-diamine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'trimetoprima-oral',
      producto: 'Trimethoprim · comprimido',
      titular: 'LUPIN PHARMACEUTICALS,INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'cellulose, microcrystalline',
        'sodium starch glycolate type a potato',
        'starch, corn',
        'lactose monohydrate',
        'magnesium stearate',
        'water'
      ],
      usos: {
        t: 'Infecciones por bacterias sensibles demostradas o muy probables, como las urinarias.',
        ref: {
          f: 'dailymed-trimetoprima',
          sec: '1 · Indicaciones',
          cita: 'trimethoprim tablets, USP should be used only to treat or prevent infections that are proven or strongly suspected to be caused by susceptible bacteria',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-trimetoprima',
      advertencias: [
        {
          titulo: 'Alteraciones de la sangre',
          texto: 'Rara vez interfiere con la formación de células de la sangre, sobre todo con dosis altas o tratamientos largos.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-trimetoprima',
            sec: 'Advertencias',
            cita: 'Trimethoprim has been reported rarely to interfere with hematopoiesis',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [ 'Erupción en el 2,9 % al 6,7 %, normalmente leve o moderada, a los 7-14 días de empezar.', '34084-4', 'incidence of rash is 2.9% to 6.7%' ],
        [ 'Digestivas: molestias epigástricas, náuseas, vómitos y glositis.', '34084-4', 'Epigastric distress, nausea, vomiting, and glossitis' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Infecciones por bacterias sensibles demostradas o muy probables, como las urinarias.',
    actua: 'Bloquea la formación de ácido tetrahidrofólico al inhibir la dihidrofolato reductasa, con mucha más afinidad por la enzima bacteriana; así frena la síntesis de ácidos nucleicos y proteínas de la bacteria.',
    recorrido: 'Se absorbe rápido; con 100 mg, el pico sérico (alrededor de 1 mcg/mL) llega en 1 a 4 horas. Sale sobre todo por los riñones, por filtración y secreción tubular: del 50 % al 60 % sale por la orina en 24 horas, un 80 % de ello sin cambios. Su semivida es de 8 a 10 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado de 100 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado de 100 mg.',
          ref: { f: 'dailymed-trimetoprima', sec: '11 · Descripción', cita: 'Each scored white tablet contains 100 mg trimethoprim', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido; con 100 mg, el pico sérico (alrededor de 1 mcg/mL) llega en 1 a 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido; con 100 mg, el pico sérico (alrededor de 1 mcg/mL) llega en 1 a 4 horas.',
          ref: {
            f: 'dailymed-trimetoprima',
            sec: '12 · Farmacología clínica',
            cita: 'Trimethoprim is rapidly absorbed following oral administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vias-urinarias' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 44 % se une a proteínas; en la orina alcanza concentraciones mucho más altas que en la sangre y llega a las heces y a la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 44 % se une a proteínas; en la orina alcanza concentraciones mucho más altas que en la sangre y llega a las heces y a la placenta.',
          ref: {
            f: 'dailymed-trimetoprima',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 44% of trimethoprim is bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Dihidrofolato reductasa bacteriana',
        efecto: 'Bloquea la formación de ácido tetrahidrofólico al inhibir la dihidrofolato reductasa, con mucha más afinidad por la enzima bacteriana; así frena la síntesis de ácidos nucleicos y proteínas de la bacteria.',
        lugar: [ 'vias-urinarias', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Bloquea la formación de ácido tetrahidrofólico al inhibir la dihidrofolato reductasa, con mucha más afinidad por la enzima bacteriana; así frena la síntesis de ácidos nucleicos y proteínas de la bacteria.',
            ref: {
              f: 'dailymed-trimetoprima',
              sec: '12.4 · Microbiología',
              cita: 'Trimethoprim blocks the production of tetrahydrofolic acid from dihydrofolic acid',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Del 10 % al 20 % se metaboliza, sobre todo en el hígado, a óxidos e hidroxiderivados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Del 10 % al 20 % se metaboliza, sobre todo en el hígado, a óxidos e hidroxiderivados.',
          ref: {
            f: 'dailymed-trimetoprima',
            sec: '12 · Farmacología clínica',
            cita: 'Ten to twenty percent of trimethoprim is metabolized, primarily in the liver',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "1- y 3-óxidos y 3'- y 4'-hidroxiderivados",
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-trimetoprima',
            sec: '12 · Farmacología clínica',
            cita: "The principal metabolites of trimethoprim are the 1- and 3-oxides and the 3'- and 4'-hydroxy derivatives",
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por los riñones, por filtración y secreción tubular: del 50 % al 60 % sale por la orina en 24 horas, un 80 % de ello sin cambios. Su semivida es de 8 a 10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por los riñones, por filtración y secreción tubular: del 50 % al 60 % sale por la orina en 24 horas, un 80 % de ello sin cambios. Su semivida es de 8 a 10 horas.',
          ref: {
            f: 'dailymed-trimetoprima',
            sec: '12 · Farmacología clínica',
            cita: 'Excretion of trimethoprim is primarily by the kidneys through glomerular filtration and tubular secretion',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Pico sérico medio',
      valor: '1,0 (aprox.)',
      unidad: 'mcg/mL',
      analito: 'trimetoprima',
      condiciones: 'dosis única de 100 mg',
      ref: {
        f: 'dailymed-trimetoprima',
        sec: '12 · Farmacología clínica',
        cita: 'Mean peak serum concentrations of approximately 1.0 mcg/mL',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-4',
      unidad: 'h',
      analito: 'trimetoprima',
      condiciones: 'dosis única de 100 mg',
      ref: {
        f: 'dailymed-trimetoprima',
        sec: '12 · Farmacología clínica',
        cita: 'occur 1 to 4 hours after oral administration of a single 100 mg dose',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '44 (aprox.)',
      unidad: '%',
      analito: 'trimetoprima',
      ref: {
        f: 'dailymed-trimetoprima',
        sec: '12 · Farmacología clínica',
        cita: 'Approximately 44% of trimethoprim is bound to plasma proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '8-10',
      unidad: 'h',
      analito: 'trimetoprima',
      ref: {
        f: 'dailymed-trimetoprima',
        sec: '12 · Farmacología clínica',
        cita: 'The half-life of trimethoprim ranges from 8 to 10 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 24 h',
      valor: '50-60',
      unidad: '% de la dosis',
      analito: 'trimetoprima y metabolitos',
      ref: {
        f: 'dailymed-trimetoprima',
        sec: '12 · Farmacología clínica',
        cita: '50% to 60% of trimethoprim is excreted in the urine within 24 hours',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-trimetoprima', '249e938d-f181-47c4-a082-372d65462f33', 'TRIMETHOPRIM TABLET', 'Trimethoprim', '6', '2024-12-04', '2026-11-12'),
    rengPubchem(5578, 'trimethoprim', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
