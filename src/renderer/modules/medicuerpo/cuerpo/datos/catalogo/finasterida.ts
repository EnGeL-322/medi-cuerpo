import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'finasterida',
    nombre: 'Finasterida',
    clase: 'Inhibidor de la 5α-reductasa',
    sinonimos: [ 'finasteride' ],
    formula: 'C23H36N2O2',
    masaMolar: 372.5,
    smiles: 'C[C@]12CC[C@H]3[C@H]([C@@H]1CC[C@@H]2C(=O)NC(C)(C)C)CC[C@@H]4[C@@]3(C=CC(=O)N4)C',
    inchikey: 'DBEPLOCGEIEOCV-WSBQPABSSA-N',
    cid: 57363,
    iupac: '(1S,3aS,3bS,5aR,9aR,9bS,11aS)-N-tert-butyl-9a,11a-dimethyl-7-oxo-1,2,3,3a,3b,4,5,5a,6,9b,10,11-dodecahydroindeno[5,4-f]quinoline-1-carboxamide',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'finasterida-oral',
      producto: 'PROSCAR · comprimido recubierto',
      titular: 'ORGANON LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg',
      excipientes: [
        'docusate sodium',
        'fd&c blue no. 2',
        'aluminum oxide',
        'lactose monohydrate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose, unspecified',
        'magnesium stearate',
        'microcrystalline cellulose',
        'starch, corn',
        'sodium starch glycolate type a potato',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Hiperplasia prostática benigna sintomática en hombres con próstata aumentada, según la etiqueta de PROSCAR.',
        ref: { f: 'dailymed-finasterida', sec: '1 · Indicaciones', cita: 'symptomatic benign prostatic hyperplasia' }
      },
      fuente: 'dailymed-finasterida'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de finasterida para administración oral.',
    usos: 'Hiperplasia prostática benigna sintomática en hombres con próstata aumentada, según la etiqueta de PROSCAR.',
    actua: 'Bloquea la 5α-reductasa de tipo II, que convierte la testosterona en dihidrotestosterona. Así reduce la señal androgénica que favorece el aumento prostático.',
    recorrido: 'En 15 voluntarios jóvenes sanos, la biodisponibilidad media de los comprimidos de 5 mg fue del 63 %. El pico se alcanzó en una a dos horas. En seis hombres, tras administrar finasterida radiomarcada por vía oral, se recuperó en promedio el 39 % en orina como metabolitos y el 57 % en heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      llega: 'Se ingiere PROSCAR por vía oral.',
      ocurre: 'La presentación PROSCAR contiene 5 mg de finasterida en un comprimido recubierto de administración oral.',
      sigue: 'El contenido queda disponible en el aparato digestivo.',
      datos: [
        {
          t: 'La presentación PROSCAR contiene 5 mg de finasterida en un comprimido recubierto de administración oral.',
          ref: { f: 'dailymed-finasterida', sec: '3 · Forma farmacéutica', cita: '5-mg film-coated tablets' }
        },
        RENG_GENERAL.disgregar
      ],
      organosGenerales: [ 'boca', 'esofago' ]
    },
    absorcion: {
      organos: [],
      llega: 'El activo está disponible en el aparato digestivo.',
      ocurre: 'En 15 voluntarios jóvenes sanos, la biodisponibilidad media de los comprimidos de 5 mg fue del 63 %. El pico se alcanzó en una a dos horas.',
      sigue: 'Continúa el recorrido de la fracción absorbida.',
      datos: [
        {
          t: 'En 15 voluntarios jóvenes sanos, la biodisponibilidad media de los comprimidos de 5 mg fue del 63 %. El pico se alcanzó en una a dos horas.',
          ref: {
            f: 'dailymed-finasterida',
            sec: '12 · Farmacología clínica',
            cita: 'mean bioavailability of finasteride 5-mg tablets was 63%'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'La fracción disponible se reparte por el organismo.',
      ocurre: 'Cerca del 90 % de la finasterida circulante se une a proteínas plasmáticas. Con administración repetida se acumula lentamente.',
      sigue: 'Parte del activo sigue hacia su transformación o eliminación.',
      datos: [
        {
          t: 'Cerca del 90 % de la finasterida circulante se une a proteínas plasmáticas. Con administración repetida se acumula lentamente.',
          ref: {
            f: 'dailymed-finasterida',
            sec: '12 · Farmacología clínica',
            cita: '90% of circulating finasteride is bound to plasma proteins'
          }
        }
      ],
      accion: {
        diana: '5α-reductasa de tipo II',
        efecto: 'Bloquea la 5α-reductasa de tipo II, que convierte la testosterona en dihidrotestosterona. Así reduce la señal androgénica que favorece el aumento prostático.',
        lugar: [ 'prostata' ],
        datos: [
          {
            t: 'Bloquea la 5α-reductasa de tipo II, que convierte la testosterona en dihidrotestosterona. Así reduce la señal androgénica que favorece el aumento prostático.',
            ref: { f: 'dailymed-finasterida', sec: '12 · Farmacología clínica', cita: 'specific inhibitor of Type II 5α-reductase' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El activo llega a la etapa de transformación.',
      ocurre: 'En el hígado, CYP3A4 interviene en el metabolismo extenso. La etiqueta identifica dos productos con actividad inhibidora inferior a la de la finasterida.',
      sigue: 'El activo y los productos de transformación siguen hacia su eliminación.',
      datos: [
        {
          t: 'En el hígado, CYP3A4 interviene en el metabolismo extenso. La etiqueta identifica dos productos con actividad inhibidora inferior a la de la finasterida.',
          ref: { f: 'dailymed-finasterida', sec: '12 · Farmacología clínica', cita: 'Finasteride is extensively metabolized in the liver' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llega la fracción que el organismo elimina.',
      ocurre: 'En seis hombres, tras administrar finasterida radiomarcada por vía oral, se recuperó en promedio el 39 % en orina como metabolitos y el 57 % en heces.',
      sigue: 'Fin del recorrido ilustrativo.',
      datos: [
        {
          t: 'En seis hombres, tras administrar finasterida radiomarcada por vía oral, se recuperó en promedio el 39 % en orina como metabolitos y el 57 % en heces.',
          ref: {
            f: 'dailymed-finasterida',
            sec: '12 · Farmacología clínica',
            cita: 'dose was excreted in the urine in the form of metabolites'
          },
          poblacion: 'Seis hombres del estudio de balance',
          condiciones: 'Administración oral única con radiomarcador'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad media del comprimido de 5 mg',
      valor: '63',
      unidad: '%',
      poblacion: '15 voluntarios jóvenes sanos',
      condiciones: 'Respecto a una administración intravenosa de referencia',
      ref: { f: 'dailymed-finasterida', sec: '12 · Farmacología clínica', cita: 'mean bioavailability of finasteride 5-mg tablets was 63%' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-finasterida', '6f988153-fc74-4ca4-b29a-111f750c4a4b', 'PROSCAR (FINASTERIDE) TABLET, FILM COATED', 'PROSCAR', '9', '2026-03-31', '2026-11-10'),
    rengPubchem(57363, 'finasteride', '2026-11-10')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
