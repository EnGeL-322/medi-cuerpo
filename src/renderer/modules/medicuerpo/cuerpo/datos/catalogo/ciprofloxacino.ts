import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-cipro'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'ciprofloxacino',
    nombre: 'Ciprofloxacino',
    clase: 'Antibiótico fluoroquinolona',
    sinonimos: ['ciprofloxacin', 'ciprofloxacina', 'Cipro'],
    formula: 'C17H18FN3O3',
    masaMolar: 331.34,
    smiles: 'C1CC1N2C=C(C(=O)C3=CC(=C(C=C32)N4CCNCC4)F)C(=O)O',
    inchikey: 'MYSWGUAQZAJSOK-UHFFFAOYSA-N',
    cid: 2764,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'ciprofloxacino-cipro',
      producto: 'CIPRO (ciprofloxacin hydrochloride) comprimidos recubiertos de 250 y 500 mg',
      titular: 'Bayer HealthCare Pharmaceuticals Inc.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '250 y 500 mg de ciprofloxacino por comprimido',
      sal: { nombre: 'Clorhidrato de ciprofloxacino monohidrato; 500 mg de ciprofloxacino equivalen a 582 mg de la sal', ref: rengR('11 DESCRIPTION', 'is the monohydrochloride monohydrate salt of 1-cyclopropyl-6-fluoro-1, 4-dihydro-4-oxo-7-(1-piperazinyl)-3-quinolinecarboxylic acid') },
      excipientes: ['cornstarch', 'crospovidone', 'hypromellose', 'magnesium stearate', 'microcrystalline cellulose', 'polyethylene glycol', 'silicon dioxide', 'titanium dioxide'],
      usos: { t: 'En adultos, infecciones por bacterias sensibles de piel, hueso y articulaciones, intraabdominales complicadas, diarrea infecciosa, fiebre tifoidea, gonorrea no complicada, ántrax inhalado y peste, entre otras; algunas también en niños.', ref: rengR('1 INDICATIONS AND USAGE', 'CIPRO is a fluoroquinolone antibacterial indicated in adults (18 years of age and older)') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con clorhidrato de ciprofloxacino (la sal del activo), almidón, celulosa y crospovidona.',
    usos: 'Infecciones bacterianas de piel, hueso, abdomen, vías urinarias y otras, según su etiqueta.',
    actua: 'Inhibe la ADN girasa y la topoisomerasa IV, enzimas que la bacteria necesita para copiar y reparar su ADN: es bactericida.',
    recorrido: 'Biodisponibilidad del 70 %, máximo a las 1-2 horas, se reparte ampliamente (tejidos con más concentración que la sangre), un 15 % se metaboliza y un 40-50 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el ciprofloxacino. Los lácteos o zumos enriquecidos con calcio, tomados solos, pueden reducir su absorción.',
      sigue: 'Pasa al intestino.',
      datos: [
        { t: 'Hay que evitar tomarlo solo con lácteos (leche, yogur) o zumos con calcio, porque la absorción puede disminuir; sí puede tomarse con una comida que los contenga.', ref: rengR(`${RENG_PK} › Food`, 'Avoid concomitant administration of CIPRO with dairy products (like milk or yogurt) or calcium-fortified juices alone since decreased absorption is possible') },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el ciprofloxacino disuelto.',
      ocurre: 'La biodisponibilidad del comprimido es de un 70 %, sin pérdida importante en el primer paso. El máximo en el suero llega a las 1-2 horas; con comida, más cerca de las 2 horas, sin que cambie mucho la cantidad absorbida.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta del comprimido es de un 70 %, sin pérdida sustancial por primer paso.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of ciprofloxacin when given as an oral tablet is approximately 70% with no substantial loss by first pass metabolism') },
        { t: 'El máximo en suero se alcanza 1-2 horas después de tomarlo.', ref: rengR(`${RENG_PK} › Absorption`, 'Maximum serum concentrations are attained 1 to 2 hours after oral dosing') },
        { t: 'Con comida, la absorción del comprimido se retrasa (máximo hacia las 2 horas), pero la absorción total no cambia sustancialmente.', ref: rengR(`${RENG_PK} › Food`, 'there is a delay in the absorption of the drug, resulting in peak concentrations that occur closer to 2 hours after dosing'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'pulmones', 'piel', 'huesos', 'prostata'],
      llega: 'El ciprofloxacino circula por la sangre.',
      ocurre: 'Se une poco a proteínas (20-40 %) y se reparte por todo el cuerpo: en muchos tejidos (sobre todo los genitales, como la próstata) supera la concentración de la sangre; también llega a secreciones respiratorias, piel, músculo, cartílago, hueso y bilis. En el líquido cefalorraquídeo queda por debajo del 10 %. Allí donde hay bacterias sensibles, bloquea la replicación de su ADN.',
      sigue: 'Los riñones lo eliminan en buena parte sin cambios.',
      datos: [
        { t: 'Su unión a proteínas séricas es del 20 al 40 %.', ref: rengR(`${RENG_PK} › Distribution`, 'The binding of ciprofloxacin to serum proteins is 20% to 40%') },
        { t: 'Se distribuye ampliamente; las concentraciones en tejidos suelen superar a las del suero, sobre todo en tejido genital como la próstata.', ref: rengR(`${RENG_PK} › Distribution`, 'Tissue concentrations often exceed serum concentrations in both men and women, particularly in genital tissue including the prostate') },
        { t: 'En el líquido cefalorraquídeo suele estar por debajo del 10 % del máximo en suero.', ref: rengR(`${RENG_PK} › Distribution`, 'CSF concentrations are generally less than 10% of peak serum concentrations') }
      ],
      accion: {
        diana: 'ADN girasa (topoisomerasa II) y topoisomerasa IV bacterianas',
        efecto: 'Bactericida: la bacteria no puede replicar, transcribir ni reparar su ADN.',
        lugar: ['sitio-infeccion', 'piel', 'huesos', 'vias-urinarias', 'intestino-delgado'],
        datos: [{ t: 'Su acción bactericida se debe a la inhibición de la topoisomerasa II (ADN girasa) y la topoisomerasa IV, necesarias para la replicación, transcripción, reparación y recombinación del ADN bacteriano.', ref: rengR('12.4 Microbiology › Mechanism of Action', 'The bactericidal action of ciprofloxacin results from inhibition of the enzymes topoisomerase II (DNA gyrase) and topoisomerase IV') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte del ciprofloxacino se transforma.',
      ocurre: 'En la orina se han identificado cuatro metabolitos que suman un 15 % de la dosis; tienen actividad antimicrobiana, menor que la del original. El ciprofloxacino inhibe el CYP1A2 y puede subir los niveles de otros fármacos que dependen de él.',
      sigue: 'El ciprofloxacino y sus metabolitos van a los riñones.',
      datos: [
        { t: 'Cuatro metabolitos identificados en la orina suman un 15 % de la dosis oral; son activos, pero menos que el ciprofloxacino.', ref: rengR(`${RENG_PK} › Metabolism`, 'Four metabolites have been identified in human urine which together account for approximately 15% of an oral dose') },
        { t: 'Inhibe el metabolismo mediado por el CYP1A2.', ref: rengR(`${RENG_PK} › Metabolism`, 'Ciprofloxacin is an inhibitor of human cytochrome P450 1A2 (CYP1A2) mediated metabolism') }
      ],
      sinDatos: ['Órgano donde se forman los metabolitos'],
      metabolitos: [{ nombre: 'Cuatro metabolitos urinarios', actividad: 'activo', nota: 'Con actividad antimicrobiana menor que el ciprofloxacino.', ref: rengR(`${RENG_PK} › Metabolism`, 'The metabolites have antimicrobial activity, but are less active than unchanged ciprofloxacin') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis'],
      llega: 'El ciprofloxacino llega a los riñones.',
      ocurre: 'Un 40-50 % de la dosis sale sin cambios por la orina, casi todo en 24 horas; el aclaramiento renal supera el filtrado glomerular, así que hay secreción tubular activa. En la bilis la concentración es alta, pero poca dosis sale por ahí. Semivida: unas 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 40-50 % de la dosis oral se excreta sin cambios en la orina; semivida de unas 4 horas con riñones normales.', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 40 to 50% of an orally administered dose is excreted in the urine as unchanged drug') },
        { t: 'Su aclaramiento renal (unos 300 mL/min) supera el filtrado glomerular: la secreción tubular activa tiene un papel importante.', ref: rengR(`${RENG_PK} › Excretion`, 'Thus, active tubular secretion would seem to play a significant role in its elimination') },
        { t: 'Aunque en la bilis la concentración es varias veces la del suero, solo una pequeña parte de la dosis sale por ella sin cambios.', ref: rengR(`${RENG_PK} › Excretion`, 'only a small amount of the dose administered is recovered from the bile as unchanged drug') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta (comprimido)', valor: '≈ 70', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is approximately 70%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'are attained 1 to 2 hours after oral dosing') },
    { magnitud: 'union', nombre: 'Unión a proteínas séricas', valor: '20-40', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'is 20% to 40%') },
    { magnitud: 'semivida', nombre: 'Semivida sérica', valor: '≈ 4', unidad: 'h', poblacion: 'función renal normal', ref: rengR(`${RENG_PK} › Excretion`, 'is approximately 4 hours') },
    { magnitud: 'orina', nombre: 'Excretado sin cambios en la orina', valor: '40-50', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 40 to 50% of an orally administered dose is excreted in the urine as unchanged drug') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento renal', valor: '≈ 300', unidad: 'mL/min', ref: rengR(`${RENG_PK} › Excretion`, 'which is approximately 300 mL/minute') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '888dc7f9-ad9c-4c00-8d50-8ddfd9bd27c0', 'CIPRO (ciprofloxacin hydrochloride) tablet, film coated; CIPRO (ciprofloxacin) kit', 'CIPRO (Bayer HealthCare Pharmaceuticals Inc.)', '32', '2026-03-04', '2026-11-10'), rengPubchem(2764, 'Ciprofloxacin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
