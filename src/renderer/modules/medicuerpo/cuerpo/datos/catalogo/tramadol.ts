import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-tramadol-rising'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'tramadol',
    nombre: 'Tramadol',
    clase: 'Analgésico opioide (agonista μ e inhibidor de la recaptación de noradrenalina y serotonina)',
    sinonimos: ['tramadol', 'tramadol hydrochloride'],
    formula: 'C16H25NO2',
    masaMolar: 263.37,
    smiles: 'CN(C)C[C@H]1CCCC[C@@]1(C2=CC(=CC=C2)OC)O',
    inchikey: 'TVYLLZQTGLZFBW-ZBFHGGJFSA-N',
    cid: 33741,
    estereo: {
      descripcion: 'Dos estereocentros. El medicamento es el cis-tramadol racémico (±): mezcla a partes iguales de (1R,2R) y (1S,2S). El registro principal de PubChem dibuja el (1R,2R).',
      enantiomeros: [
        { nombre: '(1R,2R)-tramadol', smiles: 'CN(C)C[C@H]1CCCC[C@@]1(C2=CC(=CC=C2)OC)O', cid: 33741 },
        { nombre: '(1S,2S)-tramadol', smiles: 'CN(C)C[C@@H]1CCCC[C@]1(C2=CC(=CC=C2)OC)O', cid: 667511 }
      ]
    },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'tramadol-rising',
      producto: 'Tramadol hydrochloride comprimidos de 25, 50 y 100 mg (genérico)',
      titular: 'Rising Pharma Holdings, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25, 50 y 100 mg de hidrocloruro de tramadol (21,95, 43,9 y 87,8 mg de tramadol) por comprimido',
      sal: { nombre: 'Hidrocloruro de tramadol (racémico)', ref: rengR('11 DESCRIPTION', 'contain 25 mg, 50 mg and 100 mg of tramadol hydrochloride (equivalent to 21.95 mg, 43.9 mg and 87.8 mg of tramadol) respectively') },
      excipientes: ['colloidal silicon dioxide', 'corn starch', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'sodium starch glycolate', 'recubrimiento opadry white: hypromellose, macrogol, polysorbate 80, titanium dioxide'],
      usos: { t: 'Dolor en adultos lo bastante intenso para necesitar un opioide y cuando otras opciones no bastan. Por los riesgos de adicción, abuso y sobredosis se reserva para cuando las alternativas fallan.', ref: rengR('1 INDICATIONS AND USAGE', 'Tramadol hydrochloride tablets are indicated in adults for the management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate') },
      fuente: RENG_F,
      advertencias: [{ titulo: 'Adicción, abuso y sobredosis', texto: 'La etiqueta advierte de riesgos de adicción, abuso, uso indebido, sobredosis y muerte con cualquier dosis o duración del tratamiento.', organos: ['encefalo'], ref: rengR('1 INDICATIONS AND USAGE', 'Because of the risks of addiction, abuse, misuse, overdose, and death') }]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con hidrocloruro de tramadol (la sal del activo racémico), almidón de maíz, lactosa y celulosa.',
    usos: 'Dolor intenso en adultos cuando otras opciones no bastan, según su etiqueta.',
    actua: 'Él y, con más fuerza, su metabolito M1 (formado por el CYP2D6) se unen a los receptores opioides μ; además frena un poco la recaptación de noradrenalina y serotonina.',
    recorrido: 'Biodisponibilidad del 75 % (máximo a las 2 horas), se reparte bien por los tejidos, el hígado lo transforma (CYP2D6 y CYP3A4) y la orina elimina un 30 % sin cambios y un 60 % como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el hidrocloruro de tramadol, muy soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El hidrocloruro de tramadol es muy soluble en agua y metanol.', ref: rengR('11 DESCRIPTION', 'It is freely soluble in water and in methanol') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el tramadol disuelto.',
      ocurre: 'La biodisponibilidad absoluta de 100 mg es de un 75 %. El tramadol alcanza su máximo a las 2 horas y su metabolito M1 a las 3. Ambos enantiómeros siguen un curso paralelo. La comida no cambia la absorción.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta media de 100 mg es de un 75 %; el máximo de tramadol y de M1 llega a las 2 y 3 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'The mean absolute bioavailability of a 100 mg oral dose is approximately 75%') },
        { t: 'La comida no afecta de forma significativa a la velocidad ni a la cantidad absorbida.', ref: rengR(`${RENG_PK} › Food Effects`, 'with food does not significantly affect its rate or extent of absorption') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'encefalo', 'nervios'],
      llega: 'El tramadol y su metabolito M1 circulan por la sangre.',
      ocurre: 'Solo un 20 % va unido a proteínas y su volumen es grande (2,6-2,9 L/kg). En el sistema nervioso, el tramadol y sobre todo el M1 se unen a los receptores opioides μ, y el tramadol frena un poco la recaptación de noradrenalina y serotonina. La analgesia empieza hacia la hora y es máxima a las 2-3 horas.',
      sigue: 'El hígado lo metaboliza.',
      simultaneo: 'El metabolito activo M1 se forma en el hígado mientras el tramadol ya actúa: los dos contribuyen al efecto.',
      datos: [
        { t: 'Volumen de distribución de 2,6 L/kg en varones y 2,9 L/kg en mujeres tras 100 mg intravenosos; unión a proteínas del 20 %.', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of tramadol to human plasma proteins is approximately 20%') }
      ],
      accion: {
        diana: 'Receptores opioides μ (tramadol y M1) y transportadores de noradrenalina y serotonina',
        efecto: 'Analgesia de acción central; también deprime la respiración en el tronco encefálico y frena la motilidad intestinal.',
        lugar: ['encefalo', 'nervios'],
        datos: [
          { t: 'Su efecto analgésico se atribuye a la unión a receptores opioides μ y a una débil inhibición de la recaptación de noradrenalina y serotonina.', ref: rengR('12.1 Mechanism of Action', 'the analgesic effect of tramadol is believed to be due to both binding to μ-opioid receptors and weak inhibition of re-uptake of norepinephrine and serotonin') },
          { t: 'En animales, el metabolito M1 es hasta 6 veces más potente como analgésico y 200 veces más en la unión μ.', ref: rengR('12.1 Mechanism of Action', 'M1 is up to 6 times more potent than tramadol in producing analgesia and 200 times more potent in μ- opioid binding') },
          { t: 'Produce depresión respiratoria por acción directa sobre los centros respiratorios del tronco encefálico.', ref: rengR('12.2 Pharmacodynamics', 'Tramadol produces respiratory depression by direct action on brain stem respiratory centers') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El tramadol llega al hígado.',
      ocurre: 'Se metaboliza ampliamente por N- y O-desmetilación (CYP2D6 y CYP3A4) y por glucuronidación o sulfatación. El CYP2D6 forma el metabolito activo M1; en un 7 % de la población esa enzima funciona menos, y el M1 baja un 40 %.',
      sigue: 'El tramadol y sus metabolitos van a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente por varias vías, entre ellas CYP2D6 y CYP3A4, y por conjugación; las vías principales son la N- y O-desmetilación y la glucuronidación o sulfatación en el hígado.', ref: rengR(`${RENG_PK} › Metabolism`, 'The major metabolic pathways appear to be N - and O- demethylation and glucuronidation or sulfation in the liver') },
        { t: 'La formación de M1 depende del CYP2D6; un 7 % de la población tiene menos actividad de esa enzima.', ref: rengR(`${RENG_PK} › Metabolism`, 'Approximately 7% of the population has reduced activity of the CYP2D6 isoenzyme of cytochrome P-450') },
        { t: 'En metabolizadores lentos del CYP2D6, el tramadol fue un 20 % mayor y el M1 un 40 % menor.', ref: rengR(`${RENG_PK} › Metabolism`, 'concentrations of tramadol were approximately 20% higher in "poor metabolizers" versus "extensive metabolizers", while M1 concentrations were 40% lower'), poblacion: 'metabolizadores lentos del CYP2D6' }
      ],
      metabolitos: [
        { nombre: 'O-desmetiltramadol (M1)', nombreFuente: 'O -desmethyltramadol, denoted M1', actividad: 'activo', nota: 'Formado por el CYP2D6; más potente que el tramadol sobre los receptores μ.', ref: rengR(`${RENG_PK} › Metabolism`, 'is pharmacologically active in animal models') },
        { nombre: 'Metabolitos N-desmetilados y conjugados (glucurónidos y sulfatos)', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'glucuronidation or sulfation in the liver') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El tramadol y sus metabolitos llegan a los riñones.',
      ocurre: 'Un 30 % de la dosis sale por la orina sin cambios y un 60 % como metabolitos. Las semividas son de 6,3 horas (tramadol) y 7,4 horas (M1).',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina sobre todo por metabolismo hepático y los metabolitos salen sobre todo por los riñones.', ref: rengR(`${RENG_PK} › Elimination`, 'Tramadol is eliminated primarily through metabolism by the liver and the metabolites are eliminated primarily by the kidneys') },
        { t: 'Un 30 % de la dosis se excreta en la orina sin cambios y un 60 % como metabolitos.', ref: rengR(`${RENG_PK} › Metabolism`, 'Approximately 30% of the dose is excreted in the urine as unchanged drug, whereas 60% of the dose is excreted as metabolites') },
        { t: 'Las semividas terminales del tramadol y del M1 racémicos son de 6,3 ± 1,4 y 7,4 ± 1,4 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean terminal plasma elimination half-lives of racemic tramadol and racemic M1 are 6.3 ± 1.4 and 7.4 ± 1.4 hours') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (100 mg)', valor: '≈ 75', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 75%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo (tramadol; M1)', valor: '2; 3', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'occurs at two and three hours, respectively') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (IV; varones, mujeres)', valor: '2,6; 2,9', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'The volume of distribution of tramadol was 2.6 and 2.9 liters/kg in male and female subjects') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 20', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 20%') },
    { magnitud: 'semivida', nombre: 'Semivida terminal (tramadol racémico)', valor: '6,3 ± 1,4', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'are 6.3 ± 1.4 and 7.4 ± 1.4 hours') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina', valor: '≈ 30', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism`, 'Approximately 30% of the dose is excreted in the urine as unchanged drug') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'b5852b90-e415-47ef-8f73-87266b58e033', 'TRAMADOL HYDROCHLORIDE tablet', 'Tramadol hydrochloride (Rising Pharma Holdings, Inc.)', '5', '2026-10-23', '2026-11-10'), rengPubchem(33741, 'Tramadol', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
