import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oxcarbazepina',
    nombre: 'Oxcarbazepina',
    clase: 'Antiepiléptico (bloqueador de canales de sodio)',
    sinonimos: [ 'oxcarbazepine', 'Trileptal' ],
    formula: 'C15H12N2O2',
    masaMolar: 252.27,
    smiles: 'C1C2=CC=CC=C2N(C3=CC=CC=C3C1=O)C(=O)N',
    inchikey: 'CTRLABGOLIVAIY-UHFFFAOYSA-N',
    cid: 34312,
    iupac: '5-oxo-6H-benzo[b][1]benzazepine-11-carboxamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'oxcarbazepina-oral',
      producto: 'Trileptal · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg, 300 mg o 600 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'crospovidone',
        'hypromelloses',
        'magnesium stearate',
        'titanium dioxide',
        'silicon dioxide',
        'talc',
        'polyethylene glycol',
        'ferric oxide yellow',
        'water'
      ],
      usos: {
        t: 'Crisis epilépticas de inicio parcial en adultos (sola o con otros antiepilépticos) y en niños, según la edad.',
        ref: {
          f: 'dailymed-oxcarbazepina',
          sec: '1 · Indicaciones',
          cita: 'TRILEPTAL is indicated for use as monotherapy or adjunctive therapy in the treatment of partial-onset seizures in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oxcarbazepina',
      advertencias: [
        {
          titulo: 'Hiponatremia',
          texto: 'Puede aparecer hiponatremia clínicamente significativa (sodio por debajo de 125 mmol/L).',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Clinically significant hyponatremia (sodium < 125 mmol/L) can develop during TRILEPTAL use',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Anafilaxia y angioedema',
          texto: 'Se han descrito casos raros de anafilaxia y angioedema que afectan a la laringe, la glotis, los labios y los párpados.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Rare cases of anaphylaxis and angioedema involving the larynx, glottis, lips and eyelids have been reported',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Se han descrito síndrome de Stevens-Johnson y necrólisis epidérmica tóxica en niños y adultos.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious dermatological reactions, including Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN), have been reported in both children and adults in association with TRILEPTAL use',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos y niños: mareo, somnolencia, visión doble, fatiga, náuseas, vómitos, ataxia, visión anormal, dolor de cabeza, nistagmo, temblor y marcha anormal.',
          '34084-4',
          'adverse reactions in adults and pediatrics were: dizziness, somnolence, diplopia, fatigue, nausea, vomiting, ataxia, abnormal vision, headache, nystagmus, tremor, and abnormal gait'
        ],
        [
          'Las que más a menudo llevaron a suspender el tratamiento: mareo, visión doble, ataxia, vómitos y náuseas.',
          '34084-4',
          'The adverse reactions most commonly associated with discontinuation were: dizziness (6.4%), diplopia (5.9%), ataxia (5.2%), vomiting (5.1%), nausea (4.9%)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 150 mg, 300 mg o 600 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Crisis epilépticas de inicio parcial en adultos (sola o con otros antiepilépticos) y en niños, según la edad.',
    actua: 'Su actividad se debe sobre todo al metabolito 10-monohidroxi (MHD). El mecanismo exacto se desconoce; los estudios in vitro indican que bloquean los canales de sodio dependientes del voltaje y estabilizan las membranas neuronales hiperexcitadas.',
    recorrido: 'Tras tomar los comprimidos, la oxcarbazepina se absorbe por completo y se transforma en gran medida en su metabolito activo MHD. Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '3 · Formas y concentraciones',
            cita: 'Film-coated Tablets: 150 mg: pale grey-green, ovaloid, slightly biconvex, scored on both sides',
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
      ocurre: 'Tras tomar los comprimidos, la oxcarbazepina se absorbe por completo y se transforma en gran medida en su metabolito activo MHD.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras tomar los comprimidos, la oxcarbazepina se absorbe por completo y se transforma en gran medida en su metabolito activo MHD.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of TRILEPTAL tablets, oxcarbazepine is completely absorbed and extensively metabolized to its pharmacologically active 10-monohydroxy metabolite (MHD)',
            codigo: '43682-4'
          }
        },
        {
          t: 'En voluntarios varones sanos en ayunas, la mediana del tiempo hasta el pico fue de 4,5 horas (de 3 a 13) con los comprimidos.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'After single-dose administration of TRILEPTAL tablets to healthy male volunteers under fasted conditions, the median t max was 4.5 (range, 3 to 13) hours',
            codigo: '43682-4'
          },
          poblacion: 'varones sanos',
          condiciones: 'en ayunas'
        },
        {
          t: 'La comida no afecta a la velocidad ni a la cantidad de oxcarbazepina absorbida de los comprimidos.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'Food has no effect on the rate and extent of absorption of oxcarbazepine from TRILEPTAL tablets',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente del MHD es de 49 L y alrededor del 40 % del MHD circula unido a proteínas del suero, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente del MHD es de 49 L y alrededor del 40 % del MHD circula unido a proteínas del suero, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of MHD is 49 L. Approximately 40% of MHD is bound to serum proteins, predominantly to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canales de sodio dependientes del voltaje (mecanismo no establecido del todo)',
        efecto: 'Su actividad se debe sobre todo al metabolito 10-monohidroxi (MHD). El mecanismo exacto se desconoce; los estudios in vitro indican que bloquean los canales de sodio dependientes del voltaje y estabilizan las membranas neuronales hiperexcitadas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su actividad se debe sobre todo al metabolito 10-monohidroxi (MHD). El mecanismo exacto se desconoce; los estudios in vitro indican que bloquean los canales de sodio dependientes del voltaje y estabilizan las membranas neuronales hiperexcitadas.',
            ref: {
              f: 'dailymed-oxcarbazepina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The pharmacological activity of TRILEPTAL is primarily exerted through the 10-monohydroxy metabolite (MHD) of oxcarbazepine',
              codigo: '43679-0'
            }
          },
          {
            t: 'Los estudios electrofisiológicos in vitro indican que producen bloqueo de los canales de sodio dependientes del voltaje.',
            ref: {
              f: 'dailymed-oxcarbazepina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'in vitro electrophysiological studies indicate that they produce blockade of voltage-sensitive sodium channels',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las enzimas del citosol del hígado la reducen con rapidez al metabolito MHD, que explica casi todo el efecto; el MHD se conjuga después con ácido glucurónico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las enzimas del citosol del hígado la reducen con rapidez al metabolito MHD, que explica casi todo el efecto; el MHD se conjuga después con ácido glucurónico.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'Oxcarbazepine is rapidly reduced by cytosolic enzymes in the liver to its 10-monohydroxy metabolite, MHD',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '10-monohidroxi (MHD)',
          actividad: 'activo',
          nota: 'Responsable de la mayor parte de la actividad antiepiléptica.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'extensively metabolized to its pharmacologically active 10-monohydroxy metabolite (MHD)',
            codigo: '43682-4'
          }
        },
        {
          nombre: '10,11-dihidroxi (DHD)',
          actividad: 'inactivo',
          nota: 'Alrededor del 4 % de la dosis.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'oxidized to the pharmacologically inactive 10,11-dihydroxy metabolite (DHD)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 95 % de la dosis aparece en la orina, con menos del 1 % como oxcarbazepina sin cambios; la eliminación por las heces es inferior al 4 %.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'More than 95% of the dose appears in the urine, with less than 1% as unchanged oxcarbazepine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida del fármaco original es de unas 2 horas y la del MHD, de unas 9 horas.',
          ref: {
            f: 'dailymed-oxcarbazepina',
            sec: '12.3 · Farmacocinética',
            cita: 'The half-life of the parent is about 2 hours, while the half-life of MHD is about 9 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (MHD) con los comprimidos',
      valor: '4,5 (mediana; intervalo 3 a 13)',
      unidad: 'h',
      analito: 'MHD',
      poblacion: 'varones sanos',
      condiciones: 'dosis única en ayunas',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'After single-dose administration of TRILEPTAL tablets to healthy male volunteers under fasted conditions, the median t max was 4.5 (range, 3 to 13) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del fármaco original',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'oxcarbazepina',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'The half-life of the parent is about 2 hours, while the half-life of MHD is about 9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del MHD',
      valor: '9 (aprox.)',
      unidad: 'h',
      analito: 'MHD',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'The half-life of the parent is about 2 hours, while the half-life of MHD is about 9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente del MHD',
      valor: '49',
      unidad: 'L',
      analito: 'MHD',
      ref: { f: 'dailymed-oxcarbazepina', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution of MHD is 49 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero del MHD',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'MHD',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 40% of MHD is bound to serum proteins, predominantly to albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis que aparece en la orina',
      valor: '> 95',
      unidad: '% de la dosis',
      analito: 'todas las formas',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'More than 95% of the dose appears in the urine, with less than 1% as unchanged oxcarbazepine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis eliminada por las heces',
      valor: '< 4',
      unidad: '% de la dosis',
      analito: 'todas las formas',
      ref: {
        f: 'dailymed-oxcarbazepina',
        sec: '12.3 · Farmacocinética',
        cita: 'Fecal excretion accounts for less than 4% of the administered dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oxcarbazepina', '4c5c86c8-ab7f-4fcf-bc1b-5a0b1fd0691b', 'TRILEPTAL (OXCARBAZEPINE) TABLET, FILM COATED TRILEPTAL (OXCARBAZEPINE) SUSPENSION', 'Trileptal', '40', '2026-10-30', '2026-11-15'),
    rengPubchem(34312, 'oxcarbazepine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
