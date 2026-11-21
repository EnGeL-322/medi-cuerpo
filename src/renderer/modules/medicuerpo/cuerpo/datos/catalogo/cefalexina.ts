import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-cefalexina-ascend'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_CP = 'CLINICAL PHARMACOLOGY › Human Pharmacology'

export default {
  activo: {
    id: 'cefalexina',
    nombre: 'Cefalexina',
    clase: 'Antibacteriano: cefalosporina (betalactámico)',
    sinonimos: ['cephalexin', 'cefalexin'],
    formula: 'C16H17N3O4S',
    masaMolar: 347.4,
    smiles: 'CC1=C(N2[C@@H]([C@@H](C2=O)NC(=O)[C@@H](C3=CC=CC=C3)N)SC1)C(=O)O',
    inchikey: 'ZAIPMKNFIOOWCQ-UEKVPHQBSA-N',
    cid: 27447,
    estereo: { descripcion: 'Tres estereocentros definidos (el de la D-fenilglicina y dos del núcleo cefem): es un solo estereoisómero.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'cefalexina-ascend',
      producto: 'Cephalexin comprimidos de 250 y 500 mg (genérico)',
      titular: 'Ascend Laboratories, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: 'Cefalexina monohidrato equivalente a 250 o 500 mg de cefalexina por comprimido',
      excipientes: ['hypromellose', 'hydroxypropyl cellulose', 'low-substituted hydroxypropyl cellulose', 'magnesium stearate', 'microcrystalline cellulose', 'silicon dioxide', 'sodium starch glycolate', 'talc', 'titanium dioxide'],
      usos: { t: 'Infecciones por bacterias sensibles: respiratorias, otitis media, de piel, de huesos y del aparato genitourinario.', ref: rengR('INDICATIONS & USAGE', 'Respiratory tract infections caused by susceptible isolates of Streptococcus pneumoniae and Streptococcus pyogenes') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido con cefalexina monohidrato (sin sal), celulosas, talco y dióxido de titanio.',
    usos: 'Infecciones respiratorias, de oído, piel, hueso y vías urinarias, según su etiqueta.',
    actua: 'Es bactericida: impide que las bacterias construyan su pared celular.',
    recorrido: 'Resiste el ácido, se absorbe rápido (máximo a la hora), se une poco a proteínas y más del 90 % sale sin cambios por la orina en 8 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la cefalexina, estable frente al ácido del estómago.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Los comprimidos son estables en medio ácido y pueden tomarse con independencia de las comidas.', ref: rengR(RENG_CP, 'Cephalexin tablets are acid stable and may be given without regard to meals') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la cefalexina liberada.',
      ocurre: 'Se absorbe rápido: el máximo en el suero llega a la hora (unos 18 µg/mL con 500 mg) y aún se detecta a las 6 horas.',
      sigue: 'Pasa a la sangre.',
      datos: [{ t: 'Se absorbe rápidamente; con 250 mg, 500 mg y 1 g, el máximo en suero (unos 9, 18 y 32 µg/mL) se alcanza a la hora.', ref: rengR(RENG_CP, 'Following doses of 250 mg, 500 mg, and 1g, average peak serum levels of approximately 9, 18, and 32 mcg/mL, respectively, were obtained at 1 hour') }],
      sinDatos: ['Biodisponibilidad absoluta', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'sitio-infeccion'],
      llega: 'La cefalexina circula por la sangre.',
      ocurre: 'Solo un 10-15 % va unida a proteínas. En las bacterias sensibles impide la síntesis de la pared celular y las mata.',
      sigue: 'Va casi sin transformar a los riñones.',
      datos: [{ t: 'Se une en un 10-15 % a proteínas plasmáticas.', ref: rengR(RENG_CP, 'Cephalexin is approximately 10% to 15% bound to plasma proteins') }],
      sinDatos: ['Volumen de distribución', 'Concentraciones en tejidos'],
      accion: {
        diana: 'Síntesis de la pared celular bacteriana',
        efecto: 'Bactericida.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'Es un bactericida que actúa inhibiendo la síntesis de la pared celular.', ref: rengR('CLINICAL PHARMACOLOGY › Microbiology', 'Cephalexin is a bactericidal agent that acts by the inhibition of cell-wall synthesis') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La cefalexina circula casi sin transformarse.',
      ocurre: 'La etiqueta no describe metabolismo. Como más del 90 % aparece sin cambios en la orina en 8 horas, como mucho se transforma una fracción pequeña.',
      sigue: 'Llega a los riñones casi intacta.',
      datos: [{ t: 'Más del 90 % del fármaco se excretó sin cambios en la orina en 8 horas.', ref: rengR(RENG_CP, 'Studies showed that over 90% of the drug was excreted unchanged in the urine within 8 hours') }],
      sinDatos: ['Metabolismo descrito en la etiqueta'],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina', 'vejiga'],
      llega: 'La cefalexina llega a los riñones.',
      ocurre: 'Se elimina por la orina mediante filtración glomerular y secreción tubular: más del 90 % sale sin cambios en 8 horas. En la orina alcanza concentraciones muy altas (unos 2200 µg/mL con 500 mg).',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se excreta en la orina por filtración glomerular y secreción tubular.', ref: rengR(RENG_CP, 'Cephalexin is excreted in the urine by glomerular filtration and tubular secretion') },
        { t: 'En esas 8 horas, los máximos en orina con 250 mg, 500 mg y 1 g fueron de unos 1000, 2200 y 5000 µg/mL.', ref: rengR(RENG_CP, 'peak urine concentrations following the 250-mg, 500-mg, and 1-g doses were approximately 1000, 2200, and 5000 mcg/mL') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≈ 1', unidad: 'h', ref: rengR(RENG_CP, 'were obtained at 1 hour') },
    { magnitud: 'cmax', nombre: 'Concentración máxima en suero (500 mg)', valor: '≈ 18', unidad: 'µg/mL', ref: rengR(RENG_CP, 'average peak serum levels of approximately 9, 18, and 32 mcg/mL') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '10-15', unidad: '%', ref: rengR(RENG_CP, 'approximately 10% to 15% bound to plasma proteins') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina (8 h)', valor: '> 90', unidad: '% de la dosis', ref: rengR(RENG_CP, 'over 90% of the drug was excreted unchanged in the urine within 8 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '36882c6d-7b6f-41e3-8c54-e3b0073b8c07', 'CEPHALEXIN tablet', 'Cephalexin (Ascend Laboratories, LLC)', '4', '2026-10-19', '2026-11-10'), rengPubchem(27447, 'Cephalexin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
