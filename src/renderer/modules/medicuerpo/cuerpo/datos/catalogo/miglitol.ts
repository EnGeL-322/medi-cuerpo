import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'miglitol',
    nombre: 'Miglitol',
    clase: 'Inhibidor de las alfa-glucosidasas intestinales',
    sinonimos: [ 'miglitol' ],
    formula: 'C8H17NO5',
    masaMolar: 207.22,
    smiles: 'C1[C@@H]([C@H]([C@@H]([C@H](N1CCO)CO)O)O)O',
    inchikey: 'IBAQFPQHRJAVAV-ULAWRXDQSA-N',
    cid: 441314,
    iupac: '(2R,3R,4R,5S)-1-(2-hydroxyethyl)-2-(hydroxymethyl)piperidine-3,4,5-triol',
    area: 'Metabolismo y diabetes'
  },
  presentaciones: [
    {
      id: 'miglitol-oral',
      producto: 'Miglitol · comprimido recubierto',
      titular: 'WESTMINSTER PHARMACEUTICALS, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg, 100 mg o 50 mg por comprimido, según la etiqueta',
      excipientes: [
        'magnesium stearate',
        'cellulose, microcrystalline',
        'starch, corn',
        'hypromelloses',
        'polyethylene glycol 400',
        'titanium dioxide',
        'polysorbate 80'
      ],
      usos: {
        t: 'Complemento de la dieta y el ejercicio para mejorar el control glucémico en adultos con diabetes mellitus tipo 2.',
        ref: {
          f: 'dailymed-miglitol',
          sec: '1 · Indicaciones',
          cita: 'Miglitol tablets are indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-miglitol',
      advertencias: [
        {
          titulo: 'Hipoglucemia con sulfonilureas o insulina',
          texto: 'Solo no debería causar hipoglucemia, pero junto con una sulfonilurea o insulina baja más la glucosa en sangre y puede aumentar el riesgo de hipoglucemia.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-miglitol',
            sec: 'Hypoglycemia',
            cita: 'Because miglitol tablets given in combination with a sulfonylurea or insulin will cause a further lowering of blood glucose, it may increase the hypoglycemic potential of the sulfonylurea or insulin',
            codigo: '42229-5'
          }
        },
        {
          titulo: 'Neumatosis quística intestinal',
          texto: 'Hay notificaciones raras tras la comercialización; si se sospecha, hay que suspender el miglitol y hacer las pruebas de imagen adecuadas.',
          organos: [],
          ref: {
            f: 'dailymed-miglitol',
            sec: 'Postmarketing Experience',
            cita: 'If pneumatosis cystoides intestinalis is suspected, discontinue miglitol tablets and perform the appropriate diagnostic imaging',
            codigo: '42229-5'
          }
        }
      ],
      reacciones: [
        [
          'Los síntomas digestivos son las reacciones más frecuentes: en los ensayos de EE. UU., dolor abdominal, diarrea y flatulencia en el 11,7 %, 28,7 % y 41,5 %, frente al 4,7 %, 10,0 % y 12,0 % con placebo.',
          '34084-4',
          'the incidences of abdominal pain, diarrhea, and flatulence were 11.7%, 28.7%, and 41.5% respectively in 962 patients treated with miglitol tablets'
        ],
        [
          'Erupción cutánea en el 4,3 % de los pacientes frente al 2,4 % con placebo.',
          '34084-4',
          'Skin rash was reported in 4.3% of patients treated with miglitol tablets compared to 2.4% of placebo-treated patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 25 mg, 100 mg o 50 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Complemento de la dieta y el ejercicio para mejorar el control glucémico en adultos con diabetes mellitus tipo 2.',
    actua: 'Inhibe de forma reversible las alfa-glucosidasas unidas a la membrana del intestino; así retrasa la absorción de glucosa y reduce la hiperglucemia después de las comidas.',
    recorrido: 'La absorción es saturable a dosis altas: una dosis de 25 mg se absorbe por completo y una de 100 mg en un 50 %-70 %. Se elimina por excreción renal como fármaco inalterado.'
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
            f: 'dailymed-miglitol',
            sec: '11 · Descripción',
            cita: 'Miglitol tablets are available as 25 mg, 50 mg, and 100 mg tablets for oral use',
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
      ocurre: 'La absorción es saturable a dosis altas: una dosis de 25 mg se absorbe por completo y una de 100 mg en un 50 %-70 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La absorción es saturable a dosis altas: una dosis de 25 mg se absorbe por completo y una de 100 mg en un 50 %-70 %.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption of miglitol is saturable at high doses: a dose of 25 mg is completely absorbed, whereas a dose of 100 mg is 50% to 70% absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con cualquier dosis, el pico se alcanza en 2 a 3 horas.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'For all doses, peak concentrations are reached in 2 to 3 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'No hay pruebas de que la absorción sistémica contribuya a su efecto terapéutico, que es local.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'There is no evidence that systemic absorption of miglitol contributes to its therapeutic effect',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución es de 0,18 L/kg, lo que indica que se reparte sobre todo en el líquido extracelular.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución es de 0,18 L/kg, lo que indica que se reparte sobre todo en el líquido extracelular.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Miglitol has a volume of distribution of 0.18 L/kg, consistent with distribution primarily into the extracellular fluid',
            codigo: '43682-4'
          }
        },
        {
          t: 'La unión a proteínas es despreciable (menos del 4 %).',
          ref: { f: 'dailymed-miglitol', sec: '12.3 · Farmacocinética', cita: 'The protein binding of miglitol is negligible (<4.0%)', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Alfa-glucosidasas intestinales unidas a la membrana',
        efecto: 'Inhibe de forma reversible las alfa-glucosidasas unidas a la membrana del intestino; así retrasa la absorción de glucosa y reduce la hiperglucemia después de las comidas.',
        lugar: [ 'intestino-delgado' ],
        datos: [
          {
            t: 'Inhibe de forma reversible las alfa-glucosidasas unidas a la membrana del intestino; así retrasa la absorción de glucosa y reduce la hiperglucemia después de las comidas.',
            ref: {
              f: 'dailymed-miglitol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The antihyperglycemic action of miglitol results from a reversible inhibition of membrane-bound intestinal α-glucoside hydrolase enzymes',
              codigo: '43679-0'
            }
          },
          {
            t: 'Estas enzimas hidrolizan oligosacáridos y disacáridos a glucosa y otros monosacáridos en el borde en cepillo del intestino delgado.',
            ref: {
              f: 'dailymed-miglitol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Membrane-bound intestinal α-glucosidases hydrolyze oligosaccharides and disaccharides to glucose and other monosaccharides in the brush border of the small intestine',
              codigo: '43679-0'
            }
          },
          {
            t: 'A diferencia de las sulfonilureas, no aumenta la secreción de insulina.',
            ref: {
              f: 'dailymed-miglitol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In contrast to sulfonylureas, miglitol tablets do not enhance insulin secretion',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No se metaboliza en humanos ni en ninguna especie animal estudiada.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No se metaboliza en humanos ni en ninguna especie animal estudiada.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Miglitol is not metabolized in humans or in any animal species studied',
            codigo: '43682-4'
          }
        },
        {
          t: 'No se han detectado metabolitos en el plasma, la orina ni las heces, lo que indica que no hay metabolismo sistémico ni presistémico.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'No metabolites have been detected in plasma, urine, or feces, indicating a lack of either systemic or pre-systemic metabolism',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina por excreción renal como fármaco inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina por excreción renal como fármaco inalterado.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Miglitol is eliminated by renal excretion as unchanged drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis de 25 mg, más del 95 % se recupera en la orina en 24 horas.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'Following a 25 mg dose, over 95% of the dose is recovered in the urine within 24 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación plasmática es de unas 2 horas.',
          ref: {
            f: 'dailymed-miglitol',
            sec: '12.3 · Farmacocinética',
            cita: 'The elimination half-life of miglitol from plasma is approximately 2 hours',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-3',
      unidad: 'h',
      analito: 'miglitol',
      ref: {
        f: 'dailymed-miglitol',
        sec: '12.3 · Farmacocinética',
        cita: 'For all doses, peak concentrations are reached in 2 to 3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida de una dosis de 100 mg',
      valor: '50-70',
      unidad: '%',
      analito: 'miglitol',
      condiciones: 'dosis de 100 mg',
      ref: { f: 'dailymed-miglitol', sec: '12.3 · Farmacocinética', cita: 'a dose of 100 mg is 50% to 70% absorbed', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '< 4',
      unidad: '%',
      analito: 'miglitol',
      ref: { f: 'dailymed-miglitol', sec: '12.3 · Farmacocinética', cita: 'The protein binding of miglitol is negligible (<4.0%)', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,18',
      unidad: 'L/kg',
      analito: 'miglitol',
      ref: { f: 'dailymed-miglitol', sec: '12.3 · Farmacocinética', cita: 'Miglitol has a volume of distribution of 0.18 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'miglitol',
      ref: {
        f: 'dailymed-miglitol',
        sec: '12.3 · Farmacocinética',
        cita: 'The elimination half-life of miglitol from plasma is approximately 2 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis recuperada en la orina en 24 horas',
      valor: '> 95',
      unidad: '% de la dosis',
      analito: 'miglitol',
      condiciones: 'dosis de 25 mg',
      ref: {
        f: 'dailymed-miglitol',
        sec: '12.3 · Farmacocinética',
        cita: 'Following a 25 mg dose, over 95% of the dose is recovered in the urine within 24 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-miglitol', 'b8da2015-d254-2425-e053-2995a90acf0e', 'MIGLITOL TABLET, COATED', 'Miglitol', '2', '2021-12-08', '2026-11-18'),
    rengPubchem(441314, 'miglitol', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
