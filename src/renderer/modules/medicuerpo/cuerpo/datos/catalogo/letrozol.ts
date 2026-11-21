import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'letrozol',
    nombre: 'Letrozol',
    clase: 'Inhibidor no esteroideo de la aromatasa',
    sinonimos: [ 'letrozole' ],
    formula: 'C17H11N5',
    masaMolar: 285.3,
    smiles: 'C1=CC(=CC=C1C#N)C(C2=CC=C(C=C2)C#N)N3C=NC=N3',
    inchikey: 'HPJKCIUCZWXJDR-UHFFFAOYSA-N',
    cid: 3902,
    iupac: '4-[(4-cyanophenyl)-(1,2,4-triazol-1-yl)methyl]benzonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'letrozol-oral',
      producto: 'Femara · comprimido recubierto',
      titular: 'NOVARTIS PHARMACEUTICALS CORPORATION',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg',
      excipientes: [
        'silicon dioxide',
        'ferric oxide yellow',
        'hypromelloses',
        'lactose monohydrate',
        'magnesium stearate',
        'starch, corn',
        'cellulose, microcrystalline',
        'polyethylene glycol',
        'sodium starch glycolate type a potato',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'La etiqueta incluye el tratamiento de determinados cánceres de mama hormonodependientes en mujeres posmenopáusicas.',
        ref: { f: 'dailymed-letrozol', sec: '1 · Indicaciones', cita: 'Adjuvant treatment of postmenopausal women' }
      },
      fuente: 'dailymed-letrozol'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de letrozol para administración oral.',
    usos: 'La etiqueta incluye el tratamiento de determinados cánceres de mama hormonodependientes en mujeres posmenopáusicas.',
    actua: 'Inhibe de forma competitiva la aromatasa y reduce la conversión de andrógenos en estrógenos. La menor disponibilidad de estrógenos reduce el estímulo hormonal en tumores sensibles.',
    recorrido: 'Se absorbe rápida y completamente en el aparato digestivo. En la etiqueta, la comida no modificó la absorción. La ruta principal es la excreción renal del glucurónido del metabolito carbinol. Alrededor del 90 % del radiomarcador se recuperó en orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Femara por vía oral.',
      ocurre: 'FEMARA se presenta en comprimidos recubiertos para administración oral que contienen 2,5 mg de letrozol.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'FEMARA se presenta en comprimidos recubiertos para administración oral que contienen 2,5 mg de letrozol.',
          ref: { f: 'dailymed-letrozol', sec: '11 · Descripción', cita: 'tablets for oral administration contains 2.5 mg of letrozole' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'Se absorbe rápida y completamente en el aparato digestivo. En la etiqueta, la comida no modificó la absorción.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente en el aparato digestivo. En la etiqueta, la comida no modificó la absorción.',
          ref: {
            f: 'dailymed-letrozol',
            sec: '12 · Farmacología clínica',
            cita: 'rapidly and completely absorbed from the gastrointestinal tract'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Se une débilmente a proteínas plasmáticas y tiene un volumen aparente de distribución cercano a 1,9 L/kg.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Se une débilmente a proteínas plasmáticas y tiene un volumen aparente de distribución cercano a 1,9 L/kg.',
          ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: 'Letrozole is weakly protein bound' }
        }
      ],
      accion: {
        diana: 'Aromatasa',
        efecto: 'Inhibe de forma competitiva la aromatasa y reduce la conversión de andrógenos en estrógenos. La menor disponibilidad de estrógenos reduce el estímulo hormonal en tumores sensibles.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Inhibe de forma competitiva la aromatasa y reduce la conversión de andrógenos en estrógenos. La menor disponibilidad de estrógenos reduce el estímulo hormonal en tumores sensibles.',
            ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: 'inhibits the conversion of androgens to estrogens' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se transforma lentamente en un metabolito carbinol inactivo. Los estudios in vitro identifican participación de CYP3A4 y CYP2A6.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se transforma lentamente en un metabolito carbinol inactivo. Los estudios in vitro identifican participación de CYP3A4 y CYP2A6.',
          ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: 'pharmacologically-inactive carbinol metabolite' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito carbinol de letrozol',
          actividad: 'inactivo',
          ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: 'pharmacologically-inactive carbinol metabolite' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'La ruta principal es la excreción renal del glucurónido del metabolito carbinol. Alrededor del 90 % del radiomarcador se recuperó en orina.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'La ruta principal es la excreción renal del glucurónido del metabolito carbinol. Alrededor del 90 % del radiomarcador se recuperó en orina.',
          ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: '90% of radiolabeled letrozole is recovered in urine' },
          condiciones: 'Estudio con letrozol radiomarcado'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '≈ 2',
      unidad: 'd',
      ref: { f: 'dailymed-letrozol', sec: '12 · Farmacología clínica', cita: 'terminal elimination half-life is about 2 days' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-letrozol', '82b77d74-085f-45ac-a7dd-1f5c038bf406', 'FEMARA (LETROZOLE) TABLET, FILM COATED', 'Femara', '32', '2026-06-15', '2026-11-10'),
    rengPubchem(3902, 'letrozole', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
