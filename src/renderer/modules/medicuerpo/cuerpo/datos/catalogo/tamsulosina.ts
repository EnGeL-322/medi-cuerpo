import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-tamsulosina-rising'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'tamsulosina',
    nombre: 'Tamsulosina',
    clase: 'Bloqueante de receptores adrenérgicos α1 (selectivo de la próstata)',
    sinonimos: ['tamsulosin', 'tamsulosin hydrochloride'],
    formula: 'C20H28N2O5S',
    masaMolar: 408.5,
    smiles: 'CCOC1=CC=CC=C1OCCN[C@H](C)CC2=CC(=C(C=C2)OC)S(=O)(=O)N',
    inchikey: 'DRHKJLXJIQTDTD-OAHLLOKOSA-N',
    cid: 129211,
    estereo: { descripcion: 'Un estereocentro: se usa solo el enantiómero (R)-(−); en el cuerpo no se convierte en el (S)-(+).' },
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'tamsulosina-rising',
      producto: 'Tamsulosin hydrochloride cápsulas de 0,4 mg (genérico)',
      titular: 'Rising Pharma Holdings, Inc.',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '0,4 mg de hidrocloruro de tamsulosina por cápsula',
      sal: { nombre: 'Hidrocloruro de tamsulosina (monohidrocloruro)', ref: rengR('11 DESCRIPTION', 'contains tamsulosin hydrochloride USP 0.4 mg') },
      excipientes: ['calcium stearate', 'FD&C Blue 2', 'gelatin', 'iron oxide red', 'iron oxide yellow', 'microcrystalline cellulose', 'methacrylic acid and ethyl acrylate copolymer dispersion', 'sodium lauryl sulfate', 'talc', 'triacetin', 'titanium dioxide'],
      usos: { t: 'Signos y síntomas de la hiperplasia benigna de próstata. No está indicada para tratar la hipertensión.', ref: rengR('1 INDICATIONS AND USAGE', 'Tamsulosin hydrochloride capsules are not indicated for the treatment of hypertension') },
      fuente: RENG_F,
      nota: 'La etiqueta no declara la cápsula como de liberación modificada, pero describe una farmacocinética controlada por la velocidad de absorción y lleva un copolímero metacrílico entre los excipientes.'
    }
  ],
  resumen: {
    contiene: 'Cápsula con hidrocloruro de tamsulosina (la sal del activo), celulosa, un copolímero metacrílico y gelatina coloreada.',
    usos: 'Síntomas de la hiperplasia benigna de próstata, según su etiqueta.',
    actua: 'Bloquea los receptores α1 (sobre todo α1A) de la próstata y del cuello de la vejiga: el músculo liso se relaja y la orina fluye mejor.',
    recorrido: 'Se absorbe casi por completo (> 90 %) y despacio, va casi toda unida a proteínas, el hígado la metaboliza (CYP3A4 y CYP2D6) y sale sobre todo por la orina (76 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y deja libre el contenido. El hidrocloruro de tamsulosina es poco soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El hidrocloruro de tamsulosina es poco soluble en agua y metanol.', ref: rengR('11 DESCRIPTION', 'It is sparingly soluble in water and methanol') }, RENG_GENERAL.disgregar],
      sinDatos: ['Lugar y velocidad de liberación desde los gránulos']
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la tamsulosina liberada.',
      ocurre: 'Se absorbe casi por completo (más del 90 % en ayunas), pero sin prisa: el máximo llega a las 4-5 horas en ayunas y a las 6-7 con comida. En ayunas se absorbe más (AUC un 30 % mayor y Cmax un 40-70 % mayor).',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La absorción de la cápsula de 0,4 mg es esencialmente completa (> 90 %) en ayunas.', ref: rengR(`${RENG_PK} › Absorption`, 'is essentially complete (>90%) following oral administration under fasting conditions'), condiciones: 'en ayunas' },
        { t: 'El Tmax es de 4-5 horas en ayunas y de 6-7 horas con comida; en ayunas, el AUC es un 30 % mayor y la Cmax un 40-70 % mayor que con comida.', ref: rengR(`${RENG_PK} › Effect of Food`, 'The time to maximum concentration (T max ) is reached by 4 to 5 hours under fasting conditions and by 6 to 7 hours when tamsulosin hydrochloride capsules are administered with food') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'prostata', 'vejiga'],
      llega: 'La tamsulosina circula por la sangre.',
      ocurre: 'Entre el 94 y el 99 % va unida a proteínas, sobre todo a la glucoproteína ácida α1. Su volumen de distribución (16 L) sugiere que se reparte por los líquidos extracelulares. En la próstata, la cápsula prostática, la uretra prostática y el cuello de la vejiga bloquea los receptores α1, sobre todo el subtipo α1A, y relaja el músculo liso.',
      sigue: 'El hígado la metaboliza.',
      datos: [
        { t: 'Volumen de distribución aparente de 16 L tras administración intravenosa a 10 varones sanos, lo que sugiere distribución en los líquidos extracelulares.', ref: rengR(`${RENG_PK} › Distribution`, 'which is suggestive of distribution into extracellular fluids in the body'), poblacion: '10 varones adultos sanos' },
        { t: 'Se une ampliamente a proteínas plasmáticas (94-99 %), sobre todo a la glucoproteína ácida α1.', ref: rengR(`${RENG_PK} › Distribution`, 'is extensively bound to human plasma proteins (94% to 99%), primarily alpha 1 acid glycoprotein (AAG)') }
      ],
      accion: {
        diana: 'Receptores adrenérgicos α1 (sobre todo α1A) del músculo liso de la próstata y del cuello vesical',
        efecto: 'Relaja el músculo liso del cuello de la vejiga y de la próstata y mejora el flujo de orina.',
        lugar: ['prostata', 'vejiga'],
        datos: [
          { t: 'Los receptores α1 abundan en la próstata, la cápsula prostática, la uretra prostática y el cuello vesical; bloquearlos relaja su músculo liso y mejora el flujo de orina.', ref: rengR('12.1 Mechanism of Action', 'Blockade of these adrenoceptors can cause smooth muscles in the bladder neck and prostate to relax') },
          { t: 'Es selectiva para los receptores α1 de la próstata humana; un 70 % de ellos son del subtipo α1A.', ref: rengR('12.1 Mechanism of Action', 'Approximately 70% of the alpha 1 receptors in the human prostate are of the alpha 1A subtype') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La tamsulosina llega al hígado.',
      ocurre: 'Los citocromos P450 del hígado la metabolizan ampliamente, sobre todo CYP3A4 y CYP2D6. Después, los metabolitos se conjugan con glucurónido o sulfato. Menos del 10 % se elimina sin cambios. El perfil de los metabolitos en humanos no se ha establecido.',
      sigue: 'Los metabolitos conjugados van sobre todo a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente por citocromos P450 en el hígado y menos del 10 % de la dosis se excreta sin cambios en la orina; el perfil farmacocinético de los metabolitos no se ha establecido.', ref: rengR(`${RENG_PK} › Metabolism`, 'However, the pharmacokinetic profile of the metabolites in humans has not been established') },
        { t: 'Intervienen sobre todo CYP3A4 y CYP2D6.', ref: rengR(`${RENG_PK} › Metabolism`, 'Tamsulosin is extensively metabolized, mainly by CYP3A4 and CYP2D6') },
        { t: 'Los metabolitos se conjugan con glucurónido o sulfato antes de la excreción renal.', ref: rengR(`${RENG_PK} › Metabolism`, 'The metabolites of tamsulosin hydrochloride undergo extensive conjugation to glucuronide or sulfate prior to renal excretion') }
      ],
      metabolitos: [{ nombre: 'Metabolitos oxidados, conjugados con glucurónido o sulfato', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'undergo extensive conjugation to glucuronide or sulfate') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Con una dosis marcada, un 76 % se recuperó en la orina y un 21 % en las heces en una semana. La semivida aparente de las cápsulas (9-13 horas en voluntarios sanos) es más larga que la de una forma de liberación inmediata (5-7 horas) porque la velocidad de absorción la controla.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras una dosis radiomarcada a 4 voluntarios sanos se recuperó el 97 %: un 76 % en la orina y un 21 % en las heces en 168 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'with urine (76%) representing the primary route of excretion compared to feces (21%) over 168 hours'), poblacion: '4 voluntarios sanos' },
        { t: 'Por la farmacocinética controlada por la absorción, la semivida aparente de las cápsulas es de 9-13 horas en voluntarios sanos y de 14-15 horas en la población a la que se destina.', ref: rengR(`${RENG_PK} › Excretion`, 'the apparent half-life of tamsulosin hydrochloride is approximately 9 to 13 hours in healthy volunteers and 14 to 15 hours in the target population') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción (ayunas)', valor: '> 90', unidad: '%', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'is essentially complete (>90%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '4-5 (ayunas); 6-7 (con comida)', unidad: 'h', ref: rengR(`${RENG_PK} › Effect of Food`, 'is reached by 4 to 5 hours under fasting conditions and by 6 to 7 hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente (IV)', valor: '16', unidad: 'L', poblacion: '10 varones sanos', ref: rengR(`${RENG_PK} › Distribution`, 'after intravenous administration to 10 healthy male adults was 16 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '94-99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, '(94% to 99%)') },
    { magnitud: 'semivida', nombre: 'Semivida aparente (cápsulas)', valor: '9-13', unidad: 'h', poblacion: 'voluntarios sanos', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 9 to 13 hours in healthy volunteers') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina (168 h)', valor: '76', unidad: '% de la dosis', poblacion: '4 voluntarios sanos', ref: rengR(`${RENG_PK} › Excretion`, 'with urine (76%) representing the primary route of excretion') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'a242c8dc-576e-4a1f-a9e7-a05d7ebc0e0a', 'TAMSULOSIN HYDROCHLORIDE capsule', 'Tamsulosin hydrochloride (Rising Pharma Holdings, Inc.)', '13', '2026-01-15', '2026-11-10'), rengPubchem(129211, 'Tamsulosin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
