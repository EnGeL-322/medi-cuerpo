import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'atorvastatina',
  presentaciones: [
    {
  id: 'atorvastatina-cima',
  producto: 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
  titular: 'Viatris Healthcare Limited',
  mercado: 'España (UE)',
  forma: 'Comprimido recubierto con película',
  formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
  liberacion: 'no declarada',
  concentraciones: '10 mg, y otras concentraciones, de atorvastatina (como atorvastatina cálcica trihidrato) por comprimido, según la ficha técnica',
  excipientes: [
    'Carbonato cálcico',
    'Celulosa microcristalina',
    'Lactosa monohidrato',
    'Croscarmelosa sódica',
    'Polisorbato 80',
    'Hidroxipropilcelulosa',
    'Estearato de magnesio',
    'Hipromelosa',
    'Macrogol 8000',
    'Dióxido de titanio (E 171)',
    'Talco',
    'Emulsión de simeticona'
  ],
  usos: {
    t: 'Como complemento de la dieta, reducción de los niveles elevados de colesterol total, colesterol LDL, apoproteína B y triglicéridos.',
    ref: {
      f: 'cima-61716',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Cardyl está indicado como tratamiento adicional a la dieta en la reducción de niveles elevados de colesterol total (C-total), colesterol LDL (C-LDL)',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-61716',
  advertencias: [
    {
      titulo: 'Insuficiencia hepática',
      texto: 'Se recomienda hacer pruebas de función hepática antes de iniciar el tratamiento y después de forma periódica.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-61716',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se recomienda realizar pruebas de función hepática antes de iniciar el tratamiento y posteriormente de forma periódica',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Alcohol y enfermedad hepática previa',
      texto: 'Debe usarse con precaución en pacientes que consuman cantidades importantes de alcohol o tengan antecedentes de enfermedad hepática.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-61716',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'debe utilizarse con precaución en pacientes que consuman cantidades importantes de alcohol y/o con antecedentes de enfermedad hepática',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'El 5,2 % de los tratados con atorvastatina abandonó el tratamiento por efectos secundarios, frente al 4,0 % con placebo.',
      'FT 4.8',
      'un 5,2% de los pacientes tratados con atorvastatina abandonaron el tratamiento a causa de los efectos secundarios en comparación con un 4,0% de los pacientes tratados con placebo'
    ],
    [
      'La base de datos incluye 16.066 pacientes de ensayos controlados con placebo.',
      'FT 4.8',
      'En la base de datos de los ensayos clínicos de atorvastatina controlados con placebo, que incluyen 16.066 pacientes'
    ]
  ],
  familia: 'solido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'comprimido',
  recorridoPropio: {
    resumen: 'Se absorbe rápidamente tras la administración oral; las concentraciones plasmáticas máximas se alcanzan al cabo de 1 a 2 horas. Se elimina principalmente por la bilis, tras el metabolismo hepático o extrahepático; no parece sufrir recirculación enterohepática significativa.',
    etapas: {
      liberacion: {
        organos: [],
        organosGenerales: [ 'boca', 'esofago', 'estomago' ],
        llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
        ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
        sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
        datos: [
          {
            t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
            ref: { f: 'cima-61716', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película blancos', codigo: 'FT 3' }
          },
          RENG_GENERAL.disgregar
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe rápidamente tras la administración oral; las concentraciones plasmáticas máximas se alcanzan al cabo de 1 a 2 horas.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe rápidamente tras la administración oral; las concentraciones plasmáticas máximas se alcanzan al cabo de 1 a 2 horas.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Atorvastatina se absorbe rápidamente tras su administración oral; las concentraciones plasmáticas máximas (C max ) se alcanzan al cabo de 1 a 2 horas',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La biodisponibilidad absoluta es de aproximadamente el 12 %.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La biodisponibilidad absoluta de atorvastatina es de aproximadamente un 12%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La baja disponibilidad sistémica se atribuye al aclaramiento presistémico en la mucosa gastrointestinal y al metabolismo hepático de primer paso.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La baja disponibilidad sistémica se atribuye a un aclaramiento pre-sistémico en la mucosa gastrointestinal y/o a un metabolismo hepático de primer paso',
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
        ocurre: 'El volumen medio de distribución es de aproximadamente 381 litros y se une a las proteínas del plasma en un 98 % o más.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'El volumen medio de distribución es de aproximadamente 381 litros y se une a las proteínas del plasma en un 98 % o más.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'El volumen medio de distribución de atorvastatina es de aproximadamente 381 l',
              codigo: 'FT 5.2'
            }
          }
        ],
        accion: {
          diana: 'HMG-CoA reductasa',
          efecto: 'Es un inhibidor selectivo y competitivo de la HMG-CoA reductasa, la enzima limitante que convierte la HMG-CoA en mevalonato, precursor de los esteroles, incluido el colesterol.',
          lugar: [ 'higado' ],
          datos: [
            {
              t: 'Es un inhibidor selectivo y competitivo de la HMG-CoA reductasa, la enzima limitante que convierte la HMG-CoA en mevalonato, precursor de los esteroles, incluido el colesterol.',
              ref: {
                f: 'cima-61716',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Atorvastatina es un inhibidor selectivo y competitivo de la HMG-CoA reductasa, la enzima limitante responsable de la conversión del 3-hidroxi-3-metil-glutaril-coenzima A a mevalonato',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza por el citocromo P450 3A4 a derivados orto- y parahidroxilados y a distintos productos de la beta-oxidación, que luego se glucuronidan.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza por el citocromo P450 3A4 a derivados orto- y parahidroxilados y a distintos productos de la beta-oxidación, que luego se glucuronidan.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Atorvastatina se metaboliza por el citocromo P450 3A4 a sus derivados orto- y parahidroxilados y a distintos productos de la beta-oxidación',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Derivados orto- y parahidroxilados',
            actividad: 'activo',
            nota: 'In vitro inhiben la enzima igual que el fármaco original; aportan cerca del 70 % de la actividad inhibitoria circulante.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'la inhibición de la HMG-CoA reductasa por los metabolitos orto- y parahidroxilados es equivalente a la de atorvastatina',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'bilis', 'higado', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Se elimina principalmente por la bilis, tras el metabolismo hepático o extrahepático; no parece sufrir recirculación enterohepática significativa.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Se elimina principalmente por la bilis, tras el metabolismo hepático o extrahepático; no parece sufrir recirculación enterohepática significativa.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Atorvastatina se elimina principalmente por la bilis tras el metabolismo hepático y/o extrahepático',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida de eliminación plasmática en el hombre es de aproximadamente 14 horas.',
            ref: {
              f: 'cima-61716',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida de eliminación plasmática de atorvastatina en el hombre es de aproximadamente 14 horas',
              codigo: 'FT 5.2'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengFichaCIMA('cima-61716', '61716', 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Viatris Healthcare Limited)', '2024-11-29', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta el pico plasmático',
    valor: '1-2',
    unidad: 'h',
    analito: 'atorvastatina',
    ref: {
      f: 'cima-61716',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'las concentraciones plasmáticas máximas (C max ) se alcanzan al cabo de 1 a 2 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad absoluta',
    valor: '12 (aprox.)',
    unidad: '%',
    analito: 'atorvastatina',
    ref: {
      f: 'cima-61716',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La biodisponibilidad absoluta de atorvastatina es de aproximadamente un 12%',
      codigo: 'FT 5.2'
    },
    presentacion: 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen medio de distribución',
    valor: '381 (aprox.)',
    unidad: 'L',
    analito: 'atorvastatina',
    ref: {
      f: 'cima-61716',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'El volumen medio de distribución de atorvastatina es de aproximadamente 381 l',
      codigo: 'FT 5.2'
    },
    presentacion: 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida de eliminación plasmática',
    valor: '14 (aprox.)',
    unidad: 'h',
    analito: 'atorvastatina',
    ref: {
      f: 'cima-61716',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La semivida de eliminación plasmática de atorvastatina en el hombre es de aproximadamente 14 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'CARDYL 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA'
  }
]
} satisfies RengExtensionFicha
