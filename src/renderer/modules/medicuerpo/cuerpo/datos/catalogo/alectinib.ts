import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'alectinib',
    nombre: 'Alectinib',
    clase: 'Inhibidor de la tirosina cinasa ALK (y RET)',
    sinonimos: [ 'alectinib hydrochloride', 'Alecensa' ],
    formula: 'C30H34N4O2',
    masaMolar: 482.6,
    smiles: 'CCC1=CC2=C(C=C1N3CCC(CC3)N4CCOCC4)C(C5=C(C2=O)C6=C(N5)C=C(C=C6)C#N)(C)C',
    inchikey: 'KDGFLJKFZUIJMX-UHFFFAOYSA-N',
    cid: 49806720,
    iupac: '9-ethyl-6,6-dimethyl-8-(4-morpholin-4-ylpiperidin-1-yl)-11-oxo-5H-benzo[b]carbazole-3-carbonitrile',
    area: 'Oncología'
  },
  presentaciones: [
    {
      id: 'alectinib-oral',
      producto: 'ALECENSA · cápsula',
      titular: 'GENENTECH, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '150 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de alectinib',
        ref: { f: 'dailymed-alectinib', sec: '11 · Descripción', cita: '519.08 g/mol (hydrochloride salt)', codigo: '34089-3' }
      },
      excipientes: [
        'lactose monohydrate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'sodium lauryl sulfate',
        'carboxymethylcellulose calcium',
        'magnesium stearate',
        'carrageenan',
        'potassium chloride',
        'titanium dioxide',
        'carnauba wax',
        'starch, corn',
        'hypromellose, unspecified',
        'ferric oxide red',
        'ferric oxide yellow',
        'fd&c blue no. 2',
        'shellac',
        'glyceryl oleate'
      ],
      usos: {
        t: 'Tratamiento del cáncer de pulmón no microcítico ALK positivo, metastásico o como adyuvante tras resección.',
        ref: { f: 'dailymed-alectinib', sec: '1 · Indicaciones', cita: 'ALECENSA is a kinase inhibitor indicated', codigo: '34067-9' }
      },
      fuente: 'dailymed-alectinib',
      advertencias: [
        {
          titulo: 'Hepatotoxicidad',
          texto: 'Hacer pruebas hepáticas cada 2 semanas los 3 primeros meses y después cada mes.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-alectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor liver laboratory tests every 2 weeks during the first 3 months of treatment',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad pulmonar intersticial o neumonitis',
          texto: 'Interrumpir de inmediato si se diagnostica y suspender si no hay otra causa.',
          organos: [],
          ref: {
            f: 'dailymed-alectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Immediately withhold ALECENSA in patients diagnosed with ILD/pneumonitis',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Insuficiencia renal',
          texto: 'Interrumpir ante una insuficiencia renal grave.',
          organos: [ 'rinones' ],
          ref: { f: 'dailymed-alectinib', sec: '5 · Advertencias y precauciones', cita: 'Withhold ALECENSA for severe renal impairment', codigo: '43685-7' }
        },
        {
          titulo: 'Bradicardia',
          texto: 'Vigilar con regularidad la frecuencia cardíaca y la presión arterial.',
          organos: [],
          ref: {
            f: 'dailymed-alectinib',
            sec: '5 · Advertencias y precauciones',
            cita: 'Monitor heart rate and blood pressure regularly',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (20 % o más): hepatotoxicidad, estreñimiento, fatiga, mialgia, edema, exantema y tos.',
          '34084-4',
          'most common adverse reactions (incidence ≥20%) were hepatotoxicity, constipation, fatigue, myalgia, edema, rash and cough'
        ],
        [
          'Las tasas de los ensayos dependen de sus condiciones y no se pueden comparar directamente con las de otros fármacos.',
          '34084-4',
          'Because clinical trials are conducted under widely varying conditions'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 150 mg por cápsula, según la etiqueta; el activo va como clorhidrato de alectinib. Los excipientes no son el principio activo.',
    usos: 'Tratamiento del cáncer de pulmón no microcítico ALK positivo, metastásico o como adyuvante tras resección.',
    actua: 'Inhibidor de tirosina cinasa dirigido a ALK y RET: inhibe la fosforilación de ALK y la activación de STAT3 y AKT; su metabolito activo M4 tiene una potencia similar.',
    recorrido: 'Con alimentos alcanza el máximo a las 4 horas y su biodisponibilidad absoluta es del 37 %; una comida grasa multiplica por 3,1 la exposición conjunta a alectinib y M4. El 98 % de la radiactividad se excretó en las heces (84 % de la dosis como alectinib inalterado y 6 % como M4); en la orina, menos del 0,5 %.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con comida.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo; se toma con comida.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '11 · Descripción',
            cita: 'The capsule shell contains carnauba wax, carrageenan, corn starch, hypromellose, potassium chloride and titanium dioxide',
            codigo: '34089-3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'con alimentos',
      ocurre: 'Con alimentos alcanza el máximo a las 4 horas y su biodisponibilidad absoluta es del 37 %; una comida grasa multiplica por 3,1 la exposición conjunta a alectinib y M4.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Con alimentos alcanza el máximo a las 4 horas y su biodisponibilidad absoluta es del 37 %; una comida grasa multiplica por 3,1 la exposición conjunta a alectinib y M4.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of alectinib was 37% (90% CI: 34%, 40%) under fed conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'Una comida rica en grasas aumentó 3,1 veces la exposición conjunta de alectinib y M4.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'A high-fat, high-calorie meal increased the combined exposure (AUC 0-inf ) of alectinib plus M4 by 3.1-fold',
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
      ocurre: 'El alectinib y el M4 se unen en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 4 016 L y en el líquido cefalorraquídeo alcanza las concentraciones libres plasmáticas.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El alectinib y el M4 se unen en más del 99 % a las proteínas plasmáticas; el volumen de distribución aparente es de 4 016 L y en el líquido cefalorraquídeo alcanza las concentraciones libres plasmáticas.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alectinib and M4 are bound to human plasma proteins greater than 99%, independent of drug concentration',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución aparente de 4 016 L para el alectinib.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The apparent volume of distribution is 4,016 L for alectinib and 10,093 L for M4',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'ALK y RET',
        efecto: 'Inhibidor de tirosina cinasa dirigido a ALK y RET: inhibe la fosforilación de ALK y la activación de STAT3 y AKT; su metabolito activo M4 tiene una potencia similar.',
        lugar: [],
        datos: [
          {
            t: 'Inhibidor de tirosina cinasa dirigido a ALK y RET: inhibe la fosforilación de ALK y la activación de STAT3 y AKT; su metabolito activo M4 tiene una potencia similar.',
            ref: {
              f: 'dailymed-alectinib',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Alectinib is a tyrosine kinase inhibitor that targets ALK and RET',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'La CYP3A4 lo transforma en su metabolito activo principal, M4.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'La CYP3A4 lo transforma en su metabolito activo principal, M4.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Alectinib is metabolized by CYP3A4 to its major active metabolite M4',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M4',
          actividad: 'activo',
          nota: 'Metabolito activo principal, con potencia in vitro similar.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12 · Farmacología clínica',
            cita: 'The major active metabolite of alectinib, M4, showed similar in vitro potency and activity',
            codigo: '34090-1'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'El 98 % de la radiactividad se excretó en las heces (84 % de la dosis como alectinib inalterado y 6 % como M4); en la orina, menos del 0,5 %.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'El 98 % de la radiactividad se excretó en las heces (84 % de la dosis como alectinib inalterado y 6 % como M4); en la orina, menos del 0,5 %.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'Ninety-eight percent of the radioactivity was excreted in feces following oral administration of a single radiolabeled dose of alectinib under fed conditions',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación es de 33 horas para el alectinib y de 31 horas para el M4.',
          ref: {
            f: 'dailymed-alectinib',
            sec: '12.3 · Farmacocinética',
            cita: 'The geometric mean elimination half-life is 33 hours for alectinib and 31 hours for M4 in patients with ALK-positive NSCLC',
            codigo: '43682-4'
          },
          poblacion: 'pacientes con CPNM ALK positivo'
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta con alimentos',
      valor: '37',
      unidad: '%',
      analito: 'alectinib',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The absolute bioavailability of alectinib was 37% (90% CI: 34%, 40%) under fed conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta la concentración máxima',
      valor: '4',
      unidad: 'h',
      analito: 'alectinib',
      poblacion: 'pacientes con CPNM ALK positivo',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Alectinib reached maximal concentrations at 4 hours following administration of ALECENSA 600 mg twice daily under fed conditions',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '> 99',
      unidad: '%',
      analito: 'alectinib y M4',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Alectinib and M4 are bound to human plasma proteins greater than 99%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución aparente',
      valor: '4016',
      unidad: 'L',
      analito: 'alectinib',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution is 4,016 L for alectinib',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '33',
      unidad: 'h',
      analito: 'alectinib',
      poblacion: 'pacientes con CPNM ALK positivo',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean elimination half-life is 33 hours for alectinib',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento aparente',
      valor: '81,9',
      unidad: 'L/h',
      analito: 'alectinib',
      ref: { f: 'dailymed-alectinib', sec: '12.3 · Farmacocinética', cita: 'The apparent clearance (CL/F) is 81.9 L/hour for alectinib', codigo: '43682-4' }
    },
    {
      magnitud: 'heces',
      nombre: 'Radiactividad excretada en las heces',
      valor: '98',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      condiciones: 'con alimentos',
      ref: {
        f: 'dailymed-alectinib',
        sec: '12.3 · Farmacocinética',
        cita: 'Ninety-eight percent of the radioactivity was excreted in feces',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-alectinib', '42c49deb-713b-427a-9670-08af08adcffb', 'ALECENSA (ALECTINIB HYDROCHLORIDE) CAPSULE', 'ALECENSA', '29', '2026-08-27', '2026-11-19'),
    rengPubchem(49806720, 'alectinib hydrochloride', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
