import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'avatrombopag',
    nombre: 'Avatrombopag',
    clase: 'Agonista del receptor de trombopoyetina',
    sinonimos: [ 'avatrombopag', 'Doptelet' ],
    formula: 'C29H34Cl2N6O3S2',
    masaMolar: 649.7,
    smiles: 'C1CCC(CC1)N2CCN(CC2)C3=C(N=C(S3)NC(=O)C4=CC(=C(N=C4)N5CCC(CC5)C(=O)O)Cl)C6=CC(=CS6)Cl',
    inchikey: 'OFZJKCQENFPZBH-UHFFFAOYSA-N',
    cid: 9852519,
    iupac: '1-[3-chloro-5-[[4-(4-chlorothiophen-2-yl)-5-(4-cyclohexylpiperazin-1-yl)-1,3-thiazol-2-yl]carbamoyl]-2-pyridinyl]piperidine-4-carboxylic acid',
    area: 'Sangre y coagulación'
  },
  presentaciones: [
    {
      id: 'avatrombopag-oral',
      producto: 'DOPTELET · comprimido recubierto con película',
      titular: 'AKARX, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Maleato de avatrombopag',
        ref: { f: 'dailymed-avatrombopag', sec: '11 · Descripción', cita: 'avatrombopag maleate', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'silicon dioxide',
        'crospovidone',
        'magnesium stearate',
        'microcrystalline cellulose',
        'polyvinyl alcohol, unspecified',
        'talc',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Trombocitopenia en adultos con hepatopatía crónica que van a someterse a un procedimiento y trombocitopenia inmunitaria crónica con respuesta insuficiente a un tratamiento previo, entre otros usos.',
        ref: {
          f: 'dailymed-avatrombopag',
          sec: '1 · Indicaciones',
          cita: 'Thrombocytopenia in adult patients with chronic liver disease who are scheduled to undergo a procedure',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-avatrombopag',
      advertencias: [
        {
          titulo: 'Complicaciones trombóticas y tromboembólicas',
          texto: 'Los agonistas del receptor de trombopoyetina se han asociado a complicaciones trombóticas en la hepatopatía crónica o la trombocitopenia inmunitaria; vigilar las plaquetas.',
          organos: [ 'plaquetas' ],
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor platelet counts. Monitor for signs and symptoms of thromboembolic events and institute treatment promptly',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En la hepatopatía crónica, las más frecuentes (3 % o más): fiebre, dolor abdominal, náuseas, cefalea, fatiga y edema periférico.',
          '34084-4',
          'most common adverse reactions (≥3%) were pyrexia, abdominal pain, nausea, headache, fatigue, and edema peripheral'
        ],
        [
          'Las reacciones que llevaron a suspenderlo fueron anemia, fiebre y mialgia, cada una en un solo paciente (0,4 %).',
          '34084-4',
          'Adverse reactions resulting in discontinuation of DOPTELET were anemia, pyrexia, and myalgia; each was reported in a single (0.4%) patient in the DOPTELET (60 mg) treatment group'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 20 mg por comprimido, según la etiqueta; el activo va como maleato de avatrombopag. Los excipientes no son el principio activo.',
    usos: 'Trombocitopenia en adultos con hepatopatía crónica que van a someterse a un procedimiento y trombocitopenia inmunitaria crónica con respuesta insuficiente a un tratamiento previo, entre otros usos.',
    actua: 'Agonista del receptor de trombopoyetina que estimula la proliferación y diferenciación de los megacariocitos a partir de progenitores de la médula ósea y aumenta la producción de plaquetas.',
    recorrido: 'La mediana del tiempo hasta la concentración máxima es de 5 a 6 horas; con alimentos se retrasa de 0 a 2 horas. La excreción fecal supuso el 88 % de la dosis (34 % sin cambios); solo el 6 % apareció en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada (existe también un granulado, que no es esta presentación).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada (existe también un granulado, que no es esta presentación).',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '3 · Formas y concentraciones',
            cita: 'DOPTELET Tablets: 20 mg as round, biconvex, yellow, film-coated tablets',
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
      ocurre: 'La mediana del tiempo hasta la concentración máxima es de 5 a 6 horas; con alimentos se retrasa de 0 a 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La mediana del tiempo hasta la concentración máxima es de 5 a 6 horas; con alimentos se retrasa de 0 a 2 horas.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Absorption The median time to maximal concentration (T max ) occurred at 5 to 6 hours post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con comidas pobres o ricas en grasas, el Tmax se retrasó de 0 a 2 horas respecto al ayuno.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'The T max of avatrombopag was delayed by 0 to 2 hours when DOPTELET tablets were administered with a low-fat or high-fat meal',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en más del 96 % a las proteínas del plasma humano; el volumen de distribución aparente medio estimado es de 180 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 96 % a las proteínas del plasma humano; el volumen de distribución aparente medio estimado es de 180 L.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Avatrombopag is greater than 96% bound to human plasma proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente medio estimado de 180 L.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Avatrombopag has an estimated mean apparent volume of distribution (%CV) of 180 L (25%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de trombopoyetina (TPO)',
        efecto: 'Agonista del receptor de trombopoyetina que estimula la proliferación y diferenciación de los megacariocitos a partir de progenitores de la médula ósea y aumenta la producción de plaquetas.',
        lugar: [ 'medula-osea', 'plaquetas' ],
        datos: [
          {
            t: 'Agonista del receptor de trombopoyetina que estimula la proliferación y diferenciación de los megacariocitos a partir de progenitores de la médula ósea y aumenta la producción de plaquetas.',
            ref: {
              f: 'dailymed-avatrombopag',
              sec: '12.1 · Mecanismo de acción',
              cita: 'small molecule TPO receptor agonist that stimulates proliferation and differentiation of megakaryocytes from bone marrow progenitor cells, resulting in an increased production of platelets',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por las CYP2C9 y CYP3A4 del citocromo P450.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por las CYP2C9 y CYP3A4 del citocromo P450.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Avatrombopag is primarily metabolized by cytochrome P450 CYP2C9 and CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La excreción fecal supuso el 88 % de la dosis (34 % sin cambios); solo el 6 % apareció en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La excreción fecal supuso el 88 % de la dosis (34 % sin cambios); solo el 6 % apareció en la orina.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'Fecal excretion accounted for 88% of the administered dose, with 34% of the dose excreted as unchanged avatrombopag',
            codigo: '43682-4'
          }
        },
        {
          t: 'Solo el 6 % de la dosis se encontró en la orina.',
          ref: { f: 'dailymed-avatrombopag', sec: '12.3 · Farmacocinética', cita: 'Only 6% of the administered dose was found in urine', codigo: '43682-4' }
        },
        {
          t: 'La semivida de eliminación plasmática media es de unas 19 horas.',
          ref: {
            f: 'dailymed-avatrombopag',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma elimination half-life (%CV) of avatrombopag is approximately 19 hours (19%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '5-6',
      unidad: 'h',
      analito: 'avatrombopag',
      ref: {
        f: 'dailymed-avatrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The median time to maximal concentration (T max ) occurred at 5 to 6 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 96',
      unidad: '%',
      analito: 'avatrombopag',
      ref: {
        f: 'dailymed-avatrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'Avatrombopag is greater than 96% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente medio',
      valor: '180',
      unidad: 'L',
      analito: 'avatrombopag',
      ref: {
        f: 'dailymed-avatrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'Avatrombopag has an estimated mean apparent volume of distribution (%CV) of 180 L (25%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática media',
      valor: '19 (aprox.)',
      unidad: 'h',
      analito: 'avatrombopag',
      ref: {
        f: 'dailymed-avatrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma elimination half-life (%CV) of avatrombopag is approximately 19 hours (19%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada por las heces',
      valor: '88',
      unidad: '% de la dosis',
      analito: 'avatrombopag y metabolitos',
      ref: {
        f: 'dailymed-avatrombopag',
        sec: '12.3 · Farmacocinética',
        cita: 'Fecal excretion accounted for 88% of the administered dose',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-avatrombopag', 'e2d5960d-6c18-46cc-86bd-089222b09852', 'DOPTELET (AVATROMBOPAG MALEATE) TABLET, FILM COATED DOPTELET SPRINKLE (AVATROMBOPAG) GRANULE', 'DOPTELET', '21', '2025-08-15', '2026-11-19'),
    rengPubchem(9852519, 'avatrombopag', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
