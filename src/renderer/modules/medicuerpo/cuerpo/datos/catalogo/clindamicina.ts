import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'clindamicina',
    nombre: 'Clindamicina',
    clase: 'Antibacteriano lincosamida',
    sinonimos: [ 'clindamycin' ],
    formula: 'C18H33ClN2O5S',
    masaMolar: 425,
    smiles: 'CCC[C@@H]1C[C@H](N(C1)C)C(=O)N[C@@H]([C@@H]2[C@@H]([C@@H]([C@H]([C@H](O2)SC)O)O)O)[C@H](C)Cl',
    inchikey: 'KDLRVYVGXIQJDK-AWPVFWJPSA-N',
    cid: 446598,
    iupac: '(2S,4R)-N-[(1S,2S)-2-chloro-1-[(2R,3R,4S,5R,6R)-3,4,5-trihydroxy-6-methylsulfanyloxan-2-yl]propyl]-1-methyl-4-propylpyrrolidine-2-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'clindamicina-oral',
      producto: 'Cleocin Hydrochloride · cápsula',
      titular: 'PHARMACIA & UPJOHN COMPANY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '75 mg',
      excipientes: [
        'starch, corn',
        'fd&c blue no. 1',
        'fd&c yellow no. 5',
        'gelatin, unspecified',
        'lactose, unspecified form',
        'magnesium stearate',
        'talc'
      ],
      usos: {
        t: 'Infecciones graves por microorganismos susceptibles, incluidos ciertos anaerobios.',
        ref: {
          f: 'dailymed-clindamicina',
          sec: '1 · Indicaciones',
          cita: 'serious infections caused by susceptible anaerobic bacteria',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-clindamicina',
      sal: {
        nombre: 'clorhidrato de clindamicina',
        ref: { f: 'dailymed-clindamicina', sec: '11 · Descripción', cita: 'Clindamycin hydrochloride', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Cápsula oral con clorhidrato de clindamicina como ingrediente activo.',
    usos: 'Infecciones graves por microorganismos susceptibles, incluidos ciertos anaerobios.',
    actua: 'Se une al ARN 23S de la subunidad ribosómica 50S e inhibe la síntesis proteica bacteriana.',
    recorrido: 'En el estudio oral citado, el pico medio sérico se alcanzó en 45 minutos. Se recuperó bioactividad en orina y heces. La etiqueta indica que el resto se excreta como metabolitos sin actividad.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Cleocin Hydrochloride se presenta como cápsula para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Cleocin Hydrochloride se presenta como cápsula para administración oral.',
          ref: {
            f: 'dailymed-clindamicina',
            sec: '11 · Descripción',
            cita: 'CLEOCIN HCl Capsules contain clindamycin hydrochloride equivalent',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral citado, el pico medio sérico se alcanzó en 45 minutos.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio oral citado, el pico medio sérico se alcanzó en 45 minutos.',
          ref: { f: 'dailymed-clindamicina', sec: '12 · Farmacología clínica', cita: 'was reached in 45 minutes', codigo: '34090-1' }
        }
      ]
    },
    distribucion: {
      organos: [ 'huesos' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Se reparte por líquidos y tejidos, incluido el hueso. La etiqueta describe concentraciones escasas en el líquido cefalorraquídeo.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Se reparte por líquidos y tejidos, incluido el hueso. La etiqueta describe concentraciones escasas en el líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-clindamicina',
            sec: '12 · Farmacología clínica',
            cita: 'distributed in body fluids and tissues (including bones)',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'ARN ribosómico 23S',
        efecto: 'Se une al ARN 23S de la subunidad ribosómica 50S e inhibe la síntesis proteica bacteriana.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Se une al ARN 23S de la subunidad ribosómica 50S e inhibe la síntesis proteica bacteriana.',
            ref: { f: 'dailymed-clindamicina', sec: '12.1 · Mecanismo', cita: 'binding to the 23S RNA of the 50S subunit', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'En microsomas de hígado e intestino, CYP3A4 fue la principal enzima implicada en su metabolismo.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'En microsomas de hígado e intestino, CYP3A4 fue la principal enzima implicada en su metabolismo.',
          ref: {
            f: 'dailymed-clindamicina',
            sec: '12 · Farmacología clínica',
            cita: 'predominantly metabolized by Cytochrome P450 3A4',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se recuperó bioactividad en orina y heces. La etiqueta indica que el resto se excreta como metabolitos sin actividad.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se recuperó bioactividad en orina y heces. La etiqueta indica que el resto se excreta como metabolitos sin actividad.',
          ref: { f: 'dailymed-clindamicina', sec: '12 · Farmacología clínica', cita: 'excreted as bioinactive metabolites', codigo: '34090-1' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-clindamicina', 'df9a2a41-b132-4f43-8940-b2d773b1369a', 'CLEOCIN HYDROCHLORIDE (CLINDAMYCIN HYDROCHLORIDE) CAPSULE', 'Cleocin Hydrochloride', '41', '2026-09-16', '2026-11-10'),
    rengPubchem(446598, 'clindamycin', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
