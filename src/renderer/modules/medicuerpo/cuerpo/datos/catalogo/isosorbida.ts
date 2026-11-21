import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'isosorbida',
    nombre: 'Mononitrato de isosorbida',
    clase: 'Nitrato orgánico (vasodilatador)',
    sinonimos: [ 'isosorbide mononitrate', 'Monoket' ],
    formula: 'C6H9NO6',
    masaMolar: 191.14,
    smiles: 'C1[C@@H]([C@@H]2[C@H](O1)[C@@H](CO2)O[N+](=O)[O-])O',
    inchikey: 'YWXYYJSYQOXTPL-SLPGGIOYSA-N',
    cid: 27661,
    iupac: '[(3S,3aR,6R,6aS)-3-hydroxy-2,3,3a,5,6,6a-hexahydrofuro[3,2-b]furan-6-yl] nitrate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'isosorbida-oral',
      producto: 'Isosorbide Mononitrate · comprimido',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 20 mg por comprimido, según la etiqueta',
      excipientes: [
        'lactose monohydrate',
        'microcrystalline cellulose 101',
        'sodium starch glycolate type a potato',
        'povidone k30',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'talc'
      ],
      usos: {
        t: 'Prevención y tratamiento de la angina de pecho por enfermedad coronaria; no es lo bastante rápido para cortar una crisis.',
        ref: {
          f: 'dailymed-isosorbida',
          sec: '1 · Indicaciones',
          cita: 'indicated for the prevention and treatment of angina pectoris due to coronary artery disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-isosorbida',
      advertencias: [
        {
          titulo: 'Uso con sildenafilo',
          texto: 'El sildenafilo amplifica su efecto vasodilatador y puede causar una hipotensión grave.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-isosorbida',
            sec: 'Advertencias',
            cita: 'Amplification of the vasodilatory effects of isosorbide mononitrate by sildenafil can result in severe hypotension',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Dolor de cabeza: el efecto adverso más frecuente; causó el 2 % de los abandonos y disminuye tras los primeros días.',
          '34084-4',
          'Headache decreased in incidence after the first few days of therapy'
        ],
        [ 'Datos de 6 ensayos controlados con placebo.', '34084-4', '6 Placebo-Controlled Studies' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 10 mg o 20 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Prevención y tratamiento de la angina de pecho por enfermedad coronaria; no es lo bastante rápido para cortar una crisis.',
    actua: 'Relaja el músculo liso de los vasos y dilata arterias y, sobre todo, venas: vuelve menos sangre al corazón y baja su carga de trabajo.',
    recorrido: 'Se absorbe rápida y completamente, sin primer paso hepático: biodisponibilidad absoluta cercana al 100 % y pico en 30 a 60 minutos. La comida no la cambia de forma importante. El 93 % de la dosis salió por la orina en 48 horas, sobre todo como metabolitos (solo el 2 % sin cambios); por las heces, el 1 %. Su semivida global es de unas 5 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido para tomar por boca.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '11 · Descripción',
            cita: 'Isosorbide mononitrate, an organic nitrate, is a vasodilator',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y completamente, sin primer paso hepático: biodisponibilidad absoluta cercana al 100 % y pico en 30 a 60 minutos. La comida no la cambia de forma importante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente, sin primer paso hepático: biodisponibilidad absoluta cercana al 100 % y pico en 30 a 60 minutos. La comida no la cambia de forma importante.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '12.3 · Farmacocinética',
            cita: 'Isosorbide mononitrate is rapidly and completely absorbed from the gastrointestinal tract',
            codigo: '43682-4'
          }
        },
        {
          t: 'Biodisponibilidad absoluta cercana al 100 %.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of isosorbide mononitrate from isosorbide mononitrate tablets is nearly 100%',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'vasos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen de distribución de unos 0,6 L/kg; se une a proteínas en menos del 5 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen de distribución de unos 0,6 L/kg; se une a proteínas en menos del 5 %.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of isosorbide mononitrate was found to be less than 5%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Músculo liso vascular',
        efecto: 'Relaja el músculo liso de los vasos y dilata arterias y, sobre todo, venas: vuelve menos sangre al corazón y baja su carga de trabajo.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Relaja el músculo liso de los vasos y dilata arterias y, sobre todo, venas: vuelve menos sangre al corazón y baja su carga de trabajo.',
            ref: {
              f: 'dailymed-isosorbida',
              sec: '12 · Farmacología clínica',
              cita: 'The principal pharmacological action of isosorbide mononitrate is relaxation of vascular smooth muscle',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor de la mitad se desnitra a isosorbida y sorbitol y una cuarta parte se conjuga; ninguno de esos metabolitos es vasoactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor de la mitad se desnitra a isosorbida y sorbitol y una cuarta parte se conjuga; ninguno de esos metabolitos es vasoactivo.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '12.3 · Farmacocinética',
            cita: 'about half of the dose was found denitrated and renally excreted as isosorbide and sorbitol',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Isosorbida y sorbitol (desnitrados)',
          actividad: 'inactivo',
          ref: { f: 'dailymed-isosorbida', sec: '12.3 · Farmacocinética', cita: 'None of these metabolites are vasoactive', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 93 % de la dosis salió por la orina en 48 horas, sobre todo como metabolitos (solo el 2 % sin cambios); por las heces, el 1 %. Su semivida global es de unas 5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 93 % de la dosis salió por la orina en 48 horas, sobre todo como metabolitos (solo el 2 % sin cambios); por las heces, el 1 %. Su semivida global es de unas 5 horas.',
          ref: {
            f: 'dailymed-isosorbida',
            sec: '12.3 · Farmacocinética',
            cita: '93% of the dose was excreted within 48 hours into the urine',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta',
      valor: '≈ 100',
      unidad: '%',
      analito: 'mononitrato de isosorbida',
      ref: { f: 'dailymed-isosorbida', sec: '12.3 · Farmacocinética', cita: 'is nearly 100%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '30-60',
      unidad: 'min',
      analito: 'mononitrato de isosorbida',
      ref: {
        f: 'dailymed-isosorbida',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentrations usually occur in about 30-60 minutes',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '0,6 (aprox.)',
      unidad: 'L/kg',
      analito: 'mononitrato de isosorbida',
      ref: { f: 'dailymed-isosorbida', sec: '12.3 · Farmacocinética', cita: 'The volume of distribution is approximately 0.6 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '< 5',
      unidad: '%',
      analito: 'mononitrato de isosorbida',
      ref: { f: 'dailymed-isosorbida', sec: '12.3 · Farmacocinética', cita: 'was found to be less than 5%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación global',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'mononitrato de isosorbida',
      ref: {
        f: 'dailymed-isosorbida',
        sec: '12.3 · Farmacocinética',
        cita: 'The overall elimination half-life of isosorbide mononitrate is about 5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina en 48 h',
      valor: '93',
      unidad: '% de la dosis',
      analito: 'mononitrato y metabolitos',
      condiciones: 'dosis marcada',
      ref: {
        f: 'dailymed-isosorbida',
        sec: '12.3 · Farmacocinética',
        cita: '93% of the dose was excreted within 48 hours into the urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-isosorbida', '06839534-85b8-42aa-b0e3-079ed236be44', 'ISOSORBIDE MONONITRATE TABLET', 'Isosorbide Mononitrate', '1', '2026-04-01', '2026-11-12'),
    rengPubchem(27661, 'isosorbide mononitrate', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
