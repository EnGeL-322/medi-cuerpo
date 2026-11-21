import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-keppra'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'levetiracetam',
    nombre: 'Levetiracetam',
    clase: 'Antiepiléptico (derivado de pirrolidona; ligando de SV2A)',
    sinonimos: ['levetiracetam', 'Keppra'],
    formula: 'C8H14N2O2',
    masaMolar: 170.21,
    smiles: 'CC[C@@H](C(=O)N)N1CCCC1=O',
    inchikey: 'HPHUVLMMVZITSG-LURJTMIESA-N',
    cid: 5284583,
    estereo: { descripcion: 'Un estereocentro: es un solo enantiómero, (S).' },
    area: 'Neurología'
  },
  presentaciones: [
    {
      id: 'levetiracetam-keppra',
      producto: 'KEPPRA (levetiracetam) comprimidos recubiertos de 250, 500, 750 y 1000 mg',
      titular: 'UCB, Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250, 500, 750 y 1000 mg de levetiracetam por comprimido',
      excipientes: ['colloidal silicon dioxide', 'croscarmellose sodium', 'magnesium stearate', 'polyethylene glycol 3350', 'polyethylene glycol 6000', 'polyvinyl alcohol', 'talc', 'titanium dioxide', 'colorante según la concentración (p. ej. FD&C Blue #2 en 250 mg, iron oxide yellow en 500 mg)'],
      usos: { t: 'Crisis de inicio parcial desde el mes de vida y, como tratamiento añadido, crisis mioclónicas de la epilepsia mioclónica juvenil y crisis tónico-clónicas generalizadas primarias.', ref: rengR('1 INDICATIONS AND USAGE', 'KEPPRA is indicated for the treatment of partial-onset seizures in patients 1 month of age and older') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de levetiracetam (sin sal) con sílice, croscarmelosa y un colorante según la concentración.',
    usos: 'Varios tipos de crisis epilépticas, según su etiqueta.',
    actua: 'Su mecanismo preciso se desconoce; se une a la proteína SV2A de las vesículas sinápticas, lo que podría contribuir a su efecto.',
    recorrido: 'Se absorbe por completo (máximo en una hora), casi no se une a proteínas, se metaboliza poco por hidrólisis (no por el hígado) y un 66 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el levetiracetam, muy soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El levetiracetam es muy soluble en agua (104,0 g/100 mL).', ref: rengR('11 DESCRIPTION', 'It is very soluble in water (104.0 g/100 mL)') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el levetiracetam disuelto.',
      ocurre: 'Se absorbe rápido: máximo en el plasma hacia la hora en ayunas. La biodisponibilidad de los comprimidos es del 100 %. La comida no cambia la cantidad absorbida, pero baja el máximo un 20 % y lo retrasa hora y media.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápido, con el máximo en plasma hacia la hora en ayunas; la biodisponibilidad oral de los comprimidos es del 100 %.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'The oral bioavailability of levetiracetam tablets is 100%'), condiciones: 'en ayunas' },
        { t: 'La comida no afecta a la cantidad absorbida, pero reduce la Cmax un 20 % y retrasa el Tmax 1,5 horas.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'it decreases C max by 20% and delays T max by 1.5 hours'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo'],
      llega: 'El levetiracetam circula por la sangre.',
      ocurre: 'Él y su metabolito principal se unen a proteínas en menos del 10 %. En el encéfalo se une a la proteína SV2A de las vesículas sinápticas, implicada en la liberación de neurotransmisores; esa unión podría explicar su efecto antiepiléptico. El estado estacionario llega en 2 días.',
      sigue: 'Una parte se hidroliza; la mayoría va intacta a los riñones.',
      datos: [{ t: 'El levetiracetam y su metabolito principal se unen a proteínas plasmáticas en menos del 10 %.', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'Levetiracetam and its major metabolite are less than 10% bound to plasma proteins') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Proteína SV2A de las vesículas sinápticas (su contribución al efecto no se conoce del todo)',
        efecto: 'Antiepiléptico.',
        lugar: ['encefalo'],
        datos: [
          { t: 'El mecanismo preciso de su efecto antiepiléptico se desconoce.', ref: rengR('12.1 Mechanism of Action', 'The precise mechanism(s) by which levetiracetam exerts its antiepileptic effect is unknown') },
          { t: 'Su sitio de unión neuronal es la proteína de vesículas sinápticas SV2A, que regularía la exocitosis; esa interacción podría contribuir a su efecto.', ref: rengR('12.1 Mechanism of Action', 'this binding site is the synaptic vesicle protein SV2A') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte del levetiracetam se hidroliza.',
      ocurre: 'No se metaboliza mucho. Su vía principal es la hidrólisis enzimática del grupo acetamida, que da el ácido ucb L057 (24 % de la dosis), inactivo; no depende del citocromo P450 del hígado. Dos metabolitos menores suman un 3 %.',
      sigue: 'El levetiracetam y su metabolito van a los riñones.',
      datos: [
        { t: 'No se metaboliza extensamente; la vía principal es la hidrólisis del grupo acetamida, que da el ácido ucb L057 (24 % de la dosis) y no depende de los CYP450 hepáticos.', ref: rengR(`${RENG_PK} › Metabolism`, 'which produces the carboxylic acid metabolite, ucb L057 (24% of dose) and is not dependent on any liver cytochrome P450 isoenzymes') },
        { t: 'El metabolito principal es inactivo en modelos animales de convulsiones.', ref: rengR(`${RENG_PK} › Metabolism`, 'The major metabolite is inactive in animal seizure models') }
      ],
      sinDatos: ['Lugar de la hidrólisis'],
      metabolitos: [
        { nombre: 'Ácido carboxílico ucb L057', nombreFuente: 'ucb L057', actividad: 'inactivo', nota: '24 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism`, 'the carboxylic acid metabolite, ucb L057 (24% of dose)') },
        { nombre: 'Dos metabolitos menores (hidroxilado y de apertura del anillo)', actividad: 'desconocida', nota: '2 % y 1 % de la dosis.', ref: rengR(`${RENG_PK} › Metabolism`, 'Two minor metabolites were identified') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'El levetiracetam y su metabolito llegan a los riñones.',
      ocurre: 'Un 66 % de la dosis sale sin cambios por la orina, por filtración glomerular con reabsorción tubular parcial; el metabolito, por filtración y secreción tubular. Semivida: 7 ± 1 horas. Su eliminación depende de la función renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se elimina por excreción renal como fármaco sin cambios: un 66 % de la dosis.', ref: rengR(`${RENG_PK} › Elimination`, 'eliminated from the systemic circulation by renal excretion as unchanged drug which represents 66% of administered dose') },
        { t: 'Su semivida en adultos es de 7 ± 1 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'Levetiracetam plasma half-life in adults is 7 ± 1 hour') },
        { t: 'Su eliminación se correlaciona con el aclaramiento de creatinina y se reduce en la insuficiencia renal.', ref: rengR(`${RENG_PK} › Elimination`, 'Levetiracetam elimination is correlated to creatinine clearance'), poblacion: 'insuficiencia renal' }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '≈ 1', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'peak plasma concentrations occurring in about an hour') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral', valor: '100', unidad: '%', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'bioavailability of levetiracetam tablets is 100%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '< 10', unidad: '%', ref: rengR(`${RENG_PK} › Absorption and Distribution`, 'less than 10% bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática (adultos)', valor: '7 ± 1', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'is 7 ± 1 hour') },
    { magnitud: 'orina', nombre: 'Excretado sin cambios en la orina', valor: '66', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'which represents 66% of administered dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '3ca9df05-a506-4ec8-a4fe-320f1219ab21', 'KEPPRA (levetiracetam) tablet, film coated; solution', 'KEPPRA (UCB, Inc.)', '36', '2026-01-29', '2026-11-10'), rengPubchem(5284583, 'Levetiracetam', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
