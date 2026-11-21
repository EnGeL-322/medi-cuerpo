import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'enalapril',
    nombre: 'Enalapril',
    clase: 'Inhibidor de la enzima convertidora de angiotensina (profármaco)',
    sinonimos: [ 'enalapril' ],
    formula: 'C20H28N2O5',
    masaMolar: 376.4,
    smiles: 'CCOC(=O)[C@H](CCC1=CC=CC=C1)N[C@@H](C)C(=O)N2CCC[C@H]2C(=O)O',
    inchikey: 'GBXSMTUPTTWBMN-XIRDDKMYSA-N',
    cid: 5388962,
    iupac: '(2S)-1-[(2S)-2-[[(2S)-1-ethoxy-1-oxo-4-phenylbutan-2-yl]amino]propanoyl]pyrrolidine-2-carboxylic acid',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'enalapril-oral',
      producto: 'Vasotec · comprimido',
      titular: 'BAUSCH HEALTH US LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg',
      sal: { nombre: 'maleato de enalapril', ref: { f: 'dailymed-enalapril', sec: '11 · Descripción', cita: 'maleate salt of enalapril' } },
      excipientes: [ 'lactose, unspecified form', 'magnesium stearate', 'sodium stearate', 'sodium bicarbonate', 'starch, corn' ],
      usos: {
        t: 'La etiqueta recoge hipertensión, insuficiencia cardíaca sintomática y disfunción ventricular izquierda asintomática en los casos descritos.',
        ref: { f: 'dailymed-enalapril', sec: '1 · Indicaciones', cita: 'VASOTEC is indicated for the treatment of hypertension' }
      },
      fuente: 'dailymed-enalapril'
    }
  ],
  resumen: {
    contiene: 'Comprimido de maleato de enalapril para administración oral.',
    usos: 'La etiqueta recoge hipertensión, insuficiencia cardíaca sintomática y disfunción ventricular izquierda asintomática en los casos descritos.',
    actua: 'Tras su conversión, el enalaprilato inhibe la enzima convertidora de angiotensina. Disminuye la formación de angiotensina II y con ello su señal vasoconstrictora.',
    recorrido: 'Se estima que se absorbe alrededor del 60 % del enalapril. En el estudio, el compuesto original alcanza su pico sérico en cerca de una hora. Se recuperó cerca del 94 % de la dosis en orina y heces como enalapril o enalaprilato. En orina, el enalaprilato representó alrededor del 40 % de la dosis.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Vasotec por vía oral.',
      ocurre: 'La presentación oral de VASOTEC contiene maleato de enalapril en comprimidos.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación oral de VASOTEC contiene maleato de enalapril en comprimidos.',
          ref: { f: 'dailymed-enalapril', sec: '11 · Descripción', cita: 'active ingredient enalapril maleate, each tablet' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se estima que se absorbe alrededor del 60 % del enalapril. En el estudio, el compuesto original alcanza su pico sérico en cerca de una hora.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se estima que se absorbe alrededor del 60 % del enalapril. En el estudio, el compuesto original alcanza su pico sérico en cerca de una hora.',
          ref: {
            f: 'dailymed-enalapril',
            sec: '12 · Farmacología clínica',
            cita: 'extent of absorption of enalapril is approximately 60 percent'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'El enalaprilato aparece en suero. Una pequeña fracción unida a la ECA parece explicar la fase terminal prolongada.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'El enalaprilato aparece en suero. Una pequeña fracción unida a la ECA parece explicar la fase terminal prolongada.',
          ref: {
            f: 'dailymed-enalapril',
            sec: '12 · Farmacología clínica',
            cita: 'small fraction of the administered dose that has been bound to ACE'
          }
        }
      ],
      accion: {
        diana: 'Enzima convertidora de angiotensina (ECA), a través de enalaprilato',
        efecto: 'Tras su conversión, el enalaprilato inhibe la enzima convertidora de angiotensina. Disminuye la formación de angiotensina II y con ello su señal vasoconstrictora.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Tras su conversión, el enalaprilato inhibe la enzima convertidora de angiotensina. Disminuye la formación de angiotensina II y con ello su señal vasoconstrictora.',
            ref: { f: 'dailymed-enalapril', sec: '12 · Farmacología clínica', cita: 'after hydrolysis to enalaprilat, inhibits' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Después de absorberse, el enalapril se hidroliza a enalaprilato, un inhibidor más potente que el compuesto original.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Después de absorberse, el enalapril se hidroliza a enalaprilato, un inhibidor más potente que el compuesto original.',
          ref: { f: 'dailymed-enalapril', sec: '12 · Farmacología clínica', cita: 'enalapril is hydrolyzed to enalaprilat' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Enalaprilato',
          actividad: 'activo',
          ref: { f: 'dailymed-enalapril', sec: '12 · Farmacología clínica', cita: 'more potent angiotensin-converting enzyme inhibitor' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'Se recuperó cerca del 94 % de la dosis en orina y heces como enalapril o enalaprilato. En orina, el enalaprilato representó alrededor del 40 % de la dosis.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'Se recuperó cerca del 94 % de la dosis en orina y heces como enalapril o enalaprilato. En orina, el enalaprilato representó alrededor del 40 % de la dosis.',
          ref: {
            f: 'dailymed-enalapril',
            sec: '12 · Farmacología clínica',
            cita: 'recovered in the urine and feces as enalaprilat or enalapril'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva de acumulación del enalaprilato',
      valor: '11',
      unidad: 'h',
      condiciones: 'Administraciones repetidas de maleato de enalapril',
      ref: { f: 'dailymed-enalapril', sec: '12 · Farmacología clínica', cita: 'effective half-life for accumulation of enalaprilat' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-enalapril', '39631f1f-5d19-43c1-b504-bf56d991ed97', 'VASOTEC (ENALAPRIL MALEATE) TABLET', 'Vasotec', '15', '2026-01-28', '2026-11-10'),
    rengPubchem(5388962, 'enalapril', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
