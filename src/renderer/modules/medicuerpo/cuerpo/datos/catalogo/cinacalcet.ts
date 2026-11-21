import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cinacalcet',
    nombre: 'Cinacalcet',
    clase: 'Calcimimético (modulador positivo del receptor sensible al calcio)',
    sinonimos: [ 'cinacalcet', 'Sensipar' ],
    formula: 'C22H22F3N',
    masaMolar: 357.4,
    smiles: 'C[C@H](C1=CC=CC2=CC=CC=C21)NCCCC3=CC(=CC=C3)C(F)(F)F',
    inchikey: 'VDHAWDNDOKGFTD-MRXNPFEDSA-N',
    cid: 156419,
    iupac: 'N-[(1R)-1-naphthalen-1-ylethyl]-3-[3-(trifluoromethyl)phenyl]propan-1-amine',
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'cinacalcet-oral',
      producto: 'Sensipar · comprimido recubierto',
      titular: 'AMGEN INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '30 mg, 60 mg o 90 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de cinacalcet',
        ref: {
          f: 'dailymed-cinacalcet',
          sec: '11 · Descripción',
          cita: 'Sensipar tablets contain the hydrochloride salt of the active ingredient cinacalcet',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'carnauba wax',
        'microcrystalline cellulose',
        'crospovidone, unspecified',
        'magnesium stearate',
        'povidone, unspecified',
        'starch, corn',
        'silicon dioxide'
      ],
      usos: {
        t: 'Hiperparatiroidismo secundario en adultos con enfermedad renal crónica en diálisis, y también hipercalcemia en el carcinoma de paratiroides y en el hiperparatiroidismo primario.',
        ref: {
          f: 'dailymed-cinacalcet',
          sec: '1 · Indicaciones',
          cita: 'Secondary Hyperparathyroidism (HPT) in adult patients with chronic kidney disease (CKD) on dialysis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cinacalcet',
      advertencias: [
        {
          titulo: 'Hipocalcemia',
          texto: 'Baja el calcio sérico y puede llevar a hipocalcemia.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '5 · Advertencias y precauciones',
            cita: 'Sensipar lowers serum calcium and can lead to hypocalcemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragia digestiva alta',
          texto: 'Se han descrito hemorragias digestivas, sobre todo altas, con calcimiméticos.',
          organos: [ 'estomago' ],
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cases of gastrointestinal bleeding, mostly upper gastrointestinal bleeding, have occurred in patients using calcimimetics',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 25 %): náuseas y vómitos.',
          '34084-4',
          'most common adverse reactions (i.e., ≥ 25%) associated with Sensipar were nausea and vomiting'
        ],
        [
          'En ensayos en diálisis hubo convulsiones en el 1,4 % de los tratados frente al 0,7 % con placebo.',
          '34084-4',
          'Seizures were observed in 1.4% (13/910) of Sensipar-treated patients and 0.7% (5/641) of placebo-treated patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 30 mg, 60 mg o 90 mg por comprimido, según la etiqueta; el activo va como clorhidrato de cinacalcet. Los excipientes no son el principio activo.',
    usos: 'Hiperparatiroidismo secundario en adultos con enfermedad renal crónica en diálisis, y también hipercalcemia en el carcinoma de paratiroides y en el hiperparatiroidismo primario.',
    actua: 'Aumenta la sensibilidad del receptor sensible al calcio de las células de la glándula paratiroides (junto al tiroides) al calcio extracelular: baja la hormona paratiroidea y también el calcio sérico.',
    recorrido: 'El máximo llega a las 2-6 horas; una comida rica en grasa aumenta la Cmax un 82 % y el AUC un 68 %. La eliminación renal de los metabolitos es la vía principal: cerca del 80 % de la dosis sale por la orina y el 15 % por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto verde claro, ovalado, de 30, 60 o 90 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto verde claro, ovalado, de 30, 60 o 90 mg.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '3 · Formas y concentraciones',
            cita: 'Sensipar tablets are formulated as light-green, film-coated, oval-shaped tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega a las 2-6 horas; una comida rica en grasa aumenta la Cmax un 82 % y el AUC un 68 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega a las 2-6 horas; una comida rica en grasa aumenta la Cmax un 82 % y el AUC un 68 %.',
          ref: { f: 'dailymed-cinacalcet', sec: '12.3 · Farmacocinética', cita: 'C max is achieved in approximately 2 to 6 hours', codigo: '43682-4' }
        },
        {
          t: 'Con comida pobre en grasa, la Cmax aumenta un 65 % y el AUC un 50 %.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '12.3 · Farmacocinética',
            cita: 'The C max and AUC (0 - inf inite ) of cinacalcet were increased by 65% and 50%, respectively, when cinacalcet was administered with a low-fat meal compared with fasting',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 93-97 % a proteínas del plasma; el volumen de distribución es de unos 1000 L, lo que indica una amplia distribución.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 93-97 % a proteínas del plasma; el volumen de distribución es de unos 1000 L, lo que indica una amplia distribución.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '12.3 · Farmacocinética',
            cita: 'Cinacalcet is approximately 93% to 97% bound to plasma protein(s)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor sensible al calcio de la glándula paratiroides',
        efecto: 'Aumenta la sensibilidad del receptor sensible al calcio de las células de la glándula paratiroides (junto al tiroides) al calcio extracelular: baja la hormona paratiroidea y también el calcio sérico.',
        lugar: [ 'tiroides' ],
        datos: [
          {
            t: 'Aumenta la sensibilidad del receptor sensible al calcio de las células de la glándula paratiroides (junto al tiroides) al calcio extracelular: baja la hormona paratiroidea y también el calcio sérico.',
            ref: {
              f: 'dailymed-cinacalcet',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cinacalcet, the active ingredient in Sensipar, is a calcimimetic agent that directly lowers PTH levels by increasing the sensitivity of the calcium-sensing receptor to activation by extracellular calcium',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan varias enzimas, sobre todo CYP3A4, CYP2D6 y CYP1A2; las rutas son la N-desalquilación oxidativa y la oxidación del anillo de naftaleno con conjugación glucurónica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan varias enzimas, sobre todo CYP3A4, CYP2D6 y CYP1A2; las rutas son la N-desalquilación oxidativa y la oxidación del anillo de naftaleno con conjugación glucurónica.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '12.3 · Farmacocinética',
            cita: 'Cinacalcet is metabolized by multiple enzymes, primarily CYP3A4, CYP2D6, and CYP1A2',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido hidrocinámico y conjugados glucurónidos',
          actividad: 'inactivo',
          nota: 'Los metabolitos circulantes principales superan mucho la concentración del fármaco original.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '12.3 · Farmacocinética',
            cita: 'The hydrocinnamic acid metabolite and glucuronide conjugates have minimal or no calcimimetic activity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación renal de los metabolitos es la vía principal: cerca del 80 % de la dosis sale por la orina y el 15 % por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación renal de los metabolitos es la vía principal: cerca del 80 % de la dosis sale por la orina y el 15 % por las heces.',
          ref: {
            f: 'dailymed-cinacalcet',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 80% of the dose was recovered in the urine and 15% in the feces',
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
      valor: '2-6 (aprox.)',
      unidad: 'h',
      analito: 'cinacalcet',
      ref: { f: 'dailymed-cinacalcet', sec: '12.3 · Farmacocinética', cita: 'C max is achieved in approximately 2 to 6 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax con comida rica en grasa',
      valor: '82',
      unidad: '%',
      analito: 'cinacalcet',
      poblacion: 'voluntarios sanos',
      ref: {
        f: 'dailymed-cinacalcet',
        sec: '12.3 · Farmacocinética',
        cita: 'increased by 82% and 68%, respectively, following administration with a high-fat meal compared with fasting',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '93-97 (aprox.)',
      unidad: '%',
      analito: 'cinacalcet',
      ref: {
        f: 'dailymed-cinacalcet',
        sec: '12.3 · Farmacocinética',
        cita: 'Cinacalcet is approximately 93% to 97% bound to plasma protein(s)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '1000 (aprox.)',
      unidad: 'L',
      analito: 'cinacalcet',
      ref: { f: 'dailymed-cinacalcet', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution is approximately 1000 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '30-40',
      unidad: 'h',
      analito: 'cinacalcet',
      ref: { f: 'dailymed-cinacalcet', sec: '12.3 · Farmacocinética', cita: 'terminal half-life of 30 to 40 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'cinacalcet y metabolitos',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis marcada de 75 mg',
      ref: {
        f: 'dailymed-cinacalcet',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 80% of the dose was recovered in the urine and 15% in the feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '15 (aprox.)',
      unidad: '% de la dosis',
      analito: 'cinacalcet y metabolitos',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis marcada de 75 mg',
      ref: {
        f: 'dailymed-cinacalcet',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 80% of the dose was recovered in the urine and 15% in the feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cinacalcet', '45028573-13c4-4c8b-ae62-6c75bba97c81', 'SENSIPAR (CINACALCET HYDROCHLORIDE) TABLET, COATED', 'Sensipar', '136', '2025-12-09', '2026-11-12'),
    rengPubchem(156419, 'cinacalcet', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
