import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-metformina-granules'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'metformina',
    nombre: 'Metformina',
    clase: 'Antidiabético oral (biguanida)',
    sinonimos: ['metformin', 'Glucophage'],
    formula: 'C4H11N5',
    masaMolar: 129.16,
    smiles: 'CN(C)C(=N)N=C(N)N',
    inchikey: 'XZWYZXLIPXDOLR-UHFFFAOYSA-N',
    cid: 4091,
    iupac: '3-(diaminometiliden)-1,1-dimetilguanidina',
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'metformina-granules',
      producto: 'Metformin Hydrochloride Tablets, USP 500, 850 y 1000 mg',
      titular: 'Granules Pharmaceuticals Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película (liberación inmediata)',
      formaFuente: 'TABLET',
      liberacion: 'inmediata',
      concentraciones: '500, 850 y 1000 mg de clorhidrato de metformina por comprimido',
      sal: { nombre: 'Clorhidrato de metformina; 500 mg de la sal equivalen a 389,93 mg de metformina base', ref: rengR('11 DESCRIPTION', 'which is equivalent to 389.93 mg, 662.88 mg, 779.86 mg metformin base') },
      excipientes: ['povidone (K-30)', 'povidone (K-90)', 'pregelatinized starch', 'magnesium stearate', 'recubrimiento: artificial blackberry flavor, hypromellose, macrogol, titanium dioxide'],
      usos: { t: 'Junto con dieta y ejercicio, mejorar el control de la glucosa en adultos y niños desde 10 años con diabetes tipo 2.', ref: rengR('1 INDICATIONS AND USAGE', 'adjunct to diet and exercise to improve glycemic control') },
      fuente: RENG_F,
      nota: 'La sección de farmacocinética de esta etiqueta incluye también datos de comprimidos de liberación prolongada (máximo hacia las 7 horas); no corresponden a esta presentación y no se usan en el recorrido.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de clorhidrato de metformina (la sal del activo) con povidona, almidón y estearato de magnesio.',
    usos: 'Control de la glucosa en la diabetes tipo 2, junto con dieta y ejercicio, según su etiqueta.',
    actua: 'Reduce la producción de glucosa del hígado y su absorción intestinal y mejora la captación de glucosa por los tejidos; no aumenta la secreción de insulina.',
    recorrido: 'Se absorbe un 50-60 %, no se une a proteínas, no se metaboliza y los riñones la eliminan sin cambios (un 90 % de lo absorbido en 24 horas).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto baja por el esófago hasta el estómago.',
      ocurre: 'Se disgrega y el clorhidrato de metformina, muy soluble en agua, se disuelve. Es de liberación inmediata.',
      sigue: 'La metformina disuelta pasa al intestino.',
      datos: [
        { t: 'Comprimidos de 500, 850 y 1000 mg de clorhidrato de metformina.', ref: rengR('11 DESCRIPTION', 'contain 500 mg, 850 mg, or 1,000 mg of metformin hydrochloride') },
        { t: 'El clorhidrato de metformina es muy soluble en agua.', ref: rengR('11 DESCRIPTION', 'Metformin hydrochloride is freely soluble in water') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la metformina disuelta.',
      ocurre: 'Se absorbe solo en parte: la biodisponibilidad absoluta de un comprimido de 500 mg en ayunas es del 50-60 %. Al subir la dosis se absorbe proporcionalmente menos. La comida reduce y retrasa algo la absorción.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta de un comprimido de 500 mg en ayunas es de un 50-60 %.', ref: rengR(`${RENG_PK} › Absorption`, 'given under fasting conditions is approximately 50% to 60%'), condiciones: 'en ayunas' },
        { t: 'A dosis crecientes no hay proporcionalidad, porque disminuye la absorción (no porque cambie la eliminación).', ref: rengR(`${RENG_PK} › Absorption`, 'which is due to decreased absorption rather than an alteration in elimination') },
        { t: 'Con comida, un comprimido de 850 mg da una concentración máxima un 40 % menor, un AUC un 25 % menor y un Tmax 35 minutos más tarde.', ref: rengR(`${RENG_PK} › Absorption`, 'Food decreases the extent of absorption and slightly delays the absorption of metformin'), condiciones: 'comprimido de 850 mg con comida frente a en ayunas' },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Tramo del intestino donde se absorbe', 'Tiempo hasta la concentración máxima de esta presentación']
    },
    distribucion: {
      organos: ['sangre', 'higado', 'intestino-delgado'],
      llega: 'La metformina absorbida circula por la sangre.',
      ocurre: 'Apenas se une a proteínas del plasma y entra poco a poco en los glóbulos rojos. Actúa en el hígado (menos producción de glucosa), en el intestino (menos absorción de glucosa) y en los tejidos (más captación de glucosa).',
      sigue: 'No se transforma: va directamente a los riñones.',
      datos: [
        { t: 'Volumen aparente de distribución medio de 654 ± 358 L tras dosis únicas de 850 mg.', ref: rengR(`${RENG_PK} › Distribution`, 'averaged 654 ± 358 L') },
        { t: 'Su unión a proteínas plasmáticas es despreciable; se reparte en los eritrocitos, probablemente en función del tiempo.', ref: rengR(`${RENG_PK} › Distribution`, 'Metformin is negligibly bound to plasma proteins') }
      ],
      accion: {
        diana: null,
        efecto: 'Baja la glucosa basal y después de comer, sin aumentar la secreción de insulina.',
        lugar: ['higado', 'intestino-delgado', 'tejidos'],
        datos: [
          { t: 'Disminuye la producción de glucosa en el hígado y su absorción intestinal y mejora la sensibilidad a la insulina aumentando la captación y el uso periféricos de glucosa.', ref: rengR('12.1 Mechanism of Action', 'Metformin decreases hepatic glucose production, decreases intestinal absorption of glucose') },
          { t: 'La secreción de insulina no cambia.', ref: rengR('12.1 Mechanism of Action', 'insulin secretion remains unchanged') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La metformina pasa por el hígado con la sangre.',
      ocurre: 'No se metaboliza: no sufre metabolismo hepático ni excreción biliar y no se han identificado metabolitos en humanos.',
      sigue: 'Llega intacta a los riñones.',
      datos: [{ t: 'Estudios intravenosos en personas sanas muestran que se excreta sin cambios en la orina, sin metabolismo hepático (no hay metabolitos identificados en humanos) ni excreción biliar.', ref: rengR(`${RENG_PK} › Metabolism`, 'does not undergo hepatic metabolism (no metabolites have been identified in humans) nor biliary excretion'), poblacion: 'personas sanas' }],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La metformina, sin transformar, llega a los riñones.',
      ocurre: 'Los túbulos renales la secretan activamente (su aclaramiento renal es unas 3,5 veces el de la creatinina). Un 90 % de lo absorbido sale por la orina en las primeras 24 horas; la semivida plasmática es de unas 6,2 horas.',
      sigue: 'Fin del recorrido. En la sangre total la semivida es mayor (17,6 h): los glóbulos rojos podrían retenerla.',
      datos: [
        { t: 'El aclaramiento renal es unas 3,5 veces mayor que el de creatinina: la secreción tubular es la vía principal de eliminación.', ref: rengR(`${RENG_PK} › Elimination`, 'tubular secretion is the major route of metformin elimination') },
        { t: 'Alrededor del 90 % del fármaco absorbido se elimina por vía renal en 24 horas, con una semivida plasmática de unas 6,2 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 90% of the absorbed drug is eliminated via the renal route within the first 24 hours') },
        { t: 'En la sangre la semivida es de unas 17,6 horas: la masa de eritrocitos podría ser un compartimento de distribución.', ref: rengR(`${RENG_PK} › Elimination`, 'In blood, the elimination half-life is approximately 17.6 hours') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (comprimido de 500 mg)', valor: '50-60', unidad: '%', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 50% to 60%') },
    { magnitud: 'comida', nombre: 'Efecto de la comida (850 mg): Cmax y AUC', valor: '−40 y −25', unidad: '%', condiciones: 'con comida frente a en ayunas; Tmax 35 min más tarde', ref: rengR(`${RENG_PK} › Absorption`, 'approximately a 40% lower mean peak plasma concentration') },
    { magnitud: 'vd', nombre: 'Volumen aparente de distribución (850 mg)', valor: '654 ± 358', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'averaged 654 ± 358 L') },
    { magnitud: 'orina', nombre: 'Lo absorbido eliminado por la orina en 24 h', valor: '≈ 90', unidad: '%', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 90% of the absorbed drug is eliminated via the renal route') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática', valor: '≈ 6,2', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'plasma elimination half-life of approximately 6.2 hours') },
    { magnitud: 'semivida', nombre: 'Semivida en sangre total', valor: '≈ 17,6', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'the elimination half-life is approximately 17.6 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '2387a618-24d8-4813-aa83-9114edb35374', 'Metformin hydrochloride tablet (Granules Pharmaceuticals Inc.)', 'Metformin Hydrochloride Tablets USP (Granules Pharmaceuticals Inc.)', '7', '2026-06-18', '2026-11-09'), rengPubchem(4091, 'Metformin', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
