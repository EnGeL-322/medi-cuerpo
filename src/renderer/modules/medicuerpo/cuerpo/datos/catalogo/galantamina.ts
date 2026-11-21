import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'galantamina',
    nombre: 'Galantamina',
    clase: 'Inhibidor de la acetilcolinesterasa',
    sinonimos: [ 'galantamine', 'Razadyne' ],
    formula: 'C17H21NO3',
    masaMolar: 287.35,
    smiles: 'CN1CC[C@@]23C=C[C@@H](C[C@@H]2OC4=C(C=CC(=C34)C1)OC)O',
    inchikey: 'ASUTZQLVASHGKV-JDFRZJQESA-N',
    cid: 9651,
    iupac: '(1S,12S,14R)-9-methoxy-4-methyl-11-oxa-4-azatetracyclo[8.6.1.01,12.06,17]heptadeca-6(17),7,9,15-tetraen-14-ol',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'galantamina-oral',
      producto: 'Galantamine Hydrobromide · comprimido recubierto con película',
      titular: 'YABAO PHARMACEUTICAL CO., LTD. BEIJING',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '4 mg, 8 mg o 12 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Bromhidrato de galantamina',
        ref: { f: 'dailymed-galantamina', sec: '11 · Descripción', cita: 'Galantamine hydrobromide', codigo: '34089-3' }
      },
      excipientes: [
        'colloidal silicon dioxide',
        'crospovidone',
        'hypromelloses',
        'lactose monohydrate',
        'starch, pregelatinized corn',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'titanium dioxide',
        'hydroxypropyl cellulose (type e)',
        'polyethylene glycol 400',
        'polysorbate 80'
      ],
      usos: {
        t: 'Demencia leve a moderada de tipo Alzheimer.',
        ref: {
          f: 'dailymed-galantamina',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of mild to moderate dementia of the Alzheimer’s type',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-galantamina',
      advertencias: [
        {
          titulo: 'Reacciones cutáneas graves',
          texto: 'Se han descrito síndrome de Stevens-Johnson y pustulosis exantemática.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-galantamina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious skin reactions (Stevens-Johnson syndrome and acute generalized exanthematous pustulosis) have been reported',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradicardia y bloqueo',
          texto: 'Por su acción, tiene efectos vagotónicos que pueden causar bradicardia y bloqueo auriculoventricular.',
          organos: [ 'corazon' ],
          ref: { f: 'dailymed-galantamina', sec: '5 · Advertencias y precauciones', cita: 'leading to bradycardia and AV bloc', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 %): náuseas, vómitos, diarrea, mareo, dolor de cabeza, menos apetito y pérdida de peso.',
          '34084-4',
          'were nausea, vomiting, diarrhea, dizziness, headache, decreased appetite, and weight decreased'
        ],
        [ 'Datos de ensayos clínicos doble ciego.', '34084-4', 'from double-blind clinical trials (≥5%) were nausea' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 4 mg, 8 mg o 12 mg por comprimido, según la etiqueta; el activo va como bromhidrato de galantamina. Los excipientes no son el principio activo.',
    usos: 'Demencia leve a moderada de tipo Alzheimer.',
    actua: 'Inhibe de forma competitiva y reversible la acetilcolinesterasa; se postula que mejora la función colinérgica al aumentar la acetilcolina en el cerebro.',
    recorrido: 'Se absorbe con un pico hacia la hora y una biodisponibilidad absoluta de alrededor del 90 %; la comida baja la Cmax un 25 % y retrasa el pico 1,5 horas. En 7 días se recuperó del 93 % al 99 % de la radiactividad, alrededor del 95 % en la orina y el 5 % en las heces; de media, el 32 % como galantamina sin cambios. Su semivida terminal es de unas 7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-galantamina', sec: '3 · Formas y concentraciones', cita: 'white color coated, round, biconvex tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con un pico hacia la hora y una biodisponibilidad absoluta de alrededor del 90 %; la comida baja la Cmax un 25 % y retrasa el pico 1,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con un pico hacia la hora y una biodisponibilidad absoluta de alrededor del 90 %; la comida baja la Cmax un 25 % y retrasa el pico 1,5 horas.',
          ref: {
            f: 'dailymed-galantamina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of galantamine is about 90%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico hacia la hora.',
          ref: {
            f: 'dailymed-galantamina',
            sec: '12.3 · Farmacocinética',
            cita: 'Galantamine is absorbed with time to peak concentration of about 1 hour',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución medio de 175 L; solo el 18 % se une a proteínas y en la sangre se reparte sobre todo en las células (52,7 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución medio de 175 L; solo el 18 % se une a proteínas y en la sangre se reparte sobre todo en las células (52,7 %).',
          ref: {
            f: 'dailymed-galantamina',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of galantamine is 18% at therapeutically relevant concentrations',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Acetilcolinesterasa',
        efecto: 'Inhibe de forma competitiva y reversible la acetilcolinesterasa; se postula que mejora la función colinérgica al aumentar la acetilcolina en el cerebro.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva y reversible la acetilcolinesterasa; se postula que mejora la función colinérgica al aumentar la acetilcolina en el cerebro.',
            ref: {
              f: 'dailymed-galantamina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Galantamine, a tertiary alkaloid, is a competitive and reversible inhibitor of acetylcholinesterase',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por CYP2D6 y CYP3A4 y se glucuronida; parte sale sin cambios.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por CYP2D6 y CYP3A4 y se glucuronida; parte sale sin cambios.',
          ref: {
            f: 'dailymed-galantamina',
            sec: '12.3 · Farmacocinética',
            cita: 'Galantamine is metabolized by hepatic cytochrome P450 enzymes, glucuronidated, and excreted unchanged in the urine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónido de galantamina',
          actividad: 'desconocida',
          ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'galantamine glucuronide for 14–24%', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 7 días se recuperó del 93 % al 99 % de la radiactividad, alrededor del 95 % en la orina y el 5 % en las heces; de media, el 32 % como galantamina sin cambios. Su semivida terminal es de unas 7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 7 días se recuperó del 93 % al 99 % de la radiactividad, alrededor del 95 % en la orina y el 5 % en las heces; de media, el 32 % como galantamina sin cambios. Su semivida terminal es de unas 7 horas.',
          ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'with about 95% in urine and about 5% in the feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'galantamina',
      ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'time to peak concentration of about 1 hour', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'galantamina',
      ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of galantamine is about 90%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución medio',
      valor: '175',
      unidad: 'L',
      analito: 'galantamina',
      ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'The mean volume of distribution of galantamine is 175 L', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '18',
      unidad: '%',
      analito: 'galantamina',
      ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'The plasma protein binding of galantamine is 18%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '7 (aprox.)',
      unidad: 'h',
      analito: 'galantamina',
      ref: { f: 'dailymed-galantamina', sec: '12.3 · Farmacocinética', cita: 'Galantamine has a terminal half-life of about 7 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-galantamina', '7dc963dd-84d6-45f3-857f-46a44fe9edc8', 'GALANTAMINE HYDROBROMIDE TABLET, FILM COATED', 'Galantamine Hydrobromide', '1', '2015-06-02', '2026-11-12'),
    rengPubchem(9651, 'galantamine', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
