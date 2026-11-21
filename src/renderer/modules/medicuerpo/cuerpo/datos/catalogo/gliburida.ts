import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gliburida',
    nombre: 'Gliburida',
    clase: 'Antidiabético oral (sulfonilurea)',
    sinonimos: [ 'glyburide', 'glibenclamida', 'glibenclamide' ],
    formula: 'C23H28ClN3O5S',
    masaMolar: 494,
    smiles: 'COC1=C(C=C(C=C1)Cl)C(=O)NCCC2=CC=C(C=C2)S(=O)(=O)NC(=O)NC3CCCCC3',
    inchikey: 'ZNNLBTZKUZBEKO-UHFFFAOYSA-N',
    cid: 3488,
    iupac: '5-chloro-N-[2-[4-(cyclohexylcarbamoylsulfamoyl)phenyl]ethyl]-2-methoxybenzamide',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'gliburida-oral',
      producto: 'GLYBURIDE · comprimido',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1.25 mg, 2.5 mg o 5 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'cellulose, microcrystalline', 'magnesium stearate' ],
      usos: {
        t: 'Mejorar el control de la glucemia en adultos con diabetes tipo 2, junto con dieta y ejercicio.',
        ref: {
          f: 'dailymed-gliburida',
          sec: '1 · Indicaciones',
          cita: 'improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gliburida',
      reacciones: [
        [
          'Rara vez: ictericia colestásica y hepatitis, que pueden evolucionar a insuficiencia hepática.',
          '34084-4',
          'Cholestatic jaundice and hepatitis may occur rarely which may progress to liver failure'
        ],
        [
          'Reacciones alérgicas de la piel (picor, enrojecimiento, urticaria, erupciones) en el 1,5 % de los tratados en ensayos.',
          '34084-4',
          'Allergic skin reactions, eg , pruritus, erythema, urticaria, and morbilliform or maculopapular eruptions occurred in 1.5% of treated patients during clinical trials'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 1.25 mg, 2.5 mg o 5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucemia en adultos con diabetes tipo 2, junto con dieta y ejercicio.',
    actua: 'Reduce la glucosa en sangre al estimular la liberación de insulina del páncreas, un efecto que depende de que haya células beta funcionantes.',
    recorrido: 'En personas sanas se observa una absorción importante dentro de la primera hora y el máximo en sangre alrededor de las 4 horas. Se excreta como metabolitos por la bilis y por la orina, aproximadamente la mitad por cada vía.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 1,25 mg, 2,5 mg o 5 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 1,25 mg, 2,5 mg o 5 mg.',
          ref: {
            f: 'dailymed-gliburida',
            sec: '11 · Descripción',
            cita: 'Glyburide tablets, USP contain a smaller particle size glyburide',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En personas sanas se observa una absorción importante dentro de la primera hora y el máximo en sangre alrededor de las 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En personas sanas se observa una absorción importante dentro de la primera hora y el máximo en sangre alrededor de las 4 horas.',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'significant absorption of glyburide within one hour, peak drug levels at about four hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Las sulfonilureas se unen mucho a proteínas del suero; en el caso de la gliburida la unión in vitro es sobre todo no iónica, y otros fármacos ácidos pueden desplazar a las sulfonilureas de iones.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Las sulfonilureas se unen mucho a proteínas del suero; en el caso de la gliburida la unión in vitro es sobre todo no iónica, y otros fármacos ácidos pueden desplazar a las sulfonilureas de iones.',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'Sulfonylurea drugs are extensively bound to serum proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Células beta de los islotes pancreáticos',
        efecto: 'Reduce la glucosa en sangre al estimular la liberación de insulina del páncreas, un efecto que depende de que haya células beta funcionantes.',
        lugar: [ 'pancreas' ],
        datos: [
          {
            t: 'Reduce la glucosa en sangre al estimular la liberación de insulina del páncreas, un efecto que depende de que haya células beta funcionantes.',
            ref: {
              f: 'dailymed-gliburida',
              sec: '12 · Farmacología clínica',
              cita: 'stimulating the release of insulin from the pancreas',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolito principal es el derivado 4-trans-hidroxi; hay un segundo, el 3-cis-hidroxi.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolito principal es el derivado 4-trans-hidroxi; hay un segundo, el 3-cis-hidroxi.',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'The major metabolite of glyburide is the 4-transhydroxy derivative',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado 4-trans-hidroxi',
          actividad: 'desconocida',
          nota: 'Probablemente no aporta acción hipoglucemiante significativa (1/400 de la actividad en conejos).',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'The major metabolite of glyburide is the 4-transhydroxy derivative',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Derivado 3-cis-hidroxi',
          actividad: 'desconocida',
          nota: 'Probablemente sin acción hipoglucemiante significativa (1/40 de la actividad en conejos).',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'A second metabolite, the 3-cishydroxy derivative, also occurs',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta como metabolitos por la bilis y por la orina, aproximadamente la mitad por cada vía.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta como metabolitos por la bilis y por la orina, aproximadamente la mitad por cada vía.',
          ref: {
            f: 'dailymed-gliburida',
            sec: '12 · Farmacología clínica',
            cita: 'Glyburide is excreted as metabolites in the bile and urine, approximately 50% by each route',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'gliburida',
      poblacion: 'personas sanas',
      condiciones: 'dosis única',
      ref: { f: 'dailymed-gliburida', sec: '12 · Farmacología clínica', cita: 'peak drug levels at about four hours', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'gliburida',
      poblacion: 'personas sanas',
      ref: { f: 'dailymed-gliburida', sec: '12 · Farmacología clínica', cita: 'the terminal half-life is about 10 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado por la orina',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      ref: { f: 'dailymed-gliburida', sec: '12 · Farmacología clínica', cita: 'approximately 50% by each route', codigo: '34090-1' }
    },
    {
      magnitud: 'otra',
      nombre: 'Excretado por la bilis',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      ref: { f: 'dailymed-gliburida', sec: '12 · Farmacología clínica', cita: 'approximately 50% by each route', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gliburida', '33418bba-c5ea-4c0f-9d28-31dc2724c6c3', 'GLYBURIDE TABLET', 'GLYBURIDE', '12', '2025-11-17', '2026-11-12'),
    rengPubchem(3488, 'glyburide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
