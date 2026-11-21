import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'abemaciclib',
    nombre: 'Abemaciclib',
    clase: 'Inhibidor de las cinasas dependientes de ciclinas 4 y 6 (CDK4/6)',
    sinonimos: [ 'abemaciclib', 'Verzenio' ],
    formula: 'C27H32F2N8',
    masaMolar: 506.6,
    smiles: 'CCN1CCN(CC1)CC2=CN=C(C=C2)NC3=NC=C(C(=N3)C4=CC5=C(C(=C4)F)N=C(N5C(C)C)C)F',
    inchikey: 'UZWDCWONPYILKI-UHFFFAOYSA-N',
    cid: 46220502,
    iupac: 'N-[5-[(4-ethylpiperazin-1-yl)methyl]-2-pyridinyl]-5-fluoro-4-(7-fluoro-2-methyl-3-propan-2-ylbenzimidazol-5-yl)pyrimidin-2-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'abemaciclib-oral',
      producto: 'Verzenio · comprimido',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 100 mg, 150 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'silicon dioxide',
        'sodium stearyl fumarate',
        'water',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'talc',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento del cáncer de mama HR+/HER2− precoz de alto riesgo (adyuvante) o avanzado, con hormonoterapia o en monoterapia.',
        ref: {
          f: 'dailymed-abemaciclib',
          sec: '1 · Indicaciones',
          cita: 'in combination with endocrine therapy (tamoxifen or an aromatase inhibitor) for the adjuvant treatment of adults with hormone receptor (HR)-positive',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-abemaciclib',
      advertencias: [
        {
          titulo: 'Diarrea',
          texto: 'Puede causar diarrea grave con deshidratación e infección; empezar antidiarreicos al primer signo.',
          organos: [],
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'VERZENIO can cause severe cases of diarrhea, associated with dehydration and infection',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Neutropenia',
          texto: 'Vigilar el hemograma antes de empezar, cada 2 semanas los 2 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor complete blood counts prior to the start of VERZENIO therapy, every 2 weeks for the first 2 months',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas antes de empezar y vigilarlas cada dos semanas los dos primeros meses.',
          organos: [],
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Perform liver function tests (LFTs) before initiating treatment with VERZENIO',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, infecciones, neutropenia, fatiga, dolor abdominal, náuseas, leucopenia, anemia y vómitos.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%) were diarrhea, infections, neutropenia, fatigue, abdominal pain, nausea, leukopenia, anemia, and vomiting'
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
    contiene: 'Comprimido: 50 mg, 100 mg, 150 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de mama HR+/HER2− precoz de alto riesgo (adyuvante) o avanzado, con hormonoterapia o en monoterapia.',
    actua: 'Inhibe CDK4 y CDK6; en células de cáncer de mama ER+ bloquea la fosforilación de Rb y la progresión de G1 a S, con senescencia y apoptosis.',
    recorrido: 'La biodisponibilidad absoluta tras 200 mg es del 45 % y la mediana del tmax de 8,0 horas; una comida grasa aumenta poco la exposición. Tras 150 mg marcados, alrededor del 81 % se recuperó en las heces, sobre todo como metabolitos, y el 3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '11 · Descripción',
            cita: 'Color mixture ingredients—polyvinyl alcohol, titanium dioxide, polyethylene glycol, talc, iron oxide yellow, and iron oxide red',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta tras 200 mg es del 45 % y la mediana del tmax de 8,0 horas; una comida grasa aumenta poco la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras 200 mg es del 45 % y la mediana del tmax de 8,0 horas; una comida grasa aumenta poco la exposición.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of abemaciclib after a single oral dose of 200 mg is 45% (19% CV)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax es de 8,0 horas (4,1 a 24,0).',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of abemaciclib is 8.0 hours (range: 4.1-24.0 hours)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La fracción unida a proteínas es del 96,3 %; el volumen de distribución sistémico es de unos 690,3 L y en el líquido cefalorraquídeo alcanza concentraciones comparables a las plasmáticas libres.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La fracción unida a proteínas es del 96,3 %; el volumen de distribución sistémico es de unos 690,3 L y en el líquido cefalorraquídeo alcanza concentraciones comparables a las plasmáticas libres.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean (standard deviation, SD) bound fraction was 96.3% ( 1.1 ) for abemaciclib',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución sistémico de unos 690,3 L.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean systemic volume of distribution is approximately 690.3 L (49% CV)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'CDK4 y CDK6',
        efecto: 'Inhibe CDK4 y CDK6; en células de cáncer de mama ER+ bloquea la fosforilación de Rb y la progresión de G1 a S, con senescencia y apoptosis.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe CDK4 y CDK6; en células de cáncer de mama ER+ bloquea la fosforilación de Rb y la progresión de G1 a S, con senescencia y apoptosis.',
            ref: {
              f: 'dailymed-abemaciclib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Abemaciclib is an inhibitor of cyclin-dependent kinases 4 and 6 (CDK4 and CDK6)',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro inhibió la fosforilación de Rb y bloqueó el paso de G1 a S, con senescencia y apoptosis.',
            ref: {
              f: 'dailymed-abemaciclib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'continuous exposure to abemaciclib inhibited Rb phosphorylation and blocked progression from G1 into S phase of the cell cycle, resulting in senescence and apoptosis',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolismo hepático es la vía principal de aclaramiento, sobre todo por la CYP3A4; la formación de N-desetilabemaciclib (M2) es la vía principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo hepático es la vía principal de aclaramiento, sobre todo por la CYP3A4; la formación de N-desetilabemaciclib (M2) es la vía principal.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'Hepatic metabolism is the main route of clearance for abemaciclib',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M2, M18 y M20',
          actividad: 'activo',
          nota: 'Metabolitos activos (N-desetil e hidroxi derivados).',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'concentrations of abemaciclib and its active metabolites M2 and M20 in cerebrospinal fluid are comparable to unbound plasma concentrations',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 150 mg marcados, alrededor del 81 % se recuperó en las heces, sobre todo como metabolitos, y el 3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 150 mg marcados, alrededor del 81 % se recuperó en las heces, sobre todo como metabolitos, y el 3 % en la orina.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 81% of the dose was recovered in feces and approximately 3% recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media es de 18,3 horas en pacientes.',
          ref: {
            f: 'dailymed-abemaciclib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean plasma elimination half-life for abemaciclib in patients was 18.3 hours (72% CV)',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '45',
      unidad: '%',
      analito: 'abemaciclib',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of abemaciclib after a single oral dose of 200 mg is 45% (19% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '8,0',
      unidad: 'h',
      analito: 'abemaciclib',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of abemaciclib is 8.0 hours (range: 4.1-24.0 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Fracción unida a proteínas',
      valor: '96,3',
      unidad: '%',
      analito: 'abemaciclib',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (standard deviation, SD) bound fraction was 96.3% ( 1.1 ) for abemaciclib',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución sistémico',
      valor: '690,3 (aprox.)',
      unidad: 'L',
      analito: 'abemaciclib',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean systemic volume of distribution is approximately 690.3 L (49% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '18,3',
      unidad: 'h',
      analito: 'abemaciclib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean plasma elimination half-life for abemaciclib in patients was 18.3 hours (72% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento hepático',
      valor: '26,0',
      unidad: 'L/h',
      analito: 'abemaciclib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-abemaciclib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean hepatic clearance (CL) of abemaciclib in patients was 26.0 L/h (51% CV)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '81 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 150 mg',
      ref: { f: 'dailymed-abemaciclib', sec: '12.3 · Farmacocinética', cita: 'approximately 81% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-abemaciclib', 'be4bc0de-0fdc-4d46-8d25-be43c79e6a06', 'VERZENIO (ABEMACICLIB) TABLET', 'Verzenio', '31', '2026-10-01', '2026-11-19'),
    rengPubchem(46220502, 'abemaciclib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
