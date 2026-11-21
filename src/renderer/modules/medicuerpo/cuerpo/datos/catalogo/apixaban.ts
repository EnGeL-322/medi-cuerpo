import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-eliquis'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'apixaban',
    nombre: 'Apixabán',
    clase: 'Anticoagulante oral, inhibidor directo del factor Xa',
    sinonimos: ['apixaban', 'Eliquis'],
    formula: 'C25H25N5O4',
    masaMolar: 459.5,
    smiles: 'COC1=CC=C(C=C1)N2C3=C(CCN(C3=O)C4=CC=C(C=C4)N5CCCCC5=O)C(=N2)C(=O)N',
    inchikey: 'QNZCBYKSOIHPEH-UHFFFAOYSA-N',
    cid: 10182969,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'apixaban-eliquis',
      producto: 'ELIQUIS (apixaban) comprimidos recubiertos de 2,5 y 5 mg',
      titular: 'E.R. Squibb & Sons, L.L.C.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2,5 y 5 mg de apixabán por comprimido',
      excipientes: ['anhydrous lactose', 'microcrystalline cellulose', 'croscarmellose sodium', 'sodium lauryl sulfate', 'magnesium stearate', 'recubrimiento: lactose monohydrate, hypromellose, titanium dioxide, triacetin, yellow (2,5 mg) o red (5 mg) iron oxide'],
      usos: { t: 'En adultos: reducir el riesgo de ictus y embolia en la fibrilación auricular no valvular, prevenir la trombosis venosa tras prótesis de cadera o rodilla y tratar la trombosis venosa profunda y la embolia pulmonar y reducir sus recaídas. En niños desde el nacimiento: tratar el tromboembolismo venoso tras al menos 5 días de anticoagulación inicial.', ref: rengR('1 INDICATIONS AND USAGE', 'ELIQUIS is a factor Xa inhibitor indicated') },
      fuente: RENG_F,
      nota: 'La misma etiqueta incluye otras presentaciones (comprimidos de 0,5 mg y polvo «Sprinkle» para suspensión); aquí se describe el comprimido de 2,5 y 5 mg.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con apixabán (sin sal), lactosa, celulosa y croscarmelosa; el color distingue 2,5 y 5 mg.',
    usos: 'Prevenir ictus en fibrilación auricular y tratar o prevenir trombosis venosa y embolia pulmonar, según su etiqueta.',
    actua: 'Inhibe directamente el factor Xa de la coagulación (libre y unido al coágulo): se forma menos trombina y menos trombo.',
    recorrido: 'Se absorbe un 50 % (máximo a las 3-4 horas), un 87 % va unido a proteínas, el CYP3A4 transforma una cuarta parte y se elimina por heces (bilis e intestino) y orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega. El apixabán es poco soluble (unos 0,04 mg/mL) y no se ioniza en el intervalo de pH del tubo digestivo.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'A pH fisiológico (1,2-6,8) no se ioniza y su solubilidad en agua es de unos 0,04 mg/mL.', ref: rengR('11 DESCRIPTION', 'its aqueous solubility across the physiological pH range is ~0.04 mg/mL') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el apixabán liberado.',
      ocurre: 'Su biodisponibilidad absoluta es de un 50 % (hasta 10 mg) y la comida no la cambia. El máximo en la sangre llega a las 3-4 horas. A dosis muy altas la absorción queda limitada por la disolución.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Biodisponibilidad absoluta de un 50 % para dosis de hasta 10 mg; la comida no la modifica.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of apixaban is approximately 50% for doses up to 10 mg') },
        { t: 'La concentración máxima aparece 3-4 horas después de tomarlo.', ref: rengR(`${RENG_PK} › Absorption`, 'Maximum concentrations (C max ) of apixaban appear 3 to 4 hours after oral administration') },
        { t: 'A partir de 25 mg la absorción queda limitada por la disolución y baja la biodisponibilidad.', ref: rengR(`${RENG_PK} › Absorption`, 'apixaban displays dissolution-limited absorption with decreased bioavailability') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'El apixabán circula por la sangre.',
      ocurre: 'Un 87 % va unido a proteínas y su volumen de distribución es pequeño (21 L). En la sangre inhibe el factor Xa, libre o unido al coágulo, y la protrombinasa: se genera menos trombina y el trombo crece menos.',
      sigue: 'Se metaboliza en parte y se elimina por varias vías.',
      datos: [{ t: 'Unión a proteínas plasmáticas de un 87 %; volumen de distribución de unos 21 litros.', ref: rengR(`${RENG_PK} › Distribution`, 'Plasma protein binding in humans is approximately 87%') }],
      accion: {
        diana: 'Factor Xa de la coagulación (libre y unido al coágulo)',
        efecto: 'Anticoagulante: menos generación de trombina y menos formación de trombos.',
        lugar: ['sangre'],
        datos: [
          { t: 'Es un inhibidor selectivo del factor Xa que no necesita antitrombina III; inhibe el FXa libre y el unido al coágulo y la actividad protrombinasa.', ref: rengR('12.1 Mechanism of Action', 'Apixaban is a selective inhibitor of FXa') },
          { t: 'Al inhibir el FXa disminuye la generación de trombina y el desarrollo del trombo.', ref: rengR('12.1 Mechanism of Action', 'By inhibiting FXa, apixaban decreases thrombin generation and thrombus development') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El apixabán llega a las enzimas que lo transforman.',
      ocurre: 'Una cuarta parte de la dosis se transforma, sobre todo por CYP3A4 (O-desmetilación e hidroxilación). En el plasma predomina el apixabán sin cambios: no hay metabolitos activos circulantes.',
      sigue: 'Apixabán y metabolitos se eliminan por heces y orina.',
      datos: [
        { t: 'Un 25 % de la dosis oral se recupera en orina y heces como metabolitos; se metaboliza sobre todo por CYP3A4.', ref: rengR(`${RENG_PK} › Metabolism`, 'Apixaban is metabolized mainly via CYP3A4') },
        { t: 'El apixabán sin cambios es el principal componente en plasma; no hay metabolitos activos circulantes.', ref: rengR(`${RENG_PK} › Metabolism`, 'there are no active circulating metabolites') },
        RENG_GENERAL.higado
      ],
      sinDatos: ['Órgano del metabolismo (la etiqueta nombra las enzimas, no el órgano)'],
      metabolitos: [{ nombre: 'Productos de O-desmetilación e hidroxilación', actividad: 'inactivo', nota: 'No hay metabolitos activos en la circulación.', ref: rengR(`${RENG_PK} › Metabolism`, 'O-demethylation and hydroxylation at the 3-oxopiperidinyl moiety are the major sites of biotransformation') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis', 'heces'],
      llega: 'El apixabán y sus metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Se elimina por la orina y las heces: los riñones aportan un 27 % del aclaramiento total; la excreción biliar y la directa por el intestino lo eliminan con las heces. Semivida aparente: unas 12 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina por orina y heces; la excreción renal supone un 27 % del aclaramiento total.', ref: rengR(`${RENG_PK} › Elimination`, 'Renal excretion accounts for about 27% of total clearance') },
        { t: 'La excreción biliar y la intestinal directa contribuyen a su eliminación por las heces.', ref: rengR(`${RENG_PK} › Elimination`, 'Biliary and direct intestinal excretion contributes to elimination of apixaban in the feces') },
        { t: 'Aclaramiento total de unos 3,3 L/h y semivida aparente de unas 12 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'an apparent half-life of approximately 12 hours') }
      ]
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (hasta 10 mg)', valor: '≈ 50', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 50% for doses up to 10 mg') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '3-4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'appear 3 to 4 hours after oral administration') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 87', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 87%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (Vss)', valor: '≈ 21', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The volume of distribution (Vss) is approximately 21 liters') },
    { magnitud: 'semivida', nombre: 'Semivida aparente', valor: '≈ 12', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'apparent half-life of approximately 12 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento total', valor: '≈ 3,3', unidad: 'L/h', ref: rengR(`${RENG_PK} › Elimination`, 'total clearance of approximately 3.3 L/hour') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'e9481622-7cc6-418a-acb6-c5450daae9b0', 'ELIQUIS (apixaban) tablet, film coated; ELIQUIS 30-day starter pack', 'ELIQUIS (E.R. Squibb & Sons, L.L.C.)', '30', '2025-05-05', '2026-11-10'), rengPubchem(10182969, 'Apixaban', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
