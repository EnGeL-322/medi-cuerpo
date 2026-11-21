import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'eszopiclona',
    nombre: 'Eszopiclona',
    clase: 'Hipnótico no benzodiazepínico',
    sinonimos: [ 'eszopiclone', 'Lunesta' ],
    formula: 'C17H17ClN6O3',
    masaMolar: 388.8,
    smiles: 'CN1CCN(CC1)C(=O)O[C@H]2C3=NC=CN=C3C(=O)N2C4=NC=C(C=C4)Cl',
    inchikey: 'GBBSUAFBMRNDJC-INIZCTEOSA-N',
    cid: 969472,
    iupac: '[(7S)-6-(5-chloro-2-pyridinyl)-5-oxo-7H-pyrrolo[3,4-b]pyrazin-7-yl] 4-methylpiperazine-1-carboxylate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'eszopiclona-oral',
      producto: 'Lunesta · comprimido recubierto',
      titular: 'WAYLIS THERAPEUTICS LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto',
      formaFuente: 'TABLET, COATED',
      liberacion: 'no declarada',
      concentraciones: '1 mg, 2 mg o 3 mg por comprimido, según la etiqueta',
      excipientes: [
        'calcium phosphate, dibasic, anhydrous',
        'silicon dioxide',
        'croscarmellose sodium',
        'hypromellose 2910 (6 mpa.s)',
        'lactose monohydrate',
        'magnesium stearate',
        'cellulose, microcrystalline',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'triacetin',
        'fd&c blue no. 2'
      ],
      usos: {
        t: 'Tratamiento del insomnio: reduce el tiempo hasta dormirse y mejora el mantenimiento del sueño.',
        ref: {
          f: 'dailymed-eszopiclona',
          sec: '1 · Indicaciones',
          cita: 'LUNESTA ® (eszopiclone) is indicated for the treatment of insomnia',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-eszopiclona',
      advertencias: [
        {
          titulo: 'Conductas complejas durante el sueño',
          texto: 'Puede causar sonambulismo, conducir dormido u otras actividades sin estar despierto del todo, a veces con lesiones graves o la muerte.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-eszopiclona',
            sec: 'Advertencia destacada',
            cita: 'Complex sleep behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más observadas (≥ 2 %): sabor desagradable, dolor de cabeza, somnolencia, infección respiratoria, mareo, boca seca y erupción.',
          '34084-4',
          'were unpleasant taste, headache, somnolence, respiratory infection, dizziness'
        ],
        [ 'También ansiedad, alucinaciones e infecciones víricas (≥ 2 %).', '34084-4', 'anxiety, hallucinations, and viral infections' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto: 1 mg, 2 mg o 3 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del insomnio: reduce el tiempo hasta dormirse y mejora el mantenimiento del sueño.',
    actua: 'Su mecanismo no está claro; podría deberse a su interacción con los complejos del receptor GABA en lugares cercanos o acoplados a los receptores de benzodiazepinas.',
    recorrido: 'Se absorbe rápido y el pico llega hacia la hora; una comida rica en grasa reduce la Cmax un 21 % y retrasa el pico una hora. Menos del 10 % sale sin cambios por la orina; con la zopiclona racémica, hasta el 75 % sale por la orina, sobre todo como metabolitos. Su semivida es de unas 6 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '3 · Formas y concentraciones',
            cita: 'LUNESTA 3 mg tablets are round, dark blue, film-coated',
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
      ocurre: 'Se absorbe rápido y el pico llega hacia la hora; una comida rica en grasa reduce la Cmax un 21 % y retrasa el pico una hora.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y el pico llega hacia la hora; una comida rica en grasa reduce la Cmax un 21 % y retrasa el pico una hora.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'Eszopiclone is rapidly absorbed following oral administration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Pico plasmático hacia la hora.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'Peak plasma concentrations are achieved within approximately 1 hour after oral administration',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une poco a proteínas del plasma (52-59 %).',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une poco a proteínas del plasma (52-59 %).',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'Eszopiclone is weakly bound to plasma protein (52-59%)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Complejo del receptor GABA-A',
        efecto: 'Su mecanismo no está claro; podría deberse a su interacción con los complejos del receptor GABA en lugares cercanos o acoplados a los receptores de benzodiazepinas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Su mecanismo no está claro; podría deberse a su interacción con los complejos del receptor GABA en lugares cercanos o acoplados a los receptores de benzodiazepinas.',
            ref: {
              f: 'dailymed-eszopiclona',
              sec: '12.1 · Mecanismo de acción',
              cita: 'its effect could be related to its interaction with GABA-receptor complexes',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente por oxidación y desmetilación (CYP3A4 y CYP2E1); su N-desmetil se une al receptor GABA con mucha menos potencia y el N-óxido no se une de forma relevante.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente por oxidación y desmetilación (CYP3A4 y CYP2E1); su N-desmetil se une al receptor GABA con mucha menos potencia y el N-óxido no se une de forma relevante.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'eszopiclone is extensively metabolized by oxidation and demethylation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '(S)-N-desmetilzopiclona',
          actividad: 'activo',
          nota: 'Mucha menos potencia que la eszopiclona.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'binds to GABA receptors with substantially lower potency than eszopiclone',
            codigo: '43682-4'
          }
        },
        {
          nombre: '(S)-zopiclona-N-óxido',
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'the former compound shows no significant binding to this receptor',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Menos del 10 % sale sin cambios por la orina; con la zopiclona racémica, hasta el 75 % sale por la orina, sobre todo como metabolitos. Su semivida es de unas 6 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Menos del 10 % sale sin cambios por la orina; con la zopiclona racémica, hasta el 75 % sale por la orina, sobre todo como metabolitos. Su semivida es de unas 6 horas.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'Less than 10% of the orally administered eszopiclone dose is excreted in the urine as parent drug',
            codigo: '43682-4'
          }
        },
        {
          t: 'Hasta el 75 % de una dosis de zopiclona racémica sale por la orina, sobre todo como metabolitos.',
          ref: {
            f: 'dailymed-eszopiclona',
            sec: '12.3 · Farmacocinética',
            cita: 'Up to 75% of an oral dose of racemic zopiclone is excreted in the urine, primarily as metabolites',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'eszopiclona',
      ref: {
        f: 'dailymed-eszopiclona',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations are achieved within approximately 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '6 (aprox.)',
      unidad: 'h',
      analito: 'eszopiclona',
      ref: {
        f: 'dailymed-eszopiclona',
        sec: '12.3 · Farmacocinética',
        cita: 'eszopiclone is eliminated with a mean t 1/2 of approximately 6 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '52-59',
      unidad: '%',
      analito: 'eszopiclona',
      ref: { f: 'dailymed-eszopiclona', sec: '12.3 · Farmacocinética', cita: 'Eszopiclone is weakly bound to plasma protein (52-59%)', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa',
      valor: '21',
      unidad: '%',
      analito: 'eszopiclona',
      condiciones: '3 mg tras una comida rica en grasa',
      ref: { f: 'dailymed-eszopiclona', sec: '12.3 · Farmacocinética', cita: 'a reduction in mean C max of 21%', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '< 10',
      unidad: '% de la dosis',
      analito: 'eszopiclona',
      ref: {
        f: 'dailymed-eszopiclona',
        sec: '12.3 · Farmacocinética',
        cita: 'Less than 10% of the orally administered eszopiclone dose is excreted in the urine as parent drug',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-eszopiclona', '3821f4b7-a3c8-4920-ba80-18aa96532c09', 'LUNESTA (ESZOPICLONE) TABLET, COATED', 'Lunesta', '2', '2025-01-10', '2026-11-12'),
    rengPubchem(969472, 'eszopiclone', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
