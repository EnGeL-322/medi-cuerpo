import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'deferasirox',
    nombre: 'Deferasirox',
    clase: 'Quelante del hierro',
    sinonimos: [ 'deferasirox', 'Ferupantil' ],
    formula: 'C21H15N3O4',
    masaMolar: 373.4,
    smiles: 'C1=CC=C(C(=C1)C2=NN(C(=N2)C3=CC=CC=C3O)C4=CC=C(C=C4)C(=O)O)O',
    inchikey: 'BOFQWVMAQOTZIW-UHFFFAOYSA-N',
    cid: 214348,
    iupac: '4-[3,5-bis(2-hydroxyphenyl)-1,2,4-triazol-1-yl]benzoic acid',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'deferasirox-oral',
      producto: 'FERUPANTIL 90 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Bexal Farmaceutica S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '90 o 360 mg de deferasirox por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina',
        'Crospovidona',
        'Estearato de magnesio',
        'Povidona',
        'Poloxámero',
        'Sílice coloidal anhidra',
        'Hipromelosa',
        'Dióxido de titanio (E171)',
        'Macrogol',
        'Talco',
        'Laca de aluminio de indigotina (E132)'
      ],
      usos: {
        t: 'Tratamiento de la sobrecarga crónica de hierro debida a transfusiones sanguíneas frecuentes.',
        ref: {
          f: 'cima-86034',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'tratamiento de la sobrecarga férrica crónica debida a transfusiones sanguíneas frecuentes',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-86034',
      advertencias: [
        {
          titulo: 'Función renal',
          texto: 'Se estudió solo en pacientes con creatinina sérica basal normal para la edad; en los estudios se observaron aumentos de la creatinina.',
          organos: [ 'rinones' ],
          ref: {
            f: 'cima-86034',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Deferasirox se ha estudiado sólo en pacientes con niveles basales de creatinina sérica dentro del intervalo normal apropiado para la edad',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en el tratamiento crónico: alteraciones gastrointestinales (náuseas, vómitos, diarrea o dolor abdominal) y erupción cutánea.',
          'FT 4.8',
          'incluyen alteraciones gastrointestinales (principalmente náuseas, vómitos, diarrea o dolor abdominal) y erupción cutánea'
        ],
        [
          'En un 36 % de los pacientes se observaron aumentos de la creatinina sérica que dependían de la dosis.',
          'FT 4.8',
          'en un 36% de pacientes se observaron aumentos de la creatinina sérica dosis dependientes'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 90 o 360 mg de deferasirox por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la sobrecarga crónica de hierro debida a transfusiones sanguíneas frecuentes.',
    actua: 'Es un quelante activo por vía oral con gran selectividad por el hierro (III): se une al hierro con alta afinidad y promueve su excreción.',
    recorrido: 'La biodisponibilidad del comprimido recubierto con película fue un 36 % mayor que la del comprimido dispersable. Deferasirox y sus metabolitos se excretan sobre todo por las heces (84 % de la dosis); la excreción renal es mínima (8 %).'
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
          ref: { f: 'cima-86034', sec: '3 · Forma farmacéutica', cita: 'Comprimido recubierto con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad del comprimido recubierto con película fue un 36 % mayor que la del comprimido dispersable.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad del comprimido recubierto con película fue un 36 % mayor que la del comprimido dispersable.',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad de deferasirox en comprimidos recubiertos con película fue un 36% mayor que los comprimidos dispersables',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con el comprimido dispersable, el pico plasmático se alcanza en 1,5 a 4 horas y la biodisponibilidad absoluta es del 70 % respecto a la dosis intravenosa.',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se absorbe después de la administración oral con un tiempo medio hasta la concentración plasmática máxima (t max ) de unas 1,5 a 4 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras una comida rica en grasas, el AUC y la Cmax del comprimido recubierto aumentaron un 18 % y un 29 %.',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras una comida rica en grasas, el AUC y la C max aumentó (en 18% y 29% respectivamente)',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se fija en una alta proporción (99 %) a las proteínas del plasma, casi exclusivamente a la albúmina, y su volumen de distribución es pequeño, de unos 14 litros en adultos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se fija en una alta proporción (99 %) a las proteínas del plasma, casi exclusivamente a la albúmina, y su volumen de distribución es pequeño, de unos 14 litros en adultos.',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Deferasirox se fija en una alta proporción (99%) a las proteínas plasmáticas, casi exclusivamente a la albúmina sérica, y tiene un volumen de distribución pequeño de aproximadamente 14 litros en adultos',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Hierro (III)',
        efecto: 'Es un quelante activo por vía oral con gran selectividad por el hierro (III): se une al hierro con alta afinidad y promueve su excreción.',
        lugar: [ 'sangre', 'higado' ],
        datos: [
          {
            t: 'Es un quelante activo por vía oral con gran selectividad por el hierro (III): se une al hierro con alta afinidad y promueve su excreción.',
            ref: {
              f: 'cima-86034',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Deferasirox es un quelante activo por vía oral con una gran selectividad por el hierro (III)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La principal vía de metabolización es la glucuronidación (sobre todo por UGT1A1), con excreción biliar posterior; el metabolismo oxidativo por CYP450 es menor (alrededor del 8 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La principal vía de metabolización es la glucuronidación (sobre todo por UGT1A1), con excreción biliar posterior; el metabolismo oxidativo por CYP450 es menor (alrededor del 8 %).',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal vía de metabolización del deferasirox es la glucuronidación, con una posterior excreción biliar',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónidos de deferasirox',
          actividad: 'desconocida',
          nota: 'Se desconjugan en el intestino y se reabsorben (ciclo enterohepático).',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Es probable que se produzca una desconjugación de los glucuronidatos en el intestino y su posterior reabsorción (ciclo enterohepático)',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Deferasirox y sus metabolitos se excretan sobre todo por las heces (84 % de la dosis); la excreción renal es mínima (8 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Deferasirox y sus metabolitos se excretan sobre todo por las heces (84 % de la dosis); la excreción renal es mínima (8 %).',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Deferasirox y sus metabolitos se excretan principalmente por las heces (84% de la dosis)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media de eliminación varió de 8 a 16 horas.',
          ref: {
            f: 'cima-86034',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La vida media de eliminación (t 1/2 ) varió de 8 a 16 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (comprimido dispersable)',
      valor: '1,5-4',
      unidad: 'h',
      analito: 'deferasirox',
      origen: 'otra-presentacion',
      ref: {
        f: 'cima-86034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con un tiempo medio hasta la concentración plasmática máxima (t max ) de unas 1,5 a 4 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99',
      unidad: '%',
      analito: 'deferasirox',
      ref: {
        f: 'cima-86034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Deferasirox se fija en una alta proporción (99%) a las proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '14 (aprox.)',
      unidad: 'L',
      analito: 'deferasirox',
      poblacion: 'adultos',
      ref: {
        f: 'cima-86034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'un volumen de distribución pequeño de aproximadamente 14 litros en adultos',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación',
      valor: '8-16',
      unidad: 'h',
      analito: 'deferasirox',
      ref: {
        f: 'cima-86034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación (t 1/2 ) varió de 8 a 16 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces',
      valor: '84',
      unidad: '% de la dosis',
      analito: 'deferasirox y metabolitos',
      ref: {
        f: 'cima-86034',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se excretan principalmente por las heces (84% de la dosis)',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-86034', '86034', 'FERUPANTIL 90 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Bexal Farmaceutica S.A.)', '2026-08-03', '2026-11-15'),
    rengPubchem(214348, 'deferasirox', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
