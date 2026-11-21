import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-coreg'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'carvedilol',
    nombre: 'Carvedilol',
    clase: 'Bloqueante β no selectivo con acción bloqueante α1',
    sinonimos: ['carvedilol', 'Coreg'],
    formula: 'C24H26N2O4',
    masaMolar: 406.5,
    smiles: 'COC1=CC=CC=C1OCCNCC(COC2=CC=CC3=C2C4=CC=CC=C4N3)O',
    inchikey: 'OGHNVEJMJSYVRP-UHFFFAOYSA-N',
    cid: 2585,
    estereo: { descripcion: 'Un estereocentro; es una mezcla racémica: el bloqueo β está en el enantiómero S(−) y el bloqueo α1 en ambos por igual.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'carvedilol-coreg',
      producto: 'COREG (carvedilol) comprimidos recubiertos de 3,125, 6,25, 12,5 y 25 mg',
      titular: 'Waylis Therapeutics LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '3,125, 6,25, 12,5 y 25 mg de carvedilol por comprimido',
      excipientes: ['colloidal silicon dioxide', 'crospovidone', 'hypromellose', 'lactose', 'magnesium stearate', 'polyethylene glycol', 'polysorbate 80', 'povidone', 'sucrose', 'titanium dioxide'],
      usos: { t: 'Insuficiencia cardiaca crónica de leve a grave, disfunción del ventrículo izquierdo tras un infarto e hipertensión.', ref: rengR('1. INDICATIONS AND USAGE', 'mild to severe chronic heart failure ( 1.1 ) left ventricular dysfunction following myocardial infarction') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto blanco de carvedilol racémico (sin sal) con lactosa, sacarosa, povidona y crospovidona.',
    usos: 'Insuficiencia cardiaca, disfunción tras un infarto e hipertensión, según su etiqueta.',
    actua: 'Bloquea los receptores β (baja la frecuencia y el gasto del corazón) y los α1 (dilata los vasos); así baja la presión arterial.',
    recorrido: 'Se absorbe bien pero el primer paso deja solo un 25-35 %, va casi todo unido a la albúmina, el hígado lo metaboliza (CYP2D6 y CYP2C9) y sus metabolitos salen por la bilis a las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el carvedilol, prácticamente insoluble en agua y en los jugos gástrico e intestinal simulados.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Es prácticamente insoluble en agua, en jugo gástrico simulado (pH 1,1) y en jugo intestinal simulado (pH 7,5).', ref: rengR('11 DESCRIPTION', 'practically insoluble in water, gastric fluid (simulated, TS, pH 1.1), and intestinal fluid') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['vena-porta', 'higado'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el carvedilol liberado.',
      ocurre: 'Se absorbe rápida y ampliamente, pero el hígado elimina mucho en el primer paso: la biodisponibilidad es del 25-35 %. Ese primer paso favorece a un enantiómero: el R(+) queda en el plasma a niveles 2-3 veces mayores que el S(−). La comida enlentece la absorción sin cambiar la cantidad.',
      sigue: 'Pasa a la circulación general.',
      datos: [
        { t: 'Se absorbe rápida y ampliamente, con una biodisponibilidad absoluta del 25-35 % por un primer paso importante.', ref: rengR(RENG_PK, 'with absolute bioavailability of approximately 25% to 35% due to a significant degree of first-pass metabolism') },
        { t: 'El primer paso es estereoselectivo: los niveles de R(+)-carvedilol son 2-3 veces mayores que los de S(−).', ref: rengR(RENG_PK, 'Carvedilol undergoes stereoselective first-pass metabolism with plasma levels of R(+)- carvedilol approximately 2 to 3 times higher than S(-)-carvedilol') },
        { t: 'Con comida se retrasa el máximo, sin diferencia en la cantidad absorbida; tomarlo con comida reduce el riesgo de hipotensión ortostática.', ref: rengR(RENG_PK, 'When administered with food, the rate of absorption is slowed'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'corazon', 'vasos'],
      llega: 'El carvedilol circula por la sangre.',
      ocurre: 'Más del 98 % va unido a proteínas, sobre todo albúmina, y se reparte mucho fuera de los vasos (unos 115 L). Bloquea los receptores β: baja el gasto cardiaco y la taquicardia. Bloquea también los α1: dilata los vasos y reduce la resistencia periférica. Ambos efectos bajan la presión.',
      sigue: 'El hígado lo metaboliza.',
      datos: [
        { t: 'Más del 98 % se une a proteínas plasmáticas, sobre todo albúmina; su volumen en estado estacionario es de unos 115 L, con amplia distribución extravascular.', ref: rengR(RENG_PK, 'Carvedilol is more than 98% bound to plasma proteins, primarily with albumin') },
        { t: 'Es un compuesto básico y lipófilo con un volumen de distribución de unos 115 L.', ref: rengR(RENG_PK, 'indicating substantial distribution into extravascular tissues') }
      ],
      accion: {
        diana: 'Receptores adrenérgicos β (no selectivo; enantiómero S) y α1 (ambos enantiómeros)',
        efecto: 'Reduce la frecuencia y el gasto cardiacos y dilata los vasos; baja la presión arterial.',
        lugar: ['corazon', 'vasos'],
        datos: [
          { t: 'El bloqueo β no selectivo está en el enantiómero S(−); el bloqueo α1 está en ambos con igual potencia. No tiene actividad simpaticomimética intrínseca.', ref: rengR('12.1 Mechanism of Action', 'nonselective β-adrenoreceptor blocking activity is present in the S(-) enantiomer') },
          { t: 'El bloqueo β reduce el gasto cardiaco y la taquicardia por esfuerzo o refleja.', ref: rengR('12.2 Pharmacodynamics', 'reduces cardiac output in normal subjects') },
          { t: 'El bloqueo α1 produce vasodilatación y reduce la resistencia vascular periférica; contribuye a bajar la presión.', ref: rengR('12.2 Pharmacodynamics', 'causes vasodilation, and (3) reduces peripheral vascular resistance') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El carvedilol llega al hígado.',
      ocurre: 'Se metaboliza ampliamente: oxidación del anillo aromático y glucuronidación, y luego conjugación de los metabolitos oxidados. Intervienen sobre todo CYP2D6 y CYP2C9. Tres metabolitos conservan el bloqueo β (el 4′-hidroxifenilo es 13 veces más potente), pero circulan a una décima parte de la concentración del carvedilol.',
      sigue: 'Los metabolitos van a la bilis.',
      datos: [
        { t: 'Se metaboliza ampliamente: el carvedilol supone solo un 7 % de la radiactividad en plasma y menos del 2 % sale sin cambios por la orina.', ref: rengR(RENG_PK, 'carvedilol accounted for only about 7% of the total radioactivity in plasma') },
        { t: 'Se metaboliza sobre todo por oxidación del anillo aromático y glucuronidación; los metabolitos oxidados se conjugan después con glucurónido y sulfato.', ref: rengR(RENG_PK, 'Carvedilol is metabolized primarily by aromatic ring oxidation and glucuronidation') },
        { t: 'En microsomas de hígado humano, las enzimas principales son CYP2D6 y CYP2C9.', ref: rengR(RENG_PK, 'The primary P450 enzymes responsible for the metabolism of both R(+) and S(-)- carvedilol in human liver microsomes were CYP2D6 and CYP2C9') },
        { t: 'Los metabolizadores lentos del CYP2D6 tienen niveles de R(+)-carvedilol 2-3 veces mayores.', ref: rengR(RENG_PK, 'exhibiting 2- to 3-fold higher plasma concentrations of R(+)-carvedilol compared with extensive metabolizers'), poblacion: 'metabolizadores lentos del CYP2D6' }
      ],
      metabolitos: [
        { nombre: '4′-hidroxifenil-carvedilol', nombreFuente: "4'-hydroxyphenyl metabolite", actividad: 'activo', nota: 'Unas 13 veces más potente que el carvedilol como bloqueante β (estudios preclínicos).', ref: rengR(RENG_PK, "the 4'-hydroxyphenyl metabolite is approximately 13 times more potent than carvedilol for β-blockade") },
        { nombre: 'Otros dos metabolitos activos (desmetilación e hidroxilación del fenol)', actividad: 'activo', nota: 'Circulan a una décima parte de la concentración del carvedilol.', ref: rengR(RENG_PK, 'Demethylation and hydroxylation at the phenol ring produce 3 active metabolites with β-receptor blocking activity') },
        { nombre: 'Glucurónidos y sulfatos', actividad: 'desconocida', ref: rengR(RENG_PK, 'The oxidative metabolites are further metabolized by conjugation via glucuronidation and sulfation') }
      ]
    },
    excrecion: {
      organos: ['bilis', 'heces'],
      llega: 'Los metabolitos llegan a la bilis.',
      ocurre: 'Salen sobre todo por la bilis hacia las heces; menos del 2 % de la dosis sale sin cambios por la orina. Su semivida es de 7-10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Los metabolitos se excretan sobre todo por la bilis a las heces.', ref: rengR(RENG_PK, 'The metabolites of carvedilol are excreted primarily via the bile into the feces') },
        { t: 'La semivida terminal aparente suele estar entre 7 y 10 horas.', ref: rengR(RENG_PK, 'the apparent mean terminal elimination half-life of carvedilol generally ranges from 7 to 10 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '25-35', unidad: '%', ref: rengR(RENG_PK, 'absolute bioavailability of approximately 25% to 35%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '> 98', unidad: '%', ref: rengR(RENG_PK, 'Carvedilol is more than 98% bound to plasma proteins') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (estado estacionario)', valor: '≈ 115', unidad: 'L', ref: rengR(RENG_PK, 'steady-state volume of distribution of approximately 115 L') },
    { magnitud: 'semivida', nombre: 'Semivida terminal aparente', valor: '7-10', unidad: 'h', ref: rengR(RENG_PK, 'generally ranges from 7 to 10 hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento plasmático', valor: '500-700', unidad: 'mL/min', ref: rengR(RENG_PK, 'Plasma clearance ranges from 500 to 700 mL/min') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina', valor: '< 2', unidad: '% de la dosis', ref: rengR(RENG_PK, 'Less than 2% of the dose was excreted unchanged in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '07c619c6-4a0c-445e-94fa-664a54f68a39', 'COREG (carvedilol) tablet, film coated', 'COREG (Waylis Therapeutics LLC)', '3', '2026-08-03', '2026-11-10'), rengPubchem(2585, 'Carvedilol', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
