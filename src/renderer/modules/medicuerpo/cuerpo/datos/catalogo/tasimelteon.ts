import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tasimelteon',
    nombre: 'Tasimelteón',
    clase: 'Agonista de los receptores de melatonina MT1 y MT2',
    sinonimos: [ 'tasimelteon', 'Hetlioz' ],
    formula: 'C15H19NO2',
    masaMolar: 245.32,
    smiles: 'CCC(=O)NC[C@@H]1C[C@H]1C2=C3CCOC3=CC=C2',
    inchikey: 'PTOIAAWZLUQTIO-GXFFZTMASA-N',
    cid: 10220503,
    iupac: 'N-[[(1R,2R)-2-(2,3-dihydro-1-benzofuran-4-yl)cyclopropyl]methyl]propanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'tasimelteon-oral',
      producto: 'Hetlioz · cápsula',
      titular: 'VANDA PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '20 mg por cápsula, según la etiqueta',
      excipientes: [
        'anhydrous lactose',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'fd&c blue no. 1',
        'fd&c red no. 3',
        'fd&c yellow no. 6',
        'titanium dioxide',
        'gelatin, unspecified'
      ],
      usos: {
        t: 'Cápsulas: trastorno del ritmo sueño-vigilia distinto de 24 horas en adultos y alteraciones del sueño nocturno en el síndrome de Smith-Magenis desde 16 años.',
        ref: {
          f: 'dailymed-tasimelteon',
          sec: '1 · Indicaciones',
          cita: 'HETLIOZ capsules are indicated for the treatment of: Non-24-Hour Sleep-Wake Disorder (Non-24) in adults ( 1 ) Nighttime sleep disturbances in Smith-Magenis Syndrome (SMS) in patients 16 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tasimelteon',
      advertencias: [
        {
          titulo: 'Somnolencia',
          texto: 'Después de tomarlo hay que limitar la actividad a prepararse para dormir, porque puede afectar a tareas que exigen plena alerta.',
          organos: [],
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '5 · Advertencias y precauciones',
            cita: 'HETLIOZ can potentially impair the performance of activities requiring complete mental alertness',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 5 % y al menos el doble que con placebo): cefalea, aumento de la ALT, pesadillas o sueños anómalos e infección respiratoria alta o urinaria.',
          '34084-4',
          'most common adverse reactions (incidence >5% and at least twice as high on HETLIOZ than on placebo) were headache, increased alanine aminotransferase, nightmares or unusual dreams, and upper respiratory or urinary tract infection'
        ],
        [
          'En los estudios controlados con placebo, el 6 % de los pacientes dejó el tratamiento por un acontecimiento adverso, frente al 4 % con placebo.',
          '34084-4',
          'In placebo-controlled studies, 6% of patients exposed to HETLIOZ discontinued treatment due to an adverse event, compared with 4% of patients who received placebo'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 20 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Cápsulas: trastorno del ritmo sueño-vigilia distinto de 24 horas en adultos y alteraciones del sueño nocturno en el síndrome de Smith-Magenis desde 16 años.',
    actua: 'Su mecanismo no está claro; es un agonista de los receptores de melatonina MT1 y MT2, que se cree que intervienen en el control de los ritmos circadianos.',
    recorrido: 'La biodisponibilidad oral absoluta es del 38,3 % y el pico de la cápsula aparece entre 0,5 y 3 horas en ayunas. Tras una dosis oral marcada, el 80 % de la radiactividad salió por la orina y alrededor del 4 % por las heces; menos del 1 % se excretó como fármaco original.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 20 mg size 1 dark blue opaque, hard gelatin capsules',
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
      ocurre: 'La biodisponibilidad oral absoluta es del 38,3 % y el pico de la cápsula aparece entre 0,5 y 3 horas en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 38,3 % y el pico de la cápsula aparece entre 0,5 y 3 horas en ayunas.',
          ref: { f: 'dailymed-tasimelteon', sec: '12.3 · Farmacocinética', cita: 'The absolute oral bioavailability is 38.3%', codigo: '43682-4' }
        },
        {
          t: 'El pico de la cápsula aparece unas 0,5 a 3 horas después de la toma en ayunas.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'The peak concentration (T max ) of tasimelteon capsule occurred approximately 0.5 to 3 hours after fasted oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas la Cmax fue un 44 % menor y la mediana del Tmax se retrasó alrededor de 1,75 horas.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'When administered with a high-fat meal, the Cmax of tasimelteon was 44% lower than when given in a fasted state, and the median Tmax was delayed by approximately 1.75 hours',
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
      ocurre: 'El volumen de distribución oral aparente en estado estacionario es de unos 59-126 L y se une en alrededor de un 90 % a las proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución oral aparente en estado estacionario es de unos 59-126 L y se une en alrededor de un 90 % a las proteínas.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent oral volume of distribution of tasimelteon at steady state in young healthy subjects is approximately 59 - 126 L',
            codigo: '43682-4'
          }
        },
        {
          t: 'A concentraciones terapéuticas se une en alrededor de un 90 % a las proteínas.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'At therapeutic concentrations, tasimelteon is about 90% bound to proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de melatonina MT1 y MT2',
        efecto: 'Su mecanismo no está claro; es un agonista de los receptores de melatonina MT1 y MT2, que se cree que intervienen en el control de los ritmos circadianos.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo no está claro; es un agonista de los receptores de melatonina MT1 y MT2, que se cree que intervienen en el control de los ritmos circadianos.',
            ref: {
              f: 'dailymed-tasimelteon',
              sec: '12.1 · Mecanismo de acción',
              cita: 'tasimelteon is an agonist at melatonin MT 1 and MT 2 receptors which are thought to be involved in the control of circadian rhythms',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza de forma extensa, sobre todo por oxidación en varios sitios y desalquilación oxidativa; las isoenzimas principales son CYP1A2 y CYP3A4, y la glucuronidación fenólica es la vía principal de fase II.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza de forma extensa, sobre todo por oxidación en varios sitios y desalquilación oxidativa; las isoenzimas principales son CYP1A2 y CYP3A4, y la glucuronidación fenólica es la vía principal de fase II.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP1A2 and CYP3A4 are the major isozymes involved in the metabolism of tasimelteon',
            codigo: '43682-4'
          }
        },
        {
          t: 'La glucuronidación fenólica es la vía principal de fase II.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'Phenolic glucuronidation is the major phase II metabolic route',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos principales',
          actividad: 'desconocida',
          nota: 'Tienen 13 veces o menos actividad sobre los receptores de melatonina que el tasimelteón.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'Major metabolites had 13-fold or less activity at melatonin receptors compared to tasimelteon',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 80 % de la radiactividad salió por la orina y alrededor del 4 % por las heces; menos del 1 % se excretó como fármaco original.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 80 % de la radiactividad salió por la orina y alrededor del 4 % por las heces; menos del 1 % se excretó como fármaco original.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: '80% of total radioactivity was excreted in urine and approximately 4% in feces, resulting in a mean recovery of 84%',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media es de 1,3 ± 0,4 horas.',
          ref: {
            f: 'dailymed-tasimelteon',
            sec: '12.3 · Farmacocinética',
            cita: 'The observed mean elimination half-life for tasimelteon is 1.3 ± 0.4 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '38,3',
      unidad: '%',
      analito: 'tasimelteón',
      ref: { f: 'dailymed-tasimelteon', sec: '12.3 · Farmacocinética', cita: 'The absolute oral bioavailability is 38.3%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (cápsula, en ayunas)',
      valor: '0,5-3 (aprox.)',
      unidad: 'h',
      analito: 'tasimelteón',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-tasimelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'The peak concentration (T max ) of tasimelteon capsule occurred approximately 0.5 to 3 hours after fasted oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución oral aparente en estado estacionario',
      valor: '59-126 (aprox.)',
      unidad: 'L',
      analito: 'tasimelteón',
      poblacion: 'sujetos sanos jóvenes',
      ref: {
        f: 'dailymed-tasimelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent oral volume of distribution of tasimelteon at steady state in young healthy subjects is approximately 59 - 126 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'tasimelteón',
      ref: {
        f: 'dailymed-tasimelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'At therapeutic concentrations, tasimelteon is about 90% bound to proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '1,3 ± 0,4',
      unidad: 'h',
      analito: 'tasimelteón',
      ref: {
        f: 'dailymed-tasimelteon',
        sec: '12.3 · Farmacocinética',
        cita: 'The observed mean elimination half-life for tasimelteon is 1.3 ± 0.4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad excretada en la orina',
      valor: '80',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral marcada',
      ref: { f: 'dailymed-tasimelteon', sec: '12.3 · Farmacocinética', cita: '80% of total radioactivity was excreted in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tasimelteon', 'ca4a9b63-708e-49e9-8f9b-010625443b90', 'HETLIOZ (TASIMELTEON) CAPSULE HETLIOZ LQ (TASIMELTEON) SUSPENSION', 'Hetlioz', '15', '2026-08-06', '2026-11-19'),
    rengPubchem(10220503, 'tasimelteon', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
