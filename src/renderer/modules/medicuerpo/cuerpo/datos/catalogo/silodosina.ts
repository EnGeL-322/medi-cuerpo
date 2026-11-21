import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'silodosina',
    nombre: 'Silodosina',
    clase: 'Bloqueante alfa-1A adrenérgico (para la hiperplasia benigna de próstata)',
    sinonimos: [ 'silodosin', 'Xilapro' ],
    formula: 'C25H32F3N3O4',
    masaMolar: 495.5,
    smiles: 'C[C@H](CC1=CC2=C(C(=C1)C(=O)N)N(CC2)CCCO)NCCOC3=CC=CC=C3OCC(F)(F)F',
    inchikey: 'PNCPYILNMDWPEY-QGZVFWFLSA-N',
    cid: 5312125,
    iupac: '1-(3-hydroxypropyl)-5-[(2R)-2-[2-[2-(2,2,2-trifluoroethoxy)phenoxy]ethylamino]propyl]-2,3-dihydroindole-7-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'silodosina-oral',
      producto: 'XILAPRO 4 MG CAPSULAS DURAS EFG',
      titular: 'Adventia Pharma S.L.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '4 y 8 mg de silodosina por cápsula, según la ficha técnica',
      excipientes: [
        'Manitol (E421)',
        'Almidón pregelatinizado',
        'Sodio esteárico fumarato',
        'Gelatina',
        'Dióxido de titanio (E171)',
        'Óxido de hierro amarillo (E172)',
        'Tinta de impresión (goma laca, propilenglicol, óxido de hierro negro, hidróxido de potasio)'
      ],
      usos: {
        t: 'Tratamiento de los signos y síntomas de la hiperplasia benigna de próstata (HBP) en varones adultos.',
        ref: {
          f: 'cima-85271',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de los signos y síntomas de la hiperplasia benigna de próstata (HBP) en varones adultos',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-85271',
      advertencias: [
        {
          titulo: 'Síndrome del iris flácido intraoperatorio',
          texto: 'Se ha observado durante la cirugía de cataratas en pacientes tratados con bloqueantes alfa-1 o tratados antes con ellos.',
          organos: [ 'ojos' ],
          ref: {
            f: 'cima-85271',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se ha observado un IFIS (una variante del síndrome de la pupila pequeña) durante la cirugía de cataratas en algunos pacientes con tratamiento de bloqueantes α 1 o previamente tratados con dichos bloqueantes',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes son las alteraciones de la eyaculación, como la eyaculación retrógrada y la aneyaculación.',
          'FT 4.8',
          'fueron alteraciones en la eyaculación tales como eyaculación retrógrada y aneyaculación (volumen de eyaculación reducido o ausente)'
        ],
        [
          'La seguridad se evaluó en cuatro ensayos de fase II-III doble ciego controlados, con 931 pacientes tratados con silodosina.',
          'FT 4.8',
          'La seguridad de silodosina se ha evaluado en cuatro ensayos clínicos de fase II-III doble ciego controlados'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 4 y 8 mg de silodosina por cápsula, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de los signos y síntomas de la hiperplasia benigna de próstata (HBP) en varones adultos.',
    actua: 'Es altamente selectiva para los receptores adrenérgicos alfa-1A, localizados sobre todo en la próstata humana, la base y el cuello de la vejiga y la cápsula prostática.',
    recorrido: 'Administrada por vía oral se absorbe bien y su absorción es proporcional a la dosis; la biodisponibilidad absoluta es de aproximadamente el 32 %. Tras una dosis oral marcada, al cabo de 7 días se recuperó aproximadamente el 33,5 % de la radiactividad en la orina y el 54,9 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-85271', sec: '3 · Forma farmacéutica', cita: 'Xilapro 4 mg: cápsulas de gelatina de color marfil, opacas', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Administrada por vía oral se absorbe bien y su absorción es proporcional a la dosis; la biodisponibilidad absoluta es de aproximadamente el 32 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Administrada por vía oral se absorbe bien y su absorción es proporcional a la dosis; la biodisponibilidad absoluta es de aproximadamente el 32 %.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Silodosina administrada por vía oral se absorbe bien y su absorción es proporcional a la dosis',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es de aproximadamente el 32 %.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad absoluta es de aproximadamente el 32%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los alimentos reducen la Cmax alrededor de un 30 %, aumentan el tmax aproximadamente 1 hora y tienen poco efecto sobre el AUC.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los alimentos reducen la C max alrededor de un 30%, aumentan el t max aproximadamente 1 hora y tienen poco efecto sobre el AUC',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'prostata' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Tiene un volumen de distribución de 0,81 L/kg y está unida en un 96,6 % a las proteínas del plasma; no se distribuye en las células sanguíneas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tiene un volumen de distribución de 0,81 L/kg y está unida en un 96,6 % a las proteínas del plasma; no se distribuye en las células sanguíneas.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Silodosina tiene un volumen de distribución de 0,81 l/kg y está unida en un 96,6% a proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico alfa-1A',
        efecto: 'Es altamente selectiva para los receptores adrenérgicos alfa-1A, localizados sobre todo en la próstata humana, la base y el cuello de la vejiga y la cápsula prostática.',
        lugar: [ 'prostata', 'vejiga' ],
        datos: [
          {
            t: 'Es altamente selectiva para los receptores adrenérgicos alfa-1A, localizados sobre todo en la próstata humana, la base y el cuello de la vejiga y la cápsula prostática.',
            ref: {
              f: 'cima-85271',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Silodosina es altamente selectiva para los receptores adrenérgicos α 1A , que están fundamentalmente localizados en la próstata humana, la base de la vejiga, el cuello de la vejiga, la cápsula prostática',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa por glucuronidación (UGT2B7), por alcohol y aldehído deshidrogenasas y por oxidación, sobre todo mediante la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa por glucuronidación (UGT2B7), por alcohol y aldehído deshidrogenasas y por oxidación, sobre todo mediante la CYP3A4.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Silodosina se metaboliza extensivamente a través de vías de glucuronidación (UGT2B7), alcohol y aldehído deshidrogenasas y oxidación, principalmente CYP3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de silodosina (KMD-3213G)',
          actividad: 'activo',
          nota: 'Principal metabolito del plasma, activo in vitro; su semivida es de unas 24 horas.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito en plasma, el conjugado glucurónido de silodosina (KMD-3213G), que ha mostrado ser activo in vitro',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, al cabo de 7 días se recuperó aproximadamente el 33,5 % de la radiactividad en la orina y el 54,9 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, al cabo de 7 días se recuperó aproximadamente el 33,5 % de la radiactividad en la orina y el 54,9 % en las heces.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración oral de silodosina marcada con 14 C, la recuperación de la radiactividad al cabo de 7 días fue de aproximadamente el 33,5% en la orina y el 54,9% en las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida terminal del fármaco original y de su glucurónido es de aproximadamente 11 y 18 horas.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida terminal del fármaco parental y de su glucurónido es de aproximadamente 11 y 18 horas, respectivamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El aclaramiento corporal fue de alrededor de 0,28 L/h/kg.',
          ref: {
            f: 'cima-85271',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El aclaramiento corporal de silodosina fue de alrededor de 0,28 l/h/kg',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima (tras el desayuno)',
      valor: '2,5 (1,0-3,0)',
      unidad: 'h',
      analito: 'silodosina',
      poblacion: 'individuos sanos de sexo masculino',
      condiciones: '8 mg una vez al día tras el desayuno',
      ref: { f: 'cima-85271', sec: '5.2 · Propiedades farmacocinéticas', cita: 't max 2,5 horas (intervalo: 1,0-3,0)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '32 (aprox.)',
      unidad: '%',
      analito: 'silodosina',
      ref: {
        f: 'cima-85271',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta es de aproximadamente el 32%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96,6',
      unidad: '%',
      analito: 'silodosina',
      ref: { f: 'cima-85271', sec: '5.2 · Propiedades farmacocinéticas', cita: 'está unida en un 96,6% a proteínas plasmáticas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,81',
      unidad: 'L/kg',
      analito: 'silodosina',
      ref: {
        f: 'cima-85271',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Silodosina tiene un volumen de distribución de 0,81 l/kg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del fármaco original',
      valor: '11 (aprox.)',
      unidad: 'h',
      analito: 'silodosina',
      ref: { f: 'cima-85271', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es de aproximadamente 11 y 18 horas, respectivamente', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina a los 7 días',
      valor: '33,5 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de silodosina marcada',
      ref: { f: 'cima-85271', sec: '5.2 · Propiedades farmacocinéticas', cita: 'aproximadamente el 33,5% en la orina', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces a los 7 días',
      valor: '54,9 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral de silodosina marcada',
      ref: { f: 'cima-85271', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 54,9% en las heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-85271', '85271', 'XILAPRO 4 MG CAPSULAS DURAS EFG (Adventia Pharma S.L.)', '2024-12-12', '2026-11-15'),
    rengPubchem(5312125, 'silodosin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
