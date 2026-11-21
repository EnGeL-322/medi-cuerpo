import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'domperidona',
    nombre: 'Domperidona',
    clase: 'Antagonista dopaminérgico antiemético',
    sinonimos: [ 'domperidone', 'Motilium' ],
    formula: 'C22H24ClN5O2',
    masaMolar: 425.9,
    smiles: 'C1CN(CCC1N2C3=C(C=C(C=C3)Cl)NC2=O)CCCN4C5=CC=CC=C5NC4=O',
    inchikey: 'FGXWKSZFVQUSTL-UHFFFAOYSA-N',
    cid: 3151,
    iupac: '6-chloro-3-[1-[3-(2-oxo-3H-benzimidazol-1-yl)propyl]piperidin-4-yl]-1H-benzimidazol-2-one',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'domperidona-oral',
      producto: 'MOTILIUM 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Esteve Pharmaceuticals S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '10 mg de domperidona por comprimido',
      excipientes: [
        'Lactosa monohidrato',
        'almidón de maíz',
        'celulosa microcristalina (E-460)',
        'almidón pregelatinizado de patata',
        'povidona',
        'estearato magnésico (E-572)',
        'aceite de ricino hidrogenado',
        'laurilsulfato de sodio',
        'hipromelosa (E-464)'
      ],
      usos: {
        t: 'Alivio de las náuseas y los vómitos en adultos y adolescentes desde 12 años que pesen 35 kg o más.',
        ref: {
          f: 'cima-55410',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Motilium está indicado para el alivio de los síntomas de náuseas y vómitos en adultos y adolescentes de 12 años o mayores',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-55410',
      advertencias: [
        {
          titulo: 'Efectos cardiovasculares',
          texto: 'Se ha asociado a prolongación del intervalo QT; muy rara vez se han notificado Torsades de pointes.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-55410',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Domperidona se ha asociado a una prolongación del intervalo QT en el electrocardiograma',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Insuficiencia renal',
          texto: 'La semivida se prolonga en la insuficiencia renal grave.',
          organos: [ 'rinones' ],
          ref: {
            f: 'cima-55410',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La semivida de eliminación de domperidona se prolonga en la insuficiencia renal grave',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Entre las descritas: mareo, somnolencia y cefalea (la frecuencia exacta de cada una no se precisa aquí).',
          'FT 4.8',
          'Trastornos del sistema nervioso Mareo Somnolencia Cefalea'
        ],
        [ 'También boca seca y diarrea.', 'FT 4.8', 'Trastornos gastrointestinales Boca seca Diarrea' ],
        [
          'En el corazón: arritmias ventriculares y prolongación del QTc.',
          'FT 4.8',
          'Trastornos cardiacos Arritmias ventriculares Prolongación del QTc'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg de domperidona por comprimido. Los excipientes no son el principio activo.',
    usos: 'Alivio de las náuseas y los vómitos en adultos y adolescentes desde 12 años que pesen 35 kg o más.',
    actua: 'Antagoniza los receptores de dopamina en el estómago y en la zona quimiorreceptora, que está fuera de la barrera hematoencefálica; no atraviesa fácilmente esa barrera.',
    recorrido: 'Se absorbe con rapidez y el máximo plasmático llega aproximadamente 1 hora después de tomarla; la comida aumenta la biodisponibilidad en personas sanas. La eliminación urinaria y la fecal son el 31 % y el 66 % de la dosis; la semivida tras una dosis única es de 7-9 horas en personas sanas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido biconvexo recubierto con película, blanco.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido biconvexo recubierto con película, blanco.',
          ref: { f: 'cima-55410', sec: '3 · Forma farmacéutica', cita: 'Comprimido biconvexo recubierto, blanco brillante', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y el máximo plasmático llega aproximadamente 1 hora después de tomarla; la comida aumenta la biodisponibilidad en personas sanas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y el máximo plasmático llega aproximadamente 1 hora después de tomarla; la comida aumenta la biodisponibilidad en personas sanas.',
          ref: {
            f: 'cima-55410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Domperidona se absorbe rápidamente tras la administración oral y se alcanzan concentraciones plasmáticas máximas aproximadamente 1 hora después de la administración',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Una menor acidez gástrica altera su absorción.',
          ref: {
            f: 'cima-55410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La disminución de la acidez gástrica altera la absorción de domperidona',
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
      ocurre: 'Se une a proteínas del plasma en un 91-93 %; se distribuye ampliamente por los tejidos, con poca concentración en el cerebro.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a proteínas del plasma en un 91-93 %; se distribuye ampliamente por los tejidos, con poca concentración en el cerebro.',
          ref: {
            f: 'cima-55410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La domperidona se une a proteínas plasmáticas en un 91 - 93%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptores de dopamina periféricos',
        efecto: 'Antagoniza los receptores de dopamina en el estómago y en la zona quimiorreceptora, que está fuera de la barrera hematoencefálica; no atraviesa fácilmente esa barrera.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Antagoniza los receptores de dopamina en el estómago y en la zona quimiorreceptora, que está fuera de la barrera hematoencefálica; no atraviesa fácilmente esa barrera.',
            ref: {
              f: 'cima-55410',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La domperidona es un antagonista dopaminérgico con propiedades antieméticas',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un metabolismo hepático rápido y amplio por hidroxilación y N-desalquilación; el CYP3A4 es la forma principal implicada.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un metabolismo hepático rápido y amplio por hidroxilación y N-desalquilación; el CYP3A4 es la forma principal implicada.',
          ref: {
            f: 'cima-55410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La domperidona sufre un rápido y amplio metabolismo hepático por hidroxilación',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación urinaria y la fecal son el 31 % y el 66 % de la dosis; la semivida tras una dosis única es de 7-9 horas en personas sanas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación urinaria y la fecal son el 31 % y el 66 % de la dosis; la semivida tras una dosis única es de 7-9 horas en personas sanas.',
          ref: {
            f: 'cima-55410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación urinaria y fecal representa el 31 y 66% de la dosis',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'domperidona',
      ref: {
        f: 'cima-55410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'concentraciones plasmáticas máximas aproximadamente 1 hora después de la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '91-93',
      unidad: '%',
      analito: 'domperidona',
      ref: {
        f: 'cima-55410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La domperidona se une a proteínas plasmáticas en un 91 - 93%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática tras una dosis única',
      valor: '7-9',
      unidad: 'h',
      analito: 'domperidona',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única',
      ref: {
        f: 'cima-55410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida plasmática tras una sola dosis oral es de 7 - 9 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminación urinaria',
      valor: '31',
      unidad: '% de la dosis',
      analito: 'domperidona y metabolitos',
      ref: {
        f: 'cima-55410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La eliminación urinaria y fecal representa el 31 y 66% de la dosis oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminación fecal',
      valor: '66',
      unidad: '% de la dosis',
      analito: 'domperidona y metabolitos',
      ref: {
        f: 'cima-55410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La eliminación urinaria y fecal representa el 31 y 66% de la dosis oral',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-55410', '55410', 'MOTILIUM 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Esteve Pharmaceuticals S.A.)', '2025-09-23', '2026-11-12'),
    rengPubchem(3151, 'domperidone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
