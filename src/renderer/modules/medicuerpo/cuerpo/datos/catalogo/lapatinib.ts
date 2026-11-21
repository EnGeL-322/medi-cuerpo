import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lapatinib',
    nombre: 'Lapatinib',
    clase: 'Inhibidor de la tirosina cinasa de EGFR y HER2',
    sinonimos: [ 'lapatinib', 'Tykerb' ],
    formula: 'C29H26ClFN4O4S',
    masaMolar: 581.1,
    smiles: 'CS(=O)(=O)CCNCC1=CC=C(O1)C2=CC3=C(C=C2)N=CN=C3NC4=CC(=C(C=C4)OCC5=CC(=CC=C5)F)Cl',
    inchikey: 'BCFGMOOMADDAQU-UHFFFAOYSA-N',
    cid: 208908,
    iupac: 'N-[3-chloro-4-[(3-fluorophenyl)methoxy]phenyl]-6-[5-[(2-methylsulfonylethylamino)methyl]furan-2-yl]quinazolin-4-amine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'lapatinib-oral',
      producto: 'TYKERB · comprimido',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 mg de base de lapatinib por comprimido (como ditosilato monohidrato)',
      sal: {
        nombre: 'Ditosilato de lapatinib',
        ref: {
          f: 'dailymed-lapatinib',
          sec: '11 · Descripción',
          cita: 'equivalent to 398 mg of lapatinib ditosylate or 250 mg lapatinib free base',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'magnesium stearate',
        'cellulose, microcrystalline',
        'povidone',
        'sodium starch glycolate type a potato',
        'fd&c yellow no. 6',
        'hypromelloses',
        'polyethylene glycol',
        'polysorbate 80',
        'titanium dioxide'
      ],
      usos: {
        t: 'Cáncer de mama avanzado o metastásico con sobreexpresión de HER2 que ya recibió otros tratamientos, en combinación con capecitabina; también con letrozol en mujeres posmenopáusicas.',
        ref: {
          f: 'dailymed-lapatinib',
          sec: '1 · Indicaciones',
          cita: 'capecitabine for the treatment of patients with advanced or metastatic breast cancer whose tumors overexpress human epidermal growth factor receptor 2 (HER2)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lapatinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se ha observado en ensayos y tras su comercialización; puede ser grave y se han descrito muertes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-lapatinib',
            sec: 'Advertencia destacada',
            cita: 'Hepatotoxicity has been observed in clinical trials and postmarketing experience. The hepatotoxicity may be severe and deaths have been reported',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Disminución de la fracción de eyección',
          texto: 'Se ha descrito disminución de la fracción de eyección del ventrículo izquierdo.',
          organos: [ 'corazon' ],
          ref: { f: 'dailymed-lapatinib', sec: '5 · Advertencias y precauciones', cita: 'TYKERB has been reported to decrease LVEF', codigo: '43685-7' }
        },
        {
          titulo: 'Diarrea',
          texto: 'Puede ser grave y se han descrito muertes.',
          organos: [ 'intestino-grueso' ],
          ref: {
            f: 'dailymed-lapatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'The diarrhea may be severe, and deaths have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con capecitabina (> 20 %): diarrea, eritrodisestesia palmoplantar, náuseas, erupción, vómitos y cansancio.',
          '34084-4',
          'most common (greater than 20%) adverse reactions during treatment with TYKERB plus capecitabine were diarrhea, palmar-plantar erythrodysesthesia, nausea, rash, vomiting, and fatigue'
        ],
        [
          'Con letrozol (≥ 20 %): diarrea, erupción, náuseas y cansancio.',
          '34084-4',
          'The most common (greater than or equal to 20%) adverse reactions during treatment with TYKERB plus letrozole were diarrhea, rash, nausea, and fatigue'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 250 mg de base de lapatinib por comprimido (como ditosilato monohidrato); el activo va como ditosilato de lapatinib. Los excipientes no son el principio activo.',
    usos: 'Cáncer de mama avanzado o metastásico con sobreexpresión de HER2 que ya recibió otros tratamientos, en combinación con capecitabina; también con letrozol en mujeres posmenopáusicas.',
    actua: 'Inhibe los dominios de tirosina cinasa del receptor del factor de crecimiento epidérmico (EGFR) y del receptor HER2 dentro de la célula, y frena el crecimiento de las células tumorales.',
    recorrido: 'La absorción es incompleta y variable; el máximo llega unas 4 horas después de la dosis. Con comida aumenta mucho la exposición. La eliminación es sobre todo por metabolismo; en las heces se recupera una mediana del 27 % de la dosis como lapatinib sin cambios y la excreción renal es insignificante (menos del 2 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido naranja, ovalado y recubierto con película, de 250 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido naranja, ovalado y recubierto con película, de 250 mg.',
          ref: { f: 'dailymed-lapatinib', sec: '3 · Formas y concentraciones', cita: 'oval, biconvex, orange, film-coated', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La absorción es incompleta y variable; el máximo llega unas 4 horas después de la dosis. Con comida aumenta mucho la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es incompleta y variable; el máximo llega unas 4 horas después de la dosis. Con comida aumenta mucho la exposición.',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption following oral administration of TYKERB is incomplete and variable',
            codigo: '43682-4'
          }
        },
        {
          t: 'El máximo de lapatinib llega aproximadamente 4 horas después de la administración.',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations (C max ) of lapatinib are achieved approximately 4 hours after administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'El AUC fue unas 3 y 4 veces mayor con comida baja en grasa y alta en grasa respectivamente.',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lapatinib AUC values were approximately 3- and 4-fold higher',
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
      ocurre: 'Se une en más del 99 % a la albúmina y a la glucoproteína ácida α1.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a la albúmina y a la glucoproteína ácida α1.',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lapatinib is highly bound (greater than 99%) to albumin and alpha-1 acid glycoprotein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas de EGFR y HER2',
        efecto: 'Inhibe los dominios de tirosina cinasa del receptor del factor de crecimiento epidérmico (EGFR) y del receptor HER2 dentro de la célula, y frena el crecimiento de las células tumorales.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Inhibe los dominios de tirosina cinasa del receptor del factor de crecimiento epidérmico (EGFR) y del receptor HER2 dentro de la célula, y frena el crecimiento de las células tumorales.',
            ref: {
              f: 'dailymed-lapatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lapatinib is a 4-anilinoquinazoline kinase inhibitor of the intracellular tyrosine kinase domains of both Epidermal Growth Factor Receptor (EGFR [ErbB1]) and of Human Epidermal Receptor Type 2 (HER2 [ErbB2]) receptors',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho, sobre todo por CYP3A4 y CYP3A5 (con aportes menores de CYP2C19 y CYP2C8), hasta metabolitos oxidados.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho, sobre todo por CYP3A4 y CYP3A5 (con aportes menores de CYP2C19 y CYP2C8), hasta metabolitos oxidados.',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lapatinib undergoes extensive metabolism, primarily by CYP3A4 and CYP3A5',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos oxidados',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'none of which accounts for more than 14% of the dose recovered in the feces or 10% of lapatinib concentration in plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es sobre todo por metabolismo; en las heces se recupera una mediana del 27 % de la dosis como lapatinib sin cambios y la excreción renal es insignificante (menos del 2 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es sobre todo por metabolismo; en las heces se recupera una mediana del 27 % de la dosis como lapatinib sin cambios y la excreción renal es insignificante (menos del 2 %).',
          ref: {
            f: 'dailymed-lapatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Recovery of parent lapatinib in feces accounts for a median of 27% (range 3% to 67%) of an oral dose',
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
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'lapatinib',
      ref: {
        f: 'dailymed-lapatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations (C max ) of lapatinib are achieved approximately 4 hours after administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media geométrica en estado estacionario',
      valor: '2,43 (1,57-3,77)',
      unidad: 'µg/mL',
      analito: 'lapatinib',
      condiciones: '1250 mg al día',
      ref: { f: 'dailymed-lapatinib', sec: '12.3 · Farmacocinética', cita: 'values of C max were 2.43 mcg/mL (1.57 to 3.77 mcg/mL)', codigo: '43682-4' }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC media geométrica en estado estacionario',
      valor: '36,2 (23,4-56)',
      unidad: 'µg·h/mL',
      analito: 'lapatinib',
      condiciones: '1250 mg al día',
      ref: { f: 'dailymed-lapatinib', sec: '12.3 · Farmacocinética', cita: 'AUC were 36.2 mcg.h/mL (23.4 to 56 mcg.h/mL)', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de la fase terminal tras una dosis',
      valor: '14,2',
      unidad: 'h',
      analito: 'lapatinib',
      ref: {
        f: 'dailymed-lapatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal phase half-life following a single dose was 14.2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99',
      unidad: '%',
      analito: 'lapatinib',
      ref: {
        f: 'dailymed-lapatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Lapatinib is highly bound (greater than 99%) to albumin and alpha-1 acid glycoprotein',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento del AUC con comida baja en grasa',
      valor: '3 (aprox.)',
      unidad: 'veces',
      analito: 'lapatinib',
      condiciones: 'comida baja en grasa (500 calorías)',
      ref: {
        f: 'dailymed-lapatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Lapatinib AUC values were approximately 3- and 4-fold higher',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Lapatinib sin cambios en las heces (mediana)',
      valor: '27 (3-67)',
      unidad: '% de la dosis',
      analito: 'lapatinib',
      ref: {
        f: 'dailymed-lapatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Recovery of parent lapatinib in feces accounts for a median of 27% (range 3% to 67%) of an oral dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excreción renal',
      valor: '< 2',
      unidad: '% de la dosis',
      analito: 'lapatinib',
      ref: { f: 'dailymed-lapatinib', sec: '12.3 · Farmacocinética', cita: 'negligible (less than 2%) renal excretion', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lapatinib', 'eee37f88-ec6a-4c30-b8aa-e2c71f93088c', 'TYKERB (LAPATINIB) TABLET', 'TYKERB', '14', '2026-01-28', '2026-11-12'),
    rengPubchem(208908, 'lapatinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
