import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pirfenidona',
    nombre: 'Pirfenidona',
    clase: 'Antifibrótico (fibrosis pulmonar idiopática)',
    sinonimos: [ 'pirfenidone' ],
    formula: 'C12H11NO',
    masaMolar: 185.22,
    smiles: 'CC1=CN(C(=O)C=C1)C2=CC=CC=C2',
    inchikey: 'ISWRGOKTTBVCFA-UHFFFAOYSA-N',
    cid: 40632,
    iupac: '5-methyl-1-phenylpyridin-2-one',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'pirfenidona-oral',
      producto: 'PIRFENIDONA AUROVITAS 267 MG COMPRIMIDOS EFG',
      titular: 'Aurovitas Spain, S.A.U.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '267 o 801 mg de pirfenidona por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Croscarmelosa de sodio',
        'Hipromelosa 3 mPAS (2910)',
        'Óxido de hierro amarillo (E172) (para la concentración de 267 mg)',
        'Óxido de hierro rojo (E172) (para la de 801 mg)',
        'Sílice coloidal anhidra',
        'Fumarato de estearilo y sodio'
      ],
      usos: {
        t: 'Tratamiento de la fibrosis pulmonar idiopática (FPI) en adultos.',
        ref: {
          f: 'cima-89045',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'para el tratamiento de la fibrosis pulmonar idiopática (FPI)',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-89045',
      advertencias: [
        {
          titulo: 'Función hepática',
          texto: 'Se ha observado con frecuencia un aumento de las transaminasas en pacientes tratados con pirfenidona.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-89045',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se ha observado frecuentemente un aumento de las transaminasas en pacientes tratados con pirfenidona',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes frente a placebo: náuseas (32,4 % frente a 12,2 %), erupción cutánea (26,2 % frente a 7,7 %), diarrea (18,8 % frente a 14,4 %) y cansancio (18,5 % frente a 10,4 %).',
          'FT 4.8',
          'náuseas (32,4% frente al 12,2%), erupción cutánea (26,2% frente al 7,7%), diarrea (18,8% frente al 14,4%), cansancio (18,5% frente al 10,4%)'
        ],
        [
          'Reacción por fotosensibilidad: 9,3 % con pirfenidona frente a 1,1 % con placebo.',
          'FT 4.8',
          'reacción por fotosensibilidad (9,3% frente al 1,1%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 267 o 801 mg de pirfenidona por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la fibrosis pulmonar idiopática (FPI) en adultos.',
    actua: 'Su mecanismo de acción no se conoce bien; los datos indican que tiene propiedades antifibróticas y antiinflamatorias en sistemas in vitro y en modelos animales de fibrosis pulmonar.',
    recorrido: 'No se ha determinado la biodisponibilidad absoluta en el ser humano; la comida baja la Cmax y la incidencia de náuseas y mareos es menor tras comer. Alrededor del 80 % de la dosis oral se elimina por la orina en 24 horas, casi todo como 5-carboxi-pirfenidona; menos del 1 % sale intacto.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-89045', sec: '3 · Forma farmacéutica', cita: 'Pirfenidona Aurovitas 267 mg comprimidos EFG', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'No se ha determinado la biodisponibilidad absoluta en el ser humano; la comida baja la Cmax y la incidencia de náuseas y mareos es menor tras comer.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'No se ha determinado la biodisponibilidad absoluta en el ser humano; la comida baja la Cmax y la incidencia de náuseas y mareos es menor tras comer.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta de pirfenidona no se ha determinado en el ser humano',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos la Cmax baja un 40 % con el comprimido y un 50 % con las cápsulas.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la administración con alimentos de cualquiera de las formulaciones redujo la C max de pirfenidona, siendo esta reducción ligeramente inferior con el comprimido de pirfenidona (en un 40%) que con las cápsulas de pirfenidona (en un 50%)',
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
      ocurre: 'Se une a las proteínas del plasma humano, sobre todo a la albúmina; la unión media total varió entre el 50 % y el 58 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a las proteínas del plasma humano, sobre todo a la albúmina; la unión media total varió entre el 50 % y el 58 %.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El porcentaje medio total de unión varió entre el 50% y el 58%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución aparente por vía oral en el equilibrio es de unos 70 litros: la distribución en los tejidos es modesta.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución medio aparente por vía oral en estado de equilibrio es de aproximadamente 70 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Su mecanismo de acción no se conoce bien; los datos indican que tiene propiedades antifibróticas y antiinflamatorias en sistemas in vitro y en modelos animales de fibrosis pulmonar.',
        lugar: [ 'pulmones' ],
        datos: [
          {
            t: 'Su mecanismo de acción no se conoce bien; los datos indican que tiene propiedades antifibróticas y antiinflamatorias en sistemas in vitro y en modelos animales de fibrosis pulmonar.',
            ref: {
              f: 'cima-89045',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El mecanismo de acción de pirfenidona no se conoce bien todavía. Sin embargo, los datos disponibles indican que pirfenidona tiene propiedades tanto antifibróticas como antiinflamatorias',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Entre el 70 % y el 80 % se metaboliza por la CYP1A2 y, en menor proporción, por otras isoenzimas CYP (2C9, 2C19, 2D6 y 2E1).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Entre el 70 % y el 80 % se metaboliza por la CYP1A2 y, en menor proporción, por otras isoenzimas CYP (2C9, 2C19, 2D6 y 2E1).',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente, el 70-80% de pirfenidona es metabolizada mediante el CYP1A2',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-carboxi-pirfenidona',
          actividad: 'activo',
          nota: 'Metabolito principal; la actividad in vitro es relevante solo a concentraciones muy superiores a las plasmáticas de los pacientes.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los datos in vitro indican cierta actividad farmacológicamente relevante del metabolito principal (5-carboxi-pirfenidona)',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 80 % de la dosis oral se elimina por la orina en 24 horas, casi todo como 5-carboxi-pirfenidona; menos del 1 % sale intacto.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 80 % de la dosis oral se elimina por la orina en 24 horas, casi todo como 5-carboxi-pirfenidona; menos del 1 % sale intacto.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente, el 80% de la dosis de pirfenidona administrada por vía oral se elimina en la orina en las 24 horas siguientes a su administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación aparente terminal fue de unas 2,4 horas en adultos sanos de más edad.',
          ref: {
            f: 'cima-89045',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la semivida de eliminación aparente terminal fue de aproximadamente 2,4 horas',
            codigo: 'FT 5.2'
          },
          poblacion: 'adultos sanos de más edad',
          condiciones: 'dosis única'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '50-58',
      unidad: '%',
      analito: 'pirfenidona',
      ref: {
        f: 'cima-89045',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El porcentaje medio total de unión varió entre el 50% y el 58%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente por vía oral',
      valor: '70 (aprox.)',
      unidad: 'L',
      analito: 'pirfenidona',
      ref: {
        f: 'cima-89045',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución medio aparente por vía oral en estado de equilibrio es de aproximadamente 70 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente terminal',
      valor: '2,4 (aprox.)',
      unidad: 'h',
      analito: 'pirfenidona',
      poblacion: 'adultos sanos de más edad',
      condiciones: 'dosis única',
      ref: {
        f: 'cima-89045',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la semivida de eliminación aparente terminal fue de aproximadamente 2,4 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada por la orina en 24 horas',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'pirfenidona y metabolitos',
      ref: {
        f: 'cima-89045',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente, el 80% de la dosis de pirfenidona administrada por vía oral se elimina en la orina en las 24 horas siguientes a su administración',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-89045', '89045', 'PIRFENIDONA AUROVITAS 267 MG COMPRIMIDOS EFG (Aurovitas Spain, S.A.U.)', '2026-01-26', '2026-11-15'),
    rengPubchem(40632, 'pirfenidone', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
