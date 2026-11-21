import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'glimepirida',
    nombre: 'Glimepirida',
    clase: 'Sulfonilurea (antidiabético oral)',
    sinonimos: [ 'glimepiride', 'Amaryl' ],
    formula: 'C24H34N4O5S',
    masaMolar: 490.6,
    smiles: 'CCC1=C(CN(C1=O)C(=O)NCCC2=CC=C(C=C2)S(=O)(=O)NC(=O)NC3CCC(CC3)C)C',
    inchikey: 'WIGIZIANZCJQQY-UHFFFAOYSA-N',
    cid: 3476,
    iupac: '4-ethyl-3-methyl-N-[2-[4-[(4-methylcyclohexyl)carbamoylsulfamoyl]phenyl]ethyl]-5-oxo-2H-pyrrole-1-carboxamide',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'glimepirida-oral',
      producto: 'Glimepiride · comprimido',
      titular: 'RISING PHARMA HOLDINGS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 2 mg o 4 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone k25',
        'sodium starch glycolate type a potato',
        'ferric oxide red'
      ],
      usos: {
        t: 'Mejorar el control de la glucosa en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
        ref: {
          f: 'dailymed-glimepirida',
          sec: '1 · Indicaciones',
          cita: 'indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-glimepirida',
      advertencias: [
        {
          titulo: 'Hipoglucemia',
          texto: 'Todas las sulfonilureas, también la glimepirida, pueden causar hipoglucemia grave.',
          organos: [ 'sangre', 'pancreas' ],
          ref: {
            f: 'dailymed-glimepirida',
            sec: '5 · Advertencias y precauciones',
            cita: 'All sulfonylureas, including glimepiride, can cause severe hypoglycemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Anemia hemolítica',
          texto: 'Las sulfonilureas pueden causar anemia hemolítica en personas con déficit de glucosa-6-fosfato deshidrogenasa.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-glimepirida',
            sec: '5 · Advertencias y precauciones',
            cita: 'Sulfonylureas can cause hemolytic anemia in patients with glucose 6-phosphate dehydrogenase (G6PD) deficiency',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Mortalidad cardiovascular',
          texto: 'Se ha descrito una mayor mortalidad cardiovascular con los antidiabéticos orales que con la dieta sola.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-glimepirida',
            sec: '5 · Advertencias y precauciones',
            cita: 'The administration of oral hypoglycemic drugs has been reported to be associated with increased cardiovascular mortality',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Frecuentes (≥ 5 % y más que con placebo): hipoglucemia, dolor de cabeza, náuseas y mareo.',
          '34084-4',
          'Common adverse reactions in clinical trials (≥5% and more common than with placebo) include hypoglycemia, headache, nausea, and dizziness'
        ],
        [
          'Entre las reacciones graves que describe la etiqueta figuran la hipoglucemia y la anemia hemolítica.',
          '34084-4',
          'The following serious adverse reactions are discussed in more detail below and elsewhere in the labeling'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 1 mg, 2 mg o 4 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mejorar el control de la glucosa en adultos con diabetes mellitus tipo 2, como complemento de la dieta y el ejercicio.',
    actua: 'Baja la glucosa en sangre sobre todo porque estimula la liberación de insulina de las células beta del páncreas.',
    recorrido: 'Tras dosis orales únicas en sujetos sanos y repetidas en pacientes con diabetes tipo 2, el pico de concentración llegó entre 2 y 3 horas después de la toma. Tras una dosis oral marcada, alrededor del 60 % de la radiactividad se recuperó en la orina en 7 días y alrededor del 40 % en las heces; no se halló fármaco original en orina ni en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido sin recubrir: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: { f: 'dailymed-glimepirida', sec: '3 · Formas y concentraciones', cita: 'Glimepiride is formulated as tablets of', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Tras dosis orales únicas en sujetos sanos y repetidas en pacientes con diabetes tipo 2, el pico de concentración llegó entre 2 y 3 horas después de la toma.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras dosis orales únicas en sujetos sanos y repetidas en pacientes con diabetes tipo 2, el pico de concentración llegó entre 2 y 3 horas después de la toma.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'showed peak drug concentrations (C max ) 2 to 3 hours postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con las comidas, la Cmax y el AUC medios bajaron un 8 % y un 9 %.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'When glimepiride was given with meals, the mean C max and AUC (area under the curve) were decreased by 8% and 9%, respectively',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con las comidas'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Tras una dosis intravenosa en sujetos sanos, el volumen de distribución fue de 8,8 L y la unión a proteínas superó el 99,5 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras una dosis intravenosa en sujetos sanos, el volumen de distribución fue de 8,8 L y la unión a proteínas superó el 99,5 %.',
          ref: { f: 'dailymed-glimepirida', sec: '12.3 · Farmacocinética', cita: 'Protein binding was greater than 99.5%', codigo: '43682-4' }
        },
        {
          t: 'El aclaramiento total tras la dosis intravenosa fue de 47,8 mL/min.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'the volume of distribution (Vd) was 8.8 L (113 mL/kg), and the total body clearance (CL) was 47.8 mL/min',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis intravenosa'
        }
      ],
      accion: {
        diana: 'Receptor de sulfonilurea de la célula beta',
        efecto: 'Baja la glucosa en sangre sobre todo porque estimula la liberación de insulina de las células beta del páncreas.',
        lugar: [ 'pancreas' ],
        datos: [
          {
            t: 'Baja la glucosa en sangre sobre todo porque estimula la liberación de insulina de las células beta del páncreas.',
            ref: {
              f: 'dailymed-glimepirida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Glimepiride primarily lowers blood glucose by stimulating the release of insulin from pancreatic beta cells',
              codigo: '43679-0'
            }
          },
          {
            t: 'Las sulfonilureas se unen al receptor de sulfonilurea de la membrana de la célula beta y cierran el canal de potasio sensible al ATP, lo que estimula la liberación de insulina.',
            ref: {
              f: 'dailymed-glimepirida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Sulfonylureas bind to the sulfonylurea receptor in the pancreatic beta-cell plasma membrane, leading to closure of the ATP-sensitive potassium channel',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por completo por oxidación, tanto tras una dosis intravenosa como oral; los principales metabolitos son el derivado hidroxi-metilo del ciclohexilo (M1) y el derivado carboxilo (M2).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por completo por oxidación, tanto tras una dosis intravenosa como oral; los principales metabolitos son el derivado hidroxi-metilo del ciclohexilo (M1) y el derivado carboxilo (M2).',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'Glimepiride is completely metabolized by oxidative biotransformation after either an intravenous or oral dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La enzima CYP2C9 participa en la formación de M1, y M1 se convierte en M2 por enzimas del citosol.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 2C9 is involved in the biotransformation of glimepiride to M1',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 (derivado hidroxi-metilo del ciclohexilo)',
          actividad: 'desconocida',
          nota: 'En animales tiene un tercio de la actividad; no se sabe si importa en humanos.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'In animals, M1 possesses about one-third of the pharmacological activity of glimepiride, but it is unclear whether M1 results in clinically meaningful effects on blood glucose in humans',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'M2 (derivado carboxilo)',
          actividad: 'inactivo',
          nota: 'Sin actividad.',
          ref: { f: 'dailymed-glimepirida', sec: '12.3 · Farmacocinética', cita: 'M2 is inactive', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada, alrededor del 60 % de la radiactividad se recuperó en la orina en 7 días y alrededor del 40 % en las heces; no se halló fármaco original en orina ni en heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada, alrededor del 60 % de la radiactividad se recuperó en la orina en 7 días y alrededor del 40 % en las heces; no se halló fármaco original en orina ni en heces.',
          ref: {
            f: 'dailymed-glimepirida',
            sec: '12.3 · Farmacocinética',
            cita: 'When 14 C-glimepiride was given orally to 3 healthy male subjects, approximately 60% of the total radioactivity was recovered in the urine in 7 days',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico de concentración',
      valor: '2 a 3',
      unidad: 'h',
      analito: 'glimepirida',
      poblacion: 'sujetos sanos y pacientes con diabetes tipo 2',
      condiciones: 'dosis orales únicas o repetidas',
      ref: {
        f: 'dailymed-glimepirida',
        sec: '12.3 · Farmacocinética',
        cita: 'showed peak drug concentrations (C max ) 2 to 3 hours postdose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '> 99,5',
      unidad: '%',
      analito: 'glimepirida',
      poblacion: 'sujetos sanos',
      condiciones: 'tras una dosis intravenosa',
      ref: { f: 'dailymed-glimepirida', sec: '12.3 · Farmacocinética', cita: 'Protein binding was greater than 99.5%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '8,8',
      unidad: 'L',
      analito: 'glimepirida',
      poblacion: 'sujetos sanos',
      condiciones: 'tras una dosis intravenosa',
      ref: { f: 'dailymed-glimepirida', sec: '12.3 · Farmacocinética', cita: 'the volume of distribution (Vd) was 8.8 L (113 mL/kg)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total',
      valor: '47,8',
      unidad: 'mL/min',
      analito: 'glimepirida',
      poblacion: 'sujetos sanos',
      condiciones: 'tras una dosis intravenosa',
      ref: { f: 'dailymed-glimepirida', sec: '12.3 · Farmacocinética', cita: 'the total body clearance (CL) was 47.8 mL/min', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina en 7 días',
      valor: '60 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: '3 varones sanos',
      condiciones: 'dosis oral de 14C-glimepirida',
      ref: {
        f: 'dailymed-glimepirida',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 60% of the total radioactivity was recovered in the urine in 7 days',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: '3 varones sanos',
      condiciones: 'dosis oral de 14C-glimepirida',
      ref: {
        f: 'dailymed-glimepirida',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 40% of the total radioactivity was recovered in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-glimepirida', '48ada723-8144-497d-afd6-a8c52a1dd3ff', 'GLIMEPIRIDE TABLET', 'Glimepiride', '4', '2026-01-28', '2026-11-15'),
    rengPubchem(3476, 'glimepiride', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
