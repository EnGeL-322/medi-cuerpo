import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-actos'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'pioglitazona',
    nombre: 'Pioglitazona',
    clase: 'Antidiabético: tiazolidinadiona (agonista de PPARγ)',
    sinonimos: ['pioglitazone', 'Actos'],
    formula: 'C19H20N2O3S',
    masaMolar: 356.4,
    smiles: 'CCC1=CN=C(C=C1)CCOC2=CC=C(C=C2)CC3C(=O)NC(=O)S3',
    inchikey: 'HYAFETHFCAUJAY-UHFFFAOYSA-N',
    cid: 4829,
    estereo: { descripcion: 'Un carbono asimétrico; se usa la mezcla racémica. Los dos enantiómeros se interconvierten en el cuerpo y tienen la misma actividad.' },
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'pioglitazona-actos',
      producto: 'ACTOS (pioglitazone) comprimidos de 15, 30 y 45 mg',
      titular: 'Takeda Pharmaceuticals America, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '15, 30 y 45 mg de pioglitazona (como base) por comprimido',
      sal: { nombre: 'Hidrocloruro de pioglitazona', ref: rengR('11 DESCRIPTION', 'Pioglitazone hydrochloride is an odorless white crystalline powder') },
      excipientes: ['lactose monohydrate', 'hydroxypropylcellulose', 'carboxymethylcellulose calcium', 'magnesium stearate'],
      usos: { t: 'Junto con dieta y ejercicio, mejorar el control de la glucosa en adultos con diabetes tipo 2. Solo actúa si hay insulina propia: no sirve para la diabetes tipo 1.', ref: rengR('1 INDICATIONS AND USAGE', 'ACTOS is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con hidrocloruro de pioglitazona (la sal del activo racémico), lactosa e hidroxipropilcelulosa.',
    usos: 'Diabetes tipo 2, según su etiqueta.',
    actua: 'Activa el receptor nuclear PPARγ del tejido adiposo, el músculo y el hígado: reduce la resistencia a la insulina, así que los tejidos captan más glucosa y el hígado libera menos.',
    recorrido: 'Se absorbe con máximo antes de 2 horas, va casi toda unida a la albúmina, se transforma en metabolitos activos (M-III y M-IV) de vida larga y se elimina sobre todo como metabolitos, probablemente por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el hidrocloruro de pioglitazona, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El hidrocloruro de pioglitazona es prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'practically insoluble in water, and insoluble in ether') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la pioglitazona liberada.',
      ocurre: 'El máximo en sangre llega antes de 2 horas; con comida, a las 3-4 horas, sin que cambie la cantidad absorbida.',
      sigue: 'Pasa a la sangre.',
      datos: [{ t: 'El Tmax es inferior a 2 horas; la comida lo retrasa a 3-4 horas sin cambiar el AUC.', ref: rengR(`${RENG_PK} › Absorption`, 'Following oral administration of pioglitazone, T max of pioglitazone was within two hours') }],
      sinDatos: ['Biodisponibilidad absoluta', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejido-adiposo', 'musculos', 'higado'],
      llega: 'La pioglitazona circula por la sangre.',
      ocurre: 'Más del 99 % va unida a la albúmina; su volumen aparente es de 0,63 L/kg. Activa el receptor PPARγ del núcleo de las células del tejido adiposo, el músculo y el hígado, que regula genes del metabolismo de la glucosa y las grasas.',
      sigue: 'Se transforma en metabolitos activos.',
      simultaneo: 'Sus metabolitos activos M-III y M-IV alcanzan concentraciones iguales o mayores que la pioglitazona y prolongan el efecto.',
      datos: [
        { t: 'El volumen aparente medio tras una dosis es de 0,63 ± 0,41 L/kg.', ref: rengR(`${RENG_PK} › Distribution`, 'The mean apparent volume of distribution (Vd/F) of pioglitazone following single-dose administration is 0.63 ± 0.41') },
        { t: 'Se une en más del 99 % a proteínas séricas, sobre todo albúmina; M-III y M-IV, en más del 98 %.', ref: rengR(`${RENG_PK} › Distribution`, 'Pioglitazone is extensively protein bound (>99%) in human serum, principally to serum albumin') }
      ],
      accion: {
        diana: 'Receptor nuclear PPARγ (receptor activado por proliferadores de peroxisomas gamma)',
        efecto: 'Reduce la resistencia a la insulina en la periferia y el hígado: más captación de glucosa y menos producción hepática. No estimula la secreción de insulina.',
        lugar: ['tejido-adiposo', 'musculos', 'higado'],
        datos: [
          { t: 'Disminuye la resistencia a la insulina en la periferia y en el hígado, aumentando el uso de glucosa dependiente de insulina y reduciendo su salida del hígado; no estimula la secreción de insulina.', ref: rengR('12.1 Mechanism of Action', 'ACTOS decreases insulin resistance in the periphery and in the liver') },
          { t: 'Es agonista de PPARγ, presente en tejido adiposo, músculo esquelético e hígado; su activación modula genes que responden a la insulina.', ref: rengR('12.1 Mechanism of Action', 'PPAR receptors are found in tissues important for insulin action such as adipose tissue, skeletal muscle, and liver') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La pioglitazona llega a los citocromos que la transforman.',
      ocurre: 'Se metaboliza ampliamente por hidroxilación y oxidación, sobre todo por el CYP2C8 y menos por el CYP3A4. Los metabolitos activos M-III (ceto) y M-IV (hidroxi) circulan a niveles iguales o mayores que la pioglitazona; parte se conjuga con glucurónido o sulfato.',
      sigue: 'Los metabolitos se eliminan por la bilis y la orina.',
      datos: [
        { t: 'Se metaboliza ampliamente por hidroxilación y oxidación; M-III y M-IV son los principales metabolitos activos circulantes.', ref: rengR(`${RENG_PK} › Metabolism`, 'Pioglitazone is extensively metabolized by hydroxylation and oxidation') },
        { t: 'In vitro intervienen varios CYP, sobre todo CYP2C8 y, en menor grado, CYP3A4; un estudio con gemfibrozilo confirmó que es sustrato del CYP2C8.', ref: rengR(`${RENG_PK} › Metabolism`, 'which include CYP2C8 and, to a lesser degree, CYP3A4') }
      ],
      sinDatos: ['Órgano principal del metabolismo'],
      metabolitos: [
        { nombre: 'M-III (cetoderivado)', nombreFuente: 'M-III (keto derivative of pioglitazone)', actividad: 'activo', nota: 'Semivida de 16-24 horas, como M-IV.', ref: rengR(RENG_PK, 'M-III (keto derivative of pioglitazone)') },
        { nombre: 'M-IV (hidroxiderivado)', nombreFuente: 'M-IV (hydroxyl derivative of pioglitazone)', actividad: 'activo', ref: rengR(RENG_PK, 'M-IV (hydroxyl derivative of pioglitazone)') },
        { nombre: 'Conjugados glucurónido y sulfato', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'the metabolites also partly convert to glucuronide or sulfate conjugates') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y, se supone, a la bilis.',
      ocurre: 'Un 15-30 % de la dosis aparece en la orina, casi todo como metabolitos y conjugados. Se supone que la mayor parte se excreta por la bilis, sin cambios o como metabolitos, y sale en las heces. La semivida es de 3-7 horas para la pioglitazona y de 16-24 horas para sus metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 15-30 % de la dosis se recupera en la orina; la eliminación renal de pioglitazona sin cambios es despreciable.', ref: rengR(`${RENG_PK} › Excretion and Elimination`, 'approximately 15% to 30% of the pioglitazone dose is recovered in the urine') },
        { t: 'Se supone que la mayor parte se excreta por la bilis, sin cambios o como metabolitos, y se elimina en las heces.', ref: rengR(`${RENG_PK} › Excretion and Elimination`, 'It is presumed that most of the oral dose is excreted into the bile either unchanged or as metabolites and eliminated in the feces') },
        { t: 'Semivida de 3-7 horas para la pioglitazona y de 16-24 horas para M-III y M-IV.', ref: rengR(`${RENG_PK} › Excretion and Elimination`, 'range from three to seven hours and 16 to 24 hours, respectively') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '< 2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'T max of pioglitazone was within two hours') },
    { magnitud: 'vd', nombre: 'Volumen aparente de distribución', valor: '0,63 ± 0,41', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, '0.63 ± 0.41 (mean ± SD) L/kg') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'extensively protein bound (>99%)') },
    { magnitud: 'semivida', nombre: 'Semivida (pioglitazona)', valor: '3-7', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion and Elimination`, 'range from three to seven hours') },
    { magnitud: 'semivida', nombre: 'Semivida (M-III y M-IV)', valor: '16-24', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion and Elimination`, '16 to 24 hours, respectively') },
    { magnitud: 'orina', nombre: 'Recuperado en la orina', valor: '15-30', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion and Elimination`, 'approximately 15% to 30% of the pioglitazone dose is recovered in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'd2ddc491-88a9-4063-9150-443b4fa4330c', 'ACTOS (pioglitazone) tablet', 'ACTOS (Takeda Pharmaceuticals America, Inc.)', '20', '2025-04-09', '2026-11-10'), rengPubchem(4829, 'Pioglitazone', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
