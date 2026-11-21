import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cariprazina',
    nombre: 'Cariprazina',
    clase: 'Antipsicótico atípico (agonista parcial de D3, D2 y 5-HT1A)',
    sinonimos: [ 'cariprazine', 'Vraylar' ],
    formula: 'C21H32Cl2N4O',
    masaMolar: 427.4,
    smiles: 'CN(C)C(=O)NC1CCC(CC1)CCN2CCN(CC2)C3=C(C(=CC=C3)Cl)Cl',
    inchikey: 'KPWSJANDNDDRMB-UHFFFAOYSA-N',
    cid: 11154555,
    iupac: '3-[4-[2-[4-(2,3-dichlorophenyl)piperazin-1-yl]ethyl]cyclohexyl]-1,1-dimethylurea',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'cariprazina-oral',
      producto: 'Vraylar · cápsula',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg, 0.75 mg, 1.5 mg, 3 mg, 4.5 mg o 6 mg por cápsula, según la etiqueta',
      excipientes: [
        'gelatin, unspecified',
        'magnesium stearate',
        'starch, corn',
        'shellac',
        'titanium dioxide',
        'ferrosoferric oxide',
        'fd&c blue no. 1',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de la esquizofrenia en adultos y pacientes desde 13 años, de los episodios maníacos o mixtos del trastorno bipolar I, de la depresión bipolar en adultos y complemento de los antidepresivos en el trastorno depresivo mayor del adulto.',
        ref: {
          f: 'dailymed-cariprazina',
          sec: '1 · Indicaciones',
          cita: 'VRAYLAR is an atypical antipsychotic indicated for: Treatment of schizophrenia in adults and pediatric patients 13 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cariprazina',
      advertencias: [
        {
          titulo: 'Mayor mortalidad en ancianos con psicosis asociada a demencia',
          texto: 'Los ancianos con psicosis asociada a demencia tratados con antipsicóticos tienen un riesgo de muerte mayor; no está aprobada en esta situación.',
          organos: [],
          ref: {
            f: 'dailymed-cariprazina',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Reacciones adversas tardías',
          texto: 'Por su semivida larga, hay que vigilar las reacciones adversas y la respuesta durante varias semanas tras empezar y con cada cambio de dosis.',
          organos: [],
          ref: {
            f: 'dailymed-cariprazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Late-Occurring Adverse Reactions: Because of VRAYLAR’s long half-life, monitor for adverse reactions and patient response for several weeks after starting VRAYLAR and with each dosage change',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Cambios metabólicos',
          texto: 'Hay que vigilar la hiperglucemia o diabetes, la dislipidemia y el aumento de peso.',
          organos: [],
          ref: {
            f: 'dailymed-cariprazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for hyperglycemia/diabetes mellitus, dyslipidemia and weight gain',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos (5 % o más y al menos el doble que con placebo): en la esquizofrenia, síntomas extrapiramidales y acatisia; en la manía bipolar, además, dispepsia, vómitos y somnolencia.',
          '34084-4',
          'Schizophrenia: extrapyramidal symptoms and akathisia Bipolar mania: extrapyramidal symptoms, akathisia, dyspepsia, vomiting, somnolence'
        ],
        [
          'En la depresión bipolar, las más frecuentes (5 % o más y al menos el doble que con placebo) fueron náuseas, acatisia, inquietud y síntomas extrapiramidales.',
          '34084-4',
          'Bipolar depression: nausea, akathisia, restlessness, and extrapyramidal symptoms'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.5 mg, 0.75 mg, 1.5 mg, 3 mg, 4.5 mg o 6 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la esquizofrenia en adultos y pacientes desde 13 años, de los episodios maníacos o mixtos del trastorno bipolar I, de la depresión bipolar en adultos y complemento de los antidepresivos en el trastorno depresivo mayor del adulto.',
    actua: 'Su mecanismo se desconoce; su eficacia podría deberse a la combinación de agonismo parcial en los receptores centrales de dopamina D2 y de serotonina 5-HT1A y antagonismo en los receptores 5-HT2A.',
    recorrido: 'Tras una dosis única, el pico plasmático de cariprazina aparece en unas 3-6 horas. En pacientes con esquizofrenia tratados 27 días, alrededor del 21 % de la dosis diaria apareció en la orina, y solo un 1,2 % como cariprazina inalterada.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '11 · Descripción',
            cita: 'Each hard gelatin capsule contains 0.5, 0.75, 1.5, 3, 4.5, or 6 mg of cariprazine base',
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
      ocurre: 'Tras una dosis única, el pico plasmático de cariprazina aparece en unas 3-6 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única, el pico plasmático de cariprazina aparece en unas 3-6 horas.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'After single dose administration of VRAYLAR, the peak plasma cariprazine concentration occurred in approximately 3-6 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una dosis de 1,5 mg con una comida rica en grasas no afectó de forma significativa a la Cmax ni al AUC de la cariprazina ni del DCAR.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of a single dose of 1.5 mg VRAYLAR capsule with a high-fat meal did not significantly affect the C max and AUC of cariprazine or DCAR',
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
      ocurre: 'La cariprazina y sus metabolitos activos principales se unen mucho (91 % a 97 %) a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La cariprazina y sus metabolitos activos principales se unen mucho (91 % a 97 %) a las proteínas del plasma.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cariprazine and its major active metabolites are highly bound (91 to 97%) to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores D2, D3 y 5-HT1A (agonista parcial) y 5-HT2A (antagonista)',
        efecto: 'Su mecanismo se desconoce; su eficacia podría deberse a la combinación de agonismo parcial en los receptores centrales de dopamina D2 y de serotonina 5-HT1A y antagonismo en los receptores 5-HT2A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce; su eficacia podría deberse a la combinación de agonismo parcial en los receptores centrales de dopamina D2 y de serotonina 5-HT1A y antagonismo en los receptores 5-HT2A.',
            ref: {
              f: 'dailymed-cariprazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the efficacy of cariprazine could be mediated through a combination of partial agonist activity at central dopamine D 2 and serotonin 5-HT 1A receptors and antagonist activity at serotonin 5-HT 2A receptors',
              codigo: '43679-0'
            }
          },
          {
            t: 'Actúa como agonista parcial en los receptores de dopamina D3 y D2 con alta afinidad.',
            ref: {
              f: 'dailymed-cariprazina',
              sec: '12.2 · Farmacodinámica',
              cita: 'Cariprazine acts as a partial agonist at the dopamine D 3 and D 2 receptors with high binding affinity',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho por la CYP3A4 y, en menor medida, la CYP2D6 a DCAR y DDCAR; el DCAR pasa a DDCAR y la CYP3A4 transforma el DDCAR en un metabolito hidroxilado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho por la CYP3A4 y, en menor medida, la CYP2D6 a DCAR y DDCAR; el DCAR pasa a DDCAR y la CYP3A4 transforma el DDCAR en un metabolito hidroxilado.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Cariprazine is extensively metabolized by CYP3A4 and, to a lesser extent, by CYP2D6 to DCAR and DDCAR',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desmetilcariprazina (DCAR) y didesmetilcariprazina (DDCAR)',
          actividad: 'activo',
          nota: 'Metabolitos activos principales, de potencia equivalente a la cariprazina; el DDCAR tarda semanas en llegar al estado estacionario.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'its two major active metabolites, desmethylcariprazine (DCAR) and didesmethylcariprazine (DDCAR), which are pharmacologically equipotent to cariprazine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En pacientes con esquizofrenia tratados 27 días, alrededor del 21 % de la dosis diaria apareció en la orina, y solo un 1,2 % como cariprazina inalterada.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En pacientes con esquizofrenia tratados 27 días, alrededor del 21 % de la dosis diaria apareció en la orina, y solo un 1,2 % como cariprazina inalterada.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'about 21% of the daily dose was found in urine, with approximately 1.2% of the daily dose excreted in urine as unchanged cariprazine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas estimadas a partir del tiempo hasta el estado estacionario son de 2 a 4 días para la cariprazina, de 1 a 2 días para el DCAR y de 1 a 3 semanas para el DDCAR.',
          ref: {
            f: 'dailymed-cariprazina',
            sec: '12.3 · Farmacocinética',
            cita: 'are 2 to 4 days for cariprazine, about 1 to 2 days for DCAR, and approximately 1 to 3 weeks for DDCAR',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '3-6 (aprox.)',
      unidad: 'h',
      analito: 'cariprazina',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-cariprazina',
        sec: '12.3 · Farmacocinética',
        cita: 'the peak plasma cariprazine concentration occurred in approximately 3-6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '91-97',
      unidad: '%',
      analito: 'cariprazina y metabolitos activos',
      ref: {
        f: 'dailymed-cariprazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Cariprazine and its major active metabolites are highly bound (91 to 97%) to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la cariprazina (estimada por el tiempo hasta el estado estacionario)',
      valor: '2-4',
      unidad: 'días',
      analito: 'cariprazina',
      ref: {
        f: 'dailymed-cariprazina',
        sec: '12.3 · Farmacocinética',
        cita: 'are 2 to 4 days for cariprazine, about 1 to 2 days for DCAR, and approximately 1 to 3 weeks for DDCAR',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del DDCAR (estimada por el tiempo hasta el estado estacionario)',
      valor: '1-3 (aprox.)',
      unidad: 'semanas',
      analito: 'DDCAR',
      ref: {
        f: 'dailymed-cariprazina',
        sec: '12.3 · Farmacocinética',
        cita: 'are 2 to 4 days for cariprazine, about 1 to 2 days for DCAR, and approximately 1 to 3 weeks for DDCAR',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis diaria encontrada en la orina',
      valor: '21 (aprox.)',
      unidad: '% de la dosis',
      analito: 'cariprazina y metabolitos',
      poblacion: 'pacientes con esquizofrenia',
      condiciones: '12,5 mg al día durante 27 días',
      ref: { f: 'dailymed-cariprazina', sec: '12.3 · Farmacocinética', cita: 'about 21% of the daily dose was found in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cariprazina', '4b5f7c65-aa2d-452a-b3db-bc85c06ff12f', 'VRAYLAR (CARIPRAZINE) CAPSULE, GELATIN COATED VRAYLAR (CARIPRAZINE) KIT', 'Vraylar', '32', '2026-08-20', '2026-11-18'),
    rengPubchem(11154555, 'cariprazine', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
