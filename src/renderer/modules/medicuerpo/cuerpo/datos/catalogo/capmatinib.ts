import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'capmatinib',
    nombre: 'Capmatinib',
    clase: 'Inhibidor de la cinasa MET',
    sinonimos: [ 'capmatinib hydrochloride', 'Tabrecta' ],
    formula: 'C23H17FN6O',
    masaMolar: 412.4,
    smiles: 'CNC(=O)C1=C(C=C(C=C1)C2=NN3C(=CN=C3N=C2)CC4=CC5=C(C=C4)N=CC=C5)F',
    inchikey: 'LIOLIMKSCNQPLV-UHFFFAOYSA-N',
    cid: 25145656,
    iupac: '2-fluoro-N-methyl-4-[7-(quinolin-6-ylmethyl)imidazo[1,2-b][1,2,4]triazin-2-yl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'capmatinib-oral',
      producto: 'TABRECTA · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg o 200 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Diclorhidrato de capmatinib monohidrato',
        ref: {
          f: 'dailymed-capmatinib',
          sec: '11 · Descripción',
          cita: 'The molecular formula for capmatinib dihydrochloride monohydrate is',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'magnesium stearate',
        'mannitol',
        'cellulose, microcrystalline',
        'povidone',
        'sodium lauryl sulfate',
        'ferric oxide red',
        'ferric oxide yellow',
        'ferrosoferric oxide',
        'hypromelloses',
        'polyethylene glycol 400',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico con una mutación que causa la omisión del exón 14 de MET.',
        ref: {
          f: 'dailymed-capmatinib',
          sec: '1 · Indicaciones',
          cita: 'TABRECTA is indicated for the treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors have a mutation that leads to mesenchymal-epithelial transition (MET) exon 14 skipping',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-capmatinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Vigilar síntomas pulmonares nuevos o que empeoran y suspender si se confirma.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-capmatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for new or worsening pulmonary symptoms indicative of ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar las pruebas hepáticas.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-capmatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hepatotoxicity : Monitor liver function tests',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad pancreática',
          texto: 'Vigilar la amilasa y la lipasa.',
          organos: [],
          ref: {
            f: 'dailymed-capmatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pancreatic Toxicity : Monitor amylase and lipase levels',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fotosensibilidad',
          texto: 'Puede causar reacciones de fotosensibilidad; limitar la exposición directa a la luz ultravioleta.',
          organos: [],
          ref: {
            f: 'dailymed-capmatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'May cause photosensitivity reactions. Advise patients to limit direct ultraviolet exposure',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): edema, náuseas, dolor musculoesquelético, fatiga, vómitos, disnea, tos y disminución del apetito.',
          '34084-4',
          'most common adverse reactions (≥ 20%) are edema, nausea, musculoskeletal pain, fatigue, vomiting, dyspnea, cough, and decreased appetite'
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
    contiene: 'Comprimido recubierto con película: 150 mg o 200 mg por comprimido, según la etiqueta; el activo va como diclorhidrato de capmatinib monohidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico con una mutación que causa la omisión del exón 14 de MET.',
    actua: 'Inhibidor de cinasas dirigido a MET, incluida la variante mutada por omisión del exón 14, que pierde un dominio regulador y aumenta la señalización.',
    recorrido: 'El pico se alcanza en 1 a 2 horas y se estima que se absorbe más del 70 %; una comida grasa aumenta el AUC un 46 % sin cambiar la Cmax. Tras una dosis marcada, el 78 % de la radiactividad se recuperó en las heces (42 % sin cambios) y el 22 % en la orina.'
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
            f: 'dailymed-capmatinib',
            sec: '3 · Formas y concentraciones',
            cita: '150 mg: pale orange brown, ovaloid, curved film-coated with beveled edges',
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
      ocurre: 'El pico se alcanza en 1 a 2 horas y se estima que se absorbe más del 70 %; una comida grasa aumenta el AUC un 46 % sin cambiar la Cmax.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico se alcanza en 1 a 2 horas y se estima que se absorbe más del 70 %; una comida grasa aumenta el AUC un 46 % sin cambiar la Cmax.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absorption of capmatinib after oral administration is estimated to be greater than 70%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico plasmático se alcanzó en 1 a 2 horas en pacientes con cáncer.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'capmatinib peak plasma concentrations (C max ) were reached in approximately 1 to 2 hours (T max )',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        },
        {
          t: 'Una comida rica en grasas aumentó el AUC un 46 % sin cambio en la Cmax.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'increased capmatinib AUC 0-INF by 46% with no change in C max compared to under fasted conditions',
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
      ocurre: 'Se une en un 96 % a las proteínas plasmáticas; el volumen de distribución aparente medio en estado estacionario es de 164 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 96 % a las proteínas plasmáticas; el volumen de distribución aparente medio en estado estacionario es de 164 L.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Capmatinib plasma protein binding is 96%, independent of capmatinib concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio en estado estacionario de 164 L.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent mean volume of distribution at steady-state is 164 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa MET',
        efecto: 'Inhibidor de cinasas dirigido a MET, incluida la variante mutada por omisión del exón 14, que pierde un dominio regulador y aumenta la señalización.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas dirigido a MET, incluida la variante mutada por omisión del exón 14, que pierde un dominio regulador y aumenta la señalización.',
            ref: {
              f: 'dailymed-capmatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Capmatinib is a kinase inhibitor that targets MET, including the mutant variant produced by exon 14 skipping',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y la aldehído oxidasa.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y la aldehído oxidasa.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Capmatinib is primarily metabolized by CYP3A4 and aldehyde oxidase',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 78 % de la radiactividad se recuperó en las heces (42 % sin cambios) y el 22 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 78 % de la radiactividad se recuperó en las heces (42 % sin cambios) y el 22 % en la orina.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: '78% of the total radioactivity was recovered in feces with 42% as unchanged and 22% was recovered in urine with negligible as unchanged',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación efectiva es de 6,5 horas.',
          ref: {
            f: 'dailymed-capmatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The effective elimination half-life of capmatinib is 6.5 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida estimada',
      valor: '> 70',
      unidad: '%',
      analito: 'capmatinib',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absorption of capmatinib after oral administration is estimated to be greater than 70%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'capmatinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'capmatinib peak plasma concentrations (C max ) were reached in approximately 1 to 2 hours (T max )',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '96',
      unidad: '%',
      analito: 'capmatinib',
      ref: { f: 'dailymed-capmatinib', sec: '12.3 · Farmacocinética', cita: 'Capmatinib plasma protein binding is 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '164',
      unidad: 'L',
      analito: 'capmatinib',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent mean volume of distribution at steady-state is 164 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación efectiva',
      valor: '6,5',
      unidad: 'h',
      analito: 'capmatinib',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective elimination half-life of capmatinib is 6.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario',
      valor: '24',
      unidad: 'L/h',
      analito: 'capmatinib',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) steady-state apparent clearance of capmatinib is 24 L/hr (82%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '78',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-capmatinib',
        sec: '12.3 · Farmacocinética',
        cita: '78% of the total radioactivity was recovered in feces with 42% as unchanged',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-capmatinib', '455892c3-d144-4ba8-9ab4-79cabff9876d', 'TABRECTA (CAPMATINIB) TABLET, FILM COATED', 'TABRECTA', '18', '2026-10-28', '2026-11-19'),
    rengPubchem(25145656, 'capmatinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
