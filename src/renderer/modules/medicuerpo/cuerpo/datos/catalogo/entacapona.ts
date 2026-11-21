import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'entacapona',
    nombre: 'Entacapona',
    clase: 'Inhibidor de la catecol-O-metiltransferasa (COMT)',
    sinonimos: [ 'entacapone' ],
    formula: 'C14H15N3O5',
    masaMolar: 305.29,
    smiles: 'CCN(CC)C(=O)/C(=C/C1=CC(=C(C(=C1)O)O)[N+](=O)[O-])/C#N',
    inchikey: 'JRURYQJSLYLRLN-BJMVGYQFSA-N',
    cid: 5281081,
    iupac: '(E)-2-cyano-3-(3,4-dihydroxy-5-nitrophenyl)-N,N-diethylprop-2-enamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'entacapona-oral',
      producto: 'ENTACAPONA VIATRIS 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG',
      titular: 'Viatris Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '200 mg de entacapona por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina',
        'Manitol (E-421)',
        'Hidroxipropilcelulosa de baja sustitución',
        'Estearato de magnesio (E-470b)',
        'Aceite vegetal hidrogenado',
        'Hipromelosa',
        'Dióxido de titanio (E 171)',
        'Glicerina',
        'Óxido de hierro amarillo (E 172)',
        'Sacarosa',
        'Polisorbato 80',
        'Óxido de hierro rojo (E 172)'
      ],
      usos: {
        t: 'Tratamiento de adultos con enfermedad de Parkinson, en combinación con preparados convencionales de levodopa con benserazida o con carbidopa.',
        ref: {
          f: 'cima-76383',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Entacapona está indicado en combinación con preparados convencionales de levodopa/benserazida o levodopa/carbidopa',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-76383',
      advertencias: [
        {
          titulo: 'Rabdomiólisis y síndrome neuroléptico maligno',
          texto: 'Se han observado raramente en pacientes con enfermedad de Parkinson, secundarias a discinesias graves o al síndrome neuroléptico maligno.',
          organos: [ 'musculos', 'encefalo' ],
          ref: {
            f: 'cima-76383',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La rabdomiolisis secundaria a discinesias severas o síndrome neuroléptico maligno (SNM) se ha observado raramente en pacientes con enfermedad de Parkinson',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes se relacionan con el aumento de la actividad dopaminérgica y aparecen más a menudo al inicio del tratamiento.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes causadas por entacapona están relacionadas con el aumento de la actividad dopaminérgica y se presentan más comúnmente al inicio del tratamiento'
        ],
        [
          'La orina puede adquirir un color marrón rojizo por la entacapona, sin importancia.',
          'FT 4.8',
          'La orina puede adquirir un color marrón rojizo debido a entacapona, pero ello no reviste importancia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg de entacapona por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con enfermedad de Parkinson, en combinación con preparados convencionales de levodopa con benserazida o con carbidopa.',
    actua: 'Es un inhibidor reversible y específico de la COMT, de acción principalmente periférica.',
    recorrido: 'La absorción presenta una gran variabilidad intra e interindividual; la biodisponibilidad tras una dosis oral es de aproximadamente el 35 %. Se estima que el 80-90 % de la dosis se excreta por las heces (no confirmado en humanos) y el 10-20 % por la orina, donde casi no hay entacapona inalterada.'
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
          ref: { f: 'cima-76383', sec: '3 · Forma farmacéutica', cita: 'Color naranja claro, de forma ovalada, biconvexa', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción presenta una gran variabilidad intra e interindividual; la biodisponibilidad tras una dosis oral es de aproximadamente el 35 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción presenta una gran variabilidad intra e interindividual; la biodisponibilidad tras una dosis oral es de aproximadamente el 35 %.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La absorción de entacapona presenta una gran variabilidad intra e interindividual',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración plasmática máxima se alcanza aproximadamente una hora después de tomar un comprimido de 200 mg.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración plasmática máxima (Cmáx) se suele alcanzar aproximadamente una hora después de la toma de un comprimido de entacapona de 200 mg',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Tras una dosis oral, la biodisponibilidad es de aproximadamente el 35 %; los alimentos no afectan de forma significativa la absorción.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los alimentos no afectan de forma significativa la absorción de entacapona',
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
      ocurre: 'Se une ampliamente a las proteínas del plasma, sobre todo a la albúmina, y se distribuye rápidamente en los tejidos periféricos, con un volumen de distribución de 20 litros en estado estacionario.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une ampliamente a las proteínas del plasma, sobre todo a la albúmina, y se distribuye rápidamente en los tejidos periféricos, con un volumen de distribución de 20 litros en estado estacionario.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Entacapona se une ampliamente a proteínas plasmáticas, principalmente a albúmina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en estado estacionario es de 20 litros.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'con un volumen de distribución de 20 litros en estado estacionario',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Catecol-O-metiltransferasa (COMT)',
        efecto: 'Es un inhibidor reversible y específico de la COMT, de acción principalmente periférica.',
        lugar: [ 'sangre', 'higado' ],
        datos: [
          {
            t: 'Es un inhibidor reversible y específico de la COMT, de acción principalmente periférica.',
            ref: {
              f: 'cima-76383',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Es un inhibidor reversible y específico de la COMT, de acción principalmente periférica',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una pequeña cantidad del isómero E se convierte en su isómero Z; la eliminación se produce principalmente por vías metabólicas no renales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una pequeña cantidad del isómero E se convierte en su isómero Z; la eliminación se produce principalmente por vías metabólicas no renales.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación de entacapona se produce principalmente por vías metabólicas no renales',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Isómero Z y trazas de otros metabolitos',
          actividad: 'desconocida',
          nota: 'Representan el 5 % del AUC; el isómero E, el 95 %.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El isómero-( Z ) y las trazas de otros metabolitos representan el 5% restante',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se estima que el 80-90 % de la dosis se excreta por las heces (no confirmado en humanos) y el 10-20 % por la orina, donde casi no hay entacapona inalterada.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se estima que el 80-90 % de la dosis se excreta por las heces (no confirmado en humanos) y el 10-20 % por la orina, donde casi no hay entacapona inalterada.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se estima que el 80-90% de la dosis se excreta en heces, aunque esto no se ha confirmado en humanos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Aproximadamente el 92 % de la dosis se elimina durante la fase beta, con una semivida de eliminación corta de 30 minutos.',
          ref: {
            f: 'cima-76383',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente un 92% de la dosis se elimina durante la fase-β con una semivida de eliminación corta de 30 minutos',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'entacapona',
      ref: {
        f: 'cima-76383',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática máxima (Cmáx) se suele alcanzar aproximadamente una hora después de la toma de un comprimido de entacapona de 200 mg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '35 (aprox.)',
      unidad: '%',
      analito: 'entacapona',
      ref: {
        f: 'cima-76383',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Tras una dosis oral la biodisponibilidad de entacapona es de aprox. un 35%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '20',
      unidad: 'L',
      analito: 'entacapona',
      ref: {
        f: 'cima-76383',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con un volumen de distribución de 20 litros en estado estacionario',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación (fase beta)',
      valor: '30',
      unidad: 'min',
      analito: 'entacapona',
      ref: { f: 'cima-76383', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una semivida de eliminación corta de 30 minutos', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces (estimada)',
      valor: '80-90',
      unidad: '% de la dosis',
      analito: 'entacapona y metabolitos',
      ref: { f: 'cima-76383', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Se estima que el 80-90% de la dosis se excreta en heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-76383', '76383', 'ENTACAPONA VIATRIS 200 MG COMPRIMIDOS RECUBIERTOS CON PELICULA EFG (Viatris Limited)', '2022-07-09', '2026-11-15'),
    rengPubchem(5281081, 'entacapone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
