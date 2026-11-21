import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-synthroid'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'levotiroxina',
    nombre: 'Levotiroxina',
    clase: 'Hormona tiroidea sintética (L-tiroxina, T4)',
    sinonimos: ['levothyroxine', 'L-tiroxina', 'T4', 'Synthroid'],
    formula: 'C15H11I4NO4',
    masaMolar: 776.87,
    smiles: 'C1=C(C=C(C(=C1I)OC2=CC(=C(C(=C2)I)O)I)I)C[C@@H](C(=O)O)N',
    inchikey: 'XUIIKFGFIJCVMT-LBPRGKRZSA-N',
    cid: 5819,
    iupac: 'ácido (2S)-2-amino-3-[4-(4-hidroxi-3,5-diyodofenoxi)-3,5-diyodofenil]propanoico',
    estereo: { descripcion: 'Un estereocentro (configuración S, la forma L): químicamente idéntica a la T4 de la glándula tiroides.' },
    area: 'Hormonas y endocrino'
  },
  presentaciones: [
    {
      id: 'levotiroxina-synthroid',
      producto: 'SYNTHROID (levothyroxine sodium tablets, USP), de 25 a 300 mcg',
      titular: 'AbbVie Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25, 50, 75, 88, 100, 112, 125, 137, 150, 175, 200 y 300 mcg de levotiroxina sódica por comprimido',
      sal: { nombre: 'Levotiroxina sódica (sal sódica de la L-3,3′,5,5′-tetrayodotironina), hidratada', ref: rengR('11 DESCRIPTION', 'contains synthetic crystalline L-3,3\',5,5\'-tetraiodothyronine sodium salt') },
      excipientes: ['acacia', "confectioner's sugar (contains corn starch)", 'lactose monohydrate', 'magnesium stearate', 'povidone', 'talc', 'colorantes distintos en cada concentración (aluminum lakes)'],
      usos: { t: 'Sustituir la hormona en el hipotiroidismo (primario, secundario o terciario, congénito o adquirido) y, junto a cirugía y yodo radiactivo, suprimir la TSH en algunos cánceres de tiroides.', ref: rengR('1 INDICATIONS AND USAGE', 'as a replacement therapy in primary (thyroidal), secondary (pituitary), and tertiary (hypothalamic) congenital or acquired hypothyroidism') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con microgramos de levotiroxina sódica, la misma T4 que fabrica la tiroides, con azúcar, lactosa y almidón como excipientes.',
    usos: 'Hipotiroidismo y supresión de la TSH en ciertos cánceres de tiroides, según su etiqueta.',
    actua: 'Sustituye a la T4 propia: en los tejidos se convierte en T3, que entra en el núcleo de las células y activa genes.',
    recorrido: 'Se absorbe un 40-80 % en yeyuno e íleon, viaja más del 99 % unida a proteínas, se desyoda en hígado, riñón y otros tejidos y sale sobre todo por los riñones (un 20 % por las heces).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago, mejor en ayunas.',
      ocurre: 'Se disgrega y libera la levotiroxina sódica.',
      sigue: 'La hormona pasa al intestino delgado.',
      datos: [
        { t: 'Comprimidos para administración oral de 25 a 300 mcg; cada concentración cumple el ensayo de disolución USP 3.', ref: rengR('11 DESCRIPTION', 'Each tablet strength meets USP Dissolution Test 3') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: ['intestino-delgado'],
      llega: 'La levotiroxina disuelta llega al yeyuno y al íleon.',
      ocurre: 'Se absorbe entre un 40 y un 80 %, sobre todo en el yeyuno y la parte alta del íleon. El ayuno la aumenta; la reducen la soja, la fibra, los síndromes de malabsorción, la edad y muchos fármacos y alimentos.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La absorción de la T4 oral desde el tubo digestivo va del 40 % al 80 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Absorption of orally administered T4 from the gastrointestinal tract ranges from 40% to 80%') },
        { t: 'La mayor parte de la dosis se absorbe en el yeyuno y la parte alta del íleon.', ref: rengR(`${RENG_PK} › Absorption`, 'The majority of the SYNTHROID dose is absorbed from the jejunum and upper ileum') },
        { t: 'La biodisponibilidad relativa de los comprimidos frente a una solución oral es de un 93 %.', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 93%') },
        { t: 'El ayuno aumenta la absorción; los síndromes de malabsorción, la soja y la fibra la reducen.', ref: rengR(`${RENG_PK} › Absorption`, 'T4 absorption is increased by fasting, and decreased in malabsorption syndromes and by certain foods such as soybeans'), condiciones: 'ayuno frente a comida' }
      ]
    },
    distribucion: {
      organos: ['sangre', 'tejidos'],
      llega: 'La T4 absorbida circula por la sangre.',
      ocurre: 'Más del 99 % va unida a proteínas (globulina transportadora de tiroxina, prealbúmina y albúmina); solo la pequeña fracción libre es activa. En los tejidos, la T4 se desyoda a T3, que entra en el núcleo, se une a receptores tiroideos sobre el ADN y activa genes.',
      sigue: 'La T4 se va desyodando poco a poco, sobre todo en el hígado.',
      simultaneo: 'La conversión de T4 en T3 es a la vez metabolismo y activación: la hormona activa es sobre todo la T3.',
      datos: [
        { t: 'Las hormonas tiroideas circulan unidas a proteínas plasmáticas en más del 99 % (TBG, TBPA y albúmina).', ref: rengR(`${RENG_PK} › Distribution`, 'Circulating thyroid hormones are greater than 99% bound to plasma proteins') },
        { t: 'Solo la hormona no unida es metabólicamente activa.', ref: rengR(`${RENG_PK} › Distribution`, 'Only unbound hormone is metabolically active') }
      ],
      accion: {
        diana: 'Receptores de hormona tiroidea en el núcleo celular (unidos al ADN)',
        efecto: 'Mantiene niveles normales de T4 cuando faltan: controla la transcripción de genes y la síntesis de proteínas en casi todos los tejidos.',
        lugar: ['tejidos'],
        datos: [
          { t: 'T3 y T4 difunden al núcleo de la célula y se unen a receptores tiroideos unidos al ADN; el complejo activa la transcripción de genes.', ref: rengR('12.1 Mechanism of Action', 'diffuse into the cell nucleus and bind to thyroid receptor proteins attached to DNA') },
          { t: 'Los efectos fisiológicos los produce sobre todo la T3, que en un 80 % procede de la desyodación de T4 en tejidos periféricos.', ref: rengR('12.1 Mechanism of Action', 'The physiological actions of thyroid hormones are produced predominantly by T3') },
          { t: 'Ejerce el mismo efecto que la T4 propia y mantiene niveles normales cuando hay deficiencia.', ref: rengR('12.2 Pharmacodynamics', 'exerts the same physiologic effect as endogenous T4') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado', 'rinones', 'tejidos', 'bilis'],
      llega: 'La T4 llega al hígado, al riñón y a otros tejidos.',
      ocurre: 'Se elimina despacio. Su vía principal es la desyodación sucesiva: un 80 % de la dosis diaria se convierte en partes iguales en T3 (activa) y T3 inversa, que luego pasan a diyodotironina. El hígado es el lugar principal de degradación. También se conjuga con glucurónidos y sulfatos que van a la bilis y al intestino, donde se reabsorben en parte (recirculación enterohepática).',
      sigue: 'Los productos se eliminan por los riñones y, en parte, por las heces.',
      datos: [
        { t: 'La vía principal de su metabolismo es la desyodación sucesiva.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'The major pathway of thyroid hormone metabolism is through sequential deiodination') },
        { t: 'El hígado es el lugar principal de degradación de T4 y T3; la desyodación de T4 ocurre también en el riñón y otros tejidos.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'The liver is the major site of degradation for both T4 and T3') },
        { t: 'Alrededor del 80 % de la dosis diaria de T4 se desyoda a cantidades iguales de T3 y T3 inversa.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'Approximately 80% of the daily dose of T4 is deiodinated to yield equal amounts of T3 and reverse T3 (rT3)') },
        { t: 'También se conjuga con glucurónidos y sulfatos, se excreta a la bilis y al intestino y sufre recirculación enterohepática.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'excreted directly into the bile and gut where they undergo enterohepatic recirculation') }
      ],
      metabolitos: [
        { nombre: 'T3 (triyodotironina)', nombreFuente: 'T3', actividad: 'activo', nota: 'La forma que produce sobre todo los efectos.', smiles: 'C1=CC(=C(C=C1OC2=C(C=C(C=C2I)C[C@@H](C(=O)O)N)I)I)O', cid: 5920, ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'Approximately 80% of circulating T3 is derived from peripheral T4 by monodeiodination') },
        { nombre: 'T3 inversa (rT3)', nombreFuente: 'reverse T3 (rT3)', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'equal amounts of T3 and reverse T3 (rT3)') },
        { nombre: 'Diyodotironina', nombreFuente: 'diiodothyronine', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'T3 and rT3 are further deiodinated to diiodothyronine') },
        { nombre: 'Conjugados con glucurónidos y sulfatos', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'conjugation with glucuronides and sulfates') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'intestino-grueso', 'heces'],
      llega: 'Llegan a los riñones y al colon las hormonas y sus conjugados.',
      ocurre: 'Se eliminan sobre todo por los riñones. Parte de la hormona conjugada llega intacta al colon: un 20 % de la T4 sale con las heces. La excreción urinaria de T4 disminuye con la edad.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Las hormonas tiroideas se eliminan principalmente por los riñones.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Thyroid hormones are primarily eliminated by the kidneys') },
        { t: 'Una parte de la hormona conjugada llega sin cambios al colon y se elimina con las heces: alrededor del 20 % de la T4.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Approximately 20% of T4 is eliminated in the stool') },
        { t: 'La excreción urinaria de T4 disminuye con la edad.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Urinary excretion of T4 decreases with age') }
      ]
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción desde el tubo digestivo', valor: '40-80', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'ranges from 40% to 80%') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad relativa frente a solución oral', valor: '≈ 93', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 93%') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'greater than 99% bound to plasma proteins') },
    { magnitud: 'otra', nombre: 'Dosis diaria de T4 desyodada a T3 y rT3', valor: '≈ 80', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'Approximately 80% of the daily dose of T4 is deiodinated') },
    { magnitud: 'heces', nombre: 'T4 eliminada con las heces', valor: '≈ 20', unidad: '% del total', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Approximately 20% of T4 is eliminated in the stool') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '1e11ad30-1041-4520-10b0-8f9d30d30fcc', 'SYNTHROID (levothyroxine sodium) tablet', 'SYNTHROID (AbbVie Inc.)', '1537', '2024-02-29', '2026-11-09'), rengPubchem(5819, 'Levothyroxine', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
