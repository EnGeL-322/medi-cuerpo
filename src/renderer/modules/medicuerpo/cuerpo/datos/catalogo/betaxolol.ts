import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'betaxolol',
    nombre: 'Betaxolol',
    clase: 'Betabloqueante cardioselectivo (beta-1)',
    sinonimos: [ 'betaxolol', 'Kerlone' ],
    formula: 'C18H29NO3',
    masaMolar: 307.4,
    smiles: 'CC(C)NCC(COC1=CC=C(C=C1)CCOCC2CC2)O',
    inchikey: 'NWIUTZDMDHAVTP-UHFFFAOYSA-N',
    cid: 2369,
    iupac: '1-[4-[2-(cyclopropylmethoxy)ethyl]phenoxy]-3-(propan-2-ylamino)propan-2-ol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'betaxolol-oral',
      producto: 'BETAXOLOL HYDROCHLORIDE · comprimido recubierto',
      titular: 'KVK-TECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de betaxolol',
        ref: { f: 'dailymed-betaxolol', sec: '11 · Descripción', cita: 'Betaxolol hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'anhydrous lactose',
        'cellulose, microcrystalline',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'stearic acid',
        'titanium dioxide',
        'polyethylene glycol 400',
        'polysorbate 80',
        'hypromellose 2910 (6 mpa.s)'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o junto con otros antihipertensivos, sobre todo diuréticos tiacídicos.',
        ref: {
          f: 'dailymed-betaxolol',
          sec: '1 · Indicaciones',
          cita: 'Betaxolol tablets, USP is indicated in the management of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-betaxolol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'El bloqueo beta puede deprimir aún más la contractilidad miocárdica y precipitar una insuficiencia cardíaca más grave.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-betaxolol',
            sec: 'Advertencias',
            cita: 'beta-adrenergic receptor blockade carries the potential hazard of further depressing myocardial contractility and precipitating more severe heart failure',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'La mayoría de las reacciones han sido leves y transitorias y propias de los betabloqueantes, como bradicardia, fatiga, disnea y letargo.',
          '34084-4',
          'Most adverse reactions have been mild and transient and are typical of beta-adrenergic blocking agents, e.g., bradycardia, fatigue, dyspnea, and lethargy'
        ],
        [
          'En los ensayos controlados de EE. UU. y Europa hubo que retirarlo en alrededor del 3,5 % de los pacientes, sobre todo por bradicardia.',
          '34084-4',
          'Withdrawal of therapy in U.S. and European controlled clinical trials has been necessary in about 3.5% of patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 10 mg o 20 mg por comprimido, según la etiqueta; el activo va como clorhidrato de betaxolol. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o junto con otros antihipertensivos, sobre todo diuréticos tiacídicos.',
    actua: 'Bloqueante selectivo de los receptores adrenérgicos beta-1 (cardioselectivo), con débil actividad estabilizadora de membrana y sin actividad simpaticomimética intrínseca; a dosis altas puede afectar también a los beta-2 de los bronquios y los vasos.',
    recorrido: 'La absorción es completa y un pequeño efecto de primer paso deja una biodisponibilidad absoluta del 89 % ± 5 %, que no cambian los alimentos ni el alcohol. Más del 80 % de la dosis se recupera en la orina como betaxolol y metabolitos, alrededor del 15 % como fármaco sin cambios.'
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
          ref: { f: 'dailymed-betaxolol', sec: '12 · Farmacología clínica', cita: 'In man, absorption of an oral dose is complete', codigo: '34090-1' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es completa y un pequeño efecto de primer paso deja una biodisponibilidad absoluta del 89 % ± 5 %, que no cambian los alimentos ni el alcohol.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es completa y un pequeño efecto de primer paso deja una biodisponibilidad absoluta del 89 % ± 5 %, que no cambian los alimentos ni el alcohol.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'There is a small and consistent first-pass effect resulting in an absolute bioavailability of 89% ± 5% that is unaffected by the concomitant ingestion of food or alcohol',
            codigo: '34090-1'
          }
        },
        {
          t: 'Tras 10 mg, el pico medio se alcanza entre 1,5 y 6 horas (media de unas 3 horas).',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'Mean peak blood concentrations of 21.6 ng/ml (range 16.3 to 27.9 ng/ml) are reached between 1.5 and 6 (mean about 3) hours after a single oral dose',
            codigo: '34090-1'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'dosis oral única de 10 mg'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor de un 50 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor de un 50 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'Betaxolol is approximately 50% bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico beta-1',
        efecto: 'Bloqueante selectivo de los receptores adrenérgicos beta-1 (cardioselectivo), con débil actividad estabilizadora de membrana y sin actividad simpaticomimética intrínseca; a dosis altas puede afectar también a los beta-2 de los bronquios y los vasos.',
        lugar: [ 'corazon', 'vasos' ],
        datos: [
          {
            t: 'Bloqueante selectivo de los receptores adrenérgicos beta-1 (cardioselectivo), con débil actividad estabilizadora de membrana y sin actividad simpaticomimética intrínseca; a dosis altas puede afectar también a los beta-2 de los bronquios y los vasos.',
            ref: {
              f: 'dailymed-betaxolol',
              sec: '12 · Farmacología clínica',
              cita: 'Betaxolol is a ß 1 -selective (cardioselective) adrenergic receptor blocking agent that has weak membrane-stabilizing activity and no intrinsic sympathomimetic (partial agonist) activity',
              codigo: '34090-1'
            }
          },
          {
            t: 'Su preferencia por los receptores beta-1 no es absoluta: a dosis altas puede inhibir los beta-2, presentes sobre todo en la musculatura bronquial y vascular.',
            ref: {
              f: 'dailymed-betaxolol',
              sec: '12 · Farmacología clínica',
              cita: 'some inhibitory effects on ß 2 receptors (found chiefly in the bronchial and vascular musculature) can be expected at higher doses',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo hepático y en segundo lugar por excreción renal; sus metabolitos tienen una contribución despreciable al efecto clínico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo hepático y en segundo lugar por excreción renal; sus metabolitos tienen una contribución despreciable al efecto clínico.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'It is eliminated primarily by liver metabolism and secondarily by renal excretion',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del betaxolol',
          actividad: 'inactivo',
          nota: 'Su contribución al efecto clínico es despreciable.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'the remainder being metabolites whose contribution to the clinical effect is negligible',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 80 % de la dosis se recupera en la orina como betaxolol y metabolitos, alrededor del 15 % como fármaco sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 80 % de la dosis se recupera en la orina como betaxolol y metabolitos, alrededor del 15 % como fármaco sin cambios.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'Following oral administration, greater than 80% of a dose is recovered in the urine as betaxolol and its metabolites',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida de eliminación media en voluntarios sanos va de unas 14 a 22 horas tras dosis únicas.',
          ref: {
            f: 'dailymed-betaxolol',
            sec: '12 · Farmacología clínica',
            cita: 'The mean elimination half-life in various studies in normal volunteers ranged from about 14 to 22 hours after single oral doses and is similar in chronic dosing',
            codigo: '34090-1'
          },
          poblacion: 'voluntarios sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '89 ± 5',
      unidad: '%',
      analito: 'betaxolol',
      ref: { f: 'dailymed-betaxolol', sec: '12 · Farmacología clínica', cita: 'resulting in an absolute bioavailability of 89% ± 5%', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo medio hasta el pico (10 mg)',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'betaxolol',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 10 mg',
      ref: {
        f: 'dailymed-betaxolol',
        sec: '12 · Farmacología clínica',
        cita: 'are reached between 1.5 and 6 (mean about 3) hours after a single oral dose',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'betaxolol',
      ref: { f: 'dailymed-betaxolol', sec: '12 · Farmacología clínica', cita: 'Betaxolol is approximately 50% bound to plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '14-22 (aprox.)',
      unidad: 'h',
      analito: 'betaxolol',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-betaxolol',
        sec: '12 · Farmacología clínica',
        cita: 'ranged from about 14 to 22 hours after single oral doses',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '> 80',
      unidad: '% de la dosis',
      analito: 'betaxolol y metabolitos',
      ref: {
        f: 'dailymed-betaxolol',
        sec: '12 · Farmacología clínica',
        cita: 'greater than 80% of a dose is recovered in the urine as betaxolol and its metabolites',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-betaxolol', 'f3b50bbb-df03-4ed7-9d8d-180edc2abd54', 'BETAXOLOL HYDROCHLORIDE TABLET, COATED', 'BETAXOLOL HYDROCHLORIDE', '10', '2024-05-02', '2026-11-19'),
    rengPubchem(2369, 'betaxolol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
