import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'aprocitentan',
    nombre: 'Aprocitentán',
    clase: 'Antagonista de los receptores de endotelina (ETA y ETB)',
    sinonimos: [ 'aprocitentan', 'Tryvio' ],
    formula: 'C16H14Br2N6O4S',
    masaMolar: 546.2,
    smiles: 'C1=CC(=CC=C1C2=C(N=CN=C2OCCOC3=NC=C(C=N3)Br)NS(=O)(=O)N)Br',
    inchikey: 'DKULOVKANLVDEA-UHFFFAOYSA-N',
    cid: 25099191,
    iupac: '5-(4-bromophenyl)-4-[2-(5-bromopyrimidin-2-yl)oxyethoxy]-6-(sulfamoylamino)pyrimidine',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'aprocitentan-oral',
      producto: 'TRYVIO · comprimido recubierto con película',
      titular: 'IDORSIA PHARMACEUTICALS LTD',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '12.5 mg por comprimido, según la etiqueta',
      excipientes: [
        'croscarmellose sodium',
        'hydroxypropyl cellulose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'microcrystalline cellulose',
        'ferrosoferric oxide',
        'ferric oxide red',
        'ferric oxide yellow',
        'polyvinyl alcohol, unspecified',
        'hydrated silica',
        'talc',
        'titanium dioxide',
        'triethyl citrate'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión, junto con otros antihipertensivos, en adultos que no están bien controlados con otros fármacos.',
        ref: {
          f: 'dailymed-aprocitentan',
          sec: '1 · Indicaciones',
          cita: 'TRYVIO, in combination with other antihypertensive drugs, is indicated for the treatment of hypertension, to lower blood pressure (BP) in adult patients who are not adequately controlled on other drugs',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-aprocitentan',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Contraindicado en el embarazo porque puede dañar al feto; descartar el embarazo antes de empezar y usar anticoncepción eficaz hasta un mes después.',
          organos: [],
          ref: {
            f: 'dailymed-aprocitentan',
            sec: 'Advertencia destacada',
            cita: 'TRYVIO is contraindicated for use during pregnancy because it may cause fetal harm if used by pregnant patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Los antagonistas de la endotelina causan hepatotoxicidad e insuficiencia hepática; medir aminotransferasas y bilirrubina antes y durante el tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '5 · Advertencias y precauciones',
            cita: 'ERAs cause hepatotoxicity and liver failure',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Retención de líquidos',
          texto: 'Puede requerir intervención.',
          organos: [],
          ref: { f: 'dailymed-aprocitentan', sec: '5 · Advertencias y precauciones', cita: 'Fluid retention may require intervention', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más que con placebo y 2 % o más): edema o retención de líquidos y anemia.',
          '34084-4',
          'Most common adverse reactions (more frequent than placebo and ≥ 2% in TRYVIO-treated patients) are edema/fluid retention and anemia'
        ],
        [
          'Entre las reacciones descritas en otras secciones figuran la toxicidad embriofetal, la hepatotoxicidad, la retención de líquidos, el descenso de la hemoglobina y del recuento de espermatozoides.',
          '34084-4',
          'Embryo-fetal toxicity [see Warnings and Precautions (5.1) ] Hepatotoxicity [see Warnings and Precautions (5.2) ] Fluid retention'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 12.5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión, junto con otros antihipertensivos, en adultos que no están bien controlados con otros fármacos.',
    actua: 'Antagonista de los receptores de endotelina: impide la unión de la endotelina 1 a los receptores ETA y ETB, que median efectos como la vasoconstricción, la fibrosis y la inflamación.',
    recorrido: 'La biodisponibilidad oral absoluta se desconoce; la Cmax se alcanza entre 4 y 5 horas tras 25 mg. Tras una dosis única marcada, alrededor del 52 % de la dosis se eliminó por la orina (0,2 % sin cambios) y el 25 % por las heces (6,8 % sin cambios).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '3 · Formas y concentraciones',
            cita: '12.5 mg: yellow to orange round, film-coated tablet',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral absoluta se desconoce; la Cmax se alcanza entre 4 y 5 horas tras 25 mg.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta se desconoce; la Cmax se alcanza entre 4 y 5 horas tras 25 mg.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to reach C max is between 4 and 5 hours after administration of 25 mg aprocitentan (twice the recommended dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas y calorías no produjo diferencias clínicamente significativas.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'No clinically significant differences in aprocitentan pharmacokinetics were observed following administration of a high-fat, high-calorie meal',
            codigo: '43682-4'
          },
          poblacion: 'sujetos sanos',
          condiciones: 'con una comida rica en grasas y calorías'
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 99 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de unos 20 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas del plasma, sobre todo a la albúmina; el volumen de distribución aparente es de unos 20 L.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Aprocitentan is >99% bound to plasma proteins, primarily albumin',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de unos 20 L.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution of aprocitentan is approximately 20 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de endotelina ETA y ETB',
        efecto: 'Antagonista de los receptores de endotelina: impide la unión de la endotelina 1 a los receptores ETA y ETB, que median efectos como la vasoconstricción, la fibrosis y la inflamación.',
        lugar: [ 'vasos' ],
        datos: [
          {
            t: 'Antagonista de los receptores de endotelina: impide la unión de la endotelina 1 a los receptores ETA y ETB, que median efectos como la vasoconstricción, la fibrosis y la inflamación.',
            ref: {
              f: 'dailymed-aprocitentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Aprocitentan is an ERA that inhibits the binding of endothelin (ET)-1 to ET A and ET B receptors',
              codigo: '43679-0'
            }
          },
          {
            t: 'En la hipertensión, la endotelina 1 puede causar disfunción endotelial, hipertrofia y remodelado vascular, activación simpática y más síntesis de aldosterona.',
            ref: {
              f: 'dailymed-aprocitentan',
              sec: '12.1 · Mecanismo de acción',
              cita: 'In hypertension, ET-1 can cause endothelial dysfunction, vascular hypertrophy and remodeling, sympathetic activation, and increased aldosterone synthesis',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por N-glucosidación mediada por UGT1A1 y UGT2B7 y por hidrólisis no enzimática; en el plasma circula sobre todo sin cambios.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por N-glucosidación mediada por UGT1A1 y UGT2B7 y por hidrólisis no enzimática; en el plasma circula sobre todo sin cambios.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Aprocitentan is primarily metabolized by UGT1A1- and UGT2B7-mediated N-glucosidation and non-enzymatic hydrolysis',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras la toma oral, en el plasma está sobre todo sin cambios.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'Aprocitentan is primarily unchanged in plasma following oral TRYVIO administration',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis única marcada, alrededor del 52 % de la dosis se eliminó por la orina (0,2 % sin cambios) y el 25 % por las heces (6,8 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis única marcada, alrededor del 52 % de la dosis se eliminó por la orina (0,2 % sin cambios) y el 25 % por las heces (6,8 % sin cambios).',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 52% of the dose was eliminated via urine (0.2% unchanged) and 25% via feces (6.8% unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva es de unas 41 horas y el aclaramiento aparente de unos 0,3 L/h.',
          ref: {
            f: 'dailymed-aprocitentan',
            sec: '12.3 · Farmacocinética',
            cita: 'The aprocitentan effective half-life is approximately 41 hours, and the apparent clearance is approximately 0.3 L/h',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la Cmax',
      valor: '4-5',
      unidad: 'h',
      analito: 'aprocitentán',
      condiciones: '25 mg',
      ref: {
        f: 'dailymed-aprocitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to reach C max is between 4 and 5 hours after administration of 25 mg aprocitentan',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '20 (aprox.)',
      unidad: 'L',
      analito: 'aprocitentán',
      ref: {
        f: 'dailymed-aprocitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution of aprocitentan is approximately 20 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'aprocitentán',
      ref: { f: 'dailymed-aprocitentan', sec: '12.3 · Farmacocinética', cita: 'Aprocitentan is >99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida efectiva',
      valor: '41 (aprox.)',
      unidad: 'h',
      analito: 'aprocitentán',
      ref: {
        f: 'dailymed-aprocitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'The aprocitentan effective half-life is approximately 41 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '0,3 (aprox.)',
      unidad: 'L/h',
      analito: 'aprocitentán',
      ref: { f: 'dailymed-aprocitentan', sec: '12.3 · Farmacocinética', cita: 'the apparent clearance is approximately 0.3 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis eliminada por la orina',
      valor: '52 (aprox.)',
      unidad: '% de la dosis',
      analito: 'aprocitentán y metabolitos',
      condiciones: 'dosis única marcada',
      ref: {
        f: 'dailymed-aprocitentan',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 52% of the dose was eliminated via urine (0.2% unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-aprocitentan', 'dfe7a2ee-612c-4aba-834a-d68e6b59a0a6', 'TRYVIO (APROCITENTAN) TABLET, FILM COATED', 'TRYVIO', '8', '2026-08-20', '2026-11-19'),
    rengPubchem(25099191, 'aprocitentan', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
