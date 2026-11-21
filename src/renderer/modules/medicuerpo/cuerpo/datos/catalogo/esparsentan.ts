import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'esparsentan',
    nombre: 'Esparsentán',
    clase: 'Antagonista dual de los receptores de endotelina A y angiotensina II tipo 1',
    sinonimos: [ 'sparsentan', 'Filspari' ],
    formula: 'C32H40N4O5S',
    masaMolar: 592.8,
    smiles: 'CCCCC1=NC2(CCCC2)C(=O)N1CC3=CC(=C(C=C3)C4=CC=CC=C4S(=O)(=O)NC5=NOC(=C5C)C)COCC',
    inchikey: 'WRFHGDPIDHPWIQ-UHFFFAOYSA-N',
    cid: 10257882,
    iupac: '2-[4-[(2-butyl-4-oxo-1,3-diazaspiro[4.4]non-1-en-3-yl)methyl]-2-(ethoxymethyl)phenyl]-N-(4,5-dimethyl-1,2-oxazol-3-yl)benzenesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'esparsentan-oral',
      producto: 'FILSPARI · comprimido recubierto con película',
      titular: 'TRAVERE THERAPEUTICS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg o 400 mg por comprimido, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'sodium starch glycolate type a',
        'silicon dioxide',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Frenar el deterioro de la función renal en adultos con nefropatía IgA primaria con riesgo de progresión y reducir la proteinuria en la glomeruloesclerosis focal y segmentaria sin síndrome nefrótico desde 8 años.',
        ref: {
          f: 'dailymed-esparsentan',
          sec: '1 · Indicaciones',
          cita: 'To slow kidney function decline in adults with primary immunoglobulin A nephropathy (IgAN) who are at risk for disease progression',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-esparsentan',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Algunos antagonistas de la endotelina han causado elevación de aminotransferasas, hepatotoxicidad e insuficiencia hepática; solo se dispensa en un programa restringido.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-esparsentan',
            sec: '5 · Advertencias y precauciones',
            cita: 'some endothelin receptor antagonists have caused elevations of aminotransferases, hepatotoxicity, and liver failure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede dañar al feto; el programa de riesgos exige descartar el embarazo y usar anticoncepción.',
          organos: [],
          ref: { f: 'dailymed-esparsentan', sec: 'Advertencia destacada', cita: 'HEPATOTOXICITY and EMBRYO-FETAL TOXICITY', codigo: '34066-1' }
        },
        {
          titulo: 'Lesión renal aguda e hiperpotasemia',
          texto: 'Entre sus advertencias figuran la hipotensión, la lesión renal aguda, la hiperpotasemia y la retención de líquidos.',
          organos: [],
          ref: {
            f: 'dailymed-esparsentan',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypotension ( 5.4 ) • Acute Kidney Injury ( 5.5 ) • Hyperkalemia ( 5.6 ) • Fluid Retention',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la nefropatía IgA, las más frecuentes (5 % o más): hiperpotasemia, hipotensión (incluida la ortostática), edema periférico, mareo, anemia y lesión renal aguda.',
          '34084-4',
          'Most common adverse reactions in patients with IgAN (≥5%) are hyperkalemia, hypotension (including orthostatic hypotension), peripheral edema, dizziness, anemia, and acute kidney injury'
        ],
        [
          'En la glomeruloesclerosis focal y segmentaria: edema periférico, hipotensión, hiperpotasemia, mareo y anemia.',
          '34084-4',
          'Most common adverse reactions in patients with FSGS (≥5%) are peripheral edema, hypotension (including orthostatic hypotension), hyperkalemia, dizziness, and anemia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 200 mg o 400 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Frenar el deterioro de la función renal en adultos con nefropatía IgA primaria con riesgo de progresión y reducir la proteinuria en la glomeruloesclerosis focal y segmentaria sin síndrome nefrótico desde 8 años.',
    actua: 'Es una sola molécula que bloquea el receptor de endotelina tipo A y el receptor de angiotensina II tipo 1, con alta afinidad y selectividad frente a los receptores ETB y AT2.',
    recorrido: 'Tras una dosis oral única, la mediana del tiempo hasta el pico es de unas 3 horas (2 a 8). Tras una dosis marcada de 400 mg, alrededor del 80 % se recuperó en las heces (9 % sin cambios) y el 2 % en la orina.'
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
            f: 'dailymed-esparsentan',
            sec: '3 · Formas y concentraciones',
            cita: 'FILSPARI is supplied as film-coated, modified oval, white to off-white tablets',
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
      ocurre: 'Tras una dosis oral única, la mediana del tiempo hasta el pico es de unas 3 horas (2 a 8).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis oral única, la mediana del tiempo hasta el pico es de unas 3 horas (2 a 8).',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single oral dose of sparsentan, the median (minimum to maximum) time to peak plasma concentration is approximately 3 hours (2 to 8 hours)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas y una dosis de 800 mg, el AUC y la Cmax aumentaron un 22 % y un 108 %; con 200 mg no hubo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Sparsentan AUC and C max increased by 22% and 108%, respectively, following administration of a single oral 800 mg dose with a high fat, high calorie meal',
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
      ocurre: 'Se une en más del 99 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 61,4 L con 400 mg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas del plasma humano; el volumen de distribución aparente en estado estacionario es de 61,4 L con 400 mg.',
          ref: { f: 'dailymed-esparsentan', sec: '12.3 · Farmacocinética', cita: 'Sparsentan is >99% bound to human plasma proteins', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 61,4 L con 400 mg y 86,5 L con 800 mg.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution for sparsentan at steady state is 61.4 L at 400 mg and 86.5 L at 800 mg, respectively',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores ETA y AT1',
        efecto: 'Es una sola molécula que bloquea el receptor de endotelina tipo A y el receptor de angiotensina II tipo 1, con alta afinidad y selectividad frente a los receptores ETB y AT2.',
        lugar: [],
        datos: [
          {
            t: 'Es una sola molécula que bloquea el receptor de endotelina tipo A y el receptor de angiotensina II tipo 1, con alta afinidad y selectividad frente a los receptores ETB y AT2.',
            ref: {
              f: 'dailymed-esparsentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sparsentan is a single molecule with antagonism of the endothelin type A receptor (ET A R) and the angiotensin II type 1 receptor (AT 1 R)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP3A es la isoenzima principal de su metabolismo; su aclaramiento aumenta con el tiempo, quizá porque induce su propio metabolismo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP3A es la isoenzima principal de su metabolismo; su aclaramiento aumenta con el tiempo, quizá porque induce su propio metabolismo.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 3A is the major isozyme responsible for the metabolism of sparsentan',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento depende del tiempo, posiblemente porque induce su propio metabolismo.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The clearance of sparsentan is time-dependent which may be related to the drug inducing its own metabolism over time',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada de 400 mg, alrededor del 80 % se recuperó en las heces (9 % sin cambios) y el 2 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada de 400 mg, alrededor del 80 % se recuperó en las heces (9 % sin cambios) y el 2 % en la orina.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 80% of the dose was recovered in feces (9% unchanged) and 2% in urine (negligible amount unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida en estado estacionario se estima en 9,6 horas.',
          ref: {
            f: 'dailymed-esparsentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The half-life of sparsentan is estimated to be 9.6 hours at steady state',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'esparsentán',
      condiciones: 'dosis oral única',
      ref: {
        f: 'dailymed-esparsentan',
        sec: '12.3 · Farmacocinética',
        cita: 'the median (minimum to maximum) time to peak plasma concentration is approximately 3 hours (2 to 8 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario (400 mg)',
      valor: '61,4',
      unidad: 'L',
      analito: 'esparsentán',
      condiciones: '400 mg',
      ref: {
        f: 'dailymed-esparsentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution for sparsentan at steady state is 61.4 L at 400 mg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'esparsentán',
      ref: { f: 'dailymed-esparsentan', sec: '12.3 · Farmacocinética', cita: 'Sparsentan is >99% bound to human plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida en estado estacionario',
      valor: '9,6',
      unidad: 'h',
      analito: 'esparsentán',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-esparsentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The half-life of sparsentan is estimated to be 9.6 hours at steady state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente en estado estacionario (400 mg)',
      valor: '5,11',
      unidad: 'L/h',
      analito: 'esparsentán',
      condiciones: '400 mg, estado estacionario',
      ref: { f: 'dailymed-esparsentan', sec: '12.3 · Farmacocinética', cita: 'then increases to 5.11 L/h at steady state', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'esparsentán y metabolitos',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis marcada de 400 mg',
      ref: {
        f: 'dailymed-esparsentan',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 80% of the dose was recovered in feces (9% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-esparsentan', 'd7354af1-f304-f4d9-e053-2995a90ab219', 'FILSPARI (SPARSENTAN) TABLET, FILM COATED', 'FILSPARI', '7', '2026-04-17', '2026-11-19'),
    rengPubchem(10257882, 'sparsentan', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
