import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dronedarona',
    nombre: 'Dronedarona',
    clase: 'Antiarrítmico de clase III',
    sinonimos: [ 'dronedarone' ],
    formula: 'C31H44N2O5S',
    masaMolar: 556.8,
    smiles: 'CCCCC1=C(C2=C(O1)C=CC(=C2)NS(=O)(=O)C)C(=O)C3=CC=C(C=C3)OCCCN(CCCC)CCCC',
    inchikey: 'ZQTNQVWKHCQYLQ-UHFFFAOYSA-N',
    cid: 208898,
    iupac: 'N-[2-butyl-3-[4-[3-(dibutylamino)propoxy]benzoyl]-1-benzofuran-5-yl]methanesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'dronedarona-oral',
      producto: 'DRONEDARONA TEVA 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Teva B.V.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '400 mg de dronedarona (como hidrocloruro) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de dronedarona',
        ref: { f: 'cima-84026', sec: '2 · Composición cualitativa y cuantitativa', cita: '400 mg de dronedarona (como hidrocloruro)', codigo: 'FT 2' }
      },
      excipientes: [
        'Hipromelosa',
        'Almidón de maíz pregelatinizado',
        'Crospovidona',
        'Lactosa monohidrato',
        'Sílice coloidal anhidra',
        'Estearato magnésico',
        'Hipromelosa (E464)',
        'Macrogol (E1521)',
        'Dióxido de titanio (E171)'
      ],
      usos: {
        t: 'Mantenimiento del ritmo sinusal tras una cardioversión efectiva en adultos clínicamente estables con fibrilación auricular.',
        ref: {
          f: 'cima-84026',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Dronedarona Teva está indicado para el mantenimiento del ritmo sinusal después de una cardioversión efectiva en pacientes adultos clínicamente estables con fibrilación',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-84026',
      advertencias: [
        {
          titulo: 'Fibrilación auricular permanente',
          texto: 'Un estudio en pacientes con fibrilación auricular permanente y riesgo cardiovascular se interrumpió prematuramente por un exceso de mortalidad.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-84026',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Un estudio clínico en pacientes con FA permanente (FA de al menos 6 meses de duración) y riesgo de factores cardiovasculares fue interrumpido prematuramente',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Control de la función cardíaca, hepática y pulmonar',
          texto: 'Durante el tratamiento se recomienda un control cuidadoso con evaluación regular de la función cardíaca, hepática y pulmonar.',
          organos: [ 'corazon', 'higado', 'pulmones' ],
          ref: {
            f: 'cima-84026',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Durante la administración de dronedarona se recomienda un control cuidados mediante la evaluación regular de la función cardiaca, hepática y pulmonar',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes con 400 mg dos veces al día: diarrea (9 %) y náuseas (5 %), entre otras.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes observadas con dronedarona 400 mg dos veces al día en los 5 estudios fueron diarrea (9%), náuseas (5%)'
        ],
        [
          'La interrupción temprana por reacciones adversas ocurrió en el 11,8 % de los tratados con dronedarona y en el 7,7 % con placebo.',
          'FT 4.8',
          'ocurrió en el 11,8 % de los pacientes tratados con dronedarona y en el 7,7% en el grupo placebo'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 400 mg de dronedarona (como hidrocloruro) por comprimido, según la ficha técnica; el activo va como hidrocloruro de dronedarona. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento del ritmo sinusal tras una cardioversión efectiva en adultos clínicamente estables con fibrilación auricular.',
    actua: 'En animales previene la fibrilación auricular o restablece el ritmo sinusal normal según el modelo, y también previene la taquicardia y la fibrilación ventriculares en varios modelos.',
    recorrido: 'Con alimentos se absorbe bien (al menos un 70 %), pero por el efecto de primer paso presistémico la biodisponibilidad absoluta con la comida es del 15 %. Tras la administración oral de dosis marcada, alrededor del 6 % se excreta por la orina, sobre todo como metabolitos, y el 84 % por las heces, también sobre todo como metabolitos.'
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
          ref: { f: 'cima-84026', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película (comprimido)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Con alimentos se absorbe bien (al menos un 70 %), pero por el efecto de primer paso presistémico la biodisponibilidad absoluta con la comida es del 15 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con alimentos se absorbe bien (al menos un 70 %), pero por el efecto de primer paso presistémico la biodisponibilidad absoluta con la comida es del 15 %.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sin embargo debido al efecto de primer paso metabólico presistémico, la biodisponibilidad absoluta de dronedarona (junto con la comida) es de un 15%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta con alimentos aumenta la biodisponibilidad de 2 a 4 veces de media.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta concomitante con alimentos incrementa la biodisponibilidad de dronedarona de 2 a 4 veces de media',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos, los picos de dronedarona y de su metabolito N-debutilo se alcanzan en 3-6 horas.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el pico de concentraciones plasmáticas de dronedarona y del principal metabolito circulante (metabolito N-debutilo) se alcanzan en 3-6 horas',
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
      ocurre: 'La unión a proteínas del plasma in vitro es del 99,7 % para la dronedarona y del 98,5 % para su metabolito N-debutilo, sobre todo a la albúmina, y no es saturable.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma in vitro es del 99,7 % para la dronedarona y del 98,5 % para su metabolito N-debutilo, sobre todo a la albúmina, y no es saturable.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión plasmática a proteínas de dronedarona in vitro y de su metabolito N-debutilo es de 99,7% y 98,5% respectivamente y no es saturable',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras la vía intravenosa, el volumen de distribución en el estado estacionario varió de 1.200 a 1.400 L.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración intravenosa el volumen de distribución en el estado estacionario (Vss) varió de 1.200 a 1.400 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'En animales previene la fibrilación auricular o restablece el ritmo sinusal normal según el modelo, y también previene la taquicardia y la fibrilación ventriculares en varios modelos.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'En animales previene la fibrilación auricular o restablece el ritmo sinusal normal según el modelo, y también previene la taquicardia y la fibrilación ventriculares en varios modelos.',
            ref: {
              f: 'cima-84026',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'En animales, dronedarona previene la fibrilación auricular o restablece el ritmo sinusal normal dependiendo del modelo utilizado',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente, sobre todo por la CYP3A4; la vía principal es la N-debutilación, que forma el principal metabolito activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente, sobre todo por la CYP3A4; la vía principal es la N-debutilación, que forma el principal metabolito activo.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Dronedarona se metaboliza ampliamente, principalmente por el CYP 3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito N-debutilo',
          actividad: 'activo',
          nota: 'Activo, de 3 a 10 veces menos potente que la dronedarona; contribuye a la actividad farmacológica.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito N-debutilo muestra actividad farmacodinámica pero es de 3 a 10 veces menos potente que dronedarona',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Metabolito ácido propanoico',
          actividad: 'inactivo',
          nota: 'Inactivo.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'desaminación oxidativa para formar el metabolito ácido propanoico inactivo',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la administración oral de dosis marcada, alrededor del 6 % se excreta por la orina, sobre todo como metabolitos, y el 84 % por las heces, también sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la administración oral de dosis marcada, alrededor del 6 % se excreta por la orina, sobre todo como metabolitos, y el 84 % por las heces, también sobre todo como metabolitos.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aproximadamente el 6% de la dosis marcada se excreta en orina principalmente como metabolitos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de aproximadamente 25-30 horas y la de su metabolito N-debutilo, de 20-25 horas.',
          ref: {
            f: 'cima-84026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación terminal es de aproximadamente 25-30 horas y la de su metabolito N-debutilo alrededor de 20-25 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (con la comida)',
      valor: '15',
      unidad: '%',
      analito: 'dronedarona',
      condiciones: 'con la comida',
      ref: {
        f: 'cima-84026',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la biodisponibilidad absoluta de dronedarona (junto con la comida) es de un 15%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático (con alimentos)',
      valor: '3-6',
      unidad: 'h',
      analito: 'dronedarona y metabolito N-debutilo',
      condiciones: 'con alimentos',
      ref: { f: 'cima-84026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se alcanzan en 3-6 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,7',
      unidad: '%',
      analito: 'dronedarona',
      condiciones: 'in vitro',
      ref: { f: 'cima-84026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de 99,7% y 98,5% respectivamente y no es saturable', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en el estado estacionario',
      valor: '1.200-1.400',
      unidad: 'L',
      analito: 'dronedarona',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: { f: 'cima-84026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'varió de 1.200 a 1.400 l', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '25-30 (aprox.)',
      unidad: 'h',
      analito: 'dronedarona',
      ref: {
        f: 'cima-84026',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación terminal es de aproximadamente 25-30 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis marcada excretada por las heces',
      valor: '84 (aprox.)',
      unidad: '% de la dosis',
      analito: 'dronedarona y metabolitos',
      condiciones: 'dosis oral marcada',
      ref: { f: 'cima-84026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 84% se excreta en heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-84026', '84026', 'DRONEDARONA TEVA 400 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Teva B.V.)', '2025-06-18', '2026-11-15'),
    rengPubchem(208898, 'dronedarone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
