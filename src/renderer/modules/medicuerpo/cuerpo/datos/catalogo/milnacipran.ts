import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'milnacipran',
    nombre: 'Milnaciprán',
    clase: 'Inhibidor selectivo de la recaptación de serotonina y noradrenalina (fibromialgia)',
    sinonimos: [ 'milnacipran', 'Savella' ],
    formula: 'C15H22N2O',
    masaMolar: 246.35,
    smiles: 'CCN(CC)C(=O)[C@@]1(C[C@@H]1CN)C2=CC=CC=C2',
    inchikey: 'GJJFMKBJSRMPLA-HIFRSBDPSA-N',
    cid: 65833,
    iupac: 'cis-(1R,2S)-2-(aminomethyl)-N,N-diethyl-1-phenylcyclopropane-1-carboxamide',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'milnacipran-oral',
      producto: 'Savella · comprimido recubierto con película',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de milnaciprán',
        ref: { f: 'dailymed-milnacipran', sec: '11 · Descripción', cita: 'Milnacipran hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'dibasic calcium phosphate dihydrate',
        'povidone, unspecified',
        'carboxymethylcellulose calcium',
        'silicon dioxide',
        'magnesium stearate',
        'talc',
        'fd&c blue no. 2',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'polyvinyl alcohol, unspecified'
      ],
      usos: {
        t: 'Tratamiento de la fibromialgia; no está aprobado en pacientes pediátricos.',
        ref: { f: 'dailymed-milnacipran', sec: '1 · Indicaciones', cita: 'SAVELLA is indicated for the management of fibromyalgia', codigo: '34067-9' }
      },
      fuente: 'dailymed-milnacipran',
      advertencias: [
        {
          titulo: 'Suicidalidad y antidepresivos',
          texto: 'Es un IRSN parecido a fármacos antidepresivos, que aumentaron el riesgo de pensamientos y conductas suicidas en niños, adolescentes y adultos jóvenes.',
          organos: [],
          ref: {
            f: 'dailymed-milnacipran',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Síndrome serotoninérgico',
          texto: 'El riesgo aumenta con otros serotoninérgicos, pero también solo; si aparece, suspender y dar tratamiento de soporte.',
          organos: [],
          ref: {
            f: 'dailymed-milnacipran',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serotonin Syndrome : Increased risk when co-administered with other serotonergic agents, but also when taken alone',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Aumento de la presión arterial y la frecuencia cardíaca',
          texto: 'Puede aumentar la presión arterial y la frecuencia cardíaca; medirlas antes de empezar y periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-milnacipran',
            sec: '5 · Advertencias y precauciones',
            cita: 'SAVELLA may increase blood pressure and heart rate',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más y más que con placebo): náuseas, cefalea, estreñimiento, mareo, insomnio, sofocos, hiperhidrosis, vómitos, palpitaciones, aumento de la frecuencia cardíaca, sequedad de boca e hipertensión.',
          '34084-4',
          'most frequently occurring adverse reactions (≥ 5% and greater than placebo) were nausea, headache, constipation, dizziness, insomnia, hot flush, hyperhidrosis, vomiting, palpitations, heart rate increased, dry mouth, and hypertension'
        ],
        [
          'En los ensayos controlados en fibromialgia, el 23 % con 100 mg/día y el 26 % con 200 mg/día dejaron el tratamiento antes de tiempo por reacciones adversas, frente al 12 % con placebo.',
          '34084-4',
          '23% of patients treated with SAVELLA 100 mg/day, 26% of patients treated with SAVELLA 200 mg/day discontinued prematurely due to adverse reactions, compared to 12% of patients treated'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 12.5 mg, 25 mg, 50 mg o 100 mg por comprimido, según la etiqueta; el activo va como clorhidrato de milnaciprán. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la fibromialgia; no está aprobado en pacientes pediátricos.',
    actua: 'El mecanismo de su acción inhibidora central del dolor se desconoce; en estudios preclínicos inhibe de forma potente la recaptación neuronal de noradrenalina y serotonina.',
    recorrido: 'Se absorbe tras la toma oral con la Cmax a las 2-4 horas; los alimentos no afectan a la absorción y la biodisponibilidad absoluta es de alrededor del 85 %-90 %. Se elimina sobre todo por excreción renal: alrededor del 55 % de la dosis sale por la orina sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '3 · Formas y concentraciones',
            cita: 'Film-coated, immediate-release tablets in four strengths',
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
      ocurre: 'Se absorbe tras la toma oral con la Cmax a las 2-4 horas; los alimentos no afectan a la absorción y la biodisponibilidad absoluta es de alrededor del 85 %-90 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe tras la toma oral con la Cmax a las 2-4 horas; los alimentos no afectan a la absorción y la biodisponibilidad absoluta es de alrededor del 85 %-90 %.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'SAVELLA is absorbed following oral administration with maximum concentrations (C max ) reached within 2 to 4 hours post dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no afectan a la absorción y la biodisponibilidad absoluta es de alrededor del 85 % al 90 %.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption of SAVELLA is not affected by food. The absolute bioavailability is approximately 85% to 90%',
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
      ocurre: 'El volumen de distribución medio tras una dosis intravenosa es de unos 400 L y la unión a las proteínas del plasma del 13 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución medio tras una dosis intravenosa es de unos 400 L y la unión a las proteínas del plasma del 13 %.',
          ref: { f: 'dailymed-milnacipran', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is 13%', codigo: '43682-4' }
        },
        {
          t: 'Volumen de distribución medio tras una dosis intravenosa de unos 400 L.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean volume of distribution of milnacipran following a single intravenous dose to healthy subjects is approximately 400 L',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis intravenosa'
        }
      ],
      accion: {
        diana: 'Transportadores de noradrenalina y serotonina',
        efecto: 'El mecanismo de su acción inhibidora central del dolor se desconoce; en estudios preclínicos inhibe de forma potente la recaptación neuronal de noradrenalina y serotonina.',
        lugar: [],
        datos: [
          {
            t: 'El mecanismo de su acción inhibidora central del dolor se desconoce; en estudios preclínicos inhibe de forma potente la recaptación neuronal de noradrenalina y serotonina.',
            ref: {
              f: 'dailymed-milnacipran',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Preclinical studies have shown that milnacipran is a potent inhibitor of neuronal norepinephrine and serotonin reuptake',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolito principal excretado en la orina es el carbamoil-O-glucurónido del l-milnaciprán (alrededor del 17 % de la dosis); también se forma N-desetil-milnaciprán (alrededor del 8 %).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolito principal excretado en la orina es el carbamoil-O-glucurónido del l-milnaciprán (alrededor del 17 % de la dosis); también se forma N-desetil-milnaciprán (alrededor del 8 %).',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The l - milnacipran carbamoyl-O-glucuronide was the major metabolite excreted in urine and accounted for approximately 17% of the dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 8 % de la dosis se excretó en la orina como N-desetil-milnaciprán.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 8% of the dose was excreted in urine as the N-desethyl milnacipran metabolite',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Carbamoil-O-glucurónido de l-milnaciprán',
          actividad: 'desconocida',
          nota: 'Metabolito urinario principal; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'The l - milnacipran carbamoyl-O-glucuronide was the major metabolite excreted in urine',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por excreción renal: alrededor del 55 % de la dosis sale por la orina sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por excreción renal: alrededor del 55 % de la dosis sale por la orina sin cambios.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'Milnacipran and its metabolites are eliminated primarily by renal excretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 55 % de la dosis se excretó en la orina como milnaciprán sin cambios.',
          ref: {
            f: 'dailymed-milnacipran',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 55% of the dose was excreted in urine as unchanged milnacipran',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '2-4',
      unidad: 'h',
      analito: 'milnaciprán',
      ref: {
        f: 'dailymed-milnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'maximum concentrations (C max ) reached within 2 to 4 hours post dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '85-90 (aprox.)',
      unidad: '%',
      analito: 'milnaciprán',
      ref: { f: 'dailymed-milnacipran', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability is approximately 85% to 90%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras dosis intravenosa',
      valor: '400 (aprox.)',
      unidad: 'L',
      analito: 'milnaciprán',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-milnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean volume of distribution of milnacipran following a single intravenous dose to healthy subjects is approximately 400 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '13',
      unidad: '%',
      analito: 'milnaciprán',
      ref: { f: 'dailymed-milnacipran', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is 13%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada sin cambios en la orina',
      valor: '55 (aprox.)',
      unidad: '% de la dosis',
      analito: 'milnaciprán inalterado',
      ref: {
        f: 'dailymed-milnacipran',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 55% of the dose was excreted in urine as unchanged milnacipran',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-milnacipran', '16a4a314-f97e-4e91-95e9-576a3773d284', 'SAVELLA (MILNACIPRAN HYDROCHLORIDE) TABLET, FILM COATED SAVELLA (MILNACIPRAN HYDROCHLORIDE) KIT', 'Savella', '41', '2026-08-27', '2026-11-19'),
    rengPubchem(65833, 'milnacipran', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
