import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-warfarina-teva'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'warfarina',
    nombre: 'Warfarina',
    clase: 'Anticoagulante oral (antagonista de la vitamina K, cumarínico)',
    sinonimos: ['warfarin', 'Coumadin', 'Jantoven'],
    formula: 'C19H16O4',
    masaMolar: 308.3,
    smiles: 'CC(=O)CC(C1=CC=CC=C1)C2=C(C3=CC=CC=C3OC2=O)O',
    inchikey: 'PJVWKTKQMONHTI-UHFFFAOYSA-N',
    cid: 54678486,
    iupac: '4-hidroxi-3-(3-oxo-1-fenilbutil)cromen-2-ona',
    estereo: { descripcion: 'Un estereocentro: es una mezcla racémica de los enantiómeros R y S; el S tiene de 2 a 5 veces más actividad anticoagulante.' },
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'warfarina-teva',
      producto: 'Warfarin sodium tablets, USP (de 1 a 10 mg)',
      titular: 'Teva Pharmaceuticals USA, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido ranurado',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '1, 2, 2,5, 3, 4, 5, 6, 7,5 y 10 mg de warfarina sódica por comprimido',
      sal: { nombre: 'Warfarina sódica (sal sódica; cristalina, como clatrato de isopropanol)', ref: rengR('11 DESCRIPTION', 'Crystalline warfarin sodium is an isopropanol clathrate') },
      excipientes: ['colloidal silicon dioxide', 'croscarmellose sodium', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'un colorante distinto en cada concentración (p. ej. FD&C red no. 40 en la de 1 mg)'],
      usos: { t: 'Prevenir y tratar la trombosis venosa y la embolia pulmonar, las complicaciones tromboembólicas de la fibrilación auricular o de una prótesis valvular, y reducir el riesgo de muerte, reinfarto e ictus tras un infarto.', ref: rengR('1 INDICATIONS AND USAGE', 'Prophylaxis and treatment of venous thrombosis and its extension, pulmonary embolism') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con warfarina sódica (sal racémica del activo), con lactosa, celulosa y un colorante que distingue cada concentración.',
    usos: 'Prevenir y tratar trombosis y embolias (venosas, por fibrilación auricular o válvulas) y reducir eventos tras un infarto, según su etiqueta.',
    actua: 'Bloquea en el hígado la enzima que regenera la vitamina K (VKORC1): se fabrican menos factores de coagulación activos.',
    recorrido: 'Se absorbe casi por completo, viaja unida a proteínas en un 99 %, el hígado la metaboliza (sobre todo CYP2C9) y sus metabolitos salen por la orina; el efecto tarda días.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido baja hasta el estómago.',
      ocurre: 'Se disgrega y libera la warfarina sódica, muy soluble en agua.',
      sigue: 'La warfarina disuelta pasa al intestino.',
      datos: [
        { t: 'La warfarina sódica cristalina es muy soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is very soluble in water') },
        { t: 'Cada comprimido contiene de 1 a 10 mg de warfarina sódica.', ref: rengR('11 DESCRIPTION', 'Each tablet, for oral administration, contains 1 mg') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la warfarina disuelta.',
      ocurre: 'Se absorbe prácticamente por completo; el máximo en la sangre suele alcanzarse en las primeras 4 horas.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe prácticamente por completo tras tomarla; la concentración máxima suele alcanzarse en las primeras 4 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'Warfarin is essentially completely absorbed after oral administration') },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Efecto de la comida', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'higado'],
      llega: 'La warfarina llega a la sangre.',
      ocurre: 'Viaja unida a proteínas del plasma en un 99 % y ocupa un volumen pequeño (0,14 L/kg). En el hígado inhibe la VKORC1: se regenera menos vitamina K y se fabrican menos factores de coagulación II, VII, IX y X activos (y proteínas C y S). El efecto anticoagulante aparece en unas 24 horas y es máximo a las 72-96 horas, porque los factores ya formados tardan en desaparecer.',
      sigue: 'El mismo hígado la va metabolizando.',
      simultaneo: 'Su efecto se retrasa respecto a su concentración: depende de lo que tardan en agotarse los factores de coagulación ya circulantes.',
      datos: [
        { t: 'Volumen de distribución de unos 0,14 L/kg.', ref: rengR(`${RENG_PK} › Distribution`, 'Warfarin shows a volume of distribution of about 0.14 L/kg') },
        { t: 'Alrededor del 99 % se une a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'Approximately 99% of the drug is bound to plasma proteins') },
        { t: 'El efecto anticoagulante suele aparecer en 24 horas, pero el máximo puede retrasarse 72-96 horas; una dosis única actúa de 2 a 5 días.', ref: rengR('12.2 Pharmacodynamics', 'peak anticoagulant effect may be delayed 72 to 96 hours') }
      ],
      accion: {
        diana: 'Subunidad C1 del complejo vitamina K epóxido reductasa (VKORC1)',
        efecto: 'Anticoagulante: menos factores de coagulación activos en la sangre.',
        lugar: ['higado', 'sangre'],
        datos: [
          { t: 'Inhibe la síntesis de los factores de coagulación dependientes de la vitamina K (II, VII, IX y X) y de las proteínas anticoagulantes C y S.', ref: rengR('12.1 Mechanism of Action', 'Warfarin acts by inhibiting the synthesis of vitamin K-dependent clotting factors') },
          { t: 'Se cree que actúa inhibiendo la subunidad C1 del complejo vitamina K epóxido reductasa (VKORC1), lo que reduce la regeneración de vitamina K.', ref: rengR('12.1 Mechanism of Action', 'inhibition of the C1 subunit of vitamin K epoxide reductase (VKORC1) enzyme complex') },
          { t: 'El enantiómero S tiene de 2 a 5 veces más actividad anticoagulante que el R, pero se elimina más rápido.', ref: rengR(RENG_PK, 'The S -enantiomer exhibits 2 to 5 times more anticoagulant activity than the R -enantiomer') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La warfarina llega a las enzimas microsomales del hígado.',
      ocurre: 'Su eliminación es casi toda por metabolismo. Las enzimas CYP450 del hígado (sobre todo CYP2C9, de expresión variable entre personas) la hidroxilan a metabolitos inactivos, y unas reductasas la convierten en alcoholes de warfarina, casi sin actividad.',
      sigue: 'Los metabolitos salen por la orina.',
      datos: [
        { t: 'La eliminación de la warfarina es casi toda por metabolismo.', ref: rengR(`${RENG_PK} › Metabolism`, 'The elimination of warfarin is almost entirely by metabolism') },
        { t: 'Las enzimas microsomales CYP450 del hígado la metabolizan de forma estereoselectiva a metabolitos hidroxilados inactivos (vía predominante) y unas reductasas a alcoholes de warfarina con mínima actividad.', ref: rengR(`${RENG_PK} › Metabolism`, 'Warfarin is stereoselectively metabolized by hepatic cytochrome P-450 (CYP450) microsomal enzymes to inactive hydroxylated metabolites') },
        { t: 'CYP2C9, una enzima polimórfica, es probablemente la principal; también intervienen CYP2C19, 2C8, 2C18, 1A2 y 3A4.', ref: rengR(`${RENG_PK} › Metabolism`, 'CYP2C9, a polymorphic enzyme, is likely to be the principal form of human liver CYP450') }
      ],
      metabolitos: [
        { nombre: 'Hidroxiwarfarinas (4′-, 6-, 7-, 8- y 10-)', nombreFuente: "4′-, 6-, 7-, 8-, and 10- hydroxywarfarin", actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'to inactive hydroxylated metabolites (predominant route)') },
        { nombre: 'Alcoholes de warfarina (dos diastereoisómeros)', nombreFuente: 'warfarin alcohols', actividad: 'activo', nota: 'Actividad anticoagulante mínima.', ref: rengR(`${RENG_PK} › Metabolism`, 'reduced metabolites (warfarin alcohols) with minimal anticoagulant activity') },
        { nombre: 'Deshidrowarfarina', nombreFuente: 'dehydrowarfarin', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'Identified metabolites of warfarin include dehydrowarfarin') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Los metabolitos llegan a los riñones.',
      ocurre: 'Hasta un 92 % de la dosis se recupera en la orina, casi todo como metabolitos. La semivida efectiva va de 20 a 60 horas (media de unas 40); la del enantiómero R (37-89 h) es mayor que la del S (21-43 h).',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Con fármaco marcado, hasta el 92 % de la dosis oral se recupera en la orina; muy poca warfarina sale sin cambios.', ref: rengR(`${RENG_PK} › Excretion`, 'up to 92% of the orally administered dose is recovered in urine') },
        { t: 'La semivida terminal tras una dosis es de alrededor de 1 semana; la efectiva va de 20 a 60 horas, con una media de unas 40.', ref: rengR(`${RENG_PK} › Excretion`, 'the effective half-life ranges from 20 to 60 hours, with a mean of about 40 hours') },
        { t: 'La semivida de la R-warfarina es de 37 a 89 horas y la de la S-warfarina, de 21 a 43.', ref: rengR(`${RENG_PK} › Excretion`, 'The half-life of R-warfarin ranges from 37 to 89 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≤ 4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'peak concentration generally attained within the first 4 hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '≈ 0,14', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'about 0.14 L/kg') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Approximately 99% of the drug is bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida efectiva (media)', valor: '20-60 (≈ 40)', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'ranges from 20 to 60 hours, with a mean of about 40 hours') },
    { magnitud: 'orina', nombre: 'Dosis recuperada en la orina (marcada)', valor: 'hasta 92', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'up to 92% of the orally administered dose is recovered in urine') },
    { magnitud: 'otra', nombre: 'Efecto anticoagulante máximo', valor: '72-96', unidad: 'h', ref: rengR('12.2 Pharmacodynamics', 'may be delayed 72 to 96 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '0cbce382-9c88-4f58-ae0f-532a841e8f95', 'Warfarin sodium tablet (Teva Pharmaceuticals USA, Inc.)', 'Warfarin sodium tablets USP (Teva Pharmaceuticals USA, Inc.)', '20', '2025-06-23', '2026-11-09'), rengPubchem(54678486, 'Warfarin', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
