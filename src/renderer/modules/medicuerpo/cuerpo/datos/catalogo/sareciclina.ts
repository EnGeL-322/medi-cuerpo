import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sareciclina',
    nombre: 'Sareciclina',
    clase: 'Aminometilciclina de la clase de las tetraciclinas',
    sinonimos: [ 'sarecycline hydrochloride', 'Seysara' ],
    formula: 'C24H29N3O8',
    masaMolar: 487.5,
    smiles: 'CN(C)[C@H]1[C@@H]2C[C@@H]3CC4=C(C=CC(=C4C(=C3C(=O)[C@@]2(C(=C(C1=O)C(=O)N)O)O)O)O)CN(C)OC',
    inchikey: 'AYUMVPHUMFKFPJ-SBAJWEJLSA-N',
    cid: 54681908,
    iupac: '(4S,4aS,5aR,12aR)-4-(dimethylamino)-1,10,11,12a-tetrahydroxy-7-[[methoxy(methyl)amino]methyl]-3,12-dioxo-4a,5,5a,6-tetrahydro-4H-tetracene-2-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'sareciclina-oral',
      producto: 'Seysara · comprimido recubierto',
      titular: 'ALMIRALL, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '60 mg, 100 mg o 150 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de sareciclina',
        ref: { f: 'dailymed-sareciclina', sec: '11 · Descripción', cita: 'Sarecycline hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'povidone, unspecified',
        'sodium starch glycolate type a potato',
        'sodium stearyl fumarate',
        'd&c yellow no. 10',
        'ferric oxide yellow',
        'methacrylic acid - ethyl acrylate copolymer (1:1) type a',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'sodium bicarbonate',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de las lesiones inflamatorias del acné vulgar no nodular moderado o grave desde los 9 años.',
        ref: {
          f: 'dailymed-sareciclina',
          sec: '1 · Indicaciones',
          cita: 'SEYSARA ® (sarecycline) tablet, is indicated for the treatment of inflammatory lesions of non-nodular moderate to severe acne vulgaris in patients 9 years of age and older',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sareciclina',
      advertencias: [
        {
          titulo: 'Coloración dental',
          texto: 'Su uso durante el desarrollo dental puede teñir los dientes de forma permanente.',
          organos: [],
          ref: {
            f: 'dailymed-sareciclina',
            sec: '5 · Advertencias y precauciones',
            cita: 'may cause permanent discoloration of the teeth (yellow-gray-brown)',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos sobre el sistema nervioso central',
          texto: 'Con tetraciclinas se han notificado aturdimiento, mareo o vértigo; precaución al conducir.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-sareciclina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Central nervous system side effects, including light-headedness, dizziness or vertigo, have been reported with tetracycline use',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipertensión intracraneal',
          texto: 'Puede causarla; suspender si aparecen síntomas.',
          organos: [],
          ref: { f: 'dailymed-sareciclina', sec: '5 · Advertencias y precauciones', cita: 'SEYSARA may cause intracranial hypertension', codigo: '43685-7' }
        },
        {
          titulo: 'Fotosensibilidad',
          texto: 'Minimizar o evitar la exposición a la luz solar natural o artificial.',
          organos: [],
          ref: { f: 'dailymed-sareciclina', sec: '5 · Advertencias y precauciones', cita: 'Photosensitivity can occur with SEYSARA', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [ 'La reacción más frecuente (1 % o más) es la náusea.', '34084-4', 'Most common adverse reaction (incidence ≥ 1%) is nausea' ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 60 mg, 100 mg o 150 mg por comprimido, según la etiqueta; el activo va como clorhidrato de sareciclina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las lesiones inflamatorias del acné vulgar no nodular moderado o grave desde los 9 años.',
    actua: 'En P. acnes se une a la subunidad ribosómica 30S, interactúa con el ARN ribosómico 16S y bloquea la síntesis de proteínas; no se conoce su mecanismo en el acné.',
    recorrido: 'La mediana del tmax es de 1,5 a 2,0 horas; una comida grasa con leche bajó la Cmax un 31 % y el AUC un 27 %. Tras 100 mg marcados, el 42,6 % se recuperó en las heces (14,9 % sin cambios) y el 44,1 % en la orina (24,7 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '11 · Descripción',
            cita: 'The yellow film coating contains D&C yellow #10 aluminum lake',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La mediana del tmax es de 1,5 a 2,0 horas; una comida grasa con leche bajó la Cmax un 31 % y el AUC un 27 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax es de 1,5 a 2,0 horas; una comida grasa con leche bajó la Cmax un 31 % y el AUC un 27 %.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'The median time to peak plasma concentration (T max ) of sarecycline is 1.5 to 2.0 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas con leche retrasó el tmax y redujo la Cmax un 31 % y el AUC un 27 %.',
          ref: { f: 'dailymed-sareciclina', sec: '12.3 · Farmacocinética', cita: 'decreased sarecycline C max by 31% and AUC by 27%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas es del 62,5 al 74,7 % in vitro y el volumen de distribución aparente de 91,4 a 97,0 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas es del 62,5 al 74,7 % in vitro y el volumen de distribución aparente de 91,4 a 97,0 L.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'Protein binding of sarecycline is 62.5% to 74.7% in vitro',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente en estado estacionario de 91,4 a 97,0 L.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean apparent volume of distribution of sarecycline at steady-state ranges from 91.4 L to 97.0 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Subunidad ribosómica 30S bacteriana',
        efecto: 'En P. acnes se une a la subunidad ribosómica 30S, interactúa con el ARN ribosómico 16S y bloquea la síntesis de proteínas; no se conoce su mecanismo en el acné.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'En P. acnes se une a la subunidad ribosómica 30S, interactúa con el ARN ribosómico 16S y bloquea la síntesis de proteínas; no se conoce su mecanismo en el acné.',
            ref: {
              f: 'dailymed-sareciclina',
              sec: '12 · Farmacología clínica',
              cita: 'In P. acnes , sarecycline binds to the 30S ribosomal subunit and interacts with 16S ribosomal RNA',
              codigo: '34090-1'
            }
          },
          {
            t: 'No se conoce el mecanismo por el que trata las lesiones inflamatorias del acné.',
            ref: {
              f: 'dailymed-sareciclina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action of SEYSARA in treating the inflammatory lesions of non-nodular acne vulgaris is not known',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Su metabolismo por enzimas de microsomas hepáticos humanos es mínimo (menos del 15 %) in vitro.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Su metabolismo por enzimas de microsomas hepáticos humanos es mínimo (menos del 15 %) in vitro.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism of sarecycline by enzymes in human liver microsomes is minimal (< 15%) in vitro',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 42,6 % se recuperó en las heces (14,9 % sin cambios) y el 44,1 % en la orina (24,7 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 42,6 % se recuperó en las heces (14,9 % sin cambios) y el 44,1 % en la orina (24,7 % sin cambios).',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: '42.6% of the dose was recovered in feces (14.9% as unchanged) and 44.1% in urine (24.7% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación media es de 21 a 22 horas.',
          ref: {
            f: 'dailymed-sareciclina',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean elimination half-life of sarecycline is 21 to 22 hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax',
      valor: '1,5-2,0',
      unidad: 'h',
      analito: 'sareciclina',
      ref: {
        f: 'dailymed-sareciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to peak plasma concentration (T max ) of sarecycline is 1.5 to 2.0 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas in vitro',
      valor: '62,5-74,7',
      unidad: '%',
      analito: 'sareciclina',
      ref: {
        f: 'dailymed-sareciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'Protein binding of sarecycline is 62.5% to 74.7% in vitro',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente en estado estacionario',
      valor: '91,4-97,0',
      unidad: 'L',
      analito: 'sareciclina',
      ref: {
        f: 'dailymed-sareciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent volume of distribution of sarecycline at steady-state ranges from 91.4 L to 97.0 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '21-22',
      unidad: 'h',
      analito: 'sareciclina',
      ref: {
        f: 'dailymed-sareciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean elimination half-life of sarecycline is 21 to 22 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral aparente en estado estacionario',
      valor: '3 (aprox.)',
      unidad: 'L/h',
      analito: 'sareciclina',
      ref: {
        f: 'dailymed-sareciclina',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean apparent oral clearance (CL/F) of sarecycline at steady state is approximately 3 L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina',
      valor: '44,1',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: { f: 'dailymed-sareciclina', sec: '12.3 · Farmacocinética', cita: '44.1% in urine (24.7% as unchanged)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sareciclina', 'b200957c-3004-4988-be97-9fd619a83649', 'SEYSARA (SARECYCLINE HYDROCHLORIDE) TABLET, COATED', 'Seysara', '12', '2024-06-19', '2026-11-19'),
    rengPubchem(54681908, 'sarecycline hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
