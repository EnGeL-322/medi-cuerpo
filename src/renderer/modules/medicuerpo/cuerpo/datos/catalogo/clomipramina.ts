import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clomipramina',
    nombre: 'Clomipramina',
    clase: 'Antidepresivo tricíclico (inhibidor de la recaptación de noradrenalina y serotonina)',
    sinonimos: [ 'clomipramine', 'Anafranil' ],
    formula: 'C19H23ClN2',
    masaMolar: 314.9,
    smiles: 'CN(C)CCCN1C2=CC=CC=C2CCC3=C1C=C(C=C3)Cl',
    inchikey: 'GDLIGKIOYRNHDA-UHFFFAOYSA-N',
    cid: 2801,
    iupac: '3-(2-chloro-5,6-dihydrobenzo[b][1]benzazepin-11-yl)-N,N-dimethylpropan-1-amine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'clomipramina-oral',
      producto: 'ANAFRANIL 10 MG COMPRIMIDOS RECUBIERTOS',
      titular: 'Alfasigma S.P.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '10 mg y 25 mg de hidrocloruro de clomipramina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Hidrocloruro de clomipramina',
        ref: { f: 'cima-49656', sec: '2 · Composición cualitativa y cuantitativa', cita: '10 mg de clomipramina hidrocloruro', codigo: 'FT 2' }
      },
      excipientes: [
        'Sacarosa',
        'Lactosa',
        'Gelatina',
        'Glicerol (E-422)',
        'Estearato de magnesio',
        'Almidón de maíz',
        'Talco',
        'Hipromelosa',
        'Copovidona',
        'Dióxido de titanio (E-171)',
        'Celulosa microcristalina',
        'Amarillo óxido de hierro (E-172)',
        'Polietilenglicol',
        'Povidona'
      ],
      usos: {
        t: 'Tratamiento de la depresión, del trastorno obsesivo-compulsivo, de las fobias y de las crisis de angustia, entre otras indicaciones.',
        ref: {
          f: 'cima-49656',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Depresión de cualquier etiología, sintomatología y gravedad',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-49656',
      advertencias: [
        {
          titulo: 'Riesgo de suicidio',
          texto: 'El riesgo de suicidio es inherente a la depresión grave y puede persistir hasta que se produzca una remisión significativa.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-49656',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'El riesgo de suicidio es inherente a la depresión grave y puede persistir hasta que se produzca una remisión significativa',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones adversas suelen ser leves y pasajeras y suelen desaparecer con la continuación del tratamiento o con una reducción de la dosis.',
          'FT 4.8',
          'Las reacciones adversas son generalmente leves y pasajeras, y suelen desaparecer con la continuación del tratamiento o con una reducción de la dosis'
        ],
        [
          'Es a menudo difícil distinguir algunas reacciones adversas de los síntomas propios de la depresión.',
          'FT 4.8',
          'Es a menudo difícil distinguir ciertas reacciones adversas de aquellos síntomas propios de la depresión'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 10 mg y 25 mg de hidrocloruro de clomipramina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la depresión, del trastorno obsesivo-compulsivo, de las fobias y de las crisis de angustia, entre otras indicaciones.',
    actua: 'Es un inhibidor de la recaptación de noradrenalina y, preferentemente, de serotonina.',
    recorrido: 'Se absorbe completamente en el tubo digestivo; la biodisponibilidad sistémica de la clomipramina inalterada se reduce a casi el 50 % por el metabolismo de primer paso hepático. Alrededor de dos tercios de una dosis única se excretan como conjugados hidrosolubles por la orina y aproximadamente un tercio por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-49656', sec: '3 · Forma farmacéutica', cita: 'Anafranil 10 mg son comprimidos recubiertos amarillos', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe completamente en el tubo digestivo; la biodisponibilidad sistémica de la clomipramina inalterada se reduce a casi el 50 % por el metabolismo de primer paso hepático.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe completamente en el tubo digestivo; la biodisponibilidad sistémica de la clomipramina inalterada se reduce a casi el 50 % por el metabolismo de primer paso hepático.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La clomipramina se absorbe completamente del tracto gastrointestinal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad sistémica de la clomipramina inalterada se reduce a casi el 50 % por el metabolismo de primer paso hepático al metabolito activo N-desmetilclomipramina.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad sistémica de la clomipramina inalterada se reduce a casi 50 % por el metabolismo de primer paso hepático al metabolito activo N- desmetilclomipramina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad no se ve afectada de forma significativa por la ingesta de alimentos.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad de la clomipramina no se ve afectada significativamente por la ingesta de alimentos',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es del 97,6 %; se distribuye ampliamente por todo el cuerpo, con un volumen de distribución aparente de 12 a 17 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 97,6 %; se distribuye ampliamente por todo el cuerpo, con un volumen de distribución aparente de 12 a 17 L/kg.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas es del 97,6 %. La clomipramina es ampliamente distribuida por todo el cuerpo, el volumen de distribución aparente es cerca de 12 a 17 L/kg de peso corporal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración en el líquido cefalorraquídeo es casi el 2 % de la concentración plasmática.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La concentración en el líquido cefalorraquídeo es casi el 2 % de la concentración plasmática',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Transportadores de recaptación de noradrenalina y serotonina',
        efecto: 'Es un inhibidor de la recaptación de noradrenalina y, preferentemente, de serotonina.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un inhibidor de la recaptación de noradrenalina y, preferentemente, de serotonina.',
            ref: {
              f: 'cima-49656',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Inhibidor de la recaptación de noradrenalina y preferentemente de serotonina (inhibidores no selectivos de la recaptación de las monoaminas)',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La ruta primaria es la desmetilación para formar el metabolito activo N-desmetilclomipramina, sobre todo por la CYP3A4, la CYP2C19 y la CYP1A2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La ruta primaria es la desmetilación para formar el metabolito activo N-desmetilclomipramina, sobre todo por la CYP3A4, la CYP2C19 y la CYP1A2.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ruta primaria del metabolismo de la clomipramina es la desmetilación para formar el metabolito activo, N-desmetilclomipramina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La N-desmetilclomipramina puede formarse por varias enzimas P450, principalmente la CYP3A4, la CYP2C19 y la CYP1A2.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La N-desmetilclomipramina puede formarse por varios enzimas P450, principalmente por CYP3A4, CYP2C19, y CYP1A2',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetilclomipramina',
          actividad: 'activo',
          nota: 'Metabolito activo principal; después se hidroxila.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ruta primaria del metabolismo de la clomipramina es la desmetilación para formar el metabolito activo, N-desmetilclomipramina',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor de dos tercios de una dosis única se excretan como conjugados hidrosolubles por la orina y aproximadamente un tercio por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor de dos tercios de una dosis única se excretan como conjugados hidrosolubles por la orina y aproximadamente un tercio por las heces.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Alrededor de dos tercios de una dosis única de clomipramina se excretan en forma de conjugados hidrosolubles por la orina y aproximadamente un tercio con las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La clomipramina se elimina de la sangre con una semivida de 21 horas (rango de 12 a 36) y la N-desmetilclomipramina, con una de 36 horas.',
          ref: {
            f: 'cima-49656',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La clomipramina se elimina de la sangre con una semivida de 21 h (rango: 12-36 h), y la N-desmetilclomipramina con una semivida de 36 h',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,6',
      unidad: '%',
      analito: 'clomipramina',
      ref: { f: 'cima-49656', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a proteínas plasmáticas es del 97,6 %', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '12-17 (aprox.)',
      unidad: 'L/kg',
      analito: 'clomipramina',
      ref: {
        f: 'cima-49656',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'el volumen de distribución aparente es cerca de 12 a 17 L/kg de peso corporal',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación de la clomipramina',
      valor: '21 (12-36)',
      unidad: 'h',
      analito: 'clomipramina',
      ref: {
        f: 'cima-49656',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La clomipramina se elimina de la sangre con una semivida de 21 h (rango: 12-36 h)',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-49656', '49656', 'ANAFRANIL 10 MG COMPRIMIDOS RECUBIERTOS (Alfasigma S.P.A.)', '2021-08-09', '2026-11-15'),
    rengPubchem(2801, 'clomipramine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
