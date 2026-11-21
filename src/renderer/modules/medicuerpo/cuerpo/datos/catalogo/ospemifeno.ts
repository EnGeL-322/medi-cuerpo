import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'ospemifeno',
    nombre: 'Ospemifeno',
    clase: 'Agonista/antagonista de los receptores de estrógenos con efectos selectivos de tejido',
    sinonimos: [ 'ospemifene', 'Osphena' ],
    formula: 'C24H23ClO2',
    masaMolar: 378.9,
    smiles: 'C1=CC=C(C=C1)/C(=C(/C2=CC=CC=C2)\\C3=CC=C(C=C3)OCCO)/CCCl',
    inchikey: 'LUMKNAVTFCDUIE-VHXPQNKSSA-N',
    cid: 3036505,
    iupac: '2-[4-[(Z)-4-chloro-1,2-diphenylbut-1-enyl]phenoxy]ethanol',
    area: 'Aparato digestivo'
  },
  presentaciones: [
    {
      id: 'ospemifeno-oral',
      producto: 'Osphena · comprimido recubierto con película',
      titular: 'DUCHESNAY USA, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '60 mg por comprimido, según la etiqueta',
      excipientes: [
        'silicon dioxide',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'mannitol',
        'microcrystalline cellulose',
        'polyethylene glycol, unspecified',
        'povidone, unspecified',
        'titanium dioxide',
        'triacetin',
        'starch, corn',
        'sodium starch glycolate type a potato'
      ],
      usos: {
        t: 'Tratamiento de la dispareunia y de la sequedad vaginal moderadas o graves por atrofia vulvovaginal de la menopausia.',
        ref: {
          f: 'dailymed-ospemifeno',
          sec: '1 · Indicaciones',
          cita: 'The treatment of moderate to severe dyspareunia, a symptom of vulvar and vaginal atrophy, due to menopause',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-ospemifeno',
      advertencias: [
        {
          titulo: 'Cáncer de endometrio',
          texto: 'En el endometrio tiene efectos agonistas estrogénicos; en una mujer con útero que usa estrógenos sin oposición aumenta el riesgo de cáncer de endometrio.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-ospemifeno',
            sec: 'Advertencia destacada',
            cita: 'There is an increased risk of endometrial cancer in a woman with a uterus who uses unopposed estrogens',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Ictus y trombosis venosa profunda',
          texto: 'El tratamiento con estrógenos solos aumenta el riesgo de ictus y de trombosis venosa profunda.',
          organos: [],
          ref: {
            f: 'dailymed-ospemifeno',
            sec: 'Advertencia destacada',
            cita: 'Estrogen-alone therapy has an increased risk of stroke and deep vein thrombosis (DVT)',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (1 % o más): sofocos, flujo vaginal, espasmos musculares, cefalea, hiperhidrosis, sangrado vaginal y sudores nocturnos.',
          '34084-4',
          'most common adverse reactions (≥1 percent) with OSPHENA are: hot flush, vaginal discharge, muscle spasms, headache, hyperhidrosis, vaginal hemorrhage, night sweats'
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
    contiene: 'Comprimido recubierto con película: 60 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la dispareunia y de la sequedad vaginal moderadas o graves por atrofia vulvovaginal de la menopausia.',
    actua: 'Agonista/antagonista de los receptores de estrógenos con efectos selectivos de tejido: activa las vías estrogénicas en unos tejidos y las bloquea en otros.',
    recorrido: 'En ayunas el pico sérico se alcanza hacia las 2 horas; los alimentos aumentan la biodisponibilidad unas 2 a 3 veces y se debe tomar con comida. Alrededor del 75 % de la dosis se excreta en las heces y el 7 % en la orina; menos del 0,2 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '3 · Formas y concentraciones',
            cita: 'OSPHENA tablets are white to off-white, oval, biconvex, film coated tablets containing 60 mg of ospemifene',
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
      ocurre: 'En ayunas el pico sérico se alcanza hacia las 2 horas; los alimentos aumentan la biodisponibilidad unas 2 a 3 veces y se debe tomar con comida.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'En ayunas el pico sérico se alcanza hacia las 2 horas; los alimentos aumentan la biodisponibilidad unas 2 a 3 veces y se debe tomar con comida.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'peak median serum concentration was reached at approximately 2 hours (range: 1 to 8 hours) post-dose',
            codigo: '43682-4'
          }
        },
        {
          t: 'En general, los alimentos aumentaron la biodisponibilidad unas 2 a 3 veces.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'In general, food increased the bioavailability of ospemifene by approximately 2-3 fold',
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
      ocurre: 'Se une en más del 99 % a las proteínas séricas; el volumen de distribución aparente es de 448 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en más del 99 % a las proteínas séricas; el volumen de distribución aparente es de 448 L.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'OSPHENA is highly (>99 percent) bound to serum proteins',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 448 L.',
          ref: { f: 'dailymed-ospemifeno', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 448 L', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Receptores de estrógenos',
        efecto: 'Agonista/antagonista de los receptores de estrógenos con efectos selectivos de tejido: activa las vías estrogénicas en unos tejidos y las bloquea en otros.',
        lugar: [],
        datos: [
          {
            t: 'Agonista/antagonista de los receptores de estrógenos con efectos selectivos de tejido: activa las vías estrogénicas en unos tejidos y las bloquea en otros.',
            ref: {
              f: 'dailymed-ospemifeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Its biological actions are mediated through binding to estrogen receptors',
              codigo: '43679-0'
            }
          },
          {
            t: 'La unión activa las vías estrogénicas en algunos tejidos y las bloquea en otros.',
            ref: {
              f: 'dailymed-ospemifeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'This binding results in activation of estrogenic pathways in some tissues (agonism) and blockade of estrogenic pathways in others (antagonism)',
              codigo: '43679-0'
            },
            poblacion: 'tejidos'
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'En microsomas hepáticos humanos se metaboliza sobre todo por la CYP3A4, la CYP2C9 y la CYP2C19; el metabolito principal es el 4-hidroxiospemifeno.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'En microsomas hepáticos humanos se metaboliza sobre todo por la CYP3A4, la CYP2C9 y la CYP2C19; el metabolito principal es el 4-hidroxiospemifeno.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro experiments with human liver microsomes indicated that ospemifene primarily undergoes metabolism via CYP3A4, CYP2C9, and CYP2C19',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: '4-Hidroxiospemifeno',
          actividad: 'desconocida',
          nota: 'Metabolito principal; la etiqueta no precisa su actividad en esta sección.',
          ref: { f: 'dailymed-ospemifeno', sec: '12.3 · Farmacocinética', cita: 'The major metabolite was 4-hydroxyospemifene', codigo: '43682-4' }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 75 % de la dosis se excreta en las heces y el 7 % en la orina; menos del 0,2 % sale sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 75 % de la dosis se excreta en las heces y el 7 % en la orina; menos del 0,2 % sale sin cambios por la orina.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'approximately 75% and 7% of the dose were excreted in feces and urine, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal aparente en mujeres posmenopáusicas es de unas 26 horas.',
          ref: {
            f: 'dailymed-ospemifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent terminal half-life of ospemifene in postmenopausal women is approximately 26 hours',
            codigo: '43682-4'
          },
          poblacion: 'mujeres posmenopáusicas'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Mediana del tiempo hasta el pico en ayunas',
      valor: '2 (aprox.)',
      unidad: 'h',
      analito: 'ospemifeno',
      poblacion: 'mujeres posmenopáusicas',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-ospemifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'peak median serum concentration was reached at approximately 2 hours (range: 1 to 8 hours) post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas séricas',
      valor: '> 99',
      unidad: '%',
      analito: 'ospemifeno',
      ref: { f: 'dailymed-ospemifeno', sec: '12.3 · Farmacocinética', cita: 'OSPHENA is highly (>99 percent) bound to serum proteins', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '448',
      unidad: 'L',
      analito: 'ospemifeno',
      ref: { f: 'dailymed-ospemifeno', sec: '12.3 · Farmacocinética', cita: 'The apparent volume of distribution is 448 L', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal aparente',
      valor: '26 (aprox.)',
      unidad: 'h',
      analito: 'ospemifeno',
      poblacion: 'mujeres posmenopáusicas',
      ref: {
        f: 'dailymed-ospemifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent terminal half-life of ospemifene in postmenopausal women is approximately 26 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Dosis excretada en las heces',
      valor: '75 (aprox.)',
      unidad: '% de la dosis',
      analito: 'ospemifeno y metabolitos',
      ref: {
        f: 'dailymed-ospemifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'approximately 75% and 7% of the dose were excreted in feces and urine, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ospemifeno', '9accbcc9-78ee-4f84-9b7e-704f2ab1c413', 'OSPHENA (OSPEMIFENE) TABLET, FILM COATED', 'Osphena', '4', '2025-02-17', '2026-11-19'),
    rengPubchem(3036505, 'ospemifene', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
