import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-nexium'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'esomeprazol',
    nombre: 'Esomeprazol',
    clase: 'Inhibidor de la bomba de protones (enantiómero S del omeprazol)',
    sinonimos: ['esomeprazole', 'Nexium'],
    formula: 'C17H19N3O3S',
    masaMolar: 345.4,
    smiles: 'CC1=CN=C(C(=C1OC)C)C[S@](=O)C2=NC3=C(N2)C=C(C=C3)OC',
    inchikey: 'SUBDBMMJDZJVOS-DEOSSOPVSA-N',
    cid: 9568614,
    estereo: { descripcion: 'El estereocentro está en el azufre del sulfóxido: es el enantiómero S del omeprazol, que es la mezcla de S y R.' },
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'esomeprazol-nexium-capsulas',
      producto: 'NEXIUM (esomeprazole magnesium) cápsulas de liberación retardada de 20 y 40 mg',
      titular: 'AstraZeneca Pharmaceuticals LP',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación retardada con gránulos gastrorresistentes',
      formaFuente: 'CAPSULE, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '20 o 40 mg de esomeprazol (22,3 o 44,5 mg de esomeprazol magnésico trihidrato) por cápsula',
      sal: { nombre: 'Esomeprazol magnésico trihidrato', ref: rengR('11 DESCRIPTION', 'Each NEXIUM delayed-release capsule contains 20 mg of esomeprazole (equivalent to 22.3 mg esomeprazole magnesium trihydrate)') },
      excipientes: ['glyceryl monostearate 40-55', 'hydroxypropyl cellulose', 'hypromellose', 'magnesium stearate', 'methacrylic acid copolymer type C', 'polysorbate 80', 'sugar spheres', 'talc', 'triethyl citrate', 'cápsula: gelatin, colorantes y otros'],
      usos: { t: 'Curación y mantenimiento de la esofagitis erosiva, ardor y síntomas del reflujo, prevención de úlceras por antiinflamatorios, erradicación de H. pylori (con antibióticos) y estados de hipersecreción ácida.', ref: rengR('1 INDICATIONS AND USAGE', 'Short-term treatment in the healing of erosive esophagitis (EE) in adults and pediatric patients 12 years to 17 years of age') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye un sobre para suspensión oral con los mismos gránulos gastrorresistentes.'
    }
  ],
  resumen: {
    contiene: 'Cápsula con gránulos de esomeprazol magnésico (la sal del activo) recubiertos de un polímero gastrorresistente sobre esferas de azúcar.',
    usos: 'Reflujo, esofagitis, úlceras y erradicación de H. pylori, según su etiqueta.',
    actua: 'En el compartimento ácido de las células parietales del estómago se activa y bloquea la bomba de protones (H+/K+ ATPasa), el último paso de la producción de ácido.',
    recorrido: 'Los gránulos lo protegen del ácido del estómago; se absorbe (máximo hacia 1,5 horas), el hígado lo metaboliza (CYP2C19 y CYP3A4) a compuestos inactivos y un 80 % sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago', 'duodeno'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La cápsula se abre y deja los gránulos con cubierta entérica. El esomeprazol se degrada rápido en medio ácido; la cubierta lo protege en el estómago y se disuelve cuando el medio es menos ácido.',
      sigue: 'El esomeprazol liberado se absorbe en el intestino.',
      datos: [
        { t: 'Cada cápsula contiene el esomeprazol en forma de gránulos con cubierta entérica.', ref: rengR('11 DESCRIPTION', 'in the form of enteric-coated granules') },
        { t: 'Su estabilidad depende del pH: se degrada rápido en medio ácido y es estable en medio alcalino.', ref: rengR('11 DESCRIPTION', 'it rapidly degrades in acidic media, but it has acceptable stability under alkaline conditions') }
      ],
      formas: ['tableta', 'disuelto'],
      ruta: ['esofago', 'estomago', 'duodeno']
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega el esomeprazol liberado de los gránulos.',
      ocurre: 'El máximo en el plasma llega hacia 1,5 horas. La biodisponibilidad es del 64 % con la primera dosis de 40 mg y sube al 90 % con dosis diarias repetidas. La comida reduce la absorción un 43-53 %.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Tras la toma oral, el máximo en plasma aparece hacia 1,5 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'peak plasma levels (C max ) of esomeprazole occur at approximately 1.5 hours') },
        { t: 'Con 40 mg al día repetidos, la biodisponibilidad sistémica es de un 90 %, frente a un 64 % tras una dosis única.', ref: rengR(`${RENG_PK} › Absorption`, 'the systemic bioavailability is approximately 90% compared to 64% after a single dose of 40 mg') },
        { t: 'Tras una dosis de 40 mg, el AUC baja un 43-53 % si se toma con comida.', ref: rengR(`${RENG_PK} › Absorption`, 'is decreased by 43% to 53% after food intake compared to fasting conditions'), condiciones: 'con comida' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'estomago'],
      llega: 'El esomeprazol circula por la sangre.',
      ocurre: 'Un 97 % va unido a proteínas; su volumen es de unos 16 L. Por la sangre llega a las células parietales del estómago: en su compartimento ácido se transforma en la sulfenamida activa, que bloquea la bomba de protones.',
      sigue: 'El hígado lo metaboliza.',
      datos: [{ t: 'Se une en un 97 % a proteínas plasmáticas; el volumen aparente en estado estacionario es de unos 16 L.', ref: rengR(`${RENG_PK} › Distribution`, 'Esomeprazole is 97% bound to plasma proteins') }],
      accion: {
        diana: 'H+/K+ ATPasa (bomba de protones) de la célula parietal gástrica',
        efecto: 'Suprime la secreción de ácido basal y estimulada.',
        lugar: ['estomago'],
        datos: [
          { t: 'Suprime la secreción ácida inhibiendo de forma específica la H+/K+ ATPasa en la superficie secretora de la célula parietal; bloquea el paso final de la producción de ácido.', ref: rengR('12.1 Mechanism of Action', 'suppress gastric acid secretion by specific inhibition of the H+/K+ ATPase enzyme system at the secretory surface of the gastric parietal cell') },
          { t: 'En el compartimento ácido de la célula parietal se protona y se convierte en el inhibidor activo, la sulfenamida aquiral.', ref: rengR('12.1 Mechanism of Action', 'Esomeprazole is protonated and converted in the acidic compartment of the parietal cell forming the active inhibitor, the achiral sulphenamide') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El esomeprazol llega al hígado.',
      ocurre: 'Los citocromos del hígado lo metabolizan ampliamente: el CYP2C19 forma los metabolitos hidroxi y desmetil, y el CYP3A4 la sulfona. Ninguno frena el ácido. Además, el esomeprazol inhibe su propio CYP2C19, por eso con dosis repetidas se acumula más.',
      sigue: 'Los metabolitos van sobre todo a los riñones.',
      datos: [
        { t: 'Se metaboliza ampliamente en el hígado por el sistema CYP; sus metabolitos no tienen actividad antisecretora.', ref: rengR(`${RENG_PK} › Metabolism`, 'Esomeprazole is extensively metabolized in the liver by the cytochrome P450 (CYP) enzyme system') },
        { t: 'La mayor parte depende del CYP2C19 (metabolitos hidroxi y desmetil) y el resto del CYP3A4 (sulfona).', ref: rengR(`${RENG_PK} › Metabolism`, 'The major part of esomeprazole’s metabolism is dependent upon the CYP2C19 isoenzyme, which forms the hydroxy and desmethyl metabolites') },
        { t: 'Es un inhibidor dependiente del tiempo del CYP2C19: se autoinhibe y su farmacocinética no es lineal.', ref: rengR(`${RENG_PK} › Absorption`, 'Esomeprazole is a time-dependent inhibitor of CYP2C19, resulting in autoinhibition and nonlinear pharmacokinetics') }
      ],
      metabolitos: [
        { nombre: 'Hidroxi- y desmetil-esomeprazol (CYP2C19)', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'which forms the hydroxy and desmethyl metabolites') },
        { nombre: 'Sulfona de esomeprazol (CYP3A4)', nombreFuente: 'sulphone metabolite', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'The remaining amount is dependent on CYP3A4 which forms the sulphone metabolite') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos inactivos llegan a los riñones y al intestino.',
      ocurre: 'Un 80 % de la dosis sale por la orina como metabolitos inactivos y el resto por las heces; sin cambios, menos del 1 %. Su semivida en el plasma es de 1-1,5 horas, aunque el efecto sobre la bomba dura más.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 80 % de la dosis oral se excreta como metabolitos inactivos en la orina y el resto en las heces; menos del 1 % sale sin cambios en la orina.', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 80% of an oral dose of esomeprazole is excreted as inactive metabolites in the urine') },
        { t: 'La semivida de eliminación plasmática es de 1 a 1,5 horas.', ref: rengR(`${RENG_PK} › Excretion`, 'The plasma elimination half-life of esomeprazole is approximately 1 to 1.5 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '≈ 1,5', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'occur at approximately 1.5 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad (40 mg: dosis única → repetida)', valor: '64 → 90', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'approximately 90% compared to 64% after a single dose of 40 mg') },
    { magnitud: 'comida', nombre: 'Con comida: AUC', valor: '−43 a −53', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'is decreased by 43% to 53% after food intake') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '97', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'Esomeprazole is 97% bound to plasma proteins') },
    { magnitud: 'vd', nombre: 'Volumen aparente (estado estacionario)', valor: '≈ 16', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The apparent volume of distribution at steady state in healthy subjects is approximately 16 L') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática', valor: '1-1,5', unidad: 'h', ref: rengR(`${RENG_PK} › Excretion`, 'is approximately 1 to 1.5 hours') },
    { magnitud: 'orina', nombre: 'Metabolitos inactivos en la orina', valor: '≈ 80', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Excretion`, 'Approximately 80% of an oral dose') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'f4853677-1622-4037-688b-fdf533a11d96', 'NEXIUM (esomeprazole magnesium) capsule, delayed release; granule, delayed release', 'NEXIUM (AstraZeneca Pharmaceuticals LP)', '74', '2026-04-13', '2026-11-10'), rengPubchem(9568614, 'Esomeprazole', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
