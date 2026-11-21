import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dexketoprofeno',
    nombre: 'Dexketoprofeno',
    clase: 'Antiinflamatorio no esteroideo (derivado del ácido propiónico)',
    sinonimos: [ 'dexketoprofen', 'Enantyum' ],
    formula: 'C16H14O3',
    masaMolar: 254.28,
    smiles: 'C[C@@H](C1=CC(=CC=C1)C(=O)C2=CC=CC=C2)C(=O)O',
    inchikey: 'DKYWVDODHFEZIM-NSHDSACASA-N',
    cid: 667550,
    iupac: '(2S)-2-(3-benzoylphenyl)propanoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'dexketoprofeno-oral',
      producto: 'ENANTYUM 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Laboratorios Menarini S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '25 mg de dexketoprofeno (como dexketoprofeno trometamol) por comprimido',
      sal: {
        nombre: 'Dexketoprofeno trometamol',
        ref: { f: 'cima-60928', sec: '2 · Composición cualitativa y cuantitativa', cita: 'dexketoprofeno trometamol', codigo: 'FT 2' }
      },
      excipientes: [
        'Almidón de maíz',
        'celulosa microcristalina',
        'carboximetilalmidón sódico',
        'diestearato de glicerol',
        'hipromelosa',
        'dióxido de titanio',
        'macrogol 6000',
        'propilenglicol'
      ],
      usos: {
        t: 'Dolor de intensidad leve o moderada, como dolor musculoesquelético, dismenorrea u odontalgia.',
        ref: {
          f: 'cima-60928',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento sintomático del dolor de intensidad leve o moderada, tal como dolor musculoesquelético, dismenorrea, odontalgia',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-60928',
      advertencias: [
        {
          titulo: 'Seguridad gastrointestinal',
          texto: 'Se han descrito hemorragias, úlceras o perforaciones gastrointestinales, que pueden ser mortales, con todos los AINE en cualquier momento del tratamiento.',
          organos: [ 'estomago', 'intestino-delgado' ],
          ref: {
            f: 'cima-60928',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han descrito hemorragias gastrointestinales, úlceras o perforaciones, que pueden ser mortales, con todos los AINE',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [ 'Entre las descritas: cefalea, mareo y somnolencia (poco frecuentes).', 'FT 4.8', 'Cefalea, mareo, somnolencia Parestesia, síncope' ],
        [
          'Raras: edema de laringe y reacción anafiláctica, incluido el shock anafiláctico.',
          'FT 4.8',
          'Edema de laringe Reacción anafiláctica, incluyendo shock anafiláctico'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg de dexketoprofeno (como dexketoprofeno trometamol) por comprimido. Los excipientes no son el principio activo.',
    usos: 'Dolor de intensidad leve o moderada, como dolor musculoesquelético, dismenorrea u odontalgia.',
    actua: 'Como otros antiinflamatorios no esteroideos, disminuye la síntesis de prostaglandinas al inhibir la vía de la ciclooxigenasa.',
    recorrido: 'El máximo llega a los 30 minutos (rango 15-60 min). Con alimentos el AUC no cambia, pero baja la Cmax y se retrasa la absorción. Tras la glucuronoconjugación se elimina por el riñón; la semivida de eliminación es de 1,65 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película, ranurado, blanco y redondo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película, ranurado, blanco y redondo.',
          ref: {
            f: 'cima-60928',
            sec: '3 · Forma farmacéutica',
            cita: 'Comprimidos recubiertos con película ranurados, blancos, redondos, con lados convexos',
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
      ocurre: 'El máximo llega a los 30 minutos (rango 15-60 min). Con alimentos el AUC no cambia, pero baja la Cmax y se retrasa la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega a los 30 minutos (rango 15-60 min). Con alimentos el AUC no cambia, pero baja la Cmax y se retrasa la absorción.',
          ref: {
            f: 'cima-60928',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la Cmax se alcanza a los 30 minutos (rango 15 a 60 min)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Con alimentos el AUC no se modifica, la Cmax se reduce y se retrasa la absorción.',
          ref: {
            f: 'cima-60928',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Cuando se administra conjuntamente con alimentos, el AUC no se modifica',
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
      ocurre: 'Tiene una elevada unión a proteínas del plasma (99 %) y un volumen de distribución medio inferior a 0,25 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tiene una elevada unión a proteínas del plasma (99 %) y un volumen de distribución medio inferior a 0,25 L/kg.',
          ref: {
            f: 'cima-60928',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'elevada unión a proteínas plasmáticas (99 %), su volumen de distribución tiene un valor medio inferior a 0,25 l/kg',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa',
        efecto: 'Como otros antiinflamatorios no esteroideos, disminuye la síntesis de prostaglandinas al inhibir la vía de la ciclooxigenasa.',
        lugar: [ 'musculos', 'articulaciones' ],
        datos: [
          {
            t: 'Como otros antiinflamatorios no esteroideos, disminuye la síntesis de prostaglandinas al inhibir la vía de la ciclooxigenasa.',
            ref: {
              f: 'cima-60928',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El mecanismo de acción de los antiinflamatorios no esteroideos se relaciona con la disminución de la síntesis de prostaglandinas mediante la inhibición de la vía de la ciclooxigenasa',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La principal vía es la glucuronoconjugación; en la orina solo aparece el enantiómero S(+), no hay conversión al R(-).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La principal vía es la glucuronoconjugación; en la orina solo aparece el enantiómero S(+), no hay conversión al R(-).',
          ref: {
            f: 'cima-60928',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal vía de eliminación para el dexketoprofeno es la glucuronoconjugación seguida de excreción renal',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la glucuronoconjugación se elimina por el riñón; la semivida de eliminación es de 1,65 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la glucuronoconjugación se elimina por el riñón; la semivida de eliminación es de 1,65 horas.',
          ref: {
            f: 'cima-60928',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La principal vía de eliminación para el dexketoprofeno es la glucuronoconjugación seguida de excreción renal',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '30 (15-60)',
      unidad: 'min',
      analito: 'dexketoprofeno',
      ref: { f: 'cima-60928', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la Cmax se alcanza a los 30 minutos (rango 15 a 60 min)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '99',
      unidad: '%',
      analito: 'dexketoprofeno',
      ref: { f: 'cima-60928', sec: '5.2 · Propiedades farmacocinéticas', cita: 'elevada unión a proteínas plasmáticas (99 %)', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '< 0,25',
      unidad: 'L/kg',
      analito: 'dexketoprofeno',
      ref: {
        f: 'cima-60928',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'su volumen de distribución tiene un valor medio inferior a 0,25 l/kg',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1,65',
      unidad: 'h',
      analito: 'dexketoprofeno',
      ref: {
        f: 'cima-60928',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Los valores de la semivida de distribución y de eliminación del dexketoprofeno son 0,35 y 1,65 horas, respectivamente',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-60928', '60928', 'ENANTYUM 25 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Laboratorios Menarini S.A.)', '2025-10-29', '2026-11-12'),
    rengPubchem(667550, 'dexketoprofen', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
