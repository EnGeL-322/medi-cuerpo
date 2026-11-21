import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'baricitinib',
    nombre: 'Baricitinib',
    clase: 'Inhibidor de las cinasas Janus (JAK)',
    sinonimos: [ 'baricitinib', 'Olumiant' ],
    formula: 'C16H17N7O2S',
    masaMolar: 371.4,
    smiles: 'CCS(=O)(=O)N1CC(C1)(CC#N)N2C=C(C=N2)C3=C4C=CNC4=NC=N3',
    inchikey: 'XUZMWHLSFXCVMG-UHFFFAOYSA-N',
    cid: 44205240,
    iupac: '2-[1-ethylsulfonyl-3-[4-(7H-pyrrolo[2,3-d]pyrimidin-4-yl)pyrazol-1-yl]azetidin-3-yl]acetonitrile',
    area: 'Inflamación e inmunidad'
  },
  presentaciones: [
    {
      id: 'baricitinib-oral',
      producto: 'Olumiant · comprimido recubierto con película',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '2 mg, 1 mg o 4 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'soybean lecithin',
        'ferric oxide red'
      ],
      usos: {
        t: 'Artritis reumatoide activa de moderada a grave en adultos con respuesta insuficiente a uno o más bloqueadores del TNF; también alopecia areata grave y COVID-19 hospitalizado.',
        ref: {
          f: 'dailymed-baricitinib',
          sec: '1 · Indicaciones',
          cita: 'Moderately to severely active rheumatoid arthritis (RA) in adults who have had an inadequate response to one or more TNF blockers',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-baricitinib',
      advertencias: [
        {
          titulo: 'Infecciones graves, mortalidad, cáncer, eventos cardiovasculares y trombosis',
          texto: 'Aumenta el riesgo de infecciones bacterianas, fúngicas, virales y oportunistas graves que llevan a hospitalización o muerte, incluida la tuberculosis.',
          organos: [ 'sistema-inmunitario', 'pulmones' ],
          ref: {
            f: 'dailymed-baricitinib',
            sec: 'Advertencia destacada',
            cita: 'Increased risk of serious bacterial, fungal, viral and opportunistic infections leading to hospitalization or death, including tuberculosis (TB)',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Infecciones graves',
          texto: 'Se han descrito infecciones graves y a veces mortales por bacterias, micobacterias, hongos invasores, virus u otros oportunistas.',
          organos: [ 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-baricitinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Serious and sometimes fatal infections due to bacterial, mycobacterial, invasive fungal, viral, or other opportunistic pathogens have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las infecciones más frecuentes: infección viral de vías respiratorias altas, de vías respiratorias altas, urinaria y bronquitis.',
          '34084-4',
          'most commonly reported infections with OLUMIANT were viral upper respiratory tract infection, upper respiratory tract infection, urinary tract infection, and bronchitis'
        ],
        [
          'En 16 semanas hubo infecciones graves en 5 personas con 2 mg (3,6 por 100 pacientes-año) frente a 13 con placebo (4,2).',
          '34084-4',
          'serious infections were reported in 13 subjects (4.2 per 100 patient-years) treated with placebo, 5 subjects (3.6 per 100 patient-years) treated with OLUMIANT 2 mg'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 2 mg, 1 mg o 4 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Artritis reumatoide activa de moderada a grave en adultos con respuesta insuficiente a uno o más bloqueadores del TNF; también alopecia areata grave y COVID-19 hospitalizado.',
    actua: 'Inhibe las cinasas Janus (JAK) dentro de las células: impide la fosforilación y activación de las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 80 %; el máximo llega aproximadamente a la hora. Una comida rica en grasa bajó el AUC un 11 % y la Cmax un 18 %. La vía principal es el riñón (filtración y secreción activa): alrededor del 75 % de la dosis sale por la orina y el 20 % por las heces, sobre todo sin cambios.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimidos recubiertos con película de 1, 2 o 4 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimidos recubiertos con película de 1, 2 o 4 mg.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '3 · Formas y concentraciones',
            cita: 'OLUMIANT is available as debossed, film-coated tablets',
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
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 80 %; el máximo llega aproximadamente a la hora. Una comida rica en grasa bajó el AUC un 11 % y la Cmax un 18 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 80 %; el máximo llega aproximadamente a la hora. Una comida rica en grasa bajó el AUC un 11 % y la Cmax un 18 %.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of baricitinib is approximately 80%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras la administración oral, el máximo en plasma llega aproximadamente a la hora.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'peak plasma concentrations are reached approximately at 1 hour',
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
      ocurre: 'Se une en un 50 % a proteínas del plasma y en un 45 % a proteínas del suero; el volumen de distribución tras vía intravenosa es de 76 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 50 % a proteínas del plasma y en un 45 % a proteínas del suero; el volumen de distribución tras vía intravenosa es de 76 L.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Baricitinib is approximately 50% bound to plasma proteins and 45% bound to serum proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Cinasas Janus (JAK)',
        efecto: 'Inhibe las cinasas Janus (JAK) dentro de las células: impide la fosforilación y activación de las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
        lugar: [ 'articulaciones', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Inhibe las cinasas Janus (JAK) dentro de las células: impide la fosforilación y activación de las proteínas STAT, que regulan la expresión de genes de la función inmunitaria.',
            ref: {
              f: 'dailymed-baricitinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Baricitinib modulates the signaling pathway at the point of JAKs, preventing the phosphorylation and activation of STATs',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Solo alrededor del 6 % de la dosis se identifica como metabolitos (tres en la orina y uno en las heces); el CYP3A4 es la enzima principal y no se cuantificó ningún metabolito en plasma.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Solo alrededor del 6 % de la dosis se identifica como metabolitos (tres en la orina y uno en las heces); el CYP3A4 es la enzima principal y no se cuantificó ningún metabolito en plasma.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 6% of the orally administered baricitinib dose is identified as metabolites',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos menores (6 % de la dosis)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 6% of the orally administered baricitinib dose is identified as metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La vía principal es el riñón (filtración y secreción activa): alrededor del 75 % de la dosis sale por la orina y el 20 % por las heces, sobre todo sin cambios.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La vía principal es el riñón (filtración y secreción activa): alrededor del 75 % de la dosis sale por la orina y el 20 % por las heces, sobre todo sin cambios.',
          ref: {
            f: 'dailymed-baricitinib',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% of the administered dose was eliminated in the urine, while about 20% of the dose was eliminated in the feces',
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
      valor: '80 (aprox.)',
      unidad: '%',
      analito: 'baricitinib',
      ref: {
        f: 'dailymed-baricitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of baricitinib is approximately 80%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'baricitinib',
      ref: {
        f: 'dailymed-baricitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'peak plasma concentrations are reached approximately at 1 hour',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'baricitinib',
      ref: {
        f: 'dailymed-baricitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Baricitinib is approximately 50% bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución tras vía intravenosa',
      valor: '76',
      unidad: 'L',
      analito: 'baricitinib',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-baricitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'After intravenous administration, the volume of distribution is 76 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación en artritis reumatoide',
      valor: '12-16 (aprox.)',
      unidad: 'h',
      analito: 'baricitinib',
      poblacion: 'personas con artritis reumatoide o alopecia areata',
      ref: { f: 'dailymed-baricitinib', sec: '12.3 · Farmacocinética', cita: 'approximately 12 to 16 hours', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminado por la orina',
      valor: '75 (aprox.)',
      unidad: '% de la dosis',
      analito: 'baricitinib y metabolitos',
      ref: {
        f: 'dailymed-baricitinib',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 75% of the administered dose was eliminated in the urine',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Eliminado por las heces',
      valor: '20 (aprox.)',
      unidad: '% de la dosis',
      analito: 'baricitinib y metabolitos',
      ref: { f: 'dailymed-baricitinib', sec: '12.3 · Farmacocinética', cita: 'about 20% of the dose was eliminated in the feces', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-baricitinib', '866e9f35-9035-4581-a4b1-75a621ab55cf', 'OLUMIANT (BARICITINIB) TABLET, FILM COATED', 'Olumiant', '32', '2026-10-22', '2026-11-12'),
    rengPubchem(44205240, 'baricitinib', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
