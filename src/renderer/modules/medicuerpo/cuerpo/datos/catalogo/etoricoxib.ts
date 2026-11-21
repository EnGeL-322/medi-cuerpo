import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'etoricoxib',
    nombre: 'Etoricoxib',
    clase: 'Inhibidor selectivo de la COX-2 (antiinflamatorio no esteroideo)',
    sinonimos: [ 'etoricoxib', 'Exxiv' ],
    formula: 'C18H15ClN2O2S',
    masaMolar: 358.8,
    smiles: 'CC1=NC=C(C=C1)C2=C(C=C(C=N2)Cl)C3=CC=C(C=C3)S(=O)(=O)C',
    inchikey: 'MNJVRJDLRVPLFE-UHFFFAOYSA-N',
    cid: 123619,
    iupac: '5-chloro-2-(6-methyl-3-pyridinyl)-3-(4-methylsulfonylphenyl)pyridine',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'etoricoxib-oral',
      producto: 'EXXIV 60 mg COMPRIMIDOS RECUBIERTOS CON PELICULA',
      titular: 'Organon Salud S.L.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'COMPRIMIDO RECUBIERTO CON PELÍCULA',
      liberacion: 'no declarada',
      concentraciones: '30, 60, 90 o 120 mg de etoricoxib por comprimido, según la ficha técnica',
      excipientes: [
        'Fosfato de calcio hidrogenado (anhidro)',
        'Croscarmelosa sódica',
        'Estearato de magnesio',
        'Celulosa microcristalina',
        'Cera de carnauba',
        'Lactosa monohidrato',
        'Hipromelosa',
        'Dióxido de titanio (E-171)',
        'Triacetina'
      ],
      usos: {
        t: 'Alivio sintomático de la artrosis, la artritis reumatoide, la espondilitis anquilosante y del dolor y la inflamación de la artritis gotosa aguda, en adultos y adolescentes desde 16 años.',
        ref: {
          f: 'cima-64931',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'para el alivio sintomático de la artrosis, la artritis reumatoide (AR), la espondilitis anquilosante y el dolor y signos de inflamación asociados a la artritis gotosa aguda',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-64931',
      advertencias: [
        {
          titulo: 'Complicaciones gastrointestinales',
          texto: 'Se han producido complicaciones del tracto gastrointestinal superior (perforaciones, úlceras o hemorragias); algunas tuvieron resultado mortal.',
          organos: [ 'estomago', 'intestino-delgado' ],
          ref: {
            f: 'cima-64931',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'En pacientes tratados con etoricoxib, se han producido complicaciones del tracto gastrointestinal superior',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Retención de líquidos, edema e hipertensión',
          texto: 'Se han observado retención de líquidos, edema e hipertensión.',
          organos: [ 'corazon', 'vasos', 'rinones' ],
          ref: {
            f: 'cima-64931',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'se ha observado retención de líquidos, edema e hipertensión en pacientes tratados con etoricoxib',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Riesgo cardiovascular',
          texto: 'Los inhibidores selectivos de la COX-2 pueden asociarse con un riesgo de acontecimientos trombóticos, sobre todo infarto de miocardio e ictus.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'cima-64931',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'puede asociarse con un riesgo de acontecimientos trombóticos',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones gastrointestinales que lista la etiqueta figuran dolor abdominal, estreñimiento, flatulencia, gastritis, ardor de estómago, diarrea, dispepsia, náuseas, vómitos, esofagitis y úlcera bucal.',
          'FT 4.8',
          'Dolor abdominal Muy frecuentes Estreñimiento, flatulencia, gastritis, ardor de estómago/reflujo ácido , diarrea, dispepsia/malestar epigástrico, náuseas, vómitos'
        ],
        [
          'La tabla de la ficha incluye también la úlcera gastroduodenal y las úlceras pépticas con perforación y sangrado gastrointestinal.',
          'FT 4.8',
          'úlcera gastroduodenal, úlceras pépticas incluyendo perforación y sangrado gastrointestinal'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 30, 60, 90 o 120 mg de etoricoxib por comprimido, según la ficha técnica. Los excipientes no son el principio activo.',
    usos: 'Alivio sintomático de la artrosis, la artritis reumatoide, la espondilitis anquilosante y del dolor y la inflamación de la artritis gotosa aguda, en adultos y adolescentes desde 16 años.',
    actua: 'Es un inhibidor selectivo de la ciclooxigenasa 2, la enzima que interviene en la síntesis de prostaglandinas; en los estudios no inhibió la ciclooxigenasa 1 ni la función de las plaquetas.',
    recorrido: 'Se absorbe bien: la biodisponibilidad absoluta es de aproximadamente el 100 % y el pico plasmático se observó alrededor de 1 hora después de la toma en ayunas. Casi toda la eliminación es por metabolismo seguido de excreción renal: tras una dosis intravenosa marcada, el 70 % de la radiactividad salió por la orina y el 20 % por las heces, sobre todo como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: { f: 'cima-64931', sec: '3 · Forma farmacéutica', cita: 'Comprimidos recubiertos con película (comprimidos)', codigo: 'FT 3' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien: la biodisponibilidad absoluta es de aproximadamente el 100 % y el pico plasmático se observó alrededor de 1 hora después de la toma en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien: la biodisponibilidad absoluta es de aproximadamente el 100 % y el pico plasmático se observó alrededor de 1 hora después de la toma en ayunas.',
          ref: {
            f: 'cima-64931',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Administrado por vía oral, etoricoxib se absorbe bien. La biodisponibilidad absoluta es aproximadamente del 100 %',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Una comida rica en grasas no cambió el grado de absorción, pero redujo la Cmax un 36 % y retrasó el Tmax hasta 2 horas; no se considera clínicamente significativo.',
          ref: {
            f: 'cima-64931',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'resultando en un descenso del 36% en la C max y en un aumento en el T max a las 2 horas',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une a las proteínas del plasma humano en aproximadamente un 92 % y su volumen de distribución en el estado estacionario es de unos 120 litros.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a las proteínas del plasma humano en aproximadamente un 92 % y su volumen de distribución en el estado estacionario es de unos 120 litros.',
          ref: {
            f: 'cima-64931',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Etoricoxib se une a proteínas plasmáticas humanas en aproximadamente un 92 %',
            codigo: 'FT 5.2'
          }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa 2 (COX-2)',
        efecto: 'Es un inhibidor selectivo de la ciclooxigenasa 2, la enzima que interviene en la síntesis de prostaglandinas; en los estudios no inhibió la ciclooxigenasa 1 ni la función de las plaquetas.',
        lugar: [ 'articulaciones', 'tejidos' ],
        datos: [
          {
            t: 'Es un inhibidor selectivo de la ciclooxigenasa 2, la enzima que interviene en la síntesis de prostaglandinas; en los estudios no inhibió la ciclooxigenasa 1 ni la función de las plaquetas.',
            ref: {
              f: 'cima-64931',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'es un inhibidor por vía oral, selectivo de la ciclooxigenasa 2',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "Se metaboliza de forma intensa, por lo que menos del 1 % de la dosis aparece en la orina como fármaco original; la vía principal, catalizada por enzimas CYP (la CYP3A4 parece contribuir), forma el derivado 6'-hidroximetilo.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "Se metaboliza de forma intensa, por lo que menos del 1 % de la dosis aparece en la orina como fármaco original; la vía principal, catalizada por enzimas CYP (la CYP3A4 parece contribuir), forma el derivado 6'-hidroximetilo.",
          ref: { f: 'cima-64931', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Etoricoxib es intensamente metabolizado', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [
        {
          nombre: "Derivado 6'-carboxílico y otros metabolitos principales",
          actividad: 'inactivo',
          nota: 'Sin actividad medible o solo débil sobre la COX-2; ninguno inhibe la COX-1.',
          ref: {
            f: 'cima-64931',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Estos metabolitos principales no demuestran actividad medible',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Casi toda la eliminación es por metabolismo seguido de excreción renal: tras una dosis intravenosa marcada, el 70 % de la radiactividad salió por la orina y el 20 % por las heces, sobre todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Casi toda la eliminación es por metabolismo seguido de excreción renal: tras una dosis intravenosa marcada, el 70 % de la radiactividad salió por la orina y el 20 % por las heces, sobre todo como metabolitos.',
          ref: {
            f: 'cima-64931',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'se recuperó el 70 % de la radiactividad en orina, y el 20% en heces, principalmente como metabolitos',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'En el estado estacionario el cociente de acumulación corresponde a una semivida de unas 22 horas.',
          ref: { f: 'cima-64931', sec: '5.2 · Propiedades farmacocinéticas', cita: 'que corresponde a una semivida de unas 22 horas', codigo: 'FT 5.2' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '100 (aprox.)',
      unidad: '%',
      analito: 'etoricoxib',
      ref: {
        f: 'cima-64931',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta es aproximadamente del 100 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '92 (aprox.)',
      unidad: '%',
      analito: 'etoricoxib',
      ref: {
        f: 'cima-64931',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Etoricoxib se une a proteínas plasmáticas humanas en aproximadamente un 92 %',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '120 (aprox.)',
      unidad: 'L',
      analito: 'etoricoxib',
      ref: {
        f: 'cima-64931',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'El volumen de distribución (V dss ) en el estado estacionario es de unos 120 litros',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '22 (aprox.)',
      unidad: 'h',
      analito: 'etoricoxib',
      condiciones: 'estado estacionario',
      ref: { f: 'cima-64931', sec: '5.2 · Propiedades farmacocinéticas', cita: 'que corresponde a una semivida de unas 22 horas', codigo: 'FT 5.2' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '70',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis intravenosa marcada',
      origen: 'otra-via',
      ref: { f: 'cima-64931', sec: '5.2 · Propiedades farmacocinéticas', cita: 'se recuperó el 70 % de la radiactividad en orina', codigo: 'FT 5.2' }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-64931', '64931', 'EXXIV 60 mg COMPRIMIDOS RECUBIERTOS CON PELICULA (Organon Salud S.L.)', '2021-07-15', '2026-11-15'),
    rengPubchem(123619, 'etoricoxib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
