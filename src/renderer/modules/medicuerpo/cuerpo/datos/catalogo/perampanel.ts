import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'perampanel',
    nombre: 'Perampanel',
    clase: 'Antiepiléptico (antagonista de los receptores AMPA)',
    sinonimos: [ 'perampanel' ],
    formula: 'C23H15N3O',
    masaMolar: 349.4,
    smiles: 'C1=CC=C(C=C1)N2C=C(C=C(C2=O)C3=CC=CC=C3C#N)C4=CC=CC=N4',
    inchikey: 'PRMWGUBFXWROHD-UHFFFAOYSA-N',
    cid: 9924495,
    iupac: '2-(2-oxo-1-phenyl-5-pyridin-2-yl-3-pyridinyl)benzonitrile',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'perampanel-oral',
      producto: 'PERAMPANEL TEVA 2 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG',
      titular: 'Teva Gmbh',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '2 mg de perampanel por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Celulosa microcristalina',
        'Povidona K-30',
        'Hidroxipropilcelulosa de baja sustitución',
        'Crospovidona (tipo A)',
        'Estearato de magnesio',
        'Alcohol polivinílico (parcialmente hidrolizado)',
        'Dióxido de titanio (E171)',
        'Macrogol 4000',
        'Talco',
        'Óxido de hierro amarillo (E172)'
      ],
      usos: {
        t: 'Tratamiento concomitante de las crisis de inicio parcial, con o sin generalización secundaria, en pacientes desde 4 años; también de las crisis tonicoclónicas generalizadas primarias desde 7 años.',
        ref: {
          f: 'cima-90812',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'las crisis de inicio parcial (CIP) con o sin crisis generalizadas secundarias en pacientes con 4 años de edad y mayores',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-90812',
      advertencias: [
        {
          titulo: 'Ideación y conductas suicidas',
          texto: 'Se han notificado casos en pacientes tratados con antiepilépticos en varias indicaciones.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-90812',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos de ideación y conductas suicidas en pacientes tratados con antiepilépticos en varias indicaciones',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las que más a menudo llevaron a suspender el tratamiento fueron el mareo y la somnolencia.',
          'FT 4.8',
          'que dieron lugar a la suspensión del tratamiento fueron el mareo y la somnolencia'
        ],
        [ 'En los ensayos de crisis de inicio parcial, 1639 pacientes recibieron perampanel.', 'FT 4.8', '1639 pacientes han recibido perampanel' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2 mg de perampanel por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento concomitante de las crisis de inicio parcial, con o sin generalización secundaria, en pacientes desde 4 años; también de las crisis tonicoclónicas generalizadas primarias desde 7 años.',
    actua: 'Es un antagonista no competitivo y selectivo de los receptores AMPA de glutamato en las neuronas postsinápticas; el glutamato es el principal neurotransmisor excitatorio del sistema nervioso central.',
    recorrido: 'Se absorbe fácilmente tras la administración oral, sin indicios de un metabolismo de primer paso marcado. Tras una dosis marcada, alrededor del 30 % de la radiactividad se halló en la orina y el 70 % en las heces, sobre todo como metabolitos oxidativos y conjugados.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-90812', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película (comprimido)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe fácilmente tras la administración oral, sin indicios de un metabolismo de primer paso marcado.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe fácilmente tras la administración oral, sin indicios de un metabolismo de primer paso marcado.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Perampanel se absorbe fácilmente tras la administración oral sin indicios de un metabolismo de primer paso marcado',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos ricos en grasas no cambió la exposición plasmática máxima ni la total, y el Tmax se retrasó aproximadamente 1 hora.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El t máx se retrasó aproximadamente 1 hora en comparación con la administración en ayunas',
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
      ocurre: 'Aproximadamente el 95 % de perampanel se une a las proteínas del plasma, según estudios in vitro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 95 % de perampanel se une a las proteínas del plasma, según estudios in vitro.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aproximadamente el 95 % de perampanel se une a las proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor AMPA de glutamato',
        efecto: 'Es un antagonista no competitivo y selectivo de los receptores AMPA de glutamato en las neuronas postsinápticas; el glutamato es el principal neurotransmisor excitatorio del sistema nervioso central.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un antagonista no competitivo y selectivo de los receptores AMPA de glutamato en las neuronas postsinápticas; el glutamato es el principal neurotransmisor excitatorio del sistema nervioso central.',
            ref: {
              f: 'cima-90812',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Perampanel es el primer antagonista en su clase no competitivo y selectivo de los receptores ionotrópicos de glutamato de tipo AMPA',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por oxidación primaria y glucuronidación posterior, mediada principalmente por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por oxidación primaria y glucuronidación posterior, mediada principalmente por la CYP3A.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Perampanel se metaboliza de forma extensa mediante oxidación primaria y glucuronidación posterior',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos oxidativos y conjugados',
          actividad: 'desconocida',
          nota: 'En el plasma solo se observaron cantidades mínimas.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'solo se observaron cantidades mínimas de los metabolitos de perampanel en el plasma',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 30 % de la radiactividad se halló en la orina y el 70 % en las heces, sobre todo como metabolitos oxidativos y conjugados.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 30 % de la radiactividad se halló en la orina y el 70 % en las heces, sobre todo como metabolitos oxidativos y conjugados.',
          ref: {
            f: 'cima-90812',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aproximadamente el 30 % de la radiactividad recuperada se encontró en la orina y el 70 % en las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El t1/2 promedio de perampanel fue de 105 horas.',
          ref: { f: 'cima-90812', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el t 1/2 promedio de perampanel fue de 105 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'perampanel',
      condiciones: 'in vitro',
      ref: {
        f: 'cima-90812',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente el 95 % de perampanel se une a las proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida promedio',
      valor: '105',
      unidad: 'h',
      analito: 'perampanel',
      ref: { f: 'cima-90812', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el t 1/2 promedio de perampanel fue de 105 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '30 (aprox.)',
      unidad: '% del total',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis de perampanel marcado',
      ref: {
        f: 'cima-90812',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente el 30 % de la radiactividad recuperada se encontró en la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '70 (aprox.)',
      unidad: '% del total',
      analito: 'radiactividad total',
      poblacion: 'adultos sanos',
      condiciones: 'dosis de perampanel marcado',
      ref: { f: 'cima-90812', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 70 % en las heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-90812', '90812', 'PERAMPANEL TEVA 2 MG COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG (Teva Gmbh)', '2026-11-06', '2026-11-15'),
    rengPubchem(9924495, 'perampanel', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
