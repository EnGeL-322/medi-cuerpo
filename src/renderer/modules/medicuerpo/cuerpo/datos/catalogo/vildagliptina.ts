import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vildagliptina',
    nombre: 'Vildagliptina',
    clase: 'Inhibidor de la DPP-4 (antidiabético oral)',
    sinonimos: [ 'vildagliptin' ],
    formula: 'C17H25N3O2',
    masaMolar: 303.4,
    smiles: 'C1C[C@H](N(C1)C(=O)CNC23CC4CC(C2)CC(C4)(C3)O)C#N',
    inchikey: 'SYOKIDBDQMKNDQ-XWTIBIIYSA-N',
    cid: 6918537,
    iupac: '(2S)-1-[2-[(3-hydroxy-1-adamantyl)amino]acetyl]pyrrolidine-2-carbonitrile',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'vildagliptina-oral',
      producto: 'VILDAGLIPTINA KRKA 50 MG COMPRIMIDOS EFG',
      titular: 'Krka D.D. Novo Mesto',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'COMPRIMIDO',
      liberacion: 'no declarada',
      concentraciones: '50 mg de vildagliptina por comprimido, según la ficha técnica',
      excipientes: [
        'Manitol (E421)',
        'Hidroxipropilcelulosa tipo EF',
        'Hidroxipropilcelulosa de baja sustitución',
        'Celulosa microcristalina tipo 112',
        'Carboximetilalmidón glicolato sódico tipo A',
        'Sílice coloidal anhidra',
        'Fumarato de estearilo y sodio'
      ],
      usos: {
        t: 'Mejorar el control de la glucemia en adultos con diabetes mellitus tipo 2, como adyuvante a la dieta y el ejercicio.',
        ref: {
          f: 'cima-83106',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Vildagliptina está indicada como un adyuvante a la dieta y el ejercicio para mejorar el control de la glucemia en pacientes adultos con diabetes mellitus tipo 2',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-83106',
      advertencias: [
        {
          titulo: 'Insuficiencia hepática',
          texto: 'No debe utilizarse en pacientes con insuficiencia hepática, incluidos los que tienen ALT o AST más de 3 veces el límite superior normal antes del tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'cima-83106',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Vildagliptina Krka no debe utilizarse en pacientes con insuficiencia hepática',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'No sustituye a la insulina',
          texto: 'No es un sustituto de la insulina en pacientes que la requieran, ni se usa en diabetes tipo 1 o cetoacidosis diabética.',
          organos: [ 'pancreas', 'sangre' ],
          ref: {
            f: 'cima-83106',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'Vildagliptina Krka no es un sustituto de la insulina en pacientes que requieran insulina',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Se ha notificado hipoglucemia en pacientes que recibían vildagliptina junto con sulfonilureas o insulina.',
          'FT 4.8',
          'Se ha notificado hipoglucemia en pacientes que recibieron vildagliptina de forma concomitante con sulforilureas e insulina'
        ],
        [
          'Se ha notificado riesgo de pancreatitis aguda con su uso.',
          'FT 4.8',
          'Se ha notificado riesgo de pancreatitis aguda con el uso de vildagliptina'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg de vildagliptina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucemia en adultos con diabetes mellitus tipo 2, como adyuvante a la dieta y el ejercicio.',
    actua: 'Inhibe de forma rápida y completa la actividad de la DPP-4, lo que aumenta los niveles de las hormonas incretinas GLP-1 y GIP, en ayunas y después de comer.',
    recorrido: 'En ayunas se absorbe rápidamente y el pico plasmático se observa a las 1,7 horas; la biodisponibilidad absoluta es del 85 %. Tras una dosis oral marcada, el 85 % salió por la orina y el 15 % por las heces; la excreción renal de vildagliptina inalterada fue del 23 % de la dosis.'
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
          ref: { f: 'cima-83106', sec: '3 · Forma farmacéutica', cita: 'Comprimido de color blanco a casi blanco o blanco amarillento', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En ayunas se absorbe rápidamente y el pico plasmático se observa a las 1,7 horas; la biodisponibilidad absoluta es del 85 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas se absorbe rápidamente y el pico plasmático se observa a las 1,7 horas; la biodisponibilidad absoluta es del 85 %.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'vildagliptina se absorbe rápidamente y se observan concentraciones plasmáticas máximas a las 1,7 horas',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La comida retrasa el pico a las 2,5 horas, pero no modifica la exposición global (AUC); la Cmax baja un 19 %.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La comida retrasa ligeramente el tiempo para alcanzar la concentración plasmática máxima a las 2,5 horas, pero no modifica la exposición global',
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
      ocurre: 'La unión a proteínas del plasma es baja (9,3 %) y se distribuye de forma equitativa entre el plasma y los eritrocitos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es baja (9,3 %) y se distribuye de forma equitativa entre el plasma y los eritrocitos.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La unión a proteínas plasmáticas de vildagliptina es baja (9,3%)',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'El volumen de distribución en estado estacionario tras la vía intravenosa es de 71 litros, lo que sugiere una distribución extravascular.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El volumen de distribución medio de vildagliptina en estado estacionario tras la administración intravenosa (Vss) es 71 litros',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Enzima DPP-4',
        efecto: 'Inhibe de forma rápida y completa la actividad de la DPP-4, lo que aumenta los niveles de las hormonas incretinas GLP-1 y GIP, en ayunas y después de comer.',
        lugar: [ 'pancreas', 'sangre' ],
        datos: [
          {
            t: 'Inhibe de forma rápida y completa la actividad de la DPP-4, lo que aumenta los niveles de las hormonas incretinas GLP-1 y GIP, en ayunas y después de comer.',
            ref: {
              f: 'cima-83106',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'La administración de vildagliptina da lugar a una inhibición rápida y completa de la actividad de la DPP-4',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'rinones' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolismo es su principal vía de eliminación (69 % de la dosis), sobre todo por hidrólisis, y no depende de las enzimas CYP450 de forma cuantificable; el riñón podría ser un órgano importante en la hidrólisis.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo es su principal vía de eliminación (69 % de la dosis), sobre todo por hidrólisis, y no depende de las enzimas CYP450 de forma cuantificable; el riñón podría ser un órgano importante en la hidrólisis.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolismo es la principal vía de eliminación de vildagliptina en humanos, afectando a un 69% de la dosis',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'LAY 151 (hidrólisis del grupo ciano)',
          actividad: 'inactivo',
          nota: 'Farmacológicamente inactivo; supone el 57 % de la dosis.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'El metabolito principal (LAY 151), farmacológicamente inactivo, se obtiene por hidrólisis del grupo ciano y representa un 57% de la dosis',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 85 % salió por la orina y el 15 % por las heces; la excreción renal de vildagliptina inalterada fue del 23 % de la dosis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 85 % salió por la orina y el 15 % por las heces; la excreción renal de vildagliptina inalterada fue del 23 % de la dosis.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'aproximadamente el 85% de la dosis se excretó en la orina y el 15% de la dosis se recuperó en las heces',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida de eliminación tras la administración oral es de unas 3 horas.',
          ref: {
            f: 'cima-83106',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida de eliminación tras la administración oral es de aproximadamente 3 horas',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1,7',
      unidad: 'h',
      analito: 'vildagliptina',
      condiciones: 'en ayunas',
      ref: {
        f: 'cima-83106',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'vildagliptina se absorbe rápidamente y se observan concentraciones plasmáticas máximas a las 1,7 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '85',
      unidad: '%',
      analito: 'vildagliptina',
      ref: { f: 'cima-83106', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La biodisponibilidad absoluta es del 85%', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '9,3',
      unidad: '%',
      analito: 'vildagliptina',
      ref: {
        f: 'cima-83106',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La unión a proteínas plasmáticas de vildagliptina es baja (9,3%)',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '71',
      unidad: 'L',
      analito: 'vildagliptina',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'cima-83106',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución medio de vildagliptina en estado estacionario tras la administración intravenosa (Vss) es 71 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación tras la dosis oral',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'vildagliptina',
      ref: {
        f: 'cima-83106',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida de eliminación tras la administración oral es de aproximadamente 3 horas',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '85 (aprox.)',
      unidad: '% de la dosis',
      analito: 'vildagliptina y metabolitos',
      condiciones: 'dosis oral de 14C-vildagliptina',
      ref: {
        f: 'cima-83106',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'aproximadamente el 85% de la dosis se excretó en la orina',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-83106', '83106', 'VILDAGLIPTINA KRKA 50 MG COMPRIMIDOS EFG (Krka D.D. Novo Mesto)', '2026-09-07', '2026-11-15'),
    rengPubchem(6918537, 'vildagliptin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
