import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lexapro'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'escitalopram',
    nombre: 'Escitalopram',
    clase: 'Inhibidor selectivo de la recaptación de serotonina (ISRS)',
    sinonimos: ['escitalopram', 'Lexapro'],
    formula: 'C20H21FN2O',
    masaMolar: 324.4,
    smiles: 'CN(C)CCC[C@@]1(C2=C(CO1)C=C(C=C2)C#N)C3=CC=C(C=C3)F',
    inchikey: 'WSEQXVZVJXJVFP-FQEVSTJZSA-N',
    cid: 146570,
    estereo: { descripcion: 'Un estereocentro: es el enantiómero S puro del citalopram racémico.' },
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'escitalopram-lexapro',
      producto: 'LEXAPRO (escitalopram) comprimidos recubiertos de 5, 10 y 20 mg',
      titular: 'Allergan, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5, 10 y 20 mg de escitalopram (base) por comprimido',
      sal: { nombre: 'Oxalato de escitalopram; 12,75 mg de la sal equivalen a 10 mg de base', ref: rengR('11 DESCRIPTION', 'present as escitalopram oxalate salt') },
      excipientes: ['talc', 'croscarmellose sodium', 'microcrystalline cellulose/colloidal silicon dioxide', 'magnesium stearate', 'recubrimiento: hypromellose, titanium dioxide, polyethylene glycol'],
      usos: { t: 'Depresión mayor (adultos y adolescentes desde 12 años) y trastorno de ansiedad generalizada (desde 7 años).', ref: rengR('1 INDICATIONS AND USAGE', 'major depressive disorder (MDD) in adults and pediatric patients 12 years of age and older') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con oxalato de escitalopram (la sal del activo), talco, celulosa y croscarmelosa.',
    usos: 'Depresión mayor y ansiedad generalizada, según su etiqueta.',
    actua: 'Se supone que potencia la serotonina en el sistema nervioso central al inhibir su recaptación por las neuronas.',
    recorrido: 'Máximo a las 5 horas sin efecto de la comida, unión a proteínas del 56 %, el hígado lo desmetila (CYP3A4, CYP2C19) a metabolitos poco activos; semivida de 27-32 horas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el oxalato de escitalopram, moderadamente soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El comprimido y la solución oral son bioequivalentes.', ref: rengR(`${RENG_PK} › Absorption`, 'The tablet and the oral solution dosage forms of escitalopram oxalate are bioequivalent') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el escitalopram disuelto.',
      ocurre: 'Tras una dosis de 20 mg, el máximo en la sangre llega hacia las 5 horas. La comida no afecta a su absorción. Con una toma diaria se alcanza el estado estacionario en una semana.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Tras una dosis única de 20 mg, el máximo en sangre aparece hacia las 5 horas; la comida no afecta a la absorción.', ref: rengR(`${RENG_PK} › Absorption`, 'peak blood levels occur at about 5 hours') },
        { t: 'La biodisponibilidad absoluta del citalopram racémico es de un 80 % (no hay dato específico del escitalopram).', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of citalopram is about 80% relative to an intravenous dose'), alcance: 'otra-presentacion' },
        RENG_GENERAL.intestino
      ]
    },
    distribucion: {
      organos: ['sangre', 'encefalo'],
      llega: 'El escitalopram circula por la sangre.',
      ocurre: 'Un 56 % va unido a proteínas del plasma. En el sistema nervioso central inhibe la recaptación de serotonina por las neuronas.',
      sigue: 'El hígado lo transforma.',
      datos: [
        { t: 'Se une a proteínas plasmáticas en un 56 %; el volumen de distribución del citalopram es de unos 12 L/kg (sin datos específicos del escitalopram).', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of escitalopram to human plasma proteins is approximately 56%') },
        { t: 'En estado estacionario, la acumulación en plasma es 2,2-2,5 veces la de una dosis única.', ref: rengR(RENG_PK, 'was 2.2-2.5 times the plasma concentrations observed after a single dose'), poblacion: 'jóvenes sanos' }
      ],
      accion: {
        diana: 'Recaptación neuronal de serotonina (5-HT) en el sistema nervioso central',
        efecto: 'Potencia la actividad serotoninérgica (efecto antidepresivo presunto).',
        lugar: ['encefalo'],
        datos: [{ t: 'Se supone que su acción antidepresiva se debe a la potenciación de la serotonina en el sistema nervioso central por la inhibición de su recaptación neuronal.', ref: rengR('12.1 Mechanism of Action', 'is presumed to be linked to potentiation of serotonergic activity in the central nervous system (CNS)') }]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El escitalopram llega al hígado.',
      ocurre: 'Su biotransformación es sobre todo hepática: el CYP3A4 y el CYP2C19 lo desmetilan a S-desmetilcitalopram (S-DCT) y S-didesmetilcitalopram (S-DDCT), entre 7 y 27 veces menos potentes. En el plasma predomina el escitalopram sin cambios.',
      sigue: 'El fármaco y sus metabolitos se eliminan sobre todo por metabolismo y en parte por la orina.',
      datos: [
        { t: 'Su biotransformación es sobre todo hepática, con una semivida terminal media de 27-32 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'Biotransformation of escitalopram is mainly hepatic, with a mean terminal half-life of about 27-32 hours') },
        { t: 'Los microsomas hepáticos indican que CYP3A4 y CYP2C19 son las isoenzimas principales de su N-desmetilación.', ref: rengR(`${RENG_PK} › Metabolism`, 'CYP3A4 and CYP2C19 are the primary isozymes involved in the N-demethylation of escitalopram') }
      ],
      metabolitos: [
        { nombre: 'S-desmetilcitalopram (S-DCT)', nombreFuente: 'S-DCT', actividad: 'activo', nota: 'Al menos 7 veces menos potente; en plasma, un tercio de la concentración del escitalopram.', ref: rengR(`${RENG_PK} › Metabolism`, 'escitalopram is at least 7 and 27 times more potent than S-DCT and S-DDCT') },
        { nombre: 'S-didesmetilcitalopram (S-DDCT)', nombreFuente: 'S-didemethylcitalopram (S-DDCT)', actividad: 'activo', nota: '27 veces menos potente; no detectable en la mayoría de las personas.', ref: rengR(`${RENG_PK} › Metabolism`, 'The level of S-DDCT was not detectable in most subjects') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El escitalopram y sus metabolitos llegan a los riñones.',
      ocurre: 'Por la orina se recupera un 8 % como escitalopram y un 10 % como S-DCT. Del aclaramiento oral (600 mL/min), solo un 7 % es renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La fracción recuperada en la orina es de un 8 % como escitalopram y un 10 % como S-DCT.', ref: rengR(`${RENG_PK} › Excretion`, 'the fraction of drug recovered in the urine as escitalopram and S-demethylcitalopram (S-DCT) is about 8% and 10%') },
        { t: 'Aclaramiento oral de 600 mL/min, de los que un 7 % es renal.', ref: rengR(`${RENG_PK} › Elimination`, 'The oral clearance of escitalopram is 600 mL/min, with approximately 7% of that due to renal clearance') }
      ],
      sinDatos: ['Porcentaje eliminado por las heces']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (20 mg)', valor: '≈ 5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'peak blood levels occur at about 5 hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 56', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 56%') },
    { magnitud: 'semivida', nombre: 'Semivida terminal media', valor: '27-32', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'a mean terminal half-life of about 27-32 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento oral', valor: '600', unidad: 'mL/min', ref: rengR(`${RENG_PK} › Elimination`, 'The oral clearance of escitalopram is 600 mL/min') },
    { magnitud: 'orina', nombre: 'Escitalopram sin cambios en la orina', valor: '≈ 8', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'is about 8% and 10%, respectively') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '13bb8267-1cab-43e5-acae-55a4d957630a', 'LEXAPRO (escitalopram) tablet, film coated; solution', 'LEXAPRO (Allergan, Inc.)', '45', '2026-01-01', '2026-11-10'), rengPubchem(146570, 'Escitalopram', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
