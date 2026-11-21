import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-aldactone'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'espironolactona',
    nombre: 'Espironolactona',
    clase: 'Diurético ahorrador de potasio (antagonista de la aldosterona)',
    sinonimos: ['spironolactone', 'Aldactone'],
    formula: 'C24H32O4S',
    masaMolar: 416.6,
    smiles: 'CC(=O)S[C@@H]1CC2=CC(=O)CC[C@@]2([C@@H]3[C@@H]1[C@@H]4CC[C@]5([C@]4(CC3)C)CCC(=O)O5)C',
    inchikey: 'LXMSZDCAJNLERA-ZHYRCANASA-N',
    cid: 5833,
    estereo: { descripcion: 'Esteroide con siete estereocentros definidos: es un solo estereoisómero.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'espironolactona-aldactone',
      producto: 'ALDACTONE (spironolactone) comprimidos recubiertos de 25, 50 y 100 mg',
      titular: 'Pfizer Laboratories Div Pfizer Inc',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25, 50 y 100 mg de espironolactona por comprimido',
      excipientes: ['calcium sulfate', 'corn starch', 'flavor', 'hypromellose', 'iron oxide', 'magnesium stearate', 'polyethylene glycol', 'povidone', 'titanium dioxide'],
      usos: { t: 'Insuficiencia cardiaca de clase III-IV con fracción de eyección reducida, hipertensión como tratamiento añadido, edemas (cirrosis, síndrome nefrótico) e hiperaldosteronismo primario.', ref: rengR('1 INDICATIONS AND USAGE', 'The treatment of NYHA Class III–IV heart failure and reduced ejection fraction') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de espironolactona (sin sal) con almidón de maíz, sulfato cálcico y povidona.',
    usos: 'Insuficiencia cardiaca, hipertensión, edemas e hiperaldosteronismo, según su etiqueta.',
    actua: 'Ella y sus metabolitos activos bloquean el receptor de la aldosterona en el túbulo distal del riñón: se pierde más sodio y agua y se retiene el potasio.',
    recorrido: 'La comida casi duplica su absorción; se metaboliza rápido y ampliamente a canrenona y otros metabolitos de vida larga, que van casi todos unidos a proteínas y salen por la orina y, en menor medida, la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la espironolactona, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La espironolactona es prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'Spironolactone is practically insoluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la espironolactona liberada.',
      ocurre: 'El máximo de espironolactona llega a las 2,6 horas y el de su metabolito activo canrenona a las 4,3. Tomarla con comida casi duplica la cantidad absorbida (AUC un 95 % mayor), así que conviene hacerlo siempre igual respecto a las comidas.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'En voluntarios sanos, el máximo de espironolactona y de canrenona llega a las 2,6 y 4,3 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'The mean time to reach peak plasma concentration of spironolactone and the active metabolite, canrenone, in healthy volunteers is 2.6 and 4.3 hours, respectively'), poblacion: 'voluntarios sanos' },
        { t: 'La comida aumenta la biodisponibilidad (AUC) un 95,4 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Food increased the bioavailability of spironolactone (as measured by AUC) by approximately 95.4%'), condiciones: 'con comida' }
      ],
      sinDatos: ['Biodisponibilidad absoluta', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'rinones'],
      llega: 'La espironolactona y sus metabolitos circulan por la sangre.',
      ocurre: 'Más del 90 % va unido a proteínas. En el túbulo contorneado distal del riñón compiten con la aldosterona por su receptor, en el punto de intercambio de sodio y potasio: sale más sodio y agua y se retiene el potasio.',
      sigue: 'Se metaboliza rápido.',
      simultaneo: 'Buena parte del efecto lo ejercen los metabolitos (como la canrenona), que se forman enseguida y duran mucho más que la espironolactona.',
      datos: [{ t: 'La espironolactona y sus metabolitos se unen en más del 90 % a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'Spironolactone and its metabolites are more than 90% bound to plasma proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Receptor de la aldosterona (mineralocorticoide) del túbulo contorneado distal',
        efecto: 'Diurético y antihipertensivo: aumenta la excreción de sodio y agua y retiene potasio.',
        lugar: ['rinones'],
        datos: [
          { t: 'Ella y sus metabolitos activos antagonizan la aldosterona uniéndose de forma competitiva a sus receptores en el punto de intercambio sodio-potasio del túbulo contorneado distal.', ref: rengR('12.1 Mechanism of Action', 'acting primarily through competitive binding of receptors at the aldosterone-dependent sodium-potassium exchange site in the distal convoluted renal tubule') },
          { t: 'Hace que se excreten más sodio y agua mientras se retiene el potasio.', ref: rengR('12.1 Mechanism of Action', 'Spironolactone causes increased amounts of sodium and water to be excreted, while potassium is retained') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La espironolactona llega a las enzimas que la transforman.',
      ocurre: 'Se metaboliza rápida y ampliamente. Unos metabolitos pierden el azufre (como la canrenona) y otros lo conservan (TMS y HTMS). La espironolactona dura poco (semivida de 1,4 horas), pero sus metabolitos duran de 14 a 17 horas.',
      sigue: 'Los metabolitos van a los riñones y, en menor medida, a la bilis.',
      datos: [
        { t: 'Se metaboliza rápida y ampliamente; unos metabolitos pierden el azufre (canrenona) y otros lo conservan (TMS, HTMS).', ref: rengR(`${RENG_PK} › Metabolism`, 'Metabolites can be divided into two main categories: those in which sulfur of the parent molecule is removed (e.g., canrenone) and those in which the sulfur is retained (e.g., TMS and HTMS)') },
        { t: 'La semivida media de la espironolactona es de 1,4 horas; las de canrenona, TMS y HTMS, de 16,5, 13,8 y 15 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean half-life of spironolactone is 1.4 hour') },
        { t: 'En la cirrosis con ascitis se ha descrito una semivida terminal más larga.', ref: rengR(`${RENG_PK} › Patients with Hepatic Impairment`, 'The terminal half-life of spironolactone has been reported to be increased in patients with cirrhotic ascites'), poblacion: 'cirrosis con ascitis' }
      ],
      sinDatos: ['Órgano y enzimas del metabolismo'],
      metabolitos: [
        { nombre: 'Canrenona', nombreFuente: 'canrenone', actividad: 'activo', nota: 'Semivida media de 16,5 horas.', smiles: 'C[C@]12CCC(=O)C=C1C=C[C@@H]3[C@@H]2CC[C@]4([C@H]3CC[C@@]45CCC(=O)O5)C', cid: 13789, ref: rengR(`${RENG_PK} › Absorption`, 'the active metabolite, canrenone') },
        { nombre: '7-α-(tiometil)espirolactona (TMS)', nombreFuente: '7-α-(thiomethyl) spirolactone (TMS)', actividad: 'activo', nota: 'En humanos, potencia de un tercio de la de la espironolactona sobre los electrolitos urinarios.', ref: rengR(`${RENG_PK} › Metabolism`, 'the potencies of TMS and 7-α-thiospirolactone in reversing the effects of the synthetic mineralocorticoid') },
        { nombre: '6-β-hidroxi-7-α-(tiometil)espirolactona (HTMS)', nombreFuente: '6-β-hydroxy-7-α-(thiomethyl) spirolactone (HTMS)', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Elimination`, '6-β-hydroxy-7-α-(thiomethyl) spirolactone (HTMS)') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al hígado.',
      ocurre: 'Los metabolitos se excretan sobre todo por la orina y, en segundo lugar, por la bilis.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Los metabolitos se excretan sobre todo en la orina y, secundariamente, en la bilis.', ref: rengR(`${RENG_PK} › Excretion`, 'The metabolites are excreted primarily in the urine and secondarily in bile') }],
      sinDatos: ['Porcentajes de la dosis en orina y heces'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo (espironolactona; canrenona)', valor: '2,6; 4,3', unidad: 'h', poblacion: 'voluntarios sanos', ref: rengR(`${RENG_PK} › Absorption`, 'is 2.6 and 4.3 hours, respectively') },
    { magnitud: 'comida', nombre: 'Con comida: AUC', valor: '+95,4', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'by approximately 95.4%') },
    { magnitud: 'union', nombre: 'Unión a proteínas (con sus metabolitos)', valor: '> 90', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'more than 90% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida de la espironolactona', valor: '1,4', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'The mean half-life of spironolactone is 1.4 hour') },
    { magnitud: 'semivida', nombre: 'Semivida de la canrenona', valor: '16,5', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'are 16.5, 13.8, and 15 hours, respectively') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '0fed2822-3a03-4b64-9857-c682fcd462bc', 'ALDACTONE (spironolactone) tablet, film coated', 'ALDACTONE (Pfizer Laboratories Div Pfizer Inc)', '25', '2025-12-01', '2026-11-10'), rengPubchem(5833, 'Spironolactone', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
