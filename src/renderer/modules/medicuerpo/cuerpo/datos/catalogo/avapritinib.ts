import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'avapritinib',
    nombre: 'Avapritinib',
    clase: 'Inhibidor de tirosina cinasas KIT y PDGFRA mutadas',
    sinonimos: [ 'avapritinib', 'Ayvakit' ],
    formula: 'C26H27FN10',
    masaMolar: 498.6,
    smiles: 'C[C@](C1=CC=C(C=C1)F)(C2=CN=C(N=C2)N3CCN(CC3)C4=NC=NN5C4=CC(=C5)C6=CN(N=C6)C)N',
    inchikey: 'DWYRIWUZIJHQKQ-SANMLTNESA-N',
    cid: 118023034,
    iupac: '(1S)-1-(4-fluorophenyl)-1-[2-[4-[6-(1-methylpyrazol-4-yl)pyrrolo[2,1-f][1,2,4]triazin-4-yl]piperazin-1-yl]pyrimidin-5-yl]ethanamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'avapritinib-oral',
      producto: 'Ayvakit · comprimido recubierto con película',
      titular: 'BLUEPRINT MEDICINES CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg, 200 mg, 300 mg, 25 mg o 50 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose 101',
        'microcrystalline cellulose',
        'copovidone k25-31',
        'croscarmellose sodium',
        'magnesium stearate',
        'talc',
        'polyethylene glycol 4000',
        'polyvinyl alcohol (130000 mw)',
        'titanium dioxide',
        'shellac',
        'butyl alcohol',
        'fd&c blue no. 1',
        'isopropyl alcohol',
        'ferrosoferric oxide',
        'propylene glycol',
        'ammonia'
      ],
      usos: {
        t: 'Tratamiento del GIST con mutación del exón 18 de PDGFRA y de la mastocitosis sistémica avanzada o indolente.',
        ref: {
          f: 'dailymed-avapritinib',
          sec: '1 · Indicaciones',
          cita: 'AYVAKIT is a kinase inhibitor indicated for: Gastrointestinal Stromal Tumor (GIST)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-avapritinib',
      advertencias: [
        {
          titulo: 'Hemorragia intracraneal',
          texto: 'Suspender de forma definitiva ante cualquier hemorragia intracraneal.',
          organos: [],
          ref: {
            f: 'dailymed-avapritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Intracranial Hemorrhage : Permanently discontinue for any occurrence of any grade',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos cognitivos',
          texto: 'Puede producir un amplio espectro de reacciones cognitivas.',
          organos: [],
          ref: {
            f: 'dailymed-avapritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'A broad spectrum of cognitive adverse reactions can occur in patients receiving AYVAKIT',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fotosensibilidad',
          texto: 'Puede causar reacciones de fotosensibilidad; limitar la exposición ultravioleta directa.',
          organos: [],
          ref: {
            f: 'dailymed-avapritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'May cause photosensitivity reactions. Advise patients to limit direct ultraviolet exposure',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el GIST, las más frecuentes (20 % o más): edema, náuseas, fatiga o astenia, alteración cognitiva, vómitos, disminución del apetito, diarrea, lagrimeo, dolor abdominal y estreñimiento, entre otras.',
          '34084-4',
          'GIST (≥20% incidence): edema, nausea, fatigue/asthenia, cognitive impairment, vomiting, decreased appetite, diarrhea, increased lacrimation'
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
    contiene: 'Comprimido recubierto con película: 100 mg, 200 mg, 300 mg, 25 mg o 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del GIST con mutación del exón 18 de PDGFRA y de la mastocitosis sistémica avanzada o indolente.',
    actua: 'Inhibidor de tirosina cinasas dirigido a KIT D816V, PDGFRA y PDGFRA D842 mutantes y a varios mutantes del exón 11 y 17 de KIT, cuya activación favorece la proliferación tumoral y de mastocitos.',
    recorrido: 'La mediana del tmax es de 2 a 4 horas; una comida grasa aumenta la Cmax un 59 % y el AUC un 29 %. Tras unos 310 mg marcados, el 70 % se recuperó en las heces (11 % sin cambios) y el 18 % en la orina.'
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
            f: 'dailymed-avapritinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 25 mg, round, white film-coated tablet',
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
      ocurre: 'La mediana del tmax es de 2 a 4 horas; una comida grasa aumenta la Cmax un 59 % y el AUC un 29 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 2 a 4 horas; una comida grasa aumenta la Cmax un 59 % y el AUC un 29 %.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak concentration (T max ) ranged from 2 to 4 hours following single doses of avapritinib',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax subió un 59 % y el AUC un 29 %.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max of avapritinib was increased by 59% and the AUC 0-INF was increased by 29%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 98,8 % a las proteínas; el volumen de distribución aparente es de 1 310 L en el GIST.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 98,8 % a las proteínas; el volumen de distribución aparente es de 1 310 L en el GIST.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro protein binding of avapritinib is 98.8% and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de 1 310 L con 300 mg en el GIST.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV %) apparent volume of distribution of avapritinib is 1310 L (51.5%) at 300 mg in patients with GIST',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con GIST'
        }
      ],
      accion: {
        diana: 'KIT y PDGFRA mutados',
        efecto: 'Inhibidor de tirosina cinasas dirigido a KIT D816V, PDGFRA y PDGFRA D842 mutantes y a varios mutantes del exón 11 y 17 de KIT, cuya activación favorece la proliferación tumoral y de mastocitos.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de tirosina cinasas dirigido a KIT D816V, PDGFRA y PDGFRA D842 mutantes y a varios mutantes del exón 11 y 17 de KIT, cuya activación favorece la proliferación tumoral y de mastocitos.',
            ref: {
              f: 'dailymed-avapritinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Avapritinib is a tyrosine kinase inhibitor that targets KIT D816V, PDGFRA and PDGFRA D842 mutants as well as multiple KIT exon 11, 11/17 and 17 mutants',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A4 y la CYP3A5 y, en menor medida, por la CYP2C9; el glucurónido M690 lo forma la UGT1A3.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A4 y la CYP3A5 y, en menor medida, por la CYP2C9; el glucurónido M690 lo forma la UGT1A3.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Avapritinib is primarily metabolized by CYP3A4, CYP3A5 and to a lesser extent by CYP2C9 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M499',
          actividad: 'desconocida',
          nota: 'Metabolito por desaminación oxidativa; probablemente no contribuye a la eficacia.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'M499 is not likely to contribute to efficacy at the recommended dose of avapritinib',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras unos 310 mg marcados, el 70 % se recuperó en las heces (11 % sin cambios) y el 18 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras unos 310 mg marcados, el 70 % se recuperó en las heces (11 % sin cambios) y el 18 % en la orina.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: '70% of the radioactive dose was recovered in feces (11% unchanged) and 18% in urine (0.23% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media fue de 32 a 57 horas en el GIST.',
          ref: {
            f: 'dailymed-avapritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma elimination half-life of avapritinib was 32 to 57 hours in patients with GIST',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con GIST'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '2-4',
      unidad: 'h',
      analito: 'avapritinib',
      ref: {
        f: 'dailymed-avapritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak concentration (T max ) ranged from 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '98,8',
      unidad: '%',
      analito: 'avapritinib',
      ref: { f: 'dailymed-avapritinib', sec: '12.3 · Farmacocinética', cita: 'In vitro protein binding of avapritinib is 98.8%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (GIST)',
      valor: '1310',
      unidad: 'L',
      analito: 'avapritinib',
      poblacion: 'pacientes con GIST',
      condiciones: '300 mg al día',
      ref: {
        f: 'dailymed-avapritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution of avapritinib is 1310 L (51.5%) at 300 mg in patients with GIST',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática (GIST)',
      valor: '32-57',
      unidad: 'h',
      analito: 'avapritinib',
      poblacion: 'pacientes con GIST',
      ref: {
        f: 'dailymed-avapritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma elimination half-life of avapritinib was 32 to 57 hours in patients with GIST',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente (GIST)',
      valor: '21,8',
      unidad: 'L/h',
      analito: 'avapritinib',
      poblacion: 'pacientes con GIST',
      condiciones: '300 mg al día',
      ref: {
        f: 'dailymed-avapritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent oral clearance of avapritinib is 21.8 L/h (54.9%) at 300 mg in patients with GIST',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-avapritinib',
        sec: '12.3 · Farmacocinética',
        cita: '70% of the radioactive dose was recovered in feces (11% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-avapritinib', '645c887c-8cd4-4623-8da9-ac223d71a8b9', 'AYVAKIT (AVAPRITINIB) TABLET, FILM COATED', 'Ayvakit', '16', '2026-10-26', '2026-11-19'),
    rengPubchem(118023034, 'avapritinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
