import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'quinapril',
    nombre: 'Quinapril',
    clase: 'Inhibidor de la enzima conversora de la angiotensina (IECA)',
    sinonimos: [ 'quinapril', 'Lidaltrin' ],
    formula: 'C25H30N2O5',
    masaMolar: 438.5,
    smiles: 'CCOC(=O)[C@H](CCC1=CC=CC=C1)N[C@@H](C)C(=O)N2CC3=CC=CC=C3C[C@H]2C(=O)O',
    inchikey: 'JSDRRTOADPPCHY-HSQYWUDLSA-N',
    cid: 54892,
    iupac: '(3S)-2-[(2S)-2-[[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino]propanoyl]-3,4-dihydro-1H-isoquinoline-3-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'quinapril-oral',
      producto: 'LIDALTRIN 20 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Lacer S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '5 y 20 mg de quinapril (como hidrocloruro) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de quinapril',
        ref: { f: 'cima-59203', sec: '2 · Composición cualitativa y cuantitativa', cita: '5 mg de quinapril (como hidrocloruro)', codigo: 'FT 2' }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Carbonato de magnesio pesado (E504)',
        'Gelatina (E441)',
        'Estearato de magnesio (E572)',
        'Crospovidona',
        'Hipromelosa (E464)',
        'Óxido de hierro rojo (E172)',
        'Óxido de hierro amarillo (E172)',
        'Dióxido de titanio (E171)',
        'Hidroxipropilcelulosa (E463)',
        'Macrogol 400',
        'Cera candelilla (E902)'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial esencial, en monoterapia o asociado a diuréticos.',
        ref: {
          f: 'cima-59203',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Lidaltrin está indicado para el tratamiento de la hipertensión arterial esencial',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-59203',
      advertencias: [
        {
          titulo: 'Angioedema',
          texto: 'Se han descrito casos de angioedema con los inhibidores de la ECA, incluido un 0,1 % de los pacientes tratados con quinapril.',
          organos: [ 'vasos', 'vias-respiratorias' ],
          ref: {
            f: 'cima-59203',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han descrito casos de angioedema en pacientes tratados con inhibidores de la ECA , incluido un 0,1% de los pacientes tratados con quinapril',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Los más frecuentes: dolor de cabeza (7,2 %), vértigo (5,5 %), rinitis (3,2 %), tos (3,9 %), fatiga (3,5 %), náuseas o vómitos (2,8 %) y mialgia (2,2 %).',
          'FT 4.8',
          'dolor de cabeza (7,2%); vértigo (5,5%), rinitis (3,2%), tos (3,9%), fatiga (3,5%), náuseas o vómitos (2,8%) y mialgia (2,2%)'
        ],
        [
          'La seguridad se evaluó en más de 4.960 individuos y pacientes, y fue bien tolerado.',
          'FT 4.8',
          'La seguridad de quinapril ha sido evaluada en más de 4.960 individuos y pacientes, siendo bien tolerado'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 y 20 mg de quinapril (como hidrocloruro) por comprimido, según la ficha técnica; el activo va como hidrocloruro de quinapril. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial esencial, en monoterapia o asociado a diuréticos.',
    actua: 'Pertenece al grupo de los inhibidores de la enzima conversora de la angiotensina (ECA) y reduce la tensión arterial tanto en bipedestación como en sedestación, con un efecto mínimo sobre la frecuencia cardíaca.',
    recorrido: 'Se absorbe rápidamente, con el pico de concentración plasmática de quinapril a la hora; hasta el 60 % de una dosis oral se absorbe en el tubo digestivo. El quinaprilato se elimina principalmente por vía renal y tiene una vida media de acumulación efectiva de unas 3 horas.'
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
          ref: { f: 'cima-59203', sec: '3 · Forma farmacéutica', cita: 'Lidaltrin 5 mg comprimidos recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente, con el pico de concentración plasmática de quinapril a la hora; hasta el 60 % de una dosis oral se absorbe en el tubo digestivo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente, con el pico de concentración plasmática de quinapril a la hora; hasta el 60 % de una dosis oral se absorbe en el tubo digestivo.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Después de la administración oral, quinapril se absorbe rápidamente, observándose el pico de concentración plasmática de quinapril al cabo de 1 hora',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Según la recuperación de quinapril y de sus metabolitos en la orina, hasta el 60 % de una dosis oral se absorbe en el tubo digestivo.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'hasta el 60% de una dosis de quinapril oral se absorbe en el tracto gastrointestinal',
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
      ocurre: 'Aproximadamente el 97 % del quinapril o del quinaprilato se une a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 97 % del quinapril o del quinaprilato se une a las proteínas del plasma.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 97% de quinapril o quinaprilato se une a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En ratas, el quinapril y sus metabolitos no cruzan la barrera hematoencefálica.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Estudios en ratas indican que quinapril y sus metabolitos no cruzan la barrera hemato-encefálica',
            codigo: 'FT 5.2'
          },
          poblacion: 'ratas'
        }
      ],
      accion: {
        diana: 'Enzima conversora de la angiotensina (ECA)',
        efecto: 'Pertenece al grupo de los inhibidores de la enzima conversora de la angiotensina (ECA) y reduce la tensión arterial tanto en bipedestación como en sedestación, con un efecto mínimo sobre la frecuencia cardíaca.',
        lugar: [ 'vasos', 'corazon', 'rinones' ],
        datos: [
          {
            t: 'Pertenece al grupo de los inhibidores de la enzima conversora de la angiotensina (ECA) y reduce la tensión arterial tanto en bipedestación como en sedestación, con un efecto mínimo sobre la frecuencia cardíaca.',
            ref: {
              f: 'cima-59203',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Agentes que actúan sobre el sistema renina-angiotensina. Inhibidores de la ECA, monofármacos',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El 38 % del quinapril administrado por vía oral se transforma en quinaprilato.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El 38 % del quinapril administrado por vía oral se transforma en quinaprilato.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El 38% del quinapril administrado oralmente se transforma en quinaprilato',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En la cirrosis alcohólica disminuyen las concentraciones de quinaprilato por un déficit en la desesterificación del quinapril.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones de quinaprilato disminuyen en pacientes con cirrosis alcohólica debido a un déficit en la desesterificación del quinapril',
            codigo: 'FT 5.2'
          },
          poblacion: 'pacientes con cirrosis alcohólica'
        }
      ],
      metabolitos: [
        {
          nombre: 'Quinaprilato',
          actividad: 'desconocida',
          nota: 'Metabolito principal; la ficha no precisa aquí su actividad.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El 38% del quinapril administrado oralmente se transforma en quinaprilato',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El quinaprilato se elimina principalmente por vía renal y tiene una vida media de acumulación efectiva de unas 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El quinaprilato se elimina principalmente por vía renal y tiene una vida media de acumulación efectiva de unas 3 horas.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El quinaprilato se elimina principalmente por vía renal y tiene una vida media de acumulación efectiva de unas 3 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El quinapril tiene una vida media aparente de eliminación de alrededor de 1 hora.',
          ref: {
            f: 'cima-59203',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Quinapril tiene una vida media aparente de eliminación de alrededor de 1 hora',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de quinapril',
      valor: '1',
      unidad: 'h',
      analito: 'quinapril',
      ref: {
        f: 'cima-59203',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'observándose el pico de concentración plasmática de quinapril al cabo de 1 hora',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción absorbida (según la orina)',
      valor: '≤ 60',
      unidad: '%',
      analito: 'quinapril',
      ref: {
        f: 'cima-59203',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'hasta el 60% de una dosis de quinapril oral se absorbe en el tracto gastrointestinal',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97 (aprox.)',
      unidad: '%',
      analito: 'quinapril y quinaprilato',
      ref: {
        f: 'cima-59203',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 97% de quinapril o quinaprilato se une a proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media aparente de eliminación',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'quinapril',
      ref: {
        f: 'cima-59203',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Quinapril tiene una vida media aparente de eliminación de alrededor de 1 hora',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-59203', '59203', 'LIDALTRIN 20 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Lacer S.A.)', '2022-04-11', '2026-11-15'),
    rengPubchem(54892, 'quinapril', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
