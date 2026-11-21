import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'gabapentina-enacarbilo',
    nombre: 'Gabapentina enacarbilo',
    clase: 'Profármaco de la gabapentina (liberación prolongada)',
    sinonimos: [ 'gabapentin enacarbil', 'Horizant' ],
    formula: 'C16H27NO6',
    masaMolar: 329.39,
    smiles: 'CC(C)C(=O)OC(C)OC(=O)NCC1(CCCCC1)CC(=O)O',
    inchikey: 'TZDUHAJSIBHXDL-UHFFFAOYSA-N',
    cid: 9883933,
    iupac: '2-[1-[[1-(2-methylpropanoyloxy)ethoxycarbonylamino]methyl]cyclohexyl]acetic acid',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'gabapentina-enacarbilo-oral',
      producto: 'Horizant · comprimido de liberación prolongada',
      titular: 'AZURITY PHARMACEUTICALS, INC. (FORMERLY ARBOR PHARMACEUTICALS)',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '300 mg o 600 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Gabapentin enacarbil',
        ref: { f: 'dailymed-gabapentina-enacarbilo', sec: '11 · Descripción', cita: 'gabapentin enacarbil', codigo: '34089-3' }
      },
      excipientes: [ 'silicon dioxide', 'dibasic calcium phosphate dihydrate', 'glyceryl dibehenate', 'magnesium stearate', 'sodium lauryl sulfate', 'talc' ],
      usos: {
        t: 'Tratamiento del síndrome de piernas inquietas primario moderado o grave y de la neuralgia posherpética en adultos.',
        ref: {
          f: 'dailymed-gabapentina-enacarbilo',
          sec: '1 · Indicaciones',
          cita: 'HORIZANT ® is indicated for the treatment of moderate-to-severe primary Restless Legs Syndrome (RLS) in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-gabapentina-enacarbilo',
      advertencias: [
        {
          titulo: 'Alteración de la conducción',
          texto: 'No conducir hasta tener experiencia suficiente para saber si afecta a la capacidad de conducir.',
          organos: [],
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'Driving impairment: Warn patients not to drive until they have gained sufficient experience with HORIZANT to assess whether it will impair their ability to drive',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'No intercambiable con otras gabapentinas',
          texto: 'No es sustituible por otros productos de gabapentina.',
          organos: [],
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'HORIZANT is not substitutable with other gabapentin products',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Pensamientos o conductas suicidas',
          texto: 'Como profármaco de un antiepiléptico, puede aumentar el riesgo de pensamientos o conductas suicidas.',
          organos: [],
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'AEDs increase the risk of suicidal thoughts or behaviors. Monitor for suicidal thoughts or behaviors',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En el síndrome de piernas inquietas, las más frecuentes (10 % o más y al menos el doble que con placebo): somnolencia o sedación y mareo.',
          '34084-4',
          'Most common adverse reactions (≥10% and at least 2 times the rate of placebo) were somnolence/sedation and dizziness'
        ],
        [
          'En la neuralgia posherpética, las más frecuentes (10 % o más y más que con placebo): mareo, somnolencia y cefalea.',
          '34084-4',
          'PHN: Most common adverse reactions (≥10% and greater than placebo) were dizziness, somnolence, and headache'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 300 mg o 600 mg por comprimido, según la etiqueta; el activo va como gabapentin enacarbil. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del síndrome de piernas inquietas primario moderado o grave y de la neuralgia posherpética en adultos.',
    actua: 'Es un profármaco de la gabapentina, a la que se deben sus efectos; el mecanismo exacto en el síndrome de piernas inquietas y la neuralgia posherpética se desconoce.',
    recorrido: 'Se absorbe probablemente por transporte activo mediante el transportador de monocarboxilatos MCT-1, muy expresado en el intestino; la biodisponibilidad media de la gabapentina con alimentos es de alrededor del 75 %. Tras la hidrólisis, la gabapentina liberada se excreta sin cambios por el riñón; con fármaco marcado, el 94 % de la radiactividad se recuperó en la orina y el 5 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de liberación prolongada: libera el profármaco poco a poco a lo largo del tubo digestivo.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido de liberación prolongada: libera el profármaco poco a poco a lo largo del tubo digestivo.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '3 · Formas y concentraciones',
            cita: 'HORIZANT Extended-Release Tablets, 300 mg, are white to off-white, oval-shaped tablets',
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
      ocurre: 'Se absorbe probablemente por transporte activo mediante el transportador de monocarboxilatos MCT-1, muy expresado en el intestino; la biodisponibilidad media de la gabapentina con alimentos es de alrededor del 75 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe probablemente por transporte activo mediante el transportador de monocarboxilatos MCT-1, muy expresado en el intestino; la biodisponibilidad media de la gabapentina con alimentos es de alrededor del 75 %.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The pathway for absorption of gabapentin enacarbil is believed to include active transport via a proton-linked monocarboxylate transporter, MCT-1',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con alimentos, la biodisponibilidad media de la gabapentina es de alrededor del 75 %; en ayunas se estima entre el 42 % y el 65 %.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean bioavailability of gabapentin (based on urinary recovery of gabapentin) for HORIZANT in the fed state is about 75%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras 600 mg, el Tmax de la gabapentina fue de 5,0 horas en ayunas y de 7,3 horas con alimentos.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The T max of gabapentin after administration of 600 mg of HORIZANT was 5.0 hours in fasted subjects and 7.3 hours in fed subjects',
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
      ocurre: 'La unión de la gabapentina a las proteínas del plasma es menor del 3 % y su volumen de distribución aparente es de 76 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión de la gabapentina a las proteínas del plasma es menor del 3 % y su volumen de distribución aparente es de 76 L.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of gabapentin has been reported to be <3%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de la gabapentina de 76 L.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of gabapentin in subjects receiving HORIZANT is 76 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Gabapentina (mecanismo no establecido)',
        efecto: 'Es un profármaco de la gabapentina, a la que se deben sus efectos; el mecanismo exacto en el síndrome de piernas inquietas y la neuralgia posherpética se desconoce.',
        lugar: [],
        datos: [
          {
            t: 'Es un profármaco de la gabapentina, a la que se deben sus efectos; el mecanismo exacto en el síndrome de piernas inquietas y la neuralgia posherpética se desconoce.',
            ref: {
              f: 'dailymed-gabapentina-enacarbilo',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Gabapentin enacarbil is a prodrug of gabapentin and, accordingly, its therapeutic effects in RLS and PHN are attributable to gabapentin',
              codigo: '43679-0'
            }
          },
          {
            t: 'En modelos animales de analgesia, la gabapentina previene la alodinia y la hiperalgesia.',
            ref: {
              f: 'dailymed-gabapentina-enacarbilo',
              sec: '12.1 · Mecanismo de acción',
              cita: 'in animal models of analgesia, gabapentin prevents allodynia (pain-related behavior in response to a normally innocuous stimulus) and hyperalgesia (exaggerated response to painful stimuli)',
              codigo: '43679-0'
            },
            poblacion: 'animales'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre una hidrólisis de primer paso extensa por carboxilesterasas, sobre todo en los enterocitos y en menor medida en el hígado, que libera gabapentina; la gabapentina liberada apenas se metaboliza.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre una hidrólisis de primer paso extensa por carboxilesterasas, sobre todo en los enterocitos y en menor medida en el hígado, que libera gabapentina; la gabapentina liberada apenas se metaboliza.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'gabapentin enacarbil undergoes extensive first-pass hydrolysis by non-specific carboxylesterases primarily in enterocytes and to a lesser extent in the liver',
            codigo: '43682-4'
          }
        },
        {
          t: 'La gabapentina liberada no se metaboliza de forma apreciable en humanos.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Released gabapentin is not appreciably metabolized in humans',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Gabapentina',
          actividad: 'activo',
          nota: 'Forma activa liberada por hidrólisis; también se forman dióxido de carbono, acetaldehído y ácido isobutírico.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12 · Farmacología clínica',
            cita: 'Gabapentin enacarbil is a prodrug of gabapentin',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la hidrólisis, la gabapentina liberada se excreta sin cambios por el riñón; con fármaco marcado, el 94 % de la radiactividad se recuperó en la orina y el 5 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la hidrólisis, la gabapentina liberada se excreta sin cambios por el riñón; con fármaco marcado, el 94 % de la radiactividad se recuperó en la orina y el 5 % en las heces.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Following hydrolysis of gabapentin enacarbil, the released gabapentin is excreted unchanged by the kidney',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con el profármaco marcado, la recuperación media de radiactividad fue del 94 % en la orina y del 5 % en las heces.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'mean recovery of total radioactivity in urine was 94%, with 5% of the radioactive dose recovered in feces',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación de la gabapentina va de 5,1 a 6,0 horas.',
          ref: {
            f: 'dailymed-gabapentina-enacarbilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life (t ½ ) of gabapentin ranges from 5.1 to 6.0 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad de la gabapentina con alimentos',
      valor: '75 (aprox.)',
      unidad: '%',
      analito: 'gabapentina',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean bioavailability of gabapentin (based on urinary recovery of gabapentin) for HORIZANT in the fed state is about 75%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tmax de la gabapentina en ayunas tras 600 mg',
      valor: '5,0',
      unidad: 'h',
      analito: 'gabapentina',
      condiciones: 'en ayunas, 600 mg',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The T max of gabapentin after administration of 600 mg of HORIZANT was 5.0 hours in fasted subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas de la gabapentina',
      valor: '< 3',
      unidad: '%',
      analito: 'gabapentina',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'Plasma protein binding of gabapentin has been reported to be <3%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente de la gabapentina',
      valor: '76',
      unidad: 'L',
      analito: 'gabapentina',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of gabapentin in subjects receiving HORIZANT is 76 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación de la gabapentina',
      valor: '5,1-6,0',
      unidad: 'h',
      analito: 'gabapentina',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life (t ½ ) of gabapentin ranges from 5.1 to 6.0 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '94',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: {
        f: 'dailymed-gabapentina-enacarbilo',
        sec: '12.3 · Farmacocinética',
        cita: 'mean recovery of total radioactivity in urine was 94%',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-gabapentina-enacarbilo', '4c486fc7-c8c4-4c6c-b30c-366dabaeaadd', 'HORIZANT (GABAPENTIN ENACARBIL) TABLET, EXTENDED RELEASE', 'Horizant', '16', '2025-05-07', '2026-11-19'),
    rengPubchem(9883933, 'gabapentin enacarbil', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
