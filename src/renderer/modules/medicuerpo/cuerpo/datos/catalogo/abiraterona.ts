import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'abiraterona',
    nombre: 'Acetato de abiraterona',
    clase: 'Inhibidor de síntesis de andrógenos (profármaco)',
    sinonimos: [ 'abiraterone acetate' ],
    formula: 'C26H33NO2',
    masaMolar: 391.5,
    smiles: 'CC(=O)O[C@H]1CC[C@@]2([C@H]3CC[C@]4([C@H]([C@@H]3CC=C2C1)CC=C4C5=CN=CC=C5)C)C',
    inchikey: 'UVIQSJCZCSLXRZ-UBUQANBQSA-N',
    cid: 9821849,
    iupac: '[(3S,8R,9S,10R,13S,14S)-10,13-dimethyl-17-pyridin-3-yl-2,3,4,7,8,9,11,12,14,15-decahydro-1H-cyclopenta[a]phenanthren-3-yl] acetate',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'abiraterona-oral',
      producto: 'Zytiga · comprimido',
      titular: 'JANSSEN BIOTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '250 mg',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'povidone, unspecified',
        'sodium lauryl sulfate',
        'magnesium stearate',
        'silicon dioxide'
      ],
      usos: {
        t: 'Determinados cánceres prostáticos metastásicos según la etiqueta de ZYTIGA, que describe su uso junto con prednisona.',
        ref: { f: 'dailymed-abiraterona', sec: '1 · Indicaciones', cita: 'Metastatic castration-resistant prostate cancer', codigo: '34067-9' }
      },
      fuente: 'dailymed-abiraterona'
    }
  ],
  resumen: {
    contiene: 'Comprimido oral con acetato de abiraterona como ingrediente activo.',
    usos: 'Determinados cánceres prostáticos metastásicos según la etiqueta de ZYTIGA, que describe su uso junto con prednisona.',
    actua: 'El acetato se convierte en abiraterona, que inhibe CYP17 y reduce la síntesis de andrógenos.',
    recorrido: 'En el estudio oral en cáncer prostático metastásico resistente a castración, el máximo plasmático mediano de abiraterona se alcanzó a las dos horas. El estudio oral radiomarcado recuperó cerca del 88 % en heces y el 5 % en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Zytiga se presenta como comprimido para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Zytiga se presenta como comprimido para administración oral.',
          ref: {
            f: 'dailymed-abiraterona',
            sec: '3 · Forma farmacéutica',
            cita: 'AND STRENGTHS Tablets (500 mg): purple, oval-shaped,',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'En el estudio oral en cáncer prostático metastásico resistente a castración, el máximo plasmático mediano de abiraterona se alcanzó a las dos horas.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'En el estudio oral en cáncer prostático metastásico resistente a castración, el máximo plasmático mediano de abiraterona se alcanzó a las dos horas.',
          ref: {
            f: 'dailymed-abiraterona',
            sec: '12.3 · Farmacocinética',
            cita: 'median time to reach maximum plasma abiraterone concentrations',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'Más del 99 % de la abiraterona se une a albúmina y glucoproteína ácida alfa-1.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'Más del 99 % de la abiraterona se une a albúmina y glucoproteína ácida alfa-1.',
          ref: {
            f: 'dailymed-abiraterona',
            sec: '12.3 · Farmacocinética',
            cita: 'highly bound (>99%) to the human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Enzima CYP17',
        efecto: 'El acetato se convierte en abiraterona, que inhibe CYP17 y reduce la síntesis de andrógenos.',
        lugar: [ 'prostata', 'organos-reproductores' ],
        datos: [
          {
            t: 'El acetato se convierte en abiraterona, que inhibe CYP17 y reduce la síntesis de andrógenos.',
            ref: { f: 'dailymed-abiraterona', sec: '12.1 · Mecanismo', cita: 'converted in vivo to abiraterone', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'Se hidroliza para formar abiraterona activa. Entre los productos circulantes posteriores hay dos sulfatos inactivos.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'Se hidroliza para formar abiraterona activa. Entre los productos circulantes posteriores hay dos sulfatos inactivos.',
          ref: { f: 'dailymed-abiraterona', sec: '12.3 · Farmacocinética', cita: 'abiraterone sulphate (inactive)', codigo: '43682-4' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Abiraterona',
          actividad: 'activo',
          ref: {
            f: 'dailymed-abiraterona',
            sec: '12.3 · Farmacocinética',
            cita: 'hydrolyzed to abiraterone (active metabolite)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'El estudio oral radiomarcado recuperó cerca del 88 % en heces y el 5 % en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'El estudio oral radiomarcado recuperó cerca del 88 % en heces y el 5 % en orina.',
          ref: { f: 'dailymed-abiraterona', sec: '12.3 · Farmacocinética', cita: 'radioactive dose is recovered in feces', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-abiraterona', '4e338e89-3cf2-48eb-b6e2-a06c608c6513', 'ZYTIGA (ABIRATERONE ACETATE) TABLET ZYTIGA (ABIRATERONE ACETATE) TABLET, FILM COATED', 'Zytiga', '40', '2025-03-31', '2026-11-10'),
    rengPubchem(9821849, 'abiraterone acetate', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
