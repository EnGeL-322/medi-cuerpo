import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'indapamida',
    nombre: 'Indapamida',
    clase: 'Diurético tiazídico (indolina)',
    sinonimos: [ 'indapamide', 'Tertensif' ],
    formula: 'C16H16ClN3O3S',
    masaMolar: 365.8,
    smiles: 'CC1CC2=CC=CC=C2N1NC(=O)C3=CC(=C(C=C3)Cl)S(=O)(=O)N',
    inchikey: 'NDDAHWYSQHTHNT-UHFFFAOYSA-N',
    cid: 3702,
    iupac: '4-chloro-N-(2-methyl-2,3-dihydroindol-1-yl)-3-sulfamoylbenzamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'indapamida-oral',
      producto: 'TERTENSIF RETARD 1,5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA DE LIBERACION PROLONGADA',
      titular: 'Les Laboratoires Servier',
      mercado: 'España (UE)',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'COMPRIMIDO DE LIBERACIÓN PROLONGADA',
      liberacion: 'prolongada',
      concentraciones: '1,5 mg de indapamida por comprimido',
      excipientes: [
        'Núcleo: sílice coloidal anhidra',
        'hipromelosa',
        'lactosa monohidratada',
        'estearato magnésico',
        'povidona',
        'película de recubrimiento: glicerol',
        'hipromelosa',
        'macrogol 6000',
        'estearato magnésico',
        'dióxido de titanio'
      ],
      usos: {
        t: 'Hipertensión esencial en adultos.',
        ref: { f: 'cima-61252', sec: '4.1 · Indicaciones terapéuticas', cita: 'está indicado en hipertensión esencial en adultos', codigo: 'FT 4.1' }
      },
      fuente: 'cima-61252',
      advertencias: [
        {
          titulo: 'Encefalopatía hepática',
          texto: 'Con afección hepática, los diuréticos tiazídicos pueden inducir una encefalopatía hepática que puede evolucionar a coma.',
          organos: [ 'higado', 'encefalo' ],
          ref: {
            f: 'cima-61252',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'los diuréticos del tipo de los tiazídicos pueden inducir',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más notificadas: hipopotasemia y reacciones de hipersensibilidad, sobre todo en la piel, en personas predispuestas.',
          'FT 4.8',
          'Las reacciones adversas notificadas más frecuentemente son hipopotasemia'
        ],
        [ 'Erupciones maculopapulares.', 'FT 4.8', 'erupciones maculopapulares' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 1,5 mg de indapamida por comprimido. Los excipientes no son el principio activo.',
    usos: 'Hipertensión esencial en adultos.',
    actua: 'Derivado sulfamídico relacionado con los diuréticos tiazídicos: inhibe la reabsorción de sodio en el segmento cortical de dilución del riñón y aumenta la eliminación de sodio, cloruro y agua.',
    recorrido: 'La indapamida liberada se absorbe rápido y por completo; la comida acelera un poco la absorción sin cambiar la cantidad. El máximo llega hacia las 12 horas. Sale sobre todo por la orina (70 % de la dosis) y por las heces (22 %), como metabolitos inactivos; su semivida va de 14 a 24 horas (media de 18).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: una matriz va liberando la indapamida poco a poco.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: una matriz va liberando la indapamida poco a poco.',
          ref: {
            f: 'cima-61252',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'un sistema de matrices en el que el principio activo se dispersa dentro de un soporte que permite una liberación prolongada',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La indapamida liberada se absorbe rápido y por completo; la comida acelera un poco la absorción sin cambiar la cantidad. El máximo llega hacia las 12 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La indapamida liberada se absorbe rápido y por completo; la comida acelera un poco la absorción sin cambiar la cantidad. El máximo llega hacia las 12 horas.',
          ref: {
            f: 'cima-61252',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fracción de indapamida liberada es rápida y totalmente absorbida en el tracto digestivo',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración máxima llega unas 12 horas después de una dosis única.',
          ref: {
            f: 'cima-61252',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se alcanza aproximadamente 12 horas después de la ingestión del fármaco',
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
      ocurre: 'El 79 % circula unido a proteínas del plasma; el equilibrio se alcanza en 7 días y no se acumula.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 79 % circula unido a proteínas del plasma; el equilibrio se alcanza en 7 días y no se acumula.',
          ref: { f: 'cima-61252', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a las proteínas plasmáticas es del 79%', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Reabsorción de sodio en el segmento cortical de dilución',
        efecto: 'Derivado sulfamídico relacionado con los diuréticos tiazídicos: inhibe la reabsorción de sodio en el segmento cortical de dilución del riñón y aumenta la eliminación de sodio, cloruro y agua.',
        lugar: [ 'rinones', 'vasos' ],
        datos: [
          {
            t: 'Derivado sulfamídico relacionado con los diuréticos tiazídicos: inhibe la reabsorción de sodio en el segmento cortical de dilución del riñón y aumenta la eliminación de sodio, cloruro y agua.',
            ref: {
              f: 'cima-61252',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'actúa inhibiendo la reabsorción del sodio a nivel del segmento cortical de dilución',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina como metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina como metabolitos inactivos.',
          ref: { f: 'cima-61252', sec: '5.2 · Propiedades farmacocinéticas', cita: 'como metabolitos inactivos', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por la orina (70 % de la dosis) y por las heces (22 %), como metabolitos inactivos; su semivida va de 14 a 24 horas (media de 18).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por la orina (70 % de la dosis) y por las heces (22 %), como metabolitos inactivos; su semivida va de 14 a 24 horas (media de 18).',
          ref: {
            f: 'cima-61252',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación es básicamente urinaria (70% de la dosis) y fecal (22%)',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'indapamida',
      condiciones: 'comprimido de liberación prolongada, dosis única',
      ref: {
        f: 'cima-61252',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanza aproximadamente 12 horas después de la ingestión del fármaco',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '79',
      unidad: '%',
      analito: 'indapamida',
      ref: { f: 'cima-61252', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a las proteínas plasmáticas es del 79%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '14-24 (media 18)',
      unidad: 'h',
      analito: 'indapamida',
      ref: {
        f: 'cima-61252',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación se sitúa entre 14 y 24 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminación urinaria',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'metabolitos inactivos',
      ref: {
        f: 'cima-61252',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La eliminación es básicamente urinaria (70% de la dosis)',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-61252', '61252', 'TERTENSIF RETARD 1,5 mg COMPRIMIDOS RECUBIERTOS CON PELICULA DE LIBERACION PROLONGADA (Les Laboratoires Servier)', '2021-12-01', '2026-11-12'),
    rengPubchem(3702, 'indapamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
