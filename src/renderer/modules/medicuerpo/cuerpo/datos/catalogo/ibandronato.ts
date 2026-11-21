import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ibandronato',
    nombre: 'Ibandronato',
    clase: 'Bisfosfonato inhibidor de la resorción ósea',
    sinonimos: [ 'ibandronate sodium', 'ibandronic acid', 'Boniva' ],
    formula: 'C9H23NO7P2',
    masaMolar: 319.23,
    smiles: 'CCCCCN(C)CCC(O)(P(=O)(O)O)P(=O)(O)O',
    inchikey: 'MPBVHIBUJCELCL-UHFFFAOYSA-N',
    cid: 60852,
    iupac: '[1-hydroxy-3-[methyl(pentyl)amino]-1-phosphonopropyl]phosphonic acid',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'ibandronato-oral',
      producto: 'IBANDRONATE SODIUM · comprimido recubierto con película',
      titular: 'APOTEX CORP',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '150 mg por comprimido, según la etiqueta',
      sal: { nombre: 'Ibandronato sódico', ref: { f: 'dailymed-ibandronato', sec: '11 · Descripción', cita: 'Ibandronate sodium', codigo: '34089-3' } },
      excipientes: [
        'microcrystalline cellulose',
        'crospovidone (120 .mu.m)',
        'magnesium stearate',
        'silicon dioxide',
        'hypromellose, unspecified',
        'polyethylene glycol 8000',
        'water'
      ],
      usos: {
        t: 'Tratamiento y prevención de la osteoporosis posmenopáusica.',
        ref: {
          f: 'dailymed-ibandronato',
          sec: '1 · Indicaciones',
          cita: 'Ibandronate sodium tablet is a bisphosphonate indicated for the treatment and prevention of postmenopausal osteoporosis',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ibandronato',
      advertencias: [
        {
          titulo: 'Reacciones adversas gastrointestinales altas',
          texto: 'Como otros bisfosfonatos orales, puede irritar la mucosa digestiva alta.',
          organos: [],
          ref: {
            f: 'dailymed-ibandronato',
            sec: '5 · Advertencias y precauciones',
            cita: 'may cause local irritation of the upper gastrointestinal mucosa',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Osteonecrosis maxilar',
          texto: 'Se ha descrito osteonecrosis de la mandíbula con los bisfosfonatos, generalmente tras extracciones dentales o infecciones locales.',
          organos: [],
          ref: {
            f: 'dailymed-ibandronato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Osteonecrosis of the jaw (ONJ), which can occur spontaneously, is generally associated with tooth extraction and/or local infection with delayed healing',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Dolor musculoesquelético grave',
          texto: 'Puede aparecer dolor óseo, articular o muscular intenso; valorar suspenderlo.',
          organos: [ 'huesos', 'articulaciones', 'musculos' ],
          ref: {
            f: 'dailymed-ibandronato',
            sec: '5 · Advertencias y precauciones',
            cita: 'Severe and occasionally incapacitating bone, joint, and/or muscle pain has been reported in patients taking ibandronate sodium tablets and other bisphosphonates',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (más del 5 %): dolor de espalda, dispepsia, dolor en las extremidades, diarrea, cefalea y mialgia.',
          '34084-4',
          'The most common adverse reactions (greater than 5%) are back pain, dyspepsia, pain in extremity, diarrhea, headache, and myalgia'
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
    contiene: 'Comprimido recubierto con película: 150 mg por comprimido, según la etiqueta; el activo va como ibandronato sódico. Los excipientes no son el principio activo.',
    usos: 'Tratamiento y prevención de la osteoporosis posmenopáusica.',
    actua: 'Tiene afinidad por la hidroxiapatita del hueso; inhibe la actividad de los osteoclastos y reduce la resorción y el recambio óseo.',
    recorrido: 'La biodisponibilidad oral es muy baja (alrededor del 0,6 %) y la comida o las bebidas distintas del agua la reducen. La parte que no capta el hueso se elimina sin cambios por el riñón (50-60 % de la dosis absorbida); lo no absorbido sale sin cambios por las heces.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma en ayunas con agua.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo; se toma en ayunas con agua.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '3 · Formas y concentraciones',
            cita: 'white to off-white, oval, biconvex, film-coated tablets, engraved with',
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
      ocurre: 'La biodisponibilidad oral es muy baja (alrededor del 0,6 %) y la comida o las bebidas distintas del agua la reducen.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral es muy baja (alrededor del 0,6 %) y la comida o las bebidas distintas del agua la reducen.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean oral bioavailability of 2.5 mg ibandronate was about 0.6% compared to intravenous dosing',
            codigo: '43682-4'
          }
        },
        {
          t: 'La comida y las bebidas distintas del agua reducen la absorción.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'The extent of absorption is impaired by food or beverages (other than plain water)',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'huesos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Tras absorberse se une con rapidez al hueso o se excreta por la orina; el hueso retira del 40 al 50 % de la dosis circulante.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tras absorberse se une con rapidez al hueso o se excreta por la orina; el hueso retira del 40 al 50 % de la dosis circulante.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'After absorption, ibandronate either rapidly binds to bone or is excreted into urine',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución terminal aparente es de al menos 90 L y el hueso retira del 40 al 50 % de la dosis circulante.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'the apparent terminal volume of distribution is at least 90 L, and the amount of dose removed from the circulation via the bone is estimated to be 40% to 50% of the circulating dose',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Osteoclastos (hidroxiapatita ósea)',
        efecto: 'Tiene afinidad por la hidroxiapatita del hueso; inhibe la actividad de los osteoclastos y reduce la resorción y el recambio óseo.',
        lugar: [ 'huesos' ],
        datos: [
          {
            t: 'Tiene afinidad por la hidroxiapatita del hueso; inhibe la actividad de los osteoclastos y reduce la resorción y el recambio óseo.',
            ref: {
              f: 'dailymed-ibandronato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Ibandronate inhibits osteoclast activity and reduces bone resorption and turnover',
              codigo: '43679-0'
            }
          },
          {
            t: 'Su acción sobre el hueso se basa en su afinidad por la hidroxiapatita de la matriz mineral.',
            ref: {
              f: 'dailymed-ibandronato',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The action of ibandronate on bone tissue is based on its affinity for hydroxyapatite, which is part of the mineral matrix of bone',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'No sufre metabolismo hepático ni inhibe el citocromo P450 hepático.',
      sigue: 'Sin transformarse, sigue hacia la eliminación.',
      datos: [
        {
          t: 'No sufre metabolismo hepático ni inhibe el citocromo P450 hepático.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'Ibandronate does not undergo hepatic metabolism and does not inhibit the hepatic cytochrome P450 system',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [],
      formas: [ 'disuelto' ]
    },
    excrecion: {
      organos: [ 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La parte que no capta el hueso se elimina sin cambios por el riñón (50-60 % de la dosis absorbida); lo no absorbido sale sin cambios por las heces.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La parte que no capta el hueso se elimina sin cambios por el riñón (50-60 % de la dosis absorbida); lo no absorbido sale sin cambios por las heces.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'The portion of ibandronate that is not removed from the circulation via bone absorption is eliminated unchanged by the kidney (approximately 50% to 60% of the absorbed dose)',
            codigo: '43682-4'
          }
        },
        {
          t: 'El ibandronato no absorbido se elimina sin cambios en las heces.',
          ref: {
            f: 'dailymed-ibandronato',
            sec: '12.3 · Farmacocinética',
            cita: 'Unabsorbed ibandronate is eliminated unchanged in the feces',
            codigo: '43682-4'
          }
        }
      ],
      formas: [ 'disuelto' ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad oral (2,5 mg)',
      valor: '0,6 (aprox.)',
      unidad: '%',
      analito: 'ibandronato',
      ref: {
        f: 'dailymed-ibandronato',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean oral bioavailability of 2.5 mg ibandronate was about 0.6% compared to intravenous dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución terminal aparente',
      valor: '≥ 90',
      unidad: 'L',
      analito: 'ibandronato',
      ref: {
        f: 'dailymed-ibandronato',
        sec: '12.3 · Farmacocinética',
        cita: 'the apparent terminal volume of distribution is at least 90 L',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ibandronato', 'dd674424-b151-d7eb-3acf-b1589347f2f7', 'IBANDRONATE SODIUM TABLET, FILM COATED', 'IBANDRONATE SODIUM', '20', '2026-01-16', '2026-11-19'),
    rengPubchem(60852, 'ibandronate sodium', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
