import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bisacodilo',
    nombre: 'Bisacodilo',
    clase: 'Laxante estimulante de contacto',
    sinonimos: [ 'bisacodyl', 'Dulcolax' ],
    formula: 'C22H19NO4',
    masaMolar: 361.4,
    smiles: 'CC(=O)OC1=CC=C(C=C1)C(C2=CC=C(C=C2)OC(=O)C)C3=CC=CC=N3',
    inchikey: 'KHOITXIGCFIULA-UHFFFAOYSA-N',
    cid: 2391,
    iupac: '[4-[(4-acetyloxyphenyl)-pyridin-2-ylmethyl]phenyl] acetate',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'bisacodilo-oral',
      producto: 'DULCOLAX BISACODILO 5 MG COMPRIMIDOS GASTRORRESISTENTES',
      titular: 'Opella Healthcare Spain S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'retardada',
      concentraciones: '5 mg de bisacodilo por comprimido',
      excipientes: [
        'Núcleo: lactosa',
        'almidón de maíz',
        'glicerol (E-422)',
        'estearato de magnesio',
        'recubrimiento: estearato de magnesio',
        'sacarosa',
        'talco',
        'goma arábiga',
        'dióxido de titanio (E-171)',
        'copolímero de ácido metacrílico y metacrilato de metilo (1:1)',
        'copolímero de ácido metacrílico y metacrilato de metilo (1:2)',
        'aceite de ricino',
        'macrogol 6000',
        'óxido de hierro amarillo (E-172)',
        'cera blanca',
        'cera carnauba',
        'goma laca'
      ],
      usos: {
        t: 'Alivio del estreñimiento ocasional en adultos, adolescentes y niños mayores de 10 años.',
        ref: { f: 'cima-28410', sec: '4.1 · Indicaciones terapéuticas', cita: 'Alivio sintomático del estreñimiento ocasional', codigo: 'FT 4.1' }
      },
      fuente: 'cima-28410',
      advertencias: [
        {
          titulo: 'Uso prolongado',
          texto: 'No debe tomarse a diario de forma continuada ni durante periodos largos sin investigar la causa del estreñimiento.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'cima-28410',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'no debe tomarse de forma continuada a diario o durante períodos prolongados sin investigar la causa del estreñimiento',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Dolor abdominal y diarrea: las notificadas con más frecuencia.',
          'FT 4.8',
          'Las notificadas con más frecuencia son: dolor abdominal y diarrea'
        ],
        [
          'Dolor o calambres abdominales, que pueden acompañarse de náuseas o vómitos; también heces con sangre, flatulencia y colitis, incluida la isquémica.',
          'FT 4.8',
          'dolor o calambres abdominales (los cuales pueden asociarse con nauseas y/o vómitos)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 5 mg de bisacodilo por comprimido. Los excipientes no son el principio activo.',
    usos: 'Alivio del estreñimiento ocasional en adultos, adolescentes y niños mayores de 10 años.',
    actua: 'Actúa localmente en el colon: estimula sus movimientos (peristaltismo) y, ya transformado, reduce la absorción de agua y aumenta la secreción de agua y electrolitos, lo que ablanda las heces y aumenta su volumen.',
    recorrido: 'Las esterasas de la mucosa intestinal lo hidrolizan rápido a su forma activa, el BHPM; solo se absorben pequeñas cantidades. Con estos comprimidos, el BHPM alcanza su máximo en la sangre entre 4 y 10 horas después. Tras los comprimidos gastrorresistentes, de media el 51,8 % de la dosis sale por las heces como BHPM libre y el 10,5 % por la orina como glucurónido de BHPM.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'intestino-grueso' ],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'El comprimido gastrorresistente se traga y atraviesa el estómago sin deshacerse.',
      ocurre: 'El comprimido gastrorresistente resiste el jugo del estómago y del intestino delgado, de modo que el fármaco se libera sobre todo en el colon.',
      sigue: 'En el colon, el bisacodilo liberado se transforma en su forma activa.',
      datos: [
        {
          t: 'El comprimido gastrorresistente resiste el jugo del estómago y del intestino delgado, de modo que el fármaco se libera sobre todo en el colon.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la liberación del fármaco principalmente se produce en el colon',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-grueso' ],
      organosGenerales: [],
      llega: 'El bisacodilo liberado llega a la mucosa del colon.',
      ocurre: 'Las esterasas de la mucosa intestinal lo hidrolizan rápido a su forma activa, el BHPM; solo se absorben pequeñas cantidades. Con estos comprimidos, el BHPM alcanza su máximo en la sangre entre 4 y 10 horas después.',
      sigue: 'Casi todo sigue dentro del tubo digestivo, donde actúa.',
      datos: [
        {
          t: 'Las esterasas de la mucosa intestinal lo hidrolizan rápido a su forma activa, el BHPM; solo se absorben pequeñas cantidades. Con estos comprimidos, el BHPM alcanza su máximo en la sangre entre 4 y 10 horas después.',
          ref: { f: 'cima-28410', sec: '5.2 · Propiedades farmacocinéticas', cita: 'sólo pequeñas cantidades de fármaco son absorbidas', codigo: 'FT 5.2' }
        },
        {
          t: 'Se hidroliza rápidamente a BHPM, sobre todo por las esterasas de la mucosa intestinal.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'principalmente por las esterasas de la mucosa entérica',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'intestino-grueso' ],
      llega: 'El fármaco sigue en el tubo digestivo; solo una parte pequeña llega a la sangre.',
      ocurre: 'El BHPM actúa en la parte baja del intestino; su efecto laxante no depende de su concentración en la sangre.',
      sigue: 'El BHPM sigue en el colon, donde actúa.',
      datos: [
        {
          t: 'El BHPM actúa en la parte baja del intestino; su efecto laxante no depende de su concentración en la sangre.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El BHPM actúa localmente en la parte baja del intestino',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Mucosa y plexos nerviosos del colon',
        efecto: 'Actúa localmente en el colon: estimula sus movimientos (peristaltismo) y, ya transformado, reduce la absorción de agua y aumenta la secreción de agua y electrolitos, lo que ablanda las heces y aumenta su volumen.',
        lugar: [ 'intestino-grueso' ],
        datos: [
          {
            t: 'Actúa localmente en el colon: estimula sus movimientos (peristaltismo) y, ya transformado, reduce la absorción de agua y aumenta la secreción de agua y electrolitos, lo que ablanda las heces y aumenta su volumen.',
            ref: {
              f: 'cima-28410',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Actúa localmente estimulando el peristaltismo del colon',
              codigo: 'FT 5.1'
            }
          },
          {
            t: 'Ya metabolizado, inhibe la absorción de agua y aumenta la secreción de agua y electrolitos.',
            ref: {
              f: 'cima-28410',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Una vez metabolizado, inhibe la absorción de agua e incrementa la secreción de agua y electrolitos',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-grueso', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo poco que se absorbe se conjuga casi por completo en la pared intestinal y en el hígado y forma glucurónido de BHPM, inactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo poco que se absorbe se conjuga casi por completo en la pared intestinal y en el hígado y forma glucurónido de BHPM, inactivo.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'son casi completamente conjugadas en la pared intestinal y el hígado para formar el BHPM glucurónido inactivo',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'BHPM (bis-(p-hidroxifenil)-piridil-2-metano)',
          actividad: 'activo',
          nota: 'Forma activa que actúa en el colon.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se hidroliza rápidamente al principio activo bis-(p-hidroxifenil)-piridil-2-metano (BHPM)',
            codigo: 'FT 5.2'
          }
        },
        {
          nombre: 'Glucurónido de BHPM',
          actividad: 'inactivo',
          ref: { f: 'cima-28410', sec: '5.2 · Propiedades farmacocinéticas', cita: 'para formar el BHPM glucurónido inactivo', codigo: 'FT 5.2' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras los comprimidos gastrorresistentes, de media el 51,8 % de la dosis sale por las heces como BHPM libre y el 10,5 % por la orina como glucurónido de BHPM.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras los comprimidos gastrorresistentes, de media el 51,8 % de la dosis sale por las heces como BHPM libre y el 10,5 % por la orina como glucurónido de BHPM.',
          ref: {
            f: 'cima-28410',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'una media del 51,8% de la dosis se recuperó en las heces como BHPM libre',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración plasmática máxima',
      valor: '4-10',
      unidad: 'h',
      analito: 'BHPM (forma activa)',
      condiciones: 'comprimidos gastrorresistentes',
      ref: {
        f: 'cima-28410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'concentraciones plasmáticas máximas de BHPM entre 4 – 10 horas después de la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Inicio del efecto laxante',
      valor: '6-12',
      unidad: 'h',
      condiciones: 'comprimidos gastrorresistentes',
      ref: {
        f: 'cima-28410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'el efecto laxante tiene lugar entre las 6 – 12 horas tras la administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '16,5 (aprox.)',
      unidad: 'h',
      analito: 'glucurónido de BHPM (metabolito inactivo)',
      ref: {
        f: 'cima-28410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación plasmática del BHPM glucurónido se estimó en aproximadamente 16,5 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces como BHPM libre',
      valor: '51,8 (media)',
      unidad: '% de la dosis',
      analito: 'BHPM',
      condiciones: 'comprimidos gastrorresistentes',
      ref: {
        f: 'cima-28410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'una media del 51,8% de la dosis se recuperó en las heces como BHPM libre',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina como glucurónido de BHPM',
      valor: '10,5 (media)',
      unidad: '% de la dosis',
      analito: 'glucurónido de BHPM',
      condiciones: 'comprimidos gastrorresistentes',
      ref: {
        f: 'cima-28410',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'una media del 10,5% de la dosis se recuperó en la orina como BHPM glucurónido',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-28410', '28410', 'DULCOLAX BISACODILO 5 MG COMPRIMIDOS GASTRORRESISTENTES (Opella Healthcare Spain S.L.)', '2026-01-21', '2026-11-12'),
    rengPubchem(2391, 'bisacodyl', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
