import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'amlodipino-benazepril',
    nombre: 'Amlodipino + benazepril',
    clase: 'Combinación fija: bloqueante de canales de calcio e inhibidor de la ECA',
    sinonimos: [ 'amlodipine and benazepril', 'amlodipino y benazepril', 'Lotrel' ],
    formula: '',
    masaMolar: 0,
    smiles: '',
    inchikey: '',
    cid: 0,
    iupac: '',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'amlodipino-benazepril-oral',
      producto: 'Amlodipine and Benazepril Hydrochloride · cápsula',
      titular: 'HERITAGE PHARMACEUTICALS INC. D/B/A AVET PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '2,5/10, 5/10, 5/20, 5/40, 10/20 y 10/40 mg (amlodipino/benazepril) por cápsula, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'talc',
        'gelatin',
        'titanium dioxide',
        'fd&c blue no. 2',
        'ammonia',
        'ferrosoferric oxide',
        'propylene glycol',
        'shellac'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión en pacientes no controlados adecuadamente con uno solo de los dos fármacos.',
        ref: {
          f: 'dailymed-amlodipino-benazepril',
          sec: '1 · Indicaciones',
          cita: 'indicated for the treatment of hypertension in patients not adequately controlled on monotherapy with either agent',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-amlodipino-benazepril',
      advertencias: [
        {
          titulo: 'Toxicidad fetal',
          texto: 'Los fármacos que actúan directamente sobre el sistema renina-angiotensina pueden causar lesiones y muerte al feto en desarrollo.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: 'Advertencia destacada',
            cita: 'Drugs that act directly on the renin-angiotensin system (RAS) can cause injury and death to the developing fetus',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Angioedema',
          texto: 'La etiqueta advierte de angioedema de cabeza y cuello.',
          organos: [ 'vias-respiratorias' ],
          ref: { f: 'dailymed-amlodipino-benazepril', sec: '5 · Advertencias y precauciones', cita: 'Head and Neck Angioedema', codigo: '43685-7' }
        }
      ],
      reacciones: [
        [
          'Los motivos más frecuentes de suspensión fueron la tos y el edema.',
          '34084-4',
          'The most common reasons for discontinuation of therapy with amlodipine and benazepril hydrochloride were cough and edema'
        ],
        [
          'Se suspendió el tratamiento por reacciones adversas en el 4 % de los tratados con la combinación y en el 3 % de los tratados con placebo.',
          '34084-4',
          'Discontinuation because of adverse reactions occurred in 4% of amlodipine and benazepril hydrochloride-treated patients and 3% of placebo-treated patients'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 2,5/10, 5/10, 5/20, 5/40, 10/20 y 10/40 mg (amlodipino/benazepril) por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión en pacientes no controlados adecuadamente con uno solo de los dos fármacos.',
    actua: 'El amlodipino es un antagonista del calcio (dihidropiridina) que inhibe la entrada de calcio al músculo liso vascular y al cardiaco; el benazepril, a través de benazeprilat, inhibe la enzima convertidora de angiotensina.',
    recorrido: 'Tras la toma, el amlodipino alcanza su pico plasmático a las 6-12 horas y el benazepril a las 0,5-2 horas; el benazeprilat, entre 1,5 y 4 horas. Salen por la orina el 10 % del amlodipino sin cambios y el 60 % de sus metabolitos; el benazeprilat se elimina por los riñones y la bilis, con la vía renal como principal en función renal normal.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula: se disgrega en el tubo digestivo y la etiqueta no declara una liberación modificada.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '3 · Formas y concentraciones',
            cita: 'Amlodipine and benazepril hydrochloride capsules, USP are available as follows',
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
      ocurre: 'Tras la toma, el amlodipino alcanza su pico plasmático a las 6-12 horas y el benazepril a las 0,5-2 horas; el benazeprilat, entre 1,5 y 4 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Tras la toma, el amlodipino alcanza su pico plasmático a las 6-12 horas y el benazepril a las 0,5-2 horas; el benazeprilat, entre 1,5 y 4 horas.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Following oral administration of amlodipine and benazepril hydrochloride, peak plasma concentrations of amlodipine are reached in 6 to 12 hours',
            codigo: '34090-1'
          }
        },
        {
          t: 'La velocidad y la extensión de la absorción desde la cápsula son las mismas que con los comprimidos individuales.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'The rate and extent of absorption of benazepril and amlodipine from amlodipine and benazepril hydrochloride are the same as when administered as individual tablets',
            codigo: '34090-1'
          }
        },
        {
          t: 'El pico plasmático de benazepril se alcanza en 0,5 a 2 horas.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'the peak plasma concentrations of benazepril are reached in 0.5 to 2 hours',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El volumen de distribución aparente del amlodipino es de unos 21 L/kg y alrededor del 93 % del amlodipino circulante va unido a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución aparente del amlodipino es de unos 21 L/kg y alrededor del 93 % del amlodipino circulante va unido a proteínas del plasma.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'The apparent volume of distribution of amlodipine is about 21 L/kg. In vitro studies indicate that approximately 93% of circulating amlodipine is bound to plasma proteins in hypertensive patients',
            codigo: '34090-1'
          }
        },
        {
          t: 'El volumen de distribución aparente del benazeprilat es de unos 0,7 L/kg.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'The apparent volume of distribution of benazeprilat is about 0.7 L/kg',
            codigo: '34090-1'
          }
        }
      ],
      accion: {
        diana: 'Canales de calcio (amlodipino) y enzima convertidora de angiotensina (benazepril)',
        efecto: 'El amlodipino es un antagonista del calcio (dihidropiridina) que inhibe la entrada de calcio al músculo liso vascular y al cardiaco; el benazepril, a través de benazeprilat, inhibe la enzima convertidora de angiotensina.',
        lugar: [ 'vasos', 'corazon' ],
        datos: [
          {
            t: 'El amlodipino es un antagonista del calcio (dihidropiridina) que inhibe la entrada de calcio al músculo liso vascular y al cardiaco; el benazepril, a través de benazeprilat, inhibe la enzima convertidora de angiotensina.',
            ref: {
              f: 'dailymed-amlodipino-benazepril',
              sec: '12 · Farmacología clínica',
              cita: 'Amlodipine is a dihydropyridine calcium antagonist (calcium ion antagonist or slow channel blocker) that inhibits the transmembrane influx of calcium ions into vascular smooth muscle and cardiac muscle',
              codigo: '34090-1'
            }
          },
          {
            t: 'El benazepril y el benazeprilat inhiben la ECA en personas y animales.',
            ref: {
              f: 'dailymed-amlodipino-benazepril',
              sec: '12 · Farmacología clínica',
              cita: 'Benazepril and benazeprilat inhibit ACE in human subjects and in animals',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'El amlodipino se metaboliza ampliamente (alrededor del 90 %) en el hígado a metabolitos inactivos; el benazepril se transforma en benazeprilat por hidrólisis enzimática, sobre todo en el hígado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'El amlodipino se metaboliza ampliamente (alrededor del 90 %) en el hígado a metabolitos inactivos; el benazepril se transforma en benazeprilat por hidrólisis enzimática, sobre todo en el hígado.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Amlodipine is extensively (approximately 90%) metabolized in the liver to inactive metabolites',
            codigo: '34090-1'
          }
        },
        {
          t: 'El benazepril se metaboliza ampliamente y forma benazeprilat como metabolito principal.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Benazepril is extensively metabolized to form benazeprilat as the main metabolite, which occurs by enzymatic hydrolysis, mainly in the liver',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Benazeprilat',
          actividad: 'activo',
          nota: 'Metabolito activo del benazepril.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'The cleavage of the ester group (primarily in the liver) converts benazepril to its active metabolite, benazeprilat',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Metabolitos del amlodipino',
          actividad: 'inactivo',
          nota: 'Sin actividad.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Amlodipine is extensively (approximately 90%) metabolized in the liver to inactive metabolites',
            codigo: '34090-1'
          }
        },
        {
          nombre: 'Acilglucurónidos de benazepril y benazeprilat',
          actividad: 'desconocida',
          nota: 'Metabolitos menores; la etiqueta no indica su actividad.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Two minor metabolites are the acyl glucuronide conjugates of benazepril and benazeprilat',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Salen por la orina el 10 % del amlodipino sin cambios y el 60 % de sus metabolitos; el benazeprilat se elimina por los riñones y la bilis, con la vía renal como principal en función renal normal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Salen por la orina el 10 % del amlodipino sin cambios y el 60 % de sus metabolitos; el benazeprilat se elimina por los riñones y la bilis, con la vía renal como principal en función renal normal.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Ten percent of unchanged drug and 60% of amlodipine metabolites are excreted in urine',
            codigo: '34090-1'
          }
        },
        {
          t: 'El benazeprilat se elimina por los riñones y la bilis; la excreción renal es la vía principal con función renal normal.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'Benazeprilat is eliminated via the kidneys and the bile; renal excretion is the main route in patients with normal renal function',
            codigo: '34090-1'
          }
        },
        {
          t: 'En la orina, el benazepril supone menos del 1 % y el benazeprilat alrededor del 20 % de una dosis oral.',
          ref: {
            f: 'dailymed-amlodipino-benazepril',
            sec: '12 · Farmacología clínica',
            cita: 'In the urine, benazepril accounts for less than 1% and benazeprilat for about 20% of an oral dose',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático del amlodipino',
      valor: '6 a 12',
      unidad: 'h',
      analito: 'amlodipino',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'peak plasma concentrations of amlodipine are reached in 6 to 12 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático del benazepril',
      valor: '0,5 a 2',
      unidad: 'h',
      analito: 'benazepril',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'the peak plasma concentrations of benazepril are reached in 0.5 to 2 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del amlodipino',
      valor: '64 a 90',
      unidad: '%',
      analito: 'amlodipino',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'Absolute bioavailability has been calculated as between 64% and 90%',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución del amlodipino',
      valor: '21 (aprox.)',
      unidad: 'L/kg',
      analito: 'amlodipino',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent volume of distribution of amlodipine is about 21 L/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución del benazeprilat',
      valor: '0,7 (aprox.)',
      unidad: 'L/kg',
      analito: 'benazeprilat',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'The apparent volume of distribution of benazeprilat is about 0.7 L/kg',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma del amlodipino',
      valor: '93 (aprox.)',
      unidad: '%',
      analito: 'amlodipino',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'approximately 93% of circulating amlodipine is bound to plasma proteins in hypertensive patients',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal de eliminación del amlodipino',
      valor: '30 a 50 (aprox.)',
      unidad: 'h',
      analito: 'amlodipino',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'Amlodipine elimination from plasma is biphasic with a terminal elimination half-life of approximately 30 to 50 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal del benazeprilat',
      valor: '22 (aprox.)',
      unidad: 'h',
      analito: 'benazeprilat',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'Elimination of benazeprilat is biphasic with an initial half-life of about 3 hours and a terminal half-life of about 22 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Benazeprilat en la orina',
      valor: '20 (aprox.)',
      unidad: '% de la dosis',
      analito: 'benazeprilat',
      ref: {
        f: 'dailymed-amlodipino-benazepril',
        sec: '12 · Farmacología clínica',
        cita: 'In the urine, benazepril accounts for less than 1% and benazeprilat for about 20% of an oral dose',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-amlodipino-benazepril', '27b0c628-820a-48bf-a411-86c0ebd4cc8d', 'AMLODIPINE AND BENAZEPRIL HYDROCHLORIDE CAPSULE', 'Amlodipine and Benazepril Hydrochloride', '7', '2026-10-15', '2026-11-15')
  ],
  estado: 'completa',
  combinacion: { componentes: [ { activoId: 'amlodipino' }, { activoId: 'benazepril' } ] }
} satisfies RengFichaFarmaco
