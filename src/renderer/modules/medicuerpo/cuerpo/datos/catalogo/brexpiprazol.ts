import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'brexpiprazol',
    nombre: 'Brexpiprazol',
    clase: 'Antipsicótico atípico (agonista parcial de 5-HT1A y D2, antagonista de 5-HT2A)',
    sinonimos: [ 'brexpiprazole', 'Rexulti' ],
    formula: 'C25H27N3O2S',
    masaMolar: 433.6,
    smiles: 'C1CN(CCN1CCCCOC2=CC3=C(C=C2)C=CC(=O)N3)C4=C5C=CSC5=CC=C4',
    inchikey: 'ZKIAIYBUSXZPLP-UHFFFAOYSA-N',
    cid: 11978813,
    iupac: '7-[4-[4-(1-benzothiophen-4-yl)piperazin-1-yl]butoxy]-1H-quinolin-2-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'brexpiprazol-oral',
      producto: 'Rexulti · comprimido',
      titular: 'OTSUKA AMERICA PHARMACEUTICAL, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.25 mg, 0.5 mg, 1 mg, 2 mg, 3 mg o 4 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'microcrystalline cellulose',
        'hydroxypropyl cellulose (1600000 wamw)',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento complementario a los antidepresivos en el trastorno depresivo mayor del adulto, esquizofrenia desde los 13 años y agitación asociada a la demencia por enfermedad de Alzheimer.',
        ref: {
          f: 'dailymed-brexpiprazol',
          sec: '1 · Indicaciones',
          cita: "Adjunctive treatment to antidepressants for major depressive disorder (MDD) in adults Treatment of schizophrenia in adults and pediatric patients ages 13 years and older Treatment of agitation associated with dementia due to Alzheimer's disease",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-brexpiprazol',
      advertencias: [
        {
          titulo: 'Mayor mortalidad en ancianos con psicosis asociada a demencia',
          texto: 'Los ancianos con psicosis asociada a demencia tratados con antipsicóticos tienen un riesgo de muerte mayor.',
          organos: [],
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños y adultos jóvenes; hay que vigilar el empeoramiento clínico.',
          organos: [],
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Cuadro potencialmente mortal descrito con antipsicóticos: hipertermia, rigidez muscular, alteración mental e inestabilidad autonómica.',
          organos: [ 'musculos' ],
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '5.4 Neuroleptic Malignant Syndrome (NMS)',
            cita: 'Clinical manifestations of NMS are hyperpyrexia, muscle rigidity, altered mental status, and evidence of autonomic instability',
            codigo: '42229-5'
          }
        },
        {
          titulo: 'Cambios metabólicos',
          texto: 'Hay que vigilar la hiperglucemia o diabetes, la dislipidemia y el aumento de peso.',
          organos: [],
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Metabolic Changes: Monitor for hyperglycemia/diabetes mellitus, dyslipidemia, and weight gain',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos en los ensayos (5 % o más): aumento de peso, acatisia, cefalea, somnolencia e insomnio.',
          '34084-4',
          'The most common adverse reactions in adult patients in clinical trials (≥5%) were weight increased, akathisia, headache, somnolence, and insomnia'
        ],
        [
          'Las más frecuentes en pacientes pediátricos (5 % o más): aumento de peso, somnolencia, cefalea, acatisia y nasofaringitis.',
          '34084-4',
          'The most common adverse reactions in pediatric patients in clinical trials (≥5%) were weight increased, somnolence, headache, akathisia, and nasopharyngitis'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.25 mg, 0.5 mg, 1 mg, 2 mg, 3 mg o 4 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario a los antidepresivos en el trastorno depresivo mayor del adulto, esquizofrenia desde los 13 años y agitación asociada a la demencia por enfermedad de Alzheimer.',
    actua: 'Su mecanismo se desconoce, pero su eficacia podría deberse a una combinación de agonismo parcial en los receptores de serotonina 5-HT1A y de dopamina D2 y antagonismo en los receptores de serotonina 5-HT2A.',
    recorrido: 'Tras una dosis única, el pico plasmático aparece en las 4 horas siguientes y la biodisponibilidad oral absoluta es del 95 %. Tras una dosis oral marcada, alrededor del 25 % de la radiactividad se recuperó en la orina y el 46 % en las heces; menos del 1 % salió inalterado por la orina y alrededor del 14 % inalterado en las heces.'
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
          ref: { f: 'dailymed-brexpiprazol', sec: '3 · Formas y concentraciones', cita: 'REXULTI tablets are available in 6 strengths', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras una dosis única, el pico plasmático aparece en las 4 horas siguientes y la biodisponibilidad oral absoluta es del 95 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis única, el pico plasmático aparece en las 4 horas siguientes y la biodisponibilidad oral absoluta es del 95 %.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'After single-dose administration of REXULTI tablets, the peak plasma brexpiprazole concentrations occurred within 4 hours after administration, and the absolute oral bioavailability was 95%',
            codigo: '34090-1'
          }
        },
        {
          t: 'Una comida rica en grasas no afectó de forma significativa a la Cmax ni al AUC de un comprimido de 4 mg.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'Administration of a 4 mg REXULTI tablet with a standard high-fat meal did not significantly affect the C max or AUC of brexpiprazole',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución tras la vía intravenosa es alto (1,56 ± 0,42 L/kg), lo que indica distribución extravascular; se une en más del 99 % a las proteínas del plasma (albúmina sérica y glicoproteína ácida α1).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución tras la vía intravenosa es alto (1,56 ± 0,42 L/kg), lo que indica distribución extravascular; se une en más del 99 % a las proteínas del plasma (albúmina sérica y glicoproteína ácida α1).',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'Brexpiprazole is highly protein bound in plasma (greater than 99%) to serum albumin and α1-acid glycoprotein',
            codigo: '34090-1'
          }
        },
        {
          t: 'El volumen de distribución alto indica una distribución extravascular.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'The volume of distribution of brexpiprazole following intravenous administration is high (1.56 ± 0.42 L/kg), indicating extravascular distribution',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT1A, D2 (agonista parcial) y 5-HT2A (antagonista)',
        efecto: 'Su mecanismo se desconoce, pero su eficacia podría deberse a una combinación de agonismo parcial en los receptores de serotonina 5-HT1A y de dopamina D2 y antagonismo en los receptores de serotonina 5-HT2A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce, pero su eficacia podría deberse a una combinación de agonismo parcial en los receptores de serotonina 5-HT1A y de dopamina D2 y antagonismo en los receptores de serotonina 5-HT2A.',
            ref: {
              f: 'dailymed-brexpiprazol',
              sec: '12 · Farmacología clínica',
              cita: 'the efficacy of REXULTI may be mediated through a combination of partial agonist activity at serotonin 5-HT 1A and dopamine D 2 receptors, and antagonist activity at serotonin 5-HT 2A receptors',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vivo se metaboliza sobre todo por las enzimas CYP3A4 y CYP2D6.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vivo se metaboliza sobre todo por las enzimas CYP3A4 y CYP2D6.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'In vivo brexpiprazole is metabolized primarily by CYP3A4 and CYP2D6 enzymes',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'DM-3411',
          actividad: 'inactivo',
          nota: 'Metabolito principal; en estado estacionario supone entre el 23 % y el 48 % de la exposición al brexpiprazol, pero no se considera que contribuya al efecto terapéutico.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'DM-3411 is considered not to contribute to the therapeutic effects of brexpiprazole',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 25 % de la radiactividad se recuperó en la orina y el 46 % en las heces; menos del 1 % salió inalterado por la orina y alrededor del 14 % inalterado en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 25 % de la radiactividad se recuperó en la orina y el 46 % en las heces; menos del 1 % salió inalterado por la orina y alrededor del 14 % inalterado en las heces.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 25% and 46% of the administered radioactivity was recovered in the urine and feces, respectively',
            codigo: '34090-1'
          }
        },
        {
          t: 'Las semividas de eliminación terminales del brexpiprazol y de su metabolito DM-3411 fueron de 91 y 86 horas.',
          ref: {
            f: 'dailymed-brexpiprazol',
            sec: '12 · Farmacología clínica',
            cita: 'the terminal elimination half-lives of brexpiprazole and its major metabolite, DM-3411, were 91 hours and 86 hours, respectively',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '≤ 4',
      unidad: 'h',
      analito: 'brexpiprazol',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-brexpiprazol',
        sec: '12 · Farmacología clínica',
        cita: 'the peak plasma brexpiprazole concentrations occurred within 4 hours after administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '95',
      unidad: '%',
      analito: 'brexpiprazol',
      ref: { f: 'dailymed-brexpiprazol', sec: '12 · Farmacología clínica', cita: 'the absolute oral bioavailability was 95%', codigo: '34090-1' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1,56 ± 0,42',
      unidad: 'L/kg',
      analito: 'brexpiprazol',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-brexpiprazol',
        sec: '12 · Farmacología clínica',
        cita: 'The volume of distribution of brexpiprazole following intravenous administration is high (1.56 ± 0.42 L/kg)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'brexpiprazol',
      ref: {
        f: 'dailymed-brexpiprazol',
        sec: '12 · Farmacología clínica',
        cita: 'Brexpiprazole is highly protein bound in plasma (greater than 99%)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '91',
      unidad: 'h',
      analito: 'brexpiprazol',
      condiciones: 'dosis diarias múltiples',
      ref: {
        f: 'dailymed-brexpiprazol',
        sec: '12 · Farmacología clínica',
        cita: 'the terminal elimination half-lives of brexpiprazole and its major metabolite, DM-3411, were 91 hours and 86 hours, respectively',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '46 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada',
      ref: {
        f: 'dailymed-brexpiprazol',
        sec: '12 · Farmacología clínica',
        cita: 'approximately 25% and 46% of the administered radioactivity was recovered in the urine and feces, respectively',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-brexpiprazol', '2d301358-6291-4ec1-bd87-37b4ad9bd850', 'REXULTI (BREXPIPRAZOLE) TABLET REXULTI (BREXPIPRAZOLE) KIT', 'Rexulti', '26', '2026-05-28', '2026-11-18'),
    rengPubchem(11978813, 'brexpiprazole', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
