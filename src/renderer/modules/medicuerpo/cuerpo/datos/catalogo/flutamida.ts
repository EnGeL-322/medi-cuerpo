import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'flutamida',
    nombre: 'Flutamida',
    clase: 'Antiandrógeno no esteroideo',
    sinonimos: [ 'flutamide' ],
    formula: 'C11H11F3N2O3',
    masaMolar: 276.21,
    smiles: 'CC(C)C(=O)NC1=CC(=C(C=C1)[N+](=O)[O-])C(F)(F)F',
    inchikey: 'MKXKFYHWDHIYRV-UHFFFAOYSA-N',
    cid: 3397,
    iupac: '2-methyl-N-[4-nitro-3-(trifluoromethyl)phenyl]propanamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'flutamida-oral',
      producto: 'FLUTAMIDA CINFA 250 mg COMPRIMIDOS EFG',
      titular: 'Laboratorios Cinfa S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '250 mg de flutamida por comprimido, según la ficha técnica',
      excipientes: [ 'Lactosa monohidrato', 'Laurilsulfato sódico', 'Celulosa microcristalina', 'Almidón de maíz', 'Dióxido de sílice', 'Estearato magnésico' ],
      usos: {
        t: 'Tratamiento del carcinoma prostático avanzado en el que esté indicada la supresión de los efectos de la testosterona.',
        ref: {
          f: 'cima-62912',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento del carcinoma prostático avanzado en el que esté indicado la supresión de los efectos de la testosterona',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-62912',
      advertencias: [
        {
          titulo: 'Daño hepático',
          texto: 'Se han comunicado alteraciones de las transaminasas, ictericia colestásica y necrosis y encefalopatía hepáticas.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-62912',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Con el uso de flutamida se han comunicado alteraciones de las transaminasas e ictericia colestática así como necrosis y encefalopatía hepáticas',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más comunicadas en monoterapia son la ginecomastia o la sensibilidad mamaria, a veces con galactorrea.',
          'FT 4.8',
          'Las reacciones adversas a flutamida comunicadas más a menudo en estudios clínicos son ginecomastia y/o sensibilidad mamaria, acompañadas a veces de galactorrea'
        ],
        [
          'Combinada con agonistas de la LHRH: sofocos, disminución de la libido, impotencia, diarrea, náuseas y vómitos.',
          'FT 4.8',
          'las reacciones adversas comunicadas con mayor frecuencia durante el tratamiento combinado de flutamida con agonistas LHRH fueron sofocos, disminución de la libido, impotencia, diarrea, náuseas y vómitos'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 250 mg de flutamida por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del carcinoma prostático avanzado en el que esté indicada la supresión de los efectos de la testosterona.',
    actua: 'Es un antiandrógeno oral no esteroideo del grupo de las anilidas: ejerce su acción por inhibición de la captación de andrógenos o de la unión de estos a su receptor.',
    recorrido: 'Se absorbe bien tras la ingestión oral. Aproximadamente el 45 % de la dosis se excreta por la orina y el 2 % por las heces en los dos primeros días.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-62912', sec: '3 · Forma farmacéutica', cita: 'Comprimidos de color amarillo brillante', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien tras la ingestión oral.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien tras la ingestión oral.',
          ref: { f: 'cima-62912', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Flutamida se absorbe bien tras la ingestión oral', codigo: 'FT 5.2' }
        },
        {
          t: 'El metabolito alfa-hidroxilado activo alcanza sus niveles plasmáticos máximos en aproximadamente dos horas.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito alfa-hidroxilado biológicamente activo alcanza niveles plasmáticos máximos aproximadamente en dos horas',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alta proporción a las proteínas (94 % a 96 %) y su metabolito activo, en una proporción del 92 % al 94 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alta proporción a las proteínas (94 % a 96 %) y su metabolito activo, en una proporción del 92 % al 94 %.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Flutamida se une en alta proporción a las proteínas (94 al 96%) y su metabolito activo lo hace en una proporción del 92 al 94%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor de andrógenos',
        efecto: 'Es un antiandrógeno oral no esteroideo del grupo de las anilidas: ejerce su acción por inhibición de la captación de andrógenos o de la unión de estos a su receptor.',
        lugar: [ 'prostata' ],
        datos: [
          {
            t: 'Es un antiandrógeno oral no esteroideo del grupo de las anilidas: ejerce su acción por inhibición de la captación de andrógenos o de la unión de estos a su receptor.',
            ref: {
              f: 'cima-62912',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La flutamida es un antiandrogénico oral no esteroide del grupo de las anilidas',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se convierte rápida y ampliamente en metabolitos: se identificaron al menos seis en el plasma hasta 8 horas después de la administración.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se convierte rápida y ampliamente en metabolitos: se identificaron al menos seis en el plasma hasta 8 horas después de la administración.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los estudios con flutamida radiomarcada revelan una rápida y amplia conversión a sus metabolitos habiendo sido identificados al menos seis en el plasma hasta 8 horas después de la administración',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado alfa-hidroxilado',
          actividad: 'activo',
          nota: 'Metabolito plasmático principal, biológicamente activo.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito plasmático principal, un derivado alfa-hidroxilado biológicamente activo, representa el 23% en el plasma radiomarcado una hora después de la administración del fármaco',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Aproximadamente el 45 % de la dosis se excreta por la orina y el 2 % por las heces en los dos primeros días.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Aproximadamente el 45 % de la dosis se excreta por la orina y el 2 % por las heces en los dos primeros días.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 45% de la dosis administrada se excreta en la orina y el 2% en las heces, durante los primeros dos días',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida plasmática del metabolito activo es de alrededor de 6 horas en el adulto y de 8 horas en voluntarios sanos de edad avanzada.',
          ref: {
            f: 'cima-62912',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida plasmática para este metabolito es alrededor de 6 horas en el adulto y de 8 horas en voluntarios sanos de edad avanzada',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del metabolito activo',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'metabolito alfa-hidroxilado',
      ref: {
        f: 'cima-62912',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanza niveles plasmáticos máximos aproximadamente en dos horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '94-96',
      unidad: '%',
      analito: 'flutamida',
      ref: {
        f: 'cima-62912',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Flutamida se une en alta proporción a las proteínas (94 al 96%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática del metabolito activo',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'metabolito alfa-hidroxilado',
      poblacion: 'adultos',
      ref: {
        f: 'cima-62912',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida plasmática para este metabolito es alrededor de 6 horas en el adulto',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina en dos días',
      valor: '45 (aprox.)',
      unidad: '% de la dosis',
      analito: 'flutamida y metabolitos',
      ref: {
        f: 'cima-62912',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 45% de la dosis administrada se excreta en la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces en dos días',
      valor: '2 (aprox.)',
      unidad: '% de la dosis',
      analito: 'flutamida y metabolitos',
      ref: { f: 'cima-62912', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 2% en las heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-62912', '62912', 'FLUTAMIDA CINFA 250 mg COMPRIMIDOS EFG (Laboratorios Cinfa S.A.)', '2021-03-25', '2026-11-15'),
    rengPubchem(3397, 'flutamide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
