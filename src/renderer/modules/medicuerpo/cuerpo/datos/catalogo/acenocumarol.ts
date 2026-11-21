import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acenocumarol',
    nombre: 'Acenocumarol',
    clase: 'Anticoagulante antagonista de la vitamina K',
    sinonimos: [ 'acenocoumarol', 'nicoumalone', 'Sintrom' ],
    formula: 'C19H15NO6',
    masaMolar: 353.3,
    smiles: 'CC(=O)CC(C1=CC=C(C=C1)[N+](=O)[O-])C2=C(C3=CC=CC=C3OC2=O)O',
    inchikey: 'VABCILAOYCMVPS-UHFFFAOYSA-N',
    cid: 54676537,
    iupac: '4-hydroxy-3-[1-(4-nitrophenyl)-3-oxobutyl]chromen-2-one',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'acenocumarol-oral',
      producto: 'SINTROM 1 mg COMPRIMIDOS',
      titular: 'Merus Labs Luxco Ii S.À.R.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '1 mg de acenocumarol por comprimido (también existe una concentración de 4 mg), según la ficha técnica',
      excipientes: [ 'Lactosa monohidrato', 'Sílice coloidal anhidra', 'Almidón de maíz', 'Talco', 'Estearato de magnesio', 'Hipromelosa' ],
      usos: {
        t: 'Tratamiento y profilaxis de las afecciones tromboembólicas.',
        ref: {
          f: 'cima-58994',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento y profilaxis de las afecciones tromboembólicas',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-58994',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática',
          texto: 'Se tendrá especial precaución en pacientes con insuficiencia hepática leve a moderada.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-58994',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se tendrá especial precaución en pacientes con insuficiencia hepática leve a moderada',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Insuficiencia renal',
          texto: 'Los pacientes con insuficiencia renal presentan mayor riesgo hemorrágico que los pacientes con función renal normal.',
          organos: [ 'rinones', 'sangre' ],
          ref: {
            f: 'cima-58994',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'presentan mayor riesgo hemorrágico que los pacientes con función renal normal',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'La hemorragia en diversos órganos es una reacción adversa frecuente; su aparición se relaciona con la dosis, la edad del paciente y la enfermedad de base.',
          'FT 4.8',
          'La hemorragia en diversos órganos es una reacción adversa frecuente asociada con el uso de Sintrom; su aparición está relacionada con la dosis administrada, la edad del paciente y la naturaleza de la enfermedad subyacente'
        ],
        [ 'Entre las reacciones raras figura la hipersensibilidad.', 'FT 4.8', 'Raras: Hipersensibilidad' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 1 mg de acenocumarol por comprimido (también existe una concentración de 4 mg), según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento y profilaxis de las afecciones tromboembólicas.',
    actua: 'Es un derivado de la cumarina que actúa como antagonista de la vitamina K: inhibe el complejo enzimático de la vitamina K epóxido reductasa (VKORC1) y así ejerce su efecto anticoagulante.',
    recorrido: 'Se absorbe rápidamente por vía oral, con una disponibilidad sistémica mínima del 60 %. Solo el 0,12-0,18 % de la dosis se excreta inalterado por la orina; en una semana se excreta como metabolitos y fármaco el 60 % de la dosis por la orina y el 29 % por las heces.'
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
          ref: { f: 'cima-58994', sec: '3 · Forma farmacéutica', cita: 'Comprimidos redondos, de color blanco', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente por vía oral, con una disponibilidad sistémica mínima del 60 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente por vía oral, con una disponibilidad sistémica mínima del 60 %.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Acenocumarol, una mezcla racémica de los enantiómeros ópticos R(+) y S(-), se absorbe rápidamente por vía oral con una disponibilidad sistémica mínima del 60%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración plasmática máxima se alcanza al cabo de 1 a 3 horas después de una dosis única.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se alcanza al cabo de 1 a 3 horas después de una dosis única de 10 mg',
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
      ocurre: 'La mayor parte se distribuye en el plasma, con una unión a proteínas del 98,7 %, principalmente a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La mayor parte se distribuye en el plasma, con una unión a proteínas del 98,7 %, principalmente a la albúmina.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'presentando una unión a proteínas del 98,7%, principalmente a la albúmina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen aparente de distribución es de 0,16-0,18 L/kg para el enantiómero R(+) y de 0,22-0,34 L/kg para el S(-).',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen aparente de distribución es 0,16-0,18 l/kg para el enantiómero R (+) y 0,22-0,34 l/kg para el enantiómero S (-)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'También atraviesa la barrera placentaria.',
          ref: { f: 'cima-58994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'También atraviesa la barrera placenta', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Vitamina K epóxido reductasa (VKORC1)',
        efecto: 'Es un derivado de la cumarina que actúa como antagonista de la vitamina K: inhibe el complejo enzimático de la vitamina K epóxido reductasa (VKORC1) y así ejerce su efecto anticoagulante.',
        lugar: [ 'sangre', 'higado' ],
        datos: [
          {
            t: 'Es un derivado de la cumarina que actúa como antagonista de la vitamina K: inhibe el complejo enzimático de la vitamina K epóxido reductasa (VKORC1) y así ejerce su efecto anticoagulante.',
            ref: {
              f: 'cima-58994',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Acenocumarol es un derivado de la cumarina que actúa como antagonista de la vitamina K',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma intensiva: la hidroxilación en las posiciones 6 y 7 de ambos enantiómeros da los metabolitos mayoritarios, y la CYP2C9 es el catalizador principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma intensiva: la hidroxilación en las posiciones 6 y 7 de ambos enantiómeros da los metabolitos mayoritarios, y la CYP2C9 es el catalizador principal.',
          ref: { f: 'cima-58994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El acenocumarol se metaboliza intensivamente', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos hidroxilados, carbinol y amina',
          actividad: 'inactivo',
          nota: 'No contribuyen a la actividad anticoagulante en el hombre, aunque son activos en modelos animales.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Ninguno de estos metabolitos contribuye a la actividad anticoagulante',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Solo el 0,12-0,18 % de la dosis se excreta inalterado por la orina; en una semana se excreta como metabolitos y fármaco el 60 % de la dosis por la orina y el 29 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Solo el 0,12-0,18 % de la dosis se excreta inalterado por la orina; en una semana se excreta como metabolitos y fármaco el 60 % de la dosis por la orina y el 29 % por las heces.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Únicamente un 0,12-0,18% de la dosis se excreta inalterada en orina',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida plasmática es de 8-11 horas.',
          ref: {
            f: 'cima-58994',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El acenocumarol se elimina del plasma con una semivida plasmática de 8-11 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Disponibilidad sistémica mínima',
      valor: '≥ 60',
      unidad: '%',
      analito: 'acenocumarol',
      ref: { f: 'cima-58994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una disponibilidad sistémica mínima del 60%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración plasmática máxima',
      valor: '1-3',
      unidad: 'h',
      analito: 'acenocumarol',
      condiciones: 'dosis única de 10 mg',
      ref: {
        f: 'cima-58994',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanza al cabo de 1 a 3 horas después de una dosis única de 10 mg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '98,7',
      unidad: '%',
      analito: 'acenocumarol',
      ref: {
        f: 'cima-58994',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'presentando una unión a proteínas del 98,7%, principalmente a la albúmina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '8-11',
      unidad: 'h',
      analito: 'acenocumarol',
      ref: {
        f: 'cima-58994',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El acenocumarol se elimina del plasma con una semivida plasmática de 8-11 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina en una semana',
      valor: '60',
      unidad: '% de la dosis',
      analito: 'acenocumarol y metabolitos',
      ref: {
        f: 'cima-58994',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'representa el 60% de la dosis en orina y el 29% en heces',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces en una semana',
      valor: '29',
      unidad: '% de la dosis',
      analito: 'acenocumarol y metabolitos',
      ref: { f: 'cima-58994', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 60% de la dosis en orina y el 29% en heces', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-58994', '58994', 'SINTROM 1 mg COMPRIMIDOS (Merus Labs Luxco Ii S.À.R.L.)', '2025-06-13', '2026-11-15'),
    rengPubchem(54676537, 'acenocoumarol', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
