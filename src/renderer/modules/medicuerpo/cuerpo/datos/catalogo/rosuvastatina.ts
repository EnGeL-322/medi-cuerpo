import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-crestor'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'rosuvastatina',
    nombre: 'Rosuvastatina',
    clase: 'Inhibidor de la HMG-CoA reductasa (estatina)',
    sinonimos: ['rosuvastatin', 'Crestor'],
    formula: 'C22H28FN3O6S',
    masaMolar: 481.5,
    smiles: 'CC(C)C1=NC(=NC(=C1/C=C/[C@H](C[C@H](CC(=O)O)O)O)C2=CC=C(C=C2)F)N(C)S(=O)(=O)C',
    inchikey: 'BPRHUIZQVSMCRT-VEUZHWNKSA-N',
    cid: 446157,
    estereo: { descripcion: 'Dos estereocentros definidos (3R,5S) y un doble enlace E.' },
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'rosuvastatina-crestor',
      producto: 'CRESTOR (rosuvastatin calcium) comprimidos recubiertos de 5, 10, 20 y 40 mg',
      titular: 'AstraZeneca Pharmaceuticals LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5, 10, 20 y 40 mg de rosuvastatina por comprimido',
      sal: { nombre: 'Rosuvastatina cálcica (sal de calcio 2:1); 5 mg de rosuvastatina equivalen a 5,2 mg de la sal', ref: rengR('11 DESCRIPTION', 'equivalent to 5.2 mg, 10.4 mg, 20.8 mg, and 41.6 mg rosuvastatin calcium') },
      excipientes: ['crospovidone', 'hypromellose', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'red ferric oxide', 'titanium dioxide', 'triacetin', 'tribasic calcium phosphate', 'yellow ferric oxide'],
      usos: { t: 'Reducir el riesgo de eventos cardiovasculares mayores en adultos con riesgo aumentado y, con dieta y ejercicio, bajar el colesterol LDL en hipercolesterolemias (también familiares en niños) y frenar la aterosclerosis.', ref: rengR('1 INDICATIONS AND USAGE', 'To reduce the risk of major adverse cardiovascular (CV) events') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con rosuvastatina cálcica (la sal del activo), lactosa, celulosa y fosfato cálcico.',
    usos: 'Bajar el colesterol LDL y reducir eventos cardiovasculares, según su etiqueta.',
    actua: 'Inhibe la HMG-CoA reductasa del hígado: aumentan los receptores de LDL y el hígado retira más LDL de la sangre.',
    recorrido: 'Biodisponibilidad del 20 %, máximo a las 3-5 horas, se metaboliza poco (10 %, por CYP2C9) y sale sobre todo por las heces (90 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la rosuvastatina cálcica, poco soluble en agua e hidrófila.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'La rosuvastatina cálcica es poco soluble en agua y es un compuesto hidrófilo.', ref: rengR('11 DESCRIPTION', 'Rosuvastatin calcium is a hydrophilic compound') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la rosuvastatina disuelta.',
      ocurre: 'El máximo en el plasma llega a las 3-5 horas. Su biodisponibilidad absoluta es de un 20 %. La comida no cambia el AUC, ni tampoco tomarla por la mañana o por la noche.',
      sigue: 'Pasa a la sangre y llega al hígado.',
      datos: [
        { t: 'El máximo en plasma se alcanza 3-5 horas tras la toma; la biodisponibilidad absoluta es de un 20 %.', ref: rengR(`${RENG_PK} › Absorption`, 'peak plasma concentrations of rosuvastatin were reached 3 to 5 hours following oral dosing') },
        { t: 'Tomarla con comida no cambia el AUC.', ref: rengR(`${RENG_PK} › Effect of food`, 'Administration of CRESTOR with food did not affect the AUC of rosuvastatin'), condiciones: 'con comida' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'higado'],
      llega: 'La rosuvastatina circula por la sangre y llega al hígado.',
      ocurre: 'Un 88 % va unida a proteínas (sobre todo albúmina). En el hígado inhibe la HMG-CoA reductasa: aumentan los receptores de LDL, el hígado capta más LDL y bajan el LDL y el colesterol total. La bajada máxima suele llegar a las 4 semanas.',
      sigue: 'Apenas se transforma: sale sobre todo por el hígado a la bilis.',
      datos: [{ t: 'Volumen de distribución medio de unos 134 L; un 88 % se une a proteínas plasmáticas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'Rosuvastatin is 88% bound to plasma proteins, mostly albumin') }],
      accion: {
        diana: 'HMG-CoA reductasa',
        efecto: 'Baja el colesterol LDL y el colesterol total en el plasma.',
        lugar: ['higado', 'sangre'],
        datos: [
          { t: 'Inhibe la HMG-CoA reductasa, la enzima limitante que convierte HMG-CoA en mevalonato, precursor del colesterol.', ref: rengR('12.1 Mechanism of Action', 'CRESTOR is an inhibitor of HMG-CoA reductase') },
          { t: 'Acelera la expresión de receptores de LDL y la captación de LDL de la sangre por el hígado.', ref: rengR('12.1 Mechanism of Action', 'accelerates the expression of LDL-receptors, followed by the uptake of LDL-C from blood to the liver') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'La rosuvastatina llega a las enzimas que podrían transformarla.',
      ocurre: 'Se metaboliza poco: un 10 % de la dosis aparece como metabolito, sobre todo N-desmetil-rosuvastatina (formada por CYP2C9), con entre un sexto y la mitad de la actividad. Más del 90 % de la actividad en plasma es de la rosuvastatina original.',
      sigue: 'Se elimina casi sin transformar.',
      datos: [
        { t: 'No se metaboliza extensamente: un 10 % de una dosis marcada se recupera como metabolito.', ref: rengR(`${RENG_PK} › Metabolism`, 'Rosuvastatin is not extensively metabolized') },
        { t: 'El principal metabolito, la N-desmetil-rosuvastatina, se forma sobre todo por CYP2C9 y tiene de un sexto a la mitad de la actividad inhibidora.', ref: rengR(`${RENG_PK} › Metabolism`, 'The major metabolite is N-desmethyl rosuvastatin, which is formed principally by cytochrome P450 / 2C9') }
      ],
      metabolitos: [{ nombre: 'N-desmetil-rosuvastatina', nombreFuente: 'N-desmethyl rosuvastatin', actividad: 'activo', nota: 'De un sexto a la mitad de la actividad de la rosuvastatina.', ref: rengR(`${RENG_PK} › Metabolism`, 'one-sixth to one-half the HMG-CoA reductase inhibitory activity of the parent compound') }]
    },
    excrecion: {
      organos: ['heces', 'bilis', 'rinones'],
      llega: 'La rosuvastatina y su metabolito llegan al hígado y a los riñones.',
      ocurre: 'Tras la toma oral, un 90 % sale con las heces. Tras una dosis intravenosa, un 28 % del aclaramiento era renal y un 72 % hepático. Semivida: unas 19 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La rosuvastatina y sus metabolitos se excretan sobre todo en las heces (90 %).', ref: rengR(`${RENG_PK} › Excretion`, 'rosuvastatin and its metabolites are primarily excreted in the feces (90%)') },
        { t: 'Tras una dosis intravenosa, un 28 % del aclaramiento total fue renal y un 72 % hepático.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 28% of total body clearance was via the renal route, and 72% by the hepatic route'), alcance: 'otra-presentacion', condiciones: 'dosis intravenosa' },
        { t: 'Su semivida de eliminación es de unas 19 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'The elimination half-life of rosuvastatin is approximately 19 hours') }
      ]
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '3-5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'were reached 3 to 5 hours following oral dosing') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 20', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of rosuvastatin is approximately 20%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (estado estacionario)', valor: '≈ 134', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 134 liters') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '88', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Rosuvastatin is 88% bound to plasma proteins') },
    { magnitud: 'heces', nombre: 'Excretado en las heces', valor: '≈ 90', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'primarily excreted in the feces (90%)') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '≈ 19', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 19 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '325a5d0e-9a72-4015-9fcd-1655fb504cee', 'CRESTOR (rosuvastatin calcium) tablet, film coated', 'CRESTOR (AstraZeneca Pharmaceuticals LP)', '19', '2026-09-30', '2026-11-10'), rengPubchem(446157, 'Rosuvastatin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
