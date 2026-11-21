import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vilazodona',
    nombre: 'Vilazodona',
    clase: 'Antidepresivo (inhibidor de la recaptación de serotonina y agonista parcial 5-HT1A)',
    sinonimos: [ 'vilazodone', 'Viibryd' ],
    formula: 'C26H27N5O2',
    masaMolar: 441.5,
    smiles: 'C1CN(CCN1CCCCC2=CNC3=C2C=C(C=C3)C#N)C4=CC5=C(C=C4)OC(=C5)C(=O)N',
    inchikey: 'SGEGOXDYSFKCPT-UHFFFAOYSA-N',
    cid: 6918314,
    iupac: '5-[4-[4-(5-cyano-1H-indol-3-yl)butyl]piperazin-1-yl]-1-benzofuran-2-carboxamide',
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'vilazodona-oral',
      producto: 'VIIBRYD · comprimido',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 20 mg o 40 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de vilazodona',
        ref: { f: 'dailymed-vilazodona', sec: '11 · Descripción', cita: 'vilazodone hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'fd&c red no. 40'
      ],
      usos: {
        t: 'Tratamiento del trastorno depresivo mayor en adultos.',
        ref: {
          f: 'dailymed-vilazodona',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of major depressive disorder (MDD) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vilazodona',
      advertencias: [
        {
          titulo: 'Pensamientos y conductas suicidas',
          texto: 'Los antidepresivos aumentaron el riesgo de pensamientos y conductas suicidas en niños, adolescentes y adultos jóvenes en estudios a corto plazo.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-vilazodona',
            sec: 'Advertencia destacada',
            cita: 'Antidepressants increased the risk of suicidal thoughts and behavi ors in pediatric and young adult patients',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y al menos el doble que con placebo): diarrea, náuseas, vómitos e insomnio.',
          '34084-4',
          'diarrhea, nausea, vomiting, and insomnia'
        ],
        [
          'Efectos sexuales en ≥ 2 % de los pacientes y más que con placebo en los estudios controlados.',
          '34084-4',
          'Common Sexual Adverse Reactions Occurring in ≥ 2% of VIIBRYD-treated Patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg, 20 mg o 40 mg por comprimido, según la etiqueta; el activo va como clorhidrato de vilazodona. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del trastorno depresivo mayor en adultos.',
    actua: 'Su mecanismo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir de forma selectiva su recaptación; también es agonista parcial de los receptores 5-HT1A.',
    recorrido: 'El pico llega a una mediana de 4-5 horas. Con comida, la biodisponibilidad absoluta es del 72 %; en ayunas el AUC y la Cmax bajan alrededor del 50 % y el 60 %. Se elimina sobre todo por metabolismo hepático; solo el 1 % de la dosis sale sin cambios por la orina y el 2 % por las heces. Su semivida terminal es de unas 25 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-vilazodona', sec: '3 · Formas y concentraciones', cita: '10 mg, 20 mg and 40 mg film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El pico llega a una mediana de 4-5 horas. Con comida, la biodisponibilidad absoluta es del 72 %; en ayunas el AUC y la Cmax bajan alrededor del 50 % y el 60 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El pico llega a una mediana de 4-5 horas. Con comida, la biodisponibilidad absoluta es del 72 %; en ayunas el AUC y la Cmax bajan alrededor del 50 % y el 60 %.',
          ref: {
            f: 'dailymed-vilazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of vilazodone was 72% with food',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico a una mediana de 4-5 horas.',
          ref: {
            f: 'dailymed-vilazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Vilazodone concentrations peaked at a median of 4-5 hours',
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
      ocurre: 'Se reparte ampliamente y se une a proteínas en un 96-99 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente y se une a proteínas en un 96-99 %.',
          ref: {
            f: 'dailymed-vilazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'Vilazodone is widely distributed and approximately 96-99% protein-bound',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transportador de serotonina y receptor 5-HT1A',
        efecto: 'Su mecanismo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir de forma selectiva su recaptación; también es agonista parcial de los receptores 5-HT1A.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo no se conoce del todo: se atribuye a que aumenta la actividad de la serotonina en el sistema nervioso central al inhibir de forma selectiva su recaptación; también es agonista parcial de los receptores 5-HT1A.',
            ref: {
              f: 'dailymed-vilazodona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'through selective inhibition of serotonin reuptake',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente por vías CYP (sobre todo CYP3A4) y no CYP, posiblemente carboxilesterasas.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente por vías CYP (sobre todo CYP3A4) y no CYP, posiblemente carboxilesterasas.',
          ref: {
            f: 'dailymed-vilazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'is extensively metabolized through CYP and non-CYP pathways',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'higado', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por metabolismo hepático; solo el 1 % de la dosis sale sin cambios por la orina y el 2 % por las heces. Su semivida terminal es de unas 25 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo hepático; solo el 1 % de la dosis sale sin cambios por la orina y el 2 % por las heces. Su semivida terminal es de unas 25 horas.',
          ref: {
            f: 'dailymed-vilazodona',
            sec: '12.3 · Farmacocinética',
            cita: 'with only 1% of the dose recovered in the urine and 2% of the dose recovered in the feces as unchanged vilazodone',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico (mediana)',
      valor: '4-5',
      unidad: 'h',
      analito: 'vilazodona',
      ref: { f: 'dailymed-vilazodona', sec: '12.3 · Farmacocinética', cita: 'Vilazodone concentrations peaked at a median of 4-5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta con comida',
      valor: '72',
      unidad: '%',
      analito: 'vilazodona',
      condiciones: 'con comida',
      ref: {
        f: 'dailymed-vilazodona',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of vilazodone was 72% with food',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media en estado estacionario',
      valor: '156',
      unidad: 'ng/mL',
      analito: 'vilazodona',
      condiciones: '40 mg al día con comida',
      ref: { f: 'dailymed-vilazodona', sec: '12.3 · Farmacocinética', cita: 'the mean C max value was 156 ng/mL', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '25 (aprox.)',
      unidad: 'h',
      analito: 'vilazodona',
      ref: { f: 'dailymed-vilazodona', sec: '12.3 · Farmacocinética', cita: 'with a terminal half-life of approximately 25 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '96-99',
      unidad: '%',
      analito: 'vilazodona',
      ref: { f: 'dailymed-vilazodona', sec: '12.3 · Farmacocinética', cita: 'approximately 96-99% protein-bound', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vilazodona', '4c55ccfb-c4cf-11df-851a-0800200c9a66', 'VIIBRYD (VILAZODONE HYDROCHLORIDE) TABLET VIIBRYD (VILAZODONE HYDROCHLORIDE) KIT', 'VIIBRYD', '34', '2025-12-22', '2026-11-12'),
    rengPubchem(6918314, 'vilazodone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
