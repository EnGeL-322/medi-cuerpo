import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vorinostat',
    nombre: 'Vorinostat',
    clase: 'Inhibidor de las histona desacetilasas (HDAC)',
    sinonimos: [ 'vorinostat', 'Zolinza' ],
    formula: 'C14H20N2O3',
    masaMolar: 264.32,
    smiles: 'C1=CC=C(C=C1)NC(=O)CCCCCCC(=O)NO',
    inchikey: 'WAEXFXRVDQXREF-UHFFFAOYSA-N',
    cid: 5311,
    iupac: "N'-hydroxy-N-phenyloctanediamide",
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'vorinostat-oral',
      producto: 'ZOLINZA · cápsula',
      titular: 'MERCK SHARP & DOHME LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      excipientes: [
        'gelatin, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'sodium lauryl sulfate',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de las manifestaciones cutáneas del linfoma cutáneo de células T progresivo, persistente o recidivante tras dos tratamientos sistémicos.',
        ref: {
          f: 'dailymed-vorinostat',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of cutaneous manifestations in patients with cutaneous T-cell lymphoma who have progressive, persistent or recurrent disease on or following two systemic therapies',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vorinostat',
      advertencias: [
        {
          titulo: 'Tromboembolismo',
          texto: 'Vigilar los signos y síntomas, sobre todo con antecedentes de episodios tromboembólicos.',
          organos: [],
          ref: {
            f: 'dailymed-vorinostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor for signs and symptoms of these events, particularly in patients with a prior history of thromboembolic events',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mielosupresión',
          texto: 'Hacer hemogramas cada 2 semanas los 2 primeros meses y después cada mes.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-vorinostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor blood counts every 2 weeks during the first 2 months of therapy and monthly thereafter',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperglucemia',
          texto: 'Medir la glucosa sérica cada 2 semanas los 2 primeros meses y después cada mes.',
          organos: [],
          ref: {
            f: 'dailymed-vorinostat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor serum glucose every 2 weeks during the first 2 months of therapy and monthly thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): diarrea, fatiga, náuseas, trombocitopenia, anorexia y disgeusia.',
          '34084-4',
          'The most common adverse reactions (incidence ≥20%) are diarrhea, fatigue, nausea, thrombocytopenia, anorexia and dysgeusia'
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
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las manifestaciones cutáneas del linfoma cutáneo de células T progresivo, persistente o recidivante tras dos tratamientos sistémicos.',
    actua: 'Inhibe las histona desacetilasas HDAC1, HDAC2, HDAC3 y HDAC6 a concentraciones nanomolares; así se acumulan histonas acetiladas y se detiene el ciclo celular o se induce la apoptosis de algunas células tumorales.',
    recorrido: 'Con una comida rica en grasas aumenta un 33 % la cantidad absorbida y el pico se retrasa 2,5 horas respecto al ayuno. Se elimina sobre todo por metabolismo: menos del 1 % sale sin cambios por la orina, de modo que la excreción renal del fármaco no es relevante.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
          ref: { f: 'dailymed-vorinostat', sec: '3 · Formas y concentraciones', cita: '100 mg white, opaque, hard gelatin capsules', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Con una comida rica en grasas aumenta un 33 % la cantidad absorbida y el pico se retrasa 2,5 horas respecto al ayuno.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con una comida rica en grasas aumenta un 33 % la cantidad absorbida y el pico se retrasa 2,5 horas respecto al ayuno.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'oral administration of vorinostat with a high-fat meal resulted in an increase (33%) in the extent of absorption and a modest decrease in the rate of absorption (T max delayed 2.5 hours) compared to the fasted state',
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
      ocurre: 'Se une en alrededor del 71 % a las proteínas del plasma humano.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor del 71 % a las proteínas del plasma humano.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorinostat is approximately 71% bound to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'HDAC1, HDAC2, HDAC3 y HDAC6',
        efecto: 'Inhibe las histona desacetilasas HDAC1, HDAC2, HDAC3 y HDAC6 a concentraciones nanomolares; así se acumulan histonas acetiladas y se detiene el ciclo celular o se induce la apoptosis de algunas células tumorales.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe las histona desacetilasas HDAC1, HDAC2, HDAC3 y HDAC6 a concentraciones nanomolares; así se acumulan histonas acetiladas y se detiene el ciclo celular o se induce la apoptosis de algunas células tumorales.',
            ref: {
              f: 'dailymed-vorinostat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vorinostat inhibits the enzymatic activity of histone deacetylases HDAC1, HDAC2 and HDAC3 (Class I) and HDAC6 (Class II) at nanomolar concentrations',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sus vías principales son la glucuronidación y la hidrólisis seguida de beta-oxidación; en microsomas hepáticos humanos, la transformación por el citocromo P450 es mínima.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sus vías principales son la glucuronidación y la hidrólisis seguida de beta-oxidación; en microsomas hepáticos humanos, la transformación por el citocromo P450 es mínima.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The major pathways of vorinostat metabolism involve glucuronidation and hydrolysis followed by',
            codigo: '43682-4'
          }
        },
        {
          t: 'En microsomas hepáticos humanos, la biotransformación por el citocromo P450 es mínima.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies using human liver microsomes indicate negligible biotransformation by cytochromes P450 (CYP)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'O-glucurónido de vorinostat',
          actividad: 'inactivo',
          nota: 'Uno de los dos metabolitos medidos en suero.',
          ref: { f: 'dailymed-vorinostat', sec: '12.3 · Farmacocinética', cita: 'Both metabolites are pharmacologically inactive', codigo: '43682-4' }
        },
        {
          nombre: 'Ácido 4-anilino-4-oxobutanoico',
          actividad: 'inactivo',
          nota: 'Uno de los dos metabolitos medidos en suero.',
          ref: { f: 'dailymed-vorinostat', sec: '12.3 · Farmacocinética', cita: 'Both metabolites are pharmacologically inactive', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo: menos del 1 % sale sin cambios por la orina, de modo que la excreción renal del fármaco no es relevante.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo: menos del 1 % sale sin cambios por la orina, de modo que la excreción renal del fármaco no es relevante.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Vorinostat is eliminated predominantly through metabolism with less than 1% of the dose recovered as unchanged drug in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La recuperación urinaria total del vorinostat y sus dos metabolitos es del 52 % de la dosis.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'Total urinary recovery of vorinostat and these two metabolites averaged 52±13.3% of vorinostat dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media es de unas 2 horas para el vorinostat y su O-glucurónido.',
          ref: {
            f: 'dailymed-vorinostat',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean terminal half-life (t ½ ) was ~2.0 hours for both vorinostat and the O -glucuronide metabolite',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '71 (aprox.)',
      unidad: '%',
      analito: 'vorinostat',
      ref: {
        f: 'dailymed-vorinostat',
        sec: '12.3 · Farmacocinética',
        cita: 'Vorinostat is approximately 71% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'vorinostat',
      ref: {
        f: 'dailymed-vorinostat',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean terminal half-life (t ½ ) was ~2.0 hours for both vorinostat and the O -glucuronide metabolite',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperación urinaria total (fármaco y dos metabolitos)',
      valor: '52',
      unidad: '% de la dosis',
      analito: 'vorinostat y metabolitos',
      ref: {
        f: 'dailymed-vorinostat',
        sec: '12.3 · Farmacocinética',
        cita: 'Total urinary recovery of vorinostat and these two metabolites averaged 52±13.3% of vorinostat dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vorinostat', 'cd86ee78-2781-468b-930c-3c4677bcc092', 'ZOLINZA (VORINOSTAT) CAPSULE', 'ZOLINZA', '27', '2025-11-17', '2026-11-19'),
    rengPubchem(5311, 'vorinostat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
