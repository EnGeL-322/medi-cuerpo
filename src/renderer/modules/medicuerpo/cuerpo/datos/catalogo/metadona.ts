import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'metadona',
    nombre: 'Metadona',
    clase: 'Agonista opioide mu sintético',
    sinonimos: [ 'methadone hydrochloride', 'Dolophine' ],
    formula: 'C21H27NO',
    masaMolar: 309.4,
    smiles: 'CCC(=O)C(CC(C)N(C)C)(C1=CC=CC=C1)C2=CC=CC=C2',
    inchikey: 'USSIQXCVUWKGNF-UHFFFAOYSA-N',
    cid: 4095,
    iupac: '6-(dimethylamino)-4,4-diphenylheptan-3-one',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'metadona-oral',
      producto: 'METHADONE HYDROCHLORIDE · comprimido',
      titular: 'HIKMA PHARMACEUTICALS USA INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de metadona',
        ref: { f: 'dailymed-metadona', sec: '11 · Descripción', cita: 'Methadone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [ 'magnesium stearate', 'microcrystalline cellulose', 'starch, corn' ],
      usos: {
        t: 'Dolor intenso y persistente que requiere un opioide, y desintoxicación o mantenimiento en la adicción a opioides, según la etiqueta.',
        ref: {
          f: 'dailymed-metadona',
          sec: '1 · Indicaciones',
          cita: 'Management of severe and persistent pain that requires an opioid analgesic and that cannot be adequately treated with alternative options, including immediate-release opioids',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-metadona',
      advertencias: [
        {
          titulo: 'Depresión respiratoria potencialmente mortal',
          texto: 'Puede causar depresión respiratoria grave o mortal, sobre todo al empezar o al subir la dosis.',
          organos: [],
          ref: {
            f: 'dailymed-metadona',
            sec: 'Advertencia destacada',
            cita: 'Serious, life-threatening, or fatal respiratory depression may occur with use of Methadone Hydrochloride Tablets, especially during initiation or following a dosage increase',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Adicción, abuso y uso indebido',
          texto: 'Valorar el riesgo de adicción antes de prescribirla y reevaluarlo periódicamente.',
          organos: [],
          ref: {
            f: 'dailymed-metadona',
            sec: '5 · Advertencias y precauciones',
            cita: "Assess each patient's risk for opioid addiction, abuse, or misuse prior to prescribing Methadone Hydrochloride Tablets",
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión grave',
          texto: 'Evaluarla con regularidad al empezar y al ajustar la dosis.',
          organos: [],
          ref: {
            f: 'dailymed-metadona',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe Hypotension: Regularly evaluate during dose initiation and titration',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes: mareo leve, mareo, sedación, náuseas, vómitos y sudoración.',
          '34084-4',
          'Most common adverse reactions are: lightheadedness, dizziness, sedation, nausea, vomiting, and sweating'
        ],
        [
          'En estudios observacionales, la incidencia acumulada a 5 años de sobredosis o muerte por sobredosis de opioides fue de alrededor del 1,5 % al 4 %.',
          '34084-4',
          'The 5-year cumulative incidence estimates for opioid-involved overdose or opioid overdose-related death ranged from approximately 1.5% to 4% across study sites'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como clorhidrato de metadona. Los excipientes no son el principio activo.',
    usos: 'Dolor intenso y persistente que requiere un opioide, y desintoxicación o mantenimiento en la adicción a opioides, según la etiqueta.',
    actua: 'Agonista mu sintético con acciones parecidas a las de la morfina, sobre todo en el sistema nervioso central y los órganos con músculo liso; se usa para la analgesia y para la desintoxicación o el mantenimiento en la adicción a opioides.',
    recorrido: 'La biodisponibilidad oral va del 36 % al 100 % y el pico aparece entre 1 y 7,5 horas; no se ha estudiado el efecto de la comida. Se elimina por biotransformación amplia seguida de excreción renal y fecal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ranurado: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ranurado: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-metadona',
            sec: '3 · Formas y concentraciones',
            cita: '5 mg Tablets: white, biconvex tablets, scored on one side',
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
      ocurre: 'La biodisponibilidad oral va del 36 % al 100 % y el pico aparece entre 1 y 7,5 horas; no se ha estudiado el efecto de la comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral va del 36 % al 100 % y el pico aparece entre 1 y 7,5 horas; no se ha estudiado el efecto de la comida.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration the bioavailability of methadone ranges between 36 to 100% and peak plasma concentrations are achieved between 1 to 7.5 hours',
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
      ocurre: 'Es lipófila: en el plasma se une sobre todo a la alfa-1 glucoproteína ácida (85-90 %) y su volumen de distribución en estado estacionario va de 1 a 8 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Es lipófila: en el plasma se une sobre todo a la alfa-1 glucoproteína ácida (85-90 %) y su volumen de distribución en estado estacionario va de 1 a 8 L/kg.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'In plasma, methadone is predominantly bound to α1-acid glycoprotein (85% to 90%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de 1,0 a 8,0 L/kg.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'Methadone is a lipophilic drug and the steady-state volume of distribution ranges between 1.0 to 8.0 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu',
        efecto: 'Agonista mu sintético con acciones parecidas a las de la morfina, sobre todo en el sistema nervioso central y los órganos con músculo liso; se usa para la analgesia y para la desintoxicación o el mantenimiento en la adicción a opioides.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Agonista mu sintético con acciones parecidas a las de la morfina, sobre todo en el sistema nervioso central y los órganos con músculo liso; se usa para la analgesia y para la desintoxicación o el mantenimiento en la adicción a opioides.',
            ref: {
              f: 'dailymed-metadona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Methadone hydrochloride is a mu-agonist; a synthetic opioid with multiple actions qualitatively similar to those of morphine, the most prominent of which involves the central nervous system',
              codigo: '43679-0'
            }
          },
          {
            t: 'Sus usos principales son la analgesia y la desintoxicación o el mantenimiento en la adicción a opioides.',
            ref: {
              f: 'dailymed-metadona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The principal therapeutic uses for methadone are for analgesia and for detoxification or maintenance in opioid addiction',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por N-desmetilación a EDDP inactivo, mediante varias enzimas del citocromo P450, sobre todo la CYP3A4, la CYP2B6, la CYP2C19, la CYP2C9 y la CYP2D6.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por N-desmetilación a EDDP inactivo, mediante varias enzimas del citocromo P450, sobre todo la CYP3A4, la CYP2B6, la CYP2C19, la CYP2C9 y la CYP2D6.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 enzymes, primarily CYP3A4, CYP2B6, CYP2C19, CYP2C9 and CYP2D6, are responsible for conversion of methadone to EDDP and other inactive metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'EDDP',
          actividad: 'inactivo',
          nota: 'Metabolito principal, inactivo.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'Methadone is primarily metabolized by N-demethylation to an inactive metabolite, 2-ethylidene-1,5-dimethyl-3,3-diphenylpyrrolidene (EDDP)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por biotransformación amplia seguida de excreción renal y fecal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por biotransformación amplia seguida de excreción renal y fecal.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination of methadone is mediated by extensive biotransformation, followed by renal and fecal excretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es muy variable, de 8 a 59 horas según los estudios.',
          ref: {
            f: 'dailymed-metadona',
            sec: '12.3 · Farmacocinética',
            cita: 'the terminal half-life (T 1/2 ) was highly variable and ranged between 8 to 59 hours in different studies',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral',
      valor: '36-100',
      unidad: '%',
      analito: 'metadona',
      ref: { f: 'dailymed-metadona', sec: '12.3 · Farmacocinética', cita: 'the bioavailability of methadone ranges between 36 to 100%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1-7,5',
      unidad: 'h',
      analito: 'metadona',
      ref: {
        f: 'dailymed-metadona',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations are achieved between 1 to 7.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a la alfa-1 glucoproteína ácida',
      valor: '85-90',
      unidad: '%',
      analito: 'metadona',
      ref: {
        f: 'dailymed-metadona',
        sec: '12.3 · Farmacocinética',
        cita: 'methadone is predominantly bound to α1-acid glycoprotein (85% to 90%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '1,0-8,0',
      unidad: 'L/kg',
      analito: 'metadona',
      ref: {
        f: 'dailymed-metadona',
        sec: '12.3 · Farmacocinética',
        cita: 'the steady-state volume of distribution ranges between 1.0 to 8.0 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '8-59',
      unidad: 'h',
      analito: 'metadona',
      ref: { f: 'dailymed-metadona', sec: '12.3 · Farmacocinética', cita: 'ranged between 8 to 59 hours in different studies', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metadona', '50f14803-78c0-4d19-8b5d-9a9c17582ac1', 'METHADONE HYDROCHLORIDE TABLET', 'METHADONE HYDROCHLORIDE', '9', '2026-01-30', '2026-11-19'),
    rengPubchem(4095, 'methadone hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
