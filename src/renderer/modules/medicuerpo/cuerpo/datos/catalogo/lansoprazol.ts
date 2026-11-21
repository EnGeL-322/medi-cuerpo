import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lansoprazol',
    nombre: 'Lansoprazol',
    clase: 'Inhibidor de la bomba de protones',
    sinonimos: [ 'lansoprazole' ],
    formula: 'C16H14F3N3O2S',
    masaMolar: 369.4,
    smiles: 'CC1=C(C=CN=C1CS(=O)C2=NC3=CC=CC=C3N2)OCC(F)(F)F',
    inchikey: 'MJIHNNLFOKEZEW-UHFFFAOYSA-N',
    cid: 3883,
    iupac: '2-[[3-methyl-4-(2,2,2-trifluoroethoxy)-2-pyridinyl]methylsulfinyl]-1H-benzimidazole',
    area: 'Digestivo'
  },
  presentaciones: [
    {
      id: 'lansoprazol-oral',
      producto: 'Prevacid · cápsula de liberación retardada',
      titular: 'TAKEDA PHARMACEUTICALS AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula de liberación retardada',
      formaFuente: 'CAPSULE, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '30 mg',
      excipientes: [
        'sucrose',
        'methacrylic acid and ethyl acrylate copolymer',
        'low-substituted hydroxypropyl cellulose, unspecified',
        'starch, corn',
        'magnesium carbonate',
        'talc',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'polysorbate 80',
        'hydroxypropyl cellulose (1600000 wamw)',
        'silicon dioxide',
        'd&c red no. 28',
        'fd&c blue no. 1',
        'fd&c red no. 40'
      ],
      usos: {
        t: 'La etiqueta incluye úlcera duodenal y otras afecciones relacionadas con la secreción ácida.',
        ref: { f: 'dailymed-lansoprazol', sec: '1 · Indicaciones', cita: 'Treatment of active duodenal ulcer in adults', codigo: '34067-9' }
      },
      fuente: 'dailymed-lansoprazol'
    }
  ],
  resumen: {
    contiene: 'Cápsula de liberación retardada oral con lansoprazol como ingrediente activo.',
    usos: 'La etiqueta incluye úlcera duodenal y otras afecciones relacionadas con la secreción ácida.',
    actua: 'Inhibe la bomba de protones de las células parietales, limitando la secreción ácida gástrica.',
    recorrido: 'El pico medio llega alrededor de 1,7 horas. La biodisponibilidad absoluta supera el 80 %. En un estudio oral radiomarcado, aproximadamente un tercio salió por orina y dos tercios por heces. Apenas se recuperó original en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago' ],
      llega: 'Se ingiere la presentación oral.',
      ocurre: 'Prevacid se presenta como cápsula de liberación retardada para administración oral.',
      sigue: 'El activo se va liberando en el tubo digestivo según la formulación.',
      datos: [
        {
          t: 'Prevacid se presenta como cápsula de liberación retardada para administración oral.',
          ref: {
            f: 'dailymed-lansoprazol',
            sec: '3 · Forma farmacéutica',
            cita: 'and black capsule imprinted with "TAP" and',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo se encuentra disponible en el tubo digestivo.',
      ocurre: 'El pico medio llega alrededor de 1,7 horas. La biodisponibilidad absoluta supera el 80 %.',
      sigue: 'La fracción absorbida continúa su recorrido.',
      datos: [
        {
          t: 'El pico medio llega alrededor de 1,7 horas. La biodisponibilidad absoluta supera el 80 %.',
          ref: {
            f: 'dailymed-lansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'plasma levels of lansoprazole occur at approximately 1.7 hours',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega la fracción disponible.',
      ocurre: 'El 97 % se une a proteínas plasmáticas en el intervalo estudiado.',
      sigue: 'El fármaco disponible puede actuar, transformarse o eliminarse.',
      datos: [
        {
          t: 'El 97 % se une a proteínas plasmáticas en el intervalo estudiado.',
          ref: {
            f: 'dailymed-lansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Lansoprazole is 97% bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'H⁺/K⁺-ATPasa gástrica',
        efecto: 'Inhibe la bomba de protones de las células parietales, limitando la secreción ácida gástrica.',
        lugar: [ 'estomago' ],
        datos: [
          {
            t: 'Inhibe la bomba de protones de las células parietales, limitando la secreción ácida gástrica.',
            ref: {
              f: 'dailymed-lansoprazol',
              sec: '12.1 · Mecanismo',
              cita: 'at the secretory surface of the gastric parietal cell',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'Llega la fracción disponible del medicamento.',
      ocurre: 'El hígado lo transforma de manera extensa. Los metabolitos medidos en plasma tienen poca o ninguna actividad antisecretora.',
      sigue: 'El activo y, si se forman, sus metabolitos continúan hacia la eliminación.',
      datos: [
        {
          t: 'El hígado lo transforma de manera extensa. Los metabolitos medidos en plasma tienen poca o ninguna actividad antisecretora.',
          ref: {
            f: 'dailymed-lansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Lansoprazole is extensively metabolized in the liver',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En un estudio oral radiomarcado, aproximadamente un tercio salió por orina y dos tercios por heces. Apenas se recuperó original en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En un estudio oral radiomarcado, aproximadamente un tercio salió por orina y dos tercios por heces. Apenas se recuperó original en orina.',
          ref: {
            f: 'dailymed-lansoprazol',
            sec: '12.3 · Farmacocinética',
            cita: 'virtually no unchanged lansoprazole was excreted',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [],
  fuentes: [
    rengEtiquetaFDA('dailymed-lansoprazol', '71ba78cb-7e46-43eb-9425-fa130f537f84', 'PREVACID (LANSOPRAZOLE) CAPSULE, DELAYED RELEASE PREVACID SOLUTAB (LANSOPRAZOLE) TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE', 'Prevacid', '45', '2025-07-18', '2026-11-10'),
    rengPubchem(3883, 'lansoprazole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
