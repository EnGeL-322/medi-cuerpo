import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lasix'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_CP = 'CLINICAL PHARMACOLOGY'

export default {
  activo: {
    id: 'furosemida',
    nombre: 'Furosemida',
    clase: 'Diurético de asa (derivado del ácido antranílico)',
    sinonimos: ['furosemide', 'Lasix'],
    formula: 'C12H11ClN2O5S',
    masaMolar: 330.74,
    smiles: 'C1=COC(=C1)CNC2=CC(=C(C=C2C(=O)O)S(=O)(=O)N)Cl',
    inchikey: 'ZZUFCTLCJUWOSV-UHFFFAOYSA-N',
    cid: 3440,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Riñón y vías urinarias'
  },
  presentaciones: [
    {
      id: 'furosemida-lasix',
      producto: 'LASIX (furosemide) comprimidos de 20, 40 y 80 mg',
      titular: 'Validus Pharmaceuticals LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '20, 40 y 80 mg de furosemida por comprimido',
      excipientes: ['lactose monohydrate', 'magnesium stearate', 'starch', 'talc', 'colloidal silicon dioxide'],
      usos: { t: 'Edemas por insuficiencia cardíaca, cirrosis o enfermedad renal (incluido el síndrome nefrótico) en adultos y niños, e hipertensión en adultos.', ref: rengR('INDICATIONS AND USAGE', 'LASIX is indicated in adults and pediatric patients for the treatment of edema associated with congestive heart failure') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de furosemida (sin sal) con lactosa, almidón, talco y sílice.',
    usos: 'Edemas (corazón, hígado, riñón) e hipertensión, según su etiqueta.',
    actua: 'En el riñón impide que se reabsorban sodio y cloro, sobre todo en el asa de Henle: se elimina más agua y sal.',
    recorrido: 'Se absorbe un 64 % (respecto a la vía intravenosa), viaja casi toda unida a albúmina, actúa en los túbulos renales y sale sobre todo sin cambios por la orina; un glucurónido es su metabolito.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega. La furosemida es prácticamente insoluble en agua y en ácidos diluidos, y muy soluble en soluciones alcalinas.',
      sigue: 'Pasa al intestino, donde se absorbe.',
      datos: [{ t: 'Es prácticamente insoluble en agua e insoluble en ácidos diluidos; muy soluble en álcalis diluidos.', ref: rengR('DESCRIPTION', 'It is practically insoluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la furosemida liberada.',
      ocurre: 'En hombres sanos en ayunas, la biodisponibilidad del comprimido es un 64 % de la de la inyección intravenosa. Se absorbe más despacio del comprimido (87 minutos) que de la solución oral (50 minutos), con picos y AUC similares.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'En hombres sanos en ayunas, la biodisponibilidad media de los comprimidos es el 64 % de la de la inyección intravenosa.', ref: rengR(RENG_CP, 'the mean bioavailability of furosemide from LASIX Tablets and LASIX Oral Solution is 64% and 60%'), poblacion: 'hombres sanos', condiciones: 'en ayunas' },
        { t: 'Se absorbe más deprisa de la solución oral (50 min) que del comprimido (87 min), sin diferencias importantes en el pico ni en el AUC.', ref: rengR(RENG_CP, 'more rapidly absorbed from the oral solution (50 minutes) than from the tablet (87 minutes)') },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Efecto de la comida']
    },
    distribucion: {
      organos: ['sangre', 'rinones'],
      llega: 'La furosemida circula unida a proteínas.',
      ocurre: 'Entre un 91 y un 99 % va unida a proteínas, sobre todo albúmina. En el riñón inhibe la reabsorción de sodio y cloro en los túbulos proximal y distal y, sobre todo, en el asa de Henle: la orina arrastra más sal y agua. La diuresis empieza en una hora, es máxima a la primera o segunda hora y dura 6-8 horas.',
      sigue: 'Se elimina por la orina.',
      simultaneo: 'El riñón es a la vez su lugar de acción y su vía de eliminación.',
      datos: [
        { t: 'Se une mucho a proteínas plasmáticas, sobre todo albúmina (91-99 %); la fracción libre es del 2,3-4,1 %.', ref: rengR(RENG_CP, 'Furosemide is extensively bound to plasma proteins, mainly to albumin') },
        { t: 'La diuresis empieza en una hora, es máxima en la primera o segunda hora y dura de 6 a 8 horas.', ref: rengR(RENG_CP, 'The onset of diuresis following oral administration is within 1 hour') }
      ],
      accion: {
        diana: 'Reabsorción de sodio y cloro en el túbulo renal (asa de Henle)',
        efecto: 'Diurético potente: más eliminación de agua y sal por la orina.',
        lugar: ['rinones'],
        datos: [{ t: 'Inhibe sobre todo la absorción de sodio y cloro en los túbulos proximal y distal y en el asa de Henle; su gran eficacia se debe a ese lugar de acción.', ref: rengR(RENG_CP, 'LASIX inhibits primarily the absorption of sodium and chloride') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte de la furosemida se transforma.',
      ocurre: 'El glucurónido de furosemida es el único, o al menos el principal, producto de su transformación en humanos. La mayor parte sale sin cambios.',
      sigue: 'La furosemida y su glucurónido van a la orina.',
      datos: [{ t: 'El glucurónido de furosemida parece ser el único, o el principal, producto de biotransformación en humanos.', ref: rengR(RENG_CP, 'furosemide glucuronide is the only or at least the major biotransformation product of furosemide in man') }],
      sinDatos: ['Órgano donde se forma el glucurónido'],
      metabolitos: [{ nombre: 'Glucurónido de furosemida', actividad: 'desconocida', ref: rengR(RENG_CP, 'furosemide glucuronide is the only or at least the major biotransformation product') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La furosemida llega a los riñones.',
      ocurre: 'Se excreta sobre todo sin cambios por la orina. Su semivida terminal es de unas 2 horas. En personas mayores el aclaramiento renal es menor.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se excreta predominantemente sin cambios por la orina.', ref: rengR(RENG_CP, 'Furosemide is predominantly excreted unchanged in the urine') },
        { t: 'Su semivida terminal es de unas 2 horas.', ref: rengR(RENG_CP, 'The terminal half-life of furosemide is approximately 2 hours') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad del comprimido (frente a IV)', valor: '64', unidad: '%', poblacion: 'hombres sanos', condiciones: 'en ayunas', ref: rengR(RENG_CP, 'is 64% and 60%, respectively') },
    { magnitud: 'tmax', nombre: 'Absorción desde el comprimido', valor: '87', unidad: 'min', ref: rengR(RENG_CP, 'than from the tablet (87 minutes)') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '91-99', unidad: '%', poblacion: 'personas sanas', ref: rengR(RENG_CP, 'are 91% to 99% bound in healthy individuals') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '≈ 2', unidad: 'h', ref: rengR(RENG_CP, 'approximately 2 hours') },
    { magnitud: 'otra', nombre: 'Duración del efecto diurético', valor: '6-8', unidad: 'h', ref: rengR(RENG_CP, 'The duration of diuretic effect is 6 to 8 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '2c9b4d8f-0770-482d-a9e6-9c616a440b1a', 'LASIX (furosemide) tablet', 'LASIX (Validus Pharmaceuticals LLC)', '7', '2025-10-02', '2026-11-10'), rengPubchem(3440, 'Furosemide', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
