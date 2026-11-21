import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidroxicloroquina',
    nombre: 'Hidroxicloroquina',
    clase: 'Antipalúdico y antirreumático',
    sinonimos: [ 'hydroxychloroquine' ],
    formula: 'C18H26ClN3O',
    masaMolar: 335.9,
    smiles: 'CCN(CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl)CCO',
    inchikey: 'XXSMGPRMXLTPCZ-UHFFFAOYSA-N',
    cid: 3652,
    iupac: '2-[4-[(7-chloroquinolin-4-yl)amino]pentyl-ethylamino]ethanol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'hidroxicloroquina-oral',
      producto: 'Plaquenil · comprimido recubierto',
      titular: 'ADVANZ PHARMA (US) CORP.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '200 mg',
      sal: {
        nombre: 'sulfato de hidroxicloroquina',
        ref: { f: 'dailymed-hidroxicloroquina', sec: '3 · Forma farmacéutica', cita: '200 mg of hydroxychloroquine sulfate' }
      },
      excipientes: [
        'calcium phosphate, dibasic, anhydrous',
        'hypromellose 2910 (6 mpa.s)',
        'magnesium stearate',
        'polyethylene glycol 400',
        'polysorbate 80',
        'starch, corn',
        'titanium dioxide',
        'carnauba wax',
        'ferrosoferric oxide'
      ],
      usos: {
        t: 'Paludismo no complicado por las especies indicadas en la etiqueta y determinados usos en artritis reumatoide y lupus.',
        ref: { f: 'dailymed-hidroxicloroquina', sec: '1 · Indicaciones', cita: 'Treatment of uncomplicated malaria' }
      },
      fuente: 'dailymed-hidroxicloroquina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de sulfato de hidroxicloroquina para administración oral.',
    usos: 'Paludismo no complicado por las especies indicadas en la etiqueta y determinados usos en artritis reumatoide y lupus.',
    actua: 'La hidroxicloroquina tiene actividad antipalúdica e inmunomoduladora. En artritis reumatoide y lupus, el mecanismo exacto no se conoce por completo.',
    recorrido: 'En el estudio en ayunas, la biodisponibilidad oral absoluta media fue del 79 %. La recuperación renal de hidroxicloroquina sin modificar fue de aproximadamente el 16–30 % de la dosis en estudios orales e intravenosos.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Plaquenil por vía oral.',
      ocurre: 'La presentación oral es un comprimido recubierto que contiene sulfato de hidroxicloroquina.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación oral es un comprimido recubierto que contiene sulfato de hidroxicloroquina.',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '3 · Forma farmacéutica', cita: 'film-coated tablet imprinted' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En el estudio en ayunas, la biodisponibilidad oral absoluta media fue del 79 %.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En el estudio en ayunas, la biodisponibilidad oral absoluta media fue del 79 %.',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: '79% (SD: 12%) in fasting conditions' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se distribuye ampliamente a los tejidos. Aproximadamente la mitad se une a proteínas plasmáticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se distribuye ampliamente a los tejidos. Aproximadamente la mitad se une a proteínas plasmáticas.',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: 'PLAQUENIL is extensively distributed to tissues' }
        }
      ],
      accion: {
        diana: null,
        efecto: 'La hidroxicloroquina tiene actividad antipalúdica e inmunomoduladora. En artritis reumatoide y lupus, el mecanismo exacto no se conoce por completo.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'La hidroxicloroquina tiene actividad antipalúdica e inmunomoduladora. En artritis reumatoide y lupus, el mecanismo exacto no se conoce por completo.',
            ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: 'are not fully known' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'sangre' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se detectaron tres metabolitos en sangre y plasma. El principal fue la desetilhidroxicloroquina.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se detectaron tres metabolitos en sangre y plasma. El principal fue la desetilhidroxicloroquina.',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: 'DHCQ being the major metabolite' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Desetilhidroxicloroquina',
          actividad: 'desconocida',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: 'DHCQ being the major metabolite' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La recuperación renal de hidroxicloroquina sin modificar fue de aproximadamente el 16–30 % de la dosis en estudios orales e intravenosos.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La recuperación renal de hidroxicloroquina sin modificar fue de aproximadamente el 16–30 % de la dosis en estudios orales e intravenosos.',
          ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: 'approximately 16% to 30% of the dose' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta media',
      valor: '79',
      unidad: '%',
      condiciones: 'En ayunas',
      ref: { f: 'dailymed-hidroxicloroquina', sec: '12 · Farmacología clínica', cita: '79% (SD: 12%) in fasting conditions' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-hidroxicloroquina', '34496b43-05a2-45fb-a769-52b12e099341', 'PLAQUENIL (HYDROXYCHLOROQUINE SULFATE) TABLET', 'Plaquenil', '15', '2026-05-21', '2026-11-10'),
    rengPubchem(3652, 'hydroxychloroquine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
