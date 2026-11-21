import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'naloxegol',
    nombre: 'Naloxegol',
    clase: 'Antagonista opioide de acción periférica (derivado pegilado de la naloxona)',
    sinonimos: [ 'naloxegol', 'Movantik' ],
    formula: 'C34H53NO11',
    masaMolar: 651.8,
    smiles: 'COCCOCCOCCOCCOCCOCCOCCO[C@H]1CC[C@]2([C@H]3CC4=C5[C@]2([C@H]1OC5=C(C=C4)O)CCN3CC=C)O',
    inchikey: 'XNKCCCKFOQNXKV-ZRSCBOBOSA-N',
    cid: 56959087,
    iupac: '(4R,4aS,7S,7aR,12bS)-7-[2-[2-[2-[2-[2-[2-(2-methoxyethoxy)ethoxy]ethoxy]ethoxy]ethoxy]ethoxy]ethoxy]-3-prop-2-enyl-1,2,4,5,6,7,7a,13-octahydro-4,12-methanobenzofuro[3,2-e]isoquinoline-4a,9-diol',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'naloxegol-oral',
      producto: 'MOVANTIK · comprimido recubierto con película',
      titular: 'AVERITAS PHARMA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg o 25 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Oxalato de naloxegol',
        ref: { f: 'dailymed-naloxegol', sec: '11 · Descripción', cita: 'contains naloxegol oxalate as the active ingredient', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'propyl gallate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol 400',
        'ferric oxide red',
        'ferrosoferric oxide',
        'water'
      ],
      usos: {
        t: 'Estreñimiento causado por opioides en adultos con dolor crónico no oncológico.',
        ref: {
          f: 'dailymed-naloxegol',
          sec: '1 · Indicaciones',
          cita: 'treatment of opioid-induced constipation (OIC) in adult patients with chronic non-cancer pain',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-naloxegol',
      advertencias: [
        {
          titulo: 'Síntomas de abstinencia de opioides',
          texto: 'Han aparecido sudoración, escalofríos, diarrea, dolor abdominal, ansiedad, irritabilidad y bostezos.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-naloxegol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Clusters of symptoms consistent with opioid withdrawal, including hyperhidrosis, chills, diarrhea, abdominal pain, anxiety, irritability, and yawning have occurred',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Perforación gastrointestinal',
          texto: 'Se han descrito perforaciones con antagonistas opioides de acción periférica.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-naloxegol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of gastrointestinal (GI) perforation have been reported with use of peripherally acting opioid antagonists',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 3 %): dolor abdominal, diarrea, náuseas, gases, vómitos y dolor de cabeza.',
          '34084-4',
          'most common adverse reactions in clinical trials (≥3%) are: abdominal pain, diarrhea, nausea, flatulence, vomiting, and headache'
        ],
        [
          'Datos de exposición de 1497 pacientes en ensayos clínicos.',
          '34084-4',
          'The data described below reflect exposure to MOVANTIK in 1497 patients in clinical trial'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 12.5 mg o 25 mg por comprimido, según la etiqueta; el activo va como oxalato de naloxegol. Los excipientes no son el principio activo.',
    usos: 'Estreñimiento causado por opioides en adultos con dolor crónico no oncológico.',
    actua: 'Bloquea los receptores opioides mu del tubo digestivo; como es sustrato de la glucoproteína P y pasa mal las barreras, actúa sobre el intestino y no sobre el dolor.',
    recorrido: 'Se absorbe con el máximo en menos de 2 horas; en la mayoría aparece un segundo pico 0,4-3 horas después. Una comida rica en grasa aumenta la absorción. Del marcado se recuperó el 68 % en las heces y el 16 % en la orina; menos del 6 % de la dosis sale como naloxegol sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película, de 12,5 mg o 25 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película, de 12,5 mg o 25 mg.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '3 · Formas y concentraciones',
            cita: '12.5 mg supplied as mauve, oval, biconvex, film-coated',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con el máximo en menos de 2 horas; en la mayoría aparece un segundo pico 0,4-3 horas después. Una comida rica en grasa aumenta la absorción.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con el máximo en menos de 2 horas; en la mayoría aparece un segundo pico 0,4-3 horas después. Una comida rica en grasa aumenta la absorción.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: 'MOVANTIK is absorbed with peak concentrations (C max ) achieved at less than 2 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comida grasa, la Cmax aumentó cerca de un 30 % y el AUC un 45 %.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max and AUC were increased by approximately 30% and 45%, respectively',
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
      ocurre: 'La unión a proteínas del plasma es baja (~ 4,2 %); el volumen aparente en la fase terminal va de 968 a 2140 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es baja (~ 4,2 %); el volumen aparente en la fase terminal va de 968 a 2140 L.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of naloxegol in humans was low (~4.2%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu del tubo digestivo',
        efecto: 'Bloquea los receptores opioides mu del tubo digestivo; como es sustrato de la glucoproteína P y pasa mal las barreras, actúa sobre el intestino y no sobre el dolor.',
        lugar: [ 'intestino-delgado', 'intestino-grueso' ],
        datos: [
          {
            t: 'Bloquea los receptores opioides mu del tubo digestivo; como es sustrato de la glucoproteína P y pasa mal las barreras, actúa sobre el intestino y no sobre el dolor.',
            ref: {
              f: 'dailymed-naloxegol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Naloxegol is an antagonist of opioid binding at the mu-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza sobre todo el sistema CYP3A; se identificaron 6 metabolitos (N-desalquilación, O-desmetilación, oxidación y pérdida parcial de la cadena de PEG).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza sobre todo el sistema CYP3A; se identificaron 6 metabolitos (N-desalquilación, O-desmetilación, oxidación y pérdida parcial de la cadena de PEG).',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: 'Naloxegol is metabolized primarily by the CYP3A enzyme system',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Seis metabolitos',
          actividad: 'desconocida',
          nota: 'Sin metabolito principal.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: 'The activity of the metabolites at the opioid receptor has not been determined',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Del marcado se recuperó el 68 % en las heces y el 16 % en la orina; menos del 6 % de la dosis sale como naloxegol sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Del marcado se recuperó el 68 % en las heces y el 16 % en la orina; menos del 6 % de la dosis sale como naloxegol sin cambios por la orina.',
          ref: {
            f: 'dailymed-naloxegol',
            sec: '12.3 · Farmacocinética',
            cita: '68% and 16% of total administered dose were recovered in the feces and urine, respectively',
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
      valor: '< 2',
      unidad: 'h',
      analito: 'naloxegol',
      ref: { f: 'dailymed-naloxegol', sec: '12.3 · Farmacocinética', cita: 'achieved at less than 2 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax con comida rica en grasa',
      valor: '30 (aprox.)',
      unidad: '%',
      analito: 'naloxegol',
      ref: {
        f: 'dailymed-naloxegol',
        sec: '12.3 · Farmacocinética',
        cita: 'The C max and AUC were increased by approximately 30% and 45%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '4,2 (aprox.)',
      unidad: '%',
      analito: 'naloxegol',
      ref: {
        f: 'dailymed-naloxegol',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of naloxegol in humans was low (~4.2%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente en la fase terminal',
      valor: '968-2140',
      unidad: 'L',
      analito: 'naloxegol',
      poblacion: 'voluntarios sanos',
      ref: { f: 'dailymed-naloxegol', sec: '12.3 · Farmacocinética', cita: 'ranged from 968 L to 2140 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '6-11',
      unidad: 'h',
      analito: 'naloxegol',
      condiciones: 'estudio de farmacología clínica',
      ref: {
        f: 'dailymed-naloxegol',
        sec: '12.3 · Farmacocinética',
        cita: 'the half-life of naloxegol at therapeutic doses ranged from 6 to 11 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '68',
      unidad: '% de la dosis',
      analito: 'naloxegol y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-naloxegol',
        sec: '12.3 · Farmacocinética',
        cita: '68% and 16% of total administered dose were recovered in the feces and urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '16',
      unidad: '% de la dosis',
      analito: 'naloxegol y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-naloxegol',
        sec: '12.3 · Farmacocinética',
        cita: '68% and 16% of total administered dose were recovered in the feces and urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-naloxegol', '28596788-b73f-4247-85fc-3105f51fff5a', 'MOVANTIK (NALOXEGOL OXALATE) TABLET, FILM COATED', 'MOVANTIK', '5', '2026-09-02', '2026-11-12'),
    rengPubchem(56959087, 'naloxegol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
