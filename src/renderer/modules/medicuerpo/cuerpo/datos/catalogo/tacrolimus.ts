import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tacrolimus',
    nombre: 'Tacrolimus',
    clase: 'Inhibidor de calcineurina',
    sinonimos: [ 'tacrolimus', 'Prograf' ],
    formula: 'C44H69NO12',
    masaMolar: 804,
    smiles: 'C[C@@H]1C[C@@H]([C@@H]2[C@H](C[C@H]([C@@](O2)(C(=O)C(=O)N3CCCC[C@H]3C(=O)O[C@@H]([C@@H]([C@H](CC(=O)[C@@H](/C=C(/C1)\\C)CC=C)O)C)/C(=C/[C@@H]4CC[C@H]([C@@H](C4)OC)O)/C)O)C)OC)OC',
    inchikey: 'QJJXYPPXXYFBGM-LFZNUXCKSA-N',
    cid: 445643,
    iupac: '(1R,9S,12S,13R,14S,17R,18E,21S,23S,24R,25S,27R)-1,14-dihydroxy-12-[(E)-1-[(1R,3R,4R)-4-hydroxy-3-methoxycyclohexyl]prop-1-en-2-yl]-23,25-dimethoxy-13,19,21,27-tetramethyl-17-prop-2-enyl-11,28-dioxa-4-azatricyclo[22.3.1.04,9]octacos-18-ene-2,3,10,16-tetrone',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'tacrolimus-oral',
      producto: 'Prograf · cápsula',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg, 1 mg o 5 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tacrolimus anhidro',
        ref: { f: 'dailymed-tacrolimus', sec: '3 · Formas y concentraciones', cita: 'contains anhydrous tacrolimus USP', codigo: '43678-2' }
      },
      excipientes: [ 'croscarmelosa sódica', 'hipromelosa', 'lactosa monohidrato', 'estearato de magnesio' ],
      usos: {
        t: 'Prevención del rechazo en receptores de trasplantes de hígado, riñón, corazón o pulmón según la población y los criterios de la etiqueta.',
        ref: {
          f: 'dailymed-tacrolimus',
          sec: '1 · Indicaciones',
          cita: 'receiving allogeneic liver, kidney, heart, or lung transplants',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tacrolimus',
      reacciones: [
        [ 'Infección y temblor observados en receptores de trasplante renal.', '34084-4', 'infection, tremor, hypertension, abnormal renal function' ],
        [ 'Hipertensión y alteraciones de la función renal en esa población.', '34084-4', 'infection, tremor, hypertension, abnormal renal function' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.5 mg, 1 mg o 5 mg por cápsula, según la etiqueta; el activo va como tacrolimus anhidro. Los excipientes no son el principio activo.',
    usos: 'Prevención del rechazo en receptores de trasplantes de hígado, riñón, corazón o pulmón según la población y los criterios de la etiqueta.',
    actua: 'Se une a FKBP-12. El complejo resultante inhibe calcineurina y reduce la activación de linfocitos T.',
    recorrido: 'La absorción oral es incompleta y variable. La biodisponibilidad depende de la población estudiada. El estudio con marcador citado identifica las heces como vía principal de recuperación de la señal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula oral dura de Prograf.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula oral dura de Prograf.',
          ref: { f: 'dailymed-tacrolimus', sec: '3 · Formas y concentraciones', cita: 'Oblong, hard capsule for oral administration', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción oral es incompleta y variable. La biodisponibilidad depende de la población estudiada.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción oral es incompleta y variable. La biodisponibilidad depende de la población estudiada.',
          ref: {
            f: 'dailymed-tacrolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption of tacrolimus from the gastrointestinal tract after oral administration is incomplete and variable',
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
      ocurre: 'Presenta cerca del 99 % de unión a proteínas plasmáticas y se asocia ampliamente a eritrocitos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Presenta cerca del 99 % de unión a proteínas plasmáticas y se asocia ampliamente a eritrocitos.',
          ref: { f: 'dailymed-tacrolimus', sec: '12.3 · Farmacocinética', cita: 'has a high level of association with erythrocytes', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Complejo FKBP-12 y calcineurina',
        efecto: 'Se une a FKBP-12. El complejo resultante inhibe calcineurina y reduce la activación de linfocitos T.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Se une a FKBP-12. El complejo resultante inhibe calcineurina y reduce la activación de linfocitos T.',
            ref: {
              f: 'dailymed-tacrolimus',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tacrolimus binds to an intracellular protein, FKBP-12',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma extensamente por CYP3A4 y CYP3A5. Entre las vías de transformación in vitro figuran desmetilación e hidroxilación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma extensamente por CYP3A4 y CYP3A5. Entre las vías de transformación in vitro figuran desmetilación e hidroxilación.',
          ref: {
            f: 'dailymed-tacrolimus',
            sec: '12.3 · Farmacocinética',
            cita: 'primarily the cytochrome P-450 system (CYP3A4 and CYP3A5)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El estudio con marcador citado identifica las heces como vía principal de recuperación de la señal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El estudio con marcador citado identifica las heces como vía principal de recuperación de la señal.',
          ref: { f: 'dailymed-tacrolimus', sec: '12.3 · Farmacocinética', cita: 'Fecal elimination accounted for 92.6 ± 30.7%', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio al pico en sangre y desviación estándar',
      valor: '1,5 ± 0,7',
      unidad: 'h',
      analito: 'tacrolimus',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis oral de 5 mg en cápsulas estudiada',
      ref: { f: 'dailymed-tacrolimus', sec: '12.3 · Farmacocinética', cita: '(capsules) 28.8 ± 8.9 1.5 ± 0.7', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tacrolimus', '7f667de1-9dfa-4bd6-8ba0-15ee2d78873b', 'PROGRAF (TACROLIMUS) CAPSULE, GELATIN COATED PROGRAF (TACROLIMUS) INJECTION, SOLUTION PROGRAF (TACROLIMUS) GRANULE, FOR SUSPENSION', 'Prograf', '30', '2025-03-21', '2026-11-12'),
    rengPubchem(445643, 'tacrolimus', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
