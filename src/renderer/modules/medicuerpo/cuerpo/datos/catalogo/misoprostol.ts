import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'misoprostol',
    nombre: 'Misoprostol',
    clase: 'Análogo de la prostaglandina E1',
    sinonimos: [ 'misoprostol', 'Cytotec' ],
    formula: 'C22H38O5',
    masaMolar: 382.5,
    smiles: 'CCCCC(C)(C/C=C/[C@H]1[C@@H](CC(=O)[C@@H]1CCCCCCC(=O)OC)O)O',
    inchikey: 'OJLOPKGSLYJEMD-URPKTTJQSA-N',
    cid: 5282381,
    iupac: 'methyl 7-[(1R,2R,3R)-3-hydroxy-2-[(E)-4-hydroxy-4-methyloct-1-enyl]-5-oxocyclopentyl]heptanoate',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'misoprostol-oral',
      producto: 'Cytotec · comprimido',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 o 200 microgramos (mcg) por comprimido, según la etiqueta',
      excipientes: [ 'hydrogenated castor oil', 'hypromellose, unspecified', 'microcrystalline cellulose' ],
      usos: {
        t: 'Reducir el riesgo de úlceras gástricas por antiinflamatorios no esteroideos en personas con riesgo alto de complicaciones.',
        ref: {
          f: 'dailymed-misoprostol',
          sec: '1 · Indicaciones',
          cita: 'reducing the risk of NSAID (nonsteroidal anti-inflammatory drugs, including aspirin)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-misoprostol',
      advertencias: [
        {
          titulo: 'Embarazo',
          texto: 'Puede causar defectos congénitos, aborto, parto prematuro o rotura uterina.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-misoprostol',
            sec: 'Advertencia destacada',
            cita: 'CYTOTEC (MISOPROSTOL) ADMINISTRATION TO WOMEN WHO ARE PREGNANT CAN CAUSE BIRTH DEFECTS, ABORTION, PREMATURE BIRTH OR UTERINE RUPTURE',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes son digestivas: diarrea y dolor abdominal.',
          '34084-4',
          'most frequent gastrointestinal adverse events were diarrhea and abdominal pain'
        ],
        [
          'La diarrea depende de la dosis, suele aparecer pronto y casi siempre se resuelve sola.',
          '34084-4',
          'Diarrhea was dose related and usually developed early in the course of therapy'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 100 o 200 microgramos (mcg) por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Reducir el riesgo de úlceras gástricas por antiinflamatorios no esteroideos en personas con riesgo alto de complicaciones.',
    actua: 'Reduce la secreción de ácido del estómago y, en animales, protege la mucosa; actúa sobre receptores de prostaglandinas E.',
    recorrido: 'Se absorbe con rapidez y se transforma enseguida en su ácido libre; el máximo del ácido llega a los 12 ± 3 minutos y la comida lo reduce. Tras el misoprostol marcado, alrededor del 80 % de la radiactividad detectada aparece en la orina; la semivida terminal del ácido es de 20-40 minutos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 100 mcg o 200 mcg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido de 100 mcg o 200 mcg.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '11 · Descripción',
            cita: 'Cytotec oral tablets contain either 100 mcg or 200 mcg of misoprostol',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez y se transforma enseguida en su ácido libre; el máximo del ácido llega a los 12 ± 3 minutos y la comida lo reduce.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez y se transforma enseguida en su ácido libre; el máximo del ácido llega a los 12 ± 3 minutos y la comida lo reduce.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'is rapidly absorbed after oral administration with a T max of misoprostol acid of 12',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida disminuye la concentración máxima del ácido de misoprostol.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'Maximum plasma concentrations of misoprostol acid are diminished when the dose is taken with food',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión del ácido de misoprostol a proteínas del suero es inferior al 90 % y no depende de la concentración.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión del ácido de misoprostol a proteínas del suero es inferior al 90 % y no depende de la concentración.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'The serum protein binding of misoprostol acid is less than 90% and is concentration-independent in the therapeutic range',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de prostaglandina E de la mucosa gástrica',
        efecto: 'Reduce la secreción de ácido del estómago y, en animales, protege la mucosa; actúa sobre receptores de prostaglandinas E.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Reduce la secreción de ácido del estómago y, en animales, protege la mucosa; actúa sobre receptores de prostaglandinas E.',
            ref: {
              f: 'dailymed-misoprostol',
              sec: '12.2 · Farmacodinámica',
              cita: 'Misoprostol has both antisecretory (inhibiting gastric acid secretion) and (in animals) mucosal protective properties',
              codigo: '43681-6'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre una desesterificación rápida hasta su ácido libre, que es el responsable de la actividad; después las cadenas laterales se oxidan. La etiqueta no precisa en qué órgano ocurre.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre una desesterificación rápida hasta su ácido libre, que es el responsable de la actividad; después las cadenas laterales se oxidan. La etiqueta no precisa en qué órgano ocurre.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'undergoes rapid de-esterification to its free acid, which is responsible for its clinical activity',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido de misoprostol (ácido libre)',
          actividad: 'activo',
          nota: 'Es el que se detecta en plasma; el compuesto original no.',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'undergoes rapid de-esterification to its free acid, which is responsible for its clinical activity',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Análogos de prostaglandina F',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-misoprostol',
            sec: '12.3 · Farmacocinética',
            cita: 'followed by reduction of the ketone to give prostaglandin F analogs',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras el misoprostol marcado, alrededor del 80 % de la radiactividad detectada aparece en la orina; la semivida terminal del ácido es de 20-40 minutos.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras el misoprostol marcado, alrededor del 80 % de la radiactividad detectada aparece en la orina; la semivida terminal del ácido es de 20-40 minutos.',
          ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'about 80% of detected radioactivity appears in urine', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo del ácido de misoprostol',
      valor: '12 ± 3',
      unidad: 'min',
      analito: 'ácido de misoprostol',
      poblacion: 'voluntarios normales',
      ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'T max of misoprostol acid of 12 ± 3 minutes', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del ácido de misoprostol',
      valor: '20-40',
      unidad: 'min',
      analito: 'ácido de misoprostol',
      poblacion: 'voluntarios normales',
      ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'terminal half-life of 20–40 minutes', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media (ayunas)',
      valor: '811 ± 317',
      unidad: 'pg/mL',
      analito: 'ácido de misoprostol',
      poblacion: 'voluntarios normales',
      condiciones: 'en ayunas',
      ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'Fasting 811 ± 317 417 ± 135 14 ± 8', codigo: '43682-4' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima media (con desayuno graso)',
      valor: '303 ± 176',
      unidad: 'pg/mL',
      analito: 'ácido de misoprostol',
      poblacion: 'voluntarios normales',
      condiciones: 'con un desayuno rico en grasa',
      ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'With High Fat Breakfast 303 ± 176 373 ± 111 64 ± 79', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del suero',
      valor: '< 90',
      unidad: '%',
      analito: 'ácido de misoprostol',
      ref: {
        f: 'dailymed-misoprostol',
        sec: '12.3 · Farmacocinética',
        cita: 'The serum protein binding of misoprostol acid is less than 90%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad en la orina',
      valor: '80 (aprox.)',
      unidad: '%',
      analito: 'misoprostol y metabolitos',
      condiciones: 'tras misoprostol marcado',
      ref: { f: 'dailymed-misoprostol', sec: '12.3 · Farmacocinética', cita: 'about 80% of detected radioactivity appears in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-misoprostol', '4ab12da7-5731-4e06-bf1c-bc3f2e711f12', 'CYTOTEC (MISOPROSTOL) TABLET', 'Cytotec', '22', '2026-06-05', '2026-11-12'),
    rengPubchem(5282381, 'misoprostol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
