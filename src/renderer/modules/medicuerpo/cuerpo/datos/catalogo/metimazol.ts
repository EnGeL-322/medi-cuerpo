import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metimazol',
    nombre: 'Metimazol (tiamazol)',
    clase: 'Antitiroideo (imidazol)',
    sinonimos: [ 'methimazole', 'tiamazol', 'thiamazole', 'Tirodril' ],
    formula: 'C4H6N2S',
    masaMolar: 114.17,
    smiles: 'CN1C=CNC1=S',
    inchikey: 'PMRYVIKBURPHAH-UHFFFAOYSA-N',
    cid: 1349907,
    iupac: '3-methyl-1H-imidazole-2-thione',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'metimazol-oral',
      producto: 'TIRODRIL 5mg COMPRIMIDOS',
      titular: 'Laboratorio Estedi S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '5 mg de tiamazol (metimazol) por comprimido',
      excipientes: [ 'Almidón de maíz', 'sulfato cálcico', 'talco', 'sílice coloidal', 'estearato magnésico' ],
      usos: {
        t: 'Hipertiroidismo y crisis tirotóxica, y preparación antes de la cirugía de tiroides o del yodo radiactivo, en adultos y niños desde 3 años.',
        ref: { f: 'cima-24700', sec: '4.1 · Indicaciones terapéuticas', cita: 'Tratamiento del hipertiroidismo', codigo: 'FT 4.1' }
      },
      fuente: 'cima-24700',
      advertencias: [
        {
          titulo: 'Agranulocitosis',
          texto: 'Se ha comunicado agranulocitosis entre el 0,3 % y el 0,6 % de los casos; hay que conocer sus síntomas (llagas en la boca, dolor de garganta, fiebre).',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'cima-24700',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Se han comunicado agranulocitosis entre el 0,3 y el 0,6% de los casos',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones adversas aparecen con más frecuencia en las primeras ocho semanas de tratamiento.',
          'FT 4.8',
          'Las reacciones adversas suelen aparecer con más frecuencia en las primeras ocho semanas de tratamiento'
        ],
        [
          'Alteraciones de la sangre como agranulocitosis, granulocitopenia, trombocitopenia y pancitopenia.',
          'FT 4.8',
          'Trastornos de la sangre y del sistema linfático Agranulocito-sis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg de tiamazol (metimazol) por comprimido. Los excipientes no son el principio activo.',
    usos: 'Hipertiroidismo y crisis tirotóxica, y preparación antes de la cirugía de tiroides o del yodo radiactivo, en adultos y niños desde 3 años.',
    actua: 'Bloquea la síntesis de las hormonas tiroideas T3 y T4 porque impide que el yodo se incorpore a la tiroglobulina; no modifica las hormonas ya formadas.',
    recorrido: 'Se absorbe rápido en el tubo digestivo, con una biodisponibilidad del 93 %. Sale por la orina y la bilis, con una semivida de 5 a 6 horas; por las heces sale poco, lo que sugiere circulación enterohepática. Solo una pequeña cantidad sale sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo y ranurado; la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo y ranurado; la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-24700', sec: '3 · Forma farmacéutica', cita: 'Comprimidos redondos, planos, biselados', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido en el tubo digestivo, con una biodisponibilidad del 93 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido en el tubo digestivo, con una biodisponibilidad del 93 %.',
          ref: {
            f: 'cima-24700',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El tiamazol se absorbe rápidamente en el tracto grastrointestinal con una biodisponibilidad del 93%',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tiroides' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente y alcanza su máximo una hora después de tomarlo; se concentra de forma activa en la tiroides y atraviesa la placenta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente y alcanza su máximo una hora después de tomarlo; se concentra de forma activa en la tiroides y atraviesa la placenta.',
          ref: { f: 'cima-24700', sec: '5.2 · Propiedades farmacocinéticas', cita: 'concentrándose activamente el tiroides', codigo: 'FT 5.2' }
        },
        {
          t: 'La concentración máxima llega una hora después de la toma oral.',
          ref: {
            f: 'cima-24700',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'alcanzando una concentración máxima 1 hora después de la administración oral',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de hormonas tiroideas (incorporación del yodo)',
        efecto: 'Bloquea la síntesis de las hormonas tiroideas T3 y T4 porque impide que el yodo se incorpore a la tiroglobulina; no modifica las hormonas ya formadas.',
        lugar: [ 'tiroides' ],
        datos: [
          {
            t: 'Bloquea la síntesis de las hormonas tiroideas T3 y T4 porque impide que el yodo se incorpore a la tiroglobulina; no modifica las hormonas ya formadas.',
            ref: {
              f: 'cima-24700',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'actúa bloqueando la síntesis de hormonas tiroideas T 3 y T 4 interfiriendo en la incorporación del yodo en los residuos tirosil de la tiroglobulina',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'tiroides' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado; también se acumula en la tiroides, donde se transforma lentamente.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado; también se acumula en la tiroides, donde se transforma lentamente.',
          ref: {
            f: 'cima-24700',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El tiamazol se acumula en la glándula tiroides donde se metaboliza lentamente',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Biotransformación principalmente hepática.',
          ref: { f: 'cima-24700', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Principalmente hepática', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale por la orina y la bilis, con una semivida de 5 a 6 horas; por las heces sale poco, lo que sugiere circulación enterohepática. Solo una pequeña cantidad sale sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale por la orina y la bilis, con una semivida de 5 a 6 horas; por las heces sale poco, lo que sugiere circulación enterohepática. Solo una pequeña cantidad sale sin cambios.',
          ref: {
            f: 'cima-24700',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El tiamazol se excreta por la orina y bilis, presentando una semivida de 5-6 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '93',
      unidad: '%',
      analito: 'tiamazol',
      ref: { f: 'cima-24700', sec: '5.2 · Propiedades farmacocinéticas', cita: 'con una biodisponibilidad del 93%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1',
      unidad: 'h',
      analito: 'tiamazol',
      ref: {
        f: 'cima-24700',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'alcanzando una concentración máxima 1 hora después de la administración oral',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '5-6',
      unidad: 'h',
      analito: 'tiamazol',
      ref: { f: 'cima-24700', sec: '5.2 · Propiedades farmacocinéticas', cita: 'presentando una semivida de 5-6 horas', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-24700', '24700', 'TIRODRIL 5mg COMPRIMIDOS (Laboratorio Estedi S.L.)', '2026-10-14', '2026-11-12'),
    rengPubchem(1349907, 'methimazole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
