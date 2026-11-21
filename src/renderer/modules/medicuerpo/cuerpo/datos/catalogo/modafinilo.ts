import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'modafinilo',
    nombre: 'Modafinilo',
    clase: 'Promotor de la vigilia',
    sinonimos: [ 'modafinil', 'Provigil' ],
    formula: 'C15H15NO2S',
    masaMolar: 273.4,
    smiles: 'C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N',
    inchikey: 'YFGHCGITMMYXAQ-UHFFFAOYSA-N',
    cid: 4236,
    iupac: '2-benzhydrylsulfinylacetamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'modafinilo-oral',
      producto: 'Provigil · comprimido',
      titular: 'APOTEX CORP',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [ 'croscarmellose sodium', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'povidone k30', 'starch, corn', 'water' ],
      usos: {
        t: 'Mejorar la vigilia en adultos con somnolencia excesiva por narcolepsia, apnea obstructiva del sueño o trastorno por trabajo a turnos.',
        ref: {
          f: 'dailymed-modafinilo',
          sec: '1 · Indicaciones',
          cita: 'indicated to improve wakefulness in adult patients with excessive sleepiness associated with narcolepsy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-modafinilo',
      advertencias: [
        {
          titulo: 'Erupción grave',
          texto: 'Se han descrito erupciones graves, incluido el síndrome de Stevens-Johnson, que obligaron a hospitalizar y suspender el tratamiento.',
          organos: [ 'piel' ],
          ref: {
            f: 'dailymed-modafinilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious rash requiring hospitalization and discontinuation of treatment has been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 %): dolor de cabeza, náuseas, nerviosismo, rinitis, diarrea, dolor de espalda, ansiedad, insomnio, mareo y dispepsia.',
          '34084-4',
          'headache, nausea, nervousness, rhinitis, diarrhea'
        ],
        [ 'Datos de seguridad de más de 3500 pacientes.', '34084-4', 'PROVIGIL has been evaluated for safety in over 3,500 patients' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mejorar la vigilia en adultos con somnolencia excesiva por narcolepsia, apnea obstructiva del sueño o trastorno por trabajo a turnos.',
    actua: 'No se sabe cómo favorece la vigilia; tiene efectos parecidos a los de los simpaticomiméticos, aunque su perfil no es idéntico.',
    recorrido: 'Se absorbe con facilidad y el pico llega en 2 a 4 horas; la comida puede retrasarlo una hora sin cambiar la biodisponibilidad global. Sus metabolitos salen por la orina: con modafinilo marcado, el 80 % de la radiactividad apareció en la orina y el 1 % en las heces en 11 días; menos del 10 % sin cambios. Su semivida efectiva es de unas 15 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido con forma de cápsula.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido con forma de cápsula.',
          ref: { f: 'dailymed-modafinilo', sec: '3 · Formas y concentraciones', cita: 'capsule-shaped, white to off white, tablet', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con facilidad y el pico llega en 2 a 4 horas; la comida puede retrasarlo una hora sin cambiar la biodisponibilidad global.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con facilidad y el pico llega en 2 a 4 horas; la comida puede retrasarlo una hora sin cambiar la biodisponibilidad global.',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'PROVIGIL is readily absorbed after oral administration, with peak plasma concentrations occurring at 2-4 hours',
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
      ocurre: 'Volumen aparente de distribución de unos 0,9 L/kg; alrededor del 60 % se une a proteínas, sobre todo a la albúmina.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de distribución de unos 0,9 L/kg; alrededor del 60 % se une a proteínas, sobre todo a la albúmina.',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'modafinil is moderately bound to plasma protein (approximately 60%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Mecanismo desconocido',
        efecto: 'No se sabe cómo favorece la vigilia; tiene efectos parecidos a los de los simpaticomiméticos, aunque su perfil no es idéntico.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'No se sabe cómo favorece la vigilia; tiene efectos parecidos a los de los simpaticomiméticos, aunque su perfil no es idéntico.',
            ref: {
              f: 'dailymed-modafinilo',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism(s) through which modafinil promotes wakefulness is unknown',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo en el hígado (alrededor del 90 %): desamidación, S-oxidación, hidroxilación y glucuronidación. Sus metabolitos principales, el ácido de modafinilo y la sulfona, no parecen activos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo en el hígado (alrededor del 90 %): desamidación, S-oxidación, hidroxilación y glucuronidación. Sus metabolitos principales, el ácido de modafinilo y la sulfona, no parecen activos.',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The major route of elimination is metabolism (approximately 90%), primarily by the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido de modafinilo',
          actividad: 'inactivo',
          nota: 'Inactivo en modelos preclínicos.',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'modafinil acid, modafinil sulfone, 2-[(diphenylmethyl)sulfonyl]acetic acid and 4-hydroxy modafinil, were inactive',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Modafinilo sulfona',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Only two metabolites reach appreciable concentrations in plasma, i.e., modafinil acid and modafinil sulfone',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sus metabolitos salen por la orina: con modafinilo marcado, el 80 % de la radiactividad apareció en la orina y el 1 % en las heces en 11 días; menos del 10 % sin cambios. Su semivida efectiva es de unas 15 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sus metabolitos salen por la orina: con modafinilo marcado, el 80 % de la radiactividad apareció en la orina y el 1 % en las heces en 11 días; menos del 10 % sin cambios. Su semivida efectiva es de unas 15 horas.',
          ref: {
            f: 'dailymed-modafinilo',
            sec: '12.3 · Farmacocinética',
            cita: 'predominantly in the urine (80% vs. 1.0% in the feces)',
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
      valor: '2-4',
      unidad: 'h',
      analito: 'modafinilo',
      ref: { f: 'dailymed-modafinilo', sec: '12.3 · Farmacocinética', cita: 'with peak plasma concentrations occurring at 2-4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva de eliminación',
      valor: '15 (aprox.)',
      unidad: 'h',
      analito: 'modafinilo',
      condiciones: 'dosis múltiples',
      ref: {
        f: 'dailymed-modafinilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The effective elimination half-life of modafinil after multiple doses is about 15 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '0,9 (aprox.)',
      unidad: 'L/kg',
      analito: 'modafinilo',
      ref: { f: 'dailymed-modafinilo', sec: '12.3 · Farmacocinética', cita: 'apparent volume of distribution of approximately 0.9 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas (in vitro)',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'modafinilo',
      ref: { f: 'dailymed-modafinilo', sec: '12.3 · Farmacocinética', cita: 'moderately bound to plasma protein (approximately 60%)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-modafinilo', '0391f182-1958-9fef-a944-53b229ce99e7', 'PROVIGIL (MODAFINIL) TABLET', 'Provigil', '4', '2025-09-01', '2026-11-12'),
    rengPubchem(4236, 'modafinil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
