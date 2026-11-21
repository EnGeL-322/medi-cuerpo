import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-neurontin'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'gabapentina',
    nombre: 'Gabapentina',
    clase: 'Antiepiléptico y analgésico neuropático (análogo estructural del GABA)',
    sinonimos: ['gabapentin', 'Neurontin'],
    formula: 'C9H17NO2',
    masaMolar: 171.24,
    smiles: 'C1CCC(CC1)(CC(=O)O)CN',
    inchikey: 'UGJMXCAKCUNAIE-UHFFFAOYSA-N',
    cid: 3446,
    iupac: 'ácido 2-[1-(aminometil)ciclohexil]acético',
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Neurología'
  },
  presentaciones: [
    {
      id: 'gabapentina-neurontin',
      producto: 'NEURONTIN (gabapentin) cápsulas de 100, 300 y 400 mg',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100, 300 y 400 mg de gabapentina por cápsula',
      excipientes: ['cornstarch', 'FD&C Blue No. 2', 'gelatin', 'lactose', 'talc', 'titanium dioxide', 'red iron oxide (400 mg)', 'yellow iron oxide (300 y 400 mg)'],
      usos: { t: 'Neuralgia postherpética en adultos y tratamiento añadido de crisis de inicio parcial (con o sin generalización) desde los 3 años.', ref: rengR('1 INDICATIONS AND USAGE', 'Management of postherpetic neuralgia in adults') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye también comprimidos de 600 y 800 mg y una solución oral.'
    }
  ],
  resumen: {
    contiene: 'Cápsula de gabapentina (sin sal) con almidón, lactosa, talco y gelatina coloreada.',
    usos: 'Dolor tras el herpes zóster (neuralgia postherpética) y crisis epilépticas parciales, según su etiqueta.',
    actua: 'Su mecanismo preciso se desconoce; se une con alta afinidad a la subunidad α2δ de los canales de calcio dependientes del voltaje.',
    recorrido: 'Su absorción baja al subir la dosis (del 60 % al 27 %), casi no se une a proteínas, no se metaboliza y sale íntegra por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera la gabapentina, muy soluble en agua y en soluciones ácidas o básicas.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La gabapentina es muy soluble en agua y en soluciones acuosas ácidas y básicas.', ref: rengR('11 DESCRIPTION', 'It is freely soluble in water and both basic and acidic aqueous solutions') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la gabapentina disuelta.',
      ocurre: 'Su biodisponibilidad no es proporcional a la dosis: cuanto más se toma, menos se absorbe proporcionalmente (un 60 % con 900 mg al día y un 27 % con 4800 mg al día). La comida apenas la cambia.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad baja al subir la dosis: alrededor del 60, 47, 34, 33 y 27 % con 900, 1200, 2400, 3600 y 4800 mg al día en tres tomas.', ref: rengR(`${RENG_PK} › Oral Bioavailability`, 'Bioavailability of gabapentin is approximately 60%, 47%, 34%, 33%, and 27%') },
        { t: 'La comida solo tiene un efecto leve (AUC y Cmax un 14 % mayores).', ref: rengR(`${RENG_PK} › Oral Bioavailability`, 'Food has only a slight effect on the rate and extent of absorption of gabapentin'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tiempo hasta la concentración máxima', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo', 'nervios'],
      llega: 'La gabapentina circula por la sangre.',
      ocurre: 'Menos del 3 % va unida a proteínas. En el líquido cefalorraquídeo alcanza un 20 % de la concentración del plasma. Se une a la subunidad α2δ de los canales de calcio dependientes del voltaje; no actúa sobre el GABA, aunque se le parezca.',
      sigue: 'Sin transformarse, llega a los riñones.',
      datos: [
        { t: 'Menos del 3 % circula unido a proteínas; volumen aparente de 58 ± 6 L tras 150 mg intravenosos.', ref: rengR(`${RENG_PK} › Distribution`, 'Less than 3% of gabapentin circulates bound to plasma protein') },
        { t: 'En pacientes con epilepsia, la concentración en el líquido cefalorraquídeo fue un 20 % de la del plasma.', ref: rengR(`${RENG_PK} › Distribution`, 'concentrations of gabapentin in cerebrospinal fluid were approximately 20% of the corresponding plasma concentrations'), poblacion: 'pacientes con epilepsia' }
      ],
      accion: {
        diana: 'Subunidad α2δ de los canales de calcio dependientes del voltaje (relación con el efecto desconocida)',
        efecto: 'Analgésico en el dolor neuropático y antiepiléptico.',
        lugar: ['encefalo', 'nervios'],
        datos: [
          { t: 'Los mecanismos precisos de sus acciones analgésica y antiepiléptica se desconocen; no actúa sobre la unión, captación ni degradación del GABA.', ref: rengR('12.1 Mechanism of Action', 'The precise mechanisms by which gabapentin produces its analgesic and antiepileptic actions are unknown') },
          { t: 'In vitro se une con alta afinidad a la subunidad α2δ de los canales de calcio activados por voltaje.', ref: rengR('12.1 Mechanism of Action', 'gabapentin binds with high-affinity to the α2δ subunit of voltage-activated calcium channels') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La gabapentina circula por la sangre.',
      ocurre: 'No se metaboliza de forma apreciable: toda su acción es del fármaco original.',
      sigue: 'Llega intacta a los riñones.',
      datos: [{ t: 'Toda su acción se debe al compuesto original; no se metaboliza de forma apreciable en humanos.', ref: rengR(RENG_PK, 'gabapentin is not appreciably metabolized in humans') }],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La gabapentina llega a los riñones.',
      ocurre: 'Se elimina sin cambios por la orina. Su semivida es de 5-7 horas. Su eliminación es proporcional al aclaramiento de creatinina: más lenta en personas mayores y con insuficiencia renal. Se retira con hemodiálisis.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina de la circulación por excreción renal como fármaco sin cambios.', ref: rengR(`${RENG_PK} › Elimination`, 'Gabapentin is eliminated from the systemic circulation by renal excretion as unchanged drug') },
        { t: 'Su semivida es de 5 a 7 horas, sin cambios con la dosis ni con dosis repetidas.', ref: rengR(`${RENG_PK} › Elimination`, 'Gabapentin elimination half-life is 5 to 7 hours') },
        { t: 'Su eliminación es proporcional al aclaramiento de creatinina; se reduce en ancianos y con insuficiencia renal.', ref: rengR(`${RENG_PK} › Elimination`, 'In elderly patients, and in patients with impaired renal function, gabapentin plasma clearance is reduced'), poblacion: 'ancianos; insuficiencia renal' }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad (900 → 4800 mg/día)', valor: '60 → 27', unidad: '%', condiciones: 'en tres tomas al día', ref: rengR(`${RENG_PK} › Oral Bioavailability`, 'approximately 60%, 47%, 34%, 33%, and 27%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '< 3', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Less than 3% of gabapentin circulates bound to plasma protein') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente (IV)', valor: '58 ± 6', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'is 58±6 L (mean ±SD)') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '5-7', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'is 5 to 7 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '97935fd9-1d4a-43b6-a5d9-de994591187b', 'NEURONTIN (gabapentin) capsule; tablet, film coated; solution', 'NEURONTIN (Viatris Specialty LLC)', '48', '2026-08-06', '2026-11-10'), rengPubchem(3446, 'Gabapentin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
