import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-jardiance'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'empagliflozina',
    nombre: 'Empagliflozina',
    clase: 'Inhibidor del cotransportador sodio-glucosa tipo 2 (SGLT2)',
    sinonimos: ['empagliflozin', 'Jardiance'],
    formula: 'C23H27ClO7',
    masaMolar: 450.9,
    smiles: 'C1COC[C@H]1OC2=CC=C(C=C2)CC3=C(C=CC(=C3)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)Cl',
    inchikey: 'OBWASQILIWPZMG-QZMOQZSNSA-N',
    cid: 11949646,
    estereo: { descripcion: 'Seis estereocentros definidos: un C-glucósido (anillo de glucitol) unido a un tetrahidrofurano (3S).' },
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'empagliflozina-jardiance',
      producto: 'JARDIANCE (empagliflozin) comprimidos recubiertos de 10 y 25 mg',
      titular: 'Boehringer Ingelheim Pharmaceuticals, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 y 25 mg de empagliflozina (base libre) por comprimido',
      excipientes: ['colloidal silicon dioxide', 'croscarmellose sodium', 'hydroxypropyl cellulose', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'recubrimiento: ferric oxide yellow, hypromellose, polyethylene glycol, talc, titanium dioxide'],
      usos: { t: 'Reducir muerte cardiovascular y hospitalización en insuficiencia cardíaca; frenar el deterioro renal en enfermedad renal crónica; reducir muerte cardiovascular en diabetes tipo 2 con enfermedad cardiovascular, y mejorar el control de la glucosa en diabetes tipo 2 (desde 10 años).', ref: rengR('1 INDICATIONS AND USAGE', 'to reduce the risk of cardiovascular death and hospitalization for heart failure in adults with heart failure') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con empagliflozina (base libre), lactosa, celulosa y croscarmelosa.',
    usos: 'Insuficiencia cardíaca, enfermedad renal crónica y diabetes tipo 2, según su etiqueta.',
    actua: 'Bloquea el SGLT2 del riñón, que devuelve a la sangre la glucosa filtrada: sale más glucosa (y sodio) por la orina.',
    recorrido: 'Máximo en sangre a la hora y media, un 86 % unida a proteínas, se conjuga con glucurónico (UGT) y sale por orina (54 %) y heces (41 %), en buena parte sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la empagliflozina, muy poco soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La empagliflozina es muy poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is very slightly soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la empagliflozina liberada.',
      ocurre: 'El máximo en el plasma llega a la hora y media. Una comida rica en grasa reduce algo la exposición (AUC un 16 %, máximo un 37 %), sin relevancia clínica según la etiqueta.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La concentración máxima se alcanza a las 1,5 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'peak plasma concentrations of empagliflozin were reached at 1.5 hours post-dose') },
        { t: 'Tras una comida rica en grasa y calorías, el AUC bajó un 16 % y la Cmax un 37 %; no se consideró clínicamente relevante.', ref: rengR(`${RENG_PK} › Absorption`, 'AUC decreased by approximately 16% and C max decreased by approximately 37%'), condiciones: '25 mg tras comida rica en grasa' }
      ],
      sinDatos: ['Biodisponibilidad absoluta', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'rinones'],
      llega: 'La empagliflozina circula por la sangre.',
      ocurre: 'Un 86 % va unida a proteínas y un 37 % entra en los glóbulos rojos. En el riñón inhibe el SGLT2, el transportador que reabsorbe la glucosa del filtrado: se elimina más glucosa por la orina (unos 64-78 g al día en diabetes tipo 2). También reabsorbe menos sodio.',
      sigue: 'Se transforma en parte y se elimina por orina y heces.',
      simultaneo: 'El riñón es a la vez lugar de acción y vía de eliminación.',
      datos: [
        { t: 'Volumen de distribución aparente de 73,8 L; un 36,8 % pasa a los glóbulos rojos y un 86,2 % se une a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'plasma protein binding was 86.2%') },
        { t: 'En diabetes tipo 2, la glucosa en orina aumentó de inmediato y se mantuvo en unos 64 g/día (10 mg) y 78 g/día (25 mg).', ref: rengR('12.2 Pharmacodynamics', 'averaging at approximately 64 grams per day with 10 mg empagliflozin'), poblacion: 'diabetes tipo 2' }
      ],
      accion: {
        diana: 'Cotransportador sodio-glucosa tipo 2 (SGLT2) del túbulo renal',
        efecto: 'Más glucosa (y sodio) en la orina: baja la glucosa en sangre.',
        lugar: ['rinones'],
        datos: [
          { t: 'Inhibe el SGLT2, el principal transportador que reabsorbe la glucosa del filtrado glomerular; aumenta la excreción urinaria de glucosa.', ref: rengR('12.1 Mechanism of Action', 'Empagliflozin is an inhibitor of SGLT2, the predominant transporter responsible for reabsorption of glucose') },
          { t: 'También reduce la reabsorción de sodio y aumenta su llegada al túbulo distal.', ref: rengR('12.1 Mechanism of Action', 'Empagliflozin also reduces sodium reabsorption') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La empagliflozina llega a las enzimas de glucuronidación.',
      ocurre: 'No hay metabolitos mayores en el plasma: los más abundantes son tres glucurónidos (2-O, 3-O y 6-O), cada uno por debajo del 10 % del total. La vía principal es la glucuronidación por UGT2B7, UGT1A3, UGT1A8 y UGT1A9.',
      sigue: 'La empagliflozina, casi intacta, y sus glucurónidos se eliminan.',
      datos: [
        { t: 'No se detectaron metabolitos mayores en plasma; los más abundantes fueron tres glucurónidos, cada uno con menos del 10 % de la exposición.', ref: rengR(`${RENG_PK} › Metabolism`, 'No major metabolites of empagliflozin were detected in human plasma') },
        { t: 'Su vía principal es la glucuronidación por UGT2B7, UGT1A3, UGT1A8 y UGT1A9 (in vitro).', ref: rengR(`${RENG_PK} › Metabolism`, 'the primary route of metabolism of empagliflozin in humans is glucuronidation') }
      ],
      sinDatos: ['Órgano de la glucuronidación'],
      metabolitos: [{ nombre: 'Glucurónidos 2-O, 3-O y 6-O', nombreFuente: '2-O-, 3-O-, and 6-O-glucuronide', actividad: 'desconocida', nota: 'Cada uno, menos del 10 % del material relacionado con el fármaco.', ref: rengR(`${RENG_PK} › Metabolism`, 'the most abundant metabolites were three glucuronide conjugates') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'La empagliflozina y sus glucurónidos llegan a los riñones y al intestino.',
      ocurre: 'Con empagliflozina marcada, un 54,4 % de la radiactividad salió por la orina y un 41,2 % por las heces; en las heces era sobre todo fármaco sin cambios, y en la orina la mitad. Semivida terminal: 12,4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 95,6 % de la radiactividad se eliminó por heces (41,2 %) u orina (54,4 %); en las heces era sobre todo fármaco sin cambios y en la orina, la mitad.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 95.6% of the drug-related radioactivity was eliminated in feces (41.2%) or urine (54.4%)'), poblacion: 'personas sanas' },
        { t: 'Semivida terminal aparente de 12,4 horas y aclaramiento oral aparente de 10,6 L/h.', ref: rengR(`${RENG_PK} › Elimination`, 'The apparent terminal elimination half-life of empagliflozin was estimated to be 12.4 h') }
      ]
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1,5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'were reached at 1.5 hours post-dose') },
    { magnitud: 'comida', nombre: 'Comida rica en grasa: AUC y Cmax', valor: '−16 y −37', unidad: '%', condiciones: '25 mg; no clínicamente relevante', ref: rengR(`${RENG_PK} › Absorption`, 'AUC decreased by approximately 16% and C max decreased by approximately 37%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '73,8', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'was estimated to be 73.8 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '86,2', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'plasma protein binding was 86.2%') },
    { magnitud: 'semivida', nombre: 'Semivida terminal aparente', valor: '12,4', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'was estimated to be 12.4 h') },
    { magnitud: 'orina', nombre: 'Radiactividad en orina', valor: '54,4', unidad: '% de la dosis', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Excretion`, 'urine (54.4%)') },
    { magnitud: 'heces', nombre: 'Radiactividad en heces', valor: '41,2', unidad: '% de la dosis', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Excretion`, 'feces (41.2%)') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'faf3dd6a-9cd0-39c2-0d2e-232cb3f67565', 'JARDIANCE (empagliflozin) tablet, film coated', 'JARDIANCE (Boehringer Ingelheim Pharmaceuticals, Inc.)', '31', '2026-02-02', '2026-11-10'), rengPubchem(11949646, 'Empagliflozin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
