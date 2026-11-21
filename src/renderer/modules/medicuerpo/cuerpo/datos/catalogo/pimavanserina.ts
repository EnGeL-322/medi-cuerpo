import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pimavanserina',
    nombre: 'Pimavanserina',
    clase: 'Antipsicótico atípico (agonista inverso y antagonista de 5-HT2A)',
    sinonimos: [ 'pimavanserin', 'Nuplazid' ],
    formula: 'C25H34FN3O2',
    masaMolar: 427.6,
    smiles: 'CC(C)COC1=CC=C(C=C1)CNC(=O)N(CC2=CC=C(C=C2)F)C3CCN(CC3)C',
    inchikey: 'RKEWSXXUOLRFBX-UHFFFAOYSA-N',
    cid: 10071196,
    iupac: '1-[(4-fluorophenyl)methyl]-1-(1-methylpiperidin-4-yl)-3-[[4-(2-methylpropoxy)phenyl]methyl]urea',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'pimavanserina-oral',
      producto: 'NUPLAZID · cápsula',
      titular: 'ACADIA PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '34 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tartrato de pimavanserina',
        ref: { f: 'dailymed-pimavanserina', sec: '11 · Descripción', cita: 'pimavanserin tartrate', codigo: '34089-3' }
      },
      excipientes: [
        'magnesium stearate',
        'microcrystalline cellulose',
        'hypromellose 2910 (15 mpa.s)',
        'titanium dioxide',
        'ferric oxide yellow',
        'fd&c blue no. 1',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de las alucinaciones y los delirios asociados a la psicosis de la enfermedad de Parkinson.',
        ref: {
          f: 'dailymed-pimavanserina',
          sec: '1 · Indicaciones',
          cita: "NUPLAZID ® is indicated for the treatment of hallucinations and delusions associated with Parkinson's disease psychosis",
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pimavanserina',
      advertencias: [
        {
          titulo: 'Mayor mortalidad en ancianos con psicosis asociada a demencia',
          texto: 'Los ancianos con psicosis asociada a demencia tratados con antipsicóticos tienen mayor riesgo de muerte; no está aprobada salvo que las alucinaciones y delirios se deban al Parkinson.',
          organos: [],
          ref: {
            f: 'dailymed-pimavanserina',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Alarga el intervalo QT; evitarla con otros fármacos que lo alarguen y con factores de riesgo de QT prolongado.',
          organos: [],
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '5 · Advertencias y precauciones',
            cita: 'QT Interval Prolongation: Increases in QT interval; avoid use with drugs that also increase the QT interval and in patients with risk factors for prolonged QT interval',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y el doble que con placebo): edema periférico y estado confusional.',
          '34084-4',
          'Most common adverse reactions (≥5% and twice the rate of placebo): peripheral edema and confusional state'
        ],
        [
          'Entre las reacciones graves descritas en otras secciones figuran la mayor mortalidad en ancianos con psicosis asociada a demencia y la prolongación del intervalo QT.',
          '34084-4',
          'Increased Mortality in Elderly Patients with Dementia-Related Psychosis [see Boxed Warning and Warnings and Precautions (5.1) ] QT Interval Prolongation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 34 mg por cápsula, según la etiqueta; el activo va como tartrato de pimavanserina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las alucinaciones y los delirios asociados a la psicosis de la enfermedad de Parkinson.',
    actua: 'Su mecanismo no está claro; su efecto podría deberse al agonismo inverso y antagonismo en los receptores de serotonina 5-HT2A y, en menor medida, 5-HT2C.',
    recorrido: 'La mediana del Tmax fue de 6 horas (4 a 24) y no dependió de la dosis; la biodisponibilidad del comprimido y de la solución oral fue prácticamente idéntica. Tras una dosis oral marcada de 34 mg, en 10 días solo el 0,55 % se eliminó sin cambios en la orina y el 1,53 % en las heces; menos del 1 % de la pimavanserina y del AC-279 se recuperó en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-pimavanserina', sec: '3 · Formas y concentraciones', cita: '34 mg strength capsules', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del Tmax fue de 6 horas (4 a 24) y no dependió de la dosis; la biodisponibilidad del comprimido y de la solución oral fue prácticamente idéntica.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del Tmax fue de 6 horas (4 a 24) y no dependió de la dosis; la biodisponibilidad del comprimido y de la solución oral fue prácticamente idéntica.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max of pimavanserin was 6 (range 4-24) hours and was generally unaffected by dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no tuvo efecto significativo: la Cmax bajó alrededor de un 9 % y el AUC subió un 8 %.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion of a high-fat meal had no significant effect on rate (C max ) and extent (AUC) of pimavanserin exposure',
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
      ocurre: 'Se une mucho a las proteínas del plasma humano (alrededor del 95 %); tras 34 mg, el volumen de distribución aparente medio fue de 2173 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a las proteínas del plasma humano (alrededor del 95 %); tras 34 mg, el volumen de distribución aparente medio fue de 2173 L.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pimavanserin is highly protein bound (~95%) in human plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis única de 34 mg, el volumen de distribución aparente medio fue de 2173 L.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following administration of a single dose of NUPLAZID (34 mg), the mean (SD) apparent volume of distribution was 2173 (307) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT2A y 5-HT2C',
        efecto: 'Su mecanismo no está claro; su efecto podría deberse al agonismo inverso y antagonismo en los receptores de serotonina 5-HT2A y, en menor medida, 5-HT2C.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no está claro; su efecto podría deberse al agonismo inverso y antagonismo en los receptores de serotonina 5-HT2A y, en menor medida, 5-HT2C.',
            ref: {
              f: 'dailymed-pimavanserina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the effect of pimavanserin could be mediated through a combination of inverse agonist and antagonist activity at serotonin 5-HT 2A receptors and to a lesser extent at serotonin 5-HT 2C receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y la CYP3A5 y, en menor medida, por otras CYP y FMO; la CYP3A4 forma su metabolito activo principal, AC-279.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y la CYP3A5 y, en menor medida, por otras CYP y FMO; la CYP3A4 forma su metabolito activo principal, AC-279.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Pimavanserin is predominantly metabolized by CYP3A4 and CYP3A5 and to a lesser extent by CYP2J2, CYP2D6, and various other CYP and FMO enzymes',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'AC-279 (N-desmetilado)',
          actividad: 'activo',
          nota: 'Metabolito circulante principal y activo; su semivida plasmática media es de unas 200 horas.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'The formation of the major circulating N- desmethylated metabolite AC-279 (active) from pimavanserin occurs with a median T max of 6 hours',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada de 34 mg, en 10 días solo el 0,55 % se eliminó sin cambios en la orina y el 1,53 % en las heces; menos del 1 % de la pimavanserina y del AC-279 se recuperó en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada de 34 mg, en 10 días solo el 0,55 % se eliminó sin cambios en la orina y el 1,53 % en las heces; menos del 1 % de la pimavanserina y del AC-279 se recuperó en la orina.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 0.55% of the 34 mg oral dose of 14 C-pimavanserin was eliminated as unchanged drug in urine and 1.53% was eliminated in feces after 10 days',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas plasmáticas medias de la pimavanserina y de su metabolito activo son de unas 57 y 200 horas.',
          ref: {
            f: 'dailymed-pimavanserina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma half-lives for pimavanserin and the active metabolite ( N -desmethylated metabolite) are approximately 57 hours and 200 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax',
      valor: '6',
      unidad: 'h',
      analito: 'pimavanserina',
      ref: {
        f: 'dailymed-pimavanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of pimavanserin was 6 (range 4-24) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'pimavanserina',
      ref: {
        f: 'dailymed-pimavanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'Pimavanserin is highly protein bound (~95%) in human plasma',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '2173',
      unidad: 'L',
      analito: 'pimavanserina',
      condiciones: 'dosis única de 34 mg',
      ref: {
        f: 'dailymed-pimavanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (SD) apparent volume of distribution was 2173 (307) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media de la pimavanserina',
      valor: '57 (aprox.)',
      unidad: 'h',
      analito: 'pimavanserina',
      ref: {
        f: 'dailymed-pimavanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma half-lives for pimavanserin and the active metabolite ( N -desmethylated metabolite) are approximately 57 hours and 200 hours, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media del AC-279',
      valor: '200 (aprox.)',
      unidad: 'h',
      analito: 'AC-279',
      ref: {
        f: 'dailymed-pimavanserina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma half-lives for pimavanserin and the active metabolite ( N -desmethylated metabolite) are approximately 57 hours and 200 hours, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pimavanserina', '1e6bea44-57d6-4bac-9328-46e1ee59f83b', 'NUPLAZID (PIMAVANSERIN TARTRATE) CAPSULE NUPLAZID (PIMAVANSERIN TARTRATE) TABLET, COATED', 'NUPLAZID', '23', '2026-06-22', '2026-11-19'),
    rengPubchem(10071196, 'pimavanserin', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
