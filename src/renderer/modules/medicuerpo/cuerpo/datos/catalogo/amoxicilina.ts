import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-amoxicilina-aurobindo'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'amoxicilina',
    nombre: 'Amoxicilina',
    clase: 'Antibiótico betalactámico (aminopenicilina)',
    sinonimos: ['amoxicillin', 'Amoxil'],
    formula: 'C16H19N3O5S',
    masaMolar: 365.4,
    smiles: 'CC1([C@@H](N2[C@H](S1)[C@@H](C2=O)NC(=O)[C@@H](C3=CC=C(C=C3)O)N)C(=O)O)C',
    inchikey: 'LSQZJLSUYDQPKJ-NJBDSQKTSA-N',
    cid: 33613,
    iupac: 'ácido (2S,5R,6R)-6-[[(2R)-2-amino-2-(4-hidroxifenil)acetil]amino]-3,3-dimetil-7-oxo-4-tia-1-azabiciclo[3.2.0]heptano-2-carboxílico',
    estereo: { descripcion: 'Cuatro estereocentros con configuración definida (2S,5R,6R y 2R en la cadena lateral).' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'amoxicilina-aurobindo-capsulas',
      producto: 'Amoxicillin capsules, USP 250 y 500 mg',
      titular: 'Aurobindo Pharma Limited',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura de gelatina',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '250 y 500 mg de amoxicilina por cápsula',
      sal: { nombre: 'Amoxicilina trihidrato', ref: rengR('11 DESCRIPTION', 'contains 250 mg or 500 mg amoxicillin USP as the trihydrate') },
      excipientes: ['D&C Red No. 28', 'FD&C Blue No. 1', 'FD&C Red No. 40', 'gelatin', 'magnesium stearate', 'microcrystalline cellulose', 'sodium lauryl sulfate', 'titanium dioxide'],
      usos: { t: 'Infecciones por bacterias sensibles (sin betalactamasas) de oído, nariz y garganta, vías genitourinarias, piel y vías respiratorias bajas, y erradicación de Helicobacter pylori en adultos (en combinación).', ref: rengR('1 INDICATIONS AND USAGE', 'Infections of the Genitourinary Tract') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula de gelatina con amoxicilina trihidrato (el activo hidratado) y celulosa, estearato de magnesio y colorantes como excipientes.',
    usos: 'Infecciones bacterianas sensibles de vías respiratorias, oído, garganta, vías urinarias y piel, según su etiqueta.',
    actua: 'Mata a las bacterias que se multiplican impidiendo que construyan su pared celular.',
    recorrido: 'Resiste el ácido del estómago, se absorbe rápido (máximo en 1-2 horas), llega a casi todos los tejidos salvo el encéfalo y sale casi intacta por la orina en pocas horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula de gelatina baja por el esófago hasta el estómago.',
      ocurre: 'La gelatina se disuelve y libera el polvo granulado de amoxicilina, que es estable en el ácido del estómago.',
      sigue: 'La amoxicilina pasa al intestino y se absorbe.',
      datos: [
        { t: 'Cápsulas duras de gelatina de 250 y 500 mg rellenas de polvo granulado.', ref: rengR('3 DOSAGE FORMS AND STRENGTHS', 'hard gelatin capsule filled with white to off white granular powder') },
        { t: 'La amoxicilina es estable en presencia del ácido gástrico.', ref: rengR(`${RENG_PK} › Absorption`, 'Amoxicillin is stable in the presence of gastric acid') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la amoxicilina disuelta.',
      ocurre: 'Se absorbe rápidamente: el máximo en la sangre llega a las 1-2 horas (3,5-5 mcg/mL con 250 mg y 5,5-7,5 mcg/mL con 500 mg).',
      sigue: 'Pasa a la sangre y se reparte.',
      datos: [
        { t: 'Se absorbe rápidamente tras la administración oral.', ref: rengR(`${RENG_PK} › Absorption`, 'is rapidly absorbed after oral administration') },
        { t: 'Con cápsulas de 250 y 500 mg, el máximo en sangre llega a las 1-2 horas: 3,5-5 mcg/mL y 5,5-7,5 mcg/mL.', ref: rengR(`${RENG_PK} › Absorption`, 'Orally administered doses of 250 mg and 500 mg amoxicillin capsules result in average peak blood levels 1 to 2 hours after administration') },
        { t: 'El efecto de la comida solo se ha estudiado en parte (con otras formulaciones, al inicio de una comida ligera).', ref: rengR(`${RENG_PK} › Absorption`, 'has been partially investigated') },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Efecto de la comida con estas cápsulas', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos'],
      llega: 'La amoxicilina llega a la sangre.',
      ocurre: 'Se une poco a proteínas (un 20 %) y difunde a la mayoría de los tejidos y líquidos, salvo el encéfalo y el líquido cefalorraquídeo (si las meninges no están inflamadas). Donde hay bacterias sensibles que se multiplican, impide que formen su pared y mueren.',
      sigue: 'Los riñones la retiran rápidamente de la sangre.',
      simultaneo: 'A la vez que actúa, se va eliminando por la orina: tiene una semivida de una hora.',
      datos: [
        { t: 'Difunde con facilidad a la mayoría de tejidos y líquidos, excepto el encéfalo y el líquido cefalorraquídeo, salvo con las meninges inflamadas.', ref: rengR(`${RENG_PK} › Distribution`, 'Amoxicillin diffuses readily into most body tissues and fluids, with the exception of brain and spinal fluid') },
        { t: 'En el suero, se une a proteínas en un 20 % aproximadamente.', ref: rengR(`${RENG_PK} › Distribution`, 'amoxicillin is approximately 20% protein-bound') }
      ],
      accion: {
        diana: 'Síntesis de la pared celular bacteriana',
        efecto: 'Bactericida: mata a las bacterias sensibles mientras se multiplican.',
        lugar: ['sitio-infeccion', 'vias-respiratorias', 'vias-urinarias', 'piel'],
        datos: [
          { t: 'Como la penicilina, es bactericida frente a bacterias sensibles en fase de multiplicación: inhibe la biosíntesis de la pared celular, lo que causa la muerte de la bacteria.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'It acts through the inhibition of cell wall biosynthesis that leads to the death of the bacteria') },
          { t: 'Las bacterias resisten sobre todo con betalactamasas, enzimas que rompen el anillo betalactámico y la inactivan.', ref: rengR('12.4 Microbiology › Resistance', 'Resistance to amoxicillin is mediated primarily through enzymes called beta-lactamases') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La amoxicilina circula por la sangre.',
      ocurre: 'La etiqueta no describe metabolitos: la mayor parte se excreta sin cambios en la orina.',
      sigue: 'Llega intacta a los riñones.',
      datos: [{ t: 'La mayor parte de la amoxicilina se excreta sin cambios en la orina.', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'most of the amoxicillin is excreted unchanged in the urine') }],
      sinDatos: ['Metabolitos y lugar del metabolismo de la fracción que no sale sin cambios'],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La amoxicilina llega a los riñones.',
      ocurre: 'Un 60 % de la dosis sale por la orina en 6-8 horas, casi toda sin cambios; su semivida es de 61 minutos. El probenecid, al competir por la excreción, la retrasa.',
      sigue: 'Fin del recorrido: hay niveles detectables en la sangre hasta unas 8 horas.',
      datos: [
        { t: 'La semivida de la amoxicilina es de 61,3 minutos.', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'The half-life of amoxicillin is 61.3 minutes') },
        { t: 'Alrededor del 60 % de una dosis oral se excreta en la orina en 6-8 horas.', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'Approximately 60% of an orally administered dose of amoxicillin is excreted in the urine within 6 to 8 hours') },
        { t: 'Como sale casi toda sin cambios por la orina, el probenecid puede retrasar su excreción.', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'its excretion can be delayed by concurrent administration of probenecid') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo en sangre (cápsulas)', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'result in average peak blood levels 1 to 2 hours after administration') },
    { magnitud: 'cmax', nombre: 'Máximo en sangre con 500 mg', valor: '5,5-7,5', unidad: 'mcg/mL', presentacion: 'cápsula de 500 mg', ref: rengR(`${RENG_PK} › Absorption`, '5.5 mcg/mL to 7.5 mcg/mL') },
    { magnitud: 'union', nombre: 'Unión a proteínas séricas', valor: '≈ 20', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 20% protein-bound') },
    { magnitud: 'semivida', nombre: 'Semivida', valor: '61,3', unidad: 'min', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'The half-life of amoxicillin is 61.3 minutes') },
    { magnitud: 'orina', nombre: 'Excretado en la orina en 6-8 h', valor: '≈ 60', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'Approximately 60% of an orally administered dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '7e3a4517-1934-4e03-b96b-4ad65ab076c5', 'Amoxicillin capsule (Aurobindo Pharma Limited)', 'Amoxicillin capsules USP (Aurobindo Pharma Limited)', '20', '2024-02-05', '2026-11-09'), rengPubchem(33613, 'Amoxicillin', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
