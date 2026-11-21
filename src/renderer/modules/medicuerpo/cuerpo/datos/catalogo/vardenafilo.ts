import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'vardenafilo',
    nombre: 'Vardenafilo',
    clase: 'Inhibidor de la fosfodiesterasa 5',
    sinonimos: [ 'vardenafil', 'Levitra' ],
    formula: 'C23H32N6O4S',
    masaMolar: 488.6,
    smiles: 'CCCC1=NC(=C2N1N=C(NC2=O)C3=C(C=CC(=C3)S(=O)(=O)N4CCN(CC4)CC)OCC)C',
    inchikey: 'SECKRCOLJRRGGV-UHFFFAOYSA-N',
    cid: 135400189,
    iupac: '2-[2-ethoxy-5-(4-ethylpiperazin-1-yl)sulfonylphenyl]-5-methyl-7-propyl-3H-imidazo[5,1-f][1,2,4]triazin-4-one',
    area: 'Urología'
  },
  presentaciones: [
    {
      id: 'vardenafilo-oral',
      producto: 'Vardenafil Hydrochloride · comprimido',
      titular: 'LANNETT COMPANY, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido',
      formaFuente: 'TABLET',
      liberacion: 'no declarada',
      concentraciones: '2.5 mg, 5 mg, 10 mg o 20 mg por comprimido, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de vardenafilo',
        ref: { f: 'dailymed-vardenafilo', sec: '11 · Descripción', cita: 'Vardenafil hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'cellulose, microcrystalline',
        'crospovidone',
        'silicon dioxide',
        'magnesium stearate',
        'aspartame',
        'titanium dioxide',
        'ferric oxide red',
        'ferric oxide yellow'
      ],
      usos: {
        t: 'Disfunción eréctil.',
        ref: { f: 'dailymed-vardenafilo', sec: '1 · Indicaciones', cita: 'indicated for the treatment of erectile dysfunction', codigo: '34067-9' }
      },
      fuente: 'dailymed-vardenafilo',
      advertencias: [
        {
          titulo: 'Riesgo de priapismo',
          texto: 'Si una erección dura más de 4 horas, se debe buscar ayuda médica de inmediato.',
          organos: [ 'organos-reproductores' ],
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'In the event that an erection lasts more than 4 hours, the patient should seek immediate medical assistance',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Efectos cardiovasculares',
          texto: 'Hay que considerar el estado cardiovascular, porque la actividad sexual conlleva cierto riesgo cardiaco.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '5 · Advertencias y precauciones',
            cita: 'Physicians should consider the cardiovascular status of their patients, since there is a degree of cardiac risk associated with sexual activity',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (≥ 2 %): dolor de cabeza, rubor, congestión nasal, dispepsia, sinusitis, síndrome gripal, mareo, aumento de creatina cinasa, náuseas y dolor de espalda.',
          '34084-4',
          'Most common adverse reactions reported ( ≥ 2% of patients) are headache, flushing, nasal congestion, dyspepsia, sinusitis, flu syndrome, dizziness, increased creatine kinase, nausea, back pain'
        ],
        [ 'El dolor de cabeza fue del 15 % con vardenafilo frente al 4 % con placebo.', '34084-4', 'Headache 4% 15% Flushing 1% 11% Rhinitis 3% 9%' ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido: 2.5 mg, 5 mg, 10 mg o 20 mg por comprimido, según la etiqueta; el activo va como clorhidrato de vardenafilo. Los excipientes no son el principio activo.',
    usos: 'Disfunción eréctil.',
    actua: 'Inhibe de forma selectiva la fosfodiesterasa 5 (PDE5), la más abundante del cuerpo cavernoso: sube el GMP cíclico, relaja el músculo liso y permite el flujo de sangre al pene. Solo actúa si hay estimulación sexual.',
    recorrido: 'Se absorbe con rapidez; la biodisponibilidad absoluta es de alrededor del 15 %. El máximo suele llegar entre 30 minutos y 2 horas (mediana de 60 minutos) en ayunas. Se excreta como metabolitos, sobre todo por las heces (91-95 % de la dosis) y en menor medida por la orina (2-6 %); la semivida terminal es de 4-5 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido redondo naranja, de 2,5, 5, 10 o 20 mg.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido redondo naranja, de 2,5, 5, 10 o 20 mg.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '3 · Formas y concentraciones',
            cita: 'Vardenafil hydrochloride tablets are formulated as orange, round, tablets',
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
      ocurre: 'Se absorbe con rapidez; la biodisponibilidad absoluta es de alrededor del 15 %. El máximo suele llegar entre 30 minutos y 2 horas (mediana de 60 minutos) en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con rapidez; la biodisponibilidad absoluta es de alrededor del 15 %. El máximo suele llegar entre 30 minutos y 2 horas (mediana de 60 minutos) en ayunas.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Vardenafil is rapidly absorbed with absolute bioavailability of approximately 15%',
            codigo: '43682-4'
          }
        },
        {
          t: 'Las comidas muy grasas redujeron la Cmax entre un 18 % y un 50 %.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'high- fat meals caused a reduction in C max by 18%-50%',
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
      ocurre: 'El volumen de distribución en estado estacionario es de 208 L, lo que indica amplia distribución a los tejidos; el vardenafilo y su metabolito M1 van unidos en un 95 % a proteínas del plasma.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El volumen de distribución en estado estacionario es de 208 L, lo que indica amplia distribución a los tejidos; el vardenafilo y su metabolito M1 van unidos en un 95 % a proteínas del plasma.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'The mean steady-state volume of distribution (Vss) for vardenafil is 208 L, indicating extensive tissue distribution',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Fosfodiesterasa 5 (PDE5)',
        efecto: 'Inhibe de forma selectiva la fosfodiesterasa 5 (PDE5), la más abundante del cuerpo cavernoso: sube el GMP cíclico, relaja el músculo liso y permite el flujo de sangre al pene. Solo actúa si hay estimulación sexual.',
        lugar: [ 'organos-reproductores' ],
        datos: [
          {
            t: 'Inhibe de forma selectiva la fosfodiesterasa 5 (PDE5), la más abundante del cuerpo cavernoso: sube el GMP cíclico, relaja el músculo liso y permite el flujo de sangre al pene. Solo actúa si hay estimulación sexual.',
            ref: {
              f: 'dailymed-vardenafilo',
              sec: '12.1 · Mecanismo de acción',
              cita: 'the inhibition of PDE5 enhances erectile function by increasing the amount of cGMP',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Lo metaboliza sobre todo el CYP3A4 hepático, con aporte del CYP3A5 y de isoformas CYP2C; el metabolito circulante principal, M1, se forma por desetilación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Lo metaboliza sobre todo el CYP3A4 hepático, con aporte del CYP3A5 y de isoformas CYP2C; el metabolito circulante principal, M1, se forma por desetilación.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'Vardenafil is metabolized predominantly by the hepatic enzyme CYP3A4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1 (desetilvardenafilo)',
          actividad: 'activo',
          nota: 'Potencia in vitro frente a la PDE5 del 28 % de la del vardenafilo.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'This metabolite shows a phosphodiesterase selectivity profile similar to that of vardenafil and an in vitro inhibitory potency for PDE5 28% of that of vardenafil',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces', 'orina', 'rinones' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Se excreta como metabolitos, sobre todo por las heces (91-95 % de la dosis) y en menor medida por la orina (2-6 %); la semivida terminal es de 4-5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Se excreta como metabolitos, sobre todo por las heces (91-95 % de la dosis) y en menor medida por la orina (2-6 %); la semivida terminal es de 4-5 horas.',
          ref: {
            f: 'dailymed-vardenafilo',
            sec: '12.3 · Farmacocinética',
            cita: 'vardenafil is excreted as metabolites predominantly in the feces (approximately 91-95% of administered oral dose) and to a lesser extent in the urine (approximately 2-6% of administered oral dose)',
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
      valor: '15 (aprox.)',
      unidad: '%',
      analito: 'vardenafilo',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'Vardenafil is rapidly absorbed with absolute bioavailability of approximately 15%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el máximo (mediana)',
      valor: '1 (0,5-2)',
      unidad: 'h',
      analito: 'vardenafilo',
      poblacion: 'voluntarios sanos',
      condiciones: 'dosis única de 20 mg, en ayunas',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'are usually reached between 30 minutes and 2 hours (median 60 minutes) after oral dosing in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'comida',
      nombre: 'Reducción de la Cmax con comida rica en grasa',
      valor: '18-50',
      unidad: '%',
      analito: 'vardenafilo',
      ref: { f: 'dailymed-vardenafilo', sec: '12.3 · Farmacocinética', cita: 'high- fat meals caused a reduction in C max by 18%-50%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '208',
      unidad: 'L',
      analito: 'vardenafilo',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'The mean steady-state volume of distribution (Vss) for vardenafil is 208 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas del plasma',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'vardenafilo y M1',
      ref: { f: 'dailymed-vardenafilo', sec: '12.3 · Farmacocinética', cita: 'about 95% for parent drug and M1', codigo: '43682-4' }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento corporal total',
      valor: '56',
      unidad: 'L/h',
      analito: 'vardenafilo',
      ref: { f: 'dailymed-vardenafilo', sec: '12.3 · Farmacocinética', cita: 'The total body clearance of vardenafil is 56 L/h', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '4-5 (aprox.)',
      unidad: 'h',
      analito: 'vardenafilo y M1',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'the terminal half-life of vardenafil and its primary metabolite (M1) is approximately 4-5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'heces',
      nombre: 'Excretado en las heces',
      valor: '91-95',
      unidad: '% de la dosis',
      analito: 'vardenafilo y metabolitos',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'predominantly in the feces (approximately 91-95% of administered oral dose)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Excretado en la orina',
      valor: '2-6',
      unidad: '% de la dosis',
      analito: 'vardenafilo y metabolitos',
      ref: {
        f: 'dailymed-vardenafilo',
        sec: '12.3 · Farmacocinética',
        cita: 'to a lesser extent in the urine (approximately 2-6% of administered oral dose)',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-vardenafilo', '2782efed-6198-47b9-81ac-3e255e2ab7f6', 'VARDENAFIL HYDROCHLORIDE TABLET', 'Vardenafil Hydrochloride', '9', '2026-07-24', '2026-11-12'),
    rengPubchem(135400189, 'vardenafil', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
