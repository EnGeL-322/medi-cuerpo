import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bosutinib',
    nombre: 'Bosutinib',
    clase: 'Inhibidor de tirosina quinasas (BCR-ABL y Src)',
    sinonimos: [ 'bosutinib', 'Bosulif' ],
    formula: 'C26H29Cl2N5O3',
    masaMolar: 530.4,
    smiles: 'CN1CCN(CC1)CCCOC2=C(C=C3C(=C2)N=CC(=C3NC4=CC(=C(C=C4Cl)Cl)OC)C#N)OC',
    inchikey: 'UBPYILGKFZZVDX-UHFFFAOYSA-N',
    cid: 5328940,
    iupac: '4-(2,4-dichloro-5-methoxyanilino)-6-methoxy-7-[3-(4-methylpiperazin-1-yl)propoxy]quinoline-3-carbonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'bosutinib-oral',
      producto: 'BOSULIF · comprimido recubierto con película',
      titular: 'U.S. PHARMACEUTICALS',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '100 mg o 400 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Monohidrato de bosutinib',
        ref: { f: 'dailymed-bosutinib', sec: '11 · Descripción', cita: 'Bosutinib monohydrate', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'povidone k25',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc',
        'ferric oxide yellow',
        'poloxamer 188'
      ],
      usos: {
        t: 'Tratamiento de la leucemia mieloide crónica en fase crónica con cromosoma Filadelfia positivo, recién diagnosticada o resistente o intolerante a un tratamiento previo, en adultos y niños desde 1 año.',
        ref: {
          f: 'dailymed-bosutinib',
          sec: '1 · Indicaciones',
          cita: 'Adult and pediatric patients 1 year of age and older with chronic phase (CP) Philadelphia chromosome-positive chronic myelogenous leukemia (Ph+ CML), newly-diagnosed or resistant or intolerant to prior therapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bosutinib',
      advertencias: [
        {
          titulo: 'Toxicidad gastrointestinal',
          texto: 'Con el tratamiento se producen diarrea, náuseas, vómitos y dolor abdominal.',
          organos: [ 'intestino-delgado', 'estomago' ],
          ref: {
            f: 'dailymed-bosutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Diarrhea, nausea, vomiting, and abdominal pain occur with BOSULIF treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mielosupresión',
          texto: 'Se producen trombocitopenia, anemia y neutropenia.',
          organos: [ 'medula-osea', 'sangre' ],
          ref: {
            f: 'dailymed-bosutinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Thrombocytopenia, anemia and neutropenia occur',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, dolor abdominal, vómitos, náuseas, erupción, fatiga, disfunción hepática, cefalea y fiebre, entre otras.',
          '34084-4',
          'are diarrhea, abdominal pain, vomiting, nausea, rash, fatigue, hepatic dysfunction, headache, pyrexia'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la retención de líquidos.',
          '34084-4',
          'Fluid retention [see Warnings and Precautions (5.5) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 100 mg o 400 mg por comprimido, según la etiqueta; el activo va como monohidrato de bosutinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la leucemia mieloide crónica en fase crónica con cromosoma Filadelfia positivo, recién diagnosticada o resistente o intolerante a un tratamiento previo, en adultos y niños desde 1 año.',
    actua: 'Inhibe la quinasa BCR-ABL que impulsa la leucemia mieloide crónica y también las quinasas de la familia Src (Src, Lyn y Hck).',
    recorrido: 'La biodisponibilidad absoluta fue del 34 % en sujetos sanos. Tras una dosis oral única marcada sin comida, el 91,3 % de la dosis se recuperó en las heces y el 3,3 % en la orina.'
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
            f: 'dailymed-bosutinib',
            sec: '3 · Formas y concentraciones',
            cita: '100 mg: yellow, oval, biconvex, film-coated tablets',
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
      ocurre: 'La biodisponibilidad absoluta fue del 34 % en sujetos sanos.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta fue del 34 % en sujetos sanos.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability was 34% in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasa, la Cmax aumentó 1,8 veces y el AUC 1,7 veces con los comprimidos, frente al ayuno.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Bosutinib C max increased 1.8-fold and AUC increased 1.7-fold when BOSULIF tablets were given with a high fat meal to healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasa'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas es del 94 % in vitro y del 96 % ex vivo, independiente de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas es del 94 % in vitro y del 96 % ex vivo, independiente de la concentración.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Bosutinib protein binding is 94% in vitro and 96% ex vivo , and is independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio es de 6080 L tras una dosis oral de 500 mg.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (SD) apparent bosutinib volume of distribution is 6080 (1230) L after an oral dose of 500 mg of BOSULIF',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Quinasa BCR-ABL y quinasas de la familia Src',
        efecto: 'Inhibe la quinasa BCR-ABL que impulsa la leucemia mieloide crónica y también las quinasas de la familia Src (Src, Lyn y Hck).',
        lugar: [ 'medula-osea', 'sangre' ],
        datos: [
          {
            t: 'Inhibe la quinasa BCR-ABL que impulsa la leucemia mieloide crónica y también las quinasas de la familia Src (Src, Lyn y Hck).',
            ref: {
              f: 'dailymed-bosutinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Bosutinib inhibits the BCR-ABL kinase that promotes CML; it is also an inhibitor of Src-family kinases including Src, Lyn, and Hck',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4.',
          ref: { f: 'dailymed-bosutinib', sec: '12.3 · Farmacocinética', cita: 'Bosutinib is primarily metabolized by CYP3A4', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'bilis', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única marcada sin comida, el 91,3 % de la dosis se recuperó en las heces y el 3,3 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única marcada sin comida, el 91,3 % de la dosis se recuperó en las heces y el 3,3 % en la orina.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single oral dose of [ 14 C] radiolabeled bosutinib without food, 91.3% of the dose was recovered in feces and 3.3% of the dose recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de 22,5 horas.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (SD) bosutinib terminal phase elimination half life (t ½ ) was 22.5 (1.7) hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'El aclaramiento aparente medio es de 189 L/h tras una dosis oral única.',
          ref: {
            f: 'dailymed-bosutinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean (SD) apparent clearance was 189 (48) L/h following a single oral dose of BOSULIF',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '34',
      unidad: '%',
      analito: 'bosutinib',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-bosutinib', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability was 34% in healthy subjects', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '94',
      unidad: '%',
      analito: 'bosutinib',
      condiciones: 'in vitro',
      ref: { f: 'dailymed-bosutinib', sec: '12.3 · Farmacocinética', cita: 'Bosutinib protein binding is 94% in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '6.080',
      unidad: 'L',
      analito: 'bosutinib',
      condiciones: 'dosis oral de 500 mg',
      ref: {
        f: 'dailymed-bosutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (SD) apparent bosutinib volume of distribution is 6080 (1230) L after an oral dose of 500 mg of BOSULIF',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '22,5',
      unidad: 'h',
      analito: 'bosutinib',
      ref: {
        f: 'dailymed-bosutinib',
        sec: '12.3 · Farmacocinética',
        cita: 'terminal phase elimination half life (t ½ ) was 22.5 (1.7) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente medio',
      valor: '189',
      unidad: 'L/h',
      analito: 'bosutinib',
      condiciones: 'dosis oral única',
      ref: { f: 'dailymed-bosutinib', sec: '12.3 · Farmacocinética', cita: 'the mean (SD) apparent clearance was 189 (48) L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '91,3',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única de bosutinib marcado sin comida',
      ref: { f: 'dailymed-bosutinib', sec: '12.3 · Farmacocinética', cita: '91.3% of the dose was recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bosutinib', 'd5929f91-6496-4c0e-97e8-0bd524e15763', 'BOSULIF (BOSUTINIB) TABLET, FILM COATED', 'BOSULIF', '6', '2026-05-29', '2026-11-15'),
    rengPubchem(5328940, 'bosutinib', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
