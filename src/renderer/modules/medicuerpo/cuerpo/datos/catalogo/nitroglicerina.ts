import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nitroglicerina',
    nombre: 'Nitroglicerina',
    clase: 'Nitrato vasodilatador',
    sinonimos: [ 'nitroglycerin', 'glyceryl trinitrate', 'Nitrostat' ],
    formula: 'C3H5N3O9',
    masaMolar: 227.09,
    smiles: 'C(C(CO[N+](=O)[O-])O[N+](=O)[O-])O[N+](=O)[O-]',
    inchikey: 'SNIOPGDIGTZGOP-UHFFFAOYSA-N',
    cid: 4510,
    iupac: '1,3-dinitrooxypropan-2-yl nitrate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nitroglicerina-oral',
      producto: 'Nitrostat · comprimido',
      titular: 'VIATRIS SPECIALTY LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '0.3 mg, 0.4 mg o 0.6 mg por comprimido, según la etiqueta',
      excipientes: [ 'lactose monohydrate', 'glyceryl monostearate', 'starch, corn', 'calcium stearate', 'silicon dioxide' ],
      usos: {
        t: 'Alivio de una crisis de angina de pecho o prevención aguda de la crisis, por enfermedad de las arterias coronarias.',
        ref: {
          f: 'dailymed-nitroglicerina',
          sec: '1 · Indicaciones',
          cita: 'NITROSTAT is indicated for the acute relief of an attack or acute prophylaxis of angina pectoris due to coronary artery disease',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nitroglicerina',
      advertencias: [
        {
          titulo: 'Tolerancia',
          texto: 'El uso excesivo puede llevar a desarrollar tolerancia.',
          organos: [ 'vasos' ],
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Excessive use may lead to the development of tolerance',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hipotensión',
          texto: 'Puede producirse hipotensión intensa, incluso con dosis terapéuticas.',
          organos: [ 'vasos', 'corazon' ],
          ref: { f: 'dailymed-nitroglicerina', sec: '5 · Advertencias y precauciones', cita: 'Severe hypotension may occur', codigo: '43685-7' }
        },
        {
          titulo: 'Cefalea',
          texto: 'La nitroglicerina produce dolores de cabeza relacionados con la dosis, sobre todo al comenzar.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '5 · Advertencias y precauciones',
            cita: 'Nitroglycerin produces dose-related headaches, especially at the start of nitroglycerin therapy',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Pueden aparecer a veces vértigo, mareo, debilidad, palpitaciones y otras manifestaciones de hipotensión postural, sobre todo de pie e inmóvil.',
          '34084-4',
          'Vertigo, dizziness, weakness, palpitation, and other manifestations of postural hypotension may develop occasionally, particularly in erect, immobile patients'
        ],
        [
          'La etiqueta destaca la hipotensión, el dolor de cabeza y la hipersensibilidad.',
          '34084-4',
          'The following adverse reactions are discussed in more detail elsewhere in the label'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'sublingual' ],
      formaNormalizada: 'comprimido-sublingual'
    }
  ],
  resumen: {
    contiene: 'Comprimido: 0.3 mg, 0.4 mg o 0.6 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Alivio de una crisis de angina de pecho o prevención aguda de la crisis, por enfermedad de las arterias coronarias.',
    actua: 'Forma óxido nítrico, que activa la guanilato ciclasa y aumenta el GMP cíclico del músculo liso; esto lleva a la desfosforilación de las cadenas ligeras de miosina y a la vasodilatación.',
    recorrido: 'Se absorbe con rapidez tras la administración sublingual: el pico medio de nitroglicerina en plasma llega a los 6 o 7 minutos de media. Las concentraciones plasmáticas de nitroglicerina bajan con rapidez, con una semivida de eliminación media de 2 a 3 minutos; el metabolismo es la vía principal de eliminación y el aclaramiento supera al flujo sanguíneo hepático.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      llega: 'El comprimido llega a la mucosa de la boca, bajo la lengua.',
      ocurre: 'Comprimido de vía sublingual: se disuelve en la boca, bajo la lengua, sin pasar por el estómago.',
      sigue: 'El principio activo se absorbe por la mucosa de la boca y llega a la sangre.',
      datos: [
        {
          t: 'Comprimido de vía sublingual: se disuelve en la boca, bajo la lengua, sin pasar por el estómago.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Nitroglycerin is rapidly absorbed following sublingual administration of NITROSTAT tablets',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [ 'boca' ],
      organosGenerales: [],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe con rapidez tras la administración sublingual: el pico medio de nitroglicerina en plasma llega a los 6 o 7 minutos de media.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez tras la administración sublingual: el pico medio de nitroglicerina en plasma llega a los 6 o 7 minutos de media.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Mean peak nitroglycerin plasma concentrations occur at a mean time of approximately 6 to 7 minutes postdose',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 40 %, pero tiende a variar por factores como la hidratación sublingual y el metabolismo en la mucosa.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of nitroglycerin from NITROSTAT tablets is approximately 40% but tends to be variable due to factors influencing drug absorption, such as sublingual hydration and mucosal metabolism',
            codigo: '43682-4'
          }
        }
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'A concentraciones plasmáticas de entre 50 y 500 ng/mL, la unión de la nitroglicerina a proteínas del plasma es de alrededor del 60 %.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'A concentraciones plasmáticas de entre 50 y 500 ng/mL, la unión de la nitroglicerina a proteínas del plasma es de alrededor del 60 %.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'At plasma concentrations between 50 and 500 ng/mL, the binding of nitroglycerin to plasma proteins is approximately 60%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Tras una dosis intravenosa, el volumen de distribución de la nitroglicerina es de 3,3 L/kg.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution (V Area ) of nitroglycerin following intravenous administration is 3.3 L/kg',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Guanilato ciclasa (vía del óxido nítrico y GMP cíclico)',
        efecto: 'Forma óxido nítrico, que activa la guanilato ciclasa y aumenta el GMP cíclico del músculo liso; esto lleva a la desfosforilación de las cadenas ligeras de miosina y a la vasodilatación.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Forma óxido nítrico, que activa la guanilato ciclasa y aumenta el GMP cíclico del músculo liso; esto lleva a la desfosforilación de las cadenas ligeras de miosina y a la vasodilatación.',
            ref: {
              f: 'dailymed-nitroglicerina',
              sec: '12.1 · Mecanismo de acción',
              cita: "Nitroglycerin forms free radical nitric oxide (NO) which activates guanylate cyclase, resulting in an increase of guanosine 3'5' monophosphate (cyclic GMP) in smooth muscle",
              codigo: '43679-0'
            }
          },
          {
            t: 'Estos sucesos llevan a la desfosforilación de las cadenas ligeras de miosina, que regulan el estado contráctil del músculo liso, y producen vasodilatación.',
            ref: {
              f: 'dailymed-nitroglicerina',
              sec: '12.1 · Mecanismo de acción',
              cita: 'These events lead to dephosphorylation of myosin light chains, which regulate the contractile state in smooth muscle, and result in vasodilatation',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado', 'sangre' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Una reductasa del hígado es la más importante en su metabolismo a di- y mononitratos de glicerol y, por último, a glicerol y nitrato orgánico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Una reductasa del hígado es la más importante en su metabolismo a di- y mononitratos de glicerol y, por último, a glicerol y nitrato orgánico.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'A liver reductase enzyme is of primary importance in the metabolism of nitroglycerin to glycerol di- and mononitrate metabolites and ultimately to glycerol and organic nitrate',
            codigo: '43682-4'
          }
        },
        {
          t: 'También se metaboliza fuera del hígado, en los glóbulos rojos y en las paredes de los vasos.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Known sites of extrahepatic metabolism include red blood cells and vascular walls',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '1,2- y 1,3-dinitroglicerina',
          actividad: 'activo',
          nota: 'Alrededor del 2 % y el 10 % de la actividad de la nitroglicerina; su semivida es unas 10 veces mayor.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'The 1,2- and 1,3-dinitroglycerin metabolites have been reported to possess approximately 2% and 10%, respectively, of the pharmacological activity of nitroglycerin',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'Mononitratos de glicerol',
          actividad: 'inactivo',
          nota: 'Sin actividad biológica.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Glycerol mononitrate metabolites of nitroglycerin are biologically inactive',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Las concentraciones plasmáticas de nitroglicerina bajan con rapidez, con una semivida de eliminación media de 2 a 3 minutos; el metabolismo es la vía principal de eliminación y el aclaramiento supera al flujo sanguíneo hepático.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Las concentraciones plasmáticas de nitroglicerina bajan con rapidez, con una semivida de eliminación media de 2 a 3 minutos; el metabolismo es la vía principal de eliminación y el aclaramiento supera al flujo sanguíneo hepático.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Nitroglycerin plasma concentrations decrease rapidly, with a mean elimination half-life of 2 to 3 minutes',
            codigo: '43682-4'
          }
        },
        {
          t: 'La etiqueta indica que el metabolismo es la vía principal de eliminación del fármaco.',
          ref: {
            f: 'dailymed-nitroglicerina',
            sec: '12.3 · Farmacocinética',
            cita: 'Metabolism is the primary route of drug elimination',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático de nitroglicerina',
      valor: '6 a 7 (media)',
      unidad: 'min',
      analito: 'nitroglicerina',
      ref: {
        f: 'dailymed-nitroglicerina',
        sec: '12.3 · Farmacocinética',
        cita: 'Mean peak nitroglycerin plasma concentrations occur at a mean time of approximately 6 to 7 minutes postdose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta de los comprimidos',
      valor: '40 (aprox.; variable)',
      unidad: '%',
      analito: 'nitroglicerina',
      ref: {
        f: 'dailymed-nitroglicerina',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of nitroglycerin from NITROSTAT tablets is approximately 40% but tends to be variable',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '60 (aprox.)',
      unidad: '%',
      analito: 'nitroglicerina',
      condiciones: '50 a 500 ng/mL',
      ref: {
        f: 'dailymed-nitroglicerina',
        sec: '12.3 · Farmacocinética',
        cita: 'At plasma concentrations between 50 and 500 ng/mL, the binding of nitroglycerin to plasma proteins is approximately 60%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '3,3',
      unidad: 'L/kg',
      analito: 'nitroglicerina',
      condiciones: 'dosis intravenosa',
      ref: {
        f: 'dailymed-nitroglicerina',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution (V Area ) of nitroglycerin following intravenous administration is 3.3 L/kg',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación de la nitroglicerina',
      valor: '2 a 3 (media)',
      unidad: 'min',
      analito: 'nitroglicerina',
      ref: { f: 'dailymed-nitroglicerina', sec: '12.3 · Farmacocinética', cita: 'mean elimination half-life of 2 to 3 minutes', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nitroglicerina', '9a52da75-d0af-4237-96c0-0b12adfa8636', 'NITROSTAT (NITROGLYCERIN) TABLET', 'Nitrostat', '3', '2024-06-06', '2026-11-15'),
    rengPubchem(4510, 'nitroglycerin', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
