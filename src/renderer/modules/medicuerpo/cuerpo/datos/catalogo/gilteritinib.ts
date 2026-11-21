import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gilteritinib',
    nombre: 'Gilteritinib',
    clase: 'Inhibidor de tirosina cinasas (FLT3, AXL)',
    sinonimos: [ 'gilteritinib fumarate', 'Xospata' ],
    formula: 'C29H44N8O3',
    masaMolar: 552.7,
    smiles: 'CCC1=C(N=C(C(=N1)C(=O)N)NC2=CC(=C(C=C2)N3CCC(CC3)N4CCN(CC4)C)OC)NC5CCOCC5',
    inchikey: 'GYQYAJJFPNQOOW-UHFFFAOYSA-N',
    cid: 49803313,
    iupac: '6-ethyl-3-[3-methoxy-4-[4-(4-methylpiperazin-1-yl)piperidin-1-yl]anilino]-5-(oxan-4-ylamino)pyrazine-2-carboxamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'gilteritinib-oral',
      producto: 'Xospata · comprimido',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fumarato de gilteritinib',
        ref: { f: 'dailymed-gilteritinib', sec: '11 · Descripción', cita: 'Gilteritinib fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'mannitol',
        'hydroxypropyl cellulose, unspecified',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'talc',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de adultos con leucemia mieloide aguda en recaída o refractaria con mutación de FLT3.',
        ref: {
          f: 'dailymed-gilteritinib',
          sec: '1 · Indicaciones',
          cita: 'XOSPATA is a kinase inhibitor indicated for the treatment of adult patients who have relapsed or refractory acute myeloid leukemia (AML) with a FLT3 mutation as detected by an FDA-approved test',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gilteritinib',
      advertencias: [
        {
          titulo: 'Síndrome de diferenciación',
          texto: 'Puede ser mortal; si se sospecha, iniciar corticoides y vigilancia hemodinámica.',
          organos: [],
          ref: {
            f: 'dailymed-gilteritinib',
            sec: 'Advertencia destacada',
            cita: 'Patients treated with XOSPATA have experienced symptoms of differentiation syndrome, which can be fatal or life-threatening if not treated',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Interrumpir y reducir la dosis si el QTcF supera 500 ms; corregir la hipopotasemia y la hipomagnesemia.',
          organos: [],
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interrupt and reduce XOSPATA dosage in patients who have a QTcF >500 msec',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pancreatitis',
          texto: 'Interrumpir y reducir la dosis si aparece pancreatitis.',
          organos: [],
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Interrupt and reduce the dose in patients who develop pancreatitis',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): aumento de transaminasas, mialgia o artralgia, fatiga, fiebre, mucositis, edema, exantema, diarrea, disnea, náuseas y tos, entre otras.',
          '34084-4',
          'most common adverse reactions (≥20%) are transaminase increased, myalgia/arthralgia, fatigue/malaise, fever, mucositis, edema, rash, noninfectious diarrhea, dyspnea, nausea, cough'
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
    contiene: 'Comprimido: 40 mg por comprimido, según la etiqueta; el activo va como fumarato de gilteritinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con leucemia mieloide aguda en recaída o refractaria con mutación de FLT3.',
    actua: 'Inhibe varios receptores tirosina cinasa, entre ellos FLT3 (con FLT3-ITD y mutaciones TKD), e induce apoptosis en células leucémicas que expresan FLT3-ITD.',
    recorrido: 'En ayunas el tmax está entre 4 y 6 horas; una comida grasa baja la Cmax un 26 % y retrasa el tmax 2 horas. Tras una dosis marcada se excreta en las heces (64,5 % de la dosis) y el 16,4 % se recupera en la orina.'
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
            f: 'dailymed-gilteritinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 40 mg as light yellow, round-shaped, film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'en ayunas',
      ocurre: 'En ayunas el tmax está entre 4 y 6 horas; una comida grasa baja la Cmax un 26 % y retrasa el tmax 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas el tmax está entre 4 y 6 horas; una comida grasa baja la Cmax un 26 % y retrasa el tmax 2 horas.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to maximum gilteritinib concentration (t max ) observed is approximately between 4 and 6 hours post dose in the fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax bajó un 26 % y el AUC menos del 10 %.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'gilteritinib C max decreased by 26% and AUC decreased by less than 10% when co-administered with a high-fat meal',
            codigo: '43682-4'
          },
          poblacion: 'adultos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vivo se une en alrededor del 94 % a las proteínas plasmáticas, sobre todo a la albúmina; los volúmenes central y periférico (1 092 y 1 100 L) indican una distribución tisular extensa.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vivo se une en alrededor del 94 % a las proteínas plasmáticas, sobre todo a la albúmina; los volúmenes central y periférico (1 092 y 1 100 L) indican una distribución tisular extensa.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'In vivo , gilteritinib is approximately 94% bound to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los volúmenes de distribución central y periférico aparentes, de 1 092 y 1 100 L, pueden indicar una distribución extensa en los tejidos.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The population mean (%CV) estimates of apparent central and peripheral volume of distribution were 1092 L (9.22%) and 1100 L (4.99%), respectively, which may indicate extensive tissue distribution',
            codigo: '43682-4'
          },
          poblacion: 'tejidos'
        }
      ],
      accion: {
        diana: 'FLT3',
        efecto: 'Inhibe varios receptores tirosina cinasa, entre ellos FLT3 (con FLT3-ITD y mutaciones TKD), e induce apoptosis en células leucémicas que expresan FLT3-ITD.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe varios receptores tirosina cinasa, entre ellos FLT3 (con FLT3-ITD y mutaciones TKD), e induce apoptosis en células leucémicas que expresan FLT3-ITD.',
            ref: {
              f: 'dailymed-gilteritinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Gilteritinib is a small molecule that inhibits multiple receptor tyrosine kinases, including FMS-like tyrosine kinase 3 (FLT3)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'In vitro se metaboliza sobre todo por la CYP3A4; sus metabolitos principales son M17, M16 y M10.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'In vitro se metaboliza sobre todo por la CYP3A4; sus metabolitos principales son M17, M16 y M10.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Gilteritinib is primarily metabolized via CYP3A4 in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada se excreta en las heces (64,5 % de la dosis) y el 16,4 % se recupera en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada se excreta en las heces (64,5 % de la dosis) y el 16,4 % se recupera en la orina.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'After a single radiolabeled dose, gilteritinib is excreted in feces with 64.5% of the total administered dose recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'El 16,4 % de la dosis marcada se recuperó en la orina como fármaco y metabolitos.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Of the total radiolabeled dose of gilteritinib, 16.4% was recovered in urine as unchanged drug and metabolites',
            codigo: '43682-4'
          },
          poblacion: 'orina'
        },
        {
          t: 'La semivida estimada es de 113 horas y el aclaramiento aparente de 14,85 L/h.',
          ref: {
            f: 'dailymed-gilteritinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated half-life of gilteritinib is 113 hours, and the estimated apparent clearance is 14.85 L/h',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima en ayunas',
      valor: '4-6 (aprox.)',
      unidad: 'h',
      analito: 'gilteritinib',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-gilteritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to maximum gilteritinib concentration (t max ) observed is approximately between 4 and 6 hours post dose in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vivo',
      valor: '94 (aprox.)',
      unidad: '%',
      analito: 'gilteritinib',
      ref: {
        f: 'dailymed-gilteritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'In vivo , gilteritinib is approximately 94% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución central aparente',
      valor: '1092',
      unidad: 'L',
      analito: 'gilteritinib',
      ref: {
        f: 'dailymed-gilteritinib',
        sec: '12.3 · Farmacocinética',
        cita: 'apparent central and peripheral volume of distribution were 1092 L (9.22%) and 1100 L (4.99%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida estimada',
      valor: '113',
      unidad: 'h',
      analito: 'gilteritinib',
      ref: { f: 'dailymed-gilteritinib', sec: '12.3 · Farmacocinética', cita: 'The estimated half-life of gilteritinib is 113 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente estimado',
      valor: '14,85',
      unidad: 'L/h',
      analito: 'gilteritinib',
      ref: { f: 'dailymed-gilteritinib', sec: '12.3 · Farmacocinética', cita: 'the estimated apparent clearance is 14.85 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '64,5',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-gilteritinib', sec: '12.3 · Farmacocinética', cita: '64.5% of the total administered dose recovered in feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gilteritinib', 'b5ff59aa-9c0d-49a8-9053-1f179b482383', 'XOSPATA (GILTERITINIB) TABLET', 'Xospata', '11', '2026-09-21', '2026-11-19'),
    rengPubchem(49803313, 'gilteritinib fumarate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
