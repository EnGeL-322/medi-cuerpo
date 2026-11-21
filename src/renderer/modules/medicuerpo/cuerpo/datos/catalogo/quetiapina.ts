import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-seroquel'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'quetiapina',
    nombre: 'Quetiapina',
    clase: 'Antipsicótico atípico (dibenzotiazepina)',
    sinonimos: ['quetiapine', 'Seroquel'],
    formula: 'C21H25N3O2S',
    masaMolar: 383.5,
    smiles: 'C1CN(CCN1CCOCCO)C2=NC3=CC=CC=C3SC4=CC=CC=C42',
    inchikey: 'URKOMYMAXPYINW-UHFFFAOYSA-N',
    cid: 5002,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Salud mental'
  },
  presentaciones: [
    {
      id: 'quetiapina-seroquel',
      producto: 'SEROQUEL (quetiapine) comprimidos recubiertos de 25 a 400 mg',
      titular: 'H2-Pharma, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película (liberación inmediata)',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'inmediata',
      concentraciones: '25, 50, 100, 200, 300 y 400 mg de quetiapina (base) por comprimido',
      sal: { nombre: 'Fumarato de quetiapina (sal 2:1); 28,78 mg equivalen a 25 mg de base', ref: rengR('11 DESCRIPTION', 'It is present in tablets as the fumarate salt') },
      excipientes: ['povidone', 'dibasic dicalcium phosphate dihydrate', 'microcrystalline cellulose', 'sodium starch glycolate', 'lactose monohydrate', 'magnesium stearate', 'hypromellose', 'polyethylene glycol', 'titanium dioxide', 'red y/o yellow ferric oxide (según la concentración)'],
      usos: { t: 'Esquizofrenia y trastorno bipolar (episodios maníacos del tipo I y episodios depresivos).', ref: rengR('1 INDICATIONS AND USAGE', 'SEROQUEL is an atypical antipsychotic indicated for the treatment of') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con fumarato de quetiapina (la sal del activo), lactosa, celulosa y povidona.',
    usos: 'Esquizofrenia y trastorno bipolar, según su etiqueta.',
    actua: 'Su mecanismo no está claro: podría deberse al bloqueo de receptores de dopamina D2 y de serotonina 5-HT2 en el encéfalo.',
    recorrido: 'Se absorbe rápido (máximo a la hora y media), se reparte ampliamente, el hígado la metaboliza casi por completo (CYP3A4) y sus metabolitos salen por la orina (73 %) y las heces (20 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el fumarato de quetiapina, moderadamente soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El fumarato de quetiapina es moderadamente soluble en agua.', ref: rengR('11 DESCRIPTION', 'Quetiapine fumarate is a white to off-white crystalline powder which is moderately soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la quetiapina disuelta.',
      ocurre: 'Se absorbe rápido: máximo en el plasma a la hora y media. El comprimido es tan biodisponible como una solución. Con comida, la Cmax y el AUC suben un poco (25 % y 15 %).',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápidamente y alcanza el máximo en plasma a las 1,5 horas; el comprimido es 100 % biodisponible respecto a una solución.', ref: rengR(`${RENG_PK} › Absorption`, 'reaching peak plasma concentrations in 1.5 hours') },
        { t: 'Con comida, la Cmax y el AUC aumentan un 25 % y un 15 %.', ref: rengR(`${RENG_PK} › Absorption`, 'with C max and AUC values increased by 25% and 15%, respectively'), condiciones: 'con comida' },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Biodisponibilidad absoluta']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'encefalo'],
      llega: 'La quetiapina circula por la sangre.',
      ocurre: 'Se reparte ampliamente por el cuerpo (10 ± 4 L/kg) y un 83 % va unida a proteínas. Su efecto en el encéfalo podría deberse al bloqueo de los receptores D2 de dopamina y 5-HT2 de serotonina; su metabolito norquetiapina actúa más sobre 5-HT2A.',
      sigue: 'El hígado la metaboliza.',
      datos: [{ t: 'Se distribuye ampliamente, con un volumen aparente de 10 ± 4 L/kg; un 83 % se une a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Distribution`, 'Quetiapine is widely distributed throughout the body with an apparent volume of distribution of 10±4 L/kg') }],
      accion: {
        diana: 'Receptores de dopamina D2 y de serotonina 5-HT2 (antagonismo; mecanismo no del todo claro)',
        efecto: 'Antipsicótico y estabilizador del ánimo.',
        lugar: ['encefalo'],
        datos: [
          { t: 'Su mecanismo no está claro, pero su eficacia podría deberse a una combinación de antagonismo D2 y 5-HT2.', ref: rengR('12.1 Mechanism of Action', 'could be mediated through a combination of dopamine type 2 (D 2 ) and serotonin type 2 (5HT 2 ) antagonism') },
          { t: 'Su metabolito activo, la norquetiapina, tiene una actividad similar sobre D2 y mayor sobre 5-HT2A.', ref: rengR('12.1 Mechanism of Action', 'The active metabolite, N-desalkyl quetiapine (norquetiapine), has similar activity at D 2') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La quetiapina llega al hígado.',
      ocurre: 'Se metaboliza ampliamente en el hígado: sobre todo por sulfoxidación (a un sulfóxido inactivo, por CYP3A4) y por oxidación a un ácido inactivo. El CYP3A4 también interviene en el metabolito activo, la norquetiapina. Menos del 1 % se excreta sin cambios.',
      sigue: 'Los metabolitos van a los riñones y al intestino.',
      datos: [
        { t: 'La quetiapina se metaboliza ampliamente en el hígado; las vías principales dan un sulfóxido y un ácido, ambos inactivos.', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'Quetiapine is extensively metabolized by the liver') },
        { t: 'El CYP3A4 interviene en la formación del sulfóxido y en el metabolismo de la norquetiapina (microsomas hepáticos).', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'the cytochrome P450 3A4 isoenzyme is involved in the metabolism of quetiapine') },
        { t: 'Su eliminación es sobre todo por metabolismo hepático, con una semivida terminal media de unas 6 horas.', ref: rengR(RENG_PK, 'Elimination of quetiapine is mainly via hepatic metabolism with a mean terminal half-life of about 6 hours') }
      ],
      metabolitos: [
        { nombre: 'Sulfóxido de quetiapina', nombreFuente: 'sulfoxide metabolite', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'sulfoxidation to the sulfoxide metabolite') },
        { nombre: 'Ácido derivado (metabolito ácido)', nombreFuente: 'parent acid metabolite', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'oxidation to the parent acid metabolite; both metabolites are pharmacologically inactive') },
        { nombre: 'Norquetiapina (N-desalquil quetiapina)', nombreFuente: 'N-desalkyl quetiapine (norquetiapine)', actividad: 'activo', ref: rengR('12.1 Mechanism of Action', 'The active metabolite, N-desalkyl quetiapine (norquetiapine)') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Con quetiapina marcada, un 73 % de la dosis se recupera en la orina y un 20 % en las heces, casi todo como metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Menos del 1 % se excretó sin cambios; un 73 % de la dosis se recuperó en la orina y un 20 % en las heces.', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'Approximately 73% and 20% of the dose was recovered in the urine and feces, respectively') }],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1,5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'reaching peak plasma concentrations in 1.5 hours') },
    { magnitud: 'comida', nombre: 'Con comida: Cmax y AUC', valor: '+25 y +15', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'increased by 25% and 15%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '10 ± 4', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'apparent volume of distribution of 10±4 L/kg') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '83', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'It is 83% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida terminal media', valor: '≈ 6', unidad: 'h', ref: rengR(RENG_PK, 'mean terminal half-life of about 6 hours') },
    { magnitud: 'orina', nombre: 'Dosis marcada en la orina', valor: '≈ 73', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism and Elimination`, 'Approximately 73% and 20% of the dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '8ae62aaf-f8c5-417f-baac-0098369ca322', 'SEROQUEL (quetiapine) tablet, film coated', 'SEROQUEL (H2-Pharma, LLC)', '53', '2026-04-13', '2026-11-10'), rengPubchem(5002, 'Quetiapine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
