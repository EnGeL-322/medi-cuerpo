import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lamivudina',
    nombre: 'Lamivudina',
    clase: 'Antirretroviral análogo de nucleósido',
    sinonimos: [ 'lamivudine' ],
    formula: 'C8H11N3O3S',
    masaMolar: 229.26,
    smiles: 'C1[C@H](O[C@H](S1)CO)N2C=CC(=NC2=O)N',
    inchikey: 'JTEGQNOMFQHVDC-NKWVEPMBSA-N',
    cid: 60825,
    iupac: '4-amino-1-[(2R,5S)-2-(hydroxymethyl)-1,3-oxathiolan-5-yl]pyrimidin-2-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'lamivudina-oral',
      producto: 'EPIVIR · comprimido recubierto',
      titular: 'VIIV HEALTHCARE COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg',
      excipientes: [
        'hypromellose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'polysorbate 80',
        'sodium starch glycolate type a potato',
        'titanium dioxide'
      ],
      usos: {
        t: 'Infección por VIH-1 en combinación con otros antirretrovirales, según la etiqueta de EPIVIR.',
        ref: { f: 'dailymed-lamivudina', sec: '1 · Indicaciones', cita: 'in combination with other antiretroviral agents', codigo: '34067-9' }
      },
      fuente: 'dailymed-lamivudina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con lamivudina como ingrediente activo.',
    usos: 'Infección por VIH-1 en combinación con otros antirretrovirales, según la etiqueta de EPIVIR.',
    actua: 'Dentro de la célula se convierte en un trifosfato que interfiere con la transcriptasa inversa y termina la cadena de ADN viral.',
    recorrido: 'En doce adultos, la biodisponibilidad absoluta media del comprimido estudiado fue del 86 %. La mayor parte se elimina intacta por orina mediante secreción tubular activa.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'EPIVIR se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'EPIVIR se presenta como comprimido recubierto para administración oral.',
          ref: {
            f: 'dailymed-lamivudina',
            sec: '3 · Forma farmacéutica',
            cita: 'EPIVIR Scored Tablets EPIVIR scored tablets contain',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En doce adultos, la biodisponibilidad absoluta media del comprimido estudiado fue del 86 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En doce adultos, la biodisponibilidad absoluta media del comprimido estudiado fue del 86 %.',
          ref: {
            f: 'dailymed-lamivudina',
            sec: '12.3 · Farmacocinética',
            cita: 'Absolute bioavailability in 12 adult subjects was 86%',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une en menos del 36 % a proteínas plasmáticas humanas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une en menos del 36 % a proteínas plasmáticas humanas.',
          ref: {
            f: 'dailymed-lamivudina',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding of lamivudine to human plasma proteins is less than 36%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transcriptasa inversa del VIH-1',
        efecto: 'Dentro de la célula se convierte en un trifosfato que interfiere con la transcriptasa inversa y termina la cadena de ADN viral.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Dentro de la célula se convierte en un trifosfato que interfiere con la transcriptasa inversa y termina la cadena de ADN viral.',
            ref: { f: 'dailymed-lamivudina', sec: '12 · Farmacología clínica', cita: 'chain termination', codigo: '34090-1' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'La etiqueta identifica el trans-sulfóxido como metabolito minoritario en humanos.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'La etiqueta identifica el trans-sulfóxido como metabolito minoritario en humanos.',
          ref: { f: 'dailymed-lamivudina', sec: '12.3 · Farmacocinética', cita: 'trans-sulfoxide metabolite', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La mayor parte se elimina intacta por orina mediante secreción tubular activa.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La mayor parte se elimina intacta por orina mediante secreción tubular activa.',
          ref: {
            f: 'dailymed-lamivudina',
            sec: '12.3 · Farmacocinética',
            cita: 'eliminated unchanged in urine by active organic cationic secretion',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-lamivudina', '89226149-47fa-4f7d-bb1f-1aa7034486b8', 'EPIVIR (LAMIVUDINE) TABLET, FILM COATED EPIVIR (LAMIVUDINE) SOLUTION', 'EPIVIR', '24', '2026-09-14', '2026-11-10'),
    rengPubchem(60825, 'lamivudine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
