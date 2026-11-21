import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'solriamfetol',
    nombre: 'Solriamfetol',
    clase: 'Inhibidor de la recaptación de dopamina y noradrenalina (promotor de la vigilia)',
    sinonimos: [ 'solriamfetol', 'Sunosi' ],
    formula: 'C10H14N2O2',
    masaMolar: 194.23,
    smiles: 'C1=CC=C(C=C1)C[C@H](COC(=O)N)N',
    inchikey: 'UCTRAOBQFUDCSR-SECBINFHSA-N',
    cid: 10130337,
    iupac: '[(2R)-2-amino-3-phenylpropyl] carbamate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'solriamfetol-oral',
      producto: 'SUNOSI · comprimido recubierto con película',
      titular: 'AXSOME THERAPEUTICS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '75 mg o 150 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de solriamfetol',
        ref: {
          f: 'dailymed-solriamfetol',
          sec: '3 · Formas y concentraciones',
          cita: '75 mg solriamfetol equivalent to 89.3 mg of the hydrochloride salt',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'hydroxypropyl cellulose (90000 wamw)',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol 3350',
        'titanium dioxide',
        'talc',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Mejorar la vigilia en adultos con somnolencia diurna excesiva asociada a narcolepsia o apnea obstructiva del sueño; no trata la obstrucción de la vía aérea.',
        ref: {
          f: 'dailymed-solriamfetol',
          sec: '1 · Indicaciones',
          cita: 'SUNOSI is indicated to improve wakefulness in adult patients with excessive daytime sleepiness associated with narcolepsy or obstructive sleep apnea (OSA)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-solriamfetol',
      advertencias: [
        {
          titulo: 'Aumento de la presión arterial y de la frecuencia cardíaca',
          texto: 'Aumenta la presión sistólica y diastólica y la frecuencia cardíaca de forma dependiente de la dosis; evitarlo en enfermedad cardiovascular inestable o arritmias cardíacas graves.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid use in patients with unstable cardiovascular disease, serious heart arrhythmias, or other serious heart problems',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síntomas psiquiátricos',
          texto: 'Precaución si hay antecedentes de psicosis o trastorno bipolar; valorar reducir o suspender si aparecen síntomas psiquiátricos.',
          organos: [],
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Psychiatric Symptoms : Use caution in treating patients with a history of psychosis or bipolar disorders',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): cefalea, náuseas, disminución del apetito, insomnio y ansiedad.',
          '34084-4',
          'Most common adverse reactions (≥ 5% and greater than placebo): headache, nausea, decreased appetite, insomnia, and anxiety'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran el aumento de la presión arterial y de la frecuencia cardíaca y los síntomas psiquiátricos.',
          '34084-4',
          'Blood Pressure and Heart Rate Increases [see Warnings and Precautions ( 5.1 )] Psychiatric Symptoms'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 75 mg o 150 mg por comprimido, según la etiqueta; el activo va como clorhidrato de solriamfetol. Los excipientes no son el principio activo.',
    usos: 'Mejorar la vigilia en adultos con somnolencia diurna excesiva asociada a narcolepsia o apnea obstructiva del sueño; no trata la obstrucción de la vía aérea.',
    actua: 'Su mecanismo no está claro, pero su eficacia podría deberse a la inhibición de la recaptación de dopamina y noradrenalina.',
    recorrido: 'La biodisponibilidad oral es de alrededor del 95 % y la mediana del Tmax de 2 horas en ayunas. Alrededor del 95 % de la dosis se recuperó en la orina como solriamfetol sin cambios; el aclaramiento renal es la mayor parte del aclaramiento total.'
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
            f: 'dailymed-solriamfetol',
            sec: '3 · Formas y concentraciones',
            cita: 'dark yellow oblong tablet with "75" debossed on one side',
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
      ocurre: 'La biodisponibilidad oral es de alrededor del 95 % y la mediana del Tmax de 2 horas en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral es de alrededor del 95 % y la mediana del Tmax de 2 horas en ayunas.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral bioavailability of solriamfetol is approximately 95%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico plasmático aparece con una mediana de 2 horas (1,25 a 3,0) en ayunas.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentration of solriamfetol occurs at a median T max of 2 hours (range 1.25 to 3.0 hours) post-dose under fasted conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas apenas cambió la Cmax y el AUC, pero retrasó el Tmax alrededor de 1 hora.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion of solriamfetol with a high-fat meal resulted in minimal change in C max and AUC inf ; however, a delay of approximately 1 hour in T max was observed',
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
      ocurre: 'El volumen de distribución aparente es de unos 199 L y la unión a las proteínas del plasma va del 13,3 % al 19,4 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente es de unos 199 L y la unión a las proteínas del plasma va del 13,3 % al 19,4 %.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding ranged from 13.3% to 19.4% over solriamfetol concentration range of 0.059 to 10.1 mcg/mL in human plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 199 L.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of solriamfetol is approximately 199 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transportadores de dopamina y noradrenalina',
        efecto: 'Su mecanismo no está claro, pero su eficacia podría deberse a la inhibición de la recaptación de dopamina y noradrenalina.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no está claro, pero su eficacia podría deberse a la inhibición de la recaptación de dopamina y noradrenalina.',
            ref: {
              f: 'dailymed-solriamfetol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its efficacy could be mediated through its activity as a dopamine and norepinephrine reuptake inhibitor (DNRI)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mínimamente en humanos.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mínimamente en humanos.',
          ref: { f: 'dailymed-solriamfetol', sec: '12.3 · Farmacocinética', cita: 'Solriamfetol is minimally metabolized in humans', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-acetil-solriamfetol',
          actividad: 'inactivo',
          nota: 'Metabolito menor e inactivo (1 % o menos de la dosis).',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: '1% or less of the dose was recovered as the minor inactive metabolite N‑acetyl solriamfetol',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 95 % de la dosis se recuperó en la orina como solriamfetol sin cambios; el aclaramiento renal es la mayor parte del aclaramiento total.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 95 % de la dosis se recuperó en la orina como solriamfetol sin cambios; el aclaramiento renal es la mayor parte del aclaramiento total.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 95% of the dose was recovered in urine as unchanged solriamfetol',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento renal (18,2 L/h) representó la mayor parte del aclaramiento total aparente (19,5 L/h); probablemente interviene la secreción tubular activa.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal clearance (18.2 L/h) represented the majority of apparent total clearance (19.5 L/h)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media aparente es de unas 7,1 horas.',
          ref: {
            f: 'dailymed-solriamfetol',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent mean elimination half‑life is about 7.1 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'solriamfetol',
      ref: {
        f: 'dailymed-solriamfetol',
        sec: '12.3 · Farmacocinética',
        cita: 'The oral bioavailability of solriamfetol is approximately 95%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax en ayunas',
      valor: '2',
      unidad: 'h',
      analito: 'solriamfetol',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-solriamfetol',
        sec: '12.3 · Farmacocinética',
        cita: 'occurs at a median T max of 2 hours (range 1.25 to 3.0 hours) post-dose under fasted conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '199 (aprox.)',
      unidad: 'L',
      analito: 'solriamfetol',
      ref: {
        f: 'dailymed-solriamfetol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of solriamfetol is approximately 199 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '13,3-19,4',
      unidad: '%',
      analito: 'solriamfetol',
      ref: { f: 'dailymed-solriamfetol', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding ranged from 13.3% to 19.4%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación aparente',
      valor: '7,1 (aprox.)',
      unidad: 'h',
      analito: 'solriamfetol',
      ref: {
        f: 'dailymed-solriamfetol',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent mean elimination half‑life is about 7.1 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada sin cambios en la orina',
      valor: '95 (aprox.)',
      unidad: '% de la dosis',
      analito: 'solriamfetol inalterado',
      ref: {
        f: 'dailymed-solriamfetol',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 95% of the dose was recovered in urine as unchanged solriamfetol',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-solriamfetol', '362f206b-73e7-4009-8c34-5a9df55679ab', 'SUNOSI (SOLRIAMFETOL) TABLET, FILM COATED', 'SUNOSI', '6', '2026-05-11', '2026-11-19'),
    rengPubchem(10130337, 'solriamfetol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
