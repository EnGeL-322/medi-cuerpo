import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-xifaxan'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'rifaximina',
    nombre: 'Rifaximina',
    clase: 'Antibacteriano de acción local en el intestino (rifamicina)',
    sinonimos: ['rifaximin', 'Xifaxan'],
    formula: 'C43H51N3O11',
    masaMolar: 785.9,
    smiles: 'C[C@H]1/C=C/C=C(\\C(=O)NC2=C(C3=C(C4=C(C(=C3O)C)O[C@@](C4=O)(O/C=C/[C@@H]([C@H]([C@H]([C@@H]([C@@H]([C@@H]([C@H]1O)C)O)C)OC(=O)C)C)OC)C)C5=C2N6C=CC(=CC6=N5)C)O)/C',
    inchikey: 'NZCRJKRKKOLAOJ-XRCRFVBUSA-N',
    cid: 6436173,
    estereo: { descripcion: 'Macrociclo con nueve estereocentros y varios dobles enlaces definidos: es un solo estereoisómero.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'rifaximina-xifaxan-550',
      producto: 'XIFAXAN (rifaximin) comprimidos recubiertos de 550 mg',
      titular: 'Salix Pharmaceuticals, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '550 mg de rifaximina por comprimido',
      excipientes: ['colloidal silicon dioxide', 'glycerol palmitostearate', 'microcrystalline cellulose', 'polyethylene glycol/macrogol', 'polyvinyl alcohol', 'red iron oxide', 'sodium starch glycolate', 'talc', 'titanium dioxide'],
      usos: { t: 'Reducir el riesgo de que reaparezca la encefalopatía hepática manifiesta y tratar el síndrome del intestino irritable con diarrea, en adultos. (El comprimido de 200 mg se usa para la diarrea del viajero por E. coli no invasiva.)', ref: rengR('1 INDICATIONS AND USAGE', 'Reduction in risk of overt hepatic encephalopathy (HE) recurrence in adults') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye también un comprimido de 200 mg con otros excipientes (entre ellos disodium edetate y propylene glycol).'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto rosa con 550 mg de rifaximina (sin sal), celulosa y palmitoestearato de glicerol.',
    usos: 'Encefalopatía hepática, síndrome del intestino irritable con diarrea y diarrea del viajero, según su etiqueta.',
    actua: 'Se une a la ARN polimerasa de las bacterias y frena su síntesis de proteínas; actúa dentro del intestino porque apenas se absorbe.',
    recorrido: 'Casi nada pasa a la sangre (concentraciones de pocos ng/mL); un 97 % de la dosis sale por las heces, casi toda sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la rifaximina.',
      sigue: 'La rifaximina sigue por la luz del intestino.',
      datos: [{ t: 'Los comprimidos recubiertos contienen 200 o 550 mg de rifaximina, un antibiótico no sistémico derivado de la rifamicina SV.', ref: rengR('11 DESCRIPTION', 'XIFAXAN tablets contain rifaximin, a non-aminoglycoside semi-synthetic, nonsystemic antibiotic derived from rifamycin SV') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['luz-intestinal'],
      llega: 'La rifaximina recorre el intestino.',
      ocurre: 'Apenas se absorbe: en personas sanas, el máximo en plasma (hacia la hora) es de solo 2,4-4 ng/mL. Por esa escasa exposición no sirve para infecciones fuera del intestino. Una comida grasa duplica lo poco que se absorbe. En la enfermedad hepática grave la exposición es muchas veces mayor.',
      sigue: 'Casi toda se queda en la luz intestinal; una mínima parte llega a la sangre.',
      simultaneo: 'Mientras una parte mínima se absorbe, casi toda la dosis actúa en la luz del intestino.',
      datos: [
        { t: 'En personas sanas, el máximo en plasma llega hacia la hora y la Cmax media es de 2,4 a 4 ng/mL con 550 mg.', ref: rengR(`${RENG_PK} › Absorption`, 'the mean C max ranged 2.4 to 4 ng/mL after a single dose and multiple doses of XIFAXAN 550 mg'), poblacion: 'personas sanas' },
        { t: 'No sirve para infecciones bacterianas sistémicas por su escasa exposición sistémica tras la toma oral.', ref: rengR(`${RENG_PK} › Travelers’ Diarrhea`, 'XIFAXAN is not suitable for treating systemic bacterial infections because of limited systemic exposure after oral administration') },
        { t: 'Una comida rica en grasa duplica el AUC sin cambiar la Cmax.', ref: rengR(`${RENG_PK} › Food Effect in Healthy Subjects`, 'increased the systemic exposure (AUC) of rifaximin by 2-fold but did not significantly affect C max'), condiciones: 'comida rica en grasa' },
        { t: 'En pacientes con antecedentes de encefalopatía hepática, la exposición fue unas 12 veces mayor que en personas sanas.', ref: rengR(`${RENG_PK} › Hepatic Encephalopathy`, 'Mean rifaximin exposure (AUCτ) in patients with a history of HE was approximately 12-fold higher than that observed in healthy subjects'), poblacion: 'encefalopatía hepática' }
      ],
      formas: ['disuelto'],
      ruta: ['duodeno', 'intestino-delgado', 'intestino-grueso']
    },
    distribucion: {
      organos: ['luz-intestinal', 'sangre'],
      llega: 'Casi toda la rifaximina está en la luz del intestino; muy poca, en la sangre.',
      ocurre: 'En el intestino se une a la subunidad β de la ARN polimerasa dependiente de ADN de las bacterias, bloquea la transcripción y frena su crecimiento. La pequeña parte que llega a la sangre se une a proteínas en un 67,5 %.',
      sigue: 'Lo absorbido se metaboliza; el resto sigue hacia las heces.',
      datos: [{ t: 'Se une moderadamente a proteínas plasmáticas: un 67,5 % en sanos y un 62 % con insuficiencia hepática.', ref: rengR(`${RENG_PK} › Distribution`, 'the mean protein binding ratio was 67.5% in healthy subjects and 62% in patients with hepatic impairment') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Subunidad β de la ARN polimerasa dependiente de ADN de las bacterias',
        efecto: 'Inhibe la síntesis de proteínas bacterianas y el crecimiento de las bacterias del intestino.',
        lugar: ['luz-intestinal'],
        datos: [{ t: 'Se une a la subunidad β de la ARN polimerasa dependiente de ADN bacteriana y bloquea un paso de la transcripción; así inhibe la síntesis de proteínas y el crecimiento bacteriano.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'acts by binding to the beta-subunit of bacterial DNA-dependent RNA polymerase blocking one of the steps in transcription') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La pequeña fracción absorbida llega a las enzimas que la transforman.',
      ocurre: 'In vitro la metaboliza sobre todo el CYP3A4. En el plasma, la rifaximina intacta es solo el 18 % de la radiactividad: lo absorbido se metaboliza ampliamente.',
      sigue: 'Los metabolitos salen sobre todo por la orina; la rifaximina no absorbida, por las heces.',
      datos: [
        { t: 'En un estudio in vitro se metabolizó sobre todo por CYP3A4.', ref: rengR(`${RENG_PK} › Metabolism`, 'In an in vitro study, rifaximin was metabolized mainly by CYP3A4') },
        { t: 'La rifaximina supuso el 18 % de la radiactividad en plasma: lo absorbido se metaboliza ampliamente.', ref: rengR(`${RENG_PK} › Metabolism`, 'Rifaximin accounted for 18% of radioactivity in plasma suggesting that the absorbed rifaximin undergoes extensive metabolism') }
      ],
      sinDatos: ['Órgano del metabolismo', 'Identidad y actividad de los metabolitos'],
      metabolitos: [{ nombre: 'Metabolitos de la fracción absorbida', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'the absorbed rifaximin undergoes extensive metabolism') }]
    },
    excrecion: {
      organos: ['heces', 'bilis', 'orina'],
      llega: 'La rifaximina llega al final del intestino.',
      ocurre: 'Con rifaximina marcada, un 96,6 % de la dosis salió por las heces, casi toda sin cambios, y solo un 0,32 % por la orina, sobre todo como metabolitos. Otro estudio la detectó en la bilis. Su semivida en sanos es de 5,6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras 400 mg de rifaximina marcada en voluntarios sanos, un 96,62 % de la radiactividad se recuperó en las heces, sobre todo como fármaco sin cambios, y un 0,32 % en la orina, sobre todo como metabolitos.', ref: rengR(`${RENG_PK} › Excretion`, '96.62% of the administered radioactivity was recovered in feces mostly as the unchanged drug and 0.32% was recovered in urine mostly as metabolites'), poblacion: 'voluntarios sanos' },
        { t: 'Un estudio aparte sugiere excreción biliar: se detectó rifaximina en la bilis de pacientes operados de la vesícula.', ref: rengR(`${RENG_PK} › Excretion`, 'Biliary excretion of rifaximin was suggested by a separate study') },
        { t: 'Su semivida media en estado estacionario es de 5,6 horas en sanos y de 6 horas en el intestino irritable con diarrea.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean half-life of rifaximin in healthy subjects at steady-state was 5.6 hours') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'cmax', nombre: 'Concentración máxima en plasma (550 mg, sanos)', valor: '2,4-4', unidad: 'ng/mL', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Absorption`, 'the mean C max ranged 2.4 to 4 ng/mL') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≈ 1', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'the mean time to reach peak rifaximin plasma concentrations was about an hour') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas (sanos)', valor: '67,5', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'the mean protein binding ratio was 67.5% in healthy subjects') },
    { magnitud: 'heces', nombre: 'Radiactividad en las heces', valor: '96,62', unidad: '% de la dosis', poblacion: 'voluntarios sanos', ref: rengR(`${RENG_PK} › Excretion`, '96.62% of the administered radioactivity was recovered in feces') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina', valor: '0,32', unidad: '% de la dosis', poblacion: 'voluntarios sanos', ref: rengR(`${RENG_PK} › Excretion`, '0.32% was recovered in urine mostly as metabolites') },
    { magnitud: 'semivida', nombre: 'Semivida media (estado estacionario, sanos)', valor: '5,6', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'at steady-state was 5.6 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'c5e8e2fd-7087-4b78-9181-cc259c0be2f1', 'XIFAXAN (rifaximin) tablet', 'XIFAXAN (Salix Pharmaceuticals, Inc.)', '50', '2026-01-07', '2026-11-10'), rengPubchem(6436173, 'Rifaximin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
