import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gepirona',
    nombre: 'Gepirona',
    clase: 'Antidepresivo agonista selectivo del receptor 5-HT1A (liberación prolongada)',
    sinonimos: [ 'gepirone', 'Exxua' ],
    formula: 'C19H29N5O2',
    masaMolar: 359.5,
    smiles: 'CC1(CC(=O)N(C(=O)C1)CCCCN2CCN(CC2)C3=NC=CC=N3)C',
    inchikey: 'QOIGKGMMAGJZNZ-UHFFFAOYSA-N',
    cid: 55191,
    iupac: '4,4-dimethyl-1-[4-(4-pyrimidin-2-ylpiperazin-1-yl)butyl]piperidine-2,6-dione',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'gepirona-oral',
      producto: 'EXXUA · comprimido de liberación prolongada',
      titular: 'AYTU THERAPEUTICS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '18.2 mg, 36.3 mg, 54.5 mg o 72.6 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de gepirona',
        ref: { f: 'dailymed-gepirona', sec: '11 · Descripción', cita: 'gepirone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'silicon dioxide', 'hypromellose, unspecified', 'ferric oxide yellow', 'ferric oxide red', 'magnesium stearate', 'microcrystalline cellulose' ],
      usos: {
        t: 'Tratamiento del trastorno depresivo mayor en adultos.',
        ref: {
          f: 'dailymed-gepirona',
          sec: '1 · Indicaciones',
          cita: 'EXXUA is indicated for the treatment of major depressive disorder (MDD) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gepirona',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños y adultos jóvenes; vigilar el empeoramiento.',
          organos: [],
          ref: {
            f: 'dailymed-gepirona',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Alarga el QTc; corregir los electrolitos y hacer electrocardiogramas antes de empezar, al subir la dosis y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-gepirona',
            sec: '5 · Advertencias y precauciones',
            cita: 'QT Interval Prolongation: EXXUA prolongs the QTc',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'El riesgo aumenta con otros serotoninérgicos; si aparece, suspender y dar tratamiento de soporte.',
          organos: [],
          ref: {
            f: 'dailymed-gepirona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serotonin Syndrome: Increased risk when co-administered with other serotonergic agents',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y al menos el doble que con placebo): mareo, náuseas, insomnio, dolor abdominal y dispepsia.',
          '34084-4',
          'Most common adverse reactions (incidence of ≥ 5% and at least twice incidence of placebo) were dizziness, nausea, insomnia, abdominal pain, and dyspepsia'
        ],
        [
          'En los estudios 1 y 2, el 7 % de los pacientes con gepirona y el 3 % con placebo dejaron el tratamiento por una reacción adversa, sobre todo mareo y náuseas.',
          '34084-4',
          '7% (15/226) of patients treated with EXXUA and 3% (6/230) of patients receiving placebo discontinued treatment due to an adverse reaction'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 18.2 mg, 36.3 mg, 54.5 mg o 72.6 mg por comprimido, según la etiqueta; el activo va como clorhidrato de gepirona. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno depresivo mayor en adultos.',
    actua: 'Su mecanismo no se conoce del todo; se cree que modula la actividad serotoninérgica del sistema nervioso central por agonismo selectivo en los receptores 5-HT1A.',
    recorrido: 'La biodisponibilidad absoluta es del 14 % al 17 % y la concentración máxima se alcanza en 6 horas; con alimentos ricos en grasas el Tmax baja a 3 horas y la exposición aumenta. Tras una dosis oral marcada, alrededor del 81 % y el 13 % de la radiactividad se recuperaron en la orina y las heces como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: libera el principio activo poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '3 · Formas y concentraciones',
            cita: 'EXXUA is available as extended-release tablets in the following strengths, as gepirone base',
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
      ocurre: 'La biodisponibilidad absoluta es del 14 % al 17 % y la concentración máxima se alcanza en 6 horas; con alimentos ricos en grasas el Tmax baja a 3 horas y la exposición aumenta.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 14 % al 17 % y la concentración máxima se alcanza en 6 horas; con alimentos ricos en grasas el Tmax baja a 3 horas y la exposición aumenta.',
          ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability is 14% to 17%', codigo: '43682-4' }
        },
        {
          t: 'La concentración máxima se alcanza en las 6 horas siguientes a la dosis.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'The maximal plasma EXXUA concentration (C max­ ) after dosing is reached within 6 hours post dose (T max )',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras un desayuno rico en grasas, la Cmax fue un 62 % mayor que en ayunas.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'after a high-fat (~ 850 calories) breakfast 62% higher as compared to the fasted state',
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
      ocurre: 'El volumen de distribución aparente es de unos 94,5 L y la unión in vitro a las proteínas del plasma humano del 72 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente es de unos 94,5 L y la unión in vitro a las proteínas del plasma humano del 72 %.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'The in vitro plasma protein binding in human is 72% and is not concentration dependent',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 94,5 L.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of EXXUA is approximately 94.5L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de serotonina 5-HT1A',
        efecto: 'Su mecanismo no se conoce del todo; se cree que modula la actividad serotoninérgica del sistema nervioso central por agonismo selectivo en los receptores 5-HT1A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo no se conoce del todo; se cree que modula la actividad serotoninérgica del sistema nervioso central por agonismo selectivo en los receptores 5-HT1A.',
            ref: {
              f: 'dailymed-gepirona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'is thought to be related to its modulation of serotonergic activity in the CNS through selective agonist activity at 5HT1A receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "Se metaboliza de forma extensa; la CYP3A4 es la enzima principal y forma los metabolitos activos 1-PP y 3'-OH-gepirona, presentes en el plasma a concentraciones mayores que el fármaco.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "Se metaboliza de forma extensa; la CYP3A4 es la enzima principal y forma los metabolitos activos 1-PP y 3'-OH-gepirona, presentes en el plasma a concentraciones mayores que el fármaco.",
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 is the primary enzyme catalyzing the metabolism of EXXUA to its major pharmacologically active metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: "Ambos metabolitos principales, 1-PP y 3'-OH-gepirona, están en el plasma a concentraciones mayores que el compuesto original.",
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'EXXUA is extensively metabolized and both major metabolites 1-PP and 3’-OH-gepirone are present in plasma in higher concentrations than the parent compound',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "1-PP y 3'-OH-gepirona",
          actividad: 'activo',
          nota: 'Metabolitos activos principales, con concentraciones plasmáticas mayores que la gepirona.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A4 is the primary enzyme catalyzing the metabolism of EXXUA to its major pharmacologically active metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 81 % y el 13 % de la radiactividad se recuperaron en la orina y las heces como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 81 % y el 13 % de la radiactividad se recuperaron en la orina y las heces como metabolitos.',
          ref: {
            f: 'dailymed-gepirona',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 81% and 13% of the administered radioactivity was recovered in the urine and feces, respectively as metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de unas 5 horas.',
          ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'The mean terminal half-life is approximately 5 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '14-17',
      unidad: '%',
      analito: 'gepirona',
      ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability is 14% to 17%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '≤ 6',
      unidad: 'h',
      analito: 'gepirona',
      ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'is reached within 6 hours post dose (T max )', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '94,5 (aprox.)',
      unidad: 'L',
      analito: 'gepirona',
      ref: {
        f: 'dailymed-gepirona',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of EXXUA is approximately 94.5L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '72',
      unidad: '%',
      analito: 'gepirona',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'The in vitro plasma protein binding in human is 72%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'gepirona',
      ref: { f: 'dailymed-gepirona', sec: '12.3 · Farmacocinética', cita: 'The mean terminal half-life is approximately 5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '81 (aprox.)',
      unidad: '% de la dosis',
      analito: 'metabolitos',
      condiciones: 'dosis oral única marcada',
      ref: {
        f: 'dailymed-gepirona',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 81% and 13% of the administered radioactivity was recovered in the urine and feces, respectively as metabolites',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gepirona', '0c78edd8-6acb-433c-9d34-2527da8d64e1', 'EXXUA (GEPIRONE) TABLET, EXTENDED RELEASE', 'EXXUA', '3', '2026-07-15', '2026-11-19'),
    rengPubchem(55191, 'gepirone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
