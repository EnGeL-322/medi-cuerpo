import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'nisoldipino',
    nombre: 'Nisoldipino',
    clase: 'Antagonista del calcio dihidropiridínico (liberación prolongada)',
    sinonimos: [ 'nisoldipine' ],
    formula: 'C20H24N2O6',
    masaMolar: 388.4,
    smiles: 'CC1=C(C(C(=C(N1)C)C(=O)OCC(C)C)C2=CC=CC=C2[N+](=O)[O-])C(=O)OC',
    inchikey: 'VKQFCGNPDRICFG-UHFFFAOYSA-N',
    cid: 4499,
    iupac: '3-O-methyl 5-O-(2-methylpropyl) 2,6-dimethyl-4-(2-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'nisoldipino-oral',
      producto: 'nisoldipine · comprimido recubierto de liberación prolongada',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto de liberación prolongada',
      formaFuente: 'TABLET, FILM COATED, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '8.5 mg o 17 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'fd&c blue no. 2--aluminum lake',
        'glyceryl mono- and dicaprylocaprate',
        'polyvinyl alcohol graft polyethylene glycol copolymer (3:1; 45000 mw)',
        'polyvinyl alcohol, unspecified',
        'talc',
        'titanium dioxide',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión arterial, solo o junto con otros antihipertensivos.',
        ref: {
          f: 'dailymed-nisoldipino',
          sec: '1 · Indicaciones',
          cita: 'Nisoldipine extended-release tablets are indicated for the treatment of hypertension',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-nisoldipino',
      advertencias: [
        {
          titulo: 'Más angina o infarto en la enfermedad coronaria',
          texto: 'Rara vez, sobre todo con enfermedad coronaria obstructiva grave, han aparecido angina más frecuente, larga o intensa, o infarto agudo de miocardio al empezar o al subir la dosis.',
          organos: [ 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-nisoldipino',
            sec: 'Advertencias',
            cita: 'Rarely, patients, particularly those with severe obstructive coronary artery disease, have developed increased frequency, duration and/or severity of angina, or acute myocardial infarction on starting calcium channel blocker therapy',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos adversos más frecuentes son los relacionados con sus propiedades vasodilatadoras; suelen ser leves y pocas veces obligan a dejar el tratamiento.',
          '34084-4',
          'The most frequently occurring adverse experiences with nisoldipine extended-release tablets are those related to its vasodilator properties; these are generally mild and only occasionally lead to patient withdrawal from treatment'
        ],
        [
          'Solo el edema periférico y, posiblemente, el mareo parecen depender de la dosis.',
          '34084-4',
          'Only peripheral edema and possibly dizziness appear to be dose related'
        ],
        [
          'En los ensayos de EE. UU. en hipertensión, el 10,9 % de los pacientes dejó el tratamiento por acontecimientos adversos, frente al 2,9 % con placebo.',
          '34084-4',
          '10.9% of the 921 nisoldipine extended-release tablets patients discontinued treatment due to adverse events compared with 2.9% of 280 placebo patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto de liberación prolongada: 8.5 mg o 17 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión arterial, solo o junto con otros antihipertensivos.',
    actua: 'Antagonista del calcio de la clase de las dihidropiridinas: inhibe la entrada de calcio a través de la membrana en el músculo liso vascular y en el músculo cardíaco.',
    recorrido: 'Se absorbe relativamente bien, pero la biodisponibilidad absoluta es de alrededor del 5 %, en parte por el metabolismo presistémico en la pared intestinal, que disminuye de las partes proximales a las distales del intestino. Entre el 60 % y el 80 % de una dosis oral se excreta por la orina, con solo trazas de nisoldipino inalterado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto de liberación prolongada tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto monolítico con un hidrogel que controla la liberación del fármaco.',
      sigue: 'El principio activo se va liberando poco a poco a lo largo del tubo digestivo.',
      datos: [
        {
          t: 'Comprimido recubierto monolítico con un hidrogel que controla la liberación del fármaco.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '11 · Descripción',
            cita: 'Nisoldipine Extended-Release Tablets are film-coated monolithic tablets containing a hydrogel which provides for the controlled release of the drug',
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
      ocurre: 'Se absorbe relativamente bien, pero la biodisponibilidad absoluta es de alrededor del 5 %, en parte por el metabolismo presistémico en la pared intestinal, que disminuye de las partes proximales a las distales del intestino.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe relativamente bien, pero la biodisponibilidad absoluta es de alrededor del 5 %, en parte por el metabolismo presistémico en la pared intestinal, que disminuye de las partes proximales a las distales del intestino.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: "Nisoldipine's low bioavailability is due, in part, to pre-systemic metabolism in the gut wall, and this metabolism decreases from the proximal to the distal parts of the intestine",
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 5 %.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of nisoldipine is about 5%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las concentraciones plasmáticas máximas se alcanzan a las 9,2 ± 5,1 horas.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Maximal plasma concentrations of nisoldipine are reached at 9.2±5.1 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Con una comida rica en grasas, la concentración máxima aumenta hasta un 245 % y la exposición total (AUC) baja un 25 %.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'A pronounced food-effect is observed when nisoldipine extended-release tablets are administered with a high-fat meal resulting in an increased peak concentration (C max ) of up to 245%',
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
      ocurre: 'La unión a las proteínas del plasma es muy alta: menos del 1 % queda libre entre 100 ng/mL y 10 mcg/mL de concentración plasmática.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a las proteínas del plasma es muy alta: menos del 1 % queda libre entre 100 ng/mL y 10 mcg/mL de concentración plasmática.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma protein binding of nisoldipine is very high, with less than 1% unbound over the plasma concentration range of 100 ng/mL to 10 mcg/mL',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Canal de calcio (lugar de unión de las dihidropiridinas)',
        efecto: 'Antagonista del calcio de la clase de las dihidropiridinas: inhibe la entrada de calcio a través de la membrana en el músculo liso vascular y en el músculo cardíaco.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'Antagonista del calcio de la clase de las dihidropiridinas: inhibe la entrada de calcio a través de la membrana en el músculo liso vascular y en el músculo cardíaco.',
            ref: {
              f: 'dailymed-nisoldipino',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibit the transmembrane influx of calcium into vascular smooth muscle and cardiac muscle',
              codigo: '43679-0'
            }
          },
          {
            t: 'Al inhibir el canal de calcio se dilatan las arteriolas.',
            ref: {
              f: 'dailymed-nisoldipino',
              sec: '12.1 · Mecanismo de acción',
              cita: 'inhibition of the calcium channel results in dilation of the arterioles',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su efecto sobre la presión arterial se debe sobre todo a una disminución, dependiente de la dosis, de la resistencia vascular periférica.',
            ref: {
              f: 'dailymed-nisoldipino',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The effect of nisoldipine on blood pressure is principally a consequence of a dose-related decrease of peripheral vascular resistance',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza mucho: se han identificado 5 metabolitos urinarios principales, y la vía principal parece ser la hidroxilación del éster isobutílico.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza mucho: se han identificado 5 metabolitos urinarios principales, y la vía principal parece ser la hidroxilación del éster isobutílico.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Nisoldipine is highly metabolized; 5 major urinary metabolites have been identified',
            codigo: '43682-4'
          }
        },
        {
          t: 'La vía principal de biotransformación parece ser la hidroxilación del éster isobutílico.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The major biotransformation pathway appears to be the hydroxylation of the isobutyl ester',
            codigo: '43682-4'
          }
        },
        {
          t: 'Se cree que las enzimas del citocromo P450 tienen un papel principal; la isoenzima concreta no se ha identificado.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Cytochrome P450 enzymes are believed to play a major role in the metabolism of nisoldipine',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Derivado hidroxilado de la cadena lateral',
          actividad: 'activo',
          nota: 'Parece el único metabolito activo; circula a concentraciones parecidas a las del nisoldipino y tiene alrededor del 10 % de su actividad.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'A hydroxylated derivative of the side chain, present in plasma at concentrations approximately equal to the parent compound, appears to be the only active metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Entre el 60 % y el 80 % de una dosis oral se excreta por la orina, con solo trazas de nisoldipino inalterado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Entre el 60 % y el 80 % de una dosis oral se excreta por la orina, con solo trazas de nisoldipino inalterado.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'Although 60 to 80% of an oral dose undergoes urinary excretion, only traces of unchanged nisoldipine are found in urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de 13,7 ± 4,3 horas.',
          ref: {
            f: 'dailymed-nisoldipino',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life (reflecting post absorption clearance of nisoldipine) ranges from 13.7±4.3 hours',
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
      valor: '5 (aprox.)',
      unidad: '%',
      analito: 'nisoldipino',
      ref: { f: 'dailymed-nisoldipino', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of nisoldipine is about 5%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '9,2 ± 5,1',
      unidad: 'h',
      analito: 'nisoldipino',
      ref: {
        f: 'dailymed-nisoldipino',
        sec: '12.3 · Farmacocinética',
        cita: 'Maximal plasma concentrations of nisoldipine are reached at 9.2±5.1 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Fracción libre en el plasma',
      valor: '< 1',
      unidad: '%',
      analito: 'nisoldipino',
      ref: {
        f: 'dailymed-nisoldipino',
        sec: '12.3 · Farmacocinética',
        cita: 'with less than 1% unbound over the plasma concentration range of 100 ng/mL to 10 mcg/mL',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '13,7 ± 4,3',
      unidad: 'h',
      analito: 'nisoldipino',
      ref: {
        f: 'dailymed-nisoldipino',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life (reflecting post absorption clearance of nisoldipine) ranges from 13.7±4.3 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis oral excretada por la orina',
      valor: '60-80',
      unidad: '% de la dosis',
      analito: 'nisoldipino y metabolitos',
      ref: {
        f: 'dailymed-nisoldipino',
        sec: '12.3 · Farmacocinética',
        cita: 'Although 60 to 80% of an oral dose undergoes urinary excretion',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Aumento de la concentración máxima con comida grasa',
      valor: 'hasta 245',
      unidad: '%',
      analito: 'nisoldipino',
      condiciones: 'con una comida rica en grasas',
      ref: {
        f: 'dailymed-nisoldipino',
        sec: '12.3 · Farmacocinética',
        cita: 'resulting in an increased peak concentration (C max ) of up to 245%',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-nisoldipino', 'a52b773a-44f9-442f-a4be-39f79a558bd2', 'NISOLDIPINE TABLET, FILM COATED, EXTENDED RELEASE', 'nisoldipine', '1', '2026-08-03', '2026-11-18'),
    rengPubchem(4499, 'nisoldipine', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
