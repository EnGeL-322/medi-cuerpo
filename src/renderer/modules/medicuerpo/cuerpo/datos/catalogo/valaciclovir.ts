import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-valtrex'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'valaciclovir',
    nombre: 'Valaciclovir',
    clase: 'Antiviral (profármaco del aciclovir; análogo de nucleósido)',
    sinonimos: ['valacyclovir', 'valaciclovir', 'Valtrex'],
    formula: 'C13H20N6O4',
    masaMolar: 324.34,
    smiles: 'CC(C)[C@@H](C(=O)OCCOCN1C=NC2=C1N=C(NC2=O)N)N',
    inchikey: 'HDOVUKNUBWVHOX-QMMMGPOBSA-N',
    cid: 135398742,
    estereo: { descripcion: 'Un estereocentro, el de la L-valina: es un solo enantiómero.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'valaciclovir-valtrex',
      producto: 'VALTREX (valacyclovir) comprimidos recubiertos de 500 mg y 1 g',
      titular: 'GlaxoSmithKline LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '556,2 mg o 1,112 g de hidrocloruro de valaciclovir, equivalentes a 500 mg o 1 g de valaciclovir',
      sal: { nombre: 'Hidrocloruro de valaciclovir (éster L-valílico del aciclovir)', ref: rengR('11 DESCRIPTION', 'is the hydrochloride salt of the L ‑valyl ester of the antiviral drug acyclovir') },
      excipientes: ['carnauba wax', 'colloidal silicon dioxide', 'crospovidone', 'FD&C Blue No. 2 Lake', 'hypromellose', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol', 'polysorbate 80', 'povidone', 'titanium dioxide'],
      usos: { t: 'Herpes labial, herpes genital (tratamiento, supresión y reducción del contagio) y herpes zóster en adultos; herpes labial y varicela en niños de ciertas edades.', ref: rengR('1 INDICATIONS AND USAGE', 'VALTREX is indicated for treatment of cold sores (herpes labialis)') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto azul con hidrocloruro de valaciclovir (la sal de un éster del aciclovir), celulosa y povidona.',
    usos: 'Infecciones por virus del herpes (labial, genital, zóster y varicela), según su etiqueta.',
    actua: 'Es un profármaco: se convierte en aciclovir, que dentro de las células infectadas se activa por una enzima del virus y bloquea la copia de su ADN.',
    recorrido: 'Se absorbe rápido y casi todo se convierte en aciclovir y L-valina en el primer paso por el intestino o el hígado; el aciclovir se une poco a proteínas y sale sobre todo por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el hidrocloruro de valaciclovir, muy soluble en agua (174 mg/mL).',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La solubilidad máxima en agua a 25 °C es de 174 mg/mL.', ref: rengR('11 DESCRIPTION', 'The maximum solubility in water at 25°C is 174 mg/mL') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['higado'],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el valaciclovir disuelto.',
      ocurre: 'Se absorbe rápido y, en el primer paso por el intestino o el hígado, casi todo se convierte en aciclovir y L-valina. Así, la biodisponibilidad del aciclovir es del 54,5 %, bastante más que si se tomara aciclovir. La comida no la cambia.',
      sigue: 'El aciclovir pasa a la circulación general.',
      simultaneo: 'Absorción y conversión en aciclovir ocurren a la vez, en el primer paso.',
      datos: [
        { t: 'Se absorbe rápidamente y se convierte casi por completo en aciclovir y L-valina por metabolismo de primer paso intestinal y/o hepático.', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'nearly completely converted to acyclovir and L- valine by first-pass intestinal and/or hepatic metabolism') },
        { t: 'La biodisponibilidad absoluta del aciclovir tras tomar valaciclovir es del 54,5 % ± 9,1 % (1 g oral frente a aciclovir intravenoso, en 12 voluntarios sanos).', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'The absolute bioavailability of acyclovir after administration of VALTREX is 54.5% ± 9.1%'), poblacion: '12 voluntarios sanos' },
        { t: 'La comida no altera la biodisponibilidad del aciclovir.', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'Acyclovir bioavailability from the administration of VALTREX is not altered by administration with food'), condiciones: 'con desayuno de 873 kcal' }
      ],
      sinDatos: ['Reparto de la conversión entre intestino e hígado']
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'Circula el aciclovir; el valaciclovir sin convertir desaparece en unas 3 horas.',
      ocurre: 'El valaciclovir se une a proteínas en un 13,5-17,9 % y el aciclovir en un 9-33 %. En las células infectadas por herpes, una enzima del virus (la timidina cinasa) fosforila el aciclovir; las enzimas de la célula lo llevan a trifosfato, que bloquea la ADN polimerasa del virus y corta su cadena de ADN.',
      sigue: 'Una pequeña parte del aciclovir se transforma; la mayoría va a los riñones.',
      datos: [
        { t: 'La unión a proteínas plasmáticas es del 13,5-17,9 % para el valaciclovir y del 9-33 % para el aciclovir.', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of acyclovir to human plasma proteins ranges from 9% to 33%') },
        { t: 'Las concentraciones de valaciclovir sin convertir son bajas y transitorias; dejan de poder medirse hacia las 3 horas.', ref: rengR(`${RENG_PK} › Metabolism`, 'Plasma concentrations of unconverted valacyclovir are low and transient') }
      ],
      sinDatos: ['Volumen de distribución', 'Concentraciones en los tejidos'],
      accion: {
        diana: 'ADN polimerasa de los virus herpes (a través del trifosfato de aciclovir)',
        efecto: 'Impide que los virus herpes simple y varicela-zóster copien su ADN.',
        lugar: ['sitio-infeccion'],
        datos: [
          { t: 'El aciclovir se fosforila dentro de la célula por la timidina cinasa del virus; después, enzimas celulares forman el trifosfato.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'is phosphorylated intracellularly by the viral encoded thymidine kinase (TK; pUL23) of HSV or VZV into acyclovir monophosphate') },
          { t: 'El trifosfato de aciclovir inhibe la replicación del ADN viral: compite con la ADN polimerasa del virus, se incorpora y termina la cadena, e inactiva la polimerasa.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'acyclovir triphosphate inhibits replication of α-herpes viral DNA') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El aciclovir llega a enzimas que no son del citocromo P450.',
      ocurre: 'Una pequeña parte del aciclovir se convierte en metabolitos inactivos por la aldehído oxidasa y las alcohol y aldehído deshidrogenasas. Ni el valaciclovir ni el aciclovir se metabolizan por el citocromo P450.',
      sigue: 'El aciclovir y sus metabolitos van a los riñones.',
      datos: [
        { t: 'El aciclovir se convierte en pequeña medida en metabolitos inactivos por la aldehído oxidasa y las alcohol y aldehído deshidrogenasas; ninguno de los dos se metaboliza por CYP450.', ref: rengR(`${RENG_PK} › Metabolism`, 'Neither valacyclovir nor acyclovir is metabolized by cytochrome P450 enzymes') },
        { t: 'Con insuficiencia hepática moderada o grave, la conversión a aciclovir es más lenta pero igual de completa.', ref: rengR(`${RENG_PK} › Patients with Hepatic Impairment`, 'the rate but not the extent of conversion of valacyclovir to acyclovir is reduced'), poblacion: 'insuficiencia hepática' }
      ],
      sinDatos: ['Órgano donde se forman los metabolitos del aciclovir'],
      metabolitos: [
        { nombre: 'Aciclovir', nombreFuente: 'acyclovir', actividad: 'activo', nota: 'Es el antiviral que actúa.', smiles: 'C1=NC2=C(N1COCCO)N=C(NC2=O)N', cid: 135398513, ref: rengR(`${RENG_PK} › Metabolism`, 'Valacyclovir is converted to acyclovir and L -valine by first-pass intestinal and/or hepatic metabolism') },
        { nombre: 'L-valina', nombreFuente: 'L-valine', actividad: 'desconocida', nota: 'Aminoácido que se libera al romperse el éster.', smiles: 'CC(C)[C@@H](C(=O)O)N', cid: 6287, ref: rengR(`${RENG_PK} › Metabolism`, 'Valacyclovir is converted to acyclovir and L -valine') },
        { nombre: 'Metabolitos del aciclovir', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'Acyclovir is converted to a small extent to inactive metabolites by aldehyde oxidase') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El aciclovir llega a los riñones.',
      ocurre: 'Con una dosis marcada, un 46 % salió por la orina y un 47 % por las heces en 4 días; en la orina, el 89 % era aciclovir. Su semivida es de 2,5-3,3 horas con riñones sanos y de unas 14 horas en la insuficiencia renal terminal.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras 1 g de valaciclovir marcado en 4 voluntarios sanos, un 46 % de la radiactividad se recuperó en la orina y un 47 % en las heces en 96 horas; el aciclovir supuso el 89 % de la urinaria.', ref: rengR(`${RENG_PK} › Elimination`, '46% and 47% of administered radioactivity was recovered in urine and feces, respectively, over 96 hours'), poblacion: '4 voluntarios sanos' },
        { t: 'La semivida del aciclovir fue de 2,5 a 3,3 horas con función renal normal.', ref: rengR(`${RENG_PK} › Elimination`, 'The plasma elimination half‑life of acyclovir typically averaged 2.5 to 3.3 hours'), poblacion: 'función renal normal' },
        { t: 'En la insuficiencia renal terminal, la semivida media del aciclovir es de unas 14 horas.', ref: rengR(`${RENG_PK} › Patients with Renal Impairment`, 'the average acyclovir half‑life is approximately 14 hours'), poblacion: 'insuficiencia renal terminal' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad del aciclovir (desde valaciclovir)', valor: '54,5 ± 9,1', unidad: '%', poblacion: '12 voluntarios sanos', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'is 54.5% ± 9.1%') },
    { magnitud: 'union', nombre: 'Unión a proteínas del aciclovir', valor: '9-33', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'ranges from 9% to 33%') },
    { magnitud: 'semivida', nombre: 'Semivida del aciclovir', valor: '2,5-3,3', unidad: 'h', poblacion: 'función renal normal', ref: rengR(`${RENG_PK} › Elimination`, 'typically averaged 2.5 to 3.3 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento renal del aciclovir', valor: '255 ± 86', unidad: 'mL/min', poblacion: '12 voluntarios sanos', ref: rengR(`${RENG_PK} › Elimination`, 'was approximately 255 ± 86 mL/min') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina (96 h)', valor: '46', unidad: '% de la dosis', poblacion: '4 voluntarios sanos', ref: rengR(`${RENG_PK} › Elimination`, '46% and 47% of administered radioactivity') },
    { magnitud: 'heces', nombre: 'Radiactividad en las heces (96 h)', valor: '47', unidad: '% de la dosis', poblacion: '4 voluntarios sanos', ref: rengR(`${RENG_PK} › Elimination`, '46% and 47% of administered radioactivity was recovered in urine and feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'f8e0d8f8-cb73-4206-a484-88f5c4fbd719', 'VALTREX (valacyclovir hydrochloride) tablet, film coated', 'VALTREX (GlaxoSmithKline LLC)', '32', '2026-06-10', '2026-11-10'), rengPubchem(135398742, 'Valacyclovir', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
