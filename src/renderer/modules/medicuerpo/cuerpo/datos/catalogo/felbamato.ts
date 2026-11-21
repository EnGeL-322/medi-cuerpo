import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'felbamato',
    nombre: 'Felbamato',
    clase: 'Antiepiléptico (dicarbamato)',
    sinonimos: [ 'felbamate', 'Felbatol' ],
    formula: 'C11H14N2O4',
    masaMolar: 238.24,
    smiles: 'C1=CC=C(C=C1)C(COC(=O)N)COC(=O)N',
    inchikey: 'WKGXYQFOCVYPAC-UHFFFAOYSA-N',
    cid: 3331,
    iupac: '(3-carbamoyloxy-2-phenylpropyl) carbamate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'felbamato-oral',
      producto: 'Felbatol · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '400 mg o 600 mg por comprimido, según la etiqueta',
      excipientes: [
        'Almidón',
        'Celulosa microcristalina',
        'Croscarmelosa sódica',
        'Lactosa',
        'Estearato de magnesio',
        'Amarillo FD&C n.º 6',
        'Amarillo D&C n.º 10',
        'Rojo FD&C n.º 40 (solo en 600 mg)'
      ],
      usos: {
        t: 'Solo en pacientes que no responden bien a otros tratamientos y cuya epilepsia es tan grave que el riesgo de anemia aplásica o insuficiencia hepática se considera aceptable; no es de primera línea.',
        ref: {
          f: 'dailymed-felbamato',
          sec: '1 · Indicaciones',
          cita: 'Felbatol ® is recommended for use only in those patients who respond inadequately to alternative treatments and whose epilepsy is so severe that a substantial risk of aplastic anemia and/or liver failure is deemed acceptable',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-felbamato',
      advertencias: [
        {
          titulo: 'Anemia aplásica',
          texto: 'Se asocia a un aumento marcado de la incidencia de anemia aplásica; solo debe usarse en epilepsias tan graves que ese riesgo se considere aceptable.',
          organos: [],
          ref: {
            f: 'dailymed-felbamato',
            sec: 'Advertencia destacada',
            cita: 'THE USE OF FELBATOL ® (felbamate) IS ASSOCIATED WITH A MARKED INCREASE IN THE INCIDENCE OF APLASTIC ANEMIA',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Insuficiencia hepática',
          texto: 'La experiencia poscomercialización indica que se asocia a insuficiencia hepática aguda, con muertes o trasplantes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-felbamato',
            sec: 'Advertencia destacada',
            cita: 'EVALUATION OF POSTMARKETING EXPERIENCE SUGGESTS THAT ACUTE LIVER FAILURE IS ASSOCIATED WITH THE USE OF FELBATOL ®',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Conducta e ideación suicidas',
          texto: 'Los antiepilépticos, incluido el felbamato, aumentan el riesgo de pensamientos o conductas suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-felbamato',
            sec: 'Advertencias',
            cita: 'Antiepileptic drugs (AEDs) including Felbatol ® , increase the risk of suicidal thoughts or behavior in patients taking these drugs for any indication',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'En monoterapia en adultos, las más frecuentes fueron anorexia, vómitos, insomnio, náuseas y cefalea.',
          '34084-4',
          'most common adverse reactions seen in association with Felbatol ® (felbamate) in adults during monotherapy are anorexia, vomiting, insomnia, nausea, and headache'
        ],
        [
          'En tratamiento complementario en adultos: anorexia, vómitos, insomnio, náuseas, mareo, somnolencia y cefalea.',
          '34084-4',
          'The most common adverse reactions seen in association with Felbatol ® in adults during adjunctive therapy are anorexia, vomiting, insomnia, nausea, dizziness, somnolence, and headache'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 400 mg o 600 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Solo en pacientes que no responden bien a otros tratamientos y cuya epilepsia es tan grave que el riesgo de anemia aplásica o insuficiencia hepática se considera aceptable; no es de primera línea.',
    actua: 'Su mecanismo anticonvulsivo se desconoce; en modelos animales comparte propiedades con otros anticonvulsivos.',
    recorrido: 'Se absorbe bien tras la toma oral; más del 90 % de la radiactividad de una dosis marcada apareció en la orina, y los alimentos no afectaron a la absorción del comprimido. Entre el 40 % y el 50 % de la dosis absorbida aparece sin cambios en la orina y otro 40 % como metabolitos y conjugados no identificados.'
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
            f: 'dailymed-felbamato',
            sec: '11 · Descripción',
            cita: 'Felbatol ® (felbamate) is an antiepileptic available as 400 mg and 600 mg tablets',
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
      ocurre: 'Se absorbe bien tras la toma oral; más del 90 % de la radiactividad de una dosis marcada apareció en la orina, y los alimentos no afectaron a la absorción del comprimido.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien tras la toma oral; más del 90 % de la radiactividad de una dosis marcada apareció en la orina, y los alimentos no afectaron a la absorción del comprimido.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Felbamate is well-absorbed after oral administration. Over 90% of the radioactivity after a dose of 1000 mg 14 C felbamate was found in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no afectaron a la absorción del comprimido.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'There was no effect of food on absorption of the tablet',
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
      ocurre: 'La unión a las proteínas del plasma humano va del 22 % al 25 %, sobre todo a la albúmina, sin depender de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma humano va del 22 % al 25 %, sobre todo a la albúmina, sin depender de la concentración.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding ranged from 22% to 25%, mostly to albumin, and was dependent on the albumin concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión no dependió de la concentración entre 10 y 310 microgramos/mL.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding of felbamate to human plasma protein was independent of felbamate concentrations between 10 and 310 micrograms/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Mecanismo no establecido',
        efecto: 'Su mecanismo anticonvulsivo se desconoce; en modelos animales comparte propiedades con otros anticonvulsivos.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo anticonvulsivo se desconoce; en modelos animales comparte propiedades con otros anticonvulsivos.',
            ref: {
              f: 'dailymed-felbamato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism by which felbamate exerts its anticonvulsant activity is unknown, but in animal test systems designed to detect anticonvulsant activity, felbamate has properties in common with other marketed anticonvulsants',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor del 15 % se transforma en parahidroxifelbamato, 2-hidroxifelbamato y monocarbamato de felbamato, sin actividad anticonvulsiva significativa; otro 40 % aparece como metabolitos y conjugados no identificados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor del 15 % se transforma en parahidroxifelbamato, 2-hidroxifelbamato y monocarbamato de felbamato, sin actividad anticonvulsiva significativa; otro 40 % aparece como metabolitos y conjugados no identificados.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'About 15% is present as parahydroxyfelbamate, 2-hydroxyfelbamate, and felbamate monocarbamate, none of which have significant anticonvulsant activity',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Parahidroxifelbamato, 2-hidroxifelbamato y monocarbamato de felbamato',
          actividad: 'inactivo',
          nota: 'Sin actividad anticonvulsiva significativa.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'About 15% is present as parahydroxyfelbamate, 2-hydroxyfelbamate, and felbamate monocarbamate, none of which have significant anticonvulsant activity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 40 % y el 50 % de la dosis absorbida aparece sin cambios en la orina y otro 40 % como metabolitos y conjugados no identificados.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 40 % y el 50 % de la dosis absorbida aparece sin cambios en la orina y otro 40 % como metabolitos y conjugados no identificados.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'About 40-50% of absorbed dose appears unchanged in urine, and an additional 40% is present as unidentified metabolites and conjugates',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de 20 a 23 horas y no cambia con dosis repetidas.',
          ref: {
            f: 'dailymed-felbamato',
            sec: '12.3 · Farmacocinética',
            cita: 'Felbamate is excreted with a terminal half-life of 20-23 hours, which is unaltered after multiple doses',
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
      valor: '22-25',
      unidad: '%',
      analito: 'felbamato',
      ref: { f: 'dailymed-felbamato', sec: '12.3 · Farmacocinética', cita: 'Binding ranged from 22% to 25%, mostly to albumin', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '20-23',
      unidad: 'h',
      analito: 'felbamato',
      ref: {
        f: 'dailymed-felbamato',
        sec: '12.3 · Farmacocinética',
        cita: 'Felbamate is excreted with a terminal half-life of 20-23 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis absorbida sin cambios en la orina',
      valor: '40-50',
      unidad: '% de la dosis',
      analito: 'felbamato inalterado',
      ref: { f: 'dailymed-felbamato', sec: '12.3 · Farmacocinética', cita: 'About 40-50% of absorbed dose appears unchanged in urine', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad en la orina tras 1000 mg marcados',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis de 1000 mg marcada',
      ref: {
        f: 'dailymed-felbamato',
        sec: '12.3 · Farmacocinética',
        cita: 'Over 90% of the radioactivity after a dose of 1000 mg 14 C felbamate was found in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-felbamato', '2f522701-397a-11de-8a39-0800200c9a66', 'FELBATOL (FELBAMATE) TABLET FELBATOL (FELBAMATE) SUSPENSION', 'Felbatol', '16', '2025-12-31', '2026-11-19'),
    rengPubchem(3331, 'felbamate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
