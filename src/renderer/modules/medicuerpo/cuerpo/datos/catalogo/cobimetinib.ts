import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'cobimetinib',
    nombre: 'Cobimetinib',
    clase: 'Inhibidor reversible de MEK1 y MEK2',
    sinonimos: [ 'cobimetinib fumarate', 'Cotellic' ],
    formula: 'C21H21F3IN3O2',
    masaMolar: 531.3,
    smiles: 'C1CCN[C@@H](C1)C2(CN(C2)C(=O)C3=C(C(=C(C=C3)F)F)NC4=C(C=C(C=C4)I)F)O',
    inchikey: 'BSMCAPRUBJMWDF-KRWDZBQOSA-N',
    cid: 16222096,
    iupac: '[3,4-difluoro-2-(2-fluoro-4-iodoanilino)phenyl]-[3-hydroxy-3-[(2S)-piperidin-2-yl]azetidin-1-yl]methanone',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'cobimetinib-oral',
      producto: 'Cotellic · comprimido recubierto con película',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Fumarato de cobimetinib',
        ref: { f: 'dailymed-cobimetinib', sec: '11 · Descripción', cita: 'Cobimetinib fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol 3350',
        'talc'
      ],
      usos: {
        t: 'Tratamiento del melanoma con mutación BRAF V600E o V600K, combinado con vemurafenib, y en monoterapia de las neoplasias histiocíticas, según la etiqueta.',
        ref: {
          f: 'dailymed-cobimetinib',
          sec: '1 · Indicaciones',
          cita: 'For the treatment of adult patients with unresectable or metastatic melanoma with a BRAF V600E or V600K mutation, in combination with vemurafenib',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-cobimetinib',
      advertencias: [
        {
          titulo: 'Hemorragias',
          texto: 'Vigilar los signos y síntomas de sangrado.',
          organos: [],
          ref: { f: 'dailymed-cobimetinib', sec: '5 · Advertencias y precauciones', cita: 'Monitor for signs and symptoms of bleeding', codigo: '43685-7' }
        },
        {
          titulo: 'Miocardiopatía',
          texto: 'Puede reducir la fracción de eyección del ventrículo izquierdo; valorarla antes de empezar, al mes y después cada 3 meses.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Cardiomyopathy, defined as symptomatic and asymptomatic decline in left ventricular ejection fraction (LVEF), can occur with COTELLIC',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Fotosensibilidad grave',
          texto: 'Aconsejar que se evite la exposición al sol.',
          organos: [],
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Photosensitivity : Advise patients to avoid sun exposure',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el melanoma, las más frecuentes (20 % o más): diarrea, fotosensibilidad, náuseas, fiebre y vómitos.',
          '34084-4',
          'Most common adverse reactions for COTELLIC (≥20%) are diarrhea, photosensitivity reaction, nausea, pyrexia, and vomiting'
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
    contiene: 'Comprimido recubierto con película: 20 mg por comprimido, según la etiqueta; el activo va como fumarato de cobimetinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del melanoma con mutación BRAF V600E o V600K, combinado con vemurafenib, y en monoterapia de las neoplasias histiocíticas, según la etiqueta.',
    actua: 'Inhibe de forma reversible MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
    recorrido: 'La biodisponibilidad absoluta es del 46 % y la mediana del tiempo hasta el pico, de 2,4 horas; una comida grasa no modificó el AUC ni la Cmax. Tras 20 mg marcados, el 76 % de la dosis se recuperó en las heces (6,6 % sin cambios) y el 17,8 % en la orina (1,6 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 20 mg, white, round, film-coated, debossed on one side with "COB"',
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
      ocurre: 'La biodisponibilidad absoluta es del 46 % y la mediana del tiempo hasta el pico, de 2,4 horas; una comida grasa no modificó el AUC ni la Cmax.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es del 46 % y la mediana del tiempo hasta el pico, de 2,4 horas; una comida grasa no modificó el AUC ni la Cmax.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of COTELLIC was 46% (90% CI: 40%, 53%) in healthy subjects',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta el pico es de 2,4 horas en pacientes con cáncer.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the median time to achieve peak plasma levels (T max ) was 2.4 (range:1–24) hours',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        },
        {
          t: 'Una comida rica en grasas no tuvo efecto sobre el AUC ni la Cmax.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'had no effect on cobimetinib AUC and C max after a single 20 mg COTELLIC was administered to healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'In vitro se une en un 95 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución aparente es de 806 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'In vitro se une en un 95 % a las proteínas plasmáticas, sin depender de la concentración; el volumen de distribución aparente es de 806 L.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Cobimetinib is 95% bound to human plasma proteins in vitro, independent of drug concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente estimado de 806 L en pacientes con cáncer.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The estimated apparent volume of distribution was 806 L in cancer patients based on a population PK analysis',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con cáncer'
        }
      ],
      accion: {
        diana: 'MEK1 y MEK2',
        efecto: 'Inhibe de forma reversible MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
        lugar: [],
        datos: [
          {
            t: 'Inhibe de forma reversible MEK1 y MEK2, reguladores de la vía ERK que impulsa la proliferación celular.',
            ref: {
              f: 'dailymed-cobimetinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Cobimetinib is a reversible inhibitor of mitogen-activated protein kinase (MAPK)/extracellular signal regulated kinase 1 (MEK1) and MEK2',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sus vías principales in vitro son la oxidación por la CYP3A y la glucuronidación por la UGT2B7.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sus vías principales in vitro son la oxidación por la CYP3A y la glucuronidación por la UGT2B7.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'CYP3A oxidation and UGT2B7 glucuronidation were the major pathways of cobimetinib metabolism in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 20 mg marcados, el 76 % de la dosis se recuperó en las heces (6,6 % sin cambios) y el 17,8 % en la orina (1,6 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 20 mg marcados, el 76 % de la dosis se recuperó en las heces (6,6 % sin cambios) y el 17,8 % en la orina (1,6 % sin cambios).',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: '76% of the dose was recovered in the feces (with 6.6% as unchanged drug) and 17.8% of the dose was recovered in the urine (with 1.6% as unchanged drug)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida media de eliminación es de 44 horas y el aclaramiento aparente, de 13,8 L/h.',
          ref: {
            f: 'dailymed-cobimetinib',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean elimination half-life (t 1/2 ) was 44 (range: 23–70) hours and the mean apparent clearance (CL/F) was 13.8 L/h (61% CV)',
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
      nombre: 'Biodisponibilidad absoluta',
      valor: '46',
      unidad: '%',
      analito: 'cobimetinib',
      poblacion: 'sujetos sanos',
      ref: { f: 'dailymed-cobimetinib', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of COTELLIC was 46%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico',
      valor: '2,4',
      unidad: 'h',
      analito: 'cobimetinib',
      poblacion: 'pacientes con cáncer',
      condiciones: '60 mg una vez al día',
      ref: {
        f: 'dailymed-cobimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the median time to achieve peak plasma levels (T max ) was 2.4 (range:1–24) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '95',
      unidad: '%',
      analito: 'cobimetinib',
      ref: {
        f: 'dailymed-cobimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Cobimetinib is 95% bound to human plasma proteins in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '806',
      unidad: 'L',
      analito: 'cobimetinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-cobimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The estimated apparent volume of distribution was 806 L in cancer patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida media de eliminación',
      valor: '44',
      unidad: 'h',
      analito: 'cobimetinib',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-cobimetinib',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean elimination half-life (t 1/2 ) was 44 (range: 23–70) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces',
      valor: '76',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis única marcada de 20 mg',
      ref: {
        f: 'dailymed-cobimetinib',
        sec: '12.3 · Farmacocinética',
        cita: '76% of the dose was recovered in the feces (with 6.6% as unchanged drug)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-cobimetinib', 'c387579e-cee0-4334-bd1e-73f93ac1bde6', 'COTELLIC (COBIMETINIB) TABLET, FILM COATED', 'Cotellic', '24', '2026-09-02', '2026-11-19'),
    rengPubchem(16222096, 'cobimetinib fumarate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
