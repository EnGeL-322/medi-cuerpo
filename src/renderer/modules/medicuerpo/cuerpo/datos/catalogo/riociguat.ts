import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'riociguat',
    nombre: 'Riociguat',
    clase: 'Estimulador de la guanilato ciclasa soluble (GCs)',
    sinonimos: [ 'riociguat', 'Adempas' ],
    formula: 'C20H19FN8O2',
    masaMolar: 422.4,
    smiles: 'CN(C1=C(N=C(N=C1N)C2=NN(C3=C2C=CC=N3)CC4=CC=CC=C4F)N)C(=O)OC',
    inchikey: 'WXXSNCNJFUAIDG-UHFFFAOYSA-N',
    cid: 11304743,
    iupac: 'methyl N-[4,6-diamino-2-[1-[(2-fluorophenyl)methyl]pyrazolo[5,4-b]pyridin-3-yl]pyrimidin-5-yl]-N-methylcarbamate',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'riociguat-oral',
      producto: 'Adempas · comprimido recubierto con película',
      titular: 'BAYER HEALTHCARE PHARMACEUTICALS INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '0.5 mg, 1 mg, 1.5 mg, 2 mg o 2.5 mg por comprimido, según la etiqueta',
      excipientes: [
        'microcrystalline cellulose',
        'crospovidone (120 .mu.m)',
        'hypromellose, unspecified',
        'lactose monohydrate',
        'magnesium stearate',
        'sodium lauryl sulfate',
        'hydroxypropyl cellulose (1600000 wamw)',
        'propylene glycol',
        'titanium dioxide'
      ],
      usos: {
        t: 'Tratamiento de adultos con hipertensión pulmonar tromboembólica crónica (grupo 4 de la OMS) persistente o recurrente tras la cirugía, o inoperable, para mejorar la capacidad de ejercicio y la clase funcional de la OMS.',
        ref: {
          f: 'dailymed-riociguat',
          sec: '1 · Indicaciones',
          cita: 'Adempas is indicated for the treatment of adults with persistent/recurrent chronic thromboembolic pulmonary hypertension (CTEPH), (WHO Group 4) after surgical treatment, or inoperable CTEPH, to improve exercise capacity and WHO functional class',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-riociguat',
      advertencias: [
        {
          titulo: 'Toxicidad embriofetal',
          texto: 'Contraindicado en el embarazo porque, según datos en animales, puede dañar al feto; hay que descartar el embarazo antes de empezar.',
          organos: [],
          ref: {
            f: 'dailymed-riociguat',
            sec: 'Advertencia destacada',
            cita: 'Adempas is contraindicated for use during pregnancy because it may cause fetal harm based on animal data',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Hipotensión',
          texto: 'Reduce la presión arterial; puede causar hipotensión sintomática o isquemia en pacientes con hipovolemia y otras situaciones de riesgo.',
          organos: [],
          ref: {
            f: 'dailymed-riociguat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Adempas reduces blood pressure. Consider the potential for symptomatic hypotension or ischemia in patients with hypovolemia',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Hemorragias',
          texto: 'En los ensayos controlados hubo hemorragias graves en el 2,4 % de los pacientes con riociguat frente al 0 % con placebo.',
          organos: [],
          ref: {
            f: 'dailymed-riociguat',
            sec: '5 · Advertencias y precauciones',
            cita: 'serious bleeding occurred in 2.4% of patients taking Adempas compared to 0% of placebo patients',
            codigo: '43685-7'
          }
        },
        {
          titulo: 'Enfermedad venooclusiva pulmonar',
          texto: 'Los vasodilatadores pulmonares pueden empeorar mucho el estado cardiovascular de estos pacientes; no se recomienda su uso.',
          organos: [ 'pulmones', 'corazon', 'vasos' ],
          ref: {
            f: 'dailymed-riociguat',
            sec: '5 · Advertencias y precauciones',
            cita: 'Pulmonary vasodilators may significantly worsen the cardiovascular status of patients with pulmonary veno-occlusive disease (PVOD)',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Las más frecuentes (3 % o más y más que con placebo): cefalea, dispepsia o gastritis, mareo, náuseas, diarrea, hipotensión, vómitos, anemia, reflujo gastroesofágico y estreñimiento.',
          '34084-4',
          'Adverse reactions occurring more frequently (≥3%) on Adempas compared to placebo are headache, dyspepsia/gastritis, dizziness, nausea, diarrhea, hypotension, vomiting, anemia, gastroesophageal reflux, and constipation'
        ],
        [
          'La mayoría de las reacciones adversas de la tabla pueden atribuirse a su mecanismo vasodilatador.',
          '34084-4',
          'Most adverse reactions in Table 1 can be ascribed to the vasodilatory mechanism of action of Adempas'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'comprimido'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 0.5 mg, 1 mg, 1.5 mg, 2 mg o 2.5 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de adultos con hipertensión pulmonar tromboembólica crónica (grupo 4 de la OMS) persistente o recurrente tras la cirugía, o inoperable, para mejorar la capacidad de ejercicio y la clase funcional de la OMS.',
    actua: 'Estimula la vía óxido nítrico-guanilato ciclasa soluble-GMPc y aumenta la producción de GMPc, con la consiguiente vasodilatación.',
    recorrido: 'La biodisponibilidad absoluta es de alrededor del 94 % y el pico plasmático se observa en las 1,5 horas siguientes a la toma del comprimido. Tras una dosis oral marcada en personas sanas, alrededor del 40 % de la radiactividad se recuperó en la orina y el 53 % en las heces; en la mayoría, los metabolitos fueron lo principal de lo excretado.'
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
          ref: { f: 'dailymed-riociguat', sec: '3 · Formas y concentraciones', cita: 'Tablets: film-coated, round, bi-convex', codigo: '43678-2' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'La biodisponibilidad absoluta es de alrededor del 94 % y el pico plasmático se observa en las 1,5 horas siguientes a la toma del comprimido.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'La biodisponibilidad absoluta es de alrededor del 94 % y el pico plasmático se observa en las 1,5 horas siguientes a la toma del comprimido.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The absolute bioavailability of riociguat is about 94%. Peak plasma riociguat concentrations were observed within 1.5 hours after tablet intake',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no afectan a la biodisponibilidad.',
          ref: { f: 'dailymed-riociguat', sec: '12.3 · Farmacocinética', cita: 'Food does not affect the bioavailability of riociguat', codigo: '43682-4' }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Se une en alrededor de un 95 % a las proteínas del plasma, sobre todo a la albúmina sérica y la glicoproteína ácida α1; el volumen de distribución en estado estacionario es de unos 30 L.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Se une en alrededor de un 95 % a las proteínas del plasma, sobre todo a la albúmina sérica y la glicoproteína ácida α1; el volumen de distribución en estado estacionario es de unos 30 L.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Plasma protein binding in humans is approximately 95%, with serum albumin and α1–acidic glycoprotein being the main binding components',
            codigo: '43682-4'
          }
        },
        {
          t: 'Volumen de distribución en estado estacionario de unos 30 L.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The volume of distribution at steady state is approximately 30 L',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Guanilato ciclasa soluble (GCs)',
        efecto: 'Estimula la vía óxido nítrico-guanilato ciclasa soluble-GMPc y aumenta la producción de GMPc, con la consiguiente vasodilatación.',
        lugar: [ 'vasos', 'pulmones', 'corazon' ],
        datos: [
          {
            t: 'Estimula la vía óxido nítrico-guanilato ciclasa soluble-GMPc y aumenta la producción de GMPc, con la consiguiente vasodilatación.',
            ref: {
              f: 'dailymed-riociguat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Riociguat stimulates the NO-sGC-cGMP pathway and leads to increased generation of cGMP with subsequent vasodilation',
              codigo: '43679-0'
            }
          },
          {
            t: 'Tiene un doble mecanismo: sensibiliza la enzima al óxido nítrico endógeno estabilizando su unión y además la estimula directamente por otro sitio de unión.',
            ref: {
              f: 'dailymed-riociguat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'Riociguat has a dual mode of action. It sensitizes sGC to endogenous NO by stabilizing the NO-sGC binding',
              codigo: '43679-0'
            }
          },
          {
            t: 'La guanilato ciclasa soluble es una enzima del sistema cardiopulmonar y el receptor del óxido nítrico.',
            ref: {
              f: 'dailymed-riociguat',
              sec: '12.1 · Mecanismo de acción',
              cita: 'an enzyme in the cardiopulmonary system and the receptor for nitric oxide (NO)',
              codigo: '43679-0'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se elimina sobre todo por metabolismo mediante CYP1A1, CYP3A4, CYP3A5 y CYP2J2.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se elimina sobre todo por metabolismo mediante CYP1A1, CYP3A4, CYP3A5 y CYP2J2.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Riociguat is mainly cleared through metabolism by CYP1A1, CYP3A4, CYP3A5 and CYP2J2',
            codigo: '43682-4'
          }
        },
        {
          t: 'La CYP1A1, inducible por los hidrocarburos aromáticos policíclicos del humo del tabaco, forma el metabolito activo principal, M1.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'Formation of the major active metabolite, M1, is catalyzed by CYP1A1, which is inducible by polycyclic aromatic hydrocarbons such as those present in cigarette smoke',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'M1',
          actividad: 'activo',
          nota: 'Metabolito activo principal; después se transforma en un N-glucurónido inactivo.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'M1 is further metabolized to the inactive N-glucuronide',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras una dosis oral marcada en personas sanas, alrededor del 40 % de la radiactividad se recuperó en la orina y el 53 % en las heces; en la mayoría, los metabolitos fueron lo principal de lo excretado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras una dosis oral marcada en personas sanas, alrededor del 40 % de la radiactividad se recuperó en la orina y el 53 % en las heces; en la mayoría, los metabolitos fueron lo principal de lo excretado.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'about 40 and 53% of the total radioactivity was recovered in urine and feces, respectively',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación terminal es de unas 12 horas en pacientes y de 7 horas en sujetos sanos.',
          ref: {
            f: 'dailymed-riociguat',
            sec: '12.3 · Farmacocinética',
            cita: 'The terminal elimination half-life is about 12 hours in patients and 7 hours in healthy subjects',
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
      valor: '94 (aprox.)',
      unidad: '%',
      analito: 'riociguat',
      ref: { f: 'dailymed-riociguat', sec: '12.3 · Farmacocinética', cita: 'The absolute bioavailability of riociguat is about 94%', codigo: '43682-4' }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico plasmático',
      valor: '≤ 1,5',
      unidad: 'h',
      analito: 'riociguat',
      ref: {
        f: 'dailymed-riociguat',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma riociguat concentrations were observed within 1.5 hours after tablet intake',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen de distribución en estado estacionario',
      valor: '30 (aprox.)',
      unidad: 'L',
      analito: 'riociguat',
      ref: {
        f: 'dailymed-riociguat',
        sec: '12.3 · Farmacocinética',
        cita: 'The volume of distribution at steady state is approximately 30 L',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '95 (aprox.)',
      unidad: '%',
      analito: 'riociguat',
      ref: { f: 'dailymed-riociguat', sec: '12.3 · Farmacocinética', cita: 'Plasma protein binding in humans is approximately 95%', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación terminal',
      valor: '12 (aprox.)',
      unidad: 'h',
      analito: 'riociguat',
      poblacion: 'pacientes',
      ref: {
        f: 'dailymed-riociguat',
        sec: '12.3 · Farmacocinética',
        cita: 'The terminal elimination half-life is about 12 hours in patients and 7 hours in healthy subjects',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'aclaramiento',
      nombre: 'Aclaramiento sistémico medio',
      valor: '1,8 (aprox.)',
      unidad: 'L/h',
      analito: 'riociguat',
      poblacion: 'pacientes con hipertensión arterial pulmonar',
      ref: {
        f: 'dailymed-riociguat',
        sec: '12.3 · Farmacocinética',
        cita: 'Average systemic clearance of riociguat was about 1.8 L/h in patients with PAH',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Radiactividad recuperada en la orina',
      valor: '40 (aprox.)',
      unidad: '% de la dosis',
      analito: 'radiactividad total',
      poblacion: 'personas sanas',
      condiciones: 'dosis oral marcada',
      ref: {
        f: 'dailymed-riociguat',
        sec: '12.3 · Farmacocinética',
        cita: 'about 40 and 53% of the total radioactivity was recovered in urine and feces, respectively',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-riociguat', '7b57509a-3d5d-41d4-8fed-1471e26372a3', 'ADEMPAS (RIOCIGUAT) TABLET, FILM COATED', 'Adempas', '32', '2026-08-19', '2026-11-18'),
    rengPubchem(11304743, 'riociguat', '2026-11-18')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
