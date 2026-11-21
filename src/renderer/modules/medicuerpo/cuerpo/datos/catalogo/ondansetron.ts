import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-ondansetron-ascend'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = 'CLINICAL PHARMACOLOGY › Pharmacokinetics'
const RENG_PD = 'CLINICAL PHARMACOLOGY › Pharmacodynamics'

export default {
  activo: {
    id: 'ondansetron',
    nombre: 'Ondansetrón',
    clase: 'Antiemético (antagonista selectivo de receptores 5-HT3)',
    sinonimos: ['ondansetron', 'ondansetron hydrochloride'],
    formula: 'C18H19N3O',
    masaMolar: 293.4,
    smiles: 'CC1=NC=CN1CC2CCC3=C(C2=O)C4=CC=CC=C4N3C',
    inchikey: 'FELGMEQIXOGIFQ-UHFFFAOYSA-N',
    cid: 4595,
    estereo: { descripcion: 'Un estereocentro; el medicamento es la mezcla racémica (±) de los dos enantiómeros.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'ondansetron-ascend',
      producto: 'Ondansetron comprimidos recubiertos de 4 y 8 mg (genérico)',
      titular: 'Ascend Laboratories, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: 'Hidrocloruro de ondansetrón dihidrato equivalente a 4 u 8 mg de ondansetrón por comprimido',
      sal: { nombre: 'Hidrocloruro de ondansetrón dihidrato (forma racémica)', ref: rengR('DESCRIPTION', 'The active ingredient in ondansetron is ondansetron hydrochloride (HCl) as the dihydrate, the racemic form of ondansetron') },
      excipientes: ['croscarmellose sodium', 'hypromellose', 'lactose monohydrate', 'magnesium stearate', 'microcrystalline cellulose', 'pregelatinized starch', 'titanium dioxide', 'triacetin', 'iron oxide yellow (solo 8 mg)'],
      usos: { t: 'Prevenir las náuseas y los vómitos de la quimioterapia contra el cáncer, de la radioterapia y del posoperatorio.', ref: rengR('INDICATIONS AND USAGE', 'Prevention of nausea and vomiting associated with highly emetogenic cancer chemotherapy') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con hidrocloruro de ondansetrón dihidrato (la sal del activo), lactosa, celulosa y almidón.',
    usos: 'Prevenir náuseas y vómitos por quimioterapia, radioterapia o cirugía, según su etiqueta.',
    actua: 'Bloquea los receptores 5-HT3 de la serotonina en las terminaciones del nervio vago y en la zona del encéfalo que dispara el vómito; no se sabe cuál de los dos sitios pesa más.',
    recorrido: 'Se absorbe bien con algo de primer paso (biodisponibilidad del 56 %), el hígado la metaboliza ampliamente (sobre todo CYP3A4) y solo un 5 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el hidrocloruro de ondansetrón, soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El hidrocloruro de ondansetrón dihidrato es soluble en agua y en suero salino.', ref: rengR('DESCRIPTION', 'Ondansetron HCl dihydrate is a white to off-white powder that is soluble in water and normal saline') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['vena-porta', 'higado'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el ondansetrón disuelto.',
      ocurre: 'Se absorbe bien en el tubo digestivo, pero parte se metaboliza en el primer paso: la biodisponibilidad media es del 56 % con un comprimido de 8 mg. Con dosis altas el primer paso parece saturarse un poco. La comida la aumenta ligeramente.',
      sigue: 'Pasa a la circulación general.',
      datos: [
        { t: 'Se absorbe bien en el tubo digestivo y sufre algo de metabolismo de primer paso; la biodisponibilidad media con un comprimido de 8 mg es del 56 %.', ref: rengR(RENG_PK, 'Mean bioavailability in healthy subjects, following administration of a single 8 mg tablet, is approximately 56%'), poblacion: 'personas sanas' },
        { t: 'El AUC con 16 mg fue un 24 % mayor de lo esperado, quizá por un menor primer paso a dosis altas.', ref: rengR(RENG_PK, 'This may reflect some reduction of first-pass metabolism at higher oral doses') },
        { t: 'La comida aumenta ligeramente la biodisponibilidad; los antiácidos no la cambian.', ref: rengR(RENG_PK, 'Bioavailability is also slightly enhanced by the presence of food but unaffected by antacids'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'nervios', 'encefalo'],
      llega: 'El ondansetrón circula por la sangre.',
      ocurre: 'Un 70-76 % va unido a proteínas y también entra en los glóbulos rojos. Bloquea los receptores 5-HT3 de la serotonina, presentes en las terminaciones del nervio vago y en la zona gatillo del área postrema del encéfalo. La quimioterapia hace que el intestino libere serotonina, que activaría el vago y el reflejo del vómito.',
      sigue: 'El hígado lo metaboliza.',
      datos: [{ t: 'In vitro, la unión a proteínas plasmáticas es del 70-76 %; el fármaco circulante también se distribuye en los eritrocitos.', ref: rengR(RENG_PK, 'Plasma protein binding of ondansetron as measured in vitro was 70% to 76%') }],
      sinDatos: ['Volumen de distribución en cifras'],
      accion: {
        diana: 'Receptores 5-HT3 de la serotonina (periféricos en el vago y centrales en el área postrema)',
        efecto: 'Antiemético: previene náuseas y vómitos.',
        lugar: ['nervios', 'encefalo'],
        datos: [
          { t: 'Los receptores 5-HT3 están en las terminaciones del nervio vago y en la zona gatillo quimiorreceptora del área postrema; no se sabe si actúa en el centro, en la periferia o en ambos.', ref: rengR(RENG_PD, "It is not certain whether ondansetron's antiemetic action is mediated centrally, peripherally, or in both sites") },
          { t: 'La quimioterapia parece liberar serotonina de las células enterocromafines del intestino delgado, que estimularía el vago a través de los 5-HT3 e iniciaría el reflejo del vómito.', ref: rengR(RENG_PD, 'The released serotonin may stimulate the vagal afferents through the 5-HT 3 receptors and initiate the vomiting reflex') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El ondansetrón llega al hígado.',
      ocurre: 'Se metaboliza ampliamente: primero se hidroxila el anillo indólico y luego se conjuga con glucurónido o sulfato. Intervienen varios citocromos P450 del hígado (CYP1A2, CYP2D6 y CYP3A4, sobre todo el 3A4); si falta uno, los demás lo compensan. Algunos metabolitos son activos, pero no llegan al plasma en cantidad suficiente.',
      sigue: 'Los metabolitos se eliminan.',
      datos: [
        { t: 'Se metaboliza ampliamente: la vía principal es la hidroxilación del anillo indólico seguida de conjugación con glucurónido o sulfato.', ref: rengR(RENG_PK, 'The primary metabolic pathway is hydroxylation on the indole ring followed by subsequent glucuronide or sulfate conjugation') },
        { t: 'Es sustrato de CYP1A2, CYP2D6 y CYP3A4 hepáticos; el CYP3A4 tiene el papel predominante.', ref: rengR(RENG_PK, 'In terms of overall ondansetron turnover, CYP3A4 played the predominant role') },
        { t: 'Con insuficiencia hepática leve a moderada, el aclaramiento baja a la mitad y la semivida sube a 11,6 horas (frente a 5,7 en sanos).', ref: rengR(RENG_PK, 'mean half-life is increased to 11.6 hours compared to 5.7 hours in normals'), poblacion: 'insuficiencia hepática' }
      ],
      metabolitos: [{ nombre: 'Metabolitos hidroxilados y sus conjugados (glucurónido o sulfato)', actividad: 'desconocida', nota: 'Algunos no conjugados tienen actividad, pero no alcanzan en plasma concentraciones que contribuyan al efecto.', ref: rengR(RENG_PK, 'Although some nonconjugated metabolites have pharmacologic activity') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El ondansetrón sin cambios y sus metabolitos llegan a la eliminación.',
      ocurre: 'Solo un 5 % de una dosis marcada se recupera en la orina como ondansetrón sin cambios: los riñones aportan poco a su aclaramiento. La etiqueta no detalla por dónde salen los metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Aproximadamente un 5 % de una dosis radiomarcada se recupera en la orina como compuesto original.', ref: rengR(RENG_PK, 'with approximately 5% of a radiolabeled dose recovered as the parent compound from the urine') },
        { t: 'La contribución renal al aclaramiento total es muy pequeña (5 %).', ref: rengR(RENG_PK, 'Due to the very small contribution (5%) of renal clearance to the overall clearance') }
      ],
      sinDatos: ['Reparto de los metabolitos entre orina y heces'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad (comprimido de 8 mg)', valor: '≈ 56', unidad: '%', poblacion: 'personas sanas', ref: rengR(RENG_PK, 'is approximately 56%') },
    { magnitud: 'union', nombre: 'Unión a proteínas (in vitro)', valor: '70-76', unidad: '%', ref: rengR(RENG_PK, 'was 70% to 76% over the concentration range of 10 to 500 ng/mL') },
    { magnitud: 'semivida', nombre: 'Semivida media en sanos (estudio hepático)', valor: '5,7', unidad: 'h', ref: rengR(RENG_PK, 'compared to 5.7 hours in normals') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina', valor: '≈ 5', unidad: '% de la dosis', ref: rengR(RENG_PK, 'approximately 5% of a radiolabeled dose recovered as the parent compound from the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '2edc0788-dc38-4d21-ba8e-71f159e2d3b1', 'ONDANSETRON (ondansetron hydrochloride) tablet, film coated', 'Ondansetron (Ascend Laboratories, LLC)', '11', '2026-07-24', '2026-11-10'), rengPubchem(4595, 'Ondansetron', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
