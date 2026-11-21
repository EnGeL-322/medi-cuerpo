import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'voriconazol',
    nombre: 'Voriconazol',
    clase: 'Antifúngico azólico',
    sinonimos: [ 'voriconazole', 'Vfend' ],
    formula: 'C16H14F3N5O',
    masaMolar: 349.31,
    smiles: 'C[C@@H](C1=NC=NC=C1F)[C@](CN2C=NC=N2)(C3=C(C=C(C=C3)F)F)O',
    inchikey: 'BCEHBSKCWLPMDN-MGPLVRAMSA-N',
    cid: 71616,
    iupac: '(2R,3S)-2-(2,4-difluorophenyl)-3-(5-fluoropyrimidin-4-yl)-1-(1,2,4-triazol-1-yl)butan-2-ol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'voriconazol-oral',
      producto: 'VFEND · comprimido recubierto con película',
      titular: 'ROERIG',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'croscarmellose sodium',
        'povidone, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Aspergilosis invasiva, candidemia en no neutropénicos, candidiasis esofágica e infecciones graves por Scedosporium y Fusarium, en adultos y niños desde 2 años.',
        ref: {
          f: 'dailymed-voriconazol',
          sec: '1 · Indicaciones',
          cita: 'VFEND is an azole antifungal indicated for the treatment of adults and pediatric patients 2 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-voriconazol',
      advertencias: [
        {
          titulo: 'Toxicidad hepática',
          texto: 'Se han descrito casos poco frecuentes de reacciones hepáticas graves, como hepatitis, colestasis e insuficiencia hepática fulminante.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-voriconazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'In clinical trials, there have been uncommon cases of serious hepatic reactions during treatment with VFEND',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Arritmias y prolongación del QT',
          texto: 'Algunos azoles, entre ellos el voriconazol, se han asociado con prolongación del intervalo QT.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-voriconazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Some azoles, including VFEND, have been associated with prolongation of the QT interval on the electrocardiogram',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteraciones visuales',
          texto: 'Se desconoce el efecto sobre la visión si el tratamiento sigue más de 28 días.',
          organos: [ 'ojos' ],
          ref: {
            f: 'dailymed-voriconazol',
            sec: '5 · Advertencias y precauciones',
            cita: 'The effect of VFEND on visual function is not known if treatment continues beyond 28 days',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): trastornos visuales, fiebre, náuseas, erupción, vómitos, escalofríos, dolor de cabeza, pruebas hepáticas anormales, taquicardia y alucinaciones.',
          '34084-4',
          'most common adverse reactions (incidence ≥2%) were visual disturbances, fever, nausea, rash, vomiting, chills, headache, liver function test abnormal, tachycardia, hallucinations'
        ],
        [
          'En niños (≥ 5 %): trastornos visuales, fiebre, vómitos, epistaxis, náuseas y erupción, entre otros.',
          '34084-4',
          'The most common adverse reactions (incidence ≥5%) were visual disturbances, pyrexia, vomiting, epistaxis, nausea, rash'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Aspergilosis invasiva, candidemia en no neutropénicos, candidiasis esofágica e infecciones graves por Scedosporium y Fusarium, en adultos y niños desde 2 años.',
    actua: 'Inhibe la desmetilación en 14 alfa del lanosterol mediada por el citocromo P-450 del hongo, un paso esencial de la síntesis de ergosterol de su pared.',
    recorrido: 'La biodisponibilidad oral se estima en el 96 %; el máximo llega a la 1-2 horas. Una comida rica en grasa reduce la Cmax un 34 % y el AUC un 24 % con el comprimido. Se elimina por metabolismo hepático, con menos del 2 % de la dosis sin cambios en la orina; alrededor del 80-83 % de la radiactividad se recupera en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos recubiertos con película de 50 mg y 200 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos recubiertos con película de 50 mg y 200 mg.',
          ref: { f: 'dailymed-voriconazol', sec: '3 · Formas y concentraciones', cita: 'Tablets : 50 mg, 200 mg', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral se estima en el 96 %; el máximo llega a la 1-2 horas. Una comida rica en grasa reduce la Cmax un 34 % y el AUC un 24 % con el comprimido.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral se estima en el 96 %; el máximo llega a la 1-2 horas. Una comida rica en grasa reduce la Cmax un 34 % y el AUC un 24 % con el comprimido.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'the oral bioavailability of voriconazole is estimated to be 96% (CV 13%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones máximas se alcanzan 1-2 horas después de la dosis.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Maximum plasma concentrations (C max ) are achieved 1-2 hours after dosing',
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
      ocurre: 'El volumen de distribución en estado estacionario se estima en 4,6 L/kg (distribución extensa a los tejidos) y la unión a proteínas del plasma, en un 58 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en estado estacionario se estima en 4,6 L/kg (distribución extensa a los tejidos) y la unión a proteínas del plasma, en un 58 %.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution at steady state for voriconazole is estimated to be 4.6 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzima 14-alfa-lanosterol desmetilasa de los hongos',
        efecto: 'Inhibe la desmetilación en 14 alfa del lanosterol mediada por el citocromo P-450 del hongo, un paso esencial de la síntesis de ergosterol de su pared.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la desmetilación en 14 alfa del lanosterol mediada por el citocromo P-450 del hongo, un paso esencial de la síntesis de ergosterol de su pared.',
            ref: {
              f: 'dailymed-voriconazol',
              sec: '12.4 · Microbiología',
              cita: 'The primary mode of action of voriconazole is the inhibition of fungal cytochrome P-450-mediated 14 alpha-lanosterol demethylation, an essential step in fungal ergosterol biosynthesis',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metabolizan las enzimas hepáticas CYP2C19, CYP2C9 y CYP3A4; el CYP2C19 tiene un papel importante y muestra polimorfismo genético.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metabolizan las enzimas hepáticas CYP2C19, CYP2C9 y CYP3A4; el CYP2C19 tiene un papel importante y muestra polimorfismo genético.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'voriconazole is metabolized by the human hepatic cytochrome P450 enzymes, CYP2C19, CYP2C9 and CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Voriconazol N-óxido',
          actividad: 'inactivo',
          nota: 'Es el 72 % de los metabolitos circulantes marcados.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Since this metabolite has minimal antifungal activity, it does not contribute to the overall efficacy of voriconazole',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por metabolismo hepático, con menos del 2 % de la dosis sin cambios en la orina; alrededor del 80-83 % de la radiactividad se recupera en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por metabolismo hepático, con menos del 2 % de la dosis sin cambios en la orina; alrededor del 80-83 % de la radiactividad se recupera en la orina.',
          ref: {
            f: 'dailymed-voriconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Voriconazole is eliminated via hepatic metabolism with less than 2% of the dose excreted unchanged in the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral estimada',
      valor: '96 (CV 13 %)',
      unidad: '%',
      analito: 'voriconazol',
      poblacion: 'sujetos sanos (N=207)',
      condiciones: 'análisis farmacocinético poblacional',
      ref: {
        f: 'dailymed-voriconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'the oral bioavailability of voriconazole is estimated to be 96% (CV 13%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1-2',
      unidad: 'h',
      analito: 'voriconazol',
      ref: {
        f: 'dailymed-voriconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'Maximum plasma concentrations (C max ) are achieved 1-2 hours after dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa (comprimido)',
      valor: '34',
      unidad: '%',
      analito: 'voriconazol',
      condiciones: 'dosis repetidas con comida rica en grasa',
      ref: {
        f: 'dailymed-voriconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean C max and AUC τ are reduced by 34% and 24%, respectively when administered as a tablet',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '58 (aprox.)',
      unidad: '%',
      analito: 'voriconazol',
      ref: { f: 'dailymed-voriconazol', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding is estimated to be 58%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '4,6 (aprox.)',
      unidad: 'L/kg',
      analito: 'voriconazol',
      ref: {
        f: 'dailymed-voriconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution at steady state for voriconazole is estimated to be 4.6 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '< 2',
      unidad: '% de la dosis',
      analito: 'voriconazol',
      ref: { f: 'dailymed-voriconazol', sec: '12.3 · Farmacocinética', cita: 'less than 2% of the dose excreted unchanged in the urine', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '80-83',
      unidad: '%',
      analito: 'voriconazol y metabolitos',
      condiciones: 'dosis marcada oral o intravenosa',
      ref: {
        f: 'dailymed-voriconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 80% to 83% of the radioactivity is recovered in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-voriconazol', 'ce3ef5cf-3087-4d92-9d94-9eb8287228db', 'VFEND (VORICONAZOLE) TABLET, FILM COATED VFEND (VORICONAZOLE) INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION VFEND (VORICONAZOLE) POWDER, FOR SUSPENSION', 'VFEND', '58', '2026-03-02', '2026-11-13'),
    rengPubchem(71616, 'voriconazole', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
