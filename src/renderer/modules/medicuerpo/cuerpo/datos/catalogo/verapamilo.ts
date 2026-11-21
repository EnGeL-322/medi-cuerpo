import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'verapamilo',
    nombre: 'Verapamilo',
    clase: 'Antagonista del calcio (fenilalquilamina)',
    sinonimos: [ 'verapamil', 'Calan' ],
    formula: 'C27H38N2O4',
    masaMolar: 454.6,
    smiles: 'CC(C)C(CCCN(C)CCC1=CC(=C(C=C1)OC)OC)(C#N)C2=CC(=C(C=C2)OC)OC',
    inchikey: 'SGTNSNPWRIOYBX-UHFFFAOYSA-N',
    cid: 2520,
    iupac: '2-(3,4-dimethoxyphenyl)-5-[2-(3,4-dimethoxyphenyl)ethyl-methylamino]-2-propan-2-ylpentanenitrile',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'verapamilo-oral',
      producto: 'VERAPAMIL HYDROCHLORIDE · comprimido',
      titular: 'CHARTWELL RX, LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '40 mg, 80 mg o 120 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de verapamilo',
        ref: { f: 'dailymed-verapamilo', sec: '11 · Descripción', cita: 'Verapamil hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'silicon dioxide',
        'dibasic calcium phosphate dihydrate',
        'microcrystalline cellulose',
        'sodium starch glycolate type a potato',
        'magnesium stearate',
        'mineral oil',
        'sodium lauryl sulfate',
        'titanium dioxide',
        'hypromellose 2910 (6 mpa.s)'
      ],
      usos: {
        t: 'Angina de pecho (de reposo, inestable y estable crónica), algunas arritmias e hipertensión esencial.',
        ref: { f: 'dailymed-verapamilo', sec: '1 · Indicaciones', cita: "Vasospastic (Prinzmetal's variant) angina", codigo: '34067-9' }
      },
      fuente: 'dailymed-verapamilo',
      advertencias: [
        {
          titulo: 'Insuficiencia cardiaca',
          texto: 'Tiene un efecto inotrópico negativo; en la experiencia clínica, el 1,8 % de 4954 pacientes desarrolló insuficiencia cardiaca congestiva o edema pulmonar.',
          organos: [ 'corazon', 'pulmones' ],
          ref: {
            f: 'dailymed-verapamilo',
            sec: 'Advertencias',
            cita: 'In clinical experience with 4,954 patients, 87 (1.8%) developed congestive heart failure or pulmonary edema',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Las reacciones graves son poco frecuentes si se empieza con dosis crecientes.',
          '34084-4',
          'Serious adverse reactions are uncommon when verapamil hydrochloride therapy is initiated with upward dose titration'
        ],
        [
          'Se ha descrito con poca frecuencia íleo paralítico no obstructivo, reversible al suspenderlo.',
          '34084-4',
          'non-obstructive, paralytic ileus has been infrequently reported'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 40 mg, 80 mg o 120 mg por comprimido, según la etiqueta; el activo va como clorhidrato de verapamilo. Los excipientes no son el principio activo.',
    usos: 'Angina de pecho (de reposo, inestable y estable crónica), algunas arritmias e hipertensión esencial.',
    actua: 'Inhibe la entrada de calcio en el músculo liso de las arterias y en las células del corazón: dilata las coronarias, reduce el consumo de oxígeno del corazón y alarga el periodo refractario del nodo auriculoventricular.',
    recorrido: 'Se absorbe más del 90 % de la dosis, pero su rápida transformación en el primer paso por la circulación portal deja una biodisponibilidad del 20 % al 35 %; el pico llega en 1 a 2 horas. Alrededor del 70 % sale como metabolitos por la orina y el 16 % o más por las heces en 5 días; del 3 % al 4 % sale sin cambios por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película para tomar por boca.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película para tomar por boca.',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '11 · Descripción',
            cita: 'available for oral administration in film-coated tablets containing 40 mg, 80 mg or 120 mg',
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
      ocurre: 'Se absorbe más del 90 % de la dosis, pero su rápida transformación en el primer paso por la circulación portal deja una biodisponibilidad del 20 % al 35 %; el pico llega en 1 a 2 horas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe más del 90 % de la dosis, pero su rápida transformación en el primer paso por la circulación portal deja una biodisponibilidad del 20 % al 35 %; el pico llega en 1 a 2 horas.',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '12 · Farmacología clínica',
            cita: 'More than 90% of the orally administered dose of Verapamil hydrochloride is absorbed',
            codigo: '34090-1'
          }
        },
        {
          t: 'Biodisponibilidad del 20 % al 35 % por el primer paso.',
          ref: { f: 'dailymed-verapamilo', sec: '12 · Farmacología clínica', cita: 'bioavailability ranges from 20% to 35%', codigo: '34090-1' }
        },
        {
          t: 'Pico plasmático entre 1 y 2 horas.',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '12 · Farmacología clínica',
            cita: 'Peak plasma concentrations are reached between 1 and 2 hours after oral administration',
            codigo: '34090-1'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'corazon' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Alrededor del 90 % circula unido a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Alrededor del 90 % circula unido a proteínas del plasma.',
          ref: { f: 'dailymed-verapamilo', sec: '12 · Farmacología clínica', cita: 'Approximately 90% is bound to plasma proteins', codigo: '34090-1' }
        }
      ],
      accion: {
        diana: 'Canales de calcio lentos',
        efecto: 'Inhibe la entrada de calcio en el músculo liso de las arterias y en las células del corazón: dilata las coronarias, reduce el consumo de oxígeno del corazón y alarga el periodo refractario del nodo auriculoventricular.',
        lugar: [ 'corazon', 'vasos' ],
        datos: [
          {
            t: 'Inhibe la entrada de calcio en el músculo liso de las arterias y en las células del corazón: dilata las coronarias, reduce el consumo de oxígeno del corazón y alarga el periodo refractario del nodo auriculoventricular.',
            ref: {
              f: 'dailymed-verapamilo',
              sec: '12 · Farmacología clínica',
              cita: 'exerts its pharmacologic effects by modulating the influx of ionic calcium across the cell membrane of the arterial smooth muscle',
              codigo: '34090-1'
            }
          },
          {
            t: 'Alarga el periodo refractario del nodo AV y enlentece la conducción.',
            ref: {
              f: 'dailymed-verapamilo',
              sec: '12 · Farmacología clínica',
              cita: 'prolongs the effective refractory period within the AV node and slows AV conduction',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se transforma en el hígado en varios metabolitos; solo la norverapamilo llega a concentraciones parecidas a las del verapamilo, con un 20 % de su actividad cardiovascular.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se transforma en el hígado en varios metabolitos; solo la norverapamilo llega a concentraciones parecidas a las del verapamilo, con un 20 % de su actividad cardiovascular.',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '12 · Farmacología clínica',
            cita: 'all except norverapamil are present in trace amounts only',
            codigo: '34090-1'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Norverapamilo',
          actividad: 'activo',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '12 · Farmacología clínica',
            cita: 'The cardiovascular activity of norverapamil appears to be approximately 20% that of verapamil',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 70 % sale como metabolitos por la orina y el 16 % o más por las heces en 5 días; del 3 % al 4 % sale sin cambios por la orina.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 70 % sale como metabolitos por la orina y el 16 % o más por las heces en 5 días; del 3 % al 4 % sale sin cambios por la orina.',
          ref: {
            f: 'dailymed-verapamilo',
            sec: '12 · Farmacología clínica',
            cita: 'excreted as metabolites in the urine and 16% or more in the feces within 5 days',
            codigo: '34090-1'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad',
      valor: '20-35',
      unidad: '%',
      analito: 'verapamilo',
      ref: { f: 'dailymed-verapamilo', sec: '12 · Farmacología clínica', cita: 'bioavailability ranges from 20% to 35%', codigo: '34090-1' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1-2',
      unidad: 'h',
      analito: 'verapamilo',
      ref: {
        f: 'dailymed-verapamilo',
        sec: '12 · Farmacología clínica',
        cita: 'Peak plasma concentrations are reached between 1 and 2 hours after oral administration',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación media',
      valor: '2,8-7,4',
      unidad: 'h',
      analito: 'verapamilo',
      condiciones: 'estudios de dosis única',
      ref: {
        f: 'dailymed-verapamilo',
        sec: '12 · Farmacología clínica',
        cita: 'The mean elimination half-life in single-dose studies ranged from 2.8 to 7.4 hours',
        codigo: '34090-1'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '90 (aprox.)',
      unidad: '%',
      analito: 'verapamilo',
      ref: { f: 'dailymed-verapamilo', sec: '12 · Farmacología clínica', cita: 'Approximately 90% is bound to plasma proteins', codigo: '34090-1' }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado sin cambios en la orina',
      valor: '3-4',
      unidad: '% de la dosis',
      analito: 'verapamilo',
      ref: {
        f: 'dailymed-verapamilo',
        sec: '12 · Farmacología clínica',
        cita: 'About 3% to 4% is excreted in the urine as unchanged drug',
        codigo: '34090-1'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-verapamilo', 'ebc9a09a-7b5f-4df6-ace7-31185d469b28', 'VERAPAMIL HYDROCHLORIDE TABLET', 'VERAPAMIL HYDROCHLORIDE', '2', '2025-12-12', '2026-11-12'),
    rengPubchem(2520, 'verapamil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
