import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vibegron',
    nombre: 'Vibegrón',
    clase: 'Agonista del receptor beta-3 adrenérgico',
    sinonimos: [ 'vibegron', 'Gemtesa' ],
    formula: 'C26H28N4O3',
    masaMolar: 444.5,
    smiles: 'C1C[C@@H](N[C@@H]1CC2=CC=C(C=C2)NC(=O)[C@@H]3CCC4=NC=CC(=O)N34)[C@@H](C5=CC=CC=C5)O',
    inchikey: 'DJXRIQMCROIRCZ-XOEOCAAJSA-N',
    cid: 44472635,
    iupac: '(6S)-N-[4-[[(2S,5R)-5-[(R)-hydroxy(phenyl)methyl]pyrrolidin-2-yl]methyl]phenyl]-4-oxo-7,8-dihydro-6H-pyrrolo[1,2-a]pyrimidine-6-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'vibegron-oral',
      producto: 'GEMTESA · comprimido recubierto con película',
      titular: 'SUMITOMO PHARMA AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '75 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'magnesium stearate',
        'fd&c blue no. 2 aluminum lake',
        'lactose monohydrate',
        'hypromellose, unspecified',
        'ferric oxide yellow',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'Vejiga hiperactiva con incontinencia de urgencia, urgencia y frecuencia urinaria en adultos, y en varones adultos con hiperplasia benigna de próstata tratados con otros fármacos.',
        ref: {
          f: 'dailymed-vibegron',
          sec: '1 · Indicaciones',
          cita: 'overactive bladder (OAB) with symptoms of urge urinary incontinence, urgency, and urinary frequency in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-vibegron',
      advertencias: [
        {
          titulo: 'Retención urinaria',
          texto: 'Se ha descrito retención urinaria; el riesgo puede ser mayor si hay obstrucción de la salida de la vejiga.',
          organos: [ 'vejiga' ],
          ref: {
            f: 'dailymed-vibegron',
            sec: '5 · Advertencias y precauciones',
            cita: 'Urinary retention has been reported in patients taking GEMTESA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Angioedema',
          texto: 'Se ha descrito angioedema de la cara o la laringe, a veces horas después de la primera dosis.',
          organos: [ 'vias-respiratorias' ],
          ref: {
            f: 'dailymed-vibegron',
            sec: '5 · Advertencias y precauciones',
            cita: 'Angioedema of the face and/or larynx has been reported with GEMTESA',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): dolor de cabeza, infección urinaria, nasofaringitis, diarrea, náuseas e infección de vías respiratorias altas.',
          '34084-4',
          'Most common adverse reactions (≥2%) reported with GEMTESA were headache, urinary tract infection, nasopharyngitis, diarrhea, nausea, and upper respiratory tract infection'
        ],
        [
          'En un ensayo de 12 semanas el dolor de cabeza fue del 4,0 % con vibegrón y del 2,4 % con placebo.',
          '34084-4',
          'Headache 22 (4.0) 13 (2.4) Nasopharyngitis 15 (2.8) 9 (1.7)'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 75 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Vejiga hiperactiva con incontinencia de urgencia, urgencia y frecuencia urinaria en adultos, y en varones adultos con hiperplasia benigna de próstata tratados con otros fármacos.',
    actua: 'Activa el receptor beta-3 adrenérgico humano, lo que relaja el músculo detrusor durante el llenado y aumenta la capacidad de la vejiga.',
    recorrido: 'El máximo llega con una mediana de 1 a 3 horas; una comida rica en grasa no produjo diferencias clínicamente significativas. Tras una dosis marcada, alrededor del 59 % salió por las heces (54 % sin cambios) y el 20 % por la orina (19 % sin cambios); la semivida efectiva es de 30,8 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido ovalado, verde claro, recubierto con película, de 75 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido ovalado, verde claro, recubierto con película, de 75 mg.',
          ref: {
            f: 'dailymed-vibegron',
            sec: '3 · Formas y concentraciones',
            cita: '75 mg, oval, light green, film-coated, debossed with V75',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'El máximo llega con una mediana de 1 a 3 horas; una comida rica en grasa no produjo diferencias clínicamente significativas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'El máximo llega con una mediana de 1 a 3 horas; una comida rica en grasa no produjo diferencias clínicamente significativas.',
          ref: { f: 'dailymed-vibegron', sec: '12.3 · Farmacocinética', cita: 'Median vibegron T max is approximately 1 to 3 hours', codigo: '43682-4' }
        },
        {
          t: 'Una comida rica en grasa no produjo diferencias clínicamente significativas en la farmacocinética.',
          ref: {
            f: 'dailymed-vibegron',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in vibegron pharmacokinetics were observed following administration of a high-fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es de alrededor del 50 % y el volumen aparente de distribución medio, de 6304 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es de alrededor del 50 % y el volumen aparente de distribución medio, de 6304 L.',
          ref: {
            f: 'dailymed-vibegron',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of vibegron is approximately 50%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor beta-3 adrenérgico',
        efecto: 'Activa el receptor beta-3 adrenérgico humano, lo que relaja el músculo detrusor durante el llenado y aumenta la capacidad de la vejiga.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Activa el receptor beta-3 adrenérgico humano, lo que relaja el músculo detrusor durante el llenado y aumenta la capacidad de la vejiga.',
            ref: {
              f: 'dailymed-vibegron',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Vibegron is a selective human beta-3 adrenergic receptor agonist',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El metabolismo tiene un papel pequeño en su eliminación; el CYP3A4 es la enzima predominante in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El metabolismo tiene un papel pequeño en su eliminación; el CYP3A4 es la enzima predominante in vitro.',
          ref: {
            f: 'dailymed-vibegron',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism plays a minor role in the elimination of vibegron',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 59 % salió por las heces (54 % sin cambios) y el 20 % por la orina (19 % sin cambios); la semivida efectiva es de 30,8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 59 % salió por las heces (54 % sin cambios) y el 20 % por la orina (19 % sin cambios); la semivida efectiva es de 30,8 horas.',
          ref: {
            f: 'dailymed-vibegron',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 59% of the dose (54% as unchanged) was recovered in feces and 20% (19% as unchanged) in urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '1-3 (aprox.)',
      unidad: 'h',
      analito: 'vibegrón',
      ref: { f: 'dailymed-vibegron', sec: '12.3 · Farmacocinética', cita: 'Median vibegron T max is approximately 1 to 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'vibegrón',
      ref: {
        f: 'dailymed-vibegron',
        sec: '12.3 · Farmacocinética',
        cita: 'Human plasma protein binding of vibegron is approximately 50%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución medio',
      valor: '6304',
      unidad: 'L',
      analito: 'vibegrón',
      ref: { f: 'dailymed-vibegron', sec: '12.3 · Farmacocinética', cita: 'The mean apparent volume of distribution is 6304 liters', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '30,8',
      unidad: 'h',
      analito: 'vibegrón',
      ref: {
        f: 'dailymed-vibegron',
        sec: '12.3 · Farmacocinética',
        cita: 'Vibegron has an effective half-life of 30.8 hours across all populations',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Recuperado en las heces',
      valor: '59 (54 sin cambios)',
      unidad: '% de la dosis',
      analito: 'vibegrón y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-vibegron',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 59% of the dose (54% as unchanged) was recovered in feces',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '20 (19 sin cambios)',
      unidad: '% de la dosis',
      analito: 'vibegrón y metabolitos',
      condiciones: 'dosis marcada',
      ref: { f: 'dailymed-vibegron', sec: '12.3 · Farmacocinética', cita: '20% (19% as unchanged) in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vibegron', '25f21d25-14f8-4fda-91f6-7aa8b68aa1c8', 'GEMTESA (VIBEGRON) TABLET, FILM COATED', 'GEMTESA', '12', '2025-04-09', '2026-11-12'),
    rengPubchem(44472635, 'vibegron', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
