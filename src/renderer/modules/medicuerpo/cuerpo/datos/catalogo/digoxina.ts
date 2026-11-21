import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lanoxin'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'digoxina',
    nombre: 'Digoxina',
    clase: 'Glucósido cardiaco (digitálico)',
    sinonimos: ['digoxin', 'Lanoxin'],
    formula: 'C41H64O14',
    masaMolar: 780.9,
    smiles: 'C[C@@H]1[C@H]([C@H](C[C@@H](O1)O[C@@H]2[C@H](O[C@H](C[C@@H]2O)O[C@@H]3[C@H](O[C@H](C[C@@H]3O)O[C@H]4CC[C@]5([C@@H](C4)CC[C@@H]6[C@@H]5C[C@H]([C@]7([C@@]6(CC[C@@H]7C8=CC(=O)OC8)O)C)O)C)C)C)O)O',
    inchikey: 'LTMHDMANZUZIPE-PUGKRICDSA-N',
    cid: 2724385,
    estereo: { descripcion: 'Glucósido natural con muchos estereocentros definidos (esteroide más tres azúcares): es un solo estereoisómero.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'digoxina-lanoxin',
      producto: 'LANOXIN (digoxin) comprimidos de 62,5, 125 y 250 mcg',
      titular: 'ADVANZ PHARMA (US) Corp.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '62,5, 125 y 250 mcg de digoxina por comprimido',
      excipientes: ['corn starch', 'potato starch', 'lactose', 'magnesium stearate', 'colorantes según la concentración (D&C Yellow No. 10, FD&C Yellow No. 6)'],
      usos: { t: 'Insuficiencia cardiaca leve a moderada en adultos, aumentar la contracción del corazón en niños con insuficiencia cardiaca y controlar la frecuencia en reposo en la fibrilación auricular crónica.', ref: rengR('1 INDICATIONS AND USAGE', 'Treatment of mild to moderate heart failure in adults') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con microgramos de digoxina (sin sal), almidones de maíz y patata y lactosa.',
    usos: 'Insuficiencia cardiaca y control del ritmo en la fibrilación auricular, según su etiqueta.',
    actua: 'Inhibe la bomba de sodio y potasio (Na-K ATPasa): en el músculo cardiaco aumenta el calcio disponible y el corazón se contrae con más fuerza y late más despacio.',
    recorrido: 'Se absorbe un 60-80 %, se concentra en los tejidos (volumen de unos 500 L), apenas se metaboliza y sale sobre todo sin cambios por la orina; su semivida es de 1,5-2 días.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la digoxina, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La digoxina es prácticamente insoluble en agua y en éter.', ref: rengR('11 DESCRIPTION', 'The drug is practically insoluble in water and in ether') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['intestino-grueso'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la digoxina liberada.',
      ocurre: 'Se absorbe un 60-80 % y el máximo llega a las 1-3 horas; la comida lo enlentece sin cambiar la cantidad, salvo si es rica en fibra. La P-glicoproteína de la pared intestinal puede limitar su absorción. En 1 de cada 10 pacientes, las bacterias del colon degradan un 40 % o más de la dosis a productos inactivos.',
      sigue: 'La digoxina absorbida pasa a la sangre.',
      datos: [
        { t: 'Tras tomarla, el máximo en suero aparece a las 1-3 horas; la absorción de los comprimidos es del 60-80 % respecto a la vía intravenosa.', ref: rengR(`${RENG_PK} › Absorption`, 'Absorption of digoxin from LANOXIN Tablets has been demonstrated to be 60-80% complete compared to an identical intravenous dose of digoxin') },
        { t: 'Después de comer se absorbe más despacio pero en la misma cantidad; con comidas ricas en fibra de salvado puede absorberse menos.', ref: rengR(`${RENG_PK} › Absorption`, 'When taken with meals high in bran fiber, however, the amount absorbed from an oral dose may be reduced'), condiciones: 'con comida' },
        { t: 'Es sustrato de la P-glicoproteína, una proteína de expulsión de la membrana de los enterocitos que puede limitar su absorción.', ref: rengR(`${RENG_PK} › Absorption`, 'As an efflux protein on the apical membrane of enterocytes, P-glycoprotein may limit the absorption of digoxin') },
        { t: 'En 1 de cada 10 pacientes, las bacterias del colon degradan un 40 % o más de la dosis a productos de reducción inactivos, como la dihidrodigoxina.', ref: rengR(`${RENG_PK} › Absorption`, 'Data suggest that 1 in 10 patients treated with digoxin tablets, colonic bacteria will degrade 40% or more of the ingested dose') }
      ]
    },
    distribucion: {
      organos: ['sangre', 'corazon', 'musculos', 'tejidos', 'encefalo'],
      llega: 'La digoxina circula por la sangre.',
      ocurre: 'Durante 6-8 horas pasa a los tejidos, donde se concentra: su volumen aparente es de 475-500 L. Solo un 25 % va unido a proteínas. Atraviesa la barrera hematoencefálica y la placenta. En el músculo cardiaco inhibe la Na-K ATPasa, aumenta el calcio de las células y el corazón se contrae con más fuerza y más despacio.',
      sigue: 'Va casi sin transformar a los riñones.',
      datos: [
        { t: 'Hay una fase de distribución a los tejidos de 6-8 horas; con el uso crónico, las concentraciones en suero tras la distribución se equilibran con las de los tejidos.', ref: rengR(`${RENG_PK} › Distribution`, 'Following drug administration, a 6-8 hour tissue distribution phase is observed') },
        { t: 'Se concentra en los tejidos y tiene un volumen aparente grande (475-500 L); cruza la barrera hematoencefálica y la placenta. Un 25 % de la del plasma va unido a proteínas.', ref: rengR(`${RENG_PK} › Distribution`, 'Digoxin is concentrated in tissues and therefore has a large apparent volume of distribution (approximately 475-500 L)') },
        { t: 'Su espacio de distribución se relaciona mejor con el peso magro que con el peso total.', ref: rengR(`${RENG_PK} › Distribution`, 'its distribution space correlates best with lean (i.e., ideal) body weight, not total body weight') }
      ],
      accion: {
        diana: 'Na-K ATPasa («bomba de sodio»)',
        efecto: 'Aumenta la fuerza de contracción del corazón, enlentece la frecuencia y la conducción por el nodo AV y reduce la activación simpática.',
        lugar: ['corazon'],
        datos: [
          { t: 'Todas sus acciones se deben a su efecto sobre la Na-K ATPasa, la bomba que saca sodio y mete potasio en las células.', ref: rengR('12.1 Mechanism of Action', 'All of digoxin’s actions are mediated through its effects on Na-K ATPase') },
          { t: 'Al inhibirla, aumenta el calcio intracelular en el miocardio y el sistema de conducción: más inotropismo y automatismo y menor velocidad de conducción.', ref: rengR('12.1 Mechanism of Action', 'causes increased availability of intracellular calcium in the myocardium and conduction system') },
          { t: 'Resultado: contracción más fuerte, frecuencia más lenta, conducción más lenta por el nodo AV y menos activación del sistema simpático y del renina-angiotensina.', ref: rengR('12.1 Mechanism of Action', 'The cardiologic consequences of these direct and indirect effects are an increase in the force and velocity of myocardial systolic contraction') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una pequeña parte de la digoxina se transforma.',
      ocurre: 'Solo se metaboliza un 13 % de la dosis, por hidrólisis, oxidación y conjugación, sin intervención de los citocromos P450.',
      sigue: 'La digoxina y sus metabolitos van a los riñones.',
      datos: [{ t: 'Solo un 13 % se metaboliza en voluntarios sanos; los metabolitos urinarios se formarían por hidrólisis, oxidación y conjugación, sin depender del citocromo P450.', ref: rengR(`${RENG_PK} › Metabolism`, 'Only a small percentage (13%) of a dose of digoxin is metabolized in healthy volunteers') }],
      sinDatos: ['Órgano del metabolismo'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [
        { nombre: 'Dihidrodigoxina', nombreFuente: 'dihydrodigoxin', actividad: 'inactivo', nota: 'También la forman las bacterias del colon antes de la absorción.', ref: rengR(`${RENG_PK} › Absorption`, 'is converted to inactive reduction products (e.g., dihydrodigoxin) by colonic bacteria in the gut') },
        { nombre: 'Digoxigenina bisdigitoxósido y conjugados (glucurónidos y sulfatos)', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'which include dihydrodigoxin, digoxigenin bisdigitoxoside, and their glucuronide and sulfate conjugates') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La digoxina llega a los riñones.',
      ocurre: 'Tras una dosis intravenosa, un 50-70 % sale sin cambios por la orina, en proporción al aclaramiento de creatinina. Su semivida es de 1,5-2 días con riñones sanos y de 3,5-5 días sin función renal. La diálisis apenas la retira porque está en los tejidos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras una dosis intravenosa, un 50-70 % se excreta sin cambios en la orina; la excreción renal es proporcional al aclaramiento de creatinina.', ref: rengR(`${RENG_PK} › Excretion`, 'Following intravenous administration to healthy volunteers, 50-70% of a digoxin dose is excreted unchanged in the urine') },
        { t: 'Su semivida es de 1,5-2 días con función renal normal y de 3,5-5 días en pacientes anúricos.', ref: rengR(`${RENG_PK} › Excretion`, 'In healthy volunteers with normal renal function, digoxin has a half-life of 1.5-2 days'), poblacion: 'función renal normal' },
        { t: 'La diálisis no la elimina de forma eficaz porque casi toda está unida a tejidos fuera de los vasos.', ref: rengR(`${RENG_PK} › Excretion`, 'because most of the drug is bound to extravascular tissues') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (comprimidos)', valor: '60-80', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'has been demonstrated to be 60-80% complete') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-3', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'peak serum concentrations of digoxin occur at 1 to 3 hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '475-500', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, '(approximately 475-500 L)') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 25', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Approximately 25% of digoxin in the plasma is bound to protein') },
    { magnitud: 'semivida', nombre: 'Semivida (función renal normal)', valor: '1,5-2', unidad: 'días', ref: rengR(`${RENG_PK} › Excretion`, 'has a half-life of 1.5-2 days') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina (dosis IV)', valor: '50-70', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, '50-70% of a digoxin dose is excreted unchanged in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'd91e3646-4c63-4512-ab22-db39c085c4dc', 'LANOXIN (digoxin) tablet', 'LANOXIN (ADVANZ PHARMA (US) Corp.)', '12', '2025-01-09', '2026-11-10'), rengPubchem(2724385, 'Digoxin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
