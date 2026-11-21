import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ambrisentan',
    nombre: 'Ambrisentán',
    clase: 'Antagonista del receptor de endotelina A',
    sinonimos: [ 'ambrisentan', 'Letairis' ],
    formula: 'C22H22N2O4',
    masaMolar: 378.4,
    smiles: 'CC1=CC(=NC(=N1)O[C@H](C(=O)O)C(C2=CC=CC=C2)(C3=CC=CC=C3)OC)C',
    inchikey: 'OUJTZYPIHDYQMC-LJQANCHMSA-N',
    cid: 6918493,
    iupac: '(2S)-2-(4,6-dimethylpyrimidin-2-yl)oxy-3-methoxy-3,3-diphenylpropanoic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'ambrisentan-oral',
      producto: 'Letairis · comprimido recubierto con película',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'fd&c red no. 40',
        'aluminum oxide',
        'soybean lecithin',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Hipertensión arterial pulmonar (grupo 1 de la OMS) en adultos, para mejorar la capacidad de ejercicio y retrasar el empeoramiento.',
        ref: {
          f: 'dailymed-ambrisentan',
          sec: '1 · Indicaciones',
          cita: 'treatment of pulmonary arterial hypertension (PAH) (WHO Group 1) in adult patients',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ambrisentan',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Está contraindicado en el embarazo porque puede causar defectos congénitos graves.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-ambrisentan',
            sec: 'Advertencia destacada',
            cita: 'Letairis is contraindicated for use during pregnancy because it may cause major birth defects',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Retención de líquidos',
          texto: 'El edema periférico es un efecto conocido de la clase de los antagonistas de endotelina.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-ambrisentan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Peripheral edema is a known class effect of endothelin receptor antagonists',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (> 3 % sobre placebo): edema periférico, congestión nasal, sinusitis y rubor.',
          '34084-4',
          'Most common adverse reactions (>3% compared to placebo) are peripheral edema, nasal congestion, sinusitis, and flushing'
        ],
        [
          'Con tadalafilo (> 5 %): edema periférico, dolor de cabeza, congestión nasal, tos, anemia, dispepsia y bronquitis.',
          '34084-4',
          'most common adverse reactions (>5% compared with either monotherapy) are peripheral edema, headache, nasal congestion, cough, anemia, dyspepsia, and bronchitis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg o 10 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hipertensión arterial pulmonar (grupo 1 de la OMS) en adultos, para mejorar la capacidad de ejercicio y retrasar el empeoramiento.',
    actua: 'Es un antagonista del receptor de endotelina A de alta afinidad y gran selectividad frente al receptor B; bloquea la vasoconstricción y la proliferación celular que causa la endotelina-1.',
    recorrido: 'La biodisponibilidad absoluta no se conoce; el máximo llega aproximadamente 2 horas después de la dosis y la comida no afecta a la biodisponibilidad. La eliminación es sobre todo por vías no renales; la semivida terminal es de 15 horas y la efectiva, de unas 9 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película, de 5 mg (cuadrado, rosa pálido) o 10 mg (ovalado, rosa intenso).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película, de 5 mg (cuadrado, rosa pálido) o 10 mg (ovalado, rosa intenso).',
          ref: { f: 'dailymed-ambrisentan', sec: '3 · Formas y concentraciones', cita: 'Each 5 mg tablet is square convex, pale pink', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta no se conoce; el máximo llega aproximadamente 2 horas después de la dosis y la comida no afecta a la biodisponibilidad.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta no se conoce; el máximo llega aproximadamente 2 horas después de la dosis y la comida no afecta a la biodisponibilidad.',
          ref: {
            f: 'dailymed-ambrisentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Ambrisentan is absorbed with peak concentrations occurring approximately 2 hours after oral administration in healthy subjects and PAH patients',
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
      ocurre: 'La unión a proteínas del plasma es alta (99 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es alta (99 %).',
          ref: { f: 'dailymed-ambrisentan', sec: '12.3 · Farmacocinética', cita: 'Ambrisentan is highly bound to plasma proteins (99%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptor de endotelina A',
        efecto: 'Es un antagonista del receptor de endotelina A de alta afinidad y gran selectividad frente al receptor B; bloquea la vasoconstricción y la proliferación celular que causa la endotelina-1.',
        lugar: [ 'pulmones', 'vasos' ],
        datos: [
          {
            t: 'Es un antagonista del receptor de endotelina A de alta afinidad y gran selectividad frente al receptor B; bloquea la vasoconstricción y la proliferación celular que causa la endotelina-1.',
            ref: {
              f: 'dailymed-ambrisentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ambrisentan is a high-affinity (K i =0.011 nM) ET A receptor antagonist with a high selectivity for the ET A versus ET B receptor (>4000-fold)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'bilis' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La etiqueta no precisa la contribución relativa del metabolismo y de la eliminación biliar; la eliminación es sobre todo por vías no renales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La etiqueta no precisa la contribución relativa del metabolismo y de la eliminación biliar; la eliminación es sobre todo por vías no renales.',
          ref: {
            f: 'dailymed-ambrisentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination of ambrisentan is predominantly by non-renal pathways, but the relative contributions of metabolism and biliary elimination have not been well characterized',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es sobre todo por vías no renales; la semivida terminal es de 15 horas y la efectiva, de unas 9 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es sobre todo por vías no renales; la semivida terminal es de 15 horas y la efectiva, de unas 9 horas.',
          ref: {
            f: 'dailymed-ambrisentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Although ambrisentan has a 15-hour terminal half-life',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'ambrisentán',
      poblacion: 'voluntarios sanos y pacientes con HAP',
      ref: {
        f: 'dailymed-ambrisentan',
        sec: '12.3 · Farmacocinética',
        cita: 'peak concentrations occurring approximately 2 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '99',
      unidad: '%',
      analito: 'ambrisentán',
      ref: { f: 'dailymed-ambrisentan', sec: '12.3 · Farmacocinética', cita: 'Ambrisentan is highly bound to plasma proteins (99%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral medio (sanos)',
      valor: '38',
      unidad: 'mL/min',
      analito: 'ambrisentán',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-ambrisentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean oral clearance of ambrisentan is 38 mL/min and 19 mL/min in healthy subjects and in PAH patients, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '15',
      unidad: 'h',
      analito: 'ambrisentán',
      ref: { f: 'dailymed-ambrisentan', sec: '12.3 · Farmacocinética', cita: 'Although ambrisentan has a 15-hour terminal half-life', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ambrisentan', '725d4e73-6c83-477a-adc6-0ae4a133a844', 'LETAIRIS (AMBRISENTAN) TABLET, FILM COATED', 'Letairis', '28', '2026-06-29', '2026-11-13'),
    rengPubchem(6918493, 'ambrisentan', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
