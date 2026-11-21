import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'bexagliflozina',
    nombre: 'Bexagliflozina',
    clase: 'Inhibidor del cotransportador de sodio y glucosa 2 (SGLT2)',
    sinonimos: [ 'bexagliflozin', 'Brenzavvy' ],
    formula: 'C24H29ClO7',
    masaMolar: 464.9,
    smiles: 'C1CC1OCCOC2=CC=C(C=C2)CC3=C(C=CC(=C3)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)Cl',
    inchikey: 'BTCRKOKVYTVOLU-SJSRKZJXSA-N',
    cid: 25195624,
    iupac: '(2S,3R,4R,5S,6R)-2-[4-chloro-3-[[4-(2-cyclopropyloxyethoxy)phenyl]methyl]phenyl]-6-(hydroxymethyl)oxane-3,4,5-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'bexagliflozina-oral',
      producto: 'BRENZAVVY · comprimido',
      titular: 'THERACOSBIO, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20 mg por comprimido, según la etiqueta',
      excipientes: [
        'fd&c blue no. 1',
        'glyceryl dibehenate',
        'indigotindisulfonate sodium',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'silicon dioxide',
        'polyethylene glycol 3350',
        'polyethylene glycol, unspecified',
        'poloxamer 188',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'talc'
      ],
      usos: {
        t: 'Mejorar el control de la glucemia en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
        ref: {
          f: 'dailymed-bexagliflozina',
          sec: '1 · Indicaciones',
          cita: 'BRENZAVVY is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-bexagliflozina',
      advertencias: [
        {
          titulo: 'Cetoacidosis diabética',
          texto: 'En pacientes con diabetes tipo 1 aumenta de forma significativa el riesgo de cetoacidosis diabética, un episodio potencialmente mortal.',
          organos: [ 'sangre', 'rinones' ],
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '5 · Advertencias y precauciones',
            cita: 'In patients with type 1 diabetes mellitus, BRENZAVVY significantly increases the risk of diabetic ketoacidosis, a life-threatening event, beyond background rate',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (incidencia superior al 5 %): infecciones micóticas genitales femeninas, infección urinaria y aumento de la micción.',
          '34084-4',
          'Most common adverse reactions (incidence > 5%) are female genital mycotic infections, urinary tract infection and increased urination'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figura la hipoglucemia al usarla con insulina o con fármacos que estimulan la insulina.',
          '34084-4',
          'Hypoglycemia with Concomitant Use with Insulin and Insulin Secretagogues [see Warnings and Precautions ( 5.5 )]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucemia en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
    actua: 'Inhibe el cotransportador de sodio y glucosa 2 (SGLT2), responsable de reabsorber la mayor parte de la glucosa del filtrado glomerular; así reduce la reabsorción renal de glucosa y aumenta su excreción por la orina.',
    recorrido: 'Las concentraciones plasmáticas máximas se alcanzaron entre 2 y 4 horas después de la dosis, y pueden retrasarse si se toma tras una comida. Tras una dosis oral marcada, el 51,1 % de la radiactividad salió por las heces (sobre todo como bexagliflozina) y el 40,5 % por la orina (sobre todo como glucurónido).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 20 mg, blue, caplet-shaped, biconvex, bevel-edged',
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
      ocurre: 'Las concentraciones plasmáticas máximas se alcanzaron entre 2 y 4 horas después de la dosis, y pueden retrasarse si se toma tras una comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzaron entre 2 y 4 horas después de la dosis, y pueden retrasarse si se toma tras una comida.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations of bexagliflozin were reached between 2 – 4 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una comida rica en grasa y calorías, la Cmax y el AUC aumentaron un 31 % y un 10 %; no se considera clínicamente relevante.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Administration of BRENZAVVY after consumption of a standard high-fat, high-caloric meal increased C max and AUC by 31% and 10%, respectively, compared to dosing in the fasted state',
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
      ocurre: 'Se une en aproximadamente un 93 % a las proteínas del plasma, y la insuficiencia renal o hepática no lo altera de forma sustancial.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en aproximadamente un 93 % a las proteínas del plasma, y la insuficiencia renal o hepática no lo altera de forma sustancial.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Bexagliflozin is approximately 93% bound to plasma protein',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente es de 262 L.',
          ref: { f: 'dailymed-bexagliflozina', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 262 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'SGLT2 (cotransportador de sodio y glucosa 2)',
        efecto: 'Inhibe el cotransportador de sodio y glucosa 2 (SGLT2), responsable de reabsorber la mayor parte de la glucosa del filtrado glomerular; así reduce la reabsorción renal de glucosa y aumenta su excreción por la orina.',
        lugar: [ 'rinones' ],
        datos: [
          {
            t: 'Inhibe el cotransportador de sodio y glucosa 2 (SGLT2), responsable de reabsorber la mayor parte de la glucosa del filtrado glomerular; así reduce la reabsorción renal de glucosa y aumenta su excreción por la orina.',
            ref: {
              f: 'dailymed-bexagliflozina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Bexagliflozin is an inhibitor of sodium-glucose co-transporter 2 (SGLT2), the transporter responsible for reabsorption of the majority of glucose from the renal glomerular filtrate in the renal proximal tubule',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la UGT1A9 y, en menor medida, por la CYP3A.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la UGT1A9 y, en menor medida, por la CYP3A.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'Bexagliflozin is mainly metabolized by UGT1A9 and, to a lesser extent, CYP3A',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: "3'-O-glucurónido de bexagliflozina",
          actividad: 'inactivo',
          nota: 'Metabolito más abundante en el plasma; farmacológicamente inactivo.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'In plasma the most abundant metabolite is the pharmacologically inactive 3′- O -glucuronide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, el 51,1 % de la radiactividad salió por las heces (sobre todo como bexagliflozina) y el 40,5 % por la orina (sobre todo como glucurónido).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, el 51,1 % de la radiactividad salió por las heces (sobre todo como bexagliflozina) y el 40,5 % por la orina (sobre todo como glucurónido).',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: '51.1% in feces, the majority as bexagliflozin, and 40.5% in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal aparente fue de aproximadamente 12 horas.',
          ref: {
            f: 'dailymed-bexagliflozina',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal elimination half-life of bexagliflozin was approximately 12 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-4',
      unidad: 'h',
      analito: 'bexagliflozina',
      ref: {
        f: 'dailymed-bexagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations of bexagliflozin were reached between 2 – 4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '93 (aprox.)',
      unidad: '%',
      analito: 'bexagliflozina',
      ref: {
        f: 'dailymed-bexagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'Bexagliflozin is approximately 93% bound to plasma protein',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '262',
      unidad: 'L',
      analito: 'bexagliflozina',
      ref: { f: 'dailymed-bexagliflozina', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 262 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal aparente',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'bexagliflozina',
      ref: {
        f: 'dailymed-bexagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal elimination half-life of bexagliflozin was approximately 12 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente',
      valor: '19,1',
      unidad: 'L/h',
      analito: 'bexagliflozina',
      ref: {
        f: 'dailymed-bexagliflozina',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent oral clearance of bexagliflozin is 19.1 L/h by population pharmacokinetic modeling',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '51,1',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis oral de bexagliflozina marcada',
      ref: { f: 'dailymed-bexagliflozina', sec: '12.3 · Farmacocinética', cita: '51.1% in feces, the majority as bexagliflozin', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-bexagliflozina', '3cdf28fc-4194-4ad6-aa03-c9eaa68da83e', 'BRENZAVVY (BEXAGLIFLOZIN) TABLET', 'BRENZAVVY', '9', '2026-06-18', '2026-11-15'),
    rengPubchem(25195624, 'bexagliflozin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
