import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-68330'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_TY = 'dailymed-tylenol'
const rengTy = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_TY, sec: rengSec, cita: rengCita })

export default {
  activo: {
    id: 'paracetamol',
    nombre: 'Paracetamol',
    clase: 'Analgésico y antipirético (anilida)',
    sinonimos: ['acetaminofén', 'acetaminophen', 'APAP'],
    formula: 'C8H9NO2',
    masaMolar: 151.16,
    smiles: 'CC(=O)NC1=CC=C(C=C1)O',
    inchikey: 'RZVAJINKPMORJF-UHFFFAOYSA-N',
    cid: 1983,
    iupac: 'N-(4-hidroxifenil)acetamida',
    estereo: { descripcion: 'Sin estereocentros: la conectividad lo identifica por completo.' },
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'paracetamol-normon-500',
      producto: 'Paracetamol Normon 500 mg comprimidos EFG',
      titular: 'Laboratorios Normon S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'Comprimido',
      liberacion: 'no declarada',
      concentraciones: '500 mg de paracetamol por comprimido',
      excipientes: ['Povidona', 'almidón de maíz pregelatinizado', 'ácido esteárico'],
      usos: { t: 'Tratamiento de los síntomas del dolor ocasional leve o moderado y de la fiebre.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Tratamiento sintomático del dolor ocasional de intensidad leve o moderada y estados febriles') },
      fuente: RENG_FT
    },
    {
      id: 'paracetamol-tylenol-325',
      producto: 'TYLENOL Regular Strength (comprimido de 325 mg)',
      titular: 'Kenvue Brands LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '325 mg de paracetamol por comprimido',
      excipientes: ['magnesium stearate', 'modified starch', 'powdered cellulose', 'pregelatinized starch', 'sodium starch glycolate'],
      usos: { t: 'Alivia temporalmente dolores leves (cabeza, músculos, espalda, artritis leve, resfriado, dientes, cólicos menstruales) y baja temporalmente la fiebre.', ref: rengTy('Uses', 'temporarily relieves minor aches and pains due to') },
      fuente: RENG_TY,
      nota: 'Etiqueta de venta libre («Drug Facts»): no incluye farmacocinética. El recorrido se documenta con la ficha técnica de Paracetamol Normon 500 mg. El listado estructurado del producto declara menos excipientes que el texto de la etiqueta; se muestran los del texto.',
      recorridoDe: 'paracetamol-normon-500',
      advertencias: [
        { titulo: 'Advertencia sobre el hígado', texto: 'Puede producirse un daño hepático grave si se supera la cantidad máxima diaria, si se toma con otros medicamentos que contienen paracetamol o si un adulto toma 3 o más bebidas alcohólicas al día mientras lo usa.', organos: ['higado'], ref: rengTy('Warnings › Liver warning', 'Severe liver damage may occur if') },
        { titulo: 'Reacciones en la piel', texto: 'El paracetamol puede causar reacciones cutáneas graves (enrojecimiento, ampollas, erupción).', organos: ['piel'], ref: rengTy('Warnings › Allergy alert', 'acetaminophen may cause severe skin reactions') }
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido con 500 mg de paracetamol; los excipientes (povidona, almidón pregelatinizado, ácido esteárico) no son el principio activo.',
    usos: 'Dolor ocasional leve o moderado y fiebre, según su ficha técnica.',
    actua: 'Su mecanismo no está totalmente determinado: probablemente inhibe la síntesis de prostaglandinas en el sistema nervioso central.',
    recorrido: 'Se absorbe rápido y por completo, se reparte por casi todos los tejidos, se metaboliza casi todo (90-95 %) y sus conjugados salen sobre todo por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido de 500 mg, tragado, baja por el esófago hasta el estómago.',
      ocurre: 'El comprimido se disgrega y el paracetamol se disuelve en los líquidos digestivos. La ficha no declara una liberación modificada.',
      sigue: 'El paracetamol ya disuelto queda listo para absorberse.',
      datos: [
        { t: 'Cada comprimido contiene 500 mg de paracetamol.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada comprimido de Paracetamol Normon 500 mg contiene') },
        { t: 'La forma farmacéutica es un comprimido (ranurado y fraccionable).', ref: rengFt('3 Forma farmacéutica', 'Los comprimidos de Paracetamol Normon 500 mg son') },
        RENG_GENERAL.disgregar
      ],
      sinDatos: ['Tiempo de disgregación y de disolución del comprimido']
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el paracetamol disuelto.',
      ocurre: 'Se absorbe de forma rápida y completa: la concentración en la sangre alcanza su máximo, en promedio, a los 30 minutos.',
      sigue: 'Antes de llegar a la circulación general pasa por el hígado, que ya transforma una parte (efecto de primer paso).',
      datos: [
        { t: 'Tras tomarlo por vía oral, la absorción es rápida y completa.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'La absorción de paracetamol tras la administración oral es rápida y completa') },
        { t: 'La concentración plasmática máxima se alcanza, en promedio, a los 30 minutos.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'La concentración plasmática máxima se alcanza en promedio a los 30 minutos') },
        { t: 'Experimenta un efecto de primer paso en el hígado.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'El metabolismo del paracetamol experimenta un efecto de primer paso hepático') },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo del tubo digestivo donde se absorbe', 'Efecto de la comida']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'encefalo'],
      llega: 'Llega a la sangre el paracetamol que no se transformó en el primer paso por el hígado.',
      ocurre: 'Se reparte rápidamente por todos los tejidos y viaja casi libre: solo un 10 % se une a proteínas del plasma. En el sistema nervioso central reduce, probablemente, la síntesis de prostaglandinas: así alivia el dolor; sobre el centro que regula la temperatura, en el hipotálamo, baja la fiebre.',
      sigue: 'La sangre lo lleva al hígado, donde se transforma.',
      simultaneo: 'Mientras actúa, el hígado ya lo está transformando y los riñones eliminan los conjugados.',
      datos: [
        { t: 'Se distribuye rápidamente por todos los tejidos; las concentraciones son comparables en sangre, saliva y plasma.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'El paracetamol se distribuye rápidamente por todos los tejidos') },
        { t: 'La unión a proteínas plasmáticas es débil, de un 10 %.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'La unión a las proteínas plasmáticas es débil, el grado de unión es de un 10%') },
        { t: 'El efecto máximo llega a las 1-3 horas y dura 3-4 horas.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'El tiempo que transcurre hasta lograr el efecto máximo es de 1 a 3 horas') }
      ],
      accion: {
        diana: 'Síntesis de prostaglandinas en el sistema nervioso central (mecanismo no totalmente determinado)',
        efecto: 'Analgésico y antipirético: alivia el dolor y baja la fiebre (con vasodilatación y sudor en la piel, que disipan calor).',
        lugar: ['encefalo', 'piel'],
        datos: [
          { t: 'El mecanismo de la acción analgésica no está totalmente determinado; puede actuar sobre todo inhibiendo la síntesis de prostaglandinas en el sistema nervioso central.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'El mecanismo de acción analgésica no está totalmente determinado') },
          { t: 'El efecto antipirético probablemente se produce sobre el centro hipotalámico que regula la temperatura, con vasodilatación periférica, más sudor y más flujo de sangre en la piel.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'centro hipotalámico regulador de la temperatura') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'El paracetamol que circula llega al hígado.',
      ocurre: 'Se metaboliza en un 90-95 %, sobre todo uniéndose al ácido glucurónico y, en menor proporción, al ácido sulfúrico y a la cisteína. Con dosis elevadas, esas vías se saturan y se forman metabolitos tóxicos para el hígado al agotarse el glutatión.',
      sigue: 'Los conjugados, solubles en agua, vuelven a la sangre y llegan a los riñones.',
      datos: [
        { t: 'Se metaboliza en un 90-95 % y se elimina sobre todo como conjugado con ácido glucurónico.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'siendo eliminado mayoritariamente en la orina como un conjugado con el ácido glucurónico') },
        { t: 'Sigue una cinética lineal que se pierde con dosis superiores a 2 g.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'esta linealidad desaparece cuando se administran dosis superiores a 2 g') },
        { t: 'Dosis elevadas saturan la metabolización hepática habitual: se usan vías alternativas que dan metabolitos hepatotóxicos y posiblemente nefrotóxicos, por agotamiento de glutatión.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'Dosis elevadas pueden saturar los mecanismos habituales de metabolización hepática') },
        { t: 'Su semivida de eliminación es de 1,5-3 horas; aumenta en sobredosis, insuficiencia hepática, ancianos y niños.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'Su semivida de eliminación es de 1,5-3 horas') }
      ],
      metabolitos: [
        { nombre: 'Conjugado con ácido glucurónico (glucurónido)', actividad: 'desconocida', smiles: 'CC(=O)NC1=CC=C(C=C1)O[C@H]2[C@@H]([C@H]([C@@H]([C@H](O2)C(=O)O)O)O)O', cid: 83944, nota: 'El principal: se elimina por la orina.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'como un conjugado con el ácido glucurónico') },
        { nombre: 'Conjugados con ácido sulfúrico y con cisteína', actividad: 'desconocida', ref: rengFt('5.2 Propiedades farmacocinéticas', 'en menor proporción con ácido sulfúrico y la cisteína') },
        { nombre: 'Metabolitos de las vías alternativas (dosis elevadas)', actividad: 'tóxico', nota: 'Hepatotóxicos y posiblemente nefrotóxicos; la ficha no los nombra ni da su estructura.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'metabolitos hepatotóxicos y posiblemente nefrotóxicos') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Llegan a los riñones los conjugados y una pequeña parte de paracetamol sin cambios.',
      ocurre: 'Se eliminan por la orina, sobre todo como glucurónido; menos del 5 % sale inalterado.',
      sigue: 'Fin del recorrido. En la insuficiencia renal grave la eliminación del paracetamol y sus metabolitos se retrasa.',
      datos: [
        { t: 'Menos del 5 % se excreta en forma inalterada.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'menos del 5% se excreta en forma inalterada') },
        { t: 'Con insuficiencia renal grave (aclaramiento de creatinina inferior a 10 ml/min) la eliminación se retrasa.', ref: rengFt('5.2 Propiedades farmacocinéticas', 'la eliminación del paracetamol y de sus metabolitos se ve retardada'), poblacion: 'insuficiencia renal grave' }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '30 (promedio)', unidad: 'min', ref: rengFt('5.2 Propiedades farmacocinéticas', 'se alcanza en promedio a los 30 minutos') },
    { magnitud: 'otra', nombre: 'Tiempo hasta el efecto máximo', valor: '1-3', unidad: 'h', ref: rengFt('5.2 Propiedades farmacocinéticas', 'hasta lograr el efecto máximo es de 1 a 3 horas') },
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '10', unidad: '%', ref: rengFt('5.2 Propiedades farmacocinéticas', 'el grado de unión es de un 10%') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '1,5-3', unidad: 'h', condiciones: 'aumenta en sobredosis, insuficiencia hepática, ancianos y niños', ref: rengFt('5.2 Propiedades farmacocinéticas', 'Su semivida de eliminación es de 1,5-3 horas') },
    { magnitud: 'orina', nombre: 'Excretado sin cambios en la orina', valor: '< 5', unidad: '% de la dosis', ref: rengFt('5.2 Propiedades farmacocinéticas', 'menos del 5% se excreta en forma inalterada') }
  ],
  fuentes: [
    rengFichaCIMA(RENG_FT, '68330', 'Paracetamol Normon 500 mg comprimidos EFG (Laboratorios Normon S.A.)', '2025-03-15', '2026-11-09'),
    rengEtiquetaFDA(RENG_TY, '1622f694-4d63-4c56-8737-fae31f0ecfb7', 'TYLENOL Regular Strength (acetaminophen) tablet · Drug Facts', 'TYLENOL Regular Strength (Kenvue Brands LLC)', '13', '2026-05-28', '2026-11-09'),
    rengPubchem(1983, 'Acetaminophen', '2026-11-09')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
