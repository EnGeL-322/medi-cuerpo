import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'imatinib',
    nombre: 'Imatinib',
    clase: 'Inhibidor de tirosina cinasas',
    sinonimos: [ 'imatinib' ],
    formula: 'C29H31N7O',
    masaMolar: 493.6,
    smiles: 'CC1=C(C=C(C=C1)NC(=O)C2=CC=C(C=C2)CN3CCN(CC3)C)NC4=NC=CC(=N4)C5=CN=CC=C5',
    inchikey: 'KTUFNOKKBVMGRW-UHFFFAOYSA-N',
    cid: 5291,
    iupac: '4-[(4-methylpiperazin-1-yl)methyl]-N-[4-methyl-3-[(4-pyridin-3-ylpyrimidin-2-yl)amino]phenyl]benzamide',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'imatinib-oral',
      producto: 'Gleevec · comprimido',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '100 mg',
      excipientes: [
        'silicon dioxide',
        'crospovidone',
        'ferric oxide red',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol 4000',
        'talc',
        'hypromelloses',
        'ferric oxide yellow',
        'water'
      ],
      usos: {
        t: 'Entre las indicaciones están determinadas leucemias con cromosoma Filadelfia y tumores estromales gastrointestinales, según la etiqueta.',
        ref: {
          f: 'dailymed-imatinib',
          sec: '1 · Indicaciones',
          cita: 'Philadelphia chromosome positive chronic myeloid leukemia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-imatinib',
      sal: {
        nombre: 'mesilato de imatinib',
        ref: { f: 'dailymed-imatinib', sec: '11 · Descripción', cita: 'imatinib mesylate', codigo: '34089-3' }
      }
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con mesilato de imatinib como ingrediente activo.',
    usos: 'Entre las indicaciones están determinadas leucemias con cromosoma Filadelfia y tumores estromales gastrointestinales, según la etiqueta.',
    actua: 'Inhibe BCR-ABL y otras tirosina cinasas. En células BCR-ABL positivas estudiadas frena la proliferación y favorece la muerte celular.',
    recorrido: 'Se absorbe bien tras la toma. En el estudio oral, la biodisponibilidad absoluta media fue del 98 %. Sale sobre todo por heces como metabolitos. También se recupera una fracción menor en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Gleevec se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Gleevec se presenta como comprimido para administración oral.',
          ref: { f: 'dailymed-imatinib', sec: '3 · Forma farmacéutica', cita: 'film coated tablets Very dark yellow to', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'Se absorbe bien tras la toma. En el estudio oral, la biodisponibilidad absoluta media fue del 98 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'Se absorbe bien tras la toma. En el estudio oral, la biodisponibilidad absoluta media fue del 98 %.',
          ref: { f: 'dailymed-imatinib', sec: '12.3 · Farmacocinética', cita: 'Mean absolute bioavailability is 98%', codigo: '43682-4' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'En ensayos in vitro, aproximadamente el 95 % se une a proteínas plasmáticas.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'En ensayos in vitro, aproximadamente el 95 % se une a proteínas plasmáticas.',
          ref: {
            f: 'dailymed-imatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'binding to plasma proteins in in vitro experiments is approximately 95%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Tirosina cinasa BCR-ABL',
        efecto: 'Inhibe BCR-ABL y otras tirosina cinasas. En células BCR-ABL positivas estudiadas frena la proliferación y favorece la muerte celular.',
        lugar: [ 'medula-osea' ],
        datos: [
          {
            t: 'Inhibe BCR-ABL y otras tirosina cinasas. En células BCR-ABL positivas estudiadas frena la proliferación y favorece la muerte celular.',
            ref: { f: 'dailymed-imatinib', sec: '12.1 · Mecanismo', cita: 'inhibits the BCR-ABL tyrosine kinase', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'CYP3A4 participa principalmente en su transformación y forma un metabolito N-desmetilado que conserva actividad.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'CYP3A4 participa principalmente en su transformación y forma un metabolito N-desmetilado que conserva actividad.',
          ref: {
            f: 'dailymed-imatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main circulating active metabolite in humans',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'CGP74588 (N-desmetil imatinib)',
          actividad: 'activo',
          ref: {
            f: 'dailymed-imatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The main circulating active metabolite in humans',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Sale sobre todo por heces como metabolitos. También se recupera una fracción menor en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Sale sobre todo por heces como metabolitos. También se recupera una fracción menor en orina.',
          ref: {
            f: 'dailymed-imatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Imatinib elimination is predominately in the feces',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-imatinib', '211ef2da-2868-4a77-8055-1cb2cd78e24b', 'GLEEVEC (IMATINIB MESYLATE) TABLET', 'Gleevec', '41', '2026-07-20', '2026-11-10'),
    rengPubchem(5291, 'imatinib', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
