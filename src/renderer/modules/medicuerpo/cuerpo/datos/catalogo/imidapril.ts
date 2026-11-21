import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'imidapril',
    nombre: 'Imidapril',
    clase: 'Inhibidor de la enzima conversora de la angiotensina (IECA)',
    sinonimos: [ 'imidapril', 'Hipertene' ],
    formula: 'C20H27N3O6',
    masaMolar: 405.4,
    smiles: 'CCOC(=O)[C@H](CCC1=CC=CC=C1)N[C@@H](C)C(=O)N2[C@@H](CN(C2=O)C)C(=O)O',
    inchikey: 'KLZWOWYOHUKJIG-BPUTZDHNSA-N',
    cid: 5464343,
    iupac: '(4S)-3-[(2S)-2-[[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino]propanoyl]-1-methyl-2-oxoimidazolidine-4-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'imidapril-oral',
      producto: 'HIPERTENE 5 mg COMPRIMIDOS',
      titular: 'Laboratorios Bial S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '5 mg de hidrocloruro de imidapril por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de imidapril',
        ref: { f: 'cima-63425', sec: '2 · Composición cualitativa y cuantitativa', cita: '5 mg de hidrocloruro de imidapril', codigo: 'FT 2' }
      },
      excipientes: [ 'Hidrógeno fosfato de calcio anhidro', 'Almidón pregelatinizado', 'Lactosa monohidrato', 'Croscarmelosa sódica', 'Diestearato de glicerol' ],
      usos: {
        t: 'Tratamiento de la hipertensión esencial en adultos.',
        ref: {
          f: 'cima-63425',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Hipertene está indicado para el tratamiento de la hipertensión esencial en adultos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-63425',
      advertencias: [
        {
          titulo: 'Hipotensión',
          texto: 'Puede provocar un descenso acentuado de la presión arterial, sobre todo tras la primera dosis.',
          organos: [ 'vasos', 'corazon' ],
          ref: {
            f: 'cima-63425',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'el imidapril puede provocar un descenso acentuado de la presión arterial, sobre todo después de la primera dosis',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En pacientes hipertensos, las reacciones adversas fueron del 34 % con imidapril y del 36 % con placebo.',
          'FT 4.8',
          'La incidencia de reacciones adversas en pacientes hipertensos tratados con imidapril ha sido del 34%, y con placebo del 36%'
        ],
        [
          'Con imidapril fueron más frecuentes la tos, los mareos, la fatiga o somnolencia, la dispepsia y los vómitos.',
          'FT 4.8',
          'En el grupo de imidapril fueron más frecuentes la tos, los mareos, la fatiga/somnolencia, la dispepsia y los vómitos'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg de hidrocloruro de imidapril por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión esencial en adultos.',
    actua: 'Su efecto hipotensor parece obedecer fundamentalmente a la supresión del sistema renina-angiotensina-aldosterona en el plasma; es un inhibidor de la ECA.',
    recorrido: 'Se absorbe con rapidez en el tubo digestivo y alcanza su concentración plasmática máxima en un plazo de dos horas. Tras una dosis oral marcada, cerca del 40 % de la radiactividad total se excreta por la orina y alrededor del 50 % por las heces.'
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
          ref: { f: 'cima-63425', sec: '3 · Forma farmacéutica', cita: 'Comprimido biconvexo, oblongo, blanquecino, con un borde plano', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez en el tubo digestivo y alcanza su concentración plasmática máxima en un plazo de dos horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez en el tubo digestivo y alcanza su concentración plasmática máxima en un plazo de dos horas.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración oral, el imidapril se absorbe con rapidez en el tubo digestivo y alcanza su concentración plasmática máxima en un plazo de dos horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La absorción se acerca al 70 %.',
          ref: { f: 'cima-63425', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La absorción se acerca al 70%', codigo: 'FT 5.2' }
        },
        {
          t: 'Las comidas ricas en grasas disminuyen significativamente la absorción.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las comidas ricas en grasas disminuyen significativamente la absorción del imidapril',
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
      ocurre: 'La unión a las proteínas fue moderada: 85 % para el imidapril y 53 % para el imidaprilato.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas fue moderada: 85 % para el imidapril y 53 % para el imidaprilato.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión del imidapril y el imidaprilato a las proteínas fue moderada (85% y 53%, respectivamente)',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Enzima conversora de la angiotensina (ECA)',
        efecto: 'Su efecto hipotensor parece obedecer fundamentalmente a la supresión del sistema renina-angiotensina-aldosterona en el plasma; es un inhibidor de la ECA.',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'Su efecto hipotensor parece obedecer fundamentalmente a la supresión del sistema renina-angiotensina-aldosterona en el plasma; es un inhibidor de la ECA.',
            ref: {
              f: 'cima-63425',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El efecto hipotensor del imidapril en la hipertensión parece obedecer fundamentalmente a la supresión del sistema renina-angiotensina-aldosterona en plasma',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se hidroliza fundamentalmente a su metabolito activo, el imidaprilato, cuya concentración plasmática máxima se alcanza en 7 horas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se hidroliza fundamentalmente a su metabolito activo, el imidaprilato, cuya concentración plasmática máxima se alcanza en 7 horas.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El imidapril se hidroliza fundamentalmente en su metabolito',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Imidaprilato',
          actividad: 'activo',
          nota: 'Metabolito farmacológicamente activo.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'su metabolito farmacoló gicamente activo, el imidaprilato',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, cerca del 40 % de la radiactividad total se excreta por la orina y alrededor del 50 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, cerca del 40 % de la radiactividad total se excreta por la orina y alrededor del 50 % por las heces.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'cerca del 40% de la radiactividad total se excreta en la orina y alrededor del 50% en las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones del imidaprilato descienden de forma bifásica, con una semivida inicial de 7-9 horas y una terminal de más de 24 horas.',
          ref: {
            f: 'cima-63425',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'con una semivida inicial de 7-9 horas y una semivida terminal de más de 24 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima del imidapril',
      valor: '2',
      unidad: 'h',
      analito: 'imidapril',
      ref: {
        f: 'cima-63425',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanza su concentración plasmática máxima en un plazo de dos horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Absorción',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'imidapril',
      ref: { f: 'cima-63425', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La absorción se acerca al 70%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión del imidapril a proteínas',
      valor: '85',
      unidad: '%',
      analito: 'imidapril',
      ref: {
        f: 'cima-63425',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión del imidapril y el imidaprilato a las proteínas fue moderada (85% y 53%, respectivamente)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación del imidapril',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'imidapril',
      ref: { f: 'cima-63425', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una semivida de eliminación aproximada de 2 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada por la orina',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de imidapril marcado',
      ref: {
        f: 'cima-63425',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'cerca del 40% de la radiactividad total se excreta en la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada por las heces',
      valor: '50 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de imidapril marcado',
      ref: { f: 'cima-63425', sec: '5.2 · Propiedades farmacocinéticas', cita: 'alrededor del 50% en las heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-63425', '63425', 'HIPERTENE 5 mg COMPRIMIDOS (Laboratorios Bial S.A.)', '2026-07-06', '2026-11-15'),
    rengPubchem(5464343, 'imidapril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
