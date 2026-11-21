import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-januvia'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'sitagliptina',
    nombre: 'Sitagliptina',
    clase: 'Inhibidor de la dipeptidil peptidasa 4 (DPP-4)',
    sinonimos: ['sitagliptin', 'Januvia'],
    formula: 'C16H15F6N5O',
    masaMolar: 407.31,
    smiles: 'C1CN2C(=NN=C2C(F)(F)F)CN1C(=O)C[C@@H](CC3=CC(=C(C=C3F)F)F)N',
    inchikey: 'MFFMDFFZMYYVKS-SECBINFHSA-N',
    cid: 4369359,
    estereo: { descripcion: 'Un estereocentro con configuración definida (3R).' },
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'sitagliptina-januvia',
      producto: 'JANUVIA (sitagliptin) comprimidos recubiertos de 25, 50 y 100 mg',
      titular: 'Merck Sharp & Dohme LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25, 50 y 100 mg de sitagliptina (base libre) por comprimido',
      sal: { nombre: 'Fosfato de sitagliptina monohidrato (1:1); 128,5 mg equivalen a 100 mg de base', ref: rengR('11 DESCRIPTION', 'which is equivalent to 25, 50, or 100 mg, respectively, of free base') },
      excipientes: ['microcrystalline cellulose', 'anhydrous dibasic calcium phosphate', 'croscarmellose sodium', 'magnesium stearate', 'sodium stearyl fumarate', 'propyl gallate', 'recubrimiento: polyvinyl alcohol, polyethylene glycol, talc, titanium dioxide, red iron oxide, yellow iron oxide'],
      usos: { t: 'Junto con dieta y ejercicio, mejorar el control de la glucosa en adultos con diabetes tipo 2.', ref: rengR('1 INDICATIONS AND USAGE', 'adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con fosfato de sitagliptina (la sal del activo), celulosa y fosfato cálcico.',
    usos: 'Control de la glucosa en la diabetes tipo 2, según su etiqueta.',
    actua: 'Inhibe la DPP-4, que destruye las incretinas del intestino (GLP-1, GIP): con más incretinas activas, el páncreas libera más insulina y menos glucagón cuando la glucosa está alta.',
    recorrido: 'Biodisponibilidad del 87 %, poca unión a proteínas, apenas se metaboliza y un 79 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el fosfato de sitagliptina, soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El fosfato de sitagliptina monohidrato es soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is soluble in water and N,N-dimethyl formamide') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la sitagliptina disuelta.',
      ocurre: 'Se absorbe rápido: máximo en el plasma a las 1-4 horas y biodisponibilidad absoluta de un 87 %. Una comida rica en grasa no cambia su farmacocinética.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápido, con el máximo en plasma entre 1 y 4 horas; biodisponibilidad absoluta de un 87 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of sitagliptin is approximately 87%'), poblacion: 'personas sanas' },
        { t: 'Una comida rica en grasa no afecta a su farmacocinética.', ref: rengR(`${RENG_PK} › Effect of Food`, 'Coadministration of a high-fat meal with sitagliptin had no effect on the pharmacokinetics of sitagliptin'), condiciones: 'con comida rica en grasa' },
        RENG_GENERAL.intestino
      ]
    },
    distribucion: {
      organos: ['sangre', 'pancreas'],
      llega: 'La sitagliptina circula por la sangre.',
      ocurre: 'Solo un 38 % se une a proteínas y se reparte en unos 198 L. Inhibe la DPP-4 durante 24 horas: tras comer, las incretinas activas (GLP-1, GIP) se duplican o triplican, el páncreas libera más insulina y menos glucagón, y el hígado produce menos glucosa.',
      sigue: 'Los riñones la eliminan casi intacta.',
      datos: [{ t: 'Volumen de distribución de unos 198 L; la fracción unida a proteínas es baja (38 %).', ref: rengR(`${RENG_PK} › Distribution`, 'The fraction of sitagliptin reversibly bound to plasma proteins is low (38%)') }],
      accion: {
        diana: 'Enzima dipeptidil peptidasa 4 (DPP-4)',
        efecto: 'Más incretinas activas: más insulina y menos glucagón según la glucosa; baja la glucosa en ayunas y después de comer.',
        lugar: ['pancreas', 'higado', 'sangre'],
        datos: [
          { t: 'Inhibe la DPP-4 y frena la inactivación de las incretinas, que aumentan la síntesis y liberación de insulina en las células beta del páncreas cuando la glucosa es normal o alta.', ref: rengR('12.1 Mechanism of Action', 'Sitagliptin is a DPP-4 inhibitor, which is believed to exert its actions in patients with type 2 diabetes mellitus by slowing the inactivation of incretin hormones') },
          { t: 'El GLP-1 también reduce la secreción de glucagón y, con ello, la producción de glucosa del hígado.', ref: rengR('12.1 Mechanism of Action', 'GLP-1 also lowers glucagon secretion from pancreatic alpha cells, leading to reduced hepatic glucose production') },
          { t: 'En personas sanas no bajó la glucosa ni causó hipoglucemia.', ref: rengR('12.2 Pharmacodynamics', 'In studies with healthy subjects, sitagliptin did not lower blood glucose or cause hypoglycemia'), poblacion: 'personas sanas' }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una pequeña parte llega a las enzimas que la transforman.',
      ocurre: 'El metabolismo es una vía menor: un 16 % se excreta como metabolitos (seis, en trazas, sin actividad sobre la DPP-4 esperable). Interviene sobre todo el CYP3A4, con el CYP2C8.',
      sigue: 'Casi toda llega intacta a los riñones.',
      datos: [
        { t: 'Un 16 % de la radiactividad se excretó como metabolitos; seis metabolitos en trazas que no deberían contribuir a la inhibición de la DPP-4.', ref: rengR(`${RENG_PK} › Metabolism`, 'approximately 16% of the radioactivity was excreted as metabolites of sitagliptin') },
        { t: 'La enzima principal de su escaso metabolismo es el CYP3A4, con contribución del CYP2C8 (in vitro).', ref: rengR(`${RENG_PK} › Metabolism`, 'the primary enzyme responsible for the limited metabolism of sitagliptin was CYP3A4') }
      ],
      sinDatos: ['Órgano del metabolismo'],
      metabolitos: [{ nombre: 'Seis metabolitos en trazas', actividad: 'inactivo', nota: 'No se espera que contribuyan a la inhibición de la DPP-4.', ref: rengR(`${RENG_PK} › Metabolism`, 'Six metabolites were detected at trace levels') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'La sitagliptina llega a los riñones.',
      ocurre: 'Un 79 % sale sin cambios por la orina, con secreción tubular activa. En una semana se recupera el 100 % de la dosis marcada: 87 % en orina y 13 % en heces. Semivida: unas 12,4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 79 % se excreta sin cambios en la orina; semivida terminal de unas 12,4 horas y aclaramiento renal de unos 350 mL/min.', ref: rengR(`${RENG_PK} › Elimination`, 'Approximately 79% of sitagliptin is excreted unchanged in the urine') },
        { t: 'En una semana se eliminó el 100 % de la radiactividad: 13 % por heces y 87 % por orina.', ref: rengR(`${RENG_PK} › Excretion`, 'eliminated in feces (13%) or urine (87%) within one week of dosing'), poblacion: 'personas sanas' },
        { t: 'Se elimina sobre todo por excreción renal con secreción tubular activa.', ref: rengR(`${RENG_PK} › Excretion`, 'Elimination of sitagliptin occurs primarily via renal excretion and involves active tubular secretion') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (mediana)', valor: '1-4', unidad: 'h', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Absorption`, 'occurring 1 to 4 hours postdose') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 87', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 87%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (estado estacionario)', valor: '≈ 198', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 198 liters') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '38', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is low (38%)') },
    { magnitud: 'orina', nombre: 'Excretado sin cambios en la orina', valor: '≈ 79', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'Approximately 79% of sitagliptin is excreted unchanged in the urine') },
    { magnitud: 'semivida', nombre: 'Semivida terminal aparente (100 mg)', valor: '≈ 12,4', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'was approximately 12.4 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'f85a48d0-0407-4c50-b0fa-7673a160bf01', 'JANUVIA (sitagliptin) tablet, film coated', 'JANUVIA (Merck Sharp & Dohme LLC)', '71', '2025-11-17', '2026-11-10'), rengPubchem(4369359, 'Sitagliptin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
