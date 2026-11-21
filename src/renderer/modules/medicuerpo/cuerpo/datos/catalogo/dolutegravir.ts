import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dolutegravir',
    nombre: 'Dolutegravir',
    clase: 'Inhibidor de la integrasa del VIH',
    sinonimos: [ 'dolutegravir' ],
    formula: 'C20H19F2N3O5',
    masaMolar: 419.4,
    smiles: 'C[C@@H]1CCO[C@@H]2N1C(=O)C3=C(C(=O)C(=CN3C2)C(=O)NCC4=C(C=C(C=C4)F)F)O',
    inchikey: 'RHWKPHLQXYSBKR-BMIGLBTASA-N',
    cid: 54726191,
    iupac: '(3S,7R)-N-[(2,4-difluorophenyl)methyl]-11-hydroxy-7-methyl-9,12-dioxo-4-oxa-1,8-diazatricyclo[8.4.0.03,8]tetradeca-10,13-diene-13-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'dolutegravir-oral',
      producto: 'Tivicay · comprimido recubierto',
      titular: 'VIIV HEALTHCARE COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'sodium starch glycolate type a corn',
        'sodium stearyl fumarate',
        'polyethylene glycol, unspecified',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Infección por VIH-1 en los esquemas y poblaciones descritos por la etiqueta de TIVICAY.',
        ref: { f: 'dailymed-dolutegravir', sec: '1 · Indicaciones', cita: 'treatment of HIV ‑ 1 infection', codigo: '34067-9' }
      },
      fuente: 'dailymed-dolutegravir',
      sal: {
        nombre: 'sal sódica de dolutegravir',
        ref: { f: 'dailymed-dolutegravir', sec: '3 · Forma farmacéutica', cita: 'dolutegravir sodium', codigo: '43678-2' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto oral con sal sódica de dolutegravir como ingrediente activo.',
    usos: 'Infección por VIH-1 en los esquemas y poblaciones descritos por la etiqueta de TIVICAY.',
    actua: 'Se une a la integrasa del VIH y bloquea la transferencia de cadena que integra el ADN viral.',
    recorrido: 'Tras la administración oral, los máximos plasmáticos se observaron entre una y tres horas. La forma dispersable tiene otra biodisponibilidad. En el estudio oral radiomarcado, el 53 % se recuperó sin modificar en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Tivicay se presenta como comprimido recubierto para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Tivicay se presenta como comprimido recubierto para administración oral.',
          ref: { f: 'dailymed-dolutegravir', sec: '3 · Forma farmacéutica', cita: 'mg: Each tablet contains 10 mg of', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Tras la administración oral, los máximos plasmáticos se observaron entre una y tres horas. La forma dispersable tiene otra biodisponibilidad.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Tras la administración oral, los máximos plasmáticos se observaron entre una y tres horas. La forma dispersable tiene otra biodisponibilidad.',
          ref: {
            f: 'dailymed-dolutegravir',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations were observed 1 to 3 hours',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se une a proteínas plasmáticas en al menos un 98,9 % en los datos in vivo.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se une a proteínas plasmáticas en al menos un 98,9 % en los datos in vivo.',
          ref: { f: 'dailymed-dolutegravir', sec: '12.3 · Farmacocinética', cita: 'greater than or equal to 98.9%', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Integrasa del VIH',
        efecto: 'Se une a la integrasa del VIH y bloquea la transferencia de cadena que integra el ADN viral.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Se une a la integrasa del VIH y bloquea la transferencia de cadena que integra el ADN viral.',
            ref: { f: 'dailymed-dolutegravir', sec: '12.4 · Microbiología', cita: 'binding to the integrase active site', codigo: '49489-8' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'La vía principal de transformación es UGT1A1, con participación de CYP3A.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'La vía principal de transformación es UGT1A1, con participación de CYP3A.',
          ref: { f: 'dailymed-dolutegravir', sec: '12.3 · Farmacocinética', cita: 'primarily metabolized via UGT1A1', codigo: '43682-4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En el estudio oral radiomarcado, el 53 % se recuperó sin modificar en las heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En el estudio oral radiomarcado, el 53 % se recuperó sin modificar en las heces.',
          ref: {
            f: 'dailymed-dolutegravir',
            sec: '12.3 · Farmacocinética',
            cita: '53% of the total oral dose was excreted unchanged in feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-dolutegravir', '63df5af3-b8ac-4e76-9830-2dbb340af922', 'TIVICAY PD (DOLUTEGRAVIR SODIUM) TABLET, FOR SUSPENSION TIVICAY (DOLUTEGRAVIR SODIUM) TABLET, FILM COATED', 'Tivicay', '34', '2026-10-02', '2026-11-10'),
    rengPubchem(54726191, 'dolutegravir', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
