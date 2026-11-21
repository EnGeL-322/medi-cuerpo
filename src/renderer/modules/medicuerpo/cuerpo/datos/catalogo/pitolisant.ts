import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pitolisant',
    nombre: 'Pitolisant',
    clase: 'Antagonista/agonista inverso del receptor H3 de la histamina',
    sinonimos: [ 'pitolisant', 'Wakix' ],
    formula: 'C17H26ClNO',
    masaMolar: 295.8,
    smiles: 'C1CCN(CC1)CCCOCCCC2=CC=C(C=C2)Cl',
    inchikey: 'NNACHAUCXXVJSP-UHFFFAOYSA-N',
    cid: 9948102,
    iupac: '1-[3-[3-(4-chlorophenyl)propoxy]propyl]piperidine',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'pitolisant-oral',
      producto: 'Wakix · comprimido recubierto con película',
      titular: 'HARMONY BIOSCIENCES, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '4.45 mg o 17.8 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de pitolisant',
        ref: { f: 'dailymed-pitolisant', sec: '11 · Descripción', cita: 'pitolisant hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la somnolencia diurna excesiva o la cataplejía en pacientes con narcolepsia desde 6 años.',
        ref: {
          f: 'dailymed-pitolisant',
          sec: '1 · Indicaciones',
          cita: 'WAKIX is indicated for the treatment of excessive daytime sleepiness (EDS) or cataplexy in patients 6 years of age and older with narcolepsy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pitolisant',
      advertencias: [
        {
          titulo: 'Prolongación del QT',
          texto: 'Alarga el intervalo QT; evitarlo con otros fármacos que lo alarguen, con QT prolongado conocido o con antecedentes de arritmias.',
          organos: [],
          ref: { f: 'dailymed-pitolisant', sec: '5 · Advertencias y precauciones', cita: 'WAKIX prolongs the QT interval', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'En adultos, las más frecuentes (5 % o más y al menos el doble que con placebo): insomnio, náuseas y ansiedad.',
          '34084-4',
          'Most common adverse reactions (≥5% and at least twice placebo) in adults: insomnia, nausea, and anxiety'
        ],
        [
          'En niños desde 6 años, las más frecuentes (5 % o más y más que con placebo): cefalea e insomnio.',
          '34084-4',
          'Most common adverse reactions (≥5% and greater than placebo) in pediatric patients 6 years and older: headache and insomnia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 4.45 mg o 17.8 mg por comprimido, según la etiqueta; el activo va como clorhidrato de pitolisant. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la somnolencia diurna excesiva o la cataplejía en pacientes con narcolepsia desde 6 años.',
    actua: 'Su mecanismo no está claro; su eficacia podría deberse a su acción antagonista o agonista inversa en los receptores H3 de la histamina.',
    recorrido: 'La absorción oral es de alrededor del 90 % y la mediana del Tmax de 3,5 horas (2 a 5); una comida rica en grasas no produjo diferencias clínicamente significativas. Tras una dosis oral marcada, alrededor del 90 % se excretó en la orina (menos del 2 % sin cambios) y el 2,3 % en las heces.'
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
            f: 'dailymed-pitolisant',
            sec: '3 · Formas y concentraciones',
            cita: 'WAKIX 4.45 mg tablets: white, round, biconvex film-coated tablet',
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
      ocurre: 'La absorción oral es de alrededor del 90 % y la mediana del Tmax de 3,5 horas (2 a 5); una comida rica en grasas no produjo diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción oral es de alrededor del 90 % y la mediana del Tmax de 3,5 horas (2 a 5); una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to maximum plasma concentration (T max ) of pitolisant is 3.5 hours (2 to 5 hours). The oral absorption of WAKIX is around 90%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in the pharmacokinetics of pitolisant were observed following administration with a high-fat meal',
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
      ocurre: 'El volumen de distribución aparente es de unos 700 L (5 a 10 L/kg) y la unión a las proteínas del suero del 91 %-96 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente es de unos 700 L (5 a 10 L/kg) y la unión a las proteínas del suero del 91 %-96 %.',
          ref: { f: 'dailymed-pitolisant', sec: '12.3 · Farmacocinética', cita: 'Serum protein binding is approximately 91% to 96%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente de unos 700 L (5 a 10 L/kg).',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of pitolisant is approximately 700 L (5 to 10 L/kg)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor H3 de la histamina',
        efecto: 'Su mecanismo no está claro; su eficacia podría deberse a su acción antagonista o agonista inversa en los receptores H3 de la histamina.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no está claro; su eficacia podría deberse a su acción antagonista o agonista inversa en los receptores H3 de la histamina.',
            ref: {
              f: 'dailymed-pitolisant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its efficacy could be mediated through its activity as an antagonist/inverse agonist at histamine-3 (H3) receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP2D6 y, en menor medida, por la CYP3A4; los metabolitos se conjugan después con glicina o ácido glucurónico y ninguno es activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP2D6 y, en menor medida, por la CYP3A4; los metabolitos se conjugan después con glicina o ácido glucurónico y ninguno es activo.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'Pitolisant is primarily metabolized by CYP2D6 and to a lesser extent by CYP3A4; these metabolites are further metabolized or conjugated with glycine or glucuronic acid',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del pitolisant',
          actividad: 'inactivo',
          nota: 'Ninguno es farmacológicamente activo.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'None of these metabolites are pharmacologically active',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 90 % se excretó en la orina (menos del 2 % sin cambios) y el 2,3 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 90 % se excretó en la orina (menos del 2 % sin cambios) y el 2,3 % en las heces.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 90% of the dose was excreted in urine (<2% unchanged) and 2.3% in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana de la semivida es de unas 20 horas (7,5 a 24,2) tras 35,6 mg; el aclaramiento renal supone menos del 2 % del total.',
          ref: {
            f: 'dailymed-pitolisant',
            sec: '12.3 · Farmacocinética',
            cita: 'After a single dose of 35.6 mg, the median half-life of pitolisant is approximately 20 hours (7.5 to 24.2 hours)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax',
      valor: '3,5',
      unidad: 'h',
      analito: 'pitolisant',
      ref: {
        f: 'dailymed-pitolisant',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to maximum plasma concentration (T max ) of pitolisant is 3.5 hours (2 to 5 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Absorción oral',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'pitolisant',
      ref: { f: 'dailymed-pitolisant', sec: '12.3 · Farmacocinética', cita: 'The oral absorption of WAKIX is around 90%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '700 (aprox.)',
      unidad: 'L',
      analito: 'pitolisant',
      ref: {
        f: 'dailymed-pitolisant',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of pitolisant is approximately 700 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '91-96 (aprox.)',
      unidad: '%',
      analito: 'pitolisant',
      ref: { f: 'dailymed-pitolisant', sec: '12.3 · Farmacocinética', cita: 'Serum protein binding is approximately 91% to 96%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Mediana de la semivida',
      valor: '20 (aprox.)',
      unidad: 'h',
      analito: 'pitolisant',
      condiciones: 'dosis única de 35,6 mg',
      ref: {
        f: 'dailymed-pitolisant',
        sec: '12.3 · Farmacocinética',
        cita: 'the median half-life of pitolisant is approximately 20 hours (7.5 to 24.2 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente (CL/F)',
      valor: '43,9',
      unidad: 'L/h',
      analito: 'pitolisant',
      ref: {
        f: 'dailymed-pitolisant',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent oral clearance (CL/F) of pitolisant is 43.9 L/hr',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pitolisant', '8daa5562-824e-476c-9652-26ceef3d4b0e', 'WAKIX (PITOLISANT HYDROCHLORIDE) TABLET, FILM COATED', 'Wakix', '18', '2026-02-26', '2026-11-19'),
    rengPubchem(9948102, 'pitolisant', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
