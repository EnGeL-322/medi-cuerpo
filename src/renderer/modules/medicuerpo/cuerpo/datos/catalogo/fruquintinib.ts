import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fruquintinib',
    nombre: 'Fruquintinib',
    clase: 'Inhibidor de los receptores del VEGF (VEGFR-1, -2 y -3)',
    sinonimos: [ 'fruquintinib', 'Fruzaqla' ],
    formula: 'C21H19N3O5',
    masaMolar: 393.4,
    smiles: 'CC1=C(C2=C(O1)C=C(C=C2)OC3=NC=NC4=CC(=C(C=C43)OC)OC)C(=O)NC',
    inchikey: 'BALLNEJQLSTPIO-UHFFFAOYSA-N',
    cid: 44480399,
    iupac: '6-(6,7-dimethoxyquinazolin-4-yl)oxy-N,2-dimethyl-1-benzofuran-3-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'fruquintinib-oral',
      producto: 'Fruzaqla · cápsula',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '1 mg o 5 mg por cápsula, según la etiqueta',
      excipientes: [ 'talc', 'microcrystalline cellulose', 'starch, corn', 'gelatin, unspecified', 'titanium dioxide', 'fd&c yellow no. 5', 'fd&c yellow no. 6' ],
      usos: {
        t: 'Tratamiento del cáncer colorrectal metastásico previamente tratado con quimioterapia y terapias anti-VEGF (y anti-EGFR si procede).',
        ref: {
          f: 'dailymed-fruquintinib',
          sec: '1 · Indicaciones',
          cita: 'FRUZAQLA is indicated for the treatment of adult patients with metastatic colorectal cancer (mCRC) who have been previously treated',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fruquintinib',
      advertencias: [
        {
          titulo: 'Hipertensión',
          texto: 'Controlar la presión antes de empezar y vigilarla durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypertension: Control blood pressure prior to treatment and monitor during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Acontecimientos hemorrágicos',
          texto: 'Vigilar de cerca a los pacientes con riesgo de sangrado.',
          organos: [],
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Closely monitor patients who are at risk for bleeding',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Vigilarla periódicamente y suspender de forma definitiva si aparece.',
          organos: [],
          ref: { f: 'dailymed-fruquintinib', sec: '5 · Advertencias y precauciones', cita: 'Periodically monitor for GI perforation', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): hipertensión, eritrodisestesia palmoplantar, proteinuria, disfonía, dolor abdominal, diarrea y astenia.',
          '34084-4',
          'Most common adverse reactions (incidence ≥20%) are hypertension, palmar-plantar erythrodysesthesia, proteinuria, dysphonia, abdominal pain, diarrhea, and asthenia'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 1 mg o 5 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer colorrectal metastásico previamente tratado con quimioterapia y terapias anti-VEGF (y anti-EGFR si procede).',
    actua: 'Inhibidor de cinasas de los receptores del VEGF 1, 2 y 3; in vitro inhibe la proliferación de células endoteliales y la formación de túbulos mediadas por VEGF.',
    recorrido: 'La mediana del tiempo hasta la Cmax es de unas 2 horas; una comida grasa no produce diferencias clínicamente significativas. Tras 5 mg marcados, alrededor del 60 % se recuperó en la orina (0,5 % sin cambios) y el 30 % en las heces (5 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '11 · Descripción',
            cita: 'The 1 mg capsule shell contains FD&C Yellow No. 5 (tartrazine)',
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
      ocurre: 'La mediana del tiempo hasta la Cmax es de unas 2 horas; una comida grasa no produce diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la Cmax es de unas 2 horas; una comida grasa no produce diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The fruquintinib median (min, max) time to C max is approximately 2 hours (0, 26 hours)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 95 % a las proteínas plasmáticas; el volumen de distribución aparente es de unos 46 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 95 % a las proteínas plasmáticas; el volumen de distribución aparente es de unos 46 L.',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of fruquintinib is approximately 95%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio de unos 46 L.',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (SD) apparent volume of distribution of fruquintinib is approximately 46 (13) L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'VEGFR-1, -2 y -3',
        efecto: 'Inhibidor de cinasas de los receptores del VEGF 1, 2 y 3; in vitro inhibe la proliferación de células endoteliales y la formación de túbulos mediadas por VEGF.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas de los receptores del VEGF 1, 2 y 3; in vitro inhibe la proliferación de células endoteliales y la formación de túbulos mediadas por VEGF.',
            ref: {
              f: 'dailymed-fruquintinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Fruquintinib is a small molecule kinase inhibitor of vascular endothelial growth factor receptors (VEGFR)-1, -2, and -3',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo CYP (CYP3A y, en menor medida, CYP2C8, CYP2C9 y CYP2C19) y no CYP (sulfatación y glucuronidación).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo CYP (CYP3A y, en menor medida, CYP2C8, CYP2C9 y CYP2C19) y no CYP (sulfatación y glucuronidación).',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Fruquintinib is primarily eliminated by CYP450 and non-CYP450 (i.e., sulfation and glucuronidation) metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 5 mg marcados, alrededor del 60 % se recuperó en la orina (0,5 % sin cambios) y el 30 % en las heces (5 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 5 mg marcados, alrededor del 60 % se recuperó en la orina (0,5 % sin cambios) y el 30 % en las heces (5 % sin cambios).',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 60% of the dose was recovered in urine (0.5% unchanged) and 30% of the dose was recovered in feces (5% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media es de unas 42 horas.',
          ref: {
            f: 'dailymed-fruquintinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The fruquintinib mean (SD) elimination half-life is approximately 42 (11) hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la Cmax',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'fruquintinib',
      ref: {
        f: 'dailymed-fruquintinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The fruquintinib median (min, max) time to C max is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'fruquintinib',
      ref: {
        f: 'dailymed-fruquintinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of fruquintinib is approximately 95%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '46 (aprox.)',
      unidad: 'L',
      analito: 'fruquintinib',
      ref: {
        f: 'dailymed-fruquintinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (SD) apparent volume of distribution of fruquintinib is approximately 46 (13) L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '42 (aprox.)',
      unidad: 'h',
      analito: 'fruquintinib',
      ref: {
        f: 'dailymed-fruquintinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The fruquintinib mean (SD) elimination half-life is approximately 42 (11) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '60 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada de 5 mg',
      ref: {
        f: 'dailymed-fruquintinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 60% of the dose was recovered in urine (0.5% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fruquintinib', '186d786e-dc8a-45f2-b5e1-01ac0201879f', 'FRUZAQLA (FRUQUINTINIB) CAPSULE', 'Fruzaqla', '8', '2026-08-12', '2026-11-19'),
    rengPubchem(44480399, 'fruquintinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
