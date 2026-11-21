import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lercanidipino',
    nombre: 'Lercanidipino',
    clase: 'Bloqueante de canales de calcio (dihidropiridina)',
    sinonimos: [ 'lercanidipine', 'Lerzam' ],
    formula: 'C36H41N3O6',
    masaMolar: 611.7,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OC(C)(C)CN(C)CCC(C2=CC=CC=C2)C3=CC=CC=C3)C4=CC(=CC=C4)[N+](=O)[O-])C(=O)OC',
    inchikey: 'ZDXUKAKRHYTAKV-UHFFFAOYSA-N',
    cid: 65866,
    iupac: '5-O-[1-[3,3-diphenylpropyl(methyl)amino]-2-methylpropan-2-yl] 3-O-methyl 2,6-dimethyl-4-(3-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'lercanidipino-oral',
      producto: 'LERZAM 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Casen Recordati S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '10 mg de lercanidipino por comprimido, según la ficha técnica',
      excipientes: [
        'Lactosa monohidrato',
        'Celulosa microcristalina',
        'Glicolato sódico de almidón',
        'Povidona K30',
        'Estearato de magnesio',
        'Hipromelosa',
        'Talco',
        'Dióxido de titanio (E171)',
        'Macrogol 6000',
        'Óxido férrico (E172)'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión esencial leve o moderada en adultos.',
        ref: {
          f: 'cima-61929',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'para el tratamiento de la hipertensión esencial leve o moderada',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-61929',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática o renal grave',
          texto: 'Está contraindicado en pacientes con insuficiencia hepática grave o insuficiencia renal grave.',
          organos: [ 'higado', 'rinones' ],
          ref: {
            f: 'cima-61929',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Lercanidipino está contraindicado en pacientes con insuficiencia hepática grave o insuficiencia renal grave',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Angina de pecho',
          texto: 'Algunas dihidropiridinas pueden, raramente, producir dolor precordial o angina de pecho.',
          organos: [ 'corazon' ],
          ref: {
            f: 'cima-61929',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Algunas dihidropiridinas pueden, raramente, producir dolor precordial o angina de pecho',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: edema periférico, cefalea, rubefacción, taquicardia y palpitaciones.',
          'FT 4.8',
          'e dema periférico, cefalea, rubefacción, taquicardia y palpitaciones'
        ],
        [
          'La seguridad se evaluó en ensayos con placebo y en ensayos a largo plazo con 3.676 pacientes hipertensos tratados.',
          'FT 4.8',
          'en un total de 3676 pacientes hipertensos que recibieron lercanidipino'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg de lercanidipino por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión esencial leve o moderada en adultos.',
    actua: 'Es un antagonista del calcio de las dihidropiridinas: inhibe la entrada de calcio al músculo liso y cardíaco, y su acción antihipertensiva se debe a un efecto relajante directo sobre el músculo liso vascular.',
    recorrido: 'Se absorbe por completo tras la administración oral y el pico plasmático llega aproximadamente 1,5-3 horas después de la toma; por el intenso metabolismo de primer paso la biodisponibilidad absoluta es de alrededor del 10 % tras comer. La eliminación es esencialmente por biotransformación: alrededor del 50 % de la dosis se excreta por la orina, sobre todo como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-61929', sec: '3 · Forma farmacéutica', cita: 'Comprimidos de 10 mg recubiertos con película', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe por completo tras la administración oral y el pico plasmático llega aproximadamente 1,5-3 horas después de la toma; por el intenso metabolismo de primer paso la biodisponibilidad absoluta es de alrededor del 10 % tras comer.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo tras la administración oral y el pico plasmático llega aproximadamente 1,5-3 horas después de la toma; por el intenso metabolismo de primer paso la biodisponibilidad absoluta es de alrededor del 10 % tras comer.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Lercanidipino se absorbe completamente después de la administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La biodisponibilidad oral aumenta cuatro veces si se ingiere hasta dos horas después de una comida rica en grasas.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La disponibilidad oral de lercanidipino aumenta cuatro veces cuando lercanidipino se ingiere hasta dos horas después de una comida rica en grasas',
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
      ocurre: 'La distribución desde el plasma a los tejidos y órganos es rápida y amplia, y la unión a proteínas del plasma supera el 98 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La distribución desde el plasma a los tejidos y órganos es rápida y amplia, y la unión a proteínas del plasma supera el 98 %.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El grado de fijación a las proteínas plasmáticas de lercanidipino excede el 98%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio',
        efecto: 'Es un antagonista del calcio de las dihidropiridinas: inhibe la entrada de calcio al músculo liso y cardíaco, y su acción antihipertensiva se debe a un efecto relajante directo sobre el músculo liso vascular.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Es un antagonista del calcio de las dihidropiridinas: inhibe la entrada de calcio al músculo liso y cardíaco, y su acción antihipertensiva se debe a un efecto relajante directo sobre el músculo liso vascular.',
            ref: {
              f: 'cima-61929',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'inhibe el flujo de entrada del calcio a través de la membrana al músculo liso y cardíaco',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza extensamente mediante CYP3A4 y no se encontró fármaco en la orina ni en las heces.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza extensamente mediante CYP3A4 y no se encontró fármaco en la orina ni en las heces.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Lercanidipino se metaboliza extensamente mediante CYP3A4',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos de lercanidipino',
          actividad: 'inactivo',
          nota: 'Predominantemente inactivos.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Lercanidipino se transforma predominantemente en metabolitos inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es esencialmente por biotransformación: alrededor del 50 % de la dosis se excreta por la orina, sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es esencialmente por biotransformación: alrededor del 50 % de la dosis se excreta por la orina, sobre todo como metabolitos.',
          ref: {
            f: 'cima-61929',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La eliminación se produce esencialmente por biotransformación',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La vida media terminal es de 8 a 10 horas.',
          ref: { f: 'cima-61929', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la vida media terminal es de 8 a 10 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,5-3 (aprox.)',
      unidad: 'h',
      analito: 'lercanidipino',
      ref: {
        f: 'cima-61929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'se producen aproximadamente 1,5-3 horas después de la administración de la dosis',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta tras comer',
      valor: '10 (aprox.)',
      unidad: '%',
      analito: 'lercanidipino',
      condiciones: 'tras comer',
      ref: {
        f: 'cima-61929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la biodisponibilidad absoluta de lercanidipino administrado oralmente a pacientes que hayan comido es de alrededor de un 10%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 98',
      unidad: '%',
      analito: 'lercanidipino',
      ref: {
        f: 'cima-61929',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El grado de fijación a las proteínas plasmáticas de lercanidipino excede el 98%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Vida media terminal',
      valor: '8-10',
      unidad: 'h',
      analito: 'lercanidipino',
      ref: { f: 'cima-61929', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la vida media terminal es de 8 a 10 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-61929', '61929', 'LERZAM 10 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Casen Recordati S.L.)', '2021-12-15', '2026-11-15'),
    rengPubchem(65866, 'lercanidipine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
