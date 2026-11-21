import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tiagabina',
    nombre: 'Tiagabina',
    clase: 'Antiepiléptico (inhibidor de la recaptación de GABA)',
    sinonimos: [ 'tiagabine', 'Gabitril' ],
    formula: 'C20H25NO2S2',
    masaMolar: 375.6,
    smiles: 'CC1=C(SC=C1)C(=CCCN2CCC[C@H](C2)C(=O)O)C3=C(C=CS3)C',
    inchikey: 'PBJUNZJWGZTSKL-MRXNPFEDSA-N',
    cid: 60648,
    iupac: '(3R)-1-[4,4-bis(3-methylthiophen-2-yl)but-3-enyl]piperidine-3-carboxylic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'tiagabina-oral',
      producto: 'TIAGABINE HYDROCHLORIDE · comprimido recubierto con película',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2 mg o 4 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de tiagabina',
        ref: { f: 'dailymed-tiagabina', sec: '11 · Descripción', cita: 'Tiagabine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'butylated hydroxyanisole',
        'anhydrous lactose',
        'silicon dioxide',
        'starch, corn',
        'talc',
        'crospovidone',
        'hypromelloses',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'polysorbate 80',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'Tratamiento complementario de las crisis parciales en adultos y niños desde 12 años.',
        ref: {
          f: 'dailymed-tiagabina',
          sec: '1 · Indicaciones',
          cita: 'Tiagabine hydrochloride tablets are indicated as adjunctive therapy in adults and children 12 years and older in the treatment of partial seizures',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tiagabina',
      advertencias: [
        {
          titulo: 'Crisis en pacientes sin epilepsia',
          texto: 'Tras la comercialización se han descrito crisis de nueva aparición y estado epiléptico en pacientes sin epilepsia.',
          organos: [],
          ref: {
            f: 'dailymed-tiagabina',
            sec: 'Advertencias',
            cita: 'Postmarketing reports have shown that tiagabine hydrochloride use has been associated with new onset seizures and status epilepticus in patients without epilepsy',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Conducta e ideación suicidas',
          texto: 'Los antiepilépticos, incluida la tiagabina, aumentan el riesgo de pensamientos o conductas suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-tiagabina',
            sec: 'Advertencias',
            cita: 'Antiepileptic drugs (AEDs), including tiagabine hydrochloride, increase the risk of suicidal thoughts or behavior in patients taking these drugs for any indication',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Los más frecuentes y distintos del placebo: mareo o aturdimiento, astenia, somnolencia, náuseas, nerviosismo o irritabilidad, temblor, dolor abdominal y dificultad para pensar o concentrarse.',
          '34084-4',
          'were dizziness/light-headedness, asthenia/lack of energy, somnolence, nausea, nervousness/irritability, tremor, abdominal pain, and thinking abnormal/difficulty with concentration or attention'
        ],
        [
          'Alrededor del 21 % de los 2531 pacientes de los ensayos dejó el tratamiento por un acontecimiento adverso, sobre todo mareo, somnolencia, depresión, confusión y astenia.',
          '34084-4',
          'Approximately 21% of the 2531 patients who received tiagabine hydrochloride in clinical trials of epilepsy discontinued treatment because of an adverse event'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2 mg o 4 mg por comprimido, según la etiqueta; el activo va como clorhidrato de tiagabina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento complementario de las crisis parciales en adultos y niños desde 12 años.',
    actua: 'Su mecanismo exacto se desconoce; se cree que potencia la actividad del GABA, el principal neurotransmisor inhibidor del sistema nervioso central, al bloquear su recaptación en las neuronas presinápticas.',
    recorrido: 'Se absorbe con rapidez y casi por completo (más del 95 %), con una biodisponibilidad oral absoluta de alrededor del 90 % y un pico a unos 45 minutos en ayunas. Alrededor del 2 % de una dosis oral se excreta sin cambios; del resto, el 25 % sale por la orina y el 63 % por las heces, sobre todo como metabolitos.'
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
            f: 'dailymed-tiagabina',
            sec: '11 · Descripción',
            cita: 'Tiagabine hydrochloride, USP is an antiepilepsy drug available as 2 mg and 4 mg tablets for oral administration',
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
      ocurre: 'Se absorbe con rapidez y casi por completo (más del 95 %), con una biodisponibilidad oral absoluta de alrededor del 90 % y un pico a unos 45 minutos en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y casi por completo (más del 95 %), con una biodisponibilidad oral absoluta de alrededor del 90 % y un pico a unos 45 minutos en ayunas.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'Tiagabine is nearly completely absorbed (>95%), with an absolute oral bioavailability of about 90%',
            codigo: '34090-1'
          }
        },
        {
          t: 'El pico plasmático se alcanza a unos 45 minutos de una dosis oral en ayunas.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'Absorption of tiagabine is rapid, with peak plasma concentrations occurring at approximately 45 minutes following an oral dose in the fasting state',
            codigo: '34090-1'
          }
        },
        {
          t: 'Una comida rica en grasas reduce la velocidad de absorción (Tmax de 2,5 horas y Cmax alrededor de un 40 % menor), pero no su magnitud.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'A high fat meal decreases the rate (mean T max was prolonged to 2.5 hours, and mean C max was reduced by about 40%) but not the extent (AUC) of tiagabine absorption',
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
      ocurre: 'Se une en un 96 % a las proteínas del plasma humano, sobre todo a la albúmina sérica y a la glicoproteína ácida α1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96 % a las proteínas del plasma humano, sobre todo a la albúmina sérica y a la glicoproteína ácida α1.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'Tiagabine is 96% bound to human plasma proteins, mainly to serum albumin and α1-acid glycoprotein',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Transportador de recaptación de GABA',
        efecto: 'Su mecanismo exacto se desconoce; se cree que potencia la actividad del GABA, el principal neurotransmisor inhibidor del sistema nervioso central, al bloquear su recaptación en las neuronas presinápticas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; se cree que potencia la actividad del GABA, el principal neurotransmisor inhibidor del sistema nervioso central, al bloquear su recaptación en las neuronas presinápticas.',
            ref: {
              f: 'dailymed-tiagabina',
              sec: '12 · Farmacología clínica',
              cita: 'it is believed to be related to its ability, documented in in vitro experiments, to enhance the activity of gamma aminobutyric acid (GABA), the major inhibitory neurotransmitter in the central nervous system',
              codigo: '34090-1'
            }
          },
          {
            t: 'Se une a los lugares de reconocimiento del transportador de GABA y así bloquea su recaptación en las neuronas presinápticas, con más GABA disponible para los receptores.',
            ref: {
              f: 'dailymed-tiagabina',
              sec: '12 · Farmacología clínica',
              cita: 'tiagabine blocks GABA uptake into presynaptic neurons, permitting more GABA to be available for receptor binding on the surfaces of post-synaptic cells',
              codigo: '34090-1'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Según datos in vitro, probablemente se metaboliza sobre todo por la subfamilia CYP3A del citocromo P450 hepático; se conocen dos vías: oxidación del anillo de tiofeno a 5-oxo-tiagabina y glucuronidación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Según datos in vitro, probablemente se metaboliza sobre todo por la subfamilia CYP3A del citocromo P450 hepático; se conocen dos vías: oxidación del anillo de tiofeno a 5-oxo-tiagabina y glucuronidación.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'tiagabine is likely to be metabolized primarily by the 3A isoform subfamily of hepatic cytochrome P450 (CYP 3A)',
            codigo: '34090-1'
          }
        },
        {
          t: 'Se han identificado al menos dos vías: la oxidación del anillo de tiofeno, que forma 5-oxo-tiagabina, y la glucuronidación.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: '1) thiophene ring oxidation leading to the formation of 5-oxo-tiagabine; and 2) glucuronidation',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-oxo-tiagabina',
          actividad: 'inactivo',
          nota: 'No contribuye a la actividad farmacológica.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'The 5-oxo-tiagabine metabolite does not contribute to the pharmacologic activity of tiagabine',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 2 % de una dosis oral se excreta sin cambios; del resto, el 25 % sale por la orina y el 63 % por las heces, sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 2 % de una dosis oral se excreta sin cambios; del resto, el 25 % sale por la orina y el 63 % por las heces, sobre todo como metabolitos.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 2% of an oral dose of tiagabine is excreted unchanged, with 25% and 63% of the remaining dose excreted into the urine and feces, respectively, primarily as metabolites',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida de eliminación media en sujetos sanos es de 7 a 9 horas y se reduce entre un 50 % y un 65 % en pacientes con inductores enzimáticos hepáticos.',
          ref: {
            f: 'dailymed-tiagabina',
            sec: '12 · Farmacología clínica',
            cita: 'the average elimination half-life for tiagabine in healthy subjects ranged from 7 to 9 hours',
            codigo: '34090-1'
          },
          poblacion: 'sujetos sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'tiagabina',
      ref: { f: 'dailymed-tiagabina', sec: '12 · Farmacología clínica', cita: 'with an absolute oral bioavailability of about 90%', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en ayunas',
      valor: '0,75 (aprox.)',
      unidad: 'h',
      analito: 'tiagabina',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-tiagabina',
        sec: '12 · Farmacología clínica',
        cita: 'peak plasma concentrations occurring at approximately 45 minutes following an oral dose in the fasting state',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96',
      unidad: '%',
      analito: 'tiagabina',
      ref: { f: 'dailymed-tiagabina', sec: '12 · Farmacología clínica', cita: 'Tiagabine is 96% bound to human plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '7-9',
      unidad: 'h',
      analito: 'tiagabina',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-tiagabina',
        sec: '12 · Farmacología clínica',
        cita: 'the average elimination half-life for tiagabine in healthy subjects ranged from 7 to 9 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático sistémico medio',
      valor: '109',
      unidad: 'mL/min',
      analito: 'tiagabina',
      ref: { f: 'dailymed-tiagabina', sec: '12 · Farmacología clínica', cita: 'The mean systemic plasma clearance is 109 mL/min', codigo: '34090-1' }
    },
    {
      magnitud: 'heces',
      nombre: 'Resto de la dosis excretado en las heces',
      valor: '63',
      unidad: '% de la dosis',
      analito: 'tiagabina y metabolitos',
      ref: {
        f: 'dailymed-tiagabina',
        sec: '12 · Farmacología clínica',
        cita: '25% and 63% of the remaining dose excreted into the urine and feces, respectively',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tiagabina', '7eeb2d81-c5d7-46a0-aa5c-149b55df71bd', 'TIAGABINE HYDROCHLORIDE TABLET, FILM COATED', 'TIAGABINE HYDROCHLORIDE', '9', '2018-11-02', '2026-11-19'),
    rengPubchem(60648, 'tiagabine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
