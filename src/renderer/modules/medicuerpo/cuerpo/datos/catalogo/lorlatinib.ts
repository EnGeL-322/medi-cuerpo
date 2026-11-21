import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'lorlatinib',
    nombre: 'Lorlatinib',
    clase: 'Inhibidor de cinasas ALK y ROS1 de tercera generación',
    sinonimos: [ 'lorlatinib', 'Lorbrena' ],
    formula: 'C21H19FN6O2',
    masaMolar: 406.4,
    smiles: 'C[C@@H]1C2=C(C=CC(=C2)F)C(=O)N(CC3=NN(C(=C3C4=CC(=C(N=C4)N)O1)C#N)C)C',
    inchikey: 'IIXWYSCJSQVBQM-LLVKDONJSA-N',
    cid: 71731823,
    iupac: '(16R)-19-amino-13-fluoro-4,8,16-trimethyl-9-oxo-17-oxa-4,5,8,20-tetrazatetracyclo[16.3.1.02,6.010,15]docosa-1(22),2,5,10(15),11,13,18,20-octaene-3-carbonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'lorlatinib-oral',
      producto: 'Lorbrena · comprimido recubierto con película',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '25 mg o 100 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'anhydrous dibasic calcium phosphate',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'triacetin',
        'polyethylene glycol, unspecified',
        'titanium dioxide',
        'ferrosoferric oxide',
        'ferric oxide red'
      ],
      usos: {
        t: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico ALK positivo.',
        ref: {
          f: 'dailymed-lorlatinib',
          sec: '1 · Indicaciones',
          cita: 'LORBRENA ® is indicated for the treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors are anaplastic lymphoma kinase (ALK)-positive',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-lorlatinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad grave con inductores potentes de la CYP3A',
          texto: 'Suspender los inductores potentes de la CYP3A antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Discontinue strong CYP3A inducers for 3 plasma half-lives of the strong CYP3A inducer prior to initiating LORBRENA',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos sobre el sistema nervioso central',
          texto: 'Incluyen convulsiones, efectos psicóticos y cambios en la cognición, el ánimo, el habla, el estado mental y el sueño.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'CNS effects include seizures, psychotic effects and changes in cognitive function, mood (including suicidal ideation), speech, mental status, and sleep',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hiperlipidemia',
          texto: 'Iniciar o aumentar los hipolipemiantes según la gravedad.',
          organos: [],
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Initiate or increase the dose of lipid-lowering agents',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Bloqueo auriculoventricular',
          texto: 'Interrumpir y reanudar a igual o menor dosis según la gravedad.',
          organos: [],
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Atrioventricular Block : Withhold and resume LORBRENA at same or reduced dose based on severity',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más) y alteraciones de grado 3-4: edema, neuropatía periférica, aumento de peso, efectos cognitivos, fatiga, disnea, artralgia, diarrea, efectos sobre el ánimo, hipercolesterolemia, hipertrigliceridemia y tos.',
          '34084-4',
          'Most common (incidence ≥20%) adverse reactions and Grade 3–4 laboratory abnormalities are edema, peripheral neuropathy, weight gain, cognitive effects, fatigue, dyspnea, arthralgia, diarrhea'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 25 mg o 100 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con cáncer de pulmón no microcítico metastásico ALK positivo.',
    actua: 'Inhibidor de cinasas activo in vitro frente a ALK y ROS1 (y otras como TRK y FAK), incluidas formas mutadas de ALK resistentes a otros inhibidores.',
    recorrido: 'La biodisponibilidad absoluta media es del 81 % y la mediana del tmax de 1,2 horas tras una dosis; una comida grasa no produce diferencias relevantes. Tras 100 mg marcados, el 48 % de la radiactividad se recuperó en la orina (menos del 1 % sin cambios) y el 41 % en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película de liberación inmediata: se disgrega en el tubo digestivo.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '3 · Formas y concentraciones',
            cita: '25 mg: 8 mm round, tan, immediate release, film-coated',
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
      ocurre: 'La biodisponibilidad absoluta media es del 81 % y la mediana del tmax de 1,2 horas tras una dosis; una comida grasa no produce diferencias relevantes.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta media es del 81 % y la mediana del tmax de 1,2 horas tras una dosis; una comida grasa no produce diferencias relevantes.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean absolute bioavailability is 81% (90% CI 76%, 86%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La mediana del tmax es de 1,2 horas tras una dosis única de 100 mg.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The median lorlatinib T max is 1.2 hours (0.5 to 4 hours) following a single oral 100 mg dose',
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
      ocurre: 'Se une en un 66 % a las proteínas plasmáticas in vitro; el cociente sangre/plasma es de 0,99.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en un 66 % a las proteínas plasmáticas in vitro; el cociente sangre/plasma es de 0,99.',
          ref: { f: 'dailymed-lorlatinib', sec: '12.3 · Farmacocinética', cita: 'Lorlatinib is 66% bound to plasma proteins, in vitro', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'ALK y ROS1',
        efecto: 'Inhibidor de cinasas activo in vitro frente a ALK y ROS1 (y otras como TRK y FAK), incluidas formas mutadas de ALK resistentes a otros inhibidores.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de cinasas activo in vitro frente a ALK y ROS1 (y otras como TRK y FAK), incluidas formas mutadas de ALK resistentes a otros inhibidores.',
            ref: {
              f: 'dailymed-lorlatinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Lorlatinib is a kinase inhibitor with in vitro activity against ALK and ROS1 as well as TYK1, FER, FPS, TRKA, TRKB, TRKC, FAK, FAK2, and ACK',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza sobre todo por la CYP3A4 y la UGT1A4; su metabolito ácido benzoico M8 es inactivo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza sobre todo por la CYP3A4 y la UGT1A4; su metabolito ácido benzoico M8 es inactivo.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Lorlatinib is metabolized primarily by CYP3A4 and UGT1A4, with minor contribution from CYP2C8, CYP2C19, CYP3A5, and UGT1A3',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M8 (ácido benzoico)',
          actividad: 'inactivo',
          nota: 'Metabolito de escisión oxidativa; 21 % de la radiactividad circulante.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The oxidative cleavage metabolite, M8, is pharmacologically inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 100 mg marcados, el 48 % de la radiactividad se recuperó en la orina (menos del 1 % sin cambios) y el 41 % en las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 100 mg marcados, el 48 % de la radiactividad se recuperó en la orina (menos del 1 % sin cambios) y el 41 % en las heces.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: '48% of the radioactivity was recovered in urine (<1% as unchanged) and 41% in feces (about 9% as unchanged)',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida plasmática media fue de 24 horas tras una dosis única de 100 mg.',
          ref: {
            f: 'dailymed-lorlatinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean plasma half‑life (t ½ ) of lorlatinib was 24 hours (40%) after a single oral 100 mg dose of LORBRENA',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta media',
      valor: '81',
      unidad: '%',
      analito: 'lorlatinib',
      ref: {
        f: 'dailymed-lorlatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean absolute bioavailability is 81% (90% CI 76%, 86%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tmax tras dosis única',
      valor: '1,2',
      unidad: 'h',
      analito: 'lorlatinib',
      ref: {
        f: 'dailymed-lorlatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The median lorlatinib T max is 1.2 hours (0.5 to 4 hours) following a single oral 100 mg dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas in vitro',
      valor: '66',
      unidad: '%',
      analito: 'lorlatinib',
      ref: { f: 'dailymed-lorlatinib', sec: '12.3 · Farmacocinética', cita: 'Lorlatinib is 66% bound to plasma proteins, in vitro', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática media',
      valor: '24',
      unidad: 'h',
      analito: 'lorlatinib',
      ref: {
        f: 'dailymed-lorlatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean plasma half‑life (t ½ ) of lorlatinib was 24 hours (40%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento oral en estado estacionario',
      valor: '18',
      unidad: 'L/h',
      analito: 'lorlatinib',
      condiciones: 'estado estacionario',
      ref: {
        f: 'dailymed-lorlatinib',
        sec: '12.3 · Farmacocinética',
        cita: 'increased to 18 L/h (39%) at steady‑state, suggesting autoinduction',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '48',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'dosis oral única marcada de 100 mg',
      ref: {
        f: 'dailymed-lorlatinib',
        sec: '12.3 · Farmacocinética',
        cita: '48% of the radioactivity was recovered in urine (<1% as unchanged)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-lorlatinib', '2b34d62d-e02a-4af3-bc0d-1571dd4ee76d', 'LORBRENA (LORLATINIB) TABLET, FILM COATED', 'Lorbrena', '13', '2026-06-29', '2026-11-19'),
    rengPubchem(71731823, 'lorlatinib', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
