import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lopressor'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'metoprolol',
    nombre: 'Metoprolol',
    clase: 'Betabloqueante cardioselectivo (beta-1)',
    sinonimos: ['metoprolol', 'Lopressor'],
    formula: 'C15H25NO3',
    masaMolar: 267.36,
    smiles: 'CC(C)NCC(COC1=CC=C(C=C1)CCOC)O',
    inchikey: 'IUBSYMUCCVWXPE-UHFFFAOYSA-N',
    cid: 4171,
    estereo: { descripcion: 'Un estereocentro; el fármaco es una mezcla racémica de los enantiómeros R y S, con metabolismo estereoselectivo.' },
    area: 'Corazón y circulación'
  },
  presentaciones: [
    {
      id: 'metoprolol-lopressor',
      producto: 'LOPRESSOR (metoprolol tartrate) comprimidos recubiertos de 12,5 mg',
      titular: 'Validus Pharmaceuticals LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película (liberación inmediata)',
      formaFuente: 'TABLET',
      liberacion: 'inmediata',
      concentraciones: '12,5 mg de tartrato de metoprolol (9,76 mg de metoprolol) por comprimido',
      sal: { nombre: 'Tartrato de metoprolol (sal L-(+)-tartrato 2:1)', ref: rengR('11 DESCRIPTION', 'L-(+)-tartrate (2:1) salt') },
      excipientes: ['colloidal silicon dioxide', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'sodium starch glycolate', 'recubrimiento: D&C Red 30, hypromellose, polyethylene glycol, talc, titanium dioxide'],
      usos: { t: 'Tras un infarto de miocardio, en adultos hemodinámicamente estables, para reducir la mortalidad cardiovascular.', ref: rengR('1 INDICATIONS AND USAGE', 'LOPRESSOR is indicated in the treatment of hemodynamically stable adult patients with myocardial infarction (MI) to reduce cardiovascular mortality') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con tartrato de metoprolol (la sal del activo), lactosa y celulosa.',
    usos: 'Reducir la mortalidad cardiovascular tras un infarto en adultos estables, según esta etiqueta.',
    actua: 'Bloquea sobre todo los receptores beta-1 del corazón: bajan la frecuencia cardíaca y el gasto cardíaco.',
    recorrido: 'Biodisponibilidad del 50 % por metabolismo presistémico, se reparte ampliamente (también al encéfalo), el CYP2D6 del hígado lo transforma y sale por la orina como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el tartrato de metoprolol, muy soluble en agua. Es de liberación inmediata.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El tartrato de metoprolol es muy soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is very soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['higado'],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el metoprolol disuelto.',
      ocurre: 'La biodisponibilidad del metoprolol de liberación inmediata es de un 50 %, por un metabolismo presistémico saturable: al subir la dosis, la exposición aumenta más que proporcionalmente.',
      sigue: 'Pasa a la circulación general.',
      datos: [{ t: 'Su biodisponibilidad oral estimada es de un 50 % por un metabolismo presistémico saturable.', ref: rengR(`${RENG_PK} › Absorption`, 'The estimated oral bioavailability of immediate release metoprolol is about 50% because of pre- systemic metabolism') }, RENG_GENERAL.portal],
      sinDatos: ['Tiempo hasta la concentración máxima', 'Efecto de la comida']
    },
    distribucion: {
      organos: ['sangre', 'corazon', 'encefalo'],
      llega: 'El metoprolol circula por la sangre.',
      ocurre: 'Se reparte ampliamente (3,2-5,6 L/kg) y solo un 10 % se une a albúmina. Cruza la barrera hematoencefálica, la placenta y pasa a la leche. En el corazón bloquea los receptores beta-1: bajan la frecuencia y el gasto cardíaco; a concentraciones altas bloquea también los beta-2 de bronquios y vasos.',
      sigue: 'El hígado lo transforma.',
      datos: [
        { t: 'Se distribuye ampliamente, con un volumen de 3,2 a 5,6 L/kg; un 10 % se une a la albúmina sérica.', ref: rengR(`${RENG_PK} › Distribution`, 'Metoprolol is extensively distributed with a reported volume of distribution of 3.2 to 5.6 L/kg') },
        { t: 'Cruza la barrera hematoencefálica; en el líquido cefalorraquídeo alcanza concentraciones cercanas a las del plasma.', ref: rengR(`${RENG_PK} › Distribution`, 'Metoprolol is also known to cross the blood brain barrier following oral administration') }
      ],
      accion: {
        diana: 'Receptores adrenérgicos beta-1 (cardioselectivo; beta-2 a concentraciones altas)',
        efecto: 'Baja la frecuencia cardíaca y el gasto cardíaco, en reposo y en ejercicio, y la presión sistólica en ejercicio.',
        lugar: ['corazon'],
        datos: [
          { t: 'Es un bloqueante selectivo de los receptores beta-1 (cardioselectivo); a concentraciones altas también inhibe los beta-2 de bronquios y vasos.', ref: rengR('12.1 Mechanism of Action', 'Metoprolol is a beta 1 -selective (cardioselective) adrenergic receptor blocking agent') },
          { t: 'Reduce la frecuencia y el gasto cardíaco en reposo y en ejercicio.', ref: rengR('12.2 Pharmacodynamics', 'reduction in heart rate and cardiac output at rest and upon exercise') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El metoprolol llega al hígado.',
      ocurre: 'Se elimina sobre todo por biotransformación hepática, principalmente por CYP2D6, de forma estereoselectiva. Las personas sin CYP2D6 (un 8 % de los caucásicos, un 2 % de otras poblaciones) alcanzan concentraciones varias veces mayores y pierden parte de la cardioselectividad.',
      sigue: 'Los metabolitos van a los riñones.',
      datos: [
        { t: 'Su eliminación es sobre todo por biotransformación en el hígado.', ref: rengR(`${RENG_PK} › Elimination`, 'Elimination of LOPRESSOR is mainly by biotransformation in the liver') },
        { t: 'Lo metaboliza principalmente el CYP2D6, ausente en un 8 % de los caucásicos y un 2 % de otras poblaciones.', ref: rengR(`${RENG_PK} › Metabolism`, 'LOPRESSOR is primarily metabolized by CYP2D6') },
        { t: 'Semivida media de 3 a 4 horas; de 7 a 9 horas en metabolizadores lentos de CYP2D6.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean elimination half-life of metoprolol is 3 to 4 hours'), poblacion: 'metabolizadores lentos de CYP2D6: 7-9 h' }
      ],
      metabolitos: [{ nombre: 'Metabolitos sin actividad betabloqueante aparente', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Excretion`, 'excreted by the kidneys as metabolites that appear to have no beta-blocking activity') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Los metabolitos llegan a los riñones.',
      ocurre: 'Un 95 % de la dosis se recupera en la orina; en la mayoría de las personas, menos del 5 % sale sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Alrededor del 95 % de la dosis se recupera en la orina; en los metabolizadores rápidos, menos del 5 % de una dosis oral sale sin cambios.', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 95% of the dose can be recovered in urine') }],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral (liberación inmediata)', valor: '≈ 50', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is about 50% because of pre- systemic metabolism') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '3,2-5,6', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'volume of distribution of 3.2 to 5.6 L/kg') },
    { magnitud: 'union', nombre: 'Unión a albúmina', valor: '≈ 10', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'About 10% of metoprolol in plasma is bound to serum albumin') },
    { magnitud: 'semivida', nombre: 'Semivida media', valor: '3-4', unidad: 'h', condiciones: '7-9 h en metabolizadores lentos de CYP2D6', ref: rengR(`${RENG_PK} › Elimination`, 'is 3 to 4 hours') },
    { magnitud: 'orina', nombre: 'Dosis recuperada en la orina', valor: '≈ 95', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 95% of the dose can be recovered in urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'b5f4fed2-369c-4808-a682-8a5b8cfdbb4f', 'LOPRESSOR (metoprolol tartrate) tablet', 'LOPRESSOR (Validus Pharmaceuticals LLC)', '3', '2026-01-28', '2026-11-10'), rengPubchem(4171, 'Metoprolol', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
