import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rolapitant',
    nombre: 'Rolapitant',
    clase: 'Antagonista del receptor NK1 de la sustancia P (antiemético)',
    sinonimos: [ 'rolapitant', 'Varubi' ],
    formula: 'C25H26F6N2O2',
    masaMolar: 500.5,
    smiles: 'C[C@H](C1=CC(=CC(=C1)C(F)(F)F)C(F)(F)F)OC[C@]2(CC[C@]3(CCC(=O)N3)CN2)C4=CC=CC=C4',
    inchikey: 'FIVSJYGQAIEMOC-ZGNKEGEESA-N',
    cid: 10311306,
    iupac: '(5S,8S)-8-[[(1R)-1-[3,5-bis(trifluoromethyl)phenyl]ethoxy]methyl]-8-phenyl-1,9-diazaspiro[4.5]decan-2-one',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'rolapitant-oral',
      producto: 'Varubi · comprimido',
      titular: 'LURIA THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '90 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de rolapitant',
        ref: { f: 'dailymed-rolapitant', sec: '11 · Descripción', cita: 'Rolapitant hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'starch, corn',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'fd&c blue no. 2',
        'polysorbate 80'
      ],
      usos: {
        t: 'En combinación con otros antieméticos, prevención de las náuseas y los vómitos tardíos asociados a ciclos iniciales y repetidos de quimioterapia emetógena, incluida la altamente emetógena, en adultos.',
        ref: {
          f: 'dailymed-rolapitant',
          sec: '1 · Indicaciones',
          cita: 'indicated in combination with other antiemetic agents in adults for the prevention of delayed nausea and vomiting associated with initial and repeat courses of emetogenic cancer chemotherapy, including, but not limited to, highly emetogenic chemotherapy',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-rolapitant',
      advertencias: [
        {
          titulo: 'Interacción con sustratos de la CYP2D6',
          texto: 'Es un inhibidor moderado de la CYP2D6 y aumenta mucho las concentraciones de sus sustratos durante al menos 28 días tras una dosis única.',
          organos: [],
          ref: {
            f: 'dailymed-rolapitant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Rolapitant is a moderate inhibitor of CYP2D6 and significantly increases the plasma concentrations of CYP2D6 substrates for at least 28 days following single dose administration of VARUBI',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Tioridazina y pimozida',
          texto: 'Está contraindicado con sustratos de la CYP2D6 de margen estrecho como tioridazina y pimozida, cuyo aumento se asocia a prolongación del QT y torsade de pointes graves o mortales.',
          organos: [],
          ref: {
            f: 'dailymed-rolapitant',
            sec: '5 · Advertencias y precauciones',
            cita: 'Increased plasma concentrations of thioridazine and pimozide are associated with serious and/or life-threatening events of QT prolongation and Torsades de Pointes',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con quimioterapia altamente emetógena basada en cisplatino, las más frecuentes (3 % o más): neutropenia, hipo y dolor abdominal.',
          '34084-4',
          'Cisplatin Based Highly Emetogenic Chemotherapy: neutropenia, hiccups and abdominal pain'
        ],
        [
          'Con quimioterapia moderadamente emetógena y combinaciones de antraciclina y ciclofosfamida: disminución del apetito, neutropenia, mareo, dispepsia, infección urinaria, estomatitis y anemia.',
          '34084-4',
          'Anthracycline and Cyclophosphamide: decreased appetite, neutropenia, dizziness, dyspepsia, urinary tract infection, stomatitis and anemia'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 90 mg por comprimido, según la etiqueta; el activo va como clorhidrato de rolapitant. Los excipientes no son el principio activo.',
    usos: 'En combinación con otros antieméticos, prevención de las náuseas y los vómitos tardíos asociados a ciclos iniciales y repetidos de quimioterapia emetógena, incluida la altamente emetógena, en adultos.',
    actua: 'Antagonista selectivo y competitivo de los receptores humanos de la sustancia P/NK1.',
    recorrido: 'Tras una dosis oral única de 180 mg en ayunas, el rolapitant es medible en el plasma a los 30 minutos y alcanza la concentración máxima en unas 4 horas. Se elimina sobre todo por la vía hepatobiliar.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 90 mg rolapitant; film-coated, blue capsule shaped',
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
      ocurre: 'Tras una dosis oral única de 180 mg en ayunas, el rolapitant es medible en el plasma a los 30 minutos y alcanza la concentración máxima en unas 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis oral única de 180 mg en ayunas, el rolapitant es medible en el plasma a los 30 minutos y alcanza la concentración máxima en unas 4 horas.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'rolapitant was measurable in plasma within 30 minutes and the peak plasma concentration (C max ) for rolapitant which was reached in about 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas no afectó de forma significativa a su farmacocinética.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'Concomitant administration of a high-fat meal did not significantly affect the pharmacokinetics of rolapitant',
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
      ocurre: 'Se une mucho a las proteínas del plasma humano (99,8 %), y su gran volumen de distribución indica una distribución extensa a los tejidos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a las proteínas del plasma humano (99,8 %), y su gran volumen de distribución indica una distribución extensa a los tejidos.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'The large Vd indicated an extensive tissue distribution of rolapitant',
            codigo: '43682-4'
          }
        },
        {
          t: 'Unión a las proteínas del plasma humano del 99,8 %.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'Rolapitant was highly protein bound to human plasma (99.8%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución aparente tras una dosis oral única de 180 mg fue de 460 L en sujetos sanos.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution (Vd/F) following a single oral dose of 180 mg rolapitant was 460 L in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'dosis oral única de 180 mg'
        }
      ],
      accion: {
        diana: 'Receptor NK1 de la sustancia P',
        efecto: 'Antagonista selectivo y competitivo de los receptores humanos de la sustancia P/NK1.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Antagonista selectivo y competitivo de los receptores humanos de la sustancia P/NK1.',
            ref: {
              f: 'dailymed-rolapitant',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Rolapitant is a selective and competitive antagonist of human substance P/NK1 receptors',
              codigo: '43679-0'
            }
          },
          {
            t: 'Un estudio PET en humanos mostró que atraviesa la barrera hematoencefálica y ocupa los receptores NK1 del cerebro.',
            ref: {
              f: 'dailymed-rolapitant',
              sec: '12.2 · Farmacodinámica',
              cita: 'rolapitant crosses the blood brain barrier and occupies brain NK1 receptors',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y forma el metabolito activo principal M19 (rolapitant hidroxilado en C4 de la pirrolidina).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y forma el metabolito activo principal M19 (rolapitant hidroxilado en C4 de la pirrolidina).',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'Rolapitant is metabolized primarily by CYP3A4 to form a major active metabolite, M19 (C4-pyrrolidine-hydroxylated rolapitant)',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M19',
          actividad: 'activo',
          nota: 'Metabolito activo y circulante principal; se forma despacio (mediana del Tmax de 120 horas) y su semivida media es de 158 horas.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'In a mass balance study, the metabolite M19 was determined to be the major circulating metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'bilis', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se elimina sobre todo por la vía hepatobiliar.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se elimina sobre todo por la vía hepatobiliar.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'Rolapitant is eliminated primarily through the hepato/biliary route',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis de 180 mg marcada, de media el 14,2 % de la dosis se recuperó en la orina y el 73 % en las heces en 6 semanas.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'on average 14.2% (range 9% to 20%) and 73% (range 52% to 89%) of the dose was recovered in the urine and feces, respectively over 6 weeks',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal media fue de 169 a 183 horas (unos 7 días), sin depender de la dosis.',
          ref: {
            f: 'dailymed-rolapitant',
            sec: '12.3 · Farmacocinética',
            cita: 'the mean terminal half-life (t 1/2 ) of rolapitant ranged from 169 to 183 hours (approximately 7 days), and was independent of dose',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '4 (aprox.)',
      unidad: 'h',
      analito: 'rolapitant',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis única de 180 mg en ayunas',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'the peak plasma concentration (C max ) for rolapitant which was reached in about 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '99,8',
      unidad: '%',
      analito: 'rolapitant',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'Rolapitant was highly protein bound to human plasma (99.8%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente (Vd/F)',
      valor: '460',
      unidad: 'L',
      analito: 'rolapitant',
      poblacion: 'sujetos sanos',
      condiciones: 'dosis oral única de 180 mg',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution (Vd/F) following a single oral dose of 180 mg rolapitant was 460 L in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '169-183',
      unidad: 'h',
      analito: 'rolapitant',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean terminal half-life (t 1/2 ) of rolapitant ranged from 169 to 183 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total aparente (CL/F)',
      valor: '0,96',
      unidad: 'L/h',
      analito: 'rolapitant',
      poblacion: 'pacientes con cáncer',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent total clearance (CL/F) of oral rolapitant was 0.96 L/hour in cancer patients',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis recuperada en las heces en 6 semanas',
      valor: '73',
      unidad: '% de la dosis',
      analito: 'rolapitant y metabolitos',
      condiciones: 'dosis oral única de 180 mg marcada',
      ref: {
        f: 'dailymed-rolapitant',
        sec: '12.3 · Farmacocinética',
        cita: 'on average 14.2% (range 9% to 20%) and 73% (range 52% to 89%) of the dose was recovered in the urine and feces, respectively over 6 weeks',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-rolapitant', '8670c3cf-82d9-466d-be49-de33d8c8742b', 'VARUBI (ROLAPITANT) TABLET', 'Varubi', '3', '2026-09-10', '2026-11-18'),
    rengPubchem(10311306, 'rolapitant', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
