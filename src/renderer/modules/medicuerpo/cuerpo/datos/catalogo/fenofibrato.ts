import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'fenofibrato',
    nombre: 'Fenofibrato',
    clase: 'Fibrato (agonista de PPAR-alfa)',
    sinonimos: [ 'fenofibrate', 'Tricor' ],
    formula: 'C20H21ClO4',
    masaMolar: 360.8,
    smiles: 'CC(C)OC(=O)C(C)(C)OC1=CC=C(C=C1)C(=O)C2=CC=C(C=C2)Cl',
    inchikey: 'YMTINGFKWWXKFG-UHFFFAOYSA-N',
    cid: 3339,
    iupac: 'propan-2-yl 2-[4-(4-chlorobenzoyl)phenoxy]-2-methylpropanoate',
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'fenofibrato-oral',
      producto: 'FENOFIBRATE · comprimido',
      titular: 'SOLCO HEALTHCARE US, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '48 mg o 145 mg por comprimido, según la etiqueta',
      excipientes: [
        'crospovidone (120 .mu.m)',
        'ferric oxide yellow',
        'hypromellose 2910 (3 mpa.s)',
        'lactose monohydrate',
        'microcrystalline cellulose',
        'magnesium stearate',
        'polyethylene glycol 3350',
        'polyvinyl alcohol, unspecified',
        'sodium lauryl sulfate',
        'sucrose',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Junto con la dieta, bajar los triglicéridos en la hipertrigliceridemia grave y el LDL en la hiperlipidemia primaria cuando no es posible otro tratamiento.',
        ref: {
          f: 'dailymed-fenofibrato',
          sec: '1 · Indicaciones',
          cita: 'to reduce triglyceride (TG) levels in adults with severe hypertriglyceridemia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-fenofibrato',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se han descrito lesiones hepáticas graves inducidas por el fármaco, con trasplante y muerte.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious drug-induced liver injury (DILI), including liver transplantation and death',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Cálculos biliares',
          texto: 'Puede aumentar la excreción de colesterol en la bilis y favorecer los cálculos.',
          organos: [ 'bilis' ],
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '5 · Advertencias y precauciones',
            cita: 'may increase cholesterol excretion into the bile, leading to cholelithiasis',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [ 'Alteración de las pruebas hepáticas (8 % frente a 1 % con placebo) y dolor abdominal (5 %).', '34084-4', 'Abnormal Liver Tests 1% 8%' ],
        [
          'Las alteraciones de las pruebas hepáticas fueron la causa más frecuente de abandono (1,6 %).',
          '34084-4',
          'causing discontinuation of fenofibrate treatment in 1.6% of patients'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 48 mg o 145 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Junto con la dieta, bajar los triglicéridos en la hipertrigliceridemia grave y el LDL en la hiperlipidemia primaria cuando no es posible otro tratamiento.',
    actua: 'Su forma activa, el ácido fenofíbrico, activa el receptor PPAR-alfa: aumenta la lipólisis y la eliminación de las partículas ricas en triglicéridos.',
    recorrido: 'Se absorbe bien en el tubo digestivo; el pico de ácido fenofíbrico llega entre 6 y 8 horas. Su biodisponibilidad absoluta no se puede medir. Alrededor del 60 % de la dosis aparece en la orina y el 25 % en las heces; el ácido fenofíbrico tiene una semivida de 20 horas.'
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
          ref: { f: 'dailymed-fenofibrato', sec: '3 · Formas y concentraciones', cita: 'biconvex, film-coated tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien en el tubo digestivo; el pico de ácido fenofíbrico llega entre 6 y 8 horas. Su biodisponibilidad absoluta no se puede medir.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien en el tubo digestivo; el pico de ácido fenofíbrico llega entre 6 y 8 horas. Su biodisponibilidad absoluta no se puede medir.',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'fenofibrate is well absorbed from the gastrointestinal tract',
            codigo: '34090-1'
          }
        },
        {
          t: 'Pico plasmático de ácido fenofíbrico entre 6 y 8 horas.',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'Peak plasma levels of fenofibric acid occur within 6 to 8 hours after administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 99 % del ácido fenofíbrico se une a proteínas del suero; el equilibrio se alcanza en 9 días.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 99 % del ácido fenofíbrico se une a proteínas del suero; el equilibrio se alcanza en 9 días.',
          ref: { f: 'dailymed-fenofibrato', sec: '12 · Farmacología clínica', cita: 'Serum protein binding was approximately 99%', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Receptor PPAR-alfa',
        efecto: 'Su forma activa, el ácido fenofíbrico, activa el receptor PPAR-alfa: aumenta la lipólisis y la eliminación de las partículas ricas en triglicéridos.',
        lugar: [ 'higado', 'sangre' ],
        datos: [
          {
            t: 'Su forma activa, el ácido fenofíbrico, activa el receptor PPAR-alfa: aumenta la lipólisis y la eliminación de las partículas ricas en triglicéridos.',
            ref: {
              f: 'dailymed-fenofibrato',
              sec: '12 · Farmacología clínica',
              cita: 'The active moiety of fenofibrate tablets is fenofibric acid',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las esterasas lo hidrolizan rápido a ácido fenofíbrico (no se detecta fenofibrato sin cambios), que se conjuga con ácido glucurónico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las esterasas lo hidrolizan rápido a ácido fenofíbrico (no se detecta fenofibrato sin cambios), que se conjuga con ácido glucurónico.',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'fenofibrate is rapidly hydrolyzed by esterases to the active metabolite, fenofibric acid',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido fenofíbrico',
          actividad: 'activo',
          nota: 'Forma activa.',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'rapidly hydrolyzed by esterases to the active metabolite, fenofibric acid',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Glucurónido del ácido fenofíbrico',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'Fenofibric acid is primarily conjugated with glucuronic acid and then excreted in urine',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 60 % de la dosis aparece en la orina y el 25 % en las heces; el ácido fenofíbrico tiene una semivida de 20 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 60 % de la dosis aparece en la orina y el 25 % en las heces; el ácido fenofíbrico tiene una semivida de 20 horas.',
          ref: {
            f: 'dailymed-fenofibrato',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 60% of the dose appeared in the urine and 25% was excreted in the feces',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '6-8',
      unidad: 'h',
      analito: 'ácido fenofíbrico (metabolito activo)',
      ref: {
        f: 'dailymed-fenofibrato',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma levels of fenofibric acid occur within 6 to 8 hours after administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '99 (aprox.)',
      unidad: '%',
      analito: 'ácido fenofíbrico',
      ref: { f: 'dailymed-fenofibrato', sec: '12 · Farmacología clínica', cita: 'Serum protein binding was approximately 99%', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '20',
      unidad: 'h',
      analito: 'ácido fenofíbrico (metabolito activo)',
      ref: {
        f: 'dailymed-fenofibrato',
        sec: '12 · Farmacología clínica',
        cita: 'Fenofibric acid is eliminated with a half-life of 20 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '60 (aprox.)',
      unidad: '% de la dosis',
      analito: 'fenofibrato marcado (metabolitos)',
      ref: { f: 'dailymed-fenofibrato', sec: '12 · Farmacología clínica', cita: 'approximately 60% of the dose appeared in the urine', codigo: '34090-1' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-fenofibrato', '085109a6-f006-44f0-a170-980d8899a365', 'FENOFIBRATE TABLET', 'FENOFIBRATE', '4', '2026-11-02', '2026-11-12'),
    rengPubchem(3339, 'fenofibrate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
