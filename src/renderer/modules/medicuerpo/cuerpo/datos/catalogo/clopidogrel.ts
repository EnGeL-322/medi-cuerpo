import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-plavix'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'clopidogrel',
    nombre: 'Clopidogrel',
    clase: 'Antiagregante plaquetario (tienopiridina, inhibidor del receptor P2Y12); profármaco',
    sinonimos: ['clopidogrel', 'Plavix'],
    formula: 'C16H16ClNO2S',
    masaMolar: 321.8,
    smiles: 'COC(=O)[C@H](C1=CC=CC=C1Cl)N2CCC3=C(C2)C=CS3',
    inchikey: 'GKTWGGQPFAXNFI-HNNXBMFYSA-N',
    cid: 60606,
    estereo: { descripcion: 'Un estereocentro: es el enantiómero (S).' },
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'clopidogrel-plavix',
      producto: 'PLAVIX (clopidogrel bisulfate) comprimidos recubiertos de 75 y 300 mg',
      titular: 'Sanofi-Aventis U.S. LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '75 y 300 mg de clopidogrel (base) por comprimido',
      sal: { nombre: 'Bisulfato de clopidogrel (sal sulfato 1:1); 97,875 mg equivalen a 75 mg de clopidogrel', ref: rengR('11 DESCRIPTION', 'containing 97.875 mg of clopidogrel bisulfate which is the molar equivalent of 75 mg of clopidogrel base') },
      excipientes: ['hydrogenated castor oil', 'hydroxypropyl cellulose', 'mannitol', 'microcrystalline cellulose', 'polyethylene glycol 6000', 'recubrimiento: ferric oxide, hypromellose 2910, lactose monohydrate, titanium dioxide, triacetin', 'carnauba wax (pulido)'],
      usos: { t: 'Síndrome coronario agudo, infarto, ictus o enfermedad arterial periférica recientes: reducir el riesgo de infarto e ictus.', ref: rengR('1 INDICATIONS AND USAGE', 'Plavix is a P2Y 12 platelet inhibitor indicated for') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con bisulfato de clopidogrel (la sal del activo), manitol, celulosa y aceite de ricino hidrogenado.',
    usos: 'Reducir el riesgo de infarto e ictus tras un síndrome coronario agudo, un infarto, un ictus o con enfermedad arterial periférica, según su etiqueta.',
    actua: 'Es un profármaco: su metabolito activo se une de forma irreversible al receptor P2Y12 de las plaquetas, que dejan de agregarse durante toda su vida (7-10 días).',
    recorrido: 'Se absorbe rápido (al menos un 50 %); la mayor parte se hidroliza a un ácido inactivo y una fracción pasa, por el CYP2C19, a su metabolito activo; se elimina por orina y heces a partes casi iguales.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega. El bisulfato de clopidogrel es muy soluble a pH 1 (como en el estómago) y casi insoluble a pH neutro.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Es prácticamente insoluble en agua a pH neutro, pero muy soluble a pH 1.', ref: rengR('11 DESCRIPTION', 'It is practically insoluble in water at neutral pH but freely soluble at pH 1') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el clopidogrel disuelto.',
      ocurre: 'Se absorbe rápido, al menos en un 50 % (según la excreción urinaria de metabolitos). Con un desayuno, el máximo del metabolito activo baja un 57 % pero su AUC no cambia, y la inhibición de las plaquetas apenas varía.',
      sigue: 'Pasa a la sangre, donde se transforma.',
      datos: [
        { t: 'Se absorbe rápido; la absorción es de al menos un 50 %, según la excreción urinaria de metabolitos.', ref: rengR(`${RENG_PK} › Absorption`, 'Absorption is at least 50%, based on urinary excretion of clopidogrel metabolites') },
        { t: 'Con un desayuno estándar, el AUC del metabolito activo no cambió y su Cmax bajó un 57 %; la inhibición de la agregación se redujo menos de un 9 %.', ref: rengR(`${RENG_PK} › Effect of food`, 'there was a 57% decrease in active metabolite C max'), poblacion: 'hombres sanos', condiciones: 'con desayuno estándar' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'plaquetas'],
      llega: 'El metabolito activo llega a las plaquetas por la sangre.',
      ocurre: 'El metabolito tiol se une de forma rápida e irreversible al receptor P2Y12 del ADP de las plaquetas: no se activa el complejo GPIIb/IIIa y la plaqueta no se agrega durante el resto de su vida (7-10 días). La inhibición se ve desde 2 horas tras una dosis.',
      sigue: 'El resto del fármaco y sus metabolitos se eliminan.',
      simultaneo: 'La transformación en el metabolito activo y la acción sobre las plaquetas ocurren casi a la vez: el metabolito vive unos 30 minutos.',
      datos: [{ t: 'La inhibición de la agregación, dependiente de la dosis, se observa 2 horas después de una dosis única.', ref: rengR('12.2 Pharmacodynamics', 'Dose-dependent inhibition of platelet aggregation can be seen 2 hours after single oral doses of Plavix') }],
      sinDatos: ['Unión a proteínas y volumen de distribución (no están en la sección de farmacocinética de esta etiqueta)'],
      accion: {
        diana: 'Receptor P2Y12 del ADP en las plaquetas (unión irreversible del metabolito activo)',
        efecto: 'Inhibe la activación y la agregación de las plaquetas durante toda su vida.',
        lugar: ['plaquetas'],
        datos: [
          { t: 'Inhibe la activación y agregación de las plaquetas por la unión irreversible de su metabolito activo a los receptores P2Y12 del ADP.', ref: rengR('12.1 Mechanism of Action', 'through the irreversible binding of its active metabolite to the P2Y 12 class of ADP receptors on platelets') },
          { t: 'Las plaquetas expuestas quedan afectadas el resto de su vida (unos 7-10 días).', ref: rengR('12.2 Pharmacodynamics', 'platelets exposed to clopidogrel\'s active metabolite are affected for the remainder of their lifespan (about 7 to 10 days)') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El clopidogrel (profármaco) llega a las enzimas que lo activan o lo inactivan.',
      ocurre: 'Dos vías: las esterasas lo hidrolizan a un ácido carboxílico inactivo (el 85 % de los metabolitos circulantes); y varios CYP450 lo oxidan a 2-oxo-clopidogrel y luego a un tiol activo, sobre todo por CYP2C19. El máximo del metabolito activo llega a los 30-60 minutos.',
      sigue: 'El metabolito activo actúa en las plaquetas; los inactivos se eliminan.',
      datos: [
        { t: 'Es un profármaco que se metaboliza a un metabolito activo y a metabolitos inactivos.', ref: rengR(RENG_PK, 'Clopidogrel is a prodrug and is metabolized to a pharmacologically active metabolite and inactive metabolites') },
        { t: 'Las esterasas lo hidrolizan a un derivado ácido carboxílico inactivo (85 % de los metabolitos circulantes).', ref: rengR(`${RENG_PK} › Metabolism`, 'leading to hydrolysis into an inactive carboxylic acid derivative (85% of circulating metabolites)') },
        { t: 'El metabolito activo, un tiol, se forma sobre todo por CYP2C19, con aportes de CYP1A2, CYP2B6 y CYP3A.', ref: rengR(`${RENG_PK} › Metabolism`, 'The active metabolite is formed mostly by CYP2C19') },
        RENG_GENERAL.higado
      ],
      sinDatos: ['Órgano del metabolismo (la etiqueta nombra las enzimas, no el órgano)'],
      metabolitos: [
        { nombre: 'Metabolito activo tiol', nombreFuente: 'thiol derivative of clopidogrel', actividad: 'activo', nota: 'Se une irreversiblemente al P2Y12; semivida de unos 30 min.', ref: rengR(`${RENG_PK} › Metabolism`, 'the active metabolite, a thiol derivative of clopidogrel') },
        { nombre: '2-oxo-clopidogrel (intermedio)', nombreFuente: '2-oxo-clopidogrel intermediate metabolite', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'Cytochromes first oxidize clopidogrel to a 2-oxo-clopidogrel intermediate metabolite') },
        { nombre: 'Derivado ácido carboxílico', nombreFuente: 'inactive carboxylic acid derivative', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'an inactive carboxylic acid derivative') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Con clopidogrel marcado, en 5 días un 50 % de la radiactividad salió por la orina y un 46 % por las heces. Semivida del clopidogrel: unas 6 horas; la del metabolito activo, unos 30 minutos.',
      sigue: 'Fin del recorrido; el efecto sobre las plaquetas ya inhibidas dura lo que viven ellas.',
      datos: [
        { t: 'En 5 días se excretó un 50 % de la radiactividad por la orina y un 46 % por las heces.', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 50% of total radioactivity was excreted in urine and approximately 46% in feces') },
        { t: 'Tras una dosis de 75 mg su semivida es de unas 6 horas; la del metabolito activo, de unos 30 minutos.', ref: rengR(`${RENG_PK} › Elimination`, 'The half-life of the active metabolite is about 30 minutes') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción (por metabolitos en orina)', valor: '≥ 50', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'Absorption is at least 50%') },
    { magnitud: 'tmax', nombre: 'Tmax del metabolito activo', valor: '30-60', unidad: 'min', ref: rengR(`${RENG_PK} › Metabolism`, 'C max occurs approximately 30 to 60 minutes after dosing') },
    { magnitud: 'semivida', nombre: 'Semivida del clopidogrel (75 mg)', valor: '≈ 6', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'clopidogrel has a half-life of approximately 6 hours') },
    { magnitud: 'orina', nombre: 'Radiactividad en orina (5 días)', valor: '≈ 50', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 50% of total radioactivity was excreted in urine') },
    { magnitud: 'heces', nombre: 'Radiactividad en heces (5 días)', valor: '≈ 46', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 46% in feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'de8b0b67-eb25-4684-83b5-7ad785314227', 'PLAVIX (clopidogrel bisulfate) tablet, film coated', 'PLAVIX (Sanofi-Aventis U.S. LLC)', '5', '2025-06-11', '2026-11-10'), rengPubchem(60606, 'Clopidogrel', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
