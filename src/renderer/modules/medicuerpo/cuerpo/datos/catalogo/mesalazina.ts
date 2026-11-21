import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lialda'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'mesalazina',
    nombre: 'Mesalazina (5-ASA)',
    clase: 'Aminosalicilato antiinflamatorio intestinal',
    sinonimos: ['mesalamine', 'mesalazine', '5-aminosalicylic acid', 'ácido 5-aminosalicílico', 'Lialda'],
    formula: 'C7H7NO3',
    masaMolar: 153.14,
    smiles: 'C1=CC(=C(C=C1N)C(=O)O)O',
    inchikey: 'KBOPZPXVLCULAV-UHFFFAOYSA-N',
    cid: 4075,
    iupac: 'ácido 5-amino-2-hidroxibenzoico',
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'mesalazina-lialda',
      producto: 'LIALDA (mesalamine) comprimidos de liberación retardada de 1,2 g',
      titular: 'Takeda Pharmaceuticals America, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido con película dependiente del pH y núcleo de liberación prolongada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '1,2 g de mesalazina por comprimido',
      excipientes: ['sodium carboxymethylcellulose', 'carnauba wax', 'stearic acid', 'silica (colloidal hydrated)', 'sodium starch glycolate (type A)', 'talc', 'magnesium stearate', 'methacrylic acid copolymer types A and B', 'triethylcitrate', 'titanium dioxide', 'red ferric oxide', 'polyethylene glycol 6000'],
      usos: { t: 'Colitis ulcerosa leve o moderadamente activa: inducir y mantener la remisión en adultos y tratarla en niños de al menos 24 kg.', ref: rengR('1 INDICATIONS AND USAGE', 'induction and maintenance of remission in adult patients with mildly to moderately active ulcerative colitis') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de 1,2 g de mesalazina con una película que solo se rompe a pH 6,8 o más y un núcleo que la libera poco a poco.',
    usos: 'Colitis ulcerosa leve o moderada, según su etiqueta.',
    actua: 'Tiene un efecto antiinflamatorio local sobre las células del colon; podría bloquear la ciclooxigenasa y la producción de prostaglandinas allí (no se conoce del todo).',
    recorrido: 'Pasa intacta por el estómago, se libera al final del íleon y en el colon, donde actúa; solo se absorbe un 21-22 %, que se acetila y sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago', 'intestino-delgado', 'intestino-grueso'],
      llega: 'El comprimido recorre el estómago y el intestino delgado sin romperse.',
      ocurre: 'La película solo se deshace a pH 6,8 o más, normalmente al final del íleon; allí el núcleo empieza a liberar la mesalazina poco a poco (liberación prolongada), y se reparte por el colon.',
      sigue: 'La mesalazina queda sobre todo en el colon, donde actúa; una parte se absorbe.',
      datos: [
        { t: 'La película del comprimido depende del pH: se rompe a pH 6,8 o más, normalmente en el íleon terminal, donde empieza la liberación desde el núcleo.', ref: rengR('11 DESCRIPTION', 'The tablet is coated with a pH-dependent polymer film, which breaks down at or above pH 6.8, normally in the terminal ileum') },
        { t: 'El núcleo, con excipientes hidrófilos y lipófilos, la libera de forma prolongada.', ref: rengR('11 DESCRIPTION', 'provides for extended release of mesalamine') },
        { t: 'Por gammagrafía, un comprimido atravesó intacto el tubo digestivo superior y el trazador se repartió por el colon.', ref: rengR(`${RENG_PK} › Absorption`, 'passed intact through the upper gastrointestinal tract of fasted healthy subjects'), poblacion: 'personas sanas en ayunas' }
      ],
      formas: ['tableta', 'disuelto'],
      ruta: ['esofago', 'estomago', 'duodeno', 'intestino-delgado', 'intestino-grueso']
    },
    absorcion: {
      organos: ['intestino-grueso'],
      llega: 'La mesalazina liberada en el colon.',
      ocurre: 'Solo se absorbe un 21-22 % de la dosis. En la sangre se detecta a las 2 horas y su máximo llega a las 9-12 horas, con gran variabilidad. Una comida rica en grasa retrasa más la absorción pero aumenta la exposición (Cmax +91 %).',
      sigue: 'La mayor parte se queda en el colon; lo absorbido se acetila.',
      simultaneo: 'Mientras una parte se absorbe, la mayoría actúa en la pared del colon.',
      datos: [
        { t: 'La absorción total fue de un 21-22 % de la dosis (2,4 o 4,8 g al día durante 14 días, personas sanas).', ref: rengR(`${RENG_PK} › Absorption`, 'was found to be approximately 21% to 22% of the administered dose'), poblacion: 'personas sanas' },
        { t: 'En ayunas se detecta en plasma a las 2 horas y el máximo llega a las 9-12 horas de media.', ref: rengR(`${RENG_PK} › Absorption`, 'Plasma concentrations of mesalamine were detectable after 2 hours and reached a maximum by 9-12 hours on average'), condiciones: 'en ayunas' },
        { t: 'Con una comida rica en grasa la absorción se retrasa más, pero la Cmax aumentó un 91 % y el AUC un 16 %.', ref: rengR(`${RENG_PK} › Food Effects`, 'mean C max : increased 91%; mean AUC: increased 16%'), condiciones: '4,8 g con comida rica en grasa' }
      ],
      formas: ['disuelto'],
      ruta: ['intestino-grueso']
    },
    distribucion: {
      organos: ['intestino-grueso', 'sangre'],
      llega: 'La mesalazina está en la luz del colon (y una parte en la sangre).',
      ocurre: 'Actúa de forma tópica sobre las células epiteliales del colon. En la colitis ulcerosa la mucosa produce más derivados del ácido araquidónico; la mesalazina podría reducir la inflamación bloqueando la ciclooxigenasa y la producción de prostaglandinas. En el plasma, un 43 % va unido a proteínas.',
      sigue: 'Lo absorbido se acetila en el hígado y en la mucosa intestinal.',
      datos: [{ t: 'Un 43 % se une a proteínas plasmáticas a 2,5 mcg/mL.', ref: rengR(`${RENG_PK} › Distribution`, 'Mesalamine is approximately 43% bound to plasma proteins') }],
      accion: {
        diana: 'Probablemente la ciclooxigenasa de la mucosa del colon (mecanismo no del todo conocido)',
        efecto: 'Antiinflamatorio local en el colon.',
        lugar: ['intestino-grueso'],
        datos: [
          { t: 'Su mecanismo no se conoce del todo, pero parece tener un efecto antiinflamatorio tópico sobre las células epiteliales del colon.', ref: rengR('12.1 Mechanism of Action', 'it appears to have a topical anti-inflammatory effect on the colonic epithelial cells') },
          { t: 'Es posible que reduzca la inflamación bloqueando la ciclooxigenasa e inhibiendo la producción de prostaglandinas en el colon.', ref: rengR('12.1 Mechanism of Action', 'it is possible that mesalamine diminishes inflammation by blocking cyclooxygenase and inhibiting prostaglandin production in the colon') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado', 'intestino-grueso'],
      llega: 'La mesalazina absorbida llega a la mucosa intestinal y al hígado.',
      ocurre: 'Su único metabolito importante es la N-acetil-5-ASA, formada por la N-acetiltransferasa (sobre todo NAT-1) en el hígado y en las células de la mucosa intestinal.',
      sigue: 'La mesalazina y su metabolito acetilado van a los riñones.',
      datos: [{ t: 'Su único metabolito mayor es el ácido N-acetil-5-aminosalicílico, formado por la N-acetiltransferasa del hígado y de la mucosa intestinal, sobre todo NAT-1.', ref: rengR(`${RENG_PK} › Metabolism`, 'Its formation is brought about by N-acetyltransferase (NAT) activity in the liver and intestinal mucosa cells, principally by NAT-1') }],
      metabolitos: [{ nombre: 'Ácido N-acetil-5-aminosalicílico', nombreFuente: 'N-acetyl-5-aminosalicylic acid', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'The only major metabolite of mesalamine (5-aminosalicylic acid) is N-acetyl-5-aminosalicylic acid') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Lo absorbido llega a los riñones; el resto sigue por el colon.',
      ocurre: 'Lo absorbido se excreta sobre todo por la orina como N-acetil-5-ASA (más del 13 % de la dosis en 24 h) y menos del 8 % como mesalazina sin cambios. Semividas aparentes: 7-9 horas (mesalazina) y 8-12 horas (metabolito).',
      sigue: 'Fin del recorrido; lo que no se absorbe sale con las heces.',
      datos: [
        { t: 'Se excreta sobre todo por vía renal tras acetilarse; también sale algo sin cambios por la orina.', ref: rengR(`${RENG_PK} › Excretion`, 'Excretion of mesalamine is mainly via the renal route following metabolism to N-acetyl-5-aminosalicylic acid') },
        { t: 'En 24 horas salió por la orina menos del 8 % de la dosis sin cambios y más del 13 % como N-acetil-5-ASA.', ref: rengR(`${RENG_PK} › Excretion`, 'less than 8% of the dose was excreted unchanged in the urine after 24 hours') },
        { t: 'Semividas terminales aparentes de 7-9 horas (mesalazina) y 8-12 horas (metabolito).', ref: rengR(`${RENG_PK} › Excretion`, 'were, on average, 7 to 9 hours and 8 to 12 hours, respectively') }
      ],
      sinDatos: ['Porcentaje de la dosis eliminado sin absorber por las heces']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción total', valor: '21-22', unidad: '% de la dosis', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 21% to 22% of the administered dose') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (en ayunas)', valor: '9-12', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'reached a maximum by 9-12 hours on average') },
    { magnitud: 'comida', nombre: 'Comida rica en grasa: Cmax y AUC', valor: '+91 y +16', unidad: '%', condiciones: 'dosis de 4,8 g', ref: rengR(`${RENG_PK} › Food Effects`, 'mean C max : increased 91%; mean AUC: increased 16%') },
    { magnitud: 'union', nombre: 'Unión a proteínas (2,5 mcg/mL)', valor: '≈ 43', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 43% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida aparente (mesalazina)', valor: '7-9', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, '7 to 9 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '3098a080-be86-4265-9818-7fc4beab77b7', 'LIALDA (mesalamine) tablet, delayed release', 'LIALDA (Takeda Pharmaceuticals America, Inc.)', '50', '2026-10-28', '2026-11-10'), rengPubchem(4075, 'Mesalamine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
