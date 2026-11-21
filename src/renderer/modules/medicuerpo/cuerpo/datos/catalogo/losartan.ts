import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-cozaar'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'losartan',
    nombre: 'Losartán',
    clase: 'Antagonista del receptor AT1 de la angiotensina II (ARA-II)',
    sinonimos: ['losartan', 'Cozaar'],
    formula: 'C22H23ClN6O',
    masaMolar: 422.9,
    smiles: 'CCCCC1=NC(=C(N1CC2=CC=C(C=C2)C3=CC=CC=C3C4=NNN=N4)CO)Cl',
    inchikey: 'PSIFNNKUMBGKDQ-UHFFFAOYSA-N',
    cid: 3961,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Corazón y circulación'
  },
  presentaciones: [
    {
      id: 'losartan-cozaar',
      producto: 'COZAAR (losartan potassium) comprimidos recubiertos de 25, 50 y 100 mg',
      titular: 'Organon LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25, 50 y 100 mg de losartán potásico por comprimido',
      sal: { nombre: 'Losartán potásico (sal monopotásica); el comprimido de 50 mg aporta 4,24 mg de potasio', ref: rengR('11 DESCRIPTION', 'imidazole-5-methanol monopotassium salt') },
      excipientes: ['microcrystalline cellulose', 'lactose hydrous', 'pregelatinized starch', 'magnesium stearate', 'hydroxypropyl cellulose', 'hypromellose', 'titanium dioxide', 'carnauba wax (puede contener)'],
      usos: { t: 'Hipertensión (adultos y niños mayores de 6 años), reducción del riesgo de ictus en hipertensión con hipertrofia ventricular izquierda y nefropatía diabética en diabetes tipo 2 con hipertensión.', ref: rengR('1 INDICATIONS AND USAGE', 'COZAAR is an angiotensin II receptor blocker (ARB) indicated for') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con losartán potásico (la sal del activo), lactosa, celulosa y almidón.',
    usos: 'Hipertensión, prevención de ictus con hipertrofia ventricular y nefropatía diabética, según su etiqueta.',
    actua: 'Bloquea el receptor AT1 de la angiotensina II: los vasos se relajan y baja la secreción de aldosterona. Un metabolito activo hace la mayor parte del efecto.',
    recorrido: 'Se absorbe bien pero solo un 33 % pasa el primer paso; el CYP2C9 y el CYP3A4 lo convierten en un metabolito más potente; se elimina por la bilis (heces) y la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el losartán potásico, muy soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El losartán potásico es muy soluble en agua.', ref: rengR('11 DESCRIPTION', 'It is freely soluble in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta', 'higado'],
      llega: 'Llega el losartán disuelto.',
      ocurre: 'Se absorbe bien, pero sufre un primer paso importante: la biodisponibilidad sistémica es de un 33 %. El losartán alcanza su máximo en 1 hora y su metabolito activo en 3-4 horas. La comida enlentece la absorción y baja el máximo, con efectos menores en la cantidad total.',
      sigue: 'El losartán y su metabolito llegan a la circulación general.',
      simultaneo: 'Ya durante el primer paso se forma el metabolito activo.',
      datos: [
        { t: 'Se absorbe bien y sufre un metabolismo de primer paso importante; la biodisponibilidad sistémica es de un 33 %.', ref: rengR(`${RENG_PK} › Absorption`, 'The systemic bioavailability of losartan is approximately 33%') },
        { t: 'El máximo del losartán llega a la hora y el del metabolito activo a las 3-4 horas; el AUC del metabolito es unas 4 veces mayor.', ref: rengR(`${RENG_PK} › Absorption`, 'Mean peak concentrations of losartan and its active metabolite are reached in 1 hour and in 3-4 hours, respectively') },
        { t: 'Una comida enlentece la absorción y baja la Cmax, con efectos menores sobre el AUC (unos 10 % menos).', ref: rengR(`${RENG_PK} › Absorption`, 'A meal slows absorption of losartan and decreases its C max'), condiciones: 'con comida' },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'vasos'],
      llega: 'El losartán y su metabolito activo circulan por la sangre.',
      ocurre: 'Viajan muy unidos a proteínas (sobre todo albúmina; fracción libre del 1,3 % y 0,2 %). Bloquean la unión de la angiotensina II al receptor AT1 del músculo liso vascular y de la glándula suprarrenal: los vasos se relajan y baja la aldosterona. En ratas apenas cruza la barrera hematoencefálica.',
      sigue: 'Se eliminan por la bilis y la orina.',
      datos: [
        { t: 'Volumen de distribución de unos 34 L (losartán) y 12 L (metabolito activo).', ref: rengR(`${RENG_PK} › Distribution`, 'The volume of distribution of losartan and the active metabolite is about 34 liters and 12 liters') },
        { t: 'Ambos se unen mucho a proteínas plasmáticas, sobre todo a la albúmina; fracciones libres del 1,3 % y el 0,2 %.', ref: rengR(`${RENG_PK} › Distribution`, 'with plasma free fractions of 1.3% and 0.2%, respectively') }
      ],
      accion: {
        diana: 'Receptor AT1 de la angiotensina II',
        efecto: 'Bloquea la vasoconstricción y la secreción de aldosterona que provoca la angiotensina II: baja la presión arterial.',
        lugar: ['vasos'],
        datos: [
          { t: 'Losartán y su metabolito activo bloquean los efectos vasoconstrictor y secretor de aldosterona de la angiotensina II impidiendo su unión al receptor AT1 (músculo liso vascular, glándula suprarrenal).', ref: rengR('12.1 Mechanism of Action', 'by selectively blocking the binding of angiotensin II to the AT 1 receptor') },
          { t: 'El metabolito activo es de 10 a 40 veces más potente, por peso, que el losartán.', ref: rengR('12.1 Mechanism of Action', 'The active metabolite is 10 to 40 times more potent by weight than losartan') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El losartán llega a las enzimas del citocromo P450.',
      ocurre: 'Sufre un primer paso importante por el CYP450: un 14 % de la dosis se convierte en un ácido carboxílico activo, responsable de la mayor parte del efecto; se forman además varios metabolitos inactivos. Intervienen CYP2C9 y CYP3A4.',
      sigue: 'El losartán y sus metabolitos van a la bilis y a la orina.',
      datos: [
        { t: 'Se convierte en parte en un metabolito ácido carboxílico activo, responsable de la mayor parte del antagonismo; un 14 % de la dosis oral pasa a ese metabolito.', ref: rengR(`${RENG_PK} › Metabolism`, 'About 14% of an orally-administered dose of losartan is converted to the active metabolite') },
        { t: 'Los CYP2C9 y 3A4 participan en su biotransformación (estudios in vitro).', ref: rengR(`${RENG_PK} › Metabolism`, 'cytochrome P450 2C9 and 3A4 are involved in the biotransformation of losartan') },
        RENG_GENERAL.higado
      ],
      sinDatos: ['Órgano del metabolismo (la etiqueta nombra las enzimas, no el órgano)'],
      metabolitos: [
        { nombre: 'Metabolito ácido carboxílico del losartán', nombreFuente: 'active carboxylic acid metabolite', actividad: 'activo', nota: 'De 10 a 40 veces más potente; semivida de 6-9 h.', ref: rengR(`${RENG_PK} › Metabolism`, 'It is converted, in part, to an active carboxylic acid metabolite') },
        { nombre: 'Varios metabolitos inactivos', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'several inactive metabolites are formed') }
      ]
    },
    excrecion: {
      organos: ['bilis', 'heces', 'rinones', 'orina'],
      llega: 'Llegan a la bilis y a los riñones el losartán y sus metabolitos.',
      ocurre: 'Con losartán marcado, un 35 % se recupera en la orina y un 60 % en las heces (excreción biliar). Solo un 4 % sale sin cambios por la orina y un 6 % como metabolito activo. Semivida: 2 horas el losartán y 6-9 horas el metabolito.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La excreción biliar contribuye a eliminar el losartán y sus metabolitos; con losartán marcado por vía oral, un 35 % se recupera en la orina y un 60 % en las heces.', ref: rengR(`${RENG_PK} › Elimination`, 'about 35% of radioactivity is recovered in the urine and about 60% in the feces') },
        { t: 'Un 4 % de la dosis se excreta sin cambios en la orina y un 6 % como metabolito activo.', ref: rengR(`${RENG_PK} › Elimination`, 'about 4% of the dose is excreted unchanged in the urine and about 6% is excreted in urine as active metabolite') },
        { t: 'Semivida terminal de unas 2 horas (losartán) y 6-9 horas (metabolito).', ref: rengR(`${RENG_PK} › Elimination`, 'The terminal half-life of losartan is about 2 hours and of the metabolite is about 6-9 hours') }
      ]
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad sistémica', valor: '≈ 33', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 33%') },
    { magnitud: 'tmax', nombre: 'Tmax del losartán / del metabolito activo', valor: '1 / 3-4', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'are reached in 1 hour and in 3-4 hours') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (losartán)', valor: '≈ 34', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'about 34 liters and 12 liters') },
    { magnitud: 'union', nombre: 'Fracción libre en plasma (losartán / metabolito)', valor: '1,3 / 0,2', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'plasma free fractions of 1.3% and 0.2%') },
    { magnitud: 'semivida', nombre: 'Semivida terminal (losartán / metabolito)', valor: '≈ 2 / 6-9', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'about 2 hours and of the metabolite is about 6-9 hours') },
    { magnitud: 'heces', nombre: 'Radiactividad en heces (dosis oral marcada)', valor: '≈ 60', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'about 60% in the feces') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '9949448f-c3b9-44ee-94ed-c1aca8c90f39', 'COZAAR (losartan potassium) tablet, film coated', 'COZAAR (Organon LLC)', '9', '2026-01-21', '2026-11-10'), rengPubchem(3961, 'Losartan', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
