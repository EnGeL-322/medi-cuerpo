import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lacidipino',
    nombre: 'Lacidipino',
    clase: 'Bloqueante de canales de calcio (dihidropiridina)',
    sinonimos: [ 'lacidipine', 'Lacimen' ],
    formula: 'C26H33NO6',
    masaMolar: 455.5,
    smiles: 'CCOC(=O)C1=C(NC(=C(C1C2=CC=CC=C2/C=C/C(=O)OC(C)(C)C)C(=O)OCC)C)C',
    inchikey: 'GKQPCPXONLDCMU-CCEZHUSRSA-N',
    cid: 5311217,
    iupac: 'diethyl 2,6-dimethyl-4-[2-[(E)-3-[(2-methylpropan-2-yl)oxy]-3-oxoprop-1-enyl]phenyl]-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'lacidipino-oral',
      producto: 'LACIMEN 4 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Glaxosmithkline S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '4 mg de lacidipino por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Lactosa desecada',
        'Povidona K-30',
        'Estearato de magnesio',
        'Hipromelosa (E464)',
        'Dióxido de titanio (E171)',
        'PEG 400',
        'Polisorbato 80'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o en combinación con otros antihipertensivos.',
        ref: {
          f: 'cima-59897',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'tratamiento de la hipertensión, bien solo o en combinación con otros antihipertensivos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-59897',
      advertencias: [
        {
          titulo: 'Anormalidades de los nódulos sinoauricular y auriculoventricular',
          texto: 'Debe administrarse con precaución en pacientes con anormalidades preexistentes de estos nódulos.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-59897',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Este medicamento debe administrarse con precaución a pacientes con anormalidades preexistentes en los nódulos sinoauricular y auriculoventricular',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Prolongación del intervalo QT',
          texto: 'Debe usarse con precaución en pacientes con prolongación congénita o adquirida del intervalo QT.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-59897',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Lacidipino debe usarse con precaución en pacientes con prolongación congénita o probadamente adquirida del intervalo QT',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Frecuentes: dolor de cabeza y mareo, generalmente transitorios.', 'FT 4.8', 'Frecuentes: dolor de cabeza* y mareo*' ],
        [ 'Frecuentes: palpitaciones y taquicardia.', 'FT 4.8', 'Frecuentes: palpitaciones*, taquicardia' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 4 mg de lacidipino por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o en combinación con otros antihipertensivos.',
    actua: 'Es un antagonista de los canales del calcio potente y específico, con selectividad predominante sobre los canales del calcio del músculo liso vascular.',
    recorrido: 'Se absorbe en pequeña proporción, aunque de forma rápida; la biodisponibilidad absoluta es por término medio de un 10 % (7-12 %). Alrededor del 70 % de la dosis se elimina como metabolitos por las heces y el resto, también como metabolitos, por la orina.'
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
          ref: { f: 'cima-59897', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película blancos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe en pequeña proporción, aunque de forma rápida; la biodisponibilidad absoluta es por término medio de un 10 % (7-12 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe en pequeña proporción, aunque de forma rápida; la biodisponibilidad absoluta es por término medio de un 10 % (7-12 %).',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Lacidipino se absorbe en pequeña proporción, aunque de forma rápida, por el tracto gastrointestinal tras ingestión oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es por término medio de un 10 % (7-12 %).',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es por término medio de un 10% (7-12%)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones plasmáticas más elevadas se alcanzan entre los 30 y los 150 minutos.',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones plasmáticas más elevadas se alcanzan entre los 30 y 150 minutos',
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
      ocurre: 'Se fija a la albúmina y a la glucoproteína alfa-1 del plasma en una proporción muy alta (más del 95 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se fija a la albúmina y a la glucoproteína alfa-1 del plasma en una proporción muy alta (más del 95 %).',
          ref: { f: 'cima-59897', sec: '5.2 · Propiedades farmacocinéticas', cita: 'en una proporción muy alta (>95%)', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Canales de calcio',
        efecto: 'Es un antagonista de los canales del calcio potente y específico, con selectividad predominante sobre los canales del calcio del músculo liso vascular.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista de los canales del calcio potente y específico, con selectividad predominante sobre los canales del calcio del músculo liso vascular.',
            ref: {
              f: 'cima-59897',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Lacidipino es un antagonista de los canales del calcio potente y específico, con selectividad predominante sobre los canales del calcio en el músculo liso vascular',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un amplio metabolismo de primer paso hepático, en el que participa la CYP3A4; no hay evidencia de que induzca ni inhiba las enzimas hepáticas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un amplio metabolismo de primer paso hepático, en el que participa la CYP3A4; no hay evidencia de que induzca ni inhiba las enzimas hepáticas.',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sufre un amplio metabolismo de primer paso hepático (en el que está implicado el citocromo P450 CYP3A4)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Cuatro metabolitos principales',
          actividad: 'inactivo',
          nota: 'Carecen de actividad farmacológica o apenas la poseen.',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los cuatro metabolitos principales identificados carecen o apenas poseen actividad farmacológica',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 70 % de la dosis se elimina como metabolitos por las heces y el resto, también como metabolitos, por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 70 % de la dosis se elimina como metabolitos por las heces y el resto, también como metabolitos, por la orina.',
          ref: {
            f: 'cima-59897',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente un 70% de la dosis administrada se elimina en forma de metabolitos en heces y el resto, también en forma de metabolitos, en la orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media de eliminación es de 13 a 19 horas.',
          ref: { f: 'cima-59897', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media de eliminación es de 13 a 19 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '10 (7-12)',
      unidad: '%',
      analito: 'lacidipino',
      ref: {
        f: 'cima-59897',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta es por término medio de un 10% (7-12%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '30-150',
      unidad: 'min',
      analito: 'lacidipino',
      ref: {
        f: 'cima-59897',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Las concentraciones plasmáticas más elevadas se alcanzan entre los 30 y 150 minutos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 95',
      unidad: '%',
      analito: 'lacidipino',
      ref: { f: 'cima-59897', sec: '5.2 · Propiedades farmacocinéticas', cita: 'en una proporción muy alta (>95%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación',
      valor: '13-19',
      unidad: 'h',
      analito: 'lacidipino',
      ref: { f: 'cima-59897', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media de eliminación es de 13 a 19 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada por las heces como metabolitos',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'lacidipino',
      ref: {
        f: 'cima-59897',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente un 70% de la dosis administrada se elimina en forma de metabolitos en heces',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-59897', '59897', 'LACIMEN 4 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Glaxosmithkline S.A.)', '2021-11-15', '2026-11-15'),
    rengPubchem(5311217, 'lacidipine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
