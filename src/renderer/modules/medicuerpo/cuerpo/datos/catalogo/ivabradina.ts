import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ivabradina',
    nombre: 'Ivabradina',
    clase: 'Inhibidor de la corriente If del nodo sinusal (reductor de la frecuencia cardíaca)',
    sinonimos: [ 'ivabradine' ],
    formula: 'C27H36N2O5',
    masaMolar: 468.6,
    smiles: 'CN(CCCN1CCC2=CC(=C(C=C2CC1=O)OC)OC)C[C@H]3CC4=CC(=C(C=C34)OC)OC',
    inchikey: 'ACRHBAYQBXXRTO-OAQYLSRUSA-N',
    cid: 132999,
    iupac: '3-[3-[[(7S)-3,4-dimethoxy-7-bicyclo[4.2.0]octa-1,3,5-trienyl]methyl-methylamino]propyl]-7,8-dimethoxy-2,5-dihydro-1H-3-benzazepin-4-one',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'ivabradina-oral',
      producto: 'IVABRADINA ALTER 5 MG COMPRIMIDOS EFG',
      titular: 'Laboratorios Alter S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '5 o 7,5 mg de ivabradina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Clorhidrato de ivabradina',
        ref: { f: 'cima-81265', sec: '2 · Composición cualitativa y cuantitativa', cita: 'ivabradina en forma de clorhidrato', codigo: 'FT 2' }
      },
      excipientes: [
        'Lactosa monohidrato',
        'Almidón de maíz pregelatinizado',
        'Maltodextrina de maíz',
        'Sílice coloidal anhidra (E551)',
        'Estearato de magnesio (E470b)'
      ],
      usos: {
        t: 'Tratamiento sintomático de la angina de pecho crónica estable en adultos con enfermedad coronaria, ritmo sinusal normal y frecuencia cardíaca elevada.',
        ref: {
          f: 'cima-81265',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Ivabradina está indicada en el tratamiento sintomático de la angina de pecho crónica estable en adultos con enfermedad coronaria con ritmo sinusal normal',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-81265',
      advertencias: [
        {
          titulo: 'Arritmias cardíacas',
          texto: 'No es eficaz en el tratamiento o la prevención de arritmias y no se recomienda en fibrilación auricular u otras arritmias que interfieren con el nodo sinusal.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-81265',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la ivabradina no se recomienda en pacientes con fibrilación auricular u otras arritmias cardíacas que interfieren con la función del nodo sinusal',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Solo tratamiento sintomático de la angina',
          texto: 'No ha demostrado efectos beneficiosos sobre eventos cardiovasculares como el infarto de miocardio o la muerte cardiovascular.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-81265',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'ivabradina no ha demostrado efectos beneficiosos sobre eventos cardiovasculares',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes, fenómenos luminosos (fosfenos) y bradicardia, dependen de la dosis y se relacionan con el efecto farmacológico.',
          'FT 4.8',
          'Las reacciones adversas más frecuentes con la ivabradina, fenómenos luminosos (fosfenos) y bradicardia, son dosis dependiente y están relacionadas con el efecto farmacológico del medicamento'
        ],
        [
          'La etiqueta incluye entre los trastornos del sistema nervioso las cefaleas, generalmente durante el primer mes de tratamiento.',
          'FT 4.8',
          'Cefaleas, generalmente durante el primer mes de tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 o 7,5 mg de ivabradina por comprimido, según la ficha técnica; el activo va como clorhidrato de ivabradina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la angina de pecho crónica estable en adultos con enfermedad coronaria, ritmo sinusal normal y frecuencia cardíaca elevada.',
    actua: 'Reduce de manera exclusiva la frecuencia cardíaca: inhibe de forma selectiva y específica la corriente If del marcapasos cardíaco, que controla la despolarización espontánea del nodo sinusal.',
    recorrido: 'Se absorbe de forma rápida y casi completa; el pico plasmático llega en aproximadamente 1 hora en ayunas y la biodisponibilidad absoluta es de alrededor del 40 % por el efecto de primer paso intestinal y hepático. Los metabolitos se excretan en un grado similar por la orina y las heces; la semivida principal en plasma es de 2 horas y la eficaz, de 11.'
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
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'En condiciones fisiológicas, la ivabradina se libera rápidamente de los comprimidos',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe de forma rápida y casi completa; el pico plasmático llega en aproximadamente 1 hora en ayunas y la biodisponibilidad absoluta es de alrededor del 40 % por el efecto de primer paso intestinal y hepático.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe de forma rápida y casi completa; el pico plasmático llega en aproximadamente 1 hora en ayunas y la biodisponibilidad absoluta es de alrededor del 40 % por el efecto de primer paso intestinal y hepático.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ivabradina se absorbe de forma rápida y casi completa tras su administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La comida retrasó la absorción en aproximadamente 1 hora y aumentó la exposición plasmática entre un 20 % y un 30 %.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimentos retrasó la absorción en aproximadamente 1 hora, y aumentó la exposición plasmática de un 20% a un 30%',
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
      ocurre: 'Se une en un 70 % a las proteínas del plasma y su volumen de distribución en el equilibrio se acerca a 100 litros en los pacientes.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 70 % a las proteínas del plasma y su volumen de distribución en el equilibrio se acerca a 100 litros en los pacientes.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ivabradina se une aproximadamente en un 70% a las proteínas plasmáticas',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Corriente If del nodo sinusal',
        efecto: 'Reduce de manera exclusiva la frecuencia cardíaca: inhibe de forma selectiva y específica la corriente If del marcapasos cardíaco, que controla la despolarización espontánea del nodo sinusal.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Reduce de manera exclusiva la frecuencia cardíaca: inhibe de forma selectiva y específica la corriente If del marcapasos cardíaco, que controla la despolarización espontánea del nodo sinusal.',
            ref: {
              f: 'cima-81265',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'actuando mediante la inhibición selectiva y específica de la corriente I f del marcapasos cardíaco',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en el hígado y en el intestino por oxidación exclusiva a través del citocromo P450 3A4 (CYP3A4).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado y en el intestino por oxidación exclusiva a través del citocromo P450 3A4 (CYP3A4).',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ivabradina se metaboliza ampliamente en el hígado y en el intestino a través de la oxidación exclusiva por el citocromo P450 3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado N-desmetilado (S 18982)',
          actividad: 'activo',
          nota: 'Metabolito activo; su exposición es de alrededor del 40 % de la del fármaco original.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito activo es el derivado N-desmetilado (S 18982), con una exposición de aproximadamente el 40% de la del fármaco precursor',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Los metabolitos se excretan en un grado similar por la orina y las heces; la semivida principal en plasma es de 2 horas y la eficaz, de 11.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Los metabolitos se excretan en un grado similar por la orina y las heces; la semivida principal en plasma es de 2 horas y la eficaz, de 11.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos se excretan en un grado similar por la orina y las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Aproximadamente el 4 % de una dosis oral se excreta inalterada en la orina.',
          ref: {
            f: 'cima-81265',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente el 4% de una dosis oral se excreta inalterada en la orina',
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
      analito: 'ivabradina',
      condiciones: 'en ayunas',
      ref: {
        f: 'cima-81265',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanzándose la concentración plasmática máxima en aproximadamente 1 hora cuando se administra en ayunas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'ivabradina',
      ref: {
        f: 'cima-81265',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta de los comprimidos recubiertos con película es de aproximadamente un 40%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '70 (aprox.)',
      unidad: '%',
      analito: 'ivabradina',
      ref: {
        f: 'cima-81265',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La ivabradina se une aproximadamente en un 70% a las proteínas plasmáticas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida eficaz',
      valor: '11',
      unidad: 'h',
      analito: 'ivabradina',
      ref: { f: 'cima-81265', sec: '5.2 · Propiedades farmacocinéticas', cita: 'una semivida eficaz de 11 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado inalterado por la orina',
      valor: '4 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ivabradina',
      ref: {
        f: 'cima-81265',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aproximadamente el 4% de una dosis oral se excreta inalterada en la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-81265', '81265', 'IVABRADINA ALTER 5 MG COMPRIMIDOS EFG (Laboratorios Alter S.A.)', '2021-01-29', '2026-11-15'),
    rengPubchem(132999, 'ivabradine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
