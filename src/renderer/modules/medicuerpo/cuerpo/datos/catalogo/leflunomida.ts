import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'leflunomida',
    nombre: 'Leflunomida',
    clase: 'Inmunomodulador inhibidor de la síntesis de pirimidinas',
    sinonimos: [ 'leflunomida', 'leflunomide', 'Arava' ],
    formula: 'C12H9F3N2O2',
    masaMolar: 270.21,
    smiles: 'CC1=C(C=NO1)C(=O)NC2=CC=C(C=C2)C(F)(F)F',
    inchikey: 'VHOGYURTWQBHIL-UHFFFAOYSA-N',
    cid: 3899,
    iupac: '5-methyl-N-[4-(trifluoromethyl)phenyl]-1,2-oxazole-4-carboxamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'leflunomida-oral',
      producto: 'Arava · comprimido recubierto con película',
      titular: 'SANOFI-AVENTIS U.S. LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'crospovidone (120 .mu.m)',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'povidone, unspecified',
        'talc',
        'titanium dioxide',
        'starch, corn'
      ],
      usos: {
        t: 'Artritis reumatoide activa en adultos.',
        ref: { f: 'dailymed-leflunomida', sec: '1 · Indicaciones', cita: 'treatment of adults with active rheumatoid arthritis', codigo: '34067-9' }
      },
      fuente: 'dailymed-leflunomida',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal y hepática',
          texto: 'La etiqueta destaca ambos riesgos en su advertencia principal.',
          organos: [ 'organos-reproductores', 'higado' ],
          ref: { f: 'dailymed-leflunomida', sec: 'Advertencia destacada', cita: 'EMBRYO-FETAL TOXICITY and HEPATOTOXICITY', codigo: '34066-1' }
        }
      ],
      reacciones: [
        [
          'Diarrea, infección respiratoria y náuseas, independientemente de su atribución al fármaco en la etiqueta.',
          '34084-4',
          'were diarrhea, respiratory infection, nausea, headache'
        ],
        [ 'Cefalea, erupción cutánea y alteraciones de enzimas hepáticas.', '34084-4', 'headache, rash, abnormal liver enzymes' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg, 20 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Artritis reumatoide activa en adultos.',
    actua: 'Su actividad se debe principalmente a teriflunomida, que inhibe una enzima mitocondrial de la síntesis de pirimidinas.',
    recorrido: 'Tras administrar leflunomida por vía oral, el metabolito activo alcanza el pico entre 6 y 12 h. Parte de la teriflunomida se excreta sin transformar por bilis. Los riñones excretan metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oral recubierto con película de Arava.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido oral recubierto con película de Arava.',
          ref: { f: 'dailymed-leflunomida', sec: '3 · Formas y concentraciones', cita: 'white, round film-coated tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras administrar leflunomida por vía oral, el metabolito activo alcanza el pico entre 6 y 12 h.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras administrar leflunomida por vía oral, el metabolito activo alcanza el pico entre 6 y 12 h.',
          ref: {
            f: 'dailymed-leflunomida',
            sec: '12.3 · Farmacocinética',
            cita: 'peak teriflunomide concentrations occurred between 6 to 12 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Más del 99 % de teriflunomida se une a proteínas y se distribuye principalmente en el plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Más del 99 % de teriflunomida se une a proteínas y se distribuye principalmente en el plasma.',
          ref: {
            f: 'dailymed-leflunomida',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively bound to plasma protein (>99%) and is mainly distributed in plasma',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Dihidroorotato deshidrogenasa',
        efecto: 'Su actividad se debe principalmente a teriflunomida, que inhibe una enzima mitocondrial de la síntesis de pirimidinas.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Su actividad se debe principalmente a teriflunomida, que inhibe una enzima mitocondrial de la síntesis de pirimidinas.',
            ref: {
              f: 'dailymed-leflunomida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibits dihydroorotate dehydrogenase (a mitochondrial enzyme',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La teriflunomida es el metabolito principal y explica prácticamente toda la actividad in vivo de la leflunomida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La teriflunomida es el metabolito principal y explica prácticamente toda la actividad in vivo de la leflunomida.',
          ref: {
            f: 'dailymed-leflunomida',
            sec: '12.3 · Farmacocinética',
            cita: 'teriflunomide, which is responsible for essentially all',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Parte de la teriflunomida se excreta sin transformar por bilis. Los riñones excretan metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Parte de la teriflunomida se excreta sin transformar por bilis. Los riñones excretan metabolitos.',
          ref: {
            f: 'dailymed-leflunomida',
            sec: '12.3 · Farmacocinética',
            cita: 'direct biliary excretion of unchanged drug as well as renal excretion of metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico del metabolito activo',
      valor: '6–12',
      unidad: 'h',
      analito: 'teriflunomida',
      ref: {
        f: 'dailymed-leflunomida',
        sec: '12.3 · Farmacocinética',
        cita: 'peak teriflunomide concentrations occurred between 6 to 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida mediana del metabolito activo',
      valor: '18–19',
      unidad: 'días',
      analito: 'teriflunomida',
      poblacion: 'voluntarios sanos',
      ref: { f: 'dailymed-leflunomida', sec: '12.3 · Farmacocinética', cita: 'median half-life of 18 to 19 days in healthy volunteers', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-leflunomida', '320f63f2-fac3-4aee-aff8-85724e00ef52', 'ARAVA (LEFLUNOMIDE) TABLET, FILM COATED', 'Arava', '27', '2025-06-09', '2026-11-12'),
    rengPubchem(3899, 'leflunomida', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
