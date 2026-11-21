import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vonoprazan',
    nombre: 'Vonoprazán',
    clase: 'Bloqueador ácido competitivo del potasio (inhibidor de la H+,K+-ATPasa gástrica)',
    sinonimos: [ 'vonoprazan', 'Voquezna' ],
    formula: 'C17H16FN3O2S',
    masaMolar: 345.4,
    smiles: 'CNCC1=CN(C(=C1)C2=CC=CC=C2F)S(=O)(=O)C3=CN=CC=C3',
    inchikey: 'BFDBKMOZYNOTPK-UHFFFAOYSA-N',
    cid: 15981397,
    iupac: '1-[5-(2-fluorophenyl)-1-pyridin-3-ylsulfonylpyrrol-3-yl]-N-methylmethanamine',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'vonoprazan-oral',
      producto: 'VOQUEZNA · comprimido',
      titular: 'PHATHOM PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 o 20 mg de vonoprazán (equivalentes a 13,36 o 26,72 mg de fumarato de vonoprazán) por comprimido recubierto con película, según la etiqueta',
      sal: { nombre: 'Fumarato de vonoprazán', ref: { f: 'dailymed-vonoprazan', sec: '11 · Descripción', cita: 'vonoprazan fumarate', codigo: '34089-3' } },
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose, unspecified',
        'fumaric acid',
        'ascorbic acid',
        'croscarmellose sodium',
        'magnesium stearate',
        'hypromellose, unspecified',
        'polyethylene glycol 8000',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Cicatrización de todos los grados de esofagitis erosiva y alivio de la pirosis asociada, en adultos.',
        ref: {
          f: 'dailymed-vonoprazan',
          sec: '1 · Indicaciones',
          cita: 'for healing of all grades of erosive esophagitis and relief of heartburn associated with erosive esophagitis in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vonoprazan',
      advertencias: [
        {
          titulo: 'Neoplasia gástrica',
          texto: 'La respuesta de los síntomas no descarta un cáncer gástrico; conviene considerar seguimiento y pruebas adicionales.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Symptomatic response to treatment does not preclude the presence of gastric malignancy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Nefritis tubulointersticial aguda',
          texto: 'Si aparece, hay que suspender el tratamiento y evaluar al paciente.',
          organos: [],
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Acute Tubulointerstitial Nephritis : Discontinue treatment and evaluate patients',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fracturas óseas',
          texto: 'Puede asociarse a fracturas, incluidas las relacionadas con la osteoporosis; usar la duración más corta adecuada.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Bone Fracture, including Osteoporosis-related Fracture : Use the shortest duration of treatment appropriate to the condition',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la cicatrización de la esofagitis erosiva, las más frecuentes (2 % o más): gastritis, diarrea, distensión abdominal, dolor abdominal y náuseas.',
          '34084-4',
          'Healing of Erosive Esophagitis (≥2%): gastritis, diarrhea, abdominal distension, abdominal pain, and nausea'
        ],
        [
          'En el mantenimiento de la esofagitis cicatrizada, las más frecuentes (3 % o más): gastritis, dolor abdominal, dispepsia, hipertensión e infección urinaria.',
          '34084-4',
          'Maintenance of Healed Erosive Esophagitis (≥3%): gastritis, abdominal pain, dyspepsia, hypertension, and urinary tract infection'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 o 20 mg de vonoprazán (equivalentes a 13,36 o 26,72 mg de fumarato de vonoprazán) por comprimido recubierto con película, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cicatrización de todos los grados de esofagitis erosiva y alivio de la pirosis asociada, en adultos.',
    actua: 'Suprime la secreción ácida gástrica basal y estimulada en la superficie secretora de la célula parietal al inhibir la H+,K+-ATPasa de forma competitiva con el potasio.',
    recorrido: 'En sujetos sanos con 20 mg, una comida rica en grasas aumentó la Cmax un 5 % y el AUC un 15 % y retrasó 2 horas la mediana del Tmax; no se consideran cambios clínicamente significativos. Tras una dosis oral marcada, alrededor del 67 % se recuperó en la orina (8 % como vonoprazán inalterado) y el 31 % en las heces (1,4 % inalterado).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '11 · Descripción',
            cita: 'Each film-coated tablet contains the following inactive ingredients',
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
      ocurre: 'En sujetos sanos con 20 mg, una comida rica en grasas aumentó la Cmax un 5 % y el AUC un 15 % y retrasó 2 horas la mediana del Tmax; no se consideran cambios clínicamente significativos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En sujetos sanos con 20 mg, una comida rica en grasas aumentó la Cmax un 5 % y el AUC un 15 % y retrasó 2 horas la mediana del Tmax; no se consideran cambios clínicamente significativos.',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat meal resulted in a 5% increase in C max , a 15% increase in AUC, and a delay in median T max of 2 hours',
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
      ocurre: 'La unión a las proteínas del plasma osciló entre el 85 % y el 88 % en sujetos sanos, sin depender de la concentración entre 0,1 y 10 mcg/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma osciló entre el 85 % y el 88 % en sujetos sanos, sin depender de la concentración entre 0,1 y 10 mcg/mL.',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of vonoprazan ranged from 85 to 88% in healthy subjects and was independent of concentration from 0.1 to 10 mcg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'H+,K+-ATPasa gástrica (bomba de protones)',
        efecto: 'Suprime la secreción ácida gástrica basal y estimulada en la superficie secretora de la célula parietal al inhibir la H+,K+-ATPasa de forma competitiva con el potasio.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Suprime la secreción ácida gástrica basal y estimulada en la superficie secretora de la célula parietal al inhibir la H+,K+-ATPasa de forma competitiva con el potasio.',
            ref: {
              f: 'dailymed-vonoprazan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vonoprazan suppresses basal and stimulated gastric acid secretion at the secretory surface of the gastric parietal cell through inhibition of the H + , K + -ATPase enzyme system in a potassium-competitive manner',
              codigo: '43679-0'
            }
          },
          {
            t: 'No necesita activarse con ácido y puede concentrarse de forma selectiva en las células parietales, en reposo y estimuladas.',
            ref: {
              f: 'dailymed-vonoprazan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vonoprazan does not require activation by acid. Vonoprazan may selectively concentrate in the parietal cells in both the resting and stimulated states',
              codigo: '43679-0'
            }
          },
          {
            t: 'Se une a las bombas activas de forma no covalente y reversible.',
            ref: {
              f: 'dailymed-vonoprazan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vonoprazan binds to the active pumps in a noncovalent and reversible manner',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza a metabolitos inactivos por varias vías, con una combinación de isoformas del citocromo P450 (sobre todo CYP3A4/5, CYP2C19, CYP2D6 y CYP2B6) y de sulfo- y glucuronosiltransferasas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza a metabolitos inactivos por varias vías, con una combinación de isoformas del citocromo P450 (sobre todo CYP3A4/5, CYP2C19, CYP2D6 y CYP2B6) y de sulfo- y glucuronosiltransferasas.',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '12.3 · Farmacocinética',
            cita: 'Vonoprazan is metabolized to inactive metabolites via multiple pathways by a combination of cytochrome P450 (CYP) isoforms (predominantly CYP3A4/5, CYP2C19, CYP2D6, and CYP2B6) along with sulfo- and glucuronosyl-transferases',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del vonoprazán',
          actividad: 'inactivo',
          nota: 'Los metabolitos que describe la etiqueta son inactivos.',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '12.3 · Farmacocinética',
            cita: 'Vonoprazan is metabolized to inactive metabolites via multiple pathways',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 67 % se recuperó en la orina (8 % como vonoprazán inalterado) y el 31 % en las heces (1,4 % inalterado).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 67 % se recuperó en la orina (8 % como vonoprazán inalterado) y el 31 % en las heces (1,4 % inalterado).',
          ref: {
            f: 'dailymed-vonoprazan',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 67% of the radiolabeled dose (8% as unchanged vonoprazan) was recovered in urine and 31% (1.4% as unchanged vonoprazan) was recovered in feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '85-88',
      unidad: '%',
      analito: 'vonoprazán',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-vonoprazan',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of vonoprazan ranged from 85 to 88% in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis marcada recuperada en la orina',
      valor: '67 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-vonoprazan',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 67% of the radiolabeled dose (8% as unchanged vonoprazan) was recovered in urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis marcada recuperada en las heces',
      valor: '31',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-vonoprazan', sec: '12.3 · Farmacocinética', cita: '31% (1.4% as unchanged vonoprazan) was recovered in feces', codigo: '43682-4' }
    },
    {
      magnitud: 'auc',
      nombre: 'Aumento del AUC con una comida rica en grasas',
      valor: '15',
      unidad: '%',
      analito: 'vonoprazán',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis de 20 mg con una comida rica en grasas',
      ref: {
        f: 'dailymed-vonoprazan',
        sec: '12.3 · Farmacocinética',
        cita: 'a high-fat meal resulted in a 5% increase in C max , a 15% increase in AUC',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vonoprazan', '0cc52ac5-77ec-4d66-a770-762a1a960914', 'VOQUEZNA (VONOPRAZAN FUMARATE) TABLET', 'VOQUEZNA', '6', '2026-07-20', '2026-11-18'),
    rengPubchem(15981397, 'vonoprazan', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
