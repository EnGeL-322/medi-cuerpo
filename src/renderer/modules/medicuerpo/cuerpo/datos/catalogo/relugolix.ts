import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'relugolix',
    nombre: 'Relugolix',
    clase: 'Antagonista no peptídico del receptor de la GnRH',
    sinonimos: [ 'relugolix', 'Orgovyx' ],
    formula: 'C29H27F2N7O5S',
    masaMolar: 623.6,
    smiles: 'CN(C)CC1=C(SC2=C1C(=O)N(C(=O)N2CC3=C(C=CC=C3F)F)C4=NN=C(C=C4)OC)C5=CC=C(C=C5)NC(=O)NOC',
    inchikey: 'AOMXMOCNKJTRQP-UHFFFAOYSA-N',
    cid: 10348973,
    iupac: '1-[4-[1-[(2,6-difluorophenyl)methyl]-5-[(dimethylamino)methyl]-3-(6-methoxypyridazin-3-yl)-2,4-dioxothieno[2,3-d]pyrimidin-6-yl]phenyl]-3-methoxyurea',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'relugolix-oral',
      producto: 'Orgovyx · comprimido recubierto con película',
      titular: 'SUMITOMO PHARMA AMERICA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '120 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'sodium starch glycolate type a',
        'hydroxypropyl cellulose (90000 wamw)',
        'magnesium stearate',
        'hypromellose 2910 (6 mpa.s)',
        'titanium dioxide',
        'ferric oxide red',
        'carnauba wax'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de próstata avanzado.',
        ref: {
          f: 'dailymed-relugolix',
          sec: '1 · Indicaciones',
          cita: 'ORGOVYX is indicated for the treatment of adult patients with advanced prostate cancer',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-relugolix',
      advertencias: [
        {
          titulo: 'Prolongación del intervalo QT',
          texto: 'La terapia de privación androgénica puede prolongar el intervalo QT.',
          organos: [],
          ref: {
            f: 'dailymed-relugolix',
            sec: '5 · Advertencias y precauciones',
            cita: 'Androgen deprivation therapy may prolong the QT interval',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipersensibilidad',
          texto: 'Puede causar reacciones de hipersensibilidad, incluido el angioedema.',
          organos: [],
          ref: {
            f: 'dailymed-relugolix',
            sec: '5 · Advertencias y precauciones',
            cita: 'ORGOVYX can cause hypersensitivity reactions, including angioedema',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Puede causar daño fetal; los varones con pareja en edad fértil deben usar anticoncepción eficaz.',
          organos: [],
          ref: { f: 'dailymed-relugolix', sec: '5 · Advertencias y precauciones', cita: 'ORGOVYX can cause fetal harm', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (10 % o más) y alteraciones de laboratorio (15 % o más): sofocos, glucosa y triglicéridos elevados, dolor musculoesquelético, hemoglobina baja, ALT y AST elevadas, fatiga, estreñimiento y diarrea.',
          '34084-4',
          'most common adverse reactions (≥ 10%) and laboratory abnormalities (≥ 15%) were hot flush, glucose increased, triglycerides increased, musculoskeletal pain, hemoglobin decreased'
        ],
        [
          'La seguridad se evaluó en el estudio HERO, aleatorizado y abierto, en pacientes con cáncer de próstata avanzado.',
          '34084-4',
          'The safety of ORGOVYX was evaluated in HERO, a randomized (2:1), open-label, clinical study in patients with advanced prostate cancer'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 120 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de próstata avanzado.',
    actua: 'Antagonista no peptídico del receptor de la GnRH que se une de forma competitiva a los receptores hipofisarios y reduce la liberación de LH y FSH y, con ello, la testosterona.',
    recorrido: 'Es sustrato de la P-gp intestinal y su biodisponibilidad absoluta media es del 12 %; la mediana del tmax es de 2,25 horas y una comida rica en grasas no cambia su farmacocinética de forma significativa. Tras una dosis marcada, alrededor del 81 % de la radiactividad se recuperó en las heces (4,2 % sin cambios) y el 4,1 % en la orina (2,2 % sin cambios).'
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
            f: 'dailymed-relugolix',
            sec: '3 · Formas y concentraciones',
            cita: 'Tablets: 120 mg, light red, almond-shaped, film-coated',
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
      ocurre: 'Es sustrato de la P-gp intestinal y su biodisponibilidad absoluta media es del 12 %; la mediana del tmax es de 2,25 horas y una comida rica en grasas no cambia su farmacocinética de forma significativa.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Es sustrato de la P-gp intestinal y su biodisponibilidad absoluta media es del 12 %; la mediana del tmax es de 2,25 horas y una comida rica en grasas no cambia su farmacocinética de forma significativa.',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'Relugolix is a substrate for intestinal P-gp. The mean (CV%) absolute bioavailability of relugolix is 12% (62%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tiempo hasta la concentración máxima es de 2,25 horas (0,5 a 5,0).',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'The median (min, max) time to maximum concentration (T max ) of relugolix is 2.25 (0.5, 5.0) hours',
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
      ocurre: 'Se une en un 68 a 71 % a las proteínas del plasma, sobre todo a la albúmina; el cociente sangre/plasma medio es de 0,78.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 68 a 71 % a las proteínas del plasma, sobre todo a la albúmina; el cociente sangre/plasma medio es de 0,78.',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of relugolix is 68 to 71%, primarily to albumin and to a lesser extent to α 1 -acid glycoprotein',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor de la GnRH',
        efecto: 'Antagonista no peptídico del receptor de la GnRH que se une de forma competitiva a los receptores hipofisarios y reduce la liberación de LH y FSH y, con ello, la testosterona.',
        lugar: [],
        datos: [
          {
            t: 'Antagonista no peptídico del receptor de la GnRH que se une de forma competitiva a los receptores hipofisarios y reduce la liberación de LH y FSH y, con ello, la testosterona.',
            ref: {
              f: 'dailymed-relugolix',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Relugolix is a nonpeptide GnRH receptor antagonist that competitively binds to pituitary GnRH receptors, thereby, reducing the release of luteinizing hormone (LH) and follicle-stimulating hormone (FSH), and consequently testosterone',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A y en menor medida por la CYP2C8.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A y en menor medida por la CYP2C8.',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'Relugolix is metabolized primarily by CYP3A and to a lesser extent by CYP2C8',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis marcada, alrededor del 81 % de la radiactividad se recuperó en las heces (4,2 % sin cambios) y el 4,1 % en la orina (2,2 % sin cambios).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis marcada, alrededor del 81 % de la radiactividad se recuperó en las heces (4,2 % sin cambios) y el 4,1 % en la orina (2,2 % sin cambios).',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 81% of the radioactivity was recovered in feces with 4.2% as unchanged and 4.1% in urine with 2.2% as unchanged',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida efectiva media es de 25 horas y la terminal de 61 horas; el aclaramiento total es de 29 L/h y el renal de 8 L/h.',
          ref: {
            f: 'dailymed-relugolix',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean effective half-life of relugolix is 25 hours and the mean (CV%) terminal elimination half-life is 61 (11%) hours',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '12',
      unidad: '%',
      analito: 'relugolix',
      ref: {
        f: 'dailymed-relugolix',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) absolute bioavailability of relugolix is 12% (62%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta la concentración máxima',
      valor: '2,25',
      unidad: 'h',
      analito: 'relugolix',
      ref: {
        f: 'dailymed-relugolix',
        sec: '12.3 · Farmacocinética',
        cita: 'time to maximum concentration (T max ) of relugolix is 2.25 (0.5, 5.0) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '68-71',
      unidad: '%',
      analito: 'relugolix',
      ref: { f: 'dailymed-relugolix', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of relugolix is 68 to 71%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal media',
      valor: '61',
      unidad: 'h',
      analito: 'relugolix',
      ref: {
        f: 'dailymed-relugolix',
        sec: '12.3 · Farmacocinética',
        cita: 'the mean (CV%) terminal elimination half-life is 61 (11%) hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento total medio',
      valor: '29',
      unidad: 'L/h',
      analito: 'relugolix',
      ref: {
        f: 'dailymed-relugolix',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean (CV%) total clearance of relugolix is 29 (15%) L/h',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad recuperada en las heces',
      valor: '81 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 80 mg',
      ref: {
        f: 'dailymed-relugolix',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 81% of the radioactivity was recovered in feces with 4.2% as unchanged',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-relugolix', '077a92f6-9f1b-479a-87c7-c92b5db6aa9c', 'ORGOVYX (RELUGOLIX) TABLET, FILM COATED', 'Orgovyx', '13', '2026-10-19', '2026-11-19'),
    rengPubchem(10348973, 'relugolix', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
