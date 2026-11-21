import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'migalastat',
    nombre: 'Migalastat',
    clase: 'Chaperona farmacológica de la alfa-galactosidasa A',
    sinonimos: [ 'migalastat hydrochloride', 'Galafold' ],
    formula: 'C6H13NO4',
    masaMolar: 163.17,
    smiles: 'C1[C@@H]([C@H]([C@H]([C@H](N1)CO)O)O)O',
    inchikey: 'LXBIFEVIBLOUGU-DPYQTVNSSA-N',
    cid: 176077,
    iupac: '(2R,3S,4R,5S)-2-(hydroxymethyl)piperidine-3,4,5-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'migalastat-oral',
      producto: 'Galafold · cápsula',
      titular: 'AMICUS THERAPEUTICS US, LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '123 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de migalastat',
        ref: { f: 'dailymed-migalastat', sec: '11 · Descripción', cita: '123 mg of migalastat', codigo: '34089-3' }
      },
      excipientes: [
        'shellac',
        'magnesium stearate',
        'starch, corn',
        'gelatin',
        'fd&c blue no. 2',
        'titanium dioxide',
        'ferrosoferric oxide',
        'potassium hydroxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con enfermedad de Fabry confirmada y una variante del gen GLA susceptible según ensayo in vitro.',
        ref: {
          f: 'dailymed-migalastat',
          sec: '1 · Indicaciones',
          cita: 'GALAFOLD is indicated for the treatment of adults with a confirmed diagnosis of Fabry disease and an amenable galactosidase alpha gene ( GLA ) variant',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-migalastat',
      reacciones: [
        [
          'Las más frecuentes (10 % o más): cefalea, nasofaringitis, infección urinaria, náuseas y fiebre.',
          '34084-4',
          'Most common adverse drug reactions ≥ 10% are: headache, nasopharyngitis, urinary tract infection, nausea, and pyrexia'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 123 mg por cápsula, según la etiqueta; el activo va como clorhidrato de migalastat. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con enfermedad de Fabry confirmada y una variante del gen GLA susceptible según ensayo in vitro.',
    actua: 'Chaperona farmacológica que se une de forma reversible al sitio activo de la alfa-galactosidasa A deficiente, la estabiliza y permite su paso al lisosoma, donde se disocia para que la enzima degrade GL-3 y lyso-Gb3.',
    recorrido: 'Tras 123 mg la biodisponibilidad absoluta es de alrededor del 75 % y el tmax de unas 3 horas; tomarlo cerca de las comidas reduce el AUC un 37 a 42 %. Tras 123 mg marcados, alrededor del 77 % se recuperó en la orina y el 20 % en las heces; el migalastat inalterado fue el 62 % de la dosis en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; se toma en ayunas, en días alternos.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; se toma en ayunas, en días alternos.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 123 mg of migalastat in a size “2” capsule',
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
      ocurre: 'Tras 123 mg la biodisponibilidad absoluta es de alrededor del 75 % y el tmax de unas 3 horas; tomarlo cerca de las comidas reduce el AUC un 37 a 42 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras 123 mg la biodisponibilidad absoluta es de alrededor del 75 % y el tmax de unas 3 horas; tomarlo cerca de las comidas reduce el AUC un 37 a 42 %.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a single GALAFOLD oral dose of 123 mg, the absolute bioavailability (AUC) of migalastat was approximately 75% and the time to peak plasma concentration (t max ) was approximately 3 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tomarlo una hora antes o después de una comida redujo el AUC medio entre un 37 % y un 42 %.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'reduced the mean migalastat AUC 0‑∞ by 37% to 42% and C max by 15% to 39% compared to the fasting state',
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
      ocurre: 'No se detectó unión a proteínas plasmáticas; el volumen de distribución aparente es de unos 89 L en pacientes con Fabry.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'No se detectó unión a proteínas plasmáticas; el volumen de distribución aparente es de unos 89 L en pacientes con Fabry.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'There was no detectable plasma protein binding following administration of [ 14 C]‑migalastat in the concentration range between 1 to 100 microM',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 89 L en estado estacionario en pacientes con Fabry.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (V z /F) of migalastat in Fabry patients was approximately 89 L (range: 77 to 133 L) at steady state',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con Fabry'
        }
      ],
      accion: {
        diana: 'Alfa-galactosidasa A (alfa-Gal A)',
        efecto: 'Chaperona farmacológica que se une de forma reversible al sitio activo de la alfa-galactosidasa A deficiente, la estabiliza y permite su paso al lisosoma, donde se disocia para que la enzima degrade GL-3 y lyso-Gb3.',
        lugar: [],
        datos: [
          {
            t: 'Chaperona farmacológica que se une de forma reversible al sitio activo de la alfa-galactosidasa A deficiente, la estabiliza y permite su paso al lisosoma, donde se disocia para que la enzima degrade GL-3 y lyso-Gb3.',
            ref: {
              f: 'dailymed-migalastat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Migalastat is a pharmacological chaperone that reversibly binds to the active site of the alpha-galactosidase A (alpha-Gal A) protein',
              codigo: '43679-0'
            }
          },
          {
            t: 'La unión estabiliza la alfa-Gal A y permite su tráfico del retículo endoplásmico al lisosoma.',
            ref: {
              f: 'dailymed-migalastat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'This binding stabilizes alpha-Gal A allowing its trafficking from the endoplasmic reticulum into the lysosome where it exerts its action',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Es sustrato de la UDP-glucuronosiltransferasa, una vía de eliminación menor; tres O-glucurónidos suponen alrededor del 13 % de la radiactividad plasmática.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Es sustrato de la UDP-glucuronosiltransferasa, una vía de eliminación menor; tres O-glucurónidos suponen alrededor del 13 % de la radiactividad plasmática.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'migalastat is a substrate for uridine diphosphate glucuronosyltransferase (UDPGT), a minor elimination pathway',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 123 mg marcados, alrededor del 77 % se recuperó en la orina y el 20 % en las heces; el migalastat inalterado fue el 62 % de la dosis en orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 123 mg marcados, alrededor del 77 % se recuperó en la orina y el 20 % en las heces; el migalastat inalterado fue el 62 % de la dosis en orina.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 77% of the total radiolabeled dose was recovered in urine and 20% of the total radiolabeled dose was recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media es de unas 4 horas y el aclaramiento aparente de 12,5 L/h.',
          ref: {
            f: 'dailymed-migalastat',
            sec: '12.3 · Farmacocinética',
            cita: 'migalastat is cleared from plasma with a mean half‑life (t ½ ) of approximately 4 hours and apparent clearance of 12.5 L/hr',
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
      valor: '75 (aprox.)',
      unidad: '%',
      analito: 'migalastat',
      ref: {
        f: 'dailymed-migalastat',
        sec: '12.3 · Farmacocinética',
        cita: 'the absolute bioavailability (AUC) of migalastat was approximately 75%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'migalastat',
      ref: {
        f: 'dailymed-migalastat',
        sec: '12.3 · Farmacocinética',
        cita: 'the time to peak plasma concentration (t max ) was approximately 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '89 (aprox.)',
      unidad: 'L',
      analito: 'migalastat',
      poblacion: 'pacientes con Fabry',
      ref: {
        f: 'dailymed-migalastat',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (V z /F) of migalastat in Fabry patients was approximately 89 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'migalastat',
      ref: { f: 'dailymed-migalastat', sec: '12.3 · Farmacocinética', cita: 'with a mean half‑life (t ½ ) of approximately 4 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '12,5',
      unidad: 'L/h',
      analito: 'migalastat',
      ref: { f: 'dailymed-migalastat', sec: '12.3 · Farmacocinética', cita: 'apparent clearance of 12.5 L/hr', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '77 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'varones sanos',
      condiciones: 'dosis oral marcada de 123 mg',
      ref: {
        f: 'dailymed-migalastat',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 77% of the total radiolabeled dose was recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-migalastat', '66dbd928-0f1c-48b1-a832-54e4abd9f1db', 'GALAFOLD (MIGALASTAT HYDROCHLORIDE) CAPSULE', 'Galafold', '18', '2025-09-15', '2026-11-19'),
    rengPubchem(176077, 'migalastat hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
