import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'acebutolol',
    nombre: 'Acebutolol',
    clase: 'Betabloqueante cardioselectivo con actividad simpaticomimética intrínseca leve',
    sinonimos: [ 'acebutolol', 'Sectral' ],
    formula: 'C18H28N2O4',
    masaMolar: 336.4,
    smiles: 'CCCC(=O)NC1=CC(=C(C=C1)OCC(CNC(C)C)O)C(=O)C',
    inchikey: 'GOEMGAFJFRBGGG-UHFFFAOYSA-N',
    cid: 1978,
    iupac: 'N-[3-acetyl-4-[2-hydroxy-3-(propan-2-ylamino)propoxy]phenyl]butanamide',
    area: 'Cardiovascular'
  },
  presentaciones: [
    {
      id: 'acebutolol-oral',
      producto: 'Acebutolol Hydrochloride · cápsula',
      titular: 'ANI PHARMACEUTICALS, INC.',
      mercado: 'EE. UU.',
      forma: 'Cápsula',
      formaFuente: 'CAPSULE',
      liberacion: 'no declarada',
      concentraciones: '200 mg o 400 mg por cápsula, según la etiqueta',
      sal: {
        nombre: 'Clorhidrato de acebutolol',
        ref: { f: 'dailymed-acebutolol', sec: '11 · Descripción', cita: 'Acebutolol hydrochloride', codigo: '34089-3' }
      },
      excipientes: [
        'starch, corn',
        'povidone k30',
        'palmitostearic acid',
        'fd&c blue no. 1',
        'fd&c red no. 40',
        'titanium dioxide',
        'ferrosoferric oxide',
        'ferric oxide yellow',
        'sodium lauryl sulfate',
        'gelatin, unspecified',
        'carboxymethylcellulose',
        'shellac',
        'ammonia',
        'propylene glycol',
        'potassium hydroxide'
      ],
      usos: {
        t: 'Tratamiento de la hipertensión en adultos, solo o con otros antihipertensivos, y de arritmias ventriculares.',
        ref: {
          f: 'dailymed-acebutolol',
          sec: '1 · Indicaciones',
          cita: 'Acebutolol Hydrochloride Capsules USP are indicated for the management of hypertension in adults',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-acebutolol',
      advertencias: [
        {
          titulo: 'Insuficiencia cardíaca',
          texto: 'En la contractilidad miocárdica disminuida, el bloqueo beta puede precipitar una insuficiencia más grave.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-acebutolol',
            sec: 'Advertencias',
            cita: 'Sympathetic stimulation may be essential for support of the circulation in individuals with diminished myocardial contractility, and its inhibition by β-adrenergic receptor blockade may precipitate more severe failure',
            codigo: '34071-1'
          }
        }
      ],
      reacciones: [
        [
          'Se tolera bien; la mayoría de las reacciones han sido leves, no han obligado a dejar el tratamiento y tienden a disminuir con el tiempo.',
          '34084-4',
          'Most adverse reactions have been mild, not required discontinuation of therapy, and tended to decrease as duration of treatment increases'
        ],
        [
          'La tabla de reacciones procede de los ensayos controlados.',
          '34084-4',
          'The following table shows the frequency of treatment-related side effects derived from controlled clinical trials'
        ]
      ],
      familia: 'solido-oral',
      vias: [ 'oral' ],
      formaNormalizada: 'capsula'
    }
  ],
  resumen: {
    contiene: 'Cápsula: 200 mg o 400 mg por cápsula, según la etiqueta; el activo va como clorhidrato de acebutolol. Los excipientes no son el principio activo.',
    usos: 'Tratamiento de la hipertensión en adultos, solo o con otros antihipertensivos, y de arritmias ventriculares.',
    actua: 'Bloqueante cardioselectivo de los receptores beta-adrenérgicos con una actividad simpaticomimética intrínseca leve.',
    recorrido: 'Se absorbe bien en el tubo digestivo, pero un primer paso hepático extenso deja una biodisponibilidad absoluta de alrededor del 40 %; el pico llega a las 2,5 horas (3,5 horas su metabolito diacetolol). La eliminación renal supone entre el 30 % y el 40 % y la no renal entre el 50 % y el 60 %, que incluye la excreción a la bilis y el paso directo a través de la pared intestinal.'
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
          ref: { f: 'dailymed-acebutolol', sec: '12.3 · Farmacocinética', cita: 'Acebutolol is well absorbed from the GI tract', codigo: '43682-4' }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe bien en el tubo digestivo, pero un primer paso hepático extenso deja una biodisponibilidad absoluta de alrededor del 40 %; el pico llega a las 2,5 horas (3,5 horas su metabolito diacetolol).',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe bien en el tubo digestivo, pero un primer paso hepático extenso deja una biodisponibilidad absoluta de alrededor del 40 %; el pico llega a las 2,5 horas (3,5 horas su metabolito diacetolol).',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'It is subject to extensive first-pass hepatic biotransformation, with an absolute bioavailability of approximately 40% for the parent compound',
            codigo: '43682-4'
          }
        },
        {
          t: 'El pico se alcanza a las 2,5 horas para el acebutolol y a las 3,5 horas para el diacetolol.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The time to reach peak concentration for acebutolol is 2.5 hours and for diacetolol, after oral administration of acebutolol, 3.5 hours',
            codigo: '43682-4'
          }
        },
        {
          t: 'Los alimentos no cambian el AUC de forma significativa, aunque reducen algo la velocidad de absorción y el pico.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Food intake does not have a significant effect on the area under the plasma concentration-time curve (AUC) of acebutolol although the rate of absorption and peak concentration decreased slightly',
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
      ocurre: 'Tiene una afinidad baja por las proteínas del plasma (alrededor del 26 %); como es relativamente hidrófilo, solo pasan cantidades mínimas al líquido cefalorraquídeo.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Tiene una afinidad baja por las proteínas del plasma (alrededor del 26 %); como es relativamente hidrófilo, solo pasan cantidades mínimas al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Acebutolol has a low binding affinity for plasma proteins (about 26%)',
            codigo: '43682-4'
          }
        },
        {
          t: 'Por ser relativamente hidrófilos, el acebutolol y el diacetolol apenas pasan al líquido cefalorraquídeo.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Acebutolol and its metabolite, diacetolol, are relatively hydrophilic and, therefore, only minimal quantities have been detected in the cerebrospinal fluid (CSF)',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Receptor adrenérgico beta-1',
        efecto: 'Bloqueante cardioselectivo de los receptores beta-adrenérgicos con una actividad simpaticomimética intrínseca leve.',
        lugar: [ 'corazon' ],
        datos: [
          {
            t: 'Bloqueante cardioselectivo de los receptores beta-adrenérgicos con una actividad simpaticomimética intrínseca leve.',
            ref: {
              f: 'dailymed-acebutolol',
              sec: '12 · Farmacología clínica',
              cita: 'Acebutolol is a cardioselective, β-adrenoreceptor blocking agent, which possesses mild intrinsic sympathomimetic activity (ISA) in its therapeutically effective dose range',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Sufre una biotransformación hepática de primer paso extensa; su metabolito principal, el derivado N-acetilado diacetolol, es farmacológicamente activo.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Sufre una biotransformación hepática de primer paso extensa; su metabolito principal, el derivado N-acetilado diacetolol, es farmacológicamente activo.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'It is subject to extensive first-pass hepatic biotransformation',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Diacetolol (N-acetil)',
          actividad: 'activo',
          nota: 'Metabolito activo, de igual potencia que el acebutolol; su semivida es de 8 a 13 horas.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'This metabolite is equipotent to acebutolol and in cats is more cardioselective than acebutolol',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'bilis' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'La eliminación renal supone entre el 30 % y el 40 % y la no renal entre el 50 % y el 60 %, que incluye la excreción a la bilis y el paso directo a través de la pared intestinal.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'La eliminación renal supone entre el 30 % y el 40 % y la no renal entre el 50 % y el 60 %, que incluye la excreción a la bilis y el paso directo a través de la pared intestinal.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'Elimination via renal excretion is approximately 30% to 40% and by nonrenal mechanisms 50% to 60%, which includes excretion into the bile and direct passage through the intestinal wall',
            codigo: '43682-4'
          }
        },
        {
          t: 'La semivida de eliminación plasmática es de unas 3 a 4 horas para el acebutolol y de 8 a 13 horas para el diacetolol.',
          ref: {
            f: 'dailymed-acebutolol',
            sec: '12.3 · Farmacocinética',
            cita: 'The plasma elimination half-life of acebutolol is approximately 3 to 4 hours, while that of its metabolite, diacetolol, is 8 to 13 hours',
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
      valor: '40 (aprox.)',
      unidad: '%',
      analito: 'acebutolol',
      ref: {
        f: 'dailymed-acebutolol',
        sec: '12.3 · Farmacocinética',
        cita: 'with an absolute bioavailability of approximately 40% for the parent compound',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2,5',
      unidad: 'h',
      analito: 'acebutolol',
      ref: {
        f: 'dailymed-acebutolol',
        sec: '12.3 · Farmacocinética',
        cita: 'The time to reach peak concentration for acebutolol is 2.5 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas plasmáticas',
      valor: '26 (aprox.)',
      unidad: '%',
      analito: 'acebutolol',
      ref: {
        f: 'dailymed-acebutolol',
        sec: '12.3 · Farmacocinética',
        cita: 'Acebutolol has a low binding affinity for plasma proteins (about 26%)',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación plasmática',
      valor: '3-4 (aprox.)',
      unidad: 'h',
      analito: 'acebutolol',
      ref: {
        f: 'dailymed-acebutolol',
        sec: '12.3 · Farmacocinética',
        cita: 'The plasma elimination half-life of acebutolol is approximately 3 to 4 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'otra',
      nombre: 'Eliminación por excreción renal',
      valor: '30-40 (aprox.)',
      unidad: '%',
      analito: 'acebutolol',
      ref: {
        f: 'dailymed-acebutolol',
        sec: '12.3 · Farmacocinética',
        cita: 'Elimination via renal excretion is approximately 30% to 40%',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-acebutolol', '48bded12-09c7-47f2-b162-ec970a77f2d8', 'ACEBUTOLOL HYDROCHLORIDE CAPSULE', 'Acebutolol Hydrochloride', '6', '2025-11-17', '2026-11-19'),
    rengPubchem(1978, 'acebutolol', '2026-11-19')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
