import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acalabrutinib',
    nombre: 'Acalabrutinib',
    clase: 'Inhibidor covalente de la tirosina cinasa de Bruton (BTK)',
    sinonimos: [ 'acalabrutinib', 'Calquence' ],
    formula: 'C26H23N7O2',
    masaMolar: 465.5,
    smiles: 'CC#CC(=O)N1CCC[C@H]1C2=NC(=C3N2C=CN=C3N)C4=CC=C(C=C4)C(=O)NC5=CC=CC=N5',
    inchikey: 'WDENQIQQYWYTPO-IBGZPJMESA-N',
    cid: 71226662,
    iupac: '4-[8-amino-3-[(2S)-1-but-2-ynoylpyrrolidin-2-yl]imidazo[1,5-a]pyrazin-1-yl]-N-pyridin-2-ylbenzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'acalabrutinib-oral',
      producto: 'CALQUENCE · comprimido recubierto con película',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg por comprimido, según la etiqueta',
      excipientes: [
        'copovidone k25-31',
        'ferric oxide red',
        'ferric oxide yellow',
        'hypromellose, unspecified',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'mannitol',
        'medium-chain triglycerides',
        'microcrystalline cellulose',
        'polyethylene glycol 3350',
        'sodium stearyl fumarate',
        'titanium dioxide',
        'water'
      ],
      usos: {
        t: 'Tratamiento de adultos con linfoma de células del manto y con leucemia linfocítica crónica o linfoma linfocítico de células pequeñas, según la etiqueta.',
        ref: {
          f: 'dailymed-acalabrutinib',
          sec: '1 · Indicaciones',
          cita: 'In combination with bendamustine and rituximab for the treatment of adult patients with previously untreated mantle cell lymphoma (MCL)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acalabrutinib',
      advertencias: [
        {
          titulo: 'Infecciones graves y oportunistas',
          texto: 'Vigilar los signos de infección y tratarla pronto.',
          organos: [],
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious and Opportunistic Infections: Monitor for signs and symptoms of infection and treat promptly',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragia',
          texto: 'Vigilar el sangrado y tratarlo de forma adecuada.',
          organos: [],
          ref: {
            f: 'dailymed-acalabrutinib',
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
            f: 'dailymed-acalabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiac Arrhythmias: Monitor for symptoms of arrhythmias and manage',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar la función hepática durante todo el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor hepatic function throughout treatment',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (30 % o más, sin contar laboratorio): infección respiratoria alta, diarrea, cefalea y dolor musculoesquelético.',
          '34084-4',
          'most common adverse reactions (≥ 30%), excluding laboratory abnormalities, are upper respiratory tract infection, diarrhea, headache, and musculoskeletal pain'
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
    contiene: 'Comprimido recubierto con película: 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con linfoma de células del manto y con leucemia linfocítica crónica o linfoma linfocítico de células pequeñas, según la etiqueta.',
    actua: 'Inhibe la BTK: el acalabrutinib y su metabolito activo ACP-5862 forman un enlace covalente con una cisteína del sitio activo; la BTK interviene en la señalización del receptor de antígeno de los linfocitos B.',
    recorrido: 'La biodisponibilidad absoluta media es del 25 % y la mediana del tmax de 0,5 horas; una comida grasa no cambia el AUC pero baja la Cmax un 54 %. Tras 100 mg marcados, el 84 % se recuperó en las heces y el 12 % en la orina (menos del 2 % sin cambios en cada caso).'
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
          ref: { f: 'dailymed-acalabrutinib', sec: '11 · Descripción', cita: 'The tablet coating consists of copovidone', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta media es del 25 % y la mediana del tmax de 0,5 horas; una comida grasa no cambia el AUC pero baja la Cmax un 54 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 25 % y la mediana del tmax de 0,5 horas; una comida grasa no cambia el AUC pero baja la Cmax un 54 %.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean absolute bioavailability of acalabrutinib was 25%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas el AUC no cambió, la Cmax bajó un 54 % y el tmax se retrasó 1 a 2 horas.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'did not affect the mean AUC as compared to dosing under fasted conditions. Resulting C max decreased by 54% and T max was delayed 1-2 hours',
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
      ocurre: 'Se une de forma reversible en un 97,5 % a las proteínas plasmáticas (98,6 % el ACP-5862); el volumen de distribución en estado estacionario es de unos 101 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une de forma reversible en un 97,5 % a las proteínas plasmáticas (98,6 % el ACP-5862); el volumen de distribución en estado estacionario es de unos 101 L.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Reversible binding to human plasma protein of acalabrutinib and its active metabolite, ACP-5862, were 97.5% and 98.6%, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de unos 101 L.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'steady-state volume of distribution (V ss ) of acalabrutinib and its active metabolite, ACP-5862 was approximately 101 (52%) L and 67 (32%) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa de Bruton (BTK)',
        efecto: 'Inhibe la BTK: el acalabrutinib y su metabolito activo ACP-5862 forman un enlace covalente con una cisteína del sitio activo; la BTK interviene en la señalización del receptor de antígeno de los linfocitos B.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe la BTK: el acalabrutinib y su metabolito activo ACP-5862 forman un enlace covalente con una cisteína del sitio activo; la BTK interviene en la señalización del receptor de antígeno de los linfocitos B.',
            ref: {
              f: 'dailymed-acalabrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Acalabrutinib and its active metabolite, ACP-5862, form a covalent bond with a cysteine residue in the BTK active site, leading to inhibition of BTK enzymatic activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por enzimas CYP3A y, en menor medida, por conjugación con glutatión e hidrólisis amida; el ACP-5862 es su metabolito activo principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por enzimas CYP3A y, en menor medida, por conjugación con glutatión e hidrólisis amida; el ACP-5862 es su metabolito activo principal.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Acalabrutinib is predominantly metabolized by CYP3A enzymes, and to a minor extent, by glutathione conjugation and amide hydrolysis',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'ACP-5862',
          actividad: 'activo',
          nota: 'Metabolito activo principal en plasma; semivida de 6,4 horas.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12 · Farmacología clínica',
            cita: 'Acalabrutinib and its active metabolite, ACP-5862, form a covalent bond with a cysteine residue in the BTK active site',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 84 % se recuperó en las heces y el 12 % en la orina (menos del 2 % sin cambios en cada caso).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 84 % se recuperó en las heces y el 12 % en la orina (menos del 2 % sin cambios en cada caso).',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: '84% of the dose was recovered in the feces (< 2% unchanged) and 12% of the dose was recovered in the urine (< 2% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de 1,4 horas para el acalabrutinib y de 6,4 horas para el ACP-5862.',
          ref: {
            f: 'dailymed-acalabrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'terminal elimination half-life (t 1/2 ) of acalabrutinib and its active metabolite, ACP-5862, were 1.4 (50%) hours and 6.4 (37%) hours',
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
      valor: '25',
      unidad: '%',
      analito: 'acalabrutinib',
      ref: {
        f: 'dailymed-acalabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean absolute bioavailability of acalabrutinib was 25%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '0,5',
      unidad: 'h',
      analito: 'acalabrutinib',
      ref: {
        f: 'dailymed-acalabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'time to peak plasma concentration (T max ) of acalabrutinib and its active metabolite, ACP-5862 were 0.5 (0.2, 3.0) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión reversible a proteínas plasmáticas',
      valor: '97,5',
      unidad: '%',
      analito: 'acalabrutinib',
      ref: {
        f: 'dailymed-acalabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Reversible binding to human plasma protein of acalabrutinib and its active metabolite, ACP-5862, were 97.5% and 98.6%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '101 (aprox.)',
      unidad: 'L',
      analito: 'acalabrutinib',
      ref: { f: 'dailymed-acalabrutinib', sec: '12.3 · Farmacocinética', cita: 'was approximately 101 (52%) L and 67 (32%) L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '1,4',
      unidad: 'h',
      analito: 'acalabrutinib',
      ref: { f: 'dailymed-acalabrutinib', sec: '12.3 · Farmacocinética', cita: 'were 1.4 (50%) hours and 6.4 (37%) hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '148',
      unidad: 'L/h',
      analito: 'acalabrutinib',
      ref: {
        f: 'dailymed-acalabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent oral clearance (CL/F) of acalabrutinib and its active metabolite, ACP-5862, were 148 (33%) L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '84',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única marcada de 100 mg',
      ref: {
        f: 'dailymed-acalabrutinib',
        sec: '12.3 · Farmacocinética',
        cita: '84% of the dose was recovered in the feces (< 2% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acalabrutinib', 'b1409184-3267-4d8c-8f17-4e01f69828b1', 'CALQUENCE (ACALABRUTINIB) TABLET, FILM COATED', 'CALQUENCE', '9', '2026-10-16', '2026-11-19'),
    rengPubchem(71226662, 'acalabrutinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
