import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zetia'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'ezetimiba',
    nombre: 'Ezetimiba',
    clase: 'Hipolipemiante: inhibidor de la absorción intestinal de colesterol',
    sinonimos: ['ezetimibe', 'Zetia'],
    formula: 'C24H21F2NO3',
    masaMolar: 409.4,
    smiles: 'C1=CC(=CC=C1[C@@H]2[C@H](C(=O)N2C3=CC=C(C=C3)F)CC[C@@H](C4=CC=C(C=C4)F)O)O',
    inchikey: 'OLNTVTPDXPETLC-XPWALMASSA-N',
    cid: 150311,
    estereo: { descripcion: 'Tres estereocentros definidos (3R, 3′S, 4S): es un solo estereoisómero.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'ezetimiba-zetia',
      producto: 'ZETIA (ezetimibe) comprimidos de 10 mg',
      titular: 'Organon LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg de ezetimiba por comprimido',
      excipientes: ['croscarmellose sodium', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'povidone', 'sodium lauryl sulfate'],
      usos: { t: 'Junto con la dieta, bajar el colesterol LDL elevado: con una estatina o sola en la hiperlipidemia primaria, con estatina en niños desde 10 años con hipercolesterolemia familiar y con fenofibrato en la hiperlipidemia mixta, entre otros.', ref: rengR('1 INDICATIONS AND USAGE', 'as an adjunct to diet to reduce elevated LDL-C in adults with primary hyperlipidemia') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con 10 mg de ezetimiba (sin sal), lactosa, celulosa, croscarmelosa y povidona.',
    usos: 'Bajar el colesterol LDL, sola o con otros hipolipemiantes, según su etiqueta.',
    actua: 'Se coloca en el borde en cepillo del intestino delgado y bloquea el transportador NPC1L1, que absorbe el colesterol: llega menos colesterol al hígado y este retira más de la sangre.',
    recorrido: 'Se absorbe y se conjuga enseguida (intestino e hígado) a un glucurónido activo; ambos van y vuelven entre intestino e hígado y salen sobre todo por las heces (78 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la ezetimiba, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino delgado, donde actúa.',
      datos: [{ t: 'La ezetimiba es un polvo cristalino prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'Ezetimibe is a white, crystalline powder that is freely to very soluble in ethanol, methanol, and acetone and practically insoluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['intestino-delgado', 'higado'],
      llega: 'La ezetimiba llega al intestino delgado.',
      ocurre: 'Se absorbe y se conjuga enseguida con ácido glucurónico (en el intestino delgado y el hígado) a ezetimiba-glucurónido, que también es activo. El glucurónido llega a su máximo en 1-2 horas; la ezetimiba, en 4-12 horas. No se puede medir su biodisponibilidad absoluta porque no hay forma inyectable.',
      sigue: 'La ezetimiba y su glucurónido pasan a la sangre.',
      simultaneo: 'Mientras una parte se absorbe y se conjuga, la ezetimiba actúa en el borde en cepillo del intestino delgado.',
      datos: [
        { t: 'Tras tomarla, se absorbe y se conjuga ampliamente a un glucurónido fenólico activo (ezetimiba-glucurónido).', ref: rengR(`${RENG_PK} › Absorption`, 'ezetimibe is absorbed and extensively conjugated to a pharmacologically active phenolic glucuronide (ezetimibe-glucuronide)') },
        { t: 'Con 10 mg en ayunas, la ezetimiba llega a su máximo en 4-12 horas y el glucurónido en 1-2 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'were attained within 4 to 12 hours (T max )'), condiciones: 'en ayunas' },
        { t: 'Su biodisponibilidad absoluta no puede determinarse porque es prácticamente insoluble en medios acuosos inyectables.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of ezetimibe cannot be determined') },
        { t: 'La comida no cambia la cantidad absorbida; una comida grasa sube la Cmax un 38 %.', ref: rengR(`${RENG_PK} › Effect of Food`, 'had no effect on the extent of absorption of ezetimibe'), condiciones: 'con comida' }
      ]
    },
    distribucion: {
      organos: ['intestino-delgado', 'sangre', 'higado'],
      llega: 'La ezetimiba y su glucurónido circulan por la sangre y vuelven al intestino.',
      ocurre: 'Más del 90 % de ambos va unido a proteínas. Su lugar de acción es el borde en cepillo del intestino delgado: bloquea el transportador NPC1L1 y absorbe menos colesterol de la dieta y de la bilis. Al hígado llega menos colesterol, baja su reserva y aumentan los receptores de LDL, que retiran colesterol de la sangre.',
      sigue: 'Vuelve al intestino por la bilis, una y otra vez.',
      datos: [{ t: 'La ezetimiba y su glucurónido se unen en más del 90 % a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'Ezetimibe and ezetimibe-glucuronide are highly bound (>90%) to human plasma proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Transportador de esteroles NPC1L1 (Niemann-Pick C1-Like 1)',
        efecto: 'Reduce la absorción intestinal de colesterol y, en consecuencia, el colesterol LDL de la sangre.',
        lugar: ['intestino-delgado', 'higado'],
        datos: [
          { t: 'Su diana es el transportador de esteroles NPC1L1, implicado en la captación intestinal de colesterol y fitoesteroles.', ref: rengR('12.1 Mechanism of Action', 'The molecular target of ezetimibe has been shown to be the sterol transporter, Niemann-Pick C1-Like 1 (NPC1L1)') },
          { t: 'Se localiza en el borde en cepillo del intestino delgado y reduce el colesterol que llega al hígado; baja la reserva hepática y aumentan los receptores de LDL.', ref: rengR('12.1 Mechanism of Action', 'Ezetimibe localizes at the brush border of the small intestine and inhibits the absorption of cholesterol') }
        ]
      }
    },
    metabolismo: {
      organos: ['intestino-delgado', 'higado'],
      llega: 'La ezetimiba está en el intestino delgado y el hígado.',
      ocurre: 'Se metaboliza sobre todo por conjugación con ácido glucurónico en el intestino delgado y el hígado; la oxidación es mínima. En el plasma, un 80-90 % es el glucurónido y un 10-20 % ezetimiba. Los perfiles con varios picos sugieren que circula entre intestino e hígado. Ambos tienen una semivida de unas 22 horas.',
      sigue: 'Salen por la bilis y, menos, por la orina.',
      datos: [
        { t: 'Se metaboliza sobre todo en el intestino delgado y el hígado por conjugación con glucurónido, con excreción posterior biliar y renal; la oxidación es mínima.', ref: rengR(`${RENG_PK} › Metabolism`, 'Ezetimibe is primarily metabolized in the small intestine and liver via glucuronide conjugation (a phase II reaction) with subsequent biliary and renal excretion') },
        { t: 'La ezetimiba y su glucurónido tienen una semivida de unas 22 horas; los perfiles con varios picos sugieren recirculación enterohepática.', ref: rengR(`${RENG_PK} › Metabolism`, 'Plasma concentration-time profiles exhibit multiple peaks, suggesting enterohepatic recycling') }
      ],
      metabolitos: [{ nombre: 'Ezetimiba-glucurónido', nombreFuente: 'ezetimibe-glucuronide', actividad: 'activo', nota: '80-90 % del fármaco total en plasma.', ref: rengR(`${RENG_PK} › Metabolism`, 'constituting approximately 10 to 20% and 80 to 90% of the total drug in plasma, respectively') }]
    },
    excrecion: {
      organos: ['bilis', 'heces', 'rinones', 'orina'],
      llega: 'La ezetimiba y su glucurónido llegan a la bilis y a los riñones.',
      ocurre: 'Con una dosis marcada, en 10 días un 78 % salió por las heces (sobre todo ezetimiba, un 69 % de la dosis) y un 11 % por la orina (sobre todo el glucurónido, un 9 %).',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'En 10 días se recuperó un 78 % de la radiactividad en las heces y un 11 % en la orina; en las heces predominó la ezetimiba (69 % de la dosis) y en la orina el glucurónido (9 %).', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 78% and 11% of the administered radioactivity were recovered in the feces and urine, respectively, over a 10-day collection period') }],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo (ezetimiba; glucurónido)', valor: '4-12; 1-2', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'were achieved between 1 and 2 hours (T max )') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '> 90', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'are highly bound (>90%) to human plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida (ezetimiba y glucurónido)', valor: '≈ 22', unidad: 'h', ref: rengR(`${RENG_PK} › Metabolism`, 'with a half-life of approximately 22 hours for both ezetimibe and ezetimibe-glucuronide') },
    { magnitud: 'heces', nombre: 'Radiactividad en las heces (10 días)', valor: '≈ 78', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 78% and 11% of the administered radioactivity') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina (10 días)', valor: '≈ 11', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'were recovered in the feces and urine, respectively') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '174e45e0-45bb-48b7-9e60-8f6cfc1d22bb', 'ZETIA (ezetimibe) tablet', 'ZETIA (Organon LLC)', '8', '2025-11-26', '2026-11-10'), rengPubchem(150311, 'Ezetimibe', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
