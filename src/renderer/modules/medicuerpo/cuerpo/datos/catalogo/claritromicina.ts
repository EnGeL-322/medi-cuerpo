import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-claritromicina-rising'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'claritromicina',
    nombre: 'Claritromicina',
    clase: 'Antibacteriano: macrólido',
    sinonimos: ['clarithromycin'],
    formula: 'C38H69NO13',
    masaMolar: 748.0,
    smiles: 'CC[C@@H]1[C@@]([C@@H]([C@H](C(=O)[C@@H](C[C@@]([C@@H]([C@H]([C@@H]([C@H](C(=O)O1)C)O[C@H]2C[C@@]([C@H]([C@@H](O2)C)O)(C)OC)C)O[C@H]3[C@@H]([C@H](C[C@H](O3)C)N(C)C)O)(C)OC)C)C)O)(C)O',
    inchikey: 'AGOYDEPGAOXOCK-KCBOHYOISA-N',
    cid: 84029,
    iupac: '6-O-metileritromicina',
    estereo: { descripcion: 'Macrólido con muchos estereocentros definidos: es un solo estereoisómero, derivado semisintético de la eritromicina.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'claritromicina-rising',
      producto: 'Clarithromycin comprimidos recubiertos de 250 y 500 mg, liberación inmediata (genérico)',
      titular: 'Rising Pharma Holdings, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película (liberación inmediata)',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'inmediata',
      concentraciones: '250 y 500 mg de claritromicina por comprimido',
      excipientes: ['microcrystalline cellulose', 'croscarmellose sodium', 'colloidal silicon dioxide', 'magnesium stearate', 'povidone', 'hypromellose', 'titanium dioxide', 'hydroxypropyl cellulose', 'iron oxide yellow', 'propylene glycol', 'vanillin', 'sorbic acid'],
      usos: { t: 'Infecciones leves o moderadas por bacterias sensibles: bronquitis, sinusitis, neumonía, faringitis, piel, otitis en niños, micobacterias diseminadas y, combinada, erradicación de H. pylori.', ref: rengR('1 INDICATIONS AND USAGE', 'Clarithromycin tablets are a macrolide antimicrobial indicated for mild to moderate infections caused by designated, susceptible bacteria') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto amarillo de claritromicina (sin sal), celulosa, croscarmelosa y povidona.',
    usos: 'Infecciones respiratorias, de piel y por H. pylori, entre otras, según su etiqueta.',
    actua: 'Se une a la subunidad 50S del ribosoma bacteriano y frena la síntesis de proteínas.',
    recorrido: 'Se absorbe a medias (50 %), entra en las células y se concentra en tejidos como el pulmón, forma un metabolito activo (14-OH) y sale en parte por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la claritromicina, prácticamente insoluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Son comprimidos de liberación inmediata; la claritromicina es prácticamente insoluble en agua.', ref: rengR('11 DESCRIPTION', 'Clarithromycin tablets, USP are available as immediate-release tablets') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la claritromicina liberada.',
      ocurre: 'Se absorbe la mitad (biodisponibilidad del 50 % con 250 mg). El máximo llega a las 2-3 horas. La comida lo retrasa un poco y lo sube un 24 %, sin cambiar la cantidad absorbida.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta de los comprimidos de 250 mg fue de un 50 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of 250 mg clarithromycin tablets was approximately 50%') },
        { t: 'Sin ayuno, el máximo se alcanza a las 2-3 horas; la comida lo sube un 24 % sin cambiar la biodisponibilidad.', ref: rengR(`${RENG_PK} › Absorption`, 'Food also increases the clarithromycin peak plasma concentration by about 24%, but does not affect the extent of clarithromycin bioavailability'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'pulmones', 'vias-respiratorias', 'sitio-infeccion'],
      llega: 'La claritromicina y su metabolito 14-OH circulan por la sangre.',
      ocurre: 'Pasan con facilidad a los tejidos y líquidos. Como se concentran dentro de las células, en los tejidos hay más que en el suero: en el pulmón, unas 5 veces más. No hay datos del paso al líquido cefalorraquídeo. En las bacterias se une a la subunidad 50S del ribosoma.',
      sigue: 'Una parte se transforma en 14-OH-claritromicina.',
      datos: [
        { t: 'La claritromicina y su metabolito 14-OH se distribuyen fácilmente en tejidos y líquidos; por sus altas concentraciones intracelulares, los tejidos superan al suero.', ref: rengR(`${RENG_PK} › Distribution`, 'Because of high intracellular concentrations, tissue concentrations are higher than serum concentrations') },
        { t: 'Con 250 mg cada 12 horas: amígdala 1,6 µg/g frente a 0,8 µg/mL en suero; pulmón 8,8 µg/g frente a 1,7 µg/mL.', ref: rengR(`${RENG_PK} › Distribution`, 'Tonsil 1.6 0.8 Lung 8.8 1.7') }
      ],
      sinDatos: ['Unión a proteínas', 'Volumen de distribución', 'Paso al líquido cefalorraquídeo'],
      accion: {
        diana: 'Subunidad 50S del ribosoma bacteriano',
        efecto: 'Inhibe la síntesis de proteínas bacterianas.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'Se une a la subunidad 50S del ribosoma de las bacterias sensibles e inhibe la síntesis de proteínas.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'Clarithromycin exerts its antibacterial action by binding to the 50S ribosomal subunit of susceptible bacteria resulting in inhibition of protein synthesis') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La claritromicina llega a las enzimas que la transforman.',
      ocurre: 'Forma su metabolito principal, la 14-OH-claritromicina, que también es activa y dura algo más. Con la función hepática alterada se forma menos 14-OH, y los riñones compensan eliminando más claritromicina.',
      sigue: 'La claritromicina y su metabolito van a los riñones.',
      datos: [
        { t: 'El metabolito principal, 14-OH-claritromicina, es activo; con 250 mg cada 12 horas alcanza unos 0,6 µg/mL y su semivida es de 5-6 horas.', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'the principal metabolite, 14-OH clarithromycin, attains a peak steady-state concentration of about 0.6 mcg/mL') },
        { t: 'En la insuficiencia hepática se forma menos 14-OH-claritromicina, compensado en parte por más aclaramiento renal.', ref: rengR(`${RENG_PK} › Hepatic Impairment`, 'the 14-OH clarithromycin concentrations were lower in the hepatically impaired subjects'), poblacion: 'insuficiencia hepática' }
      ],
      sinDatos: ['Órgano y enzimas del metabolismo'],
      metabolitos: [{ nombre: '14-hidroxi-claritromicina', nombreFuente: '14-OH clarithromycin', actividad: 'activo', nota: '10-15 % de la dosis en la orina.', ref: rengR(`${RENG_PK} › Absorption`, 'the active metabolite, 14-OH clarithromycin') }]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La claritromicina y su metabolito llegan a los riñones.',
      ocurre: 'Con 250 mg cada 12 horas, un 20 % sale por la orina como claritromicina y otro 10-15 % como 14-OH. Su semivida es de 3-4 horas con 250 mg y de 5-7 horas con 500 mg.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Con 250 mg cada 12 horas, un 20 % de la dosis se excreta en la orina como claritromicina (un 30 % con 500 mg).', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'approximately 20% of the dose is excreted in the urine as clarithromycin') },
        { t: 'El metabolito principal en la orina, la 14-OH-claritromicina, supone otro 10-15 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'which accounts for an additional 10% to 15% of the dose') },
        { t: 'La semivida es de 3-4 horas con 250 mg cada 12 horas y de 5-7 horas con 500 mg cada 8-12 horas.', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'The elimination half-life of clarithromycin was about 3 hours to 4 hours with 250 mg administered every 12 hours') }
      ],
      sinDatos: ['Excreción por heces o bilis'],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (250 mg)', valor: '≈ 50', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'was approximately 50%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '2-3', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'peak plasma concentrations were attained within 2 to 3 hours after oral dosing') },
    { magnitud: 'semivida', nombre: 'Semivida (250 mg cada 12 h)', valor: '3-4', unidad: 'h', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'was about 3 hours to 4 hours with 250 mg') },
    { magnitud: 'orina', nombre: 'Claritromicina en la orina (250 mg)', valor: '≈ 20', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'approximately 20% of the dose is excreted in the urine as clarithromycin') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '0c4db97f-f4c9-4cac-9f12-9db1d967ebeb', 'CLARITHROMYCIN tablet, film coated', 'Clarithromycin (Rising Pharma Holdings, Inc.)', '17', '2024-01-19', '2026-11-10'), rengPubchem(84029, 'Clarithromycin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
