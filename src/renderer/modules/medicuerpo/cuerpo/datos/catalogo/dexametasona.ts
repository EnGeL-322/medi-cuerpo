import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dexametasona',
    nombre: 'Dexametasona',
    clase: 'Glucocorticoide',
    sinonimos: [ 'dexamethasone', 'Fortecortin' ],
    formula: 'C22H29FO5',
    masaMolar: 392.5,
    smiles: 'C[C@@H]1C[C@H]2[C@@H]3CCC4=CC(=O)C=C[C@@]4([C@]3([C@H](C[C@@]2([C@]1(C(=O)CO)O)C)O)F)C',
    inchikey: 'UREBDLICKHMUKA-CXSFZGCWSA-N',
    cid: 5743,
    iupac: '(8S,9R,10S,11S,13S,14S,16R,17R)-9-fluoro-11,17-dihydroxy-17-(2-hydroxyacetyl)-10,13,16-trimethyl-6,7,8,11,12,14,15,16-octahydrocyclopenta[a]phenanthren-3-one',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'dexametasona-oral',
      producto: 'FORTECORTIN 4 mg COMPRIMIDOS',
      titular: 'Laboratorios Ern S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '4 mg de dexametasona por comprimido',
      excipientes: [ 'Lactosa monohidrato', 'almidón de maíz', 'celulosa microcristalina', 'talco', 'povidona', 'estearato de magnesio' ],
      usos: {
        t: 'Procesos que necesitan tratamiento antiinflamatorio e inmunosupresor, como el edema cerebral por tumores, el asma grave aguda, enfermedades autoinmunes y de la piel graves y la artritis reumatoide activa.',
        ref: {
          f: 'cima-70032',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Procesos que requieran tratamiento antiinflamatorio e inmunosupresor',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-70032',
      advertencias: [
        {
          titulo: 'Insuficiencia suprarrenal',
          texto: 'La insuficiencia suprarrenal inducida puede durar meses tras suspenderla; se minimiza reduciendo la dosis poco a poco.',
          organos: [],
          ref: {
            f: 'cima-70032',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'la insuficiencia adrenocortical inducida por los glucocorticoides puede persistir durante meses',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Alteraciones endocrinas: supresión suprarrenal y síndrome de Cushing, según la dosis y la duración.',
          'FT 4.8',
          'Supresión adrenal e inducción de síndrome de Cushing'
        ],
        [ 'Alteraciones oculares: glaucoma y cataratas.', 'FT 4.8', 'Trastornos oculares: Glaucoma, cataratas' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 4 mg de dexametasona por comprimido. Los excipientes no son el principio activo.',
    usos: 'Procesos que necesitan tratamiento antiinflamatorio e inmunosupresor, como el edema cerebral por tumores, el asma grave aguda, enfermedades autoinmunes y de la piel graves y la artritis reumatoide activa.',
    actua: 'Glucocorticoide fluorado con acción antiinflamatoria e inmunosupresora muy elevada y escasa acción mineralocorticoide; inhibe la síntesis de prostaglandinas y leucotrienos que median la inflamación.',
    recorrido: 'Se absorbe rápida y casi completamente en el estómago y el intestino delgado; biodisponibilidad oral del 80-90 % y pico en 1-2 horas. Sale principalmente por el riñón como alcohol de dexametasona libre; la semivida plasmática media en adultos es de unos 250 minutos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco y redondo; la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco y redondo; la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-70032', sec: '3 · Forma farmacéutica', cita: 'Comprimido blanco, redondo, biconvexo', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'estomago', 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y casi completamente en el estómago y el intestino delgado; biodisponibilidad oral del 80-90 % y pico en 1-2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y casi completamente en el estómago y el intestino delgado; biodisponibilidad oral del 80-90 % y pico en 1-2 horas.',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La dexametasona se absorbe rápida y casi completamente en el estómago y en el intestino delgado',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Biodisponibilidad oral del 80-90 %.',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La biodisponibilidad tras administración oral es del 80-90%',
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
      ocurre: 'Se une a la albúmina del plasma según la dosis: a dosis altas casi todo circula libre, y con poca albúmina aumenta la parte libre, que es la activa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a la albúmina del plasma según la dosis: a dosis altas casi todo circula libre, y con poca albúmina aumenta la parte libre, que es la activa.',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Se une de forma dosis-dependiente a la albúmina plasmática',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Receptor de glucocorticoides (síntesis de mediadores de la inflamación)',
        efecto: 'Glucocorticoide fluorado con acción antiinflamatoria e inmunosupresora muy elevada y escasa acción mineralocorticoide; inhibe la síntesis de prostaglandinas y leucotrienos que median la inflamación.',
        lugar: [ 'tejidos', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Glucocorticoide fluorado con acción antiinflamatoria e inmunosupresora muy elevada y escasa acción mineralocorticoide; inhibe la síntesis de prostaglandinas y leucotrienos que median la inflamación.',
            ref: {
              f: 'cima-70032',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Los corticoides inhiben la síntesis de prostaglandinas y leucotrienos',
              codigo: 'FT 5.1'
            }
          },
          {
            t: 'Tiene acciones antiinflamatoria e inmunosupresora muy elevadas y escasa acción mineralocorticoide.',
            ref: {
              f: 'cima-70032',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'con acciones antiinflamatoria e inmunosupresora muy elevadas y escasa acción mineralocorticoide',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza solo en parte; sus metabolitos se eliminan sobre todo por el riñón como glucuronatos o sulfatos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza solo en parte; sus metabolitos se eliminan sobre todo por el riñón como glucuronatos o sulfatos.',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Metabolización de la dexametasona puede tener también lugar hasta cierto punto',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Conjugados con glucurónico o sulfato',
          actividad: 'desconocida',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los metabolitos son principalmente excretados vía renal en forma de glucuronatos o sulfatos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale principalmente por el riñón como alcohol de dexametasona libre; la semivida plasmática media en adultos es de unos 250 minutos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale principalmente por el riñón como alcohol de dexametasona libre; la semivida plasmática media en adultos es de unos 250 minutos.',
          ref: {
            f: 'cima-70032',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La dexametasona se excreta principalmente por vía renal en forma de alcohol de dexametasona libre',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '80-90',
      unidad: '%',
      analito: 'dexametasona',
      ref: {
        f: 'cima-70032',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad tras administración oral es del 80-90%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '1-2',
      unidad: 'h',
      analito: 'dexametasona',
      ref: {
        f: 'cima-70032',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática máxima se alcanza entre 1 y 2 horas después de su administración',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '250 (± 80)',
      unidad: 'min',
      analito: 'dexametasona',
      poblacion: 'adultos',
      ref: {
        f: 'cima-70032',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación plasmática media de la dexametasona en adultos es aproximadamente de 250 minutos',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-70032', '70032', 'FORTECORTIN 4 mg COMPRIMIDOS (Laboratorios Ern S.A.)', '2023-08-25', '2026-11-12'),
    rengPubchem(5743, 'dexamethasone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
