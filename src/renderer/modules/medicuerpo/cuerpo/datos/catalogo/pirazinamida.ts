import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'pirazinamida',
    nombre: 'Pirazinamida',
    clase: 'Antituberculoso',
    sinonimos: [ 'pyrazinamide' ],
    formula: 'C5H5N3O',
    masaMolar: 123.11,
    smiles: 'C1=CN=C(C=N1)C(=O)N',
    inchikey: 'IPEHBUMCGVEMRF-UHFFFAOYSA-N',
    cid: 1046,
    iupac: 'pyrazine-2-carboxamide',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'pirazinamida-oral',
      producto: 'Pyrazinamide · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '500 mg por comprimido, según la etiqueta',
      excipientes: [ 'starch, corn', 'magnesium stearate', 'stearic acid' ],
      usos: {
        t: 'Tratamiento inicial de la tuberculosis activa en adultos y niños, junto con otros antituberculosos.',
        ref: {
          f: 'dailymed-pirazinamida',
          sec: '1 · Indicaciones',
          cita: 'indicated for the initial treatment of active tuberculosis in adults and children when combined with other antituberculous agents',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-pirazinamida',
      advertencias: [
        {
          titulo: 'Hepatitis e hiperuricemia',
          texto: 'Se suspende y no se reanuda si aparecen signos de daño hepático o hiperuricemia con gota aguda.',
          organos: [ 'higado', 'articulaciones' ],
          ref: {
            f: 'dailymed-pirazinamida',
            sec: 'Advertencias',
            cita: 'Pyrazinamide should be discontinued and not be resumed if signs of hepatocellular damage or hyperuricemia accompanied by an acute gout',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'El efecto adverso principal es una reacción hepática, que depende de la dosis y puede aparecer en cualquier momento.',
          '34084-4',
          'The principal adverse effect is a hepatic reaction'
        ],
        [
          'También náuseas, vómitos y falta de apetito; rara vez gota, porfiria o dolor al orinar.',
          '34084-4',
          'GI disturbances including nausea, vomiting and anorexia have also been reported'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 500 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento inicial de la tuberculosis activa en adultos y niños, junto con otros antituberculosos.',
    actua: 'Según la concentración que alcanza en el lugar de la infección, puede frenar o matar a Mycobacterium tuberculosis.',
    recorrido: 'Se absorbe bien en el tubo digestivo y el pico llega en 2 horas. Alrededor del 70 % de una dosis oral sale por la orina en 24 horas, sobre todo por filtración glomerular; su semivida es de 9 a 10 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido de 500 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        { t: 'Comprimido de 500 mg.', ref: { f: 'dailymed-pirazinamida', sec: '11 · Descripción', cita: 'Each pyrazinamide tab', codigo: '34089-3' } },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien en el tubo digestivo y el pico llega en 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien en el tubo digestivo y el pico llega en 2 horas.',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Pyrazinamide is well absorbed from the GI tract and attains peak plasma concentrations within 2 hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'pulmones', 'higado', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se reparte ampliamente por tejidos y líquidos, incluidos el hígado, los pulmones y el líquido cefalorraquídeo; solo el 10 % se une a proteínas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se reparte ampliamente por tejidos y líquidos, incluidos el hígado, los pulmones y el líquido cefalorraquídeo; solo el 10 % se une a proteínas.',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'It is widely distributed in body tissues and fluids including the liver, lungs and cerebrospinal fluid (CSF)',
            codigo: '34090-1'
          }
        },
        {
          t: 'Alrededor del 10 % se une a proteínas del plasma.',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Pyrazinamide is approximately 10% bound to plasma proteins',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Mycobacterium tuberculosis',
        efecto: 'Según la concentración que alcanza en el lugar de la infección, puede frenar o matar a Mycobacterium tuberculosis.',
        lugar: [ 'pulmones', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Según la concentración que alcanza en el lugar de la infección, puede frenar o matar a Mycobacterium tuberculosis.',
            ref: {
              f: 'dailymed-pirazinamida',
              sec: '12 · Farmacología clínica',
              cita: 'Pyrazinamide may be bacteriostatic or bactericidal against Mycobacterium tuberculosis',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El hígado la hidroliza a ácido pirazinoico, su metabolito activo principal, que se hidroxila a ácido 5-hidroxipirazinoico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El hígado la hidroliza a ácido pirazinoico, su metabolito activo principal, que se hidroxila a ácido 5-hidroxipirazinoico.',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Pyrazinamide is hydrolyzed in the liver to its major active metabolite, pyrazinoic acid',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ácido pirazinoico',
          actividad: 'activo',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Pyrazinamide is hydrolyzed in the liver to its major active metabolite, pyrazinoic acid',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Ácido 5-hidroxipirazinoico',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Pyrazinoic acid is hydroxylated to the main excretory product, 5-hydroxypyrazinoic acid',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 70 % de una dosis oral sale por la orina en 24 horas, sobre todo por filtración glomerular; su semivida es de 9 a 10 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 70 % de una dosis oral sale por la orina en 24 horas, sobre todo por filtración glomerular; su semivida es de 9 a 10 horas.',
          ref: {
            f: 'dailymed-pirazinamida',
            sec: '12 · Farmacología clínica',
            cita: 'Approximately 70% of an oral dose is excreted in urine, mainly by glomerular filtration within 24 hours',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '≤ 2',
      unidad: 'h',
      analito: 'pirazinamida',
      ref: { f: 'dailymed-pirazinamida', sec: '12 · Farmacología clínica', cita: 'attains peak plasma concentrations within 2 hours', codigo: '34090-1' }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentraciones plasmáticas habituales',
      valor: '30-50',
      unidad: 'mcg/mL',
      analito: 'pirazinamida',
      condiciones: 'dosis de 20 a 25 mg/kg',
      ref: {
        f: 'dailymed-pirazinamida',
        sec: '12 · Farmacología clínica',
        cita: 'Plasma concentrations generally range from 30 to 50 mcg/mL with doses of 20 to 25 mg/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '10 (aprox.)',
      unidad: '%',
      analito: 'pirazinamida',
      ref: {
        f: 'dailymed-pirazinamida',
        sec: '12 · Farmacología clínica',
        cita: 'Pyrazinamide is approximately 10% bound to plasma proteins',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida',
      valor: '9-10',
      unidad: 'h',
      analito: 'pirazinamida',
      poblacion: 'función renal y hepática normal',
      ref: {
        f: 'dailymed-pirazinamida',
        sec: '12 · Farmacología clínica',
        cita: 'The half-life (t 1/2 ) of pyrazinamide is 9 to 10 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 24 h',
      valor: '70 (aprox.)',
      unidad: '% de la dosis',
      analito: 'pirazinamida y metabolitos',
      ref: {
        f: 'dailymed-pirazinamida',
        sec: '12 · Farmacología clínica',
        cita: 'Approximately 70% of an oral dose is excreted in urine',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-pirazinamida', '262d8829-728c-48db-b89b-88d13b87e684', 'PYRAZINAMIDE TABLET', 'Pyrazinamide', '2', '2026-03-03', '2026-11-12'),
    rengPubchem(1046, 'pyrazinamide', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
