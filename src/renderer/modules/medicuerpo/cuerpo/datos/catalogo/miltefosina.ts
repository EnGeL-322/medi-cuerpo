import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'miltefosina',
    nombre: 'Miltefosina',
    clase: 'Antileishmaniásico alquilfosfocolina',
    sinonimos: [ 'miltefosine', 'Impavido' ],
    formula: 'C21H46NO4P',
    masaMolar: 407.6,
    smiles: 'CCCCCCCCCCCCCCCCOP(=O)([O-])OCC[N+](C)(C)C',
    inchikey: 'PQLXHQMOHUQAKB-UHFFFAOYSA-N',
    cid: 3599,
    iupac: 'hexadecyl 2-(trimethylazaniumyl)ethyl phosphate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'miltefosina-oral',
      producto: 'IMPAVIDO · cápsula',
      titular: 'ETON PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '50 mg por cápsula, según la etiqueta',
      excipientes: [
        'talc',
        'gelatin',
        'ferric oxide red',
        'lactose monohydrate',
        'water',
        'cellulose, microcrystalline',
        'silicon dioxide',
        'magnesium stearate',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de la leishmaniasis visceral, cutánea y mucosa por las especies indicadas, desde los 12 años y 30 kg.',
        ref: {
          f: 'dailymed-miltefosina',
          sec: '1 · Indicaciones',
          cita: 'IMPAVIDO (miltefosine) capsules are indicated in adults and pediatric patients 12 years of age and older weighing greater than or equal to 30 kg (66 lbs)',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-miltefosina',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Contraindicado en el embarazo; según datos animales puede causar daño fetal.',
          organos: [],
          ref: {
            f: 'dailymed-miltefosina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Based on animal data, miltefosine may cause fetal harm',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Alteración de la calidad del semen y de la espermatogénesis',
          texto: 'Puede alterar la fertilidad masculina.',
          organos: [],
          ref: { f: 'dailymed-miltefosina', sec: '5 · Advertencias y precauciones', cita: 'IMPAVIDO may impair male fertility', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ],
        [
          'En el ensayo de leishmaniasis visceral se notificaron reacciones graves en el 2 % de los tratados.',
          '34084-4',
          'Serious adverse reactions were reported in 2% of IMPAVIDO recipients (6/299)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 50 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la leishmaniasis visceral, cutánea y mucosa por las especies indicadas, desde los 12 años y 30 kg.',
    actua: 'No se conoce su modo de acción exacto; probablemente interactúa con lípidos de membrana, inhibe la citocromo c oxidasa mitocondrial y provoca una muerte celular similar a la apoptosis.',
    recorrido: 'No se ha determinado la biodisponibilidad absoluta; en la leishmaniasis visceral el máximo aparece a menudo justo antes de la dosis siguiente, lo que indica una absorción a lo largo del intervalo. En la leishmaniasis visceral se excretó en la orina menos del 0,2 % de la dosis; su semivida es larga (más de 6 días).'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura de gelatina: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '3 · Formas y concentraciones',
            cita: 'IMPAVIDO® (miltefosine) oral capsules are opaque, red, hard gelatin capsules',
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
      ocurre: 'No se ha determinado la biodisponibilidad absoluta; en la leishmaniasis visceral el máximo aparece a menudo justo antes de la dosis siguiente, lo que indica una absorción a lo largo del intervalo.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'No se ha determinado la biodisponibilidad absoluta; en la leishmaniasis visceral el máximo aparece a menudo justo antes de la dosis siguiente, lo que indica una absorción a lo largo del intervalo.',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '12 · Farmacología clínica',
            cita: 'indicating that the absorption of miltefosine may proceed throughout the dosing interval',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La distribución no se ha estudiado en humanos; la unión a proteínas plasmáticas es del 98 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La distribución no se ha estudiado en humanos; la unión a proteínas plasmáticas es del 98 %.',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '12 · Farmacología clínica',
            cita: 'Human plasma protein binding of miltefosine, evaluated by an ultracentrifugation method, was 98% over the drug concentration range from 0.1 to 10 μg/mL',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Lípidos de membrana y citocromo c oxidasa de Leishmania',
        efecto: 'No se conoce su modo de acción exacto; probablemente interactúa con lípidos de membrana, inhibe la citocromo c oxidasa mitocondrial y provoca una muerte celular similar a la apoptosis.',
        lugar: [ 'sitio-infeccion' ],
        datos: [
          {
            t: 'No se conoce su modo de acción exacto; probablemente interactúa con lípidos de membrana, inhibe la citocromo c oxidasa mitocondrial y provoca una muerte celular similar a la apoptosis.',
            ref: {
              f: 'dailymed-miltefosina',
              sec: '12 · Farmacología clínica',
              cita: 'The mechanism of action of miltefosine is likely to involve interaction with lipids (phospholipids and sterols), including membrane lipids, inhibition of cytochrome c oxidase (mitochondrial function), and apoptosis-like cell death',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No sufre metabolismo oxidativo por 15 citocromos P450; en hepatocitos humanos se degrada despacio por una escisión similar a la fosfolipasa D, que libera colina.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'No sufre metabolismo oxidativo por 15 citocromos P450; en hepatocitos humanos se degrada despacio por una escisión similar a la fosfolipasa D, que libera colina.',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '12 · Farmacología clínica',
            cita: 'A slow metabolic breakdown could be shown in human hepatocytes, resulting in the release of choline by phospholipase D-like cleavage of the miltefosine molecule',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En la leishmaniasis visceral se excretó en la orina menos del 0,2 % de la dosis; su semivida es larga (más de 6 días).',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En la leishmaniasis visceral se excretó en la orina menos del 0,2 % de la dosis; su semivida es larga (más de 6 días).',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '12 · Farmacología clínica',
            cita: 'In visceral leishmaniasis patients, <0.2% of the administered dose was excreted into the urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'Por su semivida larga (más de 6 días), no alcanzó el estado estacionario al final de los 28 días.',
          ref: {
            f: 'dailymed-miltefosina',
            sec: '12 · Farmacología clínica',
            cita: 'Due to the long half-life of miltefosine (> 6 days), trough plasma concentrations did not appear to reach a steady state at the end of treatment',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '98',
      unidad: '%',
      analito: 'miltefosina',
      ref: {
        f: 'dailymed-miltefosina',
        sec: '12 · Farmacología clínica',
        cita: 'Human plasma protein binding of miltefosine, evaluated by an ultracentrifugation method, was 98%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '> 6',
      unidad: 'd',
      analito: 'miltefosina',
      ref: { f: 'dailymed-miltefosina', sec: '12 · Farmacología clínica', cita: 'Due to the long half-life of miltefosine (> 6 days)', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada en la orina',
      valor: '< 0,2',
      unidad: '% de la dosis',
      analito: 'miltefosina',
      poblacion: 'pacientes con leishmaniasis visceral',
      ref: {
        f: 'dailymed-miltefosina',
        sec: '12 · Farmacología clínica',
        cita: 'In visceral leishmaniasis patients, <0.2% of the administered dose was excreted into the urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-miltefosina', '57c515c8-f4af-b876-e063-6394a90af0cc', 'IMPAVIDO (MILTEFOSINE) CAPSULE', 'IMPAVIDO', '2', '2026-11-06', '2026-11-19'),
    rengPubchem(3599, 'miltefosine', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
