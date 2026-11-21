import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'rivastigmina',
    nombre: 'Rivastigmina',
    clase: 'Inhibidor de la colinesterasa (tratamiento de la demencia)',
    sinonimos: [ 'rivastigmine' ],
    formula: 'C14H22N2O2',
    masaMolar: 250.34,
    smiles: 'CCN(C)C(=O)OC1=CC=CC(=C1)[C@H](C)N(C)C',
    inchikey: 'XSVMFMHYUFZWBK-NSHDSACASA-N',
    cid: 77991,
    iupac: '[3-[(1S)-1-(dimethylamino)ethyl]phenyl] N-ethyl-N-methylcarbamate',
    area: 'Sistema nervioso'
  },
  presentaciones: [
    {
      id: 'rivastigmina-oral',
      producto: 'RIVASTIGMINA VIR 1.5 MG CAPSULAS DURAS EFG',
      titular: 'Industria Quimica Y Farmaceutica Vir S.A.',
      mercado: 'España (UE)',
      forma: 'Cápsula dura',
      formaFuente: 'CÁPSULA DURA',
      liberacion: 'no declarada',
      concentraciones: '1,5 mg de rivastigmina base por cápsula (como hidrógeno tartrato), según la ficha técnica',
      sal: {
        nombre: 'Hidrógeno tartrato de rivastigmina',
        ref: {
          f: 'cima-76267',
          sec: '2 · Composición cualitativa y cuantitativa',
          cita: 'hidrógeno tartrato de rivastigmina correspondiente a 1,5 mg de rivastigmina base',
          codigo: 'FT 2'
        }
      },
      excipientes: [
        'Celulosa microcristalina (Avicel PH-302)',
        'Hipromelosa (Methocel E50 LV)',
        'Sílice coloidal anhidra',
        'Estearato magnésico',
        'Gelatina',
        'Dióxido de titanio (E 171)',
        'Óxido de hierro amarillo (E 172)',
        'Óxido de hierro rojo (E 172, en las concentraciones de 3, 4,5 y 6 mg)'
      ],
      usos: {
        t: 'Tratamiento sintomático de la demencia de Alzheimer leve a moderadamente grave y de la demencia leve a moderadamente grave de la enfermedad de Parkinson idiopática.',
        ref: {
          f: 'cima-76267',
          sec: '4.1 · Indicaciones terapéuticas',
          cita: 'Tratamiento sintomático de la demencia de Alzheimer leve a moderadamente grave',
          codigo: 'FT 4.1'
        }
      },
      fuente: 'cima-76267',
      advertencias: [
        {
          titulo: 'Dermatitis alérgica',
          texto: 'Se han notificado casos raros de dermatitis alérgica diseminada con rivastigmina, por cualquier vía de administración.',
          organos: [ 'piel' ],
          ref: {
            f: 'cima-76267',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'pacientes que experimentaron dermatitis alérgica (diseminada) cuando se les administró rivastigmina',
            codigo: 'FT 4.4'
          }
        },
        {
          titulo: 'Reacciones adversas dependientes de la dosis',
          texto: 'La incidencia y la gravedad de las reacciones adversas aumentan en general con las dosis elevadas.',
          organos: [ 'estomago' ],
          ref: {
            f: 'cima-76267',
            sec: '4.4 · Advertencias y precauciones especiales de empleo',
            cita: 'La incidencia y gravedad de las reacciones adversas aumentan generalmente a dosis elevadas',
            codigo: 'FT 4.4'
          }
        }
      ],
      reacciones: [
        [
          'Las más comunes son gastrointestinales: náuseas (38 %) y vómitos (23 %), sobre todo durante la fase de determinación de la dosis.',
          'FT 4.8',
          'Las reacciones adversas del fármaco más comúnmente notificadas son reacciones gastrointestinales que incluyen náuseas (38%) y vómitos (23%)'
        ],
        [
          'Las mujeres tratadas fueron más susceptibles que los hombres a las reacciones gastrointestinales y a la pérdida de peso.',
          'FT 4.8',
          'las mujeres tratadas eran más susceptibles que los hombres a las reacciones adversas gastrointestinales del fármaco y a la pérdida de peso'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula dura: 1,5 mg de rivastigmina base por cápsula (como hidrógeno tartrato), según la ficha técnica; el activo va como hidrógeno tartrato de rivastigmina. Los excipientes no son el principio activo.',
    usos: 'Tratamiento sintomático de la demencia de Alzheimer leve a moderadamente grave y de la demencia leve a moderadamente grave de la enfermedad de Parkinson idiopática.',
    actua: 'Es un inhibidor de la acetil- y butirilcolinesterasa de tipo carbamato: facilita la neurotransmisión colinérgica al ralentizar la degradación de la acetilcolina liberada por las neuronas colinérgicas.',
    recorrido: 'Se absorbe rápida y completamente y el pico plasmático llega al cabo de aproximadamente una hora; la biodisponibilidad absoluta tras una dosis de 3 mg es de alrededor del 36 ± 13 %. No se halló rivastigmina inalterada en la orina: la excreción renal de los metabolitos es la vía principal, con más del 90 % de una dosis marcada eliminada por el riñón en 24 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Cápsula dura tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Cápsula dura: se disgrega en el tubo digestivo y la ficha técnica no declara una liberación modificada.',
          ref: {
            f: 'cima-76267',
            sec: '3 · Forma farmacéutica',
            cita: 'Rivastigmina VIR 1,5 mg: se presenta como cápsulas de gelatina dura',
            codigo: 'FT 3'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápida y completamente y el pico plasmático llega al cabo de aproximadamente una hora; la biodisponibilidad absoluta tras una dosis de 3 mg es de alrededor del 36 ± 13 %.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápida y completamente y el pico plasmático llega al cabo de aproximadamente una hora; la biodisponibilidad absoluta tras una dosis de 3 mg es de alrededor del 36 ± 13 %.',
          ref: { f: 'cima-76267', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Rivastigmina se absorbe rápida y completamente', codigo: 'FT 5.2' }
        },
        {
          t: 'Con alimento, la absorción se retrasa unos 90 minutos, la Cmax baja y el AUC aumenta en torno al 30 %.',
          ref: {
            f: 'cima-76267',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'La administración de rivastigmina con alimento retrasa la absorción',
            codigo: 'FT 5.2'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'encefalo' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une a proteínas en aproximadamente un 40 %, atraviesa fácilmente la barrera hematoencefálica y su volumen aparente de distribución oscila entre 1,8 y 2,7 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une a proteínas en aproximadamente un 40 %, atraviesa fácilmente la barrera hematoencefálica y su volumen aparente de distribución oscila entre 1,8 y 2,7 L/kg.',
          ref: {
            f: 'cima-76267',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Rivastigmina se une a proteínas aproximadamente en un 40%',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Atraviesa fácilmente la barrera hematoencefálica.',
          ref: { f: 'cima-76267', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Atraviesa fácilmente la barrera hematoencefálica', codigo: 'FT 5.2' }
        }
      ],
      accion: {
        diana: 'Acetilcolinesterasa y butirilcolinesterasa',
        efecto: 'Es un inhibidor de la acetil- y butirilcolinesterasa de tipo carbamato: facilita la neurotransmisión colinérgica al ralentizar la degradación de la acetilcolina liberada por las neuronas colinérgicas.',
        lugar: [ 'encefalo' ],
        datos: [
          {
            t: 'Es un inhibidor de la acetil- y butirilcolinesterasa de tipo carbamato: facilita la neurotransmisión colinérgica al ralentizar la degradación de la acetilcolina liberada por las neuronas colinérgicas.',
            ref: {
              f: 'cima-76267',
              sec: '5.1 · Propiedades farmacodinámicas',
              cita: 'Rivastigmina es un inhibidor de la acetil- y butirilcolinesterasa de tipo carbamato',
              codigo: 'FT 5.1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'tejidos' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza rápida y extensamente, sobre todo por hidrólisis mediada por la colinesterasa, hasta el metabolito decarbamilado.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza rápida y extensamente, sobre todo por hidrólisis mediada por la colinesterasa, hasta el metabolito decarbamilado.',
          ref: { f: 'cima-76267', sec: '5.2 · Propiedades farmacocinéticas', cita: 'Rivastigmina se metaboliza rápida y extensamente', codigo: 'FT 5.2' }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolito decarbamilado',
          actividad: 'inactivo',
          nota: 'Inhibe menos del 10 % de la acetilcolinesterasa in vitro.',
          ref: {
            f: 'cima-76267',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'este metabolito muestra una inhibición mínima de la acetilcolinesterasa',
            codigo: 'FT 5.2'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'No se halló rivastigmina inalterada en la orina: la excreción renal de los metabolitos es la vía principal, con más del 90 % de una dosis marcada eliminada por el riñón en 24 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'No se halló rivastigmina inalterada en la orina: la excreción renal de los metabolitos es la vía principal, con más del 90 % de una dosis marcada eliminada por el riñón en 24 horas.',
          ref: {
            f: 'cima-76267',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'la excreción renal de los metabolitos es la principal vía de eliminación',
            codigo: 'FT 5.2'
          }
        },
        {
          t: 'Menos del 1 % de la dosis se excreta en las heces.',
          ref: {
            f: 'cima-76267',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Menos del 1% de la dosis administrada se excreta en las heces',
            codigo: 'FT 5.2'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '1 (aprox.)',
      unidad: 'h',
      analito: 'rivastigmina',
      ref: {
        f: 'cima-76267',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Las concentraciones plasmáticas máximas se alcanzan al cabo de aproximadamente una hora',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta (dosis de 3 mg)',
      valor: '36 ± 13 (aprox.)',
      unidad: '%',
      analito: 'rivastigmina',
      ref: {
        f: 'cima-76267',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'La biodisponibilidad absoluta tras una dosis de 3 mg es aprox. del 36% ± 13%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'rivastigmina',
      ref: {
        f: 'cima-76267',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'Rivastigmina se une a proteínas aproximadamente en un 40%',
        codigo: 'FT 5.2'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Eliminación renal en 24 horas',
      valor: '> 90',
      unidad: '% de la dosis',
      analito: 'rivastigmina',
      condiciones: 'dosis de rivastigmina marcada con 14C',
      ref: {
        f: 'cima-76267',
        sec: '5.2 · Propiedades farmacocinéticas',
        cita: 'la eliminación renal fue rápida y prácticamente completa (>90%) al cabo de 24 horas',
        codigo: 'FT 5.2'
      }
    }
  ],
  fuentes: [
    rengFichaCIMA('cima-76267', '76267', 'RIVASTIGMINA VIR 1.5 MG CAPSULAS DURAS EFG (Industria Quimica Y Farmaceutica Vir S.A.)', '2025-04-01', '2026-11-15'),
    rengPubchem(77991, 'rivastigmine', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
