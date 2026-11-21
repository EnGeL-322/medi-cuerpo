import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-pepcid'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'famotidina',
    nombre: 'Famotidina',
    clase: 'Antagonista de los receptores H2 de la histamina',
    sinonimos: ['famotidine', 'Pepcid'],
    formula: 'C8H15N7O2S3',
    masaMolar: 337.5,
    smiles: 'C1=C(N=C(S1)N=C(N)N)CSCC/C(=N/S(=O)(=O)N)/N',
    inchikey: 'XUFQPHANEAPEMJ-UHFFFAOYSA-N',
    cid: 5702160,
    estereo: { descripcion: 'Sin estereocentros; el grupo sulfamoil-amidina tiene configuración definida en el doble enlace C=N.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'famotidina-pepcid',
      producto: 'PEPCID (famotidine) comprimidos recubiertos de 20 y 40 mg',
      titular: 'Bausch Health US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 y 40 mg de famotidina por comprimido',
      excipientes: ['hydroxypropyl cellulose', 'magnesium stearate', 'microcrystalline cellulose', 'polydextrose', 'polyethylene glycol', 'pregelatinized starch (modified corn starch)', 'sodium starch glycolate', 'talc', 'titanium dioxide', 'triacetin'],
      usos: { t: 'Úlcera duodenal y gástrica activas, reflujo gastroesofágico y esofagitis erosiva (adultos y niños de 40 kg o más), estados de hipersecreción y prevención de la recaída de la úlcera duodenal.', ref: rengR('1 INDICATIONS AND USAGE', 'PEPCID tablets are indicated in adult and pediatric patients 40 kg and greater for the treatment of') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de famotidina (sin sal) con celulosa, almidón y polidextrosa.',
    usos: 'Úlceras, reflujo y esofagitis, según su etiqueta.',
    actua: 'Bloquea de forma competitiva los receptores H2 de la histamina y reduce el ácido y el volumen del jugo gástrico.',
    recorrido: 'Se absorbe a medias (40-45 %), se une poco a proteínas, apenas se metaboliza (solo un S-óxido) y la eliminan sobre todo los riñones.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la famotidina, muy poco soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La famotidina es muy poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'slightly soluble in methanol, very slightly soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la famotidina liberada.',
      ocurre: 'Se absorbe de forma incompleta: la biodisponibilidad es del 40-45 %. El máximo en el plasma llega en 1-3 horas. La comida y los antiácidos la cambian poco.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe de forma incompleta; la biodisponibilidad oral es del 40-45 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Famotidine is incompletely absorbed. The bioavailability of oral doses is 40 to 45%') },
        { t: 'El máximo en plasma llega en 1-3 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'Peak famotidine plasma levels occur in 1 to 3 hours') },
        { t: 'La comida puede aumentarla un poco y los antiácidos reducirla un poco, sin consecuencia clínica.', ref: rengR(`${RENG_PK} › Absorption`, 'Bioavailability may be slightly increased by food, or slightly decreased by antacids'), condiciones: 'con comida o antiácidos' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'estomago'],
      llega: 'La famotidina circula por la sangre.',
      ocurre: 'Solo un 15-20 % va unido a proteínas. En el estómago bloquea los receptores H2: se segrega menos ácido y menos volumen de jugo gástrico.',
      sigue: 'Va casi sin transformar a los riñones.',
      datos: [{ t: 'Un 15-20 % de la famotidina del plasma está unida a proteínas.', ref: rengR(`${RENG_PK} › Distribution`, 'Fifteen to 20% of famotidine in plasma is protein bound') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Receptor H2 de la histamina',
        efecto: 'Reduce la concentración de ácido y el volumen de la secreción gástrica.',
        lugar: ['estomago'],
        datos: [{ t: 'Es un inhibidor competitivo de los receptores H2; su acción principal es inhibir la secreción gástrica, tanto la acidez como el volumen.', ref: rengR('12.1 Mechanism of Action', 'The primary clinically important pharmacologic activity of famotidine is inhibition of gastric secretion') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una pequeña parte de la famotidina se transforma.',
      ocurre: 'Tiene un primer paso mínimo. El único metabolito identificado en humanos es el S-óxido. Entre el 30 y el 35 % de su eliminación es por metabolismo.',
      sigue: 'La famotidina y su metabolito van a los riñones.',
      datos: [
        { t: 'Su primer paso es mínimo; el único metabolito identificado en humanos es el S-óxido.', ref: rengR(`${RENG_PK} › Metabolism`, 'Famotidine undergoes minimal first-pass metabolism') },
        { t: 'Se elimina por vía renal (65-70 %) y metabólica (30-35 %).', ref: rengR(`${RENG_PK} › Excretion`, 'Famotidine is eliminated by renal (65 to 70%) and metabolic (30 to 35%) routes') }
      ],
      sinDatos: ['Órgano del metabolismo', 'Actividad del metabolito'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [{ nombre: 'S-óxido de famotidina', nombreFuente: 'S-oxide', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'The only metabolite identified in humans is the S-oxide') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La famotidina llega a los riñones.',
      ocurre: 'Los riñones la filtran y también la secretan activamente en los túbulos (transportadores OAT1 y OAT3). Un 25-30 % de una dosis oral aparece sin cambios en la orina. Su semivida es de 2,5-3,5 horas; en la insuficiencia renal grave la exposición se multiplica por cinco.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 25-30 % de una dosis oral se recupera sin cambios en la orina.', ref: rengR(`${RENG_PK} › Metabolism`, 'Twenty-five to 30% of an oral dose was recovered in the urine as unchanged compound') },
        { t: 'La semivida de eliminación es de 2,5-3,5 horas; el aclaramiento renal (250-450 mL/min) indica secreción tubular.', ref: rengR(`${RENG_PK} › Excretion`, 'Renal clearance is 250 to 450 mL/minute, indicating some tubular excretion') },
        { t: 'In vitro es sustrato de los transportadores OAT1 y OAT3.', ref: rengR(`${RENG_PK} › Drug Interaction Studies`, 'In vitro studies indicate that famotidine is a substrate for OAT1 and OAT3') },
        { t: 'Con insuficiencia renal grave, el AUC aumenta al menos 5 veces.', ref: rengR(`${RENG_PK} › Patients with Renal Impairment`, 'the systemic exposure (AUC) of famotidine increased at least 5-fold'), poblacion: 'insuficiencia renal grave' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral', valor: '40-45', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'The bioavailability of oral doses is 40 to 45%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-3', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'occur in 1 to 3 hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '15-20', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Fifteen to 20% of famotidine in plasma is protein bound') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '2,5-3,5', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'Famotidine has an elimination half-life of 2.5-3.5 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento renal', valor: '250-450', unidad: 'mL/min', ref: rengR(`${RENG_PK} › Excretion`, 'Renal clearance is 250 to 450 mL/minute') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina (dosis oral)', valor: '25-30', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism`, 'Twenty-five to 30% of an oral dose was recovered in the urine as unchanged compound') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'a06502d9-7903-4f37-833e-e5763d502def', 'PEPCID (famotidine) tablet, film coated', 'PEPCID (Bausch Health US LLC)', '8', '2024-08-09', '2026-11-10'), rengPubchem(5702160, 'Famotidine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
