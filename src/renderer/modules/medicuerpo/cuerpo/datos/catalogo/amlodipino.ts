import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-norvasc'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'amlodipino',
    nombre: 'Amlodipino',
    clase: 'Antagonista del calcio (dihidropiridina)',
    sinonimos: ['amlodipine', 'amlodipina', 'Norvasc'],
    formula: 'C20H25ClN2O5',
    masaMolar: 408.9,
    smiles: 'CCOC(=O)C1=C(NC(=C(C1C2=CC=CC=C2Cl)C(=O)OC)C)COCCN',
    inchikey: 'HTIQEAQVCYTUBX-UHFFFAOYSA-N',
    cid: 2162,
    estereo: { descripcion: 'Un estereocentro; el fármaco es racémico (±).' },
    area: 'Corazón y circulación'
  },
  presentaciones: [
    {
      id: 'amlodipino-norvasc',
      producto: 'NORVASC (amlodipine besylate) comprimidos de 2,5, 5 y 10 mg',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2,5, 5 y 10 mg de amlodipino por comprimido',
      sal: { nombre: 'Besilato de amlodipino (sal del ácido bencenosulfónico)', ref: rengR('11 DESCRIPTION', 'NORVASC is the besylate salt of amlodipine') },
      excipientes: ['microcrystalline cellulose', 'dibasic calcium phosphate anhydrous', 'sodium starch glycolate', 'magnesium stearate'],
      usos: { t: 'Hipertensión arterial y enfermedad coronaria (angina estable crónica, angina vasoespástica y enfermedad coronaria documentada).', ref: rengR('1 INDICATIONS AND USAGE', 'NORVASC is indicated for the treatment of hypertension, to lower blood pressure') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con besilato de amlodipino (la sal del activo) y celulosa, fosfato cálcico y estearato de magnesio.',
    usos: 'Hipertensión y angina o enfermedad coronaria, según su etiqueta.',
    actua: 'Bloquea la entrada de calcio en el músculo liso de las arterias, que se relajan: baja la resistencia vascular y la presión.',
    recorrido: 'Se absorbe despacio (máximo a las 6-12 horas), va unido a proteínas en un 93 %, el hígado lo transforma en metabolitos inactivos y sale por la orina; su semivida es de 30-50 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido baja hasta el estómago.',
      ocurre: 'Se disgrega y libera el besilato de amlodipino, poco soluble en agua.',
      sigue: 'El amlodipino pasa al intestino.',
      datos: [{ t: 'El besilato de amlodipino es un polvo cristalino poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is slightly soluble in water and sparingly soluble in ethanol') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el amlodipino disuelto.',
      ocurre: 'Se absorbe despacio: el máximo en el plasma llega entre 6 y 12 horas. La biodisponibilidad absoluta es del 64-90 % y la comida no la cambia.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'El máximo en plasma se alcanza entre 6 y 12 horas; la biodisponibilidad absoluta se estima entre el 64 y el 90 %.', ref: rengR(RENG_PK, 'absorption produces peak plasma concentrations between 6 and 12 hours') },
        { t: 'La comida no altera su biodisponibilidad.', ref: rengR(RENG_PK, 'The bioavailability of NORVASC is not altered by the presence of food'), condiciones: 'con o sin comida' },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'vasos', 'corazon'],
      llega: 'El amlodipino circula por la sangre.',
      ocurre: 'Un 93 % va unido a proteínas del plasma. Actúa sobre el músculo liso de las arterias (más que sobre el del corazón): bloquea la entrada de calcio y las arterias se dilatan. Su unión al receptor es gradual, y el efecto también.',
      sigue: 'El hígado lo va transformando.',
      simultaneo: 'Por su semivida larga, con tomas diarias se acumula y llega al estado estacionario en 7-8 días.',
      datos: [
        { t: 'Alrededor del 93 % del fármaco circulante se une a proteínas plasmáticas en pacientes hipertensos.', ref: rengR(RENG_PK, 'approximately 93% of the circulating drug is bound to plasma proteins'), poblacion: 'pacientes hipertensos' },
        { t: 'El estado estacionario se alcanza tras 7-8 días de tomas diarias.', ref: rengR(RENG_PK, 'Steady-state plasma levels of amlodipine are reached after 7 to 8 days of consecutive daily dosing') }
      ],
      accion: {
        diana: 'Canales de calcio (entrada transmembrana de calcio) del músculo liso vascular y cardíaco',
        efecto: 'Vasodilatación arterial periférica: baja la resistencia vascular y la presión arterial.',
        lugar: ['vasos', 'corazon'],
        datos: [
          { t: 'Inhibe la entrada de iones calcio a través de la membrana en el músculo liso vascular y cardíaco, con más efecto sobre el vascular.', ref: rengR('12.1 Mechanism of Action', 'inhibits the transmembrane influx of calcium ions into vascular smooth muscle and cardiac muscle') },
          { t: 'Es un vasodilatador arterial periférico que actúa directamente sobre el músculo liso vascular y reduce la resistencia vascular periférica.', ref: rengR('12.1 Mechanism of Action', 'Amlodipine is a peripheral arterial vasodilator that acts directly on vascular smooth muscle') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El amlodipino llega al hígado.',
      ocurre: 'Alrededor del 90 % se convierte en metabolitos inactivos por metabolismo hepático. Los inhibidores fuertes del CYP3A pueden aumentar sus concentraciones; en ancianos y con insuficiencia hepática se elimina más despacio.',
      sigue: 'Los metabolitos y un 10 % de amlodipino sin cambios van a los riñones.',
      datos: [
        { t: 'Se convierte en gran parte (un 90 %) en metabolitos inactivos por metabolismo hepático.', ref: rengR(RENG_PK, 'extensively (about 90%) converted to inactive metabolites via hepatic metabolism') },
        { t: 'Los inhibidores fuertes del CYP3A (como itraconazol o claritromicina) pueden aumentar sus concentraciones.', ref: rengR(RENG_PK, 'strong inhibitors of CYP3A (e.g., itraconazole, clarithromycin) may increase the plasma concentrations of amlodipine') },
        { t: 'Ancianos y pacientes con insuficiencia hepática tienen menor aclaramiento: el AUC aumenta un 40-60 %.', ref: rengR(RENG_PK, 'Elderly patients and patients with hepatic insufficiency have decreased clearance of amlodipine'), poblacion: 'ancianos; insuficiencia hepática' }
      ],
      metabolitos: [{ nombre: 'Metabolitos inactivos (sin nombre en la etiqueta)', actividad: 'inactivo', ref: rengR(RENG_PK, 'converted to inactive metabolites via hepatic metabolism') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Llegan a los riñones los metabolitos y algo de amlodipino sin cambios.',
      ocurre: 'Por la orina sale un 10 % de amlodipino sin cambios y un 60 % de metabolitos. La eliminación del plasma es bifásica, con una semivida terminal de 30-50 horas. La insuficiencia renal no cambia mucho su farmacocinética.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'El 10 % del compuesto original y el 60 % de los metabolitos se excretan en la orina.', ref: rengR(RENG_PK, 'with 10% of the parent compound and 60% of the metabolites excreted in the urine') },
        { t: 'La eliminación del plasma es bifásica, con una semivida terminal de unas 30-50 horas.', ref: rengR(RENG_PK, 'Elimination from the plasma is biphasic with a terminal elimination half-life of about 30-50 hours') },
        { t: 'Su farmacocinética apenas cambia con la insuficiencia renal.', ref: rengR(RENG_PK, 'The pharmacokinetics of amlodipine are not significantly influenced by renal impairment'), poblacion: 'insuficiencia renal' }
      ]
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '6-12', unidad: 'h', ref: rengR(RENG_PK, 'peak plasma concentrations between 6 and 12 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '64-90', unidad: '%', ref: rengR(RENG_PK, 'Absolute bioavailability has been estimated to be between 64 and 90%') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 93', unidad: '%', poblacion: 'pacientes hipertensos', ref: rengR(RENG_PK, 'approximately 93% of the circulating drug is bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '30-50', unidad: 'h', ref: rengR(RENG_PK, 'terminal elimination half-life of about 30-50 hours') },
    { magnitud: 'orina', nombre: 'Amlodipino sin cambios en la orina', valor: '10', unidad: '% de la dosis', ref: rengR(RENG_PK, 'with 10% of the parent compound') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '7367289c-b0b0-466a-83e2-558e2985c29f', 'NORVASC (amlodipine besylate) tablet', 'NORVASC (Viatris Specialty LLC)', '10', '2025-12-10', '2026-11-10'), rengPubchem(2162, 'Amlodipine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
