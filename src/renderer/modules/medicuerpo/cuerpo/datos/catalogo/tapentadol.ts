import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tapentadol',
    nombre: 'Tapentadol',
    clase: 'Analgésico de acción central (agonista mu e inhibidor de la recaptación de noradrenalina)',
    sinonimos: [ 'tapentadol', 'Nucynta' ],
    formula: 'C14H23NO',
    masaMolar: 221.34,
    smiles: 'CC[C@@H](C1=CC(=CC=C1)O)[C@@H](C)CN(C)C',
    inchikey: 'KWTWDQCKEHXFFR-SMDDNHRTSA-N',
    cid: 9838022,
    iupac: '3-[(2R,3R)-1-(dimethylamino)-2-methylpentan-3-yl]phenol',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'tapentadol-oral',
      producto: 'Nucynta · comprimido recubierto con película',
      titular: 'COLLEGIUM PHARMACEUTICAL, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '50 mg, 75 mg o 100 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de tapentadol',
        ref: { f: 'dailymed-tapentadol', sec: '11 · Descripción', cita: 'tapentadol hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'povidone, unspecified',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'aluminum oxide'
      ],
      usos: {
        t: 'Dolor agudo lo bastante intenso como para necesitar un opioide, en adultos y niños desde 6 años con al menos 40 kg.',
        ref: {
          f: 'dailymed-tapentadol',
          sec: '1 · Indicaciones',
          cita: 'indicated for the management of acute pain severe enough to require an opioid analgesic',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tapentadol',
      advertencias: [
        {
          titulo: 'Adicción, abuso y mal uso',
          texto: 'Expone a riesgos de adicción, abuso y mal uso, que pueden llevar a sobredosis y muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-tapentadol',
            sec: 'Advertencia destacada',
            cita: 'NUCYNTA tablets expose users to risks of addiction, abuse, and misuse, which can lead to overdose and death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Depresión respiratoria',
          texto: 'Se han descrito depresiones respiratorias graves, potencialmente mortales o mortales con los opioides, incluso usados como se recomienda.',
          organos: [ 'pulmones', 'encefalo' ],
          ref: {
            f: 'dailymed-tapentadol',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious, life-threatening, or fatal respiratory depression has been reported with the use of opioids',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en adultos (≥ 10 %): náuseas, mareo, vómitos y somnolencia.',
          '34084-4',
          'were nausea, dizziness, vomiting and somnolence'
        ],
        [
          'En niños desde 6 años (≥ 5 %): vómitos, estreñimiento, náuseas, picor y fiebre.',
          '34084-4',
          'vomiting, constipation, nausea, pruritus, and pyrexia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 50 mg, 75 mg o 100 mg por comprimido, según la etiqueta; el activo va como clorhidrato de tapentadol. Los excipientes no son el principio activo.',
    usos: 'Dolor agudo lo bastante intenso como para necesitar un opioide, en adultos y niños desde 6 años con al menos 40 kg.',
    actua: 'Su mecanismo exacto se desconoce; en estudios preclínicos es agonista del receptor opioide mu e inhibe la recaptación de noradrenalina.',
    recorrido: 'Su biodisponibilidad absoluta media es de alrededor del 32 % por un primer paso amplio; con una comida rica en grasa, el AUC y la Cmax suben un 25 % y un 16 %. Él y sus metabolitos salen casi solo por los riñones (99 %); alrededor del 70 % de la dosis sale por la orina conjugado y el 3 % sin cambios. Su semivida terminal media es de 4 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: { f: 'dailymed-tapentadol', sec: '3 · Formas y concentraciones', cita: 'round, biconvex and film-coated yellow tablets', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Su biodisponibilidad absoluta media es de alrededor del 32 % por un primer paso amplio; con una comida rica en grasa, el AUC y la Cmax suben un 25 % y un 16 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Su biodisponibilidad absoluta media es de alrededor del 32 % por un primer paso amplio; con una comida rica en grasa, el AUC y la Cmax suben un 25 % y un 16 %.',
          ref: {
            f: 'dailymed-tapentadol',
            sec: '12.3 · Farmacocinética',
            cita: 'is approximately 32% due to extensive first-pass metabolism',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente por el cuerpo (540 L tras la vía intravenosa) y se une poco a proteínas (alrededor del 20 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente por el cuerpo (540 L tras la vía intravenosa) y se une poco a proteínas (alrededor del 20 %).',
          ref: { f: 'dailymed-tapentadol', sec: '12.3 · Farmacocinética', cita: 'Tapentadol is widely distributed throughout the body', codigo: '43682-4' }
        },
        {
          t: 'Unión a proteínas de alrededor del 20 %.',
          ref: {
            f: 'dailymed-tapentadol',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding is low and amounts to approximately 20%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor opioide mu y transportador de noradrenalina',
        efecto: 'Su mecanismo exacto se desconoce; en estudios preclínicos es agonista del receptor opioide mu e inhibe la recaptación de noradrenalina.',
        lugar: [ 'encefalo', 'nervios' ],
        datos: [
          {
            t: 'Su mecanismo exacto se desconoce; en estudios preclínicos es agonista del receptor opioide mu e inhibe la recaptación de noradrenalina.',
            ref: {
              f: 'dailymed-tapentadol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'tapentadol is a mu-opioid receptor (MOR) agonist and a norepinephrine reuptake inhibitor (NRI)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza en un 97 %, sobre todo por conjugación con ácido glucurónico; en menor medida, CYP2C9, CYP2C19 y CYP2D6 forman N-desmetil e hidroxi tapentadol. Ningún metabolito contribuye a la analgesia.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza en un 97 %, sobre todo por conjugación con ácido glucurónico; en menor medida, CYP2C9, CYP2C19 y CYP2D6 forman N-desmetil e hidroxi tapentadol. Ningún metabolito contribuye a la analgesia.',
          ref: {
            f: 'dailymed-tapentadol',
            sec: '12.3 · Farmacocinética',
            cita: 'The major pathway of tapentadol metabolism is conjugation with glucuronic acid to produce glucuronides',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Tapentadol-O-glucurónido',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-tapentadol',
            sec: '12.3 · Farmacocinética',
            cita: 'None of the metabolites contribute to the analgesic activity',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Él y sus metabolitos salen casi solo por los riñones (99 %); alrededor del 70 % de la dosis sale por la orina conjugado y el 3 % sin cambios. Su semivida terminal media es de 4 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Él y sus metabolitos salen casi solo por los riñones (99 %); alrededor del 70 % de la dosis sale por la orina conjugado y el 3 % sin cambios. Su semivida terminal media es de 4 horas.',
          ref: {
            f: 'dailymed-tapentadol',
            sec: '12.3 · Farmacocinética',
            cita: 'Tapentadol and its metabolites are excreted almost exclusively (99%) via the kidneys',
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
      valor: '32 (aprox.)',
      unidad: '%',
      analito: 'tapentadol',
      condiciones: 'dosis única en ayunas',
      ref: {
        f: 'dailymed-tapentadol',
        sec: '12.3 · Farmacocinética',
        cita: 'is approximately 32% due to extensive first-pass metabolism',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '540 (± 98)',
      unidad: 'L',
      analito: 'tapentadol',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-tapentadol',
        sec: '12.3 · Farmacocinética',
        cita: 'the volume of distribution (Vz) for tapentadol is 540 +/- 98 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '20 (aprox.)',
      unidad: '%',
      analito: 'tapentadol',
      ref: { f: 'dailymed-tapentadol', sec: '12.3 · Farmacocinética', cita: 'amounts to approximately 20%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal media',
      valor: '4',
      unidad: 'h',
      analito: 'tapentadol',
      ref: {
        f: 'dailymed-tapentadol',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life is on average 4 hours after oral administration',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en forma conjugada',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'conjugados de tapentadol',
      ref: {
        f: 'dailymed-tapentadol',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 70% (55% O-glucuronide and 15% sulfate of tapentadol) of the dose is excreted in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tapentadol', '80938c30-9fe3-4c7d-9d9c-5476638cfb2d', 'NUCYNTA (TAPENTADOL HYDROCHLORIDE) TABLET, FILM COATED', 'Nucynta', '7', '2026-01-06', '2026-11-12'),
    rengPubchem(9838022, 'tapentadol', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
