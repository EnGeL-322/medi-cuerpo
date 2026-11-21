import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'
import { RENG_GENERAL } from '../generales'

const RENG_F = 'dailymed-lamictal'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'lamotrigina',
    nombre: 'Lamotrigina',
    clase: 'Antiepiléptico (feniltriazina)',
    sinonimos: ['lamotrigine', 'Lamictal'],
    formula: 'C9H7Cl2N5',
    masaMolar: 256.09,
    smiles: 'C1=CC(=C(C(=C1)Cl)Cl)C2=C(N=C(N=N2)N)N',
    inchikey: 'PYZRQGJRPPTADH-UHFFFAOYSA-N',
    cid: 3878,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Neurología'
  },
  presentaciones: [
    {
      id: 'lamotrigina-lamictal',
      producto: 'LAMICTAL (lamotrigine) comprimidos de 25, 100, 150 y 200 mg',
      titular: 'GlaxoSmithKline LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '25, 100, 150 y 200 mg de lamotrigina por comprimido',
      excipientes: ['lactose', 'magnesium stearate', 'microcrystalline cellulose', 'povidone', 'sodium starch glycolate', 'colorante según la concentración (FD&C Yellow No. 6 Lake, ferric oxide yellow o FD&C Blue No. 2 Lake)'],
      usos: { t: 'Epilepsia (tratamiento añadido desde los 2 años y paso a monoterapia desde los 16) y mantenimiento del trastorno bipolar I.', ref: rengR('1 INDICATIONS AND USAGE', 'Epilepsy—adjunctive therapy in patients aged 2 years and older') },
      fuente: RENG_F,
      nota: 'La misma etiqueta incluye comprimidos dispersables, bucodispersables (ODT) y envases de inicio; tienen una absorción equivalente.'
    }
  ],
  resumen: {
    contiene: 'Comprimido de lamotrigina (sin sal) con lactosa, celulosa, povidona y un colorante según la concentración.',
    usos: 'Epilepsia y mantenimiento del trastorno bipolar I, según su etiqueta.',
    actua: 'No se conoce con precisión: in vitro inhibe los canales de sodio dependientes del voltaje y estabiliza las membranas de las neuronas.',
    recorrido: 'Se absorbe por completo (98 %), un 55 % va unida a proteínas, se conjuga con ácido glucurónico (glucurónido inactivo) y un 94 % sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega. La lamotrigina es muy poco soluble en agua (0,17 mg/mL) y algo más en medio ácido (4,1 mg/mL en HCl 0,1 M), como el del estómago.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Es muy poco soluble en agua (0,17 mg/mL) y algo soluble en HCl 0,1 M (4,1 mg/mL).', ref: rengR('11 DESCRIPTION', 'Lamotrigine is very slightly soluble in water (0.17 mg/mL at 25°C)') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega la lamotrigina disuelta.',
      ocurre: 'Se absorbe rápido y por completo, con un primer paso despreciable: biodisponibilidad absoluta del 98 %. La comida no la cambia. El máximo en el plasma llega entre 1,4 y 4,8 horas.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe rápida y completamente, con metabolismo de primer paso despreciable (biodisponibilidad absoluta del 98 %); la comida no la afecta.', ref: rengR(`${RENG_PK} › Absorption`, 'Lamotrigine is rapidly and completely absorbed after oral administration with negligible first-pass metabolism (absolute bioavailability is 98%)') },
        { t: 'El máximo en plasma aparece entre 1,4 y 4,8 horas tras la toma.', ref: rengR(`${RENG_PK} › Absorption`, 'Peak plasma concentrations occur anywhere from 1.4 to 4.8 hours following drug administration') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo'],
      llega: 'La lamotrigina circula por la sangre.',
      ocurre: 'Un 55 % se une a proteínas del plasma y su volumen aparente es de 0,9-1,3 L/kg. En el encéfalo, según estudios in vitro, inhibe los canales de sodio dependientes del voltaje: estabiliza las membranas neuronales y modula la liberación de aminoácidos excitadores como el glutamato.',
      sigue: 'Se conjuga con ácido glucurónico.',
      datos: [
        { t: 'Volumen de distribución aparente de 0,9 a 1,3 L/kg.', ref: rengR(`${RENG_PK} › Distribution`, 'ranged from 0.9 to 1.3 L/kg') },
        { t: 'In vitro, un 55 % se une a proteínas plasmáticas.', ref: rengR(`${RENG_PK} › Protein Binding`, 'lamotrigine is approximately 55% bound to human plasma proteins') }
      ],
      accion: {
        diana: 'Canales de sodio dependientes del voltaje (mecanismo propuesto; el preciso es desconocido)',
        efecto: 'Anticonvulsivante: estabiliza las membranas neuronales y reduce la liberación de glutamato y aspartato.',
        lugar: ['encefalo'],
        datos: [
          { t: 'Los mecanismos precisos de su acción anticonvulsivante son desconocidos.', ref: rengR('12.1 Mechanism of Action', 'The precise mechanism(s) by which lamotrigine exerts its anticonvulsant action are unknown') },
          { t: 'Estudios in vitro sugieren que inhibe los canales de sodio dependientes del voltaje, estabiliza las membranas neuronales y modula la liberación presináptica de aminoácidos excitadores.', ref: rengR('12.1 Mechanism of Action', 'lamotrigine inhibits voltage-sensitive sodium channels, thereby stabilizing neuronal membranes') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La lamotrigina llega a las enzimas de conjugación.',
      ocurre: 'Se metaboliza sobre todo por conjugación con ácido glucurónico: el metabolito principal es un 2-N-glucurónido inactivo. Algunos fármacos (como anticonceptivos con estrógenos o ciertos antiepilépticos) aceleran su glucuronidación, y el valproato la frena.',
      sigue: 'Los glucurónidos van a los riñones.',
      datos: [
        { t: 'Se metaboliza sobre todo por conjugación con ácido glucurónico; el metabolito principal es un 2-N-glucurónido inactivo.', ref: rengR(`${RENG_PK} › Metabolism`, 'Lamotrigine is metabolized predominantly by glucuronic acid conjugation; the major metabolite is an inactive 2-N-glucuronide conjugate') },
        { t: 'En voluntarios sanos sin otra medicación, la semivida media fue de 32,8 horas tras una dosis y 25,4 horas con dosis repetidas; el valproato la alarga y algunos inductores la acortan.', ref: rengR(RENG_PK, 'Healthy volunteers taking no other medications'), poblacion: 'voluntarios sanos sin otros fármacos' }
      ],
      sinDatos: ['Órgano de la glucuronidación'],
      metabolitos: [
        { nombre: '2-N-glucurónido de lamotrigina', nombreFuente: '2-N-glucuronide conjugate', actividad: 'inactivo', nota: '76 % de la radiactividad urinaria.', ref: rengR(`${RENG_PK} › Metabolism`, 'the 2-N-glucuronide (76%)') },
        { nombre: '5-N-glucurónido', nombreFuente: '5-N-glucuronide', actividad: 'desconocida', nota: '10 % de la radiactividad urinaria.', ref: rengR(`${RENG_PK} › Metabolism`, 'a 5-N-glucuronide (10%)') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Los glucurónidos y algo de lamotrigina sin cambios llegan a los riñones.',
      ocurre: 'Con lamotrigina marcada, un 94 % se recuperó en la orina y un 2 % en las heces. En la orina, un 10 % era lamotrigina sin cambios y un 76 % el 2-N-glucurónido.',
      sigue: 'Fin del recorrido.',
      datos: [{ t: 'Tras 240 mg marcados en 6 voluntarios sanos, un 94 % se recuperó en la orina y un 2 % en las heces; en la orina, un 10 % era lamotrigina sin cambios.', ref: rengR(`${RENG_PK} › Metabolism`, '94% was recovered in the urine and 2% was recovered in the feces'), poblacion: '6 voluntarios sanos' }],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '98', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, '(absolute bioavailability is 98%)') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1,4-4,8', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'from 1.4 to 4.8 hours following drug administration') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '0,9-1,3', unidad: 'L/kg', ref: rengR(`${RENG_PK} › Distribution`, 'ranged from 0.9 to 1.3 L/kg') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas (in vitro)', valor: '≈ 55', unidad: '%', ref: rengR(`${RENG_PK} › Protein Binding`, 'approximately 55% bound to human plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida (dosis única, sanos sin otros fármacos)', valor: '32,8 (14-103)', unidad: 'h', poblacion: 'voluntarios sanos sin otros fármacos', ref: rengR(RENG_PK, 'Single-dose LAMICTAL 179 2.2 (0.25-12.0) 32.8 (14.0-103.0)') },
    { magnitud: 'orina', nombre: 'Radiactividad en la orina', valor: '94', unidad: '% de la dosis', poblacion: '6 voluntarios sanos', ref: rengR(`${RENG_PK} › Metabolism`, '94% was recovered in the urine') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'd7e3572d-56fe-4727-2bb4-013ccca22678', 'LAMICTAL (lamotrigine) tablet; tablet for suspension; LAMICTAL ODT; kit', 'LAMICTAL (GlaxoSmithKline LLC)', '45', '2026-08-20', '2026-11-10'), rengPubchem(3878, 'Lamotrigine', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
