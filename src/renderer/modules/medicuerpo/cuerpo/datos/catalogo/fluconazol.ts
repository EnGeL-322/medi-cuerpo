import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-diflucan'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = 'CLINICAL PHARMACOLOGY › Pharmacokinetics and Metabolism'

export default {
  activo: {
    id: 'fluconazol',
    nombre: 'Fluconazol',
    clase: 'Antifúngico triazólico',
    sinonimos: ['fluconazole', 'Diflucan'],
    formula: 'C13H12F2N6O',
    masaMolar: 306.27,
    smiles: 'C1=CC(=C(C=C1F)F)C(CN2C=NC=N2)(CN3C=NC=N3)O',
    inchikey: 'RFHAOTPXVQNOHP-UHFFFAOYSA-N',
    cid: 3365,
    estereo: { descripcion: 'Sin estereocentros: el carbono central lleva dos grupos iguales (triazolilmetilo).' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'fluconazol-diflucan',
      producto: 'DIFLUCAN (fluconazole) comprimidos de 50, 100, 150 y 200 mg',
      titular: 'Roerig (Pfizer)',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '50, 100, 150 y 200 mg de fluconazol por comprimido',
      excipientes: ['microcrystalline cellulose', 'dibasic calcium phosphate anhydrous', 'povidone', 'croscarmellose sodium', 'FD&C Red No. 40 aluminum lake dye', 'magnesium stearate'],
      usos: { t: 'Candidiasis vaginal, orofaríngea y esofágica, meningitis criptocócica y prevención de candidiasis en trasplantes de médula ósea, entre otras infecciones por hongos.', ref: rengR('INDICATIONS AND USAGE', 'Vaginal candidiasis (vaginal yeast infections due to Candida )') },
      fuente: RENG_F,
      nota: 'La misma etiqueta incluye un polvo para suspensión oral, bioequivalente al comprimido de 100 mg.'
    }
  ],
  resumen: {
    contiene: 'Comprimido de fluconazol (sin sal) con celulosa, fosfato cálcico, povidona y un colorante rojo.',
    usos: 'Infecciones por hongos como la candidiasis y la meningitis criptocócica, según su etiqueta.',
    actua: 'Inhibe una enzima del hongo (la 14-α-desmetilasa del lanosterol) que fabrica el ergosterol de su membrana; la enzima humana equivalente es mucho menos sensible.',
    recorrido: 'Se absorbe casi entero (> 90 %), apenas se une a proteínas, llega a todos los líquidos del cuerpo y sale sobre todo sin cambios por la orina (80 %), con una semivida de unas 30 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el fluconazol, poco soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El fluconazol es un sólido cristalino poco soluble en agua y en suero salino.', ref: rengR('DESCRIPTION', 'Fluconazole is a white crystalline solid which is slightly soluble in water and saline') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el fluconazol disuelto.',
      ocurre: 'Se absorbe casi por completo: su biodisponibilidad oral supera el 90 % de la intravenosa. En ayunas, el máximo llega en 1-2 horas. La comida no cambia la cantidad absorbida.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'En voluntarios sanos, la biodisponibilidad oral supera el 90 % de la intravenosa.', ref: rengR(RENG_PK, 'the bioavailability of orally administered fluconazole is over 90% compared with intravenous administration'), poblacion: 'voluntarios sanos' },
        { t: 'En ayunas, el máximo en plasma aparece entre 1 y 2 horas.', ref: rengR(RENG_PK, 'Peak plasma concentrations (C max ) in fasted normal volunteers occur between 1 and 2 hours'), condiciones: 'en ayunas' },
        { t: 'Una comida rica en grasa no cambia la exposición: puede tomarse con o sin comida.', ref: rengR(RENG_PK, 'indicated that exposure to the drug is not affected by food'), condiciones: 'con comida rica en grasa' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo', 'piel', 'unas', 'organos-reproductores', 'vias-respiratorias'],
      llega: 'El fluconazol circula por la sangre.',
      ocurre: 'Solo un 11-12 % va unido a proteínas y su volumen se parece al del agua total del cuerpo: llega a todos los líquidos estudiados. En la saliva y el esputo iguala al plasma; en el líquido cefalorraquídeo alcanza un 50-90 %; en la piel sana y en la orina, unas 10 veces más. Allí donde está el hongo, bloquea la fabricación del ergosterol de su membrana.',
      sigue: 'Va casi sin transformar a los riñones.',
      datos: [
        { t: 'Su volumen de distribución aparente se aproxima al del agua corporal total y la unión a proteínas es baja (11-12 %).', ref: rengR(RENG_PK, 'The apparent volume of distribution of fluconazole approximates that of total body water. Plasma protein binding is low (11 to 12%)') },
        { t: 'Penetra en todos los líquidos corporales estudiados.', ref: rengR(RENG_PK, 'fluconazole penetrates into all body fluids studied') },
        { t: 'En pacientes con meningitis fúngica, la concentración en el líquido cefalorraquídeo es un 80 % de la del plasma.', ref: rengR(RENG_PK, 'In patients with fungal meningitis, fluconazole concentrations in the cerebrospinal fluid (CSF) are approximately 80% of the corresponding plasma concentrations'), poblacion: 'meningitis fúngica' },
        { t: 'Proporción tejido o líquido / plasma: piel sana y orina ≈ 10; saliva, esputo, uñas y tejido vaginal ≈ 1; líquido cefalorraquídeo 0,5-0,9.', ref: rengR(RENG_PK, 'Urine 10 Normal skin 10 Nails 1 Blister skin 2 Vaginal tissue 1') }
      ],
      accion: {
        diana: 'Lanosterol 14-α-desmetilasa del hongo (enzima dependiente de citocromo P450)',
        efecto: 'Fungistático: el hongo pierde sus esteroles normales y acumula 14-α-metil-esteroles.',
        lugar: ['sitio-infeccion'],
        datos: [
          { t: 'Es un inhibidor muy selectivo de la 14-α-desmetilasa del lanosterol del hongo, que convierte el lanosterol en ergosterol.', ref: rengR('Mechanism of Action', 'Fluconazole is a highly selective inhibitor of fungal cytochrome P450 dependent enzyme lanosterol 14-α-demethylase') },
          { t: 'La desmetilación en células de mamífero es mucho menos sensible a su inhibición.', ref: rengR('Mechanism of Action', 'Mammalian cell demethylation is much less sensitive to fluconazole inhibition') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una pequeña parte del fluconazol se transforma.',
      ocurre: 'Se metaboliza poco: solo un 11 % de la dosis aparece en la orina como metabolitos. La etiqueta no dice dónde ni cómo se forman.',
      sigue: 'El fluconazol y sus metabolitos van a los riñones.',
      datos: [{ t: 'Un 11 % de la dosis se excreta en la orina como metabolitos.', ref: rengR(RENG_PK, 'About 11% of the dose is excreted in the urine as metabolites') }],
      sinDatos: ['Órgano y enzimas del metabolismo', 'Actividad de los metabolitos'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [{ nombre: 'Metabolitos (11 % de la dosis en la orina)', actividad: 'desconocida', ref: rengR(RENG_PK, 'About 11% of the dose is excreted in the urine as metabolites') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El fluconazol llega a los riñones.',
      ocurre: 'Se elimina sobre todo por los riñones: un 80 % de la dosis sale sin cambios por la orina. Su semivida es de unas 30 horas (20-50). Si la función renal baja, la semivida se alarga.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina sobre todo por excreción renal: un 80 % de la dosis aparece sin cambios en la orina.', ref: rengR(RENG_PK, 'fluconazole is cleared primarily by renal excretion, with approximately 80% of the administered dose appearing in the urine as unchanged drug') },
        { t: 'Semivida terminal de unas 30 horas (20 a 50) tras la toma oral.', ref: rengR(RENG_PK, 'terminal plasma elimination half-life of approximately 30 hours (range: 20 to 50 hours)') },
        { t: 'La semivida guarda una relación inversa con el aclaramiento de creatinina.', ref: rengR(RENG_PK, 'There is an inverse relationship between the elimination half-life and creatinine clearance'), poblacion: 'insuficiencia renal' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral', valor: '> 90', unidad: '%', ref: rengR(RENG_PK, 'is over 90% compared with intravenous administration') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '1-2', unidad: 'h', ref: rengR(RENG_PK, 'occur between 1 and 2 hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '11-12', unidad: '%', ref: rengR(RENG_PK, 'Plasma protein binding is low (11 to 12%)') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '≈ 30 (20-50)', unidad: 'h', ref: rengR(RENG_PK, 'approximately 30 hours (range: 20 to 50 hours)') },
    { magnitud: 'orina', nombre: 'Excretado sin cambios en la orina', valor: '≈ 80', unidad: '% de la dosis', ref: rengR(RENG_PK, 'approximately 80% of the administered dose appearing in the urine as unchanged drug') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'f694c617-3383-416c-91b6-b94fda371204', 'DIFLUCAN (fluconazole) tablet; powder, for suspension', 'DIFLUCAN (Roerig)', '57', '2026-04-09', '2026-11-10'), rengPubchem(3365, 'Fluconazole', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
