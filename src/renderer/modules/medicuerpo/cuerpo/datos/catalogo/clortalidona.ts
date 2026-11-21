import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clortalidona',
    nombre: 'Clortalidona',
    clase: 'Diurético tiazídico de acción prolongada',
    sinonimos: [ 'chlorthalidone', 'Higrotona' ],
    formula: 'C14H11ClN2O4S',
    masaMolar: 338.8,
    smiles: 'C1=CC=C2C(=C1)C(=O)NC2(C3=CC(=C(C=C3)Cl)S(=O)(=O)N)O',
    inchikey: 'JIVPVXMEBJLZRO-UHFFFAOYSA-N',
    cid: 2732,
    iupac: '2-chloro-5-(1-hydroxy-3-oxo-2H-isoindol-1-yl)benzenesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'clortalidona-oral',
      producto: 'HIGROTONA 50 mg comprimidos',
      titular: 'Amdipharm Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '50 mg de clortalidona por comprimido',
      excipientes: [
        'Almidón de maíz',
        'sílice coloidal anhidra',
        'estearato de magnesio',
        'celulosa microcristalina',
        'óxido de hierro amarillo (E-172)',
        'carboximetilcelulosa de sodio'
      ],
      usos: {
        t: 'Hipertensión arterial, edema por insuficiencia renal, ascitis por cirrosis en pacientes estables y diabetes insípida, en adultos.',
        ref: {
          f: 'cima-45843',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de la hipertensión arterial, como monoterapia o en combinación con otros agentes antihipertensivos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-45843',
      advertencias: [
        {
          titulo: 'Enfermedad hepática',
          texto: 'En personas con función hepática alterada, pequeños cambios de líquidos y electrolitos pueden desencadenar un coma hepático.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-45843',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Deberá emplearse Higrotona con precaución en pacientes con función hepática alterada',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes se relacionan con alteraciones de los electrolitos (hipopotasemia, hipomagnesemia, hipercalcemia e hiponatremia), sobre todo con dosis altas.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes se relacionan con trastornos electrolíticos como hipopotasemia'
        ],
        [
          'Hipomagnesemia, hipercalcemia e hiponatremia, asociadas a dosis elevadas.',
          'FT 4.8',
          'hipomagnesemia, hipercalcemia e hiponatremia y asociadas a dosis elevadas'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg de clortalidona por comprimido. Los excipientes no son el principio activo.',
    usos: 'Hipertensión arterial, edema por insuficiencia renal, ascitis por cirrosis en pacientes estables y diabetes insípida, en adultos.',
    actua: 'Actúa en el túbulo renal distal: inhibe la reabsorción de sodio y cloruro (cotransportador Na+Cl-), de modo que se elimina más sodio y agua.',
    recorrido: 'Tras 50 mg, la biodisponibilidad ronda el 64 % y el máximo en el plasma llega a las 8-12 horas. La mayor parte de lo absorbido sale por los riñones, sobre todo sin cambios; la bilis es una vía menor. Su semivida media es de 50 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado, para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado, para tomar por boca.',
          ref: { f: 'cima-45843', sec: '3 · Forma farmacéutica', cita: 'Comprimidos planos, redondos, de color amarillo pálido', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras 50 mg, la biodisponibilidad ronda el 64 % y el máximo en el plasma llega a las 8-12 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras 50 mg, la biodisponibilidad ronda el 64 % y el máximo en el plasma llega a las 8-12 horas.',
          ref: {
            f: 'cima-45843',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la biodisponibilidad es aproximadamente del 64%, alcanzándose la concentración plasmática máxima tras 8-12 horas',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'rinones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une a proteínas del plasma en un 50-76 % y se acumula en los glóbulos rojos, unida a la anhidrasa carbónica; por eso solo una pequeña fracción queda libre en el plasma. Atraviesa la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a proteínas del plasma en un 50-76 % y se acumula en los glóbulos rojos, unida a la anhidrasa carbónica; por eso solo una pequeña fracción queda libre en el plasma. Atraviesa la placenta.',
          ref: { f: 'cima-45843', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se acumula de forma preferente en los eritrocitos', codigo: 'FT 5.2' }
        },
        {
          t: 'Unión a proteínas plasmáticas del 50-76 %.',
          ref: {
            f: 'cima-45843',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La clortalidona se une a las proteínas plasmáticas en un 50-76%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Cotransportador de sodio y cloruro del túbulo distal',
        efecto: 'Actúa en el túbulo renal distal: inhibe la reabsorción de sodio y cloruro (cotransportador Na+Cl-), de modo que se elimina más sodio y agua.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Actúa en el túbulo renal distal: inhibe la reabsorción de sodio y cloruro (cotransportador Na+Cl-), de modo que se elimina más sodio y agua.',
            ref: {
              f: 'cima-45843',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'inhibiendo la reabsorción de Na+Cl- (antagonizando el cotransporte de Na+Cl- )',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Solo un pequeño porcentaje se metaboliza en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Solo un pequeño porcentaje se metaboliza en el hígado.',
          ref: {
            f: 'cima-45843',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Sólo un pequeño porcentaje de fármaco se metaboliza en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayor parte de lo absorbido sale por los riñones, sobre todo sin cambios; la bilis es una vía menor. Su semivida media es de 50 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte de lo absorbido sale por los riñones, sobre todo sin cambios; la bilis es una vía menor. Su semivida media es de 50 horas.',
          ref: {
            f: 'cima-45843',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación es de 50 horas de promedio',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La excreción hepática en la bilis es una vía de eliminación menor.',
          ref: {
            f: 'cima-45843',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La excreción hepática en bilis constituye una vía de eliminación menor',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '64 (aprox.)',
      unidad: '%',
      analito: 'clortalidona',
      condiciones: 'dosis oral de 50 mg',
      ref: { f: 'cima-45843', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la biodisponibilidad es aproximadamente del 64%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '8-12',
      unidad: 'h',
      analito: 'clortalidona',
      condiciones: 'dosis oral de 50 mg',
      ref: {
        f: 'cima-45843',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanzándose la concentración plasmática máxima tras 8-12 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media',
      valor: '1,5 (25 mg) y 3,2 (50 mg)',
      unidad: 'µg/mL',
      analito: 'clortalidona',
      ref: { f: 'cima-45843', sec: '5.2 · Propiedades farmacocinéticas', cita: 'los valores de Cmax son en promedio de 1,5 µg/ml', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '50-76',
      unidad: '%',
      analito: 'clortalidona',
      ref: { f: 'cima-45843', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se une a las proteínas plasmáticas en un 50-76%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '50',
      unidad: 'h',
      analito: 'clortalidona',
      ref: { f: 'cima-45843', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La semivida de eliminación es de 50 horas de promedio', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-45843', '45843', 'HIGROTONA 50 mg comprimidos (Amdipharm Limited)', '2025-09-15', '2026-11-12'),
    rengPubchem(2732, 'chlorthalidone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
