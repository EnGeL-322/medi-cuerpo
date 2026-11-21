import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nizatidina',
    nombre: 'Nizatidina',
    clase: 'Antagonista de los receptores H2 de la histamina',
    sinonimos: [ 'nizatidine', 'Axid' ],
    formula: 'C12H21N5O2S2',
    masaMolar: 331.5,
    smiles: 'CNC(=C[N+](=O)[O-])NCCSCC1=CSC(=N1)CN(C)C',
    inchikey: 'SGXXNSQHWDMGGP-UHFFFAOYSA-N',
    cid: 4513,
    iupac: "1-N'-[2-[[2-[(dimethylamino)methyl]-1,3-thiazol-4-yl]methylsulfanyl]ethyl]-1-N-methyl-2-nitroethene-1,1-diamine",
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'nizatidina-oral',
      producto: 'Nizatidine · cápsula',
      titular: 'EPIC PHARMA, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 300 mg por cápsula, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'starch, corn',
        'dimethicone, unspecified',
        'povidone, unspecified',
        'talc',
        'gelatin, unspecified',
        'ferric oxide yellow',
        'titanium dioxide',
        'alcohol',
        'ammonia',
        'butyl alcohol',
        'ferrosoferric oxide',
        'isopropyl alcohol',
        'propylene glycol',
        'potassium hydroxide',
        'shellac'
      ],
      usos: {
        t: 'Úlcera duodenal activa (hasta 8 semanas) y tratamiento de mantenimiento tras la cicatrización.',
        ref: {
          f: 'dailymed-nizatidina',
          sec: '1 · Indicaciones',
          cita: 'Nizatidine capsules are indicated for up to 8 weeks for the treatment of active duodenal ulcer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nizatidina',
      reacciones: [
        [
          'Hubo acontecimientos adversos en al menos el 1 % de los tratados en los ensayos con placebo de Estados Unidos y Canadá.',
          '34084-4',
          'Table 5 lists adverse events that occurred at a frequency of 1% or more among nizatidine-treated patients'
        ],
        [
          'Se notificó anemia con más frecuencia que con placebo.',
          '34084-4',
          'Anemia was reported significantly more frequently in nizatidine- than in placebo-treated patients'
        ],
        [
          'Lesión hepatocelular con enzimas hepáticas elevadas, posible o probablemente relacionada con el fármaco.',
          '34084-4',
          'Hepatocellular injury, evidenced by elevated liver enzyme tests'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 150 mg o 300 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Úlcera duodenal activa (hasta 8 semanas) y tratamiento de mantenimiento tras la cicatrización.',
    actua: 'Inhibe de forma competitiva y reversible la acción de la histamina sobre los receptores H2, sobre todo los de las células parietales del estómago, y reduce la secreción de ácido.',
    recorrido: 'La biodisponibilidad oral absoluta supera el 70 %; el máximo en plasma llega entre 0,5 y 3 horas después de la dosis. Más del 90 % de la dosis sale por la orina en 12 horas, un 60 % como fármaco sin cambios; el aclaramiento renal indica secreción tubular activa. Menos del 6 % sale por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de 150 mg o 300 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula de 150 mg o 300 mg.',
          ref: { f: 'dailymed-nizatidina', sec: '11 · Descripción', cita: 'Nizatidine, USP is a histamine H 2 -receptor antagonist', codigo: '34089-3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral absoluta supera el 70 %; el máximo en plasma llega entre 0,5 y 3 horas después de la dosis.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta supera el 70 %; el máximo en plasma llega entre 0,5 y 3 horas después de la dosis.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute oral bioavailability of nizatidine exceeds 70%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida, el AUC y la Cmax aumentan alrededor de un 10 %.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'With food, the AUC and C max increase by approximately 10%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Aproximadamente el 35 % va unido a proteínas del plasma, sobre todo a la glucoproteína ácida α1; el volumen de distribución es de 0,8 a 1,5 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Aproximadamente el 35 % va unido a proteínas del plasma, sobre todo a la glucoproteína ácida α1; el volumen de distribución es de 0,8 a 1,5 L/kg.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 35% of nizatidine is bound to plasma protein, mainly to α 1 -acid glycoprotein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor H2 de la célula parietal gástrica',
        efecto: 'Inhibe de forma competitiva y reversible la acción de la histamina sobre los receptores H2, sobre todo los de las células parietales del estómago, y reduce la secreción de ácido.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva y reversible la acción de la histamina sobre los receptores H2, sobre todo los de las células parietales del estómago, y reduce la secreción de ácido.',
            ref: {
              f: 'dailymed-nizatidina',
              sec: '12 · Farmacología clínica',
              cita: 'Nizatidine is a competitive, reversible inhibitor of histamine at the histamine H 2 -receptors, particularly those in the gastric parietal cells',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Menos del 7 % de la dosis se transforma en N2-monodesmetilnizatidina; otros metabolitos probables son el N2-óxido y el S-óxido.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Menos del 7 % de la dosis se transforma en N2-monodesmetilnizatidina; otros metabolitos probables son el N2-óxido y el S-óxido.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'less than 7% of an oral dose is metabolized as N2-monodesmethylnizatidine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N2-monodesmetilnizatidina',
          actividad: 'activo',
          nota: 'Principal metabolito de la orina.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'less than 7% of an oral dose is metabolized as N2-monodesmethylnizatidine, an H 2 -receptor antagonist',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'N2-óxido y S-óxido',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'Other likely metabolites are the N2-oxide (less than 5% of the dose) and the S-oxide (less than 6% of the dose)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 90 % de la dosis sale por la orina en 12 horas, un 60 % como fármaco sin cambios; el aclaramiento renal indica secreción tubular activa. Menos del 6 % sale por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 90 % de la dosis sale por la orina en 12 horas, un 60 % como fármaco sin cambios; el aclaramiento renal indica secreción tubular activa. Menos del 6 % sale por las heces.',
          ref: {
            f: 'dailymed-nizatidina',
            sec: '12.3 · Farmacocinética',
            cita: 'More than 90% of an oral dose of nizatidine is excreted in the urine within 12 hours',
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
      valor: '> 70',
      unidad: '%',
      analito: 'nizatidina',
      ref: {
        f: 'dailymed-nizatidina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute oral bioavailability of nizatidine exceeds 70%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '0,5-3',
      unidad: 'h',
      analito: 'nizatidina',
      ref: { f: 'dailymed-nizatidina', sec: '12.3 · Farmacocinética', cita: 'occur from 0.5 to 3 hours following the dose', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1-2',
      unidad: 'h',
      analito: 'nizatidina',
      ref: { f: 'dailymed-nizatidina', sec: '12.3 · Farmacocinética', cita: 'The elimination half-life is 1 to 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,8-1,5',
      unidad: 'L/kg',
      analito: 'nizatidina',
      ref: { f: 'dailymed-nizatidina', sec: '12.3 · Farmacocinética', cita: 'the volume of distribution is 0.8 to 1.5 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '35 (aprox.)',
      unidad: '%',
      analito: 'nizatidina',
      ref: {
        f: 'dailymed-nizatidina',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 35% of nizatidine is bound to plasma protein',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento plasmático',
      valor: '40-60',
      unidad: 'L/h',
      analito: 'nizatidina',
      ref: { f: 'dailymed-nizatidina', sec: '12.3 · Farmacocinética', cita: 'plasma clearance is 40 to 60 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 12 horas',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'nizatidina y metabolitos',
      condiciones: 'en 12 horas',
      ref: {
        f: 'dailymed-nizatidina',
        sec: '12.3 · Farmacocinética',
        cita: 'More than 90% of an oral dose of nizatidine is excreted in the urine within 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminado en las heces',
      valor: '< 6',
      unidad: '% de la dosis',
      analito: 'nizatidina y metabolitos',
      ref: {
        f: 'dailymed-nizatidina',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 6% of an administered dose is eliminated in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nizatidina', 'e9957997-8b85-48a0-9bb3-b878cb223236', 'NIZATIDINE CAPSULE', 'Nizatidine', '1', '2025-01-06', '2026-11-12'),
    rengPubchem(4513, 'nizatidine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
