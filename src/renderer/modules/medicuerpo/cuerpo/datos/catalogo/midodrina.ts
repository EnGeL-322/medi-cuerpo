import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'midodrina',
    nombre: 'Midodrina',
    clase: 'Agonista alfa-1 adrenérgico (profármaco vasopresor)',
    sinonimos: [ 'midodrine' ],
    formula: 'C12H18N2O4',
    masaMolar: 254.28,
    smiles: 'COC1=CC(=C(C=C1)OC)C(CNC(=O)CN)O',
    inchikey: 'PTKSEFOSCHHMPD-UHFFFAOYSA-N',
    cid: 4195,
    iupac: '2-amino-N-[2-(2,5-dimethoxyphenyl)-2-hydroxyethyl]acetamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'midodrina-oral',
      producto: 'Midodrine Hydrochloride · comprimido',
      titular: 'MYLAN PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de midodrina',
        ref: { f: 'dailymed-midodrina', sec: '11 · Descripción', cita: 'Midodrine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'croscarmellose sodium', 'magnesium stearate', 'microcrystalline cellulose 200', 'silicon dioxide', 'sodium lauryl sulfate', 'starch, corn' ],
      usos: {
        t: 'Tratamiento de la hipotensión ortostática sintomática.',
        ref: {
          f: 'dailymed-midodrina',
          sec: '1 · Indicaciones',
          cita: 'Midodrine hydrochloride tablets are indicated for the treatment of symptomatic orthostatic hypotension (OH)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-midodrina',
      advertencias: [
        {
          titulo: 'Hipertensión en decúbito',
          texto: 'La reacción adversa potencialmente más grave es una elevación marcada de la presión arterial en decúbito supino.',
          organos: [ 'vasos', 'corazon' ],
          ref: {
            f: 'dailymed-midodrina',
            sec: 'Advertencias',
            cita: 'The most potentially serious adverse reaction associated with midodrine hydrochloride tablets therapy is marked elevation of supine arterial blood pressure (supine hypertension)',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Uso restringido',
          texto: 'Puede elevar mucho la presión arterial en decúbito supino y debe usarse en pacientes cuya vida esté muy afectada pese a la atención clínica habitual.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-midodrina',
            sec: 'Advertencia destacada',
            cita: 'Because midodrine hydrochloride tablets can cause marked elevation of supine blood pressure, it should be used in patients whose lives are considerably impaired despite standard clinical care',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en los ensayos controlados: hipertensión en decúbito y sentado, parestesias y prurito (sobre todo en el cuero cabelludo), piel de gallina, escalofríos, urgencia, retención y frecuencia urinarias.',
          '34084-4',
          'The most frequent adverse reactions seen in controlled trials were supine and sitting hypertension; paresthesia and pruritus, mainly of the scalp; goosebumps; chills; urinary urge; urinary retention and urinary frequency'
        ],
        [ 'Las parestesias y el prurito se localizan sobre todo en el cuero cabelludo.', '34084-4', 'paresthesia and pruritus, mainly of the scalp' ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg, 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de midodrina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipotensión ortostática sintomática.',
    actua: 'Su metabolito activo, la desglimidodrina, activa los receptores alfa-adrenérgicos de las arteriolas y las venas, lo que aumenta el tono vascular y eleva la presión arterial; no estimula los receptores beta cardíacos.',
    recorrido: 'Tras la administración oral se absorbe con rapidez; la biodisponibilidad absoluta, medida como desglimidodrina, es del 93 %. La eliminación renal de la midodrina es insignificante; el aclaramiento renal de la desglimidodrina es de unos 385 mL/min, la mayor parte (alrededor del 80 %) por secreción renal activa.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada; es un profármaco.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada; es un profármaco.',
          ref: { f: 'dailymed-midodrina', sec: '12.3 · Farmacocinética', cita: 'Midodrine hydrochloride tablets are a prodrug', codigo: '43682-4' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras la administración oral se absorbe con rapidez; la biodisponibilidad absoluta, medida como desglimidodrina, es del 93 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la administración oral se absorbe con rapidez; la biodisponibilidad absoluta, medida como desglimidodrina, es del 93 %.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'After oral administration, midodrine hydrochloride tablets are rapidly absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta de la midodrina, medida como desglimidodrina, es del 93 %.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of midodrine (measured as desglymidodrine) is 93%',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolito alcanza concentraciones máximas en sangre entre 1 y 2 horas después de la dosis; los alimentos no afectan a su biodisponibilidad.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'the metabolite reaches peak blood concentrations about 1 to 2 hours after a dose of midodrine',
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
      ocurre: 'Ni la midodrina ni la desglimidodrina se unen a las proteínas del plasma de forma significativa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Ni la midodrina ni la desglimidodrina se unen a las proteínas del plasma de forma significativa.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Neither midodrine nor desglymidodrine is bound to plasma proteins to any significant extent',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores alfa-1 adrenérgicos',
        efecto: 'Su metabolito activo, la desglimidodrina, activa los receptores alfa-adrenérgicos de las arteriolas y las venas, lo que aumenta el tono vascular y eleva la presión arterial; no estimula los receptores beta cardíacos.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Su metabolito activo, la desglimidodrina, activa los receptores alfa-adrenérgicos de las arteriolas y las venas, lo que aumenta el tono vascular y eleva la presión arterial; no estimula los receptores beta cardíacos.',
            ref: {
              f: 'dailymed-midodrina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'exerts its actions via activation of the alpha-adrenergic receptors of the arteriolar and venous vasculature, producing an increase in vascular tone and elevation of blood pressure',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Parece que la midodrina se transforma en desglimidodrina por desglicinación en muchos tejidos, y ambos compuestos se metabolizan en parte en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Parece que la midodrina se transforma en desglimidodrina por desglicinación en muchos tejidos, y ambos compuestos se metabolizan en parte en el hígado.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'it appears that deglycination of midodrine to desglymidodrine takes place in many tissues, and both compounds are metabolized in part by the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desglimidodrina',
          actividad: 'activo',
          nota: 'Metabolito activo principal, responsable del efecto terapéutico.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'the therapeutic effect of orally administered midodrine is due to the major metabolite desglymidodrine, formed by deglycination of midodrine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación renal de la midodrina es insignificante; el aclaramiento renal de la desglimidodrina es de unos 385 mL/min, la mayor parte (alrededor del 80 %) por secreción renal activa.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación renal de la midodrina es insignificante; el aclaramiento renal de la desglimidodrina es de unos 385 mL/min, la mayor parte (alrededor del 80 %) por secreción renal activa.',
          ref: {
            f: 'dailymed-midodrina',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal elimination of midodrine is insignificant. The renal clearance of desglymidodrine is of the order of 385 mL/minute, most, about 80%, by active renal secretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'La midodrina tiene una semivida de unos 25 minutos y su metabolito, de unas 3 a 4 horas.',
          ref: { f: 'dailymed-midodrina', sec: '12.3 · Farmacocinética', cita: 'has a half-life of about 3 to 4 hours', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (como desglimidodrina)',
      valor: '93',
      unidad: '%',
      analito: 'midodrina',
      ref: {
        f: 'dailymed-midodrina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of midodrine (measured as desglymidodrine) is 93%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico del metabolito',
      valor: '1-2 (aprox.)',
      unidad: 'h',
      analito: 'desglimidodrina',
      ref: {
        f: 'dailymed-midodrina',
        sec: '12.3 · Farmacocinética',
        cita: 'the metabolite reaches peak blood concentrations about 1 to 2 hours after a dose of midodrine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida del metabolito',
      valor: '3-4 (aprox.)',
      unidad: 'h',
      analito: 'desglimidodrina',
      ref: { f: 'dailymed-midodrina', sec: '12.3 · Farmacocinética', cita: 'has a half-life of about 3 to 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento renal de la desglimidodrina',
      valor: '385 (aprox.)',
      unidad: 'mL/min',
      analito: 'desglimidodrina',
      ref: {
        f: 'dailymed-midodrina',
        sec: '12.3 · Farmacocinética',
        cita: 'The renal clearance of desglymidodrine is of the order of 385 mL/minute',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-midodrina', '32fad00b-7e7b-4d35-9e8b-fdc979fdb88e', 'MIDODRINE HYDROCHLORIDE TABLET', 'Midodrine Hydrochloride', '12', '2026-11-09', '2026-11-15'),
    rengPubchem(4195, 'midodrine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
