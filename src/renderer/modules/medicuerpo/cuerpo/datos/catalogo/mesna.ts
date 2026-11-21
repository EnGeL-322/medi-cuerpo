import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mesna',
    nombre: 'Mesna',
    clase: 'Agente citoprotector urológico (tiol)',
    sinonimos: [ 'mesna', 'Mesnex' ],
    formula: 'C2H5NaO3S2',
    masaMolar: 164.18,
    smiles: 'C(CS(=O)(=O)[O-])S.[Na+]',
    inchikey: 'XOGTZOOQQBDUSI-UHFFFAOYSA-M',
    cid: 23662354,
    iupac: 'sodium 2-sulfanylethanesulfonate',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'mesna-oral',
      producto: 'MESNEX · comprimido recubierto con película',
      titular: 'BAXTER HEALTHCARE COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose',
        'cellulose, microcrystalline',
        'calcium phosphate, dibasic, dihydrate',
        'starch, corn',
        'povidone, unspecified',
        'magnesium stearate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'dimethicone'
      ],
      usos: {
        t: 'Profilaxis para reducir la cistitis hemorrágica causada por la ifosfamida.',
        ref: {
          f: 'dailymed-mesna',
          sec: '1 · Indicaciones',
          cita: 'MESNEX is indicated as a prophylactic agent in reducing the incidence of ifosfamide-induced hemorrhagic cystitis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-mesna',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Se han descrito reacciones anafilácticas.',
          organos: [],
          ref: {
            f: 'dailymed-mesna',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions: Anaphylactic reactions have been reported',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Antecedentes de reacciones a compuestos tiol',
          texto: 'Se han descrito reacciones de hipersensibilidad a la mesna y a la amifostina, otro compuesto tiol.',
          organos: [],
          ref: {
            f: 'dailymed-mesna',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypersensitivity reactions to mesna and to amifostine, another thiol compound, have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con ifosfamida, las más frecuentes (más del 10 %): náuseas, vómitos, estreñimiento, leucopenia, fatiga, fiebre, anorexia y trombocitopenia, entre otras.',
          '34084-4',
          'The most common adverse reactions (> 10%) when MESNEX is given with ifosfamide are nausea, vomiting, constipation, leukopenia, fatigue, fever, anorexia, thrombocytopenia'
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
    contiene: 'Comprimido recubierto con película: 400 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Profilaxis para reducir la cistitis hemorrágica causada por la ifosfamida.',
    actua: 'Reacciona químicamente con los metabolitos tóxicos de la ifosfamida para la vía urinaria (acroleína y 4-hidroxi-ifosfamida) y los neutraliza, de modo que no dañan la vejiga.',
    recorrido: 'El pico de mesna libre aparece entre 1,5 y 4 horas; la biodisponibilidad oral es del 58 % para la mesna libre y del 89 % para la total. Tras 800 mg por vía intravenosa, alrededor del 32 % de la dosis se eliminó en la orina en 24 horas como mesna y el 33 % como dimesna.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película y ranurado: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película y ranurado: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-mesna',
            sec: '3 · Formas y concentraciones',
            cita: 'tablets: 400 mg film-coated tablets with functional score',
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
      ocurre: 'El pico de mesna libre aparece entre 1,5 y 4 horas; la biodisponibilidad oral es del 58 % para la mesna libre y del 89 % para la total.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico de mesna libre aparece entre 1,5 y 4 horas; la biodisponibilidad oral es del 58 % para la mesna libre y del 89 % para la total.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, peak plasma concentrations were reached within 1.5 to 4 hours and 3 to 7 hours for free mesna and total mesna',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad oral media es del 58 % para la mesna libre y del 89 % para la mesna total.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Oral bioavailability averaged 58% (range 45 to 71%) for free mesna and 89% (range 74 to 104%) for total mesna',
            codigo: '43682-4'
          },
          poblacion: 'voluntarios sanos'
        },
        {
          t: 'La comida no afecta a la disponibilidad urinaria de la mesna oral.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Food does not affect the urinary availability of orally administered MESNEX',
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
      ocurre: 'Tras la vía intravenosa, su volumen de distribución aparente (0,652 L/kg) indica que se reparte por el agua corporal total.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras la vía intravenosa, su volumen de distribución aparente (0,652 L/kg) indica que se reparte por el agua corporal total.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean apparent volume of distribution (V d ) for mesna is 0.652 ± 0.242 L/kg after intravenous administration which suggests distribution to total body water (plasma, extracellular fluid, and intracellular water)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Acroleína y metabolitos urotóxicos de la ifosfamida',
        efecto: 'Reacciona químicamente con los metabolitos tóxicos de la ifosfamida para la vía urinaria (acroleína y 4-hidroxi-ifosfamida) y los neutraliza, de modo que no dañan la vejiga.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Reacciona químicamente con los metabolitos tóxicos de la ifosfamida para la vía urinaria (acroleína y 4-hidroxi-ifosfamida) y los neutraliza, de modo que no dañan la vejiga.',
            ref: {
              f: 'dailymed-mesna',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Mesna also binds to the double bonds of acrolein and to other urotoxic metabolites and inhibits their effects on the bladder',
              codigo: '43679-0'
            }
          },
          {
            t: 'Reacciona con la acroleína y la 4-hidroxi-ifosfamida, metabolitos urotóxicos de la ifosfamida, y los desintoxica.',
            ref: {
              f: 'dailymed-mesna',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Mesna reacts chemically with the urotoxic ifosfamide metabolites, acrolein and 4-hydroxy-ifosfamide, resulting in their detoxification',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Como el sistema fisiológico cisteína-cistina, se oxida con rapidez a su metabolito principal, el disulfuro de mesna (dimesna).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Como el sistema fisiológico cisteína-cistina, se oxida con rapidez a su metabolito principal, el disulfuro de mesna (dimesna).',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Analogous to the physiological cysteine-cystine system, mesna is rapidly oxidized to its major metabolite, mesna disulfide (dimesna)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 800 mg por vía intravenosa, alrededor del 32 % de la dosis se eliminó en la orina en 24 horas como mesna y el 33 % como dimesna.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 800 mg por vía intravenosa, alrededor del 32 % de la dosis se eliminó en la orina en 24 horas como mesna y el 33 % como dimesna.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Following intravenous administration of a single 800 mg dose, approximately 32% and 33% of the administered dose was eliminated in the urine in 24 hours as mesna and dimesna',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las semividas de eliminación plasmática de la mesna y la dimesna son de 0,36 y 1,17 horas.',
          ref: {
            f: 'dailymed-mesna',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean plasma elimination half-lives of mesna and dimesna are 0.36 hours and 1.17 hours, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de mesna libre',
      valor: '1,5-4',
      unidad: 'h',
      analito: 'mesna libre',
      ref: {
        f: 'dailymed-mesna',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations were reached within 1.5 to 4 hours and 3 to 7 hours for free mesna and total mesna',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral de la mesna libre',
      valor: '58',
      unidad: '%',
      analito: 'mesna libre',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-mesna',
        sec: '12.3 · Farmacocinética',
        cita: 'Oral bioavailability averaged 58% (range 45 to 71%) for free mesna',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (vía intravenosa)',
      valor: '0,652',
      unidad: 'L/kg',
      analito: 'mesna',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-mesna',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean apparent volume of distribution (V d ) for mesna is 0.652 ± 0.242 L/kg after intravenous administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '0,36',
      unidad: 'h',
      analito: 'mesna',
      ref: {
        f: 'dailymed-mesna',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean plasma elimination half-lives of mesna and dimesna are 0.36 hours and 1.17 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada en la orina como mesna en 24 horas (vía intravenosa)',
      valor: '32 (aprox.)',
      unidad: '% de la dosis',
      analito: 'mesna',
      condiciones: '800 mg por vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-mesna',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 32% and 33% of the administered dose was eliminated in the urine in 24 hours as mesna and dimesna',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mesna', '4a51ffdb-f59f-4e02-b3c4-f3457ab7b514', 'MESNEX (MESNA) TABLET, FILM COATED', 'MESNEX', '17', '2026-07-23', '2026-11-19'),
    rengPubchem(23662354, 'mesna', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
