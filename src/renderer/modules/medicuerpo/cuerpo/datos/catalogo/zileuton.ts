import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'zileuton',
    nombre: 'Zileutón',
    clase: 'Inhibidor de la 5-lipooxigenasa (inhibidor de la síntesis de leucotrienos)',
    sinonimos: [ 'zileuton' ],
    formula: 'C11H12N2O2S',
    masaMolar: 236.29,
    smiles: 'CC(C1=CC2=CC=CC=C2S1)N(C(=O)N)O',
    inchikey: 'MWLSOWXNZPKENC-UHFFFAOYSA-N',
    cid: 60490,
    iupac: '1-[1-(1-benzothiophen-2-yl)ethyl]-1-hydroxyurea',
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'zileuton-oral',
      producto: 'Zileuton · comprimido de liberación prolongada',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '600 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose 101',
        'crospovidone',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'silicon dioxide',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'ferric oxide yellow',
        'titanium dioxide',
        'polyethylene glycol 400',
        'hypromellose 2208 (200000 mpa.s)',
        'hypromellose 2208 (15000 mpa.s)',
        'hydroxypropyl cellulose (110000 wamw)'
      ],
      usos: {
        t: 'Profilaxis y tratamiento crónico del asma en adultos y niños desde 12 años.',
        ref: {
          f: 'dailymed-zileuton',
          sec: '1 · Indicaciones',
          cita: 'indicated for the prophylaxis and chronic treatment of asthma in adults and children 12 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-zileuton',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Pueden elevarse las enzimas hepáticas y la bilirrubina, con posible progresión a una lesión hepática clínicamente significativa; hay que controlarlas antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-zileuton',
            sec: '5 · Advertencias y precauciones',
            cita: 'These laboratory abnormalities may progress to clinically significant liver injury, remain unchanged, or resolve with continued treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Acontecimientos neuropsiquiátricos',
          texto: 'Pueden aparecer trastornos del sueño y cambios de conducta.',
          organos: [],
          ref: {
            f: 'dailymed-zileuton',
            sec: '5 · Advertencias y precauciones',
            cita: 'Neuropsychiatric events, including sleep disorders and behavior changes, may occur with Zileuton Extended-Release Tablets',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): sinusitis, náuseas y dolor faringolaríngeo.',
          '34084-4',
          'The most commonly occurring adverse reactions (≥5%) with Zileuton Extended-Release Tablets are sinusitis, nausea, and pharyngolaryngeal pain'
        ],
        [
          'Durante el tratamiento pueden elevarse una o más enzimas hepáticas y la bilirrubina.',
          '34084-4',
          'Elevations of one or more hepatic function enzymes and bilirubin may occur during Zileuton Extended-Release Tablets therapy'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 600 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Profilaxis y tratamiento crónico del asma en adultos y niños desde 12 años.',
    actua: 'Inhibe la 5-lipooxigenasa y, con ello, la formación de leucotrienos.',
    recorrido: 'Se absorbe bien hacia la circulación sistémica: con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces. Se elimina sobre todo por metabolismo; con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido bicapa: una capa de liberación inmediata y otra de liberación prolongada.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido bicapa: una capa de liberación inmediata y otra de liberación prolongada.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '11 · Descripción',
            cita: 'Zileuton Extended-Release Tablets for oral administration are bi-layer tablets comprising of an immediate-release layer and extended-release layer',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien hacia la circulación sistémica: con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien hacia la circulación sistémica: con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'orally administered zileuton is well absorbed into the systemic circulation with 94.5% and 2.2% of the radiolabeled dose recovered in urine and feces, respectively',
            codigo: '34090-1'
          }
        },
        {
          t: 'Con alimentos (dosis única de 1200 mg), la Cmax y el AUC aumentaron un 18 % y un 34 % y el Tmax pasó de 2,1 a 4,3 horas.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'Food increased the peak mean plasma concentrations (C max ) and the mean extent of absorption (AUC) of Zileuton Extended-Release Tablets by 18 and 34%, respectively, and prolonged T max from 2.1 hours to 4.3 hours',
            codigo: '34090-1'
          },
          poblacion: 'voluntarios sanos',
          condiciones: 'con alimentos'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 93 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de alrededor de 1,2 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 93 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de alrededor de 1,2 L/kg.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'Zileuton is 93% bound to plasma proteins, primarily to albumin, with minor binding to α 1–acid glycoprotein',
            codigo: '34090-1'
          }
        },
        {
          t: 'Volumen de distribución aparente (V/F) de alrededor de 1,2 L/kg.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'The apparent volume of distribution (V/F) of zileuton is approximately 1.2 L/kg',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: '5-lipooxigenasa',
        efecto: 'Inhibe la 5-lipooxigenasa y, con ello, la formación de leucotrienos.',
        lugar: [ 'vias-respiratorias' ],
        datos: [
          {
            t: 'Inhibe la 5-lipooxigenasa y, con ello, la formación de leucotrienos.',
            ref: {
              f: 'dailymed-zileuton',
              sec: '12 · Farmacología clínica',
              cita: 'Zileuton is an inhibitor of 5-lipoxygenase and thus inhibits leukotriene',
              codigo: '34090-1'
            }
          },
          {
            t: 'Los leucotrienos contribuyen a la inflamación, el edema, la secreción de moco y la broncoconstricción en las vías respiratorias de los pacientes asmáticos.',
            ref: {
              f: 'dailymed-zileuton',
              sec: '12 · Farmacología clínica',
              cita: 'These effects contribute to inflammation, edema, mucus secretion, and bronchoconstriction in the airways of asthmatic patients',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En microsomas de hígado humano, el zileutón y su metabolito N-deshidroxilado se oxidan por CYP1A2, CYP2C9 y CYP3A4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En microsomas de hígado humano, el zileutón y su metabolito N-deshidroxilado se oxidan por CYP1A2, CYP2C9 y CYP3A4.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'In vitro studies utilizing human liver microsomes have shown that zileuton and its N-dehydroxylated metabolite can be oxidatively metabolized by CYP1A2, CYP2C9 and CYP3A4',
            codigo: '34090-1'
          }
        },
        {
          t: 'Los metabolitos principales en el plasma y la orina son dos conjugados O-glucurónidos diastereoméricos.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'These include two diastereomeric O-glucuronide conjugates (major metabolites) and an N-dehydroxylated metabolite (A-66193) of zileuton',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'A-66193 (metabolito N-deshidroxilado)',
          actividad: 'inactivo',
          nota: 'Lo forma la flora intestinal antes de la absorción; su formación aumenta cuando la absorción se retrasa.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'This inactive metabolite has been shown to be formed by the gastrointestinal microflora prior to the absorption of zileuton',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Conjugados O-glucurónidos',
          actividad: 'desconocida',
          nota: 'Metabolitos principales; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'These include two diastereomeric O-glucuronide conjugates (major metabolites)',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo; con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo; con fármaco marcado, el 94,5 % de la dosis se recuperó en la orina y el 2,2 % en las heces.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: '94.5% and 2.2% of the radiolabeled dose recovered in urine and feces, respectively',
            codigo: '34090-1'
          }
        },
        {
          t: 'La semivida terminal media es de 3,2 horas.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'Elimination of zileuton is predominantly via metabolism with a mean terminal half-life of 3.2 hours',
            codigo: '34090-1'
          }
        },
        {
          t: 'El zileutón inalterado y el metabolito A-66193 supusieron cada uno menos del 0,5 % de la dosis en la orina.',
          ref: {
            f: 'dailymed-zileuton',
            sec: '12 · Farmacología clínica',
            cita: 'The urinary excretion of the inactive A-66193 metabolite and unchanged zileuton each accounted for less than 0.5% of the single radiolabeled dose',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (V/F)',
      valor: '1,2 (aprox.)',
      unidad: 'L/kg',
      analito: 'zileutón',
      ref: {
        f: 'dailymed-zileuton',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent volume of distribution (V/F) of zileuton is approximately 1.2 L/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93',
      unidad: '%',
      analito: 'zileutón',
      ref: { f: 'dailymed-zileuton', sec: '12 · Farmacología clínica', cita: 'Zileuton is 93% bound to plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '3,2',
      unidad: 'h',
      analito: 'zileutón',
      ref: {
        f: 'dailymed-zileuton',
        sec: '12 · Farmacología clínica',
        cita: 'predominantly via metabolism with a mean terminal half-life of 3.2 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente (CL/F)',
      valor: '669',
      unidad: 'mL/min',
      analito: 'zileutón',
      ref: { f: 'dailymed-zileuton', sec: '12 · Farmacología clínica', cita: 'Apparent oral clearance (CL/F) of zileuton is 669 mL/min', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima en ayunas',
      valor: '2,1',
      unidad: 'h',
      analito: 'zileutón',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 1200 mg en ayunas',
      ref: { f: 'dailymed-zileuton', sec: '12 · Farmacología clínica', cita: 'prolonged T max from 2.1 hours to 4.3 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis marcada recuperada en la orina',
      valor: '94,5',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-zileuton',
        sec: '12 · Farmacología clínica',
        cita: '94.5% and 2.2% of the radiolabeled dose recovered in urine and feces, respectively',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-zileuton', 'fd382540-b390-4e86-a94a-988ea89c93a8', 'ZILEUTON TABLET, EXTENDED RELEASE', 'Zileuton', '7', '2024-05-24', '2026-11-18'),
    rengPubchem(60490, 'zileuton', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
