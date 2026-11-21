import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'neratinib',
    nombre: 'Neratinib',
    clase: 'Inhibidor irreversible de cinasas (EGFR, HER2, HER4)',
    sinonimos: [ 'neratinib maleate', 'Nerlynx' ],
    formula: 'C30H29ClN6O3',
    masaMolar: 557,
    smiles: 'CCOC1=C(C=C2C(=C1)N=CC(=C2NC3=CC(=C(C=C3)OCC4=CC=CC=N4)Cl)C#N)NC(=O)/C=C/CN(C)C',
    inchikey: 'JWNPDZNEKVCWMY-VQHVLOKHSA-N',
    cid: 9915743,
    iupac: '(E)-N-[4-[3-chloro-4-(pyridin-2-ylmethoxy)anilino]-3-cyano-7-ethoxyquinolin-6-yl]-4-(dimethylamino)but-2-enamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'neratinib-oral',
      producto: 'Nerlynx · comprimido',
      titular: 'PUMA BIOTECHNOLOGY, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Maleato de neratinib',
        ref: {
          f: 'dailymed-neratinib',
          sec: '3 · Formas y concentraciones',
          cita: '40 mg neratinib (equivalent to 48.31 mg of neratinib maleate)',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'silicon dioxide',
        'mannitol',
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'povidone, unspecified',
        'magnesium stearate',
        'water',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento adyuvante extendido del cáncer de mama precoz HER2-positivo tras trastuzumab, y del avanzado o metastásico HER2-positivo junto con capecitabina.',
        ref: {
          f: 'dailymed-neratinib',
          sec: '1 · Indicaciones',
          cita: 'As a single agent, for the extended adjuvant treatment of adult patients with early-stage HER2-positive breast cancer, to follow adjuvant trastuzumab-based therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-neratinib',
      advertencias: [
        {
          titulo: 'Diarrea',
          texto: 'Prevenirla con escalada de dosis o loperamida; interrumpir si es grave o persistente.',
          organos: [],
          ref: {
            f: 'dailymed-neratinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Manage diarrhea through either NERLYNX dose escalation or loperamide prophylaxis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar las pruebas hepáticas cada mes los 3 primeros meses y después cada 3 meses.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-neratinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver function tests monthly for the first 3 months of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; usar anticoncepción eficaz.',
          organos: [],
          ref: { f: 'dailymed-neratinib', sec: '5 · Advertencias y precauciones', cita: 'NERLYNX can cause fetal harm', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en monoterapia (5 % o más): diarrea, náuseas, dolor abdominal, fatiga, vómitos, exantema, estomatitis, disminución del apetito y espasmos musculares, entre otras.',
          '34084-4',
          'NERLYNX as a single agent: diarrhea, nausea, abdominal pain, fatigue, vomiting, rash, stomatitis, decreased appetite, muscle spasms'
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
    contiene: 'Comprimido: 40 mg por comprimido, según la etiqueta; el activo va como maleato de neratinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento adyuvante extendido del cáncer de mama precoz HER2-positivo tras trastuzumab, y del avanzado o metastásico HER2-positivo junto con capecitabina.',
    actua: 'Inhibidor intracelular de cinasas que se une de forma irreversible a EGFR, HER2 y HER4 y reduce su autofosforilación y las vías MAPK y AKT.',
    recorrido: 'Los picos de neratinib y de sus metabolitos activos aparecen entre 2 y 8 horas tras la toma; una comida grasa aumenta la Cmax un 70 % y el AUC un 120 %. Tras 200 mg marcados, la excreción fecal supuso alrededor del 97 % y la urinaria el 1,1 % de la dosis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '3 · Formas y concentraciones',
            cita: "Film-coated, red, oval shaped and debossed with 'W104' on one side",
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
      ocurre: 'Los picos de neratinib y de sus metabolitos activos aparecen entre 2 y 8 horas tras la toma; una comida grasa aumenta la Cmax un 70 % y el AUC un 120 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Los picos de neratinib y de sus metabolitos activos aparecen entre 2 y 8 horas tras la toma; una comida grasa aumenta la Cmax un 70 % y el AUC un 120 %.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak concentrations of neratinib and major active metabolites M3, M6 and M7 are reached in the range of 2 to 8 hours after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó la Cmax un 70 % y el AUC un 120 % en sujetos sanos.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'increased neratinib C max and AUC inf by 70% (90% CI: 1.1–2.7) and 120% (90% CI: 1.4–3.5), respectively, in healthy subjects compared to fasting conditions',
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
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 99 % a las proteínas, sobre todo a la albúmina y a la alfa-1-glucoproteína ácida; el volumen de distribución aparente es de 6 433 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas, sobre todo a la albúmina y a la alfa-1-glucoproteína ácida; el volumen de distribución aparente es de 6 433 L.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro protein binding of neratinib was greater than 99%, predominantly to serum albumin and alpha-1 acid glycoprotein',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio en estado estacionario de 6 433 L en pacientes.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (%CV) apparent volume of distribution at steady state (V ss /F) was 6433 (19%) L in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ],
      accion: {
        diana: 'EGFR, HER2 y HER4',
        efecto: 'Inhibidor intracelular de cinasas que se une de forma irreversible a EGFR, HER2 y HER4 y reduce su autofosforilación y las vías MAPK y AKT.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor intracelular de cinasas que se une de forma irreversible a EGFR, HER2 y HER4 y reduce su autofosforilación y las vías MAPK y AKT.',
            ref: {
              f: 'dailymed-neratinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Neratinib is an intracellular kinase inhibitor that irreversibly binds to epidermal growth factor receptor (EGFR), HER2, and HER4',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo en el hígado por la CYP3A4 y, en menor medida, por la FMO; sus metabolitos M3, M6, M7 y M11 son activos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo en el hígado por la CYP3A4 y, en menor medida, por la FMO; sus metabolitos M3, M6, M7 y M11 son activos.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Neratinib is metabolized primarily in the liver by CYP3A4 and to a lesser extent by flavin-containing monooxygenase (FMO)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M3, M6, M7 y M11',
          actividad: 'activo',
          nota: 'Metabolitos activos; su exposición es del 15 %, 33 %, 22 % y 4 % de la del neratinib.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12 · Farmacología clínica',
            cita: 'Neratinib human metabolites M3, M6, M7 and M11 inhibited the activity of EGFR, HER2, and HER4 in vitro',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 200 mg marcados, la excreción fecal supuso alrededor del 97 % y la urinaria el 1,1 % de la dosis.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 200 mg marcados, la excreción fecal supuso alrededor del 97 % y la urinaria el 1,1 % de la dosis.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'fecal excretion accounted for approximately 97% and urinary excretion accounted for 1.1% of the total dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media osciló entre 7 y 17 horas tras una dosis única en pacientes.',
          ref: {
            f: 'dailymed-neratinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-life of neratinib ranged from 7 to 17 hours following a single oral dose in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-8',
      unidad: 'h',
      analito: 'neratinib',
      ref: {
        f: 'dailymed-neratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'reached in the range of 2 to 8 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '> 99',
      unidad: '%',
      analito: 'neratinib',
      ref: { f: 'dailymed-neratinib', sec: '12.3 · Farmacocinética', cita: 'In vitro protein binding of neratinib was greater than 99%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '6433',
      unidad: 'L',
      analito: 'neratinib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-neratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) apparent volume of distribution at steady state (V ss /F) was 6433 (19%) L in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '14,6',
      unidad: 'h',
      analito: 'neratinib',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-neratinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (%CV) plasma half-life of neratinib, M3, M6, and M7 was 14.6 (38%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '97 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada de 200 mg',
      ref: { f: 'dailymed-neratinib', sec: '12.3 · Farmacocinética', cita: 'fecal excretion accounted for approximately 97%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-neratinib', 'd1e41dcf-e82a-47c2-a0ad-6c6eef621834', 'NERLYNX (NERATINIB) TABLET', 'Nerlynx', '19', '2026-07-06', '2026-11-19'),
    rengPubchem(9915743, 'neratinib maleate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
