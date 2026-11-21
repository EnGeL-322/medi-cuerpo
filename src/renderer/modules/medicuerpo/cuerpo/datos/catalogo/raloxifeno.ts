import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'raloxifeno',
    nombre: 'Raloxifeno',
    clase: 'Modulador selectivo de los receptores de estrógenos',
    sinonimos: [ 'raloxifene', 'Evista' ],
    formula: 'C28H27NO4S',
    masaMolar: 473.6,
    smiles: 'C1CCN(CC1)CCOC2=CC=C(C=C2)C(=O)C3=C(SC4=C3C=CC(=C4)O)C5=CC=C(C=C5)O',
    inchikey: 'GZUITABIAKMVPG-UHFFFAOYSA-N',
    cid: 5035,
    iupac: '[6-hydroxy-2-(4-hydroxyphenyl)-1-benzothiophen-3-yl]-[4-(2-piperidin-1-ylethoxy)phenyl]methanone',
    area: 'Huesos y articulaciones'
  },
  presentaciones: [
    {
      id: 'raloxifeno-oral',
      producto: 'Evista · comprimido',
      titular: 'ELI LILLY AND COMPANY',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '60 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de raloxifeno',
        ref: { f: 'dailymed-raloxifeno', sec: '11 · Descripción', cita: 'raloxifene hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'povidone, unspecified',
        'polysorbate 80',
        'anhydrous lactose',
        'lactose monohydrate',
        'crospovidone, unspecified',
        'magnesium stearate',
        'hypromellose, unspecified',
        'titanium dioxide',
        'polyethylene glycol 400',
        'carnauba wax',
        'propylene glycol',
        'indigotindisulfonate sodium',
        'butyl alcohol',
        'isopropyl alcohol'
      ],
      usos: {
        t: 'Tratamiento y prevención de la osteoporosis posmenopáusica y reducción del riesgo de cáncer de mama invasivo en mujeres posmenopáusicas.',
        ref: {
          f: 'dailymed-raloxifeno',
          sec: '1 · Indicaciones',
          cita: 'Treatment and prevention of osteoporosis in postmenopausal women',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-raloxifeno',
      advertencias: [
        {
          titulo: 'Tromboembolia venosa y muerte por ictus',
          texto: 'Aumenta el riesgo de trombosis venosa profunda y embolia pulmonar; las mujeres con antecedentes de tromboembolia no deben tomarlo.',
          organos: [ 'vasos', 'pulmones' ],
          ref: {
            f: 'dailymed-raloxifeno',
            sec: 'Advertencia destacada',
            cita: 'Increased risk of deep vein thrombosis and pulmonary embolism have been reported with EVISTA',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Muerte por ictus',
          texto: 'En mujeres con enfermedad coronaria o con riesgo aumentado se observó más riesgo de morir por ictus.',
          organos: [ 'encefalo' ],
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '5 · Advertencias y precauciones',
            cita: 'Increased risk of death due to stroke occurred in a trial in postmenopausal women with documented coronary heart disease',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Relacionadas con el tratamiento: sofocos y calambres en las piernas; los sofocos aparecieron en una de cada diez pacientes.',
          '34084-4',
          'reactions considered to be related to EVISTA therapy were hot flashes and leg cramps'
        ],
        [
          'La más grave fue la tromboembolia venosa, en cerca de 1 de cada 100 pacientes tratadas.',
          '34084-4',
          'The most serious adverse reaction related to EVISTA was VTE'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 60 mg por comprimido, según la etiqueta; el activo va como clorhidrato de raloxifeno. Los excipientes no son el principio activo.',
    usos: 'Tratamiento y prevención de la osteoporosis posmenopáusica y reducción del riesgo de cáncer de mama invasivo en mujeres posmenopáusicas.',
    actua: 'Se une a los receptores de estrógenos y activa las vías estrogénicas en algunos tejidos (agonista) y las bloquea en otros (antagonista), según los coactivadores y correpresores que recluta.',
    recorrido: 'Se absorbe rápido: cerca del 60 % de la dosis, pero la conjugación presistémica con glucurónido es extensa y la biodisponibilidad absoluta es del 2 %. Se puede tomar sin tener en cuenta las comidas. Se excreta sobre todo por las heces; menos del 0,2 % sale sin cambios por la orina y menos del 6 % como glucurónidos. La semivida plasmática es de 27,7 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido blanco elíptico de 60 mg, recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido blanco elíptico de 60 mg, recubierto con película.',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '3 · Formas y concentraciones',
            cita: '60 mg, white, elliptical, film-coated tablets (not scored)',
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
      ocurre: 'Se absorbe rápido: cerca del 60 % de la dosis, pero la conjugación presistémica con glucurónido es extensa y la biodisponibilidad absoluta es del 2 %. Se puede tomar sin tener en cuenta las comidas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido: cerca del 60 % de la dosis, pero la conjugación presistémica con glucurónido es extensa y la biodisponibilidad absoluta es del 2 %. Se puede tomar sin tener en cuenta las comidas.',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 60% of an oral dose is absorbed, but presystemic glucuronide conjugation is extensive',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad absoluta del raloxifeno es del 2 %.',
          ref: { f: 'dailymed-raloxifeno', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability of raloxifene is 2%', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El raloxifeno y sus conjugados monoglucurónidos se unen en un 95 % a proteínas del plasma, a albúmina y a la glucoproteína ácida α1 pero no a la globulina fijadora de hormonas sexuales.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El raloxifeno y sus conjugados monoglucurónidos se unen en un 95 % a proteínas del plasma, a albúmina y a la glucoproteína ácida α1 pero no a la globulina fijadora de hormonas sexuales.',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Raloxifene and the monoglucuronide conjugates are highly (95%) bound to plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptores de estrógenos',
        efecto: 'Se une a los receptores de estrógenos y activa las vías estrogénicas en algunos tejidos (agonista) y las bloquea en otros (antagonista), según los coactivadores y correpresores que recluta.',
        lugar: [ 'huesos', 'mama' ],
        datos: [
          {
            t: 'Se une a los receptores de estrógenos y activa las vías estrogénicas en algunos tejidos (agonista) y las bloquea en otros (antagonista), según los coactivadores y correpresores que recluta.',
            ref: {
              f: 'dailymed-raloxifeno',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Raloxifene is an estrogen agonist/antagonist, commonly referred to as a selective estrogen receptor modulator (SERM)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'intestino-delgado', 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre un extenso primer paso hasta conjugados glucurónidos; no se detectaron otros metabolitos, lo que indica que no lo metaboliza el citocromo P450. Se interconvierte con sus glucurónidos y circula por la bilis (ciclo enterohepático).',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre un extenso primer paso hasta conjugados glucurónidos; no se detectaron otros metabolitos, lo que indica que no lo metaboliza el citocromo P450. Se interconvierte con sus glucurónidos y circula por la bilis (ciclo enterohepático).',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Raloxifene undergoes extensive first-pass metabolism to the glucuronide conjugates',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Glucurónidos (4′, 6 y 4′,6-diglucurónido)',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Raloxifene undergoes extensive first-pass metabolism to the glucuronide conjugates: raloxifene-4′-glucuronide, raloxifene-6-glucuronide, and raloxifene-6, 4′-diglucuronide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta sobre todo por las heces; menos del 0,2 % sale sin cambios por la orina y menos del 6 % como glucurónidos. La semivida plasmática es de 27,7 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta sobre todo por las heces; menos del 0,2 % sale sin cambios por la orina y menos del 6 % como glucurónidos. La semivida plasmática es de 27,7 horas.',
          ref: {
            f: 'dailymed-raloxifeno',
            sec: '12.3 · Farmacocinética',
            cita: 'Raloxifene is primarily excreted in feces, and less than 0.2% is excreted unchanged in urine',
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
      valor: '2',
      unidad: '%',
      analito: 'raloxifeno',
      ref: { f: 'dailymed-raloxifeno', sec: '12.3 · Farmacocinética', cita: 'Absolute bioavailability of raloxifene is 2%', codigo: '43682-4' }
    },
    {
      magnitud: 'comida',
      nombre: 'Aumento de la Cmax con comida rica en grasa',
      valor: '28',
      unidad: '%',
      analito: 'raloxifeno',
      condiciones: 'comida estándar rica en grasa',
      ref: {
        f: 'dailymed-raloxifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'increases the absorption of raloxifene (C max 28% and AUC 16%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '95',
      unidad: '%',
      analito: 'raloxifeno y monoglucurónidos',
      ref: {
        f: 'dailymed-raloxifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'Raloxifene and the monoglucuronide conjugates are highly (95%) bound to plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida plasmática de eliminación',
      valor: '27,7',
      unidad: 'h',
      analito: 'raloxifeno',
      ref: {
        f: 'dailymed-raloxifeno',
        sec: '12.3 · Farmacocinética',
        cita: 'prolonging its plasma elimination half-life to 27.7 hours after oral dosing',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Vía principal de excreción',
      valor: 'principal',
      unidad: '—',
      analito: 'raloxifeno',
      ref: { f: 'dailymed-raloxifeno', sec: '12.3 · Farmacocinética', cita: 'Raloxifene is primarily excreted in feces', codigo: '43682-4' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '< 0,2',
      unidad: '% de la dosis',
      analito: 'raloxifeno',
      ref: { f: 'dailymed-raloxifeno', sec: '12.3 · Farmacocinética', cita: 'less than 0.2% is excreted unchanged in urine', codigo: '43682-4' }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-raloxifeno', 'fcaaa6dc-74e8-4fb8-800c-5574bf0f8de9', 'EVISTA (RALOXIFENE HYDROCHLORIDE) TABLET', 'Evista', '32', '2026-09-02', '2026-11-12'),
    rengPubchem(5035, 'raloxifene', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
