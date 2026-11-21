import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tofacitinib',
    nombre: 'Tofacitinib',
    clase: 'Inhibidor de las cinasas Janus (JAK)',
    sinonimos: [ 'tofacitinib', 'Xeljanz' ],
    formula: 'C16H20N6O',
    masaMolar: 312.37,
    smiles: 'C[C@@H]1CCN(C[C@@H]1N(C)C2=NC=NC3=C2C=CN3)C(=O)CC#N',
    inchikey: 'UJLAWZDWDVHWOW-YPMHNXCESA-N',
    cid: 9926791,
    iupac: '3-[(3R,4R)-4-methyl-3-[methyl(7H-pyrrolo[2,3-d]pyrimidin-4-yl)amino]piperidin-1-yl]-3-oxopropanenitrile',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'tofacitinib-oral',
      producto: 'XELJANZ · comprimido recubierto con película',
      titular: 'U.S. PHARMACEUTICALS',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '5 mg o 10 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Citrato de tofacitinib', ref: { f: 'dailymed-tofacitinib', sec: '11 · Descripción', cita: 'Tofacitinib citrate', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'lactose monohydrate',
        'croscarmellose sodium',
        'magnesium stearate',
        'titanium dioxide',
        'triacetin',
        'polyethylene glycol 3350',
        'hypromellose 2910 (6 mpa.s)'
      ],
      usos: {
        t: 'Artritis reumatoide activa de moderada a grave con respuesta insuficiente o intolerancia a bloqueadores del TNF, artritis psoriásica, espondilitis anquilosante y colitis ulcerosa.',
        ref: {
          f: 'dailymed-tofacitinib',
          sec: '1 · Indicaciones',
          cita: 'Moderately to severely active rheumatoid arthritis (RA), who have had an inadequate response or intolerance to one or more TNF blockers',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tofacitinib',
      advertencias: [
        {
          titulo: 'Infecciones graves, mortalidad, cáncer, eventos cardiovasculares y trombosis',
          texto: 'Aviso destacado de la etiqueta sobre estos riesgos.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-tofacitinib',
            sec: 'Advertencia destacada',
            cita: 'WARNING: SERIOUS INFECTIONS, MORTALITY, MALIGNANCY, MAJOR ADVERSE CARDIOVASCULAR EVENTS, and THROMBOSIS',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Infecciones graves',
          texto: 'Pueden ocurrir infecciones graves y a veces mortales.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious and sometimes fatal infections may occur with XELJANZ (tablets and oral solution) and XELJANZ XR (extended-release tablets)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En artritis reumatoide, artritis psoriásica y espondilitis (≥ 2 %): infección de vías respiratorias altas, nasofaringitis, diarrea y dolor de cabeza.',
          '34084-4',
          'upper respiratory tract infection (URI), nasopharyngitis, diarrhea, and headache'
        ],
        [
          'En colitis ulcerosa (≥ 5 %): nasofaringitis, colesterol elevado, dolor de cabeza, aumento de creatina cinasa, erupción, diarrea y herpes zóster, entre otras.',
          '34084-4',
          'nasopharyngitis, elevated cholesterol levels, headache, URI, increased blood creatine phosphokinase, rash, diarrhea, and herpes zoster'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 5 mg o 10 mg por comprimido, según la etiqueta; el activo va como citrato de tofacitinib. Los excipientes no son el principio activo.',
    usos: 'Artritis reumatoide activa de moderada a grave con respuesta insuficiente o intolerancia a bloqueadores del TNF, artritis psoriásica, espondilitis anquilosante y colitis ulcerosa.',
    actua: 'Inhibe las cinasas Janus (JAK) dentro de las células y evita que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
    recorrido: 'La biodisponibilidad oral absoluta es del 74 %. Una comida rica en grasa no cambió el AUC y redujo la Cmax un 32 %. La eliminación es alrededor del 70 % por metabolismo hepático y el 30 % por excreción renal del fármaco sin cambios; la semivida es de unas 3 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco redondo de liberación inmediata, recubierto con película, de 5 mg (o 10 mg).',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco redondo de liberación inmediata, recubierto con película, de 5 mg (o 10 mg).',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'White, round, immediate-release film-coated tablets',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'intestino-delgado' ],
      organosGenerales: [ 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad oral absoluta es del 74 %. Una comida rica en grasa no cambió el AUC y redujo la Cmax un 32 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral absoluta es del 74 %. Una comida rica en grasa no cambió el AUC y redujo la Cmax un 32 %.',
          ref: { f: 'dailymed-tofacitinib', sec: '12.3 · Farmacocinética', cita: 'The absolute oral bioavailability of XELJANZ is 74%', codigo: '43682-4' }
        },
        {
          t: 'Tras la administración oral los máximos se alcanzan en 0,5-1 hora.',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations were reached within 0.5 hour - 1 hour',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es de alrededor del 40 %; el volumen de distribución tras vía intravenosa fue de 87 L, y se reparte por igual entre los glóbulos rojos y el plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es de alrededor del 40 %; el volumen de distribución tras vía intravenosa fue de 87 L, y se reparte por igual entre los glóbulos rojos y el plasma.',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The protein binding of tofacitinib is approximately 40%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas Janus (JAK)',
        efecto: 'Inhibe las cinasas Janus (JAK) dentro de las células y evita que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
        lugar: [ 'articulaciones', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Inhibe las cinasas Janus (JAK) dentro de las células y evita que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
            ref: {
              f: 'dailymed-tofacitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Tofacitinib modulates the signaling pathway at the point of JAKs, preventing the phosphorylation and activation of STATs',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Alrededor del 70 % del aclaramiento es metabolismo hepático y el 30 % excreción renal del fármaco sin cambios; el CYP3A4 es la enzima principal, con aporte menor del CYP2C19.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Alrededor del 70 % del aclaramiento es metabolismo hepático y el 30 % excreción renal del fármaco sin cambios; el CYP3A4 es la enzima principal, con aporte menor del CYP2C19.',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The metabolism of tofacitinib is primarily mediated by CYP3A4 with minor contribution from CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Ocho metabolitos',
          actividad: 'inactivo',
          nota: 'Cada uno es menos del 8 % de la radiactividad circulante total.',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The pharmacologic activity of tofacitinib is attributed to the parent molecule',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'higado', 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación es alrededor del 70 % por metabolismo hepático y el 30 % por excreción renal del fármaco sin cambios; la semivida es de unas 3 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación es alrededor del 70 % por metabolismo hepático y el 30 % por excreción renal del fármaco sin cambios; la semivida es de unas 3 horas.',
          ref: {
            f: 'dailymed-tofacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Clearance mechanisms for tofacitinib are approximately 70% hepatic metabolism and 30% renal excretion of the parent drug',
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
      valor: '74',
      unidad: '%',
      analito: 'tofacitinib',
      ref: { f: 'dailymed-tofacitinib', sec: '12.3 · Farmacocinética', cita: 'The absolute oral bioavailability of XELJANZ is 74%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '0,5-1',
      unidad: 'h',
      analito: 'tofacitinib',
      ref: {
        f: 'dailymed-tofacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations were reached within 0.5 hour - 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'tofacitinib',
      ref: { f: 'dailymed-tofacitinib', sec: '12.3 · Farmacocinética', cita: 'The protein binding of tofacitinib is approximately 40%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras vía intravenosa',
      valor: '87',
      unidad: 'L',
      analito: 'tofacitinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-tofacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'After intravenous administration, the volume of distribution was 87 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '3 (aprox.)',
      unidad: 'h',
      analito: 'tofacitinib',
      ref: { f: 'dailymed-tofacitinib', sec: '12.3 · Farmacocinética', cita: 'elimination half-life was about 3 hours', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tofacitinib', '68e3d6b2-7838-4d2d-a417-09d919b43e13', 'XELJANZ (TOFACITINIB) TABLET, FILM COATED XELJANZ XR (TOFACITINIB) TABLET, EXTENDED RELEASE XELJANZ (TOFACITINIB) SOLUTION', 'XELJANZ', '19', '2026-10-19', '2026-11-13'),
    rengPubchem(9926791, 'tofacitinib', '2026-11-13')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
