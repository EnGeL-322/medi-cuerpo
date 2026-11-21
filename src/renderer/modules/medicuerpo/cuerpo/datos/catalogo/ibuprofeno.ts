import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-65251'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_RX = 'dailymed-ibuprofeno-chartwell'
const rengRx = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_RX, sec: rengSec, cita: rengCita })
const RENG_AD = 'dailymed-advil'
const rengAd = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_AD, sec: rengSec, cita: rengCita })
const RENG_FC = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'ibuprofeno',
    nombre: 'Ibuprofeno',
    clase: 'Antiinflamatorio no esteroideo (AINE), derivado del ácido propiónico',
    sinonimos: ['ibuprofen', 'Advil', 'Motrin'],
    formula: 'C13H18O2',
    masaMolar: 206.28,
    smiles: 'CC(C)CC1=CC=C(C=C1)C(C)C(=O)O',
    inchikey: 'HEFNNWSXXWATRW-UHFFFAOYSA-N',
    cid: 3672,
    iupac: 'ácido 2-[4-(2-metilpropil)fenil]propanoico',
    estereo: {
      descripcion: 'Un estereocentro: el ibuprofeno de los comprimidos es racémico (mezcla de los enantiómeros R y S). Una molécula construida es una de las dos formas.',
      enantiomeros: [
        { nombre: '(S)-ibuprofeno (dexibuprofeno)', smiles: 'C[C@@H](C1=CC=C(C=C1)CC(C)C)C(=O)O', cid: 39912 },
        { nombre: '(R)-ibuprofeno', smiles: 'C[C@H](C1=CC=C(C=C1)CC(C)C)C(=O)O', cid: 114864 }
      ]
    },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'ibuprofeno-normon-600',
      producto: 'Ibuprofeno Normon 600 mg comprimidos recubiertos con película EFG',
      titular: 'Laboratorios Normon S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'Comprimidos recubiertos con película',
      liberacion: 'no declarada',
      concentraciones: '600 mg de ibuprofeno por comprimido',
      excipientes: ['Celulosa microcristalina', 'fosfato tricálcico', 'croscarmelosa sódica', 'povidona', 'talco', 'ácido esteárico', 'hipromelosa', 'dióxido de titanio (E-171)', 'macrogol 6000'],
      usos: { t: 'En adultos y adolescentes desde 14 años: fiebre, dolor leve a moderado (incluida la migraña), artritis, artrosis, espondilitis anquilosante, inflamación no reumática y dismenorrea primaria.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Tratamiento del dolor de intensidad leve a moderado incluida la migraña') },
      fuente: RENG_FT
    },
    {
      id: 'ibuprofeno-chartwell-rx',
      producto: 'Ibuprofen tablets, USP 400, 600 y 800 mg (con receta)',
      titular: 'Chartwell RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400, 600 y 800 mg por comprimido',
      excipientes: ['stearic acid', 'polyvinyl alcohol', 'polyethylene glycol 1000', 'titanium dioxide', 'talc', 'starch, corn', 'magnesium stearate', 'lecithin, soybean', 'cellulose, microcrystalline', 'silicon dioxide', 'croscarmellose sodium', 'sodium starch glycolate type A potato'],
      usos: { t: 'Signos y síntomas de la artritis reumatoide y la artrosis, dolor leve a moderado y dismenorrea primaria.', ref: rengRx('INDICATIONS AND USAGE', 'Ibuprofen tablets are indicated for relief of mild to moderate pain') },
      fuente: RENG_RX,
      nota: 'El texto «DESCRIPTION» de esta etiqueta enumera excipientes distintos (cera carnauba, polidextrosa…) de los del listado estructurado del producto; se muestran los del listado. Su farmacocinética coincide en lo esencial con la ficha española (máximo en 1-2 horas, eliminación por la orina en 24 horas).',
      recorridoDe: 'ibuprofeno-normon-600'
    },
    {
      id: 'ibuprofeno-advil-200',
      producto: 'ADVIL Tablets (comprimido recubierto de 200 mg)',
      titular: 'Haleon US Holdings LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '200 mg de ibuprofeno por comprimido',
      excipientes: ['acetylated monoglycerides', 'colloidal silicon dioxide', 'corn starch', 'croscarmellose sodium', 'methylparaben', 'microcrystalline cellulose', 'pharmaceutical glaze', 'pharmaceutical ink', 'povidone', 'pregelatinized starch', 'propylparaben', 'sodium benzoate', 'sodium lauryl sulfate', 'stearic acid', 'sucrose', 'synthetic iron oxide', 'titanium dioxide', 'white wax'],
      usos: { t: 'Alivia temporalmente dolores leves (cabeza, dientes, espalda, cólicos menstruales, resfriado, músculos, artritis leve) y baja temporalmente la fiebre.', ref: rengAd('Uses', 'temporarily relieves minor aches and pains due to') },
      fuente: RENG_AD,
      nota: 'Etiqueta de venta libre («Drug Facts»): no incluye farmacocinética. El recorrido se documenta con la ficha técnica de Ibuprofeno Normon 600 mg (otra concentración y otros excipientes).',
      recorridoDe: 'ibuprofeno-normon-600',
      advertencias: [
        { titulo: 'Hemorragia estomacal', texto: 'Contiene un AINE, que puede causar hemorragia estomacal grave; el riesgo es mayor con 60 años o más, úlceras previas, anticoagulantes o corticoides, otros AINE, 3 o más bebidas alcohólicas al día o un uso mayor o más largo de lo indicado.', organos: ['estomago'], ref: rengAd('Warnings › Stomach bleeding warning', 'This product contains an NSAID, which may cause severe stomach bleeding') },
        { titulo: 'Infarto e ictus', texto: 'Los AINE, excepto la aspirina, aumentan el riesgo de infarto, insuficiencia cardíaca e ictus, que pueden ser mortales.', organos: ['corazon', 'encefalo'], ref: rengAd('Warnings › Heart attack and stroke warning', 'NSAIDs, except aspirin, increase the risk of heart attack, heart failure, and stroke') }
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con 600 mg de ibuprofeno racémico; los excipientes forman el núcleo y la película.',
    usos: 'Fiebre, dolor leve a moderado, artritis, artrosis y dismenorrea, según su ficha técnica.',
    actua: 'Inhibe la síntesis de prostaglandinas, que intervienen en la fiebre, el dolor y la inflamación.',
    recorrido: 'Se absorbe en el tubo digestivo (un 80 %), viaja casi todo unido a proteínas, el hígado lo transforma con CYP2C9 y CYP2C8 y los riñones lo eliminan en 24 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto baja por el esófago hasta el estómago.',
      ocurre: 'La película y el núcleo se disgregan y el ibuprofeno se disuelve. La ficha no declara liberación modificada.',
      sigue: 'El ibuprofeno disuelto avanza por el tubo digestivo, donde se absorbe.',
      datos: [
        { t: 'Cada comprimido recubierto contiene 600 mg de ibuprofeno.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada comprimido recubierto contiene 600 mg de ibuprofeno') },
        { t: 'Forma farmacéutica: comprimidos recubiertos con película.', ref: rengFt('3 Forma farmacéutica', 'Comprimidos recubiertos con película') },
        RENG_GENERAL.disgregar
      ],
      sinDatos: ['Tiempo de disgregación del comprimido']
    },
    absorcion: {
      organos: ['estomago', 'intestino-delgado'],
      organosGenerales: ['vena-porta'],
      llega: 'Llega el ibuprofeno disuelto al tubo digestivo.',
      ocurre: 'Se absorbe en el tracto gastrointestinal en un 80 % aproximadamente; el máximo en la sangre llega en 1-2 horas. Tomado con comida, el máximo se retrasa (de unas 2 horas en ayunas a unas 3) sin cambiar la cantidad absorbida.',
      sigue: 'Pasa a la sangre y se reparte por el cuerpo.',
      datos: [
        { t: 'Se absorbe en el tracto gastrointestinal en un 80 % aproximadamente.', ref: rengFt(`${RENG_FC} › Absorción`, 'se absorbe en el tracto gastrointestinal aproximadamente en un 80%') },
        { t: 'La concentración máxima se alcanza 1-2 horas después de tomarlo.', ref: rengFt(`${RENG_FC} › Absorción`, 'se alcanzan (Tmax) 1-2 horas después de su administración') },
        { t: 'Con alimentos el Tmax se retrasa (de unas 2 h en ayunas a unas 3 h), sin cambiar la magnitud de la absorción.', ref: rengFt(`${RENG_FC} › Absorción`, 'La administración de ibuprofeno junto con alimentos retrasa el Tmax'), condiciones: 'con alimentos frente a en ayunas' },
        { t: 'Con esta formulación de 600 mg, en voluntarios sanos, el Tmax fue de 1,5 h.', ref: rengFt(`${RENG_FC} › Absorción`, 'el Tmax es de 1,5 h'), poblacion: 'voluntarios sanos' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo concreto del intestino donde se absorbe más']
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'El ibuprofeno absorbido llega a la sangre.',
      ocurre: 'Viaja unido a proteínas del plasma en torno al 99 % y se reparte en un volumen pequeño (0,1-0,2 L/kg). Inhibe la síntesis de prostaglandinas, que participan en la fiebre, el dolor y la inflamación.',
      sigue: 'Llega al hígado, que lo transforma.',
      simultaneo: 'Mientras actúa, una parte ya se está metabolizando y eliminando.',
      datos: [
        { t: 'Volumen aparente de distribución de 0,1 a 0,2 L/kg tras la administración oral.', ref: rengFt(`${RENG_FC} › Distribución`, 'El volumen aparente de distribución de ibuprofeno tras administración oral es de 0,1 a 0,2 l/kg') },
        { t: 'Fuerte unión a proteínas plasmáticas, en torno al 99 %.', ref: rengFt(`${RENG_FC} › Distribución`, 'con una fuerte unión a proteínas plasmáticas en torno al 99%') }
      ],
      accion: {
        diana: 'Síntesis de prostaglandinas',
        efecto: 'Antiinflamatorio, analgésico y antipirético.',
        lugar: ['tejidos', 'encefalo'],
        datos: [
          { t: 'Su mecanismo de acción se basa en la inhibición de la síntesis de prostaglandinas, esenciales en la aparición de la fiebre, el dolor y la inflamación.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'Su mecanismo de acción se basa en la inhibición de la síntesis de prostaglandinas') },
          { t: 'Puede inhibir de forma competitiva el efecto de dosis bajas de ácido acetilsalicílico sobre la agregación de las plaquetas si se toman a la vez.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'puede inhibir de forma competitiva el efecto de dosis bajas de ácido acetil salicílico') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El ibuprofeno llega al hígado por la sangre.',
      ocurre: 'Se metaboliza ampliamente por hidroxilación y carboxilación del grupo isobutilo, con CYP2C9 y CYP2C8. Los metabolitos no tienen actividad farmacológica; parte del ibuprofeno y de sus metabolitos se une a ácido glucurónico.',
      sigue: 'Los metabolitos y sus glucurónidos van a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado por hidroxilación y carboxilación del grupo isobutilo, mediante CYP2C9 y CYP2C8.', ref: rengFt(`${RENG_FC} › Metabolismo`, 'Ibuprofeno es ampliamente metabolizado en el hígado por hidroxilación y carboxilación') },
        { t: 'Sus metabolitos carecen de actividad farmacológica.', ref: rengFt(`${RENG_FC} › Metabolismo`, 'Sus metabolitos carecen de actividad farmacológica') },
        { t: 'El ibuprofeno y sus metabolitos se conjugan en parte con ácido glucurónico.', ref: rengFt(`${RENG_FC} › Metabolismo`, 'son en parte conjugados con ácido glucurónico') }
      ],
      metabolitos: [
        { nombre: 'Metabolito hidroxilado', nombreFuente: 'metabolite A, (+)-2-[p-(2hydroxymethyl-propyl) phenyl] propionic acid', actividad: 'inactivo', nota: 'El nombre de la etiqueta estadounidense admite dos lecturas: no se le asigna estructura.', ref: rengRx('CLINICAL PHARMACOLOGY › Pharmacokinetics', 'metabolite A (25%)') },
        { nombre: 'Carboxiibuprofeno (metabolito carboxilado)', nombreFuente: 'metabolite B, (+)-2-[p-(2carboxypropyl)phenyl]propionic acid', actividad: 'inactivo', smiles: 'CC(CC1=CC=C(C=C1)C(C)C(=O)O)C(=O)O', cid: 10444113, ref: rengRx('CLINICAL PHARMACOLOGY › Pharmacokinetics', 'metabolite B (37%)') },
        { nombre: 'Glucurónidos del ibuprofeno y de sus metabolitos', actividad: 'inactivo', ref: rengFt(`${RENG_FC} › Eliminación`, 'un 90% se elimina en forma de metabolitos inactivos, principalmente como glucurónidos') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Llegan a los riñones los metabolitos y algo de ibuprofeno sin cambios.',
      ocurre: 'La eliminación es sobre todo renal y se completa en unas 24 horas: un 10 % sale inalterado y un 90 % como metabolitos inactivos, sobre todo glucurónidos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La eliminación tiene lugar principalmente por vía renal y se considera total al cabo de 24 horas.', ref: rengFt(`${RENG_FC} › Eliminación`, 'La eliminación de ibuprofeno tiene lugar principalmente a nivel renal') },
        { t: 'Un 10 % se elimina inalterado y un 90 % como metabolitos inactivos, principalmente glucurónidos.', ref: rengFt(`${RENG_FC} › Eliminación`, 'Un 10% aproximadamente se elimina de forma inalterada') },
        { t: 'Con los comprimidos estadounidenses, la semivida sérica es de 1,8 a 2,0 horas.', ref: rengRx('CLINICAL PHARMACOLOGY › Pharmacokinetics', 'The serum half-life is 1.8 to 2.0 hours'), alcance: 'otra-presentacion' }
      ],
      formas: ['metabolito', 'disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción en el tracto gastrointestinal', valor: '≈ 80', unidad: '%', ref: rengFt(`${RENG_FC} › Absorción`, 'aproximadamente en un 80%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengFt(`${RENG_FC} › Absorción`, 'se alcanzan (Tmax) 1-2 horas después de su administración') },
    { magnitud: 'tmax', nombre: 'Tmax medido con este comprimido de 600 mg', valor: '1,5', unidad: 'h', poblacion: 'voluntarios sanos', ref: rengFt(`${RENG_FC} › Absorción`, 'el Tmax es de 1,5 h') },
    { magnitud: 'comida', nombre: 'Tmax con alimentos frente a en ayunas', valor: '≈ 3 frente a ≈ 2', unidad: 'h', condiciones: 'sin cambio en la magnitud de la absorción', ref: rengFt(`${RENG_FC} › Absorción`, 'de ± 2 h en ayunas a ± 3 h después de tomar alimentos') },
    { magnitud: 'vd', nombre: 'Volumen aparente de distribución', valor: '0,1-0,2', unidad: 'L/kg', ref: rengFt(`${RENG_FC} › Distribución`, 'es de 0,1 a 0,2 l/kg') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 99', unidad: '%', ref: rengFt(`${RENG_FC} › Distribución`, 'en torno al 99%') },
    { magnitud: 'orina', nombre: 'Eliminado sin cambios', valor: '≈ 10', unidad: '% de la dosis', ref: rengFt(`${RENG_FC} › Eliminación`, 'Un 10% aproximadamente se elimina de forma inalterada') },
    { magnitud: 'semivida', nombre: 'Semivida sérica (comprimidos de EE. UU.)', valor: '1,8-2,0', unidad: 'h', presentacion: 'ibuprofeno-chartwell-rx', ref: rengRx('CLINICAL PHARMACOLOGY › Pharmacokinetics', 'The serum half-life is 1.8 to 2.0 hours') }
  ],
  fuentes: [
    rengFichaCIMA(RENG_FT, '65251', 'Ibuprofeno Normon 600 mg comprimidos recubiertos con película EFG (Laboratorios Normon S.A.)', '2024-11-08', '2026-11-09'),
    rengEtiquetaFDA(RENG_RX, '39f2664f-6c0a-4726-85d7-4227530d4a49', 'Ibuprofen tablet, film coated (Chartwell RX, LLC)', 'Ibuprofen tablets USP (Chartwell RX, LLC)', '6', '2026-11-05', '2026-11-09'),
    rengEtiquetaFDA(RENG_AD, '1a665e64-9f30-be37-4a83-38789f1f1e89', 'ADVIL (ibuprofen) tablet, coated · Drug Facts', 'ADVIL Tablets (Haleon US Holdings LLC)', '39', '2026-11-06', '2026-11-09'),
    rengPubchem(3672, 'Ibuprofen', '2026-11-09')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
