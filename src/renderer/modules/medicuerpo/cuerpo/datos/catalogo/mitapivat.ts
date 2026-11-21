import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mitapivat',
    nombre: 'Mitapivat',
    clase: 'Activador de la piruvato cinasa',
    sinonimos: [ 'mitapivat', 'Pyrukynd' ],
    formula: 'C24H26N4O3S',
    masaMolar: 450.6,
    smiles: 'C1CC1CN2CCN(CC2)C(=O)C3=CC=C(C=C3)NS(=O)(=O)C4=CC=CC5=C4N=CC=C5',
    inchikey: 'XAYGBKHKBBXDAK-UHFFFAOYSA-N',
    cid: 59634741,
    iupac: 'N-[4-[4-(cyclopropylmethyl)piperazine-1-carbonyl]phenyl]quinoline-8-sulfonamide',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'mitapivat-oral',
      producto: 'PYRUKYND · comprimido recubierto con película',
      titular: 'AGIOS PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 20 mg o 50 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'mannitol',
        'microcrystalline cellulose',
        'sodium stearyl fumarate',
        'fd&c blue no. 2',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Tratamiento de la anemia hemolítica en adultos con déficit de piruvato cinasa.',
        ref: {
          f: 'dailymed-mitapivat',
          sec: '1 · Indicaciones',
          cita: 'PYRUKYND is indicated for the treatment of hemolytic anemia in adults with pyruvate kinase (PK) deficiency',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mitapivat',
      advertencias: [
        {
          titulo: 'Hemólisis aguda',
          texto: 'Evitar interrumpirlo de golpe para reducir el riesgo de hemólisis aguda; es preferible bajar la dosis poco a poco.',
          organos: [],
          ref: {
            f: 'dailymed-mitapivat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Avoid abrupt interruption or abrupt discontinuation of PYRUKYND to minimize the risk of acute hemolysis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Lesión hepatocelular en otra enfermedad',
          texto: 'Hay que hacer pruebas hepáticas antes de empezar y cada mes los 6 primeros meses; suspender si se sospecha lesión hepática.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-mitapivat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue PYRUKYND if hepatic injury due to PYRUKYND is suspected',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más, con alteraciones de laboratorio): descenso de estrona en varones, aumento de urato, dolor de espalda, descenso de estradiol en varones y artralgia.',
          '34084-4',
          'most common adverse reactions including laboratory abnormalities (≥ 10%) in patients with PK deficiency were estrone decreased (males), increased urate, back pain, estradiol decreased (males), and arthralgia'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la hemólisis aguda al interrumpirlo de golpe y la lesión hepatocelular en otra enfermedad.',
          '34084-4',
          'Hepatocellular Injury in Another Condition [see Warnings and Precautions (5.2) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg, 20 mg o 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la anemia hemolítica en adultos con déficit de piruvato cinasa.',
    actua: 'Activa la piruvato cinasa uniéndose de forma alostérica a su tetrámero; en el déficit, la forma eritrocitaria mutada reduce el ATP, acorta la vida del glóbulo rojo y causa hemólisis crónica.',
    recorrido: 'En estado estacionario la mediana del tmax fue de 0,5 a 1,0 horas y la biodisponibilidad absoluta de una dosis única de alrededor del 73 %. Tras una dosis oral marcada se recuperó el 89,2 % de la radiactividad: el 49,6 % en la orina (2,6 % sin cambios) y el 39,6 % en las heces (menos del 1 % sin cambios).'
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
          ref: { f: 'dailymed-mitapivat', sec: '3 · Formas y concentraciones', cita: '5 mg tablets: round, blue, film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'En estado estacionario la mediana del tmax fue de 0,5 a 1,0 horas y la biodisponibilidad absoluta de una dosis única de alrededor del 73 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En estado estacionario la mediana del tmax fue de 0,5 a 1,0 horas y la biodisponibilidad absoluta de una dosis única de alrededor del 73 %.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'Median t max values at steady state were 0.5 to 1.0 hour post-dose across the dose range of 5 mg to 50 mg twice daily. The absolute bioavailability after a single dose was approximately 73%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no cambió el AUC, pero redujo la Cmax un 42 % y retrasó el tmax 2,3 horas.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'did not change the exposure (AUC inf ) of mitapivat, but reduced the rate of mitapivat absorption, with a 42% reduction in C max and a delay in t max of 2.3 hours',
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
      ocurre: 'Se une mucho (97,7 %) a las proteínas del plasma, con poca distribución a los glóbulos rojos; el volumen de distribución medio en estado estacionario es de 42,5 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho (97,7 %) a las proteínas del plasma, con poca distribución a los glóbulos rojos; el volumen de distribución medio en estado estacionario es de 42,5 L.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'Mitapivat is highly protein bound (97.7%) in plasma with low RBC distribution (RBC-to-plasma ratio of 0.37)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución medio en estado estacionario de 42,5 L.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution at steady state (Vss) was 42.5 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Piruvato cinasa eritrocitaria (PK-R)',
        efecto: 'Activa la piruvato cinasa uniéndose de forma alostérica a su tetrámero; en el déficit, la forma eritrocitaria mutada reduce el ATP, acorta la vida del glóbulo rojo y causa hemólisis crónica.',
        lugar: [],
        datos: [
          {
            t: 'Activa la piruvato cinasa uniéndose de forma alostérica a su tetrámero; en el déficit, la forma eritrocitaria mutada reduce el ATP, acorta la vida del glóbulo rojo y causa hemólisis crónica.',
            ref: {
              f: 'dailymed-mitapivat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Mitapivat is a pyruvate kinase activator that acts by allosterically binding to the pyruvate kinase tetramer and increasing pyruvate kinase (PK) activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A4; el mitapivat sin cambios es el componente circulante principal.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A4; el mitapivat sin cambios es el componente circulante principal.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies showed that mitapivat is primarily metabolized by CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada se recuperó el 89,2 % de la radiactividad: el 49,6 % en la orina (2,6 % sin cambios) y el 39,6 % en las heces (menos del 1 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada se recuperó el 89,2 % de la radiactividad: el 49,6 % en la orina (2,6 % sin cambios) y el 39,6 % en las heces (menos del 1 % sin cambios).',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'the total recovery of administered radioactive dose was 89.2%, with 49.6% in the urine (2.6% unchanged) and 39.6% in the feces (<1% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media fue de 3 a 5 horas.',
          ref: {
            f: 'dailymed-mitapivat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean effective half-life (t1/2) of mitapivat ranged from 3 to 5 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax en estado estacionario',
      valor: '0,5-1,0',
      unidad: 'h',
      analito: 'mitapivat',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-mitapivat',
        sec: '12.3 · Farmacocinética',
        cita: 'Median t max values at steady state were 0.5 to 1.0 hour post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '73 (aprox.)',
      unidad: '%',
      analito: 'mitapivat',
      ref: {
        f: 'dailymed-mitapivat',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability after a single dose was approximately 73%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97,7',
      unidad: '%',
      analito: 'mitapivat',
      ref: { f: 'dailymed-mitapivat', sec: '12.3 · Farmacocinética', cita: 'Mitapivat is highly protein bound (97.7%) in plasma', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '42,5',
      unidad: 'L',
      analito: 'mitapivat',
      ref: {
        f: 'dailymed-mitapivat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution at steady state (Vss) was 42.5 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media',
      valor: '3-5',
      unidad: 'h',
      analito: 'mitapivat',
      ref: {
        f: 'dailymed-mitapivat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean effective half-life (t1/2) of mitapivat ranged from 3 to 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '49,6',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-mitapivat', sec: '12.3 · Farmacocinética', cita: 'with 49.6% in the urine (2.6% unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mitapivat', '4ccee896-e313-4c6c-9674-b4746ada0a90', 'PYRUKYND (MITAPIVAT) TABLET, FILM COATED PYRUKYND (MITAPIVAT) KIT', 'PYRUKYND', '12', '2026-07-06', '2026-11-19'),
    rengPubchem(59634741, 'mitapivat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
