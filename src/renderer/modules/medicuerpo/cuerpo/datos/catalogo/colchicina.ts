import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'colchicina',
    nombre: 'Colchicina',
    clase: 'Alcaloide antiinflamatorio',
    sinonimos: [ 'colchicine' ],
    formula: 'C22H25NO6',
    masaMolar: 399.4,
    smiles: 'CC(=O)N[C@H]1CCC2=CC(=C(C(=C2C3=CC=C(C(=O)C=C13)OC)OC)OC)OC',
    inchikey: 'IAKHMKGGTNLKSZ-INIZCTEOSA-N',
    cid: 6167,
    iupac: 'N-[(7S)-1,2,3,10-tetramethoxy-9-oxo-6,7-dihydro-5H-benzo[a]heptalen-7-yl]acetamide',
    area: 'Inflamación'
  },
  presentaciones: [
    {
      id: 'colchicina-oral',
      producto: 'Colcrys · comprimido recubierto',
      titular: 'PROFICIENT RX LP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.6 mg',
      excipientes: [
        'carnauba wax',
        'fd&c blue no. 2',
        'fd&c red no. 40',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polydextrose',
        'polyethylene glycol, unspecified',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'titanium dioxide',
        'triacetin'
      ],
      usos: {
        t: 'La etiqueta incluye el tratamiento y la prevención de crisis de gota y la fiebre mediterránea familiar.',
        ref: { f: 'dailymed-colchicina', sec: '1 · Indicaciones', cita: 'COLCRYS (colchicine, USP) tablets are an alkaloid indicated for' }
      },
      fuente: 'dailymed-colchicina'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de colchicina para administración oral.',
    usos: 'La etiqueta incluye el tratamiento y la prevención de crisis de gota y la fiebre mediterránea familiar.',
    actua: 'Interfiere con la formación de microtúbulos a partir de β-tubulina, lo que reduce la activación y el desplazamiento de neutrófilos.',
    recorrido: 'La biodisponibilidad absoluta comunicada ronda el 45 %. En algunos participantes hubo picos posteriores, que pueden reflejar reabsorción intestinal o recirculación biliar. En 12 voluntarios sanos, se recuperó en orina sin cambios entre el 40 % y el 65 % de una toma oral estudiada. La contribución biliar es una hipótesis de la etiqueta.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere Colcrys por vía oral.',
      ocurre: 'COLCRYS contiene 0,6 mg de colchicina en un comprimido recubierto.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'COLCRYS contiene 0,6 mg de colchicina en un comprimido recubierto.',
          ref: { f: 'dailymed-colchicina', sec: '3 · Forma farmacéutica', cita: '0.6 mg tablets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'La biodisponibilidad absoluta comunicada ronda el 45 %. En algunos participantes hubo picos posteriores, que pueden reflejar reabsorción intestinal o recirculación biliar.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta comunicada ronda el 45 %. En algunos participantes hubo picos posteriores, que pueden reflejar reabsorción intestinal o recirculación biliar.',
          ref: {
            f: 'dailymed-colchicina',
            sec: '12 · Farmacología clínica',
            cita: 'Absolute bioavailability is reported to be approximately 45%'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'La unión a proteínas séricas es de alrededor del 39 %, principalmente a la albúmina.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'La unión a proteínas séricas es de alrededor del 39 %, principalmente a la albúmina.',
          ref: { f: 'dailymed-colchicina', sec: '12 · Farmacología clínica', cita: 'Colchicine binding to serum protein is low' }
        }
      ],
      accion: {
        diana: 'Polimerización de β-tubulina',
        efecto: 'Interfiere con la formación de microtúbulos a partir de β-tubulina, lo que reduce la activación y el desplazamiento de neutrófilos.',
        lugar: [ 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Interfiere con la formación de microtúbulos a partir de β-tubulina, lo que reduce la activación y el desplazamiento de neutrófilos.',
            ref: { f: 'dailymed-colchicina', sec: '12 · Farmacología clínica', cita: 'polymerization into microtubules' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'Se forman derivados desmetilados. En microsomas hepáticos humanos, CYP3A4 participa en la formación de los dos principales.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'Se forman derivados desmetilados. En microsomas hepáticos humanos, CYP3A4 participa en la formación de los dos principales.',
          ref: { f: 'dailymed-colchicina', sec: '12 · Farmacología clínica', cita: 'CYP3A4 is involved in the metabolism of colchicine' },
          condiciones: 'Ensayo in vitro con microsomas humanos'
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En 12 voluntarios sanos, se recuperó en orina sin cambios entre el 40 % y el 65 % de una toma oral estudiada. La contribución biliar es una hipótesis de la etiqueta.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En 12 voluntarios sanos, se recuperó en orina sin cambios entre el 40 % y el 65 % de una toma oral estudiada. La contribución biliar es una hipótesis de la etiqueta.',
          ref: { f: 'dailymed-colchicina', sec: '12 · Farmacología clínica', cita: 'colchicine was recovered unchanged in urine' },
          poblacion: '12 voluntarios sanos'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta comunicada',
      valor: '≈ 45',
      unidad: '%',
      ref: {
        f: 'dailymed-colchicina',
        sec: '12 · Farmacología clínica',
        cita: 'Absolute bioavailability is reported to be approximately 45%'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-colchicina', 'd6adc880-5499-4691-93f3-27c87902d5fc', 'COLCRYS (COLCHICINE) TABLET, FILM COATED', 'Colcrys', '4', '2022-10-21', '2026-11-10'),
    rengPubchem(6167, 'colchicine', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
