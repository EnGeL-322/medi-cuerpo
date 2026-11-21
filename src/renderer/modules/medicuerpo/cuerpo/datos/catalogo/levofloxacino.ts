import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-levofloxacino-chartwell'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'levofloxacino',
    nombre: 'Levofloxacino',
    clase: 'Antibacteriano: fluoroquinolona',
    sinonimos: ['levofloxacin'],
    formula: 'C18H20FN3O4',
    masaMolar: 361.4,
    smiles: 'C[C@H]1COC2=C3N1C=C(C(=O)C3=CC(=C2N4CCN(CC4)C)F)C(=O)O',
    inchikey: 'GSDSWSVVBLHKDQ-JTQLQIEISA-N',
    cid: 149096,
    estereo: { descripcion: 'Un estereocentro: es el enantiómero (S)-(−) puro del ofloxacino racémico; en el cuerpo no se convierte en el otro.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'levofloxacino-chartwell',
      producto: 'Levofloxacin comprimidos recubiertos de 250, 500 y 750 mg (genérico)',
      titular: 'Chartwell RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250, 500 y 750 mg de levofloxacino (forma anhidra) por comprimido',
      excipientes: ['corn starch', 'croscarmellose sodium', 'hypromellose', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol', 'povidone', 'titanium dioxide'],
      usos: { t: 'Infecciones por bacterias sensibles en adultos: neumonía, infecciones de piel, prostatitis bacteriana crónica, infecciones urinarias, pielonefritis, sinusitis y bronquitis, además de ántrax por inhalación y peste.', ref: rengR('1 INDICATIONS AND USAGE', 'Pneumonia: Nosocomial ( 1.1 ) and Community Acquired ( 1.2 , 1.3 )') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con levofloxacino (sin sal), almidón de maíz, celulosa y povidona.',
    usos: 'Infecciones bacterianas respiratorias, urinarias, de piel y de próstata, entre otras, según su etiqueta.',
    actua: 'Inhibe dos enzimas bacterianas, la ADN girasa y la topoisomerasa IV, necesarias para copiar y reparar el ADN de la bacteria.',
    recorrido: 'Se absorbe por completo (99 %), se reparte mucho por los tejidos (piel, pulmón), apenas se metaboliza y un 87 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el levofloxacino, soluble en todo el rango de pH del tubo digestivo. Puede unirse a iones metálicos (aluminio, cobre, zinc, magnesio, calcio).',
      sigue: 'Pasa al intestino.',
      datos: [
        { t: 'Entre pH 0,6 y 5,8 su solubilidad es de unos 100 mg/mL; se considera soluble o muy soluble.', ref: rengR('11 DESCRIPTION', 'the solubility of levofloxacin, USP is essentially constant (approximately 100 mg/mL)') },
        { t: 'Puede formar compuestos de coordinación estables con muchos iones metálicos.', ref: rengR('11 DESCRIPTION', 'Levofloxacin, USP has the potential to form stable coordination compounds with many metal ions') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el levofloxacino disuelto.',
      ocurre: 'Se absorbe rápido y por completo: la biodisponibilidad es del 99 %, igual que por vía intravenosa. El máximo llega en 1-2 horas. La comida lo retrasa una hora y lo baja un 14 %, sin importancia práctica.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápida y casi completamente; la biodisponibilidad absoluta de los comprimidos de 500 y 750 mg es de un 99 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of levofloxacin from a 500 mg tablet and a 750 mg tablet of levofloxacin are both approximately 99%') },
        { t: 'El máximo en plasma suele alcanzarse 1-2 horas después de la toma.', ref: rengR(`${RENG_PK} › Absorption`, 'Peak plasma concentrations are usually attained one to two hours after oral dosing') },
        { t: 'Con comida, el máximo se retrasa una hora y baja un 14 % con el comprimido.', ref: rengR(`${RENG_PK} › Absorption`, 'prolongs the time to peak concentration by approximately 1 hour and decreases the peak concentration by approximately 14% following tablet'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'piel', 'pulmones', 'sitio-infeccion'],
      llega: 'El levofloxacino circula por la sangre.',
      ocurre: 'Se reparte ampliamente por los tejidos (74-112 L). En la piel alcanza el doble que en el plasma y en el pulmón de 2 a 5 veces más. Solo un 24-38 % va unido a proteínas. En las bacterias inhibe la ADN girasa y la topoisomerasa IV.',
      sigue: 'Va casi sin transformar a los riñones.',
      datos: [
        { t: 'El volumen de distribución medio va de 74 a 112 L, lo que indica una amplia distribución por los tejidos.', ref: rengR(`${RENG_PK} › Distribution`, 'The mean volume of distribution of levofloxacin generally ranges from 74 to 112 L') },
        { t: 'La relación de AUC piel/plasma es de unos 2 y las concentraciones en el pulmón son de 2 a 5 veces las del plasma.', ref: rengR(`${RENG_PK} › Distribution`, 'Lung tissue concentrations were generally 2- to 5-fold higher than plasma concentrations') },
        { t: 'In vitro se une en un 24-38 % a proteínas séricas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'levofloxacin is approximately 24 to 38% bound to serum proteins') }
      ],
      accion: {
        diana: 'ADN girasa y topoisomerasa IV bacterianas (topoisomerasas de tipo II)',
        efecto: 'Bloquea la replicación, transcripción, reparación y recombinación del ADN bacteriano.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'Su mecanismo, como el de otras fluoroquinolonas, consiste en inhibir la topoisomerasa IV y la ADN girasa bacterianas, necesarias para la replicación, transcripción, reparación y recombinación del ADN.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'involves inhibition of bacterial topoisomerase IV and DNA gyrase') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El levofloxacino circula casi sin transformarse.',
      ocurre: 'Se metaboliza poco: menos del 5 % aparece en la orina como desmetil-levofloxacino o N-óxido, con poca actividad. No se convierte en su enantiómero.',
      sigue: 'Llega a los riñones casi intacto.',
      datos: [
        { t: 'Su metabolismo es limitado; es estable estereoquímicamente y no se invierte a D-ofloxacino.', ref: rengR(`${RENG_PK} › Metabolism`, 'Levofloxacin undergoes limited metabolism in humans and is primarily excreted as unchanged drug in the urine') },
        { t: 'Menos del 5 % de la dosis se recupera en la orina como metabolitos desmetil y N-óxido, los únicos identificados, con poca actividad.', ref: rengR(`${RENG_PK} › Metabolism`, 'Less than 5% of an administered dose was recovered in the urine as the desmethyl and N-oxide metabolites') }
      ],
      sinDatos: ['Órgano del metabolismo'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [
        { nombre: 'Desmetil-levofloxacino', nombreFuente: 'desmethyl metabolite', actividad: 'inactivo', nota: 'Poca actividad farmacológica relevante.', ref: rengR(`${RENG_PK} › Metabolism`, 'These metabolites have little relevant pharmacological activity') },
        { nombre: 'N-óxido de levofloxacino', nombreFuente: 'N-oxide metabolite', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'the only metabolites identified in humans') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El levofloxacino llega a los riñones.',
      ocurre: 'Un 87 % de la dosis sale sin cambios por la orina en 48 horas (filtración y secreción tubular) y menos del 4 % por las heces. Su semivida es de 6-8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 87 % de la dosis se recuperó sin cambios en la orina en 48 horas y menos del 4 % en las heces en 72 horas.', ref: rengR(`${RENG_PK} › Metabolism`, 'approximately 87% of an administered dose was recovered as unchanged drug in urine within 48 hours') },
        { t: 'La semivida terminal media es de 6 a 8 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'The mean terminal plasma elimination half-life of levofloxacin ranges from approximately 6 to 8 hours') },
        { t: 'Su aclaramiento renal supera la filtración glomerular: también hay secreción tubular.', ref: rengR(`${RENG_PK} › Excretion`, 'Renal clearance in excess of the glomerular filtration rate suggests that tubular secretion of levofloxacin occurs') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 99', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'are both approximately 99%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'are usually attained one to two hours after oral dosing') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '74-112', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'generally ranges from 74 to 112 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas (in vitro)', valor: '24-38', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 24 to 38% bound to serum proteins') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '6-8', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'ranges from approximately 6 to 8 hours') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina (48 h)', valor: '≈ 87', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism`, 'approximately 87% of an administered dose was recovered as unchanged drug in urine within 48 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '5c6c117c-9d91-48f4-9aaa-ee70b99218c2', 'LEVOFLOXACIN tablet', 'Levofloxacin (Chartwell RX, LLC)', '3', '2026-06-30', '2026-11-10'), rengPubchem(149096, 'Levofloxacin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
