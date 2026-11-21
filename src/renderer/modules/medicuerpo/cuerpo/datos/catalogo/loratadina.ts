import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'loratadina',
    nombre: 'Loratadina',
    clase: 'Antihistamínico H1 tricíclico',
    sinonimos: [ 'loratadine', 'Claritine' ],
    formula: 'C22H23ClN2O2',
    masaMolar: 382.9,
    smiles: 'CCOC(=O)N1CCC(=C2C3=C(CCC4=C2N=CC=C4)C=C(C=C3)Cl)CC1',
    inchikey: 'JCCNYMKQOSZNPW-UHFFFAOYSA-N',
    cid: 3957,
    iupac: 'ethyl 4-(13-chloro-4-azatricyclo[9.4.0.03,8]pentadeca-1(11),3(8),4,6,12,14-hexaen-2-ylidene)piperidine-1-carboxylate',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'loratadina-oral',
      producto: 'LORATADINA NORMON 10 mg COMPRIMIDOS EFG',
      titular: 'Laboratorios Normon S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '10 mg de loratadina por comprimido',
      excipientes: [ 'Almidón de maíz pregelatinizado', 'lactosa monohidrato', 'estearato de magnesio (E-470b)' ],
      usos: {
        t: 'Tratamiento sintomático de la rinitis alérgica y de la urticaria idiopática crónica.',
        ref: {
          f: 'cima-63784',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Loratadina Normon está indicada para el tratamiento sintomático de rinitis alérgica y urticaria idiopática crónica',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-63784',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática grave',
          texto: 'Hay que evaluar la administración en personas con insuficiencia hepática grave.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-63784',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se debe evaluar la administración de Loratadina Normon a pacientes con insuficiencia hepática grave',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Pruebas cutáneas',
          texto: 'Se debe interrumpir al menos 48 horas antes de cualquier prueba cutánea.',
          organos: [ 'piel' ],
          ref: {
            f: 'cima-63784',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La administración de Loratadina Normon se debe interrumpir al menos 48 horas antes de efectuar cualquier tipo de prueba cutánea',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes, por encima del placebo: somnolencia (1,2 %), cefalea (0,6 %), aumento del apetito (0,5 %) e insomnio (0,1 %).',
          'FT 4.8',
          'fueron somnolencia (1,2 %), cefalea (0,6 %), aumento del apetito (0,5 %) e insomnio (0,1 %)'
        ],
        [
          'A 10 mg al día, las reacciones adversas con loratadina fueron un 2 % más frecuentes que con placebo.',
          'FT 4.8',
          'se comunicaron reacciones adversas con loratadina en un 2 % de pacientes más que en los tratados con placebo'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg de loratadina por comprimido. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la rinitis alérgica y de la urticaria idiopática crónica.',
    actua: 'Es un antihistamínico tricíclico con actividad selectiva sobre los receptores H1 periféricos; a la dosis recomendada no tiene propiedades sedantes ni anticolinérgicas clínicamente significativas en la mayoría de la población.',
    recorrido: 'Se absorbe bien y rápidamente; la comida puede retrasar ligeramente la absorción sin influir en el efecto clínico. En 10 días, alrededor del 40 % de la dosis sale por la orina y el 42 % por las heces, sobre todo como metabolitos conjugados; menos del 1 % sale sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado; la ranura sirve para fraccionar y facilitar la deglución, no para dividir en dosis iguales.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado; la ranura sirve para fraccionar y facilitar la deglución, no para dividir en dosis iguales.',
          ref: {
            f: 'cima-63784',
            sec: '3 · Forma farmacéutica',
            cita: 'La ranura del comprimido sirve únicamente para fraccionar y facilitar la deglución',
            codigo: 'FT 3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien y rápidamente; la comida puede retrasar ligeramente la absorción sin influir en el efecto clínico.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y rápidamente; la comida puede retrasar ligeramente la absorción sin influir en el efecto clínico.',
          ref: { f: 'cima-63784', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La loratadina se absorbe bien y rápidamente', codigo: 'FT 5.2' }
        },
        {
          t: 'La ingestión de alimentos puede retrasar ligeramente la absorción de loratadina.',
          ref: {
            f: 'cima-63784',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingestión concomitante de alimentos puede retrasar ligeramente la absorción de loratadina',
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
      ocurre: 'La loratadina se une un 97-99 % a las proteínas del plasma y su metabolito activo desloratadina, un 73-76 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La loratadina se une un 97-99 % a las proteínas del plasma y su metabolito activo desloratadina, un 73-76 %.',
          ref: {
            f: 'cima-63784',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Loratadina se une intensamente a las proteínas plasmáticas (97% a 99%)',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina (periférico)',
        efecto: 'Es un antihistamínico tricíclico con actividad selectiva sobre los receptores H1 periféricos; a la dosis recomendada no tiene propiedades sedantes ni anticolinérgicas clínicamente significativas en la mayoría de la población.',
        lugar: [ 'vias-respiratorias', 'piel' ],
        datos: [
          {
            t: 'Es un antihistamínico tricíclico con actividad selectiva sobre los receptores H1 periféricos; a la dosis recomendada no tiene propiedades sedantes ni anticolinérgicas clínicamente significativas en la mayoría de la población.',
            ref: {
              f: 'cima-63784',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'antihistamínico tricíclico con actividad selectiva sobre los receptores H 1 periféricos',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un amplio metabolismo de primer paso, sobre todo por CYP3A4 y CYP2D6; el metabolito principal es la desloratadina, activa y responsable de gran parte del efecto clínico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un amplio metabolismo de primer paso, sobre todo por CYP3A4 y CYP2D6; el metabolito principal es la desloratadina, activa y responsable de gran parte del efecto clínico.',
          ref: {
            f: 'cima-63784',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'experimenta un amplio metabolismo de primer paso, principalmente por medio de CYP3A4 y CYP2D6',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desloratadina',
          actividad: 'activo',
          ref: {
            f: 'cima-63784',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito principal desloratadina, es farmacológicamente activo y responsable de gran parte del efecto clínico',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 10 días, alrededor del 40 % de la dosis sale por la orina y el 42 % por las heces, sobre todo como metabolitos conjugados; menos del 1 % sale sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 10 días, alrededor del 40 % de la dosis sale por la orina y el 42 % por las heces, sobre todo como metabolitos conjugados; menos del 1 % sale sin cambios.',
          ref: {
            f: 'cima-63784',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 40 % de la dosis se excreta en la orina y el 42 % en las heces durante un periodo de 10 días',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo de loratadina',
      valor: '1-1,5',
      unidad: 'h',
      analito: 'loratadina',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La loratadina y la desloratadina alcanzan las concentraciones plasmáticas máximas (Tmax) entre 1-1,5 horas y 1,5-3,7 horas después de su administración, respectivamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo de desloratadina',
      valor: '1,5-3,7',
      unidad: 'h',
      analito: 'desloratadina (metabolito activo)',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La loratadina y la desloratadina alcanzan las concentraciones plasmáticas máximas (Tmax) entre 1-1,5 horas y 1,5-3,7 horas después de su administración, respectivamente',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (loratadina)',
      valor: '97-99',
      unidad: '%',
      analito: 'loratadina',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Loratadina se une intensamente a las proteínas plasmáticas (97% a 99%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma (desloratadina)',
      valor: '73-76',
      unidad: '%',
      analito: 'desloratadina (metabolito activo)',
      ref: { f: 'cima-63784', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se une de forma moderada (73% a 76%)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media de loratadina',
      valor: '8,4 (3-20)',
      unidad: 'h',
      analito: 'loratadina',
      poblacion: 'adultos sanos',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'fueron de 8,4 horas (intervalo = 3 a 20 horas) para la loratadina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media de desloratadina',
      valor: '28 (8,8-92)',
      unidad: 'h',
      analito: 'desloratadina (metabolito activo)',
      poblacion: 'adultos sanos',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'de 28 horas (intervalo = 8,8 a 92 horas) para el metabolito activo principal',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 10 días',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'loratadina y metabolitos',
      condiciones: '10 días',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 40 % de la dosis se excreta en la orina y el 42 % en las heces durante un periodo de 10 días',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces en 10 días',
      valor: '42 (aprox.)',
      unidad: '% de la dosis',
      analito: 'loratadina y metabolitos',
      condiciones: '10 días',
      ref: {
        f: 'cima-63784',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 40 % de la dosis se excreta en la orina y el 42 % en las heces durante un periodo de 10 días',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-63784', '63784', 'LORATADINA NORMON 10 mg COMPRIMIDOS EFG (Laboratorios Normon S.A.)', '2026-04-09', '2026-11-12'),
    rengPubchem(3957, 'loratadine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
