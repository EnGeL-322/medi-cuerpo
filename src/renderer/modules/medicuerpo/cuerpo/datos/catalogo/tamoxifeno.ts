import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'tamoxifeno',
    nombre: 'Tamoxifeno',
    clase: 'Antiestrógeno no esteroideo',
    sinonimos: [ 'tamoxifen' ],
    formula: 'C26H29NO',
    masaMolar: 371.5,
    smiles: 'CC/C(=C(\\C1=CC=CC=C1)/C2=CC=C(C=C2)OCCN(C)C)/C3=CC=CC=C3',
    inchikey: 'NKANXQFJJICGDU-QPLCGJKRSA-N',
    cid: 2733526,
    iupac: '2-[4-[(Z)-1,2-diphenylbut-1-enyl]phenoxy]-N,N-dimethylethanamine',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'tamoxifeno-oral',
      producto: 'Tamoxifen Citrate · comprimido recubierto con película',
      titular: "DR. REDDY'S LABRATORIES INC.",
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg o 20 mg de tamoxifeno por comprimido (equivalentes a 15,2 mg o 30,4 mg de citrato de tamoxifeno)',
      sal: {
        nombre: 'Citrato de tamoxifeno',
        ref: {
          f: 'dailymed-tamoxifeno',
          sec: '11 · Descripción',
          cita: 'equivalent to 15.2 mg or 30.4 mg, respectively, of tamoxifen citrate',
          codigo: '34089-3'
        }
      },
      excipientes: [
        'croscarmellose sodium',
        'lactose monohydrate',
        'magnesium stearate',
        'hypromellose 2910 (5 mpa.s)',
        'polyethylene glycol 400',
        'povidone k30',
        'starch, corn',
        'titanium dioxide'
      ],
      usos: {
        t: 'Cáncer de mama metastásico en mujeres y hombres, tratamiento complementario del cáncer de mama y reducción del riesgo en mujeres de alto riesgo, entre otros usos de la etiqueta.',
        ref: {
          f: 'dailymed-tamoxifeno',
          sec: '1 · Indicaciones',
          cita: 'Tamoxifen citrate tablets are effective in the treatment of metastatic breast cancer in women and men',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-tamoxifeno',
      advertencias: [
        {
          titulo: 'Cáncer de útero, ictus y embolia pulmonar',
          texto: 'En la reducción del riesgo (mujeres de alto riesgo y carcinoma ductal in situ) se han asociado tumores malignos del útero, ictus y embolia pulmonar, graves y potencialmente mortales.',
          organos: [ 'organos-reproductores', 'encefalo', 'pulmones' ],
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: 'Advertencia destacada',
            cita: 'include uterine malignancies, stroke and pulmonary embolism',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hipercalcemia',
          texto: 'Con metástasis óseas puede aparecer hipercalcemia en las primeras semanas.',
          organos: [ 'huesos' ],
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: 'Advertencias',
            cita: 'hypercalcemia has been reported in some breast cancer patients with bone metastases',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Sofocos: la reacción adversa más frecuente en el cáncer de mama metastásico.',
          '34084-4',
          'the most frequent adverse reaction to tamoxifen is hot flashes'
        ],
        [
          'Con menos frecuencia: hipercalcemia, edema periférico, rechazo de la comida, picor vulvar, depresión, mareo, dolor de cabeza, pérdida de pelo y sequedad vaginal.',
          '34084-4',
          'hypercalcemia, peripheral edema, distaste for food, pruritus vulvae, depression, dizziness'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 10 mg o 20 mg de tamoxifeno por comprimido (equivalentes a 15,2 mg o 30,4 mg de citrato de tamoxifeno). Los excipientes no son el principio activo.',
    usos: 'Cáncer de mama metastásico en mujeres y hombres, tratamiento complementario del cáncer de mama y reducción del riesgo en mujeres de alto riesgo, entre otros usos de la etiqueta.',
    actua: 'Tiene potentes efectos antiestrogénicos: compite con el estrógeno por sus lugares de unión en tejidos como la mama.',
    recorrido: 'Tras una dosis de 20 mg, el pico medio en el plasma, de 40 ng/mL, llegó hacia las 5 horas. En 2 semanas se excretó alrededor del 65 % de la dosis, sobre todo por las heces y como conjugados polares.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película para tomar por boca.',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '11 · Descripción',
            cita: 'Tamoxifen citrate tablets USP, a nonsteroidal antiestrogen, are for oral administration',
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
      ocurre: 'Tras una dosis de 20 mg, el pico medio en el plasma, de 40 ng/mL, llegó hacia las 5 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras una dosis de 20 mg, el pico medio en el plasma, de 40 ng/mL, llegó hacia las 5 horas.',
          ref: { f: 'dailymed-tamoxifeno', sec: '12 · Farmacología clínica', cita: 'occurred approximately 5 hours after dosing', codigo: '34090-1' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'mama' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Llega a la sangre (pico medio de 40 ng/mL con 20 mg). Su concentración baja en dos fases, con una semivida terminal de 5 a 7 días; el equilibrio se alcanza en unas 4 semanas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Llega a la sangre (pico medio de 40 ng/mL con 20 mg). Su concentración baja en dos fases, con una semivida terminal de 5 a 7 días; el equilibrio se alcanza en unas 4 semanas.',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '12 · Farmacología clínica',
            cita: 'The decline in plasma concentrations of tamoxifen is biphasic',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Receptor de estrógenos',
        efecto: 'Tiene potentes efectos antiestrogénicos: compite con el estrógeno por sus lugares de unión en tejidos como la mama.',
        lugar: [ 'mama' ],
        datos: [
          {
            t: 'Tiene potentes efectos antiestrogénicos: compite con el estrógeno por sus lugares de unión en tejidos como la mama.',
            ref: {
              f: 'dailymed-tamoxifeno',
              sec: '12 · Farmacología clínica',
              cita: 'The antiestrogenic effects may be related to its ability to compete with estrogen for binding sites in target tissues such as breast',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente. Su metabolito principal en el plasma, el N-desmetiltamoxifeno, tiene una actividad biológica parecida; el 4-hidroxitamoxifeno es un metabolito menor.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente. Su metabolito principal en el plasma, el N-desmetiltamoxifeno, tiene una actividad biológica parecida; el 4-hidroxitamoxifeno es un metabolito menor.',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '12 · Farmacología clínica',
            cita: 'Tamoxifen is extensively metabolized after oral administration',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'N-desmetiltamoxifeno',
          actividad: 'activo',
          nota: 'Metabolito principal en el plasma; semivida de unos 14 días.',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '12 · Farmacología clínica',
            cita: 'The biological activity of N-desmethyl tamoxifen appears to be similar to that of tamoxifen',
            codigo: '34090-1'
          }
        },
        {
          nombre: '4-hidroxitamoxifeno',
          actividad: 'desconocida',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '12 · Farmacología clínica',
            cita: '4-Hydroxytamoxifen and a side chain primary alcohol derivative of tamoxifen have been identified as minor metabolites',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'En 2 semanas se excretó alrededor del 65 % de la dosis, sobre todo por las heces y como conjugados polares.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'En 2 semanas se excretó alrededor del 65 % de la dosis, sobre todo por las heces y como conjugados polares.',
          ref: {
            f: 'dailymed-tamoxifeno',
            sec: '12 · Farmacología clínica',
            cita: 'approximately 65% of the administered dose was excreted from the body over a period of 2 weeks with fecal excretion as the primary route of elimination',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima media',
      valor: '40 (35-45)',
      unidad: 'ng/mL',
      analito: 'tamoxifeno',
      condiciones: 'dosis única de 20 mg',
      ref: {
        f: 'dailymed-tamoxifeno',
        sec: '12 · Farmacología clínica',
        cita: 'an average peak plasma concentration of 40 ng/mL (range 35 to 45 ng/mL)',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '5 (aprox.)',
      unidad: 'h',
      analito: 'tamoxifeno',
      condiciones: 'dosis única de 20 mg',
      ref: { f: 'dailymed-tamoxifeno', sec: '12 · Farmacología clínica', cita: 'occurred approximately 5 hours after dosing', codigo: '34090-1' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '5-7',
      unidad: 'días',
      analito: 'tamoxifeno',
      ref: {
        f: 'dailymed-tamoxifeno',
        sec: '12 · Farmacología clínica',
        cita: 'with a terminal elimination half-life of about 5 to 7 days',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración plasmática máxima media',
      valor: '15 (10-20)',
      unidad: 'ng/mL',
      analito: 'N-desmetiltamoxifeno (metabolito activo)',
      ref: {
        f: 'dailymed-tamoxifeno',
        sec: '12 · Farmacología clínica',
        cita: 'The average peak plasma concentration of N-desmethyl tamoxifen is 15 ng/mL',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida estimada',
      valor: '14 (aprox.)',
      unidad: 'días',
      analito: 'N-desmetiltamoxifeno (metabolito activo)',
      ref: {
        f: 'dailymed-tamoxifeno',
        sec: '12 · Farmacología clínica',
        cita: 'suggesting a half-life of approximately 14 days for this metabolite',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-tamoxifeno', 'c6c6a643-57d6-7ea5-7da0-e8a66802468a', 'TAMOXIFEN CITRATE TABLET, FILM COATED', 'Tamoxifen Citrate', '1', '2024-08-23', '2026-11-12'),
    rengPubchem(2733526, 'tamoxifen', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
