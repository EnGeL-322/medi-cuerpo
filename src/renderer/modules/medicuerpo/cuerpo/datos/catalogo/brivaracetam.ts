import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'brivaracetam',
    nombre: 'Brivaracetam',
    clase: 'Antiepiléptico (ligando de SV2A)',
    sinonimos: [ 'brivaracetam', 'Briviact' ],
    formula: 'C11H20N2O2',
    masaMolar: 212.29,
    smiles: 'CCC[C@@H]1CC(=O)N(C1)[C@@H](CC)C(=O)N',
    inchikey: 'MSYKRHVOOPPJKU-BDAKNGLRSA-N',
    cid: 9837243,
    iupac: '(2S)-2-[(4R)-2-oxo-4-propylpyrrolidin-1-yl]butanamide',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'brivaracetam-oral',
      producto: 'Briviact · comprimido recubierto con película',
      titular: 'UCB, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg, 25 mg, 50 mg, 75 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'lactose monohydrate',
        'betadex',
        'anhydrous lactose',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'talc',
        'polyethylene glycol 3350',
        'titanium dioxide'
      ],
      usos: {
        t: 'Crisis de inicio parcial desde el mes de edad.',
        ref: {
          f: 'dailymed-brivaracetam',
          sec: '1 · Indicaciones',
          cita: 'BRIVIACT is indicated for the treatment of partial-onset seizures in patients 1 month of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-brivaracetam',
      advertencias: [
        {
          titulo: 'Pensamientos suicidas',
          texto: 'Los antiepilépticos aumentan el riesgo de pensamientos o conductas suicidas.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '5 · Advertencias y precauciones',
            cita: 'increase the risk of suicidal thoughts or behavior in patients taking these drugs for any indication',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipersensibilidad',
          texto: 'Puede causar broncoespasmo y angioedema.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '5 · Advertencias y precauciones',
            cita: 'Bronchospasm and angioedema have been reported in patients taking BRIVIACT',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 5 % y al menos un 2 % más que con placebo): somnolencia o sedación, mareo, cansancio y náuseas o vómitos.',
          '34084-4',
          'are somnolence/sedation, dizziness, fatigue, and nausea/vomiting'
        ],
        [
          'En niños, las reacciones son parecidas a las de los adultos.',
          '34084-4',
          'Pediatric Patients: Most common adverse reactions are similar to those seen in adult patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg, 25 mg, 50 mg, 75 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Crisis de inicio parcial desde el mes de edad.',
    actua: 'Su mecanismo exacto no se conoce; tiene una afinidad alta y selectiva por la proteína SV2A de las vesículas sinápticas del cerebro, lo que puede contribuir a su efecto.',
    recorrido: 'Se absorbe rápido y casi por completo; el pico llega a una mediana de 1 hora en ayunas. Una comida rica en grasa lo hace más lento sin cambiar la cantidad absorbida. Más del 95 % de la dosis, con sus metabolitos, sale por la orina en 72 horas; menos del 10 % sin cambios y el 34 % como ácido carboxílico. Por las heces, menos del 1 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '3 · Formas y concentraciones',
            cita: 'white to off white, round, film-coated, and debossed with "u10"',
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
      ocurre: 'Se absorbe rápido y casi por completo; el pico llega a una mediana de 1 hora en ayunas. Una comida rica en grasa lo hace más lento sin cambiar la cantidad absorbida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y casi por completo; el pico llega a una mediana de 1 hora en ayunas. Una comida rica en grasa lo hace más lento sin cambiar la cantidad absorbida.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'is rapidly and almost completely absorbed after oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico a una mediana de 1 hora en ayunas.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'The median T max for tablets taken without food is 1 hour',
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
      ocurre: 'Se une poco a proteínas (20 % o menos) y se reparte de forma rápida y uniforme por casi todos los tejidos (0,5 L/kg).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une poco a proteínas (20 % o menos) y se reparte de forma rápida y uniforme por casi todos los tejidos (0,5 L/kg).',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'Brivaracetam is rapidly and evenly distributed in most tissues',
            codigo: '43682-4'
          }
        },
        {
          t: 'Unión a proteínas del 20 % o menos.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'Brivaracetam is weakly bound to plasma proteins (≤20%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Proteína SV2A de las vesículas sinápticas',
        efecto: 'Su mecanismo exacto no se conoce; tiene una afinidad alta y selectiva por la proteína SV2A de las vesículas sinápticas del cerebro, lo que puede contribuir a su efecto.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo exacto no se conoce; tiene una afinidad alta y selectiva por la proteína SV2A de las vesículas sinápticas del cerebro, lo que puede contribuir a su efecto.',
            ref: {
              f: 'dailymed-brivaracetam',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Brivaracetam displays a high and selective affinity for synaptic vesicle protein 2A (SV2A) in the brain',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por hidrólisis de la amida (amidasas hepáticas y extrahepáticas) y, en segundo lugar, por hidroxilación (CYP2C19); ninguno de sus tres metabolitos es activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por hidrólisis de la amida (amidasas hepáticas y extrahepáticas) y, en segundo lugar, por hidroxilación (CYP2C19); ninguno de sus tres metabolitos es activo.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'None of the 3 metabolites are pharmacologically active',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito ácido carboxílico',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'primarily metabolized by hydrolysis of the amide moiety to form the corresponding carboxylic acid metabolite',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Metabolito hidroxi',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'hydroxylation on the propyl side chain to form the hydroxy metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Más del 95 % de la dosis, con sus metabolitos, sale por la orina en 72 horas; menos del 10 % sin cambios y el 34 % como ácido carboxílico. Por las heces, menos del 1 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Más del 95 % de la dosis, con sus metabolitos, sale por la orina en 72 horas; menos del 10 % sin cambios y el 34 % como ácido carboxílico. Por las heces, menos del 1 %.',
          ref: {
            f: 'dailymed-brivaracetam',
            sec: '12.3 · Farmacocinética',
            cita: 'More than 95% of the dose, including metabolites, is excreted in the urine within 72 hours after intake',
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
      valor: '1 (0,25-3)',
      unidad: 'h',
      analito: 'brivaracetam',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-brivaracetam',
        sec: '12.3 · Farmacocinética',
        cita: 'The median T max for tablets taken without food is 1 hour (range 0.25 to 3 hours)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '≤ 20',
      unidad: '%',
      analito: 'brivaracetam',
      ref: { f: 'dailymed-brivaracetam', sec: '12.3 · Farmacocinética', cita: 'Brivaracetam is weakly bound to plasma proteins (≤20%)', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,5',
      unidad: 'L/kg',
      analito: 'brivaracetam',
      ref: { f: 'dailymed-brivaracetam', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution is 0.5 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa',
      valor: '37',
      unidad: '%',
      analito: 'brivaracetam',
      condiciones: 'comprimido de 50 mg',
      ref: { f: 'dailymed-brivaracetam', sec: '12.3 · Farmacocinética', cita: 'was decreased by 37%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 72 h',
      valor: '> 95',
      unidad: '% de la dosis',
      analito: 'brivaracetam y metabolitos',
      ref: {
        f: 'dailymed-brivaracetam',
        sec: '12.3 · Farmacocinética',
        cita: 'More than 95% of the dose, including metabolites, is excreted in the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-brivaracetam', '3cf2f439-0e97-443e-8e33-25ecef616f6c', 'BRIVIACT (BRIVARACETAM) TABLET, FILM COATED BRIVIACT (BRIVARACETAM) SOLUTION BRIVIACT (BRIVARACETAM) INJECTION, SUSPENSION', 'Briviact', '28', '2026-11-09', '2026-11-12'),
    rengPubchem(9837243, 'brivaracetam', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
