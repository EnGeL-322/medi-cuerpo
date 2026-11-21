import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'upadacitinib',
    nombre: 'Upadacitinib',
    clase: 'Inhibidor de las cinasas Janus (JAK)',
    sinonimos: [ 'upadacitinib', 'Rinvoq' ],
    formula: 'C17H19F3N6O',
    masaMolar: 380.4,
    smiles: 'CC[C@@H]1CN(C[C@@H]1C2=CN=C3N2C4=C(NC=C4)N=C3)C(=O)NCC(F)(F)F',
    inchikey: 'WYQFJHHDOKWSHR-MNOVXSKESA-N',
    cid: 58557659,
    iupac: '(3S,4R)-3-ethyl-4-(1,5,7,10-tetrazatricyclo[7.3.0.02,6]dodeca-2(6),3,7,9,11-pentaen-12-yl)-N-(2,2,2-trifluoroethyl)pyrrolidine-1-carboxamide',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'upadacitinib-oral',
      producto: 'Rinvoq · comprimido de liberación prolongada',
      titular: 'ABBVIE INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '15 mg, 30 mg o 45 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'ferrosoferric oxide',
        'hypromellose, unspecified',
        'ferric oxide red',
        'magnesium stearate',
        'mannitol',
        'microcrystalline cellulose',
        'polyvinyl alcohol, unspecified',
        'polyethylene glycol, unspecified',
        'talc',
        'tartaric acid',
        'titanium dioxide'
      ],
      usos: {
        t: 'Artritis reumatoide activa de moderada a grave en adultos con respuesta insuficiente o intolerancia a uno o más bloqueadores del TNF, y otras enfermedades inflamatorias.',
        ref: {
          f: 'dailymed-upadacitinib',
          sec: '1 · Indicaciones',
          cita: 'RINVOQ is indicated for the treatment of adults with moderately to severely active rheumatoid arthritis who have had an inadequate response or intolerance to one or more TNF blockers',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-upadacitinib',
      advertencias: [
        {
          titulo: 'Infecciones graves, mortalidad, cáncer, eventos cardiovasculares y trombosis',
          texto: 'Aumenta el riesgo de infecciones graves que pueden llevar a hospitalización o muerte.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-upadacitinib',
            sec: 'Advertencia destacada',
            cita: 'Patients treated with RINVOQ /RINVOQ LQ are at increased risk for developing serious infections that may lead to hospitalization or death',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hipoglucemia en personas con diabetes',
          texto: 'Se ha descrito hipoglucemia, incluso grave, al empezar el tratamiento.',
          organos: [ 'sangre' ],
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Hypoglycemia, including severe hypoglycemia, has been reported following initiation of RINVOQ/RINVOQ LQ and other JAK inhibitors in patients with diabetes',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'En ensayos con placebo hubo infecciones en 284 pacientes con 15 mg (127,8 por 100 pacientes-año) frente a 218 con placebo (95,7).',
          '34084-4',
          'infections were reported in 218 patients (95.7 per 100 patient-years) treated with placebo and 284 patients (127.8 per 100 patient-years) treated with RINVOQ 15 mg'
        ],
        [
          'En otros dos ensayos las infecciones fueron más frecuentes con 15 y 30 mg que con placebo.',
          '34084-4',
          'In RA-III and RA-V, infections were reported in 99 patients (136.5 per 100 patient-years) treated with placebo, 118 patients (164.5 per 100 patient-years) treated with RINVOQ 15 mg'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido de liberación prolongada: 15 mg, 30 mg o 45 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Artritis reumatoide activa de moderada a grave en adultos con respuesta insuficiente o intolerancia a uno o más bloqueadores del TNF, y otras enfermedades inflamatorias.',
    actua: 'Inhibe las cinasas Janus (JAK) dentro de las células e impide que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
    recorrido: 'Con los comprimidos de liberación prolongada, el máximo llega con una mediana de 2 a 4 horas; una comida rica en grasa y calorías no tuvo un efecto clínicamente relevante en la exposición. Tras la solución de liberación inmediata marcada, sale sobre todo sin cambios: 24 % por la orina y 38 % por las heces; cerca del 34 % de la dosis sale como metabolitos. La semivida terminal es de 8 a 14 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido oblongo de liberación prolongada de 15 mg (morado), 30 mg (rojo) o 45 mg.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido oblongo de liberación prolongada de 15 mg (morado), 30 mg (rojo) o 45 mg.',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'RINVOQ extended-release tablets: 15 mg upadacitinib: purple, biconvex oblong',
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
      ocurre: 'Con los comprimidos de liberación prolongada, el máximo llega con una mediana de 2 a 4 horas; una comida rica en grasa y calorías no tuvo un efecto clínicamente relevante en la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con los comprimidos de liberación prolongada, el máximo llega con una mediana de 2 a 4 horas; una comida rica en grasa y calorías no tuvo un efecto clínicamente relevante en la exposición.',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration of RINVOQ extended-release tablets, upadacitinib is absorbed with a median T max of 2 to 4 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasa y calorías no tuvo un efecto clínicamente relevante en la exposición.',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Coadministration of RINVOQ tablets with a high-fat/high-calorie meal had no clinically relevant effect on upadacitinib exposures',
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
      ocurre: 'Se une en un 52 % a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 52 % a proteínas del plasma.',
          ref: { f: 'dailymed-upadacitinib', sec: '12.3 · Farmacocinética', cita: 'Upadacitinib is 52% bound to plasma proteins', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Cinasas Janus (JAK)',
        efecto: 'Inhibe las cinasas Janus (JAK) dentro de las células e impide que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
        lugar: [ 'articulaciones', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Inhibe las cinasas Janus (JAK) dentro de las células e impide que fosforilen y activen las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
            ref: {
              f: 'dailymed-upadacitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Upadacitinib modulates the signaling pathway at the point of JAKs, preventing the phosphorylation and activation of STATs',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza sobre todo el CYP3A4, con posible aporte menor del CYP2D6; el fármaco sin cambios es el 79 % de la radiactividad del plasma y el principal metabolito (monooxidación y glucuronidación), el 13 %.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza sobre todo el CYP3A4, con posible aporte menor del CYP2D6; el fármaco sin cambios es el 79 % de la radiactividad del plasma y el principal metabolito (monooxidación y glucuronidación), el 13 %.',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Upadacitinib metabolism is mediated by mainly CYP3A4 with a potential minor contribution from CYP2D6',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos',
          actividad: 'inactivo',
          nota: 'Principal metabolito: monooxidación seguida de glucuronidación (13 % de la radiactividad del plasma).',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'No active metabolites have been identified for upadacitinib',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras la solución de liberación inmediata marcada, sale sobre todo sin cambios: 24 % por la orina y 38 % por las heces; cerca del 34 % de la dosis sale como metabolitos. La semivida terminal es de 8 a 14 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras la solución de liberación inmediata marcada, sale sobre todo sin cambios: 24 % por la orina y 38 % por las heces; cerca del 34 % de la dosis sale como metabolitos. La semivida terminal es de 8 a 14 horas.',
          ref: {
            f: 'dailymed-upadacitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'upadacitinib was eliminated predominantly as the unchanged parent drug in urine (24%) and feces (38%)',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '2-4',
      unidad: 'h',
      analito: 'upadacitinib',
      condiciones: 'comprimidos de liberación prolongada',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'upadacitinib is absorbed with a median T max of 2 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Cmax media con 15 mg',
      valor: '31,6',
      unidad: 'ng/mL',
      analito: 'upadacitinib',
      poblacion: 'sujetos sanos',
      condiciones: 'comprimido de 15 mg, dosis única en ayunas',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'mean C max was 31.6 ng/mL, 71.8 ng/mL, and 90.7 ng/mL, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC media con 15 mg',
      valor: '265',
      unidad: 'ng·h/mL',
      analito: 'upadacitinib',
      poblacion: 'sujetos sanos',
      condiciones: 'comprimido de 15 mg, dosis única en ayunas',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'mean AUC inf was 265 ng·h/mL, 543 ng·h/mL, and 752 ng·h/mL, respectively',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '52',
      unidad: '%',
      analito: 'upadacitinib',
      ref: { f: 'dailymed-upadacitinib', sec: '12.3 · Farmacocinética', cita: 'Upadacitinib is 52% bound to plasma proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación',
      valor: '8-14',
      unidad: 'h',
      analito: 'upadacitinib',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'mean terminal elimination half-life ranged from 8 to 14 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '24',
      unidad: '% de la dosis',
      analito: 'upadacitinib',
      condiciones: 'solución de liberación inmediata marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'eliminated predominantly as the unchanged parent drug in urine (24%) and feces (38%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado sin cambios en las heces',
      valor: '38',
      unidad: '% de la dosis',
      analito: 'upadacitinib',
      condiciones: 'solución de liberación inmediata marcada',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-upadacitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'eliminated predominantly as the unchanged parent drug in urine (24%) and feces (38%)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-upadacitinib', '2966aec7-2ef0-923c-d8ff-fe1a957bf095', 'RINVOQ (UPADACITINIB) TABLET, EXTENDED RELEASE RINVOQ (UPADACITINIB) SOLUTION', 'Rinvoq', '101', '2026-07-15', '2026-11-12'),
    rengPubchem(58557659, 'upadacitinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
