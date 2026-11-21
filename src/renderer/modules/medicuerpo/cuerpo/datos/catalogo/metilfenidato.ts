import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metilfenidato',
    nombre: 'Metilfenidato',
    clase: 'Estimulante del sistema nervioso central',
    sinonimos: [ 'methylphenidate', 'Ritalin' ],
    formula: 'C14H19NO2',
    masaMolar: 233.31,
    smiles: 'COC(=O)C(C1CCCCN1)C2=CC=CC=C2',
    inchikey: 'DUGOZIWVEXMGBE-UHFFFAOYSA-N',
    cid: 4158,
    iupac: 'methyl 2-phenyl-2-piperidin-2-ylacetate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'metilfenidato-oral',
      producto: 'Ritalin · comprimido',
      titular: 'SANDOZ INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg, 10 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de metilfenidato',
        ref: { f: 'dailymed-metilfenidato', sec: '11 · Descripción', cita: 'methylphenidate hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'd&c yellow no. 10', 'lactose, unspecified form', 'magnesium stearate', 'polyethylene glycol, unspecified', 'sucrose', 'talc' ],
      usos: {
        t: 'Trastorno por déficit de atención e hiperactividad (TDAH) desde los 6 años y narcolepsia.',
        ref: {
          f: 'dailymed-metilfenidato',
          sec: '1 · Indicaciones',
          cita: 'Attention Deficit Hyperactivity Disorders (ADHD) in pediatric patients 6 years and older and adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-metilfenidato',
      advertencias: [
        {
          titulo: 'Abuso y adicción',
          texto: 'Tiene un alto potencial de abuso y mal uso, que puede llevar a la adicción.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-metilfenidato',
            sec: 'Advertencia destacada',
            cita: 'has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Presión arterial y frecuencia cardiaca',
          texto: 'Los estimulantes aumentan la presión arterial (2 a 4 mmHg de media) y la frecuencia cardiaca (3 a 6 latidos por minuto).',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-metilfenidato',
            sec: '5 · Advertencias y precauciones',
            cita: 'CNS stimulants cause an increase in blood pressure',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Disminución del apetito, menos aumento de peso y freno del crecimiento con el uso prolongado en niños.',
          '34084-4',
          'decreased appetite, reduced weight gain, and suppression of growth during prolonged use in pediatric patients'
        ],
        [
          'Psiquiátricas: insomnio, ansiedad, inquietud, agitación y ánimo deprimido.',
          '34084-4',
          'insomnia, anxiety, restlessness, agitation, psychosis'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg, 10 mg o 20 mg por comprimido, según la etiqueta; el activo va como clorhidrato de metilfenidato. Los excipientes no son el principio activo.',
    usos: 'Trastorno por déficit de atención e hiperactividad (TDAH) desde los 6 años y narcolepsia.',
    actua: 'Es un estimulante del sistema nervioso central; la etiqueta indica que no se conoce cómo actúa en el TDAH y la narcolepsia.',
    recorrido: 'Biodisponibilidad absoluta baja y distinta para cada enantiómero (22 % para el d y 5 % para el l). Con 10 mg, el pico plasmático, de unos 4,3 ng/mL, llega de media a las 2 horas; la comida no tiene un efecto relevante. Entre el 78 % y el 97 % de la dosis sale por la orina y del 1 % al 3 % por las heces, como metabolitos, en 48 a 96 horas; la mayor parte como ácido ritalínico (60-86 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo; la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-metilfenidato', sec: '3 · Formas y concentraciones', cita: '5 mg, round, yellow, flat with CIBA monogram', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Biodisponibilidad absoluta baja y distinta para cada enantiómero (22 % para el d y 5 % para el l). Con 10 mg, el pico plasmático, de unos 4,3 ng/mL, llega de media a las 2 horas; la comida no tiene un efecto relevante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Biodisponibilidad absoluta baja y distinta para cada enantiómero (22 % para el d y 5 % para el l). Con 10 mg, el pico plasmático, de unos 4,3 ng/mL, llega de media a las 2 horas; la comida no tiene un efecto relevante.',
          ref: {
            f: 'dailymed-metilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of methylphenidate is 22 ± 8 % for the d-enantiomer',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida no tiene un efecto relevante en su absorción.',
          ref: {
            f: 'dailymed-metilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'Ingestion with food has no relevant effect on absorption of Ritalin',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une poco a proteínas del plasma (10-33 %); volumen de distribución de 2,65 L/kg para el d-metilfenidato y 1,80 L/kg para el l.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une poco a proteínas del plasma (10-33 %); volumen de distribución de 2,65 L/kg para el d-metilfenidato y 1,80 L/kg para el l.',
          ref: { f: 'dailymed-metilfenidato', sec: '12.3 · Farmacocinética', cita: 'Binding to plasma proteins is low (10% to 33%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'Es un estimulante del sistema nervioso central; la etiqueta indica que no se conoce cómo actúa en el TDAH y la narcolepsia.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un estimulante del sistema nervioso central; la etiqueta indica que no se conoce cómo actúa en el TDAH y la narcolepsia.',
            ref: {
              f: 'dailymed-metilfenidato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mode of therapeutic action in ADHD and narcolepsy is not known',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma sobre todo por desesterificación en ácido ritalínico, con poca o ninguna actividad farmacológica.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma sobre todo por desesterificación en ácido ritalínico, con poca o ninguna actividad farmacológica.',
          ref: {
            f: 'dailymed-metilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: 'metabolized primarily by de-esterification to alpha-phenyl-piperidine acetic acid (ritalinic acid)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido ritalínico',
          actividad: 'inactivo',
          nota: 'Poca o ninguna actividad farmacológica.',
          ref: { f: 'dailymed-metilfenidato', sec: '12.3 · Farmacocinética', cita: 'which has little or no pharmacologic activity', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 78 % y el 97 % de la dosis sale por la orina y del 1 % al 3 % por las heces, como metabolitos, en 48 a 96 horas; la mayor parte como ácido ritalínico (60-86 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 78 % y el 97 % de la dosis sale por la orina y del 1 % al 3 % por las heces, como metabolitos, en 48 a 96 horas; la mayor parte como ácido ritalínico (60-86 %).',
          ref: {
            f: 'dailymed-metilfenidato',
            sec: '12.3 · Farmacocinética',
            cita: '78% to 97% of the dose is excreted in the urine and 1% to 3% in feces in the form of metabolites',
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
      valor: '22 (± 8) y 5 (± 3)',
      unidad: '%',
      analito: 'd-metilfenidato y l-metilfenidato',
      ref: {
        f: 'dailymed-metilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of methylphenidate is 22 ± 8 % for the d-enantiomer and 5 ± 3 % for the l-enantiomer',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima',
      valor: '4,3 (± 2,3)',
      unidad: 'ng/mL',
      analito: 'metilfenidato',
      condiciones: 'comprimido de 10 mg',
      ref: {
        f: 'dailymed-metilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations of approximately 4.3 ± 2.3 ng/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (media)',
      valor: '2',
      unidad: 'h',
      analito: 'metilfenidato',
      condiciones: 'comprimido de 10 mg',
      ref: {
        f: 'dailymed-metilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'were reached on an average of 2 hours after administration of 10 mg tablet',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico en niños',
      valor: '1,9 (0,3-4,4)',
      unidad: 'h',
      analito: 'metilfenidato',
      poblacion: 'niños',
      ref: {
        f: 'dailymed-metilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to peak rate in children was 1.9 hours (0.3 to 4.4 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '10-33',
      unidad: '%',
      analito: 'metilfenidato',
      ref: { f: 'dailymed-metilfenidato', sec: '12.3 · Farmacocinética', cita: 'Binding to plasma proteins is low (10% to 33%)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina como ácido ritalínico',
      valor: '60-86',
      unidad: '% de la dosis',
      analito: 'ácido ritalínico',
      ref: {
        f: 'dailymed-metilfenidato',
        sec: '12.3 · Farmacocinética',
        cita: 'Most of the dose is excreted in the urine as alpha-phenyl-2-piperidine acetic acid (60% to 86%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metilfenidato', 'd6fb2750-cdab-4749-ba0d-7534840a5892', 'RITALIN (METHYLPHENIDATE HYDROCHLORIDE) TABLET', 'Ritalin', '3', '2025-02-21', '2026-11-12'),
    rengPubchem(4158, 'methylphenidate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
