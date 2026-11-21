import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ruxolitinib',
    nombre: 'Ruxolitinib',
    clase: 'Inhibidor de las cinasas Janus JAK1 y JAK2',
    sinonimos: [ 'ruxolitinib', 'Jakafi' ],
    formula: 'C17H18N6',
    masaMolar: 306.4,
    smiles: 'C1CCC(C1)[C@@H](CC#N)N2C=C(C=N2)C3=C4C=CNC4=NC=N3',
    inchikey: 'HFNKQEVNSGCOJV-OAHLLOKOSA-N',
    cid: 25126798,
    iupac: '(3R)-3-cyclopentyl-3-[4-(7H-pyrrolo[2,3-d]pyrimidin-4-yl)pyrazol-1-yl]propanenitrile',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'ruxolitinib-oral',
      producto: 'JAKAFI · comprimido',
      titular: 'INCYTE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5.0 mg, 10.0 mg, 15.0 mg, 20.0 mg o 25.0 mg por comprimido, según la etiqueta',
      excipientes: [
        'cellulose, microcrystalline',
        'lactose monohydrate',
        'silicon dioxide',
        'hydroxypropyl cellulose (70000 wamw)',
        'povidone',
        'sodium starch glycolate type a potato',
        'magnesium stearate'
      ],
      usos: {
        t: 'Mielofibrosis de riesgo intermedio o alto, policitemia vera con respuesta insuficiente a la hidroxiurea y enfermedad injerto contra receptor, en adultos.',
        ref: {
          f: 'dailymed-ruxolitinib',
          sec: '1 · Indicaciones',
          cita: 'intermediate or high-risk myelofibrosis, including primary myelofibrosis, post-polycythemia vera myelofibrosis, and post-essential thrombocythemia myelofibrosis in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ruxolitinib',
      advertencias: [
        {
          titulo: 'Trombocitopenia, anemia y neutropenia',
          texto: 'Puede causar descenso de plaquetas, de hemoglobina y de neutrófilos.',
          organos: [ 'sangre', 'medula-osea' ],
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Treatment with JAKAFI/JAKAFI XR can cause thrombocytopenia, anemia, and neutropenia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Riesgo de infección',
          texto: 'Se han producido infecciones graves bacterianas, micobacterianas, fúngicas y virales.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious bacterial, mycobacterial, fungal, and viral infections have occurred',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Hematológicas más frecuentes (> 20 %): trombocitopenia y anemia.',
          '34084-4',
          'most common hematologic adverse reactions (incidence > 20%) are thrombocytopenia and anemia'
        ],
        [
          'No hematológicas más frecuentes (≥ 15 %): hematomas, mareo, dolor de cabeza y diarrea.',
          '34084-4',
          'The most common nonhematologic adverse reactions (incidence ≥ 15%) are bruising, dizziness, headache, and diarrhea'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5.0 mg, 10.0 mg, 15.0 mg, 20.0 mg o 25.0 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mielofibrosis de riesgo intermedio o alto, policitemia vera con respuesta insuficiente a la hidroxiurea y enfermedad injerto contra receptor, en adultos.',
    actua: 'Inhibe las cinasas Janus JAK1 y JAK2, que transmiten la señal de citocinas y factores de crecimiento importantes para la formación de la sangre y la función inmunitaria.',
    recorrido: 'El máximo llega entre 1 y 2 horas tras la dosis y la absorción oral se estima en al menos el 95 %. Una comida rica en grasa y calorías no cambió la farmacocinética de forma relevante. Tras una dosis marcada, el 74 % de la radiactividad salió por la orina y el 22 % por las heces; menos del 1 % era fármaco sin cambios. La semivida de eliminación es de unas 3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos redondos blancos con «INCY» grabado, de 5 a 25 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos redondos blancos con «INCY» grabado, de 5 a 25 mg.',
          ref: { f: 'dailymed-ruxolitinib', sec: '3 · Formas y concentraciones', cita: '5 mg tablets - round and white with', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega entre 1 y 2 horas tras la dosis y la absorción oral se estima en al menos el 95 %. Una comida rica en grasa y calorías no cambió la farmacocinética de forma relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega entre 1 y 2 horas tras la dosis y la absorción oral se estima en al menos el 95 %. Una comida rica en grasa y calorías no cambió la farmacocinética de forma relevante.',
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Oral absorption of ruxolitinib is estimated to be at least 95%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El máximo llega entre 1 y 2 horas tras la dosis.',
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ruxolitinib achieves C max within 1 hour to 2 hours post-dose',
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
      ocurre: 'Se une en un 97 % a proteínas del plasma, sobre todo a albúmina; el volumen de distribución en estado estacionario es de 72 L en mielofibrosis.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 97 % a proteínas del plasma, sobre todo a albúmina; el volumen de distribución en estado estacionario es de 72 L en mielofibrosis.',
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of ruxolitinib is approximately 97%, mostly to albumin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas JAK1 y JAK2',
        efecto: 'Inhibe las cinasas Janus JAK1 y JAK2, que transmiten la señal de citocinas y factores de crecimiento importantes para la formación de la sangre y la función inmunitaria.',
        lugar: [ 'medula-osea', 'sangre' ],
        datos: [
          {
            t: 'Inhibe las cinasas Janus JAK1 y JAK2, que transmiten la señal de citocinas y factores de crecimiento importantes para la formación de la sangre y la función inmunitaria.',
            ref: {
              f: 'dailymed-ruxolitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ruxolitinib, a kinase inhibitor, inhibits Janus Associated Kinases (JAKs), JAK1 and JAK2',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza el CYP3A4 y, en menor medida, el CYP2C9.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza el CYP3A4 y, en menor medida, el CYP2C9.',
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ruxolitinib is metabolized by CYP3A4 and to a lesser extent by CYP2C9',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, el 74 % de la radiactividad salió por la orina y el 22 % por las heces; menos del 1 % era fármaco sin cambios. La semivida de eliminación es de unas 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, el 74 % de la radiactividad salió por la orina y el 22 % por las heces; menos del 1 % era fármaco sin cambios. La semivida de eliminación es de unas 3 horas.',
          ref: {
            f: 'dailymed-ruxolitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single oral dose of radiolabeled ruxolitinib, 74% of radioactivity was excreted in urine and 22% via feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1-2',
      unidad: 'h',
      analito: 'ruxolitinib',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Ruxolitinib achieves C max within 1 hour to 2 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Absorción oral estimada',
      valor: '≥ 95',
      unidad: '%',
      analito: 'ruxolitinib',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Oral absorption of ruxolitinib is estimated to be at least 95%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '97 (aprox.)',
      unidad: '%',
      analito: 'ruxolitinib',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein binding of ruxolitinib is approximately 97%, mostly to albumin',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario (mielofibrosis)',
      valor: '72 (CV 29 %)',
      unidad: 'L',
      analito: 'ruxolitinib',
      poblacion: 'pacientes con mielofibrosis',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean ruxolitinib volume of distribution at steady-state is 72 L (coefficient of variation [CV] 29%) in patients with MF',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'ruxolitinib',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of ruxolitinib is approximately 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad en la orina',
      valor: '74',
      unidad: '%',
      analito: 'ruxolitinib y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: '74% of radioactivity was excreted in urine and 22% via feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad en las heces',
      valor: '22',
      unidad: '%',
      analito: 'ruxolitinib y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-ruxolitinib',
        sec: '12.3 · Farmacocinética',
        cita: '74% of radioactivity was excreted in urine and 22% via feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ruxolitinib', 'f1c82580-87ae-11e0-bc84-0002a5d5c51b', 'JAKAFI (RUXOLITINIB) TABLET JAKAFI XR (RUXOLITINIB) TABLET, EXTENDED RELEASE', 'JAKAFI', '42', '2026-08-03', '2026-11-13'),
    rengPubchem(25126798, 'ruxolitinib', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
