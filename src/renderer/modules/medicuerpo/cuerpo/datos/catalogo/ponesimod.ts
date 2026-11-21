import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ponesimod',
    nombre: 'Ponesimod',
    clase: 'Modulador del receptor 1 de esfingosina-1-fosfato (S1P1)',
    sinonimos: [ 'ponesimod', 'Ponvory' ],
    formula: 'C23H25ClN2O4S',
    masaMolar: 461,
    smiles: 'CCCN=C1N(C(=O)/C(=C/C2=CC(=C(C=C2)OC[C@@H](CO)O)Cl)/S1)C3=CC=CC=C3C',
    inchikey: 'LPAUOXUZGSBGDU-ULCCENQXSA-N',
    cid: 11363176,
    iupac: '(5Z)-5-[[3-chloro-4-[(2R)-2,3-dihydroxypropoxy]phenyl]methylidene]-3-(2-methylphenyl)-2-propylimino-1,3-thiazolidin-4-one',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ponesimod-oral',
      producto: 'PONVORY · comprimido recubierto con película',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'croscarmellose sodium',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone k30',
        'silicon dioxide',
        'sodium lauryl sulfate',
        'hypromellose, unspecified',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'triacetin',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
        ref: {
          f: 'dailymed-ponesimod',
          sec: '1 · Indicaciones',
          cita: 'PONVORY is indicated for the treatment of relapsing forms of multiple sclerosis (MS), to include clinically isolated syndrome, relapsing-remitting disease, and active secondary progressive disease, in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ponesimod',
      advertencias: [
        {
          titulo: 'Infecciones',
          texto: 'Puede aumentar el riesgo de infecciones; hacer un hemograma antes de empezar y no iniciarlo con infecciones activas.',
          organos: [],
          ref: {
            f: 'dailymed-ponesimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'Infections : PONVORY may increase the risk of infections. Obtain a complete blood count (CBC) before initiating treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradiarritmia y retrasos de la conducción auriculoventricular',
          texto: 'Puede reducir de forma transitoria la frecuencia cardíaca; requiere un electrocardiograma antes de empezar y un aumento gradual de la dosis.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ponesimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'PONVORY may result in a transient decrease in heart rate; titration is required for treatment initiation',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (al menos 10 %): infección respiratoria alta, elevación de transaminasas hepáticas e hipertensión.',
          '34084-4',
          'Most common adverse reactions (incidence at least 10%) are upper respiratory tract infection, hepatic transaminase elevation, and hypertension'
        ],
        [
          'Los acontecimientos adversos llevaron a suspender el tratamiento en el 8,7 % de los pacientes con ponesimod, frente al 6 % con teriflunomida 14 mg.',
          '34084-4',
          'Adverse events led to discontinuation of treatment in 8.7% of PONVORY-treated patients, compared to 6% of patients receiving teriflunomide 14 mg'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
    actua: 'Se une con alta afinidad al receptor S1P1 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica; podría reducir su migración al sistema nervioso central.',
    recorrido: 'La concentración máxima se alcanza 2-4 horas tras la dosis y la biodisponibilidad oral absoluta de 10 mg es del 84 %; los alimentos no influyen de forma relevante. Tras una dosis oral marcada, entre el 57 % y el 80 % se recuperó en las heces (16 % como ponesimod inalterado) y entre el 10 % y el 18 % en la orina, sin fármaco inalterado.'
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
          ref: {
            f: 'dailymed-ponesimod',
            sec: '3 · Formas y concentraciones',
            cita: 'PONVORY is available as round, biconvex, film-coated tablets for oral use',
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
      ocurre: 'La concentración máxima se alcanza 2-4 horas tras la dosis y la biodisponibilidad oral absoluta de 10 mg es del 84 %; los alimentos no influyen de forma relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La concentración máxima se alcanza 2-4 horas tras la dosis y la biodisponibilidad oral absoluta de 10 mg es del 84 %; los alimentos no influyen de forma relevante.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to reach maximum plasma concentration of ponesimod is 2–4 hours post-dose. The absolute oral bioavailability of a 10 mg dose is 84%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no tienen un efecto clínicamente relevante en su farmacocinética.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Food does not have a clinically relevant effect on ponesimod pharmacokinetics',
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
      ocurre: 'Se une mucho a las proteínas del plasma (más del 99 %) y está sobre todo (78,5 %) en la fracción plasmática de la sangre; en animales atraviesa con facilidad la barrera hematoencefálica.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a las proteínas del plasma (más del 99 %) y está sobre todo (78,5 %) en la fracción plasmática de la sangre; en animales atraviesa con facilidad la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Ponesimod is highly bound to plasma proteins (> 99%) and is mainly (78.5%) distributed in the plasma fraction of whole blood',
            codigo: '43682-4'
          }
        },
        {
          t: 'En estudios en animales atraviesa con facilidad la barrera hematoencefálica.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Animal studies show that ponesimod readily crosses the blood-brain-barrier',
            codigo: '43682-4'
          },
          poblacion: 'animales'
        },
        {
          t: 'Tras la vía intravenosa, el volumen de distribución en estado estacionario es de 160 L.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Following IV administration in healthy subjects, the steady-state volume of distribution of ponesimod is 160 L',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis intravenosa'
        }
      ],
      accion: {
        diana: 'Receptor 1 de esfingosina-1-fosfato (S1P1)',
        efecto: 'Se une con alta afinidad al receptor S1P1 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica; podría reducir su migración al sistema nervioso central.',
        lugar: [ 'sangre', 'encefalo' ],
        datos: [
          {
            t: 'Se une con alta afinidad al receptor S1P1 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica; podría reducir su migración al sistema nervioso central.',
            ref: {
              f: 'dailymed-ponesimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ponesimod blocks the capacity of lymphocytes to egress from lymph nodes, reducing the number of lymphocytes in peripheral blood',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su mecanismo en la esclerosis múltiple se desconoce, pero podría implicar menos migración de linfocitos al sistema nervioso central.',
            ref: {
              f: 'dailymed-ponesimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'may involve reduction of lymphocyte migration into the central nervous system',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa antes de excretarse, aunque el ponesimod inalterado es el componente principal en el plasma; en preparaciones de hígado humano, varias CYP (entre ellas CYP3A4 y CYP3A5) y otras enzimas lo oxidan a M12.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa antes de excretarse, aunque el ponesimod inalterado es el componente principal en el plasma; en preparaciones de hígado humano, varias CYP (entre ellas CYP3A4 y CYP3A5) y otras enzimas lo oxidan a M12.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Multiple CYP450 (CYP2J2, CYP3A4, CYP3A5, CYP4F3A, and CYP4F12) and non-CYP450 enzymes catalyze the oxidation of ponesimod to M12',
            codigo: '43682-4'
          }
        },
        {
          t: 'En preparaciones de hígado humano, el paso a M13 se debe sobre todo a enzimas que no son del citocromo P450.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Experiments with human liver preparations indicate that metabolism of ponesimod to M13 occurs primarily through a combination of non-Cytochrome P450 (CYP450) enzymatic activities',
            codigo: '43682-4'
          }
        },
        {
          t: 'También sufre glucuronidación directa, sobre todo por UGT1A1 y UGT2B7.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Ponesimod also undergoes direct glucuronidation (mainly UGT1A1 and UGT2B7)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M12 y M13',
          actividad: 'inactivo',
          nota: 'Metabolitos circulantes inactivos en los receptores S1P (alrededor del 6 % y el 20 % de la exposición total).',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Two inactive circulating metabolites, M12 and M13, have also been identified in human plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, entre el 57 % y el 80 % se recuperó en las heces (16 % como ponesimod inalterado) y entre el 10 % y el 18 % en la orina, sin fármaco inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, entre el 57 % y el 80 % se recuperó en las heces (16 % como ponesimod inalterado) y entre el 10 % y el 18 % en la orina, sin fármaco inalterado.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: '57% to 80% of the dose was recovered in feces (16% as unchanged ponesimod), and 10% to 18% in urine (no unchanged ponesimod)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación tras la toma oral es de unas 33 horas.',
          ref: {
            f: 'dailymed-ponesimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life after oral administration is approximately 33 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '2-4',
      unidad: 'h',
      analito: 'ponesimod',
      ref: {
        f: 'dailymed-ponesimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to reach maximum plasma concentration of ponesimod is 2–4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta (10 mg)',
      valor: '84',
      unidad: '%',
      analito: 'ponesimod',
      condiciones: '10 mg',
      ref: { f: 'dailymed-ponesimod', sec: '12.3 · Farmacocinética', cita: 'The absolute oral bioavailability of a 10 mg dose is 84%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '160',
      unidad: 'L',
      analito: 'ponesimod',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-ponesimod',
        sec: '12.3 · Farmacocinética',
        cita: 'the steady-state volume of distribution of ponesimod is 160 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'ponesimod',
      ref: { f: 'dailymed-ponesimod', sec: '12.3 · Farmacocinética', cita: 'Ponesimod is highly bound to plasma proteins (> 99%)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '33 (aprox.)',
      unidad: 'h',
      analito: 'ponesimod',
      ref: {
        f: 'dailymed-ponesimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life after oral administration is approximately 33 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total tras la vía intravenosa',
      valor: '3,8',
      unidad: 'L/h',
      analito: 'ponesimod',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-ponesimod',
        sec: '12.3 · Farmacocinética',
        cita: 'After a single IV administration, the total clearance of ponesimod is 3.8 L/hour',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ponesimod', '5be69660-738c-4db7-b0d4-517aa873dc41', 'PONVORY (PONESIMOD) TABLET, FILM COATED PONVORY (PONESIMOD) KIT', 'PONVORY', '14', '2026-11-16', '2026-11-19'),
    rengPubchem(11363176, 'ponesimod', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
