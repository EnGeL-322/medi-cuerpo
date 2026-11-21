import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bilastina',
    nombre: 'Bilastina',
    clase: 'Antihistamínico H1 no sedante',
    sinonimos: [ 'bilastine' ],
    formula: 'C28H37N3O3',
    masaMolar: 463.6,
    smiles: 'CCOCCN1C2=CC=CC=C2N=C1C3CCN(CC3)CCC4=CC=C(C=C4)C(C)(C)C(=O)O',
    inchikey: 'ACCMWZWAEFYUGZ-UHFFFAOYSA-N',
    cid: 185460,
    iupac: '2-[4-[2-[4-[1-(2-ethoxyethyl)benzimidazol-2-yl]piperidin-1-yl]ethyl]phenyl]-2-methylpropanoic acid',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'bilastina-oral',
      producto: 'IBIS 20 mg COMPRIMIDOS',
      titular: 'Menarini International Operations Luxembourg S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '20 mg de bilastina por comprimido, según la ficha técnica',
      excipientes: [ 'Celulosa microcristalina', 'Carboximetilalmidón sódico (tipo A) (derivado de patata)', 'Sílice coloidal anhidra', 'Estearato magnésico' ],
      usos: {
        t: 'Tratamiento sintomático de la rinoconjuntivitis alérgica (estacional y perenne) y de la urticaria, en adultos y adolescentes desde 12 años.',
        ref: {
          f: 'cima-73029',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento sintomático de la rinoconjuntivitis alérgica (estacional y perenne) y de la urticaria',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-73029',
      advertencias: [
        {
          titulo: 'Prolongación del intervalo QT',
          texto: 'Se han notificado casos de prolongación del intervalo QT en el electrocardiograma en pacientes que toman bilastina.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-73029',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han notificado casos de prolongación del intervalo QT en el electrocardiograma en pacientes que toman bilastina',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Inhibidores de la glucoproteína P en insuficiencia renal',
          texto: 'En insuficiencia renal moderada o grave, tomarla con inhibidores de la glucoproteína P puede aumentar los niveles de bilastina y el riesgo de efectos adversos.',
          organos: [ 'rinones', 'sangre' ],
          ref: {
            f: 'cima-73029',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'puede aumentar los niveles plasmáticos de bilastina y por tanto aumentar el riesgo de efectos adversos de bilastina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes con 20 mg: cefalea, somnolencia, mareo y fatiga, con frecuencia similar a la del placebo.',
          'FT 4.8',
          'fueron cefalea, somnolencia, mareo y fatiga'
        ],
        [
          'La incidencia global de acontecimientos adversos fue comparable a la del placebo (12,7 % frente a 12,8 %).',
          'FT 4.8',
          'fue comparable a la incidencia en pacientes que recibieron placebo (12,7% frente a 12,8%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20 mg de bilastina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la rinoconjuntivitis alérgica (estacional y perenne) y de la urticaria, en adultos y adolescentes desde 12 años.',
    actua: 'Es un antihistamínico no sedante y de acción prolongada con afinidad antagonista selectiva por los receptores H1 periféricos y sin afinidad por los receptores muscarínicos.',
    recorrido: 'Se absorbe rápidamente tras la administración oral y la biodisponibilidad oral media es del 61 %; no se observó acumulación. Tras una dosis única marcada se recuperó casi el 95 % en orina (28,3 %) y heces (66,5 %) como bilastina inalterada; la vida media de eliminación fue de 14,5 horas.'
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
          ref: { f: 'cima-73029', sec: '3 · Forma farmacéutica', cita: 'Comprimidos blancos ovales biconvexos y ranurados', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente tras la administración oral y la biodisponibilidad oral media es del 61 %; no se observó acumulación.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente tras la administración oral y la biodisponibilidad oral media es del 61 %; no se observó acumulación.',
          ref: {
            f: 'cima-73029',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Bilastina se absorbe rápidamente tras la administración oral',
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
      ocurre: 'Es sustrato de la glucoproteína P y del transportador OATP, y a las dosis terapéuticas se une a las proteínas del plasma en un 84-90 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Es sustrato de la glucoproteína P y del transportador OATP, y a las dosis terapéuticas se une a las proteínas del plasma en un 84-90 %.',
          ref: {
            f: 'cima-73029',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'A las dosis terapéuticas la unión de bilastina a las proteínas plasmáticas es de 84-90%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina',
        efecto: 'Es un antihistamínico no sedante y de acción prolongada con afinidad antagonista selectiva por los receptores H1 periféricos y sin afinidad por los receptores muscarínicos.',
        lugar: [ 'vasos', 'piel' ],
        datos: [
          {
            t: 'Es un antihistamínico no sedante y de acción prolongada con afinidad antagonista selectiva por los receptores H1 periféricos y sin afinidad por los receptores muscarínicos.',
            ref: {
              f: 'cima-73029',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Bilastina es un antihistamínico no sedante y de acción prolongada',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza de forma significativa en humanos: en estudios in vitro no indujo ni inhibió las isoenzimas del CYP450.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza de forma significativa en humanos: en estudios in vitro no indujo ni inhibió las isoenzimas del CYP450.',
          ref: {
            f: 'cima-73029',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'bilastina no es significativamente metabolizada en humanos',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única marcada se recuperó casi el 95 % en orina (28,3 %) y heces (66,5 %) como bilastina inalterada; la vida media de eliminación fue de 14,5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única marcada se recuperó casi el 95 % en orina (28,3 %) y heces (66,5 %) como bilastina inalterada; la vida media de eliminación fue de 14,5 horas.',
          ref: {
            f: 'cima-73029',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'casi el 95% de la dosis administrada fue recuperada en orina (28,3%) y heces (66,5%) como bilastina inalterada',
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
      nombre: 'Biodisponibilidad oral media',
      valor: '61',
      unidad: '%',
      analito: 'bilastina',
      ref: { f: 'cima-73029', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad oral media de bilastina es del 61%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '84-90',
      unidad: '%',
      analito: 'bilastina',
      ref: {
        f: 'cima-73029',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'A las dosis terapéuticas la unión de bilastina a las proteínas plasmáticas es de 84-90%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media de eliminación',
      valor: '14,5',
      unidad: 'h',
      analito: 'bilastina',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'cima-73029',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La vida media de eliminación calculada en voluntarios sanos fue de 14,5 h',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '28,3',
      unidad: '% de la dosis',
      analito: 'bilastina',
      poblacion: 'voluntarios adultos sanos',
      condiciones: 'dosis única de 14C-bilastina',
      ref: { f: 'cima-73029', sec: '5.2 · Propiedades farmacocinéticas', cita: 'recuperada en orina (28,3%) y heces (66,5%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '66,5',
      unidad: '% de la dosis',
      analito: 'bilastina',
      poblacion: 'voluntarios adultos sanos',
      condiciones: 'dosis única de 14C-bilastina',
      ref: { f: 'cima-73029', sec: '5.2 · Propiedades farmacocinéticas', cita: 'recuperada en orina (28,3%) y heces (66,5%)', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-73029', '73029', 'IBIS 20 mg COMPRIMIDOS (Menarini International Operations Luxembourg S.A.)', '2026-05-06', '2026-11-15'),
    rengPubchem(185460, 'bilastine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
