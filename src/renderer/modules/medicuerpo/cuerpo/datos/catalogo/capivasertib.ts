import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'capivasertib',
    nombre: 'Capivasertib',
    clase: 'Inhibidor de las tres isoformas de AKT',
    sinonimos: [ 'capivasertib', 'Truqap' ],
    formula: 'C21H25ClN6O2',
    masaMolar: 428.9,
    smiles: 'C1CN(CCC1(C(=O)N[C@@H](CCO)C2=CC=C(C=C2)Cl)N)C3=NC=NC4=C3C=CN4',
    inchikey: 'JDUBGYFRJFOXQC-KRWDZBQOSA-N',
    cid: 25227436,
    iupac: '4-amino-N-[(1S)-1-(4-chlorophenyl)-3-hydroxypropyl]-1-(7H-pyrrolo[2,3-d]pyrimidin-4-yl)piperidine-4-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'capivasertib-oral',
      producto: 'TRUQAP · comprimido recubierto con película',
      titular: 'ASTRAZENECA PHARMACEUTICALS LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '160 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'anhydrous dibasic calcium phosphate',
        'croscarmellose sodium',
        'magnesium stearate',
        'hypromellose, unspecified',
        'copovidone k25-31',
        'polyethylene glycol 3350',
        'polydextrose',
        'medium-chain triglycerides',
        'titanium dioxide',
        'ferric oxide yellow',
        'ferric oxide red',
        'ferrosoferric oxide',
        'water'
      ],
      usos: {
        t: 'Tratamiento, con fulvestrant, del cáncer de mama HR+, HER2− avanzado o metastásico con alteraciones de PIK3CA, AKT1 o PTEN, según la etiqueta.',
        ref: {
          f: 'dailymed-capivasertib',
          sec: '1 · Indicaciones',
          cita: 'in combination with fulvestrant for the treatment of adult patients with hormone receptor (HR)-positive',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-capivasertib',
      advertencias: [
        {
          titulo: 'Hiperglucemia',
          texto: 'Puede causar hiperglucemia grave, incluida cetoacidosis diabética mortal; medir glucosa y HbA1c antes y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-capivasertib',
            sec: '5 · Advertencias y precauciones',
            cita: 'TRUQAP can cause severe hyperglycemia, including diabetic ketoacidosis and fatal outcomes',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Diarrea',
          texto: 'Causó diarrea en la mayoría de los pacientes; aumentar los líquidos y empezar antidiarreicos.',
          organos: [],
          ref: { f: 'dailymed-capivasertib', sec: '5 · Advertencias y precauciones', cita: 'TRUQAP caused diarrhea in most patients', codigo: '43685-7' }
        },
        {
          titulo: 'Reacciones cutáneas',
          texto: 'Vigilar los signos y síntomas de reacciones cutáneas.',
          organos: [],
          ref: {
            f: 'dailymed-capivasertib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cutaneous Adverse Reactions: Monitor for signs and symptoms of cutaneous adverse reactions',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En cáncer de mama HR+/HER2−, las más frecuentes (20 % o más, con laboratorio): diarrea, reacciones cutáneas, aumento de glucosa, descenso de linfocitos y de hemoglobina, entre otras.',
          '34084-4',
          'HR-positive, HER2-negative breast cancer were diarrhea, cutaneous adverse reactions, increased random glucose, decreased lymphocytes, decreased hemoglobin'
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
    contiene: 'Comprimido recubierto con película: 160 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento, con fulvestrant, del cáncer de mama HR+, HER2− avanzado o metastásico con alteraciones de PIK3CA, AKT1 o PTEN, según la etiqueta.',
    actua: 'Inhibe las tres isoformas de la serina/treonina cinasa AKT (AKT1, AKT2 y AKT3) y la fosforilación de sus sustratos.',
    recorrido: 'El tmax es de 1 a 2 horas y la biodisponibilidad absoluta del 29 %; las comidas no producen diferencias relevantes. Tras 400 mg marcados, el 45 % se recuperó en la orina y el 50 % en las heces; el aclaramiento renal es el 21 % del total.'
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
            f: 'dailymed-capivasertib',
            sec: '3 · Formas y concentraciones',
            cita: '160 mg: beige film-coated, round, biconvex tablets',
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
      ocurre: 'El tmax es de 1 a 2 horas y la biodisponibilidad absoluta del 29 %; las comidas no producen diferencias relevantes.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El tmax es de 1 a 2 horas y la biodisponibilidad absoluta del 29 %; las comidas no producen diferencias relevantes.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'T max is approximately 1-2 hours. The absolute bioavailability is 29%',
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
      ocurre: 'Se une en un 78 % a las proteínas plasmáticas; el volumen de distribución oral en estado estacionario es de 1 847 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 78 % a las proteínas plasmáticas; el volumen de distribución oral en estado estacionario es de 1 847 L.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'Capivasertib plasma protein binding is 78% and the plasma-to-blood ratio is 0.71',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución oral en estado estacionario de 1 847 L.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'The steady state oral volume of distribution is 1,847 L (36%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'AKT1, AKT2 y AKT3',
        efecto: 'Inhibe las tres isoformas de la serina/treonina cinasa AKT (AKT1, AKT2 y AKT3) y la fosforilación de sus sustratos.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las tres isoformas de la serina/treonina cinasa AKT (AKT1, AKT2 y AKT3) y la fosforilación de sus sustratos.',
            ref: {
              f: 'dailymed-capivasertib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Capivasertib is an inhibitor of all 3 isoforms of serine/threonine kinase AKT (AKT1, AKT2 and AKT3) and inhibits phosphorylation of downstream AKT substrates',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y la UGT2B7.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y la UGT2B7.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'Capivasertib is primarily metabolized by CYP3A4 and UGT2B7',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados, el 45 % se recuperó en la orina y el 50 % en las heces; el aclaramiento renal es el 21 % del total.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados, el 45 % se recuperó en la orina y el 50 % en las heces; el aclaramiento renal es el 21 % del total.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean total recovery was 45% from urine and 50% from feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 8,3 horas y el aclaramiento oral en estado estacionario de 50 L/h.',
          ref: {
            f: 'dailymed-capivasertib',
            sec: '12.3 · Farmacocinética',
            cita: 'The half-life is 8.3 hours, and the steady-state oral clearance is 50 L/h (37% CV)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'capivasertib',
      ref: { f: 'dailymed-capivasertib', sec: '12.3 · Farmacocinética', cita: 'T max is approximately 1-2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '29',
      unidad: '%',
      analito: 'capivasertib',
      ref: { f: 'dailymed-capivasertib', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability is 29%', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '78',
      unidad: '%',
      analito: 'capivasertib',
      ref: { f: 'dailymed-capivasertib', sec: '12.3 · Farmacocinética', cita: 'Capivasertib plasma protein binding is 78%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución oral en estado estacionario',
      valor: '1847',
      unidad: 'L',
      analito: 'capivasertib',
      ref: {
        f: 'dailymed-capivasertib',
        sec: '12.3 · Farmacocinética',
        cita: 'The steady state oral volume of distribution is 1,847 L (36%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '8,3',
      unidad: 'h',
      analito: 'capivasertib',
      ref: { f: 'dailymed-capivasertib', sec: '12.3 · Farmacocinética', cita: 'The half-life is 8.3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral en estado estacionario',
      valor: '50',
      unidad: 'L/h',
      analito: 'capivasertib',
      ref: { f: 'dailymed-capivasertib', sec: '12.3 · Farmacocinética', cita: 'the steady-state oral clearance is 50 L/h (37% CV)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '45',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 400 mg',
      ref: {
        f: 'dailymed-capivasertib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean total recovery was 45% from urine and 50% from feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-capivasertib', 'd698c106-2322-401e-b738-cbd83c843ecf', 'TRUQAP (CAPIVASERTIB) TABLET, FILM COATED', 'TRUQAP', '14', '2026-10-30', '2026-11-19'),
    rengPubchem(25227436, 'capivasertib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
