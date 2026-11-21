import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lasmiditan',
    nombre: 'Lasmiditán',
    clase: 'Agonista del receptor de serotonina 5-HT1F (antimigrañoso)',
    sinonimos: [ 'lasmiditan', 'Reyvow' ],
    formula: 'C19H18F3N3O2',
    masaMolar: 377.4,
    smiles: 'CN1CCC(CC1)C(=O)C2=NC(=CC=C2)NC(=O)C3=C(C=C(C=C3F)F)F',
    inchikey: 'XEDHVZKDSYZQBF-UHFFFAOYSA-N',
    cid: 11610526,
    iupac: '2,4,6-trifluoro-N-[6-(1-methylpiperidine-4-carbonyl)-2-pyridinyl]benzamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'lasmiditan-oral',
      producto: 'Reyvow · comprimido',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Hemisuccinato de lasmiditán',
        ref: { f: 'dailymed-lasmiditan', sec: '11 · Descripción', cita: 'lasmiditan hemisuccinate', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'starch, corn',
        'croscarmellose sodium',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento agudo de la migraña con o sin aura en adultos; no está indicado para la prevención.',
        ref: {
          f: 'dailymed-lasmiditan',
          sec: '1 · Indicaciones',
          cita: 'REYVOW ® is indicated for the acute treatment of migraine with or without aura in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lasmiditan',
      advertencias: [
        {
          titulo: 'Alteración de la capacidad de conducir',
          texto: 'No hay que conducir ni manejar máquinas hasta al menos 8 horas después de cada dosis; el paciente puede no darse cuenta de su propio deterioro.',
          organos: [],
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise patients not to drive or operate machinery until at least 8 hours after taking each dose of REYVOW',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión del sistema nervioso central',
          texto: 'Puede causar depresión del sistema nervioso central; precaución con alcohol u otros depresores.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '5 · Advertencias y precauciones',
            cita: 'REYVOW may cause CNS depression and should be used with caution if used in combination with alcohol or other CNS depressants',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'Se han notificado reacciones compatibles con síndrome serotoninérgico; hay que suspenderlo si aparecen síntomas.',
          organos: [],
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Reactions consistent with serotonin syndrome were reported in patients treated with REYVOW',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): mareo, fatiga, parestesias y sedación.',
          '34084-4',
          'Most common adverse reactions (≥5% and > placebo) were dizziness, fatigue, paresthesia, and sedation'
        ],
        [
          'Entre las reacciones clínicamente significativas descritas en otras secciones figuran la alteración de la conducción, la depresión del sistema nervioso central, el síndrome serotoninérgico y la cefalea por abuso de medicación.',
          '34084-4',
          'Driving Impairment [see Warnings and Precautions ( 5.1 )] Central Nervous System Depression [see Warnings and Precautions ( 5.2 )] Serotonin Syndrome'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 50 mg o 100 mg por comprimido, según la etiqueta; el activo va como hemisuccinato de lasmiditán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento agudo de la migraña con o sin aura en adultos; no está indicado para la prevención.',
    actua: 'Se une con alta afinidad al receptor 5-HT1F; se supone que su efecto en la migraña se debe al agonismo en ese receptor, aunque el mecanismo exacto se desconoce.',
    recorrido: 'Tras la toma oral se absorbe con rapidez, con una mediana del tmax de 1,8 horas. La excreción renal es una vía menor de aclaramiento del fármaco: el lasmiditán inalterado supuso alrededor del 3 % de la dosis en la orina y el metabolito S-M8 alrededor del 66 %, casi todo en 48 horas.'
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
            f: 'dailymed-lasmiditan',
            sec: '3 · Formas y concentraciones',
            cita: 'REYVOW (lasmiditan) tablets are available in two strengths',
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
      ocurre: 'Tras la toma oral se absorbe con rapidez, con una mediana del tmax de 1,8 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma oral se absorbe con rapidez, con una mediana del tmax de 1,8 horas.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, lasmiditan is rapidly absorbed with a median t max of 1.8 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'En pacientes con migraña, la absorción y la farmacocinética no fueron distintas durante una crisis que entre crisis.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'In patients with migraine, the absorption or pharmacokinetics of lasmiditan was not different during a migraine attack versus during the interictal period',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con migraña'
        },
        {
          t: 'Con una comida rica en grasas, la Cmax y el AUC aumentaron un 22 % y un 19 % y la mediana del tmax se retrasó 1 hora; no se espera que sea clínicamente significativo.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Coadministration of lasmiditan with a high-fat meal increased the mean lasmiditan C max and AUC values by 22% and 19%, respectively, and delayed the median t max by 1 hour',
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
      ocurre: 'La unión a las proteínas del plasma humano es de alrededor del 55 %-60 % y no depende de la concentración entre 15 y 500 ng/mL.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma humano es de alrededor del 55 %-60 % y no depende de la concentración entre 15 y 500 ng/mL.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'The human plasma protein binding of lasmiditan is approximately 55% to 60% and independent of concentration between 15 and 500 ng/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de serotonina 5-HT1F',
        efecto: 'Se une con alta afinidad al receptor 5-HT1F; se supone que su efecto en la migraña se debe al agonismo en ese receptor, aunque el mecanismo exacto se desconoce.',
        lugar: [],
        datos: [
          {
            t: 'Se une con alta afinidad al receptor 5-HT1F; se supone que su efecto en la migraña se debe al agonismo en ese receptor, aunque el mecanismo exacto se desconoce.',
            ref: {
              f: 'dailymed-lasmiditan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lasmiditan presumably exerts its therapeutic effects in the treatment of migraine through agonist effects at the 5-HT 1F receptor; however, the precise mechanism is unknown',
              codigo: '43679-0'
            }
          },
          {
            t: 'Se une con alta afinidad al receptor 5-HT1F.',
            ref: {
              f: 'dailymed-lasmiditan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lasmiditan binds with high affinity to the 5-HT 1F receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre metabolismo hepático y extrahepático, sobre todo por enzimas que no son CYP; la vía principal es la reducción de la cetona.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre metabolismo hepático y extrahepático, sobre todo por enzimas que no son CYP; la vía principal es la reducción de la cetona.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Lasmiditan undergoes hepatic and extrahepatic metabolism primarily by non-CYP enzymes',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se elimina sobre todo por metabolismo, y la reducción de la cetona es la vía principal.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Lasmiditan is primarily eliminated via metabolism, with ketone reduction representing the major pathway',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M7 y M18',
          actividad: 'inactivo',
          nota: 'Metabolitos considerados farmacológicamente inactivos.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Lasmiditan is also metabolized to M7 (oxidation on piperidine ring) and M18 (combination of M7 and M8 pathways). These metabolites are considered pharmacologically inactive',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'S-M8',
          actividad: 'desconocida',
          nota: 'Metabolito principal en la orina; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolite S-M8 represented approximately 66% of the dose in urine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción renal es una vía menor de aclaramiento del fármaco: el lasmiditán inalterado supuso alrededor del 3 % de la dosis en la orina y el metabolito S-M8 alrededor del 66 %, casi todo en 48 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción renal es una vía menor de aclaramiento del fármaco: el lasmiditán inalterado supuso alrededor del 3 % de la dosis en la orina y el metabolito S-M8 alrededor del 66 %, casi todo en 48 horas.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Recovery of unchanged lasmiditan in urine was low and accounted for approximately 3% of the dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La excreción renal es una vía menor de aclaramiento del lasmiditán.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal excretion is a minor route of lasmiditan clearance',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolito S-M8 supuso alrededor del 66 % de la dosis en la orina, recuperada en su mayor parte en 48 horas.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolite S-M8 represented approximately 66% of the dose in urine, with the majority of recovery within 48 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media geométrica es de unas 5,7 horas, sin acumulación con la toma diaria.',
          ref: {
            f: 'dailymed-lasmiditan',
            sec: '12.3 · Farmacocinética',
            cita: 'Lasmiditan was eliminated with a geometric mean t ½ value of approximately 5.7 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '1,8',
      unidad: 'h',
      analito: 'lasmiditán',
      ref: {
        f: 'dailymed-lasmiditan',
        sec: '12.3 · Farmacocinética',
        cita: 'lasmiditan is rapidly absorbed with a median t max of 1.8 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '55-60 (aprox.)',
      unidad: '%',
      analito: 'lasmiditán',
      ref: {
        f: 'dailymed-lasmiditan',
        sec: '12.3 · Farmacocinética',
        cita: 'The human plasma protein binding of lasmiditan is approximately 55% to 60%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida (media geométrica)',
      valor: '5,7 (aprox.)',
      unidad: 'h',
      analito: 'lasmiditán',
      ref: {
        f: 'dailymed-lasmiditan',
        sec: '12.3 · Farmacocinética',
        cita: 'Lasmiditan was eliminated with a geometric mean t ½ value of approximately 5.7 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Lasmiditán inalterado en la orina',
      valor: '3 (aprox.)',
      unidad: '% de la dosis',
      analito: 'lasmiditán inalterado',
      ref: {
        f: 'dailymed-lasmiditan',
        sec: '12.3 · Farmacocinética',
        cita: 'Recovery of unchanged lasmiditan in urine was low and accounted for approximately 3% of the dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Metabolito S-M8 en la orina',
      valor: '66 (aprox.)',
      unidad: '% de la dosis',
      analito: 'S-M8',
      ref: {
        f: 'dailymed-lasmiditan',
        sec: '12.3 · Farmacocinética',
        cita: 'Metabolite S-M8 represented approximately 66% of the dose in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lasmiditan', 'aea3358c-ff41-4490-9e6d-c7bf7b3de13f', 'REYVOW (LASMIDITAN) TABLET', 'Reyvow', '16', '2026-08-10', '2026-11-18'),
    rengPubchem(11610526, 'lasmiditan', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
