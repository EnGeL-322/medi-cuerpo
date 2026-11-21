import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lofexidina',
    nombre: 'Lofexidina',
    clase: 'Agonista adrenérgico alfa-2 central (abstinencia de opioides)',
    sinonimos: [ 'lofexidine', 'Lucemyra' ],
    formula: 'C11H12Cl2N2O',
    masaMolar: 259.13,
    smiles: 'CC(C1=NCCN1)OC2=C(C=CC=C2Cl)Cl',
    inchikey: 'KSMAGQUYOIHWFS-UHFFFAOYSA-N',
    cid: 30668,
    iupac: '2-[1-(2,6-dichlorophenoxy)ethyl]-4,5-dihydro-1H-imidazole',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'lofexidina-oral',
      producto: 'LUCEMYRA · comprimido recubierto con película',
      titular: 'BIOCORRX PHARMACEUTICALS INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.2 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de lofexidina',
        ref: { f: 'dailymed-lofexidina', sec: '11 · Descripción', cita: 'Lofexidine hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose, unspecified form',
        'citric acid monohydrate',
        'povidone, unspecified',
        'microcrystalline cellulose',
        'calcium stearate',
        'sodium lauryl sulfate',
        'opadry oy-s-29019 clear',
        'indigotindisulfonate sodium',
        'fd&c yellow no. 6'
      ],
      usos: {
        t: 'Atenuar los síntomas de abstinencia de opioides para facilitar la retirada brusca en adultos.',
        ref: {
          f: 'dailymed-lofexidina',
          sec: '1 · Indicaciones',
          cita: 'LUCEMYRA is indicated for mitigation of opioid withdrawal symptoms to facilitate abrupt opioid discontinuation in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lofexidina',
      advertencias: [
        {
          titulo: 'Hipotensión, bradicardia y síncope',
          texto: 'Puede bajar la presión arterial y el pulso y causar síncope; vigilar los signos vitales antes de cada dosis.',
          organos: [],
          ref: {
            f: 'dailymed-lofexidina',
            sec: '5 · Advertencias y precauciones',
            cita: 'May cause a decrease in blood pressure, a decrease in pulse, and syncope',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Alarga el intervalo QT; evitarla en el síndrome de QT largo congénito.',
          organos: [],
          ref: {
            f: 'dailymed-lofexidina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Risk of QT Prolongation : LUCEMYRA prolongs the QT interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mayor depresión del sistema nervioso central con otros depresores',
          texto: 'Potencia los efectos depresores del sistema nervioso central de las benzodiacepinas y puede potenciar los del alcohol y otros sedantes.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lofexidina',
            sec: '5 · Advertencias y precauciones',
            cita: 'LUCEMYRA potentiates the CNS depressant effects of benzodiazepines and may potentiate the CNS depressant effects of alcohol, barbiturates, and other sedating drugs',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Riesgo de sobredosis de opioides al dejarlos',
          texto: 'Quien completa la retirada de opioides tiene más riesgo de sobredosis mortal si vuelve a consumirlos.',
          organos: [],
          ref: {
            f: 'dailymed-lofexidina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Patients who complete opioid discontinuation are at an increased risk of fatal overdose should they resume opioid use',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más y claramente más que con placebo): hipotensión ortostática, bradicardia, hipotensión, mareo, somnolencia, sedación y sequedad de boca.',
          '34084-4',
          'Most common adverse reactions (incidence ≥ 10% and notably more frequent than placebo) are orthostatic hypotension, bradycardia, hypotension, dizziness, somnolence, sedation, and dry mouth'
        ],
        [
          'Entre las reacciones graves descritas en otras secciones figuran la hipotensión, la bradicardia y el síncope, la prolongación del QT y la depresión del sistema nervioso central.',
          '34084-4',
          'Hypotension, Bradycardia, and Syncope [see Warnings and Precautions (5.1) ] QT Prolongation'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 0.2 mg por comprimido, según la etiqueta; el activo va como clorhidrato de lofexidina. Los excipientes no son el principio activo.',
    usos: 'Atenuar los síntomas de abstinencia de opioides para facilitar la retirada brusca en adultos.',
    actua: 'Agonista adrenérgico alfa-2 central: se une a receptores de las neuronas adrenérgicas, reduce la liberación de noradrenalina y disminuye el tono simpático.',
    recorrido: 'Se absorbe bien y alcanza el pico 3 a 5 horas después de una dosis única; la biodisponibilidad absoluta fue del 72 % y los alimentos no alteran su farmacocinética. Un estudio de balance de masas mostró una recuperación casi completa en la orina (93,5 % en 144 horas) y un 0,92 % adicional en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '3 · Formas y concentraciones',
            cita: 'LUCEMYRA is available as round, peach-colored, film-coated tablets',
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
      ocurre: 'Se absorbe bien y alcanza el pico 3 a 5 horas después de una dosis única; la biodisponibilidad absoluta fue del 72 % y los alimentos no alteran su farmacocinética.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien y alcanza el pico 3 a 5 horas después de una dosis única; la biodisponibilidad absoluta fue del 72 % y los alimentos no alteran su farmacocinética.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'LUCEMYRA is well absorbed and achieves peak plasma concentration 3 to 5 hours after administration of a single dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta de una dosis oral frente a la vía intravenosa fue del 72 %.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of a single oral LUCEMYRA dose (0.36 mg in solution) compared with an intravenous infusion (0.2 mg infused for 200 minutes) was 72%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tomarla con alimentos no altera su farmacocinética.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of LUCEMYRA with food does not alter its pharmacokinetics',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'tejidos', 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente (480 L por vía oral) supera mucho el volumen corporal, lo que indica una distribución extensa a los tejidos; se une en un 55 % a las proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente (480 L por vía oral) supera mucho el volumen corporal, lo que indica una distribución extensa a los tejidos; se une en un 55 % a las proteínas.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'which are appreciably greater than total body volume, suggesting extensive LUCEMYRA distribution into body tissue',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas es de alrededor del 55 % y no se capta preferentemente en las células de la sangre.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'LUCEMYRA protein binding is approximately 55%. LUCEMYRA is not preferentially taken up by blood cells',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico alfa-2',
        efecto: 'Agonista adrenérgico alfa-2 central: se une a receptores de las neuronas adrenérgicas, reduce la liberación de noradrenalina y disminuye el tono simpático.',
        lugar: [ 'nervios' ],
        datos: [
          {
            t: 'Agonista adrenérgico alfa-2 central: se une a receptores de las neuronas adrenérgicas, reduce la liberación de noradrenalina y disminuye el tono simpático.',
            ref: {
              f: 'dailymed-lofexidina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lofexidine is a central alpha-2 adrenergic agonist that binds to receptors on adrenergic neurons. This reduces the release of norepinephrine and decreases sympathetic tone',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor del 30 % de la dosis se convierte en metabolitos inactivos en el primer paso; en microsomas de hígado humano, la CYP2D6 es la principal responsable de su metabolismo hepático.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor del 30 % de la dosis se convierte en metabolitos inactivos en el primer paso; en microsomas de hígado humano, la CYP2D6 es la principal responsable de su metabolismo hepático.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 30% of the administered LUCEMYRA dose is converted to inactive metabolites during the first pass effect associated with drug absorption from the gut',
            codigo: '43682-4'
          }
        },
        {
          t: 'In vitro, con microsomas de hígado humano, la CYP2D6 es la principal contribuyente al metabolismo hepático, y la CYP1A2 y la CYP2C19 también pueden metabolizarla.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'the major contributor to the hepatic metabolism of LUCEMYRA is CYP2D6, with CYP1A2 and CYP2C19 also capable of metabolizing LUCEMYRA',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos del primer paso',
          actividad: 'inactivo',
          nota: 'Metabolitos inactivos formados en el primer paso.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 30% of the administered LUCEMYRA dose is converted to inactive metabolites during the first pass effect',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Un estudio de balance de masas mostró una recuperación casi completa en la orina (93,5 % en 144 horas) y un 0,92 % adicional en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Un estudio de balance de masas mostró una recuperación casi completa en la orina (93,5 % en 144 horas) y un 0,92 % adicional en las heces.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'A mass balance study of LUCEMYRA showed nearly complete recovery of radiolabel in urine (93.5%) over 144 hours postdose, with an additional 0.92% recovered in the feces over 216 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de unas 11 a 13 horas tras la primera dosis y de 17 a 22 horas en estado estacionario.',
          ref: {
            f: 'dailymed-lofexidina',
            sec: '12.3 · Farmacocinética',
            cita: 'LUCEMYRA has a terminal half-life of approximately 11 to 13 hours following the first dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (dosis única)',
      valor: '3-5',
      unidad: 'h',
      analito: 'lofexidina',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-lofexidina',
        sec: '12.3 · Farmacocinética',
        cita: 'achieves peak plasma concentration 3 to 5 hours after administration of a single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '72',
      unidad: '%',
      analito: 'lofexidina',
      condiciones: 'solución oral de 0,36 mg',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-lofexidina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of a single oral LUCEMYRA dose (0.36 mg in solution) compared with an intravenous infusion (0.2 mg infused for 200 minutes) was 72%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente tras la toma oral',
      valor: '480,0',
      unidad: 'L',
      analito: 'lofexidina',
      ref: {
        f: 'dailymed-lofexidina',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean LUCEMYRA apparent volume of distribution and volume of distribution values following the administration of an oral dose and an intravenous dose were 480.0 L and 297.9 L, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '55 (aprox.)',
      unidad: '%',
      analito: 'lofexidina',
      ref: { f: 'dailymed-lofexidina', sec: '12.3 · Farmacocinética', cita: 'LUCEMYRA protein binding is approximately 55%', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento medio tras infusión intravenosa',
      valor: '17,6',
      unidad: 'L/h',
      analito: 'lofexidina',
      condiciones: 'infusión intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-lofexidina',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life is approximately 12 hours and mean clearance is 17.6 L/h following an IV infusion',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina en 144 horas',
      valor: '93,5',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'estudio de balance de masas',
      ref: {
        f: 'dailymed-lofexidina',
        sec: '12.3 · Farmacocinética',
        cita: 'showed nearly complete recovery of radiolabel in urine (93.5%) over 144 hours postdose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lofexidina', '0a848cc2-4dda-40d9-8b01-d789fe8981ed', 'LUCEMYRA (LOFEXIDINE HYDROCHLORIDE) TABLET, FILM COATED', 'LUCEMYRA', '2', '2026-08-17', '2026-11-19'),
    rengPubchem(30668, 'lofexidine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
