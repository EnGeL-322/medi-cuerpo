import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zestril'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'lisinopril',
    nombre: 'Lisinopril',
    clase: 'Inhibidor de la enzima convertidora de angiotensina (IECA)',
    sinonimos: ['lisinopril', 'Zestril', 'Prinivil'],
    formula: 'C21H31N3O5',
    masaMolar: 405.5,
    smiles: 'C1C[C@H](N(C1)C(=O)[C@H](CCCCN)N[C@@H](CCC2=CC=CC=C2)C(=O)O)C(=O)O',
    inchikey: 'RLAWWYSOJDYHDC-BZSNNMDCSA-N',
    cid: 5362119,
    estereo: { descripcion: 'Tres estereocentros con configuración definida (S): derivado de lisina y prolina.' },
    area: 'Corazón y circulación'
  },
  presentaciones: [
    {
      id: 'lisinopril-zestril',
      producto: 'ZESTRIL (lisinopril) comprimidos de 2,5 a 40 mg',
      titular: 'Upsher-Smith Laboratories, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido sin recubrir',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2,5, 5, 10, 20, 30 y 40 mg de lisinopril por comprimido',
      sal: { nombre: 'Lisinopril dihidrato (forma hidratada, no una sal)', ref: rengR('11 DESCRIPTION', 'L-lysyl]-L-proline dihydrate') },
      excipientes: ['calcium phosphate', 'magnesium stearate', 'mannitol', 'starch', 'red ferric oxide (5 a 30 mg) o yellow ferric oxide (40 mg)'],
      usos: { t: 'Hipertensión (adultos y niños desde 6 años), tratamiento complementario de la insuficiencia cardíaca e infarto agudo de miocardio.', ref: rengR('1 INDICATIONS AND USAGE', 'Zestril is an angiotensin converting enzyme (ACE) inhibitor indicated for') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido de lisinopril (dihidrato) con fosfato de calcio, manitol y almidón; algunos llevan óxido de hierro como colorante.',
    usos: 'Hipertensión, insuficiencia cardíaca e infarto agudo de miocardio, según su etiqueta.',
    actua: 'Inhibe la enzima convertidora de angiotensina: hay menos angiotensina II (vasoconstrictora) y menos aldosterona.',
    recorrido: 'Se absorbe poco y de forma variable (un 25 %), no se une a proteínas, no se metaboliza y sale íntegro por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido sin recubrir llega al estómago.',
      ocurre: 'Se disgrega y libera el lisinopril, soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El lisinopril es soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is soluble in water and sparingly soluble in methanol') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el lisinopril disuelto.',
      ocurre: 'Se absorbe poco y de forma muy variable: un 25 % de media (entre el 6 y el 60 %). El máximo en el suero llega hacia las 7 horas. La comida no cambia su biodisponibilidad.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Según lo recuperado en la orina, la absorción media es de un 25 %, con gran variabilidad entre personas (6-60 %).', ref: rengR(RENG_PK, 'the mean extent of absorption of lisinopril is approximately 25%, with large intersubject variability (6% to 60%)') },
        { t: 'El máximo en el suero se alcanza hacia las 7 horas.', ref: rengR(RENG_PK, 'peak serum concentrations of lisinopril occur within about 7 hours') },
        { t: 'La comida no altera su biodisponibilidad.', ref: rengR(RENG_PK, 'Food does not alter the bioavailability of Zestril'), condiciones: 'con o sin comida' },
        { t: 'En insuficiencia cardíaca estable (NYHA II-IV) la biodisponibilidad absoluta baja al 16 %.', ref: rengR(RENG_PK, 'The absolute bioavailability of lisinopril is reduced to 16%'), poblacion: 'insuficiencia cardíaca NYHA II-IV' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'vasos'],
      llega: 'El lisinopril llega a la sangre.',
      ocurre: 'No parece unirse a proteínas del suero distintas de la ECA. Inhibe la enzima convertidora de angiotensina: baja la angiotensina II y con ella la vasoconstricción y la secreción de aldosterona. El efecto sobre la presión empieza en una hora y es máximo a las 6.',
      sigue: 'Sin transformarse, llega a los riñones.',
      simultaneo: 'Su unión saturable a la ECA explica una fase final prolongada en sangre que no causa acumulación.',
      datos: [
        { t: 'No parece unirse a otras proteínas del suero.', ref: rengR(RENG_PK, 'Lisinopril does not appear to be bound to other serum proteins') },
        { t: 'La fase terminal prolongada probablemente refleja su unión saturable a la ECA.', ref: rengR(RENG_PK, 'This terminal phase probably represents saturable binding to ACE') }
      ],
      accion: {
        diana: 'Enzima convertidora de angiotensina (ECA)',
        efecto: 'Menos angiotensina II y menos aldosterona: baja la presión arterial.',
        lugar: ['vasos', 'corazon'],
        datos: [
          { t: 'Inhibe la ECA, que convierte la angiotensina I en angiotensina II, un vasoconstrictor que además estimula la secreción de aldosterona.', ref: rengR('12.1 Mechanism of Action', 'Lisinopril inhibits angiotensin-converting enzyme (ACE) in human subjects and animals') },
          { t: 'Al haber menos angiotensina II, baja la actividad vasopresora y la secreción de aldosterona.', ref: rengR('12.1 Mechanism of Action', 'Inhibition of ACE results in decreased plasma angiotensin II') },
          { t: 'El efecto antihipertensivo empieza a la hora y alcanza su máximo a las 6 horas.', ref: rengR('12.2 Pharmacodynamics', 'onset of antihypertensive activity was seen at one hour after oral administration') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El lisinopril circula por la sangre.',
      ocurre: 'No se metaboliza.',
      sigue: 'Llega intacto a los riñones.',
      datos: [{ t: 'El lisinopril no se metaboliza y se excreta sin cambios, todo por la orina.', ref: rengR(RENG_PK, 'Lisinopril does not undergo metabolism and is excreted unchanged entirely in the urine') }],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El lisinopril llega a los riñones.',
      ocurre: 'Se elimina sin cambios por la orina. Con dosis repetidas, su semivida efectiva es de 12 horas. Si el filtrado glomerular baja de 30 mL/min, se elimina más despacio; se puede retirar con hemodiálisis.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Con dosis repetidas tiene una semivida efectiva de 12 horas.', ref: rengR(RENG_PK, 'Upon multiple dosing, lisinopril exhibits an effective half-life of 12 hours') },
        { t: 'Se excreta sobre todo por los riñones; la insuficiencia renal reduce su eliminación, de forma importante con filtrado glomerular menor de 30 mL/min.', ref: rengR(RENG_PK, 'Impaired renal function decreases elimination of lisinopril, which is excreted principally through the kidneys'), poblacion: 'insuficiencia renal' }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Absorción media (por recuperación urinaria)', valor: '≈ 25 (6-60)', unidad: '%', ref: rengR(RENG_PK, 'approximately 25%, with large intersubject variability (6% to 60%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≈ 7', unidad: 'h', ref: rengR(RENG_PK, 'occur within about 7 hours') },
    { magnitud: 'semivida', nombre: 'Semivida efectiva (dosis repetidas)', valor: '12', unidad: 'h', ref: rengR(RENG_PK, 'an effective half-life of 12 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta en insuficiencia cardíaca', valor: '16', unidad: '%', poblacion: 'insuficiencia cardíaca NYHA II-IV', ref: rengR(RENG_PK, 'reduced to 16%') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '838c2d78-d2d8-4981-9ec9-e50ef9e1a5d8', 'ZESTRIL (lisinopril) tablet', 'ZESTRIL (Upsher-Smith Laboratories, LLC)', '2', '2025-05-05', '2026-11-10'), rengPubchem(5362119, 'Lisinopril', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
