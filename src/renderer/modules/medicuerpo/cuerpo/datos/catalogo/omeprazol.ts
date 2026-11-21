import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-prilosec-suspension'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'omeprazol',
    nombre: 'Omeprazol',
    clase: 'Inhibidor de la bomba de protones (bencimidazol sustituido)',
    sinonimos: ['omeprazole', 'Prilosec'],
    formula: 'C17H19N3O3S',
    masaMolar: 345.4,
    smiles: 'CC1=CN=C(C(=C1OC)C)CS(=O)C2=NC3=C(N2)C=C(C=C3)OC',
    inchikey: 'SUBDBMMJDZJVOS-UHFFFAOYSA-N',
    cid: 4594,
    iupac: '6-metoxi-2-[(4-metoxi-3,5-dimetilpiridin-2-il)metilsulfinil]-1H-bencimidazol',
    estereo: { descripcion: 'El azufre del sulfóxido es un estereocentro; el omeprazol es la mezcla racémica (el esomeprazol es el enantiómero S).' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'omeprazol-prilosec-suspension',
      producto: 'PRILOSEC (omeprazole magnesium) para suspensión oral de liberación retardada, sobres de 2,5 y 10 mg',
      titular: 'Covis Pharma US, Inc.',
      mercado: 'EE. UU.',
      forma: 'Gránulos gastrorresistentes para suspensión oral (en sobres)',
      formaFuente: 'GRANULE, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '2,5 y 10 mg de omeprazol por sobre',
      sal: { nombre: 'Omeprazol magnésico (sal de magnesio 2:1); 2,5 mg de omeprazol equivalen a 2,8 mg de omeprazol magnésico trihidrato', ref: rengR('11 DESCRIPTION', 'equivalent to 2.8 mg or 11.2 mg of omeprazole magnesium trihydrate') },
      excipientes: ['gránulos con omeprazol: glyceryl monostearate, hydroxypropyl cellulose, hypromellose, magnesium stearate, methacrylic acid copolymer C, polysorbate, sugar spheres, talc, triethyl citrate', 'gránulos inactivos: citric acid, crospovidone, dextrose, hydroxypropyl cellulose, iron oxide, xanthan gum'],
      usos: { t: 'Úlcera duodenal y gástrica, erradicación de Helicobacter pylori (con antibióticos), reflujo gastroesofágico, esofagitis erosiva y estados de hipersecreción ácida.', ref: rengR('1 INDICATIONS AND USAGE', 'PRILOSEC is a proton pump inhibitor (PPI) indicated for the') },
      fuente: RENG_F,
      nota: 'Se mezcla con agua y se toma por boca (también se puede dar por sonda). Los datos de exposición se midieron con la suspensión de 20 mg una vez al día.'
    }
  ],
  resumen: {
    contiene: 'Gránulos con cubierta gastrorresistente de omeprazol magnésico (la sal del activo) y gránulos inactivos, que se suspenden en agua.',
    usos: 'Úlceras, reflujo, esofagitis erosiva, Helicobacter pylori (con antibióticos) e hipersecreción ácida, según su etiqueta.',
    actua: 'Bloquea la bomba de protones (H⁺/K⁺-ATPasa) de las células parietales del estómago: el último paso de la producción de ácido.',
    recorrido: 'Atraviesa el estómago sin liberarse, se absorbe después, actúa sobre las células del estómago, el sistema CYP (sobre todo CYP2C19) lo transforma y sus metabolitos salen por la orina y las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago', 'duodeno'],
      llega: 'La suspensión de gránulos gastrorresistentes llega al estómago.',
      ocurre: 'La cubierta de los gránulos resiste el ácido: el omeprazol no se libera en el estómago, donde el ácido lo degradaría (su estabilidad depende mucho del pH). Se libera cuando los gránulos salen del estómago.',
      sigue: 'Los gránulos pasan al intestino, donde empieza la absorción.',
      datos: [
        { t: 'Cada sobre contiene 2,5 o 10 mg de omeprazol en forma de gránulos con cubierta entérica.', ref: rengR('11 DESCRIPTION', 'in the form of enteric-coated granules') },
        { t: 'La semivida del omeprazol depende mucho del pH.', ref: rengR('11 DESCRIPTION', 'The half-life is highly pH dependent') },
        { t: 'La absorción empieza solo cuando los gránulos gastrorresistentes salen del estómago.', ref: rengR(`${RENG_PK} › Absorption`, 'Absorption of omeprazole begins only after the gastro-resistant granules leave the stomach') }
      ],
      formas: ['tableta', 'disuelto']
    },
    absorcion: {
      organos: ['duodeno', 'intestino-delgado'],
      organosGenerales: ['vena-porta'],
      llega: 'Llegan los gránulos al intestino y liberan el omeprazol.',
      ocurre: 'Se absorbe: tras dosis repetidas, el máximo en la sangre llega en 1,5-2 horas. La exposición aumenta con los días (tras 5 días es un 51-58 % mayor que tras la primera dosis).',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Tras dosis repetidas de la suspensión, la concentración máxima se alcanza en 1,5-2 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'Peak plasma concentrations of omeprazole after repeated doses of delayed-release oral suspension occur within 1.5 to 2 hours'), condiciones: 'dosis repetidas' },
        { t: 'Su farmacocinética depende del tiempo: con 20 mg una vez al día durante 5 días, AUC y Cmax son un 51 % y un 58 % mayores que tras la primera dosis.', ref: rengR(`${RENG_PK} › Absorption`, 'is 51% and 58% higher, respectively, than after the first dose'), condiciones: '20 mg de suspensión una vez al día, 5 días' },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ],
      sinDatos: ['Biodisponibilidad absoluta de esta suspensión', 'Efecto de la comida']
    },
    distribucion: {
      organos: ['sangre', 'estomago'],
      llega: 'El omeprazol circula por la sangre hasta las células parietales del estómago.',
      ocurre: 'Viaja unido a proteínas en un 95 %. En la superficie secretora de las células parietales bloquea la H⁺/K⁺-ATPasa (la bomba de protones): se reduce la secreción de ácido basal y estimulada. El efecto empieza en una hora y dura hasta 72 horas, mucho más que el fármaco en la sangre, porque queda unido a la enzima.',
      sigue: 'Mientras tanto, la sangre lo lleva a los órganos que lo metabolizan.',
      simultaneo: 'El efecto sobre el ácido sigue días después de que el omeprazol ya se haya eliminado de la sangre.',
      datos: [{ t: 'La unión a proteínas es de aproximadamente el 95 %.', ref: rengR(`${RENG_PK} › Distribution`, 'Protein binding is approximately 95%') }],
      accion: {
        diana: 'H⁺/K⁺-ATPasa (bomba de protones) de la célula parietal gástrica',
        efecto: 'Disminuye la secreción de ácido del estómago, basal y estimulada.',
        lugar: ['estomago'],
        datos: [
          { t: 'Suprime la secreción de ácido gástrico inhibiendo específicamente la H⁺/K⁺-ATPasa en la superficie secretora de la célula parietal: bloquea el último paso de la producción de ácido.', ref: rengR('12.1 Mechanism of Action', 'suppress gastric acid secretion by specific inhibition of the H + /K + ATPase enzyme system') },
          { t: 'El efecto antisecretor empieza en una hora, es máximo a las dos horas y dura hasta 72 horas, por la unión prolongada a la enzima.', ref: rengR('12.2 Pharmacodynamics', 'the onset of the antisecretory effect of omeprazole occurs within one hour') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El omeprazol llega por la sangre a las enzimas que lo transforman.',
      ocurre: 'El sistema citocromo P450 lo metaboliza ampliamente: sobre todo CYP2C19 (que forma hidroxiomeprazol, el metabolito principal en plasma, y cuya expresión varía entre personas) y CYP3A4 (que forma omeprazol sulfona). Los metabolitos tienen poca o ninguna actividad antisecretora.',
      sigue: 'Los metabolitos se eliminan por la orina y la bilis.',
      datos: [
        { t: 'Se metaboliza ampliamente por el sistema citocromo P450; la mayor parte depende del CYP2C19, de expresión polimórfica, que forma hidroxiomeprazol.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'The major part of its metabolism is dependent on the polymorphically expressed CYP2C19') },
        { t: 'El resto depende del CYP3A4, que forma omeprazol sulfona.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'CYP3A4, responsible for the formation of omeprazole sulphone') },
        { t: 'En personas sanas la semivida plasmática es de 0,5 a 1 hora.', ref: rengR(`${RENG_PK} › Absorption`, 'In healthy subjects, the plasma half-life is 0.5 to 1 hour'), poblacion: 'personas sanas' },
        RENG_GENERAL.higado
      ],
      sinDatos: ['Órgano del metabolismo (la etiqueta nombra las enzimas, no el órgano)'],
      metabolitos: [
        { nombre: 'Hidroxiomeprazol', nombreFuente: 'hydroxyomeprazole', actividad: 'inactivo', nota: 'Principal metabolito en plasma; poca o ninguna actividad antisecretora.', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'hydroxyomeprazole, the major metabolite in plasma') },
        { nombre: 'Omeprazol sulfona', nombreFuente: 'omeprazole sulphone', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Elimination › Metabolism`, 'the formation of omeprazole sulphone') },
        { nombre: 'Omeprazol sulfuro', nombreFuente: 'sulfide derivative', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'the sulfide and sulfone derivatives of omeprazole') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'bilis', 'heces'],
      llega: 'Llegan los metabolitos a los riñones y a la bilis.',
      ocurre: 'Casi nada sale sin cambios: un 77 % de la dosis sale por la orina como al menos seis metabolitos y el resto en las heces, lo que indica una excreción biliar importante de metabolitos.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Tras una dosis oral de una solución tamponada, apenas se excretó omeprazol sin cambios en la orina; la mayor parte de la dosis (un 77 %) se eliminó en la orina como al menos seis metabolitos.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'The majority of the dose (about 77%) was eliminated in urine as at least six metabolites'), alcance: 'otra-presentacion', condiciones: 'solución tamponada, dosis única' },
        { t: 'El resto se recuperó en las heces: hay una excreción biliar importante de metabolitos.', ref: rengR(`${RENG_PK} › Elimination › Excretion`, 'This implies a significant biliary excretion of the metabolites of omeprazole'), alcance: 'otra-presentacion' }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (dosis repetidas)', valor: '1,5-2', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'occur within 1.5 to 2 hours') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática', valor: '0,5-1', unidad: 'h', poblacion: 'personas sanas', ref: rengR(`${RENG_PK} › Absorption`, 'the plasma half-life is 0.5 to 1 hour') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '≈ 95', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Protein binding is approximately 95%') },
    { magnitud: 'orina', nombre: 'Dosis eliminada en la orina como metabolitos', valor: '≈ 77', unidad: '% de la dosis', condiciones: 'solución tamponada, dosis única', ref: rengR(`${RENG_PK} › Elimination › Excretion`, '(about 77%) was eliminated in urine') },
    { magnitud: 'otra', nombre: 'Duración de la inhibición del ácido', valor: 'hasta 72', unidad: 'h', ref: rengR('12.2 Pharmacodynamics', 'the duration of inhibition lasts up to 72 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'b6761f84-53ac-4745-a8c8-1e5427d7e179', 'PRILOSEC (omeprazole magnesium) granule, delayed release, for oral suspension', 'PRILOSEC for delayed-release oral suspension (Covis Pharma US, Inc.)', '8', '2024-03-19', '2026-11-09'), rengPubchem(4594, 'Omeprazole', '2026-11-09')],
  estado: 'completa'
} satisfies RengFichaFarmaco
