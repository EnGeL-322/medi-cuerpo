import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'moxonidina',
    nombre: 'Moxonidina',
    clase: 'Antihipertensivo de acción central (agonista de los receptores imidazolínicos)',
    sinonimos: [ 'moxonidine', 'Moxon' ],
    formula: 'C9H12ClN5O',
    masaMolar: 241.68,
    smiles: 'CC1=NC(=C(C(=N1)Cl)NC2=NCCN2)OC',
    inchikey: 'WPNJAUFVNXKLIM-UHFFFAOYSA-N',
    cid: 4810,
    iupac: '4-chloro-N-(4,5-dihydro-1H-imidazol-2-yl)-6-methoxy-2-methylpyrimidin-5-amine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'moxonidina-oral',
      producto: 'MOXON 0,2 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Viatris Healthcare Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '0,2 mg de moxonidina por comprimido (Moxon 0,2 mg), según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Povidona K25',
        'Crospovidona',
        'Estearato de magnesio',
        'Hipromelosa 2910',
        'Etilcelulosa (solución al 30 %)',
        'Macrogol 6000',
        'Talco',
        'Óxido de hierro rojo (E 172)',
        'Dióxido de titanio (E 171)'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial.',
        ref: {
          f: 'cima-61156',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Moxon está indicado en el tratamiento de la hipertensión arterial',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-61156',
      advertencias: [
        {
          titulo: 'Bloqueo auriculoventricular',
          texto: 'Se han comunicado casos de bloqueo AV de distinto grado tras la comercialización en pacientes tratados con moxonidina.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-61156',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han comunicado casos de distinto grado de bloqueo AV durante la post-comercialización en pacientes sometidos a tratamiento con moxonidina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: sequedad de boca, mareo, astenia y somnolencia.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes descritas por aquellos que toman moxonidina incluyen sequedad de boca, mareo, astenia y somnolencia'
        ],
        [
          'Estos síntomas disminuyen a menudo tras las primeras semanas de tratamiento.',
          'FT 4.8',
          'Estos síntomas disminuyen a menudo tras las primeras semanas de tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 0,2 mg de moxonidina por comprimido (Moxon 0,2 mg), según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial.',
    actua: 'Es un agonista selectivo de los receptores imidazolínicos, con acción antiadrenérgica central.',
    recorrido: 'Tras la administración oral se absorbe rápida y completamente por el tubo digestivo superior, con un tmax de aproximadamente 1 hora. En 24 horas, el 78 % de la dosis se eliminó por la orina como moxonidina inalterada y el 13 % como moxonidina deshidrogenada.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-61156', sec: '3 · Forma farmacéutica', cita: 'Moxon 0,2 mg: Comprimidos recubiertos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral se absorbe rápida y completamente por el tubo digestivo superior, con un tmax de aproximadamente 1 hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe rápida y completamente por el tubo digestivo superior, con un tmax de aproximadamente 1 hora.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral, la moxonidina se absorbe rápida y completamente (t max aproximadamente 1 h) por el tracto gastrointestinal superior',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es de aproximadamente el 88 %, lo que indica que no hay metabolismo de primer paso.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es de aproximadamente 88%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta de alimentos no interfiere con la farmacocinética.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimentos no interfiere con la farmacocinética de moxonidina',
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
      ocurre: 'La unión a proteínas del plasma, determinada in vitro, fue de aproximadamente el 7,2 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma, determinada in vitro, fue de aproximadamente el 7,2 %.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas, determinada in vitro, fue de aproximadamente 7,2%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores imidazolínicos',
        efecto: 'Es un agonista selectivo de los receptores imidazolínicos, con acción antiadrenérgica central.',
        lugar: [ 'encefalo', 'vasos' ],
        datos: [
          {
            t: 'Es un agonista selectivo de los receptores imidazolínicos, con acción antiadrenérgica central.',
            ref: {
              f: 'cima-61156',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La moxonidina es un agonista selectivo de los receptores imidazolínicos',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En el plasma humano solo se identificó de forma positiva la moxonidina deshidrogenada.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En el plasma humano solo se identificó de forma positiva la moxonidina deshidrogenada.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En muestras de plasma humano sólo se identificó de forma positiva moxonidina deshidrogenada',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Moxonidina deshidrogenada',
          actividad: 'activo',
          nota: 'Su actividad farmacodinámica es de aproximadamente una décima parte de la de la moxonidina.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La actividad farmacodinámica de la moxonidina deshidrogenada es de aproximadamente 1/10 en comparación con la moxonidina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 24 horas, el 78 % de la dosis se eliminó por la orina como moxonidina inalterada y el 13 % como moxonidina deshidrogenada.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 24 horas, el 78 % de la dosis se eliminó por la orina como moxonidina inalterada y el 13 % como moxonidina deshidrogenada.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Durante un periodo de 24 h, la dosis total se eliminó por la orina en un 78% como moxonidina inalterada y en un 13% como moxonidina deshidrogenada',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Por vía fecal se elimina menos del 1 %.',
          ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Por vía fecal se elimina menos de un 1%', codigo: 'FT 5.2' }
        },
        {
          t: 'La semivida de eliminación de la moxonidina y de sus metabolitos es de aproximadamente 2,5 y 5 horas.',
          ref: {
            f: 'cima-61156',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación de moxonidina y sus metabolitos es de aproximadamente 2,5 y 5 horas, respectivamente',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'moxonidina',
      ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: '(t max aproximadamente 1 h)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '88 (aprox.)',
      unidad: '%',
      analito: 'moxonidina',
      ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es de aproximadamente 88%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '7,2 (aprox.)',
      unidad: '%',
      analito: 'moxonidina',
      condiciones: 'in vitro',
      ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: 'fue de aproximadamente 7,2%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación de la moxonidina',
      valor: '2,5 (aprox.)',
      unidad: 'h',
      analito: 'moxonidina',
      ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente 2,5 y 5 horas, respectivamente', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada por la orina como moxonidina inalterada',
      valor: '78',
      unidad: '% de la dosis',
      analito: 'moxonidina',
      ref: { f: 'cima-61156', sec: '5.2 · Propiedades farmacocinéticas', cita: 'en un 78% como moxonidina inalterada', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-61156', '61156', 'MOXON 0,2 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Viatris Healthcare Limited)', '2024-07-11', '2026-11-15'),
    rengPubchem(4810, 'moxonidine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
