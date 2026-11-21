import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dimetilfumarato',
    nombre: 'Dimetilfumarato',
    clase: 'Inmunomodulador para la esclerosis múltiple (activa la vía Nrf2)',
    sinonimos: [ 'dimethyl fumarate', 'Tecfidera' ],
    formula: 'C6H8O4',
    masaMolar: 144.12,
    smiles: 'COC(=O)/C=C/C(=O)OC',
    inchikey: 'LDCRTTXIJACKKU-ONEGZZNKSA-N',
    cid: 637568,
    iupac: 'dimethyl (E)-but-2-enedioate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'dimetilfumarato-oral',
      producto: 'TECFIDERA · cápsula',
      titular: 'BIOGEN INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '120 mg o 240 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Fumarato de dimetilfumarato',
        ref: { f: 'dailymed-dimetilfumarato', sec: '11 · Descripción', cita: 'dimethyl fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'croscarmellose sodium',
        'microcrystalline cellulose',
        'magnesium stearate',
        'talc',
        'silicon dioxide',
        'methacrylic acid - methyl methacrylate copolymer (1:1)',
        'triethyl citrate',
        'methacrylic acid - ethyl acrylate copolymer (1:1) type a',
        'dimethicone',
        'sodium lauryl sulfate',
        'polysorbate 80',
        'gelatin, unspecified',
        'titanium dioxide',
        'fd&c blue no. 1',
        'ferric oxide yellow',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
        ref: {
          f: 'dailymed-dimetilfumarato',
          sec: '1 · Indicaciones',
          cita: 'TECFIDERA is indicated for the treatment of relapsing forms of multiple sclerosis (MS), to include clinically isolated syndrome, relapsing-remitting disease, and active secondary progressive disease, in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dimetilfumarato',
      advertencias: [
        {
          titulo: 'Anafilaxia y angioedema',
          texto: 'Si aparecen, hay que suspenderlo y no reiniciarlo.',
          organos: [],
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Anaphylaxis and Angioedema: Discontinue and do not restart TECFIDERA if these occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Leucoencefalopatía multifocal progresiva',
          texto: 'Hay que interrumpirlo al primer signo o síntoma que sugiera la enfermedad.',
          organos: [],
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Progressive Multifocal Leukoencephalopathy (PML): Withhold TECFIDERA at the first sign or symptom suggestive of PML',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Linfopenia',
          texto: 'Hacer un hemograma con recuento de linfocitos antes de empezar, a los 6 meses y cada 6 a 12 meses.',
          organos: [],
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Lymphopenia: Obtain a CBC including lymphocyte count before initiating TECFIDERA, after 6 months, and every 6 to 12 months thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más y al menos 2 puntos por encima del placebo): rubefacción, dolor abdominal, diarrea y náuseas.',
          '34084-4',
          'Most common adverse reactions (incidence ≥10% and ≥2% placebo) were flushing, abdominal pain, diarrhea, and nausea'
        ],
        [
          'El 4 % de los pacientes con dimetilfumarato y menos del 1 % con placebo dejaron el tratamiento por acontecimientos digestivos.',
          '34084-4',
          'Four percent (4%) of patients treated with TECFIDERA and less than 1% of placebo patients discontinued due to gastrointestinal events'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 120 mg o 240 mg por cápsula, según la etiqueta; el activo va como fumarato de dimetilfumarato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
    actua: 'Su mecanismo en la esclerosis múltiple se desconoce; el dimetilfumarato y su metabolito monometilfumarato activan la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
    recorrido: 'La mediana del Tmax del monometilfumarato es de 2-2,5 horas. La exhalación de CO2 es la vía principal de eliminación (alrededor del 60 % de la dosis); la eliminación renal y fecal son vías menores (16 % y 1 %).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula de liberación retardada tragada: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de liberación retardada: la cubierta retrasa la liberación hasta pasar el estómago.',
      sigue: 'La cubierta resiste el ácido del estómago y el principio activo se libera más adelante, en el intestino.',
      datos: [
        {
          t: 'Cápsula dura de liberación retardada: la cubierta retrasa la liberación hasta pasar el estómago.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '3 · Formas y concentraciones',
            cita: 'TECFIDERA is available as hard gelatin delayed-release capsules containing 120 mg or 240 mg of dimethyl fumarate',
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
      ocurre: 'La mediana del Tmax del monometilfumarato es de 2-2,5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del Tmax del monometilfumarato es de 2-2,5 horas.',
          ref: { f: 'dailymed-dimetilfumarato', sec: '12.3 · Farmacocinética', cita: 'The median T max of MMF is 2-2.5 hours', codigo: '43682-4' }
        },
        {
          t: 'Una comida rica en grasas y calorías no cambió el AUC del monometilfumarato, pero redujo su Cmax un 40 % y retrasó el Tmax de 2,0 a 5,5 horas.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat, high-calorie meal did not affect the AUC of MMF but decreased its C max by 40%. The T max was delayed from 2.0 hours to 5.5 hours',
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
      ocurre: 'El volumen de distribución aparente del monometilfumarato es de 53 a 73 L en sujetos sanos y su unión a las proteínas del plasma humano del 27 %-45 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente del monometilfumarato es de 53 a 73 L en sujetos sanos y su unión a las proteínas del plasma humano del 27 %-45 %.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of MMF is 27-45% and independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente del monometilfumarato de 53 a 73 L en sujetos sanos.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of MMF varies between 53 and 73 L in healthy subjects',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'Vía Nrf2',
        efecto: 'Su mecanismo en la esclerosis múltiple se desconoce; el dimetilfumarato y su metabolito monometilfumarato activan la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo en la esclerosis múltiple se desconoce; el dimetilfumarato y su metabolito monometilfumarato activan la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
            ref: {
              f: 'dailymed-dimetilfumarato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'DMF and the metabolite, monomethyl fumarate (MMF), have been shown to activate the Nuclear factor (erythroid-derived 2)-like 2 (Nrf2) pathway in vitro and in vivo in animals and humans',
              codigo: '43679-0'
            }
          },
          {
            t: 'In vitro, el monometilfumarato es agonista del receptor del ácido nicotínico.',
            ref: {
              f: 'dailymed-dimetilfumarato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'MMF has been identified as a nicotinic acid receptor agonist in vitro',
              codigo: '43679-0'
            },
            condiciones: 'in vitro'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Antes de llegar a la circulación sistémica, las esterasas presentes en el tubo digestivo, la sangre y los tejidos lo metabolizan de forma extensa; el monometilfumarato sigue por el ciclo de los ácidos tricarboxílicos, sin intervención del citocromo P450.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Antes de llegar a la circulación sistémica, las esterasas presentes en el tubo digestivo, la sangre y los tejidos lo metabolizan de forma extensa; el monometilfumarato sigue por el ciclo de los ácidos tricarboxílicos, sin intervención del citocromo P450.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'dimethyl fumarate is extensively metabolized by esterases, which are ubiquitous in the gastrointestinal tract, blood, and tissues, before it reaches the systemic circulation',
            codigo: '43682-4'
          }
        },
        {
          t: 'El monometilfumarato se metaboliza después por el ciclo de los ácidos tricarboxílicos, sin intervención del sistema del citocromo P450.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Further metabolism of MMF occurs through the tricarboxylic acid (TCA) cycle, with no involvement of the cytochrome P450 (CYP) system',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Monometilfumarato (MMF)',
          actividad: 'activo',
          nota: 'Metabolito que circula en el plasma y activa la vía Nrf2; luego se transforma en ácidos fumárico y cítrico y glucosa.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12 · Farmacología clínica',
            cita: 'DMF and the metabolite, monomethyl fumarate (MMF), have been shown to activate the Nuclear factor (erythroid-derived 2)-like 2 (Nrf2) pathway',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La exhalación de CO2 es la vía principal de eliminación (alrededor del 60 % de la dosis); la eliminación renal y fecal son vías menores (16 % y 1 %).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La exhalación de CO2 es la vía principal de eliminación (alrededor del 60 % de la dosis); la eliminación renal y fecal son vías menores (16 % y 1 %).',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal and fecal elimination are minor routes of elimination, accounting for 16% and 1% of the dose respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La exhalación de CO2 es la vía de eliminación principal, con alrededor del 60 % de la dosis.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Exhalation of CO 2 is the primary route of elimination, accounting for approximately 60% of the TECFIDERA dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal del monometilfumarato es de alrededor de 1 hora.',
          ref: {
            f: 'dailymed-dimetilfumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of MMF is approximately 1 hour',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del Tmax del monometilfumarato',
      valor: '2-2,5',
      unidad: 'h',
      analito: 'monometilfumarato',
      ref: { f: 'dailymed-dimetilfumarato', sec: '12.3 · Farmacocinética', cita: 'The median T max of MMF is 2-2.5 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente del monometilfumarato',
      valor: '53-73',
      unidad: 'L',
      analito: 'monometilfumarato',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-dimetilfumarato',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of MMF varies between 53 and 73 L in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas del monometilfumarato',
      valor: '27-45',
      unidad: '%',
      analito: 'monometilfumarato',
      ref: { f: 'dailymed-dimetilfumarato', sec: '12.3 · Farmacocinética', cita: 'Human plasma protein binding of MMF is 27-45%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del monometilfumarato',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'monometilfumarato',
      ref: {
        f: 'dailymed-dimetilfumarato',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of MMF is approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Dosis eliminada como CO2 exhalado',
      valor: '60 (aprox.)',
      unidad: '% de la dosis',
      analito: 'dimetilfumarato',
      ref: {
        f: 'dailymed-dimetilfumarato',
        sec: '12.3 · Farmacocinética',
        cita: 'Exhalation of CO 2 is the primary route of elimination, accounting for approximately 60% of the TECFIDERA dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dimetilfumarato', '665d7e74-036c-5f68-5b67-ab84b9b49151', 'TECFIDERA (DIMETHYL FUMARATE) KIT TECFIDERA (DIMETHYL FUMARATE) CAPSULE', 'TECFIDERA', '56', '2026-10-29', '2026-11-19'),
    rengPubchem(637568, 'dimethyl fumarate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
