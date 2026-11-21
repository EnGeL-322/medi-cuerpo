import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pindolol',
    nombre: 'Pindolol',
    clase: 'Betabloqueante no selectivo con actividad simpaticomimética intrínseca',
    sinonimos: [ 'pindolol', 'Visken' ],
    formula: 'C14H20N2O2',
    masaMolar: 248.32,
    smiles: 'CC(C)NCC(COC1=CC=CC2=C1C=CN2)O',
    inchikey: 'JZQKKSLKJUAGIC-UHFFFAOYSA-N',
    cid: 4828,
    iupac: '1-(1H-indol-4-yloxy)-3-(propan-2-ylamino)propan-2-ol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'pindolol-oral',
      producto: 'Pindolol · comprimido',
      titular: 'SUN PHARMACEUTICAL INDUSTRIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 5 mg por comprimido, según la etiqueta',
      excipientes: [ 'anhydrous lactose', 'microcrystalline cellulose', 'starch, corn', 'crospovidone (15 mpa.s at 5%)', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento de la hipertensión, solo o junto con otros antihipertensivos, sobre todo un diurético tiacídico.',
        ref: {
          f: 'dailymed-pindolol',
          sec: '1 · Indicaciones',
          cita: 'Pindolol tablets are indicated in the management of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pindolol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'La inhibición simpática por el bloqueo beta puede precipitar una insuficiencia cardíaca más grave.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-pindolol',
            sec: 'Advertencias',
            cita: 'Sympathetic stimulation may be a vital component supporting circulatory function in patients with congestive heart failure, and its inhibition by beta-blockade may precipitate more severe failure',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [ 'La mayoría de las reacciones adversas han sido leves.', '34084-4', 'Most adverse reactions have been mild' ],
        [
          'La tabla de reacciones procede de ensayos de 12 semanas en hipertensos con pindolol en monoterapia, otros fármacos activos o placebo.',
          '34084-4',
          'derived from 12-week comparative double-blind, parallel design trials in hypertensive patients given pindolol as monotherapy'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg o 5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, solo o junto con otros antihipertensivos, sobre todo un diurético tiacídico.',
    actua: 'Antagonista beta-adrenérgico no selectivo con actividad simpaticomimética intrínseca y sin actividad estabilizadora de membrana; atenúa los aumentos de frecuencia cardíaca, presión sistólica y gasto cardíaco del ejercicio.',
    recorrido: 'Se absorbe con rapidez y de forma reproducible (más del 95 %) y alcanza el pico en 1 hora; no tiene un efecto de primer paso significativo y los alimentos no afectan a su biodisponibilidad. Entre el 35 % y el 40 % se excreta sin cambios en la orina; entre el 6 % y el 9 % de una dosis intravenosa sale por la bilis a las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Pindolol is rapidly and reproducibly absorbed (greater than 95%)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y de forma reproducible (más del 95 %) y alcanza el pico en 1 hora; no tiene un efecto de primer paso significativo y los alimentos no afectan a su biodisponibilidad.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y de forma reproducible (más del 95 %) y alcanza el pico en 1 hora; no tiene un efecto de primer paso significativo y los alimentos no afectan a su biodisponibilidad.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Pindolol is rapidly and reproducibly absorbed (greater than 95%), achieving peak plasma concentrations within 1 hour of drug administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no afectan de forma significativa a su biodisponibilidad.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The bioavailability of pindolol is not significantly affected by coadministration of food, hydralazine, hydrochlorothiazide or aspirin',
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
      ocurre: 'Solo se une en un 40 % a las proteínas del plasma y se reparte por igual entre el plasma y los glóbulos rojos; el volumen de distribución en sujetos sanos es de unos 2 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Solo se une en un 40 % a las proteínas del plasma y se reparte por igual entre el plasma y los glóbulos rojos; el volumen de distribución en sujetos sanos es de unos 2 L/kg.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Pindolol is only 40% bound to plasma proteins and is evenly distributed between plasma and red cells',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución de unos 2 L/kg en sujetos sanos.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution in healthy subjects is about 2 L/kg',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'Receptores adrenérgicos beta-1 y beta-2',
        efecto: 'Antagonista beta-adrenérgico no selectivo con actividad simpaticomimética intrínseca y sin actividad estabilizadora de membrana; atenúa los aumentos de frecuencia cardíaca, presión sistólica y gasto cardíaco del ejercicio.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Antagonista beta-adrenérgico no selectivo con actividad simpaticomimética intrínseca y sin actividad estabilizadora de membrana; atenúa los aumentos de frecuencia cardíaca, presión sistólica y gasto cardíaco del ejercicio.',
            ref: {
              f: 'dailymed-pindolol',
              sec: '12 · Farmacología clínica',
              cita: 'Pindolol is a nonselective beta-adrenergic antagonist (beta-blocker) which possesses intrinsic sympathomimetic activity (ISA) in therapeutic dosage ranges',
              codigo: '34090-1'
            }
          },
          {
            t: 'Atenúa los aumentos de la frecuencia cardíaca, la presión sistólica y el gasto cardíaco.',
            ref: {
              f: 'dailymed-pindolol',
              sec: '12.2 · Farmacodinámica',
              cita: 'pindolol attenuates increases in heart rate, systolic blood pressure, and cardiac output',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un metabolismo extenso: entre el 60 % y el 65 % se transforma sobre todo en hidroximetabolitos, que se excretan como glucurónidos y sulfatos etéreos; no tiene un efecto de primer paso significativo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un metabolismo extenso: entre el 60 % y el 65 % se transforma sobre todo en hidroximetabolitos, que se excretan como glucurónidos y sulfatos etéreos; no tiene un efecto de primer paso significativo.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'In man, 35% to 40% is excreted unchanged in the urine and 60% to 65% is metabolized primarily to hydroxy-metabolites which are excreted as glucuronides and ethereal sulfates',
            codigo: '43682-4'
          }
        },
        {
          t: 'No tiene un efecto de primer paso significativo.',
          ref: { f: 'dailymed-pindolol', sec: '12.3 · Farmacocinética', cita: 'Pindolol has no significant first-pass effect', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroximetabolitos conjugados',
          actividad: 'desconocida',
          nota: 'Se excretan como glucurónidos y sulfatos etéreos, con una semivida de unas 8 horas; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: '60% to 65% is metabolized primarily to hydroxy-metabolites which are excreted as glucuronides and ethereal sulfates',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 35 % y el 40 % se excreta sin cambios en la orina; entre el 6 % y el 9 % de una dosis intravenosa sale por la bilis a las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 35 % y el 40 % se excreta sin cambios en la orina; entre el 6 % y el 9 % de una dosis intravenosa sale por la bilis a las heces.',
          ref: { f: 'dailymed-pindolol', sec: '12.3 · Farmacocinética', cita: 'In man, 35% to 40% is excreted unchanged in the urine', codigo: '43682-4' }
        },
        {
          t: 'Entre el 6 % y el 9 % de una dosis intravenosa se excreta por la bilis a las heces.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'About 6% to 9% of an administered intravenous dose is excreted by the bile into the feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los metabolitos polares se excretan con una semivida de unas 8 horas.',
          ref: {
            f: 'dailymed-pindolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The polar metabolites are excreted with a half-life of approximately 8 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida',
      valor: '> 95',
      unidad: '%',
      analito: 'pindolol',
      ref: {
        f: 'dailymed-pindolol',
        sec: '12.3 · Farmacocinética',
        cita: 'Pindolol is rapidly and reproducibly absorbed (greater than 95%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 1',
      unidad: 'h',
      analito: 'pindolol',
      ref: {
        f: 'dailymed-pindolol',
        sec: '12.3 · Farmacocinética',
        cita: 'achieving peak plasma concentrations within 1 hour of drug administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '40',
      unidad: '%',
      analito: 'pindolol',
      ref: { f: 'dailymed-pindolol', sec: '12.3 · Farmacocinética', cita: 'Pindolol is only 40% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '2 (aprox.)',
      unidad: 'L/kg',
      analito: 'pindolol',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-pindolol',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution in healthy subjects is about 2 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina',
      valor: '35-40',
      unidad: '% de la dosis',
      analito: 'pindolol inalterado',
      ref: { f: 'dailymed-pindolol', sec: '12.3 · Farmacocinética', cita: 'In man, 35% to 40% is excreted unchanged in the urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pindolol', 'b331a73f-bf7b-4442-8901-36d016530279', 'PINDOLOL TABLET', 'Pindolol', '7', '2026-03-18', '2026-11-19'),
    rengPubchem(4828, 'pindolol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
