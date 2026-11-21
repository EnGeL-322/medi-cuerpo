import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pirtobrutinib',
    nombre: 'Pirtobrutinib',
    clase: 'Inhibidor no covalente de la tirosina cinasa de Bruton (BTK)',
    sinonimos: [ 'pirtobrutinib', 'Jaypirca' ],
    formula: 'C22H21F4N5O3',
    masaMolar: 479.4,
    smiles: 'C[C@@H](C(F)(F)F)N1C(=C(C(=N1)C2=CC=C(C=C2)CNC(=O)C3=C(C=CC(=C3)F)OC)C(=O)N)N',
    inchikey: 'FWZAWAUZXYCBKZ-NSHDSACASA-N',
    cid: 129269915,
    iupac: '5-amino-3-[4-[[(5-fluoro-2-methoxybenzoyl)amino]methyl]phenyl]-1-[(2S)-1,1,1-trifluoropropan-2-yl]pyrazole-4-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'pirtobrutinib-oral',
      producto: 'JAYPIRCA · comprimido recubierto',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'hypromellose acetate succinate 12070923 (3 mpa.s)',
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'triacetin',
        'fd&c blue no. 2 aluminum lake'
      ],
      usos: {
        t: 'Tratamiento del linfoma de células del manto y de la leucemia linfocítica crónica o linfoma linfocítico de células pequeñas en las situaciones de la etiqueta.',
        ref: {
          f: 'dailymed-pirtobrutinib',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with relapsed or refractory mantle cell lymphoma (MCL) after at least two lines of systemic therapy, including a BTK inhibitor',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pirtobrutinib',
      advertencias: [
        {
          titulo: 'Infecciones',
          texto: 'Vigilar los signos de infección, valorarla pronto y tratarla.',
          organos: [],
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Infections: Monitor for signs and symptoms of infection, evaluate promptly, and treat',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Vigilar el sangrado y tratarlo de forma adecuada.',
          organos: [],
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hemorrhage: Monitor for bleeding and manage appropriately',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Arritmias cardíacas',
          texto: 'Vigilar los síntomas de arritmia y tratarlos.',
          organos: [],
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiac Arrhythmias: Monitor for symptoms of arrhythmias and manage appropriately',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar la función hepática durante todo el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor hepatic function throughout treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (30 % o más, con laboratorio) son el descenso de neutrófilos y de hemoglobina.',
          '34084-4',
          'Most common adverse reactions (≥ 30%), including laboratory abnormalities, are neutrophil count decreased and hemoglobin decreased'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 50 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del linfoma de células del manto y de la leucemia linfocítica crónica o linfoma linfocítico de células pequeñas en las situaciones de la etiqueta.',
    actua: 'Inhibidor no covalente de la BTK que se une a la BTK natural y a la que tiene mutaciones en C481; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
    recorrido: 'La biodisponibilidad absoluta tras 200 mg es del 85,5 % y la mediana del tmax de unas 2 horas; una comida grasa baja la Cmax un 23 % sin cambiar el AUC. Tras 200 mg marcados, el 37 % se recuperó en las heces (18 % sin cambios) y el 57 % en la orina (10 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '11 · Descripción',
            cita: 'The tablet film coating material contains FD&C Blue #2, hypromellose, titanium dioxide and triacetin',
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
      ocurre: 'La biodisponibilidad absoluta tras 200 mg es del 85,5 % y la mediana del tmax de unas 2 horas; una comida grasa baja la Cmax un 23 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta tras 200 mg es del 85,5 % y la mediana del tmax de unas 2 horas; una comida grasa baja la Cmax un 23 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of pirtobrutinib after a single oral 200 mg dose is 85.5% (range 75.9% to 90.9%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas redujo la Cmax un 23 % y retrasó el tmax 1 hora, sin efecto sobre el AUC.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat meal decreased the C max of pirtobrutinib by 23% and delayed t max by 1 hour',
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
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 96 % a las proteínas humanas, sin depender de la concentración; el volumen central aparente es de 35,4 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96 % a las proteínas humanas, sin depender de la concentración; el volumen central aparente es de 35,4 L.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Human protein binding of pirtobrutinib is 96% and is independent of concentration in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución central aparente medio de 35,4 L.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent central volume of distribution of pirtobrutinib is 35.4 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa de Bruton (BTK)',
        efecto: 'Inhibidor no covalente de la BTK que se une a la BTK natural y a la que tiene mutaciones en C481; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor no covalente de la BTK que se une a la BTK natural y a la que tiene mutaciones en C481; la BTK interviene en la proliferación, el tráfico y la adhesión de los linfocitos B.',
            ref: {
              f: 'dailymed-pirtobrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pirtobrutinib binds to wild type BTK and BTK harboring C481 mutations, leading to inhibition of BTK kinase activity',
              codigo: '43679-0'
            }
          },
          {
            t: 'Es un inhibidor de BTK de molécula pequeña y no covalente.',
            ref: {
              f: 'dailymed-pirtobrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Pirtobrutinib is a small molecule, noncovalent inhibitor of BTK',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y por glucuronidación directa (UGT1A8 y UGT1A9) in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y por glucuronidación directa (UGT1A8 y UGT1A9) in vitro.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Pirtobrutinib is primarily metabolized by CYP3A4 and direct glucuronidation by UGT1A8 and UGT1A9, in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 200 mg marcados, el 37 % se recuperó en las heces (18 % sin cambios) y el 57 % en la orina (10 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 200 mg marcados, el 37 % se recuperó en las heces (18 % sin cambios) y el 57 % en la orina (10 % sin cambios).',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: '37% of the dose was recovered in feces (18% unchanged) and 57% in urine (10% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 19,9 horas.',
          ref: {
            f: 'dailymed-pirtobrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective half-life of pirtobrutinib is approximately 19.9 hours',
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
      valor: '85,5',
      unidad: '%',
      analito: 'pirtobrutinib',
      ref: {
        f: 'dailymed-pirtobrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of pirtobrutinib after a single oral 200 mg dose is 85.5%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'pirtobrutinib',
      ref: {
        f: 'dailymed-pirtobrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time (range) to reach peak plasma concentration (tmax) is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '96',
      unidad: '%',
      analito: 'pirtobrutinib',
      ref: { f: 'dailymed-pirtobrutinib', sec: '12.3 · Farmacocinética', cita: 'Human protein binding of pirtobrutinib is 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución central aparente',
      valor: '35,4',
      unidad: 'L',
      analito: 'pirtobrutinib',
      ref: {
        f: 'dailymed-pirtobrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent central volume of distribution of pirtobrutinib is 35.4 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '19,9 (aprox.)',
      unidad: 'h',
      analito: 'pirtobrutinib',
      ref: {
        f: 'dailymed-pirtobrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective half-life of pirtobrutinib is approximately 19.9 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '57',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 200 mg',
      ref: {
        f: 'dailymed-pirtobrutinib',
        sec: '12.3 · Farmacocinética',
        cita: '37% of the dose was recovered in feces (18% unchanged) and 57% in urine (10% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pirtobrutinib', 'bd551845-0878-49a4-860f-839b83f6b801', 'JAYPIRCA (PIRTOBRUTINIB) TABLET, COATED', 'JAYPIRCA', '16', '2026-10-19', '2026-11-19'),
    rengPubchem(129269915, 'pirtobrutinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
