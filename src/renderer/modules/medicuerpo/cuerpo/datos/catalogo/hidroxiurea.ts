import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'hidroxiurea',
    nombre: 'Hidroxiurea',
    clase: 'Antimetabolito',
    sinonimos: [ 'hidroxiurea', 'hydroxyurea', 'Hydrea', 'hidroxicarbamida' ],
    formula: 'CH4N2O2',
    masaMolar: 76.055,
    smiles: 'C(=O)(N)NO',
    inchikey: 'VSNHCAURESNICA-UHFFFAOYSA-N',
    cid: 3657,
    iupac: 'hydroxyurea',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'hidroxiurea-oral',
      producto: 'HYDREA · cápsula',
      titular: 'H2-PHARMA LLC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '500 mg por cápsula, según la etiqueta',
      excipientes: [
        'citric acid monohydrate',
        'd&c yellow no. 10',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'd&c red no. 28',
        'gelatin, unspecified',
        'lactose, unspecified form',
        'magnesium stearate',
        'sodium phosphate',
        'titanium dioxide'
      ],
      usos: {
        t: 'Hydrea incluye leucemia mieloide crónica resistente y determinados carcinomas escamosos de cabeza y cuello con quimiorradiación.',
        ref: {
          f: 'dailymed-hidroxiurea',
          sec: '1 · Indicaciones',
          cita: 'Locally advanced squamous cell carcinomas of the head and neck (excluding the lip) in combination with chemoradiation',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-hidroxiurea',
      reacciones: [
        [ 'Alteraciones hematológicas entre las reacciones más comunes.', '34084-4', 'hematological, gastrointestinal symptoms, and anorexia' ],
        [ 'Síntomas digestivos y pérdida de apetito.', '34084-4', 'hematological, gastrointestinal symptoms, and anorexia' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Cápsula: 500 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hydrea incluye leucemia mieloide crónica resistente y determinados carcinomas escamosos de cabeza y cuello con quimiorradiación.',
    actua: 'Los experimentos citados respaldan que inhibe la ribonucleótido reductasa y con ello la síntesis de ADN. El mecanismo antitumoral preciso sigue sin describirse por completo.',
    recorrido: 'Alcanza el pico plasmático en 1–4 h por vía oral. La ficha carece de datos sobre el efecto de la comida. En pacientes con anemia falciforme, se recuperó en orina una media cercana al 40 % de la dosis como hidroxiurea.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula oral de Hydrea.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula oral de Hydrea.',
          ref: {
            f: 'dailymed-hidroxiurea',
            sec: '3 · Formas y concentraciones',
            cita: 'Capsules: 500 mg opaque green cap and opaque pink body',
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
      ocurre: 'Alcanza el pico plasmático en 1–4 h por vía oral. La ficha carece de datos sobre el efecto de la comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Alcanza el pico plasmático en 1–4 h por vía oral. La ficha carece de datos sobre el efecto de la comida.',
          ref: {
            f: 'dailymed-hidroxiurea',
            sec: '12.3 · Farmacocinética',
            cita: 'hydroxyurea reaches peak plasma concentrations in 1 to 4 hours',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'tejidos', 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se distribuye ampliamente, con un volumen aproximado al del agua corporal total.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se distribuye ampliamente, con un volumen aproximado al del agua corporal total.',
          ref: {
            f: 'dailymed-hidroxiurea',
            sec: '12.3 · Farmacocinética',
            cita: 'volume of distribution approximating total body water',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Ribonucleótido reductasa',
        efecto: 'Los experimentos citados respaldan que inhibe la ribonucleótido reductasa y con ello la síntesis de ADN. El mecanismo antitumoral preciso sigue sin describirse por completo.',
        lugar: [ 'medula-osea', 'tejidos' ],
        datos: [
          {
            t: 'Los experimentos citados respaldan que inhibe la ribonucleótido reductasa y con ello la síntesis de ADN. El mecanismo antitumoral preciso sigue sin describirse por completo.',
            ref: { f: 'dailymed-hidroxiurea', sec: '12.1 · Mecanismo de acción', cita: 'acting as a ribonucleotide reductase inhibitor', codigo: '43679-0' }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'intestino-delgado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma por una vía hepática saturable y en menor grado por acción de la ureasa de bacterias intestinales.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma por una vía hepática saturable y en menor grado por acción de la ureasa de bacterias intestinales.',
          ref: {
            f: 'dailymed-hidroxiurea',
            sec: '12.3 · Farmacocinética',
            cita: 'saturable hepatic metabolism and a minor pathway of degradation by urease found in intestinal bacteria',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: []
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En pacientes con anemia falciforme, se recuperó en orina una media cercana al 40 % de la dosis como hidroxiurea.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En pacientes con anemia falciforme, se recuperó en orina una media cercana al 40 % de la dosis como hidroxiurea.',
          ref: {
            f: 'dailymed-hidroxiurea',
            sec: '12.3 · Farmacocinética',
            cita: 'mean cumulative urinary recovery of hydroxyurea was about 40%',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo al pico',
      valor: '1–4',
      unidad: 'h',
      analito: 'hidroxiurea',
      ref: {
        f: 'dailymed-hidroxiurea',
        sec: '12.3 · Farmacocinética',
        cita: 'hydroxyurea reaches peak plasma concentrations in 1 to 4 hours',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-hidroxiurea', '6053c775-68de-45e4-9af9-33b18fd0e140', 'HYDREA (HYDROXYUREA) CAPSULE', 'HYDREA', '21', '2026-01-28', '2026-11-12'),
    rengPubchem(3657, 'hidroxiurea', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
