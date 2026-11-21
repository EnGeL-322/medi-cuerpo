import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zanubrutinib',
    nombre: 'Zanubrutinib',
    clase: 'Inhibidor covalente de la tirosina cinasa de Bruton (BTK)',
    sinonimos: [ 'zanubrutinib', 'Brukinsa' ],
    formula: 'C27H29N5O3',
    masaMolar: 471.5,
    smiles: 'C=CC(=O)N1CCC(CC1)[C@@H]2CCNC3=C(C(=NN23)C4=CC=C(C=C4)OC5=CC=CC=C5)C(=O)N',
    inchikey: 'RNOAOAWBMHREKO-QFIPXVFZSA-N',
    cid: 135565884,
    iupac: '(7S)-2-(4-phenoxyphenyl)-7-(1-prop-2-enoylpiperidin-4-yl)-4,5,6,7-tetrahydropyrazolo[1,5-a]pyrimidine-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'zanubrutinib-oral',
      producto: 'BRUKINSA · cápsula',
      titular: 'BEONE MEDICINES USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '80 mg por cápsula, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'croscarmellose sodium',
        'magnesium stearate',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con linfoma de células del manto, macroglobulinemia de Waldenström, linfoma de la zona marginal, leucemia linfocítica crónica y linfoma folicular, según la etiqueta.',
        ref: {
          f: 'dailymed-zanubrutinib',
          sec: '1 · Indicaciones',
          cita: 'Mantle cell lymphoma (MCL) who have received at least one prior therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zanubrutinib',
      advertencias: [
        {
          titulo: 'Hemorragia',
          texto: 'Vigilar el sangrado y tratarlo de forma adecuada.',
          organos: [],
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hemorrhage : Monitor for bleeding and manage appropriately',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Infecciones',
          texto: 'Vigilar los signos de infección, incluidas las oportunistas.',
          organos: [],
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for signs and symptoms of infection, including opportunistic infections, and treat as needed',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Arritmias cardíacas',
          texto: 'Vigilar los signos de arritmia y tratarlos.',
          organos: [],
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiac Arrhythmias : Monitor for signs and symptoms of arrhythmias and manage appropriately',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar la función hepática durante todo el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor hepatic function throughout treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (30 % o más, con laboratorio): descenso de neutrófilos y plaquetas, infección respiratoria alta, hemorragia y dolor musculoesquelético.',
          '34084-4',
          'most common adverse reactions (≥30%), including laboratory abnormalities, are neutrophil count decreased, platelet count decreased, upper respiratory tract infection, hemorrhage, and musculoskeletal pain'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 80 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con linfoma de células del manto, macroglobulinemia de Waldenström, linfoma de la zona marginal, leucemia linfocítica crónica y linfoma folicular, según la etiqueta.',
    actua: 'Inhibe la BTK formando un enlace covalente con una cisteína de su sitio activo; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
    recorrido: 'La mediana del tmax es de 2 horas; con las cápsulas, una comida grasa apenas cambia el AUC (−7 %) y la Cmax (+3 %). Tras 320 mg marcados, alrededor del 87 % se recuperó en las heces (38 % sin cambios) y el 8 % en la orina.'
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
            f: 'dailymed-zanubrutinib',
            sec: '11 · Descripción',
            cita: 'The capsule shell contains edible black ink, gelatin, and titanium dioxide',
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
      ocurre: 'La mediana del tmax es de 2 horas; con las cápsulas, una comida grasa apenas cambia el AUC (−7 %) y la Cmax (+3 %).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 2 horas; con las cápsulas, una comida grasa apenas cambia el AUC (−7 %) y la Cmax (+3 %).',
          ref: { f: 'dailymed-zanubrutinib', sec: '12.3 · Farmacocinética', cita: 'The median t max of zanubrutinib is 2 hours', codigo: '43682-4' }
        },
        {
          t: 'Con las cápsulas y una comida rica en grasas el AUC bajó un 7 % y la Cmax subió un 3 %.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Zanubrutinib AUC decreased 7% and C max increased 3% following administration of BRUKINSA capsules with a high-fat meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 94 % a las proteínas plasmáticas; el volumen de distribución aparente es de 537 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 94 % a las proteínas plasmáticas; el volumen de distribución aparente es de 537 L.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of zanubrutinib is approximately 94% and the blood-to-plasma ratio is 0.7 to 0.8',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 537 L.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (%CV) apparent volume of distribution (Vz/F) of zanubrutinib is 537 (73%) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa de Bruton (BTK)',
        efecto: 'Inhibe la BTK formando un enlace covalente con una cisteína de su sitio activo; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la BTK formando un enlace covalente con una cisteína de su sitio activo; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
            ref: {
              f: 'dailymed-zanubrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Zanubrutinib forms a covalent bond with a cysteine residue in the BTK active site, leading to inhibition of BTK activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Zanubrutinib is primarily metabolized by cytochrome P450(CYP)3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 320 mg marcados, alrededor del 87 % se recuperó en las heces (38 % sin cambios) y el 8 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 320 mg marcados, alrededor del 87 % se recuperó en las heces (38 % sin cambios) y el 8 % en la orina.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 87% of the dose was recovered in feces (38% unchanged) and 8% in urine (less than 1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de unas 2 a 4 horas tras una dosis de 160 o 320 mg.',
          ref: {
            f: 'dailymed-zanubrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean half-life (t ½ ) of zanubrutinib is approximately 2 to 4 hours following a single oral zanubrutinib dose of 160 mg or 320 mg',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2',
      unidad: 'h',
      analito: 'zanubrutinib',
      ref: { f: 'dailymed-zanubrutinib', sec: '12.3 · Farmacocinética', cita: 'The median t max of zanubrutinib is 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '94 (aprox.)',
      unidad: '%',
      analito: 'zanubrutinib',
      ref: {
        f: 'dailymed-zanubrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma protein binding of zanubrutinib is approximately 94%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '537',
      unidad: 'L',
      analito: 'zanubrutinib',
      ref: {
        f: 'dailymed-zanubrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution (Vz/F) of zanubrutinib is 537 (73%) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '2-4 (aprox.)',
      unidad: 'h',
      analito: 'zanubrutinib',
      ref: {
        f: 'dailymed-zanubrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean half-life (t ½ ) of zanubrutinib is approximately 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '128',
      unidad: 'L/h',
      analito: 'zanubrutinib',
      ref: {
        f: 'dailymed-zanubrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent oral clearance (CL/F) of zanubrutinib is 128 (58%) L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '87 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 320 mg',
      ref: {
        f: 'dailymed-zanubrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 87% of the dose was recovered in feces (38% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zanubrutinib', '3e08fe23-d70e-424c-bc51-1222e320f902', 'BRUKINSA (ZANUBRUTINIB) CAPSULE BRUKINSA (ZANUBRUTINIB) TABLET, FILM COATED', 'BRUKINSA', '25', '2026-09-14', '2026-11-19'),
    rengPubchem(135565884, 'zanubrutinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
