import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'buprenorfina',
    nombre: 'Buprenorfina',
    clase: 'Agonista parcial del receptor opioide mu (tratamiento de la dependencia de opioides)',
    sinonimos: [ 'buprenorphine hydrochloride', 'Subutex' ],
    formula: 'C29H41NO4',
    masaMolar: 467.6,
    smiles: 'C[C@]([C@H]1C[C@@]23CC[C@@]1([C@H]4[C@@]25CCN([C@@H]3CC6=C5C(=C(C=C6)O)O4)CC7CC7)OC)(C(C)(C)C)O',
    inchikey: 'RMRJXGBAOAMLHD-IHFGGWKQSA-N',
    cid: 644073,
    iupac: '(1S,2S,6R,14R,15R,16R)-5-(cyclopropylmethyl)-16-[(2S)-2-hydroxy-3,3-dimethylbutan-2-yl]-15-methoxy-13-oxa-5-azahexacyclo[13.2.2.12,8.01,6.02,14.012,20]icosa-8(20),9,11-trien-11-ol',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'buprenorfina-oral',
      producto: 'buprenorphine hydrochloride · comprimido',
      titular: 'PAI HOLDINGS, LLC DBA PAI PHARMA',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2 mg u 8 mg de buprenorfina (como clorhidrato) por comprimido sublingual, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de buprenorfina',
        ref: { f: 'dailymed-buprenorfina', sec: '11 · Descripción', cita: 'contain buprenorphine HCL', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',
        'sodium stearyl fumarate',
        'lactose monohydrate',
        'mannitol',
        'anhydrous citric acid',
        'trisodium citrate dihydrate',
        'povidone k30'
      ],
      usos: {
        t: 'Tratamiento de la dependencia de opioides, preferido para la inducción, dentro de un plan completo con apoyo psicosocial.',
        ref: {
          f: 'dailymed-buprenorfina',
          sec: '1 · Indicaciones',
          cita: 'Buprenorphine sublingual tablets is indicated for the treatment of opioid dependence and is preferred for induction',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-buprenorfina',
      advertencias: [
        {
          titulo: 'Adicción, abuso y uso indebido',
          texto: 'Vigilar los signos de desvío o de progresión de la dependencia y las conductas adictivas.',
          organos: [],
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor patients for conditions indicative of diversion or progression of opioid dependence and addictive behaviors',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depresión respiratoria',
          texto: 'Usarla con precaución si la función respiratoria está comprometida.',
          organos: [],
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Use buprenorphine sublingual tablets with caution in patients with compromised respiratory function',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome de abstinencia neonatal',
          texto: 'Advertir a las embarazadas en tratamiento del riesgo de abstinencia neonatal.',
          organos: [],
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Advise pregnant women receiving opioid addiction treatment with buprenorphine sublingual tablets of the risk of neonatal opioid withdrawal syndrome',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Son frecuentes la hipoestesia oral, la glosodinia, el eritema de la mucosa oral, la cefalea, las náuseas, los vómitos, la sudoración excesiva, el estreñimiento, los síntomas de abstinencia y el insomnio, entre otros.',
          '34084-4',
          'Adverse events commonly observed with administration of buprenorphine are oral hypoesthesia, glossodynia, oral mucosal erythema, headache, nausea, vomiting, hyperhidrosis, constipation'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'sublingual' ],
      formaNormalizada: 'comprimido-sublingual'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2 mg u 8 mg de buprenorfina (como clorhidrato) por comprimido sublingual, según la etiqueta; el activo va como clorhidrato de buprenorfina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la dependencia de opioides, preferido para la inducción, dentro de un plan completo con apoyo psicosocial.',
    actua: 'Es agonista parcial del receptor opioide mu y antagonista del receptor kappa.',
    recorrido: 'Se absorbe por la mucosa bajo la lengua con mucha variabilidad entre personas, pero poca en una misma persona. Un estudio de balance de masas recuperó toda la dosis marcada en 11 días: el 30 % en la orina y el 69 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      llega: 'El comprimido se coloca bajo la lengua, sobre la mucosa de la boca.',
      ocurre: 'Comprimido sublingual sin recubrir: se disuelve bajo la lengua.',
      sigue: 'La buprenorfina disuelta queda en contacto con la mucosa de la boca.',
      datos: [
        {
          t: 'Comprimido sublingual sin recubrir: se disuelve bajo la lengua.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '11 · Descripción',
            cita: 'Buprenorphine sublingual tablets are uncoated round white tablets intended for sublingual administration',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'boca' ],
      organosGenerales: [],
      llega: 'La buprenorfina disuelta bajo la lengua.',
      ocurre: 'Se absorbe por la mucosa bajo la lengua con mucha variabilidad entre personas, pero poca en una misma persona.',
      sigue: 'Lo absorbido por la mucosa de la boca pasa a la sangre.',
      datos: [
        {
          t: 'Se absorbe por la mucosa bajo la lengua con mucha variabilidad entre personas, pero poca en una misma persona.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'There was wide inter-patient variability in the sublingual absorption of buprenorphine, but within subjects the variability was low',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor del 96 % a las proteínas, sobre todo a las globulinas alfa y beta.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 96 % a las proteínas, sobre todo a las globulinas alfa y beta.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'Buprenorphine is approximately 96% protein bound, primarily to alpha and beta globulin',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores opioides mu (agonista parcial) y kappa (antagonista)',
        efecto: 'Es agonista parcial del receptor opioide mu y antagonista del receptor kappa.',
        lugar: [],
        datos: [
          {
            t: 'Es agonista parcial del receptor opioide mu y antagonista del receptor kappa.',
            ref: {
              f: 'dailymed-buprenorfina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Buprenorphine sublingual tablets contain buprenorphine, a partial agonist at the mu-opioid receptor and an antagonist at the kappa-opioid receptor',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se N-desalquila a norbuprenorfina, sobre todo por la CYP3A4, y se glucuronida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se N-desalquila a norbuprenorfina, sobre todo por la CYP3A4, y se glucuronida.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'The N-dealkylation pathway is mediated primarily by CYP3A4',
            codigo: '43682-4'
          }
        },
        {
          t: 'Sufre N-desalquilación a norbuprenorfina y glucuronidación.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'Buprenorphine undergoes both N-dealkylation to norbuprenorphine and glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Norbuprenorfina',
          actividad: 'desconocida',
          nota: 'Metabolito principal; también se glucuronida.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'Norbuprenorphine, the major metabolite, can further undergo glucuronidation',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Un estudio de balance de masas recuperó toda la dosis marcada en 11 días: el 30 % en la orina y el 69 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Un estudio de balance de masas recuperó toda la dosis marcada en 11 días: el 30 % en la orina y el 69 % en las heces.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'A mass balance study of buprenorphine showed complete recovery of radiolabel in urine (30%) and feces (69%) collected up to 11 days after dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por vía sublingual, la semivida plasmática de eliminación media es de 31 a 35 horas.',
          ref: {
            f: 'dailymed-buprenorfina',
            sec: '12.3 · Farmacocinética',
            cita: 'When buprenorphine sublingual tablets are administered sublingually, buprenorphine has a mean elimination half-life from plasma ranging from 31 to 35 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '96 (aprox.)',
      unidad: '%',
      analito: 'buprenorfina',
      ref: { f: 'dailymed-buprenorfina', sec: '12.3 · Farmacocinética', cita: 'Buprenorphine is approximately 96% protein bound', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática (sublingual)',
      valor: '31-35',
      unidad: 'h',
      analito: 'buprenorfina',
      condiciones: 'vía sublingual',
      ref: {
        f: 'dailymed-buprenorfina',
        sec: '12.3 · Farmacocinética',
        cita: 'buprenorphine has a mean elimination half-life from plasma ranging from 31 to 35 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '69',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-buprenorfina',
        sec: '12.3 · Farmacocinética',
        cita: 'complete recovery of radiolabel in urine (30%) and feces (69%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '30',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-buprenorfina',
        sec: '12.3 · Farmacocinética',
        cita: 'complete recovery of radiolabel in urine (30%) and feces (69%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-buprenorfina', '442831cf-9636-433a-9a12-e9a8cd31f72a', 'BUPRENORPHINE HYDROCHLORIDE TABLET', 'buprenorphine hydrochloride', '7', '2026-08-13', '2026-11-19'),
    rengPubchem(644073, 'buprenorphine hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
