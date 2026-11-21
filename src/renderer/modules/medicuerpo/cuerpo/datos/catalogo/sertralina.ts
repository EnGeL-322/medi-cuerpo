import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zoloft'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'sertralina',
    nombre: 'Sertralina',
    clase: 'Inhibidor selectivo de la recaptación de serotonina (ISRS)',
    sinonimos: ['sertraline', 'Zoloft'],
    formula: 'C17H17Cl2N',
    masaMolar: 306.2,
    smiles: 'CN[C@H]1CC[C@H](C2=CC=CC=C12)C3=CC(=C(C=C3)Cl)Cl',
    inchikey: 'VGKDLMBJGBXTGI-SJCJKPOMSA-N',
    cid: 68617,
    iupac: '(1S,4S)-4-(3,4-diclorofenil)-N-metil-1,2,3,4-tetrahidronaftalen-1-amina',
    estereo: { descripcion: 'Dos estereocentros: el fármaco es un solo isómero (1S,4S), cis.' },
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'sertralina-zoloft-comprimidos',
      producto: 'ZOLOFT (sertraline hydrochloride) comprimidos recubiertos de 25, 50 y 100 mg',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25, 50 y 100 mg de sertralina por comprimido',
      sal: { nombre: 'Clorhidrato de sertralina; 28,0 mg de la sal equivalen a 25 mg de sertralina', ref: rengR('11 DESCRIPTION', 'contain 28.0 mg, 56.0 mg and 111.9 mg sertraline hydrochloride equivalent to 25, 50 and 100 mg of sertraline') },
      excipientes: ['dibasic calcium phosphate dihydrate', 'hydroxypropyl cellulose', 'hypromellose', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol', 'polysorbate 80', 'sodium starch glycolate', 'titanium dioxide', 'colorantes según la concentración (D&C Yellow #10, FD&C Blue #1, Red #40 o Blue #2 aluminum lake; synthetic yellow iron oxide)'],
      usos: { t: 'Depresión mayor, trastorno obsesivo-compulsivo, trastorno de pánico, estrés postraumático, ansiedad social y trastorno disfórico premenstrual.', ref: rengR('1 INDICATIONS AND USAGE', 'ZOLOFT is indicated for the treatment of the following') },
      fuente: RENG_F,
      nota: 'La misma etiqueta incluye una solución oral (20 mg/mL con 12 % de alcohol); en dosis única, su biodisponibilidad es similar a la de los comprimidos.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con clorhidrato de sertralina (la sal del activo) y excipientes como fosfato de calcio y celulosa.',
    usos: 'Depresión, trastorno obsesivo-compulsivo, pánico, estrés postraumático, ansiedad social y trastorno disfórico premenstrual, según su etiqueta.',
    actua: 'Inhibe la recaptación de serotonina en las neuronas del sistema nervioso central y potencia así su actividad.',
    recorrido: 'Se absorbe despacio (máximo a las 4,5-8,4 horas), se une casi toda a proteínas, se transforma mucho (sobre todo por N-desmetilación) y sale en orina y heces a partes iguales.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto baja hasta el estómago.',
      ocurre: 'Se disgrega y libera el clorhidrato de sertralina, poco soluble en agua. La etiqueta no declara liberación modificada.',
      sigue: 'La sertralina pasa al intestino.',
      datos: [
        { t: 'El clorhidrato de sertralina es un polvo cristalino poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'Sertraline hydrochloride is a white crystalline powder that is slightly soluble in water') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: ['higado'],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'La sertralina disuelta llega al intestino.',
      ocurre: 'Se absorbe despacio: con una toma diaria, el máximo en la sangre llega entre 4,5 y 8,4 horas después. Sufre un primer paso extenso por el hígado. La comida aumenta un poco la concentración máxima y el AUC.',
      sigue: 'Llega a la circulación general.',
      datos: [
        { t: 'Con una toma diaria de 50 a 200 mg durante 14 días, el máximo en plasma se alcanzó entre 4,5 y 8,4 horas después.', ref: rengR(`${RENG_PK} › Absorption`, 'mean peak plasma concentrations (C max ) of sertraline occurred between 4.5 to 8.4 hours post-dosing'), condiciones: '50-200 mg una vez al día, 14 días' },
        { t: 'Sufre un metabolismo de primer paso extenso.', ref: rengR(`${RENG_PK} › Metabolism`, 'Sertraline undergoes extensive first pass metabolism') },
        { t: 'Tomarla con comida aumenta un poco la Cmax y el AUC.', ref: rengR(`${RENG_PK} › Absorption`, 'Administration with food causes a small increase in C max and AUC'), condiciones: 'con comida' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Biodisponibilidad absoluta', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo'],
      llega: 'La sertralina llega a la sangre.',
      ocurre: 'Viaja unida a proteínas del suero en un 98 %. En el sistema nervioso central bloquea la recaptación de serotonina por las neuronas, con efectos muy débiles sobre noradrenalina y dopamina; también bloquea la captación de serotonina por las plaquetas. Se acumula hasta el doble y llega al estado estacionario en una semana de tomas diarias.',
      sigue: 'La sangre la lleva a donde se metaboliza.',
      simultaneo: 'El efecto clínico depende de tomas repetidas: mientras se acumula, ya se está metabolizando.',
      datos: [
        { t: 'In vitro se une mucho a las proteínas del suero (98 %) entre 20 y 500 ng/mL.', ref: rengR(`${RENG_PK} › Protein Binding`, 'sertraline is highly bound to serum proteins (98%)') },
        { t: 'Se acumula aproximadamente al doble y alcanza el estado estacionario tras una semana de tomas diarias.', ref: rengR(`${RENG_PK} › Absorption`, 'there is an approximately two-fold accumulation up to steady-state concentrations, which are achieved after one week of once-daily dosing') }
      ],
      accion: {
        diana: 'Transportador de recaptación de serotonina (5-HT) de las neuronas',
        efecto: 'Potencia la actividad de la serotonina en el sistema nervioso central.',
        lugar: ['encefalo', 'plaquetas'],
        datos: [
          { t: 'Potencia la actividad serotoninérgica en el sistema nervioso central inhibiendo la recaptación neuronal de serotonina (5-HT).', ref: rengR('12.1 Mechanism of Action', 'Sertraline potentiates serotonergic activity in the central nervous system through inhibition of neuronal reuptake of serotonin') },
          { t: 'Bloquea la captación de serotonina en las plaquetas humanas y tiene efectos muy débiles sobre la recaptación de noradrenalina y dopamina.', ref: rengR('12.2 Pharmacodynamics', 'sertraline blocks the uptake of serotonin into human platelets') },
          { t: 'No inhibe la monoaminooxidasa.', ref: rengR('12.2 Pharmacodynamics', 'Sertraline does not inhibit monoamine oxidase') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La sertralina llega al hígado.',
      ocurre: 'Se metaboliza mucho. La vía inicial principal es la N-desmetilación, que da N-desmetilsertralina, bastante menos activa y de semivida larga (62-104 h). Ambas siguen desaminación oxidativa, reducción, hidroxilación y conjugación con glucurónido. Con insuficiencia hepática leve, la exposición se triplica.',
      sigue: 'Los metabolitos y una parte sin cambios se eliminan por la orina y las heces.',
      datos: [
        { t: 'La vía inicial principal de su metabolismo es la N-desmetilación.', ref: rengR(`${RENG_PK} › Metabolism`, 'The principal initial pathway of metabolism for sertraline is N-demethylation') },
        { t: 'La N-desmetilsertralina es sustancialmente menos activa que la sertralina y su semivida terminal es de 62 a 104 horas.', ref: rengR(`${RENG_PK} › Metabolism`, 'N-desmethylsertraline has a plasma terminal elimination half-life of 62 to 104 hours') },
        { t: 'Ambas sufren desaminación oxidativa y después reducción, hidroxilación y conjugación con glucurónido.', ref: rengR(`${RENG_PK} › Metabolism`, 'undergo oxidative deamination and subsequent reduction, hydroxylation, and glucuronide conjugation') },
        { t: 'Con insuficiencia hepática crónica leve, el aclaramiento baja y la exposición es unas 3 veces mayor.', ref: rengR(`${RENG_PK} › Hepatic Impairment`, 'sertraline clearance was reduced, resulting in approximately 3-fold greater exposure'), poblacion: 'insuficiencia hepática leve' },
        { t: 'Semivida terminal media de la sertralina en plasma: unas 26 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'The average terminal elimination half-life of plasma sertraline is about 26 hours') }
      ],
      metabolitos: [
        { nombre: 'N-desmetilsertralina', nombreFuente: 'N-desmethylsertraline', actividad: 'activo', nota: 'Sustancialmente menos activa que la sertralina; semivida de 62-104 h.', ref: rengR(`${RENG_PK} › Metabolism`, 'have shown N-desmethylsertraline to be substantially less active than sertraline') },
        { nombre: 'Productos de desaminación, reducción, hidroxilación y glucurónidos', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'oxidative deamination and subsequent reduction, hydroxylation, and glucuronide conjugation') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Llegan los metabolitos a los riñones y al intestino.',
      ocurre: 'En un estudio con sertralina marcada, en 9 días se recuperó un 40-45 % en la orina (sin sertralina inalterada) y otro 40-45 % en las heces (con un 12-14 % de sertralina sin cambios). La insuficiencia renal no cambia su farmacocinética.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 40-45 % de la radiactividad se recuperó en la orina en 9 días; no se detectó sertralina sin cambios en la orina.', ref: rengR(`${RENG_PK} › Metabolism`, 'About 40-45% of the administered radioactivity was recovered in urine in 9 days'), poblacion: 'dos hombres sanos (sertralina marcada)' },
        { t: 'Otro 40-45 % se encontró en las heces, incluido un 12-14 % de sertralina sin cambios.', ref: rengR(`${RENG_PK} › Metabolism`, 'including 12-14% unchanged sertraline'), poblacion: 'dos hombres sanos (sertralina marcada)' },
        { t: 'La excreción de fármaco sin cambios por la orina es una vía menor; la insuficiencia renal no altera su farmacocinética.', ref: rengR(`${RENG_PK} › Renal Impairment`, 'excretion of unchanged drug in urine is a minor route of elimination') }
      ]
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '4,5-8,4', unidad: 'h', condiciones: 'toma diaria de 50-200 mg, 14 días', ref: rengR(`${RENG_PK} › Absorption`, 'occurred between 4.5 to 8.4 hours post-dosing') },
    { magnitud: 'semivida', nombre: 'Semivida terminal de la sertralina', valor: '≈ 26', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'is about 26 hours') },
    { magnitud: 'semivida', nombre: 'Semivida de la N-desmetilsertralina', valor: '62-104', unidad: 'h', ref: rengR(`${RENG_PK} › Metabolism`, 'half-life of 62 to 104 hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas del suero (in vitro)', valor: '98', unidad: '%', condiciones: '20-500 ng/mL', ref: rengR(`${RENG_PK} › Protein Binding`, 'highly bound to serum proteins (98%)') },
    { magnitud: 'orina', nombre: 'Radiactividad en orina en 9 días', valor: '40-45', unidad: '% de la dosis', poblacion: 'dos hombres sanos', ref: rengR(`${RENG_PK} › Metabolism`, 'About 40-45% of the administered radioactivity was recovered in urine in 9 days') },
    { magnitud: 'heces', nombre: 'Radiactividad en heces en 9 días', valor: '40-45', unidad: '% de la dosis', poblacion: 'dos hombres sanos', ref: rengR(`${RENG_PK} › Metabolism`, 'about 40-45% of the administered radioactivity was accounted for in feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'fda754f6-d0f3-4dce-a17a-927d64f912f7', 'ZOLOFT (sertraline hydrochloride) tablet, film coated; solution, concentrate', 'ZOLOFT (Viatris Specialty LLC)', '7', '2025-07-24', '2026-11-09'), rengPubchem(68617, 'Sertraline', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
