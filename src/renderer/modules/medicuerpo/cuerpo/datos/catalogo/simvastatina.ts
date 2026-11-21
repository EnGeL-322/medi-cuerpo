import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zocor'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'simvastatina',
    nombre: 'Simvastatina',
    clase: 'Hipolipemiante: estatina (profármaco inhibidor de la HMG-CoA reductasa)',
    sinonimos: ['simvastatin', 'Zocor'],
    formula: 'C25H38O5',
    masaMolar: 418.6,
    smiles: 'CCC(C)(C)C(=O)O[C@H]1C[C@H](C=C2[C@H]1[C@H]([C@H](C=C2)C)CC[C@@H]3C[C@H](CC(=O)O3)O)C',
    inchikey: 'RYMZZMVNJRMUDD-HGQWONQESA-N',
    cid: 54454,
    estereo: { descripcion: 'Siete estereocentros definidos: es un solo estereoisómero, obtenido de un producto de fermentación.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'simvastatina-zocor',
      producto: 'ZOCOR (simvastatin) comprimidos recubiertos de 10, 20 y 40 mg',
      titular: 'Organon LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10, 20 y 40 mg de simvastatina por comprimido',
      excipientes: ['ascorbic acid', 'citric acid', 'hydroxypropyl cellulose', 'hypromellose', 'iron oxides', 'lactose', 'magnesium stearate', 'microcrystalline cellulose', 'starch', 'talc', 'titanium dioxide', 'butylated hydroxyanisole (conservante)'],
      usos: { t: 'Reducir el riesgo de muerte y de eventos coronarios y cerebrovasculares en adultos de alto riesgo y, junto con la dieta, bajar el colesterol LDL en adultos y en niños desde 10 años con hipercolesterolemia familiar.', ref: rengR('1 INDICATIONS AND USAGE', 'As an adjunct to diet to reduce low-density lipoprotein cholesterol (LDL-C)') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con simvastatina (una lactona, sin sal), lactosa, almidón y antioxidantes.',
    usos: 'Bajar el colesterol LDL y el riesgo cardiovascular, según su etiqueta.',
    actua: 'Es un profármaco: se convierte en ácido de simvastatina, que inhibe la HMG-CoA reductasa y frena la síntesis de colesterol en el hígado.',
    recorrido: 'El hígado retiene casi toda en el primer paso (a la circulación general llega menos del 5 %), la activa y la metaboliza (CYP3A4); un 60 % sale por las heces y un 13 % por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la simvastatina, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La simvastatina es un polvo cristalino prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'is a white to off-white, nonhygroscopic, crystalline powder that is practically insoluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['vena-porta', 'higado'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la simvastatina liberada.',
      ocurre: 'Se absorbe y llega al hígado, que extrae la mayor parte en el primer paso: a la circulación general llega menos del 5 %. Allí es donde actúa. La radiactividad total alcanza su máximo a las 4 horas; los inhibidores activos, a las 1,3-2,4 horas. Una comida baja en grasa no cambia el perfil.',
      sigue: 'En el hígado se activa y se metaboliza.',
      simultaneo: 'El primer paso por el hígado es a la vez absorción, activación, metabolismo y llegada al lugar de acción.',
      datos: [
        { t: 'Por una extensa extracción de primer paso en el hígado, la disponibilidad en la circulación general es baja (menos del 5 %).', ref: rengR(`${RENG_PK} › Absorption`, 'Since simvastatin undergoes extensive first-pass extraction in the liver, the availability of simvastatin to the general circulation is low (<5%)') },
        { t: 'Tras una dosis marcada, la radiactividad total en plasma alcanzó su máximo a las 4 horas y bajó al 10 % a las 12.', ref: rengR(`${RENG_PK} › Absorption`, 'plasma concentrations of total radioactivity (simvastatin plus 14 C-metabolites) peaked at 4 hours') },
        { t: 'Con una comida baja en grasa, el perfil de inhibidores totales no cambió.', ref: rengR(`${RENG_PK} › Effect of Food`, 'The plasma profile of total inhibitors concentration was not affected when simvastatin was administered with low fat meal'), condiciones: 'con comida baja en grasa' }
      ],
      sinDatos: ['Fracción absorbida antes del primer paso']
    },
    distribucion: {
      organos: ['higado', 'sangre'],
      llega: 'La simvastatina y su forma ácida activa están sobre todo en el hígado; poca cantidad circula.',
      ocurre: 'En la sangre, un 95 % va unido a proteínas. En el hígado, el ácido de simvastatina inhibe la HMG-CoA reductasa, la enzima que limita la síntesis de colesterol; el hígado fabrica más receptores de LDL y retira más colesterol LDL de la sangre.',
      sigue: 'El CYP3A4 la metaboliza.',
      datos: [{ t: 'La simvastatina y su metabolito β-hidroxiácido se unen en un 95 % a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'Both simvastatin and its β-hydroxyacid metabolite are highly bound (approximately 95%) to human plasma proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'HMG-CoA reductasa (inhibida por el ácido de simvastatina y sus metabolitos)',
        efecto: 'Reduce la síntesis de colesterol en el hígado y aumenta la captación de LDL de la sangre.',
        lugar: ['higado'],
        datos: [
          { t: 'Es un profármaco que se hidroliza a su forma β-hidroxiácido activa; esta y sus metabolitos inhiben la HMG-CoA reductasa, que convierte HMG-CoA en mevalonato, precursor del colesterol.', ref: rengR('12.1 Mechanism of Action', 'Simvastatin acid and its metabolites are inhibitors of HMG-CoA reductase, the rate-limiting enzyme that converts HMG-CoA to mevalonate') },
          { t: 'La inhibición acelera la expresión de receptores de LDL y la captación de colesterol LDL de la sangre hacia el hígado.', ref: rengR('12.2 Pharmacodynamics', 'accelerates the expression of LDL-receptors, followed by the uptake of LDL-C from blood to the liver') },
          { t: 'La inhibición mantenida de la síntesis de colesterol en el hígado también baja las lipoproteínas de muy baja densidad.', ref: rengR('12.2 Pharmacodynamics', 'Sustained inhibition of cholesterol synthesis in the liver also decreases levels of very-low-density lipoproteins') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La simvastatina está en el hígado.',
      ocurre: 'La lactona se hidroliza a la forma ácida activa. El CYP3A4 la metaboliza; los metabolitos activos principales son el ácido de simvastatina y sus derivados 6′-hidroxi, 6′-hidroximetil y 6′-exometileno. Los inhibidores del CYP3A4 (o el zumo de pomelo) pueden aumentar mucho su exposición.',
      sigue: 'Los metabolitos se eliminan sobre todo por las heces.',
      datos: [
        { t: 'Es una lactona que se hidroliza fácilmente en el cuerpo al β-hidroxiácido correspondiente.', ref: rengR(RENG_PK, 'Simvastatin is a lactone that is readily hydrolyzed in vivo to the corresponding β-hydroxyacid') },
        { t: 'La metaboliza el CYP3A4; los metabolitos activos principales son el ácido de simvastatina y sus derivados 6′-hidroxi, 6′-hidroximetil y 6′-exometileno.', ref: rengR(`${RENG_PK} › Metabolism`, 'Simvastatin is metabolized by CYP3A4') },
        { t: 'El ácido de simvastatina es sustrato del transportador OATP1B1; inhibir ese transportador o el CYP3A4 puede aumentar su exposición.', ref: rengR(`${RENG_PK} › Drug Interaction Studies`, 'Simvastatin acid is a substrate of the transport protein OATP1B1') }
      ],
      metabolitos: [
        { nombre: 'Ácido de simvastatina (β-hidroxiácido)', nombreFuente: 'simvastatin acid', actividad: 'activo', smiles: 'CCC(C)(C)C(=O)O[C@H]1C[C@H](C=C2[C@H]1[C@H]([C@H](C=C2)C)CC[C@H](C[C@H](CC(=O)O)O)O)C', cid: 64718, ref: rengR('12.1 Mechanism of Action', 'is hydrolyzed to its active β-hydroxyacid form, simvastatin acid, after administration') },
        { nombre: 'Derivados 6′-hidroxi, 6′-hidroximetil y 6′-exometileno', actividad: 'activo', ref: rengR(`${RENG_PK} › Metabolism`, 'simvastatin acid and its 6′-hydroxy, 6′-hydroxymethyl, and 6′-exomethylene derivatives') }
      ]
    },
    excrecion: {
      organos: ['heces', 'rinones', 'orina'],
      llega: 'Los metabolitos llegan al intestino y a los riñones.',
      ocurre: 'Tras una dosis marcada, un 60 % salió por las heces y un 13 % por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Tras una dosis oral marcada, un 13 % se excretó en la orina y un 60 % en las heces.', ref: rengR(`${RENG_PK} › Excretion`, '13% of the dose was excreted in urine and 60% in feces') }],
      sinDatos: ['Semivida', 'Vía por la que llega a las heces'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Disponibilidad en la circulación general', valor: '< 5', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'the availability of simvastatin to the general circulation is low (<5%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo de inhibidores activos', valor: '1,3-2,4', unidad: 'h', ref: rengR(`${RENG_PK} › Metabolism`, 'Peak plasma concentrations of both active and total inhibitors were attained within 1.3 to 2.4 hours postdose') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 95', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'highly bound (approximately 95%) to human plasma proteins') },
    { magnitud: 'heces', nombre: 'Dosis marcada en las heces', valor: '60', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, '60% in feces') },
    { magnitud: 'orina', nombre: 'Dosis marcada en la orina', valor: '13', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, '13% of the dose was excreted in urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '8f55d5de-5a4f-4a39-8c84-c53976dd6af9', 'ZOCOR (simvastatin) tablet, film coated', 'ZOCOR (Organon LLC)', '11', '2025-04-03', '2026-11-10'), rengPubchem(54454, 'Simvastatin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
