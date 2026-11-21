import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'aceclofenaco',
    nombre: 'Aceclofenaco',
    clase: 'Antiinflamatorio no esteroideo (derivado del ácido acético)',
    sinonimos: [ 'aceclofenac', 'Gerbin' ],
    formula: 'C16H13Cl2NO4',
    masaMolar: 354.2,
    smiles: 'C1=CC=C(C(=C1)CC(=O)OCC(=O)O)NC2=C(C=CC=C2Cl)Cl',
    inchikey: 'MNIPYSSQXLZQLJ-UHFFFAOYSA-N',
    cid: 71771,
    iupac: '2-[2-[2-(2,6-dichloroanilino)phenyl]acetyl]oxyacetic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'aceclofenaco-oral',
      producto: 'GERBIN 100 MG COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Laboratorios Almirall S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto',
      formaFuente: 'COMPRIMIDO RECUBIERTO',
      liberacion: 'no declarada',
      concentraciones: '100 mg de aceclofenaco por comprimido, según la ficha técnica',
      excipientes: [
        'Celulosa microcristalina',
        'Croscarmelosa de sodio',
        'Palmitoestearato de glicerol',
        'Povidona',
        'Hipromelosa',
        'Polioxilo 40 estearato',
        'Dióxido de titanio (E-171)'
      ],
      usos: {
        t: 'Tratamiento de procesos inflamatorios y dolorosos como lumbalgia, odontalgia, periartritis escapulohumeral y reumatismo extraarticular, y tratamiento crónico de la artrosis, la artritis reumatoide y la espondilitis anquilosante.',
        ref: {
          f: 'cima-59026',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'procesos inflamatorios y dolorosos tales como lumbalgia, odontalgia, periartritis escapulohumeral y reumatismo extraarticular',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-59026',
      advertencias: [
        {
          titulo: 'Uso con otros AINE',
          texto: 'Debe evitarse su administración con otros antiinflamatorios no esteroideos, incluidos los inhibidores selectivos de la ciclooxigenasa-2.',
          organos: [ 'estomago' ],
          ref: {
            f: 'cima-59026',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'También se debe evitar la administración concomitante de este medicamento con otros AINEs, incluyendo los inhibidores selectivos de la ciclo-oxigenasa-2 (Coxib)',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Antecedentes gastrointestinales',
          texto: 'Se requiere vigilancia en pacientes con antecedentes que sugieran úlcera, hemorragia o perforación gastrointestinal.',
          organos: [ 'estomago', 'intestino-delgado' ],
          ref: {
            f: 'cima-59026',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Antecedentes que sugieran úlcera gastro-intestinal, hemorragia o perforación',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes son de naturaleza gastrointestinal.',
          'FT 4.8',
          'Las reacciones adversas que se observan con mayor frecuencia son de naturaleza gastrointestinal'
        ],
        [
          'Pueden producirse úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, sobre todo en ancianos.',
          'FT 4.8',
          'Pueden producirse úlceras pépticas, perforación o hemorragia gastrointestinal, en algunos casos mortales, especialmente en los ancianos'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 100 mg de aceclofenaco por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de procesos inflamatorios y dolorosos como lumbalgia, odontalgia, periartritis escapulohumeral y reumatismo extraarticular, y tratamiento crónico de la artrosis, la artritis reumatoide y la espondilitis anquilosante.',
    actua: 'Es un agente no esteroideo con propiedades antiinflamatorias y analgésicas; su acción se basa en gran medida en la inhibición de la síntesis de prostaglandinas, como potente inhibidor de la ciclooxigenasa.',
    recorrido: 'Se absorbe rápida y completamente como fármaco inalterado; las concentraciones plasmáticas máximas se alcanzan aproximadamente entre 1,25 y 3,00 horas después de la ingestión. Aproximadamente dos tercios de la dosis se excretan por la orina, sobre todo como hidroximetabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-59026', sec: '3 · Forma farmacéutica', cita: 'Gerbin 100 mg comprimidos recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y completamente como fármaco inalterado; las concentraciones plasmáticas máximas se alcanzan aproximadamente entre 1,25 y 3,00 horas después de la ingestión.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente como fármaco inalterado; las concentraciones plasmáticas máximas se alcanzan aproximadamente entre 1,25 y 3,00 horas después de la ingestión.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras su administración oral, aceclofenaco se absorbe rápida y completamente en forma de fármaco inalterado',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente entre 1,25 y 3,00 horas después de la ingestión.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente de 1,25 a 3,00 horas después de la ingestión',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'articulaciones' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se fija en gran medida a las proteínas del plasma (más del 99 %) y su volumen de distribución es de unos 25 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se fija en gran medida a las proteínas del plasma (más del 99 %) y su volumen de distribución es de unos 25 litros.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aceclofenaco se fija en gran medida a las proteínas (> 99 %)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Penetra en el líquido sinovial, donde alcanza aproximadamente el 57 % de las concentraciones plasmáticas.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aceclofenaco penetra en el líquido sinovial, donde sus concentraciones alcanzan aproximadamente el 57 % de las del plasma',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución es de aproximadamente 25 litros.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución es de aproximadamente 25 l',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa',
        efecto: 'Es un agente no esteroideo con propiedades antiinflamatorias y analgésicas; su acción se basa en gran medida en la inhibición de la síntesis de prostaglandinas, como potente inhibidor de la ciclooxigenasa.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Es un agente no esteroideo con propiedades antiinflamatorias y analgésicas; su acción se basa en gran medida en la inhibición de la síntesis de prostaglandinas, como potente inhibidor de la ciclooxigenasa.',
            ref: {
              f: 'cima-59026',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El modo de acción de aceclofenaco se basa en gran medida en la inhibición de la síntesis de prostaglandinas',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Circula principalmente como fármaco inalterado; el principal metabolito detectado en el plasma es el 4-hidroxiaceclofenaco.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Circula principalmente como fármaco inalterado; el principal metabolito detectado en el plasma es el 4-hidroxiaceclofenaco.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito detectado en el plasma es 4-hidroxiaceclofenaco',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4-hidroxiaceclofenaco',
          actividad: 'desconocida',
          nota: 'Principal metabolito detectado en el plasma; la ficha no precisa su actividad.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El principal metabolito detectado en el plasma es 4-hidroxiaceclofenaco',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Aproximadamente dos tercios de la dosis se excretan por la orina, sobre todo como hidroximetabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Aproximadamente dos tercios de la dosis se excretan por la orina, sobre todo como hidroximetabolitos.',
          ref: {
            f: 'cima-59026',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Aproximadamente las dos terceras partes de la dosis administrada se excretan por la orina, fundamentalmente en forma de hidroximetabolitos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media plasmática es de alrededor de 4 horas.',
          ref: { f: 'cima-59026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media plasmática es de alrededor de 4 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,25-3,00',
      unidad: 'h',
      analito: 'aceclofenaco',
      ref: {
        f: 'cima-59026',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Las concentraciones plasmáticas máximas se alcanzan aproximadamente de 1,25 a 3,00 horas después de la ingestión',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99',
      unidad: '%',
      analito: 'aceclofenaco',
      ref: {
        f: 'cima-59026',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Aceclofenaco se fija en gran medida a las proteínas (> 99 %)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '25 (aprox.)',
      unidad: 'L',
      analito: 'aceclofenaco',
      ref: { f: 'cima-59026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución es de aproximadamente 25 l', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media plasmática',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'aceclofenaco',
      ref: { f: 'cima-59026', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La vida media plasmática es de alrededor de 4 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-59026', '59026', 'GERBIN 100 MG COMPRIMIDOS RECUBIERTOS CON PELICULA (Laboratorios Almirall S.L.)', '2023-02-14', '2026-11-15'),
    rengPubchem(71771, 'aceclofenac', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
