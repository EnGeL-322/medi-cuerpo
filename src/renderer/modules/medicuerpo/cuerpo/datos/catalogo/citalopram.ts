import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'citalopram',
    nombre: 'Citalopram',
    clase: 'Antidepresivo ISRS',
    sinonimos: [ 'citalopram' ],
    formula: 'C20H21FN2O',
    masaMolar: 324.4,
    smiles: 'CN(C)CCCC1(C2=C(CO1)C=C(C=C2)C#N)C3=CC=C(C=C3)F',
    inchikey: 'WSEQXVZVJXJVFP-UHFFFAOYSA-N',
    cid: 2771,
    iupac: '1-[3-(dimethylamino)propyl]-1-(4-fluorophenyl)-3H-2-benzofuran-5-carbonitrile',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'citalopram-oral',
      producto: 'Celexa · comprimido recubierto',
      titular: 'ALLERGAN, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg',
      sal: {
        nombre: 'bromhidrato de citalopram',
        ref: { f: 'dailymed-citalopram', sec: '11 · Descripción', cita: 'Citalopram hydrobromide' }
      },
      excipientes: [
        'copovidone k25-31',
        'starch, corn',
        'croscarmellose sodium',
        'glycerin',
        'lactose monohydrate',
        'magnesium stearate',
        'hypromelloses',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Trastorno depresivo mayor en adultos, según la etiqueta de CELEXA.',
        ref: { f: 'dailymed-citalopram', sec: '1 · Indicaciones', cita: 'major depressive disorder (MDD) in adults' }
      },
      fuente: 'dailymed-citalopram'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de bromhidrato de citalopram para administración oral.',
    usos: 'Trastorno depresivo mayor en adultos, según la etiqueta de CELEXA.',
    actua: 'Se cree que inhibir la recaptación neuronal de serotonina potencia la señal serotoninérgica en el sistema nervioso central.',
    recorrido: 'La biodisponibilidad absoluta fue de alrededor del 80 %. La etiqueta indica que la comida no afecta a la absorción. El aclaramiento renal aportó cerca del 20 % del aclaramiento total. Las fracciones recuperadas en orina que cita la etiqueta proceden de administración intravenosa.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Celexa por vía oral.',
      ocurre: 'CELEXA se presenta como comprimido oral. La etiqueta describe la forma y las cantidades de citalopram en cada comprimido.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'CELEXA se presenta como comprimido oral. La etiqueta describe la forma y las cantidades de citalopram en cada comprimido.',
          ref: { f: 'dailymed-citalopram', sec: '3 · Forma farmacéutica', cita: 'CELEXA tablets are available' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La biodisponibilidad absoluta fue de alrededor del 80 %. La etiqueta indica que la comida no afecta a la absorción.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta fue de alrededor del 80 %. La etiqueta indica que la comida no afecta a la absorción.',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'absorption is not affected by food' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Alrededor del 80 % del citalopram y sus dos metabolitos desmetilados se une a proteínas plasmáticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Alrededor del 80 % del citalopram y sus dos metabolitos desmetilados se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'to human plasma proteins is about 80%' }
        }
      ],
      accion: {
        diana: 'Recaptación neuronal de serotonina',
        efecto: 'Se cree que inhibir la recaptación neuronal de serotonina potencia la señal serotoninérgica en el sistema nervioso central.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Se cree que inhibir la recaptación neuronal de serotonina potencia la señal serotoninérgica en el sistema nervioso central.',
            ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'inhibition of CNS neuronal reuptake of serotonin' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma principalmente en el hígado. Entre los metabolitos están el desmetilcitalopram y el didesmetilcitalopram. El citalopram sin modificar predomina en plasma.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma principalmente en el hígado. Entre los metabolitos están el desmetilcitalopram y el didesmetilcitalopram. El citalopram sin modificar predomina en plasma.',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'Biotransformation of citalopram is mainly hepatic' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desmetilcitalopram',
          actividad: 'activo',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'at least 8 times more potent than its metabolites' }
        },
        {
          nombre: 'Didesmetilcitalopram',
          actividad: 'activo',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'at least 8 times more potent than its metabolites' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El aclaramiento renal aportó cerca del 20 % del aclaramiento total. Las fracciones recuperadas en orina que cita la etiqueta proceden de administración intravenosa.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El aclaramiento renal aportó cerca del 20 % del aclaramiento total. Las fracciones recuperadas en orina que cita la etiqueta proceden de administración intravenosa.',
          ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'due to renal clearance' },
          alcance: 'otra-presentacion',
          condiciones: 'Datos de administración intravenosa'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '35',
      unidad: 'h',
      ref: { f: 'dailymed-citalopram', sec: '12 · Farmacología clínica', cita: 'terminal half-life of about 35 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-citalopram', '4259d9b1-de34-43a4-85a8-41dd214e9177', 'CELEXA (CITALOPRAM) TABLET, FILM COATED', 'Celexa', '40', '2026-08-20', '2026-11-10'),
    rengPubchem(2771, 'citalopram', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
