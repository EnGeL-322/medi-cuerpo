import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-lipitor'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'atorvastatina',
    nombre: 'Atorvastatina',
    clase: 'Inhibidor de la HMG-CoA reductasa (estatina)',
    sinonimos: ['atorvastatin', 'Lipitor'],
    formula: 'C33H35FN2O5',
    masaMolar: 558.6,
    smiles: 'CC(C)C1=C(C(=C(N1CC[C@H](C[C@H](CC(=O)O)O)O)C2=CC=C(C=C2)F)C3=CC=CC=C3)C(=O)NC4=CC=CC=C4',
    inchikey: 'XUKUURHRXDUEBC-KAYWLYCHSA-N',
    cid: 60823,
    iupac: 'ácido (3R,5R)-7-[2-(4-fluorofenil)-3-fenil-4-(fenilcarbamoil)-5-propan-2-ilpirrol-1-il]-3,5-dihidroxiheptanoico',
    estereo: { descripcion: 'Dos estereocentros con configuración definida (3R,5R).' },
    area: 'Colesterol y lípidos'
  },
  presentaciones: [
    {
      id: 'atorvastatina-lipitor',
      producto: 'LIPITOR (atorvastatin calcium) comprimidos recubiertos con película',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10, 20, 40 y 80 mg de atorvastatina por comprimido',
      sal: { nombre: 'Atorvastatina cálcica trihidrato (sal de calcio 2:1); 10 mg de atorvastatina equivalen a 10,36 mg de la sal anhidra', ref: rengR('11 DESCRIPTION', 'calcium salt (2:1) trihydrate') },
      excipientes: ['calcium carbonate', 'candelilla wax', 'croscarmellose sodium', 'hydroxypropyl cellulose', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'Opadry White YS-1-7040 (hypromellose, polyethylene glycol, talc, titanium dioxide)', 'polysorbate 80', 'simethicone emulsion'],
      usos: { t: 'Reducir el riesgo de infarto, ictus y otros episodios cardiovasculares en adultos con factores de riesgo o con enfermedad coronaria, y, junto con la dieta, bajar el colesterol LDL en distintas hiperlipidemias.', ref: rengR('1 INDICATIONS AND USAGE', 'To reduce the risk of') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con atorvastatina en forma de sal de calcio (trihidrato), más excipientes como carbonato de calcio y lactosa.',
    usos: 'Bajar el colesterol LDL y reducir el riesgo de infarto e ictus en adultos con riesgo cardiovascular, según su etiqueta.',
    actua: 'Inhibe la HMG-CoA reductasa, la enzima que limita la síntesis de colesterol; el hígado, su lugar principal de acción, capta entonces más LDL de la sangre.',
    recorrido: 'Se absorbe rápido pero solo un 14 % llega intacto a la circulación; el CYP3A4 la convierte en metabolitos activos y se elimina sobre todo por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto con película baja por el esófago hasta el estómago.',
      ocurre: 'El recubrimiento y el comprimido se disgregan y la atorvastatina (como sal de calcio) se disuelve. La etiqueta no declara liberación modificada.',
      sigue: 'La atorvastatina disuelta pasa al intestino.',
      datos: [
        { t: 'Comprimidos de 10, 20, 40 y 80 mg de atorvastatina para uso oral.', ref: rengR('11 DESCRIPTION', 'LIPITOR tablets for oral use contain atorvastatin 10 mg, 20 mg, 40 mg, or 80 mg') },
        { t: 'La sal (atorvastatina cálcica) es insoluble en soluciones acuosas de pH 4 o menos y muy poco soluble en agua.', ref: rengR('11 DESCRIPTION', 'insoluble in aqueous solutions of pH 4 and below') },
        RENG_GENERAL.disgregar
      ],
      sinDatos: ['Tiempo de disgregación del comprimido']
    },
    absorcion: {
      organos: ['intestino-delgado', 'higado'],
      organosGenerales: ['vena-porta'],
      llega: 'Llega la atorvastatina disuelta al tubo digestivo.',
      ocurre: 'Se absorbe rápido (máximo en la sangre en 1-2 horas), pero solo un 14 % llega intacto a la circulación general: la mucosa intestinal y el hígado la eliminan antes (primer paso). La comida reduce la velocidad (un 25 %) y la cantidad absorbida (un 9 %), sin cambiar la bajada del LDL.',
      sigue: 'La que supera el primer paso circula por la sangre; buena parte del efecto ya ocurre en el hígado.',
      simultaneo: 'El primer paso por el hígado es a la vez absorción, metabolismo y llegada al lugar de acción.',
      datos: [
        { t: 'Se absorbe rápidamente tras tomarla; la concentración máxima en plasma se alcanza en 1-2 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'maximum plasma concentrations occur within 1 to 2 hours') },
        { t: 'La biodisponibilidad absoluta de la atorvastatina es de alrededor del 14 %, y la de la actividad inhibidora total, del 30 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of atorvastatin (parent drug) is approximately 14%') },
        { t: 'La baja disponibilidad se atribuye al aclaramiento presistémico en la mucosa gastrointestinal y al metabolismo de primer paso en el hígado.', ref: rengR(`${RENG_PK} › Absorption`, 'presystemic clearance in gastrointestinal mucosa and/or hepatic first-pass metabolism') },
        { t: 'La comida reduce la velocidad y la magnitud de la absorción en un 25 % y un 9 % (Cmax y AUC), pero la bajada del LDL es similar con o sin comida.', ref: rengR(`${RENG_PK} › Absorption`, 'food decreases the rate and extent of drug absorption by approximately 25% and 9%'), condiciones: 'con comida frente a en ayunas' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo exacto del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'higado'],
      llega: 'La atorvastatina y sus metabolitos activos circulan por la sangre.',
      ocurre: 'Viaja unida a proteínas del plasma en un 98 % o más y apenas entra en los glóbulos rojos. En el hígado inhibe la HMG-CoA reductasa: baja la síntesis de colesterol y aumentan los receptores de LDL, que retiran LDL de la sangre.',
      sigue: 'El hígado también la metaboliza.',
      simultaneo: 'El hígado es a la vez el lugar de acción principal y el de su metabolismo.',
      datos: [
        { t: 'El volumen medio de distribución es de unos 381 litros.', ref: rengR(`${RENG_PK} › Distribution`, 'Mean volume of distribution of LIPITOR is approximately 381 liters') },
        { t: 'Se une a proteínas plasmáticas en un 98 % o más; un cociente sangre/plasma de 0,25 indica que penetra poco en los glóbulos rojos.', ref: rengR(`${RENG_PK} › Distribution`, 'LIPITOR is ≥98% bound to plasma proteins') }
      ],
      accion: {
        diana: 'HMG-CoA reductasa (enzima limitante de la síntesis de colesterol)',
        efecto: 'Baja el colesterol LDL en la sangre: menos síntesis de colesterol en el hígado y más receptores de LDL que lo captan.',
        lugar: ['higado', 'sangre'],
        datos: [
          { t: 'Es un inhibidor selectivo y competitivo de la HMG-CoA reductasa, la enzima que limita la conversión de HMG-CoA en mevalonato, precursor del colesterol.', ref: rengR('12.1 Mechanism of Action', 'LIPITOR is a selective, competitive inhibitor of HMG-CoA reductase') },
          { t: 'Aumenta el número de receptores de LDL en la superficie de las células del hígado, que captan y degradan más LDL.', ref: rengR('12.1 Mechanism of Action', 'increasing the number of hepatic LDL receptors on the cell surface') },
          { t: 'El hígado es el lugar principal de acción y de síntesis de colesterol y aclaramiento del LDL.', ref: rengR('12.2 Pharmacodynamics', 'The liver is the primary site of action') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado', 'intestino-delgado'],
      llega: 'La atorvastatina llega al hígado (y a la mucosa intestinal) por la sangre.',
      ocurre: 'Se metaboliza extensamente en derivados orto- y parahidroxilados y en productos de beta-oxidación; el CYP3A4 parece clave. Los hidroxilados inhiben la enzima igual que la atorvastatina: aportan un 70 % de la actividad inhibidora circulante.',
      sigue: 'La atorvastatina y sus metabolitos pasan a la bilis.',
      datos: [
        { t: 'Se metaboliza extensamente a derivados orto- y parahidroxilados y a productos de beta-oxidación.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'extensively metabolized to ortho- and parahydroxylated derivatives and various beta-oxidation products') },
        { t: 'Los metabolitos hidroxilados inhiben in vitro la HMG-CoA reductasa igual que la atorvastatina; un 70 % de la actividad inhibidora circulante se atribuye a metabolitos activos.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'Approximately 70% of circulating inhibitory activity for HMG-CoA reductase is attributed to active metabolites') },
        { t: 'Los estudios in vitro señalan la importancia del citocromo P450 3A4 en su metabolismo.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'the importance of LIPITOR metabolism by cytochrome P450 3A4') },
        { t: 'Es sustrato de los transportadores hepáticos OATP1B1 y OATP1B3.', ref: rengR(`${RENG_PK} › Drug Interactions`, 'Atorvastatin is a substrate of the hepatic transporters, OATP1B1 and OATP1B3 transporter') }
      ],
      metabolitos: [
        { nombre: 'Orto-hidroxiatorvastatina y para-hidroxiatorvastatina', nombreFuente: 'ortho- and parahydroxylated derivatives', actividad: 'activo', nota: 'Inhiben la HMG-CoA reductasa igual que el fármaco original.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'In vitro inhibition of HMG-CoA reductase by ortho- and parahydroxylated metabolites is equivalent to that of LIPITOR') },
        { nombre: 'Productos de beta-oxidación', nombreFuente: 'various beta-oxidation products', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'various beta-oxidation products') }
      ]
    },
    excrecion: {
      organos: ['bilis', 'heces'],
      organosGenerales: [],
      llega: 'La atorvastatina y sus metabolitos llegan a la bilis desde el hígado.',
      ocurre: 'Se eliminan sobre todo por la bilis (sin recirculación enterohepática aparente); menos del 2 % de la dosis aparece en la orina. Su semivida es de unas 14 horas, pero la actividad inhibidora dura 20-30 horas por los metabolitos activos.',
      sigue: 'Fin del recorrido: lo eliminado por la bilis sale con las heces.',
      datos: [
        { t: 'Se elimina principalmente por la bilis tras su metabolismo hepático o extrahepático; no parece sufrir recirculación enterohepática.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'eliminated primarily in bile following hepatic and/or extra-hepatic metabolism') },
        { t: 'Semivida plasmática media de unas 14 horas; la de la actividad inhibidora, de 20 a 30 horas, por los metabolitos activos.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Mean plasma elimination half-life of LIPITOR in humans is approximately 14 hours') },
        { t: 'Menos del 2 % de una dosis se recupera en la orina.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Less than 2% of a dose of LIPITOR is recovered in urine') }
      ],
      sinDatos: ['Porcentaje de la dosis recuperado en las heces']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'maximum plasma concentrations occur within 1 to 2 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (fármaco original)', valor: '≈ 14', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 14%') },
    { magnitud: 'comida', nombre: 'Efecto de la comida en Cmax y AUC', valor: '−25 y −9', unidad: '%', condiciones: 'con comida frente a en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'by approximately 25% and 9%, respectively, as assessed by Cmax and AUC') },
    { magnitud: 'vd', nombre: 'Volumen de distribución medio', valor: '≈ 381', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 381 liters') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≥ 98', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'LIPITOR is ≥98% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática media', valor: '≈ 14', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'half-life of LIPITOR in humans is approximately 14 hours') },
    { magnitud: 'semivida', nombre: 'Semivida de la actividad inhibidora (con metabolitos)', valor: '20-30', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'the half-life of inhibitory activity for HMG-CoA reductase is 20 to 30 hours') },
    { magnitud: 'orina', nombre: 'Recuperado en la orina', valor: '< 2', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'Less than 2% of a dose of LIPITOR is recovered in urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'a60cc18b-0631-4cf0-b021-9f52224ece65', 'LIPITOR (atorvastatin calcium) tablet, film coated', 'LIPITOR (Viatris Specialty LLC)', '8', '2026-07-15', '2026-11-09'), rengPubchem(60823, 'Atorvastatin', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
