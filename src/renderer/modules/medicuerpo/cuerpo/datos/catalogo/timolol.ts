import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'timolol',
    nombre: 'Timolol',
    clase: 'Betabloqueante no selectivo (beta-1 y beta-2)',
    sinonimos: [ 'timolol maleate', 'Blocadren' ],
    formula: 'C13H24N4O3S',
    masaMolar: 316.42,
    smiles: 'CC(C)(C)NC[C@@H](COC1=NSN=C1N2CCOCC2)O',
    inchikey: 'BLJRIMJGRPQVNF-JTQLQIEISA-N',
    cid: 33624,
    iupac: '(2S)-1-(tert-butylamino)-3-[(4-morpholin-4-yl-1,2,5-thiadiazol-3-yl)oxy]propan-2-ol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'timolol-oral',
      producto: 'Timolol Maleate · comprimido',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 10 mg o 20 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Maleato de timolol', ref: { f: 'dailymed-timolol', sec: '11 · Descripción', cita: 'Timolol maleate', codigo: '34089-3' } },
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'starch, pregelatinized corn',
        'sodium lauryl sulfate'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o con otros antihipertensivos, y prevención tras la fase aguda del infarto de miocardio.',
        ref: {
          f: 'dailymed-timolol',
          sec: '1 · Indicaciones',
          cita: 'Timolol maleate tablets are indicated for the treatment of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-timolol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'En la contractilidad miocárdica disminuida, el bloqueo beta puede precipitar una insuficiencia más grave.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-timolol',
            sec: 'Advertencias',
            cita: 'Sympathetic stimulation may be essential for support of the circulation in individuals with diminished myocardial contractility, and its inhibition by beta-adrenergic receptor blockade may precipitate more severe failure',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Suele tolerarse bien; la mayoría de los efectos adversos han sido leves y transitorios.',
          '34084-4',
          'Timolol maleate tablets are usually well tolerated in properly selected patients. Most adverse effects have been mild and transient'
        ],
        [
          'En el estudio tras el infarto, la astenia o fatiga apareció en el 5 % con timolol frente al 1 % con placebo.',
          '34084-4',
          'Asthenia or Fatigue 5 1'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg, 10 mg o 20 mg por comprimido, según la etiqueta; el activo va como maleato de timolol. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o con otros antihipertensivos, y prevención tras la fase aguda del infarto de miocardio.',
    actua: 'Bloqueante no selectivo de los receptores adrenérgicos beta-1 y beta-2, sin actividad simpaticomimética intrínseca significativa; reduce el gasto cardíaco y, en los bronquios, aumenta la resistencia de la vía aérea.',
    recorrido: 'Se absorbe con rapidez y casi por completo (alrededor del 90 %); el pico plasmático aparece en 1 a 2 horas. El timolol y sus metabolitos se excretan por el riñón; la semivida plasmática es de unas 4 horas.'
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
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Timolol maleate is rapidly and nearly completely absorbed (about 90%) following oral ingestion',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y casi por completo (alrededor del 90 %); el pico plasmático aparece en 1 a 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y casi por completo (alrededor del 90 %); el pico plasmático aparece en 1 a 2 horas.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Timolol maleate is rapidly and nearly completely absorbed (about 90%) following oral ingestion',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los niveles son detectables a la media hora y el pico aparece en una a dos horas.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Detectable plasma levels of timolol occur within one-half hour and peak plasma levels occur in about one to two hours',
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
      ocurre: 'No se une mucho a las proteínas del plasma: menos del 10 % por diálisis de equilibrio y alrededor del 60 % por ultrafiltración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se une mucho a las proteínas del plasma: menos del 10 % por diálisis de equilibrio y alrededor del 60 % por ultrafiltración.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Timolol is not extensively bound to plasma proteins; i.e., < 10% by equilibrium dialysis and approximately 60% by ultrafiltration',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores adrenérgicos beta-1 y beta-2',
        efecto: 'Bloqueante no selectivo de los receptores adrenérgicos beta-1 y beta-2, sin actividad simpaticomimética intrínseca significativa; reduce el gasto cardíaco y, en los bronquios, aumenta la resistencia de la vía aérea.',
        lugar: [ 'corazon', 'vias-respiratorias' ],
        datos: [
          {
            t: 'Bloqueante no selectivo de los receptores adrenérgicos beta-1 y beta-2, sin actividad simpaticomimética intrínseca significativa; reduce el gasto cardíaco y, en los bronquios, aumenta la resistencia de la vía aérea.',
            ref: {
              f: 'dailymed-timolol',
              sec: '12 · Farmacología clínica',
              cita: 'Timolol maleate is a beta 1 and beta 2 (nonselective) adrenergic receptor blocking agent that does not have significant intrinsic sympathomimetic, direct myocardial depressant, or local anesthetic activity',
              codigo: '34090-1'
            }
          },
          {
            t: 'El bloqueo beta reduce el gasto cardíaco en sujetos sanos y en cardiópatas.',
            ref: {
              f: 'dailymed-timolol',
              sec: '12.2 · Farmacodinámica',
              cita: 'Beta-adrenergic receptor blockade reduces cardiac output in both healthy subjects and patients with heart disease',
              codigo: '43681-6'
            }
          },
          {
            t: 'En los bronquios y bronquiolos, el bloqueo beta aumenta la resistencia de la vía aérea.',
            ref: {
              f: 'dailymed-timolol',
              sec: '12.2 · Farmacodinámica',
              cita: 'Beta-adrenergic receptor blockade in the bronchi and bronchioles results in increased airway resistance from unopposed parasympathetic activity',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en parte en el hígado; los niveles orales son alrededor de la mitad de los intravenosos, lo que indica un primer paso de alrededor del 50 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en parte en el hígado; los niveles orales son alrededor de la mitad de los intravenosos, lo que indica un primer paso de alrededor del 50 %.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Timolol is partially metabolized by the liver and timolol and its metabolites are excreted by the kidney',
            codigo: '43682-4'
          }
        },
        {
          t: 'El primer paso supone alrededor del 50 %.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma levels following oral administration are about half those following intravenous administration indicating approximately 50% first pass metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El timolol y sus metabolitos se excretan por el riñón; la semivida plasmática es de unas 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El timolol y sus metabolitos se excretan por el riñón; la semivida plasmática es de unas 4 horas.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Timolol is partially metabolized by the liver and timolol and its metabolites are excreted by the kidney',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática es de unas 4 horas y casi no cambia en la insuficiencia renal moderada.',
          ref: {
            f: 'dailymed-timolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The drug half-life in plasma is approximately 4 hours and this is essentially unchanged in patients with moderate renal insufficiency',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'timolol',
      ref: {
        f: 'dailymed-timolol',
        sec: '12.3 · Farmacocinética',
        cita: 'Timolol maleate is rapidly and nearly completely absorbed (about 90%) following oral ingestion',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'timolol',
      ref: { f: 'dailymed-timolol', sec: '12.3 · Farmacocinética', cita: 'peak plasma levels occur in about one to two hours', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'timolol',
      ref: { f: 'dailymed-timolol', sec: '12.3 · Farmacocinética', cita: 'The drug half-life in plasma is approximately 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'otra',
      nombre: 'Metabolismo de primer paso',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'timolol',
      ref: { f: 'dailymed-timolol', sec: '12.3 · Farmacocinética', cita: 'indicating approximately 50% first pass metabolism', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-timolol', '0bc40b2c-65eb-4095-87e6-4752d5b19a3a', 'TIMOLOL MALEATE TABLET', 'Timolol Maleate', '1', '2024-12-12', '2026-11-19'),
    rengPubchem(33624, 'timolol maleate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
