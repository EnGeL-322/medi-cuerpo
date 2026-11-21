import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lumateperona',
    nombre: 'Lumateperona',
    clase: 'Antipsicótico atípico (antagonista 5-HT2A y agonista parcial D2)',
    sinonimos: [ 'lumateperone', 'Caplyta' ],
    formula: 'C24H28FN3O',
    masaMolar: 393.5,
    smiles: 'CN1CCN2[C@H]3CCN(C[C@H]3C4=C2C1=CC=C4)CCCC(=O)C5=CC=C(C=C5)F',
    inchikey: 'HOIIHACBCFLJET-SFTDATJTSA-N',
    cid: 21302490,
    iupac: '1-(4-fluorophenyl)-4-[(10R,15S)-4-methyl-1,4,12-triazatetracyclo[7.6.1.05,16.010,15]hexadeca-5,7,9(16)-trien-12-yl]butan-1-one',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'lumateperona-oral',
      producto: 'CAPLYTA · cápsula',
      titular: 'INTRA-CELLULAR THERAPIES, INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '42 mg, 21 mg o 10.5 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tosilato de lumateperona',
        ref: { f: 'dailymed-lumateperona', sec: '11 · Descripción', cita: 'present as lumateperone tosylate salt', codigo: '34089-3' }
      },
      excipientes: [
        'Croscarmelosa sódica',
        'Gelatina',
        'Estearato de magnesio',
        'Manitol',
        'Talco',
        'Colorantes según la dosis: FD&C azul n.º 1 y rojo n.º 3, óxidos de hierro negro y rojo (E172) y dióxido de titanio'
      ],
      usos: {
        t: 'Esquizofrenia en adultos, episodios depresivos del trastorno bipolar I o II en adultos (en monoterapia o con litio o valproato) y complemento de los antidepresivos en el trastorno depresivo mayor.',
        ref: {
          f: 'dailymed-lumateperona',
          sec: '1 · Indicaciones',
          cita: 'Treatment of schizophrenia in adults. ( 1 ) Treatment of depressive episodes associated with bipolar I or II disorder (bipolar depression) in adults, as monotherapy and as adjunctive therapy with lithium or valproate',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lumateperona',
      advertencias: [
        {
          titulo: 'Mayor mortalidad en ancianos con psicosis asociada a demencia',
          texto: 'Los ancianos con psicosis asociada a demencia tratados con antipsicóticos tienen mayor riesgo de muerte; no está aprobada en esta situación.',
          organos: [],
          ref: {
            f: 'dailymed-lumateperona',
            sec: 'Advertencia destacada',
            cita: 'Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños y adultos jóvenes.',
          organos: [],
          ref: {
            f: 'dailymed-lumateperona',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adults in short-term studies',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome neuroléptico maligno',
          texto: 'Si se sospecha, suspender de inmediato y dar tratamiento sintomático intensivo con vigilancia.',
          organos: [],
          ref: {
            f: 'dailymed-lumateperona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neuroleptic Malignant Syndrome: If NMS is suspected, immediately discontinue CAPLYTA and provide intensive symptomatic treatment and monitoring',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Cambios metabólicos',
          texto: 'Vigilar la hiperglucemia o diabetes, la dislipidemia y el aumento de peso.',
          organos: [],
          ref: {
            f: 'dailymed-lumateperona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Metabolic Changes: Monitor for hyperglycemia/diabetes mellitus, dyslipidemia, and weight gain',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones descritas en otras secciones figuran la mayor mortalidad en ancianos con psicosis por demencia, los pensamientos suicidas, las reacciones cerebrovasculares y el síndrome neuroléptico maligno.',
          '34084-4',
          'Increased Mortality in Elderly Patients with Dementia-Related Psychosis [see Boxed Warning , Warnings and Precautions (5.1) ] Suicidal Thoughts and Behaviors'
        ],
        [
          'También figuran la discinesia tardía, los cambios metabólicos, la leucopenia, neutropenia y agranulocitosis, y la hipotensión ortostática.',
          '34084-4',
          'Tardive Dyskinesia [see Warnings and Precautions (5.5) ] Metabolic Changes [see Warnings and Precautions (5.6) ] Leukopenia, Neutropenia, and Agranulocytosis'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 42 mg, 21 mg o 10.5 mg por cápsula, según la etiqueta; el activo va como tosilato de lumateperona. Los excipientes no son el principio activo.',
    usos: 'Esquizofrenia en adultos, episodios depresivos del trastorno bipolar I o II en adultos (en monoterapia o con litio o valproato) y complemento de los antidepresivos en el trastorno depresivo mayor.',
    actua: 'Su mecanismo se desconoce, pero podría deberse a la combinación de antagonismo en los receptores centrales de serotonina 5-HT2A y agonismo parcial en los receptores centrales de dopamina D2.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 4,4 % y la Cmax se alcanza 1-2 horas después de la toma. En un estudio de balance de masas, el 58 % y el 29 % de la dosis radiactiva se recuperaron en la orina y en las heces; menos del 1 % salió como lumateperona sin cambios por la orina.'
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
          ref: {
            f: 'dailymed-lumateperona',
            sec: '3 · Formas y concentraciones',
            cita: 'CAPLYTA capsules are available in three strengths',
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
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 4,4 % y la Cmax se alcanza 1-2 horas después de la toma.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 4,4 % y la Cmax se alcanza 1-2 horas después de la toma.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'After CAPLYTA dosing, the absolute bioavailability of lumateperone is about 4.4%. C max of lumateperone is reached approximately 1-2 hours after CAPLYTA dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas bajó la Cmax media un 33 %, subió el AUC un 9 % y retrasó la mediana del Tmax alrededor de 1 hora.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion of a high-fat meal with CAPLYTA lowered lumateperone mean C max by 33% and increased mean AUC by 9%',
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
      ocurre: 'Se une en un 97,4 % a las proteínas del plasma humano (a 5 µM); el volumen de distribución tras la vía intravenosa es de unos 4,1 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97,4 % a las proteínas del plasma humano (a 5 µM); el volumen de distribución tras la vía intravenosa es de unos 4,1 L/kg.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of lumateperone is 97.4% at 5 µM (about 70-fold higher than therapeutic concentrations) in human plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución tras la vía intravenosa de unos 4,1 L/kg.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution of lumateperone following intravenous administration is about 4.1 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores 5-HT2A (antagonista) y D2 (agonista parcial)',
        efecto: 'Su mecanismo se desconoce, pero podría deberse a la combinación de antagonismo en los receptores centrales de serotonina 5-HT2A y agonismo parcial en los receptores centrales de dopamina D2.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce, pero podría deberse a la combinación de antagonismo en los receptores centrales de serotonina 5-HT2A y agonismo parcial en los receptores centrales de dopamina D2.',
            ref: {
              f: 'dailymed-lumateperona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'could be mediated through a combination of antagonist activity at central serotonin 5-HT 2A receptors, and partial agonist activity at central dopamine D 2 receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa, con más de veinte metabolitos; in vitro intervienen varias enzimas, entre ellas UGT1A1, 1A4 y 2B15, aldo-ceto reductasas y CYP3A4, 2C8 y 1A2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa, con más de veinte metabolitos; in vitro intervienen varias enzimas, entre ellas UGT1A1, 1A4 y 2B15, aldo-ceto reductasas y CYP3A4, 2C8 y 1A2.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: "multiple enzymes, including but not limited to uridine 5'-diphospho-glucuronosyltransferases (UDP-glucuronosyltransferase, UGT) 1A1, 1A4, and 2B15, aldoketoreductase (AKR)1C1, 1B10, and 1C4, and cytochrome P450 (CYP) 3A4, 2C8, and 1A2",
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis oral marcada, la lumateperona y sus metabolitos glucuronidados suponen alrededor del 2,8 % y el 51 % de la radiactividad plasmática.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'lumateperone and glucuronidated metabolites represent about 2.8% and 51% of the total plasma radioactivity, respectively',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos glucuronidados',
          actividad: 'desconocida',
          nota: 'Suponen alrededor de la mitad de la radiactividad del plasma; la etiqueta no precisa aquí su actividad.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'lumateperone and glucuronidated metabolites represent about 2.8% and 51% of the total plasma radioactivity, respectively',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En un estudio de balance de masas, el 58 % y el 29 % de la dosis radiactiva se recuperaron en la orina y en las heces; menos del 1 % salió como lumateperona sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En un estudio de balance de masas, el 58 % y el 29 % de la dosis radiactiva se recuperaron en la orina y en las heces; menos del 1 % salió como lumateperona sin cambios por la orina.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: '58% and 29% of the radioactive dose was recovered in the urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento es de unos 27,9 L/h y la semivida terminal de unas 18 horas tras la vía intravenosa.',
          ref: {
            f: 'dailymed-lumateperona',
            sec: '12.3 · Farmacocinética',
            cita: 'The clearance of lumateperone is approximately 27.9 L/hour and the terminal half-life is about 18 hours after intravenous administration',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '4,4 (aprox.)',
      unidad: '%',
      analito: 'lumateperona',
      ref: {
        f: 'dailymed-lumateperona',
        sec: '12.3 · Farmacocinética',
        cita: 'the absolute bioavailability of lumateperone is about 4.4%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'lumateperona',
      ref: {
        f: 'dailymed-lumateperona',
        sec: '12.3 · Farmacocinética',
        cita: 'C max of lumateperone is reached approximately 1-2 hours after CAPLYTA dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,4',
      unidad: '%',
      analito: 'lumateperona',
      condiciones: '5 µM',
      ref: { f: 'dailymed-lumateperona', sec: '12.3 · Farmacocinética', cita: 'Protein binding of lumateperone is 97.4% at 5 µM', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '4,1 (aprox.)',
      unidad: 'L/kg',
      analito: 'lumateperona',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-lumateperona',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution of lumateperone following intravenous administration is about 4.1 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '18 (aprox.)',
      unidad: 'h',
      analito: 'lumateperona',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-lumateperona',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal half-life is about 18 hours after intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis radiactiva recuperada en la orina',
      valor: '58',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-lumateperona',
        sec: '12.3 · Farmacocinética',
        cita: '58% and 29% of the radioactive dose was recovered in the urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lumateperona', 'db730b06-6351-47fd-8183-e61e61bbead5', 'CAPLYTA (LUMATEPERONE) CAPSULE', 'CAPLYTA', '28', '2026-11-09', '2026-11-19'),
    rengPubchem(21302490, 'lumateperone', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
