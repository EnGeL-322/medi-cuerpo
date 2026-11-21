import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gemfibrozilo',
    nombre: 'Gemfibrozilo',
    clase: 'Fibrato (hipolipemiante)',
    sinonimos: [ 'gemfibrozil', 'Lopid' ],
    formula: 'C15H22O3',
    masaMolar: 250.33,
    smiles: 'CC1=CC(=C(C=C1)C)OCCCC(C)(C)C(=O)O',
    inchikey: 'HEMJJKBWTPKOJG-UHFFFAOYSA-N',
    cid: 3463,
    iupac: '5-(2,5-dimethylphenoxy)-2,2-dimethylpentanoic acid',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'gemfibrozilo-oral',
      producto: 'LOPID 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Pfizer S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '600 o 900 mg de gemfibrozilo por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina',
        'Almidón pregelatinizado de maíz',
        'Sílice coloidal (anhidra) (E-551)',
        'Polisorbato 80 (E-433)',
        'Almidón carboximetilo de sodio (tipo A)',
        'Estearato de magnesio (E-572)',
        'Hipromelosa (E-464)',
        'Dióxido de titanio (E-171)',
        'Talco (E-553b)',
        'Simeticona',
        'Macrogol 6000'
      ],
      usos: {
        t: 'Como complemento de la dieta, tratamiento de la hipertrigliceridemia grave, con o sin colesterol HDL bajo, y de otras dislipemias cuando las estatinas están contraindicadas o no se toleran.',
        ref: {
          f: 'cima-58832',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de hipertrigliceridemia grave con o sin colesterol HDL bajo',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-58832',
      advertencias: [
        {
          titulo: 'Trastornos musculares',
          texto: 'Se han comunicado casos de miositis, miopatía y elevaciones significativas de la creatina fosfoquinasa asociadas con gemfibrozilo.',
          organos: [ 'musculos' ],
          ref: {
            f: 'cima-58832',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han comunicado casos de miositis, miopatía y elevaciones significativas de creatinin fosfoquinasa asociadas con gemfibrozilo',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Estatinas concomitantes',
          texto: 'Está contraindicada la administración concomitante de gemfibrozilo y simvastatina.',
          organos: [ 'musculos', 'higado' ],
          ref: {
            f: 'cima-58832',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Está contraindicada la administración concomitante de gemfibrozilo y simvastatina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más comunicadas son de carácter gastrointestinal y se observaron en aproximadamente el 7 % de los pacientes.',
          'FT 4.8',
          'Las reacciones adversas comunicadas con más frecuencia son de carácter gastrointestinal y se observaron en aproximadamente el 7% de los pacientes'
        ],
        [
          'Normalmente no llevan a interrumpir el tratamiento.',
          'FT 4.8',
          'Estas reacciones adversas no suelen llevar normalmente a la interrupción del tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 600 o 900 mg de gemfibrozilo por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Como complemento de la dieta, tratamiento de la hipertrigliceridemia grave, con o sin colesterol HDL bajo, y de otras dislipemias cuando las estatinas están contraindicadas o no se toleran.',
    actua: 'Su mecanismo no está claramente establecido; en el hombre estimula la lipólisis periférica de las lipoproteínas ricas en triglicéridos (VLDL y quilomicrones) al estimular la lipoproteína lipasa.',
    recorrido: 'Se absorbe bien en el tubo digestivo tras la administración oral, con una biodisponibilidad próxima al 100 %. Se elimina sobre todo metabolizado: alrededor del 70 % de la dosis sale por la orina, fundamentalmente como conjugados y metabolitos.'
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
          ref: { f: 'cima-58832', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien en el tubo digestivo tras la administración oral, con una biodisponibilidad próxima al 100 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien en el tubo digestivo tras la administración oral, con una biodisponibilidad próxima al 100 %.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Gemfibrozilo se absorbe bien en el tracto gastro-intestinal tras su administración oral con una biodisponibilidad próxima al 100%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los niveles plasmáticos máximos se alcanzan en una a dos horas.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los niveles máximos plasmáticos se alcanzan en una a dos horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La presencia de alimentos altera ligeramente su biodisponibilidad.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la presencia de alimentos altera ligeramente su biodisponibilidad',
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
      ocurre: 'El volumen de distribución en el equilibrio es de 9-13 litros y la unión a proteínas del gemfibrozilo y de su principal metabolito es de al menos el 97 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en el equilibrio es de 9-13 litros y la unión a proteínas del gemfibrozilo y de su principal metabolito es de al menos el 97 %.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas de gemfibrozilo y su principal metabolito es de al menos el 97%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en el estado de equilibrio es de 9-13 litros.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución en el estado de equilibrio es de 9-13 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Lipoproteína lipasa (LPL)',
        efecto: 'Su mecanismo no está claramente establecido; en el hombre estimula la lipólisis periférica de las lipoproteínas ricas en triglicéridos (VLDL y quilomicrones) al estimular la lipoproteína lipasa.',
        lugar: [ 'higado', 'sangre' ],
        datos: [
          {
            t: 'Su mecanismo no está claramente establecido; en el hombre estimula la lipólisis periférica de las lipoproteínas ricas en triglicéridos (VLDL y quilomicrones) al estimular la lipoproteína lipasa.',
            ref: {
              f: 'cima-58832',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'En el hombre, gemfibrozilo estimula la lipólisis periférica de las lipoproteínas ricas en triglicéridos como las VLDL y los quilomicrones (estimulando el LPL)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre oxidación de un grupo metilo del anillo, que forma sucesivamente un metabolito hidroximetilo y otro carboxilo (el principal); la glucuronidación es otra vía importante de eliminación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre oxidación de un grupo metilo del anillo, que forma sucesivamente un metabolito hidroximetilo y otro carboxilo (el principal); la glucuronidación es otra vía importante de eliminación.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Gemfibrozilo sufre una oxidación de un grupo metilo del anillo para formar sucesivamente un metabolito hidroximetilo y carboxilo (el principal metabolito)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito carboxilo',
          actividad: 'activo',
          nota: 'Poca actividad frente al fármaco original; semivida de unas 20 horas.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Este metabolito tiene una baja actividad comparado con el compuesto original gemfibrozilo y una semivida de eliminación de aproximadamente 20 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo metabolizado: alrededor del 70 % de la dosis sale por la orina, fundamentalmente como conjugados y metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo metabolizado: alrededor del 70 % de la dosis sale por la orina, fundamentalmente como conjugados y metabolitos.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 70% de la dosis administrada a humanos se excreta en orina, fundamentalmente como conjugados de gemfibrozilo y sus metabolitos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Menos del 6 % de la dosis se excreta inalterada por la orina y el 6 % aparece en las heces.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Menos del 6% de la dosis se excreta inalterada en la orina. El seis por ciento de la dosis se encuentra en las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación está entre 1,3 y 1,5 horas.',
          ref: {
            f: 'cima-58832',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la semivida de eliminación entra en el rango de 1,3 a 1,5 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'gemfibrozilo',
      ref: { f: 'cima-58832', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una biodisponibilidad próxima al 100%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-2',
      unidad: 'h',
      analito: 'gemfibrozilo',
      ref: {
        f: 'cima-58832',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Los niveles máximos plasmáticos se alcanzan en una a dos horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '≥ 97',
      unidad: '%',
      analito: 'gemfibrozilo y metabolito principal',
      ref: {
        f: 'cima-58832',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas de gemfibrozilo y su principal metabolito es de al menos el 97%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en el equilibrio',
      valor: '9-13',
      unidad: 'L',
      analito: 'gemfibrozilo',
      ref: {
        f: 'cima-58832',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución en el estado de equilibrio es de 9-13 l',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1,3-1,5',
      unidad: 'h',
      analito: 'gemfibrozilo',
      ref: {
        f: 'cima-58832',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la semivida de eliminación entra en el rango de 1,3 a 1,5 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'gemfibrozilo y metabolitos',
      ref: {
        f: 'cima-58832',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 70% de la dosis administrada a humanos se excreta en orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-58832', '58832', 'LOPID 600 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Pfizer S.L.)', '2025-12-18', '2026-11-15'),
    rengPubchem(3463, 'gemfibrozil', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
