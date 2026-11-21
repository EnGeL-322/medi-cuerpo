import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'metotrexato',
  presentaciones: [
    {
  id: 'metotrexato-subcutaneo',
  producto: 'Otrexup · solución inyectable',
  titular: 'ANTARES PHARMA, INC.',
  mercado: 'EE. UU.',
  forma: 'Solución inyectable',
  formaFuente: 'INJECTION, SOLUTION',
  liberacion: 'no declarada',
  concentraciones: 'Autoinyector monodosis de 0,4 mL con distintas cantidades de metotrexato, según la etiqueta',
  excipientes: [ 'sodium chloride', 'water' ],
  usos: {
    t: 'Artritis reumatoide grave activa y artritis idiopática juvenil poliarticular, y control sintomático de la psoriasis grave en adultos.',
    ref: {
      f: 'dailymed-metotrexato-subcutaneo',
      sec: '1 · Indicaciones',
      cita: 'Otrexup is a folate analog metabolic inhibitor indicated for the',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-metotrexato-subcutaneo',
  advertencias: [
    {
      titulo: 'Toxicidad embrionaria y fetal',
      texto: 'Puede causar toxicidad embriofetal, incluida la muerte fetal.',
      organos: [ 'organos-reproductores' ],
      ref: {
        f: 'dailymed-metotrexato-subcutaneo',
        sec: 'Advertencia destacada',
        cita: 'Methotrexate can cause embryo-fetal toxicity, including fetal death',
        codigo: '34066-1'
      }
    },
    {
      titulo: 'Toxicidad grave de órganos',
      texto: 'La etiqueta advierte de vigilar de cerca las toxicidades de la médula ósea, el hígado, el pulmón, la piel y el riñón.',
      organos: [ 'medula-osea', 'higado', 'pulmones', 'piel', 'rinones' ],
      ref: {
        f: 'dailymed-metotrexato-subcutaneo',
        sec: 'Advertencia destacada',
        cita: 'Patients should be closely monitored for bone marrow, liver, lung, skin, and kidney toxicities',
        codigo: '34066-1'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes: estomatitis ulcerosa, leucopenia, náuseas y malestar abdominal.',
      '34084-4',
      'The most frequently reported adverse reactions include ulcerative stomatitis, leukopenia, nausea, and abdominal distress'
    ],
    [
      'Otras frecuentes: malestar, fatiga, escalofríos y fiebre, mareo y menor resistencia a las infecciones.',
      '34084-4',
      'Other frequently reported adverse reactions are malaise, undue fatigue, chills and fever, dizziness and decreased resistance to infection'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'subcutanea' ],
  formaNormalizada: 'jeringa-precargada',
  recorridoPropio: {
    resumen: 'El metotrexato se absorbe en general por completo por las vías parenterales de inyección. La excreción renal es la vía principal de eliminación y depende de la dosis y de la vía de administración; se produce por filtración glomerular y secreción tubular activa.',
    etapas: {
      liberacion: {
        organos: [ 'piel', 'tejido-adiposo' ],
        llega: 'La solución queda depositada bajo la piel, en el tejido subcutáneo.',
        ocurre: 'Autoinyector monodosis: la solución se inyecta bajo la piel y queda en el tejido subcutáneo, desde donde pasa a la sangre.',
        sigue: 'El fármaco pasa del tejido subcutáneo a la sangre.',
        datos: [
          {
            t: 'Autoinyector monodosis: la solución se inyecta bajo la piel y queda en el tejido subcutáneo, desde donde pasa a la sangre.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '3 · Formas y concentraciones',
              cita: 'Single-dose auto-injector delivering 0.4 mL of methotrexate',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [ 'piel', 'sangre' ],
        organosGenerales: [],
        llega: 'El fármaco pasa del tejido subcutáneo a la sangre.',
        ocurre: 'El metotrexato se absorbe en general por completo por las vías parenterales de inyección.',
        sigue: 'Circula con la sangre hacia los tejidos y el hígado.',
        datos: [
          {
            t: 'El metotrexato se absorbe en general por completo por las vías parenterales de inyección.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'Methotrexate is generally completely absorbed from parenteral routes of injection',
              codigo: '43682-4'
            }
          },
          {
            t: 'La exposición sistémica fue similar entre este autoinyector y la inyección intramuscular o subcutánea de metotrexato.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'systemic exposure of methotrexate was found to be similar between Otrexup and intramuscular or subcutaneous administration of methotrexate injection',
              codigo: '43682-4'
            },
            poblacion: 'pacientes con artritis reumatoide'
          },
          {
            t: 'La absorción sistémica fue similar al inyectar en el abdomen o en el muslo.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'Methotrexate systemic absorption from Otrexup was similar when administered into the abdomen or thigh',
              codigo: '43682-4'
            }
          }
        ]
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos', 'higado' ],
        llega: 'El fármaco circula en la sangre.',
        ocurre: 'Tras la administración intravenosa, el volumen de distribución inicial es de unos 0,18 L/kg y el del estado estacionario, de unos 0,4 a 0,8 L/kg.',
        sigue: 'Se reparte por los tejidos y llega al hígado y a los riñones.',
        datos: [
          {
            t: 'Tras la administración intravenosa, el volumen de distribución inicial es de unos 0,18 L/kg y el del estado estacionario, de unos 0,4 a 0,8 L/kg.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'After intravenous administration, the initial volume of distribution is approximately 0.18 L/kg (18% of body weight) and steady-state volume of distribution is approximately 0.4 to 0.8 L/kg (40 to 80% of body weight)',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Dihidrofolato reductasa',
          efecto: 'Inhibe la dihidrofolato reductasa; así interfiere en la síntesis y la reparación del ADN y en la replicación celular, y afecta sobre todo a tejidos que proliferan activamente.',
          lugar: [ 'medula-osea', 'tejidos' ],
          datos: [
            {
              t: 'Inhibe la dihidrofolato reductasa; así interfiere en la síntesis y la reparación del ADN y en la replicación celular, y afecta sobre todo a tejidos que proliferan activamente.',
              ref: {
                f: 'dailymed-metotrexato-subcutaneo',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Methotrexate inhibits dihydrofolic acid reductase',
                codigo: '43679-0'
              }
            },
            {
              t: 'El metotrexato interfiere en la síntesis y la reparación del ADN y en la replicación celular.',
              ref: {
                f: 'dailymed-metotrexato-subcutaneo',
                sec: '12.1 · Mecanismo de acción',
                cita: 'methotrexate interferes with DNA synthesis, repair, and cellular replication',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Tras la absorción sufre metabolismo hepático e intracelular a formas poliglutamadas, que pueden volver a convertirse en metotrexato por hidrolasas.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Tras la absorción sufre metabolismo hepático e intracelular a formas poliglutamadas, que pueden volver a convertirse en metotrexato por hidrolasas.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'After absorption, methotrexate undergoes hepatic and intracellular metabolism to polyglutamated forms which can be converted back to methotrexate by hydrolase enzymes',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Poliglutamatos de metotrexato',
            actividad: 'activo',
            nota: 'Inhiben la dihidrofolato reductasa y la timidilato sintetasa; pueden permanecer en los tejidos durante periodos prolongados.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'These polyglutamates act as inhibitors of dihydrofolate reductase and thymidylate synthetase',
              codigo: '43682-4'
            }
          },
          {
            nombre: '7-hidroximetotrexato',
            actividad: 'desconocida',
            nota: 'Se forma en pequeña cantidad; la etiqueta no indica su actividad.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'A small amount of metabolism to 7-hydroxymethotrexate may occur at doses commonly prescribed',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'bilis' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'La excreción renal es la vía principal de eliminación y depende de la dosis y de la vía de administración; se produce por filtración glomerular y secreción tubular activa.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'La excreción renal es la vía principal de eliminación y depende de la dosis y de la vía de administración; se produce por filtración glomerular y secreción tubular activa.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'Renal excretion is the primary route of elimination and is dependent upon dosage and route of administration',
              codigo: '43682-4'
            }
          },
          {
            t: 'La excreción biliar es limitada: el 10 % o menos de la dosis.',
            ref: {
              f: 'dailymed-metotrexato-subcutaneo',
              sec: '12.3 · Farmacocinética',
              cita: 'There is limited biliary excretion amounting to 10% or less of the administered dose',
              codigo: '43682-4'
            }
          }
        ],
        formas: [ 'disuelto' ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-metotrexato-subcutaneo', '9ab8ce16-f7de-41d4-a4c8-1c742621b6d5', 'OTREXUP (METHOTREXATE) INJECTION, SOLUTION', 'Otrexup', '15', '2025-02-03', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución inicial',
    valor: '0,18 (aprox.)',
    unidad: 'L/kg',
    analito: 'metotrexato',
    origen: 'otra-via',
    ref: {
      f: 'dailymed-metotrexato-subcutaneo',
      sec: '12.3 · Farmacocinética',
      cita: 'After intravenous administration, the initial volume of distribution is approximately 0.18 L/kg (18% of body weight)',
      codigo: '43682-4'
    },
    presentacion: 'Otrexup · solución inyectable'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución en el estado estacionario',
    valor: '0,4 a 0,8 (aprox.)',
    unidad: 'L/kg',
    analito: 'metotrexato',
    origen: 'otra-via',
    ref: {
      f: 'dailymed-metotrexato-subcutaneo',
      sec: '12.3 · Farmacocinética',
      cita: 'steady-state volume of distribution is approximately 0.4 to 0.8 L/kg (40 to 80% of body weight)',
      codigo: '43682-4'
    },
    presentacion: 'Otrexup · solución inyectable'
  },
  {
    magnitud: 'tmax',
    nombre: 'Tiempo hasta las concentraciones séricas máximas tras una inyección intramuscular',
    valor: '30 a 60',
    unidad: 'min',
    analito: 'metotrexato',
    origen: 'otra-via',
    ref: {
      f: 'dailymed-metotrexato-subcutaneo',
      sec: '12.3 · Farmacocinética',
      cita: 'After intramuscular injection, peak serum concentrations occur in 30 to 60 minutes',
      codigo: '43682-4'
    },
    presentacion: 'Otrexup · solución inyectable'
  }
]
} satisfies RengExtensionFicha
