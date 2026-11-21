import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'daridorexant',
    nombre: 'Daridorexant',
    clase: 'Antagonista de los receptores de orexina (hipnótico)',
    sinonimos: [ 'daridorexant', 'Quviviq' ],
    formula: 'C23H23ClN6O2',
    masaMolar: 450.9,
    smiles: 'CC1=C(C=CC2=C1N=C(N2)[C@@]3(CCCN3C(=O)C4=C(C=CC(=C4)OC)N5N=CC=N5)C)Cl',
    inchikey: 'NBGABHGMJVIVBW-QHCPKHFHSA-N',
    cid: 91801202,
    iupac: '[(2S)-2-(5-chloro-4-methyl-1H-benzimidazol-2-yl)-2-methylpyrrolidin-1-yl]-[5-methoxy-2-(triazol-2-yl)phenyl]methanone',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'daridorexant-oral',
      producto: 'QUVIVIQ · comprimido recubierto con película',
      titular: 'IDORSIA PHARMACEUTICALS LTD',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 50 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de daridorexant',
        ref: { f: 'dailymed-daridorexant', sec: '11 · Descripción', cita: 'present as daridorexant hydrochloride salt', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'microcrystalline cellulose 101',
        'povidone k30',
        'water',
        'silicon dioxide',
        'magnesium stearate',
        'microcrystalline cellulose 102',
        'hypromellose, unspecified',
        'glycerin',
        'talc',
        'titanium dioxide',
        'ferric oxide red',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento del insomnio en adultos, con dificultad para conciliar o mantener el sueño.',
        ref: {
          f: 'dailymed-daridorexant',
          sec: '1 · Indicaciones',
          cita: 'QUVIVIQ is indicated for the treatment of adult patients with insomnia, characterized by difficulties with sleep onset and/or sleep maintenance',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-daridorexant',
      advertencias: [
        {
          titulo: 'Efectos depresores del sistema nervioso central y alteración diurna',
          texto: 'Es un depresor del sistema nervioso central que puede afectar a la vigilia diurna incluso a las dosis prescritas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-daridorexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'QUVIVIQ is a central nervous system (CNS) depressant that can impair daytime wakefulness even when used as prescribed',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Empeoramiento de la depresión e ideas suicidas',
          texto: 'Pueden empeorar la depresión o aparecer pensamientos suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-daridorexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Worsening of Depression/Suicidal Ideation: Worsening of depression or suicidal thinking may occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Conductas complejas durante el sueño',
          texto: 'Pueden aparecer sonambulismo, conducir dormido y otras actividades sin estar totalmente despierto; suspender de inmediato si ocurren.',
          organos: [],
          ref: {
            f: 'dailymed-daridorexant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Complex Sleep Behaviors: Behaviors including sleepwalking, sleep driving, and engaging in other activities while not fully awake may occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y no menos que con placebo): cefalea y somnolencia o fatiga.',
          '34084-4',
          'The most common adverse reactions (reported in ≥ 5% of patients treated with QUVIVIQ and at an incidence ≥ than placebo) were headache and somnolence or fatigue'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran los efectos depresores del sistema nervioso central, el empeoramiento de la depresión y la parálisis del sueño.',
          '34084-4',
          'CNS-Depressant Effects and Daytime Impairment [see Warnings and Precautions (5.1) ] Worsening of Depression/Suicidal Ideation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg o 50 mg por comprimido, según la etiqueta; el activo va como clorhidrato de daridorexant. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del insomnio en adultos, con dificultad para conciliar o mantener el sueño.',
    actua: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
    recorrido: 'Alcanza la concentración máxima en 1-2 horas y su biodisponibilidad absoluta es del 62 %. La vía principal de excreción son las heces (alrededor del 57 %), seguidas de la orina (alrededor del 28 %), sobre todo como metabolitos.'
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
            f: 'dailymed-daridorexant',
            sec: '3 · Formas y concentraciones',
            cita: 'film-coated tablet debossed with "25" on one side',
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
      ocurre: 'Alcanza la concentración máxima en 1-2 horas y su biodisponibilidad absoluta es del 62 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Alcanza la concentración máxima en 1-2 horas y su biodisponibilidad absoluta es del 62 %.',
          ref: {
            f: 'dailymed-daridorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Daridorexant reaches peak plasma concentrations within 1–2 hours (T max ). Daridorexant has an absolute bioavailability of 62%',
            codigo: '43682-4'
          }
        },
        {
          t: 'En sujetos sanos, una comida rica en grasas y calorías retrasó el Tmax 1,3 horas y redujo la Cmax un 16 %, sin cambiar la exposición total.',
          ref: {
            f: 'dailymed-daridorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat and high-calorie meal delayed the T max by 1.3 hours and decreased the C max by 16%, but did not affect the total exposure (AUC)',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas y calorías'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución es de 31 L y se une en un 99,7 % a las proteínas del plasma; el cociente sangre/plasma es de 0,64.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución es de 31 L y se une en un 99,7 % a las proteínas del plasma; el cociente sangre/plasma es de 0,64.',
          ref: { f: 'dailymed-daridorexant', sec: '12.3 · Farmacocinética', cita: 'Daridorexant is 99.7% bound to plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución de 31 L.',
          ref: { f: 'dailymed-daridorexant', sec: '12.3 · Farmacocinética', cita: 'Daridorexant has a volume of distribution of 31 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores de orexina OX1R y OX2R',
        efecto: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
        lugar: [],
        datos: [
          {
            t: 'Se supone que actúa bloqueando los receptores de orexina: impedir que las orexinas A y B, que favorecen la vigilia, se unan a los receptores OX1R y OX2R suprimiría el impulso de vigilia.',
            ref: {
              f: 'dailymed-daridorexant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Blocking the binding of wake-promoting neuropeptides orexin A and orexin B to receptors OX1R and OX2R is thought to suppress wake drive',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa, sobre todo por la CYP3A4 (89 %); cada una de las otras CYP aporta menos del 3 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa, sobre todo por la CYP3A4 (89 %); cada una de las otras CYP aporta menos del 3 %.',
          ref: {
            f: 'dailymed-daridorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'Daridorexant undergoes extensive metabolism and is primarily metabolized by CYP3A4 (89%)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal de excreción son las heces (alrededor del 57 %), seguidas de la orina (alrededor del 28 %), sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal de excreción son las heces (alrededor del 57 %), seguidas de la orina (alrededor del 28 %), sobre todo como metabolitos.',
          ref: {
            f: 'dailymed-daridorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary route of daridorexant excretion is via feces (approximately 57%), followed by urine (approximately 28%), primarily as metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 8 horas.',
          ref: {
            f: 'dailymed-daridorexant',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of daridorexant is approximately 8 hours',
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
      valor: '1-2',
      unidad: 'h',
      analito: 'daridorexant',
      ref: {
        f: 'dailymed-daridorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'Daridorexant reaches peak plasma concentrations within 1–2 hours (T max )',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '62',
      unidad: '%',
      analito: 'daridorexant',
      ref: { f: 'dailymed-daridorexant', sec: '12.3 · Farmacocinética', cita: 'Daridorexant has an absolute bioavailability of 62%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '31',
      unidad: 'L',
      analito: 'daridorexant',
      ref: { f: 'dailymed-daridorexant', sec: '12.3 · Farmacocinética', cita: 'Daridorexant has a volume of distribution of 31 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,7',
      unidad: '%',
      analito: 'daridorexant',
      ref: { f: 'dailymed-daridorexant', sec: '12.3 · Farmacocinética', cita: 'Daridorexant is 99.7% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '8 (aprox.)',
      unidad: 'h',
      analito: 'daridorexant',
      ref: {
        f: 'dailymed-daridorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of daridorexant is approximately 8 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excreción por las heces',
      valor: '57 (aprox.)',
      unidad: '% de la dosis',
      analito: 'daridorexant y metabolitos',
      ref: {
        f: 'dailymed-daridorexant',
        sec: '12.3 · Farmacocinética',
        cita: 'The primary route of daridorexant excretion is via feces (approximately 57%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-daridorexant', '3a2d1503-b816-40c9-9fac-7e03c5a3bcef', 'QUVIVIQ (DARIDOREXANT) TABLET, FILM COATED', 'QUVIVIQ', '13', '2026-03-02', '2026-11-19'),
    rengPubchem(91801202, 'daridorexant', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
