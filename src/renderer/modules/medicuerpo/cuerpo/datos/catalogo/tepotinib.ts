import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tepotinib',
    nombre: 'Tepotinib',
    clase: 'Inhibidor de la cinasa MET',
    sinonimos: [ 'tepotinib hydrochloride', 'Tepmetko' ],
    formula: 'C29H28N6O2',
    masaMolar: 492.6,
    smiles: 'CN1CCC(CC1)COC2=CN=C(N=C2)C3=CC=CC(=C3)CN4C(=O)C=CC(=N4)C5=CC=CC(=C5)C#N',
    inchikey: 'AHYMHWXQRWRBKT-UHFFFAOYSA-N',
    cid: 25171648,
    iupac: '3-[1-[[3-[5-[(1-methylpiperidin-4-yl)methoxy]pyrimidin-2-yl]phenyl]methyl]-6-oxopyridazin-3-yl]benzonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tepotinib-oral',
      producto: 'TEPMETKO · comprimido',
      titular: 'EMD SERONO, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '225 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de tepotinib',
        ref: { f: 'dailymed-tepotinib', sec: '11 · Descripción', cita: 'tepotinib hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'magnesium stearate',
        'silicon dioxide',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'polyethylene glycol, unspecified',
        'triacetin',
        'ferric oxide red',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico con alteraciones de omisión del exón 14 de MET.',
        ref: {
          f: 'dailymed-tepotinib',
          sec: '1 · Indicaciones',
          cita: 'TEPMETKO is indicated for the treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) harboring mesenchymal-epithelial transition ( MET ) exon 14 skipping alterations',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tepotinib',
      advertencias: [
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Interrumpir de inmediato si se sospecha y suspender si se diagnostica.',
          organos: [],
          ref: {
            f: 'dailymed-tepotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Immediately withhold TEPMETKO in patients with suspected ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Vigilar las pruebas hepáticas.',
          organos: [ 'higado' ],
          ref: { f: 'dailymed-tepotinib', sec: '5 · Advertencias y precauciones', cita: 'Hepatotoxicity : Monitor liver function tests', codigo: '43685-7' }
        },
        {
          titulo: 'Toxicidad pancreática',
          texto: 'Vigilar la amilasa y la lipasa.',
          organos: [],
          ref: {
            f: 'dailymed-tepotinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pancreatic Toxicity : Monitor amylase and lipase',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): edema, náuseas, fatiga, dolor musculoesquelético, diarrea, disnea, disminución del apetito y exantema.',
          '34084-4',
          'Most common adverse reactions (≥ 20%) were edema, nausea, fatigue, musculoskeletal pain, diarrhea, dyspnea, decreased appetite, and rash'
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
    contiene: 'Comprimido: 225 mg por comprimido, según la etiqueta; el activo va como clorhidrato de tepotinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico con alteraciones de omisión del exón 14 de MET.',
    actua: 'Inhibidor de cinasas dirigido a MET, incluidas las variantes con omisión del exón 14; inhibe la fosforilación de MET dependiente e independiente de HGF y su señalización.',
    recorrido: 'La mediana del tmax es de 8 horas y la biodisponibilidad absoluta con alimentos del 71,6 %; una comida grasa aumenta el AUC 1,6 veces y la Cmax 2 veces. Tras 450 mg marcados, alrededor del 85 % se recuperó en las heces (45 % sin cambios) y el 13,6 % en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 225 mg, white-pink, oval, biconvex film-coated tablets',
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
      ocurre: 'La mediana del tmax es de 8 horas y la biodisponibilidad absoluta con alimentos del 71,6 %; una comida grasa aumenta el AUC 1,6 veces y la Cmax 2 veces.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 8 horas y la biodisponibilidad absoluta con alimentos del 71,6 %; una comida grasa aumenta el AUC 1,6 veces y la Cmax 2 veces.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) absolute bioavailability of TEPMETKO in the fed state was 71.6% (10.8%) in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó el AUC 1,6 veces y la Cmax 2 veces.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean AUC 0-INF of tepotinib increased by 1.6-fold and C max increased by 2-fold',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 98 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 1 038 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 98 % a las proteínas, sin depender de la concentración; el volumen de distribución aparente es de 1 038 L.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of tepotinib is 98% and is independent of drug concentration at clinically relevant exposures',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 1 038 L.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean (CV%) apparent volume of distribution (V Z /F) of tepotinib is 1,038 L (24.3%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasa MET',
        efecto: 'Inhibidor de cinasas dirigido a MET, incluidas las variantes con omisión del exón 14; inhibe la fosforilación de MET dependiente e independiente de HGF y su señalización.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas dirigido a MET, incluidas las variantes con omisión del exón 14; inhibe la fosforilación de MET dependiente e independiente de HGF y su señalización.',
            ref: {
              f: 'dailymed-tepotinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tepotinib is a kinase inhibitor that targets MET, including variants with exon 14 skipping alterations',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y la CYP2C8; tiene un metabolito circulante principal, M506.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y la CYP2C8; tiene un metabolito circulante principal, M506.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Tepotinib is primarily metabolized by CYP3A4 and CYP2C8',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M506',
          actividad: 'desconocida',
          nota: 'Metabolito circulante principal; la etiqueta no precisa su actividad en esta sección.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The major circulating metabolite M506 accounted for about 40.4% of the total radioactivity in plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 450 mg marcados, alrededor del 85 % se recuperó en las heces (45 % sin cambios) y el 13,6 % en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 450 mg marcados, alrededor del 85 % se recuperó en las heces (45 % sin cambios) y el 13,6 % en la orina.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 85% of the dose was recovered in feces (45% unchanged) and 13.6% in urine (7% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida es de 32 horas y el aclaramiento aparente de 23,8 L/h en pacientes con cáncer.',
          ref: {
            f: 'dailymed-tepotinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent clearance (CL/F) of tepotinib is 23.8 L/h (87.5%) and the half-life is 32 hours',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta con alimentos',
      valor: '71,6',
      unidad: '%',
      analito: 'tepotinib',
      poblacion: 'sujetos sanos',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'absolute bioavailability of TEPMETKO in the fed state was 71.6% (10.8%) in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '8',
      unidad: 'h',
      analito: 'tepotinib',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max of tepotinib is 8 hours (range from 6 to 12 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '98',
      unidad: '%',
      analito: 'tepotinib',
      ref: { f: 'dailymed-tepotinib', sec: '12.3 · Farmacocinética', cita: 'Protein binding of tepotinib is 98%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '1038',
      unidad: 'L',
      analito: 'tepotinib',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent volume of distribution (V Z /F) of tepotinib is 1,038 L (24.3%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '32',
      unidad: 'h',
      analito: 'tepotinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the half-life is 32 hours following oral administration of TEPMETKO in patients with cancer',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '23,8',
      unidad: 'L/h',
      analito: 'tepotinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent clearance (CL/F) of tepotinib is 23.8 L/h (87.5%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '85 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 450 mg',
      ref: {
        f: 'dailymed-tepotinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 85% of the dose was recovered in feces (45% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tepotinib', '80a0f1b9-071a-47f5-9e67-32d638a669dc', 'TEPMETKO (TEPOTINIB HYDROCHLORIDE) TABLET', 'TEPMETKO', '8', '2025-04-22', '2026-11-19'),
    rengPubchem(25171648, 'tepotinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
