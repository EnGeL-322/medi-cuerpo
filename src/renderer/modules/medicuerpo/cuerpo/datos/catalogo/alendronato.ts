import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-fosamax'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'alendronato',
    nombre: 'Ácido alendrónico (alendronato)',
    clase: 'Bisfosfonato (inhibidor de la resorción ósea por osteoclastos)',
    sinonimos: ['alendronate', 'alendronic acid', 'alendronato', 'Fosamax'],
    formula: 'C4H13NO7P2',
    masaMolar: 249.1,
    smiles: 'C(CC(O)(P(=O)(O)O)P(=O)(O)O)CN',
    inchikey: 'OGSPWJRAVKPPFI-UHFFFAOYSA-N',
    cid: 2088,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'alendronato-fosamax-70',
      producto: 'FOSAMAX (alendronate sodium) comprimidos de 70 mg',
      titular: 'Organon LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '91,37 mg de alendronato monosódico trihidrato, equivalente a 70 mg de ácido alendrónico',
      sal: { nombre: 'Alendronato monosódico trihidrato', ref: rengR('11 DESCRIPTION', 'contain 91.37 mg of alendronate monosodium salt trihydrate, which is the molar equivalent of 70 mg of free acid') },
      excipientes: ['microcrystalline cellulose', 'anhydrous lactose', 'croscarmellose sodium', 'magnesium stearate'],
      usos: { t: 'Tratamiento y prevención de la osteoporosis posmenopáusica, osteoporosis en varones y por glucocorticoides, y enfermedad de Paget ósea.', ref: rengR('1 INDICATIONS AND USAGE', 'Treatment and prevention of osteoporosis in postmenopausal women') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con alendronato monosódico (la sal del ácido alendrónico), celulosa, lactosa y croscarmelosa.',
    usos: 'Osteoporosis y enfermedad de Paget, según su etiqueta.',
    actua: 'Se fija al hueso, sobre todo bajo los osteoclastos, e inhibe su actividad: se destruye menos hueso.',
    recorrido: 'Se absorbe muy poco (menos del 1 %, y casi nada con comida o café). Lo absorbido va al hueso o sale sin cambios por la orina; no se metaboliza. Lo que queda en el hueso se libera durante años.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el alendronato sódico, soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El alendronato sódico es soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is soluble in water, very slightly soluble in alcohol') }]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el alendronato disuelto.',
      ocurre: 'Se absorbe muy poco: un 0,64 % en ayunas, dos horas antes de desayunar. Con comida la absorción es despreciable, y el café o el zumo de naranja la reducen un 60 %. Si se toma 30-60 minutos antes del desayuno, baja un 40 % respecto a dos horas.',
      sigue: 'La pequeña parte absorbida pasa a la sangre.',
      datos: [
        { t: 'Su biodisponibilidad oral media en mujeres fue del 0,64 % tras ayuno nocturno y dos horas antes de un desayuno estándar.', ref: rengR(`${RENG_PK} › Absorption`, 'the mean oral bioavailability of alendronate in women was 0.64%'), condiciones: 'en ayunas, 2 h antes de desayunar', poblacion: 'mujeres' },
        { t: 'Con el desayuno o hasta dos horas después, la biodisponibilidad fue despreciable; tomada 0,5-1 hora antes, bajó un 40 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Bioavailability was negligible whether alendronate was administered with or up to two hours after a standardized breakfast'), condiciones: 'con comida' },
        { t: 'El café o el zumo de naranja reducen la biodisponibilidad un 60 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Concomitant administration of alendronate with coffee or orange juice reduced bioavailability by approximately 60%'), condiciones: 'con café o zumo de naranja' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe', 'Destino de la fracción no absorbida']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'huesos'],
      llega: 'Lo absorbido circula brevemente por la sangre.',
      ocurre: 'En ratas, pasa un momento a los tejidos blandos y enseguida se redistribuye al hueso o sale por la orina. En la sangre hay tan poco que no puede medirse; un 78 % va unido a proteínas. En el hueso se concentra donde se destruye hueso, bajo los osteoclastos, e inhibe su actividad. Después queda cubierto por hueso nuevo, donde ya no es activo.',
      sigue: 'No se transforma: lo que no se fija al hueso va a los riñones.',
      datos: [
        { t: 'En ratas, se distribuye de forma transitoria a los tejidos blandos y luego se redistribuye rápidamente al hueso o se excreta por la orina.', ref: rengR(`${RENG_PK} › Distribution`, 'alendronate transiently distributes to soft tissues following 1 mg/kg intravenous administration but is then rapidly redistributed to bone or excreted in the urine'), poblacion: 'ratas (estudio preclínico)' },
        { t: 'El volumen de distribución, sin contar el hueso, es de al menos 28 L; en plasma, tras dosis terapéuticas, hay menos de 5 ng/mL. La unión a proteínas es de un 78 %.', ref: rengR(`${RENG_PK} › Distribution`, 'Protein binding in human plasma is approximately 78%') }
      ],
      accion: {
        diana: 'Osteoclastos (se localiza en las superficies de resorción ósea)',
        efecto: 'Inhibe la actividad de los osteoclastos y la resorción ósea.',
        lugar: ['huesos'],
        datos: [
          { t: 'En animales, se localiza preferentemente en las zonas de resorción ósea, bajo los osteoclastos, e inhibe su actividad sin impedir que lleguen o se adhieran.', ref: rengR('12.1 Mechanism of Action', 'alendronate shows preferential localization to sites of bone resorption, specifically under osteoclasts') },
          { t: 'Incorporado en la matriz ósea bajo hueso nuevo, deja de ser farmacológicamente activo.', ref: rengR('12.1 Mechanism of Action', 'While incorporated in bone matrix, alendronate is not pharmacologically active') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El alendronato circula sin transformarse.',
      ocurre: 'No hay pruebas de que se metabolice, ni en animales ni en humanos.',
      sigue: 'Va al hueso o a los riñones tal cual.',
      datos: [{ t: 'No hay pruebas de que el alendronato se metabolice en animales ni en humanos.', ref: rengR(`${RENG_PK} › Metabolism`, 'There is no evidence that alendronate is metabolized in animals or humans') }],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina', 'huesos'],
      llega: 'El alendronato que no se fija al hueso llega a los riñones.',
      ocurre: 'Tras una dosis intravenosa, un 50 % sale por la orina en 72 horas y casi nada por las heces. El que queda en el hueso se libera muy despacio: su semivida terminal supera los 10 años.',
      sigue: 'Fin del recorrido (lo fijado al hueso se va liberando durante años).',
      datos: [
        { t: 'Tras una dosis intravenosa marcada, un 50 % de la radiactividad se excretó en la orina en 72 horas y poca o ninguna en las heces.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 50% of the radioactivity was excreted in the urine within 72 hours and little or no radioactivity was recovered in the feces'), condiciones: 'dosis intravenosa' },
        { t: 'La semivida terminal en humanos supera los 10 años, probablemente por su liberación desde el esqueleto.', ref: rengR(`${RENG_PK} › Excretion`, 'The terminal half-life in humans is estimated to exceed 10 years, probably reflecting release of alendronate from the skeleton') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral (ayunas, mujeres)', valor: '0,64', unidad: '%', condiciones: 'en ayunas, 2 h antes de desayunar', ref: rengR(`${RENG_PK} › Absorption`, 'was 0.64% for doses ranging from 5 to 70 mg') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 78', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 78%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (sin hueso)', valor: '≥ 28', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The mean steady-state volume of distribution, exclusive of bone, is at least 28 L in humans') },
    { magnitud: 'orina', nombre: 'En la orina en 72 h (dosis IV)', valor: '≈ 50', unidad: '% de la dosis', condiciones: 'dosis intravenosa', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 50% of the radioactivity was excreted in the urine within 72 hours') },
    { magnitud: 'semivida', nombre: 'Semivida terminal (liberación desde el hueso)', valor: '> 10', unidad: 'años', ref: rengR(`${RENG_PK} › Excretion`, 'is estimated to exceed 10 years') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '14e931fd-2c5f-4d90-b7db-5980706f4a56', 'FOSAMAX (alendronate sodium) tablet', 'FOSAMAX (Organon LLC)', '10', '2026-03-16', '2026-11-10'), rengPubchem(2088, 'Alendronic acid', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
