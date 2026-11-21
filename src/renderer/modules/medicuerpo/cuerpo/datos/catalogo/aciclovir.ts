import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-aciclovir-avet'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_CP = 'CLINICAL PHARMACOLOGY › Pharmacokinetics'

export default {
  activo: {
    id: 'aciclovir',
    nombre: 'Aciclovir',
    clase: 'Antiviral: análogo de nucleósido de guanina',
    sinonimos: ['acyclovir', 'aciclovir'],
    formula: 'C8H11N5O3',
    masaMolar: 225.2,
    smiles: 'C1=NC2=C(N1COCCO)N=C(NC2=O)N',
    inchikey: 'MKUXAQIIEYXACX-UHFFFAOYSA-N',
    cid: 135398513,
    estereo: { descripcion: 'Sin estereocentros: la cadena acíclica sustituye al azúcar del nucleósido.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'aciclovir-avet',
      producto: 'Acyclovir comprimidos de 400 y 800 mg (genérico)',
      titular: 'Heritage Pharmaceuticals Inc. (Avet Pharmaceuticals Inc.)',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '400 y 800 mg de aciclovir por comprimido',
      excipientes: ['magnesium stearate', 'microcrystalline cellulose', 'povidone', 'silicon dioxide', 'sodium starch glycolate'],
      usos: { t: 'Tratamiento agudo del herpes zóster, episodios iniciales y recurrentes de herpes genital, y varicela.', ref: rengR('INDICATIONS AND USAGE', 'Acyclovir tablets are indicated for the acute treatment of herpes zoster (shingles)') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de aciclovir (sin sal) con celulosa, povidona y sílice.',
    usos: 'Herpes zóster, herpes genital y varicela, según su etiqueta.',
    actua: 'Dentro de las células infectadas, una enzima del virus (la timidina cinasa) lo activa; su trifosfato bloquea la ADN polimerasa del virus y corta su cadena de ADN.',
    recorrido: 'Se absorbe poco (10-20 %, menos cuanto mayor es la dosis), se une poco a proteínas y los riñones lo eliminan; su semivida es de 2,5-3,3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el aciclovir, poco soluble en agua (2,5 mg/mL a 37 °C).',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Su solubilidad máxima en agua a 37 °C es de 2,5 mg/mL.', ref: rengR('DESCRIPTION', 'The maximum solubility in water at 37°C is 2.5 mg/mL') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el aciclovir disuelto.',
      ocurre: 'Se absorbe poco: la biodisponibilidad media es del 10-20 % y baja al subir la dosis (por la dosis, no por la forma). La comida no la cambia. Por eso existe el valaciclovir, su profármaco, que se absorbe mejor.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad oral media es del 10-20 % y disminuye al aumentar la dosis.', ref: rengR(RENG_CP, 'Average oral bioavailability 10% to 20%') },
        { t: 'Las concentraciones aumentan menos que la dosis; la caída de biodisponibilidad depende de la dosis y no de la forma farmacéutica.', ref: rengR(RENG_CP, 'The decrease in bioavailability is a function of the dose and not the dosage form') },
        { t: 'La comida no afectó a la absorción.', ref: rengR(RENG_CP, 'There was no effect of food on the absorption of acyclovir'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tiempo hasta la concentración máxima', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'sitio-infeccion'],
      llega: 'El aciclovir circula por la sangre.',
      ocurre: 'Se une poco a proteínas (9-33 %). En las células infectadas por herpes simple o varicela-zóster, la timidina cinasa del virus lo fosforila; las enzimas de la célula forman el trifosfato, que detiene la copia del ADN viral.',
      sigue: 'Va a los riñones casi sin transformar.',
      datos: [{ t: 'La unión a proteínas plasmáticas es del 9-33 %.', ref: rengR(RENG_CP, 'Plasma protein binding 9% to 33%') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'ADN polimerasa de los virus herpes (a través del trifosfato de aciclovir)',
        efecto: 'Detiene la replicación del ADN del virus herpes simple y varicela-zóster.',
        lugar: ['sitio-infeccion'],
        datos: [
          { t: 'Su actividad es muy selectiva por su afinidad por la timidina cinasa codificada por el VHS y el VVZ, que lo convierte en monofosfato.', ref: rengR('DESCRIPTION › VIROLOGY', 'This viral enzyme converts acyclovir into acyclovir monophosphate, a nucleotide analogue') },
          { t: 'El trifosfato de aciclovir detiene la replicación del ADN viral: inhibe la ADN polimerasa, se incorpora y termina la cadena, e inactiva la polimerasa.', ref: rengR('DESCRIPTION › VIROLOGY', 'acyclovir triphosphate stops replication of herpes viral DNA') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte del aciclovir se transforma.',
      ocurre: 'El único metabolito urinario conocido es la 9-[(carboximetoxi)metil]guanina. La etiqueta no da su proporción ni dónde se forma.',
      sigue: 'El aciclovir y su metabolito van a los riñones.',
      datos: [{ t: 'El único metabolito urinario conocido es la 9-[(carboximetoxi)metil]guanina.', ref: rengR(RENG_CP, 'The only known urinary metabolite is 9-[(carboxymethoxy)methyl]guanine') }],
      sinDatos: ['Fracción metabolizada', 'Órgano del metabolismo', 'Actividad del metabolito'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [{ nombre: '9-[(carboximetoxi)metil]guanina', nombreFuente: '9-[(carboxymethoxy)methyl]guanine', actividad: 'desconocida', ref: rengR(RENG_CP, 'The only known urinary metabolite is 9-[(carboxymethoxy)methyl]guanine') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El aciclovir llega a los riñones.',
      ocurre: 'Su eliminación depende de la función renal: la semivida (2,5-3,3 horas) y el aclaramiento cambian si los riñones funcionan peor. El probenecid, que frena la secreción renal, alarga su semivida.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La semivida de eliminación plasmática es de 2,5-3,3 horas.', ref: rengR(RENG_CP, 'Plasma elimination half-life 2.5 to 3.3 hr') },
        { t: 'La semivida y el aclaramiento total dependen de la función renal.', ref: rengR(`${RENG_CP} › Adults With Impaired Renal Function`, 'The half-life and total body clearance of acyclovir are dependent on renal function'), poblacion: 'insuficiencia renal' },
        { t: 'El probenecid con aciclovir intravenoso aumentó su semivida y redujo su excreción urinaria y aclaramiento renal.', ref: rengR(`${RENG_CP} › Drug Interactions`, 'Urinary excretion and renal clearance were correspondingly reduced') }
      ],
      sinDatos: ['Porcentaje de la dosis en la orina'],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral media', valor: '10-20', unidad: '%', ref: rengR(RENG_CP, 'Average oral bioavailability 10% to 20%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '9-33', unidad: '%', ref: rengR(RENG_CP, 'Plasma protein binding 9% to 33%') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '2,5-3,3', unidad: 'h', ref: rengR(RENG_CP, 'Plasma elimination half-life 2.5 to 3.3 hr') },
    { magnitud: 'cmax', nombre: 'Concentración máxima en equilibrio (400 mg)', valor: '1,21', unidad: 'µg/mL', ref: rengR(RENG_CP, 'C SS max 0.83 mcg/mL 1.21 mcg/mL 1.61 mcg/mL') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '0de2f5c7-9e75-4bdf-9c28-e026cc6694b4', 'ACYCLOVIR tablet', 'Acyclovir (Heritage Pharmaceuticals Inc. d/b/a Avet Pharmaceuticals Inc.)', '6', '2026-08-24', '2026-11-10'), rengPubchem(135398513, 'Acyclovir', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
