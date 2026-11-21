import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'dofetilida',
    nombre: 'Dofetilida',
    clase: 'Antiarrítmico de clase III (bloqueante del canal de potasio IKr)',
    sinonimos: [ 'dofetilide', 'Tikosyn' ],
    formula: 'C19H27N3O5S2',
    masaMolar: 441.6,
    smiles: 'CN(CCC1=CC=C(C=C1)NS(=O)(=O)C)CCOC2=CC=C(C=C2)NS(=O)(=O)C',
    inchikey: 'IXTMWRCNAAVVAI-UHFFFAOYSA-N',
    cid: 71329,
    iupac: 'N-[4-[2-[2-[4-(methanesulfonamido)phenoxy]ethyl-methylamino]ethyl]phenyl]methanesulfonamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'dofetilida-oral',
      producto: 'Tikosyn · cápsula',
      titular: 'PFIZER LABORATORIES DIV PFIZER INC',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '0.125 mg, 0.25 mg o 0.5 mg por cápsula, según la etiqueta',
      excipientes: [ 'microcrystalline cellulose', 'starch, corn', 'silicon dioxide', 'magnesium stearate' ],
      usos: {
        t: 'Mantenimiento del ritmo sinusal normal (retrasar la recurrencia de la fibrilación o el aleteo auricular) en pacientes con fibrilación o aleteo auricular de más de una semana de duración.',
        ref: {
          f: 'dailymed-dofetilida',
          sec: '1 · Indicaciones',
          cita: 'indicated for the maintenance of normal sinus rhythm (delay in time to recurrence of atrial fibrillation/atrial flutter [AF/AFl])',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-dofetilida',
      advertencias: [
        {
          titulo: 'Arritmia ventricular',
          texto: 'Puede causar arritmias ventriculares graves, sobre todo taquicardia ventricular polimorfa de tipo torsades de pointes, asociada a la prolongación del intervalo QT.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-dofetilida',
            sec: 'Advertencias',
            cita: 'TIKOSYN (dofetilide) can cause serious ventricular arrhythmias, primarily Torsade de Pointes (TdP) type ventricular tachycardia',
            codigo: '34071-1'
          }
        },
        {
          titulo: 'Inicio en un centro con monitorización',
          texto: 'Para reducir el riesgo de arritmia inducida, el inicio o reinicio debe hacerse al menos 3 días en un centro con monitorización electrocardiográfica continua y reanimación cardíaca.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-dofetilida',
            sec: 'Advertencia destacada',
            cita: 'patients initiated or re-initiated on TIKOSYN should be placed for a minimum of 3 days in a facility that can provide calculations of creatinine clearance, continuous electrocardiographic monitoring, and cardiac resuscitation',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'Los acontecimientos adversos más frecuentes fueron cefalea, dolor torácico y mareo.',
          '34084-4',
          'The most frequent adverse events were headache, chest pain, and dizziness'
        ],
        [
          'El motivo más frecuente de suspensión (más del 1 %) fue la taquicardia ventricular (2,0 % con dofetilida frente a 1,3 % con placebo).',
          '34084-4',
          'The most frequent reason for discontinuation (>1%) was ventricular tachycardia (2.0% on dofetilide vs. 1.3% on placebo)'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 0.125 mg, 0.25 mg o 0.5 mg por cápsula, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Mantenimiento del ritmo sinusal normal (retrasar la recurrencia de la fibrilación o el aleteo auricular) en pacientes con fibrilación o aleteo auricular de más de una semana de duración.',
    actua: 'Es un antiarrítmico de clase III de Vaughan Williams: bloquea el canal iónico cardíaco que lleva el componente rápido de la corriente rectificadora tardía de potasio (IKr) y, con ello, alarga la repolarización.',
    recorrido: 'La biodisponibilidad oral es superior al 90 %, con concentraciones plasmáticas máximas a las 2-3 horas aproximadamente en ayunas. Alrededor del 80 % de una dosis única se excreta por la orina, y de ello aproximadamente el 80 % como dofetilida inalterada.'
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
            f: 'dailymed-dofetilida',
            sec: '11 · Descripción',
            cita: 'TIKOSYN ® (dofetilide) is an antiarrhythmic drug with Class III (cardiac action potential duration prolonging) properties',
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
      ocurre: 'La biodisponibilidad oral es superior al 90 %, con concentraciones plasmáticas máximas a las 2-3 horas aproximadamente en ayunas.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad oral es superior al 90 %, con concentraciones plasmáticas máximas a las 2-3 horas aproximadamente en ayunas.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'The oral bioavailability of dofetilide is >90%, with maximal plasma concentrations occurring at about 2–3 hours in the fasted state',
            codigo: '43682-4'
          }
        },
        {
          t: 'La biodisponibilidad oral no se ve afectada por los alimentos ni por los antiácidos.',
          ref: { f: 'dailymed-dofetilida', sec: '12.3 · Farmacocinética', cita: 'Oral bioavailability is unaffected by food or antacid', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'La unión a proteínas del plasma es del 60-70 %, independiente de la concentración y de la insuficiencia renal; el volumen de distribución es de 3 L/kg.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'La unión a proteínas del plasma es del 60-70 %, independiente de la concentración y de la insuficiencia renal; el volumen de distribución es de 3 L/kg.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding of dofetilide is 60–70%, is independent of plasma concentration, and is unaffected by renal impairment',
            codigo: '43682-4'
          }
        },
        {
          t: 'El volumen de distribución es de 3 L/kg.',
          ref: { f: 'dailymed-dofetilida', sec: '12.3 · Farmacocinética', cita: 'Volume of distribution is 3 L/kg', codigo: '43682-4' }
        }
      ],
      accion: {
        diana: 'Canal de potasio IKr',
        efecto: 'Es un antiarrítmico de clase III de Vaughan Williams: bloquea el canal iónico cardíaco que lleva el componente rápido de la corriente rectificadora tardía de potasio (IKr) y, con ello, alarga la repolarización.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Es un antiarrítmico de clase III de Vaughan Williams: bloquea el canal iónico cardíaco que lleva el componente rápido de la corriente rectificadora tardía de potasio (IKr) y, con ello, alarga la repolarización.',
            ref: {
              f: 'dailymed-dofetilida',
              sec: '12.1 · Mecanismo de acción',
              cita: 'The mechanism of action is blockade of the cardiac ion channel carrying the rapid component of the delayed rectifier potassium current, I Kr',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Estudios in vitro con microsomas hepáticos humanos muestran que la CYP3A4 puede metabolizarla, aunque con baja afinidad; los metabolitos se forman por N-desalquilación y N-oxidación.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Estudios in vitro con microsomas hepáticos humanos muestran que la CYP3A4 puede metabolizarla, aunque con baja afinidad; los metabolitos se forman por N-desalquilación y N-oxidación.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'In vitro studies with human liver microsomes show that dofetilide can be metabolized by CYP3A4, but it has a low affinity for this isoenzyme',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Metabolitos de N-desalquilación y N-oxidación',
          actividad: 'inactivo',
          nota: 'Inactivos o con actividad mínima; no hay metabolitos cuantificables circulando en el plasma.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'with the remaining 20% consisting of inactive or minimally active metabolites',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Alrededor del 80 % de una dosis única se excreta por la orina, y de ello aproximadamente el 80 % como dofetilida inalterada.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Alrededor del 80 % de una dosis única se excreta por la orina, y de ello aproximadamente el 80 % como dofetilida inalterada.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'Approximately 80% of a single dose of dofetilide is excreted in urine, of which approximately 80% is excreted as unchanged dofetilide',
            codigo: '43682-4'
          }
        },
        {
          t: 'La eliminación renal combina filtración glomerular y secreción tubular activa.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'Renal elimination involves both glomerular filtration and active tubular secretion',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida terminal es de aproximadamente 10 horas.',
          ref: {
            f: 'dailymed-dofetilida',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal half-life of dofetilide is approximately 10 hours',
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
      nombre: 'Biodisponibilidad oral',
      valor: '> 90',
      unidad: '%',
      analito: 'dofetilida',
      ref: { f: 'dailymed-dofetilida', sec: '12.3 · Farmacocinética', cita: 'The oral bioavailability of dofetilide is >90%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '2-3 (aprox.)',
      unidad: 'h',
      analito: 'dofetilida',
      condiciones: 'en ayunas',
      ref: {
        f: 'dailymed-dofetilida',
        sec: '12.3 · Farmacocinética',
        cita: 'maximal plasma concentrations occurring at about 2–3 hours in the fasted state',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '60-70',
      unidad: '%',
      analito: 'dofetilida',
      ref: { f: 'dailymed-dofetilida', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding of dofetilide is 60–70%', codigo: '43682-4' }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución',
      valor: '3',
      unidad: 'L/kg',
      analito: 'dofetilida',
      ref: { f: 'dailymed-dofetilida', sec: '12.3 · Farmacocinética', cita: 'Volume of distribution is 3 L/kg', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida terminal',
      valor: '10 (aprox.)',
      unidad: 'h',
      analito: 'dofetilida',
      ref: {
        f: 'dailymed-dofetilida',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal half-life of dofetilide is approximately 10 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Dosis excretada por la orina',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'dofetilida y metabolitos',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-dofetilida',
        sec: '12.3 · Farmacocinética',
        cita: 'Approximately 80% of a single dose of dofetilide is excreted in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-dofetilida', '02438044-d6a3-49e9-a1ac-3aad21ef2c8c', 'TIKOSYN (DOFETILIDE) CAPSULE', 'Tikosyn', '30', '2026-04-22', '2026-11-15'),
    rengPubchem(71329, 'dofetilide', '2026-11-15')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
