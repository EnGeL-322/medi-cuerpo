import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cenobamato',
    nombre: 'Cenobamato',
    clase: 'Antiepiléptico (inhibidor de la corriente de sodio y modulador del receptor GABA-A)',
    sinonimos: [ 'cenobamate', 'Xcopri' ],
    formula: 'C10H10ClN5O2',
    masaMolar: 267.67,
    smiles: 'C1=CC=C(C(=C1)[C@H](CN2N=CN=N2)OC(=O)N)Cl',
    inchikey: 'GFHAXPJGXSQLPT-VIFPVBQESA-N',
    cid: 11962412,
    iupac: '[(1R)-1-(2-chlorophenyl)-2-(tetrazol-2-yl)ethyl] carbamate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'cenobamato-oral',
      producto: 'Xcopri · comprimido recubierto con película',
      titular: 'SK LIFE SCIENCE, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25, 50, 100, 150 o 200 mg de cenobamato por comprimido recubierto con película, según la etiqueta (el de 12,5 mg no lleva recubrimiento)',
      excipientes: [
        'Dióxido de silicio coloidal',
        'Lactosa monohidrato',
        'Estearato de magnesio',
        'Celulosa microcristalina',
        'Glicolato sódico de almidón',
        'Cubierta pelicular (según la dosis): óxidos de hierro, polietilenglicol 3350, alcohol polivinílico parcialmente hidrolizado, talco, dióxido de titanio y, en 25 y 100 mg, laca de aluminio de índigo carmín (FD&C azul n.º 2)'
      ],
      usos: {
        t: 'Tratamiento de las crisis de inicio parcial en adultos.',
        ref: {
          f: 'dailymed-cenobamato',
          sec: '1 · Indicaciones',
          cita: 'XCOPRI is indicated for the treatment of partial-onset seizures in adult patients',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cenobamato',
      advertencias: [
        {
          titulo: 'Reacción con eosinofilia y síntomas sistémicos (DRESS)',
          texto: 'Se ha notificado DRESS (hipersensibilidad multiorgánica), con un caso mortal, cuando la dosis se subió rápido; hay que suspender si no hay otra causa.',
          organos: [],
          ref: {
            f: 'dailymed-cenobamato',
            sec: '5 · Advertencias y precauciones',
            cita: 'DRESS has occurred, including one fatality, when XCOPRI was titrated rapidly (weekly or faster titration)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Acortamiento del QT',
          texto: 'Más pacientes que con placebo tuvieron un acortamiento del QT de más de 20 ms; no debe usarse en el síndrome de QT corto familiar.',
          organos: [],
          ref: {
            f: 'dailymed-cenobamato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Patients with Familial Short QT syndrome should not be treated with XCOPRI',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Lesión hepática',
          texto: 'Se ha producido lesión hepática clínicamente significativa; hay que medir transaminasas y bilirrubina antes de empezar.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-cenobamato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Liver Injury: Clinically significant liver injury has occurred',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Conducta e ideación suicidas',
          texto: 'Hay que vigilar la aparición de conductas e ideas suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-cenobamato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Suicidal Behavior and Ideation: Monitor patients for suicidal behavior and ideation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos el 10 % y más que con placebo): somnolencia, mareo, fatiga, diplopía y cefalea.',
          '34084-4',
          'The most common adverse reactions in patients receiving XCOPRI (at least 10% for XCOPRI and more frequently than placebo) include somnolence, dizziness, fatigue, diplopia, and headache'
        ],
        [
          'En los estudios 1 y 2 hubo acontecimientos adversos en el 77 % de los pacientes con cenobamato y en el 68 % con placebo.',
          '34084-4',
          'In Study 1 and Study 2, adverse events occurred in 77% of patients treated with XCOPRI and 68%'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25, 50, 100, 150 o 200 mg de cenobamato por comprimido recubierto con película, según la etiqueta (el de 12,5 mg no lleva recubrimiento). Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las crisis de inicio parcial en adultos.',
    actua: 'Su mecanismo exacto se desconoce; reduce la descarga neuronal repetitiva al inhibir las corrientes de sodio dependientes de voltaje y es un modulador alostérico positivo del canal iónico GABA-A.',
    recorrido: 'Se absorbe al menos el 88 % tras la administración oral, con una mediana del Tmax de 1 a 4 horas. Tras una dosis marcada se recuperó de media el 93,0 % de la radiactividad: el 87,8 % en la orina y el 5,2 % en las heces.'
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
          ref: { f: 'dailymed-cenobamato', sec: '11 · Descripción', cita: 'XCOPRI tablets are for oral administration', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe al menos el 88 % tras la administración oral, con una mediana del Tmax de 1 a 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe al menos el 88 % tras la administración oral, con una mediana del Tmax de 1 a 4 horas.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'At least 88% of XCOPRI is absorbed following oral administration, with median T max ranging from 1 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in cenobamate pharmacokinetics were observed following administration of a high-fat meal',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los comprimidos triturados en agua dieron una Cmax y un AUC parecidos a los del comprimido entero, con una mediana del Tmax de 0,5 horas.',
          ref: { f: 'dailymed-cenobamato', sec: '12.3 · Farmacocinética', cita: 'The median T max for crushed tablets is 0.5 hours', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente es de unos 40-50 L; in vitro se une en un 60 % a las proteínas del plasma, sobre todo a la albúmina humana.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente es de unos 40-50 L; in vitro se une en un 60 % a las proteínas del plasma, sobre todo a la albúmina humana.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of cenobamate is 60% and independent of concentration in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente tras la toma oral de unos 40-50 L.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (Vd/F) of cenobamate after oral administration of XCOPRI is approximately 40-50 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Corrientes de sodio dependientes de voltaje y receptor GABA-A',
        efecto: 'Su mecanismo exacto se desconoce; reduce la descarga neuronal repetitiva al inhibir las corrientes de sodio dependientes de voltaje y es un modulador alostérico positivo del canal iónico GABA-A.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; reduce la descarga neuronal repetitiva al inhibir las corrientes de sodio dependientes de voltaje y es un modulador alostérico positivo del canal iónico GABA-A.',
            ref: {
              f: 'dailymed-cenobamato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cenobamate has been demonstrated to reduce repetitive neuronal firing by inhibiting voltage-gated sodium currents',
              codigo: '43679-0'
            }
          },
          {
            t: 'También es un modulador alostérico positivo del canal iónico del ácido γ-aminobutírico (GABA-A).',
            ref: {
              f: 'dailymed-cenobamato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'It is also a positive allosteric modulator of the γ-aminobutyric acid (GABA A ) ion channel',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa, sobre todo por glucuronidación (UGT2B7 y, en menor medida, UGT2B4) y por oxidación (CYP2E1, CYP2A6, CYP2B6 y, en menor medida, CYP2C19 y CYP3A4/5).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa, sobre todo por glucuronidación (UGT2B7 y, en menor medida, UGT2B4) y por oxidación (CYP2E1, CYP2A6, CYP2B6 y, en menor medida, CYP2C19 y CYP3A4/5).',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary metabolic pathways are by glucuronidation via UGT2B7 and to a lesser extent by UGT2B4, and by oxidation via CYP2E1, CYP2A6, CYP2B6, and to a lesser extent by CYP2C19 and CYP3A4/5',
            codigo: '43682-4'
          }
        },
        {
          t: 'El cenobamato inalterado supuso más del 98 % del AUC de radiactividad total en el plasma.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'unchanged cenobamate accounted for greater than 98% of the total AUC of radioactivity in plasma',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada se recuperó de media el 93,0 % de la radiactividad: el 87,8 % en la orina y el 5,2 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada se recuperó de media el 93,0 % de la radiactividad: el 87,8 % en la orina y el 5,2 % en las heces.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'a mean of 93.0% of the total radioactive dose was recovered in urine (87.8%) and feces (5.2%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El cenobamato inalterado supuso el 6,8 % de la dosis, casi todo excretado en la orina (6,4 %).',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Unchanged cenobamate accounted for 6.8% of the dose which was mainly excreted in the urine (6.4%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente es de 50-60 horas.',
          ref: {
            f: 'dailymed-cenobamato',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal half-life of cenobamate is 50-60 hours',
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
      valor: '≥ 88',
      unidad: '%',
      analito: 'cenobamato',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'At least 88% of XCOPRI is absorbed following oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '1-4',
      unidad: 'h',
      analito: 'cenobamato',
      ref: { f: 'dailymed-cenobamato', sec: '12.3 · Farmacocinética', cita: 'with median T max ranging from 1 to 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (Vd/F)',
      valor: '40-50 (aprox.)',
      unidad: 'L',
      analito: 'cenobamato',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (Vd/F) of cenobamate after oral administration of XCOPRI is approximately 40-50 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '60',
      unidad: '%',
      analito: 'cenobamato',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of cenobamate is 60% and independent of concentration in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '50-60',
      unidad: 'h',
      analito: 'cenobamato',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal half-life of cenobamate is 50-60 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '0,45-0,63 (aprox.)',
      unidad: 'L/h',
      analito: 'cenobamato',
      condiciones: '100 a 400 mg al día',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent oral clearance is approximately 0.45-0.63 L/hour over a dose range from 100 mg/day to 400 mg/day',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '87,8',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-cenobamato',
        sec: '12.3 · Farmacocinética',
        cita: 'a mean of 93.0% of the total radioactive dose was recovered in urine (87.8%) and feces (5.2%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cenobamato', '565c2126-57ae-4e29-b443-723bbe7e2072', 'XCOPRI TITRATION PACK (CENOBAMATE) KIT XCOPRI (CENOBAMATE) TABLET, FILM COATED XCOPRI MAINTENANCE PACK (CENOBAMATE) KIT XCOPRI (CENOBAMATE) TABLET', 'Xcopri', '46', '2026-08-27', '2026-11-18'),
    rengPubchem(11962412, 'cenobamate', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
