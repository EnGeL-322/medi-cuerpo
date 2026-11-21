import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-meloxicam-chartwell'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'meloxicam',
    nombre: 'Meloxicam',
    clase: 'Antiinflamatorio no esteroideo (oxicam)',
    sinonimos: ['meloxicam'],
    formula: 'C14H13N3O4S2',
    masaMolar: 351.4,
    smiles: 'CC1=CN=C(S1)NC(=O)C2=C(C3=CC=CC=C3S(=O)(=O)N2C)O',
    inchikey: 'ZRVUJXDFFKFLMG-UHFFFAOYSA-N',
    cid: 54677470,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'meloxicam-chartwell',
      producto: 'Meloxicam comprimidos de 7,5 y 15 mg (genérico)',
      titular: 'Chartwell RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '7,5 y 15 mg de meloxicam por comprimido',
      excipientes: ['colloidal silicon dioxide', 'crospovidone', 'lactose monohydrate', 'povidone', 'magnesium stearate', 'microcrystalline cellulose', 'sodium citrate dihydrate'],
      usos: { t: 'Signos y síntomas de artrosis, artritis reumatoide y artritis reumatoide juvenil (con 60 kg o más).', ref: rengR('1. INDICATIONS AND USAGE', 'Meloxicam tablets are indicated for relief of the signs and symptoms of osteoarthritis') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de meloxicam (sin sal) con lactosa, celulosa, povidona y citrato de sodio.',
    usos: 'Artrosis y artritis reumatoide, según su etiqueta.',
    actua: 'Inhibe las ciclooxigenasas (COX-1 y COX-2) y reduce las prostaglandinas de los tejidos periféricos.',
    recorrido: 'Se absorbe despacio (máximo a las 4-5 horas) pero casi por completo (89 %), va casi todo unido a la albúmina, el hígado lo metaboliza (CYP2C9) y sus metabolitos salen a partes iguales por la orina y las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el meloxicam, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El meloxicam es un polvo amarillo pálido prácticamente insoluble en agua.', ref: rengR('11. DESCRIPTION', 'Meloxicam, USP is a pale yellow powder, practically insoluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el meloxicam liberado.',
      ocurre: 'La absorción es lenta (máximo a las 4-5 horas en ayunas) pero casi completa: biodisponibilidad absoluta del 89 %. Hacia las 12-14 horas aparece un segundo pico, que sugiere que vuelve al intestino por la bilis y se reabsorbe.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta de las cápsulas fue del 89 % (30 mg oral frente a 30 mg intravenosos); cápsulas y comprimidos son bioequivalentes.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of meloxicam capsules was 89% following a single oral dose of 30 mg') },
        { t: 'Con un comprimido de 7,5 mg en ayunas, la Cmax media se alcanzó en 4-5 horas, lo que indica una absorción prolongada.', ref: rengR(`${RENG_PK} › Absorption`, 'Mean C max was achieved within four to five hours after a 7.5 mg meloxicam tablet was taken under fasted conditions, indicating a prolonged drug absorption'), condiciones: 'en ayunas' },
        { t: 'Un segundo pico hacia las 12-14 horas sugiere recirculación biliar.', ref: rengR(`${RENG_PK} › Absorption`, 'A second meloxicam concentration peak occurs around 12 to 14 hours post-dose suggesting biliary recycling') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'articulaciones', 'tejidos'],
      llega: 'El meloxicam circula por la sangre.',
      ocurre: 'Un 99,4 % va unido a proteínas (sobre todo albúmina) y su volumen es pequeño (unos 10 L). En el líquido sinovial de las articulaciones alcanza un 40-50 % de la concentración del plasma, con más fracción libre; la importancia de ese paso se desconoce. En los tejidos inhibe la COX-1 y la COX-2.',
      sigue: 'El hígado lo metaboliza.',
      datos: [
        { t: 'Volumen de distribución medio de unos 10 L; un 99,4 % se une a proteínas plasmáticas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'Meloxicam is ~99.4% bound to human plasma proteins (primarily albumin) within the therapeutic dose range') },
        { t: 'En el líquido sinovial alcanza un 40-50 % de la concentración plasmática; la fracción libre es 2,5 veces mayor por haber menos albúmina. Su significado se desconoce.', ref: rengR(`${RENG_PK} › Distribution`, 'Meloxicam concentrations in synovial fluid, after a single oral dose, range from 40% to 50% of those in plasma') }
      ],
      accion: {
        diana: 'Ciclooxigenasas COX-1 y COX-2',
        efecto: 'Analgésico, antiinflamatorio y antipirético por la menor síntesis de prostaglandinas.',
        lugar: ['tejidos'],
        datos: [
          { t: 'Su mecanismo no se conoce del todo, pero incluye la inhibición de la COX-1 y la COX-2.', ref: rengR('12.1 Mechanism of Action', 'The mechanism of action of meloxicam, like that of other NSAIDs, is not completely understood but involves inhibition of cyclooxygenase (COX-1 and COX-2)') },
          { t: 'Su modo de acción podría deberse a la disminución de prostaglandinas en los tejidos periféricos.', ref: rengR('12.1 Mechanism of Action', 'its mode of action may be due to a decrease of prostaglandins in peripheral tissues') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El meloxicam llega al hígado.',
      ocurre: 'Se metaboliza ampliamente en el hígado. El CYP2C9 (con algo de CYP3A4) forma 5′-hidroximetil-meloxicam, que se oxida a 5′-carboxi-meloxicam (60 % de la dosis). La actividad peroxidasa forma otros dos metabolitos. Ninguno de los cuatro tiene actividad conocida.',
      sigue: 'Los metabolitos se eliminan por la orina y las heces.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado; el principal metabolito es el 5′-carboxi-meloxicam (60 % de la dosis).', ref: rengR(`${RENG_PK} › Metabolism`, 'Meloxicam is extensively metabolized in the liver') },
        { t: 'In vitro, el CYP2C9 tiene un papel importante en esta vía, con una contribución menor del CYP3A4.', ref: rengR(`${RENG_PK} › Metabolism`, 'CYP2C9 (cytochrome P450 metabolizing enzyme) plays an important role in this metabolic pathway with a minor contribution of the CYP3A4 isozyme') }
      ],
      metabolitos: [
        { nombre: '5′-carboxi-meloxicam', nombreFuente: "5'-carboxy meloxicam", actividad: 'inactivo', nota: '60 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism`, "Meloxicam metabolites include 5'-carboxy meloxicam (60% of dose)") },
        { nombre: '5′-hidroximetil-meloxicam', nombreFuente: "5'-hydroxymethyl meloxicam", actividad: 'inactivo', nota: 'Intermedio; 9 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism`, 'which is also excreted to a lesser extent (9% of dose)') },
        { nombre: 'Dos metabolitos formados por peroxidasas', actividad: 'inactivo', nota: '16 % y 4 % de la dosis; ninguno de los cuatro tiene actividad farmacológica conocida in vivo.', ref: rengR(`${RENG_PK} › Metabolism`, 'Patients’ peroxidase activity is probably responsible for the other two metabolites') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Se excreta sobre todo como metabolitos, a partes iguales por la orina y las heces; sin cambios, solo trazas. También hay una secreción importante por la bilis o la pared intestinal. Su semivida es de 15 a 20 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se excreta sobre todo como metabolitos, en igual medida por la orina y las heces; sin cambios solo aparecen trazas (0,2 % en la orina y 1,6 % en las heces).', ref: rengR(`${RENG_PK} › Excretion`, 'Meloxicam excretion is predominantly in the form of metabolites, and occurs to equal extents in the urine and feces') },
        { t: 'Hay una secreción biliar y/o intestinal importante: la colestiramina tras una dosis intravenosa redujo su AUC un 50 %.', ref: rengR(`${RENG_PK} › Excretion`, 'There is significant biliary and/or enteral secretion of the drug') },
        { t: 'La semivida media de eliminación es de 15 a 20 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'The mean elimination half-life (t 1/2 ) ranges from 15 hours to 20 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (cápsulas)', valor: '89', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of meloxicam capsules was 89%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (7,5 mg, ayunas)', valor: '4-5', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'Mean C max was achieved within four to five hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (Vss)', valor: '≈ 10', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The mean volume of distribution (V ss ) of meloxicam is approximately 10 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 99,4', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Meloxicam is ~99.4% bound to human plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '15-20', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'ranges from 15 hours to 20 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento plasmático', valor: '7-9', unidad: 'mL/min', ref: rengR(`${RENG_PK} › Excretion`, 'Plasma clearance ranges from 7 to 9 mL/min') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '8bd53770-7077-49c7-8215-73a17a20ea70', 'MELOXICAM tablet', 'Meloxicam (Chartwell RX, LLC)', '3', '2025-12-19', '2026-11-10'), rengPubchem(54677470, 'Meloxicam', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
