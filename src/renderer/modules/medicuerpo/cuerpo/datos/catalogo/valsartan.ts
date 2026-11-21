import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-diovan'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'valsartan',
    nombre: 'Valsartán',
    clase: 'Antagonista del receptor AT1 de la angiotensina II (ARA-II)',
    sinonimos: ['valsartan', 'Diovan'],
    formula: 'C24H29N5O3',
    masaMolar: 435.5,
    smiles: 'CCCCC(=O)N(CC1=CC=C(C=C1)C2=CC=CC=C2C3=NNN=N3)[C@@H](C(C)C)C(=O)O',
    inchikey: 'ACWBQPMHZXGDFX-QFIPXVFZSA-N',
    cid: 60846,
    estereo: { descripcion: 'Un estereocentro, el de la L-valina: es un solo enantiómero, (S).' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'valsartan-diovan',
      producto: 'DIOVAN (valsartan) comprimidos de 40, 80, 160 y 320 mg',
      titular: 'Novartis Pharmaceuticals Corporation',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40, 80, 160 y 320 mg de valsartán por comprimido',
      excipientes: ['colloidal silicon dioxide', 'crospovidone', 'hydroxypropyl methylcellulose', 'iron oxides (yellow, black y/o red)', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol 8000', 'titanium dioxide'],
      usos: { t: 'Hipertensión (adultos y niños desde 1 año), insuficiencia cardiaca de clase II-IV y reducción de la mortalidad tras un infarto con disfunción del ventrículo izquierdo.', ref: rengR('1 INDICATIONS AND USAGE', 'Hypertension , to lower blood pressure in adults and children 1 year and older') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de valsartán (sin sal) con celulosa, crospovidona y óxidos de hierro como colorantes.',
    usos: 'Hipertensión, insuficiencia cardiaca y tras un infarto, según su etiqueta.',
    actua: 'Bloquea el receptor AT1 de la angiotensina II en el músculo liso de los vasos y en la glándula suprarrenal: los vasos se contraen menos y se libera menos aldosterona.',
    recorrido: 'Se absorbe poco (25 %), va casi todo unido a la albúmina, apenas se metaboliza y sale sobre todo sin cambios por las heces (83 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el valsartán, poco soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El valsartán es soluble en etanol y metanol y poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is soluble in ethanol and methanol and slightly soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el valsartán liberado.',
      ocurre: 'Solo se absorbe una cuarta parte (biodisponibilidad del 25 %, entre 10 y 35 %). El máximo en el plasma llega a las 2-4 horas. La comida reduce la exposición un 40 %, pero puede tomarse con o sin comida.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'En voluntarios sanos, el máximo en plasma se alcanza 2-4 horas después de la toma.', ref: rengR(`${RENG_PK} › Absorption`, 'valsartan peak plasma concentration is reached 2 to 4 hours after dosing'), poblacion: 'voluntarios sanos' },
        { t: 'La biodisponibilidad absoluta es de un 25 % (10-35 %).', ref: rengR(`${RENG_PK} › Absorption`, 'Absolute bioavailability for Diovan is about 25% (range 10% to 35%)') },
        { t: 'Con el comprimido, la comida reduce el AUC un 40 % y la Cmax un 50 %.', ref: rengR(`${RENG_PK} › Effect of Food`, 'food decreases the exposure (as measured by AUC) to valsartan by about 40%'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'vasos'],
      llega: 'El valsartán circula por la sangre.',
      ocurre: 'Un 95 % va unido a proteínas (sobre todo albúmina) y apenas pasa a los tejidos (volumen de 17 L). Bloquea el receptor AT1 de la angiotensina II en el músculo liso de los vasos y en la glándula suprarrenal: impide la vasoconstricción y la secreción de aldosterona.',
      sigue: 'Una pequeña parte se metaboliza; la mayoría se elimina sin cambios.',
      datos: [
        { t: 'Su volumen de distribución en estado estacionario es pequeño (17 L): no se distribuye mucho por los tejidos.', ref: rengR(`${RENG_PK} › Distribution`, 'indicating that valsartan does not distribute into tissues extensively') },
        { t: 'Se une en un 95 % a proteínas séricas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'Valsartan is highly bound to serum proteins (95%), mainly serum albumin') }
      ],
      accion: {
        diana: 'Receptor AT1 de la angiotensina II',
        efecto: 'Bloquea la vasoconstricción y la secreción de aldosterona causadas por la angiotensina II; baja la presión arterial.',
        lugar: ['vasos'],
        datos: [{ t: 'Bloquea la unión de la angiotensina II al receptor AT1 en tejidos como el músculo liso vascular y la glándula suprarrenal, y así sus efectos vasoconstrictor y de secreción de aldosterona.', ref: rengR('12.1 Mechanism of Action', 'by selectively blocking the binding of angiotensin II to the AT 1 receptor in many tissues, such as vascular smooth muscle and the adrenal gland') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una pequeña parte del valsartán llega a las enzimas que lo transforman.',
      ocurre: 'Se metaboliza poco. El metabolito principal, el valeril-4-hidroxi-valsartán (un 9 % de la dosis), lo forma el CYP2C9 según estudios in vitro.',
      sigue: 'El valsartán, casi todo sin cambios, se elimina.',
      datos: [{ t: 'El metabolito principal, un 9 % de la dosis, es el valeril-4-hidroxi-valsartán; in vitro lo forma el CYP2C9.', ref: rengR(`${RENG_PK} › Metabolism`, 'The primary metabolite, accounting for about 9% of dose, is valeryl 4-hydroxy valsartan') }],
      sinDatos: ['Órgano del metabolismo', 'Actividad del metabolito'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [{ nombre: 'Valeril-4-hidroxi-valsartán', nombreFuente: 'valeryl 4-hydroxy valsartan', actividad: 'desconocida', nota: 'Un 9 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism`, 'the CYP 2C9 isoenzyme is responsible for the formation of valeryl-4-hydroxy valsartan') }]
    },
    excrecion: {
      organos: ['higado', 'heces', 'rinones', 'orina'],
      llega: 'El valsartán llega al hígado y a los riñones.',
      ocurre: 'Tomado en solución, un 83 % se recupera en las heces y un 13 % en la orina, sobre todo sin cambios. En el hígado lo captan y lo expulsan transportadores (OATP1B1 y MRP2, según un estudio in vitro). Los riñones aportan un 30 % de su aclaramiento. Su semivida es de unas 6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tomado como solución oral, se recupera sobre todo en las heces (83 %) y en la orina (13 %), principalmente sin cambios.', ref: rengR(`${RENG_PK} › Excretion`, 'is primarily recovered in feces (about 83% of dose) and urine (about 13% of dose)') },
        { t: 'Un estudio in vitro con tejido hepático humano indica que es sustrato del transportador de captación OATP1B1 y del de expulsión MRP2.', ref: rengR(`${RENG_PK} › Transporters`, 'valsartan is a substrate of the hepatic uptake transporter OATP1B1 and the hepatic efflux transporter MRP2') },
        { t: 'Tras dosis intravenosa, el aclaramiento renal es un 30 % del total; la semivida media es de unas 6 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'its renal clearance is 0.62 L/h (about 30% of total clearance)') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 25 (10-35)', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is about 25% (range 10% to 35%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '2-4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'is reached 2 to 4 hours after dosing') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (IV)', valor: '17', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'after intravenous administration is small (17 L)') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '95', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'highly bound to serum proteins (95%)') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación (IV)', valor: '≈ 6', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'with an average elimination half-life of about 6 hours') },
    { magnitud: 'heces', nombre: 'Recuperado en las heces (solución oral)', valor: '≈ 83', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'about 83% of dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '5ddba454-f3e6-43c2-a7a6-58365d297213', 'DIOVAN (valsartan) tablet', 'DIOVAN (Novartis Pharmaceuticals Corporation)', '32', '2026-08-13', '2026-11-10'), rengPubchem(60846, 'Valsartan', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
