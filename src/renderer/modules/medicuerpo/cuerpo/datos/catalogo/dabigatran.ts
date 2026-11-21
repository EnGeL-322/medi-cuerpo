import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-pradaxa'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'dabigatran',
    nombre: 'Dabigatrán etexilato',
    clase: 'Anticoagulante oral (profármaco de un inhibidor directo de la trombina)',
    sinonimos: ['dabigatran', 'dabigatran etexilate', 'dabigatrán', 'Pradaxa'],
    formula: 'C34H41N7O5',
    masaMolar: 627.7,
    smiles: 'CCCCCCOC(=O)NC(=N)C1=CC=C(C=C1)NCC2=NC3=C(N2C)C=CC(=C3)C(=O)N(CCC(=O)OCC)C4=CC=CC=N4',
    inchikey: 'KSGXQBZTULBEEQ-UHFFFAOYSA-N',
    cid: 135565674,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'dabigatran-pradaxa-capsulas',
      producto: 'PRADAXA (dabigatran etexilate) cápsulas de 75, 110 y 150 mg',
      titular: 'Boehringer Ingelheim Pharmaceuticals, Inc.',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura (con gránulos dentro)',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '75, 110 y 150 mg de dabigatrán etexilato (86,48, 126,83 y 172,95 mg de mesilato) por cápsula',
      sal: { nombre: 'Mesilato de dabigatrán etexilato', ref: rengR('11 DESCRIPTION', 'Each capsule contains dabigatran etexilate mesylate as the active ingredient') },
      excipientes: ['acacia', 'dimethicone', 'hydroxypropyl cellulose', 'hypromellose', 'talc', 'tartaric acid', 'cápsula: carrageenan, FD&C Blue No. 2, hypromellose y otros'],
      usos: { t: 'Reducir el riesgo de ictus y embolia en la fibrilación auricular no valvular; tratar y prevenir la recurrencia de la trombosis venosa profunda y la embolia pulmonar; y prevenirlas tras una prótesis de cadera.', ref: rengR('1 INDICATIONS AND USAGE', 'To reduce the risk of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation') },
      fuente: RENG_F,
      advertencias: [{ titulo: 'No abrir la cápsula', texto: 'Sin la cubierta de la cápsula, la biodisponibilidad aumenta un 75 %; por eso las cápsulas no deben romperse, masticarse ni abrirse.', organos: ['estomago'], ref: rengR(`${RENG_PK} › Absorption`, 'PRADAXA Capsules should therefore not be broken, chewed, or opened before administration') }]
    }
  ],
  resumen: {
    contiene: 'Cápsula con gránulos de mesilato de dabigatrán etexilato (un profármaco en forma de sal) y ácido tartárico.',
    usos: 'Prevenir y tratar trombos y embolias, según su etiqueta.',
    actua: 'El dabigatrán etexilato no es activo: unas esterasas lo convierten en dabigatrán, que inhibe directamente la trombina libre y la unida al coágulo.',
    recorrido: 'Se absorbe muy poco (3-7 %), se activa por hidrólisis, se une poco a proteínas y la parte absorbida sale sobre todo por la orina; lo no absorbido, por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'Se abre y deja los gránulos de mesilato de dabigatrán etexilato (solubilidad en agua de 1,8 mg/mL). La cubierta importa: sin ella, la biodisponibilidad sube un 75 %.',
      sigue: 'Pasa al intestino.',
      datos: [
        { t: 'Una solución saturada en agua pura tiene una solubilidad de 1,8 mg/mL.', ref: rengR('11 DESCRIPTION', 'A saturated solution in pure water has a solubility of 1.8 mg/mL') },
        { t: 'Tomar los gránulos sin la cubierta de la cápsula aumenta la biodisponibilidad un 75 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The oral bioavailability of dabigatran etexilate increases by 75% when the pellets are taken without the capsule shell compared to the intact capsule formulation') }
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el dabigatrán etexilato.',
      ocurre: 'Se absorbe como éster, pero muy poco: la biodisponibilidad del dabigatrán es solo del 3-7 %. El transportador P-gp lo devuelve a la luz intestinal. El máximo llega a la hora en ayunas; una comida grasa lo retrasa 2 horas sin cambiar la cantidad.',
      sigue: 'El éster absorbido se hidroliza y forma dabigatrán.',
      datos: [
        { t: 'Se absorbe como éster dabigatrán etexilato, que luego se hidroliza a dabigatrán, la forma activa.', ref: rengR(RENG_PK, 'Dabigatran etexilate mesylate is absorbed as the dabigatran etexilate ester. The ester is then hydrolyzed, forming dabigatran, the active moiety') },
        { t: 'La biodisponibilidad absoluta del dabigatrán es de un 3-7 %; el etexilato es sustrato del transportador de expulsión P-gp.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of dabigatran following oral administration of dabigatran etexilate is approximately 3% to 7%') },
        { t: 'En ayunas, la Cmax llega a la hora; una comida grasa la retrasa unas 2 horas sin cambiar la biodisponibilidad.', ref: rengR(`${RENG_PK} › Absorption`, 'Coadministration of PRADAXA with a high-fat meal delays the time to C max by approximately 2 hours but has no effect on the bioavailability of dabigatran') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'El dabigatrán circula por la sangre.',
      ocurre: 'Solo un 35 % va unido a proteínas; su volumen es de 50-70 L. En la sangre, el dabigatrán y sus glucurónidos inhiben la trombina libre y la unida al coágulo, que convierte el fibrinógeno en fibrina; así se evita que crezca el trombo.',
      sigue: 'Parte se conjuga; casi todo va a los riñones.',
      datos: [{ t: 'Un 35 % se une a proteínas plasmáticas; el volumen de distribución es de 50 a 70 L.', ref: rengR(`${RENG_PK} › Distribution`, 'Dabigatran is approximately 35% bound to human plasma proteins') }],
      accion: {
        diana: 'Trombina (libre y unida al coágulo)',
        efecto: 'Anticoagulante: impide la conversión de fibrinógeno en fibrina y la agregación de plaquetas inducida por trombina.',
        lugar: ['sangre'],
        datos: [{ t: 'El dabigatrán y sus acilglucurónidos son inhibidores directos y competitivos de la trombina, que convierte el fibrinógeno en fibrina; inhiben la trombina libre, la unida al coágulo y la agregación plaquetaria que induce.', ref: rengR('12.1 Mechanism of Action', 'Dabigatran and its acyl glucuronides are competitive, direct thrombin inhibitors') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El éster absorbido llega a las esterasas.',
      ocurre: 'La reacción principal es la hidrólisis por esterasas, que corta el éster y forma el dabigatrán activo. Después, una parte se conjuga en cuatro acilglucurónidos, también activos. No intervienen los citocromos P450.',
      sigue: 'El dabigatrán y sus glucurónidos van a los riñones.',
      simultaneo: 'La activación por hidrólisis empieza ya durante la absorción.',
      datos: [
        { t: 'La reacción metabólica predominante es la hidrólisis del etexilato por esterasas a dabigatrán; el dabigatrán no es sustrato, inhibidor ni inductor de los CYP450.', ref: rengR(`${RENG_PK} › Metabolism`, 'The cleavage of the dabigatran etexilate by esterase-catalyzed hydrolysis to the active principal dabigatran is the predominant metabolic reaction') },
        { t: 'Se conjuga en cuatro acilglucurónidos isómeros, farmacológicamente activos, cada uno con menos del 10 % del dabigatrán total en plasma.', ref: rengR(`${RENG_PK} › Metabolism`, 'Dabigatran is subject to conjugation, forming pharmacologically active acyl glucuronides') }
      ],
      sinDatos: ['Órgano donde ocurre la hidrólisis'],
      metabolitos: [
        { nombre: 'Dabigatrán', nombreFuente: 'dabigatran', actividad: 'activo', nota: 'Forma activa liberada por hidrólisis del éster.', smiles: 'CN1C2=C(C=C(C=C2)C(=O)N(CCC(=O)O)C3=CC=CC=N3)N=C1CNC4=CC=C(C=C4)C(=N)N', cid: 216210, ref: rengR(`${RENG_PK} › Metabolism`, 'to the active principal dabigatran is the predominant metabolic reaction') },
        { nombre: 'Acilglucurónidos 1-O, 2-O, 3-O y 4-O del dabigatrán', actividad: 'activo', ref: rengR(`${RENG_PK} › Metabolism`, 'Four positional isomers, 1-O, 2-O, 3-O, and 4-O-acylglucuronide exist') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El dabigatrán absorbido llega a los riñones; lo no absorbido sigue por el intestino.',
      ocurre: 'El dabigatrán que entra en la sangre sale sobre todo por la orina (el riñón aporta el 80 % del aclaramiento). Como se absorbe tan poco, de una dosis oral marcada un 86 % aparece en las heces y solo un 7 % en la orina. Su semivida es de 12-17 horas y se alarga si el riñón funciona peor.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina sobre todo por la orina: el aclaramiento renal es el 80 % del total tras una dosis intravenosa.', ref: rengR(`${RENG_PK} › Elimination`, 'Renal clearance of dabigatran is 80% of total clearance after intravenous administration') },
        { t: 'Tras dabigatrán marcado por vía oral, un 7 % de la radiactividad se recupera en la orina y un 86 % en las heces.', ref: rengR(`${RENG_PK} › Elimination`, 'After oral administration of radiolabeled dabigatran, 7% of radioactivity is recovered in urine and 86% in feces') },
        { t: 'La semivida en adultos sanos es de 12 a 17 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'The half-life of dabigatran in healthy adult subjects is 12 to 17 hours'), poblacion: 'adultos sanos' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta del dabigatrán', valor: '3-7', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 3% to 7%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '≈ 1', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'C max occurs at 1-hour post-administration in the fasted state') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 35', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 35% bound to human plasma proteins') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '50-70', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The volume of distribution of dabigatran is 50 to 70 L') },
    { magnitud: 'semivida', nombre: 'Semivida (adultos sanos)', valor: '12-17', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'is 12 to 17 hours') },
    { magnitud: 'heces', nombre: 'Radiactividad en las heces (dosis oral)', valor: '86', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'and 86% in feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'ba74e3cd-b06f-4145-b284-5fd6b84ff3c9', 'PRADAXA (dabigatran etexilate mesylate) capsule', 'PRADAXA (Boehringer Ingelheim Pharmaceuticals, Inc.)', '48', '2025-06-30', '2026-11-10'), rengPubchem(135565674, 'Dabigatran etexilate', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
