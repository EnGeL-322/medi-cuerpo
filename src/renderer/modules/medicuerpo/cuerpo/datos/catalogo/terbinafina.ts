import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'terbinafina',
    nombre: 'Terbinafina',
    clase: 'Antifúngico de la familia de las alilaminas',
    sinonimos: [ 'terbinafine' ],
    formula: 'C21H25N',
    masaMolar: 291.4,
    smiles: 'CC(C)(C)C#C/C=C/CN(C)CC1=CC=CC2=CC=CC=C21',
    inchikey: 'DOMXUEMWDBAQBQ-WEVVVXLNSA-N',
    cid: 1549008,
    iupac: '(E)-N,6,6-trimethyl-N-(naphthalen-1-ylmethyl)hept-2-en-4-yn-1-amine',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'terbinafina-oral',
      producto: 'TERBINAFINE HYDROCHLORIDE · comprimido',
      titular: 'GOLDEN STATE MEDICAL SUPPLY, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 mg',
      sal: {
        nombre: 'clorhidrato de terbinafina',
        ref: { f: 'dailymed-terbinafina', sec: '11 · Descripción', cita: 'terbinafine hydrochloride USP' }
      },
      excipientes: [ 'silicon dioxide', 'croscarmellose sodium', 'hypromellose, unspecified', 'magnesium stearate', 'microcrystalline cellulose' ],
      usos: {
        t: 'Onicomicosis de uñas de manos o pies causada por dermatofitos.',
        ref: { f: 'dailymed-terbinafina', sec: '1 · Indicaciones', cita: 'for the treatment of onychomycosis' }
      },
      fuente: 'dailymed-terbinafina'
    }
  ],
  resumen: {
    contiene: 'Comprimido de clorhidrato de terbinafina para administración oral.',
    usos: 'Onicomicosis de uñas de manos o pies causada por dermatofitos.',
    actua: 'Inhibe la escualeno epoxidasa del hongo. La acumulación de escualeno y los cambios en la membrana contribuyen a la muerte fúngica.',
    recorrido: 'Se absorbe más del 70 %. Tras el metabolismo de primer paso, la biodisponibilidad del comprimido es de aproximadamente el 40 %. Se elimina por la orina aproximadamente el 70 % de la dosis. La eliminación terminal lenta puede reflejar la salida desde la piel y el tejido adiposo.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere TERBINAFINE HYDROCHLORIDE por vía oral.',
      ocurre: 'Este producto contiene clorhidrato de terbinafina, equivalente a 250 mg de terbinafina por comprimido.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'Este producto contiene clorhidrato de terbinafina, equivalente a 250 mg de terbinafina por comprimido.',
          ref: { f: 'dailymed-terbinafina', sec: '3 · Forma farmacéutica', cita: 'Tablet, 250 mg' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe más del 70 %. Tras el metabolismo de primer paso, la biodisponibilidad del comprimido es de aproximadamente el 40 %.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe más del 70 %. Tras el metabolismo de primer paso, la biodisponibilidad del comprimido es de aproximadamente el 40 %.',
          ref: { f: 'dailymed-terbinafina', sec: '12 · Farmacología clínica', cita: 'is well absorbed (greater than 70%)' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'piel' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La unión a proteínas plasmáticas supera el 99 %. La terbinafina también se distribuye al sebo y la piel.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La unión a proteínas plasmáticas supera el 99 %. La terbinafina también se distribuye al sebo y la piel.',
          ref: { f: 'dailymed-terbinafina', sec: '12 · Farmacología clínica', cita: 'distributed to the sebum and skin' }
        }
      ],
      accion: {
        diana: 'Escualeno epoxidasa fúngica',
        efecto: 'Inhibe la escualeno epoxidasa del hongo. La acumulación de escualeno y los cambios en la membrana contribuyen a la muerte fúngica.',
        lugar: [ 'unas' ],
        datos: [
          {
            t: 'Inhibe la escualeno epoxidasa del hongo. La acumulación de escualeno y los cambios en la membrana contribuyen a la muerte fúngica.',
            ref: { f: 'dailymed-terbinafina', sec: '12 · Farmacología clínica', cita: 'inhibition of squalene epoxidase enzyme' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Al menos siete enzimas CYP intervienen en su metabolismo. La etiqueta no identifica metabolitos con actividad antifúngica comparable.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Al menos siete enzimas CYP intervienen en su metabolismo. La etiqueta no identifica metabolitos con actividad antifúngica comparable.',
          ref: { f: 'dailymed-terbinafina', sec: '12 · Farmacología clínica', cita: 'metabolized by at least 7 CYP isoenzymes' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se elimina por la orina aproximadamente el 70 % de la dosis. La eliminación terminal lenta puede reflejar la salida desde la piel y el tejido adiposo.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se elimina por la orina aproximadamente el 70 % de la dosis. La eliminación terminal lenta puede reflejar la salida desde la piel y el tejido adiposo.',
          ref: { f: 'dailymed-terbinafina', sec: '12 · Farmacología clínica', cita: 'administered dose is eliminated in the urine' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral del comprimido',
      valor: '≈ 40',
      unidad: '%',
      ref: {
        f: 'dailymed-terbinafina',
        sec: '12 · Farmacología clínica',
        cita: 'tablets as a result of first-pass metabolism is approximately 40%'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-terbinafina', '50750500-6cb0-62dc-e063-6294a90a15bc', 'TERBINAFINE HYDROCHLORIDE (TERBINAFINE TABLETS 250 MG) TABLET', 'TERBINAFINE HYDROCHLORIDE', '1', '2026-04-29', '2026-11-10'),
    rengPubchem(1549008, 'terbinafine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
