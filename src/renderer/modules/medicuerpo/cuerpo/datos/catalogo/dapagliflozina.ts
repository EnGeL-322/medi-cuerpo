import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-farxiga'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'dapagliflozina',
    nombre: 'Dapagliflozina',
    clase: 'Antidiabético: inhibidor del cotransportador SGLT2',
    sinonimos: ['dapagliflozin', 'Farxiga'],
    formula: 'C21H25ClO6',
    masaMolar: 408.9,
    smiles: 'CCOC1=CC=C(C=C1)CC2=C(C=CC(=C2)[C@H]3[C@@H]([C@H]([C@@H]([C@H](O3)CO)O)O)O)Cl',
    inchikey: 'JVHXJTBJCFBINQ-ADAARDCZSA-N',
    cid: 9887712,
    estereo: { descripcion: 'Cinco estereocentros en el anillo de glucitol: es un solo estereoisómero.' },
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'dapagliflozina-farxiga',
      producto: 'FARXIGA (dapagliflozin) comprimidos recubiertos de 5 y 10 mg',
      titular: 'AstraZeneca Pharmaceuticals LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: 'Equivalente a 5 o 10 mg de dapagliflozina (como dapagliflozina propanodiol) por comprimido',
      sal: { nombre: 'Dapagliflozina propanodiol monohidrato (cocristal con (S)-1,2-propanodiol, no una sal)', ref: rengR('11 DESCRIPTION', 'containing the equivalent of 5 mg dapagliflozin as dapagliflozin propanediol') },
      excipientes: ['anhydrous lactose', 'crospovidone', 'magnesium stearate', 'microcrystalline cellulose', 'silicon dioxide', 'recubrimiento: polyethylene glycol, polyvinyl alcohol, talc, titanium dioxide, yellow iron oxide'],
      usos: { t: 'Reducir el riesgo de deterioro renal, muerte cardiovascular y hospitalización por insuficiencia cardiaca en la enfermedad renal crónica y en la insuficiencia cardiaca, y mejorar el control de la glucosa en la diabetes tipo 2, entre otros.', ref: rengR('1 INDICATIONS AND USAGE', 'To reduce the risk of sustained eGFR decline, end-stage kidney disease, cardiovascular (CV) death, and hospitalization for heart failure in adults with chronic kidney disease') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto amarillo con dapagliflozina en forma de propanodiol, lactosa, celulosa y crospovidona.',
    usos: 'Enfermedad renal crónica, insuficiencia cardiaca y diabetes tipo 2, según su etiqueta.',
    actua: 'Inhibe el SGLT2 del túbulo proximal del riñón, que recupera la glucosa filtrada: se elimina más glucosa (y sodio) por la orina.',
    recorrido: 'Se absorbe bien (78 %), va un 91 % unida a proteínas, la UGT1A9 la convierte en un glucurónido inactivo y sale sobre todo por la orina (75 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera la dapagliflozina.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada comprimido recubierto contiene el equivalente a 5 o 10 mg de dapagliflozina, como dapagliflozina propanodiol.', ref: rengR('11 DESCRIPTION', 'FARXIGA is available as a film-coated tablet for oral administration containing the equivalent of 5 mg dapagliflozin') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la dapagliflozina liberada.',
      ocurre: 'En ayunas, el máximo llega en unas 2 horas. Su biodisponibilidad oral es del 78 %. Una comida grasa baja el máximo a la mitad y lo retrasa una hora, pero no cambia la cantidad absorbida.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'En ayunas, la Cmax suele alcanzarse en 2 horas; la biodisponibilidad oral absoluta de 10 mg es del 78 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute oral bioavailability of dapagliflozin following the administration of a 10 mg dose is 78%') },
        { t: 'Con una comida grasa, la Cmax baja hasta un 50 % y el Tmax se alarga una hora, sin cambio del AUC.', ref: rengR(`${RENG_PK} › Absorption`, 'Administration of dapagliflozin with a high-fat meal decreases its C max by up to 50% and prolongs T max by approximately 1 hour but does not alter AUC'), condiciones: 'con comida rica en grasa' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'rinones'],
      llega: 'La dapagliflozina circula por la sangre.',
      ocurre: 'Un 91 % va unida a proteínas. En el túbulo proximal del riñón inhibe el SGLT2, que recupera la mayor parte de la glucosa filtrada: la glucosa (y algo de sodio) se queda en la orina.',
      sigue: 'Se conjuga con ácido glucurónico.',
      datos: [{ t: 'Un 91 % se une a proteínas; la unión no cambia en la insuficiencia renal o hepática.', ref: rengR(`${RENG_PK} › Distribution`, 'Dapagliflozin is approximately 91% protein bound') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Cotransportador sodio-glucosa 2 (SGLT2) del túbulo proximal renal',
        efecto: 'Aumenta la excreción de glucosa por la orina y reduce la reabsorción de sodio.',
        lugar: ['rinones'],
        datos: [
          { t: 'El SGLT2 del túbulo proximal recupera la mayor parte de la glucosa filtrada; al inhibirlo, la dapagliflozina favorece la excreción urinaria de glucosa.', ref: rengR('12.1 Mechanism of Action', 'By inhibiting SGLT2, dapagliflozin reduces reabsorption of filtered glucose and thereby promotes urinary glucose excretion') },
          { t: 'También reduce la reabsorción de sodio, lo que podría bajar la precarga y la poscarga del corazón y la presión dentro del glomérulo.', ref: rengR('12.1 Mechanism of Action', 'Dapagliflozin also reduces sodium reabsorption and increases the delivery of sodium to the distal tubule') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La dapagliflozina llega a la enzima UGT1A9.',
      ocurre: 'Se metaboliza ampliamente, sobre todo por la UGT1A9, a dapagliflozina 3-O-glucurónido, inactivo y predominante en el plasma. El citocromo P450 es una vía menor.',
      sigue: 'El glucurónido va a los riñones.',
      datos: [
        { t: 'Su metabolismo depende sobre todo de la UGT1A9; el metabolismo por CYP es una vía menor.', ref: rengR(`${RENG_PK} › Metabolism`, 'The metabolism of dapagliflozin is primarily mediated by UGT1A9; CYP-mediated metabolism is a minor clearance pathway in humans') },
        { t: 'El metabolito principal, inactivo, es la dapagliflozina 3-O-glucurónido: un 61 % de una dosis marcada de 50 mg.', ref: rengR(`${RENG_PK} › Metabolism`, 'Dapagliflozin 3-O-glucuronide accounted for 61% of a 50 mg [ 14 C]-dapagliflozin dose') }
      ],
      sinDatos: ['Órgano donde ocurre la glucuronidación'],
      metabolitos: [{ nombre: 'Dapagliflozina 3-O-glucurónido', nombreFuente: 'dapagliflozin 3-O-glucuronide', actividad: 'inactivo', nota: '61 % de la dosis; componente principal en plasma.', ref: rengR(`${RENG_PK} › Metabolism`, 'primarily to yield dapagliflozin 3-O-glucuronide, which is an inactive metabolite') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'La dapagliflozina y su glucurónido llegan a los riñones.',
      ocurre: 'Se eliminan sobre todo por vía renal: con una dosis marcada, un 75 % salió por la orina (menos del 2 % como dapagliflozina) y un 21 % por las heces (un 15 % sin cambios). Su semivida es de unas 13 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras 50 mg marcados, un 75 % de la radiactividad se excretó en la orina y un 21 % en las heces; en la orina, menos del 2 % era dapagliflozina sin cambios y en las heces un 15 %.', ref: rengR(`${RENG_PK} › Elimination`, 'Following a single 50 mg dose of [ 14 C]-dapagliflozin, 75% and 21% total radioactivity is excreted in urine and feces, respectively') },
        { t: 'La semivida terminal media tras 10 mg es de unas 12,9 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean plasma terminal half-life (t ½ ) for dapagliflozin is approximately 12.9 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '≈ 2', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'is usually attained within 2 hours under fasting state') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral absoluta (10 mg)', valor: '78', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'following the administration of a 10 mg dose is 78%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 91', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'approximately 91% protein bound') },
    { magnitud: 'semivida', nombre: 'Semivida terminal (10 mg)', valor: '≈ 12,9', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'is approximately 12.9 hours') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina', valor: '75', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, '75% and 21% total radioactivity is excreted in urine and feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '72ad22ae-efe6-4cd6-a302-98aaee423d69', 'FARXIGA (dapagliflozin) tablet, film coated', 'FARXIGA (AstraZeneca Pharmaceuticals LP)', '49', '2026-09-11', '2026-11-10'), rengPubchem(9887712, 'Dapagliflozin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
