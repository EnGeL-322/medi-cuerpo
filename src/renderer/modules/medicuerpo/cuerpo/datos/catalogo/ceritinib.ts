import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ceritinib',
    nombre: 'Ceritinib',
    clase: 'Inhibidor de la tirosina cinasa ALK',
    sinonimos: [ 'ceritinib', 'Zykadia' ],
    formula: 'C28H36ClN5O3S',
    masaMolar: 558.1,
    smiles: 'CC1=CC(=C(C=C1C2CCNCC2)OC(C)C)NC3=NC=C(C(=N3)NC4=CC=CC=C4S(=O)(=O)C(C)C)Cl',
    inchikey: 'VERWOWGGCGHDQE-UHFFFAOYSA-N',
    cid: 57379345,
    iupac: '5-chloro-2-N-(5-methyl-4-piperidin-4-yl-2-propan-2-yloxyphenyl)-4-N-(2-propan-2-ylsulfonylphenyl)pyrimidine-2,4-diamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ceritinib-oral',
      producto: 'ZYKADIA · comprimido recubierto con película',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'hydroxypropyl cellulose',
        'povidone k30',
        'croscarmellose sodium',
        'magnesium stearate',
        'silicon dioxide',
        'talc',
        'titanium dioxide',
        'hypromellose, unspecified',
        'polyethylene glycol, unspecified',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico ALK positivo.',
        ref: {
          f: 'dailymed-ceritinib',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors are anaplastic lymphoma kinase (ALK)-positive as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ceritinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas al menos una vez al mes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ceritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver laboratory tests at least monthly',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperglucemia',
          texto: 'Vigilar la glucosa en ayunas antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-ceritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor fasting glucose prior to treatment and periodically thereafter',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pancreatitis',
          texto: 'Vigilar la lipasa y la amilasa antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-ceritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor lipase and amylase prior to treatment and periodically thereafter as clinically indicated',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con 450 mg con comida, las más frecuentes (25 % o más): diarrea, náuseas, dolor abdominal, vómitos y fatiga.',
          '34084-4',
          'The most common adverse reactions (≥ 25% incidence) in the 450 mg with food arm were diarrhea, nausea, abdominal pain, vomiting, and fatigue'
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
    contiene: 'Comprimido recubierto con película: 150 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico ALK positivo.',
    actua: 'Inhibe sobre todo ALK, y también IGF-1R, el receptor de la insulina y ROS1; bloquea la señal de ALK y la proliferación de las células que dependen de ella.',
    recorrido: 'El pico se alcanza entre 4 y 6 horas tras una dosis; la comida aumenta la exposición. Tras 750 mg marcados en ayunas, el 92 % de la dosis se recuperó en las heces (68 % sin cambios) y el 1,3 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '3 · Formas y concentraciones',
            cita: '150 mg film-coated tablet, light blue, round, biconvex with beveled edges',
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
      ocurre: 'El pico se alcanza entre 4 y 6 horas tras una dosis; la comida aumenta la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico se alcanza entre 4 y 6 horas tras una dosis; la comida aumenta la exposición.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma levels (C max ) of ceritinib were achieved around 4 to 6 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comprimidos de 750 mg, una comida rica en grasas aumentó el AUC un 64 % y la Cmax un 58 %.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'a high-fat meal (containing approximately 1000 calories and 58 grams of fat) increased ceritinib AUC by 64% and C max by 58%',
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
      ocurre: 'Se une en un 97 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución aparente es de 4230 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución aparente es de 4230 L.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ceritinib is 97% bound to human plasma proteins, independent of drug concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 4230 L tras 750 mg en ayunas.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean apparent volume of distribution (V d /F) is 4230 L following a single 750 mg ZYKADIA dose under fasted conditions in patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes',
          condiciones: 'en ayunas'
        }
      ],
      accion: {
        diana: 'ALK',
        efecto: 'Inhibe sobre todo ALK, y también IGF-1R, el receptor de la insulina y ROS1; bloquea la señal de ALK y la proliferación de las células que dependen de ella.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe sobre todo ALK, y también IGF-1R, el receptor de la insulina y ROS1; bloquea la señal de ALK y la proliferación de las células que dependen de ella.',
            ref: {
              f: 'dailymed-ceritinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Targets of ceritinib inhibition identified in either biochemical or cellular assays at clinically relevant concentrations include ALK, insulin-like growth factor 1 receptor (IGF-1R), insulin receptor (InsR), and ROS1',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Estudios in vitro mostraron que la CYP3A es la enzima principal de su aclaramiento metabólico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Estudios in vitro mostraron que la CYP3A es la enzima principal de su aclaramiento metabólico.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies demonstrated that CYP3A was the major enzyme involved in the metabolic clearance of ceritinib',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 750 mg marcados en ayunas, el 92 % de la dosis se recuperó en las heces (68 % sin cambios) y el 1,3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 750 mg marcados en ayunas, el 92 % de la dosis se recuperó en las heces (68 % sin cambios) y el 1,3 % en la orina.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: '92% of the administered dose was recovered in the feces (with 68% as unchanged parent compound) while 1.3% of the administered dose was recovered in the urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática terminal aparente es de 41 horas.',
          ref: {
            f: 'dailymed-ceritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the geometric mean apparent plasma terminal half-life (t 1/2 ) of ceritinib was 41 hours in patients',
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
      valor: '4-6',
      unidad: 'h',
      analito: 'ceritinib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-ceritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma levels (C max ) of ceritinib were achieved around 4 to 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '97',
      unidad: '%',
      analito: 'ceritinib',
      ref: { f: 'dailymed-ceritinib', sec: '12.3 · Farmacocinética', cita: 'Ceritinib is 97% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '4230',
      unidad: 'L',
      analito: 'ceritinib',
      poblacion: 'pacientes',
      condiciones: '750 mg en ayunas',
      ref: {
        f: 'dailymed-ceritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean apparent volume of distribution (V d /F) is 4230 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática terminal aparente',
      valor: '41',
      unidad: 'h',
      analito: 'ceritinib',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-ceritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the geometric mean apparent plasma terminal half-life (t 1/2 ) of ceritinib was 41 hours in patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '92',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 750 mg en ayunas',
      ref: { f: 'dailymed-ceritinib', sec: '12.3 · Farmacocinética', cita: '92% of the administered dose was recovered in the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ceritinib', 'fff5d805-4ffd-4e8e-8e63-6f129697563e', 'ZYKADIA (CERITINIB) TABLET, FILM COATED', 'ZYKADIA', '22', '2026-10-30', '2026-11-19'),
    rengPubchem(57379345, 'ceritinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
