import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acetazolamida',
    nombre: 'Acetazolamida',
    clase: 'Inhibidor de la anhidrasa carbónica',
    sinonimos: [ 'acetazolamide', 'Edemox' ],
    formula: 'C4H6N4O3S2',
    masaMolar: 222.3,
    smiles: 'CC(=O)NC1=NN=C(S1)S(=O)(=O)N',
    inchikey: 'BZKPWHYZMXOIDC-UHFFFAOYSA-N',
    cid: 1986,
    iupac: 'N-(5-sulfamoyl-1,3,4-thiadiazol-2-yl)acetamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'acetazolamida-oral',
      producto: 'EDEMOX 250 mg COMPRIMIDOS',
      titular: 'Chiesi España S.A.U.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '250 mg de acetazolamida por comprimido',
      excipientes: [ 'Sulfato de calcio dihidrato', 'carboximetilalmidón sódico (tipo A, de almidón de patata)', 'talco', 'povidona' ],
      usos: {
        t: 'Edemas por insuficiencia cardiaca o por medicamentos y otras retenciones de líquido, y tratamiento complementario de algunos glaucomas, entre otros usos.',
        ref: {
          f: 'cima-24408',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'el tratamiento de edemas asociados a insuficiencia cardíaca congestiva',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-24408',
      advertencias: [
        {
          titulo: 'Precaución en mayores e insuficiencia renal o hepática',
          texto: 'Debe usarse con especial precaución en personas mayores y con insuficiencia renal o hepática.',
          organos: [ 'rinones', 'higado' ],
          ref: {
            f: 'cima-24408',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La acetazolamida debe utilizarse con especial precaución en pacientes de edad avanzada',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'En tratamientos cortos: hormigueo en las extremidades, zumbidos y trastornos de la audición, falta de apetito, alteraciones del gusto, náuseas, vómitos y diarrea.',
          'FT 4.8',
          'En terapias a corto plazo consisten en parestesias'
        ],
        [
          'Orinar mucho, sed, dolor de cabeza, mareo, cansancio, irritabilidad y, a veces, somnolencia o visión borrosa, que revierten al dejarlo.',
          'FT 4.8',
          'poliuria, rubor, sed, dolor de cabeza, mareos, fatiga'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 250 mg de acetazolamida por comprimido. Los excipientes no son el principio activo.',
    usos: 'Edemas por insuficiencia cardiaca o por medicamentos y otras retenciones de líquido, y tratamiento complementario de algunos glaucomas, entre otros usos.',
    actua: 'Inhibe la anhidrasa carbónica, la enzima que cataliza la hidratación del dióxido de carbono en ácido carbónico; en el riñón aumenta la eliminación de bicarbonato, sodio y agua, y en el ojo reduce la formación de humor acuoso.',
    recorrido: 'Se absorbe completa y rápidamente; con 500 mg, el pico plasmático llega hacia las 2 horas. Sale sin cambios por la orina, por secreción tubular y reabsorción pasiva; la eliminación tiene dos fases (semividas de 2 y 13 horas).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido cilíndrico ranurado.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido cilíndrico ranurado.',
          ref: { f: 'cima-24408', sec: '3 · Forma farmacéutica', cita: 'Comprimidos cilíndricos blancos de bordes biselados', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe completa y rápidamente; con 500 mg, el pico plasmático llega hacia las 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe completa y rápidamente; con 500 mg, el pico plasmático llega hacia las 2 horas.',
          ref: {
            f: 'cima-24408',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La acetazolamida se absorbe completa y rápidamente en el tracto gastrointestinal',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Pico plasmático hacia las 2 horas con 500 mg en comprimidos.',
          ref: {
            f: 'cima-24408',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'las concentraciones plasmáticas máximas se producen sobre las 2 horas después de la administración',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'rinones', 'ojos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une estrechamente a la anhidrasa carbónica y se acumula en los tejidos que la contienen, sobre todo los glóbulos rojos y la corteza renal; también se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une estrechamente a la anhidrasa carbónica y se acumula en los tejidos que la contienen, sobre todo los glóbulos rojos y la corteza renal; también se une a proteínas del plasma.',
          ref: {
            f: 'cima-24408',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se acumula en los tejidos que contienen esta enzima, en particular los glóbulos rojos y en la corteza renal',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Anhidrasa carbónica',
        efecto: 'Inhibe la anhidrasa carbónica, la enzima que cataliza la hidratación del dióxido de carbono en ácido carbónico; en el riñón aumenta la eliminación de bicarbonato, sodio y agua, y en el ojo reduce la formación de humor acuoso.',
        lugar: [ 'rinones', 'ojos' ],
        datos: [
          {
            t: 'Inhibe la anhidrasa carbónica, la enzima que cataliza la hidratación del dióxido de carbono en ácido carbónico; en el riñón aumenta la eliminación de bicarbonato, sodio y agua, y en el ojo reduce la formación de humor acuoso.',
            ref: {
              f: 'cima-24408',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El mecanismo de acción de acetazolamida es por inhibición de la anhidrasa carbónica',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza.',
          ref: { f: 'cima-24408', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La acetazolamida no se metaboliza', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sin cambios por la orina, por secreción tubular y reabsorción pasiva; la eliminación tiene dos fases (semividas de 2 y 13 horas).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sin cambios por la orina, por secreción tubular y reabsorción pasiva; la eliminación tiene dos fases (semividas de 2 y 13 horas).',
          ref: {
            f: 'cima-24408',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se excreta inalterada por los riñones a través de la secreción tubular y reabsorción pasiva',
            codigo: 'FT 5.2'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'acetazolamida',
      condiciones: 'dosis oral de 500 mg',
      ref: {
        f: 'cima-24408',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'las concentraciones plasmáticas máximas se producen sobre las 2 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática estimada',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'acetazolamida',
      ref: {
        f: 'cima-24408',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Se ha estimado una vida media plasmática de, aproximadamente, 4 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la fase terminal',
      valor: '13',
      unidad: 'h',
      analito: 'acetazolamida',
      ref: { f: 'cima-24408', sec: '5.2 · Propiedades farmacocinéticas', cita: 'la segunda fase en 13 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'otra',
      nombre: 'Inicio de la bajada de la presión intraocular',
      valor: '1-2',
      unidad: 'h',
      analito: 'acetazolamida',
      ref: {
        f: 'cima-24408',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la reducción de la presión intraocular se produce en 1 ó 2 horas',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-24408', '24408', 'EDEMOX 250 mg COMPRIMIDOS (Chiesi España S.A.U.)', '2024-10-21', '2026-11-12'),
    rengPubchem(1986, 'acetazolamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
