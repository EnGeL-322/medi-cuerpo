import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lovastatina',
    nombre: 'Lovastatina',
    clase: 'Estatina (inhibidor de la HMG-CoA reductasa)',
    sinonimos: [ 'lovastatin', 'Mevacor' ],
    formula: 'C24H36O5',
    masaMolar: 404.5,
    smiles: 'CC[C@H](C)C(=O)O[C@H]1C[C@H](C=C2[C@H]1[C@H]([C@H](C=C2)C)CC[C@@H]3C[C@H](CC(=O)O3)O)C',
    inchikey: 'PCZOHLXUXFIOCF-BXMDZJJMSA-N',
    cid: 53232,
    iupac: '[(1S,3R,7S,8S,8aR)-8-[2-[(2R,4R)-4-hydroxy-6-oxooxan-2-yl]ethyl]-3,7-dimethyl-1,2,3,7,8,8a-hexahydronaphthalen-1-yl] (2S)-2-methylbutanoate',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'lovastatina-oral',
      producto: 'Lovastatin · comprimido',
      titular: 'LUPIN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg o 40 mg por comprimido, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'butylated hydroxyanisole',
        'd&c yellow no. 10',
        'fd&c blue no. 2',
        'cellulose, microcrystalline',
        'lactose monohydrate',
        'magnesium stearate',
        'starch, corn'
      ],
      usos: {
        t: 'Bajar el colesterol total y el LDL en personas con dislipemia y riesgo de enfermedad vascular aterosclerótica, junto con la dieta.',
        ref: { f: 'dailymed-lovastatina', sec: '1 · Indicaciones', cita: 'to lower total-C and LDL-C to target levels', codigo: '34067-9' }
      },
      fuente: 'dailymed-lovastatina',
      advertencias: [
        {
          titulo: 'Miopatía y rabdomiólisis',
          texto: 'Ocasionalmente causa miopatía con dolor o debilidad muscular y CK muy elevada; a veces rabdomiólisis con insuficiencia renal.',
          organos: [ 'musculos', 'rinones' ],
          ref: {
            f: 'dailymed-lovastatina',
            sec: 'Advertencias',
            cita: 'occasionally causes myopathy manifested as muscle pain, tenderness or weakness',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Flatulencia, estreñimiento, diarrea, dolor abdominal y mialgias, con frecuencias parecidas a las del placebo en el ensayo EXCEL.',
          '34084-4',
          'Gastrointestinal Abdominal pain 1.6 2.0 2.0 2.2 2.5'
        ],
        [ 'Dolor muscular (mialgia) en el 1,8 % al 3,0 % según la dosis.', '34084-4', 'Myalgia 1.7 2.6 1.8 2.2 3.0' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 20 mg o 40 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Bajar el colesterol total y el LDL en personas con dislipemia y riesgo de enfermedad vascular aterosclerótica, junto con la dieta.',
    actua: 'Es una lactona inactiva que se hidroliza a su beta-hidroxiácido, un potente inhibidor de la HMG-CoA reductasa, enzima clave de la síntesis del colesterol.',
    recorrido: 'La absorción estimada en cuatro especies animales rondó el 30 %; tiene una extracción hepática de primer paso amplia. Tomada en ayunas, los inhibidores totales en plasma fueron unos dos tercios de los obtenidos con comida. Con lovastatina marcada, el 10 % de la dosis salió por la orina y el 83 % por las heces (lo excretado en la bilis más lo no absorbido).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido; tras tomarlo, la lovastatina (una lactona inactiva) se hidroliza a su forma beta-hidroxiácido.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido; tras tomarlo, la lovastatina (una lactona inactiva) se hidroliza a su forma beta-hidroxiácido.',
          ref: {
            f: 'dailymed-lovastatina',
            sec: '11 · Descripción',
            cita: 'After oral ingestion, lovastatin, which is an inactive lactone, is hydrolyzed to the corresponding β-hydroxyacid form',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción estimada en cuatro especies animales rondó el 30 %; tiene una extracción hepática de primer paso amplia. Tomada en ayunas, los inhibidores totales en plasma fueron unos dos tercios de los obtenidos con comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción estimada en cuatro especies animales rondó el 30 %; tiene una extracción hepática de primer paso amplia. Tomada en ayunas, los inhibidores totales en plasma fueron unos dos tercios de los obtenidos con comida.',
          ref: {
            f: 'dailymed-lovastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption of lovastatin, estimated relative to an intravenous reference dose, in each of four animal species tested, averaged about 30% of an oral dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico de inhibidores activos y totales llega en 2 a 4 horas.',
          ref: {
            f: 'dailymed-lovastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations of both active and total inhibitors were attained within 2 to 4 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La lovastatina y su beta-hidroxiácido se unen a proteínas del plasma en más del 95 %; actúa sobre todo en el hígado, donde sufre un primer paso amplio.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La lovastatina y su beta-hidroxiácido se unen a proteínas del plasma en más del 95 %; actúa sobre todo en el hígado, donde sufre un primer paso amplio.',
          ref: {
            f: 'dailymed-lovastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'Both lovastatin and its β-hydroxyacid metabolite are highly bound (>95%) to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'HMG-CoA reductasa',
        efecto: 'Es una lactona inactiva que se hidroliza a su beta-hidroxiácido, un potente inhibidor de la HMG-CoA reductasa, enzima clave de la síntesis del colesterol.',
        lugar: [ 'higado' ],
        datos: [
          {
            t: 'Es una lactona inactiva que se hidroliza a su beta-hidroxiácido, un potente inhibidor de la HMG-CoA reductasa, enzima clave de la síntesis del colesterol.',
            ref: {
              f: 'dailymed-lovastatina',
              sec: '12 · Farmacología clínica',
              cita: 'readily hydrolyzed in vivo to the corresponding β-hydroxyacid, a strong inhibitor of HMG-CoA reductase',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "Además del beta-hidroxiácido se forman su derivado 6'-hidroxi y otros dos metabolitos activos; CYP3A4 participa en su metabolismo.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "Además del beta-hidroxiácido se forman su derivado 6'-hidroxi y otros dos metabolitos activos; CYP3A4 participa en su metabolismo.",
          ref: {
            f: 'dailymed-lovastatina',
            sec: '12.3 · Farmacocinética',
            cita: 'The major active metabolites present in human plasma are the β-hydroxyacid of lovastatin, its 6′-hydroxy derivative, and two additional metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Beta-hidroxiácido de lovastatina',
          actividad: 'activo',
          nota: 'Forma activa: inhibe la HMG-CoA reductasa.',
          ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: 'a strong inhibitor of HMG-CoA reductase', codigo: '43682-4' }
        },
        {
          nombre: "Derivado 6'-hidroxi",
          actividad: 'activo',
          ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: 'its 6′-hydroxy derivative', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'bilis', 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con lovastatina marcada, el 10 % de la dosis salió por la orina y el 83 % por las heces (lo excretado en la bilis más lo no absorbido).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con lovastatina marcada, el 10 % de la dosis salió por la orina y el 83 % por las heces (lo excretado en la bilis más lo no absorbido).',
          ref: {
            f: 'dailymed-lovastatina',
            sec: '12.3 · Farmacocinética',
            cita: '10% of the dose was excreted in urine and 83% in feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de inhibidores activos y totales',
      valor: '2-4',
      unidad: 'h',
      analito: 'inhibidores de HMG-CoA reductasa (activos y totales)',
      ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: 'attained within 2 to 4 hours of dose administration', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 95',
      unidad: '%',
      analito: 'lovastatina y su beta-hidroxiácido',
      ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: 'are highly bound (>95%) to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces',
      valor: '83',
      unidad: '% de la dosis',
      analito: 'lovastatina marcada (incluye lo no absorbido)',
      ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: '10% of the dose was excreted in urine and 83% in feces', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Absorción estimada en animales',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'lovastatina',
      poblacion: 'cuatro especies animales',
      ref: { f: 'dailymed-lovastatina', sec: '12.3 · Farmacocinética', cita: 'averaged about 30% of an oral dose', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lovastatina', 'df7ddf4f-d569-431e-81f1-9129d7043150', 'LOVASTATIN TABLET', 'Lovastatin', '18', '2026-11-05', '2026-11-12'),
    rengPubchem(53232, 'lovastatin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
