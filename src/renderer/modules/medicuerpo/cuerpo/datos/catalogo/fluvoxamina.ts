import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fluvoxamina',
    nombre: 'Fluvoxamina',
    clase: 'Inhibidor selectivo de la recaptación de serotonina (ISRS)',
    sinonimos: [ 'fluvoxamine', 'Dumirox' ],
    formula: 'C15H21F3N2O2',
    masaMolar: 318.33,
    smiles: 'COCCCC/C(=N\\OCCN)/C1=CC=C(C=C1)C(F)(F)F',
    inchikey: 'CJOFXWAVKWHTFT-XSFVSMFZSA-N',
    cid: 5324346,
    iupac: '2-[(E)-[5-methoxy-1-[4-(trifluoromethyl)phenyl]pentylidene]amino]oxyethanamine',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'fluvoxamina-oral',
      producto: 'DUMIROX 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Viatris Healthcare Limited',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '50 mg de maleato de fluvoxamina por comprimido, según la ficha técnica',
      sal: {
        nombre: 'Maleato de fluvoxamina',
        ref: { f: 'cima-57233', sec: '2 · Composición cualitativa y cuantitativa', cita: '50 mg de maleato de fluvoxamina', codigo: 'FT 2' }
      },
      excipientes: [
        'Manitol',
        'Almidón de maíz sin gluten',
        'Almidón pregelatinizado',
        'Estearilfumarato sódico',
        'Sílice coloidal anhidra',
        'Hipromelosa',
        'Macrogol 6000',
        'Talco',
        'Dióxido de titanio (E 171)'
      ],
      usos: {
        t: 'Tratamiento del trastorno depresivo mayor y del trastorno obsesivo compulsivo (TOC).',
        ref: { f: 'cima-57233', sec: '4.1 · Indicaciones terapéuticas', cita: 'Trastorno depresivo mayor', codigo: 'FT 4.1' }
      },
      fuente: 'cima-57233',
      advertencias: [
        {
          titulo: 'Suicidio y pensamientos suicidas',
          texto: 'La depresión se asocia con un aumento del riesgo de pensamientos suicidas, autolesiones y suicidio, que persiste hasta la remisión.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'cima-57233',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La depresión se asocia con un aumento del riesgo de pensamientos suicidas, autolesiones y suicidio (comportamiento suicida)',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Los efectos adversos de los ensayos suelen estar relacionados con la enfermedad y no necesariamente con el tratamiento.',
          'FT 4.8',
          'con frecuencia están relacionadas con la enfermedad y no necesariamente relacionadas con el tratamiento'
        ],
        [
          'Entre los trastornos endocrinos figuran la hiperprolactinemia y la secreción inadecuada de la hormona antidiurética.',
          'FT 4.8',
          'Hiperprolactinemia, secreción inadecuada de la hormona antidiurética'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg de maleato de fluvoxamina por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno depresivo mayor y del trastorno obsesivo compulsivo (TOC).',
    actua: 'Su mecanismo se relaciona con la inhibición selectiva de la recaptación de serotonina por las neuronas cerebrales, con una interferencia mínima con los procesos noradrenérgicos.',
    recorrido: 'Se absorbe completamente tras la administración oral; la concentración plasmática máxima se alcanza a las 3-8 horas y la biodisponibilidad media total es del 53 % por el metabolismo de primer paso. Los al menos nueve metabolitos se excretan por los riñones; la semivida plasmática es de unas 13-15 horas tras una dosis única.'
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
          ref: { f: 'cima-57233', sec: '3 · Forma farmacéutica', cita: 'Comprimidos redondos, biconvexos, ranurados', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe completamente tras la administración oral; la concentración plasmática máxima se alcanza a las 3-8 horas y la biodisponibilidad media total es del 53 % por el metabolismo de primer paso.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe completamente tras la administración oral; la concentración plasmática máxima se alcanza a las 3-8 horas y la biodisponibilidad media total es del 53 % por el metabolismo de primer paso.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Fluvoxamina se absorbe completamente tras la administración oral',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La farmacocinética no se altera por la ingesta de alimentos.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La farmacocinética de fluvoxamina no se altera por la ingesta de alimentos',
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
      ocurre: 'In vitro, la unión a proteínas del plasma es del 80 % y el volumen de distribución en humanos es de 25 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la unión a proteínas del plasma es del 80 % y el volumen de distribución en humanos es de 25 L/kg.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'In vitro la unión a proteínas plasmáticas de fluvoxamina es del 80%',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Transportador de serotonina',
        efecto: 'Su mecanismo se relaciona con la inhibición selectiva de la recaptación de serotonina por las neuronas cerebrales, con una interferencia mínima con los procesos noradrenérgicos.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo se relaciona con la inhibición selectiva de la recaptación de serotonina por las neuronas cerebrales, con una interferencia mínima con los procesos noradrenérgicos.',
            ref: {
              f: 'cima-57233',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'El mecanismo de acción de la fluvoxamina se relaciona con la inhibición selectiva de la recaptación de serotonina por las neuronas cerebrales',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un intenso metabolismo en el hígado, sobre todo por desmetilación oxidativa, hasta al menos nueve metabolitos; in vitro la CYP2D6 es la isoenzima principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un intenso metabolismo en el hígado, sobre todo por desmetilación oxidativa, hasta al menos nueve metabolitos; in vitro la CYP2D6 es la isoenzima principal.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La fluvoxamina sufre un intenso metabolismo en el hígado',
            codigo: 'FT 5.2'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Dos metabolitos principales',
          actividad: 'inactivo',
          nota: 'Farmacológicamente inactivos; es improbable que el resto tenga actividad.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Los dos metabolitos principales son farmacológicamente inactivos',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Los al menos nueve metabolitos se excretan por los riñones; la semivida plasmática es de unas 13-15 horas tras una dosis única.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Los al menos nueve metabolitos se excretan por los riñones; la semivida plasmática es de unas 13-15 horas tras una dosis única.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'transformándose como mínimo en nueve metabolitos que se excretan por los riñones',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'La semivida plasmática es de 13-15 horas aproximadamente tras una administración única y algo más larga (17-22 horas) tras administración repetida.',
          ref: {
            f: 'cima-57233',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La semivida plasmática es de 13-15 horas aproximadamente después de una administración única',
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
      valor: '3-8',
      unidad: 'h',
      analito: 'fluvoxamina',
      ref: {
        f: 'cima-57233',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La concentración plasmática máxima se alcanza a las 3-8 horas de la toma',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad total media',
      valor: '53',
      unidad: '%',
      analito: 'fluvoxamina',
      ref: {
        f: 'cima-57233',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad total media es del 53 % debido al metabolismo de primer paso',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '80',
      unidad: '%',
      analito: 'fluvoxamina',
      condiciones: 'in vitro',
      ref: {
        f: 'cima-57233',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'In vitro la unión a proteínas plasmáticas de fluvoxamina es del 80%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '25',
      unidad: 'L/kg',
      analito: 'fluvoxamina',
      ref: { f: 'cima-57233', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución en humanos es de 25 l/kg', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática tras una dosis única',
      valor: '13-15 (aprox.)',
      unidad: 'h',
      analito: 'fluvoxamina',
      ref: {
        f: 'cima-57233',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La semivida plasmática es de 13-15 horas aproximadamente después de una administración única',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-57233', '57233', 'DUMIROX 50 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Viatris Healthcare Limited)', '2025-06-16', '2026-11-15'),
    rengPubchem(5324346, 'fluvoxamine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
