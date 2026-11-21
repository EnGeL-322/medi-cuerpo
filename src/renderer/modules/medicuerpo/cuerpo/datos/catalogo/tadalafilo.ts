import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tadalafilo',
    nombre: 'Tadalafilo',
    clase: 'Inhibidor de la fosfodiesterasa 5',
    sinonimos: [ 'tadalafil' ],
    formula: 'C22H19N3O4',
    masaMolar: 389.4,
    smiles: 'CN1CC(=O)N2[C@@H](C1=O)CC3=C([C@H]2C4=CC5=C(C=C4)OCO5)NC6=CC=CC=C36',
    inchikey: 'WOXKDUGGOYFFRN-IIBYNOLFSA-N',
    cid: 110635,
    iupac: '(2R,8R)-2-(1,3-benzodioxol-5-yl)-6-methyl-3,6,17-triazatetracyclo[8.7.0.03,8.011,16]heptadeca-1(10),11,13,15-tetraene-4,7-dione',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'tadalafilo-oral',
      producto: 'Cialis · comprimido recubierto',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'hydroxypropyl cellulose, unspecified',
        'hypromellose, unspecified',
        'ferric oxide yellow',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'sodium lauryl sulfate',
        'talc',
        'titanium dioxide',
        'croscarmellose sodium',
        'triacetin'
      ],
      usos: {
        t: 'Disfunción eréctil y signos y síntomas de hiperplasia prostática benigna, de acuerdo con la etiqueta de CIALIS.',
        ref: { f: 'dailymed-tadalafilo', sec: '1 · Indicaciones', cita: 'signs and symptoms of benign prostatic hyperplasia' }
      },
      fuente: 'dailymed-tadalafilo'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de tadalafilo para administración oral.',
    usos: 'Disfunción eréctil y signos y síntomas de hiperplasia prostática benigna, de acuerdo con la etiqueta de CIALIS.',
    actua: 'Inhibe la fosfodiesterasa 5, por lo que se degrada menos GMP cíclico. Durante la estimulación sexual, esto facilita la relajación del músculo liso cavernoso.',
    recorrido: 'Tras una toma, el pico plasmático apareció entre 30 minutos y 6 horas, con una mediana de dos horas. La biodisponibilidad absoluta no está determinada. Se excreta principalmente como metabolitos. Aproximadamente el 61 % de la dosis se recupera en heces y el 36 % en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Cialis por vía oral.',
      ocurre: 'La ficha corresponde al comprimido oral de CIALIS. La etiqueta enumera tres concentraciones de esta presentación.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La ficha corresponde al comprimido oral de CIALIS. La etiqueta enumera tres concentraciones de esta presentación.',
          ref: { f: 'dailymed-tadalafilo', sec: '3 · Forma farmacéutica', cita: 'Three strengths of almond-shaped tablets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Tras una toma, el pico plasmático apareció entre 30 minutos y 6 horas, con una mediana de dos horas. La biodisponibilidad absoluta no está determinada.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Tras una toma, el pico plasmático apareció entre 30 minutos y 6 horas, con una mediana de dos horas. La biodisponibilidad absoluta no está determinada.',
          ref: { f: 'dailymed-tadalafilo', sec: '12 · Farmacología clínica', cita: 'median time of 2 hours' }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El volumen aparente de distribución es cercano a 63 litros. Aproximadamente el 94 % se une a proteínas plasmáticas a concentraciones terapéuticas.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El volumen aparente de distribución es cercano a 63 litros. Aproximadamente el 94 % se une a proteínas plasmáticas a concentraciones terapéuticas.',
          ref: { f: 'dailymed-tadalafilo', sec: '12 · Farmacología clínica', cita: '94% of tadalafil in plasma is bound to proteins' }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa de tipo 5 (PDE5)',
        efecto: 'Inhibe la fosfodiesterasa 5, por lo que se degrada menos GMP cíclico. Durante la estimulación sexual, esto facilita la relajación del músculo liso cavernoso.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Inhibe la fosfodiesterasa 5, por lo que se degrada menos GMP cíclico. Durante la estimulación sexual, esto facilita la relajación del músculo liso cavernoso.',
            ref: { f: 'dailymed-tadalafilo', sec: '12 · Farmacología clínica', cita: 'inhibition of phosphodiesterase type 5' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'CYP3A4 forma un catecol. Después se metila y conjuga. El glucurónido de metilcatecol es el principal producto circulante.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'CYP3A4 forma un catecol. Después se metila y conjuga. El glucurónido de metilcatecol es el principal producto circulante.',
          ref: { f: 'dailymed-tadalafilo', sec: 'Información complementaria', cita: 'predominantly metabolized by CYP3A4' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se excreta principalmente como metabolitos. Aproximadamente el 61 % de la dosis se recupera en heces y el 36 % en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se excreta principalmente como metabolitos. Aproximadamente el 61 % de la dosis se recupera en heces y el 36 % en orina.',
          ref: { f: 'dailymed-tadalafilo', sec: '12 · Farmacología clínica', cita: 'mainly in the feces (approximately 61% of the dose)' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '17,5',
      unidad: 'h',
      poblacion: 'Voluntarios sanos',
      ref: { f: 'dailymed-tadalafilo', sec: '12 · Farmacología clínica', cita: 'mean terminal half-life is 17.5 hours' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tadalafilo', 'bcd8f8ab-81a2-4891-83db-24a0b0e25895', 'CIALIS (TADALAFIL) TABLET, FILM COATED', 'Cialis', '52', '2026-06-10', '2026-11-10'),
    rengPubchem(110635, 'tadalafil', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
