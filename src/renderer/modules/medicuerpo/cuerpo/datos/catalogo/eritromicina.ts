import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eritromicina',
    nombre: 'Eritromicina',
    clase: 'Antibiótico macrólido',
    sinonimos: [ 'erythromycin', 'Ery-Tab' ],
    formula: 'C37H67NO13',
    masaMolar: 733.9,
    smiles: 'CC[C@@H]1[C@@]([C@@H]([C@H](C(=O)[C@@H](C[C@@]([C@@H]([C@H]([C@@H]([C@H](C(=O)O1)C)O[C@H]2C[C@@]([C@H]([C@@H](O2)C)O)(C)OC)C)O[C@H]3[C@@H]([C@H](C[C@H](O3)C)N(C)C)O)(C)O)C)C)O)(C)O',
    inchikey: 'ULGZDMOVFRHVEP-RWJQBGPGSA-N',
    cid: 12560,
    iupac: '(3R,4S,5S,6R,7R,9R,11R,12R,13S,14R)-6-[(2S,3R,4S,6R)-4-(dimethylamino)-3-hydroxy-6-methyloxan-2-yl]oxy-14-ethyl-7,12,13-trihydroxy-4-[(2R,4R,5S,6S)-5-hydroxy-4-methoxy-4,6-dimethyloxan-2-yl]oxy-3,5,7,9,11,13-hexamethyl-oxacyclotetradecane-2,10-dione',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'eritromicina-oral',
      producto: 'ERY-TAB · comprimido de liberación retardada',
      titular: 'ARBOR PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación retardada',
      formaFuente: 'TABLET, DELAYED RELEASE',
      liberacion: 'retardada',
      concentraciones: '250 mg, 333 mg o 500 mg por comprimido, según la etiqueta',
      excipientes: [
        'ammonia',
        'silicon dioxide',
        'croscarmellose sodium',
        'crospovidone (15 mpa.s at 5%)',
        'diacetylated monoglycerides',
        'hydroxypropyl cellulose (1600000 wamw)',
        'hypromellose, unspecified',
        'hypromellose phthalate (24% phthalate, 55 cst)',
        'magnesium stearate',
        'microcrystalline cellulose',
        'povidone, unspecified',
        'propylene glycol',
        'sodium citrate, unspecified form',
        'sorbitan monooleate',
        'talc',
        'titanium dioxide'
      ],
      usos: {
        t: 'Infecciones por bacterias sensibles demostradas o muy probables.',
        ref: {
          f: 'dailymed-eritromicina',
          sec: '1 · Indicaciones',
          cita: 'ERY-TAB ® should be used only to treat or prevent infections that are proven or strongly suspected to be caused by susceptible bacteria',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-eritromicina',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se han descrito alteraciones hepáticas, con aumento de enzimas y hepatitis con o sin ictericia.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-eritromicina',
            sec: 'Advertencias',
            cita: 'There have been reports of hepatic dysfunction, including increased liver enzymes',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Prolongación del QT',
          texto: 'Se ha asociado a prolongación del QT y, rara vez, arritmias.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-eritromicina',
            sec: 'Advertencias',
            cita: 'Erythromycin has been associated with prolongation of the QT interval',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes son digestivas y dependen de la dosis: náuseas, vómitos, dolor abdominal, diarrea y falta de apetito.',
          '34084-4',
          'They include nausea, vomiting, abdominal pain, diarrhea and anorexia'
        ],
        [
          'Se ha asociado a prolongación del QT y arritmias ventriculares.',
          '34084-4',
          'Erythromycin has been associated with QT prolongation and ventricular arrhythmias'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación retardada: 250 mg, 333 mg o 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Infecciones por bacterias sensibles demostradas o muy probables.',
    actua: 'Inhibe la síntesis de proteínas al unirse a la subunidad ribosómica 50S de los microorganismos sensibles.',
    recorrido: 'Se absorbe con facilidad en forma activa, aunque con variaciones entre personas. Se excreta por la bilis; menos del 5 % de la dosis aparece en forma activa en la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'El comprimido gastrorresistente atraviesa el estómago sin liberar casi nada.',
      ocurre: 'Comprimido con cubierta entérica: protege al antibiótico del ácido del estómago y lo libera en el intestino delgado.',
      sigue: 'En el intestino delgado se libera la eritromicina.',
      datos: [
        {
          t: 'Comprimido con cubierta entérica: protege al antibiótico del ácido del estómago y lo libera en el intestino delgado.',
          ref: {
            f: 'dailymed-eritromicina',
            sec: '12 · Farmacología clínica',
            cita: 'This coating allows for minimal release of erythromycin in acidic environments, e.g., stomach',
            codigo: '34090-1'
          }
        },
        {
          t: 'Los comprimidos están diseñados para liberarla y absorberla en el intestino delgado.',
          ref: {
            f: 'dailymed-eritromicina',
            sec: '12 · Farmacología clínica',
            cita: 'The tablets are designed for optimal drug release and absorption in the small intestine',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con facilidad en forma activa, aunque con variaciones entre personas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con facilidad en forma activa, aunque con variaciones entre personas.',
          ref: {
            f: 'dailymed-eritromicina',
            sec: '12 · Farmacología clínica',
            cita: 'Orally administered erythromycin base and its salts are readily absorbed in the microbiologically active form',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une mucho a proteínas del plasma y difunde con facilidad a la mayoría de los líquidos del cuerpo; pasa a la leche materna.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une mucho a proteínas del plasma y difunde con facilidad a la mayoría de los líquidos del cuerpo; pasa a la leche materna.',
          ref: {
            f: 'dailymed-eritromicina',
            sec: '12 · Farmacología clínica',
            cita: 'After absorption, erythromycin diffuses readily into most body fluids',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Subunidad ribosómica 50S bacteriana',
        efecto: 'Inhibe la síntesis de proteínas al unirse a la subunidad ribosómica 50S de los microorganismos sensibles.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'Inhibe la síntesis de proteínas al unirse a la subunidad ribosómica 50S de los microorganismos sensibles.',
            ref: {
              f: 'dailymed-eritromicina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Erythromycin acts by inhibition of protein synthesis by binding 50S ribosomal subunits of susceptible organisms',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Con función hepática normal se concentra en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Con función hepática normal se concentra en el hígado.',
          ref: { f: 'dailymed-eritromicina', sec: '12 · Farmacología clínica', cita: 'erythromycin is concentrated in the liver', codigo: '34090-1' }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'bilis', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta por la bilis; menos del 5 % de la dosis aparece en forma activa en la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta por la bilis; menos del 5 % de la dosis aparece en forma activa en la orina.',
          ref: { f: 'dailymed-eritromicina', sec: '12 · Farmacología clínica', cita: 'is excreted in the bile', codigo: '34090-1' }
        },
        {
          t: 'Menos del 5 % se recupera en forma activa en la orina.',
          ref: {
            f: 'dailymed-eritromicina',
            sec: '12 · Farmacología clínica',
            cita: 'less than 5% of the administered dose can be recovered in the active form in the urine',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'orina',
      nombre: 'Recuperado en forma activa en la orina',
      valor: '< 5',
      unidad: '% de la dosis',
      analito: 'eritromicina',
      ref: {
        f: 'dailymed-eritromicina',
        sec: '12 · Farmacología clínica',
        cita: 'less than 5% of the administered dose can be recovered in the active form in the urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-eritromicina', 'fda44eb6-7901-4b80-ba0b-216f6cacf3fd', 'ERY-TAB (ERYTHROMYCIN) TABLET, DELAYED RELEASE', 'ERY-TAB', '10', '2018-12-12', '2026-11-12'),
    rengPubchem(12560, 'erythromycin', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
