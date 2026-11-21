import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-celebrex'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'celecoxib',
    nombre: 'Celecoxib',
    clase: 'Antiinflamatorio no esteroideo (inhibidor preferente de la COX-2)',
    sinonimos: ['celecoxib', 'Celebrex'],
    formula: 'C17H14F3N3O2S',
    masaMolar: 381.4,
    smiles: 'CC1=CC=C(C=C1)C2=CC(=NN2C3=CC=C(C=C3)S(=O)(=O)N)C(F)(F)F',
    inchikey: 'RZEKVGVHFLEQIL-UHFFFAOYSA-N',
    cid: 2662,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'celecoxib-celebrex',
      producto: 'CELEBREX (celecoxib) cápsulas de 50, 100, 200 y 400 mg',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50, 100, 200 y 400 mg de celecoxib por cápsula',
      excipientes: ['croscarmellose sodium', 'edible inks', 'gelatin', 'lactose monohydrate', 'magnesium stearate', 'povidone', 'sodium lauryl sulfate'],
      usos: { t: 'Artrosis, artritis reumatoide, artritis reumatoide juvenil (desde los 2 años), espondilitis anquilosante, dolor agudo y dismenorrea primaria.', ref: rengR('1 INDICATIONS AND USAGE', 'Osteoarthritis (OA) ( 1.1 ) • Rheumatoid Arthritis (RA) ( 1.2 )') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula de celecoxib (sin sal) con lactosa, povidona, croscarmelosa y laurilsulfato de sodio.',
    usos: 'Artrosis, artritis, dolor agudo y dismenorrea, según su etiqueta.',
    actua: 'Inhibe la síntesis de prostaglandinas, sobre todo a través de la COX-2, en los tejidos periféricos.',
    recorrido: 'Se absorbe despacio por su baja solubilidad (máximo a las 3 horas), se reparte mucho por los tejidos, el hígado lo metaboliza (CYP2C9) a compuestos inactivos y sale por heces (57 %) y orina (27 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera el celecoxib, que es hidrófobo y prácticamente insoluble en agua al pH del cuerpo.',
      sigue: 'Pasa al intestino, donde se disuelve poco a poco.',
      datos: [{ t: 'El celecoxib es hidrófobo (log P 3,5) y prácticamente insoluble en medios acuosos al pH fisiológico.', ref: rengR('11 DESCRIPTION', 'Celecoxib is hydrophobic (log P is 3.5) and is practically insoluble in aqueous media at physiological pH range') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el celecoxib, que se disuelve con dificultad.',
      ocurre: 'El máximo en el plasma llega hacia las 3 horas. Su baja solubilidad alarga la absorción, y por encima de 200 mg se absorbe proporcionalmente menos. Con una comida grasa, el máximo se retrasa 1-2 horas y se absorbe un 10-20 % más. No se ha medido su biodisponibilidad absoluta.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'El máximo en el plasma aparece hacia las 3 horas de una dosis oral.', ref: rengR(`${RENG_PK} › Absorption`, 'Peak plasma levels of celecoxib occur approximately 3 hours after an oral dose') },
        { t: 'Con una comida rica en grasa, el máximo se retrasa 1-2 horas y el AUC sube un 10-20 %.', ref: rengR(`${RENG_PK} › Food Effects`, 'peak plasma levels were delayed for about 1 to 2 hours with an increase in total absorption (AUC) of 10% to 20%'), condiciones: 'con comida rica en grasa' },
        { t: 'Por encima de 200 mg, en ayunas, la exposición sube menos que la dosis, probablemente por su baja solubilidad en agua.', ref: rengR(`${RENG_PK} › Food Effects`, 'which is thought to be due to the low solubility of the drug in aqueous media'), condiciones: 'en ayunas' }
      ],
      sinDatos: ['Biodisponibilidad absoluta (no estudiada)', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos'],
      llega: 'El celecoxib circula por la sangre.',
      ocurre: 'Un 97 % va unido a proteínas (sobre todo albúmina) y su volumen aparente (unos 400 L) indica que se reparte mucho por los tejidos. Allí inhibe la síntesis de prostaglandinas, sobre todo mediante la COX-2.',
      sigue: 'El hígado lo metaboliza.',
      datos: [
        { t: 'Se une mucho a proteínas (~97 %), sobre todo a la albúmina y, menos, a la glucoproteína ácida α1.', ref: rengR(`${RENG_PK} › Distribution`, 'In healthy subjects, celecoxib is highly protein bound (~97%) within the clinical dose range') },
        { t: 'Su volumen aparente de distribución en estado estacionario es de unos 400 L, lo que sugiere una distribución extensa en los tejidos.', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 400 L, suggesting extensive distribution into the tissues') }
      ],
      accion: {
        diana: 'Ciclooxigenasa 2 (COX-2), de forma preferente',
        efecto: 'Analgésico, antiinflamatorio y antipirético por la menor síntesis de prostaglandinas.',
        lugar: ['tejidos'],
        datos: [
          { t: 'Su mecanismo se atribuye a la inhibición de la síntesis de prostaglandinas, principalmente a través de la COX-2.', ref: rengR('12.1 Mechanism of Action', 'is believed to be due to inhibition of prostaglandin synthesis, primarily via inhibition of COX-2') },
          { t: 'Su modo de acción podría deberse a la disminución de prostaglandinas en los tejidos periféricos.', ref: rengR('12.1 Mechanism of Action', 'its mode of action may be due to a decrease of prostaglandins in peripheral tissues') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El celecoxib llega al hígado.',
      ocurre: 'Se elimina sobre todo por metabolismo hepático, mediado principalmente por el CYP2C9. Se forman un alcohol primario, el ácido carboxílico correspondiente y su glucurónido; ninguno inhibe las COX.',
      sigue: 'Los metabolitos salen por las heces y la orina.',
      datos: [
        { t: 'Su metabolismo depende sobre todo del CYP2C9; se han identificado en plasma un alcohol primario, el ácido carboxílico y su glucurónido, inactivos frente a COX-1 y COX-2.', ref: rengR(`${RENG_PK} › Metabolism`, 'These metabolites are inactive as COX-1 or COX-2 inhibitors') },
        { t: 'Se elimina sobre todo por metabolismo hepático: menos del 3 % se recupera sin cambios en orina y heces.', ref: rengR(`${RENG_PK} › Excretion`, 'Celecoxib is eliminated predominantly by hepatic metabolism with little (<3%) unchanged drug recovered in the urine and feces') }
      ],
      metabolitos: [
        { nombre: 'Metabolito ácido carboxílico', nombreFuente: 'carboxylic acid metabolite', actividad: 'inactivo', nota: 'Metabolito principal: 73 % de la dosis en orina y heces.', ref: rengR(`${RENG_PK} › Excretion`, 'The primary metabolite in both urine and feces was the carboxylic acid metabolite (73% of dose)') },
        { nombre: 'Alcohol primario', nombreFuente: 'primary alcohol', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'Three metabolites, a primary alcohol, the corresponding carboxylic acid and its glucuronide conjugate') },
        { nombre: 'Glucurónido del ácido', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'the corresponding carboxylic acid and its glucuronide conjugate') }
      ]
    },
    excrecion: {
      organos: ['heces', 'rinones', 'orina'],
      llega: 'Los metabolitos llegan al intestino y a los riñones.',
      ocurre: 'Con una dosis marcada, un 57 % salió por las heces y un 27 % por la orina, sobre todo como el ácido carboxílico. Su semivida efectiva es de unas 11 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras una dosis radiomarcada, un 57 % se excretó en las heces y un 27 % en la orina.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 57% of the dose was excreted in the feces and 27% was excreted into the urine') },
        { t: 'La semivida efectiva es de unas 11 horas en ayunas; la absorción lenta hace variable la semivida terminal.', ref: rengR(`${RENG_PK} › Excretion`, 'The effective half-life is approximately 11 hours under fasted conditions') }
      ],
      sinDatos: ['Vía por la que los metabolitos llegan a las heces'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≈ 3', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'occur approximately 3 hours after an oral dose') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 97', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'highly protein bound (~97%)') },
    { magnitud: 'vd', nombre: 'Volumen aparente (Vss/F)', valor: '≈ 400', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 400 L') },
    { magnitud: 'semivida', nombre: 'Semivida efectiva (ayunas)', valor: '≈ 11', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'The effective half-life is approximately 11 hours under fasted conditions') },
    { magnitud: 'heces', nombre: 'Dosis marcada en las heces', valor: '≈ 57', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 57% of the dose was excreted in the feces') },
    { magnitud: 'orina', nombre: 'Dosis marcada en la orina', valor: '≈ 27', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, '27% was excreted into the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '2d6675e4-5859-4be2-8037-a20ce9f707aa', 'CELEBREX (celecoxib) capsule', 'CELEBREX (Viatris Specialty LLC)', '13', '2025-12-18', '2026-11-10'), rengPubchem(2662, 'Celecoxib', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
