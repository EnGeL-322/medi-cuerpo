import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zithromax'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'azitromicina',
    nombre: 'Azitromicina',
    clase: 'Antibiótico macrólido (azálida)',
    sinonimos: ['azithromycin', 'Zithromax'],
    formula: 'C38H72N2O12',
    masaMolar: 749,
    smiles:
      'CC[C@@H]1[C@@]([C@@H]([C@H](N(C[C@@H](C[C@@]([C@@H]([C@H]([C@@H]([C@H](C(=O)O1)C)O[C@H]2C[C@@]([C@H]([C@@H](O2)C)O)(C)OC)C)O[C@H]3[C@@H]([C@H](C[C@H](O3)C)N(C)C)O)(C)O)C)C)C)O)(C)O',
    inchikey: 'MQTOSJVFKKJCRP-BICOPXKESA-N',
    cid: 447043,
    estereo: { descripcion: 'Macrólido derivado de la eritromicina, con 18 estereocentros definidos.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'azitromicina-zithromax',
      producto: 'ZITHROMAX (azithromycin) comprimidos recubiertos de 250 y 500 mg',
      titular: 'Pfizer Laboratories Div Pfizer Inc',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250 y 500 mg de azitromicina por comprimido',
      sal: { nombre: 'Azitromicina dihidrato (forma hidratada, no una sal)', ref: rengR('11 DESCRIPTION', 'Azithromycin, as the dihydrate, is a white crystalline powder') },
      excipientes: ['D&C Red #30 aluminum lake', 'dibasic calcium phosphate anhydrous', 'hypromellose', 'lactose', 'magnesium stearate', 'pregelatinized starch', 'sodium croscarmellose', 'sodium lauryl sulfate', 'titanium dioxide', 'triacetin'],
      usos: { t: 'Infecciones leves a moderadas por microorganismos sensibles: exacerbaciones de bronquitis crónica, sinusitis, neumonía adquirida en la comunidad, faringitis, infecciones de piel, uretritis y cervicitis, úlceras genitales y otitis media en niños, entre otras.', ref: rengR('1 INDICATIONS AND USAGE', 'ZITHROMAX is a macrolide antibacterial drug indicated for treatment of patients with mild to moderate infections') },
      fuente: RENG_F,
      nota: 'La biodisponibilidad absoluta (38 %) se midió con cápsulas de 250 mg; la misma etiqueta incluye una suspensión oral, con la que la comida aumenta más la Cmax.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de azitromicina dihidrato con lactosa, fosfato cálcico y almidón.',
    usos: 'Infecciones respiratorias, de piel, de transmisión sexual y otitis por bacterias sensibles, según su etiqueta.',
    actua: 'Se une al ARN ribosómico 23S de la subunidad 50S bacteriana y bloquea la síntesis de proteínas de la bacteria.',
    recorrido: 'Biodisponibilidad del 38 %, se acumula mucho en los tejidos (pulmón, piel, amígdalas…), se libera de ellos lentamente (semivida de 68 horas) y se elimina sobre todo sin cambios por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la azitromicina.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Comprimidos con azitromicina dihidrato equivalente a 250 o 500 mg.', ref: rengR('11 DESCRIPTION', 'is supplied as tablets containing azithromycin dihydrate equivalent to either 250 mg or 500 mg azithromycin') }, RENG_GENERAL.disgregar],
      sinDatos: ['Tiempo de disgregación']
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la azitromicina liberada.',
      ocurre: 'Con 500 mg en ayunas, el máximo en la sangre llega hacia las 2,2 horas. La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %. Con una comida grasa, la Cmax del comprimido sube un 23 % sin cambiar el AUC.',
      sigue: 'Pasa a la sangre y enseguida a los tejidos.',
      datos: [
        { t: 'Con 500 mg (dos comprimidos de 250 mg) en hombres sanos en ayunas, Tmax de 2,2 horas y Cmax de 0,5 mcg/mL.', ref: rengR(RENG_PK, 'T max =2.2 (0.9) hours'), poblacion: 'hombres sanos', condiciones: 'en ayunas' },
        { t: 'La biodisponibilidad absoluta de las cápsulas de 250 mg es del 38 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of azithromycin 250 mg capsules is 38%'), alcance: 'otra-presentacion' },
        { t: 'Con una comida rica en grasa, la Cmax aumentó un 23 % sin efecto sobre el AUC.', ref: rengR(`${RENG_PK} › Absorption`, 'food was shown to increase C max by 23% but had no effect on AUC'), condiciones: 'comprimidos con comida rica en grasa' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'pulmones', 'piel', 'tejidos'],
      llega: 'La azitromicina pasa de la sangre a los tejidos.',
      ocurre: 'Su unión a proteínas varía (del 51 % al 7 % según la concentración). Penetra mucho en los tejidos (piel, pulmón, amígdalas, cuello uterino y otros), donde se concentra; en el líquido cefalorraquídeo apenas llega. Allí donde hay bacterias sensibles, frena su síntesis de proteínas.',
      sigue: 'Los tejidos la liberan despacio de vuelta a la sangre.',
      simultaneo: 'La captación y liberación lenta desde los tejidos alarga mucho su permanencia en el cuerpo.',
      datos: [
        { t: 'Su unión a proteínas séricas es variable: del 51 % a 0,02 mcg/mL al 7 % a 2 mcg/mL.', ref: rengR(`${RENG_PK} › Distribution`, 'decreasing from 51% at 0.02 mcg/mL to 7% at 2 mcg/mL') },
        { t: 'Penetra en tejidos humanos como piel, pulmón, amígdala y cuello uterino; también se encontró en hueso, próstata, estómago, hígado y otros.', ref: rengR(`${RENG_PK} › Distribution`, 'Azithromycin has been shown to penetrate into human tissues, including skin, lung, tonsil, and cervix') },
        { t: 'Con las meninges no inflamadas, las concentraciones en el líquido cefalorraquídeo fueron muy bajas.', ref: rengR(`${RENG_PK} › Distribution`, 'very low concentrations were noted in cerebrospinal fluid') }
      ],
      accion: {
        diana: 'ARN ribosómico 23S de la subunidad 50S del ribosoma bacteriano',
        efecto: 'Inhibe la síntesis de proteínas de las bacterias sensibles.',
        lugar: ['sitio-infeccion', 'vias-respiratorias', 'piel', 'organos-reproductores'],
        datos: [
          { t: 'Se une al ARNr 23S de la subunidad ribosómica 50S de los microorganismos sensibles, inhibe la síntesis de proteínas e impide el ensamblaje de esa subunidad.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'Azithromycin acts by binding to the 23S rRNA of the 50S ribosomal subunit') },
          { t: 'La resistencia más frecuente es la modificación (sobre todo metilación) del ARNr 23S diana.', ref: rengR('12.4 Microbiology › Resistance', 'The most frequently encountered mechanism of resistance to azithromycin is modification of the 23S rRNA target') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La azitromicina circula y vuelve desde los tejidos.',
      ocurre: 'No se han hecho estudios de su metabolismo: la etiqueta no describe metabolitos. Se elimina sobre todo sin cambios.',
      sigue: 'Va a la bilis.',
      datos: [{ t: 'No se han realizado estudios in vitro ni in vivo de su metabolismo.', ref: rengR(`${RENG_PK} › Metabolism`, 'In vitro and in vivo studies to assess the metabolism of azithromycin have not been performed') }],
      sinDatos: ['Metabolismo y metabolitos (no estudiados)'],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['bilis', 'heces', 'orina'],
      llega: 'La azitromicina llega al hígado y a la bilis.',
      ocurre: 'La excreción biliar, sobre todo de fármaco sin cambios, es una vía principal. En una semana, solo un 6 % de la dosis aparece sin cambios en la orina. Su semivida terminal es de 68 horas, por la captación y liberación lenta desde los tejidos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La excreción biliar, sobre todo como fármaco sin cambios, es una vía de eliminación principal.', ref: rengR(`${RENG_PK} › Excretion`, 'Biliary excretion of azithromycin, predominantly as unchanged drug, is a major route of elimination') },
        { t: 'En una semana, alrededor del 6 % de la dosis aparece sin cambios en la orina.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 6% of the administered dose appears as unchanged drug in urine') },
        { t: 'Semivida terminal de 68 horas, atribuida a la captación y liberación desde los tejidos.', ref: rengR(`${RENG_PK} › Excretion`, 'The prolonged terminal half-life is thought to be due to extensive uptake and subsequent release of drug from tissues') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (500 mg)', valor: '2,2', unidad: 'h', poblacion: 'hombres sanos', condiciones: 'en ayunas', ref: rengR(RENG_PK, 'T max =2.2 (0.9) hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (cápsulas de 250 mg)', valor: '38', unidad: '%', presentacion: 'cápsulas de 250 mg', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of azithromycin 250 mg capsules is 38%') },
    { magnitud: 'union', nombre: 'Unión a proteínas séricas', valor: '7-51', unidad: '%', condiciones: 'según la concentración (2 a 0,02 mcg/mL)', ref: rengR(`${RENG_PK} › Distribution`, 'decreasing from 51% at 0.02 mcg/mL to 7% at 2 mcg/mL') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '68', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'terminal elimination half-life of 68 hr') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina en una semana', valor: '≈ 6', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 6% of the administered dose appears as unchanged drug in urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'db52b91e-79f7-4cc1-9564-f2eee8e31c45', 'ZITHROMAX (azithromycin) tablet, film coated; powder, for suspension', 'ZITHROMAX (Pfizer Laboratories Div Pfizer Inc)', '49', '2026-07-29', '2026-11-10'), rengPubchem(447043, 'Azithromycin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
