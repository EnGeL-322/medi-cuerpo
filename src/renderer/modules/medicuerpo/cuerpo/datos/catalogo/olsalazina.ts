import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'olsalazina',
    nombre: 'Olsalazina',
    clase: 'Aminosalicilato (profármaco de la mesalazina)',
    sinonimos: [ 'olsalazine sodium', 'Dipentum' ],
    formula: 'C14H10N2O6',
    masaMolar: 302.24,
    smiles: 'C1=CC(=C(C=C1N=NC2=CC(=C(C=C2)O)C(=O)O)C(=O)O)O',
    inchikey: 'QQBDLJCYGRGAKP-UHFFFAOYSA-N',
    cid: 22419,
    iupac: '5-[(3-carboxy-4-hydroxyphenyl)diazenyl]-2-hydroxybenzoic acid',
    area: 'Dolor y fiebre'
  },
  presentaciones: [
    {
      id: 'olsalazina-oral',
      producto: 'Dipentum · cápsula',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE, GELATIN COATED',
      liberacion: 'no declarada',
      concentraciones: '250 mg por cápsula, según la etiqueta',
      sal: { nombre: 'Sal sódica de olsalazina', ref: { f: 'dailymed-olsalazina', sec: '11 · Descripción', cita: 'olsalazine sodium', codigo: '34089-3' } },
      excipientes: [ 'magnesium stearate', 'ferrosoferric oxide', 'caramel', 'gelatin, unspecified', 'titanium dioxide' ],
      usos: {
        t: 'Mantenimiento de la remisión de la colitis ulcerosa en adultos que no toleran la sulfasalazina.',
        ref: {
          f: 'dailymed-olsalazina',
          sec: '1 · Indicaciones',
          cita: 'DIPENTUM is indicated for the maintenance of remission of ulcerative colitis in adult patients who are intolerant of sulfasalazine',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-olsalazina',
      advertencias: [
        {
          titulo: 'Insuficiencia renal',
          texto: 'Valorar la función renal al inicio y periódicamente; suspender si empeora.',
          organos: [ 'rinones' ],
          ref: {
            f: 'dailymed-olsalazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Assess renal function at the beginning of treatment and periodically during treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Síndrome de intolerancia aguda a la mesalazina',
          texto: 'Suspender si se sospecha (calambres, dolor abdominal agudo, diarrea sanguinolenta, a veces fiebre, cefalea y exantema).',
          organos: [],
          ref: {
            f: 'dailymed-olsalazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue treatment if acute intolerance syndrome (cramping, acute abdominal pain, bloody diarrhea, sometimes fever, headache and rash) is suspected',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipersensibilidad, incluidas miocarditis y pericarditis',
          texto: 'Suspender si se sospecha una reacción de hipersensibilidad.',
          organos: [],
          ref: {
            f: 'dailymed-olsalazina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue DIPENTUM if a hypersensitivity reaction is suspected',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones que más llevaron a suspenderla fueron diarrea o heces blandas (6 %), dolor abdominal (1 %) y exantema o picor (1 %).',
          '34084-4',
          'most common adverse reactions leading to discontinuation in DIPENTUM-treated patients were diarrhea/loose stools (6%), abdominal pain (1%), and rash/itching (1%)'
        ],
        [
          'Entre las reacciones descritas en otras secciones figura la insuficiencia renal.',
          '34084-4',
          'Renal impairment [see Warnings and Precautions (5.1) ]'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 250 mg por cápsula, según la etiqueta; el activo va como sal sódica de olsalazina. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento de la remisión de la colitis ulcerosa en adultos que no toleran la sulfasalazina.',
    actua: 'Al llegar al colon, las bacterias la convierten en ácido 5-aminosalicílico (mesalazina), que parece ejercer un efecto antiinflamatorio local sobre las células epiteliales del colon.',
    recorrido: 'Solo se absorbe alrededor del 2,4 % de una dosis oral de 1 g; entre el 98 % y el 99 % llega al colon, donde cada molécula se convierte en dos de 5-ASA, que se absorbe despacio. La semivida sérica de la olsalazina es muy corta (unas 0,9 horas) y su recuperación urinaria inferior al 1 %; alrededor del 20 % del 5-ASA total se recupera en la orina, casi todo como Ac-5-ASA.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'intestino-grueso' ],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula de gelatina: se disgrega en el tubo digestivo; casi toda la dosis llega al colon.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula de gelatina: se disgrega en el tubo digestivo; casi toda la dosis llega al colon.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of olsalazine, the 98 to 99% of a dose will reach the colon',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Solo se absorbe alrededor del 2,4 % de una dosis oral de 1 g; entre el 98 % y el 99 % llega al colon, donde cada molécula se convierte en dos de 5-ASA, que se absorbe despacio.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Solo se absorbe alrededor del 2,4 % de una dosis oral de 1 g; entre el 98 % y el 99 % llega al colon, donde cada molécula se convierte en dos de 5-ASA, que se absorbe despacio.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 2.4% of a single 1 g oral dose is absorbed',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones séricas máximas de olsalazina aparecen hacia la hora y son bajas.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Maximum serum concentrations of olsalazine appear after approximately 1 hour',
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
      ocurre: 'La olsalazina y su sulfato se unen en más del 99 % a las proteínas del plasma; el 5-ASA y el Ac-5-ASA, en un 74 % y un 81 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La olsalazina y su sulfato se unen en más del 99 % a las proteínas del plasma; el 5-ASA y el Ac-5-ASA, en un 74 % y un 81 %.',
          ref: { f: 'dailymed-olsalazina', sec: '12.3 · Farmacocinética', cita: 'Olsalazine is more than 99% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Ciclooxigenasa y lipooxigenasa de la mucosa del colon',
        efecto: 'Al llegar al colon, las bacterias la convierten en ácido 5-aminosalicílico (mesalazina), que parece ejercer un efecto antiinflamatorio local sobre las células epiteliales del colon.',
        lugar: [ 'intestino-grueso' ],
        datos: [
          {
            t: 'Al llegar al colon, las bacterias la convierten en ácido 5-aminosalicílico (mesalazina), que parece ejercer un efecto antiinflamatorio local sobre las células epiteliales del colon.',
            ref: {
              f: 'dailymed-olsalazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Upon reaching the colon, colonic bacteria convert olsalazine into 5‑aminosalicylic acid (5-ASA or mesalazine)',
              codigo: '43679-0'
            }
          },
          {
            t: 'El mecanismo de la mesalazina no se conoce del todo; parece un efecto antiinflamatorio tópico sobre las células epiteliales del colon.',
            ref: {
              f: 'dailymed-olsalazina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'appears to be a topical anti-inflammatory effect on colonic epithelial cells',
              codigo: '43679-0'
            },
            poblacion: 'intestino-grueso'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En el colon se convierte en mesalazina; alrededor del 0,1 % se metaboliza en el hígado a olsalazina-O-sulfato, y el 5-ASA se acetila en el epitelio del colon y en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En el colon se convierte en mesalazina; alrededor del 0,1 % se metaboliza en el hígado a olsalazina-O-sulfato, y el 5-ASA se acetila en el epitelio del colon y en el hígado.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 0.1% of an oral dose of olsalazine is metabolized in the liver to olsalazine-S',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido 5-aminosalicílico (mesalazina)',
          actividad: 'activo',
          nota: 'Fracción activa liberada en el colon.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12 · Farmacología clínica',
            cita: 'colonic bacteria convert olsalazine into 5‑aminosalicylic acid (5-ASA or mesalazine)',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'N-acetil-5-ASA',
          actividad: 'inactivo',
          nota: 'Metabolito principal del 5-ASA, desactivado por acetilación.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'N-acetyl-5-ASA (Ac-5-ASA), the major metabolite of 5-ASA found in plasma and urine, is acetylated (deactivated)',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La semivida sérica de la olsalazina es muy corta (unas 0,9 horas) y su recuperación urinaria inferior al 1 %; alrededor del 20 % del 5-ASA total se recupera en la orina, casi todo como Ac-5-ASA.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La semivida sérica de la olsalazina es muy corta (unas 0,9 horas) y su recuperación urinaria inferior al 1 %; alrededor del 20 % del 5-ASA total se recupera en la orina, casi todo como Ac-5-ASA.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Olsalazine has a very short serum half-life, approximately 0.9 hour',
            codigo: '43682-4'
          }
        },
        {
          t: 'Alrededor del 20 % del 5-ASA total se recupera en la orina, casi exclusivamente como Ac-5-ASA.',
          ref: {
            f: 'dailymed-olsalazina',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 20% of the total 5-ASA is recovered in the urine, where it is found almost exclusively as Ac-5-ASA',
            codigo: '43682-4'
          },
          poblacion: 'orina'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Fracción absorbida de una dosis de 1 g',
      valor: '2,4 (aprox.)',
      unidad: '%',
      analito: 'olsalazina',
      ref: { f: 'dailymed-olsalazina', sec: '12.3 · Farmacocinética', cita: 'approximately 2.4% of a single 1 g oral dose is absorbed', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración sérica máxima',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'olsalazina',
      ref: {
        f: 'dailymed-olsalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Maximum serum concentrations of olsalazine appear after approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'olsalazina',
      ref: { f: 'dailymed-olsalazina', sec: '12.3 · Farmacocinética', cita: 'Olsalazine is more than 99% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida sérica',
      valor: '0,9 (aprox.)',
      unidad: 'h',
      analito: 'olsalazina',
      ref: {
        f: 'dailymed-olsalazina',
        sec: '12.3 · Farmacocinética',
        cita: 'Olsalazine has a very short serum half-life, approximately 0.9 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperación urinaria de olsalazina',
      valor: '< 1',
      unidad: '%',
      analito: 'olsalazina',
      ref: { f: 'dailymed-olsalazina', sec: '12.3 · Farmacocinética', cita: 'The urinary recovery of olsalazine is below 1%', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-olsalazina', '8512d0c6-db4e-4673-b3b4-28975c18413f', 'DIPENTUM (OLSALAZINE SODIUM) CAPSULE, GELATIN COATED', 'Dipentum', '17', '2026-08-28', '2026-11-19'),
    rengPubchem(22419, 'olsalazine sodium', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
