import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'finerenona',
    nombre: 'Finerenona',
    clase: 'Antagonista no esteroideo del receptor de mineralocorticoides',
    sinonimos: [ 'finerenone', 'Kerendia' ],
    formula: 'C21H22N4O3',
    masaMolar: 378.4,
    smiles: 'CCOC1=NC=C(C2=C1[C@@H](C(=C(N2)C)C(=O)N)C3=C(C=C(C=C3)C#N)OC)C',
    inchikey: 'BTBHLEZXCOBLCY-QGZVFWFLSA-N',
    cid: 60150535,
    iupac: '(4S)-4-(4-cyano-2-methoxyphenyl)-5-ethoxy-2,8-dimethyl-1,4-dihydro-1,6-naphthyridine-3-carboxamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'finerenona-oral',
      producto: 'Kerendia · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 20 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hypromellose, unspecified',
        'magnesium stearate',
        'sodium lauryl sulfate'
      ],
      usos: {
        t: 'Reducir, en adultos con enfermedad renal crónica asociada a diabetes tipo 2, el riesgo de enfermedad renal terminal, muerte cardiovascular, infarto de miocardio no mortal y hospitalización por insuficiencia cardíaca (la etiqueta incluye también el descenso sostenido del filtrado glomerular).',
        ref: {
          f: 'dailymed-finerenona',
          sec: '1 · Indicaciones',
          cita: 'end-stage kidney disease, cardiovascular death, non-fatal myocardial infarction, and hospitalization for heart failure in adults with chronic kidney disease (CKD) associated with Type 2 diabetes mellitus (T2DM)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-finerenona',
      advertencias: [
        {
          titulo: 'Hiperpotasemia',
          texto: 'Puede causar hiperpotasemia; el riesgo aumenta al empeorar la función renal y es mayor con el potasio basal alto u otros factores de riesgo.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-finerenona',
            sec: '5 · Advertencias y precauciones',
            cita: 'The risk for developing hyperkalemia increases with decreasing kidney function and is greater in patients with higher baseline potassium levels or other risk factors for hyperkalemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Empeoramiento de la función renal en la insuficiencia cardíaca',
          texto: 'Puede empeorar la función renal en pacientes con insuficiencia cardíaca; rara vez se han visto acontecimientos graves que requirieron hospitalización.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-finerenona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Kerendia can cause worsening of renal function in patients with heart failure',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones con una frecuencia del 1 % o más y superior al placebo fueron hiperpotasemia, hipotensión e hiponatremia.',
          '34084-4',
          'Adverse reactions occurring in ≥ 1% of patients on Kerendia and more frequently than placebo are hyperkalemia, hypotension, and hyponatremia'
        ],
        [
          'En los dos estudios en enfermedad renal crónica con diabetes tipo 2, la hospitalización por hiperpotasemia fue del 0,9 % con finerenona frente al 0,2 % con placebo.',
          '34084-4',
          'Hospitalization due to hyperkalemia for the Kerendia group was 0.9% vs 0.2% in the placebo group across both studies'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg o 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir, en adultos con enfermedad renal crónica asociada a diabetes tipo 2, el riesgo de enfermedad renal terminal, muerte cardiovascular, infarto de miocardio no mortal y hospitalización por insuficiencia cardíaca (la etiqueta incluye también el descenso sostenido del filtrado glomerular).',
    actua: 'Antagonista selectivo y no esteroideo del receptor de mineralocorticoides: bloquea la reabsorción de sodio mediada por el receptor y su sobreactivación en tejidos epiteliales (como el riñón) y no epiteliales (como el corazón y los vasos sanguíneos).',
    recorrido: 'Se absorbe por completo tras la administración oral, pero sufre un metabolismo que deja una biodisponibilidad absoluta del 44 %. Alrededor del 80 % de la dosis se excreta en la orina (menos del 1 % sin cambios) y alrededor del 20 % en las heces (menos del 0,2 % sin cambios).'
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
            f: 'dailymed-finerenona',
            sec: '3 · Formas y concentraciones',
            cita: 'Kerendia is available as film-coated, oblong tablets in three strengths',
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
      ocurre: 'Se absorbe por completo tras la administración oral, pero sufre un metabolismo que deja una biodisponibilidad absoluta del 44 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe por completo tras la administración oral, pero sufre un metabolismo que deja una biodisponibilidad absoluta del 44 %.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'Finerenone is completely absorbed after oral administration but undergoes metabolism resulting in absolute bioavailability of 44%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La concentración máxima se alcanza entre 0,5 y 1,25 horas después de la dosis.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'Finerenone C max was achieved between 0.5 and 1.25 hours after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y calorías no hubo un efecto clínicamente significativo en el AUC.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'There was no clinically significant effect on finerenone AUC following administration with high fat, high calorie food',
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
      ocurre: 'In vitro se une en un 92 % a las proteínas del plasma, sobre todo a la albúmina sérica; el volumen de distribución en estado estacionario es de 52,6 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 92 % a las proteínas del plasma, sobre todo a la albúmina sérica; el volumen de distribución en estado estacionario es de 52,6 L.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of finerenone is 92%, primarily to serum albumin, in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 52,6 L.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution at steady-state (Vss) of finerenone is 52.6 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de mineralocorticoides',
        efecto: 'Antagonista selectivo y no esteroideo del receptor de mineralocorticoides: bloquea la reabsorción de sodio mediada por el receptor y su sobreactivación en tejidos epiteliales (como el riñón) y no epiteliales (como el corazón y los vasos sanguíneos).',
        lugar: [ 'rinones', 'corazon', 'vasos' ],
        datos: [
          {
            t: 'Antagonista selectivo y no esteroideo del receptor de mineralocorticoides: bloquea la reabsorción de sodio mediada por el receptor y su sobreactivación en tejidos epiteliales (como el riñón) y no epiteliales (como el corazón y los vasos sanguíneos).',
            ref: {
              f: 'dailymed-finerenona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Finerenone blocks MR mediated sodium reabsorption and MR overactivation in both epithelial (e.g., kidney) and nonepithelial (e.g., heart, and blood vessels) tissues',
              codigo: '43679-0'
            }
          },
          {
            t: 'Se cree que la sobreactivación del receptor contribuye a la fibrosis y la inflamación.',
            ref: {
              f: 'dailymed-finerenona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'MR overactivation is thought to contribute to fibrosis and inflammation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 (90 %) y, en menor medida, por la CYP2C8 (10 %), a metabolitos inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 (90 %) y, en menor medida, por la CYP2C8 (10 %), a metabolitos inactivos.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'Finerenone is primarily metabolized by CYP3A4 (90%) and to a lesser extent by CYP2C8 (10%) to inactive metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos de la finerenona',
          actividad: 'inactivo',
          nota: 'Los metabolitos que forman la CYP3A4 y la CYP2C8 son inactivos.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'to a lesser extent by CYP2C8 (10%) to inactive metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 80 % de la dosis se excreta en la orina (menos del 1 % sin cambios) y alrededor del 20 % en las heces (menos del 0,2 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 80 % de la dosis se excreta en la orina (menos del 1 % sin cambios) y alrededor del 20 % en las heces (menos del 0,2 % sin cambios).',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'About 80% of the administered dose is excreted in urine (<1% as unchanged) and approximately 20% in feces (< 0.2% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 2 a 3 horas y el aclaramiento sanguíneo sistémico de unos 25 L/h.',
          ref: {
            f: 'dailymed-finerenona',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of finerenone is about 2 to 3 hours, and the systemic blood clearance is about 25 L/h',
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
      valor: '44',
      unidad: '%',
      analito: 'finerenona',
      ref: {
        f: 'dailymed-finerenona',
        sec: '12.3 · Farmacocinética',
        cita: 'undergoes metabolism resulting in absolute bioavailability of 44%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '0,5-1,25',
      unidad: 'h',
      analito: 'finerenona',
      ref: {
        f: 'dailymed-finerenona',
        sec: '12.3 · Farmacocinética',
        cita: 'Finerenone C max was achieved between 0.5 and 1.25 hours after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '52,6',
      unidad: 'L',
      analito: 'finerenona',
      ref: {
        f: 'dailymed-finerenona',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution at steady-state (Vss) of finerenone is 52.6 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '92',
      unidad: '%',
      analito: 'finerenona',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-finerenona',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of finerenone is 92%, primarily to serum albumin, in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '2-3 (aprox.)',
      unidad: 'h',
      analito: 'finerenona',
      ref: {
        f: 'dailymed-finerenona',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of finerenone is about 2 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sanguíneo sistémico',
      valor: '25 (aprox.)',
      unidad: 'L/h',
      analito: 'finerenona',
      ref: { f: 'dailymed-finerenona', sec: '12.3 · Farmacocinética', cita: 'the systemic blood clearance is about 25 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'finerenona y metabolitos',
      ref: { f: 'dailymed-finerenona', sec: '12.3 · Farmacocinética', cita: 'About 80% of the administered dose is excreted in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-finerenona', 'fc726765-5d5a-4d6e-b037-b847bda9fb7c', 'KERENDIA (FINERENONE) TABLET, FILM COATED KERENDIA (FINERENONE) TABLET', 'Kerendia', '15', '2026-09-29', '2026-11-18'),
    rengPubchem(60150535, 'finerenone', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
