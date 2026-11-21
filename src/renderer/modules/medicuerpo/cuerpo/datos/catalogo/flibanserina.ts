import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'flibanserina',
    nombre: 'Flibanserina',
    clase: 'Agonista 5-HT1A y antagonista 5-HT2A (deseo sexual hipoactivo)',
    sinonimos: [ 'flibanserin', 'Addyi' ],
    formula: 'C20H21F3N4O',
    masaMolar: 390.4,
    smiles: 'C1CN(CCN1CCN2C3=CC=CC=C3NC2=O)C4=CC=CC(=C4)C(F)(F)F',
    inchikey: 'PPRRDFIXUUSXRA-UHFFFAOYSA-N',
    cid: 6918248,
    iupac: '3-[2-[4-[3-(trifluoromethyl)phenyl]piperazin-1-yl]ethyl]-1H-benzimidazol-2-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'flibanserina-oral',
      producto: 'ADDYI · comprimido recubierto con película',
      titular: 'SPROUT PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'hypromellose, unspecified',
        'croscarmellose sodium',
        'magnesium stearate',
        'talc',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de mujeres de menos de 65 años con trastorno de deseo sexual hipoactivo adquirido y generalizado que causa malestar marcado y no se debe a otra enfermedad, a la relación o a otros fármacos.',
        ref: {
          f: 'dailymed-flibanserina',
          sec: '1 · Indicaciones',
          cita: 'ADDYI is indicated for the treatment of women less than 65 years of age with acquired, generalized hypoactive sexual desire disorder (HSDD)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-flibanserina',
      advertencias: [
        {
          titulo: 'Hipotensión y síncope con alcohol',
          texto: 'Tomarla junto con alcohol en un tiempo cercano aumenta el riesgo de hipotensión grave y síncope.',
          organos: [],
          ref: {
            f: 'dailymed-flibanserina',
            sec: 'Advertencia destacada',
            cita: 'The use of ADDYI and alcohol together close in time increases the risk of severe hypotension and syncope',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Depresión del sistema nervioso central',
          texto: 'Puede causar somnolencia o sedación incluso sola; evitar actividades que exigen plena alerta hasta al menos seis horas después de cada dosis.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-flibanserina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Central Nervous System (CNS) Depression (e.g., Somnolence, Sedation) : Can occur with ADDYI alone',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión y síncope sin alcohol',
          texto: 'Ante un presíncope hay que tumbarse de inmediato y pedir ayuda si no cede.',
          organos: [],
          ref: {
            f: 'dailymed-flibanserina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Patients with pre-syncope should immediately lie supine and promptly seek medical help if symptoms do not resolve',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (2 % o más): mareo, somnolencia, náuseas, fatiga, insomnio, infección urinaria, ansiedad, sinusitis, estreñimiento y sequedad de boca.',
          '34084-4',
          'Most common adverse reactions (incidence ≥2%) are dizziness, somnolence, nausea, fatigue, insomnia, urinary tract infection, anxiety, sinusitis, constipation and dry mouth'
        ],
        [
          'En los ensayos en mujeres posmenopáusicas, 801 recibieron 100 mg al acostarse y 460 completaron 24 semanas.',
          '34084-4',
          '100 mg ADDYI at bedtime was administered to 801 postmenopausal women less than 65 years of age with HSDD, of whom 460 completed 24 weeks of treatment'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de mujeres de menos de 65 años con trastorno de deseo sexual hipoactivo adquirido y generalizado que causa malestar marcado y no se debe a otra enfermedad, a la relación o a otros fármacos.',
    actua: 'El mecanismo de acción en este trastorno no se conoce.',
    recorrido: 'La biodisponibilidad absoluta tras la toma oral es del 33 % y la mediana del tiempo hasta la Cmax fue de 0,75 horas. Tras una dosis oral marcada de 50 mg, el 44 % de la radiactividad se recuperó en la orina y el 51 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 100 mg, oval, pink, debossed on one side with "f100"',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta tras la toma oral es del 33 % y la mediana del tiempo hasta la Cmax fue de 0,75 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras la toma oral es del 33 % y la mediana del tiempo hasta la Cmax fue de 0,75 horas.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Absolute bioavailability of flibanserin following oral dosing is 33%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta la Cmax fue de 0,75 horas (0,75 a 4,0) en mujeres premenopáusicas sanas.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Median (range) time to reach Cmax was 0.75 (0.75 to 4.0) hours',
            codigo: '43682-4'
          },
          poblacion: 'mujeres premenopáusicas sanas'
        },
        {
          t: 'Los alimentos aumentaron la absorción: con comidas pobres, moderadas o ricas en grasas el AUC subió 1,18, 1,43 y 1,56 veces.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Low-, moderate-, and high-fat meals increased flibanserin AUC 0-inf by 1.18-, 1.43-, and 1.56-fold',
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
      ocurre: 'Alrededor del 98 % se une a las proteínas del suero humano, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 98 % se une a las proteínas del suero humano, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 98% of flibanserin is bound to human serum proteins, mainly to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Mecanismo no establecido',
        efecto: 'El mecanismo de acción en este trastorno no se conoce.',
        lugar: [],
        datos: [
          {
            t: 'El mecanismo de acción en este trastorno no se conoce.',
            ref: { f: 'dailymed-flibanserina', sec: '12.1 · Mecanismo de acción', cita: 'is not known', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2C19, a al menos 35 metabolitos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y, en menor medida, por la CYP2C19, a al menos 35 metabolitos.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Flibanserin is primarily metabolized by CYP3A4 and, to a lesser extent, by CYP2C19',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se metaboliza de forma extensa a al menos 35 metabolitos, la mayoría a concentraciones bajas en el plasma.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Flibanserin is extensively metabolized to at least 35 metabolites, most of them occurring in low concentrations in plasma',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '6,21-dihidroxi-flibanserina-6,21-disulfato y 6-hidroxi-flibanserina-6-sulfato',
          actividad: 'inactivo',
          nota: 'Alcanzan concentraciones plasmáticas parecidas a las de la flibanserina, pero son inactivos.',
          ref: { f: 'dailymed-flibanserina', sec: '12.3 · Farmacocinética', cita: 'These two metabolites are inactive', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada de 50 mg, el 44 % de la radiactividad se recuperó en la orina y el 51 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada de 50 mg, el 44 % de la radiactividad se recuperó en la orina y el 51 % en las heces.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: '44% of the total 14 C-flibanserin related radioactivity was recovered in urine, and 51% was recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de unas 11 horas.',
          ref: {
            f: 'dailymed-flibanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Flibanserin has a mean terminal half-life of approximately 11 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '33',
      unidad: '%',
      analito: 'flibanserina',
      ref: {
        f: 'dailymed-flibanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'Absolute bioavailability of flibanserin following oral dosing is 33%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la Cmax',
      valor: '0,75',
      unidad: 'h',
      analito: 'flibanserina',
      poblacion: 'mujeres premenopáusicas sanas',
      ref: {
        f: 'dailymed-flibanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'Median (range) time to reach Cmax was 0.75 (0.75 to 4.0) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '98 (aprox.)',
      unidad: '%',
      analito: 'flibanserina',
      ref: {
        f: 'dailymed-flibanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 98% of flibanserin is bound to human serum proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '11 (aprox.)',
      unidad: 'h',
      analito: 'flibanserina',
      ref: {
        f: 'dailymed-flibanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'Flibanserin has a mean terminal half-life of approximately 11 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '51',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'solución oral marcada de 50 mg',
      ref: {
        f: 'dailymed-flibanserina',
        sec: '12.3 · Farmacocinética',
        cita: '44% of the total 14 C-flibanserin related radioactivity was recovered in urine, and 51% was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-flibanserina', '3819daf3-e935-2c53-c527-e1d57922f394', 'ADDYI (FLIBANSERIN) TABLET, FILM COATED', 'ADDYI', '15', '2025-12-23', '2026-11-19'),
    rengPubchem(6918248, 'flibanserin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
