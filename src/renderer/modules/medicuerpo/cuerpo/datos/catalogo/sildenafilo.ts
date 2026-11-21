import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-viagra'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'sildenafilo',
    nombre: 'Sildenafilo',
    clase: 'Inhibidor de la fosfodiesterasa 5 (PDE5)',
    sinonimos: ['sildenafil', 'Viagra'],
    formula: 'C22H30N6O4S',
    masaMolar: 474.6,
    smiles: 'CCCC1=NN(C2=C1N=C(NC2=O)C3=C(C=CC(=C3)S(=O)(=O)N4CCN(CC4)C)OCC)C',
    inchikey: 'BNRNXUUZRGQAQC-UHFFFAOYSA-N',
    cid: 135398744,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'sildenafilo-viagra',
      producto: 'VIAGRA (sildenafil) comprimidos recubiertos de 25, 50 y 100 mg',
      titular: 'Viatris Specialty LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: 'Equivalente a 25, 50 y 100 mg de sildenafilo por comprimido',
      sal: { nombre: 'Citrato de sildenafilo', ref: rengR('11 DESCRIPTION', 'is the citrate salt of sildenafil') },
      excipientes: ['anhydrous dibasic calcium phosphate', 'croscarmellose sodium', 'FD & C Blue #2 aluminum lake', 'hypromellose', 'lactose', 'magnesium stearate', 'microcrystalline cellulose', 'titanium dioxide', 'triacetin'],
      usos: { t: 'Disfunción eréctil.', ref: rengR('1 INDICATIONS AND USAGE', 'VIAGRA is indicated for the treatment of erectile dysfunction') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto azul con citrato de sildenafilo (la sal del activo), fosfato cálcico, celulosa y lactosa.',
    usos: 'Disfunción eréctil, según su etiqueta.',
    actua: 'Inhibe la enzima PDE5 del cuerpo cavernoso: refuerza el efecto del óxido nítrico liberado durante la estimulación sexual. Sin estimulación no tiene efecto.',
    recorrido: 'Se absorbe rápido (máximo hacia la hora) con una biodisponibilidad del 41 %, el hígado lo metaboliza (CYP3A4) a un metabolito activo y sale sobre todo por las heces (80 %).'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el citrato de sildenafilo, con una solubilidad en agua de 3,5 mg/mL.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El citrato de sildenafilo es un polvo cristalino con una solubilidad en agua de 3,5 mg/mL.', ref: rengR('11 DESCRIPTION', 'with a solubility of 3.5 mg/mL in water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el sildenafilo disuelto.',
      ocurre: 'Se absorbe rápido: en ayunas, el máximo llega entre 30 y 120 minutos (mediana, 60). Parte se pierde antes de llegar a la circulación: la biodisponibilidad absoluta es del 41 %. Con una comida rica en grasa, el máximo se retrasa una hora y es un 29 % menor.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápidamente, con una biodisponibilidad absoluta media del 41 % (intervalo 25-63 %).', ref: rengR(RENG_PK, 'with a mean absolute bioavailability of 41% (range 25-63%)') },
        { t: 'En ayunas, el máximo en plasma se alcanza en 30-120 minutos (mediana 60).', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'Maximum observed plasma concentrations are reached within 30 to 120 minutes (median 60 minutes) of oral dosing in the fasted state'), condiciones: 'en ayunas' },
        { t: 'Con una comida rica en grasa, el Tmax se retrasa 60 minutos y la Cmax baja un 29 %.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'with a mean delay in T max of 60 minutes and a mean reduction in C max of 29%'), condiciones: 'con comida rica en grasa' },
        RENG_GENERAL.intestino
      ],
      sinDatos: ['Fracción perdida en la pared intestinal frente al hígado']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'organos-reproductores'],
      llega: 'El sildenafilo circula por la sangre.',
      ocurre: 'Un 96 % va unido a proteínas y pasa a los tejidos (volumen de 105 L). En el cuerpo cavernoso inhibe la PDE5, la enzima que degrada el GMPc: cuando la estimulación sexual libera óxido nítrico, el GMPc se acumula, el músculo liso se relaja y entra la sangre.',
      sigue: 'El hígado lo metaboliza.',
      datos: [
        { t: 'Volumen de distribución en estado estacionario de 105 L, lo que indica distribución en los tejidos.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'The mean steady state volume of distribution (Vss) for sildenafil is 105 L, indicating distribution into the tissues') },
        { t: 'El sildenafilo y su metabolito N-desmetilado se unen a proteínas plasmáticas en un 96 %.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'are both approximately 96% bound to plasma proteins') }
      ],
      accion: {
        diana: 'Fosfodiesterasa 5 (PDE5) del cuerpo cavernoso',
        efecto: 'Aumenta el GMPc, relaja el músculo liso del cuerpo cavernoso y permite la entrada de sangre; no actúa sin estimulación sexual.',
        lugar: ['organos-reproductores'],
        datos: [
          { t: 'Potencia el efecto del óxido nítrico al inhibir la PDE5, responsable de degradar el GMPc en el cuerpo cavernoso.', ref: rengR('12.1 Mechanism of Action', 'Sildenafil enhances the effect of NO by inhibiting phosphodiesterase type 5 (PDE5)') },
          { t: 'A las dosis recomendadas no tiene efecto sin estimulación sexual.', ref: rengR('12.1 Mechanism of Action', 'Sildenafil at recommended doses has no effect in the absence of sexual stimulation') },
          { t: 'Es solo unas 10 veces más potente sobre la PDE5 que sobre la PDE6 de la retina; esa menor selectividad explicaría las alteraciones de la visión de los colores.', ref: rengR('12.1 Mechanism of Action', 'This lower selectivity is thought to be the basis for abnormalities related to color vision') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El sildenafilo llega a las enzimas microsomales del hígado.',
      ocurre: 'Lo eliminan sobre todo el CYP3A4 (vía principal) y el CYP2C9 (vía menor). El metabolito principal, N-desmetil-sildenafilo, inhibe la PDE5 con la mitad de potencia y alcanza un 40 % de la concentración del original: aporta un 20 % del efecto. Ambos tienen una semivida de unas 4 horas.',
      sigue: 'Los metabolitos se excretan sobre todo por el intestino.',
      datos: [
        { t: 'Se aclara sobre todo por las isoenzimas microsomales hepáticas CYP3A4 (vía principal) y CYP2C9 (vía menor).', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'Sildenafil is cleared predominantly by the CYP3A4 (major route) and CYP2C9 (minor route) hepatic microsomal isoenzymes') },
        { t: 'El sildenafilo y su metabolito activo tienen semividas terminales de unas 4 horas.', ref: rengR(RENG_PK, 'Both sildenafil and the metabolite have terminal half lives of about 4 hours') },
        { t: 'En voluntarios mayores sanos (65 años o más) el aclaramiento es menor y el AUC un 84 % mayor.', ref: rengR(`${RENG_PK} › Geriatrics`, 'Healthy elderly volunteers (65 years or over) had a reduced clearance of sildenafil'), poblacion: 'mayores de 65 años sanos' }
      ],
      metabolitos: [{ nombre: 'N-desmetil-sildenafilo', nombreFuente: 'N-desmethyl metabolite', actividad: 'activo', nota: 'Potencia in vitro sobre la PDE5 de un 50 % de la del original; aporta un 20 % del efecto.', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'the metabolite accounts for about 20% of sildenafil') }]
    },
    excrecion: {
      organos: ['heces', 'orina'],
      llega: 'Los metabolitos llegan al intestino y a los riñones.',
      ocurre: 'Se excreta como metabolitos, sobre todo en las heces (un 80 % de la dosis) y en menor medida en la orina (un 13 %).',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Se excreta como metabolitos sobre todo en las heces (un 80 % de la dosis oral) y menos en la orina (un 13 %).', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'sildenafil is excreted as metabolites predominantly in the feces (approximately 80% of administered oral dose)') }],
      sinDatos: ['Vía por la que los metabolitos llegan a las heces (la etiqueta no menciona la bilis)'],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '41 (25-63)', unidad: '%', ref: rengR(RENG_PK, 'mean absolute bioavailability of 41% (range 25-63%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '30-120 (mediana 60)', unidad: 'min', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'within 30 to 120 minutes (median 60 minutes)') },
    { magnitud: 'vd', nombre: 'Volumen de distribución en estado estacionario', valor: '105', unidad: 'L', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'for sildenafil is 105 L') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '≈ 96', unidad: '%', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'approximately 96% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '≈ 4', unidad: 'h', ref: rengR(RENG_PK, 'terminal half lives of about 4 hours') },
    { magnitud: 'heces', nombre: 'Excretado en las heces (metabolitos)', valor: '≈ 80', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Metabolism and Excretion`, 'approximately 80% of administered oral dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'd905dc8d-917f-4ea3-a4ee-a1ecf6967d4e', 'VIAGRA (sildenafil citrate) tablet, film coated', 'VIAGRA (Viatris Specialty LLC)', '6', '2026-02-13', '2026-11-10'), rengPubchem(135398744, 'Sildenafil', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
