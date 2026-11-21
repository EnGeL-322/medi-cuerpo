import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-22974'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_PK = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'nitrofurantoina',
    nombre: 'Nitrofurantoína',
    clase: 'Antibacteriano urinario (nitrofurano)',
    sinonimos: ['nitrofurantoin', 'Furantoína'],
    formula: 'C8H6N4O5',
    masaMolar: 238.16,
    smiles: 'C1C(=O)NC(=O)N1/N=C/C2=CC=C(O2)[N+](=O)[O-]',
    inchikey: 'NXFQHRVNIOXGAQ-YCRREMRBSA-N',
    cid: 6604200,
    estereo: { descripcion: 'Sin estereocentros; el doble enlace C=N tiene configuración E.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'nitrofurantoina-furantoina-50',
      producto: 'Furantoína 50 mg comprimidos',
      titular: 'Laboratorios Ern S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido ranurado',
      formaFuente: 'Comprimido',
      liberacion: 'no declarada',
      concentraciones: '50 mg de nitrofurantoína por comprimido',
      excipientes: ['povidona', 'carboximetilalmidón sódico (tipo A, de patata)', 'hidrógenofosfato de calcio dihidrato', 'talco', 'estearato de magnesio'],
      usos: { t: 'Cistitis aguda en niñas mayores de 6 años, adolescentes y mujeres adultas.', ref: rengFt('4.1 Indicaciones terapéuticas', 'está indicada en el tratamiento de la cistitis aguda') },
      fuente: RENG_FT
    }
  ],
  resumen: {
    contiene: 'Comprimido amarillo con 50 mg de nitrofurantoína (sin sal), povidona, fosfato cálcico y talco.',
    usos: 'Cistitis aguda (infección de la vejiga), según su ficha técnica.',
    actua: 'Inhibe varios sistemas enzimáticos de las bacterias; su mecanismo bactericida exacto no está bien establecido.',
    recorrido: 'Se absorbe rápido, pero en sangre y tejidos queda poca y por poco tiempo (20-30 minutos); la mitad se metaboliza y un 40 % llega activa a la orina, donde alcanza concentraciones altas.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la nitrofurantoína.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada comprimido contiene 50 mg de nitrofurantoína.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada comprimido contiene 50 mg de nitrofurantoína') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la nitrofurantoína liberada.',
      ocurre: 'Se absorbe rápido; tomarla con comida aumenta la absorción.',
      sigue: 'Pasa a la sangre.',
      datos: [{ t: 'La absorción oral es rápida y aumenta si se toma a la vez que alimentos.', ref: rengFt(`${RENG_PK} › Absorción`, 'La absorción por vía oral de la nitrofurantoína es rápida y se ve aumentada por la ingesta simultánea de alimentos'), condiciones: 'con alimentos' }],
      sinDatos: ['Biodisponibilidad', 'Tiempo hasta la concentración máxima', 'Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre'],
      llega: 'La nitrofurantoína circula por la sangre, pero poco tiempo.',
      ocurre: 'En sangre y tejidos sus concentraciones son bajas y su semivida es de solo 20-30 minutos. Se une a proteínas en un 20-60 %. Donde sí se concentra es en la orina.',
      sigue: 'Una mitad se metaboliza; la otra va a los riñones.',
      datos: [{ t: 'A dosis terapéuticas, las concentraciones en plasma y tejidos son bajas, con una semivida de 20-30 minutos; se une a proteínas en un 20-60 %.', ref: rengFt(`${RENG_PK} › Distribución`, 'Las concentraciones plasmáticas y tisulares a las dosis terapéuticas son generalmente bajas con una vida media de eliminación de 20-30 min') }],
      sinDatos: ['Volumen de distribución'],
      accion: {
        diana: 'Varios sistemas enzimáticos bacterianos (mecanismo no bien establecido)',
        efecto: 'Bactericida frente a bacterias gramnegativas y grampositivas; se usa en la cistitis.',
        lugar: ['vias-urinarias', 'vejiga'],
        datos: [
          { t: 'Su mecanismo bactericida no está bien establecido, aunque inhibe varios sistemas enzimáticos de bacterias gramnegativas y grampositivas.', ref: rengFt('5.1 Propiedades farmacodinámicas', 'El mecanismo de acción bactericida no está bien establecido') },
          { t: 'En la orina alcanza concentraciones máximas de 50-150 µg/mL durante las tres primeras horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'las concentraciones urinarias máximas son de 50 a 150 microgramos/ml durante las tres primeras horas') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Una parte de la nitrofurantoína absorbida se transforma.',
      ocurre: 'Aproximadamente la mitad de lo absorbido se metaboliza. La ficha no dice dónde ni en qué compuestos.',
      sigue: 'Lo metabolizado sale sobre todo por el intestino; lo inalterado, por la orina.',
      datos: [{ t: 'Aproximadamente la mitad de la nitrofurantoína absorbida se metaboliza.', ref: rengFt(`${RENG_PK} › Metabolismo o Biotransformación`, 'Aproximadamente la mitad de la nitrofurantoína absorbida es metabolizada') }],
      sinDatos: ['Órgano y enzimas del metabolismo', 'Identidad y actividad de los metabolitos'],
      formas: ['disuelto', 'metabolito'],
      metabolitos: [{ nombre: 'Metabolitos (sin identificar en la ficha)', actividad: 'desconocida', ref: rengFt(`${RENG_PK} › Metabolismo o Biotransformación`, 'Aproximadamente la mitad de la nitrofurantoína absorbida es metabolizada') }]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'vejiga', 'heces'],
      llega: 'La nitrofurantoína inalterada llega a los riñones; los metabolitos, al intestino.',
      ocurre: 'Un 40 % de lo absorbido sale por la orina sin cambios y todavía activo: así llega a la vejiga. La fracción metabolizada se excreta sobre todo por el intestino.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Alrededor del 40 % de la dosis absorbida se recupera en la orina como compuesto inalterado y activo.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Alrededor del 40% de la dosis absorbida se recupera en la orina en forma de compuesto inalterado y activo') },
        { t: 'La fracción metabolizada se excreta principalmente por vía intestinal.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La fracción metabolizada se excreta principalmente por vía intestinal') }
      ],
      formas: ['disuelto', 'metabolito']
    }
  },
  cifras: [
    { magnitud: 'union', nombre: 'Unión a proteínas plasmáticas', valor: '20-60', unidad: '%', ref: rengFt(`${RENG_PK} › Distribución`, 'se une en un 20-60% a las proteínas plasmáticas') },
    { magnitud: 'semivida', nombre: 'Semivida de eliminación', valor: '20-30', unidad: 'min', ref: rengFt(`${RENG_PK} › Distribución`, 'con una vida media de eliminación de 20-30 min') },
    { magnitud: 'orina', nombre: 'Inalterada y activa en la orina', valor: '≈ 40', unidad: '% de la dosis', condiciones: 'de la dosis absorbida', ref: rengFt(`${RENG_PK} › Eliminación`, 'Alrededor del 40% de la dosis absorbida se recupera en la orina') },
    { magnitud: 'cmax', nombre: 'Concentración máxima en la orina (primeras 3 h)', valor: '50-150', unidad: 'µg/mL', ref: rengFt(`${RENG_PK} › Eliminación`, 'son de 50 a 150 microgramos/ml') }
  ],
  fuentes: [rengFichaCIMA(RENG_FT, '22974', 'Furantoína 50 mg comprimidos (Laboratorios Ern S.A.)', '2019-02-28', '2026-11-10'), rengPubchem(6604200, 'Nitrofurantoin', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
