import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rufinamida',
    nombre: 'Rufinamida',
    clase: 'Antiepiléptico (modulador de los canales de sodio)',
    sinonimos: [ 'rufinamide', 'Banzel' ],
    formula: 'C10H8F2N4O',
    masaMolar: 238.19,
    smiles: 'C1=CC(=C(C(=C1)F)CN2C=C(N=N2)C(=O)N)F',
    inchikey: 'POGQSBRIGCQNEG-UHFFFAOYSA-N',
    cid: 129228,
    iupac: '1-[(2,6-difluorophenyl)methyl]triazole-4-carboxamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'rufinamida-oral',
      producto: 'Banzel · comprimido recubierto con película',
      titular: 'EISAI INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg o 400 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'starch, corn',
        'croscarmellose sodium',
        'hypromellose 2208 (3 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'sodium lauryl sulfate',
        'hypromellose 2910 (3 mpa.s)',
        'ferric oxide red',
        'polyethylene glycol 8000',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento complementario de las crisis asociadas al síndrome de Lennox-Gastaut en pacientes desde 1 año y en adultos.',
        ref: {
          f: 'dailymed-rufinamida',
          sec: '1 · Indicaciones',
          cita: 'BANZEL is indicated for adjunctive treatment of seizures associated with Lennox-Gastaut Syndrome in pediatric patients 1 year of age and older and in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rufinamida',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antiepilépticos, incluido este, aumentan el riesgo de pensamientos o conductas suicidas con cualquier indicación.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-rufinamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Antiepileptic drugs (AEDs), including BANZEL, increase the risk of suicidal thoughts or behavior in patients taking these drugs for any indication',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones del sistema nervioso central',
          texto: 'Se ha asociado con reacciones adversas relacionadas con el sistema nervioso central.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-rufinamida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use of BANZEL has been associated with central nervous system-related adverse reactions',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más y más que con placebo): cefalea, mareo, fatiga, somnolencia y náuseas.',
          '34084-4',
          'Most common adverse reactions (≥ 10% and greater than placebo) were headache, dizziness, fatigue, somnolence, and nausea'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la leucopenia.',
          '34084-4',
          'Leukopenia [see Warnings and Precautions ( 5.7 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg o 400 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de las crisis asociadas al síndrome de Lennox-Gastaut en pacientes desde 1 año y en adultos.',
    actua: 'Su mecanismo se desconoce; los estudios in vitro sugieren que modula la actividad de los canales de sodio y, en concreto, prolonga el estado inactivo del canal.',
    recorrido: 'Se absorbe bien tras la administración oral, aunque la velocidad es relativamente lenta y la extensión de la absorción disminuye al aumentar la dosis. La excreción renal es la vía principal para el material relacionado con el fármaco: el 85 % de la dosis; al menos el 66 % salió como el metabolito ácido y el 2 %, como rufinamida.'
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
            f: 'dailymed-rufinamida',
            sec: '3 · Formas y concentraciones',
            cita: 'Film-coated Tablets: 200 mg (pink) and 400 mg (pink)',
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
      ocurre: 'Se absorbe bien tras la administración oral, aunque la velocidad es relativamente lenta y la extensión de la absorción disminuye al aumentar la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien tras la administración oral, aunque la velocidad es relativamente lenta y la extensión de la absorción disminuye al aumentar la dosis.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'BANZEL is well absorbed after oral administration. However, the rate of absorption is relatively slow and the extent of absorption is decreased as dose is increased',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se producen entre las 4 y las 6 horas, tanto en ayunas como tras comer.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations occur between 4 and 6 hours (T max ) both under fed and fasted conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimento, la extensión de la absorción aumentó un 34 % y la exposición máxima un 56 % tras una dosis única de 400 mg.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Food increased the extent of absorption of rufinamide in healthy volunteers by 34% and increased peak exposure by 56% after a single dose of 400 mg tablet',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con alimento'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Solo una pequeña fracción (34 %) se une a las proteínas del suero humano, sobre todo a la albúmina (27 %); se distribuye de forma uniforme entre eritrocitos y plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Solo una pequeña fracción (34 %) se une a las proteínas del suero humano, sobre todo a la albúmina (27 %); se distribuye de forma uniforme entre eritrocitos y plasma.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Only a small fraction of rufinamide (34%) is bound to human serum proteins, predominantly to albumin (27%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente fue de unos 50 L con 3200 mg al día.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution was about 50 L at 3200 mg per day',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio',
        efecto: 'Su mecanismo se desconoce; los estudios in vitro sugieren que modula la actividad de los canales de sodio y, en concreto, prolonga el estado inactivo del canal.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo se desconoce; los estudios in vitro sugieren que modula la actividad de los canales de sodio y, en concreto, prolonga el estado inactivo del canal.',
            ref: {
              f: 'dailymed-rufinamida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the principal mechanism of action of rufinamide is modulation of the activity of sodium channels and, in particular, prolongation of the inactive state of the channel',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa y no tiene metabolitos activos; la vía principal es la hidrólisis del grupo carboxamida por carboxilesterasas, que no depende del citocromo P450.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa y no tiene metabolitos activos; la vía principal es la hidrólisis del grupo carboxamida por carboxilesterasas, que no depende del citocromo P450.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Rufinamide is extensively metabolized but has no active metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La vía principal es la hidrólisis del grupo carboxamida por carboxilesterasas, que da el derivado ácido CGP 47292.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary biotransformation pathway is carboxylesterase(s) mediated hydrolysis of the carboxamide group to the acid derivative CGP 47292',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado ácido CGP 47292',
          actividad: 'inactivo',
          nota: 'Metabolito principal, sin actividad.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Rufinamide is extensively metabolized but has no active metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción renal es la vía principal para el material relacionado con el fármaco: el 85 % de la dosis; al menos el 66 % salió como el metabolito ácido y el 2 %, como rufinamida.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción renal es la vía principal para el material relacionado con el fármaco: el 85 % de la dosis; al menos el 66 % salió como el metabolito ácido y el 2 %, como rufinamida.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal excretion is the predominant route of elimination for drug related material, accounting for 85% of the dose based on a radiolabeled study',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación plasmática es de aproximadamente 6-10 horas en sujetos sanos y en pacientes con epilepsia.',
          ref: {
            f: 'dailymed-rufinamida',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma elimination half-life is approximately 6-10 hours in healthy subjects and patients with epilepsy',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta las concentraciones plasmáticas máximas',
      valor: '4-6',
      unidad: 'h',
      analito: 'rufinamida',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations occur between 4 and 6 hours (T max ) both under fed and fasted conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Extensión de la absorción (según la orina)',
      valor: '≥ 85',
      unidad: '%',
      analito: 'rufinamida',
      condiciones: 'dosis única de 600 mg con comida',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'the extent of absorption was at least 85% following oral administration of a single dose of 600 mg rufinamide tablet under fed conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas séricas',
      valor: '34',
      unidad: '%',
      analito: 'rufinamida',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'Only a small fraction of rufinamide (34%) is bound to human serum proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '50 (aprox.)',
      unidad: 'L',
      analito: 'rufinamida',
      condiciones: 'con 3200 mg al día',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution was about 50 L at 3200 mg per day',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '6-10 (aprox.)',
      unidad: 'h',
      analito: 'rufinamida',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma elimination half-life is approximately 6-10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por vía renal',
      valor: '85',
      unidad: '% de la dosis',
      analito: 'material relacionado con el fármaco',
      condiciones: 'estudio con rufinamida marcada',
      ref: {
        f: 'dailymed-rufinamida',
        sec: '12.3 · Farmacocinética',
        cita: 'accounting for 85% of the dose based on a radiolabeled study',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rufinamida', '0a3fa925-1abd-458a-bd57-4ae780a1ef2d', 'BANZEL (RUFINAMIDE) TABLET, FILM COATED BANZEL (RUFINAMIDE) SUSPENSION', 'Banzel', '45', '2024-11-18', '2026-11-15'),
    rengPubchem(129228, 'rufinamide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
