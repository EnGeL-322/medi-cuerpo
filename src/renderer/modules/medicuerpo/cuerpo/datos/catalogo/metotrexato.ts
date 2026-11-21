import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metotrexato',
    nombre: 'Metotrexato',
    clase: 'Antimetabolito (inhibidor de la dihidrofolato reductasa)',
    sinonimos: [ 'methotrexate', 'Trexall' ],
    formula: 'C20H22N8O5',
    masaMolar: 454.4,
    smiles: 'CN(CC1=CN=C2C(=N1)C(=NC(=N2)N)N)C3=CC=C(C=C3)C(=O)N[C@@H](CCC(=O)O)C(=O)O',
    inchikey: 'FBOZXECLQNJBKD-ZDUSSCGKSA-N',
    cid: 126941,
    iupac: '(2S)-2-[[4-[(2,4-diaminopteridin-6-yl)methyl-methylamino]benzoyl]amino]pentanedioic acid',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'metotrexato-oral',
      producto: 'Trexall · comprimido recubierto con película',
      titular: "TEVA WOMEN'S HEALTH LLC",
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 7.5 mg, 10 mg o 15 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Metotrexato sódico', ref: { f: 'dailymed-metotrexato', sec: '11 · Descripción', cita: 'methotrexate sodium', codigo: '34089-3' } },
      excipientes: [
        'anhydrous lactose',
        'crospovidone (15 mpa.s at 5%)',
        'hypromellose 2910 (3 mpa.s)',
        'hypromellose 2910 (6 mpa.s)',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol 400',
        'polysorbate 80',
        'starch, corn',
        'sodium carbonate monohydrate',
        'talc',
        'titanium dioxide',
        'fd&c yellow no. 6',
        'd&c yellow no. 10 aluminum lake',
        'fd&c blue no. 1 aluminum lake'
      ],
      usos: {
        t: 'Leucemia linfoblástica aguda (mantenimiento), micosis fungoide y linfoma no Hodgkin, y en adultos artritis reumatoide y psoriasis grave, entre otros usos de la etiqueta.',
        ref: {
          f: 'dailymed-metotrexato',
          sec: '1 · Indicaciones',
          cita: 'Treatment of adults and pediatric patients with acute lymphoblastic leukemia (ALL) as part of a combination chemotherapy maintenance regimen',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-metotrexato',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal, incluida la muerte del feto.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-metotrexato',
            sec: 'Advertencia destacada',
            cita: 'Methotrexate tablets can cause embryo-fetal toxicity, including fetal death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Mielosupresión',
          texto: 'Suprime la formación de células de la sangre y puede causar pancitopenia, anemia, leucopenia, neutropenia y trombocitopenia graves.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-metotrexato',
            sec: '5 · Advertencias y precauciones',
            cita: 'suppresses hematopoiesis and can cause severe and life-threatening pancytopenia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la artritis reumatoide: alteración de las pruebas hepáticas (15 %) y náuseas o vómitos (10 %).',
          '34084-4',
          'Elevated liver tests 15%, nausea/vomiting 10%'
        ],
        [
          'También estomatitis, trombocitopenia, erupción con picor, diarrea, caída del pelo y leucopenia.',
          '34084-4',
          'Rash/pruritus/dermatitis, diarrhea, alopecia, leukopenia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg, 7.5 mg, 10 mg o 15 mg por comprimido, según la etiqueta; el activo va como metotrexato sódico. Los excipientes no son el principio activo.',
    usos: 'Leucemia linfoblástica aguda (mantenimiento), micosis fungoide y linfoma no Hodgkin, y en adultos artritis reumatoide y psoriasis grave, entre otros usos de la etiqueta.',
    actua: 'Inhibe la dihidrofolato reductasa: sin tetrahidrofolatos no se pueden fabricar purinas ni timidilato, así que se frenan la síntesis y reparación del ADN y la división celular. Los tejidos que se dividen mucho son los más sensibles.',
    recorrido: 'Con dosis de 30 mg/m² o menos, la biodisponibilidad media ronda el 60 % y el pico plasmático llega entre 0,75 y 6 horas; la comida retrasa la absorción y baja el pico. Sale sobre todo por el riñón (filtración glomerular y secreción tubular activa); la excreción biliar es del 10 % de la dosis o menos. Su semivida es de 3 a 10 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película y ranurado.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película y ranurado.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '3 · Formas y concentraciones',
            cita: 'Green, oval-shaped, film-coated, scored, biconvex tablet',
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
      ocurre: 'Con dosis de 30 mg/m² o menos, la biodisponibilidad media ronda el 60 % y el pico plasmático llega entre 0,75 y 6 horas; la comida retrasa la absorción y baja el pico.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con dosis de 30 mg/m² o menos, la biodisponibilidad media ronda el 60 % y el pico plasmático llega entre 0,75 y 6 horas; la comida retrasa la absorción y baja el pico.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'At doses of 30 mg/m 2 or less, the mean bioavailability is approximately 60%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico plasmático entre 0,75 y 6 horas tras la toma oral.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations are reached within 0.75 to 6 hours following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida retrasa la absorción y reduce el pico.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Food has been shown to delay absorption and reduce peak concentration',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'En el suero, alrededor del 50 % va unido a proteínas; pequeñas cantidades de poliglutamatos pueden quedarse mucho tiempo en los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'En el suero, alrededor del 50 % va unido a proteínas; pequeñas cantidades de poliglutamatos pueden quedarse mucho tiempo en los tejidos.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Methotrexate in serum is approximately 50% protein bound',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Dihidrofolato reductasa',
        efecto: 'Inhibe la dihidrofolato reductasa: sin tetrahidrofolatos no se pueden fabricar purinas ni timidilato, así que se frenan la síntesis y reparación del ADN y la división celular. Los tejidos que se dividen mucho son los más sensibles.',
        lugar: [ 'medula-osea', 'tejidos' ],
        datos: [
          {
            t: 'Inhibe la dihidrofolato reductasa: sin tetrahidrofolatos no se pueden fabricar purinas ni timidilato, así que se frenan la síntesis y reparación del ADN y la división celular. Los tejidos que se dividen mucho son los más sensibles.',
            ref: {
              f: 'dailymed-metotrexato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Therefore, methotrexate interferes with DNA synthesis, repair, and cellular replication',
              codigo: '43679-0'
            }
          },
          {
            t: 'Inhibe la dihidrofolato reductasa.',
            ref: {
              f: 'dailymed-metotrexato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Methotrexate inhibits dihydrofolic acid reductase',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'tejidos', 'luz-intestinal' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La flora intestinal transforma una parte tras la toma oral; en el hígado y dentro de las células forma poliglutamatos activos, y en menor medida 7-hidroximetotrexato, también activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La flora intestinal transforma una parte tras la toma oral; en el hígado y dentro de las células forma poliglutamatos activos, y en menor medida 7-hidroximetotrexato, también activo.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Methotrexate primarily undergoes hepatic and intracellular metabolism to active polyglutamated forms',
            codigo: '43682-4'
          }
        },
        {
          t: 'La flora intestinal metaboliza una parte tras la toma oral.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Methotrexate is partially metabolized by intestinal flora after oral administration',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Poliglutamatos de metotrexato',
          actividad: 'activo',
          nota: 'Pueden volver a convertirse en metotrexato.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'to active polyglutamated forms which can be converted back to methotrexate by hydrolase enzymes',
            codigo: '43682-4'
          }
        },
        {
          nombre: '7-hidroximetotrexato',
          actividad: 'activo',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Methotrexate also undergoes minor metabolism to active 7-hydroxymethotrexate',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo por el riñón (filtración glomerular y secreción tubular activa); la excreción biliar es del 10 % de la dosis o menos. Su semivida es de 3 a 10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo por el riñón (filtración glomerular y secreción tubular activa); la excreción biliar es del 10 % de la dosis o menos. Su semivida es de 3 a 10 horas.',
          ref: {
            f: 'dailymed-metotrexato',
            sec: '12.3 · Farmacocinética',
            cita: 'Methotrexate primarily undergoes renal excretion by glomerular filtration and active tubular secretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad media',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'metotrexato',
      condiciones: 'dosis de 30 mg/m² o menos',
      ref: { f: 'dailymed-metotrexato', sec: '12.3 · Farmacocinética', cita: 'the mean bioavailability is approximately 60%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '0,75-6',
      unidad: 'h',
      analito: 'metotrexato',
      ref: {
        f: 'dailymed-metotrexato',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations are reached within 0.75 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas en el suero',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'metotrexato',
      ref: { f: 'dailymed-metotrexato', sec: '12.3 · Farmacocinética', cita: 'Methotrexate in serum is approximately 50% protein bound', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '3-10',
      unidad: 'h',
      analito: 'metotrexato',
      ref: {
        f: 'dailymed-metotrexato',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of methotrexate is approximately 3 to 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excreción biliar',
      valor: '≤ 10',
      unidad: '% de la dosis',
      analito: 'metotrexato',
      ref: {
        f: 'dailymed-metotrexato',
        sec: '12.3 · Farmacocinética',
        cita: 'Biliary excretion accounts for ≤10% of the methotrexate dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metotrexato', 'e942f8db-510f-44d6-acb5-b822196f5e8c', 'TREXALL (METHOTREXATE) TABLET, FILM COATED', 'Trexall', '14', '2026-06-29', '2026-11-12'),
    rengPubchem(126941, 'methotrexate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
