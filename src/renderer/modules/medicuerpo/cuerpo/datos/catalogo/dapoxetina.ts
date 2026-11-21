import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dapoxetina',
    nombre: 'Dapoxetina',
    clase: 'Inhibidor selectivo de la recaptación de serotonina (para la eyaculación precoz)',
    sinonimos: [ 'dapoxetine', 'Priligy' ],
    formula: 'C21H23NO',
    masaMolar: 305.4,
    smiles: 'CN(C)[C@@H](CCOC1=CC=CC2=CC=CC=C21)C3=CC=CC=C3',
    inchikey: 'USRHYDPUVLEVMC-FQEVSTJZSA-N',
    cid: 71353,
    iupac: '(1S)-N,N-dimethyl-3-naphthalen-1-yloxy-1-phenylpropan-1-amine',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'dapoxetina-oral',
      producto: 'PRILIGY 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Phoenix Labs Unlimited Company',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '30 y 60 mg de dapoxetina (como clorhidrato) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Clorhidrato de dapoxetina',
        ref: {
          f: 'cima-70874',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'clorhidrato de dapoxetina equivalente a 30 mg o 60 mg de dapoxetina',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Celulosa microcristalina',
        'Croscarmelosa sódica',
        'Sílice anhidra coloidal',
        'Estearato de magnesio',
        'Hipromelosa',
        'Dióxido de titanio (E171)',
        'Triacetina',
        'Óxido de hierro negro (E172)',
        'Óxido de hierro amarillo (E172)'
      ],
      usos: {
        t: 'Tratamiento de la eyaculación precoz en varones adultos de 18 a 64 años.',
        ref: {
          f: 'cima-70874',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Priligy está indicado en el tratamiento de la eyaculación precoz (EP) en varones adultos de 18 a 64 años de edad',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-70874',
      advertencias: [
        {
          titulo: 'Solo para eyaculación precoz',
          texto: 'Está indicado únicamente en hombres con eyaculación precoz que cumplan todos los criterios de las secciones 4.1 y 5.1.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-70874',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Priligy está únicamente indicado en hombres con Eyaculación Precoz que cumplan todos los criterios',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Disfunción eréctil con inhibidores de la PDE5',
          texto: 'No está indicado en varones con disfunción eréctil que usen inhibidores de la PDE5.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'cima-70874',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Priligy no está indicado en varones con disfunción eréctil (DE) que estén usando inhibidores de la PDE5',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Se han notificado síncope e hipotensión ortostática en ensayos clínicos.',
          'FT 4.8',
          'Se han notificado síncope e hipotensión ortostática en ensayos clínicos'
        ],
        [
          'Las que más motivaron la interrupción fueron las náuseas (2,2 % de los tratados) y los mareos (1,2 %).',
          'FT 4.8',
          'Los acontecimientos adversos más frecuentes que motivaron la interrupción de la administración fueron las náuseas (2,2 % de los sujetos tratados con Priligy) y los mareos (1,2 % de los sujetos tratados con Priligy)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 30 y 60 mg de dapoxetina (como clorhidrato) por comprimido, según la ficha técnica; el activo va como clorhidrato de dapoxetina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la eyaculación precoz en varones adultos de 18 a 64 años.',
    actua: 'Es un potente inhibidor selectivo de la recaptación de serotonina (ISRS), con una CI50 de 1,12 nM.',
    recorrido: 'Se absorbe rápidamente, con concentraciones plasmáticas máximas en 1-2 horas tras la ingesta; la biodisponibilidad absoluta es del 42 % (rango 15-76 %). Se eliminó sobre todo por la orina, en forma de metabolitos conjugados; no se detectó fármaco activo intacto en la orina.'
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
          ref: { f: 'cima-70874', sec: '3 · Forma farmacéutica', cita: 'Los comprimidos de 30 mg recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente, con concentraciones plasmáticas máximas en 1-2 horas tras la ingesta; la biodisponibilidad absoluta es del 42 % (rango 15-76 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente, con concentraciones plasmáticas máximas en 1-2 horas tras la ingesta; la biodisponibilidad absoluta es del 42 % (rango 15-76 %).',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La dapoxetina se absorbe rápidamente, con concentraciones plasmáticas máximas (C max ) en 1-2 horas tras la ingesta del comprimido',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es del 42 % (rango de 15 a 76 %).',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es del 42% (rango 15-76%)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Una comida rica en grasas redujo moderadamente la Cmax (un 10 %) y aumentó moderadamente el AUC (un 12 %); sin significación clínica.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingestión de una comida rica en grasas redujo de manera moderada la C max (en un 10%) y aumentó moderadamente la AUC (en un 12%) de dapoxetina',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Más del 99 % se une in vitro a las proteínas del suero humano y el volumen de distribución en el equilibrio medio es de 162 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99 % se une in vitro a las proteínas del suero humano y el volumen de distribución en el equilibrio medio es de 162 litros.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Más del 99% de la dapoxetina se une in vitro a las proteínas del suero humano',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en estado de equilibrio medio es de 162 litros.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La dapoxetina tiene un volumen de distribución en estado de equilibrio medio de 162 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Transportador de serotonina',
        efecto: 'Es un potente inhibidor selectivo de la recaptación de serotonina (ISRS), con una CI50 de 1,12 nM.',
        lugar: [ 'encefalo', 'organos-reproductores' ],
        datos: [
          {
            t: 'Es un potente inhibidor selectivo de la recaptación de serotonina (ISRS), con una CI50 de 1,12 nM.',
            ref: {
              f: 'cima-70874',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La dapoxetina es un potente inhibidor selectivo de la recaptación de serotonina (ISRS), con una CI 50 de 1,12 nM',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'rinones' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina por varios sistemas enzimáticos del hígado y de los riñones, sobre todo la CYP2D6, la CYP3A4 y la flavina monooxigenasa (FMO1), con metabolismo presistémico de primer paso.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina por varios sistemas enzimáticos del hígado y de los riñones, sobre todo la CYP2D6, la CYP3A4 y la flavina monooxigenasa (FMO1), con metabolismo presistémico de primer paso.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la dapoxetina es eliminada por varios sistemas enzimáticos del hígado y los riñones, principalmente CYP2D6, CYP3A4 y flavina monooxigenasa (FMO1)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-óxido de dapoxetina',
          actividad: 'inactivo',
          nota: 'Inactivo; con la dapoxetina intacta es el principal metabolito circulante.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En los estudios de unión y transporte in vitro se demuestra que el N-óxido de dapoxetina es inactivo',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Desmetildapoxetina (DMD)',
          actividad: 'activo',
          nota: 'Equipotencial a la dapoxetina; menos del 3 % de los materiales circulantes.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los estudios de unión in vitro indican que la DMD es equipotencial a la dapoxetina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se eliminó sobre todo por la orina, en forma de metabolitos conjugados; no se detectó fármaco activo intacto en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se eliminó sobre todo por la orina, en forma de metabolitos conjugados; no se detectó fármaco activo intacto en la orina.',
          ref: {
            f: 'cima-70874',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La dapoxetina fue eliminada principalmente por la orina, sobre todo en forma de metabolitos conjugados',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tuvo una semivida inicial de aproximadamente 1,5 horas y una semivida terminal de aproximadamente 19 horas.',
          ref: { f: 'cima-70874', sec: '5.2 · Propiedades farmacocinéticas', cita: 'una semivida terminal de aproximadamente 19 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones máximas',
      valor: '1-2',
      unidad: 'h',
      analito: 'dapoxetina',
      ref: {
        f: 'cima-70874',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'concentraciones plasmáticas máximas (C max ) en 1-2 horas tras la ingesta del comprimido',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '42 (15-76)',
      unidad: '%',
      analito: 'dapoxetina',
      ref: { f: 'cima-70874', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es del 42% (rango 15-76%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '> 99',
      unidad: '%',
      analito: 'dapoxetina',
      condiciones: 'in vitro',
      ref: {
        f: 'cima-70874',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Más del 99% de la dapoxetina se une in vitro a las proteínas del suero humano',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado de equilibrio medio',
      valor: '162',
      unidad: 'L',
      analito: 'dapoxetina',
      ref: {
        f: 'cima-70874',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'un volumen de distribución en estado de equilibrio medio de 162 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '19 (aprox.)',
      unidad: 'h',
      analito: 'dapoxetina',
      ref: { f: 'cima-70874', sec: '5.2 · Propiedades farmacocinéticas', cita: 'una semivida terminal de aproximadamente 19 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-70874', '70874', 'PRILIGY 30 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Phoenix Labs Unlimited Company)', '2025-12-10', '2026-11-15'),
    rengPubchem(71353, 'dapoxetine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
