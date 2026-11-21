import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-naproxeno-aurobindo'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'naproxeno',
    nombre: 'Naproxeno',
    clase: 'Antiinflamatorio no esteroideo (derivado del ácido propiónico)',
    sinonimos: ['naproxen'],
    formula: 'C14H14O3',
    masaMolar: 230.26,
    smiles: 'C[C@@H](C1=CC2=C(C=C1)C=C(C=C2)OC)C(=O)O',
    inchikey: 'CMWTZPSULFXXJA-VIFPVBQESA-N',
    cid: 156391,
    iupac: 'ácido (S)-2-(6-metoxinaftalen-2-il)propanoico',
    estereo: { descripcion: 'Un estereocentro: es un solo enantiómero, el (S).' },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'naproxeno-aurobindo',
      producto: 'Naproxen comprimidos de 250, 375 y 500 mg (genérico)',
      titular: 'Aurobindo Pharma Limited',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250, 375 y 500 mg de naproxeno por comprimido',
      excipientes: ['corn starch', 'ferric oxide', 'lactose monohydrate', 'magnesium stearate', 'povidone', 'sodium starch glycolate'],
      usos: { t: 'Signos y síntomas de artritis reumatoide, artrosis, espondilitis anquilosante, artritis idiopática juvenil, tendinitis, bursitis y gota aguda; dolor y dismenorrea primaria.', ref: rengR('1 INDICATIONS AND USAGE', 'Naproxen tablets are indicated for: the relief of the signs and symptoms of: rheumatoid arthritis osteoarthritis') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido amarillo de naproxeno (el ácido, sin sal) con almidón de maíz, lactosa y povidona.',
    usos: 'Dolor, dismenorrea y signos de varias artritis, tendinitis, bursitis y gota, según su etiqueta.',
    actua: 'Inhibe las ciclooxigenasas (COX-1 y COX-2) y reduce las prostaglandinas de los tejidos, que sensibilizan los nervios al dolor y median la inflamación.',
    recorrido: 'Se absorbe por completo (95 %), va casi toda unida a la albúmina, el hígado la transforma en desmetil-naproxeno y conjugados, y un 95 % sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega. El naproxeno casi no se disuelve en el medio ácido del estómago y se disuelve bien cuando el pH sube, como en el intestino.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Es prácticamente insoluble en agua a pH bajo y muy soluble a pH alto.', ref: rengR('11 DESCRIPTION', 'It is lipid-soluble, practically insoluble in water at low pH and freely soluble in water at high pH') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el naproxeno liberado.',
      ocurre: 'Se absorbe rápida y completamente en el tubo digestivo (biodisponibilidad del 95 %). El máximo en el plasma llega a las 2-4 horas.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'El naproxeno se absorbe rápida y completamente en el tubo digestivo, con una biodisponibilidad del 95 %.', ref: rengR(RENG_PK, 'are rapidly and completely absorbed from the gastrointestinal tract with an in vivo bioavailability of 95%') },
        { t: 'Con los comprimidos, el máximo en el plasma se alcanza en 2-4 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'After administration of naproxen tablets, peak plasma levels are attained in 2 to 4 hours') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos'],
      llega: 'El naproxeno circula por la sangre.',
      ocurre: 'Más del 99 % va unido a la albúmina y su volumen de distribución es pequeño (0,16 L/kg). Con dosis altas, la unión se satura y se elimina más rápido. En los tejidos periféricos inhibe la COX-1 y la COX-2 y baja las prostaglandinas.',
      sigue: 'El hígado lo metaboliza.',
      datos: [
        { t: 'Volumen de distribución de 0,16 L/kg; a niveles terapéuticos, más del 99 % está unido a la albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'Naproxen has a volume of distribution of 0.16 L/kg. At therapeutic levels naproxen is greater than 99% albumin-bound') },
        { t: 'Por encima de 500 mg al día, las concentraciones suben menos que la dosis porque la unión a proteínas se satura y el aclaramiento aumenta.', ref: rengR(`${RENG_PK} › Distribution`, 'due to an increase in clearance caused by saturation of plasma protein binding at higher doses') }
      ],
      accion: {
        diana: 'Ciclooxigenasas COX-1 y COX-2',
        efecto: 'Analgésico, antiinflamatorio y antipirético por la menor síntesis de prostaglandinas.',
        lugar: ['tejidos'],
        datos: [
          { t: 'Su mecanismo no se conoce del todo, pero incluye la inhibición de la COX-1 y la COX-2.', ref: rengR('12.1 Mechanism of Action', 'is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)') },
          { t: 'Su modo de acción podría deberse a la disminución de prostaglandinas en los tejidos periféricos.', ref: rengR('12.1 Mechanism of Action', 'its mode of action may be due to a decrease of prostaglandins in peripheral tissues') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El naproxeno llega al hígado.',
      ocurre: 'Se metaboliza ampliamente a 6-O-desmetil-naproxeno. Después, el naproxeno y su metabolito se conjugan con ácido glucurónico (acilglucurónidos). No inducen las enzimas que los metabolizan.',
      sigue: 'Los conjugados van a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado a 6-O-desmetil-naproxeno; ni el original ni los metabolitos inducen enzimas metabolizadoras.', ref: rengR(`${RENG_PK} › Metabolism`, 'Naproxen is extensively metabolized in the liver to 6-0-desmethyl naproxen') },
        { t: 'Ambos se metabolizan después a sus acilglucurónidos conjugados.', ref: rengR(`${RENG_PK} › Metabolism`, 'Both naproxen and 6-0-desmethyl naproxen are further metabolized to their respective acylglucuronide conjugated metabolites') }
      ],
      metabolitos: [
        { nombre: '6-O-desmetil-naproxeno', nombreFuente: '6-0-desmethyl naproxen', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'Naproxen is extensively metabolized in the liver to 6-0-desmethyl naproxen') },
        { nombre: 'Acilglucurónidos del naproxeno y del desmetil-naproxeno', actividad: 'desconocida', nota: '66-92 % de la dosis en la orina.', ref: rengR(`${RENG_PK} › Excretion`, 'or their conjugates (66% to 92%)') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los conjugados llegan a los riñones.',
      ocurre: 'Un 95 % de la dosis sale por la orina, casi toda como conjugados (66-92 %) y menos del 1 % como naproxeno sin cambios. Por las heces sale un 3 % o menos. La semivida es de 12 a 17 horas. En la insuficiencia renal los metabolitos pueden acumularse.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Aproximadamente un 95 % se excreta en la orina, sobre todo como conjugados (66-92 %); naproxeno y desmetil-naproxeno libres suponen menos del 1 % cada uno.', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 95% of the naproxen from any dose is excreted in the urine') },
        { t: 'La semivida plasmática del anión naproxeno es de 12 a 17 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'The plasma half-life of the naproxen anion in humans ranges from 12 to 17 hours') },
        { t: 'Por las heces se excreta un 3 % o menos de la dosis.', ref: rengR(`${RENG_PK} › Excretion`, 'Small amounts, 3% or less of the administered dose, are excreted in the feces') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad', valor: '95', unidad: '%', ref: rengR(RENG_PK, 'with an in vivo bioavailability of 95%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (comprimidos)', valor: '2-4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'peak plasma levels are attained in 2 to 4 hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '0,16', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'Naproxen has a volume of distribution of 0.16 L/kg') },
    { magnitud: 'union', nombre: 'Unión a albúmina', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'naproxen is greater than 99% albumin-bound') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática', valor: '12-17', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'ranges from 12 to 17 hours') },
    { magnitud: 'orina', nombre: 'Excretado en la orina', valor: '≈ 95', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 95% of the naproxen from any dose is excreted in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '0e5315bc-c02f-4749-be69-b5b528327d58', 'NAPROXEN tablet', 'Naproxen (Aurobindo Pharma Limited)', '16', '2025-06-19', '2026-11-10'), rengPubchem(156391, 'Naproxen', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
