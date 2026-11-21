import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-protonix'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'pantoprazol',
    nombre: 'Pantoprazol',
    clase: 'Inhibidor de la bomba de protones (bencimidazol sustituido)',
    sinonimos: ['pantoprazole', 'Protonix'],
    formula: 'C16H15F2N3O4S',
    masaMolar: 383.4,
    smiles: 'COC1=C(C(=NC=C1)CS(=O)C2=NC3=C(N2)C=C(C=C3)OC(F)F)OC',
    inchikey: 'IQPSEEYGBUAQFF-UHFFFAOYSA-N',
    cid: 4679,
    estereo: { descripcion: 'El azufre del sulfóxido es un estereocentro; el pantoprazol sódico es racémico.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'pantoprazol-protonix',
      producto: 'PROTONIX (pantoprazole sodium) comprimidos de liberación retardada de 20 y 40 mg',
      titular: 'Wyeth Pharmaceuticals LLC (Pfizer)',
      mercado: 'EE. UU.',
      forma: 'Comprimido gastrorresistente (con cubierta entérica)',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '20 y 40 mg de pantoprazol por comprimido',
      sal: { nombre: 'Pantoprazol sódico sesquihidrato; 40 mg de pantoprazol equivalen a 45,1 mg de la sal', ref: rengR('11 DESCRIPTION', '40 mg pantoprazole (equivalent to 45.1 mg of pantoprazole sodium)') },
      excipientes: ['calcium stearate', 'crospovidone', 'hypromellose', 'iron oxide', 'mannitol', 'methacrylic acid copolymer', 'polysorbate 80', 'povidone', 'propylene glycol', 'sodium carbonate', 'sodium lauryl sulfate', 'titanium dioxide', 'triethyl citrate'],
      usos: { t: 'Esofagitis erosiva asociada a reflujo (tratamiento y mantenimiento) y estados de hipersecreción ácida como el síndrome de Zollinger-Ellison.', ref: rengR('1 INDICATIONS AND USAGE', 'PROTONIX is a proton pump inhibitor (PPI) indicated for the following') },
      fuente: RENG_F,
      nota: 'La misma etiqueta incluye gránulos para suspensión oral; con ellos una comida rica en grasa sí reduce la exposición (Cmax −51 %, AUC −29 %), a diferencia de los comprimidos.'
    }
  ],
  resumen: {
    contiene: 'Comprimido con cubierta entérica (gastrorresistente) de pantoprazol sódico (la sal del activo), con manitol, crospovidona y copolímero metacrílico.',
    usos: 'Esofagitis erosiva por reflujo y estados de hipersecreción ácida, según su etiqueta.',
    actua: 'Se une de forma covalente a la H⁺/K⁺-ATPasa de las células parietales del estómago y bloquea el último paso de la producción de ácido.',
    recorrido: 'Atraviesa el estómago sin liberarse, se absorbe un 77 %, actúa en el estómago, el hígado lo metaboliza (CYP2C19, CYP3A4) y sus metabolitos salen por la orina (71 %) y la bilis (18 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago', 'duodeno'],
      llega: 'El comprimido con cubierta entérica llega al estómago.',
      ocurre: 'La cubierta no se disuelve en el ácido: el pantoprazol, que se degrada más rápido cuanto más bajo es el pH, no se libera hasta salir del estómago.',
      sigue: 'El comprimido pasa al intestino, donde empieza la absorción.',
      datos: [
        { t: 'Son comprimidos con cubierta entérica: la absorción empieza solo cuando el comprimido sale del estómago.', ref: rengR(RENG_PK, 'are prepared as enteric-coated tablets so that absorption of pantoprazole begins only after the tablet leaves the stomach') },
        { t: 'Su estabilidad en solución depende del pH: la degradación es más rápida cuanto más bajo es (semivida de 2,8 h a pH 5 y 220 h a pH 7,8).', ref: rengR('11 DESCRIPTION', 'The rate of degradation increases with decreasing pH') }
      ],
      formas: ['tableta', 'disuelto']
    },
    absorcion: {
      organos: ['duodeno', 'intestino-delgado'],
      llega: 'El comprimido llega al intestino y libera el pantoprazol.',
      ocurre: 'El máximo en el plasma llega hacia las 2,5 horas. Sufre poco primer paso: biodisponibilidad absoluta del 77 %. La comida puede retrasar la absorción 2 horas o más, sin cambiar el máximo ni la cantidad; los antiácidos no la alteran.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Con comprimidos de 40 mg, el máximo en plasma se alcanzó hacia las 2,5 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'the peak plasma concentration of pantoprazole was achieved in approximately 2.5 hours') },
        { t: 'Sufre poco metabolismo de primer paso: biodisponibilidad absoluta de un 77 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Pantoprazole undergoes little first-pass metabolism, resulting in an absolute bioavailability of approximately 77%') },
        { t: 'Con comida, la absorción puede retrasarse 2 horas o más, sin cambios en la Cmax ni en el AUC.', ref: rengR(`${RENG_PK} › Absorption`, 'with food may delay its absorption up to 2 hours or longer'), condiciones: 'con comida' }
      ]
    },
    distribucion: {
      organos: ['sangre', 'estomago'],
      llega: 'El pantoprazol circula por la sangre hasta las células parietales.',
      ocurre: 'Va unido a proteínas en un 98 % (sobre todo albúmina) y se reparte sobre todo en el líquido extracelular. En la superficie secretora de las células parietales se une de forma covalente a la H⁺/K⁺-ATPasa: el efecto antisecretor dura más de 24 horas, aunque su semivida en la sangre es de una hora.',
      sigue: 'El hígado lo metaboliza.',
      simultaneo: 'El efecto sobre el ácido persiste cuando el fármaco ya ha desaparecido de la sangre.',
      datos: [{ t: 'Volumen de distribución aparente de 11-23,6 L, sobre todo en el líquido extracelular; un 98 % unido a proteínas séricas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'The serum protein binding of pantoprazole is about 98%, primarily to albumin') }],
      accion: {
        diana: 'H⁺/K⁺-ATPasa (bomba de protones) de la célula parietal gástrica',
        efecto: 'Inhibe la secreción de ácido basal y estimulada durante más de 24 horas.',
        lugar: ['estomago'],
        datos: [
          { t: 'Suprime el último paso de la producción de ácido uniéndose de forma covalente a la H⁺/K⁺-ATPasa en la superficie secretora de la célula parietal.', ref: rengR('12.1 Mechanism of Action', 'suppresses the final step in gastric acid production by covalently binding') },
          { t: 'El efecto antisecretor dura más de 24 horas con todas las dosis estudiadas.', ref: rengR('12.1 Mechanism of Action', 'results in a duration of antisecretory effect that persists longer than 24 hours') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El pantoprazol llega al hígado.',
      ocurre: 'Se metaboliza ampliamente en el hígado: la vía principal es la desmetilación por CYP2C19 seguida de sulfatación; otra vía es la oxidación por CYP3A4. Ningún metabolito tiene actividad importante.',
      sigue: 'Los metabolitos van a los riñones y a la bilis.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado por el sistema citocromo P450.', ref: rengR(`${RENG_PK} › Metabolism`, 'Pantoprazole is extensively metabolized in the liver through the cytochrome P450 (CYP) system') },
        { t: 'Vía principal: desmetilación por CYP2C19 y sulfatación posterior; también oxidación por CYP3A4.', ref: rengR(`${RENG_PK} › Metabolism`, 'The main metabolic pathway is demethylation, by CYP2C19, with subsequent sulfation') },
        { t: 'Semivida terminal de una hora.', ref: rengR(RENG_PK, 'with a terminal elimination half-life of approximately one hour') }
      ],
      metabolitos: [{ nombre: 'Metabolitos desmetilados y sulfatados, y oxidados', actividad: 'inactivo', nota: 'Sin actividad farmacológica significativa.', ref: rengR(`${RENG_PK} › Metabolism`, 'There is no evidence that any of the pantoprazole metabolites have significant pharmacologic activity') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y a la bilis.',
      ocurre: 'Con pantoprazol marcado, un 71 % de la dosis sale por la orina y un 18 % por las heces, a través de la bilis. No se excreta pantoprazol sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 71 % de la dosis se excretó en la orina y un 18 % en las heces por excreción biliar; no hubo excreción renal de pantoprazol sin cambios.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 71% of the dose was excreted in the urine, with 18% excreted in the feces through biliary excretion'), poblacion: 'metabolizadores normales sanos' }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (40 mg)', valor: '≈ 2,5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'was achieved in approximately 2.5 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 77', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'absolute bioavailability of approximately 77%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '11-23,6', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 11 to 23.6 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas séricas', valor: '≈ 98', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'The serum protein binding of pantoprazole is about 98%') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '≈ 1', unidad: 'h', ref: rengR(RENG_PK, 'terminal elimination half-life of approximately one hour') },
    { magnitud: 'orina', nombre: 'Dosis excretada en la orina (metabolitos)', valor: '≈ 71', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 71% of the dose was excreted in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '08098cb2-c048-4640-f387-6beec4a38936', 'PROTONIX (pantoprazole sodium) tablet, delayed release; granule, delayed release', 'PROTONIX Delayed-Release (Wyeth Pharmaceuticals LLC, Pfizer)', '48', '2026-05-20', '2026-11-10'), rengPubchem(4679, 'Pantoprazole', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
