import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ibrutinib',
    nombre: 'Ibrutinib',
    clase: 'Inhibidor covalente de la tirosina cinasa de Bruton (BTK)',
    sinonimos: [ 'ibrutinib', 'Imbruvica' ],
    formula: 'C25H24N6O2',
    masaMolar: 440.5,
    smiles: 'C=CC(=O)N1CCC[C@H](C1)N2C3=NC=NC(=C3C(=N2)C4=CC=C(C=C4)OC5=CC=CC=C5)N',
    inchikey: 'XYFPWWZEPKGCCK-GOSISDBHSA-N',
    cid: 24821094,
    iupac: '1-[(3R)-3-[4-amino-3-(4-phenoxyphenyl)pyrazolo[3,4-d]pyrimidin-1-yl]piperidin-1-yl]prop-2-en-1-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'ibrutinib-oral',
      producto: 'Imbruvica · cápsula',
      titular: 'PHARMACYCLICS LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '70 mg o 140 mg por cápsula, según la etiqueta',
      excipientes: [ 'croscarmellose sodium', 'gelatin', 'titanium dioxide', 'ferric oxide yellow' ],
      usos: {
        t: 'Tratamiento de la leucemia linfocítica crónica o linfoma linfocítico de células pequeñas, la macroglobulinemia de Waldenström y la enfermedad crónica de injerto contra huésped, según la etiqueta.',
        ref: {
          f: 'dailymed-ibrutinib',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with chronic lymphocytic leukemia (CLL)/Small lymphocytic lymphoma (SLL)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ibrutinib',
      advertencias: [
        {
          titulo: 'Hemorragias',
          texto: 'Ha habido hemorragias mortales; vigilar los signos de sangrado.',
          organos: [],
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Fatal bleeding events have occurred in patients who received IMBRUVICA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Infecciones',
          texto: 'Ha habido infecciones bacterianas, víricas y fúngicas, algunas mortales.',
          organos: [],
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Fatal and non-fatal infections (including bacterial, viral, or fungal) have occurred with IMBRUVICA therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Arritmias, insuficiencia cardíaca y muerte súbita',
          texto: 'Vigilar los síntomas de arritmia e insuficiencia cardíaca y tratarlos.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for symptoms of arrhythmias and cardiac failure and manage',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Citopenias',
          texto: 'Hacer un hemograma cada mes.',
          organos: [ 'sangre' ],
          ref: { f: 'dailymed-ibrutinib', sec: '5 · Advertencias y precauciones', cita: 'Check complete blood counts monthly', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'En las neoplasias de linfocitos B, las más frecuentes (30 % o más): trombocitopenia, diarrea, fatiga, dolor musculoesquelético, neutropenia, exantema, anemia, hematomas y náuseas.',
          '34084-4',
          'The most common (≥30%) adverse reactions in patients with B-cell malignancies are thrombocytopenia, diarrhea, fatigue, musculoskeletal pain, neutropenia, rash, anemia, bruising, and nausea'
        ],
        [
          'En la enfermedad crónica de injerto contra huésped, las más frecuentes (20 % o más): fatiga, anemia, hematomas, diarrea, trombocitopenia, dolor musculoesquelético y fiebre, entre otras.',
          '34084-4',
          'The most common (≥20%) adverse reactions in adult or pediatric patients with cGVHD are fatigue, anemia, bruising, diarrhea, thrombocytopenia, musculoskeletal pain, pyrexia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 70 mg o 140 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la leucemia linfocítica crónica o linfoma linfocítico de células pequeñas, la macroglobulinemia de Waldenström y la enfermedad crónica de injerto contra huésped, según la etiqueta.',
    actua: 'Forma un enlace covalente con una cisteína del sitio activo de la BTK y la inhibe; la BTK transmite las señales del receptor de los linfocitos B.',
    recorrido: 'La biodisponibilidad absoluta en ayunas es solo del 2,9 % por un primer paso intenso; el pico aparece en 1 a 2 horas y la comida grasa duplica el AUC. Tras una dosis marcada, el 90 % de la radiactividad se excretó en 168 horas: el 80 % en las heces y menos del 10 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Each 140 mg capsule is a white, opaque capsule marked with',
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
      ocurre: 'La biodisponibilidad absoluta en ayunas es solo del 2,9 % por un primer paso intenso; el pico aparece en 1 a 2 horas y la comida grasa duplica el AUC.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta en ayunas es solo del 2,9 % por un primer paso intenso; el pico aparece en 1 a 2 horas y la comida grasa duplica el AUC.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Absolute bioavailability of ibrutinib in fasted condition was 2.9% (90% CI: 2.1, 3.9) in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se absorbe con una mediana del tiempo hasta el pico de 1 a 2 horas.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ibrutinib is absorbed after oral administration with a median T max of 1 hour to 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax aumentó de 2 a 4 veces y el AUC unas 2 veces.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'increased ibrutinib C max by 2- to 4-fold and AUC by approximately 2-fold',
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
      ocurre: 'In vitro se une de forma reversible en un 97,3 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario ronda los 10 000 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une de forma reversible en un 97,3 % a las proteínas plasmáticas; el volumen de distribución aparente en estado estacionario ronda los 10 000 L.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Reversible binding of ibrutinib to human plasma protein in vitro was 97.3% with no concentration dependence',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de unos 10 000 L.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the apparent volume of distribution at steady state (V d,ss /F) was approximately 10,000 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa de Bruton (BTK)',
        efecto: 'Forma un enlace covalente con una cisteína del sitio activo de la BTK y la inhibe; la BTK transmite las señales del receptor de los linfocitos B.',
        lugar: [],
        datos: [
          {
            t: 'Forma un enlace covalente con una cisteína del sitio activo de la BTK y la inhibe; la BTK transmite las señales del receptor de los linfocitos B.',
            ref: {
              f: 'dailymed-ibrutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ibrutinib forms a covalent bond with a cysteine residue in the BTK active site, leading to inhibition of BTK enzymatic activity',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A y, en menor medida, por la CYP2D6; el metabolismo es su principal vía de eliminación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A y, en menor medida, por la CYP2D6; el metabolismo es su principal vía de eliminación.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'It is metabolized to several metabolites primarily by cytochrome P450 (CYP) 3A and to a minor extent by CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'PCI-45227',
          actividad: 'activo',
          nota: 'Metabolito dihidrodiol con una actividad sobre la BTK unas 15 veces menor.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The active metabolite, PCI-45227, is a dihydrodiol metabolite with inhibitory activity towards BTK approximately 15 times lower than that of ibrutinib',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 90 % de la radiactividad se excretó en 168 horas: el 80 % en las heces y menos del 10 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 90 % de la radiactividad se excretó en 168 horas: el 80 % en las heces y menos del 10 % en la orina.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: '90% of radioactivity was excreted within 168 hours, with 80% excreted in the feces and less than 10% eliminated in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 4 a 6 horas.',
          ref: { f: 'dailymed-ibrutinib', sec: '12.3 · Farmacocinética', cita: 'The half-life of ibrutinib is 4 hours to 6 hours', codigo: '43682-4' }
        },
        {
          t: 'Por el intenso primer paso, el aclaramiento oral aparente es de 2000 L/h en ayunas y de 1000 L/h con comida.',
          ref: {
            f: 'dailymed-ibrutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In line with the high first-pass effect, the apparent oral clearance is 2000 L/h in fasted conditions and 1000 L/h in fed conditions',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta en ayunas',
      valor: '2,9',
      unidad: '%',
      analito: 'ibrutinib',
      poblacion: 'sujetos sanos',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-ibrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Absolute bioavailability of ibrutinib in fasted condition was 2.9%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '1-2',
      unidad: 'h',
      analito: 'ibrutinib',
      ref: { f: 'dailymed-ibrutinib', sec: '12.3 · Farmacocinética', cita: 'with a median T max of 1 hour to 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '97,3',
      unidad: '%',
      analito: 'ibrutinib',
      ref: {
        f: 'dailymed-ibrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Reversible binding of ibrutinib to human plasma protein in vitro was 97.3%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '10000 (aprox.)',
      unidad: 'L',
      analito: 'ibrutinib',
      ref: {
        f: 'dailymed-ibrutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent volume of distribution at steady state (V d,ss /F) was approximately 10,000 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '4-6',
      unidad: 'h',
      analito: 'ibrutinib',
      ref: { f: 'dailymed-ibrutinib', sec: '12.3 · Farmacocinética', cita: 'The half-life of ibrutinib is 4 hours to 6 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-ibrutinib', sec: '12.3 · Farmacocinética', cita: 'with 80% excreted in the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ibrutinib', '0dfd0279-ff17-4ea9-89be-9803c71bab44', 'IMBRUVICA (IBRUTINIB) CAPSULE IMBRUVICA (IBRUTINIB) TABLET, FILM COATED IMBRUVICA (IBRUTINIB) SUSPENSION', 'Imbruvica', '65', '2026-01-08', '2026-11-19'),
    rengPubchem(24821094, 'ibrutinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
