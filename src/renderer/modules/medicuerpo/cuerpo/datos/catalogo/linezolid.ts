import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-zyvox'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'linezolid',
    nombre: 'Linezolid',
    clase: 'Antibacteriano: oxazolidinona',
    sinonimos: ['linezolid', 'Zyvox'],
    formula: 'C16H20FN3O4',
    masaMolar: 337.35,
    smiles: 'CC(=O)NC[C@H]1CN(C(=O)O1)C2=CC(=C(C=C2)N3CCOCC3)F',
    inchikey: 'TYZROVQLWOKYKF-ZDUSSCGKSA-N',
    cid: 441401,
    estereo: { descripcion: 'Un estereocentro: es el enantiómero (S).' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'linezolid-zyvox-600',
      producto: 'ZYVOX (linezolid) comprimidos recubiertos de 600 mg',
      titular: 'Pharmacia & Upjohn Company LLC (Pfizer)',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '600 mg de linezolid por comprimido',
      excipientes: ['carnauba wax', 'corn starch', 'hydroxypropylcellulose', 'hypromellose', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol', 'sodium starch glycolate', 'titanium dioxide'],
      usos: { t: 'Infecciones por bacterias grampositivas sensibles en adultos y niños: neumonía, infecciones de piel complicadas o no e infecciones por Enterococcus faecium resistente a vancomicina. No sirve para gramnegativas.', ref: rengR('1 INDICATIONS AND USAGE', 'ZYVOX is an oxazolidinone-class antibacterial indicated in adults and children for the treatment of the following infections caused by susceptible Gram-positive bacteria') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye una inyección intravenosa y una suspensión oral; aquí se describe el comprimido.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con 600 mg de linezolid (sin sal), almidón de maíz y celulosa.',
    usos: 'Infecciones por bacterias grampositivas, incluidas algunas resistentes, según su etiqueta.',
    actua: 'Se une al ARN ribosómico 23S de la subunidad 50S e impide que se forme el complejo de inicio 70S: la bacteria no puede fabricar proteínas.',
    recorrido: 'Se absorbe por completo (100 %), se reparte por los tejidos bien irrigados, se oxida en parte a dos ácidos inactivos y sale sobre todo por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el linezolid.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada comprimido recubierto contiene 600 mg de linezolid.', ref: rengR('11 DESCRIPTION', 'ZYVOX Tablet for oral administration contains 600 mg linezolid as a film-coated compressed tablet') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el linezolid liberado.',
      ocurre: 'Se absorbe ampliamente: la biodisponibilidad es de un 100 %, así que oral e intravenoso son intercambiables. El máximo llega en 1-2 horas. Una comida grasa lo retrasa algo y lo baja un 17 %, sin cambiar la exposición total.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe ampliamente; el máximo llega en 1-2 horas y la biodisponibilidad absoluta es de un 100 %.', ref: rengR(`${RENG_PK} › Absorption`, 'Maximum plasma concentrations are reached approximately 1 to 2 hours after dosing, and the absolute bioavailability is approximately 100%') },
        { t: 'Con comida grasa, el Tmax pasa de 1,5 a 2,2 horas y la Cmax baja un 17 %; el AUC no cambia.', ref: rengR(`${RENG_PK} › Absorption`, 'C max is decreased by about 17% when high fat food is given with linezolid'), condiciones: 'con comida rica en grasa' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'boca', 'piel', 'sitio-infeccion'],
      llega: 'El linezolid circula por la sangre.',
      ocurre: 'Pasa fácilmente a los tejidos bien irrigados; un 31 % va unido a proteínas y su volumen es de 40-50 L. En la saliva alcanza 1,2 veces la concentración del plasma y en el sudor algo más de la mitad. En las bacterias bloquea el inicio de la síntesis de proteínas.',
      sigue: 'Una parte se oxida; el resto va a los riñones.',
      datos: [
        { t: 'Se distribuye fácilmente a los tejidos bien perfundidos; la unión a proteínas es de un 31 % y el volumen en estado estacionario de 40-50 L.', ref: rengR(`${RENG_PK} › Distribution`, 'The plasma protein binding of linezolid is approximately 31% and is concentration-independent') },
        { t: 'La relación saliva/plasma fue de 1,2 y la de sudor/plasma de 0,55.', ref: rengR(`${RENG_PK} › Distribution`, 'The ratio of linezolid in saliva relative to plasma was 1.2 to 1') }
      ],
      accion: {
        diana: 'ARN ribosómico 23S de la subunidad 50S',
        efecto: 'Impide la formación del complejo de inicio 70S; bacteriostático frente a enterococos y estafilococos y bactericida frente a la mayoría de estreptococos.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'Se une al ARN ribosómico 23S de la subunidad 50S e impide la formación de un complejo de inicio 70S funcional, esencial para la reproducción bacteriana.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'Linezolid binds to a site on the bacterial 23S ribosomal RNA of the 50S subunit and prevents the formation of a functional 70S initiation complex') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El linezolid llega a las vías que lo oxidan.',
      ocurre: 'Se oxida el anillo de morfolina y se forman dos ácidos inactivos: el metabolito A (por vía enzimática, se supone) y el B (por oxidación química no enzimática, in vitro). La ruta no se conoce del todo.',
      sigue: 'El linezolid y sus metabolitos van a los riñones.',
      datos: [
        { t: 'Se metaboliza sobre todo por oxidación del anillo de morfolina, que da dos ácidos carboxílicos inactivos (A y B).', ref: rengR(`${RENG_PK} › Metabolism`, 'Linezolid is primarily metabolized by oxidation of the morpholine ring, which results in two inactive ring-opened carboxylic acid metabolites') },
        { t: 'Se supone que A se forma por vía enzimática; B, por oxidación química no enzimática in vitro. La vía metabólica no se conoce del todo.', ref: rengR(`${RENG_PK} › Metabolism`, 'However, the metabolic pathway of linezolid is not fully understood') }
      ],
      sinDatos: ['Órgano del metabolismo'],
      metabolitos: [
        { nombre: 'Metabolito A (ácido aminoetoxiacético)', nombreFuente: 'aminoethoxyacetic acid metabolite (A)', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'the aminoethoxyacetic acid metabolite (A)') },
        { nombre: 'Metabolito B (hidroxietil-glicina)', nombreFuente: 'hydroxyethyl glycine metabolite (B)', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'the hydroxyethyl glycine metabolite (B)') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El linezolid y sus metabolitos llegan a los riñones.',
      ocurre: 'En estado estacionario, por la orina sale un 30 % como linezolid, un 40 % como metabolito B y un 10 % como A; por las heces, casi nada de linezolid y un 9 % de metabolitos. El riñón reabsorbe parte en los túbulos. Su semivida es de unas 5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'En estado estacionario, un 30 % de la dosis aparece en la orina como linezolid, un 40 % como metabolito B y un 10 % como metabolito A.', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 30% of the dose appears in the urine as linezolid, 40% as metabolite B, and 10% as metabolite A') },
        { t: 'Casi no aparece linezolid en las heces; sí un 6 % de la dosis como metabolito B y un 3 % como A.', ref: rengR(`${RENG_PK} › Excretion`, 'Virtually no linezolid appears in the feces') },
        { t: 'Su aclaramiento renal medio es de 40 mL/min, lo que sugiere reabsorción tubular neta.', ref: rengR(`${RENG_PK} › Excretion`, 'The mean renal clearance of linezolid is 40 mL/min which suggests net tubular reabsorption') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '≈ 100', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'the absolute bioavailability is approximately 100%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'are reached approximately 1 to 2 hours after dosing') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 31', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is approximately 31%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (estado estacionario)', valor: '40-50', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'averaged 40 to 50 liters in healthy adult volunteers') },
    { magnitud: 'semivida', nombre: 'Semivida (600 mg cada 12 h)', valor: '5,40 ± 2,06', unidad: 'h', ref: rengR(RENG_PK, 'every 12 hours 21.20 (5.78) 6.15 (2.94) 1.03 (0.62) 138.00 (42.10) 5.40 (2.06)') },
    { magnitud: 'orina', nombre: 'Linezolid sin cambios en la orina', valor: '≈ 30', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'approximately 30% of the dose appears in the urine as linezolid') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '6e70e63b-bfd5-478d-a8ee-8ba22c9efabd', 'ZYVOX (linezolid) injection, solution; granule, for suspension; tablet, film coated', 'ZYVOX (Pharmacia & Upjohn Company LLC)', '73', '2026-11-09', '2026-11-10'), rengPubchem(441401, 'Linezolid', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
