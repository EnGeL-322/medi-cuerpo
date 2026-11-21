import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rupatadina',
    nombre: 'Rupatadina',
    clase: 'Antihistamínico H1 de segunda generación',
    sinonimos: [ 'rupatadine', 'Rupafin' ],
    formula: 'C26H26ClN3',
    masaMolar: 416,
    smiles: 'CC1=CC(=CN=C1)CN2CCC(=C3C4=C(CCC5=C3N=CC=C5)C=C(C=C4)Cl)CC2',
    inchikey: 'WUZYKBABMWJHDL-UHFFFAOYSA-N',
    cid: 133017,
    iupac: '13-chloro-2-[1-[(5-methyl-3-pyridinyl)methyl]piperidin-4-ylidene]-4-azatricyclo[9.4.0.03,8]pentadeca-1(11),3(8),4,6,12,14-hexaene',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'rupatadina-oral',
      producto: 'RUPAFIN 10 mg COMPRIMIDOS',
      titular: 'Laboratorios Ern S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '10 mg de rupatadina (como fumarato) por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Fumarato de rupatadina',
        ref: { f: 'cima-64053', sec: '2 · Composición cualitativa y cuantitativa', cita: '10 mg de rupatadina (como fumarato)', codigo: 'FT 2' }
      },
      excipientes: [
        'Almidón de maíz pregelatinizado',
        'Celulosa microcristalina',
        'Óxido de hierro rojo (E-172)',
        'Óxido de hierro amarillo (E-172)',
        'Lactosa monohidrato',
        'Estearato de magnesio'
      ],
      usos: {
        t: 'Tratamiento sintomático de la rinitis alérgica y de la urticaria en adultos y adolescentes mayores de 12 años.',
        ref: {
          f: 'cima-64053',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento sintomático de la rinitis alérgica y la urticaria en adultos y adolescentes',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-64053',
      advertencias: [
        {
          titulo: 'Inhibidores potentes de la CYP3A4',
          texto: 'Debe evitarse la combinación con inhibidores potentes de la CYP3A4.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-64053',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Debe evitarse la combinación de rupatadina con inhibidores potentes del CYP3A4',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Zumo de pomelo',
          texto: 'No se recomienda tomarla con zumo de pomelo.',
          organos: [ 'estomago' ],
          ref: {
            f: 'cima-64053',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'No se recomienda la administración de rupatadina con zumo de pomelo',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en estudios controlados: somnolencia (9,4 %), cefalea (6,9 %), fatiga (3,1 %), astenia (1,5 %), boca seca (1,2 %) y mareo (1,03 %).',
          'FT 4.8',
          'Las reacciones adversas más frecuentes en los estudios clínicos controlados fueron somnolencia (9,4%), cefalea (6,9%) , fatiga (3,1%), astenia (1,5%), boca seca (1,2%) y mareo (1,03%)'
        ],
        [
          'La mayoría fueron de leves a moderadas y normalmente no fue necesario interrumpir el tratamiento.',
          'FT 4.8',
          'fueron de leves a moderadas y normalmente no fue necesaria la interrupción del tratamiento'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg de rupatadina (como fumarato) por comprimido, según la ficha técnica; el activo va como fumarato de rupatadina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la rinitis alérgica y de la urticaria en adultos y adolescentes mayores de 12 años.',
    actua: 'Es un antihistamínico de segunda generación, antagonista de la histamina de acción prolongada, con actividad selectiva por el receptor H1 periférico.',
    recorrido: 'Se absorbe rápidamente tras la administración oral, con un tmax de aproximadamente 0,75 horas; la biodisponibilidad absoluta no está disponible porque nunca se administró por vía intravenosa a humanos. Tras una dosis marcada, el 34,6 % de la radiactividad se recuperó en la orina y el 60,9 % en las heces en 7 días; el fármaco inalterado fue insignificante.'
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
          ref: { f: 'cima-64053', sec: '3 · Forma farmacéutica', cita: 'Comprimidos redondos de color salmón claro', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápidamente tras la administración oral, con un tmax de aproximadamente 0,75 horas; la biodisponibilidad absoluta no está disponible porque nunca se administró por vía intravenosa a humanos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápidamente tras la administración oral, con un tmax de aproximadamente 0,75 horas; la biodisponibilidad absoluta no está disponible porque nunca se administró por vía intravenosa a humanos.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Rupatadina se absorbe rápidamente después de su administración oral, con un t max de aproximadamente 0,75 horas después de la ingesta',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La ingesta de alimento aumentó la exposición sistémica (AUC) en torno a un 23 % y retrasó 1 hora el tmax; la Cmax no se afectó.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La ingesta de alimento aumentó la exposición sistémica (AUC) a rupatadina en torno a un 23%',
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
      ocurre: 'La unión de rupatadina a las proteínas del plasma es del 98,5-99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión de rupatadina a las proteínas del plasma es del 98,5-99 %.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión de rupatadina a proteínas plasmáticas es del 98,5-99%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor H1 de la histamina',
        efecto: 'Es un antihistamínico de segunda generación, antagonista de la histamina de acción prolongada, con actividad selectiva por el receptor H1 periférico.',
        lugar: [ 'vias-respiratorias', 'piel' ],
        datos: [
          {
            t: 'Es un antihistamínico de segunda generación, antagonista de la histamina de acción prolongada, con actividad selectiva por el receptor H1 periférico.',
            ref: {
              f: 'cima-64053',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Rupatadina es un antihistamínico de segunda generación, antagonista de la histamina de acción prolongada, con una actividad selectiva por el receptor H 1 periférico',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un importante metabolismo presistémico tras la administración oral y es metabolizada principalmente por el citocromo P450 CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un importante metabolismo presistémico tras la administración oral y es metabolizada principalmente por el citocromo P450 CYP3A4.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Rupatadina se somete a un importante metabolismo presistémico, cuando se administra por vía oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Los estudios in vitro con microsomas hepáticos humanos indican que se metaboliza principalmente por el CYP3A4.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'rupatadina es metabolizada principalmente por el citocromo P450 (CYP3A4)',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desloratadina y derivados hidroxilados',
          actividad: 'activo',
          nota: 'Metabolitos activos; representan el 27 % y el 48 % de la exposición sistémica de las sustancias activas.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'los metabolitos activos desloratadina y otros derivados hidroxilados respectivamente representan el 27% y 48% del total de la exposición sistémica',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 34,6 % de la radiactividad se recuperó en la orina y el 60,9 % en las heces en 7 días; el fármaco inalterado fue insignificante.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 34,6 % de la radiactividad se recuperó en la orina y el 60,9 % en las heces en 7 días; el fármaco inalterado fue insignificante.',
          ref: {
            f: 'cima-64053',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'el 34,6% de la radiactividad administrada se recuperó en la orina y el 60,9% en heces recogidas durante 7 días',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La concentración plasmática siguió un descenso biexponencial con una semivida de eliminación de 5,9 horas.',
          ref: { f: 'cima-64053', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una semivida de eliminación de 5,9 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '0,75 (aprox.)',
      unidad: 'h',
      analito: 'rupatadina',
      ref: {
        f: 'cima-64053',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'con un t max de aproximadamente 0,75 horas después de la ingesta',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98,5-99',
      unidad: '%',
      analito: 'rupatadina',
      ref: {
        f: 'cima-64053',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión de rupatadina a proteínas plasmáticas es del 98,5-99%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '5,9',
      unidad: 'h',
      analito: 'rupatadina',
      ref: { f: 'cima-64053', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una semivida de eliminación de 5,9 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '34,6',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis de 14C-rupatadina',
      ref: {
        f: 'cima-64053',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'el 34,6% de la radiactividad administrada se recuperó en la orina',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '60,9',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis de 14C-rupatadina',
      ref: { f: 'cima-64053', sec: '5.2 · Propiedades farmacocinéticas', cita: 'el 60,9% en heces recogidas durante 7 días', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-64053', '64053', 'RUPAFIN 10 mg COMPRIMIDOS (Laboratorios Ern S.A.)', '2021-03-19', '2026-11-15'),
    rengPubchem(133017, 'rupatadine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
