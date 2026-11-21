import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tecovirimat',
    nombre: 'Tecovirimat',
    clase: 'Inhibidor de la proteína VP37 de los ortopoxvirus',
    sinonimos: [ 'tecovirimat', 'Tpoxx' ],
    formula: 'C19H15F3N2O3',
    masaMolar: 376.3,
    smiles: 'C1[C@@H]2[C@H]1[C@@H]3C=C[C@H]2[C@@H]4[C@H]3C(=O)N(C4=O)NC(=O)C5=CC=C(C=C5)C(F)(F)F',
    inchikey: 'CSKDFZIMJXRJGH-VWLPUNTISA-N',
    cid: 16124688,
    iupac: 'N-[(1R,2R,6S,7S,8S,10R)-3,5-dioxo-4-azatetracyclo[5.3.2.02,6.08,10]dodec-11-en-4-yl]-4-(trifluoromethyl)benzamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'tecovirimat-oral',
      producto: 'TPOXX · cápsula',
      titular: 'SIGA TECHNOLOGIES, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Tecovirimat monohidrato',
        ref: {
          f: 'dailymed-tecovirimat',
          sec: '11 · Descripción',
          cita: 'immediate release capsules containing tecovirimat monohydrate equivalent to 200 mg',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'Dióxido de silicio coloidal',
        'Croscarmelosa sódica',
        'Hidroxipropilmetilcelulosa',
        'Lactosa monohidrato',
        'Estearato de magnesio',
        'Celulosa microcristalina',
        'Laurilsulfato sódico',
        'Cápsula: gelatina, colorantes FD&C azul n.º 1, rojo n.º 3 y amarillo n.º 6 y dióxido de titanio'
      ],
      usos: {
        t: 'Tratamiento de la viruela humana en adultos y niños de al menos 3 kg.',
        ref: {
          f: 'dailymed-tecovirimat',
          sec: '1 · Indicaciones',
          cita: 'TPOXX is an inhibitor of the orthopoxvirus VP37 envelope wrapping protein and is indicated for the treatment of human smallpox disease in adults and pediatric patients weighing at least 3 kg',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tecovirimat',
      advertencias: [
        {
          titulo: 'Hipoglucemia con repaglinida',
          texto: 'Su combinación con repaglinida puede causar hipoglucemia; vigilar la glucosa.',
          organos: [],
          ref: {
            f: 'dailymed-tecovirimat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Co-administration with repaglinide may cause hypoglycemia',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con las cápsulas, las más frecuentes (2 % o más): cefalea, náuseas, dolor abdominal y vómitos.',
          '34084-4',
          'TPOXX Capsules (incidence ≥ 2%): headache, nausea, abdominal pain, and vomiting'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 200 mg por cápsula, según la etiqueta; el activo va como tecovirimat monohidrato. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la viruela humana en adultos y niños de al menos 3 kg.',
    actua: 'Inhibe la proteína VP37 de los ortopoxvirus y bloquea su interacción con Rab9 y TIP47, lo que impide formar viriones envueltos capaces de salir de la célula.',
    recorrido: 'Con alimentos la mediana del tmax es de 6 horas; la comida aumenta la exposición un 39 %. En el balance de masas, el 73 % se excretó en la orina, sobre todo como metabolitos, y el 23 % en las heces, sobre todo como tecovirimat.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-tecovirimat',
            sec: '3 · Formas y concentraciones',
            cita: 'TPOXX capsules are hard gelatin with an opaque orange body',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con alimentos',
      ocurre: 'Con alimentos la mediana del tmax es de 6 horas; la comida aumenta la exposición un 39 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con alimentos la mediana del tmax es de 6 horas; la comida aumenta la exposición un 39 %.',
          ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: 'Median T max (h) (Range) 6 (6-6.5) 6 (2-24)', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en un 77 a 82 % a las proteínas plasmáticas humanas; el volumen de distribución aparente oral es de 1 030 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 77 a 82 % a las proteínas plasmáticas humanas; el volumen de distribución aparente oral es de 1 030 L.',
          ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: '% Bound to human plasma proteins 77-82', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Proteína VP37 de ortopoxvirus',
        efecto: 'Inhibe la proteína VP37 de los ortopoxvirus y bloquea su interacción con Rab9 y TIP47, lo que impide formar viriones envueltos capaces de salir de la célula.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la proteína VP37 de los ortopoxvirus y bloquea su interacción con Rab9 y TIP47, lo que impide formar viriones envueltos capaces de salir de la célula.',
            ref: {
              f: 'dailymed-tecovirimat',
              sec: '12 · Farmacología clínica',
              cita: 'Tecovirimat targets and inhibits the activity of the orthopoxvirus VP37 protein',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza por hidrólisis del enlace amida y por glucuronidación (UGT1A1 y UGT1A4); sus metabolitos plasmáticos M4, M5 y TFMBA son inactivos.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza por hidrólisis del enlace amida y por glucuronidación (UGT1A1 y UGT1A4); sus metabolitos plasmáticos M4, M5 y TFMBA son inactivos.',
          ref: {
            f: 'dailymed-tecovirimat',
            sec: '12.3 · Farmacocinética',
            cita: 'Tecovirimat is metabolized by hydrolysis of the amide bond and glucuronidation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M4, M5 y TFMBA',
          actividad: 'inactivo',
          nota: 'Metabolitos plasmáticos inactivos.',
          ref: {
            f: 'dailymed-tecovirimat',
            sec: '12.3 · Farmacocinética',
            cita: 'The following inactive metabolites were detected in plasma',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En el balance de masas, el 73 % se excretó en la orina, sobre todo como metabolitos, y el 23 % en las heces, sobre todo como tecovirimat.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En el balance de masas, el 73 % se excretó en la orina, sobre todo como metabolitos, y el 23 % en las heces, sobre todo como tecovirimat.',
          ref: {
            f: 'dailymed-tecovirimat',
            sec: '12.3 · Farmacocinética',
            cita: '% of dose excreted in urine f NA 73, predominantly as metabolites % of dose excreted in feces f NA 23, predominantly as tecovirimat',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax oral con alimentos',
      valor: '6',
      unidad: 'h',
      analito: 'tecovirimat',
      condiciones: 'con alimentos',
      ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: 'Median T max (h) (Range) 6 (6-6.5) 6 (2-24)', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '77-82',
      unidad: '%',
      analito: 'tecovirimat',
      ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: '% Bound to human plasma proteins 77-82', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente oral',
      valor: '1030',
      unidad: 'L',
      analito: 'tecovirimat',
      ref: {
        f: 'dailymed-tecovirimat',
        sec: '12.3 · Farmacocinética',
        cita: 'Volume of distribution (Vz or Vz/F, L) (CV%) 383 (46%) 1030',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal oral',
      valor: '19',
      unidad: 'h',
      analito: 'tecovirimat',
      ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: 't 1/2 (h) e (CV%) 21 (45%) 19 (29%)', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente oral',
      valor: '31',
      unidad: 'L/h',
      analito: 'tecovirimat',
      ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: 'Clearance (CL or CL/F, L/hr) (CV%) 13 (23%) 31', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '73',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      ref: { f: 'dailymed-tecovirimat', sec: '12.3 · Farmacocinética', cita: '73, predominantly as metabolites', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tecovirimat', 'fce826ab-4d6a-4139-a2ee-a304a913a253', 'TPOXX (TECOVIRIMAT MONOHYDRATE) INJECTION, SOLUTION, CONCENTRATE TPOXX (TECOVIRIMAT MONOHYDRATE) CAPSULE', 'TPOXX', '17', '2026-01-06', '2026-11-19'),
    rengPubchem(16124688, 'tecovirimat', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
