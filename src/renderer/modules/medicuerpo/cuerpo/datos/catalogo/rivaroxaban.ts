import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-xarelto'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'rivaroxaban',
    nombre: 'Rivaroxabán',
    clase: 'Anticoagulante oral (inhibidor directo del factor Xa)',
    sinonimos: ['rivaroxaban', 'Xarelto'],
    formula: 'C19H18ClN3O5S',
    masaMolar: 435.9,
    smiles: 'C1COCC(=O)N1C2=CC=C(C=C2)N3C[C@@H](OC3=O)CNC(=O)C4=CC=C(S4)Cl',
    inchikey: 'KGFYHTZWPPHNLQ-AWEZNQCLSA-N',
    cid: 9875401,
    estereo: { descripcion: 'Un estereocentro: es el enantiómero (S) puro.' },
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'rivaroxaban-xarelto',
      producto: 'XARELTO (rivaroxaban) comprimidos recubiertos de 2,5, 10, 15 y 20 mg',
      titular: 'Janssen Pharmaceuticals, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2,5, 10, 15 y 20 mg de rivaroxabán por comprimido',
      excipientes: ['croscarmellose sodium', 'hypromellose', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'sodium lauryl sulfate', 'recubrimiento Opadry de color según la concentración (ferric oxide, hypromellose, polyethylene glycol 3350, titanium dioxide)'],
      usos: { t: 'Reducir el riesgo de ictus y embolia en la fibrilación auricular no valvular; tratar y prevenir la trombosis venosa profunda y la embolia pulmonar; y reducir eventos cardiovasculares graves en la enfermedad coronaria o arterial periférica, entre otros usos.', ref: rengR('1 INDICATIONS AND USAGE', 'to reduce risk of stroke and systemic embolism in nonvalvular atrial fibrillation') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye un granulado para suspensión oral; su absorción depende del lugar del tubo digestivo donde se libere.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de rivaroxabán (sin sal) con lactosa, celulosa, croscarmelosa y un recubrimiento de color.',
    usos: 'Prevenir y tratar trombos y embolias, según su etiqueta.',
    actua: 'Inhibe directamente el factor Xa de la coagulación en la sangre, de modo que se forma menos trombina.',
    recorrido: 'Se absorbe bien (80-100 % con dosis bajas; la de 20 mg, mejor con comida), va muy unido a la albúmina, se degrada en parte por CYP3A4/5 y CYP2J2 y sale por la orina (sin cambios y metabolitos) y las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el rivaroxabán, prácticamente insoluble en agua. Importa que se libere ya en el estómago: si se libera más abajo, se absorbe menos.',
      sigue: 'Pasa al intestino.',
      datos: [
        { t: 'El rivaroxabán es prácticamente insoluble en agua y en medios acuosos.', ref: rengR('11 DESCRIPTION', 'is practically insoluble in water and aqueous media') },
        { t: 'Liberado en el intestino delgado proximal, el AUC y la Cmax bajan un 29 % y un 56 % respecto al comprimido; más abajo baja aún más. Debe evitarse administrarlo más allá del estómago.', ref: rengR(`${RENG_PK} › Absorption`, 'Avoid administration of rivaroxaban distal to the stomach which can result in reduced absorption and related drug exposure') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: ['estomago', 'duodeno', 'intestino-delgado'],
      llega: 'Llega el rivaroxabán liberado.',
      ocurre: 'Con 2,5 y 10 mg se absorbe casi entero (80-100 %), con o sin comida. Con 20 mg en ayunas, solo un 66 %; con comida, el AUC sube un 39 %. El máximo en el plasma llega a las 2-4 horas. Los fármacos que cambian el pH del estómago no lo afectan.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta depende de la dosis: un 80-100 % con 2,5 y 10 mg, sin efecto de la comida.', ref: rengR(`${RENG_PK} › Absorption`, 'For the 2.5 mg and 10 mg dose, it is estimated to be 80% to 100% and is not affected by food') },
        { t: 'Con 20 mg en ayunas es de un 66 %; con comida, el AUC y la Cmax suben un 39 % y un 76 %.', ref: rengR(`${RENG_PK} › Absorption`, 'XARELTO 20 mg administered in the fasted state has an absolute bioavailability of approximately 66%'), condiciones: '20 mg en ayunas' },
        { t: 'La Cmax aparece 2-4 horas después de tomar el comprimido.', ref: rengR(`${RENG_PK} › Absorption`, 'appear 2 to 4 hours after tablet intake') }
      ]
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'El rivaroxabán circula por la sangre.',
      ocurre: 'Un 92-95 % va unido a proteínas (sobre todo albúmina); su volumen es de unos 50 L. En la sangre inhibe el factor Xa libre y la protrombinasa, sin necesitar antitrombina, y así se genera menos trombina.',
      sigue: 'Una parte se degrada; el resto va a los riñones sin cambios.',
      datos: [{ t: 'La unión a proteínas es del 92-95 %, sobre todo a la albúmina; el volumen de distribución en estado estacionario es de unos 50 L.', ref: rengR(`${RENG_PK} › Distribution`, 'Protein binding of rivaroxaban in human plasma is approximately 92% to 95%, with albumin being the main binding component') }],
      accion: {
        diana: 'Factor Xa de la coagulación (libre y en la protrombinasa)',
        efecto: 'Anticoagulante: disminuye la generación de trombina.',
        lugar: ['sangre'],
        datos: [{ t: 'Es un inhibidor selectivo del factor Xa que no necesita cofactor; inhibe el factor Xa libre y la actividad protrombinasa y así reduce la formación de trombina.', ref: rengR('12.1 Mechanism of Action', 'By inhibiting FXa, rivaroxaban decreases thrombin generation') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Parte del rivaroxabán llega a las enzimas que lo degradan.',
      ocurre: 'Alrededor de la mitad de la dosis se transforma en metabolitos inactivos, por degradación oxidativa (CYP3A4/5 y CYP2J2) e hidrólisis. En el plasma predomina el rivaroxabán sin cambios.',
      sigue: 'Metabolitos y rivaroxabán sin cambios van a la orina y a las heces.',
      datos: [
        { t: 'Un 51 % de una dosis marcada se recuperó como metabolitos inactivos en la orina (30 %) y las heces (21 %).', ref: rengR(`${RENG_PK} › Metabolism`, 'Approximately 51% of an orally administered [ 14 C]-rivaroxaban dose was recovered as inactive metabolites in urine (30%) and feces (21%)') },
        { t: 'La degradación oxidativa por CYP3A4/5 y CYP2J2 y la hidrólisis son las principales vías; en el plasma predomina el fármaco sin cambios.', ref: rengR(`${RENG_PK} › Metabolism`, 'Oxidative degradation catalyzed by CYP3A4/5 and CYP2J2 and hydrolysis are the major sites of biotransformation') }
      ],
      sinDatos: ['Órgano donde se metaboliza'],
      metabolitos: [{ nombre: 'Metabolitos de oxidación e hidrólisis', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'Unchanged rivaroxaban was the predominant moiety in plasma with no major or active circulating metabolites') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El rivaroxabán y sus metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Un tercio de la dosis (36 %) sale sin cambios por la orina, sobre todo por secreción activa en los túbulos renales, y un 7 % sin cambios por las heces. Su semivida es de 5-9 horas en adultos jóvenes y de 11-13 horas en mayores.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 36 % se recuperó como fármaco sin cambios en la orina y un 7 % en las heces.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately one-third (36%) was recovered as unchanged drug in the urine and 7% was recovered as unchanged drug in feces') },
        { t: 'En la orina se excreta sobre todo por secreción tubular activa y menos por filtración glomerular (5:1); es sustrato de los transportadores P-gp y ABCG2.', ref: rengR(`${RENG_PK} › Excretion`, 'mainly via active tubular secretion and to a lesser extent via glomerular filtration (approximate 5:1 ratio)') },
        { t: 'La semivida terminal es de 5-9 horas en sanos de 20 a 45 años y de 11-13 horas en mayores de 60 a 76.', ref: rengR(`${RENG_PK} › Excretion`, 'The terminal elimination half-life of rivaroxaban is 5 to 9 hours in healthy subjects aged 20 to 45 years'), poblacion: 'adultos sanos de 20 a 45 años' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad (2,5 y 10 mg)', valor: '80-100', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'it is estimated to be 80% to 100%') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad (20 mg, ayunas)', valor: '≈ 66', unidad: '%', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'has an absolute bioavailability of approximately 66%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '2-4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'appear 2 to 4 hours after tablet intake') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '92-95', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 92% to 95%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (estado estacionario)', valor: '≈ 50', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The steady-state volume of distribution in healthy subjects is approximately 50 L') },
    { magnitud: 'semivida', nombre: 'Semivida terminal (20-45 años)', valor: '5-9', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'is 5 to 9 hours in healthy subjects aged 20 to 45 years') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina', valor: '36', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'approximately one-third (36%) was recovered as unchanged drug in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '10db92f9-2300-4a80-836b-673e1ae91610', 'XARELTO (rivaroxaban) tablet, film coated; kit; granule, for suspension', 'XARELTO (Janssen Pharmaceuticals, Inc.)', '65', '2026-09-11', '2026-11-10'), rengPubchem(9875401, 'Rivaroxaban', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
