import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ivacaftor',
    nombre: 'Ivacaftor',
    clase: 'Potenciador de la proteína CFTR',
    sinonimos: [ 'ivacaftor', 'Kalydeco' ],
    formula: 'C24H28N2O3',
    masaMolar: 392.5,
    smiles: 'CC(C)(C)C1=CC(=C(C=C1NC(=O)C2=CNC3=CC=CC=C3C2=O)O)C(C)(C)C',
    inchikey: 'PURKAOJPTOLRMP-UHFFFAOYSA-N',
    cid: 16220172,
    iupac: 'N-(2,4-ditert-butyl-5-hydroxyphenyl)-4-oxo-1H-quinoline-3-carboxamide',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'ivacaftor-oral',
      producto: 'Kalydeco · comprimido recubierto con película',
      titular: 'VERTEX PHARMACEUTICALS INCORPORATED',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromellose acetate succinate 06081224 (3 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'carnauba wax',
        'fd&c blue no. 2',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'ammonia',
        'ferrosoferric oxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de la fibrosis quística en pacientes desde 1 mes de edad con al menos una mutación del gen CFTR que responda a la potenciación por ivacaftor.',
        ref: {
          f: 'dailymed-ivacaftor',
          sec: '1 · Indicaciones',
          cita: 'KALYDECO is indicated for the treatment of cystic fibrosis (CF) in patients aged 1 month and older who have at least one mutation in the CFTR gene that is responsive to ivacaftor potentiation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ivacaftor',
      advertencias: [
        {
          titulo: 'Elevación de transaminasas',
          texto: 'Medir ALT y AST antes de empezar, cada 3 meses el primer año y después cada año; interrumpir si superan 5 veces el límite superior.',
          organos: [],
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '5 · Advertencias y precauciones',
            cita: 'Transaminases (ALT and AST) should be assessed prior to initiating KALYDECO, every 3 months during the first year of treatment, and annually thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (8 % o más en FQ con la mutación G551D): cefalea, dolor orofaríngeo, infección respiratoria alta, congestión nasal, dolor abdominal, nasofaringitis, diarrea, exantema, náuseas y mareo.',
          '34084-4',
          'most common adverse drug reactions to KALYDECO (≥8% of patients with CF who have a G551D mutation in the CFTR gene) were headache, oropharyngeal pain, upper respiratory tract infection, nasal congestion'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la fibrosis quística en pacientes desde 1 mes de edad con al menos una mutación del gen CFTR que responda a la potenciación por ivacaftor.',
    actua: 'Potencia la proteína CFTR, un canal de cloruro de la superficie de las células epiteliales de varios órganos, aumentando la probabilidad de apertura del canal y el transporte de cloruro.',
    recorrido: 'La exposición aumenta entre 2,5 y 4 veces con comida que contenga grasa, por lo que se toma con ella; el tmax con alimentos es de unas 4 horas. La mayor parte (87,8 %) se elimina en las heces tras su transformación metabólica; solo el 6,6 % de la radiactividad se recuperó en la orina.'
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
            f: 'dailymed-ivacaftor',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 150 mg, light blue, film-coated, oblong-shaped tablets',
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
      ocurre: 'La exposición aumenta entre 2,5 y 4 veces con comida que contenga grasa, por lo que se toma con ella; el tmax con alimentos es de unas 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La exposición aumenta entre 2,5 y 4 veces con comida que contenga grasa, por lo que se toma con ella; el tmax con alimentos es de unas 4 horas.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'The exposure of ivacaftor increased approximately 2.5- to 4-fold when given with food that contains fat',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax con alimentos es de unas 4,0 horas.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (range) T max is approximately 4.0 (3.0; 6.0) hours in the fed state',
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
      ocurre: 'Se une en alrededor del 99 % a las proteínas del plasma, sobre todo a la alfa-1-glucoproteína ácida y a la albúmina; no se une a los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 99 % a las proteínas del plasma, sobre todo a la alfa-1-glucoproteína ácida y a la albúmina; no se une a los glóbulos rojos.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'Ivacaftor is approximately 99% bound to plasma proteins, primarily to alpha 1-acid glycoprotein and albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio fue de 353 L en voluntarios sanos con alimentos.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean (±SD) for apparent volume of distribution was 353 (122) L',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        }
      ],
      accion: {
        diana: 'Canal de cloruro CFTR',
        efecto: 'Potencia la proteína CFTR, un canal de cloruro de la superficie de las células epiteliales de varios órganos, aumentando la probabilidad de apertura del canal y el transporte de cloruro.',
        lugar: [],
        datos: [
          {
            t: 'Potencia la proteína CFTR, un canal de cloruro de la superficie de las células epiteliales de varios órganos, aumentando la probabilidad de apertura del canal y el transporte de cloruro.',
            ref: {
              f: 'dailymed-ivacaftor',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ivacaftor facilitates increased chloride transport by potentiating the channel open probability (or gating) of CFTR protein located at the cell surface',
              codigo: '43679-0'
            }
          },
          {
            t: 'La CFTR es un canal de cloruro de la superficie de las células epiteliales de múltiples órganos.',
            ref: {
              f: 'dailymed-ivacaftor',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The CFTR protein is a chloride channel present at the surface of epithelial cells in multiple organs',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente, sobre todo por la CYP3A; M1 y M6 son sus dos metabolitos principales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente, sobre todo por la CYP3A; M1 y M6 son sus dos metabolitos principales.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro and clinical studies indicate that ivacaftor is primarily metabolized by CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1',
          actividad: 'activo',
          nota: 'Metabolito principal con alrededor de un sexto de la potencia del ivacaftor.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'M1 has approximately one-sixth the potency of ivacaftor and is considered pharmacologically active',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La mayor parte (87,8 %) se elimina en las heces tras su transformación metabólica; solo el 6,6 % de la radiactividad se recuperó en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La mayor parte (87,8 %) se elimina en las heces tras su transformación metabólica; solo el 6,6 % de la radiactividad se recuperó en la orina.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, the majority of ivacaftor (87.8%) is eliminated in the feces after metabolic conversion',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente fue de unas 12 horas tras una dosis única.',
          ref: {
            f: 'dailymed-ivacaftor',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal half-life was approximately 12 hours following a single dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax con alimentos',
      valor: '4,0 (aprox.)',
      unidad: 'h',
      analito: 'ivacaftor',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-ivacaftor',
        sec: '12.3 · Farmacocinética',
        cita: 'The median (range) T max is approximately 4.0 (3.0; 6.0) hours in the fed state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'ivacaftor',
      ref: { f: 'dailymed-ivacaftor', sec: '12.3 · Farmacocinética', cita: 'Ivacaftor is approximately 99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '353',
      unidad: 'L',
      analito: 'ivacaftor',
      poblacion: 'voluntarios sanos',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-ivacaftor',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (±SD) for apparent volume of distribution was 353 (122) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'ivacaftor',
      ref: {
        f: 'dailymed-ivacaftor',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal half-life was approximately 12 hours following a single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '17,3',
      unidad: 'L/h',
      analito: 'ivacaftor',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-ivacaftor',
        sec: '12.3 · Farmacocinética',
        cita: 'The CL/F (SD) for the 150 mg dose was 17.3 (8.4) L/hr in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada en las heces',
      valor: '87,8',
      unidad: '% de la dosis',
      analito: 'ivacaftor y metabolitos',
      ref: {
        f: 'dailymed-ivacaftor',
        sec: '12.3 · Farmacocinética',
        cita: 'the majority of ivacaftor (87.8%) is eliminated in the feces after metabolic conversion',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ivacaftor', '0ab0c9f8-3eee-4e0f-9f3f-c1e16aaffe25', 'KALYDECO (IVACAFTOR) TABLET, FILM COATED KALYDECO (IVACAFTOR) GRANULE', 'Kalydeco', '36', '2026-03-30', '2026-11-19'),
    rengPubchem(16220172, 'ivacaftor', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
