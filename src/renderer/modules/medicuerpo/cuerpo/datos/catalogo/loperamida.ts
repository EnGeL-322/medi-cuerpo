import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-loperamida-bionpharma'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = 'CLINICAL PHARMACOLOGY › Pharmacokinetics'

export default {
  activo: {
    id: 'loperamida',
    nombre: 'Loperamida',
    clase: 'Antidiarreico (agonista opioide de acción intestinal)',
    sinonimos: ['loperamide', 'loperamide hydrochloride'],
    formula: 'C29H33ClN2O2',
    masaMolar: 477.0,
    smiles: 'CN(C)C(=O)C(CCN1CCC(CC1)(C2=CC=C(C=C2)Cl)O)(C3=CC=CC=C3)C4=CC=CC=C4',
    inchikey: 'RDOIQAHITMMDAJ-UHFFFAOYSA-N',
    cid: 3955,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'loperamida-bionpharma',
      producto: 'Loperamide hydrochloride cápsulas de 2 mg (genérico con receta)',
      titular: 'Bionpharma Inc.',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '2 mg de hidrocloruro de loperamida por cápsula',
      sal: { nombre: 'Hidrocloruro de loperamida', ref: rengR('DESCRIPTION', 'Loperamide hydrochloride, USP is available in 2 mg capsules') },
      excipientes: ['colloidal silicon dioxide', 'lactose monohydrate', 'microcrystalline cellulose', 'magnesium stearate', 'sodium starch glycolate', 'cápsula: gelatin, sodium lauryl sulfate, titanium dioxide'],
      usos: { t: 'Control de la diarrea aguda inespecífica desde los 2 años y de la diarrea crónica de la enfermedad inflamatoria intestinal en adultos; también reduce el volumen de las ileostomías.', ref: rengR('INDICATIONS AND USAGE', 'are indicated for the control and symptomatic relief of acute nonspecific diarrhea in patients 2 years of age and older') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula con 2 mg de hidrocloruro de loperamida (la sal del activo), lactosa y celulosa.',
    usos: 'Diarrea aguda y crónica, según su etiqueta.',
    actua: 'Se une a los receptores opioides de la pared del intestino: frena el peristaltismo, alarga el tránsito y aumenta el tono del esfínter anal.',
    recorrido: 'Casi no llega a la sangre (menos de 2 ng/mL); actúa en la pared intestinal, se metaboliza por N-desmetilación (CYP2C8 y CYP3A4) y sale sobre todo por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera la loperamida.',
      sigue: 'Pasa al intestino, donde actúa.',
      datos: [{ t: 'Cápsulas de 2 mg de hidrocloruro de loperamida.', ref: rengR('DESCRIPTION', 'Loperamide hydrochloride, USP is available in 2 mg capsules') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['intestino-delgado', 'intestino-grueso'],
      llega: 'La loperamida llega al intestino.',
      ocurre: 'Llega muy poca a la sangre: con una cápsula de 2 mg, el fármaco sin cambios se mantiene por debajo de 2 ng/mL; el máximo llega hacia las 5 horas. La P-glicoproteína la expulsa de las células.',
      sigue: 'Casi toda se queda en el intestino, donde actúa.',
      simultaneo: 'A la vez que una mínima parte se absorbe, la loperamida actúa sobre la pared intestinal.',
      datos: [
        { t: 'Tras una cápsula de 2 mg, la loperamida sin cambios en plasma se mantiene por debajo de 2 ng/mL.', ref: rengR(`${RENG_PK} › Absorption`, 'Plasma concentrations of unchanged drug remain below 2 ng/mL after the intake of a 2 mg capsule') },
        { t: 'Las concentraciones son máximas unas 5 horas después de la cápsula.', ref: rengR(`${RENG_PK} › Absorption`, 'Plasma loperamide concentrations are highest approximately 5 hours after administration of the capsule') },
        { t: 'Es sustrato de la P-glicoproteína.', ref: rengR(`${RENG_PK} › Distribution`, 'Loperamide is a P-glycoprotein substrate') }
      ],
      sinDatos: ['Biodisponibilidad']
    },
    distribucion: {
      organos: ['intestino-delgado', 'intestino-grueso', 'sangre'],
      llega: 'La loperamida está sobre todo en la pared del intestino; muy poca circula.',
      ocurre: 'En la pared intestinal se une a los receptores opioides: frena la liberación de acetilcolina y prostaglandinas, reduce el peristaltismo y alarga el tránsito, y aumenta el tono del esfínter anal. En la sangre, según la bibliografía, un 95 % va unida a proteínas.',
      sigue: 'Se metaboliza por N-desmetilación.',
      datos: [{ t: 'Según la bibliografía, la unión a proteínas plasmáticas es de un 95 %.', ref: rengR(`${RENG_PK} › Distribution`, 'Based on literature information, the plasma protein binding of loperamide is about 95%') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Receptores opioides de la pared intestinal',
        efecto: 'Reduce el peristaltismo propulsivo, alarga el tránsito intestinal, modifica el paso de agua y electrolitos y aumenta el tono del esfínter anal.',
        lugar: ['intestino-delgado', 'intestino-grueso'],
        datos: [
          { t: 'Se une al receptor opioide de la pared intestinal e inhibe la liberación de acetilcolina y prostaglandinas: reduce el peristaltismo propulsivo y aumenta el tiempo de tránsito.', ref: rengR('Mechanism of Action', 'Loperamide binds to the opiate receptor in the gut wall') },
          { t: 'Aumenta el tono del esfínter anal y reduce la incontinencia y la urgencia.', ref: rengR('Mechanism of Action', 'Loperamide increases the tone of the anal sphincter, thereby reducing incontinence and urgency') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La loperamida llega a los citocromos que la transforman.',
      ocurre: 'Se elimina sobre todo por N-desmetilación oxidativa, que in vitro hacen el CYP2C8 y el CYP3A4 (con algo de CYP2B6 y CYP2D6). Los inhibidores de esas enzimas o de la P-glicoproteína pueden aumentar su exposición.',
      sigue: 'La loperamida y sus metabolitos salen por las heces.',
      datos: [
        { t: 'Su eliminación ocurre sobre todo por N-desmetilación oxidativa.', ref: rengR(`${RENG_PK} › Elimination`, 'Elimination of loperamide mainly occurs by oxidative N-demethylation') },
        { t: 'In vitro la metabolizan sobre todo CYP2C8 y CYP3A4 a N-desmetil-loperamida.', ref: rengR(`${RENG_PK} › Metabolism`, 'In vitro loperamide is metabolized mainly by cytochrome P450 (CYP450) isozymes, CYP2C8 and CYP3A4') }
      ],
      sinDatos: ['Órgano del metabolismo', 'Actividad del metabolito'],
      metabolitos: [{ nombre: 'N-desmetil-loperamida', nombreFuente: 'N-demethyl loperamide', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'to form- N-demethyl loperamide') }]
    },
    excrecion: {
      organos: ['heces'],
      llega: 'La loperamida y sus metabolitos llegan al final del intestino.',
      ocurre: 'Se excretan sobre todo por las heces. La semivida aparente es de 10,8 horas (9,1-14,4).',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La loperamida sin cambios y sus metabolitos se excretan sobre todo por las heces.', ref: rengR(`${RENG_PK} › Excretion`, 'Excretion of the unchanged loperamide and its metabolites mainly occurs through the feces') },
        { t: 'La semivida aparente de eliminación es de 10,8 horas (9,1 a 14,4).', ref: rengR(`${RENG_PK} › Elimination`, 'The apparent elimination half-life of loperamide is 10.8 hours with a range of 9.1 hours to 14.4 hours') }
      ],
      sinDatos: ['Porcentaje de la dosis en heces y orina'],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'cmax', nombre: 'Loperamida sin cambios en plasma (2 mg)', valor: '< 2', unidad: 'ng/mL', ref: rengR(`${RENG_PK} › Absorption`, 'remain below 2 ng/mL') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo (cápsula)', valor: '≈ 5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 5 hours after administration of the capsule') },
    { magnitud: 'union', nombre: 'Unión a proteínas (bibliografía)', valor: '≈ 95', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'the plasma protein binding of loperamide is about 95%') },
    { magnitud: 'semivida', nombre: 'Semivida aparente', valor: '10,8 (9,1-14,4)', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'is 10.8 hours with a range of 9.1 hours to 14.4 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '6e60cb25-6af9-4f17-b740-a5e7b5bb2a09', 'LOPERAMIDE HYDROCHLORIDE capsule', 'Loperamide hydrochloride (Bionpharma Inc.)', '3', '2023-12-28', '2026-11-10'), rengPubchem(3955, 'Loperamide', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
