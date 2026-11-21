import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'desvenlafaxina',
    nombre: 'Desvenlafaxina',
    clase: 'Antidepresivo (inhibidor de la recaptación de serotonina y noradrenalina)',
    sinonimos: [ 'desvenlafaxine', 'Pristiq' ],
    formula: 'C16H25NO2',
    masaMolar: 263.37,
    smiles: 'CN(C)CC(C1=CC=C(C=C1)O)C2(CCCCC2)O',
    inchikey: 'KYYIDSXMWOZKMP-UHFFFAOYSA-N',
    cid: 125017,
    iupac: '4-[2-(dimethylamino)-1-(1-hydroxycyclohexyl)ethyl]phenol',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'desvenlafaxina-oral',
      producto: 'Pristiq Extended-Release · comprimido de liberación prolongada',
      titular: 'WYETH PHARMACEUTICALS LLC, A SUBSIDIARY OF PFIZER INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '50 mg, 100 mg o 25 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Succinato de desvenlafaxina',
        ref: { f: 'dailymed-desvenlafaxina', sec: '11 · Descripción', cita: 'desvenlafaxine succinate', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'talc',
        'magnesium stearate',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide red',
        'polyvinyl alcohol, unspecified',
        'ferric oxide yellow',
        'hypromellose 2208 (15000 mpa.s)'
      ],
      usos: {
        t: 'Trastorno depresivo mayor en adultos.',
        ref: {
          f: 'dailymed-desvenlafaxina',
          sec: '1 · Indicaciones',
          cita: 'PRISTIQ is indicated for the treatment of adults with major depressive disorder (MDD)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-desvenlafaxina',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños, adolescentes y adultos jóvenes en estudios a corto plazo.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents, and young adults',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Presión arterial',
          texto: 'Hay que vigilar la presión arterial porque subió en los estudios clínicos.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '5 · Advertencias y precauciones',
            cita: 'increases in blood pressure were observed in clinical studies',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y el doble que con placebo): náuseas, mareo, insomnio, sudoración excesiva, estreñimiento y somnolencia.',
          '34084-4',
          'nausea, dizziness, insomnia, hyperhidrosis, constipation, somnolence'
        ],
        [
          'También menos apetito, ansiedad y trastornos de la función sexual masculina.',
          '34084-4',
          'decreased appetite, anxiety, and specific male sexual function disorders'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 50 mg, 100 mg o 25 mg por comprimido, según la etiqueta; el activo va como succinato de desvenlafaxina. Los excipientes no son el principio activo.',
    usos: 'Trastorno depresivo mayor en adultos.',
    actua: 'Su mecanismo exacto se desconoce: se atribuye a que potencia la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación.',
    recorrido: 'Su biodisponibilidad oral absoluta ronda el 80 %; una comida rica en grasa sube la Cmax un 16 % sin cambiar el AUC. Alrededor del 45 % sale sin cambios por la orina en 72 horas, el 19 % como glucurónido y menos del 5 % como metabolito oxidativo.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: libera la desvenlafaxina poco a poco.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: libera la desvenlafaxina poco a poco.',
          ref: { f: 'dailymed-desvenlafaxina', sec: '3 · Formas y concentraciones', cita: 'square pyramid tablet debossed', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Su biodisponibilidad oral absoluta ronda el 80 %; una comida rica en grasa sube la Cmax un 16 % sin cambiar el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Su biodisponibilidad oral absoluta ronda el 80 %; una comida rica en grasa sube la Cmax un 16 % sin cambiar el AUC.',
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of PRISTIQ after oral administration is about 80%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución en estado estacionario de 3,4 L/kg; solo el 30 % se une a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución en estado estacionario de 3,4 L/kg; solo el 30 % se une a proteínas del plasma.',
          ref: { f: 'dailymed-desvenlafaxina', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of desvenlafaxine is 30%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Transportadores de serotonina y noradrenalina',
        efecto: 'Su mecanismo exacto se desconoce: se atribuye a que potencia la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce: se atribuye a que potencia la serotonina y la noradrenalina en el sistema nervioso central al inhibir su recaptación.',
            ref: {
              f: 'dailymed-desvenlafaxina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'thought to be related to the potentiation of serotonin and norepinephrine in the central nervous system, through inhibition of their reuptake',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por conjugación (enzimas UGT) y en menor medida por oxidación (N-desmetilación por CYP3A4); CYP2D6 no interviene.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por conjugación (enzimas UGT) y en menor medida por oxidación (N-desmetilación por CYP3A4); CYP2D6 no interviene.',
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '12.3 · Farmacocinética',
            cita: 'Desvenlafaxine is primarily metabolized by conjugation (mediated by UGT isoforms)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de desvenlafaxina',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 19% of the administered dose is excreted as the glucuronide metabolite',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'N,O-didesmetilvenlafaxina',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '12.3 · Farmacocinética',
            cita: '<5% as the oxidative metabolite (N,O-didesmethylvenlafaxine) in urine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 45 % sale sin cambios por la orina en 72 horas, el 19 % como glucurónido y menos del 5 % como metabolito oxidativo.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 45 % sale sin cambios por la orina en 72 horas, el 19 % como glucurónido y menos del 5 % como metabolito oxidativo.',
          ref: {
            f: 'dailymed-desvenlafaxina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 45% of desvenlafaxine is excreted unchanged in urine at 72 hours after oral administration',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '80 (aprox.)',
      unidad: '%',
      analito: 'desvenlafaxina',
      ref: {
        f: 'dailymed-desvenlafaxina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of PRISTIQ after oral administration is about 80%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '3,4',
      unidad: 'L/kg',
      analito: 'desvenlafaxina',
      ref: {
        f: 'dailymed-desvenlafaxina',
        sec: '12.3 · Farmacocinética',
        cita: 'Steady-state volume of distribution of desvenlafaxine is 3.4 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '30',
      unidad: '%',
      analito: 'desvenlafaxina',
      ref: { f: 'dailymed-desvenlafaxina', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of desvenlafaxine is 30%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina en 72 h',
      valor: '45 (aprox.)',
      unidad: '% de la dosis',
      analito: 'desvenlafaxina',
      ref: {
        f: 'dailymed-desvenlafaxina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 45% of desvenlafaxine is excreted unchanged in urine at 72 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado como glucurónido en la orina',
      valor: '19 (aprox.)',
      unidad: '% de la dosis',
      analito: 'glucurónido de desvenlafaxina',
      ref: {
        f: 'dailymed-desvenlafaxina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 19% of the administered dose is excreted as the glucuronide metabolite',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-desvenlafaxina', '0f43610c-f290-46ea-d186-4f998ed99fce', 'PRISTIQ EXTENDED-RELEASE (DESVENLAFAXINE SUCCINATE) TABLET, EXTENDED RELEASE', 'Pristiq Extended-Release', '67', '2026-04-27', '2026-11-12'),
    rengPubchem(125017, 'desvenlafaxine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
