import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-24612'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_PK = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'prednisona',
    nombre: 'Prednisona',
    clase: 'Glucocorticoide sintético (profármaco de la prednisolona)',
    sinonimos: ['prednisone', 'Dacortín'],
    formula: 'C21H26O5',
    masaMolar: 358.4,
    smiles: 'C[C@]12CC(=O)[C@H]3[C@H]([C@@H]1CC[C@@]2(C(=O)CO)O)CCC4=CC(=O)C=C[C@]34C',
    inchikey: 'XOFYZVNMUHMLCC-ZPOLXVRWSA-N',
    cid: 5865,
    estereo: { descripcion: 'Esteroide con seis estereocentros definidos: es un solo estereoisómero.' },
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'prednisona-dacortin-5',
      producto: 'Dacortín 5 mg comprimidos',
      titular: 'Laboratorios Ern S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'Comprimido',
      liberacion: 'no declarada',
      concentraciones: '5 mg de prednisona por comprimido',
      excipientes: ['lactosa hidratada', 'almidón de maíz', 'povidona', 'carboximetilalmidón de sodio', 'talco', 'estearato de magnesio', 'agua purificada'],
      usos: { t: 'Enfermedades que necesitan glucocorticoides por vía sistémica: sustitución en la insuficiencia suprarrenal y, por su acción antiinflamatoria e inmunosupresora, enfermedades reumáticas, autoinmunes, pulmonares, de la piel, de la sangre, digestivas, renales y oculares, entre otras.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Este medicamento se utiliza para tratar patologías que requieran tratamiento sistémico con glucocorticoides') },
      fuente: RENG_FT,
      nota: 'La misma ficha técnica incluye Dacortín 2,5 mg y 30 mg.'
    }
  ],
  resumen: {
    contiene: 'Comprimido con 5 mg de prednisona (sin sal), lactosa, almidón de maíz y povidona.',
    usos: 'Sustituir el cortisol que falta y frenar la inflamación o la respuesta inmunitaria en muchas enfermedades, según su ficha técnica.',
    actua: 'La prednisona no es activa: el hígado la convierte en prednisolona, que actúa como glucocorticoide sobre el metabolismo de casi todos los tejidos y frena la inflamación y el sistema inmunitario.',
    recorrido: 'Se absorbe rápido y casi por completo, el hígado la activa a prednisolona en el primer paso, se reparte ampliamente y sus metabolitos conjugados salen por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la prednisona.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada comprimido de Dacortín 5 mg contiene 5 mg de prednisona.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Dacortín 5 mg comprimidos: Cada comprimido contiene 5 mg de prednisona') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['vena-porta', 'higado'],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la prednisona liberada.',
      ocurre: 'Se absorbe rápida y casi completamente; el máximo en el plasma llega entre 1 y 3 horas. Por la vena porta llega al hígado, donde casi toda (80-100 %) se convierte en prednisolona, la forma activa.',
      sigue: 'La prednisolona pasa a la circulación general.',
      datos: [
        { t: 'Se absorbe rápida y casi completamente por vía oral; la concentración máxima se alcanza entre 1 y 3 horas.', ref: rengFt(`${RENG_PK} › Absorción`, 'La prednisona se absorbe rápida y casi completamente después de su administración por vía oral') },
        { t: 'Entre el 80 y el 100 % sufre efecto de primer paso hepático y se convierte en prednisolona, que es la forma activa.', ref: rengFt(`${RENG_PK} › Metabolismo`, 'Entre el 80 y el 100% de la prednisona sufre efecto de primer paso hepático y es metabolizada a prednisolona, para ser activa') },
        RENG_GENERAL.portal
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'sistema-inmunitario'],
      llega: 'Circulan la prednisolona y algo de prednisona.',
      ocurre: 'Se unen de forma reversible a la transcortina y a la albúmina del plasma y se reparten ampliamente (0,4-1 L/kg). Como glucocorticoide, actúa sobre el metabolismo de casi todos los tejidos; a dosis altas frena la inflamación y, más tarde, el sistema inmunitario.',
      sigue: 'El hígado sigue metabolizando la prednisolona.',
      simultaneo: 'La activación a prednisolona ocurre ya en el primer paso por el hígado, antes de que el fármaco llegue a los tejidos.',
      datos: [
        { t: 'Se une de forma reversible a la transcortina y a la albúmina y se distribuye ampliamente; su volumen aparente es de 0,4 a 1 L/kg.', ref: rengFt(`${RENG_PK} › Distribución`, 'Se une de forma reversible a la transcortina y a la albúmina plasmática y se distribuye por el organismo de forma amplia') },
        { t: 'La prednisona y la prednisolona pasan a la leche materna en pequeña cantidad (0,07-0,23 % de la dosis).', ref: rengFt(`${RENG_PK} › Metabolismo`, 'La prednisona y prednisolona pasan a la leche materna en pequeña cantidad'), poblacion: 'lactancia' }
      ],
      accion: {
        diana: null,
        efecto: 'Efecto glucocorticoide: antiinflamatorio rápido (antiexudativo y antiproliferativo) e inmunosupresor retrasado; puede sustituir a la hidrocortisona propia.',
        lugar: ['tejidos', 'sistema-inmunitario'],
        datos: [
          { t: 'Afecta, según la dosis, al metabolismo de casi todos los tejidos y regula la actividad del sistema inmunitario.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'afecta, dependiendo de la dosis, al metabolismo de casi todos los tejidos') },
          { t: 'A dosis mayores que las de sustitución tiene un efecto antiinflamatorio rápido y un efecto inmunosupresor retrasado: inhibe la quimiotaxis y la actividad de las células inmunitarias y la liberación de mediadores como prostaglandinas y leucotrienos.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'la prednisona tiene un rápido efecto antiflogístico (antiexudativo y antiproliferativo) y un retrasado efecto inmunosupresor') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La prednisolona vuelve al hígado.',
      ocurre: 'Se metaboliza sobre todo en el hígado: un 70 % por glucuronidación y un 30 % por sulfatación. Una parte se convierte en metabolitos sin actividad hormonal. Su semivida en plasma es de unas 3 horas, pero su efecto biológico dura de 12 a 36 horas.',
      sigue: 'Los metabolitos van a los riñones.',
      datos: [
        { t: 'La prednisolona se metaboliza sobre todo en el hígado, un 70 % por glucuronidación y un 30 % por sulfatación.', ref: rengFt(`${RENG_PK} › Metabolismo`, 'Esta se metaboliza predominantemente en el hígado, un 70 % por glucuronidación y alrededor del 30% por sulfatación') },
        { t: 'Con trastornos graves de la función hepática, la semivida aumenta.', ref: rengFt(`${RENG_PK} › Eliminación`, 'En caso de que existan trastornos severos de la función hepática la semivida se encuentra aumentada'), poblacion: 'insuficiencia hepática grave' }
      ],
      metabolitos: [
        { nombre: 'Prednisolona', nombreFuente: 'prednisolona', actividad: 'activo', nota: 'Forma activa: entre el 80 y el 100 % de la prednisona se convierte en ella.', smiles: 'C[C@]12C[C@@H]([C@H]3[C@H]([C@@H]1CC[C@@]2(C(=O)CO)O)CCC4=CC(=O)C=C[C@]34C)O', cid: 5755, ref: rengFt(`${RENG_PK} › Metabolismo`, 'es metabolizada a prednisolona, para ser activa') },
        { nombre: 'Glucurónidos y sulfatos de prednisolona', actividad: 'desconocida', ref: rengFt(`${RENG_PK} › Metabolismo`, 'un 70 % por glucuronidación y alrededor del 30% por sulfatación') },
        { nombre: 'Derivados androstadiénicos y pregnadiénicos', actividad: 'inactivo', nota: 'Metabolitos hormonalmente inactivos.', ref: rengFt(`${RENG_PK} › Metabolismo`, 'metabolitos hormonalmente inactivos') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'Los metabolitos llegan a los riñones.',
      ocurre: 'Se elimina sobre todo por vía renal; solo una mínima parte de la prednisona aparece sin cambios en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'La eliminación es principalmente renal; solo una mínima proporción de prednisona aparece inalterada en la orina.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Sólo una mínima proporción de prednisona aparece en la orina de forma inalterada') },
        { t: 'La semivida de eliminación plasmática es de unas 3 horas, pero la semivida biológica es de 12 a 36 horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La semivida de eliminación plasmática es de unas 3 horas pero su semivida biológica asciende a 12-36 h') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-3', unidad: 'h', ref: rengFt(`${RENG_PK} › Absorción`, 'la concentración plasmática máxima se alcanza entre 1 y 3 horas') },
    { magnitud: 'otra', nombre: 'Conversión a prednisolona en el primer paso hepático', valor: '80-100', unidad: '%', ref: rengFt(`${RENG_PK} › Metabolismo`, 'Entre el 80 y el 100% de la prednisona sufre efecto de primer paso hepático') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '0,4-1', unidad: 'L/kg', ref: rengFt(`${RENG_PK} › Distribución`, 'Su volumen aparente de distribución va de 0,4 a 1l/kg') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación plasmática', valor: '≈ 3', unidad: 'h', ref: rengFt(`${RENG_PK} › Eliminación`, 'La semivida de eliminación plasmática es de unas 3 horas') },
    { magnitud: 'otra', nombre: 'Semivida biológica', valor: '12-36', unidad: 'h', ref: rengFt(`${RENG_PK} › Eliminación`, 'su semivida biológica asciende a 12-36 h') }
  ],
  fuentes: [rengFichaCIMA(RENG_FT, '24612', 'Dacortín 5 mg comprimidos (Laboratorios Ern S.A.)', '2026-02-09', '2026-11-10'), rengPubchem(5865, 'Prednisone', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
