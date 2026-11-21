import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'mirabegron',
    nombre: 'Mirabegrón',
    clase: 'Agonista adrenérgico β₃',
    sinonimos: [ 'mirabegron' ],
    formula: 'C21H24N4O2S',
    masaMolar: 396.5,
    smiles: 'C1=CC=C(C=C1)[C@H](CNCCC2=CC=C(C=C2)NC(=O)CC3=CSC(=N3)N)O',
    inchikey: 'PBAPPPCECJKMCM-IBGZPJMESA-N',
    cid: 9865528,
    iupac: '2-(2-amino-1,3-thiazol-4-yl)-N-[4-[2-[[(2R)-2-hydroxy-2-phenylethyl]amino]ethyl]phenyl]acetamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'mirabegron-oral',
      producto: 'Myrbetriq · comprimido de liberación prolongada',
      titular: 'ASTELLAS PHARMA US, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '25 mg',
      excipientes: [
        'polyethylene oxide 2000000',
        'polyethylene glycol 8000',
        'hydroxypropyl cellulose (1600000 wamw)',
        'butylated hydroxytoluene',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'ferric oxide yellow',
        'ferric oxide red'
      ],
      usos: {
        t: 'Vejiga hiperactiva en adultos con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
        ref: { f: 'dailymed-mirabegron', sec: '1 · Indicaciones', cita: 'Overactive bladder (OAB) in adult patients' }
      },
      fuente: 'dailymed-mirabegron'
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada de mirabegrón para administración oral.',
    usos: 'Vejiga hiperactiva en adultos con urgencia, frecuencia urinaria o incontinencia de urgencia según la etiqueta.',
    actua: 'Activa receptores adrenérgicos β₃ y relaja el músculo detrusor mientras la vejiga se llena, lo que aumenta su capacidad.',
    recorrido: 'En voluntarios sanos, el pico plasmático se alcanzó alrededor de 3,5 horas. La biodisponibilidad medida fue del 29 % con el comprimido de 25 mg y del 35 % con el de 50 mg. En su eliminación renal participan la secreción tubular activa y la filtración glomerular.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Myrbetriq por vía oral.',
      ocurre: 'Se documenta el comprimido de liberación prolongada MYRBETRIQ. La etiqueta también describe un granulado para suspensión.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Se documenta el comprimido de liberación prolongada MYRBETRIQ. La etiqueta también describe un granulado para suspensión.',
          ref: { f: 'dailymed-mirabegron', sec: '3 · Forma farmacéutica', cita: 'mirabegron extended-release tablets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En voluntarios sanos, el pico plasmático se alcanzó alrededor de 3,5 horas. La biodisponibilidad medida fue del 29 % con el comprimido de 25 mg y del 35 % con el de 50 mg.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En voluntarios sanos, el pico plasmático se alcanzó alrededor de 3,5 horas. La biodisponibilidad medida fue del 29 % con el comprimido de 25 mg y del 35 % con el de 50 mg.',
          ref: { f: 'dailymed-mirabegron', sec: '12 · Farmacología clínica', cita: 'approximately 3.5 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se distribuye ampliamente y llega a los glóbulos rojos. Alrededor del 71 % se une a proteínas plasmáticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se distribuye ampliamente y llega a los glóbulos rojos. Alrededor del 71 % se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-mirabegron', sec: '12 · Farmacología clínica', cita: 'Mirabegron distributes to erythrocytes' }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico β₃',
        efecto: 'Activa receptores adrenérgicos β₃ y relaja el músculo detrusor mientras la vejiga se llena, lo que aumenta su capacidad.',
        lugar: [ 'vejiga' ],
        datos: [
          {
            t: 'Activa receptores adrenérgicos β₃ y relaja el músculo detrusor mientras la vejiga se llena, lo que aumenta su capacidad.',
            ref: { f: 'dailymed-mirabegron', sec: '12 · Farmacología clínica', cita: 'relaxes the detrusor smooth muscle' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma por varias vías, entre ellas oxidación, glucuronidación e hidrólisis. En plasma se identificaron dos glucurónidos principales.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma por varias vías, entre ellas oxidación, glucuronidación e hidrólisis. En plasma se identificaron dos glucurónidos principales.',
          ref: {
            f: 'dailymed-mirabegron',
            sec: '12 · Farmacología clínica',
            cita: 'dealkylation, oxidation, (direct) glucuronidation, and amide hydrolysis'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En su eliminación renal participan la secreción tubular activa y la filtración glomerular.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En su eliminación renal participan la secreción tubular activa y la filtración glomerular.',
          ref: { f: 'dailymed-mirabegron', sec: '12 · Farmacología clínica', cita: 'primarily through active tubular secretion' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático en voluntarios',
      valor: '≈ 3,5',
      unidad: 'h',
      poblacion: 'Voluntarios sanos',
      ref: { f: 'dailymed-mirabegron', sec: '12 · Farmacología clínica', cita: 'at approximately 3.5 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-mirabegron', 'ba9e9e15-e666-4c56-9271-2e24739cfa2d', 'MYRBETRIQ (MIRABEGRON) TABLET, FILM COATED, EXTENDED RELEASE MYRBETRIQ (MIRABEGRON) GRANULE, FOR SUSPENSION, EXTENDED RELEASE', 'Myrbetriq', '17', '2024-08-20', '2026-11-10'),
    rengPubchem(9865528, 'mirabegron', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
