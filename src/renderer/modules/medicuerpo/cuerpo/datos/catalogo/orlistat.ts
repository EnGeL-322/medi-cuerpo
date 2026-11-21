import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-xenical'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'orlistat',
    nombre: 'Orlistat',
    clase: 'Inhibidor de las lipasas gastrointestinales (acción local)',
    sinonimos: ['orlistat', 'Xenical'],
    formula: 'C29H53NO5',
    masaMolar: 495.7,
    smiles: 'CCCCCCCCCCC[C@@H](C[C@H]1[C@@H](C(=O)O1)CCCCCC)OC(=O)[C@H](CC(C)C)NC=O',
    inchikey: 'AHLBNYSZXLDEJQ-FWEHEUNISA-N',
    cid: 3034010,
    estereo: { descripcion: 'Cuatro estereocentros: es un solo diastereoisómero, ópticamente activo.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'orlistat-xenical',
      producto: 'XENICAL (orlistat) cápsulas de 120 mg',
      titular: 'H2-Pharma LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura con gránulos',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '120 mg de orlistat por cápsula, en forma de gránulos',
      excipientes: ['microcrystalline cellulose', 'povidone', 'sodium lauryl sulfate', 'sodium starch glycolate', 'talc', 'cápsula: FD&C Blue No. 2, gelatin, titanium dioxide, tinta de impresión'],
      usos: { t: 'Junto con una dieta baja en calorías y más actividad física, reducir el exceso de peso y mantenerlo en adultos y adolescentes desde 12 años con obesidad, y en adultos con sobrepeso y alguna enfermedad asociada.', ref: rengR('1 INDICATIONS AND USAGE', 'XENICAL is indicated in combination with a reduced calorie diet and increased physical activity to reduce excess body weight') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula con gránulos de orlistat (sin sal), celulosa, povidona y talco.',
    usos: 'Obesidad y sobrepeso con enfermedades asociadas, junto con dieta y ejercicio, según su etiqueta.',
    actua: 'En la luz del estómago y del intestino delgado bloquea las lipasas que digieren las grasas: parte de la grasa de la comida no se absorbe.',
    recorrido: 'Casi no pasa a la sangre: actúa dentro del tubo digestivo y un 97 % sale por las heces, la mayor parte sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y deja libres los gránulos de orlistat, que es prácticamente insoluble en agua.',
      sigue: 'El orlistat se reparte con la comida por el estómago y el intestino delgado.',
      datos: [
        { t: 'Cada cápsula contiene una formulación en gránulos con 120 mg de orlistat.', ref: rengR('11 DESCRIPTION', 'Each XENICAL capsule contains a pellet formulation consisting of 120 mg of the active ingredient, orlistat') },
        { t: 'El orlistat es prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'Orlistat is practically insoluble in water') }
      ]
    },
    absorcion: {
      organos: ['estomago', 'intestino-delgado', 'luz-intestinal'],
      llega: 'El orlistat está en la luz del estómago y del intestino delgado.',
      ocurre: 'Apenas se absorbe: en la sangre el orlistat intacto está casi en el límite de detección (menos de 5-10 ng/mL) y no se acumula.',
      sigue: 'Casi todo sigue por el intestino, donde actúa.',
      simultaneo: 'Mientras recorre el estómago y el intestino delgado, el orlistat está actuando sobre las lipasas de la comida.',
      datos: [
        { t: 'La exposición sistémica es mínima: tras 360 mg marcados, el orlistat intacto en plasma estaba cerca del límite de detección (menos de 5 ng/mL).', ref: rengR(`${RENG_PK} › Absorption`, 'Systemic exposure to orlistat is minimal') },
        { t: 'En estudios terapéuticos, el orlistat intacto se detectó de forma esporádica y en concentraciones bajas, sin acumulación.', ref: rengR(`${RENG_PK} › Absorption`, 'detection of intact orlistat in plasma was sporadic and concentrations were low') }
      ],
      formas: ['disuelto'],
      ruta: ['estomago', 'duodeno', 'intestino-delgado']
    },
    distribucion: {
      organos: ['luz-intestinal', 'sangre'],
      llega: 'Casi todo el orlistat sigue en la luz del tubo digestivo; muy poco llega a la sangre.',
      ocurre: 'En la luz del estómago y del intestino delgado se une de forma covalente a la serina activa de las lipasas gástrica y pancreática y las inactiva: los triglicéridos de la comida no se descomponen y no se absorben. La pequeña parte que llega a la sangre va unida a proteínas en más del 99 %.',
      sigue: 'Lo absorbido se metaboliza; lo demás sigue hacia las heces.',
      datos: [{ t: 'In vitro, más del 99 % se une a proteínas plasmáticas (lipoproteínas y albúmina).', ref: rengR(`${RENG_PK} › Distribution`, 'In vitro orlistat was >99% bound to plasma proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Lipasas gástrica y pancreática (unión covalente a su serina activa)',
        efecto: 'Las grasas de la dieta no se hidrolizan a ácidos grasos absorbibles: se absorben menos calorías.',
        lugar: ['estomago', 'luz-intestinal'],
        datos: [
          { t: 'Actúa en la luz del estómago y del intestino delgado formando un enlace covalente con la serina activa de las lipasas gástricas y pancreáticas.', ref: rengR('12.1 Mechanism of Action', 'It exerts its therapeutic activity in the lumen of the stomach and small intestine') },
          { t: 'Las enzimas inactivadas no pueden convertir los triglicéridos de la dieta en ácidos grasos libres y monoglicéridos absorbibles; los triglicéridos no digeridos no se absorben.', ref: rengR('12.1 Mechanism of Action', 'Undigested triglycerides are not absorbed, resulting in a caloric deﬁcit') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La pequeña fracción absorbida llega a las enzimas que la transforman.',
      ocurre: 'Se forman M1 (al abrirse el anillo β-lactona) y M3 (al perder después la cadena de N-formil-leucina). Inhiben las lipasas entre 1000 y 2500 veces menos que el orlistat: se consideran sin efecto.',
      sigue: 'El orlistat y sus metabolitos se excretan sobre todo por la bilis y las heces.',
      datos: [{ t: 'Los metabolitos M1 y M3 suponen un 42 % de la radiactividad plasmática; tienen el anillo β-lactona abierto y una actividad inhibidora de lipasas muy débil (1000 y 2500 veces menor).', ref: rengR(`${RENG_PK} › Metabolism`, 'M1 and M3 have an open ß-lactone ring and extremely weak lipase inhibitory activity') }],
      sinDatos: ['Órgano y enzimas del metabolismo'],
      metabolitos: [
        { nombre: 'M1 (β-lactona hidrolizada)', nombreFuente: 'M1 (the hydrolyzed ß-lactone ring product of orlistat)', actividad: 'inactivo', nota: '1000 veces menos activo; semivida de unas 3 horas.', ref: rengR(`${RENG_PK} › Metabolism`, 'M1 (the hydrolyzed ß-lactone ring product of orlistat)') },
        { nombre: 'M3 (M1 sin la cadena de N-formil-leucina)', nombreFuente: 'M3', actividad: 'inactivo', nota: '2500 veces menos activo; semivida de unas 13,5 horas.', ref: rengR(`${RENG_PK} › Metabolism`, 'these metabolites are considered pharmacologically inconsequential') }
      ]
    },
    excrecion: {
      organos: ['heces', 'bilis'],
      llega: 'El orlistat no absorbido llega al final del intestino.',
      ocurre: 'La vía principal es la salida por las heces del fármaco no absorbido: un 97 % de la dosis, un 83 % de él sin cambios. El orlistat y sus metabolitos también se excretan por la bilis. Por la orina sale menos del 2 %. La excreción se completa en 3-5 días.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La excreción fecal del fármaco no absorbido es la vía principal; el orlistat y sus metabolitos también se excretan por la bilis.', ref: rengR(`${RENG_PK} › Excretion`, 'fecal excretion of the unabsorbed drug was found to be the major route of elimination') },
        { t: 'Un 97 % de la radiactividad se excretó en las heces (un 83 % de ella como orlistat sin cambios) y menos del 2 % en la orina; la excreción completa tardó 3-5 días.', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 97% of the administered radioactivity was excreted in feces; 83% of that was found to be unchanged orlistat') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'cmax', nombre: 'Orlistat intacto en plasma (estudios terapéuticos)', valor: '< 10', unidad: 'ng/mL', ref: rengR(`${RENG_PK} › Absorption`, 'concentrations were low (<10 ng/mL or 0.02 µM)') },
    { magnitud: 'union', nombre: 'Unión a proteínas (in vitro)', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, '>99% bound to plasma proteins') },
    { magnitud: 'heces', nombre: 'Radiactividad en las heces', valor: '≈ 97', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 97% of the administered radioactivity was excreted in feces') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina', valor: '< 2', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'The cumulative renal excretion of total radioactivity was <2% of the given dose') },
    { magnitud: 'semivida', nombre: 'Semivida del orlistat absorbido', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'the half-life of the absorbed orlistat is in the range of 1 to 2 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '6240792b-9224-2d10-e053-2a91aa0a2c3e', 'XENICAL (orlistat) capsule', 'XENICAL (H2-Pharma LLC)', '11', '2026-11-03', '2026-11-10'), rengPubchem(3034010, 'Orlistat', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
