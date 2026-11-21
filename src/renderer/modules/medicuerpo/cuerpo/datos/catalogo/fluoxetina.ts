import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-prozac'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'fluoxetina',
    nombre: 'Fluoxetina',
    clase: 'Inhibidor selectivo de la recaptación de serotonina (ISRS)',
    sinonimos: ['fluoxetine', 'Prozac'],
    formula: 'C17H18F3NO',
    masaMolar: 309.33,
    smiles: 'CNCCC(C1=CC=CC=C1)OC2=CC=C(C=C2)C(F)(F)F',
    inchikey: 'RTHCYVBBDHJXIQ-UHFFFAOYSA-N',
    cid: 3386,
    estereo: { descripcion: 'Un estereocentro: es una mezcla racémica (50/50) de R- y S-fluoxetina, de actividad similar.' },
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'fluoxetina-prozac',
      producto: 'PROZAC (fluoxetine) cápsulas («Pulvules») de 10, 20 y 40 mg',
      titular: 'Dista Products Company',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '10, 20 y 40 mg de fluoxetina por cápsula',
      sal: { nombre: 'Clorhidrato de fluoxetina (racémico)', ref: rengR('11 DESCRIPTION', 'Each Pulvule ® contains fluoxetine hydrochloride equivalent to 10 mg') },
      excipientes: ['starch', 'gelatin', 'silicone', 'titanium dioxide', 'iron oxide', 'FD&C Blue No. 1 (y FD&C Yellow No. 6 en la de 40 mg)', '«y otros ingredientes inactivos» (la etiqueta no los enumera todos)'],
      usos: { t: 'Depresión mayor, trastorno obsesivo-compulsivo, bulimia nerviosa (atracones y vómitos) y trastorno de pánico, entre otras indicaciones de la etiqueta.', ref: rengR('1 INDICATIONS AND USAGE', 'Acute and maintenance treatment of Major Depressive Disorder') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula con clorhidrato de fluoxetina (la sal del activo, racémica), almidón y gelatina; la etiqueta no enumera todos los excipientes.',
    usos: 'Depresión, trastorno obsesivo-compulsivo, bulimia y pánico, según su etiqueta.',
    actua: 'Se cree que actúa inhibiendo la recaptación de serotonina por las neuronas del sistema nervioso central (el mecanismo exacto no se conoce).',
    recorrido: 'Máximo a las 6-8 horas, muy unida a proteínas, el hígado la convierte en norfluoxetina (también activa) y ambas se eliminan muy despacio (días a semanas).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera el clorhidrato de fluoxetina (soluble a 14 mg/mL en agua).',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El clorhidrato de fluoxetina tiene una solubilidad en agua de 14 mg/mL.', ref: rengR('11 DESCRIPTION', 'with a solubility of 14 mg/mL in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la fluoxetina disuelta.',
      ocurre: 'Tras una dosis de 40 mg, el máximo en el plasma llega a las 6-8 horas. La comida no parece cambiar la cantidad absorbida, aunque puede retrasarla 1-2 horas.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Tras 40 mg por vía oral, el máximo en plasma (15-55 ng/mL) llega a las 6-8 horas.', ref: rengR(RENG_PK, 'peak plasma concentrations of fluoxetine from 15 to 55 ng/mL are observed after 6 to 8 hours') },
        { t: 'La comida no parece afectar a su biodisponibilidad, aunque puede retrasar la absorción 1-2 horas.', ref: rengR(RENG_PK, 'Food does not appear to affect the systemic bioavailability of fluoxetine'), condiciones: 'con comida' },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Biodisponibilidad absoluta']
    },
    distribucion: {
      organos: ['sangre', 'encefalo'],
      llega: 'La fluoxetina circula por la sangre.',
      ocurre: 'Un 94,5 % va unida a proteínas del suero (albúmina y glucoproteína ácida alfa-1). En el sistema nervioso central inhibe la recaptación de serotonina por las neuronas. Por su eliminación lenta, con el uso continuado se acumula durante semanas.',
      sigue: 'El hígado la transforma en norfluoxetina, también activa.',
      simultaneo: 'La fluoxetina y su metabolito activo actúan a la vez y se acumulan durante semanas.',
      datos: [{ t: 'Un 94,5 % se une in vitro a proteínas séricas, como la albúmina y la glucoproteína ácida alfa-1.', ref: rengR(`${RENG_PK} › Protein Binding`, 'approximately 94.5% of fluoxetine is bound in vitro to human serum proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Recaptación neuronal de serotonina en el sistema nervioso central (mecanismo exacto desconocido)',
        efecto: 'Más serotonina disponible en las sinapsis.',
        lugar: ['encefalo'],
        datos: [
          { t: 'El mecanismo exacto se desconoce; se supone ligado a la inhibición de la recaptación neuronal de serotonina en el sistema nervioso central.', ref: rengR('12.1 Mechanism of Action', 'it is presumed to be linked to its inhibition of CNS neuronal uptake of serotonin') },
          { t: 'En animales, los dos enantiómeros inhiben la recaptación de serotonina con actividad prácticamente igual.', ref: rengR(`${RENG_PK} › Enantiomers`, 'both enantiomers are specific and potent serotonin uptake inhibitors with essentially equivalent pharmacologic activity') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La fluoxetina llega al hígado.',
      ocurre: 'Se metaboliza ampliamente: por desmetilación forma norfluoxetina, el único metabolito activo identificado (la S-norfluoxetina es tan potente como la fluoxetina), y otros metabolitos no identificados. Interviene el CYP2D6, cuya actividad está reducida en un 7 % de la población, y otras vías.',
      sigue: 'Los metabolitos inactivos van a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado a norfluoxetina y otros metabolitos no identificados.', ref: rengR(`${RENG_PK} › Metabolism`, 'Fluoxetine is extensively metabolized in the liver to norfluoxetine') },
        { t: 'Un 7 % de la población tiene reducida la actividad del CYP2D6 y metaboliza más despacio la S-fluoxetina.', ref: rengR(`${RENG_PK} › Variability in Metabolism`, 'A subset (about 7%) of the population has reduced activity of the drug metabolizing enzyme cytochrome P450 2D6') },
        { t: 'Semivida de 1-3 días tras dosis aisladas y de 4-6 días en uso crónico; la norfluoxetina, de 4 a 16 días.', ref: rengR(`${RENG_PK} › Accumulation and Slow Elimination`, 'elimination half-life of 1 to 3 days after acute administration and 4 to 6 days after chronic administration') }
      ],
      metabolitos: [
        { nombre: 'Norfluoxetina', nombreFuente: 'norfluoxetine', actividad: 'activo', nota: 'Único metabolito activo identificado; la S-norfluoxetina es tan potente como la fluoxetina y la R mucho menos.', ref: rengR(`${RENG_PK} › Metabolism`, 'The only identified active metabolite, norfluoxetine, is formed by demethylation of fluoxetine') },
        { nombre: 'Otros metabolitos no identificados', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'hepatic metabolism to inactive metabolites excreted by the kidney') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Los metabolitos inactivos llegan a los riñones.',
      ocurre: 'La vía principal de eliminación parece ser el metabolismo hepático a metabolitos inactivos que excretan los riñones. La eliminación es muy lenta: el estado estacionario tarda semanas.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'La vía principal de eliminación parece ser el metabolismo hepático a metabolitos inactivos excretados por el riñón.', ref: rengR(`${RENG_PK} › Metabolism`, 'The primary route of elimination appears to be hepatic metabolism to inactive metabolites excreted by the kidney') }],
      sinDatos: ['Porcentajes de la dosis en orina y heces'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (40 mg)', valor: '6-8', unidad: 'h', ref: rengR(RENG_PK, 'are observed after 6 to 8 hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas séricas (in vitro)', valor: '≈ 94,5', unidad: '%', ref: rengR(`${RENG_PK} › Protein Binding`, 'approximately 94.5%') },
    { magnitud: 'semivida', nombre: 'Semivida (uso crónico)', valor: '4-6', unidad: 'd', ref: rengR(`${RENG_PK} › Accumulation and Slow Elimination`, '4 to 6 days after chronic administration') },
    { magnitud: 'semivida', nombre: 'Semivida de la norfluoxetina', valor: '4-16', unidad: 'd', ref: rengR(`${RENG_PK} › Accumulation and Slow Elimination`, 'elimination half-life of 4 to 16 days after acute and chronic administration') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'c88f33ed-6dfb-4c5e-bc01-d8e36dd97299', 'PROZAC (fluoxetine hydrochloride) capsule', 'PROZAC Pulvules (Dista Products Company)', '59', '2026-01-14', '2026-11-10'), rengPubchem(3386, 'Fluoxetine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
