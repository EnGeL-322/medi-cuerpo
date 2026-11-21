import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ozanimod',
    nombre: 'Ozanimod',
    clase: 'Modulador del receptor de esfingosina-1-fosfato (S1P)',
    sinonimos: [ 'ozanimod', 'Zeposia' ],
    formula: 'C23H24N4O3',
    masaMolar: 404.5,
    smiles: 'CC(C)OC1=C(C=C(C=C1)C2=NC(=NO2)C3=C4CC[C@@H](C4=CC=C3)NCCO)C#N',
    inchikey: 'XRVDGNKRPOAQTN-FQEVSTJZSA-N',
    cid: 52938427,
    iupac: '5-[3-[(1S)-1-(2-hydroxyethylamino)-2,3-dihydro-1H-inden-4-yl]-1,2,4-oxadiazol-5-yl]-2-propan-2-yloxybenzonitrile',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'ozanimod-oral',
      producto: 'ZEPOSIA · cápsula',
      titular: 'CELGENE CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '0.92 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de ozanimod',
        ref: { f: 'dailymed-ozanimod', sec: '11 · Descripción', cita: 'ozanimod hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'microcrystalline cellulose', 'croscarmellose sodium', 'silicon dioxide', 'magnesium stearate' ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos y de la colitis ulcerosa activa moderada o grave en adultos.',
        ref: {
          f: 'dailymed-ozanimod',
          sec: '1 · Indicaciones',
          cita: 'Relapsing forms of multiple sclerosis (MS), to include clinically isolated syndrome, relapsing-remitting disease, and active secondary progressive disease, in adults. ( 1 ) Moderately to severely active ulcerative colitis (UC) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ozanimod',
      advertencias: [
        {
          titulo: 'Infecciones',
          texto: 'Puede aumentar el riesgo de infecciones; hacer un hemograma antes de empezar y no iniciarlo con infecciones activas.',
          organos: [],
          ref: {
            f: 'dailymed-ozanimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'ZEPOSIA may increase the risk of infections. Obtain a complete blood count (CBC) before initiation of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bradiarritmia y retrasos de la conducción auriculoventricular',
          texto: 'Puede reducir de forma transitoria la frecuencia cardíaca; hace falta un electrocardiograma antes de empezar.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-ozanimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'ZEPOSIA may result in transient decrease in heart rate; titration is required for treatment initiation',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Lesión hepática',
          texto: 'Hay que medir las enzimas hepáticas antes de empezar y periódicamente; suspender si hay lesión hepática sin otra causa.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-ozanimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'Liver Injury : Obtain liver enzyme results before initiation and periodically during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos respiratorios',
          texto: 'Puede reducir la función pulmonar.',
          organos: [ 'pulmones' ],
          ref: {
            f: 'dailymed-ozanimod',
            sec: '5 · Advertencias y precauciones',
            cita: 'Respiratory Effects : May cause a decline in pulmonary function',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Entre las reacciones graves descritas en otras secciones figuran infecciones, leucoencefalopatía multifocal progresiva, bradiarritmia y retrasos de la conducción auriculoventricular, y lesión hepática.',
          '34084-4',
          'Infections [see Warnings and Precautions (5.1) ] Progressive Multifocal Leukoencephalopathy [see Warnings and Precautions (5.2) ] Bradyarrhythmia and Atrioventricular Conduction Delays'
        ],
        [
          'También figuran el riesgo fetal, el aumento de la presión arterial, los efectos respiratorios y el edema macular.',
          '34084-4',
          'Increased Blood Pressure [see Warnings and Precautions (5.6) ] Respiratory Effects [see Warnings and Precautions (5.7) ] Macular Edema'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.92 mg por cápsula, según la etiqueta; el activo va como clorhidrato de ozanimod. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos y de la colitis ulcerosa activa moderada o grave en adultos.',
    actua: 'Se une con alta afinidad a los receptores S1P1 y S1P5 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica.',
    recorrido: 'El Tmax del ozanimod es de unas 6 a 8 horas; las comidas ricas o pobres en grasas no produjeron diferencias clínicamente significativas. Tras una dosis oral única marcada de 0,92 mg, alrededor del 26 % de la radiactividad se recuperó en la orina y el 37 % en las heces, sobre todo como metabolitos inactivos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 0.23 mg ozanimod: light grey opaque body/light grey opaque cap',
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
      ocurre: 'El Tmax del ozanimod es de unas 6 a 8 horas; las comidas ricas o pobres en grasas no produjeron diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El Tmax del ozanimod es de unas 6 a 8 horas; las comidas ricas o pobres en grasas no produjeron diferencias clínicamente significativas.',
          ref: { f: 'dailymed-ozanimod', sec: '12.3 · Farmacocinética', cita: 'The T max of ozanimod is approximately 6 to 8 hours', codigo: '43682-4' }
        },
        {
          t: 'Con una comida rica o pobre en grasas no hubo diferencias clínicamente significativas en la Cmax ni en el AUC respecto al ayuno.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in the C max and AUC of ozanimod were observed following administration of ZEPOSIA with either a high-fat, high-calorie meal',
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
      ocurre: 'El volumen de distribución aparente medio es de 5590 L; la unión a las proteínas del plasma humano es de alrededor del 98,2 % para el ozanimod y del 99,8 % y 99,3 % para sus metabolitos CC112273 y CC1084037.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente medio es de 5590 L; la unión a las proteínas del plasma humano es de alrededor del 98,2 % para el ozanimod y del 99,8 % y 99,3 % para sus metabolitos CC112273 y CC1084037.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma proteins binding of ozanimod, CC112273 and CC1084037 is approximately 98.2%, 99.8%, and 99.3%, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio (Vz/F) de 5590 L.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) apparent volume of distribution of ozanimod (Vz/F) is 5590 L (27%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de esfingosina-1-fosfato S1P1 y S1P5',
        efecto: 'Se une con alta afinidad a los receptores S1P1 y S1P5 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica.',
        lugar: [ 'sangre', 'encefalo' ],
        datos: [
          {
            t: 'Se une con alta afinidad a los receptores S1P1 y S1P5 e impide que los linfocitos salgan de los ganglios linfáticos, lo que reduce los linfocitos de la sangre periférica.',
            ref: {
              f: 'dailymed-ozanimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ozanimod blocks the capacity of lymphocytes to egress from lymph nodes, reducing the number of lymphocytes in peripheral blood',
              codigo: '43679-0'
            }
          },
          {
            t: 'El mecanismo terapéutico se desconoce, pero podría consistir en reducir la migración de linfocitos al sistema nervioso central y al intestino.',
            ref: {
              f: 'dailymed-ozanimod',
              sec: '12.1 · Mecanismo de acción',
              cita: 'may involve the reduction of lymphocyte migration into the central nervous system and intestine',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan varias enzimas y forma metabolitos activos principales (CC112273 y CC1084037); la ALDH/ADH forma RP101988 y la CYP3A4 forma RP101075, que la MAO-B convierte en CC112273.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan varias enzimas y forma metabolitos activos principales (CC112273 y CC1084037); la ALDH/ADH forma RP101988 y la CYP3A4 forma RP101075, que la MAO-B convierte en CC112273.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Ozanimod is metabolized by ALDH/ADH to form carboxylate metabolite RP101988 and by CYP3A4 to form RP101075',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 94 % de la exposición total a fármaco activo circulante corresponde al ozanimod (6 %), al CC112273 (73 %) y al CC1084037 (15 %).',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 94% of circulating total active drug exposure is represented by ozanimod (6%), CC112273 (73%), and CC1084037 (15%), in humans',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'CC112273 y CC1084037',
          actividad: 'activo',
          nota: 'Metabolitos activos principales, con actividad y selectividad parecidas por S1P1 y S1P5; se interconvierten y su semivida efectiva es de unos 11 días en la esclerosis múltiple.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'Ozanimod is metabolized by multiple enzymes to form circulating major active metabolites (e.g., CC112273 and CC1084037)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral única marcada de 0,92 mg, alrededor del 26 % de la radiactividad se recuperó en la orina y el 37 % en las heces, sobre todo como metabolitos inactivos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral única marcada de 0,92 mg, alrededor del 26 % de la radiactividad se recuperó en la orina y el 37 % en las heces, sobre todo como metabolitos inactivos.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 26% of the radioactivity was recovered in urine and 37% in feces, primarily composed of inactive metabolites',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media del ozanimod es de unas 21 horas.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) plasma half-life (t1/2) of ozanimod is approximately 21 hours (15%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media de CC112273 y CC1084037 fue de unos 11 días en la esclerosis múltiple recurrente.',
          ref: {
            f: 'dailymed-ozanimod',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean (CV%) effective half-life (t1/2) of CC112273 and its direct interconverting metabolite CC1084037 was approximately 11 days (104%) in relapsing MS patients',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con esclerosis múltiple recurrente'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '6-8 (aprox.)',
      unidad: 'h',
      analito: 'ozanimod',
      ref: { f: 'dailymed-ozanimod', sec: '12.3 · Farmacocinética', cita: 'The T max of ozanimod is approximately 6 to 8 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio (Vz/F)',
      valor: '5590',
      unidad: 'L',
      analito: 'ozanimod',
      ref: {
        f: 'dailymed-ozanimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) apparent volume of distribution of ozanimod (Vz/F) is 5590 L (27%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98,2 (aprox.)',
      unidad: '%',
      analito: 'ozanimod',
      ref: {
        f: 'dailymed-ozanimod',
        sec: '12.3 · Farmacocinética',
        cita: 'Human plasma proteins binding of ozanimod, CC112273 and CC1084037 is approximately 98.2%, 99.8%, and 99.3%, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '21 (aprox.)',
      unidad: 'h',
      analito: 'ozanimod',
      ref: {
        f: 'dailymed-ozanimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) plasma half-life (t1/2) of ozanimod is approximately 21 hours (15%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva media de CC112273 y CC1084037',
      valor: '11 (aprox.)',
      unidad: 'días',
      analito: 'CC112273 y CC1084037',
      poblacion: 'pacientes con esclerosis múltiple recurrente',
      ref: { f: 'dailymed-ozanimod', sec: '12.3 · Farmacocinética', cita: 'was approximately 11 days (104%) in relapsing MS patients', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente medio',
      valor: '192 (aprox.)',
      unidad: 'L/h',
      analito: 'ozanimod',
      ref: {
        f: 'dailymed-ozanimod',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) apparent oral clearance for ozanimod was approximately 192 L/h (37%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ozanimod', '93ce2fab-edfb-4804-8074-963071de51e4', 'ZEPOSIA (OZANIMOD HYDROCHLORIDE) CAPSULE ZEPOSIA 7-DAY STARTER PACK (OZANIMOD HYDROCHLORIDE) KIT ZEPOSIA STARTER KIT (OZANIMOD HYDROCHLORIDE) KIT', 'ZEPOSIA', '25', '2026-04-17', '2026-11-19'),
    rengPubchem(52938427, 'ozanimod', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
