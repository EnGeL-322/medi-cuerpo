import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sotagliflozina',
    nombre: 'Sotagliflozina',
    clase: 'Inhibidor de los cotransportadores de sodio-glucosa SGLT2 y SGLT1',
    sinonimos: [ 'sotagliflozin', 'Inpefa' ],
    formula: 'C21H25ClO5S',
    masaMolar: 424.9,
    smiles: 'CCOC1=CC=C(C=C1)CC2=C(C=CC(=C2)[C@H]3[C@@H]([C@H]([C@@H]([C@H](O3)SC)O)O)O)Cl',
    inchikey: 'QKDRXGFQVGOQKS-CRSSMBPESA-N',
    cid: 24831714,
    iupac: '(2S,3R,4R,5S,6R)-2-[4-chloro-3-[(4-ethoxyphenyl)methyl]phenyl]-6-methylsulfanyloxane-3,4,5-triol',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'sotagliflozina-oral',
      producto: 'INPEFA · comprimido',
      titular: 'LEXICON PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg o 400 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose 102',
        'microcrystalline cellulose 200',
        'croscarmellose sodium',
        'silicon dioxide',
        'talc',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Reducir el riesgo de muerte cardiovascular, hospitalización por insuficiencia cardíaca y visitas urgentes por insuficiencia cardíaca en adultos con insuficiencia cardíaca, o con diabetes tipo 2, enfermedad renal crónica y otros factores de riesgo cardiovascular.',
        ref: {
          f: 'dailymed-sotagliflozina',
          sec: '1 · Indicaciones',
          cita: 'INPEFA is indicated to reduce the risk of cardiovascular death, hospitalization for heart failure, and urgent heart failure visit in adults with: heart failure or type 2 diabetes mellitus, chronic kidney disease, and other cardiovascular risk factors',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sotagliflozina',
      advertencias: [
        {
          titulo: 'Cetoacidosis',
          texto: 'En la diabetes tipo 1 aumenta mucho el riesgo de cetoacidosis diabética, que puede ser mortal; hay que buscarla aunque la glucosa no esté muy alta y suspender si se sospecha.',
          organos: [],
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '5 · Advertencias y precauciones',
            cita: 'In patients with type 1 diabetes mellitus, INPEFA significantly increases the risk of diabetic ketoacidosis, a life-threatening event, beyond the background rate',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Depleción de volumen',
          texto: 'Antes de empezar hay que corregir el volumen y vigilar los signos de hipotensión durante el tratamiento.',
          organos: [],
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Volume Depletion: Before initiating, correct volume status. Monitor for signs and symptoms of hypotension during therapy',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Infecciones genitourinarias',
          texto: 'Pueden aparecer infecciones genitourinarias, incluidas urosepsis, pielonefritis, fascitis necrosante del periné (gangrena de Fournier) e infecciones micóticas genitales.',
          organos: [ 'vias-urinarias' ],
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '5 · Advertencias y precauciones',
            cita: "Genitourinary Infections, including Urosepsis, Pyelonephritis, Necrotizing Fasciitis of the Perineum (Fournier's Gangrene), and Genital Mycotic Infections",
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (5 % o más): infección urinaria, depleción de volumen, diarrea e hipoglucemia.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 5%) are urinary tract infection, volume depletion, diarrhea, and hypoglycemia'
        ],
        [
          'Al empezar, como otros inhibidores del SGLT2, produce un pequeño aumento de la creatinina sérica y un descenso del filtrado glomerular, que suelen aparecer en las 4 primeras semanas.',
          '34084-4',
          'Initiation of SGLT2 inhibitors, including INPEFA, causes a small increase in serum creatinine and decrease in eGFR'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 200 mg o 400 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de muerte cardiovascular, hospitalización por insuficiencia cardíaca y visitas urgentes por insuficiencia cardíaca en adultos con insuficiencia cardíaca, o con diabetes tipo 2, enfermedad renal crónica y otros factores de riesgo cardiovascular.',
    actua: 'Inhibe el SGLT2 y el SGLT1; al inhibir el SGLT2 reduce la reabsorción renal de glucosa y sodio, lo que puede bajar la precarga y la poscarga del corazón y reducir la actividad simpática.',
    recorrido: 'La biodisponibilidad absoluta de una dosis oral de 400 mg fue de alrededor del 25 %. Tras una dosis de 400 mg marcada, el 57 % de la radiactividad se recuperó en la orina y el 37 % en las heces; la vía principal de eliminación fue la renal.'
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
            f: 'dailymed-sotagliflozina',
            sec: '11 · Descripción',
            cita: 'Each film-coated tablet of INPEFA contains 200 mg or 400 mg of sotagliflozin',
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
      ocurre: 'La biodisponibilidad absoluta de una dosis oral de 400 mg fue de alrededor del 25 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta de una dosis oral de 400 mg fue de alrededor del 25 %.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of oral sotagliflozin 400 mg dose was approximately 25%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se estima que la circulación enterohepática aporta alrededor del 50 % de la exposición total.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The contribution of enterohepatic circulation to the overall exposure is estimated to be approximately 50%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta la concentración máxima osciló entre 1,25 y 3 horas con dosis únicas de 200 a 2000 mg.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to maximum plasma concentration (T max ) ranged from 1.25 to 3 hours, over a single-dose range of 200 mg to 2000 mg',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con un desayuno hipercalórico, la Cmax y el AUC aumentaron un 149 % y un 50 % respecto al ayuno.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma exposure to sotagliflozin as measured by C max and AUC 0-inf increased by 149% and 50%, respectively',
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
      ocurre: 'In vitro, la sotagliflozina y su metabolito principal, el 3-O-glucurónido, se unen mucho a las proteínas del plasma humano (más del 93 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro, la sotagliflozina y su metabolito principal, el 3-O-glucurónido, se unen mucho a las proteínas del plasma humano (más del 93 %).',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Both sotagliflozin and its major human metabolite sotagliflozin 3-O-glucuronide exhibited high binding to human plasma proteins in vitro (> 93% bound)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente medio tras una dosis oral única de 400 mg fue de 9000 L.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of sotagliflozin following administration of a single 400 mg oral dose of [ 14 C]-sotagliflozin was 9000 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cotransportadores de sodio-glucosa SGLT2 y SGLT1',
        efecto: 'Inhibe el SGLT2 y el SGLT1; al inhibir el SGLT2 reduce la reabsorción renal de glucosa y sodio, lo que puede bajar la precarga y la poscarga del corazón y reducir la actividad simpática.',
        lugar: [ 'rinones', 'corazon' ],
        datos: [
          {
            t: 'Inhibe el SGLT2 y el SGLT1; al inhibir el SGLT2 reduce la reabsorción renal de glucosa y sodio, lo que puede bajar la precarga y la poscarga del corazón y reducir la actividad simpática.',
            ref: {
              f: 'dailymed-sotagliflozina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibiting SGLT2 reduces renal reabsorption of glucose and sodium which may influence several physiological functions such as lowering both pre-and afterload of the heart and downregulating sympathetic activity',
              codigo: '43679-0'
            }
          },
          {
            t: 'Al inhibir el SGLT1 reduce la absorción intestinal de glucosa y sodio, lo que probablemente contribuye a la diarrea.',
            ref: {
              f: 'dailymed-sotagliflozina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Inhibiting SGLT1 reduces intestinal absorption of glucose and sodium which likely contributes to diarrhea',
              codigo: '43679-0'
            }
          },
          {
            t: 'El mecanismo de su beneficio cardiovascular no se ha establecido.',
            ref: {
              f: 'dailymed-sotagliflozina',
              sec: '12.1 · Mecanismo de acción',
              cita: "The mechanism for sotagliflozin's cardiovascular benefits has not been established",
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa, sobre todo a 3-O-glucurónido de sotagliflozina, que supuso el 94,3 % de la radiactividad del plasma.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa, sobre todo a 3-O-glucurónido de sotagliflozina, que supuso el 94,3 % de la radiactividad del plasma.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'sotagliflozin was extensively metabolized predominantly to sotagliflozin 3-O-glucuronide and it represented 94.3% of the radioactivity in plasma',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las enzimas clave son la UGT1A9 y, en menor medida, la CYP3A4.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The key enzymes responsible for the metabolism of sotagliflozin were UGT1A9 and, to a lesser extent, CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '3-O-glucurónido de sotagliflozina',
          actividad: 'desconocida',
          nota: 'Metabolito principal en el plasma y en la orina; la etiqueta no precisa su actividad.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'sotagliflozin was extensively metabolized predominantly to sotagliflozin 3-O-glucuronide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis de 400 mg marcada, el 57 % de la radiactividad se recuperó en la orina y el 37 % en las heces; la vía principal de eliminación fue la renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis de 400 mg marcada, el 57 % de la radiactividad se recuperó en la orina y el 37 % en las heces; la vía principal de eliminación fue la renal.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: '57% and 37% of the radioactivity was recovered in the urine and feces, respectively. These results indicate that the main route of elimination was renal',
            codigo: '43682-4'
          }
        },
        {
          t: 'El metabolito predominante en la orina fue el 3-O-glucurónido, con un 33 % de la dosis radiactiva.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The predominant metabolite detected in urine was sotagliflozin 3-O-glucuronide, representing a mean of 33% of the administered radioactive dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'En los extractos de heces predominó la sotagliflozina inalterada, con un 23 % de la dosis.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Unchanged [ 14 C]-sotagliflozin was the predominant radioactive peak detected in fecal extracts representing a mean of 23% of the total administered radioactive dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media fue de 21 a 35 horas y la semivida efectiva de 5 a 10 horas.',
          ref: {
            f: 'dailymed-sotagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Effective half-life of sotagliflozin ranged from 5 to 10 hours',
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
      valor: '25 (aprox.)',
      unidad: '%',
      analito: 'sotagliflozina',
      condiciones: 'dosis de 400 mg',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of oral sotagliflozin 400 mg dose was approximately 25%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '1,25-3',
      unidad: 'h',
      analito: 'sotagliflozina',
      condiciones: 'dosis únicas de 200 a 2000 mg',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to maximum plasma concentration (T max ) ranged from 1.25 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 93',
      unidad: '%',
      analito: 'sotagliflozina y 3-O-glucurónido',
      condiciones: 'in vitro',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'exhibited high binding to human plasma proteins in vitro (> 93% bound)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '9000',
      unidad: 'L',
      analito: 'sotagliflozina',
      condiciones: 'dosis oral única de 400 mg',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of sotagliflozin following administration of a single 400 mg oral dose of [ 14 C]-sotagliflozin was 9000 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '5-10',
      unidad: 'h',
      analito: 'sotagliflozina',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'Effective half-life of sotagliflozin ranged from 5 to 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral medio (CL/F)',
      valor: '260-370',
      unidad: 'L/h',
      analito: 'sotagliflozina',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'mean oral clearance (CL/F) of sotagliflozin ranged from 260 to 370 L/hr',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '57',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única de 400 mg marcada',
      ref: {
        f: 'dailymed-sotagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: '57% and 37% of the radioactivity was recovered in the urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sotagliflozina', '1a46614e-05f6-421a-b6f4-d6f8760d643a', 'INPEFA (SOTAGLIFLOZIN) TABLET', 'INPEFA', '12', '2026-08-21', '2026-11-18'),
    rengPubchem(24831714, 'sotagliflozin', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
