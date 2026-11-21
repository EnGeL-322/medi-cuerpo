import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'haloperidol',
    nombre: 'Haloperidol',
    clase: 'Antipsicótico (butirofenona)',
    sinonimos: [ 'haloperidol' ],
    formula: 'C21H23ClFNO2',
    masaMolar: 375.9,
    smiles: 'C1CN(CCC1(C2=CC=C(C=C2)Cl)O)CCCC(=O)C3=CC=C(C=C3)F',
    inchikey: 'LNEPOXFFQSENCJ-UHFFFAOYSA-N',
    cid: 3559,
    iupac: '4-[4-(4-chlorophenyl)-4-hydroxypiperidin-1-yl]-1-(4-fluorophenyl)butan-1-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'haloperidol-oral',
      producto: 'HALOPERIDOL ESTEVE 10 mg COMPRIMIDOS',
      titular: 'Esteve Pharmaceuticals S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '10 mg de haloperidol por comprimido',
      excipientes: [ 'Almidón de maíz', 'hidrógenofosfato de calcio dihidrato', 'estearato de calcio' ],
      usos: {
        t: 'Esquizofrenia y trastorno esquizoafectivo, síndrome confusional que no responde a otras medidas, episodios maníacos y agitación psicomotora aguda, entre otros usos en adultos.',
        ref: {
          f: 'cima-58343',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento de la esquizofrenia y el trastorno esquizoafectivo',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-58343',
      advertencias: [
        {
          titulo: 'Mortalidad en personas mayores con demencia',
          texto: 'Las personas mayores con psicosis por demencia tratadas con antipsicóticos tienen un mayor riesgo de muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-58343',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Los pacientes de edad avanzada con psicosis relacionada con la demencia y tratados con antipsicóticos tienen mayor riesgo de muerte',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en los estudios agrupados: trastorno extrapiramidal (34 %), insomnio (19 %), agitación (15 %), hipercinesia (13 %) y dolor de cabeza (12 %).',
          'FT 4.8',
          'trastorno extrapiramidal (34 %), insomnio (19 %), agitación (15 %)'
        ],
        [
          'También trastorno psicótico, depresión, aumento de peso y temblor (8-9 %).',
          'FT 4.8',
          'trastorno psicótico (9 %), depresión (8 %), aumento de peso (8 %), temblor (8 %)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg de haloperidol por comprimido. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia y trastorno esquizoafectivo, síndrome confusional que no responde a otras medidas, episodios maníacos y agitación psicomotora aguda, entre otros usos en adultos.',
    actua: 'Es un potente antagonista de los receptores de dopamina D2 del cerebro; al bloquear la vía mesolímbica reduce las ideas delirantes y las alucinaciones.',
    recorrido: 'La biodisponibilidad media del comprimido es del 60 % al 70 % y el pico en el plasma llega en 2 a 6 horas, con mucha variabilidad entre personas. Su semivida terminal media es de 24 horas (15 a 37) tras la vía intramuscular; el aclaramiento aparente tras la vía oral es de 0,9 a 1,5 L/h/kg.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco, circular y ranurado; la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco, circular y ranurado; la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-58343', sec: '3 · Forma farmacéutica', cita: 'Comprimido blanco, circular, biconvexo, ranurado', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad media del comprimido es del 60 % al 70 % y el pico en el plasma llega en 2 a 6 horas, con mucha variabilidad entre personas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad media del comprimido es del 60 % al 70 % y el pico en el plasma llega en 2 a 6 horas, con mucha variabilidad entre personas.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad media de haloperidol tras la administración del comprimido o la solución oral es del 60 % al 70 %',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El pico plasmático llega por lo general entre las 2 y las 6 horas.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones plasmáticas máximas se alcanzan por lo general entre las 2 y las 6 horas',
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
      ocurre: 'Del 88 % al 92 % circula unido a proteínas; se reparte rápido por tejidos y órganos y atraviesa con facilidad la barrera hematoencefálica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Del 88 % al 92 % circula unido a proteínas; se reparte rápido por tejidos y órganos y atraviesa con facilidad la barrera hematoencefálica.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El haloperidol atraviesa con facilidad la barrera hematoencefálica',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Unión a proteínas del 88 % al 92 % en adultos.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión media del haloperidol a proteínas plasmáticas en adultos es aproximadamente del 88 % al 92 %',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor de dopamina D2',
        efecto: 'Es un potente antagonista de los receptores de dopamina D2 del cerebro; al bloquear la vía mesolímbica reduce las ideas delirantes y las alucinaciones.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un potente antagonista de los receptores de dopamina D2 del cerebro; al bloquear la vía mesolímbica reduce las ideas delirantes y las alucinaciones.',
            ref: {
              f: 'cima-58343',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Es un potente antagonista de los receptores dopaminérgicos centrales de tipo 2',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado (glucuronidación, reducción cetónica, N-desalquilación oxidativa y metabolitos piridínicos), con participación de CYP3A4 y CYP2D6.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado (glucuronidación, reducción cetónica, N-desalquilación oxidativa y metabolitos piridínicos), con participación de CYP3A4 y CYP2D6.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El haloperidol se metaboliza principalmente en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Haloperidol reducido',
          actividad: 'desconocida',
          nota: 'La vía de reducción supone alrededor del 23 % de su biotransformación.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'no puede descartarse por completo que el metabolito reducido se transforme de nuevo en haloperidol',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Su semivida terminal media es de 24 horas (15 a 37) tras la vía intramuscular; el aclaramiento aparente tras la vía oral es de 0,9 a 1,5 L/h/kg.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Su semivida terminal media es de 24 horas (15 a 37) tras la vía intramuscular; el aclaramiento aparente tras la vía oral es de 0,9 a 1,5 L/h/kg.',
          ref: {
            f: 'cima-58343',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El aclaramiento aparente del haloperidol tras la administración extravascular oscila entre 0,9 y 1,5 l/h/kg',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad media',
      valor: '60-70',
      unidad: '%',
      analito: 'haloperidol',
      condiciones: 'comprimido o solución oral',
      ref: { f: 'cima-58343', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es del 60 % al 70 %', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '2-6',
      unidad: 'h',
      analito: 'haloperidol',
      ref: {
        f: 'cima-58343',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se alcanzan por lo general entre las 2 y las 6 horas posteriores a la administración oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '88-92',
      unidad: '%',
      analito: 'haloperidol',
      poblacion: 'adultos',
      ref: { f: 'cima-58343', sec: '5.2 · Propiedades farmacocinéticas', cita: 'es aproximadamente del 88 % al 92 %', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '24 (15-37)',
      unidad: 'h',
      analito: 'haloperidol',
      condiciones: 'tras la vía intramuscular',
      origen: 'otra-via',
      ref: {
        f: 'cima-58343',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación terminal del haloperidol es de 24 horas por término medio',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-58343', '58343', 'HALOPERIDOL ESTEVE 10 mg COMPRIMIDOS (Esteve Pharmaceuticals S.A.)', '2020-07-09', '2026-11-12'),
    rengPubchem(3559, 'haloperidol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
