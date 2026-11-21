import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-tamiflu'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'oseltamivir',
    nombre: 'Oseltamivir',
    clase: 'Antiviral contra la gripe (profármaco inhibidor de la neuraminidasa)',
    sinonimos: ['oseltamivir', 'Tamiflu'],
    formula: 'C16H28N2O4',
    masaMolar: 312.4,
    smiles: 'CCC(CC)O[C@@H]1C=C(C[C@@H]([C@H]1NC(=O)C)N)C(=O)OCC',
    inchikey: 'VSZGPKBBMSAYNT-RRFJBIMHSA-N',
    cid: 65028,
    estereo: { descripcion: 'Tres estereocentros definidos (3R, 4R, 5S): es un solo estereoisómero.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'oseltamivir-tamiflu-capsulas',
      producto: 'TAMIFLU (oseltamivir) cápsulas de 30, 45 y 75 mg',
      titular: 'Genentech, Inc.',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '30, 45 y 75 mg de oseltamivir (como fosfato) por cápsula',
      sal: { nombre: 'Fosfato de oseltamivir (1:1)', ref: rengR('11 DESCRIPTION', 'Capsules containing 30 mg, 45 mg, or 75 mg of oseltamivir for oral use, in the form of oseltamivir phosphate') },
      excipientes: ['croscarmellose sodium', 'povidone K30', 'pregelatinized starch', 'sodium stearyl fumarate', 'talc', 'cápsula: gelatin, óxidos de hierro, titanium dioxide; tinta con FD&C Blue No. 2'],
      usos: { t: 'Tratamiento de la gripe A y B no complicada desde las 2 semanas de vida (con síntomas de 48 horas como máximo) y prevención desde 1 año. No sustituye a la vacuna.', ref: rengR('1 INDICATIONS AND USAGE', 'Treatment of acute, uncomplicated influenza A and B in patients 2 weeks of age and older who have been symptomatic for no more than 48 hours') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye un polvo para suspensión oral (6 mg/mL).'
    }
  ],
  resumen: {
    contiene: 'Cápsula con fosfato de oseltamivir (la sal de un éster profármaco), almidón y povidona.',
    usos: 'Tratamiento y prevención de la gripe A y B, según su etiqueta.',
    actua: 'Es un profármaco: las esterasas del hígado lo convierten en oseltamivir carboxilato, que bloquea la neuraminidasa del virus de la gripe y frena la salida de nuevas partículas virales.',
    recorrido: 'Se absorbe y el hígado lo convierte casi todo en carboxilato (al menos el 75 % de la dosis llega así a la sangre), que no se metaboliza más y sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera el fosfato de oseltamivir.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada cápsula contiene 30, 45 o 75 mg de oseltamivir en forma de fosfato.', ref: rengR('11 DESCRIPTION', 'Capsules containing 30 mg, 45 mg, or 75 mg of oseltamivir for oral use') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['vena-porta', 'higado'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el oseltamivir disuelto.',
      ocurre: 'Se absorbe en el tubo digestivo y las esterasas, sobre todo del hígado, lo convierten en oseltamivir carboxilato: al menos el 75 % de la dosis llega a la circulación así, y menos del 5 % como oseltamivir. La comida no cambia la exposición.',
      sigue: 'El carboxilato activo pasa a la circulación general.',
      simultaneo: 'Absorción y activación ocurren casi a la vez, en el primer paso por el hígado.',
      datos: [
        { t: 'Se absorbe en el tubo digestivo y se convierte ampliamente, sobre todo por esterasas hepáticas, en oseltamivir carboxilato.', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'is extensively converted predominantly by hepatic esterases to oseltamivir carboxylate') },
        { t: 'Al menos un 75 % de la dosis llega a la circulación como carboxilato y menos del 5 % como oseltamivir.', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'At least 75% of an oral dose reaches the systemic circulation as oseltamivir carboxylate') },
        { t: 'La comida no tuvo efecto significativo en el máximo ni en el AUC del carboxilato.', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'Coadministration with food had no significant effect on the peak plasma concentration'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'sitio-infeccion'],
      llega: 'El oseltamivir carboxilato circula por la sangre.',
      ocurre: 'Apenas se une a proteínas (3 %) y su volumen es de 23-26 L. Inhibe la neuraminidasa del virus de la gripe, la enzima que libera las nuevas partículas virales de las células infectadas.',
      sigue: 'No se transforma más: va a los riñones.',
      datos: [
        { t: 'El volumen de distribución del carboxilato es de 23-26 L (dosis intravenosa experimental en 24 personas).', ref: rengR(`${RENG_PK} › Distribution`, 'ranged between 23 and 26 liters') },
        { t: 'La unión a proteínas es baja: un 3 % para el carboxilato y un 42 % para el oseltamivir.', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of oseltamivir carboxylate to human plasma protein is low (3%)') }
      ],
      accion: {
        diana: 'Neuraminidasa del virus de la gripe',
        efecto: 'Dificulta la liberación de nuevas partículas virales.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'El fosfato de oseltamivir es un profármaco éster; su forma activa, el carboxilato, inhibe la neuraminidasa del virus de la gripe y afecta a la liberación de partículas virales.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'Oseltamivir carboxylate is an inhibitor of influenza virus neuraminidase affecting release of viral particles') }]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El oseltamivir absorbido llega a las esterasas del hígado.',
      ocurre: 'Más del 90 % del oseltamivir absorbido se convierte en carboxilato por esterasas, sobre todo hepáticas. El carboxilato no se metaboliza más. No intervienen los citocromos P450.',
      sigue: 'El carboxilato va a los riñones.',
      datos: [
        { t: 'Se convierte ampliamente en oseltamivir carboxilato por esterasas, sobre todo del hígado; el carboxilato no se metaboliza más y ninguno de los dos es sustrato ni inhibidor de los CYP.', ref: rengR(`${RENG_PK} › Metabolism`, 'Oseltamivir is extensively converted to the active metabolite, oseltamivir carboxylate, by esterases located predominantly in the liver') },
        { t: 'Más del 90 % del oseltamivir absorbido se elimina por conversión a carboxilato; el oseltamivir tiene una semivida de 1-3 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'Absorbed oseltamivir is primarily (>90%) eliminated by conversion to the active metabolite, oseltamivir carboxylate') }
      ],
      metabolitos: [{ nombre: 'Oseltamivir carboxilato', nombreFuente: 'oseltamivir carboxylate', actividad: 'activo', nota: 'Forma activa; semivida de 6-10 horas.', smiles: 'CCC(CC)O[C@@H]1C=C(C[C@@H]([C@H]1NC(=O)C)N)C(=O)O', cid: 449381, ref: rengR(`${RENG_PK} › Metabolism`, 'Oseltamivir carboxylate is not further metabolized') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El carboxilato llega a los riñones.',
      ocurre: 'Se elimina casi por completo (más del 99 %) por la orina, por filtración y por secreción tubular. Menos del 20 % de una dosis marcada sale por las heces. La semivida del carboxilato es de 6-10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'El carboxilato se elimina por completo (más del 99 %) por vía renal; su aclaramiento renal supera la filtración glomerular, así que también hay secreción tubular.', ref: rengR(`${RENG_PK} › Excretion`, 'Oseltamivir carboxylate is eliminated entirely (>99%) by renal excretion') },
        { t: 'Menos del 20 % de una dosis oral marcada se elimina en las heces.', ref: rengR(`${RENG_PK} › Excretion`, 'Less than 20% of an oral radiolabeled dose is eliminated in feces') },
        { t: 'La semivida del carboxilato es de 6-10 horas en la mayoría de las personas.', ref: rengR(`${RENG_PK} › Elimination`, 'Plasma concentrations of oseltamivir carboxylate declined with a half-life of 6 to 10 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Dosis que llega a la sangre como carboxilato', valor: '≥ 75', unidad: '%', ref: rengR(`${RENG_PK} › Absorption and Bioavailability`, 'At least 75% of an oral dose reaches the systemic circulation as oseltamivir carboxylate') },
    { magnitud: 'vd', nombre: 'Volumen de distribución del carboxilato', valor: '23-26', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'ranged between 23 and 26 liters') },
    { magnitud: 'union', nombre: 'Unión a proteínas del carboxilato', valor: '3', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of oseltamivir carboxylate to human plasma protein is low (3%)') },
    { magnitud: 'semivida', nombre: 'Semivida del carboxilato', valor: '6-10', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'with a half-life of 6 to 10 hours') },
    { magnitud: 'orina', nombre: 'Carboxilato eliminado por el riñón', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Excretion`, 'is eliminated entirely (>99%) by renal excretion') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'ee3c9555-60f2-4f82-a760-11983c86e97b', 'TAMIFLU (oseltamivir phosphate) capsule; powder, for suspension', 'TAMIFLU (Genentech, Inc.)', '45', '2025-12-19', '2026-11-10'), rengPubchem(65028, 'Oseltamivir', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
