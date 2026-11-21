import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-82547'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_PK = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'hidroclorotiazida',
    nombre: 'Hidroclorotiazida',
    clase: 'Diurético tiazídico',
    sinonimos: ['hydrochlorothiazide', 'HCTZ', 'Hidrosaluretil'],
    formula: 'C7H8ClN3O4S2',
    masaMolar: 297.7,
    smiles: 'C1NC2=CC(=C(C=C2S(=O)(=O)N1)S(=O)(=O)N)Cl',
    inchikey: 'JZUFKLXOESDKRF-UHFFFAOYSA-N',
    cid: 3639,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Corazón y vasos'
  },
  presentaciones: [
    {
      id: 'hidroclorotiazida-hidrosaluretil-25',
      producto: 'Hidrosaluretil 25 mg comprimidos EFG',
      titular: 'Chiesi España S.A.U.',
      mercado: 'España (UE)',
      forma: 'Comprimido',
      formaFuente: 'Comprimido',
      liberacion: 'no declarada',
      concentraciones: '25 mg de hidroclorotiazida por comprimido',
      excipientes: ['lactosa monohidrato', 'almidón de maíz', 'celulosa microcristalina', 'estearato de magnesio', 'hipromelosa'],
      usos: { t: 'En adultos: hipertensión arterial (sola o combinada) y edemas por insuficiencia cardiaca, insuficiencia renal o cirrosis, entre otros.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Tratamiento de la hipertensión arterial, como monoterapia o en combinación con otros agentes antihipertensivos') },
      fuente: RENG_FT
    }
  ],
  resumen: {
    contiene: 'Comprimido con 25 mg de hidroclorotiazida (sin sal), lactosa, almidón de maíz y celulosa.',
    usos: 'Hipertensión y edemas, según su ficha técnica.',
    actua: 'Actúa en el túbulo contorneado distal del riñón inhibiendo la reabsorción de sodio y cloro, de modo que se elimina más orina.',
    recorrido: 'Se absorbe un 65-80 %, va a los espacios extracelulares, no se metaboliza y sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera la hidroclorotiazida.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'Cada comprimido contiene 25 mg de hidroclorotiazida.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada comprimido contiene 25 mg de hidroclorotiazida (HCTZ)') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado'],
      llega: 'Llega la hidroclorotiazida liberada.',
      ocurre: 'Se absorbe en el tubo digestivo con una biodisponibilidad del 65-80 %, distinta según la persona. El máximo en el plasma llega entre 1 y 5 horas. La diuresis empieza a las 2 horas y es máxima a las 4. La comida reduce un poco la absorción y la insuficiencia cardiaca también.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe en el tubo digestivo con una biodisponibilidad del 65 al 80 %, según la persona.', ref: rengFt(`${RENG_PK} › Absorción`, 'La hidroclorotiazida se absorbe en el tracto gastrointestinal') },
        { t: 'Con dosis de 12,5-100 mg, la concentración máxima se observó entre 1 y 5 horas.', ref: rengFt(`${RENG_PK} › Absorción`, 'la concentración máxima plasmática de 70-490 ng/ml se observó a entre 1-5 horas') },
        { t: 'La comida retrasa la absorción y la reduce alrededor de un 10 y un 20 % (estudiado con cápsulas).', ref: rengFt(`${RENG_PK} › Absorción`, 'El alimento retrasa la velocidad y disminuye el grado de absorción de cápsulas de hidroclorotiazida'), condiciones: 'con comida' },
        { t: 'La absorción se reduce en la insuficiencia cardiaca congestiva.', ref: rengFt(`${RENG_PK} › Absorción`, 'La absorción de la hidroclorotiazida se ve reducida en pacientes con insuficiencia cardiaca congestiva'), poblacion: 'insuficiencia cardiaca congestiva' }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'tejidos', 'rinones'],
      llega: 'La hidroclorotiazida circula por la sangre.',
      ocurre: 'Se reparte por los espacios extracelulares, se une a proteínas en un 40-68 % y se acumula en los glóbulos rojos. Atraviesa la placenta pero no la barrera hematoencefálica. En el túbulo contorneado distal del riñón inhibe la reabsorción de sodio y cloro.',
      sigue: 'Va sin transformar a los riñones.',
      datos: [
        { t: 'Se distribuye en los espacios extracelulares; se une a proteínas en un 40-68 % y se acumula en los eritrocitos (1,8 veces el nivel del plasma).', ref: rengFt(`${RENG_PK} › Distribución`, 'La unión a proteínas plasmáticas es del orden del 40-68%') },
        { t: 'Su volumen aparente de distribución es de 4-8 L/kg.', ref: rengFt(`${RENG_PK} › Distribución`, 'El volumen aparente de distribución es de 4-8 l/Kg') },
        { t: 'Atraviesa la barrera placentaria pero no la hematoencefálica, y pasa a la leche.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La hidroclorotiazida atraviesa la barrera placentaria pero no la barrera hematoencefálica') }
      ],
      accion: {
        diana: 'Reabsorción de sodio y cloro en el túbulo contorneado distal',
        efecto: 'Diurético; su mecanismo antihipertensivo no se conoce con certeza.',
        lugar: ['rinones'],
        datos: [
          { t: 'Actúa principalmente en el túbulo contorneado distal renal inhibiendo la reabsorción de sodio y cloro.', ref: rengFt('5.1 Propiedades farmacodinámicas › Mecanismo de acción', 'actúa principalmente en el túbulo contorneado distal renal inhibiendo la reabsorción de sodio y cloro') },
          { t: 'Se desconoce el mecanismo de su efecto antihipertensivo; podría relacionarse con la excreción y redistribución del sodio.', ref: rengFt('5.1 Propiedades farmacodinámicas › Mecanismo de acción', 'Se desconoce el mecanismo antihipertensivo de la hidroclorotiazida') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La hidroclorotiazida circula sin transformarse.',
      ocurre: 'No se metaboliza.',
      sigue: 'Llega intacta a los riñones.',
      datos: [{ t: 'No se metaboliza, sino que los riñones la eliminan rápidamente.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La hidroclorotiazida no es metabolizada, sino eliminada rápidamente por los riñones') }],
      formas: ['disuelto'],
      metabolitos: []
    },
    excrecion: {
      organos: ['rinones', 'orina'],
      llega: 'La hidroclorotiazida llega a los riñones.',
      ocurre: 'Un 95 % se excreta sin cambios por la orina (al menos un 61 % en las primeras 24 horas); el riñón aporta el 90 % de su aclaramiento. Su semivida varía mucho entre personas (de 5 a 25 horas) y se alarga en la insuficiencia renal y cardiaca graves.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'El aclaramiento renal es un 90 % del total y un 95 % se excreta sin cambios por la orina.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La hidroclorotiazida se elimina rápidamente por el riñón y un 95% es excretada de forma inalterada por la orina') },
        { t: 'Al menos un 61 % de una dosis oral se elimina sin cambios en la orina en 24 horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Por lo menos 61% de una dosis oral es eliminada inalterada por la orina en 24 horas') },
        { t: 'La semivida plasmática es muy variable entre personas: de 5 a 25 horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'es muy variable de un sujeto a otro, y está comprendida entre las 5 y 25 horas') }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral', valor: '65-80', unidad: '%', ref: rengFt(`${RENG_PK} › Absorción`, 'varía según los sujetos entre del 65 al 80%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-5', unidad: 'h', ref: rengFt(`${RENG_PK} › Absorción`, 'se observó a entre 1-5 horas') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '40-68', unidad: '%', ref: rengFt(`${RENG_PK} › Distribución`, 'es del orden del 40-68%') },
    { magnitud: 'vd', nombre: 'Volumen aparente de distribución', valor: '4-8', unidad: 'L/kg', ref: rengFt(`${RENG_PK} › Distribución`, 'es de 4-8 l/Kg') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática (variable entre personas)', valor: '5-25', unidad: 'h', ref: rengFt(`${RENG_PK} › Eliminación`, 'está comprendida entre las 5 y 25 horas') },
    { magnitud: 'orina', nombre: 'Sin cambios en la orina', valor: '≈ 95', unidad: '% de la dosis', ref: rengFt(`${RENG_PK} › Eliminación`, 'un 95% es excretada de forma inalterada por la orina') }
  ],
  fuentes: [rengFichaCIMA(RENG_FT, '82547', 'Hidrosaluretil 25 mg comprimidos EFG (Chiesi España S.A.U.)', '2024-02-07', '2026-11-10'), rengPubchem(3639, 'Hydrochlorothiazide', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
