import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'itraconazol',
    nombre: 'Itraconazol',
    clase: 'Antifúngico azólico',
    sinonimos: [ 'itraconazole', 'Sporanox' ],
    formula: 'C35H38Cl2N8O4',
    masaMolar: 705.6,
    smiles: 'CCC(C)N1C(=O)N(C=N1)C2=CC=C(C=C2)N3CCN(CC3)C4=CC=C(C=C4)OC[C@H]5CO[C@](O5)(CN6C=NC=N6)C7=C(C=C(C=C7)Cl)Cl',
    inchikey: 'VHVPQPYKVGDNFY-ZPGVKDDISA-N',
    cid: 55283,
    iupac: '2-butan-2-yl-4-[4-[4-[4-[[(2R,4S)-2-(2,4-dichlorophenyl)-2-(1,2,4-triazol-1-ylmethyl)-1,3-dioxolan-4-yl]methoxy]phenyl]piperazin-1-yl]phenyl]-1,2,4-triazol-3-one',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'itraconazol-oral',
      producto: 'SPORANOX · cápsula',
      titular: 'JANSSEN PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '100 mg por cápsula, según la etiqueta',
      excipientes: [
        'gelatin, unspecified',
        'hypromellose, unspecified',
        'polyethylene glycol, unspecified',
        'starch, corn',
        'sucrose',
        'titanium dioxide',
        'fd&c blue no. 1',
        'fd&c blue no. 2',
        'd&c red no. 22',
        'd&c red no. 28'
      ],
      usos: {
        t: 'Blastomicosis, histoplasmosis y aspergilosis, y onicomicosis, entre otras infecciones por hongos.',
        ref: { f: 'dailymed-itraconazol', sec: '1 · Indicaciones', cita: 'Blastomycosis, pulmonary and extrapulmonary', codigo: '34067-9' }
      },
      fuente: 'dailymed-itraconazol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardiaca',
          texto: 'No debe usarse para la onicomicosis si hay disfunción ventricular, como insuficiencia cardiaca o antecedentes de ella.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-itraconazol',
            sec: 'Advertencia destacada',
            cita: 'should not be administered for the treatment of onychomycosis in patients with evidence of ventricular dysfunction',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Se han descrito casos raros de toxicidad hepática grave, incluida insuficiencia hepática y muerte.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-itraconazol',
            sec: 'Advertencias',
            cita: 'has been associated with rare cases of serious hepatotoxicity, including liver failure and death',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes en los ensayos: náuseas (11 %), erupción (9 %), vómitos (5 %), edema y dolor de cabeza (4 %).',
          '34084-4',
          'Gastrointestinal Nausea 11 Vomiting 5'
        ],
        [ 'También diarrea, cansancio, fiebre, hipertensión y alteración de la función hepática (3 %).', '34084-4', 'Diarrhea 3 Abdominal Pain 2' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 100 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Blastomicosis, histoplasmosis y aspergilosis, y onicomicosis, entre otras infecciones por hongos.',
    actua: 'Inhibe la síntesis de ergosterol, dependiente del citocromo P450 del hongo, un componente vital de su membrana.',
    recorrido: 'Se absorbe rápido y el pico llega en 2 a 5 horas; su biodisponibilidad oral absoluta ronda el 55 %. La absorción baja si el estómago tiene poca acidez. Sale sobre todo como metabolitos inactivos por la orina (35 %) y las heces (54 %) en una semana; su semivida es de 16 a 28 horas tras una dosis y de 34 a 42 con dosis repetidas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula; su biodisponibilidad es máxima si se toma justo después de una comida completa.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula; su biodisponibilidad es máxima si se toma justo después de una comida completa.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral bioavailability of itraconazole is maximal when SPORANOX ® (itraconazole) Capsules are taken immediately after a full meal',
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
      ocurre: 'Se absorbe rápido y el pico llega en 2 a 5 horas; su biodisponibilidad oral absoluta ronda el 55 %. La absorción baja si el estómago tiene poca acidez.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y el pico llega en 2 a 5 horas; su biodisponibilidad oral absoluta ronda el 55 %. La absorción baja si el estómago tiene poca acidez.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The observed absolute oral bioavailability of itraconazole is about 55%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico plasmático en 2 a 5 horas.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations of itraconazole are reached within 2 to 5 hours following an oral capsule dose',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos', 'unas' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El 99,8 % se une a proteínas y tiene afinidad por los lípidos; se reparte ampliamente (más de 700 L), con poco paso al líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El 99,8 % se une a proteínas y tiene afinidad por los lípidos; se reparte ampliamente (más de 700 L), con poco paso al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Itraconazole is distributed in a large apparent volume in the body (>700 L)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El 99,8 % circula unido a proteínas.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Most of the itraconazole in plasma is bound to protein (99.8%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Síntesis de ergosterol del hongo',
        efecto: 'Inhibe la síntesis de ergosterol, dependiente del citocromo P450 del hongo, un componente vital de su membrana.',
        lugar: [ 'sitio-infeccion', 'unas', 'pulmones' ],
        datos: [
          {
            t: 'Inhibe la síntesis de ergosterol, dependiente del citocromo P450 del hongo, un componente vital de su membrana.',
            ref: {
              f: 'dailymed-itraconazol',
              sec: '12.1 · Mecanismo de acción',
              cita: 'itraconazole inhibits the cytochrome P450-dependent synthesis of ergosterol, which is a vital component of fungal cell membranes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado lo metaboliza ampliamente, sobre todo por CYP3A4; su metabolito principal, el hidroxi-itraconazol, tiene una actividad antifúngica parecida.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado lo metaboliza ampliamente, sobre todo por CYP3A4; su metabolito principal, el hidroxi-itraconazol, tiene una actividad antifúngica parecida.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Itraconazole is extensively metabolized by the liver into a large number of metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Hidroxi-itraconazol',
          actividad: 'activo',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'The main metabolite is hydroxy-itraconazole, which has in vitro antifungal activity comparable to itraconazole',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Sale sobre todo como metabolitos inactivos por la orina (35 %) y las heces (54 %) en una semana; su semivida es de 16 a 28 horas tras una dosis y de 34 a 42 con dosis repetidas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Sale sobre todo como metabolitos inactivos por la orina (35 %) y las heces (54 %) en una semana; su semivida es de 16 a 28 horas tras una dosis y de 34 a 42 con dosis repetidas.',
          ref: {
            f: 'dailymed-itraconazol',
            sec: '12.3 · Farmacocinética',
            cita: 'Itraconazole is excreted mainly as inactive metabolites in urine (35%) and in feces (54%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral absoluta',
      valor: '55 (aprox.)',
      unidad: '%',
      analito: 'itraconazol',
      ref: {
        f: 'dailymed-itraconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The observed absolute oral bioavailability of itraconazole is about 55%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-5',
      unidad: 'h',
      analito: 'itraconazol',
      ref: {
        f: 'dailymed-itraconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'reached within 2 to 5 hours following an oral capsule dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '16-28 (dosis única) y 34-42 (dosis repetidas)',
      unidad: 'h',
      analito: 'itraconazol',
      ref: {
        f: 'dailymed-itraconazol',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of itraconazole generally ranges from 16 to 28 hours after single dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '99,8',
      unidad: '%',
      analito: 'itraconazol',
      ref: { f: 'dailymed-itraconazol', sec: '12.3 · Farmacocinética', cita: 'bound to protein (99.8%)', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '> 700',
      unidad: 'L',
      analito: 'itraconazol',
      ref: { f: 'dailymed-itraconazol', sec: '12.3 · Farmacocinética', cita: 'in a large apparent volume in the body (>700 L)', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina como metabolitos',
      valor: '35',
      unidad: '% de la dosis',
      analito: 'metabolitos inactivos',
      condiciones: 'dosis de solución oral',
      origen: 'otra-presentacion',
      ref: { f: 'dailymed-itraconazol', sec: '12.3 · Farmacocinética', cita: 'in urine (35%) and in feces (54%)', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-itraconazol', 'a4d555fa-787c-40fb-bb7d-b0d4f7318fd0', 'SPORANOX (ITRACONAZOLE) CAPSULE', 'SPORANOX', '31', '2026-07-15', '2026-11-12'),
    rengPubchem(55283, 'itraconazole', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
