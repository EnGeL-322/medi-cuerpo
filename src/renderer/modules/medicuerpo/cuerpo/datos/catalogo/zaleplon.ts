import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zaleplon',
    nombre: 'Zaleplón',
    clase: 'Hipnótico no benzodiazepínico (pirazolopirimidina)',
    sinonimos: [ 'zaleplon' ],
    formula: 'C17H15N5O',
    masaMolar: 305.33,
    smiles: 'CCN(C1=CC=CC(=C1)C2=CC=NC3=C(C=NN23)C#N)C(=O)C',
    inchikey: 'HUNXMJYCHXQEGX-UHFFFAOYSA-N',
    cid: 5719,
    iupac: 'N-[3-(3-cyanopyrazolo[1,5-a]pyrimidin-7-yl)phenyl]-N-ethylacetamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'zaleplon-oral',
      producto: 'ZALEPLON · cápsula',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'starch, corn',
        'sodium lauryl sulfate',
        'silicon dioxide',
        'stearic acid',
        'fd&c blue no. 1',
        'fd&c green no. 3',
        'fd&c yellow no. 5',
        'titanium dioxide',
        'gelatin, unspecified',
        'ferrosoferric oxide',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento a corto plazo del insomnio.',
        ref: {
          f: 'dailymed-zaleplon',
          sec: '1 · Indicaciones',
          cita: 'Zaleplon capsules are indicated for the short-term treatment of insomnia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zaleplon',
      advertencias: [
        {
          titulo: 'Conductas complejas durante el sueño',
          texto: 'Pueden aparecer sonambulismo, conducir dormido y otras actividades sin estar totalmente despierto; algunos episodios provocaron lesiones graves, incluida la muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-zaleplon',
            sec: 'Advertencia destacada',
            cita: 'Complex sleep behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'En los ensayos controlados, ningún acontecimiento que llevara a suspender el tratamiento ocurrió en el 1 % o más de los pacientes.',
          '34084-4',
          'No event that resulted in discontinuation occurred at a rate of ≥1%'
        ],
        [
          'La tabla de reacciones incluye los acontecimientos del 1 % o más en los pacientes tratados con 20 mg.',
          '34084-4',
          'Adverse Events Occurring at an Incidence of 1% or More Among Zaleplon 20 mg-Treated Patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 5 mg o 10 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento a corto plazo del insomnio.',
    actua: 'Es un hipnótico de estructura química distinta a las benzodiazepinas y los barbitúricos, que interactúa con el complejo receptor del ácido gamma-aminobutírico y las benzodiazepinas (GABA-BZ).',
    recorrido: 'Se absorbe con rapidez y casi por completo tras la administración oral; el pico plasmático se alcanza en aproximadamente 1 hora. Tras una dosis marcada, el 70 % se recupera en la orina en 48 horas, casi todo como metabolitos y sus glucurónidos, y un 17 % adicional en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '11 · Descripción',
            cita: 'Zaleplon is a nonbenzodiazepine hypnotic from the pyrazolopyrimidine class',
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
      ocurre: 'Se absorbe con rapidez y casi por completo tras la administración oral; el pico plasmático se alcanza en aproximadamente 1 hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y casi por completo tras la administración oral; el pico plasmático se alcanza en aproximadamente 1 hora.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'Zaleplon is rapidly and almost completely absorbed following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Aunque se absorbe bien, la biodisponibilidad absoluta es de alrededor del 30 % porque sufre un importante metabolismo presistémico.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'Although zaleplon is well absorbed, its absolute bioavailability is approximately 30% because it undergoes significant presystemic metabolism',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida copiosa y grasa, el Tmax se retrasa unas 2 horas y la Cmax baja alrededor del 35 %.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat/heavy meal prolonged the absorption of zaleplon compared to the fasted state, delaying t max by approximately 2 hours and reducing C max by approximately 35%',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos',
          condiciones: 'con una comida copiosa y grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Es un compuesto lipófilo con un volumen de distribución de unos 1,4 L/kg tras la vía intravenosa, lo que indica una distribución considerable a los tejidos extravasculares.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Es un compuesto lipófilo con un volumen de distribución de unos 1,4 L/kg tras la vía intravenosa, lo que indica una distribución considerable a los tejidos extravasculares.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'Zaleplon is a lipophilic compound with a volume of distribution of approximately 1.4 L/kg following intravenous (IV) administration, indicating substantial distribution into extravascular tissues',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas del plasma in vitro es de alrededor del 60 % ± 15 %.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'The in vitro plasma protein binding is approximately 60% ± 15%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Complejo receptor GABA-benzodiazepina',
        efecto: 'Es un hipnótico de estructura química distinta a las benzodiazepinas y los barbitúricos, que interactúa con el complejo receptor del ácido gamma-aminobutírico y las benzodiazepinas (GABA-BZ).',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un hipnótico de estructura química distinta a las benzodiazepinas y los barbitúricos, que interactúa con el complejo receptor del ácido gamma-aminobutírico y las benzodiazepinas (GABA-BZ).',
            ref: {
              f: 'dailymed-zaleplon',
              sec: '12 · Farmacología clínica',
              cita: 'it interacts with the gamma-aminobutyric acid-benzodiazepine (GABA-BZ) receptor complex',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa: menos del 1 % de la dosis sale inalterada por la orina; la enzima principal es la aldehído oxidasa, que forma 5-oxo-zaleplón.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa: menos del 1 % de la dosis sale inalterada por la orina; la enzima principal es la aldehído oxidasa, que forma 5-oxo-zaleplón.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'Zaleplon is primarily metabolized by aldehyde oxidase to form 5-oxo-zaleplon',
            codigo: '43682-4'
          }
        },
        {
          t: 'En menor medida lo metaboliza la CYP3A4, que forma desetilzaleplón.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized to a lesser extent by cytochrome P450 (CYP) 3A4 to form desethylzaleplon',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '5-oxo-zaleplón y demás metabolitos',
          actividad: 'inactivo',
          nota: 'Todos los metabolitos son farmacológicamente inactivos y se eliminan como glucurónidos.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'All of zaleplon’s metabolites are pharmacologically inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 70 % se recupera en la orina en 48 horas, casi todo como metabolitos y sus glucurónidos, y un 17 % adicional en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 70 % se recupera en la orina en 48 horas, casi todo como metabolitos y sus glucurónidos, y un 17 % adicional en las heces.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: '70% of the administered dose is recovered in urine within 48 hours (71% recovered within 6 days), almost all as zaleplon metabolites and their glucuronides',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se elimina con rapidez: la semivida media es de aproximadamente 1 hora tras la dosis oral o intravenosa.',
          ref: {
            f: 'dailymed-zaleplon',
            sec: '12.3 · Farmacocinética',
            cita: 'zaleplon is rapidly eliminated with a mean t ½ of approximately 1 hour',
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
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'zaleplón',
      ref: {
        f: 'dailymed-zaleplon',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations are attained within approximately 1 hour after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'zaleplón',
      ref: { f: 'dailymed-zaleplon', sec: '12.3 · Farmacocinética', cita: 'its absolute bioavailability is approximately 30%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '60 ± 15 (aprox.)',
      unidad: '%',
      analito: 'zaleplón',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-zaleplon',
        sec: '12.3 · Farmacocinética',
        cita: 'The in vitro plasma protein binding is approximately 60% ± 15%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1,4 (aprox.)',
      unidad: 'L/kg',
      analito: 'zaleplón',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-zaleplon',
        sec: '12.3 · Farmacocinética',
        cita: 'a volume of distribution of approximately 1.4 L/kg following intravenous (IV) administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'zaleplón',
      ref: {
        f: 'dailymed-zaleplon',
        sec: '12.3 · Farmacocinética',
        cita: 'zaleplon is rapidly eliminated with a mean t ½ of approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina en 48 horas',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'zaleplón y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-zaleplon',
        sec: '12.3 · Farmacocinética',
        cita: '70% of the administered dose is recovered in urine within 48 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zaleplon', 'cff46def-c452-49bb-abea-480de8f432bd', 'ZALEPLON CAPSULE', 'ZALEPLON', '6', '2024-05-15', '2026-11-15'),
    rengPubchem(5719, 'zaleplon', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
