import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'diroximel-fumarato',
    nombre: 'Diroximel fumarato',
    clase: 'Inmunomodulador para la esclerosis múltiple (profármaco del monometilfumarato)',
    sinonimos: [ 'diroximel fumarate', 'Vumerity' ],
    formula: 'C11H13NO6',
    masaMolar: 255.22,
    smiles: 'COC(=O)/C=C/C(=O)OCCN1C(=O)CCC1=O',
    inchikey: 'YIMYDTCOUQIDMT-SNAWJCMRSA-N',
    cid: 73330464,
    iupac: '4-O-[2-(2,5-dioxopyrrolidin-1-yl)ethyl] 1-O-methyl (E)-but-2-enedioate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'diroximel-fumarato-oral',
      producto: 'Vumerity · cápsula',
      titular: 'BIOGEN INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '231 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Fumarato de diroximel fumarato',
        ref: { f: 'dailymed-diroximel-fumarato', sec: '11 · Descripción', cita: 'diroximel fumarate', codigo: '34089-3' }
      },
      excipientes: [
        'methacrylic acid and ethyl acrylate copolymer',
        'crospovidone',
        'microcrystalline cellulose',
        'silicon dioxide',
        'triethyl citrate',
        'talc',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'potassium chloride',
        'carrageenan'
      ],
      usos: {
        t: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
        ref: {
          f: 'dailymed-diroximel-fumarato',
          sec: '1 · Indicaciones',
          cita: 'VUMERITY is indicated for the treatment of relapsing forms of multiple sclerosis (MS), to include clinically isolated syndrome, relapsing-remitting disease, and active secondary progressive disease, in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-diroximel-fumarato',
      advertencias: [
        {
          titulo: 'Anafilaxia y angioedema',
          texto: 'Si aparecen, hay que suspenderlo y no reiniciarlo.',
          organos: [],
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Anaphylaxis and Angioedema: Discontinue and do not restart VUMERITY if these occur',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Leucoencefalopatía multifocal progresiva',
          texto: 'Hay que interrumpirlo al primer signo o síntoma que sugiera la enfermedad.',
          organos: [],
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Progressive Multifocal Leukoencephalopathy (PML): Withhold VUMERITY at the first sign or symptom suggestive of PML',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Linfopenia',
          texto: 'Hacer un hemograma con recuento de linfocitos antes de empezar, a los 6 meses y cada 6 a 12 meses.',
          organos: [],
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Lymphopenia: Obtain a CBC including lymphocyte count before initiating VUMERITY, after 6 months, and every 6 to 12 months thereafter',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con dimetilfumarato, que tiene el mismo metabolito activo, las más frecuentes (10 % o más y al menos 2 puntos sobre el placebo) fueron rubefacción, dolor abdominal, diarrea y náuseas.',
          '34084-4',
          'Most common adverse reactions (incidence for dimethyl fumarate [which has the same active metabolite as VUMERITY] ≥10% and ≥2% more than placebo) were flushing, abdominal pain, diarrhea, and nausea'
        ],
        [
          'Con dimetilfumarato, el 4 % de los pacientes y menos del 1 % con placebo dejaron el tratamiento por acontecimientos digestivos.',
          '34084-4',
          'Four percent (4%) of patients treated with dimethyl fumarate and less than 1% of placebo patients discontinued due to gastrointestinal events'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 231 mg por cápsula, según la etiqueta; el activo va como fumarato de diroximel fumarato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de las formas recurrentes de esclerosis múltiple en adultos, incluidos el síndrome clínico aislado, la enfermedad recurrente-remitente y la secundaria progresiva activa.',
    actua: 'Su mecanismo se desconoce; su metabolito activo, el monometilfumarato, activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
    recorrido: 'La mediana del tmax del monometilfumarato es de 2,5 a 3 horas. El monometilfumarato se elimina sobre todo como CO2 en el aire espirado, con trazas en la orina; el HES sale sobre todo por la orina (58 %-63 % de la dosis).'
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
            f: 'dailymed-diroximel-fumarato',
            sec: '3 · Formas y concentraciones',
            cita: 'VUMERITY is available as hard, delayed-release capsules containing 231 mg of diroximel fumarate',
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
      ocurre: 'La mediana del tmax del monometilfumarato es de 2,5 a 3 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tmax del monometilfumarato es de 2,5 a 3 horas.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of VUMERITY, the median t max of MMF is 2.5 to 3 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas y calorías no cambió el AUC del monometilfumarato, pero redujo la Cmax alrededor de un 44 %.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'co-administration of VUMERITY with a high-fat, high-calorie meal (900-1000 calories, 50% of calories from fat) did not affect the AUC of MMF, but resulted in an approximately 44% reduction in C max compared to fasted state',
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
      ocurre: 'El volumen de distribución aparente del monometilfumarato es de 72 a 83 L en sujetos sanos y su unión a las proteínas del plasma humano del 27 %-45 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente del monometilfumarato es de 72 a 83 L en sujetos sanos y su unión a las proteínas del plasma humano del 27 %-45 %.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Human plasma protein binding of MMF is 27-45% and independent of concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente del monometilfumarato de 72 a 83 L.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution for MMF is between 72 L and 83 L in healthy subjects after administration of VUMERITY',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos'
        }
      ],
      accion: {
        diana: 'Vía Nrf2',
        efecto: 'Su mecanismo se desconoce; su metabolito activo, el monometilfumarato, activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
        lugar: [],
        datos: [
          {
            t: 'Su mecanismo se desconoce; su metabolito activo, el monometilfumarato, activa la vía Nrf2, implicada en la respuesta celular al estrés oxidativo.',
            ref: {
              f: 'dailymed-diroximel-fumarato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'MMF, the active metabolite of diroximel fumarate, has been shown to activate the nuclear factor (erythroid-derived 2)-like 2 (Nrf2) pathway in vitro and in vivo in animals and humans',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Las esterasas del tubo digestivo, la sangre y los tejidos lo metabolizan de forma extensa a monometilfumarato antes de llegar a la circulación sistémica; después sigue el ciclo de los ácidos tricarboxílicos, sin el citocromo P450.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Las esterasas del tubo digestivo, la sangre y los tejidos lo metabolizan de forma extensa a monometilfumarato antes de llegar a la circulación sistémica; después sigue el ciclo de los ácidos tricarboxílicos, sin el citocromo P450.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'diroximel fumarate is extensively metabolized by esterases, which are ubiquitous in the gastrointestinal tract, blood, and tissues, to the major active metabolite, MMF, before it reaches the systemic circulation',
            codigo: '43682-4'
          }
        },
        {
          t: 'El monometilfumarato se metaboliza por el ciclo de los ácidos tricarboxílicos, sin el sistema del citocromo P450.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
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
          nota: 'Metabolito activo principal; activa la vía Nrf2.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12 · Farmacología clínica',
            cita: 'MMF, the active metabolite of diroximel fumarate',
            codigo: '34090-1'
          }
        },
        {
          nombre: '2-hidroxietil succinimida (HES)',
          actividad: 'inactivo',
          nota: 'Metabolito principal inactivo, que sale sobre todo por la orina.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'Esterase metabolism of diroximel fumarate also produces 2-hydroxyethyl succinimide (HES), an inactive major metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El monometilfumarato se elimina sobre todo como CO2 en el aire espirado, con trazas en la orina; el HES sale sobre todo por la orina (58 %-63 % de la dosis).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El monometilfumarato se elimina sobre todo como CO2 en el aire espirado, con trazas en la orina; el HES sale sobre todo por la orina (58 %-63 % de la dosis).',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'HES is mainly eliminated in urine (58-63% of the dose was excreted as HES in urine)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El monometilfumarato se elimina sobre todo como dióxido de carbono en el aire espirado; en la orina aparece menos del 0,3 % de la dosis.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
            sec: '12.3 · Farmacocinética',
            cita: 'MMF is mainly eliminated as carbon dioxide in the expired air with only trace amounts (less than 0.3% of the total dose) recovered in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal del monometilfumarato es de alrededor de 1 hora.',
          ref: {
            f: 'dailymed-diroximel-fumarato',
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
      nombre: 'Mediana del tmax del monometilfumarato',
      valor: '2,5-3',
      unidad: 'h',
      analito: 'monometilfumarato',
      ref: { f: 'dailymed-diroximel-fumarato', sec: '12.3 · Farmacocinética', cita: 'the median t max of MMF is 2.5 to 3 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente del monometilfumarato',
      valor: '72-83',
      unidad: 'L',
      analito: 'monometilfumarato',
      poblacion: 'sujetos sanos',
      ref: {
        f: 'dailymed-diroximel-fumarato',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution for MMF is between 72 L and 83 L in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas del monometilfumarato',
      valor: '27-45',
      unidad: '%',
      analito: 'monometilfumarato',
      ref: { f: 'dailymed-diroximel-fumarato', sec: '12.3 · Farmacocinética', cita: 'Human plasma protein binding of MMF is 27-45%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del monometilfumarato',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'monometilfumarato',
      ref: {
        f: 'dailymed-diroximel-fumarato',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of MMF is approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'HES excretado en la orina',
      valor: '58-63',
      unidad: '% de la dosis',
      analito: 'HES',
      ref: { f: 'dailymed-diroximel-fumarato', sec: '12.3 · Farmacocinética', cita: '58-63% of the dose was excreted as HES in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-diroximel-fumarato', '2d74414f-6b83-4ea2-9a95-3cecabbce774', 'VUMERITY (DIROXIMEL FUMARATE) CAPSULE', 'Vumerity', '16', '2025-06-02', '2026-11-19'),
    rengPubchem(73330464, 'diroximel fumarate', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
