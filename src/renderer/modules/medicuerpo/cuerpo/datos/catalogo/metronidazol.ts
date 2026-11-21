import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-flagyl-375'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_CP = 'CLINICAL PHARMACOLOGY'

export default {
  activo: {
    id: 'metronidazol',
    nombre: 'Metronidazol',
    clase: 'Antibacteriano y antiprotozoario (nitroimidazol)',
    sinonimos: ['metronidazole', 'Flagyl'],
    formula: 'C6H9N3O3',
    masaMolar: 171.15,
    smiles: 'CC1=NC=C(N1CCO)[N+](=O)[O-]',
    inchikey: 'VAOCPAMSLUNLGC-UHFFFAOYSA-N',
    cid: 4173,
    iupac: '2-(2-metil-5-nitroimidazol-1-il)etanol',
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'metronidazol-flagyl-375',
      producto: 'FLAGYL 375 (metronidazole) cápsulas de 375 mg',
      titular: 'Pfizer Laboratories Div Pfizer Inc',
      mercado: 'EE. UU.',
      forma: 'Cápsula dura',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '375 mg de metronidazol por cápsula',
      excipientes: ['corn starch', 'magnesium stearate', 'gelatin', 'black iron oxide', 'titanium dioxide', 'FD&C Green No. 3', 'D&C Yellow No. 10'],
      usos: { t: 'Tricomoniasis, amebiasis intestinal y absceso hepático amebiano, e infecciones graves por bacterias anaerobias (intraabdominales, de piel, ginecológicas, óseas y otras).', ref: rengR('INDICATIONS AND USAGE', 'FLAGYL 375 capsules are indicated in the treatment of acute intestinal amebiasis (amebic dysentery) and amebic liver abscess') },
      fuente: RENG_F
    }
  ],
  resumen: {
    contiene: 'Cápsula con 375 mg de metronidazol (sin sal), almidón de maíz y gelatina coloreada.',
    usos: 'Tricomoniasis, amebiasis e infecciones por bacterias anaerobias, según su etiqueta.',
    actua: 'Dentro de las bacterias anaerobias y protozoos se reduce a radicales que dañan su ADN; en presencia de oxígeno no se activa.',
    recorrido: 'Se absorbe bien (máximo hacia 1,5 horas), se une poco a proteínas, llega a casi todos los líquidos del cuerpo y sale sobre todo por la orina (60-80 %), en parte como metabolitos.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera el metronidazol.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada cápsula contiene 375 mg de metronidazol.', ref: rengR('DESCRIPTION', 'contain 375 mg of metronidazole USP') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el metronidazol liberado.',
      ocurre: 'Se absorbe bien y su comportamiento es similar al de la vía intravenosa. Con dos cápsulas en ayunas, el máximo llega hacia 1,6 horas. La comida no cambia la cantidad absorbida, pero baja y retrasa el máximo.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Su disposición en el cuerpo es similar por vía oral e intravenosa.', ref: rengR(`${RENG_CP} › Absorption`, 'Disposition of metronidazole in the body is similar for both oral and intravenous dosage forms') },
        { t: 'Con dos cápsulas de 375 mg en ayunas, el Tmax medio fue de 1,6 horas.', ref: rengR(`${RENG_CP} › Absorption`, 'with a mean T max of 1.6 (± 0.7) hours'), condiciones: 'en ayunas', poblacion: '23 mujeres sanas' },
        { t: 'La comida no afecta a la cantidad absorbida, pero da una Cmax menor y un Tmax más tardío.', ref: rengR(`${RENG_CP} › Absorption`, 'Administration of FLAGYL 375 capsules with food does not affect the extent of absorption of metronidazole'), condiciones: 'con comida' }
      ],
      sinDatos: ['Biodisponibilidad absoluta en cifras', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'encefalo', 'boca', 'mama', 'higado', 'sitio-infeccion'],
      llega: 'El metronidazol circula por la sangre.',
      ocurre: 'Menos del 20 % va unido a proteínas. Llega al líquido cefalorraquídeo, la saliva y la leche en concentraciones parecidas a las del plasma, y se han medido concentraciones bactericidas en el pus de abscesos hepáticos. En las bacterias anaerobias y los protozoos se reduce y forma radicales que dañan el ADN.',
      sigue: 'Una parte se oxida o se conjuga.',
      datos: [
        { t: 'Menos del 20 % del metronidazol circulante está unido a proteínas.', ref: rengR(`${RENG_CP} › Distribution`, 'Less than 20% of the circulating metronidazole is bound to plasma proteins') },
        { t: 'Aparece en el líquido cefalorraquídeo, la saliva y la leche materna en concentraciones similares a las del plasma; también se han detectado concentraciones bactericidas en el pus de abscesos hepáticos.', ref: rengR(`${RENG_CP} › Distribution`, 'Metronidazole appears in cerebrospinal fluid, saliva, and breast milk in concentrations similar to those found in plasma') }
      ],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'ADN de bacterias anaerobias y protozoos (tras reducirse dentro de ellos)',
        efecto: 'Bactericida y tricomonicida: inhibe la síntesis de ADN y lo degrada.',
        lugar: ['sitio-infeccion'],
        datos: [
          { t: 'En el citoplasma de las bacterias anaerobias sensibles se reduce (con proteínas como la ferredoxina) y forma un radical libre nitroso de vida corta.', ref: rengR('Microbiology › Mechanism of Action', 'formation of a short-lived nitroso free radical') },
          { t: 'La forma reducida y los radicales libres interactúan con el ADN, inhiben su síntesis y lo degradan; el mecanismo preciso no está claro.', ref: rengR('Microbiology › Mechanism of Action', 'The reduced form of metronidazole and free radicals can interact with DNA leading to inhibition of DNA synthesis and DNA degradation') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte del metronidazol se transforma.',
      ocurre: 'Se forman metabolitos por oxidación de la cadena lateral (el metabolito hidroxi y un ácido acético) y por conjugación con glucurónido. El metabolito hidroxi también es activo frente a anaerobios y tricomonas. En la insuficiencia hepática grave la exposición se duplica.',
      sigue: 'El metronidazol y sus metabolitos van sobre todo a los riñones.',
      datos: [
        { t: 'Los metabolitos urinarios proceden sobre todo de la oxidación de la cadena lateral y de la conjugación con glucurónido.', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'The metabolites that appear in the urine result primarily from side-chain oxidation') },
        { t: 'Tanto el compuesto original como el metabolito hidroxi tienen actividad in vitro frente a la mayoría de anaerobios y frente a tricomonas.', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'Both the parent compound and the hydroxyl metabolite possess in vitro antimicrobial activity against most strains of anaerobic bacteria') },
        { t: 'Con insuficiencia hepática grave, el AUC fue un 114 % mayor.', ref: rengR(`${RENG_CP} › Hepatic Impairment`, 'was higher by 114% in patients with severe (Child-Pugh C) hepatic impairment'), poblacion: 'insuficiencia hepática grave' }
      ],
      sinDatos: ['Órgano del metabolismo'],
      metabolitos: [
        { nombre: 'Hidroxi-metronidazol', nombreFuente: '1-(ß-hydroxyethyl)-2-hydroxymethyl-5-nitroimidazole', actividad: 'activo', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, '1-(ß-hydroxyethyl)-2-hydroxymethyl-5-nitroimidazole') },
        { nombre: 'Ácido 2-metil-5-nitroimidazol-1-il-acético', nombreFuente: '2-methyl-5-nitroimidazole-1-yl-acetic acid', actividad: 'desconocida', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, '2-methyl-5-nitroimidazole-1-yl-acetic acid') },
        { nombre: 'Glucurónidos', actividad: 'desconocida', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'and glucuronide conjugation') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El metronidazol y sus metabolitos llegan a los riñones.',
      ocurre: 'La vía principal es la orina (60-80 % de la dosis; un 20 % de lo urinario es metronidazol sin cambios); por las heces sale un 6-15 %. Su semivida es de unas 8 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La vía principal de eliminación es la orina (60-80 % de la dosis); por las heces sale un 6-15 %.', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'The major route of elimination of metronidazole and its metabolites is via the urine (60% to 80% of the dose)') },
        { t: 'La semivida media en personas sanas es de ocho horas.', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'The average elimination half-life of metronidazole in healthy subjects is eight hours') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (ayunas)', valor: '1,6 ± 0,7', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_CP} › Absorption`, 'with a mean T max of 1.6 (± 0.7) hours') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '< 20', unidad: '%', ref: rengR(`${RENG_CP} › Distribution`, 'Less than 20% of the circulating metronidazole is bound to plasma proteins') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '≈ 8', unidad: 'h', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'in healthy subjects is eight hours') },
    { magnitud: 'aclaramiento', nombre: 'Aclaramiento renal', valor: '≈ 10', unidad: 'mL/min/1,73 m²', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'Renal clearance of metronidazole is approximately 10 mL/min/1.73 m 2') },
    { magnitud: 'orina', nombre: 'Excretado en la orina', valor: '60-80', unidad: '% de la dosis', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'via the urine (60% to 80% of the dose)') },
    { magnitud: 'heces', nombre: 'Excretado en las heces', valor: '6-15', unidad: '% de la dosis', ref: rengR(`${RENG_CP} › Metabolism/Excretion`, 'with fecal excretion accounting for 6% to 15% of the dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'a2883ca1-5a9a-4259-9d80-46ab67274384', 'FLAGYL 375 (metronidazole) capsule', 'FLAGYL 375 (Pfizer Laboratories Div Pfizer Inc)', '25', '2026-05-25', '2026-11-10'), rengPubchem(4173, 'Metronidazole', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
