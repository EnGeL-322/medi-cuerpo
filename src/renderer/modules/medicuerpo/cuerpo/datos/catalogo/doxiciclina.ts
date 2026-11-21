import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-46406'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_PK = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'doxiciclina',
    nombre: 'Doxiciclina',
    clase: 'Antibacteriano: tetraciclina',
    sinonimos: ['doxycycline', 'Vibracina'],
    formula: 'C22H24N2O8',
    masaMolar: 444.4,
    smiles: 'C[C@@H]1[C@H]2[C@@H]([C@H]3[C@@H](C(=O)C(=C([C@]3(C(=O)C2=C(C4=C1C=CC=C4O)O)O)O)C(=O)N)N(C)C)O',
    inchikey: 'SGKRLCUYIXIAHR-AKNGSSGZSA-N',
    cid: 54671203,
    estereo: { descripcion: 'Seis estereocentros definidos: es un solo estereoisómero.' },
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'doxiciclina-vibracina-100',
      producto: 'Vibracina 100 mg cápsulas duras',
      titular: 'Hospira Invicta S.A.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'Cápsula dura',
      liberacion: 'no declarada',
      concentraciones: '100 mg de doxiciclina (como hiclato) por cápsula',
      sal: { nombre: 'Hiclato de doxiciclina', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada cápsula dura contiene 100 mg de doxiciclina (como hiclato)') },
      excipientes: ['lactosa monohidrato', 'estearato de magnesio', 'lauril sulfato de sodio', 'almidón de maíz', 'ácido algínico', 'cápsula: gelatina, óxido de hierro amarillo, indigotina, dióxido de titanio, laca shellac'],
      usos: { t: 'En adultos, adolescentes y niños mayores de 8 años: neumonía atípica, psitacosis, uretritis y cervicitis no gonocócicas, enfermedad inflamatoria pélvica, tracoma y otras infecciones.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Vibracina está indicado en adultos, adolescentes y niños mayores de 8 años para el tratamiento de las siguientes infecciones') },
      fuente: RENG_FT
    }
  ],
  resumen: {
    contiene: 'Cápsula verde con 100 mg de doxiciclina en forma de hiclato (sal), lactosa y almidón de maíz.',
    usos: 'Diversas infecciones bacterianas, según su ficha técnica.',
    actua: 'Es sobre todo bacteriostática: frena la síntesis de proteínas de las bacterias.',
    recorrido: 'Se absorbe casi entera en la parte alta del intestino delgado, se reparte bien por los tejidos, apenas se metaboliza y sale sobre todo por el intestino (bilis y secreción intestinal) y en parte por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'La cápsula llega al estómago.',
      ocurre: 'La gelatina se disuelve y libera el hiclato de doxiciclina.',
      sigue: 'Pasa a la parte alta del intestino delgado.',
      datos: [{ t: 'Cada cápsula dura contiene 100 mg de doxiciclina como hiclato.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada cápsula dura contiene 100 mg de doxiciclina (como hiclato)') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['duodeno', 'intestino-delgado'],
      llega: 'Llega la doxiciclina liberada.',
      ocurre: 'Se absorbe casi por completo (más del 90 %) en la parte alta del intestino delgado. El máximo llega en 1-2 horas. A diferencia de otras tetraciclinas, la comida y la leche apenas la afectan; los preparados de hierro sí reducen su absorción.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se absorbe casi completamente (más del 90 % de la dosis) en la parte superior del intestino delgado.', ref: rengFt(`${RENG_PK} › Absorción`, 'doxiciclina se absorbe casi completamente (superior al 90% de la dosis) en la parte superior del intestino delgado') },
        { t: 'La Cmax se alcanza en 1-2 horas; con 200 mg, es de 2,6 µg/mL a las dos horas.', ref: rengFt(`${RENG_PK} › Absorción`, 'La C max se alcanza tras 1 - 2 horas') },
        { t: 'Los preparados con hierro disminuyen su absorción.', ref: rengFt(`${RENG_PK} › Absorción`, 'La administración con preparados que contienen hierro disminuyen la absorción'), condiciones: 'con hierro' }
      ]
    },
    distribucion: {
      organos: ['sangre', 'higado', 'bilis', 'rinones', 'pulmones', 'huesos', 'organos-reproductores'],
      llega: 'La doxiciclina circula por la sangre.',
      ocurre: 'Un 80-90 % va unida a proteínas y se reparte rápido por todo el cuerpo (0,75 L/kg). Alcanza concentraciones altas en la bilis y difunde bien al hígado, los riñones, el pulmón, el bazo, los huesos y los genitales; al encéfalo pasa poco. Allí donde hay bacterias sensibles frena su síntesis de proteínas.',
      sigue: 'Casi no se transforma; sale por el intestino y la orina.',
      datos: [
        { t: 'Se une en un 80-90 % a proteínas plasmáticas; su volumen de distribución aparente es de unos 0,75 L/kg.', ref: rengFt(`${RENG_PK} › Distribución`, 'El porcentaje de unión a proteínas plasmáticas de doxiciclina es del 80 - 90%') },
        { t: 'Alcanza una concentración biliar alta y buena difusión tisular, sobre todo en hígado, riñones, pulmón, bazo, huesos y órganos genitales; el paso al encéfalo en la meningitis es bajo.', ref: rengFt(`${RENG_PK} › Distribución`, 'Se alcanza una concentración biliar alta y una buena difusión tisular, especialmente en hígado, riñones, pulmón, bazo, huesos y órganos genitales') }
      ],
      accion: {
        diana: 'Síntesis de proteínas bacteriana',
        efecto: 'Bacteriostática principalmente.',
        lugar: ['sitio-infeccion'],
        datos: [{ t: 'Es principalmente bacteriostática y se cree que actúa inhibiendo la síntesis proteica.', ref: rengFt('5.1 Propiedades farmacodinámicas › Mecanismo de acción', 'Doxiciclina es principalmente bacteriostática y se cree que ejerce su efecto antimicrobiano mediante la inhibición de la síntesis proteica') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'La doxiciclina circula casi sin transformarse.',
      ocurre: 'Solo se metaboliza una pequeña parte (10 % o menos de la dosis). Con la función hepática alterada su semivida puede alargarse.',
      sigue: 'Va al intestino y a los riñones.',
      datos: [
        { t: 'Solo se metaboliza una pequeña parte (10 % de la dosis o menos).', ref: rengFt(`${RENG_PK} › Biotransformación/Eliminación`, 'Sólo una pequeña parte de doxiciclina se metaboliza') },
        { t: 'En la disfunción hepática la semivida puede prolongarse.', ref: rengFt(`${RENG_PK} › Distribución`, 'En aquéllos con disfunción hepática, la semivida plasmática puede prolongarse aún más'), poblacion: 'disfunción hepática' }
      ],
      sinDatos: ['Identidad de los metabolitos', 'Órgano del metabolismo'],
      formas: ['disuelto'],
      metabolitos: [{ nombre: 'Metabolitos (≤ 10 % de la dosis; sin identificar en la ficha)', actividad: 'desconocida', ref: rengFt(`${RENG_PK} › Biotransformación/Eliminación`, 'Sólo una pequeña parte de doxiciclina se metaboliza') }]
    },
    excrecion: {
      organos: ['bilis', 'heces', 'rinones', 'orina'],
      llega: 'La doxiciclina llega a la bilis, a la pared intestinal y a los riñones.',
      ocurre: 'Sale sobre todo por el intestino (secreción a través de la pared intestinal y por la bilis) y en parte (30-55 %) por la orina; con riñones sanos, un 40 % sale por la orina en 72 horas. Su semivida es de unas 16 horas (18-22 en otros estudios) y apenas cambia en la insuficiencia renal.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Se excreta sobre todo por vía intestinal (secreción transintestinal y biliar) y en parte (30-55 %) por vía renal.', ref: rengFt(`${RENG_PK} › Biotransformación/Eliminación`, 'Se excreta principalmente por vía intestinal (secreción transintestinal y biliar) y otra parte (30 - 55%) por vía renal') },
        { t: 'Con función renal normal, un 40 % se excreta por el riñón en 72 horas; en la insuficiencia renal grave baja al 1-5 %, sin cambios importantes en la semivida (18-22 horas).', ref: rengFt(`${RENG_PK} › Biotransformación/Eliminación`, 'Los estudios no han demostrado diferencias significativas en la semivida plasmática de doxiciclina (rango: 18 a 22 horas)') },
        { t: 'La semivida plasmática en voluntarios sanos es de unas 16 ± 6 horas.', ref: rengFt(`${RENG_PK} › Distribución`, 'La semivida plasmática en voluntarios sanos es, aproximadamente, de 16 ± 6 horas'), poblacion: 'voluntarios sanos' }
      ],
      formas: ['disuelto']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Fracción absorbida', valor: '> 90', unidad: '%', ref: rengFt(`${RENG_PK} › Absorción`, 'superior al 90% de la dosis') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima', valor: '1-2', unidad: 'h', ref: rengFt(`${RENG_PK} › Absorción`, 'La C max se alcanza tras 1 - 2 horas') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '80-90', unidad: '%', ref: rengFt(`${RENG_PK} › Distribución`, 'es del 80 - 90%') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '≈ 0,75', unidad: 'L/kg', ref: rengFt(`${RENG_PK} › Distribución`, 'el volumen de distribución aparente de doxiciclina es aprox. de 0,75 l/kg') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática (voluntarios sanos)', valor: '16 ± 6', unidad: 'h', ref: rengFt(`${RENG_PK} › Distribución`, 'es, aproximadamente, de 16 ± 6 horas') },
    { magnitud: 'orina', nombre: 'Excretado por el riñón (72 h)', valor: '≈ 40', unidad: '% de la dosis', poblacion: 'función renal normal', ref: rengFt(`${RENG_PK} › Biotransformación/Eliminación`, 'La excreción de doxiciclina por el riñón es de, aproximadamen te, 40% a las 72 horas') }
  ],
  fuentes: [rengFichaCIMA(RENG_FT, '46406', 'Vibracina 100 mg cápsulas duras (Hospira Invicta S.A.)', '2026-10-20', '2026-11-10'), rengPubchem(54671203, 'Doxycycline', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
