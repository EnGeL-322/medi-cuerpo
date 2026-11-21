import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'oxibutinina',
    nombre: 'Oxibutinina',
    clase: 'Antimuscarínico (antiespasmódico de la vejiga)',
    sinonimos: [ 'oxybutynin' ],
    formula: 'C22H31NO3',
    masaMolar: 357.5,
    smiles: 'CCN(CC)CC#CCOC(=O)C(C1CCCCC1)(C2=CC=CC=C2)O',
    inchikey: 'XIQVNETUBQGFHX-UHFFFAOYSA-N',
    cid: 4634,
    iupac: '4-(diethylamino)but-2-ynyl 2-cyclohexyl-2-hydroxy-2-phenylacetate',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'oxibutinina-oral',
      producto: 'OXYBUTYNIN CHLORIDE · comprimido',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 2.5 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Cloruro de oxibutinina', ref: { f: 'dailymed-oxibutinina', sec: '11 · Descripción', cita: 'oxybutynin chloride', codigo: '34089-3' } },
      excipientes: [ 'cellulose, microcrystalline', 'silicon dioxide', 'magnesium stearate', 'starch, corn' ],
      usos: {
        t: 'Alivio de los síntomas de la inestabilidad vesical asociada a la micción en pacientes con vejiga neurógena no inhibida o neurógena refleja (urgencia, frecuencia, escapes, incontinencia de urgencia, disuria).',
        ref: {
          f: 'dailymed-oxibutinina',
          sec: '1 · Indicaciones',
          cita: 'Oxybutynin Chloride is indicated for the relief of symptoms of bladder instability associated with voiding in patients with uninhibited neurogenic or reflex neurogenic bladder',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-oxibutinina',
      advertencias: [
        {
          titulo: 'Angioedema',
          texto: 'Se ha notificado angioedema de cara, labios, lengua o laringe con la oxibutinina, a veces tras la primera dosis.',
          organos: [ 'vias-respiratorias', 'piel' ],
          ref: {
            f: 'dailymed-oxibutinina',
            sec: 'Advertencias',
            cita: 'Angioedema of the face, lips, tongue and/or larynx has been reported with oxybutynin',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Obstrucción de la vía aérea',
          texto: 'El angioedema con hinchazón de la vía aérea superior puede poner en peligro la vida.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-oxibutinina',
            sec: 'Advertencias',
            cita: 'Angioedema associated with upper airway swelling may be life-threatening',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'La tabla de la etiqueta recoge los acontecimientos adversos posiblemente relacionados con el tratamiento y notificados por al menos el 5 % de los pacientes.',
          '34084-4',
          'Table 3 shows the incidence of adverse events judged by investigators to be at least possibly related to treatment and reported by at least 5% of patients'
        ],
        [
          'Los participantes recibieron de 5 a 20 mg al día durante hasta 6 semanas en tres ensayos clínicos.',
          '34084-4',
          'These participants were treated with oxybutynin chloride 5 to 20 mg/day for up to 6 weeks'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg o 2.5 mg por comprimido, según la etiqueta; el activo va como cloruro de oxibutinina. Los excipientes no son el principio activo.',
    usos: 'Alivio de los síntomas de la inestabilidad vesical asociada a la micción en pacientes con vejiga neurógena no inhibida o neurógena refleja (urgencia, frecuencia, escapes, incontinencia de urgencia, disuria).',
    actua: 'Ejerce un efecto antiespasmódico directo sobre el músculo liso e inhibe la acción muscarínica de la acetilcolina sobre él; relaja el músculo liso de la vejiga.',
    recorrido: 'Tras la administración oral se absorbe rápidamente y alcanza la Cmax en menos de una hora. Se metaboliza ampliamente en el hígado: menos del 0,1 % de la dosis se excreta inalterado por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '11 · Descripción',
            cita: 'Each scored oxybutynin chloride tablet contains 2.5 mg and 5 mg of oxybutynin chloride',
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
      ocurre: 'Tras la administración oral se absorbe rápidamente y alcanza la Cmax en menos de una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe rápidamente y alcanza la Cmax en menos de una hora.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Following oral administration of oxybutynin chloride, oxybutynin is rapidly absorbed achieving C max within an hour',
            codigo: '34090-1'
          }
        },
        {
          t: 'La biodisponibilidad absoluta de la oxibutinina se estima en alrededor del 6 % (intervalo de 1,6 a 10,9 %) para los comprimidos.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'The absolute bioavailability of oxybutynin is reported to be about 6% (range 1.6 to 10.9%) for the tablets',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con la solución oral, tomarla con alimento retrasó ligeramente la absorción y aumentó la biodisponibilidad un 25 %.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'oxybutynin solution co-administered with food resulted in a slight delay in absorption and an increase in its bioavailability by 25%',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye ampliamente por los tejidos; el volumen de distribución es de 193 L tras una dosis intravenosa y ambos enantiómeros se unen en más del 99 % a las proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente por los tejidos; el volumen de distribución es de 193 L tras una dosis intravenosa y ambos enantiómeros se unen en más del 99 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Oxybutynin is widely distributed in body tissues following systemic absorption',
            codigo: '34090-1'
          }
        },
        {
          t: 'El volumen de distribución es de 193 L tras la administración intravenosa de 5 mg.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'The volume of distribution is 193 L after intravenous administration of 5 mg oxybutynin chloride',
            codigo: '34090-1'
          }
        },
        {
          t: 'Ambos enantiómeros de la oxibutinina se unen en más del 99 % a las proteínas del plasma.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Both enantiomers of oxybutynin are highly bound (>99%) to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptores muscarínicos de acetilcolina',
        efecto: 'Ejerce un efecto antiespasmódico directo sobre el músculo liso e inhibe la acción muscarínica de la acetilcolina sobre él; relaja el músculo liso de la vejiga.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Ejerce un efecto antiespasmódico directo sobre el músculo liso e inhibe la acción muscarínica de la acetilcolina sobre él; relaja el músculo liso de la vejiga.',
            ref: {
              f: 'dailymed-oxibutinina',
              sec: '12 · Farmacología clínica',
              cita: 'Oxybutynin chloride exerts a direct antispasmodic effect on smooth muscle and inhibits the muscarinic action of acetylcholine on smooth muscle',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por los sistemas del citocromo P450, en particular la CYP3A4, presente sobre todo en el hígado y la pared intestinal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por los sistemas del citocromo P450, en particular la CYP3A4, presente sobre todo en el hígado y la pared intestinal.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Oxybutynin is metabolized primarily by the cytochrome P450 enzyme systems, particularly CYP3A4 found mostly in the liver and gut wall',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desetiloxibutinina',
          actividad: 'activo',
          nota: 'Farmacológicamente activa.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Its metabolic products include phenylcyclohexylglycolic acid, which is pharmacologically inactive, and desethyloxybutynin, which is pharmacologically active',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Ácido fenilciclohexilglicólico',
          actividad: 'inactivo',
          nota: 'Farmacológicamente inactivo.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Its metabolic products include phenylcyclohexylglycolic acid, which is pharmacologically inactive',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se metaboliza ampliamente en el hígado: menos del 0,1 % de la dosis se excreta inalterado por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado: menos del 0,1 % de la dosis se excreta inalterado por la orina.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'Oxybutynin is extensively metabolized by the liver, with less than 0.1% of the administered dose excreted unchanged in the urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'La concentración plasmática desciende con una semivida efectiva de aproximadamente 2 a 3 horas.',
          ref: {
            f: 'dailymed-oxibutinina',
            sec: '12 · Farmacología clínica',
            cita: 'plasma concentration decreases with an effective half-life of approximately 2 to 3 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '< 1',
      unidad: 'h',
      analito: 'oxibutinina',
      ref: { f: 'dailymed-oxibutinina', sec: '12 · Farmacología clínica', cita: 'achieving C max within an hour', codigo: '34090-1' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta de los comprimidos',
      valor: '6 (1,6-10,9)',
      unidad: '%',
      analito: 'oxibutinina',
      ref: {
        f: 'dailymed-oxibutinina',
        sec: '12 · Farmacología clínica',
        cita: 'The absolute bioavailability of oxybutynin is reported to be about 6% (range 1.6 to 10.9%) for the tablets',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'oxibutinina',
      ref: {
        f: 'dailymed-oxibutinina',
        sec: '12 · Farmacología clínica',
        cita: 'Both enantiomers of oxybutynin are highly bound (>99%) to plasma proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras una dosis intravenosa',
      valor: '193',
      unidad: 'L',
      analito: 'oxibutinina',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-oxibutinina',
        sec: '12 · Farmacología clínica',
        cita: 'The volume of distribution is 193 L after intravenous administration of 5 mg oxybutynin chloride',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '2-3 (aprox.)',
      unidad: 'h',
      analito: 'oxibutinina',
      ref: { f: 'dailymed-oxibutinina', sec: '12 · Farmacología clínica', cita: 'effective half-life of approximately 2 to 3 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado inalterado por la orina',
      valor: '< 0,1',
      unidad: '% de la dosis',
      analito: 'oxibutinina',
      ref: {
        f: 'dailymed-oxibutinina',
        sec: '12 · Farmacología clínica',
        cita: 'less than 0.1% of the administered dose excreted unchanged in the urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-oxibutinina', '9578b6b8-5b9d-4263-9142-39b2c7216b85', 'OXYBUTYNIN CHLORIDE TABLET', 'OXYBUTYNIN CHLORIDE', '2', '2026-08-07', '2026-11-15'),
    rengPubchem(4634, 'oxybutynin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
